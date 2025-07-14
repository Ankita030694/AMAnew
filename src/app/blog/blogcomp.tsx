'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase'; // Make sure you have this file set up with your Firebase config
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

// Define animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const hoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.03,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    transition: { type: 'spring', stiffness: 400 }
  }
};

// Helper function to truncate text to a specific number of words
const truncateWords = (text: string, wordCount: number) => {
  // Remove HTML tags
  const strippedText = text.replace(/<[^>]*>/g, ' ');
  const words = strippedText.split(/\s+/);
  if (words.length <= wordCount) return strippedText;
  return words.slice(0, wordCount).join(' ') + '...';
};

// Helper function to validate and provide fallback for images
const getValidImageSrc = (imageSrc: string | undefined | null): string => {
  if (!imageSrc || imageSrc.trim() === '') {
    return '/images/placeholder-blog.jpg'; // Fallback image
  }
  
  // If it's a Firebase Storage URL, add error handling
  if (imageSrc.includes('firebasestorage.googleapis.com') || imageSrc.includes('firebasestorage.app')) {
    // Add token refresh parameter to handle permission issues
    const url = new URL(imageSrc);
    url.searchParams.set('alt', 'media');
    return url.toString();
  }
  
  return imageSrc;
};

// Helper function to check if image src is valid
const hasValidImage = (imageSrc: string | undefined | null): boolean => {
  return !!(imageSrc && imageSrc.trim() !== '');
};

// Add new function to handle image loading errors
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  if (target.src !== '/images/placeholder-blog.jpg') {
    target.src = '/images/placeholder-blog.jpg';
  }
};

// Define the Blog interface
interface Blog {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string; // Changed from optional to required
}

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true); // Add scroll lock state
  
  // URL state management
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(() => {
    const pageParam = searchParams.get('page');
    return pageParam ? parseInt(pageParam, 10) : 1;
  });
  
  const blogsPerPage = 8;

  // Add scroll to top on component mount (when navigating back from detail page)
  useEffect(() => {
    // Disable browser scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Scroll to top immediately when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Prevent any scrolling for the first 2 seconds
    const preventScroll = (e: Event) => {
      if (scrollLocked) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };
    
    window.addEventListener('scroll', preventScroll, { passive: false });
    
    // Release scroll lock after 2 seconds
    const lockTimeout = setTimeout(() => {
      setScrollLocked(false);
      window.removeEventListener('scroll', preventScroll);
    }, 2000);
    
    // Handle browser back/forward navigation
    const handlePopState = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
    };
    
    // Listen for browser navigation
    window.addEventListener('popstate', handlePopState);
    
    // Also handle page visibility change (when user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 0);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Handle focus events (when user clicks back to tab/window)
    const handleFocus = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
    };
    
    window.addEventListener('focus', handleFocus);
    
    // Additional scroll to top after a short delay to override any async scroll restoration
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      clearTimeout(timeoutId);
      clearTimeout(lockTimeout);
      setScrollLocked(false);
      
      // Re-enable scroll restoration when leaving the component
      if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [scrollLocked]);

  // Update URL when page changes
  const updateURL = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    const newUrl = params.toString() ? `?${params.toString()}` : '';
    router.push(`/blog${newUrl}`, { scroll: false });
  };

  // Sync state with URL changes
  useEffect(() => {
    const pageParam = searchParams.get('page');
    const newPage = pageParam ? parseInt(pageParam, 10) : 1;
    if (newPage !== currentPage && newPage > 0) {
      setCurrentPage(newPage);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const blogsQuery = query(blogsCollection, orderBy('created', 'desc'));
        const querySnapshot = await getDocs(blogsQuery);
        
        const blogsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          
          return {
            id: doc.id,
            title: data.title || '',
            subtitle: data.subtitle || '',
            description: truncateWords(data.description || '', 20),
            date: data.date || '',
            image: data.image || '',
            created: data.created || Date.now(),
            metaTitle: data.metaTitle || '',
            metaDescription: data.metaDescription || '',
            slug: data.slug || '' // Use slug directly from database
          };
        });
        
        setBlogs(blogsData);
        setLoading(false);
        
        // Ensure scroll to top after blogs are loaded
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 0);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
        
        // Ensure scroll to top even on error
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 0);
      }
    };

    fetchBlogs();
  }, []);

  // Helper function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array: Blog[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Get spotlight article (most recent)
  const spotlightArticle = blogs.length > 0 ? blogs[0] : null;
  
  // Get trending articles (all blogs in random order, limited to 20)
  const trendingArticles = blogs.length > 1 ? shuffleArray(blogs).slice(0, 20) : [];
  
  // Get regular articles (excluding spotlight)
  const regularArticles = blogs.length > 0 ? blogs.slice(1) : [];
  
  // Pagination logic for regular articles
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = regularArticles.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(regularArticles.length / blogsPerPage);

  // Smart pagination - show limited page numbers with ellipsis
  const getPageNumbers = () => {
    const maxVisiblePages = 7;
    const mobileMaxPages = 5;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const maxPages = isMobile ? mobileMaxPages : maxVisiblePages;

    if (totalPages <= maxPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfVisible = Math.floor(maxPages / 2);
    
    if (currentPage <= halfVisible + 1) {
      return [...Array.from({ length: maxPages - 2 }, (_, i) => i + 1), '...', totalPages];
    }
    
    if (currentPage >= totalPages - halfVisible) {
      return [1, '...', ...Array.from({ length: maxPages - 2 }, (_, i) => totalPages - (maxPages - 3) + i)];
    }
    
    return [
      1,
      '...',
      ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i),
      '...',
      totalPages
    ];
  };

  const paginate = async (pageNumber: number) => {
    if (pageNumber === currentPage || pageNumber < 1 || pageNumber > totalPages) return;
    
    setPaginationLoading(true);
    setCurrentPage(pageNumber);
    updateURL(pageNumber);
    
    // Smooth scroll to content area
    setTimeout(() => {
      const blogSection = document.querySelector('[data-blog-content]');
      if (blogSection) {
        blogSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      setPaginationLoading(false);
    }, 100);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, pageNumber: number | string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (typeof pageNumber === 'number') {
        paginate(pageNumber);
      }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      {/* Page Title */}
      <motion.h1 
        className="text-4xl md:text-5xl text-center font-serif mb-8 mt-20"
        style={{ color: '#5A4C33' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Blog
      </motion.h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-8 h-8 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg text-gray-600">Loading blogs...</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-blog-content>
          {/* Main Content (2/3 width on large screens) */}
          <div className="lg:col-span-2">
            {/* Spotlight Section */}
            {spotlightArticle && (
              <div className="mb-12">
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  
                  <h2 className="text-xl font-medium" style={{ color: '#5A4C33' }}>Spotlight</h2>
                </motion.div>
                
                <Link href={`/blog/${spotlightArticle.slug}`}>
                  <motion.div 
                    className="rounded-xl overflow-hidden border border-gray-100"
                    variants={hoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <div className="relative h-64 md:h-80">
                      {hasValidImage(spotlightArticle.image) ? (
                        <Image
                          src={getValidImageSrc(spotlightArticle.image)}
                          alt={`${spotlightArticle.title} - AMA Legal Solutions | Legal Insights India`}
                          width={400}
                          height={250}
                          className="w-full h-full object-cover rounded-t-lg"
                          loading="lazy"
                          quality={85}
                          title={`${spotlightArticle.title} | AMA Legal Solutions Blog`}
                          onError={handleImageError}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg">
                          <div className="text-center">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-400 text-sm">No image available</p>
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-white rounded px-2 py-1 text-xs uppercase text-blue-600">
                        {spotlightArticle.date}
                      </div>
                    </div>
                    
                    <div className="relative bg-white p-4"> {/* Added pt-2 to create space between image and text */}
                      <h3 className="text-xl font-medium mb-1" style={{ color: '#5A4C33' }}>
                        {spotlightArticle.title}
                      </h3>
                      <p className="text-sm text-blue-600 mb-1">{spotlightArticle.subtitle}</p>
                      <p className="text-sm text-gray-600">{spotlightArticle.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            )}
            
            {/* Articles Section */}
            <div className="mb-8">
              <motion.div 
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-medium" style={{ color: '#5A4C33' }}>
                    Blogs {regularArticles.length > 0 && (
                      <span className="text-sm text-gray-500 font-normal">
                        ({regularArticles.length} articles)
                      </span>
                    )}
                  </h2>
                </div>
                
                <Link href="/blog">
                  <span className="text-sm text-gray-500 flex items-center">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" className="ml-1">
                      <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </span>
                </Link>
              </motion.div>
              
              {/* Loading overlay for pagination */}
              <div className="relative">
                {paginationLoading && (
                  <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10 rounded-xl">
                    <div className="w-6 h-6 border-2 border-[#D2A02A] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key={currentPage} // Re-animate when page changes
                >
                  {currentBlogs.map((article) => (
                    <motion.div 
                      key={article.id}
                      variants={itemVariants}
                    >
                      <Link href={`/blog/${article.slug}`}>
                        <motion.div 
                          className="rounded-xl overflow-hidden border border-gray-100 h-full"
                          variants={hoverVariants}
                          initial="initial"
                          whileHover="hover"
                          
                        >
                          <div className="relative h-48">
                            {hasValidImage(article.image) ? (
                              <Image
                                src={getValidImageSrc(article.image)}
                                alt={`${article.title} - AMA Legal Solutions | Legal Insights India`}
                                width={400}
                                height={250}
                                className="w-full h-full object-cover rounded-t-lg"
                                loading="lazy"
                                quality={85}
                                title={`${article.title} | AMA Legal Solutions Blog`}
                                onError={handleImageError}
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-t-lg">
                                <div className="text-center">
                                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <p className="text-gray-400 text-xs">No image</p>
                                </div>
                              </div>
                            )}
                            <div className="absolute bottom-3 right-3 bg-white rounded px-2 py-1 text-xs uppercase text-blue-600">
                              {article.date}
                            </div>
                          </div>
                          
                          <div className="p-4 relative bg-white">
                            <h3 className="text-lg font-medium mb-2" style={{ color: '#5A4C33' }}>
                              {article.title}
                            </h3>
                            <p className="text-sm mb-2 text-blue-600">{article.subtitle}</p>
                            <p className="text-sm text-gray-500">{article.description}</p>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Pagination Controls */}
              {totalPages > 1 && (
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Pagination Info */}
                  <div className="text-center mb-4 text-sm text-gray-600">
                    Showing {indexOfFirstBlog + 1} to {Math.min(indexOfLastBlog, regularArticles.length)} of {regularArticles.length} articles
                  </div>
                  
                  {/* Pagination Controls */}
                  <nav 
                    className="flex flex-wrap justify-center items-center gap-1 sm:gap-2"
                    role="navigation"
                    aria-label="Blog pagination"
                  >
                    {/* First Page Button (mobile hidden) */}
                    {currentPage > 3 && totalPages > 7 && (
                      <>
                        <button
                          onClick={() => paginate(1)}
                          className="hidden sm:flex px-3 py-2 rounded text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          aria-label="Go to first page"
                        >
                          First
                        </button>
                        <span className="hidden sm:block text-gray-400">...</span>
                      </>
                    )}
                    
                    {/* Previous Button */}
                    <button 
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-2 rounded text-sm transition-colors ${
                        currentPage === 1 
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      aria-label="Go to previous page"
                    >
                      <span className="hidden sm:inline">Previous</span>
                      <span className="sm:hidden">←</span>
                    </button>
                    
                    {/* Page Numbers */}
                    {getPageNumbers().map((number, index) => (
                      <React.Fragment key={index}>
                        {number === '...' ? (
                          <span className="px-2 py-2 text-gray-400" aria-hidden="true">...</span>
                        ) : (
                          <button
                            onClick={() => paginate(number as number)}
                            onKeyDown={(e) => handleKeyDown(e, number)}
                            className={`w-10 h-10 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:ring-opacity-50 ${
                              currentPage === number 
                                ? 'bg-[#5A4C33] text-white shadow-md' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            aria-label={`Go to page ${number}`}
                            aria-current={currentPage === number ? 'page' : undefined}
                          >
                            {number}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                    
                    {/* Next Button */}
                    <button 
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-2 rounded text-sm transition-colors ${
                        currentPage === totalPages 
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      aria-label="Go to next page"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <span className="sm:hidden">→</span>
                    </button>
                    
                    {/* Last Page Button (mobile hidden) */}
                    {currentPage < totalPages - 2 && totalPages > 7 && (
                      <>
                        <span className="hidden sm:block text-gray-400">...</span>
                        <button
                          onClick={() => paginate(totalPages)}
                          className="hidden sm:flex px-3 py-2 rounded text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          aria-label="Go to last page"
                        >
                          Last
                        </button>
                      </>
                    )}
                  </nav>
                  
                  {/* Quick Jump (desktop only) */}
                  {totalPages > 10 && (
                    <div className="hidden lg:flex justify-center mt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Jump to page:</span>
                        <input
                          type="number"
                          min="1"
                          max={totalPages}
                          value={currentPage}
                          onChange={(e) => {
                            const page = parseInt(e.target.value, 10);
                            if (page >= 1 && page <= totalPages) {
                              paginate(page);
                            }
                          }}
                          className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-[#D2A02A] focus:ring-opacity-50"
                          aria-label="Jump to specific page"
                        />
                        <span>of {totalPages}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Sidebar (1/3 width on large screens) */}
          <div className="lg:col-span-1">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#D2A02A" stroke="#D2A02A" strokeWidth="1.5">
                  <path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.27L9.61 8.26L12 2z" />
                </svg>
                <h2 className="text-xl font-medium" style={{ color: '#5A4C33' }}>Trending</h2>
              </div>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {trendingArticles.map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                  >
                    <Link href={`/blog/${article.slug}`}>
                      <motion.div 
                        className="flex gap-4 p-2 rounded-lg" 
                        variants={hoverVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                          {hasValidImage(article.image) ? (
                            <Image 
                              src={getValidImageSrc(article.image)}
                              alt={`${article.title} - AMA Legal Solutions | Legal Insights India`}
                              width={80}
                              height={80}
                              className="object-cover"
                              onError={handleImageError}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium mb-1" style={{ color: '#5A4C33' }}>
                            {article.title}
                          </h3>
                          <p className="text-xs text-gray-500">{article.date}</p>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
       {/* Styled Disclaimer Section */}
       <motion.div 
          className="my-12 px-6 py-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-[#5A4C33] text-xl font-medium mb-4 text-center">Disclaimer</h3>
          <div className="text-gray-700 text-sm leading-relaxed space-y-4">
            <p>
              The information provided on this website www.amalegalsolutions.com is for general informational purposes only
              and should not be considered legal, financial, or professional advice. While we strive to ensure that the content is accurate and
              up to date, we do not guarantee the completeness, reliability, or accuracy of any information.
            </p>
            <p>
              Any reliance you place on the information provided is strictly at your own risk. AMA Legal
              Solutions, its founders, employees, or affiliates shall be held liable for any losses, damages, or legal consequences arising from
              the use of this website or any linked resources.
            </p>
            <p>
              The content on this website does not establish a client-attorney relationship. If you
              require legal or financial assistance, we strongly recommend consulting with a qualified professional. Any discussions,
              consultations, or assessments provided through this website or related services are for preliminary guidance only.
            </p>
            <p>
              Our services are subject to applicable laws and regulations, and results may vary depending on individual circumstances. We do not guarantee specific
              outcomes for loan settlements, debt negotiations, or legal proceedings.
            </p>
            <p>
              Additionally, this website may contain links to
              third-party websites for additional information or reference. We do not endorse or assume responsibility for the content, privacy
              policies, or practices of these external websites.
            </p>
            <p className="font-medium">
              By using this website, you acknowledge and agree to this disclaimer. If you do not agree with any part of this notice, please refrain from using our
              services. For legal assistance or inquiries, please contact us at <a href="mailto:Info@amalegalsolutions.com" className="text-[#D2A02A] hover:underline">Info@amalegalsolutions.com</a>
            </p>
          </div>
        </motion.div>
    </div>
  );
}
'use client'
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useSearchParams, useRouter } from 'next/navigation';
import Script from 'next/script';
import dynamic from 'next/dynamic';

// Remove problematic dynamic import - use motion directly for better performance

// Define animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const hoverVariants: Variants = {
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

// Enhanced cache with TTL for better performance
const blogsCache = new Map<string, { data: Blog[]; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Helper function to check if cache entry is valid
const isCacheValid = (timestamp: number) => {
  return Date.now() - timestamp < CACHE_TTL;
};

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false); // Reduced scroll lock time
  const [webPageSchema, setWebPageSchema] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // URL state management
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(() => {
    const pageParam = searchParams.get('page');
    return pageParam ? parseInt(pageParam, 10) : 1;
  });
  
  const blogsPerPage = 8;

  // Optimized search functionality with useMemo
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
    
    if (!query.trim()) {
      setFilteredBlogs(blogs);
      return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const filtered = blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.subtitle.toLowerCase().includes(searchTerm) ||
      blog.description.toLowerCase().includes(searchTerm)
    );
    
    setFilteredBlogs(filtered);
  }, [blogs]);

  // Debounced search to improve performance
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, blogs]);

  // Function to generate dynamic FAQ schema based on blogs data
  const generateBlogFaqSchema = (blogsData: Blog[]) => {
    // Create FAQ questions based on blog content
    const blogFaqs = [
      {
        question: "What legal topics does AMA Legal Solutions cover in their blog?",
        answer: `Our blog covers a comprehensive range of legal topics including ${blogsData.slice(0, 5).map(blog => blog.title.toLowerCase()).join(', ')} and more. We provide insights on current legal developments, case studies, and practical legal advice for individuals and businesses in India.`
      },
      {
        question: "How often is the blog updated with new content?",
        answer: `We regularly update our blog with fresh, relevant legal content. Currently featuring ${blogsData.length} articles covering various legal topics. Our team of experienced lawyers and legal experts publish articles on current legal developments, case law updates, regulatory changes, and practical legal guidance.`
      },
      {
        question: "Can I use the information from the blog as legal advice?",
        answer: "While our blog provides valuable legal insights and information, it should not be considered as formal legal advice. The content is for general informational purposes only. For specific legal matters, we strongly recommend consulting with our qualified legal professionals who can provide personalized advice based on your unique circumstances and applicable laws."
      },
      {
        question: "How can I contact AMA Legal Solutions for legal consultation?",
        answer: "You can contact AMA Legal Solutions for legal consultation through multiple channels. Visit our website at www.amalegalsolutions.com, email us at notify@amalegalsolutions.com, or call our office directly. Our experienced legal team is available to discuss your legal needs and provide professional legal services tailored to your requirements."
      },
      {
        question: "Do you provide legal services across all major cities in India?",
        answer: "Yes, AMA Legal Solutions provides legal services across major cities in India. Our network of experienced lawyers and legal professionals allows us to serve clients nationwide. We offer both in-person consultations and remote legal services, ensuring accessibility and convenience for our clients regardless of their location."
      },
      {
        question: "What types of legal documents can AMA Legal Solutions help me with?",
        answer: "AMA Legal Solutions can help you with a wide range of legal documents including contracts, agreements, legal notices, corporate documentation, property documents, intellectual property filings, and various other legal instruments. Our drafting services ensure that your documents are legally sound, comprehensive, and enforceable in courts of law."
      }
    ];

    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Legal Blog - AMA Legal Solutions | Legal Insights & Articles India",
      "description": `Stay informed with the latest legal insights, case studies, and legal developments in India. AMA Legal Solutions blog provides expert legal articles on ${blogsData.slice(0, 3).map(blog => blog.title.toLowerCase()).join(', ')} and more.`,
      "url": "https://amalegalsolutions.com/blog",
      "mainEntity": {
        "@type": "FAQPage",
        "name": "Legal Blog FAQs",
        "description": "Frequently asked questions about AMA Legal Solutions blog, legal articles, and legal services in India",
        "mainEntity": blogFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    };
  };

  // Simplified scroll management for better performance
  useEffect(() => {
    // Simple scroll to top on mount
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

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
      const cacheKey = 'all-blogs';
      
      // Check cache first
      const cached = blogsCache.get(cacheKey);
      if (cached && isCacheValid(cached.timestamp)) {
        setBlogs(cached.data);
        setFilteredBlogs(cached.data);
        setLoading(false);
        setWebPageSchema(generateBlogFaqSchema(cached.data));
        return;
      }

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
        
        // Cache the result
        blogsCache.set(cacheKey, { data: blogsData, timestamp: Date.now() });
        
        setBlogs(blogsData);
        setFilteredBlogs(blogsData);
        setLoading(false);
        setWebPageSchema(generateBlogFaqSchema(blogsData));
        
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
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

  // Memoized calculations for better performance
  const { spotlightArticle, trendingArticles, regularArticles, currentBlogs, totalPages } = useMemo(() => {
    // Get spotlight article (most recent from filtered results)
    const spotlight = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
    
    // Get trending articles (all filtered blogs in random order, limited to 20)
    const trending = filteredBlogs.length > 1 ? shuffleArray(filteredBlogs).slice(0, 20) : [];
    
    // Get regular articles (excluding spotlight)
    const regular = filteredBlogs.length > 0 ? filteredBlogs.slice(1) : [];
    
    // Pagination logic for regular articles
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const current = regular.slice(indexOfFirstBlog, indexOfLastBlog);
    const total = Math.ceil(regular.length / blogsPerPage);
    
    return {
      spotlightArticle: spotlight,
      trendingArticles: trending,
      regularArticles: regular,
      currentBlogs: current,
      totalPages: total
    };
  }, [filteredBlogs, currentPage, blogsPerPage]);

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
    <div className="container mx-auto px-4 py-8">
      {/* Schema.org FAQ Markup for SEO */}
      {webPageSchema && (
        <Script
          id="blog-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema)
          }}
        />
      )}
      
      {/* Page Title */}
      <h1 
        className="text-[32px] md:text-[65px] font-semibold text-center mb-[80px] mt-[120px] leading-[40px] md:leading-[65px] opacity-100"
        style={{ color: '#5A4C33', fontFamily: "var(--font-polysans)" }}
        id="blog-page-title"
      >
        Legal Blogs | Expert Opinions by AMA Legal Solutions
      </h1>

      {/* Search Bar */}
      <motion.div 
        className="max-w-2xl mx-auto mb-[80px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search blogs by title, subtitle, or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-black block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-[#D2A02A] focus:border-[#D2A02A] transition-colors"
            aria-label="Search blogs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label="Clear search"
            >
              <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        
        {/* Search Results Info */}
        {searchQuery && (
          <motion.div 
            className="mt-3 text-center text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {filteredBlogs.length === 0 ? (
              <p>No blogs found matching "<span className="font-medium">{searchQuery}</span>"</p>
            ) : filteredBlogs.length === blogs.length ? (
              <p>Showing all {blogs.length} blogs</p>
            ) : (
              <p>Found {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''} matching "<span className="font-medium">{searchQuery}</span>"</p>
            )}
          </motion.div>
        )}
      </motion.div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-8 h-8 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg text-gray-600">Loading blogs...</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[80px]" data-blog-content>
          {/* Main Content (2/3 width on large screens) */}
          <div className="lg:col-span-2">
            {/* Spotlight Section - Only show if there are search results */}
            {spotlightArticle && (
              <div className="mb-[80px]">
                <motion.div
                  className="flex items-center gap-2 mb-[35px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  
                  <h2 className="text-[26px] md:text-[52px] font-semibold leading-[32px] md:leading-[52px] opacity-100" style={{ color: '#5A4C33' }}>
                    {searchQuery ? 'Search Result' : 'Spotlight'}
                  </h2>
                </motion.div>
                
                <Link href={`/blog/${spotlightArticle.slug}`} prefetch={true}>
                  <motion.div 
                    className="rounded-xl overflow-hidden border border-gray-100"
                    variants={hoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <div className="relative h-64 md:h-80">
                      {hasValidImage(spotlightArticle.image) ? (
                        <img
                          src={getValidImageSrc(spotlightArticle.image)}
                          alt={`${spotlightArticle.title} - AMA Legal Solutions | Legal Insights India`}
                          className="w-full h-full object-cover rounded-t-lg"
                          loading="lazy"
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
                    
                    <div className="relative bg-white p-6"> {/* Added pt-2 to create space between image and text */}
                      <h3 className="text-[24px] md:text-[27px] font-normal leading-[31px] mb-[15px] opacity-85" style={{ color: '#5A4C33' }}>
                        {spotlightArticle.title}
                      </h3>
                      <p className="text-sm text-blue-600 mb-[15px] max-w-none">{spotlightArticle.subtitle}</p>
                      <p className="text-[16px] md:text-[25px] leading-[24px] md:leading-[29px] font-normal text-gray-600 opacity-85">{spotlightArticle.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            )}
            
            {/* Articles Section */}
            <div className="mb-[80px]">
              <motion.div 
                className="flex items-center justify-between mb-[35px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <h2 className="text-[26px] md:text-[52px] font-semibold leading-[32px] md:leading-[52px] opacity-100" style={{ color: '#5A4C33' }}>
                    {searchQuery ? 'Search Results' : 'Blogs'} {regularArticles.length > 0 && (
                      <span className="text-[20px] md:text-[22px] text-gray-500 font-normal opacity-85 ml-4">
                        ({regularArticles.length} articles)
                      </span>
                    )}
                  </h2>
                </div>
                
                {!searchQuery && (
                  <Link href="/blog">
                    <span className="text-sm text-gray-500 flex items-center">
                      Read More
                      <svg width="16" height="16" viewBox="0 0 24 24" className="ml-1">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </span>
                  </Link>
                )}
              </motion.div>
              
              {/* No Results Message */}
              {searchQuery && filteredBlogs.length === 0 && (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-600 mb-2">No blogs found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search terms or browse all our blogs</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-4 py-2 bg-[#5A4C33] text-white rounded-lg hover:bg-[#4A3C23] transition-colors"
                  >
                    Clear Search
                  </button>
                </motion.div>
              )}
              
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
                      <Link href={`/blog/${article.slug}`} prefetch={true}>
                        <motion.div 
                          className="rounded-xl overflow-hidden border border-gray-100 h-full"
                          variants={hoverVariants}
                          initial="initial"
                          whileHover="hover"
                          
                        >
                          <div className="relative h-48">
                            {hasValidImage(article.image) ? (
                              <img
                                src={getValidImageSrc(article.image)}
                                alt={`${article.title} - AMA Legal Solutions | Legal Insights India`}
                                className="w-full h-full object-cover rounded-t-lg"
                                loading="lazy"
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
                          
                          <div className="p-6 relative bg-white">
                            <h3 className="text-[24px] md:text-[27px] leading-[31px] font-normal mb-[15px] opacity-85" style={{ color: '#5A4C33' }}>
                              {article.title}
                            </h3>
                            <p className="text-sm mb-2 text-blue-600">{article.subtitle}</p>
                            <p className="text-[16px] md:text-[18px] text-gray-500 opacity-85">{article.description}</p>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Pagination Controls - Only show if there are results */}
              {totalPages > 1 && filteredBlogs.length > 0 && (
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Pagination Info */}
                  <div className="text-center mb-4 text-sm text-gray-600">
                    Showing {(currentPage - 1) * blogsPerPage + 1} to {Math.min(currentPage * blogsPerPage, regularArticles.length)} of {regularArticles.length} articles
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
              className="mb-[80px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-[35px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#D2A02A" stroke="#D2A02A" strokeWidth="1.5">
                  <path d="M12 2L14.39 8.26L21 9.27L16.5 14.14L17.77 21L12 17.77L6.23 21L7.5 14.14L3 9.27L9.61 8.26L12 2z" />
                </svg>
                <h2 className="text-[26px] md:text-[52px] font-semibold leading-[32px] md:leading-[52px] opacity-100" style={{ color: '#5A4C33' }}>
                  {searchQuery ? 'Related' : 'Trending'}
                </h2>
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
                    <Link href={`/blog/${article.slug}`} prefetch={true}>
                      <motion.div 
                        className="flex gap-4 p-2 rounded-lg" 
                        variants={hoverVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                          {hasValidImage(article.image) ? (
                            <img 
                              src={getValidImageSrc(article.image)}
                              alt={`${article.title} - AMA Legal Solutions | Legal Insights India`}
                              className="w-full h-full object-cover"
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
              services. For legal assistance or inquiries, please contact us at <a href="mailto:notify@amalegalsolutions.com" className="text-[#D2A02A] hover:underline">notify@amalegalsolutions.com</a>
            </p>
          </div>
        </motion.div>
    </div>
  );
}
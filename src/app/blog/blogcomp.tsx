'use client'
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useSearchParams, useRouter } from 'next/navigation';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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

// Calculate estimated read time based on description length
const getEstimatedReadTime = (text: string) => {
  if (!text) return "3 min read";
  const words = text.split(/\s+/).length;
  // Assume description is a summary, multiply by 5 for full article estimation, 200 words/min
  const readTime = Math.max(3, Math.ceil((words * 5) / 200));
  return `${readTime} min read`;
};

// Define the Blog interface
export interface Blog {
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

interface BlogPageProps {
  initialBlogs: Blog[];
  currentPage: number;
  totalBlogs: number;
}

export default function Page({ initialBlogs = [], currentPage, totalBlogs }: BlogPageProps) {
  const [loading, setLoading] = useState(false);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [webPageSchema, setWebPageSchema] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // URL state management
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const blogsPerPage = 7;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const blogs = initialBlogs;
  const filteredBlogs = initialBlogs;

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
        answer: "You can contact AMA Legal Solutions for legal consultation through multiple channels. Visit our website at https://www.amalegalsolutions.com, email us at notify@amalegalsolutions.com, or call our office directly. Our experienced legal team is available to discuss your legal needs and provide professional legal services tailored to your requirements."
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
      "url": "https://www.amalegalsolutions.com/blog",
      "mainEntity": {
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

  // Set schema on mount
  useEffect(() => {
    if (initialBlogs.length > 0) {
      setWebPageSchema(generateBlogFaqSchema(initialBlogs));
    }
  }, []);

  // Simplified scroll management for better performance

  // Force scroll to top on mount and ensure browser doesn't restore scroll position
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Store original restoration preference
      const originalRestoration = window.history.scrollRestoration;
      // Set to manual to prevent browser from restoring position
      window.history.scrollRestoration = 'manual';
      // Force scroll to top immediately
      window.scrollTo(0, 0);

      return () => {
        // Restore original preference on cleanup
        window.history.scrollRestoration = originalRestoration;
      };
    }
  }, []);

  // Ensure we are at the top when content loads
  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);
  const updateURL = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    const newUrl = params.toString() ? `?${params.toString()}` : '';
    router.push(`/blog${newUrl}`, { scroll: false });
  };

  // Turn off loading state when the server responds with the new page
  useEffect(() => {
    setPaginationLoading(false);
  }, [currentPage]);



  // Memoized calculations for better performance
  const { spotlightArticle, trendingArticles, regularArticles, currentBlogs } = useMemo(() => {
    // Get spotlight article (most recent from current page)
    const spotlight = blogs.length > 0 ? blogs[0] : null;
    
    // Get trending articles (we use the current page blogs for the sidebar)
    const trending = blogs;
    
    // Get regular articles (excluding spotlight)
    const regular = blogs.length > 0 ? blogs.slice(1) : [];
    
    return {
      spotlightArticle: spotlight,
      trendingArticles: trending,
      regularArticles: regular,
      currentBlogs: regular,
    };
  }, [blogs]);

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
    <>
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
      


      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-8 h-8 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg text-gray-600">Loading blogs...</p>
          </div>
        </div>
      ) : (
        <div className="max-w-[1400px] mx-auto w-full" data-blog-content>
          
          {/* Spotlight Section (Split Layout) */}
          {spotlightArticle && (
            <div className="mb-[80px]">
              <Link href={`/blog/${spotlightArticle.slug}`} className="block group">
                <motion.div 
                  className="flex flex-col md:flex-row w-full bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Left: Image */}
                  <div className="relative w-full md:w-1/2 h-[350px] md:h-[500px] overflow-hidden">
                    {hasValidImage(spotlightArticle.image) ? (
                      <Image
                        src={getValidImageSrc(spotlightArticle.image)}
                        alt={`${spotlightArticle.title} - AMA Legal Solutions`}
                        className="object-contain w-full h-full transition-transform duration-1000 group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={true}
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-[#5A4C33] shadow-md flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      {getEstimatedReadTime(spotlightArticle.description)}
                    </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-white">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-[#D2A02A]/10 text-[#D2A02A] text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                        Spotlight Feature
                      </span>
                      <span className="text-gray-400 font-medium text-sm tracking-wider uppercase">
                        {spotlightArticle.date}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-[#30261C] leading-[1.1] mb-6 group-hover:text-[#D2A02A] transition-colors duration-300" style={{ fontFamily: "var(--font-polysans)" }}>
                      {spotlightArticle.title}
                    </h2>
                    
                    <p className="text-gray-500 text-lg md:text-xl line-clamp-3 mb-10 leading-relaxed">
                      {spotlightArticle.description}
                    </p>
                    
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-3 text-[#30261C] font-semibold text-lg group-hover:text-[#D2A02A] transition-colors">
                        Read Full Story 
                        <span className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#D2A02A]/10 transition-colors">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          )}
          
          {/* Articles Section (Clean 3-Column Grid) */}
          <div className="mb-[60px]">
            <motion.div 
              className="flex items-center justify-between mb-[40px] pb-6 border-b border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-[32px] font-bold text-[#30261C] m-0 leading-none" style={{ fontFamily: "var(--font-polysans)" }}>
                Latest Insights
              </h2>
            </motion.div>

            {/* Loading overlay for pagination */}
            <div className="relative">
              {paginationLoading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
                  <div className="w-8 h-8 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={currentPage} 
              >
                {currentBlogs.map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                    className="h-full"
                  >
                    <Link href={`/blog/${article.slug}`} className="block group h-full">
                      <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:-translate-y-1">
                        <div className="relative h-60 w-full overflow-hidden">
                          {hasValidImage(article.image) ? (
                            <Image
                              src={getValidImageSrc(article.image)}
                              alt={`${article.title} - AMA Legal Solutions`}
                              className="object-contain transition-transform duration-700 group-hover:scale-105"
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              onError={handleImageError}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                          )}
                          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 text-[11px] font-bold text-[#5A4C33] shadow-sm flex items-center gap-1.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            {getEstimatedReadTime(article.description)}
                          </div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[11px] font-bold text-[#D2A02A] uppercase tracking-wider">{article.subtitle || "Legal Insight"}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">{article.date}</span>
                          </div>
                          
                          <h3 className="text-[22px] leading-snug font-semibold mb-3 text-[#30261C] group-hover:text-[#D2A02A] transition-colors" style={{ fontFamily: "var(--font-polysans)" }}>
                            {article.title}
                          </h3>
                          
                          <p className="text-[15px] leading-relaxed text-gray-500 mb-6 flex-grow line-clamp-3">
                            {article.description}
                          </p>

                          <div className="mt-auto flex items-center text-sm font-bold text-[#5A4C33] group-hover:text-[#D2A02A] transition-colors">
                            Read Article 
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Full Width CTA Banner Replacing Sidebar */}
          <motion.div 
            className="mb-16 bg-gradient-to-r from-[#5A4C33] via-[#433825] to-[#30261C] rounded-3xl p-10 md:p-14 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background glowing effect */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D2A02A] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-polysans)" }}>
                Need clear, actionable legal advice?
              </h3>
              <p className="text-lg text-white/80 font-light">
                Our expert legal team provides tailored strategies to protect your rights and assets in India, UK & Dubai.
              </p>
            </div>
            
            <div className="shrink-0 relative z-10 w-full md:w-auto">
              <Link href="/contact" className="flex items-center justify-center gap-3 bg-[#D2A02A] hover:bg-white text-[#30261C] font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg w-full md:w-auto hover:-translate-y-1">
                Schedule Consultation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </motion.div>

          {/* Enhanced Pagination Controls */}
          {totalPages > 1 && filteredBlogs.length > 0 && (
            <motion.div 
              className="mb-16 border-t border-gray-200 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center mb-6 text-sm text-gray-500 tracking-wide">
                Showing {(currentPage - 1) * blogsPerPage + 1} to {Math.min(currentPage * blogsPerPage, regularArticles.length)} of {regularArticles.length} insights
              </div>
              
              <nav className="flex flex-wrap justify-center items-center gap-2" role="navigation" aria-label="Blog pagination">
                <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${currentPage === 1 ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : 'bg-white border border-gray-200 text-[#30261C] hover:border-[#D2A02A] hover:text-[#D2A02A] shadow-sm'}`}
                  aria-label="Previous page"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                
                {getPageNumbers().map((number, index) => (
                  <React.Fragment key={index}>
                    {number === '...' ? (
                      <span className="px-2 text-gray-400" aria-hidden="true">...</span>
                    ) : (
                      <button
                        onClick={() => paginate(number as number)}
                        onKeyDown={(e) => handleKeyDown(e, number)}
                        className={`w-12 h-12 rounded-full text-[15px] font-semibold transition-all ${currentPage === number ? 'bg-[#30261C] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                        aria-label={`Page ${number}`}
                        aria-current={currentPage === number ? 'page' : undefined}
                      >
                        {number}
                      </button>
                    )}
                  </React.Fragment>
                ))}
                
                <button 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${currentPage === totalPages ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : 'bg-white border border-gray-200 text-[#30261C] hover:border-[#D2A02A] hover:text-[#D2A02A] shadow-sm'}`}
                  aria-label="Next page"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </nav>
            </motion.div>
          )}
        </div>
      )}
       {/* Styled Disclaimer Section */}
       <motion.div 
          className="my-12 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button 
            onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
            className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#5A4C33]/10 flex items-center justify-center text-[#5A4C33]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-[#30261C] text-lg font-bold m-0" style={{ fontFamily: "var(--font-polysans)" }}>Disclaimer</h3>
            </div>
            <div className={`w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#5A4C33] transition-transform duration-300 ${isDisclaimerOpen ? 'rotate-180' : ''}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </button>
          
          <AnimatePresence>
            {isDisclaimerOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-8 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500 text-[13px] leading-relaxed font-medium">
                    <div className="space-y-4">
                      <p>
                        <strong className="text-[#5A4C33] block mb-1">General Information Only</strong>
                        The information provided on this website https://www.amalegalsolutions.com is for general informational purposes only
                        and should not be considered legal, financial, or professional advice. While we strive to ensure that the content is accurate and
                        up to date, we do not guarantee the completeness, reliability, or accuracy of any information.
                      </p>
                      <p>
                        <strong className="text-[#5A4C33] block mb-1">No Attorney-Client Relationship</strong>
                        The content on this website does not establish a client-attorney relationship. If you
                        require legal or financial assistance, we strongly recommend consulting with a qualified professional. Any discussions,
                        consultations, or assessments provided through this website or related services are for preliminary guidance only.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p>
                        <strong className="text-[#5A4C33] block mb-1">Limitation of Liability</strong>
                        Any reliance you place on the information provided is strictly at your own risk. AMA Legal
                        Solutions, its founders, employees, or affiliates shall be held liable for any losses, damages, or legal consequences arising from
                        the use of this website or any linked resources. Our services are subject to applicable laws and regulations, and results may vary depending on individual circumstances. We do not guarantee specific outcomes for loan settlements, debt negotiations, or legal proceedings.
                      </p>
                      <p>
                        <strong className="text-[#5A4C33] block mb-1">Acceptance of Terms</strong>
                        By using this website, you acknowledge and agree to this disclaimer. If you do not agree with any part of this notice, please refrain from using our services. For legal assistance or inquiries, please contact us at <a href="mailto:notify@amalegalsolutions.com" className="text-[#D2A02A] hover:underline font-bold">notify@amalegalsolutions.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
    </>
  );
}
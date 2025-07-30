'use client'
import { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';

// Define the Blog interface
interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string; 
  subtitle?: string;
  created?: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  faqs?: FAQ[];
  author?: string;
}

// Add FAQ interface
interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Add this interface for props
interface BlogDetailProps {
  slug: string;
}

// Cache for blog data and related blogs
const blogCache = new Map<string, any>();
const relatedBlogsCache = new Map<string, any>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Define author bios
const authorBios = {
  "Anuj Anand Malik": {
    name: "Anuj Anand Malik",
    description: "Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability. As a member of the Bar Council of India, Bar Council of Delhi, MCIA, and IACC, Anuj delivers trusted, business-focused legal solutions backed by professional credibility.",
    image: "/anujbhiya.svg",
    linkedInUrl: "https://www.linkedin.com/in/iamanujmalik/"
  },
  "Shrey Arora": {
    name: "Shrey Arora",
    description: "Legal professional specializing in corporate law and regulatory compliance. Brings a strategic approach to legal advisory with extensive experience in contract negotiation and business law.",
    image: "/shreychad.svg",
    linkedInUrl: "https://www.linkedin.com/in/shrey-arora-b0487b67/"
  }
};

// Helper function to get cached blog data
const getCachedBlog = async (slug: string): Promise<Blog | null> => {
  const cacheKey = `blog-${slug}`;
  const cached = blogCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  try {
    // Use a more efficient query to get only the specific blog
    const blogsCollection = collection(db, "blogs");
    const blogQuery = query(blogsCollection, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(blogQuery);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      const blogData = {
        id: doc.id,
        ...data
      } as Blog;
      
      // Cache the result
      blogCache.set(cacheKey, {
        data: blogData,
        timestamp: Date.now()
      });
      
      return blogData;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

// Helper function to get cached related blogs
const getCachedRelatedBlogs = async (excludeId: string): Promise<Blog[]> => {
  const cacheKey = `related-blogs-${excludeId}`;
  const cached = relatedBlogsCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  try {
    // Get a limited number of recent blogs for better performance
    const blogsCollection = collection(db, "blogs");
    const relatedQuery = query(
      blogsCollection, 
      orderBy("created", "desc"), 
      limit(10)
    );
    const querySnapshot = await getDocs(relatedQuery);
    
    const allBlogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Blog[];
    
    // Filter out the current blog and get 3 random ones
    const otherBlogs = allBlogs.filter(b => b.id !== excludeId);
    const shuffledBlogs = shuffleArray(otherBlogs);
    const relatedBlogs = shuffledBlogs.slice(0, 3);
    
    // Cache the result
    relatedBlogsCache.set(cacheKey, {
      data: relatedBlogs,
      timestamp: Date.now()
    });
    
    return relatedBlogs;
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
};

// Helper function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array: Blog[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Memoized Related Blog Component
const RelatedBlogItem = memo(({ blog }: { blog: Blog }) => (
  <Link href={`/blog/${blog.slug}`}>
    <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden">
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            width={64}
            height={64}
            className="object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-[#5A4C33] line-clamp-2">
          {blog.title}
        </h4>
        <p className="text-xs text-gray-500 mt-1">{blog.date}</p>
      </div>
    </div>
  </Link>
));

RelatedBlogItem.displayName = 'RelatedBlogItem';

// Memoized FAQ Item Component
const FAQItem = memo(({ faq, isExpanded, onToggle }: { 
  faq: FAQ; 
  isExpanded: boolean; 
  onToggle: () => void; 
}) => (
  <div className="border border-gray-200 rounded-lg">
    <button
      onClick={onToggle}
      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
    >
      <span className="font-medium text-[#5A4C33]">{faq.question}</span>
      <svg
        className={`w-5 h-5 text-gray-500 transition-transform ${
          isExpanded ? 'rotate-180' : ''
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isExpanded && (
      <div className="px-4 pb-3 text-gray-600">
        {faq.answer}
      </div>
    )}
  </div>
));

FAQItem.displayName = 'FAQItem';

// Loading Skeleton Component
const LoadingSkeleton = memo(() => (
  <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
    {/* Header Skeleton */}
    <div className="w-full bg-[#5A4C33] text-center py-8 md:py-12">
      <div className="container mx-auto px-4 mt-12 md:mt-16 max-w-4xl">
        <div className="h-8 md:h-12 bg-[#D2A02A] rounded animate-pulse mb-4"></div>
        <div className="h-4 md:h-6 bg-[#D2A02A] rounded animate-pulse mb-4 w-3/4 mx-auto"></div>
        <div className="h-1 w-20 md:w-24 bg-[#D2A02A] rounded-full mx-auto"></div>
      </div>
    </div>
    
    {/* Content Skeleton */}
    <div className="container mx-auto px-4 py-6 md:py-8 max-w-5xl">
      <div className="flex flex-col lg:flex-row lg:gap-6">
        {/* Main Content Skeleton */}
        <div className="flex-1 lg:pr-6">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
          </div>
        </div>
        
        {/* Sidebar Skeleton */}
        <div className="lg:w-80 mt-8 lg:mt-0">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex space-x-3">
                  <div className="w-16 h-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

LoadingSkeleton.displayName = 'LoadingSkeleton';

// Optimized Image Component
const OptimizedImage = memo(({ src, alt, className, priority = false }: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
}) => (
  <Image
    src={src}
    alt={alt}
    fill
    className={className}
    priority={priority}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    quality={85}
    loading={priority ? 'eager' : 'lazy'}
  />
));

OptimizedImage.displayName = 'OptimizedImage';

function ArticleDetail({ slug }: BlogDetailProps) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  // Memoized helper functions to avoid recreating on every render
  const getRandomBlog = useCallback(() => {
    if (relatedBlogs.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * relatedBlogs.length);
    return relatedBlogs[randomIndex];
  }, [relatedBlogs]);

  const getRandomBlogsForSegments = useCallback((segmentCount: number) => {
    if (relatedBlogs.length === 0) return [];
    const shuffledBlogs = shuffleArray(relatedBlogs);
    const result = [];
    for (let i = 0; i < segmentCount; i++) {
      result.push(shuffledBlogs[i % shuffledBlogs.length]);
    }
    return result;
  }, [relatedBlogs]);

  // Helper function to render clickable subtitle segments
  const renderClickableSubtitle = useCallback((subtitle: string) => {
    const segments = subtitle.split('|').map(segment => segment.trim()).filter(segment => segment.length > 0);
    
    // If no related blogs are loaded yet, show blue text without links
    if (relatedBlogs.length === 0) {
      return (
        <div className="text-base md:text-lg">
          {segments.map((segment, index) => (
            <span key={index}>
              <span className="text-blue-400">{segment}</span>
              {index < segments.length - 1 && (
                <span className="text-white mx-2">|</span>
              )}
            </span>
          ))}
        </div>
      );
    }
    
    const randomBlogs = getRandomBlogsForSegments(segments.length);
    
    return (
      <div className="text-base md:text-lg">
        {segments.map((segment, index) => (
          <span key={index}>
            <Link href={`/blog/${randomBlogs[index]?.slug}`} className="text-blue-400 hover:text-blue-300 transition-colors">
              {segment}
            </Link>
            {index < segments.length - 1 && (
              <span className="text-white mx-2">|</span>
            )}
          </span>
        ))}
      </div>
    );
  }, [relatedBlogs, getRandomBlogsForSegments]);

  // Memoize author bio to avoid recalculation
  const authorBio = useMemo(() => {
    return blog?.author ? authorBios[blog.author as keyof typeof authorBios] : null;
  }, [blog?.author]);

  // Optimized data fetching with caching
  useEffect(() => {
    // Disable browser scroll restoration for better UX
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        
        // Fetch the main blog data using cache
        const blogData = await getCachedBlog(slug);
        
        if (blogData) {
          setBlog(blogData);
          
          // Fetch related blogs in parallel
          const relatedBlogsData = await getCachedRelatedBlogs(blogData.id);
          setRelatedBlogs(relatedBlogsData);
          
          // Fetch FAQs only if blog exists
          try {
            const faqsSnapshot = await getDocs(collection(db, 'blogs', blogData.id, 'faqs'));
            const faqsData = faqsSnapshot.docs.map(doc => ({
              id: doc.id,
              question: doc.data().question || '',
              answer: doc.data().answer || ''
            }));
            setFaqs(faqsData);
          } catch (faqError) {
            console.error("Error fetching FAQs:", faqError);
            setFaqs([]);
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchBlogData();
    }
    
    // Set current URL for sharing
    setCurrentUrl(window.location.href);
    
    // Cleanup: restore scroll restoration when component unmounts
    return () => {
      if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [slug]);

  // Toggle FAQ expansion
  const toggleFaq = useCallback((faqId: string) => {
    setExpandedFaqs(prev => 
      prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  }, []);

  // Function to handle social media sharing
  const handleShare = useCallback((platform: string) => {
    const title = blog?.title || 'Check out this blog post';
    let shareUrl = '';

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }

    // Open in a new window
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }, [blog?.title, currentUrl]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-[#5A4C33] text-white rounded-lg hover:bg-[#4A3C23] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Header Banner */}
      <div className="w-full bg-[#5A4C33] text-center py-8 md:py-12">
        <div className="container mx-auto px-4 mt-12 md:mt-16 max-w-4xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D2A02A] mb-2 md:mb-3 leading-tight">
            {blog.title}
          </h1>
          {blog.subtitle && (
            <div className="mt-2 md:mt-3 max-w-3xl mx-auto">
              {renderClickableSubtitle(blog.subtitle)}
            </div>
          )}
          <div className="flex justify-center items-center mt-3 md:mt-4">
            <div className="bg-[#D2A02A] h-1 w-20 md:w-24 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:gap-6">
          {/* Main Content */}
          <div className="flex-1 lg:pr-6">
            {/* Article Image */}
            {blog.image && (
              <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] mb-4 md:mb-6">
                <OptimizedImage 
                  src={blog.image}
                  alt={`${blog.title} - AMA Legal Solutions`}
                  className="object-cover"
                  priority={true}
                />
              </div>
            )}
            
            {/* Article Content */}
            <article className="prose prose-lg max-w-none mb-8">
              <div 
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            </article>

            {/* Author Bio */}
            {authorBio && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={authorBio.image}
                      alt={authorBio.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#5A4C33] mb-2">
                      {authorBio.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {authorBio.description}
                    </p>
                    <a
                      href={authorBio.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#D2A02A] hover:text-[#5A4C33] transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      View on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Social Share */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-gray-600 font-medium">Share this article:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>

            {/* FAQs Section */}
            {faqs.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-[#5A4C33] mb-6">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
                  {faqs.map((faq, index) => (
                    <FAQItem 
                      key={faq.id} 
                      faq={faq} 
                      isExpanded={expandedFaqs.includes(faq.id)} 
                      onToggle={() => toggleFaq(faq.id)} 
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 mt-8 lg:mt-0">
            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-[#5A4C33] mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedBlogs.map((relatedBlog) => (
                    <RelatedBlogItem key={relatedBlog.id} blog={relatedBlog} />
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <Link 
                href="/blog" 
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#5A4C33] text-white rounded-lg hover:bg-[#4A3C23] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ArticleDetail);
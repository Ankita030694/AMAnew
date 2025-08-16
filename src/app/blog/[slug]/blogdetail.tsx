'use client'
import { useEffect, useState, useCallback, memo } from 'react';
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
const blogCache = new Map<string, Blog>();
const relatedBlogsCache = new Map<string, Blog[]>();

// Helper function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array: Blog[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

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

// Optimized function to fetch blog by slug
const fetchBlogBySlug = async (slug: string): Promise<Blog | null> => {
  // Check cache first
  if (blogCache.has(slug)) {
    return blogCache.get(slug)!;
  }

  try {
    const blogsCollection = collection(db, 'blogs');
    const q = query(blogsCollection, where('slug', '==', slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const blogData = { id: doc.id, ...doc.data() } as Blog;
      
      // Cache the result
      blogCache.set(slug, blogData);
      return blogData;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
};

// Optimized function to fetch related blogs
const fetchRelatedBlogs = async (excludeId: string): Promise<Blog[]> => {
  const cacheKey = `related_${excludeId}`;
  
  // Check cache first
  if (relatedBlogsCache.has(cacheKey)) {
    return relatedBlogsCache.get(cacheKey)!;
  }

  try {
    const blogsCollection = collection(db, 'blogs');
    const q = query(
      blogsCollection, 
      orderBy('created', 'desc'), 
      limit(10) // Limit to 10 for better performance
    );
    const querySnapshot = await getDocs(q);
    
    const allBlogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Blog[];
    
    // Filter out current blog and get 3 random ones
    const otherBlogs = allBlogs.filter(blog => blog.id !== excludeId);
    const randomBlogs = shuffleArray(otherBlogs).slice(0, 3);
    
    // Cache the result
    relatedBlogsCache.set(cacheKey, randomBlogs);
    return randomBlogs;
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
};

// Optimized function to fetch FAQs
const fetchFAQs = async (blogId: string): Promise<FAQ[]> => {
  try {
    const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
    return faqsSnapshot.docs.map(doc => ({
      id: doc.id,
      question: doc.data().question || '',
      answer: doc.data().answer || ''
    }));
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};

const ArticleDetail = memo(function ArticleDetail({ slug }: BlogDetailProps) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  // Generate FAQ Schema for Google
  const generateFAQSchema = useCallback((blogFaqs: FAQ[], blogData: Blog) => {
    if (blogFaqs.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": `${blogData.title} - Frequently Asked Questions`,
      "description": `Frequently asked questions about ${blogData.title}`,
      "url": `https://amalegalsolutions.com/blog/${blogData.slug}`,
      "mainEntity": blogFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }, []);

  // Generate comprehensive Article Schema with FAQ
  const generateArticleSchema = useCallback((blogData: Blog, blogFaqs: FAQ[]) => {
    const baseSchema: any = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogData.title,
      "name": blogData.title,
      "description": blogData.metaDescription || blogData.subtitle || blogData.description.replace(/<[^>]*>/g, '').substring(0, 160),
      "url": `https://amalegalsolutions.com/blog/${blogData.slug}`,
      "datePublished": blogData.date,
      "dateModified": blogData.date,
      "author": {
        "@type": "Person",
        "name": blogData.author || "AMA Legal Solutions",
        "url": blogData.author === "Anuj Anand Malik" ? "https://amalegalsolutions.com/author/anuj-anand-malik" : 
              blogData.author === "Shrey Arora" ? "https://amalegalsolutions.com/author/shrey-arora" : 
              "https://amalegalsolutions.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AMA Legal Solutions",
        "url": "https://amalegalsolutions.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://amalegalsolutions.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://amalegalsolutions.com/blog/${blogData.slug}`
      },
      "keywords": blogData.metaTitle || blogData.title,
      "articleSection": "Legal Advice",
      "inLanguage": "en-IN"
    };

    // Add image if available
    if (blogData.image) {
      baseSchema.image = {
        "@type": "ImageObject",
        "url": blogData.image,
        "caption": blogData.title
      };
    }

    // Add FAQ as part of the article if available
    if (blogFaqs.length > 0) {
      baseSchema.mainEntity = {
        "@type": "FAQPage",
        "mainEntity": blogFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
    }

    return baseSchema;
  }, []);

  // Inject FAQ Schema into document head
  const injectFAQSchema = useCallback((schema: any) => {
    if (!schema) return;

    // Remove any existing FAQ schema
    const existingSchema = document.querySelector('script[data-faq-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new FAQ schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);

  // Inject Article Schema into document head
  const injectArticleSchema = useCallback((schema: any) => {
    if (!schema) return;

    // Remove any existing article schema
    const existingSchema = document.querySelector('script[data-article-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new article schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-article-schema', 'true');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);

  // Helper function to get a random blog from related blogs
  const getRandomBlog = useCallback(() => {
    if (relatedBlogs.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * relatedBlogs.length);
    return relatedBlogs[randomIndex];
  }, [relatedBlogs]);

  // Helper function to get different random blogs for each subtitle segment
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

  useEffect(() => {
    // Set current URL for sharing
    setCurrentUrl(window.location.href);
    
    // Disable browser scroll restoration for better UX
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    const loadBlogData = async () => {
      try {
        setLoading(true);
        
        // Fetch blog data using optimized function
        const blogData = await fetchBlogBySlug(slug);
        
        if (blogData) {
          setBlog(blogData);
          
          // Fetch related blogs and FAQs in parallel
          const [relatedBlogsData, faqsData] = await Promise.all([
            fetchRelatedBlogs(blogData.id),
            fetchFAQs(blogData.id)
          ]);
          
          setRelatedBlogs(relatedBlogsData);
          setFaqs(faqsData);

          // Generate and inject FAQ schema
          const faqSchema = generateFAQSchema(faqsData, blogData);
          injectFAQSchema(faqSchema);

          // Generate and inject Article schema
          const articleSchema = generateArticleSchema(blogData, faqsData);
          injectArticleSchema(articleSchema);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error loading blog data:", error);
        setLoading(false);
      }
    };
    
    if (slug) {
      loadBlogData();
    }
    
    // Cleanup: restore scroll restoration when component unmounts
    return () => {
      if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
      
      // Clean up schemas
      const faqSchemaElement = document.querySelector('script[data-faq-schema]');
      if (faqSchemaElement) {
        faqSchemaElement.remove();
      }
      
      const articleSchemaElement = document.querySelector('script[data-article-schema]');
      if (articleSchemaElement) {
        articleSchemaElement.remove();
      }
    };
  }, [slug, generateFAQSchema, injectFAQSchema, generateArticleSchema, injectArticleSchema]);

  // Toggle FAQ expansion
  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev => 
      prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  // Function to handle social media sharing
  const handleShare = (platform: string) => {
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
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 flex items-center justify-center">
        <div className="p-6 rounded-lg shadow-lg bg-white">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border-t-4 border-r-4 border-[#D2A02A] rounded-full animate-spin"></div>
            <p className="text-black font-medium text-sm">Loading your Blog...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 p-6 flex flex-col items-center justify-center">
        <div className="text-center max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-[#5A4C33] mb-3">Article Not Found</h1>
          <p className="text-black mb-4 text-sm">We could not find the blog post you are looking for.</p>
          <Link href="/blog" className="bg-[#D2A02A] text-black px-4 py-2 rounded-md hover:bg-[#5A4C33] hover:text-white transition-all text-sm">
            Return to Blog
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
          
          {/* Main Article Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              {/* Article Metadata */}
              <div className="border-b border-gray-200 px-4 md:px-5 py-3 bg-amber-50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <p className="text-black italic text-sm">
                    Published on: <span className="font-medium">{blog.date}</span>
                  </p>
                  {blog.author && (
                    <p className="text-black text-sm">
                      By: <span className="font-medium text-[#5A4C33]">{blog.author}</span>
                    </p>
                  )}
                </div>
              </div>
              
              {/* Feature Image */}
              {blog.image && (
                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] mb-4 md:mb-6">
                  <Image
                    src={blog.image}
                    alt={`${blog.title} - AMA Legal Solutions`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 50vw"
                    quality={90}
                    loading="eager"
                    title={blog.title}
                    onLoad={(e) => {
                      // Add image to structured data when loaded
                      const img = e.target as HTMLImageElement;
                      const structuredData = {
                        "@context": "https://schema.org",
                        "@type": "ImageObject",
                        "contentUrl": img.src,
                        "name": blog.title,
                        "description": blog.subtitle || blog.description,
                        "caption": blog.title,
                        "representativeOfPage": true
                      };
                      // Add to page's structured data
                      const script = document.createElement('script');
                      script.type = 'application/ld+json';
                      script.text = JSON.stringify(structuredData);
                      document.head.appendChild(script);
                    }}
                  />
                </div>
              )}
              
              {/* Article Content */}
              <div className="p-4 md:p-6 lg:p-7">
                <div 
                  className="prose prose-sm md:prose lg:prose-lg max-w-none text-black tiptap-content" 
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />
                
                {/* Add this style block to handle Tiptap specific styling */}
                <style jsx global>{`
                  .tiptap-content h1 { font-size: 1.75em; font-weight: bold; margin-top: 0.6em; margin-bottom: 0.6em; }
                  .tiptap-content h2 { font-size: 1.4em; font-weight: bold; margin-top: 0.75em; margin-bottom: 0.75em; }
                  .tiptap-content h3 { font-size: 1.15em; font-weight: bold; margin-top: 0.9em; margin-bottom: 0.9em; }
                  .tiptap-content h4 { font-size: 1em; font-weight: bold; margin-top: 1.2em; margin-bottom: 1.2em; }
                  .tiptap-content h5 { font-size: 0.9em; font-weight: bold; margin-top: 1.5em; margin-bottom: 1.5em; }
                  .tiptap-content h6 { font-size: 0.75em; font-weight: bold; margin-top: 2em; margin-bottom: 2em; }
                  
                  .tiptap-content p { margin: 0.8em 0; line-height: 1.6; font-size: 0.95em; }
                  .tiptap-content a { color: #3B82F6; text-decoration: underline; }
                  .tiptap-content blockquote { border-left: 4px solid #D2A02A; margin-left: 0; padding-left: 0.8em; font-style: italic; background-color: #fef3c7; padding: 0.8em; border-radius: 0.4em; }
                  .tiptap-content pre { background-color: #f5f5f5; padding: 0.8em; border-radius: 0.4em; font-family: monospace; overflow-x: auto; font-size: 0.85em; }
                  .tiptap-content code { background-color: rgba(#616161, 0.1); color: #616161; padding: 0.15em 0.3em; border-radius: 0.25em; font-size: 0.9em; }
                  
                  .tiptap-content table { border-collapse: collapse; margin: 1.2em 0; overflow: hidden; table-layout: fixed; width: 100%; box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.1); border-radius: 0.4em; }
                  .tiptap-content table td, .tiptap-content table th { border: 2px solid #ced4da; box-sizing: border-box; min-width: 1em; padding: 6px 10px; position: relative; vertical-align: top; font-size: 0.9em; }
                  .tiptap-content table th { background-color: #5A4C33; color: white; font-weight: bold; text-align: left; }
                  
                  /* List styles - Fixed to show bullets and numbers */
                  .tiptap-content ul { 
                    list-style-type: disc; 
                    padding-left: 1.5em; 
                    margin: 1.2em 0;
                  }
                  .tiptap-content ol { 
                    list-style-type: decimal; 
                    padding-left: 1.5em; 
                    margin: 1.2em 0;
                  }
                  .tiptap-content li { 
                    margin: 0.4em 0; 
                    line-height: 1.5; 
                    font-size: 0.95em;
                    display: list-item;
                  }
                  .tiptap-content ul ul { 
                    list-style-type: circle; 
                    margin: 0.5em 0;
                  }
                  .tiptap-content ul ul ul { 
                    list-style-type: square; 
                    margin: 0.5em 0;
                  }
                  .tiptap-content ol ol { 
                    list-style-type: lower-alpha; 
                    margin: 0.5em 0;
                  }
                  .tiptap-content ol ol ol { 
                    list-style-type: lower-roman; 
                    margin: 0.5em 0;
                  }
                  
                  .tiptap-content hr { border: none; border-top: 2px solid #ced4da; margin: 1.5em 0; }
                  .tiptap-content img { max-width: 100%; height: auto; border-radius: 0.4em; box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.1); }
                  
                  /* Text alignment classes */
                  .tiptap-content .text-left { text-align: left; }
                  .tiptap-content .text-center { text-align: center; }
                  .tiptap-content .text-right { text-align: right; }
                  .tiptap-content .text-justify { text-align: justify; }
                  
                  /* Subscript and superscript */
                  .tiptap-content sub { vertical-align: sub; font-size: smaller; }
                  .tiptap-content sup { vertical-align: super; font-size: smaller; }
                  
                  /* Highlighted text */
                  .tiptap-content mark { background-color: #fef3c7; padding: 0.1em 0.2em; border-radius: 0.2em; }
                  
                  /* Responsive adjustments */
                  @media (min-width: 1024px) {
                    .tiptap-content h1 { font-size: 2em; }
                    .tiptap-content h2 { font-size: 1.6em; }
                    .tiptap-content h3 { font-size: 1.3em; }
                    .tiptap-content p { font-size: 1em; line-height: 1.7; }
                    .tiptap-content li { font-size: 1em; }
                  }
                `}</style>
                
                {/* Share Section */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <span className="text-black font-medium">Share this article:</span>
                      <div className="flex space-x-2 md:space-x-3">
                        <button 
                          onClick={() => handleShare('facebook')}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#5A4C33] text-white flex items-center justify-center hover:bg-[#D2A02A] hover:scale-110 transition-all duration-300 shadow-lg"
                          title="Share on Facebook"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleShare('twitter')}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#5A4C33] text-white flex items-center justify-center hover:bg-[#D2A02A] hover:scale-110 transition-all duration-300 shadow-lg"
                          title="Share on Twitter"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleShare('linkedin')}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#5A4C33] text-white flex items-center justify-center hover:bg-[#D2A02A] hover:scale-110 transition-all duration-300 shadow-lg"
                          title="Share on LinkedIn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar for desktop - Author & Quick Links */}
          <div className="lg:w-1/3 space-y-4 lg:space-y-5">
            {/* Author Bio Sidebar for Desktop */}
            {blog.author && (
              <div className="hidden lg:block bg-white rounded-lg shadow-lg overflow-hidden sticky top-6">
                <div className="bg-[#5A4C33] px-4 py-3">
                  <h3 className="text-lg font-bold text-[#D2A02A]">About the Author</h3>
                </div>
                <div className="p-4">
                  <div className="text-center mb-3">
                    <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden mb-3">
                      <Image 
                        src={authorBios[blog.author as keyof typeof authorBios]?.image || "/default-author.svg"}
                        alt={blog.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Link 
                      href={blog.author === "Anuj Anand Malik" ? "/author/anuj-anand-malik" : 
                            blog.author === "Shrey Arora" ? "/author/shrey-arora" : "/about"}
                      className="hover:text-[#D2A02A] transition-colors"
                    >
                      <h4 className="text-base font-bold text-black mb-2">{blog.author}</h4>
                    </Link>
                  </div>
                  <p className="text-xs text-black leading-relaxed mb-3">
                    {authorBios[blog.author as keyof typeof authorBios]?.description.substring(0, 100) + "..." || 
                      "Legal expert at AMA Legal Solutions."}
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Link 
                      href={blog.author === "Anuj Anand Malik" ? "/author/anuj-anand-malik" : 
                            blog.author === "Shrey Arora" ? "/author/shrey-arora" : "/about"} 
                      className="bg-[#D2A02A] text-black px-3 py-1.5 rounded text-center hover:bg-[#5A4C33] hover:text-white transition-colors text-xs font-medium">
                      View Full Profile
                    </Link>
                    <a 
                      href={authorBios[blog.author as keyof typeof authorBios]?.linkedInUrl || "https://www.linkedin.com/company/ama-legal-solutions/"}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center text-[#5A4C33] hover:text-[#D2A02A] font-medium transition-colors text-xs"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Author Bio - Hidden on desktop */}
        {blog.author && (
          <div className="lg:hidden max-w-3xl mx-auto mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 flex flex-col md:flex-row gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image 
                  src={authorBios[blog.author as keyof typeof authorBios]?.image || "/default-author.svg"}
                  alt={blog.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <Link 
                  href={blog.author === "Anuj Anand Malik" ? "/author/anuj-anand-malik" : 
                        blog.author === "Shrey Arora" ? "/author/shrey-arora" : "/about"}
                  className="hover:text-[#D2A02A] transition-colors"
                >
                  <h3 className="text-lg font-bold text-black mb-2">{blog.author}</h3>
                </Link>
                <p className="text-black mb-3 text-sm">
                  {authorBios[blog.author as keyof typeof authorBios]?.description || 
                    "Legal expert at AMA Legal Solutions specializing in providing comprehensive legal advice and solutions."}
                </p>
                <div className="flex space-x-3">
                  <Link 
                    href={blog.author === "Anuj Anand Malik" ? "/author/anuj-anand-malik" : 
                          blog.author === "Shrey Arora" ? "/author/shrey-arora" : "/about"} 
                    className="bg-[#D2A02A] text-black px-3 py-1 rounded hover:bg-[#5A4C33] hover:text-white transition-colors text-sm font-medium">
                    View Profile
                  </Link>
                  <a 
                    href={authorBios[blog.author as keyof typeof authorBios]?.linkedInUrl || "https://www.linkedin.com/company/ama-legal-solutions/"}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-[#5A4C33] hover:text-[#D2A02A] font-medium transition-colors text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* FAQs Section */}
        {faqs.length > 0 && (
          <div className="max-w-4xl mx-auto mt-6 lg:mt-8 bg-white rounded-lg shadow-lg overflow-hidden" itemScope itemType="https://schema.org/FAQPage">
            <div className="px-4 md:px-5 py-4 border-b border-gray-200 bg-[#5A4C33]">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#D2A02A]">Frequently Asked Questions</h2>
            </div>
            <div className="p-4 md:p-5 lg:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
                {faqs.map((faq, index) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex justify-between items-center w-full text-left p-3 md:p-4 font-medium text-black hover:text-[#D2A02A] hover:bg-amber-50 focus:outline-none transition-all duration-300"
                    >
                      <span className="text-sm md:text-base pr-3" itemProp="name">{faq.question}</span>
                      <span className="flex-shrink-0">
                        {expandedFaqs.includes(faq.id) ? (
                          <svg className="h-4 w-4 md:h-5 md:w-5 text-[#D2A02A] transform rotate-180 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="h-4 w-4 md:h-5 md:w-5 text-[#D2A02A] transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </span>
                    </button>
                    {expandedFaqs.includes(faq.id) && (
                      <div className="px-3 md:px-4 pb-3 md:pb-4 border-t border-gray-100" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                        <p className="text-xs md:text-sm text-black leading-relaxed mt-2" itemProp="text">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <div className="max-w-4xl mx-auto mt-6 lg:mt-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 md:px-5 py-4 border-b border-gray-200 bg-[#5A4C33]">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#D2A02A]">Related Articles</h2>
              </div>
              <div className="p-4 md:p-5 lg:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                  {relatedBlogs.map((article) => (
                    <Link key={article.id} href={`/blog/${article.slug}`}>
                      <div className="group rounded-lg overflow-hidden border border-gray-100 h-full hover:shadow-lg hover:border-[#D2A02A] transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-36 lg:h-40 overflow-hidden">
                          <img 
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded px-1.5 py-0.5 text-xs uppercase text-[#5A4C33] font-semibold">
                            {article.date}
                          </div>
                        </div>
                        <div className="p-3 lg:p-4 relative bg-white">
                          <h3 className="text-sm md:text-base font-semibold mb-1 lg:mb-2 group-hover:text-[#D2A02A] transition-colors duration-300 line-clamp-2" style={{ color: '#5A4C33' }}>
                            {article.title}
                          </h3>
                          {article.subtitle && (
                            <p className="text-xs md:text-sm mb-2 text-blue-600 line-clamp-2">{article.subtitle}</p>
                          )}
                          <div className="flex items-center text-[#D2A02A] group-hover:text-[#5A4C33] transition-colors duration-300">
                            <span className="text-xs font-medium">Read more</span>
                            <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Fixed Contact Button */}
        <div className="fixed bottom-3 right-3 md:bottom-4 md:right-4 z-[999]">
          <Link href="/contact" className="group inline-flex items-center bg-[#D2A02A] text-black font-bold px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-full shadow-2xl hover:bg-[#5A4C33] hover:text-white hover:scale-105 transition-all duration-300">
            <span>Get in Touch</span>
            <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default ArticleDetail;
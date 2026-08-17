'use client'
import { useEffect, useState, useMemo, memo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Breadcrumbs from '../../../components/Breadcrumbs';
import TableOfContents from '../../../components/TableOfContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import BlogCounter from '../../../newcomp/BlogCounter';

// Lazy load heavy components
const LazyImage = dynamic(() => import('next/image'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
});

// Define interfaces
export interface Blog {
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
  author?: string;
  references?: { title: string; url: string }[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
}

interface BlogDetailProps {
  blog: Blog;
  faqs: FAQ[];
  reviews: Review[];
  relatedBlogs: Blog[];
}

// Define author bios
const authorBios = {
  "Anuj Anand Malik": {
    name: "Anuj Anand Malik",
    description: "Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement expert, legal advisor, and banking lawyer. With over a decade of experience in loan settlement, corporate law, financial disputes, and compliance, he leads a result-driven law firm based in India that helps individuals, startups, and businesses achieve legal and financial stability.",
    image: "/anujbhiya.png",
    linkedInUrl: "https://www.linkedin.com/in/iamanujmalik/"
  },
  "Shrey Arora": {
    name: "Shrey Arora",
    description: "Legal professional specializing in corporate law and regulatory compliance. Brings a strategic approach to legal advisory with extensive experience in contract negotiation and business law.",
    image: "/shreychad.svg",
    linkedInUrl: "https://www.linkedin.com/in/shrey-arora-b0487b67/"
  }
};

// Helper to process content and extract TOC
const processContent = (html: string) => {
  const sections: { id: string, title: string }[] = [];
  // Regex to match h2 and h3 tags
  let modifiedContent = html.replace(/<(h[23])(.*?)>(.*?)<\/\1>/g, (match, tag, attrs, title) => {
    // Strip HTML from title for the TOC label
    const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
    // Generate ID from title
    const id = cleanTitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    
    sections.push({ id, title: cleanTitle });
    
    // Check if ID already exists in attrs
    if (attrs.includes('id=')) {
      return match; // Return original if ID exists
    }
    
    return `<${tag} id="${id}"${attrs}>${title}</${tag}>`;
  });

  // Fix known broken links in blog content (from database)
  modifiedContent = modifiedContent
    .replace(/href=["']https:\/\/www\.amalegalsolutions\.com\/services\/legal-strategy["']/gi, 'href="/services"')
    .replace(/href=["']\/services\/legal-strategy["']/gi, 'href="/services"')
    .replace(/href=["']https:\/\/www\.amalegalsolutions\.com\/legal-notice-to-bank-format["']/gi, 'href="/how-can-i-send-legal-notice"')
    .replace(/href=["']\/legal-notice-to-bank-format["']/gi, 'href="/how-can-i-send-legal-notice"')
    .replace(/href=["']https:\/\/www\.amalegalsolutions\.com\/resources["']/gi, 'href="/blog"')
    .replace(/href=["']\/resources["']/gi, 'href="/blog"');

  // Extract and style POPULAR SEARCHES
  modifiedContent = modifiedContent.replace(
    /<h3[^>]*>Popular Searches<\/h3>\s*<ul[^>]*>([\s\S]*?)<\/ul>/ig,
    (match, ulContent) => {
      // Extract all li text
      const keywords = [];
      const liRegex = /<li[^>]*>(.*?)<\/li>/gi;
      let liMatch;
      while ((liMatch = liRegex.exec(ulContent)) !== null) {
        // Strip any inner html from the keyword just in case
        keywords.push(liMatch[1].replace(/<[^>]*>/g, '').trim());
      }
      
      const keywordsHtml = keywords.map(k => 
        `<span class="inline-block px-5 py-2.5 bg-[#F5F2EB] border border-[#D2A02A]/30 rounded-full text-sm font-bold text-[#1a202c] shadow-sm hover:bg-[#D2A02A] hover:text-white transition-colors cursor-default">${k}</span>`
      ).join('\n');
      
      return `
        <div class="mt-12 pt-8 border-t border-gray-100">
          <h3 class="text-sm font-extrabold text-gray-500 uppercase tracking-widest mb-6" style="letter-spacing: 0.1em;">Popular Searches</h3>
          <div class="flex flex-wrap gap-3">
            ${keywordsHtml}
          </div>
        </div>
      `;
    }
  );

  // Strip nofollow from internal links (links to our own domain or relative paths)
  // This prevents SEO tools from flagging our own pages as "blocked by nofollow"
  modifiedContent = modifiedContent.replace(
    /<a\s([^>]*?)>/gi,
    (match, attrs) => {
      const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
      const href = hrefMatch ? hrefMatch[1] : '';
      const isInternal =
        href.startsWith('/') ||
        href.includes('://www.amalegalsolutions.com') ||
        href.includes('://amalegalsolutions.com');

      if (isInternal) {
        // Remove nofollow from rel attribute for internal links
        const cleanedAttrs = attrs.replace(
          /rel=["']([^"']*)["']/gi,
          (relMatch: string, relValue: string) => {
            const newRel = relValue
              .split(/\s+/)
              .filter((r: string) => r.toLowerCase() !== 'nofollow')
              .join(' ')
              .trim();
            return newRel ? `rel="${newRel}"` : '';
          }
        );
        return `<a ${cleanedAttrs}>`;
      }
      return match;
    }
  );
  
  return { content: modifiedContent, sections };
};


const ArticleDetail = memo(function ArticleDetail({ blog, faqs, reviews, relatedBlogs }: BlogDetailProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };
  
  // Process content for TOC
  const { content: processedContent, sections: tocSections } = useMemo(() => {
    return processContent(blog.description);
  }, [blog.description]);

    useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev => 
      prev.includes(faqId)
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const handleShare = (platform: string) => {
    const title = blog.title;
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
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: blog.title, href: `/blog/${blog.slug}` },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pt-20 md:pt-28">
      <div className="container mx-auto px-4 max-w-[1600px]">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* New Asymmetric 12-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col lg:col-span-8">

            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
              {blog.title}
            </h1>
            
            {blog.subtitle && (
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                {blog.subtitle}
              </p>
            )}
            
            {/* Author & Meta Data */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a202c] flex items-center justify-center text-white font-bold text-lg border-2 border-[#D2A02A]">
                  {blog.author ? (
                    <img src={authorBios[blog.author as keyof typeof authorBios]?.image || "/anujbhiya.png"} alt={blog.author} className="w-full h-full object-cover" />
                  ) : (
                    "AM"
                  )}
                </div>
                <div>
                  <p className="font-bold text-[#1a202c] text-base">{blog.author || 'AMA Legal Solutions'}</p>
                  <p className="text-xs text-gray-500">Reviewed by AMA Legal Solutions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                  <span className="text-gray-400">📅</span> {formatDate(blog.date)}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                  <span className="text-gray-400">⏱️</span> 7 Min Read
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
            <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
              {blog.image ? (
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-auto object-contain block"
                />
              ) : (
                <div className="w-full aspect-video bg-gray-200 animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mb-12">
        <BlogCounter />
      </div>

      <div className="container mx-auto px-4 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
          
          {/* Left Sidebar - TOC (Desktop) */}
          <div className="hidden lg:block sticky top-24">
             <TableOfContents sections={tocSections} orientation="vertical" />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile) */}
            <div className="lg:hidden mb-8">
               <TableOfContents sections={tocSections} />
            </div>

            <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
              {/* Meta details & Share */}
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center border-b border-gray-100 pb-6 mb-6 gap-4">
                <div className="text-xs md:text-sm text-gray-500 font-medium">
                  Written by <Link href="/author/anuj-anand-malik" className="text-[#D2A02A] hover:underline font-semibold">Advocate Anuj Anand Malik</Link> &bull; Reviewed by <span className="font-semibold text-gray-700">Team AMA Legal Solutions</span> &bull; Last updated: {formatDate(blog.date)}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs md:text-sm font-bold text-gray-700">Share:</span>
                  <button onClick={() => handleShare('facebook')} className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-blue-700 transition shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </button>
                  <button onClick={() => handleShare('twitter')} className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </button>
                  <button onClick={() => handleShare('linkedin')} className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-blue-800 transition shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 tiptap-content"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Tiptap Styles */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 2em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.8em; color: #1a202c; }
                .tiptap-content h2 { font-size: 1.75em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.8em; color: #1a202c; scroll-margin-top: 100px; }
                .tiptap-content h3 { font-size: 1.5em; font-weight: bold; margin-top: 1.2em; margin-bottom: 0.6em; color: #2d3748; scroll-margin-top: 100px; }
                .tiptap-content p { margin-bottom: 1.2em; line-height: 1.8; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content li { margin-bottom: 0.5em; }
                .tiptap-content blockquote { border-left: 4px solid #D2A02A; padding-left: 1em; font-style: italic; color: #4a5568; background: #fffaf0; padding: 1rem; border-radius: 0.5rem; }
                .tiptap-content img { border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 2rem 0; }
                .tiptap-content a { color: #D2A02A; text-decoration: underline; }
                .tiptap-content table { width: 100%; border-collapse: collapse; margin: 2rem 0; }
                .tiptap-content th { background: #f7fafc; padding: 0.75rem; text-align: left; font-weight: 600; border: 1px solid #e2e8f0; }
                .tiptap-content td { padding: 0.75rem; border: 1px solid #e2e8f0; }
              `}</style>
              
              {/* References Section */}
              {blog.references && blog.references.length > 0 && (
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">References & Authority</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {blog.references.map((ref, idx) => (
                      <li key={idx}>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#D2A02A] underline">
                          {ref.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share Section */}
              <div className="border-t border-gray-200 pt-8 mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">Share this article:</span>
                  <div className="flex space-x-4">
                    <button onClick={() => handleShare('facebook')} className="text-gray-500 hover:text-[#D2A02A] transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('twitter')} className="text-gray-500 hover:text-[#D2A02A] transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="text-gray-500 hover:text-[#D2A02A] transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              {reviews.length > 0 && (
                <section id="reviews" className="scroll-mt-32 border-t border-gray-200 pt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Reviews</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-[#D2A02A] opacity-20 absolute top-4 left-4" />
                        <div className="relative z-10">
                          <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400 mr-2">
                              {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon 
                                  key={i} 
                                  icon={faStar} 
                                  className={i < review.rating ? "text-yellow-400" : "text-gray-300"} 
                                />
                              ))}
                            </div>
                            <span className="font-bold text-gray-900">{review.rating}.0</span>
                          </div>
                          <p className="text-gray-700 italic mb-4">"{review.review}"</p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-3">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                            <p className="font-bold text-gray-900">{review.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs Section */}
              {faqs.length > 0 && (
                <section id="faqs" className="scroll-mt-32 border-t border-gray-200 pt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="flex justify-between items-center w-full text-left p-4 font-medium text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
                        >
                          <span className="flex items-center">
                            <span className="text-[#D2A02A] mr-3 font-bold">Q.</span>
                            {faq.question}
                          </span>
                          <span className={`transform transition-transform duration-200 ${expandedFaqs.includes(faq.id) ? 'rotate-180' : ''}`}>
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </span>
                        </button>
                        {expandedFaqs.includes(faq.id) && (
                          <div className="px-4 pb-4 pt-0 text-gray-700 leading-relaxed pl-10">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <section className="border-t border-gray-200 pt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {relatedBlogs.map((article) => (
                      <Link key={article.id} href={`/blog/${article.slug}`} className="group">
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={article.image || '/placeholder-blog.jpg'} 
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-xs font-bold text-[#5A4C33]">
                              {article.date}
                            </div>
                          </div>
                          <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D2A02A] transition-colors line-clamp-2">
                              {article.title}
                            </h3>
                            {article.subtitle && (
                              <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                                {article.subtitle}
                              </p>
                            )}
                            <span className="text-[#D2A02A] font-medium text-sm flex items-center mt-auto">
                              Read Article <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Right Sidebar - Author & CTA */}
          <div className="space-y-8 sticky top-24">
              {/* Author Card */}
              {blog.author && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">About Author</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={authorBios[blog.author as keyof typeof authorBios]?.image || "/default-author.svg"}
                        alt={blog.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{blog.author}</h4>
                      <Link 
                        href={blog.author === "Anuj Anand Malik" ? "/author/anuj-anand-malik" : 
                              blog.author === "Shrey Arora" ? "/author/shrey-arora" : "/about"}
                        className="text-xs text-[#D2A02A] hover:underline"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                    {authorBios[blog.author as keyof typeof authorBios]?.description}
                  </p>
                  <a 
                    href={authorBios[blog.author as keyof typeof authorBios]?.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2 rounded-lg text-sm font-semibold hover:bg-[#0077b5] hover:text-white transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-[#5A4C33] p-6 rounded-xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">Need Legal Help?</h3>
                <p className="text-gray-200 mb-6 text-sm">
                  Get expert advice on loan settlement and debt relief.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5A4C33] transition-colors"
                >
                  Request Callback
                </Link>
              </div>
            </div>
        </div>
      </div>
      
      {/* Company Section matching @loan-settlement */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-10 mb-4 md:mb-8">
        <div className="border-4 border-[#D2A02A] rounded-2xl p-8 md:p-12 bg-white text-center shadow-2xl relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-4">
             <div className="bg-black p-3 rounded-xl flex items-center justify-center shadow-lg"><img src="/newAssets/logo/ama_box.svg" alt="AMA Legal Solutions Logo" width={60} height={60} className="object-contain" /></div>
          </div>
          <h2 className="text-3xl font-extrabold text-[#5A4C33] mt-4 mb-2 md:mb-4">AMA Legal Solutions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-4 md:mb-8">
            AMA Legal Solutions is India's premium legal advisory firm specializing in financial dispute resolution, debt relief, and civil litigation. We empower our clients with uncompromising legal defense and strategic negotiations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link href="/loan-settlement" className="px-4 md:px-6 py-3 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-base">
              Loan Settlement Services
            </Link>
            <Link href="/send-legal-notice" className="px-4 md:px-6 py-3 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-base">
              Legal Notice Services
            </Link>
            <Link href="/drafting-of-will" className="px-4 md:px-6 py-3 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-base">
              Will Drafting Services
            </Link>
            <Link href="/virtual-inhouse-councel" className="px-4 md:px-6 py-3 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-base">
              Virtual In-house Counsel
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default ArticleDetail;
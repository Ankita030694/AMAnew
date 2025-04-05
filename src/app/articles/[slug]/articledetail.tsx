'use client'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Define the Blog interface
interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string; 
  subtitle?: string;
  created?: number;
  metaTitle?: string;
  metaDescription?: string;
  faqs?: FAQ[];
  author?: string;
}

// Define FAQ interface
interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Define props interface
interface ArticleDetailProps {
  slug: string;
}

// Define the authorBios object (add this near the top of the file, similar to the blog page)
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
  },
  "Research Team AMA": {
    name: "Research Team AMA",
    description: "A dedicated team of legal researchers and analysts at AMA Legal Solutions who specialize in producing in-depth content on emerging legal trends, regulatory developments, and practical legal guidance.",
    image: "/team-research.svg",
    linkedInUrl: "https://www.linkedin.com/company/ama-legal-solutions/"
  },
  "Advocate Team AMA": {
    name: "Advocate Team AMA",
    description: "An experienced group of advocates and legal practitioners at AMA Legal Solutions who provide specialized insights on litigation strategies, case studies, and practical legal procedures.",
    image: "/team-advocate.svg",
    linkedInUrl: "https://www.linkedin.com/company/ama-legal-solutions/"
  }
};

const ArticleDetail: React.FC<ArticleDetailProps> = ({ slug }) => {
  const [blog, setBlog] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  useEffect(() => {
    // Set the current URL when component mounts (client-side only)
    setCurrentUrl(window.location.href);
    
    const fetchArticleBySlug = async () => {
      try {
        // First generate slugs and find matching document
        const articlesCollection = collection(db, 'articles');
        const querySnapshot = await getDocs(articlesCollection);
        let foundArticle = null;
        let articleId = '';
        
        // Use slug field from database instead of generating from title
        querySnapshot.docs.forEach(doc => {
          const data = doc.data();
          // Check if the document has a slug field that matches
          if (data.slug === slug) {
            foundArticle = {
              id: doc.id,
              ...data
            };
            articleId = doc.id;
          }
        });
        
        setBlog(foundArticle);
        
        // If article found, fetch its FAQs from subcollection
        if (articleId) {
          const faqsSnapshot = await getDocs(collection(db, 'articles', articleId, 'faqs'));
          const faqsData = faqsSnapshot.docs.map(doc => ({
            id: doc.id,
            question: doc.data().question || '',
            answer: doc.data().answer || ''
          }));
          setFaqs(faqsData);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchArticleBySlug();
    }
  }, [slug]);

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
        <div className="p-8 rounded-lg shadow-lg bg-white">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 border-t-4 border-r-4 border-[#D2A02A] rounded-full animate-spin"></div>
            <p className="text-black font-medium">Loading your article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 p-8 flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-[#5A4C33] mb-4">Article Not Found</h1>
          <p className="text-black mb-6">We could not find the article post you are looking for.</p>
          <Link href="/articles" className="bg-[#D2A02A] text-black px-6 py-2 rounded-md hover:bg-[#5A4C33] hover:text-white transition-all">
            Return to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Header Banner */}
      <div className="w-full bg-[#5A4C33] text-center py-16">
        <div className="container mx-auto px-4 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D2A02A] mb-2">
            {blog.title}
          </h1>
          {blog.subtitle && (
            <p className="text-white text-xl mt-2">{blog.subtitle}</p>
          )}
          <div className="flex justify-center items-center mt-4">
            <div className="bg-[#D2A02A] h-1 w-24 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Article Metadata */}
          <div className="border-b border-gray-200 px-6 py-4 bg-amber-50">
            <p className="text-black italic">Published on: <span className="font-medium">{blog.date}</span></p>
          </div>
          
          {/* Feature Image */}
          {blog.image && (
            <div className="w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}
          
          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div 
              className="prose prose-sm sm:prose lg:prose-lg max-w-none text-black tiptap-content" 
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
            
            {/* Add this style block to handle Tiptap specific styling */}
            <style jsx global>{`
              .tiptap-content h1 { font-size: 2em; font-weight: bold; margin-top: 0.67em; margin-bottom: 0.67em; }
              .tiptap-content h2 { font-size: 1.5em; font-weight: bold; margin-top: 0.83em; margin-bottom: 0.83em; }
              .tiptap-content h3 { font-size: 1.17em; font-weight: bold; margin-top: 1em; margin-bottom: 1em; }
              .tiptap-content h4 { font-size: 1em; font-weight: bold; margin-top: 1.33em; margin-bottom: 1.33em; }
              .tiptap-content h5 { font-size: 0.83em; font-weight: bold; margin-top: 1.67em; margin-bottom: 1.67em; }
              .tiptap-content h6 { font-size: 0.67em; font-weight: bold; margin-top: 2.33em; margin-bottom: 2.33em; }
              
              .tiptap-content p { margin: 1em 0; }
              .tiptap-content a { color: #3B82F6; text-decoration: underline; }
              .tiptap-content blockquote { border-left: 4px solid #D2A02A; margin-left: 0; padding-left: 1em; font-style: italic; }
              .tiptap-content pre { background-color: #f5f5f5; padding: 0.5em; border-radius: 0.3em; font-family: monospace; overflow-x: auto; }
              .tiptap-content code { background-color: rgba(#616161, 0.1); color: #616161; }
              
              .tiptap-content table { border-collapse: collapse; margin: 0; overflow: hidden; table-layout: fixed; width: 100%; margin: 1em 0; }
              .tiptap-content table td, .tiptap-content table th { border: 2px solid #ced4da; box-sizing: border-box; min-width: 1em; padding: 3px 5px; position: relative; vertical-align: top; }
              .tiptap-content table th { background-color: #f8f9fa; font-weight: bold; text-align: left; }
              
              .tiptap-content ul, .tiptap-content ol { padding-left: 1.5em; margin: 1em 0; }
              .tiptap-content li { margin: 0.5em 0; }
              .tiptap-content hr { border: none; border-top: 2px solid #ced4da; margin: 1em 0; }
              .tiptap-content img { max-width: 100%; height: auto; }
              
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
            `}</style>
            
            {/* Share & Tags Section */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-black font-medium">Share:</span>
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="w-8 h-8 rounded-full bg-[#5A4C33] text-white flex items-center justify-center hover:bg-[#D2A02A] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="w-8 h-8 rounded-full bg-[#5A4C33] text-white flex items-center justify-center hover:bg-[#D2A02A] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="w-8 h-8 rounded-full bg-[#5A4C33] text-white flex items-center justify-center hover:bg-[#D2A02A] transition-colors"
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
        
        {/* FAQs Section */}
        {faqs.length > 0 && (
          <div className="max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 bg-[#5A4C33]">
              <h2 className="text-2xl font-bold text-[#D2A02A]">Frequently Asked Questions</h2>
            </div>
            <div className="p-6">
              <div className="divide-y divide-gray-200">
                {faqs.map((faq) => (
                  <div key={faq.id} className="py-4">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex justify-between items-center w-full text-left font-medium text-black hover:text-[#D2A02A] focus:outline-none transition-colors"
                    >
                      <span>{faq.question}</span>
                      <span className="ml-6 flex-shrink-0">
                        {expandedFaqs.includes(faq.id) ? (
                          <svg className="h-5 w-5 text-[#D2A02A]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-[#D2A02A]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                        )}
                      </span>
                    </button>
                    {expandedFaqs.includes(faq.id) && (
                      <div className="mt-2 pr-12">
                        <p className="text-base text-black">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

         {/* Author Bio Section - Conditionally rendered based on author */}
         {blog.author ? (
           <div className="max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
             <div className="p-6 flex flex-col md:flex-row gap-6">
               <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                 <Image 
                   src={authorBios[blog.author as keyof typeof authorBios]?.image || "/default-author.svg"}
                   alt={blog.author}
                   fill
                   className="object-cover"
                 />
               </div>
               <div className="flex-1">
                 <Link 
                   href={blog.author === "Anuj Anand Malik" ? "/author" : 
                         blog.author === "Shrey Arora" ? "/authorsec" : "/about"}
                   className="hover:text-[#D2A02A] transition-colors"
                 >
                   <h3 className="text-xl font-bold text-black mb-2">{blog.author}</h3>
                 </Link>
                 <p className="text-black mb-4">
                   {authorBios[blog.author as keyof typeof authorBios]?.description || 
                     "Legal expert at AMA Legal Solutions specializing in providing comprehensive legal advice and solutions."}
                 </p>
                 <div className="flex space-x-4">
                   <Link 
                     href={blog.author === "Anuj Anand Malik" ? "/author" : 
                           blog.author === "Shrey Arora" ? "/authorsec" : "/about"} 
                     className="bg-[#D2A02A] text-black px-4 py-1.5 rounded hover:bg-[#5A4C33] hover:text-white transition-colors text-sm font-medium">
                     View Profile
                   </Link>
                   <a 
                     href={authorBios[blog.author as keyof typeof authorBios]?.linkedInUrl || "https://www.linkedin.com/company/ama-legal-solutions/"}
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center text-[#5A4C33] hover:text-[#D2A02A] font-medium transition-colors"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                     </svg>
                     LinkedIn
                   </a>
                 </div>
               </div>
             </div>
           </div>
         ) : (
           <div className="max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
             <div className="p-6 flex flex-col md:flex-row gap-6">
               <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                 <Image 
                   src="/anujbhiya.svg"
                   alt="Anuj Anand Malik"
                   fill
                   className="object-cover"
                 />
               </div>
               <div className="flex-1">
                 <Link href="/author" className="hover:text-[#D2A02A] transition-colors">
                   <h3 className="text-xl font-bold text-black mb-2">Anuj Anand Malik</h3>
                 </Link>
                 <p className="text-black mb-4">Advocate, Legal Consultant, and Founder of AMA Legal Solutions. Expert in loan settlements, corporate compliance, and business contracts.</p>
                 <div className="flex space-x-4">
                   <Link href="/author" className="bg-[#D2A02A] text-black px-4 py-1.5 rounded hover:bg-[#5A4C33] hover:text-white transition-colors text-sm font-medium">
                     View Profile
                   </Link>
                   <a 
                     href="https://www.linkedin.com/in/iamanujmalik/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center text-[#5A4C33] hover:text-[#D2A02A] font-medium transition-colors"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                     </svg>
                     LinkedIn
                   </a>
                 </div>
               </div>
             </div>
           </div>
         )}
        
        {/* Contact Button */}
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[999]">
          <Link href="/contact" className="inline-block bg-[#D2A02A] text-black font-bold px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full shadow-xl hover:bg-[#5A4C33] hover:text-white transition-all">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
'use client'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useParams } from 'next/navigation';
import Link from 'next/link';

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
}

export default function ArticlePostPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Set the current URL when component mounts (client-side only)
    setCurrentUrl(window.location.href);
    
    const fetchArticleBySlug = async () => {
      try {
        // First generate slugs and find matching document
        const articlesCollection = collection(db, 'articles');
        const querySnapshot = await getDocs(articlesCollection);
        let foundArticle = null;
        
        // Generate slug for each blog and compare
        querySnapshot.docs.forEach(doc => {
          const data = doc.data();
          const title = data.title || '';
          const blogSlug = title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
            
          if (blogSlug === slug) {
            foundArticle = {
              id: doc.id,
              ...data
            };
          }
        });
        
        setBlog(foundArticle);
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
              className="prose max-w-none text-black" 
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
            
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
        
        {/* Author Bio Section */}
        {/* <div className="max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row gap-6">
            <div className="w-24 h-24 rounded-full bg-[#5A4C33] flex items-center justify-center">
              <span className="text-2xl font-bold text-[#D2A02A]">AB</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-2">About the Author</h3>
              <p className="text-black mb-4">Expert writer with over a decade of experience in the industry. Passionate about sharing insights and knowledge through thoughtful articles.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#D2A02A] hover:text-[#5A4C33] font-medium">More Articles</a>
                <a href="#" className="text-[#D2A02A] hover:text-[#5A4C33] font-medium">Website</a>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* Contact Button */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <Link href="/contact" className="inline-block bg-[#D2A02A] text-black font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-[#5A4C33] hover:text-white transition-all transform hover:-translate-y-1">
            Get in Touch With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

// Define the Article interface
interface Article {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
}

// Function to generate a slug from a title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim(); // Remove leading/trailing spaces or hyphens
};

export default function ArticlePostPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Set the current URL when component mounts (client-side only)
    setCurrentUrl(window.location.href);
    
    const fetchArticleBySlug = async () => {
      try {
        const articlesCollection = collection(db, 'articles');
        const querySnapshot = await getDocs(articlesCollection);
        
        // Find the article with the matching slug
        const articles = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const title = data.title || '';
          return {
            id: doc.id,
            title: title,
            subtitle: data.subtitle || '',
            description: data.description || '',
            date: data.date || '',
            image: data.image || '',
            created: data.created || Date.now(),
            metaTitle: data.metaTitle || '',
            metaDescription: data.metaDescription || '',
            slug: generateSlug(title)
          };
        });
        
        const foundArticle = articles.find(article => article.slug === slug);
        
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          console.error("Article not found");
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

  // Function to handle social media sharing
  const handleShare = (platform: string) => {
    const title = article?.title || 'Check out this article';
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

  // Function to create article content with HTML support
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <p className="text-lg">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <p className="text-lg">Article not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8 mt-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: '#5A4C33' }}>
            {article.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{article.subtitle}</p>
          <div className="flex justify-center items-center text-sm text-gray-500 space-x-4">
            <span>{article.date}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-auto" 
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div dangerouslySetInnerHTML={createMarkup(article.description)} />
        </div>

        {/* Share Buttons */}
        <div className="border-t border-gray-200 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
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
      </motion.div>
    </div>
  );
}

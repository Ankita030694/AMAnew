'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase'; // Make sure you have this file set up with your Firebase config

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

// Function to generate a slug from a title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim(); // Remove leading/trailing spaces or hyphens
};

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
  slug?: string; // Add slug to the interface
}

// Helper function to truncate text to a specific number of words
const truncateWords = (text: string, wordCount: number) => {
  // Remove HTML tags
  const strippedText = text.replace(/<[^>]*>/g, ' ');
  const words = strippedText.split(/\s+/);
  if (words.length <= wordCount) return strippedText;
  return words.slice(0, wordCount).join(' ') + '...';
};

export default function Page() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesCollection = collection(db, 'articles');
        const articlesQuery = query(articlesCollection, orderBy('created', 'desc'));
        const querySnapshot = await getDocs(articlesQuery);
        
        const articlesData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const title = data.title || '';
          const slug = generateSlug(title);
          
          return {
            id: doc.id,
            title: title,
            subtitle: data.subtitle || '',
            description: truncateWords(data.description || '', 20),
            date: data.date || '',
            image: data.image || '',
            created: data.created || Date.now(),
            metaTitle: data.metaTitle || '',
            metaDescription: data.metaDescription || '',
            slug: slug // Add the generated slug
          };
        });
        
        setArticles(articlesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Get spotlight article (most recent)
  const spotlightArticle = articles.length > 0 ? articles[0] : null;
  
  // Get trending articles (next 3 most recent)
  const trendingArticles = articles.length > 1 ? articles.slice(1, 4) : [];
  
  // Get regular articles (excluding spotlight)
  const regularArticles = articles.length > 0 ? articles.slice(1) : [];
  
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
        Articles
      </motion.h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">Loading articles...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                
                <Link href={`/articles/${spotlightArticle.slug}`}>
                  <motion.div 
                    className="rounded-xl overflow-hidden border border-gray-100"
                    variants={hoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <div className="relative h-48 md:h-81">
                      <img src={spotlightArticle.image} alt={spotlightArticle.title} />
                      <div className="absolute bottom-3 right-3 bg-white rounded px-2 py-1 text-xs uppercase text-blue-600">
                        {spotlightArticle.date}
                      </div>
                    </div>
                    
                    <div className="p-4 relative bg-white">
                      <h3 className="text-xl font-medium mb-2" style={{ color: '#5A4C33' }}>
                        {spotlightArticle.title}
                      </h3>
                      <p className="text-sm text-blue-600 mb-2">{spotlightArticle.subtitle}</p>
                      <p className="text-sm text-blue-600">{spotlightArticle.description}</p>
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
                  <div className="w-6 h-6 rounded-full bg-[#D2A02A] flex items-center justify-center">
                    <span className="text-white text-xs">A</span>
                  </div>
                  <h2 className="text-xl font-medium" style={{ color: '#5A4C33' }}>Articles</h2>
                </div>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {regularArticles.map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                  >
                    <Link href={`/articles/${article.slug}`}>
                      <motion.div 
                        className="rounded-xl overflow-hidden border border-gray-100 h-full"
                        variants={hoverVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        <div className="relative h-40">
                          <img 
                            src={article.image}
                            alt={article.title}
                            className="object-cover"
                          />
                          <div className="absolute bottom-3 right-3 bg-white rounded px-2 py-1 text-xs uppercase text-blue-600">
                            {article.date}
                          </div>
                        </div>
                        
                        <div className="p-4 relative bg-white">
                          <h3 className="text-lg font-medium mb-2" style={{ color: '#5A4C33' }}>
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">{article.subtitle}</p>
                          <p className="text-sm text-gray-500">{article.description}</p>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                    <Link href={`/articles/${article.slug}`}>
                      <motion.div 
                        className="flex gap-4 p-2 rounded-lg" 
                        variants={hoverVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                          <img 
                            src={article.image}
                            alt={article.title}
                            className="object-cover"
                          />
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
    </div>
  );
}
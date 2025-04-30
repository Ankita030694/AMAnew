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

// Helper function to truncate text to a specific number of words
const truncateWords = (text: string, wordCount: number) => {
  // Remove HTML tags
  const strippedText = text.replace(/<[^>]*>/g, ' ');
  const words = strippedText.split(/\s+/);
  if (words.length <= wordCount) return strippedText;
  return words.slice(0, wordCount).join(' ') + '...';
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
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

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

  // Get spotlight article (most recent)
  const spotlightArticle = blogs.length > 0 ? blogs[0] : null;
  
  // Get trending articles (all blogs in random order)
  const trendingArticles = blogs.length > 1 ? shuffleArray(blogs) : [];
  
  // Get regular articles (excluding spotlight)
  const regularArticles = blogs.length > 0 ? blogs.slice(1) : [];
  
  // Pagination logic for regular articles
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = regularArticles.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(regularArticles.length / blogsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
          <p className="text-lg">Loading blogs...</p>
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
                
                <Link href={`/blog/${spotlightArticle.slug}`}>
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
                  <h2 className="text-xl font-medium" style={{ color: '#5A4C33' }}>Blogs</h2>
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
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
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
                          <p className="text-sm mb-2 text-blue-600">{article.subtitle}</p>
                          <p className="text-sm text-gray-500">{article.description}</p>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center gap-2">
                    <button 
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`px-3 py-1 rounded ${currentPage === number ? 'bg-[#5A4C33] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {number}
                      </button>
                    ))}
                    
                    <button 
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      Next
                    </button>
                  </nav>
                </div>
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
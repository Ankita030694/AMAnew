'use client'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function page() {
  // Sample article data
  const articles = [
    {
      id: 1,
      title: 'How To Make The Most Of Your Maternity Cover: The Story Of Rashi And Amar',
      image: '/images/bannerbg.png',
      category: 'Case Studies',
      author: 'Aliya Khan',
      spotlight: true
    },
    {
      id: 2,
      title: 'Faster & Better Employee Onboarding With Nova\'s Enhanced HR Dashboard',
      image: '/city1.svg',
      category: 'New in Product',
      trending: true
    },
    {
      id: 3,
      title: 'Insurance Fraud: The Rise Of False Claims And Fake Deaths',
      image: '/city1.svg',
      category: 'Insurance 101',
      trending: true
    },
    {
      id: 4,
      title: 'All You Need To Know About Medical Benefits For Employees In India',
      image: '/city1.svg',
      category: 'Insurance 101',
      trending: true
    },
    {
      id: 5,
      title: 'How Insurtech Startups Like Nova Benefits Are Bridging Gaps In The Health Insurance Ecosystem',
      image: '/city1.svg',
      category: 'Insurance 101',
      author: 'Samyukta Iyer'
    },
    {
      id: 6,
      title: 'What Is A Contingent Beneficiary?',
      image: '/city1.svg',
      category: 'Insurance 101',
      author: 'Sakshi Maheshwari'
    }
  ];
  
  // Get spotlight article
  const spotlightArticle = articles.find(article => article.spotlight);
  
  // Get trending articles
  const trendingArticles = articles.filter(article => article.trending);
  
  // Get regular articles (not spotlight)
  const regularArticles = articles.filter(article => !article.spotlight);
  
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
        THIS PAGE IS UNDER DEVELOPMENT
      </motion.h1>
      
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
                <Image 
                  src="/images/spotlight-icon.svg" 
                  alt="Spotlight" 
                  width={20} 
                  height={20} 
                />
                <h2 className="text-xl font-medium" style={{ color: '#5A4C33' }}>Spotlight</h2>
              </motion.div>
              
              <Link href={`/blogs/${spotlightArticle.id}`}>
                <motion.div 
                  className="rounded-xl overflow-hidden border border-gray-100"
                  variants={hoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <div className="relative">
                    <Image 
                      src={spotlightArticle.image}
                      alt={spotlightArticle.title}
                      width={600}
                      height={300}
                      className="w-full object-cover"
                    />
                    <div className="absolute bottom-3 right-3 bg-white rounded px-2 py-1 text-xs uppercase">
                      {spotlightArticle.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-xl font-medium mb-2" style={{ color: '#5A4C33' }}>
                      {spotlightArticle.title}
                    </h3>
                    {spotlightArticle.author && (
                      <div className="flex items-center mt-4">
                        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden mr-2">
                          <Image 
                            src={`/images/authors/${spotlightArticle.author.replace(/\s+/g, '-').toLowerCase()}.jpg`}
                            alt={spotlightArticle.author}
                            width={32}
                            height={32}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{spotlightArticle.author}</span>
                      </div>
                    )}
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
              
              <Link href="/blogs">
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
              {regularArticles.map((article) => (
                <motion.div 
                  key={article.id}
                  variants={itemVariants}
                >
                  <Link href={`/blogs/${article.id}`}>
                    <motion.div 
                      className="rounded-xl overflow-hidden border border-gray-100 h-full"
                      variants={hoverVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <div className="relative">
                        <Image 
                          src={article.image}
                          alt={article.title}
                          width={200}
                          height={200}
                          className="w-full object-cover"
                        />
                        <div className="absolute bottom-3 right-3 bg-white rounded px-2 py-1 text-xs uppercase">
                          {article.category}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-medium mb-2" style={{ color: '#5A4C33' }}>
                          {article.title}
                        </h3>
                        {article.author && (
                          <div className="flex items-center mt-4">
                            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden mr-2">
                              <Image 
                                src={`/images/authors/${article.author.replace(/\s+/g, '-').toLowerCase()}.jpg`}
                                alt={article.author}
                                width={32}
                                height={32}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{article.author}</span>
                          </div>
                        )}
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
                  <Link href={`/blogs/${article.id}`}>
                    <motion.div 
                      className="flex gap-4 p-2 rounded-lg" 
                      variants={hoverVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                        <Image 
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium" style={{ color: '#5A4C33' }}>
                          {article.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>This page is under development</h1>
    // </div>
  );
}
'use client'

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { getVideos } from '@/lib/api';

// Define the Video type
interface Video {
  id: number;
  title: string;
  videoId: string;
  category: string;
  date: string;
}

interface AmaLiveClientProps {
  initialVideos: Video[];
}

// Define animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const hoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)',
    transition: { type: 'spring', stiffness: 400 }
  }
};

// Lazy load the YouTube iframe component
const YouTubeEmbed = dynamic(
  () => import('./YouTubeEmbed'),
  { 
    ssr: false,
    loading: () => <div className="bg-gray-200 animate-pulse w-full h-[200px] rounded-t-xl" />
  }
);

export default function AmaLiveClient({ initialVideos }: AmaLiveClientProps) {
  // State to store videos data
  const [videos, setVideos] = useState<Video[]>(initialVideos);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;
  const [isLoading, setIsLoading] = useState(false);
  
  // Load more videos when needed
  const loadMoreVideos = useCallback(async (pageNumber: number) => {
    if (videos.length < pageNumber * videosPerPage) {
      try {
        setIsLoading(true);
        const newVideos = await getVideos(pageNumber, videosPerPage);
        
        setVideos(prev => {
          // Filter out duplicates by id
          const existingIds = new Set(prev.map(v => v.id));
          const filteredNew = newVideos.filter(v => !existingIds.has(v.id));
          return [...prev, ...filteredNew];
        });
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading more videos:', error);
        setIsLoading(false);
      }
    }
  }, [videos.length, videosPerPage]);
  
  // Change page
  const paginate = useCallback((pageNumber: number) => {
    // Load more videos if needed
    loadMoreVideos(pageNumber);
    
    // Update current page
    setCurrentPage(pageNumber);
    
    // Scroll to top when changing pages - using requestAnimationFrame for smoother experience
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [loadMoreVideos]);
  
  // Pagination logic with memoization
  const { currentVideos, totalPages } = useMemo(() => {
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    return {
      currentVideos: videos.slice(indexOfFirstVideo, indexOfLastVideo),
      totalPages: Math.ceil(videos.length / videosPerPage) || 1 // Ensure at least 1 page
    };
  }, [videos, currentPage, videosPerPage]);
  
  // Pagination component
  const PaginationControls = useCallback(() => {
    if (totalPages <= 1) return null;
    
    return (
      <motion.div 
        className="flex justify-center items-center space-x-2 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#D2A02A] text-white hover:bg-[#B8881E]'
          } transition-colors`}
          aria-label="Previous page"
        >
          Previous
        </button>
        
        {totalPages <= 5 ? (
          [...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => paginate(idx + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === idx + 1
                  ? 'bg-[#D2A02A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
              aria-label={`Page ${idx + 1}`}
              aria-current={currentPage === idx + 1 ? 'page' : undefined}
            >
              {idx + 1}
            </button>
          ))
        ) : (
          <>
            <button
              onClick={() => paginate(1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === 1
                  ? 'bg-[#D2A02A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
              aria-label="Page 1"
              aria-current={currentPage === 1 ? 'page' : undefined}
            >
              1
            </button>
            
            {currentPage > 3 && <span className="px-2" aria-hidden="true">...</span>}
            
            {Array.from({ length: 3 }, (_, i) => {
              const pageNum = Math.min(
                Math.max(currentPage - 1 + i, 2),
                totalPages - 1
              );
              
              if (pageNum <= 1 || pageNum >= totalPages) return null;
              if ((currentPage <= 3 && pageNum > 3) || 
                  (currentPage >= totalPages - 2 && pageNum < totalPages - 2)) return null;
              
              return (
                <button
                  key={pageNum}
                  onClick={() => paginate(pageNum)}
                  className={`w-10 h-10 rounded-full ${
                    currentPage === pageNum
                      ? 'bg-[#D2A02A] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                  aria-label={`Page ${pageNum}`}
                  aria-current={currentPage === pageNum ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              );
            })}
            
            {currentPage < totalPages - 2 && <span className="px-2" aria-hidden="true">...</span>}
            
            <button
              onClick={() => paginate(totalPages)}
              className={`w-10 h-10 rounded-full ${
                currentPage === totalPages
                  ? 'bg-[#D2A02A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
              aria-label={`Page ${totalPages}`}
              aria-current={currentPage === totalPages ? 'page' : undefined}
            >
              {totalPages}
            </button>
          </>
        )}
        
        <button
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#D2A02A] text-white hover:bg-[#B8881E]'
          } transition-colors`}
          aria-label="Next page"
        >
          Next
        </button>
      </motion.div>
    );
  }, [currentPage, totalPages, paginate]);
  
  return (
    <div className="bg-transparent">
      {/* Banner Section */}
      <div className="relative w-full h-[550px] flex items-center justify-center">
        <Image 
          src="/amalive.png" 
          alt="AMA Live Banner"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
          className="object-cover mt-15"
          fetchPriority="high"
        />
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Page Heading */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h2 
            className="text-2xl md:text-3xl font-medium"
            style={{ color: '#5A4C33' }}
          >
            Watch Our Latest Video Sessions
          </h2>
          <p className="text-gray-600 mt-2">
            Explore in-depth discussions about employee benefits, insurance, and wellness
          </p>
        </motion.div>
        
        {/* Videos Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`videos-page-${currentPage}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {currentVideos.map((video) => (
              <motion.div 
                key={video.id}
                variants={itemVariants}
                layout
              >
                <motion.div 
                  className="rounded-xl overflow-hidden border border-gray-100 h-full"
                  variants={hoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* YouTube Video */}
                  <YouTubeEmbed videoId={video.videoId} />
                  
                  {/* Video Details */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-[#D2A02A] text-white text-xs px-2 py-1 rounded">
                        {video.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(video.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 
                      className="text-lg font-medium mt-2"
                      style={{ color: '#5A4C33' }}
                    >
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Loading indicator when getting more videos */}
        {isLoading && (
          <div className="flex justify-center mb-8">
            <div className="w-8 h-8 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Pagination */}
        <PaginationControls />
      </div>
    </div>
  );
}
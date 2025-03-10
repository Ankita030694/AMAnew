'use client'
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Define the Video type
interface Video {
    id: number;
    title: string;
    videoId: string;
    category: string;
    date: string;
}

// Define animations (reused from blogs page)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.05  // Reduced from 0.1 for faster animation
    }
  }
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },  // Reduced y distance from 20 to 10
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const hoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,  // Reduced scale from 1.03 to 1.02
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)',
    transition: { type: 'spring', stiffness: 400 }
  }
};

// Lazy load the YouTube iframe component
const YouTubeEmbed = dynamic(
  () => import('./YouTubeEmbed'),
  { 
    loading: () => <div className="bg-gray-200 animate-pulse w-full h-[200px] rounded-t-xl" />,
    ssr: false
  }
);

export default function AmaLivePage() {
  // State to store videos data
  const [videos, setVideos] = useState<Video[]>([]);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9; // 3 videos per row, 3 rows
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch videos from API - this would connect to your admin backend
  useEffect(() => {
    // Example function that would fetch from your backend
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        
        // In a real implementation, replace with your API endpoint
        // const response = await fetch('/api/videos');
        // const data = await response.json();
        
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Mock data for demonstration
        const mockVideos: Video[] = [
          {
            id: 1,
            title: 'Employee Benefits Explained',
            videoId: 'dQw4w9WgXcQ',
            category: 'Benefits',
            date: '2025-02-15'
          },
          {
            id: 2,
            title: 'Health Insurance Coverage',
            videoId: 'dQw4w9WgXcQ',
            category: 'Insurance',
            date: '2025-02-12'
          },
          {
            id: 3,
            title: 'Retirement Planning',
            videoId: 'dQw4w9WgXcQ',
            category: 'Financial',
            date: '2025-02-10'
          },
          // Add only the first 9 videos initially, load more as needed
          {
            id: 4,
            title: 'Work-Life Balance',
            videoId: 'dQw4w9WgXcQ',
            category: 'Wellness',
            date: '2025-02-08'
          },
          {
            id: 5,
            title: 'Remote Work Benefits',
            videoId: 'dQw4w9WgXcQ',
            category: 'Benefits',
            date: '2025-02-05'
          },
          {
            id: 6,
            title: 'Managing Your Health Savings',
            videoId: 'dQw4w9WgXcQ',
            category: 'Financial',
            date: '2025-02-01'
          },
          {
            id: 7,
            title: 'Understanding Your Coverage',
            videoId: 'dQw4w9WgXcQ',
            category: 'Insurance',
            date: '2025-01-28'
          },
          {
            id: 8,
            title: 'Mental Health Resources',
            videoId: 'dQw4w9WgXcQ',
            category: 'Wellness',
            date: '2025-01-25'
          },
          {
            id: 9,
            title: 'Family Leave Policies',
            videoId: 'dQw4w9WgXcQ',
            category: 'Benefits',
            date: '2025-01-22'
          }
        ];
        
        setVideos(mockVideos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setIsLoading(false);
      }
    };
    
    fetchVideos();
  }, []);
  
  // Fetch more videos when needed
  const loadMoreVideos = useCallback(async () => {
    // This would be replaced with your actual API endpoint with pagination
    if (currentPage > 1 && videos.length <= currentPage * videosPerPage) {
      try {
        const moreVideos: Video[] = [
          {
            id: 10,
            title: 'Preventative Care Benefits',
            videoId: 'dQw4w9WgXcQ',
            category: 'Insurance',
            date: '2025-01-20'
          },
          {
            id: 11,
            title: 'Employee Assistance Programs',
            videoId: 'dQw4w9WgXcQ',
            category: 'Wellness',
            date: '2025-01-18'
          },
          {
            id: 12,
            title: 'Navigating Healthcare',
            videoId: 'dQw4w9WgXcQ',
            category: 'Insurance',
            date: '2025-01-15'
          },
          {
            id: 13,
            title: 'Financial Wellness Basics',
            videoId: 'dQw4w9WgXcQ',
            category: 'Financial',
            date: '2025-01-12'
          },
          {
            id: 14,
            title: 'Health Insurance Plans Compared',
            videoId: 'dQw4w9WgXcQ',
            category: 'Insurance',
            date: '2025-01-10'
          },
          {
            id: 15,
            title: 'Stress Management Techniques',
            videoId: 'dQw4w9WgXcQ',
            category: 'Wellness',
            date: '2025-01-08'
          },
          {
            id: 16,
            title: 'Benefits FAQ',
            videoId: 'dQw4w9WgXcQ',
            category: 'Benefits',
            date: '2025-01-05'
          },
          {
            id: 17,
            title: 'Insurance Claim Process',
            videoId: 'dQw4w9WgXcQ',
            category: 'Insurance',
            date: '2025-01-02'
          },
          {
            id: 18,
            title: 'Managing Healthcare Costs',
            videoId: 'dQw4w9WgXcQ',
            category: 'Financial',
            date: '2024-12-28'
          }
        ];
        
        setVideos(prev => [...prev, ...moreVideos]);
      } catch (error) {
        console.error('Error loading more videos:', error);
      }
    }
  }, [currentPage, videos.length, videosPerPage]);
  
  // Call loadMoreVideos when page changes
  useEffect(() => {
    loadMoreVideos();
  }, [currentPage, loadMoreVideos]);
  
  // Pagination logic with memoization
  const { currentVideos, totalPages } = useMemo(() => {
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    return {
      currentVideos: videos.slice(indexOfFirstVideo, indexOfLastVideo),
      totalPages: Math.ceil(videos.length / videosPerPage)
    };
  }, [videos, currentPage, videosPerPage]);
  
  // Change page
  const paginate = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Optimize pagination rendering
  const renderPaginationButtons = useMemo(() => {
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
        >
          Previous
        </button>
        
        {totalPages <= 5 ? (
          // Show all pages if 5 or fewer
          [...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => paginate(idx + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === idx + 1
                  ? 'bg-[#D2A02A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              {idx + 1}
            </button>
          ))
        ) : (
          // Show limited pages with ellipsis for many pages
          <>
            {/* First page */}
            <button
              onClick={() => paginate(1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === 1
                  ? 'bg-[#D2A02A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              1
            </button>
            
            {/* Ellipsis or page numbers */}
            {currentPage > 3 && <span className="px-2">...</span>}
            
            {/* Pages around current */}
            {Array.from({ length: 3 }, (_, i) => {
              const pageNum = Math.min(
                Math.max(currentPage - 1 + i, 2),
                totalPages - 1
              );
              
              // Skip if outside valid range or duplicating first/last page
              if (pageNum <= 1 || pageNum >= totalPages) return null;
              // Skip if we're showing ellipsis and this would create a gap
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
                >
                  {pageNum}
                </button>
              );
            })}
            
            {/* Ellipsis */}
            {currentPage < totalPages - 2 && <span className="px-2">...</span>}
            
            {/* Last page */}
            <button
              onClick={() => paginate(totalPages)}
              className={`w-10 h-10 rounded-full ${
                currentPage === totalPages
                  ? 'bg-[#D2A02A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
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
        >
          Next
        </button>
      </motion.div>
    );
  }, [currentPage, totalPages, paginate]);
  
  return (
    <div className="bg-transparent">
      {/* Banner Section - Optimized with priority and sizes */}
      <div className="relative w-full h-[550px] flex items-center justify-center">
        <Image 
          src="/amalive.png" 
          alt="AMA Live Banner"
          fill
          sizes="100vw"
          priority
          className="object-cover mt-15"
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
        
        {/* Loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden border border-gray-100 h-full">
                <div className="bg-gray-200 animate-pulse h-[200px] rounded-t-xl"></div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="bg-gray-200 animate-pulse h-6 w-20 rounded"></div>
                    <div className="bg-gray-200 animate-pulse h-4 w-24 rounded"></div>
                  </div>
                  <div className="bg-gray-200 animate-pulse h-6 w-full rounded mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Videos Grid */
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentVideos.map((video) => (
              <motion.div 
                key={video.id}
                variants={itemVariants}
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
        )}
        
        {/* Pagination */}
        {renderPaginationButtons}
      </div>
    </div>
  );
}
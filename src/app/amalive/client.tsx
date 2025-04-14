"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, limit, startAfter, Timestamp, DocumentData } from "firebase/firestore";

// Define the Video type for your client component
interface Video {
  id: string;
  title: string;
  videoId: string;
  description: string;
  timestamp: any;
  category?: string;
  date?: string;
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
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const hoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
    transition: { type: "spring", stiffness: 400 },
  },
};

// Lazy load the YouTube iframe component
const YouTubeEmbed = dynamic(() => import("./YouTubeEmbed"), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 animate-pulse w-full h-[200px] rounded-t-xl" />
  ),
});

export default function AmaLiveClient({ initialVideos }: AmaLiveClientProps) {
  // State to store videos data
  const [videos, setVideos] = useState<Video[]>(initialVideos || []);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);

  // Debug logging
  useEffect(() => {
    console.log("Initial videos:", initialVideos);
    console.log("Current videos state:", videos);
  }, [initialVideos, videos]);

  // Calculate total pages based on available videos
  const totalPages = Math.ceil(videos.length / videosPerPage);

  // Load more videos from Firebase when needed
  const loadMoreVideos = useCallback(
    async (pageNumber: number) => {
      if (pageNumber === 1 && videos.length >= videosPerPage) {
        return; // First page is already loaded
      }
      
      try {
        setIsLoading(true);
        setError(null);
        
        const videosRef = collection(db, 'videos');
        let videosQuery;
        
        if (pageNumber > 1 && lastDoc) {
          // For pagination, get the next batch starting after the last document
          videosQuery = query(
            videosRef,
            orderBy('timestamp', 'desc'),
            startAfter(lastDoc),
            limit(videosPerPage)
          );
        } else {
          // First page or fallback
          videosQuery = query(
            videosRef,
            orderBy('timestamp', 'desc'),
            limit(pageNumber * videosPerPage)
          );
        }
        
        const querySnapshot = await getDocs(videosQuery);
        
        if (querySnapshot.empty) {
          console.log('No more videos to load');
          setIsLoading(false);
          return;
        }
        
        // Set the last document for pagination
        setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
        
        const newVideos = querySnapshot.docs.map(doc => ({
          id: doc.id,
          description: doc.data().description || '',
          timestamp: doc.data().timestamp,
          title: doc.data().title || 'Untitled Video',
          videoId: doc.data().videoId || '',
          category: doc.data().category || 'General',
          date: doc.data().timestamp ? 
            new Date(doc.data().timestamp.toDate()).toISOString().split('T')[0] : 
            new Date().toISOString().split('T')[0],
        }));
        
        console.log('Fetched videos from Firebase:', newVideos);
        
        if (pageNumber === 1) {
          setVideos(newVideos);
        } else {
          setVideos((prev: Video[]) => {
            // Filter out duplicates by id
            const existingIds = new Set(prev.map((v) => v.id));
            const filteredNew = newVideos.filter((v) => !existingIds.has(v.id));
            return [...prev, ...filteredNew];
          });
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading videos from Firebase:", error);
        setError("Failed to load videos. Please try again later.");
        setIsLoading(false);
      }
    },
    [lastDoc, videos.length]
  );

  // Try to load videos if initialVideos is empty
  useEffect(() => {
    if (initialVideos.length === 0) {
      loadMoreVideos(1);
    }
  }, [initialVideos.length, loadMoreVideos]);

  // Change page
  const paginate = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);
      loadMoreVideos(pageNumber);

      // Scroll to top when changing pages
      requestAnimationFrame(() => {
        window.scrollTo({ top: 200, behavior: "smooth" });
      });
    },
    [loadMoreVideos]
  );

  // Get current videos for display
  const currentVideos = useMemo(() => {
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    return videos.slice(indexOfFirstVideo, indexOfLastVideo);
  }, [videos, currentPage, videosPerPage]);

  return (
    <div className="bg-transparent">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[550px] flex items-center justify-center">
        <Image
          src="/amalive1.png"
          alt="AMA Live Banner"
          priority
          width={1920}
          height={1080}
          className="object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4">
        {/* Page Heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1
            className="text-2xl md:text-3xl font-medium"
            style={{ color: "#5A4C33" }}
          >
            Watch Our Latest Video Sessions
          </h1>
          <p className="text-gray-600 mt-2">
            Explore in-depth discussions about employee benefits, insurance, and
            wellness
          </p>
        </motion.div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        {/* No videos message */}
        {!isLoading && videos.length === 0 && !error && (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No videos available</h3>
            <p className="text-gray-500">Check back soon for upcoming video content.</p>
          </div>
        )}

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
              <motion.div key={video.id} variants={itemVariants} layout>
                <motion.div
                  className="rounded-xl overflow-hidden border border-gray-100 h-full"
                  variants={hoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* YouTube Video */}
                  <YouTubeEmbed videoId={video.videoId} />
                  
                  {/* Video Info */}
                  {/* <div className="p-4">
                    <h3 className="font-medium text-lg mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                    {video.date && (
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(video.date).toISOString().split('T')[0].replace(/-/g, '/')}
                      </p>
                    )}
                  </div> */}
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
        {totalPages > 1 && (
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
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#D2A02A] text-white hover:bg-[#B8881E]"
              } transition-colors`}
              aria-label="Previous page"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx + 1}
                onClick={() => paginate(idx + 1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === idx + 1
                    ? "bg-[#D2A02A] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors`}
                aria-label={`Page ${idx + 1}`}
                aria-current={currentPage === idx + 1 ? "page" : undefined}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#D2A02A] text-white hover:bg-[#B8881E]"
              } transition-colors`}
              aria-label="Next page"
            >
              Next
            </button>
          </motion.div>
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
    </div>
  );
}

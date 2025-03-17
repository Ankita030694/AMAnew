"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { getVideos } from "@/lib/api";

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
  const [videos, setVideos] = useState<Video[]>(initialVideos);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;
  const [isLoading, setIsLoading] = useState(false);

  // Calculate total pages based on available videos
  const totalPages = Math.ceil(videos.length / videosPerPage);

  // Load more videos when needed
  const loadMoreVideos = useCallback(
    async (pageNumber: number) => {
      if (videos.length < pageNumber * videosPerPage) {
        try {
          setIsLoading(true);
          const newVideos = await getVideos(pageNumber, videosPerPage);

          setVideos((prev) => {
            // Filter out duplicates by id
            const existingIds = new Set(prev.map((v) => v.id));
            const filteredNew = newVideos.filter((v) => !existingIds.has(v.id));
            return [...prev, ...filteredNew];
          });

          setIsLoading(false);
        } catch (error) {
          console.error("Error loading more videos:", error);
          setIsLoading(false);
        }
      }
    },
    [videos.length, videosPerPage]
  );

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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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
      </div>
    </div>
  );
}

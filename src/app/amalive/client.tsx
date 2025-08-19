"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, Timestamp, DocumentData } from "firebase/firestore";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debug logging
  useEffect(() => {
    console.log("Client: Initial videos received:", initialVideos.length);
    console.log("Client: Current videos state:", videos.length);
    console.log("Client: Videos data:", videos);
    
    // Debug Firebase connection
    try {
      console.log("Client: Firebase db reference exists:", !!db);
      
      // Check if we're actually connected to Firebase
      const checkRef = collection(db, 'amalive');
      console.log("Client: Firebase collection reference created successfully");
    } catch (err) {
      console.error("Client: Error checking Firebase connection:", err);
      setError(`Firebase connection error: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [initialVideos, videos]);
 
  // Load all videos from Firebase if initialVideos is empty
  const loadAllVideos = useCallback(async () => {
    try {
      console.log("Client: Loading all videos from Firebase");
      setIsLoading(true);
      setError(null);
      
      const videosRef = collection(db, 'amalive');
      const videosQuery = query(
        videosRef,
        orderBy('timestamp', 'desc')
      );
      
      console.log("Client: Executing Firebase query");
      const querySnapshot = await getDocs(videosQuery);
      console.log("Client: Query completed, docs count:", querySnapshot.docs.length);
      
      if (querySnapshot.empty) {
        console.log('Client: No videos found in database');
        setIsLoading(false);
        return;
      }
      
      const newVideos = querySnapshot.docs.map(doc => {
        const data = doc.data();
        // Convert timestamp to a readable date string
        let dateStr = new Date().toISOString().split('T')[0]; // Default
        
        try {
          if (data.timestamp && typeof data.timestamp.toDate === 'function') {
            dateStr = data.timestamp.toDate().toISOString().split('T')[0];
          } else if (data.timestamp) {
            dateStr = new Date(data.timestamp).toISOString().split('T')[0];
          }
        } catch (err) {
          console.error("Date conversion error:", err);
        }
        
        return {
          id: doc.id,
          description: data.description || '',
          timestamp: data.timestamp,
          title: data.title || 'Untitled Video',
          videoId: data.videoId || '',
          category: data.category || 'General',
          date: dateStr,
        };
      });
      
      console.log('Client: Fetched videos from Firebase:', newVideos.length);
      setVideos(newVideos);
      setIsLoading(false);
    } catch (error) {
      console.error("Client: Error loading videos from Firebase:", error);
      const errorDetails = error instanceof Error ? error.message : String(error);
      setError(`Failed to load videos: ${errorDetails}`);
      setIsLoading(false);
    }
  }, []);

  // Try to load videos if initialVideos is empty
  useEffect(() => {
    if (initialVideos.length === 0) {
      loadAllVideos();
    }
  }, [initialVideos.length, loadAllVideos]);

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {videos.map((video) => (
              <motion.div key={video.id} variants={itemVariants} layout>
                <motion.div
                  className="rounded-xl overflow-hidden border border-gray-100 h-full"
                  variants={hoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* YouTube Video */}
                  <YouTubeEmbed videoId={video.videoId} />
                  
                  {/* Video Info - Removed */}
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

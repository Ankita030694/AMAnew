'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../lib/firebase'

// Define the attorney type
type Attorney = {
  image: string;
  title: string;
  role: string;
  socials: {
    [key: string]: string;
  };
  id?: string;
};

export default function OurAttorneys() {
  const [attorneys, setAttorneys] = useState<Attorney[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch attorneys from Firestore
  useEffect(() => {
    const fetchAttorneys = async () => {
      try {
        // Create a query to get users with role "advocate" or "attorney"
        // You can adjust this query based on how you identify attorneys in your database
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('role', 'in', ['advocate', 'admin']));
        const querySnapshot = await getDocs(q);
        
        const fetchedAttorneys: Attorney[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedAttorneys.push({
            id: doc.id,
            image: data.image || '/placeholder.svg', // Fallback image
            title: data.name || 'Attorney',
            role: data.position || 'Associate',
            socials: {
              // You can map these from your database if available
              instagram: data.instagram || "https://www.instagram.com/amalegalsolutions/?hl=en",
              linkedin: data.linkedin || "https://in.linkedin.com/company/ama-legal-solutions"
            }
          });
        });
        
        setAttorneys(fetchedAttorneys);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching attorneys:", error);
        setLoading(false);
      }
    };

    fetchAttorneys();
  }, []);

  const startAutoPlay = useCallback(() => {
    const interval = setInterval(() => {
      if (!isAnimating && attorneys.length > 0) {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % attorneys.length);
      }
    }, 5000);

    return interval;
  }, [isAnimating, attorneys.length]);

  useEffect(() => {
    const interval = startAutoPlay();
    return () => clearInterval(interval);
  }, [startAutoPlay]);

  const nextSlide = useCallback(() => {
    if (!isAnimating && attorneys.length > 0) {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % attorneys.length);
    }
  }, [isAnimating, attorneys.length]);

  const prevSlide = useCallback(() => {
    if (!isAnimating && attorneys.length > 0) {
      setDirection(-1);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + attorneys.length) % attorneys.length);
    }
  }, [isAnimating, attorneys.length]);

  const getVisibleAttorneys = useCallback(() => {
    const visibleAttorneys = [];
    if (attorneys.length === 0) return [];
    
    for (let i = 0; i < Math.min(3, attorneys.length); i++) {
      const index = (currentIndex + i) % attorneys.length;
      visibleAttorneys.push({
        ...attorneys[index],
        position: i
      });
    }
    return visibleAttorneys;
  }, [currentIndex, attorneys]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  // Show loading state
  if (loading) {
    return (
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#6B5B3D] mb-4">
              Our Expert Lawyers
            </h2>
            <div className="flex items-center justify-center">
              <div className="h-8 w-8 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If no attorneys found
  if (attorneys.length === 0 && !loading) {
    return (
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#6B5B3D] mb-4">
              Our Expert Lawyers
            </h2>
            <p className="text-gray-600">No attorneys found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#6B5B3D] mb-4">
            Our Expert Lawyers
          </h2>
          <div className="relative flex items-center justify-center">
            <div className="h-[1px] bg-[#D2A02A] w-24"></div>
            <span className="px-4 bg-white text-[#D2A02A]">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
              </svg>
            </span>
            <div className="h-[1px] bg-[#D2A02A] w-24"></div>
          </div>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-4 md:px-8 lg:px-12">
              {getVisibleAttorneys().map((attorney, index) => (
                <div key={`${attorney.id || attorney.title}-${index}`} className="relative">
                  {index === 0 ? (
                    <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
                      <motion.div 
                        key={`${currentIndex}-first`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        onAnimationStart={() => setIsAnimating(true)}
                        onAnimationComplete={() => setIsAnimating(false)}
                        transition={{
                          x: { 
                            type: "spring", 
                            stiffness: 200,
                            damping: 25,
                            duration: 0.8
                          },
                          opacity: { duration: 0.5 }
                        }}
                        className="flex flex-col items-center"
                      >
                        <AttorneyCard attorney={attorney} />
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center"
                    >
                      <AttorneyCard attorney={attorney} />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {attorneys.length > 3 && (
            <>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  disabled={isAnimating}
                  className="p-3 rounded-full bg-[#6B5B3D] text-white shadow-lg transform -translate-x-1/2 hover:bg-[#5A4C33] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  disabled={isAnimating}
                  className="p-3 rounded-full bg-[#6B5B3D] text-white shadow-lg transform translate-x-1/2 hover:bg-[#5A4C33] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </>
          )}

          {attorneys.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {attorneys.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (!isAnimating) {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-[#6B5B3D]' : 'bg-gray-300 hover:bg-[#6B5B3D]/50'
                  }`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

const AttorneyCard = ({ attorney }: { attorney: Attorney & { position: number } }) => {
  const socialIcons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    instagram: FaInstagram,
    telegram: FaTelegram,
    linkedin: FaLinkedin
  };

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-64 h-64 mb-6 overflow-hidden rounded-lg shadow-lg"
      >
        <Image
          src={attorney.image}
          alt={attorney.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        />
      </motion.div>
      
      <h3 className="text-xl font-semibold text-[#6B5B3D] mb-2">
        {attorney.title}
      </h3>
      <p className="text-gray-600 mb-4">{attorney.role}</p>
      
      <div className="flex space-x-4">
        {Object.entries(attorney.socials).map(([platform, url]) => {
          const Icon = socialIcons[platform as keyof typeof socialIcons];
          return (
            <motion.div
              key={platform}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={url}
                className="w-10 h-10 rounded-full bg-[#6B5B3D] border border-[#6B5B3D] flex items-center justify-center hover:bg-[#6B5B3D] hover:text-white transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
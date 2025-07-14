'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../lib/firebase'

// Define the attorney type
type Attorney = {
  id: string;
  image: string;
  name: string;
  role: string;
  position: string;
  email: string;
  socials: {
    [key: string]: string;
  };
};

export default function OurAttorneys() {
  const [lawyers, setLawyers] = useState<Attorney[]>([]);
  const [businessDev, setBusinessDev] = useState<Attorney[]>([]);
  const [currentLawyerIndex, setCurrentLawyerIndex] = useState(0);
  const [currentBusinessIndex, setCurrentBusinessIndex] = useState(0);
  const [lawyerDirection, setLawyerDirection] = useState(0);
  const [businessDirection, setBusinessDirection] = useState(0);
  const [isLawyerAnimating, setIsLawyerAnimating] = useState(false);
  const [isBusinessAnimating, setIsBusinessAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch users from Firestore
  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const users = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          image: data.image || '',
          name: data.name || '',
          role: data.role || '',
          position: data.position || '',
          email: data.email || '',
          socials: {
            instagram: "https://www.instagram.com/amalegalsolutions/?hl=en",
            linkedin: "https://in.linkedin.com/company/ama-legal-solutions"
          }
        };
      });

      // Separate lawyers and business development executives
      const lawyerUsers = users.filter(user => user.role === 'lawyer');
      const businessUsers = users.filter(user => user.role === 'business_development');

      setLawyers(lawyerUsers);
      setBusinessDev(businessUsers);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Auto-play for lawyers
  const startLawyerAutoPlay = useCallback(() => {
    const interval = setInterval(() => {
      if (!isLawyerAnimating && lawyers.length > 0) {
        setLawyerDirection(1);
        setCurrentLawyerIndex((prevIndex) => (prevIndex + 1) % lawyers.length);
      }
    }, 5000);

    return interval;
  }, [isLawyerAnimating, lawyers.length]);

  // Auto-play for business development
  const startBusinessAutoPlay = useCallback(() => {
    const interval = setInterval(() => {
      if (!isBusinessAnimating && businessDev.length > 0) {
        setBusinessDirection(1);
        setCurrentBusinessIndex((prevIndex) => (prevIndex + 1) % businessDev.length);
      }
    }, 5000);

    return interval;
  }, [isBusinessAnimating, businessDev.length]);

  useEffect(() => {
    const lawyerInterval = startLawyerAutoPlay();
    const businessInterval = startBusinessAutoPlay();
    
    return () => {
      clearInterval(lawyerInterval);
      clearInterval(businessInterval);
    };
  }, [startLawyerAutoPlay, startBusinessAutoPlay]);

  // Navigation functions for lawyers
  const nextLawyerSlide = useCallback(() => {
    if (!isLawyerAnimating && lawyers.length > 0) {
      setLawyerDirection(1);
      setCurrentLawyerIndex((prevIndex) => (prevIndex + 1) % lawyers.length);
    }
  }, [isLawyerAnimating, lawyers.length]);

  const prevLawyerSlide = useCallback(() => {
    if (!isLawyerAnimating && lawyers.length > 0) {
      setLawyerDirection(-1);
      setCurrentLawyerIndex((prevIndex) => (prevIndex - 1 + lawyers.length) % lawyers.length);
    }
  }, [isLawyerAnimating, lawyers.length]);

  // Navigation functions for business development
  const nextBusinessSlide = useCallback(() => {
    if (!isBusinessAnimating && businessDev.length > 0) {
      setBusinessDirection(1);
      setCurrentBusinessIndex((prevIndex) => (prevIndex + 1) % businessDev.length);
    }
  }, [isBusinessAnimating, businessDev.length]);

  const prevBusinessSlide = useCallback(() => {
    if (!isBusinessAnimating && businessDev.length > 0) {
      setBusinessDirection(-1);
      setCurrentBusinessIndex((prevIndex) => (prevIndex - 1 + businessDev.length) % businessDev.length);
    }
  }, [isBusinessAnimating, businessDev.length]);

  const getVisibleAttorneys = useCallback((attorneys: Attorney[], currentIndex: number) => {
    const visibleAttorneys = [];
    if (attorneys.length === 0) return [];
    
    for (let i = 0; i < Math.min(3, attorneys.length); i++) {
      const index = (currentIndex + i) % attorneys.length;
      visibleAttorneys.push({
        ...attorneys[index],
        arrayPosition: i
      });
    }
    return visibleAttorneys;
  }, []);

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

  if (loading) {
    return (
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#6B5B3D] mx-auto"></div>
            <p className="mt-4 text-[#6B5B3D]">Loading team members...</p>
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
            Our Team
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

        {/* Lawyers Section */}
        {lawyers.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-4 md:px-8 lg:px-12">
                  {getVisibleAttorneys(lawyers, currentLawyerIndex).map((attorney, index) => (
                    <div key={`lawyer-${attorney.id}-${index}`} className="relative">
                      {index === 0 ? (
                        <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsLawyerAnimating(false)}>
                          <motion.div 
                            key={`lawyer-${currentLawyerIndex}-first`}
                            custom={lawyerDirection}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            onAnimationStart={() => setIsLawyerAnimating(true)}
                            onAnimationComplete={() => setIsLawyerAnimating(false)}
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

              {lawyers.length > 3 && (
                <>
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevLawyerSlide}
                      disabled={isLawyerAnimating}
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
                      onClick={nextLawyerSlide}
                      disabled={isLawyerAnimating}
                      className="p-3 rounded-full bg-[#6B5B3D] text-white shadow-lg transform translate-x-1/2 hover:bg-[#5A4C33] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </>
              )}

              {lawyers.length > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  {lawyers.map((_, index) => (
                    <motion.button
                      key={`lawyer-dot-${index}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        if (!isLawyerAnimating) {
                          setLawyerDirection(index > currentLawyerIndex ? 1 : -1);
                          setCurrentLawyerIndex(index);
                        }
                      }}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentLawyerIndex ? 'bg-[#6B5B3D]' : 'bg-gray-300 hover:bg-[#6B5B3D]/50'
                      }`}
                      disabled={isLawyerAnimating}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Business Development Section */}
        {businessDev.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-4 md:px-8 lg:px-12">
                  {getVisibleAttorneys(businessDev, currentBusinessIndex).map((attorney, index) => (
                    <div key={`business-${attorney.id}-${index}`} className="relative">
                      {index === 0 ? (
                        <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsBusinessAnimating(false)}>
                          <motion.div 
                            key={`business-${currentBusinessIndex}-first`}
                            custom={businessDirection}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            onAnimationStart={() => setIsBusinessAnimating(true)}
                            onAnimationComplete={() => setIsBusinessAnimating(false)}
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

              {businessDev.length > 3 && (
                <>
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevBusinessSlide}
                      disabled={isBusinessAnimating}
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
                      onClick={nextBusinessSlide}
                      disabled={isBusinessAnimating}
                      className="p-3 rounded-full bg-[#6B5B3D] text-white shadow-lg transform translate-x-1/2 hover:bg-[#5A4C33] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </>
              )}

              {businessDev.length > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  {businessDev.map((_, index) => (
                    <motion.button
                      key={`business-dot-${index}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        if (!isBusinessAnimating) {
                          setBusinessDirection(index > currentBusinessIndex ? 1 : -1);
                          setCurrentBusinessIndex(index);
                        }
                      }}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentBusinessIndex ? 'bg-[#6B5B3D]' : 'bg-gray-300 hover:bg-[#6B5B3D]/50'
                      }`}
                      disabled={isBusinessAnimating}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Show message if no users found */}
        {lawyers.length === 0 && businessDev.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No team members found. Please check back later.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

const AttorneyCard = ({ attorney }: { attorney: Attorney & { arrayPosition: number } }) => {
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
        {attorney.image ? (
          <Image
            src={attorney.image}
            alt={attorney.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-4xl">
              {attorney.name.charAt(0)}
            </span>
          </div>
        )}
      </motion.div>
      
      <h3 className="text-xl font-semibold text-[#6B5B3D] mb-2">
        {attorney.name}
      </h3>
      <p className="text-gray-600 mb-4">{attorney.position}</p>
      
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
                className="w-10 h-10 rounded-full bg-[#6B5B3D] border border-[#6B5B3D] flex items-center justify-center hover:bg-[#6B5B3D] hover:text-white transition-colors duration-300 text-white"
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
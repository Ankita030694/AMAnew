'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa'

const attorneys = [
  {
    image: "/shreychad.svg",
    title: "Shrey Arora",
    role: "Senior Associate",
    socials: {
      twitter: "#", 
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    image: "/rahul.svg",
    title: "Rahul Gour", 
    role: "Associate",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    image: "/ritka.svg",
    title: "Ritika Harplani",
    role: "Associate",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    image: "/abu.svg",
    title: "Abhu Dash",
    role: "Associate",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
];

export default function OurAttorneys() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAutoPlay = useCallback(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % attorneys.length);
      }
    }, 5000);

    return interval;
  }, [isAnimating]);

  useEffect(() => {
    const interval = startAutoPlay();
    return () => clearInterval(interval);
  }, [startAutoPlay]);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % attorneys.length);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setDirection(-1);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + attorneys.length) % attorneys.length);
    }
  }, [isAnimating]);

  const getVisibleAttorneys = useCallback(() => {
    const visibleAttorneys = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % attorneys.length;
      visibleAttorneys.push({
        ...attorneys[index],
        position: i
      });
    }
    return visibleAttorneys;
  }, [currentIndex]);

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
            OUR ATTORNEYS
          </h2>
          <div className="w-24 h-1 bg-[#6B5B3D] mx-auto"></div>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-4 md:px-8 lg:px-12">
              {getVisibleAttorneys().map((attorney, index) => (
                <div key={`${attorney.title}-${index}`} className="relative">
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
        </div>
      </motion.div>
    </div>
  );
}

const AttorneyCard = ({ attorney }: { attorney: typeof attorneys[0] & { position: number } }) => {
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
                className="w-10 h-10 rounded-full bg-white border border-[#6B5B3D] flex items-center justify-center hover:bg-[#6B5B3D] hover:text-white transition-colors duration-300"
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
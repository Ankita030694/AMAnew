'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TimelineCards = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const cards = [
    {
      id: 'history',
      title: 'Our History',
      imageSrc: '/city1.svg',
      description: 'Discover the journey that shaped us into the firm we are today. From our humble beginnings to landmark cases that defined our reputation.',
      link: '/ourhistory'
    },
    {
      id: 'present',
      title: 'Present',
      imageSrc: '/city2.svg',
      description: 'See how we&apos;re making a difference today with innovative approaches, technology integration, and client-centered solutions.',
      link: '/present'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      imageSrc: '/city3.svg',
      description: 'Explore our roadmap for the future as we continue to evolve and pioneer new standards in legal excellence.',
      link: '/ourvision'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#1A1A1A] relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-[#D2A02A] opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#5A4C33] opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Journey Through Time</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore the chapters of our story – from where we began to where we&apos;re headed.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card) => (
            <motion.div 
              key={card.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-[#000000] rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 border border-[#D2A02A]/20"
            >
              <Link href={card.link} className="block h-full">
                <div className="relative h-64 w-full">
                  <Image 
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-contain"
                    quality={90}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                    animate={{ 
                      opacity: hoveredCard === card.id ? 0.3 : 0.6
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <motion.div
                    animate={{ 
                      x: hoveredCard === card.id ? 5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl font-bold text-[#D2A02A] mb-3">{card.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mb-4"></div>
                    <p className="text-gray-300">{card.description}</p>
                    
                    <motion.div 
                      className="mt-6 flex items-center text-[#D2A02A]"
                      animate={{ 
                        x: hoveredCard === card.id ? 5 : 0
                      }}
                    >
                      <span>Learn more</span>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ 
                          x: hoveredCard === card.id ? 5 : 0,
                          transition: { repeat: hoveredCard === card.id ? Infinity : 0, repeatType: "reverse", duration: 0.5 }
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineCards;
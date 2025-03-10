'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HistoryPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Timeline data
  const timeline = [
    {
      id: 'founding',
      year: '1985',
      title: 'The Foundation',
      description: 'Our firm was established by Jonathan Miller and Sarah Chen, two visionaries who sought to create a practice built on integrity and excellence.',
      imageSrc: '/founding.svg',
    },
    {
      id: 'expansion',
      year: '1998',
      title: 'Regional Expansion',
      description: 'After building a strong reputation locally, we expanded our practice to serve clients across the entire state, opening three additional offices.',
      imageSrc: '/expansion.svg',
    },
    {
      id: 'landmark',
      year: '2007',
      title: 'Landmark Case',
      description: 'Our representation in Wilson v. Evergreen became a defining moment, establishing new precedents and cementing our reputation for handling complex litigation.',
      imageSrc: '/landmark.svg',
    },
    {
      id: 'national',
      year: '2015',
      title: 'National Recognition',
      description: 'Our dedication to client service and legal excellence earned us recognition among the top 50 law firms nationwide.',
      imageSrc: '/recognition.svg',
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

  const itemVariants = {
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
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1A1A1A] relative overflow-hidden">
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
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our History</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
            <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg">
              The story of our firm is one of dedication, growth, and unwavering commitment to our clients. Discover the journey that shaped who we are today.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-96 w-full rounded-xl overflow-hidden mb-24"
          >
            <Image 
              src="/bannerbg.png"
              alt="Our firm's history"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold text-white">Decades of Excellence</h2>
              <p className="text-gray-300 mt-2">A tradition of legal expertise since 1985</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Our Journey Through the Years
          </motion.h2>
          
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#D2A02A] to-[#5A4C33] opacity-30"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10"
            >
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveSection(item.id)}
                  onMouseLeave={() => setActiveSection(null)}
                  className="mb-24 relative"
                >
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 p-6">
                      <motion.div
                        animate={{ 
                          x: activeSection === item.id ? (index % 2 === 0 ? 5 : -5) : 0
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 -top-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#D2A02A] text-black font-bold text-xl">
                          {item.year}
                        </div>
                        <div className="bg-[#000000] rounded-lg p-8 border border-[#D2A02A]/20 shadow-xl ml-6">
                          <h3 className="text-2xl font-bold text-[#D2A02A] mb-3">{item.title}</h3>
                          <div className="w-12 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mb-4"></div>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="md:w-1/2 p-6">
                      <motion.div 
                        className="relative h-72 rounded-lg overflow-hidden shadow-lg border border-[#D2A02A]/20"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image 
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <motion.div 
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#D2A02A] rounded-full z-20"
                    animate={{ 
                      scale: activeSection === item.id ? 1.3 : 1,
                      boxShadow: activeSection === item.id ? "0 0 15px 5px rgba(210, 160, 42, 0.5)" : "none"
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="relative z-10 py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Enduring Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Throughout our history, these core principles have guided our practice and our interactions with clients.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { title: "Integrity", icon: "⚖️", description: "We maintain the highest ethical standards in all our dealings." },
              { title: "Excellence", icon: "🏆", description: "We strive for exceptional quality in every aspect of our practice." },
              { title: "Client Focus", icon: "🤝", description: "Our clients' interests and needs are at the center of everything we do." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-[#000000] rounded-lg p-8 shadow-xl border border-[#D2A02A]/20 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#D2A02A] mb-3">{value.title}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mb-4"></div>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-[#000000] to-[#1A1A1A] rounded-xl p-12 border border-[#D2A02A]/20 shadow-xl"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Discover Our Present and Future</h2>
              <p className="text-gray-300 mb-8">Continue exploring our story to see how our rich history has shaped our present practices and future vision.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/about/present" className="px-8 py-3 bg-[#D2A02A] text-black font-bold rounded-lg inline-flex items-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    Explore Our Present
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </Link>
                <Link href="/about/vision" className="px-8 py-3 border-2 border-[#D2A02A] text-[#D2A02A] font-bold rounded-lg inline-flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    Our Vision
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
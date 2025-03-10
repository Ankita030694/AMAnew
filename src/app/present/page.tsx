'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PresentPage = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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

  // Practice areas
  const practiceAreas = [
    {
      id: "corporate",
      icon: "👔",
      title: "Corporate Law",
      description: "Expert guidance for businesses of all sizes, from formation to governance, mergers, and acquisitions."
    },
    {
      id: "litigation",
      icon: "⚖️",
      title: "Litigation",
      description: "Strategic representation in complex disputes with a proven track record of successful outcomes."
    },
    {
      id: "ip",
      icon: "💡",
      title: "Intellectual Property",
      description: "Protection for your innovations, creative works, and brand identity in the digital age."
    },
    {
      id: "real-estate",
      icon: "🏢",
      title: "Real Estate",
      description: "Comprehensive legal services for property transactions, development, and dispute resolution."
    },
    {
      id: "employment",
      icon: "👥",
      title: "Employment Law",
      description: "Guidance on workplace policies, compliance, and representation in employment disputes."
    },
    {
      id: "estate",
      icon: "📝",
      title: "Estate Planning",
      description: "Personalized strategies for asset protection, succession planning, and wealth preservation."
    }
  ];

  // Stats
  const stats = [
    { label: "Cases Won", value: "95%", icon: "🏆" },
    { label: "Client Satisfaction", value: "98%", icon: "⭐" },
    { label: "Legal Professionals", value: "120+", icon: "👩‍⚖️" },
    { label: "Years Combined Experience", value: "850+", icon: "⏱️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1A1A1A] text-white">
      {/* Background elements */}
      <motion.div 
        className="fixed -top-64 -right-64 w-96 h-96 rounded-full bg-[#D2A02A] opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="fixed -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#5A4C33] opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <motion.div 
        className="relative h-96 w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/city2.svg"
            alt="Present Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Present
          </motion.h1>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            How we&apos;re making a difference today with innovative approaches, technology integration, and client-centered solutions.
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <motion.div 
          className="max-w-7xl mx-auto bg-gradient-to-r from-[#121212] to-[#1A1A1A] rounded-lg p-10 border border-[#D2A02A]/20 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#D2A02A] opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-[#D2A02A] mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Practice Areas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            We offer comprehensive legal expertise across multiple disciplines to meet all your legal needs.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {practiceAreas.map((area) => (
            <motion.div 
              key={area.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#0A0A0A] rounded-lg overflow-hidden shadow-xl border border-[#D2A02A]/20 p-8"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-2xl font-bold text-[#D2A02A] mb-3">{area.title}</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mb-4"></div>
              <p className="text-gray-300">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technology-Driven Practice</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            We leverage cutting-edge technology to deliver more efficient, accurate, and accessible legal services.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl border border-[#D2A02A]/20">
              <Image 
                src="/technology.svg"
                alt="Legal Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-[#D2A02A] mb-6">Innovation at Every Level</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mb-6"></div>
            
            <div className="space-y-6">
              {[
                {
                  title: "AI-Powered Legal Research",
                  description: "Utilizing advanced algorithms to analyze thousands of cases and precedents in minutes, ensuring comprehensive legal strategies."
                },
                {
                  title: "Secure Client Portal",
                  description: "24/7 access to case documents, communications, and updates through our encrypted client portal."
                },
                {
                  title: "Virtual Consultations",
                  description: "Flexible meeting options through our secure video conferencing platform, making legal counsel more accessible."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#121212] to-[#1A1A1A] rounded-lg p-10 border border-[#D2A02A]/20 shadow-xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonialNum) => (
              <motion.div 
                key={testimonialNum}
                className="bg-[#0A0A0A] rounded-lg p-6 shadow-lg border border-[#D2A02A]/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: testimonialNum * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl text-[#D2A02A]">❝</div>
                </div>
                <p className="text-gray-300 italic mb-6">
                  "Their innovative approach and commitment to excellence made all the difference in our case. The team was responsive, thorough, and truly cared about our success."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#D2A02A]/20 flex items-center justify-center text-[#D2A02A] font-bold mr-4">
                    {testimonialNum}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Client Name</h4>
                    <p className="text-gray-400 text-sm">CEO, Company Name</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#121212] to-[#1A1A1A] rounded-lg p-10 border border-[#D2A02A]/20 shadow-xl relative overflow-hidden">
          <motion.div 
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#D2A02A] opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="relative z-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Schedule a Consultation Today</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mb-6"></div>
            <p className="text-gray-300 mb-8">
              Experience our innovative legal solutions and client-centered approach firsthand.
            </p>
            <Link href="/contact" className="inline-block bg-[#D2A02A] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#B58A24] transition-colors duration-300">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation links */}
      <section className="py-12 px-4 max-w-7xl mx-auto border-t border-[#D2A02A]/20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link href="/about/history" className="flex items-center text-[#D2A02A] hover:text-[#B58A24] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to History</span>
          </Link>
          <span className="text-gray-500 mx-4 hidden md:inline">|</span>
          <Link href="/about/vision" className="flex items-center text-[#D2A02A] hover:text-[#B58A24] transition-colors duration-300">
            <span>Continue to Vision</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PresentPage;
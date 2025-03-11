'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

const PresentPage = () => {
  // Animation controls
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      {/* Background elements */}
      <motion.div 
        className="fixed -top-64 -right-64 w-96 h-96 rounded-full bg-[#D2A02A] opacity-5 z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="fixed -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#5A4C33] opacity-5 z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <motion.div 
        className="relative h-auto min-h-96 w-full flex items-center justify-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image 
            src="/city2.svg"
            alt="Present Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5A4C33] mb-6 mt-15"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            AMA Legal Solutions: Transforming Legal Services Across India and Beyond
          </motion.h1>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="text-lg text-[#555555] max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="mb-4">
                In the modern legal landscape, the demand for trusted legal advisors, expert legal consultation, and strategic legal representation has never been greater. At AMA Legal Solutions, we are leading this transformation by expanding our top-rated law firm beyond Gurugram to major cities, including Delhi, Mumbai, Kolkata, Jaipur, Chennai, and Dubai.
              </p>
              <p>
                Under the leadership of Anuj Anand Malik, AMA Legal Solutions has emerged as a leading law firm in India, offering expert legal services in banking and finance law, corporate law, arbitration, real estate law, and entertainment law. With a strong commitment to integrity, professionalism, and client success, we ensure that individuals, businesses, and corporations receive the best legal representation tailored to their needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-lg text-[#555555] max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#D2A02A]">Why Choose AMA Legal Solutions?</h3>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>Experienced Legal Team – Our highly qualified lawyers, legal consultants, and advocates bring years of expertise in handling complex legal matters.</li>
                <li>Comprehensive Legal Services – From business compliance, contract negotiation, and financial litigation to loan settlements, debt restructuring, and dispute resolution, we provide end-to-end legal solutions.</li>
                <li>National & International Presence – With offices in Delhi, Mumbai, Kolkata, Jaipur, Chennai, and Dubai, we are now accessible to clients across India and the Middle East.</li>
                <li>Client-Centric Approach – We believe in personalized legal solutions that prioritize client success, ensuring every case is handled with precision and dedication.</li>
                <li>Global Legal Perspective – As active members of IACC, MCIA, Bar Council of Delhi, and Bar Council of India, we stay ahead of legal advancements to provide cutting-edge legal services.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="text-lg text-[#555555] max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#D2A02A]">Expanding Our Legal Expertise Across Multiple Cities</h3>
              <p className="mb-2">
                Our expansion into Delhi, Mumbai, Kolkata, Jaipur, Chennai, and Dubai is a significant milestone in our journey. These cities are key business hubs, and having a reputable law firm in these regions allows us to serve a broader client base, including:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>Corporate Clients & Startups – Business formation, compliance, contract drafting, M&A, dispute resolution.</li>
                <li>Financial & Banking Sector – Loan settlements, debt recovery, financial disputes, regulatory compliance.</li>
                <li>Real Estate & Property Law – Property disputes, lease agreements, RERA compliance.</li>
                <li>Entertainment & Media Law – Legal counsel for production houses, intellectual property rights, contract negotiations.</li>
                <li>International Legal Matters – Cross-border disputes, arbitration, and international business compliance.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="text-lg text-[#555555] max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#D2A02A]">How AMA Legal Solutions is Changing the Legal Industry</h3>
              <p className="mb-2">
                In an era where legal services are becoming increasingly digital, we are incorporating technology-driven legal solutions to improve accessibility, efficiency, and results. Our mission is to make legal services in India and beyond more transparent, efficient, and client-friendly.
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>Online Legal Consultation – Clients can now seek legal advice online from our expert lawyers.</li>
                <li>Quick & Hassle-Free Loan Settlements – Helping individuals manage and settle financial disputes effectively.</li>
                <li>24/7 Legal Support for Businesses – Ensuring corporate clients stay compliant and protected.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="text-lg text-[#555555] max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#D2A02A]">Trusted by Over 1000 Clients – Your Success is Our Commitment</h3>
              <p className="mb-2">
                With a 4.8-star rating, 650+ successful case conclusions, and 300+ legal closures, our track record speaks for itself. At AMA Legal Solutions, we don&apos;t just practice law—we deliver results-driven legal solutions that make a difference.
              </p>
              <p className="mb-2">
                As we continue to grow, our focus remains the same: Providing exceptional legal services in India and internationally while upholding the values of integrity, trust, and excellence.
              </p>
              <p>
                Looking for the best law firm in India? Contact us today. Visit us at: www.amalegalsolutions.com
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <motion.div 
          className="max-w-7xl mx-auto bg-gradient-to-r from-[#F9F3E7] to-[#F5EFE2] rounded-lg p-10 border border-[#D2A02A]/20 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#D2A02A] opacity-10 z-0"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { label: "Cases Won", value: "95%", icon: "🏆" },
              { label: "Client Satisfaction", value: "98%", icon: "⭐" },
              { label: "Legal Professionals", value: "120+", icon: "👩‍⚖️" },
              { label: "Years Combined Experience", value: "850+", icon: "⏱️" }
            ].map((stat, index) => (
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
                <p className="text-[#5A4C33]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#5A4C33] to-[#4A3C23] rounded-lg p-10 shadow-xl relative overflow-hidden">
          <motion.div 
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#D2A02A] opacity-20 z-0"
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
            <div className="w-24 h-1 bg-[#D2A02A] mx-auto mb-6"></div>
            <p className="text-gray-200 mb-8">
              Experience our innovative legal solutions and client-centered approach firsthand.
            </p>
            <Link href="/contact" className="inline-block bg-[#D2A02A] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#B58A24] transition-colors duration-300 shadow-lg">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation links */}
      <section className="py-12 px-4 max-w-7xl mx-auto border-t border-[#D2A02A]/20 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link href="/about/history" className="flex items-center text-[#5A4C33] hover:text-[#D2A02A] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to History</span>
          </Link>
          <span className="text-gray-300 mx-4 hidden md:inline">|</span>
          <Link href="/about/vision" className="flex items-center text-[#5A4C33] hover:text-[#D2A02A] transition-colors duration-300">
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
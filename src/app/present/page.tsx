'use client'
import { useEffect } from 'react';
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
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 mt-15"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">
            AMA Legal Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
          <p className="text-[#5A4C33]/80 mt-6 max-w-2xl mx-auto">
            Transforming Legal Services Across India and Beyond
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg p-8 shadow-xl border-t-4 border-[#D2A02A]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">
            Leading the Legal Transformation
          </h3>
          <p className="text-[#5A4C33] mb-6">
            In the modern legal landscape, the demand for trusted legal advisors, expert legal consultation, and strategic legal representation has never been greater. At AMA Legal Solutions, we are leading this transformation by expanding our top-rated law firm beyond Gurugram to major cities, including Delhi, Mumbai, Kolkata, Jaipur, Chennai, and Dubai. Under the leadership of Anuj Anand Malik, AMA Legal Solutions has emerged as a leading law firm in India, offering expert legal services in banking and finance law, corporate law, arbitration, real estate law, and entertainment law.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="bg-[#F8F5EC] p-6 rounded-lg border-l-4 border-[#D2A02A]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-[#5A4C33] mb-3">
                Experienced Legal Team
              </h4>
              <p className="text-[#5A4C33]/80">
                Our highly qualified lawyers, legal consultants, and advocates bring years of expertise in handling complex legal matters.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F8F5EC] p-6 rounded-lg border-l-4 border-[#D2A02A]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-[#5A4C33] mb-3">
                Comprehensive Legal Services
              </h4>
              <p className="text-[#5A4C33]/80">
                From business compliance to financial litigation and dispute resolution, we provide end-to-end legal solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F8F5EC] p-6 rounded-lg border-l-4 border-[#D2A02A]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-[#5A4C33] mb-3">
                National & International Presence
              </h4>
              <p className="text-[#5A4C33]/80">
                With offices in Delhi, Mumbai, Kolkata, Jaipur, Chennai, and Dubai, accessible to clients across India and the Middle East.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F8F5EC] p-6 rounded-lg border-l-4 border-[#D2A02A]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-[#5A4C33] mb-3">
                Client-Centric Approach
              </h4>
              <p className="text-[#5A4C33]/80">
                We believe in personalized legal solutions that prioritize client success, ensuring every case is handled with precision.
              </p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold text-[#D2A02A] mb-4 mt-10">
            Expanding Our Legal Expertise
          </h3>
          <p className="text-[#5A4C33] mb-6">
            Our expansion into Delhi, Mumbai, Kolkata, Jaipur, Chennai, and Dubai is a significant milestone in our journey. These cities are key business hubs, and having a reputable law firm in these regions allows us to serve a broader client base.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="bg-[#F8F5EC] p-6 rounded-lg border-l-4 border-[#D2A02A]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-[#5A4C33] mb-3">
                Corporate Clients & Startups
              </h4>
              <p className="text-[#5A4C33]/80">
                Business formation, compliance, contract drafting, M&A, dispute resolution.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F8F5EC] p-6 rounded-lg border-l-4 border-[#D2A02A]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-[#5A4C33] mb-3">
                Financial & Banking Sector
              </h4>
              <p className="text-[#5A4C33]/80">
                Loan settlements, debt recovery, financial disputes, regulatory compliance.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F8F5EC] p-6 rounded-lg border-l-4 border-[#D2A02A]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-[#5A4C33] mb-3">
                Real Estate & Property Law
              </h4>
              <p className="text-[#5A4C33]/80">
                Property disputes, lease agreements, RERA compliance.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F8F5EC] p-6 rounded-lg border-l-4 border-[#D2A02A]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-[#5A4C33] mb-3">
                Entertainment & Media Law
              </h4>
              <p className="text-[#5A4C33]/80">
                Legal counsel for production houses, intellectual property rights, contract negotiations.
              </p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold text-[#D2A02A] mb-4 mt-10">
            How We&apos;re Changing the Legal Industry
          </h3>
          <p className="text-[#5A4C33] mb-6">
            In an era where legal services are becoming increasingly digital, we are incorporating technology-driven legal solutions to improve accessibility, efficiency, and results. Our mission is to make legal services in India and beyond more transparent, efficient, and client-friendly.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Online Legal Consultation",
                description:
                  "Clients can now seek legal advice online from our expert lawyers.",
              },
              {
                title: "Quick & Hassle-Free Loan Settlements",
                description:
                  "Helping individuals manage and settle financial disputes effectively.",
              },
              {
                title: "24/7 Legal Support for Businesses",
                description:
                  "Ensuring corporate clients stay compliant and protected.",
              },
              {
                title: "Global Legal Perspective",
                description:
                  "As active members of IACC, MCIA, Bar Council of Delhi, and Bar Council of India, we stay ahead of legal advancements.",
              },
              {
                title: "International Legal Matters",
                description:
                  "Cross-border disputes, arbitration, and international business compliance.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <div className="mt-1 text-[#D2A02A]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#5A4C33] mb-1">
                    {service.title}
                  </h4>
                  <p className="text-[#5A4C33]/80">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gradient-to-r from-[#F8F5EC] to-white rounded-lg border-l-4 border-[#D2A02A]">
            <div className="flex items-center gap-4 mb-4">
              <h4 className="text-xl font-bold text-[#5A4C33]">
                Trusted by Over 1000 Clients
              </h4>
            </div>
            <p className="text-[#5A4C33]/80">
              With a 4.8-star rating, 650+ successful case conclusions, and 300+ legal closures, our track record speaks for itself. At AMA Legal Solutions, we don&apos;t just practice law—we deliver results-driven legal solutions that make a difference.
            </p>
            <p className="text-[#5A4C33]/80 mt-3">
              Looking for the best law firm in India? Contact us today. Visit us at: www.amalegalsolutions.com
            </p>
          </div>
        </motion.div>
      </section>

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
          <Link href="/ourhistory" className="flex items-center text-[#5A4C33] hover:text-[#D2A02A] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to History</span>
          </Link>
          <span className="text-gray-300 mx-4 hidden md:inline">|</span>
          <Link href="/ourvision" className="flex items-center text-[#5A4C33] hover:text-[#D2A02A] transition-colors duration-300">
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
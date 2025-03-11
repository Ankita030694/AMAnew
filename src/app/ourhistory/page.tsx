"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HistoryPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background elements - elegant with gold accents */}
      <motion.div
        className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-[#D2A02A] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#5a4c33] opacity-15"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-[#5a4c33] mb-6">Our History</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5a4c33] mx-auto"></div>
            <p className="text-[#5a4c33] mt-8 max-w-3xl mx-auto text-lg">
              The story of our firm is one of dedication, growth, and unwavering
              commitment to our clients. Discover the journey that shaped who we
              are today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-96 w-full rounded-xl overflow-hidden mb-24 shadow-xl"
            style={{ boxShadow: "0 10px 30px rgba(210, 160, 42, 0.15), 0 5px 15px rgba(90, 76, 51, 0.1)" }}
          >
            <Image
              src="/bannerbg.png"
              alt="Our firm&apos;s history"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a4c33] to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold text-white">
                Decades of Excellence
              </h2>
              <p className="text-[#f0e6cc] mt-2">
                A tradition of legal expertise since 1985
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-[#5a4c33] text-center mb-16"
          >
            <span className="relative">
              Our Journey Through the Years
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#D2A02A]"></span>
            </span>
          </motion.h2>

          <p className="text-[#5a4c33] text-lg leading-relaxed mb-8">
            <strong>Our Legacy: The Foundation of AMA Legal Solutions</strong><br /><br />

            At <strong className="text-[#D2A02A]">AMA Legal Solutions</strong>, our journey is deeply rooted in a legacy of legal excellence, integrity, and an unwavering commitment to justice. Our foundation was laid over <strong className="text-[#D2A02A]">35 years ago</strong> by <strong>R.C. Malik</strong>, a visionary legal mind who dedicated his life to upholding the law with professionalism and ethical practice. His passion for justice and relentless pursuit of excellence set the cornerstone of our firm, earning a reputation for trust and reliability.<br /><br />

            From <strong>1982 to 2016</strong>, R.C. Malik built a strong legal practice, earning the respect of clients and peers alike. His commitment to ethical advocacy and meticulous legal counsel helped numerous individuals and businesses navigate complex legal challenges.<br /><br />

            As time evolved, so did our mission. In <strong>2014</strong>, <strong>Anuj Anand Malik</strong>, carrying forward his grandfather&apos;s vision, embarked on a journey to modernize and expand the firm. With a fresh perspective and a dynamic approach, he integrated contemporary legal strategies while preserving the core values that had defined the firm for decades. Between <strong>2014 and 2019</strong>, Anuj Anand Malik worked tirelessly to bridge traditional legal principles with innovative solutions, ensuring that clients received the most effective representation in an ever-evolving legal landscape.<br /><br />

            By <strong className="text-[#D2A02A]">2020</strong>, AMA Legal Solutions had solidified its reputation as a forward-thinking law firm, adept at handling intricate legal matters with precision and expertise. The firm expanded its specialization in <strong>banking and finance law, corporate law, arbitration, real estate law, and entertainment law</strong>, offering strategic and client-centric legal solutions.<br /><br />

            Since <strong>2021</strong>, we have continued to uphold the vision of our founders, blending legacy with innovation. Today, AMA Legal Solutions stands as a beacon of trust and professionalism in the legal industry, serving <strong className="text-[#D2A02A]">over 1000 clients</strong>, successfully concluding <strong className="text-[#D2A02A]">650+ cases</strong>, and delivering <strong className="text-[#D2A02A]">300+ legal closures</strong>. Our dedication to excellence remains steadfast, ensuring that each client receives personalized legal solutions backed by decades of expertise.<br /><br />

            With memberships in the <strong>Indo-American Chamber of Commerce (IACC), Mumbai Centre for International Arbitration (MCIA), Bar Council of Delhi, and Bar Council of India</strong>, we bring a global legal perspective to our practice, staying ahead of legal advancements to serve our clients effectively.<br /><br />

            Our journey from a visionary founding to a premier law firm in <strong>Gurugram, India</strong> is a testament to our dedication, perseverance, and the trust our clients place in us. At <strong className="text-[#D2A02A]">AMA Legal Solutions</strong>, we don&apos;t just practice law—we uphold a legacy.<br /><br />

            📍 Visit us at: <a href="http://www.amalegalsolutions.com" className="text-[#D2A02A] hover:text-[#5a4c33] font-semibold underline">www.amalegalsolutions.com</a>
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#5a4c33] mb-4">
              Enduring Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5a4c33] mx-auto"></div>
            <p className="text-[#5a4c33] mt-6 max-w-2xl mx-auto">
              Throughout our history, these core principles have guided our
              practice and our interactions with clients.
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
              {
                title: "Integrity",
                icon: "⚖️",
                description:
                  "We maintain the highest ethical standards in all our dealings.",
              },
              {
                title: "Excellence",
                icon: "🏆",
                description:
                  "We strive for exceptional quality in every aspect of our practice.",
              },
              {
                title: "Client Focus",
                icon: "🤝",
                description:
                  "Our clients&apos; interests and needs are at the center of everything we do.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg p-8 shadow-md border-t-4 border-[#D2A02A] text-center"
                style={{ boxShadow: "0 4px 20px rgba(90, 76, 51, 0.08)" }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#5a4c33] mb-3">
                  {value.title}
                </h3>
                <div className="w-12 h-1 bg-[#D2A02A] mx-auto mb-4"></div>
                <p className="text-[#5a4c33]/80">{value.description}</p>
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
            className="bg-gradient-to-r from-white to-[#FAF7F0] rounded-xl p-12 border border-[#E6D7B0] shadow-lg"
            style={{ boxShadow: "0 10px 30px rgba(210, 160, 42, 0.07), 0 5px 15px rgba(90, 76, 51, 0.05)" }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#5a4c33] mb-6">
                Discover Our Present and Future
              </h2>
              <p className="text-[#5a4c33]/80 mb-8">
                Continue exploring our story to see how our rich history has
                shaped our present practices and future vision.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/about/present"
                  className="px-8 py-3 bg-[#D2A02A] text-white font-bold rounded-lg inline-flex items-center shadow-md hover:bg-[#b18622] transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    Explore Our Present
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.div>
                </Link>
                <Link
                  href="/about/vision"
                  className="px-8 py-3 border-2 border-[#5a4c33] text-[#5a4c33] font-bold rounded-lg inline-flex items-center hover:bg-[#5a4c33]/5 transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    Our Vision
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
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
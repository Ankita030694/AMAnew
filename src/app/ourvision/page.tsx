"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VisionPage = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

  // Vision pillars
  const visionPillars = [
    {
      id: "innovation",
      icon: "",
      title: "Innovation",
      description:
        "Pioneering new legal technologies and methodologies that redefine the practice of law for the digital age.",
    },
    {
      id: "accessibility",
      icon: "",
      title: "Accessibility",
      description:
        "Making quality legal services available to a broader spectrum of clients through technology and flexible service models.",
    },
    {
      id: "sustainability",
      icon: "",
      title: "Sustainability",
      description:
        "Implementing eco-friendly practices and supporting social responsibility initiatives within our operations and communities.",
    },
    {
      id: "diversity",
      icon: "",
      title: "Diversity & Inclusion",
      description:
        "Building a firm that reflects the communities we serve with diverse perspectives that enhance our legal solutions.",
    },
    {
      id: "global",
      icon: "",
      title: "Global Reach",
      description:
        "Expanding our international presence to serve clients seamlessly across borders with localized expertise.",
    },
    {
      id: "education",
      icon: "",
      title: "Legal Education",
      description:
        "Contributing to the development of the next generation of legal professionals through mentorship and educational initiatives.",
    },
  ];
  // Strategic goals
  const strategicGoals = [
    {
      year: "2026",
      title: "Digital Transformation",
      description:
        "Complete integration of AI-powered legal research and document review across all practice areas.",
    },
    {
      year: "2027",
      title: "Global Expansion",
      description:
        "Establish offices in key international markets to better serve multinational clients.",
    },
    {
      year: "2028",
      title: "Sustainability Leadership",
      description:
        "Become the first carbon-neutral law firm in our region with sustainable operations.",
    },
    {
      year: "2030",
      title: "Industry Leadership",
      description:
        "Recognized as the top firm for innovation and client satisfaction in our primary practice areas.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      {/* Background elements */}
      <motion.div
        className="fixed -top-64 -right-64 w-96 h-96 rounded-full bg-[#D2A02A] opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#5A4C33] opacity-5"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -30, 0],
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
            src="/city3.svg"
            alt="Vision Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white bg-opacity-20"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#5A4C33] mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Vision
          </motion.h1>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          <motion.p
            className="text-xl text-[#5A4C33]/80 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Explore our roadmap for the future as we continue to evolve and
            pioneer new standards in legal excellence.
          </motion.p>
        </div>
      </motion.div>

      {/* Vision Statement Section */}
      <section className="px-4">
        <motion.div
          className="max-w-7xl mx-auto bg-gradient-to-r from-[#F8F5EC] to-[#F5F0E4] rounded-lg p-10 border border-[#D2A02A]/20 shadow-lg relative overflow-hidden"
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

          <div className="relative z-10 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#D2A02A] mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              &quot;Reimagining Legal Services for a Changing World&quot;
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            ></motion.div>
            <motion.p
              className="text-xl text-[#5A4C33] max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              We envision a future where legal expertise is enhanced by
              technology, accessible to all who need it, and delivered with
              unwavering ethical standards. Our firm will lead this
              transformation, setting new benchmarks for client service,
              professional excellence, and positive impact on society.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Vision Pillars Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">
            Our Vision Pillars
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
          <p className="text-[#5A4C33]/80 mt-6 max-w-2xl mx-auto">
            The key principles that guide our strategic direction and shape our
            future.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {visionPillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border-l-4 border-[#D2A02A] p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-[#D2A02A] mb-3">
                {pillar.title}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mb-4"></div>
              <p className="text-[#5A4C33]">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Strategic Roadmap Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-[#F8F5EC]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">
            Strategic Roadmap
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
          <p className="text-[#5A4C33]/80 mt-6 max-w-2xl mx-auto">
            Our planned milestones on the journey to realizing our vision.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D2A02A] to-[#5A4C33] transform -translate-x-1/2"></div>

          {/* Timeline items */}
          {strategicGoals.map((goal, index) => (
            <div key={goal.year} className="relative z-10 mb-16 last:mb-0">
              <div
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Year circle */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center transform -translate-x-1/2 border-4 border-white shadow-md"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                ></motion.div>

                {/* Content */}
                <motion.div
                  className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-[#D2A02A]">
                    <h3 className="text-3xl font-bold text-[#D2A02A] mb-2">
                      {goal.year}
                    </h3>
                    <h4 className="text-xl font-bold text-[#5A4C33] mb-3">
                      {goal.title}
                    </h4>
                    <div
                      className={`w-12 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mb-4 ${
                        index % 2 === 0 ? "ml-auto" : ""
                      }`}
                    ></div>
                    <p className="text-[#5A4C33]/80">{goal.description}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Roadmap Section - REPLACED WITH NEW CONTENT */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">
            Strategic Roadmap
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
          <p className="text-[#5A4C33]/80 mt-6 max-w-2xl mx-auto">
            Our vision for the future as we continue to transform legal services
            across India and beyond.
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
            Expanding Our Legal Expertise Across Multiple Countries
          </h3>
          <p className="text-[#5A4C33] mb-6">
            Our vision is to expand into the UK, Canada, USA, and Australia,
            establishing ourselves as a trusted name in legal services, loan
            settlements, and financial dispute resolution on a global scale.
            These regions are key business hubs, and our presence there will
            allow us to serve a wider international clientele with expert legal
            solutions. We are committed to making legal support more accessible,
            ensuring individuals and businesses receive the guidance they need
            to navigate financial and legal challenges seamlessly. This
            expansion is a step toward our mission of delivering trusted,
            results-driven legal services worldwide.
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
                Business formation, compliance, contract drafting, M&A, dispute
                resolution.
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
                Loan settlements, debt recovery, financial disputes, regulatory
                compliance.
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
                Legal counsel for production houses, intellectual property
                rights, contract negotiations.
              </p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold text-[#D2A02A] mb-4 mt-10">
            Vision for the Future
          </h3>
          <p className="text-[#5A4C33] mb-6">
            At AMA Legal Solutions, our vision is to become India&apos;s most
            trusted and innovative law firm, delivering world-class legal
            services with a focus on technology, accessibility, and client
            empowerment.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Global Expansion",
                description:
                  "Expand our presence to more national and international locations, ensuring global legal support for businesses and individuals.",
              },
              {
                title: "AI-Driven Solutions",
                description:
                  "Develop AI-driven legal solutions that simplify legal processes, making them more efficient and cost-effective.",
              },
              {
                title: "Legal Education",
                description:
                  "Establish a dedicated legal research and training institute to nurture the next generation of lawyers and legal professionals.",
              },
              {
                title: "Corporate Advisory",
                description:
                  "Strengthen our corporate legal advisory services to help businesses navigate regulatory challenges with ease.",
              },
              {
                title: "Policy Advocacy",
                description:
                  "Advocate for policy reforms and legal awareness to create a more transparent and just legal system.",
              },
            ].map((goal, index) => (
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
                    {goal.title}
                  </h4>
                  <p className="text-[#5A4C33]/80">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gradient-to-r from-[#F8F5EC] to-white rounded-lg border-l-4 border-[#D2A02A]">
            <div className="flex items-center gap-4 mb-4">
              <h4 className="text-xl font-bold text-[#5A4C33]">
                Trusted by Over 5000 Clients
              </h4>
            </div>
            <p className="text-[#5A4C33]/80">
              With a 4.8-star rating, 2000+ successful case conclusions, and
              1000+ legal closures, our track record speaks for itself. At AMA
              Legal Solutions, we don&apos;t just practice law—we deliver
              results-driven legal solutions that make a difference.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 px-4 bg-[#F8F5EC]">
        <div className="max-w-7xl mx-auto bg-white rounded-lg p-10 border-t-4 border-[#D2A02A] shadow-xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">
              Community Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto"></div>
            <p className="text-[#5A4C33]/80 mt-6 max-w-2xl mx-auto">
              Our commitment to making a positive difference extends beyond our
              clients to the communities we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "",
                title: "Pro Bono Program",
                description:
                  "Expanding our pro bono services to reach 5,000 underserved individuals annually by 2030.",
              },
              {
                icon: "",
                title: "Legal Education",
                description:
                  "Establishing scholarship programs and mentorships to support diverse talent entering the legal profession.",
              },
              {
                icon: "",
                title: "Environmental Initiatives",
                description:
                  "Leading community environmental projects and providing legal support to conservation efforts.",
              },
            ].map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-[#F8F5EC] rounded-lg p-6 shadow-lg border-l-4 border-[#D2A02A] hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl mb-4 text-[#D2A02A]">
                  {initiative.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#5A4C33] mb-3">
                  {initiative.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mb-4"></div>
                <p className="text-[#5A4C33]/80">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-10 border border-[#D2A02A]/20 shadow-xl relative overflow-hidden">
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
            <h2 className="text-3xl font-bold text-[#5A4C33] mb-4">
              Join Us On Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] mx-auto mb-6"></div>
            <p className="text-[#5A4C33]/80 mb-8">
              Whether as a client, partner, or team member, be part of shaping
              the future of legal services.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D2A02A] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#5A4C33] transition-colors duration-300 shadow-md"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation links */}
      <section className="py-12 px-4 max-w-7xl mx-auto border-t border-[#D2A02A]/20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            href="/about/present"
            className="flex items-center text-[#D2A02A] hover:text-[#5A4C33] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Present</span>
          </Link>
          <span className="text-[#5A4C33]/30 mx-4 hidden md:inline">|</span>
          <Link
            href="/about"
            className="flex items-center text-[#D2A02A] hover:text-[#5A4C33] transition-colors duration-300"
          >
            <span>View All Chapters</span>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;

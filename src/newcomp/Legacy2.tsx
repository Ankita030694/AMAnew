"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    id: 1,
    heading: "Architect of Public Accountability",
    description:
      "Inspired by a deep-seated passion for justice and a transformative vision to serve the community, R.C. Malik pursued the legal profession with an unwavering commitment to excellence and public service. Guided by absolute integrity and a steadfast ethical compass, he dedicated his life to providing trusted, effective, and principled legal counsel.",
    timelineItems: [
      {
        year: "1982",
        title: "Public Service Foundation",
        description:
          "Began his professional journey with a deep-rooted dedication to justice and accountability in public administration.",
      },
      {
        year: "1990",
        title: "Distinguished Leadership",
        description:
          "Served as Ex-Comptroller and Auditor General of India and Director General of Audit (Central-Receipt), strengthening financial governance.",
      },
      {
        year: "2016",
        title: "Legacy of Integrity",
        description:
          "Laid a robust foundation for the practice, built on the pillars of trust, credibility, and enduring legal values.",
      },
    ],
    image: "/dadaji2.jpg",
    overlayTag: "FOUNDING INSPIRATION",
    overlayName: "Late Adv. R.C. Malik",
  },
  {
    id: 2,
    heading: "Champion of Legal Security",
    description:
      "I am Anuj Anand Malik, an advocate, legal consultant, banking lawyer, and loan settlement expert, committed to helping individuals, startups, and businesses overcome financial challenges and achieve legal security.",
    timelineItems: [
      {
        year: "2016",
        title: "Corporate Compliance",
        description:
          "Providing strategic legal counsel and expert representation to safeguard clients' interests through risk mitigation.",
      },
      {
        year: "2019",
        title: "Dispute Resolution",
        description:
          "Expertise in business contracts, dispute resolution, and financial litigation to ensure regulatory compliance.",
      },
      {
        year: "2023",
        title: "Loan Settlement Expert",
        description:
          "In-depth specialization in loan settlements, helping clients overcome complex financial challenges and achieve stability.",
      },
    ],
    image: "/newAssets/bhiya.png",
    overlayTag: "MANAGING PARTNER",
    overlayName: "Anuj Anand Malik",
  },
];

const Legacy2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  const currentSlide = slidesData[currentIndex];

  return (
    <section className="w-full bg-[#EBE9E4] overflow-hidden font-sans">
      {/* Shared Heading copied from Legacy.tsx */}
      <div className="w-full text-center pt-16 md:pt-24 px-4">
        <h2
          className="text-[31px] md:text-[47px] text-[#30261C] mb-4"
          style={{ fontFamily: "var(--font-polysans)" }}
        >
          Legacy Extended
        </h2>
        <p className="text-[#30261C]/85 max-w-[640px] mx-auto text-[16px] md:text-[22px]">
          A journey of vision, integrity, and legal excellence carried forward
          across generations.
        </p>
        
        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden justify-center items-center gap-3 mt-6 text-[#A88322] font-semibold text-xs tracking-wider uppercase animate-pulse">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/></svg>
          <span>Swipe to see more</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row mt-8 md:mt-12 relative pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col-reverse lg:flex-row w-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -500 || offset.x < -50) {
                nextSlide();
              } else if (swipe > 500 || offset.x > 50) {
                prevSlide();
              }
            }}
          >
            {/* Left Content Container */}
            <div className="flex-1 px-6 py-8 md:py-12 md:px-16 lg:px-24 flex flex-col justify-center relative z-10 w-full mb-[80px] lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center lg:items-start w-full"
              >
                {/* Individual Slide Heading */}
                <h2
                  className="text-[#30261C] mb-6 text-center lg:text-left"
                  style={{
                    fontFamily: "var(--font-polysans)",
                    fontSize: "clamp(32px, 5vw, 56px)",
                    fontWeight: 400,
                    lineHeight: "1.1",
                  }}
                >
                  {currentSlide.heading}
                </h2>

                {/* Introductory Paragraph */}
                <p
                  className="mb-14 max-w-2xl text-[15px] md:text-[18px] text-center lg:text-left"
                  style={{
                    color: "rgba(48, 38, 28, 0.8)",
                    lineHeight: "1.6",
                  }}
                >
                  {currentSlide.description}
                </p>
              </motion.div>

              {/* Timeline Items */}
              <div className="flex flex-col gap-10 relative pb-12 lg:pb-0">
                {/* Dotted connecting line */}
                <div className="absolute left-[44px] top-[40px] bottom-[40px] w-[2px] border-l-[3px] border-dotted border-[#A88322] opacity-50 z-[1] block" />

                {currentSlide.timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex flex-row gap-5 sm:gap-8 items-start relative z-10 w-full"
                  >
                    {/* Fixed-width Year Pill for perfect line alignment */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-[90px] py-1.5 rounded-full relative"
                      style={{
                        background:
                          "linear-gradient(135deg, #A88322 0%, #5D4811 100%)",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <span className="text-white text-[18px] font-medium tracking-wider drop-shadow-md">
                        {item.year}
                      </span>
                      {/* Outer subtle glow matching the design */}
                      <div
                        className="absolute inset-0 rounded-full blur-[8px] -z-10"
                        style={{ background: "rgba(168, 131, 34, 0.5)" }}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 mt-0 text-left">
                      <h3
                        className="text-[#30261C] text-[20px] md:text-[24px] mb-2"
                        style={{
                          fontFamily: "var(--font-polysans)",
                          fontWeight: 400,
                          lineHeight: "1.2",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[14px] md:text-[15px] max-w-xl"
                        style={{
                          color: "rgba(48, 38, 28, 0.75)",
                          lineHeight: "1.5",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full lg:w-[45%] xl:w-[48%] relative flex flex-col shrink-0 mb-8 lg:mb-0">
              {/* Image Box */}
              <div className="relative w-full h-[400px] lg:h-full lg:min-h-[800px]">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.overlayName}
                  fill
                  className="object-contain lg:object-cover object-bottom lg:object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Bottom Gradient Overlay (Desktop only) */}
                <div className="hidden lg:block absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-[#111111]/80 to-transparent pointer-events-none" />

                {/* Desktop Image Overlay Text */}
                <div className="hidden lg:flex absolute bottom-[40px] left-0 w-full p-12 z-20 flex-col items-start">
                  <span
                    className="block mb-2 uppercase"
                    style={{
                      color: "#D29E0D",
                      fontSize: "14px",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    {currentSlide.overlayTag}
                  </span>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: "var(--font-polysans)",
                      fontSize: "clamp(28px, 4vw, 40px)",
                      fontWeight: 400,
                      lineHeight: "1.1",
                    }}
                  >
                    {currentSlide.overlayName}
                  </h3>
                </div>
              </div>

              {/* Mobile Image Label (Renders structurally below the image) */}
              <div className="block lg:hidden w-full text-center mt-6 px-4">
                <span
                  className="block mb-1 uppercase"
                  style={{
                    color: "#D29E0D",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  {currentSlide.overlayTag}
                </span>
                <h3
                  className="text-[#30261C]"
                  style={{
                    fontFamily: "var(--font-polysans)",
                    fontSize: "26px",
                    fontWeight: 400,
                    lineHeight: "1.1",
                  }}
                >
                  {currentSlide.overlayName}
                </h3>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Navigation Arrows placed at the left and right edges */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full bg-white/40 md:bg-white/20 hover:bg-white/80 transition-colors group shadow-lg pointer-events-auto"
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#30261C"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-4 rounded-full bg-white/40 md:bg-white/20 hover:bg-[#A88322] transition-colors group shadow-lg pointer-events-auto group-hover:stroke-white stroke-[#30261C] hover:stroke-white"
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Legacy2;

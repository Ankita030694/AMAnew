"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    id: 1,
    heading: "The Foundation",
    description: (
      <div className="space-y-4">
        <h3 className="text-[24px] lg:text-[28px] text-[#30261C] font-medium leading-tight">

        </h3>
        <div className="space-y-1">
          <p className="text-[#D29E0D] text-[18px] lg:text-[20px] font-medium">Ex-Comptroller and Auditor General of India</p>
          <p className="text-[#30261C]/70 text-[16px] lg:text-[18px]">Director General of Audit (Central-Receipt)</p>
        </div>
        <p className="mt-6 text-[#30261C]/85 leading-relaxed text-[15px] md:text-[18px]">
          R.C. Malik started his professional journey as a gazetted officer at DGACR, progressing through different roles within the Income Tax Department before taking on administrative duties at the Office of the Comptroller and Auditor General (CAG) of India. After retiring from the CAG office, R.C. Malik transitioned into a legal career as an advocate specializing in taxation, leveraging the extensive experience gained during his tenure as an officer.
        </p>
      </div>
    ),
    image: "/dadaji2.jpg",
    overlayTag: "",
    overlayName: "Late Adv. R.C. Malik",
  },
  {
    id: 2,
    heading: "The Vision",
    description: (
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-[#D29E0D] text-[18px] lg:text-[20px] font-medium">Founder, AMA Legal Solutions</p>
          <p className="text-[#30261C]/70 text-[16px] lg:text-[18px]">Advocate &amp; Legal Strategist</p>
        </div>
        <p className="mt-6 text-[#30261C]/85 leading-relaxed text-[15px] md:text-[18px]">
          Anuj Anand Malik works at the intersection of law, finance, and business strategy, specializing in banking disputes and debt resolution. Driven by the vision to make quality legal assistance accessible across India, he recently launched the country&apos;s first pro-bono law firm–backed legal assistance app. His mission is to provide fast, reliable legal guidance and awareness to everyone when they need it most.
        </p>
      </div>
    ),
    image: "/newAssets/bhiya.png",
    overlayTag: "Founder",
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

      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row mt-8 md:mt-12 relative">
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
                <div
                  className="mb-14 max-w-2xl text-[15px] md:text-[18px] text-left lg:text-left h-full max-h-[400px] md:max-h-[500px] overflow-y-auto pr-4 custom-scrollbar"
                  style={{
                    color: "rgba(48, 38, 28, 0.8)",
                    lineHeight: "1.6",
                  }}
                >
                  {currentSlide.description}
                </div>
              </motion.div>


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

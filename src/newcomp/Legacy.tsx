"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const slides = [
  {
    id: 1,
    name: "Late Adv. R.C. Malik",
    titles: [
      "Ex-Comptroller and Auditor General of India",
      "Director General of Audit (Central-Receipt)",
    ],
    description:
      "Inspired by a deep-seated passion for justice and a transformative vision to serve the community, R.C. Malik pursued the legal profession with an unwavering commitment to excellence and public service. Guided by absolute integrity and a steadfast ethical compass, he dedicated his life to providing trusted, effective, and principled legal counsel. His consistent professionalism, combined with a profound understanding of the law, earned him a highly respected reputation across the fraternity. Through his tireless efforts, he laid a robust foundation for the practice, built on the pillars of trust, credibility, and enduring legal values that continue to inspire generations.",
    image: "/newAssets/dadaji1.png",
    imageWidth: "640px",
    objectFit: "cover",
    year: "1982 - 2016",
  },
  {
    id: 2,
    name: "Anuj Anand Malik",
    titles: [
      "Advocate, Legal Consultant, Banking Lawyer, and Loan Settlement Expert",
    ],
    description: (
      <div className="space-y-4">
        <p>
          I am Anuj Anand Malik, an advocate, legal consultant, banking lawyer,
          and loan settlement expert, committed to helping individuals,
          startups, and businesses overcome financial challenges and achieve
          legal security. With in-depth expertise in loan settlements, corporate
          compliance, business contracts, dispute resolution, and financial
          litigation, I provide strategic legal counsel and expert
          representation to safeguard clients’ interests through risk
          mitigation, regulatory compliance, and financial stability.
        </p>
     

      </div>
    ),
    image: "/newAssets/bhiya.png",
    imageWidth: "480px",
    objectFit: "contain",
    year: null,
  },
];

const Legacy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-8 md:py-16 flex flex-col items-center bg-[#EAE6DB] overflow-hidden">
      {/* Main Heading */}
      <h2
        style={{
          color: "#30261C",
          textAlign: "center",
          fontFamily: "var(--font-polysans)",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "1.2",
        }}
        className="mb-2 md:mb-4 text-[31px] md:text-[47px]"
      >
        Legacy Extended
      </h2>

      {/* Sub Heading */}
      <p
        style={{
          color: "rgba(48, 38, 28, 0.85)",
          textAlign: "center",
          fontFamily: "var(--font-polysans)",
          fontSize: "16px", // Mobile size
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "1.4",
          letterSpacing: "0.54px",
        }}
        className="max-w-[640px] mb-8 md:mb-12 px-4 md:text-[22px] md:leading-[25px]"
      >
        A journey of vision, integrity, and legal excellence carried forward
        across generations.
      </p>

      {/* Content Section with Background */}
      <div className="w-full relative px-4 md:px-0">
        {/* Background Image Container */}
        <div className="relative w-full min-h-[700px] md:min-h-[560px] flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/newAssets/bg1.jpg')",
              backgroundRepeat: "repeat",
            }}
          />

          {/* Navigation Arrows - Adjusted for Mobile overlay or bottom */}
          <button
            onClick={prevSlide}
            className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors group"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#30261C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors group"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#30261C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* White Border Container & Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full md:w-[95%] max-w-[95vw] md:max-w-none h-[650px] md:h-[480px] border-[8px] md:border-[16px] border-white/60 z-10 flex flex-col md:flex-row overflow-hidden md:overflow-visible">
                {/* Desktop Top Vertical extension & Year */}
                {currentSlide.year && (
                  <>
                    <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[16px] h-[32px] bg-white/60 z-10" />
                    <div
                      className="hidden md:block absolute top-[60px] left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 z-20"
                      style={{
                        color: "#30261C",
                        fontFamily: "var(--font-polysans)",
                        fontSize: "19px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                      }}
                    >
                      {currentSlide.year}
                    </div>
                  </>
                )}

                {/* Desktop Middle Divider */}
                <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[16px] h-[360px] bg-white/60 z-10" />

                {/* Left Content */}
                <div className="flex-1 p-5 md:p-10 flex flex-col justify-start md:justify-center z-20 max-w-full md:max-w-2xl text-left h-full">
                  {/* Top Section: Header Info (Always Full Width) */}
                  <div className="w-full flex flex-col gap-1 md:gap-4 mb-3 md:mb-2 text-left z-30 relative">
                     <div className="flex flex-col md:flex-row md:items-baseline gap-1">
                        <h3 className="text-[#30261C] text-[24px] md:text-[32px] font-normal font-sans leading-tight">
                        {currentSlide.name}
                        </h3>
                         {/* Mobile Year */}
                        {currentSlide.year && (
                        <span className="md:hidden text-[#30261C] font-bold font-sans text-[18px]">{currentSlide.year}</span>
                        )}
                     </div>

                    <div className="space-y-1 w-full">
                        {currentSlide.titles.map((title, idx) => (
                        <p
                            key={idx}
                            className="text-[#D29E0D] text-[15px] md:text-[18px] font-medium font-sans w-full"
                        >
                            {title}
                        </p>
                        ))}
                    </div>
                  </div>

                  {/* Bottom Section: Description (Constrained Width) + Image (Absolute Bottom Right) */}
                  <div className="w-full flex-1 relative min-h-0">
                    {/* Description - Constrained to Left 60% on mobile to avoid image overlap */}
                    <div className="w-[90%] md:w-full text-[#30261C] text-[13px] md:text-[16px] leading-[1.4] md:leading-[24px] font-sans opacity-80 z-20 h-full overflow-y-auto md:overflow-visible pb-2 content-start pr-1">
                        {currentSlide.description}
                    </div>

                   
                  </div>
                </div>
              </div>

                {/* Mobile Image - Absolute Bottom Right */}
                    <div 
                      className={`md:hidden absolute -bottom-3 -right-10 z-10 pointer-events-none translate-y-[20px] ${
                        currentSlide.id === 1 ? "w-[85%] h-[350px]" : "w-[80%] h-[420px]"
                      }`}
                    > 
                         <Image
                            src={currentSlide.image}
                            alt={currentSlide.name}
                            fill
                            className={`${currentSlide.id === 1 ? "object-cover" : "object-contain"} object-bottom overflow-visible`}
                            priority
                        />
                    </div>

              {/* Desktop Right Image - Positioned relative to parent-most container */}
              <div
                className="hidden md:block absolute bottom-0 right-0 h-[680px] z-20 pointer-events-none"
                style={{ width: currentSlide.imageWidth }}
              >
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.name}
                  fill
                  className={`${
                    currentSlide.objectFit === "cover"
                      ? "object-cover"
                      : "object-contain"
                  } object-bottom`}
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};


export default Legacy;

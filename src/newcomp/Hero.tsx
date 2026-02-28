"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cormorant } from "next/font/google";

const ICONS = [
  "/heroicons/hero-icon-1.svg",
  "/heroicons/hero-icon-2.svg",
  "/heroicons/hero-icon-3.svg",
  "/heroicons/hero-icon-4.svg",
  "/heroicons/hero-icon-5.svg",
  "/heroicons/hero-icon-6.svg",
  "/heroicons/hero-icon-7.svg",
  "/heroicons/hero-icon-8.svg",
  "/heroicons/hero-icon-9.svg",
];

const GridBackground = () => {
  const [activeIcons, setActiveIcons] = useState<Record<number, string>>({});

  useEffect(() => {
    const isMobile = window.innerWidth < 640;

    // Define forbidden cells (middle area where content is located)
    const isForbidden = (cellIndex: number) => {
      const row = Math.floor(cellIndex / 10);
      const col = cellIndex % 10;
      // Exclude middle 6 columns (2-7) and middle 8 rows (1-8)
      return col >= 2 && col <= 7 && row >= 1 && row <= 8;
    };

    // Slower interval & fewer icons on mobile for smoother performance
    const intervalMs = isMobile ? 800 : 400;
    const spawnCount = isMobile ? 1 : Math.floor(Math.random() * 2) + 2;

    const interval = setInterval(() => {
      const count = isMobile ? 1 : Math.floor(Math.random() * 2) + 2;

      setActiveIcons((prev) => {
        const next = { ...prev };

        for (let i = 0; i < count; i++) {
          let cell = Math.floor(Math.random() * 100);

          // Retry if we picked a forbidden cell
          let attempts = 0;
          while (isForbidden(cell) && attempts < 10) {
            cell = Math.floor(Math.random() * 100);
            attempts++;
          }

          if (isForbidden(cell)) continue;

          const icon = ICONS[Math.floor(Math.random() * ICONS.length)];

          // Add icon if cell is empty
          if (!next[cell]) {
            next[cell] = icon;

            // Longer display time on mobile to reduce re-renders
            const displayTime = isMobile
              ? 2500 + Math.random() * 1000
              : 1500 + Math.random() * 1000;

            setTimeout(() => {
              setActiveIcons((current) => {
                const updated = { ...current };
                delete updated[cell];
                return updated;
              });
            }, displayTime);
          }
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.16]">
      {/* 
        Ensuring the grid rows match the column/item count to prevent layout shifts.
        Mobile: 5 cols * 20 rows = 100
        Tablet: 8 cols * 13 rows = 104
        Desktop: 10 cols * 10 rows = 100
      */}
      <div className="grid grid-cols-5 grid-rows-[repeat(20,minmax(0,1fr))] sm:grid-cols-8 sm:grid-rows-[repeat(13,minmax(0,1fr))] md:grid-cols-10 md:grid-rows-10 w-full h-full border-collapse">
        {Array.from({ length: 104 }).map((_, i) => (
          <div
            key={i}
            className="relative flex items-center justify-center border-[0.5px] border-[#30261C]/10 overflow-hidden h-full w-full"
          >
            <AnimatePresence>
              {activeIcons[i] && (
                <motion.div
                  key={`icon-${i}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-1/2 h-1/2 will-change-transform flex items-center justify-center"
                >
                  <img
                    src={activeIcons[i]}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <GridBackground />
      {/* Hero Content - takes full screen height minus navbar */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 sm:pt-32 pb-10">
        <div className="w-full max-w-[1400px] mx-auto relative flex flex-col items-center">
          {/* Content Area */}
          <div className="relative z-10 px-2 sm:px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-[26px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-normal text-[#30261C] leading-[34px] sm:leading-[35px] md:leading-[50px] lg:leading-[59px] xl:leading-[68px] mb-6 sm:mb-6 md:mb-8 opacity-100">
              Empowering{" "}
              <span style={{ color: "#D29E0D", fontWeight: 400 }}>
                Legal Expertise
              </span>{" "}
              with{" "}
              <span style={{ color: "#D29E0D", fontWeight: 400 }}>Trusted</span>{" "}
              Law Firm In India
            </h1>

            <p className="text-[17px] sm:text-base md:text-base lg:text-[19px] xl:text-[21px] text-[#30261C] leading-[25px] sm:leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[34px] font-normal mb-7 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto opacity-85">
              AMA Legal Solutions embodies a culture rooted in values and
              principles that prioritize excellence, integrity, and client
              satisfaction.
            </p>

            <Link
              href="/contact"
              className="inline-block px-7 sm:px-8 md:px-10 lg:px-11 py-3 sm:py-3 md:py-4 rounded-xl text-white text-base sm:text-base md:text-lg font-normal transition-all hover:opacity-90 shadow-lg"
              style={{
                background: "#30261C",
              }}
            >
              Get Legal Help Today
            </Link>

            {/* App Store & Play Store Icons */}
            <div className="flex justify-center gap-4 sm:gap-4 md:gap-6 mt-10 sm:mt-10 md:mt-12 lg:mt-16">
              <Link
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/apptrans.svg"
                  alt="App Store"
                  width={200}
                  height={60}
                  unoptimized
                  className="w-[150px] sm:w-[150px] md:w-[144px] lg:w-[176px] xl:w-[200px] h-auto"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/playtrans.svg"
                  alt="Google Play"
                  width={200}
                  height={60}
                  unoptimized
                  className="w-[150px] sm:w-[150px] md:w-[144px] lg:w-[176px] xl:w-[200px] h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Media Coverage Section - now below the full height hero */}
      <div className="w-full px-3 sm:px-4 pb-12 sm:pb-16 md:pb-20 flex justify-center">
        <div
          className="w-full max-w-7xl rounded-2xl sm:rounded-3xl md:rounded-[35px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-10"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow: "3px 4px 30.5px 0 rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(2px)",
          }}
        >
          <h2
            className="text-[#30261C] text-center text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-normal leading-tight md:leading-[44px] px-4"
            style={{ fontFamily: '"PolySans Trial", sans-serif' }}
          >
            Our media coverages
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6">
            <Link
              href="https://yourstory.com/companies/ama-legal-solutions"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/newAssets/media/yourstory.png"
                alt="YourStory"
                width={180}
                height={50}
                className="h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.livemint.com/"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/newAssets/media/livemint.png"
                alt="LiveMint"
                width={180}
                height={50}
                className="h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.barandbench.com/news/ama-legal-solutions-launches-indias-first-law-firm-backed-pro-bono-driven-mobile-app"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/newAssets/media/barandbench.png"
                alt="Bar and Bench"
                width={180}
                height={50}
                className="h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://medium.com/@amalegalsolutions"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/newAssets/media/medium.png"
                alt="Medium"
                width={180}
                height={50}
                className="h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://www.mid-day.com/"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/newAssets/media/mid_day.png"
                alt="Mid-day"
                width={180}
                height={50}
                className="h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


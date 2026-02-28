"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cormorant } from "next/font/google";

const ICONS = [
  "/heroicons/Group 259.svg",
  "/heroicons/Group 260.svg",
  "/heroicons/Group 261.svg",
  "/heroicons/Group 262.svg",
  "/heroicons/Group 263(1).svg",
  "/heroicons/Group 263.svg",
  "/heroicons/Group 264.svg",
  "/heroicons/Group.svg",
  "/heroicons/Vector.svg",
];

const GridBackground = () => {
  const [activeIcons, setActiveIcons] = useState<Record<number, string>>({});

  useEffect(() => {
    // Define forbidden cells (middle area where content is located)
    const isForbidden = (cellIndex: number) => {
      const row = Math.floor(cellIndex / 10);
      const col = cellIndex % 10;
      // Exclude middle 6 columns (2-7) and middle 8 rows (1-8)
      return col >= 2 && col <= 7 && row >= 1 && row <= 8;
    };

    const interval = setInterval(() => {
      // Pick 2-3 icons to spawn
      const count = Math.floor(Math.random() * 2) + 2;

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

            // Set timeout to remove this icon after some time
            setTimeout(() => {
              setActiveIcons((current) => {
                const updated = { ...current };
                delete updated[cell];
                return updated;
              });
            }, 1500 + Math.random() * 1000);
          }
        }
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.16]">
      <div className="grid grid-cols-10 grid-rows-10 w-full h-full">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="relative flex items-center justify-center border-[0.5px] border-[#30261C]/10"
          >
            <AnimatePresence>
              {activeIcons[i] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="w-1/2 h-1/2"
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
      <div className="relative flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-[1400px] mx-auto relative flex flex-col items-center">
          {/* Content Area */}
          <div className="relative z-10 px-4 sm:px-12 max-w-6xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-[36px] md:text-[70px] font-normal text-[#30261C] leading-[48px] md:leading-[85px] mb-[40px] opacity-100">
              Empowering{" "}
              <span style={{ color: "#D29E0D", fontWeight: 400 }}>
                Legal Expertise
              </span>{" "}
              with{" "}
              <span style={{ color: "#D29E0D", fontWeight: 400 }}>Trusted</span>{" "}
              Law Firm In India
            </h1>

            <p className="text-[18px] md:text-[26px] text-[#30261C] leading-[28px] md:leading-[42px] font-normal mb-[60px] max-w-5xl mx-auto opacity-85">
              AMA Legal Solutions embodies a culture rooted in values and
              principles that prioritize excellence, integrity, and client
              satisfaction.
            </p>

            <Link
              href="/contact"
              className="inline-block px-14 py-5 rounded-xl text-white text-xl font-normal transition-all hover:opacity-90 shadow-lg"
              style={{
                background: "#30261C",
              }}
            >
              Get Legal Help Today
            </Link>

            {/* App Store & Play Store Icons */}
            <div className="flex justify-center gap-[30px] mt-20">
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
                  className="w-[150px] md:w-[250px] h-auto"
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
                  className="w-[150px] md:w-[250px] h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Media Coverage Section - now below the full height hero */}
      <div className="w-full px-4 pb-20 flex justify-center">
        <div
          className="w-full max-w-7xl rounded-[35px] flex flex-col justify-center items-center gap-10 py-10"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow: "3px 4px 30.5px 0 rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(2px)",
          }}
        >
          <h2
            className="text-[#30261C] text-center text-3xl md:text-[40px] font-normal leading-tight md:leading-[44px]"
            style={{ fontFamily: '"PolySans Trial", sans-serif' }}
          >
            Our media coverages
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-4">
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
                className="h-8 md:h-20 w-auto object-contain"
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
                className="h-8 md:h-20 w-auto object-contain"
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
                className="h-8 md:h-20 w-auto object-contain"
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
                className="h-8 md:h-20 w-auto object-contain"
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
                className="h-8 md:h-20 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

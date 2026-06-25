"use client";

import { useState, useEffect } from "react";

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
  const [ready, setReady] = useState(false);

  // Defer the grid until after initial paint so it doesn't block LCP
  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const delay = isMobile ? 300 : 100;
    const timer = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
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
  }, [ready]);

  // Render an empty container until after initial paint to avoid blocking LCP
  if (!ready) {
    return <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.16]" />;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.16]">
      {/* CSS keyframes for icon fade-in/out — replaces framer-motion */}
      <style jsx>{`
        @keyframes gridIconIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .grid-icon-animate {
          animation: gridIconIn 0.6s ease-in-out forwards;
        }
      `}</style>
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
            {activeIcons[i] && (
              <div
                key={`icon-${i}`}
                className="w-1/2 h-1/2 flex items-center justify-center grid-icon-animate"
              >
                <img
                  src={activeIcons[i]}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBackground;

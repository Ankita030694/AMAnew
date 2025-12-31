"use client";

import React, { useEffect, useRef } from "react";
import { 
  motion, 
  useInView, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  animate 
} from "framer-motion";

const DigitReel = ({ digit, index, isInView }: { digit: number; index: number; isInView: boolean }) => {
  // Create 3 cycles of 0-9 to ensure every number (even 0) has a long spin distance
  const wheels = [...Array(3)].flatMap(() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  return (
    <div className="relative h-[24px] md:h-[42px] overflow-hidden inline-block leading-none">
      <motion.div
        initial={{ y: "0%" }}
        animate={isInView ? { y: `-${(20 + digit) * (100 / 30)}%` } : { y: "0%" }}
        transition={{
          duration: 3 + index * 0.2, // Slightly longer and more staggered
          ease: [0.45, 0.05, 0.55, 0.95], // Smooth acceleration and deceleration
        }}
        className="flex flex-col items-center"
      >
        {wheels.map((num, i) => (
          <span 
            key={i} 
            className="h-[24px] md:h-[42px] flex items-center justify-center"
          >
            {num}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const StatCounter = ({ label, value }: { label: string; value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" }); // Trigger when 50px from bottom, or just standard.
  // Actually, standard behavior triggers when 1px is in view.
  // Previous was -100px (100px inside).
  // I will use `once: true` and `amount: 0.3`?
  // Let's just use empty options or minimal offset.
  // Safest: `margin: "0px"` (default) or slightly negative but small like "-10px".
  
  // Extract number and suffix (e.g., "5000" and "+")
  const numericMatch = value.match(/(\d+)/);
  const numericString = numericMatch ? numericMatch[0] : "0";
  const digits = numericString.split("").map(Number);
  const suffix = value.replace(/(\d+)/, "");

  return (
    <div ref={ref} className="flex flex-col items-center min-w-[60px]">
      <div className="text-[#30261C] font-sans text-[24px] md:text-[42px] font-medium text-center flex items-baseline">
        <div className="flex h-[24px] md:h-[42px] items-center overflow-hidden">
            <div className="flex">
              {digits.map((digit, idx) => (
                <DigitReel key={idx} digit={digit} index={idx} isInView={isInView} />
              ))}
            </div>
        </div>
        {suffix && <span className="ml-0 md:ml-1 select-none leading-none">{suffix}</span>}
      </div>
      <span className="text-[#30261C] font-sans text-[10px] md:text-[14px] font-medium opacity-80 mt-1 text-center leading-tight">
        {label}
      </span>
    </div>
  );
};

const Counter = () => {
  const stats = [
    { label: "Clients Served", value: "5000+" },
    { label: "Our Offices", value: "20+" },
    { label: "Cases Handled", value: "3000+" },
    { label: "Year Of Experience", value: "40+" },
  ];

  return (
    <section 
      className="w-full h-auto md:h-[120px] flex items-center px-4 md:px-12 py-6 md:py-0 relative z-20"
      style={{ background: "rgba(255, 255, 255, 0.15)" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-around w-full mx-auto gap-6 md:gap-0">
        {/* Heading */}
        <div 
          className="text-[#30261C] font-sans text-[31px] md:text-[38px] font-medium leading-tight text-center md:text-left"
        >
          Legal Excellence, <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          Proven by Numbers
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between w-full md:w-auto md:gap-16">
          {stats.map((stat, index) => (
            <StatCounter key={index} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;

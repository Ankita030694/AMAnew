"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const StatCounter = ({ label, value, isGoogle = false }: { label: string; value: string, isGoogle?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  
  // Extract number and suffix/prefix
  let numericString = "0";
  let digits: number[] = [];
  let suffix = "";
  
  if (isGoogle) {
    // For "4.7" we don't spin, just display statically for simplicity
    return (
      <div ref={ref} className="flex flex-col items-center min-w-[60px]">
        <div className="text-[#30261C] font-sans text-[24px] md:text-[42px] font-medium text-center flex items-center justify-center gap-2">
          <span className="leading-none flex items-center h-[24px] md:h-[42px]">4.7</span>
          <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <span className="text-[#30261C] font-sans text-[10px] md:text-[14px] font-medium opacity-80 mt-1 text-center leading-tight">
          {label}
        </span>
      </div>
    );
  } else {
    const numericMatch = value.match(/(\d+)/);
    numericString = numericMatch ? numericMatch[0] : "0";
    digits = numericString.split("").map(Number);
    suffix = value.replace(/(\d+)/, "");
  }

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

const BlogCounter = () => {
  const stats = [
    { label: "Google Rating", value: "4.7", isGoogle: true },
    { label: "Clients Served", value: "10000+" },
    { label: "Cases Handled", value: "25000+" },
    { label: "Years of Experience", value: "40+" },
  ];

  return (
    <section 
      className="w-full h-auto md:h-[120px] flex items-center px-4 md:px-12 py-6 md:py-0 relative z-20"
      style={{ background: "rgb(255, 255, 255)" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-around w-full mx-auto gap-8 md:gap-0">
        {/* Stats only, no heading */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 w-full md:flex md:items-center md:justify-around md:w-full">
          {stats.map((stat, index) => ( 
            <StatCounter key={index} label={stat.label} value={stat.value} isGoogle={stat.isGoogle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCounter;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Testimonials2 = () => {
  return (
    <section className="w-full flex justify-center lg:justify-start items-center">
      <div className="w-full relative flex flex-col items-center lg:items-start max-w-[511px]">
        {/* Header Section */}
        <div className="flex flex-col items-center lg:items-start gap-[12px] w-full z-10">
          <h2 
            className="self-stretch text-[#30261c] text-center lg:text-left text-[31px] md:text-[47px] font-normal leading-[1.2]"
            style={{ fontFamily: "var(--font-polysans)" }}
          >
            <span>Proven Client </span>
            <br className="hidden lg:block" />
            <span>Experiences</span>
          </h2>
          <p 
            className="self-stretch text-[rgba(48,38,28,0.85)] text-center lg:text-left text-[14px] sm:text-[18px] font-normal leading-normal tracking-[0.44px]"
            style={{ fontFamily: "var(--font-polysans)" }}
          >
            Stories that reflect our commitment to clarity, integrity, and results.
          </p>
        </div>

        {/* Sophisticated Amoeba Background Animation */}
        <motion.div 
          className="absolute -left-20 top-20 w-[500px] h-[450px] opacity-40 pointer-events-none -z-10 bg-[#D29E0D] blur-[100px]"
          animate={{
            scale: [1, 1.1, 0.9, 1.05, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "50% 40% 30% 70% / 50% 60% 70% 40%",
              "60% 50% 40% 30% / 60% 40% 30% 70%",
              "40% 60% 70% 30% / 40% 50% 60% 50%"
            ],
            x: [0, 50, -30, 20, 0],
            y: [0, -30, 40, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute left-20 top-40 w-[300px] h-[300px] opacity-30 pointer-events-none -z-10 bg-[#D29E0D] blur-[80px]"
          animate={{
            scale: [1, 1.2, 0.8, 1.1, 1],
            x: [0, -40, 60, -20, 0],
            y: [0, 50, -30, 40, 0],
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "70% 30% 30% 70% / 70% 70% 30% 30%",
              "30% 70% 70% 30% / 30% 30% 70% 70%"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Bottom Content - Reviews and CTA */}
        <div className="flex flex-row items-center justify-between lg:justify-start gap-4 sm:gap-12 mt-8 sm:mt-12 w-full z-10 px-4 sm:px-0">
          {/* Left Side - Google Reviews */}
          <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 shrink-0 relative">
            <div className="relative w-[80px] h-[24px] sm:w-[100px] sm:h-[30px]">
                <Image
                src="/newAssets/google.png"
                alt="Google"
                fill
                className="object-contain"
                />
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1 sm:gap-[12px] self-stretch relative">
              <div className="flex items-center gap-2 sm:gap-[10px] self-stretch relative justify-center lg:justify-start">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#FFC107] text-[16px] sm:text-[20px]" />
                  ))}
                </div>

                <div 
                    className="text-black text-[14px] sm:text-[20px] font-light leading-none"
                    style={{ fontFamily: "var(--font-polysans)" }}
                >
                    4.6/5
                </div>
              </div>
              <div 
                className="self-stretch text-[#30261c] text-center lg:text-left text-[12px] sm:text-[15px] font-light leading-none"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                Excellent
              </div>
            </div>
          </div>

          {/* Right Side - Client Count and CTA */}
          <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-[16px] shrink-0 relative">
            <div 
                className="text-black text-[12px] sm:text-[16px] font-light leading-[1.2] text-center lg:text-left max-w-[140px] sm:max-w-[180px]"
                style={{ fontFamily: "var(--font-polysans)" }}
            >
              <span className="font-semibold text-[18px] sm:text-[22px] block">5000+</span>
              <span className="font-light text-[11px] sm:text-[14px]">Clients already using our services</span>
            </div>
            <Link 
              href="https://maps.app.goo.gl/C11eKgqm46oUwdio9"
              target="_blank"
              className="flex justify-center items-center gap-[4px] sm:gap-[8px] px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] rounded-[38px] bg-[#d29e0d] relative border-none cursor-pointer hover:opacity-90 transition-opacity duration-300"
            >
              <span 
                className="text-[#30261c] text-[12px] sm:text-[14px] font-light leading-none whitespace-nowrap"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                Read more reviews
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;

"use client";

import Link from "next/link";
import Image from "next/image";

import AnimatedBorder from "./AnimatedBorder";
const Hero = () => {
  return (
    <section className="relative pt-10 md:pt-20 pb-20 px-6">
      <div className="max-w-7xl mx-auto relative">
        {/* U-shaped Border Container */}
        {/* U-shaped Border Container (Desktop) */}
        <div className="hidden md:block">
            <AnimatedBorder />
        </div>
        
        {/* Content Area */}
        <div className="relative z-10 pt-20 pb-16 px-4 sm:px-12 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-[31px] md:text-[47px] font-medium text-[#30261C] leading-tight mb-4">
            Empowering Legal Expertise with Trusted Law Firm In India
          </h1>
          
          <p className="text-base sm:text-xl text-[#30261C]/80 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
            AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
          </p>

          <Link 
            href="/contact"
            className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full text-[#30261C] text-base sm:text-lg font-medium transition-all hover:opacity-90"
            style={{
              background: "#D29E0D",
            }}
          >
            Get Legal Help today
          </Link>
        </div>

        {/* Horizontal Line & Vertical Animation (Mobile) - Moved below content */}
        <div className="md:hidden relative mt-0 mb-12 -mx-6 w-[calc(100%+3rem)]">
            <AnimatedBorder isMobileView={true} />
        </div>

        {/* Horizontal Line for Mobile / U-Border for Desktop handled in AnimatedBorder */}
        
      </div>
       <div className="mt-2 sm:mt-16 flex flex-col items-center gap-4 sm:gap-6 px-4">
          <p className="text-xl sm:text-3xl font-medium text-black text-center">
            Download the <span className="text-[#D29E0D]">AMA Legal Solutions</span> App Today
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image src="/newAssets/appstore.svg" alt="App Store" width={160} height={160} className="w-[140px] sm:w-[200px] h-auto" />
            </Link>
            <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image src="/newAssets/playstore.svg" alt="Google Play" width={160} height={160} className="w-[140px] sm:w-[200px] h-auto" />
            </Link>
          </div>
        </div>
    </section>
  );
};

export default Hero;

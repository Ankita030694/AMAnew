"use client";

import Link from "next/link";
import Image from "next/image";

import AnimatedBorder from "./AnimatedBorder";
const Hero = () => {
  return (
    <section className="relative pt-[100px] md:pt-[120px] pb-[80px] md:pb-[120px] px-6">
      <div className="max-w-7xl mx-auto relative">
        {/* U-shaped Border Container */}
        {/* U-shaped Border Container (Desktop) */}
        <div className="hidden md:block">
            <AnimatedBorder />
        </div>
        
        {/* Content Area */}
        <div className="relative z-10 pt-[50px] md:pt-20 pb-16 px-4 sm:px-12 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-[28px] md:text-[50px] font-semibold text-[#30261C] leading-[40px] md:leading-[65px] mb-[30px] opacity-100">
            Empowering Legal Expertise with Trusted Law Firm In India
          </h1>
          
          <p className="text-[16px] md:text-[25px] text-[#30261C] leading-[24px] md:leading-[29px] font-normal mb-[50px] max-w-4xl mx-auto opacity-85">
            AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
          </p>

          <Link 
            href="/contact"
            className="inline-block px-10 py-4 rounded-full text-[#30261C] text-lg font-semibold transition-all hover:opacity-90"
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
       <div className="mt-[50px] md:mt-[80px] flex flex-col items-center gap-[35px] px-4">
          <p className="text-[24px] md:text-[32px] font-semibold text-black text-center leading-tight">
            Download the <span className="text-[#D29E0D]">AMA Legal Solutions</span> App Today
          </p>
          <div className="flex justify-center gap-[30px]">
            <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image src="/newAssets/appstore.svg" alt="App Store" width={200} height={60} className="w-[160px] md:w-[200px] h-auto" />
            </Link>
            <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image src="/newAssets/playstore.svg" alt="Google Play" width={200} height={60} className="w-[160px] md:w-[200px] h-auto" />
            </Link>
          </div>
        </div>
    </section>
  );
};

export default Hero;

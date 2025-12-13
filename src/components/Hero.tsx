'use client'
import Image from "next/image";

import HeroClientVideo from "./HeroClientVideo";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Static image background */}
      <div className="absolute inset-0 bg-black">
        <Image
          src="/bannerbg.png"
          alt="Legal background"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
        />
      </div>

      {/* Client-only video component */}
      <HeroClientVideo />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content - server rendered for better LCP */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Content */}
          <div className="space-y-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Empowering Legal Expertise with Trusted Law Firm In India
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
            </p>
            
            {/* Make Enquiry Button */}
            <div className="flex justify-center">
              <a href="/contact">
                <button className="relative overflow-hidden bg-[#D2A02A] hover:bg-[#5A4C33] text-white px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D2A02A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative inline-flex items-center">
                    Make enquiry
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              </a>
            </div>
            
          </div>

        </div>
      </div>

    </div>
  );
}

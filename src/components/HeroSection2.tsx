'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroClientVideo from './HeroClientVideo';

const HeroSection2 = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-16 pb-0 md:pt-70 md:pb-0">
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
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Client-only video component */}
      <HeroClientVideo />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
         Empowering Legal Expertise with <br /> Trusted Law Firm In India
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10 leading-relaxed">
       AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-[#D4A017] hover:bg-[#b88b14] text-white font-medium rounded-full text-lg transition-colors duration-300 shadow-lg"
          >
            Enquire Now
          </Link>
          {/* <Link 
            href="https://play.google.com/store/apps/details?id=com.ama.legal.solutions" 
            target="_blank"
            className="px-8 py-4 bg-[#2D2D2D] hover:bg-black text-white font-medium rounded-full text-lg transition-colors duration-300 shadow-lg"
          >
            Download App
          </Link> */}
        </div>

        {/* Image */}
        <div 
          className="relative max-w-[400px] md:max-w-[350px]"
          
        >
          <Image
            src="/app_creative.png"
            alt="AMA Legal Solutions App"
            width={1400}
            height={1400}
            className="drop-shadow-2xl"
            priority
          />
        </div>

      </div>

      {/* Gradient effect at intersection with Clients section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.25) 50%, #FFF 100%)',
          filter: 'blur(0px)'
        }}
      />
    </section>
  );
};

export default HeroSection2;

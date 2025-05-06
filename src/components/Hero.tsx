'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

// Add type definitions for the Network Information API
interface NetworkInformation {
  effectiveType: '2g' | '3g' | '4g' | 'slow-2g';
  saveData?: boolean;
}

// Extend Navigator interface
interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
  saveData?: boolean;
  deviceMemory?: number;
}

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Check connection speed and device capability before loading video
  useEffect(() => {
    // Cast navigator to our extended type
    const nav = navigator as NavigatorWithConnection;
    
    // Only load video on fast connections
    const connectionSpeed = nav.connection ? 
      nav.connection.effectiveType : '4g';
    
    const isGoodConnection = 
      !['slow-2g', '2g', '3g'].includes(connectionSpeed) && 
      !(nav.saveData === true);
    
    // Check if not a low-end device
    const isGoodDevice = 
      !('deviceMemory' in nav) || 
      (nav.deviceMemory ?? 4) > 2;
    
    if (isGoodConnection && isGoodDevice) {
      const timer = setTimeout(() => {
        setShouldLoadVideo(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);
  
  // Handle video loaded event
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };
 
  return (
    <div className="relative min-h-screen">
      {/* Static background image that loads immediately */}
      <div className="absolute inset-0 bg-gray-900">
        <Image
          src="/bannerbg.png"
          alt="Legal background"
          fill
          priority
          className="object-cover opacity-40"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={75}
        />
      </div>

      {/* Video background - conditionally loaded based on connection/device capability */}
      {shouldLoadVideo && (
        <div 
          className={`absolute inset-0 bg-gray-900 transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute w-full h-full object-cover opacity-40"
            onLoadedData={handleVideoLoaded}
            style={{ objectFit: 'cover' }}
          >
            <source src="/intro123.mp4" type="video/mp4" />
            <source src="/intro123.mp4" type="video/webm" />
          </video>
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-6">
          Empowering Legal Expertise with Trusted Law Firm In India
        </h1>
        <p className="text-lg text-white mb-8">
          AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
        </p>
        <Link href="/contact">
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
        </Link>
      </div>
    </div>
  );
}
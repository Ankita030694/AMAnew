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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
      setShouldLoadVideo(true); // Increased delay to prioritize LCP
    }
  }, []);
  
  // Handle video loaded event
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  // Handle image loaded event
  const handleImageLoaded = () => {
    setIsImageLoaded(true);
  };
 
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/bannerbg.png" as="image" />
      <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
      
      <div className="relative min-h-screen">
        {/* Static background image that loads immediately with optimized loading */}
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src="/bannerbg.png"
            alt="Legal background"
            fill
            priority={true}
            className={`object-cover transition-opacity duration-300 ${
              isImageLoaded ? 'opacity-40' : 'opacity-20'
            }`}
            sizes="100vw"
            quality={85}
            onLoad={handleImageLoaded}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFhBkdoK0FGDAjQRKImCRiaM1pPDgbJwdlE6zFYXpZNEVDGSNEDHghHU7JgjVIgQARcRfJYkZCNZW0bU9OGdHkjjwJHHxHABFKE8jWg9RQMjeJAzEJFLPWY6WGj6vcdPQhPpHRGdBHAYlBjnmOaAjIlJb2sE/9k="
          />
        </div>

        {/* Video background - conditionally loaded and optimized */}
        {shouldLoadVideo && (
          <div 
            className={`absolute inset-0 bg-gray-900 transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            <video
              src="/intro123.webm"
              className="absolute w-full h-full object-cover opacity-40"
              onLoadedData={handleVideoLoaded}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content - Optimized for LCP */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          {/* Main heading - LCP element optimized */}
          <h1 
            className="text-4xl font-bold text-white mb-6 max-w-4xl leading-tight"
            style={{ 
              willChange: 'auto' 
            }}
          >
            Empowering Legal Expertise with Trusted Law Firm In India
          </h1>
          
          <p className="text-lg text-white mb-8 max-w-3xl leading-relaxed">
            AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
          </p>
          
          <Link href="/contact" prefetch={false}>
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
    </>
  );
}
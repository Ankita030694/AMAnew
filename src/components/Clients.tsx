'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isVisibleRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const clientLogos = [
    { src: "/credsettle.svg", alt: "Client 1" },
    { src: "/billcut1.svg", alt: "Client 2" },
    { src: "/sl.svg", alt: "Client 3" },
    { src: "/hdfc.svg", alt: "Client 4" },
    { src: "/bcb.svg", alt: "Client 5" },
    { src: "/glob.svg", alt: "Client 6" },
    { src: "/saga.svg", alt: "Client 7" },
    { src: "/li.svg", alt: "Client 8" },
    { src: "/soct.svg", alt: "Client 9" },
    { src: "/partner3.png", alt: "Client 10" },
  ];

  // Simplified visible slides calculation
  const updateVisibleSlides = useCallback(() => {
    if (typeof window === 'undefined') return;
    const newVisible = window.innerWidth >= 768 ? 4 : 2;
    setVisibleSlides(newVisible);
    setCurrentSlide(prev => Math.min(prev, clientLogos.length - newVisible));
  }, [clientLogos.length]);

  // Optimized resize handler with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateVisibleSlides, 150);
    };

    updateVisibleSlides(); // Initial call
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [updateVisibleSlides]);

  const maxSlideIndex = clientLogos.length - visibleSlides;

  // Simplified intersection observer
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      intervalRef.current = setInterval(() => {
        if (isVisibleRef.current) {
          setCurrentSlide(prev => (prev >= maxSlideIndex ? 0 : prev + 1));
        }
      }, 3000);
    };

    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [maxSlideIndex]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? maxSlideIndex : prev - 1));
  }, [maxSlideIndex]);

  const handleNext = useCallback(() => {
    setCurrentSlide(prev => (prev >= maxSlideIndex ? 0 : prev + 1));
  }, [maxSlideIndex]);

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 rounded-lg shadow-xl -mt-32 md:-mt-40">
        <div className="p-8 md:p-12">
          <h2 className="font-bold text-center text-[#5A4C33] mb-8 text-4xl">
            Providing Solutions To
          </h2>
          <div className="relative" ref={containerRef}>
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
              aria-label="Previous slide"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Logos Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`
                }}
              >
                {clientLogos.map((logo, index) => (
                  <div key={index} className="md:w-1/4 w-1/2 flex-shrink-0 px-4">
                    <div className={`${logo.src === "/partner3.png" ? "w-[200px] h-[200px] bg-black flex items-center justify-center mx-auto" : "aspect-w-3 aspect-h-2"}`}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={200}
                        height={100}
                        className="object-contain"
                        loading={index < visibleSlides ? "eager" : "lazy"}
                        priority={index < visibleSlides}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
              aria-label="Next slide"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

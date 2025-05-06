'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isVisibleRef = useRef(false);

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
  ];

  // Determine how many logos should be visible based on viewport width
  const getVisibleSlides = useCallback(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 4 : 2;
    }
    return 4;
  }, []);

  // Debounced resize handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const newVisible = getVisibleSlides();
        setVisibleSlides(newVisible);
        const maxSlideIndex = clientLogos.length - newVisible;
        setCurrentSlide((prev) => Math.min(prev, maxSlideIndex));
      }, 200); // 200ms debounce
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [getVisibleSlides, clientLogos.length]);

  // Calculate the maximum slide index
  const maxSlideIndex = clientLogos.length - visibleSlides;

  // Intersection Observer to detect if component is visible
  useEffect(() => {
    if (!carouselRef.current || typeof IntersectionObserver !== 'function') return;

    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
        if (isVisibleRef.current) {
          startTimer();
        } else {
          stopTimer();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  // Start and stop the auto-slide timer
  const startTimer = useCallback(() => {
    if (intervalRef.current === null && isVisibleRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
      }, 3000); // Increased to 3000ms for better performance
    }
  }, [maxSlideIndex]);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Clean up timer on unmount and when maxSlideIndex changes
  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [maxSlideIndex, startTimer, stopTimer]);

  const handlePrev = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
    setTimeout(startTimer, 1000);
  };

  const handleNext = () => {
    stopTimer();
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
    setTimeout(startTimer, 1000);
  };

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 rounded-lg shadow-xl -mt-32 md:-mt-40">
        <div className="p-8 md:p-12">
          <h2 className="font-bold text-center text-[#5A4C33] mb-8 text-4xl">
            Providing Solutions To
          </h2>
          <div
            className="relative"
            ref={carouselRef}
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
          >
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
                className="flex will-change-transform"
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
                  transition: 'transform 500ms ease-in-out'
                }}
              >
                {clientLogos.map((logo, index) => (
                  <div key={index} className="md:w-1/4 w-1/2 flex-shrink-0 px-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={200}
                        height={100}
                        className="object-contain"
                        loading={index < visibleSlides ? "eager" : "lazy"}
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
                xmlns="http://www.w3.org/2000/svg"
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

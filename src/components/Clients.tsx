'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4); // Default to desktop view
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clientLogos = [
    { src: "/credsettle.svg", alt: "Client 1" },
    { src: "/billcut1.svg", alt: "Client 2" },
    { src: "/saga.svg", alt: "Client 3" },
    { src: "/hdfc.svg", alt: "Client 4" },
    { src: "/bcb.svg", alt: "Client 5" },
    { src: "/glob.svg", alt: "Client 6" },
    { src: "/sl.svg", alt: "Client 7" },
    { src: "/li.svg", alt: "Client 8" },
    { src: "/soct.svg", alt: "Client 9" },
  ];

  // Determine how many logos should be visible based on viewport width
  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 4 : 2;
    }
    return 4;
  };

  // Update visibleSlides (and adjust currentSlide if needed) on resize
  useEffect(() => {
    const updateVisibleSlides = () => {
      const newVisible = getVisibleSlides();
      setVisibleSlides(newVisible);
      const maxSlideIndex = clientLogos.length - newVisible;
      setCurrentSlide((prev) => Math.min(prev, maxSlideIndex));
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  // Calculate the maximum slide index so that the final logo is reached
  const maxSlideIndex = clientLogos.length - visibleSlides;

  // Start and stop the auto-slide timer using a ref
  const startTimer = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
      }, 2000);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [maxSlideIndex]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 rounded-lg shadow-xl -mt-32 md:-mt-40">
        <div className="p-8 md:p-12">
          <h1 className="md:text-3xl font-bold text-center text-[#5A4C33] mb-8 text-2xl">
            PROVIDING SOLUTIONS TO
          </h1>
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
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Logos Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)` }}
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

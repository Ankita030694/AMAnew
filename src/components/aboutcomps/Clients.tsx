'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clientLogos = [
    { src: "/5.svg", alt: "Client 1" },
    { src: "/2.svg", alt: "Client 2" },
    { src: "/3.svg", alt: "Client 3" },
    { src: "/4.svg", alt: "Client 4" },
    { src: "/1.svg", alt: "Client 5" },
  ];

  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  };

  // Calculate max slide index for mobile
  const maxSlideIndex = Math.ceil(clientLogos.length / 2) - 1;

  // Auto-slide timer for mobile
  const startTimer = () => {
    if (intervalRef.current === null && isMobile()) {
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
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl -mt-32 md:-mt-40">
        <div className="p-8 md:p-8">
          <h1 className="md:text-3xl font-bold text-center text-[#5A4C33] mb-8 text-2xl">
            OUR AFFILIATIONS
          </h1>

          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-5 gap-4">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="aspect-w-3 aspect-h-2 transform scale-130">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={3000}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div
            className="relative md:hidden"
            ref={carouselRef}
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
          >
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

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {clientLogos.map((logo, index) => (
                  <div key={index} className="w-1/2 flex-shrink-0 px-4">
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

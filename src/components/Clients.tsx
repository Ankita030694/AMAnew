'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const clientLogos = [
    { src: "/credsettle.svg", alt: "Client 1" },
    { src: "/billcut1.svg", alt: "Client 2" },
    { src: "/hdfc.svg", alt: "Client 4" },
    { src: "/bcb.svg", alt: "Client 5" },
    { src: "/glob.svg", alt: "Client 6" },
    { src: "/sl.svg", alt: "Client 7" },
    { src: "/saga.svg", alt: "Client 3" },
    { src: "/li.svg", alt: "Client 8" },
    { src: "/soct.svg", alt: "Client 9" },
  ];

  const totalSlides = Math.max(0, clientLogos.length - 4);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const startTimer = () => {
      timer = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === totalSlides ? 0 : prev + 1
        );
      }, 2000);
    };

    if (carouselRef.current) {
      startTimer();

      carouselRef.current.addEventListener('mouseenter', () => {
        clearInterval(timer);
      });

      carouselRef.current.addEventListener('mouseleave', startTimer);
    }

    return () => clearInterval(timer);
  }, [totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 0 : prev + 1));
  };

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 rounded-lg shadow-xl -mt-32 md:-mt-40">
        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center text-[#000000] mb-8">PROVIDED SOLUTIONS TO:</h1>
          <div className="relative" ref={carouselRef}>
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Logos Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 25}%)` }}
              >
                {clientLogos.map((logo, index) => (
                  <div key={index} className="w-1/4 flex-shrink-0 px-4">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
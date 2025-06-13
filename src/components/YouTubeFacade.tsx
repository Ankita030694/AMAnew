'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface YouTubeFacadeProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({ 
  videoId, 
  title = "YouTube video player",
  className = "" 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    setIsLoaded(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full bg-black ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      {!isLoaded ? (
        <>
          {/* Thumbnail */}
          {isVisible && (
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover"
              priority={false}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          )}
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-all duration-300">
            <button
              onClick={handlePlay}
              className="w-16 h-16 md:w-20 md:h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300"
              aria-label={`Play ${title}`}
            >
              <svg 
                className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
          
          {/* Video title overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-sm md:text-base font-medium">{title}</p>
          </div>
        </>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&showinfo=1&modestbranding=0&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default YouTubeFacade; 
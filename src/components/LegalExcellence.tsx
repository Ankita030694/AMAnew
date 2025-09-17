'use client'
import { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Link from "next/link";

// Lightweight animation component replacing framer-motion
const FadeInDiv = ({ 
  children, 
  className = "", 
  delay = 0 
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const testimonialVideos = [
  {
    id: 1,
    title: "Client Testimonial 1",
    videoSrc: "/testivid/testivid1.mp4",
  },
  {
    id: 2,
    title: "Client Testimonial 2", 
    videoSrc: "/testivid/testivid2.mp4",
  },
  {
    id: 3,
    title: "Client Testimonial 3",
    videoSrc: "/testivid/testivid3.mp4",
  },
  {
    id: 4,
    title: "Client Testimonial 4",
    videoSrc: "/testivid/testivid4.mp4",
  },
];

export default function LegalExcellence() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Removed auto-navigation - user controls only

  // Handle video state based on active index
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          // Auto-unmute when navigated to
          video.muted = false;
          setIsMuted(false);
          // Don't autoplay - user needs to click play
          setIsPlaying(false);
        } else {
          video.pause();
          video.currentTime = 0;
          video.muted = true;
        }
      }
    });
  }, [activeIndex]);

  const togglePlayPause = useCallback(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
        setIsPlaying(false);
      } else {
        currentVideo.play().catch(() => {
          // Handle play restrictions
        });
        setIsPlaying(true);
      }
    }
  }, [activeIndex, isPlaying]);

  const toggleMute = useCallback(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.muted = !currentVideo.muted;
      setIsMuted(currentVideo.muted);
    }
  }, [activeIndex]);

  const handlePrev = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? testimonialVideos.length - 1 : current - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonialVideos.length);
  }, []);

  return (
    <div className="relative py-12 overflow-hidden bg-gradient-to-b from-white to-[#F5F2EB]" ref={containerRef}>
      {/* Simplified decorative elements */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#5A4C33] rounded-full opacity-10"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#5A4C33] rounded-full opacity-5"></div>
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-[#4A3C23] rounded-full opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <FadeInDiv className="text-center">
          <h2 className="text-sm md:text-base font-semibold text-[#5A4C33] tracking-wide uppercase">Voices of Success</h2>
          <h2 className="mt-2 text-4xl font-bold text-[#000000] sm:tracking-tight">
            Client Testimonials
          </h2>
          <div className="relative mt-5 mb-10">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#5A4C33] opacity-20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gradient-to-b from-white to-[#F5F2EB] text-[#5A4C33]">
                <svg className="h-4 w-4 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-8h2a3 3 0 116 0h2a5 5 0 00-10 0z" />
                </svg>
              </span>
            </div>
          </div>
        </FadeInDiv>

        <div className="relative">
          <div className="relative h-[500px] md:h-[600px]">
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center space-x-4 md:space-x-8 w-full max-w-6xl px-4">
                {/* Left Video (Previous) */}
                <div className="hidden lg:flex flex-1 justify-end">
                  <div className="relative w-48 h-72 rounded-xl overflow-hidden shadow-lg">
                    <video
                      key={`prev-${activeIndex}`}
                      className="w-full h-full object-cover filter blur-sm opacity-70"
                      src={testimonialVideos[activeIndex === 0 ? testimonialVideos.length - 1 : activeIndex - 1].videoSrc}
                      muted={true}
                      loop
                      playsInline
                      preload="auto"
                      autoPlay={false}
                      onLoadedData={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.currentTime = 1; // Show first frame
                      }}
                    />

                  </div>
                </div>

                {/* Center Video (Current) */}
                <div className="flex-shrink-0">
                  <div className="relative w-80 md:w-96 h-96 md:h-[480px] rounded-xl overflow-hidden shadow-2xl bg-white">
                    <video
                      key={`center-${activeIndex}`}
                      ref={(el) => {
                        videoRefs.current[activeIndex] = el;
                      }}
                      className="w-full h-full object-cover"
                      src={testimonialVideos[activeIndex].videoSrc}
                      muted={isMuted}
                      loop
                      playsInline
                      controls={false}
                      preload="auto"
                    />
                    
                    {/* Play/Pause Button - Bottom Left */}
                    <div className="absolute bottom-4 left-4">
                      <button
                        onClick={togglePlayPause}
                        className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                      >
                        {isPlaying ? (
                          <FaPause className="h-5 w-5" />
                        ) : (
                          <FaPlay className="h-5 w-5 ml-0.5" />
                        )}
                      </button>
                    </div>

                    {/* Mute/Unmute Button - Bottom Right */}
                    <div className="absolute bottom-4 right-4">
                      <button
                        onClick={toggleMute}
                        className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                      >
                        {isMuted ? (
                          <FaVolumeMute className="h-5 w-5" />
                        ) : (
                          <FaVolumeUp className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Video (Next) */}
                <div className="hidden lg:flex flex-1 justify-start">
                  <div className="relative w-48 h-72 rounded-xl overflow-hidden shadow-lg">
                    <video
                      key={`next-${activeIndex}`}
                      className="w-full h-full object-cover filter blur-sm opacity-70"
                      src={testimonialVideos[(activeIndex + 1) % testimonialVideos.length].videoSrc}
                      muted={true}
                      loop
                      playsInline
                      preload="auto"
                      autoPlay={false}
                      onLoadedData={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.currentTime = 1; // Show first frame
                      }}
                    />
                    <div className="absolute inset-0 bg-opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3 mt-10">
            <button
              onClick={handlePrev}
              className="px-3 md:px-5 py-2 md:py-3 flex items-center justify-center space-x-2 border border-transparent text-sm md:text-base font-medium rounded-lg shadow-sm text-white bg-[#D2A02A] hover:bg-[#4A3C23] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A4C33] transition-all duration-200"
            >
              <FaChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden md:inline">Previous</span>
            </button>
            <button
              onClick={handleNext}
              className="px-3 md:px-5 py-2 md:py-3 flex items-center justify-center space-x-2 border border-transparent text-sm md:text-base font-medium rounded-lg shadow-sm text-white bg-[#D2A02A] hover:bg-[#4A3C23] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A4C33] transition-all duration-200"
            >
              <span className="hidden md:inline">Next</span>
              <FaChevronRight className="h-3 w-3 md:h-4 md:w-4" />
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="https://maps.app.goo.gl/NWym1wPL2CTFS9qo8">
              <button className="bg-[#D2A02A] hover:bg-[#5A4C33] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
                Our Reviews
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
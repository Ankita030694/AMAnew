'use client'
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
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
    poster: "/testivid/posters/testivid1.jpg",
  },
  {
    id: 2,
    title: "Client Testimonial 2", 
    videoSrc: "/testivid/testivid2.mp4",
    poster: "/testivid/posters/testivid2.jpg",
  },
  {
    id: 3,
    title: "Client Testimonial 3",
    videoSrc: "/testivid/testivid3.mp4",
    poster: "/testivid/posters/testivid3.jpg",
  },
  {
    id: 4,
    title: "Client Testimonial 4",
    videoSrc: "/testivid/testivid4.mp4",
    poster: "/testivid/posters/testivid4.jpg",
  },
];

// Video cache to store loaded video elements
const videoCache = new Map<string, HTMLVideoElement>();

// Optimized video component with caching
const OptimizedVideo = ({ 
  src, 
  poster,
  className, 
  onLoadedData, 
  videoRef, 
  ...props 
}: {
  src: string;
  poster?: string;
  className: string;
  onLoadedData?: (e: React.SyntheticEvent<HTMLVideoElement>) => void;
  videoRef?: (el: HTMLVideoElement | null) => void;
  [key: string]: any;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoRef = useCallback((el: HTMLVideoElement | null) => {
    videoElementRef.current = el;
    if (videoRef) videoRef(el);
  }, [videoRef]);

  const handleLoadingComplete = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsLoaded(true);
    setError(false);
    if (onLoadedData) onLoadedData(e);
  }, [onLoadedData]);

  const handleError = useCallback(() => {
    setError(true);
    setIsLoaded(false);
  }, []);

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  // Check if video is already loaded (for cached videos)
  useEffect(() => {
    const video = videoElementRef.current;
    if (video && video.readyState >= 2) { // HAVE_CURRENT_DATA or higher
      setIsLoaded(true);
      setError(false);
    }
  }, [src]);

  return (
    <div className="relative w-full h-full">
      <video
        ref={handleVideoRef}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        src={src}
        poster={poster}
        preload="none"
        onLoadedData={handleLoadingComplete}
        onLoadedMetadata={handleLoadingComplete}
        onCanPlay={handleLoadingComplete}
        onError={handleError}
        {...props}
      />
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#D2A02A] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500 text-sm">Failed to load video</div>
        </div>
      )}
    </div>
  );
};

export default function LegalExcellence() {
  const [isInView, setIsInView] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const [unmutedVideo, setUnmutedVideo] = useState<number | null>(null);
  const [videosLoaded, setVideosLoaded] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Preload and auto-play videos when component becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Preload all videos when component becomes visible
          testimonialVideos.forEach((video, index) => {
            if (!videosLoaded.has(index)) {
              const videoElement = document.createElement('video');
              videoElement.src = video.videoSrc;
              videoElement.preload = 'metadata';
              videoElement.load();
              videoElement.addEventListener('loadeddata', () => {
                setVideosLoaded(prev => new Set([...prev, index]));
                // Auto-play the video when loaded (muted by default)
                const actualVideo = videoRefs.current[index];
                if (actualVideo) {
                  actualVideo.play().catch(() => {
                    // Handle auto-play restrictions
                  });
                  setPlayingVideos(prev => new Set([...prev, index]));
                }
              });
              videoCache.set(video.videoSrc, videoElement);
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videosLoaded]);

  // Handle video mute/unmute - only one video can be unmuted at a time
  const toggleVideoMute = useCallback((videoIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === videoIndex) {
          // If this video is currently unmuted, mute it
          if (unmutedVideo === videoIndex) {
            video.muted = true;
            setUnmutedVideo(null);
          } else {
            // Unmute this video and mute all others
            video.muted = false;
            setUnmutedVideo(videoIndex);
          }
        } else {
          // Mute all other videos
          video.muted = true;
        }
      }
    });
  }, [unmutedVideo]);

  const toggleVideoPlayPause = useCallback((videoIndex: number) => {
    const video = videoRefs.current[videoIndex];
    if (video) {
      if (playingVideos.has(videoIndex)) {
        video.pause();
        setPlayingVideos(prev => {
          const newSet = new Set(prev);
          newSet.delete(videoIndex);
          return newSet;
        });
      } else {
        video.play().catch(() => {
          // Handle play restrictions
        });
        setPlayingVideos(prev => new Set([...prev, videoIndex]));
      }
    }
  }, [playingVideos]);

  // Handle video click - unmute the selected video (videos auto-play)
  const handleVideoClick = useCallback((videoIndex: number) => {
    // Unmute this video and mute all others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = index !== videoIndex;
      }
    });
    setUnmutedVideo(videoIndex);
  }, []);

  return (
    <div className="relative py-8 overflow-hidden bg-gradient-to-b from-white to-[#F5F2EB]" ref={containerRef}>
      {/* Simplified decorative elements */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#5A4C33] rounded-full opacity-10"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#5A4C33] rounded-full opacity-5"></div>
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-[#4A3C23] rounded-full opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <FadeInDiv className="text-center mb-8">
          <h2 className="text-sm md:text-base font-semibold text-[#5A4C33] tracking-wide uppercase">Voices of Success</h2>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#000000] sm:tracking-tight">
            Client Testimonials
          </h2>
          <div className="relative mt-4 mb-6">
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

        {/* Videos in a single row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonialVideos.map((video, index) => (
            <div key={video.id} className="relative">
              <div 
                className="relative w-full aspect-[9/16] rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer"
                onClick={() => handleVideoClick(index)}
              >
                <OptimizedVideo
                  videoRef={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="w-full h-full object-cover"
                  src={video.videoSrc}
                  poster={video.poster}
                  muted={unmutedVideo !== index}
                  autoPlay
                  loop
                  playsInline
                  controls={false}
                  preload="none"
                  onLoadedData={() => {
                    // Auto-play when video is loaded
                    const video = videoRefs.current[index];
                    if (video) {
                      video.play().catch(() => {
                        // Handle auto-play restrictions
                      });
                      setPlayingVideos(prev => new Set([...prev, index]));
                    }
                  }}
                />
                
                {/* Video Controls */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                  {/* Play/Pause Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the video click
                      toggleVideoPlayPause(index);
                    }}
                    className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    {playingVideos.has(index) ? (
                      <FaPause className="h-3 w-3" />
                    ) : (
                      <FaPlay className="h-3 w-3 ml-0.5" />
                    )}
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the video click
                      toggleVideoMute(index);
                    }}
                    className="bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    {unmutedVideo === index ? (
                      <FaVolumeUp className="h-3 w-3" />
                    ) : (
                      <FaVolumeMute className="h-3 w-3" />
                    )}
                  </button>
                </div>

                
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Button */}
        <div className="flex justify-center mt-8">
          <Link href="https://maps.app.goo.gl/NWym1wPL2CTFS9qo8">
            <button className="bg-[#D2A02A] hover:bg-[#5A4C33] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
              Our Reviews
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
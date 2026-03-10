"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: 1, src: "/newAssets/testivid/testivid1.mp4", poster: "/newAssets/testivid/posters/testivid1.jpg" },
  { id: 2, src: "/newAssets/testivid/testivid2.mp4", poster: "/newAssets/testivid/posters/testivid2.jpg" },
  { id: 3, src: "/newAssets/testivid/testivid3.mp4", poster: "/newAssets/testivid/posters/testivid3.jpg" },
  { id: 4, src: "/newAssets/testivid/testivid4.mp4", poster: "/newAssets/testivid/posters/testivid4.jpg" },
];

export default function VideoTestimonials() {
  const [unmutedId, setUnmutedId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleVideoClick = (id: number) => {
    if (unmutedId === id) {
      setUnmutedId(null);
    } else {
      setUnmutedId(id);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video) {
        if (parseInt(id) === unmutedId) {
          video.muted = false;
        } else {
          video.muted = true;
        }
      }
    });
  }, [unmutedId]);

  return (
    <section className="py-12 bg-[#EBE9E4]">
      <div className="w-full px-4 lg:px-6 relative group">
        
        {/* Mobile Navigation Arrows */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 text-white rounded-full md:hidden backdrop-blur-sm hover:bg-black/40 transition-colors"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 text-white rounded-full md:hidden backdrop-blur-sm hover:bg-black/40 transition-colors"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:gap-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-[#30261C]/10 transition-transform duration-500 hover:scale-[1.02] z-10 hover:z-20 min-w-full md:min-w-0 snap-center"
              onClick={() => handleVideoClick(video.id)}
            >
              <video
                ref={(el) => { videoRefs.current[video.id] = el; }}
                src={video.src}
                poster={video.poster}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                crossOrigin="anonymous"
              />
              
              {/* Overlay Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Mute/Unmute Indicator */}
              <div className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg transition-all duration-300">
                {unmutedId === video.id ? (
                  <Volume2 className="w-5 h-5 text-white" />
                ) : (
                  <VolumeX className="w-5 h-5 text-white/70" />
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

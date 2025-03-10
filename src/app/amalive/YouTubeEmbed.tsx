'use client'

import { memo, useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
}

// Optimized YouTube embed component
const YouTubeEmbed = ({ videoId }: YouTubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-[200px] rounded-t-xl overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )}
      
      <iframe
        width="100%"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-t-xl"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      ></iframe>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(YouTubeEmbed);
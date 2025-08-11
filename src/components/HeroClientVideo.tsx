'use client';
import { useState, useEffect } from "react";

// Network Information API type definitions
interface NetworkInformation {
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
  saveData?: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
  deviceMemory?: number;
}

export default function HeroClientVideo() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Defer decision until after initial paint to prioritize LCP
    const checkAndLoadVideo = () => {
      // Safety check for SSR
      if (typeof window === 'undefined') return;

      const nav = navigator as NavigatorWithConnection;

      // Check if device is mobile (smartphones only, not tablets)
      const isMobileView = window.innerWidth < 768;

      // Skip video entirely on mobile
      if (isMobileView) return;

      // Network speed check
      const connectionSpeed = nav.connection?.effectiveType || '4g';
      const isGoodConnection =
        !['slow-2g', '2g', '3g'].includes(connectionSpeed) &&
        nav.connection?.saveData !== true;

      // Device capability check
      const isGoodDevice =
        typeof nav.deviceMemory === 'undefined' || (nav.deviceMemory ?? 4) > 2;

      // Load video only if conditions are met
      if (isGoodConnection && isGoodDevice) {
        setShouldLoadVideo(true);
      }
    };

    // Defer until after initial paint
    requestAnimationFrame(checkAndLoadVideo);
  }, []);

  // Don't render anything if video shouldn't load
  if (!shouldLoadVideo) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 bg-gray-900 transition-opacity duration-1000 ${
        isVideoLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      <video
        src="/intro123.webm"
        className="absolute w-full h-full object-cover opacity-40"
        onLoadedData={() => setIsVideoLoaded(true)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
} 
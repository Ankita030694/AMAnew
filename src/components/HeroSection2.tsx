'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const HeroSection2 = () => {
  const [isDownloadDropdownOpen, setIsDownloadDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (supports both mouse and touch)
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;
    if (isMobile) return; // On mobile, keep dropdown open unless button toggles it

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDownloadDropdownOpen(false);
      }
    };

    if (isDownloadDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchend', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [isDownloadDropdownOpen]);

  // App store links from Navbar
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share";
  const appStoreLink = "https://apps.apple.com/in/app/ama-legal-solutions/id6755156186";

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 lg:py-20">
      {/* Yellow Background Shape - positioned absolutely to extend to screen edge - Desktop only */}
      <div className="absolute right-0 top-[15%] bottom-[15%] w-[19%] rounded-l-[50px] bg-[#D4A017] hidden lg:block"></div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative">
        {/* Yellow Background Shape - Mobile anchored to bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[55%] rounded-t-[50px] bg-[#D4A017] -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 mt-40">
          <div className="flex flex-col items-center text-center">
            {/* Trusted Badge */}
            <div className="mb-6 ios-badge-wrapper">
              <Image
                src="/badge.png"
                alt="Trusted by 5000+ Clients"
                width={300}
                height={60}
                className="object-contain"
                priority
                quality={100}
              />
            </div>

            {/* Heading - Center Aligned */}
            <h1 className="text-[27px] font-semibold leading-tight text-[#30261C] mb-6 max-w-md">
              Empowering Legal Expertise with Trusted Law Firm In India
            </h1>

            {/* Subtext - Center Aligned */}
            <p className="text-[14px] text-gray-600 mb-8 max-w-lg">
              AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
            </p>

            {/* Buttons - Center Aligned */}
            <div className="flex flex-row gap-3 mb-12 justify-center items-center">
              <Link
                href="/contact"
                className="rounded-full bg-[#D4A017] px-6 py-3 text-sm font-light text-[#1A1A1A] transition-colors hover:bg-[#b88b14] text-center whitespace-nowrap"
              >
                Enquire Now
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  className="rounded-full bg-[#30261C] px-6 py-3 text-sm font-light text-white transition-colors hover:bg-black flex items-center gap-2 whitespace-nowrap group relative touch-manipulation"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDownloadDropdownOpen(prev => !prev);
                  }}
                >
                  Download AMA App
                  <span className="ml-2 flex items-center">
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isDownloadDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {isDownloadDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-200 overflow-hidden">
                    <Link
                      href={playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 touch-manipulation"
                      onClick={() => {
                        const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;
                        if (!isMobile) setTimeout(() => setIsDownloadDropdownOpen(false), 0);
                      }}
                    >
                      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.69L15.39,13.7L17.38,11.72L20.3,14.9C20.63,15.23 20.63,15.77 20.3,16.1M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M14.54,11.15L16.81,8.88C17.14,9.21 17.14,9.75 16.81,10.08L14.54,12.35L12.27,10.08L14.54,7.81Z" />
                      </svg>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">Download on</div>
                        <div className="text-sm font-semibold text-gray-900">Google Play Store</div>
                      </div>
                    </Link>
                    <Link
                      href={appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors touch-manipulation"
                      onClick={() => {
                        const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;
                        if (!isMobile) setTimeout(() => setIsDownloadDropdownOpen(false), 0);
                      }}
                    >
                      <svg className="w-6 h-6 flex-shrink-0 fill-current text-gray-900" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.55-.68.75-1.26 1.95-1.1 3.09 1.17.09 2.36-.68 3.09-1.53z"/>
                      </svg>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">Download on</div>
                        <div className="text-sm font-semibold text-gray-900">App Store</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Phone Image with Yellow Background from Bottom */}
            <div className="relative w-full mt-8 z-10 flex justify-center">
            <div className="absolute right-[15%] top-[70%] bottom-[-70%] left-[15%] -z-10 rounded-l-[50px] bg-[#D4A017] lg:hidden"></div>
              <Image
                src="/app_creative.png"
                alt="AMA Legal Solutions App Interface"
                width={300}
                height={600}
                className="h-auto w-full max-w-[280px] drop-shadow-2xl relative z-10 -mt-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start z-10">
            {/* Trusted Badge */}
            <div className="mb-6 -ml-4">
              <Image
                src="/badge.svg"
                alt="Trusted by 5000+ Clients"
                width={400}
                height={60}
                className="object-contain"
                priority
              />
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-none text-[#30261C]">
            Empowering Legal Expertise with Trusted Law Firm In India
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-lg text-lg text-gray-600">
            AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#D4A017] px-8 py-3.5 text-base font-light text-[#1A1A1A] transition-colors hover:bg-[#b88b14]"
              >
                Enquire Now
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDownloadDropdownOpen(!isDownloadDropdownOpen)}
                  className="rounded-full bg-[#30261C] px-8 py-3.5 text-base font-light text-white transition-colors hover:bg-black flex items-center gap-2"
                >
                  Download AMA App
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDownloadDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDownloadDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-200 overflow-hidden">
                    <Link
                      href={playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
                      onClick={() => {
                        setTimeout(() => setIsDownloadDropdownOpen(false), 0);
                      }}
                    >
                      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.69L15.39,13.7L17.38,11.72L20.3,14.9C20.63,15.23 20.63,15.77 20.3,16.1M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M14.54,11.15L16.81,8.88C17.14,9.21 17.14,9.75 16.81,10.08L14.54,12.35L12.27,10.08L14.54,7.81Z" />
                      </svg>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">Download on</div>
                        <div className="text-sm font-semibold text-gray-900">Google Play Store</div>
                      </div>
                    </Link>
                    <Link
                      href={appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        setTimeout(() => setIsDownloadDropdownOpen(false), 0);
                      }}
                    >
                      <svg className="w-6 h-6 flex-shrink-0 fill-current text-gray-900" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.55-.68.75-1.26 1.95-1.1 3.09 1.17.09 2.36-.68 3.09-1.53z"/>
                      </svg>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">Download on</div>
                        <div className="text-sm font-semibold text-gray-900">App Store</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Phone Image */}
          <div className="relative flex justify-center lg:justify-end z-10">
            {/* Yellow Background Shape for mobile/tablet */}
            <div className="absolute right-[-20%] top-[10%] bottom-[10%] left-[20%] -z-10 rounded-l-[50px] bg-[#D4A017] lg:hidden"></div>

            {/* Phone Image */}
            <div className="relative z-10 w-full max-w-[300px] sm:max-w-sm lg:max-w-md">
              <Image
                src="/app_creative.png"
                alt="AMA Legal Solutions App Interface"
                width={400}
                height={800}
                className="h-auto w-full drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

        {/* Phone positioned absolutely on the right for large screens */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 z-20 w-[320px] xl:w-[380px] 2xl:w-[420px]">
          <Image
            src="/app_creative.png"
            alt="AMA Legal Solutions App Interface"
            width={370}
            height={400}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Hide the grid phone on large screens since we use the absolute one */}
        <style jsx>{`
          @media (min-width: 1024px) {
            .grid > div:last-child {
              visibility: hidden;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection2;
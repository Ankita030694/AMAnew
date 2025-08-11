import Image from "next/image";
import HeroClientVideo from "./HeroClientVideo";

export default function HeroServer() {
  return (
    <>
      {/* Preload critical hero image */}
      <link rel="preload" href="/bannerbg.png" as="image" />
      <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />

      <div className="relative min-h-screen">
        {/* Static image background */}
        <div className="absolute inset-0 bg-black">
          <Image
            src="/bannerbg.png"
            alt="Legal background"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
          />
        </div>

        {/* Client-only video component */}
        <HeroClientVideo />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content - server rendered for better LCP */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-6 max-w-4xl leading-tight">
            Empowering Legal Expertise with Trusted Law Firm In India
          </h1>
          <p className="text-lg text-white mb-8 max-w-3xl leading-relaxed">
            AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
          </p>
          <a href="/contact">
            <button className="relative overflow-hidden bg-[#D2A02A] hover:bg-[#5A4C33] text-white px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D2A02A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative inline-flex items-center">
                Make enquiry
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
} 
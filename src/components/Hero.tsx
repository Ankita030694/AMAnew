'use client'
import Image from "next/image";
import Link from "next/link";
import HeroClientVideo from "./HeroClientVideo";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
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
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="text-center lg:text-left space-y-8 -mt-25">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Empowering Legal Expertise with Trusted Law Firm In India
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AMA Legal Solutions embodies a culture rooted in values and principles that prioritize excellence, integrity, and client satisfaction.
            </p>
            
            {/* Make Enquiry Button */}
            <div className="flex justify-center lg:justify-start">
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
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
                  target="_blank"
                  className="group flex items-center gap-3 bg-[#D2A02A] text-white px-6 py-3.5 rounded-xl hover:bg-[#5A4C33] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                >
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.69L15.39,13.7L17.38,11.72L20.3,14.9C20.63,15.23 20.63,15.77 20.3,16.1M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M14.54,11.15L16.81,8.88C17.14,9.21 17.14,9.75 16.81,10.08L14.54,12.35L12.27,10.08L14.54,7.81Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-medium uppercase tracking-wider opacity-90">Get it on</div>
                    <div className="text-lg font-bold leading-tight">Google Play</div>
                  </div>
                </Link>

                <Link 
                  href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                  target="_blank"
                  className="group flex items-center gap-3 bg-white text-[#5A4C33] px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                >
                  <svg className="w-8 h-8 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.55-.68.75-1.26 1.95-1.1 3.09 1.17.09 2.36-.68 3.09-1.53z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs font-medium uppercase tracking-wider opacity-90">Download on the</div>
                    <div className="text-lg font-bold leading-tight">App Store</div>
                  </div>
                </Link>
            </div>
          </div>

          {/* Right Side: App Creative */}
          <div className="hidden lg:flex justify-center lg:justify-end relative">
             <div className="relative w-[320px] h-[640px] animate-float-slow">
                <Image
                  src="/app_creative.png"
                  alt="AMA Legal Solutions App Interface"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
             </div>
          </div>

        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

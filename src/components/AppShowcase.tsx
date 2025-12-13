'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Lightweight animation component
const FadeInDiv = ({ 
  children, 
  className = "", 
  delay = 0,
  id 
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id: string;
}) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      const element = document.getElementById(id);
      if (element) observer.observe(element);
      
      return () => observer.disconnect();
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay, id]);
  
  return (
    <div 
      id={id}
      className={`${className} transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  );
};

export default function AppShowcase() {
  return (
    <div className="bg-[#F8F5EC] py-12 md:py-16 relative overflow-hidden">
      {/* Decorative Elements - Website Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#D2A02A]/10 rounded-bl-full translate-x-10 -translate-y-10" />
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-56 md:h-56 bg-[#5A4C33]/10 rounded-tr-full -translate-x-20 translate-y-20" />
      
      {/* Dotted Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#5A4C33 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content - Left Side */}
          <FadeInDiv id="app-content" className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4C33] mb-4 relative inline-block">
                Get Legal Clarity Instantly
                <div className="h-1 bg-[#D2A02A] absolute -bottom-2 left-0 right-0 mx-auto lg:mx-0 w-3/4 lg:w-full" />
              </h2>
              <p className="text-lg text-[#5A4C33]/80 mt-6 font-light leading-relaxed">
                Access expert legal advice in seconds, directly from your phone. Your trusted legal companion, anytime, anywhere.
              </p>
            </div>
            
            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border-l-4 border-[#D2A02A] shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#D2A02A]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-[#5A4C33] font-semibold text-xs tracking-wide">SECURE</span>
              </div>
              
              <div className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border-l-4 border-[#D2A02A] shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#D2A02A]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="text-[#5A4C33] font-semibold text-xs tracking-wide">INSTANT</span>
              </div>
              
              <div className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border-l-4 border-[#D2A02A] shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#D2A02A]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <span className="text-[#5A4C33] font-semibold text-xs tracking-wide">CONFIDENTIAL</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4 pt-2">
              <p className="text-base text-[#5A4C33] font-medium">
                Download the <span className="text-[#D2A02A] font-bold">AMA Legal Solution App</span> Today
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&pcampaignid=web_share"
                  target="_blank"
                  className="group flex items-center gap-3 bg-[#5A4C33] text-white px-5 py-3 rounded-lg hover:bg-[#D2A02A] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                >
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.69L15.39,13.7L17.38,11.72L20.3,14.9C20.63,15.23 20.63,15.77 20.3,16.1M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88M14.54,11.15L16.81,8.88C17.14,9.21 17.14,9.75 16.81,10.08L14.54,12.35L12.27,10.08L14.54,7.81Z" />
                  </svg>
                  <div className="text-left flex-1">
                    <div className="text-xs font-medium uppercase tracking-wider opacity-90">Get it on</div>
                    <div className="text-base font-bold leading-tight">Google Play</div>
                  </div>
                </Link>

                <Link 
                  href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                  target="_blank"
                  className="group flex items-center gap-3 bg-white border-2 border-[#5A4C33] text-[#5A4C33] px-5 py-3 rounded-lg hover:bg-[#5A4C33] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                >
                  <svg className="w-7 h-7 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.55-.68.75-1.26 1.95-1.1 3.09 1.17.09 2.36-.68 3.09-1.53z"/>
                  </svg>
                  <div className="text-left flex-1">
                    <div className="text-xs font-medium uppercase tracking-wider opacity-90">Download on the</div>
                    <div className="text-base font-bold leading-tight">App Store</div>
                  </div>
                </Link>
              </div>
            </div>
          </FadeInDiv>

          {/* Image Content - Right Side */}
          <FadeInDiv id="app-image" delay={200} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] mx-auto">
              {/* Subtle Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D2A02A]/10 to-[#5A4C33]/10 rounded-3xl blur-3xl transform scale-110 animate-float" />
              
              {/* Main Image - No Background Container */}
              <div className="relative z-10 animate-float-slow">
                <Image
                  src="/app_creative.png"
                  alt="AMA Legal Solutions App Interface"
                  width={280}
                  height={280}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                  unoptimized
                  loading="eager"
                />
              </div>
              
            
            </div>
          </FadeInDiv>

        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

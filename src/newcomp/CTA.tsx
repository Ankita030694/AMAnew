"use client";

import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative bg-[#30261C] py-[90px] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotated Blur Container */}
        <div 
          className="absolute w-[968px] h-[1293px] left-1/2 -ml-[284px] -top-[531px]"
          style={{ transform: 'rotate(11.849deg)' }}
        >
          {/* Blurred Lines */}
          <div 
            className="absolute w-[49px] h-[1298px] left-[8px] top-[69px]"
            style={{ 
              transform: 'rotate(39.681deg)',
              background: 'rgba(234, 230, 219, 0.00)',
              filter: 'blur(129.4px)'
            }}
          />
          <div 
            className="absolute w-[49px] h-[1298px] left-[234px] top-[116px]"
            style={{ 
              transform: 'rotate(29.681deg)',
              background: 'rgba(234, 230, 219, 0.00)',
              filter: 'blur(129.4px)'
            }}
          />
          <div 
            className="absolute w-[49px] h-[1298px] left-[498px] top-[191px]"
            style={{ 
              transform: 'rotate(29.681deg)',
              background: 'rgba(234, 230, 219, 0.50)',
              filter: 'blur(129.4px)'
            }}
          />
          <div 
            className="absolute w-[49px] h-[1298px] left-[297px] top-[130px]"
            style={{ 
              transform: 'rotate(29.681deg)',
              background: 'rgba(234, 230, 219, 0.50)',
              filter: 'blur(129.4px)'
            }}
          />
          <div 
            className="absolute w-[49px] h-[1298px] left-[90px] top-[86px]"
            style={{ 
              transform: 'rotate(29.681deg)',
              background: 'rgba(234, 230, 219, 0.36)',
              filter: 'blur(129.4px)'
            }}
          />
          <div 
            className="absolute w-[49px] h-[1298px] left-[316px] top-[134px]"
            style={{ 
              transform: 'rotate(29.681deg)',
              background: 'rgba(234, 230, 219, 0.19)',
              filter: 'blur(129.4px)'
            }}
          />
          <div 
            className="absolute w-[49px] h-[1298px] left-[580px] top-[208px]"
            style={{ 
              transform: 'rotate(29.681deg)',
              background: 'rgba(234, 230, 219, 0.00)',
              filter: 'blur(129.4px)'
            }}
          />
          <div 
            className="absolute w-[49px] h-[1298px] left-[378px] top-[147px]"
            style={{ 
              transform: 'rotate(29.681deg)',
              background: 'rgba(234, 230, 219, 0.00)',
              filter: 'blur(129.4px)'
            }}
          />
        </div>

        {/* Golden Blur Effect */}
        <svg 
          className="absolute left-[30%] bottom-0 w-[245px] h-[234px]"
          style={{ filter: 'blur(101.6px)' }}
          width="868" 
          height="696" 
          viewBox="0 0 868 696" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_cta)">
            <path 
              d="M270.9 472.4V270.9L596.9 472.4V582.9L270.9 472.4Z" 
              fill="#D29E0D" 
              fillOpacity="0.61"
            />
          </g>
          <defs>
            <filter 
              id="filter0_f_cta" 
              x="0" 
              y="0" 
              width="867.8" 
              height="853.8" 
              filterUnits="userSpaceOnUse" 
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="135.45" result="effect1_foregroundBlur"/>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[588px] mx-auto flex flex-col items-center gap-[24px] md:gap-[30px] px-4 md:px-6">
        {/* Logo Icon */}
        <div 
          className="w-[72px] h-[72px] md:w-[85px] md:h-[85px] p-[6px] md:p-[7px] flex justify-center items-center rounded-[8px]"
          style={{
            background: 'rgba(234, 230, 219, 0.15)',
            boxShadow: '2px 3px 23px 0 rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(2px)'
          }}
        >
          <div 
            className="w-[60px] h-[60px] md:w-[71px] md:h-[71px] flex-shrink-0 rounded-[4px] flex items-center justify-center"
            style={{
              background: 'rgba(234, 230, 219, 0.15)',
              filter: 'drop-shadow(0 0 3.5px rgba(0, 0, 0, 0.41))',
              backdropFilter: 'blur(2px)'
            }}
          >
            <Image 
              src="/newAssets/logo/ama_box.svg" 
              alt="AMA Legal Solutions" 
              width={53}
              height={53}
              className="w-[45px] md:w-[53px] h-auto"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-[16px] md:gap-[19px] w-full">
          <h2 
            className="text-[#EAE6DB] text-center text-[31px] md:text-[47px] font-normal leading-[1.1] md:leading-[1.2] w-full"
            style={{ fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif' }}
          >
            Clarity for Your Legal Challenges
          </h2>
          <p 
            className="text-center text-[16px] md:text-[20px] font-light leading-[1.4] md:leading-[23px] w-full"
            style={{ 
              color: 'rgba(234, 230, 219, 0.65)',
              letterSpacing: '0.4px',
              fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif'
            }}
          >
            Strategic, result-driven legal solutions for individuals and businesses across India.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center gap-[16px] md:gap-[38px] flex-wrap justify-center sm:flex-nowrap">
          {/* Get Legal Help Button */}
          <div className="relative w-[150px] md:w-[172px] h-[43px] flex-shrink-0">
            {/* Button Shadow/Glow */}
            {/* Actual Button */}
            <Link
              href="/contact"
              className="absolute left-0 top-[4px] w-[150px] md:w-[172px] h-[35px] md:h-[39px] flex items-center justify-center gap-[8px] rounded-[47px] border-2 border-[#D29E0D] bg-[#30261C] px-[20px] md:px-[27px] py-[8px] md:py-[10px] hover:bg-[#3a2f20] transition-colors"
            >
              <span 
                className="text-[#EAE6DB] text-[14px] md:text-[16px] font-light leading-[16px] md:leading-[18px]"
                style={{ fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                Get Legal Help
              </span>
            </Link>

            {/* Button Shadow/Glow */}
            <svg 
              className="absolute left-[15px] md:left-[28px] top-0 pointer-events-none z-10 w-[120px]"
              width="120" 
              height="10" 
              viewBox="0 0 140 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_1740_3634)">
                <ellipse cx="70" cy="7.5" rx="66" ry="3.5" fill="url(#paint0_linear_1740_3634)"/>
              </g>
              <defs>
                <filter id="filter0_f_1740_3634" x="0" y="0" width="140" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1740_3634"/>
                </filter>
                <linearGradient id="paint0_linear_1740_3634" x1="4" y1="7.5" x2="136" y2="7.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D29E0D"/>
                  <stop offset="0.5" stopColor="white"/>
                  <stop offset="1" stopColor="#D29E0D"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Explore Link */}
          <Link
            href="/services"
            className="text-[#EAE6DB] text-[15px] md:text-[19px] font-normal leading-[19px] hover:opacity-80 transition-opacity whitespace-nowrap"
            style={{ fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif' }}
          >
            Explore our practice areas →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

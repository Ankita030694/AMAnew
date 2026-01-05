"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import OurAttorneys from "../components/aboutcomps/OurAttorneys";
import { Attorney } from "@/lib/attorneys";

const AboutUsRevamp = ({ attorneys = [] }: { attorneys?: Attorney[] }) => {
  return (
    <main className="w-full bg-[#EAE6DB]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen md:h-[calc(140vh)] flex flex-col justify-between items-center overflow-hidden">
        {/* Content Container - Flex grow to take available space but keep items centered/spaced */}
        <div className="flex-grow flex flex-col justify-center items-center px-4 w-full pt-32 md:pt-50 mb-24 md:mb-0">
          
          {/* Headings Group */}
          <div className="text-center mb-6 md:mb-8">
              <h1 className="text-[32px] md:text-[54px] font-light text-black leading-tight">
                  Clear answers. Real lawyers.
              </h1>
              <h2 
                  className="text-[32px] md:text-[54px] leading-tight"
                  style={{
                    background: "linear-gradient(90deg, #30261C 5.29%, #D29E0D 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    fontWeight: 400
                  }}
              >
                  One trusted legal workspace.
              </h2>
          </div>

          {/* Description */}
          <p 
              className="text-center text-base md:text-xl max-w-2xl px-6 mb-8 font-medium leading-relaxed"
              style={{ color: "rgba(48, 38, 28, 0.75)" }}
          >
              AMA Legal Solutions brings your questions, cases, and expert advice together so you never lose track of what matters.
          </p>

          {/* App Store Icons */}
          <div className="flex justify-center gap-4 mb-8">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image src="/newAssets/playstore.svg" alt="Google Play" width={160} height={48} className="w-[130px] sm:w-[160px] h-auto" />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                  <Image src="/newAssets/appstore.svg" alt="App Store" width={160} height={48} className="w-[130px] sm:w-[160px] h-auto" />
              </Link>
          </div>
        </div>

        {/* Hero Image */}
        <Image
            src="/newAssets/about-hero21.png"
            alt="About Hero"
            width={1400}
            height={800}
            className="mt-auto object-contain scale-[1.5] origin-bottom mb-12 md:mb-0 md:scale-100 ml-10"
            priority
        />
      </section>

      {/* Mission Section */}
      <section className="w-full px-4 md:px-8 py-16 md:py-24 max-w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-8">
            <h3 className="text-[32px] md:text-[48px] leading-tight font-light text-black">
              <span 
                style={{
                  background: "linear-gradient(90deg, #30261C 5.29%, #D29E0D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: 400
                }}
              >
                AMA Legal Solutions
              </span>
              <br />
              is your legal safety partner
            </h3>
            
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full text-[#30261C] text-base sm:text-lg font-medium transition-all hover:opacity-90"
              style={{
                background: "#D29E0D",
              }}
            >
              Request a Consultation
            </Link>
          </div>

          {/* Right Column */}
          <div className="text-[#30261C] text-lg md:text-xl leading-relaxed space-y-6 font-normal opacity-80">

            <h3> <span className="font-bold opacity-100">Our mission:</span> </h3>
            <p>
             To provide trusted, results-focused legal solutions that protect your financial and business interests ethically, clearly, and efficiently.


              With a 35-year legacy, AMA Legal Solutions is a top-rated law firm in Gurugram, India, specializing in banking & finance, corporate law, arbitration, real estate, and entertainment law. We support individuals, businesses, and startups with practical legal strategies built for real-world challenges.


              Our work speaks for itself 1,000+ clients served, 650+ cases resolved, and 300+ successful legal closures, backed by deep expertise in loan settlements, debt restructuring, financial litigation, contracts, compliance, and dispute resolution.


              What defines us is our personalized approach. Every case receives focused attention and tailored strategy because here, you’re not just a case, you’re a priority.


              As members of leading legal and trade institutions, we combine local authority with global perspective to deliver clear advice and strong representation when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="w-full px-4 md:px-8 max-w-[95%] mx-auto mb-16 md:mb-24">
         <div className="w-full rounded-[35px] bg-[#EAE6DB] border border-white/40 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] p-6 lg:p-12 flex flex-col items-center gap-6 lg:gap-12">
            <h2 
              className="text-[#30261C] text-center text-[31px] md:text-[47px] font-normal leading-[1.2] lg:leading-[1.2]"
              style={{
                fontFamily: "var(--font-polysans)",
                fontWeight: 400
              }}
            >
              Affiliations That Strengthen Our Practice
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 w-full items-center justify-items-center">
               {/* Existing 4 Logos */}
               <Link href="https://mcia.org.in/" target="_blank" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
                <Image
                  src="/newAssets/aff5.png"
                  alt="MCIA"
                  fill
                   className="object-contain"
                 />
               </Link>
               <Link href="https://www.wipo.int/portal/en/index.html" target="_blank" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
                 <Image
                   src="/newAssets/aff2.png"
                   alt="WIPO"
                   fill
                   className="object-contain"
                 />
               </Link>
               <Link href="https://www.iaccindia.com/" target="_blank" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
                 <Image
                   src="/newAssets/aff3.png"
                   alt="IACC"
                   fill
                   className="object-contain"
                 />
               </Link>
               <Link href="https://iamch.org.in/" target="_blank" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
                  <Image
                   src="/newAssets/aff4.png"
                   alt="IAMCH"
                   fill
                   className="object-contain"
                 />
               </Link>

               {/* New 4 Logos */}
               <Link href="#" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[400px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
                 <Image
                   src="/newAssets/affiliation-logo-2.png"
                   alt="Affiliation 2"
                   fill
                   className="object-contain"
                   unoptimized
                 />
               </Link>
               <Link href="#" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[400px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
                 <Image
                   src="/newAssets/affiliation-logo-3.png"
                   alt="Affiliation 3"
                   fill
                   className="object-contain"
                   unoptimized
                 />
               </Link>
               <Link href="#" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[400px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
                 <Image
                   src="/newAssets/affiliation-logo-4.png"
                   alt="Affiliation 4"
                   fill
                   className="object-contain"
                   unoptimized
                 />
               </Link>
               <Link href="#" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[400px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
                 <Image
                   src="/newAssets/affiliation-logo-5.png"
                   alt="Affiliation 5"
                   fill
                   className="object-contain"
                   unoptimized
                 />
               </Link>
            </div>
         </div>
      </section>

      {/* Legacy Section */}
      <section className="w-full py-16 md:py-24 flex flex-col items-center bg-[#EAE6DB] overflow-hidden">
        {/* Main Heading */}
       
       
        {/* Content Section with Background */}
        <div className="w-full relative px-4 md:px-0">
          {/* Background Image Container */}
          <div className="relative w-full min-h-[700px] md:min-h-[560px] flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "url('/newAssets/bg1.jpg')",
                backgroundRepeat: "repeat",
              }}
            />

            {/* White Border Container & Content */}
            <div className="relative w-full md:w-[95%] max-w-[95vw] md:max-w-none h-auto md:h-[480px] border-[8px] md:border-[16px] border-white/60 z-10 flex flex-col md:flex-row overflow-hidden md:overflow-visible">
                  
              {/* Desktop Middle Divider */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[16px] h-full bg-white/60 z-10" />

              {/* Left Content (Image) - Swapped Position */}
              <div className="hidden md:block absolute bottom-0 left-0 h-[530px] z-[25] pointer-events-none w-[50%]">
                 <div className="relative w-full h-full"> 
                    <Image
                      src="/newAssets/bhiya.png"
                      alt="Anuj Anand Malik"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain object-bottom"
                      priority
                    />
                 </div>
              </div>

               {/* Mobile Image - Absolute Bottom Right (Matching Legacy.tsx) */}
               <div className="md:hidden absolute bottom-0 -right-10 z-10 pointer-events-none w-[70%] h-[370px] translate-y-[20px]">
                  <Image
                    src="/newAssets/bhiya.png"
                    alt="Anuj Anand Malik"
                    fill
                    className="object-cover object-bottom overflow-visible"
                    priority
                  />
               </div>

              {/* Right Content (Text) - Swapped Position */}
              <div className="flex-1 p-5 md:p-10 flex flex-col justify-start md:justify-center items-start md:items-end z-20 max-w-full md:max-w-2xl text-left md:text-right h-full md:ml-auto">
                {/* Top Section: Header Info */}
                <div className="w-full flex flex-col items-start md:items-end gap-1 md:gap-4 mb-3 md:mb-2 text-left md:text-right z-30 relative">
                   <div className="flex flex-col md:flex-row md:items-baseline justify-end gap-1">
                      <h3 className="text-[#30261C] text-[24px] md:text-[32px] font-normal leading-tight">
                      Anuj Anand Malik
                      </h3>
                   </div>

                  <div className="space-y-1 w-full flex flex-col items-start md:items-end">
                      <p className="text-[#D29E0D] text-[16px] md:text-xl font-medium w-full text-left md:text-right">
                          Advocate, Legal Consultant, Banking Lawyer, and Loan Settlement Expert
                      </p>
                  </div>
                </div>

                {/* Bottom Section: Description */}
                <div className="w-full flex-1 relative min-h-0 flex flex-col items-start md:items-end">
                  <div className="w-[90%] md:w-full text-[#30261C] text-[16px] md:text-md opacity-80 z-20 h-full overflow-y-auto md:overflow-visible pb-[340px] md:pb-2 content-start pr-1 text-left md:text-right">
                      <div className="space-y-4">
                        <p>
                          I am Anuj Anand Malik, an advocate, legal consultant, banking lawyer,
                          and loan settlement expert, committed to helping individuals,
                          startups, and businesses overcome financial challenges and achieve
                          legal security. With in-depth expertise in loan settlements, corporate
                          compliance, business contracts, dispute resolution, and financial
                          litigation, I provide strategic legal counsel and expert
                          representation to safeguard clients’ interests through risk
                          mitigation, regulatory compliance, and financial stability.
                        </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Through Time Section */}
      <section className="w-full px-4 md:px-8 py-12 md:py-16 flex flex-col items-center gap-8 md:gap-14">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6 max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-normal text-[#30261C] leading-tight">
            Our Journey Through Time
          </h2>
          <p
            className="text-lg md:text-2xl font-normal leading-relaxed tracking-wide"
            style={{ color: "rgba(48, 38, 28, 0.85)" }}
          >
            Explore the chapters of our story from where we began to where we&apos;re headed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1200px]">
          {/* Our History Card */}
          <Link href="/ourhistory" className="group">
            <div className="relative w-full h-[400px] md:h-[480px] rounded-[24px] bg-white/15 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] overflow-hidden">
              {/* Image */}
              <div className="absolute top-[-140px] left-0 w-full h-[470px]">
                <Image
                  src="/newAssets/dadaji1.png"
                  alt="Our History"
                  width={400}
                  height={550}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Blur Transition */}
              <div className="absolute left-0 top-[160px] w-full h-[80px] bg-gradient-to-b from-transparent to-[#30261C] z-10" />

              {/* Dark Overlay */}
              <div className="absolute left-[-20px] top-[239px] w-[120%] h-[250px] bg-[#30261C] z-10" />

              {/* Content */}
              <div className="absolute left-6 top-[240px] flex flex-col gap-4 z-20 pr-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#EAE6DB] leading-tight">
                  Our History (1985–2016)
                </h3>
                <p className="text-sm md:text-base font-light text-[#EAE6DB] leading-snug max-w-[300px]">
                  From 1985 to 2016, AMA Legal Solutions built its foundation on trust, discipline, and legal integrity. What began as a humble practice evolved into a respected name through landmark cases, consistent results.
                </p>
                <span className="text-base font-semibold text-[#D29E0D] leading-6 group-hover:underline">
                  Learn more →
                </span>
              </div>
            </div>
          </Link>

          {/* Our Present Card */}
          <Link href="/present" className="group">
            <div className="relative w-full h-[400px] md:h-[480px] rounded-[24px] bg-white/15 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] overflow-hidden">
              {/* Image */}
              <div className="absolute top-0 left-0 w-full h-[300px]">
                <Image
                  src="/newAssets/office.png"
                  alt="Our Present"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

               {/* Gradient Blur Transition */}
               <div className="absolute left-0 top-[160px] w-full h-[80px] bg-gradient-to-b from-transparent to-[#30261C] z-10" />

              {/* Dark Overlay */}
              <div className="absolute left-[-20px] top-[239px] w-[120%] h-[250px] bg-[#30261C] z-10" />

              {/* Content */}
              <div className="absolute left-6 top-[240px] flex flex-col gap-4 z-20 pr-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#EAE6DB] leading-tight">
                  Our Present
                </h3>
                <p className="text-sm md:text-base font-light text-[#EAE6DB] leading-snug max-w-[300px]">
                  Today, AMA Legal Solutions stands as a modern, results-driven law firm. We combine deep legal expertise with technology, strategic thinking, and a client-first approach to deliver practical solutions across complex legal matters.
                </p>
                <span className="text-base font-semibold text-[#D29E0D] leading-6 group-hover:underline">
                  Learn more →
                </span>
              </div>
            </div>
          </Link>

          {/* Our Vision Card */}
          <Link href="/ourvision" className="group">
            <div className="relative w-full h-[400px] md:h-[480px] rounded-[24px] bg-white/15 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] overflow-hidden">
              {/* Video */}
              <div className="absolute top-0 left-0 w-full h-[300px]">
                <video
                  src="/visionvid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

               {/* Gradient Blur Transition */}
               <div className="absolute left-0 top-[160px] w-full h-[80px] bg-gradient-to-b from-transparent to-[#30261C] z-10" />

              {/* Dark Overlay */}
              <div className="absolute left-[-20px] top-[239px] w-[120%] h-[250px] bg-[#30261C] z-10" />

              {/* Content */}
              <div className="absolute left-6 top-[240px] flex flex-col gap-4 z-20 pr-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#EAE6DB] leading-tight">
                  Our Vision
                </h3>
                <p className="text-sm md:text-base font-light text-[#EAE6DB] leading-snug max-w-[300px]">
                  Looking ahead, our vision is to redefine legal excellence through innovation, ethical advocacy, and continuous growth. We aim to set higher standards for legal services while expanding our impact across India and beyond.
                </p>
                <span className="text-base font-semibold text-[#D29E0D] leading-6 group-hover:underline">
                  Learn more →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Our Attorneys Section */}
      <OurAttorneys attorneys={attorneys} />
      
      {/* CTA Section */}
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
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center gap-[40px] px-4 md:px-6">
        {/* Logo Icon */}
        <div 
          className="relative z-20 w-[72px] h-[72px] md:w-[85px] md:h-[85px] p-[6px] md:p-[7px] flex justify-center items-center rounded-[8px]"
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

        {/* Split Layout Container */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Center Divider (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-[-40px] bottom-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#FFFFFF]/20 to-transparent" />

          {/* Left Column: Legal Help */}
          <div className="flex flex-col items-center gap-[24px] px-4 lg:px-12">
            <div className="flex flex-col items-center gap-[16px]">
              <h2 
                className="text-[#EAE6DB] text-center text-[31px] md:text-[42px] font-normal leading-[1.1] md:leading-[1.2] w-full"
                style={{ fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                Clarity for Your Legal Challenges
              </h2>
              <p 
                className="text-center text-[16px] md:text-[18px] font-light leading-[1.4] md:leading-[1.6] w-full max-w-[400px]"
                style={{ 
                  color: 'rgba(234, 230, 219, 0.65)',
                  letterSpacing: '0.4px',
                  fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif'
                }}
              >
                Strategic, result-driven legal solutions for individuals and businesses across India.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-[16px] md:gap-[24px] flex-nowrap justify-center">
              <div className="relative w-[280px] md:w-[200px] h-[43px] flex-shrink-0">
                <Link
                  href="/contact"
                  className="absolute left-0 top-[4px] w-full h-[35px] md:h-[39px] flex items-center justify-center gap-[8px] rounded-[47px] border-2 border-[#D29E0D] bg-[#30261C] px-[20px] hover:bg-[#3a2f20] transition-colors z-20 relative"
                >
                  <span 
                    className="text-[#EAE6DB] text-[14px] md:text-[16px] font-light"
                    style={{ fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif' }}
                  >
                    Get Legal Help
                  </span>
                </Link>
                <svg 
                  className="absolute left-[20px] md:left-[20px] top-0 pointer-events-none z-10 w-[240px] md:w-[160px]"
                  width="240" height="10" viewBox="0 0 280 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_1740_3634)">
                    <ellipse cx="140" cy="7.5" rx="130" ry="3.5" fill="url(#paint0_linear_1740_3634)"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_1740_3634" x="0" y="0" width="280" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1740_3634"/>
                    </filter>
                    <linearGradient id="paint0_linear_1740_3634" x1="10" y1="7.5" x2="270" y2="7.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D29E0D"/>
                      <stop offset="0.5" stopColor="white"/>
                      <stop offset="1" stopColor="#D29E0D"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <Link
                href="/services"
                className="text-[#EAE6DB] text-[15px] md:text-[17px] font-normal hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{ fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                Explore our practice areas →
              </Link>
            </div>
          </div>

          {/* Right Column: Careers */}
          <div className="flex flex-col items-center gap-[24px] px-4 lg:px-12 border-t border-white/10 pt-12 lg:border-t-0 lg:pt-0">
            <div className="flex flex-col items-center gap-[16px]">
              <h2 
                className="text-[#EAE6DB] text-center text-[31px] md:text-[42px] font-normal leading-[1.1] md:leading-[1.2] w-full"
                style={{ fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                Careers at AMA Legal Solutions
              </h2>
              <p 
                className="text-center text-[16px] md:text-[18px] font-light leading-[1.4] md:leading-[1.6] w-full max-w-[400px]"
                style={{ 
                  color: 'rgba(234, 230, 219, 0.65)',
                  letterSpacing: '0.4px',
                  fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif'
                }}
              >
                Grow with a firm that values ethics, excellence, and learning.
              </p>
            </div>

            <div className="relative w-[280px] md:w-[320px] h-[43px] flex-shrink-0">
              <Link
                href="mailto:career@amalegalsolutions.com"
                className="absolute left-0 top-[4px] w-full h-[35px] md:h-[39px] flex items-center justify-center gap-[8px] rounded-[47px] border-2 border-[#D29E0D] bg-[#30261C] px-[20px] hover:bg-[#3a2f20] transition-colors z-20 relative"
              >
                <span 
                  className="text-[#EAE6DB] text-[14px] md:text-[16px] font-light"
                  style={{ fontFamily: 'var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif' }}
                >
                  career@amalegalsolutions.com
                </span>
              </Link>
              <svg 
                className="absolute left-[20px] md:left-[40px] top-0 pointer-events-none z-10 w-[240px]"
                width="240" height="10" viewBox="0 0 280 15" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_career)">
                  <ellipse cx="140" cy="7.5" rx="130" ry="3.5" fill="url(#paint0_linear_career)"/>
                </g>
                <defs>
                   <filter id="filter0_f_career" x="0" y="0" width="280" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/>
                  </filter>
                  <linearGradient id="paint0_linear_career" x1="10" y1="7.5" x2="270" y2="7.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D29E0D"/>
                    <stop offset="0.5" stopColor="white"/>
                    <stop offset="1" stopColor="#D29E0D"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default AboutUsRevamp;

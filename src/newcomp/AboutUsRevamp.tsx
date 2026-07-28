"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const OurAttorneys = dynamic(() => import("../components/aboutcomps/OurAttorneys"));
import { Attorney } from "@/lib/attorneys";
import Legacy2 from "./Legacy2";
const AboutUsRevamp = ({ attorneys = [] }: { attorneys?: Attorney[] }) => {
  return (
    <main className="w-full bg-[#EAE6DB]">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen md:h-[calc(140vh)] flex flex-col justify-between items-center overflow-hidden">
        {/* Content Container - Flex grow to take available space but keep items centered/spaced */}
        <div className="flex-grow flex flex-col justify-center items-center px-4 w-full pt-32 md:pt-50 mb-24 md:mb-0">

          {/* Headings Group */}
          <div className="text-center mb-[30px] max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-[26px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-normal text-[#30261C] leading-[34px] sm:leading-[35px] md:leading-[50px] lg:leading-[59px] xl:leading-[68px] mb-6 sm:mb-6 md:mb-8 opacity-100">
              Expert Legal Solutions. Trusted Lawyers.{" "}
              <span style={{ color: "#D29E0D", fontWeight: 400 }}>
                Your Complete Legal Partner.
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            className="text-[17px] sm:text-base md:text-base lg:text-[19px] xl:text-[21px] text-[#30261C] leading-[25px] sm:leading-[24px] md:leading-[27px] lg:leading-[30px] xl:leading-[34px] font-normal mb-7 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto opacity-85 text-center px-6"
          >
            AMA Legal Solutions unites expert counsel, strategic case management, and personalized advice to ensure you never lose track of what matters.
          </p>

          {/* App Store Icons */}
          <div className="flex justify-center gap-[30px] mb-[80px] relative z-20">
            <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image src="/newAssets/appstore.svg" alt="App Store" width={160} height={48} className="w-[130px] sm:w-[160px] h-auto" />
            </Link>
            <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
              <Image src="/newAssets/playstore.svg" alt="Google Play" width={160} height={48} className="w-[130px] sm:w-[160px] h-auto" />
            </Link>
          </div>
        </div>

        <Image
          src="/newAssets/about-hero21.png"
          alt="About Hero"
          width={1400}
          height={800}
          className="-mt-20 md:-mt-40 lg:-mt-60 object-contain scale-[1.2] origin-bottom mb-12 md:mb-0 md:scale-[0.8] ml-10"
          priority
        />
      </section>

      {/* Mission Section */}
      <section className="w-full -mt-15 md:mt-0 px-4 md:px-8 py-12 max-w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-[35px]">
            <h3 className="text-[26px] md:text-[52px] leading-[32px] md:leading-[52px] font-semibold text-black opacity-100">
              <span
                style={{
                  background: "linear-gradient(90deg, #30261C 5.29%, #D29E0D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                AMA Legal Solutions
              </span>
              <br />
              is your legal safety partner
            </h3>

            <Link
              href="/contact"
              className="inline-block px-10 py-4 rounded-full text-[#30261C] text-[15px] font-semibold transition-all hover:opacity-90"
              style={{
                background: "#D29E0D",
              }}
            >
              Request a Consultation
            </Link>

            {/* Relocated Affiliation Logos */}
            <div className="w-full mt-6 flex flex-row flex-wrap justify-center gap-6 -ml-10 md:-ml-20 md:justify-start md:flex-nowrap">
              {/* Logo 2 */}
              <Link href="#" className="relative w-[150px] md:w-[510px] h-[80px] md:h-[135px] hover:opacity-80 transition-opacity">
                <Image
                  src="/newAssets/affiliation-logo-2.png"
                  alt="Affiliation 2"
                  fill
                  className="md:object-contain object-cover object-left md:scale-200 md:origin-left"
                  unoptimized
                />
              </Link>
              {/* Logo 3 */}
              <Link href="#" className="relative w-[150px] md:w-[510px] h-[80px] md:h-[135px] hover:opacity-80 transition-opacity">
                <Image
                  src="/newAssets/affiliation-logo-3.png"
                  alt="Affiliation 3"
                  fill
                  className="md:object-contain object-cover object-left md:scale-200 md:origin-left"
                  unoptimized
                />
              </Link>
              {/* Logo 4 */}
              <Link href="#" className="relative w-[150px] md:w-[510px] h-[80px] md:h-[135px] hover:opacity-80 transition-opacity">
                <Image
                  src="/newAssets/affiliation-logo-4.png"
                  alt="Affiliation 4"
                  fill
                  className="md:object-contain object-cover object-left md:scale-200 md:origin-left"
                  unoptimized
                />
              </Link>
              {/* Logo 5 */}
              <Link href="#" className="relative w-[150px] md:w-[510px] h-[80px] md:h-[135px] hover:opacity-80 transition-opacity">
                <Image
                  src="/newAssets/affiliation-logo-5.png"
                  alt="Affiliation 5"
                  fill
                  className="md:object-contain object-cover object-left md:scale-200 md:origin-left"
                  unoptimized
                />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 text-[#30261C]">
            {/* Mission Statement Card */}
            <div className="relative bg-white/40 p-4 md:p-5 rounded-xl border border-[#D29E0D]/20 shadow-sm backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#D29E0D] to-[#30261C] rounded-l-xl"></div>
              <h3 className="font-semibold text-[17px] md:text-[19px] text-[#231F1B] mb-1.5 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D29E0D]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                Our Mission
              </h3>
              <p className="text-[14px] md:text-[16px] font-medium leading-snug italic text-[#30261C]">
                "To provide trusted, results-focused legal solutions that protect your financial and business interests ethically, clearly, and efficiently."
              </p>
            </div>

            <div className="space-y-4 text-[13px] md:text-[15px] leading-relaxed text-justify font-light opacity-85">
              <p>
                With a <strong className="font-medium text-[#231F1B]">35-year legacy</strong>, AMA Legal Solutions is a top-rated law firm in Gurugram, India, specializing in banking & finance, corporate law, arbitration, real estate, and entertainment law. We support individuals, businesses, and startups with practical legal strategies built for real-world challenges.
              </p>

              <div className="bg-[#30261C] text-[#EAE6DB] p-4 md:p-5 rounded-xl shadow-lg border border-black/10">
                <p className="mb-3 font-normal leading-snug text-[13px] md:text-[14px]">Our work speaks for itself, backed by deep expertise in loan settlements, debt restructuring, financial litigation, contracts, compliance, and dispute resolution:</p>
                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/20">
                  <div>
                    <span className="block text-xl md:text-2xl font-bold text-[#D29E0D]">1,000+</span>
                    <span className="text-[10px] md:text-xs font-light opacity-80 uppercase tracking-wide">Clients</span>
                  </div>
                  <div>
                    <span className="block text-xl md:text-2xl font-bold text-[#D29E0D]">650+</span>
                    <span className="text-[10px] md:text-xs font-light opacity-80 uppercase tracking-wide">Resolved</span>
                  </div>
                  <div>
                    <span className="block text-xl md:text-2xl font-bold text-[#D29E0D]">300+</span>
                    <span className="text-[10px] md:text-xs font-light opacity-80 uppercase tracking-wide">Closures</span>
                  </div>
                </div>
              </div>

              <p>
                What defines us is our personalized approach. Every case receives focused attention and tailored strategy because here, <strong className="font-medium text-[#231F1B]">you're not just a case, you're a priority.</strong>
              </p>

              <div className="flex items-start gap-3 p-3 md:p-4 bg-[#D29E0D]/10 rounded-xl border border-[#D29E0D]/20">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-4 h-4 text-[#D29E0D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <p className="font-medium text-[13px] md:text-[14px] leading-snug mt-0.5">
                  As members of leading legal and trade institutions, we combine local authority with global perspective to deliver clear advice and strong representation when it matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="w-full px-4 md:px-8 max-w-[95%] mx-auto mb-[120px]">
        <div className="w-full rounded-[35px] bg-[#EAE6DB] border border-white/40 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] p-6 lg:p-12 flex flex-col items-center gap-[50px]">
          <h2
            className="text-[#30261C] text-center text-[25px] md:text-[52px] font-semibold leading-[32px] md:leading-[52px]"
            style={{
              fontFamily: "var(--font-polysans)",
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
                sizes="(max-width: 768px) 120px, 200px"
                className="object-contain"
              />
            </Link>
            <Link href="https://www.wipo.int/portal/en/index.html" target="_blank" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
              <Image
                src="/newAssets/aff2.png"
                alt="WIPO"
                fill
                sizes="(max-width: 768px) 120px, 200px"
                className="object-contain"
              />
            </Link>
            <Link href="https://www.iaccindia.com/" target="_blank" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
              <Image
                src="/newAssets/aff3.png"
                alt="IACC"
                fill
                sizes="(max-width: 768px) 120px, 200px"
                className="object-contain"
              />
            </Link>
            <Link href="https://iamch.org.in/" target="_blank" className="relative w-full max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-[60px] lg:h-[100px] hover:opacity-80 transition-opacity">
              <Image
                src="/newAssets/aff4.png"
                alt="IAMCH"
                fill
                sizes="(max-width: 768px) 120px, 200px"
                className="object-contain"
              />
            </Link>


          </div>
        </div>


      </section>

      {/* Legacy Section */}
      <Legacy2 />
      {/* Our Journey Through Time Section */}
      <section className="w-full px-4 md:px-8 py-8 flex flex-col items-center gap-[50px] md:gap-[80px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[35px] max-w-4xl text-center">
          <h2 className="text-[26px] md:text-[52px] font-semibold text-[#30261C] leading-[32px] md:leading-[52px] opacity-100">
            Our Journey Through Time
          </h2>
          <p
            className="text-[13px] md:text-[20px] font-normal leading-[19px] md:leading-[23px] opacity-85"
            style={{ color: "rgba(48, 38, 28, 0.85)" }}
          >
            Explore the chapters of our story from where we began to where we&apos;re headed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1200px]">
          {/* Our History Card */}
          <Link href="/ourhistory" className="group">
            <div className="relative w-full h-[460px] md:h-[480px] rounded-[24px] bg-white/15 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] overflow-hidden">
              {/* Image */}
              <div className="absolute top-[-120px] left-0 w-full h-[470px]">
                <Image
                  src="/newAssets/dadaji12.png"
                  alt="Our History"
                  width={400}
                  height={550}
                  className="w-full h-full object-cover"
                  style={{ transform: "scale(0.7)", transformOrigin: "bottom" }}
                  priority
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
            <div className="relative w-full h-[460px] md:h-[480px] rounded-[24px] bg-white/15 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] overflow-hidden">
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
            <div className="relative w-full h-[460px] md:h-[480px] rounded-[24px] bg-white/15 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] overflow-hidden">
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
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="135.45" result="effect1_foregroundBlur" />
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
                      <ellipse cx="140" cy="7.5" rx="130" ry="3.5" fill="url(#paint0_linear_1740_3634)" />
                    </g>
                    <defs>
                      <filter id="filter0_f_1740_3634" x="0" y="0" width="280" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1740_3634" />
                      </filter>
                      <linearGradient id="paint0_linear_1740_3634" x1="10" y1="7.5" x2="270" y2="7.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D29E0D" />
                        <stop offset="0.5" stopColor="white" />
                        <stop offset="1" stopColor="#D29E0D" />
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
                    <ellipse cx="140" cy="7.5" rx="130" ry="3.5" fill="url(#paint0_linear_career)" />
                  </g>
                  <defs>
                    <filter id="filter0_f_career" x="0" y="0" width="280" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
                    </filter>
                    <linearGradient id="paint0_linear_career" x1="10" y1="7.5" x2="270" y2="7.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D29E0D" />
                      <stop offset="0.5" stopColor="white" />
                      <stop offset="1" stopColor="#D29E0D" />
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

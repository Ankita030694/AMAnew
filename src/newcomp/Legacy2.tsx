"use client";

import Image from "next/image";

const Legacy2 = () => {
  return (
    <section 
      className="w-full bg-[#FAF9F5] py-20 px-4 md:px-8 xl:px-16 relative overflow-hidden"
      style={{ fontFamily: "var(--font-polysans), sans-serif" }}
    >
      {/* Background Waves on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-[420px] pointer-events-none opacity-15 z-0 select-none">
        <svg className="w-full h-full text-[#D29E0D]" viewBox="0 0 300 200" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M300,-40 C220,20 240,120 300,200" />
          <path d="M300,-20 C200,40 220,140 300,200" />
          <path d="M300,0 C180,60 200,160 300,200" />
          <path d="M300,20 C160,80 180,180 300,200" />
          <path d="M300,40 C140,100 160,200 300,200" />
          <path d="M300,60 C120,120 140,220 300,200" />
          <path d="M300,80 C100,140 120,240 300,200" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP & TABLET VIEW (lg:block, hidden on mobile/small screens)          */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-[#231F1B] leading-tight mb-4 font-semibold">
            Legacy Extended
          </h2>
          <p className="text-[#554E45] text-base md:text-lg">
            A journey of vision, integrity, and legal excellence carried forward across generations.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-16">
          {/* Card 1: Late Adv. R.C. Malik */}
          <div className="bg-[#231F1B] rounded-2xl overflow-hidden shadow-lg border border-white/5 flex flex-col md:flex-row hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 min-h-[440px]">
            {/* Image Container */}
            <div className="w-full md:w-[45%] h-[280px] md:h-auto relative flex-shrink-0 bg-[radial-gradient(circle_at_center,_#6e6e6e_0%,_#3a3a3a_100%)] overflow-hidden">
              <Image
                src="/newAssets/dadaji12.png"
                alt="Late Adv. R.C. Malik"
                fill
                className="object-contain object-bottom transition-all duration-300 [--dadaji-scale:0.8] lg:[--dadaji-scale:1]"
                style={{ transform: "scale(var(--dadaji-scale))", transformOrigin: "center" }}
                sizes="(max-width: 768px) 100vw, 25vw"
                priority
              />
              {/* Logo in top-left */}
              <div className="absolute top-4 left-4 w-10 h-10 z-20 pointer-events-none opacity-80">
                <Image
                  src="/newAssets/logo/ama_box.svg"
                  alt="AMA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Gold Pillar Icon */}
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#D29E0D] to-[#996F05] rounded-xl flex items-center justify-center shadow-lg border border-[#D29E0D]/40 z-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
                  <path d="M6 6c-1 0-2-.8-2-1.8S4.8 2.4 6 2.4s2 .8 2 1.8V6h8V4.2c0-1 .8-1.8 2-1.8s2 .8 2 1.8S19 6 18 6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 8h14M8 8v10M12 8v10M16 8v10M6 18h12M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-[55%] p-8 flex flex-col justify-between text-justify">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#D29E0D] block mb-1">
                  THE FOUNDATION
                </span>
                <div className="w-8 h-[2px] bg-[#D29E0D] mb-4"></div>
                <h3 className="text-2xl md:text-3xl text-white font-semibold mb-2">
                  Late Adv. R.C. Malik
                </h3>
                <div className="text-sm text-[#D29E0D] font-medium space-y-1 mb-4">
                  <p>Ex-Comptroller and Auditor General of India</p>
                  <p className="text-gray-400">Director General of Audit (Central-Receipt)</p>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  R.C. Malik started his professional journey as a gazetted officer at DGACR, progressing through different roles within the Income Tax Department before taking on administrative duties at the Office of the Comptroller and Auditor General (CAG) of India. After retiring from the CAG office, R.C. Malik transitioned into a legal career as an advocate specializing in taxation, leveraging the extensive experience gained during his tenure as an officer.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Anuj Anand Malik */}
          <div className="bg-[#FCFAF7] rounded-2xl overflow-hidden shadow-lg border border-[#D29E0D]/20 flex flex-col md:flex-row hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 min-h-[440px]">
            {/* Image Container */}
            <div className="w-full md:w-[45%] h-[280px] md:h-auto relative flex-shrink-0 bg-[radial-gradient(circle_at_center,_#6e6e6e_0%,_#3a3a3a_100%)] overflow-hidden">
              <Image
                src="/newAssets/bhiya.png"
                alt="Anuj Anand Malik"
                fill
                className="object-contain object-bottom transition-all duration-300"
                style={{ transform: "scale(1.7) translateY(-65px)", transformOrigin: "center" }}
                sizes="(max-width: 768px) 100vw, 25vw"
                priority
              />
              {/* Logo in top-left */}
              <div className="absolute top-4 left-4 w-10 h-10 z-20 pointer-events-none opacity-80">
                <Image
                  src="/newAssets/logo/ama_box.svg"
                  alt="AMA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Gold Scales Icon */}
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#D29E0D] to-[#996F05] rounded-xl flex items-center justify-center shadow-lg border border-[#D29E0D]/40 z-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
                  <path d="M12 3v17M8 20h8" strokeLinecap="round" />
                  <path d="M6 7h12" strokeLinecap="round" />
                  <path d="M6 7l-3 7h6l-3-7z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 14c0 1.5 1.5 2 3 2s3-.5 3-2" strokeLinecap="round" />
                  <path d="M18 7l-3 7h6l-3-7z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 14c0 1.5 1.5 2 3 2s3-.5 3-2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-[55%] p-8 flex flex-col justify-between text-justify">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#997309] block mb-1">
                  THE VISION
                </span>
                <div className="w-8 h-[2px] bg-[#997309] mb-4"></div>
                <h3 className="text-2xl md:text-3xl text-[#231F1B] font-semibold mb-2">
                  Anuj Anand Malik
                </h3>
                <div className="text-sm text-[#997309] font-medium space-y-1 mb-4">
                  <p>Founder, AMA Legal Solutions</p>
                  <p className="text-[#554E45]">Advocate & Legal Strategist</p>
                </div>
                <p className="text-sm text-[#554E45] leading-relaxed font-light">
                  Anuj Anand Malik works at the intersection of law, finance, and business strategy, specializing in banking disputes and debt resolution. Driven by the vision to make quality legal assistance accessible across India, he recently launched the country's first pro-bono law firm-backed legal assistance app. His mission is to provide fast, reliable legal guidance and awareness to everyone when they need it most.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Badges */}
        <div className="w-full border-t border-b border-[#D29E0D]/10 py-6 mt-4">
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-stretch gap-y-6 gap-x-4">
            {/* Badge 1 */}
            <div className="flex-1 flex items-center gap-4 px-4 lg:border-r border-[#D29E0D]/10 min-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-[#231F1B] border border-[#D29E0D]/30 flex items-center justify-center text-[#D29E0D] flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-[#231F1B] font-semibold text-sm md:text-base leading-tight mb-1">Built on Integrity</h4>
                <p className="text-[#554E45] text-xs md:text-sm leading-snug">Decades of unwavering ethical standards.</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex-1 flex items-center gap-4 px-4 lg:border-r border-[#D29E0D]/10 min-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-[#231F1B] border border-[#D29E0D]/30 flex items-center justify-center text-[#D29E0D] flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-[#231F1B] font-semibold text-sm md:text-base leading-tight mb-1">Driven by Excellence</h4>
                <p className="text-[#554E45] text-xs md:text-sm leading-snug">A commitment to delivering exceptional legal outcomes.</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex-1 flex items-center gap-4 px-4 lg:border-r border-[#D29E0D]/10 min-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-[#231F1B] border border-[#D29E0D]/30 flex items-center justify-center text-[#D29E0D] flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-[#231F1B] font-semibold text-sm md:text-base leading-tight mb-1">Generations of Trust</h4>
                <p className="text-[#554E45] text-xs md:text-sm leading-snug">A legacy of relationships built on trust and results.</p>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex-1 flex items-center gap-4 px-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-[#231F1B] border border-[#D29E0D]/30 flex items-center justify-center text-[#D29E0D] flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-[#231F1B] font-semibold text-sm md:text-base leading-tight mb-1">Empowering the Future</h4>
                <p className="text-[#554E45] text-xs md:text-sm leading-snug">Innovating legal solutions for a stronger tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW (block lg:hidden, active on mobile and tablet screens)         */}
      {/* ========================================================================= */}
      <div className="block lg:hidden max-w-xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl text-[#231F1B] leading-tight mb-3 font-semibold">
            Legacy Extended
          </h2>
          <p className="text-[#554E45] text-sm leading-relaxed">
            A journey of vision, integrity, and legal excellence carried forward across generations.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-6 w-full mb-10">
          {/* Card 1: Late Adv. R.C. Malik */}
          <div className="bg-[#231F1B] rounded-2xl overflow-hidden shadow-lg border border-white/5 flex flex-col">
            {/* Image Container */}
            <div className="w-full h-[240px] relative overflow-hidden bg-[radial-gradient(circle_at_center,_#6e6e6e_0%,_#3a3a3a_100%)]">
              <Image
                src="/newAssets/dadaji12.png"
                alt="Late Adv. R.C. Malik"
                fill
                className="object-contain object-bottom transition-all duration-300"
                style={{ transform: "scale(1.2) translateY(-5px)", transformOrigin: "center" }}
                sizes="(max-width: 768px) 60vw, 30vw"
                priority
              />
              {/* Logo in top-left */}
              <div className="absolute top-3 left-3 w-8 h-8 z-20 pointer-events-none opacity-80">
                <Image
                  src="/newAssets/logo/ama_box.svg"
                  alt="AMA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Gold Pillar Icon */}
              <div className="absolute bottom-3 left-3 w-10 h-10 bg-gradient-to-br from-[#D29E0D] to-[#996F05] rounded-lg flex items-center justify-center shadow-lg border border-[#D29E0D]/40 z-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
                  <path d="M6 6c-1 0-2-.8-2-1.8S4.8 2.4 6 2.4s2 .8 2 1.8V6h8V4.2c0-1 .8-1.8 2-1.8s2 .8 2 1.8S19 6 18 6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 8h14M8 8v10M12 8v10M16 8v10M6 18h12M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Text Container */}
            <div className="p-6 text-justify flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#D29E0D] block mb-1">
                  THE FOUNDATION
                </span>
                <div className="w-8 h-[2px] bg-[#D29E0D] mb-3"></div>
                <h3 className="text-xl text-white font-semibold mb-2">
                  Late Adv. R.C. Malik
                </h3>
                <div className="text-xs text-[#D29E0D] font-medium space-y-0.5 mb-3">
                  <p>Ex-Comptroller and Auditor General of India</p>
                  <p className="text-gray-400">Director General of Audit (Central-Receipt)</p>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  R.C. Malik started his professional journey as a gazetted officer at DGACR, progressing through different roles within the Income Tax Department before taking on administrative duties at the Office of the Comptroller and Auditor General (CAG) of India. After retiring from the CAG office, R.C. Malik transitioned into a legal career as an advocate specializing in taxation, leveraging the extensive experience gained during his tenure as an officer.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Anuj Anand Malik */}
          <div className="bg-[#FCFAF7] rounded-2xl overflow-hidden shadow-lg border border-[#D29E0D]/20 flex flex-col">
            {/* Image Container */}
            <div className="w-full h-[240px] relative overflow-hidden bg-[radial-gradient(circle_at_center,_#6e6e6e_0%,_#3a3a3a_100%)]">
              <Image
                src="/newAssets/bhiya.png"
                alt="Anuj Anand Malik"
                fill
                className="object-contain object-bottom"
                style={{ transform: "scale(1.25) translateY(-5px)", transformOrigin: "center" }}
                sizes="(max-width: 768px) 60vw, 30vw"
                priority
              />
              {/* Logo in top-left */}
              <div className="absolute top-3 left-3 w-8 h-8 z-20 pointer-events-none opacity-80">
                <Image
                  src="/newAssets/logo/ama_box.svg"
                  alt="AMA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Gold Scales Icon */}
              <div className="absolute bottom-3 left-3 w-10 h-10 bg-gradient-to-br from-[#D29E0D] to-[#996F05] rounded-xl flex items-center justify-center shadow-lg border border-[#D29E0D]/40 z-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white">
                  <path d="M12 3v17M8 20h8" strokeLinecap="round" />
                  <path d="M6 7h12" strokeLinecap="round" />
                  <path d="M6 7l-3 7h6l-3-7z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 14c0 1.5 1.5 2 3 2s3-.5 3-2" strokeLinecap="round" />
                  <path d="M18 7l-3 7h6l-3-7z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 14c0 1.5 1.5 2 3 2s3-.5 3-2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Text Container */}
            <div className="p-6 text-justify flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#997309] block mb-1">
                  THE VISION
                </span>
                <div className="w-8 h-[2px] bg-[#997309] mb-3"></div>
                <h3 className="text-xl text-[#231F1B] font-semibold mb-2">
                  Anuj Anand Malik
                </h3>
                <div className="text-xs text-[#997309] font-medium space-y-0.5 mb-3">
                  <p>Founder, AMA Legal Solutions</p>
                  <p className="text-[#554E45]">Advocate & Legal Strategist</p>
                </div>
                <p className="text-xs text-[#554E45] leading-relaxed font-light">
                  Anuj Anand Malik works at the intersection of law, finance, and business strategy, specializing in banking disputes and debt resolution. Driven by the vision to make quality legal assistance accessible across India, he recently launched the country's first pro-bono law firm-backed legal assistance app. His mission is to provide fast, reliable legal guidance and awareness to everyone when they need it most.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Badges */}
        <div className="w-full border-t border-b border-[#D29E0D]/10 py-6 mt-6">
          <div className="flex flex-col gap-6">
            {/* Badge 1 */}
            <div className="flex items-center gap-4 px-2">
              <div className="w-10 h-10 rounded-full bg-[#231F1B] border border-[#D29E0D]/30 flex items-center justify-center text-[#D29E0D] flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-[#231F1B] font-semibold text-sm leading-tight mb-0.5">Built on Integrity</h4>
                <p className="text-[#554E45] text-xs leading-snug">Decades of unwavering ethical standards.</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-4 px-2">
              <div className="w-10 h-10 rounded-full bg-[#231F1B] border border-[#D29E0D]/30 flex items-center justify-center text-[#D29E0D] flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-[#231F1B] font-semibold text-sm leading-tight mb-0.5">Driven by Excellence</h4>
                <p className="text-[#554E45] text-xs leading-snug">A commitment to delivering exceptional legal outcomes.</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-4 px-2">
              <div className="w-10 h-10 rounded-full bg-[#231F1B] border border-[#D29E0D]/30 flex items-center justify-center text-[#D29E0D] flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-[#231F1B] font-semibold text-sm leading-tight mb-0.5">Generations of Trust</h4>
                <p className="text-[#554E45] text-xs leading-snug">A legacy of relationships built on trust and results.</p>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center gap-4 px-2">
              <div className="w-10 h-10 rounded-full bg-[#231F1B] border border-[#D29E0D]/30 flex items-center justify-center text-[#D29E0D] flex-shrink-0 shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-[#231F1B] font-semibold text-sm leading-tight mb-0.5">Empowering the Future</h4>
                <p className="text-[#554E45] text-xs leading-snug">Innovating legal solutions for a stronger tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy2;

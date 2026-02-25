import Navbar from "@/newcomp/Navbar";
import Footer from "@/newcomp/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { baseTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Virtual Inhouse Councel | AMA Legal Solutions",
  description: "Get comprehensive legal support with our Virtual Inhouse Councel. We offer drafting, legal notices, trademark registration, startup registration and dispute resolution.",
};

export default function VirtualInhouseCouncelPage() {
  const stats = [
    { label: "Drafting", value: "Expert" },
    { label: "Support", value: "24/7" },
    { label: "Application", value: "Access" },
    { label: "Legal", value: "Notices" },
  ];

  return (
    <div className="bg-[#EAE6DB] min-h-screen font-[family-name:var(--font-polysans)]">
      <Navbar />

      <main className="pb-20 overflow-x-hidden relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-center bg-[#EAE6DB] overflow-hidden">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#30261C]">
            Your Dedicated <br className="md:hidden" />
            <span className="text-[#D2A02A]">Virtual Inhouse Councel</span>
          </h1>
          <p className="text-lg md:text-xl text-[#30261C]/80 mt-4 max-w-2xl mx-auto px-4 leading-relaxed">
            Comprehensive legal solutions tailored for you. Enjoy seamless application access and round-the-clock support without the overhead of an in-house team.
          </p>

          {/* The Dark Intersecting Strip */}
          <div className="relative w-full mt-30 md:mt-32 z-0">
             <div 
               className="w-[120%] -ml-[10%] h-[110px] md:h-[140px] transform rotate-[25deg] md:rotate-[10deg] flex flex-col md:flex-row items-stretch border-y border-[#D2A02A]/20"
               style={{
                 background: "#30261C",
                 boxShadow: "3px 4px 30.5px 0 rgba(0, 0, 0, 0.05)",
                 backdropFilter: "blur(2px)",
               }}
             >
                <div className="flex flex-row w-full h-full items-center md:items-stretch md:pr-[5%]">
                   {/* Column 1: Testimonial Slider (Mobile: Full width, Desktop: 80%) */}
                   <div className="w-[65%] md:w-[80%] h-full flex items-center overflow-hidden relative border-r border-[#D2A02A]/10">
                      <div className="animate-marquee whitespace-nowrap flex gap-12 px-2 md:px-8">
                         {[...baseTestimonials, ...baseTestimonials].map((t, i) => (
                           <div key={i} className="inline-flex items-center gap-4 md:gap-6 min-w-[250px] md:min-w-[500px]">
                              {/* Left: Avatar & Info */}
                              <div className="flex items-center gap-2 md:gap-3 shrink-0">
                                 <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-white rounded-full flex items-center justify-center p-1">
                                    <Image src="/newAssets/google-g.svg" alt="G" width={24} height={24} unoptimized />
                                 </div>
                                 <div className="text-left">
                                    <div className="text-[#D2A02A] font-bold text-xs md:text-sm">{t.author}</div>
                                    <Image src="/newAssets/stars.png" alt="Stars" width={50} height={8} className="mt-1 block md:hidden" />
                                     <Image src="/newAssets/stars.png" alt="Stars" width={60} height={10} className="mt-1 hidden md:block" />
                                 </div>
                              </div>
                              
                              {/* Center: Divider */}
                              <div className="w-[1px] h-[30px] md:h-[40px] bg-[#D2A02A]/30"></div>
                              
                              {/* Right: Text */}
                              <div className="text-white/80 text-xs md:text-sm whitespace-normal line-clamp-3 md:line-clamp-2 max-w-[150px] md:max-w-[300px] text-left italic">
                                "{t.text}"
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Column 2: Static Badge (Mobile: 35%, Desktop: 20%) */}
                   <div className="w-[35%] md:w-[20%] h-full flex flex-col items-center justify-center bg-[#251D16] z-10 p-2 md:p-4 shadow-[-10px_0_20px_rgba(0,0,0,0.2)] gap-2 md:gap-3">
                      <Image src="/newAssets/google.png" alt="Google" width={60} height={20} className="object-contain md:w-[80px] md:h-[26px]" unoptimized />
                      <div className="flex flex-col items-start scale-90 md:scale-100">
                          <div className="flex gap-0.5 mb-1">
                              {[1,2,3,4,5].map(s => <span key={s} className="text-[#F4B400] text-sm leading-none">★</span>)}
                          </div>
                          <div className="text-white text-[10px] font-light leading-none mb-0.5">Overall 4.7/5</div>
                          <div className="text-[#D2A02A] text-[9px] font-bold uppercase tracking-widest leading-none">Excellent</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* The Stats Strip Container */}
          <div className="relative w-full -mt-15 md:-mt-32 mb-10 md:mb-20 z-10">
            <div className="w-full transform -rotate-[12deg] md:-rotate-[8deg] scale-105 origin-center">
              <div 
                className="w-full min-h-[110px] md:min-h-[140px] flex flex-row items-center justify-between px-2 md:px-12 py-4 md:py-2"
                style={{
                  background: "rgba(255, 255, 255, 0.45)",
                  boxShadow: "0 0 89.8px 0 rgba(0, 0, 0, 0.45)",
                  backdropFilter: "blur(78.5px)",
                }}
              >
                 <div className="w-full flex flex-row justify-around items-center">
                   {stats.map((stat, idx) => (
                     <div key={idx} className="text-center group cursor-default">
                       <div className="text-[#30261C] text-xl md:text-5xl font-medium mb-0.5 md:mb-1 group-hover:scale-110 transition-transform duration-300">
                         {stat.value}
                       </div>
                       <div className="text-[#30261C] text-[10px] md:text-sm uppercase tracking-widest opacity-80 leading-tight">
                         {stat.label}
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20 md:mt-12">
           <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#30261C] mb-6">Why Choose Our <span className="text-[#D2A02A]">Virtual Councel?</span></h2>
                 <p className="text-[#30261C]/80 text-lg leading-relaxed mb-10">
                   We bring premium legal expertise directly to your fingertips. Our platform ensures that you always have access to top-notch legal minds, right when you need them.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                       <div className="w-14 h-14 rounded-[16px] bg-[#EAE6DB] flex items-center justify-center shrink-0 border border-[#D2A02A]/20 shadow-sm">
                          <svg className="w-7 h-7 text-[#30261C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-[#30261C] mb-2">Application Access</h3>
                          <p className="text-[#30261C]/70 text-[15px] leading-relaxed">Manage your legal matters on the go with our seamless and secure application interface. Your documents and case updates are always accessible.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-14 h-14 rounded-[16px] bg-[#EAE6DB] flex items-center justify-center shrink-0 border border-[#D2A02A]/20 shadow-sm">
                          <svg className="w-7 h-7 text-[#30261C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-[#30261C] mb-2">24/7 Support</h3>
                          <p className="text-[#30261C]/70 text-[15px] leading-relaxed">Legal emergencies don't wait for business hours, and neither do we. Reach out to our expert team anytime for immediate guidance and support.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* When It Makes Sense Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
          <div className="bg-[#30261C] rounded-[32px] p-8 md:p-12 shadow-lg relative overflow-hidden">
             {/* Decorative background elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D2A02A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>

             <div className="relative z-10 text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">When a <span className="text-[#D2A02A]">Virtual In-House Counsel</span> Makes Sense</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#D2A02A]/20 flex items-center justify-center shrink-0 border border-[#D2A02A]/30">
                         <span className="text-[#D2A02A] font-bold">01</span>
                      </div>
                      <p className="text-white/80 leading-relaxed text-[15px] pt-2">
                        <strong className="text-white block mb-1">Early-stage startups or SMEs</strong>
                        That need ongoing legal support but can't afford a full-time GC.
                      </p>
                   </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#D2A02A]/20 flex items-center justify-center shrink-0 border border-[#D2A02A]/30">
                         <span className="text-[#D2A02A] font-bold">02</span>
                      </div>
                      <p className="text-white/80 leading-relaxed text-[15px] pt-2">
                        <strong className="text-white block mb-1">Predictable Needs</strong>
                        Businesses with predictable, recurring legal needs (contracts, compliance) that want cost predictability.
                      </p>
                   </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#D2A02A]/20 flex items-center justify-center shrink-0 border border-[#D2A02A]/30">
                         <span className="text-[#D2A02A] font-bold">03</span>
                      </div>
                      <p className="text-white/80 leading-relaxed text-[15px] pt-2">
                        <strong className="text-white block mb-1">Specialist Support</strong>
                        Companies that need specialist support for transactions or projects but don't need daily coverage.
                      </p>
                   </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#D2A02A]/20 flex items-center justify-center shrink-0 border border-[#D2A02A]/30">
                         <span className="text-[#D2A02A] font-bold">04</span>
                      </div>
                      <p className="text-white/80 leading-relaxed text-[15px] pt-2">
                        <strong className="text-white block mb-1">Internal Structuring</strong>
                        Firms wanting to build internal templates/playbooks but not hire permanently.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* What it is Section */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mb-20 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-[#30261C] mb-6">What It Is & <span className="text-[#D2A02A]">What It Offers</span></h2>
           <p className="text-[#30261C]/80 text-lg leading-relaxed mb-6">
             <strong>Short answer:</strong> a virtual in-house counsel is a lawyer or small team that acts like your company's in-house legal department but works remotely and is usually engaged on a flexible basis (hourly, retainer, subscription or per-project) instead of being a full-time, on-payroll employee.
           </p>
           <p className="text-[#30261C]/70 text-base italic border-b border-[#D2A02A]/20 pb-8 inline-block">
             Below is a clear breakdown you can use to decide whether it fits your business.
           </p>
        </section>
        
        <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
            <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#D2A02A]/20 shadow-sm mb-12">
               <h3 className="text-2xl font-bold text-[#30261C] mb-8 text-center border-b border-[#D2A02A]/20 pb-4 inline-block mx-auto w-full">Pricing & Models</h3>
               <div className="flex items-center justify-center">
                  <div className="bg-[#EAE6DB] rounded-xl p-6 border border-[#D2A02A]/30 flex flex-col items-center text-center max-w-md w-full hover:-translate-y-2 transition-transform duration-300">
                     <span className="text-3xl mb-3">🤝</span>
                     <h4 className="text-xl font-bold text-[#30261C] mb-2">Monthly Retainer / Subscription</h4>
                     <p className="text-[#30261C]/80 text-sm">Predictable access and priority support (common for startups/SMEs).</p>
                  </div>
               </div>
            </div>
        </section>

        {/* Services Detail Sections */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20 space-y-12 md:space-y-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#30261C] mb-4">Our Core <span className="text-[#D2A02A]">Services</span></h2>
            <p className="text-lg text-[#30261C]/80 max-w-2xl mx-auto">
              We provide comprehensive legal solutions covering every critical aspect of your personal and business needs. Explore our extensive areas of expertise below.
            </p>
          </div>

          {/* Service 1: Contract work */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">Contract Work</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    Drafting, reviewing and negotiating commercial contracts, NDAs, vendor agreements, customer terms.
                 </p>
             </div>
          </div>

          {/* Service 2: Compliance & policies */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">Compliance & Policies</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    Creating internal policies (privacy, acceptable use, employment), compliance checklists, regulator liaison.
                 </p>
             </div>
          </div>

          {/* Service 3: Employment & HR support */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">Employment & HR Support</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    Employment contracts, termination processes, internal investigations, HR policy advice.
                 </p>
             </div>
          </div>

          {/* Service 4: Intellectual property */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">Intellectual Property</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    Advice on trademarks/copyrights, simple filings, licensing terms, cease & desist letters.
                 </p>
             </div>
          </div>

          {/* Service 5: Data privacy & cybersecurity */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">Data Privacy & Cybersecurity</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    GDPR/DPDP/other privacy assessments, DPIAs, vendor data-processing agreements.
                 </p>
             </div>
          </div>

          {/* Service 6: Risk management & corporate governance */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">Risk Management & Corporate Governance</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    Board minutes, corporate filings, shareholder issues, corporate housekeeping.
                 </p>
             </div>
          </div>

          {/* Service 7: Dispute management */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">Dispute Management</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    Early dispute resolution, settlement negotiations, coordinating with local litigators if court action is required.
                 </p>
             </div>
          </div>

          {/* Service 8: M&A / transactional support */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">M&A / Transactional Support</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    Due diligence, drafting SPA schedules, transaction documents, coordinating outside counsel.
                 </p>
             </div>
          </div>

          {/* Service 9: Project or product legal enablement */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">Project or Product Legal Enablement</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    Legal review for new products, marketing campaign checks, regulatory clearances.
                 </p>
             </div>
          </div>

          {/* Service 10: Training & playbooks */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 bg-white rounded-[32px] p-8 md:p-12 border border-[#D2A02A]/20 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-full md:w-1/3 flex justify-center shrink-0">
                 <div className="w-28 h-28 md:w-40 md:h-40 bg-[#EAE6DB] rounded-3xl flex items-center justify-center text-[#30261C] group-hover:bg-[#30261C] group-hover:text-white transition-colors duration-500 shadow-inner">
                   <svg className="w-14 h-14 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                   </svg>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <h3 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-4">Training & Playbooks</h3>
                 <p className="text-[#30261C]/80 leading-relaxed text-base md:text-lg mb-4">
                    Staff training, template libraries, playbooks for common legal events (e.g., hiring, vendor onboarding).
                 </p>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
}

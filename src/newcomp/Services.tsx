import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Handshake, Lightbulb, Building2, Landmark } from "lucide-react";

const Services = () => {
  return (
    <section className="w-full max-w-8xl xl:max-w-[100%] mx-auto px-4 lg:px-20 py-16 lg:py-24 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column Group */}
        <div className="flex flex-col gap-6 h-full">
          {/* Image Container */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-[25px] overflow-hidden min-h-[250px] lg:min-h-[650px] xl:min-h-[500px]">
            <Image
              src="/newAssets/office.png"
              alt="Office"
              fill
              className="object-cover"
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Button Overlay - Top Left */}
            <div className="absolute top-6 left-6">
              <Link
                href="/services"
                className="flex items-center gap-2 px-3 py-1.5 lg:px-6 lg:py-3 rounded-[25px] border-2 border-[#EAE6DB] bg-[rgba(234,230,219,0.15)] backdrop-blur-sm transition-transform hover:scale-105"
              >
                <span className="text-[#EAE6DB] font-medium text-xs lg:text-lg">Our Services</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 lg:w-4 lg:h-4 text-[#EAE6DB]"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Text Overlay - Bottom Left */}
            <div className="absolute bottom-6 left-6 max-w-[95%] lg:max-w-[80%] text-left flex flex-col gap-1 lg:gap-2">
              <h2
                className="text-[#EAE6DB] text-[31px] md:text-[47px] font-normal leading-[1.1] lg:leading-[100%]"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                Legal Services That Deliver Results
              </h2>
              <p
                className="text-[rgba(234,230,219,0.85)] text-[13px] lg:text-2xl font-normal leading-[1.4] lg:leading-[31px] tracking-[0.54px]"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                Focused, strategic, and client-first legal solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 lg:gap-6">
          {/* Box 1 - Loan Settlement */}
          <Link href="/services/loan-settlement" className="p-3 lg:p-4 xl:p-4 rounded-[25px] bg-gradient-to-t from-white to-white shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] flex flex-col justify-between items-start text-left gap-2 lg:gap-4 xl:gap-2 h-full min-h-[200px] lg:min-h-[300px] xl:min-h-[240px] hover:scale-[1.02] transition-transform duration-300">
            <Handshake className="w-11 h-11 text-[#30261C]" />
            <div>
              <h3 
                className="text-[#30261C] text-[16px] lg:text-2xl font-normal leading-[1.2] lg:leading-[30px] tracking-[0.6px]"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                Loan Settlement
              </h3>
              <p 
                className="text-[rgba(48,38,28,0.65)] text-[12px] lg:text-sm font-light leading-[1.4] lg:leading-[25px] tracking-[0.4px]"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                 Credit Card | Personal Loan | Business Loan | Vehicle Loan | Bank Loan Default | NBFC Loan Dispute | RBI Loan Settlement Guidelines |
              </p>
            </div>
          </Link>

          {/* Box 2 - Intellectual Property Rights */}
          <Link href="/services/intellectual-property-rights" className="p-3 lg:p-5 xl:p-4 rounded-[25px] bg-[linear-gradient(180deg,#FFF_-47.71%,#D29E0D_199.6%)] shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] flex flex-col justify-between items-start text-left gap-2 lg:gap-4 xl:gap-2 h-full min-h-[200px] lg:min-h-[300px] xl:min-h-[240px] hover:scale-[1.02] transition-transform duration-300">
             <Lightbulb className="w-11 h-11 text-[#30261C]" />
             <div>
               <h3 
                className="text-[#30261C] text-[16px] lg:text-2xl font-normal leading-[1.2] lg:leading-[30px] tracking-[0.6px]"
                style={{ fontFamily: "var(--font-polysans)" }}
               >
                 Intellectual Property Rights
               </h3>
              <p 
                className="text-[rgba(48,38,28,0.65)] text-[12px] lg:text-sm font-light leading-[1.4] lg:leading-[25px] tracking-[0.4px]"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                Trademark Registration | Copyright Protection | Patent Filing | Brand Protection | IPR Litigation
              </p>
             </div>
          </Link>

           {/* Box 3 - Corporate Law */}
           <Link href="/services/corporate" className="p-3 lg:p-5 xl:p-4 rounded-[25px] bg-[linear-gradient(180deg,#FFF_-47.71%,#D29E0D_199.6%)] shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] flex flex-col justify-between items-start text-left gap-2 lg:gap-4 xl:gap-2 h-full min-h-[200px] lg:min-h-[300px] xl:min-h-[240px] hover:scale-[1.02] transition-transform duration-300">
             <Building2 className="w-11 h-11 text-[#30261C]" />
             <div>
               <h3 
                className="text-[#30261C] text-[16px] lg:text-2xl font-normal leading-[1.2] lg:leading-[30px] tracking-[0.6px]"
                style={{ fontFamily: "var(--font-polysans)" }}
               >
                 Corporate Law
               </h3>
              <p 
                className="text-[rgba(48,38,28,0.65)] text-[12px] lg:text-sm font-light leading-[1.4] lg:leading-[25px] tracking-[0.4px]"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                Company Incorporation | Compliance | Mergers & Acquisitions | Corporate Litigation | Contract Drafting
              </p>
             </div>
          </Link>

          {/* Box 4 - Banking and Finance */}
          <Link href="/services/banking-and-finance" className="p-3 lg:p-5 xl:p-4 rounded-[25px] bg-gradient-to-t from-white to-white shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] flex flex-col justify-between items-start text-left gap-2 lg:gap-4 xl:gap-2 h-full min-h-[200px] lg:min-h-[300px] xl:min-h-[240px] hover:scale-[1.02] transition-transform duration-300">
             <Landmark className="w-11 h-11 text-[#30261C]" />
             <div>
               <h3 
                className="text-[#30261C] text-[16px] lg:text-2xl font-normal leading-[1.2] lg:leading-[30px] tracking-[0.6px]"
                style={{ fontFamily: "var(--font-polysans)" }}
               >
                 Banking & Finance
               </h3>
              <p 
                className="text-[rgba(48,38,28,0.65)] text-[12px] lg:text-sm font-light leading-[1.4] lg:leading-[25px] tracking-[0.4px]"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                    Financial Fraud | Financial Scam | Banking Regulatory Compliance | Commercial Banking Issues | Financial Litigation
              </p>
             </div>
          </Link>
        </div>
        </div>

      {/* Affiliations Section */}
      <div className="mt-12 w-full rounded-[35px] bg-[rgba(255,255,255,0.15)] shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] p-6 lg:p-12 flex flex-col items-center gap-6 lg:gap-12">
        <h2 
          className="text-[#30261C] text-center text-[25px] md:text-[47px] font-normal leading-[1.2] lg:leading-[1.2]"
          style={{ fontFamily: "var(--font-polysans)" }}
        >
          Affiliations That Strengthen Our Practice
        </h2>
        
        <div className="flex flex-row flex-nowrap justify-between md:justify-center items-center gap-0 md:gap-8 lg:gap-[140px] w-full overflow-x-hidden">
          <Link href="https://mcia.org.in/" target="_blank" className="relative flex-shrink-0 w-[22%] h-[38px] -ml-3 sm:ml-0 sm:w-[120px] sm:h-[60px] lg:w-[200px] lg:h-[100px] hover:opacity-80 transition-opacity">
            <Image
              src="/newAssets/aff5.png"
              alt="MCIA"
              fill
              className="object-contain"
            />
          </Link>
          <Link href="https://www.wipo.int/portal/en/index.html" target="_blank" className="relative flex-shrink-0 w-[22%] h-[38px] sm:w-[120px] sm:h-[60px] lg:w-[200px] lg:h-[100px] hover:opacity-80 transition-opacity">
            <Image
              src="/newAssets/aff2.png"
              alt="WIPO"
              fill
              className="object-contain"
            />
          </Link>
          <Link href="https://www.iaccindia.com/" target="_blank" className="relative flex-shrink-0 w-[22%] h-[38px] sm:w-[120px] sm:h-[60px] lg:w-[200px] lg:h-[100px] hover:opacity-80 transition-opacity">
            <Image
              src="/newAssets/aff3.png"
              alt="IACC"
              fill
              className="object-contain"
            />
          </Link>
          <Link href="https://iamch.org.in/" target="_blank" className="relative flex-shrink-0 w-[22%] h-[38px] sm:w-[120px] sm:h-[60px] lg:w-[200px] lg:h-[100px] hover:opacity-80 transition-opacity">
             <Image
              src="/newAssets/aff4.png"
              alt="IAMCH"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

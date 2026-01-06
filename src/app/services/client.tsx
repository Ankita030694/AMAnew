"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faBuildingColumns,  
  faHouse, 
  faScaleBalanced, 
  faUsers,  
  faArrowRight  
} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Image from "next/image";
import Locations from "@/components/locations";

// Services Data
const servicesData = [
    {
      icon: faHouse,
      title: "Banking and Finance",
      description: "Financial Fraud | Financial Scam | Banking Regulatory Compliance | Commercial Banking Issues | Financial Litigation | Frozen Bank Accounts |",
      link: "/services/banking-and-finance"
    },
    {
      icon: faScaleBalanced,
      title: "Loan Settlement",
      description: "Credit Card | Personal Loan | Business Loan | Vehicle Loan | Bank Loan Default | NBFC Loan Dispute | RBI Loan Settlement Guidelines |",
        link: "/services/loan-settlement"
    },
    {
      icon: faBuilding,
      title: "Intellectual Property Rights",
      description: "Trademark Registration | Patent Filing | Copyright Protection | IP Infringement | Brand Protection | Pharmaceutical Patent Attorney |",
      link: "/services/intellectual-property-rights"
    },
    {
      icon: faBuildingColumns,
      title: "Entertainment Law",
      description: "Media and entertainment | Film Industry | Music Industry Legal Consultant | Digital Media and OTT Platform Legal Advisor |",
      link: "/services/entertainment"
    },
    {
      icon: faUsers,
      title: "Real Estate",
      description: "Property Dispute | RERA Compliance | Property Registration | Land Dispute | Title Verification & Property Due Diligence | Real Estate Fraud |",
      link: "/services/real-estate"
    },
    {
      icon: faHouse,
      title: "Criminal Law",
      description: "Legal Help for FIR & Police Cases | Arrest & Police Interrogation | Cyber Crime & Online Fraud | Money Laundering Case | Bank & Insurance Fraud | Criminal Breach |",
      link: "/services/criminal-law"
    },
    {
      icon: faHouse,
      title: "Corporate Law",
      description: "Company Registration | Company Incorporation | Startup Compliance | MSME Registration | Partnership Agreement | Contract Drafting |",
      link: "/services/corporate"
    },
    {
      icon: faHouse,
      title: "Arbitration Law",
      description: "Arbitration Agreement Drafting | Arbitration Awards | Arbitral Award | Interim Relief | Banking and finance arbitration |",
      link: "/services/arbitration"
    },
    {
      icon: faHouse,
      title: "IT and Cyber Law",
      description: "Filing Cybercrime Complaint | FIR for Cyber Fraud | Cybercrime Police Complaint | Defamation on Social Media | Cyber Harassment Legal Remedies |",
      link: "/services/cyber"
    },
    {
      icon: faHouse,
      title: "Civil Law",
      description: "Property Dispute | Landlord Tenant Issue | Illegal Possession | Breach of Contract | Agreement Drafting | Specific Performance |",
      link: "/services/civil"
    },
    {
      icon: faHouse,
      title: "Drafting",
      description: "Business Contract | Employment Agreement | Service Agreement | Property Sale Deed | Lease Agreement | NDA Drafting (India & UK) | Legal Notice |",
      link: "/services/drafting"
    },
    {
      icon: faHouse,
      title: "Litigation",
      description: "Banking & Financial Dispute Litigation | Intellectual Property (IP) Litigation | Real Estate & Construction Litigation | Debt Recovery & Financial Disputes | Criminal Litigation | Civil Litigation |",
      link: "/services/litigation"
    }
];

const ServicesClient = () => {
  return (
    <main className="w-full bg-[#EAE6DB] min-h-screen flex flex-col justify-between relative overflow-hidden">
        {/* Background Texture/Pattern Overlay */}
        <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ 
            backgroundImage: 'radial-gradient(#30261C 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
            }}
        />


        
      {/* Hero Section */}
      <section className="relative w-full pt-32 md:pt-32 flex flex-col items-center">
         <div className="text-center max-w-6xl mx-auto z-10 px-4 pb-12">
              <h1 className="text-[32px] md:text-[54px] font-light text-[#30261C] leading-tight"  style={{
                    background: "linear-gradient(90deg, #30261C 5.29%, #D29E0D 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    fontWeight: 400
                  }}>
                  Our Legal Services
              </h1>
              <h2 
                  className="text-[28px] md:text-[48px] leading-tight mb-8 text-black"
              >
                  Comprehensive Legal Solutions Tailored to You
              </h2>
             
              <p 
                className="text-center text-light md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
                style={{ color: "rgba(48, 38, 28, 0.75)" }}
              >
                  We provide reliable legal advice and representation for individuals and businesses, ensuring clarity, compliance, and confidence at every stage.
              </p>

              <Link 
                href="/contact"
                className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full text-[#30261C] text-base sm:text-lg font-medium transition-all hover:opacity-90 mb-12"
                style={{
                  background: "#D29E0D",
                }}
              >
                Contact Our Legal Experts
              </Link>
         </div>

         <div className="relative w-full z-10 -mt-20 md:-mt-110">
             <Image 
                src="/handshake.png" 
                alt="Legal Experts Handshake" 
                width={1720} 
                height={600} 
                className="w-full h-auto object-cover"
                priority
             />
         </div>
      </section>

      {/* Services Grid */}
      <section className="w-full px-4 md:px-8 pb-24 max-w-[1400px] mx-auto z-10 relative mt-8 md:-mt-50">
          <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-[28px] md:text-[42px] font-normal text-[#30261C] mb-6" style={{ fontFamily: "var(--font-polysans)" }}>
                  Explore Our Full Range of Legal Services
              </h2>
              <p className="text-[#30261C]/80 text-base md:text-lg leading-relaxed">
                  We offer comprehensive legal services across personal, corporate, and compliance matters. Our team focuses on practical solutions, legal accuracy, and client-first representation to achieve the best outcomes.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((item, index) => (
                <Link href={item.link} key={index} className="group h-full">
                    <div className="h-full rounded-[24px] bg-[#EAE6DB] border border-white/40 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] p-6 lg:p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#D29E0D]/30">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-full bg-[#30261C]/5 flex items-center justify-center text-[#D29E0D] group-hover:bg-[#D29E0D] group-hover:text-[#EAE6DB] transition-colors duration-300">
                             <FontAwesomeIcon icon={item.icon} className="w-6 h-6" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                             <h3 className="text-xl md:text-2xl font-normal text-[#30261C] mb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                                {item.title}
                             </h3>
                             <p className="text-[#30261C]/70 text-sm md:text-base leading-relaxed">
                                {item.description}
                             </p>
                        </div>

                         {/* Arrow */}
                         <div className="flex justify-end">
                            <span className="text-[#D29E0D] font-medium group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                                Learn More <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                            </span>
                         </div>
                    </div>
                </Link>
            ))}
          </div>
      </section>

      {/* Locations Component */}
      <div className="w-full px-4 md:px-8 max-w-[1400px] mx-auto mb-20 z-10 relative">
         <Locations />
      </div>

      {/* CTA Section */}
      <section className="relative bg-[#30261C] py-[90px] overflow-hidden">
             {/* Background Decorative Elements */}
             <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute w-[968px] h-[1293px] left-1/2 -ml-[284px] -top-[531px]"
                    style={{ transform: 'rotate(11.849deg)' }}
                >
                    <div className="absolute w-[49px] h-[1298px] left-[8px] top-[69px]" style={{ transform: 'rotate(39.681deg)', background: 'rgba(234, 230, 219, 0.00)', filter: 'blur(129.4px)' }} />
                    <div className="absolute w-[49px] h-[1298px] left-[498px] top-[191px]" style={{ transform: 'rotate(29.681deg)', background: 'rgba(234, 230, 219, 0.50)', filter: 'blur(129.4px)' }} />
                    <div className="absolute w-[49px] h-[1298px] left-[297px] top-[130px]" style={{ transform: 'rotate(29.681deg)', background: 'rgba(234, 230, 219, 0.50)', filter: 'blur(129.4px)' }} />
                    <div className="absolute w-[49px] h-[1298px] left-[90px] top-[86px]" style={{ transform: 'rotate(29.681deg)', background: 'rgba(234, 230, 219, 0.36)', filter: 'blur(129.4px)' }} />
                </div>
                 {/* Golden Blur Effect */}
                 <svg className="absolute left-[30%] bottom-0 w-[245px] h-[234px]" style={{ filter: 'blur(101.6px)' }} width="868" height="696" viewBox="0 0 868 696" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_cta_services)">
                        <path d="M270.9 472.4V270.9L596.9 472.4V582.9L270.9 472.4Z" fill="#D29E0D" fillOpacity="0.61" />
                    </g>
                    <defs>
                        <filter id="filter0_f_cta_services" x="0" y="0" width="867.8" height="853.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="135.45" result="effect1_foregroundBlur"/>
                        </filter>
                    </defs>
                 </svg>
             </div>
             
             <div className="relative z-10 max-w-[700px] mx-auto flex flex-col items-center gap-[30px] px-4">
                  <h2 
                    className="text-[#EAE6DB] text-center text-[31px] md:text-[47px] font-normal leading-[1.2]"
                    style={{ fontFamily: 'var(--font-polysans)' }}
                  >
                    Not sure what you need?
                  </h2>
                   <p 
                    className="text-center text-[16px] md:text-[20px] font-light leading-[1.6] w-full"
                    style={{ color: 'rgba(234, 230, 219, 0.65)', fontFamily: 'var(--font-polysans)' }}
                  >
                    Our experts are here to guide you through your legal journey.
                  </p>
                  
                  <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#D29E0D] text-[#30261C] font-medium hover:bg-[#b88a24] transition-colors"
                  >
                      Schedule a Consultation
                  </Link>
             </div>
      </section>


    </main>
  );
};

export default ServicesClient;

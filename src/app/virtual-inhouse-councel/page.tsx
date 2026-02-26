import Navbar from "@/newcomp/Navbar";
import Footer from "@/newcomp/Footer";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { baseTestimonials } from "@/data/testimonials";
import TableOfContents from "@/components/TableOfContents";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is a Virtual In-house Counsel?",
    answer: "A virtual in-house counsel is a remote legal expert or team that provides all the services of a traditional in-house legal department (contracting, compliance, risk management) on a more flexible and cost-effective basis."
  },
  {
    question: "How is Virtual Counsel different from a traditional law firm?",
    answer: "Unlike traditional firms that often charge per hour or per task, a virtual counsel integrates into your business operations, providing ongoing support and becoming an extension of your team, often on a predictable retainer model."
  },
  {
    question: "What services are included in the Virtual In-house Counsel package?",
    answer: "It typically includes contract drafting and review, employment law advice, IP management, data privacy compliance, corporate governance, and general legal risk mitigation."
  },
  {
    question: "Can early-stage startups benefit from Virtual Counsel?",
    answer: "Yes, startups benefit significantly as it allows them to have senior-level legal oversight without the high overhead costs of a full-time General Counsel."
  },
  {
    question: "Is Virtual Counsel available 24/7?",
    answer: "At AMA Legal Solutions, our virtual counsel team is available around the clock to handle legal emergencies and urgent business matters."
  },
  {
    question: "Does Virtual Counsel handle litigation?",
    answer: "While our virtual counsel focuses on preventing disputes and managing risk, we also handle early-stage dispute resolution and can coordinate with specialized litigators if court action becomes necessary."
  },
  {
    question: "Is my data secure with a Virtual Counsel?",
    answer: "Absolutely. We use secure, enterprise-grade communication and document management systems to ensure all client data remains confidential and protected."
  },
  {
    question: "How do I get started with AMA's Virtual In-house Counsel?",
    answer: "You can start by booking a consultation. We will assess your business needs, volume of legal work, and tailor a package that fits your specific requirements."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Virtual Inhouse Counsel",
      "item": "https://amalegalsolutions.com/virtual-inhouse-councel"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Virtual Inhouse Counsel: Premium Legal Solutions for Modern Businesses",
  "description": "Discover how AMA Legal Solutions' Virtual Inhouse Counsel provides comprehensive, cost-effective, and 24/7 legal support for startups and SMEs.",
  "image": "https://amalegalsolutions.com/newAssets/virtual-counsel.webp",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-05-20",
  "dateModified": "2024-05-20"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Virtual Inhouse Counsel Service",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Comprehensive legal support for startups and SMEs.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "125"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Khanna"
      },
      "reviewBody": "AMA's Virtual Counsel has been a game-changer for my startup. Having experts available 24/7 gives me immense peace of mind."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewBody": "Professional, efficient, and cost-effective. Their contract review process is thorough and incredibly fast."
    }
  ]
};

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

  const tocSections = [
    { id: "why-choose", title: "Why Choose Our Counsel?" },
    { id: "when-it-makes-sense", title: "When It Makes Sense" },
    { id: "what-it-is", title: "What It Is & Offers" },
    { id: "pricing", title: "Pricing & Models" },
    { id: "services", title: "Our Core Services" },
    { id: "faqs", title: "Expert FAQs" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

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

        {/* Content Layout matching loan-settlement page */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Virtual Inhouse Counsel", href: "/virtual-inhouse-councel" },
          ]} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* USP Section */}
                <section id="why-choose" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-[#30261C] mb-4 md:mb-6">Why Choose Our <span className="text-[#D2A02A]">Virtual Counsel?</span></h2>
                   <p className="text-[#30261C]/80 text-sm md:text-lg leading-relaxed mb-6 md:mb-10 text-gray-700">
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
                </section>

                {/* When It Makes Sense Section */}
                <section id="when-it-makes-sense" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-[#30261C] mb-4 md:mb-6">When a <span className="text-[#D2A02A]">Virtual In-House Counsel</span> Makes Sense</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A]/20 text-[#D2A02A] rounded-full flex items-center justify-center mr-3 font-bold">01</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Early-stage startups or SMEs</h4>
                        <p className="text-gray-600 text-sm">That need ongoing legal support but can't afford a full-time GC.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A]/20 text-[#D2A02A] rounded-full flex items-center justify-center mr-3 font-bold">02</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Predictable Needs</h4>
                        <p className="text-gray-600 text-sm">Businesses with predictable, recurring legal needs (contracts, compliance) that want cost predictability.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A]/20 text-[#D2A02A] rounded-full flex items-center justify-center mr-3 font-bold">03</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Specialist Support</h4>
                        <p className="text-gray-600 text-sm">Companies that need specialist support for transactions or projects but don't need daily coverage.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A]/20 text-[#D2A02A] rounded-full flex items-center justify-center mr-3 font-bold">04</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Internal Structuring</h4>
                        <p className="text-gray-600 text-sm">Firms wanting to build internal templates/playbooks but not hire permanently.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* What it is Section */}
                <section id="what-it-is" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-[#30261C] mb-4 md:mb-6">What It Is & <span className="text-[#D2A02A]">What It Offers</span></h2>
                   <div className="bg-blue-50 border-l-4 border-[#D2A02A] p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                     <p className="text-sm md:text-lg text-gray-700">
                       <strong>Short answer:</strong> a virtual in-house counsel is a lawyer or small team that acts like your company's in-house legal department but works remotely and is usually engaged on a flexible basis (hourly, retainer, subscription or per-project) instead of being a full-time, on-payroll employee.
                     </p>
                   </div>
                   <p className="text-sm md:text-lg leading-relaxed text-gray-600 italic">
                     Below is a clear breakdown you can use to decide whether it fits your business.
                   </p>
                </section>
                
                <section id="pricing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-[#30261C] mb-4 md:mb-6">Pricing & Models</h2>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center max-w-md mx-auto hover:shadow-md transition-shadow">
                     <span className="text-4xl mb-4">🤝</span>
                     <h4 className="text-xl font-bold text-gray-900 mb-2">Monthly Retainer / Subscription</h4>
                     <p className="text-gray-600 text-sm">Predictable access and priority support (common for startups/SMEs).</p>
                  </div>
                </section>

                {/* Services Detail Sections */}
                <section id="services" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-[#30261C] mb-4 md:mb-6">Our Core <span className="text-[#D2A02A]">Services</span></h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 md:mb-8 text-gray-700">
                    We provide comprehensive legal solutions covering every critical aspect of your personal and business needs. Explore our extensive areas of expertise below.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Contract Work
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Drafting, reviewing and negotiating commercial contracts, NDAs, vendor agreements, customer terms.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Compliance & Policies
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Creating internal policies (privacy, acceptable use, employment), compliance checklists, regulator liaison.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Employment & HR Support
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Employment contracts, termination processes, internal investigations, HR policy advice.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Intellectual Property
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Advice on trademarks/copyrights, simple filings, licensing terms, cease & desist letters.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Data Privacy & Cybersecurity
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        GDPR/DPDP/other privacy assessments, DPIAs, vendor data-processing agreements.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Risk Mgmt & Corporate Gov.
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Board minutes, corporate filings, shareholder issues, corporate housekeeping.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        Dispute Management
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Early dispute resolution, settlement negotiations, coordinating with local litigators if court action is required.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        M&A / Transactional Support
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Due diligence, drafting SPA schedules, transaction documents, coordinating outside counsel.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Project/Product Enablement
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Legal review for new products, marketing campaign checks, regulatory clearances.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Training & Playbooks
                      </h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Staff training, template libraries, playbooks for common legal events (e.g., hiring, vendor onboarding).
                      </p>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-[#30261C] mb-8 text-center uppercase tracking-widest">Expert FAQ: Virtual Inhouse Counsel</h2>
                  <div className="space-y-6 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-[#F8FAFC] p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg md:text-xl font-bold text-[#30261C] mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 text-2xl font-black">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-[#30261C]/80 leading-relaxed pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#30261C] to-[#4A3D2F] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Streamline Your Legal Operations?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Get premium legal support tailored to your business needs without the overhead of building an in-house team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book a Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-[#D2A02A] hover:bg-[#D2A02A] hover:text-white text-[#D2A02A] font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our legal experts today.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Debt Consolidation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/corporate-law" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/intellectual-property" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Intellectual Property
                      </Link>
                    </li>
                  </ul>
                  
                  {/* App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App</p>
                    <div className="flex flex-col gap-3">
                      <Link 
                        href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/appstore.svg" 
                          alt="Get it on Google Play" 
                          width={130} 
                          height={36}
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                      <Link 
                        href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/playstore.svg" 
                          alt="Download on App Store" 
                          width={130} 
                          height={36}
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
    </>
  );
}

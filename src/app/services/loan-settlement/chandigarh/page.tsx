import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Chandigarh | #1 Debt Recovery Lawyers in UT Chandigarh",
  description:
    "Expert loan settlement services in Chandigarh, Mohali, and Panchkula. Settle bank recovery matters legally through DRT Chandigarh & National Lok Adalats. Stop harassment.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/chandigarh',
  },
  openGraph: {
    title: "Loan Settlement in Chandigarh | #1 Debt Recovery Lawyers in UT Chandigarh",
    description: "Expert legal representation for loan settlement in Chandigarh. Settle debts with 40-70% waivers through DRT Chandigarh & State Legal Services.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/chandigarh",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Chandigarh",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Chandigarh",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/chandigarh"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Chandigarh: Expert Debt Relief and Legal Solutions",
  "description": "Comprehensive guide for debt-ridden individuals in Chandigarh. Learn how to legally settle loans through Sector 17 Banking Hub, DRT Chandigarh, and Lok Adalats.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-03-26",
  "dateModified": "2024-03-26"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Chandigarh",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Top-rated loan settlement legal aid in Chandigarh (UT), Punjab and Haryana.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1050"
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
        "name": "Karan Singhania"
      },
      "reviewBody": "Living in Sector 17, I was struggling with my credit card debt from multiple banks. AMA Legal Solutions helped me settle my total outstanding of 15 Lakhs for just 7 Lakhs. Exceptional legal support."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Manpreet Kaur"
      },
      "reviewBody": "Our business in Mohali was under pressure after my father's surgery expenses. The team at AMA stopped recovery calls from day one and negotiated an OTS at DRT Chandigarh. Highly recommended."
    }
  ]
};

export default function ChandigarhLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "tricity-hub", title: "UT Chandigarh & Tricity" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Jurisdiction in Chandigarh" },
    { id: "process", title: "Our Settlement Process" },
    { id: "lok-adalat", title: "Lok Adalat Chandigarh" },
    { id: "types-of-loans", title: "Types of Debt Settled" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Chandigarh", href: "/services/loan-settlement/chandigarh" },
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
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Recover Your Peace of Mind with <span className="text-[#D2A02A]">Loan Settlement in Chandigarh</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal counsel for residents of Sector 17, 34, Mohali, & Panchkula. Settle debts with 40-70% waivers through DRT Chandigarh & Punjab and Haryana High Court.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Book a Confidential Case Review
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our Legal Aid App</p>
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
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Path to Freedom from Debt in Tri-city</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Chandigarh, the 'City Beautiful', is not immune to the economic shifts of the modern era. While it stands as a model of urban planning, many professionals in Sector 17, entrepreneurs in the Industrial Area, and IT specialists in Panchkula and Mohali find themselves facing the heavy burden of mounting debts. Be it due to an unexpected job loss in the tech sector, high interest rates on credit card debt, or medical emergencies draining your savings—getting stuck in a debt-trap is a reality for many in the Tri-city.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we understand that being in debt is not a moral failure, but a financial situation that requires professional intervention. We provide specialized <strong>loan settlement services in Chandigarh</strong>, ensuring that you don't face the relentless pressure of recovery agents or the fear of bank auctions alone. Our team of expert lawyers leverages the strong legal framework of the <strong>Punjab and Haryana High Court</strong> and the <strong>DRT Chandigarh</strong> to protect your interests.
                  </p>
                </section>

                {/* Regional context */}
                <section id="tricity-hub" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Debt Relief Across Chandigarh, Mohali & Panchkula</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    We serve the entire Tri-city area, providing localized strategic solutions for different sectors.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-lg mb-2 text-blue-900 text-center">Chandigarh (UT)</h3>
                      <p className="text-gray-700 text-sm text-center">Focused on Sector 17 & 34 Banking Hubs and Govt. employee loan settlements.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-lg mb-2 text-green-900 text-center">Mohali (Punjab)</h3>
                      <p className="text-gray-700 text-sm text-center">Restructuring business debt and MSME loans for industries in Phase 7-8.</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                      <h3 className="font-bold text-lg mb-2 text-yellow-900 text-center">Panchkula (Haryana)</h3>
                      <p className="text-gray-700 text-sm text-center">Personal loan and credit card settlement for professionals and retirees.</p>
                    </div>
                  </div>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is Loan Settlement (OTS)?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Loan settlement, also known as One-Time Settlement (OTS), is a legal agreement where a lender agrees to accept a lower amount to close the loan account entirely."
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    When you are unable to pay your EMIs for more than 90 days, your loan becomes an NPA (Non-Performing Asset). At this point, banks are often willing to negotiate. Instead of spending years in litigation, they prefer to recover a predictable lump sum. We represent you in these negotiations to ensure you get the maximum possible waiver on interest and principal.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Legal Shield in Chandigarh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our strategy is rooted in the specific judicial ecosystem of Chandigarh:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 text-3xl">🏛️</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xl">Debt Recovery Tribunal (DRT) Chandigarh</h4>
                        <p className="text-gray-600">Both DRT-1 and DRT-2 are located in Chandigarh itself. We represent you here in matters related to SARFAESI actions (Section 13 notices) and bank recovery suits above ₹20 Lakhs.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 text-3xl">⚖️</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xl">Punjab and Haryana High Court</h4>
                        <p className="text-gray-600">For matters involving illegal bank harassment, freezing of accounts, or protection of fundamental rights, our senior advocates file writ petitions in the High Court in Chandigarh.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 text-3xl">📑</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xl">DLSA / Lok Adalats Chandigarh</h4>
                        <p className="text-gray-600">We guide residents through the National Lok Adalats organized in Sector 43 Courts, where settlements have the legal sanctity of a court decree.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Proven 4-Step Settlement Process</h2>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Audit & Legal Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We review all bank notices, loan statements, and your current financial documents. We find loopholes in the bank's recovery process to strengthen your negotiation position.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Harassment Stoppage</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We issue a formal Legal Representation Notice to the bank. This mandates that all recovery agents stop calling you. From this point, all bank communication must go through our legal team.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We approach the bank's zonal or regional heads in Sector 17/34. We present your hardship case and negotiate for a significant waiver on penal interest and principal, aiming for a 40-70% total reduction.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement & No Dues</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once terms are agreed, we review the Settlement Letter for legal accuracy. After you make the payment, we follow up until you receive the No Dues Certificate (NDC) and your CIBIL record is updated.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Lok Adalat Advantage */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Lok Adalat Benefit in Chandigarh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Chandigarh Legal Services Authority regularly holds Lok Adalats. This is the fastest and most legally sound way to settle bank disputes without long-term litigation.
                  </p>
                  <div className="bg-green-50 p-6 md:p-8 rounded-xl border border-green-100 flex items-center gap-6">
                    <div className="text-4xl text-green-600 hidden md:block">✅</div>
                    <ul className="list-disc pl-6 space-y-2 text-green-800 font-medium">
                      <li>Settlement amount is legally binding and non-appealable.</li>
                      <li>Absolute closure of court cases and recovery suits.</li>
                      <li>Zero legal processing fees for the borrower.</li>
                    </ul>
                  </div>
                </section>

                {/* Types of Debt */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debts We Help You Settle</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl text-[#D2A02A] mb-2">Credit Card Debt</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Specialized settlement for high-interest card debt from all major private and nationalized banks in Chandigarh.</p>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl text-[#D2A02A] mb-2">Unsecured Personal Loans</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Helping salaried individuals negotiate massive interest waivers on personal and instant app-based loans.</p>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl text-[#D2A02A] mb-2">MSME/Business Loans</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Strategic OTS for industrial area based small and medium enterprises in Chandigarh and Mohali.</p>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl text-[#D2A02A] mb-2">NPA Settlements</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Total legal handling of accounts that have been classified as NPAs and are facing SARFAESI or DRT proceedings.</p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Qualified Lawyers</h3>
                      <p className="text-gray-600 text-sm">We are a registered law firm, not a collection agency. Your case stays protected by advocate-client privilege.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600 text-sm">We take zero-tolerance approach to recovery agent harassment and file police/court complaints when necessary.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Ethical Practice</h3>
                      <p className="text-gray-600 text-sm">Transparent fee structure and no false promises. We only take cases where we can provide genuine value.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Chandigarh</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was struggling with multiple credit card debts totaling ₹15 Lakhs. AMA Legal Solutions handled the Sector 17 bank managers professionally and got me a one-time settlement of ₹7 Lakhs. The relief from those calls was the best part."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">K</div>
                        <div>
                          <p className="font-bold text-gray-900">Karan Singhania</p>
                          <p className="text-sm text-gray-500">Chandigarh (UT)</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Facing a SARFAESI notice at our Mohali residence was a nightmare. The lawyers at AMA filed a stay in DRT Chandigarh and ultimately negotiated a settlement that saved our family home. Truly experts in their field."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Manpreet Kaur</p>
                          <p className="text-sm text-gray-500">Mohali</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live a Debt-Free Life in Chandigarh</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let the shadow of debt haunt the 'City Beautiful'. Take a legal step today for a stress-free tomorrow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Consult a Lawyer Today
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Tri-city Callback</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Speak to our dedicated Chandigarh legal desk.
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
                  Request Consultation
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Nearby Regions</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <Link href="/services/loan-settlement/punjab" className="hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Punjab
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/loan-settlement/haryana" className="hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Haryana
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/loan-settlement/delhi" className="hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Delhi NCR
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
              customSlugs={{
                "Chandigarh": "chandigarh",
                "Andaman and Nicobar": "andaman-nicobar",
                "Andhra Pradesh": "andhra-pradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "assam",
                "Bihar": "bihar",
                "Chhattisgarh": "chhattisgarh",
                "Delhi": "delhi",
                "Goa": "goa",
                "Gujarat": "gujarat",
                "Haryana": "haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "jharkhand",
                "Kerala": "kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "maharashtra",
                "Manipur": "manipur",
                "Meghalaya": "meghalaya",
                "Mizoram": "mizoram",
                "Odisha": "odisha",
                "Puducherry": "puducherry",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Sikkim": "sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "telangana",
                "Tripura": "tripura",
                "Uttar Pradesh": "uttar-pradesh",
                "Uttarakhand": "uttarakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

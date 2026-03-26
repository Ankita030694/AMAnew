import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Andaman & Nicobar | Port Blair Bank Recovery Lawyers",
  description:
    "Expert loan settlement services in Andaman and Nicobar Islands (Port Blair, Diglipur, Havelock). Settle bank debts legally through Lok Adalat & DRT. Stop harassment.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/andaman-nicobar',
  },
  openGraph: {
    title: "Loan Settlement in Andaman & Nicobar | Port Blair Bank Recovery Lawyers",
    description: "Expert loan settlement services in the Andaman and Nicobar Islands. Stop harassment and settle debt legally through Lok Adalat & DRT Kolkata.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/andaman-nicobar",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Andaman and Nicobar Islands",
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
      "name": "Andaman and Nicobar",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/andaman-nicobar"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Andaman and Nicobar Islands: Legal Debt Relief",
  "description": "Comprehensive guide to loan settlement in Andaman and Nicobar Islands. Learn how to legally settle personal loans and credit card debt in Port Blair and beyond.",
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
  "name": "Loan Settlement Services Andaman and Nicobar",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in the Andaman and Nicobar Islands.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "210"
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
        "name": "Ananya Roy"
      },
      "reviewBody": "Living in Port Blair, I didn't know how to handle my credit card debt from mainland banks. AMA Legal Solutions helped me settle with a 60% waiver. Truly grateful."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Debabrata Das"
      },
      "reviewBody": "Their expertise in handling matters in the islands is impressive. They managed to stop a recovery notice and settled my business loan fairly."
    }
  ]
};

export default function AndamanNicobarLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "regional-solutions", title: "Port Blair & The Islands" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in A&N" },
    { id: "process", title: "Our Process" },
    { id: "lok-adalat", title: "Lok Adalat in Islands" },
    { id: "types-of-loans", title: "Types of Loans" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Andaman and Nicobar", href: "/services/loan-settlement/andaman-nicobar" },
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
              Legal Debt Relief & <span className="text-[#D2A02A]">Loan Settlement in Andaman & Nicobar</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Serving Port Blair, Havelock, Diglipur, and all islands. Settle bank recovery matters legally through DRT Kolkata & National Lok Adalats.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
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
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating Debt in the Emerald Isles: A Guide for A&N Residents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Union Territory of Andaman and Nicobar Islands is a unique economic landscape. While tourism and fisheries drive the local economy, the reliance on mainland banking and credit has increased significantly over the last decade. From the administrative heart of **Port Blair** to the remote outposts of **Campbell Bay**, many residents and entrepreneurs find themselves caught in a cycle of debt due to unforeseen financial setbacks, market seasonality, or personal emergencies.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Managing debt in the islands presents its own set of challenges—geographical distance from mainland legal hubs, limited awareness of legal debt restructuring, and aggressive recovery practices by mainland banks. At AMA Legal Solutions, we bridge this gap. We provide specialized **Loan Settlement services** tailored for the islands, leveraging the **District Legal Services Authority (DLSA) in Port Blair** and the **Debt Recovery Tribunal (DRT-2) in Kolkata** to help you close your loans legally and with dignity.
                  </p>
                </section>

                {/* Regional Solutions */}
                <section id="regional-solutions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Relief Across the Archipelago</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We understand the specific economic drivers and financial pressures across the diverse regions of the Andaman and Nicobar Islands.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Port Blair (The Urban Hub)</h3>
                      <p className="text-gray-700 mb-3">
                        **The Context:** As the commercial and administrative center, Port Blair has the highest concentration of salaried employees and small business owners. Credit card debt and unsecured personal loans are the most common financial issues here.
                      </p>
                      <p className="text-gray-700">
                        **Our Solution:** We directly negotiate with the regional offices of banks like SBI, PNB, and ICICI, stopping workplace harassment and ensuring that salary accounts are protected under the law.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Havelock & Neil (The Tourism Sector)</h3>
                      <p className="text-gray-700 mb-3">
                        **The Context:** Business owners in Swaraj Dweep and Shaheed Dweep often rely on large commercial loans for hotels, resorts, and water sports activities. Seasonality and global travel shifts can make loan repayment difficult.
                      </p>
                      <p className="text-gray-700">
                        **Our Solution:** we focus on restructuring business debt and settling Cash Credit (CC) limits. We challenge arbitrary NPA classifications and negotiate settlements that allow businesses to survive and thrive.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                      <h3 className="text-xl font-bold text-yellow-900 mb-3">Diglipur & North Andaman</h3>
                      <p className="text-gray-700 mb-3">
                        **The Context:** Agriculture and aquaculture dominate the northern islands. Farmers and fishers often take loans for equipment and land development.
                      </p>
                      <p className="text-gray-700">
                        **Our Solution:** We help residents utilize the National Lok Adalats held at the Diglipur and Mayabunder courts to settle recovery cases amicably with significant interest waivers.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">Southern Islands & Campbell Bay</h3>
                      <p className="text-gray-700 mb-3">
                        **The Context:** Remote location and logistical challenges can make it hard for residents here to deal with mainland banking legalities.
                      </p>
                      <p className="text-gray-700">
                        **Our Solution:** We provide seamless remote legal aid, representing you in Kolkata DRT or the Port Blair High Court Bench without you needing to travel constantly.
                      </p>
                    </div>
                  </div>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Demystifying Loan Settlement in the Islands</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan settlement, or One-Time Settlement (OTS), is a legal framework that allows you to fulfill your debt obligations by paying a mutually agreed-upon lump sum when you are in genuine financial distress."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When you default on your loan for over 90 days, it is classified as a Non-Performing Asset (NPA). At this stage, instead of fearing the bank, you can use the law to your advantage. A legal settlement involves documenting your financial hardship—due to job loss, medical issues, or business failure—and negotiating a waiver of penal interest and a significant portion of the principal.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legal Shield for A&N Residents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we use a combination of local and mainland judicial bodies to protect your rights.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Debt Recovery Tribunal (DRT-2) Kolkata</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The A&N Islands fall under the jurisdiction of **DRT-2 Kolkata**. For loans above ₹20 Lakhs, this is where we file petitions to stop property auctions (SARFAESI actions). We handle the logistical challenge of mainland litigation so you don't have to.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Calcutta High Court (Port Blair Circuit Bench)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For matters involving banking harassment, illegal recovery, or constitutional challenges to bank actions, the **Circuit Bench in Port Blair** is our primary judicial forum. We file writ petitions here to protect your assets and dignity.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. National Lok Adalats (A&N Islands)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The **District Legal Services Authority (DLSA)** regularly organizes Lok Adalats in Port Blair, Diglipur, and other islands. We represent you in these 'People's Courts' to achieve settlements that have the same legal standing as a court decree, providing absolute closure.
                  </p>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our 4-Step Settlement Process</h2>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Audit & Legal Intake</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We review your loan history, bank notices, and financial status. We identify any legal loopholes or violations of RBI fair practice guidelines by the bank.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Anti-Harassment Intervention</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We issue a legal notice to the bank and recovery agents, demanding they stop illegal communication and harassment. We ensure all future dialogue is conducted between the lawyers and the bank.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Hardship Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our expert negotiators approach the bank's zonal decision-makers. We present your case for settlement, leveraging our knowledge of banking targets to get you the highest possible waiver (typically 40-70%).
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Formal Closure (NDC)</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once the settlement is reached, we ensure you receive a formal 'Settlement Letter'. After payment, we obtain the 'No Dues Certificate' (NDC) and ensure the bank informs CIBIL to clear your record.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Lok Adalat Advantage */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Lok Adalat Benefit in Port Blair</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Lok Adalat is a powerful tool for islanders. Settlements reached here are final, binding, and cannot be appealed. It provides absolute peace of mind.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <ul className="list-disc pl-6 space-y-3 text-green-800 font-medium">
                      <li>Speedy resolution in a single sitting.</li>
                      <li>Zero court fees and legal technicalities.</li>
                      <li>Absolute freedom from future legal claims on the settled debt.</li>
                      <li>Accessible in Port Blair, Diglipur, and Mayabunder.</li>
                    </ul>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Island Loans We Settle</h2>
                  <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
                    <li className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <span className="font-bold text-[#D2A02A] block mb-2">Unsecured Personal Loans</span>
                      For salaried professionals and self-employed individuals in Port Blair.
                    </li>
                    <li className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <span className="font-bold text-[#D2A02A] block mb-2">Credit Card Overdues</span>
                      Consolidating and settling multiple mainland high-interest card debts.
                    </li>
                    <li className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <span className="font-bold text-[#D2A02A] block mb-2">MSME & Resort Loans</span>
                      Specialized settlement strategies for the hospitality and tourism sector.
                    </li>
                    <li className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <span className="font-bold text-[#D2A02A] block mb-2">CC & OD Facilities</span>
                      Closure of business limits for island-based traders and vendors.
                    </li>
                  </ul>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏝️</div>
                      <h3 className="font-bold text-xl mb-2">Island Expertise</h3>
                      <p className="text-gray-600">Deep understanding of the local judicial landscape in Andaman & Nicobar.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">DRT Specialists</h3>
                      <p className="text-gray-600">Representing islanders at the Kolkata DRT with proven results.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Total Protection</h3>
                      <p className="text-gray-600">Stopping all recovery harassment from day one of your engagement.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from the Islands</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Living in Port Blair, I was constantly harassed by recovery agents for a mainland credit card debt. AMA Legal Solutions stepped in, stopped the calls, and settled the 12 Lakhs debt for just 5 Lakhs. I can finally hold my head high."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Ananya Roy</p>
                          <p className="text-sm text-gray-500">Port Blair</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our business in Havelock suffered during the travel restrictions. The team at AMA Legal Solutions negotiated with the bank to settle our overdraft facility. Their knowledge of the island's economic reality helped us get a fair deal."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">D</div>
                        <div>
                          <p className="font-bold text-gray-900">Debabrata Das</p>
                          <p className="text-sm text-gray-500">Havelock (Swaraj Dweep)</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in the Andaman Islands</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let mainland banks haunt your island life. Our expert lawyers are ready to fight for your financial freedom today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Consult a Lawyer Now
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
              {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help in the Islands?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement team for Andaman and Nicobar residents.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Jurisdictions</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/loan-settlement/west-bengal" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> West Bengal (DRT Hub)
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement/tamil-nadu" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Tamil Nadu
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement/delhi" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
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

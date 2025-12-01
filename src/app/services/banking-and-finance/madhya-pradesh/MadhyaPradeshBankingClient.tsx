"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://amalegalsolutions.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://amalegalsolutions.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banking and Finance",
      item: "https://amalegalsolutions.com/services/banking-and-finance",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Madhya Pradesh",
      item: "https://amalegalsolutions.com/services/banking-and-finance/madhya-pradesh",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Madhya Pradesh: The Heart of India's Economy",
  description:
    "Expert legal consultancy for banking and finance services in Madhya Pradesh. Assistance with NBFC registration in Indore, MSME finance in Pithampur, and agricultural lending compliance.",
  image: "https://amalegalsolutions.com/services/banking-finance-madhya-pradesh.png",
  author: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    url: "https://amalegalsolutions.com",
  },
  publisher: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://amalegalsolutions.com/logo.png",
    },
  },
  datePublished: "2024-11-27",
  dateModified: "2024-11-27",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Banking and Finance Legal Services Madhya Pradesh",
  image: "https://amalegalsolutions.com/services/banking-finance-madhya-pradesh.png",
  description:
    "Premier legal consultancy for the banking and finance sector in Indore, Bhopal, and across Madhya Pradesh.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "890",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Rajesh Gupta",
      },
      reviewBody:
        "AMA Legal Solutions helped us set up our NBFC in Indore. Their deep understanding of RBI regulations and the local business environment in MP made the process smooth.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Anjali Verma",
      },
      reviewBody:
        "We operate a logistics financing firm in Pithampur. AMA Legal's advice on loan agreements and debt recovery under state laws has been invaluable for our growth.",
    },
  ],
};

export default function MadhyaPradeshBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "mp-advantage", title: "The Madhya Pradesh Advantage" },
    { id: "indore-hub", title: "Indore: The Financial Capital" },
    { id: "financial-services", title: "Key Financial Services" },
    { id: "nbfc-landscape", title: "NBFC Registration & Compliance" },
    { id: "msme-finance", title: "MSME & Industrial Finance" },
    { id: "agri-finance", title: "Agricultural & Rural Finance" },
    { id: "regulatory-framework", title: "Regulatory Framework" },
    { id: "compliance-checklist", title: "Compliance Checklist" },
    { id: "challenges-solutions", title: "Challenges & Solutions" },
    { id: "why-choose-us", title: "Why Choose AMA Legal" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking and Finance", href: "/services/banking-and-finance" },
    { label: "Madhya Pradesh", href: "/services/banking-and-finance/madhya-pradesh" },
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
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Premier <span className="text-[#D2A02A]">Banking and Finance Services</span> in Madhya Pradesh
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Empowering the Heart of India. From NBFCs in Indore to Industrial Finance in Pithampur, we are your trusted legal partners.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Financial Growth in the Heart of India
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Madhya Pradesh (MP), centrally located and rich in resources, is witnessing a significant economic transformation. Known as the "Heart of India," the state has evolved from an agrarian economy to a diverse industrial and logistical hub. Indore, often dubbed "Mini Mumbai," serves as the commercial and financial capital, while Bhopal, the administrative seat, drives policy and governance. The state's strategic location makes it a critical node for logistics and warehousing, creating unique opportunities for infrastructure financing.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The financial landscape of MP is characterized by a mix of traditional banking, a robust cooperative sector, and a rapidly growing presence of Non-Banking Financial Companies (NBFCs). The industrial belts of Pithampur, Mandideep, and Govindpura drive demand for MSME finance, while the vast agricultural hinterland requires specialized rural credit solutions.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand the nuances of operating in this diverse market. We provide expert legal consultancy to financial institutions, helping them navigate the regulatory framework set by the Reserve Bank of India (RBI) and state-specific laws like the Madhya Pradesh Protection of Depositors Act. Whether you are setting up an NBFC in Indore, financing a warehouse in Dewas, or launching a fintech app for farmers, our team ensures your business is compliant, secure, and ready for growth.
                  </p>
                </section>

                {/* MP Advantage */}
                <section id="mp-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Madhya Pradesh Advantage: Why Invest Here?
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Madhya Pradesh offers a unique combination of central location, industrial infrastructure, and policy support, making it an attractive destination for financial services.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Strategic Location</h3>
                      <p className="text-gray-700">
                        Being landlocked and central, MP is the logistics hub of India. This drives demand for supply chain finance, warehousing loans, and transport vehicle financing, sectors where NBFCs thrive.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Industrial Powerhouse</h3>
                      <p className="text-gray-700">
                        Pithampur (Auto Cluster), Mandideep (Engineering), and the Crystal IT Park in Indore create a massive ecosystem of MSMEs requiring working capital and term loans.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Agricultural Richness</h3>
                      <p className="text-gray-700">
                        As a leading producer of soybean, wheat, and pulses, the state has a huge market for agri-processing finance, crop loans, and commodity derivatives.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Urbanization & Consumption</h3>
                      <p className="text-gray-700">
                        Rising urbanization in cities like Indore, Bhopal, Gwalior, and Jabalpur is fueling demand for housing finance, personal loans, and wealth management services.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Indore Hub */}
                <section id="indore-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Indore: The Financial Capital
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Indore is the heartbeat of Madhya Pradesh's economy. It is home to the Madhya Pradesh Stock Exchange (MPSE), although now regional exchanges have merged, the financial culture remains strong.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist financial entities in Indore with:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Corporate Finance:</strong> Structuring deals for large corporates headquartered in the city.</li>
                    <li><strong>Wealth Management:</strong> Catering to the high concentration of HNIs and business families with SEBI-compliant advisory services.</li>
                    <li><strong>Startups:</strong> Indore has a burgeoning startup ecosystem. We help fintechs and investment platforms with legal structuring and fundraising compliance.</li>
                  </ul>
                </section>

                {/* Key Financial Services */}
                <section id="financial-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Key Financial Services in Demand
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The diverse economic landscape of MP drives demand for specialized financial services. We provide comprehensive legal support for:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        NBFCs are crucial for reaching the unbanked sectors in MP. We handle registration, asset classification norms, and compliance with RBI's fair practices code.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Microfinance Institutions (MFIs)</h3>
                      <p className="text-gray-700">
                        Serving the tribal belts of Jhabua and rural districts, MFIs need robust legal frameworks to ensure ethical lending and recovery. We assist with Section 8 incorporation and NBFC-MFI registration.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        Popular in smaller towns for fostering savings. We ensure strict adherence to Nidhi Rules, 2014, preventing regulatory backlash.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Logistics Finance</h3>
                      <p className="text-gray-700">
                        Specialized lending for commercial vehicles and warehousing infrastructure. We draft loan agreements that secure the lender's interest in movable and immovable assets.
                      </p>
                    </div>
                  </div>
                </section>

                {/* NBFC Landscape */}
                <section id="nbfc-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    NBFC Registration & Compliance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Setting up an NBFC in Madhya Pradesh involves navigating the RBI's stringent norms. The RBI Regional Office in Bhopal is the nodal authority for the state.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Registration Roadmap</h3>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                      <li><strong>Incorporation:</strong> Register a company with the ROC Gwalior. The MoA must reflect financial activities as the primary object.</li>
                      <li><strong>Net Owned Fund (NOF):</strong> Ensure a minimum NOF of ₹2 Crore (or ₹10 Crore as per latest norms) is deposited in a bank.</li>
                      <li><strong>Director Due Diligence:</strong> Directors must meet the 'Fit and Proper' criteria, with no criminal record or financial default.</li>
                      <li><strong>COSMOS Application:</strong> File the application online on the RBI's COSMOS portal with all required documents.</li>
                      <li><strong>Physical Submission:</strong> Submit the hard copy to the Department of Non-Banking Supervision (DNBS) at RBI, Bhopal.</li>
                      <li><strong>Query Resolution:</strong> Promptly answer any queries raised by the RBI regarding the business plan or source of funds.</li>
                    </ol>
                  </div>
                </section>

                {/* MSME Finance */}
                <section id="msme-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    MSME & Industrial Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The industrial corridors of MP are bustling with activity. Financing these MSMEs requires a deep understanding of industrial laws and collateral security.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist lenders in:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Term Loans:</strong> Drafting agreements for machinery and plant financing in Pithampur and Mandideep.</li>
                    <li><strong>Working Capital:</strong> Structuring cash credit and overdraft facilities secured by current assets.</li>
                    <li><strong>Factoring:</strong> Setting up factoring services to improve liquidity for MSMEs facing delayed payments.</li>
                    <li><strong>SARFAESI Actions:</strong> Legal support for enforcing security interest in case of default, including taking possession of secured assets.</li>
                  </ul>
                </section>

                {/* Agri Finance */}
                <section id="agri-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Agricultural & Rural Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    With agriculture being a primary occupation, rural finance is a key sector. However, it comes with specific legal protections for farmers.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We advise on:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Kisan Credit Cards (KCC):</strong> Compliance with RBI and NABARD guidelines for crop loans.</li>
                    <li><strong>Warehouse Receipt Finance:</strong> Lending against commodities stored in WDRA-accredited warehouses.</li>
                    <li><strong>Tractor Finance:</strong> Hypothecation agreements and recovery norms for agricultural machinery.</li>
                    <li><strong>FPO Financing:</strong> Structuring loans for Farmer Producer Organizations (FPOs) to set up processing units.</li>
                  </ul>
                </section>

                {/* Regulatory Framework */}
                <section id="regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Navigating the Regulatory Framework
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Compliance in MP involves a mix of central and state regulations.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Reserve Bank of India (RBI):</strong> The Bhopal Regional Office regulates banks and NBFCs in the state.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Registrar of Companies (ROC):</strong> The ROC Gwalior oversees corporate compliance for all companies registered in MP.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>State Laws:</strong> The Madhya Pradesh Nikshepakon Ke Hiton Ka Sanrakshan Adhiniyam, 2000 (Protection of Depositors Act) is strictly enforced.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>RERA MP:</strong> For housing finance companies, compliance with RERA norms for project approval is crucial.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Compliance Checklist */}
                <section id="compliance-checklist" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Essential Compliance Checklist
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Ensure your financial entity in MP stays compliant with this checklist:
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>ROC Filings:</strong> Annual returns (MGT-7) and financial statements (AOC-4) filed with ROC Gwalior.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>RBI Returns:</strong> Timely submission of NBS returns via COSMOS.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>KYC/AML:</strong> Robust KYC policies and reporting to FIU-IND.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>State Act Compliance:</strong> No acceptance of deposits in violation of the MP Protection of Depositors Act.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Shop & Establishment:</strong> Registration under the MP Shops and Establishments Act for all branches.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Professional Tax:</strong> Registration and payment of professional tax for the company and employees.</li>
                    </ul>
                  </div>
                </section>

                {/* Challenges & Solutions */}
                <section id="challenges-solutions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Common Challenges & Our Solutions
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We help you overcome regional operational hurdles.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Recovery in Rural Areas</h3>
                        <p className="text-gray-700">Recovering loans in rural MP can be difficult due to socio-political factors and agricultural distress.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We advise on ethical recovery practices and the use of legal tools like Lok Adalats and arbitration for faster dispute resolution.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Logistics Documentation</h3>
                        <p className="text-gray-700">Financing commercial vehicles often involves complex RTO documentation across state borders.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We streamline the documentation process, ensuring valid hypothecation endorsement on RC books to secure the asset.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Nidhi Company Compliance</h3>
                        <p className="text-gray-700">Many Nidhi companies face scrutiny for operating like full-fledged banks.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We conduct compliance audits to ensure you are strictly adhering to the 'mutual benefit' principle and not dealing with non-members.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Partner with AMA Legal Solutions?
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We bring a blend of national expertise and local understanding to Madhya Pradesh.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Local Presence</h3>
                      <p className="text-gray-600">Familiarity with the ROC Gwalior and RBI Bhopal processes ensures faster approvals.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📈</div>
                      <h3 className="font-bold text-xl mb-2">Diverse Expertise</h3>
                      <p className="text-gray-600">From Pithampur's industries to Jhabua's microfinance, we cover it all.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Strategic Advice</h3>
                      <p className="text-gray-600">We don't just handle compliance; we help you structure your business for growth.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Madhya Pradesh</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions helped us set up our NBFC in Indore. Their deep understanding of RBI regulations and the local business environment in MP made the process smooth. We got our COR without any major hurdles."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Gupta</p>
                          <p className="text-sm text-gray-500">Indore, Madhya Pradesh</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We operate a logistics financing firm in Pithampur. AMA Legal's advice on loan agreements and debt recovery under state laws has been invaluable for our growth. Highly recommended."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anjali Verma</p>
                          <p className="text-sm text-gray-500">Pithampur, Madhya Pradesh</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Financial Journey in Madhya Pradesh</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Partner with the state's most trusted banking and finance legal consultants.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Start Registration
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Expert Legal Guidance • Indore • Bhopal • Gwalior
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Get Expert Advice</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Consult with our banking law experts in Madhya Pradesh today.
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
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Banking and Finance" servicePath="banking-and-finance" />
          </div>
        </div>
      </div>
    </>
  );
}

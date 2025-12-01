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
      name: "Rajasthan",
      item: "https://amalegalsolutions.com/services/banking-and-finance/rajasthan",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Rajasthan: Financing the Land of Kings",
  description:
    "Expert legal consultancy for banking and finance services in Rajasthan. Assistance with NBFC registration in Jaipur, tourism finance, and solar project lending compliance.",
  image: "https://amalegalsolutions.com/services/banking-finance-rajasthan.png",
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
  name: "Banking and Finance Legal Services Rajasthan",
  image: "https://amalegalsolutions.com/services/banking-finance-rajasthan.png",
  description:
    "Premier legal consultancy for the banking and finance sector in Jaipur, Jodhpur, and across Rajasthan.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "920",
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
        name: "Vikram Singh",
      },
      reviewBody:
        "AMA Legal Solutions guided us through the complex process of securing project finance for our solar park in Bhadla. Their expertise in renewable energy regulations is impressive.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Meera Jain",
      },
      reviewBody:
        "We needed assistance with NBFC registration in Jaipur. The team at AMA Legal was professional, efficient, and handled all the RBI correspondence seamlessly.",
    },
  ],
};

export default function RajasthanBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "rajasthan-advantage", title: "The Rajasthan Advantage" },
    { id: "jaipur-hub", title: "Jaipur: The Financial Hub" },
    { id: "financial-services", title: "Key Financial Services" },
    { id: "nbfc-landscape", title: "NBFC Registration & Compliance" },
    { id: "tourism-finance", title: "Tourism & Hospitality Finance" },
    { id: "renewable-energy", title: "Renewable Energy Finance" },
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
    { label: "Rajasthan", href: "/services/banking-and-finance/rajasthan" },
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
              Premier <span className="text-[#D2A02A]">Banking and Finance Services</span> in Rajasthan
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Financing the Land of Kings. From Solar Parks in Jodhpur to Heritage Hotels in Udaipur, we are your trusted legal partners.
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
                    Financial Growth in the Land of Kings
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rajasthan, India's largest state by area, is undergoing a remarkable economic transformation. Known globally for its rich heritage and tourism, the state is now emerging as a leader in renewable energy, mining, and textiles. This shift is driving a robust demand for sophisticated banking and financial services. Jaipur, the capital, serves as the financial nerve center, while cities like Jodhpur, Udaipur, and Kota are developing into significant regional hubs.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The state's financial ecosystem is diverse, ranging from large public sector banks financing solar parks to Non-Banking Financial Companies (NBFCs) providing credit to MSMEs and artisans. The government's focus on "Invest Rajasthan" has further catalyzed the entry of private equity and venture capital into the state. However, this growth comes with its own set of regulatory complexities, including compliance with RBI norms and state-specific laws like the Rajasthan Protection of Interests of Depositors Act.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we offer specialized legal consultancy tailored to Rajasthan's unique economic landscape. Whether you are an NBFC looking to register in Jaipur, a developer seeking project finance for a solar plant in Bhadla, or a hotelier in Udaipur needing debt restructuring, our team provides expert guidance to ensure your financial operations are legally sound and commercially viable.
                  </p>
                </section>

                {/* Rajasthan Advantage */}
                <section id="rajasthan-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Rajasthan Advantage: A Land of Opportunity
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rajasthan offers a compelling mix of traditional strengths and modern opportunities for the financial services sector.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Solar Energy Hub</h3>
                      <p className="text-gray-700">
                        With the highest solar radiation in India, Rajasthan is the top destination for solar power projects. This creates massive demand for green finance and infrastructure lending.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Tourism & Hospitality</h3>
                      <p className="text-gray-700">
                        The thriving tourism industry requires constant capital for hotel construction, renovation, and heritage conservation, offering a steady market for lenders.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Mineral Wealth</h3>
                      <p className="text-gray-700">
                        As a leading producer of marble, granite, and zinc, the mining sector drives demand for equipment finance and working capital.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">MSME & Handicrafts</h3>
                      <p className="text-gray-700">
                        Jaipur's gems and jewelry, Sanganer's textiles, and Jodhpur's furniture industries are export-oriented and rely heavily on trade finance and export credit.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Jaipur Hub */}
                <section id="jaipur-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Jaipur: The Financial Hub
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Jaipur is not just a tourist destination; it is the administrative and financial capital of Rajasthan. It hosts the Regional Office of the Reserve Bank of India (RBI) and the Registrar of Companies (ROC).
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist financial entities in Jaipur with:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Regulatory Liaison:</strong> Facilitating smooth communication with RBI and ROC officials for approvals and filings.</li>
                    <li><strong>Headquarters Setup:</strong> Legal support for establishing corporate offices, including lease agreements and labor law compliance.</li>
                    <li><strong>Fintech Innovation:</strong> Advising the growing number of fintech startups in the city on digital lending guidelines and data privacy.</li>
                  </ul>
                </section>

                {/* Key Financial Services */}
                <section id="financial-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Key Financial Services in Demand
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The diverse economy of Rajasthan drives demand for a wide range of financial services. We provide specialized legal support for:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        NBFCs play a crucial role in financing commercial vehicles and small businesses. We handle the end-to-end registration process with the RBI.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        Popular in semi-urban areas for promoting savings. We assist in incorporation and ensure compliance with Nidhi Rules, 2014.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Microfinance Institutions (MFIs)</h3>
                      <p className="text-gray-700">
                        Providing small loans to women entrepreneurs and artisans. We help MFIs navigate the regulatory landscape and ensure fair practices.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Finance</h3>
                      <p className="text-gray-700">
                        Structuring complex loan agreements for large-scale solar and wind energy projects, ensuring bankability and risk mitigation.
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
                    Establishing an NBFC in Rajasthan requires strict adherence to RBI norms. The RBI Regional Office in Jaipur oversees the jurisdiction for the state.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Registration Roadmap</h3>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                      <li><strong>Incorporation:</strong> Register a company with the ROC Jaipur. The MoA must clearly state financial activities as the main object.</li>
                      <li><strong>Net Owned Fund (NOF):</strong> Maintain a minimum NOF of ₹2 Crore (or ₹10 Crore as per latest scale-based regulations) in a bank deposit.</li>
                      <li><strong>Director Due Diligence:</strong> Ensure directors meet the 'Fit and Proper' criteria, with clean CIBIL records and no criminal history.</li>
                      <li><strong>COSMOS Application:</strong> File the application online via the RBI's COSMOS portal, uploading all necessary documents.</li>
                      <li><strong>Physical Submission:</strong> Submit the hard copy of the application to the DNBS at the RBI Regional Office in Jaipur.</li>
                      <li><strong>Query Resolution:</strong> Respond promptly to any queries raised by the RBI during the scrutiny process.</li>
                    </ol>
                  </div>
                </section>

                {/* Tourism Finance */}
                <section id="tourism-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Tourism & Hospitality Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Tourism is the backbone of Rajasthan's economy. Financing hotels, resorts, and heritage properties involves unique legal considerations.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We advise lenders and borrowers on:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Property Due Diligence:</strong> Verifying land titles, especially for heritage properties which may have complex ownership histories.</li>
                    <li><strong>Loan Structuring:</strong> Designing loan products with seasonal repayment schedules to match tourism cash flows.</li>
                    <li><strong>Conversion of Land:</strong> Ensuring compliance with land conversion laws (agricultural to commercial) for hotel projects.</li>
                    <li><strong>Debt Restructuring:</strong> Assisting hotels in restructuring loans during lean periods or economic downturns.</li>
                  </ul>
                </section>

                {/* Renewable Energy */}
                <section id="renewable-energy" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Renewable Energy Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rajasthan is leading India's solar revolution. Financing these projects requires specialized legal expertise.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist in:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Power Purchase Agreements (PPAs):</strong> Reviewing and negotiating PPAs with DISCOMs or private off-takers to ensure revenue security.</li>
                    <li><strong>Land Acquisition:</strong> Legal due diligence for large tracts of land required for solar parks, ensuring no litigation or encroachment.</li>
                    <li><strong>Regulatory Compliance:</strong> Ensuring adherence to RERC (Rajasthan Electricity Regulatory Commission) regulations.</li>
                    <li><strong>Project Finance Documentation:</strong> Drafting common loan agreements, escrow agreements, and substitution agreements.</li>
                  </ul>
                </section>

                {/* Regulatory Framework */}
                <section id="regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Navigating the Regulatory Framework
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Operating in Rajasthan means adhering to a multi-layered regulatory structure.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Reserve Bank of India (RBI):</strong> The Jaipur Regional Office is the primary regulator for banking and non-banking financial activities.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Registrar of Companies (ROC):</strong> The ROC Jaipur oversees corporate compliance for all companies registered in the state.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>State Laws:</strong> The Rajasthan Protection of Interests of Depositors (in Financial Establishments) Act, 2005, is strictly enforced.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>RERA Rajasthan:</strong> For housing finance companies, compliance with RERA norms is essential for project approvals.
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
                    Ensure your financial entity in Rajasthan stays compliant with this checklist:
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>ROC Filings:</strong> Annual returns (MGT-7) and financial statements (AOC-4) filed with ROC Jaipur.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>RBI Returns:</strong> Timely submission of NBS returns via COSMOS.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>KYC/AML:</strong> Strict adherence to KYC norms and reporting to FIU-IND.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>State Act Compliance:</strong> Ensuring no violation of the Rajasthan Protection of Interests of Depositors Act.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Fair Practices Code:</strong> Displaying the code in Hindi/English at all branches.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Grievance Redressal:</strong> Appointing a Nodal Officer and displaying their contact details.</li>
                    </ul>
                  </div>
                </section>

                {/* Challenges & Solutions */}
                <section id="challenges-solutions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Common Challenges & Our Solutions
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We help you overcome specific regional hurdles.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Heritage Property Titles</h3>
                        <p className="text-gray-700">Financing heritage hotels is risky due to unclear land titles and succession issues.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We conduct deep-dive title searches and family settlement verifications to ensure clear ownership before financing.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Solar Land Acquisition</h3>
                        <p className="text-gray-700">Acquiring large land parcels for solar parks often faces local resistance and regulatory hurdles.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We assist in the legal process of land acquisition, ensuring compliance with state land ceiling acts and rehabilitation policies.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Nidhi Company Operations</h3>
                        <p className="text-gray-700">Nidhi companies often face scrutiny for expanding beyond their district limits.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We advise on branch expansion rules and ensure strict adherence to the district-level operational limits as per Nidhi Rules.</p>
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
                    We combine national expertise with local insights to deliver superior legal services.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Regional Insight</h3>
                      <p className="text-gray-600">Deep understanding of the Rajasthan regulatory landscape and business environment.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">☀️</div>
                      <h3 className="font-bold text-xl mb-2">Sector Expertise</h3>
                      <p className="text-gray-600">Specialized knowledge in Solar, Tourism, and Mining finance.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Proactive Compliance</h3>
                      <p className="text-gray-600">We help you stay ahead of regulatory changes, minimizing legal risks.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Rajasthan</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions guided us through the complex process of securing project finance for our solar park in Bhadla. Their expertise in renewable energy regulations is impressive. We couldn't have done it without them."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Singh</p>
                          <p className="text-sm text-gray-500">Jodhpur, Rajasthan</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We needed assistance with NBFC registration in Jaipur. The team at AMA Legal was professional, efficient, and handled all the RBI correspondence seamlessly. Highly recommended for financial legal services."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Meera Jain</p>
                          <p className="text-sm text-gray-500">Jaipur, Rajasthan</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Financial Journey in Rajasthan</h2>
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
                      Expert Legal Guidance • Jaipur • Jodhpur • Udaipur
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
                    Consult with our banking law experts in Rajasthan today.
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

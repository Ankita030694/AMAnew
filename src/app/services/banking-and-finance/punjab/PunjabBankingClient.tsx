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
      name: "Punjab",
      item: "https://amalegalsolutions.com/services/banking-and-finance/punjab",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Punjab: Empowering the Granary of India",
  description:
    "Expert legal consultancy for banking and finance services in Punjab. Assistance with NBFC registration in Ludhiana, agricultural finance, and NRI investment services.",
  image: "https://amalegalsolutions.com/services/banking-finance-punjab.png",
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
      url: "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
    },
  },
  datePublished: "2024-11-27",
  dateModified: "2024-11-27",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Banking and Finance Legal Services Punjab",
  image: "https://amalegalsolutions.com/services/banking-finance-punjab.png",
  description:
    "Premier legal consultancy for the banking and finance sector in Ludhiana, Jalandhar, and across Punjab.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "950",
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
        name: "Gurpreet Singh",
      },
      reviewBody:
        "AMA Legal Solutions helped us set up our Nidhi Company in Jalandhar. Their knowledge of the Nidhi Rules and local compliance requirements is excellent.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Raman Kapoor",
      },
      reviewBody:
        "We needed legal advice for our textile export business in Ludhiana regarding forex regulations. AMA Legal provided clear and actionable guidance.",
    },
  ],
};

export default function PunjabBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "punjab-advantage", title: "The Punjab Advantage" },
    { id: "ludhiana-hub", title: "Ludhiana: The Industrial Hub" },
    { id: "financial-services", title: "Key Financial Services" },
    { id: "nbfc-landscape", title: "NBFC Registration & Compliance" },
    { id: "agri-finance", title: "Agricultural & Rural Finance" },
    { id: "nri-services", title: "NRI Financial Services" },
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
    { label: "Punjab", href: "/services/banking-and-finance/punjab" },
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
              Premier <span className="text-[#D2A02A]">Banking and Finance Services</span> in Punjab
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Empowering the Granary of India. From Agri-Finance in Bhatinda to Industrial Credit in Ludhiana, we are your trusted legal partners.
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
                    Financial Growth in the Land of Five Rivers
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Punjab, known as the "Granary of India," is a state with a robust economy built on a strong agricultural foundation and a thriving MSME sector. Cities like Ludhiana, Jalandhar, and Amritsar are industrial powerhouses, driving demand for diverse financial services ranging from working capital for textile mills to export credit for light engineering goods. The state also has a unique financial landscape influenced by a large Non-Resident Indian (NRI) population, creating significant inflows of remittances and investments.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The financial sector in Punjab is characterized by a dense network of public sector banks, a vibrant cooperative banking system, and a growing number of Non-Banking Financial Companies (NBFCs) catering to the last-mile credit needs of farmers and small businesses. However, navigating the regulatory environment requires a deep understanding of RBI guidelines, FEMA regulations for NRI transactions, and state-specific laws like the Punjab Protection of Interests of Depositors Act.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we provide comprehensive legal consultancy tailored to the dynamic economy of Punjab. Whether you are an NBFC looking to set up operations in Ludhiana, an NRI seeking advice on property investment finance, or an agri-fintech startup, our team ensures your business is compliant, secure, and positioned for growth.
                  </p>
                </section>

                {/* Punjab Advantage */}
                <section id="punjab-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Punjab Advantage: A Hub of Enterprise
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Punjab offers a unique blend of agricultural prosperity and industrial entrepreneurship, creating a fertile ground for financial services.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">MSME Powerhouse</h3>
                      <p className="text-gray-700">
                        Ludhiana is a global hub for bicycles and textiles, while Jalandhar is famous for sports goods. These industries require constant working capital and trade finance solutions.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Agricultural Wealth</h3>
                      <p className="text-gray-700">
                        With high agricultural yields, there is a massive market for crop loans, tractor finance, and warehousing receipt financing.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">NRI Investment</h3>
                      <p className="text-gray-700">
                        The strong diaspora connection leads to high remittance inflows and demand for NRI banking services, including NRE/NRO accounts and property management.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Infrastructure Growth</h3>
                      <p className="text-gray-700">
                        Developing industrial corridors and smart cities like Ludhiana and Amritsar are driving demand for infrastructure project finance.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Ludhiana Hub */}
                <section id="ludhiana-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ludhiana: The Manchester of India
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Ludhiana is the industrial capital of Punjab. It is home to thousands of small and medium enterprises that form the backbone of the state's economy.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist financial entities in Ludhiana with:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>SME Lending:</strong> Structuring loan products tailored for the cyclical nature of the textile and bicycle industries.</li>
                    <li><strong>Export Finance:</strong> Legal support for pre-shipment and post-shipment credit documentation for exporters.</li>
                    <li><strong>Debt Recovery:</strong> Efficient recovery of dues through the MSME Samadhaan portal and other legal mechanisms.</li>
                  </ul>
                </section>

                {/* Key Financial Services */}
                <section id="financial-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Key Financial Services in Demand
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The diverse economic landscape of Punjab drives demand for specialized financial services. We provide comprehensive legal support for:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        NBFCs are vital for bridging the credit gap in semi-urban areas. We handle registration and compliance with the RBI Regional Office in Chandigarh.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        Popular in rural Punjab for encouraging savings. We assist in incorporation and ensure adherence to the strict Nidhi Rules, 2014.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Cooperative Societies</h3>
                      <p className="text-gray-700">
                        Punjab has a strong cooperative movement. We advise on the legal framework for credit cooperative societies under the State Cooperative Societies Act.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Forex Services</h3>
                      <p className="text-gray-700">
                        Given the high volume of international travel and remittances, we assist in obtaining FFMC (Full Fledged Money Changer) licenses from the RBI.
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
                    Establishing an NBFC in Punjab involves navigating the RBI's regulations. The RBI Regional Office in Chandigarh oversees the jurisdiction for Punjab.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Registration Roadmap</h3>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                      <li><strong>Incorporation:</strong> Register a company with the ROC Chandigarh. The MoA must clearly state financial activities as the main object.</li>
                      <li><strong>Net Owned Fund (NOF):</strong> Maintain a minimum NOF of ₹2 Crore (or ₹10 Crore as per latest norms) in a bank deposit.</li>
                      <li><strong>Director Due Diligence:</strong> Ensure directors meet the 'Fit and Proper' criteria, with no history of financial irregularity.</li>
                      <li><strong>COSMOS Application:</strong> File the application online via the RBI's COSMOS portal, uploading all necessary documents.</li>
                      <li><strong>Physical Submission:</strong> Submit the hard copy of the application to the DNBS at the RBI Regional Office in Chandigarh.</li>
                      <li><strong>Query Resolution:</strong> Respond promptly to any queries raised by the RBI during the scrutiny process.</li>
                    </ol>
                  </div>
                </section>

                {/* Agri Finance */}
                <section id="agri-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Agricultural & Rural Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Agriculture is the lifeblood of Punjab. Financing this sector involves unique legal challenges, including the role of Arhtiyas (commission agents).
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We advise on:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Kisan Credit Card (KCC):</strong> Ensuring compliance with RBI guidelines for crop loans and interest subvention schemes.</li>
                    <li><strong>Warehousing Receipts:</strong> Legal due diligence for lending against Negotiable Warehouse Receipts (NWRs) to prevent fraud.</li>
                    <li><strong>Contract Farming:</strong> Drafting agreements between farmers and corporate buyers under the Punjab Contract Farming Act.</li>
                    <li><strong>Debt Relief Acts:</strong> Navigating the Punjab Agricultural Indebtedness (Relief) Act during recovery proceedings.</li>
                  </ul>
                </section>

                {/* NRI Services */}
                <section id="nri-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    NRI Financial Services
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    With a large diaspora in Canada, UK, and USA, NRI financial services are a major sector in Punjab.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist in:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>FEMA Compliance:</strong> Ensuring all cross-border transactions comply with the Foreign Exchange Management Act.</li>
                    <li><strong>Property Investment:</strong> Legal due diligence for NRIs investing in agricultural or commercial land in Punjab.</li>
                    <li><strong>Repatriation of Funds:</strong> Assisting in the legal process of repatriating sale proceeds of assets held in India.</li>
                    <li><strong>NRE/NRO Accounts:</strong> Advising on the correct classification and operation of bank accounts for NRIs.</li>
                  </ul>
                </section>

                {/* Regulatory Framework */}
                <section id="regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Navigating the Regulatory Framework
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Operating in Punjab means adhering to a multi-layered regulatory structure.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Reserve Bank of India (RBI):</strong> The Chandigarh Regional Office is the primary regulator for banking and non-banking financial activities in Punjab.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Registrar of Companies (ROC):</strong> The ROC Chandigarh oversees corporate compliance for companies registered in Punjab, Haryana, and Chandigarh.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>State Laws:</strong> The Punjab Protection of Interests of Depositors (in Financial Establishments) Act is strictly enforced.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>RERA Punjab:</strong> For housing finance companies, compliance with RERA norms is essential for project approvals.
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
                    Ensure your financial entity in Punjab stays compliant with this checklist:
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>ROC Filings:</strong> Annual returns (MGT-7) and financial statements (AOC-4) filed with ROC Chandigarh.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>RBI Returns:</strong> Timely submission of NBS returns via COSMOS.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>KYC/AML:</strong> Strict adherence to KYC norms and reporting to FIU-IND.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>State Act Compliance:</strong> Ensuring no violation of the Punjab Protection of Interests of Depositors Act.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Fair Practices Code:</strong> Displaying the code in Punjabi/English at all branches.</li>
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
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Agricultural Debt Recovery</h3>
                        <p className="text-gray-700">Recovering loans from farmers is sensitive and legally complex due to debt relief acts.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We advise on amicable settlement strategies and the use of arbitration for faster dispute resolution, respecting local sensitivities.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: NRI Documentation</h3>
                        <p className="text-gray-700">Verifying documents executed abroad (Power of Attorney) can be tricky.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We ensure all foreign documents are properly notarized and apostilled as per the Hague Convention to be valid in Indian courts.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Illegal Deposits</h3>
                        <p className="text-gray-700">Unregulated deposit schemes are a major issue, leading to strict regulatory scrutiny.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We conduct compliance audits to ensure your deposit-taking activities (if any) are fully authorized and compliant with the Banning of Unregulated Deposit Schemes Act.</p>
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
                      <p className="text-gray-600">Deep understanding of the Punjab regulatory landscape and business environment.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌾</div>
                      <h3 className="font-bold text-xl mb-2">Sector Expertise</h3>
                      <p className="text-gray-600">Specialized knowledge in Agriculture, MSME, and NRI finance.</p>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Punjab</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions helped us set up our Nidhi Company in Jalandhar. Their knowledge of the Nidhi Rules and local compliance requirements is excellent. We are now operating successfully across the district."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">G</div>
                        <div>
                          <p className="font-bold text-gray-900">Gurpreet Singh</p>
                          <p className="text-sm text-gray-500">Jalandhar, Punjab</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We needed legal advice for our textile export business in Ludhiana regarding forex regulations. AMA Legal provided clear and actionable guidance, helping us streamline our international payments."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Raman Kapoor</p>
                          <p className="text-sm text-gray-500">Ludhiana, Punjab</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Financial Journey in Punjab</h2>
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
                      Expert Legal Guidance • Ludhiana • Jalandhar • Amritsar
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
                    Consult with our banking law experts in Punjab today.
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

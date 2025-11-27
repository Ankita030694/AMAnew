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
      name: "Uttar Pradesh",
      item: "https://amalegalsolutions.com/services/banking-and-finance/uttar-pradesh",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Uttar Pradesh: Fueling the Engine of New India",
  description:
    "Expert legal consultancy for banking and finance services in Uttar Pradesh. Assistance with NBFC registration in Noida, ODOP finance, and infrastructure project lending.",
  image: "https://amalegalsolutions.com/services/banking-finance-uttar-pradesh.png",
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
  name: "Banking and Finance Legal Services Uttar Pradesh",
  image: "https://amalegalsolutions.com/services/banking-finance-uttar-pradesh.png",
  description:
    "Premier legal consultancy for the banking and finance sector in Noida, Lucknow, Kanpur, and across Uttar Pradesh.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "980",
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
        name: "Amit Gupta",
      },
      reviewBody:
        "AMA Legal Solutions provided exceptional guidance for our fintech startup in Noida. Their understanding of digital lending regulations and RBI compliance is top-notch.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Suresh Yadav",
      },
      reviewBody:
        "We received excellent support for securing ODOP finance for our brassware export unit in Moradabad. The team helped us navigate the subsidy schemes and bank documentation effortlessly.",
    },
  ],
};

export default function UttarPradeshBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "up-advantage", title: "The Uttar Pradesh Advantage" },
    { id: "noida-hub", title: "Noida: The Fintech City" },
    { id: "financial-services", title: "Key Financial Services" },
    { id: "nbfc-landscape", title: "NBFC Registration & Compliance" },
    { id: "odop-finance", title: "ODOP & MSME Finance" },
    { id: "infrastructure-finance", title: "Infrastructure Project Finance" },
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
    { label: "Uttar Pradesh", href: "/services/banking-and-finance/uttar-pradesh" },
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
              Premier <span className="text-[#D2A02A]">Banking and Finance Services</span> in Uttar Pradesh
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Fueling the Engine of New India. From Fintech in Noida to ODOP Finance in Varanasi, we are your trusted legal partners.
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
                    Financial Growth in India's Most Populous State
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh is on an ambitious journey to become a trillion-dollar economy. With a massive consumer base, rapid infrastructure development, and a thriving MSME sector, the state offers immense opportunities for the banking and finance industry. Noida has emerged as a major fintech hub, rivaling Bangalore and Gurgaon, while traditional industrial centers like Kanpur, Agra, and Moradabad continue to drive demand for trade finance and working capital.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The state's financial landscape is diverse, supported by a strong network of public sector banks, Regional Rural Banks (RRBs), and a growing presence of Non-Banking Financial Companies (NBFCs) and Microfinance Institutions (MFIs). The government's flagship One District One Product (ODOP) scheme has further catalyzed credit flow to artisanal clusters. However, operating in this dynamic environment requires navigating complex regulations, including RBI norms and state-specific laws like the Uttar Pradesh Protection of Interest of Depositors Act.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we offer specialized legal consultancy tailored to Uttar Pradesh's unique economic ecosystem. Whether you are a fintech startup in Noida, an MFI expanding in rural UP, or an infrastructure developer seeking project finance for an expressway, our team provides expert guidance to ensure your financial operations are legally sound and commercially successful.
                  </p>
                </section>

                {/* UP Advantage */}
                <section id="up-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Uttar Pradesh Advantage: A Land of Potential
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh offers a compelling mix of scale, policy support, and infrastructure growth for the financial services sector.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Fintech Ecosystem</h3>
                      <p className="text-gray-700">
                        Noida is home to major digital payment and lending companies, creating a vibrant ecosystem for fintech innovation and investment.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">MSME & ODOP</h3>
                      <p className="text-gray-700">
                        With the highest number of MSMEs in India, the state offers a massive market for business loans, supply chain finance, and export credit.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Infrastructure Boom</h3>
                      <p className="text-gray-700">
                        Massive projects like the Ganga Expressway, Jewar Airport, and Defense Corridor drive demand for large-ticket project finance.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Financial Inclusion</h3>
                      <p className="text-gray-700">
                        A large rural population presents a significant opportunity for microfinance institutions and banking correspondents to expand financial access.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Noida Hub */}
                <section id="noida-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Noida: The Fintech City
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Noida has transformed into a premier destination for financial technology companies. Its proximity to Delhi and robust infrastructure make it an ideal base for startups and established players alike.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist fintech entities in Noida with:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Digital Lending Compliance:</strong> Ensuring adherence to RBI's digital lending guidelines, including LSP (Lending Service Provider) agreements.</li>
                    <li><strong>Data Privacy:</strong> Implementing robust data protection frameworks compliant with the DPDP Act.</li>
                    <li><strong>Payment Aggregator Licenses:</strong> Assisting in the application process for PA/PG authorization from the RBI.</li>
                  </ul>
                </section>

                {/* Key Financial Services */}
                <section id="financial-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Key Financial Services in Demand
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The diverse economy of Uttar Pradesh drives demand for a wide range of financial services. We provide specialized legal support for:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        NBFCs are crucial for credit delivery in tier-2 cities. We handle registration and compliance with the RBI Regional Offices in Kanpur and Lucknow.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Microfinance Institutions (MFIs)</h3>
                      <p className="text-gray-700">
                        Empowering women and rural entrepreneurs. We help MFIs navigate the regulatory landscape, ensuring fair interest rates and recovery practices.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        Widely present in UP for promoting thrift. We assist in incorporation and ensure strict adherence to the Nidhi Rules, 2014.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Finance</h3>
                      <p className="text-gray-700">
                        Structuring complex loan agreements for infrastructure projects, ensuring bankability and risk mitigation for lenders and developers.
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
                    Establishing an NBFC in Uttar Pradesh requires strict adherence to RBI norms. The RBI has Regional Offices in Kanpur and Lucknow overseeing the state.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Registration Roadmap</h3>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                      <li><strong>Incorporation:</strong> Register a company with the ROC Kanpur. The MoA must clearly state financial activities as the main object.</li>
                      <li><strong>Net Owned Fund (NOF):</strong> Maintain a minimum NOF of ₹2 Crore (or ₹10 Crore as per latest scale-based regulations) in a bank deposit.</li>
                      <li><strong>Director Due Diligence:</strong> Ensure directors meet the 'Fit and Proper' criteria, with clean CIBIL records and no criminal history.</li>
                      <li><strong>COSMOS Application:</strong> File the application online via the RBI's COSMOS portal, uploading all necessary documents.</li>
                      <li><strong>Physical Submission:</strong> Submit the hard copy of the application to the DNBS at the relevant RBI Regional Office.</li>
                      <li><strong>Query Resolution:</strong> Respond promptly to any queries raised by the RBI during the scrutiny process.</li>
                    </ol>
                  </div>
                </section>

                {/* ODOP Finance */}
                <section id="odop-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ODOP & MSME Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The One District One Product (ODOP) scheme is a game-changer for UP's MSMEs. Financing these units involves specific schemes and subsidies.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We advise on:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Subsidy Claims:</strong> Legal assistance in claiming margin money subsidies under PMEGP and ODOP schemes.</li>
                    <li><strong>Export Credit:</strong> Structuring pre-shipment and post-shipment credit for export-oriented units in Moradabad (Brass), Varanasi (Silk), and Agra (Leather).</li>
                    <li><strong>Cluster Financing:</strong> Designing credit products tailored to specific industrial clusters.</li>
                    <li><strong>Debt Restructuring:</strong> Assisting MSMEs in restructuring loans under RBI's MSME restructuring frameworks.</li>
                  </ul>
                </section>

                {/* Infrastructure Finance */}
                <section id="infrastructure-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Infrastructure Project Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    UP is witnessing an infrastructure revolution. Financing these mega-projects requires specialized legal expertise.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist in:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Concession Agreements:</strong> Reviewing and negotiating concession agreements for PPP projects.</li>
                    <li><strong>Land Acquisition:</strong> Legal due diligence for land acquisition, ensuring compliance with the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act.</li>
                    <li><strong>Escrow Mechanisms:</strong> Drafting and managing escrow agreements to ensure transparent fund utilization.</li>
                    <li><strong>Regulatory Clearances:</strong> Ensuring all environmental and regulatory clearances are in place before financial closure.</li>
                  </ul>
                </section>

                {/* Regulatory Framework */}
                <section id="regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Navigating the Regulatory Framework
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Operating in Uttar Pradesh means adhering to a multi-layered regulatory structure.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Reserve Bank of India (RBI):</strong> The Kanpur and Lucknow Regional Offices are the primary regulators for banking and non-banking financial activities.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Registrar of Companies (ROC):</strong> The ROC Kanpur oversees corporate compliance for all companies registered in the state.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>State Laws:</strong> The Uttar Pradesh Protection of Interest of Depositors in Financial Establishments Act, 2016, is strictly enforced.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>RERA UP:</strong> For housing finance companies, compliance with UP RERA norms is essential for project approvals.
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
                    Ensure your financial entity in Uttar Pradesh stays compliant with this checklist:
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>ROC Filings:</strong> Annual returns (MGT-7) and financial statements (AOC-4) filed with ROC Kanpur.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>RBI Returns:</strong> Timely submission of NBS returns via COSMOS.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>KYC/AML:</strong> Strict adherence to KYC norms and reporting to FIU-IND.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>State Act Compliance:</strong> Ensuring no violation of the UP Protection of Interest of Depositors Act.</li>
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
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Land Records Digitization</h3>
                        <p className="text-gray-700">While improving, land records in some rural areas can still be fragmented, complicating mortgage creation.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We conduct thorough physical verification and cross-referencing with revenue records (Bhulekh) to ensure clear title.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: MFI Recovery Issues</h3>
                        <p className="text-gray-700">Political intervention and local unrest can sometimes hamper MFI loan recoveries.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We advise on community engagement strategies and strictly legal recovery processes to mitigate reputational risk.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Digital Fraud</h3>
                        <p className="text-gray-700">Rising cybercrime in the fintech space requires robust legal safeguards.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We help draft comprehensive user agreements and advise on cyber insurance and reporting protocols.</p>
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
                      <p className="text-gray-600">Deep understanding of the UP regulatory landscape and business environment.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="font-bold text-xl mb-2">Sector Expertise</h3>
                      <p className="text-gray-600">Specialized knowledge in Fintech, MSME, and Infrastructure finance.</p>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Uttar Pradesh</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions provided exceptional guidance for our fintech startup in Noida. Their understanding of digital lending regulations and RBI compliance is top-notch. They helped us scale with confidence."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amit Gupta</p>
                          <p className="text-sm text-gray-500">Noida, Uttar Pradesh</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We received excellent support for securing ODOP finance for our brassware export unit in Moradabad. The team helped us navigate the subsidy schemes and bank documentation effortlessly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh Yadav</p>
                          <p className="text-sm text-gray-500">Moradabad, Uttar Pradesh</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Financial Journey in UP</h2>
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
                      Expert Legal Guidance • Noida • Lucknow • Kanpur
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
                    Consult with our banking law experts in Uttar Pradesh today.
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
                      <Link href="/services/company-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Company Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/trademark-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Trademark Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/gst-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> GST Registration
                      </Link>
                    </li>
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

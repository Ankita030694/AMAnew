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
      name: "Odisha",
      item: "https://amalegalsolutions.com/services/banking-and-finance/odisha",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Odisha: Fueling the Industrial East",
  description:
    "Expert legal consultancy for banking and finance services in Odisha. Assistance with NBFC registration in Bhubaneswar, mining finance, and port-led infrastructure lending.",
  image: "https://amalegalsolutions.com/services/banking-finance-odisha.png",
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
  name: "Banking and Finance Legal Services Odisha",
  image: "https://amalegalsolutions.com/services/banking-finance-odisha.png",
  description:
    "Premier legal consultancy for the banking and finance sector in Bhubaneswar, Cuttack, and across Odisha.",
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
        name: "Sanjay Mohanty",
      },
      reviewBody:
        "AMA Legal Solutions provided invaluable assistance in structuring the consortium loan for our steel ancillary unit in Kalinganagar. Their knowledge of mining finance is top-notch.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Priya Das",
      },
      reviewBody:
        "We successfully registered our Microfinance NBFC in Bhubaneswar with their help. They guided us through the entire RBI process and Mission Shakti compliance.",
    },
  ],
};

export default function OdishaBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "odisha-advantage", title: "The Odisha Advantage" },
    { id: "bhubaneswar-hub", title: "Bhubaneswar: The Smart Financial Hub" },
    { id: "financial-services", title: "Key Financial Services" },
    { id: "nbfc-landscape", title: "NBFC Registration & Compliance" },
    { id: "mining-finance", title: "Mining & Industrial Finance" },
    { id: "microfinance-shg", title: "Microfinance & Mission Shakti" },
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
    { label: "Odisha", href: "/services/banking-and-finance/odisha" },
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
              Premier <span className="text-[#D2A02A]">Banking and Finance Services</span> in Odisha
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Fueling the Industrial East. From Mining Finance in Kalinganagar to Microfinance for SHGs, we are your trusted legal partners.
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
                    Financial Growth in the Soul of India
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha is rapidly transforming into the industrial powerhouse of Eastern India. With its vast mineral reserves, strategic coastline, and proactive governance, the state is attracting massive investments in steel, aluminum, petrochemicals, and logistics. Bhubaneswar, the capital and a leading Smart City, is emerging as a vibrant financial and IT hub, while Cuttack remains a key commercial center.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The financial landscape of Odisha is diverse, ranging from large-scale project finance for mega-industries to a robust microfinance network empowered by the state's "Mission Shakti" initiative for Women Self-Help Groups (SHGs). Non-Banking Financial Companies (NBFCs) are playing a pivotal role in bridging the credit gap for MSMEs and rural communities.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand the unique dynamics of Odisha's economy. Whether you are a mining conglomerate seeking syndicated loans, a logistics company expanding at Paradip Port, or an NBFC looking to register in Bhubaneswar, our team provides specialized legal consultancy to ensure your financial operations are seamless, compliant, and successful.
                  </p>
                </section>

                {/* Odisha Advantage */}
                <section id="odisha-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Odisha Advantage: Resources & Resilience
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha's strategic location and resource richness create a fertile ground for diverse financial activities.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Mineral Wealth</h3>
                      <p className="text-gray-700">
                        Home to India's largest reserves of iron ore and bauxite, driving demand for heavy industrial finance and equipment leasing.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Port-Led Development</h3>
                      <p className="text-gray-700">
                        Paradip, Dhamra, and Gopalpur ports are hubs for logistics finance, trade credit, and export-import funding.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Mission Shakti</h3>
                      <p className="text-gray-700">
                        A revolutionary movement empowering 70 lakh women through SHGs, creating a massive market for microfinance institutions.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Smart City Hub</h3>
                      <p className="text-gray-700">
                        Bhubaneswar's status as a top Smart City attracts fintech startups and investments in urban infrastructure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Bhubaneswar Hub */}
                <section id="bhubaneswar-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Bhubaneswar: The Smart Financial Hub
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Bhubaneswar is the nerve center of Odisha's financial activities. It hosts the Regional Office of the Reserve Bank of India (RBI) and the headquarters of major state corporations.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist financial entities in Bhubaneswar with:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Regulatory Approvals:</strong> Liaising with RBI and SEBI officials for licenses and compliance filings.</li>
                    <li><strong>Corporate Governance:</strong> Legal support for board meetings, secretarial audits, and ROC filings in Cuttack.</li>
                    <li><strong>Fintech Setup:</strong> Advising startups at O-Hub on regulations, funding rounds, and intellectual property.</li>
                  </ul>
                </section>

                {/* Key Financial Services */}
                <section id="financial-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Key Financial Services in Demand
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha's industrial and rural economy drives demand for specialized financial services. We provide expert legal support for:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Mining & Industrial Finance</h3>
                      <p className="text-gray-700">
                        Structuring syndicated loans and working capital limits for steel, aluminum, and power plants in Angul, Jharsuguda, and Kalinganagar.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">NBFC & Microfinance</h3>
                      <p className="text-gray-700">
                        Registration and compliance for NBFC-MFIs focusing on financial inclusion and SHG lending.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Logistics & Trade Finance</h3>
                      <p className="text-gray-700">
                        Legal documentation for ship financing, warehousing loans, and letter of credit facilities for exporters.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        Incorporation and compliance for Nidhi companies serving the savings needs of local communities.
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
                    Establishing an NBFC in Odisha requires navigating the RBI's stringent norms. The RBI Regional Office in Bhubaneswar is the controlling authority.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Registration Roadmap</h3>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                      <li><strong>Incorporation:</strong> Register a company with the ROC (Cuttack). The MoA must explicitly state financial activities.</li>
                      <li><strong>Net Owned Fund (NOF):</strong> Maintain a minimum NOF of ₹2 Crore (or ₹10 Crore as per new norms) in a fixed deposit.</li>
                      <li><strong>Director Vetting:</strong> Ensure all directors meet the 'Fit and Proper' criteria with clean financial records.</li>
                      <li><strong>COSMOS Application:</strong> Submit the application online via the RBI's COSMOS portal with all required annexures.</li>
                      <li><strong>Physical Submission:</strong> Submit the hard copy to the DNBS at the RBI Regional Office in Bhubaneswar.</li>
                      <li><strong>Clarifications:</strong> Proactively address any queries raised by the RBI during the due diligence process.</li>
                    </ol>
                  </div>
                </section>

                {/* Mining Finance */}
                <section id="mining-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Mining & Industrial Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The mining sector is capital-intensive and highly regulated. Financing projects here involves complex legal structures.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We advise lenders and borrowers on:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Mining Lease Compliance:</strong> Ensuring valid mining leases and environmental clearances as prerequisites for loan disbursement.</li>
                    <li><strong>Equipment Leasing:</strong> Drafting agreements for the leasing of heavy earthmoving machinery (HEMM).</li>
                    <li><strong>Consortium Lending:</strong> Structuring multi-bank consortiums for large-scale steel and power projects.</li>
                    <li><strong>Rehabilitation & Resettlement (R&R):</strong> Verifying compliance with R&R policies to mitigate social risks affecting project viability.</li>
                  </ul>
                </section>

                {/* Microfinance SHG */}
                <section id="microfinance-shg" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Microfinance & Mission Shakti
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha is a pioneer in the SHG movement. Financing SHGs under Mission Shakti is a major business for MFIs and banks.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist in:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>MFI Registration:</strong> Registering NBFC-MFIs with the RBI and ensuring compliance with interest rate caps.</li>
                    <li><strong>Portfolio Buyouts:</strong> Structuring direct assignment and securitization deals for MFI portfolios.</li>
                    <li><strong>Fair Practices:</strong> Ensuring strict adherence to the RBI's Fair Practices Code to prevent coercive recovery methods.</li>
                    <li><strong>Digital Lending:</strong> Advising on the legal framework for digital lending apps targeting rural borrowers.</li>
                  </ul>
                </section>

                {/* Regulatory Framework */}
                <section id="regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Navigating the Regulatory Framework
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Operating in Odisha involves compliance with central and state-specific regulations.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Reserve Bank of India (RBI):</strong> The Bhubaneswar Regional Office regulates all banking and NBFC activities.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Registrar of Companies (ROC):</strong> The ROC office in Cuttack handles corporate compliance and filings.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>State Laws:</strong> The Odisha Protection of Interests of Depositors (in Financial Establishments) Act, 2011, is strictly enforced to curb Ponzi schemes.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Pollution Control Board:</strong> Consent to Establish/Operate from OSPCB is mandatory for industrial projects seeking finance.
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
                    Stay compliant with Odisha's financial regulations:
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>ROC Filings:</strong> Annual returns (MGT-7) and financial statements (AOC-4) filed with ROC Cuttack.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>RBI Returns:</strong> Timely submission of DNBS returns via COSMOS.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>KYC/AML:</strong> Robust KYC procedures and reporting to FIU-IND.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>PID Act:</strong> Ensuring no violation of the Odisha Protection of Interests of Depositors Act.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>MFI Compliance:</strong> Adhering to margin caps and qualifying assets norms for MFIs.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Grievance Redressal:</strong> Displaying the Grievance Redressal Officer's details prominently.</li>
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
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Land Acquisition Issues</h3>
                        <p className="text-gray-700">Industrial projects often face delays due to land acquisition and forest clearance issues, stalling finance.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We conduct deep due diligence on land titles and forest rights to ensure the project is bankable.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Chit Fund Stigma</h3>
                        <p className="text-gray-700">Past scams have led to strict scrutiny of deposit-taking entities by state authorities.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We ensure your business model is transparent and fully compliant with the PID Act to build trust with regulators.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Cyclone Risks</h3>
                        <p className="text-gray-700">Coastal infrastructure projects are prone to cyclone damage, affecting insurance and loan covenants.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We advise on comprehensive insurance coverage and force majeure clauses in loan agreements.</p>
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
                    We combine national expertise with a deep understanding of Odisha's industrial landscape.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏭</div>
                      <h3 className="font-bold text-xl mb-2">Industrial Focus</h3>
                      <p className="text-gray-600">Expertise in Mining, Steel, and Port infrastructure finance.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Local Liaison</h3>
                      <p className="text-gray-600">Strong network with regulatory bodies in Bhubaneswar and Cuttack.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Compliance First</h3>
                      <p className="text-gray-600">We ensure your business is shielded from legal risks under state acts.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Odisha</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions provided invaluable assistance in structuring the consortium loan for our steel ancillary unit in Kalinganagar. Their knowledge of mining finance is top-notch."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sanjay Mohanty</p>
                          <p className="text-sm text-gray-500">Jajpur, Odisha</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We successfully registered our Microfinance NBFC in Bhubaneswar with their help. They guided us through the entire RBI process and Mission Shakti compliance."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Das</p>
                          <p className="text-sm text-gray-500">Bhubaneswar, Odisha</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Financial Journey in Odisha</h2>
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
                      Expert Legal Guidance • Bhubaneswar • Cuttack • Rourkela
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
                    Consult with our banking law experts in Odisha today.
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

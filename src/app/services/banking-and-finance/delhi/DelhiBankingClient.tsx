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
      item: "https://www.amalegalsolutions.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.amalegalsolutions.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banking and Finance",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Delhi",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance/delhi",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Delhi: The Capital Advantage",
  description:
    "Comprehensive legal guide for banking and finance services in Delhi. Expert assistance for NBFC registration, Microfinance, and Fintech compliance in the National Capital Region.",
  image: "https://www.amalegalsolutions.com/services/banking-finance-delhi.png",
  author: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    url: "https://www.amalegalsolutions.com",
  },
  publisher: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
    },
  },
  datePublished: "2024-11-27",
  dateModified: "2024-11-27",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Banking and Finance Legal Services Delhi",
  image: "https://www.amalegalsolutions.com/services/banking-finance-delhi.png",
  description:
    "Premier legal consultancy for the banking and finance sector in New Delhi.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1450",
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
        name: "Rajiv Malhotra",
      },
      reviewBody:
        "Setting up our Fintech startup in Connaught Place was complex, but AMA Legal Solutions handled the RBI compliance perfectly. Highly recommended for Delhi businesses.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Meera Singh",
      },
      reviewBody:
        "Their expertise in NBFC registration with the ROC Delhi is impressive. We got our license without any hassle thanks to their diligent documentation.",
    },
  ],
};

export default function DelhiBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "capital-advantage", title: "The Capital Advantage" },
    { id: "types-of-entities", title: "Types of Financial Entities" },
    { id: "nbfc-registration", title: "NBFC Registration Process" },
    { id: "microfinance", title: "Microfinance in Delhi" },
    { id: "fintech-hub", title: "Delhi NCR: Fintech Hub" },
    { id: "regulatory-compliance", title: "Regulatory Compliance" },
    { id: "documents-required", title: "Documents Required" },
    { id: "challenges-solutions", title: "Challenges & Solutions" },
    { id: "why-choose-us", title: "Why Choose AMA Legal" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking and Finance", href: "/services/banking-and-finance" },
    { label: "Delhi", href: "/services/banking-and-finance/delhi" },
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
              Premier <span className="text-[#D2A02A]">Banking and Finance Services</span> in Delhi
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Empowering financial growth in the National Capital. From NBFC licensing to Fintech regulations, we provide expert legal guidance in New Delhi and NCR.
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
                    Financial Leadership in the National Capital
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Delhi is not just the political capital of India; it is a major hub of economic activity and financial innovation. As the seat of the central government and home to key regulatory bodies like the Ministry of Finance and the regional headquarters of the Reserve Bank of India (RBI), Delhi offers a strategic advantage for banking and financial service providers. The National Capital Region (NCR), encompassing Delhi, Gurgaon, and Noida, has evolved into a premier destination for Fintech startups, Non-Banking Financial Companies (NBFCs), and global financial institutions.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, operating in the heart of the nation's regulatory landscape requires strict compliance. The scrutiny here is rigorous, and the standards are high. At AMA Legal Solutions, we assist you in navigating the complex legal framework of Delhi. Whether you are a startup in Connaught Place looking to register an NBFC or a multinational corporation in Aerocity seeking regulatory approvals, our specialized legal team ensures your journey is smooth, compliant, and successful.
                  </p>
                </section>

                {/* Capital Advantage */}
                <section id="capital-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Strategic Advantage of Delhi NCR
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Establishing a financial business in Delhi offers strategic benefits that are distinct from other cities in India.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Policy Proximity</h3>
                      <p className="text-gray-700">
                        Being physically close to the Ministry of Corporate Affairs (MCA) at Shastri Bhawan and the RBI Regional Office on Sansad Marg allows for faster liaisoning, quicker dispute resolution, and immediate access to regulatory updates.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Tech & Talent Ecosystem</h3>
                      <p className="text-gray-700">
                        The NCR region is a hub for skilled talent from premier institutes like IIT Delhi and FMS. This availability of skilled finance and tech professionals is crucial for modern fintech and banking operations.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Connectivity & Infrastructure</h3>
                      <p className="text-gray-700">
                        With world-class infrastructure like the Delhi Metro and T3 Airport, Delhi serves as the perfect operational hub for businesses looking to serve the entire North Indian market.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Investor Access</h3>
                      <p className="text-gray-700">
                        Delhi NCR is home to a vast network of Angel Investors, Venture Capitalists, and Private Equity firms, making capital raising significantly easier for compliant financial entities.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Types of Entities */}
                <section id="types-of-entities" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Structuring Your Financial Business in Delhi
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Selecting the correct legal structure is paramount. In Delhi, the following entities are most prevalent in the financial sector:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        The key to credit access. NBFCs in Delhi cater to diverse sectors from MSME financing to vehicle loans. They require compulsory registration with the RBI and a minimum Net Owned Fund.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Microfinance Institutions (Section 8)</h3>
                      <p className="text-gray-700">
                        Ideal for social impact. Many Delhi-based NGOs opt for the Section 8 Company model to provide micro-credit to the urban poor and semi-urban populations in the NCR fringe areas, benefiting from certain RBI exemptions.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        A mutual benefit society model. Nidhi companies are popular in Delhi's local communities for cultivating the habit of thrift and savings among members. They are regulated by the MCA and do not need an RBI license.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Advisory Firms</h3>
                      <p className="text-gray-700">
                        With Delhi's high HNI population, wealth management is booming. These firms must register with SEBI as Registered Investment Advisors (RIAs) to legally offer financial advice.
                      </p>
                    </div>
                  </div>
                </section>

                {/* NBFC Registration */}
                <section id="nbfc-registration" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    NBFC Registration Process: The Delhi Route
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registering an NBFC in Delhi involves a dual-interface process with the Registrar of Companies (ROC) Delhi and the RBI. Here is how we navigate it:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Company Incorporation (ROC Delhi)</h3>
                        <p className="text-gray-700">
                          We incorporate your company as a Private or Public Limited entity with the ROC Delhi. The MOA must explicitly state the financial activities as the main object.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Capitalization (NOF)</h3>
                        <p className="text-gray-700">
                          We assist in opening a bank account to deposit the minimum Net Owned Fund (typically ₹2 Crore or ₹10 Crore). A fixed deposit receipt and a 'No Lien' certificate from the banker are obtained.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">RBI Application (COSMOS)</h3>
                        <p className="text-gray-700">
                          We file the application on the RBI's COSMOS portal. This requires precise data entry regarding the company's management, auditors, and business plan.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Physical Dossier Submission</h3>
                        <p className="text-gray-700">
                          The physical application set is submitted to the **Department of Non-Banking Supervision (DNBS)** at the RBI Regional Office, Sansad Marg, New Delhi.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">5</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Liaison & Approval</h3>
                        <p className="text-gray-700">
                          Our team handles all queries raised by the RBI officers during the scrutiny phase. Once satisfied, the RBI issues the Certificate of Registration (CoR).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Microfinance */}
                <section id="microfinance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Microfinance in Delhi: Empowering the Grassroots
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Delhi has a significant population of migrant workers and small street vendors who lack access to formal banking. Microfinance Institutions (MFIs) play a vital role here.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">The Section 8 Advantage</h3>
                    <p className="text-green-800 mb-4">
                      Registering as a Section 8 Company is the fastest way to start micro-lending in Delhi.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Cost-Effective:</strong> No requirement for the high ₹5 Crore capital needed for NBFC-MFIs.</li>
                      <li><strong>Simplified Compliance:</strong> Exempted from full RBI registration if the loan portfolio is below ₹100 Crore and no public deposits are taken.</li>
                      <li><strong>Donor Appeal:</strong> The non-profit status attracts CSR funds and grants from international organizations based in Delhi.</li>
                    </ul>
                  </div>
                </section>

                {/* Fintech Hub */}
                <section id="fintech-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Delhi NCR: The Fintech Innovation Hub
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From digital payments to algorithmic trading, Delhi NCR is leading the Fintech sector. However, innovation must operate within regulatory boundaries.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">P2P Lending</h3>
                      <p className="text-gray-600">Platforms connecting borrowers and lenders must obtain an NBFC-P2P license. We ensure your platform's architecture complies with RBI's escrow and data norms.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">Payment Aggregators</h3>
                      <p className="text-gray-600">If you are handling funds for merchants, the RBI's Payment Aggregator (PA) license is mandatory. We guide you through the rigorous net-worth and tech-audit requirements.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">Digital Lending Apps (DLAs)</h3>
                      <p className="text-gray-600">With the RBI's crackdown on illegal apps, compliance with the Digital Lending Guidelines 2022 is critical. We audit your loan journey, key fact statements (KFS), and grievance mechanisms.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">Cryptocurrency & Web3</h3>
                      <p className="text-gray-600">While the landscape is evolving, we provide advisory on the tax implications (VDA tax) and Anti-Money Laundering (AML) compliance for crypto-assets.</p>
                    </div>
                  </div>
                </section>

                {/* Regulatory Compliance */}
                <section id="regulatory-compliance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Staying Compliant in the Capital
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In Delhi, regulatory oversight is active and stringent. Non-compliance can lead to heavy penalties or license cancellation.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>FIU Reporting:</strong> All financial entities must register with the Financial Intelligence Unit - India (FIU-IND), headquartered in New Delhi, and file Suspicious Transaction Reports (STRs).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>ROC Filings:</strong> Annual returns (MGT-7, AOC-4) must be filed timely with the ROC Delhi to avoid director disqualification.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>CERSAI Registration:</strong> For secured loans, registration of security interest with CERSAI (Central Registry) is mandatory.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Secretarial Audits:</strong> Regular audits by Company Secretaries to ensure adherence to the Companies Act and other applicable laws.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Documents Required */}
                <section id="documents-required" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Documentation Checklist for Delhi
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Prepare these documents to ensure a smooth registration process with Delhi authorities.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Company Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Certificate of Incorporation (ROC Delhi)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> MOA & AOA with Financial Objects</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Registered Office Proof (Delhi Address)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Board Resolutions</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Director & Financials</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Director KYC (PAN, Aadhar, DIN)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Experience Certificates in Finance</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Clean CIBIL Reports</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Fixed Deposit Receipt for NOF</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Banker's Certificate</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Challenges & Solutions */}
                <section id="challenges-solutions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Overcoming Regulatory Hurdles
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We anticipate the roadblocks in Delhi's regulatory environment and clear them for you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Strict 'Fit and Proper' Scrutiny</h3>
                        <p className="text-gray-700">The RBI Delhi office is extremely thorough in reviewing directors. Any past financial irregularity can lead to rejection.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We conduct a pre-filing due diligence of all directors to identify and mitigate potential red flags.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Office Address Verification</h3>
                        <p className="text-gray-700">ROC Delhi often conducts physical verification of registered offices. Virtual offices can be a risk.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We advise on maintaining a compliant physical presence with all statutory registers and nameplates as per law.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Delay in Police Clearance</h3>
                        <p className="text-gray-700">For certain licenses like Money Lending, police verification in Delhi can be time-consuming.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: Our local team follows up diligently with the concerned departments to expedite the process.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why AMA Legal Solutions in Delhi?
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are not just consultants; we are your legal partners in the National Capital.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                      <p className="text-gray-600">Deep familiarity with the working of ROC Delhi, RBI New Delhi, and local courts.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Comprehensive Service</h3>
                      <p className="text-gray-600">From company formation to obtaining complex financial licenses and handling litigation.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Client Centric</h3>
                      <p className="text-gray-600">Tailored solutions for startups, SMEs, and large corporations in the Delhi NCR region.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Delhi</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Setting up our Fintech startup in Connaught Place was complex, but AMA Legal Solutions handled the RBI compliance perfectly. Highly recommended for Delhi businesses."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajiv Malhotra</p>
                          <p className="text-sm text-gray-500">Connaught Place, New Delhi</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Their expertise in NBFC registration with the ROC Delhi is impressive. We got our license without any hassle thanks to their diligent documentation."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Meera Singh</p>
                          <p className="text-sm text-gray-500">South Extension, New Delhi</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Financial Journey in Delhi</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Navigate the capital's financial landscape with confidence. Partner with Delhi's trusted banking legal experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book a Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Expert Legal Guidance • Delhi NCR
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Legal Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our banking law experts in New Delhi today.
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

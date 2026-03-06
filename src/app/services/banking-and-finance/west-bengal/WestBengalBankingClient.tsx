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
      name: "West Bengal",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance/west-bengal",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in West Bengal: Gateway to East India",
  description:
    "Comprehensive legal guide for banking and finance services in West Bengal. Expert assistance for NBFC registration, Nidhi Companies, and Money Lending licenses in Kolkata.",
  image: "https://www.amalegalsolutions.com/services/banking-finance-west-bengal.png",
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
  name: "Banking and Finance Legal Services West Bengal",
  image: "https://www.amalegalsolutions.com/services/banking-finance-west-bengal.png",
  description:
    "Premier legal consultancy for the banking and finance sector in Kolkata, West Bengal.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
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
        name: "Amitava Ghosh",
      },
      reviewBody:
        "AMA Legal Solutions provided excellent guidance for our Nidhi Company registration in Kolkata. Their knowledge of the local ROC requirements saved us a lot of time.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Soma Banerjee",
      },
      reviewBody:
        "We needed a Money Lending License in Howrah, and their team handled the entire process with the district authorities smoothly. Highly professional service.",
    },
  ],
};

export default function WestBengalBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "kolkata-hub", title: "Kolkata: Financial Hub of the East" },
    { id: "types-of-entities", title: "Types of Financial Entities" },
    { id: "nbfc-registration", title: "NBFC Registration Process" },
    { id: "nidhi-companies", title: "Nidhi Companies in West Bengal" },
    { id: "money-lending-act", title: "West Bengal Money Lenders Act" },
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
    { label: "West Bengal", href: "/services/banking-and-finance/west-bengal" },
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
              Expert <span className="text-[#D2A02A]">Banking and Finance Services</span> in West Bengal
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Your Gateway to Financial Services in East India. From NBFC Registration in Kolkata to Nidhi Company Compliance, we are your trusted legal partners.
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
                    Unlocking Financial Opportunities in West Bengal
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    West Bengal, strategically located as the gateway to Northeast India and Southeast Asia, holds a pivotal position in the country's financial landscape. Kolkata, the state capital, has a rich history of banking and commerce, being the birthplace of modern banking in India. Today, the state is witnessing a resurgence in financial activities, driven by a growing MSME sector, a vibrant startup ecosystem in Salt Lake Sector V, and a deep-rooted culture of savings and credit societies.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, navigating the regulatory environment in West Bengal requires specialized knowledge. The interplay between central regulations from the Reserve Bank of India (RBI) and state-specific laws like the West Bengal Money Lenders Act, 1940, creates a complex compliance matrix. At AMA Legal Solutions, we provide comprehensive legal support to financial entities looking to establish or expand their footprint in this dynamic market. Whether you are setting up an NBFC, a Nidhi Company, or a Microfinance Institution, our team in Kolkata ensures your business is built on a solid legal foundation.
                  </p>
                </section>

                {/* Kolkata Hub */}
                <section id="kolkata-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Kolkata: The Financial Heart of the East
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Kolkata is not just a cultural capital; it is the undisputed financial hub of Eastern India. The city offers unique advantages for banking and finance businesses.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Regulatory Presence</h3>
                      <p className="text-gray-700">
                        Kolkata houses the Regional Office of the RBI and the Registrar of Companies (ROC) for West Bengal. This proximity facilitates faster processing of applications and easier liaison for compliance matters.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">MSME Focus</h3>
                      <p className="text-gray-700">
                        West Bengal has one of the largest concentrations of MSMEs in India, particularly in leather, jute, and textiles. This creates a massive demand for credit and working capital, making it a prime market for NBFCs and lenders.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Microfinance Legacy</h3>
                      <p className="text-gray-700">
                        The state has a strong culture of microfinance, with successful models like Bandhan Bank originating here. The acceptance of micro-credit products among the rural population is high.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Fintech Growth</h3>
                      <p className="text-gray-700">
                        Salt Lake Sector V and New Town are emerging as fintech hubs, attracting startups focused on digital payments, wealth management, and insure-tech.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Types of Entities */}
                <section id="types-of-entities" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Structuring Your Financial Business
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Selecting the appropriate legal structure is critical for success. In West Bengal, the following entities are most prevalent:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        Regulated by the RBI, NBFCs are the primary engines of credit for the MSME sector in West Bengal. They require a minimum Net Owned Fund (NOF) and strict adherence to prudential norms.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        Extremely popular in West Bengal, Nidhi Companies are mutual benefit societies that lend only to members. They are regulated by the MCA and are ideal for community-based savings and lending.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Microfinance Institutions (Section 8)</h3>
                      <p className="text-gray-700">
                        Section 8 companies are widely used for micro-lending in rural Bengal. They offer a cost-effective way to start social impact lending without the high capital requirements of an NBFC.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Fintech Startups</h3>
                      <p className="text-gray-700">
                        Tech-driven financial services are gaining traction. These entities often operate as digital lenders (requiring NBFC license) or technology partners to established banks.
                      </p>
                    </div>
                  </div>
                </section>

                {/* NBFC Registration */}
                <section id="nbfc-registration" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    NBFC Registration Process in Kolkata
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registering an NBFC in West Bengal involves a structured process with the ROC Kolkata and the RBI. Here is our roadmap:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Company Incorporation</h3>
                        <p className="text-gray-700">
                          We incorporate your company as a Private or Public Limited entity with the ROC Kolkata. The MOA must explicitly state financial activities as the main object.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Capital Requirement (NOF)</h3>
                        <p className="text-gray-700">
                          The company must have a minimum Net Owned Fund of ₹2 Crore (or ₹10 Crore as per new guidelines). This capital is deposited in a bank account as a fixed deposit.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Online Application (COSMOS)</h3>
                        <p className="text-gray-700">
                          We file the application on the RBI's COSMOS portal, uploading the Certificate of Incorporation, business plan, and director details.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Physical Submission</h3>
                        <p className="text-gray-700">
                          The physical dossier is submitted to the **Department of Non-Banking Supervision (DNBS)** at the RBI Regional Office in Kolkata.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">5</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Scrutiny & Approval</h3>
                        <p className="text-gray-700">
                          We handle all queries from the RBI during the due diligence process. Upon satisfaction, the RBI grants the Certificate of Registration (CoR).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Nidhi Companies */}
                <section id="nidhi-companies" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Nidhi Companies: A Popular Choice in Bengal
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Nidhi Companies are a preferred model for small-scale lending in West Bengal due to their ease of formation and exemption from RBI licensing.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Key Requirements</h3>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Members:</strong> Must have at least 200 members within one year of incorporation.</li>
                      <li><strong>Net Owned Fund:</strong> Must maintain a minimum NOF of ₹10 Lakhs (or as prescribed).</li>
                      <li><strong>Deposit Ratio:</strong> The ratio of Net Owned Funds to Deposits must not exceed 1:20.</li>
                      <li><strong>Lending Limits:</strong> Loans can only be given to members against security (gold, property, deposits).</li>
                    </ul>
                  </div>
                </section>

                {/* Money Lending Act */}
                <section id="money-lending-act" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    West Bengal Money Lenders Act, 1940
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is a crucial piece of legislation for anyone engaged in money lending in the state. The Act aims to protect borrowers from predatory lending practices.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Important:</strong> Carrying on a money-lending business without a valid license is a punishable offense. The state government is vigilant against unlicensed lenders.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Key Provisions:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li><strong>Licensing:</strong> A license must be obtained from the competent authority (usually the Sub-Divisional Officer or District Magistrate).</li>
                    <li><strong>Interest Rates:</strong> The Act prescribes maximum rates of interest for secured and unsecured loans. Charging excess interest is illegal.</li>
                    <li><strong>Accounts:</strong> Lenders must maintain clear accounts and provide borrowers with statements of their loans.</li>
                    <li><strong>Penalties:</strong> Violation of the Act can lead to fines and imprisonment.</li>
                  </ul>
                </section>

                {/* Regulatory Compliance */}
                <section id="regulatory-compliance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ongoing Regulatory Compliance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Compliance is not a one-time event; it is a continuous obligation. We ensure your business stays on the right side of the law.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>ROC Filings:</strong> Annual filing of financial statements (AOC-4) and annual returns (MGT-7) with ROC Kolkata is mandatory for all companies.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>RBI Returns:</strong> NBFCs must file periodic returns (NBS-1, NBS-2, etc.) regarding their financial health and deposits.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Nidhi Compliance:</strong> Nidhi companies must file NDH-1 (Return of Statutory Compliances) and NDH-3 (Half-yearly Return) with the ROC.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>FIU Reporting:</strong> Reporting suspicious transactions to the Financial Intelligence Unit (FIU-IND) is required under PMLA.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Documents Required */}
                <section id="documents-required" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Documentation Checklist
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Having the right documents is essential for a smooth registration process in West Bengal.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Corporate Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Certificate of Incorporation (ROC Kolkata)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> MOA & AOA</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Board Resolution</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Registered Office Proof (West Bengal)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Financials & KYC</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Fixed Deposit Receipt (NOF)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Banker's Report</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Director KYC (PAN, Aadhar)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> CIBIL Reports of Directors</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Educational Certificates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Challenges & Solutions */}
                <section id="challenges-solutions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Overcoming Challenges
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We help you navigate the specific challenges of the West Bengal financial market.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Nidhi Company Scrutiny</h3>
                        <p className="text-gray-700">The government has increased scrutiny on Nidhi companies to prevent fraud. Compliance with NDH-4 form is critical.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We ensure your Nidhi company meets all 'Fit and Proper' criteria and file NDH-4 accurately to secure your status.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Money Lending License</h3>
                        <p className="text-gray-700">Obtaining a license under the 1940 Act can be bureaucratic and time-consuming.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: Our local liaison team works closely with district authorities to expedite your license application.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: RBI Due Diligence</h3>
                        <p className="text-gray-700">The RBI Kolkata office is thorough in its background checks of directors.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We conduct a pre-application audit of your directors' profiles to identify and resolve any potential issues.</p>
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
                    We combine legal expertise with a deep understanding of West Bengal's business ecosystem.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏙️</div>
                      <h3 className="font-bold text-xl mb-2">Kolkata Presence</h3>
                      <p className="text-gray-600">Strong network with local authorities, ROC Kolkata, and RBI Regional Office.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Regulatory Experts</h3>
                      <p className="text-gray-600">Specialized team for NBFCs, Nidhi Companies, and Money Lending laws.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Client Focused</h3>
                      <p className="text-gray-600">Tailored solutions for startups and established financial firms in West Bengal.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from West Bengal</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions provided excellent guidance for our Nidhi Company registration in Kolkata. Their knowledge of the local ROC requirements saved us a lot of time."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amitava Ghosh</p>
                          <p className="text-sm text-gray-500">Salt Lake, Kolkata</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We needed a Money Lending License in Howrah, and their team handled the entire process with the district authorities smoothly. Highly professional service."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Soma Banerjee</p>
                          <p className="text-sm text-gray-500">Howrah, West Bengal</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Financial Business in Kolkata</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Navigate the regulatory landscape with confidence. Partner with West Bengal's trusted banking legal experts.
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
                      Expert Legal Guidance • Kolkata & West Bengal
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
                    Consult with our banking law experts in Kolkata today.
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

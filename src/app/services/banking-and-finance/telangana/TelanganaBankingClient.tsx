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
      name: "Telangana",
      item: "https://amalegalsolutions.com/services/banking-and-finance/telangana",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Telangana: Hyderabad's Fintech Revolution",
  description:
    "Comprehensive legal guide for banking and finance services in Telangana. Expert assistance for NBFC registration, Fintech compliance, and Money Lending licenses in Hyderabad and T-Hub.",
  image: "https://amalegalsolutions.com/services/banking-finance-telangana.png",
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
  name: "Banking and Finance Legal Services Telangana",
  image: "https://amalegalsolutions.com/services/banking-finance-telangana.png",
  description:
    "Premier legal consultancy for the banking and finance sector in Hyderabad, Telangana.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1120",
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
        name: "Srinivas Rao",
      },
      reviewBody:
        "AMA Legal Solutions helped us navigate the complex NBFC registration process in Hyderabad. Their understanding of the local ROC and RBI requirements is exceptional.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Kavitha Reddy",
      },
      reviewBody:
        "As a fintech startup in T-Hub, we needed precise legal advice on digital lending. AMA Legal provided clear, actionable guidance that kept us compliant.",
    },
  ],
};

export default function TelanganaBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "hyderabad-fintech", title: "Hyderabad: The Fintech Hub" },
    { id: "types-of-entities", title: "Types of Financial Entities" },
    { id: "nbfc-registration", title: "NBFC Registration Process" },
    { id: "microfinance", title: "Microfinance in Telangana" },
    { id: "money-lending-act", title: "Telangana Money Lending Act" },
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
    { label: "Telangana", href: "/services/banking-and-finance/telangana" },
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
              Expert <span className="text-[#D2A02A]">Banking and Finance Services</span> in Telangana
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Fueling Hyderabad's Fintech Revolution. From NBFC Registration to T-Hub Compliance, we are your trusted legal partners in Telangana.
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
                    Navigating the Financial Landscape of Telangana
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Telangana, with Hyderabad as its capital, has rapidly emerged as a global technology and financial hub. The state's progressive policies, coupled with a robust ecosystem of incubators like T-Hub and WE-Hub, have created a strong environment for banking and financial services. From traditional Non-Banking Financial Companies (NBFCs) to cutting-edge Fintech startups, the opportunities are immense. However, this growth is underpinned by a stringent regulatory framework involving the Reserve Bank of India (RBI), the Securities and Exchange Board of India (SEBI), and specific state legislations like the Telangana Money Lending Act.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand the Telangana financial sector. We specialize in guiding businesses through the regulatory requirements, ensuring that your venture is not only compliant but also positioned for sustainable growth. Whether you are a startup in Hitech City or an established financial firm in Banjara Hills, our expertise covers every aspect of banking and finance law in the state.
                  </p>
                </section>

                {/* Hyderabad Fintech Hub */}
                <section id="hyderabad-fintech" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Hyderabad: The Fintech Innovation Capital
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Hyderabad is not just competing; it is leading in financial innovation. The city's unique ecosystem offers several strategic advantages for financial businesses.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">T-Hub Ecosystem</h3>
                      <p className="text-gray-700">
                        As India's largest innovation campus, T-Hub provides Fintech startups with direct access to mentorship, funding, and corporate partnerships. We help you leverage these resources while ensuring legal compliance.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Regulatory Sandbox Access</h3>
                      <p className="text-gray-700">
                        With the RBI and IRDAI (headquartered in Hyderabad) promoting regulatory sandboxes, local startups have a unique opportunity to test innovative products in a controlled environment.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">State Incentives</h3>
                      <p className="text-gray-700">
                        The Telangana government offers attractive incentives including seed grants, recruitment assistance, and reimbursement of patent costs, making it cost-effective to set up operations here.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Talent Pool</h3>
                      <p className="text-gray-700">
                        Home to premier institutes like IIIT-Hyderabad and ISB, the city offers a rich talent pool of engineers and management professionals essential for modern financial services.
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
                    Choosing the right legal structure is key to your business. In Telangana, the following entities are most common:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        Regulated by the RBI, NBFCs are the primary vehicle for lending and investment activities. They require a minimum Net Owned Fund (NOF) and strict adherence to prudential norms.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Microfinance Institutions (Section 8)</h3>
                      <p className="text-gray-700">
                        Popular among social entrepreneurs, Section 8 companies can provide micro-credit to low-income groups without full NBFC registration, provided they meet specific asset and deposit criteria.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Fintech Companies</h3>
                      <p className="text-gray-700">
                        These technology-driven entities may operate as digital lenders (requiring NBFC license), payment aggregators (requiring RBI authorization), or technology service providers (TSPs) to banks.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        Mutual benefit societies that lend only to members. They are regulated by the MCA and are a viable option for community-based savings and lending in Telangana's districts.
                      </p>
                    </div>
                  </div>
                </section>

                {/* NBFC Registration */}
                <section id="nbfc-registration" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    NBFC Registration Process in Telangana
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registering an NBFC involves a rigorous process with the Registrar of Companies (ROC) Hyderabad and the RBI. Here is our step-by-step approach:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Company Incorporation</h3>
                        <p className="text-gray-700">
                          We incorporate your company as a Private or Public Limited entity with the ROC Hyderabad. The MOA must clearly state financial activities as the main object.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Minimum Capital (NOF)</h3>
                        <p className="text-gray-700">
                          The company must have a minimum Net Owned Fund of ₹2 Crore (or ₹10 Crore as per new guidelines). This amount must be deposited in a bank account as a fixed deposit.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Online Application (COSMOS)</h3>
                        <p className="text-gray-700">
                          We file the application on the RBI's COSMOS portal, submitting the Certificate of Incorporation, business plan, and director details.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Physical Submission</h3>
                        <p className="text-gray-700">
                          The physical dossier is submitted to the **Department of Non-Banking Supervision (DNBS)** at the RBI Regional Office in Saifabad, Hyderabad.
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

                {/* Microfinance */}
                <section id="microfinance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Microfinance: Reaching the Last Mile
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Microfinance Institutions (MFIs) are crucial for financial inclusion in Telangana's rural and semi-urban areas.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Section 8 MFI Route</h3>
                    <p className="text-green-800 mb-4">
                      For those focused on social impact, the Section 8 Company model offers a streamlined path.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Lower Capital Barrier:</strong> No strict ₹5 Crore capital requirement like NBFC-MFIs.</li>
                      <li><strong>RBI Exemptions:</strong> Exempted from full registration if assets are &lt; ₹100 Crore and no public deposits are accepted.</li>
                      <li><strong>Compliance:</strong> Must still adhere to RBI's fair practices code and interest rate caps.</li>
                    </ul>
                  </div>
                </section>

                {/* Money Lending Act */}
                <section id="money-lending-act" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Telangana Money Lending Act Compliance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The state government strictly enforces the **Telangana Money Lending Act** to curb illegal lending practices. Compliance is mandatory for all money lenders.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Critical Warning:</strong> Operating without a valid Money Lending License is a cognizable offense in Telangana. The Revenue Department conducts regular raids to check for violations.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Key Provisions:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li><strong>Licensing:</strong> Must obtain a license from the Tahsildar of the respective Mandal.</li>
                    <li><strong>Interest Cap:</strong> Interest rates cannot exceed the maximum limit prescribed by the state government.</li>
                    <li><strong>Record Keeping:</strong> Mandatory maintenance of account books and issuance of receipts to debtors.</li>
                    <li><strong>Prohibition of Harassment:</strong> Strict penalties for molestation or harassment of borrowers for recovery.</li>
                  </ul>
                </section>

                {/* Regulatory Compliance */}
                <section id="regulatory-compliance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ongoing Regulatory Compliance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Staying compliant is an ongoing process. We ensure your business adheres to all statutory requirements.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>FIU-IND Registration:</strong> Mandatory registration with the Financial Intelligence Unit and filing of Suspicious Transaction Reports (STRs).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>RBI Returns:</strong> Timely filing of NBS returns regarding deposits, assets, and prudential norms.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>ROC Filings:</strong> Annual filing of financial statements (AOC-4) and annual returns (MGT-7) with ROC Hyderabad.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>CERSAI:</strong> Registration of security interest for all secured loans.
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
                    Ensure you have the following documents ready for a smooth registration process.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Corporate Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Certificate of Incorporation (ROC Hyderabad)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> MOA & AOA</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Board Resolution for Registration</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Registered Office Proof (Telangana)</li>
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
                    We help you navigate the common hurdles in Telangana's financial sector.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Digital Lending Compliance</h3>
                        <p className="text-gray-700">Fintechs often struggle with RBI's strict Digital Lending Guidelines regarding data privacy and loan disbursal.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We conduct comprehensive audits of your digital lending stack and user agreements to ensure full compliance.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Money Lending License Delays</h3>
                        <p className="text-gray-700">Obtaining a license from the Revenue Department can be time-consuming due to bureaucratic procedures.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: Our local team liaises effectively with the Tahsildar's office to expedite your application.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: 'Fit and Proper' Criteria</h3>
                        <p className="text-gray-700">RBI scrutiny of directors is intense. Any discrepancy can lead to rejection.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We perform a pre-application due diligence to ensure all directors meet the regulatory standards.</p>
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
                    We combine legal expertise with a deep understanding of Telangana's business ecosystem.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏙️</div>
                      <h3 className="font-bold text-xl mb-2">Hyderabad Presence</h3>
                      <p className="text-gray-600">Strong network with local authorities, ROC Hyderabad, and RBI Regional Office.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="font-bold text-xl mb-2">Fintech Specialists</h3>
                      <p className="text-gray-600">Dedicated team for Fintech regulations, digital lending, and data privacy laws.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Compliance First</h3>
                      <p className="text-gray-600">We prioritize long-term compliance to protect your business from regulatory risks.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Telangana</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions helped us navigate the complex NBFC registration process in Hyderabad. Their understanding of the local ROC and RBI requirements is exceptional."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Srinivas Rao</p>
                          <p className="text-sm text-gray-500">Banjara Hills, Hyderabad</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a fintech startup in T-Hub, we needed precise legal advice on digital lending. AMA Legal provided clear, actionable guidance that kept us compliant."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">K</div>
                        <div>
                          <p className="font-bold text-gray-900">Kavitha Reddy</p>
                          <p className="text-sm text-gray-500">Hitech City, Hyderabad</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Launch Your Financial Venture in Hyderabad</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Leverage our expertise to build a compliant and successful financial business in Telangana.
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
                      Trusted by 500+ Businesses • Hyderabad & Telangana
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
                    Consult with our banking law experts in Hyderabad today.
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

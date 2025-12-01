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
      name: "Maharashtra",
      item: "https://amalegalsolutions.com/services/banking-and-finance/Maharashtra",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Maharashtra: A Comprehensive Guide",
  description:
    "Complete guide to starting and operating banking and finance services in Maharashtra. Learn about NBFC registration, Microfinance, Fintech regulations, and legal compliance in Mumbai and Pune.",
  image: "https://amalegalsolutions.com/services/banking-finance.png",
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
  name: "Banking and Finance Legal Services Maharashtra",
  image: "https://amalegalsolutions.com/services/banking-finance.png",
  description:
    "Expert legal consultancy for banking and finance sector in Maharashtra.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1250",
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
        name: "Vikram Mehta",
      },
      reviewBody:
        "AMA Legal Solutions guided us seamlessly through the NBFC registration process in Mumbai. Their knowledge of RBI regulations is unmatched.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Anjali Deshpande",
      },
      reviewBody:
        "We set up our Microfinance Section 8 company in Pune with their help. Professional, timely, and very knowledgeable about state laws.",
    },
  ],
};

export default function MaharashtraBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "financial-hub", title: "Maharashtra: The Financial Hub" },
    { id: "types-of-entities", title: "Types of Financial Entities" },
    { id: "nbfc-registration", title: "NBFC Registration Process" },
    { id: "microfinance", title: "Microfinance Institutions" },
    { id: "fintech-landscape", title: "Fintech Landscape" },
    { id: "regulatory-compliance", title: "Regulatory Compliance" },
    { id: "money-lending-act", title: "Money Lending Act" },
    { id: "documents-required", title: "Documents Required" },
    { id: "challenges-solutions", title: "Challenges & Solutions" },
    { id: "why-choose-us", title: "Why Choose AMA Legal" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking and Finance", href: "/services/banking-and-finance" },
    { label: "Maharashtra", href: "/services/banking-and-finance/Maharashtra" },
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
              Expert <span className="text-[#D2A02A]">Banking and Finance Services</span> in Maharashtra
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Navigate the complex financial landscape of Mumbai and Pune with confidence. From NBFC registration to Fintech compliance, we are your trusted legal partners.
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
                    Establishing Financial Excellence in Maharashtra
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Maharashtra is a leader in India's financial ecosystem. With Mumbai as the nation's financial capital and Pune emerging as a dynamic fintech hub, the state offers significant opportunities for banking and financial service providers. However, entering this market requires more than just capital; it demands a thorough understanding of a multi-layered regulatory framework that spans central RBI mandates, SEBI regulations, and specific state-level legislations like the Maharashtra Money-Lending (Regulation) Act.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we specialize in guiding entrepreneurs, corporations, and foreign entities through the financial laws in Maharashtra. Whether you are looking to register a Non-Banking Financial Company (NBFC), set up a Microfinance Institution (MFI), or launch a Fintech startup, our expertise ensures that your foundation is legally sound and compliant from day one. We don't just handle paperwork; we help plan your entry into India's most competitive financial market.
                  </p>
                </section>

                {/* Financial Hub */}
                <section id="financial-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Maharashtra is the Heart of Indian Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The strategic importance of Maharashtra in the banking and finance sector is significant. It is not merely a location; it is an ecosystem focused on finance.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Regulatory Proximity</h3>
                      <p className="text-gray-700">
                        Being home to the headquarters of the Reserve Bank of India (RBI) and the Securities and Exchange Board of India (SEBI) in Mumbai means faster access to regulatory clarifications and a more direct line of communication for compliance matters.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Capital Markets</h3>
                      <p className="text-gray-700">
                        The presence of the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE) creates a vibrant environment for capital raising, investment banking, and securities trading.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Talent Pool</h3>
                      <p className="text-gray-700">
                        Maharashtra boasts a massive pool of chartered accountants, financial analysts, and legal experts, particularly in Mumbai and Pune, providing the human capital necessary to run complex financial operations.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Industrial Base</h3>
                      <p className="text-gray-700">
                        With a robust industrial belt stretching from Thane to Aurangabad, there is a constant, high demand for credit, working capital loans, and trade finance, creating a ready market for lenders.
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
                    Choosing the right legal structure is the first and most critical step. In Maharashtra, financial businesses typically take one of the following forms, each with its own regulatory implications.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        These are companies registered under the Companies Act, engaged in the business of loans and advances, acquisition of shares/stocks/bonds/debentures/securities issued by Government or local authority or other marketable securities. They are strictly regulated by the RBI.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Microfinance Institutions (MFIs)</h3>
                      <p className="text-gray-700">
                        These entities provide small loans to low-income individuals. They can be registered as NBFC-MFIs (regulated by RBI) or as Section 8 Companies (Non-profit) which enjoy certain exemptions if they stay below specific lending thresholds.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nidhi Companies</h3>
                      <p className="text-gray-700">
                        A Nidhi Company belongs to the non-banking finance sector and is recognized under section 406 of the Companies Act, 2013. Their core business is borrowing and lending money between their members. They are regulated by the Ministry of Corporate Affairs (MCA).
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Fintech Companies</h3>
                      <p className="text-gray-700">
                        These are technology-driven financial service providers. Depending on their model (Lending, Payments, Wealth Tech), they may need to register as NBFCs or obtain specific licenses like the Payment Aggregator (PA) license from RBI.
                      </p>
                    </div>
                  </div>
                </section>

                {/* NBFC Registration */}
                <section id="nbfc-registration" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    NBFC Registration Process in Maharashtra
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registering an NBFC is a rigorous process involving the RBI. Given that the RBI's central office is in Mumbai, the scrutiny is thorough. Here is the step-by-step procedure we assist you with:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Company Incorporation</h3>
                        <p className="text-gray-700">
                          Incorporate a Private Limited or Public Limited company under the Companies Act, 2013. The name should reflect the financial nature of the business (e.g., "Finance", "Investment", "Capital").
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Minimum Net Owned Funds (NOF)</h3>
                        <p className="text-gray-700">
                          Ensure the company has a minimum Net Owned Fund of ₹2 Crore (₹10 Crore for certain categories). This capital must be deposited in a bank account as a fixed deposit free from all liens.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Online Application (COSMOS)</h3>
                        <p className="text-gray-700">
                          File an online application with the RBI on its COSMOS portal. This involves submitting the Certificate of Incorporation, detailed business plan, and background information of all directors.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Physical Submission</h3>
                        <p className="text-gray-700">
                          Submit the hard copy of the application along with the demand draft and all supporting documents to the Regional Office of the Reserve Bank of India in Mumbai.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">5</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">RBI Scrutiny & License Grant</h3>
                        <p className="text-gray-700">
                          The RBI will conduct a due diligence check. They may ask for clarifications or additional documents. Upon satisfaction, the Certificate of Registration (CoR) is issued.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Microfinance */}
                <section id="microfinance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Starting a Microfinance Business: The Section 8 Route
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For social entrepreneurs in Maharashtra looking to empower rural or semi-urban communities without the high capital requirement of an NBFC, the Section 8 Company model is ideal.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Key Advantages</h3>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>No Minimum Capital:</strong> Unlike NBFCs, there is no strict ₹2 Crore requirement, though a healthy capital base is recommended for operations.</li>
                      <li><strong>RBI Exemption:</strong> If the company does not accept public deposits and its assets are below ₹100 Crore, it is exempted from full-fledged NBFC registration, simplifying compliance.</li>
                      <li><strong>Social Impact:</strong> Being a non-profit structure, it builds trust with beneficiaries and donors/investors focused on social impact.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    However, compliance is still key. Loans must be unsecured, tenure and interest rates must follow RBI's fair practice codes for micro-lending, and income generation limits for borrowers must be strictly observed.
                  </p>
                </section>

                {/* Fintech Landscape */}
                <section id="fintech-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Navigating the Fintech Revolution in Pune & Mumbai
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Maharashtra is the breeding ground for India's fintech innovation. But innovation often outpaces regulation, leading to legal grey areas. Whether you are building a Peer-to-Peer (P2P) lending platform, a digital wallet, or a neo-bank, regulatory adherence is non-negotiable.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">Digital Lending Guidelines</h3>
                      <p className="text-gray-600">Strict adherence to RBI's 2022 guidelines is mandatory. All loan disbursals and repayments must happen directly between the bank/NBFC account and the borrower, bypassing any pool accounts of the fintech.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">Data Localization</h3>
                      <p className="text-gray-600">All payment system data must be stored in India. We assist in auditing your IT infrastructure to ensure compliance with RBI's data storage norms.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">FLDG Arrangements</h3>
                      <p className="text-gray-600">First Loss Default Guarantee (FLDG) arrangements between fintechs and regulated entities are now regulated. We help draft agreements that stay within the permissible 5% cap.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">KYC Norms</h3>
                      <p className="text-gray-600">Implementing robust Video-KYC (V-CIP) processes that meet RBI standards is crucial for onboarding customers digitally.</p>
                    </div>
                  </div>
                </section>

                {/* Regulatory Compliance */}
                <section id="regulatory-compliance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ongoing Regulatory Compliance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registration is just the beginning. The real challenge lies in continuous compliance. In Maharashtra, the scrutiny is high.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>RBI Returns:</strong> NBFCs must file various periodic returns (NBS-1, NBS-2, etc.) regarding their deposits, prudential norms, and liquid assets.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>FIU-IND Reporting:</strong> Reporting suspicious transactions to the Financial Intelligence Unit (FIU) is mandatory under the Prevention of Money Laundering Act (PMLA).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Statutory Audits:</strong> Annual audits by qualified Chartered Accountants are required to ensure financial health and compliance with Companies Act and RBI directions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Fair Practices Code:</strong> Every financial institution must have a board-approved Fair Practices Code displayed on their website and premises, detailing grievance redressal mechanisms.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Money Lending Act */}
                <section id="money-lending-act" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Maharashtra Money-Lending (Regulation) Act, 2014
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is a critical piece of state legislation. If you are an individual or a firm planning to lend money in Maharashtra without being an NBFC or a Bank, you fall under this Act.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Warning:</strong> Operating without a license under this Act is a cognizable offense. The state government is extremely strict about curbing illegal money lending.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Key Provisions:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li><strong>Licensing:</strong> Mandatory license from the Assistant Registrar of Co-operative Societies of the district.</li>
                    <li><strong>Interest Rate Cap:</strong> You cannot charge interest higher than the maximum rate fixed by the State Government.</li>
                    <li><strong>Records:</strong> Strict maintenance of accounts and providing passbooks to debtors is compulsory.</li>
                    <li><strong>No Harassment:</strong> The Act specifically criminalizes the molestation or harassment of debtors for recovery.</li>
                  </ul>
                </section>

                {/* Documents Required */}
                <section id="documents-required" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Essential Documentation Checklist
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether applying for an NBFC license or a Money Lending License, having your paperwork in order is half the battle won.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Corporate Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Certificate of Incorporation (COI)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Memorandum (MOA) & Articles (AOA)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Board Resolution for registration</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Net Worth Certificates of Directors</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">KYC & Financials</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN & Aadhar of all Directors</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> CIBIL Reports of Directors</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Banker's Report</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Fixed Deposit Receipt (for NOF)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Educational Qualifications of Directors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Challenges & Solutions */}
                <section id="challenges-solutions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Common Challenges & Our Solutions
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    The path to establishing a financial business in Maharashtra can be challenging. We help you overcome these hurdles.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: High Rejection Rate of NBFC Applications</h3>
                        <p className="text-gray-700">The RBI rejects applications with vague business plans or unclear sources of funds.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We craft detailed, compliant business plans and ensure the 'Fit and Proper' criteria for directors are impeccably presented.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Complex Digital Lending Norms</h3>
                        <p className="text-gray-700">Fintechs often struggle to align their tech stack with RBI's lending guidelines.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: Our tech-legal team audits your app flow and agreements to ensure 100% compliance before you go live.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: State vs. Central Law Conflicts</h3>
                        <p className="text-gray-700">Confusion often arises between the Money Lending Act (State) and RBI Act (Central).</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We provide clear legal opinions on which specific laws apply to your business model to avoid regulatory overlap.</p>
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
                    In the competitive world of finance, you need a legal partner who understands both the law and the market.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Mumbai Presence</h3>
                      <p className="text-gray-600">Our physical presence in Mumbai allows us to effectively follow up with RBI and other regulatory bodies.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💼</div>
                      <h3 className="font-bold text-xl mb-2">Sector Expertise</h3>
                      <p className="text-gray-600">We don't just do general corporate law; we have a dedicated team for Banking, NBFCs, and Fintech regulations.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="font-bold text-xl mb-2">End-to-End Support</h3>
                      <p className="text-gray-600">From incorporation to license acquisition and ongoing compliance audits, we are with you at every step.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Maharashtra</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions guided us seamlessly through the NBFC registration process in Mumbai. Their knowledge of RBI regulations is unmatched."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Mehta</p>
                          <p className="text-sm text-gray-500">Mumbai</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We set up our Microfinance Section 8 company in Pune with their help. Professional, timely, and very knowledgeable about state laws."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anjali Deshpande</p>
                          <p className="text-sm text-gray-500">Pune</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your Financial Business?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let regulatory complexities hold you back. Let us build the legal foundation for your financial success in Maharashtra.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Start Your Registration
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Professional • Compliant • Efficient
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
                    Consult with our banking law experts in Mumbai today.
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

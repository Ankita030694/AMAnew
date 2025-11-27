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
      name: "Chandigarh",
      item: "https://amalegalsolutions.com/services/banking-and-finance/chandigarh",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Chandigarh: The Tri-City Financial Hub",
  description:
    "Expert legal consultancy for banking and finance services in Chandigarh. Assistance with NBFC registration, Wealth Management compliance, and financial regulations in the Tri-City area.",
  image: "https://amalegalsolutions.com/services/banking-finance-chandigarh.png",
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
  name: "Banking and Finance Legal Services Chandigarh",
  image: "https://amalegalsolutions.com/services/banking-finance-chandigarh.png",
  description:
    "Premier legal consultancy for the banking and finance sector in Chandigarh, Mohali, and Panchkula.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "820",
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
        "AMA Legal Solutions helped us set up our Wealth Management firm in Sector 17. Their understanding of SEBI regulations and local compliance was impressive.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Priya Sharma",
      },
      reviewBody:
        "We needed guidance on NBFC compliance for our startup in IT Park. The team at AMA Legal provided clear, actionable advice and handled all our ROC filings efficiently.",
    },
  ],
};

export default function ChandigarhBankingClient() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "chandigarh-advantage", title: "The Chandigarh Advantage" },
    { id: "financial-services", title: "Key Financial Services" },
    { id: "nbfc-landscape", title: "NBFCs in the Tri-City" },
    { id: "wealth-management", title: "Wealth Management & Advisory" },
    { id: "legal-ecosystem", title: "The Legal Ecosystem" },
    { id: "msme-finance", title: "MSME & Industrial Finance" },
    { id: "regulatory-framework", title: "Regulatory Framework" },
    { id: "compliance-checklist", title: "Compliance Checklist" },
    { id: "fintech-opportunities", title: "Fintech Opportunities" },
    { id: "challenges-solutions", title: "Challenges & Solutions" },
    { id: "why-choose-us", title: "Why Choose AMA Legal" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking and Finance", href: "/services/banking-and-finance" },
    { label: "Chandigarh", href: "/services/banking-and-finance/chandigarh" },
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
              Premier <span className="text-[#D2A02A]">Banking and Finance Services</span> in Chandigarh
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Navigating the Financial Landscape of the City Beautiful. From NBFC Registration to Wealth Management Compliance, we are your trusted legal advisors in the Tri-City.
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
                    Financial Excellence in the City Beautiful
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chandigarh, renowned globally as India's first planned city, is not just a marvel of modern architecture but also a thriving center for commerce, finance, and administration. As the joint capital of Punjab and Haryana, and a Union Territory in its own right, it serves as the administrative and financial nerve center for the entire northern region. The city boasts one of the highest per capita incomes in the country, creating a robust and sophisticated demand for banking, wealth management, and financial services.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The financial ecosystem of Chandigarh is unique. It is a convergence point where government administration meets private enterprise. The presence of the Reserve Bank of India (RBI) Regional Office in Sector 17, which has jurisdiction over Punjab, Haryana, Himachal Pradesh, and Chandigarh, makes the city a critical regulatory hub. This proximity to the regulator offers a distinct advantage but also demands strict adherence to compliance norms.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand the pulse of this city. We specialize in helping businesses navigate the multi-layered regulatory environment that characterizes the Tri-City area (Chandigarh, Mohali, and Panchkula). Whether you are a wealth management firm catering to High Net Worth Individuals (HNIs) in Sector 9, a fintech startup innovating in the Rajiv Gandhi Chandigarh Technology Park, or an NBFC serving the industrial belts of Mohali, our legal expertise ensures your operations are compliant, secure, and poised for sustainable growth. We bridge the gap between complex financial regulations and practical business needs, ensuring that your venture thrives in this competitive landscape.
                  </p>
                </section>

                {/* Chandigarh Advantage */}
                <section id="chandigarh-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Chandigarh Advantage: Why Invest Here?
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chandigarh offers a unique blend of affluence, infrastructure, and talent that makes it an ideal location for financial services. The city's strategic location and demographic profile create a fertile ground for various financial activities.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">High Net Worth Base</h3>
                      <p className="text-gray-700">
                        The city is home to a large population of retired government officials, defense personnel, and successful business owners. This demographic has significant investable surplus, creating a substantial market for wealth management, estate planning, and investment advisory services.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Tri-City Ecosystem</h3>
                      <p className="text-gray-700">
                        The Chandigarh-Mohali-Panchkula cluster offers a combined market of diverse industries. While Chandigarh is the administrative and service hub, Mohali and Panchkula provide the industrial and IT backbone, creating a diverse demand for credit and financial solutions.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Regulatory Hub</h3>
                      <p className="text-gray-700">
                        With the RBI Regional Office and major bank headquarters located in Sector 17, regulatory liaison and banking partnerships are easily accessible. This proximity facilitates faster processing of applications and easier resolution of regulatory queries.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Quality of Life & Talent</h3>
                      <p className="text-gray-700">
                        The city's superior infrastructure, green spaces, and quality of life attract top talent from across the region. This ensures a steady supply of skilled professionals for financial institutions, from chartered accountants to investment analysts.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Key Financial Services */}
                <section id="financial-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Key Financial Services in Demand
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The financial landscape of Chandigarh is diverse, ranging from traditional banking to cutting-edge fintech. We provide comprehensive legal support for the following key sectors:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Non-Banking Financial Companies (NBFCs)</h3>
                      <p className="text-gray-700">
                        NBFCs play a crucial role in bridging the credit gap for MSMEs in Mohali's industrial area and Panchkula's IT park. We assist with registration, compliance, and asset classification norms, ensuring that these entities can operate efficiently while adhering to RBI guidelines.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Wealth Management & Advisory</h3>
                      <p className="text-gray-700">
                        With a wealthy demographic, there is high demand for Portfolio Management Services (PMS), Investment Advisory, and Family Offices. We ensure SEBI compliance for these entities, drafting client agreements and setting up robust internal control mechanisms.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Fintech & Digital Lending</h3>
                      <p className="text-gray-700">
                        The IT Park in Chandigarh and Mohali is a breeding ground for fintech startups. We guide them through RBI's digital lending guidelines, data privacy laws (DPDP Act), and payment aggregator norms, helping them innovate within the regulatory sandbox.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Microfinance</h3>
                      <p className="text-gray-700">
                        Microfinance institutions serving the peri-urban and rural areas surrounding the Tri-City require specific legal structures (Section 8 or NBFC-MFI). We facilitate their incorporation and registration, ensuring they meet the social impact goals while remaining financially sustainable.
                      </p>
                    </div>
                  </div>
                </section>

                {/* NBFC Landscape */}
                <section id="nbfc-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    NBFC Registration & Compliance: A Deep Dive
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Setting up an NBFC in Chandigarh involves a rigorous process. The RBI Regional Office in Sector 17 is the nodal authority for processing applications from Punjab, Haryana, Himachal Pradesh, and Chandigarh. The scrutiny is high, and any discrepancy can lead to rejection.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of NBFCs Relevant to the Region</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Investment and Credit Company (ICC):</strong> The most common form, lending to MSMEs, vehicle finance, and personal loans.</li>
                    <li><strong>Micro Finance Institution (NBFC-MFI):</strong> Focused on small loans to low-income households, requiring specific capital adequacy and margin caps.</li>
                    <li><strong>NBFC-Factor:</strong> Engaged in factoring business, crucial for the MSME supply chains in the industrial belts.</li>
                    <li><strong>Account Aggregator:</strong> A new class of NBFCs that facilitates sharing of financial information, gaining traction with the rise of fintech.</li>
                  </ul>

                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Registration Roadmap</h3>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                      <li><strong>Incorporation:</strong> Register a company under the Companies Act, 2013 with the ROC (Chandigarh). The main object clause must reflect financial activities.</li>
                      <li><strong>Net Owned Fund (NOF):</strong> Ensure a minimum NOF of ₹2 Crore (or ₹10 Crore as per the latest RBI scale-based regulations for certain categories) is deposited in a bank as a fixed deposit.</li>
                      <li><strong>Director Due Diligence:</strong> Ensure all directors meet the 'Fit and Proper' criteria set by the RBI. This involves a clean track record, financial solvency, and relevant experience.</li>
                      <li><strong>COSMOS Application:</strong> File the online application on the RBI's COSMOS portal. This requires uploading scanned copies of all corporate documents, business plans, and banker's reports.</li>
                      <li><strong>Physical Submission:</strong> Submit the hard copy of the application along with the Unique Identification Number (UIN) to the Department of Non-Banking Supervision (DNBS) at RBI, Sector 17, Chandigarh.</li>
                      <li><strong>Query Resolution:</strong> The RBI may raise queries regarding the business model or source of funds. Prompt and accurate legal responses are critical at this stage.</li>
                    </ol>
                  </div>
                </section>

                {/* Wealth Management */}
                <section id="wealth-management" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Wealth Management & SEBI Regulations
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chandigarh's affluent population demands sophisticated wealth management solutions. However, the line between investment advice and product distribution is strictly regulated by SEBI.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Family Offices & Estate Planning</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many business families in the region are setting up Family Offices to manage their wealth and succession. We assist in structuring these offices, creating private family trusts for estate planning, and ensuring tax efficiency. A well-structured trust can protect assets from business liabilities and ensure smooth inter-generational transfer of wealth.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-lg text-green-900 mb-2">Investment Advisor (RIA)</h3>
                      <p className="text-green-800 text-sm">
                        Mandatory registration with SEBI for providing investment advice for a fee. Advisors must act in a fiduciary capacity and cannot receive commissions from product manufacturers. We help in obtaining the RIA license and maintaining ongoing compliance.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-lg text-green-900 mb-2">Portfolio Manager (PMS)</h3>
                      <p className="text-green-800 text-sm">
                        For managing client funds with a minimum ticket size of ₹50 Lakhs. This requires a higher net worth for the entity and strict reporting norms. We assist in drafting the Disclosure Document and Client Agreement.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-lg text-green-900 mb-2">Mutual Fund Distributor</h3>
                      <p className="text-green-800 text-sm">
                        Requires registration with the Association of Mutual Funds in India (AMFI). Distributors earn commissions but can only provide 'incidental' advice. We ensure that distributors do not cross the line into advisory services, avoiding SEBI penalties.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-lg text-green-900 mb-2">Alternative Investment Funds (AIF)</h3>
                      <p className="text-green-800 text-sm">
                        For pooling funds from sophisticated investors for real estate or private equity. We assist in setting up Category I, II, or III AIFs and registering them with SEBI.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Legal Ecosystem */}
                <section id="legal-ecosystem" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    The Legal Ecosystem: Courts & Tribunals
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chandigarh is the seat of the Punjab and Haryana High Court, making it a pivotal center for legal recourse in financial matters. Understanding the jurisdiction and powers of various courts is essential for debt recovery and dispute resolution.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Punjab and Haryana High Court:</strong> The constitutional court with jurisdiction over Punjab, Haryana, and Chandigarh. It hears writ petitions against arbitrary actions of banks or regulators and company petitions including winding up.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Debt Recovery Tribunal (DRT):</strong> Located in Chandigarh, the DRT adjudicates on debt recovery applications filed by banks and financial institutions for amounts exceeding ₹20 Lakhs. It is the primary forum for enforcing security interests under the SARFAESI Act.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Debt Recovery Appellate Tribunal (DRAT):</strong> Chandigarh typically falls under the jurisdiction of the DRAT in Delhi, but local representation is crucial for preparing appeals against DRT orders.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>NCLT Chandigarh Bench:</strong> The National Company Law Tribunal bench in Chandigarh handles insolvency and bankruptcy proceedings (IBC) for corporate debtors in the region. It is a critical forum for resolving stressed assets.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* MSME Finance */}
                <section id="msme-finance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    MSME & Industrial Finance
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The industrial areas of Mohali and Panchkula are hubs for light engineering, pharmaceuticals, and textiles. These MSMEs have distinct financial needs, ranging from working capital to term loans for machinery.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist financial institutions in structuring credit products tailored for these industries. This includes drafting loan agreements that secure the lender's interest while being fair to the borrower. We also advise on the various Credit Guarantee Schemes (like CGTMSE) available for MSMEs, ensuring that lenders can mitigate their risk effectively. Furthermore, we help in the due diligence of collateral, verifying land titles in the industrial estates to prevent future disputes.
                  </p>
                </section>

                {/* Regulatory Framework */}
                <section id="regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Navigating the Regulatory Framework
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chandigarh's financial sector is governed by a mix of central and local regulations. Compliance is not just about following rules; it's about building a reputation for reliability.
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Reserve Bank of India (RBI):</strong> The ultimate regulator for banks, NBFCs, and payment systems. The Sector 17 office is the primary point of contact for all regulatory approvals and reporting.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Securities and Exchange Board of India (SEBI):</strong> Regulates capital markets, wealth managers, and investment advisors. Compliance with SEBI's insider trading and fraudulent trade practices norms is mandatory.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Registrar of Companies (ROC):</strong> The ROC Chandigarh (for Punjab, Haryana, and Chandigarh) oversees corporate compliance under the Companies Act. Timely filing of annual returns and financial statements is critical to avoid disqualification of directors.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 text-xl">➤</span>
                      <div>
                        <strong>Financial Intelligence Unit (FIU):</strong> All financial entities must comply with the Prevention of Money Laundering Act (PMLA). This involves appointing a Principal Officer and reporting suspicious transactions to FIU-IND.
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
                    Staying compliant is key to business continuity. Here is a detailed checklist for financial entities in Chandigarh to ensure they stay on the right side of the law:
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>ROC Filings:</strong> Annual Filing of AOC-4 (Financial Statements) and MGT-7 (Annual Return). Filing of DIR-3 KYC for all directors.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>RBI Returns:</strong> Periodic Returns such as NBS-1 (Quarterly return on deposits), NBS-2 (Quarterly return on prudential norms), and NBS-9 (Annual return for non-deposit taking NBFCs).</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>KYC/AML:</strong> Implementation of a robust KYC policy, regular updates to the CKYC Registry, and screening of customers against sanctions lists.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Statutory Audit:</strong> Annual audit by a qualified Chartered Accountant to ensure financial statements present a true and fair view.</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Tax Compliance:</strong> Timely filing of Income Tax Returns, TDS returns, and GST returns (if applicable to fee-based income).</li>
                      <li className="flex items-center"><span className="mr-2 text-green-600">✓</span> <strong>Secretarial Audit:</strong> For larger companies, a secretarial audit by a Company Secretary in practice is mandatory to certify compliance with all applicable laws.</li>
                    </ul>
                  </div>
                </section>

                {/* Fintech Opportunities */}
                <section id="fintech-opportunities" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Fintech Opportunities in the Tri-City
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The convergence of finance and technology is reshaping the landscape. Chandigarh, with its strong IT infrastructure in the Rajiv Gandhi Chandigarh Technology Park, is well-positioned to lead this revolution.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist fintech startups in navigating the complex regulatory waters. This includes advice on the RBI's Regulatory Sandbox, which allows live testing of new products in a controlled environment. We also provide legal counsel on data localization requirements, ensuring that customer data is stored within India as per RBI mandates. With the Digital Personal Data Protection (DPDP) Act, data privacy has become a boardroom issue. We help fintechs draft privacy policies, consent mechanisms, and data breach response plans to ensure full compliance.
                  </p>
                </section>

                {/* Challenges & Solutions */}
                <section id="challenges-solutions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Common Challenges & Our Solutions
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We help you overcome the specific hurdles faced by financial businesses in the region.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Multi-State Jurisdiction</h3>
                        <p className="text-gray-700">Businesses in the Tri-City often operate across Chandigarh, Punjab, and Haryana, leading to confusion over state-specific rules (e.g., Stamp Duty on loan agreements).</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We provide clear guidance on the applicability of laws based on your registered office and area of operation, ensuring you pay the correct stamp duty and avoid legal pitfalls.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Strict RBI Scrutiny</h3>
                        <p className="text-gray-700">The RBI Chandigarh office is known for its rigorous scrutiny of NBFC applications, often rejecting those with vague business plans or unclear funding sources.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: Our team conducts a mock audit of your application to ensure it is error-free before submission. We help structure your business plan to meet RBI's expectations.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Challenge: Digital Lending Compliance</h3>
                        <p className="text-gray-700">Fintechs often struggle with the complexities of the new Digital Lending Guidelines, especially regarding the flow of funds and cooling-off periods.</p>
                        <p className="text-[#D2A02A] font-semibold mt-1">Solution: We draft compliant loan agreements and privacy policies tailored to your digital platform, ensuring your app flow adheres to the guidelines.</p>
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
                    We are the preferred legal partners for financial entities in the Tri-City. Our deep roots in the region, combined with our expertise in national financial laws, make us the ideal choice for your business.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                      <p className="text-gray-600">Deep understanding of the Chandigarh regulatory landscape, including the specific requirements of the RBI Regional Office and the ROC.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📈</div>
                      <h3 className="font-bold text-xl mb-2">Sector Focus</h3>
                      <p className="text-gray-600">Specialized services for NBFCs, Wealth Managers, and Fintech startups. We don't just know the law; we understand the business.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Compliance First</h3>
                      <p className="text-gray-600">We prioritize legal safety, ensuring your business is built on a solid foundation that can withstand regulatory scrutiny.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from the Tri-City</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions helped us set up our Wealth Management firm in Sector 17. Their understanding of SEBI regulations and local compliance was impressive. They guided us through the entire RIA registration process seamlessly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Singh</p>
                          <p className="text-sm text-gray-500">Sector 17, Chandigarh</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We needed guidance on NBFC compliance for our startup in IT Park. The team at AMA Legal provided clear, actionable advice and handled all our ROC filings efficiently. Their proactive approach saved us from potential penalties."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Sharma</p>
                          <p className="text-sm text-gray-500">IT Park, Chandigarh</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Financial Journey in Chandigarh</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Partner with the Tri-City's most trusted banking and finance legal consultants.
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
                      Expert Legal Guidance • Chandigarh • Mohali • Panchkula
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
                    Consult with our banking law experts in Chandigarh today.
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

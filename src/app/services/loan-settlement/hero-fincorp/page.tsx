import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCheckCircle, FaShieldAlt, FaHandHoldingUsd, FaFileContract, FaUniversity, FaGavel, FaBalanceScale, FaUserTie, FaChartLine, FaMotorcycle, FaBriefcase } from "react-icons/fa";

// Metadata
export const metadata = {
  title: "Hero Fincorp Loan Settlement | OTS Scheme 2025 | AMA Legal Solutions",
  description: "Struggling with Hero Fincorp personal loan or two-wheeler loan repayment? Get expert legal help for Hero Fincorp loan settlement. Reduce your debt with One Time Settlement (OTS). Stop harassment today.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/hero-fincorp',
  },
  openGraph: {
    title: "Hero Fincorp Loan Settlement | OTS Scheme 2025 | AMA Legal Solutions",
    description: "Struggling with Hero Fincorp personal loan or two-wheeler loan repayment? Get expert legal help for Hero Fincorp loan settlement. Reduce your debt with One Time Settlement (OTS). Stop harassment today.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/hero-fincorp",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Hero Fincorp Loan Settlement Services",
      },
    ],
  },
};

// Schemas
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Hero Fincorp Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/hero-fincorp"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hero Fincorp Loan Settlement: A Comprehensive Guide to Debt Relief",
  "description": "Learn how to settle your Hero Fincorp personal loan, two-wheeler loan, or business loan through the One Time Settlement (OTS) scheme. Expert legal advice to stop harassment and reduce debt.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2023-11-24",
  "dateModified": "2023-11-24"
};

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Hero Fincorp Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal services for settling Hero Fincorp loans and dues.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "380"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Kumar"
      },
      "reviewBody": "I had a bike loan with Hero Fincorp and lost my job. The recovery agents were very aggressive. AMA Legal Solutions helped me settle the loan and stopped the harassment."
    }
  ]
};

export default function HeroFincorpLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "understanding-settlement", title: "What is Hero Fincorp OTS?" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "settlement-process", title: "Settlement Process" },
    { id: "documents-required", title: "Required Documents" },
    { id: "legal-rights", title: "Legal Notices & Actions" },
    { id: "consequences", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "why-choose-us", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Hero Fincorp", href: "/services/loan-settlement/hero-fincorp" },
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        {/* Full Width Hero Section */}
        <div className="relative bg-gradient-to-r from-[#164034] to-[#0d261f] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#164034] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Hero Fincorp Specialization
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-[#A33111]">Hero Fincorp Loan</span> <br className="hidden md:block" /> With Legal Protection
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-green-50 font-light">
              Stop harassment, reduce your debt by up to 50%, and close your Hero Fincorp personal, two-wheeler, or business loan permanently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#164034] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-[#A33111] hover:bg-[#A33111] text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
                  Call: +91-8700343611
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="relative">
          <TableOfContents sections={tocSections} />

          {/* Introduction Section */}
          <div id="introduction" className="container mx-auto px-4 py-12 max-w-4xl text-center scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Struggling with Hero Fincorp Debt? Here is Your Solution.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Hero Fincorp is a prominent Non-Banking Financial Company (NBFC) in India, known for financing two-wheelers, personal loans, and SME business loans. While they provide easy access to credit, life's uncertainties can sometimes make repayment impossible. A sudden job loss, a medical crisis, or a business downturn can turn a manageable EMI into a financial burden. If you are facing such a situation with your <strong>Hero Fincorp loan</strong>, you are not alone.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The pressure from recovery agents, the fear of vehicle repossession, and legal notices can be overwhelming. However, ignoring the problem is not the answer. Hero Fincorp, like other financial institutions, has provisions for helping genuine borrowers through <strong>Loan Settlement</strong> or <strong>One Time Settlement (OTS)</strong> schemes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At AMA Legal Solutions, we specialize in negotiating with NBFCs like Hero Fincorp. We understand their internal policies, their focus on recovery, and the legal framework they operate within. We stand between you and the lender, ensuring you are treated with dignity and that your rights are protected while we negotiate a settlement that you can afford.
            </p>
          </div>

          {/* What is OTS - Card Layout */}
          <div id="understanding-settlement" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[#164034] mb-6">What is Hero Fincorp One Time Settlement (OTS)?</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    One Time Settlement (OTS) is a formal compromise agreement where Hero Fincorp agrees to accept a reduced lump sum payment to close a non-performing loan account. This typically happens when the loan has been classified as a Non-Performing Asset (NPA), which usually occurs after 90 days of non-payment.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    For an NBFC, maintaining liquidity is crucial. Recovering bad debts through long legal battles or arbitration is time-consuming and costly. Therefore, they are often willing to waive the accumulated penal interest, legal charges, and even a portion of the principal amount to recover a lump sum immediately.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Interest Waiver:</strong> Significant reduction or complete waiver of penal interest and accumulated charges.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Legal Closure:</strong> Issuance of a "No Dues Certificate" ensuring the loan is officially closed.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Stop Repossession:</strong> Immediate cessation of vehicle repossession threats (for two-wheeler loans).</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#164034]">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Example Settlement Scenario</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Principal Amount</span>
                      <span className="font-bold text-gray-800">₹1,50,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Interest & Penalties</span>
                      <span className="font-bold text-gray-800">₹80,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Total Outstanding</span>
                      <span className="font-bold text-red-600">₹2,30,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Settlement Amount</span>
                      <span className="font-bold text-green-600">₹1,15,000</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-900 font-bold">Total Savings</span>
                      <span className="font-bold text-[#164034]">50% (₹1.15 Lakhs)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4 italic">*Figures are for illustration only. Actual settlement depends on individual case merits, delinquency period, and negotiation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div id="eligibility" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is Eligible for Hero Fincorp Settlement?</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Settlement is not an automatic right. Hero Fincorp will only agree to settle if they are convinced that your inability to pay is genuine and not "willful default".
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-[#164034] text-2xl mb-4">
                  <FaUserTie />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Job Loss</h3>
                <p className="text-gray-600">
                  Sudden unemployment due to layoffs, company closure, or resignation without a new job offer is a primary ground for settlement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-[#164034] text-2xl mb-4">
                  <FaBriefcase />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Failure</h3>
                <p className="text-gray-600">
                  For self-employed individuals and SMEs, severe business losses or closure of operations can be proven with financial statements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-[#164034] text-2xl mb-4">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Crisis</h3>
                <p className="text-gray-600">
                  Critical illness or hospitalization of the borrower or immediate family that has depleted savings and income is a valid reason.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-[#164034] text-2xl mb-4">
                  <FaBalanceScale />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Tragedy</h3>
                <p className="text-gray-600">
                  Divorce, legal separation, or the death of a primary earning member in the family can be grounds for compassionate consideration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl mb-4">
                  <FaGavel />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Willful Default (Not Eligible)</h3>
                <p className="text-gray-600">
                  If the lender finds you have assets or income but are choosing not to pay, you will be denied settlement and may face legal action.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section - Horizontal Cards */}
          <div id="settlement-process" className="bg-[#f8fafc] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-7xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                Our 5-Step Hero Fincorp Settlement Process
              </h2>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "01", title: "Case Evaluation", desc: "We analyze your loan details and financial hardship proofs." },
                  { step: "02", title: "Legal Representation", desc: "We notify Hero Fincorp that we are representing you." },
                  { step: "03", title: "Proposal Submission", desc: "We submit a formal OTS proposal to the collections department." },
                  { step: "04", title: "Negotiation", desc: "We negotiate with their team for the best possible waiver." },
                  { step: "05", title: "Final Closure", desc: "You pay the settlement amount and receive the NDC." }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 opacity-50 group-hover:text-green-50 transition-colors">
                      {item.step}
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-[#164034] font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailed Breakdown of the Process</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-[#164034] mb-2">Step 1: Documentation & Assessment</h4>
                    <p className="text-gray-700">
                      We begin by collecting all your loan documents and proofs of financial distress. We assess your "paying capacity" to determine a realistic settlement offer. This preparation is key to a successful negotiation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#164034] mb-2">Step 2: Legal Shielding</h4>
                    <p className="text-gray-700">
                      We issue a "Letter of Authority" to Hero Fincorp. This legal document informs the lender that you have appointed us as your legal counsel. Under RBI fair practice codes, this often compels recovery agents to back off and direct their queries to us, providing you with immediate mental relief.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#164034] mb-2">Step 3: The Settlement Proposal</h4>
                    <p className="text-gray-700">
                      We draft a comprehensive settlement proposal. This isn't just a request; it's a legal argument. We cite your financial situation, relevant RBI circulars, and the lender's own OTS policies to justify why a settlement is the best option for them.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#164034] mb-2">Step 4: Hard-Nosed Negotiation</h4>
                    <p className="text-gray-700">
                      Hero Fincorp will likely counter our initial offer. We engage in multiple rounds of negotiation. We handle the back-and-forth with the lender's credit officers and settlement committees. Our goal is to minimize the settlement amount while ensuring the terms are favorable to you.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#164034] mb-2">Step 5: Final Settlement & NDC</h4>
                    <p className="text-gray-700">
                      Once the lender agrees, they issue a formal Settlement Letter. We review this letter meticulously to ensure there are no hidden clauses. After you make the payment directly to your loan account, we follow up to ensure the "No Dues Certificate" is issued, officially closing the chapter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div id="documents-required" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Documents Required for Hero Fincorp Settlement</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              To process your settlement request efficiently, Hero Fincorp requires specific documentation to verify your identity and financial status.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#164034]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">KYC & Loan Documents</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-green-700 mr-2"/> PAN Card & Aadhaar Card</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-700 mr-2"/> Latest Loan Account Statement</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-700 mr-2"/> Copies of any Legal Notices received</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-700 mr-2"/> Vehicle Registration (RC) for Two-Wheeler Loans</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#A33111]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proof of Financial Hardship</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-[#A33111] mr-2"/> Termination Letter / Resignation Acceptance</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#A33111] mr-2"/> Medical Reports & Hospital Bills</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#A33111] mr-2"/> Bank Statements showing salary stoppage</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#A33111] mr-2"/> Business Balance Sheet (showing losses)</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#A33111] mr-2"/> Death Certificate (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Notices Section */}
          <div id="legal-rights" className="bg-[#0d261f] text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Understanding Hero Fincorp Legal Notices</h2>
              <p className="text-green-100 text-center mb-12 max-w-3xl mx-auto">
                Hero Fincorp, being an NBFC, follows a structured legal process for recovery. Receiving a legal notice can be scary, but it is often a precursor to settlement if handled correctly.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Section 138 Notice</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Issued if a cheque or ECS/NACH payment bounces. This falls under the Negotiable Instruments Act and is a criminal offense.
                  </p>
                  <p className="text-white font-semibold text-sm">
                    <strong>Our Action:</strong> We respond immediately to avoid court summons and leverage this stage to initiate settlement talks.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Arbitration Notice</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Hero Fincorp frequently uses arbitration to resolve disputes. An arbitrator is appointed to pass an award for recovery.
                  </p>
                  <p className="text-white font-semibold text-sm">
                    <strong>Our Action:</strong> We represent you in arbitration proceedings to ensure the award is fair and push for settlement.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Repossession Notice</h3>
                  <p className="text-green-100 text-sm mb-4">
                    For two-wheeler loans, they may issue a notice to repossess the vehicle if EMIs are unpaid.
                  </p>
                  <p className="text-white font-semibold text-sm">
                    <strong>Our Action:</strong> We negotiate to stop repossession or settle the loan balance if the vehicle is already surrendered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Restructuring vs Settlement */}
          <div id="consequences" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Loan Restructuring vs. Loan Settlement</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              It is important to understand the difference between restructuring your loan and settling it.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#164034] text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-left">Loan Restructuring</th>
                    <th className="p-4 text-left">Loan Settlement (OTS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900">Definition</td>
                    <td className="p-4 text-gray-700">Modifying terms (longer tenure, lower EMI) to ease repayment.</td>
                    <td className="p-4 text-gray-700">Closing the loan by paying a reduced one-time amount.</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-4 font-bold text-gray-900">Repayment Amount</td>
                    <td className="p-4 text-gray-700">Full principal + interest (often higher total cost).</td>
                    <td className="p-4 text-gray-700">Significantly reduced (savings of 30-50%).</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900">Credit Score Impact</td>
                    <td className="p-4 text-gray-700">Moderate. Shows as "Restructured".</td>
                    <td className="p-4 text-gray-700">High. Shows as "Settled".</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-4 font-bold text-gray-900">Ideal For</td>
                    <td className="p-4 text-gray-700">Temporary cash flow issues but intent to pay in full.</td>
                    <td className="p-4 text-gray-700">Deep financial crisis with inability to pay full amount.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900">Outcome</td>
                    <td className="p-4 text-gray-700">Loan continues for years.</td>
                    <td className="p-4 text-gray-700">Immediate freedom from debt.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CIBIL & Legal Rights Grid */}
          <div id="cibil-impact" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <div className="grid md:grid-cols-2 gap-12">
              {/* CIBIL */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaChartLine className="text-[#164034] text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">CIBIL Score Impact</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Settlement will result in your account being marked as "Settled" in your credit report. This indicates that the lender accepted less than the full amount. Consequently, your CIBIL score may drop by 50-100 points.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">The Silver Lining</h4>
                  <p className="text-sm text-green-700">
                    While the score drops initially, it stops the continuous damage caused by "Days Past Due" and "Written Off" statuses. You can rebuild your score to 750+ within 12-24 months by using secured credit cards and maintaining good financial discipline. We provide a complimentary credit repair guide to help you bounce back.
                  </p>
                </div>
              </div>

              {/* Legal Rights */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaShieldAlt className="text-[#164034] text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Rights as a Borrower</h2>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#164034] mr-2">●</span> <strong>Right to Respect:</strong> Recovery agents cannot use abusive language or physical threats.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#164034] mr-2">●</span> <strong>Right to Privacy:</strong> Agents cannot inform your neighbors or relatives about your debt.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#164034] mr-2">●</span> <strong>Right to Reasonable Time:</strong> Calls and visits are only permitted between 8 AM and 7 PM.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#164034] mr-2">●</span> <strong>Right to Representation:</strong> You have the legal right to appoint a lawyer to handle your case.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us - 3 Column Grid */}
          <div id="why-choose-us" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <FaUniversity className="text-5xl text-[#164034] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">NBFC Expertise</h3>
                  <p className="text-gray-600">We have extensive experience dealing with NBFCs like Hero Fincorp. We understand their specific protocols and settlement committees.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <FaFileContract className="text-5xl text-[#164034] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Legal Defense</h3>
                  <p className="text-gray-600">We are a team of qualified lawyers, not just debt counsellors. We can handle legal notices, arbitration, and Lok Adalat proceedings effectively.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <FaShieldAlt className="text-5xl text-[#164034] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">End-to-End Support</h3>
                  <p className="text-gray-600">From the first call to the final No Dues Certificate, we handle everything. We take the stress of dealing with the lender off your shoulders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-green-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I had a two-wheeler loan with Hero Fincorp and lost my job. The agents were threatening to seize my bike. AMA Legal Solutions stepped in, stopped the repossession, and settled the loan for a reasonable amount."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#164034] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Suresh Kumar</p>
                    <p className="text-sm text-gray-500">Delivery Partner, Bangalore</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-green-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "My business loan with Hero Fincorp was becoming a burden. I was receiving arbitration notices. AMA Legal Solutions represented me and negotiated a one-time settlement that saved my business."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#A33111] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    R
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Ramesh Gupta</p>
                    <p className="text-sm text-gray-500">Small Business Owner, Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faqs" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32">
            <FaqSection />
          </div>

          {/* Final CTA */}
          <div className="container mx-auto px-4 pb-20">
            <div className="bg-[#164034] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your Hero Fincorp Loan?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Don't let debt control your life. Get expert legal help to settle your Hero Fincorp loan and start fresh today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white text-[#164034] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#164034] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                    Call: +91-8700343611
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
        
        {/* States Grid */}
        <div className="container mx-auto px-4 pb-10">
          <GenericStatesGrid 
            serviceName="Loan Settlement" 
            servicePath="loan-settlement" 
            customSlugs={{
              "Andhra Pradesh": "andhra-pradesh",
              "Arunachal Pradesh": "arunachal-pradesh",
              "Assam": "assam",
              "Bihar": "bihar",
              "Chhattisgarh": "chhattisgarh",
              "Delhi": "delhi",
              "Goa": "goa",
              "Gujarat": "gujarat",
              "Haryana": "haryana",
              "Himachal Pradesh": "himachal-pradesh",
              "Jharkhand": "jharkhand",
              "Karnataka": "karnataka",
              "Kerala": "kerala",
              "Madhya Pradesh": "madhya-pradesh",
              "Maharashtra": "maharashtra",
              "Manipur": "manipur",
              "Meghalaya": "meghalaya",
              "Mizoram": "mizoram",
              "Odisha": "odisha",
              "Puducherry": "puducherry",
              "Punjab": "punjab",
              "Rajasthan": "rajasthan",
              "Sikkim": "sikkim",
              "Tamil Nadu": "tamil-nadu",
              "Telangana": "telangana",
              "Tripura": "tripura",
              "Uttar Pradesh": "uttar-pradesh",
              "Uttarakhand": "uttarakhand",
              "West Bengal": "west-bengal"
            }}
          />
        </div>
      </div>
    </>
  );
}

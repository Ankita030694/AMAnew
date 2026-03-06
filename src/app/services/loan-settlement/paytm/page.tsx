import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import FaqSection from "./FaqSection";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaCheckCircle, FaShieldAlt, FaHandHoldingUsd, FaFileContract, FaUniversity, FaGavel, FaBalanceScale, FaUserTie, FaPhoneSlash } from "react-icons/fa";

// Breadcrumb Schema
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
      "name": "Paytm Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/paytm"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Paytm Postpaid & Personal Loan Settlement: The Complete Legal Guide 2025",
  "description": "Unable to pay Paytm Postpaid or Personal Loan? Learn how to legally settle your debt with lending partners like Aditya Birla & Hero FinCorp. Stop harassment and save up to 50%.",
  "image": "https://www.amalegalsolutions.com/services/5.png",
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

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Paytm Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/5.png",
  "description": "Legal settlement services for Paytm Postpaid and Personal Loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1020"
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
        "name": "Vikram Singh"
      },
      "reviewBody": "My Paytm Postpaid bill was huge due to late fees. AMA Legal Solutions negotiated with Aditya Birla Finance and settled it for a reasonable amount."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Mehta"
      },
      "reviewBody": "I was getting threatening calls for my Paytm Personal Loan. The legal team at AMA stopped the calls immediately and closed my loan in 2 months."
    }
  ]
};

export const metadata = {
  title: "Paytm Loan Settlement | Settle Paytm Postpaid & Personal Loan",
  description:
    "Expert legal help for Paytm Postpaid & Personal Loan settlement. Negotiate with Aditya Birla/Hero FinCorp, stop recovery harassment, and close your loan with an NDC.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/paytm',
  },
  openGraph: {
    title: "Paytm Loan Settlement | Settle Paytm Postpaid & Personal Loan",
    description: "Expert legal help for Paytm Postpaid & Personal Loan settlement. Negotiate with Aditya Birla/Hero FinCorp, stop recovery harassment, and close your loan with an NDC.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/paytm",
    type: "website",
    images: [
      {
        url: "/services/5.png",
        width: 1200,
        height: 630,
        alt: "Paytm Loan Settlement Services",
      },
    ],
  },
};

export default function PaytmLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-ots", title: "Understanding OTS" },
    { id: "eligibility", title: "Eligibility" },
    { id: "process", title: "Settlement Process" },
    { id: "documents", title: "Documents Needed" },
    { id: "legal-notices", title: "Legal Notices" },
    { id: "restructuring-vs-settlement", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Impact" },
    { id: "why-choose-ama", title: "Why AMA?" },
    { id: "testimonials", title: "Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Paytm Loan Settlement", href: "/services/loan-settlement/paytm" },
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

      <div className="bg-white min-h-screen font-sans text-gray-800">
        {/* Full Width Hero Section - Standard Design */}
        <div className="relative bg-gradient-to-r from-[#00BAF2] to-[#0F4A8A] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#00BAF2] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Paytm Postpaid & Loan Relief
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-gray-200">Paytm Debt</span> <br className="hidden md:block" /> Legally & Stress-Free
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 font-light">
              Struggling with Paytm Postpaid or Personal Loans? We negotiate directly with lending partners like Aditya Birla & Hero FinCorp to reduce your debt by up to 50% and stop harassment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#00BAF2] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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

          {/* Introduction Section - Standard Centered */}
          <div id="introduction" className="container mx-auto px-4 py-12 max-w-4xl text-center scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              The Reality of Paytm Debt
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Paytm has revolutionized digital payments, but its credit products—<strong>Paytm Postpaid</strong> and <strong>Personal Loans</strong>—have trapped many users in a cycle of debt. It is important to understand that Paytm is often just the platform (LSP); the actual money comes from NBFC partners like <strong>Aditya Birla Finance</strong>, <strong>Hero FinCorp</strong>, or <strong>Tata Capital</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              When you default, you face pressure from two fronts: the Paytm app's constant reminders and the aggressive recovery agents hired by the NBFC partners. The late fees on Postpaid bills can sometimes exceed the principal amount itself.
            </p>
            <div className="bg-[#E1F5FE] border-l-4 border-[#00BAF2] p-6 rounded-r-lg text-left">
              <p className="text-[#0F4A8A] font-medium">
                <strong>The Solution:</strong> You don't have to deal with this alone. Loan Settlement is a legal provision that allows you to close these loans by paying a negotiated one-time amount, waiving off the exorbitant interest and charges.
              </p>
            </div>
          </div>

          {/* What is OTS - Standard Card Layout */}
          <div id="what-is-ots" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[#0F4A8A] mb-6">Understanding One Time Settlement (OTS)</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    One Time Settlement (OTS) is a strategic financial exit route for those in genuine distress. Lenders agree to waive off 100% of the penal interest and often a significant chunk of the principal to close a bad debt.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Once you hire AMA Legal Solutions, we handle all the nasty calls and legal threats. You receive a formal settlement letter and a No Dues Certificate (NDC), ensuring the lender cannot claim money from you in the future.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Huge Waivers:</strong> Save up to 50% on your total outstanding.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Legal Closure:</strong> Get a formal NDC to close the loan permanently.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Peace of Mind:</strong> Stop harassment from recovery agents immediately.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#00BAF2]">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Savings Example</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Outstanding</span>
                      <span className="font-bold text-gray-800">₹ 1,50,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Interest & Penalties</span>
                      <span className="font-bold text-gray-800">₹ 45,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Total Due</span>
                      <span className="font-bold text-red-600">₹ 1,95,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Settlement Amount</span>
                      <span className="font-bold text-green-600">₹ 85,000</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-900 font-bold">Total Savings</span>
                      <span className="font-bold text-[#00BAF2]">~56% (₹ 1.1 Lakhs)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4 italic">*Figures are for illustration. Actual settlement depends on individual cases.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria - Standard Grid */}
          <div id="eligibility" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Are You Eligible for Settlement?</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Settlement is for those who genuinely cannot pay. Here are the common grounds we use to negotiate:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl mb-4">
                  <FaUserTie />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Job Loss</h3>
                <p className="text-gray-600">
                  Sudden unemployment or a significant reduction in salary is the most common ground. We use your termination letter or bank statements as proof.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4">
                  <FaShieldAlt />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Emergency</h3>
                <p className="text-gray-600">
                  Critical illness in the family that drains your savings is a valid reason. Medical bills and reports serve as strong evidence for negotiation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl mb-4">
                  <FaHandHoldingUsd />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Failure</h3>
                <p className="text-gray-600">
                  For self-employed individuals, a verified loss in business or bankruptcy can be grounds for the lender to accept a settlement.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section - Standard Horizontal Cards */}
          <div id="process" className="bg-[#f8fafc] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-7xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                Our 5-Step Settlement Process
              </h2>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "01", title: "Case Analysis", desc: "We review your loan details and identify the lending partner (Aditya Birla/Hero FinCorp)." },
                  { step: "02", title: "Legal Shielding", desc: "We issue a legal notice of representation to block recovery agents." },
                  { step: "03", title: "Proposal", desc: "We draft and submit a realistic settlement proposal based on your hardship." },
                  { step: "04", title: "Negotiation", desc: "Our lawyers negotiate with the lender's credit team for the best deal." },
                  { step: "05", title: "Closure", desc: "You pay the agreed amount and we ensure you get the No Dues Certificate." }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors">
                      {item.step}
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#00BAF2] font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Required Documents - Standard Grid */}
          <div id="documents" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Required Documents</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              To convince the lender, we need to prove your financial distress.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#00BAF2]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">KYC & Loan Documents</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-[#00BAF2] mr-2"/> PAN Card & Aadhaar Card</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00BAF2] mr-2"/> Latest Loan/Postpaid Statement</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#00BAF2] mr-2"/> Any legal notices received</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#0F4A8A]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proof of Financial Hardship</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-[#0F4A8A] mr-2"/> Termination Letter / Resignation</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#0F4A8A] mr-2"/> Medical Reports / Bills</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#0F4A8A] mr-2"/> Bank Statements showing income loss</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Notices Section - Standard Dark */}
          <div id="legal-notices" className="bg-[#1a1a1a] text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Don't Ignore Legal Notices</h2>
              <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                If you default, lenders may send various legal notices. Ignoring them is dangerous.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Section 138</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    If you gave cheques or set up NACH for your loan, bouncing them is a criminal offense. We handle these cases to prevent legal escalation.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Arbitration</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Lenders often initiate arbitration to get a quick decree. We represent you in these proceedings to ensure a fair settlement.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Demand Notice</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    A formal demand for full payment. We reply to this notice legally, stating your inability to pay and proposing a settlement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Restructuring vs Settlement - Standard Table */}
          <div id="restructuring-vs-settlement" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Know Your Options</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#0F4A8A] text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-left">Loan Restructuring</th>
                    <th className="p-4 text-left">Loan Settlement (OTS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900">Goal</td>
                    <td className="p-4 text-gray-700">Extend tenure to reduce EMI.</td>
                    <td className="p-4 text-gray-700">Close loan with reduced payment.</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-4 font-bold text-gray-900">Cost</td>
                    <td className="p-4 text-gray-700">You pay more interest over time.</td>
                    <td className="p-4 text-gray-700">You pay significantly less (Savings).</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900">Credit Score</td>
                    <td className="p-4 text-gray-700">Neutral/Minor impact.</td>
                    <td className="p-4 text-gray-700">Negative impact (Settled status).</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-4 font-bold text-gray-900">Outcome</td>
                    <td className="p-4 text-gray-700">Debt continues for years.</td>
                    <td className="p-4 text-gray-700">Debt free immediately.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CIBIL & Legal Rights Grid - Standard */}
          <div id="cibil-impact" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <div className="grid md:grid-cols-2 gap-12">
              {/* CIBIL */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaHandHoldingUsd className="text-red-600 text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">CIBIL Score Impact</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Settlement will mark your account as "Settled" in CIBIL, dropping your score. This is a trade-off for becoming debt-free.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">The Good News</h4>
                  <p className="text-sm text-green-700">
                    It stops the "Days Past Due" counter. You can rebuild your score to 750+ in 12-18 months using secured credit cards.
                  </p>
                </div>
              </div>

              {/* Legal Rights */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaShieldAlt className="text-[#0F4A8A] text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Legal Rights</h2>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#0F4A8A] mr-2">●</span> <strong>No Abusive Language:</strong> Recovery agents cannot use foul language.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0F4A8A] mr-2">●</span> <strong>Timing:</strong> No calls before 8 AM or after 7 PM.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0F4A8A] mr-2">●</span> <strong>Representation:</strong> You have the right to appoint a lawyer.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose AMA - Standard Grid */}
          <div id="why-choose-ama" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Trust AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <FaGavel className="text-5xl text-[#0F4A8A] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Legal Expertise</h3>
                  <p className="text-gray-600">We are a team of experienced lawyers, not just call center agents. We understand the legal nuances of debt recovery.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <FaHandHoldingUsd className="text-5xl text-[#0F4A8A] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                  <p className="text-gray-600">We have successfully settled thousands of cases with Aditya Birla, Hero FinCorp, and other Paytm partners.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <FaShieldAlt className="text-5xl text-[#0F4A8A] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Client Protection</h3>
                  <p className="text-gray-600">Your peace of mind is our priority. We stand as a shield between you and the recovery agents.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials - Standard Grid */}
          <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Client Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-blue-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "My Paytm Postpaid bill was huge due to late fees. AMA Legal Solutions negotiated with Aditya Birla Finance and settled it for a reasonable amount."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#00BAF2] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    V
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Vikram Singh</p>
                    <p className="text-sm text-gray-500">Delhi</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-blue-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I was getting threatening calls for my Paytm Personal Loan. The legal team at AMA stopped the calls immediately and closed my loan in 2 months."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#0F4A8A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    A
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Anjali Mehta</p>
                    <p className="text-sm text-gray-500">Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faqs" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-[#0F4A8A] mb-12">Frequently Asked Questions</h2>
            <FaqSection />
          </div>

          {/* Final CTA - Standard Red/Blue */}
          <div className="container mx-auto px-4 pb-20">
            <div className="bg-[#0F4A8A] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to be Debt Free?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Take the first step towards financial freedom. Get expert legal advice for your Paytm settlement today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white text-[#0F4A8A] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0F4A8A] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                    Call: +91-8700343611
                  </button>
                </a>
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
      </div>
    </>
  );
}

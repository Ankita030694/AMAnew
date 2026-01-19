import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import FaqSection from "./FaqSection";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaCheckCircle, FaShieldAlt, FaHandHoldingUsd, FaFileContract, FaUniversity, FaGavel, FaBalanceScale, FaUserTie, FaPhoneSlash, FaTractor, FaIndustry } from "react-icons/fa";

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "PNB Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/pnb-bank"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PNB Loan Settlement 2025: Special OTS Scheme & Lok Adalat Process",
  "description": "Settle your Punjab National Bank (PNB) loan legally. Learn about the Special OTS Scheme 2024-25, Lok Adalat settlement for Agriculture/MSME loans, and how to stop SARFAESI action.",
  "image": "https://amalegalsolutions.com/services/6.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2023-11-24",
  "dateModified": "2023-11-24"
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "PNB Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/6.png",
  "description": "Legal settlement services for PNB Personal, MSME, and Agriculture loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1150"
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
      "reviewBody": "My MSME loan with PNB was in NPA for 2 years. AMA Legal Solutions helped me settle it under the Special OTS scheme. Saved 40% on the total dues."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajinder Singh"
      },
      "reviewBody": "I had a KCC loan issue. The lawyers represented me in the Lok Adalat and got a very fair settlement. Highly professional team."
    }
  ]
};

export const metadata = {
  title: "PNB Loan Settlement | Special OTS Scheme 2025 & Lok Adalat",
  description:
    "Expert legal help for PNB loan settlement. Settle Personal, MSME & Agriculture loans under Special OTS Scheme. Stop SARFAESI & DRT action.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/pnb-bank',
  },
  openGraph: {
    title: "PNB Loan Settlement | Special OTS Scheme 2025 & Lok Adalat",
    description: "Expert legal help for PNB loan settlement. Settle Personal, MSME & Agriculture loans under Special OTS Scheme. Stop SARFAESI & DRT action.",
    url: "https://amalegalsolutions.com/services/loan-settlement/pnb-bank",
    type: "website",
    images: [
      {
        url: "/services/6.png",
        width: 1200,
        height: 630,
        alt: "PNB Loan Settlement Services",
      },
    ],
  },
};

export default function PNBLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "ots-schemes", title: "PNB Special OTS Schemes" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "process", title: "Settlement Process" },
    { id: "lok-adalat", title: "Lok Adalat Settlement" },
    { id: "documents", title: "Required Documents" },
    { id: "sarfaesi", title: "SARFAESI & Legal Action" },
    { id: "restructuring-vs-settlement", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Impact" },
    { id: "why-choose-ama", title: "Why AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "PNB Loan Settlement", href: "/services/loan-settlement/pnb-bank" },
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
        {/* Full Width Hero Section - PNB Colors (Mustard/Maroon) */}
        <div className="relative bg-gradient-to-r from-[#A20416] to-[#780310] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#FFC72C" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-[#FFC72C] text-[#A20416] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              PSU Bank Settlement Experts
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-[#FFC72C]">PNB Loan</span> <br className="hidden md:block" /> Under Special OTS Scheme
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 font-light">
              Struggling with Punjab National Bank debt? We help you navigate the PSU bureaucracy, utilize Lok Adalats, and settle your Personal, MSME, or Agri loan legally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#FFC72C] hover:bg-yellow-400 text-[#A20416] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Check Eligibility
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-[#FFC72C] hover:bg-[#FFC72C]/10 text-[#FFC72C] font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
              PNB Loan Settlement: A Legal Way Out
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Punjab National Bank (PNB) is one of India's largest Public Sector Banks (PSUs). Unlike private banks, PNB follows strict government guidelines and RBI circulars for debt recovery. While this means more bureaucracy, it also means more structured and transparent settlement policies like the <strong>One Time Settlement (OTS)</strong> schemes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              However, dealing with PNB officials can be daunting. The fear of SARFAESI action (for secured loans) or Section 138 cases (for cheque bounce) is real. At AMA Legal Solutions, we bridge the gap. We understand the internal hierarchy of PNB—from the Branch Manager to the Circle Office—and use this knowledge to negotiate the best settlement for you.
            </p>
          </div>

          {/* OTS Schemes Section */}
          <div id="ots-schemes" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-bold text-center text-[#A20416] mb-12">PNB Special OTS Schemes 2024-25</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    PNB regularly announces special OTS schemes to reduce its Non-Performing Assets (NPAs). The current <strong>"Special OTS Scheme 2024-25"</strong> is a golden opportunity for borrowers.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Coverage:</strong> Applicable for NPAs with outstanding up to ₹5 Crore.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Sectors:</strong> Covers Personal Loans, MSME (Micro, Small & Medium Enterprises), and Agriculture.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Benefits:</strong> Significant waiver on penal interest and legal charges.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Validity:</strong> The scheme is active till March 31, 2026.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#A20416]">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Example: MSME Loan Settlement</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Principal Outstanding</span>
                      <span className="font-bold text-gray-800">₹ 10,00,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Interest & Charges</span>
                      <span className="font-bold text-gray-800">₹ 4,50,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Total Due</span>
                      <span className="font-bold text-red-600">₹ 14,50,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">OTS Amount</span>
                      <span className="font-bold text-green-600">₹ 8,50,000</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-900 font-bold">Total Savings</span>
                      <span className="font-bold text-[#A20416]">~41% (₹ 6 Lakhs)</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4 italic">*Figures are for illustration. Actual settlement depends on security value and NPA age.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div id="eligibility" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who Can Apply for Settlement?</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              PNB's policy is non-discriminatory but strict. You must prove genuine financial hardship.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4">
                  <FaTractor />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Agriculture Loans</h3>
                <p className="text-gray-600">
                  Farmers facing crop failure or natural calamities can apply. KCC (Kisan Credit Card) and Tractor loans are often settled in Lok Adalats.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4">
                  <FaIndustry />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">MSME & Business</h3>
                <p className="text-gray-600">
                  Small businesses facing losses, GST issues, or market slowdowns can seek settlement under the MSME OTS policy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl mb-4">
                  <FaUserTie />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Loans</h3>
                <p className="text-gray-600">
                  Salaried individuals facing job loss, medical emergencies, or salary cuts are eligible for settlement of unsecured loans.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div id="process" className="bg-[#f8fafc] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-7xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                PNB Settlement Process: Step-by-Step
              </h2>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "01", title: "NPA Classification", desc: "Your account must be classified as NPA (usually 90 days overdue)." },
                  { step: "02", title: "Proposal Submission", desc: "We submit a formal OTS proposal to the Branch Manager." },
                  { step: "03", title: "Assessment", desc: "The bank assesses the value of security (if any) and your repayment capacity." },
                  { step: "04", title: "Approval", desc: "The proposal goes to the Circle/Zonal Office for approval based on the amount." },
                  { step: "05", title: "Payment & NDC", desc: "You pay the OTS amount within the stipulated time (usually 3-6 months) to get the NDC." }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 opacity-50 group-hover:text-red-50 transition-colors">
                      {item.step}
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-[#A20416] font-bold mb-4">
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

          {/* Lok Adalat Section */}
          <div id="lok-adalat" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <div className="bg-[#FFF8E1] rounded-3xl p-10 border border-[#FFC72C]">
              <h2 className="text-3xl font-bold text-[#A20416] mb-6 text-center">The Power of Lok Adalat</h2>
              <p className="text-lg text-gray-800 mb-8 text-center">
                National Lok Adalats are held quarterly across India. PNB actively refers cases here for quick settlement.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Lok Adalat?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2"/> <strong>Speed:</strong> Cases are settled in a single day.</li>
                    <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2"/> <strong>Finality:</strong> The award is final and cannot be appealed.</li>
                    <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2"/> <strong>Refund:</strong> Court fees (if paid) are refunded.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Role</h3>
                  <p className="text-gray-700">
                    We represent you before the Lok Adalat bench. We ensure that the bank officials do not pressure you into an unfair amount and that the settlement terms are recorded correctly in the award.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div id="documents" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Required Documents</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#A20416]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">KYC & Loan Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-[#A20416] mr-2"/> PAN Card & Aadhaar Card</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#A20416] mr-2"/> Loan Account Number & Branch Details</li>
                  <li className="flex items-center"><FaCheckCircle className="text-[#A20416] mr-2"/> Latest Loan Account Statement</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#FFC72C]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hardship Proof</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-yellow-600 mr-2"/> Income Tax Returns (ITR) - showing loss</li>
                  <li className="flex items-center"><FaCheckCircle className="text-yellow-600 mr-2"/> Medical Reports (if applicable)</li>
                  <li className="flex items-center"><FaCheckCircle className="text-yellow-600 mr-2"/> Crop Loss Certificate (for Farmers)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SARFAESI & Legal Action */}
          <div id="sarfaesi" className="bg-[#1a1a1a] text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Understanding SARFAESI & Legal Actions</h2>
              <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                For secured loans (Home/LAP/MSME), PNB uses the SARFAESI Act, 2002. This allows them to seize your property without court intervention.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Demand Notice (13/2)</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    The first warning giving you 60 days to pay. We reply to this notice raising valid objections to stop further action.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Possession Notice (13/4)</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    If you don't pay, PNB takes symbolic possession. We can challenge this in the Debt Recovery Tribunal (DRT).
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">Auction Sale</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    The final step. We can still stop the auction by negotiating an OTS or finding a buyer for a private treaty sale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Restructuring vs Settlement */}
          <div id="restructuring-vs-settlement" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Restructuring vs. Settlement</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#A20416] text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-left">Loan Restructuring</th>
                    <th className="p-4 text-left">Loan Settlement (OTS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900">What is it?</td>
                    <td className="p-4 text-gray-700">Extending tenure to lower EMI.</td>
                    <td className="p-4 text-gray-700">Closing loan with reduced payment.</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-4 font-bold text-gray-900">Interest</td>
                    <td className="p-4 text-gray-700">You pay full interest.</td>
                    <td className="p-4 text-gray-700">Interest is often waived.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900">CIBIL Score</td>
                    <td className="p-4 text-gray-700">Maintained (if paid regularly).</td>
                    <td className="p-4 text-gray-700">Drops (marked as Settled).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CIBIL Impact */}
          <div id="cibil-impact" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaHandHoldingUsd className="text-red-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">CIBIL Score Impact</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Settlement will mark your account as "Settled" in CIBIL. This is a negative flag. However, it is better than "Written Off" or "Suit Filed".
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">Recovery Path</h4>
                <p className="text-sm text-green-700">
                  After settlement, you can rebuild your score by using a secured credit card or a small gold loan and repaying it on time for 12-24 months.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose AMA */}
          <div id="why-choose-ama" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Trust AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <FaUniversity className="text-5xl text-[#A20416] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">PSU Bank Experts</h3>
                  <p className="text-gray-600">We understand the specific circulars and approval hierarchy of Punjab National Bank.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <FaGavel className="text-5xl text-[#A20416] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Lok Adalat Representation</h3>
                  <p className="text-gray-600">We physically represent you in Lok Adalats to ensure the settlement decree is in your favor.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <FaShieldAlt className="text-5xl text-[#A20416] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">End-to-End Support</h3>
                  <p className="text-gray-600">From the first legal notice reply to the final No Dues Certificate, we are with you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-red-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "My MSME loan with PNB was in NPA for 2 years. AMA Legal Solutions helped me settle it under the Special OTS scheme. Saved 40% on the total dues."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#A20416] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Suresh Kumar</p>
                    <p className="text-sm text-gray-500">Ludhiana</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-red-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I had a KCC loan issue. The lawyers represented me in the Lok Adalat and got a very fair settlement. Highly professional team."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#FFC72C] rounded-full flex items-center justify-center text-[#A20416] font-bold text-xl mr-4">
                    R
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Rajinder Singh</p>
                    <p className="text-sm text-gray-500">Amritsar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faqs" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-[#A20416] mb-12">Frequently Asked Questions</h2>
            <FaqSection />
          </div>

          {/* Final CTA */}
          <div className="container mx-auto px-4 pb-20">
            <div className="bg-[#A20416] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your PNB Loan?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Don't let debt stress you out. Use the Special OTS Scheme 2025 to settle your PNB loan legally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#FFC72C] text-[#A20416] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-[#FFC72C] hover:bg-[#FFC72C] hover:text-[#A20416] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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
                "Andhra Pradesh": "AndhraPradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "Assam",
                "Bihar": "Bihar",
                "Chhattisgarh": "Chhattisgarh",
                "Delhi": "Delhi",
                "Goa": "Goa",
                "Gujarat": "Gujarat",
                "Haryana": "Haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "Jharkhand",
                "Karnataka": "Karnataka",
                "Kerala": "Kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "Maharashtra",
                "Manipur": "Manipur",
                "Meghalaya": "Meghalaya",
                "Mizoram": "Mizoram",
                "Odisha": "Odisha",
                "Puducherry": "Puducherry",
                "Punjab": "Punjab",
                "Rajasthan": "Rajasthan",
                "Sikkim": "Sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "Telangana",
                "Tripura": "Tripura",
                "Uttar Pradesh": "UttarPradesh",
                "Uttarakhand": "Uttrakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>

        </div>
      </div>
    </>
  );
}

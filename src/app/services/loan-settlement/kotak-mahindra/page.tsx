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
      "name": "Kotak Mahindra Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/kotak-mahindra"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kotak Mahindra Bank Loan Settlement Process 2025: Complete Guide",
  "description": "Expert legal guide on Kotak Mahindra Bank loan settlement. Learn how to settle Kotak personal loans and credit cards, stop harassment, and negotiate OTS.",
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
  "datePublished": "2023-11-21",
  "dateModified": "2023-11-21"
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kotak Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Professional legal services for settling Kotak Mahindra Bank loans and credit cards.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "680"
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
        "name": "Amit Deshmukh"
      },
      "reviewBody": "I had a huge credit card debt with Kotak. AMA Legal Solutions negotiated a 55% waiver for me. The process was smooth and transparent."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Patil"
      },
      "reviewBody": "Very professional team. They stopped the harassment from recovery agents and helped me settle my personal loan legally. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "Kotak Mahindra Loan Settlement Process | Kotak Credit Card Settlement",
  description:
    "Complete guide to Kotak Mahindra Bank loan settlement. Negotiate OTS, stop recovery harassment, and settle your personal loan or credit card debt legally.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/kotak-mahindra',
  },
  openGraph: {
    title: "Kotak Mahindra Loan Settlement Process | Kotak Credit Card Settlement",
    description: "Complete guide to Kotak Mahindra Bank loan settlement. Negotiate OTS, stop recovery harassment, and settle your personal loan or credit card debt legally.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/kotak-mahindra",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Kotak Loan Settlement Services",
      },
    ],
  },
};

export default function KotakLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-ots", title: "What is Kotak OTS?" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "process", title: "Settlement Process" },
    { id: "documents", title: "Required Documents" },
    { id: "legal-notices", title: "Legal Notices" },
    { id: "restructuring-vs-settlement", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "why-choose-ama", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Kotak Loan Settlement", href: "/services/loan-settlement/kotak-mahindra" },
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
        {/* Full Width Hero Section */}
        <div className="relative bg-gradient-to-r from-[#ed1c24] to-[#003366] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#ed1c24] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Kotak Mahindra Bank Expert
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-blue-300">Kotak Loan</span> <br className="hidden md:block" /> Legally & Effectively
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 font-light">
              Expert legal negotiation to reduce your Kotak debt, stop harassment, and achieve a dignified financial exit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#ed1c24] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#ed1c24] text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
            Facing Financial Stress with Kotak Mahindra Bank?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Kotak Mahindra Bank is one of India's leading private banks, offering a wide range of financial products. While they are known for their efficiency, they are also very stringent when it comes to loan recovery. If you have defaulted on a personal loan or credit card payment due to genuine financial hardship, you might be facing aggressive recovery tactics, including incessant calls and legal notices.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Life is unpredictable. Events like job loss, medical emergencies, or business failures can disrupt your financial stability, making it impossible to keep up with EMIs. In such situations, the mounting interest and penalties can make the debt seem insurmountable. But there is a legal solution.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong>Kotak Loan Settlement</strong> is a legitimate process that allows you to negotiate with the bank to close your loan account by paying a reduced amount. At AMA Legal Solutions, we provide expert legal representation to help you navigate this process, stop the harassment, and settle your debt for a fraction of the outstanding amount.
          </p>
        </div>

        {/* What is OTS - Card Layout */}
        <div id="what-is-ots" className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#003366] mb-6">Understanding Kotak One Time Settlement (OTS)</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  One Time Settlement (OTS) is a compromise agreement offered by Kotak Mahindra Bank to borrowers who are unable to repay their full dues. This is typically offered when a loan has become a Non-Performing Asset (NPA).
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Through an OTS, the bank agrees to waive a significant portion of the accumulated interest and penalties, and sometimes even a part of the principal amount. The borrower agrees to pay the remaining negotiated amount in a single lump sum or a few installments to close the account permanently.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Massive Savings:</strong> Save up to 50% or more on your total outstanding debt.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Legal Closure:</strong> Receive a formal No Dues Certificate ensuring no future claims.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Stop Harassment:</strong> Legal representation stops recovery agents from contacting you.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#ed1c24]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Settlement Illustration</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Principal Amount</span>
                    <span className="font-bold text-gray-800">₹4,00,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Interest & Penalties</span>
                    <span className="font-bold text-gray-800">₹2,50,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Total Outstanding</span>
                    <span className="font-bold text-red-600">₹6,50,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Settlement Amount</span>
                    <span className="font-bold text-green-600">₹3,25,000</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-gray-900 font-bold">Total Savings</span>
                    <span className="font-bold text-[#ed1c24]">50% (₹3.25 Lakhs)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">*Figures are for illustration only. Actual settlement depends on individual case negotiation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div id="eligibility" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is Eligible for Kotak Loan Settlement?</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Kotak Mahindra Bank considers settlement requests based on the genuineness of the borrower's financial hardship. You may be eligible if you are facing:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-[#003366] text-2xl mb-4">
                <FaUserTie />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Loss</h3>
              <p className="text-gray-600">
                Involuntary unemployment or a significant pay cut that makes it impossible to service your existing debt obligations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-[#003366] text-2xl mb-4">
                <FaUniversity />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Loss</h3>
              <p className="text-gray-600">
                Severe downturn in business, closure of a venture, or bankruptcy leading to a lack of funds for repayment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-[#003366] text-2xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Crisis</h3>
              <p className="text-gray-600">
                Major medical emergencies in the family requiring substantial expenditure, depleting your savings and repayment capacity.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div id="process" className="bg-[#1a202c] text-white py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Kotak Settlement Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="text-6xl font-bold text-gray-700 opacity-20 absolute -top-8 -left-4">01</div>
                <h3 className="text-xl font-bold text-[#D2A02A] mb-4 relative z-10">Case Analysis</h3>
                <p className="text-gray-400">
                  We review your loan documents and financial situation to formulate a strong settlement strategy tailored to your needs.
                </p>
              </div>
              <div className="relative">
                <div className="text-6xl font-bold text-gray-700 opacity-20 absolute -top-8 -left-4">02</div>
                <h3 className="text-xl font-bold text-[#D2A02A] mb-4 relative z-10">Legal Notice</h3>
                <p className="text-gray-400">
                  We send a legal notice of representation to Kotak Bank, stopping direct harassment and taking over all communication.
                </p>
              </div>
              <div className="relative">
                <div className="text-6xl font-bold text-gray-700 opacity-20 absolute -top-8 -left-4">03</div>
                <h3 className="text-xl font-bold text-[#D2A02A] mb-4 relative z-10">Negotiation</h3>
                <p className="text-gray-400">
                  Our experienced lawyers negotiate with the bank's recovery team to secure the maximum possible waiver on your debt.
                </p>
              </div>
              <div className="relative">
                <div className="text-6xl font-bold text-gray-700 opacity-20 absolute -top-8 -left-4">04</div>
                <h3 className="text-xl font-bold text-[#D2A02A] mb-4 relative z-10">Settlement</h3>
                <p className="text-gray-400">
                  Upon agreement, you pay the settlement amount, and we ensure you receive the official Settlement Letter and No Dues Certificate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div id="documents" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Documents Required</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#ed1c24] mr-3" />
                <span className="text-gray-700">Loan Account Statement</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#ed1c24] mr-3" />
                <span className="text-gray-700">Hardship Proof (Medical/Job Loss)</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#ed1c24] mr-3" />
                <span className="text-gray-700">KYC Documents (Aadhar/PAN)</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#ed1c24] mr-3" />
                <span className="text-gray-700">Settlement Proposal Letter</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#ed1c24] mr-3" />
                <span className="text-gray-700">Bank Statements (Last 6 months)</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#ed1c24] mr-3" />
                <span className="text-gray-700">Income Tax Returns (if available)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Notices Section */}
        <div id="legal-notices" className="bg-blue-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">Legal Actions by Kotak Mahindra Bank</h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Defaulting on a loan can trigger legal consequences. Being aware of these actions is the first step in defending yourself.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaGavel className="text-[#ed1c24] mr-3" /> Section 138 (Cheque Bounce)
                </h3>
                <p className="text-gray-600">
                  If your EMI cheque or ECS bounces, Kotak Bank can file a criminal case under Section 138. This is a bailable offense, but ignoring it can lead to an arrest warrant. We provide legal representation to handle these cases and seek an out-of-court settlement.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBalanceScale className="text-[#ed1c24] mr-3" /> Arbitration & SARFAESI
                </h3>
                <p className="text-gray-600">
                  For unsecured loans, the bank may initiate arbitration. For secured loans, they may use the SARFAESI Act to seize collateral. It is critical to have legal counsel to represent your interests in these proceedings and negotiate a settlement before assets are lost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Restructuring vs Settlement */}
        <div id="restructuring-vs-settlement" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Restructuring vs. Settlement: What's Right for You?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-[#003366] text-white">
                  <th className="p-4 border-b border-blue-800">Feature</th>
                  <th className="p-4 border-b border-blue-800">Loan Restructuring</th>
                  <th className="p-4 border-b border-blue-800">Loan Settlement</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="p-4 border-b border-gray-100 font-semibold">Goal</td>
                  <td className="p-4 border-b border-gray-100">Ease repayment terms.</td>
                  <td className="p-4 border-b border-gray-100">Close loan with reduced payment.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border-b border-gray-100 font-semibold">Payment</td>
                  <td className="p-4 border-b border-gray-100">Full amount over longer time.</td>
                  <td className="p-4 border-b border-gray-100">Reduced lump sum amount.</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-semibold">CIBIL Score</td>
                  <td className="p-4 border-b border-gray-100">Minimal impact.</td>
                  <td className="p-4 border-b border-gray-100">Negative impact ("Settled" status).</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border-b border-gray-100 font-semibold">Ideal For</td>
                  <td className="p-4 border-b border-gray-100">Temporary liquidity crunch.</td>
                  <td className="p-4 border-b border-gray-100">Deep financial distress.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CIBIL Impact */}
        <div id="cibil-impact" className="bg-gray-900 text-white py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Understanding CIBIL Score Impact</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Opting for a loan settlement will result in your loan account being marked as "Settled" in your credit report. This is a negative status that indicates the loan was not paid in full, and it can lower your CIBIL score by 50-100 points.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              However, this is often a necessary trade-off to escape a debt trap. A "Settled" status is preferable to a "Written Off" status or ongoing default. Once you are debt-free, you can work on rebuilding your credit score through disciplined financial behavior over the next 12-24 months.
            </p>
          </div>
        </div>

        {/* Why Choose AMA */}
        <div id="why-choose-ama" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Why Choose AMA Legal Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-[#ed1c24] text-3xl mx-auto mb-6">
                <FaHandHoldingUsd />
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Negotiation</h3>
              <p className="text-gray-600">
                We have a strong track record of negotiating favorable settlements with Kotak Mahindra Bank, saving our clients lakhs of rupees.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-[#ed1c24] text-3xl mx-auto mb-6">
                <FaPhoneSlash />
              </div>
              <h3 className="text-xl font-bold mb-4">End Harassment</h3>
              <p className="text-gray-600">
                Our legal intervention ensures that recovery agents stop harassing you immediately, restoring your peace of mind.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-[#ed1c24] text-3xl mx-auto mb-6">
                <FaGavel />
              </div>
              <h3 className="text-xl font-bold mb-4">Full Legal Support</h3>
              <p className="text-gray-600">
                From replying to legal notices to representing you in court, we handle all legal aspects of your debt settlement.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-red-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I was drowning in credit card debt with Kotak. The interest was killing me. AMA Legal Solutions stepped in and negotiated a settlement that I could actually afford. I saved over 50%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#ed1c24] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    A
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Amit Deshmukh</p>
                    <p className="text-sm text-gray-500">Sales Manager, Pune</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-red-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I received a Section 138 notice from Kotak for my personal loan. I was terrified. AMA's lawyers handled the court case and settled the loan out of court. I am so relieved."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sneha Patil</p>
                    <p className="text-sm text-gray-500">Teacher, Mumbai</p>
                  </div>
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
          <div className="bg-[#ed1c24] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your Kotak Loan?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Take the first step towards a debt-free life. Contact us for a confidential consultation and expert settlement advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-[#ed1c24] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                  Book Free Consultation
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#ed1c24] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

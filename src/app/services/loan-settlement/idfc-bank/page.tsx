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
      "name": "IDFC Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/IDFC"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "IDFC FIRST Bank Loan Settlement Process 2025: Legal Guide",
  "description": "Expert guide on IDFC FIRST Bank loan settlement. Learn how to settle IDFC personal loans and credit cards, stop harassment, and understand the OTS process.",
  "image": "https://amalegalsolutions.com/services/3.png",
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
  "datePublished": "2023-11-21",
  "dateModified": "2023-11-21"
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "IDFC Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Professional legal services for settling IDFC FIRST Bank loans and credit cards.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "720"
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
        "name": "Suresh Menon"
      },
      "reviewBody": "I was struggling with an IDFC personal loan. AMA Legal Solutions helped me settle it for 40% of the outstanding amount. Excellent service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kavita Reddy"
      },
      "reviewBody": "The harassment from recovery agents was unbearable. AMA stepped in and stopped it immediately. They handled the entire settlement process professionally."
    }
  ]
};

export const metadata = {
  title: "IDFC Loan Settlement Process | IDFC Credit Card Settlement Letter",
  description:
    "Complete guide to IDFC FIRST Bank loan settlement. Negotiate OTS, stop recovery harassment, and settle your personal loan or credit card debt legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/IDFC',
  },
  openGraph: {
    title: "IDFC Loan Settlement Process | IDFC Credit Card Settlement Letter",
    description: "Complete guide to IDFC FIRST Bank loan settlement. Negotiate OTS, stop recovery harassment, and settle your personal loan or credit card debt legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/IDFC",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "IDFC Loan Settlement Services",
      },
    ],
  },
};

export default function IDFCLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-ots", title: "What is IDFC OTS?" },
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
    { label: "IDFC Loan Settlement", href: "/services/loan-settlement/IDFC" },
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
        <div className="relative bg-gradient-to-r from-[#9d1d27] to-[#5e0b12] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#9d1d27] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              IDFC FIRST Bank Expert
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Resolve Your <span className="text-yellow-400">IDFC Loan</span> <br className="hidden md:block" /> With Legal Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 font-light">
              Expert legal negotiation to reduce your IDFC debt, stop harassment, and achieve a dignified settlement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#9d1d27] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#9d1d27] text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
            Struggling with IDFC FIRST Bank Loan Repayments?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            IDFC FIRST Bank is a prominent player in the Indian banking sector, known for its customer-friendly approach. However, when it comes to loan defaults, they, like any other bank, have strict recovery protocols. If you have taken a personal loan, business loan, or used a credit card from IDFC FIRST Bank and are finding it impossible to keep up with the EMIs due to unforeseen life events, you are not alone.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Financial distress can strike anyone. Job loss, medical emergencies, or business downturns can suddenly turn a manageable debt into a burden. The constant calls from recovery agents and the fear of legal action can be paralyzing. But ignoring the problem will only make it worse.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong>IDFC Loan Settlement</strong> offers a legal and structured way out of this debt trap. It is a process where you negotiate with the bank to pay a reduced amount to close your loan account permanently. At AMA Legal Solutions, we specialize in navigating the complexities of IDFC's settlement policies to help you regain your financial freedom.
          </p>
        </div>

        {/* What is OTS - Card Layout */}
        <div id="what-is-ots" className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#9d1d27] mb-6">Understanding IDFC One Time Settlement (OTS)</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  One Time Settlement (OTS) is a compromise agreement offered by IDFC FIRST Bank to borrowers who have defaulted on their loans and are unable to pay the full amount. This is typically a last resort for the bank to recover a portion of the bad debt (NPA) rather than writing it off completely.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  In an OTS, the bank agrees to waive a significant portion of the interest, penal charges, and sometimes even a part of the principal amount. The borrower, in turn, agrees to pay the negotiated settlement amount in a single lump sum or a few installments. Once paid, the loan account is closed.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Debt Reduction:</strong> Significant reduction in total outstanding dues.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Legal Immunity:</strong> Protection from further legal actions like civil suits or SARFAESI proceedings.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Peace of Mind:</strong> End to harassment from recovery agents and collection calls.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#9d1d27]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Settlement Example</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Principal Amount</span>
                    <span className="font-bold text-gray-800">₹5,00,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Interest & Penalties</span>
                    <span className="font-bold text-gray-800">₹3,50,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Total Outstanding</span>
                    <span className="font-bold text-red-600">₹8,50,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Settlement Amount</span>
                    <span className="font-bold text-green-600">₹4,25,000</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-gray-900 font-bold">Total Savings</span>
                    <span className="font-bold text-[#9d1d27]">50% (₹4.25 Lakhs)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">*Figures are for illustration only. Actual settlement amounts vary based on case specifics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div id="eligibility" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who Can Apply for IDFC Loan Settlement?</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Settlement is not an automatic right. IDFC FIRST Bank evaluates each case to ensure the default is due to genuine hardship and not willful intent. Common grounds for eligibility include:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-[#9d1d27] text-2xl mb-4">
                <FaUserTie />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Loss of Employment</h3>
              <p className="text-gray-600">
                Sudden job loss or retrenchment leading to a complete stop in income flow is a primary ground for settlement consideration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-[#9d1d27] text-2xl mb-4">
                <FaUniversity />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Failure</h3>
              <p className="text-gray-600">
                Significant business losses, closure of operations, or bankruptcy can be valid reasons for inability to repay business or personal loans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-[#9d1d27] text-2xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Emergency</h3>
              <p className="text-gray-600">
                Severe illness or medical crisis in the family that drains financial resources and impacts repayment capacity.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div id="process" className="bg-[#1a202c] text-white py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our IDFC Loan Settlement Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="text-6xl font-bold text-gray-700 opacity-20 absolute -top-8 -left-4">01</div>
                <h3 className="text-xl font-bold text-[#D2A02A] mb-4 relative z-10">Consultation & Analysis</h3>
                <p className="text-gray-400">
                  We analyze your loan details, financial status, and the extent of default to determine the best settlement strategy.
                </p>
              </div>
              <div className="relative">
                <div className="text-6xl font-bold text-gray-700 opacity-20 absolute -top-8 -left-4">02</div>
                <h3 className="text-xl font-bold text-[#D2A02A] mb-4 relative z-10">Legal Representation</h3>
                <p className="text-gray-400">
                  We formally inform IDFC Bank that we are representing you. This stops direct harassment and channels all communication through us.
                </p>
              </div>
              <div className="relative">
                <div className="text-6xl font-bold text-gray-700 opacity-20 absolute -top-8 -left-4">03</div>
                <h3 className="text-xl font-bold text-[#D2A02A] mb-4 relative z-10">Negotiation</h3>
                <p className="text-gray-400">
                  Our experts negotiate with the bank's credit committee to waive interest and penalties, aiming for the lowest possible settlement amount.
                </p>
              </div>
              <div className="relative">
                <div className="text-6xl font-bold text-gray-700 opacity-20 absolute -top-8 -left-4">04</div>
                <h3 className="text-xl font-bold text-[#D2A02A] mb-4 relative z-10">Closure & NOC</h3>
                <p className="text-gray-400">
                  Once the settlement amount is paid, we ensure you receive the Settlement Letter and subsequently the No Dues Certificate (NOC).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div id="documents" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Documents Required for Settlement</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#9d1d27] mr-3" />
                <span className="text-gray-700">Loan Account Statement</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#9d1d27] mr-3" />
                <span className="text-gray-700">Settlement Proposal Letter</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#9d1d27] mr-3" />
                <span className="text-gray-700">KYC Documents (Aadhar/PAN)</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#9d1d27] mr-3" />
                <span className="text-gray-700">Termination Letter (if job loss)</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#9d1d27] mr-3" />
                <span className="text-gray-700">Medical Records (if applicable)</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FaFileContract className="text-[#9d1d27] mr-3" />
                <span className="text-gray-700">Income Tax Returns</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Notices Section */}
        <div id="legal-notices" className="bg-red-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#9d1d27] mb-8 text-center">Understanding Legal Actions by IDFC Bank</h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              If you default on your loan, IDFC Bank may initiate various legal proceedings. It is crucial to understand these and not panic.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaGavel className="text-[#9d1d27] mr-3" /> Section 138 (Cheque Bounce)
                </h3>
                <p className="text-gray-600">
                  If a cheque or ECS mandate bounces, the bank can file a criminal case under Section 138 of the Negotiable Instruments Act. This is a serious offense but is bailable. We can represent you in court and seek a settlement to close the case.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBalanceScale className="text-[#9d1d27] mr-3" /> Arbitration Proceedings
                </h3>
                <p className="text-gray-600">
                  Loan agreements often have an arbitration clause. The bank may appoint an arbitrator to pass an award against you. It is vital to attend these proceedings and present your case for settlement to avoid an ex-parte award.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Restructuring vs Settlement */}
        <div id="restructuring-vs-settlement" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Loan Restructuring vs. Loan Settlement</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-[#9d1d27] text-white">
                  <th className="p-4 border-b border-red-800">Feature</th>
                  <th className="p-4 border-b border-red-800">Loan Restructuring</th>
                  <th className="p-4 border-b border-red-800">Loan Settlement</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="p-4 border-b border-gray-100 font-semibold">Objective</td>
                  <td className="p-4 border-b border-gray-100">To make repayment easier by changing terms.</td>
                  <td className="p-4 border-b border-gray-100">To close the loan by paying less.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border-b border-gray-100 font-semibold">Repayment Amount</td>
                  <td className="p-4 border-b border-gray-100">Full Principal + Interest (usually).</td>
                  <td className="p-4 border-b border-gray-100">Reduced Lump Sum (Principal + Partial Interest).</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-semibold">Credit Score Impact</td>
                  <td className="p-4 border-b border-gray-100">Moderate impact.</td>
                  <td className="p-4 border-b border-gray-100">Significant negative impact ("Settled" status).</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border-b border-gray-100 font-semibold">Best For</td>
                  <td className="p-4 border-b border-gray-100">Temporary cash flow issues.</td>
                  <td className="p-4 border-b border-gray-100">Complete inability to pay full debt.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CIBIL Impact */}
        <div id="cibil-impact" className="bg-gray-900 text-white py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Impact on CIBIL Score</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              It is important to be transparent: Loan settlement will lower your CIBIL score. Your account status will change to "Settled," which indicates to future lenders that the loan was not paid in full. This may drop your score by 50-100 points.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              However, a "Settled" status is far better than a "Written Off" status or a continuing default. A settlement stops the bleeding. Once the debt is cleared, you can start rebuilding your credit score by using secured credit cards and paying other bills on time. With discipline, your score can recover in 12-24 months.
            </p>
          </div>
        </div>

        {/* Why Choose AMA */}
        <div id="why-choose-ama" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Why Choose AMA Legal Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-[#9d1d27] text-3xl mx-auto mb-6">
                <FaHandHoldingUsd />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Negotiation</h3>
              <p className="text-gray-600">
                We have years of experience negotiating with IDFC Bank's recovery teams, ensuring you get the best possible deal.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-[#9d1d27] text-3xl mx-auto mb-6">
                <FaPhoneSlash />
              </div>
              <h3 className="text-xl font-bold mb-4">Stop Harassment</h3>
              <p className="text-gray-600">
                Our legal intervention puts an immediate stop to abusive calls and harassment from recovery agents.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-[#9d1d27] text-3xl mx-auto mb-6">
                <FaGavel />
              </div>
              <h3 className="text-xl font-bold mb-4">Legal Protection</h3>
              <p className="text-gray-600">
                We provide full legal support for any court cases or notices you receive during the settlement process.
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
                  "I had a personal loan of 12 Lakhs with IDFC and lost my job. The interest piled up to 18 Lakhs. AMA Legal Solutions helped me settle the entire amount for 6.5 Lakhs. I can't thank them enough."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#9d1d27] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Suresh Menon</p>
                    <p className="text-sm text-gray-500">IT Professional, Bangalore</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-red-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "The recovery agents were calling my relatives and office. It was humiliating. Once I hired AMA, the calls stopped within 48 hours. They handled everything professionally."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    K
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Kavita Reddy</p>
                    <p className="text-sm text-gray-500">Entrepreneur, Hyderabad</p>
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
          <div className="bg-[#9d1d27] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Settle Your IDFC Loan?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Don't let debt control your life. Get expert legal help to negotiate a fair settlement and start fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-[#9d1d27] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                  Book Free Consultation
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#9d1d27] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

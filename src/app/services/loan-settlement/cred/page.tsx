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
      "name": "Cred Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/cred"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cred Cash Loan Settlement Process 2025: Complete Legal Guide",
  "description": "Struggling with Cred Cash loan repayment? Learn about the Cred loan settlement process, OTS policies, settlement letter format, and how to settle your personal loan debt legally.",
  "image": "https://amalegalsolutions.com/services/4.png",
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
  "name": "Cred Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert legal assistance for settling Cred Cash personal loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "950"
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
        "name": "Rahul Verma"
      },
      "reviewBody": "I was stuck with a high-interest Cred Cash loan. AMA Legal Solutions helped me negotiate a settlement with the lending partner and closed the loan."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Singh"
      },
      "reviewBody": "Professional and effective. They handled the legal notices and stopped the harassment from recovery agents. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "Cred Loan Settlement Process | Cred Cash Loan Settlement Letter Format",
  description:
    "Expert guide on Cred (Cred Cash) loan settlement. Learn how to settle Cred personal loans. Get legal help to negotiate OTS, stop harassment, and save up to 50%.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/cred',
  },
  openGraph: {
    title: "Cred Loan Settlement Process | Cred Cash Loan Settlement Letter Format",
    description: "Expert guide on Cred (Cred Cash) loan settlement. Learn how to settle Cred personal loans. Get legal help to negotiate OTS, stop harassment, and save up to 50%.",
    url: "https://amalegalsolutions.com/services/loan-settlement/cred",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "Cred Loan Settlement Services",
      },
    ],
  },
};

export default function CredLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-ots", title: "What is Cred OTS?" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "process", title: "Settlement Process" },
    { id: "documents", title: "Required Documents" },
    { id: "legal-notices", title: "Legal Notices & Actions" },
    { id: "restructuring-vs-settlement", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "why-choose-ama", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Cred Loan Settlement", href: "/services/loan-settlement/cred" },
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
        <div className="relative bg-black text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 0 L100 100 L0 100 Z" fill="#333" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Cred Cash Specialization
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-gray-400">Cred Cash Loan</span> <br className="hidden md:block" /> With Legal Protection
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300 font-light">
              Stop harassment, reduce your debt by up to 50%, and close your Cred Cash loan permanently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-black font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
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

        {/* Introduction Section */}
        <div id="introduction" className="container mx-auto px-4 py-12 max-w-4xl text-center scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Trapped in Cred Cash Debt? There is a Way Out.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Cred is known for its premium user base and rewards, but its lending product, Cred Cash, is essentially a personal loan provided in partnership with NBFCs like IDFC First Bank. While the disbursement is instant, the interest rates can be high, and repayment terms strict. Life events like job loss or medical emergencies can disrupt your repayment capacity, leading to a debt trap.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Defaulting on a Cred Cash loan can lead to aggressive recovery tactics, legal notices, and a severe impact on your credit score. Since Cred acts as a platform, you might face pressure from both Cred and the underlying lending partner. This dual pressure can be overwhelming.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            However, there is a legal solution. <strong>Cred Loan Settlement</strong> is a legitimate option for borrowers in genuine financial distress. It allows you to negotiate with the lender to pay a reduced lump sum amount to close the loan account. At AMA Legal Solutions, we handle the complex negotiations with Cred's partners to help you become debt-free.
          </p>
        </div>

        {/* What is OTS - Card Layout */}
        <div id="what-is-ots" className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">What is Cred One Time Settlement (OTS)?</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  One Time Settlement (OTS) is a formal agreement where the lender (Cred's partner NBFC) agrees to accept a reduced payment to close a non-performing loan account. This typically happens when the loan has been classified as a Non-Performing Asset (NPA).
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Lenders prefer recovering a portion of the money rather than spending years in legal battles. If you can prove genuine financial hardship, they may agree to waive off the accumulated interest, penal charges, and a portion of the principal amount.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-black mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Waiver of Interest:</strong> The lender often waives off penal interest and other accumulated charges.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-black mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Legal Closure:</strong> You get a "No Dues Certificate" confirming the loan is closed.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-black mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Stop Harassment:</strong> Legal intervention stops recovery agent calls immediately.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-black">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Example Scenario</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Principal Amount</span>
                    <span className="font-bold text-gray-800">₹2,00,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Interest & Penalties</span>
                    <span className="font-bold text-gray-800">₹80,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Total Outstanding</span>
                    <span className="font-bold text-red-600">₹2,80,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Settlement Amount</span>
                    <span className="font-bold text-green-600">₹1,40,000</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-gray-900 font-bold">Total Savings</span>
                    <span className="font-bold text-black">50% (₹1,40,000)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">*Figures are for illustration. Actual settlement depends on individual cases, delinquency period, and negotiation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div id="eligibility" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is Eligible for Cred Loan Settlement?</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Settlement is not a right but a negotiation. Lenders will only agree to settle if they are convinced that your inability to pay is genuine. Here are the common grounds for eligibility:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl mb-4">
                <FaUserTie />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Loss</h3>
              <p className="text-gray-600">
                If you have lost your job due to layoffs, company closure, or resignation and have been unemployed for a significant period, you can apply for settlement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4">
                <FaHandHoldingUsd />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Failure</h3>
              <p className="text-gray-600">
                Entrepreneurs facing severe losses, bankruptcy, or closure of business operations can use their financial statements to prove hardship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Emergency</h3>
              <p className="text-gray-600">
                Severe illness, hospitalization of self or family members that has drained your savings and income capacity is a valid ground for settlement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl mb-4">
                <FaBalanceScale />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Divorce or Death</h3>
              <p className="text-gray-600">
                Loss of a primary earning member in the family or legal separation affecting household income can be presented as a reason for settlement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-4">
                <FaGavel />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Willful Default (Not Eligible)</h3>
              <p className="text-gray-600">
                If you have the funds but are choosing not to pay, the lender will not settle. They may instead initiate strict legal action against you.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section - Horizontal Cards */}
        <div id="process" className="bg-[#f8fafc] py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our 5-Step Cred Settlement Process
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Case Evaluation", desc: "We review your documents to prove genuine financial hardship." },
                { step: "02", title: "Legal Notice", desc: "We inform the lender of our representation to stop harassment." },
                { step: "03", title: "Proposal", desc: "We draft and submit a realistic settlement proposal to the lender." },
                { step: "04", title: "Negotiation", desc: "Our lawyers negotiate hard to get the maximum possible waiver." },
                { step: "05", title: "Closure", desc: "You pay the settled amount and get the No Dues Certificate." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 opacity-50 group-hover:text-black transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black font-bold mb-4">
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
                  <h4 className="text-lg font-bold text-black mb-2">Step 1: Documentation & Assessment</h4>
                  <p className="text-gray-700">
                    The process starts with you providing us with your loan details and proof of hardship. We analyze your financial standing to determine the maximum amount you can afford to pay and the minimum amount the lender is likely to accept.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-2">Step 2: Legal Shielding</h4>
                  <p className="text-gray-700">
                    Harassment is the biggest pain point. We issue a formal "Letter of Representation" to the lending partner. This legal document states that you have appointed us as your legal counsel. Under RBI guidelines, once a lawyer is appointed, recovery agents must direct their communication to the lawyer, not the borrower.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-2">Step 3: The Settlement Proposal</h4>
                  <p className="text-gray-700">
                    We don't just ask for a settlement; we present a case. We draft a professional proposal highlighting your inability to pay due to specific reasons (job loss, medical issues) and offer a settlement amount. This is done in writing to create a paper trail.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-2">Step 4: Hard-Nosed Negotiation</h4>
                  <p className="text-gray-700">
                    Lenders will likely reject the first offer or counter with a high amount. This is where our experience counts. We engage in multiple rounds of negotiation with the lender's credit managers, citing legal precedents and your financial reality to bring the amount down.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-2">Step 5: Final Settlement & NDC</h4>
                  <p className="text-gray-700">
                    Once a figure is agreed upon, the lender issues a Settlement Letter. We verify this letter to ensure it contains no hidden clauses. You make the payment directly to your loan account (never to an agent). Finally, we follow up to ensure you receive the No Dues Certificate (NDC), officially closing the loan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div id="documents" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Documents Required for Cred Settlement</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            To convince the lender, we need to prove your financial distress. Having these documents ready speeds up the process.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">KYC & Loan Documents</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2"/> PAN Card & Aadhaar Card</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2"/> Latest Loan Account Statement</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2"/> All notices received from the lender</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2"/> Loan Agreement Copy (if available)</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proof of Financial Hardship</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-red-500 mr-2"/> Termination Letter / Resignation Acceptance</li>
                <li className="flex items-center"><FaCheckCircle className="text-red-500 mr-2"/> Medical Reports / Hospital Bills</li>
                <li className="flex items-center"><FaCheckCircle className="text-red-500 mr-2"/> Bank Statements showing salary stoppage</li>
                <li className="flex items-center"><FaCheckCircle className="text-red-500 mr-2"/> Business Balance Sheet (showing losses)</li>
                <li className="flex items-center"><FaCheckCircle className="text-red-500 mr-2"/> Death Certificate (in case of demise)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Notices Section */}
        <div id="legal-notices" className="bg-[#1a1a1a] text-white py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Understanding Legal Notices</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              If you default, lenders may send various legal notices. Ignoring them is dangerous. Here is what they mean and how we handle them.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Section 138 Notice</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Issued for <strong>Cheque Bounce</strong> or NACH failure. This is a criminal offense in India.
                </p>
                <p className="text-white font-semibold text-sm">
                  <strong>Our Action:</strong> We reply immediately, attend court hearings if needed, and push for an out-of-court settlement to quash the case.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Arbitration Notice</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Notice to resolve the dispute through an arbitrator appointed by the lender.
                </p>
                <p className="text-white font-semibold text-sm">
                  <strong>Our Action:</strong> We represent you in arbitration proceedings to ensure the award is fair and not one-sided.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Legal Demand Notice</h3>
                <p className="text-gray-300 text-sm mb-4">
                  A formal warning demanding payment of the full outstanding amount within a specific period.
                </p>
                <p className="text-white font-semibold text-sm">
                  <strong>Our Action:</strong> We respond with a legal reply stating your financial hardship and proposing a settlement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Restructuring vs Settlement */}
        <div id="restructuring-vs-settlement" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Loan Restructuring vs. Loan Settlement</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Many borrowers confuse these two options. Here is a clear comparison to help you decide.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-black text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">Loan Restructuring</th>
                  <th className="p-4 text-left">Loan Settlement (OTS)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold text-gray-900">What is it?</td>
                  <td className="p-4 text-gray-700">Changing terms (tenure/EMI) to make repayment easier.</td>
                  <td className="p-4 text-gray-700">Closing the loan by paying a reduced lump sum.</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Total Payment</td>
                  <td className="p-4 text-gray-700">You pay the full principal + interest (often more over time).</td>
                  <td className="p-4 text-gray-700">You pay significantly less (20-50% savings).</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold text-gray-900">Credit Score</td>
                  <td className="p-4 text-gray-700">Less impact. Shows as "Restructured".</td>
                  <td className="p-4 text-gray-700">Negative impact. Shows as "Settled".</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Best For</td>
                  <td className="p-4 text-gray-700">Temporary cash flow issues but intent to pay full.</td>
                  <td className="p-4 text-gray-700">Severe financial crisis with no hope of full repayment.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Closure</td>
                  <td className="p-4 text-gray-700">Loan continues for years.</td>
                  <td className="p-4 text-gray-700">Immediate closure and freedom from debt.</td>
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
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaHandHoldingUsd className="text-red-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">CIBIL Score Impact</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Settlement will mark your account as "Settled" in CIBIL, dropping your score by 50-100 points. This is a trade-off for becoming debt-free.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">The Good News</h4>
                <p className="text-sm text-green-700">
                  It stops the "Days Past Due" counter. You can rebuild your score to 750+ in 12-24 months using secured credit cards. We provide a post-settlement credit repair guide to all our clients.
                </p>
              </div>
            </div>

            {/* Legal Rights */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-black text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your Legal Rights</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-black mr-2">●</span> <strong>No Abusive Language:</strong> Recovery agents cannot use foul language or threats.
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">●</span> <strong>Timing:</strong> No calls before 8 AM or after 7 PM.
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">●</span> <strong>Privacy:</strong> They cannot inform your relatives or neighbors about your debt.
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">●</span> <strong>Representation:</strong> You have the right to appoint a lawyer to handle the lender.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us - 3 Column Grid */}
        <div id="why-choose-ama" className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AMA Legal Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <FaUniversity className="text-5xl text-black mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Fintech Expertise</h3>
                <p className="text-gray-600">We understand the specific algorithms and recovery tactics used by fintech apps like Cred, giving us an edge.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <FaFileContract className="text-5xl text-black mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Legal Protection</h3>
                <p className="text-gray-600">We are lawyers, not agents. We can handle legal notices and represent you in arbitration if needed.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <FaShieldAlt className="text-5xl text-black mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Zero Harassment</h3>
                <p className="text-gray-600">Once we step in, recovery agents are legally bound to talk to us, not you. We take the stress off your shoulders.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="text-6xl text-gray-200 absolute top-4 left-4">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                "I was stuck with a high-interest Cred Cash loan. AMA Legal Solutions helped me negotiate a settlement with the lending partner and closed the loan."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  R
                </div>
                <div>
                  <p className="font-bold text-gray-900">Rahul Verma</p>
                  <p className="text-sm text-gray-500">Software Engineer, Bangalore</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="text-6xl text-gray-200 absolute top-4 left-4">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                "Professional and effective. They handled the legal notices and stopped the harassment from recovery agents. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  P
                </div>
                <div>
                  <p className="font-bold text-gray-900">Priya Singh</p>
                  <p className="text-sm text-gray-500">Marketing Manager, Delhi</p>
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
          <div className="bg-black rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your Cred Loan?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Don't let debt define your life. Get expert legal help to settle your Cred loan and start fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-black font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                  Book Free Consultation
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

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
      "name": "SBI Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/SBI"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SBI Loan Settlement Process 2025: Rinn Samadhan & OTS Scheme Guide",
  "description": "Struggling with SBI loan repayment? Learn about the SBI loan settlement process, Rinn Samadhan scheme, OTS policies, and how to settle your personal loan or credit card debt legally.",
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
  "name": "SBI Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal assistance for settling SBI personal loans and credit card dues under Rinn Samadhan and OTS schemes.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
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
        "name": "Rajesh Kumar"
      },
      "reviewBody": "I was unable to pay my SBI personal loan due to job loss. AMA Legal Solutions helped me settle it under the Rinn Samadhan scheme with a 45% waiver. Excellent service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Gupta"
      },
      "reviewBody": "My SBI credit card debt was spiraling out of control. Their team handled the harassment and negotiated a fair settlement. Highly recommended for anyone in debt."
    }
  ]
};

export const metadata = {
  title: "SBI Loan Settlement Process 2025 | SBI OTS Scheme & Rinn Samadhan Details",
  description:
    "Expert guide on SBI loan settlement. Learn about Rinn Samadhan scheme, OTS policies for personal loans. Get legal help to negotiate, stop harassment, and save up to 50%.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/SBI',
  },
  openGraph: {
    title: "SBI Loan Settlement Process 2025 | SBI OTS Scheme & Rinn Samadhan Details",
    description: "Expert guide on SBI loan settlement. Learn about Rinn Samadhan scheme, OTS policies for personal loans. Get legal help to negotiate, stop harassment, and save up to 50%.",
    url: "https://amalegalsolutions.com/services/loan-settlement/SBI",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "SBI Loan Settlement Services",
      },
    ],
  },
};

export default function SBILoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-ots", title: "What is SBI OTS?" },
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
    { label: "SBI Loan Settlement", href: "/services/loan-settlement/SBI" },
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
        <div className="relative bg-gradient-to-r from-[#004c8f] to-[#003366] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              State Bank of India Specialization
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-blue-200">SBI Loan</span> <br className="hidden md:block" /> Under Rinn Samadhan
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 font-light">
              Stop legal action, reduce your debt by up to 50%, and close your SBI personal loan or credit card permanently with expert legal help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-blue-200 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
            Overwhelmed by SBI Debt? We Can Help You Settle.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            State Bank of India (SBI) is the nation's largest lender, trusted by millions. However, when financial tragedy strikes—be it a job loss, a medical crisis, or a business downturn—repaying even the most trusted bank can become impossible. If you are defaulting on your SBI personal loan or credit card, you might be facing intense pressure: constant calls from recovery agents, legal notices under SARFAESI or Section 138, and the fear of losing your peace of mind.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            But defaulting is not a crime, and you have legal rights. <strong>SBI Loan Settlement</strong> is a legitimate financial solution recognized by the RBI and the bank itself. Through mechanisms like the <strong>Rinn Samadhan Scheme</strong> and One Time Settlement (OTS) policies, SBI allows distressed borrowers to close their loan accounts by paying a reduced lump sum amount.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            At AMA Legal Solutions, we specialize in negotiating with public sector banks like SBI. We understand their specific protocols, hierarchy, and settlement schemes. We step in as your legal shield, stopping the harassment and negotiating a dignified exit from your debt trap, often saving you significant amounts in the process.
          </p>
        </div>

        {/* What is OTS - Card Layout */}
        <div id="what-is-ots" className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#004c8f] mb-6">What is SBI One Time Settlement (OTS)?</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  One Time Settlement (OTS) is a compromise agreement where SBI agrees to accept a payment lower than the total outstanding dues to close a Non-Performing Asset (NPA). This is often structured under specific schemes like <strong>Rinn Samadhan</strong>, which are launched periodically to clean up the bank's balance sheet.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  For the bank, an OTS ensures immediate recovery of at least the principal component, saving them the cost and time of prolonged litigation. For you, it means freedom from debt and the end of legal threats. The settlement amount is mutually agreed upon based on your repayment capacity and the bank's policy.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Rinn Samadhan Benefits:</strong> Special waivers on interest and penalties during active scheme periods.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Legal Immunity:</strong> Settlement halts all legal proceedings, including civil suits and cheque bounce cases.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Complete Closure:</strong> You receive a "No Dues Certificate" ensuring the bank has no further claim on you.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#004c8f]">
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
                    <span className="font-bold text-[#004c8f]">50% (₹4.25 Lakhs)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">*Figures are for illustration. Actual settlement depends on individual cases, scheme validity, and negotiation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div id="eligibility" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is Eligible for SBI Loan Settlement?</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            SBI's settlement policies are strict. They do not entertain willful defaulters. You must prove that your default is due to circumstances beyond your control.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl mb-4">
                <FaUserTie />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Loss</h3>
              <p className="text-gray-600">
                Sudden unemployment due to layoffs or company closure is a primary ground for settlement. You will need to provide your termination letter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4">
                <FaHandHoldingUsd />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Loss</h3>
              <p className="text-gray-600">
                For self-employed individuals, significant business losses or bankruptcy can be a valid reason for seeking an OTS.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Crisis</h3>
              <p className="text-gray-600">
                Severe illness or accidents affecting the earning member or immediate family can deplete savings, making EMI payments impossible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl mb-4">
                <FaBalanceScale />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Dispute</h3>
              <p className="text-gray-600">
                Legal separation or divorce that impacts the household income significantly can be considered for settlement eligibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-4">
                <FaGavel />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Willful Default</h3>
              <p className="text-gray-600">
                <strong>NOT ELIGIBLE:</strong> If you have the capacity to pay but refuse to do so, SBI will not offer settlement and may pursue criminal action.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section - Horizontal Cards */}
        <div id="process" className="bg-[#f8fafc] py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our 5-Step SBI Settlement Process
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Case Analysis", desc: "We assess your loan details and financial status to check OTS eligibility." },
                { step: "02", title: "Legal Representation", desc: "We file a Vakalatnama to represent you and stop agent harassment." },
                { step: "03", title: "Proposal Submission", desc: "We draft a strong settlement proposal citing your hardship." },
                { step: "04", title: "Bank Negotiation", desc: "We negotiate with SBI officials to maximize the waiver amount." },
                { step: "05", title: "Final Closure", desc: "You pay the agreed amount and receive the No Dues Certificate." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#004c8f] font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailed Process Breakdown</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-[#004c8f] mb-2">Step 1: Financial Assessment</h4>
                  <p className="text-gray-700">
                    We start by analyzing your "ability to pay" vs. "intent to pay". We review your income proofs, asset details, and liabilities to determine a realistic settlement offer that SBI is likely to accept.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#004c8f] mb-2">Step 2: Stopping Harassment</h4>
                  <p className="text-gray-700">
                    Recovery agents can be aggressive. Once you hire us, we issue a legal notice to the bank stating that all future communication must be routed through your legal counsel. This provides you immediate mental relief.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#004c8f] mb-2">Step 3: The Settlement Proposal</h4>
                  <p className="text-gray-700">
                    We draft a formal OTS proposal. This isn't just a request; it's a legal document explaining your hardship with evidence. We submit this to the Branch Manager or the Regional Office, ensuring it reaches the decision-makers.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#004c8f] mb-2">Step 4: Negotiation & Approval</h4>
                  <p className="text-gray-700">
                    SBI has a tiered approval process. Our lawyers engage with the bank's credit committee. If the initial offer is rejected, we counter-offer, leveraging our knowledge of the Rinn Samadhan scheme limits to get you the best deal.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#004c8f] mb-2">Step 5: Payment & NDC</h4>
                  <p className="text-gray-700">
                    Upon agreement, SBI issues a Settlement Letter. We verify its terms before you pay. After payment, we ensure the bank updates CIBIL and issues the No Dues Certificate, formally closing the loan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div id="documents" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Documents Required for SBI Settlement</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            To process your OTS application smoothly, keep the following documents ready.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Documentation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2"/> PAN Card & Aadhaar Card</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2"/> Loan Account Number</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2"/> Latest Loan Statement</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2"/> Copies of any Legal Notices received</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hardship Proofs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-red-500 mr-2"/> Salary Slips (showing stoppage/reduction)</li>
                <li className="flex items-center"><FaCheckCircle className="text-red-500 mr-2"/> Termination/Resignation Letter</li>
                <li className="flex items-center"><FaCheckCircle className="text-red-500 mr-2"/> Medical Reports/Bills</li>
                <li className="flex items-center"><FaCheckCircle className="text-red-500 mr-2"/> Business Balance Sheets (for self-employed)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Notices Section */}
        <div id="legal-notices" className="bg-[#003366] text-white py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Understanding SBI Legal Notices</h2>
            <p className="text-blue-100 text-center mb-12 max-w-3xl mx-auto">
              SBI is aggressive with legal action. Ignoring these notices can lead to arrest warrants or property seizure. Here is how we handle them.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Section 138 (Cheque Bounce)</h3>
                <p className="text-blue-100 text-sm mb-4">
                  A criminal offense under the Negotiable Instruments Act. It can lead to up to 2 years of imprisonment.
                </p>
                <p className="text-white font-semibold text-sm">
                  <strong>Our Action:</strong> We represent you in court, seek bail if needed, and push for an out-of-court settlement to compound (close) the case.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">SARFAESI Notice</h3>
                <p className="text-blue-100 text-sm mb-4">
                  For secured loans (Home/LAP). It gives the bank power to seize and auction your property without court intervention.
                </p>
                <p className="text-white font-semibold text-sm">
                  <strong>Our Action:</strong> We file objections under Section 13(3A) and can approach the DRT to get a stay on the auction.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Payment & Settlement Act</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Used for ECS/NACH bounce. Similar to cheque bounce, this is also a criminal offense.
                </p>
                <p className="text-white font-semibold text-sm">
                  <strong>Our Action:</strong> We attend hearings and negotiate a settlement to withdraw the complaint.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Restructuring vs Settlement */}
        <div id="restructuring-vs-settlement" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Loan Restructuring vs. Loan Settlement</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Should you restructure your SBI loan or settle it? Here is a comparison to help you decide.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#004c8f] text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">Loan Restructuring</th>
                  <th className="p-4 text-left">Loan Settlement (OTS)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold text-gray-900">What is it?</td>
                  <td className="p-4 text-gray-700">Extending tenure to reduce EMI amount.</td>
                  <td className="p-4 text-gray-700">Closing the loan by paying a reduced lump sum.</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Total Repayment</td>
                  <td className="p-4 text-gray-700">You pay MORE (Principal + Additional Interest).</td>
                  <td className="p-4 text-gray-700">You pay LESS (Principal - Waiver).</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold text-gray-900">CIBIL Impact</td>
                  <td className="p-4 text-gray-700">Moderate. Shows as "Restructured".</td>
                  <td className="p-4 text-gray-700">High. Shows as "Settled".</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Best For</td>
                  <td className="p-4 text-gray-700">Temporary cash crunch but can pay full amount later.</td>
                  <td className="p-4 text-gray-700">Deep financial crisis with no hope of full repayment.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Outcome</td>
                  <td className="p-4 text-gray-700">Debt burden continues for years.</td>
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
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaHandHoldingUsd className="text-red-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Impact on CIBIL Score</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Settling an SBI loan will mark your account as "Settled" or "Post Write-off Settled". This can drop your score by 70-100 points.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">The Silver Lining</h4>
                <p className="text-sm text-green-700">
                  A "Settled" status is better than an open "Default". It stops the monthly negative reporting. We guide our clients on how to rebuild their score to 750+ within 12-18 months post-settlement using secured credit products.
                </p>
              </div>
            </div>

            {/* Legal Rights */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-[#004c8f] text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your Rights as a Borrower</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#004c8f] mr-2">●</span> <strong>Right to Respect:</strong> Agents cannot use abusive language or threaten you.
                </li>
                <li className="flex items-start">
                  <span className="text-[#004c8f] mr-2">●</span> <strong>Right to Privacy:</strong> They cannot visit your office or harass your family without cause.
                </li>
                <li className="flex items-start">
                  <span className="text-[#004c8f] mr-2">●</span> <strong>Right to Notice:</strong> SBI must give you 60 days notice under SARFAESI before taking possession.
                </li>
                <li className="flex items-start">
                  <span className="text-[#004c8f] mr-2">●</span> <strong>Right to Representation:</strong> You can appoint a lawyer to deal with the bank on your behalf.
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
                <FaUniversity className="text-5xl text-[#004c8f] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">SBI Policy Experts</h3>
                <p className="text-gray-600">We have deep knowledge of SBI's internal circulars, Rinn Samadhan schemes, and regional office hierarchy.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <FaFileContract className="text-5xl text-[#004c8f] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Legal Shield</h3>
                <p className="text-gray-600">We are a law firm, not just a settlement agency. We can handle court cases, DRT matters, and arbitration effectively.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <FaShieldAlt className="text-5xl text-[#004c8f] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">End-to-End Support</h3>
                <p className="text-gray-600">From the first legal notice to the final No Dues Certificate, we are with you at every step of the journey.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="text-6xl text-blue-100 absolute top-4 left-4">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                "I had a 12 Lakh SBI personal loan. After my business failed, I couldn't pay. AMA Legal Solutions stopped the recovery calls and settled the loan for 5.5 Lakhs under the OTS scheme. It was a lifesaver."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  R
                </div>
                <div>
                  <p className="font-bold text-gray-900">Rajesh Kumar</p>
                  <p className="text-sm text-gray-500">Entrepreneur, Delhi</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="text-6xl text-blue-100 absolute top-4 left-4">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                "My SBI credit card outstanding was 3 Lakhs. I was paying minimum due for years. AMA's team negotiated a one-time payment of 90k. I finally feel free."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-900">Sneha Gupta</p>
                  <p className="text-sm text-gray-500">Teacher, Bangalore</p>
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
          <div className="bg-[#004c8f] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your SBI Loan?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Don't let debt define your life. Get expert legal help to settle your SBI loan and start fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-[#004c8f] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                  Book Free Consultation
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#004c8f] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

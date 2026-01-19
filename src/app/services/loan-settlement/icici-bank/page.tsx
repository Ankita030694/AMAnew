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
      "name": "ICICI Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/ICICI"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ICICI Loan Settlement Process 2025: Legal Guide & Letter Format",
  "description": "Complete guide to ICICI Bank loan settlement. Learn how to settle ICICI personal loans and credit cards, understand OTS policies, and get legal help to stop harassment.",
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
  "name": "ICICI Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal assistance for settling ICICI Bank personal loans and credit card dues.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "920"
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
        "name": "Rahul Sharma"
      },
      "reviewBody": "AMA Legal Solutions helped me settle my ICICI credit card debt for just 40% of the outstanding amount. Highly professional team."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Verma"
      },
      "reviewBody": "I was being harassed by recovery agents. The lawyers at AMA took over and stopped the calls immediately. The settlement was smooth."
    }
  ]
};

export const metadata = {
  title: "ICICI Loan Settlement Process | ICICI Personal Loan Settlement Letter Format",
  description:
    "Expert guide on ICICI loan settlement. Learn how to settle ICICI personal loans and credit cards. Get legal help to negotiate OTS, stop harassment, and save up to 50%.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/ICICI',
  },
  openGraph: {
    title: "ICICI Loan Settlement Process | ICICI Personal Loan Settlement Letter Format",
    description: "Expert guide on ICICI loan settlement. Learn how to settle ICICI personal loans and credit cards. Get legal help to negotiate OTS, stop harassment, and save up to 50%.",
    url: "https://amalegalsolutions.com/services/loan-settlement/ICICI",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "ICICI Loan Settlement Services",
      },
    ],
  },
};

export default function ICICILoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-ots", title: "What is ICICI OTS?" },
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
    { label: "ICICI Loan Settlement", href: "/services/loan-settlement/ICICI" },
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
        <div className="relative bg-gradient-to-r from-[#8B2500] to-[#F37E20] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 0 L100 0 L100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              ICICI Bank Specialization
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-orange-200">ICICI Loan</span> <br className="hidden md:block" /> With Legal Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-orange-50 font-light">
              Stop harassment, negotiate a fair One Time Settlement (OTS), and close your ICICI personal loan or credit card debt forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-[#F37E20] hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-orange-200 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
            Overwhelmed by ICICI Bank Debt?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            ICICI Bank is a leading private sector bank in India, known for its aggressive retail lending and equally aggressive recovery tactics. If you have taken a personal loan or used a credit card from ICICI Bank and are now facing financial hardship, you are likely experiencing the stress of constant follow-ups. Whether it is due to job loss, a medical crisis, or business failure, the inability to pay EMIs can quickly spiral into a nightmare of legal notices and harassment.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            It is important to understand that defaulting on a loan due to genuine circumstances is not a crime. You have rights, and you have options. <strong>ICICI Loan Settlement</strong> is a viable, legal solution recognized by the banking system. It allows you to negotiate with the bank to pay a reduced lump sum amount to close your account permanently.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            At AMA Legal Solutions, we specialize in handling ICICI Bank cases. We understand their specific "I-Process" recovery mechanisms and how to effectively counter them to secure a favorable settlement for you.
          </p>
        </div>

        {/* What is OTS - Card Layout */}
        <div id="what-is-ots" className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#F37E20] mb-6">Understanding ICICI One Time Settlement (OTS)</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  OTS is a compromise settlement where ICICI Bank agrees to waive a portion of your debt (usually interest and penalties) in exchange for a one-time payment of the principal amount or a negotiated figure. This is typically offered for accounts that have been classified as Non-Performing Assets (NPAs).
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  ICICI Bank, like other lenders, prefers to recover a guaranteed amount today rather than chasing a defaulter for years with uncertain results. By opting for settlement, you can exit the debt trap immediately.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#F37E20] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Debt Reduction:</strong> Significant reduction in total outstanding dues, often saving 40-60%.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#F37E20] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Peace of Mind:</strong> Immediate stop to recovery calls and legal notices from ICICI's legal team.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#F37E20] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Formal Closure:</strong> Issuance of a settlement letter and No Dues Certificate to close the chapter.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#F37E20]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Settlement Example</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Credit Card Limit Used</span>
                    <span className="font-bold text-gray-800">₹1,50,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Interest & Late Fees</span>
                    <span className="font-bold text-gray-800">₹1,50,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Total Due</span>
                    <span className="font-bold text-red-600">₹3,00,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Settlement Offer</span>
                    <span className="font-bold text-green-600">₹1,40,000</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-gray-900 font-bold">You Save</span>
                    <span className="font-bold text-[#F37E20]">~53% (₹1.6 Lakhs)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">*Figures are illustrative. Actual results vary based on delinquency and negotiation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div id="eligibility" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Eligibility for ICICI Bank Settlement</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            ICICI Bank evaluates settlement requests based on the "Capacity to Pay" vs "Intent to Pay" framework. You must prove that you have the intent but lack the capacity.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl mb-4">
                <FaUserTie />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unemployment</h3>
              <p className="text-gray-600">
                Sudden job loss or extended layoffs in your industry can be a valid ground for seeking relief.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4">
                <FaHandHoldingUsd />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Loss</h3>
              <p className="text-gray-600">
                Significant downturn in business revenue, verified by bank statements or GST returns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health Crisis</h3>
              <p className="text-gray-600">
                Critical illness affecting the borrower or immediate family, leading to high medical expenses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl mb-4">
                <FaBalanceScale />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Dispute</h3>
              <p className="text-gray-600">
                Legal separation or divorce that has resulted in the freezing of assets or loss of household income.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-4">
                <FaGavel />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Asset Depreciation</h3>
              <p className="text-gray-600">
                For secured loans, if the asset value has fallen below the loan amount, settlement might be considered.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section - Horizontal Cards */}
        <div id="process" className="bg-[#f8fafc] py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              How We Settle Your ICICI Loan
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Consultation", desc: "We analyze your financial situation and loan details." },
                { step: "02", title: "Representation", desc: "We send a legal notice to ICICI Bank to take over communication." },
                { step: "03", title: "Negotiation", desc: "Our experts negotiate with bank officials for the lowest settlement." },
                { step: "04", title: "Agreement", desc: "We verify the formal Settlement Letter from the bank." },
                { step: "05", title: "Freedom", desc: "You pay the bank directly and receive your No Dues Certificate." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 opacity-50 group-hover:text-orange-50 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#F37E20] font-bold mb-4">
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
                  <h4 className="text-lg font-bold text-[#F37E20] mb-2">Step 1: Financial Deep Dive</h4>
                  <p className="text-gray-700">
                    We start by reviewing your Credit Information Report (CIR) and loan statements. We identify the specific ICICI branch or centralized collection agency handling your file. This helps us target the right decision-makers.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F37E20] mb-2">Step 2: Stopping the Calls</h4>
                  <p className="text-gray-700">
                    ICICI Bank often uses third-party agencies (often referred to as "I-Process"). These agents can be aggressive. We issue a legal notice to the bank, mandating that all future communication be routed through us. This legal shield is your first breath of relief.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F37E20] mb-2">Step 3: The Offer</h4>
                  <p className="text-gray-700">
                    We draft a settlement proposal. Unlike a verbal request, this is a formal legal document outlining your hardship and proposing a specific settlement figure. We ensure this figure is realistic yet advantageous to you.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F37E20] mb-2">Step 4: The Negotiation Table</h4>
                  <p className="text-gray-700">
                    This is the toughest part. The bank will counter-offer. Our experienced negotiators, who understand ICICI's quarterly targets and write-off policies, push back to get you the best deal. We aim for maximum waiver on interest and a cut on the principal.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F37E20] mb-2">Step 5: Closing the Loop</h4>
                  <p className="text-gray-700">
                    Once the amount is frozen, we ensure ICICI issues a formal Settlement Letter. We check for the "Full and Final Settlement" clause. After you pay, we chase the bank for the No Dues Certificate (NDC) to ensure the loan is legally extinguished.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div id="documents" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Documents Checklist</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Preparation is key. Having these documents ready strengthens our negotiation position.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Identity & Loan Proof</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-orange-500 mr-2"/> PAN Card & Aadhaar Card</li>
                <li className="flex items-center"><FaCheckCircle className="text-orange-500 mr-2"/> ICICI Loan Account Number</li>
                <li className="flex items-center"><FaCheckCircle className="text-orange-500 mr-2"/> Latest Statement of Account (SOA)</li>
                <li className="flex items-center"><FaCheckCircle className="text-orange-500 mr-2"/> Copies of any Legal Notices received</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-900">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hardship Evidence</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><FaCheckCircle className="text-blue-800 mr-2"/> Salary Slips (showing drop/stop)</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-800 mr-2"/> Termination/Layoff Letter</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-800 mr-2"/> Medical Records (if applicable)</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-800 mr-2"/> ITR Returns (showing income loss)</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-800 mr-2"/> Bank Statements (last 6 months)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Notices Section */}
        <div id="legal-notices" className="bg-[#053c6d] text-white py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Handling ICICI Legal Notices</h2>
            <p className="text-blue-100 text-center mb-12 max-w-3xl mx-auto">
              ICICI Bank is known for prompt legal action. Here are the common notices and how we handle them.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Demand Notice</h3>
                <p className="text-blue-100 text-sm mb-4">
                  A formal demand for payment, usually sent after 90 days of default.
                </p>
                <p className="text-white font-semibold text-sm">
                  <strong>Our Action:</strong> We reply citing your hardship and proposing a settlement meeting.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Arbitration / Conciliation</h3>
                <p className="text-blue-100 text-sm mb-4">
                  ICICI often refers cases to arbitration or Lok Adalats for faster resolution.
                </p>
                <p className="text-white font-semibold text-sm">
                  <strong>Our Action:</strong> We represent you in these forums to ensure the settlement terms are fair and not forced.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Section 138 (Cheque Bounce)</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Criminal notice for dishonor of cheques or ECS instructions.
                </p>
                <p className="text-white font-semibold text-sm">
                  <strong>Our Action:</strong> Immediate legal reply and appearance in court to seek compounding of the offense through settlement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Restructuring vs Settlement */}
        <div id="restructuring-vs-settlement" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Restructuring vs. Settlement: What's Right for You?</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            ICICI Bank may offer restructuring. Understand the difference before you sign.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F37E20] text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">Loan Restructuring</th>
                  <th className="p-4 text-left">Loan Settlement (OTS)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold text-gray-900">Definition</td>
                  <td className="p-4 text-gray-700">Extending tenure to reduce EMI amount.</td>
                  <td className="p-4 text-gray-700">Closing loan by paying less than due.</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Total Cost</td>
                  <td className="p-4 text-gray-700">Higher (due to extended interest period).</td>
                  <td className="p-4 text-gray-700">Lower (significant savings on principal/interest).</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-bold text-gray-900">CIBIL Impact</td>
                  <td className="p-4 text-gray-700">Moderate ("Restructured" tag).</td>
                  <td className="p-4 text-gray-700">High ("Settled" tag).</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">Suitability</td>
                  <td className="p-4 text-gray-700">Temporary cash crunch.</td>
                  <td className="p-4 text-gray-700">Deep financial distress / Insolvency.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Outcome</td>
                  <td className="p-4 text-gray-700">Debt continues.</td>
                  <td className="p-4 text-gray-700">Debt ends immediately.</td>
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
                Settling a loan is better than defaulting, but it does affect your credit score. The account status will reflect as "Settled".
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">Recovery Path</h4>
                <p className="text-sm text-orange-700">
                  While your score drops initially, you can rebuild it. We guide our clients on how to improve their CIBIL score post-settlement through secured cards and disciplined repayment.
                </p>
              </div>
            </div>

            {/* Legal Rights */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-[#053c6d] text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Know Your Rights</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F37E20] mr-2">●</span> <strong>Protection against harassment:</strong> RBI Guidelines strictly prohibit abusive recovery practices.
                </li>
                <li className="flex items-start">
                  <span className="text-[#F37E20] mr-2">●</span> <strong>Right to Privacy:</strong> Agents cannot shame you publicly.
                </li>
                <li className="flex items-start">
                  <span className="text-[#F37E20] mr-2">●</span> <strong>Banking Ombudsman:</strong> Right to escalate unresolved complaints.
                </li>
                <li className="flex items-start">
                  <span className="text-[#F37E20] mr-2">●</span> <strong>Legal Representation:</strong> Right to have a lawyer handle your case.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us - 3 Column Grid */}
        <div id="why-choose-ama" className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why AMA Legal Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <FaUniversity className="text-5xl text-[#F37E20] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">ICICI Experts</h3>
                <p className="text-gray-600">We have successfully settled hundreds of ICICI Bank cases, understanding their specific thresholds and "I-Process" tactics.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <FaFileContract className="text-5xl text-[#F37E20] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Legal Shield</h3>
                <p className="text-gray-600">Our legal team handles all communication, protecting you from aggressive recovery agents and legal notices.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <FaShieldAlt className="text-5xl text-[#F37E20] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Transparent Process</h3>
                <p className="text-gray-600">No hidden fees. We work with you to achieve a settlement that you can actually afford, with complete clarity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="text-6xl text-orange-100 absolute top-4 left-4">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                "AMA Legal Solutions helped me settle my ICICI credit card debt for just 40% of the outstanding amount. The best part was that the harassment calls stopped within 48 hours of hiring them."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  R
                </div>
                <div>
                  <p className="font-bold text-gray-900">Rahul Sharma</p>
                  <p className="text-sm text-gray-500">Marketing Manager, Delhi</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="text-6xl text-orange-100 absolute top-4 left-4">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                "I was facing a Section 138 notice from ICICI for my personal loan. I was terrified. The team at AMA handled the court matter and simultaneously negotiated an OTS. I am now debt-free."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  P
                </div>
                <div>
                  <p className="font-bold text-gray-900">Priya Verma</p>
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
          <div className="bg-[#F37E20] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">End Your Debt Stress Today</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Take the first step towards a debt-free life. Contact us for a confidential consultation regarding your ICICI loan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-[#F37E20] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                  Book Free Consultation
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#F37E20] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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
    </>
  );
}

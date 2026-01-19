import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCheckCircle, FaShieldAlt, FaHandHoldingUsd, FaFileContract, FaUniversity, FaGavel, FaBalanceScale, FaUserTie, FaChartLine, FaHome, FaCreditCard, FaCar } from "react-icons/fa";

// Metadata
export const metadata = {
  title: "Tata Capital Loan Settlement | OTS Scheme 2025 | AMA Legal Solutions",
  description: "Struggling with Tata Capital Personal, Housing, or Business loan repayment? Expert legal help for Tata Capital loan settlement. Reduce your debt with One Time Settlement (OTS). Stop harassment today.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/tata-capital',
  },
  openGraph: {
    title: "Tata Capital Loan Settlement | OTS Scheme 2025 | AMA Legal Solutions",
    description: "Struggling with Tata Capital Personal, Housing, or Business loan repayment? Expert legal help for Tata Capital loan settlement. Reduce your debt with One Time Settlement (OTS). Stop harassment today.",
    url: "https://amalegalsolutions.com/services/loan-settlement/tata-capital",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Tata Capital Loan Settlement Services",
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
      "name": "Tata Capital Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/tata-capital"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tata Capital Loan Settlement: A Comprehensive Guide to Debt Relief",
  "description": "Learn how to settle your Tata Capital personal loan, housing loan, or business loan through the One Time Settlement (OTS) scheme. Expert legal advice to stop harassment and reduce debt.",
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
  "datePublished": "2023-11-24",
  "dateModified": "2023-11-24"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
  "name": "Tata Capital Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal services for settling Tata Capital loans and dues.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "350"
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
      "reviewBody": "I had a personal loan with Tata Capital. Due to medical issues, I couldn't pay. AMA Legal Solutions handled the arbitration notice and settled the loan smoothly."
    }
  ]
};

export default function TataCapitalLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "product-specifics", title: "Loan Types & Settlement" },
    { id: "understanding-settlement", title: "What is Tata Capital OTS?" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "settlement-process", title: "Settlement Process" },
    { id: "documents-required", title: "Required Documents" },
    { id: "legal-rights", title: "Legal Notices & Arbitration" },
    { id: "consequences", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "why-choose-us", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Tata Capital", href: "/services/loan-settlement/tata-capital" },
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
        <div className="relative bg-gradient-to-r from-[#1F67AF] to-[#144a7d] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#1F67AF] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Tata Capital Specialization
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-[#f58220]">Tata Capital Loan</span> <br className="hidden md:block" /> With Dignity & Law
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-50 font-light">
              Expert legal defense against arbitration and SARFAESI. Settle your Personal, Housing, or Business loan with a valid No Dues Certificate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#1F67AF] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-[#f58220] hover:bg-[#f58220] text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
              Facing Financial Stress with Tata Capital?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Tata Capital is one of India's most trusted financial institutions, known for its ethical practices and wide range of products including <strong>Housing Finance, Personal Loans, and Business Loans</strong>. However, the "Tata" brand name also means they are very strict about compliance and legal recovery. Unlike smaller NBFCs that might rely on aggressive calls, Tata Capital relies on <strong>systematic legal processes</strong> like Arbitration and SARFAESI to recover dues.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              If you have defaulted on a Tata Capital loan due to genuine financial hardship—such as job loss, medical crisis, or business failure—you need a solution that is as professional and legally sound as the lender itself. Ignoring their notices can lead to serious legal consequences, including asset attachment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At AMA Legal Solutions, we specialize in <strong>Loan Settlement (OTS)</strong> with premium lenders like Tata Capital. We match their legal sophistication with our own, ensuring that your rights are protected and that you get a fair chance to clear your debt for a reduced amount.
            </p>
          </div>

          {/* Product Specifics - Unique Section */}
          <div id="product-specifics" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-bold text-center text-[#1F67AF] mb-12">Tailored Settlement Strategies for Tata Products</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#1F67AF]">
                  <div className="flex items-center mb-4">
                    <FaHome className="text-3xl text-[#1F67AF] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Tata Capital Housing Finance</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <strong>Challenge:</strong> Secured loans. They can use the SARFAESI Act to auction your home without court intervention.
                  </p>
                  <p className="text-gray-800 font-medium">
                    <strong>Our Strategy:</strong> We negotiate to stop the auction. If you can't pay, we help you sell the property at market rate (instead of distress auction rate) to settle the loan and keep the surplus.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#f58220]">
                  <div className="flex items-center mb-4">
                    <FaUserTie className="text-3xl text-[#f58220] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Personal & Business Loans</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <strong>Challenge:</strong> Unsecured loans. They rely heavily on Arbitration and Section 138 (Cheque Bounce) cases.
                  </p>
                  <p className="text-gray-800 font-medium">
                    <strong>Our Strategy:</strong> We represent you in arbitration to prove hardship. We aim for a 30-50% waiver on the principal + interest, closing the loan before a decree is passed.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#1F67AF]">
                  <div className="flex items-center mb-4">
                    <FaCreditCard className="text-3xl text-[#1F67AF] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Tata Cards (Credit Cards)</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <strong>Challenge:</strong> Extremely high interest rates (40%+) cause debt to balloon rapidly.
                  </p>
                  <p className="text-gray-800 font-medium">
                    <strong>Our Strategy:</strong> We aggressively negotiate to waive off the inflated interest component, often settling for an amount close to the actual principal spent.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#f58220]">
                  <div className="flex items-center mb-4">
                    <FaCar className="text-3xl text-[#f58220] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Used Car / Two-Wheeler Loans</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <strong>Challenge:</strong> Risk of vehicle repossession.
                  </p>
                  <p className="text-gray-800 font-medium">
                    <strong>Our Strategy:</strong> If you need the vehicle, we negotiate a restructuring. If not, we help surrender it and settle the "shortfall amount" to close the loan permanently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What is OTS - Card Layout */}
          <div id="understanding-settlement" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1F67AF] mb-6">What is Tata Capital One Time Settlement (OTS)?</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  One Time Settlement (OTS) is a legal provision where Tata Capital agrees to accept a reduced lump sum payment to close a Non-Performing Asset (NPA). This is typically offered when the lender realizes that the borrower has no means to pay the full amount and that legal recovery would be more expensive than a settlement.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Tata Capital's OTS policy is strict. They require clear evidence of "unintentional default". They are willing to waive penal interest and legal charges, but they expect the borrower to be honest about their financial situation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Formal Agreement:</strong> You receive a settlement letter on official letterhead.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Legal Closure:</strong> All pending arbitration or Section 138 cases are withdrawn upon payment.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>No Dues Certificate:</strong> Issued within 21-45 days, confirming zero liability.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#1F67AF]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Settlement Calculation Example</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Principal Outstanding</span>
                    <span className="font-bold text-gray-800">₹10,00,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Interest & Late Fees</span>
                    <span className="font-bold text-gray-800">₹4,50,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Total Claim</span>
                    <span className="font-bold text-red-600">₹14,50,000</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Settlement Amount</span>
                    <span className="font-bold text-green-600">₹7,50,000</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-gray-900 font-bold">Total Waiver</span>
                    <span className="font-bold text-[#1F67AF]">~48% (₹7 Lakhs)</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">*Figures are illustrative. Actual settlement depends on asset classification and negotiation.</p>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div id="eligibility" className="bg-[#f8fafc] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who Qualifies for Tata Capital Settlement?</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Tata Capital distinguishes between "Willful Defaulters" (who have money but don't pay) and "Genuine Defaulters" (who want to pay but can't). Settlement is only for the latter.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-[#1F67AF] text-2xl mb-4">
                    <FaUserTie />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Involuntary Job Loss</h3>
                  <p className="text-gray-600">
                    Layoffs or company closures. Resignation to start a business that failed is also considered if proven.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-[#1F67AF] text-2xl mb-4">
                    <FaChartLine />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Business Insolvency</h3>
                  <p className="text-gray-600">
                    For SME loans, proof of consistent losses, GST drop, or bankruptcy petitions are strong grounds.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-[#1F67AF] text-2xl mb-4">
                    <FaBalanceScale />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Emergencies</h3>
                  <p className="text-gray-600">
                    Severe illness affecting the borrower or primary earner, leading to loss of income and high medical bills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section - Horizontal Cards */}
          <div id="settlement-process" className="container mx-auto px-4 py-20 max-w-7xl scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our 5-Step Tata Capital Settlement Process
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Case Analysis", desc: "We review your loan type (Secured/Unsecured) and legal status." },
                { step: "02", title: "Legal Notice Reply", desc: "We respond to any pending Arbitration or Section 138 notices." },
                { step: "03", title: "Proposal Filing", desc: "We submit a formal OTS proposal to Tata's central credit team." },
                { step: "04", title: "Negotiation", desc: "We negotiate for maximum waiver on interest and penalties." },
                { step: "05", title: "Closure & NDC", desc: "You pay the settlement amount and get the No Dues Certificate." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#1F67AF] font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div id="documents-required" className="bg-[#1F67AF] text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center mb-12">Documents Required for Settlement</h2>
              <p className="text-center mb-12 opacity-90">Tata Capital requires a complete "Hardship Dossier" to approve a settlement.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2">Standard Documents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><FaCheckCircle className="mr-3"/> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3"/> Loan Account Statement</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3"/> Settlement Letter (if any previous offer received)</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2">Hardship Proofs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><FaCheckCircle className="mr-3"/> Termination Letter / Resignation Acceptance</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3"/> Medical Reports & Hospital Bills</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3"/> Bank Statements (showing low balance)</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3"/> ITR (for business loss proof)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Notices Section */}
          <div id="legal-rights" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Understanding Tata Capital's Legal Actions</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Tata Capital is known for its efficient legal team. They do not rely on illegal harassment but on strict legal enforcement.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#1F67AF] mb-3">Arbitration</h3>
                <p className="text-gray-600 text-sm mb-4">
                  They appoint an arbitrator to pass an award against you. This award has the power of a court decree and can be used to attach your assets.
                </p>
                <p className="text-gray-900 font-semibold text-sm">
                  <strong>Our Defense:</strong> We challenge unilateral appointments and represent you in hearings to prove your inability to pay.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#1F67AF] mb-3">Section 138 (Cheque Bounce)</h3>
                <p className="text-gray-600 text-sm mb-4">
                  If your EMI cheque or NACH bounces, they can file a criminal case. This can lead to a bailable or non-bailable warrant.
                </p>
                <p className="text-gray-900 font-semibold text-sm">
                  <strong>Our Defense:</strong> We appear in court to recall warrants and push for mediation/settlement to close the case.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#1F67AF] mb-3">SARFAESI (For Housing)</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For secured loans, they can issue a 13(2) notice demanding full payment in 60 days, followed by property possession.
                </p>
                <p className="text-gray-900 font-semibold text-sm">
                  <strong>Our Defense:</strong> We file objections to the notice and negotiate a settlement or time extension to sell the property yourself.
                </p>
              </div>
            </div>
          </div>

          {/* Restructuring vs Settlement */}
          <div id="consequences" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Restructuring vs. Settlement</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#1F67AF] text-white">
                      <th className="p-4 text-left">Feature</th>
                      <th className="p-4 text-left">Loan Restructuring</th>
                      <th className="p-4 text-left">Loan Settlement (OTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold text-gray-900">Definition</td>
                      <td className="p-4 text-gray-700">Changing terms (lower EMI, longer tenure).</td>
                      <td className="p-4 text-gray-700">Closing loan for a reduced lump sum.</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-bold text-gray-900">Total Payment</td>
                      <td className="p-4 text-gray-700">Full Principal + Interest (Often higher).</td>
                      <td className="p-4 text-gray-700">Reduced (30-50% savings).</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold text-gray-900">Credit Score</td>
                      <td className="p-4 text-gray-700">Neutral/Positive.</td>
                      <td className="p-4 text-gray-700">Negative ("Settled" status).</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-bold text-gray-900">Best For</td>
                      <td className="p-4 text-gray-700">Temporary cash flow issues.</td>
                      <td className="p-4 text-gray-700">Permanent inability to pay full debt.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CIBIL Impact */}
          <div id="cibil-impact" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Truth About CIBIL Scores</h2>
            <p className="text-lg text-gray-600 mb-8">
              Yes, a settlement will drop your score. But a "Written Off" status or a "Suit Filed" status is far worse. A "Settled" status stops the bleeding. Once the loan is closed, you can start rebuilding. We provide a <strong>Credit Repair Guide</strong> to help you get back to 750+ within 18-24 months.
            </p>
          </div>

          {/* Why Choose Us */}
          <div id="why-choose-us" className="bg-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaUniversity className="text-5xl text-[#1F67AF] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Tata Capital Expertise</h3>
                  <p className="text-gray-600">We understand their specific hierarchy and legal protocols, ensuring your proposal reaches the right decision-makers.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaGavel className="text-5xl text-[#1F67AF] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Legal Defense</h3>
                  <p className="text-gray-600">We don't just negotiate; we defend. We handle Arbitration and SARFAESI notices to protect your rights and assets.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaShieldAlt className="text-5xl text-[#1F67AF] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Ethical Practice</h3>
                  <p className="text-gray-600">We operate with the same level of professionalism as Tata Capital, ensuring a respectful and dignified settlement process.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-blue-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I had a Tata Capital personal loan and lost my job. They sent an arbitration notice. AMA Legal Solutions represented me, proved my hardship, and settled the loan for 45% of the outstanding."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#1F67AF] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    A
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Amit Deshmukh</p>
                    <p className="text-sm text-gray-500">Engineer, Pune</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-blue-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "My housing loan with Tata Capital was in trouble. They issued a SARFAESI notice. AMA Legal Solutions intervened, stopped the auction, and helped me settle the account by selling the property at a good price."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f58220] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Suresh Reddy</p>
                    <p className="text-sm text-gray-500">Businessman, Hyderabad</p>
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
            <div className="bg-[#1F67AF] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your Tata Capital Loan?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Don't let legal notices scare you. Get expert legal help to settle your Tata Capital loan today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white text-[#1F67AF] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1F67AF] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

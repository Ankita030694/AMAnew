import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCheckCircle, FaShieldAlt, FaHandHoldingUsd, FaFileContract, FaUniversity, FaGavel, FaBalanceScale, FaUserTie, FaChartLine, FaCar, FaStore } from "react-icons/fa";

// Metadata
export const metadata = {
  title: "AU Small Finance Bank Loan Settlement | OTS Scheme 2025 | AMA Legal Solutions",
  description: "Struggling with AU Small Finance Bank loan repayment? Expert legal help for AU Bank loan settlement. Reduce your debt with One Time Settlement (OTS). Stop harassment today.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/au-small-finance',
  },
  openGraph: {
    title: "AU Small Finance Bank Loan Settlement | OTS Scheme 2025 | AMA Legal Solutions",
    description: "Struggling with AU Small Finance Bank loan repayment? Expert legal help for AU Bank loan settlement. Reduce your debt with One Time Settlement (OTS). Stop harassment today.",
    url: "https://amalegalsolutions.com/services/loan-settlement/au-small-finance",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "AU Small Finance Bank Loan Settlement Services",
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
      "name": "AU Small Finance Bank Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/au-small-finance"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AU Small Finance Bank Loan Settlement: A Comprehensive Guide",
  "description": "Learn how to settle your AU Small Finance Bank loan through the One Time Settlement (OTS) scheme. Expert legal advice to stop harassment and reduce debt.",
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
      "url": "https://amalegalsolutions.com/logo.png"
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
  "name": "AU Small Finance Bank Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert legal services for settling AU Small Finance Bank loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "195"
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
      "reviewBody": "I had a car loan with AU Bank and lost my business. They were threatening to seize my car. AMA Legal Solutions intervened and settled the loan. I am very grateful."
    }
  ]
};

export default function AuSmallFinanceLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "loan-types", title: "Loan Types Covered" },
    { id: "understanding-ots", title: "What is AU Bank OTS?" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "settlement-process", title: "Settlement Process" },
    { id: "documents-required", title: "Required Documents" },
    { id: "legal-rights", title: "Your Legal Rights" },
    { id: "consequences", title: "Consequences of Default" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "why-choose-us", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "AU Small Finance Bank", href: "/services/loan-settlement/au-small-finance" },
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
        <div className="relative bg-gradient-to-r from-[#6A1B9A] to-[#4A148C] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#6A1B9A] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Debt Relief Experts
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-[#FFD700]">AU Small Finance Bank</span> <br className="hidden md:block" /> Loan Legally
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-purple-100 font-light">
              Stop harassment, vehicle seizure threats, and legal notices. Get expert help for One Time Settlement (OTS).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#FFD700] hover:bg-[#FFC107] text-[#4A148C] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#6A1B9A] text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
              Facing Issues with AU Small Finance Bank Loan Repayment?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <strong>AU Small Finance Bank</strong> is a prominent player in the Indian banking sector, known for its vehicle loans, small business loans, and personal banking services. However, financial instability can strike anyone. If you are struggling to pay your EMIs due to job loss, business failure, or medical emergencies, you are not alone.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Defaulting on a loan can lead to aggressive recovery tactics, including frequent calls, home visits, and even threats of vehicle seizure. Ignoring the problem will only lead to legal complications like arbitration or SARFAESI notices.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At AMA Legal Solutions, we specialize in negotiating with banks like AU Small Finance Bank. We help you secure a <strong>One Time Settlement (OTS)</strong> that is affordable and legally binding, allowing you to clear your debt and regain your peace of mind.
            </p>
          </div>

          {/* Loan Types Covered */}
          <div id="loan-types" className="bg-[#F3E5F5] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-bold text-center text-[#4A148C] mb-12">Loans We Can Help You Settle</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#6A1B9A] hover:shadow-xl transition-shadow">
                  <FaCar className="text-5xl text-[#FFD700] mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Vehicle Loans</h3>
                  <p className="text-gray-600">
                    Commercial or personal vehicle loans. We help prevent seizure and settle the outstanding amount.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#6A1B9A] hover:shadow-xl transition-shadow">
                  <FaUserTie className="text-5xl text-[#FFD700] mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Loans</h3>
                  <p className="text-gray-600">
                    Unsecured personal loans taken for medical, wedding, or other personal needs.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#6A1B9A] hover:shadow-xl transition-shadow">
                  <FaStore className="text-5xl text-[#FFD700] mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Business Loans</h3>
                  <p className="text-gray-600">
                    Small business loans (MSME) or working capital loans that have turned into NPAs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What is OTS - Card Layout */}
          <div id="understanding-ots" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#4A148C] mb-4">What is AU Bank One Time Settlement (OTS)?</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                OTS is a legal provision where the bank agrees to accept a lump sum payment lower than the total outstanding amount to close the loan account permanently. This is usually offered to borrowers who have genuinely defaulted and cannot pay the full amount.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#FFD700]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interest Waiver</h3>
                <p className="text-gray-600">
                  The bank waives off the accumulated penal interest and late fees, significantly reducing the burden.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#FFD700]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Closure</h3>
                <p className="text-gray-600">
                  All legal proceedings, including cheque bounce cases and arbitration, are withdrawn upon settlement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#FFD700]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Asset Protection</h3>
                <p className="text-gray-600">
                  For secured loans, settlement prevents the bank from auctioning your property or vehicle.
                </p>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div id="eligibility" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is Eligible for OTS?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaChartLine className="text-3xl text-[#6A1B9A] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">NPA Status</h3>
                  </div>
                  <p className="text-gray-600">
                    Your loan account must be classified as a Non-Performing Asset (NPA), usually after 90 days of non-payment.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaHandHoldingUsd className="text-3xl text-[#6A1B9A] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Genuine Hardship</h3>
                  </div>
                  <p className="text-gray-600">
                    You must demonstrate a genuine inability to pay due to reasons like job loss, business failure, or health crisis.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-3xl text-[#6A1B9A] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Unsecured Loans</h3>
                  </div>
                  <p className="text-gray-600">
                    Personal loans and credit card debts are easier to settle as they are unsecured.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaCar className="text-3xl text-[#6A1B9A] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Depreciated Assets</h3>
                  </div>
                  <p className="text-gray-600">
                    For vehicle loans, if the vehicle value is less than the loan outstanding, settlement is a viable option.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div id="settlement-process" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Settlement Process
            </h2>
            <div className="relative border-l-4 border-[#6A1B9A] ml-6 md:ml-12 space-y-12">
              {[
                { title: "Case Evaluation", desc: "We analyze your loan details, outstanding amount, and financial status." },
                { title: "Legal Representation", desc: "We inform AU Bank that we are representing you, stopping direct harassment." },
                { title: "Proposal Submission", desc: "We draft and submit a formal settlement proposal highlighting your hardship." },
                { title: "Negotiation", desc: "Our experts negotiate with the bank's credit team for the maximum possible waiver." },
                { title: "Final Agreement", desc: "Once approved, you receive a formal settlement letter. You pay, and the loan is closed." }
              ].map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#FFD700] rounded-full border-4 border-white shadow-sm"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div id="documents-required" className="bg-[#4A148C] text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center mb-12">Documents Required</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2 text-[#FFD700]">Personal & Loan Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#FFD700]"/> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#FFD700]"/> Loan Account Statement</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#FFD700]"/> Any Legal Notices Received</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2 text-[#FFD700]">Proof of Hardship</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#FFD700]"/> Termination Letter / Salary Slip</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#FFD700]"/> Medical Reports (if applicable)</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#FFD700]"/> Bank Statements (last 6 months)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Rights Section */}
          <div id="legal-rights" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Know Your Rights</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              As a borrower, you have specific rights protected by RBI guidelines.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#6A1B9A] mb-3">Right to Respectful Treatment</h3>
                <p className="text-gray-600 mb-4">
                  Recovery agents cannot use abusive language, threaten you, or call at odd hours (before 7 AM or after 7 PM).
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#6A1B9A] mb-3">Right to Due Process</h3>
                <p className="text-gray-600 mb-4">
                  For vehicle repossession, the bank must follow a legal process and cannot simply snatch your vehicle by force.
                </p>
              </div>
            </div>
          </div>

          {/* Consequences of Default */}
          <div id="consequences" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Consequences of Ignoring Debt</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
                  <FaGavel className="text-4xl text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Action</h3>
                  <p className="text-gray-600">
                    Civil suits, SARFAESI action (for secured loans), and Section 138 cases for cheque bounce.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
                  <FaBalanceScale className="text-4xl text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Arbitration</h3>
                  <p className="text-gray-600">
                    The bank may initiate arbitration proceedings, leading to an award against you which can be executed as a court decree.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
                  <FaCar className="text-4xl text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Asset Seizure</h3>
                  <p className="text-gray-600">
                    For secured loans, your pledged assets (car, property) can be seized and auctioned to recover dues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CIBIL Impact */}
          <div id="cibil-impact" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">CIBIL Score Reality</h2>
            <p className="text-lg text-gray-600 mb-8">
              Settling a loan will reflect as "Settled" in your credit report, which does impact your score. However, it is far better than a "Written Off" or "Willful Default" status. A settled status stops the monthly negative reporting, allowing you to eventually rebuild your creditworthiness.
            </p>
          </div>

          {/* Why Choose Us */}
          <div id="why-choose-us" className="bg-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaUniversity className="text-5xl text-[#6A1B9A] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Bank Negotiation Experts</h3>
                  <p className="text-gray-600">We have extensive experience dealing with AU Small Finance Bank's recovery and legal teams.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaShieldAlt className="text-5xl text-[#6A1B9A] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Legal Protection</h3>
                  <p className="text-gray-600">We handle all legal notices and represent you in arbitration or court if necessary.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaHandHoldingUsd className="text-5xl text-[#6A1B9A] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Maximum Savings</h3>
                  <p className="text-gray-600">Our goal is to get you the maximum possible waiver on interest and penalties.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-purple-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I had a commercial vehicle loan with AU Bank. Due to lack of business, I couldn't pay. They were about to seize my truck. AMA Legal helped me settle the loan and save my livelihood."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#6A1B9A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    R
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Ramesh Singh</p>
                    <p className="text-sm text-gray-500">Transporter, Delhi</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-purple-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "My personal loan EMI was bouncing, and the harassment was unbearable. AMA Legal Solutions took over the communication and settled the loan for 40% less."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-[#4A148C] font-bold text-xl mr-4">
                    P
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Priya Sharma</p>
                    <p className="text-sm text-gray-500">Teacher, Jaipur</p>
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
            <div className="bg-[#4A148C] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your AU Bank Loan?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Don't let debt control your life. Get expert legal help to settle your AU Small Finance Bank loan today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#FFD700] text-[#4A148C] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#4A148C] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

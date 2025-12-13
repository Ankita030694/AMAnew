import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCheckCircle, FaShieldAlt, FaHandHoldingUsd, FaFileContract, FaUniversity, FaGavel, FaBalanceScale, FaUserTie, FaChartLine, FaLaptopCode, FaMobileAlt, FaUserMd } from "react-icons/fa";

// Metadata
export const metadata = {
  title: "Poonawalla Fincorp Loan Settlement | Digital OTS 2025 | AMA Legal Solutions",
  description: "Struggling with Poonawalla Fincorp personal, professional, or digital loans? Expert legal help for Poonawalla Fincorp loan settlement. Stop digital harassment and settle debt.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/poonawalla-fincorp',
  },
  openGraph: {
    title: "Poonawalla Fincorp Loan Settlement | Digital OTS 2025 | AMA Legal Solutions",
    description: "Struggling with Poonawalla Fincorp personal, professional, or digital loans? Expert legal help for Poonawalla Fincorp loan settlement. Stop digital harassment and settle debt.",
    url: "https://amalegalsolutions.com/services/loan-settlement/poonawalla-fincorp",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Poonawalla Fincorp Loan Settlement Services",
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
      "name": "Poonawalla Fincorp Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/poonawalla-fincorp"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Poonawalla Fincorp Loan Settlement: A Digital-First Guide to Debt Relief",
  "description": "Learn how to settle your Poonawalla Fincorp personal loan, professional loan, or digital loan through the One Time Settlement (OTS) scheme. Expert legal advice to stop harassment.",
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
  "name": "Poonawalla Fincorp Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal services for settling Poonawalla Fincorp loans and digital debts.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "295"
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
        "name": "Dr. Rajesh Verma"
      },
      "reviewBody": "I had a professional loan with Poonawalla Fincorp. The digital notices were incessant. AMA Legal Solutions handled the settlement professionally without damaging my reputation."
    }
  ]
};

export default function PoonawallaFincorpLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "digital-lending-context", title: "The Digital Lending Challenge" },
    { id: "understanding-settlement", title: "What is Poonawalla OTS?" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "settlement-process", title: "Digital Settlement Process" },
    { id: "documents-required", title: "Required Documents" },
    { id: "legal-rights", title: "Digital Arbitration & Rights" },
    { id: "consequences", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "why-choose-us", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Poonawalla Fincorp", href: "/services/loan-settlement/poonawalla-fincorp" },
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
        <div className="relative bg-gradient-to-r from-[#E31E24] to-[#8B0000] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#E31E24] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Digital-First Debt Relief
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-black">Poonawalla Fincorp</span> <br className="hidden md:block" /> Loan Digitally & Legally
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-red-50 font-light">
              Expert settlement for Personal, Professional, and App-based loans. Stop digital harassment and close your debt with a valid No Dues Certificate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#E31E24] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-black hover:bg-black text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
              Overwhelmed by Poonawalla Fincorp Debt? We Can Help.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Poonawalla Fincorp (formerly Magma Fincorp) is a leading NBFC known for its "Digital-First" approach. They offer a wide range of products, from <strong>Professional Loans</strong> for Doctors and CAs to <strong>Small Ticket Personal Loans</strong> disbursed through partner apps like KreditBee and Paytm. While their digital process makes borrowing easy, it can make the recovery process feel relentless and automated.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              If you are facing financial distress and receiving automated legal notices, WhatsApp threats, or calls from digital recovery agencies, you need a solution that matches their speed and sophistication. <strong>Loan Settlement</strong> is a viable legal option to exit this debt trap.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At AMA Legal Solutions, we understand the digital lending ecosystem. We know how to validate digital notices, negotiate with central credit teams, and secure a legally binding settlement that stops the digital harassment instantly.
            </p>
          </div>

          {/* Digital Lending Context - Unique Section */}
          <div id="digital-lending-context" className="bg-gray-900 text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-[#E31E24]">The Challenge of Digital Lending</h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Poonawalla Fincorp leverages advanced algorithms and partnerships with fintech apps. This means:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaLaptopCode className="text-[#E31E24] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-300"><strong>Automated Collections:</strong> You might receive system-generated legal notices and arbitration links faster than with traditional banks.</span>
                    </li>
                    <li className="flex items-start">
                      <FaMobileAlt className="text-[#E31E24] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-300"><strong>App-Based Confusion:</strong> You might have taken a loan on an app like KreditBee, but the lender on record is Poonawalla. Settlement must be done with Poonawalla, not the app support.</span>
                    </li>
                    <li className="flex items-start">
                      <FaGavel className="text-[#E31E24] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-300"><strong>Digital Arbitration:</strong> They frequently use online dispute resolution (ODR) platforms. Ignoring these emails can lead to valid ex-parte awards against you.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-[#E31E24]">
                  <h3 className="text-xl font-bold mb-4">Our Digital Defense Strategy</h3>
                  <p className="text-gray-600 mb-4">
                    We counter their digital efficiency with legal expertise:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-[#E31E24] font-bold mr-3">1</div>
                      <p className="text-sm font-medium">We verify the authenticity of every digital notice.</p>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-[#E31E24] font-bold mr-3">2</div>
                      <p className="text-sm font-medium">We represent you in online arbitration hearings.</p>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-[#E31E24] font-bold mr-3">3</div>
                      <p className="text-sm font-medium">We ensure the "No Dues Certificate" is emailed directly to you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What is OTS - Card Layout */}
          <div id="understanding-settlement" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#E31E24] mb-4">What is Poonawalla One Time Settlement (OTS)?</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  OTS is a provision where Poonawalla Fincorp agrees to close a loan account for a reduced payment. Given their high volume of small-ticket loans, they are often pragmatic about settling bad debts to maintain a clean balance sheet.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#E31E24]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Principal Waiver</h3>
                  <p className="text-gray-600">
                    Unlike some banks, Poonawalla may even waive a portion of the principal amount for unsecured personal loans if the hardship is proven.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#E31E24]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Interest Removal</h3>
                  <p className="text-gray-600">
                    Complete waiver of penal interest, bounce charges, and late fees is a standard part of our negotiation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#E31E24]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Closure</h3>
                  <p className="text-gray-600">
                    Settlement puts an immediate stop to all automated legal notices and arbitration proceedings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div id="eligibility" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is Eligible for Settlement?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaUserMd className="text-3xl text-[#E31E24] mr-4" />
                  <h3 className="text-xl font-bold text-gray-900">Professionals (Doctors/CAs)</h3>
                </div>
                <p className="text-gray-600">
                  If you took a Professional Loan and faced practice closure, loss of license, or severe health issues impacting your practice, you are eligible. We handle these cases with extreme discretion.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaUserTie className="text-3xl text-[#E31E24] mr-4" />
                  <h3 className="text-xl font-bold text-gray-900">Salaried Individuals</h3>
                </div>
                <p className="text-gray-600">
                  Job loss, pay cuts, or medical emergencies in the family are valid grounds. This applies to both direct personal loans and those taken via partner apps.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaChartLine className="text-3xl text-[#E31E24] mr-4" />
                  <h3 className="text-xl font-bold text-gray-900">SME Business Owners</h3>
                </div>
                <p className="text-gray-600">
                  Business loans can be settled if you can demonstrate cash flow failure, GST return drops, or operational shutdowns.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="text-3xl text-[#E31E24] mr-4" />
                  <h3 className="text-xl font-bold text-gray-900">Pre-owned Car Loan Borrowers</h3>
                </div>
                <p className="text-gray-600">
                  If you cannot pay the EMI, settlement can be done by surrendering the vehicle or paying a lump sum to retain it.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section - Vertical Steps for variety */}
          <div id="settlement-process" className="bg-[#f8fafc] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                Our Digital Settlement Process
              </h2>
              <div className="relative border-l-4 border-[#E31E24] ml-6 md:ml-12 space-y-12">
                {[
                  { title: "Digital Authorization", desc: "We sign a digital Letter of Authority. You don't need to visit our office." },
                  { title: "Central Team Contact", desc: "We bypass local agents and email Poonawalla's central legal/credit team directly." },
                  { title: "Verification & Negotiation", desc: "We verify their claims and negotiate hard on the settlement amount." },
                  { title: "Settlement Letter Validation", desc: "We ensure the settlement letter comes from an official @poonawallafincorp.com email." },
                  { title: "Closure & NDC", desc: "You pay, and we track the issuance of the digital No Dues Certificate." }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#E31E24] rounded-full border-4 border-white shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div id="documents-required" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Documents Required</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-[#E31E24] mb-4 border-b pb-2">Basic KYC</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• PAN Card</li>
                    <li>• Aadhaar Card</li>
                    <li>• Loan Account Number / App Loan ID</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#E31E24] mb-4 border-b pb-2">Hardship Proofs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Bank Statements (last 6 months)</li>
                    <li>• Termination Letter / Medical Reports</li>
                    <li>• Business Closure Proof (for SMEs)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Rights Section */}
          <div id="legal-rights" className="bg-black text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Digital Arbitration & Your Rights</h2>
              <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                Poonawalla Fincorp is a pioneer in using Digital Dispute Resolution. Understanding this is key to your defense.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">What is Digital Arbitration?</h3>
                  <p className="text-gray-400 mb-4">
                    Instead of a physical court, an arbitrator is appointed online. You receive notices via email/SMS to join a video hearing or submit a written defense online.
                  </p>
                  <p className="text-[#E31E24] font-bold">Risk: If you ignore the email, the arbitrator passes an award against you in your absence.</p>
                </div>
                <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">How We Protect You</h3>
                  <p className="text-gray-400 mb-4">
                    We monitor these digital notices. We draft legal responses and represent you in these online proceedings. We use this platform to argue your hardship and push for a settlement instead of a recovery order.
                  </p>
                  <p className="text-[#E31E24] font-bold">Benefit: You get legal representation without leaving your home.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Restructuring vs Settlement */}
          <div id="consequences" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Restructuring vs. Settlement</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#E31E24] text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-left">Restructuring</th>
                    <th className="p-4 text-left">Settlement (OTS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900">Cost</td>
                    <td className="p-4 text-gray-700">Full Amount + Interest</td>
                    <td className="p-4 text-gray-700">Reduced Amount (30-50% less)</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-4 font-bold text-gray-900">Credit Score</td>
                    <td className="p-4 text-gray-700">Neutral/Positive</td>
                    <td className="p-4 text-gray-700">Negative ("Settled" status)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-bold text-gray-900">Closure Speed</td>
                    <td className="p-4 text-gray-700">Years (extended tenure)</td>
                    <td className="p-4 text-gray-700">Immediate (15-30 days)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CIBIL Impact */}
          <div id="cibil-impact" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">CIBIL Score Reality Check</h2>
            <p className="text-lg text-gray-600 mb-8">
              Settling with Poonawalla Fincorp will drop your score by 50-100 points. However, continuing to default drops it more every month. A "Settled" status is a full stop to the damage. We provide a <strong>Credit Repair Plan</strong> post-settlement to help you bounce back.
            </p>
          </div>

          {/* Why Choose Us */}
          <div id="why-choose-us" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <FaLaptopCode className="text-5xl text-[#E31E24] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Digital Expertise</h3>
                  <p className="text-gray-600">We know how to handle app-based loans and digital arbitration notices effectively.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <FaUserMd className="text-5xl text-[#E31E24] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Professional Discretion</h3>
                  <p className="text-gray-600">For Doctors and CAs, we ensure the process is confidential and protects your reputation.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <FaShieldAlt className="text-5xl text-[#E31E24] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Scam Protection</h3>
                  <p className="text-gray-600">We verify every email and link to ensure you aren't paying a fake recovery agent.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-red-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I took a professional loan for my clinic. When I fell ill, the digital notices were scary. AMA Legal Solutions handled everything via email. I settled without any agents visiting my clinic."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#E31E24] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    R
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dr. Rajesh Verma</p>
                    <p className="text-sm text-gray-500">Dentist, Mumbai</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-red-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I had a loan from KreditBee which was actually Poonawalla. I was confused who to pay. AMA Legal Solutions clarified it, negotiated with Poonawalla directly, and got me a 40% waiver."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sneha Patil</p>
                    <p className="text-sm text-gray-500">IT Professional, Pune</p>
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
            <div className="bg-[#E31E24] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Settle Your Digital Debt?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Don't let automated notices scare you. Get expert legal help to settle your Poonawalla Fincorp loan today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white text-[#E31E24] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#E31E24] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

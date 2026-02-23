import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCheckCircle, FaShieldAlt, FaHandHoldingUsd, FaFileContract, FaUniversity, FaGavel, FaBalanceScale, FaUserTie, FaChartLine, FaMobileAlt, FaUserGraduate, FaWhatsapp } from "react-icons/fa";

// Metadata
export const metadata = {
  title: "KrazyBee Loan Settlement | KreditBee OTS Scheme | AMA Legal Solutions",
  description: "Struggling with KrazyBee or KreditBee loan repayment? Expert legal help for KrazyBee loan settlement. Stop harassment, settle student loans, and close debt.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/krazybee',
  },
  openGraph: {
    title: "KrazyBee Loan Settlement | KreditBee OTS Scheme | AMA Legal Solutions",
    description: "Struggling with KrazyBee or KreditBee loan repayment? Expert legal help for KrazyBee loan settlement. Stop harassment, settle student loans, and close debt.",
    url: "https://amalegalsolutions.com/services/loan-settlement/krazybee",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "KrazyBee Loan Settlement Services",
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
      "name": "KrazyBee Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/krazybee"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "KrazyBee & KreditBee Loan Settlement: A Guide for Students & Professionals",
  "description": "Learn how to settle your KrazyBee or KreditBee personal loan through the One Time Settlement (OTS) scheme. Expert legal advice to stop app harassment.",
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
  "name": "KrazyBee Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal services for settling KrazyBee and KreditBee loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "260"
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
        "name": "Karthik R."
      },
      "reviewBody": "I took a student loan from KrazyBee. After college, I couldn't pay. They called my parents. AMA Legal Solutions stopped the calls and settled the loan for a very low amount."
    }
  ]
};

export default function KrazyBeeLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "kreditbee-connection", title: "The KreditBee Connection" },
    { id: "understanding-settlement", title: "What is KrazyBee OTS?" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "settlement-process", title: "Settlement Process" },
    { id: "documents-required", title: "Required Documents" },
    { id: "legal-rights", title: "Stop Harassment" },
    { id: "consequences", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "why-choose-us", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "KrazyBee", href: "/services/loan-settlement/krazybee" },
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
        <div className="relative bg-gradient-to-r from-[#F57C00] to-[#E65100] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#F57C00] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Student & Personal Loan Relief
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-[#0D47A1]">KrazyBee / KreditBee</span> <br className="hidden md:block" /> Loan Without Harassment
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-orange-50 font-light">
              Stop calls to parents and friends. Settle your student or personal loan legally and clear your name.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#F57C00] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#F57C00] text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
              Trapped in a KrazyBee / KreditBee Loan Cycle?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <strong>KrazyBee Services Pvt. Ltd.</strong> is a prominent Non-Banking Financial Company (NBFC) that powers the widely used <strong>KreditBee</strong> lending app. They specialize in offering instant personal loans to students, young professionals, and first-time borrowers. While the accessibility is a boon, the high interest rates, processing fees, and short repayment tenures can quickly turn a small loan into a massive financial burden.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Many borrowers find themselves borrowing from one app to pay another, falling into a debt trap. If you are a student facing threats of calls to your parents or college authorities, or a salaried professional worried about your reputation at work, you need to know that <strong>harassment is illegal</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At AMA Legal Solutions, we specialize in handling digital lending cases. We intervene to stop the harassment, handle the legal notices, and negotiate a <strong>One Time Settlement (OTS)</strong> with KrazyBee. Our goal is to help you close the loan for a fair, affordable amount so you can restart your financial journey.
            </p>
          </div>

          {/* KreditBee Connection - Unique Section */}
          <div id="kreditbee-connection" className="bg-[#FFF3E0] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-[#F57C00]">The KreditBee Connection & RBI Guidelines</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Many borrowers are confused: "I took a loan from KreditBee, why is KrazyBee sending me notices?"
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaMobileAlt className="text-[#0D47A1] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700"><strong>The App vs. The Lender:</strong> KreditBee is the digital platform (LSP - Loan Service Provider), while KrazyBee is the RBI-registered NBFC that actually lends the money. Your legal liability is towards KrazyBee.</span>
                    </li>
                    <li className="flex items-start">
                      <FaFileContract className="text-[#0D47A1] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700"><strong>Digital Lending Guidelines:</strong> Under RBI's new Digital Lending Guidelines, all loan disbursals and repayments must happen directly between the borrower's and the RE's (Regulated Entity) bank accounts. This transparency helps us in tracking the exact principal vs. interest paid.</span>
                    </li>
                    <li className="flex items-start">
                      <FaWhatsapp className="text-[#0D47A1] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700"><strong>Data Privacy:</strong> Lenders cannot access your contact list or gallery. If they have, it is a serious violation of Google's policy and RBI rules. We use these violations to strengthen your case for settlement.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#F57C00]">
                  <h3 className="text-xl font-bold mb-4 text-[#0D47A1]">Common Loan Types</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <FaUserGraduate className="text-[#F57C00] text-2xl mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-900">Student Loans</h4>
                        <p className="text-sm text-gray-600">Small amounts for college expenses. Often defaulted due to lack of income.</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <FaUserTie className="text-[#F57C00] text-2xl mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-900">Salaried Loans</h4>
                        <p className="text-sm text-gray-600">Larger amounts for professionals. Default usually due to job loss.</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <FaHandHoldingUsd className="text-[#F57C00] text-2xl mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-900">E-Voucher Loans</h4>
                        <p className="text-sm text-gray-600">Loans taken to buy products on Amazon/Flipkart via the app.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What is OTS - Card Layout */}
          <div id="understanding-settlement" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0D47A1] mb-4">What is KrazyBee One Time Settlement (OTS)?</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                OTS is a legal exit route. KrazyBee agrees to close your loan account for a payment lower than the total outstanding. This is common for unsecured loans where recovery costs are high.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#F57C00]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stop the Meter</h3>
                <p className="text-gray-600">
                  Daily late fees can double your loan amount in months. Settlement freezes this growth immediately.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#F57C00]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy Protection</h3>
                <p className="text-gray-600">
                  Settlement ensures they stop calling your reference contacts, parents, or HR department.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#F57C00]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Official Closure</h3>
                <p className="text-gray-600">
                  You get a No Dues Certificate (NDC) from KrazyBee, proving the loan is closed and no further claim exists.
                </p>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div id="eligibility" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who Can Settle?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaUserGraduate className="text-3xl text-[#F57C00] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Students</h3>
                  </div>
                  <p className="text-gray-600">
                    If you are still studying and have no income source, or if you graduated but haven't found a job yet.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaUserTie className="text-3xl text-[#F57C00] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Unemployed Professionals</h3>
                  </div>
                  <p className="text-gray-600">
                    If you lost your job or faced a salary delay, making it impossible to pay the EMI.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaMobileAlt className="text-3xl text-[#F57C00] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Gig Workers</h3>
                  </div>
                  <p className="text-gray-600">
                    Delivery partners, freelancers, or drivers who faced a drop in daily earnings.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-3xl text-[#F57C00] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Harassment Victims</h3>
                  </div>
                  <p className="text-gray-600">
                    If the recovery agents have crossed legal lines (abusive language, calling relatives), we use this as a strong ground for settlement.
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
            <div className="relative border-l-4 border-[#F57C00] ml-6 md:ml-12 space-y-12">
              {[
                { title: "Profile Analysis", desc: "We check if your loan is with KrazyBee or a partner lender." },
                { title: "Legal Shielding", desc: "We issue a notice to stop calls to your parents and friends." },
                { title: "Negotiation", desc: "We talk to KrazyBee's central team to waive off the huge late fees." },
                { title: "Settlement Letter", desc: "We get a formal letter on KrazyBee letterhead confirming the deal." },
                { title: "Closure", desc: "You pay the amount, and the loan is closed permanently." }
              ].map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#0D47A1] rounded-full border-4 border-white shadow-sm"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div id="documents-required" className="bg-[#0D47A1] text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center mb-12">Documents Required</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2 text-[#F57C00]">Basic Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#F57C00]"/> PAN Card</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#F57C00]"/> KreditBee App Profile Screenshot</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#F57C00]"/> Loan Account Number</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2 text-[#F57C00]">Hardship Proofs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#F57C00]"/> Student ID Card (if student)</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#F57C00]"/> Termination Letter (if unemployed)</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#F57C00]"/> Bank Statement (showing no funds)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Rights Section - Harassment */}
          <div id="legal-rights" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Stop the Harassment: Know Your Rights</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Recovery agents often cross the line with young borrowers, using fear and shame as tools. It is crucial to know that you have legal protection.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#F57C00] mb-3">Contact List Access & Shaming</h3>
                <p className="text-gray-600 mb-4">
                  Calling your friends, relatives, or colleagues to shame you ("Loan Shaming") is a strict violation of RBI's Fair Practice Code and data privacy laws.
                </p>
                <p className="text-gray-900 font-semibold">
                  <strong>Our Action:</strong> We file formal complaints with the RBI Ombudsman and Cyber Crime portal if necessary, and send a legal notice to the lender to cease these activities immediately.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#F57C00] mb-3">Threats & Abusive Language</h3>
                <p className="text-gray-600 mb-4">
                  Agents cannot use abusive language, threaten physical harm, or claim they will "send police" to your home. These are scare tactics.
                </p>
                <p className="text-gray-900 font-semibold">
                  <strong>Our Action:</strong> We advise you to record these calls. We use these recordings as evidence to file grievances and use them as leverage during the settlement negotiation to get a better deal.
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
                    <tr className="bg-[#0D47A1] text-white">
                      <th className="p-4 text-left">Feature</th>
                      <th className="p-4 text-left">EMI Extension</th>
                      <th className="p-4 text-left">Loan Settlement (OTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold text-gray-900">Total Payment</td>
                      <td className="p-4 text-gray-700">Full Amount + Extra Interest</td>
                      <td className="p-4 text-gray-700">Reduced Amount (40-60% less)</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-bold text-gray-900">Credit Score</td>
                      <td className="p-4 text-gray-700">Maintained</td>
                      <td className="p-4 text-gray-700">Impacted ("Settled")</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold text-gray-900">Mental Peace</td>
                      <td className="p-4 text-gray-700">Debt continues for months</td>
                      <td className="p-4 text-gray-700">Immediate freedom</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CIBIL Impact */}
          <div id="cibil-impact" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">CIBIL Score Reality</h2>
            <p className="text-lg text-gray-600 mb-8">
              A "Settled" status will drop your score. But for a student or young professional, having a "Written Off" status is worse. Settlement stops the damage. You can rebuild your score in 1-2 years by using a secured credit card or a small gold loan.
            </p>
          </div>

          {/* Why Choose Us */}
          <div id="why-choose-us" className="bg-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaUserGraduate className="text-5xl text-[#F57C00] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Student & Youth Focused</h3>
                  <p className="text-gray-600">We understand the unique pressure on students and young professionals. Our approach is empathetic, confidential, and budget-friendly.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaShieldAlt className="text-5xl text-[#F57C00] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Anti-Harassment Shield</h3>
                  <p className="text-gray-600">We take immediate legal steps to stop calls to your parents, college, or workplace, protecting your reputation while we negotiate.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaGavel className="text-5xl text-[#F57C00] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                  <p className="text-gray-600">We have successfully settled hundreds of KrazyBee cases, often achieving waivers of 50% or more on the outstanding amount.</p>
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
                  "I took a ₹10,000 loan in college. It became ₹22,000 with late fees. They were calling my father. AMA Legal Solutions stopped the calls and settled it for ₹12,000."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#0D47A1] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    K
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Karthik R.</p>
                    <p className="text-sm text-gray-500">Student, Chennai</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-orange-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I lost my job and couldn't pay my KreditBee EMI. The agents were abusive. AMA Legal Solutions handled them professionally and closed my loan."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#F57C00] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sneha Gupta</p>
                    <p className="text-sm text-gray-500">Job Seeker, Pune</p>
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
            <div className="bg-[#0D47A1] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your KrazyBee Loan?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Don't let debt ruin your peace of mind. Get expert legal help to settle your KrazyBee loan today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#F57C00] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0D47A1] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

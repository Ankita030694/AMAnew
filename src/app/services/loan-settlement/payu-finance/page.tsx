import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCheckCircle, FaShieldAlt, FaHandHoldingUsd, FaFileContract, FaUniversity, FaGavel, FaBalanceScale, FaUserTie, FaChartLine, FaMobileAlt, FaLaptopCode, FaWhatsapp } from "react-icons/fa";

// Metadata
export const metadata = {
  title: "PayU Finance Loan Settlement | LazyPay OTS Scheme | AMA Legal Solutions",
  description: "Struggling with LazyPay or PayU Finance loan repayment? Expert legal help for PayU Finance loan settlement. Stop digital harassment and settle BNPL debt.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/payu-finance',
  },
  openGraph: {
    title: "PayU Finance Loan Settlement | LazyPay OTS Scheme | AMA Legal Solutions",
    description: "Struggling with LazyPay or PayU Finance loan repayment? Expert legal help for PayU Finance loan settlement. Stop digital harassment and settle BNPL debt.",
    url: "https://amalegalsolutions.com/services/loan-settlement/payu-finance",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "PayU Finance Loan Settlement Services",
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
      "name": "PayU Finance Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/payu-finance"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PayU Finance & LazyPay Loan Settlement: A Digital Debt Relief Guide",
  "description": "Learn how to settle your LazyPay BNPL or PayU Finance personal loan through the One Time Settlement (OTS) scheme. Expert legal advice to stop digital harassment.",
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
  "name": "PayU Finance Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal services for settling PayU Finance and LazyPay loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "280"
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
      "reviewBody": "I had a huge LazyPay bill that I couldn't pay. The calls were non-stop. AMA Legal Solutions helped me settle it for 50% of the amount and stopped the harassment."
    }
  ]
};

export default function PayUFinanceLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "lazypay-settlement", title: "LazyPay BNPL Settlement" },
    { id: "understanding-settlement", title: "What is PayU OTS?" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "settlement-process", title: "Digital Settlement Process" },
    { id: "documents-required", title: "Required Documents" },
    { id: "legal-rights", title: "Digital Arbitration" },
    { id: "consequences", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "why-choose-us", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "PayU Finance", href: "/services/loan-settlement/payu-finance" },
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
        <div className="relative bg-gradient-to-r from-[#002124] to-[#004d40] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-[#A5D6A7] text-[#002124] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Digital Debt Relief
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Settle Your <span className="text-[#A5D6A7]">LazyPay / PayU</span> <br className="hidden md:block" /> Loan Digitally
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-green-50 font-light">
              Expert legal help for BNPL and Instant Personal Loans. Stop automated calls and settle for a reduced amount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#A5D6A7] hover:bg-[#81c784] text-[#002124] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-[#A5D6A7] hover:bg-[#A5D6A7] hover:text-[#002124] text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
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
              Struggling with LazyPay or PayU Finance Debt?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              PayU Finance is a major player in the Indian fintech space, best known for its consumer brand <strong>LazyPay</strong>. They offer "Buy Now Pay Later" (BNPL) services and instant personal loans (XpressLoans) through a completely digital interface. While the borrowing process is seamless, the recovery process can be aggressive and automated.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              If you have defaulted on your LazyPay dues, you might be facing a barrage of automated calls, WhatsApp messages, and emails threatening legal action. Since these are digital loans, the legal notices often come via email, citing "Online Arbitration".
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At AMA Legal Solutions, we specialize in <strong>Fintech Loan Settlements</strong>. We understand the digital lending ecosystem and how to negotiate with PayU's central teams to secure a fair <strong>One Time Settlement (OTS)</strong>, stopping the digital harassment instantly.
            </p>
          </div>

          {/* LazyPay Specific Section - Unique */}
          <div id="lazypay-settlement" className="bg-[#f1f8e9] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-[#002124]">LazyPay BNPL Settlement</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    LazyPay's BNPL model encourages small, frequent borrowing. However, when you miss payments, the late fees stack up rapidly, often exceeding the principal amount.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaMobileAlt className="text-[#002124] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700"><strong>Aggregated Debt:</strong> We consolidate all your small BNPL transactions into one single settlement amount.</span>
                    </li>
                    <li className="flex items-start">
                      <FaWhatsapp className="text-[#002124] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700"><strong>Stop WhatsApp Harassment:</strong> We legally demand the cessation of threatening messages to you and your contacts.</span>
                    </li>
                    <li className="flex items-start">
                      <FaLaptopCode className="text-[#002124] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700"><strong>App Unblocking:</strong> While the account is closed, we ensure the "Overdue" status is removed from your profile after settlement.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#002124]">
                  <h3 className="text-xl font-bold mb-4 text-[#002124]">The "XpressLoan" Trap</h3>
                  <p className="text-gray-600 mb-4">
                    LazyPay often converts BNPL limits into larger "XpressLoans". These have high interest rates (up to 36%).
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h4 className="font-bold text-green-800 mb-2">Our Solution:</h4>
                    <p className="text-sm text-green-700">
                      We treat XpressLoans as standard unsecured personal loans. We negotiate to waive off the exorbitant interest and settle on the principal component, often achieving <strong>40-50% savings</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What is OTS - Card Layout */}
          <div id="understanding-settlement" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#002124] mb-4">What is PayU Finance OTS?</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                One Time Settlement (OTS) with PayU Finance is a formal agreement to close your loan account for a reduced amount. Given the high volume of small-ticket loans, PayU is often willing to settle to clear their books of bad debt.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#A5D6A7]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Late Fee Waiver</h3>
                <p className="text-gray-600">
                  BNPL products rely heavily on late fees. In a settlement, we get 100% of these fees waived.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#A5D6A7]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Online Closure</h3>
                <p className="text-gray-600">
                  The entire process is digital. You receive the settlement letter and NDC via email, ensuring a verifiable paper trail.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#A5D6A7]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Immunity</h3>
                <p className="text-gray-600">
                  Settlement protects you from future legal actions like online arbitration awards or civil suits.
                </p>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div id="eligibility" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is Eligible for Settlement?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaUserTie className="text-3xl text-[#002124] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Salaried Individuals</h3>
                  </div>
                  <p className="text-gray-600">
                    If you lost your job or faced a salary cut, making it impossible to pay the high EMIs of XpressLoans.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaMobileAlt className="text-3xl text-[#002124] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Students / Gig Workers</h3>
                  </div>
                  <p className="text-gray-600">
                    Many LazyPay users are young. If you over-leveraged yourself and can't pay, settlement is a way to exit the debt trap early.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaChartLine className="text-3xl text-[#002124] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Small Business Owners</h3>
                  </div>
                  <p className="text-gray-600">
                    If you used BNPL for business inventory and faced a cash crunch, we can help settle the accumulated dues.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-3xl text-[#002124] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Victims of Fraud</h3>
                  </div>
                  <p className="text-gray-600">
                    If your identity was misused to take a loan (common in fintech), we help you fight the liability and settle/close the account.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div id="settlement-process" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Digital Settlement Process
            </h2>
            <div className="relative border-l-4 border-[#002124] ml-6 md:ml-12 space-y-12">
              {[
                { title: "Digital Onboarding", desc: "Sign up with us online. No physical visits required." },
                { title: "Stop Harassment", desc: "We issue a legal notice to PayU to route all calls to us." },
                { title: "Central Negotiation", desc: "We email PayU's central collections team directly, bypassing local agents." },
                { title: "Offer Verification", desc: "We verify the settlement offer link/email to ensure it's genuine." },
                { title: "Closure", desc: "You make the payment online, and we track the NDC issuance." }
              ].map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#A5D6A7] rounded-full border-4 border-white shadow-sm"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div id="documents-required" className="bg-[#002124] text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center mb-12">Documents Required</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2 text-[#A5D6A7]">KYC & Loan Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#A5D6A7]"/> PAN Card</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#A5D6A7]"/> Aadhaar Card</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#A5D6A7]"/> LazyPay App Screenshots (Dashboard)</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2 text-[#A5D6A7]">Hardship Proofs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#A5D6A7]"/> Bank Statements (last 3 months)</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#A5D6A7]"/> Salary Slips / Termination Letter</li>
                    <li className="flex items-center"><FaCheckCircle className="mr-3 text-[#A5D6A7]"/> Medical Reports (if applicable)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Rights Section - Digital Arbitration */}
          <div id="legal-rights" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Understanding Digital Arbitration</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              PayU Finance uses "Online Dispute Resolution" (ODR). This is a fast-track legal process.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#002124] mb-3">The Risk</h3>
                <p className="text-gray-600 mb-4">
                  You receive an email to join a video hearing. If you ignore it, the arbitrator passes an award against you. This award is enforceable like a court decree.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#002124] mb-3">Our Defense</h3>
                <p className="text-gray-600 mb-4">
                  We represent you in these online hearings. We argue your financial hardship and challenge the interest calculations, pushing the arbitrator to facilitate a settlement instead of a decree.
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
                    <tr className="bg-[#002124] text-white">
                      <th className="p-4 text-left">Feature</th>
                      <th className="p-4 text-left">EMI Conversion</th>
                      <th className="p-4 text-left">Loan Settlement (OTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold text-gray-900">Total Payment</td>
                      <td className="p-4 text-gray-700">Full Amount + Interest</td>
                      <td className="p-4 text-gray-700">Reduced Amount (40-60% less)</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-bold text-gray-900">Credit Score</td>
                      <td className="p-4 text-gray-700">Maintained</td>
                      <td className="p-4 text-gray-700">Impacted ("Settled")</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-bold text-gray-900">Closure Speed</td>
                      <td className="p-4 text-gray-700">6-12 Months</td>
                      <td className="p-4 text-gray-700">Immediate (15-20 days)</td>
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
              A "Settled" status on a BNPL loan will drop your score. However, many people ignore BNPL defaults thinking they are "small". This is a mistake. A default stays for 7 years. A settlement stops the damage. We help you rebuild your score post-settlement.
            </p>
          </div>

          {/* Why Choose Us */}
          <div id="why-choose-us" className="bg-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaLaptopCode className="text-5xl text-[#002124] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Fintech Experts</h3>
                  <p className="text-gray-600">We understand the algorithms and digital processes of lenders like PayU and LazyPay.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaShieldAlt className="text-5xl text-[#002124] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">Anti-Harassment</h3>
                  <p className="text-gray-600">We take strict legal action against aggressive digital recovery agents and tele-callers.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                  <FaGavel className="text-5xl text-[#002124] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-3">ODR Defense</h3>
                  <p className="text-gray-600">We are one of the few firms that actively represent clients in Online Dispute Resolution hearings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div id="testimonials" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-green-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I had a LazyPay bill of ₹45,000 that ballooned to ₹80,000 with late fees. AMA Legal Solutions settled it for ₹30,000. The relief was instant."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#002124] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    R
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Rahul Sharma</p>
                    <p className="text-sm text-gray-500">Student, Delhi</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                <div className="text-6xl text-green-100 absolute top-4 left-4">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                  "I took an XpressLoan and lost my job. The online arbitration notice scared me. AMA Legal attended the hearing online and got me a settlement plan."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center text-[#002124] font-bold text-xl mr-4">
                    P
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Priya Singh</p>
                    <p className="text-sm text-gray-500">Software Engineer, Bangalore</p>
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
            <div className="bg-[#002124] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your LazyPay Debt?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Don't let digital debt haunt you. Get expert legal help to settle your PayU Finance loan today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#A5D6A7] text-[#002124] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#002124] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

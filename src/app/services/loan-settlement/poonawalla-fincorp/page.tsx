import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { 
  FaCheckCircle, 
  FaShieldAlt, 
  FaHandHoldingUsd, 
  FaFileContract, 
  FaUniversity, 
  FaGavel, 
  FaBalanceScale, 
  FaUserTie, 
  FaChartLine, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaUserMd,
  FaCar,
  FaHome,
  FaStethoscope,
  FaExclamationTriangle,
  FaPhoneSlash,
  FaEnvelopeOpenText
} from "react-icons/fa";

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
    { id: "about-poonawalla", title: "About Poonawalla Fincorp" },
    { id: "loan-products", title: "Loan Types & Risks" },
    { id: "default-cycle", title: "The Default Cycle" },
    { id: "harassment-tactics", title: "Recovery & Harassment" },
    { id: "legal-actions", title: "Legal Consequences" },
    { id: "digital-arbitration", title: "Digital Arbitration (ODR)" },
    { id: "settlement-process", title: "OTS Settlement Process" },
    { id: "rbi-guidelines", title: "RBI Guidelines & Rights" },
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
            <div className="inline-block bg-white text-[#E31E24] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase shadow-lg">
              Digital-First Debt Relief
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-md">
              Settle Your <span className="text-black">Poonawalla Fincorp</span> <br className="hidden md:block" /> Loan Digitally & Legally
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-red-50 font-light leading-relaxed">
              Expert legal settlement for Personal, Professional, and App-based loans. Stop digital harassment, handle arbitration, and close your debt with a valid No Dues Certificate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#E31E24] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#E31E24] text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
                  Call: +91-8700343611
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="relative flex flex-col lg:flex-row gap-10 container mx-auto px-4">
          {/* Sidebar for Desktop */}
          <div className="hidden lg:block w-1/4">
             <div className="sticky top-24">
               <TableOfContents sections={tocSections} orientation="vertical" />
             </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            
            {/* Introduction Section */}
            <div id="introduction" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Overwhelmed by Poonawalla Fincorp Debt? We Can Help.
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6">
                  In the rapidly evolving landscape of Indian finance, <strong>Poonawalla Fincorp</strong> (formerly Magma Fincorp) has emerged as a formidable "Digital-First" Non-Banking Financial Company (NBFC). Backed by the prestigious Cyrus Poonawalla Group, the company has aggressively expanded its portfolio, offering everything from <strong>Professional Loans</strong> for doctors and CAs to <strong>Small Ticket Personal Loans</strong> disbursed instantly through partner apps.
                </p>
                <p className="mb-6">
                  While their digital onboarding is seamless, their recovery process is equally automated and relentless. If you have missed an EMI, you might have already experienced the barrage of automated calls, WhatsApp messages, and system-generated legal notices. The speed at which they escalate defaults to <strong>Digital Arbitration</strong> can catch many borrowers off guard.
                </p>
                <p className="mb-6">
                  At <strong>AMA Legal Solutions</strong>, we specialize in navigating this digital debt ecosystem. We understand that financial distress can happen to anyone—due to job loss, medical emergencies, or business downturns. Our mission is to provide you with a legal shield against harassment and a structured path to financial freedom through <strong>One Time Settlement (OTS)</strong>.
                </p>
                <div className="bg-red-50 border-l-4 border-[#E31E24] p-6 rounded-r-lg">
                  <p className="font-bold text-[#E31E24] mb-2">The AMA Promise:</p>
                  <p>We don't just negotiate numbers; we protect your dignity. We handle the legal complexities, stop the harassment, and ensure you get a clean exit from your debt.</p>
                </div>
              </div>
            </div>

            {/* About Poonawalla Fincorp */}
            <div id="about-poonawalla" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Lender: Poonawalla Fincorp</h2>
              <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
                <p className="text-gray-600 mb-6 text-lg">
                  To effectively negotiate, you must understand who you are dealing with. Poonawalla Fincorp is not a traditional bank; it is a tech-driven NBFC. This distinction is crucial:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaLaptopCode className="text-[#E31E24] mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="text-gray-900 block">Algorithmic Recovery</strong>
                      <span className="text-gray-600">They use data analytics to profile borrowers. If you are flagged as "high risk," their automated systems trigger legal notices faster than a human manager would.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaMobileAlt className="text-[#E31E24] mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="text-gray-900 block">Fintech Partnerships</strong>
                      <span className="text-gray-600">They lend through apps like KreditBee, Paytm, and others. Borrowers often get confused about who to pay or settle with. <strong>Note:</strong> The settlement must always be with Poonawalla Fincorp, the regulated entity, not the app.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaGavel className="text-[#E31E24] mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="text-gray-900 block">Aggressive Legal Stance</strong>
                      <span className="text-gray-600">They are pioneers in using <strong>Online Dispute Resolution (ODR)</strong>. They file arbitration cases in bulk, often resulting in ex-parte awards if the borrower does not respond legally.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Loan Products & Risks */}
            <div id="loan-products" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Loan Types & Specific Risks</h2>
              <p className="text-gray-600 mb-8 text-lg">
                The strategy for settlement depends heavily on the type of loan you have. We tailor our approach accordingly:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Professional Loans */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <FaUserMd className="text-3xl text-[#E31E24] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Professional Loans</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Target:</strong> Doctors, CAs, CS, Architects.<br/>
                    <strong>Nature:</strong> Unsecured, High Value (up to ₹50 Lakhs).
                  </p>
                  <p className="text-gray-700 text-sm border-t pt-3">
                    <strong>Risk:</strong> They target your professional reputation. Recovery agents may visit your clinic or office, causing embarrassment. We prioritize <strong>discretion</strong> and legal notices to stop physical visits immediately.
                  </p>
                </div>

                {/* Personal Loans */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <FaUserTie className="text-3xl text-[#E31E24] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Personal Loans</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Target:</strong> Salaried individuals.<br/>
                    <strong>Nature:</strong> Unsecured, Medium Value.
                  </p>
                  <p className="text-gray-700 text-sm border-t pt-3">
                    <strong>Risk:</strong> Salary account freeze threats and contacting HR/Employers. Our legal intervention directs all communication to us, shielding your workplace.
                  </p>
                </div>

                {/* Business Loans */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <FaChartLine className="text-3xl text-[#E31E24] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Business Loans (SME)</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Target:</strong> MSMEs, Traders, Manufacturers.<br/>
                    <strong>Nature:</strong> Unsecured or Semi-Secured.
                  </p>
                  <p className="text-gray-700 text-sm border-t pt-3">
                    <strong>Risk:</strong> Section 138 (Cheque Bounce) cases against directors/partners. We handle the legal defense while negotiating the financial settlement.
                  </p>
                </div>

                {/* Pre-Owned Car Loans */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <FaCar className="text-3xl text-[#E31E24] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Pre-Owned Car Loans</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Target:</strong> Vehicle owners.<br/>
                    <strong>Nature:</strong> Secured (Hypothecated).
                  </p>
                  <p className="text-gray-700 text-sm border-t pt-3">
                    <strong>Risk:</strong> Repossession (Seizure) of the vehicle. Settlement often involves surrendering the car to adjust dues or paying a lump sum to remove the hypothecation.
                  </p>
                </div>

                {/* Loan Against Property */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <FaHome className="text-3xl text-[#E31E24] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Loan Against Property (LAP)</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Target:</strong> Property owners.<br/>
                    <strong>Nature:</strong> Secured (Mortgage).
                  </p>
                  <p className="text-gray-700 text-sm border-t pt-3">
                    <strong>Risk:</strong> SARFAESI Act proceedings (Auction). Settlement is complex and requires stopping the auction process legally (DRT) while negotiating.
                  </p>
                </div>

                {/* Medical Equipment Loans */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <FaStethoscope className="text-3xl text-[#E31E24] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Medical Equipment Loans</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Target:</strong> Hospitals, Diagnostic Centers.<br/>
                    <strong>Nature:</strong> Secured.
                  </p>
                  <p className="text-gray-700 text-sm border-t pt-3">
                    <strong>Risk:</strong> Seizure of critical machinery. We negotiate to restructure or settle without disrupting hospital operations.
                  </p>
                </div>
              </div>
            </div>

            {/* The Default Cycle */}
            <div id="default-cycle" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Anatomy of a Default</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Understanding the timeline of default helps you know when to act. With Poonawalla Fincorp, this cycle is accelerated:
              </p>
              <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                <div className="relative pl-8">
                  <div className="absolute -left-[14px] top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                  <h3 className="font-bold text-lg text-gray-900">Days 1-30: The Soft Reminder Phase</h3>
                  <p className="text-gray-600 mt-2">
                    Automated SMS and WhatsApp reminders. Calls from call centers. Late fees and bounce charges start accumulating (approx ₹500-₹1000 per bounce).
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute -left-[14px] top-0 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white"></div>
                  <h3 className="font-bold text-lg text-gray-900">Days 31-60: The Escalation Phase</h3>
                  <p className="text-gray-600 mt-2">
                    Calls become frequent and aggressive. "Loan Recall Notices" are sent via email, demanding full payment within 7 days. Agents may start calling references.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute -left-[14px] top-0 w-6 h-6 bg-orange-500 rounded-full border-4 border-white"></div>
                  <h3 className="font-bold text-lg text-gray-900">Days 61-90: The Legal Trigger Phase</h3>
                  <p className="text-gray-600 mt-2">
                    <strong>NPA Warning:</strong> Your account is about to be classified as Non-Performing Asset. Legal notices for Section 25 (Payment Act) or Section 138 (NI Act) are drafted. Arbitration clauses are invoked.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#E31E24] rounded-full border-4 border-white"></div>
                  <h3 className="font-bold text-lg text-gray-900">Day 90+: The NPA & Action Phase</h3>
                  <p className="text-gray-600 mt-2">
                    Account is NPA. Total outstanding includes massive penal interest. <strong>Digital Arbitration</strong> hearings begin. Physical recovery agents are assigned for field visits.
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <p className="font-bold text-yellow-800 flex items-center">
                  <FaExclamationTriangle className="mr-2" /> Critical Advice:
                </p>
                <p className="text-yellow-800 mt-2">
                  Do not wait for Day 90. The best settlements happen when we intervene early (Day 30-60) to stop the legal machinery before it gains momentum.
                </p>
              </div>
            </div>

            {/* Recovery & Harassment */}
            <div id="harassment-tactics" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recovery Tactics & How We Stop Them</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Poonawalla Fincorp uses a mix of digital and physical recovery tactics. While they are a regulated entity, third-party agencies often cross the line.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-800">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaPhoneSlash className="mr-3 text-gray-600" /> Digital Harassment
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Excessive Calling:</strong> 20-30 calls a day from different numbers.</li>
                    <li>• <strong>WhatsApp Threats:</strong> Sending fake "Police FIR" copies or "Arrest Warrants".</li>
                    <li>• <strong>Contacting References:</strong> Calling friends/family listed in your application.</li>
                  </ul>
                  <div className="mt-4 bg-gray-100 p-3 rounded text-sm font-semibold text-gray-700">
                    AMA Solution: We revoke authorization for third-party contact and file complaints with the RBI Ombudsman for privacy violations.
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E31E24]">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaUserTie className="mr-3 text-[#E31E24]" /> Physical Visits
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• <strong>Workplace Visits:</strong> Agents visiting your office to shame you.</li>
                    <li>• <strong>Home Visits:</strong> Visiting at odd hours (late night/early morning).</li>
                    <li>• <strong>Abusive Language:</strong> Using intimidation tactics.</li>
                  </ul>
                  <div className="mt-4 bg-red-50 p-3 rounded text-sm font-semibold text-red-700">
                    AMA Solution: We issue a formal legal notice of representation. Once a lawyer represents you, agents are legally required to stop direct contact.
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Consequences */}
            <div id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Consequences of Default</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#E31E24] mb-2">1. Section 25 (Payment & Settlement Systems Act)</h3>
                  <p className="text-gray-600">
                    Since most Poonawalla loans use NACH (auto-debit), a bounce is a criminal offense similar to a cheque bounce. They can file a criminal complaint. <strong>We handle the legal defense and appearance to prevent warrants.</strong>
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#E31E24] mb-2">2. Arbitration Proceedings</h3>
                  <p className="text-gray-600">
                    This is their preferred tool. An arbitrator is appointed to pass an "Award" (judgment) for the debt. This award is binding and can be executed like a court decree. <strong>We represent you in these proceedings to challenge the interest rates and charges.</strong>
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#E31E24] mb-2">3. Execution Petition (EP)</h3>
                  <p className="text-gray-600">
                    If an arbitration award is passed and you don't pay, they file an EP in a civil court to attach your bank accounts or assets. <strong>Settlement is the only way to stop an EP once filed.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Digital Arbitration - Unique Section */}
            <div id="digital-arbitration" className="bg-gray-900 text-white p-10 rounded-2xl mb-16 scroll-mt-32 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-4 text-[#E31E24]">The Threat of Digital Arbitration (ODR)</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Poonawalla Fincorp uses <strong>Online Dispute Resolution (ODR)</strong> platforms. You will receive an email with a link to join a hearing.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaExclamationTriangle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-400"><strong>The Trap:</strong> Many borrowers ignore these emails thinking they are spam. This results in an "Ex-Parte Award" (judgment against you in your absence).</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-400"><strong>Our Defense:</strong> We log in to these portals, submit a legal defense, and attend the video hearings. We use this platform to officially record your financial hardship and force the arbitrator to consider a settlement.</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <FaGavel className="text-9xl text-gray-700 opacity-50" />
                </div>
              </div>
            </div>

            {/* Settlement Process */}
            <div id="settlement-process" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Proven OTS Process</h2>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
                <div className="space-y-12">
                  {[
                    { 
                      step: "1", 
                      title: "Case Analysis & Authorization", 
                      desc: "We analyze your loan documents and get a digital Letter of Authority signed. This empowers us to talk to Poonawalla Fincorp on your behalf." 
                    },
                    { 
                      step: "2", 
                      title: "Legal Shielding", 
                      desc: "We send a formal representation letter to the lender and their agencies. This legally mandates them to stop harassing you and direct queries to us." 
                    },
                    { 
                      step: "3", 
                      title: "Hardship Presentation", 
                      desc: "We compile your 'Hardship Dossier' (medical reports, termination letters, bank statements) and present it to the Central Settlement Team." 
                    },
                    { 
                      step: "4", 
                      title: "Negotiation", 
                      desc: "We negotiate aggressively to waive off penal interest, bounce charges, and a portion of the principal. We aim for 50-70% savings." 
                    },
                    { 
                      step: "5", 
                      title: "Settlement Letter", 
                      desc: "We secure an official Settlement Letter from Poonawalla Fincorp. We verify its authenticity to ensure it's not a fake agent letter." 
                    },
                    { 
                      step: "6", 
                      title: "Closure & NDC", 
                      desc: "You make the payment directly to the lender. We track the account closure and ensure the No Dues Certificate is issued." 
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative pl-24">
                      <div className="absolute left-0 top-0 w-16 h-16 bg-[#E31E24] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white z-10">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RBI Guidelines */}
            <div id="rbi-guidelines" className="mb-16 scroll-mt-32 bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FaUniversity className="text-[#E31E24] mr-3" /> RBI Guidelines Protecting You
              </h2>
              <p className="text-gray-700 mb-6">
                The Reserve Bank of India has strict guidelines for NBFCs and Digital Lenders. We use these to protect your rights:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Fair Practices Code</h3>
                  <p className="text-sm text-gray-600">Recovery agents cannot call before 8 AM or after 7 PM. They cannot use abusive language or threaten physical harm.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Digital Lending Guidelines (2022)</h3>
                  <p className="text-sm text-gray-600">Lenders cannot access your phone contacts or gallery. Harassing your references is a violation of data privacy laws.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Right to Privacy</h3>
                  <p className="text-sm text-gray-600">Your debt is confidential. Agents cannot disclose your debt to your neighbors, colleagues, or relatives.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Grievance Redressal</h3>
                  <p className="text-sm text-gray-600">If harassment continues, we escalate the matter to the RBI Ombudsman, which often forces the lender to behave.</p>
                </div>
              </div>
            </div>

            {/* Why Choose AMA */}
            <div id="why-choose-us" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 border rounded-xl hover:shadow-xl transition-all">
                  <FaShieldAlt className="text-5xl text-[#E31E24] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Legal Shield</h3>
                  <p className="text-gray-600">We don't just talk; we act legally. Our notices carry weight and stop illegal recovery tactics.</p>
                </div>
                <div className="p-6 border rounded-xl hover:shadow-xl transition-all">
                  <FaHandHoldingUsd className="text-5xl text-[#E31E24] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Max Savings</h3>
                  <p className="text-gray-600">Our bulk negotiation power with Poonawalla Fincorp gets you deals that individuals can't get.</p>
                </div>
                <div className="p-6 border rounded-xl hover:shadow-xl transition-all">
                  <FaFileContract className="text-5xl text-[#E31E24] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Guaranteed Closure</h3>
                  <p className="text-gray-600">We ensure you get the NDC. No loose ends. No future claims.</p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I took a professional loan for my clinic. When I fell ill, the digital notices were scary. AMA Legal Solutions handled everything via email. I settled without any agents visiting my clinic."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#E31E24] rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Dr. Rajesh Verma</h4>
                      <p className="text-xs text-gray-500">Dentist, Mumbai</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I had a loan from KreditBee which was actually Poonawalla. I was confused who to pay. AMA Legal Solutions clarified it, negotiated with Poonawalla directly, and got me a 40% waiver."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sneha Patil</h4>
                      <p className="text-xs text-gray-500">IT Professional, Pune</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faqs" className="mb-16 scroll-mt-32">
              <FaqSection />
            </div>

          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-900 py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Close Your Poonawalla Loan?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Don't let digital debt control your life. Get expert legal help to settle your loan today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-[#E31E24] text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl">
                Book Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all">
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* States Grid */}
        <div className="container mx-auto px-4 py-12">
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

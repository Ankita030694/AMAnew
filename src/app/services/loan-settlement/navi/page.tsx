import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import FaqSection from "./FaqSection";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaCheckCircle, FaShieldAlt, FaHandHoldingUsd, FaFileContract, FaUniversity, FaGavel, FaBalanceScale, FaUserTie, FaPhoneSlash, FaMobileAlt, FaLock, FaUserSecret } from "react-icons/fa";

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
      "name": "Navi Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/navi"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Navi Loan Settlement: Legal Guide to Stop Harassment & Arbitration",
  "description": "Struggling with Navi Finserv loan? Learn about your digital rights, how to stop contact calling harassment, handle arbitration notices, and legally settle your debt.",
  "image": "https://amalegalsolutions.com/services/5.png",
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
  "name": "Navi Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/5.png",
  "description": "Legal settlement services for Navi Finserv personal loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "850"
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
      "reviewBody": "Navi agents were calling my parents. AMA Legal Solutions sent a notice and the calls stopped within 48 hours. Settled my 5 Lakh loan for 2.2 Lakhs."
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
      "reviewBody": "I received an arbitration notice from Navi. I was scared. AMA's lawyer attended the hearing online and helped me close the case."
    }
  ]
};

export const metadata = {
  title: "Navi Loan Settlement | Stop Harassment & Arbitration Legal Help",
  description:
    "Expert legal help for Navi Finserv loan settlement. Stop contact list harassment, handle arbitration notices, and negotiate a One Time Settlement (OTS).",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/navi',
  },
  openGraph: {
    title: "Navi Loan Settlement | Stop Harassment & Arbitration Legal Help",
    description: "Expert legal help for Navi Finserv loan settlement. Stop contact list harassment, handle arbitration notices, and negotiate a One Time Settlement (OTS).",
    url: "https://amalegalsolutions.com/services/loan-settlement/navi",
    type: "website",
    images: [
      {
        url: "/services/5.png",
        width: 1200,
        height: 630,
        alt: "Navi Loan Settlement Services",
      },
    ],
  },
};

export default function NaviLoanSettlementPage() {
  // UNIQUE TOC STRUCTURE - WIDER TOPICS
  const tocSections = [
    { id: "digital-debt-trap", title: "The Digital Debt Trap" },
    { id: "recovery-methods", title: "Navi's Recovery Methods" },
    { id: "digital-rights", title: "Your Rights as a Digital Borrower" },
    { id: "legal-strategy", title: "Navi's Legal Strategy" },
    { id: "settlement-solution", title: "The Settlement Solution" },
    { id: "resolution-process", title: "Step-by-Step Resolution" },
    { id: "documents", title: "Documents for Digital Loans" },
    { id: "financial-freedom", title: "Financial Freedom Roadmap" },
    { id: "why-choose-ama", title: "Why AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Navi Loan Settlement", href: "/services/loan-settlement/navi" },
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
        {/* Full Width Hero Section - Standard Design */}
        <div className="relative bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#2C3E50] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
              Navi Finserv Legal Relief
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Resolve Your <span className="text-gray-200">Navi Loan</span> <br className="hidden md:block" /> & Stop Digital Harassment
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100 font-light">
              Facing arbitration notices or calls to your contacts? We specialize in settling digital loans, protecting your privacy, and closing your debt legally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#2C3E50] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Legal Advice
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

          {/* 1. The Digital Debt Trap */}
          <div id="digital-debt-trap" className="container mx-auto px-4 py-12 max-w-4xl text-center scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              The Digital Debt Trap: Instant Cash, Instant Stress
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Navi Finserv has made getting a loan incredibly easy—just a few taps on your phone. However, this convenience often comes with high interest rates and strict repayment terms. Unlike traditional banks, digital lenders like Navi rely heavily on technology for both disbursement and recovery.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              When you miss an EMI, the algorithm triggers an aggressive recovery process. It's not just about the money anymore; it's about your data privacy, your reputation, and your peace of mind. Many borrowers find themselves borrowing from one app to pay another, falling into a vicious <strong>Digital Debt Trap</strong>.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg text-left">
              <p className="text-red-800 font-medium">
                <strong>Critical Warning:</strong> Ignoring a digital loan is dangerous. Navi is a registered NBFC and has the legal power to initiate arbitration and report defaults to CIBIL, severely damaging your financial future.
              </p>
            </div>
          </div>

          {/* 2. Navi's Recovery Methods */}
          <div id="recovery-methods" className="bg-gray-50 py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Navi Recovers Debt (And Why It's Scary)</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                  <FaMobileAlt className="text-5xl text-[#2C3E50] mb-6" />
                  <h3 className="text-xl font-bold mb-3">App Permissions</h3>
                  <p className="text-gray-600">
                    When you installed the app, you likely granted permissions to your <strong>Contacts, Location, and SMS</strong>. Recovery agents often use this data to trace you and pressure you.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                  <FaUserSecret className="text-5xl text-[#2C3E50] mb-6" />
                  <h3 className="text-xl font-bold mb-3">Contact Calling</h3>
                  <p className="text-gray-600">
                    The most feared tactic is calling your parents, friends, or colleagues. This "Reputation Risk" is used to force you into paying, even if you are bankrupt.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                  <FaGavel className="text-5xl text-[#2C3E50] mb-6" />
                  <h3 className="text-xl font-bold mb-3">Legal Notices</h3>
                  <p className="text-gray-600">
                    Navi is quick to send legal notices, often via WhatsApp and Email, threatening arbitration or Section 138 cases for cheque bounce/NACH failure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Your Rights as a Digital Borrower */}
          <div id="digital-rights" className="container mx-auto px-4 py-20 max-w-5xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Your Rights Under RBI Digital Lending Guidelines</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              The RBI has issued specific guidelines (DLG) to protect borrowers of digital apps. You are not helpless.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaLock className="text-green-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Data Privacy</h3>
                </div>
                <p className="text-gray-600">
                  Lenders cannot store your contact list. They can only access it once for onboarding with your consent. <strong>Calling your contacts is illegal.</strong>
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaPhoneSlash className="text-green-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Cooling-Off Period</h3>
                </div>
                <p className="text-gray-600">
                  You have a right to exit the loan by paying the principal + proportionate APR within a cooling-off period without penalty.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaUserTie className="text-green-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Grievance Redressal</h3>
                </div>
                <p className="text-gray-600">
                  Every digital lender must have a Nodal Grievance Officer. If they don't resolve your complaint in 30 days, you can complain to the RBI Ombudsman.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <FaFileContract className="text-green-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Key Fact Statement (KFS)</h3>
                </div>
                <p className="text-gray-600">
                  The lender must provide a KFS before disbursement, clearly stating the APR, recovery mechanism, and grievance officer details.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Navi's Legal Strategy */}
          <div id="legal-strategy" className="bg-[#2C3E50] text-white py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Navi's Legal Strategy: Arbitration & Conciliation</h2>
              <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Navi Finserv is known for using the <strong>Arbitration and Conciliation Act, 1996</strong> to recover dues. Here is what you need to know.
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-[#4CA1AF] mb-4">The Arbitration Notice</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    You might receive a notice stating that an "Arbitrator" has been appointed to decide your case. This is often an online process. If you ignore this, the arbitrator may pass an <strong>Ex-Parte Award</strong> (a judgment in your absence) ordering you to pay the full amount with interest.
                  </p>
                  <h3 className="text-xl font-bold text-[#4CA1AF] mb-4">Section 25 (PSSA)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If your auto-debit (NACH/e-Mandate) bounces, they can file a criminal case under Section 25 of the Payment and Settlement Systems Act. This is similar to a cheque bounce case and requires immediate legal attention.
                  </p>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">How AMA Protects You</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-[#4CA1AF] mt-1 mr-3 flex-shrink-0" />
                      <span>We reply to the Arbitration Notice, challenging the jurisdiction or the appointment if biased.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-[#4CA1AF] mt-1 mr-3 flex-shrink-0" />
                      <span>We represent you in online hearings, ensuring your financial hardship is recorded.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-[#4CA1AF] mt-1 mr-3 flex-shrink-0" />
                      <span>We push for a "Consent Award" based on a settlement amount, rather than a full decree.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 5. The Settlement Solution */}
          <div id="settlement-solution" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Settlement Solution (OTS)</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              One Time Settlement (OTS) is the most practical way to exit this trap. It is a legal agreement where Navi accepts a reduced amount to close the loan.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Waiver of Penalties</h3>
                <p className="text-gray-600">
                  Digital loans pile up huge late fees. In a settlement, we get 100% of these penalties waived off.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Principal Reduction</h3>
                <p className="text-gray-600">
                  Depending on your hardship (job loss, medical), we can even negotiate a discount on the principal amount.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Closure Letter</h3>
                <p className="text-gray-600">
                  You get a formal letter from Navi stating the loan is settled. This is your proof of freedom.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Step-by-Step Resolution */}
          <div id="resolution-process" className="bg-[#f8fafc] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Step-by-Step Resolution Process</h2>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Stop the Bleeding</h3>
                    <p className="text-gray-600">We send a legal notice to Navi revoking your consent for third-party contact. This stops the harassment of your friends and family.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Defense</h3>
                    <p className="text-gray-600">We handle all arbitration notices and legal threats. You don't have to talk to any recovery agent.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hardship Proof</h3>
                    <p className="text-gray-600">We submit your documents (termination letter, medical bills) to Navi's credit team to prove you genuinely cannot pay the full amount.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-[#2C3E50] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Negotiation & Closure</h3>
                    <p className="text-gray-600">We negotiate the best possible rate. You pay Navi directly. We verify the No Dues Certificate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Documents for Digital Loans */}
          <div id="documents" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Documents for Digital Loans</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <ul className="grid md:grid-cols-2 gap-6">
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" /> Loan Agreement (PDF from App)
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" /> Latest Loan Statement
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" /> Screenshots of Harassment (if any)
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" /> Arbitration Notices (Email/Post)
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" /> PAN & Aadhaar Card
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-3" /> Bank Statement (Last 3 Months)
                </li>
              </ul>
            </div>
          </div>

          {/* 8. Financial Freedom Roadmap */}
          <div id="financial-freedom" className="bg-[#E1F5FE] py-20 scroll-mt-32">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl font-bold text-[#0F4A8A] mb-8">Financial Freedom Roadmap</h2>
              <p className="text-lg text-gray-700 mb-8">
                Settling a loan impacts your CIBIL score, but it's not the end of the world. It's a reset button.
              </p>
              <div className="flex justify-center items-center gap-4 md:gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-400 mx-auto mb-2">1</div>
                  <p className="font-bold text-gray-800">Settle Debt</p>
                </div>
                <div className="h-1 w-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-400 mx-auto mb-2">2</div>
                  <p className="font-bold text-gray-800">Wait 6 Months</p>
                </div>
                <div className="h-1 w-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-400 mx-auto mb-2">3</div>
                  <p className="font-bold text-gray-800">Rebuild Score</p>
                </div>
              </div>
              <p className="mt-8 text-sm text-gray-600">
                We guide you on how to use secured credit cards (FD-backed) to boost your score back to 750+ after settlement.
              </p>
            </div>
          </div>

          {/* 9. Why AMA? */}
          <div id="why-choose-ama" className="container mx-auto px-4 py-20 max-w-6xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose AMA Legal Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <FaShieldAlt className="text-4xl text-[#2C3E50] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Digital Lending Experts</h3>
                <p className="text-gray-600">We understand the specific laws (DLG, IT Act) that govern apps like Navi.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <FaGavel className="text-4xl text-[#2C3E50] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Arbitration Defense</h3>
                <p className="text-gray-600">We don't just settle; we defend you in legal proceedings to prevent unfair orders.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <FaUserSecret className="text-4xl text-[#2C3E50] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Privacy Protection</h3>
                <p className="text-gray-600">We take strict legal action against any agent who breaches your data privacy.</p>
              </div>
            </div>
          </div>

          {/* 10. FAQs */}
          <div id="faqs" className="container mx-auto px-4 py-20 max-w-4xl scroll-mt-32">
            <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-12">Frequently Asked Questions</h2>
            <FaqSection />
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-4 pb-20">
            <div className="bg-[#2C3E50] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop the Harassment Today</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Don't let a digital loan ruin your life. Get expert legal help to settle your Navi loan and reclaim your peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white text-[#2C3E50] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#2C3E50] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
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

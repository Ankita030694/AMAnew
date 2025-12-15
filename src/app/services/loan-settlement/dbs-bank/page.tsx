import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCreditCard, FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaMobileAlt, FaGavel } from "react-icons/fa";
import { MdBusinessCenter, MdMoneyOff, MdWarning } from "react-icons/md";

// Metadata
export const metadata = {
  title: "DBS Bank Loan Settlement | Credit Card & Personal Loan OTS | AMA Legal Solutions",
  description: "Struggling with DBS Bank (Digibank) loan or credit card repayment? Expert legal help for settling Personal Loans and Credit Card dues. Stop harassment.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/dbs-bank',
  },
  openGraph: {
    title: "DBS Bank Loan Settlement | Credit Card & Personal Loan OTS | AMA Legal Solutions",
    description: "Struggling with DBS Bank (Digibank) loan or credit card repayment? Expert legal help for settling Personal Loans and Credit Card dues. Stop harassment.",
    url: "https://amalegalsolutions.com/services/loan-settlement/dbs-bank",
    type: "website",
    images: [
      {
        url: "/services/8.png",
        width: 1200,
        height: 630,
        alt: "DBS Bank Loan Settlement Services",
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
      "name": "DBS Bank Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/dbs-bank"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "DBS Bank Loan Settlement: Guide to Digibank & Credit Card OTS",
  "description": "Comprehensive guide on how to settle DBS Bank loans and credit cards. Learn about the One Time Settlement (OTS) process and how to stop legal action.",
  "image": "https://amalegalsolutions.com/services/8.png",
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
  "name": "DBS Bank Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/8.png",
  "description": "Legal settlement services for DBS Bank loans and credit cards.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "142"
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
        "name": "Anjali Sharma"
      },
      "reviewBody": "I had a huge outstanding on my DBS Bajaj credit card. The interest was killing me. AMA Legal Solutions helped me settle it for 45% of the amount. Highly professional."
    }
  ]
};

export default function DbsBankLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About DBS Bank" },
    { id: "digibank-issues", title: "Digibank & Digital Loans" },
    { id: "credit-cards", title: "Credit Card Settlement" },
    { id: "personal-loans", title: "Personal Loan Settlement" },
    { id: "legal-actions", title: "Legal Actions (Arbitration/138)" },
    { id: "ots-process", title: "One Time Settlement (OTS)" },
    { id: "why-hire-us", title: "Why Hire AMA Legal Solutions?" },
    { id: "process-steps", title: "Our Settlement Process" },
    { id: "rbi-rights", title: "Your Rights (RBI)" },
    { id: "cibil-score", title: "CIBIL Score Impact" },
    { id: "documents", title: "Required Documents" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "DBS Bank", href: "/services/loan-settlement/dbs-bank" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF3333] to-black opacity-80"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/circuit-pattern.png')]"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Credit Card & Personal Loan Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#FF3333]">DBS Bank</span> Debt <br className="hidden md:block" /> & Regain Financial Freedom
                </h1>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                  Struggling with <strong>Digibank</strong> loans or <strong>Bajaj Finserv DBS Credit Cards</strong>? We help you negotiate a legal One Time Settlement (OTS) and stop harassment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-[#FF3333] hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-lg transform hover:-translate-y-1">
                    Get Settlement Advice
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <FaPhoneAlt /> +91-8700343611
                  </a>
                </div>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                    <FaShieldAlt className="text-4xl text-[#FF3333]" />
                    <div>
                      <h3 className="font-bold text-xl">Expert Legal Defense</h3>
                      <p className="text-sm text-gray-400">Stop Calls & Legal Notices</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Digibank Loans</span>
                      <span className="bg-red-500/20 text-red-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Credit Cards</span>
                      <span className="bg-red-500/20 text-red-100 px-2 py-1 rounded text-xs">OTS Available</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Business Loans</span>
                      <span className="bg-red-500/20 text-red-100 px-2 py-1 rounded text-xs">Restructuring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 py-12">
          {/* Sidebar Navigation - Vertical */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DBS Bank: The "Asian" Giant with Aggressive Recovery</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#FF3333] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>DBS Bank India Limited (DBIL)</strong> is a wholly-owned subsidiary of DBS Bank Ltd, Singapore. While they market themselves as "Asia's Safest Bank," their approach to debt recovery in India is anything but gentle. After acquiring the struggling <strong>Lakshmi Vilas Bank (LVB)</strong>, DBS significantly expanded its physical footprint, but its core lending engine remains <strong>Digibank</strong>—a digital-first platform that disburses loans in minutes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This "Click-and-Loan" model has led to a surge in defaults. Borrowers often take personal loans or credit cards (like the <strong>Bajaj Finserv DBS SuperCard</strong>) without fully understanding the high interest rates and strict repayment terms. When financial hardship strikes, DBS Bank's recovery machinery kicks in.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Unlike traditional PSU banks that might be slow to act, DBS uses a combination of <strong>automated digital harassment</strong> (thousands of calls/emails) and <strong>swift legal action</strong> (Arbitration and Section 138 cases). At AMA Legal Solutions, we understand the "Corporate & Digital" nature of DBS's recovery strategy. We counter their automated systems with personalized legal defense, forcing them to come to the negotiating table.
                </p>
              </div>
            </section>

            {/* Digibank Issues */}
            <section id="digibank-issues" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaMobileAlt className="text-4xl text-[#FF3333]" />
                <h2 className="text-3xl font-bold text-gray-900">The "Digibank" Trap: Invisible Lender, Visible Harassment</h2>
              </div>
              <p className="text-gray-700 mb-8 text-lg">
                Digibank loans are processed by algorithms, not humans. This creates a unique set of problems when you try to explain your financial hardship.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">1. The "No Human" Wall</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    When you default, you can't just walk into a branch and talk to a manager. Digibank's support is largely chat-bot driven. You are stuck in a loop of automated responses while the penal interest keeps piling up.
                  </p>
                  <p className="text-[#FF3333] font-semibold">
                    Our Solution: We bypass the app support entirely. We send legal notices directly to the Nodal Officer and the Head of Collections at DBS Bank's corporate office, forcing a human review of your case.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">2. The NACH Bounce Cycle</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    DBS's system is programmed to re-present your EMI cheque/NACH mandate multiple times a month. Each bounce incurs a charge from both DBS and your own bank. A ₹15,000 EMI default can turn into a ₹25,000 liability in just one month due to these hidden charges.
                  </p>
                  <p className="text-[#FF3333] font-semibold">
                    Our Solution: We instruct you on how to legally stop these mandates to prevent further loss, while we negotiate the main settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* Credit Cards */}
            <section id="credit-cards" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Bajaj Finserv DBS Bank SuperCard: A Double-Edged Sword</h2>
              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <FaCreditCard className="text-4xl text-[#FF3333]" />
                  <h3 className="text-2xl font-bold text-[#FF3333]">Understanding the Credit Card Debt Trap</h3>
                </div>
                <p className="text-gray-800 mb-6 text-lg">
                  The <strong>Bajaj Finserv DBS Bank SuperCard</strong> is one of the most widely sold credit cards in India. It offers great rewards, but the penalties for default are severe.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-red-700">The "Minimum Due" Illusion</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Many cardholders pay only the "Minimum Amount Due" (MAD), thinking they are safe. In reality, you are paying <strong>3.5% to 4% interest per month (42-48% annually)</strong> on the remaining balance. Within a year, your debt can double even if you don't spend a single rupee more.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-red-700">Over-Limit & Late Fees</h4>
                    <p className="text-gray-700 leading-relaxed">
                      If your interest pushes your balance over the credit limit, DBS charges an "Over-Limit Fee". Add to this the "Late Payment Fee" (often ₹500-₹1000), and GST on all charges. It's a mathematical impossibility to escape this trap by paying minimums.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-green-500">
                  <h4 className="font-bold text-xl mb-4 text-green-800">How We Settle DBS Credit Cards</h4>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <FaRegCheckCircle className="mt-1 text-green-600 text-xl" /> 
                      <div>
                        <strong>Stop the Bleeding:</strong> We advise you to stop making small, ineffective payments. We negotiate on the <em>Principal Outstanding</em> (the actual amount you spent), not the inflated bill amount.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaRegCheckCircle className="mt-1 text-green-600 text-xl" /> 
                      <div>
                        <strong>Waiver of Charges:</strong> We fight to get 100% of the late fees, over-limit charges, and penal interest waived off.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaRegCheckCircle className="mt-1 text-green-600 text-xl" /> 
                      <div>
                        <strong>Lump Sum Settlement:</strong> We structure a One Time Settlement (OTS). For example, if your bill is ₹2 Lakhs (but you only spent ₹1.2 Lakhs), we aim to settle it for ₹60k-₹80k depending on your hardship.
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="mt-6 text-sm text-gray-500 italic">
                  *Warning: Settling a credit card will result in the card being blocked and the account marked as "Settled" in CIBIL. This is a necessary trade-off to get out of debt.
                </p>
              </div>
            </section>

            {/* Personal Loans */}
            <section id="personal-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DBS Personal Loan Settlement</h2>
              <p className="text-lg text-gray-700 mb-6">
                Personal loans are unsecured debts. This means the bank does not have any collateral (like your house or car) to seize. This gives you, the borrower, some leverage during negotiation.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF3333]">
                  <FaHandHoldingUsd className="text-4xl text-[#FF3333] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Unsecured Nature</h3>
                  <p className="text-gray-600 text-sm">Since there is no asset to sell, the bank is often willing to accept a reduced amount to close the file rather than pursuing expensive legal action.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF3333]">
                  <FaBalanceScale className="text-4xl text-[#FF3333] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Arbitration Risk</h3>
                  <p className="text-gray-600 text-sm">DBS may initiate arbitration proceedings. We represent you in these proceedings to ensure a fair settlement is reached before any award is passed.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FF3333]">
                  <FaMoneyBillWave className="text-4xl text-[#FF3333] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Discount Potential</h3>
                  <p className="text-gray-600 text-sm">For personal loans that have been NPAs for over a year, settlements can sometimes be achieved at 40-50% of the outstanding value.</p>
                </div>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Consequences: Arbitration & Section 138</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaGavel className="text-3xl text-gray-700" />
                    <h3 className="text-2xl font-bold text-gray-900">1. Arbitration Proceedings</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    DBS Bank is very quick to initiate arbitration. This is a private court process.
                  </p>
                  <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-2">The "Venue" Bias</h4>
                    <p className="text-gray-600 mb-2">
                      DBS often appoints an arbitrator in <strong>Chennai, Mumbai, or Delhi</strong>, regardless of where you live. They count on you not showing up.
                    </p>
                    <p className="text-gray-600">
                      <strong>Our Defense:</strong> We challenge the venue. We file a request to hold the arbitration virtually or in your home city. We ensure you are represented, preventing an <em>Ex-Parte Award</em> (an order passed in your absence).
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaExclamationTriangle className="text-3xl text-red-600" />
                    <h3 className="text-2xl font-bold text-gray-900">2. Section 138 / Section 25 (Criminal Action)</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    If your NACH mandate or a security cheque bounces, DBS can file a criminal case under <strong>Section 138 of the Negotiable Instruments Act</strong> or <strong>Section 25 of the Payment and Settlement Systems Act</strong>.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>This is a <strong>bailable offense</strong>, but you must appear in court.</li>
                    <li>If you ignore the court summons, a <strong>Non-Bailable Warrant (NBW)</strong> can be issued against you.</li>
                    <li><strong>Our Strategy:</strong> We appear in court on your behalf (or with you), secure bail, and then inform the judge that we are in settlement talks. Courts encourage settlement in 138 cases. We then close the loan and get the case quashed.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUserTie className="text-3xl text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">3. Third-Party Recovery Agents</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    DBS hires aggressive agencies. They may call your office, your relatives, or visit your home.
                  </p>
                  <p className="font-bold text-gray-900">
                    Once you hire AMA Legal Solutions, we issue a "Cease & Desist" notice. We tell the bank that all communication must go through your lawyer. This typically stops the harassment immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* OTS Process */}
            <section id="ots-process" className="mb-16 scroll-mt-32">
              <div className="bg-[#1a1a1a] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#FF3333]">One Time Settlement (OTS) Explained</h2>
                <p className="text-lg text-gray-300 mb-8">
                  OTS is a legal mechanism where the bank agrees to accept a reduced lump sum payment to close the loan account permanently.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Benefits of OTS</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Complete waiver of future interest.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Waiver of accumulated penal charges.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Closure of all legal cases.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Mental peace and freedom from debt.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Our Role</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We analyze your financial gap and present a proposal to DBS Bank's settlement committee. We ensure the settlement amount is realistic for you and that the bank issues a valid "No Dues Certificate" upon payment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Hire Us */}
            <section id="why-hire-us" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaShieldAlt className="text-4xl text-[#FF3333] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Protection</h3>
                  <p className="text-sm text-gray-600">We shield you from aggressive recovery agents and legal threats.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaHandHoldingUsd className="text-4xl text-[#FF3333] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Savings</h3>
                  <p className="text-sm text-gray-600">Our negotiation often saves clients 40-60% of the total outstanding debt.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaBook className="text-4xl text-[#FF3333] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Expertise</h3>
                  <p className="text-sm text-gray-600">We know the internal policies of banks like DBS and how to navigate them.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaRegCheckCircle className="text-4xl text-[#FF3333] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Closure</h3>
                  <p className="text-sm text-gray-600">We ensure you get proper legal closure documents (NDC) to avoid future issues.</p>
                </div>
              </div>
            </section>

            {/* Process Steps */}
            <section id="process-steps" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Roadmap</h2>
              <p className="text-gray-600 mb-10 text-lg">
                Settling with a multinational bank like DBS requires a structured, legal approach. We don't just "ask" for a discount; we build a case for it.
              </p>
              <div className="relative border-l-4 border-[#FF3333] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "1. Case Analysis & Harassment Shield", 
                    desc: "We review your loan documents. Immediately, we issue a 'Letter of Representation' to DBS Bank. This legal document informs them that you have legal counsel, which typically stops the aggressive recovery calls to you and your family." 
                  },
                  { 
                    title: "2. Legal Notice Response", 
                    desc: "If you have received a legal notice (Section 138, Arbitration, or Conciliation), we draft a strong legal reply. We deny any illegal claims and put on record your genuine intent to settle due to financial hardship, protecting you from ex-parte orders." 
                  },
                  { 
                    title: "3. Hardship Documentation", 
                    desc: "We compile proofs of your financial crisis (job loss letter, medical bills, bank statements). DBS's system requires documented proof to approve a high-waiver settlement." 
                  },
                  { 
                    title: "4. Strategic Negotiation", 
                    desc: "We engage with DBS Bank's central settlement team. We push for a 'Principal-Only' settlement or a deep discount on the total outstanding. We leverage any past harassment or procedural lapses by their agents to get a better deal." 
                  },
                  { 
                    title: "5. Settlement Letter Verification", 
                    desc: "DBS will issue a settlement letter. We verify it to ensure it mentions 'Full and Final Settlement' and clearly states that the loan will be closed and no future claims will be made." 
                  },
                  { 
                    title: "6. Closure & NDC", 
                    desc: "You make the payment directly to DBS Bank (never to an agent). We track the payment and ensure you receive the No Dues Certificate (NDC) within 15-20 days." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#FF3333] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Rights */}
            <section id="rbi-rights" className="mb-16 scroll-mt-32">
              <div className="bg-[#FFF8E1] p-8 rounded-2xl border border-[#FFECB3]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#FF6F00]" />
                  <h2 className="text-2xl font-bold text-[#FF6F00]">Know Your Rights (RBI Guidelines)</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  The RBI has strict codes of conduct for debt recovery. You are protected against:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> <strong>Time Restrictions:</strong> No calls before 8 AM or after 7 PM.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> <strong>Privacy:</strong> Agents cannot discuss your debt with neighbors or relatives.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> <strong>Decency:</strong> No abusive language or physical threats.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> <strong>Identification:</strong> Agents must carry ID cards and authorization letters.</li>
                </ul>
                <p className="mt-6 text-sm text-gray-600 italic">
                  Violation of these rights is grounds for a complaint to the Banking Ombudsman, which we can handle for you.
                </p>
              </div>
            </section>

            {/* CIBIL Score */}
            <section id="cibil-score" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Settlement does affect your credit score. Your account will be flagged as "Settled," which indicates a default was resolved by paying less than the full amount.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>However, this is a temporary setback.</strong> A "Settled" status is far better than "Written Off" or "Suit Filed," which permanently damage your creditworthiness.
                  </p>
                  <p className="text-gray-700">
                    Once the loan is closed, you can start rebuilding your score. With disciplined financial behavior, you can reach a healthy score (750+) within 12-24 months.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Rebuilding Strategy</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Get a secured credit card (against Fixed Deposit).</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Use less than 30% of the limit.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Pay the full bill amount on time every month.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Avoid applying for new unsecured loans for 1 year.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-16 scroll-mt-32">
              <div className="bg-[#1a1a1a] text-white rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#FF3333]" /> Loan Account Number / Credit Card Number</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FF3333]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FF3333]" /> Latest Statement of Account</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#FF3333]" /> Copies of Legal Notices (if any)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FF3333]" /> Proof of Income Loss (Termination letter, etc.)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FF3333]" /> Medical Records (if applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Real Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FF3333]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#FF3333] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Credit Card Settlement</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Saved ₹1.5 Lakhs on SuperCard</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I had a huge outstanding on my DBS Bajaj credit card. The limit was ₹2 Lakhs, but with interest, it became ₹3.5 Lakhs. Agents were calling my office. AMA Legal Solutions stepped in. They stopped the calls immediately. After 3 months of negotiation, they settled the entire debt for ₹1.1 Lakhs. I saved over ₹2 Lakhs and got my peace of mind back."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">A</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Anjali Sharma</h4>
                      <p className="text-xs text-gray-500">Marketing Executive, Mumbai</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FF3333]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#FF3333] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Personal Loan Case</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Arbitration Case Resolved</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I defaulted on a ₹5 Lakh Digibank loan. I received an arbitration notice from Delhi, but I live in Bangalore. I was terrified. AMA Legal Solutions represented me in the arbitration. They proved my job loss and negotiated a settlement of ₹2.2 Lakhs. The arbitration case was withdrawn, and I received my NDC."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">K</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Karan Mehta</h4>
                      <p className="text-xs text-gray-500">Software Engineer, Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faqs" className="mb-16 scroll-mt-32">
              <FaqSection />
            </section>

          </div>
        </div>

        {/* Final CTA */}
        <section className="bg-[#FF3333] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Close Your DBS Loan?</h2>
            <p className="text-white/90 text-lg mb-10">
              Don't let debt control your life. Get expert legal help today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#FF3333] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#FF3333] transition-all text-lg flex items-center justify-center gap-2">
                <FaPhoneAlt /> Call: +91-8700343611
              </a>
            </div>
          </div>
        </section>

        {/* States Grid */}
        <div className="container mx-auto px-4 py-12">
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

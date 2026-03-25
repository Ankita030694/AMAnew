import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCreditCard, FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaGavel, FaGlobe, FaBriefcase } from "react-icons/fa";
import { MdCreditScore, MdMoneyOff } from "react-icons/md";

// Metadata
export const metadata = {
  title: "Standard Chartered Loan Settlement | Credit Card OTS | AMA Legal Solutions",
  description: "Struggling with Standard Chartered Bank loan or credit card dues? Expert legal help for One Time Settlement (OTS). Stop harassment and legal action.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/standard-chartered',
  },
  openGraph: {
    title: "Standard Chartered Loan Settlement | Credit Card OTS | AMA Legal Solutions",
    description: "Struggling with Standard Chartered Bank loan or credit card dues? Expert legal help for One Time Settlement (OTS). Stop harassment and legal action.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/standard-chartered",
    type: "website",
    images: [
      {
        url: "/services/14.png",
        width: 1200,
        height: 630,
        alt: "Standard Chartered Loan Settlement Services",
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
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Standard Chartered Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/standard-chartered"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Standard Chartered Loan Settlement: Guide to SCB OTS",
  "description": "Comprehensive guide on how to settle Standard Chartered Bank credit cards and personal loans. Learn about the One Time Settlement (OTS) process and legal protection.",
  "image": "https://www.amalegalsolutions.com/services/14.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
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
  "name": "Standard Chartered Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/14.png",
  "description": "Legal settlement services for Standard Chartered Bank loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "145"
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
        "name": "Anil Mehta"
      },
      "reviewBody": "I had a huge credit card debt with Standard Chartered. The interest was killing me. AMA Legal Solutions helped me settle it for a reasonable amount and stopped the collection calls."
    }
  ]
};

export default function StandardCharteredSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About Standard Chartered" },
    { id: "credit-cards", title: "Credit Card Settlement" },
    { id: "personal-loans", title: "Personal Loan Settlement" },
    { id: "legal-actions", title: "Legal Actions (Arbitration)" },
    { id: "harassment", title: "Stop Harassment" },
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
    { label: "Standard Chartered", href: "/services/loan-settlement/standard-chartered" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#009F3D] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0075BE] to-[#009F3D] opacity-90"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  International Bank Debt Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#A5D6A7]">Standard Chartered</span> Debt Legally
                </h1>
                <p className="text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl">
                  Overwhelmed by Standard Chartered credit card or personal loan dues? We help you negotiate a One Time Settlement (OTS) and protect you from legal action.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-white text-[#009F3D] font-bold rounded-lg transition-all shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1">
                    Get Free Advice
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <FaPhoneAlt /> +91-8700343611
                  </a>
                </div>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                    <FaGlobe className="text-4xl text-[#A5D6A7]" />
                    <div>
                      <h3 className="font-bold text-xl">Global Banking Expert</h3>
                      <p className="text-sm text-gray-300">Resolve High-Value Debt</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Credit Cards</span>
                      <span className="bg-green-500/20 text-green-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Personal Loans</span>
                      <span className="bg-green-500/20 text-green-100 px-2 py-1 rounded text-xs">OTS Available</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Smart Credit</span>
                      <span className="bg-green-500/20 text-green-100 px-2 py-1 rounded text-xs">Negotiation</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Standard Chartered Bank</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#009F3D] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Standard Chartered Bank (SCB)</strong> is one of the oldest and most prestigious international banks operating in India. Known for its premium credit cards (like the Ultimate and Manhattan) and high-value personal loans, SCB caters to a large base of salaried and self-employed professionals.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  However, as a multinational corporation (MNC), Standard Chartered follows extremely strict compliance and recovery protocols. Unlike some local banks that might be more flexible, SCB often initiates legal proceedings swiftly against defaulters. This can include filing for arbitration, criminal complaints for cheque bounces, and aggressive pursuit of dues through third-party agencies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you are facing financial distress and cannot pay your Standard Chartered dues, ignoring the problem is the worst strategy. <strong>AMA Legal Solutions</strong> specializes in negotiating with MNC banks. We understand their legal framework and can help you secure a fair <strong>One Time Settlement (OTS)</strong> while protecting you from legal harassment.
                </p>
              </div>
            </section>

            {/* Credit Cards */}
            <section id="credit-cards" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaCreditCard className="text-4xl text-[#009F3D]" />
                <h2 className="text-3xl font-bold text-gray-900">The Credit Card Debt Trap</h2>
              </div>
              <p className="text-gray-700 mb-8 text-lg">
                Standard Chartered credit cards offer great rewards, but the debt trap they create can be devastating. Here is how it spirals out of control:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaMoneyBillWave className="text-red-600" /> The "Minimum Due" Illusion
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Many cardholders fall into the trap of paying only the "Minimum Amount Due" (MAD). This payment barely covers the interest. The principal amount remains unpaid, and SCB charges an interest rate of up to <strong>3.75% per month (45% annually)</strong> on the outstanding balance. This can cause your debt to double in less than two years.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaExclamationTriangle className="text-red-600" /> Over-Limit & Late Fees
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you miss a payment or cross your credit limit due to interest accumulation, SCB imposes heavy penalties. These charges also attract GST, further inflating the bill. Once you are in this cycle, it is nearly impossible to exit without a structured settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* Personal Loans */}
            <section id="personal-loans" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaHandHoldingUsd className="text-4xl text-[#0075BE]" />
                <h2 className="text-3xl font-bold text-gray-900">Personal Loan Settlement</h2>
              </div>
              <div className="bg-[#E3F2FD] p-8 rounded-2xl border border-[#BBDEFB]">
                <div className="flex items-center gap-3 mb-6">
                  <FaBriefcase className="text-3xl text-[#0075BE]" />
                  <h3 className="text-2xl font-bold text-[#0075BE]">Unsecured Loan Relief</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  Personal loans are unsecured, meaning there is no collateral. However, SCB can still take legal action to recover the money.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h4 className="font-bold text-lg mb-3">Our Approach:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-blue-600" /> <strong>Hardship Proof:</strong> We present evidence of your financial distress (job loss, medical emergency).</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-blue-600" /> <strong>Negotiation:</strong> We push for a settlement that is affordable for you, often saving 30-50% of the outstanding.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-blue-600" /> <strong>Closure:</strong> We ensure the loan is officially closed and you receive a No Dues Certificate.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Actions by Standard Chartered</h2>
              <p className="text-gray-700 mb-8 text-lg">
                As an international bank, SCB has a robust legal department. They do not hesitate to use legal tools to recover dues.
              </p>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#009F3D]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaGavel className="text-[#009F3D]" /> Arbitration Proceedings
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Most SCB loan agreements include an arbitration clause. This allows the bank to appoint an arbitrator to settle the dispute.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-4">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-[#009F3D] rounded-full"></div> <strong>The Risk:</strong> If you ignore the arbitration notice, an "Ex-Parte Award" will be passed against you. This award has the same power as a court decree and can be executed to attach your assets or bank accounts.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-[#009F3D] rounded-full"></div> <strong>Our Defense:</strong> We represent you in the arbitration tribunal. We challenge the appointment of the arbitrator (often biased) and dispute the inflated claim amount, forcing the bank to negotiate.</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaExclamationTriangle className="text-red-600" /> Section 138 & Section 25
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have issued cheques or set up an ECS/NACH mandate for repayment, and it bounces due to insufficient funds, SCB can file a criminal case.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-red-600 rounded-full"></div> <strong>Criminal Offense:</strong> Under Section 138 of the NI Act and Section 25 of the PASSA, this is a criminal offense punishable by imprisonment and fines.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-red-600 rounded-full"></div> <strong>Our Strategy:</strong> We handle the legal response to these notices. We appear in court if necessary to recall warrants and use the pendency of the case to pressure the bank into an out-of-court settlement.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Harassment */}
            <section id="harassment" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Stopping Harassment</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Recovery agents from SCB or their third-party agencies can be persistent. They may call you repeatedly, visit your home, or contact your references.
                  </p>
                  <p className="text-gray-700">
                    <strong>Your Rights:</strong> Under RBI guidelines, you cannot be harassed. Agents cannot use abusive language or call at odd hours.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <FaShieldAlt className="text-5xl text-[#009F3D] mb-4" />
                  <h3 className="font-bold text-lg mb-4">Legal Shield</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Once you engage AMA Legal Solutions, we send a legal notice of representation to the bank. This directs all future communication to us, effectively stopping the direct harassment from agents.
                  </p>
                </div>
              </div>
            </section>

            {/* OTS Process */}
            <section id="ots-process" className="mb-16 scroll-mt-32">
              <div className="bg-[#0075BE] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#A5D6A7]">One Time Settlement (OTS) Explained</h2>
                <p className="text-lg text-white/90 mb-8">
                  OTS is a legal agreement where Standard Chartered agrees to accept a reduced amount to close the loan account permanently.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Benefits</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#A5D6A7]" /> Complete waiver of future interest.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#A5D6A7]" /> Stop all legal actions immediately.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#A5D6A7]" /> Mental peace and financial freedom.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#A5D6A7]" /> Official closure of the account.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Our Role</h3>
                    <p className="text-white/90 leading-relaxed">
                      We handle the entire negotiation process. We leverage our knowledge of banking laws and SCB's internal policies to get you the best possible discount. We ensure the settlement terms are clear and documented.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Hire Us */}
            <section id="why-hire-us" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaGlobe className="text-4xl text-[#009F3D] mb-4" />
                  <h3 className="text-xl font-bold mb-3">International Bank Expertise</h3>
                  <p className="text-gray-600">We understand the specific compliance requirements of foreign banks like SCB.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaMoneyBillWave className="text-4xl text-[#009F3D] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Proven Savings</h3>
                  <p className="text-gray-600">We consistently achieve 30-50% waivers for our clients.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaGavel className="text-4xl text-[#009F3D] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Defense</h3>
                  <p className="text-gray-600">We protect you from arbitration awards and criminal complaints.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section id="process-steps" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Roadmap</h2>
              <div className="relative border-l-4 border-[#009F3D] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "Step 1: Case Evaluation", 
                    desc: "We review your Standard Chartered loan/card statements, identifying the principal amount versus the inflated interest and penalty charges." 
                  },
                  { 
                    title: "Step 2: Legal Representation Notice", 
                    desc: "We send a formal legal notice to SCB, informing them that AMA Legal Solutions represents you. This legally mandates them to route all communication through us." 
                  },
                  { 
                    title: "Step 3: Stopping Harassment", 
                    desc: "If recovery agents continue to harass you, we escalate the matter to the bank's Nodal Officer and the Banking Ombudsman, citing RBI violations." 
                  },
                  { 
                    title: "Step 4: Strategic Negotiation", 
                    desc: "We negotiate with the bank's central settlement team. We present your financial hardship and push for a waiver of all interest and penalties, aiming to settle near the principal." 
                  },
                  { 
                    title: "Step 5: Settlement Letter Verification", 
                    desc: "We ensure SCB issues a formal Settlement Letter on their official letterhead. We verify all terms, including the settlement amount, payment deadline, and closure clause." 
                  },
                  { 
                    title: "Step 6: Payment & NDC", 
                    desc: "You pay the settlement amount directly to Standard Chartered. We then track the closure of your loan account and ensure you receive the No Dues Certificate (NDC)." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#009F3D] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Rights */}
            <section id="rbi-rights" className="mb-16 scroll-mt-32">
              <div className="bg-[#E8F5E9] p-8 rounded-2xl border border-[#C8E6C9]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#009F3D]" />
                  <h2 className="text-2xl font-bold text-[#009F3D]">RBI Guidelines</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  You are protected by RBI's Fair Practices Code:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#009F3D] rounded-full"></div> <strong>Respect:</strong> Right to be treated with dignity by agents.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#009F3D] rounded-full"></div> <strong>Privacy:</strong> Right to privacy of your data.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#009F3D] rounded-full"></div> <strong>Notice:</strong> Right to receive notice before legal action.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#009F3D] rounded-full"></div> <strong>Grievance:</strong> Right to approach the Banking Ombudsman.</li>
                </ul>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-score" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Settlement will result in a "Settled" status on your credit report. This indicates that the loan was not paid in full.
                  </p>
                  <p className="text-gray-700 mb-4">
                    While this lowers your score temporarily, it is far better than a "Written Off" status. It stops the monthly reporting of "Overdue" status.
                  </p>
                  <p className="text-gray-700">
                    You can rebuild your score over 12-24 months by using a secured credit card and paying bills on time.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Rebuilding Strategy</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Close the loan and get NDC.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Apply for a secured credit card.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Maintain low credit utilization.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Monitor your CIBIL report regularly.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-16 scroll-mt-32">
              <div className="bg-[#263238] text-white rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Loan/Card Account Number</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Latest Statement</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Legal Notices (if any)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Proof of Financial Hardship</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Employment/Business Proof</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Real Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#009F3D]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#009F3D] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Settled Credit Card</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Saved ₹2.5 Lakhs on Interest</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I had a Standard Chartered Ultimate card with a limit of ₹5 Lakhs. Due to a medical emergency, I maxed it out. The interest piled up, and the total due became ₹8.5 Lakhs! AMA Legal Solutions intervened and negotiated a settlement for ₹3.5 Lakhs. They saved me from a debt trap."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">A</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Anil Mehta</h4>
                      <p className="text-xs text-gray-500">IT Professional, Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#009F3D]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#009F3D] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Personal Loan OTS</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Legal Notice Handled</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I received a Section 138 notice from SCB for a bounced cheque on my personal loan. I was terrified of going to court. AMA Legal Solutions replied to the notice and represented me. They convinced the bank to settle the matter out of court. I paid the settlement amount and the case was withdrawn."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">S</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sneha Kapoor</h4>
                      <p className="text-xs text-gray-500">Marketing Executive, Delhi</p>
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
        <section className="bg-[#009F3D] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Resolve Your Standard Chartered Debt</h2>
            <p className="text-white/90 text-lg mb-10">
              Expert legal help to settle your loans and regain financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#009F3D] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#009F3D] transition-all text-lg flex items-center justify-center gap-2">
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

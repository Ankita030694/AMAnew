import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaGavel, FaGem, FaBriefcase } from "react-icons/fa";
import { MdRealEstateAgent, MdMoneyOff } from "react-icons/md";

// Metadata
export const metadata = {
  title: "South Indian Bank Loan Settlement | Gold & Personal Loan OTS | AMA Legal",
  description: "Struggling with South Indian Bank loan repayment? Expert legal help for settling Gold Loans, Personal Loans, and Business Loans. Stop auction and harassment.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/south-indian-bank',
  },
  openGraph: {
    title: "South Indian Bank Loan Settlement | Gold & Personal Loan OTS | AMA Legal",
    description: "Struggling with South Indian Bank loan repayment? Expert legal help for settling Gold Loans, Personal Loans, and Business Loans. Stop auction and harassment.",
    url: "https://amalegalsolutions.com/services/loan-settlement/south-indian-bank",
    type: "website",
    images: [
      {
        url: "/services/9.png",
        width: 1200,
        height: 630,
        alt: "South Indian Bank Loan Settlement Services",
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
      "name": "South Indian Bank Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/south-indian-bank"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "South Indian Bank Loan Settlement: A Complete Guide to OTS",
  "description": "Learn how to settle your South Indian Bank gold, personal, or business loan through the One Time Settlement (OTS) scheme. Expert legal advice to stop auctions and legal action.",
  "image": "https://amalegalsolutions.com/services/9.png",
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
  "name": "South Indian Bank Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/9.png",
  "description": "Legal settlement services for South Indian Bank loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "134"
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
        "name": "Mathew Thomas"
      },
      "reviewBody": "My gold loan was in default and they were about to auction my family jewelry. AMA Legal intervened and helped me settle the loan and release my gold. Forever grateful."
    }
  ]
};

export default function SouthIndianBankLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About South Indian Bank" },
    { id: "gold-loans", title: "Gold Loan Settlement" },
    { id: "personal-loans", title: "Personal Loan Settlement" },
    { id: "business-loans", title: "Business Loan Settlement" },
    { id: "legal-actions", title: "Legal Actions (SARFAESI/138)" },
    { id: "ots-scheme", title: "One Time Settlement (OTS)" },
    { id: "why-legal-help", title: "Why You Need a Lawyer" },
    { id: "process", title: "Our Settlement Process" },
    { id: "rbi-guidelines", title: "RBI Guidelines & Rights" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "documents", title: "Required Documents" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "South Indian Bank", href: "/services/loan-settlement/south-indian-bank" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#D32F2F] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B71C1C] to-[#D32F2F] opacity-90"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFC107] opacity-10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Gold & Business Loan Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#FFC107]">South Indian Bank</span> Loan Legally
                </h1>
                <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                  Facing gold auction or legal notices? We specialize in negotiating One Time Settlements (OTS) for South Indian Bank loans. Protect your assets and peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-white text-[#D32F2F] font-bold rounded-lg transition-all shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1">
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
                    <FaShieldAlt className="text-4xl text-[#FFC107]" />
                    <div>
                      <h3 className="font-bold text-xl">Asset Protection</h3>
                      <p className="text-sm text-white/70">Stop Auctions & Seizures</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Gold Loans</span>
                      <span className="bg-yellow-500/20 text-yellow-100 px-2 py-1 rounded text-xs">Auction Stay</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Personal Loans</span>
                      <span className="bg-yellow-500/20 text-yellow-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Business Loans</span>
                      <span className="bg-yellow-500/20 text-yellow-100 px-2 py-1 rounded text-xs">OTS Expert</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About South Indian Bank (SIB)</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#D32F2F] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>South Indian Bank (SIB)</strong> is one of the oldest private sector banks in India, headquartered in Thrissur, Kerala. It has a significant presence across the country, known for its personalized service and strong focus on retail and MSME lending.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SIB is particularly aggressive in the <strong>Gold Loan</strong> segment and loans to small businesses. While they are customer-friendly during lending, their recovery process for Non-Performing Assets (NPAs) can be strict. They utilize the SARFAESI Act effectively for secured loans and have a robust legal team for pursuing unsecured defaults.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have defaulted on a loan with South Indian Bank, you might be facing pressure from recovery agents or receiving legal notices. It is crucial to understand that you have rights. <strong>AMA Legal Solutions</strong> can help you navigate this difficult time, stop the harassment, and negotiate a dignified settlement.
              </p>
            </section>

            {/* Gold Loans */}
            <section id="gold-loans" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaGem className="text-4xl text-[#FFC107]" />
                <h2 className="text-3xl font-bold text-gray-900">Gold Loan Settlement</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Gold loans are a popular product of South Indian Bank. However, defaulting on them carries a high emotional and financial risk because the collateral is often family jewelry.
              </p>
              <div className="bg-[#FFF8E1] p-8 rounded-2xl border border-[#FFECB3]">
                <h3 className="text-xl font-bold text-[#D32F2F] mb-4">The Auction Risk</h3>
                <p className="text-gray-800 mb-4">
                  Unlike housing loans which take time to foreclose, gold can be auctioned relatively quickly by the bank after giving notice.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg mb-3">How We Protect Your Gold:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Stop Auction:</strong> We intervene legally to halt the auction process, giving you time to arrange funds.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Waiver of Penal Interest:</strong> Gold loans often accrue high penal interest. We negotiate to waive this off.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Release of Ornaments:</strong> We ensure that once the agreed settlement amount is paid, your jewelry is returned safely without any damage.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Personal Loans */}
            <section id="personal-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Loan Settlement</h2>
              <p className="text-lg text-gray-700 mb-6">
                SIB Personal Loans are unsecured. If you have lost your job or faced a medical crisis, paying high EMIs can be impossible.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#D32F2F] transition-colors">
                  <FaHandHoldingUsd className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Settlement Opportunity</h3>
                  <p className="text-gray-600">
                    Since there is no collateral, the bank is often willing to settle for a reduced amount (Principal + small interest or even less) to close the NPA account.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#D32F2F] transition-colors">
                  <FaBalanceScale className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Legal Defense</h3>
                  <p className="text-gray-600">
                    We defend you against arbitration or civil suits filed by the bank, ensuring that you are not forced to pay more than you can afford.
                  </p>
                </div>
              </div>
            </section>

            {/* Business Loans */}
            <section id="business-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business & MSME Loan Settlement</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <p className="text-lg text-gray-700 mb-6">
                    Many small businesses rely on SIB for working capital (OD/CC limits) and term loans. A business downturn can lead to default.
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Our Approach:</strong> We analyze your business financials to prove genuine hardship. We then negotiate a restructuring plan or a One Time Settlement (OTS) that allows you to clear the debt without liquidating your business assets.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-50 p-8 rounded-2xl text-center border border-gray-200">
                  <FaBriefcase className="text-6xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Save Your Business</h3>
                  <p className="text-gray-600">Don't let debt shut you down. Settle and restart.</p>
                </div>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Actions by South Indian Bank</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaGavel className="text-[#D32F2F]" /> SARFAESI Act (For Secured Loans)
                  </h3>
                  <p className="text-gray-700">
                    For loans against property or gold, SIB can invoke the SARFAESI Act. This allows them to seize and auction your asset without court intervention. We can challenge these proceedings in the DRT (Debt Recovery Tribunal).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaExclamationTriangle className="text-[#D32F2F]" /> Section 138 (Cheque Bounce)
                  </h3>
                  <p className="text-gray-700">
                    If your repayment cheques bounce, the bank can file a criminal case. This is a pressure tactic. We represent you in court, get bail if needed, and push for an out-of-court settlement to quash the case.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaUserTie className="text-[#D32F2F]" /> Arbitration
                  </h3>
                  <p className="text-gray-700">
                    For unsecured loans, arbitration is common. The bank appoints an arbitrator to pass an award. We ensure your side of the story (financial hardship) is heard and used to lower the settlement amount.
                  </p>
                </div>
              </div>
            </section>

            {/* OTS Scheme */}
            <section id="ots-scheme" className="mb-16 scroll-mt-32">
              <div className="bg-[#D32F2F] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#FFC107]">One Time Settlement (OTS) Explained</h2>
                <p className="text-lg text-white/90 mb-8">
                  OTS is the most effective way to exit a debt trap. South Indian Bank agrees to accept a lump sum amount (usually lower than the total due) to close the loan permanently.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">How It Works</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> We submit a proposal based on your affordability.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> The proposal goes to the Regional/Zonal office.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> Negotiations happen on the waiver amount.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> You pay the agreed amount and get an NDC.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Benefits</h3>
                    <p className="text-white/90 leading-relaxed">
                      You save money on interest and penalties. All legal cases are withdrawn. You get peace of mind and can start rebuilding your financial life immediately.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Legal Help */}
            <section id="why-legal-help" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why You Need AMA Legal Solutions</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaShieldAlt className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Stop Harassment</h3>
                  <p className="text-gray-600">We take over all communication with recovery agents. They stop calling you once they know a lawyer is involved.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaMoneyBillWave className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Maximize Savings</h3>
                  <p className="text-gray-600">Our negotiation strategies often result in 40-60% savings on the total outstanding amount for unsecured loans.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaBook className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Safety</h3>
                  <p className="text-gray-600">We ensure the settlement letter is legally watertight, preventing the bank from claiming dues in the future.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section id="process" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Step-by-Step Process</h2>
              <div className="relative border-l-4 border-[#D32F2F] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "1. Case Evaluation", 
                    desc: "We review your loan documents and financial status to determine the best strategy." 
                  },
                  { 
                    title: "2. Legal Notice Reply", 
                    desc: "If you have received any notices, we reply to them legally to buy time and set the stage for settlement." 
                  },
                  { 
                    title: "3. Proposal & Negotiation", 
                    desc: "We submit a strong OTS proposal and negotiate hard with the bank officials." 
                  },
                  { 
                    title: "4. Settlement Approval", 
                    desc: "We get the official settlement letter from the bank detailing the final amount and payment terms." 
                  },
                  { 
                    title: "5. Closure & NDC", 
                    desc: "After you make the payment, we ensure you receive the No Dues Certificate and your documents/gold are returned." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#D32F2F] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Guidelines */}
            <section id="rbi-guidelines" className="mb-16 scroll-mt-32">
              <div className="bg-[#FFF8E1] p-8 rounded-2xl border border-[#FFECB3]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#FF6F00]" />
                  <h2 className="text-2xl font-bold text-[#FF6F00]">RBI Guidelines on Recovery</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  You are protected by RBI's Fair Practices Code. Recovery agents cannot:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> Call before 8 AM or after 7 PM.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> Use threatening or abusive language.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> Contact your employer or neighbors without cause.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> Enter your home without permission.</li>
                </ul>
                <p className="mt-6 text-sm text-gray-600 italic">
                  If these rules are broken, we can file a complaint with the Banking Ombudsman.
                </p>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-impact" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Settlement will mark your account as "Settled" in CIBIL. This lowers your score temporarily.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>But consider this:</strong> A "Settled" account is closed. A "Default" or "Written Off" account stays open and hurts your score every single month. Settlement stops the bleeding.
                  </p>
                  <p className="text-gray-700">
                    You can rebuild your score to 750+ within 12-18 months by using a secured credit card and paying bills on time.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Rebuilding Steps</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Obtain NDC from South Indian Bank.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Check CIBIL report after 45 days for update.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Take a small secured loan/card.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Maintain 100% payment history.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-16 scroll-mt-32">
              <div className="bg-[#2D2D2D] text-white rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Loan Account Number</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Latest Loan Statement</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Legal Notices (if any)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Proof of Income Loss</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Medical Records (if applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#D32F2F]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#D32F2F] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "My gold loan was in default and they were about to auction my family jewelry. AMA Legal intervened and helped me settle the loan and release my gold. Forever grateful."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">M</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Mathew Thomas</h4>
                      <p className="text-xs text-gray-500">Business Owner, Kochi</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#D32F2F]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#D32F2F] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I had a personal loan with SIB. After losing my job, I couldn't pay. The harassment was unbearable. AMA Legal handled everything and settled the loan for 40% of the amount."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">S</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Suresh Kumar</h4>
                      <p className="text-xs text-gray-500">IT Professional, Bangalore</p>
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
        <section className="bg-[#D32F2F] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Resolve Your South Indian Bank Loan</h2>
            <p className="text-white/90 text-lg mb-10">
              Expert legal help to stop auctions and settle debts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#D32F2F] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#D32F2F] transition-all text-lg flex items-center justify-center gap-2">
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

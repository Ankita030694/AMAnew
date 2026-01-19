import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaMotorcycle, FaTractor, FaHome, FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaGavel, FaUsers } from "react-icons/fa";
import { MdAgriculture, MdMoneyOff } from "react-icons/md";

// Metadata
export const metadata = {
  title: "L&T Finance Loan Settlement | Two-Wheeler & Tractor Loan OTS | AMA Legal Solutions",
  description: "Unable to repay L&T Finance loan? Expert legal help for settling Two-Wheeler, Tractor, and Microfinance loans. Stop repossession and legal action.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/l-and-t-finance',
  },
  openGraph: {
    title: "L&T Finance Loan Settlement | Two-Wheeler & Tractor Loan OTS | AMA Legal Solutions",
    description: "Unable to repay L&T Finance loan? Expert legal help for settling Two-Wheeler, Tractor, and Microfinance loans. Stop repossession and legal action.",
    url: "https://amalegalsolutions.com/services/loan-settlement/l-and-t-finance",
    type: "website",
    images: [
      {
        url: "/services/12.png",
        width: 1200,
        height: 630,
        alt: "L&T Finance Loan Settlement Services",
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
      "name": "L&T Finance Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/l-and-t-finance"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "L&T Finance Loan Settlement: Guide to Two-Wheeler & Farm Loan OTS",
  "description": "Comprehensive guide on how to settle L&T Finance loans. Learn about the One Time Settlement (OTS) process for vehicle and microfinance loans.",
  "image": "https://amalegalsolutions.com/services/12.png",
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
  "name": "L&T Finance Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/12.png",
  "description": "Legal settlement services for L&T Finance loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "167"
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
        "name": "Ramesh Kumar"
      },
      "reviewBody": "My tractor loan was in default due to bad harvest. L&T agents were threatening to seize it. AMA Legal Solutions helped me restructure the loan and stop the seizure. Very helpful for farmers."
    }
  ]
};

export default function LandTFinanceLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About L&T Finance" },
    { id: "two-wheeler-loans", title: "Two-Wheeler Settlement" },
    { id: "farm-loans", title: "Tractor/Farm Loans" },
    { id: "micro-loans", title: "Microfinance Loans" },
    { id: "legal-actions", title: "Legal Actions (Arbitration)" },
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
    { label: "L&T Finance", href: "/services/loan-settlement/l-and-t-finance" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#0277BD] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#01579B] to-[#0277BD] opacity-90"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FFC107] opacity-10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Vehicle & Rural Finance Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#FFC107]">L&T Finance</span> Loan Legally
                </h1>
                <p className="text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl">
                  Facing repossession of your Two-Wheeler or Tractor? Struggling with Microfinance dues? We help you negotiate a One Time Settlement (OTS) and stop harassment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-[#FFC107] text-[#01579B] font-bold rounded-lg transition-all shadow-lg hover:bg-white hover:shadow-xl transform hover:-translate-y-1">
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
                      <p className="text-sm text-gray-300">Stop Vehicle Seizure</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Two-Wheeler Loans</span>
                      <span className="bg-blue-500/20 text-blue-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tractor Loans</span>
                      <span className="bg-blue-500/20 text-blue-100 px-2 py-1 rounded text-xs">Restructuring</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Micro Loans</span>
                      <span className="bg-blue-500/20 text-blue-100 px-2 py-1 rounded text-xs">OTS Available</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About L&T Finance</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#0277BD] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>L&T Finance Holdings Ltd</strong> is a leading Non-Banking Financial Company (NBFC) in India. It has a massive presence in rural and semi-urban areas, specializing in <strong>Two-Wheeler Loans</strong>, <strong>Farm Equipment (Tractor) Loans</strong>, and <strong>Microfinance</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  While they empower many to buy vehicles and equipment, their recovery process for defaulters is known to be stringent. They often employ third-party agencies for vehicle repossession and initiate arbitration proceedings quickly.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are facing financial distress and cannot pay your EMIs, <strong>AMA Legal Solutions</strong> can help you protect your assets and negotiate a dignified settlement with L&T Finance.
              </p>
            </section>

            {/* Two Wheeler Loans */}
            <section id="two-wheeler-loans" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaMotorcycle className="text-4xl text-[#0277BD]" />
                <h2 className="text-3xl font-bold text-gray-900">Two-Wheeler Loan Settlement</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Two-wheeler loans are secured loans. The biggest risk here is the seizure of your bike or scooter by recovery agents.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Stop Repossession</h3>
                  <p className="text-gray-600">
                    Agents cannot seize your vehicle by force. They must follow legal procedure. We intervene to stop illegal seizure and buy you time to arrange funds or settle.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Settlement Options</h3>
                  <p className="text-gray-600">
                    If the vehicle value has depreciated significantly, the bank may agree to a settlement amount that is close to the current market value of the vehicle, waiving off the remaining dues.
                  </p>
                </div>
              </div>
            </section>

            {/* Farm Loans */}
            <section id="farm-loans" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaTractor className="text-4xl text-[#0277BD]" />
                <h2 className="text-3xl font-bold text-gray-900">Tractor & Farm Equipment Loans</h2>
              </div>
              <div className="bg-[#FFF8E1] p-8 rounded-2xl border border-[#FFECB3]">
                <div className="flex items-center gap-3 mb-6">
                  <MdAgriculture className="text-3xl text-[#FF6F00]" />
                  <h3 className="text-2xl font-bold text-[#FF6F00]">Support for Farmers</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  Farmers often face default due to crop failure or monsoon issues. L&T Finance understands this but still follows process.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h4 className="font-bold text-lg mb-3">How We Help:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Restructuring:</strong> We can negotiate to increase the loan tenure and reduce EMI amount.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Moratorium:</strong> In cases of natural calamity, we can request a temporary pause on EMIs.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>OTS:</strong> If you want to close the loan, we negotiate a one-time payment with waiver of penal interest.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Micro Loans */}
            <section id="micro-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Microfinance (JLG) Loan Settlement</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <p className="text-lg text-gray-700 mb-6">
                    Microfinance loans are often given to Joint Liability Groups (JLGs). If one member defaults, the group is pressured.
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Our Approach:</strong> We help individual borrowers settle their portion of the debt without being harassed for the group's liability, especially in cases of genuine personal hardship like health issues or loss of livelihood.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-50 p-8 rounded-2xl text-center border border-gray-200">
                  <FaUsers className="text-6xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Group Liability Issues?</h3>
                  <p className="text-gray-600">We resolve individual liability in group loans.</p>
                </div>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Actions by L&T Finance</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaGavel className="text-[#0277BD]" /> Arbitration Proceedings
                  </h3>
                  <p className="text-gray-700">
                    L&T Finance is very active in using arbitration. They appoint an arbitrator to pass an award for the full claim amount. This award is enforceable as a court decree. We represent you in these proceedings to challenge the claim and push for a settlement.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaExclamationTriangle className="text-[#0277BD]" /> Section 138 (Cheque Bounce)
                  </h3>
                  <p className="text-gray-700">
                    Criminal cases for cheque bounce are common. If you receive a summons, you must appear in court. We provide legal representation to handle the bail process and negotiate an out-of-court settlement to quash the case.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaUserTie className="text-[#0277BD]" /> Repossession Agents
                  </h3>
                  <p className="text-gray-700">
                    For vehicle loans, agents are sent to seize the asset. We ensure they follow the law (giving notice, inventory list, etc.) and protect your rights against forceful seizure.
                  </p>
                </div>
              </div>
            </section>

            {/* OTS Process */}
            <section id="ots-process" className="mb-16 scroll-mt-32">
              <div className="bg-[#01579B] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#FFC107]">One Time Settlement (OTS) Solution</h2>
                <p className="text-lg text-white/90 mb-8">
                  OTS is the most effective way to close your loan if you cannot pay the full amount. L&T Finance accepts a reduced payment to close the account.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">How It Works</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> We assess your ability to pay.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> We submit a proposal to the Regional Office.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> We negotiate for maximum waiver.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> You get a formal settlement letter.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Benefits</h3>
                    <p className="text-white/90 leading-relaxed">
                      You save significantly on interest and penalties. The vehicle is released (if seized) or the lien is removed. Legal cases are withdrawn.
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
                  <FaShieldAlt className="text-4xl text-[#0277BD] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Asset Protection</h3>
                  <p className="text-gray-600">We prioritize saving your vehicle or property from seizure.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaMoneyBillWave className="text-4xl text-[#0277BD] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Expert Negotiation</h3>
                  <p className="text-gray-600">We know the internal hierarchy of L&T Finance and who to approach for approvals.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaBook className="text-4xl text-[#0277BD] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Defense</h3>
                  <p className="text-gray-600">We handle arbitration and court cases so you don't have to face them alone.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section id="process-steps" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Step-by-Step Process</h2>
              <div className="relative border-l-4 border-[#0277BD] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "1. Consultation", 
                    desc: "We understand your loan type (Secured/Unsecured) and default status." 
                  },
                  { 
                    title: "2. Stop Harassment", 
                    desc: "We legally intervene to stop agents from harassing you or seizing your vehicle illegally." 
                  },
                  { 
                    title: "3. Proposal Submission", 
                    desc: "We submit a structured settlement proposal to L&T Finance." 
                  },
                  { 
                    title: "4. Negotiation", 
                    desc: "We negotiate with the bank officials for the best possible settlement amount." 
                  },
                  { 
                    title: "5. Closure", 
                    desc: "You pay the settlement amount, and we ensure the loan is closed and NOC is issued." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#0277BD] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Rights */}
            <section id="rbi-rights" className="mb-16 scroll-mt-32">
              <div className="bg-[#E3F2FD] p-8 rounded-2xl border border-[#BBDEFB]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#0277BD]" />
                  <h2 className="text-2xl font-bold text-[#0277BD]">RBI Guidelines on Repossession</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  For vehicle loans, the RBI has strict guidelines:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#0277BD] rounded-full"></div> <strong>Notice:</strong> Bank must give notice before repossession.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#0277BD] rounded-full"></div> <strong>Inventory:</strong> A list of items in the vehicle must be made.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#0277BD] rounded-full"></div> <strong>Chance to Pay:</strong> You must be given a chance to pay dues before sale.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#0277BD] rounded-full"></div> <strong>Fair Value:</strong> The vehicle must be sold at a fair market price.</li>
                </ul>
                <p className="mt-6 text-sm text-gray-600 italic">
                  If your vehicle was seized forcefully without notice, we can take legal action to get it back.
                </p>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-score" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Settlement will mark your account as "Settled" in CIBIL. This lowers your score.
                  </p>
                  <p className="text-gray-700 mb-4">
                    However, it is a necessary step to stop the debt from growing and to avoid legal complications.
                  </p>
                  <p className="text-gray-700">
                    You can rebuild your score to 750+ within 18-24 months by demonstrating good financial behavior on new, small secured loans.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Rebuilding Steps</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Obtain NOC/NDC from L&T Finance.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Check CIBIL report for status update.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Take a secured credit card.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Pay all future bills on time.</li>
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
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Loan Account Number</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Vehicle Registration (RC) Copy</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Legal Notices (if any)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Proof of Income Loss / Crop Loss</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Medical Records (if applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#0277BD]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#0277BD] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "My tractor loan was in default due to bad harvest. L&T agents were threatening to seize it. AMA Legal Solutions helped me restructure the loan and stop the seizure. Very helpful for farmers."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">R</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Ramesh Kumar</h4>
                      <p className="text-xs text-gray-500">Farmer, Punjab</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#0277BD]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#0277BD] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I had a two-wheeler loan and lost my job. I couldn't pay the EMIs. AMA Legal Solutions negotiated a settlement for me, and I paid a lump sum to close the loan. The bike is safe with me."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">A</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Amit Singh</h4>
                      <p className="text-xs text-gray-500">Delivery Partner, Delhi</p>
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
        <section className="bg-[#0277BD] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Solve Your L&T Finance Loan Issues</h2>
            <p className="text-white/90 text-lg mb-10">
              Expert legal help to protect your assets and settle debts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#0277BD] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0277BD] transition-all text-lg flex items-center justify-center gap-2">
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

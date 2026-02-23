import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaBuilding, FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaGavel, FaBriefcase } from "react-icons/fa";
import { MdBusinessCenter, MdMoneyOff } from "react-icons/md";

// Metadata
export const metadata = {
  title: "Vivriti Capital Loan Settlement | SME & Personal Loan OTS | AMA Legal Solutions",
  description: "Struggling with Vivriti Capital loan repayment? Expert legal help for settling business loans and personal loans. Stop arbitration and legal action.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/vivriti-capital',
  },
  openGraph: {
    title: "Vivriti Capital Loan Settlement | SME & Personal Loan OTS | AMA Legal Solutions",
    description: "Struggling with Vivriti Capital loan repayment? Expert legal help for settling business loans and personal loans. Stop arbitration and legal action.",
    url: "https://amalegalsolutions.com/services/loan-settlement/vivriti-capital",
    type: "website",
    images: [
      {
        url: "/services/17.png",
        width: 1200,
        height: 630,
        alt: "Vivriti Capital Loan Settlement Services",
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
      "name": "Vivriti Capital Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/vivriti-capital"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Vivriti Capital Loan Settlement: Guide to NBFC OTS",
  "description": "Comprehensive guide on how to settle Vivriti Capital personal and business loans. Learn about the One Time Settlement (OTS) process, arbitration defense, and debt restructuring.",
  "image": "https://amalegalsolutions.com/services/17.png",
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
  "name": "Vivriti Capital Settlement Services",
  "image": "https://amalegalsolutions.com/services/17.png",
  "description": "Legal settlement services for Vivriti Capital loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156"
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
        "name": "Ramesh Iyer"
      },
      "reviewBody": "My small business took a hit, and I couldn't pay my Vivriti loan. AMA Legal Solutions helped me restructure the debt and eventually settle it. Professional and effective."
    }
  ]
};

export default function VivritiCapitalSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About Vivriti Capital" },
    { id: "loan-types", title: "Loan Types & Challenges" },
    { id: "legal-actions", title: "Legal Actions (Arbitration)" },
    { id: "sme-loans", title: "SME & Business Loans" },
    { id: "ots-process", title: "One Time Settlement (OTS)" },
    { id: "why-hire-us", title: "Why Hire AMA Legal Solutions?" },
    { id: "process-steps", title: "Our Settlement Process" },
    { id: "rbi-rights", title: "Your Rights (RBI)" },
    { id: "cibil-score", title: "Credit Score Impact" },
    { id: "documents", title: "Required Documents" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Vivriti Capital", href: "/services/loan-settlement/vivriti-capital" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#1A237E] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#283593] to-[#1A237E] opacity-90"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  NBFC Debt Resolution
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#C5CAE9]">Vivriti Capital</span> Loan Legally
                </h1>
                <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                  Facing legal notices for personal or business loans from Vivriti Capital? We specialize in negotiating One Time Settlements (OTS) and restructuring debt for SMEs and individuals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-[#C5CAE9] text-[#1A237E] font-bold rounded-lg transition-all shadow-lg hover:bg-white hover:shadow-xl transform hover:-translate-y-1">
                    Consult an Expert
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-transparent border-2 border-[#C5CAE9] text-[#C5CAE9] hover:bg-[#C5CAE9] hover:text-[#1A237E] font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <FaPhoneAlt /> +91-8700343611
                  </a>
                </div>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                    <FaBuilding className="text-4xl text-[#C5CAE9]" />
                    <div>
                      <h3 className="font-bold text-xl">Corporate & Retail Debt</h3>
                      <p className="text-sm text-gray-300">Comprehensive Solutions</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Personal Loans</span>
                      <span className="bg-indigo-500/20 text-indigo-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SME Loans</span>
                      <span className="bg-indigo-500/20 text-indigo-100 px-2 py-1 rounded text-xs">Restructuring</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Arbitration</span>
                      <span className="bg-indigo-500/20 text-indigo-100 px-2 py-1 rounded text-xs">Legal Defense</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Vivriti Capital</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#1A237E] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Vivriti Capital</strong> is a "Systemically Important Non-Deposit Taking NBFC" registered with the RBI. Unlike smaller digital lenders, Vivriti is a major institutional player that provides debt capital to mid-market enterprises and also powers various fintech lending apps.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Because of its institutional nature, Vivriti Capital follows a highly structured and rigorous recovery process. Whether you have taken a direct business loan or a personal loan through one of their partner apps, they have a dedicated legal team to enforce repayment. This often involves swift initiation of arbitration proceedings and criminal complaints for cheque bounces.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>AMA Legal Solutions</strong> specializes in handling complex cases with large NBFCs like Vivriti. We understand their provisioning norms and legal strategies, allowing us to negotiate effective <strong>One Time Settlements (OTS)</strong> or debt restructuring plans for our clients.
                </p>
              </div>
            </section>

            {/* Loan Types */}
            <section id="loan-types" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaBriefcase className="text-4xl text-[#1A237E]" />
                <h2 className="text-3xl font-bold text-gray-900">Loan Types & Challenges</h2>
              </div>
              <p className="text-gray-700 mb-8 text-lg">
                Vivriti Capital's diverse portfolio presents different challenges for borrowers. Here is what you need to know:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaUserTie className="text-indigo-600" /> Retail / Personal Loans
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    These are often disbursed via partner fintech apps. Borrowers may not even realize Vivriti is the lender until they receive a legal notice. The interest rates are high (24-36%), and missed payments attract daily penalties. Recovery is often outsourced to aggressive third-party agencies.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MdBusinessCenter className="text-indigo-600" /> SME / Business Loans
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    These are larger ticket loans for working capital or expansion. They are often backed by personal guarantees of directors. Defaulting here is serious—it can lead to <strong>SARFAESI action</strong> (if secured) or insolvency proceedings against the business, putting personal assets at risk.
                  </p>
                </div>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Actions by Vivriti Capital</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Vivriti Capital uses a combination of arbitration and criminal proceedings to recover dues.
              </p>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#1A237E]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaGavel className="text-[#1A237E]" /> Arbitration Proceedings
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Most loan agreements include an arbitration clause. Vivriti can appoint a sole arbitrator to hear the dispute.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-4">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-[#1A237E] rounded-full"></div> <strong>The Risk:</strong> If you ignore the notice, an "Ex-Parte Award" will be passed. This award is legally binding and can be executed in court to attach your bank accounts or assets.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-[#1A237E] rounded-full"></div> <strong>Our Defense:</strong> We represent you in the arbitration tribunal. We challenge the claim amount, dispute the interest calculations, and use the proceedings to negotiate a settlement.</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaExclamationTriangle className="text-red-600" /> Section 138 (Cheque Bounce)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For business loans and personal loans repaid via NACH/Cheques, dishonor of payment is a criminal offense.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-red-600 rounded-full"></div> <strong>Consequences:</strong> Vivriti files complaints under Section 138 of the NI Act. The court issues a summons, and failure to appear can lead to a non-bailable warrant.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-red-600 rounded-full"></div> <strong>Our Strategy:</strong> We handle the legal summons, appear in court on your behalf (where permitted), and negotiate an out-of-court settlement to quash the criminal case.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SME Loans */}
            <section id="sme-loans" className="mb-16 scroll-mt-32">
              <div className="bg-[#E8EAF6] p-8 rounded-2xl border border-[#C5CAE9]">
                <div className="flex items-center gap-3 mb-6">
                  <MdBusinessCenter className="text-3xl text-[#1A237E]" />
                  <h3 className="text-2xl font-bold text-[#1A237E]">SME Debt Resolution</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  For businesses facing a liquidity crunch, straight settlement isn't always the only option.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h4 className="font-bold text-lg mb-3">Our Strategies for SMEs:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-indigo-600" /> <strong>Restructuring:</strong> Negotiating for a longer tenure or lower EMI to match current cash flows.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-indigo-600" /> <strong>One Time Settlement (OTS):</strong> If the business is closing or severely impacted, we negotiate a lump sum exit at a discount.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-indigo-600" /> <strong>Guarantee Protection:</strong> Protecting the personal assets of directors/partners from being attached.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* OTS Process */}
            <section id="ots-process" className="mb-16 scroll-mt-32">
              <div className="bg-[#283593] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#C5CAE9]">One Time Settlement (OTS) Explained</h2>
                <p className="text-lg text-white/90 mb-8">
                  OTS is a formal agreement where Vivriti Capital accepts a reduced amount to close the loan account fully and finally.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Benefits</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#C5CAE9]" /> Complete waiver of future interest.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#C5CAE9]" /> Immediate cessation of legal actions.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#C5CAE9]" /> Clean slate to rebuild financial health.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#C5CAE9]" /> No Dues Certificate issued.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Our Role</h3>
                    <p className="text-white/90 leading-relaxed">
                      We leverage our understanding of NBFC provisioning norms to negotiate the best possible discount. We ensure all terms are documented clearly to prevent future claims.
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
                  <FaBuilding className="text-4xl text-[#1A237E] mb-4" />
                  <h3 className="text-xl font-bold mb-3">NBFC Expertise</h3>
                  <p className="text-gray-600">We understand the specific regulatory environment governing NBFCs like Vivriti.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaHandHoldingUsd className="text-4xl text-[#1A237E] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Negotiation Skills</h3>
                  <p className="text-gray-600">We have a track record of securing favorable settlements for both retail and corporate clients.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaGavel className="text-4xl text-[#1A237E] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Defense</h3>
                  <p className="text-gray-600">We provide robust defense in arbitration and Section 138 cases.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section id="process-steps" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Roadmap</h2>
              <div className="relative border-l-4 border-[#1A237E] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "Step 1: Portfolio Analysis", 
                    desc: "We analyze your loan agreement, repayment history, and outstanding dues to understand the leverage we have for negotiation." 
                  },
                  { 
                    title: "Step 2: Legal Representation", 
                    desc: "We send a formal notice to Vivriti Capital, stating that AMA Legal Solutions represents you. This directs all future legal communication to us." 
                  },
                  { 
                    title: "Step 3: Strategic Proposal", 
                    desc: "Based on your financial capacity, we draft a settlement proposal. For SMEs, this might include restructuring; for individuals, a one-time payment plan." 
                  },
                  { 
                    title: "Step 4: Hard Negotiation", 
                    desc: "We engage with Vivriti's central legal and settlement teams. We push back against inflated penal charges and interest to reach a fair principal-based settlement." 
                  },
                  { 
                    title: "Step 5: Settlement Agreement", 
                    desc: "We ensure the settlement terms are documented in a formal letter from Vivriti Capital, clearly stating the waiver amount and closure conditions." 
                  },
                  { 
                    title: "Step 6: Closure & NDC", 
                    desc: "Once you make the payment, we track the account closure and ensure you receive the No Dues Certificate (NDC) to clear your name." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#1A237E] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Rights */}
            <section id="rbi-rights" className="mb-16 scroll-mt-32">
              <div className="bg-[#E8EAF6] p-8 rounded-2xl border border-[#C5CAE9]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#1A237E]" />
                  <h2 className="text-2xl font-bold text-[#1A237E]">RBI Guidelines</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  As an RBI-registered NBFC, Vivriti Capital must adhere to:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#1A237E] rounded-full"></div> <strong>Fair Practices Code:</strong> Transparent communication and fair treatment.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#1A237E] rounded-full"></div> <strong>Recovery Agents:</strong> Strict rules against harassment and intimidation.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#1A237E] rounded-full"></div> <strong>Notice Period:</strong> Adequate notice before legal action or asset repossession.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#1A237E] rounded-full"></div> <strong>Data Privacy:</strong> Protection of borrower's personal and financial data.</li>
                </ul>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-score" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    <strong>Personal Loans:</strong> Settlement leads to a "Settled" status on CIBIL, lowering the score.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Business Loans:</strong> It affects the Commercial Credit Rank (CMR). This can make future business borrowing harder or more expensive.
                  </p>
                  <p className="text-gray-700">
                    However, resolving the debt is crucial. An open default is far worse than a settled account. You can rebuild creditworthiness over time with disciplined financial behavior.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Recovery Path</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Close the account formally.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Ensure CIBIL is updated correctly.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Maintain healthy cash flows.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Re-establish credit with secured instruments.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-16 scroll-mt-32">
              <div className="bg-[#212121] text-white rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#C5CAE9]" /> Loan Sanction Letter</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#C5CAE9]" /> Statement of Accounts</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#C5CAE9]" /> PAN Card & KYC Docs</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#C5CAE9]" /> Arbitration/Legal Notices</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#C5CAE9]" /> Proof of Business Loss (for SMEs)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#C5CAE9]" /> Bank Statements (Last 6 months)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Real Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1A237E]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#1A237E] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">SME Loan Restructured</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Business Saved from Insolvency</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "My manufacturing business faced a severe cash crunch, and I defaulted on a ₹25 Lakh loan from Vivriti. They sent a legal notice threatening insolvency. AMA Legal Solutions stepped in and negotiated a restructuring plan. They got me a 6-month moratorium and waived the penalty interest. My business is now back on track."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">R</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Ramesh Iyer</h4>
                      <p className="text-xs text-gray-500">SME Owner, Chennai</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1A237E]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#1A237E] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Personal Loan Settled</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Arbitration Case Withdrawn</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I took a personal loan through an app, not realizing it was from Vivriti. When I lost my job, I couldn't pay. They filed for arbitration. AMA Legal Solutions represented me in the hearing and negotiated a settlement. I paid 45% of the total due, and the case was withdrawn."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">P</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya Das</h4>
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
        <section className="bg-[#1A237E] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Resolve Your Vivriti Capital Debt</h2>
            <p className="text-white/90 text-lg mb-10">
              Expert legal guidance for a debt-free future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#1A237E] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#1A237E] transition-all text-lg flex items-center justify-center gap-2">
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
    </>
  );
}

import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCreditCard, FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaGavel, FaMobileAlt, FaUserSecret } from "react-icons/fa";
import { MdCreditScore, MdMoneyOff } from "react-icons/md";

// Metadata
export const metadata = {
  title: "Stashfin Loan Settlement | Credit Line OTS | AMA Legal",
  description: "Struggling with Stashfin (Akara Capital) loan repayment? Expert legal help for settling credit lines and personal loans. Stop harassment and legal notices.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/stashfin',
  },
  openGraph: {
    title: "Stashfin Loan Settlement | Credit Line OTS | AMA Legal",
    description: "Struggling with Stashfin (Akara Capital) loan repayment? Expert legal help for settling credit lines and personal loans. Stop harassment and legal notices.",
    url: "https://amalegalsolutions.com/services/loan-settlement/stashfin",
    type: "website",
    images: [
      {
        url: "/services/11.png",
        width: 1200,
        height: 630,
        alt: "Stashfin Loan Settlement Services",
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
      "name": "Stashfin Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/stashfin"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Stashfin Loan Settlement: Guide to Akara Capital OTS",
  "description": "Comprehensive guide on how to settle Stashfin credit lines and personal loans. Learn about the One Time Settlement (OTS) process and how to stop legal action.",
  "image": "https://amalegalsolutions.com/services/11.png",
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
  "name": "Stashfin Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/11.png",
  "description": "Legal settlement services for Stashfin loans.",
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
        "name": "Vikram Singh"
      },
      "reviewBody": "I was stuck in a debt trap with Stashfin credit line. The interest was piling up. AMA Legal helped me close the loan with a 50% waiver. Very professional team."
    }
  ]
};

export default function StashfinLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About Stashfin" },
    { id: "credit-line-trap", title: "Credit Line Trap" },
    { id: "harassment", title: "Stop Harassment" },
    { id: "legal-actions", title: "Legal Actions (138/Arbitration)" },
    { id: "ots-process", title: "One Time Settlement (OTS)" },
    { id: "why-hire-us", title: "Why Hire AMA Legal?" },
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
    { label: "Stashfin", href: "/services/loan-settlement/stashfin" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#B71C1C] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E53935] to-[#B71C1C] opacity-90"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/circuit-pattern.png')]"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Credit Line & Personal Loan Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#FFCDD2]">Stashfin</span> Debt <br className="hidden md:block" /> & Stop Legal Action
                </h1>
                <p className="text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl">
                  Overwhelmed by Stashfin (Akara Capital) credit line dues? We help you negotiate a legal One Time Settlement (OTS) and protect you from harassment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-white text-[#B71C1C] font-bold rounded-lg transition-all shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1">
                    Get Settlement Advice
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <FaPhoneAlt /> +91-8700343611
                  </a>
                </div>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                    <FaCreditCard className="text-4xl text-[#FFCDD2]" />
                    <div>
                      <h3 className="font-bold text-xl">Credit Line Expert</h3>
                      <p className="text-sm text-gray-300">Resolve High Interest Debt</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Stashfin App</span>
                      <span className="bg-red-500/20 text-red-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Akara Capital</span>
                      <span className="bg-red-500/20 text-red-100 px-2 py-1 rounded text-xs">Legal Defense</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Credit Line</span>
                      <span className="bg-red-500/20 text-red-100 px-2 py-1 rounded text-xs">OTS Available</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview: Stashfin & Akara Capital</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#D32F2F] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Stashfin</strong> is a popular digital lending platform in India, known for offering credit lines and personal loans. The lending partner (NBFC) behind Stashfin is primarily <strong>Akara Capital Advisors Pvt Ltd</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Stashfin provides a credit line card that works like a credit card. While convenient, the interest rates can be extremely high, often exceeding 30-40% annually. Defaulting on these payments can lead to a debt spiral, aggressive collection calls, and legal notices.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are unable to pay your Stashfin dues, <strong>AMA Legal Solutions</strong> can help. We intervene to stop the harassment and negotiate a formal One Time Settlement (OTS) with Akara Capital, allowing you to close the loan for a reduced amount.
              </p>
            </section>

            {/* Credit Line Trap */}
            <section id="credit-line-trap" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <MdCreditScore className="text-4xl text-[#D32F2F]" />
                <h2 className="text-3xl font-bold text-gray-900">The Credit Line Debt Trap</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Unlike a standard personal loan with fixed EMIs, a credit line can be deceptive.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Hidden Charges</h3>
                  <p className="text-gray-600">
                    Users often face processing fees on every withdrawal, high late payment penalties, and interest on the utilized amount that compounds daily.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Minimum Due Trap</h3>
                  <p className="text-gray-600">
                    Paying only the minimum due keeps the account active but barely reduces the principal, keeping you in debt for years.
                  </p>
                </div>
              </div>
            </section>

            {/* Harassment */}
            <section id="harassment" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Stopping Recovery Harassment</h2>
              <div className="bg-[#FFEBEE] p-8 rounded-2xl border border-[#FFCDD2]">
                <div className="flex items-center gap-3 mb-6">
                  <FaUserSecret className="text-3xl text-[#D32F2F]" />
                  <h3 className="text-2xl font-bold text-[#D32F2F]">Know Your Rights</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  Stashfin recovery agents are known to be persistent. However, they must follow RBI guidelines.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h4 className="font-bold text-lg mb-3">Illegal Practices We Stop:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-red-600" /> <strong>Calling Relatives:</strong> Agents cannot call your family or friends to shame you.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-red-600" /> <strong>Abusive Language:</strong> Threats and abuse are strictly prohibited.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-red-600" /> <strong>Fake Legal Notices:</strong> Sending WhatsApp messages that look like court orders is illegal.</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 italic">
                  We send a legal notice to Akara Capital demanding an immediate stop to these tactics and directing all communication to us.
                </p>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Consequences of Default</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaExclamationTriangle className="text-red-600" /> Section 138 (Cheque Bounce)
                  </h3>
                  <p className="text-gray-700">
                    If you have given post-dated cheques or set up an e-mandate (NACH) that bounces, Stashfin can file a criminal case under Section 138 of the NI Act or Section 25 of the PASSA. This is a serious matter requiring legal representation.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaGavel className="text-gray-700" /> Arbitration
                  </h3>
                  <p className="text-gray-700">
                    The loan agreement usually contains an arbitration clause. They may appoint an arbitrator to pass an award for the recovery of dues. We can represent you in these proceedings to contest the claim and seek a settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* OTS Process */}
            <section id="ots-process" className="mb-16 scroll-mt-32">
              <div className="bg-[#212121] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#FFCDD2]">One Time Settlement (OTS) Explained</h2>
                <p className="text-lg text-gray-300 mb-8">
                  OTS is the legal way to exit your Stashfin loan. It involves paying a negotiated lump sum amount to close the account permanently.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Benefits of OTS</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Waiver of accumulated interest and penalties.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Immediate stop to all legal actions.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Closure of the loan account.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Peace of mind.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Our Role</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We analyze your financial situation and present a hardship proposal to Akara Capital. We negotiate aggressively to get you the maximum possible discount, often saving 40-60% of the total outstanding.
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
                  <FaShieldAlt className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Protection</h3>
                  <p className="text-sm text-gray-600">We shield you from aggressive recovery agents and legal threats.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaHandHoldingUsd className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Savings</h3>
                  <p className="text-sm text-gray-600">Our negotiation strategies maximize your savings on the settlement amount.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaBook className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Experience</h3>
                  <p className="text-sm text-gray-600">We have successfully settled hundreds of cases with digital lenders like Stashfin.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaRegCheckCircle className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Closure</h3>
                  <p className="text-sm text-gray-600">We ensure you get a valid No Dues Certificate (NDC) to close the chapter.</p>
                </div>
              </div>
            </section>

            {/* Process Steps */}
            <section id="process-steps" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Process</h2>
              <div className="relative border-l-4 border-[#D32F2F] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "1. Consultation", 
                    desc: "We review your loan details, outstanding amount, and financial hardship proofs." 
                  },
                  { 
                    title: "2. Legal Notice", 
                    desc: "We send a legal notice to Stashfin/Akara Capital informing them of your representation." 
                  },
                  { 
                    title: "3. Negotiation", 
                    desc: "We negotiate with the bank's settlement team for a reduced payoff amount." 
                  },
                  { 
                    title: "4. Agreement", 
                    desc: "We verify the settlement letter to ensuring all terms are favorable and clear." 
                  },
                  { 
                    title: "5. Payment & NDC", 
                    desc: "You make the payment to the official account, and we ensure the loan is closed." 
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

            {/* RBI Rights */}
            <section id="rbi-rights" className="mb-16 scroll-mt-32">
              <div className="bg-[#FFEBEE] p-8 rounded-2xl border border-[#FFCDD2]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#D32F2F]" />
                  <h2 className="text-2xl font-bold text-[#D32F2F]">RBI Guidelines for Digital Lenders</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  The RBI has tightened rules for apps like Stashfin:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#D32F2F] rounded-full"></div> <strong>Data Privacy:</strong> No access to contacts or gallery allowed.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#D32F2F] rounded-full"></div> <strong>Fair Recovery:</strong> No harassment or threats permitted.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#D32F2F] rounded-full"></div> <strong>Transparency:</strong> Key Fact Statement (KFS) is mandatory.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#D32F2F] rounded-full"></div> <strong>Grievance Redressal:</strong> Must have a Nodal Officer to handle complaints.</li>
                </ul>
                <p className="mt-6 text-sm text-gray-600 italic">
                  We use these guidelines to defend your rights and push for a better settlement.
                </p>
              </div>
            </section>

            {/* CIBIL Score */}
            <section id="cibil-score" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Settlement results in a "Settled" status on your credit report. This indicates you paid less than the full amount.
                  </p>
                  <p className="text-gray-700 mb-4">
                    While this lowers your score, it is far better than a "Written Off" status which stays for years. Settlement stops the monthly negative reporting.
                  </p>
                  <p className="text-gray-700">
                    You can rebuild your score by using a secured credit card and maintaining good financial discipline for 12-24 months.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Rebuilding Strategy</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Close the loan and get NDC.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Apply for a Fixed Deposit backed credit card.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Pay bills on time and in full.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Keep credit utilization below 30%.</li>
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
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFCDD2]" /> Loan Account Number / Mobile Number</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFCDD2]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFCDD2]" /> Loan Statement / App Screenshots</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFCDD2]" /> Legal Notices (if received)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFCDD2]" /> Proof of Financial Hardship</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFCDD2]" /> Bank Statements (Last 3 months)</li>
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
                    "I was stuck in a debt trap with Stashfin credit line. The interest was piling up. AMA Legal helped me close the loan with a 50% waiver. Very professional team."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">V</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vikram Singh</h4>
                      <p className="text-xs text-gray-500">Business Owner, Delhi</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#D32F2F]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#D32F2F] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "Agents were harassing my parents. I contacted AMA Legal, and they stopped the calls within 48 hours. The settlement process was smooth and transparent."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">P</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya Desai</h4>
                      <p className="text-xs text-gray-500">Software Engineer, Mumbai</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Resolve Your Stashfin Loan Today</h2>
            <p className="text-white/90 text-lg mb-10">
              Don't let debt control your life. Get expert legal help now.
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

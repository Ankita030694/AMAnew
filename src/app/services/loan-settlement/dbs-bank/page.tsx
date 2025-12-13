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
  title: "DBS Bank Loan Settlement | Credit Card & Personal Loan OTS | AMA Legal",
  description: "Struggling with DBS Bank (Digibank) loan or credit card repayment? Expert legal help for settling Personal Loans and Credit Card dues. Stop harassment.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/dbs-bank',
  },
  openGraph: {
    title: "DBS Bank Loan Settlement | Credit Card & Personal Loan OTS | AMA Legal",
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
      "reviewBody": "I had a huge outstanding on my DBS Bajaj credit card. The interest was killing me. AMA Legal helped me settle it for 45% of the amount. Highly professional."
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview: DBS Bank & Digibank</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#FF3333] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>DBS Bank India</strong> is a subsidiary of DBS Bank Ltd, Singapore. It has expanded aggressively in India, primarily through its digital-only banking platform, <strong>Digibank</strong>, and its acquisition of Lakshmi Vilas Bank. DBS is known for its seamless digital lending process, offering instant personal loans and co-branded credit cards (notably with Bajaj Finserv).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  While the ease of getting a loan is a major draw, the recovery process for defaulters can be swift and stringent. Since many of these loans are unsecured and digitally processed, the bank relies heavily on automated collection systems, third-party recovery agents, and legal notices to recover dues.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are facing financial difficulties and have defaulted on your DBS Bank loan or credit card, you are likely experiencing aggressive follow-ups. It is essential to know that you have options. <strong>AMA Legal Solutions</strong> can intervene on your behalf, stop the harassment, and negotiate a formal settlement that is financially feasible for you.
              </p>
            </section>

            {/* Digibank Issues */}
            <section id="digibank-issues" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaMobileAlt className="text-4xl text-[#FF3333]" />
                <h2 className="text-3xl font-bold text-gray-900">Digibank & Digital Lending Challenges</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Digibank loans are often disbursed instantly based on algorithms. However, when a borrower defaults, the digital nature of the relationship can make it hard to find a human to talk to about restructuring or settlement.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Automated Debit Failures</h3>
                  <p className="text-gray-600">
                    When NACH mandates fail, the system automatically triggers bounce charges and penal interest, causing the debt to spiral out of control within months.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Lack of Support</h3>
                  <p className="text-gray-600">
                    Customer care often cannot authorize settlements. You need access to the bank's credit or legal department, which is where we come in.
                  </p>
                </div>
              </div>
            </section>

            {/* Credit Cards */}
            <section id="credit-cards" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Settling DBS Credit Cards</h2>
              <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <FaCreditCard className="text-3xl text-[#FF3333]" />
                  <h3 className="text-2xl font-bold text-[#FF3333]">The Debt Trap of Credit Cards</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  DBS Bank offers several credit cards, including the popular <strong>Bajaj Finserv DBS Bank SuperCard</strong>. Defaulting on these cards is dangerous because of the exorbitant interest rates (3.5% to 4% per month, or 42%+ annually).
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h4 className="font-bold text-lg mb-3">How We Help Settle Credit Card Debt:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-green-600" /> <strong>Stop the Interest Meter:</strong> We negotiate to freeze the outstanding amount, stopping further addition of interest and late fees.</li>
                    <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-green-600" /> <strong>Principal-Based Negotiation:</strong> We aim to settle the account for an amount closer to the principal spent, waiving off the accumulated interest and charges.</li>
                    <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-green-600" /> <strong>Lump Sum Settlement:</strong> Credit card debts are usually settled via a one-time payment (OTS) for maximum discount.</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 italic">
                  *Note: Settling a credit card will block that card and may affect your ability to get unsecured credit cards in the near future.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Consequences of Default</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaGavel className="text-gray-700" /> Arbitration Proceedings
                  </h3>
                  <p className="text-gray-700">
                    Most DBS loan agreements have an arbitration clause. The bank appoints an arbitrator to pass an award for the recovery of dues. This award is legally binding. We help you contest this or use the proceedings to arrive at a settlement.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaExclamationTriangle className="text-red-600" /> Section 138 (Cheque Bounce)
                  </h3>
                  <p className="text-gray-700">
                    If you gave post-dated cheques or if your ECS/NACH mandate bounces, DBS can file a criminal case under Section 138 of the NI Act or Section 25 of the PASSA. This requires mandatory court appearance. We can help you get bail and settle the matter out of court.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaUserTie className="text-blue-600" /> Recovery Agents
                  </h3>
                  <p className="text-gray-700">
                    Banks hire third-party agencies to collect dues. These agents often use intimidation tactics. Legal representation is the most effective way to stop them, as they are legally required to deal with your attorney once appointed.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Process</h2>
              <div className="relative border-l-4 border-[#FF3333] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "1. Consultation & Analysis", 
                    desc: "We review your loan details, outstanding amount, and financial hardship proofs." 
                  },
                  { 
                    title: "2. Legal Representation", 
                    desc: "We formally inform DBS Bank that we represent you. This channels all communication through us." 
                  },
                  { 
                    title: "3. Proposal Submission", 
                    desc: "We submit a structured settlement proposal to the bank, backed by evidence of your inability to pay the full amount." 
                  },
                  { 
                    title: "4. Hard Negotiation", 
                    desc: "We negotiate with the bank's credit committee to bring down the settlement amount to the lowest possible figure." 
                  },
                  { 
                    title: "5. Settlement Letter", 
                    desc: "We verify the draft settlement letter from the bank to ensure there are no hidden clauses." 
                  },
                  { 
                    title: "6. Closure", 
                    desc: "You make the payment, and we ensure the loan account is closed and the NDC is issued." 
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
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FF3333]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#FF3333] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I had a huge outstanding on my DBS Bajaj credit card. The interest was killing me, and agents were calling my office. AMA Legal stepped in, stopped the calls, and helped me settle the debt for 45% of the amount. Highly professional."
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
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I lost my job and defaulted on my Digibank personal loan. I was scared of legal action. The team at AMA Legal explained the process clearly, represented me, and closed the loan with a settlement I could afford."
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

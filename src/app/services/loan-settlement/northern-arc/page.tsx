import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaMobileAlt, FaFileContract, FaGavel, FaHandHoldingUsd, FaShieldAlt, FaCheckCircle, FaExclamationTriangle, FaChartLine, FaUserShield, FaBalanceScale } from "react-icons/fa";
import { MdSmartphone, MdOutlinePayments, MdSecurity, MdCreditScore } from "react-icons/md";

// Metadata
export const metadata = {
  title: "Northern Arc Capital Loan Settlement | Slice, Uni & Fintech Loans | AMA Legal Solutions",
  description: "Unable to pay Northern Arc Capital loans (Slice, Uni, KreditBee)? We provide expert legal settlement services to stop harassment, handle arbitration, and close your debt.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/northern-arc',
  },
  openGraph: {
    title: "Northern Arc Capital Loan Settlement | Slice, Uni & Fintech Loans | AMA Legal Solutions",
    description: "Unable to pay Northern Arc Capital loans (Slice, Uni, KreditBee)? We provide expert legal settlement services to stop harassment, handle arbitration, and close your debt.",
    url: "https://amalegalsolutions.com/services/loan-settlement/northern-arc",
    type: "website",
    images: [
      {
        url: "/services/6.png",
        width: 1200,
        height: 630,
        alt: "Northern Arc Loan Settlement Services",
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
      "name": "Northern Arc Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/northern-arc"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Northern Arc Capital Loan Settlement: Complete Guide for Fintech Loans",
  "description": "A comprehensive guide on settling loans with Northern Arc Capital, the lender behind Slice, Uni, and other fintech apps. Learn about the OTS process and legal protection.",
  "image": "https://amalegalsolutions.com/services/6.png",
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
  "datePublished": "2023-12-15",
  "dateModified": "2023-12-15"
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
  "name": "Northern Arc Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/6.png",
  "description": "Legal settlement services for Northern Arc Capital loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "210"
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
        "name": "Amit S."
      },
      "reviewBody": "I had a huge debt from Slice which was funded by Northern Arc. AMA Legal Solutions handled the arbitration notice and settled the loan for 45% of the amount."
    }
  ]
};

export default function NorthernArcLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Who is Northern Arc?" },
    { id: "fintech-partners", title: "Slice, Uni & Partners" },
    { id: "debt-trap", title: "The Digital Debt Trap" },
    { id: "recovery-tactics", title: "Recovery Tactics" },
    { id: "settlement-benefits", title: "Why Settle?" },
    { id: "process", title: "Our Process" },
    { id: "arbitration", title: "Arbitration Risks" },
    { id: "testimonials", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Northern Arc", href: "/services/loan-settlement/northern-arc" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#0f172a] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-black/80 z-0"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/circuit-pattern.png')]"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase shadow-lg">
                Fintech & NBFC Settlement Experts
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Resolve Your <span className="text-teal-400">Northern Arc</span> Debt <br className="hidden md:block" /> & Reclaim Your Financial Freedom
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Trapped in debt from <strong>Slice, Uni, or KreditBee</strong>? Northern Arc Capital is likely your lender. We provide legal protection and expert negotiation to settle your loans for a fraction of the cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all shadow-lg transform hover:-translate-y-1">
                  Start Your Settlement
                </Link>
                <a href="tel:+918700343611" className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                  Call: +91-8700343611
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 py-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Northern Arc Capital</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-teal-600">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  In the rapidly evolving world of Indian fintech, <strong>Northern Arc Capital</strong> stands as a titan that often operates behind the scenes. While you may not have walked into a Northern Arc branch to apply for a loan, they are the financial engine powering dozens of popular loan apps and credit cards. They are a Systemically Important Non-Banking Financial Company (NBFC) registered with the RBI, specializing in providing credit to under-served households and businesses.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  When you use a "Buy Now, Pay Later" (BNPL) service or swipe a fintech credit card, the money is often being lent by Northern Arc. This means that while your app interface might belong to a cool, modern startup, the legal debt obligation is owed to a regulated, traditional financial institution. This distinction is crucial because when defaults happen, it is Northern Arc that initiates the legal recovery process, not just the app developer.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Many borrowers are surprised to receive legal notices from Northern Arc when they thought their relationship was with a different brand. Understanding this relationship is the first step in resolving your debt. At AMA Legal Solutions, we bridge this gap, dealing directly with Northern Arc's compliance and settlement teams to resolve your financial liabilities professionally and legally.
                </p>
              </div>
            </section>

            {/* Fintech Partners */}
            <section id="fintech-partners" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Fintech Ecosystem: Who Are the Partners?</h2>
              <p className="text-gray-600 text-lg mb-8">
                Northern Arc has built an extensive network of partners. If you have taken a loan or used a credit line from any of the following platforms, there is a high probability that your loan account is managed by Northern Arc. We handle settlements for all these associated products:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <MdCreditScore className="text-3xl text-teal-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Slice & Uni Cards</h3>
                  </div>
                  <p className="text-gray-600">
                    These popular "credit card challengers" often use Northern Arc as their lending partner. The "split your bill in 3" feature is essentially a short-term loan. Defaulting on these can lead to immediate reporting to CIBIL as a written-off or defaulted account by Northern Arc.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <MdOutlinePayments className="text-3xl text-teal-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">KreditBee & Personal Loan Apps</h3>
                  </div>
                  <p className="text-gray-600">
                    Apps offering instant cash loans like KreditBee, MoneyTap, or EarlySalary often have Northern Arc on their panel of lenders. The high interest rates on these small-ticket loans can quickly spiral out of control, making repayment impossible without a structured settlement.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <FaMobileAlt className="text-3xl text-teal-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">LazyPay & BNPL</h3>
                  </div>
                  <p className="text-gray-600">
                    Buy Now Pay Later services are convenient but dangerous. Missed payments attract massive penalties. Since these are often small amounts initially, users ignore them until they balloon into significant debt, prompting legal action from Northern Arc.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <FaUserShield className="text-3xl text-teal-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Microfinance & SME Loans</h3>
                  </div>
                  <p className="text-gray-600">
                    Beyond consumer apps, Northern Arc also funds small business loans and microfinance institutions. If you are a small business owner struggling with a loan backed by them, the settlement process is your best route to avoid bankruptcy or asset seizure.
                  </p>
                </div>
              </div>
            </section>

            {/* Debt Trap */}
            <section id="debt-trap" className="mb-16 scroll-mt-32">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-10 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <FaChartLine className="text-teal-400" /> The Digital Debt Trap
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  The convenience of digital lending comes with a hidden cost. These loans are designed to be frictionless, meaning it is incredibly easy to borrow but often difficult to understand the terms. The interest rates on these fintech loans can range from <strong>24% to 36% per annum</strong>, and in some cases of default, the penal interest can push the effective rate even higher.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  A common scenario we see is "loan stacking". A user takes a loan from App A to pay off App B, and then App C to pay off App A. Before they know it, they are juggling 5-6 different EMI schedules. When one payment is missed, the house of cards collapses. The phone starts ringing incessantly, and the mental pressure becomes unbearable.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  If you find yourself in this cycle, stop. Taking a new loan to pay an old one is not the solution. The solution is to pause, assess your total liability, and initiate a legal settlement process. This stops the bleeding and gives you a fixed, reduced target to clear your name.
                </p>
              </div>
            </section>

            {/* Recovery Tactics */}
            <section id="recovery-tactics" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How Northern Arc Recovers Debt</h2>
              <p className="text-gray-600 text-lg mb-8">
                As a regulated entity, Northern Arc follows a structured recovery process. However, the third-party agencies they employ can often be aggressive. It is important to distinguish between legal recovery steps and harassment.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Communication</h3>
                    <p className="text-gray-600">
                      It starts with automated SMS, emails, and IVR calls. These are relentless and designed to create a sense of urgency. They will remind you of the "consequences" to your credit score.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tele-calling Agents</h3>
                    <p className="text-gray-600">
                      If automated reminders fail, human agents take over. This is where things often get ugly. Agents may call your references, parents, or workplace, which is a violation of RBI guidelines. They might threaten you with police cases or immediate arrest, which are false threats used to panic you.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Notices</h3>
                    <p className="text-gray-600">
                      You will eventually receive a formal legal notice. This could be a demand notice, a notice for conciliation, or a notice invoking arbitration. This is a critical stage. Ignoring a legal notice is dangerous. It needs a professional legal reply.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Arbitration & Execution</h3>
                    <p className="text-gray-600">
                      Northern Arc frequently uses arbitration to get a legal order against borrowers. An arbitrator is appointed, and if you don't represent yourself, an ex-parte award is passed. This award can then be executed through a civil court to attach your bank accounts or assets.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Grid */}
            <section id="settlement-benefits" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose Settlement with AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FaHandHoldingUsd className="text-4xl text-teal-600" />,
                    title: "Massive Savings",
                    desc: "We typically achieve settlements of 40-50% of the principal amount, waving off all interest and penalties. This can save you tens of thousands of rupees."
                  },
                  {
                    icon: <FaShieldAlt className="text-4xl text-teal-600" />,
                    title: "End Harassment",
                    desc: "Once we are on board, we direct all communication to our legal team. You no longer have to deal with abusive recovery agents directly."
                  },
                  {
                    icon: <FaFileContract className="text-4xl text-teal-600" />,
                    title: "Legal Closure",
                    desc: "We ensure you get a formal settlement letter and a No Dues Certificate. This is your proof that the debt is extinguished forever."
                  }
                ].map((card, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-teal-600 hover:shadow-lg transition-all">
                    <div className="mb-4">{card.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Timeline */}
            <section id="process" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Proven Settlement Process</h2>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-12">
                  {[
                    { step: "1", title: "Consultation & Analysis", desc: "We analyze your loan documents, the total outstanding, and your current financial capability. We verify if the loan is indeed with Northern Arc." },
                    { step: "2", title: "Legal Representation", desc: "We issue a formal letter of representation to Northern Arc, informing them that AMA Legal Solutions is now representing you. This usually stops the routine recovery calls." },
                    { step: "3", title: "Proposal & Negotiation", desc: "We submit a settlement proposal based on your financial hardship. We negotiate hard with their central team to get the lowest possible closure amount." },
                    { step: "4", title: "Documentation & Payment", desc: "Once the amount is agreed, we verify the settlement letter. You make the payment directly to Northern Arc (never to us), and we ensure the account is closed." }
                  ].map((item, i) => (
                    <div key={i} className="relative pl-24">
                      <div className="absolute left-0 top-0 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Arbitration Risks */}
            <section id="arbitration" className="mb-16 scroll-mt-32">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <FaBalanceScale className="text-4xl text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">The Reality of Arbitration</h2>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Northern Arc is known for being litigious. They often invoke the arbitration clause in your loan agreement. Here is what you need to know:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-red-700 mb-2">It is Real Court</h3>
                    <p className="text-gray-700 mb-4">
                      Many borrowers think arbitration is just a formality. It is not. The arbitrator is a private judge, and their decision (Award) is binding.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-700 mb-2">Distance is No Defense</h3>
                    <p className="text-gray-700 mb-4">
                      Even if you are in Mumbai and the arbitration is in Chennai, you must participate. We can represent you virtually or through written submissions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-700 mb-2">Asset Attachment</h3>
                    <p className="text-gray-700 mb-4">
                      If you ignore the award, they can file an execution petition in your local civil court to freeze your salary account or attach property.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-700 mb-2">Section 138 Cases</h3>
                    <p className="text-gray-700 mb-4">
                      Simultaneously, they may file a criminal case for cheque bounce or NACH dishonor. This requires mandatory bail and court appearance.
                    </p>
                  </div>
                </div>
                <div className="mt-8 bg-white p-4 rounded-lg border border-red-200">
                  <p className="font-semibold text-red-800 text-center">
                    <strong>Critical Advice:</strong> If you receive an arbitration notice, contact us immediately. We can often pause the proceedings by initiating settlement talks.
                  </p>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Real Stories, Real Relief</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-600 italic mb-6">
                    "I was using a Slice card and lost my job. The bill was ₹45,000 but with late fees, they demanded ₹85,000. I was terrified of the legal notices. AMA Legal Solutions took over, spoke to Northern Arc, and settled the whole thing for ₹25,000. It was a huge weight off my shoulders."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center font-bold text-teal-600">A</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Amit S.</h4>
                      <p className="text-xs text-gray-500">Graphic Designer, Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-600 italic mb-6">
                    "I had taken a personal loan from KreditBee. The recovery agents were calling my office reception. It was humiliating. I contacted AMA Legal Solutions. Within 48 hours, the harassment stopped. We settled the loan in 3 installments. Highly professional service."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">P</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya K.</h4>
                      <p className="text-xs text-gray-500">HR Manager, Mumbai</p>
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
        <section className="bg-gray-900 py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't Let Debt Define Your Life</h2>
            <p className="text-gray-400 text-lg mb-10">
              Take the first step towards a debt-free future. Our legal experts are ready to fight for your settlement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all shadow-xl">
                Get Free Advice
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all">
                Call Now
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

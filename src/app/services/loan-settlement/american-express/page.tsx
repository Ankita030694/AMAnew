import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaCreditCard, FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaGavel, FaPlane, FaGlobeAmericas, FaBriefcase } from "react-icons/fa";
import { MdCreditScore, MdMoneyOff, MdWarning } from "react-icons/md";

// Metadata
export const metadata = {
  title: "American Express Settlement | Amex Credit Card OTS | AMA Legal Solutions",
  description: "Struggling with American Express (Amex) debt? Expert legal help for settling Charge Cards and Credit Cards. Stop arbitration and legal notices.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/american-express',
  },
  openGraph: {
    title: "American Express Settlement | Amex Credit Card OTS | AMA Legal Solutions",
    description: "Struggling with American Express (Amex) debt? Expert legal help for settling Charge Cards and Credit Cards. Stop arbitration and legal notices.",
    url: "https://amalegalsolutions.com/services/loan-settlement/american-express",
    type: "website",
    images: [
      {
        url: "/services/13.png",
        width: 1200,
        height: 630,
        alt: "American Express Settlement Services",
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
      "name": "American Express Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/american-express"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "American Express Settlement: The Complete Guide to Amex OTS",
  "description": "A comprehensive guide on settling American Express credit card and charge card debts. Learn about the legal implications, arbitration, and how to negotiate a One Time Settlement.",
  "image": "https://amalegalsolutions.com/services/13.png",
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
  "name": "American Express Settlement Services",
  "image": "https://amalegalsolutions.com/services/13.png",
  "description": "Legal settlement services for American Express cards.",
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
        "name": "Siddharth Malhotra"
      },
      "reviewBody": "I had a massive outstanding on my Amex Platinum Charge Card. The legal team at AMA Legal Solutions handled the arbitration and settled the debt for 40% of the value. Truly professional."
    }
  ]
};

export default function AmericanExpressSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About American Express" },
    { id: "charge-vs-credit", title: "Charge Card vs Credit Card" },
    { id: "debt-trap", title: "The High-Value Debt Trap" },
    { id: "legal-actions", title: "Legal Actions (Arbitration)" },
    { id: "harassment", title: "Recovery & Harassment" },
    { id: "ots-process", title: "One Time Settlement (OTS)" },
    { id: "why-hire-us", title: "Why Hire AMA Legal Solutions?" },
    { id: "process-steps", title: "Our Settlement Process" },
    { id: "rbi-rights", title: "Your Rights (RBI)" },
    { id: "cibil-score", title: "CIBIL & Future Credit" },
    { id: "documents", title: "Required Documents" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "American Express", href: "/services/loan-settlement/american-express" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#002663] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#006FCF] to-[#002663] opacity-90"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/world-map.png')]"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Premium Debt Resolution
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#4FC3F7]">American Express</span> Debt Legally
                </h1>
                <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                  Facing legal action or arbitration from Amex? We specialize in high-value settlements for Platinum, Gold, and Corporate cards. Protect your reputation and finances.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-[#4FC3F7] text-[#002663] font-bold rounded-lg transition-all shadow-lg hover:bg-white hover:shadow-xl transform hover:-translate-y-1">
                    Confidential Consultation
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-transparent border-2 border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7] hover:text-[#002663] font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <FaPhoneAlt /> +91-8700343611
                  </a>
                </div>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                    <FaGlobeAmericas className="text-4xl text-[#4FC3F7]" />
                    <div>
                      <h3 className="font-bold text-xl">Global Expertise</h3>
                      <p className="text-sm text-gray-300">Handling High-Stakes Cases</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Platinum Charge</span>
                      <span className="bg-blue-500/20 text-blue-100 px-2 py-1 rounded text-xs">Arbitration Defense</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Gold Card</span>
                      <span className="bg-blue-500/20 text-blue-100 px-2 py-1 rounded text-xs">OTS Negotiation</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Corporate Card</span>
                      <span className="bg-blue-500/20 text-blue-100 px-2 py-1 rounded text-xs">Legal Settlement</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">American Express: The Premium Debt Challenge</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#006FCF] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>American Express (Amex)</strong> is distinct from other card issuers. It caters to a premium segment, offering high credit limits and exclusive benefits. However, this exclusivity comes with stringent repayment terms. Amex is known for its rigorous credit assessment and equally rigorous recovery process.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Defaults on Amex cards often involve significantly higher amounts compared to standard bank cards. This is due to the high spending power of their clientele and the nature of their "Charge Cards." When a high-net-worth individual or a business owner faces a liquidity crunch, Amex dues can spiral out of control very quickly.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>AMA Legal Solutions</strong> understands the unique challenges of settling with American Express. Their legal teams are sophisticated, and their recovery agents are persistent. We provide the high-level legal representation required to navigate these complex settlements, ensuring your reputation and financial future are protected.
                </p>
              </div>
            </section>

            {/* Charge vs Credit */}
            <section id="charge-vs-credit" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaCreditCard className="text-4xl text-[#006FCF]" />
                <h2 className="text-3xl font-bold text-gray-900">Charge Cards vs. Credit Cards: Understanding the Difference</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Amex offers two distinct types of cards, and understanding the difference is crucial for settlement:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#006FCF]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Charge Cards</h3>
                  <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">Examples: Platinum, Gold, Green Card</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-blue-600" /> <strong>No Pre-set Spending Limit:</strong> The limit adjusts based on your spending and payment history.</li>
                    <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-blue-600" /> <strong>Pay in Full:</strong> You must pay the entire balance every month. There is no option to "revolve" the balance.</li>
                    <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-blue-600" /> <strong>Severe Default:</strong> Missing a payment is a breach of contract. Interest rates on unpaid balances are punitive (often 42%+).</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#4FC3F7]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Credit Cards</h3>
                  <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">Examples: SmartEarn, Membership Rewards</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-cyan-600" /> <strong>Fixed Limit:</strong> You have a defined credit limit.</li>
                    <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-cyan-600" /> <strong>Revolving Credit:</strong> You can pay a minimum amount and carry forward the balance (with interest).</li>
                    <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-cyan-600" /> <strong>Debt Trap:</strong> The minimum due trap keeps you in debt for years as interest compounds.</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 italic border-l-4 border-gray-300 pl-4">
                <strong>Note:</strong> Defaults on Charge Cards are treated more aggressively by Amex because the product is designed for those who can pay in full. Settlement negotiations for Charge Cards require a more strategic approach.
              </p>
            </section>

            {/* Debt Trap */}
            <section id="debt-trap" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The "No Pre-set Spending Limit" Trap</h2>
              <div className="bg-[#E1F5FE] p-8 rounded-2xl border border-[#B3E5FC]">
                <div className="flex items-center gap-3 mb-6">
                  <MdWarning className="text-3xl text-[#0277BD]" />
                  <h3 className="text-2xl font-bold text-[#0277BD]">The Illusion of Unlimited Credit</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  Many Amex users fall into the trap of the "No Pre-set Spending Limit." They assume they have unlimited purchasing power. However, this limit is dynamic. If you make a large purchase and then face a sudden cash flow issue (like a business payment delay), you are stuck with a massive bill that is due <strong>immediately</strong>.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h4 className="font-bold text-lg mb-3">How the Debt Balloons:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaExclamationTriangle className="mt-1 text-red-600" /> <strong>Late Payment Fees:</strong> Amex charges significant fees for missed payments.</li>
                    <li className="flex items-start gap-2"><FaExclamationTriangle className="mt-1 text-red-600" /> <strong>Penal Interest:</strong> Interest rates can soar to 3.5% - 4% per month (42-48% annually) plus GST.</li>
                    <li className="flex items-start gap-2"><FaExclamationTriangle className="mt-1 text-red-600" /> <strong>Membership Fees:</strong> Annual fees for premium cards (which can be ₹50,000+) continue to be added even during default.</li>
                  </ul>
                </div>
                <p className="text-gray-800">
                  Within 6 months of default, a principal debt of ₹5 Lakhs can easily turn into ₹8-9 Lakhs. <strong>Settlement is the only way to stop this compounding growth.</strong>
                </p>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Actions by American Express</h2>
              <p className="text-lg text-gray-700 mb-6">
                Amex is known to be one of the most litigious card issuers. They have a robust legal department and do not hesitate to file cases to recover dues.
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#006FCF] transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaGavel className="text-[#006FCF]" /> 1. Arbitration Proceedings
                  </h3>
                  <p className="text-gray-700">
                    Almost all Amex agreements contain an arbitration clause. When you default, they appoint a sole arbitrator (usually in Delhi or Mumbai/Gurgaon) to hear the case. If you do not attend or represent yourself, an <strong>Ex-Parte Award</strong> is passed against you. This award has the same power as a court decree and can be executed to attach your bank accounts or assets.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#006FCF] transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaExclamationTriangle className="text-[#006FCF]" /> 2. Section 138 (Cheque Bounce)
                  </h3>
                  <p className="text-gray-700">
                    If you have submitted post-dated cheques or if your NACH mandate bounces, Amex can file a criminal complaint under Section 138 of the Negotiable Instruments Act. This is a criminal offense that requires you to appear in court and seek bail. It is a pressure tactic to force payment.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#006FCF] transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaBriefcase className="text-[#006FCF]" /> 3. Summary Suits (Order 37 CPC)
                  </h3>
                  <p className="text-gray-700">
                    For high-value defaults, Amex may file a Summary Suit under Order 37 of the Civil Procedure Code. This is a fast-track legal process for recovering debt where the defendant (you) has limited rights to defend unless you can prove a substantial dispute.
                  </p>
                </div>
              </div>
            </section>

            {/* Harassment */}
            <section id="harassment" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recovery Agents & Harassment</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    While Amex recovery agents are generally more professional than those of fintech apps, they are extremely persistent.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Common Tactics:</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Repeated calls to your mobile and landline.</li>
                      <li>Visits to your office or home (often in suits, looking like officials).</li>
                      <li>Sending legal notices from prominent law firms.</li>
                      <li>Threatening to ruin your credit score globally.</li>
                    </ul>
                  </p>
                  <p className="text-gray-700">
                    <strong>Your Defense:</strong> Under RBI guidelines, you have the right to be treated with respect. Harassment is illegal. Once you hire <strong>AMA Legal Solutions</strong>, we take over all communication. You can simply direct them to speak to your lawyer.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <FaShieldAlt className="text-5xl text-[#006FCF] mb-4" />
                  <h3 className="font-bold text-lg mb-4">We Stop the Calls</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "I was receiving 20 calls a day from Amex agents. It was affecting my business. AMA Legal Solutions sent a notice of representation, and the calls stopped immediately. We then negotiated a settlement peacefully."
                  </p>
                  <p className="text-right text-xs font-bold mt-4">- A Satisfied Client</p>
                </div>
              </div>
            </section>

            {/* OTS Process */}
            <section id="ots-process" className="mb-16 scroll-mt-32">
              <div className="bg-[#002663] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#4FC3F7]">One Time Settlement (OTS) with Amex</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Settling with American Express is harder than with other banks, but it is entirely possible. They value their brand and prefer to close bad debts rather than keep them on their books indefinitely.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">The Challenge</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Amex requires strong evidence of financial hardship. They will scrutinize your bank statements and income proofs. They often start with a settlement offer of 80-90% of the dues, which is not helpful.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">Our Strategy</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We build a strong case file proving your inability to pay. We leverage legal points (like excessive interest charges) to counter their claims. We negotiate directly with their senior settlement officers to bring the amount down to <strong>30-50%</strong> of the total outstanding.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Hire Us */}
            <section id="why-hire-us" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why You Need AMA Legal Solutions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaGavel className="text-4xl text-[#006FCF] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Arbitration Defense</h3>
                  <p className="text-sm text-gray-600">We represent you in arbitration to prevent ex-parte awards.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaHandHoldingUsd className="text-4xl text-[#006FCF] mb-4" />
                  <h3 className="font-bold text-lg mb-2">High-Value Savings</h3>
                  <p className="text-sm text-gray-600">We have saved clients lakhs on high-limit Platinum/Gold cards.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaBriefcase className="text-4xl text-[#006FCF] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Professionalism</h3>
                  <p className="text-sm text-gray-600">We match Amex's professionalism, ensuring a dignified process.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <FaRegCheckCircle className="text-4xl text-[#006FCF] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Complete Closure</h3>
                  <p className="text-sm text-gray-600">We ensure you get a valid settlement letter and closure of the account.</p>
                </div>
              </div>
            </section>

            {/* Process Steps */}
            <section id="process-steps" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Process</h2>
              <div className="relative border-l-4 border-[#006FCF] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "1. Case Analysis", 
                    desc: "We review your card type (Charge/Credit), outstanding amount, and delinquency status." 
                  },
                  { 
                    title: "2. Legal Representation", 
                    desc: "We formally inform Amex and their legal agencies that we represent you." 
                  },
                  { 
                    title: "3. Hardship Documentation", 
                    desc: "We help you compile the necessary financial proofs to justify a settlement request." 
                  },
                  { 
                    title: "4. Negotiation", 
                    desc: "We engage in multiple rounds of negotiation to reduce the settlement amount." 
                  },
                  { 
                    title: "5. Settlement & Payment", 
                    desc: "Once the best offer is on the table, we verify the letter, and you make the payment to close the debt." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#006FCF] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Rights */}
            <section id="rbi-rights" className="mb-16 scroll-mt-32">
              <div className="bg-[#E1F5FE] p-8 rounded-2xl border border-[#B3E5FC]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#0277BD]" />
                  <h2 className="text-2xl font-bold text-[#0277BD]">RBI Guidelines & Your Rights</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  Even with premium cards, you are protected by RBI regulations:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#0277BD] rounded-full"></div> <strong>Fair Practice:</strong> Recovery agents must follow a code of conduct.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#0277BD] rounded-full"></div> <strong>Privacy:</strong> Your financial data cannot be shared with unauthorized third parties.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#0277BD] rounded-full"></div> <strong>Grievance Redressal:</strong> Amex must have a clear mechanism to handle your complaints.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#0277BD] rounded-full"></div> <strong>Settlement Right:</strong> You have the right to propose a settlement if you are unable to pay.</li>
                </ul>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-score" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">CIBIL Score & Future Credit</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    <strong>The Reality:</strong> Settling an Amex card will drop your CIBIL score. The account will be marked as "Settled."
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>The Silver Lining:</strong> A "Settled" status is finite. It stops the bleeding. An "Overdue" status hurts your score every month indefinitely.
                  </p>
                  <p className="text-gray-700">
                    <strong>Rebuilding:</strong> You can rebuild your score. Start with a secured credit card from another bank. Use it responsibly for 12-24 months. Eventually, your score will recover, and you will be eligible for premium cards again (though likely not from Amex).
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Life After Settlement</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Debt-free status immediately.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> No more legal threats or calls.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Focus on business/career growth.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Gradual credit score improvement.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-16 scroll-mt-32">
              <div className="bg-[#002663] text-white rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#4FC3F7]" /> Card Number / Account Number</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#4FC3F7]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#4FC3F7]" /> Latest Card Statement</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#4FC3F7]" /> Legal Notices / Arbitration Notices</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#4FC3F7]" /> Proof of Income Loss (ITR, Bank Statements)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#4FC3F7]" /> Medical Records (if applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#006FCF]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#006FCF] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I had a massive outstanding on my Amex Platinum Charge Card due to a business failure. The legal team at AMA Legal Solutions handled the arbitration and settled the debt for 40% of the value. Truly professional."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">S</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Siddharth Malhotra</h4>
                      <p className="text-xs text-gray-500">Entrepreneur, Mumbai</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#006FCF]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#006FCF] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "Amex agents were visiting my office. It was embarrassing. AMA Legal Solutions intervened, stopped the visits, and helped me close the card with a one-time payment. I can finally focus on my work."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">R</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rajesh Gupta</h4>
                      <p className="text-xs text-gray-500">Consultant, Delhi</p>
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
        <section className="bg-[#006FCF] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Resolve Your American Express Debt</h2>
            <p className="text-white/90 text-lg mb-10">
              Expert legal help for high-value credit card settlements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#006FCF] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Confidential Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#006FCF] transition-all text-lg flex items-center justify-center gap-2">
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

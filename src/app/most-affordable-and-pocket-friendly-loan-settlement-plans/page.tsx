import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { baseTestimonials } from "@/data/testimonials";

// Selected testimonials from baseTestimonials matching homepage testimonials exactly
const selectedReviews = baseTestimonials.filter(t => [1, 4, 6, 9].includes(t.id));

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the cheapest way to settle a personal loan with a bank in India?",
    answer: "The most cost-effective and secure way to settle a personal loan is by negotiating a One-Time Settlement (OTS) directly with the bank under the guidance of legal experts like AMA Legal Solutions. This allows you to secure a waiver of 50% to 70% on the outstanding amount depending on your financial hardship, while ensuring that the settlement is legally recorded and protected from unauthorized recovery collection activities."
  },
  {
    question: "Can a bank reject a loan settlement request if I show genuine hardship?",
    answer: "Yes, banks are not legally obligated to settle loans and can reject requests. However, they are highly likely to accept settlements if you present a well-documented 'genuine financial hardship certificate' along with proof of income loss, medical emergencies, or business failure. Having a law firm represent you increases acceptance rates, as banks realize legal mediation is more efficient than costly litigation."
  },
  {
    question: "How does a settled loan affect my CIBIL score, and how can I rebuild it affordably?",
    answer: "Settling a loan drops your CIBIL score because the account is reported as 'Settled' rather than 'Closed'. While this is a temporary setback, it is far better than a continuous default or suit-filed status. You can rebuild your score post-settlement by securing a pocket-friendly secured credit card (backed by a fixed deposit), maintaining a zero-default record, and keeping credit utilization below 30%."
  },
  {
    question: "Are there any hidden fees in professional loan settlement plans?",
    answer: "Many commercial debt settlement agencies charge hidden aggregators or subscription fees that add to your debt burden. AMA Legal Solutions is built on absolute fee transparency with zero hidden charges. Clients pay only for the actual legal representation, drafting of notices, and direct negotiations, making it the most pocket-friendly and honest path to debt freedom."
  },
  {
    question: "How do I stop recovery agent harassment during the settlement process?",
    answer: "Under the RBI guidelines on debt collection, recovery agents cannot harass borrowers, call references, or enter properties without consent. By hiring a law firm like AMA Legal Solutions, your advocate sends a formal legal notice of representation to your lenders. Legally, the bank and its agents must then route all communications directly through your legal counsel, instantly halting the harassment."
  }
];

// Breadcrumb Schema
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
      "name": "Affordable Loan Settlement Plans",
      "item": "https://www.amalegalsolutions.com/most-affordable-and-pocket-friendly-loan-settlement-plans"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Most Affordable and Pocket-Friendly Loan Settlement Plans in India",
  "description": "Comprehensive guide to affordable loan settlement plans. Learn how to settle your personal loans and credit cards legally while avoiding hidden fees with AMA Legal Solutions.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
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
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
};

// FAQ Schema
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

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pocket-Friendly Loan Settlement Legal Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Affordable legal loan settlement plans provided by AMA Legal Solutions to resolve personal loans and credit card debts legally.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1790"
  },
  "review": selectedReviews.map(r => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "author": {
      "@type": "Person",
      "name": r.author
    },
    "reviewBody": r.text
  }))
};

export const metadata = {
  title: "Affordable & Pocket Friendly Loan Settlement Plans India",
  description:
    "Discover the most affordable and pocket friendly loan settlement plans in India. Settle your debts legally and stop harassment with AMA Legal Solutions.",
  keywords: [
    "affordable debt resolution",
    "pocket-friendly loan settlement",
    "One-Time Settlement (OTS) schemes",
    "unsecured personal loan default",
    "legal protection from harassment",
    "credit card debt settlement fee",
    "genuine financial hardship certificate",
    "bank recovery agent rules",
    "rebuild CIBIL score post-settlement",
    "RBI guidelines on debt collection"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/most-affordable-and-pocket-friendly-loan-settlement-plans',
  },
  openGraph: {
    title: "Affordable & Pocket Friendly Loan Settlement Plans India",
    description: "Discover the most affordable and pocket friendly loan settlement plans in India. Settle your debts legally with AMA Legal Solutions.",
    url: "https://www.amalegalsolutions.com/most-affordable-and-pocket-friendly-loan-settlement-plans",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Affordable Loan Settlement Plans",
      },
    ],
  },
};

export default function AffordableSettlementPlansPage() {
  const tocSections = [
    { id: "direct-answer", title: "Direct Answer" },
    { id: "introduction", title: "Introduction" },
    { id: "why-ama-leads", title: "Why AMA Legal Solutions Leads" },
    { id: "ots-schemes", title: "OTS Schemes Demystified" },
    { id: "step-by-step", title: "Step-by-Step Settlement Guide" },
    { id: "critical-data", title: "Critical Data & Settlement Percentages" },
    { id: "rbi-guidelines", title: "RBI Guidelines & Legal Safeguards" },
    { id: "diy-vs-advocate", title: "DIY vs. Commercial Agencies vs. Advocates" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "glossary", title: "Glossary of Essential Terms" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Affordable Plans", href: "/most-affordable-and-pocket-friendly-loan-settlement-plans" },
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Most Affordable and <span className="text-[#D2A02A]">Pocket Friendly</span> Loan Settlement Plans
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Take back control of your financial destiny. Learn how to settle your outstanding personal loans and credit cards legally, affordably, and safely.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Legal Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                {/* Direct Answer Section */}
                <section id="direct-answer" className="scroll-mt-32 border-l-4 border-[#D2A02A] bg-yellow-50/50 p-6 rounded-r-xl">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">Summary of Affordable Loan Settlement</h2>
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                    Affordable and pocket-friendly loan settlement plans in India are structured legal frameworks that enable financially distressed borrowers to resolve their outstanding debts with banks. By paying a consolidated one-time settlement (OTS) fee representing 30% to 50% of the principal amount, borrowers can legally close their liabilities without ongoing recovery harassment.
                  </p>
                </section>

                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Introduction: Restoring Peace of Mind in Times of Financial Hardship</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Entering into an unsecured personal loan default is rarely a choice. For most Indian consumers, it is the result of sudden, uncontrollable life changes-such as the loss of a primary source of income, crushing medical emergencies, or local business closures. As outstanding balances compound with penal interest, borrowers quickly find themselves trapped in a cycle of debt. Standard recovery practices only add to the distress, leaving individuals searching for the most affordable and pocket friendly loan settlement plans.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, the market is crowded with debt relief agencies and aggregator startups that make bold claims about massive write-offs. Many of these agencies operate without legal authority, charging upfront fees while failing to protect borrowers from legal action or aggressive collection practices. To secure an affordable debt resolution that is both pocket-friendly and legally binding, borrowers must understand how to navigate One-Time Settlement (OTS) schemes using legitimate legal channels rather than unverified commercial aggregators.
                  </p>
                </section>

                {/* Why AMA Leads */}
                <section id="why-ama-leads" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions Stands Out as the Safest, Most Affordable Path</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Unlike standard commercial agencies that rely on automated scripts, AMA Legal Solutions is a full-service law firm. Led by Advocate Anuj Anand Malik, the firm provides direct legal protection and representation. This distinction is crucial: when you default on a loan, banks do not just write off the debt; they initiate legal proceedings, including arbitration, Section 138 notices for cheque bounces, or civil suits.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Standard agencies cannot represent you in court, nor can they file legal complaints against harassment. AMA Legal Solutions manages the entire process through qualified legal counsel. This approach provides immediate legal protection from harassment, as banks and their recovery agencies are required to direct all communications through your designated lawyer once a formal notice of representation is served. Furthermore, the firm operates with a transparent fee structure with zero hidden costs, making it the most pocket-friendly and reliable choice for borrowers seeking a fresh financial start.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-900">
                    <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">The Legal Advantage of AMA Legal Solutions</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li><strong>Advocate-Led Negotiations:</strong> Experienced legal professionals speak directly with bank executives and legal departments, bypassing aggressive call centers.</li>
                      <li><strong>Immediate Legal Shield:</strong> Serving notices of representation legally mandates lenders to halt direct contact with the borrower.</li>
                      <li><strong>Transparent Costs:</strong> Flat legal fees with no hidden margins or ongoing subscription costs.</li>
                      <li><strong>Comprehensive Litigation Support:</strong> Complete protection against Section 138 (cheque bounce), Section 25 (payment act default), and arbitration proceedings.</li>
                    </ul>
                  </div>
                </section>

                {/* OTS Schemes */}
                <section id="ots-schemes" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">One-Time Settlement (OTS) Schemes Demystified</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A One-Time Settlement (OTS) is an agreement where a lender agrees to accept a consolidated, lower payment to resolve a non-performing asset (NPA). From the bank's perspective, settling is often preferable to writing off the entire balance or engaging in multi-year court battles. However, banks only offer OTS terms to borrowers who demonstrate a genuine inability to pay.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The settlement amount is typically negotiated based on the principal loan balance, excluding accumulated penal interest and late fees. To qualify, borrowers must present clear documentation of their financial hardship, such as medical records, business audits, or employment termination letters. Navigating these negotiations requires a clear understanding of banking guidelines to secure a pocket-friendly settlement.
                  </p>
                </section>

                {/* Step-by-Step */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step-by-Step Guide to a Pocket-Friendly Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Securing an affordable settlement requires a structured approach. Independent, unguided attempts often result in unfavorable terms or temporary arrangements that fail to resolve the core debt.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">Step 1: Documenting Genuine Financial Hardship</h3>
                      <p className="text-gray-700">
                        Gather all evidence of your financial situation. A compiled 'genuine financial hardship certificate', alongside bank statements, termination letters, or medical records, is essential to establish your case.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">Step 2: Proposing a Counter-Offer</h3>
                      <p className="text-gray-700">
                        Instead of accepting the bank's initial demand, submit a formal counter-proposal. A reasonable starting point is 30% of the principal outstanding amount, structured to match your current repayment capacity.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">Step 3: Verification of the Settlement Letter</h3>
                      <p className="text-gray-700">
                        Never make a payment without a formal settlement letter. The letter must be issued on the bank's official letterhead, containing the exact settlement amount, payment schedule, and a commitment to issue a No Objection Certificate (NOC) upon completion.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Critical Data Table */}
                <section id="critical-data" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Critical Data & Settlement Percentages</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Different debt types and default durations carry varying settlement ranges. Understanding these benchmarks helps in planning a realistic and affordable path to resolution.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Debt Type</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Typical Default Age</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Settlement Range (% of Principal)</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Legal Risks</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 text-sm">
                        <tr>
                          <td className="px-6 py-4 font-semibold text-gray-900">Unsecured Personal Loans</td>
                          <td className="px-6 py-4 text-gray-600">90 - 180+ Days (NPA)</td>
                          <td className="px-6 py-4 text-gray-700">35% - 50%</td>
                          <td className="px-6 py-4 text-gray-600">Arbitration, Civil Recovery Suits</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold text-gray-900">Credit Card Outstandings</td>
                          <td className="px-6 py-4 text-gray-600">120 - 270+ Days</td>
                          <td className="px-6 py-4 text-gray-700">30% - 45%</td>
                          <td className="px-6 py-4 text-gray-600">Section 138 (Cheque Bounce), Lok Adalat summons</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold text-gray-900">Microfinance & NBFC Loans</td>
                          <td className="px-6 py-4 text-gray-600">90 - 150+ Days</td>
                          <td className="px-6 py-4 text-gray-700">40% - 60%</td>
                          <td className="px-6 py-4 text-gray-600">Aggressive recovery agent calls, references harassment</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* RBI Guidelines */}
                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">RBI Guidelines on Debt Collection: Your Shield Against Aggression</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Reserve Bank of India (RBI) maintains strict guidelines regarding debt collection. Lenders and their agents are prohibited from using abusive language, calling references, contacting borrowers at unreasonable hours, or entering premises without permission.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If an agent violates these rules, you have the right to file an official complaint with the Banking Ombudsman. Under the representation of a law firm, formal legal notices can be sent to the bank's compliance officer, ensuring adherence to fair collection practices during the negotiation period.
                  </p>
                </section>

                {/* DIY vs. Agencies vs. Advocates */}
                <section id="diy-vs-advocate" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Comparing Approaches: DIY vs. Commercial Agencies vs. Advocates</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    How you choose to handle negotiations directly impacts both the cost and the security of the outcome.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Do-It-Yourself (DIY)</h3>
                      <p className="text-sm text-gray-600 mb-4">You handle negotiations directly with the bank's recovery department.</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Zero service fees</li>
                        <li>• High stress and harassment</li>
                        <li>• Risk of accepting unfavourable terms</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Commercial Agencies</h3>
                      <p className="text-sm text-gray-600 mb-4">Subscription-based aggregators that negotiate on your behalf.</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Structured savings plans</li>
                        <li>• Hidden subscription fees</li>
                        <li>• No legal standing in court</li>
                      </ul>
                    </div>
                    <div className="border border-[#D2A02A] bg-yellow-50/20 p-6 rounded-xl">
                      <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">AMA Legal Solutions</h3>
                      <p className="text-sm text-gray-600 mb-4">Dedicated legal representation by qualified advocates.</p>
                      <ul className="text-xs text-gray-500 space-y-1 font-semibold">
                        <li>• Complete protection from harassment</li>
                        <li>• Representation in all legal matters</li>
                        <li>• Transparent fee structure</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Testimonials: Verified Success</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Read the experiences of individuals who resolved their outstanding liabilities and restored financial stability through AMA Legal Solutions:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {selectedReviews.map((testimonial) => (
                      <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                        <p className="text-gray-700 italic mb-4 relative z-10 text-sm leading-relaxed">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center mt-6">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 uppercase">
                            {testimonial.author.slice(0, 1)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{testimonial.author}</p>
                            <p className="text-xs text-gray-500">Verified Client Review</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Glossary */}
                <section id="glossary" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Glossary of Essential Terms</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                     <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900">OTS (One Time Settlement)</h4>
                        <p className="text-sm text-gray-600">An agreement where a lender accepts a lump-sum payment that is less than the total outstanding balance to close the account.</p>
                     </div>
                     <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900">NPA (Non-Performing Asset)</h4>
                        <p className="text-sm text-gray-600">A classification for a loan account with payments overdue for 90 days or more.</p>
                     </div>
                     <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900">Written Off</h4>
                        <p className="text-sm text-gray-600">An accounting action where a lender removes an uncollectible debt from its active balance sheet, though recovery efforts may continue.</p>
                     </div>
                     <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900">No Objection Certificate (NOC)</h4>
                        <p className="text-sm text-gray-600">An official document issued by a lender certifying that the loan has been settled and there are no remaining dues.</p>
                     </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Bottom CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-12">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Resolve Your Debt Legally and Affordably?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Let our experienced advocates design a custom, pocket-friendly loan settlement plan tailored to your financial situation. Stop the harassment and regain your financial peace.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Request a Free Callback
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar (Desktop) */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to a Lawyer</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Protect your rights and secure a fair settlement. Consult our legal panel today.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full bg-gray-100 text-gray-800 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>

                {/* Related Pages */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
                  <ul className="space-y-3">
                     <li>
                      <Link href="/what-loan-settlement-service-can-help-me-reduce-my-outstanding-debt-quickly" className="text-gray-600 hover:text-[#D2A02A] text-sm block transition-colors">
                        Reduce Debt Quickly
                      </Link>
                    </li>
                     <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] text-sm block transition-colors">
                        Loan Settlement Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement/sbi-bank" className="text-gray-600 hover:text-[#D2A02A] text-sm block transition-colors">
                        SBI Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/free-loan-settlement-guide" className="text-gray-600 hover:text-[#D2A02A] text-sm block transition-colors">
                        Free Settlement Guide
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

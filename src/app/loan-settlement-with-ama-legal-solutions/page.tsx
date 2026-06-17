import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Settlement with AMA Legal Solutions | Expert Debt Relief",
  description: "Get legal guidance for loan settlement with AMA Legal Solutions. Negotiate a one-time settlement, stop recovery agent harassment, and track progress.",
  keywords: [
    "loan settlement with AMA Legal Solutions",
    "one-time settlement (OTS)",
    "unsecured personal loans",
    "CIBIL score impact",
    "recovery agent harassment",
    "RBI guidelines on debt collection",
    "AMA Connect app",
    "debt resolution company",
    "legal notice for loan default",
    "credit card debt settlement"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-with-ama-legal-solutions',
  },
  openGraph: {
    title: "Loan Settlement with AMA Legal Solutions | Expert Debt Relief",
    description: "Get legal guidance for loan settlement with AMA Legal Solutions. Negotiate a one-time settlement, stop recovery agent harassment, and track progress.",
    url: "https://www.amalegalsolutions.com/loan-settlement-with-ama-legal-solutions",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement with AMA Legal Solutions",
      },
    ],
  }
};

const faqs = [
  {
    question: "Is loan settlement with AMA Legal Solutions a legal process?",
    answer: "Yes, loan settlement with AMA Legal Solutions is a fully legal process. The negotiation is conducted under standard legal frameworks to settle outstanding unsecured loans and credit card debts through a formal, bank-issued One-Time Settlement (OTS) letter."
  },
  {
    question: "How does AMA Legal Solutions protect borrowers from recovery agent harassment?",
    answer: "AMA Legal Solutions assigns a dedicated legal representative who takes over all creditor communications, issues formal responses to legal notices, and enforces strict RBI guidelines on debt collection to stop harassing calls and home visits."
  },
  {
    question: "Will settling my loan with AMA Legal Solutions permanently ruin my CIBIL score?",
    answer: "No, settling your loan will not permanently ruin your credit score. While a 'Settled' status causes a temporary reduction in your CIBIL score, it removes the active default and allows you to gradually rebuild your credit profile over time."
  },
  {
    question: "What is the role of the AMA Connect App during negotiations?",
    answer: "The AMA Connect App provides a transparent client dashboard where you can securely upload bank notices, track live negotiation status, view drafted legal notices, and communicate directly with your legal advisor."
  },
  {
    question: "What discount is possible through a one-time settlement (OTS)?",
    answer: "Depending on the lender, the duration of the default, and the borrower's financial hardship, discounts can range from 30% to 70% of the total outstanding dues, covering accumulated interest, penalties, and principal."
  }
];

const reviewSnippets = [
  {
    name: "Ganesh Pawar",
    initial: "G",
    location: "Maharashtra",
    comment: "I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined."
  },
  {
    name: "Samrat Basu",
    initial: "S",
    location: "West Bengal",
    comment: "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
  },
  {
    name: "deepak",
    initial: "D",
    location: "Delhi",
    comment: "I had a very good experience with AMA Legal Solutions for my credit card settlement. Their team is highly professional, supportive, and transparent throughout the process. They guided me step by step and helped me close my credit card."
  }
];

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
      "name": "Loan Settlement with AMA Legal Solutions",
      "item": "https://www.amalegalsolutions.com/loan-settlement-with-ama-legal-solutions"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement with AMA Legal Solutions: Reclaim Your Financial Freedom",
  "description": "Get legal guidance for loan settlement with AMA Legal Solutions. Negotiate a one-time settlement, stop recovery agent harassment, and track progress.",
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
  "name": "AMA Legal Solutions Debt Settlement Program",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "India's premier legal service for professional debt resolution and loan settlement.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2450"
  },
  "review": reviewSnippets.map(r => ({
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    "author": { "@type": "Person", "name": r.name },
    "reviewBody": r.comment
  }))
};

export default function LoanSettlementWithAMALegalSolutionsPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Debt Settlement?" },
    { id: "step-by-step", title: "The Step-by-Step Legal Settlement Process" },
    { id: "ama-connect-app", title: "The AMA Connect App Integration" },
    { id: "harassment-protection", title: "Legal Protections & RBI Compliance" },
    { id: "cibil-impact", title: "Understanding Credit Rating Adjustments" },
    { id: "testimonials", title: "Client Testimonials & Feedback" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Loan Settlement with AMA Legal Solutions", href: "/loan-settlement-with-ama-legal-solutions" },
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
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Loan Settlement with <span className="text-[#D2A02A]">AMA Legal Solutions</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Navigate your debt resolution journey with verified legal experts. Enforce your borrower rights, resolve outstanding liabilities, and rebuild your financial standing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Download for Android
                </button>
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                <button className="bg-white hover:bg-gray-100 text-[#1a202c] font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Download for iOS
                </button>
              </Link>
            </div>
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

              <article className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <p className="text-base md:text-xl leading-relaxed text-gray-900 font-semibold mb-6 border-l-4 border-[#D2A02A] pl-4">
                    To settle loans with AMA Legal Solutions, you receive expert legal assistance to negotiate a formal one-time settlement (OTS) with banks and NBFCs. Their legal team takes over all creditor communications, defends you against recovery agent harassment under RBI guidelines, and secures a genuine settlement letter to resolve your outstanding debts.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-4">
                    In the current economic climate, debt-related challenges affect a substantial portion of consumers in India. Unforeseen developments such as unexpected job losses, health emergencies, or downturns in small business ventures can quickly turn monthly EMI schedules into an unmanageable financial burden. When the pressure from financial institutions intensifies, relying on basic advice is rarely sufficient. A structured, technology-driven approach overseen by a dedicated legal firm provides a robust shield to navigate these challenges.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    Instead of navigating the process alone or relying on unverified collection agencies, borrowers require qualified legal practitioners. Resolving outstanding dues on unsecured personal loans or credit cards involves intricate contractual liabilities that necessitate professional legal representation. Combining digital convenience with experienced courtroom advocacy is what establishes a secure and reliable framework.
                  </p>
                </section>

                {/* What is Debt Settlement? */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is the Debt Settlement Process in India?</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-4">
                    The process of loan settlement is a negotiated compromise between a borrower facing genuine financial hardship and the creditor. When a borrower misses consecutive payments on unsecured personal loans or credit cards, the account eventually crosses the 90-day threshold and is classified as a Non-Performing Asset (NPA). At this stage, financial institutions recognize the high risk of non-recovery and become receptive to a one-time settlement (OTS).
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-4">
                    An OTS represents a formal agreement where the lender accepts a single, mutually agreed-upon lump-sum payment-which is significantly lower than the cumulative outstanding amount-to close the account. Although banks regularly present settlement options, negotiating them without legal expertise can leave borrowers exposed to unfavorable conditions, hidden penalty clauses, or verbal assurances that the bank later refutes.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    Understanding the parameters of <Link href="/what-is-loan-settlement" className="text-[#D2A02A] font-medium hover:underline">what is loan settlement</Link> and how it differs from complete loan repayment is key. Lenders do not grant concessions arbitrarily, so borrowers must present a well-documented case of genuine financial distress.
                  </p>
                </section>

                {/* Step-by-Step Settlement */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Step-by-Step Legal Settlement Process</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    Resolving outstanding financial liabilities is not merely about asking for discounts; it requires systematic, evidence-based legal negotiation. AMA Legal Solutions manages this complex cycle through a structured framework designed to safeguard borrower interests. For a complete overview, see <Link href="/how-is-loan-settlement-done" className="text-[#D2A02A] font-medium hover:underline">how is loan settlement done</Link> through formal mediation channels.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 1: Portfolio Audit & Hardship Assessment</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                        The process begins with an in-depth audit of the borrower's complete debt portfolio. The legal team reviews loan agreements, account statements, and outstanding balances to identify any unfair penal interest or hidden administrative charges. By analyzing the borrower's active income, essential expenses, and assets, they determine a sustainable settlement budget that the borrower can realistically afford.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 2: Formal Legal Notice Response & Creditor Negotiation</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                        Once the strategy is aligned, AMA Legal Solutions formally represents the borrower. They respond to any legal notice for loan default, outlining the borrower's financial hardships (such as medical crises, business failures, or job losses). By directing all future communications to their legal offices, they shield the client from aggressive collections and initiate structured negotiations to secure a viable settlement percentage.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 3: Verification of the One-Time Settlement (OTS) Letter</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                        Borrowers often face risks from fraudulent settlement letters or unverified verbal agreements. AMA Legal Solutions ensures that no payments are released until a formal, written OTS letter is issued directly from the bank's official domain or authorized branch. Their legal experts verify the letter's authenticity, concession amounts, and payment schedules before advising the client to complete the transaction and secure a No Objection Certificate (NOC).
                      </p>
                    </div>
                  </div>

                  {/* Core Steps Markdown Table */}
                  <div className="mt-8 overflow-x-auto">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm md:text-base">Loan Settlement Milestones & Actions</h4>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="p-3 border border-gray-200 font-bold text-gray-900 text-xs md:text-sm">Milestone Phase</th>
                          <th className="p-3 border border-gray-200 font-bold text-gray-900 text-xs md:text-sm">Action Items & Deliverables</th>
                          <th className="p-3 border border-gray-200 font-bold text-gray-900 text-xs md:text-sm">Primary Objective</th>
                          <th className="p-3 border border-gray-200 font-bold text-gray-900 text-xs md:text-sm">Legal Tool / Standard</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm font-semibold">1. Hardship Audit</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Audit accounts, identify predatory interest rates, and document financial distress.</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Determine viable settlement target</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm text-[#D2A02A]">Disposable Income Evaluation</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm font-semibold">2. Legal Notice Response</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Reply to creditor default notices and redirect communications to legal counsel.</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Redirect collections and prevent harassment</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm text-[#D2A02A]">Advocate Reply Notices</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm font-semibold">3. Bank Negotiation</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Submit proposal, present hardship files, and negotiate waiver of interest and penalties.</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Secure maximum waiver (30% to 70%)</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm text-[#D2A02A]">One-Time Settlement (OTS) Proposal</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm font-semibold">4. OTS Verification</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Audit the official written settlement letter for correct terms prior to payment.</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Ensure transaction security and validity</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm text-[#D2A02A]">NOC Issuance Verification</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* The AMA Connect App */}
                <section id="ama-connect-app" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The AMA Connect App Integration</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    A major challenge for borrowers is keeping track of documents, payment dates, and active discussions across multiple banks. To resolve this complexity, AMA Legal Solutions provides clients with the **AMA Connect app**-a unified digital platform designed specifically for secure case management.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-4">
                    Using the AMA Connect app, clients can easily upload copies of bank letters, monitor live negotiation updates, view drafted legal notices, and interact directly with their legal team. The app ensures complete transparency, eliminating the risk of missed deadlines or lost correspondence and keeping the client fully informed at every stage.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    To estimate your necessary target amounts before starting discussions, check your variables using a specialized <Link href="/loan-settlement-amount-calculator" className="text-[#D2A02A] font-medium hover:underline">loan settlement amount calculator</Link>.
                  </p>
                </section>

                {/* Harassment Protection */}
                <section id="harassment-protection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Legal Protections & RBI Compliance</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    A common issue faced by borrowers defaulting on unsecured personal loans is aggressive collections and recovery agent harassment. Many agencies utilize coercive tactics that violate borrower privacy and rights. The Reserve Bank of India (RBI) has issued clear directives regarding debt collection practices.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    Under these RBI guidelines on debt collection, collection agents are prohibited from contacting borrowers at inappropriate hours, using intimidating language, or making unannounced visits to workplaces. AMA Legal Solutions strictly enforces these regulations. If a creditor violates these terms, the firm files formal complaints with the bank's Nodal Officer and the RBI Ombudsman, establishing legal boundaries and protecting the client's rights.
                  </p>
                </section>

                {/* CIBIL & Financial Recovery */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Credit Rating Adjustments</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    A key consideration when opting for a one-time settlement is the CIBIL score impact. Once a settlement is finalized, the creditor reports the account to credit bureaus as "Settled" rather than "Closed." This indicates that the debt was resolved for less than the initial contract amount, leading to a temporary reduction in the borrower's credit score.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-4">
                    While a lower score makes it harder to obtain new loans immediately, it is often a necessary step to resolve a spiral of defaults and accumulating penalty interest. AMA Legal Solutions advises clients on post-settlement financial recovery. Once the debt is cleared and the NOC is recorded, borrowers can gradually rebuild their credit score by using secured credit cards responsibly and maintaining clean repayment records.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    For a detailed analysis of how this process affects your credit profile over time, read <Link href="/does-loan-settlement-affect-cibil-score" className="text-[#D2A02A] font-medium hover:underline">does loan settlement affect cibil score</Link> records.
                  </p>
                </section>

                {/* Client Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-b pb-4">Client Testimonials & Feedback</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    Our primary focus is helping clients resolve their financial difficulties and achieve peace of mind. Read through verified <Link href="/ama-legal-solutions-reviews" className="text-[#D2A02A] font-medium hover:underline">ama legal solutions reviews</Link> from borrowers who have successfully resolved their debts:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {reviewSnippets.map((r, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-2xl relative border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                        <p className="text-gray-700 italic text-sm md:text-base mb-6 leading-relaxed">
                          "{r.comment}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#D2A02A]/20 text-[#D2A02A] font-bold flex items-center justify-center text-lg">
                            {r.initial}
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-900 text-sm">{r.name}</h5>
                            <span className="text-xs text-gray-500">{r.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="font-bold text-gray-900 text-sm md:text-base">{faq.question}</h4>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </article>
            </div>

            {/* Right Sidebar - Dynamic Info & CTAs (Desktop) */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              <div className="bg-[#1a202c] text-white p-6 rounded-2xl border border-gray-800 text-center">
                <h4 className="font-bold text-[#D2A02A] mb-3 text-lg">Facing Bank Harassment?</h4>
                <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                  Download the official AMA Connect app to activate your Harassment Shield and speak with a legal advocate today.
                </p>
                <div className="space-y-3">
                  <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="block">
                    <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-2 w-full rounded-lg text-sm transition-all">
                      Play Store (Android)
                    </button>
                  </Link>
                  <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="block">
                    <button className="bg-white hover:bg-gray-100 text-[#1a202c] font-bold py-2 w-full rounded-lg text-sm transition-all">
                      App Store (iOS)
                    </button>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Top Legal Resources</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li>
                    <Link href="/loan-settlement" className="hover:text-[#D2A02A] transition-colors">
                      • Loan Settlement Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-ots" className="hover:text-[#D2A02A] transition-colors">
                      • What is One-Time Settlement (OTS)?
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-recovery-agent-harassment-complaint-online" className="hover:text-[#D2A02A] transition-colors">
                      • Stop Recovery Harassment Online
                    </Link>
                  </li>
                  <li>
                    <Link href="/does-loan-settlement-affect-cibil-score" className="hover:text-[#D2A02A] transition-colors">
                      • CIBIL Score Impact Analysis
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal-notice-for-loan-settlement-harassment" className="hover:text-[#D2A02A] transition-colors">
                      • Send Legal Notice to Banks
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Banks Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Supported Banks and NBFCs
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  { name: 'SBI', slug: 'sbi-bank' },
                  { name: 'HDFC', slug: 'hdfc-bank' },
                  { name: 'ICICI', slug: 'icici-bank' },
                  { name: 'Kotak Mahindra', slug: 'kotak-mahindra' },
                  { name: 'IDFC', slug: 'idfc-bank' },
                  { name: 'Yes Bank', slug: 'yes-bank' },
                  { name: 'Bajaj Finserv', slug: 'bajaj-finserv' },
                  { name: 'Axis Bank', slug: 'axis-bank' },
                  { name: 'Bank of Baroda', slug: 'bank-of-baroda' },
                  { name: 'Paytm', slug: 'paytm' },
                  { name: 'Hero Fincorp', slug: 'hero-fincorp' },
                  { name: 'Aditya Birla', slug: 'aditya-birla' },
                  { name: 'Poonawalla Fincorp', slug: 'poonawalla-fincorp' },
                  { name: 'Prefr', slug: 'prefr' },
                  { name: 'Citibank', slug: 'citibank' },
                  { name: 'Zype', slug: 'zype' },
                  { name: 'Infocredit', slug: 'infocredit' },
                  { name: 'NDX P2P', slug: 'ndx-p2p' },
                  { name: 'Newtap Finance', slug: 'newtap' },
                  { name: 'Tata Capital', slug: 'tata-capital' },
                  { name: 'Federal Bank', slug: 'federal-bank' },
                  { name: 'PayU Finance', slug: 'payu-finance' },
                  { name: 'KrazyBee', slug: 'krazybee' },
                  { name: 'AU Small Finance Bank', slug: 'au-small-finance' },
                  { name: 'Northern Arc', slug: 'northern-arc' },
                  { name: 'DMI Finance', slug: 'dmi-finance' },
                  { name: 'Piramal Finance', slug: 'piramal-finance' },
                  { name: 'DBS Bank', slug: 'dbs-bank' },
                  { name: 'South Indian Bank', slug: 'south-indian-bank' },
                  { name: 'Si Creva (Kissht/Ring)', slug: 'si-creva' },
                  { name: 'Stashfin', slug: 'stashfin' },
                  { name: 'L&T Finance', slug: 'l-and-t-finance' },
                  { name: 'American Express', slug: 'american-express' },
                  { name: 'Standard Chartered', slug: 'standard-chartered' },
                  { name: 'True Credits (TrueBalance)', slug: 'true-credits' },
                  { name: 'Moneyview', slug: 'moneyview' },
                  { name: 'Vivriti Capital', slug: 'vivriti-capital' },
                  { name: 'Kisetsu Saison Finance', slug: 'kisetsu-saison-finance' },
                  { name: 'IndusInd Bank', slug: 'indusind-bank' },
                  { name: 'MAS Financial', slug: 'mas-financial' },
                  { name: 'SMFG India Credit', slug: 'smfg-india-credit' },
                  { name: 'Fibe (EarlySalary)', slug: 'fibe' }
                ].map((bank) => (
                  <Link
                    key={bank.name}
                    href={`/services/loan-settlement/${bank.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                  >
                    <span className="text-gray-800 font-medium text-sm leading-tight block">{bank.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* States Grid */}
          <div className="mt-16">
            <GenericStatesGrid
              serviceName="Loan Settlement"
              servicePath="loan-settlement"
            />
          </div>
        </div>
      </div>
    </>
  );
}

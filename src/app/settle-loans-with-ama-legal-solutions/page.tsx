import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settle Loans with AMA Legal Solutions | Expert Debt Relief",
  description: "Learn how to settle loans with AMA Legal Solutions. Negotiate a one-time settlement (OTS), stop agent harassment, and track progress via the AMA Connect app.",
  keywords: [
    "settle loans with ama legal solutions",
    "unsecured personal loans",
    "one-time settlement (OTS)",
    "CIBIL score impact",
    "recovery agent harassment",
    "RBI guidelines on debt collection",
    "AMA Connect app",
    "debt resolution company",
    "legal notice for loan default",
    "credit card debt settlement"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/settle-loans-with-ama-legal-solutions',
  },
  openGraph: {
    title: "Settle Loans with AMA Legal Solutions | Expert Debt Relief",
    description: "Learn how to settle loans with AMA Legal Solutions. Negotiate a one-time settlement (OTS), stop agent harassment, and track progress via the AMA Connect app.",
    url: "https://www.amalegalsolutions.com/settle-loans-with-ama-legal-solutions",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Settle Loans with AMA Legal Solutions",
      },
    ],
  }
};

const faqs = [
  {
    question: "Is loan settlement legal in India?",
    answer: "Yes, loan settlement is a legally recognized process in India. It is a mutual agreement between a borrower and a lender to resolve outstanding debt through a one-time settlement (OTS) when the borrower faces genuine financial distress."
  },
  {
    question: "How much discount can I expect during a loan settlement?",
    answer: "The discount depends heavily on the age of the default, type of loan (unsecured personal loans or credit cards), and lender policies. Typically, write-offs on outstanding interest and principal can range from 30% to 70% of the total claim."
  },
  {
    question: "How does AMA Legal Solutions handle recovery agent harassment?",
    answer: "AMA Legal Solutions represents you legally, requiring creditors to direct all communication to our offices. We enforce RBI guidelines, document harassment incidents, and file official complaints to protect your consumer rights."
  },
  {
    question: "What is the role of the AMA Connect app in the settlement process?",
    answer: "The AMA Connect app serves as a secure client portal where you can upload legal notices, monitor negotiation progress in real time, view draft settlement letters, and communicate directly with your legal advisor."
  },
  {
    question: "How does loan settlement affect my credit score?",
    answer: "A settled status is reported to CIBIL, causing a temporary reduction in your credit score. However, resolving the outstanding debt removes active default marks and allows you to rebuild your credit rating over time."
  }
];

const reviewSnippets = [
  {
    name: "Samrat Basu",
    initial: "S",
    location: "West Bengal",
    comment: "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
  },
  {
    name: "Ganesh Pawar",
    initial: "G",
    location: "Maharashtra",
    comment: "I approached AMA Legal Solution during a challenging time, and I must say—it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined."
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
      "name": "Settle Loans with AMA Legal Solutions",
      "item": "https://www.amalegalsolutions.com/settle-loans-with-ama-legal-solutions"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Settle Loans with AMA Legal Solutions: A Legal Path to Debt Freedom",
  "description": "Learn how to settle loans with AMA Legal Solutions. Negotiate a one-time settlement (OTS), stop agent harassment, and track progress via the AMA Connect app.",
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
  "datePublished": "2026-06-15",
  "dateModified": "2026-06-15"
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
  "name": "AMA Connect Loan Settlement Service",
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

export default function SettleLoansWithAMALegalSolutionsPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Debt Settlement?" },
    { id: "step-by-step", title: "Step-by-Step Settlement" },
    { id: "ama-connect-app", title: "The AMA Connect App" },
    { id: "harassment-protection", title: "Harassment Protection" },
    { id: "cibil-impact", title: "CIBIL & Financial Recovery" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Settle Loans with AMA Legal Solutions", href: "/settle-loans-with-ama-legal-solutions" },
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
              Settle Loans with <span className="text-[#D2A02A]">AMA Legal Solutions</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Take back control of your financial life. Negotiate a one-time settlement (OTS), stop agent harassment, and track your case via the AMA Connect app.
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
                    In the rapidly evolving financial landscape of 2026, the burden of debt has become a reality for millions of hardworking Indians. Unexpected life events like medical emergencies, job losses, or business setbacks can quickly turn manageable EMIs into a suffocating mountain of debt. When the pressure from banks and the unethical tactics of recovery agents become too much to bear, you need more than just hope; you need a professional, technology-driven solution. This is where a dedicated loan settlement app becomes your most valuable ally in the fight for financial freedom.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    Rather than relying on generic tools, borrowers must ensure they use platforms backed by legitimate legal credentials. Unsecured personal loans and outstanding credit card balances carry complex legal bindings that cannot be resolved with software scripts alone. Fusing state-of-the-art mobile convenience with established courtroom representation is what defines a truly secure resolution process.
                  </p>
                </section>

                {/* What is Debt Settlement? */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is the Debt Settlement Process in India?</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-4">
                    Navigating the debt settlement process in India requires a clear understanding of banking practices and legal guidelines. When a borrower defaults on unsecured personal loans or credit card debt for consecutive months, the account is eventually classified as a Non-Performing Asset (NPA). At this stage, financial institutions recognize the high probability of default and become open to negotiating a one-time settlement (OTS).
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-4">
                    An OTS is a formal agreement where the lender accepts a single, reduced payment—often significantly lower than the total outstanding dues—to close the account permanently. While banks present this as a final resort, executing it without legal representation can leave borrowers vulnerable to lopsided terms, hidden charges, or unrecognized verbal agreements. A professional debt resolution company ensures that negotiations are documented, binding, and compliant with standard legal frameworks.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    Understanding the core concepts behind <Link href="/what-is-loan-settlement" className="text-[#D2A02A] font-medium hover:underline">what is loan settlement</Link> and how it differs from foreclosure is essential. Lenders are unlikely to accept arbitrary numbers, and borrowers need to know their financial limits.
                  </p>
                </section>

                {/* Step-by-Step Settlement */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How to Settle Loans with AMA Legal Solutions: Step-by-Step</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    Resolving high-interest liabilities is not merely about asking for discounts; it is a structured legal negotiation. AMA Legal Solutions manages this complex cycle through a systematic three-step framework that prioritizes the borrower's rights and financial capacity. To learn exactly <Link href="/how-is-loan-settlement-done" className="text-[#D2A02A] font-medium hover:underline">how is loan settlement done</Link> through legal mediation channels, check our detailed process guide.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 1: In-depth Legal Consultation and Financial Assessment</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                        The journey begins with an exhaustive evaluation of your entire debt portfolio. The legal experts at AMA Legal Solutions review all loan agreements, statements of accounts, and previous correspondences. This assessment identifies arbitrary penal interest rates, hidden administrative charges, and violations of fair lending practices. By evaluating your actual disposable income and assets, the team establishes a realistic settlement budget, ensuring that any proposed offer is financially sustainable for you.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 2: Creditor Communications and Negotiation Framework</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                        Once the strategy is established, AMA Legal Solutions formally intervenes. They issue legal notices to lenders indicating your intent to settle due to genuine financial distress, such as job loss, medical emergencies, or business failure. By routing all subsequent communications through their legal office, they shield you from aggressive collection tactics. The firm’s seasoned negotiators leverage their deep understanding of banking policies to reduce your outstanding balance, aiming for a realistic settlement percentage.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 3: Securing and Verifying the One-Time Settlement (OTS) Letter</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                        A critical vulnerability for many borrowers is accepting fake settlement offers or paying based on verbal promises from third-party recovery agents. AMA Legal Solutions ensures that no payment is made until a formal, written OTS letter is issued directly from the bank's official domain or authorized branch. Their lawyers meticulously audit the settlement letter to verify that the concession amount, payment schedule, and terms match the negotiated agreement, followed by securing a No Objection Certificate (NOC) once the payment is completed.
                      </p>
                    </div>
                  </div>

                  {/* Core Steps Markdown Table */}
                  <div className="mt-8 overflow-x-auto">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm md:text-base">Critical Data Points and Process Steps</h4>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="p-3 border border-gray-200 font-bold text-gray-900 text-xs md:text-sm">Step / Metric</th>
                          <th className="p-3 border border-gray-200 font-bold text-gray-900 text-xs md:text-sm">Key Details & Action Items</th>
                          <th className="p-3 border border-gray-200 font-bold text-gray-900 text-xs md:text-sm">Core Objective</th>
                          <th className="p-3 border border-gray-200 font-bold text-gray-900 text-xs md:text-sm">Legal Reference / App Tool</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm font-semibold">Financial Assessment</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Audit all loans, outstanding dues, and check for unfair/hidden interest charges.</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Establish settlement budget</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm text-[#D2A02A]">Case File Review</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm font-semibold">Harassment Defense</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Enforce communication limits, file complaints for verbal abuse or unauthorized visits.</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Stop recovery agent harassment</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm text-[#D2A02A]">RBI Debt Collection Guidelines</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm font-semibold">Negotiation Phase</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Submit formal proposal, present financial hardship documents, and negotiate discounts.</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Reduce total outstanding</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm text-[#D2A02A]">One-Time Settlement (OTS)</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm font-semibold">Verification Phase</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Meticulously check the written OTS letter against bank records before making payment.</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Prevent fraudulent settlements</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm text-[#D2A02A]">Official Bank Correspondence</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm font-semibold">Client Portal</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Manage case documents, track negotiations, and message legal advisors.</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm">Streamline transparency</td>
                          <td className="p-3 border border-gray-200 text-xs md:text-sm text-[#D2A02A]">AMA Connect App</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* The AMA Connect App */}
                <section id="ama-connect-app" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The AMA Connect App: Managing Your Debt Settlement Journey</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    To streamline the client experience, AMA Legal Solutions offers access to the **AMA Connect app**—a dedicated platform designed exclusively for our active clients. Navigating multiple debt settlements can feel overwhelming, especially when keeping track of different deadlines, negotiation statuses, and legal documents. The AMA Connect app acts as your centralized digital dashboard, ensuring complete transparency throughout the engagement.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-4">
                    Through the app, clients can upload copy of legal notices received from banks, view real-time negotiation updates, track the status of draft settlement agreements, and securely communicate with their assigned legal advisor. By centralizing all data within the AMA Connect app, clients no longer have to dig through emails or chat history to verify their payment timelines or track which bank has agreed to the OTS.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    You can calculate your expected savings using a <Link href="/loan-settlement-amount-calculator" className="text-[#D2A02A] font-medium hover:underline">loan settlement amount calculator</Link> tool to estimate your required target before initiating discussions.
                  </p>
                </section>

                {/* Harassment Protection */}
                <section id="harassment-protection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Legal Protections Against Recovery Agent Harassment</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    One of the most distressing consequences of defaulting on unsecured personal loans is facing persistent recovery agent harassment. Many collection agencies employ coercive tactics that violate basic constitutional rights and established banking regulations. Under the strict RBI guidelines on debt collection, lenders and their representatives are strictly prohibited from contacting borrowers at odd hours, using abusive language, visiting workplaces without consent, or harassing family members and references.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    AMA Legal Solutions actively enforces these guidelines on your behalf. If a lender breaches these rules, the legal team files formal complaints with the bank's Nodal Officer and the Reserve Bank of India’s Ombudsman. Having legal counsel sends a clear signal to creditors that any violation of the law will result in legal action, immediately changing the tone of all interactions and returning peace of mind to your household.
                  </p>
                </section>

                {/* CIBIL & Financial Recovery */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">CIBIL Score Impact and Post-Settlement Financial Recovery</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    A primary concern for anyone initiating the debt settlement process in India is the subsequent CIBIL score impact. When an account is settled via an OTS, the lender reports the transaction to credit bureaus like CIBIL and other bureaus as \"Settled\" rather than \"Closed.\" This status indicates that while you resolved the debt, you did not pay the full outstanding balance. Consequently, your credit score will experience a temporary drop, and securing new lines of credit may be difficult in the immediate future.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-4">
                    However, a temporary drop in your credit score is highly preferable to remaining in a perpetual cycle of default, accumulating penalty interest, and facing legal suits. AMA Legal Solutions guides clients on post-settlement financial recovery. Once your debts are settled and the NOCs are registered, you can slowly rebuild your credit profile by maintaining low utilization on secured credit cards, making timely utility payments, and ensuring no new defaults occur.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    To understand the long-term impact on your credit history, read our analysis on <Link href="/does-loan-settlement-affect-cibil-score" className="text-[#D2A02A] font-medium hover:underline">does loan settlement affect cibil score</Link> profiles before making a decision.
                  </p>
                </section>

                {/* Client Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-b pb-4">Real Client Experiences: Success Stories from the AMA Platform</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 text-justify mb-6">
                    Our legal team is committed to helping individuals reclaim their financial independence. Read through our verified <Link href="/ama-legal-solutions-reviews" className="text-[#D2A02A] font-medium hover:underline">ama legal solutions reviews</Link> to see success rates. Here are the exact words of clients who chose to settle loans with AMA Legal Solutions:
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

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What documents are needed for settlement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You need the loan agreement, sanction letter, account statements, recall notices, medical records, and tax returns."
      }
    },
    {
      "@type": "Question",
      "name": "Why do lawyers need my bank statements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bank statements prove your financial hardship and establish your inability to repay the full loan amount."
      }
    },
    {
      "@type": "Question",
      "name": "Can I settle without the original agreement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While difficult, lawyers can sometimes use alternate proofs like detailed bank statements and correspondence logs."
      }
    },
    {
      "@type": "Question",
      "name": "Are medical records mandatory for waiver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They are not mandatory but highly recommended if your financial crisis stems from unexpected medical emergencies."
      }
    },
    {
      "@type": "Question",
      "name": "How long does document verification take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Law firms typically take two to four days to verify all submitted documents before drafting the proposal."
      }
    },
    {
      "@type": "Question",
      "name": "Does a legal notice replace the loan agreement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, a legal notice highlights the default but the original agreement is required to verify the exact terms."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Document Preparation Service",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "134"
  },
  "review": [
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Karan Mehta"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "They explained exactly which documents I needed. The checklist was perfect and saved my case."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Sonia Varma"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Providing my medical records and bank statements as advised helped reduce my loan by fifty percent."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Rajiv Nanda"},
      "reviewRating": {"@type": "Rating", "ratingValue": "4", "bestRating": "5"},
      "reviewBody": "Professional advice. Finding all old notices was hard but the legal team guided me thoroughly."
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Documents Required for Loan Settlement Through a Law Firm in India",
  "description": "Learn what legal, financial, and correspondence documents a borrower must surrender to an Indian law firm to construct an airtight case for loan settlement.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "image": "https://www.amalegalsolutions.com/anujbhiya.png"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-06-26",
  "dateModified": "2026-06-26"
};

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
      "name": "Documents for Settlement",
      "item": "https://www.amalegalsolutions.com/documents-required-for-loan-settlement-through-law-firm"
    }
  ]
};

export default function DocumentsForLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-documentation-dictates-outcome", title: "Why Documentation Dictates Outcome" },
    { id: "initial-assessment", title: "Initial Assessment" },
    { id: "proof-of-hardship", title: "Proof of Hardship" },
    { id: "legal-process-map", title: "The Legal Process Map" },
    { id: "common-pitfalls", title: "Common Pitfalls" },
    { id: "step-checklist", title: "Step Checklist" },
    { id: "conclusion", title: "Conclusion" },
    { id: "faqs", title: "FAQs" },
    { id: "reviews", title: "Reviews" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Documents for Settlement", href: "/documents-required-for-loan-settlement-through-law-firm" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Documents Required for <span className="text-[#D2A02A]">Loan Settlement</span> Through a Law Firm in India
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Gather the precise legal and financial paperwork needed to build an airtight case and maximize your debt waiver.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Free Legal Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            
            {/* Left Sidebar Table of Contents */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 text-lg leading-relaxed text-gray-700">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <p className="mb-4 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    In 2023, data from Indian consumer legal forums indicated that nearly 40% of contested debt settlement negotiations stalled simply because borrowers failed to provide their legal counsel with complete communication logs and sanction letters. When you hire a law firm to negotiate a loan settlement, handing over the exact, verifiable documentation ranging from original loan agreements to proof of financial hardship is the only way to compel a bank to reduce your outstanding principal.
                  </p>
                  <p className="mb-4">
                    Understanding the sheer importance of legal documentation is the first step toward achieving a successful outcome in your financial dispute. Many people assume that merely hiring an advocate will magically resolve their debt issues. However, the reality is that a lawyer is only as effective as the evidence provided to them. Without a solid foundation of verifiable paperwork, any legal professional will find it incredibly difficult to argue on your behalf.
                  </p>
                  <p className="mb-4">
                    When dealing with complex financial disputes, precision is key. A vague claim of financial distress will not persuade a seasoned recovery manager or a bank's legal department. They demand concrete proof, and that proof resides in your documents. Every missing page from a bank statement or every lost email from a recovery agent weakens your case. Therefore, the task of gathering these documents requires meticulous attention to detail.
                  </p>
                </section>

                <section id="why-documentation-dictates-outcome" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Legal Documentation Dictates Your Loan Settlement Outcome</h2>
                  <p className="mb-4">
                    The role of a law firm in a loan settlement goes far beyond simply negotiating a number. They act as a protective shield between you and the aggressive recovery tactics employed by banks. Once you officially retain a lawyer and they submit a formal letter of representation to the lender, all communication must be routed through the law firm. This immediately stops the harassing phone calls and threatening home visits. The bank is legally obligated to deal with your legal counsel.
                  </p>
                  <p className="mb-4">
                    It is also important to recognize that the legal landscape surrounding debt recovery in India is constantly evolving. The Reserve Bank of India frequently issues new circulars and guidelines aimed at protecting consumers from predatory lending practices. A competent law firm stays abreast of these regulatory changes and leverages them to strengthen your case. For example, if a recent RBI guideline mandates specific procedures for issuing recall notices and your bank has failed to comply, your lawyer can use this violation to challenge the validity of the notice.
                  </p>
                  <p className="mb-4">
                    To understand the full spectrum of debt resolution, it is highly recommended to read <Link href="/what-is-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">what is loan settlement</Link> before proceeding with your documentation gathering.
                  </p>
                </section>

                <section id="initial-assessment" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Initial Assessment: Documents Your Lawyer Needs First</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">The Original Loan Agreement and Sanction Letter</h3>
                  <p className="mb-4">
                    The original loan agreement is the cornerstone of any lending relationship. It dictates the terms, conditions, interest rates, and penalties associated with the borrowed funds. When you apply for a loan, the bank issues a sanction letter outlining the approved amount and the basic terms. This document is crucial because it establishes the initial agreement before any defaults or complications arose. Providing your lawyer with the sanction letter allows them to verify if the bank has adhered to the agreed upon terms.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Complete Statement of Account</h3>
                  <p className="mb-4">
                    A complete statement of account is arguably the most frequently requested document in any financial dispute. It provides a chronological record of every disbursement, repayment, accrued interest, and applied penalty. Lawyers rely on this document to trace the exact trajectory of your debt. They carefully analyze the statement to identify any unauthorized charges, excessive late fees, or computational errors made by the bank.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Identifying All Default and Recall Notices</h3>
                  <p className="mb-4">
                    Identifying and organizing all default notices, recall notices, and legal threats is a critical part of the preparation process. When a borrower misses payments, the lender initiates a series of communications designed to recover the debt. These begin with simple reminders and quickly escalate to formal default notices and eventually, a loan recall notice demanding immediate payment of the entire outstanding balance. Each of these documents carries specific legal implications and must be handled with utmost care.
                  </p>
                  <p className="mb-4">
                    Do not discard any correspondence from the bank or its representatives, no matter how intimidating or insignificant it may seem. Every piece of paper is a potential piece of evidence. Sometimes, seemingly innocuous emails can reveal procedural violations by the bank. For example, if an email acknowledges a partial payment but the statement of account does not reflect it, your lawyer can use this discrepancy to challenge the entire outstanding balance.
                  </p>
                  <p className="mb-4">
                    If you are dealing with aggressive instant lending applications, you should also review <Link href="/how-to-settle-7-days-loan-apps" className="text-[#D2A02A] hover:underline font-semibold">how to settle 7 days loan apps</Link> to understand the specific documentation required for those cases.
                  </p>
                </section>

                <section id="data-callout" className="bg-[#fcf8f2] border-l-4 border-[#D2A02A] p-6 rounded-r-xl my-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Data Insight: Documentation Success Rates</h4>
                  <p className="text-gray-700 mb-2">According to recent legal advisory reports, cases submitted with a complete suite of certified bank statements and medical hardship proofs saw a <strong>65% higher waiver approval rate</strong> compared to cases filed with only partial statements.</p>
                  <p className="text-gray-700">The Reserve Bank of India frequently updates guidelines on recovery. You can find more information on authoritative sources like the <a href="https://www.rbi.org.in/" rel="nofollow" target="_blank" className="text-[#D2A02A] hover:underline font-semibold">RBI Official Website</a>.</p>
                </section>

                <section id="proof-of-hardship" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Proof of Financial Hardship: The Core Negotiation Leverage</h2>
                  <p className="mb-4">
                    Proof of financial hardship forms the emotional and factual core of your negotiation leverage. Banks are not charities, and they do not offer waivers simply because a borrower asks for one. They must be convinced that the borrower is genuinely incapable of repaying the full amount and that a settlement is the most pragmatic option available to them. This is where documentation proving your financial distress becomes paramount.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Medical and Employment Records</h3>
                  <p className="mb-4">
                    Medical records and employment documents are two of the most compelling forms of financial hardship proof. An unexpected medical emergency can decimate a family's savings and completely disrupt their ability to service existing debts. If your default was triggered by a health crisis, you must provide your lawyer with hospital bills, diagnostic reports, and discharge summaries. These documents serve as indisputable evidence of an unforeseen financial shock.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Certified Bank Statements and Tax Returns</h3>
                  <p className="mb-4">
                    Certified bank statements and tax returns are essential for corroborating your claims of financial hardship. While medical bills and termination letters provide the context, your bank statements provide the raw financial data. Your lawyer will require statements from all your active bank accounts to demonstrate your current liquidity and cash flow. These statements must show a consistent depletion of savings and an inability to meet basic living expenses, let alone service a substantial debt.
                  </p>
                </section>

                <section id="legal-process-map" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Legal Process Map: From Document Submission to Final NOC</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-800">Document Gathering & Review</h4>
                        <p className="text-gray-600">Client submits all statements, notices, and agreements for comprehensive legal evaluation.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-800">Drafting the Legal Representation</h4>
                        <p className="text-gray-600">Lawyers draft a formal proposal based on the financial hardship evidence and legal precedent.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-800">Negotiation with Bank Authorities</h4>
                        <p className="text-gray-600">Multiple rounds of negotiation using the submitted documents to counter bank demands.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-gray-800">Settlement Approval & NOC Issuance</h4>
                        <p className="text-gray-600">Finalizing the waiver amount, making the payment, and securing the No Objection Certificate.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="common-pitfalls" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Pitfalls: Documents That Can Sabotage Your Settlement</h2>
                  <p className="mb-4">
                    Common pitfalls can easily sabotage your settlement negotiations, and many of these revolve around inadequate or incorrect documentation. One of the most frequent mistakes borrowers make is providing incomplete bank statements. Missing pages or statements that only cover a few months fail to provide a complete picture and give the bank reason to doubt your transparency. Another major pitfall is ignoring or discarding legal notices from the lender.
                  </p>
                  <p className="mb-4">
                    If the bank decides to classify your account differently due to lack of response, it is crucial to read about <Link href="/understanding-non-performing-assets-npa-what-happens-next-your-complete-guide" className="text-[#D2A02A] hover:underline font-semibold">understanding non performing assets npa</Link>.
                  </p>
                  <p className="mb-4">
                    Organizing your documents efficiently is just as important as gathering them. Handing your lawyer a chaotic, unsorted box of papers will only slow down the process and increase your legal billing hours. Take the time to categorize your documents into distinct folders. Create separate sections for loan agreements, statements of account, correspondence, legal notices, and proof of hardship. Within each section, arrange the documents chronologically, with the most recent items on top.
                  </p>
                  <p className="mb-4">
                    When dealing with multiple loans or credit cards, the documentation process becomes even more complex. You must create a separate, meticulously organized file for each individual debt. Never mix correspondence or statements from different lenders, as this will inevitably lead to confusion and errors. Each loan has its own unique terms, timeline, and set of legal notices. Your lawyer needs to evaluate each case independently to formulate the most effective settlement strategy.
                  </p>
                </section>

                <section id="step-checklist" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Step Checklist for Assembling Your Settlement File</h2>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-700">
                        <input type="checkbox" className="w-5 h-5 text-[#D2A02A] border-gray-300 rounded focus:ring-[#D2A02A] mr-3" readOnly checked />
                        <span className="font-semibold">Original Loan Agreement & Sanction Letter</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <input type="checkbox" className="w-5 h-5 text-[#D2A02A] border-gray-300 rounded focus:ring-[#D2A02A] mr-3" readOnly checked />
                        <span className="font-semibold">Complete Statement of Account (From Day 1)</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <input type="checkbox" className="w-5 h-5 text-[#D2A02A] border-gray-300 rounded focus:ring-[#D2A02A] mr-3" readOnly checked />
                        <span className="font-semibold">All Default, Recall, and Legal Notices</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <input type="checkbox" className="w-5 h-5 text-[#D2A02A] border-gray-300 rounded focus:ring-[#D2A02A] mr-3" readOnly checked />
                        <span className="font-semibold">Medical Records or Hospital Bills (If applicable)</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <input type="checkbox" className="w-5 h-5 text-[#D2A02A] border-gray-300 rounded focus:ring-[#D2A02A] mr-3" readOnly checked />
                        <span className="font-semibold">Termination Letter or Salary Slips (Showing income drop)</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <input type="checkbox" className="w-5 h-5 text-[#D2A02A] border-gray-300 rounded focus:ring-[#D2A02A] mr-3" readOnly checked />
                        <span className="font-semibold">Certified Bank Statements (Past 6 to 12 months)</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <input type="checkbox" className="w-5 h-5 text-[#D2A02A] border-gray-300 rounded focus:ring-[#D2A02A] mr-3" readOnly checked />
                        <span className="font-semibold">Income Tax Returns (Past 2 to 3 years)</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="conclusion" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="mb-4">
                    In conclusion, approaching a loan settlement without comprehensive documentation is akin to entering a battlefield unarmed. The banks have vast resources and dedicated legal departments working to maximize their recovery. To level the playing field, you must arm your lawyer with every possible piece of evidence. From the foundational loan agreement to the intricate details of your financial hardship, every document plays a crucial role in building a persuasive narrative.
                  </p>
                </section>

                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (FAQs)</h2>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                        <span className="text-[#D2A02A] mr-3">Q.</span> What documents are needed for settlement?
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-8">You need the loan agreement, sanction letter, account statements, recall notices, medical records, and tax returns.</p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                        <span className="text-[#D2A02A] mr-3">Q.</span> Why do lawyers need my bank statements?
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-8">Bank statements prove your financial hardship and establish your inability to repay the full loan amount.</p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                        <span className="text-[#D2A02A] mr-3">Q.</span> Can I settle without the original agreement?
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-8">While difficult, lawyers can sometimes use alternate proofs like detailed bank statements and correspondence logs.</p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                        <span className="text-[#D2A02A] mr-3">Q.</span> Are medical records mandatory for waiver?
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-8">They are not mandatory but highly recommended if your financial crisis stems from unexpected medical emergencies.</p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                        <span className="text-[#D2A02A] mr-3">Q.</span> How long does document verification take?
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-8">Law firms typically take two to four days to verify all submitted documents before drafting the proposal.</p>
                    </div>
                    <div className="border-b border-gray-200 pb-6 last:border-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                        <span className="text-[#D2A02A] mr-3">Q.</span> Does a legal notice replace the loan agreement?
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-8">No, a legal notice highlights the default but the original agreement is required to verify the exact terms.</p>
                    </div>
                  </div>
                </section>

                <section id="reviews" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-2 left-2 opacity-20">"</div>
                      <div className="flex items-center mb-2 relative z-10 pl-6">
                        <div className="text-yellow-400">★★★★★</div>
                      </div>
                      <p className="text-gray-700 text-sm mb-4 relative z-10 pl-6">"They explained exactly which documents I needed. The checklist was perfect and saved my case."</p>
                      <p className="text-gray-900 font-bold text-sm relative z-10 pl-6">- Karan Mehta</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-2 left-2 opacity-20">"</div>
                      <div className="flex items-center mb-2 relative z-10 pl-6">
                        <div className="text-yellow-400">★★★★★</div>
                      </div>
                      <p className="text-gray-700 text-sm mb-4 relative z-10 pl-6">"Providing my medical records and bank statements as advised helped reduce my loan by fifty percent."</p>
                      <p className="text-gray-900 font-bold text-sm relative z-10 pl-6">- Sonia Varma</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-2 left-2 opacity-20">"</div>
                      <div className="flex items-center mb-2 relative z-10 pl-6">
                        <div className="text-yellow-400">★★★★☆</div>
                      </div>
                      <p className="text-gray-700 text-sm mb-4 relative z-10 pl-6">"Professional advice. Finding all old notices was hard but the legal team guided me thoroughly."</p>
                      <p className="text-gray-900 font-bold text-sm relative z-10 pl-6">- Rajiv Nanda</p>
                    </div>
                  </div>
                </section>

                {/* Author Bio Box */}
                <section className="bg-[#f9f5e8] p-6 md:p-8 rounded-2xl border border-amber-200 mt-12 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A]">
                    <Image
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Written by Advocate Anuj Anand Malik</h3>
                    <p className="text-sm font-semibold text-gray-600">Founder, AMA Legal Solutions | Banking & Loan Settlement Lawyer</p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Advocate Anuj Anand Malik is a credentialed legal consultant and loan settlement expert. He has represented thousands of borrowers in banking litigation, debt restructurings, and One-Time Settlements across India. He is an active member of the Bar Council of Delhi, Indo-American Chamber of Commerce (IACC), and Mumbai Centre for International Arbitration (MCIA).
                    </p>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#b88a22] font-semibold text-sm flex items-center">
                        LinkedIn Profile →
                      </a>
                      <Link href="/author/anuj-anand-malik" className="text-gray-600 hover:text-gray-900 font-semibold text-sm flex items-center">
                        Author Bio Page →
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Trust Signals Footer Block */}
                <div className="border-t pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-gray-500">
                  <div>
                    <Link href="/about" className="hover:text-gray-900">About AMA Legal</Link>
                  </div>
                  <div>
                    <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                  </div>
                  <div>
                    <Link href="/terms-and-conditions" className="hover:text-gray-900">Legal Disclaimer & Terms</Link>
                  </div>
                  <div>
                    <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
                  </div>
                </div>

                {/* Final CTA Block */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold">Struggling with Unmanageable Debt?</h2>
                    <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
                      Get expert legal protection against recovery harassment and negotiate your loan settlement securely under RBI guidelines. Talk to our senior advocates today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-base w-full sm:w-auto">
                          Book Free Legal Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all text-sm md:text-base w-full sm:w-auto">
                          Call Us: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="text-[10px] opacity-75 italic pt-2">Disclaimer: Consultation is subject to standard legal confidentiality guidelines.</p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar Contacts & Stats */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Delhi NCR Legal Office</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Talk to our banking lawyers in Sector 57, Gurugram.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                >
                  Request Callback
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement-process-in-hindi" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Hindi Settlement Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Personal Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Credit Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Business Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/unsecured-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Unsecured Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Rebuild CIBIL Score
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Firm Trust Signals</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#D2A02A]">1800+</p>
                    <p className="text-gray-500 text-xs">Settlements Resolved Successfully</p>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#D2A02A]">40%</p>
                    <p className="text-gray-500 text-xs">Average Debt Reduction Achieved</p>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#D2A02A]">100%</p>
                    <p className="text-gray-500 text-xs">Legally Audited Settlement NOCs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

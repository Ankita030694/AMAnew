import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement available for everyone in India?",
    answer: "Yes, loan settlement is legally available for everyone in India who faces genuine, documented financial hardship. Under the Reserve Bank of India (RBI) guidelines, any borrower defaults on personal loans, business loans, or credit cards can negotiate a One-Time Settlement (OTS) with banks or NBFCs to close their dues legally."
  },
  {
    question: "How does a loan settlement affect my future borrowing capacity?",
    answer: "Settling a loan reports a 'Settled' status on your CIBIL report, which lowers your credit score and prevents you from obtaining new loans for 12 to 24 months. However, it resolves your active legal liabilities and debt traps, allowing you to gradually rebuild your credit score over time."
  },
  {
    question: "What is the minimum default duration before a bank offers a settlement?",
    answer: "Most banks and NBFCs consider a settlement offer after a loan is classified as a Non-Performing Asset (NPA), which typically happens after 90 days of consecutive non-payment. However, serious negotiation discussions usually initiate after 120 to 180 days of active default."
  },
  {
    question: "Can I settle a secured loan, like a home loan or car loan?",
    answer: "While secured loans are backed by collateral (like property or vehicles), banks prefer recovering funds through auction. However, if the collateral value is insufficient or if legal auction proceedings are delayed, banks can and do negotiate a One-Time Settlement (OTS) for secured loans under special circumstances."
  },
  {
    question: "Do I need a lawyer to negotiate a loan settlement?",
    answer: "You can legally negotiate on your own, but hiring specialized debt resolution advocates like AMA Legal Solutions protects you from aggressive recovery harassment, ensures all waivers are legally documented in writing, and prevents banks from using loopholes to file false legal cases."
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
      "name": "Loan Settlement for Everyone",
      "item": "https://www.amalegalsolutions.com/loan-settlement-for-everyone"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement for Everyone: A Complete Legal Guide to Debt Relief",
  "description": "Struggling with debts? AMA Legal Solutions helps everyone settle unsecured personal loans, business loans, and credit cards under RBI rules. Clear your liabilities today.",
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

// Review Schema (Using exact rating details matching homepage metrics)
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Comprehensive Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal support for negotiating one-time loan settlements with banks, NBFCs, and digital apps in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
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
        "name": "Samrat Basu"
      },
      "reviewBody": "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ganesh Pawar"
      },
      "reviewBody": "I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement for Everyone | AMA Legal Solutions",
  description: "Struggling with debts? AMA Legal Solutions helps settle personal, business, and app loans under RBI rules. Call 8700343611 for a legal consultation.",
  keywords: [
    "loan settlement for everyone",
    "One-Time Settlement (OTS)",
    "debt settlement program",
    "unsecured personal loan",
    "RBI guidelines for recovery agents",
    "CIBIL score impact",
    "Anuj Anand Malik",
    "AMA Legal Solutions",
    "Sector 57 Gurugram",
    "financial hardship",
    "No Objection Certificate (NOC)"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-for-everyone',
  },
};

export default function LoanSettlementForEveryonePage() {
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "eligibility", title: "Is Settlement for Everyone?" },
    { id: "ama-framework", title: "AMA Legal Framework" },
    { id: "process", title: "The Settlement Process" },
    { id: "cibil-impact", title: "Credit Score & CIBIL Impact" },
    { id: "comparison-table", title: "Debt Resolution Comparison" },
    { id: "why-choose", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Loan Settlement for Everyone", href: "/loan-settlement-for-everyone" },
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
        <div className="relative bg-[#1a202c] text-white overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            {/* Google Rating Snippet */}
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <Image src="/newAssets/google.png" alt="Google" width={60} height={20} className="h-4 w-auto object-contain opacity-90" />
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex text-[#D2A02A]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] md:text-sm font-medium tracking-wide">4.9/5 Rating | 1250+ Cases Settled</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-0">
              Loan Settlement for <span className="text-[#D2A02A]">Everyone</span>: Escape Debt Trap
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Get comprehensive legal protection and resolve your outstanding credit card, personal, and business debts. Led by Anuj Anand Malik in Sector 57 Gurugram. Call 8700343611.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Mobile App Download */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Column - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                 <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-6">
                    Comprehensive Loan Settlement Solutions for Every Indian Borrower
                  </h2>
                  
                  {/* Direct Answer Box (50 words) */}
                  <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 rounded-r-xl mb-8">
                    <p className="text-gray-900 font-medium leading-relaxed text-base md:text-lg">
                      To settle a loan in India, a borrower facing genuine financial hardship can negotiate a One-Time Settlement (OTS) with the lender, under RBI guidelines. AMA Legal Solutions drafts official hardship letters, handles legal representations, halts recovery agent harassment, and coordinates with creditors to write off substantial interest and penalties.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In recent years, access to credit in India has expanded exponentially, fueled by aggressive retail banking policies and digital fintech innovations. While instant approvals and micro-loans offer immediate liquidity, millions of borrowers find themselves trapped in a cycle of debt. Unanticipated financial disruptions, including employment loss, medical emergencies, or business failure, can turn manageable monthly EMIs into overwhelming financial liabilities. When multiple loans accumulate, daily survival is overshadowed by the continuous stress of unpaid dues and aggressive debt collection tactics.
                    </p>
                    <p>
                      At this critical juncture, understanding that a structured legal exit is available becomes paramount. Many distressed individuals suffer under the misconception that debt settlement is a privilege reserved only for corporate giants or high-net-worth defaulters. However, the legal framework for a One-Time Settlement (OTS) is designed to protect every citizen. By pursuing a transparent, legally sound settlement, borrowers from all walks of life can resolve their debts, eliminate predatory interest, and reclaim their peace of mind.
                    </p>
                    <p>
                      Our premier firm, **AMA Legal Solutions**, operates with a single mission: to make comprehensive debt resolution accessible to everyone. Led by senior advocate **Anuj Anand Malik** and headquartered at our corporate chambers in **Sector 57 Gurugram**, we leverage banking codes, consumer protection laws, and statutory regulatory guidelines to negotiate sustainable settlements on your behalf. Whether you are dealing with nationalized banks, private financial institutions, or digital lending platforms, our team ensures you receive a fair, legally compliant resolution that closes your accounts permanently.
                    </p>
                  </div>
                </section>

                {/* Is Settlement for Everyone? */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Is Loan Settlement Available for Everyone in India?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <h3 className="text-xl font-bold text-gray-800">Understanding Eligibility Criteria and Financial Hardship</h3>
                    <p>
                      The short answer is yes: loan settlement is a valid legal option for any individual facing genuine, verifiable financial distress. Banks and Non-Banking Financial Companies (NBFCs) do not offer write-offs simply because a borrower finds payments inconvenient. To initiate a successful settlement, a borrower must establish involuntary **financial hardship**.
                    </p>
                    <p>
                      Genuine hardship is defined by severe, unexpected life events that make fulfilling original loan agreements impossible. Examples include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Job loss, permanent layoff, or salary reduction due to industry downturns.</li>
                      <li>Severe medical emergencies involving the borrower or immediate family members, exhausting personal savings.</li>
                      <li>Business closure or significant revenue decline for self-employed professionals and traders.</li>
                      <li>Natural disasters or structural economic disruptions impacting income streams.</li>
                    </ul>
                    <p>
                      When we present a client's case to a credit committee, we compile detailed financial audits, bank statements, income tax returns, and medical certificates to document this hardship, proving to the lender that recovering the full outstanding balance is realistic.
                    </p>
                    
                    <h3 className="text-xl font-bold text-gray-800">The Legal Basis: RBI Fair Practices Code and Borrower Rights</h3>
                    <p>
                      Lenders are legally governed by the **RBI guidelines for recovery agents** and the Fair Practices Code. The central bank mandates that borrowers must be treated with dignity, even in default. According to RBI rules, banks must evaluate distress cases with empathy and explore restructuring or settlement frameworks before initiating coercive legal or physical actions.
                    </p>
                    <p>
                      Furthermore, the banking regulator prohibits any collection agent from engaging in harassment, threatening behavior, or violating a borrower's privacy. Knowing these rights is key: if a financial institution violates these mandates, it strengthens your legal position, allowing our chambers in Sector 57 Gurugram to negotiate a highly favorable settlement from a stance of statutory compliance.
                    </p>
                  </div>
                </section>

                {/* AMA Legal Framework */}
                <section id="ama-framework" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    How AMA Legal Solutions Protects and Resolves Your Debts
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      We have designed a customized debt resolution system tailored to different loan structures, ensuring that every type of default receives expert attention.
                    </p>
                    
                    <h3 className="text-xl font-bold text-gray-800">1. Resolving Unsecured Personal Loans and Credit Cards</h3>
                    <p>
                      An **unsecured personal loan** or credit card default carries the highest interest rates, often compounding daily. Because these products have no collateral, lenders are highly aggressive during recovery. Our specialized team intervenes immediately to calculate the actual principal outstanding, separate it from inflated penalty charges, and negotiate a structured settlement that waives up to 70% of the total demanded amount.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800">2. Stopping Predatory Digital Lending Apps</h3>
                    <p>
                      Digital micro-finance has led to widespread harassment by unregulated mobile lending apps. These apps often violate privacy by hacking contacts or sending threatening WhatsApp messages. We enforce strict compliance with digital lending guidelines, issuing legal cease-and-desist notices that freeze harassment instantly and force the NBFCs behind these apps to negotiate a formal settlement.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800">3. Settle Business, Commercial, and MSME Loans</h3>
                    <p>
                      For traders, wholesalers, and shop owners facing business failures, we handle complex corporate loan settlements. We review business assets, represent clients in Lok Adalats, and structure commercial settlements that protect personal assets from recovery actions while resolving corporate debts in full.
                    </p>
                  </div>
                </section>

                {/* The Settlement Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    The Step-by-Step Legal Settlement Process
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      A successful settlement requires a calculated, step-by-step approach. Navigating the process under the representation of our senior advocates ensures that your interests are protected at every stage.
                    </p>
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        <strong>Financial Auditing & Strategy Development:</strong> We begin by examining all your active credit files. We verify the outstanding principal, interest rates, and fee structures across all institutions.
                      </li>
                      <li>
                        <strong>Neutralizing Harassment:</strong> We issue a formal legal notice of representation to all lenders. This directs them to stop all recovery calls, home visits, and contact list messaging immediately, route all communication through our offices, and abide by the RBI Fair Practices Code.
                      </li>
                      <li>
                        <strong>Hardship Proposal & Negotiation:</strong> We draft a detailed hardship statement and send it to the credit committees of the respective banks. We negotiate the maximum waiver possible on interest and penalties, requesting a formal settlement letter.
                      </li>
                      <li>
                        <strong>Securing the Settlement Agreement:</strong> Once terms are finalized, we ensure the lender issues a formal, written settlement letter detailing the exact amount, payment schedule, and terms. *Never pay a settlement amount without a formal letter in writing.*
                      </li>
                      <li>
                        <strong>Obtaining the NOC:</strong> Upon final payment, we monitor the lender to ensure they issue a **No Objection Certificate (NOC)** confirming that the account is resolved and there are no outstanding liabilities.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* CIBIL Score Impact */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Understanding the CIBIL Score Impact
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      One of the most common concerns for borrowers is the **CIBIL score impact** of settling a debt. When a lender accepts a reduced payment, the account is marked on credit reports as \"Settled\" rather than \"Closed\". 
                    </p>
                    <p>
                      This status remains on your credit history for up to seven years, initially lowering your credit score and making banks hesitant to approve fresh credit. However, a \"Settled\" tag is significantly better than a continuous \"Default\" or \"Written Off\" status, which completely blacklists you from the financial system. Once settled, your legal liability is zero, and you can immediately begin a proactive credit rebuilding plan using secured credit cards and timely payments to restore an excellent credit score within 12 to 24 months.
                    </p>
                  </div>
                </section>

                {/* Debt Resolution Comparison Table */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Comparison: Settle vs. Restructure vs. Default
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                          <th className="px-6 py-4">Key Metrics</th>
                          <th className="px-6 py-4">One-Time Settlement (OTS)</th>
                          <th className="px-6 py-4">Loan Restructuring</th>
                          <th className="px-6 py-4">Active Default / Neglect</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                        <tr>
                          <td className="px-6 py-4 font-semibold">Total Repayment Amount</td>
                          <td className="px-6 py-4 text-[#D2A02A] font-medium">Reduced by 30% to 70% (Principal-focused)</td>
                          <td className="px-6 py-4">100% of dues + restructured interest over longer tenure</td>
                          <td className="px-6 py-4 text-red-600">Original dues + compounding daily interest & penalties</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Recovery Harassment</td>
                          <td className="px-6 py-4">Ceases instantly upon legal representation & OTS signup</td>
                          <td className="px-6 py-4">Ceases once restructured EMI plan is signed</td>
                          <td className="px-6 py-4 text-red-600">Aggressive calls, reference contact, and home visits</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">CIBIL Status Tag</td>
                          <td className="px-6 py-4">Marked as 'Settled' (rebuildable credit)</td>
                          <td className="px-6 py-4">Marked as 'Restructured'</td>
                          <td className="px-6 py-4 text-red-600">Marked as 'Default' / 'Written Off' (blacklisted)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Legal Proceedings</td>
                          <td className="px-6 py-4">All pending or threatened legal notices resolved</td>
                          <td className="px-6 py-4">Suspended, provided new EMI schedule is followed</td>
                          <td className="px-6 py-4 text-red-600">High risk of arbitration, Sec 138, and civil suits</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Resolution Timeline</td>
                          <td className="px-6 py-4">30 to 60 days (Fast exit)</td>
                          <td className="px-6 py-4">Extended over 1 to 5 years</td>
                          <td className="px-6 py-4">Unresolved; compounding indefinitely</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Why Trust AMA Legal Solutions with Your Debt Settlement?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Resolving severe debt requires more than just financial negotiation-it demands aggressive legal representation. AMA Legal Solutions, founded and led by senior advocate **Anuj Anand Malik**, is a dedicated legal practice focused on protecting consumers from predatory lenders. 
                    </p>
                    <p>
                      Operating from our corporate offices in **Sector 57 Gurugram**, we bring deep expertise in banking law, cyber law, and negotiation techniques. We represent clients directly before banking credit committees, ensuring that the legal language of your settlement is airtight, free of loopholes, and terminates all future financial claims by the bank. When you work with us, you are not just settling a loan; you are placing a shield of professional advocates between yourself and your creditors.
                    </p>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    What Our Clients Say (Verified Reviews)
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                        "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A]/20 rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-4">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Samrat Basu</p>
                          <p className="text-sm text-gray-500">Verified Client Review</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                        "I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A]/20 rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-4">G</div>
                        <div>
                          <p className="font-bold text-gray-900">Ganesh Pawar</p>
                          <p className="text-sm text-gray-500">Verified Client Review</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-sm md:text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-[40px] p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Take Your First Step Towards Financial Freedom</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Do not suffer from harassing collection calls or endless interest fees. Our expert legal team is ready to stand by you and secure your financial reset.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full">
                          Book Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full">
                          Call: 8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-60 italic whitespace-nowrap overflow-hidden text-ellipsis">Confidential • Legal • Effective Support from amalegalsolutions.com</p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-2">
                  <Image src="/newAssets/google.png" alt="Google" width={80} height={24} className="h-6 w-auto object-contain" />
                </div>
                <div className="flex justify-center text-[#D2A02A] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-900 mb-1">4.9 / 5.0</p>
                <p className="text-xs text-gray-500 mb-6">Based on 1250+ Verified Cases</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Speak to our senior loan settlement lawyers today. Get a direct assessment from Anuj Anand Malik's team in Sector 57 Gurugram.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <p className="text-xs text-gray-400 text-center">Available Mon-Sat | 10AM - 6PM</p>
              </div>

              <div className="bg-gray-900 p-8 rounded-3xl shadow-xl text-white">
                <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Related Expertise</h3>
                <ul className="space-y-4">
                  <li><Link href="/personal-loan-settlement" className="text-gray-400 hover:text-[#D2A02A] transition-colors text-sm font-medium">Personal Loan Settlement Guide</Link></li>
                  <li><Link href="/credit-card-settlement" className="text-gray-400 hover:text-[#D2A02A] transition-colors text-sm font-medium">Settling High Credit Card Bills</Link></li>
                  <li><Link href="/loan-recovery-agents-harassment-complaint" className="text-gray-400 hover:text-[#D2A02A] transition-colors text-sm font-medium">Complaint Against Recovery Agents</Link></li>
                  <li><Link href="/what-is-ots" className="text-gray-400 hover:text-[#D2A02A] transition-colors text-sm font-medium">What is One Time Settlement?</Link></li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-sm font-semibold mb-4" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                  <div className="flex flex-col gap-3">
                    <Link 
                      href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                      target="_blank"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image 
                        src="/newAssets/appstore.svg" 
                        alt="Get it on Google Play" 
                        width={130} 
                        height={36}
                        className="w-full max-w-[140px]"
                      />
                    </Link>
                    <Link 
                      href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                      target="_blank"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image 
                        src="/newAssets/playstore.svg" 
                        alt="Download on App Store" 
                        width={130} 
                        height={36}
                        className="w-full max-w-[140px]"
                      />
                    </Link>
                  </div>
                  <p className="text-[10px] text-gray-500 italic mt-4">"Founded by Anuj Anand Malik, we are your trusted partners."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* States Section */}
        <div className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1a202c]">Helping Families Recover Nationwide</h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">No matter where you are in India, AMA Legal Solutions is here to support you in settling loans. Founded by Anuj Anand Malik, our head office in Sector 57 Gurugram serves clients nationwide. Call 8700343611.</p>
            </div>
            <div className="container mx-auto px-4">
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {["Noida", "Gurugram", "Delhi", "Faridabad", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Jaipur"].map(city => (
                    <div key={city} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center group hover:border-[#D2A02A] transition-all">
                       <span className="text-gray-900 font-bold block mb-1 group-hover:text-[#D2A02A]">{city}</span>
                       <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Local Support Available</span>
                    </div>
                  ))}
               </div>
               
               <div className="mt-16 p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#D2A02A]/10 rounded-2xl flex items-center justify-center text-[#D2A02A]">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-gray-900">Visit Our Corporate Office</h4>
                       <p className="text-gray-500">Corporate HQ: Sushant Lok 2, Sector 57, Gurugram, India</p>
                    </div>
                  </div>
                  <Link href="/contact">
                    <button className="bg-[#1a202c] hover:bg-black text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg text-lg min-w-[200px]">
                      View All Locations
                    </button>
                  </Link>
               </div>
            </div>
        </div>
      </div>
    </>
  );
}

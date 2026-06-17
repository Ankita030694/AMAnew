import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and JSON-LD schema
const faqs = [
  {
    question: "Can a commercial debt settlement company legally represent me in court?",
    answer: "No. Under the Advocates Act of 1961, only registered advocates enrolled with the Bar Council have the authority to practice law and represent clients in courts, tribunals, Lok Adalats, and arbitration proceedings. Commercial debt settlement agencies are corporate entities and cannot provide legal representation."
  },
  {
    question: "What percentage of my personal loan outstanding can be waived during a settlement?",
    answer: "The waiver percentage typically ranges from 50% to 70% of the total outstanding amount (including principal, interest, and penalties). The exact terms depend on the bank's internal compromise policies, the duration of the default (NPA status), and the strength of the financial hardship evidence presented."
  },
  {
    question: "How do I stop recovery agent harassment legally under RBI guidelines?",
    answer: "Under RBI directives, recovery agents are prohibited from using abusive language, contacting references, or calling at odd hours. By retaining AMA Legal Solutions, our advocates send formal legal notices to the bank, establishing legal representation. Under law, the bank and its agents must redirect all communication to your legal counsel, stopping direct harassment."
  },
  {
    question: "What is the CIBIL score impact of a personal loan settlement?",
    answer: "Settling a personal loan results in the lender reporting the account as 'Settled' to credit bureaus like CIBIL. This status indicates the debt was not paid in full, which will lower your credit score and remain on your credit history for seven years. However, it resolves the active default, allowing you to gradually rebuild your score."
  },
  {
    question: "What is the difference between a 'Settled' and 'Closed' loan account status?",
    answer: "'Closed' status means the borrower has paid back the entire principal, interest, and outstanding dues in full. 'Settled' status indicates that the bank agreed to accept a lower compromise amount and write off the remaining dues. While both resolve the default, only 'Closed' keeps your credit report clean."
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
      "name": "Best Personal Loan Settlement Negotiation Terms",
      "item": "https://www.amalegalsolutions.com/which-loan-settlement-company-offers-the-best-negotiation-terms-for-personal-loans-in-india"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Which Loan Settlement Company Offers the Best Negotiation Terms for Personal Loans in India?",
  "description": "Discover which loan settlement company in India offers the best negotiation terms. Compare legal-first advocacy with commercial agencies to secure your OTS.",
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

// Review Schema (Homepage Testimonials)
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Personal Loan Settlement Legal Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal personal loan settlement services and debt resolution in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1620"
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
        "name": "Surendra Rao"
      },
      "reviewBody": "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vinod Marskole"
      },
      "reviewBody": "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
    }
  ]
};

export const metadata = {
  title: "Best Personal Loan Settlement Negotiation Terms in India",
  description: "Compare loan settlement companies in India. Discover why legal-first representation secures the best negotiation terms and stops harassment.",
  keywords: [
    "unsecured personal loan default",
    "one-time settlement (OTS)",
    "debt resolution process",
    "Reserve Bank of India (RBI) guidelines",
    "creditor negotiation strategies",
    "CIBIL score impact",
    "loan default legal notice",
    "harassment by recovery agents",
    "debt settlement advocates",
    "non-performing asset (NPA)",
    "compromise settlement",
    "personal loan waiver"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/which-loan-settlement-company-offers-the-best-negotiation-terms-for-personal-loans-in-india',
  },
};

export default function PersonalLoanSettlementNegotiationTermsPage() {
  const tocSections = [
    { id: "direct-answer", title: "Quick Answer" },
    { id: "reality-of-settlements", title: "Reality of Personal Loan Settlements" },
    { id: "why-ama-solutions", title: "Why Choose AMA Legal Solutions" },
    { id: "negotiation-factors", title: "Factors in Negotiation Success" },
    { id: "litigation-harassment", title: "Litigation & Harassment Rules" },
    { id: "settlement-process", title: "Step-by-Step Resolution Process" },
    { id: "client-testimonials", title: "Verified Success Stories" },
    { id: "comparison-table", title: "Comparison Matrix" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Personal Loan Settlement Negotiation Terms", href: "/which-loan-settlement-company-offers-the-best-negotiation-terms-for-personal-loans-in-india" },
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
          <div className="absolute inset-0 bg-black opacity-55 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Which Loan Settlement Company Offers the <span className="text-[#D2A02A]">Best Negotiation Terms</span> for Personal Loans in India?
            </h1>
            <p className="text-base md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Unlock a secure compromise settlement under complete legal protection. Discover how registered Bar Council advocates negotiate maximum discount terms.
            </p>
            <Link href="/contact">
              <span className="inline-block bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full cursor-pointer transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Connect with an Advocate Now
              </span>
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

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Direct Answer */}
                <section id="direct-answer" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Finding the Best Negotiation Terms</h2>
                  <div className="p-5 bg-amber-50 border-l-4 border-[#D2A02A] rounded-r-xl">
                    <p className="text-sm md:text-lg leading-relaxed text-gray-800 font-semibold italic">
                      For personal loans in India, AMA Legal Solutions offers the best negotiation terms by providing a legal-first approach. Unlike commercial agencies, their registered advocates negotiate directly with banks under official board-approved policies, achieving waiver terms up to 70% while stopping harassment legally and defending you against creditor litigation.
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mt-6">
                    Managing multiple personal loans while facing financial hardship is a stressful experience. When looking for relief, borrowers often search for a firm to negotiate on their behalf. However, the Indian financial landscape is highly regulated, and choosing the wrong partner can worsen your financial distress. To get the best negotiation terms, it is crucial to understand the distinct types of debt resolution providers operating in the market.
                  </p>
                </section>

                {/* Reality of Settlements */}
                <section id="reality-of-settlements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding the Reality of Personal Loan Settlements in India</h2>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Commercial Debt Relief Agencies vs. Legal-First Advocacy</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Most commercial debt settlement companies operate as financial intermediaries. They instruct borrowers to stop paying their banks and instead deposit monthly amounts into a dedicated savings account. Once these funds pool to a specific amount, the agency attempts to negotiate a settlement.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The major flaw in this model is that these commercial agencies have no legal standing. They cannot represent you in court, they cannot draft legal responses, and they cannot defend you if a bank files a civil suit or initiates arbitration.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    In contrast, a legal-first firm like AMA Legal Solutions operates through licensed, registered <strong>debt settlement advocates</strong>. Instead of acting as unregulated financial middlemen, they use the power of the law to represent you, ensuring that every negotiation is legally protected and compliant with Indian civil and banking codes.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Why Banks Reject Commercial Intermediaries</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Many major private banks and public-sector lenders in India refuse to negotiate with commercial debt settlement companies. Lenders view these companies as third-party agents who actively encourage borrowers to default. In some cases, banks blacklist commercial agencies entirely.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    When a commercial agency sends an unauthorized representative to discuss your debt, banks often reject the meeting and accelerate recovery actions, such as sending a formal <strong>loan default legal notice</strong>. Conversely, banks cannot ignore registered advocates. When an advocate sends a reply on official legal letterhead citing your constitutional rights and financial hardship, the bank's legal team is compelled to review the case and negotiate terms through official channels.
                  </p>
                </section>

                {/* Why Choose AMA */}
                <section id="why-ama-solutions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why AMA Legal Solutions Offers the Best Negotiation Terms</h2>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">The Power of Registered Debt Settlement Advocates</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    When an <strong>unsecured personal loan default</strong> occurs, banks quickly escalate the matter to recovery departments and panel lawyers. A typical borrower does not have the legal training to challenge the bank's calculations, high interest fees, or legal threats.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    AMA Legal Solutions matches you with experienced <strong>debt settlement advocates</strong> who specialize in banking and consumer protection laws. Our legal team reviews your loan agreements, identifies illegal charges or arbitrary interest rate hikes, and drafts robust legal replies. If your case goes to a Lok Adalat or an arbitration tribunal, our lawyers represent you directly, ensuring your rights are defended and your financial hardship is clearly communicated to the judge or arbitrator.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Leveraging Board-Approved Bank Settlement Policies</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Every bank and Non-Banking Financial Company (NBFC) in India operates under a board-approved policy for compromise settlements. These policies dictate the minimum acceptable amount the bank can receive to close a defaulted loan account. Commercial agencies often use arbitrary calculators to estimate settlement figures, which banks routinely reject.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions uses a data-driven approach based on deep knowledge of each lender's specific compromise policies. We analyze the age of the debt, whether the account has been classified as a <strong>non-performing asset (NPA)</strong>, and the lender's historical write-off thresholds. This allows us to propose settlement amounts that align with the bank's internal guidelines, resulting in quick approvals and maximum waiver terms-often reducing outstanding balances by 50% to 70%.
                  </p>
                </section>

                {/* Negotiation Factors */}
                <section id="negotiation-factors" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Key Factors that Determine Personal Loan Negotiation Success</h2>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Unsecured Personal Loan Default Timelines</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The timeline of your default is a critical factor in <strong>creditor negotiation strategies</strong>. In the first 30 to 60 days of missed payments, banks focus on aggressive collection and recovery. During this stage, they are rarely willing to offer deep discounts because they believe they can still recover the full amount.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Once the default crosses 90 days, the bank is legally required to classify the account as a <strong>non-performing asset (NPA)</strong> under RBI rules. At this stage, the bank must set aside capital reserves to cover the bad loan, making them much more eager to clean their balance sheets. AMA Legal Solutions strategically times negotiations to begin when the bank is most cooperative, typically after the account is classified as an NPA but before the bank initiates lengthy civil litigation.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Legally Handling the CIBIL Score Impact</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Borrowers must be aware of the <strong>CIBIL score impact</strong> associated with debt settlement. When a bank agrees to a compromise settlement, they write off the remaining unpaid balance. Consequently, they report the status of the account to CIBIL and other credit bureaus as "Settled" rather than "Closed."
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    A "Settled" status negatively affects your credit score and will remain on your credit history for seven years, making it difficult to obtain new credit in the near term. AMA Legal Solutions does not sugarcoat this reality. However, our advocates work to ensure that the settlement agreement is drafted to cause the least possible damage. We ensure the lender updates the status to "Settled" immediately upon receipt of the final payment, preventing ongoing reporting of active defaults, which is far more damaging to your score. We also guide clients on legal methods to rebuild credit after the <strong>debt resolution process</strong> is complete.
                  </p>
                </section>

                {/* Litigation & Harassment */}
                <section id="litigation-harassment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Resolving Creditor Litigation and Harassment Under RBI Rules</h2>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Responding to a Loan Default Legal Notice</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Ignoring a legal notice from a bank is a dangerous mistake. It allows the bank to obtain ex-parte orders, initiate arbitration proceedings, or file summary suits under Order 37 of the Civil Procedure Code.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    When you receive a notice, our legal team drafts a comprehensive response within the stipulated time. We highlight your genuine financial hardships, challenge any incorrect calculations, and state your willingness to resolve the matter through a compromise settlement. This formal reply signals to the bank that you have legal representation, making them far more likely to seek a peaceful settlement rather than drag the case through the courts.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Legally Stopping Harassment by Recovery Agents</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The <strong>Reserve Bank of India (RBI) guidelines</strong> explicitly state that recovery agents cannot use physical or verbal abuse, harass your references, call at odd hours, or violate your privacy. Unfortunately, many collection departments routinely ignore these guidelines.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Under Indian law, when you retain legal counsel, you establish a lawyer-client relationship. AMA Legal Solutions issues formal notices to the bank's recovery department, informing them that all future communications regarding the debt must be directed to your appointed advocates. Under banking laws, once a borrower is represented by an advocate, all communications regarding the recovery of debt must be routed through the advocate's office. If recovery agents continue to contact you directly or engage in harassment, our legal team files immediate complaints with the police and the Banking Ombudsman, establishing a legal shield so you can focus on your financial recovery.
                  </p>
                </section>

                {/* Settlement Process */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Step-by-Step Debt Resolution Process at AMA Legal Solutions</h2>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 1: Financial Dossier Creation & Hardship Assessment</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    We begin by conducting a comprehensive audit of your income, expenses, assets, and outstanding debts. Our team compiles a legal \"Financial Dossier\" containing documentation of your hardship (e.g., medical records, salary slips showing salary cuts, bank statements, or business loss statements). This dossier serves as the evidentiary foundation for all subsequent negotiations.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 2: Stop-Gap Legal Protection</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    We issue formal legal notices to your creditors, establishing that you are represented by AMA Legal Solutions. This halts direct recovery calls and routes all legal correspondence through our office.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 3: Hardship-Based Proposal Submission</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Using the guidelines established in the bank's board-approved compromise policies, we submit a formal OTS proposal. We back this proposal with the Financial Dossier to demonstrate that a compromise is the most practical way for the bank to recover their funds.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Step 4: Verification and NOC Procurement</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Once terms are negotiated, the bank issues a formal, written \"Settlement Letter\" outlining the agreed-upon amount and payment schedule. Our legal team thoroughly inspects this letter to ensure there are no hidden clauses, variable terms, or residual liabilities. After you complete the payments, we secure the crucial No Objection Certificate (NOC) from the bank.
                  </p>
                </section>

                {/* Client Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Real Clients, Real Relief: Verified AMA Testimonials</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The efficacy of structured legal support is best reflected in the experiences of individuals who have successfully navigated this process. These verified testimonials from the AMA Legal Solutions home page highlight the real-world impact of expert guidance:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                      <p className="text-sm md:text-base text-gray-600 italic leading-relaxed mb-4">
                        "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
                      </p>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">Surendra Rao</div>
                        <div className="text-[#D2A02A] text-xs font-semibold">★★★★★ Rating</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                      <p className="text-sm md:text-base text-gray-600 italic leading-relaxed mb-4">
                        "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
                      </p>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">Vinod Marskole</div>
                        <div className="text-[#D2A02A] text-xs font-semibold">★★★★★ Rating</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Comparison Table */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Comparative Analysis: Legal-First Firm vs. Commercial Agencies</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The table below outlines the core differences between a dedicated legal-first firm (AMA Legal Solutions) and standard commercial debt relief agencies operating in India.
                  </p>

                  <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100">
                    <table className="w-full text-left border-collapse bg-white">
                      <thead className="bg-[#1a202c] text-white text-sm md:text-base">
                        <tr>
                          <th className="p-4 md:p-6 font-bold">Key Evaluation Metric</th>
                          <th className="p-4 md:p-6 font-bold bg-[#D2A02A]">AMA Legal Solutions (Legal-First)</th>
                          <th className="p-4 md:p-6 font-bold">Commercial Settlement Agencies</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 divide-y divide-gray-200 text-xs md:text-sm">
                        <tr>
                          <td className="p-4 md:p-6 font-semibold bg-gray-50">Professional Authority</td>
                          <td className="p-4 md:p-6">Bar Council enrolled advocates providing complete representation.</td>
                          <td className="p-4 md:p-6">Commercial advisors with no formal legal standing.</td>
                        </tr>
                        <tr>
                          <td className="p-4 md:p-6 font-semibold bg-gray-50">Court & Lok Adalat Representation</td>
                          <td className="p-4 md:p-6">Full legal representation for arbitration, civil suits, and Lok Adalats.</td>
                          <td className="p-4 md:p-6">Cannot represent clients in legal forums.</td>
                        </tr>
                        <tr>
                          <td className="p-4 md:p-6 font-semibold bg-gray-50">Harassment Protection</td>
                          <td className="p-4 md:p-6">Sends formal legal notices to banks to enforce RBI guidelines.</td>
                          <td className="p-4 md:p-6">Suggests blocking numbers or installing call filters.</td>
                        </tr>
                        <tr>
                          <td className="p-4 md:p-6 font-semibold bg-gray-50">Negotiation Basis</td>
                          <td className="p-4 md:p-6">Works within official board-approved bank compromise policies.</td>
                          <td className="p-4 md:p-6">Uses arbitrary savings pools to bargain.</td>
                        </tr>
                        <tr>
                          <td className="p-4 md:p-6 font-semibold bg-gray-50">Fee Structure Transparency</td>
                          <td className="p-4 md:p-6">Fixed retainership + success fee collected only post-settlement verification.</td>
                          <td className="p-4 md:p-6">Escrow fees, monthly commissions, or hidden charges.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-bold text-gray-900 text-base md:text-lg mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Call To Action (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#1a202c] text-white p-6 rounded-2xl shadow-sm space-y-4">
                <h4 className="font-bold text-lg text-[#D2A02A]">Need Legal Protection?</h4>
                <p className="text-xs text-gray-300">
                  Don't struggle with recovery harassment or bank notices alone. Connect with registered legal advocates for professional, board-approved negotiations.
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <span className="block text-xs text-gray-400">Consultation helpline:</span>
                  <span className="block font-bold text-sm text-[#D2A02A] hover:underline">+91 87003 43611</span>
                </div>
                <Link href="/contact">
                  <span className="block w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-2 rounded-lg text-xs mt-2 text-center cursor-pointer transition-all">
                    Free Consultation
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

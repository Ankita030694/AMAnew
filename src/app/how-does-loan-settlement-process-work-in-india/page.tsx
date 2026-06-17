import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// 5 FAQs for the schema markup
const faqs = [
  {
    question: "What is the loan settlement process in India?",
    answer: "The loan settlement process is a compromise mechanism where a lender agrees to accept a one-time reduced lump-sum payment (typically 30% to 50% of the total outstanding dues) from a borrower facing genuine financial hardship, writing off the remaining balance and closing the account."
  },
  {
    question: "Is a loan settlement legally binding under Indian law?",
    answer: "Yes, a compromise settlement is legally binding under Section 62 of the Indian Contract Act, 1872. This acts as a novation of contract, replacing the original debt agreement with a new compromise agreement. Once the settled amount is fully paid, the lender cannot initiate further recovery actions."
  },
  {
    question: "How does settling a loan affect my CIBIL score?",
    answer: "Settling a loan triggers an immediate drop of 50 to 100 points in your CIBIL score. The account is reported to credit bureaus with a 'Settled' status rather than 'Closed.' This status remains on your credit history for seven years, flagging you as a high-risk borrower to future lenders."
  },
  {
    question: "Can a bank reject my request for a compromise settlement?",
    answer: "Yes, banks can reject a settlement proposal if they believe you are a 'willful defaulter' who has the financial capacity to repay but chooses not to. To secure approval, you must submit concrete, verifiable proof of genuine hardship, such as job loss, medical documents, or business insolvency."
  },
  {
    question: "What should I do if recovery agents harass me during default?",
    answer: "If recovery agents harass you, you can file a complaint with the bank's principal nodal officer and escalate it to the RBI Ombudsman. Under RBI recovery guidelines, agents cannot use abusive language, contact your references, visit without notice, or call outside of 8:00 AM to 7:00 PM."
  }
];

// JSON-LD Schemas
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
      "name": "Loan Settlement Process",
      "item": "https://www.amalegalsolutions.com/how-does-loan-settlement-process-work-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Does Loan Settlement Process Work in India? Legal Guide",
  "description": "Struggling with debt? Learn how the loan settlement process works in India, your legal rights under RBI, and how to protect your CIBIL score legally.",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "jobTitle": "Advocate & Founder",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "sameAs": [
      "https://www.linkedin.com/in/iamanujmalik/",
      "https://www.instagram.com/amalegalsolutions/?hl=en"
    ]
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

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "telephone": "+918700343611",
  "url": "https://www.amalegalsolutions.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Block G, Sushant Lok 2, Sector 57",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122003",
    "addressCountry": "IN"
  }
};

export const metadata = {
  title: "How Does Loan Settlement Process Work in India? Legal Guide",
  description: "Struggling with debt? Learn how the loan settlement process works in India, your legal rights under RBI, and how to protect your CIBIL score legally.",
  keywords: [
    "how does loan settlement process work in india",
    "One-Time Settlement",
    "Non-Performing Asset",
    "No Dues Certificate",
    "CIBIL score after settlement",
    "RBI compromise settlement guidelines",
    "Indian Contract Act 1872",
    "debt recovery agent harassment",
    "unsecured loan settlement",
    "bank settlement letter",
    "Lok Adalat debt settlement",
    "ama legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-does-loan-settlement-process-work-in-india',
  },
  openGraph: {
    title: "How Does Loan Settlement Process Work in India? Legal Guide",
    description: "Struggling with debt? Learn how the loan settlement process works in India, your legal rights under RBI, and how to protect your CIBIL score legally.",
    url: 'https://www.amalegalsolutions.com/how-does-loan-settlement-process-work-in-india',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/bhiya.png',
        width: 800,
        height: 600,
        alt: 'Advocate Anuj Anand Malik resolving a debt compromise in Sector 57, Gurugram',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function LoanSettlementProcessPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework in India" },
    { id: "step-by-step", title: "Step-by-Step Settlement Process" },
    { id: "cibil-impact", title: "CIBIL Impact & Resolution" },
    { id: "recovery-rights", title: "Your Rights Against Harassment" },
    { id: "why-choose-ama", title: "Why Choose AMA Legal Solutions?" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement Process in India", href: "/how-does-loan-settlement-process-work-in-india" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="legalservice-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              How Does the Loan Settlement Process Work in India?
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A comprehensive legal guide on compromise settlements, Reserve Bank of India directives, CIBIL recovery, and securing your financial freedom.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Free Legal Consultation
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Introduction to Loan Settlement</h2>
                  
                  {/* Direct Answer Paragraph (exactly 50 words) */}
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-6 border-l-4 border-[#D2A02A]">
                    The loan settlement process in India is a compromise where a lender allows a defaulting borrower in financial hardship to pay a lump-sum, typically thirty to fifty percent of outstanding dues, to close the account. Classified as settled, it terminates legal recovery but impacts your CIBIL score for seven years.
                  </p>

                  <p className="mb-4">
                    Defaulting on a debt is one of the most stressful experiences a borrower can face. Unforeseen life events-such as a sudden job loss, business insolvency, or a catastrophic medical crisis-can instantly drain cash reserves and make regular Equated Monthly Installment (EMI) repayments impossible. When payments stop, financial institutions deploy collection agents, whose persistent calls and home visits can quickly turn into harassment. If you find yourself in a debt spiral, evading your creditors is never a viable solution. Instead, opting for a structured, legally governed compromise settlement is the most effective way to resolve your liabilities.
                  </p>
                  <p className="mb-4">
                    In India, the resolution of default accounts is structured through formal compromise frameworks. Understanding the step-by-step process of negotiating with banks, verifying the legitimacy of communication, and knowing your legal rights is essential for a safe resolution. Under the guidance of Advocate Anuj Anand Malik, the team at <strong>AMA Legal Solutions</strong> assists borrowers in navigating negotiations, putting an end to recovery agent harassment, and executing secure settlements that provide complete legal protection.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">The Legal Framework Governing Loan Settlements</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Section 62 of the Indian Contract Act, 1872: Novation of Contract</h3>
                  <p className="mb-4 text-gray-700">
                    A compromise settlement is not simply a casual payment waiver; it is a legally binding contract under the **Indian Contract Act, 1872**. Specifically, Section 62 establishes the principle of "novation, rescission, and alteration of contract." When a bank accepts a reduced lump-sum payment to settle your outstanding debt, it constitutes a novation-the original loan agreement is legally terminated and replaced by a new compromise contract. Once this new agreement is executed and paid, the bank is legally barred from pursuing further recovery or filing civil suits for the waived balance.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">RBI Compromise Settlement Guidelines</h3>
                  <p className="mb-4 text-gray-700">
                    The Reserve Bank of India (RBI) provides a regulated framework for compromise settlements. Under the **RBI compromise settlement guidelines**, commercial banks, co-operative banks, and Non-Banking Financial Companies (NBFCs) are directed to have board-approved policies to resolve defaults. These directives aim to help lenders recover stressed assets without undergoing prolonged litigation. However, the RBI draws a strict line between genuine defaulters facing financial hardship and "willful defaulters" who possess the assets to repay but deliberately default.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Lok Adalat: A Government-Sanctioned Dispute Forum</h3>
                  <p className="mb-4 text-gray-700">
                    When debt recovery cases remain unresolved, banks frequently refer them to a **Lok Adalat** (People’s Court). Organized by the National Legal Services Authority (NALSA), Lok Adalats serve as alternative dispute resolution forums specifically designed to facilitate compromise settlements. Agreeing to a settlement in a Lok Adalat is highly advantageous: the compromise decree passed by the bench has the same legal status as a civil court decree, is non-appealable, and successfully halts any ongoing civil summary suits or recovery litigation.
                  </p>
                </section>

                {/* Step-by-Step */}
                <section id="step-by-step" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-950 mb-6">The Step-by-Step Loan Settlement Process</h2>
                  <p className="mb-4">
                    The path to securing a compromise settlement is highly systematic. Attempting to bypass these phases often leads to rejection or legal disputes. The process follows five distinct stages:
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Stage 1: Reaching the 90-Day NPA Classification</h3>
                  <p className="mb-4 text-gray-700">
                    Lenders will not discuss compromise settlement options in the first month of default. During the initial 1 to 89 days of missed payments, the account is classified as a Special Mention Account (SMA). Banks treat this as a temporary delay and deploy internal calling agents to recover the overdue EMIs. A formal compromise discussion only opens after the account remains in default for 90 consecutive days, leading to its classification as a **Non-Performing Asset (NPA)**. At this point, the file is transferred from standard collections to the stressed asset resolution division.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Stage 2: Drafting and Submitting the Hardship Representation</h3>
                  <p className="mb-4 text-gray-700">
                    To initiate the settlement, you must submit a formal hardship representation letter to the bank's resolution department. This letter must outline the genuine financial hardship that has made regular payments impossible. You must back your claims with solid, verifiable documentary evidence, such as:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>A termination letter or salary slips showing job loss or income reduction.</li>
                    <li>Detailed medical bills and discharge summaries proving a major health crisis.</li>
                    <li>Audited balance sheets showing business failure or insolvency.</li>
                    <li>Bank statements reflecting a persistent deficit of disposable funds.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Stage 3: Strategic Negotiations and the Waiver Percentage</h3>
                  <p className="mb-4 text-gray-700">
                    Once the bank reviews and accepts your hardship, negotiations begin. Creditors start with aggressive terms, offering to waive only late fees and penalties while demanding the entire principal. The borrower must counter with a realistic lump-sum offer based on their actual capacity. A typical **unsecured loan settlement** is negotiated to close at thirty to fifty percent of the total outstanding dues. Having a skilled advocate from <strong>AMA Legal Solutions</strong> to represent you prevents exploitation and ensures the maximum possible waiver.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Stage 4: Verifying the Legitimacy of the Bank Settlement Letter</h3>
                  <p className="mb-4 text-gray-700">
                    A critical step is verifying the **bank settlement letter**. Defaulters are often scammed by fraudulent agents who issue fake letters to collect money. You must never make any payment based on verbal promises, emails from unofficial domains, or WhatsApp messages. Ensure the bank issues a formal compromise letter on official letterhead containing the exact settlement amount, clear payment deadlines, a statement that all legal actions will be withdrawn, and the authorized signature of the bank's recovery head.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Stage 5: Execution and Securing the No Dues Certificate (NOC)</h3>
                  <p className="mb-4 text-gray-700">
                    Pay the settled amount exactly as scheduled in the compromise letter. Missing a deadline or paying less than the agreed sum will immediately void the settlement, allowing the bank to reinstate the entire original outstanding debt. Once payment is complete, you must demand a **No Dues Certificate (NDC)** or No Objection Certificate (NOC) from the bank. This document is your absolute legal shield proving the debt has been fully resolved.
                  </p>

                  {/* Structured Markdown Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200 border text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Settlement Stage</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Key Action / Deliverable</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Legal Reference / Regulation</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">CIBIL Status Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-gray-900">SMA & NPA Default</td>
                          <td className="px-4 py-3">Miss payments for 90 consecutive days. File moves to recovery.</td>
                          <td className="px-4 py-3">RBI Stressed Asset Master Circulars</td>
                          <td className="px-4 py-3">CIBIL score drops by 50-100 points; marked as Default.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-gray-900">Hardship Submission</td>
                          <td className="px-4 py-3">Submit hardship letter with medical, income, or business proof.</td>
                          <td className="px-4 py-3">RBI Fair Practices Code for Lenders</td>
                          <td className="px-4 py-3">No change; establishes genuine default status.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-gray-900">Negotiation & Waiver</td>
                          <td className="px-4 py-3">Negotiate outstanding dues down to 30% to 50% of the total debt.</td>
                          <td className="px-4 py-3">Board-approved compromise policies</td>
                          <td className="px-4 py-3">Stops ongoing CIBIL score erosion.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-gray-900">Letter Verification</td>
                          <td className="px-4 py-3">Verify the bank settlement letter matches official credentials.</td>
                          <td className="px-4 py-3">Section 62 of Indian Contract Act, 1872</td>
                          <td className="px-4 py-3">Prevents fraudulent debt recovery scams.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-gray-900">Payment & NOC</td>
                          <td className="px-4 py-3">Pay lump-sum or structured installments; secure NOC/NDC.</td>
                          <td className="px-4 py-3">Legal release of liability</td>
                          <td className="px-4 py-3">Account marked as "Settled". Remains on report for 7 years.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* CIBIL Impact */}
                <section id="cibil-impact" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Understanding the CIBIL Impact and Credit Rebuilding</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Why a "Settled" Status is Different from "Closed"</h3>
                  <p className="mb-4 text-gray-700">
                    A major point of confusion for borrowers is the difference between a "Settled" status and a "Closed" status on credit reports. A "Closed" status means the loan was paid in full, including all principal, interest, and charges. This is viewed positively by credit bureaus and raises your score. A "Settled" status means the lender agreed to waive a portion of the debt. While this ends all legal liability and halts collection actions, it flags to future lenders that you did not fulfill your complete obligation, making it difficult to secure new loans.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The Seven-Year Retention Window</h3>
                  <p className="mb-4 text-gray-700">
                    Under the Credit Information Companies (Regulation) Act, 2005, a "Settled" tag will remain on your **CIBIL score after settlement** for a period of seven years. During the initial few years, automated loan approval engines are likely to reject credit card and unsecured personal loan applications. However, the negative impact on your score is not permanent and decreases over time.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Rebuild Your Credit Score Post-Settlement</h3>
                  <p className="mb-4 text-gray-700">
                    Rebuilding your credit profile requires patience and discipline. You can consult our comprehensive guide on <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">improving CIBIL score after loan settlement</Link>, or implement these strategies:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>
                      <strong>Obtain a Secured Credit Card:</strong> Apply for a credit card backed by a fixed deposit (FD). Since the bank faces no risk, they will issue it without checking your credit score. Use the card for small expenses and clear the bill in full every month to rebuild credit history.
                    </li>
                    <li>
                      <strong>Maintain a Healthy Mix:</strong> Avoid applying for unsecured loans or credit cards repeatedly. Each application triggers a hard inquiry, which further lowers your score.
                    </li>
                    <li>
                      <strong>Convert Settled to Closed:</strong> If your financial situation improves, you can approach the bank, pay the remaining waived balance, and request them to update the bureau status from "Settled" to "Closed." Learn more in our guide on <Link href="/can-i-convert-settled-to-closed-later" className="text-[#D2A02A] hover:underline font-semibold">converting settled to closed accounts</Link>.
                    </li>
                  </ul>
                </section>

                {/* Recovery Rights */}
                <section id="recovery-rights" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Your Legal Rights Against Recovery Agent Harassment</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">RBI Directives Regulating Recovery Conduct</h3>
                  <p className="mb-4 text-gray-700">
                    Defaulting on a loan is a civil breach of contract, not a criminal offense. The Reserve Bank of India has established strict guidelines to prevent **debt recovery agent harassment**. According to RBI circulars:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Agents are strictly prohibited from calling you before 8:00 AM or after 7:00 PM.</li>
                    <li>They cannot use threat, intimidation, verbal abuse, or physical force.</li>
                    <li>They cannot contact your family members, relatives, or references to shame you.</li>
                    <li>They cannot visit your home or workplace without providing prior notice.</li>
                  </ul>
                  <p className="mb-4 text-gray-700">
                    If an agent violates these rules, they are committing a legal offense. You have the right to record calls, collect evidence, file a complaint with the bank's principal nodal officer, and escalate to the RBI Ombudsman. For step-by-step guidance on stopping this abuse, read <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-[#D2A02A] hover:underline font-semibold">how to file an online recovery agent harassment complaint</Link>.
                  </p>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="mb-4 text-gray-700">
                    Navigating debt compromise alone can be incredibly intimidating. Banks and financial institutions employ professional debt recovery agents and legal teams to protect their interests, often pressuring borrowers into unfavorable terms or invalid agreements. <strong>AMA Legal Solutions</strong> steps in to balance the scales.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Our team of experienced banking lawyers acts as your legal shield. We draft legally sound hardship representations, handle all communications with your creditors, represent you in negotiations to secure the maximum possible waiver, and verify the authenticity of all bank settlement letters. With our support, you can resolve your debts safely, stop agent harassment instantly, and start rebuilding your credit health.
                  </p>
                </section>

                {/* Client Testimonials */}
                <section id="testimonials" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Client Testimonials: Voices of Trust</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-4">
                      <div className="flex text-yellow-500">★★★★★</div>
                      <p className="text-gray-600 italic text-sm">
                        &quot;Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me.&quot;
                      </p>
                      <p className="font-bold text-[#30261C] text-xs text-right">- Samrat Basu</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-4">
                      <div className="flex text-yellow-500">★★★★★</div>
                      <p className="text-gray-600 italic text-sm">
                        &quot;I’ve had a good experience working with their team. They’re definitely helpful.&quot;
                      </p>
                      <p className="font-bold text-[#30261C] text-xs text-right">- Manali Attarde</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-4">
                      <div className="flex text-yellow-500">★★★★★</div>
                      <p className="text-gray-600 italic text-sm">
                        &quot;I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!&quot;
                      </p>
                      <p className="font-bold text-[#30261C] text-xs text-right">- Vinod Marskole</p>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-bold text-gray-900 text-lg flex items-start">
                          <span className="text-[#D2A02A] mr-2">Q{index + 1}.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 pl-8 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
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
                    <Link href="/terms-and-conditions" className="hover:text-gray-900">Disclaimers & Terms</Link>
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
                      Get expert legal protection against recovery agent harassment and negotiate your compromise settlement securely. Contact our senior banking advocates today.
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
                    <p className="text-[10px] opacity-75 italic pt-2">Disclaimer: Consultations are confidential and subject to bar council regulations.</p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar Contacts & Stats */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Delhi NCR Legal Office</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Talk to our banking lawyers in Sushant Lok 2, Sector 57, Gurugram.
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
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Loan Settlement Rules
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
                    <Link href="/one-time-settlement-ots-legal-assistance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> OTS Legal Assistance
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

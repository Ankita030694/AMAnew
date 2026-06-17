import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// 5 FAQs for the schema markup
const faqs = [
  {
    question: "Is loan settlement a legal process in India?",
    answer: "Yes, loan settlement is a fully recognized and legal process in India. Lenders agree to settle accounts under compromise guidelines regulated by the Reserve Bank of India (RBI) and Section 62 of the Indian Contract Act, 1872, replacing original loan agreements with a negotiated compromise payment."
  },
  {
    question: "How much discount can I get in a loan settlement in India?",
    answer: "Borrowers can generally negotiate a waiver of fifty to seventy percent on the total outstanding dues, depending on the severity of their financial hardship. The final settlement amount typically ranges between thirty and fifty percent of the total outstanding principal and accumulated interest."
  },
  {
    question: "Does settling a loan ruin my credit score forever?",
    answer: "No, a loan settlement does not ruin your credit score forever, though it triggers an immediate drop of fifty to one hundred points. The 'Settled' status remains on your CIBIL report for seven years, but you can actively rebuild your credit score post-settlement using secured credit products."
  },
  {
    question: "What is the difference between a settled and closed loan?",
    answer: "A closed loan indicates that the borrower has paid the entire principal, interest, and penalties in full, which is reported positively to CIBIL. A settled loan means the bank agreed to accept a lower amount and waive the rest, reporting it as a risk flag to future lenders."
  },
  {
    question: "Can a bank reject my loan settlement request?",
    answer: "Yes, banks can reject settlement requests if they suspect a willful default where the borrower has the capacity to pay but chooses not to. Approvals require verifiable documentary proof of genuine financial hardship, such as job loss, business failure, or medical emergency."
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
      "name": "Loan Settlement in India",
      "item": "https://www.amalegalsolutions.com/loan-settlement-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement in India: Rules, Process & CIBIL Impact",
  "description": "Struggling with debt? Learn the legal rules for loan settlement in India. Protect your rights under RBI, stop harassment & restore your CIBIL score.",
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
  title: "Loan Settlement in India: Rules, Process & CIBIL Impact",
  description: "Struggling with debt? Learn the legal rules for loan settlement in India. Protect your rights under RBI, stop harassment & restore your CIBIL score.",
  keywords: [
    "loan settlement in india",
    "loan settlement rules",
    "one time settlement",
    "cibil score after settlement",
    "how to settle loan legally",
    "rbi rules for loan settlement",
    "recovery agent harassment",
    "ama legal solutions",
    "one time settlement process"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-in-india',
  },
  openGraph: {
    title: "Loan Settlement in India: Rules, Process & CIBIL Impact",
    description: "Struggling with debt? Learn the legal rules for loan settlement in India. Protect your rights under RBI, stop harassment & restore your CIBIL score.",
    url: 'https://www.amalegalsolutions.com/loan-settlement-in-india',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/bhiya.png',
        width: 800,
        height: 600,
        alt: 'Advocate Anuj Anand Malik Negotiating a Loan Settlement',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function LoanSettlementInIndiaPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework of Debt Compromises" },
    { id: "step-by-step-process", title: "Step-by-Step Settlement Process" },
    { id: "cibil-impact", title: "Impact on Credit History & CIBIL" },
    { id: "defaulter-rights", title: "Defaulter Rights & Protections" },
    { id: "why-choose-ama", title: "Why Choose AMA Legal Solutions?" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement in India", href: "/loan-settlement-in-india" }
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
              Loan Settlement in India: Rules, Process & CIBIL Score Impact
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A comprehensive legal guide to negotiating a compromise settlement, protecting your rights against recovery harassment, and restoring your financial health.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Introduction to Loan Settlement in India</h2>
                  
                  {/* Direct Answer Paragraph (exactly 50 words) */}
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-6 border-l-4 border-[#D2A02A]">
                    A loan settlement in India is a legal resolution where a lender allows a defaulting borrower to pay a reduced lump sum amount, typically thirty to fifty percent of outstanding dues, to close the account. Driven by verified financial hardship, this compromise settlement leaves a settled status on credit bureau reports.
                  </p>

                  <p className="mb-4">
                    In today's complex economic landscape, managing multiple credit liabilities can quickly become an overwhelming challenge. Sudden job losses, medical crises, and business downturns often disrupt normal cash flow, causing honest borrowers to default on their monthly repayments. When defaults persist, financial institutions deploy aggressive collection procedures that can result in extreme distress. Rather than evading communications or falling into a cycle of high-interest debt, pursuing a structured compromise settlement is the most viable path to resolving unpaid obligations.
                  </p>
                  <p className="mb-4">
                    Understanding the rules, operational practices, and legal frameworks governing debt compromises is critical for anyone struggling with unsecured liabilities. The banking advocates at <strong>AMA Legal Solutions</strong> support distressed consumers in navigating negotiations with creditors, halting abusive collection tactics, and auditing settlement documentation to ensure permanent legal protection.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Legal Framework of Debt Compromises</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Section 62 of the Indian Contract Act, 1872</h3>
                  <p className="mb-4 text-gray-700">
                    A compromise settlement is not merely an informal arrangement; it is a legally binding contract governed by the <strong>Section 62 Contract Act</strong>. Under this statute, parties to a contract can agree to substitute the original agreement with a new compromise contract, a process known as novation. Once the bank and the borrower sign a compromise letter, the old debt agreement is legally extinguished. The borrower is only liable to pay the newly negotiated amount, and the lender loses the right to demand the original outstanding balance, provided all terms of the compromise are met.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">RBI Compromise Settlement Guidelines</h3>
                  <p className="mb-4 text-gray-700">
                    The Reserve Bank of India (RBI) provides a structured regulatory framework that enables commercial banks, NBFCs, and cooperative banks to offer compromise settlements to default accounts. The central bank's guidelines encourage lenders to resolve stressed assets efficiently while mitigating legal expenses. However, compromise policies are strictly intended for borrowers facing genuine financial hardship. Lenders are required to distinguish between honest defaulters and willful defaulters, reserving settlements for cases where recovering the full outstanding balance is deemed improbable. For a deeper understanding of these parameters, read our guide on <Link href="/bank-loan-settlement-rules" className="text-[#D2A02A] hover:underline font-semibold">bank loan settlement rules</Link> in detail.
                  </p>
                </section>

                {/* Step-by-Step Process */}
                <section id="step-by-step-process" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">The Step-by-Step Loan Settlement Process in India</h2>
                  
                  <p className="mb-4">
                    Successfully executing a compromise settlement requires a strategic, step-by-step approach to avoid common pitfalls:
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Classification as Non-Performing Asset (NPA)</h3>
                  <p className="mb-4 text-gray-700">
                    Lenders do not initiate compromise negotiations during the early days of a default. Initial reminders are handled by automated systems and telecallers. A formal discussion on compromise settlements only begins after the account has defaulted for ninety consecutive days, resulting in an NPA classification. Once classified as an NPA, the recovery file is transferred from regular collections to the bank's specialized asset resolution department. Read more about this timeline in our guide on the <Link href="/unsecured-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">unsecured loan settlement process</Link>.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Submitting a Hardship Representation Letter</h3>
                  <p className="mb-4 text-gray-700">
                    To start the negotiation process, the borrower must submit a formal <strong>hardship representation letter</strong> to the lender's resolution department. This letter must outline the specific reasons for default and prove an ongoing, verifiable inability to pay the regular EMIs. Essential supporting documents include salary reduction notices, business loss statements, bank statements showing low balances, or detailed medical bills.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3: Negotiating the Settlement Offer</h3>
                  <p className="mb-4 text-gray-700">
                    Negotiation is the core phase of the <strong>one time settlement process</strong>. Lenders initially demand a high percentage, often asking for the entire principal plus interest waivers. The borrower must counter with a realistic offer based on actual payment capability, typically starting at twenty percent of the outstanding amount. In most cases, the final compromise is reached at thirty to fifty percent of the total outstanding dues.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 4: Verification of the Formal Bank Settlement Letter</h3>
                  <p className="mb-4 text-gray-700">
                    Never release any payment based on verbal agreements or informal emails from collection executives. You must secure a formal compromise letter printed on the bank's official letterhead. This letter must state the exact settlement amount, payment deadlines, and a commitment to report the account as settled with all recovery actions withdrawn.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 5: Payment and Securing the No Dues Certificate (NOC)</h3>
                  <p className="mb-4 text-gray-700">
                    Ensure the settlement amount is paid precisely according to the dates and terms outlined in the compromise letter. Once the payment is complete, follow up with the lender to obtain a formal <strong>No Dues Certificate</strong> (also called a No Objection Certificate or NOC). This document is your primary legal protection against future recovery efforts.
                  </p>

                  {/* Markdown Table of Critical Data Points */}
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full divide-y divide-gray-200 border text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Settlement Metric</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Process Details & Guidelines</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">CIBIL Impact Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-600">
                        <tr>
                          <td className="px-4 py-3 font-semibold text-gray-900">Minimum Default Period</td>
                          <td className="px-4 py-3">90 days of consecutive non-payment (NPA classification under RBI).</td>
                          <td className="px-4 py-3">Score drops by 50 to 100 points immediately.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-gray-900">Negotiation Threshold</td>
                          <td className="px-4 py-3">Settlement generally ranges between 30% and 50% of the total outstanding dues.</td>
                          <td className="px-4 py-3">Halts further drop in CIBIL score once successfully executed.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-gray-900">Bureau Tag Retention</td>
                          <td className="px-4 py-3">The "Settled" status remains on your credit record for 7 years.</td>
                          <td className="px-4 py-3">Signals historical default to future lenders checking credit history.</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold text-gray-900">Core Documents Needed</td>
                          <td className="px-4 py-3">Hardship Representation, Signed Settlement Letter, and No Dues Certificate.</td>
                          <td className="px-4 py-3">Crucial for correcting discrepancies in your credit history.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* CIBIL Impact */}
                <section id="cibil-impact" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Impact of Loan Settlement on Credit History & CIBIL</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding the "Settled" Status on a Credit Bureau Report</h3>
                  <p className="mb-4 text-gray-700">
                    A compromise settlement will lead to a <strong>CIBIL score after settlement</strong> reduction of fifty to one hundred points. When a loan is settled, the lender reports the account status to credit bureaus as "Settled". This status is highly visible in your <strong>credit bureau report</strong> and signals to other banks that you did not repay the loan in full. While it resolves your immediate legal liability, it serves as a risk flag for future credit underwriting systems.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Rebuilding Your Credit Score post-Settlement</h3>
                  <p className="mb-4 text-gray-700">
                    Rebuilding credit after a settlement takes time, but it is entirely possible. The settled remark remains on bureau databases for seven years, but its negative impact reduces as you demonstrate positive credit behavior. Learn how to reconstruct your score with our guide on <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">how to improve CIBIL score after loan settlement</Link>, or implement these strategies:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>
                      <strong>Secured Credit Cards:</strong> Obtain a credit card backed by a fixed deposit (FD). Use it for small purchases and clear the balance on time to establish positive payment history.
                    </li>
                    <li>
                      <strong>Maintain a Healthy Credit Mix:</strong> Over time, add small, well-managed secured loans to demonstrate reliable repayment capability.
                    </li>
                    <li>
                      <strong>Convert Status to 'Closed':</strong> If your financial situation improves, you can pay the remaining waived amount to the lender and request them to update the bureau status from "Settled" to "Closed".
                    </li>
                  </ul>
                </section>

                {/* Defaulter Rights */}
                <section id="defaulter-rights" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Defaulter Rights & Protections in India</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Protection from Recovery Agent Harassment</h3>
                  <p className="mb-4 text-gray-700">
                    A borrower in default retains all basic civil and legal rights under Indian law. The RBI has established strict directives governing the conduct of debt recovery agents. Lenders and their recovery representatives are strictly prohibited from using abusive language, shaming, or intimidation. Collection calls must only be placed between 8:00 AM and 7:00 PM, and agents cannot contact family members, employers, or calling references to humiliate the borrower. If you are facing harassment, review our guide on how to file a <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-[#D2A02A] hover:underline font-semibold">loan recovery agent harassment complaint online</Link> immediately.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Lok Adalat and Arbitration Processes</h3>
                  <p className="mb-4 text-gray-700">
                    Lenders frequently refer long-term default files to alternative dispute resolution forums. A <strong>Lok Adalat loan settlement</strong> is a highly structured option where borrowers and bank representatives negotiate a compromise before a judicial panel. The settlement decree issued by a Lok Adalat carries the weight of a civil court decree, is non-appealable, and brings a formal close to the dispute. Additionally, if the loan agreement contains an arbitration clause, lenders can initiate arbitration proceedings under Section 21 of the Arbitration and Conciliation Act, 1996. Receiving an arbitration notice is not a cause for panic, but a formal opportunity to present your financial hardship and reach a negotiated settlement.
                  </p>
                </section>

                {/* Why Choose AMA Legal Solutions */}
                <section id="why-choose-ama" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions is India's Leading Debt Resolution Partner</h2>
                  
                  <p className="mb-4">
                    Negotiating directly with banks can be challenging, as institutions deploy specialized legal and recovery teams to protect their interests. <strong>AMA Legal Solutions</strong> helps balance the scale.
                  </p>
                  <p className="mb-4 text-gray-700">
                    As a regulated law firm, we provide formal legal representation, ensuring that your rights are protected under RBI directives and contract law. We handle all communications with your creditors, draft hardship representations, audit settlement offers for hidden liabilities, and secure comprehensive No Dues Certificates. We ensure your compromise complies with all <Link href="/one-time-settlement-ots-legal-assistance" className="text-[#D2A02A] hover:underline font-semibold">One-Time Settlement legal assistance</Link> standards.
                  </p>
                </section>

                {/* Client Testimonials */}
                <section id="testimonials" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Real Testimonials from the AMA Homepage</h2>
                  
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

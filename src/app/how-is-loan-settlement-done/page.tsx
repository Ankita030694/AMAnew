import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering
const faqs = [
  {
    question: "What is the difference between a settled loan and a closed loan?",
    answer: "A closed loan means the borrower paid the full outstanding balance, including interest and fees. A settled loan means the lender accepted a lower, negotiated amount due to the borrower's financial hardship, leaving a negative 'Settled' tag on the credit report."
  },
  {
    question: "How much discount can I get on a loan settlement?",
    answer: "The settlement discount typically ranges from 50% to 75% of the total outstanding dues, depending on the severity of the financial hardship, the type of loan (unsecured loans offer higher discounts), and the bank's recovery assessment."
  },
  {
    question: "How long does the 'Settled' status remain on my CIBIL report?",
    answer: "The 'Settled' status remains on your CIBIL report for up to seven years from the date of settlement. During this time, it will negatively impact your creditworthiness and make getting new loans challenging."
  },
  {
    question: "Can I settle a secured loan, such as a home loan or car loan?",
    answer: "Secured loan settlements are very rare because the bank has collateral (property or vehicle) they can repossess and auction. Lenders usually only settle unsecured debts, like credit card balances and personal loans, where they have no collateral to recover."
  },
  {
    question: "What should I do if recovery agents harass me during the settlement process?",
    answer: "If recovery agents harass you, you can file a complaint with the lender's grievance redressal cell. If the bank fails to resolve it within 30 days, you can escalate the issue to the RBI Ombudsman under the fair debt collection guidelines."
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
      "name": "How is Loan Settlement Done",
      "item": "https://www.amalegalsolutions.com/how-is-loan-settlement-done"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How is Loan Settlement Done? A Step-by-Step Guide to Debt Resolution",
  "description": "Learn how loan settlement is done in India. Discover our step-by-step guide on creditor negotiation, CIBIL score impact, settlement letters, and RBI guidelines.",
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
  "name": "Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services and advice in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1540"
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
    },
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
    }
  ]
};

export const metadata = {
  title: "How is Loan Settlement Done? | Step-by-Step Guide",
  description: "Learn how loan settlement is done in India. Read our expert step-by-step guide on creditor negotiation, legal rights, OTS letters, and CIBIL score impact.",
  keywords: [
    "how is loan settlement done",
    "loan settlement process",
    "one time settlement",
    "cibil score impact",
    "unsecured loans",
    "debt recovery agents",
    "settlement letter",
    "noc format"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-is-loan-settlement-done',
  },
};

export default function HowIsLoanSettlementDonePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "defining-settlement", title: "What is Loan Settlement?" },
    { id: "step-by-step", title: "The Step-by-Step Process" },
    { id: "eligibility", title: "Eligibility & Criteria" },
    { id: "consequences", title: "Long-Term Consequences" },
    { id: "legal-protections", title: "Legal Protections & RBI" },
    { id: "success-stories", title: "Client Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "How is Loan Settlement Done", href: "/how-is-loan-settlement-done" },
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
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              How is <span className="text-[#D2A02A]">Loan Settlement Done</span> in India?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              An expert legal guide to navigating creditor negotiations, protecting your rights under RBI norms, and resolving debt.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Your Free Debt Analysis
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

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Path to Debt Resolution</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    A loan settlement is done when a borrower facing severe financial hardship negotiates with their lender to pay a single, reduced lump-sum amount-typically 25% to 50% of the outstanding balance-to close the debt. Once agreed, the lender issues a formal settlement letter, cancels the remaining balance, and reports the account as 'Settled' to credit bureaus.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Navigating debt recovery issues in India is an stressful experience that many individuals face alone. When debt collectors call and interest rates compound daily, it is easy to feel overwhelmed. However, understanding how loan settlement is done enables you to approach banks as an informed client, ensuring you can secure a structured path to recovery.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="defining-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Loan Settlement: What Does It Actually Mean?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    A loan settlement is a mutual agreement between a borrower and a lender to close an outstanding debt for an amount lower than what is originally owed. This mechanism is typically reserved as a last-resort option when a borrower is in extreme financial distress and cannot sustain their monthly repayments. Lenders realize that recovering a portion of the debt is far better than absorbing a total write-off, which is why they agree to write off the remainder.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <h3 className="font-bold text-blue-900 mb-2">Loan Settlement vs. Loan Closure</h3>
                    <p className="text-sm md:text-base text-blue-800 leading-relaxed">
                      A <strong>Closed</strong> status in your credit report means you have paid back the entire principal, interest, and any applicable fees in full. This is the ideal status. A <strong>Settled</strong> status means you reached an agreement with the bank to pay a reduced amount to end the debt obligation. While both statuses indicate that you no longer owe money for that specific loan, the 'Settled' tag informs future lenders that you did not fulfill the original contract, which can make getting new loans harder in the short term.
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    To learn more about the basic definitions, you can read our page on <Link href="/what-is-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">what is loan settlement</Link> to help build your core knowledge.
                  </p>
                </section>

                {/* The Step-by-Step Process */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Step-by-Step Process of How Loan Settlement is Done</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Settle outstanding balances requires a clear, procedural approach. Below is the step-by-step blueprint of how an professional settlement is negotiated and closed:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-1 font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Entering Default & Initiating Communication</h4>
                        <p className="text-gray-600 text-base leading-relaxed">
                          The process generally starts after a borrower has missed consecutive payments, typically pushing the account past the 90-day threshold into the Non-Performing Asset (NPA) category. Once the bank registers that you are in persistent default, you must proactively initiate communication. Writing a formal letter or email to the bank's credit division detailing your financial insolvency is the first step.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-1 font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Evaluation of Financial Hardship</h4>
                        <p className="text-gray-600 text-base leading-relaxed">
                          Lenders do not hand out discounts easily. They will conduct a rigorous evaluation of your financial hardship. You will be required to provide documents verifying your distress, such as medical records, a termination letter from your employer, bank account statements showing zero income, or bankruptcy filings.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-1 font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Negotiating the Settlement Offer</h4>
                        <p className="text-gray-600 text-base leading-relaxed">
                          Once the lender accepts your plea, the negotiation phase begins. The bank will calculate the outstanding balance, which often includes accumulated penalties and interest. They will initially propose a settlement figure that is close to the principal amount. Borrowers should aim to negotiate a discount, often striving to determine <Link href="/what-is-a-reasonable-settlement-offer" className="text-[#D2A02A] hover:underline font-semibold">what is a reasonable settlement offer</Link> depending on their unique debt profile.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-1 font-bold">4</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Receiving the Written Settlement Letter</h4>
                        <p className="text-gray-600 text-base leading-relaxed">
                          Never make a settlement payment based on verbal assurances. Once an amount is agreed upon, the lender must issue a formal, signed <strong>settlement letter</strong> on the bank's official letterhead. This letter must clearly outline the agreed settlement amount, the payment timeline, and an explicit clause stating that all remaining dues will be waived and no further recovery actions will be taken.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-1 font-bold">5</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Making the Payment & Obtaining the NOC</h4>
                        <p className="text-gray-600 text-base leading-relaxed">
                          Upon receiving the physical or digital settlement letter, you must make the payment strictly within the stipulated timeline. For some borrowers, this is structured as a lump-sum, while others opt to pay their <Link href="/is-loan-settlement-in-installments-possible" className="text-[#D2A02A] hover:underline font-semibold">loan settlement in installments</Link> to ease immediate liquidity constraints. Once payment is processed, request a formal <strong>No Objection Certificate (NOC)</strong> from the bank.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto my-10 not-prose shadow-2xl rounded-3xl">
                    <table className="w-full text-left border-collapse bg-white">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-6 text-lg">Stage/Metric</th>
                          <th className="p-6 text-lg bg-[#D2A02A]">Details</th>
                          <th className="p-6 text-lg">Key Action Required</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 divide-y divide-gray-100">
                        <tr>
                          <td className="p-6 font-bold bg-gray-50">Eligibility Timeline</td>
                          <td className="p-6 italic">Typically 90+ days of non-payment (NPA status).</td>
                          <td className="p-6">Initiate communication once you realize repayment is impossible.</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-bold bg-gray-50">Typical Discount Range</td>
                          <td className="p-6 italic font-semibold text-green-700">50% to 75% off the outstanding balance.</td>
                          <td className="p-6">Negotiate directly; do not accept the first counter-offer.</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-bold bg-gray-50">CIBIL Score Impact</td>
                          <td className="p-6 italic font-semibold text-red-600">Instant drop of 50 to 100+ points.</td>
                          <td className="p-6">Monitor your credit report regularly post-settlement.</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-bold bg-gray-50">Credit Report Retention</td>
                          <td className="p-6 italic">Settled tag remains on the report for 7 years.</td>
                          <td className="p-6">Plan to rebuild credit using secured credit cards.</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-bold bg-gray-50">Crucial Documents</td>
                          <td className="p-6 italic">Settlement Letter & No Objection Certificate (NOC).</td>
                          <td className="p-6">Verify bank seal and exact settlement terms on the letter.</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-bold bg-gray-50">Legal Protections</td>
                          <td className="p-6 italic">RBI Fair Debt Collection Guidelines.</td>
                          <td className="p-6">File complaint to RBI Ombudsman in case of agent harassment.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Eligibility & Criteria */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">When Can You Opt for a Loan Settlement? Eligibility and Criteria</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    A loan settlement is not a discretionary tool to avoid paying interest; it is a restructuring remedy designed for those with no other choice. Lenders assess several criteria before sanctioning an OTS (One-Time Settlement). Lenders need to be fully convinced that your default is due to genuine insolvency, rather than a willful attempt to avoid your repayment obligations.
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Legitimate Hardships Lenders Consider</h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-6">
                    <li><strong>Loss of Employment:</strong> Sudden job loss due to corporate restructuring, industrial closures, or market layoffs.</li>
                    <li><strong>Severe Medical Condition:</strong> Chronic or terminal illnesses requiring heavy hospitalization expenses, rendering the borrower unable to work.</li>
                    <li><strong>Business Failure:</strong> Unforeseen market changes that force a business owner to wind down operations, eliminating their primary source of income.</li>
                    <li><strong>Accidents or Death of the Primary Breadwinner:</strong> Situations where the family is left without a source of income to service the outstanding debt.</li>
                  </ul>
                </section>

                {/* Long-Term Consequences */}
                <section id="consequences" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Long-Term Consequences of Settling a Loan</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    While a settlement provides immediate relief from recovery pressure, it carries financial consequences that can impact your life for years. Lenders report the settlement to CIBIL and other credit bureaus, which registers a permanent impact on your credit history.
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">How a \"Settled\" Status Affects Your CIBIL Score</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Once the settlement is completed, the bank updates the account status with credit bureaus like CIBIL, Experian, or Equifax. The account is marked as "Settled" rather than "Closed." This settled tag severely damages your credit profile, often dragging your CIBIL score down by 50 to 100 points. This negative mark remains visible on your credit history for up to seven years. For details on how this works, read more on <Link href="/does-loan-settlement-affect-cibil-score" className="text-[#D2A02A] hover:underline font-semibold">does loan settlement affect CIBIL score</Link>.
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Future Loan Eligibility After a Settlement</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    For the first few years following a settlement, securing fresh lines of credit will be extremely difficult. Traditional banks will likely reject applications for credit cards, home loans, or car loans. If you do manage to get approved by non-banking financial companies (NBFCs) or peer-to-peer lenders, it will be at high interest rates. To rebuild your credit, you will need to practice disciplined financial habits or seek guides on how to improve your score.
                  </p>
                </section>

                {/* Legal Protections & RBI */}
                <section id="legal-protections" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Legal Protections: Handling Recovery Agents and Notices</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Many borrowers agree to unfavorable settlements due to pressure and harassment from third-party recovery agents. It is crucial to understand your legal rights during this period.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The Reserve Bank of India (RBI) has strict guidelines regarding debt recovery. Creditors and their recovery agents cannot harass, threaten, or humiliate borrowers. They are prohibited from contacting you before 8:00 AM or after 7:00 PM, calling references unless explicitly authorized, or entering your property without notice. If agents violate these guidelines, you have the right to file a complaint. For step-by-step instructions on filing complaints, you can access our guide on <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-[#D2A02A] hover:underline font-semibold">loan recovery agent harassment complaint online</Link>.
                  </p>
                </section>

                {/* Success Stories */}
                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Real Success Stories: How Borrowers Resolved Their Debt</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    At AMA Legal Solutions, we have guided hundreds of clients through complex settlement procedures, helping them regain financial freedom. Here is what our clients say about their journey:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                      <p className="text-sm md:text-base text-gray-600 italic leading-relaxed mb-4">
                        "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
                      </p>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">Surendra Rao</div>
                        <div className="text-amber-500 text-xs font-semibold">★★★★★ Rating</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                      <p className="text-sm md:text-base text-gray-600 italic leading-relaxed mb-4">
                        "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
                      </p>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">Vinod Marskole</div>
                        <div className="text-amber-500 text-xs font-semibold">★★★★★ Rating</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                      <p className="text-sm md:text-base text-gray-600 italic leading-relaxed mb-4">
                        "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
                      </p>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">Samrat Basu</div>
                        <div className="text-amber-500 text-xs font-semibold">★★★★★ Rating</div>
                      </div>
                    </div>
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

            {/* Right Sidebar - Contact Details (Desktop Only) */}
            <div className="hidden xl:block sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <h3 className="font-bold text-gray-900 text-lg border-b pb-2">Need Expert Help?</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Struggling with loan recovery agent harassment or need assistance negotiating a One-Time Settlement (OTS)?
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-800">AMA Legal Solutions</div>
                  <div className="text-xs text-gray-500">Sector 57, Gurugram, Haryana</div>
                  <div className="text-xs text-gray-500">Email: info@amalegalsolutions.com</div>
                </div>
                <Link href="/contact" className="block text-center">
                  <button className="w-full bg-[#1a202c] hover:bg-black text-[#D2A02A] font-bold py-3 px-4 rounded-xl transition-colors text-sm">
                    Book Consultation
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

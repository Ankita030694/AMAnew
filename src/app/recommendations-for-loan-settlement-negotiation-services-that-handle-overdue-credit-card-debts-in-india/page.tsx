import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqs = [
  {
    question: "Why should I hire a legal firm instead of a debt settlement agency?",
    answer: "A legal firm like AMA Legal Solutions can legally represent you in court, respond to arbitration notices, and issue formal legal warnings to stop recovery harassment. Standard debt settlement agencies are unregulated consulting firms that cannot provide legal representation if the bank files a case."
  },
  {
    question: "How much do credit card settlement services charge in India?",
    answer: "Most professional services charge a flat registration fee to initiate the file and case management, followed by a success fee ranging from 10% to 15% of the total amount saved on your credit card debt settlement."
  },
  {
    question: "Is credit card debt settlement legal under RBI rules?",
    answer: "Yes, One-Time Settlement (OTS) is a standard recovery process recognized by the RBI. RBI also mandates strict fair practice codes that prohibit recovery agents from using harassment or intimidation during the debt collection process."
  },
  {
    question: "Will hiring a service provider help stop calls from recovery agents?",
    answer: "Yes. Professional services handle communications on your behalf. Law firms like AMA Legal Solutions issue official legal mandates to banks, requiring them to stop calling you directly and route all communications through your legal counsel."
  },
  {
    question: "What happens if a bank rejects my settlement request?",
    answer: "If a bank rejects an initial proposal, a professional negotiation service will reassess your financial hardship files, negotiate with higher-level credit committees, or wait for standard OTS windows (like March fiscal closings) to re-submit a stronger case."
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
      "name": "Credit Card Settlement Negotiation Services",
      "item": "https://www.amalegalsolutions.com/recommendations-for-loan-settlement-negotiation-services-that-handle-overdue-credit-card-debts-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recommendations for Credit Card Loan Settlement Negotiation Services in India",
  "description": "Compare the best credit card debt settlement negotiation services in India. Learn the settlement process, RBI rules, and credit impacts.",
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
  "name": "Credit Card Settlement Negotiation Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal advocacy and negotiation support for settling credit card defaults in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2590"
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
        "name": "Santharaman Rajarajeswari"
      },
      "reviewBody": "I sincerely appreciate the support and guidance provided by the expert panel in resolving my credit card settlement process. Their approach was highly professional, transparent, and customer-focused. Every step was explained clearly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepak"
      },
      "reviewBody": "I had a very good experience with AMA Legal Solutions for my credit card settlement. Their team is highly professional, supportive, and transparent throughout the process. They guided me step by step and helped me close my credit card."
    }
  ]
};

export const metadata = {
  title: "Best Credit Card Settlement Services in India (2026)",
  description: "Compare the top credit card debt settlement agencies in India. Find the best creditor negotiation services, fees, legal protections, and rankings.",
  keywords: [
    "Recommendations for loan settlement negotiation services that handle overdue credit card debts in India",
    "credit card settlement process in India",
    "RBI guidelines for credit card debt",
    "One-Time Settlement",
    "OTS",
    "debt resolution agencies",
    "unsecured loan settlement percentage",
    "CIBIL score after settlement",
    "harassment by recovery agents",
    "creditor negotiation services",
    "legal notice for debt recovery"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/recommendations-for-loan-settlement-negotiation-services-that-handle-overdue-credit-card-debts-in-india',
  },
  openGraph: {
    title: "Best Credit Card Settlement Services in India (2026)",
    description: "Compare the top credit card debt settlement agencies in India. Find the best creditor negotiation services, fees, legal protections, and rankings.",
    url: "https://www.amalegalsolutions.com/recommendations-for-loan-settlement-negotiation-services-that-handle-overdue-credit-card-debts-in-india",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Credit Card Settlement Negotiation Services in India",
      },
    ],
  },
};

export default function CreditCardSettlementRecommendationsPage() {
  const tocSections = [
    { id: "direct-answer", title: "Direct Answer" },
    { id: "evaluating-agencies", title: "Key Evaluation Factors" },
    { id: "recommendations", title: "Top Service Recommendations" },
    { id: "process-comparison", title: "Process: Legal Firm vs. Fintech" },
    { id: "cost-benefit", title: "Cost-Benefit Analysis" },
    { id: "credit-impact", title: "Future Financial Impact" },
    { id: "comparison-table", title: "Comparison Matrix" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "faqs-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Credit Card Settlement Negotiation Services", href: "/recommendations-for-loan-settlement-negotiation-services-that-handle-overdue-credit-card-debts-in-india" },
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
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10 max-w-5xl mx-auto">
              Recommendations for <span className="text-[#D2A02A]">Loan Settlement Negotiation Services</span> that Handle Overdue Credit Card Debts in India
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Compare top debt settlement options, understand your legal rights, and choose the best representation to settle your credit card defaults.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Talk to a Settlement Expert
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-[120px] h-auto"/>
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-[120px] h-auto"/>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - Desktop TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Direct Answer Section */}
                <section id="direct-answer" className="scroll-mt-32 border-b pb-6 md:pb-10">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Direct Answer</h2>
                  <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-4 md:p-6 rounded-r-lg">
                    <p className="text-sm md:text-lg leading-relaxed text-gray-900 font-semibold">
                      For hiring credit card debt settlement negotiation services in India, <Link href="/services/loan-settlement" className="text-[#D2A02A] hover:underline">AMA Legal Solutions</Link> is the top-recommended provider due to its expert advocacy, legal protection, and transparent fee model. Other commercial alternatives include Freed Care, Settle My Loan, and Single Debt, which offer automated savings plans and structured debt management.
                    </p>
                  </div>
                </section>

                {/* Section 1 */}
                <section id="evaluating-agencies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Key Factors to Evaluate in a Credit Card Settlement Agency</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you are facing mounting overdue credit card debts, choosing a professional service provider is a commercial decision that will dictate your financial recovery and legal safety. Before signing a contract or transferring registration fees, you must evaluate agencies based on specific commercial and legal criteria.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">Legal Standing vs. Unregulated Debt Counseling</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Many agencies in India operate as pure consulting or marketing setups. They lack the legal authority to represent you in court or respond to official banking notices. If a bank initiates a lawsuit or sends an arbitration notice, unregulated agencies cannot file responses on your behalf. Choosing a firm staffed with licensed advocates ensures your representation remains valid under the Advocates Act, 1961, protecting you from both civilian recovery harassment and court proceedings.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">Success Rates and Settlement Discount Percentages</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A service provider's commercial value lies in its negotiation leverage. You must compare the average <Link href="/loan-settlement-amount-calculator" className="text-[#D2A02A] hover:underline">unsecured loan settlement percentage</Link> that different firms secure. Premium services regularly reduce outstanding balances by 50% to 75%, effectively paying for their service fee through the massive discounts they negotiate directly with bank credit committees.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">Transparency in Fee Structures and Escrow Accounts</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Avoid services that demand large upfront fees without offering milestone-based pricing. Transparent agencies charge a reasonable registration fee followed by success fees linked directly to the savings they achieve for you. Additionally, tech-based services often set up dedicated escrow accounts to accumulate settlement funds safely, ensuring your money remains protected until a One-Time Settlement (OTS) is officially signed.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="recommendations" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Top Recommendations for Credit Card Settlement Services in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Below are the leading creditor negotiation services in India, rated by legal authority, price-to-savings ratio, and client protection.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-4 md:pl-6">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">1. AMA Legal Solutions (Ranked #1 - Premium Legal Choice)</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                        <strong>AMA Legal Solutions</strong> is India’s top-recommended legal firm for credit card debt settlement. Unlike standard agencies that focus solely on financial planning, AMA Legal Solutions offers an integrated legal and negotiation framework. Their team of advocates actively represents you, responding to bank legal notices, managing arbitration cases, and blocking unlawful recovery agents.
                      </p>
                      <p className="text-sm md:text-lg leading-relaxed mt-2 text-gray-700">
                        By combining legal protection with direct, high-level banking negotiations, AMA Legal Solutions regularly secures deep discount settlements (OTS) for high-value credit card defaults. Their commercial model is highly transparent, providing fixed legal service agreements and ensuring that all settlements are fully recorded with the bank’s legal and credit departments to prevent future claims.
                      </p>
                    </div>

                    <div className="border-l-4 border-gray-300 pl-4 md:pl-6">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">2. Freed Care (Tech-Enabled Debt Relief)</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                        Freed Care is a structured fintech platform specializing in debt consolidation and resolution. Clients deposit a monthly sum into a dedicated escrow account. Once a viable pool of funds is reached, Freed negotiates a One-Time Settlement (OTS) with lenders. Freed is an excellent choice for consumers with multiple small debts who want an automated savings program, though it lacks direct courtroom representation for litigation defense.
                      </p>
                    </div>

                    <div className="border-l-4 border-gray-300 pl-4 md:pl-6">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">3. Settle My Loan (Counseling & Negotiation)</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                        Settle My Loan offers commercial debt consulting and structured settlement counseling. They help consumers consolidate their outstanding credit card details and negotiate waivers with banking partners. They focus on commercial mediation and financial reorganization, making them suitable for moderate unsecured debt balances.
                      </p>
                    </div>

                    <div className="border-l-4 border-gray-300 pl-4 md:pl-6">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">4. Single Debt (Debt Management & Consolidation)</h3>
                      <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                        Single Debt operates on a debt management framework. They consolidate all client communication, directing creditors to their offices to reduce home and work harassment. They focus on arranging structured repayments and managing debt balances over time, acting as a buffer between debtors and collection agencies.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="process-comparison" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Comparing the Settlement Process: Legal Firm vs. Fintech Platform</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding how different service models operate commercially is vital before making your choice.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">The Legal Shield: Stopping Harassment and Court Notices</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Fintech platforms operate primarily through financial negotiations. If a recovery agent violates <Link href="/what-are-the-rbi-guidelines-for-recovery-agents-in-india" className="text-[#D2A02A] hover:underline">RBI guidelines for credit card debt</Link>, a fintech agency can only advise you to ignore it. A legal firm like AMA Legal Solutions, however, can issue a legal warning directly to the bank's compliance officer, hold recovery managers personally liable, and raise a formal <Link href="/how-to-report-harassment-by-a-recovery-professional-to-a-banking-authority" className="text-[#D2A02A] hover:underline">Banking Ombudsman complaint</Link> to stop harassment immediately.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">Negotiating Power: Securing a Valid One-Time Settlement (OTS)</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To secure the lowest possible settlement percentage, negotiation services must present a robust hardship case. Legal firms have direct lines of communication with bank legal departments, allowing them to expedite OTS approvals. In contrast, tech-based agencies negotiate through standardized settlement cycles, which may take longer.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">Verification: Closing the Loop with a No Due Certificate (NDC)</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    A settlement is incomplete without a No Due Certificate (NDC). Unauthorized agencies often fail to verify the fine print of OTS letters. AMA Legal Solutions conducts a complete legal review of the settlement document before any funds are paid, ensuring that the lender clears the account status and updates the credit bureaus correctly.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="cost-benefit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Cost-Benefit Analysis of Professional Negotiation Services</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    When hiring a debt settlement negotiator, you should run a cost-benefit calculation to evaluate the return on your investment.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">Service Fees vs. Potential Debt Discounts</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A typical credit card default of ₹5,00,000 can accumulate interest rapidly. A professional firm like AMA Legal Solutions can negotiate this down to a one-time payment of ₹1,50,000 (a 70% savings of ₹3,50,000). Even after accounting for a standard legal and success fee, the net savings to the client remain substantial, making the service highly cost-effective.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">The Cost of Doing It Alone (Legal Risks & High Balances)</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Attempting to negotiate directly with bank recovery departments without professional representation often yields poor results. Individual consumers rarely secure deep waivers, and they remain vulnerable to signing invalid settlement contracts or falling victim to unauthorized collection terms.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="credit-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Repercussions on Future Financial Products</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Professional services assist not just in reducing immediate debt, but also in managing the aftermath on your credit profiles.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">How Settlement Services Help Manage Your CIBIL Record</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Any settlement is reported to credit bureaus as a compromise. While your <Link href="/does-loan-settlement-affect-cibil-score" className="text-[#D2A02A] hover:underline">CIBIL score after settlement</Link> will initially decline, professional services help ensure that the bank updates the status as \"Settled\" rather than \"Written Off\" or \"Defaulter\". This distinction is critical for future credit recovery.
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-3">Rebuilding Your Creditworthiness After Settling</h3>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Top negotiation firms provide post-settlement counseling to help clients rebuild their credit scores. By using secured credit cards, avoiding multiple hard inquiries, and keeping credit utilization low, settled consumers can typically recover their creditworthiness within 24 to 36 months.
                  </p>
                </section>

                {/* Section 6 - Comparison Table */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Comparison Matrix</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-100 text-left text-gray-900 font-bold border-b border-gray-200">
                          <th className="p-3 md:p-4">Provider</th>
                          <th className="p-3 md:p-4">Service Type</th>
                          <th className="p-3 md:p-4">Legal Shield</th>
                          <th className="p-3 md:p-4">Harassment Protection</th>
                          <th className="p-3 md:p-4">Best Suited For</th>
                          <th className="p-3 md:p-4">Fee Model</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 md:p-4 font-semibold text-gray-950">AMA Legal Solutions</td>
                          <td className="p-3 md:p-4">Fully-Managed Law Firm</td>
                          <td className="p-3 md:p-4 text-green-600 font-medium">Yes (Court Defense)</td>
                          <td className="p-3 md:p-4 text-green-600 font-medium">Complete Shield (Ombudsman & Notices)</td>
                          <td className="p-3 md:p-4">High-value default, legal threats, active cases</td>
                          <td className="p-3 md:p-4">Flat fee + success fee</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 md:p-4 font-semibold text-gray-950">Freed Care</td>
                          <td className="p-3 md:p-4">Fintech Platform</td>
                          <td className="p-3 md:p-4 text-red-500">No (Finances Only)</td>
                          <td className="p-3 md:p-4 text-amber-600">Moderate (App redirection)</td>
                          <td className="p-3 md:p-4">Multiple smaller debts without litigation</td>
                          <td className="p-3 md:p-4">Escrow deposit + success %</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 md:p-4 font-semibold text-gray-950">Settle My Loan</td>
                          <td className="p-3 md:p-4">Debt Consultant</td>
                          <td className="p-3 md:p-4 text-red-500">No (Consulting)</td>
                          <td className="p-3 md:p-4 text-red-500">Basic (Counseling advice)</td>
                          <td className="p-3 md:p-4">Medium-value settlements</td>
                          <td className="p-3 md:p-4">Registration + success %</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3 md:p-4 font-semibold text-gray-950">Single Debt</td>
                          <td className="p-3 md:p-4">Debt Management</td>
                          <td className="p-3 md:p-4 text-red-500">No (Counseling)</td>
                          <td className="p-3 md:p-4 text-amber-600">Moderate (Communication buffer)</td>
                          <td className="p-3 md:p-4">Long-term debt consolidation</td>
                          <td className="p-3 md:p-4">Monthly service fees</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 7 - Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Verified Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col justify-between">
                      <p className="text-sm md:text-base italic text-gray-600 mb-4">
                        \"I sincerely appreciate the support and guidance provided by the expert panel in resolving my credit card settlement process. Their approach was highly professional, transparent, and customer-focused. Every step was explained clearly.\"
                      </p>
                      <div>
                        <h4 className="font-bold text-gray-950 text-sm md:text-base">Santharaman Rajarajeswari</h4>
                        <div className="flex text-[#D2A02A] text-sm mt-1">★★★★★</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col justify-between">
                      <p className="text-sm md:text-base italic text-gray-600 mb-4">
                        \"I had a very good experience with AMA Legal Solutions for my credit card settlement. Their team is highly professional, supportive, and transparent throughout the process. They guided me step by step and helped me close my credit card.\"
                      </p>
                      <div>
                        <h4 className="font-bold text-gray-950 text-sm md:text-base">Deepak</h4>
                        <div className="flex text-[#D2A02A] text-sm mt-1">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 8 - FAQs */}
                <section id="faqs-section" className="scroll-mt-32 border-t pt-6 md:pt-12">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-sm md:text-base leading-relaxed text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Desktop Quick Info */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Settle Card Debts Securely</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get legal defense from bank court summons and arbitration, stop recovery agent visits, and settle credit card defaults with deep waivers.
                </p>
                <Link 
                  href="/contact" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4 text-sm"
                >
                  Request Callback
                </Link>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors text-sm"
                >
                  Call +91-8700343611
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Legal Support</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Loan Settlement Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-are-the-rbi-guidelines-for-recovery-agents-in-india" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> RBI Recovery Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/does-loan-settlement-affect-cibil-score" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> CIBIL Score Impact
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-amount-calculator" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Settlement Calculator
                    </Link>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our Official Application</p>
                  <div className="flex flex-col gap-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-full h-auto max-w-[130px]"/>
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-full h-auto max-w-[130px]"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

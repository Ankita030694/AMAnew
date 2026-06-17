import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is business loan settlement legal in India?",
    answer: "Yes, business loan settlement is completely legal in India. Under the RBI's loan settlement guidelines, commercial borrowers experiencing genuine financial distress can negotiate a One-Time Settlement (OTS) with banks or NBFCs. AMA Legal Solutions, led by senior advocate Anuj Anand Malik, provides the necessary legal representation to negotiate and formalize these settlements."
  },
  {
    question: "What is the average waiver percentage in a business loan settlement?",
    answer: "Depending on the lender's policies and the severity of your financial distress, you can typically negotiate a waiver of 30% to 70% of the total outstanding dues. In many unsecured business loan default cases, AMA Legal Solutions successfully negotiates a settlement to pay only the principal amount, waiving all high interest and late-payment penalties."
  },
  {
    question: "How does business loan settlement affect my CIBIL score?",
    answer: "A business loan settlement will result in a 'Settled' tag on your commercial and personal credit reports instead of 'Closed'. While this initially lowers your credit score and impacts your immediate ability to borrow, it resolves active defaults and legal liabilities. AMA Legal Solutions helps clients clear defaults so they can gradually rebuild their credit history."
  },
  {
    question: "Can a bank file a criminal case against me for defaulting on a business loan?",
    answer: "A business loan default is primarily a civil matter, and lenders cannot threaten you with arrest or criminal prosecution for simple non-payment. However, if there are bounced cheques (Section 138 of the Negotiable Instruments Act) or failed e-mandates (Section 25 of the Payment and Settlement Systems Act), lenders can initiate legal proceedings. AMA Legal Solutions provides robust defense and representation against such notices."
  },
  {
    question: "How can AMA Legal Solutions stop recovery agents from harassing me?",
    answer: "Under the RBI's Fair Practices Code, lenders and their recovery agents are strictly prohibited from using abusive language, threatening borrowers, or calling outside of standard hours (8:00 AM to 7:00 PM). Once you engage AMA Legal Solutions, we issue formal legal representation notices to your lenders, which legally routes all recovery and settlement negotiations through our chambers in Sector 57 Gurugram, halting harassment."
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
      "name": "Business Loan Settlement For Indians",
      "item": "https://www.amalegalsolutions.com/business-loan-settlement-for-indians"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Business Loan Settlement for Indians: Protect Your Enterprise and Resolve Outstanding Commercial Debt",
  "description": "Struggling with business loan defaults and bank recovery harassment? Learn how RBI guidelines and AMA Legal Solutions help you secure a One-Time Settlement (OTS).",
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
  "name": "Business Loan Settlement Support",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal representation for settling commercial and business loans in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
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
  title: "Business Loan Settlement for Indians | AMA Legal Solutions",
  description: "Facing business loan defaults? Learn how RBI guidelines and AMA Legal Solutions help you secure a One-Time Settlement (OTS) to wipe out debts. Call 8700343611.",
  keywords: [
    "business loan settlement for Indians",
    "One-Time Settlement (OTS)",
    "unsecured business loan default",
    "RBI loan settlement guidelines",
    "CIBIL score impact",
    "financial distress",
    "debt resolution process",
    "legal representation",
    "Anuj Anand Malik",
    "Sector 57 Gurugram"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/business-loan-settlement-for-indians',
  },
};

export default function BusinessLoanSettlementForIndiansPage() {
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "reality", title: "The Reality of Business Defaults" },
    { id: "legal-rights", title: "Your Legal Protections" },
    { id: "process", title: "The Settlement Process" },
    { id: "cibil", title: "CIBIL & Credit Recovery" },
    { id: "why-choose", title: "Why Choose AMA?" },
    { id: "comparison-table", title: "Debt Resolution Comparison" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "faqs", title: "FAQs" },
    { id: "platforms", title: "Lenders Covered" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Business Loan Settlement For Indians", href: "/business-loan-settlement-for-indians" },
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
            {/* Review Snippet */}
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
                <span className="text-[10px] md:text-sm font-medium tracking-wide">4.9/5 Rating | 850+ Success Stories</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-0">
              Business Loan Settlement for <span className="text-[#D2A02A]">Indians</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Reclaim commercial control. AMA Legal Solutions, established by Anuj Anand Malik, provides specialized legal representation to settle corporate debts and stop bank recovery harassment. Call 8700343611.
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

          {/* Mobile App Store Links */}
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
                    Authoritative Business Loan Settlement for Indians
                  </h2>
                  
                  {/* Direct Answer Box (Exactly 50 words) */}
                  <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 rounded-r-xl mb-8">
                    <p className="text-gray-900 font-medium leading-relaxed text-base md:text-lg">
                      To settle business loans in India, request a One-Time Settlement (OTS) from your lending institution. Under RBI loan settlement guidelines, borrowers facing financial distress can negotiate a waiver of accumulated interest and penalties. AMA Legal Solutions, led by Anuj Anand Malik, provides legal representation to secure favorable settlement terms legally.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the modern Indian economy, micro, small, and medium enterprises (MSMEs) serve as the vital backbone of growth and employment. However, securing and sustaining commercial capital often forces entrepreneurs to acquire multiple debt products. Unsecured commercial loans, digital credit lines, and working capital limits are frequently leveraged to fuel operational expansion or overcome temporary supply chain bottlenecks. While initial projections remain optimistic, sudden economic shifts, changing government regulations, or unexpected market crises can quickly turn these credit instruments into severe liabilities. When monthly repayments begin consuming critical cash flows, businesses are forced to navigate the looming crisis of an unsecured business loan default.
                    </p>
                    <p>
                      Left unresolved, commercial defaults quickly lead to aggressive recovery tactics from banking professionals, tarnished credit histories, and potential legal disputes that threaten the survival of the enterprise. Distressed entrepreneurs are routinely subjected to high-pressure collection cycles, causing intense psychological strain and operational paralysis. Seeking a structured legal resolution is the most reliable way to preserve your business assets, resolve liabilities, and regain financial independence.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we believe that no individual should be subjected to illegal harassment, digital blackmail, or endless debt traps. Founded and led by senior advocate <strong>Anuj Anand Malik</strong>, our legal chambers represent clients in negotiations with all major Indian banks and financial institutions. Working from our corporate offices in <strong>Sector 57 Gurugram</strong>, we use structured legal representation to guide commercial borrowers through the debt resolution process, ensuring they secure sustainable settlement agreements that protect their personal and business futures.
                    </p>
                  </div>
                </section>

                {/* The Reality of Business Defaults */}
                <section id="reality" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    The Reality of Business Defaults and Financial Distress
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <h3 className="text-xl font-bold text-gray-800">The Spiral of Commercial Debt Accumulation</h3>
                    <p>
                      Unlike secured lending instruments, unsecured business credit carries high daily or monthly interest rates to offset the lender's risk. Entrepreneurs often secure these loans without collateral, relying on their GST filings, bank statements, and personal guarantees. If the business encounters a cash flow crunch due to delayed client payments or increased inventory costs, meeting high monthly installments becomes impossible. To avoid immediate default, many business owners secure additional short-term personal or business loans, inadvertently entering a compounding cycle of debt accumulation that drains their enterprise's liquid reserves.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">The Legal and Operational Impact of Unsecured Defaults</h3>
                    <p>
                      When a default occurs, lenders quickly classify the business account as a Non-Performing Asset (NPA). This classification triggers automated recovery mechanisms, resulting in continuous collection calls, visits to commercial premises, and a significant, long-term credit drop. The commercial entity faces severe operational blockages as supplier trust declines, cash flow is diverted to debt maintenance, and the threat of legal action under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act or arbitration clauses looms. Resolving this pressure requires a formal, legal negotiation process that stabilizes operations and settles liabilities.
                    </p>
                  </div>
                </section>

                {/* Legal Protections */}
                <section id="legal-rights" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Legal Protections for Indian Business Borrowers Under RBI Guidelines
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <h3 className="text-xl font-bold text-gray-800">RBI Loan Settlement Guidelines: Protecting Your Rights</h3>
                    <p>
                      The Reserve Bank of India has established clear loan settlement guidelines to balance recovery efforts with borrower protections. These guidelines mandate that banks and NBFCs must offer distressed borrowers a fair opportunity to settle their liabilities through a One-Time Settlement (OTS) when genuine financial hardship is present. RBI guidelines stress that lenders must prioritize negotiation and compromise over long-term litigation, allowing businesses to settle their obligations based on their actual capacity to repay rather than inflated penalty numbers.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Halting Unlawful Recovery Harassment</h3>
                    <p>
                      Under the RBI's Fair Practice Code, debt recovery agents are strictly prohibited from using intimidating, coercive, or abusive tactics. Lenders cannot contact references, publish defaulter lists publicly, or visit business premises during unauthorized hours. Once formal legal representation is established by AMA Legal Solutions, all collection calls must cease, and lenders are legally required to route all communication through our offices in Sector 57 Gurugram. If agents violate these codes, we file immediate complaints with the RBI Ombudsman and local cyber cells, protecting your enterprise's reputation and operations.
                    </p>
                  </div>
                </section>

                {/* The Step-by-Step Business Loan Settlement Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    The Step-by-Step Business Loan Settlement Process
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      A successful business loan settlement requires a disciplined, structured approach that satisfies the bank's risk committees while protecting the borrower's remaining assets.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Step 1: Documenting Financial Hardship</h3>
                    <p>
                      The first phase involves a detailed review of the enterprise's financial standing. Our legal team reviews GST returns, audited balance sheets, bank account statements, and pending client invoices to construct a case of genuine financial distress. We document the specific factors-such as supply chain disruptions, loss of primary clients, or medical emergencies-that impacted the business's ability to maintain repayment terms.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Step 2: Issuing Formal Legal Notice</h3>
                    <p>
                      Once the hardship case is prepared, AMA Legal Solutions serves a formal representation notice to the lenders. This notice confirms that our chambers are handling the case, highlights any recovery violations committed by collection agents, and invites the bank's credit committee to resolve the matter through a compromise settlement. This step establishes a structured boundary, halting direct contact and routing negotiations through our senior legal team.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Step 3: Negotiating the One-Time Settlement (OTS)</h3>
                    <p>
                      With direct collection pressure managed, we represent you in discussions with the bank's credit and NPA committees. We present your case to demonstrate that an OTS is the most efficient resolution for both parties. We negotiate to wave accumulated interest, processing fees, and compounding late penalties, aiming to settle the debt by paying only the original principal amount, often split into flexible installments.
                    </p>
                  </div>
                </section>

                {/* CIBIL & Credit Recovery */}
                <section id="cibil" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    CIBIL Score Impact and Commercial Credit Recovery
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <h3 className="text-xl font-bold text-gray-800">Understanding 'Settled' Tag vs. 'Closed' status on Credit Reports</h3>
                    <p>
                      A key concern for business owners is the CIBIL score impact of a settlement. Once an OTS is finalized and paid, the lender reports the account status to credit bureaus as \"Settled\" instead of \"Closed\". While a \"Closed\" tag indicates full repayment, a \"Settled\" tag indicates that the bank accepted a compromise and wrote off a portion of the dues. This tag temporarily lowers your credit score, making traditional banks cautious about granting new credit for the next 12 to 24 months.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Rebuilding Commercial and Personal Credit</h3>
                    <p>
                      Securing a \"Settled\" status is a far better option than leaving accounts in active, compounding default, which permanently damages credit reports. Settling resolves your active legal liabilities and debt obligations. Once the settlement amount is paid and the lender issues a No Objection Certificate (NOC), you can begin rebuilding your credit profile. Rebuilding is achieved by maintaining secured business credit cards, paying utility bills on time, and managing micro-loans responsibly, eventually restoring a healthy credit rating.
                    </p>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Why Choose AMA Legal Solutions for Commercial Debt Resolution?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Resolving commercial debt independently is challenging, especially when dealing with aggressive, automated institutional collection systems. Partnering with a specialized legal team ensures your interests are protected throughout the negotiation.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Strategic Counsel Under Anuj Anand Malik’s Chambers</h3>
                    <p>
                      Our firm is a pioneer in commercial debt resolution and loan settlement in India. Led by senior advocate <strong>Anuj Anand Malik</strong>, our chambers approach negotiations from a position of legal authority. We understand bank internal credit policies, the legal limits of debt recovery, and how to structure hardship cases to secure maximum waivers.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Comprehensive Representation from Sector 57 Gurugram</h3>
                    <p>
                      From our corporate office in <strong>Sector 57 Gurugram</strong>, we manage the entire debt resolution process for you. We handle all documentation, draft hardship statements, respond to arbitration notices, and communicate directly with bank committees. This comprehensive approach allows you to focus on managing and rebuilding your business operations while we resolve your liabilities.
                    </p>
                  </div>
                </section>

                {/* Debt Resolution Comparison Table */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Comparison of Commercial Debt Resolution Options in India
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                          <th className="px-6 py-4">Metric / Option</th>
                          <th className="px-6 py-4">One-Time Settlement (OTS)</th>
                          <th className="px-6 py-4">Loan Restructuring</th>
                          <th className="px-6 py-4">Active Default</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                        <tr>
                          <td className="px-6 py-4 font-semibold">Total Amount Payable</td>
                          <td className="px-6 py-4">Waiver of 30% to 70% of total dues; often principal-only payment.</td>
                          <td className="px-6 py-4">100% of principal + renegotiated interest paid over extended tenure.</td>
                          <td className="px-6 py-4">100% of amount + daily late penalties compounding continuously.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Recovery Harassment</td>
                          <td className="px-6 py-4">Stops completely once legal representation is established and OTS signed.</td>
                          <td className="px-6 py-4">Stops once the restructured plan is active and installments are paid.</td>
                          <td className="px-6 py-4">Escalates aggressively with continuous calls, emails, and visits.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Credit Score Tag</td>
                          <td className="px-6 py-4">Account status changes to 'Settled' (rebuildable over 12-24 months).</td>
                          <td className="px-6 py-4">Account status changes to 'Restructured' with moderate impact.</td>
                          <td className="px-6 py-4">Severe continuous decline; permanent 'Written Off' tag on report.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Legal Protection</td>
                          <td className="px-6 py-4">Complete legal protection; account closed permanently post-NOC.</td>
                          <td className="px-6 py-4">Protected as long as renegotiated monthly installments are paid on time.</td>
                          <td className="px-6 py-4">High risk of arbitration, cheque bounce notices, and court actions.</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Resolution Timeline</td>
                          <td className="px-6 py-4">Fast resolution, typically completed within 30 to 90 days.</td>
                          <td className="px-6 py-4">Long-term process extending over the new loan tenure.</td>
                          <td className="px-6 py-4">Remains unresolved, accumulating penalties for multiple years.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                     Helping Borrowers Reclaim Financial Freedom
                   </h2>
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm">
                       <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">\"</div>
                       <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                         \"Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me.\"
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
                       <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">\"</div>
                       <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                         \"I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined.\"
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

                {/* CTA section */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-[40px] p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Take Control of Your Business Future</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Do not let financial distress stall your operations. Our expert legal team is ready to stand by you and secure your commercial freedom.
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

                {/* Platforms Grid */}
                <section id="platforms" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    We Resolve Debts Across Registered Digital Lenders & NBFCs
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {["Krazybee Services", "Dhani Loans", "Earlysalary Services", "Lendingkart Finance", "NeoGrowth Credit", "Fairassets Technologies", "Cashe NBFC Partners", "Fullerton India", "Aditya Birla Capital", "Hero Fincorp", "Bajaj Finserv", "Tata Capital"].map(platform => (
                      <div key={platform} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-all font-bold text-gray-700 text-sm">
                        {platform}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                     <p className="text-sm text-gray-500 italic">And all other RBI-registered digital lending partners in India.</p>
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
                  <p className="text-xs text-gray-500 mb-6">Based on 850+ Verified Cases</p>
                  
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

        {/* States Grid */}
        <div className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1a202c]">Helping Families Recover Nationwide</h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">No matter where you are in India, AMA Legal Solutions is here to support you in settling business loans. Founded by Anuj Anand Malik, our head office in Sector 57 Gurugram serves clients nationwide. Call 8700343611.</p>
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
                      <p className="text-gray-500">Corporate HQ: Sector 57, Gurugram, India</p>
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

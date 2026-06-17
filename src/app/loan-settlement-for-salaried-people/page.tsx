import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can a salaried person get a loan settlement?",
    answer: "Yes, salaried individuals can settle their unsecured loans (like personal loans and credit card dues). Banks and NBFCs allow a One-Time Settlement (OTS) under RBI guidelines if the borrower has defaulted for over 90 days and provides genuine proof of financial hardship, such as job loss, medical emergencies, or salary cuts."
  },
  {
    question: "How much CIBIL score is reduced after loan settlement?",
    answer: "A loan settlement typically reduces a borrower's CIBIL score by 50 to 100 points. The credit report will display a 'Settled' status instead of 'Closed' for 7 years, which makes it challenging to secure new credit. However, under the guidance of AMA Legal Solutions, you can systematically rebuild your credit score over time."
  },
  {
    question: "Does the bank file a criminal case against salaried individuals for loan default?",
    answer: "No, defaulting on a personal loan or credit card is a civil dispute, not a criminal offense. Banks cannot jail you for non-repayment. However, if a cheque bounces (Section 138 of the Negotiable Instruments Act) or an ECS mandate fails (Section 25 of the Payment and Settlement Systems Act), they can file legal cases. AMA Legal Solutions defends clients against these actions."
  },
  {
    question: "What is the typical settlement percentage for a personal loan?",
    answer: "The settlement percentage ranges between 30% and 50% of the total outstanding dues, meaning banks write off 50% to 70% of the amount. The final percentage depends on the default duration, the lender's policies, and the strength of the financial hardship documentation negotiated by legal advisors."
  },
  {
    question: "Can recovery agents contact my employer or references?",
    answer: "No, under RBI guidelines, recovery agents are strictly prohibited from contacting your employer, coworkers, or references to humiliate you. They cannot call you before 8 AM or after 7 PM. If they violate these rules, AMA Legal Solutions can help you file complaints with the bank and the RBI Ombudsman."
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
      "name": "Loan Settlement for Salaried People",
      "item": "https://www.amalegalsolutions.com/loan-settlement-for-salaried-people"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement for Salaried People: RBI Rules, Eligibility & Legal Process",
  "description": "Struggling with high EMIs, salary cuts, or job loss? Read our ultimate guide on loan settlement for salaried people under RBI rules with AMA Legal Solutions.",
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

// Review Schema matching home page metrics
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Consulting for Salaried Individuals",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Professional legal consultation for One-Time Settlement (OTS) of unsecured debts for salaried professionals in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "910"
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
        "name": "Nikka Kheda"
      },
      "reviewBody": "I would like to thanks each member of this firm of helping me and to get out the debt problem without hassle my loan settlement was done easily because of you all."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement for Salaried People: RBI Rules & Process",
  description: "Struggling with EMIs? Learn the RBI rules, eligibility, and step-by-step process of loan settlement for salaried people with AMA Legal Solutions.",
  keywords: [
    "loan settlement for salaried people",
    "salaried employees debt relief",
    "personal loan settlement percentage",
    "One-Time Settlement (OTS) under RBI guidelines",
    "CIBIL score after loan settlement",
    "unsecured personal loan default",
    "credit card outstanding dues resolution",
    "legal notice for loan recovery",
    "No Dues Certificate (NOC)",
    "Advocate Anuj Anand Malik"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-for-salaried-people',
  },
};

export default function SalariedLoanSettlementPage() {
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "direct-answer", title: "Direct Answer" },
    { id: "debt-trap", title: "The Salaried Debt Trap" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "rbi-rules", title: "RBI Guidelines" },
    { id: "comparison-matrix", title: "Comparison Matrix" },
    { id: "harassment", title: "Protection From Harassment" },
    { id: "ama-process", title: "Our Settlement Process" },
    { id: "testimonials", title: "Testimonials" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Salaried People Guide", href: "/loan-settlement-for-salaried-people" },
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
            {/* Google Review Snippet */}
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
                <span className="text-[10px] md:text-sm font-medium tracking-wide">4.9/5 Rating | 910+ Dues Resolved</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-0">
              Loan Settlement for <span className="text-[#D2A02A]">Salaried People</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Struggling with personal loans or credit card EMIs? Discover your legal rights and options under RBI guidelines. Guided by Advocate Anuj Anand Malik.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* App Store Links */}
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
                
                {/* Introduction & Direct Answer Box */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-6">
                    Loan Settlement for Salaried People in India
                  </h2>
                  
                  {/* Direct Answer Box (50 words optimized for answer engines) */}
                  <div id="direct-answer" className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 rounded-r-xl mb-8 scroll-mt-32">
                    <p className="text-gray-900 font-medium leading-relaxed text-base md:text-lg">
                      Salaried people in India can settle unsecured debts like personal loans and credit cards under RBI guidelines after a 90-day default (NPA status). Lenders accept One-Time Settlement (OTS) with waivers of 50% to 80% if there is verified proof of genuine financial hardship, such as job loss, salary cuts, or medical crises.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Salaried professionals in India face a unique financial landscape. With fixed monthly paychecks, their budgeting is often precise, leaving little margin for error. When sudden events disrupt this cash flow-such as a corporate layoff, an unexpected salary cut, or a medical crisis within the family-the delicate balance collapses. Monthly EMIs on personal loans and revolving credit card balances quickly accumulate, turning a manageable financial structure into an overwhelming debt trap.
                    </p>
                    <p>
                      In these moments, many salaried individuals find themselves targeted by persistent recovery agents, compounding their emotional stress. Understanding the legal path to resolving these liabilities becomes paramount. The mechanism of a compromise settlement, commonly referred to as a One-Time Settlement (OTS), offers a structured exit strategy. However, this is not an automatic right; it requires careful documentation, negotiation, and an understanding of the regulatory frameworks set by the Reserve Bank of India.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we specialize in representing salaried professionals facing severe debt distress. Founded and led by <strong>Advocate Anuj Anand Malik</strong>, our legal team operates from Sector 57, Gurugram, protecting clients across India from unlawful harassment while negotiating legally sound, highly favorable settlements directly with major banking institutions and NBFCs.
                    </p>
                  </div>
                </section>

                {/* Section 1: The Salaried Debt Trap */}
                <section id="debt-trap" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    The Debt Cycle Facing Salaried Employees
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Unlike business owners whose cash flows are inherently variable, salaried employees structure their lives around a predictable monthly credit. This predictability makes them prime targets for lenders offering easy personal loans, pre-approved credit cards, and Buy Now Pay Later (BNPL) schemes. In times of economic growth, maintaining multiple EMIs is straightforward. However, when macro-economic pressures hit-such as tech layoffs, cost-cutting restructurings, or global inflation-salaried individuals are hit hardest because they cannot instantly scale their income.
                    </p>
                    <p>
                      Once a single EMI is missed, late payment penalties, compounding interest, and bounce charges are added to the outstanding balance. Within a few months, the total dues swell to a level that is impossible to clear with a standard monthly salary. Defaulters often make the mistake of taking additional high-interest instant loans from digital apps to pay off existing credit card bills, entering a dangerous spiral that leads to systemic default.
                    </p>
                    <p>
                      Navigating this requires an objective, legally guided strategy. A compromise settlement is a process where the lender agrees to accept a lump-sum payment that is lower than the total outstanding balance, writing off the remaining amount and closing the loan account. 
                    </p>
                  </div>
                </section>

                {/* Section 2: Eligibility Rules */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Eligibility Criteria: Can You Settle Your Loans?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Lenders do not agree to a settlement easily. They must be convinced that the borrower is physically and financially unable to repay the full dues. For salaried employees, the criteria for establishing eligibility are strict:
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900">1. NPA Classification (The 90-Day Default Rule)</h3>
                    <p>
                      An account is only considered for settlement after it has been classified as a Non-Performing Asset (NPA). Under RBI rules, this occurs when an installment or interest payment remains overdue for more than 90 days. Before this period, the bank’s internal systems will focus solely on recovery, and any requests for settlement will be rejected.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900">2. Proof of Non-Willful Default (Genuine Hardship)</h3>
                    <p>
                      Banks distinguish between \"Willful Defaulters\" (those who have the financial capacity to pay but choose not to) and \"Non-Willful Defaulters\" (those hit by genuine life crises). As a salaried employee, you must present undeniable evidence of your hardship. This includes:
                    </p>
                    <ul>
                      <li>A formal termination letter or layoff notice from your employer.</li>
                      <li>Bank statements showing a complete cessation or significant reduction of monthly salary credits.</li>
                      <li>Certified medical records and hospital bills demonstrating a catastrophic illness that consumed your savings.</li>
                      <li>Salary slips showing a sustained salary cut.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900">3. Nature of the Debt (Unsecured vs. Secured)</h3>
                    <p>
                      Unsecured debts, such as personal loans, credit cards, and instant app loans, do not have collateral backing. Because the lender cannot seize an asset to recover their funds, they are highly motivated to negotiate a settlement to recover whatever percentage they can. Conversely, secured loans (home loans, car loans, loans against property) are backed by collateral. In these cases, banks prefer taking possession of the asset under the SARFAESI Act rather than settling, unless the asset's value has degraded significantly below the outstanding debt.
                    </p>
                  </div>
                </section>

                {/* Section 3: RBI Rules and Guidelines */}
                <section id="rbi-rules" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    RBI Guidelines on Compromise Settlements
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The Reserve Bank of India has established a clear framework to govern compromise settlements. Lenders must have board-approved policies for undertaking settlements with borrowers. Key highlights of the RBI guidelines include:
                    </p>
                    <ul>
                      <li><strong>Fair Practice Code:</strong> Lenders must treat borrowers with dignity. Recovery processes must adhere to strict ethical standards, and agents cannot use abusive language, physical intimidation, or public humiliation.</li>
                      <li><strong>Compromise Settlements:</strong> Lenders are permitted to write off a portion of their dues to minimize non-performing assets. This decision must be based on a commercial calculation showing that a settlement yields a better financial outcome than lengthy legal recovery processes.</li>
                      <li><strong>NPA Restructuring:</strong> For borrowers facing temporary setbacks, banks are encouraged to offer restructuring options, such as extending the loan tenure or converting accumulated interest into a separate term loan, before moving to a final settlement.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 4: Comparison Matrix */}
                <section id="comparison-matrix" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Salaried Loan Settlement Options Matrix
                  </h2>
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-white border border-gray-200 text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Debt Type</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Typical Default Period</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Hardship Proof Needed</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Settlement Probability</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Expected Dues Waiver</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Credit Card Balances</td>
                          <td className="py-3 px-4">90 - 120 Days</td>
                          <td className="py-3 px-4">Layoff notice, medical bills, bank statements</td>
                          <td className="py-3 px-4 text-green-600 font-medium">Very High</td>
                          <td className="py-3 px-4">50% - 80%</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Unsecured Personal Loans</td>
                          <td className="py-3 px-4">120 - 180 Days</td>
                          <td className="py-3 px-4">Form 16 showing income drop, salary slips, bank statements</td>
                          <td className="py-3 px-4 text-green-600 font-medium">High</td>
                          <td className="py-3 px-4">40% - 70%</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Instant Mobile App Loans</td>
                          <td className="py-3 px-4">90+ Days</td>
                          <td className="py-3 px-4">Evidence of predatory rates, proof of income loss</td>
                          <td className="py-3 px-4 text-green-600 font-medium">High</td>
                          <td className="py-3 px-4">40% - 60%</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Secured Home / Auto Loans</td>
                          <td className="py-3 px-4">180+ Days</td>
                          <td className="py-3 px-4">Permanent disability, extreme financial ruin, low collateral value</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Low (Restructuring preferred)</td>
                          <td className="py-3 px-4">10% - 30% (Under rare conditions)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 5: Handling Recovery Agent Harassment */}
                <section id="harassment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Handling Recovery Agent Harassment: Your Legal Protections
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      One of the most distressing aspects of defaulting on a loan is the subsequent harassment by recovery agents. For salaried individuals, this harassment can directly threaten their employment. Agents often violate guidelines by contacting HR departments, calling office landlines, sending messages to coworkers, or threatening to visit the office premises. These actions are explicitly illegal under RBI directives.
                    </p>
                    <p>
                      The RBI's code of conduct forbids recovery agents from using humiliating language, calling at unreasonable hours, or contacting anyone other than the borrower and co-borrower. Your workplace is a private space, and banks cannot legally disrupt your employment.
                    </p>
                    <p>
                      When you engage <strong>AMA Legal Solutions</strong>, we act as a shield. Our legal team immediately drafts and sends a formal legal notice to the bank's recovery division and senior management. This notice states that the borrower is represented by counsel and instructs all future communication to go through our office. Under law, once a borrower is represented by a legal counsel, recovery agents must halt direct, unregulated contacts. This step restores peace of mind, allowing you to focus on your professional duties while we negotiate the settlement terms.
                    </p>
                  </div>
                </section>

                {/* Section 6: AMA Legal Solutions Process */}
                <section id="ama-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    How AMA Legal Solutions Facilitates Your Debt Resolution
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Negotiating a settlement with a financial institution requires a deep understanding of banking operations, credit risk policies, and consumer law. Attempting to negotiate alone often leads to banks offering unfavorable terms or refusing to settle. Commercial debt settlement agencies, which are not law firms, lack the legal authority to represent you in court or defend you against litigation such as Section 138 cheque bounce cases.
                    </p>
                    <p>
                      <strong>AMA Legal Solutions</strong> provides a comprehensive, legally protected process for salaried individuals:
                    </p>
                    <ol>
                      <li><strong>Financial Analysis & Case Building:</strong> We evaluate your total outstanding debt, your current income, and your essential living expenses. We construct a legally robust \"Hardship File\" backed by documentation to prove that full repayment is impossible.</li>
                      <li><strong>Formal Legal Representation:</strong> We serve legal notices to the lenders, establishing that your case is handled by our firm. This stops recovery harassment and redirects all communications to our legal team.</li>
                      <li><strong>Direct Credit Committee Negotiations:</strong> We bypass low-level recovery executives and deal directly with the bank's internal credit committees and legal officers. We negotiate for maximum waivers, aiming for a settlement amount that is realistic for your budget.</li>
                      <li><strong>Document Verification & NOC Issuance:</strong> Once an agreement is reached, we carefully inspect the bank's official settlement letter to ensure there are no hidden conditions. After the payment is completed, we verify the issuance of a clean 'No Dues Certificate' (NOC) or 'No Objection Certificate', protecting you from future claims.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 7: Client Success Stories & Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Success Stories from Salaried Professionals
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        \"Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me.\"
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- Samrat Basu</h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        \"I would like to thanks each member of this firm of helping me and to get out the debt problem without hassle my loan settlement was done easily because of you all.\"
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- Nikka Kheda</h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        \"I had a very good experience with AMA Legal Solutions for my credit card settlement. Their team is highly professional, supportive, and transparent throughout the process. They guided me step by step and helped me close my credit card.\"
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- deepak</h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        \"I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!\"
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- Vinod Marskole</h4>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions (FAQs)
                  </h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - Side Panel */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Eligibility Consultation</h3>
                <p className="text-xs text-gray-500 mb-4">Contact Advocate Anuj Anand Malik for a legal evaluation.</p>
                <div className="bg-[#D2A02A]/10 text-[#D2A02A] py-2 px-4 rounded-xl font-bold text-sm mb-4">
                  Call: +91 8700343611
                </div>
                <Link href="/contact">
                  <button className="w-full bg-[#30261C] hover:bg-black text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
                    Send Query Online
                  </button>
                </Link>
              </div>

              {/* App Showcase Card */}
              <div className="bg-[#30261C] text-white p-6 rounded-2xl shadow-sm text-center">
                <h3 className="text-base font-bold mb-1" style={{ color: 'rgba(210, 158, 13, 0.9)' }}>AMA Legal App</h3>
                <p className="text-xs text-gray-300 mb-4">Monitor cases & settlement letters on your phone.</p>
                <div className="flex flex-col gap-2.5 items-center justify-center">
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/newAssets/appstore.svg" 
                      alt="Google Play" 
                      width={120} 
                      height={34}
                      className="w-[110px] h-auto"
                    />
                  </Link>
                  <Link 
                    href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/newAssets/playstore.svg" 
                      alt="App Store" 
                      width={120} 
                      height={34}
                      className="w-[110px] h-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

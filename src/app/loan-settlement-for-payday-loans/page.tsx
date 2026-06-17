import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is payday loan settlement legal in India?",
    answer: "Yes, payday loan settlement is completely legal in India. Under the RBI's Fair Practices Code and digital lending guidelines, borrowers who face genuine financial hardship can negotiate a One-Time Settlement (OTS) with the registered NBFCs behind digital lending apps. AMA Legal Solutions drafts and represents these settlement cases legally."
  },
  {
    question: "How can I stop digital loan recovery agents from calling my contacts?",
    answer: "Under RBI digital lending guidelines, apps are strictly prohibited from accessing or hacking your contact lists, and recovery agents cannot harass reference contacts. If they do, it violates your privacy rights. AMA Legal Solutions sends a formal legal notice to the lender, freezing recovery agent harassment instantly."
  },
  {
    question: "What percentage of payday loan debt can be waived in a settlement?",
    answer: "Depending on the severity of the financial hardship and the lender's policies, you can typically negotiate a waiver of 30% to 70% of the total outstanding amount. In many payday loan cases, AMA Legal Solutions successfully negotiates a settlement to pay only the principal amount, waiving all high interest and penalties."
  },
  {
    question: "How does settling a payday loan affect my CIBIL score?",
    answer: "Settling a payday loan will result in a 'Settled' status on your CIBIL report instead of 'Closed'. While this initially lowers your credit score, it resolves your active defaults and legal liabilities, allowing you to gradually rebuild your credit score over the next 12 to 24 months."
  },
  {
    question: "Can payday loan apps file a criminal case against me for default?",
    answer: "Defaulting on a payday loan is a civil matter of debt default, not a criminal offense. Lending apps or their collection agents cannot threaten you with arrest. However, under Section 25 of the Payment and Settlement Systems Act (for failed e-mandates) or Section 138 of the Negotiable Instruments Act (for bounced cheques), they can initiate legal proceedings. AMA Legal Solutions defends and represents you against all such notices."
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
      "name": "Payday Loan Settlement",
      "item": "https://www.amalegalsolutions.com/loan-settlement-for-payday-loans"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement for Payday Loans: A Legal Guide to Escaping Digital Debt",
  "description": "Struggling with payday loan debts and harassment? Learn about RBI digital lending guidelines and how AMA Legal Solutions helps you negotiate a One-Time Settlement (OTS).",
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
  "name": "Payday Loan Settlement Support",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal support for settling payday and digital app loans in India.",
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
  title: "Loan Settlement for Payday Loans | AMA Legal Solutions",
  description: "Trapped in payday loan debt? AMA Legal Solutions settles digital app dues under RBI guidelines and stops recovery agent harassment. Call 8700343611.",
  keywords: [
    "loan settlement for pay day loans",
    "payday loan settlement",
    "digital lending apps",
    "One-Time Settlement (OTS)",
    "rbi digital lending guidelines",
    "recovery agent harassment",
    "unsecured personal loan default",
    "anuj anand malik",
    "ama legal solutions",
    "sector 57 gurugram",
    "cibil score impact"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-for-payday-loans',
  },
};

export default function PaydayLoanSettlementPage() {
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "understanding", title: "Understanding Payday Loans" },
    { id: "legal-rights", title: "Your Legal Rights" },
    { id: "process", title: "The Settlement Process" },
    { id: "why-choose", title: "Why Choose AMA?" },
    { id: "cibil", title: "CIBIL & Credit Impact" },
    { id: "comparison-table", title: "Debt Resolution Comparison" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "faqs", title: "FAQs" },
    { id: "platforms", title: "Lending Platforms" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Payday Loan Settlement", href: "/loan-settlement-for-payday-loans" },
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
              Loan Settlement for <span className="text-[#D2A02A]">Payday Loans</span>: Get Debt Free
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Break free from the digital loan app trap. AMA Legal Solutions, founded by Anuj Anand Malik, offers professional legal representation to settle digital debts and stop recovery harassment. Call 8700343611.
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
                    Professional Loan Settlement for Pay Day Loans in India
                  </h2>
                  
                  {/* Direct Answer Box (50 words) */}
                  <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 rounded-r-xl mb-8">
                    <p className="text-gray-900 font-medium leading-relaxed text-base md:text-lg">
                      To settle payday loans in India, request a One-Time Settlement (OTS) from the lending app's associated NBFC. Borrowers can negotiate a waiver of interest and penalties under RBI digital lending guidelines. AMA Legal Solutions manages this process legally, drafting hardship letters, freezing recovery harassment, and resolving outstanding dues.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the rapidly evolving financial landscape of India, instant micro-credit has become widely accessible through mobile applications. While these short-term fintech products offer immediate liquidity, they frequently transition into predatory traps. Borrowers seeking temporary financial assistance are drawn to digital lending apps offering rapid cash disbursals with minimal documentation. However, these unregulated or poorly monitored products-commonly referred to as payday loans-carry exorbitant interest rates, hidden processing fees, and aggressive repayment schedules. When a financial shock disrupts a borrower's income, managing multiple digital loans becomes virtually impossible, forcing them into a cycle of roll-overs and compounding debt.
                    </p>
                    <p>
                      The pressure of dealing with fintech debt is compounded by the hostile collection methods employed by collection agencies. Borrowers routinely encounter severe psychological distress due to continuous collection calls, unauthorized contact list access, and reference intimidation. Under these high-pressure circumstances, a structured and legally backed <strong>loan settlement for pay day loans</strong> serves as the only reliable path to restore financial stability and personal peace of mind.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we believe that no individual should be subjected to illegal harassment, digital blackmail, or endless debt traps. Founded and led by <strong>Anuj Anand Malik</strong>, our legal chambers specialize in representing distressed borrowers against digital platforms. Operating from our corporate offices in <strong>Sector 57 Gurugram</strong>, we leverage banking laws, user privacy rights, and the Reserve Bank of India (RBI) mandates to stop abusive collection practices and negotiate a sustainable One-Time Settlement (OTS). With the right legal counsel, you can freeze collection actions, wipe out unlawful fees, and settle your payday loan obligations for a fraction of the demanded sum.
                    </p>
                  </div>
                </section>

                {/* Understanding Payday Loans */}
                <section id="understanding" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Understanding Payday Loans and Digital Debt in India
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <h3 className="text-xl font-bold text-gray-800">What Qualifies as a Payday Loan in India?</h3>
                    <p>
                      In India, payday loans are short-term, unsecured personal loans disbursed instantly through mobile applications or web platforms. Typically targeted at salaried executives, freelancers, and students, these loans feature short tenures (ranging from 7 to 90 days) and are meant to act as a bridge until the borrower's next salary cycle. Unlike traditional bank personal loans, payday digital loans require minimal credit history, relying instead on smartphone metadata, income verification, and e-mandates for instant approval.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">The Cycle of Debt: High Interest Rates and Short Tenures</h3>
                    <p>
                      The primary danger of payday lending lies in the structural pricing of the loans. Most instant credit apps charge interest rates calculated on a daily basis (often 0.1% to 1% per day), which translates to an Annual Percentage Rate (APR) ranging between 36% and 365%. Additionally, massive upfront administrative and processing fees (ranging from 10% to 20% of the loan principal) are deducted prior to disbursal.
                    </p>
                    <p>
                      When a borrower defaults on an unsecured personal loan default of this nature, late payment penalties of up to 2% per day are compounded on the outstanding balance. To cover an active default, borrowers often download a second or third app, creating a rapid downward spiral where they are borrowing new funds solely to pay off previous interest. This snowball effect can quickly turn a small initial loan of ₹10,000 into a massive liability of ₹1,00,000 across multiple platforms.
                    </p>
                  </div>
                </section>

                {/* Legal Rights of Borrowers */}
                <section id="legal-rights" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Legal Rights of Borrowers Facing Payday Loan Defaults
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <h3 className="text-xl font-bold text-gray-800">RBI Digital Lending Guidelines: Your Shield</h3>
                    <p>
                      To address predatory practices, the Reserve Bank of India enacted the comprehensive <strong>RBI digital lending guidelines</strong>. These regulations mandate that all digital lending apps must be partnered with a registered Bank or Non-Banking Financial Company (NBFC). The guidelines establish critical protections for borrowers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>No Direct Disbursal:</strong> All transactions must flow directly between the bank account of the NBFC/Lender and the borrower, eliminating third-party pool accounts.</li>
                      <li><strong>Key Fact Statement (KFS):</strong> Lenders must provide a transparent, standardized document detailing the exact APR, processing fees, and late payment penalties before the agreement is signed.</li>
                      <li><strong>Grievance Officer:</strong> Every digital lending platform must appoint a dedicated grievance redressal officer to handle borrower complaints within a statutory 30-day timeline.</li>
                    </ul>
                    <h3 className="text-xl font-bold text-gray-800">Rules Against Intimidating Recovery Tactics and Contacts Hacking</h3>
                    <p>
                      Predatory digital loan apps frequently resort to illegal tactics to force repayments, including downloading the borrower's contacts list, hacking private photo galleries, and sending threatening messages on WhatsApp to reference contacts. The RBI Fair Practice Code and national privacy laws strictly prohibit these operations. 
                    </p>
                    <p>
                      Lenders are legally barred from contacting individuals not listed as official co-borrowers or guarantors. Recovery agents are forbidden from calling before 8:00 AM or after 7:00 PM, utilizing abusive language, or visiting a borrower's home or office without proper authorization. If you are experiencing these predatory tactics, AMA Legal Solutions can initiate immediate legal actions to freeze this harassment and report the violations to the RBI.
                    </p>
                  </div>
                </section>

                {/* The Payday Loan Settlement Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    The Payday Loan Settlement Process Explained
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Settling a payday loan is a formal legal process where the lender agrees to accept a single, reduced payment to resolve the account in full, waiving a significant portion of interest and penalties. Navigating this successfully requires a strategic approach.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Step 1: Evaluating the Total Outstanding Debt</h3>
                    <p>
                      The first step involves consolidating your financial liabilities. Our legal desk in Sector 57 Gurugram analyzes all active loan agreements, identifying the primary registered NBFC behind each mobile app. We isolate the actual principal disbursed from the inflated interest charges and arbitrary penalties.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Step 2: Issuing Formal Legal Representation Notices</h3>
                    <p>
                      Once represented by AMA Legal Solutions, we serve a formal legal notice to the NBFCs and digital platforms. This notice establishes that you are undergoing involuntary financial hardship and lists any violations committed by their collection agents (such as contact hacking or harassment). This legally compels the lender to halt all direct communication and recovery calls to you or your references, routing all future negotiations through our law firm.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Step 3: Negotiating One-Time Settlements (OTS) with NBFCs</h3>
                    <p>
                      With recovery harassment neutralized, we engage directly with the NBFC's credit and settlement committees. We present a documented hardship case (evidencing loss of employment, medical crisis, or severe income drop) and negotiate a <strong>One-Time Settlement (OTS)</strong>. We focus on securing a waiver of all accumulated interest and penalties, allowing you to settle the account by paying only the original principal amount, or in many cases, a discounted portion of the principal.
                    </p>
                  </div>
                </section>

                {/* Why Settle with AMA */}
                <section id="why-choose" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Why Settle Payday Loans with AMA Legal Solutions?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Managing debt settlement independently can be overwhelming, especially when dealing with aggressive, automated digital lenders. AMA Legal Solutions provides the specialized legal expertise needed to resolve these disputes effectively.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Dedicated Representation by Anuj Anand Malik’s Chambers</h3>
                    <p>
                      Our firm has pioneered debt resolution frameworks for digital lending in India. Founded by senior advocate <strong>Anuj Anand Malik</strong>, our legal chambers represent clients in negotiations with all major fintech NBFCs. We understand the internal risk metrics of these platforms and negotiate from a position of legal authority.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Stopping Recovery Agent Harassment Instantly</h3>
                    <p>
                      Our primary objective is to restore your peace of mind. By establishing formal legal representation, we enforce RBI compliance on recovery agents. Under the Fair Practice Code, once a lawyer is appointed, all recovery agent harassment must stop, and lenders must negotiate through our office. If harassment continues, we initiate legal complaints with the RBI Ombudsman and local cyber cell authorities.
                    </p>
                  </div>
                </section>

                {/* CIBIL & Credit Impact */}
                <section id="cibil" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Impact of Payday Loan Settlement on CIBIL Score
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <h3 className="text-xl font-bold text-gray-800">Settled vs. Closed Tag on Credit Reports</h3>
                    <p>
                      It is crucial to understand the <strong>CIBIL score impact</strong> of a debt settlement. When a loan is settled through an OTS, the lender reports the account status to credit bureaus (CIBIL, Experian, Equifax) as "Settled" rather than "Closed". A "Closed" status indicates the loan was repaid in full according to the original terms. A "Settled" status indicates that the lender accepted a write-off and waived a portion of the dues due to borrower distress.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800">Rebuilding Credit Post-Settlement</h3>
                    <p>
                      A "Settled" tag will temporarily lower your credit score and make traditional banks cautious about granting new credit for 12 to 24 months. However, settling the debt is far better than leaving accounts in active, compounding default. Once the settlement is complete and the lender issues a No Objection Certificate (NOC), your active default status is cleared. You can then begin rebuilding your credit history using secured credit cards, timely utility repayments, and micro-loans, eventually restoring an excellent credit profile.
                    </p>
                  </div>
                </section>

                {/* Debt Resolution Comparison Table */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Debt Resolution Comparison: Settling vs. Restructuring vs. Defaulting
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
                          <td className="px-6 py-4 font-semibold">Total Dues Payable</td>
                          <td className="px-6 py-4">Reduced amount (30% to 70% of total dues waived)</td>
                          <td className="px-6 py-4">Full amount payable, but with extended tenure</td>
                          <td className="px-6 py-4">100% of amount + daily late penalties compounding</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Recovery Harassment</td>
                          <td className="px-6 py-4">Ceases completely upon representation & OTS signing</td>
                          <td className="px-6 py-4">Ceases once restructured plan is activated</td>
                          <td className="px-6 py-4">Escalates aggressively with calls and visits</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Credit Score Impact</td>
                          <td className="px-6 py-4">Temporary drop; tag changes to 'Settled' (rebuildable)</td>
                          <td className="px-6 py-4">Minor impact; tag changes to 'Restructured'</td>
                          <td className="px-6 py-4">Severe continuous drop; permanent 'Written Off' tag</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Legal Risk Protection</td>
                          <td className="px-6 py-4">Complete legal protection; account closed permanently</td>
                          <td className="px-6 py-4">Protected, provided new EMIs are paid on time</td>
                          <td className="px-6 py-4">High risk of arbitration, Sec 25/138 notices</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-semibold">Time to Resolve</td>
                          <td className="px-6 py-4">30 to 60 days (Fast resolution)</td>
                          <td className="px-6 py-4">Varies based on restructured tenure extension</td>
                          <td className="px-6 py-4">Unresolved; remains active for years</td>
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

                {/* CTA section */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-[40px] p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Take Control of Your Financial Future</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Do not let digital lenders harass you. Our expert legal team is ready to stand by you and secure your financial freedom.
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
               <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">No matter where you are in India, AMA Legal Solutions is here to support you in settling payday loans. Founded by Anuj Anand Malik, our head office in Sector 57 Gurugram serves clients nationwide. Call 8700343611.</p>
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

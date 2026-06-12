import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is personal loan settlement in India?",
    answer: "A personal loan settlement is a mutual agreement negotiated between a borrower and a lending bank or Non-Banking Financial Company (NBFC) in India. When a borrower faces extreme financial hardship such as job loss or medical emergencies and cannot pay their pending equated monthly installments (EMIs), the bank may agree to accept a reduced lump sum payment to close the account permanently. This process, also known as One Time Settlement (OTS), allows the borrower to become debt-free by paying less than the total outstanding balance, primarily by waiving off penal interest, late fees, and a portion of the principal."
  },
  {
    question: "Is it legal to settle a personal loan in India?",
    answer: "Yes, it is entirely legal to settle a personal loan in India. The Reserve Bank of India (RBI) has laid down specific guidelines for banks and financial institutions to manage their Non-Performing Assets (NPAs) through legitimate debt resolution mechanisms, which include loan settlements. Banks have dedicated recovery committees that evaluate hardship cases and formally approve settlements. However, to ensure it is legally binding, borrowers must always secure an official settlement letter from the bank detailing the agreed terms before making any payment."
  },
  {
    question: "How much percentage can I save in a personal loan settlement?",
    answer: "The savings in a personal loan settlement depend entirely on your specific financial situation, the age of your default, your negotiation strategy, and the internal policies of the lending institution. On average, borrowers in India secure a settlement ranging between 30% to 60% of the total outstanding amount. In cases of severe, documented financial distress or older loan defaults, banks have been known to accept settlements as low as 25% to 30%. Engaging a legal expert often increases the chances of negotiating the maximum waiver."
  },
  {
    question: "How does a personal loan settlement affect my CIBIL score?",
    answer: "Opting for a personal loan settlement will negatively impact your CIBIL score. When a loan is settled instead of being paid in full according to the original agreement, the credit bureaus update the status of your account to 'Settled'. This status indicates to future lenders that you did not fulfill the complete financial obligation, resulting in a credit score drop of around 50 to 100 points. The 'Settled' remark typically stays on your credit report for up to seven years. However, this is generally less damaging than having an active 'Written Off' or 'Default' status."
  },
  {
    question: "Can recovery agents harass me at home or work if I default on my personal loan?",
    answer: "No, recovery agents do not have the legal right to harass, intimidate, or publicly shame you. The RBI has strictly directed banks regarding fair debt collection practices. Agents are prohibited from visiting you unannounced, calling at odd hours (before 8 AM or after 7 PM), using abusive language, or contacting your relatives and colleagues to discuss your debt. If you experience such harassment, you have the right to file formal complaints with the local police, the banking ombudsman, and you can intervene legally to stop them by hiring a lawyer to represent you."
  },
  {
    question: "What is the One Time Settlement (OTS) scheme?",
    answer: "The One Time Settlement (OTS) scheme is an official framework established by banks to recover bad loans efficiently. Under this scheme, the borrower is offered a chance to clear their entire overdue debt by paying an agreed-upon, discounted lump sum amount within a set timeframe. Banks periodically introduce OTS periods, typically toward the end of their financial quarters or fiscal year, to aggressively reduce their Non-Performing Assets (NPAs). Participating in an OTS requires formally applying to the bank with a proposal highlighting your financial incapacity."
  },
  {
    question: "Should I hire a lawyer to negotiate my personal loan settlement?",
    answer: "While it is possible to negotiate independently, hiring legal professionals like AMA Legal Solutions provides massive tactical and legal advantages. First, legal representation immediately stops illegal harassment from recovery agents as we mandate banks to communicate only through your counsel. Second, lawyers possess specialized knowledge of banking regulations, RBI guidelines, and negotiation strategies that typically result in significantly lower settlement figures than individuals can achieve alone. Furthermore, we thoroughly vet the final settlement agreement to ensure it contains no hidden liabilities."
  },
  {
    question: "Can I settle my personal loan in installments?",
    answer: "Banks strongly prefer a single, lump-sum payment for a loan settlement because it provides them with immediate recovery. However, if arranging a single payment is impossible, banks may agree to a 'Short Term Settlement' plan where the negotiated amount is split across three to six monthly installments. Keep in mind that securing an installment-based settlement might sometimes result in a slightly higher final settlement percentage compared to a ready cash offer."
  },
  {
    question: "What happens if I cannot pay the agreed settlement amount on time?",
    answer: "Failing to pay the agreed settlement amount by the specified deadline outlined in your formal settlement letter will unconditionally void the settlement agreement. The bank will immediately reinstate the original outstanding balance, including all previously waived principal, penal interest, and late payment fees. Your account will revert to the active recovery list, and the negotiation process must start over, often from a much weaker bargaining position. It is critical to only commit to an amount you can absolutely afford to pay on time."
  },
  {
    question: "Do you offer personal loan settlement services pan-India?",
    answer: "Yes, absolutely. AMA Legal Solutions is fully equipped to handle personal loan settlement cases across the length and breadth of India. Thanks to digitalization, we provide end-to-end legal support remotely, serving clients in all states and major cities including Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, and hundreds of Tier-2 and Tier-3 localities. Your physical location never impacts our ability to negotiate with banks and shield you from harassment."
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
      "name": "Personal Loan Settlement",
      "item": "https://www.amalegalsolutions.com/personal-loan-settlement"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Expert Guide to Personal Loan Settlement in India: End Your Debt Harassment Today",
  "description": "Comprehensive resource on personal loan settlement in India. Discover how to negotiate One Time Settlements, understand CIBIL impacts, protect your legal rights against recovery agents, and become completely debt-free.",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-03-11"
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
  "name": "Personal Loan Settlement Consultation",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
  "description": "Professional personal loan settlement and legal defense services to stop harassment and reduce total outstanding debt across India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2184"
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
        "name": "Rohit Sharma"
      },
      "reviewBody": "I was submerged in a heavy personal loan burden after losing my job. The continuous calls were destroying my mental peace. AMA Legal Solutions not only stopped the harassment but also arranged an incredible settlement at just 35% of my total dues. Highly recommended."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Deshmukh"
      },
      "reviewBody": "Their legal approach to personal loan settlement is highly professional. The team was transparent about the procedure, set realistic expectations regarding my CIBIL score, and delivered swift results with my bank in Pune."
    }
  ]
};

export const metadata = {
  title: "Personal Loan Settlement India | Stop Harassment & Clear Debt",
  description: "Struggling with personal loan EMIs? Our legal experts help you negotiate the best One Time Settlement (OTS) across all Indian cities and stop recovery agent harassment.",
  keywords: [
    "personal loan settlement",
    "personal loan settlement India",
    "one time settlement for personal loan",
    "settle personal loan",
    "personal loan default settlement",
    "loan settlement agent",
    "personal loan NPA settlement",
    "CIBIL score after personal loan settlement",
    "stop recovery harassment",
    "AMA legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/personal-loan-settlement',
  },
};

export default function PersonalLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Understanding Debt Relief" },
    { id: "what-is-settlement", title: "What is a Settlement?" },
    { id: "how-it-works", title: "How Settlement Works" },
    { id: "eligibility", title: "Hardship & Eligibility" },
    { id: "cibil-impact", title: "Impact on CIBIL Score" },
    { id: "step-by-step", title: "Step-by-Step Guide" },
    { id: "bank-percentages", title: "Bank Offer Percentages" },
    { id: "legal-rights", title: "Your Legal Rights" },
    { id: "alternatives", title: "Alternative Options" },
    { id: "ots-scheme", title: "One Time Settlement (OTS)" },
    { id: "stop-harassment", title: "Stopping Agent Harassment" },
    { id: "why-hire-lawyers", title: "Why Hire a Lawyer?" },
    { id: "pan-india-service", title: "Pan-India Services" },
    { id: "case-studies", title: "Client Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Personal Loan Settlement", href: "/personal-loan-settlement" },
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
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Complete Relief with <span className="text-[#D2A02A]">Personal Loan Settlement</span> in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Stop endless recovery calls, negotiate massive waivers on your pending dues, and rebuild your financial future legally and securely.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Your Free Case Review Today
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our Free App</p>
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
            {/* Left Sidebar Table Of Contents */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* Mobile Table Of Contents */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Section: Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding the Path to Financial Freedom</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Entering into a cycle of unmanageable debt is a terrifying experience for any hardworking individual. In India, unsecured credit mechanisms like personal loans come with high interest rates and aggressive recovery tactics. If circumstances beyond your control have caused you to default on your monthly installments, it is critical to know that you are not powerless. Securing a professional <strong>personal loan settlement</strong> is often the most sensible and practical approach to close a distressed chapter and reclaim your peace of mind.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The modern economic environment is marked by instability. Sudden job losses, medical emergencies, failing business ventures, or massive income reductions have unfortunately become commonplace. Banks and financial institutions fully recognize these systemic risks. Rather than pursuing endless, costly litigation to squeeze out every single pending rupee, banks often prefer to recover what they can through a mutually agreeable financial compromise. This compromise forms the core structure of <Link href="/loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">loan settlement</Link> procedures in India.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Navigating this banking procedure demands deep strategic insight and legal awareness. At AMA Legal Solutions, our mandate is to transform fearful borrowers into empowered negotiators. Our sophisticated legal representation enables clients from all walks of life to effectively challenge banking intimidation and dramatically reduce their outstanding liabilities. If you are a technology professional facing default due to sector-specific lay-offs or burnout, please consult our dedicated guide on <Link href="/loan-settlement-for-it-professionals" className="text-[#D2A02A] font-semibold hover:underline">loan settlement for IT professionals</Link> to understand your unique rights and background verification risks. Similarly, if you are a hospitality entrepreneur struggling with commercial liabilities, read our specialized roadmap on <Link href="/loan-settlement-for-restaurant-owners" className="text-[#D2A02A] font-semibold hover:underline">loan settlement for restaurant owners</Link> to secure your business assets. Likewise, if you are a self-employed contractor navigating debt challenges, our comprehensive guide on <Link href="/loan-settlement-for-freelancers" className="text-[#D2A02A] font-semibold hover:underline">loan settlement for freelancers</Link> provides a clear roadmap to resolve bank dues. Additionally, if you need details on legal rules, CIBIL score formulas, and RBI guidelines for personal loans, read our comprehensive handbook on <Link href="/pl-loan-settlement" className="text-[#D2A02A] font-semibold hover:underline">PL loan settlement</Link> to understand the complete process step-by-step.
                  </p>
                </section>

                {/* Section: What is a Settlement? */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What Exactly is a Personal Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      A personal loan settlement is essentially a formal, written compromise between the borrower and the lender. When the borrower proves genuine inability to clear the total outstanding balance, the lender agrees to accept a significantly reduced lump sum payment to close the account forever.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Think of a settlement as a tactical financial reset. Over months of non payment, the original principal balance becomes severely bloated. Banks apply escalating penal interest rates, late payment charges, cheque bounce fees, and recovery charges. Before long, the amount you owe might look double what you originally borrowed. A structured settlement targets these exact bloated figures.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In a successful negotiation scenario, the lender writes off 100% of the late fees, 100% of the penal interest, and a substantial portion of the original principal amount. The final figure you pay is purely a fraction of what their computer systems claim you owe. Once this agreed amount is deposited, the bank stops all recovery efforts, withdraws any potential legal notices, and officially considers the loan resolved.
                  </p>
                </section>

                {/* Section: How it Works */}
                <section id="how-it-works" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Mechanics of the Loan Settlement Process</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Lenders do not simply hand out settlement offers on demand. A specific set of procedural and temporal milestones must be met before a bank's recovery system will even consider entertaining a compromise. The typical lifecycle of a loan entering the settlement phase involves the following stages:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 bg-gray-50 p-6 rounded-xl">
                    <li><strong>Early Delinquency (1 to 30 Days):</strong> You miss your first EMI. The bank considers you temporarily delinquent and initiates gentle reminder calls. Settlement is generally not discussed here.</li>
                    <li><strong>Special Mention Account (31 to 89 Days):</strong> Your account drops into the Special Mention Account category. Recovery calls become highly aggressive. Banks want full payment of arrears and strongly resist offering discounts.</li>
                    <li><strong>Non Performing Asset Status (90 Days onwards):</strong> According to RBI guidelines, after 90 days of non payment, the loan is officially classified as a Non Performing Asset (NPA). At this stage, the bank must set aside capital to cover the expected loss, which heavily motivates them to initiate settlement talks.</li>
                    <li><strong>The Settlement Window:</strong> Once in NPA territory, the borrower or their legal counsel can formally submit hardship documentation and propose a deeply discounted settlement offer. The account undergoes evaluation by severe risk assessment teams.</li>
                    <li><strong>Closure:</strong> Upon successful negotiation, the bank issues a formalized settlement letter detailing the approved reduced amount, a strict timeline for payment, and a clause discharging all future liabilities.</li>
                  </ul>
                </section>

                {/* Section: Eligibility */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Determining Financial Hardship and Eligibility</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To extract an exceptionally favorable settlement percentage, the borrower must convincingly demonstrate genuine financial incapacity. If a bank suspects you have hidden assets or sufficient income to cover the EMIs, they will refuse to offer a substantial discount. Hardship representation is a factual, evidence-based argument rather than an emotional plea.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Job Loss or Salary Cuts</h4>
                      <p className="text-gray-600">The most straightforward hardship case involves submitting termination letters, relieving orders, or bank statements proving a prolonged halt in regular salary deposits during economic downturns.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Medical Emergencies</h4>
                      <p className="text-gray-600">Catastrophic health issues affect the primary earner. Hospitalization bills, prolonged treatment schedules, and disability certificates serve as powerful components in demonstrating inability to pay.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Business Failure</h4>
                      <p className="text-gray-600">For self employed borrowers, producing audited financial statements showing consecutive quarters of massive net loss provides banks with undeniable proof of business insolvency. For retail shopkeepers, you can read our specialized guide on <Link href="/loan-settlement-for-kirana-and-shop-owners" className="text-[#D2A02A] hover:underline font-semibold">loan settlement for Kirana and shop owners</Link> to understand your unique rights and options.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Death of Primary Breadwinner</h4>
                      <p className="text-gray-600">When the individual holding an unsecured loan passes away, surviving family members can often negotiate exceptionally low settlements since unsecured debts do not automatically transfer to heirs.</p>
                    </div>
                  </div>
                </section>

                {/* Section: CIBIL Impact */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Real Impact of Settlement on Your CIBIL Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the credit repercussions is an essential aspect of making an informed decision. The banking ecosystem views a settlement as a breach of the original contractual promise. While you save thousands or lakhs of rupees today, the long term trade off comes in the form of a blemished credit report.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Upon clearing the agreed settlement amount, the lender updates your CIBIL account status from 'Active Default' to 'Settled'. This singular word clearly signals to all future lenders that they incurred a loss servicing your previous account. Consequently, your numeric CIBIL score will experience a notable downward shift, often dropping into the subprime category. This remark is retained in the credit bureau databases for a period extending up to seven years.
                  </p>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    However, this is not a permanent financial exile. Rebuilding credit is entirely possible post settlement. By obtaining secured credit products like fixed deposit backed credit cards or gold loans, and managing them flawlessly, you can gradually push your score upward. You must weigh the immediate necessity of escaping crushing debt against the delayed ability to secure new unsecured credit.
                  </p>
                </section>

                {/* Section: Step-by-Step */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Step by Step Guide to a Successful Settlement</h2>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Assess Total Liabilities</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Consolidate statements from all lenders. Review the original principal amount versus the hyper inflated current outstanding balance. Determine realistically how much cash liquidity you can raise from family or savings to fund a lump sum offer.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Halt Partial Payments</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Continuing to pay tiny fractions of your EMI keeps the loan active and blocks it from hitting the NPA status required to trigger massive bank side discounts. You must strategically age the account while legally shielding yourself from the inevitable backlash.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Engage Legal Counsel</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Do not face a multi billion rupee bank alone. Appointing AMA Legal Solutions creates a professional firewall. We submit your finalized hardship proposal directly to the senior recovery echelon, bypassing low level aggressive field agents entirely.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Execute the Formal Agreement</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Never transfer funds based on a verbal commitment or a WhatsApp typed assurance. Wait for the bank headquarters to dispatch an official OTS settlement letter on watermarked company letterhead outlining the exact figures and the mandatory No Dues Clause.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section: Bank Percentages */}
                <section id="bank-percentages" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Analyzing Bank Settlement Offer Percentages</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Different lenders employ distinct risk models. Public sector banks, private banking institutions, and fintech startups all operate unique recovery systems. While figures fluctuate wildly based on your specific profile, the following table presents observed market trends for personal loan resolution percentages across India.
                  </p>
                  <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                          <th scope="col" className="px-6 py-4">Financial Institution Category</th>
                          <th scope="col" className="px-6 py-4 bg-blue-50 text-blue-900 font-bold">Likely Settlement Target</th>
                          <th scope="col" className="px-6 py-4">Negotiation Difficulty Index</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900 text-base">Public Sector Banks</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900 font-bold text-base">35% to 55%</td>
                          <td className="px-6 py-4">Rigid structures, require formal OTS drives</td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900 text-base">Tier 1 Private Banks</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900 font-bold text-base">30% to 50%</td>
                          <td className="px-6 py-4">Highly responsive to skilled legal representation</td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900 text-base">Large NBFCs</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900 font-bold text-base">45% to 65%</td>
                          <td className="px-6 py-4">Focus on aggressive initial recovery efforts</td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900 text-base">New Age FinTech Lenders</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900 font-bold text-base">60% to 80%</td>
                          <td className="px-6 py-4">Relentless automated tactics, difficult discounts</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section: Legal Rights */}
                <section id="legal-rights" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Comprehensive Legal Rights in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A prevalent misconception among defaulters is that non payment strips them of their civil liberties. This is profoundly incorrect. The Supreme Court of India and the Reserve Bank of India mandate that lenders uphold dignity and respect during all debt recovery operations. Legal protections shield you from predatory banking practices.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Prohibition of Intimidation</h4>
                      <p className="text-gray-600">Recovery personnel are stringently barred from entering your residential premises non consensually. Utilizing physical threats, aggressive posturing, or verbal extortion is a heavily prosecutable criminal offense.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Strict Communication Timings</h4>
                      <p className="text-gray-600">Operational codes strictly restrict telephonic communication to standard hours normally between 8:00 AM and 7:00 PM. Repeated late night calls constitute intentional harassment.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Right to Confidentiality</h4>
                      <p className="text-gray-600">Lenders cannot legally humiliate you by broadcasting your financial status. Contacting extended family members, neighbors, or workplace management to discuss your private debt matters is highly illegal.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Mandatory Advance Notifications</h4>
                      <p className="text-gray-600">Prior to initiating any judicial proceedings, including submitting a cheque bounce case under Section 138 of the Negotiable Instruments Act, banks must formally serve you specific legal notices affording response times.</p>
                    </div>
                  </div>
                </section>
                
                {/* Section: Alternatives */}
                <section id="alternatives" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Sensible Alternatives Before Considering Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Because a formal settlement irreparably damages your CIBIL score for years, it should truly be utilized only as the final resolution mechanism. Depending on the severity and expected duration of your financial crisis, you might explore alternative banking reliefs that better preserve your long term credit capability.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Loan Restructuring:</strong> This involves formally requesting the bank to increase your total loan tenure while simultaneously lowering your monthly EMI load. While you pay more total interest over time, your monthly budget gains massive breathing room, and your CIBIL account remains active and positive.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Balance Transfer and Consolidation:</strong> If you are managing multiple credit cards with exorbitant interest rates, transferring these balances to a single, lower interest personal loan can instantly streamline payments and minimize the risk of missing disparate due dates.
                  </p>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    Discussing your distinct profile with our legal team will clarify whether you require restructuring, consolidation, or aggressive settlement. We ensure you make the most optimal life decision.
                  </p>
                </section>

                {/* Section: OTS Scheme */}
                <section id="ots-scheme" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Demystifying the One Time Settlement (OTS) Mechanism</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The focal point of resolving high value personal loans is obtaining the One Time Settlement (OTS) agreement. The bank evaluates your proposal against internal benchmarks representing their expected financial recovery rate. To validate any arrangement, borrowers must scrutinize the OTS letter flawlessly.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Accurate Personal Details
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Exact Final Figures
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Explicit Payment Deadlines
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Absolute Liability Discharge
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Authorized Signatures
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> CIBIL Updating Promises
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    Our law firm audits these letters rigorously prior to authorizing client payments. Should a letter contain ambiguous language regarding future principal recovery, we legally reject the document and force the bank to issue a corrected, binding version.
                  </p>
                </section>

                {/* Section: Stop Harassment */}
                <section id="stop-harassment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Immediately Terminating Recovery Agent Harassment</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Unregulated harassment from third party collection agencies drives countless borrowers into deep psychological distress. Halting this harassment is the primary objective when you associate with professional legal counsel. By exercising your <strong>Right to Representation</strong>, we officially intercede between you and the threatening entities.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm border-l-4 border-l-red-600">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Enforcing a Zero Tolerance Environment</h3>
                    <p className="text-gray-700 text-xs md:text-base">
                      Upon taking your case, we draft firm cease and desist notices forcing lenders to direct communications solely to our law offices. Any subsequent direct calls to your personal numbers represent gross regulatory violations. We readily escalate unauthorized harassment matters to banking ombudsmen and consumer protection forums. We restore your daily peace abruptly and effectively.
                    </p>
                  </div>
                </section>

                {/* Section: Why Hire Lawyers */}
                <section id="why-hire-lawyers" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Specialized Legal Representation</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Negotiating complex banking disputes utilizing layman tactics frequently results in suboptimal outcomes or disastrous legal traps. Leveraging expert advocates from AMA Legal Solutions transforms a vulnerable position into an impregnable defense.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4 text-[#D2A02A]">⚖️</div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">Absolute Shield</h3>
                      <p className="text-gray-600">We manage all hostile notices, legal summons, and unannounced visits efficiently.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4 text-[#D2A02A]">💼</div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">Elite Negotiation</h3>
                      <p className="text-gray-600">We engage directly with top tier bank management to secure maximum percentage waivers.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4 text-[#D2A02A]">🛡️</div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">Documentation Audits</h3>
                      <p className="text-gray-600">Every OTS letter is meticulously filtered for dangerous loopholes before payment.</p>
                    </div>
                  </div>
                </section>

                {/* Section: Pan India Content */}
                <section id="pan-india-service" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivering Trusted Service Across the Entire Nation of India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    AMA Legal Solutions actively manages settlement cases regardless of geographic boundaries. Our advanced digital consultation model guarantees impeccable legal assistance whether you reside within the largest metropolises or the most remote interior towns. We serve clients across all regions because financial distress demands ubiquitous solutions.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We cover every state including: <strong>Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, and West Bengal.</strong>
                  </p>
                  <div className="grid md:grid-cols-4 gap-4 bg-gray-50 p-6 rounded-xl text-sm text-gray-600 italic border border-gray-200 shadow-inner">
                    <div>• Mumbai</div><div>• Delhi</div><div>• Bengaluru</div><div>• Chennai</div>
                    <div>• Kolkata</div><div>• Hyderabad</div><div>• Ahmedabad</div><div>• Pune</div>
                    <div>• Surat</div><div>• Jaipur</div><div>• Lucknow</div><div>• Kanpur</div>
                    <div>• Nagpur</div><div>• Indore</div><div>• Thane</div><div>• Bhopal</div>
                    <div>• Visakhapatnam</div><div>• Patna</div><div>• Vadodara</div><div>• Ghaziabad</div>
                    <div>• Ludhiana</div><div>• Agra</div><div>• Nashik</div><div>• Faridabad</div>
                    <div>• Meerut</div><div>• Rajkot</div><div>• Varanasi</div><div>• Srinagar</div>
                    <div>• Aurangabad</div><div>• Dhanbad</div><div>• Amritsar</div><div>• Navi Mumbai</div>
                    <div>• Allahabad</div><div>• Ranchi</div><div>• Howrah</div><div>• Jabalpur</div>
                    <div>• Gwalior</div><div>• Vijayawada</div><div>• Jodhpur</div><div>• Madurai</div>
                    <div>• Raipur</div><div>• Kota</div><div>• Guwahati</div><div>• Chandigarh</div>
                    <div>• Solapur</div><div>• Hubli-Dharwad</div><div>• Bareilly</div><div>• Moradabad</div>
                    <div>• Mysore</div><div>• Gurgaon</div><div>• Noida</div><div>• Aligarh</div>
                    <div>• Jalandhar</div><div>• Tiruchirappalli</div><div>• Bhubaneswar</div><div>• Salem</div>
                    <div>• Warangal</div><div>• Mira-Bhayandar</div><div>• Thiruvananthapuram</div><div>• Bhiwandi</div>
                    <div>• Guntur</div><div>• Amravati</div><div>• Bikaner</div><div>• Jamshedpur</div>
                    <div>• Bhilai</div><div>• Cuttack</div><div>• Kochi</div><div>• Nellore</div>
                    <div>• Bhavnagar</div><div>• Dehradun</div><div>• Durgapur</div><div>• Asansol</div>
                    <div>• Rourkela</div><div>• Nanded</div><div>• Kolhapur</div><div>• Ajmer</div>
                    <div>• Akola</div><div>• Gulbarga</div><div>• Jamnagar</div><div>• Ujjain</div>
                    <div>• Loni</div><div>• Siliguri</div><div>• Jhansi</div><div>• Ulhasnagar</div>
                    <div>• Jammu</div><div>• Sangli</div><div>• Mangalore</div><div>• Erode</div>
                    <div>• Belgaum</div><div>• Kurnool</div><div>• Ambattur</div><div>• Rajahmundry</div>
                    <div>• Tirunelveli</div><div>• Malegaon</div><div>• Gaya</div><div>• Jalgaon</div>
                    <div>• Udaipur</div><div>• Maheshtala</div><div>• Davanagere</div><div>• Kozhikode</div>
                    <div>• Akola</div><div>• Kurnool</div><div>• Bokaro</div><div>• South Dumdum</div>
                    <div>• Bellary</div><div>• Patiala</div><div>• Gopalpur</div><div>• Agartala</div>
                    <div>• Bhagalpur</div><div>• Muzaffarnagar</div><div>• Bhatpara</div><div>• Panihati</div>
                    <div>• Latur</div><div>• Dhule</div><div>• Tirupati</div><div>• Rohtak</div>
                  </div>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    No matter where you are situated in India, our dedicated advocates are prepared to protect your rights, coordinate with local banking channels, and successfully secure an outstanding settlement package tailored to your financial reality.
                  </p>
                </section>

                {/* Section: Testimonials */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviewSchema.review.map((rev, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                        <div className="flex text-[#D2A02A] mb-3 relative z-10">
                          {Array.from({ length: Number(rev.reviewRating.ratingValue) }).map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-4 relative z-10">
                          "{rev.reviewBody}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">
                            {rev.author.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{rev.author.name}</p>
                            <p className="text-sm text-gray-500">Verified Client</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0 hover:bg-gray-50 p-4 transition-colors rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 mt-1 shadow-sm">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Eliminate Debt Stress. Secure Your Financial Future Today.</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto font-light">
                      Do not let insurmountable debts and harassment destroy your life. Connect with our expert litigation team to negotiate the best possible One Time Settlement across India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book an Expert Legal Strategy Session
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Urgent Support: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70 tracking-wider uppercase">
                      100% Confidential • Proven Legal Expertise • Unmatched Results
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar Container */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* 1st CTA Container */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-transform hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Settlement Assistance</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Stop the harassment immediately. Speak to our senior personal loan settlement lawyers right now.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4 shadow"
                  >
                    Call Support: +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full border border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Fill Contact Form
                  </Link>
                </div>

                {/* 2nd Related Pages Container */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Related Services</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/what-is-a-reasonable-settlement-offer" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="mr-2 text-[#D2A02A]">›</span> What is a Reasonable Offer?
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="mr-2 text-[#D2A02A]">›</span> General Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/what-is-ots" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="mr-2 text-[#D2A02A]">›</span> Explore OTS Strategies
                      </Link>
                    </li>
                    <li>
                      <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="mr-2 text-[#D2A02A]">›</span> Stop Agency Harassment
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement/hdfc-bank" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="mr-2 text-[#D2A02A]">›</span> HDFC Personal Loan Help
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement/sbi-bank" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="mr-2 text-[#D2A02A]">›</span> SBI NPA Resolution
                      </Link>
                    </li>
                    <li>
                      <Link href="/loan-settlement-amount-calculator" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="mr-2 text-[#D2A02A]">›</span> Try the Deal Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/expert-panel-loan-settlement-reviews" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="mr-2 text-[#D2A02A]">›</span> Read Client Reviews
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

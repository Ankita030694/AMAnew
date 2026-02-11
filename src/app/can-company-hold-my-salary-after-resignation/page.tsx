import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can my employer legally hold my salary after I resign?",
    answer: "The short answer is no, not arbitrarily. Wages are for work already performed. While an employer can adjust notice pay or specific asset losses (if documented), they cannot 'hold' your entire salary as a pressure tactic. The Payment of Wages Act and various state Shops and Establishments Acts mandate timely payment of final dues."
  },
  {
    question: "What is the legal timeline for FNF settlement in India?",
    answer: "Standard industry practice is 30 to 45 days. However, under the Payment of Wages Act, if you are terminated, payment must be made within 48 hours. For resignation, the contract usually dictates the timeframe, but it must be 'reasonable.' Delaying beyond 45 days is generally considered a violation."
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
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Can Company Hold My Salary After Resignation",
      "item": "https://amalegalsolutions.com/can-company-hold-my-salary-after-resignation"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can Company Hold My Salary After Resignation? Legal Limits and Your Recovery Rights",
  "description": "Exhaustive legal guide on whether an employer can legally withhold your salary after resignation in India. Covers labor laws, constitutional rights, and recovery steps.",
  "image": "https://amalegalsolutions.com/og-salary-hold.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-02-11",
  "dateModified": "2024-02-11"
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
  "name": "Salary Recovery Consultation",
  "image": "https://amalegalsolutions.com/og-salary-hold.png",
  "description": "Expert legal representation for employees facing salary withholding or FNF delays after resignation.",
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
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Vikram S." },
      "reviewBody": "AMA Legal Solutions helped me recover my 2-month salary which my boss was holding for 'asset clearance' despite me returning everything. Their legal notice worked instantly."
    }
  ]
};

export const metadata = {
  title: "Can Company Hold My Salary After Resignation? Legal Rights in India",
  description:
    "Is your company withholding your salary post-resignation? Learn about the legal validity of salary holds, your rights under Indian labor laws, and how to recover your dues.",
  keywords: [
    "can company hold salary after resignation",
    "legal validity of salary withholding",
    "employer holding fnf settlement",
    "labor law for unpaid salary",
    "salary hold for asset recovery",
    "how to recover held salary",
    "ama legal solutions salary recovery",
    "legal action for salary hold"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/can-company-hold-my-salary-after-resignation',
  },
};

export default function SalaryHoldPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-validity", title: "Legal Validity" },
    { id: "constitutional-basis", title: "Constitutional Rights" },
    { id: "statutory-deadlines", title: "Statutory Timelines" },
    { id: "asset-vs-salary", title: "Asset Hold vs Salary" },
    { id: "notice-pay-disputes", title: "Notice Pay Recovery" },
    { id: "evidence-checklist", title: "Evidence Needed" },
    { id: "recovery-roadmap", title: "45-Day Strategy" },
    { id: "legal-notice-power", title: "Legal Notice Impact" },
    { id: "labour-dept-steps", title: "Labour Dept Role" },
    { id: "labour-court-filing", title: "Labour Court Action" },
    { id: "summary-suit-order37", title: "Summary Suit (O-37)" },
    { id: "limitation-period", title: "Limitation Clock" },
    { id: "gratuity-bonus-arrears", title: "Gratuity & Bonus" },
    { id: "mental-agony-claim", title: "Mental Agony Damages" },
    { id: "startup-specifics", title: "Startup & IT Rules" },
    { id: "state-nuances", title: "State-Wide Laws" },
    { id: "forensic-evidence", title: "Forensic Trail" },
    { id: "criminal-liability", title: "Criminal Dimension" },
    { id: "epf-pf-security", title: "EPF & PF Shield" },
    { id: "tax-relief-10e", title: "Tax Relief (Sec 89)" },
    { id: "case-studies", title: "Success Scenarios" },
    { id: "faq-section", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Salary Hold", href: "/can-company-hold-my-salary-after-resignation" },
  ];

  const relatedPages = [
    { label: "Employer Not Paying Salary", href: "/employer-not-paying-salary-after-resignation" },
    { label: "Legal Notice for FNF", href: "/not-being-paid-fnf-want-to-send-legal-notice" },
    { label: "Loan Settlement Expert", href: "/services/loan-settlement" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#D2A02A] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-2xl md:text-6xl font-extrabold mb-5 md:mb-8 leading-tight tracking-tight">
              Is Your Company <span className="text-[#D2A02A]">Legally Allowed to Hold</span> Your Salary After Resignation?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-medium">
              A comprehensive legal breakdown of wage withholding, FNF deadlocks, and your statutory recovery rights in India. Stop the "Policy" excuses and reclaim your earned wages through expert litigation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-7 md:py-5 md:px-14 rounded-full transition-all transform hover:scale-105 shadow-2xl text-sm md:text-xl">
                    Recover My Salary Now
                  </button>
                </Link>
                <a href="tel:+918700343611" className="bg-transparent border-2 border-white/30 backdrop-blur-sm hover:border-[#D2A02A] text-white font-bold py-3 px-7 md:py-5 md:px-14 rounded-full transition-all transform hover:scale-105 text-sm md:text-xl">
                    Free Case Review
                </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-3 border-b pb-2">Topic Overview</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">The Salary "Deadlock": A Critical Analysis</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 md:space-y-8 mt-6">
                    <p className="text-base md:text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-[#D2A02A] first-letter:mr-3 first-letter:float-left">
                      "We will release your salary once the audit is complete," or "Your FNF is on hold until we find a replacement." These are the most common refrains heard by employees across India-from Gurugram's tech parks to Mumbai's corporate hubs-the moment they submit their resignation. But the central question remains: <strong>Is it legally permissible for a company to simply 'hold' your salary?</strong>
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      At AMA Legal Solutions, we witness a growing trend where the Full and Final (FNF) settlement is no longer treated as a statutory obligation, but as a weapon for leverage, coercion, or even corporate retaliation. Many employers operate under the profound misconception that they possess arbitrary control over an employee's wages. However, Indian jurisprudence is clear: wages are the remuneration for work already performed. Once the labor is rendered, the right to the wage is absolute and vest in the employee immediately.
                    </p>
                    <div className="bg-gray-900 text-white p-10 rounded-[2rem] border-l-[10px] border-[#D2A02A] relative group">
                        <div className="absolute top-4 left-4 text-[#D2A02A] text-6xl opacity-20 group-hover:opacity-40 transition-opacity">"</div>
                        <p className="text-lg md:text-xl italic font-medium leading-relaxed">
                          "The relationship of an employee and employer is fundamentally contractual, yet the right to receive wages transcends the contract; it is a statutory guarantee protected by the social justice framework of the Constitution of India and various central labor codes."
                        </p>
                        <div className="mt-4 text-[#D2A02A] font-bold text-sm tracking-widest uppercase text-right">- Supreme Court Principles</div>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed">
                        When a company 'holds' a salary, they aren't just delaying a payment; they are disrupting a livelihood. Many employees rely on their FNF to fund their relocation, clear pending home loans, or manage their household during a career transition. This arbitrary holding of funds can be classified as 'wage theft' in several international jurisdictions, and in India, it is a direct violation of the Payment of Wages Act and the Shops and Establishments Acts of several states.
                    </p>
                  </div>
                </section>

                {/* Legal Vocabulary Section (New) */}
                <section id="legal-vocabulary" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Legal Vocabulary: Terms You Must Know</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                        To fight a salary hold case, you must speak the language of the law. Here are the technical terms often used by HR and Legal teams to confuse employees:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase text-xs tracking-wider">01. Liquidated Damages</h4>
                            <p className="text-sm text-gray-600">This is a pre-estimated amount mentioned in your contract for a specific breach (like not serving a notice period). A company cannot charge more than what is reasonable or what is mentioned as the actual loss.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase text-xs tracking-wider">02. Right of Set-off</h4>
                            <p className="text-sm text-gray-600">The alleged right of an employer to deduct debts you owe them (like a laptop cost) from your salary. However, this is tightly regulated and cannot result in a 100% hold.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase text-xs tracking-wider">03. Estoppel</h4>
                            <p className="text-sm text-gray-600">If your manager previously told you in writing that your notice period is waived, the company is 'estopped' (prevented) from later claiming notice pay from your FNF.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase text-xs tracking-wider">04. Statutory Dues</h4>
                            <p className="text-sm text-gray-600">Payments mandated by law (PF, Gratuity, Bonus). These can NEVER be 'held' for internal company audits or performance reasons.</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Legal Validity */}
                <section id="legal-validity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Legal Validity: When Can an Employer "Hold" Pay?</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Legally, there is no such thing as an "indefinite hold" on a salary. The law recognizes only "deductions" or "adjustments." Under the <strong>Payment of Wages Act, 1936</strong> (Section 7), an employer can only deduct amounts for specific reasons:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-red-50 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-2 right-2 text-red-200 text-3xl font-bold opacity-20">❌</div>
                        <h4 className="font-bold text-red-900 mb-2">ILLEGAL Reasons to Hold</h4>
                        <ul className="text-xs text-red-800 space-y-2 list-disc pl-4">
                          <li>Pending "Internal Audit" without a prior disciplinary case.</li>
                          <li>"Performance discovery" made post-resignation.</li>
                          <li>Failure to find a replacement for your role.</li>
                          <li>Vague "client dissatisfaction" with your previous work.</li>
                          <li>Notice period "buy-out" disputes if the contract is silent.</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-2 right-2 text-green-200 text-3xl font-bold opacity-20">✔</div>
                        <h4 className="font-bold text-green-900 mb-2">LEGAL Dedutions (Limited)</h4>
                        <ul className="text-xs text-green-800 space-y-2 list-disc pl-4">
                          <li>Recovery of Actual Liquidated Damages (e.g., lost laptop).</li>
                          <li>Notice Pay in lieu of notice (as per contract).</li>
                          <li>Income Tax (TDS), Provident Fund, and Professional Tax.</li>
                          <li>Recovery of advances or loans taken from the company.</li>
                          <li>Salary for days not worked (LOP).</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Constitutional Basis */}
                <section id="constitutional-basis" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Constitutional Shield: Article 21 and the Right to Wages</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Supreme Court of India has elevated the right to wages from a mere contractual claim to a <strong>Fundamental Right</strong>. In the landmark case of <strong>*State of Maharashtra v. Chandrabhan Tale (1983)*</strong>, the court held that wages are 'property' and any arbitrary withholding of such property is a violation of the <strong>Right to Life</strong> under Article 21. 
                    </p>
                    <div className="bg-[#1a202c] text-white p-8 rounded-2xl border-l-4 border-[#D2A02A]">
                      <h4 className="text-[#D2A02A] font-bold mb-3 uppercase tracking-widest text-xs">Supreme Court Insight</h4>
                      <p className="text-sm opacity-90 leading-relaxed italic">
                        "A person who works is entitled to his wages. Forcing a person to work without pay or withholding his earned pay is a form of 'begar' or forced labor, which is prohibited under Article 23 of the Constitution."
                      </p>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      This means that when your HR department tells you typical "company policy" requires a 90-day hold, they are potentially in conflict with the highest law of the land. No company policy can override the Constitutional mandate or Central Labour Statutes.
                    </p>
                  </div>
                </section>
                
                {/* Statutory Timelines */}
                <section id="statutory-deadlines" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-b-2 border-[#D2A02A] pb-2 inline-block">Statutory Timelines: The 48-Hour vs 45-Day Rule</h2>
                   <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                      <p className="text-sm md:text-base leading-relaxed">
                        Many employers assume they have an infinite amount of time to settle FNF. The law says otherwise. Depending on the nature of your exit, the clock starts ticking immediately:
                      </p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-500">
                           <h4 className="font-bold text-gray-900 mb-2">1. The "Termination" Timeline (48 Hours)</h4>
                           <p className="text-sm text-gray-600">Under the <strong>Payment of Wages Act</strong>, if an employee is terminated by the employer, all wages earned must be paid before the expiry of the <strong>second working day</strong> from the date of termination. Delaying beyond this can attract penal interest and labor court intervention.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-green-500">
                           <h4 className="font-bold text-gray-900 mb-2">2. The "Resignation" Timeline (Industry Standard vs Law)</h4>
                           <p className="text-sm text-gray-600">For resignation, various state-specific <strong>Shops and Establishments Acts</strong> (like in Maharashtra or Delhi) mandate payment within <strong>15 to 30 days</strong>. If the law is silent, the industry standard of <strong>45 days</strong> is what the court considers "reasonable." Indefinite holds for audits or clearance are legally flawed.</p>
                        </div>
                      </div>
                   </div>
                </section>

                {/* Asset vs Salary */}
                <section id="asset-vs-salary" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The Asset Hold vs. Salary Deadlock: What the Law Says</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The most frequent excuse used by HR departments to withhold salary is "pending clearance" for company assets like laptops, mobile phones, or ID cards. While an employer *can* hold the specific FNF amount for an unreturned laptop (valued at its depreciated cost), they <strong>cannot legally hold your entire salary</strong> for a device.
                    </p>
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                      <h4 className="font-bold text-amber-900 mb-2">The "Proportionality" Rule</h4>
                      <p className="text-sm text-amber-800">
                        If you owe the company a laptop worth ₹50,000, but your FNF is ₹2,00,000, the company is legally obligated to release the undisputed ₹1,50,000 immediately. Holding the additional ₹1.5L as "pressure" is an illegal deduction under the Payment of Wages Act.
                      </p>
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">Asset Handover: The Forensic Proof</h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      To break this deadlock, you must create a "non-refutable" trail of asset return. We recommend:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
                      <li><strong>Video Record the Handover:</strong> If returning in person, record a 30-second video of you handing over the device to the IT person, showing it's in working condition.</li>
                      <li><strong>The "IT Clearance" Snapshot:</strong> If you use an internal portal (like Darwinbox or Workday), take a screenshot of the "Clearance" status before your access is revoked.</li>
                      <li><strong>Registered Post for Remote Returns:</strong> If you are shipping the laptop, do it via a premium courier with insurance and "Acknowledgment Due." The tracking receipt is your legal proof of delivery.</li>
                    </ul>
                  </div>
                </section>

                {/* Notice Pay Disputes */}
                <section id="notice-pay-disputes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Notice Pay Disputes: When Recovery Becomes Extortion</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Another common friction point is the notice period. If you quit without serving the full 2 or 3 months, companies often try to recover "Notice Pay." While legal in principle if it's in the contract, it often turns into extortion when they try to overcharge or ignore prior waivers.
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900">1. Is there a "Buy-out" Option?</h4>
                      <p className="text-sm text-gray-600">Check your appointment letter. If it says "Notice period of 3 months OR salary in lieu thereof," the choice of buy-out is often yours. If the company forces you to serve notice despite you offering the buy-out, they may be in breach of contract.</p>
                      
                      <h4 className="font-bold text-gray-900">2. The "Shortfall" Calculation</h4>
                      <p className="text-sm text-gray-600">Notice pay should be calculated on 'Basic Salary' in most legal interpretations, not on 'Gross CTC.' Many companies try to deduct the full CTC amount, which is a gross over-calculation. We often use this technicality to reduce our clients' liabilities during settlements.</p>

                      <h4 className="font-bold text-gray-900">3. Written Waivers are Gold</h4>
                      <p className="text-sm text-gray-600">If your manager said "Don't worry about the last 15 days," get it on email. Verbal promises are unenforceable. Once you have a written waiver, the HR cannot later deduct that amount from your salary.</p>
                    </div>
                  </div>
                </section>

                {/* Evidence Checklist */}
                <section id="evidence-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-b-2 border-[#D2A02A] pb-2 inline-block">The "Battle-Ready" Evidence Inventory</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To recover a held salary, you don't just need a lawyer; you need a paper trail. Before your official email access is cut off on your last working day, you must gather these "Five Pillars of Evidence":
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <span className="text-[#D2A02A] font-bold">01.</span>
                        <h5 className="font-bold text-gray-900 mt-2">The Acceptance Email</h5>
                        <p className="text-xs text-gray-500 mt-1">Proof that the company accepted your resignation and acknowledged your last working day (LWD).</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <span className="text-[#D2A02A] font-bold">02.</span>
                        <h5 className="font-bold text-gray-900 mt-2">IT & Admin Clearance</h5>
                        <p className="text-xs text-gray-500 mt-1">Screenshots or PDFs showing all assets returned and 'No Dues' from various departments.</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <span className="text-[#D2A02A] font-bold">03.</span>
                        <h5 className="font-bold text-gray-900 mt-2">Previous Salary Slips</h5>
                        <p className="text-xs text-gray-500 mt-1">Crucial for calculating the exact held amount, including HRA, LTA, and other variable components.</p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <span className="text-[#D2A02A] font-bold">04.</span>
                        <h5 className="font-bold text-gray-900 mt-2">Communications Trail</h5>
                        <p className="text-xs text-gray-500 mt-1">PDF exports of emails where you asked for FNF status and received vague or evasive replies.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Recovery Roadmap */}
                <section id="recovery-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The 45-Day Recovery Roadmap: A Strategic Approach</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-8">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your salary is on hold, don't wait for months. Use this 45-day legal "escalation ladder" to force a payout:
                    </p>
                    
                    <div className="relative border-l-2 border-gray-100 pl-8 ml-4 space-y-12">
                      <div className="relative">
                        <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-gray-900">Phase 1: The Formal Demand (Day 1-15)</h4>
                        <p className="text-sm text-gray-600 mt-2">
                          Send a formal email to HR, Finance, and the Directors. Title it: "Immediate Release of Full and Final Settlement Dues." Attach your evidence of clearance. Give them a hard 7-day deadline.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#1a202c] border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-gray-900">Phase 2: The Legal "Pre-Action" Notice (Day 16-30)</h4>
                        <p className="text-sm text-gray-600 mt-2">
                          If the email is ignored, engage a professional labor lawyer. A formal legal notice on a law firm's letterhead signals that you are willing to litigate. This is where 80% of salary hold cases are resolved.
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-sm"></div>
                        <h4 className="font-bold text-gray-900">Phase 3: Statutory Escalation (Day 31-45)</h4>
                        <p className="text-sm text-gray-600 mt-2">
                          File a complaint on the SAMADHAN portal and approach the Regional Labour Commissioner. At this stage, the company faces government scrutiny, which most firms want to avoid at all costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Block 5 - Litigation */}
                <section id="legal-notice-power" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The Legal Notice: Turning the Tables on the Employer</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common mistake employees make is sending repeated "reminders" via email. Once you hit the 30-day mark, reminders stop working because the company knows you are hesitant to take action. A <strong>Formal Legal Notice</strong> drafted by AMA Legal Solutions changes the dynamic from a "HR issue" to a "Legal Risk."
                    </p>
                    <div className="bg-gray-900 text-white p-6 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      <h4 className="text-[#D2A02A] font-bold mb-4">What Our Strategic Notice Includes:</h4>
                      <ul className="text-sm space-y-3 opacity-90">
                        <li className="flex items-start gap-2">
                          <span className="text-[#D2A02A]">➤</span>
                          <span><strong>Director Personal Liability:</strong> We often name the Directors/Promoters to pierce the corporate veil in wage theft cases. This ensures that the decision-makers are aware of the personal legal risks they face by withholding your salary.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D2A02A]">➤</span>
                          <span><strong>Penal Interest:</strong> We demand 18% p.a. interest as per Section 3 of the Interest Act, 1978. Calculating this interest from the date the payment became due creates an additional financial burden on the company, making settlement more attractive.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#D2A02A]">➤</span>
                          <span><strong>Damage for Mental Agony:</strong> We quantify the stress and financial hardship caused to you, putting a price tag on the company's delay.</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* New Case Study Snippet */}
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100 italic mt-6">
                        <p className="text-sm text-red-900 line-clamp-4">
                            <strong>Case Study: The "Director Liability" Breakthrough</strong><br/>
                            In a 2023 case handled by AMA Legal Solutions, a fintech startup withheld the FNF of 12 employees for 6 months. We didn't just sue the company; we served notices individually to the Venture Capitalists (VCs) on the board and the founder's residential address. Within 48 hours of naming the the directors personally in a criminal complaint for 'Criminal Breach of Trust', the entire dues for all 12 employees were cleared with an apology.
                        </p>
                    </div>
                  </div>
                </section>

                <section id="labour-dept-steps" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The Labour Commissioner & SAMADHAN Portal</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the notice is ignored, the next step is the Office of the Regional Labour Commissioner (RLC). This process has been streamlined through the <strong>SAMADHAN Portal</strong>. It’s an effective pre-litigation step that often forces companies to the negotiating table before a formal trial.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 italic">
                      <p className="text-sm text-blue-900">
                        <strong>Why SAMADHAN works:</strong> Most established companies dread being summoned by the Labour Commissioner. It enters their regulatory record and can affect their reputation with government bodies and compliance auditors.
                      </p>
                    </div>
                    <ul className="list-decimal pl-6 space-y-4 text-sm md:text-base">
                      <li><strong>Filing the Dispute:</strong> You upload your appointment letter, resignation acceptance, and a copy of the legal notice. The portal provides a tracking ID for your case.</li>
                      <li><strong>Conciliation Summons:</strong> The Labour Commissioner's office issues a summons to the company HR/Legal head to appear for a conciliation meeting on a specified date.</li>
                      <li><strong>The Mediation:</strong> A government officer mediates the discussion. If the company claims "financial difficulty," the officer can ask for proof or mandate a payment schedule.</li>
                    </ul>
                  </div>
                </section>

                <section id="labour-court-filing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Labour Court: Computing Your Dues under Section 33-C(2)</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When mediation fails, the matter moves to the Labour Court. Under <strong>Section 33-C(2) of the Industrial Disputes Act</strong>, the court acts as a computational body. This is faster than a standard civil recovery suit.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#1a202c]">
                      <h4 className="font-bold text-gray-900 mb-2">The Recovery Certificate Power</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Once the Labour Court computes the amount (including interest and costs), it issues a <strong>Recovery Certificate</strong>. This certificate has the same power as a court decree and is executed by the District Collector, who can attach the company's assets or freeze bank accounts to recover your dues.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="summary-suit-order37" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-b-2 border-[#D2A02A] pb-2 inline-block">The Summary Suit (Order 37 CPC): Fast-Track for Professionals</h2>
                   <div className="prose prose-base max-w-none text-gray-700 space-y-6 mt-4">
                     <p className="text-sm md:text-base leading-relaxed">
                       For mid-senior management and CXOs who might not fall under the "workman" category, <strong>Order 37 of the CPC</strong> is the primary recovery tool. This fast-track procedure is for "liquidated" debts based on written contracts.
                     </p>
                     <div className="space-y-4">
                        <p className="text-sm"><strong>The 10-Day Rule:</strong> The defendant has only 10 days to enter an appearance. Failure to do so leads to an automatic decree in your favor.</p>
                        <p className="text-sm"><strong>Burden of Proof:</strong> The company must prove they have a 'triable' defense to be allowed to fight the case. Vague HR reasons like "poor handover" are rarely accepted as a defense without documented proof of loss.</p>
                     </div>
                   </div>
                </section>

                {/* Block 6 - Specific Dues & Nuances */}
                <section id="limitation-period" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 text-red-600">The Limitation Clock: Why You Must Act Fast</h2>
                  <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed font-bold">
                      In the eyes of the law, "delay is the enemy of justice." If you sleep on your rights, they may become legally unenforceable.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                            <h5 className="font-bold text-red-700">Civil Recovery (CPC)</h5>
                            <p className="text-xs text-gray-600 mt-1"><strong>3 Years</strong> from the date the salary became due. Once passed, you cannot file a lawsuit.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                            <h5 className="font-bold text-red-700">Labour Court (Payment of Wages)</h5>
                            <p className="text-xs text-gray-600 mt-1">Generally <strong>12 Months</strong>. While delays can be condoned for valid reasons, immediate action is always preferred.</p>
                        </div>
                    </div>
                  </div>
                </section>

                <section id="gratuity-bonus-arrears" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Gratuity & Bonus Arrears: Don't Leave Money on the Table</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many employees focus only on their base salary but forget about statutory components like Gratuity and Bonus. These are <strong>mandatory</strong> under central laws and cannot be waived by company policy.
                    </p>
                    <div className="space-y-6">
                       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                          <h4 className="font-bold text-gray-900 mb-2">The Gratuity Entitlement (5-Year Rule)</h4>
                          <p className="text-sm text-gray-600 mb-3">If you've worked for 4 years and 240 days, the law treats it as 5 years of service. If a company denies this, they are liable to pay 10% simple interest per annum on the delayed amount.</p>
                       </div>
                       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                          <h4 className="font-bold text-gray-900 mb-2">Statutory Bonus (The 30-Day Rule)</h4>
                          <p className="text-sm text-gray-600 mb-3">If you've worked for at least 30 days in a financial year and your salary is within the statutory limit, you are entitled to a pro-rata bonus. Resigning before the payout date doesn't disqualify you.</p>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="mental-agony-claim" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Suing for Mental Agony and Professional Harassment</h2>
                   <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                     <p className="text-sm md:text-base leading-relaxed">
                       Withholding salary is more than just a financial delay; it is a form of <strong>economic abuse</strong> that triggers a cascade of personal and professional crises. It leads to loan defaults, damage to credit scores (CIBIL), and extreme psychological stress. In our litigation strategy at AMA Legal Solutions, we don't just seek the principal amount; we demand comprehensive damages:
                     </p>
                     <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-gray-900">
                        <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
                            <li><strong>Damages for Mental Harassment:</strong> We quantify the stress by documenting hospital visits, therapy sessions, or the inability to meet basic family obligations caused by the hold.</li>
                            <li><strong>Professional Defamation:</strong> Many employers try to 'pre-emptively' tarnish an employee's name during Background Verification (BGV) to justify their illegal withholding. We sue for the loss of future employment opportunities.</li>
                            <li><strong>Cost of Litigation:</strong> We demand that the company reimburse 100% of your attorney fees, court fees, and communication costs.</li>
                            <li><strong>Opportunity Cost:</strong> We argue for the lost returns that money would have generated if invested in a standard FD or Mutual Fund during the hold period.</li>
                        </ul>
                     </div>
                   </div>
                </section>

                <section id="startup-specifics" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Startup & IT Specifics: Handling Funding Crunches</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the volatile Indian startup ecosystem, "No funding," "Bridge round delay," or "Waiting for series B" are NOT valid legal justifications for non-payment of wages. The law does not view the employee as a venture partner who shares the risk of the business; the employee is a service provider entitled to fixed remuneration.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm transition-all hover:bg-amber-100">
                            <h4 className="font-bold text-amber-900 mb-2">The Personal Liability Clause</h4>
                            <p className="text-sm text-amber-800">If a startup is insolvent, its directors can still be held personally liable for 'statutory dues'. If they have diverted funds to other ventures while your salary is on hold, it can be treated as <strong>siphoning of funds</strong> under the Companies Act.</p>
                        </div>
                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm transition-all hover:bg-blue-100">
                            <h4 className="font-bold text-blue-900 mb-2">ESOP and Buy-back Disputes</h4>
                            <p className="text-sm text-blue-800">Frequently, startups use salary holds to force employees to forfeit their vested ESOPs. This is a form of <strong>coercion</strong>. We ensure that your exit documentation does not sign away your equity under duress.</p>
                        </div>
                    </div>
                  </div>
                </section>

                <section id="state-nuances" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-b-2 border-[#D2A02A] pb-2 inline-block">State-Wide Law Nuances: Maharashtra, Karnataka, Delhi</h2>
                   <div className="prose prose-base max-w-none text-gray-700 space-y-6 mt-4">
                      <p className="text-sm md:text-base leading-relaxed">
                        Each state has its own <strong>Shops and Establishments Act</strong>, which governs private companies. The definition of a "Commercial Establishment" and the powers of the Labour Inspector vary significantly.
                      </p>
                      <ul className="space-y-4">
                        <li className="bg-gray-50 p-4 rounded-xl shadow-sm">
                            <span className="font-bold text-gray-900">Karnataka (Bangalore):</span> The Karnataka Shops and Commercial Establishments Act has strict rules about notice pay and FNF timelines. The Assistant Labour Commissioner (ALC) in Bangalore is highly active in IT sector disputes.
                        </li>
                        <li className="bg-gray-50 p-4 rounded-xl shadow-sm">
                            <span className="font-bold text-gray-900">Maharashtra (Mumbai/Pune):</span> The Maharashtra Shops Act (2017) provides for heavy penalties on employers who fail to maintain proper records or delay final settlements.
                        </li>
                        <li className="bg-gray-50 p-4 rounded-xl shadow-sm">
                            <span className="font-bold text-gray-900">Delhi NCR:</span> The Delhi Shops Act mandates a minimum notice period and clear rules for settlement. Complaints can be filed both in person and via the Delhi Labour Dept's portal.
                        </li>
                      </ul>
                   </div>
                </section>

                {/* Block 7 - Trust & FAQs */}
                <section id="criminal-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-b-2 border-red-600 pb-2 inline-block">The Criminal Dimension: When Wage Theft Becomes a Crime</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While most salary disputes are civil or labor-related, certain employer actions cross the line into criminal territory. At AMA Legal Solutions, we identify these triggers to put maximum pressure on non-compliant employers.
                    </p>
                    <div className="space-y-6">
                      <div className="p-6 bg-red-50 rounded-2xl border-l-4 border-red-600 shadow-sm">
                        <h4 className="font-bold text-red-900 mb-2 underline">01. Cheque Bounce (Sec 138 NI Act)</h4>
                        <p className="text-sm text-gray-800 leading-relaxed font-medium">
                          If your employer issues an FNF cheque that bounces due to "insufficient funds" or "stop payment," it is a criminal offense. You must send a statutory notice within 30 days of the bounce. This can lead to up to 2 years of imprisonment for the Directors.
                        </p>
                      </div>
                      <div className="p-6 bg-red-50 rounded-2xl border-l-4 border-red-600 shadow-sm">
                        <h4 className="font-bold text-red-900 mb-2 underline">02. Criminal Breach of Trust (Sec 406 IPC)</h4>
                        <p className="text-sm text-gray-800 leading-relaxed font-medium">
                          If an employer deducts PF or ESIC from your salary but fails to deposit it with the government, it is a clear case of criminal breach of trust. This is a non-bailable offense in many jurisdictions and warrants an FIR.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="epf-pf-security" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">EPF & PF Security: Protecting Your Retirement Dues</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Salary holds often lead to gaps in PF contributions. Under the <strong>Employees' Provident Funds and Miscellaneous Provisions Act, 1952</strong>, the employer is legally bound to deposit the contribution even if there is a dispute over the final settlement.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-blue-900 mb-2">The PF Commissioner's Power</h4>
                      <p className="text-sm text-blue-800">
                        You can file a complaint with the Regional PF Office. The Commissioner has the power to conduct an <strong>7A inquiry</strong>, arrest the employer, and seize their property to recover your PF dues. Unlike a civil suit, PF recovery is exceptionally fast and punitive.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="tax-relief-10e" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Tax Relief on Delayed Salary: Section 89(1) and Form 10E</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If you receive a large lump sum of held salary from a previous financial year, you might be pushed into a higher tax bracket. The Indian Income Tax Act offers a shield against this in the form of <strong>Section 89(1) Relief</strong>.
                    </p>
                    <div className="bg-gray-900 text-white p-8 rounded-3xl space-y-4 shadow-2xl">
                        <h4 className="text-[#D2A02A] font-bold text-xl mb-2">How to Claim Relief via Form 10E:</h4>
                        <ul className="space-y-4 text-sm opacity-90">
                           <li className="flex gap-3">
                              <span className="text-[#D2A02A] font-bold">STEP 1:</span>
                              <span>Login to the e-Filing portal and navigate to 'Tax Exemptions and Reliefs'.</span>
                           </li>
                           <li className="flex gap-3">
                              <span className="text-[#D2A02A] font-bold">STEP 2:</span>
                              <span>Select Form 10E and the relevant assessment year in which you received the arrears.</span>
                           </li>
                           <li className="flex gap-3">
                              <span className="text-[#D2A02A] font-bold">STEP 3:</span>
                              <span>Enter the details of the 'Salary Arrears' and the years they belong to. The portal will automatically calculate the tax you would have paid in those years.</span>
                           </li>
                           <li className="flex gap-3">
                              <span className="text-[#D2A02A] font-bold">STEP 4:</span>
                              <span>The difference between your current tax liability and the recalculated liability is your 'Tax Relief'.</span>
                           </li>
                        </ul>
                        <p className="text-[10px] text-gray-400 mt-4 italic">Note: Failing to file Form 10E before your ITR will result in a tax notice and you will lose the benefit of Section 89(1).</p>
                    </div>
                  </div>
                </section>
                <section id="forensic-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The Forensic Trail: WhatsApp, Slack, and Digital Proof</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In modern litigation, emails are not the only evidence. Courts now widely accept WhatsApp chats and Slack messages under Section 65B of the Indian Evidence Act.
                    </p>
                    <div className="bg-[#1a202c] text-white p-8 rounded-2xl shadow-xl">
                      <h4 className="text-[#D2A02A] font-bold mb-4">Evidence Preservation Checklist:</h4>
                      <ul className="text-xs space-y-3 opacity-90 list-disc pl-4">
                        <li>Export 'Chat History' from WhatsApp for conversations with your Manager/HR.</li>
                        <li>Take screenshots of your company Slack/Teams profile showing your designation and tenure.</li>
                        <li>Record any "Exit Interview" audio if you suspect the company will backtrack on verbal promises.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-b-2 border-[#D2A02A] pb-2 inline-block">Success Scenarios: From "Hold" to "Payout"</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                        <h4 className="font-bold text-gray-900">The IT Manager Case</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed italic">
                        "A senior manager's salary (₹8L) was held for 4 months citing 'incomplete handover.' After our legal notice naming the CEO, the company released the full amount with 12% interest within 3 days."
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">✓</div>
                        <h4 className="font-bold text-gray-900">The Startup Developer Case</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed italic">
                        "A developer was denied his notice period buy-out salary. We used the SAMADHAN portal to summon the founders. They settled the dues in the first hearing to avoid a formal Labour Court case."
                      </p>
                    </div>
                  </div>
                </section>

                <section id="faq-section" className="scroll-mt-32 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-[#D2A02A] rounded-full"></span>
                    Frequently Asked Questions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        q: "Can my employer legally hold my salary after I resign?",
                        a: "No. Wages are for labor already performed. While specific, documented deductions (like asset loss) are allowed, 'holding' the entire salary is illegal under the Payment of Wages Act."
                      },
                      {
                        q: "What is the standard FNF timeline in India?",
                        a: "Industry standard is 30-45 days. However, state laws (Shops & Establishments Act) often mandate 15-30 days. If you're terminated, it must be paid within 48 hours."
                      },
                      {
                        q: "Can they hold my salary for a pending 'Internal Audit'?",
                        a: "No. An audit is an internal process and cannot be used as an excuse to delay statutory wage payments unless there is a formal disciplinary case or criminal investigation involving financial loss."
                      },
                      {
                        q: "What can I do if HR stops responding to my emails?",
                        a: "Stop sending emails and send a formal Legal Notice via a labor lawyer. In 80% of cases, this is enough to trigger the FNF release."
                      },
                      {
                        q: "Can a company recover 'Training Costs' from my salary?",
                        a: "Only if you signed an enforceable 'Training Bond' and the company actually spent money on specialized external training. General 'on-the-job' training costs cannot be recovered."
                      },
                      {
                        q: "Is it legal to hold salary for 'Asset Clearance' indefinitely?",
                        a: "No. If you have returned the assets and have proof (courier receipt/email), they must release the salary. Even if one asset is missing, they can only deduct the depreciated cost of that asset, not hold the whole FNF."
                      },
                      {
                        q: "What if the company says they have no funds to pay FNF?",
                        a: "Financial difficulty is not a valid legal defense for non-payment of wages. You can file a recovery suit and seek attachment of the company's bank accounts."
                      },
                      {
                        q: "Can I claim interest on the delayed salary?",
                        a: "Yes. Courts typically award 9% to 12% p.a. interest, and in some cases of harassment, up to 18% p.a. under the Interest Act."
                      },
                      {
                        q: "Does resigning via email count as 'proper notice'?",
                        a: "Yes, as long as it's sent to the official HR email ID. The notice period starts from the date the email was sent/received."
                      },
                      {
                        q: "Can they hold my experience letter along with the salary?",
                        a: "While it's a common tactic, experience letters are often considered a right if you've completed the service. Most companies release both once a legal notice is served."
                      },
                      {
                        q: "Will filing a case affect my future background verification (BGV)?",
                        a: "Illegal withholding is a fault of the company, not you. Most professional firms respect employees who stand up for their rights. A settled legal dispute rarely affects future prospects."
                      },
                      {
                        q: "Is litigation in Labour Court very expensive?",
                        a: "Salary recovery cases are generally affordable compared to the amount being recovered. Many firms, including AMA Legal Solutions, offer structured fees for such cases."
                      },
                      {
                        q: "Can I file a case from a different city?",
                        a: "Yes. You can file where the company is registered, where you were working, or where the 'cause of action' arose. Modern portals like SAMADHAN allow for remote filing."
                      },
                      {
                        q: "How much time does a Summary Suit take?",
                        a: "A Summary Suit (Order 37) is a fast-track process. If the company has no valid defense, you can get a decree in 6-12 months."
                      },
                      {
                        q: "What if the company has already shut down?",
                        a: "You can still sue the directors personally if there was a criminal breach of trust (e.g., PF deductions not deposited) or seek recovery during the liquidation process."
                      },
                      {
                        q: "Can I use WhatsApp messages as evidence?",
                        a: "Yes. Under Section 65B of the Indian Evidence Act, digital communications are valid evidence if properly certified."
                      },
                      {
                        q: "Can they deduct salary for 'Poor Performance' post-resignation?",
                        a: "No. Performance must be managed during the tenure. Withholding earned wages post-resignation for performance issues is legally untenable."
                      },
                      {
                        q: "Is there a limit on how much an employer can deduct?",
                        a: "Generally, total deductions (excluding P.F. and Income Tax) cannot exceed 50% of your wages in a given month under the Payment of Wages Act."
                      },
                      {
                        q: "Can I claim for mental agony?",
                        a: "Yes. If the delay has caused significant distress or financial loss (like missed EMI), you can include a claim for damages."
                      },
                      {
                        q: "What if my contract doesn't mention FNF timelines?",
                        a: "Then general labor laws and the custom of 'reasonableness' (usually 30-45 days) apply."
                      },
                      {
                        q: "Can the company force me to sign a 'No Dues' certificate before payment?",
                        a: "No. You should sign it only when you receive the payment. If forced, sign 'Subject to realization of payment'."
                      },
                      {
                        q: "What happens if a company cheque bounces?",
                        a: "This is a criminal offense under Section 138 of the Negotiable Instruments Act. You can file a criminal complaint immediately."
                      },
                      {
                        q: "Can I go to the police for unpaid salary?",
                        a: "Usually, police treat this as a civil matter. However, if there is cheating or forgery involved, an FIR can be registered."
                      },
                      {
                        q: "Who is the 'Authority' for salary disputes in Bangalore?",
                        a: "The Assistant Labour Commissioner (ALC) and the Labour Courts located at Karmika Bhavan. Bangalore has specialized officers for the IT and ITES sectors who are well-versed in tech-industry contracts."
                      },
                      {
                        q: "Can my employer hold my PF withdrawal if FNF is in dispute?",
                        a: "PF withdrawal is between you and the EPFO. The employer only needs to 'approve' the exit date on the portal. They cannot legally block your PF withdrawal as a tool for leverage. If they refuse to update the exit date, the PF Commissioner can be approached directly."
                      },
                      {
                        q: "What is 'Liquidated Damages' and can it be deducted from salary?",
                        a: "Liquidated damages are pre-agreed amounts in a contract for specific breaches. However, an employer cannot just 'assign' a figure; they must show it represents the actual loss. Excessive deductions are routinely struck down by courts."
                      },
                      {
                        q: "Can I claim for the loss of a better job offer due to FNF delay?",
                        a: "If the company's delay in giving a relieving letter or holding salary caused you to miss a join-date at a new firm, you can sue for <strong>Professional Harassment</strong> and consequential damages."
                      },
                      {
                        q: "What happens if my employer goes into insolvency (NCLT)?",
                        a: "Under the IBC, 2016, employees' wages for 24 months preceding the liquidation date are given high priority (waterfall mechanism). You must file your claim with the Insolvency Professional (RP) immediately."
                      },
                      {
                        q: "Can I record HR meetings without their consent?",
                        a: "In India, one-party consent for recording is generally acceptable as evidence in labor disputes, especially if it shows coercion or illegal demands. These recordings can be used in conciliation proceedings."
                      },
                      {
                        q: "What is the difference between Section 33-C(1) and 33-C(2)?",
                        a: "33-C(1) is for recovery when the amount is already 'settled' but not paid. 33-C(2) is for when the company 'disputes' the calculation and you need the court to determine the exact amount owed."
                      },
                      {
                        q: "Can a salary hold affect my Income Tax filing?",
                        a: "Yes, it complicates matters if the salary is shown in Form 16 but not paid. You should only pay tax on 'received' income or claim a refund later using Section 89(1) relief when the arrears are paid."
                      },
                      {
                        q: "How do I handle a company that has changed its name to avoid dues?",
                        a: "This is a form of <strong>Corporate Fraud</strong>. You can sue the successor entity and the directors personally. The 'corporate veil' is easily pierced in cases of wage evasion."
                      },
                      {
                        q: "Can I file a case if I was on a 'Consultant' contract?",
                        a: "Yes. Many companies misclassify employees as consultants. If you had fixed timings, a company laptop, and followed company rules, the court may treat you as an 'employee' under labor laws, giving you full recovery rights."
                      },
                      {
                        q: "What is the role of a 'Registry' in a salary recovery suit?",
                        a: "The registry checks if your suit follows the procedural rules of the CPC or Labour Court. Once cleared, the court issues the 'First Summons' to the company. A well-drafted suit by specialized labor lawyers bypasses registry delays."
                      },
                      {
                        q: "Can I file for 'Injunction' to stop the company from clearing its bank accounts?",
                        a: "Yes. Under Order 39 of the CPC, if you can prove the company is trying to liquidate its assets to avoid paying dues, you can seek a 'Temporary Injunction' or an 'Attachment Before Judgment' (Order 38 Rule 5)."
                      },
                      {
                        q: "What is 'Promissory Estoppel' and how does it help in salary cases?",
                        a: "If the company made a promise (e.g., 'We will pay you double for working extra shifts') and you acted on that promise, they cannot later back out of it. This is a powerful equitable remedy used in wage disputes."
                      },
                      {
                        q: "Is there a specific 'Minimum Wage' protection for white-collar workers?",
                        a: "While 'Minimum Wage' laws are usually for blue-collar workers, the <strong>Payment of Wages Act</strong> protections have been expanded to include employees earning up to ₹24,000 per month (notified limit). For higher earners, the contract and Civil Procedure Code provide the primary protection."
                      }
                    ].map((faq, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2 flex gap-2">
                          <span className="text-[#D2A02A]">Q.</span>
                          {faq.q}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed border-t pt-2 mt-2">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="cta-final" className="scroll-mt-32">
                  <div className="bg-[#1a202c] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden text-center border-b-8 border-[#D2A02A]">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                     <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Recover Your Held Salary Today</h2>
                     <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                       Don't let policy excuses rob you of your hard-earned wages. Our expert labor lawyers have recovered crores for employees like you.
                     </p>
                     <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                        <Link href="/contact" className="bg-[#D2A02A] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#b88a22] transition-all transform hover:scale-105">
                          Start Recovery Process
                        </Link>
                        <a href="tel:+918700343611" className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all border border-gray-200">
                          Free Consultation
                        </a>
                     </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-24">
                <div className="bg-[#1a202c] p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A] opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150"></div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Stop the Hold. Get Paid.</h3>
                  <p className="text-gray-300 mb-8 text-sm relative z-10 leading-relaxed">
                    Companies often use 'policy' as an excuse for wage theft. A firm legal notice from AMA Legal Solutions can unlock your FNF in days.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-lg mb-6 text-lg">
                    Immediate Call
                  </a>
                  <div className="text-center text-xs text-gray-400 font-medium tracking-wider uppercase">
                    85% Cases Resolved via Notice
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-1.5 h-6 bg-[#D2A02A] rounded-full mr-3"></span>
                    Helpful Links
                  </h3>
                  <div className="space-y-4">
                    {relatedPages.map((page, idx) => (
                      <Link key={idx} href={page.href} className="group block p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-[#D2A02A] transition-colors">{page.label}</p>
                      </Link>
                    ))}
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

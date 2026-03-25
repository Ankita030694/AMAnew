import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How long can an employer legally sit on my final settlement in India?",
    answer: "Generally, the full and final settlement (FNF) should be cleared within 30 to 45 days of the last working day. However, according to the Payment of Wages Act, if an employee is terminated, the wages earned must be paid before the expiry of the second working day after termination. For resignation, the timeline is usually governed by the employment contract, but 30 days is the standard industry practice."
  },
  {
    question: "Can an employer withhold salary due to a missing notice period?",
    answer: "If you fail to serve the mandatory notice period, the employer has the right to adjust notice pay from your final dues. However, they cannot withhold your entire salary if the notice pay amount is less than the total outstanding. They must provide a detailed calculation of the recovery."
  },
  {
    question: "What should I do if my employer is not responding to my FNF emails?",
    answer: "If your polite follows-ups are ignored, send a formal registered letter with acknowledgment due (AD) to the company's registered office. If that also fails, the next logical step is to serve a formal legal notice through a labor lawyer. This creates a legal record of your demand."
  },
  {
    question: "Can I file a police complaint for non-payment of salary?",
    answer: "Non-payment of salary is primarily a civil and labor dispute. While you can try to file a complaint for 'criminal breach of trust' or 'cheating', the police often advise approaching the Labour Court. However, if there is documented fraud, an FIR might be possible."
  },
  {
    question: "What is the time limit for filing a case against an employer for unpaid wages?",
    answer: "Under the Payment of Wages Act, the limitation period is generally 12 months from the date the wages were due. For civil recovery suits, the limitation period is 3 years. It is always better to initiate legal action as soon as the standard 45-day window for FNF expires."
  },
  {
    question: "Do I need to go to court personally for salary recovery?",
    answer: "For conciliation proceedings before the Labour Commissioner, you may need to appear. In Labor Court or Civil Court, your advocate can represent you for most hearings, but your presence might be required for evidence and cross-examination."
  },
  {
    question: "Can I claim interest on my unpaid salary?",
    answer: "Yes, you can claim interest on delayed payments. Depending on the forum, courts often grant interest ranging from 6% to 12% per annum. In cases of gratuity, the Payment of Gratuity Act specifically mandates simple interest for delays beyond 30 days."
  },
  {
    question: "What if the company says I haven't returned company property?",
    answer: "Employers often use the 'pending handover' excuse to withhold FNF. It is vital to have an acknowledgment from your manager or IT department that all assets were returned. If you have this proof, they cannot legally withhold your salary."
  },
  {
    question: "Can I approach the Labour Commissioner if my salary is high?",
    answer: "The Payment of Wages Act applies to employees earning below a certain threshold (currently ₹24,000 per month). If you earn more, you might not fall under this specific act but can still approach the Labour Court under the Industrial Disputes Act (if you are a 'workman') or file a Civil Suit for recovery."
  },
  {
    question: "Does non-payment of salary affect my experience certificate?",
    answer: "Legally, an experience certificate and salary are two different things, but employers often withhold both to pressure employees. A legal notice can demand both the unpaid dues and the issuance of your service certificate and relieving letter."
  },
  {
    question: "What happens if the employer has closed down the company?",
    answer: "If the company is in liquidation, you become a creditor. Employees are usually given priority during the distribution of assets. You would need to file your claim with the Official Liquidator."
  },
  {
    question: "Can a legal notice stop an employer's harassment?",
    answer: "Yes, a formal legal notice from a reputed law firm like AMA Legal Solutions often signals to the employer that you are serious. Most companies prefer settling the dues rather than spending on litigation and risking their reputation."
  },
  {
    question: "Is holding my relieving letter legal if my FNF is pending?",
    answer: "No. Service records like relieving letters and experience certificates are your property and proof of your professional history. An employer cannot legally link the issuance of these documents to financial settlements unless specifically stated and justified by a contract (which is also highly contestable)."
  },
  {
    question: "What is the '240-day rule' for Gratuity eligibility?",
    answer: "While the standard rule is 5 years, the 240-day rule implies that if you have worked for 4 years and 240 days in the final year (or 190 days in a 6-day week), you are eligible for gratuity. Courts have repeatedly upheld this in favor of employees."
  },
  {
    question: "Can directors be held personally liable for unpaid salary?",
    answer: "In cases of private limited companies, while the company is a separate legal entity, directors can be held personally liable under certain labor laws and if 'Criminal Breach of Trust' is proven. A well-drafted legal notice often names directors to pierce the corporate veil."
  },
  {
    question: "What is the SAMADHAN portal and how does it help?",
    answer: "The SAMADHAN portal is a government initiative for online filing of industrial disputes. It allows employees to approach the Labour Commissioner digitally, initiating a conciliation process where a government officer mediates between you and your employer."
  },
  {
    question: "What is a Summary Suit in salary recovery?",
    answer: "Under Order 37 of the CPC, a Summary Suit is a fast-track civil remedy for recovering debts based on written contracts. It is much faster than regular civil suits as the defendant must seek 'leave to defend' from the court."
  },
  {
    question: "What if my employer sent me a cheque that bounced?",
    answer: "A bounced FNF cheque is a criminal offense under Section 138 of the Negotiable Instruments Act. You must send a statutory notice within 30 days and can thereafter file a criminal case which carries a penalty of up to double the cheque amount."
  },
  {
    question: "Can I claim compensation for mental agony caused by delayed pay?",
    answer: "Yes, in your legal claim, you can demand damages for mental agony, professional harassment, and financial hardship caused by the delay, especially if it resulted in loan defaults or medical emergencies."
  },
  {
    question: "How do I prove my performance if an employer claims 'poor performance' during FNF?",
    answer: "Vague claims of poor performance post-resignation are rarely accepted by courts. You can counter this by presenting previous performance appraisals, bonus letters, appreciation emails, and your resignation acceptance letter."
  },
  {
    question: "What is Section 89(1) tax relief for salary arrears?",
    answer: "If you receive several months of unpaid salary at once, it might push you into a higher tax bracket. Section 89(1) allows you to spread this income over the years it belongs to, thereby reducing your tax liability. You must file Form 10E to claim this."
  },
  {
    question: "Is WhatsApp evidence admissible in Labour Court?",
    answer: "Yes, under Section 65B of the Indian Evidence Act, digital communications like WhatsApp chats and emails are admissible as evidence in court, provided they are accompanied by a specific certificate verifying their authenticity."
  },
  {
    question: "What happens if an employer defaults on my EPF deposit?",
    answer: "Non-deposit of PF after deduction is a criminal offense. You can report this to the Regional PF Commissioner, who has the power to conduct an inquiry under Section 7A and even issue arrest warrants against defaulting employers."
  },
  {
    question: "Can I settle the case out of court after initiating legal action?",
    answer: "Absolutely. Most labor disputes are settled 'out of court' or during the conciliation phase. However, ensure that any such settlement is documented in a formal 'Settlement Deed' and the payment is received before you withdraw your cases."
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
      "name": "Employer Not Paying Salary After Resignation",
      "item": "https://www.amalegalsolutions.com/employer-not-paying-salary-after-resignation"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Employer Not Paying Salary After Resignation? Legal Remedies for Salary Recovery in India",
  "description": "Comprehensive guide on what to do when your employer refuses to pay your salary or FNF after resignation. Learn about legal notices, labor court procedures, and your rights.",
  "image": "https://www.amalegalsolutions.com/og-salary-recovery.png",
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
  "name": "Salary Recovery Legal Services",
  "image": "https://www.amalegalsolutions.com/og-salary-recovery.png",
  "description": "Expert legal assistance for recovering unpaid salary and FNF dues from employers in India.",
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
        "name": "Ananya Verma"
      },
      "reviewBody": "My previous startup refused to pay my three months of pending salary. AMA Legal Solutions sent a strong legal notice and within 15 days, my FNF was cleared. Truly grateful!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sandeep Malhotra"
      },
      "reviewBody": "Professional approach. They handled my labor court case with extreme diligence. Highly recommend for any employment-related legal issues."
    }
  ]
};

export const metadata = {
  title: "Employer Not Paying Salary After Resignation? Legal Help for Recovery",
  description:
    "Struggling with unpaid salary after resignation? AMA Legal Solutions provides expert legal help to recover your FNF dues, salary, and gratuity. Stop harassment and get what is yours.",
  keywords: [
    "employer not paying salary after resignation",
    "salary recovery legal notice",
    "fnf not paid after resignation",
    "legal action for unpaid salary india",
    "labor court complaint for salary",
    "unpaid salary lawyer",
    "full and final settlement issues",
    "recovery of dues from employer",
    "employee rights unpaid wages",
    "how to track unpaid salary"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/employer-not-paying-salary-after-resignation',
  },
};

export default function UnpaidSalaryPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "rights-of-employees", title: "Your Rights" },
    { id: "fnf-components", title: "Settlement Components" },
    { id: "pre-legal-steps", title: "Initial Steps" },
    { id: "documentation", title: "Evidence Needed" },
    { id: "legal-notice", title: "Legal Notice" },
    { id: "labour-commissioner", title: "Labour Dept" },
    { id: "labour-court", title: "Labour Court" },
    { id: "civil-suit", title: "Summary Suit" },
    { id: "limitation", title: "Limitation Period" },
    { id: "gratuity-bonus", title: "Gratuity & Bonus" },
    { id: "mental-harassment", title: "Mental Harassment" },
    { id: "employer-defenses", title: "Employer Defenses" },
    { id: "digital-evidence", title: "Digital Evidence" },
    { id: "epf-impact", title: "EPF & PF Impact" },
    { id: "cheque-bounce", title: "Cheque Bounce" },
    { id: "tax-implications", title: "Tax Relief" },
    { id: "state-procedures", title: "State Procedures" },
    { id: "case-studies", title: "Success Stories" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "why-choose-us", title: "Why Choose Us?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Salary Recovery", href: "/employer-not-paying-salary-after-resignation" },
  ];

  const relatedPages = [
    { label: "Legal Notice for Unpaid F&F", href: "/not-being-paid-fnf-want-to-send-legal-notice" },
    { label: "Loan Settlement Services", href: "/services/loan-settlement" },
    { label: "Contact Expert Lawyer", href: "/contact" },
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
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#D2A02A] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-5 md:mb-7 leading-tight">
              Is Your <span className="text-[#D2A02A]">Employer Not Paying Salary</span> After Resignation?
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Don't lose your hard-earned money. Get expert legal representation to recover your unpaid salary, FNF dues, and gratuity. We hold defaulting employers accountable.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-7 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl text-sm md:text-lg">
                Get a Free Legal Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-3 border-b pb-2">Table of Contents</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-b-2 border-[#D2A02A] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-4 md:space-y-6 mt-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      Resigning from a job is often the start of a new chapter—a moment of transition that should ideally be marked by mutual respect and professional closure. You expect a smooth handover, a proper farewell, and the timely receipt of your Full and Final (FNF) settlement. However, for a significant number of employees across India—from the tech hubs of Bangalore and Gurugram to the financial centers of Mumbai—this transition turns into a grueling legal battleground. At AMA Legal Solutions, the most frequent and distress-laden query we encounter is: <strong>"What legal recourse do I have if my employer is withholding my salary after my resignation?"</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The impact of an unpaid salary extends far beyond mere financial inconvenience. It is a profound breach of the employment contract and a violation of trust that can disrupt your entire financial ecosystem. Many employees rely on their FNF settlement to fund their notice period buy-outs at new companies, clear pending loans, or manage their household expenses during a career break. When a company unilaterally decides to "sit" on these funds, they aren't just withholding money; they are jeopardizing your livelihood and peace of mind.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Whether you worked for a high-growth startup that just hit a funding crunch, a legacy conglomerate with slow administrative cycles, or a mid-sized firm using salary as a tool for coercion, your right to receive wages for the work you have performed is absolute. Indian labor laws are some of the most protective in the world for employees, yet they are often poorly understood by the very people they are meant to safeguard.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is a dangerous and common misconception that an employer has total, arbitrary control over your final payout. We often see HR departments using the notice period, "pending handovers," or "unreturned assets" as ransom to delay or deny payments. This is, in most cases, legally unsustainable. If you have performed the work, the employer is legally obligated to pay you. Our specialized labor law team at AMA Legal Solutions has spent years debunking these corporate myths and ensuring that every single rupee owed to our clients—including interest and damages—is recovered through efficient legal intervention.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#D2A02A] italic text-sm">
                      "Wages are not a bounty or a matter of charity; they are the hard-earned remuneration for labor rendered, and any delay in their payment is a direct assault on the employee's right to life and dignity under the Constitution of India."
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The Legal Framework in India: Your Statutory Shield</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      India's legal system provides a multi-layered shield for employees. Depending on your role, salary, and the nature of your employer's business, several statutes come into play. Understanding which "lane" of the law you fall into is the first step toward a successful recovery.
                    </p>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">1. The Payment of Wages Act, 1936</h3>
                        <p className="text-sm md:text-base leading-relaxed mb-4">
                          This is the primary act governing the timely payment of earned wages. While it traditionally applied to lower-income brackets (currently capped at ₹24,000 per month for summarized proceedings), its principles form the bedrock of all wage-related litigation.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                          <li><strong>Section 5(2):</strong> Explicitly states that where an employee's service is terminated by the employer, the wages earned by him shall be paid before the expiry of the second working day from the day on which his employment is terminated.</li>
                          <li><strong>Section 15:</strong> Allows for claims of up to 10 times the amount of the deduction as compensation, in addition to the unpaid wages.</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">Constitutional Right: Article 21</h3>
                        <p className="text-sm md:text-base leading-relaxed">
                          The Supreme Court of India, in landmark cases like <strong>*State of Maharashtra v. Chandrabhan Tale (1983)*</strong> and <strong>*Deokinandan Prasad v. State of Bihar (1971)*</strong>, has established that the right to receive wages and pension is a fundamental right part of the "Right to Life" under Article 21. Wages are recognized as property, and no person can be deprived of their property without the authority of law. This means your employer's failure to pay you isn't just a "company policy" issue; it's a potential violation of your constitutional rights.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">2. The Industrial Disputes Act, 1947</h3>
                        <p className="text-sm md:text-base leading-relaxed mb-4">
                          If you fall under the definition of a "workman"—which includes most non-managerial and technical staff regardless of salary—this Act provides the most streamlined recovery path.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                          <li><strong>Section 33-C(2):</strong> This is the most powerful tool in our arsenal. It allows an employee to approach the Labour Court directly to "compute" the money due to them. Once the court quantifies the amount, it issues a recovery certificate to the Collector, who can then recover the money from the employer as arrears of land revenue (including sealing their premises if necessary).</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">3. Shops and Commercial Establishments Acts (State Specific)</h3>
                        <p className="text-sm md:text-base leading-relaxed">
                          Each state (Delhi, Maharashtra, Karnataka, etc.) has its own Shops Act. These acts cover almost all private-sector employees who might not fall under the Industrial Disputes Act. They mandate clear rules for termination, notice periods, and the settlement of final dues. In cities like Bangalore or Mumbai, the local Labour Inspector has significant powers to summon your employer based on a complaint filed under these acts.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">4. The Indian Contract Act, 1872</h3>
                        <p className="text-sm md:text-base leading-relaxed">
                          For senior executives, directors, and consultants who may not be classified as "workmen," the employment contract is the holy grail. Failure to pay is a "Breach of Contract." We use the principles of the Contract Act to file Summary Suits (Order 37 of the CPC), which are fast-track recovery proceedings where the burden of proof is heavily on the employer to explain why they haven't paid.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="rights-of-employees" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Comprehensive Rights of an Employee Post-Resignation</h2>
                  <div className="prose prose-base max-w-none text-gray-700 mb-8">
                    <p className="text-sm md:text-base">
                      Knowledge is your first line of defense. Employers often rely on your hesitation or lack of information to justify their delays. Here are the absolute rights you hold the moment you submit your resignation:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: "Right to Timely Settlement", 
                        desc: "Regardless of what your HR handbook says, 30 to 45 days is the industry standard for FNF. Any delay beyond this entitles you to claim interest." 
                      },
                      { 
                        title: "Right to Relief Documents", 
                        desc: "An employer cannot legally withhold your experience certificate or relieving letter as a way to force you to drop your financial claims. These are service records and your property." 
                      },
                      { 
                        title: "Right to Leave Encashment", 
                        desc: "If your contract allows for leave carry-forward, those accrued days are equivalent to cash. Denying this is a direct wage deduction." 
                      },
                      { 
                        title: "Right against Unilateral Deductions", 
                        desc: "An employer cannot suddenly 'discover' a loss or a performance issue after you resign and deduct it from your salary without a formal inquiry and your consent." 
                      },
                      { 
                        title: "Right to Statutory Dues", 
                        desc: "Gratuity, Bonus, and EPF contributions are not 'perks'—they are statutory mandates. No 'zero-payout' policy can override these central laws." 
                      },
                      { 
                        title: "Right to Legal Advocacy", 
                        desc: "You have the right to be represented by a lawyer in communications with the company. A formal notice from a law firm must be acknowledged and answered." 
                      }
                    ].map((right, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm transition-transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">
                            {idx + 1}
                          </div>
                          <h4 className="font-bold text-base md:text-lg text-gray-900">{right.title}</h4>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FNF Components */}
                <section id="fnf-components" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The Anatomy of a Full and Final (FNF) Settlement</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common tactic used by defaulting employers is to provide a lump-sum figure without a breakdown. We insist on a detailed "Settlement Sheet." Here is a comprehensive list of what should be in your pocket:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-5 rounded-2xl">
                        <h4 className="font-bold text-gray-900 mb-2">A. Arrears of Salary</h4>
                        <p className="text-sm text-gray-600">This includes your salary for the last working month, plus any previous months that were delayed. It must include all components: Basic, HRA, Special Allowance, etc.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-5 rounded-2xl">
                        <h4 className="font-bold text-gray-900 mb-2">B. Accrued Benefits (LTA & Medical)</h4>
                        <p className="text-sm text-gray-600">If you haven't claimed your Leave Travel Allowance (LTA) or medical reimbursements for the year, you are entitled to the pro-rata amount as part of your FNF.</p>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-2xl">
                        <h4 className="font-bold text-gray-900 mb-2">C. Variable Pay and Sales Incentives</h4>
                        <p className="text-sm text-gray-600">Many companies try to skip variable pay by saying "the employee must be on the payroll on the date of payout." This is highly contestable if you have already achieved the targets during your tenure.</p>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-2xl">
                        <h4 className="font-bold text-gray-900 mb-2">D. Reimbursements and Pending Bills</h4>
                        <p className="text-sm text-gray-600">Travel bills, client entertainment expenses, and internet allowances that you paid out of pocket must be cleared down to the last rupee.</p>
                      </div>

                      <div className="bg-[#1a202c] text-white p-6 rounded-2xl">
                        <h4 className="font-bold text-[#D2A02A] mb-2 uppercase tracking-wider text-xs">Crucial Check</h4>
                        <p className="text-sm opacity-90">
                          Always check the "Deductions" side of the sheet. Ensure that Income Tax (TDS) is calculated only on the taxable part and that no arbitrary "Notice Pay Recovery" has been applied if you have served your full notice period or had it waived in writing.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pre-legal Steps */}
                <section id="pre-legal-steps" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The 45-Day Recovery Roadmap: Step-by-Step Initial Actions</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base mb-4">
                      When your salary is delayed, your immediate reaction might be panic or anger. However, a structured, documented approach is far more effective. At AMA Legal Solutions, we recommend a 45-day cycle of administrative "triggering" before moving to hard litigation.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-[#1a202c] text-[#D2A02A] flex flex-col items-center justify-center rounded-xl font-bold">
                          <span className="text-xs">DAY</span>
                          <span className="text-xl">1-7</span>
                        </div>
                        <div className="flex-grow bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-bold text-gray-900 mb-2">The Soft Follow-Up & Audit</h4>
                          <p className="text-sm text-gray-600 mb-3">Send a polite but formal email to HR and your immediate manager. Do not assume malice yet; assume a "technical error."</p>
                          <ul className="text-xs space-y-1 text-gray-500 list-disc pl-4">
                            <li>Request a tentative date for the FNF credit.</li>
                            <li>Ask for a draft copy of the FNF calculation sheet.</li>
                            <li>Download all your previous salary slips and IT declaration logs.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] text-white flex flex-col items-center justify-center rounded-xl font-bold">
                          <span className="text-xs">DAY</span>
                          <span className="text-xl">8-15</span>
                        </div>
                        <div className="flex-grow bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-bold text-gray-900 mb-2">The Demand for Clarification</h4>
                          <p className="text-sm text-gray-600 mb-3">If the first week yields no result, escalate. Send a "Dues Statement" where YOU calculate what you are owed.</p>
                          <ul className="text-xs space-y-1 text-gray-500 list-disc pl-4">
                            <li>Mention specific clauses in your appointment letter regarding payment cycles.</li>
                            <li>Attach proof of asset handover (Emails/IT clearance Slips).</li>
                            <li>Mark the email "Urgent: Pending Dues."</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white flex flex-col items-center justify-center rounded-xl font-bold">
                          <span className="text-xs">DAY</span>
                          <span className="text-xl">16-30</span>
                        </div>
                        <div className="flex-grow bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                          <h4 className="font-bold text-gray-900 mb-2">The Final Intimation</h4>
                          <p className="text-sm text-gray-600 mb-3">Send a formal registered letter (hard copy) to the company's registered office. This is a critical legal requirement for many state labor laws.</p>
                          <ul className="text-xs space-y-1 text-gray-500 list-disc pl-4">
                            <li>State clearly that if the dues are not cleared within 7 days, you will be forced to initiate legal proceedings.</li>
                            <li>Mention that you will hold them liable for 12% to 18% annual interest on the delayed amount.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 italic">
                        <p className="text-xs md:text-sm text-amber-900">
                          <strong>Pro Tip:</strong> Never "resign" from your rights. If HR asks you to sign an FNF document that says "I have received all my dues" BEFORE the actual bank transfer, <strong>DO NOT SIGN IT.</strong> Or, sign it with a handwritten note: "Subject to realization of actual payment in my bank account."
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Evidence Inventory: Building a Bulletproof Case</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In a court of law, your word against the company's word is useless without documentation. We need a "Digital Trail" that proves four things: Your employment, your performance, your resignation, and their silence.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-bold text-base text-gray-900 border-b pb-2">Employment Proof</h4>
                        <ul className="space-y-2">
                          {["Original Appointment Letter", "Confirmation Letter after Probation", "Promotion/Increment Letters", "Form 16 / TDS Certificates"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <span className="text-green-500">✔</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-bold text-base text-gray-900 border-b pb-2">Separation Trace</h4>
                        <ul className="space-y-2">
                          {["Resignation Email (Sent folder)", "Acknowledgment/Acceptance Email", "Notice Period Waiver Emails", "IT/Admin Clearance Certificate"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <span className="text-green-500">✔</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mt-6">
                      <h4 className="font-bold text-gray-900 mb-3">The Power of "Forensic Evidence"</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        Modern labor courts increasingly accept digital evidence under Section 65B of the Indian Evidence Act. If you were communicating via Slack, Microsoft Teams, or WhatsApp, ensure you:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-xs text-gray-600">
                        <li><strong>Screenshot Critical Chats:</strong> Capture conversations where managers acknowledge your work or promise payment dates.</li>
                        <li><strong>Record Official Logins:</strong> Keep a log of your company portal activity during your notice period to prove you were working.</li>
                        <li><strong>Save PDF Exports:</strong> If you use a project management tool (Jira/Asana), export your completed tasks to counter any "Performance" defenses later.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Notice */}
                <section id="legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The Psychology and Power of a Formal Legal Notice</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A Legal Notice is not just a letter; it is a formal document drafted by a legal professional that serves as the "prelude to war." At AMA Legal Solutions, our notices are designed to do three things: Create a verifiable record, highlight personal liability of directors, and signal overwhelming legal consequence.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <h5 className="font-bold text-gray-900 mb-2">Legal Admissibility</h5>
                        <p className="text-xs text-gray-500">It proves in court that you gave the employer a fair chance to settle before litigation.</p>
                      </div>
                      <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <h5 className="font-bold text-gray-900 mb-2">Personal Liability</h5>
                        <p className="text-xs text-gray-500">We often address the notice to the Directors personally, making them aware that corporate veils can be pierced in wage theft cases.</p>
                      </div>
                      <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <h5 className="font-bold text-gray-900 mb-2">Regulatory Risk</h5>
                        <p className="text-xs text-gray-500">For startups, the mention of Ministry of Corporate Affairs (MCA) and ROC complaints can jeopardize their funding and compliance status.</p>
                      </div>
                    </div>

                    <div className="bg-[#1a202c] text-white p-8 rounded-2xl relative overflow-hidden">
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D2A02A] opacity-10 rounded-full"></div>
                      <h4 className="text-[#D2A02A] font-bold text-lg mb-4">Why a Notice from AMA Legal Solutions Works</h4>
                      <p className="text-sm leading-relaxed opacity-90 mb-6">
                        In 85% of our salary recovery cases, a professionally drafted legal notice on our firm's letterhead is enough to trigger the FNF credit within 15 working days. Companies realize that fighting a specialized law firm over a salary or FNF amount is a losing battle where the legal costs for the company will quickly exceed the amount they are trying to withhold.
                      </p>
                      <Link href="/contact">
                        <span className="inline-block border border-[#D2A02A] text-[#D2A02A] px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#D2A02A] hover:text-white transition-all cursor-pointer">
                          Draft My Legal Notice
                        </span>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Labour Dept */}
                <section id="labour-commissioner" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The Labour Department: Mediation and Conciliation</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before the courts get involved, the government provides a mediation layer through the Office of the Labour Commissioner. This is often the most cost-effective first step for employees. In the digital age, this process has been simplified through the <strong>SAMADHAN (Software Application for Monitoring And Disposal, Handling and Apportionment)</strong> portal.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-3 underline">The Conciliation Process</h4>
                      <ol className="list-decimal pl-6 space-y-4 text-sm">
                        <li><strong>Online Filing:</strong> You file a dispute on the SAMADHAN portal, attaching your legal notice and proof of employment.</li>
                        <li><strong>The Conciliation Officer:</strong> An officer is assigned to the case. They issue a formal summons to the employer to appear for a meeting.</li>
                        <li><strong>The Hearing:</strong> Both parties present their sides. The officer acts as a mediator (not a judge) and tries to forge a settlement.</li>
                        <li><strong>Failure Report:</strong> If the employer refuses to pay or fails to appear, the officer issues a "Failure of Conciliation Report" (FOC). This report is your "entry ticket" to the Labour Court.</li>
                      </ol>
                    </div>
                  </div>
                </section>

                {/* Labour Court */}
                <section id="labour-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Labour Court: The Heavy Artillery of Section 33-C(2)</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When mediation fails, the Labour Court provides a judicial remedy. Unlike civil courts, Labour Courts are specifically designed to be "pro-employee" and follow the principles of social justice. Section 33-C(2) of the Industrial Disputes Act is the gold standard for wage recovery.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-[#D2A02A]">How Section 33-C(2) Works:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                          <h5 className="font-bold text-sm mb-2">Computation of Money</h5>
                          <p className="text-xs text-gray-500">The court calculates exactly how much you are owed, including components like notice pay, bonuses, and encashment.</p>
                        </div>
                        <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                          <h5 className="font-bold text-sm mb-2">Recovery Certificate</h5>
                          <p className="text-xs text-gray-500">Upon finding in your favor, the court issues a certificate that is sent to the District Collector for execution.</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed bg-blue-50 p-4 rounded-xl">
                        <strong>The Enforcement:</strong> If the employer still does not pay, the Collector has the power to attach (seize) the company's bank accounts, movable property (furniture, computers), and even immovable property to recover your dues. This process is treated with the same priority as "Arrears of Land Revenue."
                      </p>
                    </div>
                  </div>
                </section>

                {/* Summary Suit */}
                <section id="civil-suit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Summary Suit (Order 37 CPC): Fast-Track Recovery for Directors and Managers</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For senior mid-level and executive staff who may not be classified as "workmen," a Summary Suit under Order 37 of the Code of Civil Procedure (CPC) is the most efficient remedy. This is a special procedure for "liquidated" debts (a fixed amount of money).
                    </p>
                    
                    <div className="space-y-6">
                      <div className="border-l-4 border-[#1a202c] pl-6 py-2">
                        <h4 className="font-bold text-gray-900 mb-4">The 5 Phases of a Summary Suit</h4>
                        <div className="space-y-4">
                          {[
                            { phase: "Institution", desc: "Filing a plaint that strictly adheres to the format of Order 37." },
                            { phase: "Summons", desc: "The court issues a special summons to the employer." },
                            { phase: "Appearance", desc: "The employer has only 10 days to enter an 'Appearance.' If they miss this, you win automatically." },
                            { phase: "Leave to Defend", desc: "The employer must prove they have a substantial defense to be allowed to fight the case. Usually, 'we didn't have money' or 'he didn't do handover' are not sufficient defenses without proof." },
                            { phase: "Judgment", desc: "If leave to defend is denied, the court delivers the judgment immediately." }
                          ].map((p, i) => (
                            <div key={i} className="flex items-start gap-4">
                              <span className="text-[#D2A02A] font-bold text-sm">PHASE {i+1}:</span>
                              <div className="text-xs">
                                <strong>{p.phase}:</strong> {p.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs md:text-sm italic text-gray-500">
                        *A Summary Suit is significantly faster than a regular recovery suit, often concluding in 1 to 1.5 years compared to 5+ years for normal civil cases.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Limitation */}
                <section id="limitation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 text-red-600">The Limitation Act: Why Delay is Your Worst Enemy</h2>
                  <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-2xl space-y-6">
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                      In the legal world, there is a maxim: <em>"Vigilantibus non dormientibus jura subveniunt"</em>—The law assists those who are vigilant, not those who sleep over their rights.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-4">
                      <div className="space-y-2">
                        <h4 className="font-bold text-red-700">Labour Court Window</h4>
                        <p className="text-sm text-gray-700">While no strict limit is mentioned in Sec 33-C, courts generally discourage filings after <strong>1 Year</strong> without a valid reason for the delay. The "reasonableness" of time is key.</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-red-700">Civil Court Window</h4>
                        <p className="text-sm text-gray-700">Under the Limitation Act, 1963, a suit for recovery of money (salary) must be filed within <strong>3 Years</strong> from the date the money became due. Once this 3-year clock expires, the debt becomes "statute-barred," and you cannot use the courts to recover it.</p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-red-100 mt-4">
                      <h5 className="font-bold text-gray-900 mb-2 text-sm text-center">Avoid the "Wait and See" Trap</h5>
                      <p className="text-xs text-gray-600 text-center">
                        Employers often promise to pay "next month" or "when we get funding" to keep you quiet until the limitation period expires. Do not fall for this. Every promise to pay should be recorded in writing to extend the limitation period.
                      </p>
                    </div>
                  </div>
                </section>


                {/* Testimonials / Reviews */}
                {/* Gratuity and Bonus */}
                <section id="gratuity-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-b-2 border-[#D2A02A] pb-2 inline-block">Gratuity and Statutory Bonus: The Often-Forgotten Dues</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Statutory dues like Gratuity and Bonus are often the first things employers try to "negotiate away" or simply omit from the FNF statement, assuming the employee won't have the legal energy to pursue them. This is a costly mistake for the employer.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-2xl">
                        <h4 className="font-bold text-gray-900 mb-2">1. The Gratuity Entitlement (The "4y 240d" Rule)</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          The Payment of Gratuity Act, 1972, states that you are eligible after 5 years of continuous service. However, judicial interpretations have significantly relaxed this:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-gray-500">
                          <li><strong>The 240-Day Rule:</strong> If you have completed 240 working days in your 5th year of service, you are legally considered to have completed the 5th year for the purpose of gratuity.</li>
                          <li><strong>Calculation Formula:</strong> (Last Drawn Basic + DA) x (15/26) x (Number of years of service). For every month of delay in gratuity payment, the employer is liable to pay simple interest at the rate notified by the Central Government (currently around 10%).</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-2xl">
                        <h4 className="font-bold text-gray-900 mb-2">2. Statutory Bonus (Payment of Bonus Act)</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          If your salary is below ₹21,000 (Basic + DA), you are entitled to a statutory bonus (minimum 8.33%, maximum 20%).
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Common Scam:</strong> Employers tell resigning employees they aren't eligible for the bonus because they "resigned before the festive season." This is false. If you worked for at least 30 days in the financial year, you are entitled to a pro-rata bonus for that year.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Mental Harassment */}
                <section id="mental-harassment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Suing for Mental Harassment and Professional Agony</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Non-payment of salary is not just a financial crime; it is an act of harassment. In the modern corporate world, "Ghosting" an employee's FNF is a form of mental torture that can lead to severe personal consequences.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                        <h4 className="font-bold text-red-900 mb-2">Quantifiable Damages</h4>
                        <p className="text-xs text-red-700">These are direct losses, such as penal interest you had to pay on a home loan or Credit Card because your salary was late, or the cost of medical treatment for stress-related ailments.</p>
                      </div>
                      <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">Non-Quantifiable Damages</h4>
                        <p className="text-xs text-blue-700">These include loss of reputation (if you couldn't join a new firm due to lack of a relieving letter) and compensation for the "agony and hardship" caused by the employer's willful default.</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      *Note: While Labour Courts are conservative with harassment damages, Civil Courts are increasingly granting substantial "General Damages" in cases where the employer's conduct is shown to be malicious or vengeful.
                    </p>
                  </div>
                </section>

                {/* Countering Employer Defenses */}
                <section id="employer-defenses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The "Corporate Playbook": Countering Common Employer Excuses</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often use a standard set of "defenses" to justify withholding pay. At AMA Legal Solutions, we have the counter-scripts ready for each:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white border-l-4 border-gray-900 p-5 shadow-sm">
                        <h4 className="font-bold text-xs md:text-sm uppercase tracking-wide text-gray-900 mb-1">Defense 1: "Incomplete Handover of Assets/Knowledge"</h4>
                        <p className="text-sm text-gray-600"><strong>Our Counter:</strong> Handover is a process, not a reason to withhold earned wages. Unless the employer can prove <em>actual liquidated loss</em> caused by your failure to handover, they cannot touch your salary.</p>
                      </div>

                      <div className="bg-white border-l-4 border-gray-900 p-5 shadow-sm">
                        <h4 className="font-bold text-xs md:text-sm uppercase tracking-wide text-gray-900 mb-1">Defense 2: "Performance Issues discovered post-resignation"</h4>
                        <p className="text-sm text-gray-600"><strong>Our Counter:</strong> If they accepted your resignation and you weren't under an active disciplinary PIP (Performance Improvement Plan), they cannot post-facto deduct salary for "poor performance." Wages are paid for the <em>time</em> worked, not just the <em>quality</em> perceived later.</p>
                      </div>

                      <div className="bg-white border-l-4 border-gray-900 p-5 shadow-sm">
                        <h4 className="font-bold text-xs md:text-sm uppercase tracking-wide text-gray-900 mb-1">Defense 3: "Company Policy says FNF takes 90 days"</h4>
                        <p className="text-sm text-gray-600"><strong>Our Counter:</strong> Statutory law (Payment of Wages Act) overrides company policy. A "90-day policy" is legally void if it contradicts the mandatory timelines set by the state or central government.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Digital Evidence Section */}
                <section id="digital-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Digital Forensics: Proving Your Case in the Chat Age</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In 2024, the most potent evidence in a salary dispute isn't always a paper contract; it's the digital trail. Under the <strong>Indian Evidence Act (Section 65B)</strong>, electronic records are fully admissible if backed by a certificate.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-3 underline">What You Must Preserve:</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-bold text-xs uppercase text-gray-400 mb-1">WhatsApp/Slack</h5>
                          <p className="text-[11px] text-gray-500">Export the "Chat History" as a text/CSV file. Screenshots alone can be challenged, but exports with metadata are robust.</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-xs uppercase text-gray-400 mb-1">Email Headers</h5>
                          <p className="text-[11px] text-gray-500">Save critical emails in .eml format. This preserves the 'Internet Headers' which prove the exact time and server the email was sent from.</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-xs uppercase text-gray-400 mb-1">CRM/HRMS Access</h5>
                          <p className="text-[11px] text-gray-500">If you still have access, take a screen-recording of your FNF status or "Applied" leave status before they revoke your credentials.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Impact on EPF and Gratuity */}
                <section id="epf-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">The Criminal Dimension: EPF Defaults and Section 406 IPC</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer has deducted the employee's share of Provident Fund (PF) from your previous months' salary but hasn't deposited it into your EPF account, they haven't just "delayed" payment—they have committed <strong>Criminal Breach of Trust (Section 406/409 of the Indian Penal Code).</strong>
                    </p>
                    
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-2">The EPF Commissioner's Power</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Under Section 7A of the EPF Act, the Commissioner has the same powers as a civil court to summon the employer, conduct an inquiry, and determine the amount due. They can also initiate <strong>arrest warrants</strong> against the directors of companies that fail to deposit PF dues. 
                      </p>
                      <p className="text-xs text-red-600 mt-2 font-bold uppercase">Pro-Tip: Always check your 'UAN Portal' passbook the day after you resign.</p>
                    </div>
                  </div>
                </section>

                {/* Cheque Bounce */}
                <section id="cheque-bounce" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Cheque Bounce (Section 138 NI Act): The Most Feared Legal Trigger</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer gives you an FNF cheque that "bounces" (returns unpaid) due to "Insufficient Funds" or "Stop Payment," the legal landscape shifts from Civil to Criminal. This is often the fastest way to get your money back.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900">The 138 Timeline (Strict Adherence Required):</h4>
                      <div className="flex flex-col gap-3">
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#1a202c] text-[#D2A02A] rounded-full flex items-center justify-center font-bold">1</div>
                          <p className="text-xs">Cheque bounces; you get a "Return Memo" from your bank.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#1a202c] text-[#D2A02A] rounded-full flex items-center justify-center font-bold">2</div>
                          <p className="text-xs">You MUST send a <strong>Statutory 138 Notice</strong> within 30 days of receiving the memo.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#1a202c] text-[#D2A02A] rounded-full flex items-center justify-center font-bold">3</div>
                          <p className="text-xs">The employer has 15 days to pay after receiving the notice.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                          <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                          <p className="text-xs">If they don't pay within 15 days, you file a Criminal Complaint in the Magistrate's Court within the next 30 days.</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 italic">Offenses under Sec 138 carry a penalty of up to <strong>double the cheque amount</strong> and/or up to 2 years in prison.</p>
                    </div>
                  </div>
                </section>

                {/* Taxation of FNF */}
                <section id="tax-implications" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Taxation of FNF: Claiming Relief under Section 89(1)</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When you receive a large FNF settlement (often including arrears from previous years), it might push you into a higher tax bracket. The Income Tax Act provides a specific mechanism to avoid this "tax penalty."
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-blue-900 mb-2">Form 10E: Your Shield against Tax Spikes</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        Section 89(1) allows you to "spread" the income over the years it was meant for. This is called tax relief on salary arrears.
                      </p>
                      <ul className="text-xs space-y-2 text-gray-600">
                        <li><strong>Rule:</strong> You must file <strong>Form 10E</strong> on the Income Tax portal before filing your ITR.</li>
                        <li><strong>Logic:</strong> The portal calculates the tax on your total income (including arrears) and compares it to what you would have paid if the arrears were received in the correct years. The difference is granted as relief.</li>
                        <li><strong>Employer Responsibility:</strong> Ideally, the employer should calculate this in your FNF TDS, but since they are defaulting on salary, you must handle this independently during your IT filing.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* State Specific Procedures */}
                <section id="state-procedures" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Regional Nuances: State-Specific Labour Laws</h2>
                  <div className="prose prose-base max-w-none text-gray-700 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While central laws like the Industrial Disputes Act provide a baseline, "Labour" is a <strong>Concurrent List</strong> subject in India. This means each state has its own "Shops and Commercial Establishments Act" with varying timelines and authorities.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">Maharashtra (Mumbai/Pune)</h4>
                        <p className="text-xs text-gray-600 mb-3">Under the <strong>Maharashtra Shops & Establishments Act</strong>, an employer must settle all dues within 15 days of the employee's termination or resignation.</p>
                        <ul className="text-[10px] text-gray-500 list-disc pl-4 space-y-1">
                          <li>Jurisdiction: Local Labour Commissioner.</li>
                          <li>Process: Online filing via the Mahashram portal.</li>
                        </ul>
                      </div>

                      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">Karnataka (Bangalore/Mysore)</h4>
                        <p className="text-xs text-gray-600 mb-3">The <strong>Karnataka Shops & Commercial Establishments Act</strong> is extremely strict about FNF settlement timelines and over-time pay.</p>
                        <ul className="text-[10px] text-gray-500 list-disc pl-4 space-y-1">
                          <li>Jurisdiction: Assistant Labour Commissioner (ALC).</li>
                          <li>process: Heavy emphasis on "Conciliation" before litigation.</li>
                        </ul>
                      </div>

                      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">Delhi NCR (Noida/Gurugram)</h4>
                        <p className="text-xs text-gray-600 mb-3">Delhi follows a multi-tier system where "Inspector Facilitators" conduct site visits to check salary registers.</p>
                        <ul className="text-[10px] text-gray-500 list-disc pl-4 space-y-1">
                          <li>Jurisdiction: Local Labour Courts (Dwarka/Rouse Avenue).</li>
                          <li>process: High rate of "Summary Suits" in Delhi High Court for white-collar recoveries.</li>
                        </ul>
                      </div>

                      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        <h4 className="font-bold text-gray-900 mb-2">Telangana/Tamil Nadu</h4>
                        <p className="text-xs text-gray-600 mb-3">Both states have highly digitalized labor departments with fast-track portals for IT/ITES employees.</p>
                        <ul className="text-[10px] text-gray-500 list-disc pl-4 space-y-1">
                          <li>Focus: "Industrial Employment (Standing Orders)" compliance.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Case Studies */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7">Litigation in Action: Success Stories from Our Desk</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-[#1a202c] to-[#2d3748] text-white rounded-2xl shadow-lg">
                      <h4 className="font-bold text-[#D2A02A] mb-3 flex items-center gap-2">
                        <span className="text-lg">Case 1:</span> The "Vengeful Performance" Defense
                      </h4>
                      <p className="text-sm opacity-90 mb-4">
                        A Senior VP at a FinTech firm resigned; the company withheld 15 Lakhs FNF, claiming "sudden discovery of performance lapses" from 2 years ago.
                      </p>
                      <div className="bg-white/10 p-4 rounded-xl text-xs">
                        <strong>AMA Strategy:</strong> We proved the VP had received 3 performance bonuses in that same period. We filed a Summary Suit. The company settled for 100% principal + 12% interest within 3 hearings.
                      </div>
                    </div>

                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-md">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-lg text-[#D2A02A]">Case 2:</span> The "Asset Handover" Ghosting
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        A tech lead was denied his relieving letter and salary because he allegedly "didn't return a high-end laptop." He had the acknowledgment receipt from the admin.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-xl text-xs italic">
                        <strong>Outcome:</strong> A formal legal notice mentioning "unlawful enrichment" and "extortion" triggered a courier of the relieving letter and a bank transfer of the balance within 48 hours.
                      </div>
                    </div>

                    <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-lg text-[#D2A02A]">Case 3:</span> Startup Liquidation Panic
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        A funded startup shut down overnight. 50 employees were left without FNF. Investors refused to talk.
                      </p>
                      <div className="bg-white p-4 rounded-xl text-xs">
                        <strong>Solution:</strong> We filed a joint petition before the Labour Commissioner and sent personal notices to the individual directors (piercing the corporate veil). The dues were settled from the company's remaining escrow accounts.
                      </div>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-l-4 border-[#D2A02A] pl-4">Community Trust: What Our Clients Say</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        name: "Ananya V.", 
                        role: "Ex-Software Architect",
                        text: "I was ghosted by my previous employer for 3 months. AMA Legal Solutions didn't just get my money back; they gave me my dignity back. Highly professional." 
                      },
                      { 
                        name: "Sandeep M.", 
                        role: "Sales Operations Head",
                        text: "Their understanding of the 240-day gratuity rule helped me recover 4 Lakhs that I didn't even know I was eligible for. Best labor lawyers in India." 
                      },
                      { 
                        name: "Priyanka S.", 
                        role: "Retail Manager",
                        text: "The SAMADHAN portal filing was seamless with their help. The conciliation meeting was handled so well that we didn't even need to go to court." 
                      },
                      { 
                        name: "Rahul G.", 
                        role: "Startup Employee",
                        text: "Fast, transparent, and legally sound. Their legal notice worked like magic. My FNF was credited within 10 days of the notice delivery." 
                      }
                    ].map((rev, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl transition-all hover:border-[#D2A02A]">
                        <div className="text-[#D2A02A] text-sm mb-3">★★★★★</div>
                        <p className="text-sm text-gray-700 italic mb-4 leading-relaxed">"{rev.text}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400">
                            {rev.name[0]}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{rev.name}</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{rev.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <div className="bg-[#1a202c] text-white p-10 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                    <div className="relative z-10">
                      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">Why AMA Legal Solutions for Your Salary Recovery?</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                          { 
                            icon: "⚖️", 
                            title: "Specialized Expertise", 
                            desc: "We don't just practice law; we specialize in employee-side labor litigation with a focus on white-collar recoveries." 
                          },
                          { 
                            icon: "⚡", 
                            title: "Pre-Litigation Resolution", 
                            desc: "Our high-pressure legal notices resolve 85% of cases without ever stepping into a courtroom, saving you time and stress." 
                          },
                          { 
                            icon: "�️", 
                            title: "End-to-End Handling", 
                            desc: "From the first follow-up email to final execution of a court decree, we handle the entire recovery cycle." 
                          }
                        ].map((item, i) => (
                          <div key={i} className="text-center group">
                            <div className="w-16 h-16 bg-[#D2A02A] rounded-2xl bg-opacity-10 flex items-center justify-center text-3xl mx-auto mb-6 transition-all group-hover:scale-110 group-hover:bg-opacity-20 border border-[#D2A02A]/20">
                              {item.icon}
                            </div>
                            <h4 className="font-bold text-lg md:text-xl mb-3 text-[#D2A02A]">{item.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-7 border-b-2 border-[#D2A02A] pb-2 inline-block">Frequently Asked Questions: Expert Legal Guidance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4">
                        <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 flex items-start">
                          <span className="text-[#D2A02A] mr-2">Q.</span> {faq.question}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-700 pl-6 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>


                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-[2rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#D2A02A] opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-10 leading-tight">Enough is Enough. Recover Your Money Today.</h2>
                    <p className="text-lg md:text-2xl opacity-90 mb-10 md:mb-16 max-w-3xl mx-auto font-light">
                      Every day you wait is a day your employer gets away with withholding your hard-earned wages. Let the experts at AMA Legal Solutions fight for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-10 md:px-16 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg md:text-xl w-full sm:w-auto">
                          Book a Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-5 px-10 md:px-16 rounded-full transition-all text-lg md:text-xl w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-24">
                {/* Contact Card */}
                <div className="bg-[#1a202c] p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A] opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150"></div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Immediate Legal Intervention</h3>
                  <p className="text-gray-300 mb-8 text-sm relative z-10 leading-relaxed">
                    If your employer has stopped responding, a legal notice must be sent within 24 hours to protect your rights.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-lg mb-6 text-lg"
                  >
                    Discuss Case Now
                  </a>
                  <div className="text-center text-xs text-gray-400 font-medium tracking-wider uppercase">
                    Trusted by 10,000+ Professionals
                  </div>
                </div>

                {/* Related Pages */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-1.5 h-6 bg-[#D2A02A] rounded-full mr-3"></span>
                    Legal Guides
                  </h3>
                  <div className="space-y-4">
                    {relatedPages.map((page, idx) => (
                      <Link 
                        key={idx} 
                        href={page.href}
                        className="group block p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                      >
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-[#D2A02A] transition-colors">
                          {page.label}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Review Snippet Box */}
                <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                   <div className="flex items-center mb-4">
                      <div className="text-[#D2A02A] flex mr-2">
                        {"★★★★★".split("").map((s,i) => <span key={i}>{s}</span>)}
                      </div>
                      <span className="text-sm font-bold text-gray-900">4.9/5 Rating</span>
                   </div>
                   <p className="text-sm text-gray-700 italic leading-relaxed">
                     "The team at AMA is unstoppable. They handled my salary dues recovery with such ease that I regret not hiring them earlier."
                   </p>
                   <p className="mt-4 text-xs font-bold text-gray-500">Review by Rohit K.</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

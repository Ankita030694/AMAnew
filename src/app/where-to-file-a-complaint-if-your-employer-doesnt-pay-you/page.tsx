import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Where is the best place to file a complaint against an employer for unpaid salary?",
    answer: "The 'best' place depends on your role and the amount. For most employees, the Ministry of Labour's SAMADHAN portal is the fastest starting point. For senior executives or large sums, a Summary Suit under Order 37 in a Civil Court is often more effective."
  },
  {
    question: "Do I need a lawyer to file a complaint on the SAMADHAN portal?",
    answer: "No, the portal is designed for direct use by employees. However, having a lawyer draft your 'Statement of Claim' can significantly improve your chances of a favorable conciliation output."
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
      "name": "File Complaint Against Employer",
      "item": "https://www.amalegalsolutions.com/where-to-file-a-complaint-if-your-employer-doesnt-pay-you"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Where to File a Complaint if Your Employer Doesn't Pay You? Step-by-Step Recovery Guide",
  "description": "Exhaustive legal guide on the best forums to recover unpaid salary in India. Covers SAMADHAN portal, Labour Court, Summary Suits, and Criminal Action options.",
  "image": "https://www.amalegalsolutions.com/og-complaint-employer.png",
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
  "image": "https://www.amalegalsolutions.com/og-complaint-employer.png",
  "description": "Expert legal assistance for recovering unpaid salary, F&F settlements, and wrongful termination disputes.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1840"
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
        "name": "Vikram Singh"
      },
      "reviewBody": "AMA Legal Solutions helped me recover my 6-month pending salary from a tech giant. Their strategy for the SAMADHAN portal was flawless."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Iyer"
      },
      "reviewBody": "Excellent legal support for F&F recovery. They handled the legal notice and conciliation meetings with extreme professionalism."
    }
  ]
};

export const metadata = {
  title: "Where to File a Complaint if Employer Doesn't Pay Salary in India",
  description:
    "Facing salary delay or non-payment? Learn the exact forums where you can file a complaint against your employer, from the SAMADHAN portal to Labour Courts and Civil Suits.",
  keywords: [
    "where to file complaint against employer for salary",
    "how to complain about unpaid wages in india",
    "samadhan portal salary complaint",
    "labour court complaint for salary",
    "legal action against employer for non payment",
    "ama legal solutions salary recovery guide",
    "director liability for unpaid salary",
    "filing complaint in labour department delhi"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/where-to-file-a-complaint-if-your-employer-doesnt-pay-you',
  },
};

export default function ComplaintFilingPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "evidence-inventory", title: "Step 1: Evidence Inventory" },
    { id: "demand-notice", title: "Step 2: Formal Demand" },
    { id: "samadhan-portal", title: "The SAMADHAN Portal" },
    { id: "labour-commissioner", title: "Regional Labour Commissioner" },
    { id: "inspections-fines", title: "Inspections & Fines" },
    { id: "labour-court-steps", title: "Labour Court (Sec 33-C)" },
    { id: "recovery-certificate", title: "Recovery Certificates" },
    { id: "summary-suit-order37", title: "Summary Suit (O-37)" },
    { id: 'nclt-insolvency', title: 'Insolvency & NCLT' },
    { id: 'criminal-action', title: 'Criminal Dimensions' },
    { id: 'pf-theft-recovery', title: 'Provident Fund Recovery' },
    { id: 'gratuity-recovery', title: 'Gratuity & Exit Pay' },
    { id: 'commission-bonus-recovery', title: 'Variable Pay & Bonus' },
    { id: 'harassment-nonpayment', title: 'Harassment & Coercion' },
    { id: 'evidence-forensics', title: 'Digital Forensics' },
    { id: 'director-liability', title: 'Director Liability' },
    { id: 'wrongful-termination', title: 'Wrongful Termination' },
    { id: 'termination-laws', title: 'Termination Checklist' },
    { id: 'client-reviews', title: 'Success Stories' },
    { id: 'faq-section', title: 'Recovery FAQ' },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "File Complaint", href: "/where-to-file-a-complaint-if-your-employer-doesnt-pay-you" },
  ];

  const relatedPages = [
    { label: "Can Company Hold Salary?", href: "/can-company-hold-my-salary-after-resignation" },
    { label: "Recovery Roadmap", href: "/employer-not-paying-salary-after-resignation" },
    { label: "Legal Notice for FNF", href: "/not-being-paid-fnf-want-to-send-legal-notice" },
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
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D2A02A] opacity-10 rounded-full translate-x-1/3 -translate-y-1/3 z-0"></div>
          
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <div className="flex items-center justify-center gap-2 mb-8 bg-white/10 backdrop-blur-sm w-fit mx-auto px-4 py-1.5 rounded-full border border-white/20">
              <div className="flex text-[#D2A02A] text-sm">★★★★★</div>
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">4.9/5 Rating (1,840+ Recovery Cases)</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-10 leading-tight tracking-tight">
              Where to File a <span className="text-[#D2A02A]">Complaint Against Your Employer</span> for Unpaid Salary?
            </h1>
            <p className="text-sm md:text-2xl mb-8 md:mb-14 max-w-5xl mx-auto text-gray-300 leading-relaxed">
              Don't remain silent. India has powerful statutory forums and legal mechanisms to recover your hard-earned wages. From the Ministry of Labour's digital portals to high-speed recovery suits, learn exactly where and how to strike back.
            </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 md:py-5 md:px-16 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-xl">
                  Start Recovery Process
                </button>
              </Link>
              <a href="tel:+918700343611" className="bg-transparent border-2 border-white/40 backdrop-blur-sm hover:border-[#D2A02A] text-white font-bold py-4 px-10 md:py-5 md:px-16 rounded-full transition-all transform hover:scale-105 text-base md:text-xl">
                Free Consultation
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-10 items-start mt-8">
            
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b pb-2 uppercase tracking-widest">Navigation</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-8 sticky top-20 z-10 scale-95 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-16 rounded-[2.5rem] shadow-sm space-y-12 md:space-y-20 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    The Crisis of "Wage Evasion": Why You Need a Forum
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 md:space-y-8 mt-4">
                    <p className="text-base md:text-xl leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-[#D2A02A] first-letter:mr-3 first-letter:float-left">
                      Every single day, thousands of professionals across India-from junior developers to senior vice presidents-find their bank accounts empty on payday. The employer's excuses range from "funding delay" to the notorious "pending internal audit." However, under Indian law, salary is not a gift or a discretionary bonus; it is a statutory right for labor already performed.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      At AMA Legal Solutions, we understand that the first question in every victim's mind is: <strong>"Who do I talk to?"</strong> The HR department is often part of the problem, and a police station might tell you it is a "civil matter." The reality is that there is a structured, multi-tiered hierarchy of forums designed specifically to handle wage theft and salary disputes. Choosing the <em>wrong</em> forum can waste months of your time, while choosing the <em>right</em> one can trigger a payment in days.
                    </p>
                    <div className="bg-[#1a202c] text-white p-10 rounded-[2rem] border-l-[10px] border-[#D2A02A] shadow-xl">
                      <h4 className="text-[#D2A02A] font-bold mb-4 uppercase tracking-widest text-xs">The Golden Rule of Recovery</h4>
                      <p className="text-lg md:text-xl italic font-medium leading-relaxed opacity-90">
                        "Do not wait for a 'Round of Funding' or a 'New Product Launch' before taking action. The longer you wait, the higher the risk of the company siphoning assets or filing for insolvency, which can put your dues at the bottom of the priority list."
                      </p>
                    </div>
                  </div>
                </section>

                {/* Step 1: Evidence Inventory */}
                <section id="evidence-inventory" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight border-b-4 border-[#D2A02A] pb-3 inline-block">
                    01. The "Pre-Complaint" Inventory: Building Your File
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      Before you approach any government body or court, you must have a "Non-Refutable" evidence file. Most companies rely on your lack of documentation to deny the debt. You must assemble these five pillars:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-2xl flex items-center justify-center font-bold mb-4">01</div>
                        <h4 className="font-bold text-gray-900 mb-3 text-xl">The Contractual Basis</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Appointment Letter, Increment Letters, and the latest Compensation Revision PDFs. These prove the rate at which you were supposed to be paid.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-2xl flex items-center justify-center font-bold mb-4">02</div>
                        <h4 className="font-bold text-gray-900 mb-3 text-xl">The Attendance Record</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">Screenshots of your Biometric logs, Slack login history, or sent-emails. This proves you actually performed the work during the unpaid period.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#1a202c] text-white rounded-2xl flex items-center justify-center font-bold mb-4">03</div>
                        <h4 className="font-bold text-gray-900 mb-3 text-xl">Prior Payslips</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">At least the last 6 months of payslips. These show the bank details, employee ID, and the usual deduction patterns (TDS/PF).</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-[#1a202c] text-white rounded-2xl flex items-center justify-center font-bold mb-4">04</div>
                        <h4 className="font-bold text-gray-900 mb-3 text-xl">Admission of Debt</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">The "Gold Mine" of evidence: Any email from HR saying "We will pay next week" or "Wait for the audit." This is a legal admission of liability.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Step 2: Formal Demand */}
                <section id="demand-notice" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10">Step 2: The "Seven-Day" Demand Notice</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Forums like the Labour Commissioner or the SAMADHAN portal require you to show that you "tried to resolve it internally" before escalating. We recommend a final, formal Demand Email sent to the CEO, HR Head, and Finance Head.
                    </p>
                    <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
                      <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        What the Demand Must Include:
                      </h4>
                      <ul className="text-sm md:text-base text-amber-800 space-y-3 list-disc pl-5">
                        <li>The exact amount due (Gross and Net breakdown).</li>
                        <li>The exact months and days for which the salary is pending.</li>
                        <li>A clear 7-day deadline for repayment.</li>
                        <li>Mention that failure to pay will lead to "Statutory complaints on the SAMADHAN portal and specialized litigation."</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* SAMADHAN Portal */}
                <section id="samadhan-portal" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    03. The SAMADHAN Portal: India's Digital Conciliation Engine
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      For most industrial and private sector employees in India, the <strong>SAMADHAN Portal</strong> (Software Application for Monitoring and Disposal, Handling and Apportioning) is the single most effective legal starting point. Managed by the Ministry of Labour and Employment, this portal bypasses traditional bureaucratic delays.
                    </p>
                    <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                      <h4 className="text-[#D2A02A] font-bold mb-6 uppercase tracking-widest">The SAMADHAN Step-by-Step Filing Guide</h4>
                      <div className="space-y-6">
                        <div className="flex gap-5 items-start">
                          <div className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                          <div>
                            <p className="font-bold text-lg mb-1">Portal Login & Registration</p>
                            <p className="text-sm opacity-80 leading-relaxed text-gray-300">Visit samadhan.labour.gov.in. Register using your Aadhaar-linked mobile number. Choose the 'Worker' category to create your profile.</p>
                          </div>
                        </div>
                        <div className="flex gap-5 items-start">
                          <div className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                          <div>
                            <p className="font-bold text-lg mb-1">Filling the Industrial Dispute</p>
                            <p className="text-sm opacity-80 leading-relaxed text-gray-300">Under 'Raise Dispute', select the category 'Non-payment of wages'. Enter the company details, including the registered address and the name of the HR Head/Director.</p>
                          </div>
                        </div>
                        <div className="flex gap-5 items-start">
                          <div className="bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                          <div>
                            <p className="font-bold text-lg mb-1 text-white">Document Upload</p>
                            <p className="text-sm opacity-80 leading-relaxed text-gray-300">Upload your demand email (sent in Step 2), your payslips, and a brief 'Statement of Claim'. The system will generate a Case ID immediately.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 italic">
                      <p className="text-base text-blue-900 leading-relaxed">
                        <strong>Why it works:</strong> Once a dispute is raised, the system automatically assigns it to a Regional Labour Commissioner. The employer receives an official government notification, which carries significantly more weight than a hundred followup emails from an employee.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Regional Labour Commissioner */}
                <section id="labour-commissioner" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    04. The Regional Labour Commissioner (RLC): The Face of Mediation
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      If the SAMADHAN portal is the engine, the <strong>Regional Labour Commissioner (RLC)</strong> is the driver. Once your case is assigned, the RLC's office will issue a 'Notice of Conciliation' to the employer.
                    </p>
                    <div className="space-y-6">
                      <h4 className="font-bold text-gray-900 text-xl border-l-4 border-[#1a202c] pl-4">The Conciliation Meeting (The Turning Point)</h4>
                      <p className="text-base md:text-lg leading-relaxed">
                        You and the employer (usually represented by their Legal/HR head) will be summoned to a joint meeting. The RLC acts as a mediator to settle the matter. In our experience at AMA Legal Solutions, 60-70% of salary disputes are resolved in the first two hearings because employers realize that fighting a government-monitored dispute is costlier than paying the dues.
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                        <li className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                          <span className="text-green-500 font-bold">✔</span>
                          <span className="text-sm font-medium">Power to summon records and witnesses.</span>
                        </li>
                        <li className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                          <span className="text-green-500 font-bold">✔</span>
                          <span className="text-sm font-medium">Power to appoint an inspector for audit.</span>
                        </li>
                        <li className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                          <span className="text-green-500 font-bold">✔</span>
                          <span className="text-sm font-medium">Can refer the matter to Labour Court if conciliation fails.</span>
                        </li>
                        <li className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                          <span className="text-green-500 font-bold">✔</span>
                          <span className="text-sm font-medium">Mediates a formal "Terms of Settlement" (Form-H).</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Inspections & Fines */}
                <section id="inspections-fines" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight border-b-4 border-red-600 pb-3 inline-block">
                    05. Leverage: Inspections and Penalties for Delay
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                        One of the most under-utilized tools in salary recovery is the <strong>Labour Inspector's Audit</strong>. Under the Payment of Wages Act, if a complaint is filed, the inspector has the right to enter the company premises and inspect the wage registers of ALL employees.
                    </p>
                    <div className="bg-red-50 p-10 rounded-[2.5rem] border-l-[10px] border-red-600">
                        <h4 className="text-red-900 font-bold mb-4 uppercase tracking-widest text-xs">Employer's Worst Nightmare</h4>
                        <p className="text-base text-gray-800 leading-relaxed">
                            No company wants a Labour Inspector on their premises. An inspection often uncovers other non-compliances like missing PF records, ESIC lapses, or overtime violations. We often use this technicality during conciliation: "If we don't settle today, we will request an immediate on-site inspection of the company's wage registers." This threat alone usually unlocks the pending payment.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Labour Court Sec 33-C */}
                <section id="labour-court-steps" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    06. The Labour Court: Getting a "Recovery Certificate"
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      When conciliation fails, the matter moves to the <strong>Labour Court</strong>. Under <strong>Section 33-C of the Industrial Disputes Act, 1947</strong>, the court has the power to compute and recover money due from an employer. This is the "Nuclear Option" for employees who are classified as 'workmen' under the Act.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 border-t-8 border-[#D2A02A]">
                            <h4 className="font-bold text-gray-900 mb-4 text-xl">Section 33-C(1): Fast Track</h4>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">Used when the amount is already 'settled' or 'admitted' (e.g., an FNF statement exists but remains unpaid). The government can issue a recovery certificate directly to the Collector.</p>
                            <span className="text-xs font-bold text-[#D2A02A] uppercase">Duration: 3-6 Months</span>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 border-t-8 border-[#1a202c]">
                            <h4 className="font-bold text-gray-900 mb-4 text-xl">Section 33-C(2): Adjudication</h4>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">Used when the employer 'disputes' the amount. The court hears evidence, examines witnesses, and mathematically computes the exact dues.</p>
                            <span className="text-xs font-bold text-gray-500 uppercase">Duration: 12-18 Months</span>
                        </div>
                    </div>
                    <div id="recovery-certificate" className="bg-[#1a202c] text-white p-10 rounded-[2.5rem] shadow-2xl space-y-6">
                        <h4 className="text-[#D2A02A] font-bold text-xl">The Power of the Recovery Certificate (RC)</h4>
                        <p className="text-base md:text-lg opacity-90 leading-relaxed">
                            Once the Labour Court issues an RC, it is sent to the <strong>District Collector</strong> (similar to land revenue recovery). The Collector has the power to:
                        </p>
                        <ul className="space-y-4 text-sm md:text-base opacity-85">
                            <li className="flex gap-3 items-center">
                                <span className="w-2 h-2 bg-[#D2A02A] rounded-full"></span>
                                Attach and auction the company's furniture, vehicles, and machinery.
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="w-2 h-2 bg-[#D2A02A] rounded-full"></span>
                                Freeze the company's bank accounts and transfer the dues to you.
                            </li>
                            <li className="flex gap-3 items-center">
                                <span className="w-2 h-2 bg-[#D2A02A] rounded-full"></span>
                                In extreme cases, arrest the directors for non-compliance with the RC.
                            </li>
                        </ul>
                    </div>
                  </div>
                </section>

                {/* Summary Suit Order 37 */}
                <section id="summary-suit-order37" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight border-b-4 border-[#D2A02A] pb-3 inline-block">
                    07. The Civil Path: Summary Suits (Order 37)
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      For senior executives, managers, or those earning over ₹24,000/month (outside the strict definition of 'workman'), the <strong>Summary Suit under Order 37 of the CPC</strong> is the gold standard. Unlike a regular civil suit that takes years, a Summary Suit is a specialized fast-track procedure for liquidated debts.
                    </p>
                    <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-200">
                        <h4 className="font-bold text-gray-900 text-2xl mb-6">How "Leave to Defend" Protects You</h4>
                        <p className="text-base md:text-lg leading-relaxed mb-6">
                            In a regular suit, the defendant can delay by filing vague replies. In a <strong>Summary Suit</strong>, the defendant must apply for "Leave to Defend." If they don't have a solid, factual reason for NOT paying you (e.g., they can't just say "we have no money"), the court will deny them leave and pass a <strong>Judgment and Decree</strong> in your favor immediately.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm">
                                <p className="text-[#D2A02A] font-extrabold text-3xl mb-1">0%</p>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Chance of Delay if debt is admitted</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm">
                                <p className="text-gray-900 font-extrabold text-3xl mb-1">6-9</p>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Months to get a Decree</p>
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm">
                                <p className="text-[#D2A02A] font-extrabold text-3xl mb-1">12%</p>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Average Interest Awarded</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>

                {/* NCLT IBC Path */}
                <section id="nclt-insolvency" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    08. The NCLT Path: Recovery from Insolvent Companies
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      If the company is shutting down or has many creditors, the <strong>Insolvency and Bankruptcy Code (IBC), 2016</strong> becomes your primary tool. Under the IBC, employees are treated as 'Operational Creditors'.
                    </p>
                    <div className="bg-amber-50 p-8 md:p-12 rounded-[2.5rem] border border-amber-200">
                        <h4 className="font-bold text-amber-900 text-2xl mb-6 uppercase tracking-tighter">The "Waterfall" Mechanism (Sec 53 IBC)</h4>
                        <p className="text-base md:text-lg text-amber-800 leading-relaxed mb-6">
                            Many employees fear that if a company goes to NCLT, they will lose everything. On the contrary, the IBC provides a privileged position for workers' dues:
                        </p>
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
                                <p className="font-bold text-gray-900">Priority 1: Insolvency Process Costs</p>
                                <p className="text-sm text-gray-600 italic">Fees for the Liquidator and administrative costs.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
                                <p className="font-bold text-gray-900">Priority 2: Workers' Dues (24 Months)</p>
                                <p className="text-sm text-gray-600 font-medium">Salary and wages for the 24 months preceding the liquidation date are paired with secured creditors' dues. This is a massive legal protection.</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed">
                        To initiate this, you must file <strong>Form 9</strong> (Demand Notice) under Section 8 of the IBC. If the company fails to pay within 10 days, you can file a petition in the NCLT to initiate <strong>CIRP (Corporate Insolvency Resolution Process)</strong>. Often, the mere threat of losing their company to a resolution professional forces promoters to clear individual salary dues.
                    </p>
                  </div>
                </section>

                {/* Criminal Complaints */}
                <section id="criminal-action" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight border-b-4 border-red-600 pb-3 inline-block">
                    09. The Criminal Dimension: FIR and Cheque Bounce
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      While salary non-payment is largely a civil dispute, certain actions by the employer invoke the <strong>Indian Penal Code (IPC)</strong> or the <strong>Negotiable Instruments (NI) Act</strong>. At AMA Legal Solutions, we identify these "Criminal Triggers" to ensure the employer feels the full weight of the law.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col p-8 bg-red-50 rounded-3xl border border-red-100">
                            <h4 className="font-bold text-red-900 text-xl mb-4">Sec 138-NI Act</h4>
                            <p className="text-sm text-red-800 leading-relaxed font-medium">
                                If the company issues an FNF cheque that bounces due to 'Insufficient Funds' or 'Stop Payment', it is a criminal offense. You must send a statutory notice within 30 days. Failure to pay within 15 days of the notice allows you to file a criminal case against the <strong>Director personally</strong>.
                            </p>
                        </div>
                        <div className="flex flex-col p-8 bg-red-50 rounded-3xl border border-red-100">
                            <h4 className="font-bold text-red-900 text-xl mb-4">Sec 406/420-IPC</h4>
                            <p className="text-sm text-red-800 leading-relaxed font-medium">
                                If you can prove the company had the intent to cheat from the beginning, or if they deducted TDS/PF but did not deposit it with the government, it is a <strong>Criminal Breach of Trust</strong>. This warrants an FIR (First Information Report) at the local police station.
                            </p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* PF Theft & Recovery */}
                <section id="pf-theft-recovery" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    10. Recovering PF Theft: The Regional PF Commissioner
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      A common "Hidden Theft" during salary disputes is the non-deposition of Provident Fund (PF). If your payslip shows a PF deduction but the amount doesn't reflect in your UAN portal, the employer has committed a <strong>Statutory Fraud</strong>.
                    </p>
                    <div className="bg-blue-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D2A02A] opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                        <h4 className="text-[#D2A02A] font-bold text-xl mb-4">The Section 7A Inquiry Path</h4>
                        <p className="text-sm md:text-base opacity-90 leading-relaxed mb-6">
                            The Regional PF Commissioner has <strong>Magisterial powers</strong>. Once a complaint is filed:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                            <li className="flex gap-4 items-start bg-blue-800/50 p-4 rounded-xl">
                                <span className="text-[#D2A02A] font-bold">#1</span>
                                <span>The Commissioner can initiate a <strong>7A Inquiry</strong> to determine the actual dues for all employees.</span>
                            </li>
                            <li className="flex gap-4 items-start bg-blue-800/50 p-4 rounded-xl">
                                <span className="text-[#D2A02A] font-bold">#2</span>
                                <span>They can issue an <strong>arrest warrant</strong> against the Directors for non-payment of PF dues.</span>
                            </li>
                            <li className="flex gap-4 items-start bg-blue-800/50 p-4 rounded-xl">
                                <span className="text-[#D2A02A] font-bold">#3</span>
                                <span>They can seize the company's bank accounts directly without a court order.</span>
                            </li>
                            <li className="flex gap-4 items-start bg-blue-800/50 p-4 rounded-xl">
                                <span className="text-[#D2A02A] font-bold">#4</span>
                                <span>Recovery through the PF department is often 5x faster than a regular civil suit.</span>
                            </li>
                        </ul>
                    </div>
                  </div>
                </section>

                {/* Gratuity Complaints */}
                <section id="gratuity-recovery" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    11. Gratuity & Exit Pay: The Controlling Authority
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      If you have completed 4.8 years (approx. 5 years) of service, you are entitled to Gratuity under the <strong>Payment of Gratuity Act, 1972</strong>. Employers often withhold this citing "Resignation policy violations." Legally, gratuity can ONLY be forfeited if you have caused financial loss through a criminal act or gross misconduct.
                    </p>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-xl mb-3">Where to file?</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                You must file a complaint with the <strong>Controlling Authority</strong> (usually the ALC of the region) under <strong>Form N</strong>. The employer is liable to pay the gratuity within 30 days of the date it becomes due. If they delay, the law mandates an interest of 10% p.a.
                            </p>
                        </div>
                        <div className="w-full md:w-64 bg-white p-6 rounded-2xl shadow-sm border border-[#D2A02A]/20 text-center">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Maximum Penalty</p>
                            <p className="text-2xl font-extrabold text-gray-900">Simple Interest @ 10%</p>
                            <p className="text-[10px] text-gray-400 mt-1 italic">Compounded in cases of deliberate delay</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Commission & Bonus Recovery */}
                <section id="commission-bonus-recovery" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight border-b-4 border-[#D2A02A] pb-3 inline-block">
                    12. Variable Pay & Bonus: When Targets Are Met, But Payouts Aren't
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      Many employees, especially in sales and management, rely on commissions, incentives, and bonuses. Employers often use vague clauses or "discretionary" powers to withhold these payments. However, if your employment contract or company policy clearly outlines the conditions for earning these, and you've met them, they become a legal entitlement.
                    </p>
                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                        Key Evidence for Variable Pay Claims:
                      </h4>
                      <ul className="text-sm md:text-base text-blue-800 space-y-3 list-disc pl-5">
                        <li><strong>Offer Letter/Employment Agreement:</strong> Clearly stating commission/bonus structure.</li>
                        <li><strong>Performance Reviews:</strong> Documenting that targets were met or exceeded.</li>
                        <li><strong>Internal Communications:</strong> Emails or chat logs confirming eligibility or expected payouts.</li>
                        <li><strong>Company Policies:</strong> Any official documents detailing incentive plans.</li>
                      </ul>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed">
                      These claims can be pursued through the same forums as unpaid salary, often as part of a larger recovery suit, ensuring you receive your full compensation package.
                    </p>
                  </div>
                </section>

                {/* Mental Harassment Claims */}
                <section id="harassment-nonpayment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    13. Beyond the Money: Harassment & Coercion
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      At AMA Legal Solutions, we don't believe in just recovering the principal amount. Non-payment of salary causes missed EMIs, credit score damage, and massive psychological stress. In a <strong>Civil Recovery Suit</strong>, we demand:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none pl-0">
                        <li className="bg-[#1a202c] p-6 rounded-2xl text-white shadow-lg transform transition-transform hover:-translate-y-2">
                            <h5 className="text-[#D2A02A] font-bold mb-2">Consequential Damages</h5>
                            <p className="text-xs opacity-80">Reimbursement for bank penalties and interest on missed loans during the hold period.</p>
                        </li>
                        <li className="bg-[#1a202c] p-6 rounded-2xl text-white shadow-lg transform transition-transform hover:-translate-y-2">
                            <h5 className="text-[#D2A02A] font-bold mb-2">Mental Agony</h5>
                            <p className="text-xs opacity-80">Compensation for the emotional distress and anxiety caused to you and your family.</p>
                        </li>
                        <li className="bg-[#1a202c] p-6 rounded-2xl text-white shadow-lg transform transition-transform hover:-translate-y-2">
                            <h5 className="text-[#D2A02A] font-bold mb-2">Legal Costs</h5>
                            <p className="text-xs opacity-80">Ensuring the company pays for the very lawyers you hired to fight them.</p>
                        </li>
                    </ul>
                  </div>
                </section>

                {/* State Portals & Limitation */}
                <section id="state-portals" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10">14. State-Specific Portals: Karnataka, Delhi, and Maharashtra</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      While the central SAMADHAN portal is global, some states have highly active local departments that offer faster redressal for IT and Private Sector employees. 
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden shadow-sm">
                            <thead className="bg-[#1a202c] text-white">
                                <tr>
                                    <th className="p-5 font-bold uppercase text-xs">State</th>
                                    <th className="p-5 font-bold uppercase text-xs">Key Forum</th>
                                    <th className="p-5 font-bold uppercase text-xs">Speed Rating</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b">
                                    <td className="p-5 font-bold text-gray-900 border-r">Karnataka</td>
                                    <td className="p-5 text-gray-600 border-r">Assistant Labour Commissioner (Bangalore Urban)</td>
                                    <td className="p-5 text-green-600 font-bold">★★★★★</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-5 font-bold text-gray-900 border-r">Maharashtra</td>
                                    <td className="p-5 text-gray-600 border-r">Labour Inspector (Mumbai/Pune) via Mahaswayam</td>
                                    <td className="p-5 text-[#D2A02A] font-bold">★★★★☆</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-5 font-bold text-gray-900 border-r">Delhi</td>
                                    <td className="p-5 text-gray-600 border-r">Delhi Labour Dept portal (e-district)</td>
                                    <td className="p-5 text-green-600 font-bold">★★★★☆</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                </section>

                <section id="limitation-period" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight border-b-4 border-red-600 pb-3 inline-block uppercase tracking-tighter">
                    15. The Limitation Period: Do Not Wait Too Long!
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed font-bold text-red-700">
                        In law, "Equity aids the vigilant, not the indolent." There are strict deadlines after which forums will refuse to hear your complaint.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                            <h4 className="font-bold text-gray-900 mb-2">Labour Commissioner</h4>
                            <p className="text-sm text-gray-600">Complaints should ideally be filed within <strong>1 year</strong> of the cause of action. While delays can be condoned, it makes the case significantly harder.</p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                            <h4 className="font-bold text-gray-900 mb-2">Civil Recovery (O-37)</h4>
                            <p className="text-sm text-gray-600">The limitation is strictly <strong>3 years</strong> under the Limitation Act. After 3 years, the debt becomes "Time Barred" and legally unrecoverable.</p>
                        </div>
                    </div>
                  </div>
                </section>

                <section id="it-startup-nuances" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    16. Specialized Recovery: IT Sector & VC-Backed Startups
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                        Recovering salary from a high-growth startup requires a different playbook. In these companies, the "Directors" and "Investors" are more sensitive to reputation than the brand itself.
                    </p>
                    <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-200">
                         <h4 className="font-bold text-[#D2A02A] text-xl mb-6">The "Investor Leverage" Strategy</h4>
                         <p className="text-sm md:text-base leading-relaxed mb-6">
                            Startup founders often hide behind the "corporate shell." However, most startups are governed by <strong>Shareholders' Agreements (SHA)</strong> that mandate compliance with employment laws. At AMA Legal Solutions, our tactical approach includes:
                         </p>
                         <ul className="space-y-4">
                            <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="text-[#D2A02A] font-bold">A.</span>
                                <div>
                                    <p className="font-bold text-gray-900">Naming the VCs in the Notice</p>
                                    <p className="text-xs text-gray-500">Naming the Nominee Directors from Venture Capital firms in your legal notice. VCs hate being named in individual wage disputes as it affects their reputation in the ecosystem.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="text-[#D2A02A] font-bold">B.</span>
                                <div>
                                    <p className="font-bold text-gray-900">Leveraging the MCA Portal</p>
                                    <p className="text-xs text-gray-500">Filing a formal complaint with the <strong>Registrar of Companies (RoC)</strong> for mismanagement and failure to maintain statutory worker liability records.</p>
                                </div>
                            </li>
                         </ul>
                    </div>
                  </div>
                </section>

                <section id="director-liability" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight border-b-4 border-[#D2A02A] pb-3 inline-block">
                    17. Piercing the Veil: Personal Liability of Directors
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                        A common myth is that you can only sue "The Company." Under the <strong>Payment of Wages Act</strong> and the <strong>Companies Act, 2013</strong>, the person responsible for the payment of wages (usually the MD or the CEO) can be held <strong>Personally Liable</strong> if there is a deliberate withholding of dues. 
                    </p>
                    <div className="bg-[#1a202c] text-white p-10 rounded-[3rem] shadow-2xl space-y-6">
                        <div className="flex items-center gap-4 text-[#D2A02A]">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V5a1 1 0 112 0v4h1a1 1 0 110 2h-2a1 1 0 01-1-1zm1 5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
                            <h4 className="font-bold text-2xl uppercase tracking-tighter">Legal Precedent</h4>
                        </div>
                        <p className="text-base md:text-xl italic font-serif leading-relaxed text-gray-300">
                            "Courts have repeatedly held that if a company has siphoned funds to other group entities while leaving employee salaries unpaid, the Directors' personal assets can be attached to satisfy the decree."
                        </p>
                        <p className="text-sm opacity-60">
                            Reference: Numerous NCLAT and High Court judgments on 'Operational Debt' priority.
                        </p>
                    </div>
                  </div>
                </section>

                <section id="evidence-forensics" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight border-b-4 border-[#D2A02A] pb-3 inline-block">
                    18. Digital Forensic Trail: Evidence in the age of Slack & Teams
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                     <p className="text-base md:text-lg leading-relaxed">
                        The majority of modern wage disputes are won or lost on digital evidence. Under <strong>Section 65B of the Indian Evidence Act</strong>, digital communications are secondary evidence and are admissible in both Labour Courts and Civil Suits if properly certified.
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 border-t-4 border-blue-500">
                            <h4 className="font-bold text-gray-900 mb-4">The "Admission of Liability" Chat</h4>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">Export chats where your manager says, "I know your FNF is pending, we're just waiting for funds." This is a fatal admission for the employer.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 border-t-4 border-blue-500">
                            <h4 className="font-bold text-gray-900 mb-4">The Work-Status Screenshot</h4>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">Screenshots of your Jira/Trello boards or Slack threads on the last day of work. This counters the employer's claim of "Job Abandonment."</p>
                        </div>
                     </div>
                  </div>
                </section>

                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    19. Success Stories: Turning "Complaint" into "Payout"
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center font-bold mb-6 text-xl">✓</div>
                        <h4 className="font-bold text-gray-900 text-2xl mb-4 leading-tight">The IT Giant vs. Lead Engineer</h4>
                        <p className="text-sm text-gray-600 leading-relaxed italic mb-6">
                            "A Lead Engineer was denied ₹14 Lakhs in notice buy-out and bonus. The company cited 'confidentiality breach.' AMA Legal Solutions intervened, filed a Summary Suit, and secured a 100% payout plus interest in 7 months without a single trial hearing."
                        </p>
                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Result: Full Recovery + Interest</span>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center font-bold mb-6 text-xl">✓</div>
                        <h4 className="font-bold text-gray-900 text-2xl mb-4 leading-tight">The "Closed Shop" Startup Case</h4>
                        <p className="text-sm text-gray-600 leading-relaxed italic mb-6">
                            "A startup terminated 50 employees and shut its office. We used the SAMADHAN portal to name the investors and founders personally. The founders settled the dues of all 50 employees using their personal savings to avoid an RoC inquiry."
                        </p>
                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Result: Mass Settlement Secured</span>
                    </div>
                  </div>
                </section>

                <section id="wrongful-termination" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    20. Wrongful Termination: When Being Fired is Illegal
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      Often, non-payment of salary is accompanied by a sudden "Termination for Performance" or "Redundancy." In India, termination is only legal if it follows the <strong>Principles of Natural Justice</strong>. It is not merely a breach of contract but a violation of statutory labor protections that guarantee a fair hearing and a clear justification for any separation. 
                    </p>
                    <div className="bg-red-50 p-10 rounded-[2.5rem] border-l-[10px] border-red-600">
                        <h4 className="text-red-900 font-bold mb-6 uppercase tracking-widest">The Legal Checklist for Termination</h4>
                        <ol className="space-y-4 text-sm md:text-base text-gray-800">
                            <li><strong>Show Cause Notice:</strong> The employer must first issue a notice asking you to explain the alleged misconduct or performance issue.</li>
                            <li><strong>Domestic Inquiry:</strong> For misconduct, a formal internal inquiry must be conducted where you have the right to present evidence.</li>
                            <li><strong>Notice Pay:</strong> Unless it is a 'Termination for Cause' (proven gross misconduct), the employer must provide 1-3 months of notice pay (or notice).</li>
                            <li><strong>Retrenchment Compensation:</strong> If you are being laid off, you are entitled to 15 days of salary for every year of completed service under Section 25-F of the ID Act.</li>
                        </ol>
                    </div>
                  </div>
                </section>

                <section id="termination-laws" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-tight">
                    21. Termination Checklist: Is Your Exit Legal?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p className="text-base md:text-lg leading-relaxed">
                      Before the company can legally terminate you, they must follow a strict procedural "Due Process." Failure to do so makes the termination <i>ab initio</i> void. This means you can claim back-wages for the entire period following the illegal termination until the date of your reinstatement or settlement.
                    </p>
                    <div className="bg-red-50 p-10 rounded-[2.5rem] border-l-[10px] border-red-600">
                        <h4 className="text-red-900 font-bold mb-6 uppercase tracking-widest text-sm">Statutory Exit Requirements</h4>
                        <ol className="space-y-4 text-sm md:text-base text-gray-800">
                            <li><strong>Show Cause Notice:</strong> A formal letter detailing the allegations.</li>
                            <li><strong>Opportunity to Defend:</strong> You must be given 48-72 hours to respond.</li>
                            <li><strong>Inquiry Officer:</strong> An independent party must review the facts.</li>
                            <li><strong>Severance:</strong> If retrenched, 15 days of salary for every year worked (Sec 25-F).</li>
                        </ol>
                    </div>
                  </div>
                </section>

                {/* Client Reviews Section */}
                <section id="client-reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center uppercase tracking-tighter">Verified Client Feedback</h2>
                  
                  <div className="flex flex-col items-center mb-16 bg-gray-50 py-10 rounded-[40px] border border-gray-100 shadow-inner">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex text-[#D2A02A] text-4xl">
                        {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                      </div>
                      <span className="text-4xl font-black text-gray-900">4.9/5</span>
                    </div>
                    <p className="text-gray-500 font-medium uppercase tracking-[0.2em] text-sm">Based on 1,840+ Salary Recovery Cases</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform">
                      <div className="absolute top-0 right-10 -mt-6 bg-[#D2A02A] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Case Won</div>
                      <div className="text-6xl text-gray-100 absolute bottom-10 right-10 leading-none select-none italic">"</div>
                      <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed">
                        "AMA Legal Solutions helped me recover my 6-month pending salary from a tech giant. Their strategy for the SAMADHAN portal was flawless. I received my full amount including bonus within 45 days."
                      </p>
                      <div className="flex items-center border-t border-gray-50 pt-8 mt-auto">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-800 font-black text-xl mr-4 shadow-sm group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">VS</div>
                        <div>
                          <p className="font-extrabold text-gray-900 text-base">Vikram Singh</p>
                          <p className="text-xs text-[#D2A02A] font-bold uppercase tracking-widest">Software Engineer</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform">
                      <div className="absolute top-0 right-10 -mt-6 bg-green-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">100% Recovery</div>
                      <div className="text-6xl text-gray-100 absolute bottom-10 right-10 leading-none select-none italic">"</div>
                      <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed">
                        "Excellent legal support for F&F recovery. They handled the legal notice and conciliation meetings with extreme professionalism. I highly recommend them for any employer dispute."
                      </p>
                      <div className="flex items-center border-t border-gray-50 pt-8 mt-auto">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-800 font-black text-xl mr-4 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">AI</div>
                        <div>
                          <p className="font-extrabold text-gray-900 text-base">Ananya Iyer</p>
                          <p className="text-xs text-green-600 font-bold uppercase tracking-widest">HR Professional</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faq-section" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-10 md:mb-16 flex items-center gap-5">
                    <span className="w-3 h-12 bg-[#D2A02A] rounded-full"></span>
                    Frequently Asked Questions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                      {
                        q: "Is there a specific 'Minimum Wage' protection for white-collar workers?",
                        a: "While 'Minimum Wage' laws are primarily for blue-collar staff, the Payment of Wages Act protections have been expanded to include employees earning up to ₹24,000 per month. For higher earners, the contract and Civil Procedure Code (CPC) provide the primary recovery framework."
                      },
                      {
                        q: "Can the company sue me back if I file a complaint?",
                        a: "Some employers try a 'SLAPP' tactic (Strategic Lawsuit Against Public Participation) by filing a defamation or data theft case. However, these are rarely successful against a legitimate wage recovery complaint. Courts view such counter-suits with extreme suspicion."
                      },
                      {
                        q: "What is the difference between Section 33-C(1) and 33-C(2)?",
                        a: "33-C(1) is for recovery of settled amounts (no dispute on the figure). 33-C(2) is used when the employer disputes the amount, requiring the Labour Court to mathematically determine the dues."
                      },
                      {
                        q: "Can I file a case against a company that has changed its name?",
                        a: "Yes. Liability follows the 'Business' and its 'Promoters'. Name changes do not erase statutory worker liabilities. We use the MCA portal to track 'Related Party' entities."
                      },
                      {
                        q: "What happens if a company director leaves India?",
                        a: "You can still proceed against the company's assets. If a criminal case is filed (like PF theft), an Interpol Red Corner Notice can theoretically be requested, though it's rare. Practically, we target the Indian assets and bank accounts."
                      },
                      {
                        q: "Can I recover salary from a 'Service Agency' if I was a contractor?",
                        a: "If the agency was your direct employer, they are liable. If they are just 'Facilitators', we apply the 'Principal Employer' doctrine to make the client company liable for your wages."
                      },
                      {
                        q: "Is it legal to deduct 'Laptops or Assets' from the salary?",
                        a: "Only the depreciated value of the missing asset can be deducted. The employer cannot hold the ENTIRE salary just because a ₹50,000 laptop is missing. This is a common form of extortion."
                      },
                      {
                        q: "Does email communication count as 'Formal Notice'?",
                        a: "Yes, under the IT Act, 2000, emails are legally valid. However, for Labour Courts and Civil Suits, we recommend a physical Legal Notice sent via Registered Post AD."
                      },
                      {
                        q: "What is a 'Recovery Certificate' (RC)?",
                        a: "An RC is a document issued by the Labour Commissioner to the District Collector. It authorizes the Collector to recover your dues as if they were 'Arrears of Land Revenue'-including the power of auctioning property."
                      },
                      {
                        q: "Can I claim for the loss of a better career opportunity?",
                        a: "If the company's delay in giving a 'Relieving Letter' caused you to miss a join-date at a new firm, you can sue for <strong>Consequential Damages</strong> and professional loss."
                      },
                      {
                        q: "What is 'Liquidated Damages' in an employment contract?",
                        a: "These are pre-agreed penalties for breach of contract. However, an employer cannot just assign an arbitrary figure. They must prove actual loss in court to justify any deduction from your salary."
                      },
                      {
                        q: "Can I go to the police for an unpaid salary?",
                        a: "Generally, police treat it as civil. However, if there is <strong>Breach of Trust (406 IPC)</strong> or <strong>Cheating (420 IPC)</strong>, an FIR is mandatory. Naming the directors in an FIR is a powerful tool."
                      },
                      {
                        q: "How much interest can I realistically expect?",
                        a: "Courts usually award 9% to 12% p.a. for salary delays. In cases of extreme harassment, we've seen awards of up to 18% p.a. under the Interest Act."
                      },
                      {
                        q: "Is a 'No Dues Certificate' signed under pressure valid?",
                        a: "No. Any document signed under duress or coercion is voidable. We often advise clients to sign it 'Under Protest' or mention 'Subject to realization of payment'."
                      },
                      {
                        q: "What if the company directors are based in the USA?",
                        a: "If the company is registered in India, the Indian directors are liable. If it's a 100% foreign entity with no Indian presence, the recovery is harder and requires International Arbitration."
                      },
                      {
                        q: "Can I recover stock options in Labour Court?",
                        a: "Labour Court focuses on 'Wages'. For ESOPs, you need to file a Civil Suit for 'Specific Performance' of the contract."
                      },
                      {
                        q: "What is a 'Demand Notice' in IBC?",
                        a: "It's a formal notice under Section 8 of the IBC. If the company doesn't pay in 10 days, you can initiate insolvency proceedings against them in NCLT."
                      },
                      {
                        q: "Can I sue for the 'Tax' deducted but not deposited?",
                        a: "Yes. This is a criminal offense under the Income Tax Act. You can file a complaint with the IT department and also include it in your recovery suit."
                      },
                      {
                        q: "What is the 'Full and Final Settlement' (FNF) timeline?",
                        a: "Legally, FNF should be settled within 2 days of termination (under new codes) or within the timeline mentioned in your appointment letter (usually 30-45 days)."
                      },
                      {
                        q: "Can I recover salary from a startup that has 'No Assets'?",
                        a: "We look for 'Personal Liability' of directors or 'Fraudulent Preference' if they paid other creditors while ignoring employees."
                      },
                      {
                        q: "Can I file a case for 1 month's pending salary?",
                        a: "Yes. No amount is too small when it comes to your rights. However, the cost of litigation should be balanced against the recovery amount. We often send a 'Pre-Litigation Notice' first."
                      },
                      {
                        q: "Is an 'Unsigned' Appointment Letter valid?",
                        a: "If you have emails from the company domain sending the letter, and you followed the joining instructions, the contract is deemed accepted through conduct by both parties."
                      }
                    ].map((faq, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                        <h4 className="font-bold text-gray-900 mb-2 flex gap-2">
                          <span className="text-[#D2A02A]">Q.</span>
                          {faq.q}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed border-t pt-3 mt-3">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Area */}
                <section id="cta-final" className="scroll-mt-32">
                   <div className="bg-[#1a202c] text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden text-center">
                      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                      <h2 className="text-3xl md:text-5xl font-extrabold mb-8 relative z-10 leading-tight">
                        Don't Let Them Keep Your Hard-Earned Money
                      </h2>
                      <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10 font-medium">
                        Wage theft is a crime against your labor and your dignity. Our expert recovery lawyers at AMA Legal Solutions are ready to fight for every rupee you're owed.
                      </p>
                      <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10 px-4">
                        <Link href="/contact" className="bg-[#D2A02A] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#b88a22] transition-all transform hover:scale-105 shadow-xl">
                          Start Your Complaint
                        </Link>
                        <a href="tel:+918700343611" className="bg-transparent border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:border-[#D2A02A] transition-all transform hover:scale-105 backdrop-blur-sm">
                          Urgent Legal Help
                        </a>
                      </div>
                   </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-24">
              <div className="bg-[#1a202c] p-10 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150"></div>
                <h3 className="text-3xl font-bold mb-6 relative z-10 leading-tight">Unhappy with HR? Fight Back.</h3>
                <p className="text-gray-300 mb-10 text-base relative z-10 leading-relaxed font-medium">
                  We specialize in high-speed salary recovery. Our legal notices have a 85% success rate in releasing held funds within 15 days.
                </p>
                <Link href="/contact" className="block w-full bg-[#D2A02A] text-white text-center py-5 rounded-2xl font-bold hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-lg mb-6 text-xl">
                  Message an Expert
                </Link>
                <div className="text-center text-xs text-gray-400 font-bold tracking-widest uppercase">
                  Government-Certified Recovery
                </div>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-2 h-8 bg-[#D2A02A] rounded-full mr-4"></span>
                  Related Guides
                </h3>
                <div className="space-y-6">
                  {relatedPages.map((page, idx) => (
                    <Link key={idx} href={page.href} className="group block p-5 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                      <p className="text-base font-bold text-gray-700 group-hover:text-[#D2A02A] transition-colors mb-1">{page.label}</p>
                      <p className="text-xs text-gray-400">Step-by-step recovery strategies.</p>
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

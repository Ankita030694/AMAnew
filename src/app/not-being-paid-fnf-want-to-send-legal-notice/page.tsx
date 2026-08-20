import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is a Full and Final (F&F) settlement in India?",
    answer: "Full and Final settlement is the comprehensive process where an employer clears all financial dues with an employee who is leaving the organization. This includes unpaid salary, leave encashment, gratuity, statutory bonus, and reimbursements, while accounting for necessary deductions like notice period shortfall or income tax."
  },
  {
    question: "How many days does an employer have to settle F&F dues in India?",
    answer: "Under the Payment of Wages Act, an employer is legally required to pay the final wages within two working days of the termination of employment. However, standard industry practice for a complete F&F settlement often ranges from 30 to 45 days. If the settlement exceeds this timeline without a valid reason, it is considered a delay."
  },
  {
    question: "What should I do if my employer refuses to pay my F&F settlement?",
    answer: "You should first send a formal written reminder to HR and management. If they remain unresponsive, the next legal step is to issue a formal legal notice through an advocate. This creates a legal record and often pressures the employer to settle to avoid litigation. You can also file a complaint with the Labour Commissioner."
  },
  {
    question: "Can an employer withhold F&F settlement because of a notice period dispute?",
    answer: "Employers can deduct payment for the shortfall in the notice period if it was clearly mentioned in the employment contract. However, they cannot completely withhold the entire F&F settlement or other statutory dues like gratuity based solely on notice period issues without a proper legal adjustment."
  },
  {
    question: "Is it legal to file a complaint with the Labour Commissioner for unpaid salary?",
    answer: "Yes, it is a primary legal remedy. You can file a formal complaint with the Labour Office in the jurisdiction where the office is located. The Labour Commissioner will then issue a notice to the employer to appear and explain the non payment. This often leads to a conciliation and settlement of dues."
  },
  {
    question: "What are the components of a legal notice for unpaid F&F?",
    answer: "A strong legal notice includes details of your employment, the last working day, a breakdown of total dues (salary, leave encashment, gratuity), the delay duration, a reference to relevant labor laws like the Payment of Wages Act, and a clear deadline for payment before initiating court proceedings."
  },
  {
    question: "How much gratuity am I eligible for during F&F?",
    answer: "Under the Payment of Gratuity Act, employees who have completed at least five years of continuous service are eligible for gratuity. It is calculated as 15 days of last drawn salary for every completed year of service. Failure to pay gratuity within 30 days of leaving can attract interest penalties for the employer."
  },
  {
    question: "Can I claim interest on delayed F&F settlement?",
    answer: "Yes, you can legally claim interest on delayed payments. Courts and Labour Tribunals often award interest ranging from 6% to 12% per annum on the outstanding amount if the delay is proven to be unjustified and malicious on the part of the employer."
  },
  {
    question: "What if the company has closed down or is in liquidation?",
    answer: "If a company is in liquidation, employees are considered preferential creditors. You must file your claim with the Official Liquidator or the Resolution Professional appointed by the NCLT. While the process is longer, your labor dues have priority over many other types of debts."
  },
  {
    question: "Does sending a legal notice affect my future employment?",
    answer: "Sending a legal notice to recover your hard earned money is your legal right and does not typically affect future employment. Most modern companies respect employees who stand up for their rights. It is a professional way to resolve a dispute compared to informal arguments or social media venting."
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
      "name": "Unpaid F&F Legal Notice",
      "item": "https://www.amalegalsolutions.com/not-being-paid-fnf-want-to-send-legal-notice"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Your Unpaid F&F Settlement: A Comprehensive Legal Guide for Employees in India",
  "description": "Facing delays in your Full and Final settlement? Learn how to legally recover unpaid salary, leave encashment, and gratuity from your employer with expert legal advice.",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
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
  "datePublished": "2024-02-10",
  "dateModified": "2024-02-10"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question, // Replaced em-dashes if any (none here)
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
  "name": "F&F Settlement Legal Recovery Services",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert legal assistance for recovering unpaid Full and Final settlement dues in India.",
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
        "name": "Aniket Deshmukh"
      },
      "reviewBody": "My previous employer was holding 3 months of salary. AMA Legal Solutions sent a strong legal notice and I got my full payment within 15 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sanjana Rao"
      },
      "reviewBody": "Highly professional lawyers. They helped me with my gratuity and leave encashment which the company refused to pay initially."
    }
  ]
};

export const metadata = {
  title: "Unpaid F&F Settlement Legal Notice India | Recover Your Salary",
  description: "Not getting paid your F&F settlement? Send a strong legal notice to your employer for unpaid salary, gratuity, and leave encashment. Legal advice by AMA Legal Solutions.",
  keywords: [
    "legal notice for unpaid F&F settlement",
    "recover unpaid salary India",
    "delayed F&F settlement laws",
    "employment lawyer India",
    "unpaid gratuity legal notice",
    "leave encashment recovery",
    "labour commissioner complaint F&F",
    "full and final settlement rules India"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/not-being-paid-fnf-want-to-send-legal-notice',
  },
};

export default function FnfLegalNoticePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-fnf", title: "Understanding F&F Settlement" },
    { id: "detailed-components", title: "Detailed Dues Breakdown" },
    { id: "governing-laws", title: "Governing Laws in India" },
    { id: "common-reasons", title: "Common Reasons for Delay" },
    { id: "psychological-impact", title: "The Psychological Cost" },
    { id: "initial-steps", title: "Initial Steps to Take" },
    { id: "legal-notice-role", title: "Importance of Legal Notice" },
    { id: "drafting-strategy", title: "Drafting Strategy" },
    { id: "employer-tactics", title: "Employer Tactics" },
    { id: "labour-commissioner", title: "Labour Commissioner" },
    { id: "state-offices", title: "State Labour Offices" },
    { id: "court-proceedings", title: "Court Proceedings" },
    { id: "statutory-dues", title: "Recovering Statutory Dues" },
    { id: "tax-implications", title: "Tax & Financial Impact" },
    { id: "judicial-precedents", title: "Judicial Precedents" },
    { id: "case-studies", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Unpaid F&F Legal Notice", href: "/not-being-paid-fnf-want-to-send-legal-notice" },
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
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight mt-6">
              Recover Your <span className="text-[#D2A02A]">Unpaid F&F Settlement</span> Legal Notice
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Is your former employer delaying or refusing to pay your hard earned salary, gratuity, and leave encashment? Take legal action with AMA Legal Solutions and reclaim what is rightfully yours.
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-base">
                  Send a Legal Notice Now
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all text-base">
                  Free Legal Consultation
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1500px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Column - TOC */}
            <div className="hidden lg:block sticky top-28 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Guide Contents</h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-8 overflow-x-auto">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>
 
              <div className="bg-white p-5 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-16">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                    The Crisis of Unpaid Dues: Why Your F&F Settlement Matters
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                    Resigning from a job is often a moment of transition, typically filled with excitement for new opportunities. However, for thousands of employees in India, this transition is marred by a frustrating and stressful ordeal: the delay or non payment of the Full and Final (F&F) settlement. Whether you worked for a startup, a medium sized enterprise, or a large multinational corporation, the legal obligation of the employer remains the same. Your labor, your time, and your expertise entitle you to every penny agreed upon in your appointment letter. In many cases, the F&F represents months of hard work and years of loyalty, and its withholding is not just a financial loss but a breach of trust.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                    At AMA Legal Solutions, we understand that an unpaid F&F settlement is not just about the money. It impacts your ability to pay EMIs, support your family, and move forward in your career with peace of mind. The constant excuses from HR, the ignored emails, and the "policy" barriers are often just tactics to exhaust you. We are here to change that narrative. With a strong legal backbone and deep expertise in Indian labor law, we assist employees across India in serving effective legal notices that command attention and drive results. We have seen cases where employees are made to wait for over six months for their legitimate dues, often being told that the company's "quarterly cycle" or "audit process" is to blame. Legally, these internal policies cannot override the statutory requirements of the country.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                    Being in a situation where you are <strong>not being paid your F&F and want to send a legal notice</strong> is a position of strength, not weakness. It signifies that you are aware of your rights and are willing to take the necessary steps to enforce them. In the current economic climate, where layoffs and restructuring are common, employers often try to preserve their cash flow at the expense of outgoing employees. High volume hiring often ignores high volume exiting, leading to administrative delays that eventually turn into malicious withholding of funds. This withholding is often masked as "clearance pending" or "asset non-return," even when the employee has completed all formalities.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                    Furthermore, the impact of denied F&F dues extends beyond the individual. It creates a culture of impunity within organizations where labor laws are viewed as optional. By taking a stand, you are not only recovering your own dues but also setting a precedent for your colleagues. The legal framework in India, though sometimes perceived as slow, is actually very supportive of employees in wage recovery cases. Statutes like the Payment of Wages Act and the Industrial Disputes Act provide specific timelines and penalties for non-payment, which many HR managers are either unaware of or choose to ignore until they receive a formal legal notice on a law firm's letterhead.
                  </p>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    This guide provides an exhaustive look into the legalities of F&F settlements. We will explore the statutory timelines, the components of your dues, and the specific legal remedies available to you. From drafting a legal notice to approaching the Labour Commissioner, we cover everything you need to know to recover your hard earned money legal way. We have expanded this resource to cover industry-specific scenarios, technical calculation formulas, and judicial precedents that can bolster your case if it ever goes to court.
                  </p>
                </section>
 
                {/* What is F&F Settlement */}
                <section id="what-is-fnf" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                    What Exactly is a Full and Final (F&F) Settlement?
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                    The Full and Final settlement is more than just your last month's salary. It is a comprehensive financial reconciliation between an outgoing employee and the organization. It is the final balance sheet of your professional relationship with your employer. Understanding the components is vital because employers often try to hide or miscalculate specific dues to reduce their liability. It is a process that encompasses all earnings and deductions that have accrued since the last payroll cycle up until the official last working day.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                    Technically, the F&F process begins the moment you submit your resignation. The HR department is supposed to initiate a "No Dues" process across various departments: IT (for assets like laptops and mobile devices), Finance (for pending loans or advances), Administration (for ID cards and access keys), and your specific Business Unit (for handover of current projects). Once all these departments sign off, the Finance team calculates the final payout. However, in reality, this internal "clearance" is often used as a bottleneck to delay legitimate payments. Legally, the employer cannot hold your entire salary hostage if one minor asset is under dispute; they can only deduct the value of that specific asset.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#fdfcf0] p-6 rounded-xl border-l-4 border-[#D2A02A] shadow-sm">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Core Components</h4>
                      <ul className="space-y-3 text-gray-700 text-base">
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2 font-bold">●</span> <strong>Unpaid Salary:</strong> Payments for the last working month or period up to the resignation date.</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2 font-bold">●</span> <strong>Leave Encashment:</strong> Payment for accumulated privilege or earned leaves that were not taken.</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2 font-bold">●</span> <strong>Statutory Gratuity:</strong> Payable if you have completed 5 years of service.</li>
                        <li className="flex items-start"><span className="text-[#D2A02A] mr-2 font-bold">●</span> <strong>Statutory Bonus:</strong> Prorated bonus as per the Payment of Bonus Act, 1965.</li>
                      </ul>
                    </div>
                    <div className="bg-[#f0f9fd] p-6 rounded-xl border-l-4 border-blue-400 shadow-sm">
                      <h4 className="font-bold text-xl text-gray-900 mb-3">Additional Benefits</h4>
                      <ul className="space-y-3 text-gray-700 text-base">
                        <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">●</span> <strong>Pending Reimbursements:</strong> Travel bills, health claims, or business expenses previously approved.</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">●</span> <strong>Notice Pay:</strong> If the employer terminated you without notice or during the notice period.</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">●</span> <strong>LTA & Medical:</strong> Prorated Leave Travel Allowance and Medical Allowance as per contract.</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">●</span> <strong>Variable Pay:</strong> Incentives or commissions earned but not yet disbursed.</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    It is also important to note that the F&F settlement is not just a payout but also includes a "Relieving Letter" and a "Service Certificate." These documents are essential for your next employment. Many predatory employers withhold these documents along with the money to exert maximum pressure. Our legal strategy ensures that the notice demands not just the funds, but also the timely issuance of all career-critical documentation.
                  </p>
                </section>

                <section id="detailed-components" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     Deep Dive: A Detailed Breakdown of Your Dues
                   </h2>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                     To effectively argue your case, you must know exactly what you are owed. Employers often use technical jargon to confuse employees about their entitlements. Let us break down each component in detail. A precise calculation is the foundation of a successful legal notice. If your notice contains a generic demand like "pay all my dues," it is less likely to be taken seriously than a notice that lists specific amounts for each component.
                   </p>
                   <div className="space-y-8">
                     <div className="bg-white border-l-4 border-gray-900 pl-6">
                         <h3 className="text-xl font-bold mb-2">1. Unpaid Salary and Arrears Calculation</h3>
                         <p className="text-base text-gray-600 leading-relaxed mb-3">
                             This includes your basic salary, house rent allowance (HRA), specialized allowances, and any other fixed components of your CTC. It also includes "Arrears", which are payments due from previous months (such as a delayed increment or performance bonus). Ensure that the calculation is based on the number of calendar days you worked in the final month.
                         </p>
                         <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm border">
                            Formula: (Gross Salary / 30 or 31) x Number of days worked in the final month
                         </div>
                     </div>
                     <div className="bg-white border-l-4 border-gray-900 pl-6">
                         <h3 className="text-xl font-bold mb-2">2. Leave Encashment (Statutory Rights)</h3>
                         <p className="text-base text-gray-600 leading-relaxed mb-3">
                             Most companies allow you to accumulate "Privilege Leaves" (PL). Upon leaving, the company must pay you for these leaves. Note that Sick Leaves and Casual Leaves are generally not encashable. Check your company policy for the maximum "cap" on leave accumulation. Even if your contract says leave encashment is "at the discretion of management," major labor laws often override such clauses for earned leaves.
                         </p>
                         <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm border">
                            Formula: (Basic Salary + DA / 30) x Number of EL/PL balance
                         </div>
                     </div>
                     <div className="bg-white border-l-4 border-gray-900 pl-6">
                         <h3 className="text-xl font-bold mb-2">3. Gratuity (The 4 Year 240 Day Rule)</h3>
                         <p className="text-base text-gray-600 leading-relaxed mb-3">
                             The common misconception is that you must complete 5 full years. However, various judicial precedents (like the Madras High Court judgment in M.S. Muralidhara vs. The Management) have held that 4 years and 240 days qualify you for gratuity. This is a significant amount that many HR departments omit from the F&F sheet.
                         </p>
                         <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm border">
                            Formula: (Last Drawn Salary [Basic + DA] x 15 / 26) x Years of Service
                         </div>
                     </div>
                     <div className="bg-white border-l-4 border-gray-900 pl-6">
                         <h3 className="text-xl font-bold mb-2">4. Technical Math: Notice Period Payability</h3>
                         <p className="text-base text-gray-600 leading-relaxed">
                            If you were terminated with immediate effect or "on the spot," the employer must pay you for the notice period duration mentioned in your contract. Conversely, if you resign and are asked to leave immediately by the manager, you are still entitled to notice pay. They cannot force you to leave today and not pay for the notice period you were willing to serve.
                         </p>
                     </div>
                   </div>
                 </section>
 
                 <section id="governing-laws" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     The Legal Shield: Major Labor Laws Protecting Your Dues
                   </h2>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                     India has a robust framework of labor laws designed to prevent the exploitation of employees. When an employer delays your F&F, they are likely in violation of one or more of these statutes. Knowing the specific sections allows you to quote them in your legal notice, which immediately alerts the company's legal team that they are dealing with a well informed individual who cannot be easily intimidated.
                   </p>
                   <div className="space-y-6">
                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                         <h3 className="text-lg font-bold text-gray-900 mb-2 underline decoration-[#D2A02A]">1. Payment of Wages Act, 1936</h3>
                         <p className="text-base text-gray-700 leading-relaxed mb-2">
                             This is the most critical act. Section 5 mandates that for any person whose employment is terminated, the wages earned by him shall be paid before the expiry of the second working day from termination. Any delay beyond this is a statutory violation. Furthermore, Section 15 provides for the appointment of an "Authority" to hear claims arising out of deductions or delay.
                         </p>
                         <p className="text-sm text-gray-500 italic">Applicability: Applies to employees earning up to INR 24,000 per month (regularly revised by Govt).</p>
                     </div>
                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                         <h3 className="text-lg font-bold text-gray-900 mb-2 underline decoration-[#D2A02A]">2. Industrial Disputes Act, 1947</h3>
                         <p className="text-base text-gray-700 leading-relaxed mb-2">
                             If you qualify as a "workman" (which includes most tech, sales, and operations roles that don't have major hiring/firing powers), you have access to Section 33C(2). This allows an employee to approach the Labour Court for "Computation of Money" due. This process is generally faster than a civil suit and avoids lengthy trials.
                         </p>
                     </div>
                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                         <h3 className="text-lg font-bold text-gray-900 mb-2 underline decoration-[#D2A02A]">3. Payment of Gratuity Act, 1972</h3>
                         <p className="text-base text-gray-700 leading-relaxed mb-2">
                             The Act specifies that the employer shall arrange to pay the amount of gratuity within thirty days from the date it becomes payable. Section 8 allows for recovery of gratuity as "arrears of land revenue" through the Collector. If the delay is significant, the employer is liable to pay simple interest as specified by the Central Government.
                         </p>
                     </div>
                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                         <h3 className="text-lg font-bold text-gray-900 mb-2 underline decoration-[#D2A02A]">4. State Shops and Establishments Acts</h3>
                         <p className="text-base text-gray-700 leading-relaxed">
                             Every state (Delhi, Maharashtra, Karnataka, etc.) has its own specific rules for wage payment timelines. For instance, the Delhi Shops and Establishments Act allows for prosecution and fines against directors if salary is not paid. These acts provide a local "Labour Inspector" path which is often very effective for quick resolution in IT hubs like Bengaluru and Gurgaon.
                         </p>
                     </div>
                   </div>
                 </section>

                <section id="psychological-impact" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-snug">
                    The Psychological and Financial Toll of Delayed F&F
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                    Delayed payments are not just a line item on a spreadsheet; they represent a significant emotional burden. We have consulted thousands of clients who feel "betrayed" by their former employers. After years of loyal service, being treated like a nuisance when asking for your own money is humiliating.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                    The financial impact is equally severe. Many employees rely on their F&F settlement to:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-6 mb-10">
                    <li className="flex items-start text-lg text-gray-700"><span className="text-[#D2A02A] mr-2 font-bold">●</span> Pay EMIs and loan installments</li>
                    <li className="flex items-start text-lg text-gray-700"><span className="text-[#D2A02A] mr-2 font-bold">●</span> Cover daily living expenses and family needs</li>
                    <li className="flex items-start text-lg text-gray-700"><span className="text-[#D2A02A] mr-2 font-bold">●</span> Fund education or medical emergencies</li>
                    <li className="flex items-start text-lg text-gray-700"><span className="text-[#D2A02A] mr-2 font-bold">●</span> Bridge the gap between jobs</li>
                  </ul>
                </section>

                <section id="survival-guide" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     The Survival Guide: Navigating the Financial and Mental Stress
                   </h2>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                     Withholding F&F dues is not just a commercial dispute; it is often a traumatic experience for the employee. Many individuals find their self worth tied to their professional output, and being denied their legitimate earnings can lead to severe anxiety. The feeling of being "ghosted" by a company you served for years is painful. Financially, it disrupts your planning-rent payments, insurance premiums, and SIPs are all dependent on that final paycheck.
                   </p>
                   <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h4 className="font-bold text-lg mb-3">Actionable Financial Strategies:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base">
                        <li><strong>Documentation over Emotion:</strong> Every time you feel the urge to call HR in anger, send a formal email instead. Building a paper trail is your best defense.</li>
                        <li><strong>Notify your Bank:</strong> If you have an education loan or personal loan, keep your bank informed about the delay. Some banks offer temporary moratoriums if you show proof of a pending legal dispute.</li>
                        <li><strong>Avoid Low-Value Settlements:</strong> Companies often offer 50% "immediate settlement" to desperate employees. Do not sign any full-release waivers without consulting a lawyer; you are legally entitled to 100%.</li>
                       </ul>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                      Understanding that the employer's delay is a <strong>tactical choice</strong> rather than an administrative error helps you regain control. They are banking on you giving up. By shifting your mindset from "victim" to "litigant," you empower yourself. Our legal notices are designed to reverse this pressure, making it more expensive (in terms of legal costs and reputation) for the company to keep your money than to pay it back.
                    </p>
                  </section>
 
                  <section id="technical-worksheet" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                      Technical Expansion: Your F&F Calculation Worksheet
                    </h2>
                    <p className="text-base text-gray-600 mb-6 italic">Use this internal benchmarking tool to verify the draft provided by your Finance team.</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-[#1a202c] text-white">
                          <tr>
                            <th className="py-2 px-4 text-left font-bold text-sm">Component</th>
                            <th className="py-2 px-4 text-left font-bold text-sm">Legal Basis</th>
                            <th className="py-2 px-4 text-left font-bold text-sm">Calculation Rule</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="py-3 px-4 text-sm font-bold">Base Salary</td>
                            <td className="py-3 px-4 text-sm">Contractual</td>
                            <td className="py-3 px-4 text-sm">Pro-rata based on calendar days, not 22-day working months.</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-sm font-bold">Gratuity</td>
                            <td className="py-3 px-4 text-sm">Statutory (1972 Act)</td>
                            <td className="py-3 px-4 text-sm">(Basic + DA / 26) x 15 x Completed Years.</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-sm font-bold">TDS Deduction</td>
                            <td className="py-3 px-4 text-sm">Income Tax Act</td>
                            <td className="py-3 px-4 text-sm">Should only be on the taxable component; LTA/Medical should be exempt if bills provided.</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-sm font-bold">Unused EL/PL</td>
                            <td className="py-3 px-4 text-sm">Shops & Est. Act</td>
                            <td className="py-3 px-4 text-sm">Must be paid at full gross/basic rate as per state laws.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                 <section id="industry-specific" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     Industry Scenarios: From IT Hubs to Manufacturing
                   </h2>
                   <div className="grid md:grid-cols-2 gap-4">
                     <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-[#D2A02A] transition-colors">
                       <h3 className="font-bold text-[#D2A02A] mb-1">IT & Tech (SaaS/Service)</h3>
                       <p className="text-sm text-gray-600">Common tactic: Withholding F&F due to "unreturned cloud credentials" or "code quality issues" discovered post-exit. Legally, individual performance is not a valid ground for salary withholding.</p>
                     </div>
                     <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-[#D2A02A] transition-colors">
                       <h3 className="font-bold text-[#D2A02A] mb-1">EdTech & Sales</h3>
                       <p className="text-sm text-gray-600">Common tactic: Clawback of incentives or "training bonds" signed during onboarding. Most high-value bonds are legally unenforceable unless specific training costs are proven by the employer.</p>
                     </div>
                     <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-[#D2A02A] transition-colors">
                       <h3 className="font-bold text-[#D2A02A] mb-1">Manufacturing & MSMEs</h3>
                       <p className="text-sm text-gray-600">Common tactic: Claiming "inventory loss" or "damage to machinery". Labour laws require a formal inquiry and notice before any major deduction for damages can be made from a salary.</p>
                     </div>
                     <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm hover:border-[#D2A02A] transition-colors">
                       <h3 className="font-bold text-[#D2A02A] mb-1">Foreign Entities (WFH)</h3>
                       <p className="text-sm text-gray-600">Challenge: Employer has no physical office in India. Strategy: Serving notice to the Indian subsidiary or the registered agent under the Companies Act, or pursuing the local directors.</p>
                     </div>
                   </div>
                 </section>

                 <section id="initial-steps" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     The Pre-Notice Checklist: Gathering Your Ammunition
                   </h2>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                     Before we fire the legal warning shot, we must ensure your magazine is full. Information is currency in the legal world. If we can present a bulletproof data set to the employer's HR, they are more likely to cave in before the matter reaches a courtroom. Often, when HR sees that you have copies of every approval and email, they realize that "forgetting" or "misinterpreting" facts will not work.
                   </p>
                   <div className="bg-[#1a202c] text-white p-6 rounded-xl shadow-lg mb-6">
                     <h4 className="font-bold text-lg text-[#D2A02A] mb-4">The Document Checklist:</h4>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-90">
                       <li className="flex items-center"><span className="w-2 h-2 bg-[#D2A02A] rounded-full mr-3"></span> Appointment Letter & Annexures</li>
                       <li className="flex items-center"><span className="w-2 h-2 bg-[#D2A02A] rounded-full mr-3"></span> Resignation Acceptance Email</li>
                       <li className="flex items-center"><span className="w-2 h-2 bg-[#D2A02A] rounded-full mr-3"></span> Last 6 Months Pay Slips</li>
                       <li className="flex items-center"><span className="w-2 h-2 bg-[#D2A02A] rounded-full mr-3"></span> Performance Rating/Appraisal Emails</li>
                       <li className="flex items-center"><span className="w-2 h-2 bg-[#D2A02A] rounded-full mr-3"></span> "No Dues" Clearance Certificate</li>
                       <li className="flex items-center"><span className="w-2 h-2 bg-[#D2A02A] rounded-full mr-3"></span> Proof of Asset Return (Courier Slips)</li>
                     </ul>
                   </div>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                      A common mistake employees make is losing access to their company laptop or email <strong>before</strong> taking screenshots of their PL balance or incentive approvals. If you haven't left yet, start backing up these personal records today. If you have already left and find yourself locked out, do not worry-we can demand these records under the discovery process.
                   </p>
                </section>

                 <section id="common-reasons" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     Common Excuses Employers Use (And Why They Are Illegal)
                   </h2>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                     HR departments are often trained to provide standard "delaying" responses to buy the company more time. It is vital to recognize these excuses for what they are: stalling tactics that have no standing in an Indian court of law. Let us debunk the most common ones.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6">
                     <div className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                       <span className="text-3xl">🚫</span>
                       <div>
                         <h4 className="font-bold text-gray-900 mb-1">"The audit/quarterly cycle is on"</h4>
                         <p className="text-sm text-gray-600">Statutory timelines (like the 2-day rule in Payment of Wages Act) do not pause for internal audits. A legal deadline overrides an administrative cycle.</p>
                       </div>
                     </div>
                     <div className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                       <span className="text-3xl">🚫</span>
                       <div>
                         <h4 className="font-bold text-gray-900 mb-1">"Client hasn't cleared our invoice"</h4>
                         <p className="text-sm text-gray-600">The employer-employee relationship is independent of the client-employer relationship. Wage payment is not conditional on client collections.</p>
                       </div>
                     </div>
                     <div className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                       <span className="text-3xl">🚫</span>
                       <div>
                         <h4 className="font-bold text-gray-900 mb-1">"Performance was unsatisfactory"</h4>
                         <p className="text-sm text-gray-600">Salary is payment for work already performed. If you were allowed to work, you must be paid. Performance issues can be grounds for termination, but not for withholding wages for hours worked.</p>
                       </div>
                     </div>
                     <div className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                       <span className="text-3xl">🚫</span>
                       <div>
                         <h4 className="font-bold text-gray-900 mb-1">"Manager hasn't approved the clearance"</h4>
                         <p className="text-sm text-gray-600">The company as a whole is responsible for the payment. A single manager's delay is an internal failure, not a legal defense.</p>
                       </div>
                     </div>
                   </div>
                 </section>

                 <section id="legal-notice-role" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     The Strategic Power of a Professional Legal Notice
                   </h2>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                     Why does a lawyer's letter work when ten emails from you didn't? The answer lies in the shifting of risk. For an HR manager, your emails are just "noise" that can be ignored or delegated. However, a legal notice signed by an advocate is a formal document that must be recorded in the company's litigation register. It signals to the board of directors and the legal department that a potential lawsuit is imminent, which represents a financial and reputational risk.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                     <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                       <h4 className="font-bold text-gray-900 mb-2 text-lg">Formal Demand</h4>
                       <p className="text-sm text-gray-600">It fixes a timeline (usually 7-15 days) within which the employer must respond or face legal consequences. This makes the delay "liquidated" and ready for litigation.</p>
                     </div>
                     <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                       <h4 className="font-bold text-gray-900 mb-2 text-lg">Director Liability</h4>
                       <p className="text-sm text-gray-600">Our notices often name directors personally, making them aware of the legal risks their HR team is creating under the Companies Act and Payment of Wages Act.</p>
                     </div>
                     <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                       <h4 className="font-bold text-gray-900 mb-2 text-lg">Interest Accrual</h4>
                       <p className="text-sm text-gray-600">It establishes the date from which you can legally demand interest (12-18% p.a.) on the delayed amount, turning their delay into a growing liability.</p>
                     </div>
                   </div>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700">
                     Moreover, a legal notice is your primary piece of evidence in any future court case. It demonstrates to the judge that you approached the court only after exhausted all other remedies. In most cases, the company's legal team will advise the HR to settle immediately because the cost of defending a wage claim is often five times higher than the claim itself.
                   </p>
                 </section>

                 <section id="drafting-strategy" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     Drafting Strategy: What Makes a Legal Notice Effective?
                   </h2>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                     A legal notice should not be a "complaint." It should be a "declaration of facts and law." At AMA Legal Solutions, we use a specific strategy to ensure the notice is taken seriously. We focus on the "Shadow of the Law"-demonstrating to the employer that we know exactly which sections they are violating.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6 mb-8">
                     <div className="bg-gray-50 p-6 rounded-2xl">
                         <h4 className="text-lg font-bold mb-3">Precision in Narrative</h4>
                         <p className="text-sm text-gray-600">We list every date: Joining date, Resignation date, Last working day, and Date of each reminder email. This leaves no room for the employer to claim "confusion."</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-2xl">
                         <h4 className="text-lg font-bold mb-3">The Statutory Hammer</h4>
                         <p className="text-sm text-gray-600">We don't just ask for money. We cite Section 5 of the Payment of Wages Act, Section 4 of the Gratuity Act, and Section 406 IPC (Criminal Breach of Trust).</p>
                     </div>
                   </div>
                 </section>

                 <section id="employer-tactics" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     Employer Tactics: Recognizing "Bad Faith" Withholding
                   </h2>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                     Some employers act in bad faith. They use intimidation or technicalities to scare employees into giving up their claims. Recognising these tactics is the first step to defeating them.
                   </p>
                   <div className="space-y-4 mb-8">
                     <div className="bg-white border border-gray-100 p-5 rounded-xl flex items-start gap-4 shadow-sm">
                        <span className="text-red-500 font-bold text-xl">!</span>
                        <div>
                          <h4 className="font-bold text-gray-900">The "Poor Performance" Defense</h4>
                          <p className="text-sm text-gray-600 italic">The claim: "We lost a client because of you, so we are withholding your salary." The law: Salary is for time worked. Performance losses must be proven in a separate civil suit; they cannot be adjusted against wages.</p>
                        </div>
                     </div>
                     <div className="bg-white border border-gray-100 p-5 rounded-xl flex items-start gap-4 shadow-sm">
                        <span className="text-red-500 font-bold text-xl">!</span>
                        <div>
                          <h4 className="font-bold text-gray-900">The "Bond" Intimidation</h4>
                          <p className="text-sm text-gray-600 italic">The claim: "You signed a 2-year bond, so you owe us 5 lakhs." The law: Restricted or unreasonable bonds are often unenforceable. Employers must prove actual training costs, not just a penalty amount.</p>
                        </div>
                     </div>
                   </div>
                 </section>

                 <section id="labour-commissioner" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-snug">
                     Complaining to the Labour Commissioner: The Conciliation Path
                   </h2>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                     If the legal notice doesn't produce an immediate result, the next most effective step is filing a complaint with the Office of the Labour Commissioner. This is a government body tasked with ensuring the welfare of workers and the enforcement of labor laws. This path is often preferred because it is free of cost for the employee and involves government-mandated "Conciliation" meetings where the employer <strong>must</strong> attend by law.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                  </p>
                </section>

                <section id="case-studies" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-10 leading-snug">
                    AMA Success Stories: How We Helped Employees
                  </h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-[#fff9e6] p-10 rounded-3xl border border-yellow-100 relative shadow-sm">
                        <div className="text-4xl mb-6">💼</div>
                        <p className="text-xl text-gray-800 italic mb-8">
                            "I worked for a mid sized software firm in Noida for 4 years. They refused to pay 2 months of salary and leave encashment, citing market loss. AMA Legal Solutions sent a notice to the Managing Director. Within 10 days, my full dues were credited."
                        </p>
                        <p className="font-extrabold text-[#D2A02A] text-lg uppercase tracking-wider">Arun K., Software Architect</p>
                    </div>
                    <div className="bg-[#f0f9fd] p-10 rounded-3xl border border-blue-100 relative shadow-sm">
                        <div className="text-4xl mb-6">👩‍💼</div>
                        <p className="text-xl text-gray-800 italic mb-8">
                            "My former company wouldn't release my gratuity even after 6 years of service. The lawyers at AMA took up my case and represented me before the Controlling Authority. I received my gratuity with 9 percent interest."
                        </p>
                        <p className="font-extrabold text-blue-600 text-lg uppercase tracking-wider">Meghna S., HR Manager</p>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-10 md:mb-16 leading-tight border-b-4 border-[#D2A02A] pb-4 inline-block">
                    Frequently Asked Questions (FAQs)
                  </h2>
                  <div className="space-y-10 md:space-y-14">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group border-b border-gray-100 pb-10 last:border-0 transition-all hover:pl-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-start leading-snug">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 md:mr-6 text-sm md:text-lg">Q</span>
                          {faq.question}
                        </h3>
                        <div className="flex items-start">
                           <span className="bg-gray-100 text-gray-500 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 md:mr-6 text-sm md:text-lg">A</span>
                           <p className="text-lg md:text-xl text-gray-600 leading-relaxed pt-1">
                            {faq.answer}
                           </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Container at the bottom of content */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#D2A02A]"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-5xl font-extrabold mb-6 md:mb-10 leading-tight">Enough With The Excuses. <br/> Get Your Money Back.</h2>
                        <p className="text-lg md:text-2xl opacity-90 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed">
                            Stop chasing HR. Let our professional legal team handle the pressure and recover your unpaid F&F settlement dues.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-xl text-xl">
                                    Start Legal Recovery
                                </button>
                            </Link>
                            <a href="tel:+918700343611" className="w-full sm:w-auto">
                                <button className="w-full bg-white text-gray-900 border-2 border-white hover:bg-gray-100 font-bold py-5 px-14 rounded-full transition-all text-xl shadow-lg">
                                    Talk to a Lawyer
                                </button>
                            </a>
                        </div>
                    </div>
                </section>

              </div>
            </div>

            {/* Right Column - Sidebars */}
            <div className="hidden lg:block space-y-10 sticky top-28">
                {/* CTA Card */}
                <div className="bg-[#1a202c] text-white p-8 rounded-3xl shadow-xl border-t-4 border-[#D2A02A]">
                    <h3 className="text-2xl font-extrabold mb-6 leading-tight">Delayed F&F? <br/> Don't Wait.</h3>
                    <p className="text-gray-400 mb-8 text-lg border-b border-gray-700 pb-6">
                        Organizations take advantage of silence. Speak up with a legal notice and recover your salary within days.
                    </p>
                    <div className="space-y-4">
                        <a 
                            href="tel:+918700343611" 
                            className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-colors text-lg shadow-lg"
                        >
                            Call +91-8700343611
                        </a>
                        <Link 
                            href="/contact" 
                            className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-4 rounded-xl font-bold hover:bg-[#D2A02A] hover:text-white transition-colors text-lg"
                        >
                            Request Free Advice
                        </Link>
                    </div>
                </div>

                {/* Related Pages Card */}
                <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-6 border-b pb-3">Related Services</h3>
                    <ul className="space-y-5">
                        <li>
                            <Link href="/send-legal-notice" className="text-gray-600 hover:text-[#D2A02A] flex items-center text-lg font-medium transition-colors">
                                <span className="mr-3 bg-gray-50 w-8 h-8 rounded-lg flex items-center justify-center text-[#D2A02A]">›</span> Send Legal Notice
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center text-lg font-medium transition-colors">
                                <span className="mr-3 bg-gray-50 w-8 h-8 rounded-lg flex items-center justify-center text-[#D2A02A]">›</span> Civil Litigation
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center text-lg font-medium transition-colors">
                                <span className="mr-3 bg-gray-50 w-8 h-8 rounded-lg flex items-center justify-center text-[#D2A02A]">›</span> Employment Law
                            </Link>
                        </li>
                        <li>
                            <Link href="/legal-services-near-me" className="text-gray-600 hover:text-[#D2A02A] flex items-center text-lg font-medium transition-colors">
                                <span className="mr-3 bg-gray-50 w-8 h-8 rounded-lg flex items-center justify-center text-[#D2A02A]">›</span> Lawyer Near Me
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-10 pt-8 border-t border-gray-50">
                        <p className="text-sm font-extrabold mb-4 text-[#D2A02A] uppercase tracking-widest">Mobile App</p>
                        <div className="flex flex-col gap-4">
                            <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                                <Image src="/newAssets/appstore.svg" alt="Google Play" width={150} height={42} className="w-full opacity-90 hover:opacity-100" />
                            </Link>
                            <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                                <Image src="/newAssets/playstore.svg" alt="App Store" width={150} height={42} className="w-full opacity-90 hover:opacity-100" />
                            </Link>
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

import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaEyeSlash, FaUserTie, FaUserEdit, FaSearchPlus, FaFileAlt } from "react-icons/fa";

export const metadata = {
  title: "Notice to Employee for Misconduct: Legal Procedure & Format",
  description:
    "Need to take disciplinary action? Learn the legal process for issuing a misconduct notice to an employee in India. Ensure compliance with labor laws and standing orders.",
  keywords: "notice to employee for misconduct india, show cause notice for misconduct format, disciplinary action against employee legal procedure, misconduct termination laws india, employee misconduct types and penalties",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "defining-misconduct", title: "What Constitutes Misconduct?" },
  { id: "legal-framework", title: "The Indian Legal Framework" },
  { id: "disciplinary-procedure", title: "Step-by-Step Procedure" },
  { id: "show-cause-notice", title: "The Show Cause Notice" },
  { id: "domestic-enquiry", title: "The Domestic Enquiry Process" },
  { id: "natural-justice", title: "Principles of Natural Justice" },
  { id: "types-misconduct", title: "Major vs. Minor Misconduct" },
  { id: "penalties", title: "Proportionate Penalties" },
  { id: "standing-orders", title: "Industrial Standing Orders" },
  { id: "avoiding-litigation", title: "Avoiding Wrongful Termination" },
  { id: "documentation", title: "The Importance of Evidence" },
  { id: "ama-helps", title: "How AMA Supports Employers" },
  { id: "success-stories", title: "Case Study Insights" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Notice for Absenteeism & Negligence", href: "/notice-to-employee-for-absenteeism-negligence" },
  { title: "Notice for Breach of Contract", href: "/notice-to-employee-for-breach-of-employment-contract" },
  { title: "Recovery of Company Assets", href: "/notice-for-recovery-of-company-assets-from-employee" },
  { title: "Employer Notice for Harassment", href: "/notice-to-employer-for-workplace-harassment" },
  { title: "Unpaid Salary Recovery", href: "/notice-to-employer-for-non-payment-of-salary-or-benefits" },
];

export default function EmployeeMisconductGuide() {
  const breadcrumbItems = [
    { label: "Employer Compliance", href: "/services/employer-compliance" },
    { label: "Employee Misconduct Notice", href: "/notice-to-employee-for-misconduct" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Issuing a Legal Notice to Employee for Misconduct: The Complete Employer Guide",
    "description": "Comprehensive guide for employers in India on how to legally handle employee misconduct, from show cause notices to domestic enquiries.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-28",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/notice-to-employee-for-misconduct" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Show Cause Notice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Show Cause Notice is a formal document issued by an employer asking an employee to explain why disciplinary action should not be taken against them for a specific instance of misconduct."
        }
      },
      {
        "@type": "Question",
        "name": "Can I terminate an employee immediately for misconduct?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Immediate termination without a notice or enquiry is risky and often illegal in India. Except in cases of extreme, proven misconduct (like theft or violence), a proper disciplinary procedure must be followed to avoid 'wrongful termination' claims."
        }
      },
      {
        "@type": "Question",
        "name": "What is 'Natural Justice' in employment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Natural Justice ensures fairness. It requires that the employee is given a copy of the allegations, a chance to represent their side, and that the person deciding the penalty is unbiased."
        }
      },
      {
        "@type": "Question",
        "name": "How many days should I give for a response?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, an employer should provide 48 hours to 7 days for an employee to respond to a show cause notice, depending on the complexity of the allegations."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Domestic Enquiry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Domestic Enquiry is an internal trial-like process where evidence is presented, witnesses are cross-examined, and an Enquiry Officer determines if the employee is guilty of the misconduct."
        }
      },
      {
        "@type": "Question",
        "name": "Can an employee bring a lawyer to the enquiry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unless the company policy or standing orders allow it, employees generally do not have a right to be represented by a lawyer in a domestic enquiry, though they can often bring a co-worker for support."
        }
      },
      {
        "@type": "Question",
        "name": "What qualifies as 'Major Misconduct'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Major misconduct includes theft, fraud, physical violence, gross insubordination, prolonged unauthorized absence, and breach of confidentiality."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to pay salary during suspension?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If an employee is suspended pending an enquiry, the employer must usually pay a 'subsistence allowance' as per the company policy or the Standing Orders Act."
        }
      },
      {
        "@type": "Question",
        "name": "Is verbal abuse by an employee misconduct?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, using abusive language against supervisors or colleagues is considered misconduct and can justify disciplinary action."
        }
      },
      {
        "@type": "Question",
        "name": "What if the employee refuses to receive the notice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The notice should be sent via registered post to their last known address. If it returns undelivered, it is legally deemed as served. You can also paste it at their residence or publish it in a local newspaper if necessary."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Employer Compliance", "item": "https://www.amalegalsolutions.com/services/employer-compliance" },
      { "@type": "ListItem", "position": 3, "name": "Employee Misconduct Notice", "item": "https://www.amalegalsolutions.com/notice-to-employee-for-misconduct" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Corporate Disciplinary Legal Support",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1540" }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#30261C]">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Handling Employee <span className="text-[#D29E0D]">Misconduct Legally</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Disciplinary action is a sensitive process. One wrong step can lead to expensive labor court litigation. Learn how to issue misconduct notices that protect your organization and uphold the law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Secure Your Business
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Corporate Helpline
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Main Layout */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - TOC */}
        <aside className="lg:w-[20%] hidden lg:block">
          <div className="sticky top-32">
            <h4 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-2">Guide Contents</h4>
            <TableOfContents sections={sections} orientation="vertical" />
          </div>
        </aside>

        {/* Middle Column - Content */}
        <main className="lg:w-[55%]">
          <article className="prose prose-lg max-w-none text-[#30261C]/90 leading-relaxed">
            
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Delicate Balance of Discipline</h2>
              <p>
                Managing a workforce is one of the most complex challenges for any business owner or HR professional in India. While the goal is always to foster a productive and positive environment, there inevitably come times when an employee's behavior falls below the expected standards of conduct. Whether it is a case of blatant insubordination, theft, or chronic negligence, handling misconduct is a task that requires both firmness and absolute legal precision.
              </p>
              <p>
                In the Indian legal landscape, the balance of power in employment is often viewed through the lens of labor protection. Courts and tribunals are historically inclined to protect the "weaker party," which is almost always the employee. This means that even if an employee is clearly guilty of misconduct, an employer can still lose a case in court if the process followed to discipline or terminate that employee was technically flawed.
              </p>
              <p>
                The term "wrongful termination" is a nightmare for organizations. It leads to years of litigation, back-pay orders, and significant damage to the company's reputation. The key to avoiding these pitfalls lies in understanding the formal disciplinary procedure mandated by Indian law. It starts with the issuance of a legally sound notice to the employee for misconduct.
              </p>
              <p>
                At AMA Legal Solutions, we specialize in corporate compliance and labor relations. We have helped organizations across India navigate the murky waters of disciplinary action, ensuring that their rights as employers are protected while strictly adhering to the principles of natural justice. This guide will walk you through everything you need to know about legally managing employee misconduct.
              </p>
            </section>

            <section id="defining-misconduct" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">What Constitutes Misconduct?</h2>
              <p>
                Misconduct is not a single act but a category of behaviors that breach the fundamental trust and terms of the employment contract. While every company has its own code of conduct, the law generally recognizes certain standard acts as misconduct.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 mb-8">
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <FaExclamationTriangle /> Common Categories of Misconduct:
                </h4>
                <ul className="space-y-4 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Insubordination:</strong> Disobedience of lawful and reasonable orders from a superior.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Dishonesty:</strong> Theft, fraud, or misappropriation of company funds or property.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Negligence:</strong> Habitual neglect of work or gross negligence causing damage to company assets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Behavioral Issues:</strong> Physical violence, verbal abuse, or harassment within the workplace.</span>
                  </li>
                </ul>
              </div>
              <p>
                It is vital that these behaviors are clearly defined in your company's HR policy or the appointment letter. Without a written policy, it becomes much harder to prove that the employee was aware that their actions were prohibited. The Industrial Employment (Standing Orders) Act provides a very detailed list of what qualifies as misconduct for industrial establishments, and these are often used as a benchmark for private firms as well.
              </p>
            </section>

            <section id="legal-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Indian Legal Framework: A Pro-Employee Stance</h2>
              <p>
                Disciplinary action in India is governed by a patchwork of laws. For factories and industrial units, the <strong>Industrial Employment (Standing Orders) Act, 1946</strong> is the primary legislation. For office-based businesses, the state-specific <strong>Shops and Establishments Acts</strong> apply.
              </p>
              <p>
                However, beyond these statutes lies the "Principle of Natural Justice." This is a constitutional concept that the Indian judiciary has strictly applied to employment law. It states that no person shall be condemned unheard. This means that even if you catch an employee stealing on camera, you cannot fire them on the spot. You must still issue a notice, hear their explanation, and follow the formal inquiry process.
              </p>
              <p>
                The <strong>Industrial Disputes Act, 1947</strong> also plays a role, especially if the employee is classified as a "workman." Under this act, termination for misconduct is considered "retrenchment" unless the misconduct is proven through a domestic enquiry. Failure to prove misconduct can lead to the court ordering reinstatement of the employee with full back-wages.
              </p>
            </section>

            <section id="disciplinary-procedure" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Step-by-Step Procedure for Disciplinary Action</h2>
              <p>
                To ensure your disciplinary action is legally airtight, you must follow a chronological sequence of events. Skipping a step, even for the sake of speed, can invalidate the entire process.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-6 flex items-center gap-2">
                  <FaCheckCircle /> The 6-Step Disciplinary Protocol:
                </h4>
                <ul className="space-y-6">
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Step 1: Preliminary Investigation</h5>
                    <p className="text-sm">Gather initial evidence, witness statements, and documentation to ensure there is a prima facie case against the employee.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Step 2: Issuance of Show Cause Notice</h5>
                    <p className="text-sm">Formally charge the employee with the misconduct and ask them to explain their behavior within a set timeframe.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Step 3: Consideration of the Reply</h5>
                    <p className="text-sm">Review the employee's explanation. If it is satisfactory, the matter ends. If not, proceed to a formal enquiry.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Step 4: Domestic Enquiry</h5>
                    <p className="text-sm">Appoint an Enquiry Officer to conduct a formal internal trial where evidence is presented and witnesses are heard.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Step 5: Enquiry Report & Findings</h5>
                    <p className="text-sm">The Enquiry Officer submits a report determining whether the charges are proven or not.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Step 6: Final Order & Punishment</h5>
                    <p className="text-sm">The management reviews the report and issues a final order imposing a proportionate penalty.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="show-cause-notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Show Cause Notice: The Foundation of the Case</h2>
              <p>
                The Show Cause Notice is the most critical document in the entire process. It is the formal "charge sheet." If the notice is vague or lacks specific details, any subsequent enquiry can be thrown out by a court for being "violative of natural justice."
              </p>
              <p>
                A well-drafted show cause notice must contain the specific date and time of the alleged misconduct. It should quote the exact clause of the employment contract or the standing orders that have been violated. Most importantly, it must clearly state: "You are hereby required to show cause why disciplinary action should not be taken against you."
              </p>
              <p>
                Vague statements like "your behavior was unprofessional" are not enough. You must state, for example, "On 15th April 2026, at 3:00 PM, you used abusive language against your supervisor Mr. Sharma in the presence of other staff members, which is a violation of Clause 12 of your appointment letter."
              </p>
            </section>

            <section id="domestic-enquiry" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Domestic Enquiry Process: An Internal Trial</h2>
              <p>
                The domestic enquiry is where the evidence is tested. The employer acts as the prosecutor, and the Enquiry Officer acts as a neutral judge. It is vital that the Enquiry Officer is not a witness to the misconduct or a direct supervisor of the accused, as this would create a "bias" that courts will not tolerate.
              </p>
              <p>
                During the enquiry, the employer must produce witnesses and documents to prove the charges. The employee has a right to cross-examine these witnesses and produce their own evidence in defense. The proceedings must be recorded in writing and signed by all parties.
              </p>
              <p>
                It is a common mistake for employers to think they can just use a "summary enquiry" without a formal hearing. Unless the employee admits the guilt in writing, a full enquiry is almost always necessary for major misconduct cases that could lead to termination.
              </p>
            </section>

            <section id="natural-justice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Principles of Natural Justice: The Golden Rule</h2>
              <p>
                The courts in India have laid down three fundamental rules of natural justice that every employer must follow:
              </p>
              <ul className="list-disc ml-6 space-y-4 mb-6">
                <li><strong>Nemo Judex in Causa Sua:</strong> No person shall be a judge in their own cause. The person conducting the enquiry must be unbiased and impartial.</li>
                <li><strong>Audi Alteram Partem:</strong> Hear the other side. The employee must be given a fair opportunity to state their case and rebut the evidence against them.</li>
                <li><strong>Reasoned Decisions:</strong> The final order must contain reasons. You cannot just say "you are fired." You must explain why the evidence led to that conclusion.</li>
              </ul>
              <p>
                If a court finds that any of these three rules were violated, they will set aside the termination order, even if the misconduct was true. This is why having a legal expert guide the process is non-negotiable.
              </p>
            </section>

            <section id="types-misconduct" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Major vs. Minor Misconduct</h2>
              <p>
                Not all misconduct is equal. The law requires the punishment to fit the crime. Minor misconduct, like occasional late-coming or minor errors in work, usually justifies warnings or small fines. Major misconduct, which goes to the root of the employment relationship, justifies suspension or dismissal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaExclamationTriangle className="text-yellow-500 text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Minor Misconduct</h4>
                    <p className="text-sm text-gray-600">Late attendance, minor negligence, untidiness, or failure to follow administrative procedures.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaGavel className="text-red-500 text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Major Misconduct</h4>
                    <p className="text-sm text-gray-600">Theft, fraud, physical assault, prolonged absence without leave, or disclosure of trade secrets.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="penalties" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Proportionate Penalties: The Punishment Must Fit</h2>
              <p>
                One of the most common reasons employers lose cases in labor courts is "disproportionate punishment." If you fire an employee with ten years of service for being late for three days, the court will likely view it as excessive and set it aside.
              </p>
              <p>
                The management must consider the employee's past record, the nature of the misconduct, and any "mitigating circumstances" (e.g., family issues or health problems). A graduated scale of punishment-starting with a verbal warning, then a written warning, then a salary cut, and finally termination-is much easier to defend in court than immediate dismissal.
              </p>
            </section>

            <section id="avoiding-litigation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Avoiding Wrongful Termination Claims</h2>
              <p>
                To avoid litigation, an employer must act like a judge. Be objective, be fair, and document everything. Never threaten an employee during an enquiry. Never force an employee to sign a resignation letter, as this is often successfully challenged in court as "forced resignation" or "involuntary termination."
              </p>
              <p>
                If you are unsure about the legality of a termination, it is often better to negotiate a "mutual separation agreement." This involves the employee resigning voluntarily in exchange for a severance package and a neutral reference. This "exit strategy" is often much cheaper and safer than a messy disciplinary battle.
              </p>
            </section>

            <section id="documentation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Importance of Evidence: Building the Paper Trail</h2>
              <p>
                In a labor court, an employer's oral testimony has very little value without documents. You must maintain a "Personal File" for every employee. This file should contain every warning letter, every appreciation note, and every disciplinary record.
              </p>
              <p>
                Digital evidence is also crucial. Emails, Slack messages, and CCTV footage are all admissible evidence in a domestic enquiry, provided they are authenticated. However, be careful with WhatsApp messages; while they are increasingly accepted, they must be supported by a certificate under Section 65B of the Indian Evidence Act if they are to be used in a formal court of law.
              </p>
            </section>

            <section id="ama-helps" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How AMA Legal Solutions Supports Employers</h2>
              <p>
                At AMA Legal Solutions, we act as the legal shield for organizations. We understand that disciplining an employee is an unpleasant but necessary task, and our job is to make it as smooth and risk-free as possible.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 my-8">
                <h4 className="font-bold text-[#30261C] mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-[#D29E0D]" /> Our Employer Support Services:
                </h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Drafting Show Cause Notices:</strong> We draft legally precise notices that leave no room for technical challenges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Conducting Domestic Enquiries:</strong> We provide neutral external Enquiry Officers to ensure the process is unbiased.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>HR Policy Audits:</strong> We review your appointment letters and standing orders to ensure they comply with the latest laws.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Labor Court Defense:</strong> If a case is filed against you, we provide expert representation in labor courts and high courts.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Case Study Insights: Victories in the Workplace</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "We had a senior manager involved in a massive kickback scheme. We were terrified of a defamation suit. AMA guided us through a 3-month enquiry process. The documentation was so perfect that the manager settled and left without a single rupee of severance. Highly recommended for corporate matters."
                  </p>
                  <p className="font-bold text-sm">Director, Tech MNC, Pune</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "A workman was habitually absent. We followed AMA's protocol for warning notices and a domestic enquiry. When he challenged us in the labor court, the judge upheld the termination within two hearings because our paperwork was flawless. They saved us years of litigation."
                  </p>
                  <p className="font-bold text-sm">HR Head, Manufacturing Co., Noida</p>
                </div>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">Can an employee resign during a disciplinary enquiry?</h4>
                  <p>Yes, an employee can resign. However, the management has the right to refuse the resignation and continue the enquiry if the misconduct involves financial loss to the company or criminal acts.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is the employer's decision final?</h4>
                  <p>No. An employee can challenge the management's decision in a labor court or before the industrial tribunal. This is why the internal process must be strong enough to withstand judicial scrutiny.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What is 'Subsistence Allowance'?</h4>
                  <p>It is the partial salary paid to an employee while they are under suspension pending an enquiry. It is usually 50% for the first 90 days and 75% thereafter, as per the Standing Orders Act.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can we use private detectives to prove misconduct?</h4>
                  <p>Yes, you can use evidence gathered by private agencies, but the agents must be willing to testify in the domestic enquiry and be cross-examined by the employee.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Does an FIR count as proof of misconduct?</h4>
                  <p>No. An FIR is just a police report. A criminal court's conviction is strong proof, but for internal disciplinary action, you must still conduct your own independent domestic enquiry.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can an employee refuse to attend an enquiry?</h4>
                  <p>If an employee refuses to attend after proper notice, the Enquiry Officer can proceed 'ex-parte' (in their absence) and give a decision based on the available evidence.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What is 'Habitual Misconduct'?</h4>
                  <p>It is the repetition of minor misconduct despite multiple warnings. Habitual late-coming or habitual negligence can be treated as major misconduct allowing for termination.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can we recover losses from the employee's salary?</h4>
                  <p>Yes, but only if the misconduct is proven and the company's policy specifically allows for the recovery of actual financial losses caused by the employee's negligence or fraud.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">How long does a disciplinary process take?</h4>
                  <p>A well-managed process, from show cause notice to final order, typically takes 45 to 90 days. Rushing it can lead to procedural errors, while delaying it can be seen as harassment.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is an apology letter enough to end the case?</h4>
                  <p>If the misconduct is minor and the employee submits a written apology, the management can choose to close the matter with a formal warning. This 'mercy' often creates a more loyal employee.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Protect Your Organization. Act Legally.</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Don't let a bad employee hire turn into a bad legal battle. Our expert corporate lawyers at AMA Legal Solutions are ready to handle your disciplinary cases with precision and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Schedule a Consultation
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" className="flex items-center gap-2">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">The Ethical Path: Discipline as a Tool for Growth</h2>
            <p>
              While we have focused heavily on the legalities, it is important to remember that disciplinary action should not just be about "punishing." It should be about maintaining the standards and values of the organization. A company that allows misconduct to go unpunished eventually destroys the morale of its best and most honest employees.
            </p>
            <p>
              The goal of a fair disciplinary process is to provide a "corrective" mechanism. In many cases, a formal warning or a minor penalty is enough to bring an employee back on track. By being transparent and fair, you build an organization where employees feel safe and respected, knowing that rules are applied equally to everyone from the top down.
            </p>
            <p>
              Ultimately, a legally sound disciplinary process is the hallmark of a mature and professionally managed organization. It reflects a commitment to the rule of law and the value of human dignity. By following the steps outlined in this guide, you are not just avoiding litigation; you are building a more ethical and sustainable business.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">Conclusion: Knowledge is an Employer's Best Defense</h2>
            <p>
              Dealing with employee misconduct is one of the hardest parts of leadership. It tests your patience, your values, and your legal knowledge. However, by understanding the framework of Indian labor law and the power of a well-drafted notice, you can turn a crisis into a managed process.
            </p>
            <p>
              Remember that you have rights as an employer. You have the right to protect your property, your reputation, and your workplace culture. The law is not just there to protect employees; it is there to ensure that the employment relationship is governed by fairness and accountability.
            </p>
            <p>
              Do not act in haste. Do not let emotions dictate your disciplinary actions. Follow the protocol, document the evidence, and seek professional legal help when needed. With AMA Legal Solutions by your side, you can handle even the most difficult misconduct cases with confidence and peace of mind. Your journey to a disciplined and legally compliant workplace starts with that first, precise legal notice.
            </p>

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Manage Misconduct Today</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers specialize in employer protection and disciplinary law. We help you navigate complex labor issues safely.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Legally Sound Notice Drafting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">External Enquiry Officers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Wrongful Termination Defense</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Get Employer Support
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>Related Resources</h4>
              <div className="space-y-4">
                {relatedPages.map((page, index) => (
                  <Link key={index} href={page.href} className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D29E0D] transition-colors mb-1">{page.title}</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D29E0D]/20 transition-all"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 border border-[#D29E0D]/20 rounded-2xl bg-[#D29E0D]/5 text-center">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Employer Hotline</p>
              <a href="tel:+918700343611" className="text-xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors">
                +91 8700343611
              </a>
              <p className="text-[10px] text-gray-400 mt-2 italic">Corporate Confidentiality Assured</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaEyeSlash, FaUserTie, FaUserClock, FaTrashAlt, FaCalendarTimes } from "react-icons/fa";

export const metadata = {
  title: "Notice to Employee for Absenteeism & Negligence: Legal Protocol",
  description:
    "Struggling with employee absence or negligence? Learn how to issue a formal legal notice for absenteeism and negligence of duty in India. Protect your workplace productivity.",
  keywords: "notice to employee for absenteeism negligence india, legal action for employee absence without leave, show cause notice for negligence of duty format, termination for unauthorized absence india, how to handle negligent employees legally",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "defining-absenteeism", title: "Absenteeism vs. Authorized Leave" },
  { id: "defining-negligence", title: "Defining Negligence of Duty" },
  { id: "impact-business", title: "The Impact on Business" },
  { id: "legal-framework", title: "Indian Labor Law Context" },
  { id: "warning-system", title: "The Three-Warning System" },
  { id: "show-cause-notice", title: "The Show Cause Notice" },
  { id: "abandonment-service", title: "Abandonment of Service" },
  { id: "disciplinary-inquiry", title: "The Disciplinary Inquiry" },
  { id: "proportional-punishment", title: "Proportional Punishment" },
  { id: "mitigating-factors", title: "Mitigating Factors & Defense" },
  { id: "documentation", title: "The Power of Attendance Records" },
  { id: "ama-helps", title: "How AMA Supports Organizations" },
  { id: "success-stories", title: "Resolution Insights" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Notice for Employee Misconduct", href: "/notice-to-employee-for-misconduct" },
  { title: "Notice for Breach of Contract", href: "/notice-to-employee-for-breach-of-employment-contract" },
  { title: "Recovery of Company Assets", href: "/notice-for-recovery-of-company-assets-from-employee" },
  { title: "Employer Notice for Harassment", href: "/notice-to-employer-for-workplace-harassment" },
  { title: "Unpaid Salary Recovery", href: "/notice-to-employer-for-non-payment-of-salary-or-benefits" },
];

export default function AbsenteeismNegligenceGuide() {
  const breadcrumbItems = [
    { label: "Employer Compliance", href: "/services/employer-compliance" },
    { label: "Absenteeism & Negligence Notice", href: "/notice-to-employee-for-absenteeism-negligence" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Issuing a Legal Notice to Employee for Absenteeism and Negligence: The Complete Guide",
    "description": "Comprehensive legal resource for Indian employers on how to handle chronic absenteeism and workplace negligence using formal legal notices and disciplinary action.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-28",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/notice-to-employee-for-absenteeism-negligence" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is 'Unauthorized Absence'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unauthorized absence is when an employee remains away from work without prior permission and without a valid, documented reason (like a medical emergency)."
        }
      },
      {
        "@type": "Question",
        "name": "How many days of absence justify a notice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, continuous absence for more than 3 to 8 days (depending on company policy or standing orders) without communication justifies a formal warning or show cause notice."
        }
      },
      {
        "@type": "Question",
        "name": "Is 'Negligence' grounds for termination?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gross negligence that causes significant financial loss, physical danger, or damage to the company's reputation is a major misconduct that can lead to termination after a proper inquiry."
        }
      },
      {
        "@type": "Question",
        "name": "What is 'Abandonment of Service'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If an employee is absent for a prolonged period (usually 8-10 days) and fails to respond to multiple notices, the employer can legally treat it as 'voluntary abandonment of service.'"
        }
      },
      {
        "@type": "Question",
        "name": "Can I withhold salary for absenteeism?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under the principle of 'No Work, No Pay,' an employer can deduct salary for the days an employee was absent without authorized leave."
        }
      },
      {
        "@type": "Question",
        "name": "Does a medical certificate excuse all absence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A genuine medical certificate justifies absence for health reasons. However, if the certificate is found to be forged or the employee was actually seen working elsewhere, it becomes a case of fraud and misconduct."
        }
      },
      {
        "@type": "Question",
        "name": "What is 'Gross Negligence'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gross negligence is a conscious and voluntary disregard of the need to use reasonable care, which is likely to cause foreseeable grave injury or harm to persons, property, or both."
        }
      },
      {
        "@type": "Question",
        "name": "Should I send the notice via WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While you can send a copy on WhatsApp for speed, the formal legal notice should always be sent via Registered Post with Acknowledgment Due (RPAD) to the employee's last known address to provide solid legal proof."
        }
      },
      {
        "@type": "Question",
        "name": "What if the employee says they were 'stressed'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stress is a health issue. The employee should have applied for medical leave. Being 'stressed' does not give a right to disappear without informing the employer."
        }
      },
      {
        "@type": "Question",
        "name": "Can an employee challenge a negligence termination?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, they can challenge it in a labor court. The employer must be able to prove that the negligence was 'gross' and that a fair inquiry process was followed before termination."
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
      { "@type": "ListItem", "position": 3, "name": "Absenteeism & Negligence Notice", "item": "https://www.amalegalsolutions.com/notice-to-employee-for-absenteeism-negligence" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Workforce Discipline Legal Service",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1620" }
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
              Handling <span className="text-[#D29E0D]">Absenteeism & Negligence</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              A single negligent act can cost your company millions. Chronic absenteeism destroys team morale. Learn the legal protocol for issuing warnings and notices to restore discipline and protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Restore Discipline
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Business Helpline
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
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Productivity Paradox</h2>
              <p>
                In an era of hyper-competition, the most valuable asset any company has is the reliability and competence of its workforce. An organization's success is directly proportional to the "work ethic" of its employees. However, many business owners find themselves facing a frustrating productivity paradox: while they have a talented team on paper, the day-to-day operations are crippled by a handful of employees who are habitually absent or consistently negligent in their duties.
              </p>
              <p>
                Absenteeism and negligence are like a slow-moving poison within a company culture. They don't just result in lost work hours; they place an unfair burden on the employees who *are* working, leading to burnout and a drop in overall morale. If left unaddressed, they send a message to the entire team that the organization does not value discipline or accountability.
              </p>
              <p>
                However, in India, "firing" someone for being absent or negligent is a legal minefield. Labor laws are designed to protect the livelihoods of workers, and courts often view absenteeism through a lens of empathy, assuming there might be underlying personal or health issues. This means that an employer cannot act on impulse. You need a systematic, documented, and legally sound process to handle these issues.
              </p>
              <p>
                At AMA Legal Solutions, we have helped hundreds of organizations restore workplace discipline. We believe that a fair but firm approach, backed by solid legal notices, is the only way to manage chronic absenteeism and negligence without attracting costly labor court litigation. This guide will provide you with the legal roadmap to handle these difficult situations professionally.
              </p>
            </section>

            <section id="defining-absenteeism" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Absenteeism vs. Authorized Leave</h2>
              <p>
                The first step is to clearly distinguish between a person who is "on leave" and a person who is "absent." Authorized leave is a contractual right (Sick Leave, Casual Leave, Earned Leave) that follows a set approval process. Absenteeism is when an employee remains away from work without prior permission or without a valid, documented reason.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 mb-8">
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <FaExclamationTriangle /> Red Flags of Chronic Absenteeism:
                </h4>
                <ul className="space-y-4 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Monday/Friday Pattern:</strong> Consistently being absent on days that extend a weekend.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Post-Payday Absence:</strong> Disappearing for 2-3 days immediately after receiving salary.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Ghosting:</strong> Not answering calls or messages from the office during the period of absence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>False Emergencies:</strong> Repetitive claims of "family emergencies" or "unverified illnesses" without proof.</span>
                  </li>
                </ul>
              </div>
              <p>
                Under the Industrial Employment (Standing Orders) Act and most company policies, "habitual absence without leave" for more than 8 to 10 consecutive days is treated as a major misconduct. However, even if they return on the 9th day, the pattern of unannounced absence itself is a breach of the employment contract.
              </p>
            </section>

            <section id="defining-negligence" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Defining Negligence of Duty</h2>
              <p>
                Negligence is often harder to prove than absenteeism because the employee *is* present, but they are not performing their duties with the required level of care. Legally, negligence is defined as the "failure to exercise that degree of care which a reasonable person would exercise in the same circumstances."
              </p>
              <p>
                In a workplace context, this includes "Habitual Neglect of Work" or "Gross Negligence." Examples include a security guard sleeping on duty, a developer pushing unreviewed code that crashes a live server, or an accountant failing to file GST returns on time despite reminders.
              </p>
              <p>
                It is important to distinguish between "incompetence" (where an employee *cannot* do the work) and "negligence" (where an employee *can* do the work but *chooses* not to do it properly). Negligence is a disciplinary issue; incompetence is a capability issue. This distinction is vital for the type of legal notice you issue.
              </p>
            </section>

            <section id="impact-business" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Impact on Business: The Hidden Costs</h2>
              <p>
                Many employers tolerate absenteeism because they think, "I'm just not paying them for that day, so I'm not losing money." This is a fundamental error. The hidden costs of absenteeism are massive. There is the cost of missed deadlines, the cost of temporary replacement labor, and the "demoralization cost" to the rest of the team.
              </p>
              <p>
                Negligence is even more expensive. A single negligent act by a worker in a factory can lead to a fire or a breakdown that stops production for weeks. In the service sector, a negligent mistake can lead to a client lawsuit or a data breach. These are not just HR issues; they are existential threats to a business. This is why a firm legal stand is not "harsh"—it is "essential."
              </p>
            </section>

            <section id="legal-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Indian Labor Law Context: Protecting the Employer's Right to Work</h2>
              <p>
                While Indian labor law is protective, it also recognizes the "Employer's Right to Manage." The Supreme Court of India has held in several cases that "discipline in industry is the most essential thing for its efficient functioning."
              </p>
              <p>
                If an employee is habitually absent or negligent, the employer has the right to take disciplinary action, including termination, provided they follow the "Due Process of Law." This process is governed by the <strong>Industrial Disputes Act, 1947</strong> and the <strong>Shops and Establishments Acts</strong> of various states. The law requires that the employee must be warned, given a chance to explain, and if the behavior doesn't change, they must be subjected to a formal inquiry.
              </p>
            </section>

            <section id="warning-system" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Three-Warning System: Building the Legal Case</h2>
              <p>
                One of the most effective ways to handle absenteeism and negligence is the "Graduated Warning System." Courts love to see that an employer tried to "counsel" the employee before taking drastic action.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-6 flex items-center gap-2">
                  <FaCheckCircle /> The Disciplinary Ladder:
                </h4>
                <ul className="space-y-6">
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Warning 1: Verbal & Informal</h5>
                    <p className="text-sm">A documented discussion where the issue is highlighted and the employee is asked to improve.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Warning 2: First Written Warning</h5>
                    <p className="text-sm">A formal letter mentioning the previous discussion and warning of "penal consequences" if the behavior repeats.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Warning 3: Final Written Warning</h5>
                    <p className="text-sm">The last chance. This letter explicitly states that the next instance of absence or negligence will lead to a Show Cause Notice and potential termination.</p>
                  </li>
                </ul>
              </div>
              <p>
                If an employee is fired after three documented warnings, their chance of winning a "wrongful termination" case in court drops by ninety percent. The warnings prove that the employer was fair and provided multiple opportunities for correction.
              </p>
            </section>

            <section id="show-cause-notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Show Cause Notice: The Legal "Charge Sheet"</h2>
              <p>
                If the warnings are ignored, the next step is the <strong>Show Cause Notice</strong>. This is a formal legal document. It must list every instance of absence or every negligent act with specific dates and the resulting damage to the company.
              </p>
              <p>
                The notice must ask the employee: "Why should disciplinary action not be taken against you?" It must provide them with a reasonable timeframe (usually 48 hours to 7 days) to submit a written explanation. At AMA Legal Solutions, we specialize in drafting these notices so that they are "procedurally perfect" and cannot be challenged on technical grounds later.
              </p>
            </section>

            <section id="abandonment-service" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Abandonment of Service: The "Silent Resignation"</h2>
              <p>
                A common problem is the employee who simply stops coming to work and stops answering calls. This is legally known as "Abandonment of Service." However, you cannot just delete them from the rolls on the second day.
              </p>
              <p>
                The employer must send at least two notices to the employee's registered address via Registered Post. The first notice should ask them to report to duty immediately. The second notice should state that if they don't report within a specific time, it will be presumed that they have "voluntarily abandoned" their employment. This "paper trail" is essential to ensure they don't reappear six months later claiming they were "illegally terminated."
              </p>
            </section>

            <section id="disciplinary-inquiry" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Disciplinary Inquiry: Upholding Natural Justice</h2>
              <p>
                For major negligence cases, a <strong>Domestic Inquiry</strong> is mandatory. This is an internal trial where the management proves the charges through evidence (attendance logs, project reports, witness statements). The employee has a right to defend themselves.
              </p>
              <p>
                The inquiry must be conducted by an "unbiased" officer—ideally someone who was not involved in the original incident. The goal is to ensure that the "Principle of Natural Justice" is followed: the employee must be heard, and the decision must be based on evidence, not bias.
              </p>
            </section>

            <section id="proportional-punishment" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Proportional Punishment: The Punishment Must Fit</h2>
              <p>
                The law requires that the punishment must be "proportionate" to the misconduct. You cannot fire a long-term employee for being absent for two days after a five-year clean record. This would be seen as "arbitrary."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaCalendarTimes className="text-yellow-500 text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Minor Penalties</h4>
                    <p className="text-sm text-gray-600">Censure (formal reprimand), withholding of increments for a year, or a fine (within legal limits).</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaGavel className="text-red-500 text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Major Penalties</h4>
                    <p className="text-sm text-gray-600">Demotion to a lower grade, compulsory retirement, or dismissal from service (termination).</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="mitigating-factors" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Mitigating Factors & Defense</h2>
              <p>
                A fair employer always considers the "Why." Was the absence due to a genuine medical emergency? Was the negligence due to a lack of training or a broken tool? If the employee has a genuine reason, it is often better to provide support rather than punishment. This builds loyalty.
              </p>
              <p>
                However, if the "excuses" are repetitive and unverified, they are no longer mitigating factors; they are signs of a bad work ethic. The law does not require an employer to be a "charity." If an employee is consistently failing to fulfill their side of the contract, the organization has every right to protect its interests.
              </p>
            </section>

            <section id="documentation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Power of Attendance Records: Your Best Evidence</h2>
              <p>
                In an absenteeism case, the "Biometric Attendance Log" is your most powerful weapon. It is objective, digital, and hard to dispute. Always ensure that your attendance system is properly maintained and that every "unrecorded day" is followed up with an automated or manual query to the employee.
              </p>
              <p>
                For negligence, the evidence is in the "Work Product." Keep a record of the faulty work, the emails where the employee was reminded of the task, and any "Incident Reports" filed at the time of the negligence. This "paper trail" is what wins cases in labor court.
              </p>
            </section>

            <section id="ama-helps" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How AMA Legal Solutions Supports Organizations</h2>
              <p>
                At AMA Legal Solutions, we act as the "External Disciplinary Department" for businesses. We understand that HR teams are often too busy or too close to the employees to handle these cases with the required legal objectivity.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 my-8">
                <h4 className="font-bold text-[#30261C] mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-[#D29E0D]" /> Our Employer Support Services:
                </h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Drafting Perfect Notices:</strong> We draft warning letters and show cause notices that are court-ready.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Managing Abandonment Cases:</strong> We handle the entire notice process for "absconding" employees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Conducting Domestic Inquiries:</strong> We provide expert, neutral inquiry officers to conduct internal hearings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Labor Law Strategy:</strong> We help you design a disciplinary policy that is fully compliant with Indian labor laws.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Resolution Insights: Success Stories in Discipline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "We had a workman who was absent for 15 days every month. He claimed 'political work.' AMA helped us follow the abandonment notice protocol. He tried to sue us for 'illegal lock-out,' but the court dismissed his case within months because of our perfect documentation. They are true labor law experts."
                  </p>
                  <p className="font-bold text-sm">Managing Director, Auto Components, Chennai</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "An accountant's negligence led to a huge tax penalty. We didn't want to fire him, but we needed to set a precedent. AMA drafted a 'Censure' notice and helped us deduct the penalty from his bonus legally. The discipline in our finance department has never been better."
                  </p>
                  <p className="font-bold text-sm">HR Manager, Logistics Firm, Mumbai</p>
                </div>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">Can an employee be fired for a single act of negligence?</h4>
                  <p>Only if it is 'Gross Negligence' that causes significant danger or massive financial loss. For minor negligence, a single act is usually not enough for termination; warnings are required first.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What if the employee is absent due to depression?</h4>
                  <p>Depression is a serious medical condition. The employee should provide a certificate from a registered psychiatrist. In such cases, the employer should offer medical leave rather than disciplinary action.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is 'Coming Late' the same as 'Absenteeism'?</h4>
                  <p>No. Habitual late-coming is a different type of misconduct (tardiness). However, three instances of late-coming are often treated as one day of unauthorized absence in many company policies.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can we fire an employee who is on medical leave?</h4>
                  <p>Generally, NO. Firing someone while they are on legitimate, documented medical leave is seen as 'malicious' and 'unfair labor practice' by Indian courts.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What is a 'Reasonable' timeframe to reply to a notice?</h4>
                  <p>For simple absenteeism, 48 hours is reasonable. For complex negligence allegations involving data or finance, 7 to 10 days is considered more appropriate by the courts.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can an employee refuse to sign a warning letter?</h4>
                  <p>Yes, they can refuse. In such cases, the employer should have two witnesses sign that the letter was presented to the employee and they refused. You should also send it via Registered Post.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is the 'No Work, No Pay' rule automatic?</h4>
                  <p>Yes. It is a fundamental principle of the contract of employment. If the employee does not provide the service, the employer is not obligated to pay the consideration (salary).</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can we use CCTV footage as proof of negligence?</h4>
                  <p>Yes. CCTV footage is a strong piece of electronic evidence. However, you must ensure it is preserved properly and that the employee is shown the footage during the inquiry.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What if the employee 'absconds' with company property?</h4>
                  <p>This is both absenteeism and theft. You should follow the abandonment notice protocol while simultaneously filing a police complaint for 'Criminal Breach of Trust' (IPC 406).</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can we recover the cost of damage from salary?</h4>
                  <p>Only if the company's standing orders or employment contract explicitly allow for 'deduction for damage or loss' after a proper enquiry where the employee is found negligent.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Restore Workplace Discipline Today.</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Don't let absenteeism and negligence erode your company's value. Our expert lawyers at AMA Legal Solutions are ready to help you handle these sensitive issues with precision and legality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Request Employer Support
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" className="flex items-center gap-2">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">The Ethical Path: Discipline as a Teaching Tool</h2>
            <p>
              It is important to remember that the goal of discipline is not to "eliminate" people but to "improve" them. A fair and transparent disciplinary process is actually a form of support. It tells the employee exactly what they are doing wrong and what they need to do to succeed.
            </p>
            <p>
              Organizations that have clear rules and apply them fairly actually have *higher* employee retention than those where the rules are vague or inconsistently applied. Employees value fairness. Knowing that a negligent co-worker will be held accountable makes a high-performer feel that their own hard work is being recognized.
            </p>
            <p>
              Ultimately, a disciplined workplace is a safer, more productive, and more profitable workplace. By following the legal protocols outlined in this guide, you are not just avoiding lawsuits; you are building a professional culture that values excellence and reliability.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">The Power of the 'Performance Improvement Plan' (PIP)</h2>
            <p>
              In many corporate environments, before issuing a final legal notice, employers use a <strong>Performance Improvement Plan (PIP)</strong>. This is a 30 to 90-day period where the employee is given specific, measurable goals to meet.
            </p>
            <p>
              A PIP is a powerful legal document. If the employee fails to meet the goals of the PIP, it becomes much easier to prove that their termination was based on "poor performance" and "negligence" rather than any personal bias. At AMA Legal Solutions, we help HR teams design PIPs that are both effective for performance and robust for legal defense.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">Conclusion: Take the First Step to a Better Workplace</h2>
            <p>
              Dealing with absenteeism and negligence is a test of a leader's resolve. It requires you to be patient, objective, and legally informed. Remember that the law is not your enemy; it is the framework that allows you to manage your team fairly and effectively.
            </p>
            <p>
              Don't let your business suffer in silence. If you have an employee who is habitually failing to show up or failing to perform, take action today. Document the instances, issue the warnings, and if needed, send the formal legal notice.
            </p>
            <p>
              Let AMA Legal Solutions be your partner in building a more disciplined and productive organization. We handle the legal complexity so you can focus on growing your business. Your journey to a more professional and accountable workplace starts with that first, decisive legal step.
            </p>

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Restore Discipline</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers specialize in workforce discipline and employer defense. We help you handle chronic absenteeism and gross negligence legally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Abandonment Notice Protocol</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Negligence Discovery Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Labor Court Risk Assessment</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Talk to a Lawyer
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
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Employer Helpline</p>
              <a href="tel:+918700343611" className="text-xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors">
                +91 8700343611
              </a>
              <p className="text-[10px] text-gray-400 mt-2 italic">Corporate Legal Defense</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaUserTie, FaRegMoneyBillAlt, FaBriefcase, FaUniversity, FaUserGraduate } from "react-icons/fa";

export const metadata = {
  title: "Notice to Employer for Non-Payment of Salary or Benefits | Legal Guide",
  description:
    "Is your employer withholding your salary or benefits? Learn your legal rights under the Payment of Wages Act and Industrial Disputes Act. Draft a legal notice to your employer and recover your dues today.",
  keywords: "notice to employer for non payment of salary, legal notice for unpaid salary, employee rights india salary dispute, recover unpaid salary from employer india, payment of wages act salary delay",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "legal-rights", title: "Your Legal Rights" },
  { id: "payment-of-wages-act", title: "Payment of Wages Act" },
  { id: "when-to-send-notice", title: "When to Send Notice" },
  { id: "drafting-the-notice", title: "Drafting the Notice" },
  { id: "escalation-paths", title: "Escalation Paths" },
  { id: "retaliation", title: "Retaliation & Termination" },
  { id: "mental-health", title: "Mental Health Support" },
  { id: "state-acts", title: "State Specific Laws" },
  { id: "role-of-hr", title: "Role of HR" },
  { id: "collective-bargaining", title: "Collective Bargaining" },
  { id: "workman-classification", title: "Workman Classification" },
  { id: "interest-calculation", title: "Interest & Damages" },
  { id: "check-bounce", title: "Check Bounce Cases" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Notice to Employer for Wrongful Termination", href: "/notice-to-employer-for-wrongful-termination" },
  { title: "Notice for Recovery of Outstanding Business Dues", href: "/notice-for-recovery-of-outstanding-business-dues" },
  { title: "Notice for Recovery of Professional Fees", href: "/notice-for-recovery-of-professional-fees" },
  { title: "Demand Notice for Recovery of Money", href: "/demand-notice-for-recovery-of-money" },
  { title: "Notice for Dishonoured Cheque", href: "/notice-for-for-dishonoured-cheque" },
];

export default function SalaryRecoveryGuide() {
  const breadcrumbItems = [
    { label: "Employment Law", href: "/services/employment-law" },
    { label: "Salary Recovery Notice", href: "/notice-to-employer-for-non-payment-of-salary-or-benefits" },
  ];

  // Schema Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Notice to Employer for Non-Payment of Salary or Benefits: A Comprehensive Legal Guide",
    "description": "Exhaustive legal guide for employees facing salary withholding, including how to send a legal notice and recover dues through labor courts.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-28",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/notice-to-employer-for-non-payment-of-salary-or-benefits" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many days can a salary be delayed in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to the Payment of Wages Act, salary should be paid by the 7th of the following month for establishments with less than 1000 employees, and by the 10th for larger ones."
        }
      },
      {
        "@type": "Question",
        "name": "Can I sue my employer for not paying salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can file a civil suit for recovery of money or approach the Labour Court under the Industrial Disputes Act."
        }
      },
      {
        "@type": "Question",
        "name": "What documents do I need for a salary dispute?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need your employment contract, pay slips, bank statements, and copies of all correspondence with your employer regarding the unpaid dues."
        }
      },
      {
        "@type": "Question",
        "name": "Is non-payment of salary a criminal offense?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is primarily a civil and labor law violation. However, it can become a criminal offense if there is evidence of cheating or a criminal breach of trust."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get interest on my unpaid salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can claim interest on the outstanding amount, typically ranging from 12% to 18% per annum, depending on the court's discretion."
        }
      },
      {
        "@type": "Question",
        "name": "What if my employer says they have no money to pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Financial difficulty is generally not a valid legal defense for withholding wages that have already been earned by an employee."
        }
      },
      {
        "@type": "Question",
        "name": "Can an employer deduct salary for notice period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An employer can only deduct salary if the employment contract specifically provides for notice pay in lieu of the notice period not being served."
        }
      },
      {
        "@type": "Question",
        "name": "How do I file a complaint with the Labour Commissioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can visit the local Labour Commissioner's office or file a complaint online through portals like SAMADHAN."
        }
      },
      {
        "@type": "Question",
        "name": "Can I resign and still claim my unpaid salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, your right to receive your earned wages remains intact even if you resign. The employer must clear all dues within two working days of your resignation."
        }
      },
      {
        "@type": "Question",
        "name": "Does a legal notice always lead to a court case?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Many employers settle the matter immediately after receiving a legal notice to avoid litigation costs and reputational damage."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Employment Law", "item": "https://www.amalegalsolutions.com/services/employment-law" },
      { "@type": "ListItem", "position": 3, "name": "Salary Recovery Notice", "item": "https://www.amalegalsolutions.com/notice-to-employer-for-non-payment-of-salary-or-benefits" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Employee Legal Protection Service",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1250" }
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
              Is Your Employer <span className="text-[#D29E0D]">Withholding Your Salary</span>?
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Non-payment of salary or benefits is a violation of Indian labor laws. Learn how to use the Payment of Wages Act and legal notices to recover your hard-earned money instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Recover Your Salary
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Legal Helpline
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
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Weight of a Withheld Paycheck</h2>
              <p>
                Imagine waking up on the first of the month, ready to pay your rent, cover your children's school fees, or simply stock up on groceries, only to find that your bank account remains unchanged. The notification from your employer that should have arrived days ago is conspicuously absent. You check your email, hoping for an update, but there is only silence. This is the harrowing reality for thousands of employees across India who find themselves in the middle of a salary dispute.
              </p>
              <p>
                When an employer fails to pay your salary or benefits, it is more than just a financial inconvenience. It is a breach of trust, a violation of a legal contract, and a significant threat to your personal stability. Salary is not a gift from your employer; it is the earned compensation for your hard work and time. Whether you work for a multinational corporation or a small startup, the law is very clear about your right to be paid on time and in full.
              </p>
              <p>
                At AMA Legal Solutions, we understand the immense stress that comes with non payment of salary. We have seen how it affects the mental health of individuals and the harmony of their families. This guide is designed to empower you with the knowledge and tools you need to fight back. We will walk you through the legal framework that protects you, the immediate steps you should take, and how to send a formal legal notice that demands what is rightfully yours. You do not have to suffer in silence. The law is your strongest ally in this battle.
              </p>
            </section>

            <section id="legal-rights" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Understanding Your Legal Rights in India</h2>
              <p>
                The Indian legal system has established several layers of protection for employees regarding their wages. It is important to know which laws apply to you, as this will determine your strategy for recovery.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 mb-8">
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <FaExclamationTriangle /> Key Legislation Protecting You:
                </h4>
                <ul className="space-y-4 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Payment of Wages Act, 1936:</strong> Ensures timely payment and regulates permissible deductions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Industrial Disputes Act, 1947:</strong> Provides recovery mechanisms through Labour Courts for workmen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Indian Contract Act, 1872:</strong> Governs employment contracts and breach of terms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Shops and Establishments Act:</strong> State specific laws regulating commercial establishments.</span>
                  </li>
                </ul>
              </div>
              <p>
                The Payment of Wages Act, 1936, is one of the most critical pieces of legislation in this regard. It was enacted specifically to ensure that wages are paid to employees on time and without any unauthorized deductions. Originally intended for factory workers and railway employees, its scope has been expanded over the years to cover a wide range of industries and establishments.
              </p>
            </section>

            <section id="payment-of-wages-act" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Payment of Wages Act: Timelines and Rules</h2>
              <p>
                One of the most common questions employees ask is, "How long can my employer legally delay my salary?" The Payment of Wages Act provides very specific answers to this.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Mandatory Deadlines:</h3>
              <ul className="list-disc ml-6 space-y-4 mb-6">
                <li><strong>Small Establishments ({"<"}1000 employees):</strong> Salary must be paid by the 7th of the following month.</li>
                <li><strong>Large Establishments ({">"}1000 employees):</strong> Salary must be paid by the 10th of the following month.</li>
                <li><strong>On Termination:</strong> All outstanding dues must be cleared within 2 working days of termination.</li>
                <li><strong>Mode of Payment:</strong> Must be in cash, cheque, or direct bank transfer.</li>
              </ul>
              <p>
                The Act also strictly regulates authorized deductions. An employer cannot simply decide to deduct money from your salary for "poor performance" or "lack of discipline" unless it is explicitly permitted under the Act and follows a fair process. Any unauthorized deduction is a violation of the law and can be challenged.
              </p>
            </section>

            <section id="when-to-send-notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">When to Send a Legal Notice to Your Employer</h2>
              <p>
                Sending a legal notice is often the most effective step in resolving a salary dispute. It is a formal communication from a legal professional that notifies the employer of their breach of law and demands immediate rectification.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-6 flex items-center gap-2">
                  <FaBalanceScale /> Why a Legal Notice Works:
                </h4>
                <ul className="space-y-6">
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Professional Seriousness</h5>
                    <p className="text-sm">It shows the employer that you have sought professional legal advice and are ready for a legal battle.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Formal Legal Record</h5>
                    <p className="text-sm">It establishes a documented timeline of the dispute, which is vital for any future court proceedings.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Sense of Urgency</h5>
                    <p className="text-sm">Giving a 15-day deadline creates immediate pressure on the finance and HR departments.</p>
                  </li>
                </ul>
              </div>
              <p>
                If the internal communication fails or if the employer provides vague and unsatisfactory responses, it is time to escalate. Waiting too long can sometimes be perceived as a waiver of your rights, although the law provides a reasonable period for recovery.
              </p>
            </section>

            <section id="drafting-the-notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How to Draft an Effective Legal Notice</h2>
              <p>
                A legal notice must be precise, factual, and legally sound. While you can technically write one yourself, it is highly recommended to have it drafted by a qualified advocate. The language and structure of the notice can significantly impact its effectiveness.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Essential Components:</h3>
              <ul className="list-disc ml-6 space-y-4 mb-6">
                <li><strong>Party Identification:</strong> Full names and addresses of the employee and employer.</li>
                <li><strong>Facts of the Case:</strong> Chronological account of employment, designation, and unpaid periods.</li>
                <li><strong>Legal Grounds:</strong> References to Payment of Wages Act, Industrial Disputes Act, and contract terms.</li>
                <li><strong>Specific Demand:</strong> Full payment of dues plus interest (12-18% per annum).</li>
                <li><strong>Final Warning:</strong> Notice of intent to initiate civil/criminal proceedings if demands are not met.</li>
              </ul>
            </section>

            <section id="escalation-paths" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Steps After Sending the Notice: Escalation Paths</h2>
              <p>
                What happens if your employer ignores the legal notice? While many employers settle at the notice stage, some might remain defiant. In such cases, you have several escalation paths available.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaUniversity className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Labour Commissioner</h4>
                    <p className="text-sm text-gray-600">File a complaint on the SAMADHAN portal. The Commissioner can summon the employer for conciliation.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaGavel className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Labour Court</h4>
                    <p className="text-sm text-gray-600">Apply under Section 33C(2) of the Industrial Disputes Act for judicial recovery of your dues.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaBriefcase className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Summary Civil Suit</h4>
                    <p className="text-sm text-gray-600">File under Order 37 of the CPC for faster recovery of contractual dues in civil courts.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaUserShield className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Criminal Complaint</h4>
                    <p className="text-sm text-gray-600">In cases of fraud, file under Section 406 (Breach of Trust) or 420 (Cheating) of the IPC.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="retaliation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Dealing with Retaliation and Wrongful Termination</h2>
              <p>
                One of the biggest fears employees have when demanding their salary is retaliation. Will I be fired? Will they give me a bad reference? Will they make my life difficult in the office? These are valid concerns, but the law also provides protections against such behavior.
              </p>
              <p>
                Retaliating against an employee for demanding their legal rights is considered an unfair labor practice. If you are terminated shortly after sending a legal notice or filing a complaint, you can challenge it as a case of "wrongful termination." In many cases, courts have ordered the reinstatement of the employee with full back wages.
              </p>
              <p>
                It is important to document every interaction during this period. If your access to office systems is suddenly revoked or if you are excluded from meetings you usually attend, keep a record of these events. Save your performance reviews and any appreciation emails you have received in the past.
              </p>
            </section>

            <section id="mental-health" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Managing the Mental Health Toll</h2>
              <p>
                The stress of a salary dispute cannot be overstated. It affects your sleep, your relationships, and your overall sense of security. It is easy to fall into a cycle of anxiety and self doubt. You might start questioning your worth or feeling ashamed of your financial situation.
              </p>
              <p>
                First, realize that you are not alone. Thousands of people go through similar situations every year. The non payment of salary is a reflection of the employer's failure, not yours. You have done your part by providing your services; they are the ones who have failed to fulfill their obligation.
              </p>
              <p>
                Joining employee unions or support groups can also be very helpful. There is strength in numbers, and these groups often have experience in dealing with similar employers. They can provide practical advice and emotional support that is specifically tailored to your industry.
              </p>
            </section>

            <section id="state-acts" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Detailed Analysis of State Specific Acts</h2>
              <p>
                While national laws provide a general framework, the specific rules governing your employment often depend on the state where your office is located. Most private sector employees in India fall under the purview of the Shops and Establishments Act of their respective state.
              </p>
              <p>
                For instance, the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017, is one of the most progressive in the country. It applies to all establishments employing ten or more workers. Under this Act, an employer is required to maintain a register of wages and ensure that payments are made regularly.
              </p>
              <p>
                In Delhi, the Delhi Shops and Establishments Act, 1954, governs the payment of wages. It mandates that wages must be paid before the expiry of the seventh day of the following month. The Act also provides for the recovery of wages through the authority appointed by the state government.
              </p>
            </section>

            <section id="role-of-hr" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Role of HR and Effective Communication</h2>
              <p>
                In many salary dispute cases, the Human Resources department is your first point of contact. While it might feel like HR is solely there to protect the company's interests, they are also responsible for ensuring that the company complies with labor laws. Effective communication with HR can sometimes resolve a dispute before it requires legal intervention.
              </p>
              <p>
                When communicating with HR, always keep it professional and written. Avoid verbal discussions that leave no paper trail. Use a clear subject line like "Follow up on Unpaid Salary for the month of [Month/Year]." In the body of the email, state the facts clearly.
              </p>
              <p>
                However, if you find that HR is being evasive, providing contradictory information, or simply ignoring your emails, it is a clear sign that internal resolution is unlikely. At this point, continuing to "follow up" with HR is often a waste of time and energy. This is the moment when you should transition from internal communication to formal legal action.
              </p>
            </section>

            <section id="collective-bargaining" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Collective Bargaining and Employee Unions</h2>
              <p>
                While individual action is powerful, there is undeniable strength in numbers. In many sectors, especially manufacturing and large scale services, employee unions play a vital role in protecting workers' rights. Collective bargaining is the process where a group of employees, represented by a union, negotiates with the employer over wages and working conditions.
              </p>
              <p>
                In the private IT and service sectors, formal unions are less common, but informal support groups and professional associations are on the rise. These groups provide a platform for employees to share their experiences and coordinate their actions. If several employees of the same company are facing salary delays, filing a collective legal notice or a joint complaint can be much more impactful than individual actions.
              </p>
            </section>

            <section id="workman-classification" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Workman vs Non-Workman: Why it Matters</h2>
              <p>
                In Indian labor law, the classification of an employee as a "workman" or a "non-workman" is a crucial distinction. This classification determines which laws apply to you and which courts you can approach for relief.
              </p>
              <p>
                If you are a "workman," you have access to the Labour Courts and Industrial Tribunals. These forums are generally more employee friendly and have faster procedures for the recovery of dues. You can file a claim under Section 33C(2) of the Industrial Disputes Act, which is specifically designed for the recovery of money due from an employer.
              </p>
              <p>
                If you are a "non-workman," typically a manager, executive, or director, you must approach the Civil Courts for your claims. This usually involves filing a recovery suit or a summary suit under the Code of Civil Procedure. While the process in civil courts can sometimes be longer, the principles of contract law still provide strong protection.
              </p>
            </section>

            <section id="interest-calculation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Interest Calculation and Damages</h2>
              <p>
                When an employer withholds your salary, you are not just losing the principal amount; you are also losing the potential interest that money could have earned. Furthermore, the delay often causes you to incur additional costs, such as late fees on credit card bills, interest on loans, or even the cost of borrowing money to cover your expenses.
              </p>
              <p>
                To claim interest, your legal notice must explicitly state the demand for interest from the date the payment became due. For example, "You are liable to pay the outstanding amount of [Amount] along with interest at the rate of 18% per annum from [Due Date] until the date of actual payment."
              </p>
              <p>
                In addition to interest, you can also claim "Damages" for mental agony and professional defamation. If the non-payment of salary has caused you significant emotional distress or if the employer has made false statements about you to justify the withholding of wages, you have a right to be compensated.
              </p>
            </section>

            <section id="check-bounce" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Check Bounce and Section 138 of the NI Act</h2>
              <p>
                In some cases, an employer might issue a cheque for the salary, but the cheque is returned by the bank with the remark "insufficient funds" or "account closed." This is a very serious situation and opens up a different legal avenue: Section 138 of the Negotiable Instruments Act, 1881.
              </p>
              <p>
                A cheque bounce for the discharge of a debt or liability is a criminal offense in India. If your salary cheque has bounced, you must send a formal legal notice to the employer within thirty days of receiving the memo from the bank. This notice must demand the payment of the cheque amount within fifteen days.
              </p>
              <p>
                The beauty of Section 138 is that it is a "strict liability" offense. This means that the employer's intent is irrelevant; the mere fact that the cheque bounced and they failed to pay after the notice is enough to establish the crime. This provides immense leverage to the employee.
              </p>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">How many days can a salary be delayed in India?</h4>
                  <p>According to the Payment of Wages Act, salary should be paid by the 7th of the following month for establishments with less than 1000 employees, and by the 10th for larger ones.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I sue my employer for not paying salary?</h4>
                  <p>Yes, you can file a civil suit for recovery of money or approach the Labour Court under the Industrial Disputes Act.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What documents do I need for a salary dispute?</h4>
                  <p>You need your employment contract, pay slips, bank statements, and copies of all correspondence with your employer regarding the unpaid dues.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is non-payment of salary a criminal offense?</h4>
                  <p>It is primarily a civil and labor law violation. However, it can become a criminal offense if there is evidence of cheating or a criminal breach of trust.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I get interest on my unpaid salary?</h4>
                  <p>Yes, you can claim interest on the outstanding amount, typically ranging from 12% to 18% per annum, depending on the court's discretion.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What if my employer says they have no money to pay?</h4>
                  <p>Financial difficulty is generally not a valid legal defense for withholding wages that have already been earned by an employee.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can an employer deduct salary for notice period?</h4>
                  <p>An employer can only deduct salary if the employment contract specifically provides for notice pay in lieu of the notice period not being served.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">How do I file a complaint with the Labour Commissioner?</h4>
                  <p>You can visit the local Labour Commissioner's office or file a complaint online through portals like SAMADHAN.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I resign and still claim my unpaid salary?</h4>
                  <p>Yes, your right to receive your earned wages remains intact even if you resign. The employer must clear all dues within two working days of your resignation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Does a legal notice always lead to a court case?</h4>
                  <p>Not necessarily. Many employers settle the matter immediately after receiving a legal notice to avoid litigation costs and reputational damage.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Reclaim Your Dues Today</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Don't let an employer take advantage of your hard work. Our expert employment lawyers at AMA Legal Solutions are ready to help you recover your unpaid salary and benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Get Free Legal Help
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" className="flex items-center gap-2">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>

            <section id="success-stories" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10 mt-12">Client Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "I hadn't been paid for three months, and my HR kept giving me excuses. AMA Legal Solutions drafted a brilliant legal notice, and within ten days, my entire salary plus interest was credited to my account."
                  </p>
                  <p className="font-bold text-sm">Rajesh Kumar, Bengaluru</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "When I was laid off without my final settlement, I felt hopeless. The team at AMA guided me through the Labour Commissioner process. Their expertise is unmatched. I finally received my gratuity and pending salary."
                  </p>
                  <p className="font-bold text-sm">Priya Sharma, Noida</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "Excellent legal support for employees. They made me realize that I have rights and that I shouldn't be afraid of my former boss. The legal notice was very powerful and effective."
                  </p>
                  <p className="font-bold text-sm">Amit Singh, Mumbai</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "Highly recommended for anyone facing salary issues. They are empathetic, professional, and very thorough in their work. They handled my case with extreme care and got me a fair settlement."
                  </p>
                  <p className="font-bold text-sm">Sneha Patel, Hyderabad</p>
                </div>
              </div>
            </section>

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Stop Withholding Today</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers specialize in employee protection. We stop salary delays and negotiate fair settlements for all your dues.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Formal Legal Notices to Employer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Labour Commissioner Representation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Recovery of Bonus and Gratuity</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Get Legal Help Now
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
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Salary Helpline</p>
              <a href="tel:+918700343611" className="text-xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors">
                +91 8700343611
              </a>
              <p className="text-[10px] text-gray-400 mt-2 italic">100% Confidential</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

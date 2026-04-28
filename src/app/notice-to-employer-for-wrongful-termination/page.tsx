import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaEyeSlash, FaUserTie, FaFileAlt, FaHandshake } from "react-icons/fa";

export const metadata = {
  title: "Notice to Employer for Wrongful Termination: Legal Rights & Compensation",
  description:
    "Facing wrongful termination in India? Learn your legal rights, grounds for challenge, and how to send a legal notice to your employer. Get expert help for back wages and reinstatement.",
  keywords: "notice to employer for wrongful termination, wrongful dismissal india, legal notice for job termination, labor law india termination, compensation for wrongful termination, industrial disputes act india, forced resignation legal rights",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "legal-landscape", title: "Legal Landscape" },
  { id: "grounds", title: "Grounds for Termination" },
  { id: "evidence", title: "Evidence Gathering" },
  { id: "drafting-notice", title: "Drafting the Notice" },
  { id: "legal-recourse", title: "Legal Recourse" },
  { id: "remedies", title: "Remedies & Compensation" },
  { id: "hr-role", title: "The Role of HR" },
  { id: "future-labour-codes", title: "New Labour Codes" },
  { id: "handle-24-hours", title: "First 24 Hours Protocol" },
  { id: "employer-excuses", title: "Common Excuses" },
  { id: "gig-workers", title: "Gig Workers & Contractors" },
  { id: "taxation", title: "Taxation of Settlements" },
  { id: "reviews", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

const relatedPages = [
  { title: "Demand Notice for Salary Recovery", href: "/notice-for-recovery-of-unpaid-salary" },
  { title: "Legal Notice for Security Deposit", href: "/notice-for-recovery-of-security-deposit" },
  { title: "Demand Notice for Money Recovery", href: "/demand-notice-for-recovery-of-money" },
  { title: "Demand Notice for Loan Repayment", href: "/demand-notice-for-loan-repayment" },
  { title: "Legal Notice for Professional Fees", href: "/notice-for-recovery-of-professional-fees" },
  { title: "Notice for Recovery from Tenant", href: "/notice-for-recovery-from-tenant-landlord" },
];

export default function WrongfulTerminationGuide() {
  const breadcrumbItems = [
    { label: "Send Legal Notice", href: "/send-legal-notice" },
    { label: "Wrongful Termination", href: "/notice-to-employer-for-wrongful-termination" },
  ];

  // Schema Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Notice to Employer for Wrongful Termination: A Comprehensive Legal Guide",
    "description": "Comprehensive legal guide on how to handle wrongful termination in India, understanding labor laws, and sending a legal notice to your employer.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-28",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/notice-to-employer-for-wrongful-termination" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can my employer fire me without any notice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, no. Most labor laws and employment contracts in India require a notice period (usually 30 to 90 days) or payment of salary in lieu of that notice. The only exception is gross misconduct, but even then, a fair inquiry must be conducted first."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't have a written employment contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Even without a written contract, you are protected by state labor laws like the Shops and Establishments Act. Your salary slips, bank statements showing salary transfers, and company ID card serve as proof of employment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I be fired for being pregnant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Under the Maternity Benefit Act, it is illegal to terminate a woman's employment because she is pregnant or on maternity leave. Doing so is a serious offense that can lead to criminal prosecution for the employer."
        }
      },
      {
        "@type": "Question",
        "name": "How much compensation can I get for wrongful termination?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The amount varies based on your salary, tenure, and the severity of the violation. Courts often award back wages for the period you were unemployed, along with damages for mental agony which can range from a few months' salary to significant lump sum amounts."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to sign the 'Full and Final' settlement immediately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You have the right to take the document home, review it, and consult with a lawyer. If you are being coerced to sign, it is better to refuse and record the coercion."
        }
      },
      {
        "@type": "Question",
        "name": "Can I sue my employer for mental harassment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If the termination was done in a public or humiliating manner, or if it involved verbal abuse, you can include a claim for damages for mental harassment and loss of reputation in your civil suit or legal notice."
        }
      },
      {
        "@type": "Question",
        "name": "What is the time limit for filing a wrongful termination case?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While it is best to act immediately, the limitation period for filing a case in the Labour Court is usually one to three years, depending on the state and the nature of the claim. However, delays can weaken your case, so sending a legal notice within 30 days is recommended."
        }
      },
      {
        "@type": "Question",
        "name": "Is an email considered a valid termination notice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, in the modern corporate world, an email is considered a valid form of communication. However, the content of that email must still comply with the law and your employment contract."
        }
      },
      {
        "@type": "Question",
        "name": "Can I approach the police for wrongful termination?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The termination itself is a civil or labor matter, not a police matter. However, if the termination involved physical threats, theft of your personal property, or illegal detention, the police can and should be involved."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a wrongful termination case take to resolve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A legal notice often leads to a settlement within 30 to 60 days. If the matter goes to the Labour Court or a civil suit, it can take one to three years for a final judgment. This is why a strong initial legal notice is so important for a quick resolution."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Send Legal Notice", "item": "https://www.amalegalsolutions.com/send-legal-notice" },
      { "@type": "ListItem", "position": 3, "name": "Wrongful Termination", "item": "https://www.amalegalsolutions.com/notice-to-employer-for-wrongful-termination" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Employment Dispute Legal Service",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1840" },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rahul Sharma" },
        "datePublished": "2026-03-15",
        "reviewBody": "I was terminated without notice. AMA Legal Solutions helped me send a strong legal notice and I got my full settlement within 15 days.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya Verma" },
        "datePublished": "2026-02-10",
        "reviewBody": "Excellent service. They handled my wrongful termination case with great professionalism. Highly recommended for employment disputes.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Amit Patel" },
        "datePublished": "2026-01-20",
        "reviewBody": "Very knowledgeable lawyers. They explained my rights under the Industrial Disputes Act clearly and helped me get my back wages.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sneha Reddy" },
        "datePublished": "2025-12-05",
        "reviewBody": "I was facing constructive dismissal. The legal notice from AMA stopped the harassment immediately. Truly grateful for their help.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
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
              Facing <span className="text-[#D29E0D]">Wrongful Termination</span>?
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Arbitrary firing, lack of notice, and discriminatory dismissal are illegal. Use the Industrial Disputes Act and Shops & Establishments Act to fight back, claim back wages, and protect your professional dignity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Challenge Termination
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
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Professional and Personal Impact of Sudden Termination</h2>
              <p>
                The professional landscape is built on trust and mutual agreements. When you join a company, you invest your time, skills, and future in the organization. However, the sudden and arbitrary termination of employment can shatter this trust. In India, the term "wrongful termination" refers to the dismissal of an employee in a manner that violates the terms of their employment contract or the labor laws of the country. This is not just a financial setback; it is an assault on your professional dignity and career trajectory.
              </p>
              <p>
                Facing a job loss is stressful, but when that job loss is unjust, the emotional burden is doubled. You may find yourself wondering about your next steps, your financial stability, and your legal rights. It is important to understand that in the eyes of Indian law, an employer does not have an absolute right to fire an employee without cause or without following due process. Whether you are a "workman" under the Industrial Disputes Act or a management level professional under the Shops and Establishments Act, you have protections that cannot be ignored.
              </p>
              <p>
                The purpose of this guide is to empower you with the knowledge and tools to fight back. A legal notice for wrongful termination is often the most effective first step. It signals to the employer that you are aware of your rights and are prepared to seek legal recourse. It creates a formal record of the dispute and provides an opportunity for an amicable settlement before the matter reaches a court of law.
              </p>
            </section>

            <section id="legal-landscape" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Understanding the Legal Landscape of Employment in India</h2>
              <p>
                Indian employment law is a complex web of central and state legislations. To effectively challenge a wrongful termination, you must first understand which laws apply to your specific situation. The classification of an employee plays a fundamental role in determining the remedies available.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">The Industrial Disputes Act, 1947</h3>
              <p>
                The Industrial Disputes Act (IDA) is the primary legislation governing labor relations in India. It applies specifically to individuals classified as "workmen." A workman is defined as any person employed in an industry to do manual, unskilled, skilled, technical, operational, clerical, or supervisory work. However, individuals in managerial or administrative capacities, or those in supervisory roles earning above a certain threshold, are generally excluded from this definition.
              </p>
              <p>
                If you fall under the category of a workman, the IDA provides significant protections. For instance, Section 25F of the Act mandates that no workman who has been in continuous service for not less than one year can be retrenched until they have been given one month's notice in writing or pay in lieu of such notice. Furthermore, the employer must provide a valid reason for the termination.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">The Shops and Establishments Act</h3>
              <p>
                For employees working in the private sector, such as IT companies, retail, or hospitality, the state-specific Shops and Establishments Act applies. Each state in India has its own version of this act, such as the Delhi Shops and Establishments Act or the Maharashtra Shops and Establishments Act. These acts regulate the conditions of work, including the termination of employment.
              </p>
              <p>
                Most Shops and Establishments Acts require an employer to provide a notice period (usually 30 days) or salary in lieu of notice. They also prohibit termination without a reasonable cause. If you have been terminated without being given a chance to explain your side or without a valid reason, you can file a complaint with the local labor department under this act.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">The Indian Contract Act, 1872</h3>
              <p>
                For high-level executives and managers who may not be covered by the IDA or the Shops and Establishments Act, the employment relationship is primarily governed by the contract of employment. The Indian Contract Act, 1872, ensures that the terms of the contract are binding on both parties. If an employer terminates an executive in violation of the notice period or the termination clauses mentioned in the offer letter, it constitutes a breach of contract.
              </p>
            </section>

            <section id="grounds" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Identifying Grounds for Wrongful Termination</h2>
              <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 mb-8">
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <FaExclamationTriangle /> Common Grounds for Challenge:
                </h4>
                <ul className="space-y-4 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Procedural Violations:</strong> Lack of notice period or pay in lieu of notice as per contract or law.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Substantive Violations:</strong> Termination without a valid reason or documentation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Discriminatory Grounds:</strong> Termination based on gender, maternity, religion, or disability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Retaliatory Firing:</strong> Firing as punishment for whistleblowing or POSH complaints.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Constructive Dismissal:</strong> Making working conditions so hostile that the employee is forced to resign.</span>
                  </li>
                </ul>
              </div>
              <p>
                One of the most common forms of wrongful termination is the failure to follow the procedure laid down in the employment contract or the law. This includes termination without the required notice period or pay in lieu of notice, failure to conduct a domestic inquiry in cases of alleged misconduct, and not providing a written termination letter with a clear reason.
              </p>
            </section>

            <section id="evidence" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Preparing Your Case: The Evidence Gathering Phase</h2>
              <p>
                Before you send a legal notice, you must gather all relevant documents. In a legal battle against a corporation, evidence is your greatest ally.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaFileAlt className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Primary Documents</h4>
                    <p className="text-sm text-gray-600">Appointment letter, offer letter, and company policy handbook that outline termination clauses.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaUserTie className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Performance Records</h4>
                    <p className="text-sm text-gray-600">Performance reviews, appreciation emails, and records of successfully completed projects.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaShieldAlt className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Communication</h4>
                    <p className="text-sm text-gray-600">Termination email, Slack logs, and WhatsApp messages leading up to the dismissal.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaLock className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Financial Proof</h4>
                    <p className="text-sm text-gray-600">Salary slips and bank statements showing consistent income and employment tenure.</p>
                  </div>
                </div>
              </div>
              <p>
                Employers often pressure terminated employees to sign a "Full and Final" settlement document immediately. This document usually contains a clause stating that you have no further claims against the company. Do not sign this document if you believe your termination was wrongful. Once you sign, it becomes much harder to challenge the dismissal in court.
              </p>
            </section>

            <section id="drafting-notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Drafting the Legal Notice: Your Formal Response</h2>
              <p>
                Once you have gathered your evidence, the next step is to draft and send a legal notice to your employer. This is a formal document, usually sent through an advocate, that outlines your grievances and demands a resolution.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-6 flex items-center gap-2">
                  <FaBalanceScale /> Core Components of the Notice:
                </h4>
                <ul className="space-y-6">
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Chronology of Service</h5>
                    <p className="text-sm">A factual account of your tenure, contributions, and any recent positive appraisals.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Legal Grounds for Challenge</h5>
                    <p className="text-sm">Citing specific violations of the IDA, Shops and Establishments Act, or your employment contract.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Specific Demands</h5>
                    <p className="text-sm">Including reinstatement, back wages, notice pay, gratuity, and damages for mental harassment.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">The Ultimatum</h5>
                    <p className="text-sm">A clear deadline (15-30 days) for the company to resolve the matter before further litigation.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="legal-recourse" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Post-Termination Legal Recourse: Where to Go Next</h2>
              <p>
                If the employer ignores your legal notice or provides an unsatisfactory response, you have several avenues for seeking justice.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Step 1: The Labour Commissioner</h3>
              <p>
                The Labour Commissioner's office is the first point of contact for employees covered under the IDA or the Shops and Establishments Act. You can file a "statement of claim" detailing your wrongful termination.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Step 2: Filing a Case in the Labour Court</h3>
              <p>
                The Labour Court has the power to adjudicate disputes related to wrongful termination. If the court finds that your termination was indeed illegal, it can order reinstatement or full back wages.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Step 3: Filing a Civil Suit</h3>
              <p>
                For employees not covered by labor laws, the remedy lies in the civil courts. You can file a suit for "wrongful dismissal" and claim damages for loss of income and mental agony.
              </p>
            </section>

            <section id="remedies" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Remedies and Compensation: What Can You Claim?</h2>
              <p>
                When you challenge a wrongful termination, you are not just looking for an apology. You are looking for a way to mitigate the financial and professional damage caused by the employer's actions.
              </p>
              <ul className="list-disc ml-6 space-y-4 mb-6">
                <li><strong>Back Wages and Notice Pay:</strong> Salary for the period you were denied work and pay for the notice period mentioned in your contract.</li>
                <li><strong>Statutory Dues:</strong> Provident Fund (PF), Gratuity (if 5+ years service), and any declared bonuses.</li>
                <li><strong>Encashment of Earned Leave:</strong> Payment for any unused leave balance at the time of termination.</li>
                <li><strong>Damages for Mental Agony:</strong> Compensation for the psychological impact and loss of reputation in the industry.</li>
              </ul>
            </section>

            <section id="hr-role" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Role of HR and Company Ethics: A Critical Perspective</h2>
              <p>
                In many wrongful termination cases, the Human Resources (HR) department is seen as the enforcer of the management's decisions. However, the role of HR is technically to ensure compliance with the law and the company's own ethical standards.
              </p>
              <p>
                A professional HR team should ensure documentation of performance issues before any termination, adhere strictly to the company's disciplinary policy, and act as a mediator to resolve conflicts. If your HR department has acted as a mere rubber stamp for an arbitrary decision, you should highlight this systemic failure in your legal notice.
              </p>
            </section>

            <section id="future-labour-codes" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Future: The New Labour Codes and Employee Rights</h2>
              <p>
                India is in the process of implementing four new Labour Codes that will consolidate and replace existing labor laws. These codes will bring significant changes to the termination process, broadening the definition of "worker" and strengthening social security nets. Staying updated on these changes is essential for any professional navigating the Indian job market.
              </p>
            </section>

            <section id="handle-24-hours" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How to Handle the First 24 Hours After Termination</h2>
              <p>
                The first day after being wrongfully terminated is the most critical period for building your legal case. Your emotions will be high, but your actions must be strategic.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 my-8">
                <h4 className="font-bold text-[#30261C] mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-[#D29E0D]" /> Action Protocol:
                </h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Secure Personal Data:</strong> Save your performance reviews and appointment letter to a personal device immediately.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Avoid Confrontation:</strong> Do not send angry messages to managers that could be used against your character in court.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Record Exit Interviews:</strong> If possible, record the meeting and ask for specific, documented reasons for the firing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Consult a Lawyer:</strong> Speak to an employment expert before signing any "Full and Final" settlement documents.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="employer-excuses" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Common Employer Excuses and How to Refute Them</h2>
              <p>
                Employers often use vague or legally weak reasons to justify a wrongful termination. Knowing how to refute these is key to your legal notice.
              </p>
              <p>
                If they claim "Poor Performance," refute it with your positive reviews. If they claim "Restructuring" but hire a replacement immediately, it is a clear violation. If they allege "Misconduct" without an internal inquiry, they have violated the principles of natural justice.
              </p>
            </section>

            <section id="gig-workers" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Wrongful Termination of Gig Workers and Contractors</h2>
              <p>
                The modern economy has seen a massive rise in gig workers, freelancers, and independent contractors. For a long time, these individuals existed in a legal gray area with few protections against sudden termination. However, the legal landscape is shifting. Under the new Social Security Code 2020, gig workers and platform workers are being recognized for the first time in Indian law.
              </p>
              <p>
                If you are a contractor or a freelancer, your relationship with the company is governed primarily by the Service Agreement. If the company terminates your contract without following the notice period mentioned in the agreement, it is a breach of contract. Furthermore, courts are increasingly looking at the "control test" to determine if a contractor is actually a "de facto" employee. If the company dictates your hours, provides your equipment, and you work exclusively for them, a court may treat you as an employee regardless of what your contract says.
              </p>
              <p>
                Even for pure freelancers, the principles of equity and fair dealing apply. A company cannot simply refuse to pay for work already completed or terminate a long-term project without a valid reason if the contract doesn't explicitly allow it. If you are a gig worker facing arbitrary termination, your first step should be a formal legal notice for breach of contract and recovery of outstanding dues.
              </p>
            </section>

            <section id="taxation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Tax Treatment of Termination Settlements</h2>
              <p>
                When you successfully negotiate a settlement for wrongful termination, it is important to understand the tax implications of the amount you receive. In India, compensation received for the loss of employment is generally treated as "profits in lieu of salary" under Section 17(3) of the Income Tax Act.
              </p>
              <p>
                This means the settlement amount is taxable at your applicable slab rate. However, you can claim relief under Section 89(1) of the Income Tax Act. This relief is designed to reduce the tax burden when you receive a large lump sum amount (like back wages or compensation) that relates to multiple financial years. By filing Form 10E, you can spread the tax liability over the years to which the salary relates, often resulting in significant tax savings.
              </p>
              <p>
                It is also worth noting that any amount received specifically as "damages" for mental agony or defamation may have a different tax treatment depending on how the settlement deed is drafted. Professional legal and tax advice is essential during the settlement negotiation to ensure you keep as much of your compensation as possible.
              </p>
            </section>

            <section id="reviews" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Client Reviews & Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "I was fired overnight from my IT job after five years of service. They didn't even give me my notice pay. AMA Legal Solutions sent a notice that cited the Shops and Establishments Act perfectly. The company called me within three days to settle. I got my three months' salary and my FNF cleared immediately."
                  </p>
                  <p className="font-bold text-sm text-[#30261C]">Vikram R., Bengaluru</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Verified Review</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "Being fired while on maternity leave was the most stressful experience of my life. I felt powerless against a large corporation. The lawyers at AMA were so supportive. They filed a complaint with the Labour Commissioner and within two months, the company was forced to pay me full compensation for the entire maternity period plus damages."
                  </p>
                  <p className="font-bold text-sm text-[#30261C]">Anjali S., Gurgaon</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Verified Review</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "My employer tried to force me to resign by making my work environment toxic. They called it 'performance issues' but never gave me a PIP. AMA recognized it as constructive dismissal. Their legal notice was so strong that the HR department immediately backed down and offered me a graceful exit with six months of severance pay."
                  </p>
                  <p className="font-bold text-sm text-[#30261C]">Karan M., Mumbai</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Verified Review</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "I am a senior manager and was terminated in violation of my contract clauses. I thought a legal battle would take years. AMA's strategic negotiation avoided a long court case. They secured a settlement that included my stock options and a generous bonus that the company was trying to withhold. Truly experts in employment law."
                  </p>
                  <p className="font-bold text-sm text-[#30261C]">Rajiv G., Hyderabad</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Verified Review</p>
                </div>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">Can my employer fire me without any notice?</h4>
                  <p>Generally, no. Most labor laws and employment contracts in India require a notice period (usually 30 to 90 days) or payment of salary in lieu of that notice. The only exception is gross misconduct, but even then, a fair inquiry must be conducted first.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What if I don't have a written employment contract?</h4>
                  <p>Even without a written contract, you are protected by state labor laws like the Shops and Establishments Act. Your salary slips, bank statements showing salary transfers, and company ID card serve as proof of employment.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I be fired for being pregnant?</h4>
                  <p>No. Under the Maternity Benefit Act, it is illegal to terminate a woman's employment because she is pregnant or on maternity leave. Doing so is a serious offense that can lead to criminal prosecution for the employer.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">How much compensation can I get for wrongful termination?</h4>
                  <p>The amount varies based on your salary, tenure, and the severity of the violation. Courts often award back wages for the period you were unemployed, along with damages for mental agony.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Do I have to sign the "Full and Final" settlement immediately?</h4>
                  <p>No. You have the right to take the document home, review it, and consult with a lawyer. If you are being coerced to sign, it is better to refuse and record the coercion.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I sue my employer for mental harassment?</h4>
                  <p>Yes. If the termination was done in a public or humiliating manner, or if it involved verbal abuse, you can include a claim for damages for mental harassment and loss of reputation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What is the time limit for filing a wrongful termination case?</h4>
                  <p>The limitation period for filing a case in the Labour Court is usually one to three years. However, delays can weaken your case, so sending a legal notice within 30 days is recommended.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is an email considered a valid termination notice?</h4>
                  <p>Yes, in the modern corporate world, an email is considered a valid form of communication. However, the content of that email must still comply with the law and your employment contract.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I approach the police for wrongful termination?</h4>
                  <p>The termination itself is a civil or labor matter, not a police matter. However, if the termination involved physical threats or theft of your personal property, the police should be involved.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">How long does a wrongful termination case take to resolve?</h4>
                  <p>A legal notice often leads to a settlement within 30 to 60 days. If the matter goes to the Labour Court or a civil suit, it can take one to three years for a final judgment.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Reclaim Your Career and Dignity</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Don't let an arbitrary firing destroy your future. Our expert lawyers at AMA Legal Solutions are ready to challenge your termination and fight for your dues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Get Free Legal Consultation
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" className="flex items-center gap-2">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>

            <section className="mt-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Conclusion: Dignity in the Workplace is a Right</h2>
              <p>
                Wrongful termination is a traumatic event, but it is not the end of your professional journey. By standing up for your rights, you are not only seeking justice for yourself but also contributing to a culture of accountability in the Indian corporate world. Employers must understand that their employees are their most valuable assets, not disposable commodities.
              </p>
              <p>
                Do not let an unjust dismissal define your worth. Gather your evidence, seek expert legal advice, and take the first step towards reclaiming your dignity and your career. The path to justice is open.
              </p>
            </section>

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Challenge Your Firing</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers specialize in employment disputes. We challenge wrongful termination and negotiate for back wages and compensation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Stop Harassment and Intimidation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Labour Court & Civil Litigation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Maximum Dues Recovery Support</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Contact Legal Experts
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>Related Legal Guides</h4>
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
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Employment Helpline</p>
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

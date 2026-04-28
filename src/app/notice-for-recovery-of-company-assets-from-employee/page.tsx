import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaEyeSlash, FaUserTie, FaLaptop, FaMobileAlt, FaDatabase } from "react-icons/fa";

export const metadata = {
  title: "Notice for Recovery of Company Assets from Employee: Legal Guide",
  description:
    "Has an employee left without returning company property? Learn the legal steps to recover laptops, phones, and data under IPC 406. Issue a formal notice today.",
  keywords: "notice for recovery of company assets from employee india, legal action against employee for not returning laptop, criminal breach of trust employee assets india, legal notice format for recovery of company property, employee wrongful retention of assets legal steps",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "identifying-wrongful-retention", title: "What is Wrongful Retention?" },
  { id: "criminal-breach-trust", title: "Criminal Breach of Trust (IPC 406)" },
  { id: "it-act-violations", title: "IT Act & Data Recovery" },
  { id: "legal-notice-power", title: "The Power of the Legal Notice" },
  { id: "immediate-steps", title: "Immediate Recovery Protocol" },
  { id: "filing-fir", title: "Filing a Police FIR" },
  { id: "civil-recovery", title: "Civil Suit for Recovery" },
  { id: "withholding-dues", title: "Withholding F&F Settlement" },
  { id: "data-privacy", title: "Data Privacy & Proprietary Info" },
  { id: "recovering-intellectual-property", title: "Recovering Intellectual Property" },
  { id: "ama-helps", title: "How AMA Assists Employers" },
  { id: "success-stories", title: "Victory Case Insights" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Notice for Employee Misconduct", href: "/notice-to-employee-for-misconduct" },
  { title: "Notice for Breach of Contract", href: "/notice-to-employee-for-breach-of-employment-contract" },
  { title: "Notice for Absenteeism & Negligence", href: "/notice-to-employee-for-absenteeism-negligence" },
  { title: "Wrongful Termination Guide", href: "/notice-to-employer-for-wrongful-termination" },
  { title: "Workplace Harassment Legal Notice", href: "/notice-to-employer-for-workplace-harassment" },
];

export default function AssetRecoveryGuide() {
  const breadcrumbItems = [
    { label: "Employer Compliance", href: "/services/employer-compliance" },
    { label: "Recovery of Company Assets", href: "/notice-for-recovery-of-company-assets-from-employee" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Legally Recover Company Assets from an Employee: A Complete Guide",
    "description": "Comprehensive legal guide for employers in India on recovering company laptops, phones, and sensitive data from former employees using legal notices and criminal laws.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-28",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/notice-for-recovery-of-company-assets-from-employee" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is not returning a laptop a criminal offense?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It can be classified as 'Criminal Breach of Trust' under Section 406 of the Indian Penal Code (IPC). It involves the dishonest misappropriation of property entrusted to a person."
        }
      },
      {
        "@type": "Question",
        "name": "Can I deduct the cost of the laptop from the employee's salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but only if the employment contract or company policy specifically allows for such deductions. However, it is usually better to withhold the final settlement until the assets are returned."
        }
      },
      {
        "@type": "Question",
        "name": "What if the employee says the laptop was stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The employee must provide a copy of the police FIR filed for the theft. Without an FIR, they remain legally liable for the value of the asset and any data breach that might occur."
        }
      },
      {
        "@type": "Question",
        "name": "Can I file an FIR for data theft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Unauthorized access, copying, or deletion of company data is a serious offense under Sections 43 and 66 of the IT Act, 2000, and carries severe penalties."
        }
      },
      {
        "@type": "Question",
        "name": "Should I wait for the notice period to end before taking action?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. If you have reason to believe the employee intends to keep the assets or misuse the data, you should issue a formal demand immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Can I block their access to company servers remotely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, and you should do it immediately. However, blocking remote access does not recover the physical hardware (laptop, phone) or the data stored locally on those devices."
        }
      },
      {
        "@type": "Question",
        "name": "What is 'Wrongful Retention'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is the act of keeping possession of property after the legal right to possess it has ended (e.g., after resignation or termination)."
        }
      },
      {
        "@type": "Question",
        "name": "How much compensation can I claim for data theft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the IT Act, you can claim compensation up to 5 crore rupees for data theft or damage to the computer system, depending on the actual loss suffered by the business."
        }
      },
      {
        "@type": "Question",
        "name": "Can I go to the employee's home to recover the laptop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should not enter their home without permission as it can lead to charges of 'criminal trespass.' It is better to use legal notices or the police to facilitate the recovery."
        }
      },
      {
        "@type": "Question",
        "name": "What if the employee returns the laptop damaged?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can deduct the repair or replacement cost from their full and final settlement, provided you have evidence (like a joining-time asset checklist) of the laptop's original condition."
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
      { "@type": "ListItem", "position": 3, "name": "Recovery of Company Assets", "item": "https://www.amalegalsolutions.com/notice-for-recovery-of-company-assets-from-employee" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Asset Recovery Legal Service",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1780" }
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
              Employee <span className="text-[#D29E0D]">Refusing to Return</span> Assets?
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Laptops, mobile phones, and sensitive data are company property. Wrongful retention is a criminal offense. Learn the legal steps to recover your assets and protect your proprietary information under IPC 406 and the IT Act.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Recover Your Property
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Asset Helpline
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
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Vulnerability of Company Assets</h2>
              <p>
                In the modern "Remote Work" and "Hybrid" world, a company's physical and digital assets are scattered far beyond the four walls of its office. Laptops, mobile phones, tablets, and specialized hardware are now routinely entrusted to employees. While this flexibility has boosted productivity, it has also created a significant legal vulnerability for organizations.
              </p>
              <p>
                A recurring problem for HR departments and IT teams in India is the "exit-asset gap." This occurs when an employee resigns or is terminated but fails to return the company property in their possession. What starts as a simple "I'll drop it off next week" often turns into weeks of ghosting, leaving the company without its hardware and, more dangerously, with sensitive data out of its control.
              </p>
              <p>
                Wrongful retention of company assets is not just a breach of policy; it is a serious legal issue. Under the Indian Penal Code, it can cross the line into "Criminal Breach of Trust." Furthermore, if the employee is accessing or copying data from those devices after their employment has ended, they are violating the Information Technology Act, 2000.
              </p>
              <p>
                At AMA Legal Solutions, we understand that for a business, a laptop is not just a machine worth fifty thousand rupees; it is a portal to the company's intellectual property. We specialize in rapid asset recovery through a combination of strategic legal notices, police intervention, and civil litigation. This guide will provide you with the legal tools to ensure that your company property remains exactly that—your property.
              </p>
            </section>

            <section id="identifying-wrongful-retention" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">What is Wrongful Retention?</h2>
              <p>
                Wrongful retention is a legal concept where a person who originally had a lawful right to possess a property continues to keep it after that right has expired. In the context of employment, your right to possess the company laptop ends the moment your employment is terminated or your resignation is accepted.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 mb-8">
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <FaExclamationTriangle /> Common Scenarios of Asset Misappropriation:
                </h4>
                <ul className="space-y-4 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Post-Resignation Ghosting:</strong> The employee stops answering calls and emails regarding asset return after leaving.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>The "Damage" Excuse:</strong> Claiming the device was stolen or lost without providing a police FIR.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Leverage Tactic:</strong> Refusing to return the laptop until certain "unjustified" salary demands are met.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Data Hoarding:</strong> Keeping the device to copy proprietary code, client lists, or trade secrets.</span>
                  </li>
                </ul>
              </div>
              <p>
                It is vital to have a signed "Asset Allocation Form" for every piece of hardware given to an employee. This form should include the serial number, the value of the asset, and a clear clause stating that the employee is a "bailee" of the property and must return it immediately upon exit.
              </p>
            </section>

            <section id="criminal-breach-trust" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Criminal Breach of Trust: IPC 406</h2>
              <p>
                When an employer gives a laptop to an employee, they are "entrusting" them with the property. Under <strong>Section 405 of the Indian Penal Code (IPC)</strong>, whoever is entrusted with property and "dishonestly misappropriates" or "converts it to his own use" commits Criminal Breach of Trust.
              </p>
              <p>
                <strong>Section 406</strong> provides the punishment for this offense, which can include imprisonment for up to three years or a fine, or both. If the employee is a servant or clerk (which includes most employees), <strong>Section 408</strong> applies, providing for even stricter punishment of up to seven years.
              </p>
              <p>
                The key word here is "dishonestly." If an employee refuses to return the asset despite multiple reminders and a legal notice, their intent is legally presumed to be dishonest. This moves the matter from a "civil dispute" to a "criminal offense," allowing the employer to involve the police.
              </p>
            </section>

            <section id="it-act-violations" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">IT Act & Data Recovery: Protecting the Digital Core</h2>
              <p>
                In today's digital economy, the hardware is often less valuable than the data it contains. If a former employee uses a company device to access the company's cloud servers or copies local data, they are violating the <strong>Information Technology Act, 2000</strong>.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-6 flex items-center gap-2">
                  <FaDatabase /> Relevant IT Act Provisions:
                </h4>
                <ul className="space-y-6">
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Section 43 (Data Theft)</h5>
                    <p className="text-sm">Provides for massive compensation (up to 5 crore rupees) for unauthorized downloading, copying, or extraction of data.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Section 66 (Hacking)</h5>
                    <p className="text-sm">Criminal punishment for anyone who dishonestly or fraudulently accesses a computer system to cause damage.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Section 72 (Breach of Privacy)</h5>
                    <p className="text-sm">Punishment for disclosing electronic records or personal information without the consent of the person concerned.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="legal-notice-power" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Power of the Legal Notice: The First Strike</h2>
              <p>
                Most employees who keep company assets do so because they think the company won't "bother" with a small-value item like a laptop. They often change their mind the moment a formal legal notice from an advocate arrives at their doorstep.
              </p>
              <p>
                A legal notice for asset recovery must be precise. It should mention the exact serial number of the device, the date it was allocated, and the specific section of the IPC and IT Act that the employee is currently violating. It must provide a final deadline (usually 3 to 7 days) for the return of the property, failing which the employer will initiate criminal proceedings.
              </p>
              <p>
                At AMA Legal Solutions, our notices are designed to emphasize the "criminal" nature of the act. We find that the fear of a police record—which would destroy their chances of future employment—is the most effective way to ensure the immediate return of assets.
              </p>
            </section>

            <section id="immediate-steps" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Immediate Recovery Protocol: Action Steps</h2>
              <p>
                If you discover an employee is withholding assets, you must act according to a strict protocol to protect your legal standing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaDatabase className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Remote Wipe</h4>
                    <p className="text-sm text-gray-600">If possible, use Mobile Device Management (MDM) software to remotely wipe the data and lock the device immediately.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaFileSignature className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Document Reminders</h4>
                    <p className="text-sm text-gray-600">Send three reminders via email and WhatsApp. Keep screenshots of these communications as proof of their refusal to return property.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaLock className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Revoke Credentials</h4>
                    <p className="text-sm text-gray-600">Instantly revoke all access to company emails, Slack, and cloud databases to prevent any data breach.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaGavel className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Issue Legal Notice</h4>
                    <p className="text-sm text-gray-600">If the third reminder is ignored, involve a lawyer to issue a formal demand under IPC sections 406 and 408.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="filing-fir" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Filing a Police FIR: When the Law Steps In</h2>
              <p>
                If the legal notice does not yield results, the employer has every right to file a First Information Report (FIR) at the local police station. The complaint should be filed for "Criminal Breach of Trust" (IPC 406) and "Theft" (IPC 379) if the assets were taken without permission.
              </p>
              <p>
                Once an FIR is registered, the police have the power to search the employee's premises and recover the property. Most employees will return the laptop the moment the police give them a "friendly call" to report to the station. Having a criminal case pending against you makes it impossible to get a background check cleared for a new job, which is a powerful deterrent.
              </p>
            </section>

            <section id="civil-recovery" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Civil Suit for Recovery: Claiming the Value</h2>
              <p>
                In addition to the criminal path, the employer can file a <strong>Summary Suit</strong> (Order 37 CPC) for the recovery of the money. If the laptop is lost or damaged beyond repair, the suit can be for the "Replacement Value" of the asset plus any administrative costs incurred by the company.
              </p>
              <p>
                A civil suit also allows the employer to claim "consequential damages." For example, if the laptop contained the only copy of a critical project and the loss of that data caused a project delay, the employee can be sued for the resulting loss of business.
              </p>
            </section>

            <section id="withholding-dues" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Withholding Full & Final Settlement</h2>
              <p>
                The most common way employers recover assets is by withholding the "Full and Final (F&F) Settlement." This is generally legal, provided the employment contract states that the settlement is subject to the return of all company property.
              </p>
              <p>
                However, be careful. If the value of the laptop is fifty thousand and the F&F is five lakhs, you cannot withhold the entire five lakhs indefinitely. It is better to calculate the "replacement cost" of the asset, deduct it from the F&F, and pay the balance, while clearly stating in a letter why the deduction was made. This protects the employer from claims of "illegal withholding of wages" in a labor court.
              </p>
            </section>

            <section id="data-privacy" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Data Privacy & Proprietary Information</h2>
              <p>
                The real danger of a missing laptop is not the hardware but the "proprietary information." This includes client databases, source code, financial projections, and strategic plans.
              </p>
              <p>
                The legal notice must emphasize that the employee is currently in "unauthorized possession" of confidential data. This sets the stage for a <strong>Permanent Injunction</strong>. A court can order the employee to permanently delete any data they have and ban them from using that data in their new job. If they violate this injunction, it is considered "Contempt of Court," which carries jail time.
              </p>
            </section>

            <section id="recovering-intellectual-property" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Recovering Intellectual Property</h2>
              <p>
                If the employee has created intellectual property (like code or designs) using company assets and then refuses to hand over the "source files," they are violating the <strong>Copyright Act, 1957</strong>.
              </p>
              <p>
                Under Section 17 of the Copyright Act, any work created by an employee during the course of employment is the property of the employer. Withholding these files is a violation of the employer's copyright. You can sue for the "delivery up" of these files and an "account of profits" if the employee tries to sell or use that work elsewhere.
              </p>
            </section>

            <section id="ama-helps" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How AMA Legal Solutions Assists Employers</h2>
              <p>
                At AMA Legal Solutions, we act as the rapid-response team for asset recovery. We understand that time is of the essence when it comes to hardware and data.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 my-8">
                <h4 className="font-bold text-[#30261C] mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-[#D29E0D]" /> Our Asset Recovery Services:
                </h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Strategic Legal Notices:</strong> Powerful notices that emphasize criminal liability to ensure immediate return.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Police Liaison:</strong> We help you draft and file the FIR and work with the local station to facilitate recovery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Injunction Suits:</strong> Emergency court filings to stop the use or transfer of sensitive data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>F&F Settlement Advice:</strong> Legally sound advice on how to withhold dues without inviting labor lawsuits.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Victory Case Insights: Successful Asset Recoveries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "An employee left with a 2-lakh MacBook and ghosted us. AMA sent a legal notice mentioning IPC 406. The employee's father called us the next day, returned the laptop, and apologized. They are experts in these sensitive situations."
                  </p>
                  <p className="font-bold text-sm">Operations Manager, Fintech Startup, Bangalore</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "A developer refused to hand over the source code and kept the company laptop. AMA helped us file a cyber complaint. The police recovered the laptop within 48 hours, and we got our code back. Truly life-saving service."
                  </p>
                  <p className="font-bold text-sm">CTO, E-commerce Firm, Mumbai</p>
                </div>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">Can an employee keep the laptop if I haven't paid their last salary?</h4>
                  <p>No. These are two separate issues. The employee must return the company property first. If the salary is due, they should pursue it through legal channels (like a labor court) rather than illegally keeping company hardware.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is a 'Demand Notice' enough to involve the police?</h4>
                  <p>Yes. A demand notice proves that the employee was given a chance to return the property and refused. This refusal is the 'dishonest intent' needed to file a criminal complaint for Breach of Trust.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What if the employee has left the country?</h4>
                  <p>We can still issue a legal notice to their permanent address in India and initiate a criminal case. This will result in an 'Open Warrant' that will cause them significant trouble when they return to India or try to renew their passport.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I sue the new employer for the stolen assets?</h4>
                  <p>Generally, you sue the employee for the hardware. However, you can sue the new employer for 'Injunction' if they are benefiting from the data or trade secrets stored on that device.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What qualifies as 'Company Property'?</h4>
                  <p>Everything: Laptops, mobile phones, ID cards, access keys, SIM cards, proprietary documents, and even physical files. All these must be returned upon exit.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">How long should I wait before sending a legal notice?</h4>
                  <p>If the assets are not returned on the day of exit, send a reminder immediately. If they are not returned within 3 days, involve a lawyer for a formal notice. Speed is vital to prevent data loss.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can an employee claim the laptop as 'compensation'?</h4>
                  <p>No. An employee cannot unilaterally decide to keep company property as a substitute for salary or bonuses. This is a criminal misappropriation of property.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What is a 'Search Warrant'?</h4>
                  <p>If a criminal case is filed, the Magistrate can issue a search warrant, allowing the police to enter the employee's premises and recover the company's property by force if necessary.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Does 'Buy-Back' of laptops exist?</h4>
                  <p>Many companies allow employees to buy their used laptops after 3-4 years at a depreciated value. However, this must be a formal agreement signed by both parties.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I block their LinkedIn if they don't return the laptop?</h4>
                  <p>You cannot 'block' their personal account, but you can post a 'public notice' (after legal advice) stating that the individual is in unauthorized possession of company property to warn other employers.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Recover Your Assets. Protect Your Business.</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Don't let former employees walk away with your hardware or your data. Our expert lawyers at AMA Legal Solutions are ready to help you recover your property and enforce your rights.
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

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">The Ethical Path: Stewardship and Trust</h2>
            <p>
              The relationship between an employer and an employee is built on stewardship. The employer provides the tools, and the employee agrees to use them for the benefit of the organization. When an employee keeps an asset, they are not just taking a piece of hardware; they are violating that sacred trust.
            </p>
            <p>
              While legal action is necessary, the best defense is a strong "Asset Management Policy." Use digital tracking, maintain a clear inventory, and make the asset return process as easy as possible (e.g., provide a courier pick-up). Organizations that have a professional and transparent exit process rarely face these issues.
            </p>
            <p>
              However, when trust is broken intentionally, the organization must act to protect the interests of its shareholders and its remaining employees. It is about maintaining the principle that company resources are for the collective good, not individual gain.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">The Power of the 'Digital Fingerprint'</h2>
            <p>
              Every modern device leaves a digital fingerprint. If a former employee logs into a personal account from a company laptop, or connects it to their home Wi-Fi, that information is often logged. This "digital evidence" is incredibly powerful in both criminal and civil court.
            </p>
            <p>
              We advise our clients to conduct a "Forensic Exit Audit" for any high-value employee. This involves checking if any large files were transferred to personal USB drives or cloud accounts in the final days of employment. If theft is discovered, this evidence makes the recovery process much faster and more certain.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">Conclusion: Safeguard Your Future Today</h2>
            <p>
              Company assets are the fuel for your business growth. Don't let that fuel be stolen. Whether it's a single mobile phone or a fleet of high-end laptops, every piece of property matters because every piece of property contains a piece of your business's future.
            </p>
            <p>
              Take a stand. Document your claims, issue the legal notices, and if necessary, involve the authorities. By being firm today, you are preventing future misappropriations and building a culture of accountability.
            </p>
            <p>
              Let AMA Legal Solutions be your rapid-response partner in asset recovery. We handle the legal complexity, the police liaison, and the court filings, so you can focus on what you do best—running your business. Your property belongs to you; let us help you get it back.
            </p>

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Recover Your Assets</h4>
              <p className="text-sm opacity-80 mb-6">
                Our specialized lawyers handle rapid asset recovery and data protection. We stop misappropriation and recover company property legally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Criminal Breach of Trust Filing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Laptop & Data Recovery Suits</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Police & Cyber Cell Liaison</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Get Legal Support
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
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Asset Recovery Helpline</p>
              <a href="tel:+918700343611" className="text-xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors">
                +91 8700343611
              </a>
              <p className="text-[10px] text-gray-400 mt-2 italic">Corporate Property Protection</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

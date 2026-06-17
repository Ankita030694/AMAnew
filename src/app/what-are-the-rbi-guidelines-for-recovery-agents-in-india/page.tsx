import React from "react";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "RBI Guidelines for Recovery Agents: Rights & Complaints",
  description:
    "Facing harassment from loan recovery agents? Read the official RBI guidelines on calling hours, privacy protection, and how to file a legal complaint.",
  keywords: "RBI guidelines for recovery agents, debt recovery process, permitted calling hours, harassment by recovery agents, Regulated Entities (REs), debtor privacy rights",
  alternates: {
    canonical: "https://www.amalegalsolutions.com/what-are-the-rbi-guidelines-for-recovery-agents-in-india",
  },
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "legal-foundation", title: "The Legal Foundation: RBI Circular" },
  { id: "timing-rules", title: "Permitted Calling Hours" },
  { id: "privacy-rights", title: "Debtor Privacy Rights" },
  { id: "harassment-ban", title: "Prohibition of Intimidation" },
  { id: "vicarious-liability", title: "Vicarious Liability of Banks" },
  { id: "action-plan", title: "Step-by-Step Action Plan" },
  { id: "ama-connect", title: "AMA Connect App Support" },
  { id: "testimonials", title: "Client Success Stories" },
  { id: "summary-table", title: "Summary of Guidelines" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "RBI Guideline Violation Complaint", href: "/rbi-guideline-violation-complaint" },
  { title: "Legal Rights After Loan Default", href: "/legal-rights-after-loan-default" },
  { title: "One-Time Settlement Assistance", href: "/one-time-settlement-ots-legal-assistance" },
  { title: "Legal Notice for Loan Harassment", href: "/legal-notice-for-loan-settlement-harassment" },
  { title: "Stop Recovery Agent Home Visits", href: "/how-do-i-stop-recovery-agent-from-coming-home" },
];

export default function RBIRecoveryAgentsGuide() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "RBI Recovery Guidelines", href: "/what-are-the-rbi-guidelines-for-recovery-agents-in-india" },
  ];

  // JSON-LD Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://www.amalegalsolutions.com/articles" },
      { "@type": "ListItem", "position": 3, "name": "RBI Recovery Guidelines", "item": "https://www.amalegalsolutions.com/what-are-the-rbi-guidelines-for-recovery-agents-in-india" }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Are the RBI Guidelines for Recovery Agents in India? A Complete Debtor's Guide",
    "description": "Comprehensive guide on how to identify RBI violations and defend yourself against recovery agent harassment.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-06-16",
    "dateModified": "2026-06-16",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/what-are-the-rbi-guidelines-for-recovery-agents-in-india" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the official calling hours for recovery agents in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under RBI guidelines, recovery agents are strictly permitted to contact debtors (via calls, messages, or physical visits) only between 8:00 AM and 7:00 PM. Contact outside these hours is a regulatory violation."
        }
      },
      {
        "@type": "Question",
        "name": "Can recovery agents call my family members, friends, or colleagues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Recovery agents are prohibited from contacting your family, friends, or colleagues to discuss your debt or demand payment. They may contact third parties only to locate you if you have become unreachable."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if a recovery agent threatens me or uses abusive language?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Document the exchange by recording the call or saving screenshots of the messages. Submit a formal complaint to the bank's Principal Nodal Officer, and escalate the matter to the RBI Ombudsman if it remains unresolved after 30 days. For threats to your physical safety, file a complaint with the local police."
        }
      },
      {
        "@type": "Question",
        "name": "Are banks legally responsible for the actions of their recovery agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under the principle of vicarious liability, banks and NBFCs are responsible for the conduct of their outsourced recovery agents. Lenders are liable for regulatory penalties if their agents violate the RBI's Fair Practices Code."
        }
      },
      {
        "@type": "Question",
        "name": "How can I file a complaint with the RBI against recovery harassment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If a lender does not resolve your complaint within 30 days, you can file a complaint with the RBI Ombudsman through the online Complaint Management System (CMS) at cms.rbi.org.in."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Legal Protection from Recovery Agent Harassment",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1940" },
    "review": [
      {
        "@type": "Review",
        "author": "Surendra Rao",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
      },
      {
        "@type": "Review",
        "author": "Vinod Marskole",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
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
              RBI Guidelines for <span className="text-[#D29E0D]">Recovery Agents</span> in India
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Banks and NBFCs are legally accountable for the methods used to collect debts. If you are experiencing aggressive visits or constant calls, learn the strict rules established by the Reserve Bank of India to defend your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Stop Harassment Now
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Free Legal Advice
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
        
        {/* Left Column - Table of Contents */}
        <aside className="lg:w-[20%] hidden lg:block">
          <div className="sticky top-32">
            <h4 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-2">Guide Contents</h4>
            <TableOfContents sections={sections} orientation="vertical" />
          </div>
        </aside>

        {/* Middle Column - Content */}
        <main className="lg:w-[55%]">
          <article className="prose prose-lg max-w-none text-[#30261C]/90 leading-relaxed">
            
            {/* Direct Answer Box */}
            <div className="bg-amber-50 p-6 rounded-2xl border-l-8 border-[#D29E0D] mb-12 shadow-sm">
              <p className="text-[#30261C] font-medium text-lg italic leading-relaxed">
                Under the Reserve Bank of India (RBI) guidelines, recovery agents cannot harass, threaten, or breach the privacy of debtors or their families. Permitted calling hours are strictly between 8:00 AM and 7:00 PM. Banks and NBFCs are legally liable for agent misconduct, and violators face strict RBI penalties.
              </p>
            </div>

            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Reality of Loan Recovery in India</h2>
              <p>
                In the Indian financial landscape, taking a loan is often a key step toward achieving personal milestones, expanding a business, or managing emergency expenses. However, when financial setbacks occur, borrowers can find themselves struggling to meet repayment schedules. While financial institutions have a legal right to seek recovery, the methods used to do so are strictly regulated. 
              </p>
              <p>
                Unfortunately, many consumers facing loan defaults are subjected to aggressive tactics, threats, and public shaming by recovery personnel. Lenders sometimes act as if a default gives them permission to ignore basic civil rights. This is incorrect. Under Indian law, loan default is a civil breach of contract, not a criminal offense. The regulator protects the dignity and privacy of every borrower.
              </p>
              <p>
                By understanding the regulations established by the Reserve Bank of India, you can protect yourself from unlawful debt collection practices. This comprehensive guide outlines the rules that banks and financial firms must follow, the legal rights you hold, and the steps you can take if these boundaries are crossed.
              </p>
            </section>

            <section id="legal-foundation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Legal Foundation: RBI Circular on Recovery Agents</h2>
              <p>
                To maintain ethical collection standards, the central bank has issued clear instructions to all lending institutions. The most significant recent directive is the **RBI circular on recovery agents** issued on August 12, 2022 (*RBI/2022-23/108*), which reinforced and expanded the rules under the **Fair Practices Code**.
              </p>
              <p>
                These regulations are binding on all **Regulated Entities (REs)**. This term covers all commercial banks, cooperative banks, regional rural banks, asset reconstruction companies (ARCs), and **Non-Banking Financial Companies (NBFCs)**. The circular was specifically updated to address modern challenges, such as the use of digital lending apps, social media harassment, and aggressive tele-calling.
              </p>
              <p>
                The primary purpose of these guidelines is to ensure that the **debt recovery process** is conducted with respect, transparency, and compliance with the law. Banks cannot outsource their collection duties to agencies that use intimidation to recover funds.
              </p>
            </section>

            <section id="timing-rules" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Permitted Calling Hours: The Timing Protocol</h2>
              <p>
                One of the most common complaints from borrowers is receiving calls at late hours or early in the morning. To prevent this disruption, the RBI has defined strict limits on when agents can contact you.
              </p>
              <p>
                Recovery agents are allowed to call you or visit your residence only during the **permitted calling hours** of **8:00 AM to 7:00 PM**. 
              </p>
              <p>
                Any communication outside this window-whether it is a phone call, a text message, a WhatsApp alert, or a knock on your door-is a clear violation of the guidelines. If an agent calls you at 10:00 PM or 6:00 AM, they are violating the law, and you should document the call details as evidence for a complaint.
              </p>
            </section>

            <section id="privacy-rights" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Debtor Privacy Rights: Prohibiting Third-Party Disclosures</h2>
              <p>
                Your financial relationship with a lender is a private matter. Recovery agents have no authority to share details of your outstanding dues with anyone else. The guidelines place a strong emphasis on protecting **debtor privacy rights**.
              </p>
              <p>
                Agents are strictly forbidden from contacting your family members, relatives, friends, neighbors, or workplace colleagues to demand payment or share information about your default. They cannot send messages to your social media contacts or post in groups to embarrass you.
              </p>
              <p>
                Lenders may contact references provided in the loan application only to trace your location if you have become completely unreachable. They cannot discuss outstanding amounts, ask references to clear the debt, or harass them in any way.
              </p>
            </section>

            <section id="harassment-ban" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Prohibition of Intimidation: Zero Harassment Tolerance</h2>
              <p>
                The RBI guidelines establish a zero-tolerance policy for **harassment by recovery agents**. The Fair Practices Code strictly prohibits any action that could harm or intimidate a borrower.
              </p>
              <p>
                Prohibited actions include:
              </p>
              <ul className="list-disc ml-6 space-y-4 mb-6">
                <li><strong>Verbal or Physical Intimidation:</strong> Using abusive, threatening, or offensive language during phone calls or visits.</li>
                <li><strong>Public Humiliation:</strong> Making derogatory remarks or attempting to shame you publicly at your home or office.</li>
                <li><strong>Anonymity:</strong> Making anonymous calls or sending messages without clearly identifying the lending institution and recovery agency.</li>
                <li><strong>Coercion:</strong> Threatening to send police, take immediate possession of properties without court orders, or post your details publicly.</li>
              </ul>
              <p>
                Additionally, agents must display proper credentials during visits. They must carry a valid ID card, a copy of the bank's authorization letter, and their IIBF (Indian Institute of Banking and Finance) recovery agent certification. If they fail to provide these documents, you are not obligated to interact with them.
              </p>
            </section>

            <section id="vicarious-liability" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Vicarious Liability: Why Banks Are Legally Responsible</h2>
              <p>
                A key defense historically used by banks was to blame third-party recovery agencies for any misconduct. The RBI has addressed this through the principle of vicarious liability.
              </p>
              <p>
                Under the guidelines, the bank or NBFC is responsible for the conduct of the agents they hire. If an outsourced recovery agent uses abusive language, threatens a debtor, or calls outside the permitted hours, the bank is held legally accountable.
              </p>
              <p>
                If you choose to seek legal support or file a complaint, it should be directed at the bank or NBFC that holds your loan. The regulator expects institutions to supervise their agents and ensure they comply with the Fair Practices Code.
              </p>
            </section>

            <section id="action-plan" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Step-by-Step Action Plan: How to Respond to Harassment</h2>
              <p>
                If you are facing harassment from recovery agents, it is important to take structured steps to address the issue. 
              </p>
              <p>
                Follow this step-by-step plan to file a complaint:
              </p>
              <ol className="list-decimal ml-6 space-y-6 mb-8">
                <li>
                  <strong>Gather Evidence:</strong> Record all phone conversations where agents use abusive language or make threats. Keep a log of call times showing contact outside the 8:00 AM to 7:00 PM window. Save screenshots of WhatsApp messages or SMS alerts.
                </li>
                <li>
                  <strong>Contact the Bank's Nodal Officer:</strong> Submit a formal complaint to the bank's grievance redressal cell. You can escalate the issue to the Principal Nodal Officer if you do not receive a satisfactory response. The bank is required to resolve the issue within 30 days.
                </li>
                <li>
                  <strong>Escalate to the RBI Ombudsman:</strong> If the bank does not resolve your complaint within 30 days, or if you are unsatisfied with their decision, file a complaint on the official RBI Complaint Management System (CMS) portal at <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#D29E0D] hover:underline">cms.rbi.org.in</a>.
                </li>
                <li>
                  <strong>Seek Legal Recourse:</strong> For serious offenses involving threats to physical safety, property trespassing, or character defamation, you can file a complaint with the local police or issue a legal notice through a qualified advocate.
                </li>
              </ol>
            </section>

            <section id="ama-connect" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">AMA Connect App: Your Digital Tool for Debt Disputes</h2>
              <p>
                Managing outstanding debts while dealing with aggressive collection tactics can be challenging. To assist borrowers in this situation, the **AMA Legal Solutions app (AMA Connect)** provides a secure platform to organize your case.
              </p>
              <p>
                Instead of managing scattered call logs, recording files, and messages manually, you can use the app to:
              </p>
              <ul className="list-disc ml-6 space-y-4 mb-6">
                <li><strong>Organize Evidence:</strong> Upload call recordings, text screenshots, and visit videos to a central, organized dashboard.</li>
                <li><strong>Consult Legal Experts:</strong> Connect with a team of lawyers specializing in debt disputes, notice replies, and debt resolution.</li>
                <li><strong>Draft Notices:</strong> Receive assistance in drafting replies to bank notices and preparing complaints for the RBI Ombudsman.</li>
              </ul>
              <p>
                Using a structured digital dashboard helps ensure your documentation is prepared correctly if you need to present it to regulatory authorities.
              </p>
            </section>

            <section id="testimonials" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Client Success Stories: Verified Testimonials</h2>
              <p>
                The effectiveness of structured legal support is reflected in the experiences of individuals who have successfully resolved debt-related disputes. The following verified testimonials highlight the impact of professional guidance:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                    "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
                  </p>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm">Surendra Rao</h5>
                    <div className="text-amber-500 text-xs font-semibold">★★★★★ Rating</div>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                    "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
                  </p>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm">Vinod Marskole</h5>
                    <div className="text-amber-500 text-xs font-semibold">★★★★★ Rating</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="summary-table" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Summary Table: Recovery Agent Rules of Conduct</h2>
              <p>
                This table provides a quick reference to distinguish between permitted collection activities and prohibited harassment under RBI rules:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-[#EBE9E4]">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-[#30261C]">Category</th>
                      <th className="px-4 py-3 text-left font-bold text-[#30261C]">Permitted (Do's)</th>
                      <th className="px-4 py-3 text-left font-bold text-[#30261C]">Prohibited (Dont's)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Calling Time</td>
                      <td className="px-4 py-3">8:00 AM to 7:00 PM</td>
                      <td className="px-4 py-3">Any time before 8:00 AM or after 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Debtor Privacy</td>
                      <td className="px-4 py-3">Contacting the debtor directly at their home or phone number</td>
                      <td className="px-4 py-3">Contacting family members, friends, or colleagues to demand payments</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Behavior</td>
                      <td className="px-4 py-3">Polite discussion and verification of pending accounts</td>
                      <td className="px-4 py-3">Verbal abuse, physical threats, public shaming, or anonymous messages</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Credentials</td>
                      <td className="px-4 py-3">Displaying IIBF ID card and bank authorization letters</td>
                      <td className="px-4 py-3">Visiting without identification or proper authorization letters</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Lender Liability</td>
                      <td className="px-4 py-3">Supervising recovery firms and resolving client complaints</td>
                      <td className="px-4 py-3">Claiming zero responsibility for third-party agent behavior</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">What are the official calling hours for recovery agents in India?</h4>
                  <p>Under RBI guidelines, recovery agents are strictly permitted to contact debtors (via calls, messages, or physical visits) only between 8:00 AM and 7:00 PM. Contact outside these hours is a regulatory violation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">Can recovery agents call my family members, friends, or colleagues?</h4>
                  <p>No. Recovery agents are prohibited from contacting your family, friends, or colleagues to discuss your debt or demand payment. They may contact third parties only to locate you if you have become unreachable.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">What should I do if a recovery agent threatens me or uses abusive language?</h4>
                  <p>Document the exchange by recording the call or saving screenshots of the messages. Submit a formal complaint to the bank's Principal Nodal Officer, and escalate the matter to the RBI Ombudsman if it remains unresolved after 30 days. For threats to your physical safety, file a complaint with the local police.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">Are banks legally responsible for the actions of their recovery agents?</h4>
                  <p>Yes. Under the principle of vicarious liability, banks and NBFCs are responsible for the conduct of their outsourced recovery agents. Lenders are liable for regulatory penalties if their agents violate the RBI's Fair Practices Code.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">How can I file a complaint with the RBI against recovery harassment?</h4>
                  <p>If a lender does not resolve your complaint within 30 days, you can file a complaint with the RBI Ombudsman through the online Complaint Management System (CMS) at cms.rbi.org.in.</p>
                </div>
              </div>
            </section>

            {/* Final CTA Box */}
            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Protect Your Rights Today</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Do not suffer in silence. If a recovery agent has crossed the line, our legal experts are here to help you draft notices, respond to banks, and restore your peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Speak to a Lawyer
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> Contact via WhatsApp
                  </button>
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">Building a Path to Financial Peace</h2>
            <p>
              Dealing with debt default is stressful, but understanding your legal boundaries can help you regain control. Lenders are required to respect the rules established by the regulator. By documenting any violations and using formal grievance channels, you can make sure your voice is heard. 
            </p>
            <p>
              If you need assistance in managing settlement discussions, preparing legal notice replies, or filing complaints against harassment, consider seeking support from professionals who can guide you through the process. Your financial recovery and peace of mind are important.
            </p>

          </article>
        </main>

        {/* Right Column - Related & Call Action */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Defend Against Harassment</h4>
              <p className="text-sm opacity-80 mb-6">
                Our legal team specializes in assisting debtors facing recovery agent harassment. We help draft notices and represent you before regulatory bodies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Document Call/Visit Violations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">File RBI Ombudsman Complaints</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Negotiate Fair Loan Settlements</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Request Free Assistance
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
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Helpline Number</p>
              <a href="tel:+918700343611" className="text-xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors">
                +91 8700343611
              </a>
              <p className="text-[10px] text-gray-400 mt-2 override-italic">Free Initial Assessment</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

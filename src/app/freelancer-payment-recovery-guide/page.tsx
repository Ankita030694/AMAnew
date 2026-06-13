import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaHandshake, FaFileContract, FaCreditCard, FaBriefcase, FaListAlt } from "react-icons/fa";

export const metadata = {
  title: "Freelancer Payment Recovery Guide | AMA Legal Solutions",
  description: "Struggling with unpaid freelance invoices? Follow our step-by-step recovery guide for freelancers, covering legal notices, MSME Samadhaan, and summary suits.",
  keywords: "freelancer payment recovery guide, unpaid freelance invoices, recover unpaid freelance fees india, msme samadhaan for freelancers, written freelance contract, legal notice for unpaid fees, small claims court freelancer, cheque bounce section 138 ni act, summary suit order 37 cpc, section 420 ipc cheating",
};

const sections = [
  { id: "proactive-protection", title: "1. Proactive Payment Protection" },
  { id: "recovery-roadmap", title: "2. The Payment Recovery Roadmap" },
  { id: "judicial-remedies", title: "3. Judicial & Statutory Remedies" },
  { id: "evidence-checklist", title: "4. Essential Evidence Checklist" },
  { id: "summary-pathways", title: "5. Summary of Recovery Pathways" },
  { id: "faqs", title: "6. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Legal Notice for Freelance Payment Recovery", href: "/legal-notice-for-freelance-payment-recovery" },
  { title: "Notice for Recovery of Professional Fees", href: "/notice-for-recovery-of-professional-fees" },
  { title: "Breach of Contract Legal Notice", href: "/breach-of-contract-notice" },
  { title: "MSME Registration for Freelancers", href: "/msme-registration" },
  { title: "Procedure of Sending Legal Notice", href: "/procedure-of-sending-legal-notice" },
];

export default function FreelancerPaymentRecoveryGuidePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Freelancer Payment Recovery Guide", href: "/freelancer-payment-recovery-guide" },
  ];

  // Schema Markup with 5 FAQs matching the user's requirements
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Freelancer Payment Recovery Guide: How to Recover Unpaid Fees in India",
    "description": "Exhaustive legal guide for freelancers in India to recover unpaid professional fees using demand letters, legal notices, and statutory remedies.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-06-13",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/freelancer-payment-recovery-guide" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can a freelancer take legal action without a written contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. In India, verbal agreements and contracts formed via email or WhatsApp are legally binding under the Indian Contract Act, 1872. As long as you can provide documentary evidence of the work requested, delivered, and accepted, you can initiate legal recovery proceedings."
        }
      },
      {
        "@type": "Question",
        "name": "How do I recover payment from a client who is ghosting me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Send a final warning email with a 3-day deadline. If they remain unresponsive, serve a formal legal notice via a registered advocate to their registered business address and email. This formal warning shows serious intent and usually prompts a response or settlement."
        }
      },
      {
        "@type": "Question",
        "name": "Can freelancers file a complaint under MSME Samadhaan for delayed payments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, provided the freelancer has a valid Udyam Registration (MSME registration) at the time of executing the project or contract. MSME registration grants freelancers access to the Samadhaan portal to recover dues with compound interest."
        }
      },
      {
        "@type": "Question",
        "name": "What is the time limit for filing a recovery case against a client?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit or MSME complaint is three (3) years from the date the cause of action arose (typically the invoice due date or the date of last payment/acknowledgment)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I recover late fees and legal costs from the non-paying client?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if your contract specifies late fees or interest charges. Additionally, when serving a legal notice or filing a summary suit under Order 37 CPC, you can claim the legal expenses, lawyer's fees, and pre-litigation costs incurred during the recovery process."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Freelancer Payment Recovery Guide", "item": "https://www.amalegalsolutions.com/freelancer-payment-recovery-guide" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Freelancer Payment Recovery Advisory",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1940" },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rohan D." },
        "reviewBody": "Recovered my design agency's dues within 15 days of sending the advocate-backed notice. Highly professional support.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Tanvi K." },
        "reviewBody": "Got my contract payments back after the client went silent. The MSME Samadhaan strategy recommended by AMA worked perfectly.",
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
            <span className="inline-block text-[#D29E0D] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 bg-[#D29E0D]/10 px-4 py-1.5 rounded-full">
              Advocate-Backed Recovery Protocol
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Freelancer <span className="text-[#D29E0D]">Payment Recovery</span> Guide
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Recover unpaid freelance invoices, navigate contract breaches, and initiate statutory claims using proven legal frameworks in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Start Recovery Process
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Recovery Helpline
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
            
            {/* Direct Answer Box */}
            <div className="bg-[#EBE9E4] p-6 rounded-2xl mb-8 font-light italic text-sm text-[#30261C]/80 border-l-4 border-[#D29E0D]">
              To recover unpaid freelance fees in India, send structured email reminders first. If ignored, dispatch a formal demand letter, followed by a legal notice served via an advocate. If the debtor remains unresponsive, pursue fast-track options like the MSME Samadhaan portal or a civil summary suit under Order 37 CPC.
            </div>

            <section id="proactive-protection" className="mb-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">1. Proactive Payment Protection: Preventing Delayed Payments</h2>
              <p>
                Navigating client payment issues requires a thorough approach. By following a structured <a href="https://www.legalrecovery.in/freelancer-payment-recovery-guide" target="_blank" className="text-[#D29E0D] hover:underline font-bold">freelancer payment recovery guide</a>, you can systematically escalate your demand and protect your business interests legally. Proactive measures are the first line of defense in avoiding the administrative burden of collections and debt recovery.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Clear Service Agreements and Written Contracts</h3>
              <p>
                The primary vulnerability for many independent contractors in India is the lack of a structured, <strong>written freelance contract</strong>. A verbal agreement or a loose hand-shake deal provides no clear basis for resolving disputes. Under the Indian Contract Act, 1872, oral contracts are technically valid, but proving their terms in court requires significant corroborative evidence, such as email correspondences, WhatsApp logs, or call recordings.
              </p>
              <p>
                A well-drafted service agreement should define the scope of work, project milestones, due dates, billing frequency, and consequences of late payment. By stipulating interest rates for delayed payments (e.g., 18% per annum) or late fee structures in writing, you create a contractual right to claim these additional damages during recovery.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Milestone-Based Payment Structures</h3>
              <p>
                To minimize financial exposure, freelancers should avoid billing 100% of the project fee upon completion. Implementing a milestone-based payment structure spreads the risk throughout the project lifecycle. We recommend securing an upfront deposit of 30% to 50% before commencing any work, especially for new clients. 
              </p>
              <p>
                Divide the remaining project into deliverables with associated payments. If a client defaults on a milestone payment, suspend all work immediately. Continuing to deliver work when previous invoices remain unpaid increases your loss and signals to the client that payment timelines are negotiable.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Automating Invoices and Escalated Follow-Ups</h3>
              <p>
                Efficient billing management prevents administrative delays. Use accounting software to generate professional invoices containing the invoice number, description of services, payment methods, bank details, and the due date. Setting up automated email reminders three days before the due date, on the due date, and at regular intervals afterward ensures that late payments are tracked and addressed immediately.
              </p>
            </section>

            <section id="recovery-roadmap" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. The Payment Recovery Roadmap: Step-by-Step Escalation</h2>
              <p>
                If a client fails to clear unpaid freelance invoices, you must follow a systematic escalation protocol. Moving too quickly to legal action can damage client relations, while waiting too long can lead to the loss of evidence or the client's insolvency.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Step 1: Professional Reminders and Payment Restructuring</h3>
              <p>
                Initial communication should assume that the delay is due to an administrative oversight. Send polite, structured email follow-ups. If the client cites cash flow issues, offer a brief, structured payment plan or a partial payment settlement. This establishes that you are willing to cooperate, which can be helpful if the matter is later presented to a judge.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Step 2: Formal Demand Letter Drafting</h3>
              <p>
                If direct follow-ups are ignored, escalate the matter by sending a formal demand letter. This document is not yet a legal notice, but it serves as a final administrative warning. It must detail the invoice numbers, outstanding amounts, interest charges, work delivered, and set a final deadline (usually 7 days) to settle the dues. Send this letter via registered post and email to establish a clear paper trail.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Step 3: Serving a Formal Legal Notice via an Advocate</h3>
              <p>
                If the demand letter is ignored, you must serve a formal <Link href="/procedure-of-sending-legal-notice" className="text-[#D29E0D] hover:underline font-bold">legal notice for unpaid fees</Link> through a registered advocate. A legal notice drafted and sent on an advocate's letterhead carries significant weight. It indicates to the client that you are prepared to initiate litigation.
              </p>
              <p>
                The notice provides the client with a statutory period (typically 15 to 30 days) to clear the outstanding amount. The notice must contain details of the agreement, the work performed, invoices raised, delivery records, and the consequences of non-compliance, including the filing of civil and criminal cases at the client's cost.
              </p>
            </section>

            <section id="judicial-remedies" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. Judicial & Statutory Remedies for Freelance Recovery in India</h2>
              <p>
                When out-of-court collections fail, freelancers in India can access several judicial and statutory remedies to recover their dues.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">MSME Samadhaan: The Delayed Payment Portal</h3>
              <p>
                Registered micro and small enterprises have access to a powerful recovery tool: the <strong>MSME Samadhaan</strong> portal. Freelancers who obtain a free Udyam Registration can file delayed payment complaints against non-paying buyers. Under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, buyers must clear invoices within 45 days of acceptance.
              </p>
              <p>
                If they fail to do so, they are liable to pay compound interest at three times the bank rate. The MSME Facilitation Council conducts conciliation and arbitration proceedings to resolve the dispute, making it a cost-effective and structured recovery channel.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Summary Suits under Order 37 of the CPC</h3>
              <p>
                For liquid claims (such as unpaid invoices with clear purchase orders or written contracts), freelancers can file a <strong>summary suit under Order 37</strong> of the Code of Civil Procedure (CPC), 1908. Unlike ordinary civil suits, summary suits are fast-track proceedings. The defendant does not have an automatic right to defend the case; they must apply to the court for "leave to defend" by proving they have a genuine defense, preventing the use of delay tactics.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Cheque Bounce Complaints (Section 138 NI Act)</h3>
              <p>
                If a client issues a cheque to clear their dues and that cheque is dishonored by the bank due to insufficient funds, you can initiate action under Section 138 of the Negotiable Instruments (NI) Act, 1881. You must serve a statutory demand notice within 30 days of receiving the memo. If they fail to pay within 15 days, you can file a criminal case in the Magistrate's court.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Criminal Case for Cheating (Section 420 IPC / Section 318 BNS)</h3>
              <p>
                If a client engaged your services with the intent of not paying (such as using fake company details or providing forged documents), you can file a criminal complaint for cheating under <strong>Section 420 of the IPC</strong> (or Section 318 of the Bharatiya Nyaya Sanhita, 2023). Proving criminal intent at the project's start is challenging, but it is a viable route when dealing with fraudulent businesses.
              </p>
            </section>

            <section id="evidence-checklist" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. Essential Evidence Checklist for Legal Action</h2>
              <p>
                To ensure a successful recovery claim, you must maintain a well-documented evidentiary trail. Before approaching a lawyer or filing a complaint, compile:
              </p>
              <ul className="space-y-4 ml-6 list-disc mb-6">
                <li><strong>Signed Contracts & SOWs:</strong> The primary agreement detailing the terms and scope.</li>
                <li><strong>Email Communications:</strong> Instructions, modifications, approvals, and fee confirmations.</li>
                <li><strong>Work Delivery Records:</strong> Final source files, website links, or client sign-off emails.</li>
                <li><strong>Invoices & Reminders:</strong> Detailed invoices and tracking records of follow-up emails.</li>
                <li><strong>Digital logs:</strong> If notices were sent digitally, preserve SMTP delivery logs and WhatsApp screenshots with a Section 63 BSA certificate. Refer to our guide on <Link href="/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts" className="text-[#D29E0D] hover:underline font-bold">electronic notice validity</Link> to ensure digital logs meet court standards.</li>
              </ul>
            </section>

            <section id="summary-pathways" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. Summary of Freelancer Recovery Pathways</h2>
              <p>
                The table below provides a comparison of the primary recovery options available to freelancers in India:
              </p>
              
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm">Recovery Pathway</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Key Requirement</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Estimated Timeline</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Legal Nature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold">Demand Letter</td>
                      <td className="px-6 py-4 text-sm">Written proof of debt & invoices</td>
                      <td className="px-6 py-4 text-sm">7 Days Notice</td>
                      <td className="px-6 py-4 text-sm text-[#D29E0D]">Administrative</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold">Legal Notice via Advocate</td>
                      <td className="px-6 py-4 text-sm">Advocate drafting, formal delivery proof</td>
                      <td className="px-6 py-4 text-sm">15-30 Days Notice</td>
                      <td className="px-6 py-4 text-sm text-[#D29E0D]">Pre-Litigation Warning</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold">MSME Samadhaan</td>
                      <td className="px-6 py-4 text-sm">Udyam Registration at time of agreement</td>
                      <td className="px-6 py-4 text-sm">90-180 Days</td>
                      <td className="px-6 py-4 text-sm text-[#D29E0D]">Statutory Arbitration</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold">Summary Suit (Order 37)</td>
                      <td className="px-6 py-4 text-sm">Written SOW, contract, or invoice</td>
                      <td className="px-6 py-4 text-sm">6-12 Months</td>
                      <td className="px-6 py-4 text-sm text-[#D29E0D]">Civil Court Claim</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold">Sec 138 Cheque Bounce</td>
                      <td className="px-6 py-4 text-sm">Dishonored cheque & return memo</td>
                      <td className="px-6 py-4 text-sm">6-15 Months</td>
                      <td className="px-6 py-4 text-sm text-[#D29E0D]">Criminal Proceedings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">6. Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">Can a freelancer take legal action without a written contract?</h4>
                  <p>Yes. In India, verbal agreements and contracts formed via email or WhatsApp are legally binding under the Indian Contract Act, 1872. As long as you can provide documentary evidence of the work requested, delivered, and accepted, you can initiate legal recovery proceedings.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">How do I recover payment from a client who is ghosting me?</h4>
                  <p>Send a final warning email with a 3-day deadline. If they remain unresponsive, serve a formal legal notice via a registered advocate to their registered business address and email. This formal warning shows serious intent and usually prompts a response or settlement.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can freelancers file a complaint under MSME Samadhaan for delayed payments?</h4>
                  <p>Yes, provided the freelancer has a valid Udyam Registration (MSME registration) at the time of executing the project or contract. MSME registration grants freelancers access to the Samadhaan portal to recover dues with compound interest.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What is the time limit for filing a recovery case against a client?</h4>
                  <p>Under the Limitation Act, 1963, the limitation period to file a civil recovery suit or MSME complaint is three (3) years from the date the cause of action arose (typically the invoice due date or the date of last payment/acknowledgment).</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I recover late fees and legal costs from the non-paying client?</h4>
                  <p>Yes, if your contract specifies late fees or interest charges. Additionally, when serving a legal notice or filing a summary suit under Order 37 CPC, you can claim the legal expenses, lawyer's fees, and pre-litigation costs incurred during the recovery process.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Dedicated Freelancer Recovery Services</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Secure your payments today. Our team drafts demand letters, serves official legal notices, and represents your case before MSME Facilitation Councils.
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

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Get Legal Support</h4>
              <p className="text-sm opacity-80 mb-6">
                Our legal team helps freelancers draft clear contracts, send official demand notices, and handle delayed payment claims.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Udyam Registration Assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Advocate Legal Notices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">MSME Samadhaan Filing</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Contact a Recovery Expert
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
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Recovery Helpline</p>
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

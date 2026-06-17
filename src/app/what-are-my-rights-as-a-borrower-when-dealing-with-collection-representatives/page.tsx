import React from "react";
import Link from "next/link";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Borrower Rights & Collection Rules: Complete Guide",
  description:
    "Know your borrower rights against recovery agent harassment. Read the RBI rules on call timings, privacy, and how AMA Legal Solutions protects you.",
  keywords: "borrower rights, debt recovery agents, Fair Practices Code, Reserve Bank of India, NPA classification, collection representatives",
  alternates: {
    canonical: "https://www.amalegalsolutions.com/what-are-my-rights-as-a-borrower-when-dealing-with-collection-representatives",
  },
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "regulatory-framework", title: "The Regulatory Framework: RBI Fair Practices Code" },
  { id: "core-rights", title: "Core Rights of a Borrower Under RBI Guidelines" },
  { id: "harassment-tactics", title: "What Constitutes Harassment by Recovery Agents?" },
  { id: "grievance-redressal", title: "Step-by-Step Grievance Redressal" },
  { id: "ama-connect", title: "How the AMA Connect App Restores Peace of Mind" },
  { id: "summary-table", title: "Summary of Guidelines" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "RBI Guidelines for Recovery Agents", href: "/what-are-the-rbi-guidelines-for-recovery-agents-in-india" },
  { title: "Legal Rights After Loan Default", href: "/legal-rights-after-loan-default" },
  { title: "One-Time Settlement Assistance", href: "/one-time-settlement-ots-legal-assistance" },
  { title: "Legal Notice for Loan Harassment", href: "/legal-notice-for-loan-settlement-harassment" },
  { title: "Stop Recovery Agent Home Visits", href: "/how-do-i-stop-recovery-agent-from-coming-home" },
];

export default function BorrowerRightsGuide() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Borrower Rights Guide", href: "/what-are-my-rights-as-a-borrower-when-dealing-with-collection-representatives" },
  ];

  // JSON-LD Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://www.amalegalsolutions.com/articles" },
      { "@type": "ListItem", "position": 3, "name": "Borrower Rights Guide", "item": "https://www.amalegalsolutions.com/what-are-my-rights-as-a-borrower-when-dealing-with-collection-representatives" }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Are My Rights as a Borrower When Dealing with Collection Representatives?",
    "description": "Comprehensive guide on borrower rights under the RBI Fair Practices Code, and step-by-step grievance redressal for recovery harassment.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-06-16",
    "dateModified": "2026-06-16",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/what-are-my-rights-as-a-borrower-when-dealing-with-collection-representatives" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can a debt recovery agent visit my workplace or contact my family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Under the RBI Fair Practices Code and privacy guidelines, recovery agents are strictly prohibited from contacting your family members, friends, or employers regarding your debt. They are also barred from visiting your workplace to cause social embarrassment, as this violates your right to privacy."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if a collection representative threatens me with arrest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A loan default is a civil dispute, not a criminal offense, and you cannot be arrested for defaulting. If an agent threatens you with jail or police action, document the threat, record the call, and file a police complaint (FIR) for criminal intimidation, or seek assistance through the AMA Connect app."
        }
      },
      {
        "@type": "Question",
        "name": "What are the legal calling hours for debt recovery agents in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to the Reserve Bank of India (RBI) guidelines, debt recovery agents are only allowed to contact borrowers-either via phone calls or physical home visits-between 8:00 AM and 7:00 PM. Any communication outside this timeframe is a clear violation of the code."
        }
      },
      {
        "@type": "Question",
        "name": "How do I file a complaint against a bank's recovery agent with the RBI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "First, submit a written complaint to your bank's Grievance Redressal Officer. If the bank fails to resolve your grievance within 30 days, you can file an official complaint online with the RBI Integrated Ombudsman via the RBI Complaint Management System (CMS) portal."
        }
      },
      {
        "@type": "Question",
        "name": "Is the bank responsible if a third-party recovery agent harasses me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Banks and NBFCs are vicariously liable for the actions of the third-party agencies they hire. Under RBI rules, lenders are fully responsible for the conduct of their recovery agents and can face severe regulatory penalties and civil damages for agent misconduct."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Borrower Rights Legal Services",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1520" },
    "review": [
      {
        "@type": "Review",
        "author": "Surendra Rao",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
      },
      {
        "@type": "Review",
        "author": "Raaghav Bajaj",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "I want to say the team is helpful and they are handling my case very nicely and providing me the support in dealing with agents or handling legal notices from bank. A big cheers for the ama team."
      },
      {
        "@type": "Review",
        "author": "Sumitkumar Kanoujiya",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "I want to thanks the team for handling my case and providing valuable support in distress and supporting at all the steps be it dealing with agents or handling legal notices from bank."
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
              What Are My Rights as a <span className="text-[#D29E0D]">Borrower</span>?
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              When dealing with collection representatives, knowing your rights is your strongest defense. The Reserve Bank of India strictly regulates the debt recovery process to prevent harassment and protect debtor dignity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Defend Your Rights
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
                Under Reserve Bank of India (RBI) guidelines, borrower rights strictly prohibit harassment by recovery agents. Lenders must adhere to the Fair Practices Code, restricting agent visits and calls to between 8:00 AM and 7:00 PM. Borrowers possess the right to privacy, formal identity verification, and grievance redressal for intimidation.
              </p>
            </div>

            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Reality of Loan Recovery</h2>
              <p>
                When financial hardships strike, managing loan repayments can quickly become an overwhelming challenge. For many, the stress of a budget shortfall is compounded by persistent phone calls, letters, and visits from individuals seeking to collect outstanding dues. Navigating these interactions requires a legal framework to protect individuals. 
              </p>
              <p>
                As a borrower in India, your financial obligations do not strip you of your fundamental civil liberties. The regulatory landscape is designed to balance the recovery rights of financial institutions with the dignity, privacy, and safety of the individual. Knowing where the boundary lies between legitimate recovery actions and unlawful intimidation is the first step toward reclaiming your peace of mind.
              </p>
            </section>

            <section id="regulatory-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Regulatory Framework: RBI Fair Practices Code</h2>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Who Governs Debt Collection in India?</h3>
              <p>
                In the Indian financial ecosystem, the conduct of lenders and their representatives is strictly monitored by the <strong>Reserve Bank of India (RBI)</strong>. The central bank has instituted a robust set of directives, collectively known as the <strong>Fair Practices Code</strong>, which all <strong>commercial banks and NBFCs</strong> (Non-Banking Financial Companies) are legally obligated to follow. 
              </p>
              <p>
                This regulatory framework outlines the minimum standards of ethical behavior that institutions must maintain during every phase of the credit lifecycle, from the initial loan application to the final recovery of outstanding amounts. The code applies not only to the internal staff of these financial institutions but also to any third-party <strong>debt recovery agents</strong> they hire to act on their behalf. The RBI reserves the right to impose severe penalties, license suspensions, or business restrictions on lenders who consistently breach these fair collection practices.
              </p>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">The Legal Nature of a Loan Default</h3>
              <p>
                It is a common misconception that failing to repay a loan on time is a criminal offense that can lead to immediate imprisonment. Under Indian law, a <strong>loan default</strong> is fundamentally treated as a civil dispute-specifically, a breach of a financial contract. When an account goes unpaid for a continuous period of 90 days, lenders classify the debt as a <strong>non-performing asset (NPA)</strong>. 
              </p>
              <p>
                While this classification permits the bank or NBFC to initiate civil litigation, invoke arbitration, or execute security recovery procedures under the SARFAESI Act, it does not constitute a criminal act. Lenders cannot use police machinery or threat of arrest to coerce payments, nor can they treat a defaulting borrower as a fugitive. Understanding that your default is a civil contractual issue provides a critical shield against deceptive threats of police actions or criminal prosecution.
              </p>
            </section>

            <section id="core-rights" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Core Rights of a Borrower Under RBI Guidelines</h2>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">The Right to Identification and Verification</h3>
              <p>
                One of the most vital protections afforded to borrowers is the right to confirm the credentials of any representative claiming to act on behalf of a lender. Under the Fair Practices Code, when a collection agent contacts you by telephone or visits your home, they are required to establish their identity immediately. 
              </p>
              <p>
                If they visit in person, they must present their official employee identification card issued by the agency, a copy of the formal authorization letter issued by the bank or NBFC, and a copy of the specific loan default notice. As a borrower, you are within your legal rights to refuse communication or entry to anyone who cannot provide these documents. This measure prevents unauthorized third parties or fraudulent operators from access to your private information or premises.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Restrictive Contact Hours (8:00 AM to 7:00 PM)</h3>
              <p>
                The RBI recognizes that continuous, round-the-clock collection calls and home visits are a form of psychological harassment. Consequently, the regulatory framework imposes strict temporal boundaries on recovery activities. Collection representatives are permitted to call or visit a borrower's residence only within the designated window of <strong>8:00 AM to 7:00 PM</strong>. 
              </p>
              <p>
                Contacting a borrower late at night or during the early hours of the morning is a direct violation of RBI directives. Additionally, agents are expected to respect the borrower's preferred location and time of contact if such arrangements have been mutually agreed upon and communicated to the lender beforehand.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">The Right to Privacy and Data Confidentiality</h3>
              <p>
                Your debt is a private matter between you and your lending institution. The Fair Practices Code strictly prohibits lenders and their third-party agents from violating your right to privacy. This means collection representatives cannot:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li>Contact your family members, friends, colleagues, or employers to disclose your debt details or pressure you.</li>
                <li>Send threatening messages via public channels, including social media platforms, or publish lists of &quot;defaulters&quot; to cause social embarrassment.</li>
                <li>Visit your workplace to shame you in front of colleagues or supervisors, unless specifically authorized under rare, pre-agreed conditions.</li>
                <li>Share your personal information or contact details with unauthorized third-party databases.</li>
              </ul>
              <p>
                Any attempt to publicly humiliate you or drag uninvolved third parties into your debt dispute is a clear breach of both RBI guidelines and constitutional privacy rights.
              </p>
            </section>

            <section id="harassment-tactics" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">What Constitutes Harassment by Recovery Agents?</h2>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Prohibited Collection Tactics</h3>
              <p>
                While lenders have a legitimate right to pursue outstanding dues, the methods they employ must remain civil. The line between legal recovery and <strong>harassment by recovery agents</strong> is crossed when collectors engage in:
              </p>
              <ol className="list-decimal ml-6 space-y-4 mb-6">
                <li><strong>Verbal Abuse and Threatening Language:</strong> Using vulgar, derogatory, or threatening words during calls or visits.</li>
                <li><strong>Repetitive and Intimidating Calling:</strong> Making dozens of phone calls in a single day, or calling repeatedly within minutes to wear down the borrower's mental resolve.</li>
                <li><strong>Physical Intimidation and Trespassing:</strong> Entering a borrower's house without permission, blocking doorways, or using physical force.</li>
                <li><strong>Misrepresentation of Authority:</strong> Falsely claiming to be police officers, court bailiffs, or legal authorities to scare the borrower into making immediate payments.</li>
              </ol>
              <p>
                If you experience any of these tactics, you are dealing with unlawful harassment, and you should immediately document and report these actions.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">The Responsibility of Lenders for Agent Behavior</h3>
              <p>
                Banks and NBFCs cannot distance themselves from the bad behavior of the agencies they hire. Under the doctrine of vicarious liability, the lending institution is legally responsible for the conduct of its outsourced representatives. The RBI mandates that lenders must perform comprehensive due diligence, including police background checks, before appointing any collection agency. 
              </p>
              <p>
                Lenders are also required to ensure that all agents undergo structured training on the Fair Practices Code and customer relation practices. If an agent violates these rules, the borrower has the right to demand accountability directly from the bank or NBFC, which can be held liable in consumer and civil courts.
              </p>
            </section>

            <section id="grievance-redressal" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Step-by-Step Grievance Redressal for Borrowers</h2>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Level 1: Lodging a Complaint with the Lender</h3>
              <p>
                If you face collection harassment, the first procedural step is to file a formal, written complaint directly with the creditor.
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li><strong>Document the Incident:</strong> Collect call logs, audio recordings, text messages, and CCTV footage of physical visits.</li>
                <li><strong>Write to the Grievance Redressal Officer (GRO):</strong> Locate the email address and physical address of the lender’s GRO on their official website. Send a detailed letter outlining the date, time, and specific actions of the agent, along with your supporting evidence.</li>
                <li><strong>Obtain an Acknowledgment:</strong> Ensure you receive a complaint reference number and acknowledgment. Under regulations, the lender has a maximum of 30 days to investigate and resolve your complaint.</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Level 2: Escalating to the RBI Integrated Ombudsman</h3>
              <p>
                If the bank or NBFC fails to respond within 30 days, rejects your complaint, or provides an unsatisfactory resolution, you have the right to escalate the matter.
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li><strong>The Ombudsman Scheme:</strong> You can file a complaint online through the RBI’s central portal (CMS - Complaint Management System).</li>
                <li><strong>Provide Reference Details:</strong> Submit your original complaint copy, the lender's response (if any), and the evidence of harassment.</li>
                <li><strong>Ombudsman Action:</strong> The RBI Ombudsman has the authority to award compensation to borrowers for harassment, mental agony, and expenses incurred, while imposing penalties on the offending bank or NBFC.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Level 3: Legal Recourse and Civil Remedies</h3>
              <p>
                When harassment escalates to physical threats, trespassing, or blackmail, you should pursue immediate civil and criminal remedies:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li><strong>Police Complaint (FIR):</strong> Visit your local police station and file a First Information Report (FIR) under the Bharatiya Nyaya Sanhita (BNS) for criminal intimidation, extortion, trespassing, or defamation.</li>
                <li><strong>Consumer Courts:</strong> File a case in the District Consumer Disputes Redressal Commission for &quot;deficiency of service&quot; and unfair trade practices, claiming damages for mental harassment.</li>
                <li><strong>Civil Injunctions:</strong> Seek a civil court injunction to restrain the recovery agents from entering your home or workplace unlawfully.</li>
              </ul>
            </section>

            <section id="ama-connect" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How the AMA Connect App Restores Your Peace of Mind</h2>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Comprehensive Support with AMA Legal Solutions</h3>
              <p>
                Dealing with collection pressure alone can feel isolating and terrifying. This is where the <strong>AMA Connect</strong> app, designed by <strong>AMA Legal Solutions</strong>, serves as your primary shield. The app acts as a digital legal partner, helping borrowers manage and document every step of their dispute. 
              </p>
              <p>
                Through AMA Connect, you can securely upload harassment evidence (such as call recordings or screenshots), access legal templates to draft complaints to Nodal Officers, and receive expert legal counsel on debt settlement options. Instead of facing aggressive collectors directly, the AMA Legal Solutions team steps in to handle communications, respond to legal notices, and ensure that your rights under the Fair Practices Code are fully respected, transforming a stressful conflict into a structured, legal resolution.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">Verified Experiences from Fellow Borrowers</h3>
              <p>
                The effectiveness of AMA Legal Solutions in helping borrowers handle collection representatives and resolve debt defaults is reflected in the experiences of those who have used the platform:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 font-sans">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                    &quot;I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance.&quot;
                  </p>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm">Surendra Rao</h5>
                    <div className="text-amber-500 text-xs font-semibold">★★★★★ Rating</div>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                    &quot;I want to say the team is helpful and they are handling my case very nicely and providing me the support in dealing with agents or handling legal notices from bank. A big cheers for the ama team.&quot;
                  </p>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm">Raaghav Bajaj</h5>
                    <div className="text-amber-500 text-xs font-semibold">★★★★★ Rating</div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <p className="text-sm text-gray-600 italic leading-relaxed mb-4">
                    &quot;I want to thanks the team for handling my case and providing valuable support in distress and supporting at all the steps be it dealing with agents or handling legal notices from bank.&quot;
                  </p>
                  <div>
                    <h5 className="font-bold text-gray-950 text-sm">Sumitkumar Kanoujiya</h5>
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
                      <th className="px-4 py-3 text-left font-bold text-[#30261C]">Prohibited (Don'ts)</th>
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
                      <td className="px-4 py-3">Displaying employee ID and bank authorization letters</td>
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
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">Can a debt recovery agent visit my workplace or contact my family?</h4>
                  <p>No. Under the RBI Fair Practices Code and privacy guidelines, recovery agents are strictly prohibited from contacting your family members, friends, or employers regarding your debt. They are also barred from visiting your workplace to cause social embarrassment, as this violates your right to privacy.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">What should I do if a collection representative threatens me with arrest?</h4>
                  <p>A loan default is a civil dispute, not a criminal offense, and you cannot be arrested for defaulting. If an agent threatens you with jail or police action, document the threat, record the call, and file a police complaint (FIR) for criminal intimidation, or seek assistance through the AMA Connect app.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">What are the legal calling hours for debt recovery agents in India?</h4>
                  <p>According to the Reserve Bank of India (RBI) guidelines, debt recovery agents are only allowed to contact borrowers-either via phone calls or physical home visits-between 8:00 AM and 7:00 PM. Any communication outside this timeframe is a clear violation of the code.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">How do I file a complaint against a bank's recovery agent with the RBI?</h4>
                  <p>First, submit a written complaint to your bank's Grievance Redressal Officer. If the bank fails to resolve your grievance within 30 days, you can file an official complaint online with the RBI Integrated Ombudsman via the RBI Complaint Management System (CMS) portal.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-[#D29E0D]">Is the bank responsible if a third-party recovery agent harasses me?</h4>
                  <p>Yes. Banks and NBFCs are vicariously liable for the actions of the third-party agencies they hire. Under RBI rules, lenders are fully responsible for the conduct of their recovery agents and can face severe regulatory penalties and civil damages for agent misconduct.</p>
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

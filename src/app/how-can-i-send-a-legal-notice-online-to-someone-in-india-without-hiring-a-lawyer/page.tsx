import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaHandshake, FaFileContract, FaCreditCard, FaBriefcase } from "react-icons/fa";

export const metadata = {
  title: "How to Send a Legal Notice Online in India Without a Lawyer?",
  description:
    "Exhaustive legal guide on drafting and sending a legal notice yourself (DIY) online or offline in India. Learn the rules, validity, risks, and process.",
  keywords: "send legal notice online in india without lawyer, how to send legal notice yourself, diy legal notice format india, validity of self drafted legal notice, can I draft legal notice myself, how to send legal notice via speed post, legal notice process india",
};

const sections = [
  { id: "diy-notice-legality", title: "1. The Legal Standing of DIY Notices" },
  { id: "diy-drafting-elements", title: "2. Key Drafting Elements" },
  { id: "delivery-validation-post-digital", title: "3. Delivery Protocols" },
  { id: "self-drafted-vs-advocate", title: "4. Personal vs. Advocate Weight" },
  { id: "diy-risks-pitfalls", title: "5. Risks & Pitfalls" },
  { id: "advocate-required-scenarios", title: "6. When to Hire an Advocate" },
  { id: "notice-compliance-escalation", title: "7. Waiting Period & Escalation" },
  { id: "BSA-digital-compliance", title: "8. Evidentiary Validation (BSA 2023)" },
  { id: "faqs", title: "9. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Notice for Recovery of Professional Fees", href: "/notice-for-recovery-of-professional-fees" },
  { title: "Legal Notice for Freelance Payment Recovery", href: "/legal-notice-for-freelance-payment-recovery" },
  { title: "Breach of Contract Legal Notice", href: "/breach-of-contract-notice" },
  { title: "Procedure of Sending Legal Notice", href: "/procedure-of-sending-legal-notice" },
  { title: "How to Draft a Legal Notice for Recovery of Money", href: "/how-to-draft-a-legal-notice-for-recovery-of-money" },
];

export default function HowToSendLegalNoticeWithoutLawyerPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Send Legal Notice Online Without Lawyer", href: "/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer" },
  ];

  // Schema Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Send a Legal Notice Online in India Without a Lawyer?",
    "description": "Exhaustive legal guide on drafting and sending a legal notice yourself (DIY) online or offline in India. Learn the rules, validity, risks, and process.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-06-13",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a self-drafted legal notice legally valid in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under Indian law, there is no statutory requirement stating that a legal notice must be issued or signed only by a registered advocate. A personal demand notice signed and sent by the affected party is legally valid and admissible in subsequent court proceedings."
        }
      },
      {
        "@type": "Question",
        "name": "Can I serve a legal notice via email or WhatsApp in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Indian courts, including the Supreme Court, have validated the service of legal notices via digital channels like email and WhatsApp. Under the Bharatiya Sakshya Adhiniyam (BSA), 2023, you must generate a Section 63 certificate to make digital delivery records admissible in court."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if the recipient refuses to accept a legal notice sent by post?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If a registered letter is returned marked 'Refused' or 'Unclaimed,' the law applies the principle of 'deemed service' under Section 27 of the General Clauses Act, 1897. The court treats the refusal as proof that the notice was successfully served."
        }
      },
      {
        "@type": "Question",
        "name": "How long must I wait after sending a legal notice before filing a lawsuit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must wait for the specified 'cure period' in the notice to expire. This is typically 15 days from the date the notice was successfully delivered to the recipient."
        }
      },
      {
        "@type": "Question",
        "name": "What are the risks of sending a legal notice without a lawyer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The primary risks include self-incrimination (accidentally admitting to performance failures), citing incorrect statutory sections, omitting key claims, or facing defamation threats if inappropriate or aggressive language is used."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Send Legal Notice Online Without Lawyer", "item": "https://www.amalegalsolutions.com/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DIY Legal Notice Consultation Services",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1540" },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Siddharth V." },
        "reviewBody": "Excellent guide on sending notices without hiring a lawyer. I successfully drafted my rent recovery notice.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Pooja D." },
        "reviewBody": "Helped me understand the delivery protocols. Serving it via Registered Post AD and WhatsApp worked wonders.",
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
              Self-Represented Legal Notice Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Send a Legal Notice <span className="text-[#D29E0D]">Without a Lawyer</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Learn the validity, drafting rules, delivery systems, and legal risks of sending a DIY legal notice online in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Start Recovery Process
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
            
            <section id="diy-notice-legality" className="mb-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">1. The Legal Standing of DIY Legal Notices in India</h2>
              <div className="bg-[#EBE9E4] p-6 rounded-2xl mb-8 font-light italic text-sm text-[#30261C]/80">
                To send a legal notice online in India without a lawyer, draft a chronological statement of facts detailing your dispute, specify the exact outstanding amount, set a 15-day cure deadline, sign it yourself, and serve it via Registered Post A.D., speed post, email, or WhatsApp with valid delivery tracking proof.
              </div>
              <p>
                In the Indian legal landscape, clear and structured communication is a fundamental step in resolving civil and commercial disputes. When facing an issue like unpaid salary, an unreturned security deposit, or a contractual default, the primary step is serving a legal notice. A common question among individuals and small business owners is: <strong>Can I send a legal notice online in India without hiring a lawyer, and is it valid?</strong>
              </p>
              <p>
                The answer is yes. Under Indian law, there is no statutory requirement stating that a legal notice must be issued or signed only by a registered advocate. A legal notice is essentially a formal statement of your claim, expressing your grievances and outlining your intention to seek legal remedies if the recipient fails to clear their default. While Section 30 of the <strong>Advocates Act, 1961</strong> grants advocates the exclusive right to practice law before courts and tribunals, it does not restrict citizens from sending personal demand notices to protect their rights.
              </p>
              <p>
                While drafting your own demand letter is legally permissible under civil law, ensuring it contains zero ambiguities is essential. When exploring <a href="https://www.legalrecovery.in/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer" target="_blank" className="text-[#D29E0D] hover:underline font-bold">how can I send a legal notice online to someone in India without hiring a lawyer</a>, you must follow the correct formatting guidelines and choose the right dispatch channels to preserve your legal standing in court.
              </p>
            </section>

            <section id="diy-drafting-elements" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. Key Elements to Include in a Self-Drafted Legal Notice</h2>
              <p>
                To ensure a self-drafted notice carries legal weight and is useful in subsequent litigation, it must follow a structured format. A legal notice is a formal document that will be scrutinized by the recipient's legal counsel and, potentially, by a judge. It is important to avoid emotional language or personal attacks, and focus on presenting the facts clearly and chronologically.
              </p>
              <ul className="space-y-2 text-[#30261C]/80 ml-6 list-disc mb-6">
                <li><strong>Sender and Recipient Details:</strong> Clearly list the full name, designation, and address of the sender, and the official corporate or residential address of the recipient. For companies, use the registered office address.</li>
                <li><strong>Statement of Facts (Chronology):</strong> Outline the relationship and the dispute chronologically. For example, in a salary dispute, specify the date of joining, your salary package, the months for which salary is unpaid, and your resignation date.</li>
                <li><strong>Details of the Contract/Agreement:</strong> Reference the specific contract that governs the relationship (such as an appointment letter, rent agreement, or service invoice) and attach copies as annexures.</li>
                <li><strong>The Default and Breach:</strong> Explain how the recipient breached the agreement, specifying the exact dates and amounts of unpaid dues, variables, or unreturned deposits.</li>
                <li><strong>The Clear Demand (Prayer):</strong> State the exact relief you are seeking. Demand the payment of the principal amount, along with simple interest (usually 12% to 18% per annum) and damages for bank penalties.</li>
              </ul>
              <p>
                Once drafted, you must sign and date the notice. If the notice is sent on behalf of a partnership firm or proprietary concern, it should be printed on the business letterhead and signed by the authorized partner or proprietor. Keeping a signed copy of the notice and all attachments is critical for your records.
              </p>
            </section>

            <section id="delivery-validation-post-digital" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. Delivery Protocols: Registered Post, Speed Post, and Digital Service Records</h2>
              <p>
                In civil and criminal litigation, proving that the legal notice was successfully served to the defaulting party is critical. If you cannot provide clear proof of service, the recipient can deny receiving the notice, which can delay court proceedings. Therefore, you must follow strict delivery protocols when sending a DIY notice.
              </p>
              <p>
                The recommended method is sending a physical copy of the notice via <strong>Registered Post with Acknowledgment Due (RPAD)</strong> or <strong>Speed Post</strong>. These services, operated by India Post, provide a unique tracking number and official proof of delivery. Always save the postal receipt and download the delivery tracking status log from the India Post portal once delivered. The signed Acknowledgment Due card returned by the post office is also strong evidence of receipt.
              </p>
              <p>
                If the recipient refuses to accept the post, or if the door is locked, the law protects you. Under Section 27 of the <strong>General Clauses Act, 1897</strong>, and Section 114 of the Indian Evidence Act, if a registered letter is sent to the correct address, the court applies the principle of <strong>deemed service</strong>. The refusal to accept is treated as service, preventing the recipient from claiming they were unaware of the notice.
              </p>
              <p>
                In the modern legal environment, you can also serve notices digitally:
              </p>
              <ul className="space-y-2 text-[#30261C]/80 ml-6 list-disc mb-6">
                <li><strong>Email Delivery:</strong> Send a PDF copy of the signed notice to the recipient's official corporate email. Request read and delivery receipts, and export the email header data as proof.</li>
                <li><strong>WhatsApp Delivery:</strong> The Supreme Court and various High Courts have validated the service of legal notices via WhatsApp. You must capture and save screenshots showing the delivery status (blue ticks) as proof.</li>
              </ul>
            </section>

            <section id="self-drafted-vs-advocate" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. Self-Drafted vs. Advocate-Signed: Psychological and Legal Weight</h2>
              <p>
                While the law recognizes the validity of a self-drafted notice, there is a significant difference in the psychological and legal impact between a DIY notice and one signed by an advocate. Understanding this difference is key to deciding which approach to take for your dispute.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-4 flex items-center gap-2">
                  <FaBalanceScale /> Comparison Overview:
                </h4>
                <ul className="space-y-4">
                  <li><strong>Self-Drafted:</strong> Low cost, indicates personal grievance. Often ignored by corporate legal panels or treated as informal demands.</li>
                  <li><strong>Advocate-Signed:</strong> High psychological impact. Commands immediate review by corporate legal departments and signals intent for litigation.</li>
                </ul>
              </div>
              <p>
                Defaulting employers, tenants, or debtors often ignore self-drafted notices, viewing them as informal demands or bluffing. They assume that an individual who has not hired a lawyer is unlikely to spend the time and money required to initiate formal court litigation. Conversely, a notice on a law firm's letterhead signals that you have engaged legal counsel and are serious about taking the matter to court, often prompting immediate settlement discussions.
              </p>
            </section>

            <section id="diy-risks-pitfalls" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. Critical Risks and Pitfalls of the DIY Legal Notice Route</h2>
              <p>
                Drafting and sending a legal notice without professional guidance involves several legal risks. Because a legal notice is an official document that establishes your claim, any errors or omissions in the draft can be used against you in subsequent court proceedings, potentially damaging your case.
              </p>
              <ul className="space-y-2 text-[#30261C]/80 ml-6 list-disc mb-6">
                <li><strong>Risk of Self-Incrimination:</strong> Without a lawyer's review, you might include statements that admit to a mistake, a performance failure, or a contract breach. The recipient's legal counsel will highlight these admissions in court to challenge your claim.</li>
                <li><strong>Incorrect Statutory References:</strong> Citing the wrong acts or sections can make the notice legally weak. It allows the recipient's counsel to dismiss the notice as legally invalid.</li>
                <li><strong>Omission of Claims:</strong> If you fail to include specific dues in the notice, you may be restricted from claiming them in court later. A legal notice must cover the complete scope of your claim.</li>
                <li><strong>Defamation Threats:</strong> If you use aggressive or emotional language, or copy the notice to third parties who are not involved in the dispute, the recipient can threaten to sue you for defamation under Section 356 BNS, complicating your recovery.</li>
              </ul>
            </section>

            <section id="advocate-required-scenarios" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">6. When Hiring a Lawyer is Strongly Advised: Complex Disputes</h2>
              <p>
                While the DIY approach is suitable for simple, low-value disputes, certain scenarios require professional legal drafting. When a dispute involves high stakes, complex agreements, or strict statutory timelines, engaging a qualified advocate is crucial to protect your interests.
              </p>
              <ul className="space-y-2 text-[#30261C]/80 ml-6 list-disc mb-6">
                <li><strong>Section 138 Cheque Bounce Cases:</strong> The Negotiable Instruments Act, 1881, requires a strict statutory notice to be served within 30 days of receiving the bank return memo. Any errors in this notice can make the criminal complaint inadmissible.</li>
                <li><strong>High-Value Salary Defaults:</strong> If the outstanding salary or FNF dues exceed ₹3 to ₹5 Lakhs, a lawyer will draft the notice to establish the exact legal basis for subsequent court filings.</li>
                <li><strong>Startup Equity and ESOP Disputes:</strong> Equity grants, vesting schedules, and option agreements are complex. Recovering unpaid ESOP value or challenging illegal grant cancellations requires company law expertise.</li>
                <li><strong>Counterclaims and Accusations:</strong> If the employer replies to your reminders with accusations of data theft, intellectual property breach, or fraud, you must engage a lawyer immediately.</li>
              </ul>
            </section>

            <section id="notice-compliance-escalation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">7. Waiting Period Compliance and Next Escalation Steps</h2>
              <p>
                After serving the legal notice, you must wait for the specified 'cure period'—usually 15 days from the date of delivery—to expire. This waiting period is a statutory requirement. It gives the recipient a reasonable opportunity to clear the dues or respond to your claim, preventing them from arguing in court that they were denied natural justice.
              </p>
              <p>
                If the 15-day window expires and the recipient refuses to pay or ignores the notice, you can escalate the dispute using the following pathways:
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaExclamationTriangle className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Conciliation (SAMADHAN Portal)</h4>
                    <p className="text-sm text-gray-600">Workmen can file wage disputes directly on the Ministry of Labour's SAMADHAN portal to seek conciliation.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaGavel className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Summary Suit (Order 37 CPC)</h4>
                    <p className="text-sm text-gray-600">File a summary suit in Civil Court for fast-track judgment based on documented dues.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="BSA-digital-compliance" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">8. Evidentiary Validation: Certifying Digital Service Under BSA 2023</h2>
              <p>
                If you choose to serve your legal notice digitally—via email or WhatsApp—you must ensure the delivery proof is legally admissible in court. Under the modern Indian legal framework, electronic evidence is scrutinized to prevent tampering.
              </p>
              <p>
                The admissibility of digital evidence is governed by the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>. Under Section 63 of the BSA, electronic records are admissible as evidence in court if they are accompanied by a specific certificate. This certificate must declare that the device used was operating properly, records were retrieved without alteration, and must be signed by the person in charge of the system.
              </p>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">Is a self-drafted legal notice legally valid in India?</h4>
                  <p>Yes. Under Indian law, there is no statutory requirement stating that a legal notice must be issued or signed only by a registered advocate. A personal demand notice signed and sent by the affected party is legally valid.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I serve a legal notice via email or WhatsApp in India?</h4>
                  <p>Yes. Indian courts, including the Supreme Court, have validated the service of legal notices via digital channels like email and WhatsApp. Under the BSA 2023, you must generate a Section 63 certificate to make digital delivery records admissible in court.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What happens if the recipient refuses to accept a legal notice sent by post?</h4>
                  <p>If a registered letter is returned marked 'Refused' or 'Unclaimed,' the law applies the principle of 'deemed service' under Section 27 of the General Clauses Act, 1897. The court treats the refusal as proof that the notice was successfully served.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Protect Your Claims with Professional Review</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Before sending a DIY legal notice, have our legal experts audit your draft, review your contract terms, and verify statutory compliance to ensure it is watertight.
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
                Our lawyers specialize in vetting self-drafted notices, verifying statutory references, and serving formal advocate-signed notices for maximum impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Professional Draft Review</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">BSA 2023 Digital Evidence Vetting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Advocate-Signed Notices Vetting</span>
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

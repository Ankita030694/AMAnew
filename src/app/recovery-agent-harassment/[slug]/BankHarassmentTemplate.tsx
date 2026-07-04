import React from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HarassmentBank } from "@/data/harassmentBanks";
import { harassmentCities } from "@/data/harassmentCities";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaEnvelope,
  FaFileInvoice,
  FaGavel,
  FaLandmark,
  FaLinkedin
} from "react-icons/fa";

export default function BankHarassmentTemplate({ bank }: { bank: HarassmentBank }) {
  
  const pageUrl = `https://www.amalegalsolutions.com/recovery-agent-harassment/${bank.slug}`;

  const breadcrumbItems = [
    { label: "Guides", href: "/articles" },
    { label: "Recovery Agent Harassment", href: "/recovery-agent-harassment" },
    { label: `${bank.name} Harassment`, href: `/recovery-agent-harassment/${bank.slug}` }
  ];

  const sections = [
    { id: "corporate-harassment", title: `Corporate Harassment by ${bank.name}` },
    { id: "outsourcing-model", title: `The Agency Outsourcing Model` },
    { id: "corporate-liability", title: `Establishing Corporate Liability` },
    { id: "sarfaesi-applicability", title: `SARFAESI Act vs. ${bank.name} Unsecured Loans` },
    { id: "defending-138", title: `Defending Against Section 138/25 Notices` },
    { id: "data-privacy", title: `When ${bank.name} Agents Call Your HR` },
    { id: "nodal-escalation", title: `The Internal Escalation Matrix` },
    { id: "documenting-abuse", title: `Documenting the Abuse` },
    { id: "legal-notice", title: `Serving a Corporate Legal Notice` },
    { id: "rbi-enforcement", title: `RBI Enforcement Actions` },
    { id: "case-study-victory", title: `Case Study: Defeating ${bank.name} Harassment` },
    { id: "negotiating-ots", title: `Negotiating an OTS with ${bank.name}` },
    { id: "fake-settlements", title: `Avoiding Fake Settlement Traps` },
    { id: "advocate-role", title: `The Role of Your Advocate` },
    { id: "faqs", title: `Frequently Asked Questions` },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.amalegalsolutions.com/articles" },
      { "@type": "ListItem", "position": 3, "name": "Recovery Agent Harassment", "item": "https://www.amalegalsolutions.com/recovery-agent-harassment" },
      { "@type": "ListItem", "position": 4, "name": `${bank.name} Harassment Complaint`, "item": pageUrl }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Sue ${bank.name} for Recovery Agent Harassment | Corporate Defense Strategy`,
    "description": `Learn the exact corporate escalation matrix to stop ${bank.name} recovery agents. Discover how to hold the bank's headquarters legally liable for third-party abuse.`,
    "author": {
      "@type": "Person",
      "name": "Anuj Anand Malik",
      "jobTitle": "Advocate",
      "worksFor": {
        "@type": "LegalService",
        "name": "AMA Legal Solutions",
        "url": "https://www.amalegalsolutions.com"
      },
      "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
      }
    },
    "datePublished": "2026-07-04",
    "dateModified": "2026-07-04",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Will ${bank.name} waive my principal loan amount?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, but it requires negotiation. Once a formal legal notice is served highlighting severe agent harassment, ${bank.name}'s compromise committee is often willing to waive 100% of the penal interest and up to 50-70% of the principal amount to close the disputed account and avoid RBI sanctions.`
        }
      },
      {
        "@type": "Question",
        "name": `How do I bypass the recovery agency and talk to ${bank.name} directly?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You must stop answering calls from the unverified agents entirely. Instead, all communication must be directed in writing to the ${bank.name} Grievance Redressal Officer at ${bank.grievanceEmail}. This creates a legally binding paper trail.`
        }
      },
      {
        "@type": "Question",
        "name": `Is ${bank.name} legally responsible for the actions of a third-party agency?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Absolutely. Under the Principal-Agent relationship defined in the Indian Contract Act, and strictly reiterated by the Supreme Court, ${bank.name} is vicariously liable for all civil and criminal acts committed by any recovery agency they have hired.`
        }
      },
      {
        "@type": "Question",
        "name": `What if ${bank.name} denies hiring the abusive agents?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `This is a common corporate defense mechanism. This is why you must demand the agent's Authorization Letter (signed by ${bank.name}) via email or during a physical visit. If the bank denies hiring them, you can file a separate FIR for extortion against unknown persons.`
        }
      },
      {
        "@type": "Question",
        "name": `Can ${bank.name} block my salary account in another bank?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No. ${bank.name} does not have the unilateral authority to freeze an account held in a completely different bank without a specific attachment order from a civil court. However, if your salary account is within ${bank.name} itself, they may invoke the 'Banker's Right to Lien' to auto-debit funds.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the limitation period for ${bank.name} to file a recovery suit?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `According to the Limitation Act, 1963, ${bank.name} must file a civil suit within three years from the date of your last payment or last written acknowledgment of the debt. After three years, the debt becomes legally time-barred.`
        }
      },
      {
        "@type": "Question",
        "name": `Will a police complaint against the agents affect my OTS with ${bank.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `It actually accelerates it. A registered FIR creates immense corporate liability for ${bank.name}. To avoid a prolonged police investigation and negative PR, their legal department is highly motivated to offer a heavily discounted OTS to convince you to withdraw the criminal complaint.`
        }
      },
      {
        "@type": "Question",
        "name": `Do I have to visit the ${bank.name} branch physically to negotiate?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No. In fact, we advise against visiting the branch physically during peak harassment, as branch managers often use intimidation tactics. All negotiations should be handled by your advocate via formalized legal correspondence with the corporate compromise committee.`
        }
      }
    ]
  };

  return (
    <>
      <Script id={`breadcrumb-schema-${bank.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id={`article-schema-${bank.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id={`faq-schema-${bank.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FDFCF9] text-[#30261C] font-sans selection:bg-[#D29E0D]/30">
        {/* Hero Banner */}
        <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          ></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
                Corporate Defense Against <span className="text-[#D29E0D]">{bank.name}</span> Recovery Agents
              </h1>
              <p className="text-base md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
                Stop fighting the foot soldiers and start targeting the headquarters. Learn how to hold {bank.name} legally liable for the criminal actions of their outsourced agencies, force an internal investigation, and secure a massive One-Time Settlement (OTS).
              </p>
              <div className="flex flex-row gap-3 justify-center items-center w-full max-w-lg mx-auto">
                <Link href="tel:+918178873087" className="w-1/2">
                  <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3.5 md:py-4 px-2 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-1.5 md:gap-2 text-[12px] sm:text-sm md:text-base whitespace-nowrap">
                    <FaShieldAlt className="shrink-0" /> Sue {bank.name} Today
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="w-1/2">
                  <button className="w-full bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-3.5 md:py-4 px-2 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-1.5 md:gap-2 text-[12px] sm:text-sm md:text-base whitespace-nowrap">
                    <FaWhatsapp className="shrink-0 text-green-500" /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="max-w-[1600px] mx-auto px-6 mt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Main Content Layout */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 pb-24 flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
          
          {/* Left Column - Table of Contents (Desktop Only) */}
          <aside className="lg:w-[20%] hidden lg:block sticky top-32 h-fit">
            <h4 className="text-lg font-bold mb-4 text-[#30261C] border-b pb-2 uppercase tracking-wider text-xs">On This Page</h4>
            <TableOfContents sections={sections} orientation="vertical" />
          </aside>

          {/* Middle Column - Content */}
          <main className="w-full lg:w-[55%] min-w-0">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-6 sticky top-20 z-20">
              <TableOfContents sections={sections} orientation="horizontal" />
            </div>

            <article className="prose prose-sm md:prose-lg max-w-none text-[#30261C]/90 leading-relaxed space-y-12">
              
              {/* SECTION 1: Corporate Harassment */}
              <section id="corporate-harassment" className="scroll-mt-24 space-y-4">
                <p className="text-xl font-light leading-relaxed text-[#30261C]/80">
                  When you take a loan from a massive financial institution like <strong>{bank.name}</strong>, you expect to deal with professional corporate employees. However, the moment you miss an EMI due to a sudden financial crisis, that corporate facade drops instantly. Borrowers are shocked to find themselves being abused, threatened, and humiliated by crude individuals who seem to operate entirely outside the bounds of the law.
                </p>
                <p>
                  To effectively stop this harassment, you must stop trying to reason with the aggressive voice on the other end of the phone. You cannot appeal to the morality of a recovery agent. Instead, you must fundamentally understand the corporate structure of {bank.name}, how they utilize third-party vendors to distance themselves from illegal activities, and exactly how to legally force their headquarters to intervene and terminate the harassment.
                </p>
                <p>
                  Often, borrowers make the mistake of attempting to explain their genuine financial hardships—such as medical emergencies or job losses—to these agents. This is entirely futile. The agent calling you does not work in {bank.name}'s underwriting department; they work in a high-pressure boiler room where their sole mandate is to extract funds. Therefore, your defense strategy must completely bypass these foot soldiers and directly target the legal and compliance departments of {bank.name}.
                </p>
              </section>

              {/* SECTION 2: Outsourcing Model */}
              <section id="outsourcing-model" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  The Agency Outsourcing Model: Why They Are So Aggressive
                </h2>
                <p>
                  {bank.name} is a highly regulated entity. They are terrified of direct RBI sanctions. Therefore, to recover bad debts, they utilize a "plausible deniability" strategy by outsourcing the dirty work to specialized, localized third-party recovery agencies. 
                </p>
                <p>
                  These third-party agencies are not official employees of {bank.name}. They are independent contractors hired on an aggressively tiered commission structure. If the agency fails to extract money from you within a specific 30-to-60-day window, {bank.name} simply yanks the account back and hands it to a different agency. Because their entire livelihood depends on immediate recovery, these agents have zero incentive to listen to your financial hardships; their only goal is to terrorize you into paying today.
                </p>
                <p>
                  This model creates a dangerous incentive structure. Agents frequently resort to spoofing phone numbers, using extremely vulgar language, and threatening violence because they believe they are shielded by their anonymity. The bank, in turn, claims ignorance of these tactics. Dismantling this model requires proving that {bank.name} is fully aware of, and legally responsible for, the actions of these agencies.
                </p>
              </section>

              {/* SECTION 3: Corporate Liability */}
              <section id="corporate-liability" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Establishing Corporate Liability Against {bank.name}
                </h2>
                <p>
                  A common trick played by {bank.name}'s customer service team is to claim, <em>"We did not tell the agency to abuse you, that is their own doing."</em> This is legally false.
                </p>
                <p>
                  Under the legal doctrine of <strong>Vicarious Liability</strong> (Principal-Agent relationship), {bank.name} is 100% legally and financially responsible for every single action taken by any recovery agency they have empaneled. The Supreme Court has repeatedly slapped heavy punitive damages on banks who tried to hide behind their contractors. To utilize this legal weapon, you must systematically tie the rogue agent directly back to {bank.name} through a documented paper trail.
                </p>
                <p>
                  This is achieved by serving a legal notice directly to {bank.name}'s headquarters that explicitly names the agency and outlines their criminal actions. Once {bank.name} is put on formal written notice regarding the illegal acts being committed in their name, they can no longer claim ignorance. If the harassment continues after the notice is served, {bank.name} becomes directly complicit in the extortion, drastically increasing their liability in consumer and civil courts.
                </p>
              </section>

              {/* SECTION 4: SARFAESI Applicability */}
              <section id="sarfaesi-applicability" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  SARFAESI Act vs. {bank.name} Unsecured Loans
                </h2>
                <p>
                  The most potent threat utilized by {bank.name} recovery agents is the imminent seizure of your home or vehicle. They will often send alarming WhatsApp messages filled with legal jargon, referencing the SARFAESI Act, 2002. It is critical to understand when this act actually applies.
                </p>
                <p>
                  The SARFAESI Act was enacted to allow banks to auction properties of defaulting borrowers without the lengthy intervention of civil courts. However, this immense power is <strong>strictly limited to Secured Loans</strong> (where a physical asset is pledged as collateral). If your default with {bank.name} is on an unsecured personal loan, a credit card, or a digital app loan, the SARFAESI Act is entirely inapplicable. 
                </p>
                <p>
                  Agents citing SARFAESI for unsecured debts are committing fraud and impersonation. {bank.name} cannot unilaterally seize your assets or freeze your other bank accounts for an unsecured debt. To do so, they must file an exhausting civil recovery suit, obtain a decree, and then file an execution petition—a process that takes years. Knowing this strips the agents of their primary weapon of fear.
                </p>
              </section>

              {/* SECTION 5: Defending 138 */}
              <section id="defending-138" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Defending Against Section 138 / Section 25 Notices
                </h2>
                <p>
                  Another common tactic employed by {bank.name} is the weaponization of the Negotiable Instruments Act (Section 138 for cheque bounce) or the Payment and Settlement Systems Act (Section 25 for ECS/NACH mandate bounce). 
                </p>
                <p>
                  When your EMI bounces, the bank may send a legal notice threatening you with imprisonment under these sections. While these are indeed criminal sections, they are primarily used as pressure tactics to force a settlement. In reality, the courts are heavily backlogged with these cases. Furthermore, if {bank.name} presented a security cheque for an amount far exceeding your actual current overdue balance, the Section 138 notice can be successfully challenged and quashed in court by a competent banking advocate.
                </p>
                <p>
                  It is vital that you do not ignore these notices. When {bank.name} sends a Section 138/25 demand notice, you have exactly 15 days to reply. Your advocate will draft a robust reply denying the alleged liability and raising counter-claims regarding the harassment and exorbitant penal interest charged by the bank, effectively stalling their legal aggression.
                </p>
              </section>

              {/* SECTION 6: Data Privacy */}
              <section id="data-privacy" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Data Privacy: When {bank.name} Agents Call Your HR
                </h2>
                <p>
                  One of the most psychologically devastating tactics used by {bank.name} agents is contacting a borrower's employer. Agents will call the HR department or the reception desk of your company, loudly declaring that you are a "defaulter" and demanding that your salary be garnished.
                </p>
                <p>
                  This is a blatant violation of your fundamental right to privacy and constitutes Criminal Defamation under the BNS. Your loan agreement with {bank.name} does not authorize them to discuss your financial status with third parties. When an agent calls your workplace, they are intentionally attempting to destroy your professional reputation to extort money. 
                </p>
                <p>
                  If this occurs, you must immediately secure written confirmation (or a recorded statement) from your HR or receptionist detailing the call. This evidence is gold. It forms the basis of a high-value civil suit against {bank.name} for tortious interference and defamation, drastically increasing your leverage during OTS negotiations.
                </p>
              </section>

              {/* SECTION 7: Nodal Escalation */}
              <section id="nodal-escalation" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  The Internal Escalation Matrix
                </h2>
                <p>
                  Do not waste your time complaining to the low-level customer care helpline; they have zero authority over recovery operations. You must strike directly at the corporate compliance level.
                </p>
                <p>
                  Your first legal step is to draft a highly formalized grievance email. This email must explicitly state that {bank.name} is violating the <em>RBI Master Circular on Fair Practices Code</em>. You must send this email to two specific individuals (whose contact details are in the sidebar):
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
                  <li><strong>The Grievance Redressal Officer (GRO):</strong> The first tier of formal corporate escalation at {bank.name}.</li>
                  <li><strong>The Principal Nodal Officer (PNO):</strong> The highest authority within the bank regarding regulatory compliance, directly answerable to the RBI.</li>
                </ul>
                <p className="mt-4">
                  In this email, demand that {bank.name} instantly revokes the recovery mandate of the third-party agency and initiates an internal investigation. Give them a strict 48-hour deadline.
                </p>
              </section>

              {/* SECTION 8: Documenting Abuse */}
              <section id="documenting-abuse" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Documenting the Abuse for the Bank
                </h2>
                <p>
                  To force the Nodal Officer to act, you must attach irrefutable evidence to your grievance email. Without attachments, {bank.name} will simply classify your complaint as "unsubstantiated."
                </p>
                <p>
                  Record all incoming calls. When an agent calls, politely ask, <em>"Are you calling on behalf of {bank.name}? What is your agency name?"</em> Let them confirm it on tape. If they send abusive WhatsApp messages or fake Lok Adalat summons, take immediate screenshots. Attach these MP3s and JPEGs directly to your email to the Nodal Officer. The moment {bank.name}'s legal team sees hard, recorded evidence of criminal intimidation, their risk-management protocols will force them to instantly recall the agency to prevent a massive lawsuit.
                </p>
              </section>

              {/* SECTION 9: Legal Notice */}
              <section id="legal-notice" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Serving a Corporate Legal Notice
                </h2>
                <p>
                  If the Nodal Officer fails to respond within 48 hours, or gives a copy-paste generic reply, it is time to elevate the threat level. You must have a specialized banking advocate draft and serve a formal Legal Notice to the corporate headquarters of {bank.name}.
                </p>
                <p>
                  A legal notice drafted by AMA Legal Solutions bypasses customer service entirely and lands directly on the desks of the bank's litigation department. The notice will formally declare that {bank.name} is now liable for criminal defamation, extortion, and severe mental agony. We will demand heavy financial compensation and issue an ultimatum: cease all third-party recovery efforts immediately or face civil injunctions and criminal FIRs against the branch management. This is the single most effective tool to paralyze the recovery process.
                </p>
              </section>

              {/* SECTION 10: RBI Enforcement */}
              <section id="rbi-enforcement" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Triggering RBI Enforcement Actions
                </h2>
                <p>
                  By law, {bank.name} has exactly 30 days to resolve your complaint filed with the Nodal Officer. If they fail, you are legally entitled to escalate the matter to the Reserve Bank of India’s Complaint Management System (CMS).
                </p>
                <p>
                  Because you have already served a legal notice and documented the abuse, your case before the RBI Ombudsman will be airtight. The Ombudsman views documented harassment very seriously. They possess the statutory power to heavily fine {bank.name} for regulatory breaches and can officially order the bank to pay you compensation for the distress caused.
                </p>
              </section>

              {/* SECTION 11: Case Study Victory */}
              <section id="case-study-victory" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Case Study: Defeating {bank.name} Harassment
                </h2>
                <p>
                  Consider the case of a mid-level IT professional who defaulted on a ₹5 Lakh unsecured personal loan with {bank.name} due to a prolonged medical emergency. Within two months, {bank.name} handed the account to a hyper-aggressive recovery agency. The agents began calling his elderly parents, threatening to send police to their rural home, causing immense distress.
                </p>
                <p>
                  The borrower contacted AMA Legal Solutions. We immediately drafted a severe legal notice to {bank.name}'s Principal Nodal Officer, attaching the recorded threats. We cited violations of the RBI Fair Practices Code and warned of an impending FIR for Criminal Intimidation against the branch manager. 
                </p>
                <p>
                  Within 48 hours, {bank.name} revoked the agency's mandate. The calls stopped completely. Realizing they were facing a well-represented borrower, {bank.name}'s compromise committee reached out. Through aggressive negotiation, we secured a One-Time Settlement (OTS) for just ₹1.8 Lakhs—a massive waiver of the principal and all penal interest. The borrower achieved financial freedom without ever having to face another abusive phone call.
                </p>
              </section>

              {/* SECTION 12: Negotiating OTS */}
              <section id="negotiating-ots" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Negotiating an OTS Directly with {bank.name}
                </h2>
                <p>
                  Once the legal notice has neutralized the recovery agents, the bank will realize that coercive tactics will no longer work on you. This forces them to transition from aggression to negotiation.
                </p>
                <p>
                  At this stage, your legal counsel will formally petition {bank.name}'s internal compromise committee for a One-Time Settlement (OTS). Because you have established a strong legal grievance, the bank is highly motivated to settle the account quickly to avoid further regulatory scrutiny. Our advocates routinely secure massive waivers—often erasing 100% of the illegal penalty charges and significantly slashing the principal loan amount, allowing you to close the account completely.
                </p>
              </section>

              {/* SECTION 13: Fake Settlements */}
              <section id="fake-settlements" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Avoiding Fake Settlement Traps
                </h2>
                <p>
                  A critical warning: Never, ever agree to an OTS based on a WhatsApp message or a verbal promise from a recovery agent. It is a common scam for agents to offer a "50% discount if you pay today," only for the borrower to realize later that the payment was simply adjusted against exorbitant late fees, and the principal remains unchanged.
                </p>
                <p>
                  A valid settlement with {bank.name} requires a formalized, hard-copy OTS Letter issued directly by the bank on their official letterhead, signed by an authorized manager. It must explicitly state that the agreed amount is a "Full and Final Settlement" of the specific loan account number. Your advocate will ensure this document is authentic before any money is transferred.
                </p>
              </section>

              {/* SECTION 14: Advocate Role */}
              <section id="advocate-role" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  The Role of Your Corporate Advocate
                </h2>
                <p>
                  {bank.name} has an army of highly paid corporate lawyers designing their recovery strategies. Trying to fight them alone with a generic email template is like bringing a knife to a gunfight.
                </p>
                <p>
                  By hiring AMA Legal Solutions, you force {bank.name} to deal with our expert litigation team instead of you. We know exactly which regulatory levers to pull to make their compliance department panic. We handle the drafting, the Nodal Officer escalations, the RBI Ombudsman filings, and the intense OTS negotiations, entirely shielding you from the stress so you can focus on rebuilding your life.
                </p>
                
                <div className="bg-[#30261C] text-white p-8 md:p-12 rounded-2xl shadow-2xl mt-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4">
                    <FaShieldAlt className="text-9xl" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10" style={{ fontFamily: "var(--font-polysans)" }}>Stop {bank.name} Harassment Today</h3>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto relative z-10 font-light leading-relaxed">
                    Our legal experts will draft a powerful corporate notice to {bank.name}'s headquarters, instantly halting the illegal calls and forcing a highly discounted settlement.
                  </p>
                  <Link href="tel:+918178873087" className="inline-block relative z-10">
                    <button className="bg-[#D29E0D] hover:bg-white hover:text-[#30261C] text-white font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(210,158,13,0.5)] text-xl flex items-center justify-center gap-3">
                      <FaPhone className="animate-pulse" /> Call +91 81788 73087 Now
                    </button>
                  </Link>
                </div>
              </section>

              {/* SECTION 15: FAQs */}
              <section id="faqs" className="scroll-mt-24 space-y-4 pt-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Frequently Asked Questions (FAQs)
                </h2>
                
                <div className="space-y-6 mt-8">
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#30261C] mb-3 flex items-start">
                        <span className="text-[#D29E0D] mr-3">Q:</span> {faq.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed pl-8">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Dynamic Grid Section - Cities */}
              <section className="mt-16 pt-10 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-[#0d1b2a] mb-8 pb-2">{bank.name} Harassment Defense by City</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                  {harassmentCities.map((city) => (
                    <Link key={city.slug} href={`/recovery-agent-harassment/${bank.slug}/${city.slug}`} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#D2A02A] transition-all text-[#0d1b2a] font-semibold text-center flex items-center justify-center min-h-[80px]">
                      {city.name}
                    </Link>
                  ))}
                </div>
              </section>

            </article>
          </main>

          {/* Right Column - Sidebar Widgets */}
          <aside className="w-full lg:w-[25%] space-y-8">
            
            {/* Contact Details Widget */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-[#30261C] mb-4 border-b border-gray-100 pb-3">{bank.name} Escalation Desk</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Do not talk to third-party agents. Send all legal notices and formal RBI grievances directly to the official corporate officers below.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FaEnvelope className="text-[#D29E0D] mt-1 mr-3 shrink-0" />
                  <span className="text-sm text-gray-800 break-all font-medium">{bank.nodalEmail}</span>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-[#D29E0D] mt-1 mr-3 shrink-0" />
                  <span className="text-sm text-gray-800 break-all">{bank.grievanceEmail}</span>
                </div>
              </div>
            </div>
            
            {/* Author Widget */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-24 bg-[#30261C]"></div>
              <div className="px-6 pb-6 relative">
                <div className="w-24 h-24 mx-auto -mt-12 rounded-full overflow-hidden border-4 border-white shadow-lg relative bg-white">
                  <Image src="/anujbhiya.png" alt="Anuj Anand Malik" fill className="object-cover" />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-[#30261C]">Anuj Anand Malik</h3>
                  <p className="text-[#D29E0D] font-medium text-sm mt-1 uppercase tracking-wide">Founder, AMA Legal</p>
                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    Specialized corporate litigator adept at piercing the corporate veil of financial institutions and securing maximum OTS waivers for harassed borrowers.
                  </p>
                  <div className="mt-4 flex justify-center space-x-3">
                    <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Lead Gen Widget */}
            <div className="sticky top-32 bg-gradient-to-br from-[#30261C] to-[#1a140f] rounded-2xl p-8 text-white shadow-2xl overflow-hidden relative">
              <div className="absolute -top-10 -right-10 opacity-10">
                <FaShieldAlt className="text-9xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ fontFamily: "var(--font-polysans)" }}>Hold {bank.name} Liable</h3>
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10 text-sm">
                Our advocates will bypass the abusive agents and negotiate a heavy settlement discount directly with {bank.name}'s compromise committee.
              </p>
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> Stop all calls in 48 hrs
                </li>
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> Official OTS negotiation
                </li>
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> Block third-party contact
                </li>
              </ul>
              <Link href="tel:+918178873087" className="block relative z-10">
                <button className="w-full bg-[#D29E0D] text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#30261C] transition-all duration-300 shadow-lg">
                  Get Free Strategy
                </button>
              </Link>
            </div>
            
          </aside>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HarassmentBank } from "@/data/harassmentBanks";
import { getDynamicBankSingleContent } from "@/lib/harassmentContentEngine";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaGavel,
  FaLandmark,
  FaLinkedin
} from "react-icons/fa";

export default function BankHarassmentTemplate({ bank }: { bank: HarassmentBank }) {
  const pageUrl = `https://www.amalegalsolutions.com/recovery-agent-harassment/${bank.slug}`;
  const dynamicContent = getDynamicBankSingleContent(bank);

  const breadcrumbItems = [
    { label: "Guides", href: "/articles" },
    { label: "Recovery Agent Harassment", href: "/recovery-agent-harassment" },
    { label: `${bank.name} Harassment`, href: pageUrl }
  ];

  const sections = [
    { id: "corporate-defense", title: `Corporate Defense Against ${bank.name}` },
    { id: "regulatory-framework", title: `${dynamicContent.categoryLabel} Guidelines` },
    { id: "corporate-liability", title: `Holding ${bank.name} Vicariously Liable` },
    { id: "sarfaesi-myth", title: `SARFAESI Act vs Unsecured Loans` },
    { id: "section-25-138", title: `Defending Section 138 & 25 Notices` },
    { id: "workplace-privacy", title: `Workplace & Contact List Privacy` },
    { id: "case-study", title: `Case Study: Defense Resolution` },
    { id: "ots-negotiation", title: `Negotiating an OTS with ${bank.name}` },
    { id: "advocate-role", title: `The Role of Legal Counsel` },
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
    "description": `Comprehensive corporate escalation matrix to stop ${bank.name} recovery agents. Enforce RBI directives and hold corporate headquarters legally accountable.`,
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
    "dateModified": "2026-09-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": dynamicContent.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D29E0D]/15 text-[#916b08] text-xs md:text-sm font-semibold mb-4 tracking-wide uppercase">
                <FaShieldAlt className="text-[#D29E0D]" /> {dynamicContent.categoryLabel}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 mt-2 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
                Corporate Defense Against <span className="text-[#D29E0D]">{bank.name}</span> Recovery Harassment
              </h1>
              <p className="text-base md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
                Stop fighting outsourced collection agencies. Target the corporate compliance headquarters of {bank.name} directly under RBI directives to permanently end harassment and negotiate a discounted One-Time Settlement (OTS).
              </p>
              <div className="flex flex-row gap-3 justify-center items-center w-full max-w-lg mx-auto">
                <Link href="tel:+918178873087" className="w-1/2">
                  <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3.5 md:py-4 px-2 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-1.5 md:gap-2 text-[12px] sm:text-sm md:text-base whitespace-nowrap">
                    <FaShieldAlt className="shrink-0" /> Free Case Evaluation
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
          
          {/* Left Column - TOC */}
          <aside className="lg:w-[20%] hidden lg:block sticky top-32 h-fit">
            <h4 className="text-lg font-bold mb-4 text-[#30261C] border-b pb-2 uppercase tracking-wider text-xs">On This Page</h4>
            <TableOfContents sections={sections} orientation="vertical" />
          </aside>

          {/* Middle Column - Content */}
          <main className="w-full lg:w-[55%] min-w-0">
            <div className="lg:hidden mb-6 sticky top-20 z-20">
              <TableOfContents sections={sections} orientation="horizontal" />
            </div>

            <article className="prose prose-sm md:prose-lg max-w-none text-[#30261C]/90 leading-relaxed space-y-12">
              
              {/* SECTION 1: Corporate Defense */}
              <section id="corporate-defense" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Corporate Legal Defense Against {bank.name}
                </h2>
                <p className="text-xl font-light leading-relaxed text-[#30261C]/80">
                  When facing sustained recovery harassment related to <strong>{bank.name}</strong> accounts, reasoning with third-party tele-callers is fundamentally futile. These agents operate on commission targets and lack the authority to alter repayment terms or grant waivers.
                </p>
                <p>
                  To eliminate harassment and establish favorable settlement leverage, your defense must target {bank.name} at the corporate and regulatory level. By serving formal Cease & Desist Notices to the Principal Nodal Officer and escalating documented violations through the RBI Ombudsman and judicial courts, you bypass foot soldiers and compel senior compliance executives to intervene.
                </p>
              </section>

              {/* SECTION 2: Category Regulatory Framework */}
              <section id="regulatory-framework" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  {dynamicContent.regulatoryFramework.title}
                </h2>
                <p>
                  {dynamicContent.regulatoryFramework.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {dynamicContent.regulatoryFramework.keyPoints.map((pt, idx) => (
                    <div key={idx} className="bg-white border border-[#EBE9E4] p-5 rounded-xl shadow-sm">
                      <h4 className="font-bold text-[#30261C] text-base mb-2 flex items-center gap-2">
                        <FaShieldAlt className="text-[#D29E0D] shrink-0" /> {pt.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed m-0">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 3: Corporate Liability */}
              <section id="corporate-liability" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Establishing Corporate Vicarious Liability
                </h2>
                <p>
                  A standard defense raised by customer desks at {bank.name} is that external agencies acted independently without bank authorization. Under Indian jurisprudence, this defense fails.
                </p>
                <p>
                  Under Section 230 of the Indian Contract Act and landmark Supreme Court precedents (*ICICI Bank Ltd. v. Prakash Kaur*), a lending institution as Principal is directly and vicariously liable for all civil wrongs, extortions, and privacy violations committed by its authorized collection agents. Once formal written notice is delivered to {bank.name} documenting specific agent violations, the institution is legally stripped of plausible deniability.
                </p>
              </section>

              {/* SECTION 4: SARFAESI Myth */}
              <section id="sarfaesi-myth" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  SARFAESI Act vs. Unsecured Debt
                </h2>
                <p>
                  Recovery agents frequently threaten immediate property sealing, auction notices, or police attachment citing the SARFAESI Act, 2002. 
                </p>
                <p>
                  Borrowers must note that <strong>the SARFAESI Act applies exclusively to secured loans</strong> backed by a registered mortgage or hypothecated tangible collateral. For credit cards, personal loans, and unsecured business lines:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>{bank.name} possesses zero legal authority to attach residential or commercial premises without a civil court decree.</li>
                  <li>No recovery personnel can enter your property to seize movable household goods or vehicles.</li>
                  <li>Issuing fraudulent SARFAESI notices for unsecured debt constitutes criminal impersonation and forgery.</li>
                </ul>
              </section>

              {/* SECTION 5: Section 138 & 25 Notices */}
              <section id="section-25-138" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Defending Against Section 138 NI Act & Section 25 PSSA Notices
                </h2>
                <p>
                  When automated NACH mandates bounce or post-dated cheques are presented, {bank.name} may issue legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA) or Section 138 of the Negotiable Instruments Act.
                </p>
                <p>
                  These statutory notices demand prompt, structured legal representation within 15 days of receipt. Our advocates prepare detailed legal replies establishing bona fide financial hardship, challenging inflated claim figures, and asserting counter-claims for unlawful recovery harassment, effectively neutralizing the threat of summary criminal action.
                </p>
              </section>

              {/* SECTION 6: Workplace Privacy */}
              <section id="workplace-privacy" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Workplace Defamation & Contact List Protection
                </h2>
                <p>
                  Contacting a borrower employer, human resources department, or personal reference contacts is a gross breach of confidentiality under RBI regulations and constitutes actionable criminal defamation under Section 356 of the Bharatiya Nyaya Sanhita (BNS).
                </p>
                <p>
                  When {bank.name} agents breach workplace privacy, we serve immediate Spoliation Notices to the lender legal counsel. We advise your employer corporate security to deny entry to unaccredited agents, transforming workplace interference into critical leverage for substantial OTS waivers.
                </p>
              </section>

              {/* SECTION 7: Case Study */}
              <section id="case-study" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Case Study: {dynamicContent.caseStudy.title}
                </h2>
                <div className="bg-white border border-[#D29E0D]/30 rounded-2xl p-6 md:p-8 shadow-md space-y-4 my-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Borrower Profile</span>
                      <p className="font-bold text-[#30261C] m-0">{dynamicContent.caseStudy.borrowerProfile}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Outstanding Facility</span>
                      <p className="font-bold text-[#D29E0D] m-0">{dynamicContent.caseStudy.loanAmount}</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#30261C] text-sm uppercase tracking-wide text-red-600 mb-1">Harassment Challenge</h5>
                    <p className="text-sm text-gray-600 m-0">{dynamicContent.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#30261C] text-sm uppercase tracking-wide text-blue-700 mb-1">AMA Legal Strategy</h5>
                    <p className="text-sm text-gray-600 m-0">{dynamicContent.caseStudy.legalAction}</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#D29E0D]/20">
                    <h5 className="font-bold text-[#30261C] text-sm uppercase tracking-wide text-green-700 mb-1">Final Settlement Outcome</h5>
                    <p className="text-sm font-medium text-gray-800 m-0">{dynamicContent.caseStudy.resolution}</p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: OTS Negotiation */}
              <section id="ots-negotiation" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Negotiating an OTS with {bank.name}
                </h2>
                <p>
                  Once illegal recovery intimidation has been halted, the optimal outcome is executing a legally enforceable One-Time Settlement (OTS). Our banking law team negotiates directly with {bank.name} corporate compromise authorities.
                </p>
                <p>
                  We secure comprehensive waivers: 100% removal of penal interest and late payment charges, alongside a 40% to 70% haircut on the outstanding principal balance. The settlement is concluded exclusively upon receipt of an authentic, verified OTS sanction letter issued on {bank.name} letterhead, followed by a formal No Objection Certificate (NOC).
                </p>
              </section>

              {/* SECTION 9: Advocate Role */}
              <section id="advocate-role" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  The Role of Dedicated Banking Counsel
                </h2>
                <p>
                  Retaining professional banking counsel immediately rebalances the dispute. Upon issuing our formal Notice of Appearance, {bank.name} is legally required to route all future communications through our chambers.
                </p>

                <div className="bg-[#30261C] text-white p-8 md:p-12 rounded-2xl shadow-2xl mt-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4">
                    <FaShieldAlt className="text-9xl" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10" style={{ fontFamily: "var(--font-polysans)" }}>End Harassment by {bank.name}</h3>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto relative z-10 font-light leading-relaxed">
                    Contact AMA Legal Solutions today. We shield you from collection threats, hold {bank.name} accountable under RBI regulations, and settle your debt safely.
                  </p>
                  <Link href="tel:+918178873087" className="inline-block relative z-10">
                    <button className="bg-[#D29E0D] hover:bg-white hover:text-[#30261C] text-white font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(210,158,13,0.5)] text-xl flex items-center justify-center gap-3">
                      <FaPhone className="animate-pulse" /> Call +91 81788 73087 Now
                    </button>
                  </Link>
                </div>
              </section>

              {/* SECTION 10: FAQs */}
              <section id="faqs" className="scroll-mt-24 space-y-4 pt-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Frequently Asked Questions (FAQs)
                </h2>
                
                <div className="space-y-6 mt-8">
                  {dynamicContent.faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#30261C] mb-3 flex items-start">
                        <span className="text-[#D29E0D] mr-3">Q:</span> {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed pl-8 m-0">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

            </article>
          </main>

          {/* Right Column - Sidebar */}
          <aside className="w-full lg:w-[25%] space-y-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-[#30261C] mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <FaLandmark className="text-[#D29E0D]" /> {bank.name} Grievance Desk
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Official corporate escalation details for {bank.name}. Send all formal statutory notices directly to these channels:
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <FaEnvelope className="text-[#D29E0D] mt-1 mr-3 shrink-0" />
                  <span className="text-sm text-gray-800 break-all font-medium">{bank.emails}</span>
                </div>
                {bank.address && (
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-[#D29E0D] mt-1 mr-3 shrink-0" />
                    <span className="text-xs text-gray-700 leading-relaxed">{bank.address}</span>
                  </div>
                )}
              </div>
            </div>

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
                    Advocate Malik specializes in neutralizing corporate abuse by holding financial institutions legally liable under RBI Fair Practice Codes and Supreme Court precedents.
                  </p>
                  <div className="mt-4 flex justify-center space-x-3">
                    <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky top-32 bg-gradient-to-br from-[#30261C] to-[#1a140f] rounded-2xl p-8 text-white shadow-2xl overflow-hidden relative">
              <div className="absolute -top-10 -right-10 opacity-10">
                <FaGavel className="text-9xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ fontFamily: "var(--font-polysans)" }}>Deploy Legal Shield</h3>
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10 text-sm">
                Stop illegal recovery calls from {bank.name} immediately. We file regulatory complaints and negotiate your One-Time Settlement.
              </p>
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> All direct calls blocked
                </li>
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> RBI Nodal escalations
                </li>
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> Maximum OTS waivers
                </li>
              </ul>
              <Link href="tel:+918178873087" className="block relative z-10">
                <button className="w-full bg-[#D29E0D] text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#30261C] transition-all duration-300 shadow-lg">
                  Free Case Review
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

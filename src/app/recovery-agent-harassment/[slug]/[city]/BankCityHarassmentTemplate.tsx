import React from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HarassmentBank } from "@/data/harassmentBanks";
import { HarassmentCity } from "@/data/harassmentCities";
import { getDynamicBankCityContent } from "@/lib/harassmentContentEngine";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaGavel,
  FaLandmark,
  FaLinkedin,
  FaBalanceScale,
  FaFileAlt
} from "react-icons/fa";

export default function BankCityHarassmentTemplate({ bank, city }: { bank: HarassmentBank, city: HarassmentCity }) {
  const pageUrl = `https://www.amalegalsolutions.com/recovery-agent-harassment/${bank.slug}/${city.slug}`;
  const dynamicContent = getDynamicBankCityContent(bank, city);

  const breadcrumbItems = [
    { label: "Guides", href: "/articles" },
    { label: "Recovery Agent Harassment", href: "/recovery-agent-harassment" },
    { label: `${bank.name} Harassment`, href: `/recovery-agent-harassment/${bank.slug}` },
    { label: `in ${city.name}`, href: pageUrl }
  ];

  const sections = [
    { id: "pincer-movement", title: `Dual Defense Strategy in ${city.name}` },
    { id: "regulatory-framework", title: `${dynamicContent.categoryLabel} Regulations` },
    { id: "police-action", title: `Activating ${city.policeAuthority}` },
    { id: "high-court-jurisprudence", title: `${city.highCourt} Rulings` },
    { id: "defense-protocol", title: `Step-by-Step Defense Protocol` },
    { id: "workplace-defamation", title: `Stopping Workplace Defamation` },
    { id: "sarfaesi-myth", title: `SARFAESI & Unsecured Debt Myths` },
    { id: "case-study", title: `Case Study: ${city.name} Resolution` },
    { id: "ots-negotiation", title: `Negotiating a ${bank.name} OTS` },
    { id: "advocate-role", title: `Why You Need Legal Counsel` },
    { id: "faqs", title: `Frequently Asked Questions` },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.amalegalsolutions.com/articles" },
      { "@type": "ListItem", "position": 3, "name": "Recovery Agent Harassment", "item": "https://www.amalegalsolutions.com/recovery-agent-harassment" },
      { "@type": "ListItem", "position": 4, "name": `${bank.name} Harassment`, "item": `https://www.amalegalsolutions.com/recovery-agent-harassment/${bank.slug}` },
      { "@type": "ListItem", "position": 5, "name": `${bank.name} in ${city.name}`, "item": pageUrl }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Stop ${bank.name} Recovery Harassment in ${city.name} | Legal Defense Protocol`,
    "description": `Comprehensive legal guide to halting illegal recovery tactics by ${bank.name} in ${city.name}. Enforce RBI directives and mobilize the ${city.policeAuthority}.`,
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
      <Script id={`breadcrumb-schema-${bank.slug}-${city.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id={`article-schema-${bank.slug}-${city.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id={`faq-schema-${bank.slug}-${city.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                <FaShieldAlt className="text-[#D29E0D]" /> {dynamicContent.categoryLabel} Defense
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 mt-2 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
                Stop <span className="text-[#D29E0D]">{bank.name}</span> Recovery Harassment in <span className="text-[#D29E0D]">{city.name}</span>
              </h1>
              <p className="text-base md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
                Deploy an aggressive, dual-pronged legal strategy. We hold {bank.name} corporately liable under RBI directives while mobilizing the {city.policeAuthority} in {city.name} to neutralize unlawful intimidation and secure a discounted One-Time Settlement (OTS).
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
          
          {/* Left Column - Table of Contents */}
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
              
              {/* SECTION 1: Dual Strategy */}
              <section id="pincer-movement" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Dual Legal Defense Strategy in {city.name}
                </h2>
                <p className="text-xl font-light leading-relaxed text-[#30261C]/80">
                  When facing sustained recovery harassment from <strong>{bank.name}</strong> while living or working in <strong>{city.name}</strong>, relying solely on informal telephone requests will not halt abusive collection practices. To permanently terminate illegal harassment, borrowers must execute a coordinated, dual-track legal protocol.
                </p>
                <p>
                  First, our legal team serves a formal corporate Cease & Desist Notice directly to the Principal Nodal Officer and Compliance Secretariat of {bank.name}. This establishes incontrovertible institutional liability for Fair Practices Code and consumer protection violations.
                </p>
                <p>
                  Second, we concurrently petition the <strong>{city.policeAuthority}</strong> and the local jurisdictional magistrate in {city.name} under the Bharatiya Nyaya Sanhita (BNS) and Bharatiya Nagarik Suraksha Sanhita (BNSS). This local pressure immobilizes unauthorized third-party recovery agencies operating in the {city.name} jurisdiction, transforming unmanageable harassment into structured, lawful settlement discussions.
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

              {/* SECTION 3: Police Action */}
              <section id="police-action" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Activating the {city.policeAuthority}
                </h2>
                <p>
                  Recovery agents harassing borrowers in {city.name} depend heavily on the mistaken belief that their actions are immune from criminal liability because a debt exists. Under Indian jurisprudence, debt default is strictly a civil matter, whereas coercion, intimidation, and unlawful shaming constitute cognizable criminal offenses.
                </p>
                <p>
                  We draft structured, evidence-backed complaints for submission to the <strong>{city.policeAuthority}</strong> invoking critical provisions of the Bharatiya Nyaya Sanhita (BNS):
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
                  <li><strong>Section 351 BNS (Criminal Intimidation):</strong> Invoked when agents from {bank.name} threaten physical violence, reputational harm, or unlawful residential intrusion.</li>
                  <li><strong>Section 308 BNS (Extortion):</strong> Applicable when collection personnel demand immediate electronic fund transfers under threat of public humiliation or criminal fabrication.</li>
                  <li><strong>Section 356 BNS (Defamation):</strong> Enforced when agents contact your employer, colleagues, neighbors, or relatives in {city.name} with false claims of financial delinquency.</li>
                  <li><strong>Section 329 BNS (Criminal Trespass):</strong> Triggered when unauthorized agents enter your private residential premises or workplace without statutory warrants.</li>
                </ul>
              </section>

              {/* SECTION 4: High Court Jurisprudence */}
              <section id="high-court-jurisprudence" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  {dynamicContent.highCourtPrecedent.title}
                </h2>
                <div className="bg-[#FAF8F5] border-l-4 border-[#D29E0D] p-5 rounded-r-xl my-4">
                  <p className="font-semibold text-[#30261C] text-sm md:text-base m-0">
                    <span className="text-[#D29E0D]">Landmark Precedent:</span> {dynamicContent.highCourtPrecedent.citation}
                  </p>
                </div>
                <p>
                  {dynamicContent.highCourtPrecedent.analysis}
                </p>
                <p>
                  Should local authorities in {city.name} fail to register an FIR due to administrative resistance, our advocates have the standing to file an urgent Criminal Writ Petition under Article 226 before the <strong>{city.highCourt}</strong>. High Court intervention typically yields immediate restraining orders against {bank.name} and directs state police to provide physical and digital protection to the petitioner.
                </p>
              </section>

              {/* SECTION 5: Step-by-Step Defense Protocol */}
              <section id="defense-protocol" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  {dynamicContent.policeProcedure.title}
                </h2>
                <div className="space-y-4 my-6">
                  {dynamicContent.policeProcedure.steps.map((st, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#30261C] text-base mb-1.5 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D29E0D] text-white text-xs flex items-center justify-center font-bold">{idx + 1}</span>
                        {st.title}
                      </h4>
                      <p className="text-sm text-gray-600 pl-8 m-0">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 6: Workplace Defamation */}
              <section id="workplace-defamation" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Neutralizing Workplace & Third-Party Defamation
                </h2>
                <p>
                  One of the most aggressive tactics employed by outsourced recovery agents from {bank.name} is contacting the borrower workplace, HR department, or reporting manager in {city.name}. This is an intentional tort designed to weaponize employment anxiety.
                </p>
                <p>
                  {bank.name} has zero statutory privilege to communicate financial loan records to your employer. When this occurs, our firm drafts an immediate Corporate Spoliation Notice and Cease & Desist requisition directly to the Chief Risk Officer and Head of Legal at {bank.name}. 
                </p>
                <p>
                  We instruct your human resources department to record the incident and refuse communication with non-credentialed collectors under corporate privacy policies, converting workplace interference into high-value legal leverage for compensatory damages during settlement discussions.
                </p>
              </section>

              {/* SECTION 7: SARFAESI & Unsecured Debt Myths */}
              <section id="sarfaesi-myth" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Busting the SARFAESI & Asset Attachment Myth
                </h2>
                <p>
                  Agents collecting for {bank.name} frequently threaten borrowers in {city.name} with "immediate house sealing," "property auction," or "salary freezing within 24 hours," falsely invoking the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002.
                </p>
                <p>
                  It is an established point of law that <strong>the SARFAESI Act applies strictly to secured credit facilities</strong> where tangible property has been formally mortgaged or hypothecated to the institution. For unsecured credit cards, personal loans, and digital micro-credit:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
                  <li>{bank.name} possesses absolutely no statutory power of summary asset attachment or property seizure.</li>
                  <li>No representative can enter your premises to remove household goods, electronics, or personal belongings.</li>
                  <li>Any civil recovery requires a full-fledged summary suit before a competent civil court, a multi-year judicial proceeding subject to stringent civil evidentiary burdens.</li>
                </ul>
              </section>

              {/* SECTION 8: Case Study */}
              <section id="case-study" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Case Study: {dynamicContent.caseStudy.title}
                </h2>
                <div className="bg-white border border-[#D29E0D]/30 rounded-2xl p-6 md:p-8 shadow-md space-y-4 my-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Client Profile</span>
                      <p className="font-bold text-[#30261C] m-0">{dynamicContent.caseStudy.borrowerProfile}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Disputed Facility</span>
                      <p className="font-bold text-[#D29E0D] m-0">{dynamicContent.caseStudy.loanAmount}</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#30261C] text-sm uppercase tracking-wide text-red-600 mb-1">The Challenge</h5>
                    <p className="text-sm text-gray-600 m-0">{dynamicContent.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#30261C] text-sm uppercase tracking-wide text-blue-700 mb-1">Legal Counter-Strategy</h5>
                    <p className="text-sm text-gray-600 m-0">{dynamicContent.caseStudy.legalAction}</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#D29E0D]/20">
                    <h5 className="font-bold text-[#30261C] text-sm uppercase tracking-wide text-green-700 mb-1">Outcome & Settlement</h5>
                    <p className="text-sm font-medium text-gray-800 m-0">{dynamicContent.caseStudy.resolution}</p>
                  </div>
                </div>
              </section>

              {/* SECTION 9: OTS Negotiation */}
              <section id="ots-negotiation" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Negotiating a Legally Binding OTS with {bank.name}
                </h2>
                <p>
                  The strategic objective of applying legal pressure to {bank.name} is to facilitate a clean, affordable financial resolution. Once illegal collection harassment is brought to an abrupt halt, our advocates engage the bank compromise settlement committee.
                </p>
                <p>
                  With active police complaints and regulatory escalations on record, {bank.name} is compelled to offer substantial waivers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>100% Waiver on Penalties & Compound Interest:</strong> All exorbitant overdue fines and bounce charges are removed from the account ledger.</li>
                  <li><strong>Principal Haircut of 40% to 75%:</strong> Based on verified income disruption and hardship criteria, the outstanding balance is discounted to a realistic lump-sum or structured tranches.</li>
                  <li><strong>Official Settlement Sanction Letter:</strong> We ensure the issuance of a verified, digitally authentic One-Time Settlement letter directly from {bank.name} headquarters, preventing fraudulent local agency traps.</li>
                  <li><strong>No Objection Certificate (NOC):</strong> Full release documentation confirming account closure and cessation of all legal and collection proceedings.</li>
                </ul>
              </section>

              {/* SECTION 10: Advocate Role */}
              <section id="advocate-role" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  The Role of Your Dedicated Legal Counsel
                </h2>
                <p>
                  Unrepresented borrowers routinely face severe asymmetric pressure when trying to negotiate against institutional lenders like {bank.name}. Outsourced collectors are trained to exploit legal unawareness and fear of social embarrassment.
                </p>
                <p>
                  The moment AMA Legal Solutions assumes representation, the power balance shifts decisively. Under established legal protocol, our formal Notice of Representation requires {bank.name} to direct all communications to our offices. We insulate you from intimidation, manage regulatory and criminal filings, and secure your financial dignity.
                </p>

                <div className="bg-[#30261C] text-white p-8 md:p-12 rounded-2xl shadow-2xl mt-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4">
                    <FaShieldAlt className="text-9xl" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10" style={{ fontFamily: "var(--font-polysans)" }}>End the Harassment Today</h3>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto relative z-10 font-light leading-relaxed">
                    Protect your family and career in {city.name}. Engage seasoned banking advocates to neutralize {bank.name} recovery intimidation and settle your debt with complete legal immunity.
                  </p>
                  <Link href="tel:+918178873087" className="inline-block relative z-10">
                    <button className="bg-[#D29E0D] hover:bg-white hover:text-[#30261C] text-white font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(210,158,13,0.5)] text-xl flex items-center justify-center gap-3">
                      <FaPhone className="animate-pulse" /> Call +91 81788 73087 Now
                    </button>
                  </Link>
                </div>
              </section>

              {/* SECTION 11: FAQs */}
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
            
            {/* Escalation Desk Widget */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-[#30261C] mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <FaLandmark className="text-[#D29E0D]" /> {bank.name} Escalation Desk
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Official corporate grievance desk for {bank.name}. Formal notices should be served directly to these registered channels:
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
                    Advocate Malik has defended thousands of borrowers across India against unlawful debt recovery, combining High Court writ protections with strict enforcement of RBI Fair Practice Codes.
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
                <FaGavel className="text-9xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ fontFamily: "var(--font-polysans)" }}>Deploy Legal Shield</h3>
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10 text-sm">
                Stop illegal recovery agent harassment in {city.name} permanently. We serve formal Cease & Desist notices and manage the entire OTS process.
              </p>
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> All direct calls blocked
                </li>
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> Police & Cyber Cell action
                </li>
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> Maximum OTS waivers
                </li>
              </ul>
              <Link href="tel:+918178873087" className="block relative z-10">
                <button className="w-full bg-[#D29E0D] text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#30261C] transition-all duration-300 shadow-lg">
                  Free Legal Consultation
                </button>
              </Link>
            </div>
            
          </aside>
        </div>
      </div>
    </>
  );
}

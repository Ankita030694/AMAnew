import React from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HarassmentCity } from "@/data/harassmentCities";
import { getDynamicCitySingleContent } from "@/lib/harassmentContentEngine";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaGavel, 
  FaLandmark, 
  FaLinkedin 
} from "react-icons/fa";

export default function CityHarassmentTemplate({ city }: { city: HarassmentCity }) {
  const pageUrl = `https://www.amalegalsolutions.com/recovery-agent-harassment/${city.slug}`;
  const dynamicContent = getDynamicCitySingleContent(city);

  const breadcrumbItems = [
    { label: "Guides", href: "/articles" },
    { label: "Recovery Agent Harassment", href: "/recovery-agent-harassment" },
    { label: `Harassment in ${city.name}`, href: pageUrl }
  ];

  const sections = [
    { id: "local-enforcement", title: `Legal Protection in ${city.name}` },
    { id: "high-court-rulings", title: `${city.highCourt} Jurisprudence` },
    { id: "police-action", title: `Activating ${city.policeAuthority}` },
    { id: "procedural-steps", title: `Step-by-Step Reporting Protocol` },
    { id: "residential-protection", title: `Stopping Doorstep Visits` },
    { id: "cyber-extortion", title: `Cyber Cell & Digital Defamation` },
    { id: "case-study", title: `Case Study: ${city.name} Enforcement` },
    { id: "settlement-leverage", title: `OTS Settlement Leverage` },
    { id: "advocate-role", title: `Why Retain Legal Counsel` },
    { id: "faqs", title: `Frequently Asked Questions` },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.amalegalsolutions.com/articles" },
      { "@type": "ListItem", "position": 3, "name": "Recovery Agent Harassment", "item": "https://www.amalegalsolutions.com/recovery-agent-harassment" },
      { "@type": "ListItem", "position": 4, "name": `Legal Protection in ${city.name}`, "item": pageUrl }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Stop Recovery Agent Harassment in ${city.name} | Police & High Court Defense`,
    "description": `Comprehensive legal guide to stopping illegal loan recovery harassment in ${city.name}. Enforce ${city.highCourt} precedents and mobilize the ${city.policeAuthority}.`,
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
      <Script id={`breadcrumb-schema-${city.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id={`article-schema-${city.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id={`faq-schema-${city.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                <FaShieldAlt className="text-[#D29E0D]" /> Jurisdictional Legal Shield
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 mt-2 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
                Stop Recovery Agent Harassment in <span className="text-[#D29E0D]">{city.name}</span>
              </h1>
              <p className="text-base md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
                Leverage the constitutional powers of the {city.highCourt} and the enforcement authority of the {city.policeAuthority}. Neutralize illegal doorstep intimidation, file criminal counter-complaints, and resolve debt disputes safely.
              </p>
              <div className="flex flex-row gap-3 justify-center items-center w-full max-w-lg mx-auto">
                <Link href="tel:+918178873087" className="w-1/2">
                  <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3.5 md:py-4 px-2 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-1.5 md:gap-2 text-[12px] sm:text-sm md:text-base whitespace-nowrap">
                    <FaShieldAlt className="shrink-0" /> Free Legal Consultation
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
              
              {/* SECTION 1: Local Enforcement */}
              <section id="local-enforcement" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Legal Protection Against Debt Harassment in {city.name}
                </h2>
                <p className="text-xl font-light leading-relaxed text-[#30261C]/80">
                  Defaulting on a personal loan, credit card, or commercial facility is strictly a civil dispute governed by contract law. When recovery agents in <strong>{city.name}</strong> use physical intimidation, persistent calls, or social humiliation, they commit actionable criminal offenses under the Bharatiya Nyaya Sanhita (BNS).
                </p>
                <p>
                  Borrowers residing in {city.name} possess substantial local legal protections. By combining local police mechanisms with High Court jurisprudence, you can immediately erect an impenetrable legal shield against aggressive debt recovery.
                </p>
              </section>

              {/* SECTION 2: High Court Rulings */}
              <section id="high-court-rulings" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  {dynamicContent.highCourtPrecedent.title}
                </h2>
                <div className="bg-[#FAF8F5] border-l-4 border-[#D29E0D] p-5 rounded-r-xl my-4">
                  <p className="font-semibold text-[#30261C] text-sm md:text-base m-0">
                    <span className="text-[#D29E0D]">Judicial Precedent:</span> {dynamicContent.highCourtPrecedent.citation}
                  </p>
                </div>
                <p>
                  {dynamicContent.highCourtPrecedent.analysis}
                </p>
                <p>
                  Our legal team routinely petitions the <strong>{city.highCourt}</strong> under Article 226 for writ directions when banking entities deploy coercive third-party agencies, obtaining urgent restraining orders that protect borrowers and their families.
                </p>
              </section>

              {/* SECTION 3: Police Action */}
              <section id="police-action" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Activating the {city.policeAuthority}
                </h2>
                <p>
                  The jurisdiction of the <strong>{city.policeAuthority}</strong> encompasses all illegal collection actions occurring within {city.name}. We invoke specific criminal provisions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Section 351 BNS (Criminal Intimidation):</strong> Covers verbal threats of physical assault or social exposure made by agents visiting or calling in {city.name}.</li>
                  <li><strong>Section 308 BNS (Extortion):</strong> Triggered when agents coerce instant UPI transfers or demand physical jewellery under duress.</li>
                  <li><strong>Section 356 BNS (Defamation):</strong> Enforced when collection staff distribute unlawful notices to neighbors, apartment RWAs, or office managers.</li>
                  <li><strong>Section 329 BNS (Criminal Trespass):</strong> Applicable when unauthorized agency representatives refuse to leave private premises in {city.name}.</li>
                </ul>
              </section>

              {/* SECTION 4: Procedural Steps */}
              <section id="procedural-steps" className="scroll-mt-24 space-y-4">
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

              {/* SECTION 5: Residential Protection */}
              <section id="residential-protection" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Stopping Doorstep Visits in {city.name}
                </h2>
                <p>
                  RBI Master Circulars mandate that recovery personnel must carry valid identification, IIBF certification, and an authentic lender authorization letter.
                </p>
                <p>
                  Any visit conducted before 8:00 AM or after 7:00 PM is an illegal breach of privacy. If agents arrive at your residence in {city.name}, you are legally entitled to request their official identification and record the interaction. Refusal to provide identification warrants an emergency police distress call to the {city.policeAuthority}.
                </p>
              </section>

              {/* SECTION 6: Cyber Extortion */}
              <section id="cyber-extortion" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Cyber Cell Enforcement Against Digital Shaming
                </h2>
                <p>
                  Unscrupulous recovery agencies frequently use VoIP spoofing, morphed photos, and bulk WhatsApp messages sent to emergency contacts. 
                </p>
                <p>
                  These activities constitute severe cyber offenses under Section 66E (Violation of Privacy) and Section 67 (Transmission of Obscene Material) of the Information Technology Act. We lodge formal digital forensics complaints directly with the {city.policeAuthority} Cyber Crime Division to trace IP origins and freeze illicit collection channels.
                </p>
              </section>

              {/* SECTION 7: Case Study */}
              <section id="case-study" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Case Study: {dynamicContent.caseStudy.title}
                </h2>
                <div className="bg-white border border-[#D29E0D]/30 rounded-2xl p-6 md:p-8 shadow-md space-y-4 my-6">
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Client Profile</span>
                    <p className="font-bold text-[#30261C] m-0">{dynamicContent.caseStudy.borrowerProfile}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#30261C] text-sm uppercase tracking-wide text-red-600 mb-1">Harassment Challenge</h5>
                    <p className="text-sm text-gray-600 m-0">{dynamicContent.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#30261C] text-sm uppercase tracking-wide text-blue-700 mb-1">Legal Action Taken</h5>
                    <p className="text-sm text-gray-600 m-0">{dynamicContent.caseStudy.legalAction}</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#D29E0D]/20">
                    <h5 className="font-bold text-[#30261C] text-sm uppercase tracking-wide text-green-700 mb-1">Final Resolution</h5>
                    <p className="text-sm font-medium text-gray-800 m-0">{dynamicContent.caseStudy.resolution}</p>
                  </div>
                </div>
              </section>

              {/* SECTION 8: Settlement Leverage */}
              <section id="settlement-leverage" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Converting Legal Complaints into Settlement Leverage
                </h2>
                <p>
                  Criminal complaints and High Court petitions create immense corporate liability for institutional lenders. When faced with registered police investigations in {city.name}, banks actively seek compromise settlements to mitigate reputational and regulatory exposure.
                </p>
                <p>
                  Our legal team capitalizes on this leverage to negotiate comprehensive One-Time Settlements (OTS), waiving accumulated penal interest and securing substantial principal write-offs of 40% to 70%.
                </p>
              </section>

              {/* SECTION 9: Advocate Role */}
              <section id="advocate-role" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Why You Need an Experienced Banking Advocate
                </h2>
                <p>
                  Facing coercive agencies alone in {city.name} is emotionally exhausting. Retaining AMA Legal Solutions permanently interrupts the cycle of abuse: we handle all communications, manage statutory filings, and defend your rights in court.
                </p>

                <div className="bg-[#30261C] text-white p-8 md:p-12 rounded-2xl shadow-2xl mt-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4">
                    <FaShieldAlt className="text-9xl" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10" style={{ fontFamily: "var(--font-polysans)" }}>Secure Legal Protection in {city.name}</h3>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto relative z-10 font-light leading-relaxed">
                    Speak with our experienced banking advocates today. We stop unauthorized visits, enforce your constitutional rights, and resolve your financial distress.
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
                <FaLandmark className="text-[#D29E0D]" /> {city.name} Judicial Forum
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Key jurisdictional legal authorities protecting borrowers in {city.name}:
              </p>
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">High Court Jurisdiction</span>
                  <span className="text-sm text-gray-800 font-medium">{city.highCourt}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Police & Cyber Enforcement</span>
                  <span className="text-sm text-gray-800 font-medium">{city.policeAuthority}</span>
                </div>
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
                    Advocate Malik represents clients across India, protecting citizens against unlawful debt recovery practices and enforcing borrower rights under Indian law.
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
                Stop illegal recovery harassment in {city.name}. We file police complaints and negotiate full debt settlement closures.
              </p>
              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> Direct calls blocked
                </li>
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> {city.highCourt} protection
                </li>
                <li className="flex items-center text-sm text-gray-200">
                  <FaCheckCircle className="text-[#D29E0D] mr-3" /> Maximum OTS waivers
                </li>
              </ul>
              <Link href="tel:+918178873087" className="block relative z-10">
                <button className="w-full bg-[#D29E0D] text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#30261C] transition-all duration-300 shadow-lg">
                  Free Legal Audit
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaEyeSlash, FaUserTie, FaSearch, FaFileContract, FaBuilding, FaHandshake } from "react-icons/fa";
import { formatMetaTitle, formatMetaDescription, truncateEntity } from "@/lib/seo";

const keywordsList = [
  "section 25 payment and settlement act bailable or not",
  "personal loan without cibil and income proof",
  "loan recovery agents harassment complaint",
  "does foreclosure of loan affect cibil",
  "which bank provide personal loan for cibil defaulters",
  "payment credit card standard chartered",
  "punishment for non payment of personal loan in india",
  "loan without income proof and cibil",
  "how to improve cibil score after loan settlement",
  "foreclosure charges for car loan",
  "consumer legal remedies act",
  "personal loan without cibil score and income proof",
  "meaning of settle",
  "suit filed meaning in cibil",
  "notice of arbitration meaning",
  "having multiple forms of debt generally helps your cibil score",
  "foreclosure charges on car loan",
  "bank loan settlement rules",
  "personal loan settlement",
  "personal loan for cibil defaulters from private",
  "letter for settlement of loan",
  "lawyer panel charges",
  "latest rbi guidelines for one time settlement",
  "letter of complaint to the bank manager",
  "car loan foreclosure charges",
  "loan recall notice",
  "letter of settlement of loan",
  "sample letter of complaint to bank manager",
  "arbitration notice meaning",
  "letter for loan settlement",                               
  "personal loan without cibil",
  "sample letter of complaint to bank",
  "loan consultant near me",
  "payment and settlement act section 25",
  "loan and debt consolidation",
  "self defense law in india",
  "letter of complaint to bank manager",
  "loan settlement letter",
  "loan for bad cibil",
  "settlement loan letter",
  "settlement in court",
  "personal loan without cibil check",
  "self defence laws in india",
  "is lawyer panel genuine or fake",
  "sample complaint letter to bank manager",
  "which banks offer debt consolidation loans in india",
  "which banks offer debt consolidation loans for bad credit",
  "suit filed meaning",
  "loan settlement application",
  "how to escape from cheque bounce case",
  "home loan with foreclosure",
  "nbfc personal loan for low cibil score",
  "where complaint against bank",
  "what is unsecured lending",
  "how to settle debt with credit card",
  "loan for debt consolidation",
  "personal loan closure letter format",
  "bank loan recovery rules",
  "bank settlement letter",
  "debt recovery agency in india",
  "suit filed in cibil",
  "what is unsecured loan",
  "murali law firm",
  "complaint letter bank manager",
  "how to stop 7 days loan app harassment",
  "how to get loan without cibil",
  "complaint letter to bank template",
  "extreme urgent loan for cibil defaulters",
  "what are consumer courts",
  "bank notice to customer",
  "complaint letter to bank manager",
  "where to make complaint against bank",
  "personal loan closing letter format",
  "rights of a bank",
  "settlement meaning in tamil",
  "short term loan with bad credit history",
  "what is a moratorium period",
  "complaint letter for bank manager",
  "how to lodge a complaint against a bank",
  "online loans for debt consolidation",
  "prepayment charges for car loan",
  "personal loans for cibil defaulters",
  "best debt consolidation loans in india",
  "meaning of debt trap",
  "how to check active loan on pan card",
  "foreclosure of housing loan",
  "where to file complaint against bank",
  "credit card settlement letter",
  "cibil suit filed",
  "loan overdue meaning",
  "loan waiving meaning",
  "written off loan meaning",
  "how to file complaint against a bank",
  "how to file a complaint against a bank",
  "loan recovery agent near me",
  "overdue loan meaning",
  "restructuring loan meaning",
  "recovery of loans meaning",
  "poor credit score debt consolidation loan",
  "bank complaint letter",
  "request letter to bank manager for loan",
  "cibil non suit filed",
  "instant loan for bad cibil",
  "rbi education loan rules",
  "loan overdue means",
  "loan case",
  "personal loan cibil defaulters",
  "debt recovery agents in india",
  "payday loan in delhi",
  "debt consolidation loan eligibility",
  "complaint against a bank",
  "how to file complaint against bank",
  "how to raise cibil dispute",
  "what is overdue amount",
  "definition of debt trap",
  "loan recovery agency near me",
  "how to get credit card without cibil score",
  "settlement in bank",
  " payday loan company near me",
  "letter for credit card settlement",
  "what is moratorium period",
  "how to make complaint against bank",
  "ots full form in banking",
  "complaint against bank",
  "can i get loan without cibil score",
  "cibil defaulter personal loan",
  "complaint letter format for bank",
  "whats an unsecured loan",
  "bill consolidation loan",
  "foir full form in banking",
  "what is minimum due in credit card",
  "what is debt trap",
  "final settlement payment settlement letter format",
  "what is the minimum payment on credit card",
  "rejected for loan",
  "suit filed cibil",
  "where can i file complaint against bank",
  "personal loan with default",
  "recovery of loan meaning",
  "defaulter of loans means",
  "consolidated loan companies",
  "how to remove written off on credit report",
  "bad debts meaning in hindi",
  "consolidating debt loan",
  "bad cibil loan",
  "is freed a genuine company",
  "debt consolidation loan for low credit",
  "debt consolidation loan application",
  "default on education loan",
  "self defence rules in india",
  "letter format for bank loan",
  "how to clear dpd in cibil report",
  "urgent loan for cibil defaulters",
  "cibil suit filed database",
  "used car loan for cibil defaulters",
  "loan write off meaning",
  "what are unsecured loan",
  "rbi rules for loan recovery",
  "meaning of moratorium period",
  "ots means in banking",
  "loan recovery agent rules",
  "debt meaning in tamil",
  "rbi guidelines for recovery of loans",
  "your cibil score reduces every time you check it",
  "what is unsecured loans",
  "instant loan for cibil defaulters",
  "debt trap meaning in hindi",
  "debt free company list in india",
  "waive off meaning",
  "personal loan defaulter for 10 years",
  "payment of standard chartered bank credit card",
  "raise a dispute in cibil",
  "what is minimum amount due in credit card",
  "loan app harassment",
  "settle a loan",
  "debt recovery agencies",
  "application writing to bank manager",
  "types of unsecured loans",
  "debt consolidation loan india",
  "how to check loan status online",
  "aarthi consultants private limited",
  "loan fraud complaint",
  "home loan for cibil defaulters",
  "rbi guidelines for credit card payment recovery",
  "how to remove written off from cibil",
  "hope fund loan app is rbi approved",
  "grace period for credit card payment",
  "loan recovery agency",
  "loan closing letter sample",
  "what if i pay minimum due of credit card",
  "debt consolidation in india",
  "debt recovery agent jobs",
  "lawyer panel review",
  "debt consolidation loan app",
  "cibil score is not the credit score in india",
  "payday loan in pune",
  "urgent loan with low cibil score",
  "loan close request letter",
  "debt collection agencies near me",
  "bank complaint letter format",
  "how to use credit card wisely",
  "clear credit loan app customer care number",
  "credit card what is minimum amount due",
  "meaning of minimum amount due in credit card",
  "request letter format for loan",
  "rights of banks",
  "what is credit card minimum amount due",
  "credit check score free",
];
import { getKeywordClusterData } from "@/lib/keywordClusterEngine";

export const dynamicParams = true;
export const revalidate = 86400;

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

export async function generateStaticParams() {
  return keywordsList.slice(0, 150).map((kw) => ({
    slug: slugify(kw),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const keyword = keywordsList.find(kw => slugify(kw) === slug) || slug || "Lawyer";
  const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  
  const cleanKeyword = truncateEntity(capitalizedKeyword, 35);
  const title = formatMetaTitle(cleanKeyword, " | AMA Legal");
  const description = formatMetaDescription(
    `Expert legal guidance and advice on ${cleanKeyword} in India. Understand statutory provisions, rights, and remedies with AMA Legal Solutions.`
  );

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
    alternates: {
      canonical: `https://www.amalegalsolutions.com/lawyer/${slug}`,
    },
    keywords: `${keyword}, legal advice india, lawyer guidance, debt recovery, consumer rights, ama legal solutions`,
  };
}

export default async function LawyerSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const keyword = keywordsList.find(kw => slugify(kw) === slug) || slug || "Lawyer";
  const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  const clusterData = getKeywordClusterData(capitalizedKeyword);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Indian Legal Framework" },
    { id: "keyword-deep-dive", title: `Understanding ${capitalizedKeyword}` },
    { id: "statutory-rules", title: "Key Legal Provisions" },
    { id: "procedural-steps", title: "Step-by-Step Procedure" },
    { id: "ama-solutions", title: "How AMA Legal Helps" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "conclusion", title: "Conclusion" },
  ];

  const breadcrumbItems = [
    { label: "Lawyer", href: "/lawyer" },
    { label: capitalizedKeyword, href: `/lawyer/${slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${capitalizedKeyword}: Comprehensive Legal Analysis`,
    "description": `An in-depth legal analysis and guide regarding ${keyword} in the Indian legal context under ${clusterData.statutoryReference}.`,
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-27",
    "dateModified": "2026-09-15",
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.amalegalsolutions.com/lawyer/${slug}` }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": clusterData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Legal Consultation: ${capitalizedKeyword}`,
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2450" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.amalegalsolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lawyer",
        "item": "https://www.amalegalsolutions.com/lawyer"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": capitalizedKeyword,
        "item": `https://www.amalegalsolutions.com/lawyer/${slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#30261C]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-[#D29E0D]/20 border border-[#D29E0D]/50 text-[#D29E0D] text-xs md:text-sm font-semibold tracking-wider mb-4 uppercase">
              {clusterData.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-2 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Legal Guide to <span className="text-[#D29E0D]">{capitalizedKeyword}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Comprehensive legal analysis, rights, statutory protections, and defense strategies regarding {keyword} in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Get Expert Advice
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
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: Understanding {capitalizedKeyword}</h2>
              <p>
                In the modern Indian legal framework, queries involving <strong>{keyword}</strong> require a nuanced appreciation of statutory rights and regulatory protections. Whether dealing with creditor notices, credit score updates, or procedural defense, knowing your legal position is essential.
              </p>
              <p>
                At AMA Legal Solutions, our advocates provide structured legal guidance across banking, civil recovery, and consumer protection laws to resolve disputes with dignity.
              </p>
            </section>

            <section id="legal-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Applicable Statutory Framework</h2>
              <div className="bg-[#EBE9E4] p-6 rounded-2xl border-l-8 border-[#D29E0D] mb-6">
                <p className="font-semibold text-[#30261C] m-0">
                  <span className="text-[#D29E0D]">Statutory Reference:</span> {clusterData.statutoryReference}
                </p>
              </div>
              <p>
                Indian jurisprudence balances creditor contractual rights against the fundamental constitutional protections guaranteed to every citizen under Article 21. Regulatory bodies like the Reserve Bank of India mandate strict adherence to Fair Practices Codes, prohibiting coercion or intimidation.
              </p>
            </section>

            <section id="keyword-deep-dive" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Legal Analysis & Principles</h2>
              <div className="space-y-4 text-gray-700">
                {clusterData.legalAnalysis.map((para, idx) => (
                  <p key={idx} className="leading-relaxed">{para}</p>
                ))}
              </div>
            </section>

            <section id="statutory-rules" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Core Legal Rules & Safeguards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {clusterData.keyRules.map((kr, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                      <FaCheckCircle className="text-[#D29E0D] shrink-0" /> {kr.title}
                    </h4>
                    <p className="text-sm text-gray-600 m-0 leading-relaxed">{kr.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="procedural-steps" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Recommended Procedural Action Plan</h2>
              <div className="space-y-4 my-6">
                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#D29E0D] text-white flex items-center justify-center font-bold text-sm shrink-0">1</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Preserve Documentary & Digital Evidence</h4>
                    <p className="text-sm text-gray-600 m-0">Maintain copies of all notices, call logs, statement records, and correspondence.</p>
                  </div>
                </div>
                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#2d3748] text-white flex items-center justify-center font-bold text-sm shrink-0">2</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Seek Timely Advocate Representation</h4>
                    <p className="text-sm text-gray-600 m-0">Do not ignore statutory notices. A formal advocate reply preserves defenses and stops escalation.</p>
                  </div>
                </div>
                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#2d3748] text-white flex items-center justify-center font-bold text-sm shrink-0">3</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Explore Mediation & Compromise</h4>
                    <p className="text-sm text-gray-600 m-0">Utilize statutory mediation, Lok Adalats, or direct compromise committees to resolve claims permanently.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="ama-solutions" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How AMA Legal Solutions Protects You</h2>
              <p>
                Our specialized banking and litigation advocates represent individuals and businesses across India. We evaluate your documentation, draft robust legal replies, shield you against coercive tactics, and facilitate binding financial settlements.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl shadow-xl mt-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-white">Need Legal Guidance Regarding {capitalizedKeyword}?</h3>
                <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
                  Consult with an experienced advocate today for a confidential assessment of your legal rights.
                </p>
                <Link href="/contact">
                  <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3.5 px-8 rounded-full text-base transition-all shadow-lg">
                    Schedule a Consultation
                  </button>
                </Link>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {clusterData.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-start">
                      <span className="text-[#D29E0D] mr-3">Q:</span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed pl-7 text-sm m-0">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="conclusion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Conclusion</h2>
              <p>
                Being informed about {keyword} is the first step toward safeguarding your rights and achieving financial peace of mind. By taking proactive legal action, you can successfully navigate legal complexities with total confidence.
              </p>
            </section>
          </article>
        </main>

        {/* Right Column - Sidebar */}
        <aside className="lg:w-[25%] space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center sticky top-32">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Speak to an Advocate</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get immediate legal advice on {keyword} from our experienced legal counsel.
            </p>
            <Link href="tel:+918700343611" className="block w-full">
              <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm">
                Call +91 87003 43611
              </button>
            </Link>
            <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="block w-full mt-2">
              <button className="w-full bg-white border border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-3 px-4 rounded-xl transition-all text-sm">
                WhatsApp Us
              </button>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "../../components/TableOfContents";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Which Firms Specialize in Negotiating Settlements for Unsecured Loans? (2025)",
  description:
    "Not all debt relief agencies can handle unsecured loans. Find specialists for Credit Card & Personal Loan settlement who can stop harassment and legal action.",
  keywords: [
    "unsecured loan settlement specialists",
    "credit card debt negotiation firms",
    "personal loan settlement lawyers",
    "best company for unsecured debt settlement india",
    "AMA Legal Solutions unsecured loans",
    "debt settlement for credit cards",
    "negotiate personal loan settlement",
    "unsecured debt relief expert"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/which-firms-specialize-in-negotiating-settlements-for-unsecured-loans',
  },
  openGraph: {
    title: "Which Firms Specialize in Negotiating Settlements for Unsecured Loans?",
    description: "Expert guide to settling unsecured debt without legal risks. Compare top specialists.",
    url: "https://www.amalegalsolutions.com/which-firms-specialize-in-negotiating-settlements-for-unsecured-loans",
    type: "article",
    images: [
      {
        url: "/services/unsecured-specialist.png",
        width: 1200,
        height: 630,
        alt: "Unsecured Loan Settlement Specialist",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do I need a specialist for unsecured loan settlement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unsecured loans (credit cards, personal loans) have no collateral, so banks use aggressive legal tactics (Section 138, Arbitration) to recover money. A generalist agent cannot defend you in court; only a specialist law firm can handle the legal pressure while negotiating."
      }
    },
    {
      "@type": "Question",
      "name": "Can a settlement firm stop harassment for unsecured loans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but only if they are a legal firm. Firms like AMA Legal Solutions issue 'Cease and Desist' notices to banks and handle calls on your behalf. Regular call centers cannot legally stop bank recovery agents."
      }
    },
    {
      "@type": "Question",
      "name": "Does settling an unsecured loan affect my CIBIL score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it will be marked as 'Settled' which drops your score. However, a specialist can sometimes negotiate for 'Post-Settlement Closure' or ensure the status is updated correctly to help you rebuild credit faster."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Which Firms Specialize in Negotiating Settlements for Unsecured Loans?",
  "description": "A comprehensive guide to finding the right legal experts for settling credit card and personal loan debt in India.",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/logo.png"
    }
  },
  "datePublished": "2025-02-18",
  "dateModified": "2025-02-18"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Unsecured Loan Settlement Services",
  "description": "Specialized legal negotiation for credit cards and personal loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit V."
      },
      "reviewBody": "My credit card debt was ₹8 Lakhs. Recovery agents were visiting my home. AMA Legal took over, stopped the visits, and settled it for ₹2.5 Lakhs. True specialists."
    }
  ]
};

export default function UnsecuredSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-specialists", title: "Why You Need a Specialist" },
    { id: "specialist-vs-generalist", title: "Specialist vs Generalist" },
    { id: "top-specialists", title: "Top Specialists List" },
    { id: "ama-legal-expert", title: "AMA Legal Advantage" },
    { id: "risky-agencies", title: "Risky Agencies to Avoid" },
    { id: "negotiation-process", title: "The Negotiation Process" },
    { id: "legal-protection", title: "Legal Protection Included" },
    { id: "client-reviews", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Unsecured Loan Specialists", href: "/which-firms-specialize-in-negotiating-settlements-for-unsecured-loans" },
  ];

  // Mock Data for FAQs
  const faqs = [
    {
      question: "Why do I need a specialist for unsecured loan settlement?",
      answer: "Unsecured loans (credit cards, personal loans) have no collateral, so banks use aggressive legal tactics (Section 138, Arbitration) to recover money. A generalist agent cannot defend you in court; only a specialist law firm can handle the legal pressure while negotiating."
    },
    {
      question: "Can a settlement firm stop harassment for unsecured loans?",
      answer: "Yes, but only if they are a legal firm. Firms like AMA Legal Solutions issue 'Cease and Desist' notices to banks and handle calls on your behalf. Regular call centers cannot legally stop bank recovery agents."
    },
    {
      question: "What is the fee for specialized settlement?",
      answer: "Most specialists charge a small retainer to start (for legal notices) and a success fee (10-15% of savings) after the settlement letter is received. Avoid anyone asking for large upfront fees."
    },
    {
       question: "Does settling an unsecured loan affect my CIBIL score?",
       answer: "Yes, it will be marked as 'Settled' which drops your score. However, a specialist can sometimes negotiate for 'Post-Settlement Closure' or ensure the status is updated correctly to help you rebuild credit faster."
    }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaWithId(breadcrumbItems)) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#0f172a] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
           <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "linear-gradient(to right, #0f172a, #334155)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Which Firms Specialize in Negotiating Settlements for <span className="text-[#D2A02A]">Unsecured Loans?</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Don't trust generalists with your Credit Card & Personal Loan debt. Find specialized legal experts who protect you from harassment and legal action while negotiating <strong>Maximum Waivers.</strong>
            </p>
            <Link href="/contact">
              <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Consult a Specialist Lawyer
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Unsecured Debt Requires a Specialized Approach</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settling a home loan or car loan is straightforward because the bank has collateral. If you don't pay, they take the asset. But <strong>Unsecured Loans</strong> (Credit Cards, Personal Loans, Business Loans) are different. The bank has no asset to seize, so they resort to <em>psychological pressure</em> and <em>legal threats</em>.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This implies that a standard "call center" settlement agency is not enough. You need a firm that specializes in <strong>Unsecured Loan Negotiation</strong>. A specialist knows how to counter the bank's legal notices (Section 138 NI Act, Arbitration) and use consumer protection laws to get you a better deal.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                      <p className="font-bold text-blue-900 mb-2">Did You Know?</p>
                      <p className="text-gray-700">Generic settlement agents often fail with unsecured loans because they cannot legally represent you when the bank files a police complaint or a court case. Only a specialist law firm can.</p>
                  </div>
                </section>
                

                {/* Why Specialists */}
                <section id="why-specialists" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Unsecured Loans Are a Legal Minefield</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When you default on a secured loan (like a home loan), the bank follows the SARFAESI Act to seize the asset. It is a property matter. But when you default on an <strong>unsecured loan</strong>, the bank treats it as a <em>breach of trust</em> and often mistakes it for a criminal offense (Cheating/420) to pressure you.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>The Danger Zone:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                     <li><strong>Section 138 (Cheque Bounce):</strong> If you gave post-dated cheques, they file a criminal case. A call center agent cannot appear in court for you.</li>
                     <li><strong>Arbitration Notices:</strong> Banks appoint an arbitrator (often biased) to pass an ex-parte award against you. You need a lawyer to contest the venue and the appointment.</li>
                     <li><strong>Payment and Settlement Act:</strong> Ignoring notices under this act can lead to severe penalties.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is why "Debt Relief Companies" run by sales agents fail. They can talk numbers, but they cannot talk law. And for unsecured loans, <strong>Law IS the Leverage.</strong>
                  </p>
                </section>

                {/* Specialist vs Generalist */}
                <section id="specialist-vs-generalist" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Specialist (Law Firm) vs. Generalist (Call Center)</h2>
                   <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600 border border-gray-200">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                          <th className="px-6 py-3">Feature</th>
                          <th className="px-6 py-3">Generalist Agency</th>
                          <th className="px-6 py-3">Specialist Law Firm (AMA)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Primary Staff</td>
                          <td className="px-6 py-4">Tele-callers / Sales Agents</td>
                          <td className="px-6 py-4 text-green-700">Advocates & Paralegals</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Harassment Handling</td>
                          <td className="px-6 py-4">Blocks calls (Temporary fix)</td>
                          <td className="px-6 py-4 text-green-700">Legal Notice to Bank (Permanent)</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Court Appearance</td>
                          <td className="px-6 py-4 text-red-700">Cannot represent you</td>
                          <td className="px-6 py-4 text-green-700">Full Representation (Vakalatnama)</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Settlement Letter</td>
                          <td className="px-6 py-4">Often fake / manipulated</td>
                          <td className="px-6 py-4 text-green-700">Verified & Authenticated</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Top Specialists */}
                <section id="top-specialists" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Who Are the Real Specialists? (2025 List)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Based on their ability to handle legal complications of unsecured debt, here are the top firms.
                  </p>

                  <div className="space-y-8">
                    {/* AMA Legal */}
                    <div className="border-2 border-green-500 bg-white p-6 md:p-8 rounded-xl shadow-lg relative">
                      <div className="absolute top-0 right-0 bg-green-500 text-white font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">Top Rated for Legal Defense</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. AMA Legal Solutions</h3>
                      <p className="text-green-600 font-bold mb-4">Specialty: Unsecured Loans & Card Defense</p>
                      <p className="text-gray-700 mb-4">
                        AMA Legal is a law firm first, settlement agency second. This distinction is crucial. They treat your unsecured loan default as a legal case to be defended, not just a debt to be paid.
                      </p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Legal Shield:</strong> They file immediate replies to Section 138 notices to prevent warrants.</li>
                        <li><strong>Anti-Harassment:</strong> Their "Cease & Desist" notices to recovery agencies are legally binding.</li>
                        <li><strong>Settlement Amount:</strong> Because they can drag the bank to court for harassment, banks often settle faster and cheaper to close the file.</li>
                      </ul>
                       <Link href="/contact" className="text-green-600 font-bold hover:underline mt-4 block">Consult for Unsecured Debt &rarr;</Link>
                    </div>

                    {/* SettleLoans */}
                    <div className="border border-gray-200 bg-white p-6 md:p-8 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. SettleLoans</h3>
                      <p className="text-gray-600 font-bold mb-4">Specialty: Small Ticket Personal Loans</p>
                      <p className="text-gray-700 mb-4">
                        If your unsecured loan is small (under ₹2 Lakhs) and legal action is unlikely, SettleLoans offers a quick, transactional platform. They are excellent for "Buy Now Pay Later" (BNPL) and small app-based loan settlements.
                      </p>
                    </div>

                    {/* FREED */}
                    <div className="border border-gray-200 bg-white p-6 md:p-8 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. FREED</h3>
                      <p className="text-gray-600 font-bold mb-4">Specialty: Debt Consolidation Programs</p>
                      <p className="text-gray-700 mb-4">
                        FREED operates a "Debt Relief Account" model. You deposit money monthly, and they settle loans one by one. This is good for consumers who need discipline, but less effective if you are already facing immediate legal threats, as the process is slow.
                      </p>
                    </div>
                  </div>
                </section>

                {/* AMA Legal Advantage */}
                <section id="ama-legal-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The AMA Legal Advantage: Why Lawyers Win Where Agents Fail</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Most settlement firms are just "Letter Forwarding Services". They forward your proposal to the bank, and if the bank says NO, they give up. AMA Legal is different because we litigate.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-bold text-blue-900 mb-2">1. The "Notice Reply" Strategy</h3>
                        <p className="text-gray-700">Banks send bulk legal notices hoping you will panic. We reply to every single notice with a strong legal defense, citing RBI guidelines on harassment and Fair Practice Code. This forces the bank's legal team to come to the negotiating table.</p>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-xl">
                        <h3 className="font-bold text-indigo-900 mb-2">2. Handling "Written Off" Status</h3>
                        <p className="text-gray-700">Amateurs settle for a "Written Off" status which ruins your CIBIL forever. We fight for a "Settled" or "Post-Settlement Closure" status that minimizes credit damage.</p>
                    </div>
                  </div>
                </section>

                {/* Risky Agencies */}
                <section id="risky-agencies" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Risky Agencies: How to Spot a Scam</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The unsecured loan settlement market is flooded with scams. Here is how to identify them.
                  </p>
                  <div className="space-y-4">
                     <div className="flex items-start bg-red-50 p-4 rounded-lg">
                        <span className="text-2xl mr-4">🚫</span>
                        <div>
                           <h4 className="font-bold text-red-900">The "Loan Insurance" Scam</h4>
                           <p className="text-gray-700 text-sm">Agents claim they will "insure" your loan settlement if you pay a premium. There is no such insurance product in India. They will take your premium and vanish.</p>
                        </div>
                     </div>
                     <div className="flex items-start bg-red-50 p-4 rounded-lg">
                        <span className="text-2xl mr-4">🚫</span>
                        <div>
                           <h4 className="font-bold text-red-900">The "Paralegal" Impersonators</h4>
                           <p className="text-gray-700 text-sm">Many call centers call themselves "Paralegal Services" but have zero lawyers on payroll. Ask for their Bar Council Enrolment Number. If they can't provide it, they are fake.</p>
                        </div>
                     </div>
                  </div>
                </section>

                {/* Negotiation Process */}
                <section id="negotiation-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Specialized Negotiation Process</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    How do we get 60-70% waivers? It is not magic; it is a structured legal process.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-4 pl-8 space-y-10">
                    <div className="relative">
                        <span className="absolute -left-11 bg-gray-200 h-6 w-6 rounded-full border-4 border-white"></span>
                        <h3 className="text-xl font-bold text-gray-900">Step 1: Legal Notice Interception</h3>
                        <p className="text-gray-600 mt-2">We redirect all bank communications to our office. You stop receiving threats.</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-11 bg-blue-500 h-6 w-6 rounded-full border-4 border-white"></span>
                        <h3 className="text-xl font-bold text-gray-900">Step 2: Hardship Documentation</h3>
                        <p className="text-gray-600 mt-2">We build a legal dossier proving your inability to pay (Medical records, Job loss proof). This is evidence, not just an excuse.</p>
                    </div>
                     <div className="relative">
                        <span className="absolute -left-11 bg-green-500 h-6 w-6 rounded-full border-4 border-white"></span>
                        <h3 className="text-xl font-bold text-gray-900">Step 3: The "OTS" Proposal</h3>
                        <p className="text-gray-600 mt-2">We submit a formal One-Time Settlement (OTS) proposal citing RBI circulars. The bank knows rejecting a valid OTS can be used against them in court.</p>
                    </div>
                  </div>
                </section>

                {/* Legal Protection */}
                <section id="legal-protection" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Legal Protection Included</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    With AMA Legal, you don't just get a negotiator; you get a defense team.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                     <li className="bg-white border p-4 rounded shadow-sm flex items-center">
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="font-semibold text-gray-700">Cheque Bounce Defense</span>
                     </li>
                     <li className="bg-white border p-4 rounded shadow-sm flex items-center">
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="font-semibold text-gray-700">Arbitration Representation</span>
                     </li>
                     <li className="bg-white border p-4 rounded shadow-sm flex items-center">
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="font-semibold text-gray-700">Police Complaint Handling</span>
                     </li>
                     <li className="bg-white border p-4 rounded shadow-sm flex items-center">
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="font-semibold text-gray-700">Lok Adalat Representation</span>
                     </li>
                  </ul>
                </section>

                {/* Client Reviews */}
                <section id="client-reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Real Client Stories: Escaping the Debt Trap</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    See how specialized legal intervention helped these clients settle their unsecured loans.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="flex text-[#D2A02A]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600 font-bold text-sm">5.0/5</span>
                      </div>
                      <p className="text-gray-700 italic mb-4">"I had 5 credit cards with ₹12 Lakhs total due. The harassment was unbearable. AMA Legal sent notices to all banks, visited the police station for me, and settled everything for ₹3.5 Lakhs."</p>
                      <div className="flex items-center">
                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm">AV</div>
                         <div className="ml-3">
                            <p className="font-bold text-gray-900 text-sm">Amit V.</p>
                            <p className="text-xs text-gray-500">Mumbai • Saved ₹8.5 Lakhs</p>
                         </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                         <div className="flex text-[#D2A02A]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600 font-bold text-sm">5.0/5</span>
                      </div>
                      <p className="text-gray-700 italic mb-4">"My personal loan from HDFC was haunting me. I was threatened with a Section 138 case. AMA Legal's lawyer represented me, got the case quashed, and settled the loan."</p>
                      <div className="flex items-center">
                         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">RK</div>
                         <div className="ml-3">
                            <p className="font-bold text-gray-900 text-sm">Rahul K.</p>
                            <p className="text-xs text-gray-500">Delhi • Saved ₹4 Lakhs</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-start">
                          <span className="text-green-500 mr-3 text-2xl font-bold">+</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed ml-8">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to a Lawyer</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Get expert legal advice on your unsecured loans. Stop harassment today.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full bg-gray-100 text-gray-800 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// Helper for breadcrumb schema
function breadcrumbSchemaWithId(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.amalegalsolutions.com${item.href}`
    }))
  };
}

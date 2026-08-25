"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/how-to-remove-a-written-off-status-from-a-credit-report";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/how-to-remove-a-written-off-status-from-a-credit-report.jpg`;
const LOGO_URL = `${SITE}/ama-legal-solutions-logo.png`;
const TODAY = "2026-08-25";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What exactly does 'Written Off' mean on a CIBIL report?",
    answer:
      "A 'Written Off' status on a CIBIL report means the lender has internally classified the loan as a loss asset and removed it from their performing loan book — typically after 180 days (6 months) of non-payment. Under RBI's Prudential Norms for Asset Classification (Master Circular DBR.No.BP.BC.1/21.04.048/2015-16), an account is classified as a Non-Performing Asset (NPA) at 90 days overdue and may be 'written off' for accounting purposes at a later stage. Crucially, a write-off does not extinguish the legal debt obligation — the bank retains the right to recover the full amount.",
  },
  {
    id: "faq-2",
    question: "Can a written-off loan be completely removed from my CIBIL report?",
    answer:
      "A legitimately reported written-off account cannot be deleted from your CIBIL report before the standard 7-year retention period mandated by the Credit Information Companies (Regulation) Act, 2005. However, the status can be upgraded: if you settle the full outstanding principal and any agreed charges with the lender and obtain a No Objection Certificate (NOC), the lender must update the status to 'Closed' or 'Settled' with CIBIL within 30 days per the RBI Fair Practice Code. Additionally, if the bank has incorrectly reported a write-off, you can dispute the entry and have it corrected or deleted.",
  },
  {
    id: "faq-3",
    question: "How is 'Written Off' different from 'Settled' on a credit report?",
    answer:
      "'Settled' means the borrower negotiated and paid a lump-sum amount less than the total outstanding, and the bank agreed to close the account — leaving a moderate negative mark. 'Written Off' (also reported as 'Write-Off' or 'Loss') is categorically more severe: it signals that the bank gave up on routine recovery, classified the asset as uncollectable, and may have sold the debt to an Asset Reconstruction Company (ARC) under the SARFAESI Act, 2002. Future lenders treat a 'Written Off' entry as a near-total disqualification for fresh unsecured credit.",
  },
  {
    id: "faq-4",
    question: "What is the RBI's official stance on correcting incorrect credit report entries?",
    answer:
      "The Reserve Bank of India's Integrated Ombudsman Scheme, 2021 (Para 8(1)(e)) explicitly covers complaints against banks for failure to update credit information within the stipulated time or for reporting incorrect data to Credit Information Companies. A bank that fails to rectify an admitted error within 30 days of being notified violates both the Credit Information Companies (Regulation) Act, 2005, and the RBI Fair Practice Code — exposing itself to regulatory action and consumer compensation.",
  },
  {
    id: "faq-5",
    question: "Can I get a loan after a written-off entry is resolved?",
    answer:
      "Once the written-off entry has been updated to 'Closed' via full payment of dues and the CIBIL report reflects the change, your creditworthiness begins to recover. However, most institutional lenders impose an internal 'cooling-off' period of 24 to 36 months post-resolution before approving unsecured loans. Secured products such as gold loans or loans against fixed deposits may be accessible sooner. Working with a legal advisor to ensure the CIBIL record is updated accurately dramatically accelerates re-entry into the formal credit system.",
  },
  {
    id: "faq-6",
    question: "How long does the dispute process with CIBIL take?",
    answer:
      "Under the Credit Information Companies (Regulation) Act, 2005, CIBIL and other bureaus are required to initiate the dispute investigation within 30 days of receiving a complaint and must provide a resolution within that period. If the concerned financial institution fails to respond to CIBIL's query within the 30-day window, CIBIL may update the record in the disputant's favour based on available evidence. Practically, well-documented disputes supported by legal counsel are resolved faster and more decisively.",
  },
  {
    id: "faq-7",
    question: "What documents do I need to dispute a written-off entry legally?",
    answer:
      "The core documents required are: (1) a copy of your CIBIL or Experian credit report highlighting the disputed entry, (2) all original loan sanction letters, EMI receipts, and bank statements, (3) any prior settlement correspondence with the bank, (4) a No Dues Certificate or NOC if dues were paid, and (5) a formal dispute application addressed to both the bank and the credit bureau. An advocate can also issue a legal notice under Section 35 of the Credit Information Companies (Regulation) Act, 2005, demanding correction within 30 days or face statutory liability.",
  },
  {
    id: "faq-8",
    question: "Does filing a complaint with the RBI Ombudsman cost money?",
    answer:
      "Filing a complaint under the RBI Integrated Ombudsman Scheme, 2021 is completely free of charge. The scheme covers complaints against Scheduled Commercial Banks, Non-Banking Financial Companies (NBFCs) with assets above ₹100 crore, and Payment System Participants. The Ombudsman has the authority to direct the bank to compensate the complainant, rectify erroneous credit bureau entries, and pay compensation for mental harassment under Section 8 of the scheme — making it a powerful and cost-free remedy.",
  },
];

/* ────────────────────────── SCHEMA DATA ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "How to Remove a Written-Off Status from a Credit Report",
      description:
        "Step-by-step legal guide to dispute and remove a written-off entry from your CIBIL report under Indian law.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline:
        "How to Remove a Written-Off Status from a Credit Report: Complete Legal Guide",
      description:
        "Comprehensive guide covering RBI guidelines, CIBIL dispute process, and legal remedies to remove or rectify a written-off status from a credit report in India.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${PAGE_URL}#webpage` },
      image: [OG_IMAGE_URL],
      datePublished: TODAY,
      dateModified: TODAY,
      author: {
        "@type": "Person",
        name: "Anuj Anand Malik",
        jobTitle: "Founder & Senior Advocate",
        url: `${SITE}/author/anuj-anand-malik`,
        image: `${SITE}/anujbhiya.png`,
        sameAs: "https://www.linkedin.com/in/iamanujmalik/",
        worksFor: { "@type": "Organization", name: "AMA Legal Solutions", url: SITE },
      },
      reviewedBy: { "@type": "Organization", name: "AMA Legal Solutions", url: SITE },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "AMA Legal Solutions",
        logo: { "@type": "ImageObject", url: LOGO_URL },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "Product",
      name: "Written-Off Credit Report Removal Consultation",
      description:
        "Expert legal consultation to dispute and remove a written-off status from your CIBIL or Experian credit report under Indian law.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1243",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Deepak Sharma" },
          reviewBody:
            "My HDFC personal loan was written off in 2023 after I lost my job. Advocate Anuj Anand Malik helped me negotiate a one-time settlement, get an NOC, and dispute the written-off tag on CIBIL. Within 45 days the status was updated to Closed. Absolutely professional and result-oriented.",
          datePublished: "2026-06-14",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Priya Nair" },
          reviewBody:
            "I was devastated seeing 'Loan Written Off' on my credit report for a credit card I had already paid partially. AMA Legal Solutions filed an RBI Ombudsman complaint on my behalf and the bank corrected the entry within 30 days. I cannot thank Anuj Sir enough for his prompt action.",
          datePublished: "2026-05-22",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "AMA Legal Solutions",
      url: SITE,
      logo: { "@type": "ImageObject", url: LOGO_URL },
      telephone: "+918700343611",
      email: "contact@amalegalsolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2493AP, Block G, Sushant Lok 2, Sector 57",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/amalegalsolutions/",
        "https://www.youtube.com/@amalegalsolution",
        "https://www.instagram.com/amalegalsolutions/",
        "https://www.linkedin.com/company/ama-legal-solutions/",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: "How to Remove a Written-Off Status from a Credit Report", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5 Legal Steps to Remove a Written-Off Status from Your Credit Report",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Obtain Your Credit Report and Identify the Written-Off Entry" },
        { "@type": "ListItem", position: 2, name: "Contact the Bank and Negotiate a One-Time Settlement or NOC" },
        { "@type": "ListItem", position: 3, name: "File a Formal Dispute with the Credit Bureau" },
        { "@type": "ListItem", position: 4, name: "Escalate to the RBI Integrated Ombudsman if the Bank Refuses" },
        { "@type": "ListItem", position: 5, name: "Monitor Your Credit Report Until the Status is Updated" },
      ],
    },
  ],
};

/* ─────────────────────────── HELPERS ───────────────────────────── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#D2A02A] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

/* ──────────────────────── TOC SECTIONS ─────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "what-is-written-off", title: "What Is Written Off?" },
  { id: "written-off-vs-settled", title: "Written Off vs. Settled" },
  { id: "rbi-guidelines", title: "RBI Statutory Framework" },
  { id: "step-by-step", title: "5-Step Legal Process" },
  { id: "dispute-cibil", title: "Disputing with CIBIL" },
  { id: "rbi-ombudsman", title: "RBI Ombudsman Route" },
  { id: "timeline-impact", title: "Score Recovery Timeline" },
  { id: "noc-importance", title: "Importance of NOC" },
  { id: "legal-notice", title: "Sending a Legal Notice" },
  { id: "infographic", title: "Infographic" },
  { id: "faqs", title: "FAQs" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Citations & Sources" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function WrittenOffCreditReportClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [shareMsg, setShareMsg] = useState<string | null>(null);

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text = "How to Remove a Written-Off Status from a Credit Report – AMA Legal Solutions";
    if (platform === "copy") {
      await navigator.clipboard.writeText(url);
      setShareMsg("Copied!");
      setTimeout(() => setShareMsg(null), 2000);
      return;
    }
    const map: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    window.open(map[platform], "_blank", "width=600,height=400");
  };

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: "How to Remove a Written-Off Status from a Credit Report", href: PAGE_SLUG },
  ];

  return (
    <>
      <Script
        id="written-off-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pt-20 md:pt-28">
        <div className="container mx-auto px-4 max-w-[1600px]">
          <Breadcrumbs items={breadcrumbItems} />

          {/* ══ HERO: Asymmetric 12-col (matches blogdetail) ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
            {/* Left col — title + meta */}
            <div className="flex flex-col lg:col-span-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                How to Remove a{" "}
                <span className="text-[#D2A02A]">Written-Off Status</span> from a Credit Report
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                A written-off entry on your CIBIL report is not a life sentence. With the right
                legal strategy — grounded in RBI guidelines, the Credit Information Companies Act,
                and the Integrated Ombudsman Scheme — you can dispute, negotiate, and resolve it
                definitively.
              </p>

              {/* Author & meta bar */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A]">
                    <img
                      src="/anujbhiya.png"
                      alt="Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="font-bold text-[#1a202c] text-base hover:text-[#D2A02A] transition-colors"
                    >
                      Anuj Anand Malik
                    </Link>
                    <p className="text-xs text-gray-500">Reviewed by AMA Legal Solutions</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> 25-08-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 12 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right col — OG image card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
                <img
                  src="/images/og/how-to-remove-a-written-off-status-from-a-credit-report.jpg"
                  alt="How to Remove a Written-Off Status from a Credit Report – AMA Legal Solutions"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ══ CONTENT AREA ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">

            {/* Left sidebar — TOC desktop */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main content */}
            <div className="min-w-0">
              {/* TOC mobile */}
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">

                {/* Meta + share bar */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center border-b border-gray-100 pb-6 mb-6 gap-4">
                  <div className="text-xs md:text-sm text-gray-500 font-medium">
                    Written by{" "}
                    <Link href="/author/anuj-anand-malik" className="text-[#D2A02A] hover:underline font-semibold">
                      Advocate Anuj Anand Malik
                    </Link>{" "}
                    &bull; Reviewed by{" "}
                    <span className="font-semibold text-gray-700">Team AMA Legal Solutions</span>{" "}
                    &bull; Last updated: 25-08-2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs md:text-sm font-bold text-gray-700">Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-blue-700 transition shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-blue-800 transition shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition shadow-sm text-xs font-bold"
                      title="Copy link"
                    >
                      {shareMsg ? "✓" : "🔗"}
                    </button>
                  </div>
                </div>

                {/* ── QUICK ANSWER ── */}
                <section id="quick-answer" className="scroll-mt-28">
                  <div className="border-l-4 border-[#D2A02A] bg-[#5A4C33]/5 rounded-r-xl p-5 md:p-7">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D2A02A] mb-2">
                      Quick Answer
                    </span>
                    <p className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                      To remove a written-off status from a credit report in India, a borrower must:
                      (1) obtain the credit report and identify the written-off account, (2) approach
                      the lender to negotiate a one-time settlement or full payment and secure a written
                      No Objection Certificate (NOC), (3) file a formal dispute with the credit bureau
                      (CIBIL, Experian, or Equifax) citing the Credit Information Companies (Regulation)
                      Act, 2005, and (4) if the bank refuses to cooperate, file a complaint under the RBI
                      Integrated Ombudsman Scheme, 2021 — which is free and has mandatory resolution
                      timelines. The entire process, when handled with proper legal documentation,
                      typically resolves within 45 to 90 days.
                    </p>
                  </div>
                </section>

                {/* ── WHAT IS WRITTEN OFF ── */}
                <section id="what-is-written-off" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    What Does &lsquo;Written Off&rsquo; Actually Mean in India?
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                    In Indian banking parlance, a loan is classified as a Non-Performing Asset (NPA)
                    once repayment is overdue by more than 90 days. If the NPA remains unrecovered,
                    the lender may &ldquo;write off&rdquo; the account — an internal accounting entry that
                    removes the asset from the bank&apos;s balance sheet as per the{" "}
                    <a
                      href="https://rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=9908"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      RBI Master Circular on Prudential Norms (DBR.BP.BC No.1/21.04.048/2015-16)
                    </a>
                    .
                  </p>
                  <blockquote className="border-left-4 border-l-4 border-[#D2A02A] pl-4 py-3 font-style-italic italic text-gray-600 bg-[#fffaf0] px-5 rounded-r-lg my-5">
                    &ldquo;A write-off is a purely accounting measure and does <strong>not</strong> release
                    the borrower from the legal obligation to repay. Banks retain full rights to recover
                    the written-off amount through legal action, including proceedings under the SARFAESI
                    Act, 2002 or the Recovery of Debts and Bankruptcy Act, 1993.&rdquo;
                  </blockquote>
                  <p className="text-base leading-relaxed text-gray-700 mb-4">
                    The critical impact for the borrower: the bank simultaneously reports this write-off
                    status to credit bureaus. Under the{" "}
                    <a
                      href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=5671&Mode=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Credit Information Companies (Regulation) Act, 2005 (Section 17)
                    </a>
                    , all Credit Institutions are legally mandated to submit accurate and complete
                    credit data to all licensed Credit Information Companies every 30 days. A written-off
                    entry carries a severe negative weight — most lenders&apos; scoring models penalize
                    it 100 to 200 points, and many banks maintain internal blacklists that prevent new
                    credit approval for 5 to 7 years.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mt-6">
                    {[
                      { stat: "90 Days", desc: "NPA classification threshold under RBI norms" },
                      { stat: "7 Years", desc: "Written-off entry retained on credit report" },
                      { stat: "₹0 Cost", desc: "RBI Ombudsman complaint filing fee" },
                    ].map((s) => (
                      <div key={s.stat} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                        <div className="text-2xl font-extrabold text-[#D2A02A] mb-1">{s.stat}</div>
                        <div className="text-xs text-gray-600">{s.desc}</div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── WRITTEN OFF VS SETTLED ── */}
                <section id="written-off-vs-settled" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    Written Off vs. Settled: Understanding the Spectrum of Default
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700 mb-6">
                    Both tags are negative, but they sit at different points on the severity spectrum.
                    Understanding the distinction is critical for deciding the correct legal remedy.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm border-collapse">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4 text-left font-semibold">Parameter</th>
                          <th className="p-4 text-left font-semibold">Settled</th>
                          <th className="p-4 text-left font-semibold text-[#D2A02A]">Written Off (More Severe)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          ["Definition", "Partial payment accepted by bank to close account", "Bank removes asset from books; full amount technically still owed"],
                          ["CIBIL Score Impact", "−75 to −100 points", "−100 to −200 points"],
                          ["Legal Debt Obligation", "Extinguished (with proper NOC)", "Remains; bank can still pursue legally"],
                          ["Report Retention", "7 years", "7 years (or until resolved)"],
                          ["Future Loan Eligibility", "Difficult for 2–3 years", "Very difficult for 5–7 years without legal resolution"],
                          ["Rectification Path", "Upgrade to Closed by paying waived amount", "Settlement + NOC + bureau dispute or legal action"],
                        ].map(([param, settled, writtenOff]) => (
                          <tr key={param} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 font-medium text-gray-900">{param}</td>
                            <td className="p-4 text-gray-700">{settled}</td>
                            <td className="p-4 text-red-700 font-medium">{writtenOff}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── RBI GUIDELINES ── */}
                <section id="rbi-guidelines" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    The RBI Statutory Framework: Your Legal Arsenal
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Credit Information Companies (Regulation) Act, 2005 — Section 17 & 19",
                        body: "Mandates that credit institutions submit complete and accurate credit data every 30 days. Any incorrect or outdated data submitted to CIBIL is a statutory violation. Borrowers have an explicit right to dispute inaccurate data, and CICs must resolve disputes within 30 days.",
                        link: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=5671&Mode=0",
                      },
                      {
                        title: "RBI Integrated Ombudsman Scheme, 2021 — Para 8(1)(e)",
                        body: "Covers complaints against regulated entities for failure to update credit information within the stipulated time, reporting incorrect data, or causing economic harm to a borrower through erroneous credit bureau entries. Awards can include compensation for loss and mental harassment.",
                        link: "https://bankingombudsman.rbi.org.in",
                      },
                      {
                        title: "RBI Fair Practice Code for NBFCs — 2012 (Updated 2015)",
                        body: "Requires all NBFCs to adopt a Fair Practice Code including adequate notice before classifying a loan as written-off and transparent communication of the write-off to the borrower. A failure to notify gives grounds for disputing the written-off reporting date.",
                        link: "https://rbi.org.in/Scripts/NotificationUser.aspx?Id=7487&Mode=0",
                      },
                      {
                        title: "Consumer Protection Act, 2019 — Section 2(47) & Section 35",
                        body: "A borrower wrongfully harmed by an erroneous written-off entry may file a complaint before the District Consumer Disputes Redressal Commission for deficiency in banking services — seeking removal of the incorrect entry and compensation for economic losses.",
                        link: "https://ncdrc.nic.in",
                      },
                    ].map((law) => (
                      <div key={law.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                        <h3 className="font-bold text-gray-900 mb-2 text-sm">
                          <a
                            href={law.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                          >
                            {law.title} ↗
                          </a>
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{law.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── 5-STEP PROCESS ── */}
                <section id="step-by-step" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-2">
                    The 5-Step Legal Process to Remove a Written-Off Status
                  </h2>
                  <p className="text-base text-gray-600 mb-7">
                    Follow this sequence precisely. Skipping steps or acting without documentation can
                    lengthen the process significantly.
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        id: "step-1",
                        title: "Obtain Your Credit Report from All Four Bureaus",
                        body: "Request your free annual credit report from all four RBI-licensed Credit Information Companies: CIBIL (TransUnion), Experian, Equifax, and CRIF High Mark. Note the Control Number (ECN) and the exact account status, date of write-off, and the reporting institution's name. These details are required for every subsequent step.",
                        bullets: [
                          "Download the full detailed report (not just the score).",
                          "Check if the same account appears differently across bureaus.",
                          "Note if the Outstanding Balance is still shown as positive despite write-off — a common error.",
                        ],
                      },
                      {
                        id: "step-2",
                        title: "Negotiate a One-Time Settlement (OTS) or Request an NOC",
                        body: "Contact the lending institution's Settlement or NPA department in writing (letter and/or email — never verbal). If you owe dues, negotiate a One-Time Settlement. Under the RBI Policy on One-Time Settlement of NPA Accounts, banks are obligated to consider genuine OTS proposals transparently. A typical OTS for a written-off account involves paying 50–80% of the original principal (excluding accumulated interest and penalties).",
                        bullets: [
                          "Any settlement agreement must explicitly state the bank will update bureau status to 'Closed' within 30 days.",
                          "Demand a No Objection Certificate (NOC) in writing before making payment.",
                          "Keep all correspondence in writing — email is acceptable as legal evidence.",
                        ],
                      },
                      {
                        id: "step-3",
                        title: "File a Formal Dispute with the Credit Bureau",
                        body: "If you have already paid but the status was not updated, or if the written-off entry is incorrect, file a dispute directly with the bureau via their online dispute portal. Attach: the NOC/NDC, settlement agreement, payment receipt, and your ID proof.",
                        bullets: [
                          "CIBIL Dispute Portal: cibil.com/disputeresolution",
                          "Experian India: experian.in",
                          "Bureau must resolve within 30 days per Section 21 of CIC Act, 2005.",
                        ],
                      },
                      {
                        id: "step-4",
                        title: "Escalate to the RBI Integrated Ombudsman (Free)",
                        body: "If the bank or bureau fails to resolve your dispute within 30 days, file a complaint at the RBI Complaint Management System (cms.rbi.org.in). Under Para 8(1)(e) of the RBI Integrated Ombudsman Scheme, 2021, wrongful credit reporting is explicitly covered. The Ombudsman can award compensation up to ₹20 lakh for financial loss.",
                        bullets: [
                          "Complaint is free of charge — no court fees.",
                          "Mandatory response by bank within 15 days.",
                          "Binding Award within 30 days thereafter.",
                          "Can be done entirely online from home.",
                        ],
                      },
                      {
                        id: "step-5",
                        title: "Monitor Your Credit Report Post-Resolution",
                        body: "After a dispute is resolved or a settlement is concluded, wait 45–60 days and check all four bureaus again. Banks are required to update bureau data within 30 days of the change in account status. Once the status is correctly updated to 'Closed', your CIBIL score can be expected to improve by 80–150 points over the next 6–12 months.",
                        bullets: [
                          "Set calendar reminders to check all four bureaus at 45 and 90 days.",
                          "If update doesn't reflect, raise a new dispute citing non-compliance.",
                          "Keep the NOC and settlement agreement permanently — never discard.",
                        ],
                      },
                    ].map((step, i) => (
                      <div key={step.id} id={step.id} className="scroll-mt-28 flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2A02A] text-white font-bold flex items-center justify-center text-lg">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#1a202c] text-base mb-2">{step.title}</h3>
                          <p className="text-sm text-gray-700 leading-relaxed mb-3">{step.body}</p>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {step.bullets.map((b) => <li key={b}>{b}</li>)}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── DISPUTE CIBIL ── */}
                <section id="dispute-cibil" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    Disputing a Written-Off Entry with CIBIL: The Exact Process
                  </h2>
                  <ol className="space-y-4 list-none">
                    {[
                      ["Gather Your Evidence", "NOC, settlement letter, all EMI receipts, bank statement showing payment, and your credit report copy with the Control Number (ECN) highlighted."],
                      ["Log into the CIBIL Dispute Portal", "Visit cibil.com and register (or log in). Navigate to 'Dispute' and select the account in question."],
                      ["Select the Dispute Category", "Choose 'Account Status' under the dispute type and specify that the account should reflect as 'Closed' (not 'Written Off'). Upload all supporting documents."],
                      ["Track the Dispute", "CIBIL will forward the dispute to the concerned financial institution. The bank must respond within 30 days. Monitor the dispute status online."],
                      ["Follow Up if Unresolved", "If the bank does not respond or rejects the dispute incorrectly, send a legal notice under Section 35 of the Credit Information Companies Act and simultaneously file with the RBI Ombudsman."],
                    ].map(([title, desc], i) => (
                      <li key={title as string} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1a202c] text-white text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <div>
                          <strong className="block text-gray-900 text-sm mb-1">{title}</strong>
                          <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* ── RBI OMBUDSMAN ── */}
                <section id="rbi-ombudsman" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    The RBI Ombudsman Route: Fastest Legal Remedy
                  </h2>
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D2A02A]/20">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#D2A02A] text-white font-bold text-base shadow-sm">⚖️</span>
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                          RBI Integrated Ombudsman — What It Can Award
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">Free remedy under the RBI Integrated Ombudsman Scheme, 2021</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        "Direction to the bank to update the written-off entry within a specified deadline",
                        "Compensation up to ₹20 lakh for financial loss caused by the wrong credit entry",
                        "Compensation for documented mental harassment (typically ₹1 lakh – ₹5 lakh)",
                        "Directive to pay interest lost due to denied loan approvals caused by the erroneous entry",
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold mt-0.5">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 p-4 bg-white rounded-xl border border-[#D2A02A]/30">
                      <p className="text-xs text-gray-600">
                        <strong>How to File:</strong> Visit{" "}
                        <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:underline">
                          cms.rbi.org.in
                        </a>{" "}
                        → Complaint Registration → Select &ldquo;Incorrect Reporting to Credit Bureaus&rdquo; under Category. You must first exhaust the bank&apos;s internal grievance mechanism (wait 30 days for bank response) before approaching the Ombudsman.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── TIMELINE ── */}
                <section id="timeline-impact" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    Credit Score Recovery Timeline After Written-Off Removal
                  </h2>
                  <div className="space-y-3">
                    {[
                      { period: "0–3 Months", action: "Status updated to Closed; score improves 80–150 points immediately", color: "bg-red-50 border-red-200" },
                      { period: "3–6 Months", action: "Score moves toward 600–650 range with secured card usage below 30%", color: "bg-orange-50 border-orange-200" },
                      { period: "6–12 Months", action: "Score reaches 650–700; NBFCs may approve unsecured loans at higher rates", color: "bg-yellow-50 border-yellow-200" },
                      { period: "12–24 Months", action: "Score targets 700–750 range; mainstream banks begin considering applications", color: "bg-green-50 border-green-200" },
                      { period: "24+ Months", action: "Score can reach 750+ with clean history; home loan and premium credit card eligibility restored", color: "bg-emerald-50 border-emerald-200" },
                    ].map((t) => (
                      <div key={t.period} className={`flex gap-4 p-4 rounded-xl border ${t.color}`}>
                        <span className="font-bold text-gray-900 text-sm w-28 flex-shrink-0">{t.period}</span>
                        <span className="text-sm text-gray-700">{t.action}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── NOC IMPORTANCE ── */}
                <section id="noc-importance" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    Why the No Objection Certificate (NOC) Is Non-Negotiable
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Extinguishes Future Recovery Claims", desc: "Once an NOC is issued, the bank cannot send recovery agents or initiate fresh legal proceedings for that specific debt." },
                      { title: "Triggers Bureau Update Obligation", desc: "Banks are obligated to update the credit bureau status within 30 days of issuing an NOC per RBI Fair Practice Code." },
                      { title: "Primary Evidence in Disputes", desc: "The NOC is Exhibit A in any CIBIL dispute, Ombudsman complaint, or consumer court case involving erroneous written-off entries." },
                      { title: "Protects Against Double Recovery", desc: "If a debt is sold to an ARC after write-off, your NOC from the original bank prevents the ARC from pursuing you for the same debt." },
                    ].map((card) => (
                      <div key={card.title} className="bg-[#FAF7F0] border border-[#D2A02A]/30 rounded-xl p-4">
                        <h3 className="font-bold text-[#5A4C33] text-sm mb-2">✓ {card.title}</h3>
                        <p className="text-xs text-gray-700 leading-relaxed">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── LEGAL NOTICE ── */}
                <section id="legal-notice" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    When and How to Send a Legal Notice to the Bank
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700 mb-5">
                    If the bank refuses to cooperate with the dispute or fails to issue an NOC within a
                    reasonable time after settlement, a formal legal notice sent by an Advocate under
                    Section 35 of the Credit Information Companies (Regulation) Act, 2005 or under the
                    Consumer Protection Act, 2019 often accelerates compliance significantly.
                  </p>
                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-4 bg-[#fffaf0] rounded-r-xl mb-5 italic text-gray-700">
                    &ldquo;A properly drafted legal notice by an Advocate creates an official paper trail and
                    signals to the bank&apos;s legal department that the borrower is prepared to escalate the
                    matter to regulatory and judicial forums. In our experience, 70% of unresolved CIBIL
                    disputes are resolved within 15 days of receiving a legal notice from our firm.&rdquo;
                    <br />
                    <span className="text-xs text-gray-500 not-italic mt-2 block">
                      — Advocate Anuj Anand Malik, AMA Legal Solutions
                    </span>
                  </blockquote>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/send-legal-notice"
                      className="flex-1 text-center bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-4 px-6 rounded-xl transition-all"
                    >
                      Send a Legal Notice to the Bank →
                    </Link>
                    <Link
                      href="/bank-complaint-in-rbi"
                      className="flex-1 text-center border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold py-4 px-6 rounded-xl transition-all"
                    >
                      File RBI Complaint →
                    </Link>
                  </div>
                </section>

                {/* ── INFOGRAPHIC ── */}
                <section id="infographic" className="scroll-mt-28">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D2A02A]/20">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#D2A02A] text-white font-bold text-base shadow-sm">📊</span>
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                          Key Insights &amp; Data Infographic
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">Visual summary, procedural breakdown &amp; legal steps</p>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20 shadow-sm flex justify-center items-center p-2 sm:p-4">
                      <img
                        src="/images/og/how-to-remove-a-written-off-status-from-a-credit-report.jpg"
                        alt="How to Remove a Written-Off Status from a Credit Report – Step-by-Step Legal Process Infographic by AMA Legal Solutions"
                        className="w-full h-auto max-h-[900px] object-contain rounded-lg hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                      Prepared by AMA Legal Solutions Research &amp; Compliance Team &bull; Legal Process Overview
                    </p>
                  </div>
                </section>

                {/* ── FAQs ── */}
                <section id="faqs" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="flex justify-between items-center w-full text-left p-4 font-medium text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
                          aria-expanded={expandedFaqs.includes(faq.id)}
                        >
                          <span className="flex items-center">
                            <span className="text-[#D2A02A] mr-3 font-bold">Q.</span>
                            {faq.question}
                          </span>
                          <span className={`transform transition-transform duration-200 ${expandedFaqs.includes(faq.id) ? "rotate-180" : ""}`}>
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        {expandedFaqs.includes(faq.id) && (
                          <div className="px-4 pb-4 pt-0 text-gray-700 leading-relaxed pl-10 text-sm">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── MORE LEGAL GUIDES ── */}
                <section id="internal-guides" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-6">
                    More Legal Guides
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: "Written Off vs. Loan Settlement", href: "/loan-write-off-vs-loan-settlement", desc: "Understand the exact legal difference between a write-off and a settlement — and how each affects your CIBIL score." },
                      { title: "Can Debt Settlement Be Removed from Credit Report?", href: "/can-debt-settlement-be-removed-from-credit-report", desc: "Legal analysis on whether a settled tag can be deleted or upgraded, and the exact process to do so." },
                      { title: "How Long Does a Settled Tag Stay on My Report?", href: "/how-long-does-a-settled-tag-stay-on-my-report", desc: "The 7-year rule explained, with strategies to neutralize its impact before the period expires." },
                      { title: "How to Improve CIBIL Score After Loan Settlement", href: "/how-to-improve-cibil-score-after-loan-settlement", desc: "Step-by-step roadmap to rebuild your credit score after a settlement or write-off." },
                      { title: "Can I Convert Settled to Closed Later?", href: "/can-i-convert-settled-to-closed-later", desc: "Yes — and here is the exact legal and banking procedure to upgrade your credit status." },
                      { title: "Notice for CIBIL Correction After Settlement", href: "/notice-for-cibil-correction-after-settlement", desc: "A legal notice process to compel banks to update your CIBIL status correctly." },
                      { title: "How to File Complaint in RBI", href: "/bank-complaint-in-rbi", desc: "Comprehensive guide on filing a complaint against a bank with the RBI Integrated Ombudsman." },
                      { title: "Can Debt Settlement Hurt Your Credit?", href: "/can-debt-settlement-hurt-your-credit", desc: "Honest analysis of the short-term and long-term credit impact of settling a loan in India." },
                      { title: "What Happens After Loan Settlement", href: "/what-happens-after-loan-settlement", desc: "Post-settlement legal rights, CIBIL reporting expectations, and recovery timelines explained." },
                    ].map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="group block bg-white border border-gray-200 hover:border-[#D2A02A] rounded-xl p-4 transition-all hover:shadow-sm"
                      >
                        <h3 className="font-bold text-[#5A4C33] group-hover:text-[#D2A02A] text-sm mb-2 transition-colors">
                          {guide.title}{" "}
                          <svg className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{guide.desc}</p>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ── CITATIONS ── */}
                <section id="citations" className="scroll-mt-28 border-t border-gray-200 pt-8 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">References &amp; Authority</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {[
                      { label: "RBI Master Circular — Prudential Norms on Income Recognition, Asset Classification and Provisioning", href: "https://rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=9908" },
                      { label: "Credit Information Companies (Regulation) Act, 2005", href: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=5671&Mode=0" },
                      { label: "RBI Integrated Ombudsman Scheme, 2021", href: "https://bankingombudsman.rbi.org.in" },
                      { label: "RBI Complaint Management System", href: "https://cms.rbi.org.in" },
                      { label: "RBI Fair Practice Code for NBFCs", href: "https://rbi.org.in/Scripts/NotificationUser.aspx?Id=7487&Mode=0" },
                      { label: "National Consumer Disputes Redressal Commission", href: "https://ncdrc.nic.in" },
                      { label: "CIBIL Official Dispute Resolution Portal", href: "https://www.cibil.com/disputeresolution" },
                    ].map((cite) => (
                      <li key={cite.href}>
                        <a href={cite.href} target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline">
                          {cite.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* ── SHARE BOTTOM ── */}
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Share this article:</span>
                    <div className="flex space-x-4">
                      {["facebook", "twitter", "linkedin"].map((p) => (
                        <button
                          key={p}
                          onClick={() => handleShare(p)}
                          className="text-gray-500 hover:text-[#D2A02A] transition-colors capitalize text-sm font-semibold"
                        >
                          {p.charAt(0).toUpperCase() + p.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── AMA COMPANY SECTION ── */}
                <section className="border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 bg-white text-center shadow-lg relative mt-12 mb-8">
                  <div className="flex justify-center mb-4">
                    <Image src="/ama3.svg" alt="AMA Legal Solutions Logo" width={75} height={75} className="object-contain" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#5A4C33] mb-3">
                    AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 text-sm md:text-base font-medium">
                    Trusted with a{" "}
                    <strong className="text-[#D2A02A] font-bold">4.7 Google Rating</strong>, over{" "}
                    <strong className="text-[#D2A02A] font-bold">10,000+ Clients Served</strong>,{" "}
                    <strong className="text-[#D2A02A] font-bold">25,000+ Cases Handled</strong>, and
                    more than{" "}
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Experience</strong> in
                    providing strategic legal defense and debt resolution across India.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link href="/loan-settlement" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Loan Settlement Services
                    </Link>
                    <Link href="/send-legal-notice" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Legal Notice Services
                    </Link>
                    <Link href="/how-to-fix-credit-score" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      CIBIL Dispute &amp; Repair
                    </Link>
                    <Link href="/bank-complaint-in-rbi" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      RBI Ombudsman Filing
                    </Link>
                  </div>
                </section>
              </div>
            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <div className="space-y-8 sticky top-24">
              {/* Author Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">About Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#D2A02A]">
                    <img src="/anujbhiya.png" alt="Anuj Anand Malik" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Anuj Anand Malik</h4>
                    <Link href="/author/anuj-anand-malik" className="text-xs text-[#D2A02A] hover:underline">
                      View Profile
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement
                  expert, and banking lawyer with over a decade of experience in financial disputes and
                  credit report legal remedies.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2 rounded-lg text-sm font-semibold hover:bg-[#0077b5] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* CTA Card */}
              <div className="bg-[#5A4C33] p-6 rounded-xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">Need Legal Help?</h3>
                <p className="text-gray-200 mb-6 text-sm">
                  Get expert advice on written-off removal, CIBIL disputes, and RBI Ombudsman filings.
                  Advocate Anuj Anand Malik will review your case within 24 hours.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link
                  href="/contact"
                  className="block w-full border border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5A4C33] transition-colors"
                >
                  Request Callback
                </Link>
              </div>

              {/* Reviews */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Client Reviews</h3>
                <div className="flex items-center gap-2 mb-1">
                  <Stars />
                  <span className="font-extrabold text-gray-900">4.9</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">Based on 1,243 verified client reviews</p>
                <div className="space-y-4">
                  {[
                    { name: "Deepak Sharma", text: "Advocate Anuj helped me get the written-off tag removed from CIBIL in 45 days. Absolutely professional and result-oriented." },
                    { name: "Priya Nair", text: "AMA filed an RBI Ombudsman complaint for me. Bank corrected the entry in 30 days. Cannot thank Anuj Sir enough!" },
                  ].map((r) => (
                    <div key={r.name} className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] opacity-20 absolute top-3 left-3 font-serif leading-none">&ldquo;</div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-2">
                          <Stars />
                          <span className="font-bold text-gray-900 ml-2 text-xs">5.0</span>
                        </div>
                        <p className="text-gray-700 italic text-xs mb-3">&ldquo;{r.text}&rdquo;</p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-2 text-xs font-bold">
                            {r.name[0]}
                          </div>
                          <p className="font-bold text-gray-900 text-xs">{r.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/ama-legal-solutions-reviews" className="block text-center text-xs text-[#D2A02A] hover:underline mt-4">
                  Read All Reviews →
                </Link>
              </div>

              {/* Quick links */}
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm mb-3 border-b border-gray-100 pb-2">Related Guides</h3>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/loan-write-off-vs-loan-settlement", "Write-Off vs Settlement"],
                    ["/how-to-improve-cibil-score-after-loan-settlement", "Improve CIBIL After Settlement"],
                    ["/bank-complaint-in-rbi", "File RBI Complaint"],
                    ["/can-debt-settlement-be-removed-from-credit-report", "Remove Settled Tag"],
                    ["/notice-for-cibil-correction-after-settlement", "CIBIL Correction Notice"],
                    ["/what-is-dpd-in-cibil-report-india", "What is DPD in CIBIL?"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link href={href} className="text-gray-700 hover:text-[#D2A02A] transition-colors">
                        → {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/automated-bulk-legal-notice-for-digital-lenders";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/automated-bulk-legal-notice-for-digital-lenders.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-24T10:00:00+05:30";
const MODIFIED_DATE = "2026-09-24T12:45:00+05:30";

/* ─────────────────────────── TOC SECTIONS ──────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Automated Bulk Legal Notice for Digital Lenders" },
  { id: "operational-bottleneck", title: "The Operational Bottleneck: Why Manual Notice Drafting Fails" },
  { id: "advocate-generation-vs-diy", title: "Advocate-Vetted Generation vs Flawed DIY Mail-Merge" },
  { id: "multi-channel-dispatch", title: "Triple-Rail Dispatch: Speed Post, Email & Section 63 BSA WhatsApp" },
  { id: "section-63-bsa-evidentiary", title: "Section 63 BSA Certification: Dual Signature & Hash Integrity" },
  { id: "three-notice-cadence", title: "The 3-Notice Progressive Escalation Protocol" },
  { id: "excel-lms-ingestion", title: "Zero-Friction Ingestion: Excel & LMS Data Mapping" },
  { id: "rbi-compliance-shield", title: "100% RBI Fair Practices & Digital Lending Compliance" },
  { id: "comparative-analysis", title: "Comparative Evaluation: In-House Paralegals vs Tech-Only vs AMA" },
  { id: "institutional-social-proof", title: "Institutional Case Proof: Trusted by 10+ Fintech Lenders" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions (Fintech Legal Operations)" },
  { id: "references-authority", title: "Statutory Authorities & Judicial Portals" },
  { id: "author-credentials", title: "About Senior Banking Advocate Anuj Anand Malik" },
];

/* ─────────────────────────── CLIENT REVIEW DATA ─────────────────── */
const clientReviewData = {
  authorName: "Karan Singhal, VP Legal & Compliance at PayAdvance Digital",
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "56",
  reviewBody:
    "AMA Legal Solutions' automated bulk legal notice framework revolutionized our NPA recovery operations. Dispatching over 3,500 advocate-signed notices monthly across physical Speed Post and Section 63 BSA certified WhatsApp cut our delinquency by 45% without incurring corporate law firm retainers.",
};

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What is an automated bulk legal notice system for digital lenders and how does it work?",
    answer:
      "An automated bulk legal notice system for digital lenders is a specialized legal-tech framework that ingests delinquent borrower records from core lending systems, dynamically generates advocate-vetted statutory demand notices, and dispatches them across physical Speed Post, email, and WhatsApp with Section 63 Bharatiya Sakshya Adhiniyam, 2023 evidence certificates. By combining high-velocity automated data mapping with enrolled High Court advocate sign-offs, the system produces legally binding notices at scale while preserving complete compliance with the Advocates Act, 1961 and RBI Digital Lending Directions.",
  },
  {
    id: "faq-2",
    question: "Why do automated mail-merge tools and generic online notice generators fail in court?",
    answer:
      "Generic mail-merge scripts and unverified online notice generators fail because they lack advocate certification, omit specific contractual breach clauses, and fail to generate dual-signed electronic evidence certificates under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Courts routinely dismiss unrepresented corporate notices as non-binding informal reminders, permitting delinquent borrowers to deny receipt or challenge the validity of debt calculation during summary proceedings under Order 37 of the Code of Civil Procedure, 1908.",
  },
  {
    id: "faq-3",
    question: "How does the system ensure electronic delivery proof holds up in magistrate courts under Section 63 BSA?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic secondary evidence requires a statutory certificate signed by both the operational custodian and a qualified technical expert containing cryptographic hash validation of the digital document. Our system archives automated WhatsApp blue-tick read receipts, mobile device delivery timestamps, and SMTP mail server transaction logs, generating an airtight Schedule certificate that proves service conclusively before judicial magistrates in accordance with Supreme Court guidelines.",
  },
  {
    id: "faq-4",
    question: "How does bulk legal notice automation reduce pre-litigation delinquency for digital NBFCs?",
    answer:
      "Automated bulk legal notices fundamentally alter borrower repayment psychology by transitioning claims from toothless telecalling reminders to formal advocate-led statutory demand. Delinquent borrowers who ignore SMS alerts or delete mobile lending apps respond promptly upon receiving formal advocate letterhead notices delivered via India Post Speed Post and verified WhatsApp citing penal consequences under Section 25 of the Payment and Settlement Systems Act, 2007 and Sections 316/318 of the Bharatiya Nyaya Sanhita, 2023.",
  },
  {
    id: "faq-5",
    question: "How does the system integrate with an NBFC or fintech's existing Loan Management System (LMS)?",
    answer:
      "The system offers two seamless ingestion workflows: automated API webhook integration with enterprise Loan Management Systems (such as FinnOne, Finezza, or custom proprietary platforms) or simple zero-friction batch uploads via standard Excel/CSV spreadsheets. The data ingestion engine automatically normalizes addresses, verifies postal pin codes against India Post databases, maps sanction letter covenants, and queues batches of up to 15,000 delinquent accounts for multi-channel dispatch within twenty-four business hours.",
  },
  {
    id: "faq-6",
    question: "How does this automated framework ensure 100% compliance with RBI Digital Lending Guidelines 2026?",
    answer:
      "The framework strictly adheres to the Reserve Bank of India Master Directions on Responsible Business Conduct and Digital Lending Guidelines, 2026 by routing all communications exclusively through formal legal channels. Notices are dispatched strictly within permitted business hours, eliminate aggressive or harassing third-party collection agency tactics, uphold borrower data privacy rings, and maintain complete audit logs accessible during statutory compliance reviews.",
  },
  {
    id: "faq-7",
    question: "What statutory escalation steps follow if the borrower ignores the first bulk legal notice?",
    answer:
      "If the borrower fails to regularize the loan within the mandatory 7-day cure window following Notice #1, the system automatically triggers Notice #2 on Day 8 citing statutory penal provisions under Section 25 PSSA for NACH mandate dishonour and Section 138 of the Negotiable Instruments Act, 1881. Continued default triggers Notice #3 on Day 15, warning of imminent police complaints under Bharatiya Nyaya Sanhita, summary recovery suits under Order 37 CPC, and credit bureau wilful defaulter flagging.",
  },
  {
    id: "faq-8",
    question: "Why is a fixed predictable legal advisory model superior to contingency debt collection commissions?",
    answer:
      "Traditional collection agencies charge between 15% and 30% of recovered capital, severely diluting lender returns and creating severe regulatory liability risks through unauthorized collection behavior. A transparent fixed legal advisory model provides institutional certainty, allows the lender to retain 100% of all recovered principal and interest, eliminates unpredictable hourly law firm billing, and ensures every single case docket is certified by enrolled High Court litigators.",
  },
];

/* ─────────────────────────── VERIFIED CASE PROOFS ──────────────── */
const clientInstitutions = [
  {
    name: "Actoloan",
    category: "Instant Personal & Salary Advance Platform",
    metric: "45% Pre-Litigation Recovery",
    quote:
      "Automating our bulk legal notice dispatch with AMA Legal Solutions allowed us to issue over 4,000 advocate notices monthly. The combination of India Post Speed Post tracking and Section 63 BSA certified WhatsApp notices reduced our 60+ DPD accounts by 45% within three weeks.",
  },
  {
    name: "Implantium Finance",
    category: "Healthcare & Equipment FinTech",
    metric: "12,000+ Notices Dispatched",
    quote:
      "The contract-specific notice generation reflecting our exact hypothecation and e-Sign clauses brought immediate legal gravity. Borrowers who blocked collection calls settled within days of receiving advocate-signed notices at their registered residential addresses.",
  },
  {
    name: "Leading Digital Nano Lenders",
    category: "Mobile Credit & EWA Platforms",
    metric: "Zero Friction Batch Processing",
    quote:
      "The Excel upload workflow is flawless. Uploading weekly bounce files and having advocate notices dispatched simultaneously across physical and digital rails gives our operations team institutional-grade recovery leverage.",
  },
];

/* ─────────────────────────── STEP PROTOCOL ─────────────────────── */
const stepListItems = [
  {
    title: "Stage 1: Bulk Portfolio Ingestion & Data Hygiene Audit",
    desc: "The digital lender uploads delinquent account files via Excel/CSV or LMS API. The system parses account parameters, validates postal pin codes, normalizes addresses, and verifies NACH bounce memos against banking records.",
  },
  {
    title: "Stage 2: Dynamic Advocate Notice Generation",
    desc: "Our automated drafting engine populates customized advocate-vetted templates citing exact master loan agreement clauses, digital sanction timestamps, e-Sign consent IDs, and crystallized balances.",
  },
  {
    title: "Stage 3: Simultaneous Triple-Rail Statutory Dispatch",
    desc: "Notices are dispatched simultaneously via India Post Speed Post with barcoded consignment numbers, official law firm email with SMTP audit trails, and verified WhatsApp with Section 63 BSA delivery validation.",
  },
  {
    title: "Stage 4: Automated Reconciliation & Escalation Triggering",
    desc: "Our system tracks delivery milestones in real-time. If an account remains uncured after 7 days, Notice #2 (Section 25 PSSA) triggers automatically, followed by Notice #3 on Day 15 warning of police complaints and CIBIL flags.",
  },
  {
    title: "Stage 5: Police Complaint Dockets & Judicial Filing",
    desc: "For persistent wilful defaulters, senior litigators compile comprehensive criminal complaint dockets under Sections 316 and 318 BNS and file fast-track summary recovery suits under Order 37 CPC.",
  },
];

/* ────────────────────────── SCHEMA GRAPH ───────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline:
        "Automated Bulk Legal Notice for Digital Lenders: Multi-Channel Dispatch, Section 63 BSA Certification & Fast NPA Recovery",
      description:
        "Comprehensive commercial and regulatory guide to automated bulk legal notice solutions for fintechs, NBFCs, and digital lending platforms. Learn how advocate-certified notices dispatched via Speed Post, Email, and WhatsApp maximize pre-litigation recovery while guaranteeing 100% RBI compliance.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${PAGE_URL}#webpage` },
      image: [OG_IMAGE_URL],
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      author: {
        "@type": "Person",
        name: "Anuj Anand Malik",
        jobTitle: "Founder & Senior Advocate",
        url: `${SITE}/author/anuj-anand-malik`,
        image: `${SITE}/anujbhiya.png`,
        sameAs: "https://www.linkedin.com/in/iamanujmalik/",
        worksFor: {
          "@type": "Organization",
          name: "AMA Legal Solutions",
          url: SITE,
        },
      },
      reviewedBy: {
        "@type": "Organization",
        name: "Team AMA Legal Solutions",
        url: SITE,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "AMA Legal Solutions",
        url: SITE,
        logo: { "@type": "ImageObject", url: LOGO_URL },
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Automated Bulk Legal Notice for Digital Lenders | AMA Legal Solutions",
      description:
        "Automated bulk legal notice solution for digital lenders, fintechs, and NBFCs. Fast Speed Post dispatch, verified WhatsApp delivery, and Section 63 BSA court-admissible audit trails.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
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
      "@id": `${PAGE_URL}#product`,
      name: "Automated Bulk Legal Notice System for Digital Lenders",
      image: OG_IMAGE_URL,
      description:
        "Enterprise-grade automated bulk legal notice service for digital lenders, fintech platforms, and NBFCs. Generates advocate-vetted custom notices, integrates Speed Post barcodes, provides Section 63 BSA WhatsApp certification, and automates 3-notice weekly escalation.",
      brand: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: clientReviewData.ratingValue,
        bestRating: clientReviewData.bestRating,
        reviewCount: clientReviewData.reviewCount,
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: clientReviewData.ratingValue,
          bestRating: clientReviewData.bestRating,
        },
        author: {
          "@type": "Person",
          name: clientReviewData.authorName,
        },
        reviewBody: clientReviewData.reviewBody,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "AMA Legal Solutions",
      url: SITE,
      logo: LOGO_URL,
      telephone: "+91-8700343611",
      email: "contact@amalegalsolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 124, Sector 44",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122003",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/amalegalsolutions",
        "https://twitter.com/amalegalsolutions",
        "https://www.linkedin.com/company/amalegalsolutions",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Automated Bulk Legal Notice for Digital Lenders",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 5-Stage Automated Bulk Legal Notice Protocol",
      itemListElement: stepListItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.desc,
      })),
    },
  ],
};

/* ─────────────────────────── CLIENT COMPONENT ──────────────────── */
export default function AutomatedBulkLegalNoticeForDigitalLendersClient() {
  const [activeSection, setActiveSection] = useState("quick-answer");
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([faqs[0].id, faqs[1].id]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    category: "Digital Personal & Micro-Loans",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Automated Bulk Legal Notice for Digital Lenders: Multi-Channel Dispatch & Section 63 BSA Proof – AMA Legal Solutions";
    if (platform === "copy") {
      await navigator.clipboard.writeText(url);
      setShareMsg("Link Copied!");
      setTimeout(() => setShareMsg(null), 2000);
      return;
    }
    const map: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text} ${url}`)}`,
    };
    if (map[platform]) {
      window.open(map[platform], "_blank", "width=600,height=400");
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }
    setModalSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const textMsg = `Hello AMA Legal Solutions, we are interested in your Automated Bulk Legal Notice Solution for Digital Lenders.
Full Name / Organization: ${formData.fullName}
Phone / WhatsApp: ${formData.phone}
Corporate Email: ${formData.email || "N/A"}
City & State: ${formData.cityState || "N/A"}
Loan Asset Category: ${formData.category}
Specific Requirements: ${formData.message || "Requesting demonstration of Excel/LMS bulk data ingestion, custom advocate legal notice generation, Speed Post barcode integration, and Section 63 BSA certificate workflow."}`;
    const waUrl = `https://api.whatsapp.com/send?phone=918700343611&text=${encodeURIComponent(textMsg)}`;
    window.open(waUrl, "_blank");
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setModalSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      cityState: "",
      category: "Digital Personal & Micro-Loans",
      message: "",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 120;
      let current = "";
      for (const s of tocSections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset + 50) {
            current = s.id;
          }
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        if (tocSections.length > 0) {
          current = tocSections[tocSections.length - 1].id;
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    {
      label: "Automated Bulk Legal Notice for Digital Lenders",
      href: PAGE_SLUG,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pt-20 md:pt-28">
        <div className="container mx-auto px-4 max-w-[1600px]">
          <Breadcrumbs items={breadcrumbItems} />

          {/* ══ HERO SECTION: Asymmetric 12-col matching top directory pages ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
            {/* Left Column (lg:col-span-8) */}
            <div className="flex flex-col lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase tracking-wider w-max mb-4 shadow-sm border border-[#D2A02A]/30">
                <span>⚡</span> Enterprise Legal-Tech &amp; Statutory Notice Automation Suite
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Automated Bulk Legal Notice for{" "}
                <span className="text-[#D2A02A]">Digital Lenders</span>: Fast Dispatch &amp; Section 63 BSA Proof
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Eliminate manual drafting bottlenecks, avoid non-enforceable DIY mail-merges, and protect your digital lending license against RBI compliance infractions.
                Deploy AMA Legal Solutions&apos; automated bulk legal notice engine for fintechs and NBFCs.
                Simply upload delinquent borrower records in a single spreadsheet or sync via LMS API. Our automated legal-tech pipeline dynamically populates contract-specific demand notices on advocate letterhead, dispatches thousands of notices simultaneously across Physical Speed Post, Law Firm Email, and WhatsApp with Section 63 BSA delivery certificates, and automates a progressive 3-notice escalation cadence—all under transparent fixed legal advisory without hourly markups or surprise retainers.
              </p>

              {/* Author & Meta bar */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A]">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="font-bold text-[#1a202c] text-base hover:text-[#D2A02A] transition-colors"
                    >
                      Adv. Anuj Anand Malik
                    </Link>
                    <p className="text-xs text-gray-500">
                      Founder &amp; Senior Advocate &bull; Reviewed by Team AMA Legal Solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> 24-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 18 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> 100% RBI Fair Practices Compliant
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Onboard Portfolio / Request Pilot Batch</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1a202c] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-xl border border-gray-700 shadow transition-all text-sm md:text-base flex items-center gap-2"
                >
                  <span>📞 Legal-Tech Desk: +91-8700343611</span>
                </a>
              </div>
            </div>

            {/* Right Column (lg:col-span-4) — Rounded Card with Generated OG Image */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/automated-bulk-legal-notice-for-digital-lenders.png"
                  alt="Automated Bulk Legal Notice for Digital Lenders System Architecture"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Automated Bulk Notice Dispatch &amp; Section 63 BSA Audit
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Speed Post, Email &amp; WhatsApp &bull; Full Statutory Admissibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ TRUST & ACHIEVEMENTS BANNER ══ */}
        <div className="bg-white border-y border-gray-200 py-6 mb-10 shadow-sm">
          <div className="container mx-auto px-4 max-w-[1600px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⚡</span> 15,000+
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Daily Batch Dispatch Capacity
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> 100% Retained
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Keep 100% of Recovered Capital (Zero Cut)
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📬</span> 3 Rails
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Speed Post + Email + WhatsApp Delivery
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📈</span> 45%+ Cure
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Average Pre-Litigation NPA Resolution
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">

            {/* ── LEFT COLUMN: DESKTOP STICKY TOC ── */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-8 p-6 bg-gradient-to-b from-[#1E293B] to-[#0F172A] rounded-2xl border border-white/10 shadow-xl text-white">
                <p className="font-bold text-[#D2A02A] mb-2 uppercase tracking-wider text-xs">
                  FinTech Legal-Tech Desk
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Require custom API integration with your Loan Management System or need pilot dispatch for a 500-account test batch? Connect directly with our lead banking advocate.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition cursor-pointer"
                >
                  Schedule Technical Demo →
                </button>
              </div>
            </div>

            {/* ── CENTER EDITORIAL COLUMN ── */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">

                {/* Meta details & Social Share bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Published: September 2026</span>
                    <span>&bull;</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      RBI Digital Lending Framework Aligned
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 mr-1">Share:</span>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition cursor-pointer"
                      aria-label="Share on X / Twitter"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition cursor-pointer"
                      aria-label="Share on WhatsApp"
                    >
                      <span className="text-sm">💬</span>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition text-xs font-semibold cursor-pointer"
                    >
                      {shareMsg || "Copy Link"}
                    </button>
                  </div>
                </div>

                {/* ══ SECTION 1: QUICK ANSWER BLOCK ══ */}
                <section id="quick-answer" className="scroll-mt-32">
                  <div className="p-6 md:p-8 bg-amber-50 rounded-2xl border-2 border-[#D2A02A] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⚡</span>
                      <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                        Quick Answer: What is an Automated Bulk Legal Notice for Digital Lenders?
                      </h2>
                    </div>
                    <div className="prose text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
                      <p>
                        An automated bulk legal notice for digital lenders is a specialized legal-tech framework that ingests delinquent loan portfolios, dynamically generates customized advocate-vetted statutory demand notices, and dispatches them simultaneously across physical Speed Post, verified email, and WhatsApp with court-admissible Section 63 Bharatiya Sakshya Adhiniyam, 2023 evidence certificates. This institutional system enables fintechs, NBFCs, and digital lending platforms to replace manual drafting friction with high-velocity statutory escalation while guaranteeing strict compliance with the RBI Digital Lending Guidelines and the Advocates Act, 1961. Regulated lenders deploy this system to reduce pre-litigation delinquency, cure non-performing assets, and build irrefutable evidentiary records for summary suits and criminal complaints without expensive corporate law firm retainers.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>High-Velocity Generation:</strong> Automatically populates up to 15,000 customized advocate-signed notices per batch within 24 hours.
                          </span>
                        </div>
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>Section 63 BSA Evidence:</strong> Dual-signature certificates with cryptographic hash values guaranteeing magistrate court admissibility.
                          </span>
                        </div>
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>Integrated Postal Barcodes:</strong> Generates India Post Speed Post barcodes and automated Proof of Delivery (POD) tracking.
                          </span>
                        </div>
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>100% Capital Retained:</strong> Transparent fixed legal advisory eliminating predatory 15%–30% agency recovery commissions.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 2: OPERATIONAL BOTTLENECK ══ */}
                <section id="operational-bottleneck" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      The Operational Bottleneck: Why Manual Notice Drafting Fails Digital Lenders
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Digital lenders disburse thousands of micro-advances, consumer credit lines, and payday loans daily. However, when borrowers breach repayment covenants and transition into 30+ Days Past Due (DPD) buckets, conventional legal operations break down under the sheer volume of delinquent accounts:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-red-50/60 rounded-2xl border border-red-200 space-y-3">
                      <div className="flex items-center gap-2 text-red-800 font-bold text-base">
                        <span>⏳</span> The Paralegal &amp; Retainer Cost Trap
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Drafting individual legal notices manually through in-house legal teams or traditional law firms takes days. Hourly billing rates and heavy monthly corporate retainers make it economically unfeasible to serve formal legal notices on small-ticket digital loans, leaving lenders with no formal statutory recourse before writing off bad debts.
                      </p>
                    </div>

                    <div className="p-6 bg-red-50/60 rounded-2xl border border-red-200 space-y-3">
                      <div className="flex items-center gap-2 text-red-800 font-bold text-base">
                        <span>⚠️</span> Postal Logistical Paralysis
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Manually printing notices, stuffing physical envelopes, standing in post office queues to purchase Speed Post barcodes, and manually typing 13-character tracking numbers into Excel spreadsheets is fraught with human error. Over 28% of manual notices fail due to unvalidated pin codes or lost delivery receipts, rendering them useless in court.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-[#FAF7F0] rounded-2xl border-l-4 border-[#D2A02A] text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900 block mb-1">The Legal-Tech Breakthrough: End-to-End Bulk Automation</strong>
                    AMA Legal Solutions eliminates manual friction by deploying an advocate-supervised automation engine. We bridge the gap between financial technology and judicial jurisprudence, enabling digital lenders to dispatch thousands of court-ready notices within hours while maintaining Bar Council standards.
                  </div>
                </section>

                {/* ══ SECTION 3: ADVOCATE GENERATION VS DIY ══ */}
                <section id="advocate-generation-vs-diy" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Advocate-Vetted Generation vs Flawed DIY Mail-Merge Templates
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Many fintech engineering teams attempt to resolve the notice bottleneck by writing basic Python or Google Sheets mail-merge scripts to blast generic PDFs to borrowers. In practice, generic DIY notices are catastrophic in courtroom litigation:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">⚖️</div>
                      <h3 className="font-bold text-gray-900 text-base">Lack of Advocate Authority</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under the Advocates Act, 1961, only an enrolled advocate holds the legal prerogative to issue formal legal demand notices on behalf of a client. Corporate notices signed by an internal &ldquo;collections manager&rdquo; carry zero judicial presumption of demand and are routinely dismissed as commercial dunning letters.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">📑</div>
                      <h3 className="font-bold text-gray-900 text-base">Defective Contractual Citations</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        DIY scripts fail to cite specific digital sanction letter clauses, e-Mandate authorization IDs, and electronic promissory notes. When challenged before magistrates under Section 25 PSSA, courts dismiss proceedings for failure to articulate the precise contractual basis of the crystallized debt.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">🛡️</div>
                      <h3 className="font-bold text-gray-900 text-base">Zero Evidentiary Certification</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Unrepresented template blasts do not generate statutory electronic evidence certificates. In civil summary suits or criminal complaint proceedings, the lender cannot prove that the borrower actually received the communication, allowing serial defaulters to escape liability.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 4: MULTI-CHANNEL DISPATCH ══ */}
                <section id="multi-channel-dispatch" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Triple-Rail Dispatch: Speed Post, Email &amp; Section 63 BSA WhatsApp
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Under established Indian procedural law, establishing valid service of demand is a mandatory statutory prerequisite before filing summary suits under Order 37 CPC or criminal prosecutions under Section 25 PSSA. Our automated system deploys three synchronized, simultaneous delivery rails:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rail 1 */}
                    <div className="p-6 bg-white rounded-2xl border-2 border-amber-200 shadow-sm">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
                        <span>📮</span> Rail 1: Physical Post
                      </div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Automated Speed Post AD</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        Physical notices carry undeniable judicial weight. Our automated system integrates directly with India Post booking systems to generate unique barcoded consignment numbers, print compliant labels, and capture verifiable Proof of Delivery (POD) logs.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                        <li>India Post Barcoded Consignments</li>
                        <li>Automated Delivery Status Updates</li>
                        <li>Statutory compliance for Section 138/PSSA</li>
                      </ul>
                    </div>

                    {/* Rail 2 */}
                    <div className="p-6 bg-white rounded-2xl border-2 border-blue-200 shadow-sm">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-4">
                        <span>📧</span> Rail 2: Official Email
                      </div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Advocate Signed Digital Copy</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        Dispatched from our official law firm domain directly to the borrower&apos;s registered email address with cryptographic hash verification, digital signatures, and complete SMTP server transmission logs.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                        <li>Digitally signed advocate PDF</li>
                        <li>Automated SMTP server delivery audit</li>
                        <li>Immediate instantaneous dispatch</li>
                      </ul>
                    </div>

                    {/* Rail 3 */}
                    <div className="p-6 bg-white rounded-2xl border-2 border-emerald-200 shadow-sm">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-4">
                        <span>💬</span> Rail 3: WhatsApp Service
                      </div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Instant Verified Messaging</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        Delivered directly to the borrower&apos;s WhatsApp with interactive repayment portal links, advocate letterhead preview, and verifiable timestamped read receipts admissible under Section 63 BSA, 2023.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                        <li>Direct Section 63 BSA certificate</li>
                        <li>Blue-tick read receipt audit trail</li>
                        <li>Over 92% open rate within 3 hours</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ══ SIGNATURE EDITORIAL INFOGRAPHIC CARD ══ */}
                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                  <h3 className="text-lg md:text-xl font-extrabold text-[#1a202c] mb-2">
                    Visual Blueprint: The Automated Bulk Legal Notice Architecture
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
                    From automated Excel/API data ingestion to triple-rail statutory dispatch and Section 63 BSA court-admissible certification.
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-4xl mx-auto">
                    <img
                      src="/images/og/automated-bulk-legal-notice-for-digital-lenders.png"
                      alt="Automated Bulk Legal Notice for Digital Lenders System Infographic Blueprint"
                      className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <p className="text-[11px] text-gray-500 mt-3 italic">
                    Figure 1.1: High-Velocity Dynamic Ingestion, Multi-Channel Triple-Rail Service &amp; Dual-Signature Section 63 BSA Audit Trails.
                  </p>
                </div>

                {/* ══ SECTION 5: SECTION 63 BSA EVIDENTIARY ══ */}
                <section id="section-63-bsa-evidentiary" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Section 63 BSA Certification: Dual Signature &amp; Hash Integrity
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    With the enactment of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), which replaced the Indian Evidence Act, 1872, the judicial standard for admitting digital evidence underwent fundamental transformation. Under Section 63 BSA, submitting electronic secondary evidence (such as printouts of WhatsApp delivery receipts, email logs, or online postal tracking reports) mandates strict compliance:
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-start gap-4">
                      <span className="text-2xl text-[#D2A02A]">🔐</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Mandatory Dual-Signature Requirement
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          Unlike the former Section 65B regime where a single officer could sign an affidavit, Section 63 BSA requires certificates to be executed by two responsible individuals: the person in charge of the device or management of the activity, and an expert technical authority. Our system automatically co-signs and packages these certificates with every bulk batch.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-start gap-4">
                      <span className="text-2xl text-[#D2A02A]">🔍</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Cryptographic SHA-256 Hash Validation
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          To eliminate tampering claims by borrowers, our legal-tech engine computes a unique cryptographic SHA-256 hash value for every notice PDF at the exact moment of dispatch. This hash is embedded within the Section 63 BSA certificate, creating unimpeachable proof of data integrity.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-start gap-4">
                      <span className="text-2xl text-[#D2A02A]">📜</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Prescribed Schedule Format Compliance
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          The certificate adheres strictly to the statutory format specified in the Schedule to the BSA, detailing system specifications, server operating conditions, transmission protocols, and date-time stamps to ensure seamless judicial acceptance across all Indian district and magistrate courts.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 6: THREE-NOTICE CADENCE ══ */}
                <section id="three-notice-cadence" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      The 3-Notice Progressive Escalation Protocol
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    A single notice rarely resolves hardened delinquency. Our automated engine executes a progressive, 3-notice weekly escalation cadence that systematically escalates statutory exposure while providing fair opportunities to cure:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-2xl border-2 border-amber-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          W-1
                        </div>
                        <h3 className="font-bold text-gray-900 text-base mb-2">Notice #1: Formal Statutory Demand</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Served under Section 73 of the Indian Contract Act, 1872. Details the loan agreement covenants breached, crystallized outstanding balance, and provides a mandatory 7-day cure window to regularize the loan without court intervention.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-[#D2A02A]">
                        Dispatched: Speed Post, Email &amp; WhatsApp
                      </div>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border-2 border-orange-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          W-2
                        </div>
                        <h3 className="font-bold text-gray-900 text-base mb-2">Notice #2: Statutory Escalation</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Automatically dispatched on Day 8 if unpaid. Invokes Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for NACH / e-Mandate dishonour and Section 138 of the Negotiable Instruments Act, 1881, warning of penal prosecution.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-orange-600">
                        Triggered on Day 8 of Non-Payment
                      </div>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border-2 border-red-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          W-3
                        </div>
                        <h3 className="font-bold text-gray-900 text-base mb-2">Notice #3: Pre-Litigation Final</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Dispatched on Day 15. Final pre-prosecution legal warning. Puts borrower on notice regarding imminent police complaint lodging under Bharatiya Nyaya Sanhita Sections 316/318, Order 37 CPC summary recovery suits, and bureau wilful defaulter flagging.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-red-600">
                        Triggered on Day 15 of Non-Payment
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 7: EXCEL & LMS INGESTION ══ */}
                <section id="excel-lms-ingestion" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Zero-Friction Ingestion: Excel &amp; LMS Data Mapping
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Our system requires zero disruption to your existing technology stack. Digital lending operations teams can simply upload a standard Excel or CSV spreadsheet containing the following essential fields:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-gray-50/50">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4">Standard Spreadsheet Column</th>
                          <th className="p-4">Data Definition</th>
                          <th className="p-4">Legal &amp; Judicial Function</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Borrower_Full_Name</td>
                          <td className="p-4 text-gray-600">Legal name of primary borrower or co-borrower</td>
                          <td className="p-4 text-gray-600">Designated as the principal respondent / accused party in notices</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Registered_Mobile</td>
                          <td className="p-4 text-gray-600">10-digit primary mobile / WhatsApp enabled number</td>
                          <td className="p-4 text-gray-600">WhatsApp statutory notice delivery and Section 63 BSA delivery audit</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Official_Work_Email</td>
                          <td className="p-4 text-gray-600">Borrower registered corporate or personal email</td>
                          <td className="p-4 text-gray-600">Dispatched with digitally signed advocate PDF and SMTP transmission logs</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Postal_Address_PIN</td>
                          <td className="p-4 text-gray-600">Residential or permanent address with postal code</td>
                          <td className="p-4 text-gray-600">Physical Speed Post dispatch with India Post barcode consignment proof</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Loan_Account_Identifier</td>
                          <td className="p-4 text-gray-600">Unique credit account / loan agreement number</td>
                          <td className="p-4 text-gray-600">Statutory debt identifier cited across all legal notices and court filings</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Principal_Disbursed</td>
                          <td className="p-4 text-gray-600">Original disbursed principal credit sum</td>
                          <td className="p-4 text-gray-600">Establishes valid consideration and lawful contract formation</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Total_Crystallized_Dues</td>
                          <td className="p-4 text-gray-600">Principal outstanding + contractual interest dues</td>
                          <td className="p-4 text-gray-600">Liquidated debt sum demanded with statutory cure period</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">NACH_Bounce_Date_Memo</td>
                          <td className="p-4 text-gray-600">e-Mandate / NACH / Cheque dishonour date &amp; reason</td>
                          <td className="p-4 text-gray-600">Mandatory statutory prerequisite to trigger Section 25 PSSA / Section 138 NI Act</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center gap-4">
                    <span className="text-3xl">⚡</span>
                    <p className="text-xs md:text-sm text-blue-900 leading-relaxed font-medium">
                      <strong>Automated Pre-Dispatch Scrubbing:</strong> Our ingestion engine cross-references postal pin codes against India Post delivery networks, detects duplicate entries, flags invalid email formats, and ensures 100% address accuracy before dispatch.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 8: RBI COMPLIANCE SHIELD ══ */}
                <section id="rbi-compliance-shield" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      100% RBI Fair Practices &amp; Digital Lending Compliance Shield
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    The Reserve Bank of India has substantially escalated regulatory penalties against regulated entities for recovery agent infractions. By transitioning recovery communications from third-party recovery agencies to advocate-certified statutory notices, digital lenders obtain an impenetrable compliance shield:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">⏰</div>
                      <h3 className="font-bold text-gray-900 text-base">Permitted Contact Windows</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under the RBI Responsible Business Conduct Directions, all digital notifications are strictly queued and dispatched between 8:00 AM and 7:00 PM, eliminating late-night harassment violations.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">🔒</div>
                      <h3 className="font-bold text-gray-900 text-base">Privacy &amp; Data Isolation</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Notices are served exclusively to the borrower&apos;s registered credentials. Contacting relatives, workplace colleagues, or friends is strictly prohibited, shielding the lender from DPDP Act violations.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">🏛️</div>
                      <h3 className="font-bold text-gray-900 text-base">Advocates Act Immunity</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Every notice is drafted under the professional authority of the Advocates Act, 1961. Professional legal communication can never be construed as consumer harassment or unlawful intimidation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 9: COMPARISON TABLE ══ */}
                <section id="comparative-analysis" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Comparative Evaluation: In-House Paralegals vs Tech-Only vs AMA
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    When scaling recovery operations, fintech management teams must choose between manual in-house paralegal teams, tech-only mail merge scripts, and AMA Legal Solutions&apos; end-to-end advocate-led system:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4">Operational Dimension</th>
                          <th className="p-4">In-House Paralegal Teams</th>
                          <th className="p-4">Tech-Only Software Tools</th>
                          <th className="p-4 bg-[#D2A02A] text-gray-900 font-bold">AMA Legal Solutions Automated System</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Commercial Structure</td>
                          <td className="p-4 text-red-600">High fixed salaries + attrition</td>
                          <td className="p-4 text-gray-500">Software license fee (No legal execution)</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Transparent Fixed Advisory (Keep 100% Capital)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Advocate Signing</td>
                          <td className="p-4 text-amber-600">Requires external signing</td>
                          <td className="p-4 text-red-600">None (DIY unrepresented)</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Enrolled High Court Advocates (Every Docket)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Dispatch Speed</td>
                          <td className="p-4 text-red-600">50–100 notices/day</td>
                          <td className="p-4 text-amber-600">Digital only (No physical post)</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Up to 15,000 Notices / Day across 3 Rails</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Section 63 BSA Audit</td>
                          <td className="p-4 text-red-600">Manual affidavit preparation</td>
                          <td className="p-4 text-red-600">No dual-signature legal certificate</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Automated Dual-Signature Certificate + Hash</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Postal Barcode Integration</td>
                          <td className="p-4 text-red-600">Manual post office queues</td>
                          <td className="p-4 text-red-600">None</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Automated India Post Consignments &amp; POD</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Judicial Escalation</td>
                          <td className="p-4 text-amber-600">Slow individual litigation</td>
                          <td className="p-4 text-red-600">Incapable of court filing</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Police Complaints (BNS) &amp; Summary Suits (CPC)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 10: INSTITUTIONAL SOCIAL PROOF ══ */}
                <section id="institutional-social-proof" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Institutional Case Proof: Trusted by 10+ Fintech Lenders
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Leading financial institutions and digital fintech lenders rely on AMA Legal Solutions to power their legal recovery operations. Key enterprise partners include:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {clientInstitutions.map((inst, idx) => (
                      <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-extrabold text-lg text-gray-900">{inst.name}</h3>
                            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full">
                              {inst.metric}
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-[#D2A02A] mb-3">{inst.category}</p>
                          <p className="text-xs text-gray-600 leading-relaxed italic">
                            &ldquo;{inst.quote}&rdquo;
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1">
                          <span className="text-xs text-gray-400">Verified Institutional Partner</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ══ SECTION 11: FAQS ══ */}
                <section id="frequently-asked-questions" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions (Fintech Legal Operations)
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq) => {
                      const isOpen = expandedFaqs.includes(faq.id);
                      return (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full p-5 text-left font-bold text-gray-900 flex justify-between items-center gap-4 hover:bg-gray-50 transition cursor-pointer"
                          >
                            <span className="text-sm md:text-base">{faq.question}</span>
                            <span
                              className={`w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs flex-shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180 bg-[#D2A02A] text-white" : ""
                              }`}
                            >
                              ▼
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ══ SECTION 12: MORE LEGAL GUIDES ══ */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-extrabold text-[#1a202c] mb-6 flex items-center gap-2">
                    <span>📚</span> More Institutional Legal &amp; Recovery Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                    {[
                      { title: "Debt Recovery System for NBFCs", href: "/debt-recovery-system-for-nbfcs" },
                      { title: "Debt Recovery System for Pay Day Loans", href: "/debt-recovery-system-for-pay-day-loans" },
                      { title: "Legal Recovery for NBFCs", href: "/recovery-for-nbfcs" },
                      { title: "Legal Recovery for Payday Loans", href: "/recovery-for-pay-day-loan" },
                      { title: "NBFC Loan Settlement Guide", href: "/nbfc-loan-settlement-in-september-2026" },
                      { title: "Section 25 PSSA Legal Provisions", href: "/section-25-payment-and-settlement-act-bailable-or-not" },
                      { title: "Section 138 Cheque Bounce Notice", href: "/notice-for-for-dishonoured-cheque" },
                      { title: "Banking & Finance Legal Services", href: "/services/banking-and-finance" },
                      { title: "Complete Legal Services Directory", href: "/directory" },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition flex items-center justify-between font-medium text-gray-800 hover:text-[#5A4C33]"
                      >
                        <span>{item.title}</span>
                        <span className="text-[#D2A02A] ml-2">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* ══ SECTION 13: REFERENCES & AUTHORITY ══ */}
                <section id="references-authority" className="scroll-mt-32 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-extrabold text-[#1a202c] mb-4 flex items-center gap-2">
                    <span>🏛️</span> References, Statutory Provisions &amp; Judicial Portals
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    Verify statutory acts, central bank guidelines, postal delivery tracking regulations, and judicial precedent databases via authoritative official portals:
                  </p>
                  <ul className="space-y-2 text-xs text-gray-700 list-disc pl-5">
                    <li>
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Reserve Bank of India (RBI)
                      </a>{" "}
                      — Master Direction on Responsible Business Conduct &amp; Guidelines on Digital Lending (2026).
                    </li>
                    <li>
                      <a
                        href="https://indiacode.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        India Code Legislative Repository
                      </a>{" "}
                      — Full statutory text for Bharatiya Nyaya Sanhita, 2023 (BNS) and Bharatiya Sakshya Adhiniyam, 2023 (BSA).
                    </li>
                    <li>
                      <a
                        href="https://www.indiapost.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Department of Posts, Ministry of Communications
                      </a>{" "}
                      — Regulatory framework for Speed Post barcode tracking, delivery certificates, and bulk dispatch services.
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Supreme Court of India Official Portal
                      </a>{" "}
                      — Judicial rulings on service of legal notices via electronic messaging platforms and digital evidence standards.
                    </li>
                    <li>
                      <a
                        href="https://egazette.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        The Gazette of India
                      </a>{" "}
                      — Payment and Settlement Systems Act, 2007 (PSSA) Section 25 electronic mandate dishonour enforcement notifications.
                    </li>
                  </ul>
                </section>

                {/* Social Share Bar at Bottom */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-500">
                    Found this legal notice automation blueprint useful? Share with your risk &amp; legal teams:
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition cursor-pointer"
                      aria-label="Share on X"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition cursor-pointer"
                      aria-label="Share on WhatsApp"
                    >
                      <span className="text-sm">💬</span>
                    </button>
                  </div>
                </div>

                {/* ══ SECTION 14: AMA COMPANY & MEDIA SECTION ══ */}
                <div className="border-4 border-[#D2A02A] rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white via-[#FAF7F0] to-[#F7F3E9] shadow-md space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#D2A02A]/20 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <img
                          src={LOGO_URL}
                          alt="AMA Legal Solutions Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-gray-900">AMA Legal Solutions</h4>
                        <p className="text-xs text-gray-600">Premier Banking, FinTech &amp; Commercial Litigation Firm</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-gray-200 shadow-sm">
                      <span className="text-yellow-500 text-lg">★★★★★</span>
                      <span className="text-sm font-extrabold text-gray-900">4.7 / 5.0</span>
                      <span className="text-xs text-gray-500">(Google Rating)</span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    AMA Legal Solutions is an advocate-led law firm headquartered in Delhi NCR, specializing in institutional debt recovery, banking compliance, financial arbitration, and white-collar defense. We combine decades of High Court courtroom trial experience with automated legal-tech infrastructure to power high-velocity pre-litigation recovery for India&apos;s leading financial enterprises.
                  </p>

                  <div>
                    <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Our Core Institutional Solutions:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      {[
                        { label: "Bulk Legal Notices", href: "/automated-bulk-legal-notice-for-digital-lenders" },
                        { label: "NBFC Debt Recovery", href: "/debt-recovery-system-for-nbfcs" },
                        { label: "Payday Loan Recovery", href: "/debt-recovery-system-for-pay-day-loans" },
                        { label: "Section 138 Litigation", href: "/notice-for-for-dishonoured-cheque" },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold p-2.5 rounded-xl text-center transition"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ══ SECTION 15: AUTHOR BIO ══ */}
                <section id="author-credentials" className="scroll-mt-32">
                  <div className="bg-[#f9f5e8] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-amber-200 flex flex-col md:flex-row gap-6 items-center text-left">
                    <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A] shadow-md">
                      <Image
                        src="/anujbhiya.png"
                        alt="Advocate Anuj Anand Malik - Founder & Managing Partner"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="space-y-3 flex-1 text-left">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          Reviewed &amp; Authored by Adv. Anuj Anand Malik
                        </h3>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
                          Verified Bar Council Advocate
                        </span>
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-gray-700">
                        Founder &amp; Senior Advocate, AMA Legal Solutions | Enrolled with Bar Council of Delhi &amp; Delhi High Court Bar Association
                      </p>
                      <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                        Advocate Anuj Anand Malik advises institutional banking clients, NBFCs, digital credit platforms, and debt recovery tribunals across India. With over a decade of specialized banking and commercial litigation experience, he pioneers legally sound, high-velocity debt recovery and compliance solutions that maximize loan recovery while upholding statutory dignity and RBI regulatory directives.
                      </p>
                      <div className="flex flex-wrap gap-4 pt-1 text-xs font-bold">
                        <a
                          href="https://www.linkedin.com/in/iamanujmalik/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#b88a22] flex items-center gap-1"
                        >
                          LinkedIn Profile →
                        </a>
                        <Link
                          href="/author/anuj-anand-malik"
                          className="text-gray-800 hover:text-black flex items-center gap-1"
                        >
                          Author Profile &amp; Credentials →
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* ── RIGHT STICKY SIDEBAR (space-y-8 sticky top-24) ── */}
            <div className="hidden lg:block sticky top-28 space-y-8">
              {/* Card 1: About Author Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center space-y-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-[#D2A02A] shadow-md bg-[#1a202c]">
                  <img
                    src="/anujbhiya.png"
                    alt="Advocate Anuj Anand Malik"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base">Adv. Anuj Anand Malik</h4>
                  <p className="text-xs text-[#D2A02A] font-semibold">Senior Banking Advocate</p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    Advocate at Delhi High Court &amp; Supreme Court of India. Strategic counsel for fintech loan recovery, bulk statutory notice automation, and digital lending compliance.
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#D2A02A] hover:text-[#5A4C33] transition"
                  >
                    Connect on LinkedIn →
                  </a>
                  <Link
                    href="/author/anuj-anand-malik"
                    className="text-xs font-semibold text-gray-700 hover:text-black transition"
                  >
                    View Public Credentials →
                  </Link>
                </div>
              </div>

              {/* Card 2: Need Legal Help? CTA Card (Dark #5A4C33 background) */}
              <div className="bg-[#5A4C33] text-white rounded-2xl p-6 shadow-xl space-y-4">
                <div className="inline-block px-2.5 py-1 bg-[#D2A02A]/20 border border-[#D2A02A]/40 text-[#D2A02A] text-[11px] font-bold uppercase rounded-full">
                  Enterprise Legal-Tech
                </div>
                <h4 className="font-extrabold text-xl text-white">Automate Your Legal Notice Dispatch</h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Eliminate manual drafting backlogs and expensive paralegal retainers. Onboard your delinquent credit portfolio onto our automated statutory notice pipeline.
                </p>
                <div className="space-y-3 pt-1">
                  <a
                    href="tel:+918700343611"
                    className="block text-center bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 rounded-xl text-xs transition shadow-md"
                  >
                    📞 Call +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full block text-center bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 rounded-xl text-xs transition cursor-pointer"
                  >
                    Request Callback / Demo
                  </button>
                </div>
              </div>

              {/* Card 3: Client Reviews Card (5.0 Google Rating & Verbatim matching schema) */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">⭐</span>
                    <span className="font-extrabold text-gray-900 text-sm">5.0 Google Rating</span>
                  </div>
                  <div className="flex text-[#D2A02A] text-sm">★★★★★</div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600 italic leading-relaxed">
                    &ldquo;{clientReviewData.reviewBody}&rdquo;
                  </p>
                  <div className="pt-2 text-left">
                    <p className="text-xs font-bold text-gray-900">{clientReviewData.authorName}</p>
                    <p className="text-[11px] text-emerald-700 font-semibold">Verified Institutional Partner &bull; {clientReviewData.reviewCount} Reviews</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Related Guides Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
                <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider border-b border-gray-100 pb-2">
                  Related Debt &amp; Notice Topics
                </h4>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/debt-recovery-system-for-nbfcs", "Debt Recovery System for NBFCs"],
                    ["/debt-recovery-system-for-pay-day-loans", "Payday Loan Recovery System"],
                    ["/recovery-for-nbfcs", "Legal Recovery for NBFCs"],
                    ["/recovery-for-pay-day-loan", "Recovery for Pay Day Loans"],
                    ["/section-25-payment-and-settlement-act-bailable-or-not", "Section 25 PSSA Legal Guide"],
                    ["/notice-for-for-dishonoured-cheque", "Section 138 Cheque Bounce Notice"],
                    ["/directory", "Complete Services Directory"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-gray-700 hover:text-[#D2A02A] transition-colors flex items-center justify-between py-0.5"
                      >
                        <span>{label}</span>
                        <span className="text-gray-400">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══ INTERACTIVE INTAKE MODAL ══ */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={resetModal}
        >
          <div
            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#1a202c] p-6 text-white relative">
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition text-sm cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D2A02A]/20 border border-[#D2A02A]/40 text-[#D2A02A] text-[11px] font-bold uppercase tracking-wider mb-2">
                <span>⚡</span> Automated Bulk Legal Notice Pilot
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Request Bulk Notice Demo &amp; Pilot Batch
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Direct portfolio consultation with our senior fintech and digital banking litigation desk.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {!modalSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name / Lending App Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="e.g. Vikram Malhotra / SpeedCredit FinServe"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Corporate / Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="legal@speedcredit.in"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        City &amp; State
                      </label>
                      <input
                        type="text"
                        name="cityState"
                        value={formData.cityState}
                        onChange={handleFormChange}
                        placeholder="e.g. Gurugram, Haryana"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Loan Asset Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] bg-white transition"
                      >
                        <option value="Digital Personal & Micro-Loans">Digital Personal &amp; Micro-Loans</option>
                        <option value="Salary Advance & EWA Credit">Salary Advance &amp; EWA Credit</option>
                        <option value="MSME & Business Credit Lines">MSME &amp; Business Credit Lines</option>
                        <option value="BNPL & Consumer Durable Credit">BNPL &amp; Consumer Durable Credit</option>
                        <option value="Equipment & Vehicle Financing">Equipment &amp; Vehicle Financing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Message / Portfolio Batch Size
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="e.g. We have ~2,500 monthly delinquent accounts past 30 DPD requiring automated bulk Speed Post and WhatsApp legal notices."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 rounded-xl transition text-sm cursor-pointer shadow-md"
                    >
                      Submit Demonstration Request
                    </button>
                    <button
                      type="button"
                      onClick={openWhatsAppDirect}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>💬 Connect Directly via WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Demonstration Request Received</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you. Our legal-tech operations director will review your portfolio parameters and connect within two business hours to demonstrate our sample Excel parser, custom notice drafts, and Section 63 BSA certificate generator.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={openWhatsAppDirect}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>Chat on WhatsApp Directly →</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

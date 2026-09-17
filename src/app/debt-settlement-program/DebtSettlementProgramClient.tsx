"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ──────────────────────── CONSTANTS & CONFIG ───────────────────── */
const PAGE_SLUG = "/debt-settlement-program";
const PAGE_URL = "https://www.amalegalsolutions.com/debt-settlement-program";
const SITE = "https://www.amalegalsolutions.com";
const OG_IMAGE_URL = "https://www.amalegalsolutions.com/images/og/debt-settlement-program.png";
const LOGO_URL = "https://www.amalegalsolutions.com/ama3.svg";

/* ──────────────────────── TOC SECTIONS ─────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Debt Settlement Program" },
  { id: "commercial-intent-gap", title: "Commercial Debt Crisis & Legal Resolution" },
  { id: "statutory-framework", title: "Statutory & RBI Regulatory Framework" },
  { id: "commercial-model-comparison", title: "Model Comparison: DIY vs Corporate vs AMA Program" },
  { id: "borrower-rights", title: "Borrower Rights & Statutory Anti-Harassment Law" },
  { id: "settlement-protocol", title: "5-Step Strategic Debt Settlement Program Protocol" },
  { id: "infographic-blueprint", title: "Strategic Program Architecture Infographic" },
  { id: "judicial-defense", title: "Judicial Shield: S. 138 NI Act, S. 25 PSS & Lok Adalat" },
  { id: "cibil-credit-rehabilitation", title: "Credit Score Rehabilitation & CIBIL Bureau Updates" },
  { id: "commercial-risk-analysis", title: "Commercial Risk: Why DIY Templates & Unregulated Apps Fail" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions (8 Accordions)" },
  { id: "more-legal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Judicial Authority Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── FAQ DATA (8 Accordions) ──────────────── */
const faqs = [
  {
    question: "What is a debt settlement program and how is it executed under Indian law?",
    answer:
      "A debt settlement program is an advocate-led commercial workout governed by the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets and Master Directions on Compromise Settlements. Licensed banking advocates evaluate distressed loan accounts, establish documented economic hardship, and negotiate formal compromise terms with commercial banks and NBFCs, extinguishing contractual liabilities under Section 62 of the Indian Contract Act, 1872 upon remittance of the agreed settlement sum.",
  },
  {
    question: "Why is an advocate-led debt settlement program superior to unregulated commercial debt apps?",
    answer:
      "An advocate-led debt settlement program operates under the statutory authority of the Advocates Act, 1961, conferring legitimate standing to enter appearances, file Vakalatnamas, and defend borrowers before judicial magistrate courts and Lok Adalats. Unregulated commercial debt agencies and loan consolidation applications possess zero courtroom standing, cannot shield borrowers against criminal complaints under Section 138 of the Negotiable Instruments Act, and lack statutory attorney-client confidentiality under Section 126 of the Indian Evidence Act, 1872.",
  },
  {
    question: "Can commercial banks or NBFCs reject an application under a debt settlement program?",
    answer:
      "Commercial lending institutions evaluate compromise settlement proposals pursuant to board-approved loan resolution policies mandated by the Reserve Bank of India. When an enrolled advocate presents a formal hardship brief substantiated by verifiable financial disruptions—such as loss of employment, business cessation, or catastrophic medical obligations—institutional recovery committees routinely accept technical compromise settlements to avoid protracted civil recovery litigation and mandatory bad-debt provisioning.",
  },
  {
    question: "How does enrolling in a legal debt settlement program stop collection agent harassment?",
    answer:
      "Enrolling in an advocate-directed debt settlement program prompts the immediate service of formal Vakalatnamas and statutory Cease-and-Desist notices to lending institutions and their collection vendors under the RBI Fair Practices Code. These legal instruments mandate that recovery agents cease all direct debtor communication, unannounced home visits, and third-party contact, requiring all ongoing settlement discussions to take place exclusively through legal counsel under penalty of regulatory prosecution before the RBI Ombudsman.",
  },
  {
    question: "What is the commercial advisory model of the debt settlement program at AMA Legal Solutions?",
    answer:
      "AMA Legal Solutions provides a transparent fixed legal advisory model that eliminates unpredictable hourly billing rates and excessive corporate retainers typical of large institutional firms. This accessible model grants distressed borrowers direct representation by senior banking litigators who perform comprehensive ledger audits, serve statutory anti-harassment directives, represent matters before judicial forums, and draft binding compromise documentation without recurring retainers or hidden billing markups.",
  },
  {
    question: "Why do automated DIY debt settlement letters downloaded from the internet fail in court?",
    answer:
      "Automated DIY settlement templates lack case-specific statutory defenses, omit necessary ledger audits that detect unlawful compound penal interest, and carry zero legal standing before judicial magistrate benches or Debt Recovery Tribunals. Institutional banking legal departments routinely discard generic internet templates as informal correspondence, whereas advocate-certified legal representations invoke binding statutory precedents that mandate formal review by institutional stressed-asset committees.",
  },
  {
    question: "What formal bank instrument proves the successful completion of a debt settlement program?",
    answer:
      "Successful completion of a debt settlement program produces two essential legal instruments: an official Bank Settlement Sanction Letter issued on corporate bank letterhead delineating the compromise terms, followed by an unconditional bank No Dues Certificate (NDC) issued under Section 62 of the Indian Contract Act, 1872. These authenticated instruments confirm total contractual discharge and require lending institutions to reconcile borrower records with all four authorized credit bureaus.",
  },
  {
    question: "How does a debt settlement program affect credit bureau reporting and CIBIL scores?",
    answer:
      "Following a negotiated compromise, lending institutions report the settled credit facility as 'Settled' to TransUnion CIBIL, Equifax, Experian, and CRIF High Mark in compliance with the Credit Information Companies (Regulation) Act, 2005. While this entry reflects an agreed compromise, it terminates recurring 30-day default escalations, extinguishes 'Suit Filed' markers, and creates a stable foundation for gradual score restoration through disciplined credit rehabilitation over subsequent quarters.",
  },
];

/* ──────────────────────── STEP PROTOCOL DATA ───────────────────── */
const stepListItems = [
  {
    title: "Forensic Ledger Reconciliation & Unlawful Surcharge Isolation",
    desc: "Our banking litigation advocates conduct an exhaustive forensic audit of your contested loan ledgers, segregating core principal disbursements from unlawful penal interest, compounding levies, and arbitrary service charges in direct accordance with RBI fair lending circulars.",
  },
  {
    title: "Advocate Notice of Representation & Statutory Anti-Harassment Injunction",
    desc: "We serve formal Vakalatnamas and statutory legal notices under the Advocates Act, 1961 and the RBI Fair Practices Code, mandating all creditors and recovery agencies to immediately cease direct telephone calls, residential visits, and third-party communications.",
  },
  {
    title: "Compiling the Documentary Hardship & Inability-to-Pay Dossier",
    desc: "We structure an evidence-backed One-Time Settlement (OTS) dossier documenting genuine commercial insolvency, salary reductions, business operational disruptions, or acute medical liabilities to establish solid statutory grounds for compromise resolution.",
  },
  {
    title: "Senior Advocate Negotiations with Institutional Stressed Asset Committees",
    desc: "Our senior advocates interface directly with bank zonal credit committees, circle recovery managers, and legal vertical heads, disarming inflated contractual demands and negotiating board-approved compromise settlements tailored to your realistic repayment capacity.",
  },
  {
    title: "Bank Sanction Letter Verification, Controlled Remittance & NDC Enforcement",
    desc: "Prior to any monetary transfer, our legal team verifies the authenticity of the lender's formal sanction letter, supervises direct remittance into your designated loan account, and enforces the mandatory issuance of an unconditional No Dues Certificate alongside credit bureau updates.",
  },
];

/* ──────────────────────── CLIENT REVIEW DATA ───────────────────── */
const clientReviewData = {
  authorName: "Siddharth Nambiar",
  authorRole: "Commercial Operations Director, Bengaluru • Resolved Multi-Lender Unsecured Liabilities",
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  reviewBody:
    "After an unexpected commercial venture downturn, I found myself trapped under severe liquidity strain with multiple unsecured business credit lines and personal loans. Relentless recovery agent calls to my family and workplace created immense distress, and digital debt settlement apps offered nothing beyond generic advice while demanding obscure processing overhead. Retaining Advocate Anuj Anand Malik and AMA Legal Solutions for their advocate-led debt settlement program transformed my entire situation. Their senior advocates audited my loan statements, discovered substantial unlawful penal interest additions, and served statutory cease-and-desist notices that permanently halted recovery harassment within 48 hours. They represented me before bank credit committees, structured a legitimate RBI compromise settlement, and secured official bank No Dues Certificates with complete contractual discharge. Their transparent fixed legal advisory model provided exceptional courtroom defense without any hidden retainers.",
};

/* ──────────────────────── STARS HELPER ─────────────────────────── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#D2A02A] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function DebtSettlementProgramClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    assetType: "Unsecured Personal Loans",
    message: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please provide your full name and contact number.");
      return;
    }
    setModalSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const textMsg = `Hello AMA Legal Solutions, I require advocate representation under your Debt Settlement Program.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Credit Facility: ${formData.assetType}
Situation Summary: ${formData.message || "Requesting transparent fixed legal advisory under the RBI compromise settlement framework."}`;
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
      assetType: "Unsecured Personal Loans",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const text =
      "Debt Settlement Program India: Advocate-Led Legal Resolution & RBI Compromise Advisory by AMA Legal Solutions";
    if (platform === "copy") {
      await navigator.clipboard.writeText(PAGE_URL);
      setShareMsg("Link Copied!");
      setTimeout(() => setShareMsg(null), 2000);
      return;
    }
    const map: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(PAGE_URL)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`,
    };
    if (map[platform]) {
      window.open(map[platform], "_blank", "width=600,height=400");
    }
  };

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Debt Settlement Program", href: PAGE_SLUG },
  ];

  /* ──────────────────────── JSON-LD SCHEMA GRAPH ────────────────── */
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "Debt Settlement Program India: Advocate-Led Legal Resolution, Commercial Advisory & RBI Compliance",
        description:
          "Authoritative legal guide to the debt settlement program in India. Learn how advocate representation halts recovery harassment, audits contested bank ledgers, and negotiates binding RBI One-Time Settlements with authentic No Dues Certificates.",
        image: [OG_IMAGE_URL],
        datePublished: "2026-03-01T09:00:00+05:30",
        dateModified: "2026-09-17T17:00:00+05:30",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          url: `${SITE}/author/anuj-anand-malik`,
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
          logo: {
            "@type": "ImageObject",
            url: LOGO_URL,
          },
          sameAs: [
            "https://www.facebook.com/amalegalsolutions",
            "https://twitter.com/amalegalsolutions",
            "https://www.linkedin.com/company/amalegalsolutions",
          ],
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": PAGE_URL,
        },
      },
      {
        "@type": "WebPage",
        "@id": PAGE_URL,
        url: PAGE_URL,
        name: "Debt Settlement Program India | Legal Resolution & RBI Compromise Advisory",
        description:
          "Professional advocate-led debt settlement program in India. Halt unlawful collection harassment, challenge inflated penal charges, and negotiate board-approved bank settlements.",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "#quick-answer"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "Product",
        "@id": `${PAGE_URL}#product`,
        name: "Advocate-Led Debt Settlement Program India",
        image: OG_IMAGE_URL,
        description:
          "Professional advocate representation for unsecured debt settlement programs in India. Forensic statement audits, statutory anti-harassment injunctions, Lok Adalat conciliation, and RBI OTS negotiations.",
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
            name: "Debt Settlement Program",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#process`,
        name: "5-Step Strategic Debt Settlement Program Protocol",
        itemListOrder: "https://schema.org/ItemListOrderedList",
        numberOfItems: 5,
        itemListElement: stepListItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          description: item.desc,
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="debt-settlement-program-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="afterInteractive"
      />

      {/* ══ BASE WRAPPER ══ */}
      <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pt-20 md:pt-28 font-sans">
        <div className="container mx-auto px-4 max-w-[1600px]">
          
          {/* ══ ASYMMETRIC 12-COLUMN HERO SECTION ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4 mb-12 items-center">
            
            {/* Left Column (lg:col-span-8) */}
            <div className="flex flex-col lg:col-span-8">
              <Breadcrumbs items={breadcrumbItems} />

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase tracking-wider w-max mb-4 shadow-sm border border-[#D2A02A]/30">
                <span>⚖️</span> Strategic Legal Debt Resolution &amp; Commercial Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl tracking-tight">
                Advocate-Led <span className="text-[#D2A02A]">Debt Settlement Program</span>: Legal Resolution &amp; RBI Compliance
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-normal">
                Facing insurmountable unsecured loan balances, continuous recovery agent harassment, or looming court summons? An advocate-led debt settlement program provides constitutionally anchored legal defense to audit contested loan accounts, enforce Reserve Bank of India compromise frameworks, and secure authentic bank No Dues Certificates with permanent contractual discharge.
              </p>

              {/* Author Row */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A] shadow-md shrink-0">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="font-bold text-[#1a202c] text-base hover:text-[#D2A02A] transition-colors inline-block"
                    >
                      Anuj Anand Malik
                    </Link>
                    <p className="text-xs text-gray-500 font-medium">
                      Founder &amp; Senior Advocate &bull; Reviewed by Team AMA Legal Solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span>📅</span> 17-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span>⏱️</span> 18 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> RBI Compromise Framework
                  </div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Enroll in Program</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1a202c] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-xl border border-gray-700 shadow transition-all text-sm md:text-base flex items-center gap-2"
                >
                  <span>📞 Speak to Advocate: +91-8700343611</span>
                </a>
              </div>
            </div>

            {/* Right Column (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/debt-settlement-program.png"
                  alt="Debt Settlement Program - Legal Advisory by AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Legal Debt Settlement Blueprint
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Advocate Representation &bull; RBI Compromise Directives
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ══ ACHIEVEMENTS & TRUST BANNER ══ */}
        <div className="bg-white border-y border-gray-200 py-6 mb-10 shadow-sm">
          <div className="container mx-auto px-4 max-w-[1600px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⚖️</span> Advocates Act, 1961
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Enrolled Senior Legal Representation
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> RBI Circulars
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Prudential Stressed Assets Norms
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⭐</span> 4.7/5 Client Rating
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Over 25,000 Borrowers Defended
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🛡️</span> Judicial Shield
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Section 138 NI &amp; Section 25 PSS Defense
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* ── LEFT COLUMN: DESKTOP STICKY TOC ── */}
            <aside className="hidden lg:block sticky top-28 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 max-h-[calc(100vh-140px)] overflow-y-auto">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <span className="text-[#D2A02A] text-lg font-bold">📑</span>
                <h2 className="font-bold text-gray-900 text-sm">Table of Contents</h2>
              </div>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            {/* ── CENTER EDITORIAL COLUMN ── */}
            <main className="min-w-0">
              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-6 sticky top-24 z-20">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">
                
                {/* Meta details & Social Share Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-5 gap-4">
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>
                      <strong className="text-gray-700">Practice Area:</strong> Banking Litigation &amp; Commercial Debt Restructuring
                    </p>
                    <p>
                      <strong className="text-gray-700">Judicial Purview:</strong> Supreme Court of India, High Courts &amp; Debt Recovery Tribunals
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 mr-1">Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition cursor-pointer"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition text-xs font-semibold cursor-pointer"
                      aria-label="Copy Link"
                    >
                      🔗 {shareMsg || "Copy"}
                    </button>
                  </div>
                </div>

                {/* ══ STANDALONE QUICK-ANSWER BLOCK ══ */}
                <div
                  id="quick-answer"
                  className="bg-amber-50 border-2 border-[#D2A02A] p-6 rounded-2xl shadow-sm text-gray-800 space-y-3"
                >
                  <div className="flex items-center gap-2 text-[#5A4C33] font-bold text-sm uppercase tracking-wider">
                    <span className="text-xl">⚡</span> Quick Answer: Debt Settlement Program
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-900 font-medium">
                    A debt settlement program is a structured legal and commercial debt resolution framework governed by Reserve Bank of India (RBI) compromise settlement directives and the Advocates Act, 1961, wherein enrolled banking advocates represent distressed borrowers to negotiate formal one-time settlements (OTS) and debt waivers on unsecured obligations. The program halts recovery agent harassment through statutory Cease-and-Desist notices, conducts forensic ledger audits to remove unlawful interest compounding, and negotiates directly with bank stressed-asset committees to execute board-approved settlement sanction letters followed by authentic No Dues Certificates.
                  </p>
                </div>

                {/* ── SECTION 1: COMMERCIAL INTENT & DEBT CRISIS ── */}
                <section id="commercial-intent-gap" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The Commercial Search Intent: Navigating Severe Debt Strain in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Borrowers searching for a commercial debt settlement program in India are confronting an acute financial, legal, and operational crisis. Over recent years, an aggressive expansion in retail and commercial credit—spanning unsecured personal loans, corporate credit cards, fintech digital credit lines, and working capital facilities—has left countless salaried professionals, entrepreneurs, and business owners trapped in compounding debt spirals.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When systemic liquidity shocks take place—such as sudden loss of employment, business contract cancellations, supply chain defaults, or prolonged family medical emergencies—borrowers quickly realize that minimum monthly installments merely service compounding interest without reducing the underlying principal. Once accounts cross the 90-day overdue threshold, lending institutions classify them as Non-Performing Assets (NPAs), unleashing third-party recovery agencies, continuous automated telephone calls, and coercive legal notices.
                  </p>
                  <blockquote className="p-4 border-l-4 border-[#D2A02A] bg-gray-50 italic text-gray-700 my-4 rounded-r-xl">
                    &ldquo;Under established Indian jurisprudence, a commercial loan default caused by genuine financial distress is purely a civil dispute under the Indian Contract Act, 1872. It cannot be converted into criminal intimidation or extra-judicial extortion through recovery agency coercion.&rdquo;
                  </blockquote>
                  <p className="text-gray-700 leading-relaxed">
                    Resolving this crisis requires formal legal intervention that balances financial restructuring with statutory protections guaranteed under Indian law. Enrolling in a structured debt settlement program balances the power differential between institutional banking lenders and individual debtors, establishing a legally protected mechanism where authentic financial rehabilitation can occur.
                  </p>
                </section>

                {/* ── SECTION 2: STATUTORY & RBI FRAMEWORK ── */}
                <section id="statutory-framework" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory &amp; RBI Regulatory Framework Governing Debt Settlement Programs
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    A legitimate debt settlement program does not operate through arbitrary negotiations or informal compromise deals; it is anchored in clear statutory provisions and Reserve Bank of India central banking circulars designed to safeguard banking stability while providing bona fide defaulters an orderly and honorable resolution:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">📜</span> RBI Master Directions on Compromise
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        The Reserve Bank of India mandates that all scheduled commercial banks, cooperative institutions, and non-banking financial companies (NBFCs) implement board-approved compromise settlement policies. These directives establish clear standards for negotiated principal write-downs and technical waivers when borrowers face verified economic distress.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">🏛️</span> Section 62, Indian Contract Act, 1872
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under the doctrine of contract novation and satisfaction, when contracting parties agree to extinguish an existing loan agreement through a One-Time Settlement compromise, the original contractual obligations and default claims are permanently discharged upon remittance of the agreed settlement sum.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">⚖️</span> Section 126, Indian Evidence Act, 1872
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Statutory attorney-client privilege protects all confidential financial statements, income records, and disclosures shared with an enrolled advocate. In contrast, unregulated commercial apps and debt settlement marketing portals possess zero privilege and frequently monetize private borrower financial records.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">🛡️</span> Legal Services Authorities Act, 1987
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Grants statutory authority to National Lok Adalats to conduct judicial conciliation between lenders and borrowers. A settlement award formulated before a Lok Adalat bench carries the full binding finality of a civil court decree, with zero stamp duty and zero appealability.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    By aligning every procedural stage with these statutory acts and Reserve Bank circulars, an advocate-led debt settlement program transforms what would otherwise be a traumatic recovery confrontation into an orderly, legally enforceable commercial workout.
                  </p>
                </section>

                {/* ── SECTION 3: COMMERCIAL MODEL COMPARISON TABLE ── */}
                <section id="commercial-model-comparison" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Model Comparison: Free DIY Templates vs. Corporate Law Firms vs. AMA Debt Settlement Program
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Borrowers assessing options for resolving distressed debt typically encounter three distinct models: free or low-cost automated DIY online templates, traditional corporate law firms, and specialized advocate-led programs such as AMA Legal Solutions. Comparing these alternatives across legal enforceability, courtroom standing, and cost structure is essential for safeguarding your financial and legal rights.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-[#1a202c] text-white">
                          <th className="p-3.5 border border-gray-700 font-bold">Key Evaluation Dimension</th>
                          <th className="p-3.5 border border-gray-700 font-semibold">Free DIY Online Templates</th>
                          <th className="p-3.5 border border-gray-700 font-semibold">Traditional Corporate Law Firms</th>
                          <th className="p-3.5 border border-gray-700 font-bold text-[#D2A02A]">
                            AMA Legal Solutions Program
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Courtroom Representation
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            None (Cannot appear before magistrates)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Available, but billed through expensive litigation tariffs
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Direct Senior Advocate Court Defense &amp; Lok Adalat
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Attorney-Client Privilege
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            Zero (Public templates &amp; data privacy exposure)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Protected under Section 126 Evidence Act
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            100% Confidential &amp; Privileged Advocate Counsel
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Anti-Harassment Injunctions
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            Ineffective (Ignored by bank recovery agencies)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Slow corporate protocol with prolonged escalation
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Immediate Statutory Cease-and-Desist Notice
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Forensic Statement Ledger Audit
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            Not included (Unchecked penal compounding)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Often outsourced at supplementary hourly billing
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Comprehensive Forensic Audit &amp; Penalty Segregation
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Commercial Advisory Model
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-600">
                            Free, but leads to severe litigation exposure
                          </td>
                          <td className="p-3.5 border border-gray-200 text-amber-700 font-medium">
                            Cost-prohibitive hourly billing &amp; surprise retainers
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Transparent Fixed Legal Advisory Without Hourly Markups
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Sanction Letter &amp; NDC Verification
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            High danger of accepting forged or unofficial letters
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Standard corporate verification protocols
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Guaranteed Official Bank Verification &amp; Bureau Updates
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    While automated DIY templates appear convenient initially, they consistently collapse when evaluated by institutional banking legal verticals. A generic internet template cannot cross-examine forensic accounting statements, formulate statutory defenses to Section 138 demand notices, or enter formal court appearances. Conversely, corporate law firms bill on extensive hourly rates, erecting commercial barriers that distressed borrowers cannot afford. AMA Legal Solutions bridges this divide with a transparent fixed legal advisory model that guarantees senior advocate courtroom defense without unexpected retainers.
                  </p>
                </section>

                {/* ── SECTION 4: BORROWER RIGHTS & ANTI-HARASSMENT ── */}
                <section id="borrower-rights" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Borrower Rights Under RBI Directives &amp; Anti-Harassment Protections
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    One of the most vital protections delivered by an advocate-led debt settlement program is the absolute cessation of unlawful collection agency harassment. The Reserve Bank of India, via its Master Circular on Fair Practices Code and binding directives on recovery agents, has instituted strict statutory limitations that collection vendors frequently disregard:
                  </p>

                  <ul className="space-y-3 my-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Mandated Calling Hours:</strong> Collection personnel are legally barred from contacting borrowers before 8:00 AM or after 7:00 PM. Telephonic calls placed outside these statutory hours represent an actionable regulatory violation.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Absolute Ban on Third-Party Disclosures:</strong> Lenders and collection agents are strictly prohibited from contacting relatives, employers, coworkers, or neighbors regarding personal loan dues. Such unlawful disclosures violate the fundamental right to privacy affirmed by the Supreme Court of India in <em>K.S. Puttaswamy v. Union of India</em>.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Strict Prohibition on Coercion &amp; Abusive Language:</strong> The Supreme Court in <em>ICICI Bank Ltd. v. Prakash Kaur</em> established that financial institutions cannot engage musclemen or abrasive recovery agents to force repayment. Verbal intimidation, physical threats, or harassment constitute criminal intimidation under Section 351 of the Bharatiya Nyaya Sanhita (formerly Section 506 IPC).
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Verification and Agent Identification Mandate:</strong> Any recovery representative visiting a borrower&apos;s residence must furnish official bank authorization documents, government identity verification, and a certified copy of the bank notice. Entry into private premises without explicit permission is unlawful.
                      </div>
                    </li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    Upon joining our debt settlement program, AMA Legal Solutions immediately serves a formal notice of legal representation to the lender&apos;s grievance redressal vertical and recovery management division. This places the institution on formal notice that all communication must be directed exclusively through our legal chambers, shielding borrowers and their families from further harassment under threat of formal regulatory and judicial prosecution.
                  </p>
                </section>

                {/* ── SECTION 5: 5-STEP STRATEGIC SETTLEMENT PROTOCOL ── */}
                <section id="settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Strategic Debt Settlement Program Protocol
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Executing a successful, legally binding compromise settlement requires an organized, multi-stage legal procedure. AMA Legal Solutions follows an advocate-directed five-step protocol that systematically mitigates exposure while securing permanent contractual release:
                  </p>

                  <div className="space-y-4 my-6">
                    {stepListItems.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 border-2 border-[#D2A02A] shadow">
                          {idx + 1}
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="text-base sm:text-lg font-bold text-[#1a202c]">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Through this disciplined protocol, borrowers avoid the common disaster of paying unverified partial sums that simply service accrued penalties without reducing principal balances or providing legally binding contractual closure.
                  </p>
                </section>

                {/* ── SECTION 6: SIGNATURE INFOGRAPHIC CARD ── */}
                <section id="infographic-blueprint">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">📊</span>
                      <h3 className="text-lg font-extrabold text-[#1a202c]">
                        Strategic Debt Settlement Program Architecture
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                      This infographic illustrates the complete advocate-led debt settlement program: spanning initial forensic ledger auditing, statutory anti-harassment shield, credit committee compromise negotiations, to official bank sanction verification and No Dues Certificate enforcement.
                    </p>
                    <div className="rounded-xl overflow-hidden border border-[#D2A02A]/30 shadow-md bg-white">
                      <img
                        src="/images/og/debt-settlement-program.png"
                        alt="Strategic Debt Settlement Program Architecture - AMA Legal Solutions"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="text-center text-[11px] text-gray-500 mt-3 font-medium">
                      Figure 1.0: Comprehensive Advocate-Led Debt Settlement Architecture under RBI Compromise Directives.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 7: JUDICIAL DEFENSE & LOK ADALAT ── */}
                <section id="judicial-defense" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Judicial Defense: Section 138 NI Act, Section 25 PSS &amp; Lok Adalat
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    When unsecured loan accounts experience prolonged default, financial institutions often initiate quasi-criminal proceedings to create coercive settlement leverage. The primary statutory mechanisms deployed are Section 138 of the Negotiable Instruments Act, 1881 for cheque dishonor, and Section 25 of the Payment and Settlement Systems Act, 2007 for electronic NACH/e-mandate failure.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Responding to judicial summons requires licensed advocate representation. Unregulated credit counselors or digital fintech portals cannot appear before judicial magistrates or file Vakalatnamas. Our senior banking litigators provide comprehensive courtroom defense:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2">
                        Section 138 NI Act Court Defense
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        We contest defective statutory demand notices, examine whether cheques were presented beyond validity windows, demonstrate that blank security instruments were filled without authorization, and execute compoundable settlements under Section 147 of the Negotiable Instruments Act.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2">
                        Section 25 PSS Act NACH Defense
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        We verify whether electronic debit mandates complied with National Payments Corporation of India (NPCI) directives, challenge repetitive auto-debit triggers that generate unjustified return penalties, and transfer disputes to judicial conciliation benches.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    In addition, our legal team routinely utilizes National Lok Adalats convened by the National Legal Services Authority (NALSA). Under Section 21 of the Legal Services Authorities Act, 1987, an award formulated before a Lok Adalat carries the definitive authority of a civil court decree. It is final, binding on both debtor and creditor, requires zero court fees, and permanently extinguishes the lender&apos;s right to pursue future litigation.
                  </p>
                </section>

                {/* ── SECTION 8: CREDIT RESTORATION & CIBIL PROTOCOL ── */}
                <section id="cibil-credit-rehabilitation" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Credit Score Rehabilitation &amp; CIBIL Bureau Reporting Dynamics
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    A core consideration for borrowers participating in a debt settlement program is understanding its effect on credit scores. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), lending institutions are required to transmit the true operational status of all accounts to the four authorized credit bureaus: TransUnion CIBIL, Equifax, Experian, and CRIF High Mark.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When an account is resolved through an advocate-negotiated compromise settlement, its bureau classification transitions from &lsquo;Default&rsquo; or &lsquo;Written-Off&rsquo; to &lsquo;Settled&rsquo;. While a &lsquo;Settled&rsquo; status indicates satisfaction for less than the initial contractual balance, it yields three critical commercial benefits:
                  </p>

                  <div className="space-y-3 my-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">1. Halting Monthly Compounding Default Penalties:</strong>
                      <p className="text-xs sm:text-sm text-gray-600">
                        An active default continues reporting escalating Days Past Due (DPD) metrics every single month (e.g., 90, 180, 360+ DPD), driving credit ratings down indefinitely. A settlement brings an immediate, permanent end to active default tracking.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">2. Removal of Adverse Legal Action Markers:</strong>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Executing a compromise settlement compels the lender to remove damaging &lsquo;Suit Filed&rsquo; and &lsquo;Wilful Defaulter&rsquo; classifications upon issuing the unconditional No Dues Certificate.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">3. Systematic Credit Score Rehabilitation:</strong>
                      <p className="text-xs sm:text-sm text-gray-600">
                        With all unsecured claims settled and No Dues Certificates on record, borrowers can start rebuilding their credit profile. By adopting a secured credit card backed by a modest fixed deposit and maintaining a flawless repayment record, clients routinely rebuild credit scores above 750 over subsequent quarters.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 9: COMMERCIAL RISK ANALYSIS ── */}
                <section id="commercial-risk-analysis" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Risk Analysis: Why Automated Templates &amp; Unregulated Agencies Fail
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Distressed borrowers are often targeted by marketing companies promoting automated loan consolidation apps or downloadable settlement templates. These services fail in practical commercial execution for several critical reasons:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-red-50/50 rounded-xl border border-red-200">
                      <h3 className="font-bold text-red-900 text-base mb-2">
                        Lack of Enrolled Advocate Representation
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        Commercial consulting agencies cannot sign legal notices, draft courtroom replies, or file appearances before magistrates. When a bank files a Section 138 complaint or sends an arbitration notice, commercial agencies abandon the client, leaving them completely unrepresented in court.
                      </p>
                    </div>

                    <div className="p-5 bg-red-50/50 rounded-xl border border-red-200">
                      <h3 className="font-bold text-red-900 text-base mb-2">
                        Danger of Accepting Fraudulent Letters
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        Third-party recovery agencies frequently generate fake compromise letters on unverified letterheads to extract partial payments. Without an enrolled advocate verifying the settlement sanction through official bank channels, borrowers risk losing funds while their default remains active.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Choosing a formal debt settlement program directed by licensed advocates guarantees that every agreement is verified directly with institutional credit committees, documented under Section 62 of the Indian Contract Act, and backed by authentic No Dues Certificates.
                  </p>
                </section>

                {/* ── SECTION 10: 8-QUESTION ACCORDION FAQ ── */}
                <section id="frequently-asked-questions" className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
                    <span className="text-2xl">❓</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions: Debt Settlement Program
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Authoritative, statutory answers to essential questions regarding our advocate-led debt settlement program.
                  </p>

                  <div className="space-y-3">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white shadow-xs"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 hover:bg-gray-50 transition cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span className="font-bold text-sm sm:text-base text-[#1a202c]">
                              {faq.question}
                            </span>
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-transform duration-200 ${
                                isOpen
                                  ? "bg-[#D2A02A] text-white rotate-180"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              ↓
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-700 leading-relaxed">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── SECTION 11: MORE LEGAL GUIDES ── */}
                <section id="more-legal-guides" className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a202c]">
                    More Legal Debt Relief &amp; Banking Dispute Guides
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Explore our comprehensive collection of advocate-authored legal guides covering debt settlement, recovery defense, and statutory banking rights:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    <Link
                      href="/debt-settlement-services"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Debt Settlement Services India
                    </Link>
                    <Link
                      href="/debt-settlement-india"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Debt Settlement India: Legal Guide
                    </Link>
                    <Link
                      href="/loan-settlement-vs-debt-consolidation"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Settlement vs. Debt Consolidation
                    </Link>
                    <Link
                      href="/best-debt-settlement-company"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Best Debt Settlement Firm
                    </Link>
                    <Link
                      href="/when-to-choose-debt-settlement"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; When to Choose Debt Settlement
                    </Link>
                    <Link
                      href="/how-to-settle-loans-after-a-failed-debt-consolidation-plan"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Failed Consolidation Relief
                    </Link>
                    <Link
                      href="/loan-settlement-expert-for-high-value-debts"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; High Value Debt Resolution
                    </Link>
                    <Link
                      href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Settlement vs. Closure CIBIL Impact
                    </Link>
                    <Link
                      href="/debt-settlement-letter"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Statutory Debt Settlement Letter
                    </Link>
                    <Link
                      href="/essentials-of-a-valid-debt-settlement-letter"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Valid Settlement Letter Essentials
                    </Link>
                    <Link
                      href="/business-loan-settlement"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Business Loan Settlement Guide
                    </Link>
                    <Link
                      href="/one-time-settlement-ots-legal-assistance"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; One-Time Settlement (OTS) Legal Help
                    </Link>
                  </div>
                </section>

                {/* ── SECTION 12: REFERENCES & STATUTORY AUTHORITY ── */}
                <section id="statutory-references" className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a202c]">
                    References &amp; Judicial Authority Portals
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Verify statutory acts, judicial precedent, and central banking directives through official government and court portals:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2A02A] text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Reserve Bank of India (Complaint Management System)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://main.sci.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2A02A] text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Supreme Court of India Official Portal</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2A02A] text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>National Legal Services Authority (NALSA Lok Adalat)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://drt.etribunals.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2A02A] text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Debt Recovery Tribunals e-Portal (eDRT)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://legislative.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2A02A] text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Legislative Department, Ministry of Law and Justice</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.transunioncibil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2A02A] text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>TransUnion CIBIL Official Credit Dispute Portal</span>
                      <span>↗</span>
                    </a>
                  </div>
                </section>

                {/* ── SOCIAL SHARE ROW BOTTOM ── */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Share This Legal Resource:
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold text-gray-700 transition cursor-pointer"
                    >
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold text-gray-700 transition cursor-pointer"
                    >
                      Twitter/X
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold text-gray-700 transition cursor-pointer"
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 bg-[#D2A02A]/20 hover:bg-[#D2A02A]/30 text-[#5A4C33] rounded-lg text-xs font-bold transition cursor-pointer"
                    >
                      {shareMsg || "Copy Page Link"}
                    </button>
                  </div>
                </div>

                {/* ── SECTION 13: AMA COMPANY & MEDIA SECTION ── */}
                <section
                  id="ama-company-section"
                  className="p-6 sm:p-8 bg-gradient-to-br from-white via-gray-50 to-[#FAF7F0] rounded-2xl border-4 border-[#D2A02A] shadow-md space-y-6"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 relative shrink-0">
                        <img
                          src="/ama3.svg"
                          alt="AMA Legal Solutions Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a202c]">
                          AMA Legal Solutions
                        </h2>
                        <p className="text-xs text-gray-600 font-medium">
                          India&apos;s Premier Advocate-Led Debt Settlement &amp; Banking Defense Firm
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                      <div className="text-[#D2A02A] text-lg font-bold">★★★★★</div>
                      <div className="text-left">
                        <span className="text-xs font-bold text-gray-900 block">4.7 Google Rating</span>
                        <span className="text-[10px] text-gray-500">25,000+ Borrowers Defended</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Headquartered in Sector 57, Gurugram, AMA Legal Solutions represents honest individuals, entrepreneurs, and commercial enterprises across India. Founded by Advocate Anuj Anand Malik, our specialized banking litigation vertical combines seasoned credit committee negotiations with aggressive courtroom defense, ensuring our clients achieve genuine financial liberation under Reserve Bank of India compromise frameworks.
                  </p>

                  <div>
                    <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                      Our Specialized Legal Solutions:
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <Link
                        href="/debt-settlement-services"
                        className="p-2.5 border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold rounded-lg text-center transition"
                      >
                        Debt Settlement Services
                      </Link>
                      <Link
                        href="/debt-settlement-india"
                        className="p-2.5 border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold rounded-lg text-center transition"
                      >
                        Debt Settlement India
                      </Link>
                      <Link
                        href="/loan-settlement-expert-for-high-value-debts"
                        className="p-2.5 border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold rounded-lg text-center transition"
                      >
                        High Value Debts
                      </Link>
                      <Link
                        href="/one-time-settlement-ots-legal-assistance"
                        className="p-2.5 border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold rounded-lg text-center transition"
                      >
                        OTS Assistance
                      </Link>
                    </div>
                  </div>
                </section>

              </div>
            </main>

            {/* ── RIGHT STICKY SIDEBAR (280px) ── */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2.5">
                  <span className="text-base">👨‍⚖️</span>
                  <h3 className="font-bold text-gray-900 text-sm">About Author</h3>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-3.5 border-2 border-[#D2A02A] shrink-0 shadow-sm">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-sm">Anuj Anand Malik</h4>
                    <p className="text-[11px] text-gray-500 font-medium">Founder &amp; Senior Advocate</p>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-xs text-[#D2A02A] font-bold hover:underline mt-0.5 inline-block"
                    >
                      View Profile →
                    </Link>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Advocate Anuj Anand Malik is India&apos;s leading banking litigation and debt resolution advocate, specializing in Reserve Bank of India compromise frameworks, Lok Adalat defense, and halting recovery agent harassment.
                </p>

                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block w-full border border-[#0A66C2] text-[#0A66C2] text-center py-2.5 rounded-xl text-xs font-bold hover:bg-[#0A66C2] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-xl border border-[#D2A02A]/40 space-y-4 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D2A02A]/20 rounded-full blur-xl pointer-events-none" />
                
                <div className="inline-block bg-[#D2A02A]/20 border border-[#D2A02A]/50 text-[#f3cf7a] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Urgent Legal Relief
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">
                  Trapped in Unsecured Debt?
                </h3>

                <p className="text-gray-200 text-xs leading-relaxed">
                  Halt recovery agent harassment immediately. Retain our senior advocates for a confidential case evaluation under RBI compromise settlement guidelines.
                </p>

                <a
                  href="tel:+918700343611"
                  className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 px-4 rounded-xl text-center block text-sm shadow-md transition transform hover:-translate-y-0.5"
                >
                  📞 Call: +91-8700343611
                </a>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl text-center block text-sm border border-white/20 transition cursor-pointer"
                >
                  Request Callback
                </button>
              </div>

              {/* Client Reviews Card (Matching Schema Verbatim) */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Client Reviews
                  </span>
                  <span className="bg-amber-100 text-[#5A4C33] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    5.0 Google Rating
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Stars count={5} />
                  <span className="text-gray-900 font-extrabold text-sm">5.0 / 5.0</span>
                </div>

                <blockquote className="text-gray-700 italic text-xs leading-relaxed">
                  &ldquo;{clientReviewData.reviewBody}&rdquo;
                </blockquote>

                <div className="pt-3 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-xs">
                    {clientReviewData.authorName}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">
                    {clientReviewData.authorRole}
                  </div>
                </div>

                <Link
                  href="/ama-legal-solutions-reviews"
                  className="block text-center text-xs text-[#D2A02A] font-bold hover:underline pt-2"
                >
                  Read All Verified Client Reviews →
                </Link>
              </div>

              {/* Related Guides Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-[#1a202c] text-xs uppercase tracking-wider border-b border-gray-100 pb-2">
                  Related Topic Guides
                </h3>
                <div className="space-y-2 text-xs">
                  <Link
                    href="/debt-settlement-services"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement Services
                  </Link>
                  <Link
                    href="/debt-settlement-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement India Guide
                  </Link>
                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs. Debt Consolidation
                  </Link>
                  <Link
                    href="/best-debt-settlement-company"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Firm
                  </Link>
                  <Link
                    href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs. Closure CIBIL Impact
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Stop Recovery Harassment Legally
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-notice-for-personal-loan"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Section 138 NI Act Defense
                  </Link>
                </div>
              </div>

            </aside>

          </div>
        </div>

        {/* ══ INTERACTIVE INTAKE MODAL ══ */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border-2 border-[#D2A02A]/40 overflow-hidden">
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 text-2xl font-bold cursor-pointer"
                aria-label="Close Modal"
              >
                &times;
              </button>

              {!modalSubmitted ? (
                <div>
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full mb-2">
                      CONFIDENTIAL ADVOCATE CONSULTATION
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#1a202c]">
                      Program Enrollment Evaluation
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Privileged legal consultation under Section 126 of the Indian Evidence Act, 1872.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        required
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          required
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="e.g. ramesh@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          City &amp; State
                        </label>
                        <input
                          type="text"
                          name="cityState"
                          value={formData.cityState}
                          onChange={handleFormChange}
                          placeholder="e.g. New Delhi / Bengaluru"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Category / Debt Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm bg-white"
                        >
                          <option value="Unsecured Personal Loans">Unsecured Personal Loans</option>
                          <option value="Credit Card Outstanding Debts">Credit Card Outstanding Debts</option>
                          <option value="Multiple Lenders & Recovery Harassment">Multiple Lenders &amp; Recovery Harassment</option>
                          <option value="Cheque Bounce / Section 138 Notice">Cheque Bounce / Section 138 Notice</option>
                          <option value="NACH Mandate / Section 25 Notice">NACH Mandate / Section 25 Notice</option>
                          <option value="MSME / Business Unsecured Credit">MSME / Business Unsecured Credit</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Message / Situation Summary
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={3}
                        placeholder="Briefly describe your debt scenario, number of creditors, or whether recovery harassment has commenced..."
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-4 rounded-xl text-center block text-sm shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer mt-2"
                    >
                      Submit for Advocate Evaluation
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Request Received
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. A senior banking advocate will review your details and contact you confidentially.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-xl text-center block text-sm shadow transition cursor-pointer"
                    >
                      Chat with Advocate on WhatsApp Directly →
                    </button>
                  </div>
                  <button
                    onClick={resetModal}
                    className="text-xs text-gray-500 hover:underline pt-2 cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </>
  );
}

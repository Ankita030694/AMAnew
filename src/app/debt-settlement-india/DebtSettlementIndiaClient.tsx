"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ──────────────────────── CONSTANTS & CONFIG ───────────────────── */
const PAGE_SLUG = "/debt-settlement-india";
const PAGE_URL = "https://www.amalegalsolutions.com/debt-settlement-india";
const SITE = "https://www.amalegalsolutions.com";
const OG_IMAGE_URL = "https://www.amalegalsolutions.com/images/og/debt-settlement-india.png";
const LOGO_URL = "https://www.amalegalsolutions.com/ama3.svg";

/* ──────────────────────── TOC SECTIONS ─────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Debt Settlement India" },
  { id: "macro-landscape", title: "The Commercial Debt Landscape in India" },
  { id: "legal-framework", title: "Statutory & RBI Regulatory Framework" },
  { id: "commercial-comparison", title: "Commercial Model Comparison" },
  { id: "borrower-rights", title: "Borrower Rights & Anti-Harassment Law" },
  { id: "settlement-protocol", title: "5-Step Legal Settlement Protocol" },
  { id: "infographic-blueprint", title: "Strategic Settlement Infographic" },
  { id: "judicial-defense", title: "Judicial Defense: S. 138 NI & S. 25 PSS" },
  { id: "cibil-credit-rehabilitation", title: "Credit Restoration & CIBIL Protocol" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "more-legal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Statutory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── FAQ DATA (8 Accordions) ──────────────── */
const faqs = [
  {
    question: "What is the legal framework governing debt settlement in India?",
    answer:
      "Debt settlement in India operates under the Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Directions and the RBI Master Directions on Compromise Settlements. These statutory regulations empower commercial banks, cooperative lenders, and non-banking financial companies (NBFCs) to execute board-approved compromise settlements and formal write-downs for borrowers experiencing verifiable financial insolvency.",
  },
  {
    question: "How does advocate-led debt settlement differ from unregulated debt relief agencies?",
    answer:
      "Advocate-led law firms operate under the statutory authority of the Advocates Act, 1961, providing constitutional legal standing and attorney-client privilege under Section 126 of the Indian Evidence Act, 1872. Unregulated private agencies and digital mobile apps cannot enter appearances before judicial courts, cannot file formal Vakalatnamas, and leave borrowers legally vulnerable to Section 138 Negotiable Instruments Act or Section 25 Payment and Settlement Systems Act proceedings.",
  },
  {
    question: "Can lenders file police complaints or arrest borrowers for unpaid unsecured debts in India?",
    answer:
      "Default on an unsecured personal loan, credit card, or business overdraft constitutes a civil dispute under the Indian Contract Act, 1872, and the Supreme Court of India has ruled that financial default alone cannot attract criminal prosecution or police arrest. While lending institutions frequently invoke Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007, for dishonored payments, banking advocates routinely defend these matters and achieve compoundable settlements before National Lok Adalats.",
  },
  {
    question: "How does legal debt settlement protect borrowers from recovery agent harassment?",
    answer:
      "Serving a formal legal representation notice and Cease-and-Desist mandate invokes the RBI Master Circular on Fair Practices Code for Lenders, which legally prohibits recovery agents from contacting third parties, visiting borrower residences unannounced, or making calls outside approved statutory hours (8:00 AM to 7:00 PM). Continued harassment following formal advocate representation constitutes an actionable regulatory violation subject to complaints before the RBI Integrated Ombudsman and territorial police authorities under relevant criminal provisions.",
  },
  {
    question: "What documentary evidence is required to establish commercial hardship for a bank settlement?",
    answer:
      "Establishing bona fide hardship for an institutional One-Time Settlement requires documented proof of involuntary financial distress submitted to the lender's Stressed Asset Management committee. Essential statutory proofs include termination letters or salary reduction records for employees, audited balance sheets and GST filings demonstrating business collapse for entrepreneurs, and hospital discharge summaries for severe medical emergencies.",
  },
  {
    question: "Why do automated online legal drafting templates fail when challenged by institutional lenders?",
    answer:
      "Automated online drafting templates lack personalized jurisdictional defenses, fail to conduct forensic ledger reconciliations against RBI interest calculation directives, and possess zero evidentiary weight before Debt Recovery Tribunals or judicial magistrate courts. Institutional bank legal departments routinely dismiss generic digital notices, whereas advocate-certified legal representations incorporate formal statutory citations and demand ledger transparency under threat of judicial oversight.",
  },
  {
    question: "What is the legal significance of the bank settlement sanction letter and No Dues Certificate?",
    answer:
      "The official bank settlement sanction letter represents a novation of contract under Section 62 of the Indian Contract Act, 1872, legally binding the lender to accept the compromise sum in full discharge of all obligations. Upon timely payment of the agreed settlement amount, the lending institution is legally obligated to issue an unconditional No Dues Certificate (NDC) and report the updated status to all four authorized credit information companies (CIBIL, Experian, Equifax, and CRIF High Mark).",
  },
  {
    question: "How does debt settlement affect CIBIL scores and what is the post-settlement restoration path?",
    answer:
      "A negotiated compromise settlement marks the credit account as 'Settled' with credit rating agencies under the Credit Information Companies (Regulation) Act, 2005, which halts persistent monthly default reporting and legal escalations. Borrowers can systematically restore their credit profile by procuring an authenticated No Dues Certificate, rectifying bureau reporting discrepancies, and maintaining disciplined repayment on a secured credit facility backed by a fixed deposit.",
  },
];

/* ──────────────────────── STEP PROTOCOL DATA ───────────────────── */
const stepListItems = [
  {
    title: "Forensic Ledger Audit & Hardship Assessment",
    desc: "Our banking litigation advocates conduct an exhaustive forensic reconciliation of your loan sanction contracts, payment schedules, and statement ledgers, isolating unlawful compounding interest, late payment penalties, and GST surcharges from the genuine principal sum.",
  },
  {
    title: "Statutory Cease-and-Desist & Anti-Harassment Representation",
    desc: "We issue formal Vakalatnamas and legal representation notices to all lending institutions and third-party recovery agencies under the Advocates Act, 1961 and RBI Fair Practices Directives, legally terminating all unauthorized calls, home visits, and third-party disclosures.",
  },
  {
    title: "Drafting the Comprehensive OTS Legal Hardship Dossier",
    desc: "We compile an authoritative One-Time Settlement (OTS) dossier grounded in documented proofs of commercial distress, income reduction, or medical exigency, establishing statutory defenses and requesting board-level compromise relief.",
  },
  {
    title: "High-Tier Institutional Negotiations with Stressed Asset Verticals",
    desc: "Our senior advocates interface directly with bank zonal recovery heads, credit committees, and legal managers, striking down inflated penal interest charges and negotiating optimal compromise settlements.",
  },
  {
    title: "Bank Sanction Letter Verification & No Dues Certificate Enforcement",
    desc: "Before any settlement payment is processed, our legal team verifies the authenticity and terms of the official bank settlement letter, subsequently enforcing prompt issuance of the No Dues Certificate and rectification with credit bureaus.",
  },
];

/* ──────────────────────── CLIENT REVIEW DATA ───────────────────── */
const clientReviewData = {
  authorName: "Vikram Malhotra",
  authorRole: "Senior Business Consultant, New Delhi • Restructured & Resolved Multi-Lender Liabilities",
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  reviewBody:
    "Facing severe liquidity distress after a commercial project failure, I was overwhelmed by multiple unsecured loan defaults across private lenders and relentless collection agency harassment. Online digital debt apps offered no genuine legal protection and charged obscure processing overhead. Retaining Advocate Anuj Anand Malik and AMA Legal Solutions was the best decision for my commercial rehabilitation. Their senior banking advocates conducted an exhaustive forensic ledger audit, served statutory cease-and-desist notices under the RBI Fair Practices Code, and eliminated unauthorized calls and visits entirely. They represented me directly before the bank credit committees, structured an advocate-certified One-Time Settlement, and secured verified bank No Dues Certificates with complete contractual discharge. Their transparent fixed advisory and steadfast courtroom defense provided total peace of mind.",
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
export default function DebtSettlementIndiaClient() {
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
      alert("Please provide your name and phone number.");
      return;
    }
    setModalSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const textMsg = `Hello AMA Legal Solutions, I require advocate representation for Debt Settlement in India.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Debt Facility: ${formData.assetType}
Details: ${formData.message || "Requesting transparent legal case evaluation under RBI compromise framework."}`;
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
      "Debt Settlement India: Comprehensive Legal Guide & RBI OTS Advisory by AMA Legal Solutions";
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
    { label: "Debt Settlement India", href: PAGE_SLUG },
  ];

  /* ──────────────────────── JSON-LD SCHEMA GRAPH ────────────────── */
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "Debt Settlement India: Complete Legal Guide, Commercial Intent & RBI Compromise Resolution",
        description:
          "Comprehensive commercial and legal guide to debt settlement in India. Learn how advocate-led representation secures RBI-compliant compromise settlements, halts recovery harassment, and delivers genuine No Dues Certificates.",
        image: [OG_IMAGE_URL],
        datePublished: "2026-01-15T09:00:00+05:30",
        dateModified: "2026-09-17T15:30:00+05:30",
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
        name: "Debt Settlement India | Strategic Legal Resolution & RBI Compromise Advisory",
        description:
          "Strategic advocate-led debt settlement in India. Eliminate recovery agent harassment, negotiate formal OTS compromises under RBI regulations, and obtain authenticated bank No Dues Certificates.",
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
        name: "Advocate-Led Debt Settlement Legal Services India",
        image: OG_IMAGE_URL,
        description:
          "Professional advocate representation for unsecured debt settlement in India. Forensic ledger audits, statutory anti-harassment notices, Lok Adalat defense, and RBI OTS negotiations.",
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
            name: "Debt Settlement India",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#process`,
        name: "5-Step Strategic Legal Debt Settlement Protocol",
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
        id="debt-settlement-india-schema"
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
                <span>⚖️</span> Statutory Debt Resolution &amp; Commercial Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl tracking-tight">
                Strategic <span className="text-[#D2A02A]">Debt Settlement India</span>: Advocate-Led Resolution &amp; RBI Compliance
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-normal">
                Facing unmanageable unsecured debts, multiple lender default notices, or aggressive collection agency harassment? Advocate-led debt settlement provides constitutionally protected legal representation to audit loan ledgers, invoke Reserve Bank of India (RBI) compromise settlement frameworks, and negotiate authentic bank No Dues Certificates with complete contractual discharge.
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
                    <span>⏱️</span> 16 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> RBI Framework Aligned
                  </div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Case Evaluation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1a202c] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-xl border border-gray-700 shadow transition-all text-sm md:text-base flex items-center gap-2"
                >
                  <span>📞 Call Advocate: +91-8700343611</span>
                </a>
              </div>
            </div>

            {/* Right Column (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/debt-settlement-india.png"
                  alt="Debt Settlement India - Legal Advisory by AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Debt Resolution Blueprint
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
                  <span className="text-[#D2A02A]">⚖️</span> Legal Standing
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Advocates Act, 1961 Representation
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> Statutory Directives
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  RBI Master Circular Compromise Norms
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⭐</span> 4.7/5 Client Rating
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Across 25,000+ Borrowers Defended
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🛡️</span> Judicial Shield
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Section 138 &amp; Section 25 Defense
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
                      <strong className="text-gray-700">Jurisdiction:</strong> Supreme Court of India, High Courts &amp; Debt Recovery Tribunals
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 mr-1">Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 transition text-xs font-semibold"
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
                    <span className="text-xl">⚡</span> Quick Answer: Debt Settlement in India
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-900 font-medium">
                    Debt settlement in India is a statutory legal negotiation process governed by Reserve Bank of India (RBI) compromise settlement frameworks, wherein distressed borrowers facing genuine financial hardship reach a formal compromise agreement with lending banks or NBFCs to discharge unsecured debts through a discounted lump-sum payment. Under the Advocates Act, 1961, advocate-represented debt settlement legally freezes recovery agent harassment, audits statement ledgers to remove illegal compounding interest and penalties, and secures a formal, board-approved bank settlement sanction letter followed by an official No Dues Certificate (NDC).
                  </p>
                </div>

                {/* ── SECTION 1: MACRO LANDSCAPE ── */}
                <section id="macro-landscape" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The Commercial Debt Landscape &amp; Borrower Distress in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Over the past five years, the rapid proliferation of unsecured consumer credit, instant digital personal loans, and fintech credit cards has dramatically altered household and commercial balance sheets across India. While access to digital credit expanded exponentially, macroeconomic shocks, job market restructuring, commercial contract delays, and unforeseen medical emergencies frequently disrupt borrower repayment capacity.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When monthly debt obligations cross sustainable cash flows, borrowers encounter a multi-front crisis. Creditors initiate aggressive automated penalty accruals, compounding interest rates upwards of 40% annually on credit cards, and dispatch third-party recovery agencies that routinely violate central banking conduct guidelines. Understanding that genuine commercial default is distinct from willful evasion is the cornerstone of effective legal debt resolution.
                  </p>
                  <blockquote className="p-4 border-l-4 border-[#D2A02A] bg-gray-50 italic text-gray-700 my-4 rounded-r-xl">
                    &ldquo;Under Indian jurisprudence, an honest borrower unable to satisfy debt obligations due to genuine commercial distress possesses constitutional and statutory protections against criminalization, harassment, and usurious penalty compounding.&rdquo;
                  </blockquote>
                </section>

                {/* ── SECTION 2: STATUTORY & RBI FRAMEWORK ── */}
                <section id="legal-framework" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory &amp; RBI Regulatory Framework for Compromise Settlements
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Debt settlement in India does not occur in an extra-judicial vacuum. It is supported by established commercial laws and comprehensive central banking directions designed to resolve Non-Performing Assets (NPAs) while restoring economic viability to honest debtors:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">📜</span> RBI Master Directions on Compromise
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        The Reserve Bank of India mandates that all scheduled commercial banks and NBFCs establish board-approved compromise settlement policies. These circulars authorize institutional credit committees to approve technical write-offs and negotiated principal concessions for non-willful defaulters.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">🏛️</span> Section 62, Indian Contract Act, 1872
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        The doctrine of contract novation allows contracting parties to substitute the original loan terms with a newly negotiated settlement agreement. Once the compromise sum is remitted, the original loan contract is permanently extinguished.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">⚖️</span> Section 126, Indian Evidence Act, 1872
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Attorney-client confidentiality grants privileged legal protection to all borrower communications, financial disclosures, and forensic statements shared with an enrolled advocate, shielding borrowers from third-party exposure.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">🛡️</span> Legal Services Authorities Act, 1987
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Empowers National and State Lok Adalats to conduct statutory conciliation. Compromise settlements finalized before a Lok Adalat bench have the binding status of a civil court decree with zero appealability.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: COMMERCIAL COMPARISON TABLE ── */}
                <section id="commercial-comparison" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Evaluation: DIY Templates vs. Corporate Law Firms vs. AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Addressing commercial search intent requires a clear, objective analysis of the available avenues for debt resolution in India. Borrowers often wonder whether to rely on free automated DIY online templates, retain general corporate law firms, or engage an advocate-led specialized debt resolution practice.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-[#1a202c] text-white">
                          <th className="p-3.5 border border-gray-700 font-bold">Key Evaluation Metric</th>
                          <th className="p-3.5 border border-gray-700 font-semibold">Free DIY Online Templates</th>
                          <th className="p-3.5 border border-gray-700 font-semibold">General Corporate Law Firms</th>
                          <th className="p-3.5 border border-gray-700 font-bold text-[#D2A02A]">
                            AMA Legal Solutions (Advocate-Led)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Courtroom Representation
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            None (Cannot represent in court)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Available but incurs heavy retainers
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Direct Senior Advocate Court Defense
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Legal Privilege &amp; Confidentiality
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            Zero (Public data risk)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Protected under Evidence Act
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            100% Statutory Attorney-Client Privilege
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Halting Recovery Agent Harassment
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            Ineffective (Ignored by bank agents)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Slow corporate protocol
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Immediate Statutory Cease-and-Desist Notice
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Forensic Statement &amp; Ledger Audit
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            Not included
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Often outsourced at extra cost
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Comprehensive In-House Forensic Audit
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Commercial Advisory Model
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-600">
                            Free, but leads to costly legal exposure
                          </td>
                          <td className="p-3.5 border border-gray-200 text-amber-700 font-medium">
                            Cost-prohibitive hourly billing &amp; retainers
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Transparent Fixed Legal Advisory
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            No Dues Certificate Enforcement
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            None (High risk of fake letters)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Standard corporate follow-up
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Verified Bank Sanction &amp; NDC Guarantee
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Generic online drafting templates and unregulated aggregators create a dangerous illusion of resolution. When financial disputes escalate to judicial courts under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, informal letters carry zero legal weight. Conversely, corporate law firms burden financially stressed clients with excessive retainers. AMA Legal Solutions bridges this divide by delivering specialized, advocate-led courtroom defense within an accessible, transparent advisory framework.
                  </p>
                </section>

                {/* ── SECTION 4: BORROWER RIGHTS & ANTI-HARASSMENT ── */}
                <section id="borrower-rights" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Borrower Rights Under RBI Guidelines &amp; Anti-Harassment Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Reserve Bank of India has repeatedly issued stern directives prohibiting unlawful, intimidating, or coercive debt collection practices. Regulated lending institutions and their contracted recovery agencies are bound by strict statutory limitations:
                  </p>

                  <ul className="space-y-3 my-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Approved Calling Hours:</strong> Recovery agents may strictly only contact borrowers between 8:00 AM and 7:00 PM. Calls or physical visits outside these hours violate central banking guidelines.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Prohibition of Third-Party Intrusions:</strong> Lenders are strictly barred from contacting workplace colleagues, neighbors, relatives, or social contacts to disclose debt status or induce shame.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Mandatory Identity &amp; Authorization:</strong> Any collection representative visiting a residence must present official bank authorization, government identification, and respect borrower privacy.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Judicial Precedent (Supreme Court):</strong> In landmark decisions including <em>ICICI Bank v. Shanti Devi Sharma</em>, the Supreme Court of India held that banks cannot employ musclemen or extra-legal force to recover dues, making lenders vicariously liable for agent misconduct.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* ── SECTION 5: 5-STEP PROTOCOL ── */}
                <section id="settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Strategic Legal Debt Settlement Protocol
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Executing an authentic, legally binding debt settlement requires an orderly, multi-tier legal workflow designed to protect the debtor from legal pitfalls and secure maximum principal relief:
                  </p>

                  <div className="space-y-6 my-6">
                    {stepListItems.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-4 items-start"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-base shadow-sm">
                          0{idx + 1}
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 6: SIGNATURE INFOGRAPHIC CARD ── */}
                <section
                  id="infographic-blueprint"
                  className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm"
                >
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 bg-[#D2A02A]/20 text-[#5A4C33] text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                      Visual Legal Blueprint
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a202c]">
                      Comprehensive Debt Settlement Protocol Infographic
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mt-1">
                      Visualizing the advocate-led pathway from forensic audit and cease-and-desist protection to bank sanction letter authentication and unconditional No Dues Certification.
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                    <img
                      src="/images/og/debt-settlement-india.png"
                      alt="Debt Settlement India Legal Workflow Infographic"
                      className="w-full h-auto object-contain block"
                    />
                  </div>

                  <div className="mt-4 text-center text-xs text-gray-500 italic">
                    Figure 1.0: End-to-end statutory debt settlement architecture overseen by banking litigation advocates under Reserve Bank of India regulatory directives.
                  </div>
                </section>

                {/* ── SECTION 7: JUDICIAL DEFENSE ── */}
                <section id="judicial-defense" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Judicial Defense: Section 138 NI Act &amp; Section 25 PSS Act
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    When unsecured loan defaults persist beyond 90 days, institutional lenders frequently activate quasi-criminal statutory mechanisms to exert pressure on borrowers:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                    <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] space-y-2">
                      <h3 className="font-bold text-gray-900 text-base">
                        Section 138, Negotiable Instruments Act, 1881
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Triggered when post-dated or security cheques dishonor. Our advocates represent borrowers before Judicial Magistrates, challenging statutory notice validity, establishing security cheque status, and facilitating compoundable resolutions without criminal penalties.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#5A4C33] space-y-2">
                      <h3 className="font-bold text-gray-900 text-base">
                        Section 25, Payment and Settlement Systems Act, 2007
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Triggered upon the dishonor of electronic NACH or e-mandates. We provide comprehensive legal defense, file formal replies to legal demand notices, and transition the dispute into an amicable, court-sanctioned compromise settlement.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    By coordinating directly with Lok Adalat benches and judicial forums, our litigation advocates transform potentially severe quasi-criminal proceedings into binding, closed civil settlements with comprehensive judicial decrees.
                  </p>
                </section>

                {/* ── SECTION 8: CIBIL & CREDIT RESTORATION ── */}
                <section id="cibil-credit-rehabilitation" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Credit Restoration &amp; Post-Settlement CIBIL Protocol
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    A key commercial consideration in debt settlement is its effect on credit bureau scores. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), lenders report the closure status of settled accounts to bureaus like CIBIL, Experian, Equifax, and CRIF High Mark:
                  </p>

                  <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4 my-4">
                    <h3 className="font-bold text-[#1a202c] text-base">
                      Understanding the &ldquo;Settled&rdquo; Status vs. Perpetual Default
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      While an account reported as &ldquo;Settled&rdquo; reflects an initial credit score reduction, it immediately halts active monthly Days Past Due (DPD) accumulation and terminates pending litigation. Remaining in perpetual default, by contrast, permanently damages creditworthiness and leaves assets exposed to legal attachment.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <span className="block text-base font-bold text-gray-900">Step 1</span>
                        <span className="text-xs text-gray-600">Obtain &amp; verify authentic Bank NDC</span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <span className="block text-base font-bold text-gray-900">Step 2</span>
                        <span className="text-xs text-gray-600">Rectify CICRA bureau reporting errors</span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <span className="block text-base font-bold text-gray-900">Step 3</span>
                        <span className="text-xs text-gray-600">Rebuild 750+ score via secured facilities</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 9: 8-QUESTION ACCORDION FAQ ── */}
                <section id="frequently-asked-questions" className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                      Authoritative Guidance
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                      Frequently Asked Questions: Debt Settlement India
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 bg-white"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-4 sm:p-5 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition cursor-pointer text-sm sm:text-base gap-4"
                          aria-expanded={openFaqIndex === idx}
                        >
                          <span>{faq.question}</span>
                          <span className="text-[#D2A02A] text-xl font-extrabold shrink-0">
                            {openFaqIndex === idx ? "−" : "+"}
                          </span>
                        </button>
                        {openFaqIndex === idx && (
                          <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 10: MORE LEGAL GUIDES ── */}
                <section id="more-legal-guides" className="space-y-4 pt-6 border-t border-gray-200">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    More Legal Debt Relief Guides
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Explore our comprehensive repository of advocate-authored legal guides regarding Indian banking regulations, recovery defenses, and settlement strategies:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                    {[
                      {
                        title: "Loan Settlement vs Debt Consolidation",
                        href: "/loan-settlement-vs-debt-consolidation",
                        desc: "Comparative statutory evaluation of settlement vs. debt consolidation.",
                      },
                      {
                        title: "Best Debt Settlement Company",
                        href: "/best-debt-settlement-company",
                        desc: "Evaluating advocate-led legal practices vs. commercial agencies.",
                      },
                      {
                        title: "Personal Loan Debt Settlement",
                        href: "/personal-loan-debt-settlement",
                        desc: "Step-by-step resolution of high-value unsecured personal loans.",
                      },
                      {
                        title: "Credit Card Debt Settlement",
                        href: "/credit-card-debt-settlement",
                        desc: "Halting compounding revolving interest and settling cards legally.",
                      },
                      {
                        title: "Stop Recovery Harassment Legally",
                        href: "/how-to-stop-bank-recovery-agents-harassment-legally-in-india",
                        desc: "Cease-and-desist notices and legal remedies under RBI conduct rules.",
                      },
                      {
                        title: "Section 138 Cheque Bounce Defense",
                        href: "/section-138-cheque-bounce-notice-for-personal-loan",
                        desc: "Magistrate court representation and Lok Adalat consent decrees.",
                      },
                      {
                        title: "File RBI Ombudsman Complaint",
                        href: "/how-to-file-a-complaint-against-bank-nbfc-in-rbi",
                        desc: "Filing regulatory grievances against unfair bank practices.",
                      },
                      {
                        title: "Remove Written-Off CIBIL Tag",
                        href: "/how-to-remove-a-written-off-status-from-a-credit-report",
                        desc: "Post-settlement credit bureau rectification and score rebuilding.",
                      },
                      {
                        title: "High-Value Debt Settlement Lawyers",
                        href: "/loan-settlement-expert-for-high-value-debts",
                        desc: "Commercial debt resolution and Debt Recovery Tribunal (DRT) defense.",
                      },
                    ].map((guide, idx) => (
                      <Link
                        key={idx}
                        href={guide.href}
                        className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-white flex flex-col justify-between"
                      >
                        <div>
                          <h3 className="font-bold text-gray-900 group-hover:text-[#D2A02A] text-xs sm:text-sm transition">
                            {guide.title}
                          </h3>
                          <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                            {guide.desc}
                          </p>
                        </div>
                        <span className="text-xs text-[#D2A02A] font-bold mt-2 inline-block">
                          Read Guide →
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 11: REFERENCES & STATUTORY CITATIONS ── */}
                <section id="statutory-references" className="space-y-4 pt-6 border-t border-gray-200">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    References &amp; Regulatory Authorities
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Verify statutory acts, central bank circulars, and judicial portals governing debt resolution in India:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2A02A] text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Reserve Bank of India (RBI) Official Portal</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://main.sci.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2A02A] text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Supreme Court of India Official Judgments</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2A02A] text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>RBI Integrated Ombudsman Scheme (CMS)</span>
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
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold text-gray-700 transition"
                    >
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold text-gray-700 transition"
                    >
                      Twitter/X
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold text-gray-700 transition"
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 bg-[#D2A02A]/20 hover:bg-[#D2A02A]/30 text-[#5A4C33] rounded-lg text-xs font-bold transition"
                    >
                      {shareMsg || "Copy Page Link"}
                    </button>
                  </div>
                </div>

                {/* ── SECTION 12: AMA COMPANY & MEDIA SECTION ── */}
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
                    Headquartered in Sector 57, Gurugram, AMA Legal Solutions represents honest individuals, entrepreneurs, and commercial enterprises across India. Founded by Advocate Anuj Anand Malik, our specialized banking litigation vertical blends aggressive courtroom defense with seasoned credit committee negotiations, ensuring our clients achieve genuine, authenticated financial liberation under Reserve Bank of India compromise frameworks.
                  </p>

                  <div>
                    <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                      Our Specialized Legal Solutions:
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <Link
                        href="/personal-loan-debt-settlement"
                        className="p-2.5 border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold rounded-lg text-center transition"
                      >
                        Personal Loan OTS
                      </Link>
                      <Link
                        href="/credit-card-debt-settlement"
                        className="p-2.5 border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold rounded-lg text-center transition"
                      >
                        Credit Card Settlement
                      </Link>
                      <Link
                        href="/section-138-cheque-bounce-notice-for-personal-loan"
                        className="p-2.5 border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold rounded-lg text-center transition"
                      >
                        Section 138 Defense
                      </Link>
                      <Link
                        href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                        className="p-2.5 border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold rounded-lg text-center transition"
                      >
                        Anti-Harassment Shield
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
                  Advocate Anuj Anand Malik is India&apos;s leading debt settlement and banking litigation lawyer, specializing in RBI compromise frameworks, Lok Adalat defense, and halting recovery agent harassment.
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
                  Facing Unmanageable Debt?
                </h3>

                <p className="text-gray-200 text-xs leading-relaxed">
                  Stop recovery agent harassment today. Retain our senior advocates for a confidential case evaluation under RBI compromise settlement guidelines.
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
                    href="/loan-settlement-vs-debt-consolidation"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs. Debt Consolidation
                  </Link>
                  <Link
                    href="/how-to-settle-loans-after-a-failed-debt-consolidation-plan"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Failed Debt Consolidation Relief
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
                      Strategic Debt Evaluation
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Privileged consultation under Section 126 of the Indian Evidence Act.
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
                          Category / Asset Type
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
                        placeholder="Briefly describe your debt scenario, number of lenders, or whether recovery harassment has commenced..."
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
                  <h3 className="text-xl font-bold text-gray-900">Request Registered Successfully</h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-gray-900">{formData.fullName}</span>. An advocate from Team AMA Legal Solutions will review your details shortly.
                  </p>
                  <button
                    onClick={openWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl transition text-sm shadow-md cursor-pointer"
                  >
                    <span>💬 Connect Directly on WhatsApp</span>
                  </button>
                  <div className="pt-2">
                    <button
                      onClick={resetModal}
                      className="text-xs text-gray-500 hover:text-gray-800 underline cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ──────────────────────── CONSTANTS & CONFIG ───────────────────── */
const PAGE_SLUG = "/debt-settlement-best-waiver";
const PAGE_URL = "https://www.amalegalsolutions.com/debt-settlement-best-waiver";
const SITE = "https://www.amalegalsolutions.com";
const OG_IMAGE_URL = "https://www.amalegalsolutions.com/images/og/debt-settlement-best-waiver.png";
const LOGO_URL = "https://www.amalegalsolutions.com/ama3.svg";

/* ──────────────────────── TOC SECTIONS ─────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Best Debt Settlement Waiver" },
  { id: "waiver-anatomy", title: "Anatomy of a Bank Debt Settlement Waiver" },
  { id: "statutory-framework", title: "Statutory & RBI Regulatory Framework" },
  { id: "commercial-comparison", title: "Commercial Model Comparison" },
  { id: "maximizing-waiver", title: "Strategic Advocacy: Maximizing Lawful Waivers" },
  { id: "waiver-scams-vs-authentic", title: "Fake Waiver Letters vs. Authentic Sanctions" },
  { id: "settlement-protocol", title: "5-Step Legal Protocol for Maximum Waivers" },
  { id: "infographic-blueprint", title: "Strategic Settlement Waiver Blueprint" },
  { id: "judicial-defense", title: "Judicial Defense: S. 138 NI & S. 25 PSS" },
  { id: "credit-rehabilitation", title: "Credit Impact & CIBIL Rehabilitation" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "more-legal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Statutory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── FAQ DATA (8 Accordions) ──────────────── */
const faqs = [
  {
    question: "What constitutes the best debt settlement waiver under Indian banking regulations?",
    answer:
      "The best debt settlement waiver under Indian banking law is an institutional compromise sanctioned pursuant to the Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Directions, wherein the lender legally waives 100% of accumulated penal interest, default surcharges, and a negotiated quantum of the outstanding balance. This statutory concession is codified in a formal compromise sanction letter under Section 62 of the Indian Contract Act, 1872, legally barring the lender from pursuing residual claims upon receipt of the agreed settlement sum.",
  },
  {
    question: "Can lending banks legally refuse to waive penal interest and compounding charges?",
    answer:
      "Under the Reserve Bank of India Master Directions on Fair Lending Practices - Penal Charges in Loan Accounts, commercial banks and NBFCs are legally prohibited from capitalizing penal charges or levying usurious compounding interest on overdue loans. Distressed borrowers represented by legal advocates can compel lenders to excise these unauthorized ledger additions during settlement negotiations, as penal charges must only reflect reasonable recovery administration costs rather than revenue enhancement.",
  },
  {
    question: "Why do automated DIY debt settlement waiver letters fail before bank credit committees?",
    answer:
      "Automated DIY online waiver templates lack forensic ledger reconciliation, fail to cite governing central bank circulars, and carry zero evidentiary standing before judicial magistrates or Debt Recovery Tribunals. Institutional bank legal departments routinely discard generic internet drafts because they do not carry the formal representation authority of an enrolled advocate under the Advocates Act, 1961, leaving borrowers unprotected against escalating litigation.",
  },
  {
    question: "How do senior banking advocates maximize the debt settlement waiver percentage?",
    answer:
      "Senior banking litigation advocates maximize waiver terms by establishing an incontrovertible commercial hardship dossier corroborated by audited balance sheets, medical records, or employment termination documents, while conducting forensic audits that highlight regulatory non-compliance in the bank's interest calculations. Advocates then present these statutory defenses directly to senior zonal credit committees and Stressed Asset Management verticals, bypassing commission-based recovery agents who lack the legal authority to grant substantial write-downs.",
  },
  {
    question: "What distinguishes an authentic bank settlement waiver letter from a fraudulent recovery document?",
    answer:
      "An authentic debt settlement waiver letter is issued directly on official bank letterhead bearing a verified corporate reference number, institutional seal, and the digital or physical signature of an authorized Stressed Asset Management officer specifying the exact account number and waiver parameters. Conversely, fraudulent documents generated by rogue collection agencies often request payments into personal bank accounts or third-party UPI addresses without official credit committee authorization, exposing borrowers to continuous debt claims.",
  },
  {
    question: "Can a debt settlement waiver be legally revoked after payment is made?",
    answer:
      "A debt settlement waiver executed pursuant to a valid sanction letter constitutes a completed novation of contract under Section 62 of the Indian Contract Act, 1872, and cannot be unilaterally revoked by the lending institution provided the borrower complied with the stipulated payment timelines and conditions. Upon fulfillment of the compromise terms, the lender is legally obligated to issue an unconditional No Dues Certificate and update the account status with credit information companies under the Credit Information Companies (Regulation) Act, 2005.",
  },
  {
    question: "How does securing a debt settlement waiver protect borrowers against Section 138 NI Act proceedings?",
    answer:
      "Executing a formal compromise settlement with the lender provides an absolute defense in pending or threatened proceedings under Section 138 of the Negotiable Instruments Act, 1881, and Section 25 of the Payment and Settlement Systems Act, 2007, as the underlying legally enforceable debt is formally modified and discharged. Banking advocates present the authenticated compromise sanction letter before the competent Judicial Magistrate or National Lok Adalat bench, securing complete closure and disposal of quasi-criminal complaints.",
  },
  {
    question: "What is the commercial advantage of advocate-led debt resolution over corporate law firms?",
    answer:
      "Advocate-led debt resolution firms provide focused, specialized courtroom defense and direct banking committee negotiations within an accessible, transparent fixed advisory model that avoids open-ended hourly billing or surprise retainers. In contrast to multi-practice corporate law firms whose cost structures are prohibitive for financially distressed borrowers, specialized banking advocates deliver dedicated statutory representation while preventing the catastrophic financial risks associated with defective DIY templates.",
  },
];

/* ──────────────────────── STEP PROTOCOL DATA ───────────────────── */
const stepListItems = [
  {
    title: "Forensic Ledger Audit & Usurious Interest Decoupling",
    desc: "Our banking litigation advocates conduct an exhaustive forensic reconciliation of your loan ledgers and sanction contracts, isolating and excising unlawful compounding interest, unapplied penal fees, and arbitrary bounce penalties from the genuine underlying balance.",
  },
  {
    title: "Statutory Cease-and-Desist & Anti-Coercion Protection",
    desc: "We issue formal Vakalatnamas and legal representation notices to all creditor banks and third-party recovery agencies under the Advocates Act, 1961 and RBI Fair Practices Directives, legally terminating unauthorized calls, third-party disclosures, and home visits.",
  },
  {
    title: "Compiling the Incontrovertible Hardship Dossier",
    desc: "We assemble a comprehensive One-Time Settlement (OTS) dossier corroborated by verifiable proofs of financial distress, medical exigencies, or business income disruption, establishing statutory grounds for maximum compromise concessions.",
  },
  {
    title: "Institutional Negotiations with Stressed Asset Management Verticals",
    desc: "Our senior advocates interface directly with bank zonal credit committees, circle legal managers, and Stressed Asset Management Groups (SAMG), rejecting low-level agency offers and securing optimal board-level waiver percentages.",
  },
  {
    title: "Bank Sanction Letter Authentication & No Dues Certificate Enforcement",
    desc: "Prior to any compromise payment, our legal team validates the official settlement sanction letter for corporate legitimacy, subsequently enforcing the timely issuance of the unconditional No Dues Certificate and CIBIL bureau rectification.",
  },
];

/* ──────────────────────── CLIENT REVIEW DATA ───────────────────── */
const clientReviewData = {
  authorName: "Vikram Malhotra",
  authorRole: "Senior Commercial Consultant, New Delhi • Restructured & Resolved Multi-Lender Liabilities",
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  reviewBody:
    "After a catastrophic supply chain disruption crippled my commercial venture, I found myself saddled with compounding debt across five private banks and non-banking lenders. Relentless recovery agents threatened my family, and generic online waiver templates failed completely when banks issued legal notices under Section 138 of the Negotiable Instruments Act. Engaging Advocate Anuj Anand Malik and AMA Legal Solutions was a turning point. Their banking litigation advocates conducted a forensic audit of my account statements, unearthing unauthorized penal compounding, and served statutory cease-and-desist notices that immediately halted all recovery agent harassment. They represented me before the zonal credit committees and secured the best debt settlement waiver possible under RBI compromise directives, followed by authentic bank sanction letters and unconditional No Dues Certificates. Their transparent fixed advisory and steadfast court defense gave me a fresh financial beginning without corporate retainers or hidden costs.",
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
export default function DebtSettlementBestWaiverClient() {
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
    const textMsg = `Hello AMA Legal Solutions, I require advocate representation to negotiate the Best Debt Settlement Waiver.
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
      "Best Debt Settlement Waiver in India: Advocate-Led OTS & RBI Concession Legal Advisory by AMA Legal Solutions";
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
    { label: "Best Debt Settlement Waiver", href: PAGE_SLUG },
  ];

  /* ──────────────────────── JSON-LD SCHEMA GRAPH ────────────────── */
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "Best Debt Settlement Waiver in India: Complete Legal Guide & RBI Compromise Advisory",
        description:
          "Comprehensive legal and commercial guide to securing the best debt settlement waiver in India. Learn how senior banking advocates audit ledgers, eliminate unlawful penal charges, and negotiate maximum compromise write-downs with authentic No Dues Certificates.",
        image: [OG_IMAGE_URL],
        datePublished: "2026-02-10T09:00:00+05:30",
        dateModified: "2026-09-17T15:45:00+05:30",
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
        name: "Best Debt Settlement Waiver in India | Advocate-Led OTS & RBI Concession Advisory",
        description:
          "Strategic advocate-led debt settlement waiver advisory in India. Audit bank statement ledgers, halt recovery harassment, negotiate maximum One-Time Settlement waivers, and secure authenticated No Dues Certificates.",
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
        name: "Advocate-Led Debt Settlement Waiver Legal Services India",
        image: OG_IMAGE_URL,
        description:
          "Professional banking advocate representation to maximize debt settlement waivers in India. Forensic statement audits, statutory anti-harassment notices, Lok Adalat defense, and RBI OTS credit committee negotiations.",
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
            name: "Best Debt Settlement Waiver",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#process`,
        name: "5-Step Legal Protocol for Securing Maximum Debt Waivers",
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
        id="debt-settlement-best-waiver-schema"
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
                <span>⚖️</span> Statutory Debt Resolution &amp; RBI Waiver Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl tracking-tight">
                Securing the <span className="text-[#D2A02A]">Best Debt Settlement Waiver</span> in India: Advocate-Led Resolution &amp; RBI Compliance
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-normal">
                Facing unsustainable unsecured debts, escalating penal interest, or aggressive collection calls? Achieving the highest lawful debt settlement waiver requires senior advocate representation to conduct forensic ledger audits, eliminate unauthorized compounding penalties under Reserve Bank of India (RBI) directives, and negotiate board-approved bank compromise agreements backed by authentic No Dues Certificates.
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
                    <span>🛡️</span> RBI OTS Aligned
                  </div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Waiver Evaluation</span>
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
                  src="/images/og/debt-settlement-best-waiver.png"
                  alt="Best Debt Settlement Waiver - Legal Advisory by AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Debt Waiver Architecture
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Forensic Ledger Audit &bull; RBI Compromise Concessions
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
                  <span className="text-[#D2A02A]">📜</span> Statutory Waivers
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  RBI Master Compromise Framework
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⭐</span> 4.7/5 Rating
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  25,000+ Borrowers Defended
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🛡️</span> Judicial Shield
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  S. 138 NI &amp; S. 25 PSS Court Defense
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
                      <strong className="text-gray-700">Practice Area:</strong> Banking Law, Debt Restructuring &amp; Compromise Settlement
                    </p>
                    <p>
                      <strong className="text-gray-700">Regulatory Oversight:</strong> Reserve Bank of India (RBI) Master Directions &amp; Central Civil Law
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
                    <span className="text-xl">⚡</span> Quick Answer: Best Debt Settlement Waiver
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-900 font-medium">
                    The best debt settlement waiver in India is an institutional, board-approved concession granted by banks and NBFCs under Reserve Bank of India (RBI) compromise settlement frameworks, legally waiving accumulated penal interest, compounding late fees, and a substantial portion of the outstanding balance for distressed borrowers. Securing the highest lawful waiver requires advocate-certified forensic ledger reconciliation to isolate usurious charges, statutory cease-and-desist notices to halt recovery harassment, and formal representation before bank credit committees to secure an authentic settlement sanction letter followed by an unconditional No Dues Certificate.
                  </p>
                </div>

                {/* ── SECTION 1: ANATOMY OF A BANK DEBT SETTLEMENT WAIVER ── */}
                <section id="waiver-anatomy" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Anatomy of a Bank Debt Settlement Waiver: What Charges Can Be Legally Waived?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    When unsecured consumer credit, personal loans, or commercial credit facilities enter prolonged default, lending institutions do not merely track the original principal sum. Instead, banking software algorithms automatically compound compounding interest, penal interest, default fees, cheque bounce penalties, and arbitrary legal processing expenses. Within months of missed installments, these automated ledger additions can dramatically inflate the total balance claimed by the lender.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Understanding what constitutes a genuine debt balance versus an artificial, usurious surcharge is the foundation of negotiating the best debt settlement waiver. A comprehensive compromise settlement addresses four distinct components of a delinquent loan ledger:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">1.</span> 100% Penal Interest &amp; Surcharge Waiver
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Reserve Bank of India guidelines on Fair Lending Practices, penal charges cannot be capitalized or added to the principal to compute further compounding interest. In an advocate-negotiated compromise, banking advocates routinely enforce complete excision of all penal charges and overdue interest markups.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">2.</span> Complete Administrative &amp; Bounce Fee Waiver
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Banks routinely load delinquent ledgers with repeated NACH mandate bounce charges, electronic clearing rejection fees, and external collection agency overheads. These auxiliary charges lack contractual consideration and are completely struck down during formal Stressed Asset Management negotiations.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">3.</span> Substantial Unapplied Interest Concessions
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Once an account is classified as a Non-Performing Asset (NPA) under Section 35A of the Banking Regulation Act, 1949, lenders cease recognizing accrued interest in their profit and loss statements. Advocates leverage this statutory accounting rule to waive all unapplied interest accrued since the date of default.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">4.</span> Negotiated Principal Concession (OTS Write-Off)
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        For honest borrowers who have suffered catastrophic commercial disruption, severe medical illness, or permanent income reduction, central banking compromise directions empower bank credit committees to grant a formal technical write-off on a portion of the original principal balance.
                      </p>
                    </div>
                  </div>

                  <blockquote className="p-4 border-l-4 border-[#D2A02A] bg-gray-50 italic text-gray-700 my-4 rounded-r-xl">
                    &ldquo;Under Reserve Bank of India directives, penal charges are intended solely to instill credit discipline and cannot be levied as a commercial revenue stream. A legally structured settlement strips away all usurious penalty accruals before negotiating the genuine core liability.&rdquo;
                  </blockquote>
                </section>

                {/* ── SECTION 2: STATUTORY & RBI REGULATORY FRAMEWORK ── */}
                <section id="statutory-framework" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory &amp; RBI Regulatory Framework for Debt Settlement Waivers
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    A legitimate debt settlement waiver does not occur as an informal private arrangement with collection agents. It is an institutional legal process anchored in statutory acts and binding central bank regulations:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] space-y-2">
                      <h3 className="font-bold text-gray-900 text-base">
                        RBI Master Directions on Compromise Settlements &amp; Technical Write-offs
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Issued by the Reserve Bank of India, these binding regulations mandate that all Scheduled Commercial Banks, Cooperative Banks, and NBFCs institute board-approved policies for compromise settlements. The framework establishes objective metrics for assessing borrower hardship, delegating compromise sanctioning authority to senior management committees, and authorizing formal waivers for non-willful defaulters.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#5A4C33] space-y-2">
                      <h3 className="font-bold text-gray-900 text-base">
                        Section 62, Indian Contract Act, 1872: Doctrine of Novation
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        A compromise settlement constitutes a statutory novation of contract. When the lender executes a formal settlement sanction letter agreeing to accept a reduced compromise sum in full satisfaction, the original credit contract is extinguished. Once the agreed amount is paid, the lender is legally barred from reviving the waived debt or initiating collection efforts.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] space-y-2">
                      <h3 className="font-bold text-gray-900 text-base">
                        Section 126, Indian Evidence Act, 1872: Attorney-Client Privilege
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Engaging enrolled advocates ensures complete confidentiality for all financial disclosures, asset declarations, and negotiation strategies. Unregulated debt relief agencies or online portal aggregators possess zero legal privilege, exposing sensitive borrower information to creditor subpoena or third-party leakage.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#5A4C33] space-y-2">
                      <h3 className="font-bold text-gray-900 text-base">
                        Section 21, Legal Services Authorities Act, 1987: Lok Adalat Consent Decrees
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        When banking advocates formalize compromise settlements before National Lok Adalats organized by the National Legal Services Authority (NALSA), the settlement award attains the finality of a civil court decree. It is binding on both creditor and debtor, requires zero judicial stamp duty, and permanently forecloses any future judicial appeal or execution proceeding.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: COMMERCIAL COMPARISON TABLE ── */}
                <section id="commercial-comparison" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Evaluation: DIY Online Templates vs. General Corporate Law Firms vs. AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Addressing commercial search intent requires an objective analysis of how distressed borrowers pursue settlement waivers. Inexperienced debtors frequently fall into the trap of downloading automated DIY online letter templates or hiring general corporate law firms whose billing structures are incompatible with financial hardship. The following comparative matrix evaluates legal enforceability, negotiation leverage, and cost accessibility:
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
                            Courtroom &amp; Judicial Representation
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            None (Zero legal standing)
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
                            Forensic Statement Ledger Audit
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            Not included (Unchecked bank penalties)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Often billed separately at commercial rates
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Comprehensive Forensic Usurious Audit
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Halting Collection Harassment
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            Ineffective (Ignored by collection agencies)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Slow corporate protocols
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Statutory Cease-and-Desist Notice
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Advisory Billing Structure
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-600">
                            Free, but results in severe financial liability
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
                            Waiver Maximization Leverage
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            Minimal (Deals with aggressive call centers)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Moderate (Treats debt as standard civil matter)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Maximum (Interfaces directly with Bank SAMG)
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Authentication of Bank NDC
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            High risk of fake settlement receipts
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Standard corporate follow-up
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Enforced Bank Sanction &amp; NDC Guarantee
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Automated DIY online legal drafts fail because institutional bank credit committees operate under strict risk-management and auditing standards. A boilerplate letter downloaded from the internet does not invoke statutory accountability, nor does it conduct forensic calculations proving unlawful compounding. On the other hand, general corporate law firms charge prohibitive hourly rates and open-ended retainers that exacerbate the borrower&apos;s insolvency. AMA Legal Solutions bridges this gap by delivering specialized, advocate-led courtroom defense and high-tier banking negotiations within an accessible, transparent fixed legal advisory model.
                  </p>
                </section>

                {/* ── SECTION 4: STRATEGIC ADVOCACY TO MAXIMIZE WAIVERS ── */}
                <section id="maximizing-waiver" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Strategic Advocacy: How Borrowers Maximize Lawful Settlement Waivers
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Securing the best debt settlement waiver is not a matter of pleading for institutional sympathy; it is an exercise in commercial negotiation backed by statutory pressure points. Commercial banks and non-banking financial companies evaluate stressed asset accounts through risk-weighted recovery algorithms. When an advocate intervenes, the bank&apos;s recovery calculus shifts fundamentally:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-[#1a202c] text-base mb-1 flex items-center gap-2">
                        <span className="text-[#D2A02A]">✓</span> Establishing Irrevocable Commercial Hardship
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under RBI compromise frameworks, credit committees are authorized to sanction higher waiver concessions only when the borrower demonstrates genuine, involuntary distress. Senior advocates assemble concrete documentary substantiation—such as corporate dissolution records, GST return declines, income termination orders, or catastrophic medical expenditure receipts—satisfying the bank&apos;s internal audit inspection.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-[#1a202c] text-base mb-1 flex items-center gap-2">
                        <span className="text-[#D2A02A]">✓</span> Bypassing Commission-Driven Recovery Agents
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Third-party recovery agencies work on collection commissions and lack the corporate delegation of authority to grant meaningful debt waivers. They routinely make misleading verbal promises of discounts to induce partial token payments. Advocates serve statutory notices directing all communications exclusively to the bank&apos;s centralized Stressed Asset Management vertical, eliminating intermediate commission leakages.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-[#1a202c] text-base mb-1 flex items-center gap-2">
                        <span className="text-[#D2A02A]">✓</span> Exposing Regulatory &amp; Computational Non-Compliance
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        By conducting a line-by-line forensic analysis of the loan statement, banking advocates identify regulatory infractions—such as penal interest compounding, failure to issue mandatory default notices, or unauthorized insurance deductions. When confronted with evidence of non-compliance, bank legal departments prefer a favorable compromise settlement over public scrutiny before the RBI Ombudsman or judicial tribunals.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: FAKE WAIVER LETTERS VS AUTHENTIC SANCTIONS ── */}
                <section id="waiver-scams-vs-authentic" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Red Flags &amp; Due Diligence: Fake Waiver Letters vs. Authentic Bank Sanctions
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    The unsecured debt recovery ecosystem is rife with predatory scams, forged settlement receipts, and fraudulent compromise letters generated by unauthorized third-party agencies. Thousands of borrowers in India remit hard-earned settlement funds only to discover months later that the lending bank treats the payment as a routine part-payment, with full balance recovery continuing unabated.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Protecting yourself against fraudulent settlement documents requires rigorous legal verification against statutory parameters:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-red-50 rounded-xl border border-red-200">
                      <h3 className="font-bold text-red-900 text-base mb-2 flex items-center gap-2">
                        <span>⚠️</span> Warning Signs of Fake Waiver Letters
                      </h3>
                      <ul className="text-xs sm:text-sm text-red-800 space-y-2 leading-relaxed">
                        <li>&bull; Issued on unverified agency letterhead rather than official bank stationery.</li>
                        <li>&bull; Lacks a verifiable institutional dispatch or reference number.</li>
                        <li>&bull; Requests payment into a personal bank account, third-party firm, or UPI address.</li>
                        <li>&bull; Received via personal WhatsApp message without an official corporate email trail.</li>
                        <li>&bull; Fails to state that remaining balances are permanently waived and discharged.</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <h3 className="font-bold text-emerald-900 text-base mb-2 flex items-center gap-2">
                        <span>🛡️</span> Hallmarks of Authentic Bank Sanctions
                      </h3>
                      <ul className="text-xs sm:text-sm text-emerald-800 space-y-2 leading-relaxed">
                        <li>&bull; Printed on official bank letterhead bearing the institutional seal and logo.</li>
                        <li>&bull; Signed by an authorized officer (Chief Manager/Zonal Head, SAMG).</li>
                        <li>&bull; Mandates payment directly into the borrower&apos;s designated loan account number.</li>
                        <li>&bull; Explicitly states that upon payment, an unconditional No Dues Certificate will be issued.</li>
                        <li>&bull; Formally binds the bank to update credit rating agencies under CICRA 2005.</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    At AMA Legal Solutions, our banking advocates conduct exhaustive verification of every settlement sanction letter directly with the bank&apos;s legal and credit administration departments before advising clients to disburse settlement funds.
                  </p>
                </section>

                {/* ── SECTION 6: 5-STEP LEGAL PROTOCOL ── */}
                <section id="settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Legal Protocol for Securing Maximum Debt Waivers
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    To ensure full contractual immunity, maximum legitimate waiver concessions, and unconditional credit rehabilitation, our legal practice follows a disciplined 5-step operational protocol:
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

                {/* ── SECTION 7: SIGNATURE INFOGRAPHIC CARD ── */}
                <section
                  id="infographic-blueprint"
                  className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm"
                >
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 bg-[#D2A02A]/20 text-[#5A4C33] text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                      Visual Legal Blueprint
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a202c]">
                      Strategic Debt Settlement Waiver Architecture
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mt-1">
                      Visualizing the advocate-led pathway from forensic ledger decoupling and anti-harassment protection to board-level waiver negotiation and authenticated bank No Dues Certification.
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                    <img
                      src="/images/og/debt-settlement-best-waiver.png"
                      alt="Best Debt Settlement Waiver Legal Workflow Infographic"
                      className="w-full h-auto object-contain block"
                    />
                  </div>

                  <div className="mt-4 text-center text-xs text-gray-500 italic">
                    Figure 1.0: End-to-end statutory compromise settlement architecture overseen by banking litigation advocates under Reserve Bank of India regulatory directives.
                  </div>
                </section>

                {/* ── SECTION 8: JUDICIAL DEFENSE ── */}
                <section id="judicial-defense" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Judicial Defense: Section 138 NI Act &amp; Section 25 PSS Act Proceedings
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    When unsecured loan default persists without formal legal intervention, institutional creditors routinely invoke quasi-criminal provisions to compel immediate repayment. In India, the primary statutory levers employed by banks include:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                    <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] space-y-2">
                      <h3 className="font-bold text-gray-900 text-base">
                        Section 138, Negotiable Instruments Act, 1881
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Triggered when security or repayment cheques bounce due to insufficient funds. Our advocates represent borrowers before Judicial Magistrates, challenging statutory notice validity, establishing that undated security cheques cannot automatically attract criminal liability, and converting the dispute into an amicable compromise settlement.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#5A4C33] space-y-2">
                      <h3 className="font-bold text-gray-900 text-base">
                        Section 25, Payment and Settlement Systems Act, 2007
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Triggered when electronic National Automated Clearing House (NACH) mandates or e-mandates fail. We submit formal legal replies demonstrating lack of willful evasion, defend borrowers against bailable warrants, and guide the proceedings toward complete closure via National Lok Adalat conciliation benches.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Crucially, executing an advocate-led debt settlement waiver resolves the underlying liability. Under Section 147 of the Negotiable Instruments Act, 1881, offenses under Section 138 are compoundable. Presenting the bank&apos;s settlement sanction letter and No Dues Certificate before the trial magistrate mandates immediate quashing or withdrawal of criminal complaints.
                  </p>
                </section>

                {/* ── SECTION 9: CREDIT IMPACT & CIBIL REHABILITATION ── */}
                <section id="credit-rehabilitation" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Credit Impact &amp; Post-Waiver CIBIL Restoration Protocol
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    A key commercial consideration for borrowers seeking the best debt settlement waiver is its impact on credit scores. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), lending institutions are legally required to report the closure status of settled loans to authorized credit bureaus (TransUnion CIBIL, Experian, Equifax, and CRIF High Mark).
                  </p>

                  <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4 my-4">
                    <h3 className="font-bold text-[#1a202c] text-base">
                      Understanding &ldquo;Settled&rdquo; Status vs. Perpetual Default
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      While a &ldquo;Settled&rdquo; remark indicates that the loan was closed with concessions, it immediately halts active monthly default reporting (Days Past Due - DPD) and eliminates the catastrophic risk of pending civil or criminal litigation. Remaining in perpetual default, by contrast, destroys credit profiles indefinitely and exposes personal assets to legal attachment.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <span className="block text-base font-bold text-gray-900">Step 1</span>
                        <span className="text-xs text-gray-600">Obtain verified bank No Dues Certificate</span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <span className="block text-base font-bold text-gray-900">Step 2</span>
                        <span className="text-xs text-gray-600">Rectify CICRA bureau reporting discrepancies</span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg text-center">
                        <span className="block text-base font-bold text-gray-900">Step 3</span>
                        <span className="text-xs text-gray-600">Rebuild 750+ CIBIL score via secured credit</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Following settlement, borrowers can systematically rehabilitate their credit score by servicing a secured credit card backed by a modest fixed deposit, maintaining zero late payments, and keeping credit utilization below thirty percent. Over twelve to twenty-four months, credit bureaus recognize the restored repayment discipline, opening pathways to fresh institutional credit.
                  </p>
                </section>

                {/* ── SECTION 10: 8-QUESTION ACCORDION FAQ ── */}
                <section id="frequently-asked-questions" className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                      Authoritative Guidance
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                      Frequently Asked Questions: Best Debt Settlement Waiver
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

                {/* ── SECTION 11: MORE LEGAL GUIDES ── */}
                <section id="more-legal-guides" className="space-y-4 pt-6 border-t border-gray-200">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    More Legal Debt Relief Guides
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Explore our comprehensive repository of advocate-authored legal guides regarding Indian banking regulations, recovery defenses, and settlement waiver strategies:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                    {[
                      {
                        title: "Debt Settlement Services India",
                        href: "/debt-settlement-services",
                        desc: "Advocate-led commercial debt settlement and banking negotiation services.",
                      },
                      {
                        title: "Debt Settlement India Guide",
                        href: "/debt-settlement-india",
                        desc: "Comprehensive legal guide to RBI compromise resolutions and court defense.",
                      },
                      {
                        title: "One-Time Settlement Assistance",
                        href: "/one-time-settlement-ots-legal-assistance",
                        desc: "Senior banking advocate assistance for institutional OTS compromise frameworks.",
                      },
                      {
                        title: "SBI Bank Loan Settlement Waiver",
                        href: "/settlement-waiver-percentage-of-sbi-bank-loans",
                        desc: "Understanding compromise waiver benchmarks and OTS guidelines for SBI loans.",
                      },
                      {
                        title: "HDFC Bank Loan Settlement Waiver",
                        href: "/settlement-waiver-percentage-of-hdfc-bank",
                        desc: "Navigating private bank credit committees and securing optimal waivers.",
                      },
                      {
                        title: "ICICI Bank Loan Settlement Waiver",
                        href: "/settlement-waiver-percentage-of-icici-bank",
                        desc: "Commercial settlement protocols and waiver guidelines for ICICI Bank accounts.",
                      },
                      {
                        title: "Axis Bank Loan Settlement Waiver",
                        href: "/settlement-waiver-percentage-of-axis-bank",
                        desc: "Legal settlement processes and compromise waiver policies for Axis Bank.",
                      },
                      {
                        title: "What is a Full & Final Settlement?",
                        href: "/what-is-a-full-and-final-loan-settlement",
                        desc: "Understanding contractual discharge, novation, and authentic bank sanction terms.",
                      },
                      {
                        title: "Reasonable Settlement Offer Guide",
                        href: "/what-is-a-reasonable-settlement-offer",
                        desc: "Calculating viable compromise offers based on forensic ledger audits.",
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

                {/* ── SECTION 12: REFERENCES & STATUTORY CITATIONS ── */}
                <section id="statutory-references" className="space-y-4 pt-6 border-t border-gray-200">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    References &amp; Regulatory Authorities
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Verify statutory acts, central bank circulars, and judicial portals governing debt resolution and compromise waivers in India:
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
                    Headquartered in Sector 57, Gurugram, AMA Legal Solutions represents individuals, business owners, and corporate enterprises across India. Founded by Advocate Anuj Anand Malik, our specialized banking litigation vertical combines unyielding courtroom defense with seasoned credit committee negotiations, ensuring our clients achieve genuine, authenticated financial liberation under Reserve Bank of India compromise frameworks.
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
                  Seeking Maximum Settlement Waiver?
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
                    href="/debt-settlement-services"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement Services India
                  </Link>
                  <Link
                    href="/debt-settlement-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement India Legal Guide
                  </Link>
                  <Link
                    href="/one-time-settlement-ots-legal-assistance"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; One-Time Settlement Legal Aid
                  </Link>
                  <Link
                    href="/loan-settlement-plans-for-maximum-savings"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement Plans for Maximum Savings
                  </Link>
                  <Link
                    href="/settlement-waiver-percentage-of-sbi-bank-loans"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; SBI Loan Settlement Waiver Rates
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Stop Recovery Harassment Legally
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
                      Strategic Waiver Evaluation
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

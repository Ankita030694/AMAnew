"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ──────────────────────── CONSTANTS & CONFIG ───────────────────── */
const PAGE_SLUG = "/debt-settlement-services";
const PAGE_URL = "https://www.amalegalsolutions.com/debt-settlement-services";
const SITE = "https://www.amalegalsolutions.com";
const OG_IMAGE_URL = "https://www.amalegalsolutions.com/images/og/debt-settlement-services.png";
const LOGO_URL = "https://www.amalegalsolutions.com/ama3.svg";

/* ──────────────────────── TOC SECTIONS ─────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Debt Settlement Services" },
  { id: "commercial-intent-gap", title: "Commercial Debt Crisis & Legal Resolution" },
  { id: "statutory-framework", title: "Statutory & RBI Regulatory Framework" },
  { id: "commercial-model-comparison", title: "Commercial Model Comparison: DIY vs Corporate vs AMA" },
  { id: "borrower-rights", title: "Borrower Rights & Statutory Anti-Harassment Law" },
  { id: "settlement-protocol", title: "5-Step Strategic Debt Settlement Protocol" },
  { id: "infographic-blueprint", title: "Strategic Settlement Services Infographic" },
  { id: "judicial-defense", title: "Judicial Shield: S. 138 NI Act, S. 25 PSS & Lok Adalat" },
  { id: "cibil-credit-rehabilitation", title: "Credit Score Rehabilitation & CIBIL Bureau Updates" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions (8 Accordions)" },
  { id: "more-legal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Judicial Authority Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── FAQ DATA (8 Accordions) ──────────────── */
const faqs = [
  {
    question: "What are debt settlement services and how do they operate under Indian law?",
    answer:
      "Debt settlement services are professional legal advisory mechanisms governed by Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Directions and the RBI Master Directions on Compromise Settlements. Licensed advocates negotiate technical write-downs and one-time compromise terms with commercial banks and NBFCs for borrowers facing verifiable financial insolvency, extinguishing unsecured liabilities under Section 62 of the Indian Contract Act, 1872 upon payment of the agreed settlement sum.",
  },
  {
    question: "Why should borrowers retain an advocate-led debt settlement service instead of digital fintech apps?",
    answer:
      "Advocate-led debt settlement services operate under the statutory purview of the Advocates Act, 1961, providing constitutional standing to issue legal notices, file Vakalatnamas, and represent borrowers directly before judicial magistrates and Lok Adalats. Unregulated digital fintech apps and loan consolidation agencies lack statutory legal standing, cannot defend against Section 138 Negotiable Instruments Act or Section 25 Payment and Settlement Systems Act actions, and expose personal borrower records without attorney-client privilege under Section 126 of the Indian Evidence Act, 1872.",
  },
  {
    question: "Can commercial banks refuse a debt settlement service proposal submitted by a borrower?",
    answer:
      "Commercial banks and non-banking financial companies retain institutional discretion to evaluate compromise settlement proposals based on board-approved recovery policies mandated by the Reserve Bank of India. When an advocate-led service establishes bona fide commercial hardship through verified documentary evidence such as job loss certifications, medical discharge summaries, or audited business deficit statements, lending institutions routinely approve One-Time Settlements (OTS) to avoid prolonged recovery litigation and asset provisioning costs.",
  },
  {
    question: "How do debt settlement services stop unlawful recovery agent harassment?",
    answer:
      "Professional legal debt settlement services issue formal statutory representation notices and Cease-and-Desist directives to lenders and recovery agencies under the RBI Fair Practices Code. These statutory directives legally bar recovery agents from visiting borrower residences, contacting third-party references, or making telephone calls outside mandated operating hours between 8:00 AM and 7:00 PM. Continued non-compliance exposes financial institutions to direct regulatory penalties before the RBI Integrated Ombudsman and territorial police complaints.",
  },
  {
    question: "What is the commercial advisory structure for debt settlement services at AMA Legal Solutions?",
    answer:
      "AMA Legal Solutions operates on a transparent fixed legal advisory structure designed to provide comprehensive advocate representation without hourly markups, hidden retainers, or percentage-based processing escalations. This model democratizes access to senior banking advocates who conduct forensic ledger reconciliations, issue statutory anti-harassment notices, and defend courtroom matters, eliminating the prohibitive retainers customary among large corporate law firms while surpassing the enforceability of free DIY templates.",
  },
  {
    question: "Why do free or cheap automated online DIY settlement templates fail in court?",
    answer:
      "Free automated DIY templates lack case-specific statutory defenses, omit necessary ledger audits that detect unlawful interest compounding, and possess zero legal standing before judicial magistrate courts or Debt Recovery Tribunals. Institutional banking legal verticals dismiss automated digital letters as informal correspondence, whereas advocate-certified legal notices invoke binding statutory provisions, establish admissible paper trails, and enforce compliance under threat of formal legal action.",
  },
  {
    question: "What official documentation confirms that debt settlement services have successfully concluded a case?",
    answer:
      "A successfully concluded debt settlement yields two crucial legal instruments: an official Bank Settlement Sanction Letter issued on bank letterhead defining the compromise terms, followed by an unconditional No Dues Certificate (NDC) issued pursuant to Section 62 of the Indian Contract Act, 1872. These legal documents certify that all contractual obligations are permanently extinguished and compel the lender to update credit records with CIBIL, Equifax, Experian, and CRIF High Mark.",
  },
  {
    question: "How do debt settlement services handle negative reporting on CIBIL and credit bureau files?",
    answer:
      "Following a negotiated compromise, the lender reports the credit facility as 'Settled' to all four authorized credit bureaus pursuant to the Credit Information Companies (Regulation) Act, 2005. While this entry reflects an agreed compromise, it permanently terminates recurring 90-day overdue default increments and legal recovery marks. Debt settlement advocates ensure prompt bureau reconciliation through authenticated No Dues Certificates, enabling borrowers to rebuild their credit scores systematically over subsequent quarters using secured credit instruments.",
  },
];

/* ──────────────────────── STEP PROTOCOL DATA ───────────────────── */
const stepListItems = [
  {
    title: "Forensic Ledger Reconciliation & Unlawful Surcharge Isolation",
    desc: "Our banking litigation advocates dissect your historical loan account statements, dissecting principal disbursements from unlawful penal interest, compounding levies, and unjustified administrative charges in strict alignment with RBI guidelines on fair lending.",
  },
  {
    title: "Formal Advocate Representation & Cease-and-Desist Injunctions",
    desc: "We serve formal Vakalatnamas and statutory notices under the Advocates Act, 1961 and the RBI Fair Practices Code, mandating all lenders and third-party recovery vendors to immediately halt unauthorized contact, unannounced visits, and workplace intrusions.",
  },
  {
    title: "Compiling the Evidence-Based Hardship & Compromise Dossier",
    desc: "We compile an authoritative One-Time Settlement (OTS) dossier grounded in documented commercial distress, salary reductions, business revenue disruption, or acute medical liabilities, establishing legitimate statutory grounds for substantial technical write-offs.",
  },
  {
    title: "High-Tier Negotiations with Institutional Stressed Asset Committees",
    desc: "Our senior advocates interface directly with bank zonal managers, internal credit committees, and collection heads, neutralizing inflated claims and negotiating optimal compromise settlement figures approved at the board level.",
  },
  {
    title: "Bank Sanction Letter Verification, Remittance & NDC Enforcement",
    desc: "Before any funds are released, we verify the authenticity of the lender's formal settlement sanction letter, supervise payment directly to the loan account, and enforce the mandatory issuance of an unconditional No Dues Certificate along with bureau updates.",
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
export default function DebtSettlementServicesClient() {
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
    const textMsg = `Hello AMA Legal Solutions, I require professional advocate-led Debt Settlement Services.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Debt Facility: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory under the RBI compromise settlement framework."}`;
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
      "Debt Settlement Services India: Advocate-Led Legal Resolution & RBI Compromise Advisory by AMA Legal Solutions";
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
    { label: "Debt Settlement Services", href: PAGE_SLUG },
  ];

  /* ──────────────────────── JSON-LD SCHEMA GRAPH ────────────────── */
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "Debt Settlement Services India: Advocate-Led Legal Resolution, Commercial Advisory & RBI Compliance",
        description:
          "Authoritative guide to debt settlement services in India. Learn how advocate representation halts recovery harassment, audits inflated bank ledgers, and negotiates binding RBI One-Time Settlements with authentic No Dues Certificates.",
        image: [OG_IMAGE_URL],
        datePublished: "2026-02-10T09:00:00+05:30",
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
        name: "Debt Settlement Services India | Legal Resolution & RBI Compromise Advisory",
        description:
          "Professional advocate-led debt settlement services in India. Halt unlawful collection harassment, challenge inflated penal charges, and negotiate board-approved bank settlements.",
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
        name: "Advocate-Led Debt Settlement Services India",
        image: OG_IMAGE_URL,
        description:
          "Professional advocate representation for unsecured debt settlement services in India. Forensic statement audits, statutory anti-harassment injunctions, Lok Adalat conciliation, and RBI OTS negotiations.",
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
            name: "Debt Settlement Services",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#process`,
        name: "5-Step Strategic Debt Settlement Protocol",
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
        id="debt-settlement-services-schema"
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
                Professional <span className="text-[#D2A02A]">Debt Settlement Services</span>: Advocate-Led Resolution &amp; RBI Compliance
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-normal">
                Confronting mounting unsecured liabilities, relentless recovery agent intimidation, or impending courtroom notices? Professional advocate-led debt settlement services deliver constitutionally anchored representation to audit contested loan ledgers, invoke Reserve Bank of India (RBI) compromise resolution frameworks, and secure authentic bank No Dues Certificates with permanent contractual discharge.
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
                    <span>⏱️</span> 17 Min Read
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
                  src="/images/og/debt-settlement-services.png"
                  alt="Debt Settlement Services - Legal Advisory by AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Debt Settlement Blueprint
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
                  Advocates Act, 1961 Courtroom Powers
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
                  Over 25,000 Distressed Borrowers Defended
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
                    <span className="text-xl">⚡</span> Quick Answer: Debt Settlement Services
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-900 font-medium">
                    Debt settlement services are specialized legal and commercial advisory mechanisms governed by Reserve Bank of India (RBI) compromise settlement frameworks, wherein enrolled banking advocates represent financially distressed borrowers to negotiate formal write-downs and one-time compromise discharges for unsecured loans and credit card debts. Enrolled advocates invoke statutory rights under the Advocates Act, 1961, halt recovery agent harassment through binding Cease-and-Desist directives, reconcile loan ledgers to remove unlawful penal charges, and secure board-approved bank settlement sanction letters followed by official No Dues Certificates.
                  </p>
                </div>

                {/* ── SECTION 1: COMMERCIAL INTENT & DEBT CRISIS ── */}
                <section id="commercial-intent-gap" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The Commercial Search Intent: Navigating Severe Liquidity Strain in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Borrowers searching for commercial debt settlement services in India are seldom looking for abstract theoretical summaries; they are confronting an active financial, commercial, and psychological crisis. Over the past several years, the rapid growth of retail credit—including unsecured personal credit lines, digital peer-to-peer apps, business overdrafts, and revolving credit card facilities—has trapped thousands of salaried professionals and business proprietors in compounding debt cycles.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When an unforeseen liquidity shock occurs—such as corporate downsizing, unexpected medical hospitalizations, supply chain disruptions, or commercial contract defaults—borrowers quickly find that minimum repayments only service compounding interest without touching the principal. Within ninety days of non-payment, credit facilities slip into Non-Performing Asset (NPA) classifications, triggering aggressive collection pipelines, automated penalty multipliers, and intimidating third-party collection agency calls.
                  </p>
                  <blockquote className="p-4 border-l-4 border-[#D2A02A] bg-gray-50 italic text-gray-700 my-4 rounded-r-xl">
                    &ldquo;Under Indian civil jurisprudence, commercial default arising out of bona fide economic insolvency is strictly an actionable civil dispute under the Indian Contract Act, 1872. It cannot be converted into criminal extortion through extra-judicial recovery agent intimidation.&rdquo;
                  </blockquote>
                  <p className="text-gray-700 leading-relaxed">
                    To resolve this crisis, borrowers need professional legal representation that addresses both the financial ledger and the statutory protections guaranteed under Indian law. Seeking professional debt settlement services bridges the asymmetric power dynamic between institutional lenders and individual debtors, establishing a legally protected forum where genuine financial rehabilitation can take place.
                  </p>
                </section>

                {/* ── SECTION 2: STATUTORY & RBI FRAMEWORK ── */}
                <section id="statutory-framework" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory &amp; RBI Regulatory Framework Governing Debt Settlement
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Legitimate debt settlement services operate within a rigorous statutory and central banking architecture. Unlike unregulated recovery agencies or informal credit counselors, advocate-led resolution is governed by established statutes and explicit central banking circulars designed to maintain institutional balance sheet integrity while offering non-willful defaulters an orderly exit:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">📜</span> RBI Master Directions on Compromise
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        The Reserve Bank of India mandates that all scheduled commercial banks, cooperative banks, and systemically important NBFCs institute board-approved compromise settlement policies. These guidelines empower internal stressed-asset committees to execute negotiated principal haircuts and technical write-offs for accounts experiencing documented financial insolvency.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">🏛️</span> Section 62, Indian Contract Act, 1872
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under the doctrine of contract novation, when contracting parties agree to substitute or alter an existing loan agreement through a One-Time Settlement compromise, the original promissory obligations and default liabilities are permanently extinguished upon remittance of the agreed settlement sum.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">⚖️</span> Section 126, Indian Evidence Act, 1872
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Statutory attorney-client privilege protects all confidential financial disclosures, bank statements, and correspondence shared with an enrolled advocate. Unregulated debt consolidation apps and commercial agencies enjoy zero legal privilege and frequently monetize private borrower data.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">🛡️</span> Legal Services Authorities Act, 1987
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Provides statutory authority to National and State Lok Adalats to conduct judicial conciliation. Compromise awards executed before a Lok Adalat bench possess the binding legal finality of a civil court decree with zero appealability, permanently barring subsequent litigation.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    By rooting negotiations in these legislative acts and Reserve Bank circulars, advocate-led debt settlement services transform what is typically an antagonistic collection ordeal into an orderly, legally enforceable commercial workout.
                  </p>
                </section>

                {/* ── SECTION 3: COMMERCIAL MODEL COMPARISON TABLE ── */}
                <section id="commercial-model-comparison" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Model Comparison: Free DIY Templates vs. Corporate Law Firms vs. AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    When evaluating commercial debt settlement options, borrowers encounter three distinct pathways: free or low-cost automated DIY online templates, traditional corporate law firms, and specialized advocate-led firms like AMA Legal Solutions. Understanding the legal enforceability, operational scope, and advisory models of each option is vital for making an informed commercial decision.
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-[#1a202c] text-white">
                          <th className="p-3.5 border border-gray-700 font-bold">Key Evaluation Dimension</th>
                          <th className="p-3.5 border border-gray-700 font-semibold">Free DIY Online Templates</th>
                          <th className="p-3.5 border border-gray-700 font-semibold">Traditional Corporate Law Firms</th>
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
                            None (Cannot appear before magistrates)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Available, but charged via extensive litigation billings
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
                            Zero (Data processed on public cloud tools)
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Fully protected under Section 126 Evidence Act
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            100% Privileged &amp; Confidential Advocate Counsel
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
                            Slow corporate protocol with prolonged escalations
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
                            Frequently outsourced at supplementary billing
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
                            Free, but results in severe litigation exposure
                          </td>
                          <td className="p-3.5 border border-gray-200 text-amber-700 font-medium">
                            Cost-prohibitive hourly billing &amp; recurring retainers
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Transparent Fixed Legal Advisory Without Hourly Markups
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 border border-gray-200 font-bold text-gray-900">
                            Bank Sanction Letter &amp; NDC Verification
                          </td>
                          <td className="p-3.5 border border-gray-200 text-red-600 font-medium">
                            High risk of accepting fraudulent informal letters
                          </td>
                          <td className="p-3.5 border border-gray-200 text-gray-700">
                            Formal corporate verification protocol
                          </td>
                          <td className="p-3.5 border border-gray-200 text-emerald-700 font-bold">
                            Guaranteed Official Bank Verification &amp; Bureau Rectification
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    While automated online templates appear attractive on the surface, they consistently fail when institutional bank legal departments scrutinize them. A boilerplate template downloaded from the internet cannot cross-examine bank ledger inaccuracies, cannot respond to Section 138 statutory notices, and cannot represent a borrower before a judicial magistrate. On the other end of the spectrum, corporate law firms bill by the hour, creating cost barriers that distressed borrowers cannot afford. AMA Legal Solutions bridges this divide with a transparent fixed legal advisory model that guarantees senior advocate courtroom defense without unexpected retainers.
                  </p>
                </section>

                {/* ── SECTION 4: BORROWER RIGHTS & ANTI-HARASSMENT ── */}
                <section id="borrower-rights" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Borrower Rights Under RBI Guidelines &amp; Anti-Harassment Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    One of the most immediate benefits of retaining professional debt settlement services is the complete statutory cessation of collection agent harassment. The Reserve Bank of India, through its Master Circular on Fair Practices Code and operational directives to regulated entities, has established clear boundaries that collection agencies frequently breach:
                  </p>

                  <ul className="space-y-3 my-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Mandated Calling Window:</strong> Recovery personnel are legally prohibited from telephoning borrowers before 8:00 AM or after 7:00 PM. Calls initiated outside these statutory hours constitute an actionable regulatory offense.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Prohibition of Third-Party Disclosures:</strong> Lenders and recovery agents are strictly barred from contacting relatives, employers, coworkers, or neighbors regarding outstanding personal dues. Such disclosures violate the borrower&apos;s fundamental right to privacy affirmed by the Supreme Court of India in <em>K.S. Puttaswamy v. Union of India</em>.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Absolute Ban on Intimidation &amp; Threats:</strong> The Supreme Court in <em>ICICI Bank Ltd. v. Prakash Kaur</em> ruled that banks cannot deploy musclemen or abusive recovery personnel to coerce repayment. Verbal abuse, physical intimidation, or threats of unlawful arrest constitute criminal intimidation under Section 351 of the Bharatiya Nyaya Sanhita (formerly Section 506 IPC).
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-lg font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">Right to Verification &amp; Identity Disclosure:</strong> Recovery agents visiting a borrower&apos;s premises must possess official bank authorization letters, identity cards, and a certified copy of the bank default notice. They cannot enter private premises without express consent.
                      </div>
                    </li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    Upon retaining AMA Legal Solutions, our advocates serve an official representation notice to the lending institution&apos;s compliance officer and nodal recovery director. This notice places the lender on formal legal record, mandating that all future communication occur exclusively through our legal counsel. Any subsequent agent breach is met with formal regulatory filings before the RBI Integrated Ombudsman and territorial police complaints.
                  </p>
                </section>

                {/* ── SECTION 5: 5-STEP STRATEGIC SETTLEMENT PROTOCOL ── */}
                <section id="settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Strategic Legal Debt Settlement Protocol
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Executing an authentic, legally binding compromise settlement requires a disciplined, multistage process. AMA Legal Solutions utilizes a standardized five-step legal protocol that systematically reduces debt exposure while protecting clients against procedural pitfalls:
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
                    By following this rigorous five-step framework, borrowers avoid the common disaster of remitting funds toward partial payments that merely service accumulated penalties without reducing principal obligations or securing valid legal closures.
                  </p>
                </section>

                {/* ── SECTION 6: SIGNATURE INFOGRAPHIC CARD ── */}
                <section id="infographic-blueprint">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">📊</span>
                      <h3 className="text-lg font-extrabold text-[#1a202c]">
                        Strategic Debt Settlement Services Architecture
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                      This infographic illustrates the advocate-led debt resolution pipeline: from forensic statement audit and statutory anti-harassment shield, through credit committee compromise negotiations, to official bank sanction verification and No Dues Certificate enforcement.
                    </p>
                    <div className="rounded-xl overflow-hidden border border-[#D2A02A]/30 shadow-md bg-white">
                      <img
                        src="/images/og/debt-settlement-services.png"
                        alt="Strategic Debt Settlement Services Architecture - AMA Legal Solutions"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="text-center text-[11px] text-gray-500 mt-3 font-medium">
                      Figure 1.0: End-to-End Advocate-Led Compromise Settlement Architecture under RBI Guidelines.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 7: JUDICIAL DEFENSE & LOK ADALAT ── */}
                <section id="judicial-defense" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Judicial Defense: Section 138 NI Act, Section 25 PSS &amp; Lok Adalat
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    When borrowers default on unsecured credit, financial institutions frequently initiate quasi-criminal proceedings to establish coercive pressure. The two primary statutory mechanisms utilized are Section 138 of the Negotiable Instruments Act, 1881 (cheque dishonor) and Section 25 of the Payment and Settlement Systems Act, 2007 (electronic NACH/e-mandate failure).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Navigating these courtroom summons requires enrolled advocate representation. Unregulated digital apps or non-legal consultants cannot represent you before a judicial magistrate. At AMA Legal Solutions, our senior banking litigators provide comprehensive courtroom defense:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2">
                        Section 138 NI Act Legal Defense
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        We challenge premature statutory demand notices, examine whether the cheque was presented within validity periods, establish that blank security cheques were impermissibly filled out without authorization, and negotiate compoundable settlements under Section 147 of the Negotiable Instruments Act.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2">
                        Section 25 PSS Act NACH Defense
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        We verify whether the electronic mandate was executed in conformity with NPCI guidelines, challenge repetitive auto-debit triggers that generate excessive dishonor charges, and transfer the dispute to conciliation forums for formal compromise.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Furthermore, our advocates regularly leverage National Lok Adalats organized by the National Legal Services Authority (NALSA). Under Section 21 of the Legal Services Authorities Act, 1987, a settlement award executed before a Lok Adalat bench possesses the full force of a civil court decree. It is final, binding on both parties, requires zero judicial stamp duty, and permanently bars the lender from initiating future litigation.
                  </p>
                </section>

                {/* ── SECTION 8: CREDIT RESTORATION & CIBIL PROTOCOL ── */}
                <section id="cibil-credit-rehabilitation" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Credit Score Rehabilitation &amp; CIBIL Bureau Reporting Dynamics
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    A major concern for individuals seeking debt settlement services is the effect of resolution on credit scores. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), lending institutions are legally required to report the accurate status of all credit accounts to the four registered credit bureaus: TransUnion CIBIL, Equifax, Experian, and CRIF High Mark.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When an account is resolved through a compromise settlement, the bureau status transitions from &lsquo;Default&rsquo; or &lsquo;Written-Off&rsquo; to &lsquo;Settled&rsquo;. While a &lsquo;Settled&rsquo; status indicates that the debt was satisfied for less than the total contractual balance, it produces three critical commercial advantages:
                  </p>

                  <div className="space-y-3 my-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">1. Termination of Compounding Default Reporting:</strong>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Active default accounts report worsening Days Past Due (DPD) metrics every 30 days (e.g., 90, 180, 360+ DPD), driving credit scores downward continuously. A settlement permanently halts monthly default reporting.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">2. Removal of Legal Action &amp; Wilful Defaulter Tags:</strong>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Compromise settlement ensures that &lsquo;Suit Filed&rsquo; or &lsquo;Wilful Defaulter&rsquo; classifications are removed from bureau files upon issuance of the bank No Dues Certificate.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <strong className="text-gray-900 block mb-1">3. Clear Foundation for Step-by-Step Credit Rebuilding:</strong>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Once all unsecured disputes are settled and authenticated with No Dues Certificates, borrowers can initiate credit score rehabilitation. By opening a secured credit card backed by a modest fixed deposit and servicing it with 100% on-time payments, borrowers routinely rebuild their CIBIL score back above 750 within twelve to twenty-four months.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 9: 8-QUESTION ACCORDION FAQ ── */}
                <section id="frequently-asked-questions" className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
                    <span className="text-2xl">❓</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions: Debt Settlement Services
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Straightforward, statutory answers to the most critical legal and commercial debt settlement queries.
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

                {/* ── SECTION 10: MORE LEGAL GUIDES ── */}
                <section id="more-legal-guides" className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a202c]">
                    More Legal Debt Relief &amp; Banking Dispute Guides
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Explore our comprehensive repository of advocate-authored legal guides covering loan settlement, recovery defense, and statutory banking rights:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
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
                      &bull; Loan Settlement vs. Debt Consolidation
                    </Link>
                    <Link
                      href="/best-debt-settlement-company"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Best Debt Settlement Company
                    </Link>
                    <Link
                      href="/personal-loan-debt-settlement"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Personal Loan Debt Settlement
                    </Link>
                    <Link
                      href="/credit-card-debt-settlement"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Credit Card Debt Settlement
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Stop Recovery Agent Harassment
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Section 138 Cheque Bounce Defense
                    </Link>
                    <Link
                      href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Settlement vs. Closure CIBIL Impact
                    </Link>
                    <Link
                      href="/documents-required-for-loan-settlement-through-law-firm"
                      className="p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D2A02A] font-medium text-gray-800 hover:text-[#D2A02A] transition block"
                    >
                      &bull; Documents Required for Bank OTS
                    </Link>
                  </div>
                </section>

                {/* ── SECTION 11: REFERENCES & STATUTORY AUTHORITY ── */}
                <section id="statutory-references" className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a202c]">
                    References &amp; Judicial Authority Portals
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Verify statutory acts, judicial precedent, and central banking directives through official government portals:
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

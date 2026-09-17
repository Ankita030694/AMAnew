"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/what-is-debt-settlement";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/what-is-debt-settlement.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-17";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What is debt settlement under Indian law?",
    answer:
      "Debt settlement is a legally binding compromise resolution governed under Section 63 of the Indian Contract Act, 1872 and the Reserve Bank of India (RBI) Prudential Framework for Resolution of Stressed Assets, wherein a lender formally agrees to accept a discounted lump-sum payment to extinguish a borrower's outstanding debt obligation. This bilateral contract legally releases the borrower from all ongoing financial liabilities, terminates active recovery litigation, and mandates the issuance of an unconditional bank No Dues Certificate (NDC). When negotiated through an enrolled advocate, the settlement process provides statutory immunity against recovery agent harassment and secures the formal compounding of any pending criminal complaints under Section 138 of the Negotiable Instruments Act, 1881.",
  },
  {
    id: "faq-2",
    question: "Is debt settlement legal and recognized by the Reserve Bank of India (RBI)?",
    answer:
      "Yes, debt settlement is fully legal and expressly recognized under the Reserve Bank of India Framework for Compromise Settlements and Technical Write-offs alongside the Master Direction on Fair Practices Code for Lenders. These regulatory directives mandate that commercial banks and non-banking financial companies (NBFCs) maintain board-approved compromise policies empowering sanctioning authorities to approve principal haircuts and waive penal interest for distressed borrowers facing genuine insolvency. Furthermore, settlements formalized before a National Lok Adalat bench established under the Legal Services Authorities Act, 1987 hold the statutory status of a non-appealable civil court decree.",
  },
  {
    id: "faq-3",
    question: "Why do free online DIY settlement templates fail in court and before bank committees?",
    answer:
      "Free automated DIY online templates and generic letter drafts fail because they lack legal standing under the Advocates Act, 1961 and do not comply with the strict evidentiary standards required by institutional bank compromise committees. In-house bank recovery legal cells routinely discard template letters because automated forms cannot establish a verified, documentary chain of bona fide financial hardship or formulate statutory counter-defenses. Furthermore, generic DIY templates cannot represent or defend a borrower before a Judicial Magistrate when formal criminal proceedings are instituted under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007.",
  },
  {
    id: "faq-4",
    question: "How does transparent fixed legal advisory benefit borrowers compared to corporate firm retainers?",
    answer:
      "Transparent fixed legal advisory eliminates the financial uncertainty of open-ended corporate law firm retainers and hourly billable fees, giving distressed borrowers complete cost predictability from initial forensic ledger audit to final account closure. Enrolling an advocate under a fixed legal engagement provides binding advocate-client privilege under Section 126 of the Indian Evidence Act, 1872, shielding confidential personal finances from public or creditor exposure. Unlike unregulated private debt settlement agencies that extract recurring monthly subscriptions without court standing, licensed advocates provide direct courtroom representation and institutional negotiation with zero surprise retainers.",
  },
  {
    id: "faq-5",
    question: "Can a bank initiate criminal cases under Section 138 or Section 25 during debt settlement?",
    answer:
      "While debt default is inherently a civil breach of contract under Indian jurisprudence, lenders frequently initiate quasi-criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881 for dishonoured cheques or Section 25 of the Payment and Settlement Systems Act, 2007 for failed NACH auto-debits to exert psychological pressure. Retaining an advocate ensures the immediate service of formal legal replies asserting bona fide financial incapacity and disproving fraudulent intention under Section 415 of the Indian Penal Code. Once a formal One-Time Settlement (OTS) is executed and paid, the lending institution is legally obligated to file an application for compounding of offenses and withdraw all magistrate court proceedings.",
  },
  {
    id: "faq-6",
    question: "How does legal representation halt recovery agent harassment under RBI directives?",
    answer:
      "Serving a formal Vakalatnama and statutory legal notice from an enrolled advocate immediately invokes the Reserve Bank of India Directives on Recovery Agents and Fair Practices Code, which legally forbid lenders from contacting borrowers outside statutory hours of 8:00 AM to 7:00 PM. Lenders and contracted recovery agencies are statutorily prohibited from making unannounced residential visits, intimidating family members, or breaching third-party privacy. Any subsequent non-compliance empowers the advocate to file formal complaints under the RBI Integrated Ombudsman Scheme, 2021 and initiate contempt or civil damages proceedings against the lender.",
  },
  {
    id: "faq-7",
    question: "What is the difference between a loan settlement and a loan write-off on a CIBIL report?",
    answer:
      "Under the Credit Information Companies (Regulation) Act, 2005, a loan settlement reflects on a credit report with the remark 'Settled' following a mutual compromise payment, confirming that the borrower has satisfied the agreed terms and holds zero remaining legal liability. In contrast, a loan write-off indicates that the lender unilaterally classified the loan as an unrecovered loss on its balance sheet while retaining the legal right to pursue recovery litigation and asset attachment indefinitely. While a 'Settled' status causes a temporary drop in credit score, it halts destructive Days Past Due (DPD) compounding and enables comprehensive credit rehabilitation within eighteen to twenty-four months.",
  },
  {
    id: "faq-8",
    question: "What official document proves that a debt is permanently settled and legally closed?",
    answer:
      "The definitive legal proof of debt extinguishment is an official, bank-stamped No Dues Certificate (NDC) or Closure Letter issued on the lending institution's corporate letterhead, signed by an authorized branch or zonal officer with a verifiable reference number. This statutory instrument confirms the complete receipt of the sanctioned compromise amount, formally discharges the borrower and any guarantors under the Indian Contract Act, 1872, and commits the lender to notify credit bureaus to update the loan status to 'Settled'. Borrowers must ensure this document is legally authenticated by their advocate before considering the account permanently closed.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Rajeev Verma",
  authorRole: "Senior Logistics Director, Delhi NCR • Settled Multiple Unsecured Debts",
  reviewBody:
    "Facing severe unmanageable debt across multiple credit cards and personal loans after a supply chain business collapse left me overwhelmed with constant recovery calls and Section 138 notices. Conventional corporate law firms demanded exorbitant advance retainers, while free online DIY settlement templates were immediately rejected by bank recovery managers. Advocate Anuj Anand Malik and AMA Legal Solutions provided transparent fixed legal advisory, stepped in to defend me before the Lok Adalat, and negotiated RBI-compliant OTS agreements with over sixty percent waivers. They secured authentic No Dues Certificates from all four lenders without any hidden charges or surprise costs.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "What is Debt Settlement? Meaning, Process & Legal RBI OTS Framework",
      description:
        "Comprehensive legal and commercial explanation of debt settlement in India under Reserve Bank of India compromise frameworks. Learn statutory rights, Section 138 defense, advocate negotiation, and No Dues Certificates.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "What is Debt Settlement? Meaning, Legal Process & RBI OTS Framework",
      description:
        "Complete commercial and legal guide to debt settlement in India. Understand how advocate-led compromise negotiations extinguish debt liabilities, halt recovery harassment, defeat Section 138 notices, and deliver authentic bank No Dues Certificates.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${PAGE_URL}#webpage` },
      image: [OG_IMAGE_URL],
      datePublished: PUBLISHED_DATE,
      dateModified: PUBLISHED_DATE,
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
        sameAs: [
          "https://www.facebook.com/amalegalsolutions/",
          "https://www.youtube.com/@amalegalsolution",
          "https://www.instagram.com/amalegalsolutions/",
          "https://www.linkedin.com/company/ama-legal-solutions/",
        ],
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
      name: "Advocate-Led Debt Settlement Legal Advisory",
      description:
        "Specialized legal advisory and dispute representation for One-Time Settlement (OTS) negotiations under Reserve Bank of India compromise frameworks, stopping unlawful harassment and securing bank No Dues Certificates.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: clientReviewData.ratingValue,
        bestRating: clientReviewData.bestRating,
        worstRating: clientReviewData.worstRating,
        reviewCount: clientReviewData.reviewCount,
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: clientReviewData.ratingValue,
            bestRating: clientReviewData.bestRating,
          },
          author: { "@type": "Person", name: clientReviewData.authorName },
          reviewBody: clientReviewData.reviewBody,
          datePublished: PUBLISHED_DATE,
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
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        {
          "@type": "ListItem",
          position: 3,
          name: "What is Debt Settlement",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Step Legal Debt Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Ledger Audit & Penal Interest Dissection",
          description:
            "Exhaustive legal review of loan agreements, sanction letters, and account statements to isolate penal interest and unauthorized late charges from genuine principal obligations.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Statutory Cease-and-Desist Notice Under RBI Guidelines",
          description:
            "Issuance of formal Vakalatnama and legal notices under the RBI Master Directions on Fair Practices Code to halt all third-party recovery agent harassment, calls, and residential visits.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Preparation & Submission of Advocate Hardship Dossier",
          description:
            "Drafting of an evidence-backed One-Time Settlement (OTS) petition substantiating genuine borrower hardship, medical emergencies, or insolvency under Section 63 of the Indian Contract Act.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Bank Compromise Committee Negotiation & OTS Letter Vetting",
          description:
            "Senior advocate representation before bank stressed asset verticals, negotiating maximum legal waivers and verifying the authenticity of official bank OTS sanction letters.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Settlement Execution, No Dues Certificate Enforcement & CIBIL Rectification",
          description:
            "Supervised settlement fund transfer directly to the lending institution, securing an unconditional No Dues Certificate (NDC) and enforcing updated reporting to credit information bureaus.",
        },
      ],
    },
  ],
};

/* ─────────────────────────── HELPERS ───────────────────────────── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#D2A02A] fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

/* ──────────────────────── TOC SECTIONS ─────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "statutory-meaning-and-framework", title: "Statutory Meaning & Legal Framework" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs DIY Templates vs Corporate Firms" },
  { id: "eligible-debts-matrix", title: "Eligible vs Ineligible Debts" },
  { id: "5-step-settlement-protocol", title: "5-Step Legal Settlement Protocol" },
  { id: "signature-infographic", title: "Settlement Workflow Infographic" },
  { id: "statutory-criminal-defense", title: "Section 138 & Section 25 Defense" },
  { id: "rbi-anti-harassment-enforcement", title: "Enforcing RBI Anti-Harassment Rules" },
  { id: "settlement-letter-and-ndc", title: "OTS Sanction Letter & No Dues Certificate" },
  { id: "cibil-impact-and-restoration", title: "CIBIL Score Impact & Rehabilitation" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "Statutory References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function WhatIsDebtSettlementClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("quick-answer");

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
      alert("Please enter your name and phone number.");
      return;
    }
    setModalSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const textMsg = `Hello AMA Legal Solutions, I would like to understand what debt settlement options are available for my accounts.
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
    const url = PAGE_URL;
    const text =
      "What is Debt Settlement? Meaning, Process & Legal RBI OTS Framework – AMA Legal Solutions";
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
      label: "What is Debt Settlement",
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

          {/* ══ ASYMMETRIC 12-COLUMN HERO SECTION ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
            {/* Left Col — Title & Metadata (lg:col-span-8) */}
            <div className="flex flex-col lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase tracking-wider w-max mb-4 shadow-sm border border-[#D2A02A]/30">
                <span>⚖️</span> Statutory Debt Resolution &amp; RBI OTS Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                What is <span className="text-[#D2A02A]">Debt Settlement</span>? Meaning, Process &amp; Legal Rights in India
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Understand the statutory framework of One-Time Settlement (OTS) under Reserve Bank of India directives.
                Discover how advocate-certified representation eliminates unlawful recovery agent harassment, defends against
                Section 138 and Section 25 criminal notices, and secures authentic No Dues Certificates through transparent, fixed
                legal advisory without open-ended hourly retainers.
              </p>

              {/* Author & Meta Row */}
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
                      Anuj Anand Malik
                    </Link>
                    <p className="text-xs text-gray-500">
                      Founder &amp; Senior Advocate &bull; Reviewed by Team AMA Legal Solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> 17-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 16 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> RBI Framework Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Confidential Case Evaluation</span>
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

            {/* Right Col — Generated OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/what-is-debt-settlement.png"
                  alt="What is Debt Settlement in India – Statutory OTS Framework"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    RBI Compromise Settlement Framework
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory Debt Extinguishment &amp; Judicial Protection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ TRUST & CREDENTIALS BANNER ══ */}
        <div className="bg-white border-y border-gray-200 py-6 mb-10 shadow-sm">
          <div className="container mx-auto px-4 max-w-[1600px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⭐</span> 4.7 Rating
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Google Verified Reviews
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⚖️</span> Bar Council
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Enrolled Senior Advocates
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🛡️</span> 100% Legal
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Privileged Legal Counsel
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> Genuine NDC
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Official Bank Discharges
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column (Desktop Sticky Table of Contents) */}
            <aside className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            {/* Center Editorial Column */}
            <main className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 overflow-hidden border border-gray-100">
              
              {/* Meta details & Social Share Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
                <div className="text-xs text-gray-500">
                  Published: <span className="font-semibold text-gray-700">September 17, 2026</span> &bull; Practice: <span className="font-semibold text-gray-700">Banking &amp; Stressed Assets Litigation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Share:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                    title="Share on Facebook"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-sky-50 text-sky-600 hover:bg-sky-100 transition"
                    title="Share on Twitter"
                  >
                    Twitter/X
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
                    title="Share on LinkedIn"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-amber-50 text-[#5A4C33] hover:bg-amber-100 transition"
                    title="Copy Link"
                  >
                    {shareMsg || "Copy Link"}
                  </button>
                </div>
              </div>

              {/* ══ STANDALONE QUICK-ANSWER BLOCK ══ */}
              <div
                id="quick-answer"
                className="p-6 md:p-8 bg-amber-50/70 border-2 border-[#D2A02A] rounded-2xl shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2 text-[#5A4C33] font-bold text-sm uppercase tracking-wider">
                  <span className="text-xl">⚡</span> Quick Legal Answer
                </div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                  Debt settlement is a legally sanctioned compromise resolution process governed under the Reserve Bank of India (RBI) Prudential Framework and Section 63 of the Indian Contract Act, 1872, wherein a creditor formally agrees to accept a discounted lump-sum payment to extinguish a borrower&apos;s outstanding debt obligation. This bilateral legal agreement terminates all contractual liabilities, halts ongoing recovery litigation, and mandates the issuance of an unconditional No Dues Certificate (NDC). When executed through advocate-led representation rather than commercial agencies, debt settlement provides statutory protection against recovery agent harassment and quashes quasi-criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007.
                </p>
              </div>

              {/* ══ SECTION 1: STATUTORY MEANING & LEGAL FRAMEWORK ══ */}
              <section id="statutory-meaning-and-framework" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STATUTORY FOUNDATIONS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Statutory Meaning of Debt Settlement &amp; Indian Legal Framework
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In Indian commercial jurisprudence, debt settlement is often colloquially known as a <strong>One-Time Settlement (OTS)</strong> or <strong>Compromise Settlement</strong>. Rather than representing an arbitrary waiver or informal agreement, debt settlement is a structured legal doctrine grounded in established statutory enactments and central banking regulations. When severe liquidity impairment, business loss, job termination, or catastrophic medical crises prevent a borrower from servicing agreed Equated Monthly Installments (EMIs), continuing to accrue compounding penal interest only deepens insolvency.
                </p>

                <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 my-4 bg-gray-50 text-gray-700 italic">
                  <strong>Section 63 of the Indian Contract Act, 1872:</strong> &ldquo;Every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may extend the time for such performance, or may accept instead of it any satisfaction which he thinks fit.&rdquo;
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  Under Section 63, Indian law explicitly empowers lending banks and financial institutions to accept lesser performance—meaning a reduced financial sum—in complete satisfaction of the entire contract. Once the agreed compromise amount is tendered, the original credit agreement is formally extinguished under the doctrine of accord and satisfaction, barring the lender from asserting any residual claims against the borrower.
                </p>

                <h3 className="text-xl font-bold text-[#1a202c] mt-6">
                  The Reserve Bank of India (RBI) Regulatory Mandate
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To ensure transparency and prevent non-transparent recovery practices, the Reserve Bank of India issued comprehensive guidelines titled the <em>Prudential Framework for Resolution of Stressed Assets</em> and subsequent circulars on <em>Compromise Settlements and Technical Write-offs</em>. Under these directives:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Board-Approved Compromise Policies:</strong> Every commercial bank, cooperative bank, and Systemically Important NBFC must put in place board-approved OTS policies outlining eligibility benchmarks, delegated financial powers, and objective appraisal norms.
                  </li>
                  <li>
                    <strong>Elimination of Compounding Penalties:</strong> Banking sanction committees possess the delegated authority to waive 100% of accumulated penal interest, overdue charges, and administrative surcharges before considering waivers on the genuine principal sum.
                  </li>
                  <li>
                    <strong>Non-Discriminatory Access:</strong> Compromise settlements cannot be arbitrarily denied to borrowers who demonstrate verifiable, bona fide distress without willful intent to default.
                  </li>
                  <li>
                    <strong>Compromise Decrees via Lok Adalat:</strong> Under Section 21 of the Legal Services Authorities Act, 1987, settlement awards formalized before a Lok Adalat bench operate as final decrees of a civil court, with zero right of appeal.
                  </li>
                </ul>
              </section>

              {/* ══ SECTION 2: COMMERCIAL REALITY: ADVOCATE VS DIY VS CORPORATE ══ */}
              <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  COMMERCIAL EVALUATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Commercial Realities: Advocate-Led Advisory vs. DIY Templates vs. Corporate Retainers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When facing default, distressed borrowers frequently search for solutions and encounter three deeply flawed options: free automated online DIY templates, unregulated private settlement companies, or traditional corporate law firms. Understanding the distinct legal enforceability and commercial viability of each option is critical to safeguarding personal freedom and assets.
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
                    <h3 className="font-bold text-red-900 text-lg flex items-center gap-2">
                      <span>⚠️</span> The Fatal Flaw of Free DIY Online Templates
                    </h3>
                    <p className="text-sm text-red-800 mt-2 leading-relaxed">
                      Free downloadable settlement letter samples and automated form generators are completely devoid of legal standing under the <strong>Advocates Act, 1961</strong>. Bank recovery legal departments immediately identify and reject these boilerplate letters. Worse, automated templates often contain accidental admissions of financial liability or omit mandatory statutory reservations, severely prejudicing the borrower&apos;s defense when lenders initiate criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50">
                    <h3 className="font-bold text-amber-900 text-lg flex items-center gap-2">
                      <span>⚠️</span> The Trap of Unregulated Settlement Companies &amp; Apps
                    </h3>
                    <p className="text-sm text-amber-800 mt-2 leading-relaxed">
                      Commercial debt resolution apps and intermediary companies are commercial entities that have no legal standing to represent clients in judicial magistrate courts. They operate without advocate-client confidentiality under Section 126 of the Indian Evidence Act, 1872, frequently extract recurring monthly administrative subscriptions without court-enforced outcomes, and cannot protect borrowers when recovery agents violate RBI Fair Practices codes.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50">
                    <h3 className="font-bold text-blue-900 text-lg flex items-center gap-2">
                      <span>⚖️</span> The Excessive Cost of Traditional Corporate Law Firms
                    </h3>
                    <p className="text-sm text-blue-800 mt-2 leading-relaxed">
                      Traditional corporate law firms operate on open-ended hourly billing models and demand exorbitant advance retainers that compound financial distress for individuals experiencing liquidity shortages. Their operational models are tailored for corporate conglomerates rather than stressed retail consumers or MSMEs requiring rapid, cost-predictable debt resolution.
                    </p>
                  </div>
                </div>

                {/* COMPARISON TABLE: ENFORCEABILITY & COMMERCIAL PREDICTABILITY */}
                <h3 className="text-xl font-bold text-[#1a202c] mt-8">
                  Institutional Comparison: Legal Enforceability &amp; Representation Model
                </h3>
                <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#1a202c] text-white">
                        <th className="p-3.5 sm:p-4 font-bold border-b border-gray-700">Legal Feature &amp; Capability</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Free DIY Online Templates</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Unregulated Settlement Apps</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Corporate Law Firms</th>
                        <th className="p-3.5 sm:p-4 font-bold text-[#D2A02A] border-b border-gray-700 bg-black/30">AMA Legal Solutions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Judicial Court Standing (Advocates Act)</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Zero Standing</td>
                        <td className="p-3.5 sm:p-4 text-red-600">No Legal Standing</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Full Court Standing</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Full Court Standing (Vakalatnama)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Advocate-Client Privilege (Section 126)</td>
                        <td className="p-3.5 sm:p-4 text-red-600">None</td>
                        <td className="p-3.5 sm:p-4 text-red-600">None (Data Exposed)</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Protected</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Strict Statutory Privilege</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Section 138 &amp; 25 Criminal Defense</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Incapable of Defense</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Cannot Represent</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Comprehensive Defense</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Immediate Representation &amp; Compounding</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">RBI Anti-Harassment Enforcement</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Ignored by Banks</td>
                        <td className="p-3.5 sm:p-4 text-amber-600">Limited Follow-up</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Statutory Notice</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Immediate Cease-and-Desist &amp; Ombudsman</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Commercial Advisory Structure</td>
                        <td className="p-3.5 sm:p-4 text-gray-500">Unverified / Unregulated</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Monthly Subscriptions</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Heavy Retainers &amp; Hourly Bills</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Transparent Fixed Advisory Model</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">No Dues Certificate (NDC) Vetting</td>
                        <td className="p-3.5 sm:p-4 text-red-600">High Risk of Fake Letters</td>
                        <td className="p-3.5 sm:p-4 text-amber-600">Administrative Only</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Forensic Legal Vetting</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Advocate-Certified Bank Authentication</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  AMA Legal Solutions addresses this commercial gap by replacing open-ended corporate law firm retainers with an accessible, transparent, fixed legal advisory model. Distressed borrowers receive senior advocate litigation shielding, comprehensive forensic ledger audits, and aggressive institutional bargaining under RBI compromise frameworks without fearing unexpected hourly charges or monthly agency retainers.
                </p>
              </section>

              {/* ══ SECTION 3: ELIGIBLE VS INELIGIBLE DEBTS ══ */}
              <section id="eligible-debts-matrix" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  CREDIT CLASSIFICATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Eligible vs. Ineligible Debts for Settlement in India
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Debt settlement applies primarily to unsecured borrowing facilities where the lending institution does not possess registered collateral charges or mortgages. Understanding how Indian banking law distinguishes between unsecured obligations and secured assets is vital before formulating a compromise strategy.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 rounded-2xl border border-green-200 bg-green-50/40 space-y-3">
                    <h3 className="font-bold text-green-900 text-base flex items-center gap-2">
                      <span>✅</span> Unsecured Facilities (Fully Eligible for OTS)
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1.5">
                      <li><strong>Personal Loans:</strong> Salaried and self-employed unsecured term loans from public, private, or foreign scheduled commercial banks.</li>
                      <li><strong>Credit Card Dues:</strong> Primary cards, add-on cards, and revolving credit lines with heavily inflated finance and late-payment charges.</li>
                      <li><strong>MSME &amp; Business Credit Lines:</strong> Collateral-free business loans, overdraft facilities, and merchant cash advances.</li>
                      <li><strong>Digital Instant Loan Apps:</strong> Short-term fintech credit facilities regulated under RBI digital lending directions.</li>
                      <li><strong>Peer-to-Peer (P2P) Loans:</strong> Unsecured NBFC-P2P lending marketplace credit accounts.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-3">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>⛔</span> Secured Facilities (Subject to SARFAESI Enactments)
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1.5">
                      <li><strong>Home Loans:</strong> Residential and commercial property mortgages subject to Section 13(2) and Section 13(4) of the SARFAESI Act, 2002.</li>
                      <li><strong>Auto &amp; Vehicle Loans:</strong> Hypothecated motor vehicle loans where lenders maintain repossession covenants under the Motor Vehicles Act.</li>
                      <li><strong>Loan Against Property (LAP):</strong> Mortgaged immovable assets subject to physical auction before Debt Recovery Tribunals (DRT).</li>
                      <li><strong>Gold Loans:</strong> Pledged physical jewelry subject to statutory auction under standardized auction notices.</li>
                      <li><strong>Willful Defaulter Accounts:</strong> Accounts where funds were proven to be diverted, siphoned, or obtained through fraudulent balance sheets.</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  While secured loans cannot be settled under standard unsecured compromise guidelines due to the lender&apos;s statutory power to seize physical collateral under the SARFAESI Act, advocate-led representation before the Debt Recovery Tribunal (DRT) can still achieve pre-auction restructuring or negotiated settlement before physical possession occurs.
                </p>
              </section>

              {/* ══ SECTION 4: THE 5-STEP LEGAL DEBT SETTLEMENT PROTOCOL ══ */}
              <section id="5-step-settlement-protocol" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STEP-BY-STEP PROCEDURE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Step Legal Debt Settlement Protocol
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, debt settlement is conducted with strict adherence to the Advocates Act, 1961, the Indian Contract Act, 1872, and RBI Master Directions. The formal protocol ensures complete legal finality, total elimination of debt liability, and protection of borrower dignity.
                </p>

                <div className="space-y-6 my-6">
                  {/* Step 1 */}
                  <div className="flex gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-base">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Forensic Ledger Audit &amp; Penal Interest Dissection
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our banking litigation team conducts an exhaustive line-by-line examination of your loan sanction agreements, account statements, and repayment histories. We isolate uncontracted compounding interest, unilateral interest rate hikes, late fees, and processing penalties from the genuine principal balance, establishing the exact factual baseline for negotiation.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-base">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Statutory Cease-and-Desist Notice Under RBI Guidelines
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We serve formal Vakalatnama notifications and legal cease-and-desist notices on all lending banks, NBFCs, and collection agencies. Citing the RBI Master Direction on Fair Practices Code, we mandate that all recovery communications must route exclusively through legal counsel, immediately halting unlawful home visits, workplace disruptions, and calls to third parties.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-base">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Preparation &amp; Submission of Advocate Hardship Dossier
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Rather than sending generic templates, our advocates compile an evidence-backed Hardship Dossier. Supported by medical records, termination notices, audited balance sheets, or tax returns, this legal brief substantiates genuine financial incapacity, establishing that recovery litigation would produce lower returns for the bank than an immediate compromise settlement.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-base">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Bank Compromise Committee Negotiation &amp; OTS Letter Vetting
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our advocates interface directly with the bank&apos;s Zonal Stressed Assets Resolution Committee or Credit Head. We negotiate maximum principal haircuts and 100% penal interest waivers. When an offer is approved, we rigorously vet the formal OTS Sanction Letter to ensure it includes verifiable reference numbers, correct account details, and explicit covenants to issue an unconditional No Dues Certificate.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-base">
                      5
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Settlement Execution, No Dues Certificate Enforcement &amp; CIBIL Rectification
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Funds are remitted directly to the lender&apos;s official loan account—never to intermediary collection accounts. Following payment, we enforce the timely issuance of the authentic bank No Dues Certificate (NDC), secure the withdrawal or compounding of any magistrate court complaints, and guide credit bureau reporting updates under the Credit Information Companies Act.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 5: SIGNATURE INFOGRAPHIC CARD ══ */}
              <section id="signature-infographic" className="space-y-4">
                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                  <div className="inline-block px-3 py-1 bg-[#D2A02A]/20 text-[#5A4C33] text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    Official Infographic &bull; Statutory Blueprint
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c] mb-4">
                    The Legal Debt Settlement &amp; Protection Roadmap
                  </h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md max-w-3xl mx-auto mb-4 bg-white">
                    <img
                      src="/images/og/what-is-debt-settlement.png"
                      alt="Legal Debt Settlement Process in India Blueprint"
                      className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto italic leading-relaxed">
                    Visual representation of the advocate-led debt settlement protocol: from forensic ledger audit and statutory anti-harassment notice to institutional bank committee compromise approval and final No Dues Certificate issuance.
                  </p>
                </div>
              </section>

              {/* ══ SECTION 6: SECTION 138 & SECTION 25 DEFENSE ══ */}
              <section id="statutory-criminal-defense" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  JUDICIAL LITIGATION DEFENSE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Judicial Shield: Defending Section 138 NI Act &amp; Section 25 PSS Act Complaints
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing financial distress are often terrified by statutory notices alleging criminal culpability. Lenders commonly deploy two primary legal mechanisms to convert civil financial defaults into coercive courtroom pressure:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Section 138 of the Negotiable Instruments Act, 1881
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Enacted to punish the dishonour of cheques issued for the discharge of a legally enforceable debt. Lenders often deposit undated security cheques collected years earlier during initial loan disbursement and issue a 15-day statutory demand notice once returned unpaid.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Section 25 of the Payment and Settlement Systems Act, 2007
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Statutorily equivalent to Section 138, this provision criminalizes the electronic dishonour of National Automated Clearing House (NACH) or Electronic Clearing Service (ECS) auto-debit mandates due to insufficient balance.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1a202c] mt-6">
                  How Advocates Neutralize Quasi-Criminal Proceedings
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Simple inability to repay an unsecured personal loan or credit card debt is strictly a <strong>civil breach of contract</strong> under Indian law and does not constitute a criminal offence. The Supreme Court of India has repeatedly held that criminal breach of trust or cheating under Section 415/420 of the Indian Penal Code requires fraudulent intention at the inception of the contract.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When you retain AMA Legal Solutions, our banking advocates take immediate action:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Statutory Reply to Legal Notice:</strong> We draft a meticulous legal reply within the mandatory statutory period, documenting genuine financial hardship, challenging incorrect ledger calculations, and asserting the defense that blank security cheques were misused.
                  </li>
                  <li>
                    <strong>Court Appearance &amp; Bail Formalities:</strong> If a private complaint is filed before a Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM), our litigation advocates represent you, secure immediate bailable bond release, and prevent coercive non-bailable warrants.
                  </li>
                  <li>
                    <strong>Compounding of Offense via Lok Adalat:</strong> Both Section 138 and Section 25 are compoundable offenses under Indian law. We formalize the OTS settlement agreement before a Lok Adalat bench, which operates as a judicial decree quashing the criminal complaint and disposing of the litigation permanently.
                  </li>
                </ul>
              </section>

              {/* ══ SECTION 7: ENFORCING RBI ANTI-HARASSMENT RULES ══ */}
              <section id="rbi-anti-harassment-enforcement" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  BORROWER RIGHTS &amp; DIGNITY
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Enforcing RBI Anti-Harassment Rules &amp; Borrower Protection
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  No bank, NBFC, or third-party collection agency has the legal authority to intimidate, threaten, or harass a borrower. The Reserve Bank of India has issued stringent directives governing the appointment, training, and operational conduct of recovery agents under its <em>Master Circular on Recovery Agents</em> and <em>Fair Practices Code</em>.
                </p>

                <div className="p-6 rounded-2xl bg-amber-50/60 border border-[#D2A02A]/30 space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    <span>🛡️</span> Statutory Rights Guaranteed Under RBI Directives
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Permissible Calling Hours:</strong> Recovery agents may only contact borrowers between 8:00 AM and 7:00 PM. Calls at night, early morning, or during public holidays violate RBI mandates.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Ban on Abusive Conduct:</strong> Any verbal intimidation, humiliation, profanity, or threatening language is strictly unlawful and attracts immediate regulatory penalties.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Privacy &amp; Third-Party Protection:</strong> Calling employers, colleagues, friends, or extended relatives regarding a personal debt default constitutes a severe invasion of constitutional privacy.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Workplace Visits Prohibited:</strong> Visiting a borrower&apos;s workplace unannounced or causing public embarrassment is explicitly forbidden under central banking regulations.
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  When unauthorized recovery agents violate these provisions, AMA Legal Solutions serves formal legal notices alerting the bank&apos;s Principal Nodal Officer and Credit Risk Committee to the breach. If violations persist, we file institutional complaints under the <strong>Reserve Bank of India Integrated Ombudsman Scheme, 2021</strong> and pursue civil compensation and criminal restraining orders before appropriate judicial authorities.
                </p>
              </section>

              {/* ══ SECTION 8: OTS SANCTION LETTER & NO DUES CERTIFICATE ══ */}
              <section id="settlement-letter-and-ndc" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  DOCUMENTARY AUTHENTICATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Vetting the Bank OTS Sanction Letter &amp; Securing the No Dues Certificate
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the greatest hazards facing borrowers attempting informal or DIY debt settlement is falling victim to unauthorized collection agent scams. Predatory recovery personnel frequently create fake settlement letters or instruct borrowers to deposit funds into third-party accounts, only for the bank to later treat the payment as part-payment towards accrued interest without closing the loan.
                </p>

                <h3 className="text-xl font-bold text-[#1a202c]">
                  Checklist of a Legally Valid Bank OTS Sanction Letter
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Official Letterhead:</strong> The document must be printed on the official corporate stationery of the scheduled commercial bank or registered NBFC.</li>
                  <li><strong>Verifiable Unique Reference Number:</strong> The letter must contain a traceable tracking number that can be cross-verified on the bank&apos;s central core banking platform.</li>
                  <li><strong>Authorized Signatory:</strong> It must be signed and stamped by an authorized bank officer with their employee code, designation, and official seal.</li>
                  <li><strong>Unambiguous Waiver Terms:</strong> The letter must clearly specify the exact total outstanding amount, the approved compromise amount, the explicit waiver on principal and interest, and the payment deadline.</li>
                  <li><strong>Binding NDC Covenant:</strong> The sanction letter must explicitly state that upon receipt of the agreed settlement sum, the loan account will be closed with zero remaining balance and an unconditional No Dues Certificate will be issued.</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, our senior advocates perform thorough forensic authentication of the OTS sanction letter before advising any client to release settlement funds. Once paid, we enforce the delivery of the final <strong>No Dues Certificate (NDC)</strong>, which serves as your permanent legal shield against future recovery attempts.
                </p>
              </section>

              {/* ══ SECTION 9: CIBIL IMPACT & CREDIT REBUILDING ══ */}
              <section id="cibil-impact-and-restoration" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  CREDIT REHABILITATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  CIBIL Score Impact &amp; Long-Term Credit Rehabilitation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A common question regarding debt settlement is its effect on credit ratings. Under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, banks are statutorily required to report account payment status to credit information bureaus like TransUnion CIBIL, Experian, Equifax, and CRIF High Mark on a monthly basis.
                </p>

                <div className="space-y-4 my-4">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Understanding &apos;Settled&apos; vs. &apos;Written Off&apos;
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      When an OTS is completed, the bureau records the loan remark as <strong>&apos;Settled&apos;</strong>. While this causes a temporary drop in credit score (typically between 60 to 120 points), it completely terminates the catastrophic <strong>Days Past Due (DPD)</strong> counter that would otherwise increment every 30 days, causing severe ongoing damage.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Rebuilding Credit Above 750 Over 18 to 24 Months
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      A &apos;Settled&apos; status does not permanently destroy your financial future. Distressed borrowers can systematically rehabilitate their credit profiles within 18 to 24 months through disciplined credit hygiene: maintaining zero late payments, obtaining a secured credit card backed by a fixed deposit, keeping credit utilization below 30%, and verifying that bureaus correctly update the outstanding balance to zero.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 10: 8-QUESTION ACCORDION FAQ ══ */}
              <section id="frequently-asked-questions" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  QUOTABLE LEGAL FAQS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Frequently Asked Questions on Debt Settlement in India
                </h2>
                <p className="text-gray-600 text-sm">
                  Authoritative statutory answers to common legal and financial queries regarding compromise settlements and borrower protections.
                </p>

                <div className="space-y-4 my-6">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-5 md:p-6 font-bold text-[#1a202c] hover:text-[#D2A02A] flex justify-between items-center gap-4 transition-colors cursor-pointer"
                        >
                          <span className="text-base md:text-lg">
                            {index + 1}. {faq.question}
                          </span>
                          <span className="text-xl font-extrabold text-[#D2A02A] shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-gray-700 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ══ SECTION 11: MORE LEGAL GUIDES INTERNAL LINK GRID ══ */}
              <section id="internal-guides" className="space-y-6 pt-6 border-t border-gray-200">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  EXPLORE RELATED TOPICS
                </div>
                <h2 className="text-2xl font-bold text-[#1a202c]">
                  More Legal Guides on Debt Settlement &amp; Banking Litigation
                </h2>
                <p className="text-sm text-gray-600">
                  Explore comprehensive resources prepared by our senior banking advocates to help you navigate debt resolution, borrower rights, and credit repair:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
                  <Link
                    href="/debt-settlement-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Legal Overview
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Debt Settlement India &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Comprehensive guide to compromise settlements and borrower rights under RBI rules.
                    </p>
                  </Link>

                  <Link
                    href="/best-debt-settlement-company"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Firm Comparison
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Best Debt Settlement Company &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Why advocate-led firms outperform unregulated debt relief agencies in India.
                    </p>
                  </Link>

                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Comparison
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Settlement vs. Consolidation &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Evaluate debt restructuring options when monthly loan obligations exceed income.
                    </p>
                  </Link>

                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Harassment Shield
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Stop Recovery Harassment &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Enforce RBI recovery directives and halt unlawful phone calls and home visits.
                    </p>
                  </Link>

                  <Link
                    href="/section-138-cheque-bounce-notice-for-personal-loan"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Court Defense
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Section 138 Notice Defense &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Strategic legal defense against cheque bounce complaints in personal loan defaults.
                    </p>
                  </Link>

                  <Link
                    href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Credit Impact
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Settlement vs. Closure on CIBIL &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Understanding credit remark classifications and long-term score rehabilitation.
                    </p>
                  </Link>
                </div>
              </section>

              {/* ══ SECTION 12: REFERENCES & STATUTORY CITATIONS ══ */}
              <section id="statutory-references" className="space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  AUTHORITY &amp; STATUTORY CODES
                </div>
                <h2 className="text-xl font-bold text-[#1a202c]">
                  References, Statutory Authority &amp; Judicial Portals
                </h2>
                <p className="text-xs text-gray-600">
                  Verify the statutory legal enactments and official government circulars governing debt settlement and borrower rights:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Indian Contract Act, 1872 (Section 63)</div>
                    <p className="text-gray-500 mt-0.5">Statutory provision governing dispensation and remission of contractual performance.</p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      India Code Legislative Database &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">RBI Master Direction on Fair Practices Code</div>
                    <p className="text-gray-500 mt-0.5">Regulatory standards for recovery agents, calling hours, and grievance redressal.</p>
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      Reserve Bank of India Portal &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Negotiable Instruments Act, 1881 (Section 138)</div>
                    <p className="text-gray-500 mt-0.5">Statutory provisions for dishonoured cheques and compounding of offenses.</p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2189"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      India Code Legislative Database &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Legal Services Authorities Act, 1987 (Lok Adalat)</div>
                    <p className="text-gray-500 mt-0.5">Section 21 statutory framework for Lok Adalat compromise awards as civil decrees.</p>
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      National Legal Services Authority (NALSA) &rarr;
                    </a>
                  </div>
                </div>
              </section>

              {/* Social Share Row at bottom of content */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  Was this legal guide helpful? Share it with borrowers seeking statutory debt relief.
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-900 text-white hover:bg-black transition"
                  >
                    Twitter/X
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* ══ SECTION 13: AMA COMPANY & MEDIA SECTION ══ */}
              <section
                id="ama-company-section"
                className="p-6 md:p-8 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-4 border-[#D2A02A] rounded-2xl shadow-sm space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#D2A02A]/30 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1a202c] p-2 flex items-center justify-center shrink-0 border border-[#D2A02A]/40">
                      <img src="/ama3.svg" alt="AMA Legal Solutions Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#1a202c]">AMA Legal Solutions</h3>
                      <p className="text-xs text-gray-600 font-medium mt-0.5">
                        India&apos;s Premier Advocate-Led Banking &amp; Stressed Assets Law Firm
                      </p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right shrink-0">
                    <div className="text-2xl font-extrabold text-[#1a202c] flex items-center justify-center sm:justify-end gap-1">
                      <span className="text-[#D2A02A]">★</span> 4.7 / 5.0
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Google Verified Firm Rating</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Founded by Senior Advocate Anuj Anand Malik, AMA Legal Solutions is dedicated to protecting consumers, entrepreneurs, and salaried borrowers from predatory lending, unlawful recovery harassment, and unfair financial practices. Operating with strict adherence to the Bar Council of India standards, we represent clients across nationwide courts, tribunals, and National Lok Adalat benches.
                </p>

                <div>
                  <div className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-3">
                    Our Specialized Practice Areas
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold">
                    <Link
                      href="/personal-loan-settlement"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Personal Loan Settlement
                    </Link>
                    <Link
                      href="/credit-card-settlement"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Credit Card Settlement
                    </Link>
                    <Link
                      href="/business-loan-settlement"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Business Loan Settlement
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Section 138 Defense
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Recovery Harassment Protection
                    </Link>
                    <Link
                      href="/debt-recovery-tribunal-advocate"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      DRT Litigation Defense
                    </Link>
                  </div>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A] mx-auto mb-4">
                  <img
                    src="/anujbhiya.png"
                    alt="Advocate Anuj Anand Malik"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-extrabold text-[#1a202c] text-lg">
                  Anuj Anand Malik
                </h3>
                <p className="text-xs text-[#D2A02A] font-bold uppercase tracking-wider mb-2">
                  Founder &amp; Senior Advocate
                </p>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Advocate Anuj Anand Malik is India&apos;s leading banking litigation and debt settlement lawyer, specializing in RBI compromise frameworks, Section 138 defense, Lok Adalat resolution, and halting unlawful recovery agent harassment.
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
                  Stop recovery agent harassment today. Retain our senior banking advocates for a confidential case evaluation under RBI compromise settlement guidelines.
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

              {/* Client Reviews Card (Verbatim Match to Schema) */}
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
                  Read All Verified Client Reviews &rarr;
                </Link>
              </div>

              {/* Related Topic Guides */}
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
                    href="/best-debt-settlement-company"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Company
                  </Link>
                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs. Debt Consolidation
                  </Link>
                  <Link
                    href="/loan-write-off-vs-loan-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs. Loan Write-Off
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
                  <Link
                    href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; CIBIL Impact: Settlement vs Closure
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

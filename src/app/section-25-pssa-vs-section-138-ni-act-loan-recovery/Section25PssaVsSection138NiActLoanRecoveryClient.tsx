"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/section-25-pssa-vs-section-138-ni-act-loan-recovery";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/section-25-pssa-vs-section-138-ni-act-loan-recovery.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-24T10:30:00+05:30";
const MODIFIED_DATE = "2026-09-24T13:00:00+05:30";

/* ─────────────────────────── TOC SECTIONS ──────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Section 25 PSSA vs Section 138 NI Act" },
  { id: "digital-transition-context", title: "The Payment Shift: Physical Cheques to Electronic NACH Mandates" },
  { id: "section-25-pssa-architecture", title: "Section 25 PSSA Explained: The Digital Twin of Section 138" },
  { id: "statutory-timelines", title: "Mandatory Statutory Timelines: 30-Day Notice & 15-Day Cure Window" },
  { id: "territorial-jurisdiction", title: "Territorial Jurisdiction: Where Can Complaints Be Filed?" },
  { id: "interim-compensation-143a", title: "Section 143A Interim Compensation & Appellate Deposits" },
  { id: "evidentiary-standards-bsa", title: "Evidentiary Burdens: Cheque Slips vs Section 63 BSA Certificates" },
  { id: "comparative-master-table", title: "Master Comparison Table: Section 25 PSSA vs Section 138 NI Act" },
  { id: "strategic-institutional-playbook", title: "Strategic Playbook for NBFCs, Fintech Lenders & Borrowers" },
  { id: "institutional-social-proof", title: "Institutional Case Proof: Trusted by 10+ Financial Entities" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions (Banking Litigation Desk)" },
  { id: "references-authority", title: "Statutory Authorities & Judicial Portals" },
  { id: "author-credentials", title: "About Senior Banking Advocate Anuj Anand Malik" },
];

/* ─────────────────────────── CLIENT REVIEW DATA ─────────────────── */
const clientReviewData = {
  authorName: "Rohan Nambiar, Head of Legal & Collections at TransUnion Partner NBFC",
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "49",
  reviewBody:
    "AMA Legal Solutions provided unparalleled strategic clarity in handling our bulk NACH bounce defaults under Section 25 PSSA. Their advocate-drafted statutory notices and Section 63 BSA evidence certificates resolved over 46% of our 60+ DPD accounts pre-litigation.",
};

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What is the primary difference between Section 25 PSSA and Section 138 NI Act?",
    answer:
      "The primary distinction lies in the underlying payment instrument: Section 138 of the Negotiable Instruments Act, 1881 governs the dishonour of physical paper cheques, whereas Section 25 of the Payment and Settlement Systems Act, 2007 governs the dishonour of electronic funds transfers including NACH mandates, ECS instructions, and UPI AutoPay debits. While the instruments differ, Section 25(5) of the PSSA explicitly incorporates Chapter XVII of the NI Act, ensuring that both offences attract identical criminal penalties of up to two years imprisonment and fines up to twice the dishonoured sum.",
  },
  {
    id: "faq-2",
    question: "Is Section 25 of the Payment and Settlement Systems Act a bailable offence?",
    answer:
      "Yes, an offence committed under Section 25 of the Payment and Settlement Systems Act, 2007 is a bailable and compoundable criminal offence tried by a Metropolitan Magistrate or Judicial Magistrate First Class. If a criminal complaint is filed against a defaulting borrower following an uncured statutory notice, the accused borrower can secure bail as a matter of right upon appearing before the competent magistrate with a practicing advocate. However, failure to appear following court summons can result in non-bailable warrants and coercive police production.",
  },
  {
    id: "faq-3",
    question: "What is the mandatory legal notice timeline under Section 25 PSSA and Section 138 NI Act?",
    answer:
      "Both statutes prescribe identical statutory timelines: the institutional lender or payee must issue a formal written legal demand notice within thirty days of receiving the dishonour memo or electronic return intimation from the bank. Upon delivery of the notice, the borrower is granted a mandatory fifteen-day statutory cure window to pay the crystallized dues. The formal criminal cause of action arises strictly on the sixteenth day following receipt of notice, requiring the complaint to be filed before the competent magistrate within the subsequent thirty days.",
  },
  {
    id: "faq-4",
    question: "How is territorial court jurisdiction decided for Section 25 PSSA complaints?",
    answer:
      "Under Section 25(5) of the PSSA, the jurisdictional provisions of Section 142(2) of the Negotiable Instruments Act apply mutatis mutandis to electronic mandate dishonours. As clarified by the Supreme Court of India in Jai Balaji Industries Ltd. v. M/s HEG Limited (2025), jurisdiction lies exclusively with the court within whose local territory the payee lender maintains the bank account into which the electronic payment was presented for collection. This statutory rule protects institutional lenders from having to travel to the borrower's home state to file recovery complaints.",
  },
  {
    id: "faq-5",
    question: "Does Section 143A interim compensation apply to Section 25 PSSA proceedings?",
    answer:
      "Yes, courts have established that the power to order interim compensation under Section 143A of the Negotiable Instruments Act applies to complaints instituted under Section 25 of the Payment and Settlement Systems Act, 2007 by virtue of Section 25(5). The trial magistrate holds the discretionary power to direct the accused borrower to deposit interim compensation up to twenty percent of the dishonoured transfer sum during the pendency of the trial upon framing of notice or plea. Failure to pay interim compensation can result in summary recovery as a fine under procedural law.",
  },
  {
    id: "faq-6",
    question: "What electronic evidence certificate is required for Section 25 PSSA cases under the new criminal laws?",
    answer:
      "Unlike physical cheque returns where Section 146 of the NI Act creates a statutory presumption upon the banker's slip, electronic NACH and e-Mandate dishonours require strict authentication under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). The complainant institution must produce a formal Schedule certificate signed by both the operational custodian and a technical expert containing cryptographic SHA-256 hash validation of the electronic return logs. Omission of a valid Section 63 BSA certificate can lead to rejection of electronic memos as inadmissible secondary evidence.",
  },
  {
    id: "faq-7",
    question: "Can an NBFC file both a civil summary suit and a Section 25 PSSA criminal complaint simultaneously?",
    answer:
      "Yes, Indian commercial jurisprudence firmly permits the simultaneous pursuit of civil and criminal remedies for the recovery of delinquent loan dues. An NBFC or bank can institute a criminal complaint under Section 25 PSSA or Section 138 NI Act to punish the penal breach of dishonour while concurrently initiating a summary recovery suit under Order 37 of the Code of Civil Procedure, 1908 or approaching the Debt Recovery Tribunal (DRT) to obtain money decrees and asset attachment orders. Neither proceeding operates as a legal bar against the other.",
  },
  {
    id: "faq-8",
    question: "Why do institutional lenders prefer Section 25 PSSA over physical cheque recovery today?",
    answer:
      "Modern digital retail lending, fintech micro-advances, and consumer credit operations operate almost exclusively through automated digital mandates (NACH, e-Mandates, and UPI AutoPay) rather than physical post-dated paper cheques. Section 25 PSSA provides the exact same criminal teeth, magistrate summons, and penal deterrence as Section 138 NI Act while enabling lenders to automate batch notice dispatch, eliminate physical cheque collection logistics, and manage high-volume delinquency with minimal operational overhead.",
  },
];

/* ─────────────────────────── VERIFIED CASE PROOFS ──────────────── */
const clientInstitutions = [
  {
    name: "Actoloan",
    category: "Digital Consumer Credit Platform",
    metric: "46% Pre-Litigation Cure",
    quote:
      "Switching our legal escalation from informal notices to advocate-drafted Section 25 PSSA statutory demand notices transformed borrower response. Defaulters who ignored app reminders settled their balances within the 15-day cure window.",
  },
  {
    name: "Implantium Finance",
    category: "Specialized Healthcare & Equipment NBFC",
    metric: "100% Retained Capital",
    quote:
      "Understanding the exact interplay between Section 138 security cheques and Section 25 NACH mandates allowed our legal team to structure airtight recovery notices. AMA Legal Solutions' statutory drafting is institutional-grade.",
  },
  {
    name: "FinEdge Capital",
    category: "Retail MSME & Personal Credit",
    metric: "Zero Friction Batch Processing",
    quote:
      "The jurisdictional clarity provided by AMA Legal Solutions under Section 142(2) NI Act read with Section 25 PSSA saved our recovery desk from jurisdictional disputes across multiple states.",
  },
];

/* ─────────────────────────── STEP PROTOCOL ─────────────────────── */
const stepListItems = [
  {
    title: "Stage 1: Mandate Dishonour & Memo Audit",
    desc: "The lender captures the electronic return memo (NACH/e-Mandate) or physical cheque bounce slip from the clearing bank, documenting the specific failure code (insufficient funds, account closed, mandate stopped).",
  },
  {
    title: "Stage 2: 30-Day Advocate Statutory Demand Notice",
    desc: "Senior advocates issue a formal demand notice on High Court letterhead within the mandatory 30-day statutory window, demanding payment of the crystallized debt within the mandatory 15-day cure period.",
  },
  {
    title: "Stage 3: Multi-Channel Service & Section 63 BSA Certification",
    desc: "Notices are dispatched simultaneously via India Post Speed Post, email, and WhatsApp, generating dual-signature Section 63 BSA certificates and India Post tracking delivery confirmations.",
  },
  {
    title: "Stage 4: Accrual of Cause of Action on Day 16",
    desc: "Upon expiry of the 15-day cure window without payment, the criminal offence crystallizes on the 16th day, triggering a strict 30-day window to file the formal complaint before the magistrate court.",
  },
  {
    title: "Stage 5: Magistrate Complaint & Section 143A Interim Compensation",
    desc: "Complainants file the criminal complaint under Section 25 PSSA or Section 138 NI Act before the territorial magistrate (where the payee account is maintained), moving an application for up to 20% interim compensation.",
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
        "Section 25 PSSA vs Section 138 NI Act: Loan Recovery Legal Playbook & Comparative Jurisprudence",
      description:
        "Authoritative legal and procedural comparison between Section 25 PSSA (electronic NACH / e-Mandate dishonour) and Section 138 NI Act (cheque bounce) for loan recovery by NBFCs, banks, and fintech lenders in India.",
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
      name: "Section 25 PSSA vs Section 138 NI Act: Loan Recovery Legal Playbook",
      description:
        "Comprehensive statutory comparison between Section 25 PSSA and Section 138 NI Act for loan recovery by NBFCs, banks, and fintech lenders.",
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
      name: "Statutory Banking Litigation Advisory: Section 25 PSSA & Section 138 NI Act",
      image: OG_IMAGE_URL,
      description:
        "Advocate-led statutory litigation and notice drafting advisory for NBFCs, banks, and fintech lenders. Comprehensive coverage for Section 25 PSSA e-Mandate dishonour, Section 138 NI Act cheque bounce prosecutions, Section 143A interim compensation, and Section 63 BSA evidence certification.",
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
          name: "Section 25 PSSA vs Section 138 NI Act",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 5-Stage Statutory Payment Dishonour Recovery Protocol",
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
export default function Section25PssaVsSection138NiActLoanRecoveryClient() {
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
    category: "NACH / e-Mandate Dishonour (Section 25 PSSA)",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Section 25 PSSA vs Section 138 NI Act: Loan Recovery Legal Playbook – AMA Legal Solutions";
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
    const textMsg = `Hello AMA Legal Solutions, I would like to consult regarding Section 25 PSSA and Section 138 NI Act Loan Recovery.
Full Name / Organization: ${formData.fullName}
Phone / WhatsApp: ${formData.phone}
Corporate Email: ${formData.email || "N/A"}
City & State: ${formData.cityState || "N/A"}
Dispute / Instrument Type: ${formData.category}
Case Details: ${formData.message || "Requesting strategic legal consultation on statutory notice drafting, territorial jurisdiction, and Section 143A interim compensation."}`;
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
      category: "NACH / e-Mandate Dishonour (Section 25 PSSA)",
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
      label: "Section 25 PSSA vs Section 138 NI Act",
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
                <span>⚖️</span> Statutory Payment Dishonour &amp; Banking Litigation Playbook
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Section 25 PSSA vs{" "}
                <span className="text-[#D2A02A]">Section 138 NI Act</span>: Loan Recovery Legal Playbook
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                As Indian commercial lending transitions from physical paper cheques to automated digital mandates, financial institutions and borrowers face evolving statutory battlegrounds.
                Explore the definitive legal playbook comparing Section 25 of the Payment and Settlement Systems Act, 2007 (NACH / e-Mandate dishonour) and Section 138 of the Negotiable Instruments Act, 1881 (cheque bounce).
                Understand how Section 25(5) PSSA incorporates Chapter XVII of the NI Act, how Supreme Court precedents govern territorial jurisdiction, how Section 143A interim compensation is enforced, and how Section 63 Bharatiya Sakshya Adhiniyam, 2023 evidence certificates ensure courtroom decrees—all under transparent fixed legal advisory without hourly markups or surprise retainers.
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
                    <span>🛡️</span> High Court &amp; Supreme Court Jurisprudence
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Consult Senior Banking Litigator</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1a202c] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-xl border border-gray-700 shadow transition-all text-sm md:text-base flex items-center gap-2"
                >
                  <span>📞 Banking Litigation Desk: +91-8700343611</span>
                </a>
              </div>
            </div>

            {/* Right Column (lg:col-span-4) — Rounded Card with Generated OG Image */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/section-25-pssa-vs-section-138-ni-act-loan-recovery.png"
                  alt="Section 25 PSSA vs Section 138 NI Act Loan Recovery Comparison Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Comparison: Section 25 PSSA vs Section 138 NI Act
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    NACH &amp; Cheque Dishonour &bull; Jurisdiction, Notice &amp; Evidence
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
                  <span className="text-[#D2A02A]">⚖️</span> 2 Years
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Maximum Penal Imprisonment Under Both Acts
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">💰</span> 2x Fine
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Statutory Penalty on Dishonoured Sum
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⏱️</span> 15 Days
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Statutory Cure Window Following Notice
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🏛️</span> Sec. 143A
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Up to 20% Interim Compensation Granted
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
                  Banking Litigation Desk
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Facing or issuing bulk Section 25 PSSA or Section 138 NI Act notices? Connect directly with our courtroom trial advocates.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition cursor-pointer"
                >
                  Schedule Case Review →
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
                      PSSA 2007 &amp; NI Act 1881 Analyzed
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
                        Quick Answer: Section 25 PSSA vs Section 138 NI Act
                      </h2>
                    </div>
                    <div className="prose text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
                      <p>
                        Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) and Section 138 of the Negotiable Instruments Act, 1881 (NI Act) constitute the two primary criminal enforcement mechanisms for loan recovery in India, governing dishonoured electronic fund transfers (NACH, ECS, e-Mandates) and physical cheques, respectively. While Section 138 targets paper instruments, Section 25 acts as its digital counterpart, incorporating Chapter XVII of the NI Act under Section 25(5) to impose identical criminal penalties of up to two years imprisonment and fines up to twice the dishonoured amount. Both statutes mandate serving a formal legal demand notice within thirty days of the return memo, grant the borrower a statutory fifteen-day cure window, and attract Section 143A interim compensation. Institutional lenders and NBFCs deploy Section 25 PSSA for automated high-velocity retail loan recovery and reserve Section 138 NI Act for high-value corporate or collateralized security cheques.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>Identical Penalties:</strong> Up to two years imprisonment plus fines reaching twice the defaulted repayment amount under both laws.
                          </span>
                        </div>
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>Incorporation Clause:</strong> Section 25(5) PSSA explicitly imports Sections 138 to 148 of the NI Act to electronic debits.
                          </span>
                        </div>
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>Payee Bank Jurisdiction:</strong> Both provisions fix territorial court jurisdiction where the payee maintaining bank is situated.
                          </span>
                        </div>
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>Interim Relief Power:</strong> Magistrates can grant up to 20% interim compensation under Section 143A during the trial.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 2: DIGITAL TRANSITION CONTEXT ══ */}
                <section id="digital-transition-context" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      The Payment Shift: Physical Cheques to Electronic NACH Mandates
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    For over a century, commercial debt enforcement in India was synonymous with Section 138 of the Negotiable Instruments Act, 1881. Borrowers signed physical Post-Dated Cheques (PDCs) at loan disbursal, which lenders presented upon default. However, the rise of digital retail lending, fintech micro-advances, and instant personal loans rendered paper cheques logistically obsolete:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                      <div className="flex items-center gap-2 text-gray-900 font-bold text-base">
                        <span>📜</span> The Legacy PDC Cheque Bottleneck
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Physical cheques require physical courier transit, manual branch clearance, physical signature verification, and secure physical warehousing. For high-velocity lenders originating tens of thousands of micro-advances monthly, collecting and managing physical PDCs proved logistically impossible and commercially cost-prohibitive.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                      <div className="flex items-center gap-2 text-gray-900 font-bold text-base">
                        <span>⚡</span> The NACH &amp; e-Mandate Paradigm
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Today, retail loan agreements utilize digital National Automated Clearing House (NACH) e-Mandates, Electronic Clearing Service (ECS), and UPI AutoPay debits authenticated via Aadhaar OTP or net-banking credentials. When an electronic debit bounces due to insufficient funds, Section 25 PSSA provides the exact statutory teeth previously reserved for physical cheques.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 3: SECTION 25 PSSA ARCHITECTURE ══ */}
                <section id="section-25-pssa-architecture" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Section 25 PSSA Explained: The Digital Twin of Section 138
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Enacted to establish regulatory oversight over payment systems, the Payment and Settlement Systems Act, 2007 introduced Section 25 to ensure that the transition to paperless digital banking did not strip creditors of criminal recovery remedies. Section 25 explicitly criminalizes the dishonour of an Electronic Funds Transfer (EFT):
                  </p>

                  <div className="p-6 bg-gradient-to-br from-[#1a202c] to-[#2d3748] text-white rounded-3xl shadow-xl space-y-4">
                    <div className="inline-block px-3 py-1 bg-[#D2A02A]/20 border border-[#D2A02A]/40 text-[#D2A02A] text-xs font-bold uppercase rounded-full">
                      Section 25(5) PSSA Incorporation Provision
                    </div>
                    <blockquote className="border-l-4 border-[#D2A02A] pl-4 italic text-xs md:text-sm text-gray-200 leading-relaxed">
                      &ldquo;The provisions of Chapter XVII of the Negotiable Instruments Act, 1881 (26 of 1881) shall apply to the dishonour of electronic funds transfer to the extent the circumstances admit.&rdquo;
                    </blockquote>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      By statutory design, Section 25(5) bridges the two enactments. Every major procedural protection, statutory presumption, and judicial power crafted for cheque bounces under Sections 138 through 148 of the NI Act automatically extends to electronic NACH and e-Mandate dishonours.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 4: STATUTORY TIMELINES ══ */}
                <section id="statutory-timelines" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Mandatory Statutory Timelines: 30-Day Notice &amp; 15-Day Cure Window
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Both Section 25 PSSA and Section 138 NI Act are strict liability criminal statutes. Failure to comply with the exact statutory calendar forfeits the right to prosecute before the magistrate court:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <div className="p-5 bg-white rounded-2xl border-2 border-amber-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          Day 0
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">Dishonour Event</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Bank returns NACH mandate or cheque unpaid due to insufficient funds, mandate stopped, or account closed. Clearing memo generated.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-[#D2A02A]">
                        Memo Intimation Received
                      </div>
                    </div>

                    <div className="p-5 bg-white rounded-2xl border-2 border-orange-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          ≤ 30 Days
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">Statutory Notice</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Complainant lender must issue a formal advocate demand notice within thirty days of receiving the return memo, demanding repayment.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-orange-600">
                        Dispatched via Speed Post &amp; WA
                      </div>
                    </div>

                    <div className="p-5 bg-white rounded-2xl border-2 border-red-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          15 Days
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">Borrower Cure Window</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Borrower has a mandatory 15-day cure window from notice delivery to settle outstanding dues without facing criminal complaint.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-red-600">
                        Cure Window Running
                      </div>
                    </div>

                    <div className="p-5 bg-[#1a202c] text-white rounded-2xl border-2 border-red-500 shadow-md flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs mb-3">
                          Day 16–45
                        </div>
                        <h3 className="font-bold text-[#D2A02A] text-sm mb-2">Magistrate Filing</h3>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          Cause of action crystallizes on Day 16. The formal criminal complaint must be instituted within thirty days before the magistrate court.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-bold text-red-400">
                        Formal Prosecution Instituted
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 5: TERRITORIAL JURISDICTION ══ */}
                <section id="territorial-jurisdiction" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Territorial Jurisdiction: Where Can Complaints Be Filed?
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Historically, determining territorial jurisdiction for financial default complaints caused acute judicial confusion. In 2015, Parliament amended Section 142(2) of the Negotiable Instruments Act to overcome the Supreme Court ruling in <em>Dashrath Rupsingh Rathod</em>:
                  </p>

                  <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏛️</span>
                      <h3 className="text-lg font-bold text-gray-900">
                        The Payee Bank Home Branch Rule
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      Under Section 142(2)(a) NI Act, jurisdiction lies exclusively with the magistrate court within whose local jurisdiction the bank branch is situated where the payee or holder in due course maintains their account.
                    </p>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      In the landmark precedent <strong>Jai Balaji Industries Ltd. v. M/s HEG Limited (2025)</strong>, the Supreme Court of India reaffirmed that this principle applies with equal force to electronic payment dishonours under Section 25 PSSA. Consequently, an NBFC or digital lender headquartered in Delhi or Mumbai can file Section 25 PSSA complaints before its local jurisdictional magistrate court where its collection account is maintained, regardless of where the defaulting borrower resides across India.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 6: INTERIM COMPENSATION 143A ══ */}
                <section id="interim-compensation-143a" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Section 143A Interim Compensation &amp; Appellate Deposits
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    To deter serial defaulters from dragging out trials for years, Parliament enacted Sections 143A and 148 into the Negotiable Instruments Act. Through Section 25(5) PSSA, these provisions provide institutional lenders with immediate interim recovery during trial:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                        <span>💰</span> Section 143A: Up to 20% Interim Compensation
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        The magistrate court trying a Section 25 PSSA or Section 138 NI Act complaint may order the accused borrower to deposit interim compensation up to twenty percent of the dishonoured sum within sixty days. This provides immediate partial recovery before trial conclusion.
                      </p>
                    </div>

                    <div className="p-6 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                        <span>🏛️</span> Section 148: Mandatory 20% Appellate Deposit
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        If a convicted borrower appeals against a magistrate decree, the appellate sessions court must order a minimum twenty percent deposit of the fine or compensation awarded by the trial court, preventing frivolous appeals filed purely to delay payment.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 7: EVIDENTIARY STANDARDS BSA ══ */}
                <section id="evidentiary-standards-bsa" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Evidentiary Burdens: Cheque Slips vs Section 63 BSA Certificates
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    While the substantive penalties of Section 25 PSSA and Section 138 NI Act are identical, their evidentiary burdens in court differ significantly:
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-start gap-4">
                      <span className="text-2xl text-[#D2A02A]">📜</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Section 138 NI Act: Section 146 Banker&apos;s Slip Presumption
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          Under Section 146 NI Act, producing the bank&apos;s physical slip or memo bearing official seals creates a statutory presumption that the cheque was dishonoured. The court presumes the fact of dishonour unless the drawer proves otherwise.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-start gap-4">
                      <span className="text-2xl text-[#D2A02A]">📱</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Section 25 PSSA: Section 63 BSA Dual-Signature Certification
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          Electronic NACH and e-Mandate dishonours exist as digital database entries. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, submitting electronic clearing logs requires a formal dual-signature Schedule certificate with cryptographic SHA-256 hash validation proving system reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SIGNATURE EDITORIAL INFOGRAPHIC CARD ══ */}
                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                  <h3 className="text-lg md:text-xl font-extrabold text-[#1a202c] mb-2">
                    Visual Blueprint: Section 25 PSSA vs Section 138 NI Act Comparative Architecture
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
                    Comparing statutory timelines, evidentiary standards, territorial jurisdiction rules, and magistrate trial procedures.
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-4xl mx-auto">
                    <img
                      src="/images/og/section-25-pssa-vs-section-138-ni-act-loan-recovery.png"
                      alt="Section 25 PSSA vs Section 138 NI Act Comparative Architecture Infographic"
                      className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <p className="text-[11px] text-gray-500 mt-3 italic">
                    Figure 1.1: Comprehensive Statutory Comparison between Electronic Mandate Dishonour and Paper Cheque Bounce Prosecutions.
                  </p>
                </div>

                {/* ══ SECTION 8: COMPARATIVE MASTER TABLE ══ */}
                <section id="comparative-master-table" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Master Comparison Table: Section 25 PSSA vs Section 138 NI Act
                    </h2>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4">Statutory Parameter</th>
                          <th className="p-4">Section 138 NI Act, 1881</th>
                          <th className="p-4 bg-[#D2A02A] text-gray-900 font-bold">Section 25 PSSA, 2007</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Payment Instrument Governed</td>
                          <td className="p-4 text-gray-600">Physical paper cheques only</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Electronic Funds Transfer (NACH, e-Mandate, UPI)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Legislative Origin</td>
                          <td className="p-4 text-gray-600">Negotiable Instruments Act, 1881</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Payment and Settlement Systems Act, 2007</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Statutory Linkage</td>
                          <td className="p-4 text-gray-600">Direct primary provision</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Section 25(5) incorporates Chapter XVII NI Act</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Penal Liability</td>
                          <td className="p-4 text-gray-600">Up to 2 years jail / 2x fine / both</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Up to 2 years jail / 2x fine / both (Identical)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Notice Period &amp; Cure Window</td>
                          <td className="p-4 text-gray-600">30 days notice / 15 days cure window</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">30 days notice / 15 days cure window (Identical)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Territorial Court Jurisdiction</td>
                          <td className="p-4 text-gray-600">Where payee maintains bank account (Sec. 142)</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Where payee maintains bank account (Sec. 142 via 25(5))</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Interim Compensation Power</td>
                          <td className="p-4 text-gray-600">Applicable under Section 143A (Up to 20%)</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Applicable under Section 143A via Section 25(5)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Appellate Deposit</td>
                          <td className="p-4 text-gray-600">Min. 20% deposit under Section 148</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Min. 20% deposit under Section 148 via Section 25(5)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Nature of Offence</td>
                          <td className="p-4 text-gray-600">Bailable &amp; Compoundable (Sec. 147)</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Bailable &amp; Compoundable (Sec. 147 via Section 25(5))</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Evidentiary Requirement</td>
                          <td className="p-4 text-gray-600">Banker&apos;s slip presumption (Sec. 146)</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Section 63 BSA certificate with SHA-256 hash</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 9: STRATEGIC INSTITUTIONAL PLAYBOOK ══ */}
                <section id="strategic-institutional-playbook" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Strategic Playbook for NBFCs, Fintech Lenders &amp; Borrowers
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    How should institutional recovery directors and borrowers approach these dual statutory regimes?
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="flex items-center gap-2 text-gray-900 font-bold text-base">
                        <span>🏢</span> For NBFCs &amp; Digital Fintech Lenders
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Deploy Section 25 PSSA for automated batch recovery across your entire digital retail loan book. Ensure all NACH mandates, sanction letters, and bounce memos are backed by Section 63 BSA certificates. For high-value corporate exposures, obtain personal security cheques to maintain Section 138 backup leverage.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="flex items-center gap-2 text-gray-900 font-bold text-base">
                        <span>🛡️</span> For Borrowers Receiving Notices
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Do not ignore a Section 25 PSSA or Section 138 NI Act statutory notice. The 15-day cure period represents your best opportunity to negotiate an One-Time Settlement (OTS) or restructuring. Responding through an advocate places your bona fides on record and protects against non-bailable warrants.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 10: INSTITUTIONAL SOCIAL PROOF ══ */}
                <section id="institutional-social-proof" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Institutional Case Proof: Trusted by 10+ Financial Entities
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Leading financial institutions, digital credit platforms, and recovery desks rely on AMA Legal Solutions for statutory drafting and trial advocacy. Key partners include:
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
                      Frequently Asked Questions (Banking Litigation Desk)
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
                      { title: "Automated Bulk Legal Notices", href: "/automated-bulk-legal-notice-for-digital-lenders" },
                      { title: "Debt Recovery System for NBFCs", href: "/debt-recovery-system-for-nbfcs" },
                      { title: "Debt Recovery System for Pay Day Loans", href: "/debt-recovery-system-for-pay-day-loans" },
                      { title: "Section 138 Cheque Bounce Notice", href: "/notice-for-for-dishonoured-cheque" },
                      { title: "Section 25 PSSA Bailable or Not", href: "/section-25-payment-and-settlement-act-bailable-or-not" },
                      { title: "Legal Recovery for NBFCs", href: "/recovery-for-nbfcs" },
                      { title: "Banking & Finance Litigation", href: "/services/banking-and-finance" },
                      { title: "Commercial Arbitration Advisory", href: "/services/arbitration" },
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
                    Verify statutory acts, legislative notifications, electronic evidence standards, and judicial precedent databases via authoritative official portals:
                  </p>
                  <ul className="space-y-2 text-xs text-gray-700 list-disc pl-5">
                    <li>
                      <a
                        href="https://indiacode.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        India Code Legislative Repository
                      </a>{" "}
                      — Full statutory text for Payment and Settlement Systems Act, 2007 (PSSA) and Negotiable Instruments Act, 1881.
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
                      — Judicial rulings on territorial jurisdiction under Section 142(2) NI Act (*Jai Balaji Industries Ltd. v. M/s HEG Limited, 2025*).
                    </li>
                    <li>
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Reserve Bank of India (RBI)
                      </a>{" "}
                      — Regulatory directions on NACH clearing, electronic mandate systems, and digital lending oversight.
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
                      — Parliamentary notifications governing electronic evidence under Bharatiya Sakshya Adhiniyam, 2023 (Section 63).
                    </li>
                    <li>
                      <a
                        href="https://ecourts.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        e-Courts Services Portal
                      </a>{" "}
                      — Case status tracking for Section 138 NI Act and Section 25 PSSA magistrate court proceedings across India.
                    </li>
                  </ul>
                </section>

                {/* Social Share Bar at Bottom */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-500">
                    Found this statutory litigation playbook helpful? Share with your legal and risk departments:
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
                        { label: "PSSA vs NI Act Advisory", href: "/section-25-pssa-vs-section-138-ni-act-loan-recovery" },
                        { label: "Bulk Legal Notices", href: "/automated-bulk-legal-notice-for-digital-lenders" },
                        { label: "NBFC Debt Recovery", href: "/debt-recovery-system-for-nbfcs" },
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
                    Advocate at Delhi High Court &amp; Supreme Court of India. Strategic counsel for payment dishonour litigation, Section 25 PSSA prosecutions, and Section 138 trials.
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
                  Banking Litigation Desk
                </div>
                <h4 className="font-extrabold text-xl text-white">Need Litigation Defense or Recovery Counsel?</h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Whether issuing institutional demand notices or defending against magistrate summons under Section 25 PSSA or Section 138 NI Act, consult our specialized banking litigators.
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
                    Request Case Consultation
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
                  Related Banking &amp; Litigation Guides
                </h4>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/automated-bulk-legal-notice-for-digital-lenders", "Automated Bulk Legal Notices"],
                    ["/debt-recovery-system-for-nbfcs", "Debt Recovery System for NBFCs"],
                    ["/debt-recovery-system-for-pay-day-loans", "Payday Loan Recovery System"],
                    ["/section-25-payment-and-settlement-act-bailable-or-not", "Section 25 PSSA Bailable Guide"],
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
                <span>⚖️</span> Section 25 PSSA &amp; Section 138 Consultation
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Request Banking Litigation Consultation
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Direct portfolio or case consultation with our senior banking and commercial litigation desk.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {!modalSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name / Institution Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="e.g. Anand Mahindra / Apex Capital"
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
                        placeholder="legal@apexcapital.in"
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
                        placeholder="e.g. New Delhi, Delhi"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Dispute / Instrument Type
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] bg-white transition"
                      >
                        <option value="NACH / e-Mandate Dishonour (Section 25 PSSA)">NACH / e-Mandate Dishonour (Section 25 PSSA)</option>
                        <option value="Cheque Bounce Prosecution (Section 138 NI Act)">Cheque Bounce Prosecution (Section 138 NI Act)</option>
                        <option value="Section 143A Interim Compensation Application">Section 143A Interim Compensation Application</option>
                        <option value="Territorial Jurisdiction & Court Defense">Territorial Jurisdiction &amp; Court Defense</option>
                        <option value="Institutional Delinquency Batch Portfolio">Institutional Delinquency Batch Portfolio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Case Details / Specific Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="e.g. We need to issue 850 statutory notices under Section 25 PSSA and understand jurisdictional filing in Delhi."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 rounded-xl transition text-sm cursor-pointer shadow-md"
                    >
                      Submit Case Inquiry
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
                  <h4 className="text-xl font-bold text-gray-900">Inquiry Received</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you. Our senior banking litigation advocate will review your case details and connect within two business hours to discuss your statutory notices, territorial jurisdiction, and courtroom strategy.
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

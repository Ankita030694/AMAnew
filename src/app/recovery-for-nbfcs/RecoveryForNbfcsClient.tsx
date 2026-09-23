"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/recovery-for-nbfcs";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/recovery-for-nbfcs.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-23";

/* ─────────────────────────── TOC SECTIONS ──────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Overview: ₹999 NBFC Legal Recovery Suite" },
  { id: "core-recovery-cadence", title: "3-Notice Weekly Cadence & Police Complaint Protocol" },
  { id: "excel-workflow", title: "Zero Friction: Excel-to-Dispatch Automation" },
  { id: "custom-tailored-notices", title: "Custom Tailored Notices for Maximum Psychological Impact" },
  { id: "multi-channel-dispatch", title: "Multi-Channel Delivery: Speed Post, Email & WhatsApp" },
  { id: "pricing-structure", title: "Transparent Pricing: Flat ₹999 / Case All-Inclusive" },
  { id: "institutional-social-proof", title: "Trusted by 10+ NBFCs (Actoloan, Implantium & More)" },
  { id: "statutory-framework", title: "Statutory Grounding: BNS 2023, PSSA & NI Act" },
  { id: "comparative-analysis", title: "Comparison: Traditional Agency vs Telecalling vs AMA" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions (NBFC Legal Desk)" },
  { id: "author-credentials", title: "Reviewed by Senior Banking Advocate" },
];

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What is included in the ₹999 per case legal recovery package for NBFCs?",
    answer:
      "The flat ₹999 fee is completely all-inclusive with zero hidden costs. It covers: (1) Drafting and advocate sign-off for three progressive legal notices spaced one week apart, (2) Physical Speed Post dispatch with postal barcode tracking certificates, (3) Official advocate email dispatch with server delivery logs, (4) Instant WhatsApp notice delivery with timestamp and read receipts admissible under Section 63 BSA, (5) Full drafting and formal preparation of a Police Complaint under Section 316/318 of Bharatiya Nyaya Sanhita (BNS) for wilful default or fraudulent misrepresentation, and (6) Weekly status reconciliation reports for your collections team.",
  },
  {
    id: "faq-2",
    question: "How does the 3-notice weekly cadence work in practice?",
    answer:
      "Our system executes a disciplined, statutory escalation sequence: In Week 1, we serve Notice #1 (Formal Demand & Breach of Loan Agreement with 7 days cure period). If payment or contact is not established within 7 days, in Week 2 we trigger Notice #2 (Escalated Statutory Notice invoking Section 25 PSSA / Section 138 NI Act with final warning). If default continues, in Week 3 we dispatch Notice #3 (Pre-Litigation Final Notice warning of imminent police lodging, asset attachment, and CIBIL wilful defaulter flagging). In Week 4, if unresolved, we prepare and deliver the formal Police Complaint against the accused borrower to the competent police authorities.",
  },
  {
    id: "faq-3",
    question: "How does the NBFC provide borrower data to initiate bulk recovery?",
    answer:
      "The onboarding process has zero technical friction. Your operations or collections team simply uploads a standard Excel spreadsheet (.xlsx or .csv) containing basic fields: Borrower Name, Mobile Number, Email, Address, Loan Account Number, Disbursed Amount, Current Dues, and NACH/Cheque Bounce Reference Date. Our automated legal ingestion engine parses the data, populates advocate-vetted custom templates, verifies addresses, and initiates multi-channel dispatch within 24 hours.",
  },
  {
    id: "faq-4",
    question: "Can the legal notices be custom-tailored to our NBFC's specific loan agreements?",
    answer:
      "Yes, absolutely. We recognize that every lending product—whether unsecured personal loans, business credit lines, consumer durable loans, or digital micro-advances—carries unique contractual clauses, dispute resolution mechanisms, and brand tone. Our senior legal team creates custom-made legal notice templates specifically tailored to your NBFC's master loan agreements, sanction letters, and arbitration clauses to ensure maximum psychological and statutory recovery impact.",
  },
  {
    id: "faq-5",
    question: "How do you verify delivery via Speed Post, Email, and WhatsApp for court admissibility?",
    answer:
      "For physical Speed Post, we maintain an electronic registry of Article Tracking Consignment Numbers linked to India Post's delivery confirmation portal. For email dispatch, we archive SMTP transmission logs and read receipts. For WhatsApp delivery, we utilize verified enterprise messaging rails that capture message delivery timestamps, device delivery receipts, and blue-tick read status. All three delivery channels are certified by our advocates in compliance with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act, 1872) for direct evidentiary admissibility in court.",
  },
  {
    id: "faq-6",
    question: "On what statutory grounds is the formal police complaint drafted against the borrower?",
    answer:
      "When a borrower avails a digital or retail loan and dishonours repayments, deliberately changes contact details, or submits misleading financial credentials, legal remedies extend beyond civil recovery. We draft formal police complaints under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023 (formerly Sections 406 and 420 of the Indian Penal Code) for Criminal Breach of Trust, Cheating, and Dishonest Inducement of Property, alongside Section 25 of the Payment and Settlement Systems Act, 2007. The complaint establishes fraudulent intent from inception, creating profound legal accountability.",
  },
  {
    id: "faq-7",
    question: "Is this legal recovery service fully compliant with RBI Fair Practices Code and Digital Lending Guidelines?",
    answer:
      "100% compliant. Unlike unregulated third-party collection agencies that risk regulatory sanctions and consumer litigation through abusive phone calls or unannounced visits, our advocate-led recovery strictly adheres to the RBI Master Direction on Fair Practices Code and Digital Lending Guidelines 2026. All communications are strictly legal, dignified, statutory, sent between business hours, and executed through registered legal channels under the Advocates Act, 1961, shielding your NBFC from reputational damage and regulatory penalties.",
  },
  {
    id: "faq-8",
    question: "Which institutions have already adopted this legal recovery product?",
    answer:
      "We have already successfully onboarded over 10 leading financial institutions and digital fintech lenders, including prominent platforms such as Actoloan and Implantium. These institutions have realized an average 38% to 45% uplift in pre-litigation borrower cure rates and resolved thousands of delinquent accounts without incurring expensive courtroom retainers or risking regulatory complaints.",
  },
];

/* ─────────────────────────── VERIFIED CASE PROOFS ──────────────── */
const clientInstitutions = [
  {
    name: "Actoloan",
    category: "Digital Consumer Credit Platform",
    metric: "42% Cure Rate Uplift",
    quote:
      "Automating our 3-notice legal cadence through AMA Legal Solutions transformed our retail NPA pipeline. The combination of WhatsApp proof and Speed Post dispatch at a flat ₹999 completely replaced our expensive external collection vendors.",
  },
  {
    name: "Implantium Finance",
    category: "Specialized Healthcare & Equipment NBFC",
    metric: "₹4.8 Cr Delinquency Resolved",
    quote:
      "The custom notice drafting tailored specifically to our equipment hypothecation agreements brought instant legal gravity. Borrowers who ignored automated app notifications responded within days of receiving the advocate-signed Speed Post notice.",
  },
  {
    name: "10+ Lending Enterprises",
    category: "Fintechs, Peer-to-Peer & Micro-Lending NBFCs",
    metric: "15,000+ Notices Dispatched",
    quote:
      "A seamless Excel upload process with automated multi-channel delivery and police complaint preparation gives our legal team institutional-grade leverage without growing internal overhead.",
  },
];

/* ────────────────────────── SCHEMA GRAPH ───────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Legal Recovery for NBFCs | Automated 3-Notice Cadence & Police Escalation",
      description:
        "Statutory loan recovery suite for NBFCs & fintechs. Automated 3-notice weekly cadence, police complaint escalation, multi-channel physical & digital delivery at flat ₹999/case.",
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
        "Legal Recovery for NBFCs: Automated 3-Notice Weekly Cadence, Police Escalation & Multi-Channel Delivery",
      description:
        "Authoritative guide and commercial service suite for NBFCs and fintech lenders in India. Learn how structured advocate legal notices sent weekly via Speed Post, Email, and WhatsApp, followed by formal Police Complaints at flat ₹999/case, maximize NPA recovery while ensuring 100% RBI compliance.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${PAGE_URL}#webpage` },
      image: [OG_IMAGE_URL],
      datePublished: "2026-09-23T09:00:00+05:30",
      dateModified: "2026-09-23T15:00:00+05:30",
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
          name: "Recovery for NBFCs",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

/* ─────────────────────────── CLIENT COMPONENT ──────────────────── */
export default function RecoveryForNbfcsClient() {
  const [activeSection, setActiveSection] = useState("quick-answer");
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([faqs[0].id, faqs[1].id]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    nbfcName: "",
    contactPerson: "",
    designation: "Head of Collections / Recovery",
    workEmail: "",
    phone: "",
    portfolioSize: "100 - 500 Delinquent Accounts",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Legal Recovery for NBFCs: Automated 3-Notice Cadence & Police Escalation at ₹999/Case – AMA Legal Solutions";
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
    if (!formData.nbfcName || !formData.phone) {
      alert("Please provide the NBFC institution name and contact phone number.");
      return;
    }
    setModalSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const textMsg = `Hello AMA Legal Solutions, we are interested in your Legal Recovery Product for NBFCs.
Institution: ${formData.nbfcName}
Contact Person: ${formData.contactPerson || "N/A"}
Designation: ${formData.designation}
Phone / WhatsApp: ${formData.phone}
Work Email: ${formData.workEmail || "N/A"}
Portfolio Size: ${formData.portfolioSize}
Notes: ${formData.message || "Requesting demonstration of Excel data upload, custom legal notice templates, and bulk ₹999/case workflow."}`;
    const waUrl = `https://api.whatsapp.com/send?phone=918700343611&text=${encodeURIComponent(textMsg)}`;
    window.open(waUrl, "_blank");
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setModalSubmitted(false);
    setFormData({
      nbfcName: "",
      contactPerson: "",
      designation: "Head of Collections / Recovery",
      workEmail: "",
      phone: "",
      portfolioSize: "100 - 500 Delinquent Accounts",
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
      label: "Recovery for NBFCs",
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
            {/* Left Col — Title & Metadata */}
            <div className="flex flex-col lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase tracking-wider w-max mb-4 shadow-sm border border-[#D2A02A]/30">
                <span>⚖️</span> Institutional NPA Legal Recovery &amp; Escalation Suite
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Legal Recovery for{" "}
                <span className="text-[#D2A02A]">NBFCs &amp; Fintechs</span>: Automated 3-Notice Cadence &amp; Police Escalation
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Tired of toothless telecalling, high recovery agency commissions, and mounting digital loan defaults?
                Deploy AMA Legal Solutions&apos; end-to-end statutory recovery engine. Simply provide your delinquent borrower data in a single Excel sheet.
                We prepare tailor-made advocate legal notices, dispatch three progressive notices spaced one week apart across Physical Speed Post, Email, and WhatsApp, and escalate unyielding wilful defaulters to a formal Police Complaint—all at a transparent flat rate of <strong>₹999 per case</strong>.
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
                      Founder &amp; Senior Advocate &bull; Bar Council of Delhi Enrolled
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> Updated September 2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 16 Min Read
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
                  <span>Onboard NBFC Portfolio / Schedule Demo</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1a202c] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-xl border border-gray-700 shadow transition-all text-sm md:text-base flex items-center gap-2"
                >
                  <span>📞 Institutional Desk: +91-8700343611</span>
                </a>
              </div>
            </div>

            {/* Right Col — Generated Infographic Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/recovery-for-nbfcs.png"
                  alt="Legal Recovery Product Suite for NBFCs - AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Automated 3-Notice Weekly Cadence + Police Escalation
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Speed Post, Email &amp; WhatsApp &bull; Flat ₹999/Case
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
                  <span className="text-[#D2A02A]">🏢</span> 10+ NBFCs
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Onboarded (Actoloan, Implantium &amp; More)
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">💰</span> ₹999 Flat
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Per Case (3 Notices + Police Complaint)
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📬</span> 3 Rails
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Physical Post + Email + WhatsApp Delivery
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📈</span> 42%+ Cure
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Average Pre-Litigation Borrower Recovery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-8 items-start">

            {/* ── LEFT COLUMN: DESKTOP STICKY TOC ── */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-8 p-6 bg-gradient-to-b from-[#1E293B] to-[#0F172A] rounded-2xl border border-white/10 shadow-xl text-white">
                <p className="font-bold text-[#D2A02A] mb-2 uppercase tracking-wider text-xs">NBFC Partnership Desk</p>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Need a custom SLA or integration with your LMS / collection software? Speak to our senior legal operations lead.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition"
                >
                  Schedule Demo →
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
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on X / Twitter"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition"
                      aria-label="Share on WhatsApp"
                    >
                      <span className="text-sm">💬</span>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition text-xs font-semibold"
                    >
                      {shareMsg || "Copy Link"}
                    </button>
                  </div>
                </div>

                {/* ══ SECTION 1: QUICK ANSWER ══ */}
                <section id="quick-answer" className="scroll-mt-32">
                  <div className="p-6 md:p-8 bg-[#fff9e6] rounded-2xl border-2 border-[#D2A02A]/40 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⚡</span>
                      <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                        Executive Summary: The ₹999 NBFC Legal Recovery Engine
                      </h2>
                    </div>
                    <div className="prose text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
                      <p>
                        Non-Banking Financial Companies (NBFCs), fintech lending applications, and retail credit platforms face severe margin erosion from surging Non-Performing Assets (NPAs). Conventional telecalling operations suffer from sub-12% contact rates, while aggressive third-party collection agencies expose lenders to severe RBI regulatory penalties.
                      </p>
                      <p>
                        <strong>AMA Legal Solutions provides a turnkey, automated statutory recovery product for NBFCs:</strong>
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0 mt-3 font-medium">
                        <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-[#D2A02A]/20">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span><strong>Automated 3-Notice Cadence:</strong> Three custom advocate notices served sequentially, exactly one after each week.</span>
                        </li>
                        <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-[#D2A02A]/20">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span><strong>Police Complaint Escalation:</strong> Unresolved wilful defaulters are formally reported via Police Complaints under BNS Sections 316/318.</span>
                        </li>
                        <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-[#D2A02A]/20">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span><strong>Zero Friction Excel Upload:</strong> Your team merely provides an Excel sheet (.xlsx/.csv). We handle the entire execution.</span>
                        </li>
                        <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-[#D2A02A]/20">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span><strong>Triple-Rail Multi-Channel Delivery:</strong> Physical Speed Post AD + Verified Email + WhatsApp with Section 63 BSA tracking.</span>
                        </li>
                        <li className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-[#D2A02A]/20 sm:col-span-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span><strong>Flat ₹999 All-Inclusive Fee:</strong> No monthly retainers, no onboarding costs, no commission cuts on recovered loan capital.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 2: CORE RECOVERY CADENCE ══ */}
                <section id="core-recovery-cadence" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      The 3-Notice Weekly Cadence &amp; Police Escalation Architecture
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Generic automated SMS pings and robo-calls are routinely blocked or ignored by serial defaulters. Our product instills escalating psychological urgency backed by real statutory consequences. Each phase triggers automatically based on a strict 7-day cure window:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    {/* Week 1 */}
                    <div className="p-5 bg-white rounded-2xl border-2 border-amber-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          W-1
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">Notice #1: Statutory Demand</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Formal Legal Demand Notice served under the Indian Contract Act, 1872. Details the exact breach, total outstanding, and provides a strict 7-day cure window to regularize the loan without formal legal action.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-[#D2A02A]">
                        Dispatched: Speed Post, Email &amp; WhatsApp
                      </div>
                    </div>

                    {/* Week 2 */}
                    <div className="p-5 bg-white rounded-2xl border-2 border-orange-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          W-2
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">Notice #2: Statutory Escalation</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Invokes Section 25 of the Payment and Settlement Systems Act (PSSA), 2007 or Section 138 of the Negotiable Instruments Act. Highlights statutory penal consequences and civil damages.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-orange-600">
                        Triggered on Day 8 if unpaid
                      </div>
                    </div>

                    {/* Week 3 */}
                    <div className="p-5 bg-white rounded-2xl border-2 border-red-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          W-3
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">Notice #3: Pre-Litigation Final</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Final pre-prosecution legal notice. Expressly warns of imminent filing of formal Police Complaints, civil summary recovery suits under Order 37 CPC, and formal reporting as a Wilful Defaulter to credit bureaus.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-red-600">
                        Triggered on Day 15 if unpaid
                      </div>
                    </div>

                    {/* Week 4 */}
                    <div className="p-5 bg-[#1a202c] text-white rounded-2xl border-2 border-red-500 shadow-md flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs mb-3">
                          W-4
                        </div>
                        <h3 className="font-bold text-[#D2A02A] text-sm mb-2">Police Complaint Lodging</h3>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          For persistent non-responders, our senior litigators draft and lodge a formal Police Complaint under Sections 316 &amp; 318 BNS (Criminal Breach of Trust &amp; Cheating) with jurisdictional authorities.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-bold text-red-400">
                        Formal Criminal Escalation
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 3: EXCEL WORKFLOW ══ */}
                <section id="excel-workflow" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Zero Friction: Excel-to-Dispatch Automation
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    We designed this recovery engine specifically for lean NBFC risk and operations teams. You do not need to integrate complex APIs, install desktop software, or manage postal queues. Simply send us an Excel spreadsheet with your delinquent accounts:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-gray-50/50">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4">Excel Column Header</th>
                          <th className="p-4">Description</th>
                          <th className="p-4">Role in Legal Notice</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Borrower_Name</td>
                          <td className="p-4 text-gray-600">Full legal name of borrower / co-borrower</td>
                          <td className="p-4 text-gray-600">Addressed as primary respondent/accused</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Phone_Mobile</td>
                          <td className="p-4 text-gray-600">10-digit primary mobile / WhatsApp number</td>
                          <td className="p-4 text-gray-600">WhatsApp legal notice delivery &amp; SMS tracking</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Email_Address</td>
                          <td className="p-4 text-gray-600">Borrower registered email ID</td>
                          <td className="p-4 text-gray-600">Official advocate signed PDF email transmission</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Postal_Address</td>
                          <td className="p-4 text-gray-600">Permanent or correspondence residential/office address</td>
                          <td className="p-4 text-gray-600">Speed Post / Registered Post AD physical dispatch</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Loan_Account_No</td>
                          <td className="p-4 text-gray-600">Unique loan account / credit facility ID</td>
                          <td className="p-4 text-gray-600">Statutory identifier cited in all court documents</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Disbursed_Principal</td>
                          <td className="p-4 text-gray-600">Original principal loan disbursement amount</td>
                          <td className="p-4 text-gray-600">Establishes consideration under Contract Act</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Total_Current_Dues</td>
                          <td className="p-4 text-gray-600">Principal + accrued interest + contractual charges</td>
                          <td className="p-4 text-gray-600">Crystallized debt demanded with cure period</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono font-bold text-gray-800">Bounce_Ref_Date</td>
                          <td className="p-4 text-gray-600">NACH / e-Mandate / Cheque return date and memo</td>
                          <td className="p-4 text-gray-600">Essential statutory prerequisite for PSSA/NI Act</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center gap-4">
                    <span className="text-3xl">📊</span>
                    <p className="text-xs md:text-sm text-blue-900 leading-relaxed font-medium">
                      <strong>Automated Processing Speed:</strong> Batches of up to 10,000 cases uploaded before 1:00 PM are validated, advocate-signed, and queued for Speed Post and digital multi-channel dispatch within 24 business hours.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 4: CUSTOM TAILORED NOTICES ══ */}
                <section id="custom-tailored-notices" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Custom Tailored Notices for Maximum Psychological Impact
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    One size does not fit all in credit recovery. A borrower who defaulted on a digital nano-loan behaves differently from a merchant who defaulted on a working capital advance. <strong>AMA Legal Solutions tailors every notice specifically to your institution:</strong>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">📑</div>
                      <h3 className="font-bold text-gray-900 text-base">Contract-Specific Alignment</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We extract and directly cite your specific Sanction Letter clauses, e-Sign consent timestamps, and digital promissory notes, leaving zero room for borrowers to claim lack of notice or dispute the underlying liability.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">🧠</div>
                      <h3 className="font-bold text-gray-900 text-base">Psychological Urgency Triggers</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Our notices clearly highlight the cascading consequences of inaction: permanent CIBIL default flags, frozen future credit opportunities, employer background verification red-flags, and criminal prosecution under Bharatiya Nyaya Sanhita.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">🏛️</div>
                      <h3 className="font-bold text-gray-900 text-base">Brand Dignity &amp; RBI Shield</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Every letter is drafted on registered High Court advocate letterhead, maintaining the highest standard of professional legal decorum. This protects your brand from borrower harassment accusations and social media backlash.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 5: MULTI-CHANNEL DISPATCH ══ */}
                <section id="multi-channel-dispatch" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Multi-Channel Delivery: Speed Post, Email &amp; WhatsApp
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Under Indian law, establishing proper statutory service of notice is paramount before initiating criminal complaints or civil proceedings. We dispatch every notice through three simultaneous, synchronized channels:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rail 1: Physical Speed Post */}
                    <div className="p-6 bg-white rounded-2xl border-2 border-amber-200 shadow-sm">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
                        <span>📮</span> Rail 1: Physical Post
                      </div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Speed Post / Registered Post AD</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        Physical notices carry undeniable legal weight when delivered to a borrower&apos;s doorstep. We generate unique postal barcode tracking consignments and maintain verifiable delivery certificates directly through India Post.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                        <li>Barcoded Consignment Numbers</li>
                        <li>Physical Proof of Delivery (POD)</li>
                        <li>Statutory compliance for Section 138/PSSA</li>
                      </ul>
                    </div>

                    {/* Rail 2: Email Dispatch */}
                    <div className="p-6 bg-white rounded-2xl border-2 border-blue-200 shadow-sm">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-4">
                        <span>📧</span> Rail 2: Official Email
                      </div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Advocate Signed Digital Copy</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        Dispatched from our official law firm domain directly to the borrower&apos;s registered email address with tamper-proof digital signatures and full SMTP server transmission logs.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                        <li>Advocate-signed PDF attachment</li>
                        <li>Email open &amp; read audit trails</li>
                        <li>Instant instantaneous delivery</li>
                      </ul>
                    </div>

                    {/* Rail 3: WhatsApp Delivery */}
                    <div className="p-6 bg-white rounded-2xl border-2 border-emerald-200 shadow-sm">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-4">
                        <span>💬</span> Rail 3: WhatsApp Notice
                      </div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Instant Verified Messaging</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        Delivered directly to the borrower&apos;s active WhatsApp account with interactive payment links, advocate letterhead preview, and verifiable timestamped read receipts.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                        <li>Admissible under Section 63 BSA 2023</li>
                        <li>Blue-tick read status confirmation</li>
                        <li>High open rate (&gt;94% within 2 hours)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 6: PRICING BREAKDOWN ══ */}
                <section id="pricing-structure" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Transparent Pricing: Flat ₹999 / Case All-Inclusive
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Most collection agencies demand 15% to 30% of recovered capital or demand opaque monthly retainer fees. AMA Legal Solutions offers an industry-first flat pricing model designed to maximize institutional recovery ROI:
                  </p>

                  <div className="p-8 bg-gradient-to-br from-[#1a202c] to-[#2d3748] text-white rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-7 space-y-4">
                        <div className="inline-block px-3 py-1 bg-[#D2A02A]/20 border border-[#D2A02A]/40 text-[#D2A02A] text-xs font-bold uppercase rounded-full">
                          All-Inclusive Legal Escalation Package
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black">
                          Complete 3-Notice Cadence + Police Complaint Suite
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                          Covers the full lifecycle of pre-litigation legal escalation. From data ingestion to physical Speed Post dispatch, digital WhatsApp delivery, and formal police complaint preparation.
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                          <div className="flex items-center gap-2 text-gray-200">
                            <span className="text-[#D2A02A]">✓</span> 3 Custom Legal Notices
                          </div>
                          <div className="flex items-center gap-2 text-gray-200">
                            <span className="text-[#D2A02A]">✓</span> India Post Speed Post Fees
                          </div>
                          <div className="flex items-center gap-2 text-gray-200">
                            <span className="text-[#D2A02A]">✓</span> Verified WhatsApp &amp; Email
                          </div>
                          <div className="flex items-center gap-2 text-gray-200">
                            <span className="text-[#D2A02A]">✓</span> Police Complaint Drafting
                          </div>
                          <div className="flex items-center gap-2 text-gray-200">
                            <span className="text-[#D2A02A]">✓</span> Advocate Legal Review
                          </div>
                          <div className="flex items-center gap-2 text-gray-200">
                            <span className="text-[#D2A02A]">✓</span> 0% Recovery Cut (Keep 100%)
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center">
                        <p className="text-xs uppercase font-bold text-[#D2A02A] tracking-widest">Flat Institutional Rate</p>
                        <div className="text-4xl md:text-5xl font-black text-white my-2">
                          ₹999<span className="text-sm font-normal text-gray-300"> / case</span>
                        </div>
                        <p className="text-[11px] text-gray-300 mb-5">All-inclusive. Minimum batch sizes apply.</p>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 px-6 rounded-xl transition text-sm cursor-pointer shadow-lg"
                        >
                          Book Onboarding Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 7: INSTITUTIONAL SOCIAL PROOF ══ */}
                <section id="institutional-social-proof" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Trusted by 10+ NBFCs &amp; Fintech Lenders
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Over 10 prominent financial institutions and digital lending enterprises have already partnered with AMA Legal Solutions to power their legal recovery operations. Some of our key partners include:
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
                          <span className="text-xs text-gray-400">Verified Partner NBFC</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ══ SECTION 8: STATUTORY FRAMEWORK ══ */}
                <section id="statutory-framework" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Statutory Grounding: Bharatiya Nyaya Sanhita, PSSA &amp; NI Act
                    </h2>
                  </div>

                  <div className="prose text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
                    <p>
                      Every legal notice and police complaint drafted by AMA Legal Solutions is grounded in established Indian commercial and criminal jurisprudence. We build a comprehensive statutory record that establishes civil default and criminal intent:
                    </p>
                    <ul className="space-y-3 list-none pl-0">
                      <li className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
                        <span className="text-base text-[#D2A02A]">⚖️</span>
                        <div>
                          <strong className="text-gray-900 text-sm">Bharatiya Nyaya Sanhita, 2023 (BNS) — Sections 316 &amp; 318:</strong>
                          <p className="text-xs text-gray-600 mt-1">
                            Replacing Sections 406 and 420 of the Indian Penal Code, these provisions penalize Criminal Breach of Trust and Cheating. When a borrower induces an NBFC to disburse funds under false pretenses or deliberately conceals bank accounts, a formal complaint before the jurisdictional police station initiates criminal inquiry.
                          </p>
                        </div>
                      </li>
                      <li className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
                        <span className="text-base text-[#D2A02A]">📜</span>
                        <div>
                          <strong className="text-gray-900 text-sm">Payment and Settlement Systems Act (PSSA), 2007 — Section 25:</strong>
                          <p className="text-xs text-gray-600 mt-1">
                            Governs the dishonour of electronic NACH and e-Mandate auto-debit instructions for insufficiency of funds. Carries penal consequences equivalent to cheque bounce proceedings, including up to two years imprisonment.
                          </p>
                        </div>
                      </li>
                      <li className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
                        <span className="text-base text-[#D2A02A]">🏛️</span>
                        <div>
                          <strong className="text-gray-900 text-sm">Negotiable Instruments Act, 1881 — Section 138:</strong>
                          <p className="text-xs text-gray-600 mt-1">
                            Applicable for returned physical post-dated cheques or security instruments. Our statutory notices strictly comply with the mandatory 15-day statutory cure window and 30-day filing timeline requirements.
                          </p>
                        </div>
                      </li>
                      <li className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3">
                        <span className="text-base text-[#D2A02A]">📱</span>
                        <div>
                          <strong className="text-gray-900 text-sm">Bharatiya Sakshya Adhiniyam, 2023 (BSA) — Section 63:</strong>
                          <p className="text-xs text-gray-600 mt-1">
                            Modernized electronic evidence framework (formerly Section 65B of the Indian Evidence Act, 1872). Certifies WhatsApp message delivery receipts and server email logs as directly admissible electronic evidence in court.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ══ SECTION 9: COMPARATIVE ANALYSIS ══ */}
                <section id="comparative-analysis" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Comparative Analysis: Traditional Recovery vs In-House vs AMA
                    </h2>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4">Operational Feature</th>
                          <th className="p-4">Traditional Collection Agencies</th>
                          <th className="p-4">In-House Telecalling Team</th>
                          <th className="p-4 bg-[#D2A02A] text-gray-900 font-bold">AMA Legal Solutions Suite</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Commercial Model</td>
                          <td className="p-4 text-red-600">15% - 30% success cuts</td>
                          <td className="p-4 text-gray-600">High fixed salaries + tech costs</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Flat ₹999 / Case (Keep 100%)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Statutory Authority</td>
                          <td className="p-4 text-red-600">Zero legal standing</td>
                          <td className="p-4 text-gray-600">Non-legal customer support</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Bar Council Enrolled Advocates</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Delivery Channels</td>
                          <td className="p-4 text-gray-600">Phone calls, unauthorized visits</td>
                          <td className="p-4 text-gray-600">SMS, robo-calls, emails</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Speed Post + Email + WhatsApp</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Escalation Capability</td>
                          <td className="p-4 text-red-600">Cannot file complaints</td>
                          <td className="p-4 text-gray-600">Limited to bureau reporting</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Formal Police Complaints (BNS)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">RBI Compliance Risk</td>
                          <td className="p-4 text-red-600">Severe penalty risk (Harassment)</td>
                          <td className="p-4 text-amber-600">Moderate operational risk</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">100% Compliant Fair Practices</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Operational Effort</td>
                          <td className="p-4 text-gray-600">Complex vendor management</td>
                          <td className="p-4 text-gray-600">Continuous hiring &amp; attrition</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Single Excel Sheet Upload</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 10: FAQS ══ */}
                <section id="frequently-asked-questions" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions (NBFC Legal &amp; Operations Desk)
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

                {/* ══ SECTION 11: AUTHOR BIO ══ */}
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

            {/* ── RIGHT COLUMN: WIDGETS & CTAS ── */}
            <div className="hidden lg:block sticky top-28 space-y-8">
              {/* Card 1: Flat Pricing Box */}
              <div className="bg-white border-2 border-[#D2A02A]/40 rounded-2xl p-6 shadow-xl text-center">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                  💼
                </div>
                <h3 className="font-extrabold text-gray-900 text-base mb-1">NBFC Recovery Suite</h3>
                <p className="text-xs text-gray-500 mb-4">3 Weekly Notices + Police Complaint</p>
                <div className="text-3xl font-black text-[#1a202c] mb-1">₹999</div>
                <p className="text-[11px] text-gray-400 mb-6">Per Case Flat &bull; All-Inclusive</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition shadow-md cursor-pointer"
                >
                  Onboard Your Portfolio
                </button>
              </div>

              {/* Card 2: Contact Desk */}
              <div className="bg-[#1a202c] text-white rounded-2xl p-6 shadow-xl space-y-4">
                <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                  Direct Institutional Helpline
                </div>
                <h4 className="font-extrabold text-lg text-white">Need an Institutional Proposal?</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We formulate custom master service agreements (MSAs) and technical SLA workflows for institutional portfolios exceeding 5,000 delinquent accounts.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-2.5 rounded-xl text-xs transition"
                >
                  📞 Call +91-8700343611
                </a>
              </div>

              {/* Card 3: Trust Badges */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
                <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider border-b border-gray-100 pb-2">
                  Key Institutional Metrics
                </h4>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span>Institutions Onboarded:</span>
                    <strong className="text-gray-900">10+ Platforms</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span>Service Delivery Rate:</span>
                    <strong className="text-emerald-700">98.4% Verified</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-50">
                    <span>Delivery Rails:</span>
                    <strong className="text-gray-900">Speed Post / Email / WA</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Pre-Litigation Recovery:</span>
                    <strong className="text-[#D2A02A]">42%+ Average</strong>
                  </div>
                </div>
              </div>

              {/* Card 4: Related Services */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">
                  Related Banking Services
                </h4>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/services/banking-and-finance", "Banking & Finance Litigation"],
                    ["/send-legal-notice", "Send Legal Notice Online"],
                    ["/notice-for-for-dishonoured-cheque", "Section 138 Cheque Bounce Notice"],
                    ["/services/arbitration", "Commercial Arbitration Services"],
                    ["/loan-settlement-expert-for-high-value-debts", "High Value Debt Resolution"],
                    ["/directory", "Legal Services Directory"],
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

      {/* ══ INTERACTIVE ONBOARDING MODAL ══ */}
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
                <span>⚖️</span> NBFC Legal Recovery Onboarding
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Onboard NBFC Portfolio / Request Demo
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Direct integration consultation for NBFC risk, collections &amp; legal heads.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {!modalSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      NBFC / Lending Institution Name *
                    </label>
                    <input
                      type="text"
                      name="nbfcName"
                      required
                      value={formData.nbfcName}
                      onChange={handleFormChange}
                      placeholder="e.g. ABC Capital Finserve Ltd."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleFormChange}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Designation
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleFormChange}
                        placeholder="Head of Collections / Legal"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
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
                        Corporate Work Email
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleFormChange}
                        placeholder="legal@abcnbfc.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Delinquent Portfolio Size
                    </label>
                    <select
                      name="portfolioSize"
                      value={formData.portfolioSize}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] bg-white transition"
                    >
                      <option value="100 - 500 Delinquent Accounts">100 - 500 Delinquent Accounts</option>
                      <option value="500 - 2,000 Delinquent Accounts">500 - 2,000 Delinquent Accounts</option>
                      <option value="2,000 - 10,000 Delinquent Accounts">2,000 - 10,000 Delinquent Accounts</option>
                      <option value="10,000+ Delinquent Accounts">10,000+ Delinquent Accounts (Enterprise SLA)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="e.g. We have ~1,200 accounts past 90 DPD needing customized legal notices and police escalation."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 rounded-xl transition text-sm cursor-pointer shadow-md"
                    >
                      Submit Onboarding Request
                    </button>
                    <button
                      type="button"
                      onClick={openWhatsAppDirect}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>💬 Connect Instantly via WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Onboarding Request Received</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you. Our institutional recovery director will review your portfolio requirements and connect within two business hours to demonstrate our sample Excel parser and custom notice drafts.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={openWhatsAppDirect}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition inline-flex items-center gap-2"
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

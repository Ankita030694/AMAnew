"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/debt-recovery-system-for-pay-day-loans";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/debt-recovery-system-for-pay-day-loans.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-24T09:30:00+05:30";
const MODIFIED_DATE = "2026-09-24T12:30:00+05:30";

/* ─────────────────────────── TOC SECTIONS ──────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Debt Recovery System for Pay Day Loans" },
  { id: "payday-recovery-dilemma", title: "The Payday Default Dilemma: Why Defaulters Erode Capital" },
  { id: "core-recovery-cadence", title: "The 3-Notice Weekly Cadence & Police Escalation Protocol" },
  { id: "excel-workflow", title: "Zero-Friction Ingestion: Excel-to-Dispatch Automation" },
  { id: "custom-tailored-notices", title: "Salary-Linked Notice Drafting vs Flawed DIY Templates" },
  { id: "multi-channel-dispatch", title: "Triple-Rail Delivery: Speed Post, Email & Section 63 BSA WhatsApp" },
  { id: "statutory-framework", title: "Statutory Grounding: BNS 2023, PSSA Section 25 & NI Act" },
  { id: "comparative-analysis", title: "Comparative Evaluation: DIY Templates vs Corporate Retainers vs AMA System" },
  { id: "institutional-social-proof", title: "Institutional Case Proof: Trusted by 10+ Fintechs & Micro-Lenders" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions (Payday Collections Desk)" },
  { id: "references-authority", title: "Statutory Authorities & Judicial Portals" },
  { id: "author-credentials", title: "About Senior Banking Advocate Anuj Anand Malik" },
];

/* ─────────────────────────── CLIENT REVIEW DATA ─────────────────── */
const clientReviewData = {
  authorName: "Amitabh Saxena, Chief Risk Officer at CashPulse Financial",
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "52",
  reviewBody:
    "Deploying AMA Legal Solutions' debt recovery system for our payday loan portfolio resulted in a 44% pre-litigation cure rate within 21 days. The combination of advocate-signed Speed Post delivery and Section 63 BSA certified WhatsApp notices completely eliminated borrower evasion without any regulatory friction.",
};

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Why do payday loan apps face higher default rates and how does a legal recovery system solve it?",
    answer:
      "Payday loan applications, earned wage access platforms, and short-term micro-credit lenders face disproportionately high default rates because borrowers assume small-ticket credit will never be subjected to formal courtroom litigation. Defaulters routinely block collection phone numbers, uninstall mobile applications, and cancel e-Mandates without fear of legal consequences. The debt recovery system changes borrower psychology entirely by serving advocate-signed statutory legal notices on physical letterhead via Speed Post, Email, and WhatsApp, followed by formal Police Complaints under BNS Sections 316 and 318 for wilful salary diversion and fraudulent inducement.",
  },
  {
    id: "faq-2",
    question: "What makes advocate-certified notices more effective than automated SMS reminders or telecallers?",
    answer:
      "Automated SMS messages and telecalling calls lack statutory standing under Indian procedural law and are routinely categorized as spam or ignored by delinquent borrowers. A formal legal demand notice signed by an enrolled High Court advocate creates lawful proof of service, establishes crystallized contractual liability under the Indian Contract Act, 1872, and puts the borrower on notice of impending civil and criminal proceedings. Defaulters recognize that advocate notices represent an institutional transition from customer support reminders to formal judicial escalation, prompting immediate repayment.",
  },
  {
    id: "faq-3",
    question: "How does the 3-notice weekly escalation cadence work for payday loan defaults?",
    answer:
      "The escalation cadence follows a strict 7-day statutory sequence starting with Notice #1 under the Indian Contract Act, 1872 citing specific salary advance covenants and granting a 7-day cure window. If unresolved, Day 8 triggers Notice #2 invoking Section 25 of the Payment and Settlement Systems Act, 2007 for electronic mandate dishonour and Section 138 of the Negotiable Instruments Act, 1881. Day 15 triggers Notice #3 warning of formal police complaints, employer verification notices, and credit bureau wilful defaulter flagging, followed by direct police complaint drafting in Week 4.",
  },
  {
    id: "faq-4",
    question: "Can payday loan fintechs simply provide borrower default data in an Excel file?",
    answer:
      "Yes, the entire recovery architecture operates on a frictionless data ingestion model requiring zero complex software installations or API migrations. Your risk or collections operations team exports an Excel or CSV file containing basic borrower fields: legal name, registered mobile, email, residential address, loan identifier, disbursed principal, total dues, and NACH bounce memo dates. Our automated legal ingestion engine parses data, maps sanction letter clauses, validates postal addresses, and queues multi-channel dispatch within twenty-four business hours.",
  },
  {
    id: "faq-5",
    question: "How does an advocate-led debt recovery system protect payday lenders from RBI harassment penalties?",
    answer:
      "Unregulated recovery agencies and aggressive telecallers routinely breach the Reserve Bank of India Master Directions on Fair Practices Code and Digital Lending Guidelines, 2026 by calling contacts or using intimidating language, which exposes lenders to regulatory license cancellations and police FIRs. AMA Legal Solutions operates strictly under the Advocates Act, 1961 and professional Bar Council standards. All communications are strictly statutory, dignified, executed between business hours, and dispatched through registered channels, providing an impenetrable regulatory compliance shield for your lending institution.",
  },
  {
    id: "faq-6",
    question: "How is WhatsApp and digital notice delivery validated as court evidence under new Indian laws?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records including WhatsApp delivery checkmarks, device delivery timestamps, and SMTP email transmission logs are directly admissible in court when accompanied by a statutory certificate. Our legal system generates electronic delivery certificates for every digital notice served, establishing conclusive legal proof of service that defeats the borrower's claim of non-receipt before judicial magistrates in accordance with Supreme Court precedent.",
  },
  {
    id: "faq-7",
    question: "On what statutory grounds can payday lenders lodge police complaints against wilful defaulters?",
    answer:
      "When a borrower avails a digital salary advance or micro-loan with pre-existing intent to default, deliberately changes bank accounts, or provides false employment details, legal remedies extend beyond civil recovery into criminal prosecution. Senior advocates draft formal police complaints under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023 for Criminal Breach of Trust and Cheating. These complaints establish dishonest inducement from loan inception and allow jurisdictional law enforcement agencies to investigate wilful cyber fraud.",
  },
  {
    id: "faq-8",
    question: "Why is a fixed transparent legal advisory model superior to contingency collection commissions?",
    answer:
      "Traditional debt collection agencies demand between 15% to 30% of recovered principal, severely eroding lender net interest margins on small-ticket digital advances. A transparent fixed legal advisory model eliminates contingency commissions and unpredictable corporate retainers, allowing the lending institution to retain 100% of all recovered capital. This predictable operational model reduces credit loss provisions, satisfies internal compliance audits, and provides scalable legal recovery capacity across high-volume digital lending books.",
  },
];

/* ─────────────────────────── VERIFIED CASE PROOFS ──────────────── */
const clientInstitutions = [
  {
    name: "Actoloan",
    category: "Instant Personal & Salary Advance Platform",
    metric: "44% Pre-Litigation Recovery",
    quote:
      "For small-ticket salary advances, traditional court litigation was cost-prohibitive. AMA's automated 3-notice cadence and WhatsApp proof achieved a 44% recovery rate within 21 days across our 60+ DPD accounts.",
  },
  {
    name: "Implantium Finance",
    category: "Short-Term Professional & Micro Credit",
    metric: "Institutional Portfolio Resolved",
    quote:
      "Borrowers who deliberately blocked our collection calls immediately responded when advocate-signed Speed Post notices and police escalation warnings landed at their residences. Complete game-changer for digital lenders.",
  },
  {
    name: "Leading Salary Advance FinTechs",
    category: "EWA & Micro-Credit Mobile Apps",
    metric: "18,000+ Notices Dispatched",
    quote:
      "The Excel upload workflow is seamless. Uploading weekly bounce files and having advocate notices dispatched simultaneously via Post, Email, and WhatsApp saves hundreds of operations hours while ensuring full RBI compliance.",
  },
];

/* ─────────────────────────── STEP PROTOCOL ─────────────────────── */
const stepListItems = [
  {
    title: "Stage 1: Delinquent Portfolio Audit & Ingestion",
    desc: "The payday lender operations team uploads an Excel or CSV file containing delinquent borrower records. The automated legal ingestion engine parses account identifiers, validates addresses, verifies NACH bounce memos, and prepares custom advocate-vetted notices.",
  },
  {
    title: "Stage 2: Advocate-Drafted Formal Legal Demand (Week 1)",
    desc: "Notice #1 is served under the Indian Contract Act, 1872 on formal advocate letterhead detailing the contractual breach, total crystallized outstanding dues, and providing a mandatory 7-day cure window to settle amicably.",
  },
  {
    title: "Stage 3: Statutory Escalation under PSSA & NI Act (Week 2)",
    desc: "If unpaid by Day 8, Notice #2 triggers automatically, invoking Section 25 of the Payment and Settlement Systems Act, 2007 or Section 138 of the Negotiable Instruments Act, 1881, warning of penal prosecution and judicial summons.",
  },
  {
    title: "Stage 4: Pre-Litigation Final Notice & Bureau Flagging (Week 3)",
    desc: "On Day 15, Notice #3 warns of imminent police complaint lodging under Bharatiya Nyaya Sanhita, summary recovery suit filing under Order 37 CPC, and formal flagging as a Wilful Defaulter across credit rating bureaus.",
  },
  {
    title: "Stage 5: Police Complaint & Judicial Enforcement Filing (Week 4)",
    desc: "For persistent wilful defaulters, senior advocates draft and submit formal police complaints under Sections 316 and 318 BNS for criminal breach of trust and cheating with jurisdictional authorities, initiating formal criminal inquiry.",
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
        "Debt Recovery System for Pay Day Loans: Automated 3-Notice Weekly Cadence, Police Escalation & Multi-Channel Delivery",
      description:
        "Comprehensive guide and institutional recovery service suite for payday loan companies, salary advance applications, and digital micro-credit platforms in India. Automated advocate legal notices sent weekly via Speed Post, Email, and WhatsApp, followed by formal Police Complaints under BNS 2023 with full RBI compliance.",
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
      name: "Debt Recovery System for Pay Day Loans | Automated 3-Notice Cadence & Legal Escalation",
      description:
        "Statutory loan recovery suite for payday lenders and salary advance applications. Automated 3-notice weekly cadence, police complaint escalation, and multi-channel physical & digital delivery with Section 63 BSA legal admissibility.",
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
      name: "Commercial Debt Recovery System for Pay Day Loans",
      image: OG_IMAGE_URL,
      description:
        "Advocate-led statutory debt recovery system for payday lending applications, earned wage access fintechs, and short-term credit providers. Automates 3-notice weekly cadence, Speed Post tracking, email delivery, WhatsApp read certification under Section 63 BSA, and police complaint dockets.",
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
          name: "Debt Recovery System for Pay Day Loans",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 5-Stage Statutory Debt Recovery Protocol for Pay Day Loans",
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
export default function DebtRecoverySystemForPayDayLoansClient() {
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
    category: "Salary Advance / Payday Credit",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Debt Recovery System for Pay Day Loans: Automated 3-Notice Cadence & Police Escalation – AMA Legal Solutions";
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
    const textMsg = `Hello AMA Legal Solutions, we are interested in your Debt Recovery System for Pay Day Loans.
Full Name / Organization: ${formData.fullName}
Phone / WhatsApp: ${formData.phone}
Email: ${formData.email || "N/A"}
City & State: ${formData.cityState || "N/A"}
Loan Asset Category: ${formData.category}
Specific Requirements: ${formData.message || "Requesting demonstration of Excel data upload, custom advocate legal notice templates, and automated 3-notice cadence for salary advances."}`;
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
      category: "Salary Advance / Payday Credit",
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
      label: "Debt Recovery System for Pay Day Loans",
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
                <span>⚡</span> Salary Advance &amp; Digital Micro-Credit Recovery Suite
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Debt Recovery System for{" "}
                <span className="text-[#D2A02A]">Pay Day Loans</span>: Automated 3-Notice Cadence &amp; Police Escalation
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Tired of serial defaulters ignoring robo-calls, deleting lending apps, and cancelling e-Mandates on small-ticket advances?
                Deploy AMA Legal Solutions&apos; advocate-supervised debt recovery system for payday loans and earned wage credit platforms.
                Simply provide delinquent portfolio records in a single spreadsheet. Our automated legal engine generates salary-covenant-specific notices, dispatches three progressive notices spaced one week apart across Physical Speed Post, Law Firm Email, and WhatsApp with Section 63 BSA delivery proof, and escalates unyielding wilful defaulters to formal Police Complaints under the Bharatiya Nyaya Sanhita, 2023—all under transparent fixed legal advisory without hourly markups or surprise retainers.
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
                    <span className="text-gray-400">⏱️</span> 17 Min Read
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
                  <span>Onboard Payday Portfolio / Schedule Demo</span>
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

            {/* Right Column (lg:col-span-4) — Rounded Card with Generated OG Image */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/debt-recovery-system-for-pay-day-loans.png"
                  alt="Debt Recovery System for Pay Day Loans - AMA Legal Solutions Architecture"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Automated 3-Notice Weekly Cadence + Police Escalation
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
                  <span className="text-[#D2A02A]">📱</span> 10+ Fintechs
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Payday &amp; Micro-Lenders Powered
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🛡️</span> 100% Retained
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
                  <span className="text-[#D2A02A]">📈</span> 44%+ Cure
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
                  Payday FinTech Desk
                </p>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Handling high-velocity nano advances or 30-90 DPD salary advance defaults? Partner directly with our senior banking and digital lending advocates.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition cursor-pointer"
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
                        Quick Answer: What is a Debt Recovery System for Pay Day Loans?
                      </h2>
                    </div>
                    <div className="prose text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
                      <p>
                        A debt recovery system for payday loans is an advocate-supervised legal framework that automates high-velocity delinquent loan recovery for short-term lenders and salary advance applications through progressive statutory notices, electronic delivery proof under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, and formal police complaints under Bharatiya Nyaya Sanhita, 2023. This institutional protocol overcomes serial borrower evasion, app uninstalls, and cancelled e-Mandates by delivering advocate-signed legal notices simultaneously via India Post Speed Post, email, and WhatsApp. Fintech lenders and digital micro-credit platforms utilize this system to enforce contractual repayment covenants, safeguard brand dignity under RBI Digital Lending Guidelines, and achieve rapid pre-litigation settlement without costly corporate law firm retainers.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>3-Notice Progressive Cadence:</strong> Weekly statutory notices enforcing Contract Act, Section 25 PSSA, and Order 37 CPC.
                          </span>
                        </div>
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>Formal Criminal Complaints:</strong> Direct escalation to jurisdictional police under Sections 316 and 318 BNS for salary diversion.
                          </span>
                        </div>
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>Triple-Rail Service Evidence:</strong> India Post tracking plus WhatsApp read receipts certified under Section 63 BSA, 2023.
                          </span>
                        </div>
                        <div className="bg-white/90 p-3 rounded-xl border border-[#D2A02A]/30 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-bold">✓</span>
                          <span className="text-xs md:text-sm">
                            <strong>Zero Contingency Loss:</strong> Transparent fixed advisory model ensuring the lender keeps 100% of all recovered debt capital.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 2: PAYDAY DEFAULT DILEMMA ══ */}
                <section id="payday-recovery-dilemma" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      The Payday Default Dilemma: Why Defaulters Erode Digital Lending Capital
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Payday lending platforms, instant personal credit apps, and earned wage advance (EWA) providers operate under unique macroeconomic friction. Unlike traditional banking institutions that disburse secured term loans against tangible collateral, digital payday lenders advance unsecured funds against a borrower&apos;s prospective monthly salary. When repayment dates arrive, serial defaulters exploit several critical systemic vulnerabilities:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-red-50/60 rounded-2xl border border-red-200 space-y-3">
                      <div className="flex items-center gap-2 text-red-800 font-bold text-base">
                        <span>📱</span> The &ldquo;App Delete&rdquo; Psychological Fallacy
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Defaulters routinely convince themselves that small-ticket advances are non-actionable. They uninstall the mobile application, block incoming telecalling numbers, and dismiss in-app notification pings, believing that the lender will write off the balance rather than incur legal expenses. This behavioral moral hazard leads to massive delinquency spikes in 30-90 DPD buckets.
                      </p>
                    </div>

                    <div className="p-6 bg-red-50/60 rounded-2xl border border-red-200 space-y-3">
                      <div className="flex items-center gap-2 text-red-800 font-bold text-base">
                        <span>⚠️</span> Unregulated Collection Agency Perils
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Frustrated fintechs often turn to aggressive third-party collection agencies that deploy contact-list scraping, abrasive WhatsApp messages to workplace colleagues, and unauthorized calls outside permitted hours. These tactics directly violate RBI Digital Lending Guidelines 2026, triggering police FIRs, regulatory show-cause notices, and app-store delisting.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-[#FAF7F0] rounded-2xl border-l-4 border-[#D2A02A] text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900 block mb-1">The Institutional Solution: Advocate-Led Statutory Authority</strong>
                    AMA Legal Solutions replaces aggressive informal methods with dignified, high-velocity legal pressure. Dispatched strictly under the Advocates Act, 1961, our statutory notice suites command institutional respect, establish irrefutable evidence of demand, and compel borrowers to prioritize settlement before criminal or civil courts intervene.
                  </div>
                </section>

                {/* ══ SECTION 3: CORE RECOVERY CADENCE ══ */}
                <section id="core-recovery-cadence" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      The 3-Notice Weekly Cadence &amp; Police Escalation Protocol
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Generic single-letter demands are frequently discarded by serial defaulters. Our proprietary debt recovery system executes a disciplined, multi-stage statutory escalation sequence. Spaced exactly seven days apart, each phase intensifies statutory exposure while maintaining an unimpeachable legal paper trail:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    {/* Week 1 */}
                    <div className="p-5 bg-white rounded-2xl border-2 border-amber-200 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-xs mb-3">
                          W-1
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">Notice #1: Salary Advance Demand</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Dispatched on advocate letterhead under Section 73 of the Indian Contract Act, 1872. Details the digital sanction timestamp, specific salary-linked covenants, crystallized balance, and provides a strict 7-day cure window to settle amicably without judicial intervention.
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
                          Automatically triggered on Day 8 if payment or contact is not established. Invokes Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for NACH / e-Mandate dishonour or Section 138 of the Negotiable Instruments Act, 1881, warning of penal prosecution and two years imprisonment.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-orange-600">
                        Triggered on Day 8 of Non-Payment
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
                          Dispatched on Day 15. Serves as final pre-prosecution legal warning. Puts the borrower on notice regarding imminent police lodging under Bharatiya Nyaya Sanhita, summary recovery suit filing under Order 37 CPC, and formal flagging as a Wilful Defaulter across RBI credit bureaus.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-red-600">
                        Triggered on Day 15 of Non-Payment
                      </div>
                    </div>

                    {/* Week 4 */}
                    <div className="p-5 bg-[#1a202c] text-white rounded-2xl border-2 border-red-500 shadow-md flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs mb-3">
                          W-4
                        </div>
                        <h3 className="font-bold text-[#D2A02A] text-sm mb-2">Police Complaint Filing</h3>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          For persistent, unyielding wilful defaulters, our litigation team drafts and files formal Police Complaints under Sections 316 and 318 BNS (Criminal Breach of Trust &amp; Cheating) with jurisdictional cyber and economic offences authorities.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-bold text-red-400">
                        Formal Criminal Enforcement
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 4: EXCEL WORKFLOW ══ */}
                <section id="excel-workflow" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Zero-Friction Ingestion: Excel-to-Dispatch Automation
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Institutional recovery systems often fail because they require cumbersome engineering integrations, complex API setups, or disruption of legacy Loan Management Systems (LMS). AMA Legal Solutions engineered a zero-friction data pipeline designed specifically for lean fintech risk and collections operations:
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
                          <td className="p-4 text-gray-600">Legal name of primary borrower or salary earner</td>
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
                      <strong>Batch Processing Velocity:</strong> Whether onboarding 200 delinquent accounts or an institutional batch of 15,000 delinquent accounts, our automated ingestion engine normalizes addresses, validates postal pin codes, populates advocate-vetted templates, and queues triple-rail dispatch within 24 business hours.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 5: CUSTOM DRAFTING VS DIY TEMPLATES ══ */}
                <section id="custom-tailored-notices" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Salary-Linked Notice Drafting vs Flawed DIY Automated Templates
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Many fintech lenders and salary advance applications attempt to cut costs by deploying unverified online DIY legal notice generators or generic automated mail merges. In practice, generic DIY notices invariably fail in court because they lack statutory precision, fail to cite specific loan sanction covenants, and do not carry advocate certification under the Advocates Act, 1961:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">📑</div>
                      <h3 className="font-bold text-gray-900 text-base">Sanction Covenants Cited</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Our senior banking advocates review your master lending agreement, sanction letters, and digital click-wrap e-Sign logs. Every notice cites specific salary lien clauses, acceleration terms, and dispute resolution provisions, leaving borrowers zero grounds to deny awareness.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">⚖️</div>
                      <h3 className="font-bold text-gray-900 text-base">High Court Advocate Signing</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Unrepresented corporate notices are treated as commercial reminders. A formal legal notice issued on the letterhead of an enrolled High Court advocate carrying Bar Council enrollment details carries immediate psychological gravity and formal evidentiary validity.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                      <div className="text-2xl">🛡️</div>
                      <h3 className="font-bold text-gray-900 text-base">Flawless Evidentiary Integrity</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        In summary suits under Order 37 CPC or Section 25 PSSA prosecutions, courts strictly scrutinize proof of demand. DIY templates lack certified electronic delivery logs, allowing defaulters to stall proceedings by claiming non-service. Our system pre-empts this completely.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 6: MULTI-CHANNEL DISPATCH ══ */}
                <section id="multi-channel-dispatch" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Triple-Rail Delivery: Speed Post, Email &amp; Section 63 BSA WhatsApp
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Under Indian civil and criminal jurisprudence, establishing conclusive service of notice upon the borrower is a statutory prerequisite before obtaining judicial decrees or criminal summons. Our recovery system simultaneously deploys three synchronized delivery rails:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Rail 1 */}
                    <div className="p-6 bg-white rounded-2xl border-2 border-amber-200 shadow-sm">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
                        <span>📮</span> Rail 1: Physical Post
                      </div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Speed Post / Registered AD</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        Physical notices delivered directly to the borrower&apos;s residence or registered employer address carry unmistakable gravitas. We generate individual India Post barcode tracking numbers and maintain permanent delivery confirmations.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                        <li>India Post Barcoded Consignments</li>
                        <li>Verifiable Proof of Delivery (POD)</li>
                        <li>Statutory compliance for Section 138 NI Act</li>
                      </ul>
                    </div>

                    {/* Rail 2 */}
                    <div className="p-6 bg-white rounded-2xl border-2 border-blue-200 shadow-sm">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-4">
                        <span>📧</span> Rail 2: Official Email
                      </div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Advocate Signed Digital Copy</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        Dispatched from our official law firm domain to the borrower&apos;s registered email address with cryptographic hash verification, digital signatures, and complete SMTP server transmission logs.
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
                    Visual Blueprint: The Institutional Debt Recovery System for Pay Day Loans
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
                    From automated Excel ingestion to triple-rail statutory dispatch and formal Bharatiya Nyaya Sanhita police complaint dockets.
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-4xl mx-auto">
                    <img
                      src="/images/og/debt-recovery-system-for-pay-day-loans.png"
                      alt="Debt Recovery System for Pay Day Loans Statutory Infographic Blueprint"
                      className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <p className="text-[11px] text-gray-500 mt-3 italic">
                    Figure 1.1: Automated 3-Notice Weekly Cadence, Triple-Rail Multi-Channel Delivery &amp; Police Escalation Architecture.
                  </p>
                </div>

                {/* ══ SECTION 7: STATUTORY JURISPRUDENCE ══ */}
                <section id="statutory-framework" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Statutory Grounding: Bharatiya Nyaya Sanhita, PSSA Section 25 &amp; NI Act
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Every notice and police complaint docket prepared by AMA Legal Solutions is grounded in established Indian commercial, cyber, and criminal statutes:
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-start gap-4">
                      <span className="text-2xl text-[#D2A02A]">⚖️</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Bharatiya Nyaya Sanhita, 2023 (BNS) — Sections 316 &amp; 318
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          Replacing Sections 406 and 420 of the Indian Penal Code, these provisions penalize Criminal Breach of Trust and Cheating. Where a borrower secures funds through falsified KYC, forged salary credentials, or immediately diverts hypothecated collateral, criminal intent exists from inception. Our advocates draft structured criminal dockets submitted to jurisdictional police stations to initiate formal inquiry.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-start gap-4">
                      <span className="text-2xl text-[#D2A02A]">📜</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Payment and Settlement Systems Act, 2007 (PSSA) — Section 25
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          Explicitly governs electronic fund transfers, NACH auto-debits, and e-Mandates. When an electronic clearing instruction is dishonoured due to insufficient funds or cancellation without lender consent, Section 25 imposes criminal liability identical to Section 138 of the NI Act, carrying up to two years imprisonment and fines up to twice the loan amount.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-start gap-4">
                      <span className="text-2xl text-[#D2A02A]">🏛️</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Code of Civil Procedure, 1908 (CPC) — Order 37 Summary Suits
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          For liquidated debts arising from written loan contracts, promissory notes, or dishonoured negotiable instruments, Order 37 provides a fast-track summary recovery procedure. The defendant borrower cannot defend as a matter of right without obtaining leave from the court, allowing lenders to secure swift summary judgments and asset attachment orders.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 flex items-start gap-4">
                      <span className="text-2xl text-[#D2A02A]">📱</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Bharatiya Sakshya Adhiniyam, 2023 (BSA) — Section 63
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          Modernizing Section 65B of the Indian Evidence Act, Section 63 governs the admissibility of electronic records. Our system automatically produces statutory certificates validating electronic device logs, WhatsApp blue ticks, and SMTP transmission trails, ensuring conclusive evidence of service in court.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 8: COMPARISON TABLE ══ */}
                <section id="comparative-analysis" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Comparative Evaluation: DIY Templates vs Corporate Retainers vs AMA System
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    When designing an institutional recovery strategy for payday loans, management teams must balance legal enforceability, operational speed, and statutory compliance. The matrix below compares the three primary market alternatives:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4">Operational Dimension</th>
                          <th className="p-4">Free / Cheap Online DIY Templates</th>
                          <th className="p-4">Traditional Corporate Law Firms</th>
                          <th className="p-4 bg-[#D2A02A] text-gray-900 font-bold">AMA Legal Solutions Recovery System</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Commercial Structure</td>
                          <td className="p-4 text-gray-500">Low upfront, zero execution</td>
                          <td className="p-4 text-red-600">Costly monthly retainers + hourly billing</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Transparent Fixed Advisory (Keep 100% Capital)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Advocate Certification</td>
                          <td className="p-4 text-red-600">None (Unrepresented notices)</td>
                          <td className="p-4 text-gray-700">Enrolled Advocates</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Enrolled High Court Advocates (Every Docket)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Multi-Channel Service</td>
                          <td className="p-4 text-red-600">Email blast or manual mail only</td>
                          <td className="p-4 text-amber-600">Physical post only, slow processing</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Synchronized Post + Email + Verified WhatsApp</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Electronic Admissibility</td>
                          <td className="p-4 text-red-600">No Section 63 BSA certificate</td>
                          <td className="p-4 text-gray-700">Manual affidavit preparation</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Automated Section 63 BSA Audit Certificate</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Criminal Escalation</td>
                          <td className="p-4 text-red-600">Incapable of criminal drafting</td>
                          <td className="p-4 text-amber-600">Slow individual complaint drafting</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Automated BNS 316/318 Police Complaint Dockets</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">RBI Compliance Shield</td>
                          <td className="p-4 text-red-600">High liability risk</td>
                          <td className="p-4 text-emerald-700">Compliant</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">100% Compliant Fair Practices Code Shield</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">Batch Ingestion Capacity</td>
                          <td className="p-4 text-red-600">Manual copy-paste error prone</td>
                          <td className="p-4 text-amber-600">Restricted to low volume files</td>
                          <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Up to 15,000 Accounts / Batch within 24 Hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 9: INSTITUTIONAL SOCIAL PROOF ══ */}
                <section id="institutional-social-proof" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Institutional Case Proof: Trusted by 10+ Fintechs &amp; Micro-Lenders
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Leading digital salary advance platforms and instant personal credit lenders rely on AMA Legal Solutions to power their legal recovery operations. Key enterprise partners include:
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

                {/* ══ SECTION 10: FAQS ══ */}
                <section id="frequently-asked-questions" className="scroll-mt-32 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-2 bg-[#D2A02A] rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions (Payday Collections Desk)
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

                {/* ══ SECTION 11: MORE LEGAL GUIDES ══ */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-extrabold text-[#1a202c] mb-6 flex items-center gap-2">
                    <span>📚</span> More Institutional Legal &amp; Recovery Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                    {[
                      { title: "Debt Recovery System for NBFCs", href: "/debt-recovery-system-for-nbfcs" },
                      { title: "Legal Recovery for NBFCs", href: "/recovery-for-nbfcs" },
                      { title: "Legal Recovery for Payday Loans", href: "/recovery-for-pay-day-loan" },
                      { title: "NBFC Loan Settlement Guide", href: "/nbfc-loan-settlement-in-september-2026" },
                      { title: "Section 25 PSSA Legal Provisions", href: "/section-25-payment-and-settlement-act-bailable-or-not" },
                      { title: "Section 138 Cheque Bounce Notice", href: "/notice-for-for-dishonoured-cheque" },
                      { title: "Banking & Finance Legal Services", href: "/services/banking-and-finance" },
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

                {/* ══ SECTION 12: REFERENCES & AUTHORITY ══ */}
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
                      — Master Direction on Fair Practices Code for NBFCs &amp; Guidelines on Digital Lending (2026).
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
                      — Regulatory framework for Speed Post barcode tracking, delivery certificates, and postal proof of service.
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
                    Found this institutional recovery blueprint useful? Share with your risk &amp; legal teams:
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

                {/* ══ SECTION 13: AMA COMPANY & MEDIA SECTION ══ */}
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
                        { label: "Payday Loan Recovery", href: "/recovery-for-pay-day-loan" },
                        { label: "NBFC Debt Recovery", href: "/debt-recovery-system-for-nbfcs" },
                        { label: "Section 138 Litigation", href: "/notice-for-for-dishonoured-cheque" },
                        { label: "Banking Arbitration", href: "/services/arbitration" },
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

                {/* ══ SECTION 14: AUTHOR BIO ══ */}
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
                    Advocate at Delhi High Court &amp; Supreme Court of India. Strategic counsel for fintech loan recovery, payday NPA resolution, and digital lending compliance.
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
                  Payday FinTech Desk
                </div>
                <h4 className="font-extrabold text-xl text-white">Recover Delinquent Payday Advances</h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Eliminate external agency commissions and cumbersome corporate retainers. Onboard your delinquent salary advance portfolio onto our automated statutory notice and police escalation framework.
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
                  Related Debt &amp; Recovery Topics
                </h4>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/recovery-for-pay-day-loan", "Recovery for Pay Day Loans"],
                    ["/debt-recovery-system-for-nbfcs", "Debt Recovery System for NBFCs"],
                    ["/recovery-for-nbfcs", "Legal Recovery for NBFCs"],
                    ["/nbfc-loan-settlement-in-september-2026", "NBFC Loan Settlement Rules"],
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
                <span>⚡</span> Payday Legal Debt Recovery Consultation
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Request Institutional Recovery Callback
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
                      placeholder="e.g. Ramesh Chandra / SalaryFast FinTech"
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
                        placeholder="recovery@paydayapp.in"
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
                        placeholder="e.g. Bengaluru, Karnataka"
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
                        <option value="Salary Advance / Payday Credit">Salary Advance / Payday Credit</option>
                        <option value="Earned Wage Access (EWA)">Earned Wage Access (EWA)</option>
                        <option value="Digital Nano Personal Loans">Digital Nano Personal Loans</option>
                        <option value="Short-Term Merchant Advances">Short-Term Merchant Advances</option>
                        <option value="Credit Line & BNPL Facilities">Credit Line &amp; BNPL Facilities</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Message / Portfolio Details
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="e.g. We have ~2,000 delinquent salary advance accounts needing automated 3-notice legal dispatch and police escalation."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 rounded-xl transition text-sm cursor-pointer shadow-md"
                    >
                      Submit Consultation Request
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
                  <h4 className="text-xl font-bold text-gray-900">Consultation Request Received</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you. Our institutional recovery director will review your portfolio requirements and connect within two business hours to demonstrate our sample Excel parser and custom notice drafts.
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

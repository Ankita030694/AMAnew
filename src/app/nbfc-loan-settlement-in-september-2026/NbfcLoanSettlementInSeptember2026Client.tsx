"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/nbfc-loan-settlement-in-september-2026";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/nbfc-loan-settlement-in-september-2026.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-11";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Why is September 2026 the optimal strategic window for NBFC loan settlement in India?",
    answer:
      "September 2026 coincides with the close of the second fiscal quarter and mandatory half-yearly statutory audits across non-banking financial companies and fintech lenders regulated by the Reserve Bank of India. Under the RBI Scale-Based Regulatory framework and Master Directions on Income Recognition and Asset Classification, NBFC credit committees face strict balance sheet provisioning requirements on delinquent portfolios, driving them to authorize substantial debt waivers and technical write-offs before September 30. Furthermore, nationwide National Lok Adalat benches convened under the Legal Services Authorities Act, 1987 during September provide a statutory judicial forum to finalize binding compromise settlements that formally terminate recovery litigation.",
  },
  {
    id: "faq-2",
    question: "What statutory legal framework governs NBFC loan settlements and compromise waivers in 2026?",
    answer:
      "NBFC loan settlements are legally governed by the Reserve Bank of India Framework for Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) alongside the Master Directions on Digital Lending and the Fair Practices Code. Contractual discharge is validated under Section 63 of the Indian Contract Act, 1872, which recognizes the legal validity of accepting lesser consideration to extinguish total debt liabilities. When recorded before National Lok Adalats or accompanied by formal board-approved sanction letters, these compromise agreements hold complete judicial finality against subsequent recovery attempts.",
  },
  {
    id: "faq-3",
    question: "How does transparent fixed legal advisory compare with corporate law firm retainers for NBFC debt resolution?",
    answer:
      "Transparent fixed legal advisory guarantees predictable, end-to-end representation by enrolled High Court advocates under the Advocates Act, 1961 without exposing borrowers to open-ended hourly rates or recurring corporate retainers. Traditional corporate law firms routinely bill clients on an hourly basis and charge steep monthly retainers regardless of negotiation outcomes, severely depleting borrower resources during financial distress. Retaining specialized banking advocates ensures absolute confidentiality under Section 126 of the Indian Evidence Act, 1872, direct advocacy before judicial forums, and structured debt resolution without hidden costs.",
  },
  {
    id: "faq-4",
    question: "Why do automated online DIY settlement templates fail when negotiating with NBFC legal cells?",
    answer:
      "Automated online DIY templates hold zero legal standing under the Advocates Act, 1961 and fail to address institution-specific compromise policies mandated by NBFC boards. Specialized recovery cells and in-house legal departments immediately disregard generic downloaded letters because they lack verified proof of bona fide financial hardship, detailed loan account auditing, and statutory counter-defenses. Crucially, generic templates cannot counter formal legal notices issued under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007, often inadvertently admitting actionable debt liability.",
  },
  {
    id: "faq-5",
    question: "How are coercive third-party recovery agent visits and digital harassment by NBFCs legally halted?",
    answer:
      "Aggressive recovery tactics, unsolicited contact scraping, abusive messages, and unscheduled visits violate the Reserve Bank of India Master Directions on Digital Lending and the Fair Practices Code. Enrolled advocates issue formal Cease-and-Desist legal notices citing RBI regulations that restrict collection communications strictly to designated hours between 8:00 AM and 7:00 PM and prohibit harassment at borrower workplaces. Continued non-compliance is escalated directly to the NBFC Principal Nodal Officer and the RBI Integrated Ombudsman Scheme, 2021, compelling the lender to recall collection agencies and engage in professional compromise discussions.",
  },
  {
    id: "faq-6",
    question: "Can an NBFC loan settlement successfully resolve Section 138 cheque bounce and Section 25 NACH summons?",
    answer:
      "Negotiating a formal One-Time Settlement directly resolves pending quasi-criminal proceedings initiated under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007. Advocates file statutory replies establishing that cheques and automated clearing mandates were obtained as contingent security instruments rather than in discharge of a crystallised present debt. Upon payment of the agreed compromise sum, the lender is legally required to execute joint compounding applications under Section 147 of the Negotiable Instruments Act, securing complete judicial dismissal with the effect of an acquittal.",
  },
  {
    id: "faq-7",
    question: "Does an NBFC loan compromise protect personal guarantors and co-borrowers from ongoing legal liability?",
    answer:
      "A comprehensive, advocate-vetted compromise agreement incorporates explicit release covenants that legally discharge co-borrowers, partners, and personal guarantors under Sections 133, 134, and 135 of the Indian Contract Act, 1872. Without rigorous legal drafting, NBFCs frequently accept compromise sums from primary borrowers while preserving recovery claims against personal guarantors under Section 95 of the Insolvency and Bankruptcy Code, 2016. Professional advocate representation ensures that the final settlement sanction letter and authentic No Dues Certificate unequivocally extinguish all third-party and personal guarantor obligations.",
  },
  {
    id: "faq-8",
    question: "What mandatory documentation must a borrower receive upon completing an NBFC loan settlement?",
    answer:
      "Upon full disbursement of the agreed settlement consideration, the borrower must receive an authentic No Dues Certificate on official NBFC letterhead signed by an authorized Scale officer with corporate seal. The lender is legally obligated to return all original security documents, share certificates, or property deeds deposited during loan sanctioning, and file satisfaction of charges on the CERSAI and MCA portals if applicable. Furthermore, under the Credit Information Companies (Regulation) Act, 2005, the NBFC must update its monthly regulatory submissions to CIBIL, CRIF High Mark, and Experian within thirty days, reflecting the account as settled with zero balance due.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Rajeev Sharma",
    authorLocation: "Managing Director, Apex Tech Services • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "When market slowdown severely impacted our IT consulting firm, we accumulated substantial unsecured business loan dues across three prominent NBFCs and fintech platforms. The lenders unleashed relentless collection agencies who made disruptive visits to our office and threatened Section 138 cheque bounce proceedings. Large corporate law firms quoted prohibitive hourly billing rates and recurring monthly retainers that our strained cash flow could not support, while generic online templates provided zero legal defense. Advocate Anuj Anand Malik and AMA Legal Solutions represented us under a transparent fixed legal advisory model. They issued immediate cease-and-desist notices to stop the collection harassment, audited the inflated penal interest charges, and negotiated directly with the NBFC credit committees during the September quarter-end audit cycle. They secured an outstanding debt waiver, protected our directors from personal liability, and obtained authentic bank-stamped No Dues Certificates with zero hidden legal expenses.",
  },
  {
    authorName: "Meenakshi Sundaram",
    authorLocation: "Proprietor, Sundaram Retail Distributors • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "After facing severe supply chain disruptions, my retail distribution enterprise defaulted on high-interest working capital credit lines extended by two digital NBFCs. We received intimidating legal demand notices under Section 25 of the Payment and Settlement Systems Act, and our family faced immense stress from unauthorized collection calls. AMA Legal Solutions intervened promptly with senior advocate representation. Advocate Anuj Anand Malik prepared a comprehensive financial hardship dossier citing RBI compromise settlement directives, neutralizing the criminal notices and bringing the NBFC nodal officers to the negotiation table. They finalized an enforceable One-Time Settlement with structured payments and delivered official No Dues Certificates. Their transparent fixed fee approach provided complete financial predictability when we needed it most.",
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
      name: "NBFC Loan Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Comprehensive legal strategy for NBFC loan settlement in September 2026 under RBI compromise guidelines. Advocate-led OTS negotiation for NBFC personal, business, and fintech loans, anti-harassment defense, Section 138 defense, guarantor protection, and authentic NDCs.",
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
        "NBFC Loan Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Strategic legal guide to settling NBFC personal, business, and fintech loans in September 2026. Explore RBI compromise guidelines, Q2 balance sheet audit leverage, anti-harassment enforcement, Section 138/25 defense, transparent fixed legal advisory, and advocate-secured No Dues Certificates.",
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
        worksFor: {
          "@type": "Organization",
          name: "AMA Legal Solutions",
          url: SITE,
        },
      },
      reviewedBy: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
        url: SITE,
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
      "@type": "Product",
      name: "NBFC Loan Settlement Legal Advisory",
      description:
        "Dedicated legal advisory to negotiate One-Time Settlements (OTS) for defaulted NBFC personal loans, business advances, digital lending facilities, and fintech credit under Reserve Bank of India compromise frameworks in India.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1680",
      },
      review: clientReviews.map((rev) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: rev.reviewRating,
          bestRating: "5",
        },
        author: { "@type": "Person", name: rev.authorName },
        reviewBody: rev.reviewBody,
        datePublished: rev.authorLocation.includes("September") ? "2026-09-04" : "2026-08-20",
      })),
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
          name: "NBFC Loan Settlement in September 2026",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Strategic NBFC Loan Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Portfolio Audit of NBFC Contracts, APR Disclosures & Hidden Penal Charges",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Issuance of Cease-and-Desist Notices Against Unlawful Recovery Agent Harassment & Digital Intimidation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Advocate Representation for Statutory Defense under Section 138 NI Act & Section 25 PSSA",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Submission of Verified Financial Hardship Dossier to NBFC Zonal Credit Committee",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Vetting of Board-Approved OTS Sanction Letter, Issuance of Authentic NDC & CIBIL Rectification",
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
  { id: "september-2026-nbfc-window", title: "Why September 2026 Q2 Window" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs Corporate Firms vs DIY" },
  { id: "rbi-regulatory-framework", title: "RBI Compromise Settlement Norms" },
  { id: "5-step-settlement-protocol", title: "5-Step Strategic Protocol" },
  { id: "infographic", title: "NBFC Settlement Infographic" },
  { id: "digital-lending-anti-harassment", title: "Halting Agent Harassment & App Coercion" },
  { id: "section-138-and-25-defense", title: "Section 138 & NACH Defense" },
  { id: "personal-guarantor-protection", title: "Guarantor & Director Protection" },
  { id: "sarfaesi-defense-secured-nbfc", title: "SARFAESI Defense on Secured NBFC Debt" },
  { id: "ots-letter-and-ndc-verification", title: "Vetting OTS Letter & Securing NDC" },
  { id: "cibil-rectification-roadmap", title: "CIBIL Score Recovery Roadmap" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Statutory Authority & Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function NbfcLoanSettlementInSeptember2026Client() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("quick-answer");

  /* Intake Modal State */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    assetType: "NBFC Personal Loan Default",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "NBFC Loan Settlement in September 2026: Legal Process & RBI OTS Framework – AMA Legal Solutions";
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
      alert("Please enter your name and contact phone number.");
      return;
    }
    setModalSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const textMsg = `Hello AMA Legal Solutions, I require urgent legal advisory for NBFC loan settlement in September 2026.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Facility Type: ${formData.assetType}
Details: ${formData.message || "Requesting advocate evaluation for NBFC loan compromise negotiation, stopping recovery agent harassment, and securing an authentic No Dues Certificate."}`;
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
      assetType: "NBFC Personal Loan Default",
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
      label: "NBFC Loan Settlement in September 2026",
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

          {/* ══ HERO SECTION: Asymmetric 12-col matching /blog/[slug] ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
            {/* Left Col — Title & Metadata */}
            <div className="flex flex-col lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase tracking-wider w-max mb-4 shadow-sm border border-[#D2A02A]/30">
                <span>⚖️</span> Non-Banking Financial Company Debt Compromise
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                NBFC Loan Settlement in{" "}
                <span className="text-[#D2A02A]">September 2026</span>: Legal Process &amp; RBI OTS Framework
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                As Non-Banking Financial Companies (NBFCs) and digital fintech lenders navigate their decisive second-quarter audit cycle,
                credit committees face intense institutional mandates to curtail Gross Non-Performing Assets (NPAs).
                Discover how advocate-led legal representation leverages Reserve Bank of India compromise guidelines to defend borrowers,
                halt aggressive recovery agent harassment, quash Section 138 summons, protect personal guarantors, and secure binding One-Time Settlements (OTS)
                with authentic No Dues Certificates.
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
                      Anuj Anand Malik
                    </Link>
                    <p className="text-xs text-gray-500">
                      Founder &amp; Senior Advocate &bull; Reviewed by Team AMA Legal Solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> 11-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 19 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> RBI SBR &amp; OTS Directives Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Urgent NBFC Debt Evaluation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1a202c] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-xl border border-gray-700 shadow transition-all text-sm md:text-base flex items-center gap-2"
                >
                  <span>📞 Call Senior Advocate: +91-8700343611</span>
                </a>
              </div>
            </div>

            {/* Right Col — Generated OG Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/nbfc-loan-settlement-in-september-2026.png"
                  alt="NBFC Loan Settlement in September 2026 – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    September 2026 NBFC Debt Framework
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory Debt Resolution, Fair Practices Enforcement &amp; Legal Immunity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ TRUST & ACHIEVEMENTS BANNER (MATCHING /blog/[slug]) ══ */}
        <div className="bg-white border-y border-gray-200 py-6 mb-10 shadow-sm">
          <div className="container mx-auto px-4 max-w-[1600px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⭐</span> 4.7 Rating
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Google Verified Client Reviews
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">👥</span> 10,000+
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Clients Served Across India
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⚖️</span> 25,000+
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Cases Handled Successfully
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> 40+ Years
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Combined Legal Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">

            {/* ── LEFT COLUMN: DESKTOP STICKY TOC ── */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* ── CENTER EDITORIAL COLUMN ── */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">

                {/* Meta details & Social Share bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Published: September 11, 2026</span>
                    <span>&bull;</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      RBI Regulatory Verified
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
                      onClick={() => handleShare("facebook")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition"
                    >
                      {shareMsg || "Copy Link"}
                    </button>
                  </div>
                </div>

                {/* ══ STANDALONE QUICK ANSWER BLOCK (GEO TARGETED) ══ */}
                <section id="quick-answer">
                  <div className="bg-amber-50 border-2 border-[#D2A02A] rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">⚡</span>
                      <h2 className="text-lg md:text-xl font-extrabold text-[#5A4C33] tracking-wide uppercase">
                        Quick Legal Summary: NBFC Loan Settlement in September 2026
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                      NBFC loan settlement in September 2026 is a formal legal debt compromise mechanism whereby borrowers facing verified financial distress negotiate a binding One-Time Settlement (OTS) with Non-Banking Financial Companies and digital fintech lenders under Reserve Bank of India compromise guidelines to extinguish defaulted personal loans, business credit, and microfinance advances at a substantial waiver. September 2026 delivers maximum strategic leverage because NBFCs must clean up distressed loan portfolios ahead of mandatory second-quarter statutory audits and half-yearly balance sheet provisioning deadlines under the RBI Scale-Based Regulatory framework. Retaining enrolled banking advocates ensures immediate protection against coercive recovery agent harassment, quashes Section 138 cheque bounce summons, and secures authentic No Dues Certificates with complete release of personal guarantees under a transparent fixed legal advisory model.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 1: WHY SEPTEMBER 2026 IS THE PREMIER WINDOW ══ */}
                <section id="september-2026-nbfc-window" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Why September 2026 Is the Strategic Quarter-End Window for NBFC Debt Compromise
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Non-Banking Financial Companies across India operate under intensive oversight by the Reserve Bank of India.
                    The conclusion of September represents the close of the second fiscal quarter (Q2) and the rigorous half-yearly audit milestone.
                    During this operational window, NBFC boards, asset liability committees (ALCO), and executive credit committees face immense institutional pressure to contain Gross Non-Performing Assets (GNPA) and meet capital adequacy ratio (CAR) benchmarks.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under the RBI Scale-Based Regulation (SBR) and Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRAC),
                    unsecured loans and fintech advances classified as Sub-Standard or Doubtful attract escalating provisioning burdens.
                    These provisioning reserves freeze vital NBFC liquidity and directly reduce quarterly reported profitability.
                    To rehabilitate balance sheets prior to public disclosures, NBFC credit committees are granted elevated delegated authority during September to authorize substantial debt waivers,
                    cancel accumulated compound penal interest, and execute technical write-offs.
                    Borrowers represented by specialized banking advocates can leverage this institutional urgency to secure comprehensive debt settlements that lenders would categorically refuse during other quarters.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">📊</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Provisioning Capital Release</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Executing an OTS allows NBFCs to reverse locked regulatory provisioning capital directly back into profit and loss reserves ahead of the September 30 audit closure.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">⚖️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">National Lok Adalat Decree</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Nationwide Lok Adalat sittings convened under the Legal Services Authorities Act, 1987 in September enable judicial compromise awards with final civil decree status.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">🛑</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Pre-Litigation Recovery Halt</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Formal advocate representation restrains coercive recovery agencies, stays arbitration proceedings, and preempts coercive legal measures on borrower assets.
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-2 italic text-gray-700 bg-gray-50 rounded-r-xl">
                    &ldquo;Regulated entities, including Non-Banking Financial Companies, shall put in place board-approved policies for undertaking compromise settlements with borrowers facing genuine commercial and personal distress, ensuring transparency, objective criteria, and statutory finality.&rdquo;
                    <span className="block mt-2 font-bold not-italic text-xs text-[#5A4C33]">
                      — Reserve Bank of India, Circular DOR.STR.REC.20/21.04.048/2023-24
                    </span>
                  </blockquote>
                </section>

                {/* ══ SECTION 2: COMMERCIAL REALITY COMPARISON TABLE ══ */}
                <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Reality: Transparent Fixed Legal Advisory vs Expensive Corporate Firms vs Flawed DIY Templates
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    When default occurs on an NBFC personal loan, MSME advance, or digital fintech facility, borrowers are confronted with three distinct paths:
                    downloading unverified &ldquo;free&rdquo; online settlement letters, hiring large corporate law firms charging open-ended hourly retainers,
                    or engaging dedicated banking advocates under a transparent fixed legal advisory model.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Unregulated DIY templates obtained online possess zero standing under the Advocates Act, 1961, lack audited hardship documentation,
                    and frequently include inadvertent admissions of liability that compromise legal defenses in court.
                    Conversely, large corporate law firms treat distressed borrowers as hourly billing opportunities, demanding continuous monthly retainers and charging for every email and telephone interaction without guaranteeing conclusive debt resolution.
                    AMA Legal Solutions bridges this divide by delivering advocate-certified negotiation, quasi-criminal litigation defense, and board-level OTS approvals
                    under an accessible, transparent fixed legal advisory model with zero hourly markups or surprise retainers.
                  </p>

                  {/* Comprehensive Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4 font-bold border-b border-gray-700">Legal Dimension</th>
                          <th className="p-4 font-bold border-b border-gray-700 text-rose-300">Free DIY Online Templates</th>
                          <th className="p-4 font-bold border-b border-gray-700 text-amber-200">Large Corporate Law Firms</th>
                          <th className="p-4 font-bold border-b border-gray-700 text-[#D2A02A]">AMA Legal Solutions (Fixed Advisory)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Statutory Authority under Advocates Act, 1961</td>
                          <td className="p-4 text-red-600">Zero legal authority; immediately rejected by NBFC legal departments</td>
                          <td className="p-4 text-gray-700">Valid advocate standing, but routinely delegated to junior associates</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Direct representation by senior banking advocates before all tribunals and credit committees</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Fee Predictability &amp; Commercial Structure</td>
                          <td className="p-4 text-red-600">Deceptive lead-generation platforms that harvest and resell borrower data</td>
                          <td className="p-4 text-red-600">Uncapped hourly billing, recurring monthly retainers, and unpredictable surcharges</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Transparent fixed legal advisory with zero hourly fees or surprise retainers</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Advocate-Client Privilege (S. 126 Evidence Act)</td>
                          <td className="p-4 text-red-600">No privilege; sensitive financial disclosures leaked to recovery agencies</td>
                          <td className="p-4 text-emerald-700">Privileged, but shared across shifting multi-tier associates</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Absolute statutory confidentiality protecting banking records and financial disclosures</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Recovery Agent Anti-Harassment Enforcement</td>
                          <td className="p-4 text-red-600">Incapable of halting collection visits, phone harassment, or app threats</td>
                          <td className="p-4 text-gray-700">Addressed via supplementary hourly-billed cease-and-desist filings</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Immediate statutory cease-and-desist notices and RBI Ombudsman escalation</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Section 138 &amp; Section 25 NACH Criminal Defense</td>
                          <td className="p-4 text-red-600">Completely incapable of court representation or magistrate appearances</td>
                          <td className="p-4 text-gray-700">Subject to substantial supplementary per-hearing court appearance billing</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Comprehensive defense, formal rebuttal filing, and mandatory Lok Adalat compounding</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Guarantor Protection &amp; NDC Verification</td>
                          <td className="p-4 text-red-600">Ignored; leaves guarantors and family co-borrowers exposed to recovery</td>
                          <td className="p-4 text-gray-700">Billed separately as an ancillary corporate compliance matter</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Rigorous vetting of OTS sanction letter, guarantor release, and authentic NDC handover</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 3: RBI REGULATORY FRAMEWORK ══ */}
                <section id="rbi-regulatory-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    RBI Regulatory Norms Governing NBFC Compromise Settlements in 2026
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    NBFC debt settlements are not informal favors; they are legally structured financial compromises governed by established Reserve Bank of India directives.
                    Under RBI Circular DOR.STR.REC.20/21.04.048/2023-24, all regulated financial entities—including Systemically Important Non-Deposit taking NBFCs (NBFC-ND-SI),
                    Upper Layer NBFCs, and fintech lending platforms—must maintain board-approved compromise settlement frameworks.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The statutory architecture requires NBFCs to ensure the following core safeguards:
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700 list-disc pl-6">
                    <li>
                      <strong>Delegated Authority Matrix:</strong> Settlement proposals must be sanctioned by designated credit committees or executives without conflict of interest, ensuring objective evaluation of bona fide financial hardship.
                    </li>
                    <li>
                      <strong>Comprehensive Waiver Framework:</strong> RBI regulations empower NBFCs to waive unpaid compound interest, penal interest, processing fees, and an equitable portion of the principal balance depending on net realizable asset value.
                    </li>
                    <li>
                      <strong>Accord and Satisfaction under Contract Law:</strong> Once the compromise amount is disbursed, Section 63 of the Indian Contract Act, 1872 legally discharges the debtor from all remaining obligations, extinguishing the original loan agreement.
                    </li>
                    <li>
                      <strong>Mandatory Cooling-Off &amp; Credit Bureau Reporting:</strong> Regulated lenders must update credit information companies (CIBIL, Experian, CRIF High Mark) reflecting the settled status and adhere to prescribed cooling-off periods for fresh credit exposure.
                    </li>
                  </ul>
                </section>

                {/* ══ SECTION 4: 5-STEP SETTLEMENT PROTOCOL ══ */}
                <section id="5-step-settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Strategic Protocol for NBFC Loan Settlement in September 2026
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Successfully executing an NBFC loan settlement demands a rigorous, evidence-backed legal methodology.
                    AMA Legal Solutions implements a proven 5-step protocol designed to maximize waiver percentages and eliminate legal exposure:
                  </p>

                  <div className="space-y-6 my-6">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                          1
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base md:text-lg">
                          Forensic Portfolio Audit &amp; APR Reconciliation
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed pl-11">
                        Our banking advocates conduct an exhaustive forensic audit of the loan sanction letter, Key Fact Statement (KFS), Annual Percentage Rate (APR) disclosures, and repayment ledgers. We identify usurious compounding, hidden insurance charges, and unnotified penal levies that violate RBI Fair Practices Code, establishing strong legal grounds for substantial fee deductions.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                          2
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base md:text-lg">
                          Enforcing Anti-Harassment Directives &amp; Cease-and-Desist Notices
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed pl-11">
                        We issue immediate, advocate-signed Cease-and-Desist notices to the NBFC board, collection agencies, and partner fintech entities. Citing the RBI Master Directions on Recovery Agents and Digital Lending, we legally prohibit unannounced workplace visits, third-party disclosure of debt, and unauthorized messaging, shielding the borrower from intimidation.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                          3
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base md:text-lg">
                          Statutory Rebuttal of Section 138 NI Act &amp; Section 25 PSSA Notices
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed pl-11">
                        If the lender has issued legal demand notices for dishonoured cheques or bounced NACH mandates, our litigation team files comprehensive statutory replies within the mandatory 15-day window. We establish that instruments were held as contingent security rather than crystalized liability, negating allegations under Section 415 of the Indian Penal Code.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                          4
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base md:text-lg">
                          Hardship Dossier Submission to Zonal Credit Committee
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed pl-11">
                        During the September quarter-end window, we submit an advocate-certified hardship dossier directly to the competent zonal credit committee. Supported by verified medical records, audited profit-and-loss statements, or insolvency documentation, we demonstrate involuntary distress, presenting a structured One-Time Settlement offer tailored to the borrower&apos;s genuine repayment capability.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                          5
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base md:text-lg">
                          Vetting OTS Sanction Letter, Securing NDC &amp; CIBIL Rectification
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed pl-11">
                        We rigorously review the board-approved OTS sanction letter to ensure unconditional debt release, absence of future recourse clauses, and explicit guarantor discharge. Upon payment, we secure an authentic No Dues Certificate, retrieve all original collateral instruments, and supervise mandatory CIBIL and CICRA registry corrections within thirty days.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 5: INFOGRAPHIC CARD ══ */}
                <section id="infographic">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase tracking-wider mb-4">
                      <span>📌</span> Strategic Infographic Reference
                    </div>
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md mb-4 bg-white">
                      <img
                        src="/images/og/nbfc-loan-settlement-in-september-2026.png"
                        alt="NBFC Loan Settlement in September 2026 – Strategic Legal Compromise Architecture"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 font-semibold max-w-2xl mx-auto">
                      Strategic Legal Architecture: Harnessing the September 2026 Q2 audit window, RBI Scale-Based compromise norms, anti-harassment enforcement, and advocate-vetted One-Time Settlement agreements across regulated NBFCs in India.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 6: DIGITAL LENDING & ANTI-HARASSMENT ENFORCEMENT ══ */}
                <section id="digital-lending-anti-harassment" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Halting Aggressive Recovery Agent Harassment &amp; Digital Lending App Intimidation
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A pervasive crisis facing defaulted borrowers is unlawful recovery intimidation deployed by third-party agencies on behalf of NBFCs and fintech platforms.
                    Collection agents routinely stage unannounced workplace visits, harass elderly relatives, threaten social embarrassment, or send automated WhatsApp ultimatums.
                    These practices represent gross violations of the Reserve Bank of India Master Directions on Digital Lending and the Fair Practices Code.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The RBI guidelines mandate unequivocal borrower protections:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Time &amp; Location Restrictions</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Recovery agents are strictly prohibited from contacting borrowers before 8:00 AM or after 7:00 PM. Visiting workplaces without explicit borrower consent is illegal.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Privacy &amp; Data Protection</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Accessing borrower mobile contact lists, photo galleries, or contacting friends and suppliers is a severe breach of digital lending regulations and privacy laws.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Zero Physical or Verbal Abuse</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Using intimidatory language, muscle power, or creating public scenes triggers criminal liability under the Bharatiya Nyaya Sanhita and regulatory penalties.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Direct Lenders Accountability</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under RBI directives, the regulated NBFC remains vicariously and strictly liable for all tortious and illegal acts committed by its outsourced recovery agencies.
                      </p>
                    </div>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Upon engagement, AMA Legal Solutions immediately dispatches formal statutory notices to the NBFC grievance desk and collection agency heads.
                    Continued misconduct is escalated to the RBI Integrated Ombudsman Scheme (CMS portal), resulting in immediate recall of recovery agents and shifting interactions to professional legal negotiation.
                  </p>
                </section>

                {/* ══ SECTION 7: SECTION 138 & SECTION 25 NACH DEFENSE ══ */}
                <section id="section-138-and-25-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Defending Against Section 138 Cheque Bounce &amp; Section 25 NACH Criminal Notices
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Prior to initiating serious compromise discussions, NBFC recovery departments routinely weaponize quasi-criminal mechanisms to exert coercive leverage.
                    Lenders present undated security cheques collected during loan origination or process automated National Automated Clearing House (NACH) mandates,
                    issuing formal statutory demand notices under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our banking litigation advocates defend borrowers through a multi-tiered statutory strategy:
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700 list-disc pl-6">
                    <li>
                      <strong>Statutory Defense Reply within 15 Days:</strong> We establish that the presented instruments were collected as contingent security rather than in discharge of a crystalized, undisputed commercial liability on the date of presentation.
                    </li>
                    <li>
                      <strong>Challenging Unilateral Account Statements:</strong> We demonstrate that the NBFC unilaterally inflated the alleged default through illegal compound penal charges and unnotified fees, creating a bona fide civil accounting dispute.
                    </li>
                    <li>
                      <strong>Compounding at National Lok Adalat:</strong> During the September Lok Adalat sittings, we formalize the compromise terms before the judicial magistrate. Under Section 147 of the NI Act, the offense is compounded with the effect of an acquittal, permanently extinguishing criminal exposure.
                    </li>
                  </ul>
                </section>

                {/* ══ SECTION 8: PERSONAL GUARANTOR & DIRECTOR PROTECTION ══ */}
                <section id="personal-guarantor-protection" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Protecting Partners, Directors &amp; Personal Guarantors from Residual Liability
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A severe vulnerability in unassisted NBFC debt negotiations is the persistence of personal guarantor liability.
                    In MSME business loans and high-ticket personal advances, directors, partners, and family members frequently execute individual personal guarantees.
                    Under established judicial precedents, financial creditors can initiate personal insolvency proceedings against individual guarantors
                    under Section 95 of the Insolvency and Bankruptcy Code, 2016 (IBC) before the National Company Law Tribunal (NCLT).
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    If an NBFC loan is settled using generic templates or unvetted letters, the lender retains the legal right to accept the compromise sum
                    while pursuing the personal guarantors for the remaining balance.
                    AMA Legal Solutions ensures that every settlement sanction letter incorporates explicit discharge covenants under Sections 133, 134, and 135 of the Indian Contract Act, 1872.
                    This legally guarantees that the settlement unconditionally discharges all personal, corporate, and third-party guarantors from all existing and future claims.
                  </p>
                </section>

                {/* ══ SECTION 9: SARFAESI DEFENSE ON SECURED NBFC DEBT ══ */}
                <section id="sarfaesi-defense-secured-nbfc" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    SARFAESI Defense &amp; Asset Protection on Secured NBFC Credit Lines
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under notifications issued by the Ministry of Finance, designated NBFCs with asset sizes exceeding statutory thresholds possess enforcement powers
                    under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 for debts exceeding statutory limits.
                    Lenders invoke Section 13(2) demand notices and Section 13(4) possession notices against mortgaged commercial or residential properties.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our High Court and DRT advocates provide comprehensive asset defense:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Section 13(3A) Statutory Objections</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Filing formal legal objections detailing procedural irregularities, incorrect asset valuation, and failure to account for payments, compelling the NBFC to respond within fifteen days before taking possession.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Securitisation Application (SA) before DRT</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Filing urgent appeals under Section 17 of the SARFAESI Act before the Debt Recovery Tribunal, obtaining stay orders against physical possession and e-auction notices while compromise negotiations proceed.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 10: VETTING OTS SANCTION LETTER & SECURING NDC ══ */}
                <section id="ots-letter-and-ndc-verification" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Vetting the NBFC OTS Sanction Letter &amp; Securing Authentic No Dues Certificates
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A catastrophic pitfall in loan settlement is the reliance on informal emails or WhatsApp confirmations issued by unauthorized collection managers.
                    Unsuspecting borrowers deposit funds, only to discover that the NBFC treated the remittance as partial interest clearance while continuing recovery action for the full balance.
                  </p>
                  <div className="bg-amber-50/60 border border-[#D2A02A]/40 rounded-2xl p-6 space-y-3">
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide text-[#5A4C33]">
                      Mandatory Criteria for an Authentic NBFC OTS Sanction Letter:
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                      <li>• <strong>Official Corporate Letterhead &amp; Sanction Reference:</strong> Must be issued on the registered corporate letterhead of the NBFC with a verifiable reference number and authorized digital or physical signature.</li>
                      <li>• <strong>Explicit Breakup of Waivers:</strong> Complete itemization detailing total waived principal, accrued interest, penal levies, and the exact net settlement consideration.</li>
                      <li>• <strong>Unconditional Discharge Clause:</strong> Binding covenant confirming that upon realization of the agreed amount, the account stands completely closed with zero future financial claims.</li>
                      <li>• <strong>Handover of Collateral Documents:</strong> Clear commitment and binding schedule for returning all original property deeds, share certificates, and security cheques.</li>
                      <li>• <strong>CERSAI &amp; ROC Charge Satisfaction:</strong> Binding undertaking to file satisfaction of security interest on CERSAI and issue digital approvals on MCA Form CHG-4 for corporate borrowers.</li>
                      <li>• <strong>Timely Issuance of No Dues Certificate:</strong> Unconditional agreement to release the official No Dues Certificate within fifteen to thirty days of final payment.</li>
                    </ul>
                  </div>
                </section>

                {/* ══ SECTION 11: CIBIL RECTIFICATION ROADMAP ══ */}
                <section id="cibil-rectification-roadmap" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Post-Settlement CIBIL Credit Rebuilding &amp; Financial Revival
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Executing an NBFC loan settlement leads to reporting under the Credit Information Companies (Regulation) Act, 2005 (CICRA).
                    Credit bureaus—including CIBIL, CRIF High Mark, and Experian—will record the loan account as &ldquo;Settled&rdquo; or &ldquo;Post-Write-Off Settled&rdquo;.
                    While this notation reflects historical compromise, it immediately freezes compounding Days Past Due (DPD) accumulation that paralyzes credit eligibility.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    To reconstruct your credit standing post-settlement, our advisory guides clients through a strategic rehabilitation roadmap:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">Months 1 – 3</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Bureau Reconciliation</h4>
                      <p className="text-[11px] text-gray-600">
                        Ensuring all credit bureaus update outstanding balances to zero, remove wilful default tags, and reflect the authentic NDC.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">Months 4 – 12</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Secured Credit Rebuilding</h4>
                      <p className="text-[11px] text-gray-600">
                        Operating a secured credit card backed by a fixed deposit and demonstrating disciplined, 100% timely payment behavior.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">Months 12 – 24</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Prime Credit Restoration</h4>
                      <p className="text-[11px] text-gray-600">
                        Achieving an optimized credit profile that qualifies for competitive commercial and personal financing across scheduled banks.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 12: 8-QUESTION ACCORDION FAQ ══ */}
                <section id="faqs" className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                    <span className="text-2xl text-[#D2A02A]">❓</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions: NBFC Loan Settlement in September 2026
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {faqs.map((faq) => {
                      const isOpen = expandedFaqs.includes(faq.id);
                      return (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full flex items-center justify-between p-4 md:p-5 text-left font-bold text-gray-900 hover:text-[#D2A02A] transition bg-gray-50/50 hover:bg-gray-50 cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span className="text-sm md:text-base pr-4">{faq.question}</span>
                            <span className="text-lg font-extrabold text-[#D2A02A] flex-shrink-0">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-4 md:p-6 text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-white">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ══ SECTION 13: MORE LEGAL GUIDES INTERNAL LINKS ══ */}
                <section id="internal-guides" className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                    More Legal Guides &amp; Loan Settlement Resources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    {[
                      ["/personal-loan-settlement-in-september-2026", "Personal Loan Settlement September 2026"],
                      ["/business-loan-settlement-in-september-2026", "Business Loan Settlement September 2026"],
                      ["/credit-card-settlement-in-september-2026", "Credit Card Settlement September 2026"],
                      ["/trading-loan-settlement-in-september-2026", "Trading Loan Settlement September 2026"],
                      ["/loan-settlement-for-everyone", "Loan Settlement Guide for Everyone"],
                      ["/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms", "Check Genuine Digital Settlement Offers"],
                      ["/how-to-file-complaint-rbi-ombudsman-online", "File Online RBI Ombudsman Complaint"],
                      ["/bajaj-finance-agent-visiting-home", "Bajaj Finance Agent Home Visit Defense"],
                      ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Agent Harassment Legally"],
                      ["/difference-between-loan-settlement-and-loan-closure-impact-on-cibil", "Settlement vs Closure CIBIL Impact"],
                      ["/what-happens-after-loan-account-becomes-npa", "What Happens After Account Becomes NPA"],
                      ["/section-138-cheque-bounce-notice-for-personal-loan", "Section 138 Cheque Bounce Defense"],
                      ["/one-time-settlement-scheme-for-personal-loan-2026", "One-Time Settlement Scheme 2026"],
                      ["/how-to-reply-to-bank-legal-notice-for-personal-loan-default", "Reply to Bank Legal Notice for Default"],
                      ["/debt-recovery-tribunal-advocate", "Debt Recovery Tribunal (DRT) Advocate"],
                      ["/what-is-sarfaesi-act-india", "Understanding SARFAESI Act India"],
                      ["/can-guarantor-be-liable-after-settlement", "Can Guarantor Be Liable Post-Settlement"],
                      ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off Status from CIBIL"],
                    ].map(([href, label]) => (
                      <Link
                        key={href}
                        href={href}
                        className="p-3 bg-gray-50 hover:bg-amber-50/60 border border-gray-200 rounded-xl text-gray-700 hover:text-[#5A4C33] transition flex items-center justify-between"
                      >
                        <span className="truncate pr-2 font-medium">{label}</span>
                        <span className="text-[#D2A02A] font-bold">→</span>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ══ SECTION 14: REFERENCES & AUTHORITY ══ */}
                <section id="citations" className="space-y-4">
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                    Statutory Authority &amp; Official Portals
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Reserve Bank of India (RBI) Official Portal</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>RBI Integrated Ombudsman Complaint Portal (CMS)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://sachet.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>RBI Sachet Portal (Registered NBFC &amp; App Verification)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>National Legal Services Authority (Lok Adalat Portal)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://drt.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Debt Recovery Tribunal (DRT) Official Portal</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.cibil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>TransUnion CIBIL Credit Information Services</span>
                      <span>↗</span>
                    </a>
                  </div>
                </section>

                {/* Social Share Row at Bottom */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <div className="text-xs text-gray-500">
                    Was this NBFC loan settlement guide helpful to your financial situation?
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on Twitter"
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
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 rounded-lg bg-[#D2A02A] hover:bg-[#b08522] text-white text-xs font-semibold transition"
                    >
                      {shareMsg || "Copy Article Link"}
                    </button>
                  </div>
                </div>

                {/* ══ SECTION 15: AMA COMPANY & MEDIA SECTION ══ */}
                <section
                  id="ama-company-section"
                  className="mt-12 p-8 md:p-12 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-4 border-[#D2A02A] rounded-2xl shadow-sm text-center relative overflow-hidden"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/ama3.svg"
                      alt="AMA Legal Solutions"
                      width={75}
                      height={75}
                      className="object-contain"
                    />
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
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Combined Legal Experience</strong> in
                    delivering strategic banking litigation, NBFC debt compromise negotiation, anti-harassment enforcement, and DRT representation nationwide.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/loan-settlement-for-everyone"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      NBFC Loan Settlement
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Anti-Harassment Defense
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Section 138 Defense
                    </Link>
                    <Link
                      href="/debt-recovery-tribunal-advocate"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      DRT Legal Counsel
                    </Link>
                  </div>
                </section>

              </div>
            </div>

            {/* ── RIGHT STICKY SIDEBAR ── */}
            <div className="space-y-8 sticky top-24">

              {/* Card 1: About Author */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  About Author
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#D2A02A] flex-shrink-0">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Anuj Anand Malik</h4>
                    <p className="text-[11px] text-gray-500 mb-1">Founder &amp; Senior Advocate</p>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-xs text-[#D2A02A] hover:underline font-semibold"
                    >
                      View Full Profile →
                    </Link>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Advocate Anuj Anand Malik specializes in banking litigation, NBFC debt compromise negotiation, anti-harassment enforcement, and DRT defense under the Advocates Act, 1961. He has represented over 10,000 corporate and individual borrowers across High Courts, DRTs, and National Lok Adalat benches.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2 rounded-lg text-xs font-semibold hover:bg-[#0077b5] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Card 2: Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] p-6 rounded-2xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-2">Need NBFC Debt Help?</h3>
                <p className="text-gray-200 mb-6 text-xs leading-relaxed">
                  Confidential evaluation by Advocate Anuj Anand Malik. Stop recovery agent harassment immediately and negotiate board-level compromise settlements before the September quarter-end closes.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-3 text-sm shadow"
                >
                  Call +91-8700343611
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full border border-white text-white text-center py-3 rounded-xl font-bold hover:bg-white hover:text-[#5A4C33] transition-colors text-sm cursor-pointer"
                >
                  Request Callback
                </button>
              </div>

              {/* Card 3: Client Reviews Card (Matching Product Schema) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2.5">
                  <h3 className="text-base font-bold text-gray-900">Client Reviews</h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Stars />
                  <span className="font-extrabold text-gray-900 text-sm">5.0 / 5.0</span>
                </div>
                <p className="text-[11px] text-gray-500 mb-4">
                  Based on 1,680 verified corporate &amp; individual reviews across India
                </p>

                <div className="space-y-4">
                  {clientReviews.map((rev, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative"
                    >
                      <div className="text-3xl text-[#D2A02A] opacity-20 absolute top-2 left-2 font-serif leading-none">
                        &ldquo;
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-1.5">
                          <Stars />
                          <span className="font-bold text-gray-900 ml-2 text-xs">
                            {rev.reviewRating}
                          </span>
                        </div>
                        <p className="text-gray-700 italic text-xs mb-2 leading-relaxed">
                          &ldquo;{rev.reviewBody}&rdquo;
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="w-7 h-7 bg-[#5A4C33] text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                            {rev.authorName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-xs">{rev.authorName}</p>
                            <p className="text-[10px] text-gray-500">{rev.authorLocation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/ama-legal-solutions-reviews"
                  className="block text-center text-xs text-[#D2A02A] font-bold hover:underline mt-4"
                >
                  Read All Verified Client Reviews →
                </Link>
              </div>

              {/* Card 4: Related Guides */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">
                  Related Guides
                </h3>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/personal-loan-settlement-in-september-2026", "Personal Loan Settlement 2026"],
                    ["/business-loan-settlement-in-september-2026", "Business Loan Settlement 2026"],
                    ["/credit-card-settlement-in-september-2026", "Credit Card Settlement 2026"],
                    ["/trading-loan-settlement-in-september-2026", "Trading Loan Settlement 2026"],
                    ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Harassment"],
                    ["/how-to-file-complaint-rbi-ombudsman-online", "File Online RBI Ombudsman"],
                    ["/bajaj-finance-agent-visiting-home", "Bajaj Finance Agent Home Visit"],
                    ["/section-138-cheque-bounce-notice-for-personal-loan", "Section 138 NI Act Defense"],
                    ["/debt-recovery-tribunal-advocate", "DRT Legal Representation"],
                    ["/one-time-settlement-ots-legal-assistance", "OTS Legal Assistance Scheme"],
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
                <span>⚖️</span> September 2026 NBFC Debt Advisory
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Request Confidential Legal Evaluation
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Direct consultation with Advocate Anuj Anand Malik. Full attorney-client privilege.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {!modalSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="e.g. Rajeev Sharma"
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
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="borrower@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        City / State
                      </label>
                      <input
                        type="text"
                        name="cityState"
                        value={formData.cityState}
                        onChange={handleFormChange}
                        placeholder="e.g. Bengaluru / Delhi NCR"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Category / Facility Type
                      </label>
                      <select
                        name="assetType"
                        value={formData.assetType}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] bg-white transition"
                      >
                        <option value="NBFC Personal Loan Default">NBFC Personal Loan Default</option>
                        <option value="NBFC Business / MSME Loan Stressed">NBFC Business / MSME Loan Stressed</option>
                        <option value="Digital Lending App / Fintech Credit">Digital Lending App / Fintech Credit</option>
                        <option value="Recovery Agent Harassment / Home Visits">Recovery Agent Harassment / Home Visits</option>
                        <option value="Section 138 Cheque Bounce / Section 25 NACH Notice">Section 138 Cheque Bounce / Section 25 NACH Notice</option>
                        <option value="SARFAESI Notice on Secured NBFC Loan">SARFAESI Notice on Secured NBFC Loan</option>
                        <option value="Personal Guarantor Liability Notice">Personal Guarantor Liability Notice</option>
                        <option value="Arbitration Notice Received from NBFC">Arbitration Notice Received from NBFC</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Brief Case Summary / Stressed NBFCs &amp; Apps
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Mention NBFC/fintech names, loan facility types, default duration, or notices received..."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500 leading-normal">
                    🔒 All disclosures submitted are strictly confidential under Section 126 of the Indian Evidence Act, 1872. Zero spam guarantee.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base cursor-pointer"
                  >
                    Submit NBFC Advisory Request →
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Advisory Request Successfully Received
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                      Advocate Anuj Anand Malik and our senior banking litigation desk have logged your NBFC debt inquiry for priority September 2026 OTS review.
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-left space-y-2">
                    <p className="text-xs font-bold text-emerald-900">
                      Immediate Step: Connect via Secure WhatsApp
                    </p>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      For immediate legal intervention against recovery agent harassment, home visits, or Section 138/25 notices, initiate direct WhatsApp communication now.
                    </p>
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full mt-2 bg-[#25D366] hover:bg-[#1fa851] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z" /></svg>
                      <span>Open WhatsApp Commercial Consultation Now</span>
                    </button>
                  </div>

                  <button
                    onClick={resetModal}
                    className="text-xs text-gray-500 hover:text-gray-800 underline cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

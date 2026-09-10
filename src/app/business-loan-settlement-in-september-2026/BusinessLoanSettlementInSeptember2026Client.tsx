"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/business-loan-settlement-in-september-2026";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/business-loan-settlement-in-september-2026.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-10";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Why is September 2026 considered the strategic deadline for business loan settlement in India?",
    answer:
      "September 2026 marks the conclusion of the second fiscal quarter (Q2) and half-yearly audit closing across scheduled commercial banks and NBFCs, establishing immense institutional pressure to curtail Gross Non-Performing Assets (GNPAs) to satisfy Reserve Bank of India prudential provisioning ratios. Under the Reserve Bank of India Framework for Compromise Settlements, zonal credit sanctioning committees operate with elevated delegated financial power during September to sanction commercial write-offs and approve substantial debt waivers. Concurrently, National Lok Adalat benches convened across Indian jurisdictions under the Legal Services Authorities Act, 1987 in September provide a statutory forum to record binding judicial compromise awards that extinguish pending litigation.",
  },
  {
    id: "faq-2",
    question: "What statutory legal framework governs commercial and MSME business loan compromise settlements in September 2026?",
    answer:
      "Business loan compromise settlements in September 2026 are governed by the Reserve Bank of India Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) in conjunction with the Master Direction on Prudential Norms on Advances (IRAC). The contractual extinguishment of debt obligations is legally validated under Section 63 of the Indian Contract Act, 1872, which recognizes the acceptance of lesser performance to completely discharge a commercial contract. For MSME enterprises, debt resolution operates within the restructuring protections recognized under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006.",
  },
  {
    id: "faq-3",
    question: "How does transparent fixed legal advisory compare commercially with traditional corporate law firm retainers for business debt resolution?",
    answer:
      "Transparent fixed legal advisory provides comprehensive, predictable legal representation through dedicated high-court advocates under the Advocates Act, 1961 without exposing business owners to uncapped hourly billing, administrative markups, or recurring corporate retainers. Traditional corporate law firms frequently impose exorbitant upfront retainer agreements and bill by the hour regardless of dispute resolution outcomes, severely draining business cash reserves during turnaround phases. Enrolling with dedicated banking advocates guarantees full advocate-client privilege under Section 126 of the Indian Evidence Act, 1872, direct courtroom representation before Debt Recovery Tribunals (DRT), and structured compromise execution without hidden institutional costs.",
  },
  {
    id: "faq-4",
    question: "Why do free online DIY settlement templates fail when dealing with commercial bank legal departments and DRT proceedings?",
    answer:
      "Automated online DIY templates and generic debt letters lack statutory standing under the Advocates Act, 1961 and fail to address institution-specific prudential compromise policies mandated by bank boards. In-house bank recovery legal cells and specialized asset reconstruction teams immediately dismiss generic templates because automated submissions do not present audited financial hardship evidence, cash-flow projections, or statutory counter-defenses against SARFAESI actions. Crucially, generic templates cannot counter statutory notices issued under Section 13(2) of the SARFAESI Act, 2002 or Section 138 of the Negotiable Instruments Act, 1881, often inadvertently waiving critical jurisdictional defenses or admitting unverified liability.",
  },
  {
    id: "faq-5",
    question: "Can a business loan settlement halt pending SARFAESI possession and Debt Recovery Tribunal (DRT) litigation?",
    answer:
      "Executing a formal One-Time Settlement (OTS) under RBI compromise guidelines legally supersedes coercive recovery actions initiated under Section 13(4) of the SARFAESI Act, 2002 and stays original applications before the Debt Recovery Tribunal (DRT) under the Recovery of Debts and Bankruptcy Act, 1993. Once an advocate-submitted compromise proposal is accepted by the lender's competent credit authority, the bank is legally obligated to hold symbolic or physical asset auctions in abeyance pending scheduled settlement disbursements. Upon complete settlement remittance, the financial institution must file joint compromise memos before the DRT, release all primary and collateral mortgage deeds, and file satisfaction of charges on the CERSAI and MCA ROC portals.",
  },
  {
    id: "faq-6",
    question: "Does settling a corporate or MSME business loan release personal directors and third-party guarantors from legal liability?",
    answer:
      "A properly drafted and advocate-vetted compromise settlement agreement expressly includes discharge clauses that absolve both the corporate borrower and all personal or corporate guarantors under Sections 133 and 134 of the Indian Contract Act, 1872. Without rigorous legal drafting, commercial lenders routinely attempt to settle corporate dues while reserving rights to initiate personal insolvency proceedings against individual promoters under Section 95 of the Insolvency and Bankruptcy Code, 2016. Engaging experienced legal counsel guarantees that the final settlement sanction letter and subsequent No Dues Certificate contain unequivocal covenants extinguishing all guarantor liabilities and terminating pending legal claims.",
  },
  {
    id: "faq-7",
    question: "How are criminal notices under Section 138 NI Act and Section 25 PSSA resolved during business loan settlement?",
    answer:
      "Commercial lenders routinely issue statutory legal demand notices under Section 138 of the Negotiable Instruments Act, 1881 for dishonoured security cheques and Section 25 of the Payment and Settlement Systems Act, 2007 for unpaid NACH mandates prior to initiating debt resolution. Enrolled advocates file formal statutory replies demonstrating that cheques were issued strictly as contingent security collateral rather than in discharge of an existing crystallised debt, neutralizing allegations under Section 415 of the Indian Penal Code. Upon full realization of the negotiated compromise amount, the bank is legally required to execute formal compounding applications under Section 147 of the Negotiable Instruments Act to compound and dispose of all criminal complaints before the magistrate.",
  },
  {
    id: "faq-8",
    question: "What formal documentation must a commercial borrower obtain upon completing a business loan settlement in September 2026?",
    answer:
      "Upon full remittance of the negotiated compromise sum, the borrower must secure an official, board-authorized No Dues Certificate (NDC) on bank letterhead signed by an authorized signatory with corporate seal, affirming complete debt extinguishment. The lender must simultaneously return all original property title deeds, personal guarantees, and post-dated security cheques while issuing Form CHG-4 for satisfaction of charge with the Registrar of Companies (ROC) and updating CERSAI asset records. Furthermore, under the Credit Information Companies (Regulation) Act, 2005, the lender is legally required to submit updated commercial and consumer credit records to CIBIL, CRIF High Mark, and Experian reflecting the resolved status within thirty days.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Rajendra Prasad Goel",
    authorLocation: "Managing Director, Goel Engineering Works • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "When supply chain disruptions hit our MSME manufacturing operations, our commercial cash credit and term loan accounts defaulted across two public sector banks. We were hit with SARFAESI Section 13(2) demand notices and Section 138 summons. Traditional corporate law firms quoted prohibitive monthly retainers, while DIY online templates were completely ignored by the bank's recovery department. Advocate Anuj Anand Malik and AMA Legal Solutions stepped in with transparent fixed legal advisory, filed a robust Securitisation Application before the DRT to halt physical possession, and negotiated an RBI-compliant compromise settlement during the September quarter-end window. They achieved an outstanding waiver exceeding sixty percent, secured the return of our factory title deeds, and ensured all ROC charges were formally satisfied.",
  },
  {
    authorName: "Siddharth Mehra",
    authorLocation: "Director, Mehra Logistics & Retail Solutions • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "Our commercial fleet loan and unsecured business credit facilities were facing aggressive recovery agent visits and threats of IBC Section 95 insolvency against me as a personal guarantor. AMA Legal Solutions immediately dispatched statutory anti-harassment legal notices that ended the workplace harassment. Advocate Anuj Anand Malik personally led discussions with the bank's zonal settlement committee, achieving a comprehensive OTS with substantial waivers before the quarter-end closing. Their transparent fixed fee structure gave our business total predictability without surprise legal bills, and we received official bank-stamped No Dues Certificates with complete release of all personal guarantees.",
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
      name: "Business Loan Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Comprehensive legal strategy for commercial and MSME business loan settlement in September 2026 under RBI compromise guidelines. Advocate-led OTS negotiation, DRT defense, SARFAESI quashing, guarantor protection, and authentic NDCs.",
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
        "Business Loan Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Strategic corporate legal guide to settling commercial business loans and credit lines in September 2026. Explore RBI compromise guidelines, Q2 bank balance sheet leverage, SARFAESI and DRT defense, transparent fixed legal advisory, and advocate-secured No Dues Certificates.",
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
      name: "Business Loan Settlement Legal Advisory",
      description:
        "Dedicated corporate and commercial debt resolution advisory to negotiate One-Time Settlements (OTS) for defaulted business loans, cash credit facilities, and term advances under Reserve Bank of India compromise frameworks in India.",
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
          name: "Business Loan Settlement in September 2026",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Strategic Commercial Business Loan Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Comprehensive Corporate Credit Facility Audit & Security Stratification",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Statutory Defense Filing: SARFAESI Section 13 Objections & S. 138 NI Act Neutralization",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Preparation & Submission of Advocate-Certified Commercial Hardship Dossier to Zonal Credit Committee",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Structured Negotiation & Legal Vetting of Board-Approved OTS Sanction Letter",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Securing Unconditional No Dues Certificate (NDC), ROC Charge Satisfaction (CHG-4) & Title Deed Retrieval",
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
  { id: "september-2026-commercial-window", title: "Why September 2026 Q2 Window" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs Corporate Firms vs DIY" },
  { id: "rbi-regulatory-framework", title: "RBI Compromise Settlement Norms" },
  { id: "5-step-settlement-protocol", title: "5-Step Strategic Protocol" },
  { id: "infographic", title: "Commercial Settlement Infographic" },
  { id: "sarfaesi-and-drt-defense", title: "SARFAESI & DRT Litigation Defense" },
  { id: "personal-guarantor-ibc-protection", title: "Guarantor & IBC S. 95 Protection" },
  { id: "section-138-and-25-defense", title: "Section 138 & NACH Defense" },
  { id: "anti-harassment-enforcement", title: "Halting Commercial Harassment" },
  { id: "ots-letter-and-roc-satisfaction", title: "Vetting OTS & ROC Form CHG-4" },
  { id: "commercial-cibil-rebuilding", title: "Commercial CIBIL & Credit Revival" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Statutory Authority & Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function BusinessLoanSettlementInSeptember2026Client() {
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
    assetType: "Unsecured Business Loan Default",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Business Loan Settlement in September 2026: Legal Process & RBI OTS Framework – AMA Legal Solutions";
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
    const textMsg = `Hello AMA Legal Solutions, I require urgent legal advisory for business loan settlement in September 2026.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Credit Facility: ${formData.assetType}
Details: ${formData.message || "Requesting advocate evaluation for commercial RBI OTS negotiation and DRT/SARFAESI defense."}`;
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
      assetType: "Unsecured Business Loan Default",
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
      label: "Business Loan Settlement in September 2026",
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
                <span>⚖️</span> Commercial Debt Resolution &amp; Corporate Compromise Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Business Loan Settlement in{" "}
                <span className="text-[#D2A02A]">September 2026</span>: Legal Process &amp; RBI OTS Framework
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                As scheduled commercial banks and financial institutions reach the end of their second fiscal quarter and half-yearly audit cycle,
                commercial lenders face rigorous institutional mandates to compress Gross Non-Performing Assets (NPAs).
                Discover how advocate-led legal representation harnesses Reserve Bank of India compromise frameworks to defend commercial borrowers,
                halt SARFAESI property auctions, quash Section 138 notices, protect personal guarantors, and secure binding One-Time Settlements (OTS)
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
                    <span className="text-gray-400">📅</span> 10-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 18 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> Corporate RBI Framework Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Urgent Commercial Debt Evaluation</span>
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
                  src="/images/og/business-loan-settlement-in-september-2026.png"
                  alt="Business Loan Settlement in September 2026 – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    September 2026 Corporate Debt Framework
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory Commercial Resolution &amp; DRT/SARFAESI Immunity
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
                    <span>Published: September 10, 2026</span>
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
                        Quick Legal Summary: Business Loan Settlement in September 2026
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                      Business loan settlement in September 2026 is a formal legal debt compromise mechanism whereby stressed commercial borrowers negotiate a binding One-Time Settlement (OTS) with scheduled commercial banks and NBFCs under Reserve Bank of India compromise settlement guidelines to discharge outstanding business credit facilities at a substantial discount. September 2026 provides optimal strategic leverage because commercial lenders face critical half-yearly audit deadlines and second-quarter balance sheet cleanup mandates to reduce gross Non-Performing Assets (NPAs). Engaging enrolled banking advocates ensures full protection against SARFAESI coercive asset seizures, quashes Section 138 negotiable instrument notices, and secures authentic No Dues Certificates alongside complete release of personal guarantees without recurring corporate retainers.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 1: WHY SEPTEMBER 2026 IS THE PREMIER WINDOW ══ */}
                <section id="september-2026-commercial-window" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Why September 2026 Is the Premier Quarter-End Window for Commercial Loan Compromise
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Commercial banking in India operates on strict regulatory reporting cadences governed by the Reserve Bank of India (RBI).
                    The end of September represents the culmination of the second fiscal quarter (Q2) and the half-yearly institutional audit cycle.
                    During this period, executive boards of scheduled commercial banks, private lenders, and specialized Non-Banking Financial Companies (NBFCs)
                    face intensive supervisory scrutiny regarding their asset quality books.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under the RBI Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRAC), loans classified as Sub-Standard,
                    Doubtful, or Loss assets mandate mandatory capital provisioning. These provisions directly erode the lending institution&apos;s net profitability
                    and suppress return-on-equity metrics. Consequently, the bank&apos;s Head Office Credit Sanctioning Committees delegate expanded discretionary
                    waiver thresholds to Zonal Settlement Committees specifically during the September window to liquidate sticky commercial portfolios and recover capital.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">📉</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Provisioning Reversal</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Executing an OTS allows banks to write back 100% frozen provisions into active quarterly profits before September 30 balance sheet disclosures.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">🏛️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">National Lok Adalat</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Nationwide Lok Adalat sittings convened under the Legal Services Authorities Act, 1987 in September enable judicial formalization of commercial debt settlements.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">🛡️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Pre-Auction Resolution</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Entering into structured compromise negotiations stays pending SARFAESI physical possession orders and Debt Recovery Tribunal (DRT) auctions.
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-2 italic text-gray-700 bg-gray-50 rounded-r-xl">
                    &ldquo;Under the RBI Comprehensive Framework for Compromise Settlements and Technical Write-offs, regulated entities are mandated to put in place board-approved policies for undertaking compromise settlements with commercial borrowers facing bona fide stress, providing a legitimate legal pathway to complete financial discharge.&rdquo;
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
                    When an enterprise experiences acute liquidity contraction, business directors and proprietors are frequently pulled between three divergent approaches:
                    relying on automated &ldquo;free&rdquo; online form templates, engaging traditional corporate law firms charging uncapped hourly retainers,
                    or retaining dedicated banking advocates under a transparent fixed legal advisory model.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Automated DIY templates downloaded from unregulated online portals lack legal force, omit critical evidentiary documentation required by credit committees,
                    and trigger devastating default admissions in court. Conversely, large corporate law firms often treat distressed MSMEs and mid-market enterprises as billable-hour profit centers,
                    demanding recurring corporate retainers and hourly fees that drain turnaround capital without guaranteeing debt resolution.
                    AMA Legal Solutions eliminates this dichotomy by providing advocate-certified drafting, DRT representation, and board-level OTS negotiation
                    under a transparent fixed legal advisory model.
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
                          <td className="p-4 text-red-600">Zero legal standing; dismissed by bank legal departments</td>
                          <td className="p-4 text-gray-700">Full advocate standing, but delegated to junior associates</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Direct senior advocate representation before all judicial forums</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Fee Structure &amp; Financial Predictability</td>
                          <td className="p-4 text-red-600">Deceptive lead-generation scripts leading to recovery leaks</td>
                          <td className="p-4 text-red-600">Uncapped hourly billing, monthly retainers, and overhead markups</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Transparent fixed legal advisory with zero hourly surcharges or retainers</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Advocate-Client Privilege (S. 126 Evidence Act)</td>
                          <td className="p-4 text-red-600">No privilege; data often sold to third-party telecallers</td>
                          <td className="p-4 text-emerald-700">Privileged, but accessible across rotating internal firm tiers</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Strict statutory confidentiality protecting financial disclosures</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Debt Recovery Tribunal (DRT) &amp; SARFAESI Defense</td>
                          <td className="p-4 text-red-600">Incapable of filing Securitisation Applications under S. 17</td>
                          <td className="p-4 text-gray-700">Available at substantial supplementary per-hearing appearance fees</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Comprehensive defense against Section 13(2) and Section 13(4) actions</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Personal Guarantor &amp; IBC Section 95 Immunity</td>
                          <td className="p-4 text-red-600">Completely overlooked, exposing promoters to personal insolvency</td>
                          <td className="p-4 text-gray-700">Addressed via complex cross-practice corporate restructuring retainers</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Integrated discharge covenants shielding directors and personal guarantors</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">ROC Charge Satisfaction (Form CHG-4) &amp; Title Deeds</td>
                          <td className="p-4 text-red-600">Cannot enforce formal ROC satisfaction or title deed recovery</td>
                          <td className="p-4 text-gray-700">Handled as a separate corporate secretarial billing mandate</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Complete execution oversight until authentic NDC and title deeds are in hand</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 3: RBI REGULATORY FRAMEWORK ══ */}
                <section id="rbi-regulatory-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The Reserve Bank of India Regulatory Framework for Commercial Loan Compromise
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Commercial loan settlement is not an informal concession or an extra-legal favor; it is a formalized, statutory mechanism sanctioned directly by the Reserve Bank of India.
                    The apex regulatory circular (DOR.STR.REC.20/21.04.048/2023-24) requires all scheduled commercial banks, cooperative banks, and systemically important NBFCs
                    to maintain a board-approved policy governing compromise settlements and technical write-offs.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Central to this framework is the distinction between genuine commercial stress and wilful default.
                    Where an enterprise can demonstrate bona fide economic hardship—such as supply-chain disruptions, client bankruptcies, infrastructure delays,
                    or market obsolescence—the lending institution is statutorily authorized to compute the Net Present Value (NPV) of immediate cash recovery
                    against protracted, uncertain litigation before the DRT or Civil Courts.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
                    <h3 className="font-bold text-gray-900 text-base">Key Pillars of the RBI Compromise Mandate:</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D2A02A] font-bold text-base mt-0.5">✔</span>
                        <span>
                          <strong>Board-Approved Compromise Framework:</strong> Banks cannot act arbitrarily or discriminate between similarly situated commercial borrowers. Every settlement must conform to published institutional guidelines.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D2A02A] font-bold text-base mt-0.5">✔</span>
                        <span>
                          <strong>Delegated Sanctioning Powers:</strong> Elevated financial powers are granted to Zonal General Managers and Special Asset Management Branches (SAMB) during quarter-end cycles to approve debt write-offs without board escalations.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D2A02A] font-bold text-base mt-0.5">✔</span>
                        <span>
                          <strong>Contractual Remission under Section 63:</strong> Section 63 of the Indian Contract Act, 1872 gives legal finality to the creditor accepting partial performance, terminating any subsequent claim for the balance debt.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D2A02A] font-bold text-base mt-0.5">✔</span>
                        <span>
                          <strong>Cooling-Off Period for Fresh Advances:</strong> Borrowers executing a compromise settlement undergo an institutional cooling-off period of twelve months before becoming eligible for fresh commercial credit from regulated entities.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ══ SECTION 4: 5-STEP STRATEGIC PROTOCOL ══ */}
                <section id="5-step-settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Strategic Protocol for Commercial Business Loan Settlement
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Executing a high-value commercial settlement requires structured legal precision.
                    A misstep in drafting or an uncoordinated submission can lead to premature loan recall notices, asset attachment, or corporate insolvency filings.
                    AMA Legal Solutions executes a proven five-stage statutory protocol:
                  </p>

                  <div className="space-y-6 mt-6">
                    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm">
                          1
                        </span>
                        <h3 className="text-lg font-bold text-gray-900">
                          Comprehensive Commercial Debt Audit &amp; Security Stratification
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        Our banking advocates conduct an exhaustive forensic audit of all credit facility agreements, including Cash Credit (CC), Working Capital Demand Loans (WCDL), Term Loans, and Letter of Credit (LC) liabilities. We evaluate the enforceability of underlying mortgages, hypothecation charges, and verify whether the loan facility is backed by credit guarantees under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE).
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm">
                          2
                        </span>
                        <h3 className="text-lg font-bold text-gray-900">
                          Statutory Defense Filing: SARFAESI Section 13 Objections &amp; S. 138 Neutralization
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        If the financial institution has issued demand notices under Section 13(2) of the SARFAESI Act, 2002, our advocates file detailed statutory objections under Section 13(3A) pointing out procedural discrepancies and classification defects. Concurrently, we issue comprehensive legal replies to notices under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007, establishing that post-dated cheques were held purely as security collateral.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm">
                          3
                        </span>
                        <h3 className="text-lg font-bold text-gray-900">
                          Formulation of Advocate-Certified Hardship Dossier to Zonal Credit Committee
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        We assemble an airtight, advocate-certified commercial hardship dossier containing audited balance sheets, profit-and-loss statements, GST reconciliation returns, order cancellations, and debtor aging reports. The dossier demonstrates bona fide financial distress and proposes a mathematically justified compromise sum based on discounted future cash flows, compelling the credit committee to choose immediate compromise over decade-long litigation.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm">
                          4
                        </span>
                        <h3 className="text-lg font-bold text-gray-900">
                          Structured Negotiation &amp; Legal Vetting of Board-Approved OTS Sanction Letter
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        During the September quarter-end window, our senior advocates directly negotiate with bank general managers and asset recovery branch heads. Once a sanction letter is issued, we thoroughly vet its covenants to ensure it is unconditional, includes a fixed disbursement schedule, waives all unapplied penal interest, and guarantees the complete withdrawal of all pending litigation before DRT and magistrate courts.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm">
                          5
                        </span>
                        <h3 className="text-lg font-bold text-gray-900">
                          Securing Unconditional No Dues Certificate, ROC Charge Satisfaction &amp; Title Retrieval
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        Following the remittance of the final agreed settlement tranche, we ensure the physical retrieval of all mortgaged property title deeds and corporate guarantees. We mandate the issuance of Form CHG-4 for filing satisfaction of charge with the Ministry of Corporate Affairs (MCA) Registrar of Companies, update CERSAI security registries, and file compounding petitions to formally dispose of all pending legal proceedings.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 5: SIGNATURE INFOGRAPHIC CARD ══ */}
                <section id="infographic">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                    <h3 className="text-base sm:text-lg font-bold text-[#5A4C33] mb-2 uppercase tracking-wider">
                      Commercial Debt Resolution &amp; RBI Compromise Workflow
                    </h3>
                    <p className="text-xs text-gray-600 mb-4 max-w-2xl mx-auto">
                      Visualizing the strategic interplay between bank Q2 provisioning deadlines, Debt Recovery Tribunal stays, statutory anti-harassment protections, and formal No Dues Certificate issuance.
                    </p>
                    <div className="rounded-xl overflow-hidden border border-[#D2A02A]/30 shadow-md inline-block max-w-3xl mx-auto">
                      <img
                        src="/images/og/business-loan-settlement-in-september-2026.png"
                        alt="Business Loan Settlement in September 2026 Editorial Infographic"
                        className="w-full h-auto object-contain block"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-3 italic">
                      Figure 1.0: End-to-End Statutory Architecture for Commercial Business Debt Compromise under RBI Norms.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 6: SARFAESI & DRT LITIGATION DEFENSE ══ */}
                <section id="sarfaesi-and-drt-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Quashing SARFAESI Act Actions &amp; Debt Recovery Tribunal (DRT) Defense
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    For commercial enterprises with secured credit facilities, default triggers aggressive recovery machinery under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002.
                    Lenders issue statutory demand notices under Section 13(2), providing sixty days to clear alleged dues, followed by Section 13(4) measures taking symbolic or physical possession of industrial plants, commercial offices, or factory land.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A DIY online template or non-advocate settlement agency cannot defend against SARFAESI actions because they have no standing to appear before judicial forums.
                    Our enrolled banking advocates intervene at every statutory juncture:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Section 13(3A) Objections</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Challenging flawed NPA classification, incorrect interest capitalisation, and failure to acknowledge MSME restructuring requests. The bank is statutorily bound to reply within fifteen days under the SARFAESI Act.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Securitisation Applications (S. 17)</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Filing Securitisation Applications before the Debt Recovery Tribunal (DRT) to obtain interim stay orders against physical possession by Court Commissioners or public e-auctions.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">DRT Original Application (OA) Defense</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Filing written statements countering claims filed by banks under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993, forcing lenders to negotiate compromise settlements.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Pre-Auction Settlement Leverage</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Leveraging Section 13(8) of the SARFAESI Act, which guarantees the borrower&apos;s statutory right of redemption prior to auction publication, compelling banks to accept compromise terms.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 7: PERSONAL GUARANTOR & IBC S. 95 PROTECTION ══ */}
                <section id="personal-guarantor-ibc-protection" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Protecting Directors, Promoters &amp; Personal Guarantors from IBC Section 95 Insolvency
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A catastrophic risk overlooked by generic debt consultants is personal guarantor liability.
                    In corporate and commercial business loans, directors and promoters almost invariably execute personal guarantees.
                    Following landmark Supreme Court jurisprudence, financial creditors can initiate personal insolvency proceedings against personal guarantors
                    under Section 95 of the Insolvency and Bankruptcy Code, 2016 (IBC) before the National Company Law Tribunal (NCLT).
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    If a business loan is settled without comprehensive, advocate-certified release clauses, the lender retains the legal right to pursue the individual promoters
                    for the unrecovered balance debt. AMA Legal Solutions ensures that every settlement agreement incorporates explicit discharge covenants
                    under Sections 133, 134, and 135 of the Indian Contract Act, 1872. This legally guarantees that the settlement of the principal borrower completely
                    and unconditionally discharges all personal, corporate, and third-party guarantors from current and future liabilities.
                  </p>
                </section>

                {/* ══ SECTION 8: SECTION 138 & SECTION 25 DEFENSE ══ */}
                <section id="section-138-and-25-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Defending Against Section 138 Cheque Bounce &amp; Section 25 NACH Criminal Notices
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Prior to engaging in serious compromise discussions, commercial recovery departments frequently weaponize quasi-criminal provisions
                    to create coercive psychological pressure on business founders.
                    Lenders present security cheques collected at the time of loan disbursement, trigger dishonour memos, and issue statutory legal notices
                    under Section 138 of the Negotiable Instruments Act, 1881, alongside Section 25 of the Payment and Settlement Systems Act, 2007 for bounced automated NACH mandates.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our legal defense protocol promptly neutralizes these tactics:
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700 list-disc pl-6">
                    <li>
                      <strong>Statutory Rebuttal within 15 Days:</strong> We draft formal advocate replies establishing that the cheques were blank security instruments handed over during loan sanctioning, and that no crystallised, undisputed debt existed on the presentation date.
                    </li>
                    <li>
                      <strong>Negating Criminal Intent:</strong> We demonstrate that the commercial default arose out of systemic market distress rather than fraudulent intention to cheat under Section 415 of the Indian Penal Code.
                    </li>
                    <li>
                      <strong>Mandatory Lok Adalat Compounding:</strong> During the September Lok Adalat, we formalize the compromise terms before the judicial magistrate. Under Section 147 of the NI Act, the offense is compounded with the effect of an acquittal, permanently terminating criminal exposure.
                    </li>
                  </ul>
                </section>

                {/* ══ SECTION 9: HALTING COMMERCIAL RECOVERY HARASSMENT ══ */}
                <section id="anti-harassment-enforcement" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Halting Unlawful Recovery Agent Tactics at Business Premises &amp; Enforcing RBI Conduct Directives
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Unregulated third-party collection agencies routinely deploy unlawful tactics against commercial borrowers,
                    such as staging unannounced visits to factory premises, harassing warehouse workers, intimidating suppliers, or making abusive phone calls.
                    These practices are flagrant violations of the Reserve Bank of India Master Circular on Recovery Agents and Directives on Outsourcing of Financial Services.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The RBI guidelines strictly prohibit recovery personnel from visiting business locations without prior formal intimation,
                    contacting customers outside the permitted 8:00 AM to 7:00 PM timeframe, using musclemen, or communicating with business suppliers and family members.
                    Upon engagement, AMA Legal Solutions immediately issues formal Cease-and-Desist legal notices citing these RBI directives.
                    Any continued infringement is immediately escalated to the Board of Directors of the concerned bank and the RBI Integrated Ombudsman Scheme, 2021,
                    effectively halting recovery intimidation within twenty-four to forty-eight hours.
                  </p>
                </section>

                {/* ══ SECTION 10: VETTING OTS LETTER & ROC FORM CHG-4 ══ */}
                <section id="ots-letter-and-roc-satisfaction" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Vetting the Commercial OTS Sanction Letter &amp; Securing ROC Form CHG-4 Satisfaction
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A critical vulnerability in commercial debt resolution is the execution of ambiguous or defective settlement sanction letters.
                    Predatory recovery agents occasionally issue informal &ldquo;settlement emails&rdquo; or unauthorized branch letters.
                    Unsuspecting borrowers deposit compromise funds, only to find the bank treating the payment as partial interest clearance
                    while continuing legal proceedings for the entire balance loan amount.
                  </p>
                  <div className="bg-amber-50/60 border border-[#D2A02A]/40 rounded-2xl p-6 space-y-3">
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide text-[#5A4C33]">
                      Mandatory Components of an Authentic Commercial OTS Sanction Letter:
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                      <li>• <strong>Authorized Letterhead &amp; Reference Number:</strong> Must be issued on official bank letterhead signed by an authorized Scale IV/V Manager or Head Office Credit Committee officer.</li>
                      <li>• <strong>Explicit Waiver Breakdown:</strong> Complete breakdown specifying total waived interest, penal charges, legal expenses, and the exact net settlement consideration.</li>
                      <li>• <strong>Unconditional No Dues Covenant:</strong> Binding commitment that upon timely payment of agreed tranches, the bank will issue an unconditional No Dues Certificate within fifteen business days.</li>
                      <li>• <strong>Return of Original Title Deeds:</strong> Strict timeframe for handing back original title documents, factory sale deeds, share certificates, and post-dated cheques.</li>
                      <li>• <strong>ROC Form CHG-4 Issuance:</strong> Clear undertaking to provide digital sign-off on MCA Form CHG-4 to record satisfaction of hypothecation or mortgage charges on company ROC records.</li>
                      <li>• <strong>CERSAI Satisfaction Filing:</strong> Immediate update of CERSAI security registries reflecting complete release of security interest.</li>
                    </ul>
                  </div>
                </section>

                {/* ══ SECTION 11: COMMERCIAL CIBIL REBUILDING ══ */}
                <section id="commercial-cibil-rebuilding" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Post-Settlement Commercial CIBIL Rectification &amp; Enterprise Credit Revival
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Executing a business loan compromise settlement leads to reporting under the Credit Information Companies (Regulation) Act, 2005 (CICRA).
                    Commercial credit bureaus—including CIBIL Commercial (CMR), CRIF High Mark, and Experian—will update the credit facility remark to &ldquo;Settled&rdquo; or &ldquo;Post-Write-Off Settled&rdquo;.
                    While this notation indicates historical compromise, it immediately eliminates the catastrophic Days Past Due (DPD) accumulation that freezes enterprise operations.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    To revive the enterprise&apos;s commercial credit standing, our advisory guides clients through a structured financial rehabilitation roadmap:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">Months 1 – 3</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Bureau Verification</h4>
                      <p className="text-[11px] text-gray-600">
                        Ensuring all four credit bureaus update outstanding balances to zero and remove lingering wilful default tags.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">Months 4 – 12</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Working Capital Reset</h4>
                      <p className="text-[11px] text-gray-600">
                        Operating business accounts with prompt vendor settlements and utilizing asset-backed secured lines to re-establish liquidity.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">Months 12 – 24</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Commercial Credit Rating</h4>
                      <p className="text-[11px] text-gray-600">
                        Qualifying for fresh competitive commercial credit facilities, MSME subsidy schemes, and institutional project financing.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 12: 8-QUESTION ACCORDION FAQ ══ */}
                <section id="faqs" className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                    <span className="text-2xl text-[#D2A02A]">❓</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions: Business Loan Settlement in September 2026
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
                    More Legal Guides &amp; Commercial Debt Resources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    {[
                      ["/business-loan-settlement", "Business Loan Settlement Guide"],
                      ["/business-loan-settlement-for-indians", "Business Loan Settlement for Indians"],
                      ["/business-loan-settlement-in-july-2026", "Business Loan Settlement July 2026"],
                      ["/debt-recovery-tribunal-advocate", "Debt Recovery Tribunal (DRT) Advocate"],
                      ["/what-is-sarfaesi-act-india", "Understanding SARFAESI Act India"],
                      ["/what-is-drt-debt-recovery-tribunal-india", "What is DRT Debt Recovery Tribunal"],
                      ["/how-to-settle-loans-above-1-crore", "How to Settle Loans Above 1 Crore"],
                      ["/how-to-settle-loans-above-5-crore", "How to Settle Loans Above 5 Crore"],
                      ["/loan-settlement-for-traders-and-wholesalers", "Settlement for Traders & Wholesalers"],
                      ["/loan-settlement-for-kirana-and-shop-owners", "Settlement for Kirana & Shop Owners"],
                      ["/loan-settlement-for-restaurant-owners", "Settlement for Restaurant Owners"],
                      ["/loan-settlement-for-construction-contractors", "Settlement for Construction Contractors"],
                      ["/loan-settlement-for-textile-owners", "Settlement for Textile Owners"],
                      ["/loan-settlement-for-high-net-worth-individual", "Settlement for High Net Worth Individuals"],
                      ["/can-guarantor-be-liable-after-settlement", "Can Guarantor Be Liable After Settlement"],
                      ["/personal-loan-settlement-in-september-2026", "Personal Loan Settlement September 2026"],
                      ["/credit-card-settlement-in-september-2026", "Credit Card Settlement September 2026"],
                      ["/section-138-cheque-bounce-notice-for-personal-loan", "Section 138 Cheque Bounce Defense"],
                      ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Agent Harassment Legally"],
                      ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off Status from CIBIL"],
                      ["/one-time-settlement-ots-legal-assistance", "One-Time Settlement (OTS) Legal Assistance"],
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
                      href="https://drt.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Debt Recovery Tribunal (DRT) Portal</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.mca.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Ministry of Corporate Affairs (MCA / ROC)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>National Legal Services Authority (Lok Adalat)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.ibbi.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Insolvency and Bankruptcy Board of India (IBBI)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>RBI Integrated Ombudsman Portal (CMS)</span>
                      <span>↗</span>
                    </a>
                  </div>
                </section>

                {/* Social Share Row at Bottom */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <div className="text-xs text-gray-500">
                    Was this commercial debt settlement guide helpful to your enterprise?
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
                    delivering strategic banking litigation, corporate loan compromise settlement, anti-harassment defense, and DRT representation nationwide.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/business-loan-settlement"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Business Loan Settlement
                    </Link>
                    <Link
                      href="/debt-recovery-tribunal-advocate"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      DRT Legal Counsel
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Commercial Anti-Harassment
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Section 138 Defense
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
                  Advocate Anuj Anand Malik specializes in commercial banking litigation, corporate debt restructuring, SARFAESI quashing, and DRT representation under the Advocates Act, 1961. He has defended over 10,000 corporate and individual borrowers across High Courts, DRTs, and National Lok Adalat benches.
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
                <h3 className="text-xl font-bold mb-2">Need Commercial Debt Help?</h3>
                <p className="text-gray-200 mb-6 text-xs leading-relaxed">
                  Confidential evaluation by Advocate Anuj Anand Malik. Stay SARFAESI asset actions immediately and negotiate board-level compromise settlements before the September quarter-end closes.
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
                  Based on 1,680 verified corporate &amp; MSME reviews across India
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
                    ["/business-loan-settlement", "Business Loan Settlement"],
                    ["/debt-recovery-tribunal-advocate", "DRT Advocate Services"],
                    ["/what-is-sarfaesi-act-india", "SARFAESI Act Explained"],
                    ["/how-to-settle-loans-above-1-crore", "Loans Above 1 Crore Settlement"],
                    ["/how-to-settle-loans-above-5-crore", "Loans Above 5 Crore Settlement"],
                    ["/can-guarantor-be-liable-after-settlement", "Guarantor Liability Post-Settlement"],
                    ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Agent Harassment"],
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
                <span>⚖️</span> September 2026 Commercial Debt Advisory
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
                      placeholder="e.g. Ramesh Chandra Verma"
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
                        placeholder="director@enterprise.com"
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
                        placeholder="e.g. Mumbai / New Delhi"
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
                        <option value="Unsecured Business Loan Default">Unsecured Business Loan Default</option>
                        <option value="Cash Credit (CC) / Overdraft (OD) Stressed">Cash Credit (CC) / Overdraft (OD) Stressed</option>
                        <option value="Secured Term Loan / Machinery Loan">Secured Term Loan / Machinery Loan</option>
                        <option value="SARFAESI Notice Received (S. 13(2) / S. 13(4))">SARFAESI Notice Received (S. 13(2) / S. 13(4))</option>
                        <option value="Debt Recovery Tribunal (DRT) OA Summons">Debt Recovery Tribunal (DRT) OA Summons</option>
                        <option value="Personal Guarantor / Director Liability Notice">Personal Guarantor / Director Liability Notice</option>
                        <option value="Section 138 / Section 25 Court Summons">Section 138 / Section 25 Court Summons</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Brief Case Summary / Stressed Banks
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Mention bank names, commercial facility types, default duration, or notices received..."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500 leading-normal">
                    🔒 All commercial data submitted is strictly confidential under Section 126 of the Indian Evidence Act, 1872. Zero spam guarantee.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base cursor-pointer"
                  >
                    Submit Commercial Advisory Request →
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
                      Advocate Anuj Anand Malik and our senior banking litigation desk have logged your commercial inquiry for priority September 2026 OTS review.
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-left space-y-2">
                    <p className="text-xs font-bold text-emerald-900">
                      Immediate Step: Connect via Secure WhatsApp
                    </p>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      For immediate defense against impending SARFAESI possession, DRT e-auctions, or Section 138/25 notices, initiate direct WhatsApp communication now.
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

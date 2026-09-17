"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/when-to-choose-debt-settlement";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/when-to-choose-debt-settlement.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-17";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "When should a borrower choose debt settlement over loan restructuring or refinancing?",
    answer:
      "A borrower should choose debt settlement when their monthly unsecured debt servicing obligations exceed fifty percent of verifiable take-home income and unmanageable financial distress makes full principal repayment impossible within three to five years. Debt restructuring and consolidation loans require a pristine credit rating and sustained cash flow, whereas One-Time Settlement (OTS) under Reserve Bank of India compromise guidelines provides an immediate legal exit by extinguishing outstanding unsecured liabilities through a discounted lump-sum compromise. Choosing settlement is legally appropriate when ongoing monthly interest and compounding penal charges perpetually consume liquidity without reducing the underlying principal balance.",
  },
  {
    id: "faq-2",
    question: "What financial and delinquency threshold indicates that debt settlement is legally appropriate?",
    answer:
      "Under the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets, the primary regulatory threshold occurs when an unsecured credit facility crosses ninety days past due (DPD) and is officially classified as a Non-Performing Asset (NPA). Prior to this milestone, banks rarely entertain compromise settlement discussions because accounts are categorized as Standard Stressed assets under SMA-0, SMA-1, or SMA-2 classifications. Once classified as an NPA, lending institutions are statutorily mandated to make capital provisioning on their balance sheets, creating institutional incentive to approve advocate-negotiated compromise settlements with substantial interest and principal waivers.",
  },
  {
    id: "faq-3",
    question: "Why should distressed borrowers avoid debt settlement for secured loans like home or auto loans?",
    answer:
      "Borrowers should strictly avoid debt settlement for secured borrowings because secured credit facilities are legally anchored by registered mortgages or hypothecations governed under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002. Under Section 13(2) and Section 13(4) of the SARFAESI Act, secured lenders possess the statutory power to seize, take physical possession of, and auction mortgaged residential or commercial property without civil court intervention. Debt settlement is therefore uniquely viable and strategically effective for unsecured liabilities—including personal loans, credit card outstandings, and collateral-free business loans—where lenders lack asset seizure remedies.",
  },
  {
    id: "faq-4",
    question: "Why do free online DIY settlement templates fail in court and before bank compromise committees?",
    answer:
      "Free automated online DIY settlement templates fail because they lack legal standing under the Advocates Act, 1961 and do not comply with the stringent evidentiary criteria demanded by institutional bank compromise committees. Boilerplate letters downloaded from unregulated web portals frequently contain unintended admissions of unconditional civil liability, which bank litigation recovery wings exploit to fast-track coercive legal proceedings. Furthermore, automated DIY templates cannot establish a verified forensic paper trail of bona fide hardship or defend a borrower before a Judicial Magistrate when lenders initiate criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881.",
  },
  {
    id: "faq-5",
    question: "How does transparent fixed legal advisory benefit borrowers compared to corporate firm retainers?",
    answer:
      "Transparent fixed legal advisory eliminates the severe financial uncertainty of open-ended corporate law firm retainers and hourly billable fees, providing distressed borrowers with total cost predictability from initial forensic ledger audit to final account closure. Retaining an enrolled advocate provides statutory advocate-client privilege under Section 126 of the Indian Evidence Act, 1872, ensuring that confidential personal financial records remain legally protected against third-party disclosure. Unlike unregulated commercial debt settlement agencies that extract recurring monthly administrative fees without courtroom representation, licensed advocates provide direct magistrate court appearances, Lok Adalat formalization, and institutional negotiation without surprise retainers.",
  },
  {
    id: "faq-6",
    question: "If a lender issues a Section 138 or Section 25 notice, is it still possible to choose debt settlement?",
    answer:
      "Yes, receiving a statutory notice under Section 138 of the Negotiable Instruments Act, 1881 for cheque bounce or Section 25 of the Payment and Settlement Systems Act, 2007 for NACH mandate dishonour does not preclude choosing debt settlement. In fact, these quasi-criminal proceedings represent a critical catalyst where retaining an advocate allows the timely service of a formal legal reply demonstrating bona fide financial incapacity and disproving fraudulent intention under Section 415 of the Indian Penal Code. Because offenses under Section 138 and Section 25 are legally compoundable, executing an official One-Time Settlement (OTS) binds the lending institution to file formal compounding applications and withdraw all magistrate court proceedings.",
  },
  {
    id: "faq-7",
    question: "How does legal representation enforce Reserve Bank of India anti-harassment directives against recovery agents?",
    answer:
      "Serving a formal Vakalatnama and statutory cease-and-desist notice from an enrolled advocate immediately triggers the Reserve Bank of India Directives on Recovery Agents and Master Direction on Fair Practices Code for Lenders. These statutory regulations strictly prohibit commercial banks and NBFC recovery agents from contacting borrowers before 8:00 AM or after 7:00 PM, making unannounced visits to workplaces, or intimidating family members. Any subsequent violation constitutes an actionable regulatory breach, empowering the advocate to lodge institutional complaints under the RBI Integrated Ombudsman Scheme, 2021 and initiate contempt or civil damages claims against the lending institution.",
  },
  {
    id: "faq-8",
    question: "What statutory instrument proves that a debt is permanently settled and legally closed?",
    answer:
      "The definitive legal proof of debt extinguishment is an official, bank-stamped No Dues Certificate (NDC) or Account Closure Letter issued on the lending institution's corporate letterhead, signed by an authorized zonal officer with an authentic reference number. Under the Indian Contract Act, 1872, this statutory instrument confirms complete receipt of the sanctioned compromise amount and legally discharges the borrower and any guarantors from all future liability. Borrowers must ensure this document is forensically authenticated by their legal counsel before releasing final settlement funds, preventing unauthorized collection agencies from misallocating payments as partial interest collections.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Vikramaditya Rao",
  authorRole: "Technology Consultant, Bengaluru • Settled Multiple Unsecured Credit Facilities",
  reviewBody:
    "When severe business contract cancellations left my monthly unsecured loan and credit card obligations exceeding my total monthly earnings, I was completely trapped in a cycle of paying penalties without reducing principal. Corporate law firms demanded exorbitant advance retainers, while free DIY templates were completely ignored by bank recovery managers. Advocate Anuj Anand Malik and AMA Legal Solutions provided transparent fixed legal advisory, evaluated my debt distress indicators, and confirmed that choosing debt settlement under RBI compromise guidelines was my most sound legal pathway. They defended me against Section 138 notices, stopped aggressive recovery harassment, and negotiated authentic bank OTS letters with official No Dues Certificates.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "When to Choose Debt Settlement? Signs, Legal Timing & RBI OTS Guide",
      description:
        "Comprehensive legal and commercial guide on when to choose debt settlement in India. Learn critical insolvency triggers, debt-to-income thresholds, RBI compromise frameworks, and advocate-led OTS negotiation.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "When to Choose Debt Settlement? Signs, Legal Timing & RBI OTS Guide",
      description:
        "Understand when to choose debt settlement in India. Discover financial distress indicators, debt-to-income thresholds, legal protections under Section 63 Indian Contract Act, Section 138 defense, and advocate representation.",
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
      name: "Advocate-Led Debt Settlement Eligibility & Advisory",
      description:
        "Specialized legal advisory and representation to determine when to choose debt settlement under Reserve Bank of India compromise frameworks, shielding borrowers from harassment and securing bank No Dues Certificates.",
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
          name: "When to Choose Debt Settlement",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Step Legal Protocol for Choosing and Executing Debt Settlement",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Financial Distress & Insolvency Diagnostics",
          description:
            "Exhaustive legal review of unsecured loan agreements, debt-to-income ratios, and interest compounding schedules to evaluate whether settlement is legally and economically superior to restructuring.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Statutory Cease-and-Desist Notice Under RBI Guidelines",
          description:
            "Formal issuance of an advocate notice invoking the RBI Master Direction on Fair Practices Code to immediately halt illegal recovery agent harassment, calls outside statutory hours, and home visits.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Preparation of Advocate Hardship Dossier Under Section 63",
          description:
            "Compiling an evidence-backed One-Time Settlement (OTS) petition substantiating genuine insolvency, medical hardship, or loss of livelihood under Section 63 of the Indian Contract Act, 1872.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Institutional Compromise Committee Negotiation & Letter Vetting",
          description:
            "Senior advocate representation before bank stressed asset committees, negotiating maximum principal and penal interest waivers and forensically verifying the official bank OTS sanction letter.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Settlement Execution, No Dues Certificate Delivery & CIBIL Rehabilitation",
          description:
            "Supervising direct settlement fund transfer to the lending institution, securing an unconditional No Dues Certificate (NDC), compounding court proceedings, and managing credit bureau restoration.",
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
  { id: "core-financial-indicators", title: "Critical Triggers: When to Choose Settlement" },
  { id: "strategic-assessment-matrix", title: "Settlement vs Consolidation vs Restructuring" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs DIY Templates vs Corporate Firms" },
  { id: "when-not-to-choose-settlement", title: "When NOT to Choose Debt Settlement" },
  { id: "5-step-settlement-protocol", title: "5-Step Legal Settlement Protocol" },
  { id: "signature-infographic", title: "Decision Framework Infographic" },
  { id: "statutory-criminal-defense", title: "Section 138 & Section 25 Defense" },
  { id: "rbi-anti-harassment-enforcement", title: "Enforcing RBI Anti-Harassment Rules" },
  { id: "settlement-letter-and-ndc", title: "Vetting OTS Sanction Letter & NDC" },
  { id: "cibil-impact-and-restoration", title: "CIBIL Score Impact & Rehabilitation" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "Statutory References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function WhenToChooseDebtSettlementClient() {
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
    const textMsg = `Hello AMA Legal Solutions, I would like legal advice on whether to choose debt settlement for my financial obligations.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Debt Facility: ${formData.assetType}
Situation: ${formData.message || "Requesting transparent fixed legal advisory under the RBI compromise settlement framework."}`;
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
      "When to Choose Debt Settlement? Signs, Legal Timing & RBI OTS Guide – AMA Legal Solutions";
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
      label: "When to Choose Debt Settlement",
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
                <span>⚖️</span> Strategic Insolvency Analysis &amp; RBI OTS Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                When to Choose <span className="text-[#D2A02A]">Debt Settlement</span>? Signs, Legal Timing &amp; RBI OTS Guide
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Determine the precise financial and statutory inflection point to choose One-Time Settlement (OTS) under Reserve Bank of India compromise frameworks.
                Discover how advocate-led legal representation terminates compound penal interest traps, halts unlawful recovery agent harassment, defends against
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
                  <span>Evaluate Settlement Eligibility</span>
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
                  src="/images/og/when-to-choose-debt-settlement.png"
                  alt="When to Choose Debt Settlement in India – Statutory Strategic Framework"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Strategic Debt Resolution Decision Model
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    RBI Compromise Framework &amp; Judicial Protection
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
                  Published: <span className="font-semibold text-gray-700">September 17, 2026</span> &bull; Practice: <span className="font-semibold text-gray-700">Insolvency Diagnostics &amp; Stressed Assets Advisory</span>
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
                  A borrower should choose debt settlement when unsecured debt servicing obligations exceed fifty percent of verifiable monthly income, severe financial hardship makes full principal repayment impossible within three to five years, and accounts have crossed ninety days of delinquency into Non-Performing Asset (NPA) status under Reserve Bank of India guidelines. Under Section 63 of the Indian Contract Act, 1872, debt settlement legally extinguishes outstanding debt obligations through a discounted lump-sum compromise, stopping compound interest accrual and halting coercive recovery litigation. Choosing advocate-led representation ensures statutory immunity against recovery agent harassment, quashes criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007, and guarantees the issuance of an authentic bank No Dues Certificate.
                </p>
              </div>

              {/* ══ SECTION 1: CRITICAL TRIGGERS: WHEN TO CHOOSE DEBT SETTLEMENT ══ */}
              <section id="core-financial-indicators" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  FINANCIAL &amp; LEGAL DIAGNOSTICS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Critical Triggers: When to Choose Debt Settlement in India
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Deciding when to transition from regular debt servicing to a formal One-Time Settlement (OTS) is one of the most critical financial and legal decisions an individual or business owner can make. Debt settlement is not an evasion of liability; rather, it is a statutorily recognized resolution mechanism designed for situations where continued full repayment has become mathematically impossible or legally self-destructive.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing severe distress frequently make the mistake of exhausting emergency savings, liquidating retirement funds, or taking predatory high-interest informal loans in a futile attempt to service unmanageable bank EMIs. Recognizing the six core indicators of structural insolvency enables borrowers to seek timely advocate representation under Reserve Bank of India (RBI) compromise frameworks before irreparable financial damage occurs:
                </p>

                <div className="space-y-4 my-6">
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">1.</span> Debt-to-Income (DTI) Ratio Exceeding Fifty Percent
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      When cumulative monthly unsecured Equated Monthly Installments (EMIs) and revolving minimum credit card dues exceed fifty to sixty percent of verifiable net monthly earnings, the borrower enters the critical insolvency zone. In this state, basic living expenditures, housing costs, and healthcare obligations cannot be sustained without taking on additional secondary debt, creating an inescapable compounding debt trap.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">2.</span> Involuntary Livelihood Destruction or Catastrophic Hardship
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      Genuine, documented financial hardship—including sudden corporate retrenchment, business dissolution, loss of primary commercial contracts, permanent disability, or catastrophic family medical emergencies—renders original loan agreements commercially frustrated. Under <strong>Section 63 of the Indian Contract Act, 1872</strong>, Indian law explicitly empowers lenders to accept reduced performance when original contractual expectations cannot be fulfilled due to bona fide distress.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">3.</span> The Minimum Payment Trap: Zero Principal Reduction
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      When credit card holders continuously pay only the &ldquo;Minimum Amount Due&rdquo; (MAD), finance charges compounding at annualized rates of forty to fifty-four percent, coupled with late-payment surcharges and Goods and Services Tax (GST), consume virtually the entire payment. Even after months of diligent payments, the principal debt remains intact or increases. Debt settlement stops this compounding hemorrhage by freezing the ledger and negotiating a conclusive resolution.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">4.</span> Delinquency Crossing Ninety Days Past Due (NPA Classification)
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      Under the <strong>Reserve Bank of India Prudential Framework for Resolution of Stressed Assets</strong>, an account delinquent for more than ninety consecutive days is statutorily classified as a Non-Performing Asset (NPA). Once an account becomes an NPA, institutional lenders must allocate mandatory capital provisions against the bad loan, creating regulatory incentives for bank compromise committees to approve advocate-negotiated settlements with substantial waivers.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">5.</span> Commencement of Recovery Agent Intimidation &amp; Harassment
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      When lending institutions outsource collection files to third-party recovery agencies that resort to abusive phone calls, late-night contacts, unannounced residential visits, or workplace intrusions, self-negotiation has broken down. Choosing advocate-led debt settlement immediately invokes the <strong>RBI Master Direction on Fair Practices Code</strong>, shielding the borrower behind formal legal representation.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">6.</span> Receipt of Statutory Demand Notices (Section 138 / Section 25)
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      The service of formal legal notices under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> (cheque bounce) or <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong> (electronic mandate dishonour) signals that the lender is preparing magistrate court litigation. Retaining an advocate at this junction transforms judicial exposure into an institutional compromise settlement before a National Lok Adalat bench.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 2: STRATEGIC ASSESSMENT MATRIX ══ */}
              <section id="strategic-assessment-matrix" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  COMPARATIVE STRATEGY
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Strategic Assessment: Debt Settlement vs. Debt Consolidation vs. Loan Restructuring
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Before choosing debt settlement, a distressed borrower must understand the clear differences between debt settlement, debt consolidation, and loan restructuring. Choosing the incorrect pathway can exacerbate financial vulnerability, waste limited capital reserves, and invite aggressive recovery litigation.
                </p>

                {/* STRATEGIC COMPARISON TABLE */}
                <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#1a202c] text-white">
                        <th className="p-3.5 sm:p-4 font-bold border-b border-gray-700">Strategic Dimension</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Debt Consolidation Loan</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Bank Loan Restructuring</th>
                        <th className="p-3.5 sm:p-4 font-bold text-[#D2A02A] border-b border-gray-700 bg-black/30">Advocate-Led Debt Settlement (OTS)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Core Mechanism</td>
                        <td className="p-3.5 sm:p-4">Taking a new large loan to pay off multiple smaller debts</td>
                        <td className="p-3.5 sm:p-4">Extending loan tenure or adjusting interest rates with existing lender</td>
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900 bg-amber-50/40">Negotiating a discounted lump-sum compromise to extinguish debt permanently</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Principal Obligation</td>
                        <td className="p-3.5 sm:p-4 text-red-600">100% Principal + New Interest</td>
                        <td className="p-3.5 sm:p-4 text-red-600">100% Principal + Extended Interest</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Extinguished via Significant Concession / Haircut</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Required Credit Rating (CIBIL)</td>
                        <td className="p-3.5 sm:p-4">Must be above 750 (Strict eligibility)</td>
                        <td className="p-3.5 sm:p-4">Account must be Standard (No active defaults)</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Accessible during severe delinquency and NPA status</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Cash Flow Requirement</td>
                        <td className="p-3.5 sm:p-4">Requires stable, verifiable ongoing monthly income</td>
                        <td className="p-3.5 sm:p-4">Requires guaranteed capacity to pay revised monthly EMIs</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Requires one-time compromise corpus, ending ongoing monthly EMIs</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Recovery Harassment Shield</td>
                        <td className="p-3.5 sm:p-4 text-red-600">None (Purely financial product)</td>
                        <td className="p-3.5 sm:p-4 text-amber-600">Temporary hold during bank internal review</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Immediate statutory cease-and-desist under RBI guidelines</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Section 138 Criminal Defense</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Inapplicable</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Inapplicable</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Statutory compounding and withdrawal of court proceedings</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Final Legal Outcome</td>
                        <td className="p-3.5 sm:p-4">Ongoing debt liability for 3 to 7 years</td>
                        <td className="p-3.5 sm:p-4">Extended debt liability for 5 to 10 years</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Complete extinguishment &amp; authentic No Dues Certificate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 my-4 bg-gray-50 text-gray-700 italic">
                  <strong>Strategic Takeaway:</strong> If you possess a high credit score and verifiable income to comfortably service lower interest rates, debt consolidation is ideal. However, if your DTI ratio has collapsed, delinquency has crossed ninety days, or you are facing Section 138 notices, debt consolidation will be rejected by banks. In that scenario, debt settlement is your sole viable legal exit.
                </blockquote>
              </section>

              {/* ══ SECTION 3: COMMERCIAL COMPARISON: ADVOCATE VS DIY VS CORPORATE ══ */}
              <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  COMMERCIAL EVALUATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Commercial Realities: Advocate-Led Advisory vs. DIY Templates vs. Corporate Retainers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When borrowers realize that debt settlement is necessary, they often evaluate how to navigate the process. In India, borrowers typically consider four routes: free automated online DIY templates, unregulated private settlement apps, traditional corporate law firms, or transparent fixed advocate advisory. Understanding the legal standing and commercial reality of each model is essential to protecting your rights.
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
                    <h3 className="font-bold text-red-900 text-lg flex items-center gap-2">
                      <span>⚠️</span> The Fatal Flaw of Free DIY Online Templates
                    </h3>
                    <p className="text-sm text-red-800 mt-2 leading-relaxed">
                      Automated settlement letter generators and free online templates downloaded from the internet have zero evidentiary standing under the <strong>Advocates Act, 1961</strong>. Bank recovery managers routinely disregard generic letters. Worse, generic DIY letters frequently contain inadvertent admissions of unconditional liability or omit statutory reservations, destroying the borrower&apos;s defense in magistrate court when criminal proceedings under Section 138 or Section 25 are instituted.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50">
                    <h3 className="font-bold text-amber-900 text-lg flex items-center gap-2">
                      <span>⚠️</span> The Trap of Unregulated Private Settlement Agencies &amp; Apps
                    </h3>
                    <p className="text-sm text-amber-800 mt-2 leading-relaxed">
                      Private debt settlement companies and app-based intermediaries are non-legal commercial entities. They possess no legal authority to represent clients before judicial magistrates or Lok Adalat benches. They operate without advocate-client confidentiality under <strong>Section 126 of the Indian Evidence Act, 1872</strong>, routinely extract recurring monthly administrative subscriptions without guaranteed legal outcomes, and cannot halt unlawful recovery agent harassment.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50">
                    <h3 className="font-bold text-blue-900 text-lg flex items-center gap-2">
                      <span>⚖️</span> The Excessive Cost of Traditional Corporate Law Firms
                    </h3>
                    <p className="text-sm text-blue-800 mt-2 leading-relaxed">
                      Traditional corporate law firms operate on open-ended hourly billing structures and demand heavy advance retainers. For an individual or small business owner already experiencing severe cash flow depletion, paying unpredictable hourly legal fees compounds financial distress without providing cost certainty.
                    </p>
                  </div>
                </div>

                {/* INSTITUTIONAL COMPARISON TABLE */}
                <h3 className="text-xl font-bold text-[#1a202c] mt-8">
                  Institutional Comparison: Representation Model &amp; Enforceability
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
                  AMA Legal Solutions bridges this commercial divide. We provide distressed borrowers with high-caliber senior advocate litigation shielding, comprehensive forensic ledger audits, and institutional negotiation under RBI compromise frameworks on an accessible, transparent, fixed legal advisory model—eliminating open-ended corporate retainers and hourly billable fees.
                </p>
              </section>

              {/* ══ SECTION 4: WHEN NOT TO CHOOSE DEBT SETTLEMENT ══ */}
              <section id="when-not-to-choose-settlement" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  NEGATIVE CRITERIA
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  When NOT to Choose Debt Settlement in India
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Understanding when debt settlement is inappropriate is just as important as knowing when to choose it. Attempting debt settlement under the wrong circumstances can trigger catastrophic asset loss or unnecessary credit impairment. Borrowers should avoid debt settlement under the following specific conditions:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-3">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>❌</span> Secured Loans (Home, Property, Auto &amp; Gold Loans)
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Secured credit lines are governed by the <strong>SARFAESI Act, 2002</strong>. Because the lender holds registered mortgage deeds or hypothecations, they do not need to accept compromise settlements. After ninety days of default, secured lenders can issue a 60-day demand notice under Section 13(2) and take physical possession of the property under Section 13(4) through an order of the Chief Metropolitan Magistrate or District Magistrate under Section 14.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-3">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>❌</span> Temporary, Short-Term Cash Flow Dips
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      If your financial setback is temporary—such as transitioning between jobs for thirty to sixty days or awaiting verified business receivables—choosing debt settlement is premature. A short-term liquidity dip is best resolved through a temporary moratorium request, tenure extension, or personal emergency reserves to preserve your credit rating.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-3">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>❌</span> Upcoming Mortgage or High-Value Credit Applications
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      When an account is settled, the credit bureau status reflects as &lsquo;Settled&rsquo;. While this halts destructive Days Past Due compounding, it creates a temporary barrier to obtaining prime-rate mortgage loans for twelve to twenty-four months. If you plan to apply for a home loan within the next year, prioritize full repayment or restructuring over settlement.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-3">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>❌</span> Presence of Substantial Liquid Investments
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      If a borrower possesses liquid mutual funds, fixed deposits, or unencumbered shares that can satisfy debts without destroying basic household sustainability, attempting to force a compromise settlement can backfire. Banks conduct asset profiling and may classify such defaults as &lsquo;willful&rsquo;, which disqualifies the borrower from compromise settlements under RBI directives.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 5: THE 5-STEP SETTLEMENT PROTOCOL ══ */}
              <section id="5-step-settlement-protocol" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  LEGAL RESOLUTION PROTOCOL
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Step Legal Debt Settlement Protocol
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Once the strategic decision to choose debt settlement is made, executing the resolution requires meticulous adherence to Indian statutory procedure and banking regulations. AMA Legal Solutions manages the process through a structured five-step legal protocol:
                </p>

                <div className="space-y-6 my-6">
                  {/* Step 1 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Financial Distress Diagnostics &amp; Forensic Ledger Audit
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our legal team conducts a forensic audit of all loan sanction letters, statements of account, and repayment histories. We identify and isolate compounding penal charges, unauthorized processing surcharges, and illegitimate collection expenses from the genuine principal balance, establishing the baseline for compromise negotiations.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Statutory Cease-and-Desist Notice Under RBI Guidelines
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We execute a formal Vakalatnama and serve statutory legal notices upon the lending institution and its authorized collection agencies. This formally invokes the <strong>RBI Master Direction on Fair Practices Code</strong>, legally prohibiting harassment, late-night telephone calls, unannounced visits, and third-party disclosures.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Advocate Hardship Dossier Preparation Under Section 63
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We compile an evidence-backed One-Time Settlement (OTS) dossier substantiating genuine insolvency, medical hardship, job termination, or commercial downturn. Anchored under <strong>Section 63 of the Indian Contract Act, 1872</strong>, this legal petition demonstrates that the borrower is bona fide distressed and not a willful defaulter.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Bank Compromise Committee Negotiation &amp; Sanction Letter Vetting
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our senior advocates negotiate directly with the bank&apos;s Zonal Stressed Assets Committee and Credit Risk Officers. We forensically examine the resulting OTS sanction letter to verify that it is issued on authentic bank stationery, bears authorized signatures, and contains an explicit, irrevocable covenant for complete debt extinguishment.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      5
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Settlement Execution, No Dues Certificate Delivery &amp; CIBIL Rehabilitation
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Funds are remitted directly to the lender&apos;s official loan account—never to intermediary collection accounts. Following payment, we enforce the delivery of the authentic bank No Dues Certificate (NDC), secure the withdrawal or compounding of magistrate court complaints, and manage credit bureau reporting updates under the Credit Information Companies Act.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 6: SIGNATURE INFOGRAPHIC CARD ══ */}
              <section id="signature-infographic" className="space-y-4">
                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                  <div className="inline-block px-3 py-1 bg-[#D2A02A]/20 text-[#5A4C33] text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    Official Infographic &bull; Strategic Blueprint
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c] mb-4">
                    When to Choose Debt Settlement: Strategic Decision Framework
                  </h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md max-w-3xl mx-auto mb-4 bg-white">
                    <img
                      src="/images/og/when-to-choose-debt-settlement.png"
                      alt="Strategic Decision Framework for Choosing Debt Settlement in India"
                      className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto italic leading-relaxed">
                    Visual decision blueprint illustrating insolvency diagnostics, comparative strategy assessment, institutional bank committee negotiations under RBI guidelines, and permanent account extinguishment via an authentic No Dues Certificate.
                  </p>
                </div>
              </section>

              {/* ══ SECTION 7: SECTION 138 & SECTION 25 DEFENSE ══ */}
              <section id="statutory-criminal-defense" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  JUDICIAL LITIGATION DEFENSE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Judicial Shield: Defending Section 138 NI Act &amp; Section 25 PSS Act Complaints
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers who default on unsecured personal loans or credit card obligations often receive threatening legal notices alleging criminal culpability. Lenders commonly deploy two statutory provisions to apply intense courtroom pressure:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Section 138 of the Negotiable Instruments Act, 1881
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Enacted to penalize the dishonour of cheques issued for the discharge of a legally enforceable debt. Lenders often present undated security cheques obtained during initial loan disbursement and issue a 15-day statutory demand notice when returned unpaid.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Section 25 of the Payment and Settlement Systems Act, 2007
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Statutorily equivalent to Section 138, this enactment criminalizes the electronic dishonour of National Automated Clearing House (NACH) or Electronic Clearing Service (ECS) auto-debit mandates due to insufficient account balance.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1a202c] mt-6">
                  How Advocates Neutralize Criminal Exposure During Settlement
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Under Indian jurisprudence, simple inability to service an unsecured loan is strictly a <strong>civil breach of contract</strong> and not a criminal offence. The Supreme Court of India has held that criminal breach of trust or cheating under Section 415/420 of the Indian Penal Code requires proof of fraudulent intent at the inception of the contract.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When you retain AMA Legal Solutions, our advocates execute three coordinated legal maneuvers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Statutory Reply to Legal Notice:</strong> We draft a comprehensive legal reply within the statutory 15-day window, documenting bona fide hardship, challenging erroneous ledger additions, and formally recording that blank security cheques were misapplied.
                  </li>
                  <li>
                    <strong>Magistrate Court Representation &amp; Bail Formalities:</strong> If a formal complaint is instituted before a Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM), our litigation advocates represent you, secure bail, and prevent coercive non-bailable warrants.
                  </li>
                  <li>
                    <strong>Compounding of Offense via Lok Adalat:</strong> Both Section 138 and Section 25 are compoundable offenses under Indian law. We formalize the OTS agreement before a National Lok Adalat bench, which issues a judicial decree quashing the criminal complaint permanently.
                  </li>
                </ul>
              </section>

              {/* ══ SECTION 8: ENFORCING RBI ANTI-HARASSMENT RULES ══ */}
              <section id="rbi-anti-harassment-enforcement" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  BORROWER RIGHTS &amp; DIGNITY
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Enforcing RBI Anti-Harassment Rules &amp; Borrower Protection
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  No lending institution, bank recovery department, or outsourced collection agency has the legal authority to intimidate, humiliate, or harass a borrower. The Reserve Bank of India has established strict operational guidelines under its <em>Master Circular on Recovery Agents</em> and <em>Master Direction on Fair Practices Code</em>.
                </p>

                <div className="p-6 rounded-2xl bg-amber-50/60 border border-[#D2A02A]/30 space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    <span>🛡️</span> Statutory Protections Under RBI Directives
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Permissible Calling Hours:</strong> Recovery agents may contact borrowers only between 8:00 AM and 7:00 PM. Calls before 8:00 AM, late at night, or on national holidays violate RBI regulations.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Prohibition of Abusive Language:</strong> Any verbal intimidation, vulgarity, threat of physical harm, or psychological harassment is strictly illegal and attracts central bank penalties.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Privacy &amp; Third-Party Protection:</strong> Contacting employers, colleagues, neighbors, or extended family members regarding a personal default constitutes an unlawful invasion of privacy.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Workplace Visits Prohibited:</strong> Making unannounced visits to a borrower&apos;s workplace or causing public embarrassment is strictly prohibited under banking codes.
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  When collection agents breach these statutory guidelines, AMA Legal Solutions serves formal legal notices to the bank&apos;s Principal Nodal Officer. If non-compliance continues, we escalate grievances directly to the <strong>Reserve Bank of India Integrated Ombudsman Scheme, 2021</strong> and pursue civil compensation and criminal restraining orders before appropriate courts.
                </p>
              </section>

              {/* ══ SECTION 9: VETTING OTS SANCTION LETTER & NDC ══ */}
              <section id="settlement-letter-and-ndc" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  DOCUMENTARY AUTHENTICATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Vetting the Bank OTS Sanction Letter &amp; Securing the No Dues Certificate
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A common danger facing borrowers attempting self-negotiation is falling victim to unauthorized collection agent scams. Predatory collection agents frequently forge settlement letters or direct borrowers to transfer funds into third-party accounts, only for the bank to treat the funds as partial payment against accumulated interest without closing the account.
                </p>

                <h3 className="text-xl font-bold text-[#1a202c]">
                  Essential Checklist of an Authentic Bank OTS Sanction Letter
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Official Bank Letterhead:</strong> The document must be printed on the official corporate stationery of the scheduled commercial bank or registered NBFC.</li>
                  <li><strong>Verifiable Reference Number:</strong> The letter must contain a unique tracking code that can be authenticated on the bank&apos;s core banking database.</li>
                  <li><strong>Authorized Signatory:</strong> It must be signed and stamped by an authorized zonal officer with their designation, employee code, and official seal.</li>
                  <li><strong>Clear Waiver Schedule:</strong> The letter must explicitly document the total outstanding balance, the negotiated settlement sum, the full waiver on principal and interest, and the payment schedule.</li>
                  <li><strong>Mandatory NDC Covenant:</strong> The sanction letter must explicitly state that upon receipt of the agreed settlement sum, the loan account will be closed with zero balance and an unconditional No Dues Certificate will be issued.</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, our senior advocates perform thorough forensic authentication of the OTS sanction letter before advising any client to release settlement funds. Once paid, we enforce the delivery of the final <strong>No Dues Certificate (NDC)</strong>, ensuring permanent legal closure.
                </p>
              </section>

              {/* ══ SECTION 10: CIBIL SCORE IMPACT & RESTORATION ══ */}
              <section id="cibil-impact-and-restoration" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  CREDIT REHABILITATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  CIBIL Score Impact &amp; Long-Term Credit Rehabilitation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A vital factor when deciding when to choose debt settlement is its effect on your credit profile. Under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, lending institutions are statutorily required to report account payment status to credit information bureaus like TransUnion CIBIL, Experian, Equifax, and CRIF High Mark on a monthly basis.
                </p>

                <div className="space-y-4 my-4">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Understanding &lsquo;Settled&rsquo; vs. Unchecked Compounding Default
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      When an OTS is completed, the credit bureau records the remark as <strong>&lsquo;Settled&rsquo;</strong>. While this causes a temporary drop in credit score, it permanently halts the catastrophic <strong>Days Past Due (DPD)</strong> counter that would otherwise continue incrementing every 30 days, causing severe ongoing credit damage.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Rebuilding Credit Above 750 Over 18 to 24 Months
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      A &lsquo;Settled&rsquo; remark does not permanently prevent credit restoration. Borrowers can systematically rebuild their credit score back to 750 and above within eighteen to twenty-four months through disciplined credit practices: obtaining a secured credit card backed by a fixed deposit, maintaining credit utilization below thirty percent, paying all utility bills on time, and verifying that bureaus correctly update the outstanding balance to zero.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 11: 8-QUESTION ACCORDION FAQ ══ */}
              <section id="frequently-asked-questions" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  QUOTABLE LEGAL FAQS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Frequently Asked Questions on When to Choose Debt Settlement
                </h2>
                <p className="text-gray-600 text-sm">
                  Authoritative statutory answers to critical questions regarding debt distress thresholds, legal timings, and borrower protections in India.
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

              {/* ══ SECTION 12: MORE LEGAL GUIDES INTERNAL LINK GRID ══ */}
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
                    href="/what-is-debt-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Legal Meaning &amp; Process
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      What is Debt Settlement? &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Comprehensive guide to compromise settlements and borrower rights under RBI rules.
                    </p>
                  </Link>

                  <Link
                    href="/debt-settlement-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      India Jurisprudence
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Debt Settlement India &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Detailed analysis of debt settlement laws, Lok Adalat resolution, and central bank frameworks.
                    </p>
                  </Link>

                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Strategic Comparison
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Settlement vs. Consolidation &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Compare debt consolidation loans with One-Time Settlement to choose the right strategy.
                    </p>
                  </Link>

                  <Link
                    href="/loan-write-off-vs-loan-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Banking Classifications
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Loan Write-Off vs Settlement &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Understand technical write-offs versus compromise settlements on credit records.
                    </p>
                  </Link>

                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Anti-Harassment Shield
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Stop Recovery Harassment &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Legal procedures to halt recovery harassment under RBI Fair Practices Code.
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
                      Section 138 NI Act Defense &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      How senior advocates defend cheque bounce notices and compound complaints.
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
                      Settlement vs Closure on CIBIL &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Understanding bureau remarks and practical credit repair steps following resolution.
                    </p>
                  </Link>

                  <Link
                    href="/best-debt-settlement-company"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Firm Selection
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Best Debt Settlement Company &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Comparing commercial agencies with advocate-led law firms for debt resolution.
                    </p>
                  </Link>

                  <Link
                    href="/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Repayment Diagnostics
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Payments Exceeding Capacity &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Step-by-step legal guidance when monthly EMI burdens surpass total income.
                    </p>
                  </Link>
                </div>
              </section>

              {/* ══ SECTION 13: STATUTORY REFERENCES & REGULATORY AUTHORITIES ══ */}
              <section id="statutory-references" className="space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  REGULATORY CITATIONS
                </div>
                <h2 className="text-2xl font-bold text-[#1a202c]">
                  Statutory References &amp; Regulatory Authorities
                </h2>
                <p className="text-sm text-gray-600">
                  Every legal argument and advisory framework presented on this page is anchored in official Indian statutes and central bank regulations:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Indian Contract Act, 1872 (Section 63)</div>
                    <p className="text-gray-500 mt-0.5">Statutory doctrine of accord and satisfaction for compromise settlements.</p>
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
                    <div className="font-bold text-gray-900">Payment and Settlement Systems Act, 2007 (Section 25)</div>
                    <p className="text-gray-500 mt-0.5">Statutory defense against dishonour of electronic mandates (NACH / ECS).</p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2048"
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

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Credit Information Companies (Regulation) Act, 2005</div>
                    <p className="text-gray-500 mt-0.5">Rules governing credit reporting, &lsquo;Settled&rsquo; remarks, and balance updates.</p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2056"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      India Code Legislative Database &rarr;
                    </a>
                  </div>
                </div>
              </section>

              {/* Social Share Row at bottom of content */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  Was this strategic legal guide helpful? Share it with borrowers seeking clarity on debt relief.
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

              {/* ══ SECTION 14: AMA COMPANY & MEDIA SECTION ══ */}
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
                  Founded by Senior Advocate Anuj Anand Malik, AMA Legal Solutions is dedicated to protecting consumers, salaried professionals, and entrepreneurs from predatory lending, unlawful recovery harassment, and aggressive financial litigation. Operating with strict adherence to Bar Council of India standards, our litigation advocates represent clients nationwide across civil courts, magistrate benches, and National Lok Adalats.
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
                  Unsure When to Settle?
                </h3>

                <p className="text-gray-200 text-xs leading-relaxed">
                  Evaluate whether debt settlement is your best legal strategy. Retain our senior banking advocates for an evidence-backed case evaluation under RBI compromise guidelines.
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
                    href="/what-is-debt-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; What is Debt Settlement?
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
                  <Link
                    href="/best-debt-settlement-company"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Company
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

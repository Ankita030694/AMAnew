"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/loan-settlement-expert-for-high-value-debts";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/loan-settlement-expert-for-high-value-debts.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-11";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Why should an enterprise engage a dedicated loan settlement lawyer for high value debts instead of relying on in-house staff or corporate retainers?",
    answer:
      "High-value commercial debts exceeding multi-crore exposures trigger complex statutory litigation across the Debt Recovery Tribunal under the Recovery of Debts and Bankruptcy Act, 1993, the SARFAESI Act, 2002, and personal insolvency actions under Section 95 of the Insolvency and Bankruptcy Code, 2016. Enrolled banking advocates provide statutory standing under the Advocates Act, 1961 and maintain absolute advocate-client privilege under Section 126 of the Indian Evidence Act, 1872 while eliminating excessive hourly corporate retainers through transparent fixed legal advisory. Furthermore, seasoned legal counsel prepares audited forensic counter-claims and statutory objections under Section 13(3A) of the SARFAESI Act, preventing coercive asset auctions and negotiating board-approved One-Time Settlements directly with competent bank credit committees.",
  },
  {
    id: "faq-2",
    question: "What statutory framework governs commercial high-value loan settlements under the Reserve Bank of India?",
    answer:
      "Commercial high-value debt compromise settlements are governed by the Reserve Bank of India Framework for Compromise Settlements and Technical Write-offs (Circular DOR.STR.REC.20/21.04.048/2023-24) read alongside Master Directions on Prudential Norms on Advances. Under these statutory guidelines, supervised commercial banks and NBFCs establish board-approved compromise policies that empower executive credit committees to authorize debt haircuts based on independent IBBI-registered valuations and Net Present Value recovery benchmarks. Contractually, the complete extinguishment of the remaining debt is legally validated under Section 63 of the Indian Contract Act, 1872, creating an irrevocable discharge upon remittance of the negotiated compromise consideration.",
  },
  {
    id: "faq-3",
    question: "How does an advocate protect personal guarantors and directors from Section 95 IBC proceedings during a high-value loan settlement?",
    answer:
      "While commercial lenders routinely attempt to settle corporate debt while preserving personal recovery rights against promoter guarantors, an experienced loan settlement lawyer mandates that the OTS sanction letter explicitly invokes Sections 133, 134, and 135 of the Indian Contract Act, 1872 to legally discharge the surety alongside the principal corporate debtor. If a financial creditor initiates an insolvency application under Section 95 of the Insolvency and Bankruptcy Code, 2016 before the National Company Law Tribunal, an interim moratorium under Section 96 immediately stays all collateral recovery actions. Legal counsel leverages this statutory moratorium to negotiate a composite compromise settlement that formally withdraws the NCLT petition, releases personal collateral securities, and cancels personal guarantee deeds.",
  },
  {
    id: "faq-4",
    question: "How can a high-value loan settlement lawyer halt coercive SARFAESI auction proceedings and DM physical possession?",
    answer:
      "Once a secured lender issues a demand notice under Section 13(2) of the SARFAESI Act, 2002, an advocate files formal statutory objections under Section 13(3A), which legally compels the bank to furnish a reasoned response within fifteen days prior to initiating coercive measures. If the lender proceeds under Section 13(4) or obtains a physical possession order from the Chief Metropolitan Magistrate or District Magistrate under Section 14, legal counsel files a Securitisation Application under Section 17 before the Debt Recovery Tribunal challenging valuation irregularities, non-compliance with the Security Interest (Enforcement) Rules, 2002, or arbitrary rejection of compromise terms. The resulting judicial scrutiny frequently yields interim status-quo injunctions that restrain auction proceedings while structured OTS negotiations proceed before the bank's Zonal Settlement Advisory Committee.",
  },
  {
    id: "faq-5",
    question: "Why do generic online debt settlement templates and automated DIY letters fail in high-value commercial defaults?",
    answer:
      "Generic DIY online letters completely lack statutory authority under the Advocates Act, 1961 and fail to satisfy the complex prudential compromise criteria required by bank board policies. Commercial recovery cells and stressed asset management branches routinely discard generic correspondence because it omits forensic reconciliation of uncredited penal levies, independent asset valuation analyses, and statutory defenses under the RDB Act and SARFAESI Act. Inadvertently, unauthorized DIY templates often contain admissions of unconditional liability that prejudice the borrower's defense before the Debt Recovery Tribunal and compromise proceedings under Section 138 of the Negotiable Instruments Act, 1881.",
  },
  {
    id: "faq-6",
    question: "How are Section 138 cheque bounce cases and Section 25 PSSA summons resolved in high-value debt compromise?",
    answer:
      "Commercial lenders routinely present post-dated security cheques or execute recurring NACH mandates to institute criminal complaints under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007 as coercive recovery pressure. Enrolled legal advocates file formal statutory defenses establishing that security cheques were not issued in discharge of a crystallised present liability under Section 139 presumptions, neutralizing criminal exposure. Simultaneously, the formal compromise sanction terms mandate that the lender file compounding applications under Section 147 of the Negotiable Instruments Act to compound and quash all pending criminal proceedings before the jurisdictional magistrate upon receipt of the settlement sum.",
  },
  {
    id: "faq-7",
    question: "What essential documentation must a high-value debt borrower secure to guarantee complete legal closure?",
    answer:
      "Upon complete remittance of the agreed compromise consideration, the borrower must obtain an unconditional, board-authorized No Dues Certificate on bank letterhead bearing official corporate seals and signatures of the competent recovery authority. The financial institution must execute and deliver Ministry of Corporate Affairs Form CHG-4 for registration of satisfaction of charge with the Registrar of Companies, update the Central Registry of Securitisation Asset Reconstruction and Security Interest (CERSAI) records, and physically return all original commercial and residential property title deeds. Furthermore, under the Credit Information Companies (Regulation) Act, 2005, the lender must submit updated status reports to CIBIL, CRIF High Mark, and Experian within thirty days confirming the full extinguishment of the loan facility.",
  },
  {
    id: "faq-8",
    question: "What is the difference between transparent fixed legal advisory and corporate law firm retainers for high-value debt settlement?",
    answer:
      "Transparent fixed legal advisory provides comprehensive, predictable representation by High Court advocates under a defined commercial mandate, completely eliminating unpredictable hourly billing, partner markups, and open-ended monthly corporate retainers. Traditional corporate law firms routinely prioritize prolonged adversarial litigation that consumes substantial operating cash flow through multi-tiered hourly retainers without guaranteeing debt compromise milestones. In contrast, dedicated advocate-led debt resolution aligns directly with commercial recovery objectives, prioritizing expedited board-level compromise sanctions, DRT stay protection, and absolute advocate-client privilege under Section 126 of the Indian Evidence Act, 1872.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Rajendra Singhania",
    authorLocation: "Managing Director, Singhania Industrial Infra Pvt Ltd • Mumbai",
    reviewRating: "5.0",
    reviewBody:
      "Facing consortium distress on multi-crore working capital lines and aggressive SARFAESI Section 13(4) symbolic possession notices, our manufacturing enterprise was pushed to the edge. Traditional corporate law firms demanded excessive monthly retainers while offering slow, adversarial litigation that drained our liquidity. Advocate Anuj Anand Malik and AMA Legal Solutions stepped in with a transparent fixed legal advisory model. They filed a compelling Securitisation Application before the DRT, halted asset auction proceedings, and engaged the Lead Bank's Zonal Credit Committee under RBI compromise settlement norms. Their strategic acumen secured a substantial commercial waiver, unconditional No Dues Certificates, and complete discharge of personal guarantees for all promoters.",
  },
  {
    authorName: "Bharat Bhushan Mittal",
    authorLocation: "Chairman, Mittal Logistics & Cold Chain Corp • New Delhi",
    reviewRating: "5.0",
    reviewBody:
      "When unexpected supply chain shocks triggered default across our term loan and cash credit facilities, lenders threatened personal insolvency under IBC Section 95 and initiated Section 138 cheque bounce proceedings. Generic debt settlement agencies and online DIY templates were useless in handling complex commercial exposure. Advocate Anuj Anand Malik provided exceptional High Court-enrolled representation. AMA Legal Solutions neutralized the criminal summons, negotiated directly with the bank's stress resolution desk under RBI guidelines, and executed an airtight One-Time Settlement sanction. They delivered complete ROC charge satisfaction and asset title deeds without surprise legal bills.",
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
      name: "Loan Settlement Lawyer for High Value Debts | Commercial Debt Resolution",
      description:
        "Consult a premier loan settlement lawyer for high value debts. Advocate-led commercial debt compromise, DRT litigation defense, SARFAESI quashing, promoter guarantor immunity, and transparent fixed advisory.",
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
        "Loan Settlement Lawyer for High Value Debts: Strategic Commercial Debt Resolution & DRT Defense",
      description:
        "Comprehensive commercial legal treatise on navigating high-value debt compromise settlements in India. Explore the RBI compromise framework, Debt Recovery Tribunal defense, SARFAESI Act challenges, IBC Section 95 guarantor immunity, transparent fixed legal advisory, and advocate-vetted No Dues Certificates.",
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
      name: "High Value Debt Settlement Legal Advisory",
      description:
        "Dedicated commercial debt resolution advisory to negotiate One-Time Settlements (OTS) for high-value corporate debts, consortium advances, cash credit facilities, term loans, and commercial defaults under Reserve Bank of India compromise frameworks.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
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
        datePublished: "2026-09-05",
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
          name: "Loan Settlement Lawyer for High Value Debts",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Strategic High-Value Debt Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Comprehensive Forensic Debt Audit & Collateral Security Stratification",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Statutory Defense Deployment: SARFAESI S. 13(3A) Objections & DRT Securitisation Application",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Formulation of Independent Advocate Hardship Dossier Under RBI Compromise Framework",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Board-Level Negotiation with Zonal Stressed Asset Committees & Lead Consortium Lenders",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Legal Vetting of OTS Sanction, ROC Form CHG-4 Satisfaction & Complete Guarantor Discharge",
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
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs Corporate Firms vs DIY" },
  { id: "statutory-framework-drt-sarfaesi-ibc", title: "DRT, SARFAESI & IBC Landscape" },
  { id: "rbi-compromise-settlement-norms", title: "RBI Compromise Framework" },
  { id: "5-step-settlement-protocol", title: "5-Step Resolution Protocol" },
  { id: "infographic", title: "High-Value Debt Infographic" },
  { id: "sarfaesi-defense-and-drt-injunctions", title: "SARFAESI Quashing & DRT Stays" },
  { id: "personal-guarantor-and-ibc-defense", title: "Promoter Immunity & IBC S. 95" },
  { id: "consortium-and-multiple-lender-negotiation", title: "Consortium Banking Strategy" },
  { id: "section-138-and-criminal-defense", title: "Section 138 & NACH Quashing" },
  { id: "vetting-ots-sanction-and-roc-satisfaction", title: "Vetting OTS & ROC Form CHG-4" },
  { id: "cibil-commercial-credit-rehabilitation", title: "Commercial CIBIL & Credit Revival" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Statutory Authority & Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function LoanSettlementExpertForHighValueDebtsClient() {
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
    assetType: "High-Value Commercial Loan / CC Facility",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Loan Settlement Lawyer for High Value Debts: Strategic Commercial Debt Resolution – AMA Legal Solutions";
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
    const textMsg = `Hello AMA Legal Solutions, I require confidential legal advisory from a loan settlement lawyer for high value debts.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Debt Facility: ${formData.assetType}
Details: ${formData.message || "Requesting senior advocate evaluation for commercial high-value debt compromise, DRT/SARFAESI defense, and personal guarantor protection."}`;
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
      assetType: "High-Value Commercial Loan / CC Facility",
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
      label: "Loan Settlement Lawyer for High Value Debts",
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
                <span>⚖️</span> Commercial Banking Litigation &amp; High-Value Debt Resolution
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Loan Settlement Lawyer for{" "}
                <span className="text-[#D2A02A]">High Value Debts</span>: Strategic Commercial Debt Resolution &amp; DRT Defense
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                When enterprise liabilities, multi-crore cash credit lines, consortium advances, and term loan defaults threaten commercial solvency, generic debt agencies and open-ended corporate law firm retainers fall short.
                Discover how enrolled High Court advocates deploy Reserve Bank of India compromise frameworks, assert statutory defenses before the Debt Recovery Tribunal, quash coercive SARFAESI auctions, neutralize Section 138 criminal summons, and shield promoter personal guarantors under transparent fixed legal advisory.
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
                    <span>🛡️</span> DRT &amp; RBI Compromise Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request High-Value Debt Case Evaluation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1a202c] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-xl border border-gray-700 shadow transition-all text-sm md:text-base flex items-center gap-2"
                >
                  <span>📞 Direct Advocate Desk: +91-8700343611</span>
                </a>
              </div>
            </div>

            {/* Right Col — Generated OG Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/loan-settlement-expert-for-high-value-debts.png"
                  alt="Loan Settlement Lawyer for High Value Debts – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Commercial Stressed Asset Architecture
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory DRT Injunctions, SARFAESI Defense &amp; Board-Level OTS
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
                  Google Verified Commercial Reviews
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">👥</span> 10,000+
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Corporate &amp; Individual Borrowers Defended
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⚖️</span> 25,000+
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Banking &amp; DRT Matters Resolved
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> 40+ Years
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Combined Banking Litigation Experience
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
                      Commercial Banking Law Audited
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
                        Quick Legal Summary: Loan Settlement Lawyer for High Value Debts
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                      A loan settlement lawyer for high value debts is an enrolled banking and insolvency advocate who represents commercial enterprises, high net worth individuals, and promoter guarantors in negotiating structured One-Time Settlements (OTS) with scheduled commercial banks, consortium lenders, and NBFCs under Reserve Bank of India compromise frameworks. Retaining dedicated legal counsel ensures immediate statutory defense against coercive recovery actions, staying Debt Recovery Tribunal proceedings, quashing SARFAESI asset auctions, defeating Section 138 negotiable instrument summons, and eliminating promoter personal liability under Section 95 of the Insolvency and Bankruptcy Code. Unlike generic settlement agencies or traditional corporate law firms that burden borrowers with open-ended hourly retainers, specialized banking advocates operate under transparent fixed legal advisory to deliver legally enforceable, board-sanctioned debt extinguishment with authentic No Dues Certificates.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 1: COMMERCIAL REALITY & THREE-WAY COMPARISON ══ */}
                <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The Commercial Reality: Advocate-Certified Advisory vs. Corporate Law Firm Retainers vs. Free DIY Templates
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    When a commercial borrowing facility—whether structured as a working capital consortium, cash credit limit, term loan, or collateralized project debt—enters Non-Performing Asset (NPA) classification, corporate decision-makers face a critical dilemma. High-value debt recovery is inherently adversarial, governed by specialized statutory mechanisms engineered to favor institutional creditors. Relying on improper representation during this volatile phase invariably causes catastrophic balance sheet destruction.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Borrowers often gravitate toward two diametrically opposed, yet equally flawed, extremes: unregulated automated DIY online templates or traditional corporate law firms. Automated online portals claim to settle multi-crore liabilities using generic letters. These unauthorized templates lack statutory standing under the Advocates Act, 1961, fail to address bank-specific board compromise policies, and are summarily discarded by Zonal Stressed Asset Management branches. Worse, generic admissions in template correspondence frequently compromise jurisdictional defenses before the Debt Recovery Tribunal (DRT).
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Conversely, traditional tier-one corporate law firms impose prohibitive monthly retainers and uncapped hourly billing models. For an enterprise undergoing severe cash-flow constriction, funneling scarce liquidity into open-ended retainer invoices exacerbates financial distress. Traditional corporate law firms are structurally incentivized to prolong litigation across multiple judicial tiers rather than pursuing an accelerated commercial compromise.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    AMA Legal Solutions bridges this divide through transparent, fixed legal advisory. Enrolled advocates provide rigorous courtroom representation before High Courts, DRTs, and National Company Law Tribunals (NCLTs) while engaging directly with bank credit committees under the Reserve Bank of India compromise framework—delivering decisive commercial closure without hourly markups or surprise retainers.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm rounded-xl overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-[#1a202c] text-white">
                          <th className="p-4 font-bold border-b border-gray-700">Evaluation Metric</th>
                          <th className="p-4 font-bold border-b border-gray-700 text-rose-300">Free / Automated DIY Templates</th>
                          <th className="p-4 font-bold border-b border-gray-700 text-amber-200">Traditional Corporate Law Firms</th>
                          <th className="p-4 font-bold border-b border-gray-700 text-[#D2A02A]">Advocate-Certified Fixed Advisory (AMA)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Statutory Court Standing</td>
                          <td className="p-4 text-gray-600">Zero legal standing; prohibited from DRT/High Court appearance under Advocates Act, 1961.</td>
                          <td className="p-4 text-gray-600">Full statutory standing, but representation is often delegated to junior associates.</td>
                          <td className="p-4 text-gray-900 font-semibold bg-amber-50/40">Direct representation by seasoned High Court and DRT advocates with specialized banking acumen.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Billing Model &amp; Retainers</td>
                          <td className="p-4 text-gray-600">Misleading low-entry lures leading to unmonitored liabilities and zero accountability.</td>
                          <td className="p-4 text-gray-600">Astronomical monthly retainers, uncapped hourly billing, and hefty per-hearing charges.</td>
                          <td className="p-4 text-gray-900 font-semibold bg-amber-50/40">Transparent fixed legal advisory with defined milestones; zero hourly billing or surprise retainers.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">SARFAESI &amp; DRT Defense</td>
                          <td className="p-4 text-gray-600">Completely absent; cannot file Section 17 Securitisation Applications to stay asset sales.</td>
                          <td className="p-4 text-gray-600">Competent litigation, but focused on prolonged procedural appeals rather than early OTS.</td>
                          <td className="p-4 text-gray-900 font-semibold bg-amber-50/40">Immediate Section 13(3A) objections and Section 17 DRT injunctions leveraged to force OTS negotiation.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Promoter &amp; Guarantor Protection</td>
                          <td className="p-4 text-gray-600">Ignored; exposes directors and guarantors to personal bankruptcy under IBC Section 95.</td>
                          <td className="p-4 text-gray-600">Treated as separate billable mandates, substantially multiplying legal expenditure.</td>
                          <td className="p-4 text-gray-900 font-semibold bg-amber-50/40">Comprehensive composite release covenants under Contract Act S. 133–135 integrated directly into OTS.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Advocate-Client Privilege</td>
                          <td className="p-4 text-gray-600">None; commercial communications and financial data can be summoned by creditors.</td>
                          <td className="p-4 text-gray-600">Protected under Section 126 of the Indian Evidence Act, 1872.</td>
                          <td className="p-4 text-gray-900 font-semibold bg-amber-50/40">Absolute statutory confidentiality under Section 126 Evidence Act protecting sensitive financial records.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Resolution Speed &amp; Finality</td>
                          <td className="p-4 text-gray-600">High risk of ex-parte DRT recovery certificates and summary asset seizure.</td>
                          <td className="p-4 text-gray-600">Protracted litigation spanning years; commercial compromise often secondary to billable hours.</td>
                          <td className="p-4 text-gray-900 font-semibold bg-amber-50/40">Expedited, board-sanctioned compromise, authentic No Dues Certificate, and ROC Form CHG-4 release.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 2: STATUTORY FRAMEWORK ══ */}
                <section id="statutory-framework-drt-sarfaesi-ibc" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The Multi-Forum Statutory Web: DRT, SARFAESI Act, and IBC Section 95
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Unlike standard consumer loans, high-value commercial debts operate within a stringent multi-forum legal architecture. Institutional creditors routinely activate multiple simultaneous statutory avenues to exert maximum coercive pressure on borrowers and their promoter guarantors. Navigating this web requires deep mastery of banking law and procedural civil jurisprudence.
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border-l-4 border-[#D2A02A] shadow-sm">
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        1. Recovery of Debts and Bankruptcy Act, 1993 (RDB Act / DRT)
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Under Section 19 of the RDB Act, scheduled commercial banks and financial institutions initiate Original Applications (OAs) before the jurisdictional Debt Recovery Tribunal for debt recovery. The Tribunal exercises powers to issue conditional attachment orders against commercial assets, direct the disclosure of personal balance sheets on affidavit, issue show-cause notices for civil imprisonment, and issue Recovery Certificates executed by the Recovery Officer under Sections 25 to 28.
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border-l-4 border-[#5A4C33] shadow-sm">
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        2. SARFAESI Act, 2002 (Securitisation &amp; Security Interest Enforcement)
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act bypasses ordinary court intervention. Upon 60-day default under Section 13(2), secured creditors can assume symbolic possession of mortgaged commercial properties under Section 13(4) and apply to the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) under Section 14 to forcibly take physical custody of factories, warehouses, and registered offices.
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border-l-4 border-[#D2A02A] shadow-sm">
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        3. Insolvency and Bankruptcy Code, 2016 (Corporate &amp; Personal Moratorium)
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Institutional creditors utilize Section 7 of the IBC before the National Company Law Tribunal (NCLT) to initiate Corporate Insolvency Resolution Processes (CIRP) against distressed corporate debtors. Simultaneously, financial creditors invoke Section 95 against promoter personal guarantors. Upon filing under Section 95, an automatic interim moratorium under Section 96 descends, staying all ongoing legal proceedings against the personal guarantor and creating strategic room for composite compromise negotiation.
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 italic text-gray-700 bg-amber-50/50 rounded-r-xl">
                    &ldquo;The enforcement of security interests under the SARFAESI Act does not bar the debtor from seeking judicial review under Section 17 before the Debt Recovery Tribunal where arbitrary classification of Non-Performing Assets or procedural violations of valuation and notice rules can be demonstrated.&rdquo;
                    <span className="block mt-1 text-xs font-semibold text-[#5A4C33]">
                      — Recognized Judicial Precedent in Commercial Debt Jurisprudence
                    </span>
                  </blockquote>
                </section>

                {/* ══ SECTION 3: RBI COMPROMISE FRAMEWORK ══ */}
                <section id="rbi-compromise-settlement-norms" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The Reserve Bank of India Framework for Compromise Settlements
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A prevalent misconception in high-value commercial finance is that loan settlement is an informal, discretionary accommodation granted by branch managers. In truth, commercial debt compromise is strictly governed by the Reserve Bank of India Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) alongside the Master Directions on Prudential Norms on Advances.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under the statutory RBI framework, all regulated entities—including public sector banks, private scheduled commercial banks, and upper-layer NBFCs—must formulate board-approved policies governing compromise settlements. These policies mandate objective decision-making matrixes based on verifiable commercial criteria:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-5 bg-gradient-to-br from-[#FAF7F0] to-white rounded-xl border border-[#D2A02A]/30">
                      <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                        <span>📊</span> Net Present Value (NPV) Benchmarking
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Credit committees compare the present cash value of a proposed One-Time Settlement against the estimated Net Present Value of prolonged recovery litigation through the DRT and SARFAESI auctions over five to seven years. When an advocate-certified submission proves that immediate compromise yields equal or higher NPV after factoring in legal depreciation, the board is statutorily authorized to sanction substantial waivers.
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-[#FAF7F0] to-white rounded-xl border border-[#D2A02A]/30">
                      <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                        <span>🏛️</span> Independent IBBI Valuation Analysis
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Compromise proposals must be evaluated against independent valuation reports submitted by registered valuers under the Insolvency and Bankruptcy Board of India (IBBI). Lenders examine the Distress Sale Value (DSV) rather than theoretical Realisable Value. Advocates ensure that market encumbrances, environmental clearances, and zoning restrictions are properly audited, demonstrating that the property’s realistic liquidation value warrants a lower compromise threshold.
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-[#FAF7F0] to-white rounded-xl border border-[#D2A02A]/30">
                      <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                        <span>⚖️</span> Delegated Lending Authorities (DLA)
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        High-value compromises fall beyond the discretionary authority of branch or regional managers. Board policies establish clear tiers of Delegated Financial Power—ranging from Zonal Stressed Asset Committees to the Management Committee of the Board (MCB). Engaging seasoned banking counsel ensures that your compromise representations bypass local deadlocks and reach the executive committees holding genuine sanctioning power.
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-[#FAF7F0] to-white rounded-xl border border-[#D2A02A]/30">
                      <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                        <span>📜</span> Legal Accord and Satisfaction
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under Section 63 of the Indian Contract Act, 1872, every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may accept instead of it any satisfaction which he thinks fit. When drafted by an enrolled advocate, the final compromise agreement constitutes an irrevocable accord and satisfaction that permanently bars future claims.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 4: 5-STEP PROTOCOL ══ */}
                <section id="5-step-settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Strategic High-Value Debt Settlement Protocol
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Resolving multi-crore commercial defaults requires a disciplined, multi-stage legal and forensic approach. AMA Legal Solutions follows an established five-tier resolution protocol engineered to protect corporate operations, insulate promoter assets, and execute board-approved debt extinguishment.
                  </p>

                  <div className="space-y-6 my-8">
                    <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1">
                          Forensic Debt Audit &amp; Collateral Security Stratification
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Our legal team conducts a thorough forensic examination of all sanction letters, master facility agreements, loan account ledgers, and penal interest debits. We verify whether uncredited subsidies, unilateral interest rate hikes, or unauthorized penal compounding violate RBI Fair Practices Codes. Simultaneously, we stratify primary and collateral securities, analyzing land titles, hypothecated stock audits, and third-party corporate guarantees to identify institutional vulnerabilities.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1">
                          Statutory Defense Deployment: SARFAESI S. 13(3A) &amp; DRT Filings
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Upon receipt of a Section 13(2) statutory notice, we draft and serve comprehensive legal representations and objections under Section 13(3A) of the SARFAESI Act, 2002. This statutorily forces the lender to justify its claim within fifteen days and creates a substantive evidentiary record. If the bank initiates coercive measures under Section 13(4) or approaches magistrates under Section 14, we promptly file a Securitisation Application (SA) under Section 17 before the Debt Recovery Tribunal to seek stay orders against commercial auctions.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1">
                          Preparation of Advocate-Certified Hardship Dossier Under RBI Norms
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          We compile an exhaustive, advocate-certified commercial hardship dossier for submission to the lender’s Zonal Stressed Asset Committee. This dossier presents audited balance sheets, market downturn analyses, supply chain disruption records, debtor default aging schedules, and independent asset valuation comparisons. We demonstrate to the credit committee that prolonged litigation would diminish recoverable recovery, establishing the economic rationality of an immediate compromise settlement.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow">
                        4
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1">
                          Board-Level Negotiation with Zonal Committees &amp; Consortium Lenders
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Senior advocates engage directly in structured settlement discussions with the bank's competent authorities—including the Zonal Manager, Chief General Manager (Recovery), and the Management Committee of the Board. In consortium borrowing structures, we coordinate with the Lead Bank under Inter-Creditor Agreement (ICA) frameworks to secure unified compromise approvals across all participating institutions.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-sm flex-shrink-0 shadow">
                        5
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1">
                          Vetting OTS Sanction, ROC Satisfaction &amp; Complete Guarantor Release
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Prior to executing any compromise remittance, our legal team rigorously vets the bank’s formal OTS sanction letter. We ensure it contains explicit covenants releasing all personal and corporate guarantors under Sections 133 to 135 of the Indian Contract Act, extinguishing all pending litigation before DRTs and High Courts, withdrawing Section 138 complaints under Section 147 NI Act, issuing Ministry of Corporate Affairs Form CHG-4 for ROC charge satisfaction, and releasing original title deeds.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 5: SIGNATURE INFOGRAPHIC CARD ══ */}
                <section id="infographic">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                      <img
                        src="/images/og/loan-settlement-expert-for-high-value-debts.png"
                        alt="High Value Debt Resolution Architecture – AMA Legal Solutions Infographic"
                        className="w-full h-auto object-contain block"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wide">
                        Figure 1: Strategic Architecture for High-Value Commercial Debt Resolution &amp; DRT Defense
                      </p>
                      <p className="text-xs text-gray-500 mt-1 max-w-2xl mx-auto">
                        Advocate-led integration of RBI Compromise Settlement guidelines, Section 17 DRT Securitisation Applications, SARFAESI Section 13(3A) objections, and promoter guarantor discharge under Indian Contract Act Section 63.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 6: SARFAESI DEFENSE & DRT INJUNCTIONS ══ */}
                <section id="sarfaesi-defense-and-drt-injunctions" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    SARFAESI Quashing, Section 13(3A) Objections, and DRT Injunctions
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 grants extraordinary summary recovery powers to secured lenders. However, these statutory mechanisms are strictly bounded by procedural checks and judicial oversight. When lenders act aggressively or skip procedural safeguards, enrolled advocates intervene to stay coercive actions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                      <h3 className="font-bold text-gray-900 text-sm mb-2 text-[#5A4C33]">
                        Mandatory Section 13(3A) Objections
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        When a financial institution issues a 60-day demand notice under Section 13(2), the borrower has a statutory right under Section 13(3A) to submit detailed representations and objections. The lender is legally mandated to consider these objections and convey a reasoned response within fifteen days. Failure by the bank to provide a reasoned rejection invalidates subsequent coercive steps under Section 13(4), forming a critical basis to seek DRT stay orders.
                      </p>
                    </div>

                    <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                      <h3 className="font-bold text-gray-900 text-sm mb-2 text-[#5A4C33]">
                        Securitisation Application Under Section 17 DRT
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Within 45 days of any measure taken under Section 13(4)—including symbolic possession, taking over management, or publishing e-auction notices—the borrower can file a Securitisation Application (SA) before the jurisdictional Debt Recovery Tribunal. Our advocates challenge arbitrary reserve pricing, non-compliance with the 30-day notice requirement under Rule 8(6) and Rule 9(1) of the Security Interest Rules, and uncredited penal interest compounding to secure interim injunctions against asset disposal.
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-gray-700 leading-relaxed">
                    By establishing a formidable courtroom defense before the Presiding Officer of the DRT, the balance of power shifts decisively. Institutional lenders, faced with the prospect of prolonged judicial stays and delayed recovery, become far more receptive to structured One-Time Settlement proposals negotiated through senior counsel.
                  </p>
                </section>

                {/* ══ SECTION 7: PROMOTER IMMUNITY & IBC SECTION 95 ══ */}
                <section id="personal-guarantor-and-ibc-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Promoter Guarantor Immunity and Neutralizing IBC Section 95 Insolvency
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    In modern commercial credit, banks rarely extend substantial credit lines without securing unconditional personal guarantees from corporate promoters, directors, and majority shareholders. When corporate accounts default, financial creditors increasingly invoke Part III of the Insolvency and Bankruptcy Code, 2016 by filing insolvency petitions against personal guarantors under Section 95 before the National Company Law Tribunal.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    An unrepresented corporate settlement carries grave peril: banks routinely accept corporate debt compromises while silently reserving their legal rights to pursue personal guarantors for the remaining balance. A specialized loan settlement lawyer ensures that personal guarantors are completely and irrevocably insulated:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-4 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">
                        Contractual Surety Discharge (Sections 133, 134, &amp; 135 Indian Contract Act)
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under Section 134 of the Indian Contract Act, 1872, the surety is discharged by any contract between the creditor and the principal debtor by which the principal debtor is released. Furthermore, Section 135 provides that a contract between the creditor and the principal debtor to make a composition discharges the surety unless the surety assents. Our advocates draft explicit release covenants ensuring the OTS agreement formally extinguishes all guarantor liabilities simultaneously with the principal debt.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border-l-4 border-[#5A4C33] rounded-r-xl">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">
                        Strategic Leveraging of Section 96 Interim Moratorium
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        The moment an application is filed under Section 95 of the IBC, an interim moratorium immediately commences under Section 96. This statutory moratorium legally halts all pending debt-recovery proceedings against the personal guarantor across all courts and tribunals. Skilled banking counsel utilizes this statutory breathing room to negotiate a composite One-Time Settlement with the creditor, conditioned upon the formal withdrawal of the Section 95 NCLT petition.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 8: CONSORTIUM & MULTIPLE LENDER STRATEGY ══ */}
                <section id="consortium-and-multiple-lender-negotiation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Consortium Lending and Multiple Banking Debt Compromise Strategy
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    High-value commercial exposures rarely involve a single banking institution. More commonly, enterprises operate under Consortium Lending Arrangements or Multiple Banking Arrangements (MBA) involving several public, private, and foreign lenders. Resolving consortium distress demands sophisticated inter-institutional legal maneuvering under the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets (June 7, 2019 Directions).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
                      <div className="text-2xl mb-2">🤝</div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Lead Bank Alignment</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Negotiating directly with the Lead Consortium Bank to structure the master compromise terms, which serve as the regulatory benchmark for member banks holding minority voting shares.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
                      <div className="text-2xl mb-2">📑</div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">ICA Compliance</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Ensuring resolution proposals align with the Inter-Creditor Agreement (ICA) executed by participating lenders, facilitating the requisite voting thresholds for binding composite compromise.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm text-center">
                      <div className="text-2xl mb-2">🔒</div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Simultaneous Release</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Preventing rogue member lenders from initiating unilateral SARFAESI or Section 138 actions by enforcing simultaneous release covenants across all consortium member charges.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 9: SECTION 138 & CRIMINAL DEFENSE ══ */}
                <section id="section-138-and-criminal-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Section 138 Cheque Bounce &amp; Section 25 NACH Criminal Defense
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Commercial lenders and NBFCs frequently deploy criminal complaints under Section 138 of the Negotiable Instruments Act, 1881 (cheque bounce) and Section 25 of the Payment and Settlement Systems Act, 2007 (NACH mandate dishonour) to exert personal pressure on corporate directors and managing partners. These quasi-criminal proceedings can result in bailable or non-bailable warrants if ignored.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our legal representation provides immediate defense before Metropolitan Magistrate and Judicial Magistrate First Class (JMFC) courts:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                    <li>
                      <strong>Statutory Notice Replies:</strong> Drafting precise legal replies within thirty days of receiving statutory demand notices, establishing that instruments were handed over strictly as contingent security collateral rather than in discharge of a crystallised present legal debt.
                    </li>
                    <li>
                      <strong>Rebutting Section 139 Presumptions:</strong> Rebutting statutory presumptions of consideration by demonstrating that uncredited penal charges, interest disputes, or loan moratoriums created unliquidated damage claims rather than enforceable statutory debt.
                    </li>
                    <li>
                      <strong>Compounding Under Section 147 NI Act:</strong> Structuring the final One-Time Settlement terms such that the lender is legally required to execute and submit formal compounding applications under Section 147 of the Negotiable Instruments Act, securing complete dismissal and acquittal across all criminal complaints.
                    </li>
                  </ul>
                </section>

                {/* ══ SECTION 10: VETTING OTS SANCTION & ROC SATISFACTION ══ */}
                <section id="ots-letter-and-roc-satisfaction" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Vetting the OTS Sanction Letter and Securing ROC Form CHG-4 Satisfaction
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The most perilous moment in high-value debt compromise occurs after the bank issues an informal or conditional settlement letter. Borrowers who remit funds against unverified letters frequently discover that the bank credited the remittance as a simple partial recovery against interest arrears, maintaining the primary debt active and continuing litigation.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    An advocate-vetted compromise sanction letter must satisfy rigorous legal criteria prior to releasing any settlement consideration:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-5 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl">
                      <h4 className="font-bold text-gray-900 text-sm mb-2 text-[#D2A02A]">
                        Essential Sanction Letter Covenants
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        <li>&bull; Unequivocal statement of board-level or competent credit committee approval.</li>
                        <li>&bull; Explicit clause affirming that the agreed amount extinguishes the entire debt.</li>
                        <li>&bull; Defined timeline for remittance with reasonable cure periods.</li>
                        <li>&bull; Binding commitment to withdraw all pending DRT, NCLT, and Section 138 litigation.</li>
                        <li>&bull; Absolute release of corporate and personal guarantors.</li>
                        <li>&bull; Mandatory return of all original title deeds and corporate hypothecation records.</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl">
                      <h4 className="font-bold text-gray-900 text-sm mb-2 text-[#5A4C33]">
                        Corporate Statutory Closure &amp; Filings
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        <li>&bull; Execution of Ministry of Corporate Affairs Form CHG-4 (Satisfaction of Charge).</li>
                        <li>&bull; Deregistration of institutional security interest on the CERSAI portal.</li>
                        <li>&bull; Physical handover of original registered mortgage deeds and non-encumbrance certs.</li>
                        <li>&bull; Issuance of unconditional No Dues Certificate on bank corporate letterhead.</li>
                        <li>&bull; Joint compromise memo filed before the Presiding Officer, DRT for final disposal.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 11: COMMERCIAL CIBIL REHABILITATION ══ */}
                <section id="cibil-commercial-credit-rehabilitation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial CIBIL Rehabilitation and Corporate Credit Restoration
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Following a high-value debt settlement, financial institutions are legally obligated under the Credit Information Companies (Regulation) Act, 2005 (CICRA) to update credit bureau records within thirty calendar days. Commercial credit profiles—including CIBIL Commercial, CRIF High Mark, Experian Commercial, and Equifax—must accurately reflect that the liability has been extinguished.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our legal desk monitors post-settlement compliance, ensuring the lender does not leave delinquent open-balance reporting that cripples future corporate borrowing. Where appropriate, we advise corporate clients on credit rebuilding protocols, working capital structuring, and transitioning commercial accounts toward clean, unencumbered operations.
                  </p>
                </section>

                {/* ══ SECTION 12: 8-QUESTION ACCORDION FAQS ══ */}
                <section id="faqs" className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions: High-Value Debt Settlement
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Statutory answers to critical commercial debt resolution and legal defense inquiries.
                    </p>
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
                            className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:text-[#D2A02A] transition-colors gap-4"
                            aria-expanded={isOpen}
                          >
                            <span className="text-sm md:text-base">{faq.question}</span>
                            <span className="text-xl text-[#D2A02A] flex-shrink-0">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-amber-50/20">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ══ SECTION 13: MORE LEGAL GUIDES INTERNAL LINKS ══ */}
                <section id="internal-guides" className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    More Legal Guides &amp; Commercial Banking Resources
                  </h2>
                  <p className="text-sm text-gray-600">
                    Explore our comprehensive repository of authoritative legal guides on debt resolution, DRT litigation, and banking regulations.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      ["/how-to-settle-loans-above-1-crore", "Settle Loans Above 1 Crore", "Multi-crore commercial debt negotiation."],
                      ["/how-to-settle-loans-above-5-crore", "Settle Loans Above 5 Crore", "Consortium debt resolution & DRT defense."],
                      ["/loan-settlement-for-high-net-worth-individual", "High Net Worth Debt Settlement", "Asset protection & personal guarantor defense."],
                      ["/what-is-drt-debt-recovery-tribunal-india", "Debt Recovery Tribunal Guide", "Section 19 procedures & SA filing rules."],
                      ["/what-is-sarfaesi-act-india", "SARFAESI Act Demystified", "Section 13(2), 13(4) and DM orders explained."],
                      ["/business-loan-settlement", "Business Loan Settlement", "Commercial loan OTS framework under RBI norms."],
                      ["/trading-loan-settlement", "Trading Loan Settlement", "Margin shortfall & broker debt resolution."],
                      ["/can-guarantor-be-liable-after-settlement", "Guarantor Post-Settlement Liability", "Discharge of surety under Indian Contract Act."],
                      ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Harassment", "RBI fair practice code & police complaints."],
                      ["/section-138-cheque-bounce-notice-for-personal-loan", "Section 138 Cheque Defense", "Statutory reply drafting & compounding."],
                      ["/one-time-settlement-ots-legal-assistance", "OTS Legal Assistance Scheme", "Comprehensive banking compromise guidance."],
                      ["/debt-recovery-tribunal-advocate", "DRT Advocate Services", "Nationwide High Court & Tribunal counsel."],
                    ].map(([href, title, desc]) => (
                      <Link
                        key={href}
                        href={href}
                        className="p-4 bg-gray-50 hover:bg-amber-50/40 border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition-colors">
                            {title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">{desc}</p>
                        </div>
                        <span className="text-xs text-[#D2A02A] font-semibold mt-3 flex items-center gap-1">
                          Read Guide →
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ══ SECTION 14: STATUTORY REFERENCES & PORTALS ══ */}
                <section id="citations" className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    References, Judicial Authority &amp; Regulatory Portals
                  </h2>
                  <p className="text-xs text-gray-500">
                    Official statutory portals, judicial tribunals, and apex regulatory frameworks governing commercial debt resolution in India:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Reserve Bank of India (RBI Banking Notifications)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://drt.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Debt Recovery Tribunal (e-DRT Portal)</span>
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
                      href="https://www.mca.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Ministry of Corporate Affairs (MCA / ROC Portal)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.cersai.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>CERSAI Asset Security Registration Portal</span>
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
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>RBI Integrated Ombudsman Portal (CMS)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.indiacode.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>India Code: Central Legislative Acts Repository</span>
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
                    <strong className="text-[#D2A02A] font-bold">10,000+ Borrowers Defended</strong>,{" "}
                    <strong className="text-[#D2A02A] font-bold">25,000+ Cases Resolved</strong>, and
                    more than{" "}
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Combined Legal Experience</strong> in
                    providing premier banking litigation, commercial high-value debt settlement, DRT representation, and corporate asset protection nationwide.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/how-to-settle-loans-above-1-crore"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Loans Above 1 Crore
                    </Link>
                    <Link
                      href="/how-to-settle-loans-above-5-crore"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Loans Above 5 Crore
                    </Link>
                    <Link
                      href="/debt-recovery-tribunal-advocate"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      DRT Legal Counsel
                    </Link>
                    <Link
                      href="/loan-settlement-for-high-net-worth-individual"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      HNI Debt Advisory
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
                  Advocate Anuj Anand Malik specializes in commercial banking litigation, high-value corporate debt settlement, DRT representation, and SARFAESI quashing under the Advocates Act, 1961. He has defended corporate borrowers and promoter guarantors across High Courts and Debt Recovery Tribunals nationwide.
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
                  Confidential case evaluation by Advocate Anuj Anand Malik. Protect promoter assets, stay SARFAESI auctions, and negotiate board-sanctioned One-Time Settlements under RBI guidelines.
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
                  Based on 1,680 verified corporate &amp; commercial reviews across India
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
                    ["/how-to-settle-loans-above-1-crore", "Loans Above 1 Crore Settlement"],
                    ["/how-to-settle-loans-above-5-crore", "Loans Above 5 Crore Settlement"],
                    ["/loan-settlement-for-high-net-worth-individual", "High Net Worth Debt Settlement"],
                    ["/what-is-drt-debt-recovery-tribunal-india", "DRT Procedure & Stay Guide"],
                    ["/what-is-sarfaesi-act-india", "SARFAESI Act Legal Defense"],
                    ["/business-loan-settlement", "Business Loan Settlement"],
                    ["/trading-loan-settlement", "Trading Loan Settlement"],
                    ["/can-guarantor-be-liable-after-settlement", "Guarantor Liability Post-Settlement"],
                    ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Bank Recovery Harassment"],
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
                <span>⚖️</span> High-Value Commercial Debt Desk
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
                      placeholder="e.g. Rajendra Singhania"
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
                        placeholder="promoter@enterprise.com"
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
                        placeholder="e.g. Mumbai / Delhi NCR"
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
                        <option value="High-Value Commercial Loan / CC Facility">High-Value Commercial Loan / CC Facility</option>
                        <option value="Consortium / Multiple Banking Exposure">Consortium / Multiple Banking Exposure</option>
                        <option value="Term Loan / Project Finance Default">Term Loan / Project Finance Default</option>
                        <option value="SARFAESI Notice Received (S. 13(2) / S. 13(4))">SARFAESI Notice Received (S. 13(2) / S. 13(4))</option>
                        <option value="Debt Recovery Tribunal (DRT) OA Summons">Debt Recovery Tribunal (DRT) OA Summons</option>
                        <option value="Personal Guarantor / IBC Section 95 Notice">Personal Guarantor / IBC Section 95 Notice</option>
                        <option value="Section 138 / Section 25 Court Summons">Section 138 / Section 25 Court Summons</option>
                        <option value="Unsecured Business Advance / NBFC Facility">Unsecured Business Advance / NBFC Facility</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Brief Case Summary / Stressed Banks &amp; Facilities
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Mention bank names, borrowing facilities, default period, or notices received..."
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
                      Advocate Anuj Anand Malik and our senior commercial banking litigation desk have received your inquiry for priority evaluation.
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

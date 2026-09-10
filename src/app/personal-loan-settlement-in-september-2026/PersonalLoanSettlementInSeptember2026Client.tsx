"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/personal-loan-settlement-in-september-2026";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/personal-loan-settlement-in-september-2026.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-09";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Why is September 2026 considered the best time for personal loan settlement in India?",
    answer:
      "September 2026 represents the closing of the second financial quarter (Q2) and half-yearly audit cycle for Indian commercial banks and NBFCs, triggering institutional urgency to reduce gross Non-Performing Assets (NPAs) to meet regulatory provisioning targets. Under the Reserve Bank of India Framework for Compromise Settlements, credit sanctioning committees receive enhanced delegated authority during September to write off irrecoverable debt and approve maximum waiver percentages. Additionally, nationwide National Lok Adalat benches organized under the Legal Services Authorities Act, 1987 in September provide a judicial platform to formalize compromise decrees with full legal finality.",
  },
  {
    id: "faq-2",
    question: "What statutory legal frameworks govern personal loan settlement in September 2026?",
    answer:
      "Personal loan settlements in September 2026 are governed by the Reserve Bank of India Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) alongside the Master Direction on Fair Practices Code for Lenders. Contractual settlement terms operate under Section 63 of the Indian Contract Act, 1872, which legally validates the acceptance of lesser performance to extinguish a debt obligation. When formalized before a Lok Adalat bench under Section 21 of the Legal Services Authorities Act, 1987, the settlement award holds the statutory status of a civil court decree with zero appealability.",
  },
  {
    id: "faq-3",
    question: "Why do free online DIY settlement templates and automated forms fail with bank legal cells?",
    answer:
      "Free online DIY templates and automated settlement letters lack legal standing under the Advocates Act, 1961 and fail to address institution-specific compromise settlement mandates established by bank boards. In-house bank recovery legal teams routinely discard generic template responses because automated drafts do not provide certified evidentiary proof of bona fide financial hardship or statutory counter-defenses. Furthermore, DIY templates cannot respond to formal statutory notices issued under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007, often inadvertently compromising the borrower's legal defense.",
  },
  {
    id: "faq-4",
    question: "How does transparent fixed legal advisory protect borrowers compared to commercial settlement agencies?",
    answer:
      "Enrolling with an enrolled advocate under a transparent fixed legal advisory model establishes binding advocate-client privilege under Section 126 of the Indian Evidence Act, 1872, protecting financial disclosures from third-party exposure. Unlike unregulated commercial debt settlement companies that operate without judicial oversight and often face scrutiny from regulatory bodies, licensed advocates possess the legal authority to represent borrowers before judicial magistrates, civil courts, and Lok Adalat benches. Transparent legal advisory eliminates recurring monthly agency fees, prevents recovery agency collusion, and ensures that all negotiations adhere strictly to RBI conduct directives.",
  },
  {
    id: "faq-5",
    question: "Can banks initiate criminal proceedings under Section 138 or Section 25 during personal loan settlement?",
    answer:
      "Banks and NBFCs frequently issue statutory demand notices under Section 138 of the Negotiable Instruments Act, 1881 for cheque dishonour or Section 25 of the Payment and Settlement Systems Act, 2007 for automated NACH mandate failures prior to settlement. Engaging an advocate ensures the timely dispatch of formal legal replies demonstrating bona fide financial incapacity and the absence of fraudulent intention to cheat under Section 415 of the Indian Penal Code. Once a compromise settlement is sanctioned and executed, the lender is legally bound to withdraw all pending criminal complaints and file compounding applications before the competent judicial magistrate.",
  },
  {
    id: "faq-6",
    question: "How do RBI recovery agent conduct guidelines protect borrowers in September 2026?",
    answer:
      "The Reserve Bank of India Master Circular on Recovery Agents and Directives on Digital Lending strictly prohibit lenders and third-party recovery agencies from resorting to intimidation, verbal abuse, public humiliation, or unauthorized residential visits. Recovery personnel are statutorily barred from contacting borrowers before 8:00 AM or after 7:00 PM, reaching out to friends or family members, or misrepresenting judicial authority. Advocate-issued legal cease-and-desist notices citing these RBI guidelines, accompanied by immediate escalation to the RBI Integrated Ombudsman Scheme, 2021, promptly halt unlawful recovery conduct.",
  },
  {
    id: "faq-7",
    question: "What constitutes an authentic bank One-Time Settlement (OTS) letter in September 2026?",
    answer:
      "An authentic One-Time Settlement sanction letter must be issued on the official letterhead of the lending bank or NBFC, bearing a verifiable reference number, official corporate seal, and signature of an authorized scale manager or credit committee officer. The letter must unambiguously state the total waived amount, the exact agreed settlement figure, the strict payment timeline, and a binding covenant to issue an unconditional No Dues Certificate (NDC). Legal vetting of this letter prevents predatory collection scams where uncredited payments are unlawfully adjusted against accrued penal interest rather than extinguishing the loan.",
  },
  {
    id: "faq-8",
    question: "How does personal loan settlement impact CIBIL scores and future creditworthiness?",
    answer:
      "Executing a personal loan settlement results in the account being reported to credit bureaus such as CIBIL, Experian, and Equifax with the bureau remark 'Settled' or 'Post-Write-Off Settled' under the Credit Information Companies (Regulation) Act, 2005. While this remark initially reduces the credit score, it completely terminates the catastrophic Days Past Due (DPD) accumulation that accompanies protracted default and prevents court execution decrees. Over an eighteen to twenty-four month rehabilitation cycle, disciplined financial conduct and the strategic use of secured credit products allow settled borrowers to restore their credit score above 750.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Kavita Ramanathan",
    authorLocation: "Bengaluru • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "Defaulting on multiple personal loans during an unexpected medical emergency left me facing continuous recovery calls and Section 138 notices. Traditional corporate firms quoted excessive advance retainers, while online DIY templates were rejected by the bank managers. Advocate Anuj Anand Malik and AMA Legal Solutions provided transparent fixed legal advisory, stepped in to defend me in Lok Adalat, and negotiated RBI-compliant OTS agreements with over sixty percent waivers. They secured authentic No Dues Certificates from all three lenders without any surprise charges.",
  },
  {
    authorName: "Harish Vardhan Chawla",
    authorLocation: "New Delhi • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "When my business suffered severe working capital strain, my personal loans across two private banks defaulted. The recovery agents were violating RBI timings and threatening home visits. AMA Legal Solutions issued strict statutory counter-notices that immediately silenced the agents. Advocate Anuj Anand Malik personally finalized a structured compromise settlement during the bank's quarter-end cycle. The relief of getting official bank-stamped NDCs with zero ongoing liability was life-changing.",
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
      name: "Personal Loan Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Comprehensive legal strategy for personal loan settlement in September 2026 under RBI compromise settlement frameworks. Advocate-led OTS negotiation, harassment protection, Lok Adalat resolution, and substantial waivers.",
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
        "Personal Loan Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Strategic guide to settling unsecured personal loans in September 2026. Explore RBI compromise guidelines, quarter-end provisioning leverage, Section 138 defense, transparent fixed legal advisory, and how advocate representation secures genuine No Dues Certificates.",
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
      name: "Personal Loan Settlement Legal Consultation",
      description:
        "Dedicated legal consultation and dispute representation to negotiate One-Time Settlements (OTS) for defaulted personal loans under the Reserve Bank of India compromise frameworks in India.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1420",
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
        datePublished: rev.authorLocation.includes("September") ? "2026-09-02" : "2026-08-15",
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
          name: "Personal Loan Settlement in September 2026",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Legal Personal Loan Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Comprehensive Debt Liability Audit & NPA Portfolio Stratification",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Dispatch of Statutory Anti-Harassment Notice Under RBI Conduct Guidelines",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Preparation & Submission of Advocate-Certified Hardship Dossier",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Legal Vetting of Bank OTS Sanction Letter & Quashing Section 138/25 Notices",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Securing Unconditional No Dues Certificate (NDC) & Bureau Record Rectification",
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
  { id: "september-2026-window", title: "Why September 2026 Quarter-End Window" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs Agencies vs DIY Templates" },
  { id: "rbi-regulatory-framework", title: "RBI Compromise Settlement Norms" },
  { id: "5-step-settlement-protocol", title: "5-Step Legal Settlement Protocol" },
  { id: "infographic", title: "Settlement Workflow Infographic" },
  { id: "statutory-criminal-defense", title: "Section 138 & Section 25 Defense" },
  { id: "anti-harassment-enforcement", title: "Enforcing RBI Anti-Harassment Rules" },
  { id: "settlement-letter-and-ndc", title: "Vetting OTS Letter & Securing NDC" },
  { id: "credit-rebuilding-post-settlement", title: "CIBIL Rectification & Financial Revival" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Statutory Authority & Official Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function PersonalLoanSettlementInSeptember2026Client() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("quick-answer");

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Personal Loan Settlement in September 2026: Legal Process & RBI OTS Framework – AMA Legal Solutions";
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
      label: "Personal Loan Settlement in September 2026",
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
                <span>⚖️</span> Statutory Debt Resolution &amp; RBI Compromise Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Personal Loan Settlement in{" "}
                <span className="text-[#D2A02A]">September 2026</span>: Legal Process &amp; RBI OTS Framework
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                As scheduled commercial banks and NBFCs approach their second-quarter balance sheet closing,
                the window for negotiated One-Time Settlements (OTS) reaches peak institutional flexibility.
                Learn how advocate-led representation leverages the Reserve Bank of India compromise settlement
                directives, stops recovery agent harassment, quashes Section 138 criminal notices, and secures
                binding waivers with authentic No Dues Certificates.
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
                    <span className="text-gray-400">📅</span> 09-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 16 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> RBI Framework Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contact"
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Urgent Legal Settlement Review</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1a202c] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-xl border border-gray-700 shadow transition-all text-sm md:text-base flex items-center gap-2"
                >
                  <span>📞 Call Advocate: +91-8700343611</span>
                </a>
              </div>
            </div>

            {/* Right Col — Generated OG Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/personal-loan-settlement-in-september-2026.png"
                  alt="Personal Loan Settlement in September 2026 – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    September 2026 Compromise Framework
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory Debt Resolution &amp; Judicial Protection
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

        {/* ══ MAIN 3-COLUMN EDITORIAL GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">

            {/* ── LEFT COLUMN: DESKTOP STICKY TOC ── */}
            <div className="hidden lg:block sticky top-28 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 max-h-[calc(100vh-140px)] overflow-y-auto">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <span className="text-[#D2A02A] text-lg font-bold">📑</span>
                <p className="font-bold text-gray-900 text-sm">Table of Contents</p>
              </div>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* ── CENTER COLUMN: EDITORIAL CONTENT ── */}
            <div className="min-w-0">
              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">

                {/* Meta details & Social Share bar */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center border-b border-gray-100 pb-6 gap-4">
                  <div className="text-xs md:text-sm text-gray-500 font-medium">
                    Authored by{" "}
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-[#D2A02A] hover:underline font-semibold"
                    >
                      Advocate Anuj Anand Malik
                    </Link>{" "}
                    &bull; Reviewed by{" "}
                    <span className="font-semibold text-gray-700">Team AMA Legal Solutions</span>{" "}
                    &bull; Published: September 2026
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-gray-700">Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm cursor-pointer"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition shadow-sm cursor-pointer"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm cursor-pointer"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm cursor-pointer"
                      title="Share on WhatsApp"
                      aria-label="Share on WhatsApp"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition cursor-pointer"
                      title="Copy URL"
                    >
                      {shareMsg || "Copy"}
                    </button>
                  </div>
                </div>

                {/* Standalone Quick-Answer Block */}
                <div
                  id="quick-answer"
                  className="p-6 md:p-8 bg-amber-50 border-2 border-[#D2A02A] rounded-2xl shadow-sm text-gray-800"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[#D2A02A] text-xl">📌</span>
                    <h2 className="text-lg md:text-xl font-extrabold text-[#5A4C33] tracking-tight">
                      Quick Answer: Personal Loan Settlement in September 2026
                    </h2>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-gray-800 font-medium">
                    Personal loan settlement in September 2026 is a formal legal procedure whereby an unsecured borrower and a lending institution execute a binding compromise deed to extinguish outstanding loan liabilities through a mutually agreed lump-sum or structured payment. Under the Reserve Bank of India Compromise Settlements and Technical Write-offs Framework, regulated banks and NBFCs utilize the September quarter-ending balance sheet provisioning cycle to approve substantial waivers on penal charges, accumulated interest, and principal balances. Executing personal loan settlement through an advocate ensures statutory protection against recovery agent harassment, quashes Section 138 and Section 25 criminal proceedings, and secures an unconditional No Dues Certificate without hidden civil liabilities.
                  </p>
                </div>

                {/* Section 1: September 2026 Quarter-End Window */}
                <section id="september-2026-window" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Why September 2026 is the Prime Quarter-End Settlement Window
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    In the Indian banking ecosystem, September represents a pivotal regulatory milestone. As the close of the second fiscal quarter (Q2) and the halfway mark of the financial year, commercial banks, public sector lenders, and non-banking financial companies (NBFCs) face stringent audit deadlines to declare their quarterly financial health to the Reserve Bank of India, credit rating agencies, and public shareholders.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Under the <Link href="/what-happens-after-loan-account-becomes-npa" className="text-[#D2A02A] font-semibold hover:underline">Prudential Framework for Resolution of Stressed Assets</Link>, banks are legally mandated to set aside capital provisions against Non-Performing Assets (NPAs). Unsecured personal loans classified as Sub-standard, Doubtful, or Loss assets lock up institutional capital without generating interest income. Consequently, during September, bank credit committees and recovery vertical heads operate under direct board instructions to execute compromise settlements and clean stressed asset portfolios.
                  </p>

                  <div className="bg-[#FAF7F0] border-l-4 border-[#D2A02A] p-5 rounded-r-xl space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5A4C33]">
                      Institutional Provisioning Drivers in September 2026
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-gray-700">
                      <li><strong>Quarterly NPA Compression Targets:</strong> Branch and zonal recovery managers receive temporary discretionary authority to sanction higher waiver percentages to meet quarterly recovery quotas before September 30.</li>
                      <li><strong>RBI Technical Write-Off Ceilings:</strong> Regulatory ceilings encourage lenders to clear chronic 90+ DPD accounts from active ledger books into technically written-off pools where compromise settlements are sanctioned with minimal internal resistance.</li>
                      <li><strong>National Lok Adalat Integration:</strong> The nationwide scheduling of National Lok Adalat benches during September facilitates court-supervised settlement decrees that protect borrowers with the binding power of a civil court order.</li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Borrowers attempting to settle without understanding this institutional calendar often receive rigid, unyielding demands in non-audit months. By aligning legal negotiation with the September audit timeline, an advocate can secure terms that would be rejected at any other point in the fiscal calendar.
                  </p>
                </section>

                {/* Section 2: Commercial Reality: Advocate vs Agencies vs DIY Templates */}
                <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Reality: Legal Advocate vs. Unregulated Agencies vs. Free DIY Templates
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    When facing unbearable personal loan debt, borrowers encounter three distinct avenues: generic internet DIY templates, commercial debt settlement companies, and licensed banking advocates. Understanding the commercial and legal implications of each choice is essential to avoiding devastating legal traps.
                  </p>

                  {/* Comparative Analysis Table */}
                  <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm text-gray-700">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700">Evaluation Metric</th>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700 text-red-300">Free DIY Online Templates</th>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700 text-amber-300">Unregulated Settlement Agencies</th>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700 text-emerald-300">AMA Legal Solutions (Advocate Advisory)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Statutory Court Standing</td>
                          <td className="p-3.5 md:p-4 text-red-600">Zero legal standing; inadmissible in court hearings</td>
                          <td className="p-3.5 md:p-4 text-amber-700">Prohibited under Section 29 of Advocates Act, 1961</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Full judicial appearance rights in all courts and Lok Adalats</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Section 138 &amp; 25 Defense</td>
                          <td className="p-3.5 md:p-4 text-red-600">Cannot reply to statutory magistrate court summons</td>
                          <td className="p-3.5 md:p-4 text-amber-700">Cannot file compounding applications or legal replies</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Prepares formal statutory defense and quashes criminal complaints</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Legal Privilege &amp; Privacy</td>
                          <td className="p-3.5 md:p-4 text-red-600">Data shared across untrusted digital servers</td>
                          <td className="p-3.5 md:p-4 text-amber-700">Vulnerable to third-party sharing and lead resale</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Strict advocate-client privilege under Section 126 Evidence Act</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Fee Architecture &amp; Billing</td>
                          <td className="p-3.5 md:p-4 text-gray-600">Free, but leads to costly legal defaults and penalties</td>
                          <td className="p-3.5 md:p-4 text-amber-700">Recurring monthly fees, escrow cuts, and surprise charges</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Transparent fixed advisory without hourly markups or surprise retainers</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Harassment Protection</td>
                          <td className="p-3.5 md:p-4 text-red-600">Completely ignored by recovery agency call centers</td>
                          <td className="p-3.5 md:p-4 text-amber-700">Often triggers escalated recovery aggression</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Legal cease-and-desist notices backed by RBI Ombudsman escalation</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">No Dues Certificate (NDC)</td>
                          <td className="p-3.5 md:p-4 text-red-600">Unverified receipts; high risk of residual claims</td>
                          <td className="p-3.5 md:p-4 text-amber-700">No statutory enforcement mechanism for delayed NDCs</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Mandatory bank-stamped NDC verification and bureau update</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      The Fallacy of Automated DIY Settlement Letters
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700">
                      Internet search engines are flooded with downloadable settlement formats and automated debt dispute templates. Borrowers frequently make the fatal mistake of copying these generic drafts, filling in their loan numbers, and emailing them to bank grievance desks. In reality, bank credit committees discard automated templates because they demonstrate no evidentiary proof of financial hardship under statutory norms. Worse, poorly drafted DIY emails often contain inadvertent admissions of liability that compromise the borrower&apos;s defense in subsequent summary civil suits under Order XXXVII of the Code of Civil Procedure, 1908.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700">
                      Conversely, traditional multi-tier corporate law firms impose exorbitant retainer charges and hourly billing that exceed the borrower&apos;s financial reach. AMA Legal Solutions bridges this divide by delivering accessible, fixed-fee legal representation backed by experienced banking advocates who handle every stage of dispute resolution with complete financial transparency.
                    </p>
                  </div>
                </section>

                {/* Section 3: RBI Compromise Settlement Norms */}
                <section id="rbi-regulatory-framework" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Reserve Bank of India Compromise Settlement Directives
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    A One-Time Settlement is not a discretionary favor granted by a branch official; it is an institutionalized statutory mechanism codified under Reserve Bank of India governance. The landmark <Link href="/one-time-settlement-scheme-for-personal-loan-2026" className="text-[#D2A02A] font-semibold hover:underline">RBI Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)</Link> mandates that every regulated bank and NBFC put in place a board-approved policy for compromise settlements.
                  </p>

                  <blockquote className="p-4 border-l-4 border-[#D2A02A] bg-amber-50/60 rounded-r-xl italic text-xs md:text-sm text-gray-800 leading-relaxed">
                    &ldquo;Regulated Entities (REs) shall put in place Board-approved policies for undertaking compromise settlements with the borrowers as well as for technical write-offs... The compromise settlement policy shall lay down the guidance on process, authority for sanctioning, and compromise terms with objective criteria for arriving at the minimum recovery amount.&rdquo;
                    <footer className="mt-1 font-bold text-[#5A4C33] not-italic">— RBI Directive on Compromise Settlements</footer>
                  </blockquote>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    This statutory framework establishes three foundational borrower rights during personal loan settlement in September 2026:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>Right to Board-Governed Settlement Terms:</strong> Recovery personnel cannot fabricate arbitrary settlement sums. The final compromise figure must align with the bank&apos;s published board policy on distressed unsecured assets.</li>
                    <li><strong>Waiver of Penal Capitalization:</strong> Under RBI Fair Lending Practice norms, lenders cannot capitalize penal interest or compound punitive charges. In compromise discussions, penal interest and late fees are the first components eligible for 100% waiver.</li>
                    <li><strong>Prohibition of Pre-Settlement Blacklisting:</strong> While accounts undergo default reporting, lenders cannot misclassify genuine distressed borrowers as willful defaulters without following the rigorous show-cause and identification committee procedure mandated by the RBI Master Circular on Willful Defaulters.</li>
                  </ol>
                </section>

                {/* Section 4: 5-Step Legal Settlement Protocol */}
                <section id="5-step-settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    5-Step Legal Protocol for Personal Loan Settlement in September 2026
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Navigating personal loan settlement requires strict adherence to statutory protocol. Deviating from these procedural steps risks uncredited fund transfers, recurring recovery demands, and lingering legal liabilities.
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">1</span>
                        Comprehensive Debt Liability Audit &amp; NPA Stratification
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Our advocates conduct an exhaustive review of all active loan agreements, sanction letters, repayment schedules, and credit bureau reports. We segregate pure principal balances from inflated penal interest, processing levies, and illegal bounce charges, calculating the true net liability eligible for compromise.
                      </p>
                    </div>

                    <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">2</span>
                        Dispatch of Statutory Anti-Harassment Notice
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        To protect the borrower and their family, we issue formal legal notices under the <Link href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india" className="text-[#D2A02A] font-semibold hover:underline">RBI Master Circular on Recovery Agents</Link>. This notice establishes direct advocate representation, revokes third-party communication consent, and warns lenders of immediate regulatory filings before the RBI Banking Ombudsman for any unlawful conduct.
                      </p>
                    </div>

                    <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">3</span>
                        Advocate-Certified Hardship Dossier Submission
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        We compile an evidentiary hardship petition documenting medical emergencies, job loss, business insolvency, or genuine income reduction. Submitted directly to the bank&apos;s zonal credit committee, this dossier triggers the bank&apos;s internal compromise settlement guidelines under Section 63 of the Indian Contract Act, 1872.
                      </p>
                    </div>

                    <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">4</span>
                        Vetting the OTS Sanction Letter &amp; Judicial Quashing
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Once compromise terms are agreed, we thoroughly vet the official settlement sanction letter to confirm that all waivers are explicitly recorded on bank letterhead. Concurrently, our advocates draft mutual compounding petitions to dismiss all pending notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act.
                      </p>
                    </div>

                    <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">5</span>
                        Securing No Dues Certificate &amp; Credit Bureau Rectification
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Following verified remittance into the bank&apos;s authorized loan account, we demand and secure an unconditional No Dues Certificate (NDC). We ensure that the lender cancels all post-dated cheques and NACH mandates, and updates bureau records with CIBIL, Experian, and Equifax within the statutory thirty-day window.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Signature Infographic Card */}
                <section id="infographic" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="text-center mb-4">
                    <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                      Authoritative Infographic &bull; September 2026 Strategy
                    </p>
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c] mt-1">
                      Personal Loan Compromise Resolution Framework
                    </h3>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                    <img
                      src="/images/og/personal-loan-settlement-in-september-2026.png"
                      alt="Comprehensive Infographic: Personal Loan Settlement in September 2026 Protocol"
                      className="w-full h-auto object-cover block"
                    />
                  </div>

                  <p className="text-xs md:text-sm text-gray-600 text-center mt-3 italic leading-relaxed">
                    Infographic illustrating the statutory alignment between the Reserve Bank of India Compromise Settlement Framework, Q2 balance-sheet provisioning deadlines, and advocate-led judicial dispute resolution.
                  </p>
                </section>

                {/* Section 6: Section 138 & Section 25 Defense */}
                <section id="statutory-criminal-defense" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory Defense Against Section 138 NI Act &amp; Section 25 PSS Act
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    A prevalent recovery tactic employed by financial institutions involves issuing aggressive demand notices under <Link href="/section-138-cheque-bounce-notice-for-personal-loan" className="text-[#D2A02A] font-semibold hover:underline">Section 138 of the Negotiable Instruments Act, 1881</Link> (for cheque dishonour) or Section 25 of the Payment and Settlement Systems Act, 2007 (for electronic mandate/NACH bounce). Lenders use these criminal provisions to create fear of immediate imprisonment.
                  </p>

                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-3">
                    <h3 className="text-base md:text-lg font-bold text-[#5A4C33]">
                      How Our Advocates Defend and Compound Statutory Notices
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-gray-700">
                      <li><strong>Timely Statutory Counter-Notice:</strong> Under Section 138, a borrower has fifteen days from notice receipt to respond. We file an advocate-certified reply establishing the absence of dishonest intent under Section 415 IPC and challenging the validity of security cheques presented without fresh consideration.</li>
                      <li><strong>Pre-Litigation Conciliation:</strong> We transfer pending disputes to pre-litigation conciliation forums or District Lok Adalats under the Legal Services Authorities Act, 1987, halting magistrate court proceedings while compromise negotiations are finalized.</li>
                      <li><strong>Compounding Under Section 147:</strong> Section 147 of the Negotiable Instruments Act makes cheque bounce offences compoundable. Once settlement terms are executed, the bank is contractually and legally obligated to file an application for compounding, resulting in a full acquittal without criminal stigma.</li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Ignoring these notices or relying on generic online templates allows banks to secure bailable or non-bailable warrants from magistrate courts. Engaging an advocate guarantees your statutory defense is formally placed on judicial record.
                  </p>
                </section>

                {/* Section 7: Enforcing RBI Anti-Harassment Rules */}
                <section id="anti-harassment-enforcement" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Enforcing RBI Fair Practices Code Against Recovery Harassment
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    The Supreme Court of India in landmark rulings, including <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, has affirmed that banks cannot employ musclemen or recovery agents to harass, intimidate, or threaten borrowers. The Reserve Bank of India has embedded these constitutional safeguards into its Master Directives.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 rounded-xl bg-[#FAF7F0]">
                      <h4 className="font-bold text-sm text-[#1a202c] mb-1.5 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">⏰</span> Permitted Contact Hours
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Recovery personnel can only call or visit between 8:00 AM and 7:00 PM. Calls outside this statutory window constitute an actionable regulatory violation.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#FAF7F0]">
                      <h4 className="font-bold text-sm text-[#1a202c] mb-1.5 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">🚫</span> Strict Third-Party Privacy
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Agents are prohibited from contacting relatives, employers, or neighbours. Sharing debt details with third parties violates the Digital Personal Data Protection Act and RBI guidelines.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#FAF7F0]">
                      <h4 className="font-bold text-sm text-[#1a202c] mb-1.5 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">🪪</span> Compulsory Identification
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Agents visiting residential addresses must carry official bank authorization letters and identity cards. Visiting without prior notice or failing to display credentials is unlawful.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#FAF7F0]">
                      <h4 className="font-bold text-sm text-[#1a202c] mb-1.5 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">⚡</span> Immediate Ombudsman Escalation
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Our advocates draft statutory complaints directly to the RBI Integrated Ombudsman Scheme, 2021, holding lending institutions liable for punitive compensation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8: Vetting OTS Letter & Securing NDC */}
                <section id="settlement-letter-and-ndc" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Vetting the Bank OTS Sanction Letter &amp; Securing Authentic NDC
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    A One-Time Settlement is only as valid as the documentation supporting it. Thousands of borrowers in India fall victim to informal verbal promises made by agency recovery telecallers, remitting funds only to find their payment treated as a partial installment against accrued interest, leaving the core debt active.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Before releasing any payment, our legal team subjects the bank&apos;s proposal to a comprehensive audit to verify:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-gray-700">
                    <li><strong>Official Letterhead &amp; Stamp:</strong> The letter must originate from the bank&apos;s centralized credit or recovery vertical, complete with a traceable internal reference number.</li>
                    <li><strong>Clear Segregation of Waived Amounts:</strong> The sanction letter must distinctly specify the principal haircut, penal interest waiver, and the exact final settlement figure.</li>
                    <li><strong>Direct Loan Account Remittance:</strong> Payments must be deposited strictly into the borrower&apos;s unique loan account number via NEFT/RTGS, never into a personal agency account.</li>
                    <li><strong>Mandatory Issuance of No Dues Certificate:</strong> The letter must contain a legally enforceable undertaking to deliver the formal No Dues Certificate within thirty days of payment clearance.</li>
                  </ul>
                </section>

                {/* Section 9: CIBIL Rectification & Financial Revival */}
                <section id="credit-rebuilding-post-settlement" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Credit Bureau Rectification &amp; Long-Term Financial Revival
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Under the <Link href="/how-to-remove-a-written-off-status-from-a-credit-report" className="text-[#D2A02A] font-semibold hover:underline">Credit Information Companies (Regulation) Act, 2005</Link>, banks must update account statuses with all four credit bureaus (CIBIL, Experian, CRIF High Mark, and Equifax) following settlement completion.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    While a loan settlement records the status as &ldquo;Settled&rdquo; or &ldquo;Post-Write-Off Settled&rdquo;, it permanently stops the monthly compounding of Days Past Due (DPD) counters. A settled account prevents execution decrees and asset attachment, providing a clean slate from which credit scores can be systematically rebuilt:
                  </p>

                  <div className="bg-[#FAF7F0] border border-[#D2A02A]/30 p-5 rounded-2xl space-y-2">
                    <h4 className="font-bold text-sm text-[#5A4C33]">
                      Post-Settlement Credit Restoration Blueprint
                    </h4>
                    <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-gray-700">
                      <li><strong>Secured Credit Facility:</strong> Obtain a secured credit card against a small fixed deposit to begin generating a positive, unbroken repayment trail.</li>
                      <li><strong>Low Credit Utilization:</strong> Maintain monthly utilization below thirty percent of the available credit limit to signal financial stability to bureau algorithms.</li>
                      <li><strong>Bureau Error Auditing:</strong> File bureau dispute petitions under Section 21 of the CICRA Act if lenders fail to reflect the settled status within forty-five days.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 10: 8-Question Accordion FAQ */}
                <section id="faqs" className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                    <span className="text-[#D2A02A] text-2xl font-bold">❓</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600">
                    Clear, statutory answers to common legal inquiries regarding personal loan settlement in September 2026.
                  </p>

                  <div className="space-y-3">
                    {faqs.map((faq) => {
                      const isOpen = expandedFaqs.includes(faq.id);
                      return (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full text-left p-4 md:p-5 font-bold text-sm md:text-base text-gray-900 flex justify-between items-center gap-4 hover:bg-gray-50 transition cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span>{faq.question}</span>
                            <span
                              className={`text-[#D2A02A] text-xl transform transition-transform duration-200 flex-shrink-0 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              ▾
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-5 md:px-5 text-xs md:text-sm leading-relaxed text-gray-700 border-t border-gray-100 pt-3 bg-gray-50/50">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Section 11: More Legal Guides Grid */}
                <section id="internal-guides" className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    More Legal Guides &amp; Settlement Resources
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">
                    Explore authoritative legal analyses and statutory strategies drafted by our banking advocates:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: "Personal Loan Settlement Services",
                        href: "/personal-loan-settlement-services",
                        desc: "Advocate representation for personal loan compromise negotiations.",
                      },
                      {
                        title: "One Time Settlement Scheme 2026",
                        href: "/one-time-settlement-scheme-for-personal-loan-2026",
                        desc: "Comprehensive breakdown of bank board OTS schemes in 2026.",
                      },
                      {
                        title: "Stop Bank Recovery Agent Harassment",
                        href: "/how-to-stop-bank-recovery-agents-harassment-legally-in-india",
                        desc: "Statutory steps to enforce RBI conduct guidelines and halt intimidation.",
                      },
                      {
                        title: "Section 138 Cheque Bounce Notice Reply",
                        href: "/section-138-cheque-bounce-notice-for-personal-loan",
                        desc: "Legal defenses and procedure to compound criminal cheque dishonour notices.",
                      },
                      {
                        title: "Failed Debt Consolidation Settlement",
                        href: "/how-to-settle-loans-after-a-failed-debt-consolidation-plan",
                        desc: "How to resolve multiple defaulted loans after a failed consolidation scheme.",
                      },
                      {
                        title: "Settle Loans Beyond Repayment Capacity",
                        href: "/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity",
                        desc: "Legal remedies when monthly debt payments exceed your sustainable income.",
                      },
                      {
                        title: "Remove Written-Off Status from CIBIL",
                        href: "/how-to-remove-a-written-off-status-from-a-credit-report",
                        desc: "Procedural guide to resolving post-write-off tags with credit bureaus.",
                      },
                      {
                        title: "Best Lawyer for Loan Settlement",
                        href: "/best-lawyer-for-loan-settlement",
                        desc: "Evaluating legal counsel for high-stakes banking disputes in India.",
                      },
                    ].map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="p-3.5 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                      >
                        <p className="font-bold text-xs md:text-sm text-gray-900 group-hover:text-[#D2A02A] transition-colors flex items-center justify-between">
                          <span>{guide.title}</span>
                          <span className="text-[#D2A02A]">→</span>
                        </p>
                        <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                          {guide.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Section 12: References & Statutory Authority */}
                <section id="citations" className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    References &amp; Statutory Authority
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">
                    Our legal strategies are grounded in established statutory enactments, regulatory directives, and judicial precedents:
                  </p>
                  <ul className="space-y-2 text-xs md:text-sm">
                    <li>
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Reserve Bank of India (RBI) Official Portal
                      </a>{" "}
                      — Master Circular on Compromise Settlements &amp; Prudential Framework for Stressed Assets.
                    </li>
                    <li>
                      <a
                        href="https://nalsa.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        National Legal Services Authority (NALSA)
                      </a>{" "}
                      — Guidelines on National Lok Adalat and Pre-Litigation Conciliation Settlements.
                    </li>
                    <li>
                      <a
                        href="https://services.ecourts.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        e-Courts Services, High Courts &amp; District Courts of India
                      </a>{" "}
                      — Jurisprudence on Section 138 Negotiable Instruments Act and Section 25 PSS Act.
                    </li>
                    <li>
                      <a
                        href="https://financialservices.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Department of Financial Services, Ministry of Finance
                      </a>{" "}
                      — Public Sector Banking Reforms, OTS Guidelines, and Fair Practices Code.
                    </li>
                    <li>
                      <a
                        href="https://www.cibil.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        TransUnion CIBIL India
                      </a>{" "}
                      — Credit Information Companies (Regulation) Act, 2005 Compliance &amp; Dispute Redressal.
                    </li>
                  </ul>
                </section>

                {/* Social Share Row at Bottom */}
                <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs md:text-sm font-bold text-gray-700">
                    Share this legal advisory with someone navigating personal loan debt:
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="px-3 py-1.5 rounded-lg bg-[#1877F2] text-white text-xs font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      X / Twitter
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="px-3 py-1.5 rounded-lg bg-[#0A66C2] text-white text-xs font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>

                {/* Section 13: AMA Company & Media Section */}
                <section
                  id="ama-company-section"
                  className="border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 bg-white text-center shadow-lg relative mt-12 mb-8"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/ama3.svg"
                      alt="AMA Legal Solutions Logo"
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
                    delivering strategic banking litigation, compromise loan settlement, anti-harassment defense, and credit rehabilitation nationwide.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/personal-loan-settlement-services"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Personal Loan Settlement
                    </Link>
                    <Link
                      href="/credit-card-debt-settlement"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Credit Card Settlement
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
                  Advocate Anuj Anand Malik specializes in banking litigation, debt compromise resolution, and consumer financial protection under the Advocates Act, 1961. He has represented over 10,000 borrowers across High Courts, District Courts, and Lok Adalats.
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
                <h3 className="text-xl font-bold mb-2">Need Legal Debt Help?</h3>
                <p className="text-gray-200 mb-6 text-xs leading-relaxed">
                  Confidential evaluation by Advocate Anuj Anand Malik. Stop recovery harassment immediately and negotiate RBI-compliant compromise settlements before the September quarter closes.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-3 text-sm shadow"
                >
                  Call +91-8700343611
                </a>
                <Link
                  href="/contact"
                  className="block w-full border border-white text-white text-center py-3 rounded-xl font-bold hover:bg-white hover:text-[#5A4C33] transition-colors text-sm cursor-pointer"
                >
                  Request Callback
                </Link>
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
                  Based on 1,420 verified client reviews across India
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
                    ["/personal-loan-settlement-services", "Personal Loan Settlement Services"],
                    ["/one-time-settlement-scheme-for-personal-loan-2026", "One Time Settlement Scheme 2026"],
                    ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Agents Legally"],
                    ["/section-138-cheque-bounce-notice-for-personal-loan", "Section 138 Notice Defense"],
                    ["/how-to-settle-loans-after-a-failed-debt-consolidation-plan", "Failed Debt Consolidation Settlement"],
                    ["/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity", "Debt Payments Exceed Capacity"],
                    ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off CIBIL Tag"],
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
    </>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/loan-settlement-vs-debt-consolidation";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/loan-settlement-vs-debt-consolidation.png`;
const LOGO_URL = `${SITE}/ama3.svg`;

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    question: "Which is better loan settlement or debt consolidation for an overburdened borrower?",
    answer:
      "For an overburdened borrower facing acute cash flow distress, loan settlement is legally and commercially superior to debt consolidation because taking a new consolidation loan compounds overall liability. Under the Reserve Bank of India Prudential Framework for Stressed Assets, loan settlement permanently extinguishes debt through a negotiated compromise waiver of 40% to 75% of the outstanding balance. Debt consolidation is only viable if the borrower maintains a strong credit score and possesses adequate surplus income to service a larger consolidated principal.",
  },
  {
    question: "Can an individual obtain a debt consolidation loan after defaulting on EMIs?",
    answer:
      "Once a borrower defaults and accrues Days Past Due (DPD) on loan statements, commercial banks and NBFCs reject debt consolidation applications under RBI credit risk underwriting norms. When debt consolidation becomes inaccessible due to low credit scores, loan settlement represents the primary statutory alternative to avert legal recovery proceedings. Borrowers in this situation can engage legal counsel to petition bank settlement committees for an official One-Time Settlement under Section 89 of the Code of Civil Procedure, 1908.",
  },
  {
    question: "How does debt consolidation differ from loan settlement on a CIBIL credit report?",
    answer:
      "Debt consolidation results in existing loan accounts being marked as 'Closed' once the new consolidated facility disburses funds, thereby safeguarding or enhancing the borrower's credit score. Conversely, a negotiated One-Time Settlement leads credit bureaus such as TransUnion CIBIL and Experian to flag the account as 'Settled', which causes a temporary credit score contraction. However, a settlement legally halts monthly compounding default remarks and allows credit rebuilding within 18 to 24 months.",
  },
  {
    question: "Is loan settlement legally enforceable under Reserve Bank of India guidelines?",
    answer:
      "Yes, loan settlement is formally sanctioned under the RBI Master Directions on Compromise Settlements and Technical Write-offs, which empower regulated lenders to approve compromise proposals for stressed retail and commercial accounts. The settlement agreement becomes legally binding upon fulfillment of the terms stipulated in the bank's official sanction letter. Borrowers are entitled to an authentic No Dues Certificate under the Indian Contract Act, 1872, extinguishing all residual legal liabilities.",
  },
  {
    question: "Can lenders initiate criminal proceedings during debt consolidation or loan settlement negotiations?",
    answer:
      "Lenders cannot initiate criminal prosecution for mere contractual default on unsecured debts, as established by the Supreme Court of India in landmark banking jurisprudence. However, lending institutions frequently file quasi-criminal complaints under Section 138 of the Negotiable Instruments Act, 1881 for dishonored cheques or Section 25 of the Payment and Settlement Systems Act, 2007 for failed NACH auto-debits. Retaining an advocate provides immediate courtroom defense and enables compoundable resolution through National Lok Adalat proceedings.",
  },
  {
    question: "Why do automated online debt consolidation apps and templates fail in court?",
    answer:
      "Automated debt consolidation platforms and online DIY legal templates lack statutory recognition under the Advocates Act, 1961 and do not create advocate-client confidentiality under Section 126 of the Indian Evidence Act. Generic digital templates fail to incorporate customized jurisdictional defenses, forensic ledger audits, or statutory notices mandated by the Supreme Court of India. When recovery disputes escalate to judicial magistrates or Debt Recovery Tribunals, institutional lenders disregard informal digital agreements that lack advocate certification.",
  },
  {
    question: "How does retaining an advocate-led law firm protect borrowers from recovery agent harassment?",
    answer:
      "Engaging an advocate-led legal practice establishes formal legal representation, enabling counsel to issue statutory cease-and-desist notices under the RBI Master Circular on Fair Practices Code. Regulated banks and NBFC collection agents are statutorily prohibited from visiting borrower homes, contacting workplace colleagues, or making threatening communications once an advocate appears on record. Continued harassment following legal notice constitutes actionable misconduct punishable before the RBI Integrated Ombudsman and Consumer Protection Forums.",
  },
  {
    question: "What makes advocate-assisted loan settlement more cost-effective than corporate law firm retainers?",
    answer:
      "Advocate-led specialized debt resolution practices operate on transparent, predictable legal advisory frameworks tailored for financially stressed borrowers, eliminating open-ended hourly billing. In contrast, corporate law firms demand substantial upfront retainers and recurring hourly rates that are unviable for retail loan disputes. Specialized banking advocates focus directly on forensic ledger verification and RBI compromise negotiations, securing substantial debt relief without burdensome legal overhead.",
  },
];

/* ────────────────────────── REVIEW DATA ────────────────────────── */
const clientReviewData = {
  authorName: "Vikram Malhotra",
  authorRole: "Senior Business Consultant, New Delhi • Restructured & Resolved Multi-Lender Liabilities",
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  reviewBody:
    "When my monthly debt obligations began spiraling out of control across four private lenders, I was caught in a dilemma between taking another consolidation loan or pursuing a legal loan settlement. Unregulated online consolidation platforms offered high interest rates and hidden processing costs, while recovery agents began persistent harassment. Retaining Advocate Anuj Anand Malik and the AMA Legal Solutions team was a turning point. They conducted a meticulous forensic ledger audit, issued statutory cease-and-desist notices under RBI guidelines, and clearly demonstrated why loan settlement was our optimal commercial remedy. Their transparent fixed advisory eliminated unpredictable hourly retainers, defended my rights, and secured authentic bank No Dues Certificates with substantial principal waivers. Their advocate-led protection is truly peerless.",
};

/* ────────────────────────── STEP PROTOCOL DATA ─────────────────── */
const stepListItems = [
  {
    title: "Comprehensive Forensic Ledger & Debt-to-Income Audit",
    desc: "Our banking litigation advocates conduct a meticulous diagnostic of all outstanding loan agreements, interest computation schedules, and banking statements to segregate genuine principal debt from inflated compound charges, illegal penalties, and processing fees.",
  },
  {
    title: "Strategic Solvency Evaluation: Consolidation vs. Settlement",
    desc: "We analyze your cash flow, verifiable earnings, and debt-to-income ratio under RBI guidelines to determine whether debt consolidation is mathematically viable or if a legally negotiated One-Time Settlement (OTS) is required to prevent insolvency.",
  },
  {
    title: "Issuance of Statutory Anti-Harassment & Representation Notices",
    desc: "We issue formal Vakalatnama and statutory cease-and-desist notices to all creditor banks and collection agencies under the Advocates Act, 1961 and the RBI Fair Practices Code, mandating immediate cessation of unauthorized calls and visits.",
  },
  {
    title: "Direct Institutional Negotiations with Bank Stressed Asset Committees",
    desc: "Our senior advocates interface directly with bank zonal credit committees and stressed asset verticals, submitting formal OTS hardship petitions to secure significant 40% to 75% waivers on total liabilities.",
  },
  {
    title: "Authentication of Settlement Sanction Letter & No Dues Enforcement",
    desc: "We forensically verify the authenticity of the bank's official settlement sanction letter before payment, ensuring all terms are legally binding, and enforce the timely issuance of the final No Dues Certificate (NDC) and credit bureau updates.",
  },
];

/* ──────────────────────── TOC SECTIONS ─────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "core-dilemma", title: "Settlement vs. Consolidation Overview" },
  { id: "understanding-debt-consolidation", title: "What is Debt Consolidation?" },
  { id: "understanding-loan-settlement", title: "What is Loan Settlement?" },
  { id: "head-to-head-comparison", title: "Head-to-Head Comparison" },
  { id: "commercial-analysis", title: "Commercial Analysis: DIY vs Advocates" },
  { id: "editorial-infographic", title: "Legal Blueprint & Strategy Infographic" },
  { id: "rbi-and-statutory-protections", title: "RBI Guidelines & Legal Protections" },
  { id: "legal-protocol", title: "5-Step Legal Protocol" },
  { id: "cibil-and-credit-rebuilding", title: "CIBIL Score Impact & Restoration" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "more-legal-guides", title: "More Legal Guides" },
  { id: "references-and-authority", title: "References & Statutory Authorities" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function LoanSettlementVsDebtConsolidationClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalSubmitted, setModalSubmitted] = useState<boolean>(false);
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
      alert("Please enter your name and contact phone number.");
      return;
    }
    setModalSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const textMsg = `Hello AMA Legal Solutions, I require legal consultation regarding Loan Settlement vs Debt Consolidation.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Debt Facility: ${formData.assetType}
Details: ${formData.message || "Requesting strategic case evaluation under RBI compromise settlement framework."}`;
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
      "Which is Better: Loan Settlement or Debt Consolidation? Legal Analysis by AMA Legal Solutions";
    if (platform === "copy") {
      await navigator.clipboard.writeText(url);
      setShareMsg("Link copied to clipboard!");
      setTimeout(() => setShareMsg(null), 2500);
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

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    {
      label: "Loan Settlement vs Debt Consolidation",
      href: PAGE_SLUG,
    },
  ];

  /* ────────────────────────── SCHEMA DATA ────────────────────────── */
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "Which is Better: Loan Settlement or Debt Consolidation? Legal Comparison",
        description:
          "Authoritative legal and commercial analysis comparing loan settlement and debt consolidation under Indian banking law, RBI compromise regulations, and court precedents.",
        image: [OG_IMAGE_URL],
        datePublished: "2026-09-14T09:00:00+05:30",
        dateModified: "2026-09-14T12:00:00+05:30",
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
        name: "Which is Better: Loan Settlement or Debt Consolidation? | AMA Legal Solutions",
        description:
          "Exhaustive legal guide evaluating loan settlement vs debt consolidation under Reserve Bank of India regulations, credit score impacts, and advocate-led debt relief.",
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
        name: "Commercial Debt Settlement & Resolution Advisory",
        image: OG_IMAGE_URL,
        description:
          "Advocate-led commercial debt relief advisory evaluating loan settlement versus debt consolidation. Forensic ledger audits, RBI compromise petitions, and full legal defense.",
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
            ratingValue: "5.0",
            bestRating: "5",
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
            name: "Loan Settlement vs Debt Consolidation",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#process`,
        name: "5-Step Legal Protocol for Strategic Debt Resolution",
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
        id="loan-settlement-vs-debt-consolidation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pt-20 md:pt-28">
        <div className="container mx-auto px-4 max-w-[1600px]">
          
          {/* ══ HERO SECTION: Asymmetric 12-Column Grid ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4 mb-12 items-center">
            {/* Left Column (lg:col-span-8) */}
            <div className="flex flex-col lg:col-span-8">
              <Breadcrumbs items={breadcrumbItems} />

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Which is Better <span className="text-[#D2A02A]">Loan Settlement or Debt Consolidation</span>? Legal &amp; Commercial Comparison
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-normal">
                Facing multiple compounding credit card bills and personal loan EMIs? Understanding the critical statutory and financial boundaries between debt consolidation and loan settlement is the decisive step toward regaining financial freedom. Explore this advocate-led legal evaluation grounded in Reserve Bank of India (RBI) compromise regulations, courtroom defenses, and commercial solvency strategies.
              </p>

              {/* Author Row */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A] shadow-md">
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
                    <p className="text-xs text-gray-500">Reviewed by Team AMA Legal Solutions</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                    <span className="text-gray-400">📅</span> 14-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 16 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex items-center justify-center p-2">
                <img
                  src="/images/og/loan-settlement-vs-debt-consolidation.png"
                  alt="Which is Better Loan Settlement or Debt Consolidation Graphic - AMA Legal Solutions"
                  className="w-full h-auto rounded-2xl object-cover block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* ── LEFT COLUMN: Desktop Sticky Table of Contents ── */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
                <p className="text-xs font-extrabold text-[#5A4C33] uppercase tracking-wider mb-3 pb-2 border-b border-gray-100 flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📑</span> Navigation
                </p>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* ── CENTER COLUMN: Main Editorial Content ── */}
            <article className="min-w-0">
              
              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-6">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-2">
                    Table of Contents
                  </p>
                  <TableOfContents sections={tocSections} orientation="horizontal" />
                </div>
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">
                
                {/* Meta Details & Social Share Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-5 gap-4">
                  <div className="text-xs md:text-sm text-gray-600">
                    By <Link href="/author/anuj-anand-malik" className="text-[#D2A02A] hover:underline font-bold">Advocate Anuj Anand Malik</Link> &bull; Reviewed by <span className="font-semibold text-gray-800">Team AMA Legal Solutions</span> &bull; Updated: September 2026
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-500 uppercase">Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm cursor-pointer"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      f
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm cursor-pointer"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      𝕏
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm cursor-pointer"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      in
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm cursor-pointer"
                      title="Share on WhatsApp"
                      aria-label="Share on WhatsApp"
                    >
                      WA
                    </button>
                  </div>
                </div>

                {/* ══ STANDALONE QUICK ANSWER BLOCK ══ */}
                <div id="quick-answer" className="bg-amber-50/80 border-l-4 border-[#D2A02A] p-6 rounded-xl shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#5A4C33] font-bold text-base md:text-lg">
                    <span>⚡</span>
                    <h2>Quick Answer: Which is Better Loan Settlement or Debt Consolidation?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    When determining which is better loan settlement or debt consolidation, the decisive factors are verifiable repayment capacity and credit standing. Debt consolidation is better for solvent borrowers with credit scores above 750 who can service unified monthly installments without principal forgiveness. In contrast, loan settlement is substantially better for borrowers experiencing acute financial distress, cash flow insolvency, or recovery harassment, as an advocate-negotiated One-Time Settlement (OTS) under Reserve Bank of India guidelines legally waives 40% to 75% of total outstanding liabilities without accumulating further debt.
                  </p>
                </div>

                {/* ══ SECTION 1: THE CORE DILEMMA ══ */}
                <section id="core-dilemma" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    The Retail Debt Dilemma: Decoupling Consolidation from Settlement
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Across the Indian consumer banking ecosystem, borrowers trapped under multiple compounding credit obligations frequently confront a pivotal strategic choice: should they consolidate their debts into a single unified facility, or should they initiate formal loan settlement negotiations? While both approaches aim to resolve unmanageable liabilities, they stem from fundamentally different legal philosophies, require distinct qualifications, and yield radically contrasting outcomes for a borrower&apos;s financial health and legal exposure.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Misjudging this choice carries grave legal consequences. Borrowers who attempt debt consolidation while already experiencing acute liquidity insolvency often compound their distress by taking high-cost interim loans, resulting in cascading defaults, bounced NACH mandates under Section 25 of the Payment and Settlement Systems Act, 2007, and dishonored cheques governed by Section 138 of the Negotiable Instruments Act, 1881. Conversely, solvent borrowers who prematurely seek loan settlement may unnecessarily impair their credit rating when standard refinancing or restructuring could have preserved their credit score.
                  </p>
                  <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 italic text-gray-700 bg-amber-50/40 rounded-r-lg">
                    &ldquo;Under the Indian Contract Act, 1872 and the Reserve Bank of India Prudential Framework, debt consolidation represents an agreement of novation and continuation, whereas a One-Time Settlement (OTS) is an agreement of compromise and legal discharge under Section 63.&rdquo;
                  </blockquote>
                </section>

                {/* ══ SECTION 2: WHAT IS DEBT CONSOLIDATION? ══ */}
                <section id="understanding-debt-consolidation" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    Understanding Debt Consolidation: Mechanics, Eligibility, and Risks
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Debt consolidation is a financial refinancing mechanism wherein a debtor obtains a single new credit facility to liquidate multiple existing unsecured obligations, such as credit card revolving balances, instant personal loans, and fintech credit lines. The primary objective is to replace disparate payment due dates and varying interest rates with a single monthly Equated Monthly Installment (EMI), ideally at a lower weighted-average interest rate or an extended repayment tenor.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 pt-2">Key Operational Requirements for Debt Consolidation:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                    <li>
                      <strong>Pristine Credit Score (CIBIL 750+):</strong> Regulated commercial banks and tier-1 NBFCs mandate strong credit bureau scores. Any existing Days Past Due (DPD) or active default flags instantly trigger algorithmic rejection under automated underwriting algorithms.
                    </li>
                    <li>
                      <strong>Verifiable Continuous Income:</strong> Borrowers must present continuous salary slips or audited business financials demonstrating an unencumbered Fixed Obligation to Income Ratio (FOIR) typically below 45% to 50%.
                    </li>
                    <li>
                      <strong>100% Repayment of Principal and Interest:</strong> Consolidation does not waive or reduce any portion of the underlying debt. The borrower remains liable for the full principal amount alongside newly computed interest.
                    </li>
                    <li>
                      <strong>Credit Bureau Account Status:</strong> Existing loans are reported as &ldquo;Closed&rdquo; once liquidated by the new facility, safeguarding credit standing and avoiding default tags.
                    </li>
                  </ul>

                  <div className="bg-red-50/60 border border-red-200 rounded-xl p-5 mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-red-900 font-bold text-sm md:text-base">
                      <span>⚠️</span>
                      <h4>The Severe Vulnerability of Debt Consolidation in Financial Hardship</h4>
                    </div>
                    <p className="text-red-800 text-xs md:text-sm leading-relaxed">
                      If a borrower has already experienced genuine financial distress—such as corporate job loss, salary reductions, business contraction, or emergency hospitalization—debt consolidation is rarely accessible. Furthermore, taking a consolidation loan to service existing debts merely kicks the financial can down the road, prolonging repayment tenors and substantially inflating the total cumulative interest outflow over time.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 3: WHAT IS LOAN SETTLEMENT? ══ */}
                <section id="understanding-loan-settlement" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    Understanding Loan Settlement: RBI Compromise Framework &amp; Legal Shield
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Loan settlement—formally recognized as a One-Time Settlement (OTS) or Compromise Settlement—is a statutory dispute resolution mechanism whereby a lending institution legally agrees to accept a discounted, negotiated lump sum to extinguish the entire outstanding liability. Governed by the Reserve Bank of India&apos;s <em>Prudential Framework for Resolution of Stressed Assets</em> and the <em>Master Directions on Compromise Settlements and Technical Write-offs</em>, loan settlement provides institutional relief for borrowers whose repayment capacity has been compromised by involuntary financial distress.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 pt-2">Core Legal Attributes of Advocate-Led Loan Settlement:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                    <li>
                      <strong>Substantial Debt Haircut (40% to 75% Waiver):</strong> Strategic legal negotiations eliminate 100% of accumulated penal finance charges, compounding late fees, and overdue interest, followed by significant haircuts on the genuine principal balance.
                    </li>
                    <li>
                      <strong>Immediate Statutory Cease-and-Desist Notices:</strong> Under the Advocates Act, 1961 and the RBI Fair Practices Code, retaining formal legal counsel immediately prohibits third-party recovery agents from contacting relatives, visiting workplaces unannounced, or making harassing communications.
                    </li>
                    <li>
                      <strong>Quasi-Criminal Courtroom Defense:</strong> When banks issue legal demand notices under Section 138 of the Negotiable Instruments Act, 1881 (cheque bounce) or Section 25 of the Payment and Settlement Systems Act, 2007 (NACH mandate failure), litigation advocates provide judicial representation and resolve proceedings through Lok Adalat consent decrees under Section 89 of the Code of Civil Procedure, 1908.
                    </li>
                    <li>
                      <strong>Official Bank No Dues Certificate (NDC):</strong> A verified settlement concludes with an authenticated, board-approved bank sanction letter followed by a final No Dues Certificate, permanently barring future legal claims by lenders or Asset Reconstruction Companies (ARCs).
                    </li>
                  </ul>
                </section>

                {/* ══ SECTION 4: HEAD-TO-HEAD COMPARISON ══ */}
                <section id="head-to-head-comparison" className="scroll-mt-32 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    Head-to-Head Comparative Breakdown: Settlement vs. Consolidation
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    To determine which path aligns with your commercial objectives, examine this side-by-side legal and financial evaluation:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm text-gray-700">
                      <thead className="bg-[#5A4C33] text-white uppercase text-[11px] tracking-wider">
                        <tr>
                          <th className="p-4">Evaluation Parameter</th>
                          <th className="p-4">Debt Consolidation</th>
                          <th className="p-4">Legal Loan Settlement (OTS)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Primary Objective</td>
                          <td className="p-4">Merge multiple debts into a single unified loan for payment convenience.</td>
                          <td className="p-4 font-semibold text-[#5A4C33]">Permanently extinguish unmanageable debt with 40%–75% legal waivers.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Total Liability Reduction</td>
                          <td className="p-4">Zero debt reduction. Full principal and new interest must be repaid.</td>
                          <td className="p-4 font-semibold text-[#D2A02A]">Substantial reduction. Eliminates 100% penal fees and discounts principal.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">CIBIL Score Requirement</td>
                          <td className="p-4">Demands 750+ score, low FOIR, and flawless repayment history.</td>
                          <td className="p-4">No minimum score required. Tailored for stressed and defaulted accounts.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Credit Report Impact</td>
                          <td className="p-4">Accounts marked as &apos;Closed&apos;. Protects existing credit rating.</td>
                          <td className="p-4">Accounts marked as &apos;Settled&apos;. Halts DPD compounding; score rebuilds in 18–24 mo.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Recovery Agent Shield</td>
                          <td className="p-4">None. If application is delayed or rejected, collection harassment continues.</td>
                          <td className="p-4 font-semibold text-gray-900">Statutory protection under Advocates Act &amp; RBI Fair Practices Code.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Courtroom &amp; S. 138 Defense</td>
                          <td className="p-4">Inapplicable. Non-legal commercial product offering zero courtroom defense.</td>
                          <td className="p-4 font-semibold text-gray-900">Direct advocate representation, bail support, and Lok Adalat quashing.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Ideal Candidate Profile</td>
                          <td className="p-4">Solvent executives with stable income wanting simpler monthly payments.</td>
                          <td className="p-4 font-semibold text-[#5A4C33]">Borrowers in acute financial distress unable to service existing monthly EMIs.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 5: COMMERCIAL ANALYSIS: DIY VS ADVOCATES ══ */}
                <section id="commercial-analysis" className="scroll-mt-32 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    Commercial Analysis: Free DIY Templates vs. Advocate-Led Law Firms vs. Corporate Firms
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    When addressing commercial debt relief, many borrowers search for free online DIY drafting templates, unregulated mobile apps, or high-end corporate corporate firms. Understanding the legal enforceability, statutory risk, and cost-effectiveness of each approach is vital:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm text-gray-700">
                      <thead className="bg-[#1a202c] text-white uppercase text-[11px] tracking-wider">
                        <tr>
                          <th className="p-4">Capability &amp; Service Dimension</th>
                          <th className="p-4">Free DIY Templates / Digital Apps</th>
                          <th className="p-4 bg-[#5A4C33] text-white">Advocate-Led Advisory (AMA Legal Solutions)</th>
                          <th className="p-4">Excessive Corporate Law Firms</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Legal Standing &amp; Representation</td>
                          <td className="p-4 text-red-600 font-semibold">Zero legal standing. Inadmissible in court and ignored by bank credit committees.</td>
                          <td className="p-4 font-bold text-[#5A4C33] bg-amber-50/40">Full legal standing under Advocates Act, 1961 with Vakalatnama representation.</td>
                          <td className="p-4">Full legal standing, but heavily focused on large corporate conglomerates.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Fee Structure &amp; Cost Predictability</td>
                          <td className="p-4">Appears free or cheap, but conceals data monetizing and subscription traps.</td>
                          <td className="p-4 font-bold text-[#5A4C33] bg-amber-50/40">Transparent fixed advisory without hourly billing markups or surprise retainers.</td>
                          <td className="p-4 text-red-600 font-semibold">Exorbitant upfront retainers with open-ended, compounding hourly billable rates.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Anti-Harassment Enforcement</td>
                          <td className="p-4">None. Cannot issue statutory cease-and-desist notices to recovery agencies.</td>
                          <td className="p-4 font-bold text-[#5A4C33] bg-amber-50/40">Immediate statutory notices under RBI Fair Practices Code halting illegal visits.</td>
                          <td className="p-4">Capable of issuing notices, but process is slow and cost-prohibitive for individuals.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Section 138 &amp; 25 Courtroom Defense</td>
                          <td className="p-4 text-red-600 font-semibold">Zero courtroom representation. Leads to non-bailable warrants if default escalates.</td>
                          <td className="p-4 font-bold text-[#5A4C33] bg-amber-50/40">Direct judicial defense before Magistrates, bail support, and Lok Adalat quashing.</td>
                          <td className="p-4">Available, but costs often exceed the underlying retail debt in dispute.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Forensic Ledger &amp; Penalty Audits</td>
                          <td className="p-4">Generic web calculators that cannot detect illegal compounding interest.</td>
                          <td className="p-4 font-bold text-[#5A4C33] bg-amber-50/40">Forensic banking ledger audit identifying usurious interest and unauthorized fees.</td>
                          <td className="p-4">Comprehensive audit capabilities, but reserved for multi-crore corporate insolvency.</td>
                        </tr>
                        <tr className="hover:bg-amber-50/20">
                          <td className="p-4 font-bold text-gray-900">Authentication of No Dues Certificate</td>
                          <td className="p-4 text-red-600 font-semibold">Unverified. High risk of fraudulent settlement letters and ongoing liabilities.</td>
                          <td className="p-4 font-bold text-[#5A4C33] bg-amber-50/40">Rigorous legal verification of bank sanction letter before payment and NDC enforcement.</td>
                          <td className="p-4">Thorough verification, but burdened with excessive administrative layers.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    By eliminating predatory hourly billing and excessive corporate retainers while avoiding the legal invalidity of DIY templates, AMA Legal Solutions provides a transparent, advocate-certified pathway that balances cost accessibility with senior courtroom authority.
                  </p>
                </section>

                {/* ══ SECTION 6: EDITORIAL INFOGRAPHIC CARD ══ */}
                <section id="editorial-infographic" className="scroll-mt-32">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center gap-2 text-[#5A4C33] font-bold text-base md:text-lg">
                      <span>⚖️</span>
                      <h3>Signature Legal Blueprint: Loan Settlement vs. Debt Consolidation Decision Matrix</h3>
                    </div>
                    
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                      <img
                        src="/images/og/loan-settlement-vs-debt-consolidation.png"
                        alt="Loan Settlement vs Debt Consolidation Strategic Comparison Infographic"
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed pt-1">
                      <strong>Figure 1.1:</strong> Comparative strategic workflow illustrating the divergence between debt consolidation (refinancing without debt reduction) and advocate-led loan settlement (statutory OTS compromise under RBI guidelines). Sourced from AMA Legal Solutions Banking Litigation Practice.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 7: RBI GUIDELINES & STATUTORY PROTECTIONS ══ */}
                <section id="rbi-and-statutory-protections" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    RBI Guidelines &amp; Statutory Defenses for Defaulted Borrowers
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Borrowers often delay seeking professional legal guidance due to intimidation by collection agents. Indian law firmly protects honest borrowers experiencing financial distress through multiple statutory mechanisms:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
                      <div className="text-lg font-bold text-[#5A4C33] flex items-center gap-2">
                        <span>📜</span> RBI Compromise Directives
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Under the RBI Master Directions on Compromise Settlements, all commercial banks and NBFCs must maintain board-approved compromise policies. Lenders are legally empowered to negotiate settlements and execute principal write-offs without treating the debtor as a willful defaulter.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
                      <div className="text-lg font-bold text-[#5A4C33] flex items-center gap-2">
                        <span>🛑</span> RBI Fair Practices Code
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        The Fair Practices Code strictly prohibits abusive language, calls outside statutory hours (8:00 AM to 7:00 PM), unannounced workplace visits, and contacting third-party relatives. Violations are punishable through the RBI Integrated Ombudsman Scheme.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
                      <div className="text-lg font-bold text-[#5A4C33] flex items-center gap-2">
                        <span>⚖️</span> Section 138 NI Act Defense
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Security cheques obtained at loan disbursement cannot be mechanically converted into criminal convictions. Banking advocates establish legal defenses demonstrating lack of legally enforceable debt for inflated amounts, facilitating compoundable Lok Adalat settlements.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
                      <div className="text-lg font-bold text-[#5A4C33] flex items-center gap-2">
                        <span>🛡️</span> Section 25 PSS Act Defense
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Electronic NACH payment bounces do not allow immediate coercive attachment. Advocates represent borrowers before metropolitan magistrates, challenging irregular mandate presentations and preventing non-bailable warrants.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 8: 5-STEP LEGAL PROTOCOL ══ */}
                <section id="legal-protocol" className="scroll-mt-32 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    The 5-Step Legal Protocol: How Advocates Execute Strategic Debt Resolution
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    At AMA Legal Solutions, our senior banking litigation advocates implement a disciplined, step-by-step protocol to resolve debt disputes safely and permanently:
                  </p>

                  <div className="space-y-4">
                    {stepListItems.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#D2A02A] transition shadow-sm"
                      >
                        <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-sm">
                          {idx + 1}
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-gray-900 text-base">{step.title}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ══ SECTION 9: CIBIL & CREDIT REBUILDING ══ */}
                <section id="cibil-and-credit-rebuilding" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    CIBIL Score Impact &amp; Credit Rebuilding Post-Resolution
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base">
                    One of the most frequent concerns borrowers voice when evaluating which is better loan settlement or debt consolidation is the impact on their credit profile. Here is the realistic credit trajectory for both avenues:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-base">Debt Consolidation Credit Profile</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Because debt consolidation involves taking a new loan to fully satisfy existing accounts, old facilities are reported as &ldquo;Closed&rdquo; to TransUnion CIBIL, Experian, and Equifax. While there is a minor initial dip due to the new hard credit inquiry, timely EMI repayments on the consolidated loan preserve or elevate your score over time.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-base">Loan Settlement Credit Profile</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Executing a One-Time Settlement results in the account being marked as &ldquo;Settled&rdquo;, reflecting that a portion of the contractual balance was waived. This results in a temporary credit score drop. However, settling immediately terminates monthly compounding Days Past Due (DPD) tags, halts legal notices, and allows borrowers to rebuild credit above 750 within 18 to 24 months using secured credit cards and disciplined financial management.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 10: 8-QUESTION ACCORDION FAQS ══ */}
                <section id="frequently-asked-questions" className="scroll-mt-32 space-y-4 border-t border-gray-100 pt-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white transition shadow-sm"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-4 sm:p-5 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition text-sm sm:text-base cursor-pointer"
                        >
                          <span className="pr-4">{faq.question}</span>
                          <span className="text-[#D2A02A] text-xl font-extrabold shrink-0">
                            {openFaqIndex === index ? "−" : "+"}
                          </span>
                        </button>
                        {openFaqIndex === index && (
                          <div className="p-4 sm:p-5 pt-0 text-gray-700 text-xs sm:text-sm leading-relaxed border-t border-gray-100 bg-amber-50/20">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* ══ SECTION 11: MORE LEGAL GUIDES ══ */}
                <section id="more-legal-guides" className="scroll-mt-32 space-y-4 border-t border-gray-100 pt-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    More Legal Debt Relief Guides
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Explore our in-depth legal analyses and statutory manuals covering banking litigation, recovery harassment defense, and credit score rehabilitation:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    <Link
                      href="/how-to-settle-loans-after-a-failed-debt-consolidation-plan"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Failed Debt Consolidation Plan</div>
                        <p className="text-xs text-gray-500 mt-1">Legal steps to settle loans after a consolidation plan defaults.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Debt Crossing Repayment Capacity</div>
                        <p className="text-xs text-gray-500 mt-1">Statutory strategy when monthly EMIs exceed your net income.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/best-debt-settlement-company"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Best Debt Settlement Company</div>
                        <p className="text-xs text-gray-500 mt-1">Why advocate-led firms outperform unregulated debt agencies.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/how-to-remove-a-written-off-status-from-a-credit-report"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Remove Written-Off Status</div>
                        <p className="text-xs text-gray-500 mt-1">How to legally resolve post-settlement written-off remarks on CIBIL.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Stop Recovery Agent Harassment</div>
                        <p className="text-xs text-gray-500 mt-1">Enforce RBI guidelines and halt abusive collection visits.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/how-to-file-a-complaint-against-bank-nbfc-in-rbi"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">File RBI Banking Complaint</div>
                        <p className="text-xs text-gray-500 mt-1">Complete procedure for escalating lender violations to Ombudsman.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>
                  </div>
                </section>

                {/* ══ SECTION 12: REFERENCES & AUTHORITY ══ */}
                <section id="references-and-authority" className="scroll-mt-32 space-y-4 border-t border-gray-100 pt-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    References &amp; Statutory Regulatory Authorities
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    All legal analysis, statutory interpretations, and regulatory circulars referenced in this article are verified against official governmental and judicial records:
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc pl-5">
                    <li>
                      <strong>Reserve Bank of India (RBI):</strong> Master Directions on Compromise Settlements and Technical Write-offs —{" "}
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        rbi.org.in
                      </a>
                    </li>
                    <li>
                      <strong>Reserve Bank of India Integrated Ombudsman Scheme:</strong> Redressal of Unfair Debt Collection and Harassment Grievances —{" "}
                      <a
                        href="https://bankingombudsman.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        bankingombudsman.rbi.org.in
                      </a>
                    </li>
                    <li>
                      <strong>India Code Digital Legislative Repository:</strong> Negotiable Instruments Act, 1881 &amp; Payment and Settlement Systems Act, 2007 —{" "}
                      <a
                        href="https://www.indiacode.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <strong>Supreme Court of India:</strong> Landmark Judgments on Banking Recovery and Protection from Third-Party Harassment —{" "}
                      <a
                        href="https://main.sci.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <strong>National Legal Services Authority (NALSA):</strong> Lok Adalat Pre-Litigation Conciliation and Settlement Decrees —{" "}
                      <a
                        href="https://nalsa.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        nalsa.gov.in
                      </a>
                    </li>
                  </ul>
                </section>

                {/* Social Share Row at Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 pt-6 gap-4">
                  <div className="text-xs text-gray-500">
                    Found this legal analysis helpful? Share it with borrowers navigating debt stress.
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="px-3 py-1.5 rounded-lg bg-[#1877F2] text-white text-xs font-bold hover:opacity-90 transition cursor-pointer"
                    >
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-bold hover:opacity-90 transition cursor-pointer"
                    >
                      X / Twitter
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="px-3 py-1.5 rounded-lg bg-[#0A66C2] text-white text-xs font-bold hover:opacity-90 transition cursor-pointer"
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:opacity-90 transition cursor-pointer"
                    >
                      WhatsApp
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-800 text-xs font-bold hover:bg-gray-300 transition cursor-pointer"
                    >
                      {shareMsg || "Copy Link"}
                    </button>
                  </div>
                </div>

                {/* ══ AMA COMPANY & MEDIA SECTION ══ */}
                <section className="border-4 border-[#D2A02A] rounded-2xl p-6 sm:p-8 text-center space-y-6 bg-gradient-to-b from-[#FAF7F0] to-white shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <img
                      src="/ama3.svg"
                      alt="AMA Legal Solutions Logo"
                      className="w-16 h-16 object-contain"
                    />
                    <div className="text-center sm:text-left">
                      <div className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                        AMA Legal Solutions
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">
                        India&apos;s Premier Advocate-Led Banking Litigation &amp; Debt Resolution Practice
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-800">
                    <span className="text-[#D2A02A] text-lg">★★★★★</span>
                    <span>4.7 Google Rating Across Pan-India Legal Representations</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    AMA Legal Solutions provides comprehensive advocate representation across debt resolution, Section 138 NI Act defense, consumer dispute litigation, commercial arbitration, and corporate compliance.
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                      Our Solutions
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
                      <Link
                        href="/personal-loan-settlement"
                        className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-xl hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                      >
                        Personal Loan Settlement
                      </Link>
                      <Link
                        href="/credit-card-settlement"
                        className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-xl hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                      >
                        Credit Card Settlement
                      </Link>
                      <Link
                        href="/services/debt-consolidation"
                        className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-xl hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                      >
                        Debt Consolidation Advisory
                      </Link>
                      <Link
                        href="/contact"
                        className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-xl hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                      >
                        Confidential Consultation
                      </Link>
                    </div>
                  </div>
                </section>

              </div>
            </article>

            {/* ── RIGHT STICKY SIDEBAR ── */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-[#D2A02A]">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Advocate Anuj Anand Malik</h3>
                    <p className="text-[11px] text-gray-500">Founder &amp; Senior Litigation Counsel</p>
                    <a
                      href="https://www.linkedin.com/in/iamanujmalik/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#0A66C2] hover:underline font-semibold"
                    >
                      Connect on LinkedIn →
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Advocate Anuj Anand Malik specializes in banking litigation, debt settlement, RBI regulatory compliance, and courtroom defense against Section 138 NI Act and Section 25 PSS Act proceedings.
                </p>
                <Link
                  href="/author/anuj-anand-malik"
                  className="text-xs text-[#D2A02A] font-bold hover:underline inline-block"
                >
                  View Full Author Profile →
                </Link>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-xl border border-[#D2A02A]/40 space-y-4">
                <div className="inline-block bg-[#D2A02A]/20 border border-[#D2A02A]/50 text-[#f3cf7a] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Strategic Legal Protection
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">Need Expert Debt Evaluation?</h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                  Stuck between loan settlement and debt consolidation? Connect directly with our senior advocates for a confidential case analysis.
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

              {/* Client Reviews Card (Matching Schema Exactly) */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Client Reviews
                  </span>
                  <span className="bg-amber-100 text-[#5A4C33] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    5.0 Google Rating
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-[#D2A02A] text-base tracking-widest font-bold">
                    ★★★★★
                  </div>
                  <span className="text-gray-900 font-extrabold text-sm">5.0 / 5.0</span>
                </div>

                <blockquote className="text-gray-700 italic text-xs sm:text-sm leading-relaxed">
                  &ldquo;{clientReviewData.reviewBody}&rdquo;
                </blockquote>

                <div className="pt-3 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-xs sm:text-sm">
                    {clientReviewData.authorName}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {clientReviewData.authorRole}
                  </div>
                </div>
              </div>

              {/* Related Guides Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
                <h3 className="font-bold text-[#1a202c] text-sm uppercase tracking-wider">
                  Related Guides
                </h3>
                <div className="space-y-2.5 text-xs">
                  <Link
                    href="/how-to-settle-loans-after-a-failed-debt-consolidation-plan"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Failed Debt Consolidation Recovery Plan
                  </Link>
                  <Link
                    href="/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settle Loans When Debt Exceeds Capacity
                  </Link>
                  <Link
                    href="/best-debt-settlement-company"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Company in India
                  </Link>
                  <Link
                    href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement vs Loan Closure CIBIL Impact
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Stop Recovery Agent Harassment Legally
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-notice-for-personal-loan"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Section 138 Cheque Bounce Legal Defense
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
                          <option value="Multiple Lenders (Evaluating Consolidation)">Multiple Lenders (Evaluating Consolidation)</option>
                          <option value="Defaulted Loans with Recovery Harassment">Defaulted Loans with Recovery Harassment</option>
                          <option value="Cheque Bounce / S. 138 or S. 25 Notice">Cheque Bounce / S. 138 or S. 25 Notice</option>
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
                        placeholder="Briefly describe your debt scenario, number of lenders, or whether consolidation or settlement is preferred..."
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

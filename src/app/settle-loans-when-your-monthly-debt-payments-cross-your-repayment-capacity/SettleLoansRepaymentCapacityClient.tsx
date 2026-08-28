"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG =
  "/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-08-25";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question:
      "Can I legally settle my loans if my monthly EMIs exceed my total income in India?",
    answer:
      "Yes, borrowers whose aggregate monthly debt obligations surpass their net verifiable income can legally seek a One-Time Settlement (OTS) under the Reserve Bank of India's Prudential Framework for Resolution of Stressed Assets and Master Directions on Compromise Settlements. When debt-to-income ratios cross sustainable thresholds due to involuntary financial hardships such as job loss, business insolvency, or acute medical crises, commercial banks and NBFCs are legally empowered to accept negotiated lump-sum compromise payouts and waive accumulated penal charges and unsecured principal balances.",
  },
  {
    id: "faq-2",
    question:
      "What is the maximum debt waiver percentage I can negotiate when my debt crosses my repayment capacity?",
    answer:
      "Under institutional RBI compromise settlement guidelines, banking litigation advocates routinely negotiate waivers ranging between 40% and 75% of the total outstanding debt on unsecured personal loans and credit cards. The legal settlement process mandates a 100% complete waiver of unapplied penal interest, compounding late fees, and overdue finance charges, followed by substantial haircuts on the remaining principal sum based on forensic financial hardship proof.",
  },
  {
    id: "faq-3",
    question:
      "How do I stop recovery agent harassment when I can no longer service my monthly loan payments?",
    answer:
      "Borrowers can immediately halt third-party recovery agent harassment by retaining an advocate to serve formal statutory cease-and-desist notices under the Advocates Act, 1961 and the RBI Master Directions on Fair Practices Code. Upon receipt of formal legal representation, lending institutions and their collection agencies are statutorily prohibited from contacting third-party references, visiting residential or workplace premises unannounced, or making calls outside approved hours of 8:00 AM to 7:00 PM.",
  },
  {
    id: "faq-4",
    question:
      "Can a bank file a criminal case or arrest me if I default on personal loans or credit cards?",
    answer:
      "Simple financial default on an unsecured personal loan or credit card is strictly a civil dispute arising from a breach of contract under the Indian Contract Act, 1872, and does not constitute a cognizable criminal offense punishable by police arrest. However, lenders frequently initiate quasi-criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881 for dishonored cheques or Section 25 of the Payment and Settlement Systems Act, 2007 for bounced NACH auto-debits, both of which are defendable by legal counsel and resolvable via Lok Adalat compromise settlements.",
  },
  {
    id: "faq-5",
    question:
      "What is the statutory difference between insolvency, debt restructuring, and loan settlement?",
    answer:
      "Insolvency under the Insolvency and Bankruptcy Code (IBC), 2016 involves formal court proceedings before the Debt Recovery Tribunal (DRT) for individual bankruptcy, leading to public asset liquidation. Debt restructuring modifies the original loan tenor and interest rates to reduce monthly EMIs without forgiving principal, whereas a One-Time Settlement (OTS) legally extinguishes the entire debt permanently through a discounted lump-sum compromise with an official No Dues Certificate (NDC).",
  },
  {
    id: "faq-6",
    question:
      "How does settling loans affect my CIBIL score, and can my credit profile be rebuilt?",
    answer:
      "Executing a loan settlement causes credit bureaus such as TransUnion CIBIL, Experian, and Equifax to reflect the account as 'Settled' rather than 'Closed', resulting in an immediate credit score adjustment of 60 to 120 points. However, settling overdue loans immediately arrests ongoing monthly Days Past Due (DPD) compounding and stops compounding legal damages, enabling borrowers to rehabilitate their CIBIL score back above 750 within 18 to 24 months through disciplined secured credit facilities.",
  },
  {
    id: "faq-7",
    question:
      "Why is a bank-issued No Dues Certificate (NDC) essential after completing a loan settlement?",
    answer:
      "A formal No Dues Certificate (NDC) or No Objection Certificate (NOC) issued on official bank letterhead serves as conclusive legal evidence that the debtor's liability is permanently discharged and extinguished. Without an authentic NDC, lenders or third-party Asset Reconstruction Companies (ARCs) may unlawfully claim residual balances or continue reporting adverse active default entries to credit information companies.",
  },
  {
    id: "faq-8",
    question:
      "What documents are required to prove insufficient repayment capacity during OTS negotiations?",
    answer:
      "To substantiate a genuine lack of repayment capacity, a borrower must provide verifiable legal and financial documentation, including bank account statements from the last 6 to 12 months, salary slips showing salary reduction or termination letters, medical treatment records and hospital bills, audited financial statements for failed businesses, and an exhaustive statement of total liabilities and household living expenses.",
  },
];

/* ────────────────────────── REVIEW DATA ────────────────────────── */
const clientReviews = [
  {
    name: "Vikramaditya Sengupta",
    role: "Senior Operations Manager, Pune • Settled ₹28.5 Lakhs in Overdue Debt",
    text: "When my monthly EMIs crossed ₹1.65 Lakhs against a reduced monthly take-home income of ₹85,000 following a corporate restructuring, I was drowning in extreme mental trauma and aggressive recovery agent threats across four private banks. Advocate Anuj Anand Malik and the AMA Legal Solutions team stepped in immediately, issued statutory cease-and-desist notices to stop recovery calls, and filed an authoritative OTS hardship petition under RBI compromise guidelines. Within five months, they successfully negotiated a 62% overall waiver across all personal loans and credit cards, defended my Section 25 NACH notices, and secured authentic bank No Dues Certificates. Their legal expertise saved my family from financial ruin.",
    rating: 5,
    datePublished: "2026-07-19",
  },
  {
    name: "Meenakshi Sundaram",
    role: "Commercial Director, Chennai • Settled ₹42 Lakhs in Unsecured Business Credit",
    text: "Due to severe supply chain disruptions, my aggregate debt payments grew to more than twice my monthly cash flow. Private bank recovery agents were constantly harassing my staff and family. AMA Legal Solutions took over legal representation under the Advocates Act, halted all unlawful collection visits, and represented me before the Lok Adalat. Advocate Anuj Anand Malik negotiated a full 68% waiver on total outstanding balances and delivered genuine No Dues Certificates within 120 days. Outstanding legal protection and transparency.",
    rating: 5,
    datePublished: "2026-06-11",
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
      name: "Settle Loans When Monthly Debt Payments Cross Repayment Capacity | AMA Legal Solutions",
      description:
        "Comprehensive legal roadmap to settle personal loans and credit cards when monthly EMI payments exceed repayment capacity under RBI compromise settlement frameworks.",
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
        "Settle Loans When Monthly Debt Payments Cross Repayment Capacity: Complete Legal & RBI Framework",
      description:
        "Step-by-step legal guide for borrowers whose debt obligations exceed income. Learn RBI compromise settlement guidelines, statutory anti-harassment shields, Section 138/25 defenses, and advocate negotiation strategies for 40%–75% waivers.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${PAGE_URL}#webpage` },
      image: [OG_IMAGE_URL],
      datePublished: "2026-08-25T09:00:00+05:30",
      dateModified: "2026-08-25T11:45:00+05:30",
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
      "@id": `${PAGE_URL}#product`,
      name: "Overburdened Loan Settlement & Debt Resolution Legal Services",
      image: OG_IMAGE_URL,
      description:
        "Advocate-led legal representation to settle unsecured personal loans and credit cards when monthly EMIs exceed repayment capacity. Halt recovery harassment, negotiate 40%–75% OTS waivers under RBI compromise guidelines, and secure official No Dues Certificates.",
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1480",
      },
      review: clientReviews.map((r) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: r.name,
        },
        reviewBody: r.text,
        datePublished: r.datePublished,
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Debt Settlement",
          item: `${SITE}/loan-settlement`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Settle Loans When Debt Crosses Repayment Capacity",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Legal Protocol to Settle Loans When Debt Exceeds Repayment Capacity",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Conduct a Forensic Debt-to-Income (DTI) Ledger Audit",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Serve Statutory Cease-and-Desist Anti-Harassment Notices",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "File a Formal OTS Legal Hardship Petition under RBI Directives",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Execute High-Level Banking Negotiations for 40%–75% Waivers",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Enforce Bank Sanction Letter Verification & No Dues Certificate Issuance",
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
  { id: "cashflow-crisis", title: "The DTI Breaking Point" },
  { id: "why-advocate-settlement", title: "Why Advocate Representation" },
  { id: "rbi-compromise-framework", title: "RBI Compromise Framework" },
  { id: "anti-harassment-rights", title: "Anti-Harassment Rights" },
  { id: "step-by-step-process", title: "5-Step Legal Protocol" },
  { id: "infographic", title: "Settlement Infographic" },
  { id: "waiver-matrix", title: "Bank Waiver Benchmarks" },
  { id: "criminal-defense", title: "Section 138/25 Defense" },
  { id: "cibil-recovery", title: "CIBIL Recovery Roadmap" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "citations", title: "Statutory References" },
  { id: "ama-solutions", title: "AMA Legal Solutions" },
  { id: "client-reviews", title: "Verified Client Reviews" },
  { id: "internal-guides", title: "Related Debt Guides" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function SettleLoansRepaymentCapacityClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("quick-answer");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    totalDebt: "",
    monthlyIncome: "",
    bankName: "",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Settle Loans When Monthly Debt Payments Cross Repayment Capacity – Legal Guide by AMA Legal Solutions";
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

  // Scrollspy for compact TOC
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    {
      label: "Settle Loans When Your Monthly Debt Payments Cross Your Repayment Capacity",
      href: PAGE_SLUG,
    },
  ];

  return (
    <>
      <Script
        id="settle-loans-repayment-capacity-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pt-20 md:pt-28">
        <div className="container mx-auto px-4 max-w-[1600px]">
          <Breadcrumbs items={breadcrumbItems} />

          {/* ══ HERO: Asymmetric 12-col (Exact Match with /how-to-remove-a-written-off-status-from-a-credit-report) ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
            {/* Left col — title + meta */}
            <div className="flex flex-col lg:col-span-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Settle Loans When <span className="text-[#D2A02A]">Debt Payments</span> Cross Repayment Capacity
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                When aggregate Equated Monthly Installments (EMIs) mathematically eclipse your
                verifiable monthly income, default is not a crime—it is an economic reality.
                Discover the exact legal strategy—grounded in RBI compromise settlement directives,
                the Advocates Act, and statutory anti-harassment frameworks—to defend your rights and
                settle your loans for 40% to 75% less.
              </p>

              {/* Author & meta bar */}
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
                    <p className="text-xs text-gray-500">Reviewed by AMA Legal Solutions</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> 25-08-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 15 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right col — OG image card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
                <img
                  src="/images/og/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity.png"
                  alt="Settle Loans When Monthly Debt Payments Cross Repayment Capacity – AMA Legal Solutions"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ══ CONTENT AREA (3-COLUMN LAYOUT) ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* ── LEFT SIDEBAR: ONLY COMPACT TABLE OF CONTENTS (NO SCROLL REQUIRED) ── */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-xs font-extrabold text-[#5A4C33] uppercase tracking-wider mb-3 pb-2 border-b border-gray-100 flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📑</span> Contents
                </p>
                <nav className="flex flex-col space-y-0.5">
                  {tocSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`text-left px-2.5 py-1 text-[12px] leading-tight font-medium rounded-md transition-all duration-150 border-l-2 ${
                        activeSection === s.id
                          ? "bg-amber-50/80 border-[#D2A02A] text-[#D2A02A] font-bold"
                          : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* ── MIDDLE CONTAINER: MAIN EDITORIAL & SECTIONS ── */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-2">
                    Table of Contents
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {tocSections.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className="text-left px-2 py-1 text-xs text-gray-700 hover:text-[#D2A02A]"
                      >
                        • {s.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Meta + share bar */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center border-b border-gray-100 pb-6 mb-6 gap-4">
                  <div className="text-xs md:text-sm text-gray-500 font-medium">
                    Written by{" "}
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-[#D2A02A] hover:underline font-semibold"
                    >
                      Advocate Anuj Anand Malik
                    </Link>{" "}
                    &bull; Reviewed by{" "}
                    <span className="font-semibold text-gray-700">
                      Team AMA Legal Solutions
                    </span>{" "}
                    &bull; Last updated: 25-08-2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs md:text-sm font-bold text-gray-700">Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-blue-700 transition shadow-sm"
                      title="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-sm"
                      title="Share on X"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-blue-800 transition shadow-sm"
                      title="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition shadow-sm text-xs font-bold"
                      title="Copy link"
                    >
                      {shareMsg ? "✓" : "🔗"}
                    </button>
                  </div>
                </div>

                {/* ── QUICK ANSWER ── */}
                <section id="quick-answer" className="scroll-mt-28">
                  <div className="border-l-4 border-[#D2A02A] bg-[#5A4C33]/5 rounded-r-xl p-5 md:p-7">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D2A02A] mb-2">
                      Quick Answer
                    </span>
                    <p className="text-base md:text-lg font-medium text-gray-900 leading-relaxed mb-3">
                      When monthly EMIs exceed your repayment capacity in India, borrowers have the statutory right under RBI compromise settlement directives to negotiate a One-Time Settlement (OTS) with banks and NBFCs.
                    </p>
                    <div className="space-y-2 text-xs md:text-sm text-gray-700 pt-2 border-t border-gray-200/60">
                      <p className="font-semibold text-gray-800">Key Advocate-Led Settlement Steps:</p>
                      <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                        <li><strong>Hardship Petitions:</strong> File formal DTI audit petitions to establish involuntary financial distress.</li>
                        <li><strong>Anti-Harassment Shield:</strong> Serve legal cease-and-desist notices to stop recovery agent harassment.</li>
                        <li><strong>Legal Defense:</strong> Defend Section 138 (cheque bounce) and Section 25 (e-NACH) proceedings.</li>
                        <li><strong>Debt Waivers:</strong> Secure <strong>40% to 75% waivers</strong> on outstanding dues with authentic bank No Dues Certificates (NDCs).</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 1: THE DTI BREAKING POINT ── */}
                <section id="cashflow-crisis" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    The Mathematical Breaking Point: Debt-to-Income (DTI) Insolvency
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                    In modern retail banking, commercial lenders determine a borrower&apos;s credit
                    eligibility using the Fixed Obligation to Income Ratio (FOIR) or Debt-to-Income
                    (DTI) ratio. Under conservative banking standards, a borrower&apos;s aggregate monthly
                    EMIs should not exceed 40% to 50% of net monthly income. However, with the
                    aggressive disbursement of unsecured personal loans, instant mobile lending apps,
                    credit card revolving credit, and Buy Now Pay Later (BNPL) facilities, millions of
                    salaried professionals and MSME business owners find their total monthly debt
                    obligations escalating to 80%, 100%, or even 150% of their actual monthly earnings.
                  </p>
                  <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-3 italic text-gray-600 bg-[#fffaf0] px-5 rounded-r-lg my-5">
                    &ldquo;Under Indian jurisprudence, an involuntary failure to repay unsecured debt
                    due to verifiable financial incapacity constitutes a civil breach of contract
                    governed by the Indian Contract Act, 1872—not a criminal conspiracy. Engaging
                    legal advocates ensures that lenders respect statutory hardship defenses rather
                    than weaponizing recovery machinery.&rdquo;
                  </blockquote>
                  <p className="text-base leading-relaxed text-gray-700 mb-4">
                    When external economic disruptions strike—such as corporate layoffs, severe salary
                    cuts, loss of business revenue, or unforeseen critical medical treatments—servicing
                    these compounding payments becomes mathematically impossible. Continuing to borrow
                    from secondary loan apps or rolling over credit card minimum dues to pay existing
                    EMIs creates a predatory debt spiral that leads directly to default.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mt-6">
                    {[
                      { stat: "> 50% DTI", desc: "Critical Debt-to-Income threshold of financial stress" },
                      { stat: "40%–75%", desc: "Average negotiated One-Time Settlement waiver range" },
                      { stat: "₹0 Cost", desc: "RBI Integrated Ombudsman complaint filing fee" },
                    ].map((s) => (
                      <div
                        key={s.stat}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center"
                      >
                        <div className="text-2xl font-extrabold text-[#D2A02A] mb-1">
                          {s.stat}
                        </div>
                        <div className="text-xs text-gray-600">{s.desc}</div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 2: WHY ADVOCATE REPRESENTATION ── */}
                <section id="why-advocate-settlement" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    Why Advocate Representation Matters for Overburdened Borrowers
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700 mb-6">
                    When borrowers attempt to negotiate directly with branch managers or recovery agents
                    while in financial distress, their lack of institutional leverage often results in
                    unfavorable terms, verbal promises that are never honored in writing, or coercive
                    harassment. Retaining an advocate-led law firm transforms the dynamic:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm border-collapse">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4 text-left font-semibold">Evaluation Parameter</th>
                          <th className="p-4 text-left font-semibold text-[#D2A02A]">
                            Advocate-Led Law Firm (AMA Legal)
                          </th>
                          <th className="p-4 text-left font-semibold">Unregulated Settlement Agency</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          [
                            "Statutory Legal Standing",
                            "Enrolled under Advocates Act, 1961; Authorized Court Representation",
                            "Private commercial entity; zero legal standing in Court",
                          ],
                          [
                            "Anti-Harassment Power",
                            "Statutory Cease-and-Desist Notices backed by RBI Ombudsman Complaints",
                            "Informal phone requests routinely ignored by recovery agents",
                          ],
                          [
                            "Judicial Summons Defense",
                            "Vakalatnama filing & defense in Section 138 / Section 25 cases",
                            "Cannot draft legal replies or represent clients in Court / Lok Adalat",
                          ],
                          [
                            "Settlement Authentication",
                            "Forensic audit of bank compromise letters & NDC enforcement",
                            "High risk of fake settlement letters or unapproved discounts",
                          ],
                          [
                            "Advocate-Client Privilege",
                            "100% Confidentiality protected under Indian Evidence Act",
                            "No legal privilege; client financial data frequently shared",
                          ],
                        ].map(([param, advocate, agency]) => (
                          <tr key={param} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 font-medium text-gray-900">{param}</td>
                            <td className="p-4 text-emerald-700 font-semibold">{advocate}</td>
                            <td className="p-4 text-red-700 font-medium">{agency}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 3: RBI STATUTORY FRAMEWORK ── */}
                <section id="rbi-compromise-framework" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    The RBI Statutory Framework for Compromise Settlements
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title:
                          "RBI Master Direction on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24)",
                        body: "Empowers regulated entities to undertake compromise settlements for non-performing accounts, explicitly permitting principal haircuts where recovery prospects are impaired by verified borrower hardship.",
                        link: "https://www.rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=12513",
                      },
                      {
                        title:
                          "RBI Prudential Framework for Resolution of Stressed Assets (2019)",
                        body: "Provides commercial lenders with a formalized framework to resolve non-performing assets (NPAs) through restructuring, one-time settlements, or compromise agreements to prevent protracted litigation.",
                        link: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11580&Mode=0",
                      },
                      {
                        title: "RBI Integrated Ombudsman Scheme, 2021 — Para 8(1)(e)",
                        body: "Provides a cost-free, statutory grievance escalation forum against banks for unfair debt recovery practices, illegal harassment, or failure to update credit records post-settlement, with powers to award compensation up to ₹20 Lakhs.",
                        link: "https://bankingombudsman.rbi.org.in",
                      },
                      {
                        title: "Consumer Protection Act, 2019 — Section 2(47) & Section 35",
                        body: "Protects consumer borrowers against unfair trade practices and deficiency in banking services, enabling claims for damages before the District Consumer Disputes Redressal Commission.",
                        link: "https://ncdrc.nic.in",
                      },
                    ].map((law) => (
                      <div
                        key={law.title}
                        className="bg-gray-50 border border-gray-200 rounded-xl p-5"
                      >
                        <h3 className="font-bold text-gray-900 mb-2 text-sm">
                          <a
                            href={law.link}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                          >
                            {law.title} ↗
                          </a>
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{law.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 4: ANTI-HARASSMENT RIGHTS ── */}
                <section id="anti-harassment-rights" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    Borrower Legal Rights &amp; Halting Recovery Agent Harassment
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Restricted Calling Hours (8 AM to 7 PM)",
                        desc: "Under the RBI Fair Practices Code, recovery personnel are strictly barred from contacting borrowers before 8:00 AM or after 7:00 PM.",
                      },
                      {
                        title: "Third-Party Privacy & Defamation Shield",
                        desc: "Lenders cannot disclose your financial distress to employers, neighbors, or relatives. Doing so violates DPDP Act, 2023 and Section 499 IPC/BNS.",
                      },
                      {
                        title: "Mandatory Identification & Notice",
                        desc: "Every collection agent must carry an official Bank Authorization Letter and a verified ID card. Visiting without prior written notice is a regulatory breach.",
                      },
                      {
                        title: "Police Complaint & Injunction Protection",
                        desc: "Threats of violence, abusive language, or persistent intimidation justify filing an immediate police complaint and seeking civil court injunctions.",
                      },
                    ].map((card) => (
                      <div
                        key={card.title}
                        className="bg-[#FAF7F0] border border-[#D2A02A]/30 rounded-xl p-4"
                      >
                        <h3 className="font-bold text-[#5A4C33] text-sm mb-2">
                          ✓ {card.title}
                        </h3>
                        <p className="text-xs text-gray-700 leading-relaxed">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 5: 5-STEP PROTOCOL ── */}
                <section id="step-by-step-process" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-2">
                    The 5-Step Legal Protocol to Settle Overburdened Loans
                  </h2>
                  <p className="text-base text-gray-600 mb-7">
                    Follow this sequence precisely to protect your legal rights and maximize your
                    negotiated debt reduction:
                  </p>
                  <div className="space-y-6">
                    {[
                      {
                        id: "step-1",
                        title: "Forensic Debt-to-Income (DTI) Ledger Audit",
                        body: "Our banking litigation team conducts an in-depth audit of all loan sanction letters, monthly statements, and interest rate escalations. We segregate genuine principal debt from inflated penal interest, processing fees, bounce charges, and GST surcharges, establishing an unassailable baseline for compromise.",
                        bullets: [
                          "Review all 6–12 month bank statements.",
                          "Calculate actual DTI deficit and household living costs.",
                          "Isolate unlawful compounding penalties and illegal collection charges.",
                        ],
                      },
                      {
                        id: "step-2",
                        title: "Statutory Cease-and-Desist Anti-Harassment Notices",
                        body: "We immediately draft and serve formal legal representation notices under the Advocates Act, 1961 and the RBI Fair Practices Code on all lending banks, NBFCs, and collection agencies. This places the lenders on legal notice to direct all future communication exclusively to our law firm.",
                        bullets: [
                          "Halts abusive phone calls and workplace intrusions immediately.",
                          "Shields family members and third-party references from harassment.",
                          "Enforces communication exclusively via registered email and post.",
                        ],
                      },
                      {
                        id: "step-3",
                        title: "Filing the Formal OTS Legal Hardship Petition",
                        body: "We draft an authoritative One-Time Settlement (OTS) petition addressed to the bank's Zonal Stressed Asset Committee. Supported by documentary proof of income loss, medical records, or business closure, the petition demonstrates genuine inability to service ongoing EMIs while proposing a realistic settlement sum.",
                        bullets: [
                          "Establishes involuntary hardship under RBI compromise directives.",
                          "Demands 100% waiver of penal interest and late fees.",
                          "Proposes structured lump-sum or installment payment terms.",
                        ],
                      },
                      {
                        id: "step-4",
                        title: "Direct Institutional Negotiations for 40%–75% Waivers",
                        body: "Our senior advocates interface directly with regional collection heads, NPA recovery managers, and credit settlement committees. We negotiate aggressively to waive 100% of penal charges and secure maximum principal write-offs, coordinating structured single or multi-installment payment terms.",
                        bullets: [
                          "Negotiates 40% to 75% haircuts based on NPA default vintage.",
                          "Represents the borrower in National Lok Adalat conciliation sessions.",
                          "Prevents premature civil recovery suits or DRT proceedings.",
                        ],
                      },
                      {
                        id: "step-5",
                        title: "Bank Sanction Letter Verification & No Dues Certificate Enforcement",
                        body: "Before any settlement funds are deposited, our legal team conducts strict due diligence on the official bank settlement sanction letter to eliminate fraud. Upon final payment, we enforce prompt issuance of the No Dues Certificate (NDC) and credit bureau status updates.",
                        bullets: [
                          "Verifies official bank letterhead, settlement account, and terms.",
                          "Secures authentic bank No Dues Certificate (NDC) / NOC within 30 days.",
                          "Initiates post-settlement CIBIL report monitoring and rehabilitation.",
                        ],
                      },
                    ].map((step, i) => (
                      <div
                        key={step.id}
                        id={step.id}
                        className="scroll-mt-28 flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2A02A] text-white font-bold flex items-center justify-center text-lg">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#1a202c] text-base mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-700 leading-relaxed mb-3">
                            {step.body}
                          </p>
                          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            {step.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 6: INFOGRAPHIC ── */}
                <section id="infographic" className="scroll-mt-28">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D2A02A]/20">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#D2A02A] text-white font-bold text-base shadow-sm">
                        📊
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                          Key Insights &amp; Legal Settlement Infographic
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          Visual summary of the 5-step statutory OTS protocol &amp; debt reduction roadmap
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20 shadow-sm flex justify-center items-center p-2 sm:p-4">
                      <img
                        src="/images/og/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity.png"
                        alt="Settle Loans When Monthly Debt Payments Cross Repayment Capacity – Step-by-Step Legal Process Infographic by AMA Legal Solutions"
                        className="w-full h-auto max-h-[900px] object-contain rounded-lg hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                      Prepared by AMA Legal Solutions Research &amp; Compliance Team &bull; Statutory
                      Debt Settlement Overview
                    </p>
                  </div>
                </section>

                {/* ── SECTION 7: BANK WAIVER MATRIX ── */}
                <section id="waiver-matrix" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    Bank-Wise Settlement Waiver &amp; Haircut Benchmarks
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700 mb-6">
                    Different banking institutions in India maintain varying settlement appetites
                    depending on their quarterly NPA provisioning deadlines and whether the debt is an
                    unsecured personal loan or a high-interest credit card:
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        bank: "HDFC Bank",
                        waiver: "45% – 70% Waiver",
                        type: "Personal Loans & Jumbo Credit Cards",
                        detail: "Requires comprehensive hardship proof; standard OTS processed in 30–45 days.",
                        link: "/settlement-waiver-percentage-of-hdfc-bank",
                      },
                      {
                        bank: "ICICI Bank",
                        waiver: "40% – 65% Waiver",
                        type: "Unsecured PL & Credit Cards",
                        detail: "High willingness for Lok Adalat settlements post 90-day NPA classification.",
                        link: "/settlement-waiver-percentage-of-icici-bank",
                      },
                      {
                        bank: "Axis Bank",
                        waiver: "45% – 70% Waiver",
                        type: "Personal Loans & Lines of Credit",
                        detail: "Strong institutional preference for formal advocate-represented OTS petitions.",
                        link: "/settlement-waiver-percentage-of-axis-bank",
                      },
                      {
                        bank: "State Bank of India",
                        waiver: "35% – 60% Waiver",
                        type: "Express Credit & Personal Loans",
                        detail: "Strict adherence to official SBI OTS circulars; structured installment plans available.",
                        link: "/settlement-waiver-percentage-of-sbi-bank-loans",
                      },
                      {
                        bank: "Bajaj Finance",
                        waiver: "50% – 75% Waiver",
                        type: "Consumer Durable & Personal Loans",
                        detail: "Immediate cessation of aggressive recovery calls upon formal legal notice service.",
                        link: "/settlement-waiver-percentage-of-bajaj-fin",
                      },
                      {
                        bank: "RBL Bank & Yes Bank",
                        waiver: "50% – 75% Waiver",
                        type: "Credit Cards & Digital Loans",
                        detail: "Fast settlement approvals for severely delinquent portfolios carrying high write-off provisions.",
                        link: "/settlement-waiver-percentage-of-rbl-bank-loans",
                      },
                    ].map((card) => (
                      <div
                        key={card.bank}
                        className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-[#D2A02A] transition-colors"
                      >
                        <div className="text-xs font-bold uppercase tracking-wider text-[#5A4C33] mb-1">
                          {card.bank}
                        </div>
                        <div className="text-lg font-extrabold text-[#D2A02A] mb-1">
                          {card.waiver}
                        </div>
                        <div className="text-xs font-semibold text-gray-800 mb-2">{card.type}</div>
                        <p className="text-xs text-gray-600 mb-3 leading-relaxed">{card.detail}</p>
                        <Link
                          href={card.link}
                          className="text-xs font-bold text-[#D2A02A] hover:text-[#5A4C33] inline-flex items-center gap-1"
                        >
                          View Full Bank Guide →
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 8: SECTION 138 & 25 DEFENSE ── */}
                <section id="criminal-defense" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    Defending Section 138 NI Act &amp; Section 25 PSS Act Proceedings
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700 mb-5">
                    When monthly payments fail, lenders routinely deposit security cheques or trigger automated NACH
                    mandates, leading to dishonor. Subsequently, bank legal teams issue statutory demand notices under
                    Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007.
                  </p>
                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-4 bg-[#fffaf0] rounded-r-xl mb-5 italic text-gray-700">
                    &ldquo;Ignoring a judicial summons issued by a Magistrate Court can lead to Bailable or Non-Bailable
                    Warrants. However, these proceedings are quasi-criminal compoundable offenses that can be fully settled,
                    withdrawn, and dismissed upon execution of a compromise settlement before the Court or National Lok Adalat.&rdquo;
                    <br />
                    <span className="text-xs text-gray-500 not-italic mt-2 block">
                      — Advocate Anuj Anand Malik, AMA Legal Solutions
                    </span>
                  </blockquote>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/send-legal-notice"
                      className="flex-1 text-center bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-4 px-6 rounded-xl transition-all"
                    >
                      Reply to Bank Legal Notice →
                    </Link>
                    <Link
                      href="/bank-complaint-in-rbi"
                      className="flex-1 text-center border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white font-bold py-4 px-6 rounded-xl transition-all"
                    >
                      File RBI Complaint →
                    </Link>
                  </div>
                </section>

                {/* ── SECTION 9: CIBIL RECOVERY ── */}
                <section id="cibil-recovery" className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-5">
                    Credit Score Recovery Timeline After Loan Settlement
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        period: "0–3 Months",
                        action: "Settlement executed; bank reports status as 'Settled' with ₹0 balance within 30–45 days.",
                        color: "bg-amber-50 border-amber-200",
                      },
                      {
                        period: "3–6 Months",
                        action: "Obtain a secured credit card backed by FD; maintain utilization strictly under 30%.",
                        color: "bg-blue-50 border-blue-200",
                      },
                      {
                        period: "6–12 Months",
                        action: "Clean repayment history moves score into 650–700 range; NBFCs may approve consumer credit.",
                        color: "bg-purple-50 border-purple-200",
                      },
                      {
                        period: "12–24 Months",
                        action: "Score targets 750+; mainstream banks restore eligibility for secured auto and home loans.",
                        color: "bg-emerald-50 border-emerald-200",
                      },
                    ].map((t) => (
                      <div
                        key={t.period}
                        className={`flex gap-4 p-4 rounded-xl border ${t.color}`}
                      >
                        <span className="font-bold text-gray-900 text-sm w-28 flex-shrink-0">
                          {t.period}
                        </span>
                        <span className="text-sm text-gray-700">{t.action}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 10: FAQS ── */}
                <section id="faqs" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="flex justify-between items-center w-full text-left p-4 font-medium text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
                          aria-expanded={expandedFaqs.includes(faq.id)}
                        >
                          <span className="flex items-center">
                            <span className="text-[#D2A02A] mr-3 font-bold">Q.</span>
                            {faq.question}
                          </span>
                          <span
                            className={`transform transition-transform duration-200 ${
                              expandedFaqs.includes(faq.id) ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="w-5 h-5 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </button>
                        {expandedFaqs.includes(faq.id) && (
                          <div className="px-4 pb-4 pt-0 text-gray-700 leading-relaxed pl-10 text-sm">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 11: CITATIONS ── */}
                <section id="citations" className="scroll-mt-28 border-t border-gray-200 pt-8 mt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-4">
                    References &amp; Authority
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {[
                      {
                        label:
                          "Reserve Bank of India — Master Directions on Compromise Settlements and Technical Write-offs",
                        href: "https://www.rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=12513",
                      },
                      {
                        label:
                          "Reserve Bank of India — Prudential Framework for Resolution of Stressed Assets (2019)",
                        href: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11580&Mode=0",
                      },
                      {
                        label:
                          "Reserve Bank of India — Integrated Ombudsman Scheme, 2021",
                        href: "https://bankingombudsman.rbi.org.in",
                      },
                      {
                        label: "RBI Complaint Management System (CMS)",
                        href: "https://cms.rbi.org.in",
                      },
                      {
                        label: "Credit Information Companies (Regulation) Act, 2005",
                        href: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=5671&Mode=0",
                      },
                      {
                        label: "National Consumer Disputes Redressal Commission",
                        href: "https://ncdrc.nic.in",
                      },
                    ].map((cite) => (
                      <li key={cite.href}>
                        <a
                          href={cite.href}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                        >
                          {cite.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* ── SHARE BOTTOM ── */}
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Share this article:</span>
                    <div className="flex space-x-4">
                      {["facebook", "twitter", "linkedin"].map((p) => (
                        <button
                          key={p}
                          onClick={() => handleShare(p)}
                          className="text-gray-500 hover:text-[#D2A02A] transition-colors capitalize text-sm font-semibold"
                        >
                          {p.charAt(0).toUpperCase() + p.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── AMA COMPANY SECTION ── */}
                <section
                  id="ama-solutions"
                  className="scroll-mt-28 border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 bg-white text-center shadow-lg relative mt-12 mb-8"
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
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Experience</strong> in
                    providing strategic legal defense and debt resolution across India.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/loan-settlement"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Loan Settlement Services
                    </Link>
                    <Link
                      href="/send-legal-notice"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Legal Notice Services
                    </Link>
                    <Link
                      href="/how-to-fix-credit-score"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      CIBIL Dispute &amp; Repair
                    </Link>
                    <Link
                      href="/bank-complaint-in-rbi"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      RBI Ombudsman Filing
                    </Link>
                  </div>
                </section>

                {/* ── CLIENT REVIEWS SNIPPETS (UNDER AMA LEGAL SOLUTIONS SECTION IN MIDDLE CONTAINER) ── */}
                <section
                  id="client-reviews"
                  className="scroll-mt-28 bg-[#FAF7F0] border border-[#D2A02A]/30 rounded-2xl p-6 md:p-8 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-4 border-b border-[#D2A02A]/20 gap-3">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-[#1a202c]">
                        Verified Client Reviews
                      </h2>
                      <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                        Real experiences from borrowers who resolved overburdened debt with AMA Legal Solutions
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                      <Stars count={5} />
                      <span className="font-extrabold text-gray-900 text-sm">4.9 / 5.0</span>
                      <span className="text-xs text-gray-500">(1,480+ Reviews)</span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {clientReviews.map((r) => (
                      <div
                        key={r.name}
                        className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative flex flex-col justify-between"
                      >
                        <div className="text-4xl text-[#D2A02A] opacity-20 absolute top-3 left-3 font-serif leading-none">
                          &ldquo;
                        </div>
                        <div className="relative z-10 space-y-3">
                          <div className="flex items-center justify-between">
                            <Stars count={r.rating} />
                            <span className="text-[11px] text-gray-400 font-medium">Verified Client</span>
                          </div>
                          <p className="text-gray-700 italic text-xs md:text-sm leading-relaxed">
                            &ldquo;{r.text}&rdquo;
                          </p>
                        </div>
                        <div className="flex items-center pt-4 mt-3 border-t border-gray-100">
                          <div className="w-9 h-9 bg-[#5A4C33] text-[#D2A02A] rounded-full flex items-center justify-center font-bold mr-3 text-xs shrink-0">
                            {r.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-xs md:text-sm">{r.name}</p>
                            <p className="text-[11px] text-gray-500">{r.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-6">
                    <Link
                      href="/ama-legal-solutions-reviews"
                      className="inline-flex items-center gap-1.5 text-xs md:text-sm text-[#D2A02A] font-bold hover:underline"
                    >
                      Read All 1,480+ Client Reviews on Google &amp; Legal Portals →
                    </Link>
                  </div>
                </section>

                {/* ── RELATED DEBT GUIDES / MORE LEGAL GUIDES (UNDER REVIEW SNIPPETS IN MIDDLE CONTAINER) ── */}
                <section id="internal-guides" className="scroll-mt-28 border-t border-gray-200 pt-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-6">
                    Related Debt Relief &amp; Legal Settlement Guides
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Best Debt Settlement Company in India",
                        href: "/best-debt-settlement-company",
                        desc: "Evaluate advocate-led debt settlement practices and RBI OTS frameworks in India.",
                      },
                      {
                        title: "Personal Loan Debt Settlement",
                        href: "/personal-loan-debt-settlement",
                        desc: "Comprehensive guide to settling unsecured personal loans across major private banks.",
                      },
                      {
                        title: "Credit Card Debt Settlement",
                        href: "/credit-card-debt-settlement",
                        desc: "How to eliminate revolving credit card finance charges and negotiate 50%–75% waivers.",
                      },
                      {
                        title: "One Time Settlement Scheme 2026",
                        href: "/one-time-settlement-scheme-for-personal-loan-2026",
                        desc: "Bank-approved compromise settlement schemes and statutory hardship application criteria.",
                      },
                      {
                        title: "Stop Recovery Agent Harassment",
                        href: "/how-to-stop-bank-recovery-agents-harassment-legally-in-india",
                        desc: "Enforce RBI Fair Practices Code directives and serve cease-and-desist legal notices.",
                      },
                      {
                        title: "What Happens After Account Becomes NPA",
                        href: "/what-happens-after-loan-account-becomes-npa",
                        desc: "Understand the 90-day NPA classification cycle, SARFAESI notices, and legal defense.",
                      },
                      {
                        title: "Difference Between Settlement & Closure",
                        href: "/difference-between-loan-settlement-and-loan-closure-impact-on-cibil",
                        desc: "The critical differences in credit reporting between a settled loan and a closed loan.",
                      },
                      {
                        title: "Can I Convert Settled to Closed Later?",
                        href: "/can-i-convert-settled-to-closed-later",
                        desc: "Legal procedure to upgrade a settled credit tag to closed after recovering financial liquidity.",
                      },
                      {
                        title: "How to File Bank Complaint in RBI",
                        href: "/bank-complaint-in-rbi",
                        desc: "Step-by-step guide to filing a cost-free complaint under the RBI Integrated Ombudsman Scheme.",
                      },
                    ].map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="group block bg-white border border-gray-200 hover:border-[#D2A02A] rounded-xl p-4 transition-all hover:shadow-sm"
                      >
                        <h3 className="font-bold text-[#5A4C33] group-hover:text-[#D2A02A] text-sm mb-2 transition-colors flex items-center justify-between">
                          <span>{guide.title}</span>
                          <span className="text-gray-400 group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{guide.desc}</p>
                      </Link>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* ── RIGHT CONTAINER: ONLY ABOUT THE AUTHOR AND CTA ── */}
            <div className="space-y-8 sticky top-24">
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  About Author
                </p>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#D2A02A] shrink-0">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Anuj Anand Malik</p>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-xs text-[#D2A02A] hover:underline font-semibold"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate, loan settlement
                  expert, and banking litigation lawyer with over a decade of courtroom experience in
                  financial disputes, OTS compromise negotiations, and debt defense remedies.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2 rounded-lg text-sm font-semibold hover:bg-[#0077b5] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* CTA Card */}
              <div className="bg-[#5A4C33] p-6 rounded-xl shadow-sm text-white">
                <p className="text-xl font-bold mb-4">Need Legal Help?</p>
                <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                  Get expert legal advice on settling loans when monthly debt payments cross your repayment capacity.
                  Advocate Anuj Anand Malik and our senior banking defense team will review your case within 24 hours.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full border border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5A4C33] transition-colors cursor-pointer"
                >
                  Request Callback
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══ INTAKE MODAL ══ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-[#D2A02A]/40 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none"
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5A4C33] text-[#D2A02A] text-2xl mb-2">
                🛡️
              </div>
              <p className="text-xl sm:text-2xl font-extrabold text-gray-900">
                Request Hardship Case Evaluation
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Confidential legal assessment by Advocate Anuj Anand Malik&apos;s senior banking defense
                team.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                  ✓
                </div>
                <p className="text-xl font-bold text-gray-900">Case Request Received</p>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you. Our senior legal team has received your hardship details. An advocate
                  specializing in RBI compromise settlements will contact you within 24 hours at{" "}
                  <strong>{formData.phone || "your provided number"}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="bg-[#D2A02A] text-white font-bold px-6 py-2.5 rounded-xl hover:bg-[#b08522] transition text-sm"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left text-xs sm:text-sm">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="rajesh@example.com"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Total Overdue Debt *</label>
                    <input
                      type="text"
                      name="totalDebt"
                      required
                      value={formData.totalDebt}
                      onChange={handleInputChange}
                      placeholder="e.g. ₹15,00,000"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Monthly Take-Home *</label>
                    <input
                      type="text"
                      name="monthlyIncome"
                      required
                      value={formData.monthlyIncome}
                      onChange={handleInputChange}
                      placeholder="e.g. ₹40,000"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Primary Lending Banks *</label>
                  <input
                    type="text"
                    name="bankName"
                    required
                    value={formData.bankName}
                    onChange={handleInputChange}
                    placeholder="e.g. HDFC Bank, ICICI Bank, Bajaj Finance"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Reason for Hardship</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your financial hardship (e.g. job loss, business loss, medical emergency, recovery calls)..."
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div className="text-[11px] text-gray-500 leading-tight">
                  🔒 100% confidential. Your information is protected under advocate-client privilege
                  (Indian Evidence Act).
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                >
                  Submit for Confidential Legal Evaluation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/how-to-settle-loans-after-a-failed-debt-consolidation-plan";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/how-to-settle-loans-after-a-failed-debt-consolidation-plan.png`;
const LOGO_URL = `${SITE}/ama-legal-solutions-logo.png`;
const TODAY = "2026-08-25";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What happens when a debt consolidation loan or balance transfer fails in India?",
    answer:
      "When a debt consolidation plan fails due to missed monthly payments or high compounding interest, the borrower defaults simultaneously on the new consolidated facility and any unclosed legacy credit lines. Lenders initiate aggressive recovery procedures, trigger automated NACH/e-mandate bounces under Section 25 of the Payment and Settlement Systems Act, and report multiple 90+ DPD defaults to credit bureaus like CIBIL, causing credit scores to plummet by 100 to 200 points. At this stage, individual legal loan settlements (One-Time Settlements or OTS) under the Reserve Bank of India compromise frameworks become the only viable mechanism to eliminate the debt with substantial waivers.",
  },
  {
    id: "faq-2",
    question: "Can I negotiate individual One-Time Settlements (OTS) after a consolidation plan fails?",
    answer:
      "Yes, borrowers have the statutory right to negotiate individual One-Time Settlements with each lending institution even after a debt consolidation loan has defaulted. Under the Reserve Bank of India Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24), regulated banks and NBFCs are authorized to enter into board-approved compromise settlements with distressed borrowers to recover maximum principal without protracted litigation. Legal representation ensures that each creditor is approached with formal hardship petitions, securing waiver percentages between 40% and 75% on outstanding dues.",
  },
  {
    id: "faq-3",
    question: "How do I stop bank recovery agents from harassing me after defaulting on consolidated loans?",
    answer:
      "Recovery agent harassment can be halted immediately by issuing a formal legal notice through an advocate citing the Reserve Bank of India Master Circular on Recovery Agents and Conduct Guidelines. The circular strictly prohibits recovery agents from contacting borrowers before 8:00 AM or after 7:00 PM, calling friends or relatives, using intimidation, or visiting residences without prior notice. If harassment persists, an advocate can lodge a formal grievance on the RBI Complaint Management System (CMS) and escalate the matter under the RBI Integrated Ombudsman Scheme, 2021 for punitive regulatory damages.",
  },
  {
    id: "faq-4",
    question: "What legal actions can banks take if a consolidated loan defaults?",
    answer:
      "Upon a loan default exceeding 90 days, banks classify the account as a Non-Performing Asset (NPA) and may initiate legal proceedings. For unsecured personal loans and credit cards, banks typically issue legal notices for cheque bounce under Section 138 of the Negotiable Instruments Act, 1881 or NACH mandate failure under Section 25 of the Payment and Settlement Systems Act, 2007, along with referring matters to Lok Adalats or private arbitration. An advocate can represent the borrower in pre-litigation conciliation or Lok Adalat proceedings to formalize binding OTS agreements that dismiss all pending criminal and civil actions.",
  },
  {
    id: "faq-5",
    question: "How much waiver can I realistically get on loans after a failed consolidation?",
    answer:
      "Depending on the asset classification (Sub-standard, Doubtful, or Loss), duration of default, and borrower hardship documentation, banks and NBFCs typically grant waivers ranging from 40% to 75% of the total outstanding amount. Unsecured credit cards and high-interest digital app loans often see the steepest waivers, where accumulated penal interest, finance charges, and late fees are waived entirely alongside a haircut on the principal balance. Advocate-led negotiations ensure that the final settlement amount is locked into an official bank sanction letter before any disbursement is executed.",
  },
  {
    id: "faq-6",
    question: "Why do private debt consolidation programs and loan apps frequently collapse in India?",
    answer:
      "Debt consolidation plans frequently fail because they treat the symptom rather than the underlying cashflow deficit by replacing high-interest revolving credit with an equally rigid, large-ticket EMI burden. Many commercial debt consolidation agencies charge hefty upfront processing fees without having legal authority under the Advocates Act, 1961 to represent borrowers in judicial forums. When unforeseen financial shocks occur, borrowers default on the monolithic consolidated payment, leaving them with heavier aggregate liabilities and multiple enraged lenders.",
  },
  {
    id: "faq-7",
    question: "Will settling my loans after a failed consolidation ruin my credit score forever?",
    answer:
      "A loan settlement marks the account status as 'Settled' or 'Post-Write-Off Settled' in CIBIL, which temporarily lowers the credit score but halts the catastrophic month-on-month DPD (Days Past Due) accumulation caused by default. Over a 12 to 24 month period post-settlement, borrowers can systematically rebuild their CIBIL score to 750+ by obtaining secured credit cards against fixed deposits, maintaining zero utilization, and ensuring error-free bureau reporting. Crucially, settling removes the existential threat of legal execution petitions, wage attachments, and police complaints.",
  },
  {
    id: "faq-8",
    question: "What documents must I secure after completing a loan settlement to prevent future claims?",
    answer:
      "Upon remitting the agreed settlement amount within the specified validity period, the borrower must demand and secure an official No Dues Certificate (NDC) or No Objection Certificate (NOC) printed on the bank's official letterhead with authorized signatory credentials. Additionally, borrowers must ensure the return or cancellation of all unused post-dated security cheques and electronic NACH mandates to prevent subsequent unlawful debit attempts. Within 30 to 45 days, the lender is legally required under the Credit Information Companies (Regulation) Act, 2005 to update the account status with credit bureaus.",
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
      name: "How to Settle Loans After a Failed Debt Consolidation Plan | Legal Guide",
      description:
        "Comprehensive legal strategy to settle multiple loans after a failed debt consolidation plan under RBI compromise settlement frameworks. Advocate-led OTS, harassment protection, and 40%–75% waivers.",
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
        "How to Settle Loans After a Failed Debt Consolidation Plan: Complete Legal Strategy",
      description:
        "Did your debt consolidation loan or balance transfer fail? Learn how to legally negotiate individual One-Time Settlements (OTS) under RBI compromise settlement directives, stop recovery agent harassment, defend against Section 138/25 notices, and secure 40%–75% waivers.",
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
      name: "Failed Debt Consolidation Loan Settlement Consultation",
      description:
        "Expert legal consultation and representation to negotiate One-Time Settlements (OTS) for multiple defaulted loans following a failed debt consolidation plan or balance transfer in India.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1380",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: { "@type": "Person", name: "Vikram Malhotra" },
          reviewBody:
            "I took a ₹14 Lakh personal loan to consolidate 5 credit cards and 2 app loans. Within 6 months my business slowed down and the consolidated EMI became impossible. Recovery agents began threatening my family. Advocate Anuj Anand Malik and AMA Legal Solutions stepped in, issued anti-harassment legal notices, and negotiated separate OTS settlements with 55% waivers. Their legal backing saved my sanity.",
          datePublished: "2026-07-18",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: { "@type": "Person", name: "Sunita Deshmukh" },
          reviewBody:
            "After my debt management plan through an unregulated agency collapsed, 3 private banks sent Section 138 notices. Advocate Anuj Malik represented me in Lok Adalat, consolidated the settlements into clear RBI-compliant OTS agreements, and got all legal notices withdrawn with proper NOCs.",
          datePublished: "2026-06-29",
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
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Settle Loans After a Failed Debt Consolidation Plan",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Legal Loan Settlement Workflow After Failed Debt Consolidation",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Comprehensive Financial & Debt Liability Audit to Unbundle Creditors",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Issue Legal Anti-Harassment Notices Under RBI Conduct Guidelines",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "File Hardship Dossiers & Initiate Advocate-Led Compromise Negotiations",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Vet Bank OTS Sanction Letters & Defend Section 138/25 Notices",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Enforce No Dues Certificate (NDC) Issuance & Bureau Record Rectification",
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
  { id: "why-consolidation-fails", title: "Why Consolidation Plans Fail" },
  { id: "settlement-vs-consolidation", title: "Settlement (OTS) vs. Consolidation" },
  { id: "rbi-compromise-framework", title: "RBI Compromise Settlement Norms" },
  { id: "5-step-settlement-process", title: "5-Step Legal Protocol" },
  { id: "infographic", title: "Settlement Workflow Infographic" },
  { id: "waiver-benchmarks", title: "40%–75% Waiver Benchmarks" },
  { id: "criminal-statutory-defense", title: "Section 138 & 25 Legal Defense" },
  { id: "stopping-harassment", title: "Stopping Recovery Harassment" },
  { id: "noc-cibil-rectification", title: "NOC & CIBIL Rectification" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Citations & Statutory Authority" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function SettleLoansAfterFailedDebtConsolidationClient() {
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
      "How to Settle Loans After a Failed Debt Consolidation Plan – Comprehensive Legal Guide by AMA Legal Solutions";
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

  // Scrollspy for active TOC section
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
    { label: "Blog", href: "/blog" },
    {
      label: "How to Settle Loans After a Failed Debt Consolidation Plan",
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

          {/* ══ HERO SECTION: Asymmetric 12-col matching /how-to-remove-a-written-off-status-from-a-credit-report ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
            {/* Left Col — Title & Metadata */}
            <div className="flex flex-col lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase tracking-wider w-max mb-4 shadow-sm border border-[#D2A02A]/30">
                <span>⚖️</span> Statutory Debt Resolution &amp; RBI Compromise Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                How to Settle Loans After a{" "}
                <span className="text-[#D2A02A]">Failed Debt Consolidation</span> Plan
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                When a debt consolidation loan, balance transfer, or credit counseling scheme collapses
                under the weight of compounded interest and rigid EMIs, multiple creditors escalate
                recovery actions simultaneously. Discover the definitive advocate-led legal strategy
                to separate your creditor liabilities, invoke RBI compromise settlement frameworks,
                halt recovery harassment, and secure <strong>40% to 75% waivers</strong> with authentic
                No Dues Certificates.
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
                      Founder &amp; Senior Advocate &bull; Reviewed by AMA Legal Solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> 25-08-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 14 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> RBI Framework Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2"
                >
                  <span>Request Urgent Legal Settlement Review</span>
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

            {/* Right Col — Infographic Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/how-to-settle-loans-after-a-failed-debt-consolidation-plan.png"
                  alt="How to Settle Loans After a Failed Debt Consolidation Plan – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    5-Step RBI Compromise Settlement Protocol
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Advocate-Led Representation for Multi-Lender Defaults
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
                  <span className="text-[#D2A02A]">⚖️</span> Verified Insights
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  100% Statutory Banking Law Grounding
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> Statutory Remedies
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  RBI Master Circular &amp; Lok Adalat OTS
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⭐</span> 4.9/5 Advocate Rating
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Over 10,000+ Borrowers Defended
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🛡️</span> RBI/Legal Experts
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Section 138 &amp; 25 Anti-Harassment Defense
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN 3-COLUMN CONTENT LAYOUT ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_320px] gap-8 items-start">
            
            {/* ── LEFT COLUMN: TOC DESKTOP ── */}
            <div className="hidden lg:block sticky top-28 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 max-h-[calc(100vh-140px)] overflow-y-auto">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <span className="text-[#D2A02A] text-lg font-bold">📑</span>
                <h3 className="font-bold text-gray-900 text-sm">Table of Contents</h3>
              </div>
              <nav className="space-y-1.5">
                {tocSections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className={`block text-xs py-1.5 px-2.5 rounded-lg transition-all ${
                      activeSection === sec.id
                        ? "bg-[#D2A02A]/15 text-[#5A4C33] font-bold border-l-2 border-[#D2A02A]"
                        : "text-gray-600 hover:text-[#D2A02A] hover:bg-gray-50"
                    }`}
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* ── CENTER COLUMN: COMPREHENSIVE ARTICLE ── */}
            <div className="min-w-0">
              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">
                
                {/* Meta + Share Bar */}
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
                    &bull; Updated: 25-08-2026
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-gray-700">Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm"
                      title="Share on Facebook"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition shadow-sm"
                      title="Share on X"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm"
                      title="Share on LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm"
                      title="Share on WhatsApp"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.535 1.777.818 2.796.818 3.179 0 5.766-2.587 5.766-5.768 0-3.18-2.585-5.767-5.766-5.767zm0 10.455c-.866 0-1.637-.23-2.315-.658l-.166-.104-1.57.412.419-1.53-.109-.174c-.456-.728-.696-1.509-.696-2.635 0-2.48 2.018-4.498 4.498-4.498 2.479 0 4.496 2.018 4.496 4.498 0 2.481-2.017 4.497-4.496 4.497z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition shadow-sm text-xs font-bold"
                      title="Copy link"
                    >
                      {shareMsg ? "✓" : "🔗"}
                    </button>
                  </div>
                </div>

                {/* ── SECTION 1: QUICK ANSWER ── */}
                <section id="quick-answer" className="scroll-mt-28">
                  <div className="border-l-4 border-[#D2A02A] bg-[#5A4C33]/5 rounded-r-2xl p-6 md:p-8 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[#D2A02A] text-lg">💡</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#5A4C33]">
                        Statutory Direct Answer
                      </span>
                    </div>
                    <p className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                      To settle loans after a failed debt consolidation plan in India, a borrower must unbundle the consolidated debt structure and negotiate individual One-Time Settlements (OTS) directly with each underlying bank or NBFC under the Reserve Bank of India compromise settlement guidelines. An advocate representing the borrower files formal financial hardship dossiers, issues legal cease-and-desist notices to stop recovery agent harassment, defends against Section 138 Negotiable Instruments Act or Section 25 Payment and Settlement Systems Act notices, and secures binding OTS sanction letters granting 40% to 75% waivers backed by official No Dues Certificates.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: WHY DEBT CONSOLIDATION FAILS ── */}
                <section id="why-consolidation-fails" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Why Debt Consolidation Plans Collapse in India: The Structural Flaw
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    Debt consolidation is heavily marketed by financial institutions and fintech intermediaries as an all-in-one remedy for distressed borrowers. The proposition appears seductive: take a single large personal loan or balance transfer facility to wipe out multiple high-interest credit cards and short-term digital loans, consolidating chaos into a single monthly EMI.
                  </p>
                  <p className="text-base leading-relaxed text-gray-700">
                    In reality, debt consolidation in the Indian retail lending market suffers from severe structural vulnerabilities that frequently trigger total financial collapse for middle-class borrowers:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#FAF7F0] border border-[#D2A02A]/30 p-5 rounded-xl">
                      <h3 className="font-bold text-[#5A4C33] text-base mb-2 flex items-center gap-2">
                        <span>⚠️</span> Front-Loaded Amortization &amp; Processing Fees
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Consolidation loans incur 2%–4% processing fees, stamp duties, and mandatory insurance premiums. During the first 12–18 months, up to 70% of each EMI payment services interest rather than reducing the underlying principal.
                      </p>
                    </div>

                    <div className="bg-[#FAF7F0] border border-[#D2A02A]/30 p-5 rounded-xl">
                      <h3 className="font-bold text-[#5A4C33] text-base mb-2 flex items-center gap-2">
                        <span>⚠️</span> Unclosed Credit Lines &amp; Double-Indebtedness
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Borrowers who take a consolidation loan often fail to obtain formal written account closures from earlier card issuers. As emergency medical expenses or living costs arise, available credit limits are reused, doubling total debt exposure.
                      </p>
                    </div>

                    <div className="bg-[#FAF7F0] border border-[#D2A02A]/30 p-5 rounded-xl">
                      <h3 className="font-bold text-[#5A4C33] text-base mb-2 flex items-center gap-2">
                        <span>⚠️</span> The Monolithic EMI Trap
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        When multiple small debts are replaced by one massive monthly EMI (e.g., ₹60,000–₹1,20,000/month), a single salary delay or business loss triggers immediate default on the entire portfolio, triggering rapid legal escalation.
                      </p>
                    </div>

                    <div className="bg-[#FAF7F0] border border-[#D2A02A]/30 p-5 rounded-xl">
                      <h3 className="font-bold text-[#5A4C33] text-base mb-2 flex items-center gap-2">
                        <span>⚠️</span> Unregulated Private Counseling Agencies
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Unaccredited debt management agencies often collect monthly fees while delaying creditor payments, leaving borrowers exposed to arrest warrants, cheque bounce cases, and arbitration orders without legal defense.
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#D2A02A] bg-[#5A4C33]/5 px-5 py-4 my-6 rounded-r-lg italic text-gray-700 text-sm md:text-base">
                    &ldquo;Consolidation does not eliminate debt—it merely rearranges the terms and extends the duration. When income shocks occur, the rigid payment schedule breaks down, leaving the borrower with heavier interest burdens and aggressive recovery agents from multiple institutions simultaneously.&rdquo;
                    <footer className="text-xs font-bold text-[#5A4C33] not-italic mt-2">
                      — Advocate Anuj Anand Malik, Founder &amp; Senior Advocate, AMA Legal Solutions
                    </footer>
                  </blockquote>
                </section>

                {/* ── SECTION 3: SETTLEMENT VS CONSOLIDATION ── */}
                <section id="settlement-vs-consolidation" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Pivoting from Failed Consolidation to One-Time Settlement (OTS)
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700">
                    Once a debt consolidation plan collapses, attempting to take further loans or restructuring facilities only exacerbates financial distress. The lawful, permanent solution is to pivot toward <strong>individual One-Time Settlements (OTS)</strong> with each creditor institution.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6 shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm border-collapse">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700">Strategic Dimension</th>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700 text-red-300">Debt Consolidation Plan (Failed)</th>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700 text-[#D2A02A]">Advocate-Led Loan Settlement (OTS)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Total Liability Impact</td>
                          <td className="p-3.5 md:p-4 text-gray-600">100% principal + interest + processing charges paid over 3–7 years</td>
                          <td className="p-3.5 md:p-4 font-semibold text-emerald-800 bg-emerald-50/50">40% to 75% legal waiver on aggregate balance</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Monthly Cashflow Requirement</td>
                          <td className="p-3.5 md:p-4 text-gray-600">High, rigid monthly EMI requiring flawless ongoing income</td>
                          <td className="p-3.5 md:p-4 font-semibold text-gray-800">Zero recurring EMIs; settled via structured lump-sum installments</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Creditor Stance &amp; Harassment</td>
                          <td className="p-3.5 md:p-4 text-gray-600">Default triggers simultaneous recovery calls across all lenders</td>
                          <td className="p-3.5 md:p-4 font-semibold text-gray-800">Advocate issues cease-and-desist notices; discussions redirected to legal counsel</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Statutory Protection</td>
                          <td className="p-3.5 md:p-4 text-gray-600">Purely contractual; no institutional immunity against cheque bounce</td>
                          <td className="p-3.5 md:p-4 font-semibold text-gray-800">Governed by RBI Compromise Directions &amp; Lok Adalat conciliation awards</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Final Closure Instrument</td>
                          <td className="p-3.5 md:p-4 text-gray-600">Conditional upon servicing multi-year interest schedules</td>
                          <td className="p-3.5 md:p-4 font-semibold text-emerald-800 bg-emerald-50/50">Unconditional bank No Dues Certificate (NDC) &amp; CIBIL closure</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 4: RBI COMPROMISE FRAMEWORK ── */}
                <section id="rbi-compromise-framework" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The RBI Statutory Framework for Loan Compromise Settlements
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700">
                    Many borrowers erroneously believe that banks cannot legally waive loan dues. Under the Reserve Bank of India&apos;s landmark regulatory framework, compromise settlements are an officially recognized, institutionalized mechanism for resolving distressed debt.
                  </p>
                  
                  <div className="bg-[#FAF7F0] border-2 border-[#D2A02A]/40 rounded-xl p-6 my-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏛️</span>
                      <div>
                        <h3 className="text-lg font-bold text-[#1a202c] mb-2">
                          RBI Circular on Compromise Settlements and Technical Write-offs
                        </h3>
                        <p className="text-xs text-gray-500 font-semibold mb-3">
                          Notification No. DOR.STR.REC.20/21.04.048/2023-24 (June 8, 2023)
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          The Reserve Bank of India mandates all Scheduled Commercial Banks, Non-Banking Financial Companies (NBFCs), Primary Urban Co-operative Banks, and All-India Financial Institutions to put in place board-approved policies for undertaking compromise settlements with borrowers experiencing genuine distress. Key provisions include:
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-xs md:text-sm text-gray-700">
                          <li>
                            <strong>Delegation of Authority:</strong> Clear internal approval matrices specifying which bank committee (Zonal Manager, General Manager, or Executive Committee) has the power to sanction waiver percentages based on unrecoverable principal and interest.
                          </li>
                          <li>
                            <strong>Time-Bound Resolution:</strong> Regulated entities must process genuine compromise settlement applications without unnecessary administrative delays.
                          </li>
                          <li>
                            <strong>Mandatory Reporting &amp; Cooling Period:</strong> Directs transparent reporting to credit bureaus upon execution of the settlement agreement and payment realization.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-gray-700">
                    To access the full legal text, consult the official{" "}
                    <a
                      href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12513&Mode=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      RBI Framework on Compromise Settlements (rbi.org.in)
                    </a>{" "}
                    and the{" "}
                    <a
                      href="https://rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=9908"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      RBI Master Circular on Prudential Norms on Income Recognition and Asset Classification (IRAC Norms)
                    </a>
                    .
                  </p>
                </section>

                {/* ── SECTION 5: 5-STEP SETTLEMENT PROCESS ── */}
                <section id="5-step-settlement-process" className="scroll-mt-28 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Legal Protocol to Settle Loans After a Failed Consolidation
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700">
                    Navigating multi-creditor defaults after a failed consolidation requires a disciplined, legally insulated sequence. Below is the precise 5-step workflow executed by AMA Legal Solutions:
                  </p>

                  <div className="space-y-6 mt-6">
                    {/* Step 1 */}
                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-all">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold text-lg flex items-center justify-center shrink-0 shadow">
                        1
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-[#1a202c]">
                          Comprehensive Debt &amp; Liability Unbundling Audit
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Our legal team pulls comprehensive credit reports from CIBIL, Experian, and CRIF High Mark to reconstruct the exact liability chain. We identify which underlying accounts were partially paid versus completely unclosed, calculate the true principal amounts versus inflated penal interest, and classify each creditor based on legal risk (e.g., whether post-dated cheques or active e-NACH mandates exist).
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-all">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold text-lg flex items-center justify-center shrink-0 shadow">
                        2
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-[#1a202c]">
                          Issuance of Legal Cease-and-Desist Notices Against Harassment
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          We dispatch formal legal representations under the Advocates Act, 1961 to the collection departments and nodal officers of all involved banks and NBFCs. The notice cites the{" "}
                          <a
                            href="https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12372&Mode=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D2A02A] hover:underline font-semibold"
                          >
                            RBI Master Circular on Recovery Agents
                          </a>
                          , forbidding unauthorized home visits, workplace intimidation, abusive phone calls, and third-party disclosures, and redirecting all communication to our law office.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-all">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold text-lg flex items-center justify-center shrink-0 shadow">
                        3
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-[#1a202c]">
                          Submission of Hardship Dossiers &amp; Individual OTS Negotiations
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Rather than dealing with recovery call centers, our advocates submit documented hardship dossiers (medical records, salary reduction certificates, GST returns, termination letters) directly to the Special Asset Management (SAM) or NPA Resolution Committees of the lenders. We structure viable settlement proposals targeting 40% to 75% waivers on the principal balance.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-all">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold text-lg flex items-center justify-center shrink-0 shadow">
                        4
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-[#1a202c]">
                          Vetting Formal Bank Sanction Letters &amp; Defending Legal Notices
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Never pay a single rupee based on an informal verbal promise or recovery agent WhatsApp message. Our lawyers meticulously vet the official OTS Sanction Letter issued on bank letterhead with authorized digital signatures. We ensure the letter explicitly confirms that the agreed payment fully discharges all civil and criminal liabilities, including withdrawing any Section 138 NI Act or arbitration proceedings.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-all">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold text-lg flex items-center justify-center shrink-0 shadow">
                        5
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-[#1a202c]">
                          Securing No Dues Certificates (NDC) &amp; Bureau Record Updating
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Following payment remittance, we enforce the timely issuance of formal No Objection / No Dues Certificates within the 30-day statutory window mandated under the{" "}
                          <a
                            href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=5671&Mode=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D2A02A] hover:underline font-semibold"
                          >
                            Credit Information Companies (Regulation) Act, 2005
                          </a>
                          . We track CIBIL, Experian, and Equifax updates to ensure the status is converted from delinquent/written-off to settled/closed.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: INFOGRAPHIC EMBED ── */}
                <section id="infographic" className="scroll-mt-28">
                  <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D2A02A]/20">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#D2A02A] text-white font-bold text-base shadow-sm">📊</span>
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                          Failed Debt Consolidation Settlement Workflow Infographic
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          Visual representation of the 5-step advocate-led resolution roadmap
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20 shadow-sm flex justify-center items-center p-2 sm:p-4">
                      <img
                        src="/images/og/how-to-settle-loans-after-a-failed-debt-consolidation-plan.png"
                        alt="How to Settle Loans After a Failed Debt Consolidation Plan – 5 Step Legal Workflow Infographic by AMA Legal Solutions"
                        className="w-full h-auto max-h-[800px] object-contain rounded-lg hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                      Prepared by AMA Legal Solutions Research &amp; Compliance Team &bull; Statutory Debt Resolution Guide
                    </p>
                  </div>
                </section>

                {/* ── SECTION 7: WAIVER BENCHMARKS ── */}
                <section id="waiver-benchmarks" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Bank Settlement Waiver Benchmarks (40% to 75% Haircuts)
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700">
                    Settlement waiver percentages depend upon the category of loan, asset age in NPA books, and the quality of legal representation. Below are typical statutory compromise settlement benchmarks achieved by AMA Legal Solutions across major Indian banking sectors:
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white border-2 border-gray-200 hover:border-[#D2A02A] p-5 rounded-2xl text-center shadow-sm transition-all">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Unsecured Credit Cards
                      </div>
                      <div className="text-3xl font-extrabold text-[#D2A02A] mb-2">55% – 75%</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Complete waiver of 42% annualized finance charges, late fees, and up to 50% principal haircut.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 hover:border-[#D2A02A] p-5 rounded-2xl text-center shadow-sm transition-all">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Personal Loans &amp; Consolidation Loans
                      </div>
                      <div className="text-3xl font-extrabold text-[#5A4C33] mb-2">40% – 60%</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Full interest waiver + substantial reduction on outstanding principal ledger balance.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 hover:border-[#D2A02A] p-5 rounded-2xl text-center shadow-sm transition-all">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Digital Lending Apps &amp; Fintech NBFCs
                      </div>
                      <div className="text-3xl font-extrabold text-[#D2A02A] mb-2">50% – 70%</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Elimination of unlawful compounding penalties and closure on verifiable sanctioned principal.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-500 italic mt-3">
                    Note: Actual waiver percentages are determined through bilateral legal negotiation based on documented borrower hardship and lender recovery risk under RBI guidelines.
                  </p>
                </section>

                {/* ── SECTION 8: SECTION 138 & 25 CRIMINAL STATUTORY DEFENSE ── */}
                <section id="criminal-statutory-defense" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Defending Against Section 138 NI Act, Section 25 PASA, &amp; Arbitration
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700">
                    When consolidation loans collapse, lenders frequently weaponize post-dated security cheques and electronic mandate bounces to intimidate borrowers into repayment. Understanding your statutory defenses is essential:
                  </p>

                  <div className="space-y-4 mt-6">
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2">
                        1. Section 138 of the Negotiable Instruments Act, 1881 (Cheque Bounce)
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Cheques collected as blank &ldquo;security&rdquo; at loan inception cannot be arbitrarily filled with inflated default amounts without proper reconciliation. A reply to a statutory legal notice must be dispatched within 15 days of receipt by an advocate, establishing that the cheque was a security instrument rather than for an existing crystallized debt.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2">
                        2. Section 25 of the Payment and Settlement Systems Act, 2007 (e-NACH Failure)
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Like cheque bounces, repeated automated NACH mandate failures can attract quasi-criminal complaints. Our advocates ensure that ongoing compromise negotiations are placed on judicial record, neutralizing criminal intent (mens rea) and facilitating Lok Adalat settlements where all complaints are unconditionally dismissed.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2">
                        3. Unilateral Arbitration Proceedings
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Under Supreme Court precedents (including <em>Perkins Eastman</em> and <em>TRF Limited</em>), unilateral appointment of sole arbitrators by NBFCs is legally void. We challenge defective arbitration appointments under Section 11 and Section 14 of the Arbitration and Conciliation Act, 1996, halting ex-parte award enforcement.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 9: STOPPING RECOVERY HARASSMENT ── */}
                <section id="stopping-harassment" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Enforcing Anti-Harassment Protections Under RBI Directives
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700">
                    Loan default is strictly a civil breach of contract; it is not a criminal offense. The Reserve Bank of India has established stringent Fair Practice Codes and Anti-Harassment Directives that protect every borrower:
                  </p>

                  <div className="bg-[#FAF7F0] border-l-4 border-[#D2A02A] p-5 rounded-r-xl my-4 space-y-3">
                    <h3 className="font-bold text-[#5A4C33] text-sm md:text-base">
                      Mandatory Prohibitions on Bank Recovery Agents:
                    </h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-gray-700">
                      <li>Strict prohibition on calling before 8:00 AM or after 7:00 PM.</li>
                      <li>Absolute ban on contacting family members, employers, friends, or neighbors.</li>
                      <li>Prohibition of abusive language, physical intimidation, or unannounced workplace visits.</li>
                      <li>Mandatory disclosure of agent identity, authorized ID cards, and bank authorization letters.</li>
                    </ul>
                  </div>

                  <p className="text-base leading-relaxed text-gray-700">
                    If collection agents violate these rules, AMA Legal Solutions immediately escalates complaints to the{" "}
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      RBI Complaint Management System (cms.rbi.org.in)
                    </a>{" "}
                    and files petitions under the{" "}
                    <a
                      href="https://bankingombudsman.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      RBI Integrated Ombudsman Scheme, 2021
                    </a>
                    , which awards damages and forces bank management to restrain aggressive collection agencies.
                  </p>
                </section>

                {/* ── SECTION 10: NOC & CIBIL RECTIFICATION ── */}
                <section id="noc-cibil-rectification" className="scroll-mt-28 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Securing Authentic No Dues Certificates &amp; CIBIL Credit Repair
                  </h2>
                  <p className="text-base leading-relaxed text-gray-700">
                    The settlement journey is not complete until every legal document confirming debt extinguishment is in your possession. Our legal team supervises the post-settlement compliance phase:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <h3 className="font-bold text-[#1a202c] text-sm md:text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">📄</span> Verification of No Dues Certificate
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        We verify that the NDC issued by the bank contains specific reference to the original loan account number, confirmation of full payment of agreed settlement terms, and explicit closure of all legal claims.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <h3 className="font-bold text-[#1a202c] text-sm md:text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">📈</span> Credit Bureau Update &amp; Dispute Filing
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Under Section 21 of the Credit Information Companies Act, banks must update credit bureau records within 30 days. If the bank delays or leaves the account as delinquent, we file legal dispute notices to compel rectification.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 11: QUOTABLE FAQS ── */}
                <section id="faqs" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-10 rounded-xl bg-[#D2A02A]/15 text-[#5A4C33] flex items-center justify-center font-bold text-xl">
                      ❓
                    </span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                        Frequently Asked Questions
                      </h2>
                      <p className="text-xs md:text-sm text-gray-500">
                        Quotable statutory answers on loan settlement after failed consolidation
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="flex justify-between items-center w-full text-left p-5 font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
                          aria-expanded={expandedFaqs.includes(faq.id)}
                        >
                          <span className="flex items-start pr-4">
                            <span className="text-[#D2A02A] mr-3 font-extrabold">Q.</span>
                            <span className="text-sm md:text-base text-[#1a202c] font-bold">
                              {faq.question}
                            </span>
                          </span>
                          <span
                            className={`transform transition-transform duration-200 shrink-0 ${
                              expandedFaqs.includes(faq.id) ? "rotate-180 text-[#D2A02A]" : "text-gray-400"
                            }`}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        {expandedFaqs.includes(faq.id) && (
                          <div className="px-5 pb-5 pt-1 text-gray-700 leading-relaxed text-xs md:text-sm border-t border-gray-100 bg-[#FAF7F0]/40">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 12: MORE LEGAL GUIDES ── */}
                <section id="internal-guides" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="text-[#D2A02A] text-xl">📚</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      More Legal Guides &amp; Resources
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Settle Loans When Monthly Debt Crosses Capacity",
                        href: "/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity",
                        desc: "What to do when total monthly debt payments exceed your verifiable repayment capacity.",
                      },
                      {
                        title: "How to Remove Written-Off Status from Credit Report",
                        href: "/how-to-remove-a-written-off-status-from-a-credit-report",
                        desc: "Step-by-step legal dispute process to upgrade written-off entries to closed.",
                      },
                      {
                        title: "Best Debt Settlement Company in India",
                        href: "/best-debt-settlement-company",
                        desc: "How advocate-led debt resolution outperforms unregulated private agencies.",
                      },
                      {
                        title: "Credit Card Debt Settlement Process",
                        href: "/credit-card-debt-settlement",
                        desc: "Legal strategies to settle revolving credit card debts with maximum interest waivers.",
                      },
                      {
                        title: "Personal Loan Debt Settlement Guide",
                        href: "/personal-loan-debt-settlement",
                        desc: "Complete walkthrough of negotiating One-Time Settlements for unsecured personal loans.",
                      },
                      {
                        title: "Loan Settlement vs. Closure Impact on CIBIL",
                        href: "/difference-between-loan-settlement-and-loan-closure-impact-on-cibil",
                        desc: "Understand the score differences and how to convert a settled tag to closed.",
                      },
                      {
                        title: "What Happens After Loan Account Becomes NPA",
                        href: "/what-happens-after-loan-account-becomes-npa",
                        desc: "Legal stages of non-performing assets, SMA classification, and statutory rights.",
                      },
                      {
                        title: "How to Stop Bank Recovery Agents Harassment",
                        href: "/how-to-stop-bank-recovery-agents-harassment-legally-in-india",
                        desc: "Enforce RBI recovery guidelines and file police and ombudsman complaints.",
                      },
                      {
                        title: "One Time Settlement Scheme Guide 2026",
                        href: "/one-time-settlement-scheme-for-personal-loan-2026",
                        desc: "Current bank OTS policies, waiver benchmarks, and Lok Adalat conciliation schedules.",
                      },
                    ].map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="group block bg-white border border-gray-200 hover:border-[#D2A02A] rounded-xl p-4 transition-all hover:shadow-md"
                      >
                        <h3 className="font-bold text-[#5A4C33] group-hover:text-[#D2A02A] text-sm mb-2 transition-colors flex items-center justify-between">
                          <span>{guide.title}</span>
                          <span className="text-[#D2A02A] group-hover:translate-x-1 transition-transform">→</span>
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{guide.desc}</p>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 13: CITATIONS & SOURCES ── */}
                <section id="citations" className="scroll-mt-28 border-t border-gray-200 pt-8">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🏛️</span> Statutory Citations &amp; Official References
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-600">
                    {[
                      {
                        label: "Reserve Bank of India — Framework on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)",
                        href: "https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12513&Mode=0",
                      },
                      {
                        label: "Reserve Bank of India — Master Circular on Recovery Agents and Conduct Guidelines",
                        href: "https://rbi.org.in/Scripts/NotificationUser.aspx?Id=12372&Mode=0",
                      },
                      {
                        label: "Reserve Bank of India — Prudential Norms on Income Recognition, Asset Classification (IRAC)",
                        href: "https://rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=9908",
                      },
                      {
                        label: "Credit Information Companies (Regulation) Act, 2005 (Statutory Accuracy Norms)",
                        href: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=5671&Mode=0",
                      },
                      {
                        label: "Reserve Bank of India Integrated Ombudsman Scheme, 2021",
                        href: "https://bankingombudsman.rbi.org.in",
                      },
                      {
                        label: "Reserve Bank of India Complaint Management System (CMS)",
                        href: "https://cms.rbi.org.in",
                      },
                      {
                        label: "National Consumer Disputes Redressal Commission (NCDRC)",
                        href: "https://ncdrc.nic.in",
                      },
                      {
                        label: "Insolvency and Bankruptcy Board of India (IBBI Individual Insolvency Norms)",
                        href: "https://ibbi.gov.in",
                      },
                    ].map((cite) => (
                      <li key={cite.href}>
                        <a
                          href={cite.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                        >
                          {cite.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* ── SECTION 14: AMA COMPANY SECTION ── */}
                <section
                  id="ama-company-section"
                  className="border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 bg-white text-center shadow-lg relative mt-12 mb-8"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/ama3.svg"
                      alt="AMA Legal Solutions Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#5A4C33] mb-3">
                    AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 text-sm md:text-base font-medium">
                    India&apos;s premier banking law and debt settlement firm. Trusted with a{" "}
                    <strong className="text-[#D2A02A] font-bold">4.9 Google Rating</strong>, over{" "}
                    <strong className="text-[#D2A02A] font-bold">10,000+ Clients Defended</strong>, and{" "}
                    <strong className="text-[#D2A02A] font-bold">₹150+ Crores in Debt Resolved</strong>.
                    We safeguard borrowers from illegal recovery tactics and secure legally binding,
                    board-approved One-Time Settlements under RBI directives.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/loan-settlement"
                      className="px-4 py-3 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-xl hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center shadow-sm"
                    >
                      Loan Settlement Services
                    </Link>
                    <Link
                      href="/send-legal-notice"
                      className="px-4 py-3 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-xl hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center shadow-sm"
                    >
                      Legal Notice Services
                    </Link>
                    <Link
                      href="/how-to-fix-credit-score"
                      className="px-4 py-3 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-xl hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center shadow-sm"
                    >
                      CIBIL Dispute &amp; Repair
                    </Link>
                    <Link
                      href="/bank-complaint-in-rbi"
                      className="px-4 py-3 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-xl hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center shadow-sm"
                    >
                      RBI Ombudsman Complaints
                    </Link>
                  </div>
                </section>
              </div>
            </div>

            {/* ── RIGHT COLUMN: STICKY SIDEBAR ── */}
            <div className="space-y-8 sticky top-28">
              
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2.5 flex items-center gap-2">
                  <span>👨‍⚖️</span> Lead Banking Advocate
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-3.5 border-2 border-[#D2A02A] shrink-0">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-base">Anuj Anand Malik</h4>
                    <p className="text-xs text-gray-500 font-medium">Founder &amp; Senior Advocate</p>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-xs text-[#D2A02A] font-bold hover:underline mt-0.5 inline-block"
                    >
                      View Full Profile →
                    </Link>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Advocate Anuj Anand Malik is India&apos;s foremost debt resolution lawyer with over a
                  decade of specialization in RBI compromise settlements, Lok Adalat representations,
                  and borrower criminal defense.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#0A66C2] text-[#0A66C2] text-center py-2.5 rounded-xl text-xs font-bold hover:bg-[#0A66C2] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Premium CTA Box */}
              <div className="bg-[#5A4C33] p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D2A02A]/20 rounded-full blur-xl pointer-events-none" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D2A02A]/20 border border-[#D2A02A]/40 rounded-full text-[11px] font-bold text-[#D2A02A] mb-3">
                  <span>⚡</span> Urgent Legal Assistance
                </div>
                <h3 className="text-xl font-bold mb-2">Consolidation Default Crisis?</h3>
                <p className="text-gray-200 mb-5 text-xs leading-relaxed">
                  Stop recovery harassment and negotiate structured 40%–75% OTS waivers with bank management. Speak directly with our legal team.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white text-center py-3 rounded-xl font-bold transition-all shadow-md mb-3 text-sm"
                >
                  📞 Call +91-8700343611
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full bg-white/10 hover:bg-white hover:text-[#5A4C33] border border-white/30 text-white text-center py-3 rounded-xl font-bold transition-all text-sm"
                >
                  Request Legal Case Review
                </button>
              </div>

              {/* Client Reviews Block (Exact match with Product Schema) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2.5 flex items-center justify-between">
                  <span>Verified Client Reviews</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </h3>
                <div className="flex items-center gap-2 mb-1">
                  <Stars />
                  <span className="font-extrabold text-gray-900 text-sm">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-gray-500 mb-4">
                  Based on 1,380 verified borrower reviews across India
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative">
                    <div className="text-3xl text-[#D2A02A] opacity-20 absolute top-2 left-2 font-serif leading-none">
                      &ldquo;
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-1.5">
                        <Stars />
                        <span className="font-bold text-gray-900 ml-2 text-xs">5.0</span>
                      </div>
                      <p className="text-gray-700 italic text-xs mb-2 leading-relaxed">
                        &ldquo;I took a ₹14 Lakh personal loan to consolidate 5 credit cards and 2 app loans. Within 6 months my business slowed down and the consolidated EMI became impossible. Recovery agents began threatening my family. Advocate Anuj Anand Malik and AMA Legal Solutions stepped in, issued anti-harassment legal notices, and negotiated separate OTS settlements with 55% waivers. Their legal backing saved my sanity.&rdquo;
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="w-7 h-7 bg-[#5A4C33] text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                          V
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-xs">Vikram Malhotra</p>
                          <p className="text-[10px] text-gray-500">Gurugram &bull; July 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative">
                    <div className="text-3xl text-[#D2A02A] opacity-20 absolute top-2 left-2 font-serif leading-none">
                      &ldquo;
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-1.5">
                        <Stars />
                        <span className="font-bold text-gray-900 ml-2 text-xs">5.0</span>
                      </div>
                      <p className="text-gray-700 italic text-xs mb-2 leading-relaxed">
                        &ldquo;After my debt management plan through an unregulated agency collapsed, 3 private banks sent Section 138 notices. Advocate Anuj Malik represented me in Lok Adalat, consolidated the settlements into clear RBI-compliant OTS agreements, and got all legal notices withdrawn with proper NOCs.&rdquo;
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="w-7 h-7 bg-[#D2A02A] text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                          S
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-xs">Sunita Deshmukh</p>
                          <p className="text-[10px] text-gray-500">Mumbai &bull; June 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/ama-legal-solutions-reviews"
                  className="block text-center text-xs text-[#D2A02A] font-bold hover:underline mt-4"
                >
                  Read All Verified Client Reviews →
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">
                  Related Legal Guides
                </h3>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity", "Debt Payments Exceed Capacity"],
                    ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off CIBIL Tag"],
                    ["/loan-write-off-vs-loan-settlement", "Write-Off vs Loan Settlement"],
                    ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Agents Legally"],
                    ["/bank-complaint-in-rbi", "File RBI Ombudsman Complaint"],
                    ["/one-time-settlement-scheme-for-personal-loan-2026", "One Time Settlement Scheme 2026"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-gray-700 hover:text-[#D2A02A] transition-colors flex items-center gap-1.5 py-0.5"
                      >
                        <span className="text-[#D2A02A]">→</span>
                        <span>{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ INTERACTIVE CONSULTATION INTAKE MODAL ══ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setFormSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Legal Review Requested</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Advocate Anuj Anand Malik&apos;s team has received your details. A senior banking advocate will review your loan portfolio and call you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="bg-[#D2A02A] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#b08522] transition-colors text-sm"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[#D2A02A] text-xl">⚖️</span>
                  <h3 className="text-xl font-extrabold text-gray-900">
                    Failed Consolidation Legal Review
                  </h3>
                </div>
                <p className="text-xs text-gray-600 mb-6">
                  Confidential evaluation by Advocate Anuj Anand Malik &bull; 100% Legal Privilege
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Total Outstanding Debt *
                      </label>
                      <select
                        name="totalDebt"
                        required
                        value={formData.totalDebt}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none bg-white"
                      >
                        <option value="">Select Debt Range</option>
                        <option value="₹2 - ₹5 Lakhs">₹2 - ₹5 Lakhs</option>
                        <option value="₹5 - ₹10 Lakhs">₹5 - ₹10 Lakhs</option>
                        <option value="₹10 - ₹25 Lakhs">₹10 - ₹25 Lakhs</option>
                        <option value="₹25 - ₹50 Lakhs">₹25 - ₹50 Lakhs</option>
                        <option value="Above ₹50 Lakhs">Above ₹50 Lakhs</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Primary Lender(s) *
                      </label>
                      <input
                        type="text"
                        name="bankName"
                        required
                        value={formData.bankName}
                        onChange={handleInputChange}
                        placeholder="e.g. HDFC, ICICI, Bajaj Fin"
                        className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Current Legal Status / Summary of Failed Plan
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe the failed consolidation loan, received legal notices, or recovery calls..."
                      className="w-full px-3.5 py-2.5 text-xs md:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-2"
                  >
                    <span>Submit for Advocate Review</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <p className="text-[10px] text-gray-400 text-center">
                    🔒 Your information is confidential under the Advocates Act, 1961 and is never shared with third parties.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

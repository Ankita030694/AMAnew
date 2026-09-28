"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaCopy,
  FaCheck,
} from "react-icons/fa6";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/loan-settlement-for-hdfc-bank";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/loan-settlement-for-hdfc-bank.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-28";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What percentage of debt waiver does HDFC Bank typically offer on personal loans?",
    answer:
      "Under Reserve Bank of India compromise settlement guidelines and HDFC Bank's internal Retail Assets Collections recovery matrices, debt waivers on unsecured personal loans typically range between 40% and 65% of the total outstanding dues for accounts classified as Non-Performing Assets (NPAs). The final waiver percentage depends on verifiable borrower hardship, documentation of involuntary job loss or medical disability, asset classification age past 90 to 180 days, and the waiver of accrued penal interest, compound charges, and late payment penalties. When represented by Bar Council advocates presenting a structured legal hardship dossier, borrowers frequently achieve substantial principal reductions alongside the total elimination of all non-principal interest levies.",
  },
  {
    id: "faq-2",
    question: "How long after defaulting does HDFC Bank become open to a settlement negotiation?",
    answer:
      "HDFC Bank operates strictly within RBI prudential provisioning norms where accounts transition from Special Mention Account stages (SMA-0, SMA-1, SMA-2) during the initial 90 days of default into formal Non-Performing Asset (NPA) status on the 91st day. Genuine compromise settlement negotiations typically become viable once an account crosses 90 to 120 days of delinquency, as the bank must make statutory capital provisions against unserviced credit exposure. Approaching HDFC's Retail Asset Collections department too early when the account is in standard status will result in summary rejection, whereas an advocate-led legal representation initiated after NPA classification maximizes waiver leverage before third-party litigations escalate.",
  },
  {
    id: "faq-3",
    question: "How can I verify that an HDFC settlement letter is genuine and not fabricated by agents?",
    answer:
      "An authentic HDFC Bank Settlement Sanction Letter is issued exclusively on the bank's official corporate letterhead bearing a unique system-generated reference number, the specific credit card or loan account number, an itemized breakdown of the agreed compromise sum, and an unambiguous deadline for payment. It must be digitally signed or stamped by an authorized manager from HDFC Bank's Retail Assets Collections department and must instruct payment directly into your own loan account number rather than any third-party agency account. Borrowers must cross-verify the settlement reference number with HDFC's designated branch manager or through the official grievance desk before transferring any settlement funds.",
  },
  {
    id: "faq-4",
    question: "What happens if I have both an HDFC credit card and an HDFC salary account?",
    answer:
      "HDFC Bank routinely invokes the Right of Set-Off and Banker's General Lien under Section 171 of the Indian Contract Act, 1872, enabling the bank to automatically freeze or debit funds deposited in your HDFC savings or salary account to offset unpaid credit card or personal loan dues without prior court sanction. However, under judicial precedents established by the Supreme Court of India, a bank cannot arbitrarily deprive an individual of their basic subsistence wages or funds held in a statutory fiduciary capacity. When facing an imminent default, advocates advise opening a separate operating account with an unrelated banking institution while issuing formal legal notices restraining arbitrary account freezes.",
  },
  {
    id: "faq-5",
    question: "Can HDFC Bank file a police case or arrest a borrower for an unpaid personal loan?",
    answer:
      "Defaulting on an unsecured personal loan or credit card account is purely a civil contractual dispute governed by the Indian Contract Act, 1872, and does not constitute a cognizable criminal offense under the Bharatiya Nyaya Sanhita (BNS) or the erstwhile Indian Penal Code (IPC). Neither HDFC Bank nor its empanelled recovery agents have the legal authority to register an FIR, dispatch police personnel, or effect an arrest for genuine inability to repay unsecured credit. Criminal summons can only arise if post-dated security cheques or NACH electronic debit mandates bounce under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, in which case formal advocate representation secures immediate judicial bail.",
  },
  {
    id: "faq-6",
    question: "What is the step-by-step procedure to settle an HDFC Jumbo Credit Card loan?",
    answer:
      "An HDFC Jumbo Loan (or InstaLoan) is an unsecured credit facility extended beyond the primary credit limit of an HDFC credit card, linked to a distinct sub-account number. To settle a Jumbo loan, the borrower's advocate conducts a comprehensive audit to separate the core credit card balance from the amortized loan ledger, ensuring both liability streams are addressed simultaneously. A formal compromise proposal supported by verified medical or financial hardship evidence is submitted to HDFC's credit card collections hierarchy, demanding a consolidated settlement sanction letter that expressly covenants to close both the primary card account and the linked Jumbo loan under a unified compromise release.",
  },
  {
    id: "faq-7",
    question: "Will an HDFC loan settlement reflect as 'Settled' or 'Written Off' in my CIBIL report?",
    answer:
      "Following the successful execution of an HDFC Bank compromise settlement, HDFC's compliance department reports the account closure to credit bureaus including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax as 'Settled' or 'Post-Write-Off Settled' under the Credit Information Companies (Regulation) Act, 2005. While this indicator notes that the account was closed for less than the total contractual balance, it completely halts negative delinquent reporting, ongoing penalty accumulations, and active litigation markers. Over twelve to twenty-four months post-settlement, borrowers can systematically rebuild their credit profiles to prime scores above 750 through disciplined usage of secured credit builder cards and timely bureau reconciliation.",
  },
  {
    id: "faq-8",
    question: "What legal notice should be sent if HDFC recovery agents visit my home without notice?",
    answer:
      "If HDFC Bank collection agents visit your residence without prior notice, use abusive language, contact neighbours or relatives, or visit outside the RBI-permitted window of 08:00 AM to 07:00 PM, they violate the RBI Master Directions on Fair Practices Code for Lenders and Supreme Court directives in the ICICI Bank vs. Prakash Kaur precedent. An enrolled Bar Council advocate immediately serves a comprehensive Cease-and-Desist Legal Notice upon HDFC Bank's Managing Director, Principal Nodal Officer, and recovery agency heads, placing the unlawful actions on formal legal record. If the harassment continues, a statutory complaint is filed before the RBI Integrated Ombudsman and jurisdictional judicial magistrates for criminal intimidation.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Vikramaditya Sen",
  authorRole: "Senior Product Manager • Unsecured Debt & Credit Card Restructuring",
  reviewBody:
    "I had accumulated over 14 lakhs across two HDFC credit cards and an unsecured personal loan after a sudden layoff. HDFC's collection agencies were calling my relatives daily. AMA Legal Solutions issued a formal legal notice halting the agent harassment and negotiated directly with HDFC's retail asset managers to secure a 55% waiver with a legitimate bank sanction letter.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "HDFC Bank Loan Settlement: Credit Card & Personal Loan OTS Process",
      description:
        "Struggling with HDFC credit card debt or jumbo personal loans? Learn the official HDFC loan settlement process, waiver percentages, and legal rights with advocates.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "HDFC Bank Loan Settlement: Credit Card & Personal Loan OTS Process",
      description:
        "Authoritative legal guide on HDFC Bank loan settlement for personal loans and credit cards. Discover the 90-day NPA process, waiver percentages, Section 138/25 defense, and advocate-led compromise procedures.",
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
      name: "Advocate-Led HDFC Bank Loan & Credit Card Settlement Legal Representation",
      description:
        "Specialized legal counsel and formal compromise negotiation for HDFC Bank personal loans, credit card debt, Jumbo loans, and SmartDraft overdrafts with complete protection against recovery harassment and Section 138/25 litigation.",
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
          name: "Loan Settlement for HDFC Bank",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Stage Advocate Protocol for HDFC Bank Loan Settlement",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Portfolio Audit & Penal Charge Recalculation",
          description:
            "Thorough analysis of loan account statements, credit card ledgers, interest capitalizations, and unbundled charges to isolate core principal from compounding usurious penal interest.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Advocate Cease-and-Desist Notice & Harassment Injunction",
          description:
            "Serving formal legal notice under RBI Fair Practices Code on HDFC Retail Asset heads, immediately restraining unauthorized telecallers, domestic visits, and unlawful workplace disclosures.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bona Fide Hardship Representation & NPA Settlement Submission",
          description:
            "Drafting verified hardship dossiers substantiating involuntary job loss, business cessation, or catastrophic medical crises submitted directly to HDFC's designated settlement committee.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Official Settlement Sanction Letter Verification",
          description:
            "Forensic vetting of the bank's written OTS compromise letter to verify genuine signatures, official reference codes, waiver covenants, and structured payment schedules.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Payment Supervision, No Dues Certificate & CIBIL Bureau Updating",
          description:
            "Supervising direct payment into the borrower's loan account, securing the unconditional No Dues Certificate, and enforcing credit bureau status updates to 'Settled'.",
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
  { id: "quick-answer", title: "Quick Answer: HDFC Loan Settlement" },
  { id: "hdfc-collections-framework", title: "HDFC Collections & NPA Framework" },
  { id: "loan-categories-settlement", title: "Personal Loans, Credit Cards & Jumbo Debt" },
  { id: "why-advocate-representation", title: "Why Bar Council Advocates are Mandatory" },
  { id: "comparative-defense-matrix", title: "Institutional Comparison Matrix" },
  { id: "the-5-stage-protocol", title: "5-Stage Advocate Settlement Protocol" },
  { id: "signature-infographic", title: "Settlement & Relief Architecture" },
  { id: "parallel-litigation-defense", title: "Defense: Sec 138 NI Act & Sec 25 PSSA" },
  { id: "halting-recovery-harassment", title: "Halting Illegal Agent Harassment" },
  { id: "salary-account-protection", title: "Salary Account Freeze & Banker's Lien" },
  { id: "settlement-letter-verification", title: "Verifying HDFC Settlement Letters & NDC" },
  { id: "cibil-credit-rehabilitation", title: "CIBIL Reporting & Credit Rehabilitation" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Legal Advisory" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function LoanSettlementForHdfcBankClient() {
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
    assetType: "HDFC Credit Card & Personal Loan",
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
    const textMsg = `Hello AMA Legal Solutions, I require confidential advocate consultation regarding HDFC Bank loan and credit card settlement in India.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Matter Type: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory for HDFC debt compromise and harassment protection."}`;
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
      assetType: "HDFC Credit Card & Personal Loan",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "HDFC Bank Loan Settlement: Credit Card & Personal Loan OTS Process – AMA Legal Solutions";
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
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    {
      label: "Loan Settlement for HDFC Bank",
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
                <span>🏦</span> HDFC Retail Assets Debt Resolution &amp; OTS Advocates
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                HDFC Bank Loan Settlement: <span className="text-[#D2A02A]">Credit Card &amp; Personal Loan OTS Process</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Struggling with compounding HDFC credit card interest, unmanageable Jumbo loans, or distressed personal loan defaults?
                AMA Legal Solutions provides senior advocate representation to navigate HDFC Bank&apos;s Retail Assets Collections hierarchy,
                halt aggressive recovery agent harassment under RBI Fair Practices norms, defend against Section 138 NI Act and Section 25 PSSA summons,
                and secure verified One-Time Settlement (OTS) sanction letters with structured debt waivers through transparent fixed legal advisory.
              </p>

              {/* Author & Meta Row */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2">
                <div className="flex items-center gap-3">
                  <img
                    src="/anujbhiya.png"
                    alt="Advocate Anuj Anand Malik"
                    className="w-12 h-12 rounded-full border-2 border-[#D2A02A] object-cover shadow"
                  />
                  <div>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-sm font-bold text-[#1a202c] hover:text-[#D2A02A] transition"
                    >
                      Anuj Anand Malik
                    </Link>
                    <p className="text-xs text-gray-500">
                      Founder &amp; Senior Advocate &bull; Enrolled Bar Council of Delhi
                    </p>
                  </div>
                </div>

                <div className="h-8 w-px bg-gray-300 hidden sm:block" />

                <div className="text-xs text-gray-500 space-y-0.5">
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <span>🛡️</span> Reviewed by Team AMA Legal Solutions
                  </div>
                  <div className="flex items-center gap-3">
                    <span>📅 28-09-2026</span>
                    <span>⏱️ 14 Min Read</span>
                  </div>
                </div>
              </div>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ✓ HDFC 90-Day NPA Protocol
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  ✓ 40% to 65% Waiver Thresholds
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  ✓ 100% Bar Council Legal Privileged
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                  ✓ Section 138 &amp; 25 PSSA Defense
                </span>
              </div>
            </div>

            {/* Right Col — Generated Luxury OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/loan-settlement-for-hdfc-bank.png"
                  alt="HDFC Bank Loan Settlement – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Authoritative HDFC Debt Resolution
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Official OTS Sanction Letters &bull; Zero Third-Party Risk &bull; Full Discharge
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
                  Google Verified Client Reviews
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⚖️</span> Bar Council
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Licensed High Court Advocates
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🛡️</span> Section 126
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Absolute Legal Privilege
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> Genuine NDC
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Authentic Bank Sanction Letters
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
                  Published: <span className="font-semibold text-gray-700">September 28, 2026</span> &bull; Practice Area: <span className="font-semibold text-gray-700">Banking Law, Debt Settlement &amp; Criminal Defense</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Share:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-8 h-8 rounded-lg bg-gray-100 text-gray-800 hover:bg-black hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on Twitter / X"
                    aria-label="Share on Twitter / X"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-8 h-8 rounded-lg bg-sky-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on LinkedIn"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-8 h-8 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="h-8 px-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1.5 transition cursor-pointer shadow-xs text-xs font-semibold"
                    title="Copy Page Link"
                    aria-label="Copy Page Link"
                  >
                    {shareMsg ? (
                      <>
                        <FaCheck className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-700 font-bold text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* ── 1. STANDALONE QUICK-ANSWER BLOCK ── */}
              <section id="quick-answer" className="scroll-mt-28">
                <div className="p-6 md:p-8 bg-amber-50 border-l-4 border-[#D2A02A] rounded-r-2xl shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">💡</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5A4C33]">
                      Quick-Answer Definition &bull; Statutory Standard
                    </span>
                  </div>
                  <p className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                    HDFC Bank loan settlement is a formal compromise agreement negotiated between a defaulting borrower and HDFC Bank&apos;s Retail Assets Collections department to close an unsecured personal loan or credit card account for a reduced lump-sum payment. Following 90 to 180 days of default (NPA classification), borrowers facing genuine financial hardship can negotiate waivers ranging from 40% to 65% of the total outstanding balance, culminating in an official HDFC Settlement Sanction Letter and a No Dues Certificate.
                  </p>
                </div>
              </section>

              {/* ── 2. HDFC COLLECTIONS & NPA FRAMEWORK ── */}
              <section id="hdfc-collections-framework" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  HDFC Bank Retail Assets Collections Architecture &amp; The 90-Day NPA Trigger
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  As India&apos;s largest private sector financial institution, HDFC Bank operates a highly systematic, algorithmic collection machinery governed by the Reserve Bank of India&apos;s prudential guidelines on income recognition, asset classification, and provisioning. Borrowers defaulting on unsecured retail exposures—including consumer personal loans, credit card balances, and revolving overdraft lines—are subject to precise regulatory staging before compromise negotiations can lawfully commence.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Days 1 – 30</div>
                    <h3 className="font-extrabold text-base text-[#1a202c] mb-2">SMA-0 Stage</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Handled by internal automated call centres and SMS systems. Focuses on procedural reminders and late payment fee assessments. Compromise settlements are not entertained at this operational stage.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50">
                    <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Days 31 – 60 / 61 – 90</div>
                    <h3 className="font-extrabold text-base text-[#1a202c] mb-2">SMA-1 &amp; SMA-2 Stages</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Escalated to internal field agents. NACH mandates and post-dated cheques are presented repeatedly, triggering dishonour notices and compounding penal interest rates exceeding 36% to 42% annually.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
                    <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Day 91+</div>
                    <h3 className="font-extrabold text-base text-[#1a202c] mb-2">NPA Classification</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Statutory Non-Performing Asset under RBI master directions. HDFC must allocate provisioning capital from profits. The account moves to Retail Assets Collections managers empowered to grant OTS waivers.
                    </p>
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Borrowers mistakenly attempt to request debt settlements while their account remains in SMA-0 or SMA-1 status. At that juncture, bank branch staff have no statutory authority to reduce principal or cancel charges. Real compromise negotiations become legally viable only after the 90-day threshold, when HDFC Bank faces institutional incentives to write off uncollectible debt and recover liquid capital rather than expend legal resources on prolonged civil litigation.
                </p>
              </section>

              {/* ── 3. LOAN CATEGORIES SETTLEMENT SPECIFICS ── */}
              <section id="loan-categories-settlement" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Personal Loans, Credit Cards, Jumbo Loans &amp; SmartDraft Overdrafts
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  HDFC Bank markets multiple retail debt instruments, each carrying distinct contractual underwriting and legal enforcement mechanics. Settling these accounts requires tailoring the legal defense to the specific contract structure:
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <h3 className="font-bold text-lg text-[#1a202c] mb-2 flex items-center gap-2">
                      <span className="text-[#D2A02A]">💳</span> HDFC Credit Card Settlement (Millennia, Regalia, Infinia &amp; Co-Branded)
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Credit cards carry exorbitant finance charges ranging from 3.6% to 3.75% per month (43% to 45% APR), compounded monthly alongside GST on finance charges and exorbitant late payment penalties. In a credit card default, over 50% to 65% of the claimed balance often comprises usurious compounding charges rather than actual merchant transactions. Advocates audit billing statements to strip away illegitimate penal interest, targeting settlement waivers between 50% and 65% based strictly on core principal expenditure.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <h3 className="font-bold text-lg text-[#1a202c] mb-2 flex items-center gap-2">
                      <span className="text-[#D2A02A]">📑</span> HDFC Jumbo Credit Card Loans &amp; InstaLoans
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      HDFC frequently offers pre-approved Jumbo loans or InstaLoans disbursed against a separate credit card sub-ledger. Borrowers often face dual recovery actions: one for the regular revolving card and another for the amortized Jumbo EMIs. Because Jumbo loans are structured under separate loan account numbers, an amateur settlement that addresses only the credit card leaves the Jumbo loan in active default. AMA Legal Solutions ensures that both facilities are legally bundled into a single comprehensive settlement sanction letter to achieve an indivisible complete release.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <h3 className="font-bold text-lg text-[#1a202c] mb-2 flex items-center gap-2">
                      <span className="text-[#D2A02A]">💼</span> Unsecured HDFC Personal Loans &amp; Business Growth Loans
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Unsecured personal loans feature fixed EMI schedules with post-dated cheques or NACH electronic clearing mandates. Upon non-payment, HDFC&apos;s legal vendors routinely dispatch statutory demand notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act (PSSA). Our advocates formulate structured legal replies challenging the validity of the statutory notice while simultaneously engaging regional retail collection heads to negotiate a sustainable compromise settlement.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-xs">
                    <h3 className="font-bold text-lg text-[#1a202c] mb-2 flex items-center gap-2">
                      <span className="text-[#D2A02A]">📈</span> SmartDraft Overdraft Facilities
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      SmartDraft facilities allow salaried individuals or professionals to draw overdraft limits against salary credits or mutual fund holdings. When overdraft drawing power is frozen following employment disruption, the interest compounds aggressively. Legal representation ensures that any underlying collateral is protected from wrongful distress invocation while negotiating an affordable lump-sum compromise for the unencumbered portion.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 4. WHY AN ADVOCATE-LED LAW FIRM IS MANDATORY ── */}
              <section id="why-advocate-representation" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Why Retaining an Enrolled Bar Council Advocate is Mandatory
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Borrowers facing mounting debt frequently encounter non-advocate commercial &ldquo;debt settlement agencies&rdquo; and call-center apps advertising miraculous loan erasures. Engaging these unregulated third parties is legally precarious and often exacerbates legal vulnerability.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Under <strong>Section 30 of the Advocates Act, 1961</strong>, only advocates enrolled with a State Bar Council possess the statutory right to practice law, enter appearances before judicial magistrates, file Vakalatnamas, and provide privileged counsel. Commercial debt consulting firms and telecalling settlement apps are non-legal corporate entities. They cannot represent you before a Metropolitan Magistrate in Section 138 cheque bounce proceedings, cannot enter appearance in Section 25 PSSA summons, cannot petition the Banking Ombudsman, and cannot prevent property attachments.
                </p>
                <div className="p-6 bg-[#FAF7F0] border border-[#D2A02A]/40 rounded-xl space-y-3">
                  <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                    <span>🛡️</span> Statutory Privilege Under Section 126 of the Indian Evidence Act, 1872
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    All communications between a borrower and an enrolled advocate at AMA Legal Solutions are protected by absolute statutory confidentiality. Under Section 126 of the Indian Evidence Act, no court or creditor can compel an advocate to disclose financial hardship documentation, banking secrets, or confidential disclosures. In contrast, unregulated telecalling settlement agencies regularly monetize client data, share debtor lists with third-party recovery firms, and operate without statutory accountability or professional indemnity.
                  </p>
                </div>
              </section>

              {/* ── 5. COMPARATIVE DEFENSE MATRIX ── */}
              <section id="comparative-defense-matrix" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Institutional Comparison Matrix: Evaluating Your Legal Defense Options
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Navigating an HDFC Bank default requires evaluating the institutional mechanisms available. The comparative matrix below demonstrates why advocate-led representation is the sole pathway providing both legal protection and authentic bank release.
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left text-xs md:text-sm text-gray-700 border-collapse">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="p-4 font-bold uppercase tracking-wider border-b border-gray-700">Evaluation Parameter</th>
                        <th className="p-4 font-bold uppercase tracking-wider border-b border-gray-700 bg-red-950/40 text-red-200">Unregulated Telecaller Agency</th>
                        <th className="p-4 font-bold uppercase tracking-wider border-b border-gray-700 bg-gray-800 text-gray-200">Self-Negotiation by Borrower</th>
                        <th className="p-4 font-bold uppercase tracking-wider border-b border-gray-700 bg-[#5A4C33] text-[#D2A02A]">AMA Legal Solutions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Legal Authority in Court</td>
                        <td className="p-4 text-red-700 font-medium">None. Cannot appear before Magistrates or Tribunals.</td>
                        <td className="p-4 text-amber-700 font-medium">Self-representation (vulnerable to aggressive bank counsel).</td>
                        <td className="p-4 text-emerald-800 font-semibold">Enrolled High Court Advocates with full statutory audience under Sec 30.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Section 138 &amp; 25 PSSA Defense</td>
                        <td className="p-4 text-red-700 font-medium">Zero defense; warrants and criminal summons issued unchecked.</td>
                        <td className="p-4 text-amber-700 font-medium">Unaware of procedural defects or technical limitation defenses.</td>
                        <td className="p-4 text-emerald-800 font-semibold">Formal reply, appearance, personal exemption, and judicial bail management.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Anti-Harassment Injunction</td>
                        <td className="p-4 text-red-700 font-medium">Cannot issue legal notices; agents intensify visits.</td>
                        <td className="p-4 text-amber-700 font-medium">Ignored or intimidated by aggressive recovery callers.</td>
                        <td className="p-4 text-emerald-800 font-semibold">Cease-and-Desist legal notice under RBI Fair Practices Code &amp; Supreme Court rulings.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Settlement Verification</td>
                        <td className="p-4 text-red-700 font-medium">High incidence of fake receipts and fabricated agent PDFs.</td>
                        <td className="p-4 text-amber-700 font-medium">Risks paying into rogue collection accounts without valid NDC.</td>
                        <td className="p-4 text-emerald-800 font-semibold">Direct institutional vetting of official HDFC Settlement Sanction Letters.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Waiver Percentage Achieved</td>
                        <td className="p-4 text-red-700 font-medium">Minimal (agents protect their recovery commissions).</td>
                        <td className="p-4 text-amber-700 font-medium">Sub-optimal (15% to 30% waiver granted as standard concession).</td>
                        <td className="p-4 text-emerald-800 font-semibold">Substantial 40% to 65% waivers based on verified hardship dossiers.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Fee &amp; Engagement Transparency</td>
                        <td className="p-4 text-red-700 font-medium">Opaque hidden cuts, monthly retainer traps, zero indemnity.</td>
                        <td className="p-4 text-gray-600 font-medium">Direct cost, but massive financial risk from flawed agreements.</td>
                        <td className="p-4 text-emerald-800 font-semibold">Transparent fixed legal advisory without hourly markups or surprise retainers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── 6. THE 5-STAGE ADVOCATE PROTOCOL ── */}
              <section id="the-5-stage-protocol" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Stage Advocate Protocol for HDFC Bank Loan Settlement
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  AMA Legal Solutions implements a time-tested, multi-stage legal protocol designed to neutralize creditor pressure, establish bona fide financial hardship, and secure an authentic, legally binding compromise closure from HDFC Bank.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 p-6 bg-[#FAF7F0] border border-[#D2A02A]/30 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg shrink-0">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-lg text-[#1a202c]">
                        Forensic Debt Portfolio Audit &amp; Penal Charge Isolation
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Our banking advocates conduct an exhaustive forensic line-item audit of all HDFC loan accounts, credit card statements, and Jumbo agreements. We isolate legitimate principal withdrawals from compounded finance charges, penal interest levies, collection expenses, and unbundled service charges. This establishes the genuine contractual core balance, which serves as the factual benchmark for compromise negotiations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-[#FAF7F0] border border-[#D2A02A]/30 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg shrink-0">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-lg text-[#1a202c]">
                        Vakalatnama Issuance &amp; Anti-Harassment Injunction Notice
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        We issue a formal Legal Representation Notice and Cease-and-Desist directive to HDFC Bank&apos;s Retail Assets Collection department, the Principal Nodal Officer, and outsourced recovery vendors. Invoking the RBI Fair Practices Code for Lenders, the circular on Recovery Agents, and Supreme Court precedent, we mandate that all future communication be routed exclusively to our legal chambers, halting unauthorized home visits, abusive telecalling, and third-party workplace disclosures.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-[#FAF7F0] border border-[#D2A02A]/30 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg shrink-0">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-lg text-[#1a202c]">
                        Bona Fide Hardship Representation &amp; NPA Settlement Submission
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Compromise settlements under RBI prudential directions require substantiation of genuine financial incapacity. We compile an airtight Hardship Dossier containing certified termination letters, medical treatment records, business income drops, bank statements, and tax filings. This petition is formally submitted to HDFC Bank&apos;s regional settlement committee, demonstrating that a structured One-Time Settlement represents the optimal commercial outcome for the bank.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-[#FAF7F0] border border-[#D2A02A]/30 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg shrink-0">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-lg text-[#1a202c]">
                        Forensic Settlement Sanction Letter Verification
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        When HDFC Bank agrees to a compromise sum, our legal team scrutinizes the written Settlement Sanction Letter. We verify that it is issued on authentic HDFC Bank stationery with a system-tracked reference number, accurately specifies all linked card and loan account numbers, provides adequate payment timelines (lump-sum or structured tranches), and contains an explicit covenant that no further balance remains payable.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-[#FAF7F0] border border-[#D2A02A]/30 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg shrink-0">
                      5
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-extrabold text-lg text-[#1a202c]">
                        Payment Supervision, No Dues Certificate &amp; CIBIL Bureau Updating
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        We oversee the direct disbursement of the settled compromise amount into the borrower&apos;s designated HDFC loan account via verified banking channels (NEFT/RTGS). Once credited, we enforce the issuance of the unconditional No Dues Certificate (NDC) and monitor statutory reporting under the Credit Information Companies (Regulation) Act, 2005, ensuring credit bureaus update the status to &ldquo;Settled&rdquo; and withdraw all delinquent collection markers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 7. SIGNATURE INFOGRAPHIC CARD ── */}
              <section id="signature-infographic" className="scroll-mt-28">
                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D2A02A] mb-2">
                      Strategic Legal Blueprint &bull; HDFC Bank Resolution
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c] mb-4">
                      HDFC Bank Loan Settlement Architecture &amp; Legal Protocol
                    </h3>
                    <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-gray-200 shadow-md my-2">
                      <img
                        src="/images/og/loan-settlement-for-hdfc-bank.png"
                        alt="HDFC Bank Loan Settlement Architecture and OTS Workflow Infographic"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-3 max-w-2xl leading-relaxed">
                      Infographic Overview: The institutional lifecycle of HDFC retail debt settlement—from 90-day NPA classification, advocate-led hardship representation, and Section 138/25 PSSA defense, to authentic bank sanction letters and CIBIL status rehabilitation.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 8. PARALLEL LITIGATION DEFENSE ── */}
              <section id="parallel-litigation-defense" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Parallel Court Defense: Section 138 NI Act &amp; Section 25 PSSA Summons
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  A frequent tactic deployed by HDFC Bank&apos;s legal collection recovery wings is the concurrent initiation of quasi-criminal prosecution against defaulting borrowers to extract coerced full payments. Understanding these statutory provisions is vital for maintaining leverage during settlement negotiations:
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-white border-l-4 border-red-600 rounded-r-xl shadow-xs">
                    <h3 className="font-bold text-base text-[#1a202c] mb-1">
                      Section 138 of the Negotiable Instruments Act, 1881 (Cheque Dishonour)
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      When a post-dated security cheque or repayment instrument bounces due to insufficient funds, the bank serves a statutory demand notice within 30 days of dishonour. Failure to pay within 15 days allows the lender to file a criminal complaint before a Judicial Magistrate. Our advocates examine the validity of the statutory notice, challenge the presentation of blank undated security cheques given at loan inception, file formal appearance petitions, secure bail, and leverage compoundable provisions under Section 147 of the NI Act to dismiss proceedings upon execution of the OTS agreement.
                    </p>
                  </div>

                  <div className="p-5 bg-white border-l-4 border-amber-600 rounded-r-xl shadow-xs">
                    <h3 className="font-bold text-base text-[#1a202c] mb-1">
                      Section 25 of the Payment and Settlement Systems Act, 2007 (NACH / e-Mandate Bounce)
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Electronic clearing mandates (e-NACH) registered for monthly EMIs that bounce are prosecuted under Section 25 of the PSSA, which carries penal provisions identical to Section 138. Many borrowers ignore PSSA legal notices until a bailable or non-bailable warrant is issued by the magistrate. AMA Legal Solutions enters formal appearance, obtains recall of warrants, and ensures that the concurrent criminal complaint is unconditionally withdrawn as an express written condition of the HDFC settlement sanction.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 9. HALTING RECOVERY HARASSMENT ── */}
              <section id="halting-recovery-harassment" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Halting Third-Party Recovery Agent Harassment &amp; Enforcing RBI Mandates
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Despite explicit regulatory prohibitions, outsourced collection agencies frequently resort to unlawful intimidation tactics, including relentless phone calls from spoofed numbers, threatening WhatsApp messages, calling personal relatives or professional employers, and unannounced visits by musclemen to residential societies.
                </p>
                <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-4">
                  <h3 className="font-bold text-base text-[#1a202c]">
                    Enforceable Protections Under RBI Master Directions:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold mt-0.5">&bull;</span>
                      <span><strong>Restricted Calling Hours:</strong> Recovery agents may contact borrowers only between 08:00 AM and 07:00 PM. Calls outside this window violate RBI Fair Practices Code.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold mt-0.5">&bull;</span>
                      <span><strong>Privacy &amp; Workplace Boundaries:</strong> Contacting colleagues, employers, distant relatives, or neighbours is strictly prohibited and constitutes an actionable tort of defamation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold mt-0.5">&bull;</span>
                      <span><strong>Mandatory Identification:</strong> Field agents must display an official HDFC Bank authorization identity card and a copy of the formal authorization notice before requesting any discussion.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold mt-0.5">&bull;</span>
                      <span><strong>Judicial Precedent (Supreme Court of India):</strong> In <em>ICICI Bank vs. Prakash Kaur (2007)</em>, the Supreme Court unequivocally ruled that banks cannot deploy musclemen or third-party recovery agents to recover debt through intimidation or unlawful force.</span>
                    </li>
                  </ul>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Upon retention, AMA Legal Solutions issues formal Cease-and-Desist directives putting HDFC Bank on notice. If violations persist, we file immediate statutory complaints before the Reserve Bank of India Integrated Ombudsman and initiate criminal proceedings for intimidation and extortion.
                </p>
              </section>

              {/* ── 10. SALARY ACCOUNT PROTECTION & BANKER'S LIEN ── */}
              <section id="salary-account-protection" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Salary Account Freeze &amp; The Right of Set-Off (Section 171 Contract Act)
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  A common hazard faced by individuals holding both an HDFC credit card or personal loan and an HDFC savings or salary account is the sudden, automated debiting of all deposited funds. Banks justify this unilateral seizure by invoking the <strong>Right of Set-Off</strong> and <strong>Banker&apos;s General Lien</strong> under Section 171 of the Indian Contract Act, 1872.
                </p>
                <div className="p-5 bg-amber-50/70 border border-amber-300 rounded-xl space-y-2">
                  <h3 className="font-bold text-base text-[#5A4C33]">
                    Critical Legal Safeguards Regarding Salary Accounts:
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    1. <strong>Mutuality of Accounts:</strong> The Right of Set-Off can only be exercised between accounts held in the exact same legal capacity. Funds held in trust, joint accounts with non-borrowers, or designated gratuity/provident fund credits cannot be unilaterally appropriated.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    2. <strong>Subsistence Protection:</strong> Judicial precedents establish that sweeping a borrower&apos;s entire monthly salary, leaving them destitute without basic living funds, violates natural justice and public policy.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    3. <strong>Immediate Preventive Action:</strong> If you anticipate an HDFC loan default, our advocates advise formally notifying your employer to redirect monthly salary disbursements to an unrelated banking institution before delinquency reaches the 60-day mark, neutralizing unilateral debit threats.
                  </p>
                </div>
              </section>

              {/* ── 11. SETTLEMENT LETTER & NDC VERIFICATION ── */}
              <section id="settlement-letter-verification" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Anatomy of a Genuine HDFC Settlement Sanction Letter vs Fake Receipts
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  One of the gravest dangers in debt resolution is the proliferation of fraudulent settlement receipts generated by rogue third-party collection agents. Desperate borrowers frequently pay significant sums directly to collection staff, only to discover weeks later that the bank credited the amount merely as a partial overdue payment while the loan remains in active default.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/40 space-y-2">
                    <h3 className="font-bold text-red-900 text-sm flex items-center gap-1.5">
                      <span>⚠️</span> Red Flags: Fabricated Agent Receipts
                    </h3>
                    <ul className="text-xs text-gray-700 space-y-1.5">
                      <li>&bull; Issued on plain paper or poor resolution, low-quality scanned logos.</li>
                      <li>&bull; Sent via unofficial personal email IDs (e.g. @gmail.com or @agency.com) rather than @hdfcbank.com.</li>
                      <li>&bull; Requests payment in cash, UPI to an individual name, or cheque to an agency.</li>
                      <li>&bull; Lacks an itemized breakdown of waived interest, principal, and charges.</li>
                      <li>&bull; No verifiable settlement approval reference number in HDFC core banking.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
                    <h3 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                      <span>✅</span> Checklist: Authentic HDFC Sanction Letter
                    </h3>
                    <ul className="text-xs text-gray-700 space-y-1.5">
                      <li>&bull; Issued on official HDFC Bank Limited letterhead with registered office details.</li>
                      <li>&bull; Features a unique corporate approval reference code linked to core systems.</li>
                      <li>&bull; Explicitly lists all credit card numbers, Jumbo loan accounts, or personal loan IDs.</li>
                      <li>&bull; Clear schedule of payment dates and instructions to pay into the borrower&apos;s loan account.</li>
                      <li>&bull; Express commitment to issue the No Dues Certificate (NDC) upon final installment.</li>
                    </ul>
                  </div>
                </div>

                <p className="text-base text-gray-700 leading-relaxed">
                  AMA Legal Solutions independently verifies every settlement offer directly with HDFC Bank&apos;s Retail Asset Collections heads and authorized branch signatories before any client funds are disbursed, ensuring absolute legal finality.
                </p>
              </section>

              {/* ── 12. CIBIL CREDIT REHABILITATION ── */}
              <section id="cibil-credit-rehabilitation" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  CIBIL Bureau Reporting &amp; Post-Settlement Credit Rehabilitation
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  A common question from borrowers is how an HDFC compromise settlement impacts their long-term creditworthiness. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), commercial banks are legally mandated to report accurate loan performance data to credit bureaus, including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax.
                </p>
                <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-4">
                  <h3 className="font-bold text-base text-[#1a202c]">
                    Understanding the Difference: &ldquo;Settled&rdquo; vs &ldquo;Written Off&rdquo; vs &ldquo;Active Default&rdquo;
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      <strong>Active Default:</strong> Outstanding balance grows monthly due to penal interest. The account reflects 90+, 120+, or 180+ DPD (Days Past Due). The credit score deteriorates continuously, and legal notices appear on credit records.
                    </p>
                    <p>
                      <strong>Post-Write-Off Settled:</strong> The account is formally closed. The balance reflects as zero, and compounding delinquent reporting stops immediately. While the &ldquo;Settled&rdquo; remark indicates a partial compromise, it represents a stable closed status that enables future credit rehabilitation.
                    </p>
                    <p>
                      <strong>Credit Rebuilding Roadmap:</strong> Within 12 to 24 months after obtaining the authentic No Dues Certificate, borrowers can rehabilitate their score from suppressed levels to prime ratings (750+) by securing a fixed-deposit-backed credit card, maintaining credit utilization below 30%, and ensuring zero missed payments across new obligations.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 13. TRANSPARENT FIXED LEGAL ADVISORY ── */}
              <section id="transparent-fixed-advisory" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Transparent Fixed Legal Advisory: Accessible Advocate Representation
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, our founding principle is legal accessibility. Distressed borrowers facing an overwhelming financial crisis should not be subjected to unpredictable hourly billing or exorbitant corporate law firm retainers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  <div className="p-5 bg-white border border-[#D2A02A]/40 rounded-xl space-y-2 shadow-xs">
                    <div className="text-2xl">⚖️</div>
                    <h3 className="font-bold text-base text-[#1a202c]">Transparent Fixed Advisory</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Every engagement is governed by a transparent, upfront legal advisory structure without open-ended hourly fees or surprise litigation billing.
                    </p>
                  </div>
                  <div className="p-5 bg-white border border-[#D2A02A]/40 rounded-xl space-y-2 shadow-xs">
                    <div className="text-2xl">🚫</div>
                    <h3 className="font-bold text-base text-[#1a202c]">No Hourly Markups</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We eliminate corporate law firm bloat. You receive dedicated advocate representation focused entirely on achieving maximum waiver percentages and full legal release.
                    </p>
                  </div>
                  <div className="p-5 bg-white border border-[#D2A02A]/40 rounded-xl space-y-2 shadow-xs">
                    <div className="text-2xl">🛡️</div>
                    <h3 className="font-bold text-base text-[#1a202c]">Enrolled Bar Council Counsel</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      All pleadings, notices, and compromise negotiations are conducted exclusively by licensed advocates upholding strict professional ethics.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 14. 8-QUESTION ACCORDION FAQ ── */}
              <section id="frequently-asked-questions" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Frequently Asked Questions (Statutory &amp; Procedural Answers)
                </h2>
                <p className="text-sm text-gray-600">
                  Authoritative legal answers based on the Reserve Bank of India prudential norms, the Indian Contract Act, 1872, and the Advocates Act, 1961.
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 bg-white"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-base text-gray-900 hover:text-[#D2A02A] transition cursor-pointer"
                        aria-expanded={openFaqIndex === idx}
                        aria-controls={faq.id}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-[#D2A02A] text-sm">Q{idx + 1}.</span>
                          <span>{faq.question}</span>
                        </span>
                        <span className="text-gray-400 text-lg shrink-0">
                          {openFaqIndex === idx ? "−" : "+"}
                        </span>
                      </button>

                      {openFaqIndex === idx && (
                        <div
                          id={faq.id}
                          className="px-5 pb-5 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-4 bg-[#FAF7F0]/30"
                        >
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ── 15. MORE LEGAL GUIDES INTERNAL GRID ── */}
              <section id="internal-guides" className="space-y-6 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                  More Legal Debt Relief Guides &amp; Banking Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    href="/loan-settlement-for-axis-bank"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Bank Guide</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Axis Bank Loan Settlement &amp; Waiver Procedure
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        Comprehensive legal guide on Axis Bank personal loan and credit card settlement.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/settlement-waiver-percentage-of-hdfc-bank"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Waiver Metrics</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Settlement Waiver Percentage of HDFC Bank
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        Detailed breakdown of HDFC Bank settlement waiver slabs and hardship criteria.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/does-loan-settlement-affect-cibil-score"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">CIBIL Analysis</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Does Loan Settlement Affect CIBIL Score?
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        How credit bureaus report settled debts and actionable steps to maintain creditworthiness.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/how-to-improve-cibil-score-after-loan-settlement"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Credit Repair</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        How to Improve CIBIL Score After Settlement
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        Step-by-step roadmap to rebuild credit scores past 750 post-compromise closure.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/can-bank-reject-settlement-request"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Legal Recourse</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Can Bank Reject Settlement Request?
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        Borrower remedies when commercial banks decline compromise settlement proposals.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="p-4 rounded-xl border border-[#D2A02A]/40 bg-[#FAF7F0] hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#5A4C33] uppercase mb-1">Advocate Consultation</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Speak With Senior Banking Advocates
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        Schedule a privileged legal consultation under Section 126 of the Evidence Act.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Contact Chambers &rarr;
                    </span>
                  </Link>
                </div>
              </section>

              {/* ── 16. REFERENCES & REGULATORY AUTHORITIES ── */}
              <section id="statutory-references" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                  References &amp; Regulatory Authorities
                </h2>
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3 text-xs text-gray-600">
                  <p>
                    1. <strong>Reserve Bank of India (RBI):</strong> Complaint Management System (CMS) &amp; Integrated Ombudsman Scheme &bull;{" "}
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      cms.rbi.org.in
                    </a>
                  </p>
                  <p>
                    2. <strong>HDFC Bank Grievance Redressal Policy:</strong> Code of Commitment to Customers &amp; Nodal Officers Directory &bull;{" "}
                    <a
                      href="https://www.hdfcbank.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      hdfcbank.com
                    </a>
                  </p>
                  <p>
                    3. <strong>Department of Financial Services (DFS):</strong> Ministry of Finance, Government of India &bull;{" "}
                    <a
                      href="https://financialservices.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      financialservices.gov.in
                    </a>
                  </p>
                  <p>
                    4. <strong>Bar Council of India:</strong> Section 30 of the Advocates Act, 1961 (Exclusive Statutory Right to Practice) &bull;{" "}
                    <a
                      href="http://www.barcouncilofindia.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      barcouncilofindia.org
                    </a>
                  </p>
                </div>
              </section>

              {/* Bottom Social Share Row */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Share This Authoritative Legal Guide:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-8 h-8 rounded-lg bg-gray-100 text-gray-800 hover:bg-black hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on Twitter / X"
                    aria-label="Share on Twitter / X"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-8 h-8 rounded-lg bg-sky-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on LinkedIn"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-8 h-8 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="h-8 px-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1.5 transition cursor-pointer shadow-xs text-xs font-semibold"
                    title="Copy Page Link"
                    aria-label="Copy Page Link"
                  >
                    {shareMsg ? (
                      <>
                        <FaCheck className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-700 font-bold text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* ── 17. AMA COMPANY & MEDIA SECTION ── */}
              <section
                id="ama-company-section"
                className="mt-12 p-8 rounded-2xl bg-white border-4 border-[#D2A02A] shadow-lg text-center space-y-6 scroll-mt-28"
              >
                <div className="flex justify-center">
                  <img
                    src={LOGO_URL}
                    alt="AMA Legal Solutions"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="space-y-2 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-extrabold text-[#1a202c]">
                    AMA Legal Solutions
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    India&apos;s premier advocate-led debt resolution, banking litigation, and consumer protection law firm.
                    Headquartered in Gurugram, NCR, our senior advocates represent clients nationwide against aggressive banking
                    practices through ethical, Bar Council-regulated legal counsel.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 py-2 border-y border-gray-100 text-sm">
                  <div className="flex items-center gap-1.5 font-bold text-gray-800">
                    <Stars count={5} />
                    <span>4.7 / 5.0 Google Rating</span>
                  </div>
                  <div className="text-gray-400 hidden sm:block">&bull;</div>
                  <div className="font-semibold text-gray-700">
                    100% Licensed Bar Council Advocates
                  </div>
                  <div className="text-gray-400 hidden sm:block">&bull;</div>
                  <div className="font-semibold text-gray-700">
                    Pan-India Legal Notice &amp; Court Defense
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-4">
                    Explore Our Core Legal Solutions:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link
                      href="/services/loan-settlement"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      Loan Settlement Services
                    </Link>
                    <Link
                      href="/bankruptcy-lawyer-in-india"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      Bankruptcy &amp; Insolvency Defense
                    </Link>
                    <Link
                      href="/what-is-ots"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      RBI One-Time Settlement (OTS)
                    </Link>
                    <Link
                      href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      Section 138 &amp; 25 PSSA Defense
                    </Link>
                    <Link
                      href="/loan-settlement-amount-calculator"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      Settlement Amount Calculator
                    </Link>
                  </div>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4">
                <img
                  src="/anujbhiya.png"
                  alt="Advocate Anuj Anand Malik"
                  className="w-20 h-20 rounded-full mx-auto border-2 border-[#D2A02A] object-cover shadow"
                />
                <div>
                  <h3 className="font-extrabold text-base text-[#1a202c]">
                    Anuj Anand Malik
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Senior Advocate &bull; Founder
                  </p>
                  <p className="text-xs text-[#D2A02A] font-semibold mt-0.5">
                    Enrolled Bar Council of Delhi
                  </p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed text-left">
                  Advocate Anuj Anand Malik specializes in banking litigation, debt settlement law, and financial dispute resolution. He represents borrowers against coercive institutional recoveries and defends against Section 138 NI Act and Section 25 PSSA proceedings across Indian courts.
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <span className="text-gray-300">&bull;</span>
                  <Link
                    href="/author/anuj-anand-malik"
                    className="text-xs font-bold text-[#5A4C33] hover:text-[#D2A02A] hover:underline"
                  >
                    Author Profile
                  </Link>
                </div>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-md space-y-5">
                <div className="inline-block px-2.5 py-1 bg-[#D2A02A]/20 text-[#D2A02A] text-[11px] font-bold uppercase rounded-md tracking-wider">
                  Advocate Chambers
                </div>
                <h3 className="text-xl font-extrabold leading-snug">
                  Facing HDFC Debt Calls or Legal Notices?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Do not negotiate blindly with aggressive telecallers. Secure privileged advocate representation to halt harassment, respond to legal notices, and secure verified HDFC OTS sanction letters.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="tel:+918700343611"
                    className="w-full py-3 px-4 bg-[#D2A02A] hover:bg-[#b88c22] text-[#1a202c] font-extrabold rounded-xl transition flex items-center justify-center gap-2 text-sm shadow cursor-pointer"
                  >
                    <span>📞</span> Call +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition border border-white/20 text-sm cursor-pointer"
                  >
                    Request Callback &rarr;
                  </button>
                </div>
                <p className="text-[10px] text-gray-300 text-center">
                  Protected under Section 126 Evidence Act &bull; 100% Confidential
                </p>
              </div>

              {/* Client Reviews Card (Verbatim to Schema) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <h3 className="font-extrabold text-sm text-[#1a202c]">
                      Verified Client Review
                    </h3>
                    <p className="text-[11px] text-gray-400">Google Verified Client Feedback</p>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-sm text-gray-900">5.0 / 5.0</div>
                    <Stars count={5} />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-gray-700 italic leading-relaxed">
                    &ldquo;{clientReviewData.reviewBody}&rdquo;
                  </p>
                  <div className="pt-2">
                    <p className="text-xs font-bold text-[#1a202c]">
                      {clientReviewData.authorName}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {clientReviewData.authorRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Topic Guides */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-[#1a202c] text-xs uppercase tracking-wider border-b border-gray-100 pb-2">
                  Related Legal Guides
                </h3>
                <div className="space-y-2 text-xs">
                  <Link
                    href="/loan-settlement-for-axis-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Axis Bank Loan Settlement
                  </Link>
                  <Link
                    href="/settlement-waiver-percentage-of-hdfc-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; HDFC Settlement Waiver %
                  </Link>
                  <Link
                    href="/does-loan-settlement-affect-cibil-score"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement CIBIL Score Impact
                  </Link>
                  <Link
                    href="/how-to-improve-cibil-score-after-loan-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; CIBIL Repair After Settlement
                  </Link>
                  <Link
                    href="/can-bank-reject-settlement-request"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Can Bank Reject Settlement?
                  </Link>
                  <Link
                    href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Sec 25 PSSA vs Sec 138 NI Act
                  </Link>
                  <Link
                    href="/bankruptcy-lawyer-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Bankruptcy Lawyer in India
                  </Link>
                  <Link
                    href="/what-is-ots"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; What is RBI OTS Scheme?
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
                      HDFC Loan Settlement Evaluation
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Privileged legal consultation under Section 126 of the Indian Evidence Act.
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
                        placeholder="e.g. Vikramaditya Sen"
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
                          placeholder="e.g. name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          City / State
                        </label>
                        <input
                          type="text"
                          name="cityState"
                          value={formData.cityState}
                          onChange={handleFormChange}
                          placeholder="e.g. Bengaluru, Karnataka"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Account / Loan Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm bg-white"
                        >
                          <option value="HDFC Credit Card & Personal Loan">HDFC Credit Card &amp; Personal Loan</option>
                          <option value="HDFC Credit Card Only">HDFC Credit Card Only</option>
                          <option value="HDFC Jumbo Loan / InstaLoan">HDFC Jumbo Loan / InstaLoan</option>
                          <option value="HDFC Personal Loan Only">HDFC Personal Loan Only</option>
                          <option value="HDFC SmartDraft / Overdraft">HDFC SmartDraft / Overdraft</option>
                          <option value="Section 138 / 25 PSSA Notice">Section 138 / 25 PSSA Notice</option>
                          <option value="Multiple Lenders & Harassment">Multiple Lenders &amp; Harassment</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Brief Details of Outstanding / Collection Notices
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Mention total cards/loans, days overdue, or notices received..."
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#5A4C33] hover:bg-[#433826] text-white font-bold rounded-xl transition cursor-pointer text-sm shadow-md"
                    >
                      Proceed to Advocate Consultation &rarr;
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1a202c]">
                    Consultation Request Registered
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
                    Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Your details have been transmitted directly to our senior banking and loan resolution team under Section 126 legal privilege.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={openWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow transition cursor-pointer"
                    >
                      <span>💬</span> Connect Instantly on WhatsApp &rarr;
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Direct advocate helpline: +91-8700343611 &bull; 100% Confidential
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </>
  );
}

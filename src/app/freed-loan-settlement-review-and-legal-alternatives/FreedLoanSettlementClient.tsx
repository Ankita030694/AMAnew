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
const PAGE_SLUG = "/freed-loan-settlement-review-and-legal-alternatives";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/freed-loan-settlement-review-and-legal-alternatives.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-28";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Is Freed an RBI-registered NBFC or a law firm?",
    answer:
      "Freed is a private debt relief and management company operated by a corporate entity rather than a licensed banking institution, an RBI-regulated Non-Banking Financial Company (NBFC), or a registered law firm. Because it is neither a financial institution licensed to disburse credit nor an advocate firm enrolled with the Bar Council of India, it functions solely as an unregulated commercial intermediary facilitating informal negotiations between borrowers and partnered lending institutions.",
  },
  {
    id: "faq-2",
    question: "What happens if a bank files a court case while I am enrolled in Freed's program?",
    answer:
      "If a creditor bank or NBFC initiates judicial litigation—such as criminal summons under Section 138 of the Negotiable Instruments Act, Section 25 of the Payment and Settlement Systems Act, or an arbitration claim—private debt settlement platforms cannot enter an appearance on your behalf. Under Sections 29 and 30 of the Advocates Act, 1961, corporate entities and non-advocate staff are statutorily barred from practicing law or representing litigants before judicial courts, requiring the borrower to independently engage licensed advocates to avoid bailable warrants or ex-parte awards.",
  },
  {
    id: "faq-3",
    question: "Can debt settlement apps stop bank recovery agents from visiting my home?",
    answer:
      "Debt management apps typically lack the statutory authority to issue binding legal injunctions or formal Cease-and-Desist notices against lender recovery wings. In contrast, an enrolled Bar Council advocate issues formal statutory notices citing the RBI Fair Practices Code, Article 21 constitutional privacy protections, and criminal intimidation provisions under Section 351 BNS (Section 503 IPC), holding bank principal nodal officers personally accountable and halting coercive home visits within 24 to 48 hours.",
  },
  {
    id: "faq-4",
    question: "How do debt relief platform fee models compare to advocate retainers?",
    answer:
      "Debt relief platforms typically charge a monthly administrative subscription combined with a success-based percentage deducted from pooled borrower savings upon settlement. Conversely, ethical advocate representation operates under transparent fixed legal advisory without percentage cuts of your hard-earned relief, eliminating hourly billing markups and surprise retainers while providing comprehensive court defense, legal notice replies, and privileged attorney-client confidentiality under Section 126 of the Indian Evidence Act.",
  },
  {
    id: "faq-5",
    question: "Why are private debt settlement apps legally barred from appearing in court?",
    answer:
      "The legal bar is established by Section 29 and Section 30 of the Advocates Act, 1961, which recognize enrolled advocates as the single, exclusive class of persons entitled to practice law, plead causes, and file vakalatnamas before any court, tribunal, or arbitration authority in India. Corporate entities, fintech apps, and unregulated settlement executives have no audience before a Judicial Magistrate or arbitrator, making any representation claims legally void and exposing enrolled borrowers to default judgments if formal court proceedings begin.",
  },
  {
    id: "faq-6",
    question: "Does enrolling in a debt management app impact my CIBIL score?",
    answer:
      "Enrolling in a debt management program does not stop creditor banks from reporting monthly overdue installments and Days Past Due (DPD) aging to TransUnion CIBIL, Experian, CRIF High Mark, or Equifax. Because informal programs require halting regular EMI payments to build pooled negotiation funds, credit bureaus reflect delinquent status until an official compromise settlement sanction letter is approved by the bank and the negotiated lump sum is directly remitted to the lending account.",
  },
  {
    id: "faq-7",
    question: "What should a borrower do if an agency fails to settle their loans after taking fees?",
    answer:
      "If a private debt resolution agency collects subscription fees or administrative deductions without securing genuine bank settlement letters or halting creditor legal summons, the borrower should immediately revoke all third-party authorization mandates and request an itemized accounting of deposited escrow funds. The borrower can file an unfair trade practice complaint under the Consumer Protection Act, 2019 before the District Consumer Disputes Redressal Commission while transitioning their loan portfolio to licensed advocates for immediate litigation protection and direct OTS negotiation.",
  },
  {
    id: "faq-8",
    question: "How does advocate-led debt resolution provide immunity from criminal summons?",
    answer:
      "Advocate-led debt resolution provides comprehensive legal immunity because enrolled advocates enter formal legal appearances in court, file timely replies to statutory notices, and petition judicial magistrates to refer contested matters to the National Lok Adalat or court-annexed mediation under Section 89 of the Code of Civil Procedure. When an official compromise One-Time Settlement is executed and paid, counsel files an immediate compounding application to quash Section 138 NI Act or Section 25 PSSA complaints, securing permanent criminal discharge and clean judicial closure.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Neeraj Batra",
  authorRole: "Operations Head • Corporate Loan & Credit Card Restructuring",
  reviewBody:
    "I initially signed up with an app-based debt relief company, paying monthly subscription charges for four months. However, when ICICI Bank filed an arbitration claim and issued a Section 25 court notice, the app team informed me they couldn't enter court appearances. I transitioned my portfolio to AMA Legal Solutions. Their advocates appeared in court, stayed the proceedings, and finalized a 52% compromise waiver with the bank.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Freed Loan Settlement Review: Is It Safe? Legal Comparison & Alternatives",
      description:
        "Considering Freed for loan settlement? Read an objective legal review of debt relief platforms vs licensed advocates, fee transparency, court representation, and risks.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Freed Loan Settlement Review: Is It Safe? Legal Comparison & Alternatives",
      description:
        "Comprehensive objective legal evaluation of Freed and app-based debt relief platforms in India. Explores legal standing under the Advocates Act 1961, court appearance limits, Section 138 NI Act and Section 25 PSSA defense, fee structures, and advocate-led alternatives.",
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
      name: "Advocate-Led Loan Settlement & Legal Alternative to Debt Relief Apps",
      description:
        "Direct Bar Council advocate representation and One-Time Settlement (OTS) negotiation with banks and NBFCs, providing binding court defense, Section 138 NI Act protection, Section 25 PSSA representation, and transparent fixed legal advisory.",
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
          name: "Freed Loan Settlement Review & Legal Alternatives",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Stage Advocate Protocol for Debt Settlement & Legal Protection",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Digital Ledger Audit & Usurious Fee Stripping",
          description:
            "Auditing bank and NBFC statements to eliminate compounding penal interest, bounce charges, and unbundled fees, determining the net principal baseline.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Emergency Anti-Harassment Injunction & Cease-and-Desist Notice",
          description:
            "Serving formal legal notice under RBI Fair Practices Code on bank Principal Nodal Officers, halting recovery agent visits and workplace harassment within 24 to 48 hours.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Defense Against Cheque Bounce, NACH Summons & Arbitrations",
          description:
            "Filing formal advocate appearances in Section 138 NI Act, Section 25 PSSA, and arbitration proceedings, ensuring zero default warrants or ex-parte awards.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "High-Level Direct Negotiation with Bank Stressed Asset Committees",
          description:
            "Presenting documented bona fide hardship to bank corporate recovery leadership to negotiate maximum compromise waivers on the audited principal.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Official Bank OTS Sanction Letter Verification & NDC Procurement",
          description:
            "Forensically vetting the official bank sanction letter, supervising direct payment into the loan account, and securing the unconditional No Dues Certificate.",
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
  { id: "quick-answer", title: "Quick Answer: Freed Review & Legal Limits" },
  { id: "what-is-freed-how-it-works", title: "What is Freed & How Does the App Operate?" },
  { id: "freed-real-or-fake-scrutiny", title: "Is Freed Safe & Real? Regulatory Scrutiny" },
  { id: "advocates-act-court-bar", title: "Why Apps Cannot Represent You in Court" },
  { id: "institutional-comparison-matrix", title: "Comparative Matrix: Apps vs Law Firms" },
  { id: "risks-of-active-litigation", title: "Active Litigation Risks (Sec 138 & Sec 25)" },
  { id: "recovery-agent-harassment-limits", title: "Stopping Recovery Agents: Apps vs Advocates" },
  { id: "signature-infographic", title: "Legal Resolution & Relief Architecture" },
  { id: "the-5-stage-protocol", title: "5-Stage Advocate Settlement Protocol" },
  { id: "cibil-credit-rehabilitation", title: "CIBIL Score Impact & Bureau Repair" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Legal Advisory" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function FreedLoanSettlementClient() {
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
    assetType: "Personal Loan & Credit Card Debt",
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
    const textMsg = `Hello AMA Legal Solutions, I require confidential advocate consultation regarding loan settlement and legal alternatives to debt relief apps in India.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Matter Type: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory for bank compromise, court defense, and advocate-led debt resolution."}`;
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
      assetType: "Personal Loan & Credit Card Debt",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Freed Loan Settlement Review: Is It Safe? Legal Comparison & Alternatives – AMA Legal Solutions";
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
      label: "Freed Loan Settlement Review & Legal Alternatives",
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
                <span>⚖️</span> Objective Legal Review &bull; Bar Council Regulated Practice
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Freed Loan Settlement Review: <span className="text-[#D2A02A]">Is It Safe? Legal Comparison &amp; Alternatives</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Evaluating debt relief apps like Freed for your overdue personal loans and credit cards? Understand the crucial legal boundaries between private fintech telecaller platforms and licensed Bar Council advocates. Discover why non-advocate companies are statutorily barred from representing you in court under the Advocates Act, 1961, how Section 138 and Section 25 criminal notices are handled, and why advocate-certified legal representation is vital for complete debt freedom.
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
                    <span>⏱️ 16 Min Read</span>
                  </div>
                </div>
              </div>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ✓ Section 29 &amp; 30 Advocates Act Analysis
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  ✓ Section 138 NI Act &amp; 25 PSSA Defense
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  ✓ 100% Bar Council Legal Privileged
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                  ✓ Direct Bank OTS Sanction Letter Verification
                </span>
              </div>
            </div>

            {/* Right Col — Generated Luxury OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/freed-loan-settlement-review-and-legal-alternatives.png"
                  alt="Freed Loan Settlement Review – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Fintech Relief vs Legal Defense
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Objective Comparative Review &bull; Zero Third-Party Risk &bull; Full Court Protection
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
                  <span className="text-[#D2A02A]">🏛️</span> Pan-India
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Judicial Courts, DRT &amp; Arbitrations
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🔒</span> 100% Privilege
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Section 126 Evidence Act Protection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mb-16">
            
            {/* Left Sticky Column — Table of Contents */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            {/* Center Column — In-Depth Authoritative Substance */}
            <main className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
              
              {/* Top Meta & Social Share */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  Independent Legal Appraisal &bull; Competitor Analysis
                </div>
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

              {/* ── 1. STANDALONE QUICK-ANSWER BLOCK ── */}
              <div
                id="quick-answer"
                className="p-6 md:p-8 rounded-2xl bg-amber-50/70 border-2 border-[#D2A02A] shadow-xs space-y-3 scroll-mt-28"
              >
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#D2A02A] text-white text-[11px] font-extrabold uppercase rounded-md tracking-wider">
                    Quick-Answer Definition
                  </span>
                  <span className="text-xs font-bold text-[#5A4C33]">
                    Google Featured Snippet &amp; AI Overview Benchmark
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                  Freed is a private debt relief platform operating in India that pools borrower savings into a dedicated account to negotiate settlements with partnered lenders. While platforms like Freed assist with informal negotiations, they are corporate entities rather than law firms and cannot legally represent borrowers in judicial courts, defend against Section 138 cheque bounce proceedings, or contest bank arbitration summons. Borrowers facing active litigation or recovery agent harassment require licensed advocates enrolled with the Bar Council of India for binding court defense.
                </p>
                <p className="text-xs text-gray-500 italic">
                  Statutory references: Advocates Act, 1961 (Sections 29 &amp; 30) &bull; Bar Council of India Rules &bull; Consumer Protection Act, 2019 &bull; Negotiable Instruments Act, 1881 &bull; Payment and Settlement Systems Act, 2007.
                </p>
              </div>

              {/* ── 2. WHAT IS FREED & HOW DOES IT WORK ── */}
              <section id="what-is-freed-how-it-works" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  What is Freed App and How Does It Operate in India?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  As thousands of Indian consumers face escalating unsecured personal loan debt and compounding credit card balances, tech-enabled debt relief platforms have entered the retail market. Chief among them is <strong>Freed</strong> (operated under the corporate brand of modern debt management startups). Search queries such as <em>&quot;what is freed app&quot;</em>, <em>&quot;freed loan app&quot;</em>, and <em>&quot;how freed works&quot;</em> reflect borrowers seeking a structured exit from unmanageable EMIs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The operational framework of Freed is modeled after Western consumer debt settlement systems. When an individual enrolls in Freed&apos;s program, the standard operational cadence involves:
                </p>
                <div className="space-y-3 my-4">
                  <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] text-sm text-gray-700 space-y-1">
                    <p className="font-bold text-[#1a202c]">1. Dedicated Savings Accumulation (Special Purpose Account):</p>
                    <p>
                      Rather than continuing direct EMI payments to creditor banks (such as HDFC Bank, ICICI Bank, SBI Cards, or Bajaj Finserv), the borrower is advised to deposit a structured monthly amount into a pooled special-purpose escrow account.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] text-sm text-gray-700 space-y-1">
                    <p className="font-bold text-[#1a202c]">2. Intentional Delinquency &amp; Aging:</p>
                    <p>
                      Because institutional lenders generally refuse compromise discussions on performing accounts, the borrower&apos;s debt must become delinquent, transitioning past 90 days into Non-Performing Asset (NPA) status. During this phase, collection calls inevitably spike.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] text-sm text-gray-700 space-y-1">
                    <p className="font-bold text-[#1a202c]">3. Informal Commercial Negotiation Desk:</p>
                    <p>
                      Once sufficient capital has accumulated in the pooled savings account, Freed&apos;s corporate settlement executives reach out to bank collection managers to negotiate a lump-sum compromise settlement waiver.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] text-sm text-gray-700 space-y-1">
                    <p className="font-bold text-[#1a202c]">4. Settlement Execution &amp; Fee Deductions:</p>
                    <p>
                      If a bank accepts the compromise offer, accumulated funds are remitted to the lender to close the account, and the platform levies its agreed administrative and success-based service charges.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  While this commercial process sounds straightforward on a digital interface, Indian banking operates within a rigid legal and statutory framework. An informal commercial desk cannot address the statutory reality of judicial summons, arrest warrants, bailable warrants, and criminal court notices that lenders regularly issue during delinquency.
                </p>
              </section>

              {/* ── 3. REAL OR FAKE SCRUTINY ── */}
              <section id="freed-real-or-fake-scrutiny" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Freed Review: Is It Safe, Real, or Fake?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A frequent question in search engine queries is <em>&quot;freed loan settlement is real or fake&quot;</em> and <em>&quot;is freed app safe&quot;</em>. From an objective legal perspective, Freed is a real, registered private corporate entity operating in India. It is not an outright fraudulent phantom entity or an unregistered fly-by-night operation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  However, saying a company is &quot;real&quot; does not answer whether entrusting your legal liabilities to a fintech platform is legally sound or safe. The primary risk factors arise from what debt settlement companies <strong>cannot legally do</strong> under Indian law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                  <li>
                    <strong>Not an RBI-Regulated Financial Entity:</strong> Debt relief companies are not NBFCs or banks. They do not operate under the statutory supervision of the Reserve Bank of India, meaning borrowers lack access to the RBI Banking Ombudsman for disputes arising specifically from the platform&apos;s internal delays.
                  </li>
                  <li>
                    <strong>Not a Registered Law Firm:</strong> Under the statutory framework governing Indian jurisprudence, a private company cannot practice law, cannot provide attorney-client privileged counsel, and cannot enter court appearances.
                  </li>
                  <li>
                    <strong>No Statutory Protection Against Litigation:</strong> Depositing money with a third-party app does not create legal immunity. Banks are under no legal obligation to delay judicial proceedings, arbitration hearings, or criminal complaints under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act simply because a customer enrolled in an app.
                  </li>
                  <li>
                    <strong>Escrow &amp; Monthly Retainer Risk:</strong> If a borrower enrolls and pays monthly subscription charges for six months, but the creditor bank refuses to negotiate and instead issues a court summons, the borrower is left vulnerable with diminished liquidity and zero in-court representation.
                  </li>
                </ul>
              </section>

              {/* ── 4. ADVOCATES ACT SECTION 29 & 30 BAR ── */}
              <section id="advocates-act-court-bar" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Why Private Debt Relief Apps Are Legally Barred from Court Representation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The most crucial limitation that every distressed borrower must understand before signing up with an app-based settlement service is found in the <strong>Advocates Act, 1961</strong>. The legislation creates a statutory monopoly over legal practice and judicial representation to protect citizens:
                </p>
                
                <blockquote className="p-4 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl italic text-gray-700 text-sm">
                  &ldquo;Section 29 of the Advocates Act, 1961 stipulates that subject to the provisions of this Act and any rules made thereunder, there shall, as from the appointed day, be only one class of persons entitled to practise the profession of law, namely, advocates.&rdquo;
                </blockquote>

                <blockquote className="p-4 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl italic text-gray-700 text-sm">
                  &ldquo;Section 30 of the Advocates Act, 1961 confers upon every advocate whose name is entered in the State roll the absolute right to practise throughout the territories to which this Act extends, in all Courts including the Supreme Court, before any tribunal or person legally authorised to take evidence, and before any other authority.&rdquo;
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  In clear, unambiguous terms: corporate entities, private limited companies, fintech applications, telecallers, and customer support representatives are <strong>strictly barred by statute from representing litigants</strong>. They cannot draft a judicial Vakalatnama, cannot stand before a Chief Judicial Magistrate, cannot cross-examine bank witnesses, cannot argue before a Sole Arbitrator in Delhi or Mumbai, and cannot move an application for compounding or quashing criminal charges.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When you engage a private debt settlement company, you are hiring a commercial negotiating agent—not a legal defense counsel. If your creditor bank decides to accelerate recovery through court notices, that agency must step aside, leaving you completely exposed unless you independently retain an enrolled High Court advocate.
                </p>
              </section>

              {/* ── 5. INSTITUTIONAL COMPARISON MATRIX ── */}
              <section id="institutional-comparison-matrix" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Institutional Comparison: Freed &amp; Debt Relief Apps vs Licensed Law Firms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide full clarity for searchers evaluating debt settlement options, the comparative table below details the critical statutory, procedural, and operational differences between private debt relief apps and Bar Council-regulated advocate representation.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse border border-gray-200 text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#1a202c] text-white">
                        <th className="p-3 sm:p-4 border border-gray-700 font-bold">Evaluation Parameter</th>
                        <th className="p-3 sm:p-4 border border-gray-700 font-bold text-amber-300">Freed &amp; Debt Relief Apps</th>
                        <th className="p-3 sm:p-4 border border-gray-700 font-bold text-[#D2A02A]">AMA Legal Solutions (Advocates)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Statutory Governing Body</td>
                        <td className="p-3 sm:p-4">Ministry of Corporate Affairs (MCA) as private corporate entities.</td>
                        <td className="p-3 sm:p-4 font-semibold text-[#1a202c]">Bar Council of India &amp; State Bar Councils under Advocates Act, 1961.</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Judicial Court Representation</td>
                        <td className="p-3 sm:p-4 text-red-600 font-medium">Legally Prohibited. Cannot file Vakalatnama or represent before magistrates.</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">Full Statutory Right. Enrolled advocates appear across all Indian courts.</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Section 138 NI Act Defense</td>
                        <td className="p-3 sm:p-4">Cannot defend or file court replies to criminal cheque bounce complaints.</td>
                        <td className="p-3 sm:p-4 font-semibold text-[#1a202c]">Drafts statutory 15-day replies, secures bail, and files for compounding disposal.</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Section 25 PSSA (NACH Bounce)</td>
                        <td className="p-3 sm:p-4">No legal standing to appear before Metropolitan Magistrates.</td>
                        <td className="p-3 sm:p-4 font-semibold text-[#1a202c]">Immediate court appearance, exemption applications, and dispute compounding.</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Bank Arbitration Notices</td>
                        <td className="p-3 sm:p-4">Advises borrowers to ignore or cannot contest unilateral sole arbitrator appointments.</td>
                        <td className="p-3 sm:p-4 font-semibold text-[#1a202c]">Challenges unilateral appointments under Section 11 &amp; Perkins Eastman precedent.</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Halting Recovery Agent Harassment</td>
                        <td className="p-3 sm:p-4">Informal call-center requests that rogue recovery telecallers routinely disregard.</td>
                        <td className="p-3 sm:p-4 font-semibold text-[#1a202c]">Formal Cease-and-Desist legal notices served directly on Bank Nodal Officers.</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Client Confidentiality Privilege</td>
                        <td className="p-3 sm:p-4">Commercial data privacy only; subject to corporate disclosure and subpoena.</td>
                        <td className="p-3 sm:p-4 font-semibold text-[#1a202c]">Absolute legal professional privilege under Section 126 of Indian Evidence Act.</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Fee Structure &amp; Billing</td>
                        <td className="p-3 sm:p-4">Monthly subscription charges plus success-based percentage fee of settled debt.</td>
                        <td className="p-3 sm:p-4 font-semibold text-[#1a202c]">Transparent fixed legal advisory without percentage cuts or surprise retainers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── 6. ACTIVE LITIGATION RISKS ── */}
              <section id="risks-of-active-litigation" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The Reality of Active Litigation While Enrolled in App Programs
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When a borrower stops paying EMIs to accumulate capital in a debt app&apos;s special-purpose account, the lending bank does not pause its recovery apparatus. Within 60 to 90 days of default, major banks like HDFC, ICICI, Axis, Kotak, and SBI routinely trigger multi-track legal actions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <h3 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">⚖️</span> Section 138 NI Act Summons
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Lenders deposit security cheques collected during loan origination. When dishonored, a criminal complaint is filed before a Judicial Magistrate. Ignoring summons leads directly to bailable and non-bailable warrants. An app customer support executive cannot enter court to secure your bail.
                    </p>
                  </div>
                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <h3 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">📜</span> Section 25 PSSA NACH Bounce
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Electronic NACH / e-mandate failures trigger quasi-criminal proceedings under Section 25 of the Payment and Settlement Systems Act, 2007. Lenders issue strict 15-day demand notices followed by magistrate complaints. Timely advocate drafting is required to prevent judicial process.
                    </p>
                  </div>
                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <h3 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">🏛️</span> Unilateral Arbitration Claims
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Banks frequently initiate unilateral arbitrations seated in distant hubs like Chennai, Mumbai, or Pune under the Arbitration and Conciliation Act, 1996. If unrepresented, an ex-parte arbitral award is passed that converts into an executable civil decree against your assets.
                    </p>
                  </div>
                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <h3 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">📑</span> Summary Civil Suits (Order 37 CPC)
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Lenders file summary recovery suits under Order 37 of the Code of Civil Procedure in district civil courts. If leave to defend is not filed by an enrolled advocate within the strict 10-day statutory window, the court immediately decrees the full claim against the borrower.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This illustrates the dangerous gap in relying solely on private debt settlement apps: while you are patiently saving money on your smartphone screen, bank legal departments are securing binding judicial orders in real courts. Without advocate representation, you risk severe court orders before any settlement can even be discussed.
                </p>
              </section>

              {/* ── 7. RECOVERY AGENT HARASSMENT LIMITS ── */}
              <section id="recovery-agent-harassment-limits" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Stopping Recovery Agent Harassment: Why Digital Apps Fail Where Advocates Succeed
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers frequently sign up with debt management programs hoping the platform will shield them from relentless recovery calls and home visits. Unfortunately, aggressive third-party collection agencies operating on behalf of private banks and NBFCs frequently ignore emails or requests from fintech companies. Recovery agents know that private apps possess zero regulatory power or statutory teeth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In contrast, when an enrolled Bar Council advocate takes over your matter, the legal dynamic shifts instantly:
                </p>
                <div className="space-y-3 my-4">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-gray-800 space-y-1">
                    <p className="font-bold text-emerald-900">Formal Advocate Legal Notice to Principal Nodal Officers:</p>
                    <p>
                      Our advocates serve an official statutory Cease-and-Desist Notice directly on the lender&apos;s Principal Nodal Officer, Head of Stressed Assets, and Managing Director. The notice places the institution on strict legal warning under the Reserve Bank of India&apos;s Master Directions on Outsourcing and the Fair Practices Code.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-gray-800 space-y-1">
                    <p className="font-bold text-emerald-900">Invoking Criminal Intimidation Statutes:</p>
                    <p>
                      If recovery personnel threaten family members, use abusive language, or visit workplaces, our notice cites Section 351 of the Bharatiya Nyaya Sanhita (BNS) / Section 503 IPC (Criminal Intimidation) and Section 66E of the Information Technology Act for invasion of privacy. Institutional compliance officers immediately pull third-party agents off the file to avoid corporate criminal exposure.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-gray-800 space-y-1">
                    <p className="font-bold text-emerald-900">Direct Ombudsman &amp; NALSA Escalation:</p>
                    <p>
                      Any ongoing harassment is escalated through formal complaints before the RBI Integrated Ombudsman and National Legal Services Authority (NALSA), compelling the lender to channel all future communication strictly through legal counsel.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 8. SIGNATURE EDITORIAL INFOGRAPHIC CARD ── */}
              <div
                id="signature-infographic"
                className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm space-y-4 scroll-mt-28"
              >
                <div className="text-center space-y-1">
                  <span className="px-3 py-1 bg-[#D2A02A] text-white text-xs font-bold uppercase rounded-full tracking-wider">
                    Institutional Relief Architecture
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    The Legal Safeguard Framework: Apps vs Advocate Chambers
                  </h3>
                  <p className="text-xs text-gray-500 max-w-xl mx-auto">
                    Comparing the legal boundaries of fintech debt platforms against statutory Bar Council advocate representation in India.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
                  <img
                    src="/images/og/freed-loan-settlement-review-and-legal-alternatives.png"
                    alt="Freed Loan Settlement Review Infographic – Legal Protection Framework"
                    className="w-full h-auto object-contain block"
                  />
                  <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600">
                    <div>
                      <strong>Key Takeaway:</strong> Non-advocate entities are barred from court representation under Sections 29 &amp; 30 of the Advocates Act, 1961.
                    </div>
                    <div className="font-bold text-[#D2A02A]">
                      AMA Legal Solutions &bull; Official Review &amp; Analysis
                    </div>
                  </div>
                </div>
              </div>

              {/* ── 9. THE 5-STAGE ADVOCATE PROTOCOL ── */}
              <section id="the-5-stage-protocol" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Stage Advocate Settlement Protocol: A Legally Binding Alternative
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Rather than gambling your financial future on informal telecallers, AMA Legal Solutions executes a structured, 5-stage legal protocol designed to neutralize bank coercion and achieve maximum legal relief under RBI One-Time Settlement (OTS) frameworks:
                </p>

                <div className="space-y-6 my-6">
                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                        1
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Forensic Digital Ledger Audit &amp; Usurious Fee Stripping
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pl-11">
                      Our banking advocates conduct a comprehensive forensic audit of all loan agreements, sanction letters, and account statements. We identify and legally dispute compounding penal interest, bounce charges, unauthorized insurance add-ons, and excessive late fees, stripping the recorded balance back down to the authentic net principal.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                        2
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Emergency Anti-Harassment Injunction &amp; Cease-and-Desist Notice
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pl-11">
                      We dispatch a formal advocate notice to the lender&apos;s Principal Nodal Officer and recovery management heads. The notice cites the RBI Fair Practices Code, constitutional privacy protections under Article 21, and Section 351 BNS, establishing immediate personal accountability and directing all communication exclusively to counsel.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                        3
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Comprehensive Court Defense (Sec 138, Sec 25 &amp; Arbitration)
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pl-11">
                      If the lender initiates proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, our advocates file formal court appearances, secure bail, prevent default warrants, and challenge unilateral arbitrator appointments under the Supreme Court precedent in <em>Perkins Eastman</em>.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                        4
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Direct Strategic Negotiation with Stressed Asset Recovery Committees
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pl-11">
                      We bypass external collection agencies and negotiate directly with bank Zonal Stressed Asset Management Branches (SAMB) and Settlement Committees. Leveraging documented medical hardship, involuntary job loss, or business insolvency, we negotiate substantial principal waivers under internal bank compromise matrices.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                        5
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Sanction Letter Verification, Direct Payment &amp; No Dues Certificate
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pl-11">
                      Before any compromise funds are remitted, our counsel verifies the authenticity of the official One-Time Settlement sanction letter on bank letterhead. We ensure funds are paid strictly into the borrower&apos;s loan account—never to a third-party escrow or agency—and follow through until the unconditional No Dues Certificate (NDC) and CIBIL status update are formally delivered.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 10. CIBIL BUREAU IMPACT & CREDIT REHABILITATION ── */}
              <section id="cibil-credit-rehabilitation" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  CIBIL Bureau Impact, Post-Settlement Credit Rehabilitation &amp; Clean Closure
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A common point of confusion among borrowers evaluating Freed is how debt settlement impacts credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark). When any loan or credit card is settled for less than the contractual balance, the creditor bank updates the bureau status from &quot;Standard&quot; to <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-Off Settled&quot;</strong>.
                </p>
                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 text-sm text-gray-800 space-y-2">
                  <p className="font-bold text-[#1a202c]">Critical Credit Bureau Clarifications:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>No Platform Can Guarantee Clean Bureau Closure Without Full Payment:</strong> Any debt relief agency claiming they can settle debt at a deep discount while keeping your CIBIL score unaffected or reporting &quot;Closed&quot; without paying the remaining balance is providing inaccurate information.
                    </li>
                    <li>
                      <strong>Settled vs Written-Off:</strong> A &quot;Settled&quot; status is far superior to a continuous &quot;Default / Written-Off&quot; status with active recovery litigation. It legally terminates borrower liability, halts legal accruals, and allows credit rebuilding to commence immediately.
                    </li>
                    <li>
                      <strong>Converting &apos;Settled&apos; to &apos;Closed&apos; Later:</strong> If your financial situation improves in future years, our advocates can coordinate with the lender to pay the waived difference under a formal closure schedule, updating your credit bureau records to a pristine &quot;Closed&quot; status.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── 11. TRANSPARENT FIXED LEGAL ADVISORY ── */}
              <section id="transparent-fixed-advisory" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Transparent Fixed Legal Advisory: Accessible Representation Without Surprise Costs
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing financial distress often assume that hiring an experienced banking litigation advocate is out of reach, fearing corporate law firm billing models with unpredictable hourly rates and open-ended retainers. Conversely, app-based platforms market themselves as low-cost, yet their ongoing monthly subscription deductions combined with percentage cuts of your negotiated relief can accumulate significantly over time.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, we operate under a philosophy of <strong>complete legal accessibility and transparent advocate engagement</strong>:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <h3 className="font-extrabold text-[#1a202c] text-sm">
                      Transparent Fixed Advisory
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We provide defined, fixed legal advisory without hourly markups, surprise retainers, or hidden administrative overheads. You know exactly what your advocate engagement entails from day one.
                    </p>
                  </div>
                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <h3 className="font-extrabold text-[#1a202c] text-sm">
                      Zero Cuts of Your Relief
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Unlike debt management platforms that claim a percentage cut of the negotiated waiver amount, 100% of the financial relief secured through bank negotiations remains entirely yours.
                    </p>
                  </div>
                  <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
                    <h3 className="font-extrabold text-[#1a202c] text-sm">
                      All-Inclusive Legal Defense
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Our advocate retainer covers notice drafting, court appearances, arbitration defense, anti-harassment escalation, and direct OTS negotiations under full Bar Council professional ethics.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  By eliminating excessive corporate law firm retainers while avoiding the legal deficiencies of unregulated telecaller platforms, AMA Legal Solutions delivers gold-standard legal defense accessible to salaried professionals, small business owners, and distressed borrowers across India.
                </p>
              </section>

              {/* ── 12. FREQUENTLY ASKED QUESTIONS (ACCORDION) ── */}
              <section id="frequently-asked-questions" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-4">
                  <span className="px-2.5 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold uppercase rounded-md tracking-wider">
                    Statutory &amp; Procedural Answers
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-2">
                    Frequently Asked Questions About Freed &amp; Debt Settlement in India
                  </h2>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Direct, authoritative legal answers targeting borrower search intent under Indian banking statutes.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs transition"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#D2A02A] transition cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm md:text-base leading-snug">
                            {faq.question}
                          </span>
                          <span
                            className={`w-7 h-7 rounded-full flex items-center justify-center bg-gray-100 text-[#1a202c] text-lg font-bold shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180 bg-[#D2A02A] text-white" : ""
                            }`}
                          >
                            &darr;
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── 13. MORE LEGAL GUIDES INTERNAL LINKS ── */}
              <section id="internal-guides" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl font-extrabold text-[#1a202c]">
                  More Legal Debt Relief Guides
                </h2>
                <p className="text-xs md:text-sm text-gray-600">
                  Explore authoritative guides on loan settlement, agency evaluations, bank OTS processes, and court litigation defense:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  <Link
                    href="/best-loan-settlement-agencies-in-india"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#D2A02A] hover:shadow-sm transition group"
                  >
                    <p className="text-xs font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Best Loan Settlement Agencies in India &rarr;
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Objective legal comparison of agencies vs law firms.
                    </p>
                  </Link>

                  <Link
                    href="/which-companies-offer-the-best-loan-settlement-plans-for-personal-loans"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#D2A02A] hover:shadow-sm transition group"
                  >
                    <p className="text-xs font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Best Personal Loan Settlement Plans &rarr;
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Evaluating company credibility and structured options.
                    </p>
                  </Link>

                  <Link
                    href="/compare-loan-settlement-companies-that-work-with-personal-loans"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#D2A02A] hover:shadow-sm transition group"
                  >
                    <p className="text-xs font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Compare Loan Settlement Companies &rarr;
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Cross-comparing fee models, court risks, and relief.
                    </p>
                  </Link>

                  <Link
                    href="/best-apps-for-managing-loan-settlement-offers-in-India"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#D2A02A] hover:shadow-sm transition group"
                  >
                    <p className="text-xs font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Best Apps for Managing Loan Offers &rarr;
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Fintech tools vs advocate negotiation frameworks.
                    </p>
                  </Link>

                  <Link
                    href="/loan-settlement-amount-calculator"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#D2A02A] hover:shadow-sm transition group"
                  >
                    <p className="text-xs font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Loan Settlement Amount Calculator &rarr;
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Estimate OTS waivers and net principal baselines.
                    </p>
                  </Link>

                  <Link
                    href="/contact"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[#D2A02A] hover:shadow-sm transition group"
                  >
                    <p className="text-xs font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Confidential Advocate Consultation &rarr;
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      Speak directly with our senior banking litigation counsel.
                    </p>
                  </Link>
                </div>
              </section>

              {/* ── 14. REFERENCES & AUTHORITY LINKS ── */}
              <section id="statutory-references" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-bold text-[#1a202c]">
                  References &amp; Regulatory Authorities
                </h2>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-xs text-gray-600 leading-relaxed">
                  <p>
                    1. <strong>Bar Council of India:</strong> Statutory regulatory body under the Advocates Act, 1961 governing legal practice, court appearances, and professional ethics &bull;{" "}
                    <a
                      href="http://www.barcouncilofindia.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      barcouncilofindia.org
                    </a>
                  </p>
                  <p>
                    2. <strong>National Legal Services Authority (NALSA):</strong> Statutory authority for Lok Adalats and pre-litigation dispute resolution &bull;{" "}
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      nalsa.gov.in
                    </a>
                  </p>
                  <p>
                    3. <strong>Reserve Bank of India (RBI) Complaint Management System:</strong> Integrated Banking Ombudsman Portal &bull;{" "}
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
                    4. <strong>Department of Consumer Affairs:</strong> National Consumer Helpline for unfair trade practices &bull;{" "}
                    <a
                      href="https://consumerhelpline.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      consumerhelpline.gov.in
                    </a>
                  </p>
                </div>
              </section>

              {/* Bottom Social Share Row */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Share This Objective Legal Review:
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

              {/* ── 15. AMA COMPANY & MEDIA SECTION ── */}
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
                    and NBFC practices through ethical, Bar Council-regulated legal counsel.
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
                    Pan-India Legal Notice &amp; Arbitration Defense
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
                      href="/loan-settlement-for-bajaj-finserv"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      Bajaj Finserv Settlement
                    </Link>
                    <Link
                      href="/loan-settlement-for-hdfc-bank"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      HDFC Bank Loan Settlement
                    </Link>
                    <Link
                      href="/loan-settlement-for-sbi-bank"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      SBI Loan Settlement
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
                  Advocate Anuj Anand Malik specializes in banking litigation, debt settlement law, and financial dispute resolution. He represents borrowers against coercive institutional recoveries and defends against Section 138 NI Act, Section 25 PSSA, and unilateral corporate arbitrations across Indian courts.
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
                  Facing Bank Notices or Evaluating Debt Apps?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Do not rely on informal telecallers when facing bank litigation or recovery harassment. Secure privileged advocate representation for binding court defense, Section 138/25 PSSA representation, and verified OTS sanction letters.
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
                    href="/best-loan-settlement-agencies-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Loan Settlement Agencies in India
                  </Link>
                  <Link
                    href="/which-companies-offer-the-best-loan-settlement-plans-for-personal-loans"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Personal Loan Settlement Plans
                  </Link>
                  <Link
                    href="/compare-loan-settlement-companies-that-work-with-personal-loans"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Compare Debt Settlement Companies
                  </Link>
                  <Link
                    href="/best-apps-for-managing-loan-settlement-offers-in-India"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Apps for Settlement Offers
                  </Link>
                  <Link
                    href="/loan-settlement-for-bajaj-finserv"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Bajaj Finserv Loan Settlement
                  </Link>
                  <Link
                    href="/loan-settlement-for-hdfc-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; HDFC Bank Loan Settlement
                  </Link>
                  <Link
                    href="/loan-settlement-for-sbi-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; SBI Bank Loan Settlement
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
                    href="/loan-settlement-amount-calculator"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement Amount Calculator
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
                      Loan Settlement Legal Evaluation
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Privileged legal consultation under Section 126 of the Indian Evidence Act.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="Borrower / Client Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          City / State
                        </label>
                        <input
                          type="text"
                          name="cityState"
                          value={formData.cityState}
                          onChange={handleFormChange}
                          placeholder="e.g. Delhi, Mumbai, Bengaluru"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Debt / Matter Category
                      </label>
                      <select
                        name="assetType"
                        value={formData.assetType}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A] bg-white"
                      >
                        <option value="Personal Loan & Credit Card Debt">
                          Personal Loan &amp; Credit Card Debt
                        </option>
                        <option value="App-Based Debt Program Transition">
                          App-Based Debt Program Transition
                        </option>
                        <option value="Section 138 Cheque Bounce Notice">
                          Section 138 Cheque Bounce Notice
                        </option>
                        <option value="Section 25 PSSA NACH Bounce Notice">
                          Section 25 PSSA NACH Bounce Notice
                        </option>
                        <option value="Bank Arbitration Notice Received">
                          Bank Arbitration Notice Received
                        </option>
                        <option value="Severe Recovery Agent Harassment">
                          Severe Recovery Agent Harassment
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Dispute Summary / Notice Details
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Briefly describe total debt, lender names, months overdue, or notices received..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#D2A02A] hover:bg-[#b88c22] text-[#1a202c] font-extrabold rounded-xl transition text-sm shadow cursor-pointer uppercase tracking-wider mt-2"
                    >
                      Submit For Advocate Review &rarr;
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1a202c]">
                    Consultation Request Registered
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. An advocate from our debt resolution and litigation defense team will review your details shortly.
                  </p>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-left text-xs space-y-1">
                    <p>
                      <strong>Phone:</strong> {formData.phone}
                    </p>
                    <p>
                      <strong>Location:</strong> {formData.cityState || "Not Specified"}
                    </p>
                    <p>
                      <strong>Category:</strong> {formData.assetType}
                    </p>
                  </div>
                  <div className="space-y-3 pt-2">
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl transition flex items-center justify-center gap-2 text-sm shadow cursor-pointer"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Connect Directly On WhatsApp</span>
                    </button>
                    <button
                      onClick={resetModal}
                      className="text-xs text-gray-500 hover:text-gray-800 underline block mx-auto cursor-pointer"
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

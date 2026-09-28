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
const PAGE_SLUG = "/bankruptcy-lawyer-in-india";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/bankruptcy-lawyer-in-india.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-28";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Can an individual declare bankruptcy for personal loans in India?",
    answer:
      "Under Part III of the Insolvency and Bankruptcy Code, 2016 (IBC) and the Provincial Insolvency Act, 1920, individuals burdened with unmanageable personal debt have statutory avenues to seek legal relief before the Debt Recovery Tribunal (DRT) or jurisdictional district insolvency courts. When a debtor or an authorized advocate files an insolvency petition, the tribunal evaluates bona fide financial incapacity rather than wilful default, granting protection against coercive creditor recoveries. While institutional notifications for Part III personal insolvency are actively being operationalized nationwide, borrowers routinely petition DRTs and High Courts for equitable interim protections, debt restructuring, and structured compromise settlements that extinguish personal loan liabilities legally.",
  },
  {
    id: "faq-2",
    question: "What is the minimum default threshold required to file under the IBC?",
    answer:
      "Under the Insolvency and Bankruptcy Code, 2016, the statutory threshold for initiating Corporate Insolvency Resolution Process (CIRP) under Section 4 against corporate debtors is governed by the high-value default notification issued by the Ministry of Corporate Affairs (MCA). Conversely, for personal guarantors to corporate debtors under Section 94 and 95 of the IBC, petitions are admitted before the National Company Law Tribunal (NCLT) based on statutory guarantee default triggers under Part III. In individual personal loan disputes outside corporate guarantees, advocates evaluate debt magnitudes, debt-to-income ratios, and existing litigation before selecting between formal tribunal insolvency proceedings, Section 89 mediation, or structured bank compromise settlements under RBI prudential directions.",
  },
  {
    id: "faq-3",
    question: "Does filing for insolvency stop recovery agent harassment and police threats?",
    answer:
      "The instantaneous filing and registration of an insolvency application under Section 96 of the Insolvency and Bankruptcy Code, 2016 triggers a statutory interim moratorium that legally stays all pending debt recovery lawsuits, legal enforcement, and creditor actions concerning the debt. Furthermore, under the Reserve Bank of India Master Directions on the Fair Practices Code for Lenders and circulars on recovery agents, financial institutions are statutorily prohibited from deploying third-party recovery agents, making harassing phone calls outside prescribed daytime hours, or intimidating borrowers at residential premises. Once an advocate files an on-record Vakalatnama and issues formal cease-and-desist notices, any continued harassment or spurious police threats can be prosecuted through the RBI Integrated Ombudsman and jurisdictional criminal courts for contempt and unlawful intimidation.",
  },
  {
    id: "faq-4",
    question: "What happens to personal property and bank accounts after declaring bankruptcy?",
    answer:
      "During the insolvency resolution phase under the IBC, the debtor retains essential personal assets necessary for day-to-day survival, including household furniture, personal clothing, tools of trade, and basic family living provisions exempted under Section 79(14) as unencumbered excluded assets. However, non-exempt properties, surplus commercial assets, and unpledged investments become subject to scrutiny by a court-appointed Resolution Professional (RP) to formulate a viable repayment plan. Bank accounts are monitored to prevent fraudulent preferences or asset transfers under Section 95, ensuring that transparent financial rehabilitation proceeds under judicial oversight without arbitrary attachment by individual recovery collectors.",
  },
  {
    id: "faq-5",
    question: "How does personal bankruptcy affect CIBIL score and future borrowing eligibility?",
    answer:
      "Initiating an insolvency proceeding or concluding a tribunal-sanctioned compromise settlement leads commercial credit bureaus—including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax—to update the account status from active default or NPA to 'Settled' or 'Resolved under Insolvency' under the Credit Information Companies (Regulation) Act, 2005. Although this classification suppresses credit ratings in the immediate term, it permanently halts compounding overdue marks, legal notices, and penalty interest accumulations that otherwise destroy financial profiles. Over eighteen to thirty-six months post-discharge, individuals can systematically rehabilitate their credit scores through secured credit instruments, disciplined financial conduct, and timely bureau reconciliation following the issuance of authentic No Dues Certificates.",
  },
  {
    id: "faq-6",
    question: "Can a borrower travel abroad after filing an insolvency petition in India?",
    answer:
      "An insolvency petition does not impose an automatic constitutional bar on international travel, as the right to travel abroad is recognized as a fundamental liberty under Article 21 of the Constitution of India in the landmark Maneka Gandhi precedent. However, creditors or resolution professionals may petition the Debt Recovery Tribunal or High Court for travel restrictions or surrender of passports only if there is credible, verifiable evidence of absconding or flight risk under Look Out Circular (LOC) jurisprudence. Retaining an experienced bankruptcy advocate ensures that legitimate business, professional, or medical overseas travel permissions are formally secured through prior tribunal affidavits and undertaking filings without unlawful immigration interference.",
  },
  {
    id: "faq-7",
    question: "What is the difference between personal insolvency and a bank OTS settlement?",
    answer:
      "Personal insolvency is a judicial or quasi-judicial statutory proceeding conducted before the Debt Recovery Tribunal (DRT) or National Company Law Tribunal (NCLT) under the Insolvency and Bankruptcy Code, 2016, resulting in a binding court order, interim moratorium, or comprehensive debt discharge across multiple creditors. In contrast, a One-Time Settlement (OTS) is an extra-judicial contractual compromise negotiated directly between the borrower and an individual bank under RBI compromise settlement frameworks and Section 63 of the Indian Contract Act, 1872. While an OTS allows faster resolution of specific unsecured loans without public court proceedings, a formal insolvency petition provides comprehensive multi-lender protection against simultaneous criminal summons, SARFAESI proceedings, and aggressive asset executions.",
  },
  {
    id: "faq-8",
    question: "Why can only a Bar Council advocate represent borrowers before the DRT and NCLT?",
    answer:
      "Under Section 30 of the Advocates Act, 1961, only advocates enrolled on the roll of a State Bar Council possess the exclusive statutory right to practice law, plead causes, file Vakalatnamas, and represent litigants before judicial courts and statutory tribunals, including the DRT, DRAT, NCLT, and NCLAT. Non-advocate commercial debt agencies, credit counselling apps, and telecalling settlement companies have zero legal standing in court, cannot sign legal pleadings, and are strictly prohibited from appearing before magistrates or tribunal benches. Engaging an enrolled advocate guarantees Bar Council ethical oversight, enforceable professional liability, and absolute advocate-client confidentiality under Section 126 of the Indian Evidence Act, 1872, protecting the borrower from unverified third-party mishandling and legal jeopardy.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Rajeshwari Ramanathan",
  authorRole: "Director & Personal Guarantor • Insolvency & Restructuring Resolution",
  reviewBody:
    "When my manufacturing business faced severe liquidity shortfalls, multiple lenders filed SARFAESI notices and personal recovery suits. Team AMA Legal Solutions stepped in, invoked legal moratorium protections under the IBC, and represented us before the tribunal. Their senior advocates successfully restructured our unsecured liabilities into an affordable compromise settlement without asset liquidation.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Bankruptcy Lawyer in India: Personal Insolvency & IBC Debt Relief Advocates",
      description:
        "Overwhelmed by unpayable personal loans or business debt? Consult senior bankruptcy lawyers in India for insolvency filings under IBC, DRT defense, and debt relief.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Bankruptcy Lawyer in India: Personal Insolvency & IBC Debt Relief Advocates",
      description:
        "Comprehensive legal authority guide on bankruptcy lawyer representation in India. Learn how advocates file personal insolvency under IBC, invoke Section 96 interim moratoria, defend DRT actions, and negotiate binding debt relief.",
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
      name: "Advocate-Led Bankruptcy & Insolvency Legal Advisory",
      description:
        "Specialized legal counsel and tribunal representation for personal insolvency, Corporate Insolvency Resolution (CIRP), DRT defense, Section 96 interim moratoria, and bank debt compromise restructuring across India.",
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
          name: "Bankruptcy Lawyer in India",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Stage Advocate-Led Bankruptcy & Insolvency Defense Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Debt Portfolio Audit & Liability Segregation",
          description:
            "Exhaustive legal review of all loan agreements, personal guarantees, and tribunal notices to classify secured vs unsecured debt, identify usurious penal interest, and verify insolvency threshold applicability.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Vakalatnama Issuance & Section 96 Interim Moratorium Trigger",
          description:
            "Filing formal on-record advocate representation to trigger statutory interim moratorium protections under Section 96 of the IBC, immediately staying all pending civil suits, execution petitions, and recovery harassment.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bona Fide Insolvency Petition & Hardship Dossier Preparation",
          description:
            "Drafting verified petitions before the Debt Recovery Tribunal (DRT) or National Company Law Tribunal (NCLT) detailing bona fide financial distress, income loss, and legitimate repayment incapacity.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Resolution Professional Coordination & Creditor Committee Negotiation",
          description:
            "Advocate appearance before tribunal benches and consultation with the court-appointed Resolution Professional to formulate a viable debt restructuring or compromise repayment plan.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Tribunal Discharge Sanction, No Dues Enforcement & Credit Rehabilitation",
          description:
            "Securing formal tribunal discharge decrees or bank-sanctioned compromise settlements, obtaining authentic No Dues Certificates, and supervising mandatory credit bureau record reconciliation.",
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
  { id: "quick-answer", title: "Quick Answer: Bankruptcy Lawyer Role" },
  { id: "why-advocate-representation", title: "Why Bar Council Advocates are Mandatory" },
  { id: "comparative-defense-matrix", title: "Institutional Comparison Matrix" },
  { id: "statutory-ibc-framework", title: "IBC 2016 & Statutory Framework" },
  { id: "personal-insolvency-process", title: "Personal Insolvency Under Sections 94–104" },
  { id: "the-5-stage-protocol", title: "5-Stage Advocate Insolvency Protocol" },
  { id: "signature-infographic", title: "Insolvency & Relief Architecture" },
  { id: "parallel-criminal-defense", title: "Defense Against Sec 138 & Sec 25 PSSA" },
  { id: "halting-recovery-harassment", title: "Halting Illegal Recovery Agent Harassment" },
  { id: "jurisdiction-and-tribunals", title: "DRT, NCLT & Pan-India City Jurisdiction" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Legal Advisory" },
  { id: "settlement-letter-and-ndc", title: "No Dues Certificate & Full Discharge" },
  { id: "cibil-credit-rehabilitation", title: "CIBIL Rehabilitation Post-Insolvency" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function BankruptcyLawyerInIndiaClient() {
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
    assetType: "Personal Insolvency & Loans",
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
    const textMsg = `Hello AMA Legal Solutions, I require confidential advocate consultation regarding Bankruptcy & Insolvency legal defense in India.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Matter Type: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory under IBC and DRT defense."}`;
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
      assetType: "Personal Insolvency & Loans",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Bankruptcy Lawyer in India: Personal Insolvency & IBC Debt Relief Advocates – AMA Legal Solutions";
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
      label: "Bankruptcy Lawyer in India",
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
                <span>⚖️</span> Senior Advocates for Personal &amp; Corporate Insolvency
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Bankruptcy Lawyer in India: <span className="text-[#D2A02A]">Personal Insolvency &amp; IBC Debt Relief Advocates</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Overwhelmed by unpayable personal loans, insurmountable credit card balances, or distressed commercial debts?
                AMA Legal Solutions provides senior advocate representation under the Insolvency and Bankruptcy Code, 2016 (IBC),
                enforces statutory interim moratoria under Section 96 to halt creditor lawsuits and recovery harassment, and represents
                borrowers before Debt Recovery Tribunals (DRT) and the NCLT through transparent fixed legal advisory without hourly markups or surprise retainers.
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
                    <span>⏱️ 12 Min Read</span>
                  </div>
                </div>
              </div>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ✓ Section 96 Interim Moratorium
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  ✓ DRT &amp; NCLT Representation
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  ✓ 100% Bar Council Privileged Counsel
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                  ✓ RBI Anti-Harassment Enforcement
                </span>
              </div>
            </div>

            {/* Right Col — Generated Luxury OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/bankruptcy-lawyer-in-india.png"
                  alt="Bankruptcy Lawyer in India – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Senior Insolvency &amp; Debt Relief Counsel
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    IBC Moratorium &bull; DRT Defense &bull; Section 126 Privilege
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
                  <span className="text-[#D2A02A]">📜</span> Court Decrees
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Binding Discharges &amp; NDCs
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
                  Published: <span className="font-semibold text-gray-700">September 28, 2026</span> &bull; Practice Area: <span className="font-semibold text-gray-700">Insolvency, DRT Defense &amp; Commercial Litigation</span>
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
                    A bankruptcy lawyer in India represents individuals and corporate entities unable to service their debt obligations, providing formal legal remedies under the Insolvency and Bankruptcy Code, 2016 (IBC). Under Sections 94 to 104 of the IBC, an advocate files an application before the Debt Recovery Tribunal (DRT) or National Company Law Tribunal (NCLT) to obtain an interim moratorium that legally stays all creditor lawsuits, recovery agent actions, and asset attachments while negotiating a court-sanctioned repayment plan or total debt discharge.
                  </p>
                </div>
              </section>

              {/* ── 2. WHY AN ADVOCATE-LED LAW FIRM IS MANDATORY ── */}
              <section id="why-advocate-representation" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Why Retaining an Enrolled Bar Council Advocate is Mandatory for Debt Crisis
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  When facing severe financial distress, unpayable personal loans, or enterprise debt default, distressed borrowers frequently fall victim to two dangerous extremes: unregulated commercial telecalling agencies promising magical debt erasures, or massive corporate law firms quoting exorbitant open-ended hourly retainers. Understanding the statutory landscape in India reveals why only licensed advocates provide legitimate, enforceable protection.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Under <strong>Section 30 of the Advocates Act, 1961</strong>, only advocates enrolled with a State Bar Council possess the exclusive statutory authority to represent litigants, sign Vakalatnamas, and plead before judicial courts, Judicial Magistrates, Debt Recovery Tribunals (DRT), and the National Company Law Tribunal (NCLT). Unregulated commercial settlement companies, non-banking loan apps, and call-center consultants are non-legal entities. They possess zero legal standing in any court of law, cannot defend against criminal summons under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act (PSSA), and cannot prevent asset attachment or civil arrest.
                </p>
                <div className="p-6 bg-[#FAF7F0] border border-[#D2A02A]/40 rounded-xl space-y-3">
                  <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                    <span>🛡️</span> Absolute Legal Privilege Under Section 126 of the Indian Evidence Act, 1872
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    When you engage an enrolled advocate at AMA Legal Solutions, all disclosures regarding your banking records, asset holdings, income tax filings, and debt liabilities are shielded by constitutional and statutory advocate-client privilege. Neither creditors, collection agencies, nor investigation authorities can compel your advocate to disclose confidential discussions. Conversely, sharing sensitive financial information with unregulated commercial call centers leaves you completely vulnerable, as their customer databases are frequently shared, sold, or compromised.
                  </p>
                </div>
              </section>

              {/* ── 3. COMPARATIVE DEFENSE MATRIX ── */}
              <section id="comparative-defense-matrix" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Institutional Comparison Matrix: Evaluating Your Legal Defense Options
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Choosing the right legal mechanism determines whether you achieve permanent debt discharge or face compounding criminal prosecution and asset seizure. The comparison below illustrates the stark institutional differences between unregulated debt agencies, conventional corporate retainers, and AMA Legal Solutions&apos; advocate-led practice.
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left text-xs md:text-sm text-gray-700 border-collapse">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="p-4 font-bold uppercase tracking-wider border-b border-gray-700">Legal &amp; Strategic Dimension</th>
                        <th className="p-4 font-bold uppercase tracking-wider border-b border-gray-700 bg-red-950/40 text-red-200">Unregulated Debt Agency</th>
                        <th className="p-4 font-bold uppercase tracking-wider border-b border-gray-700 bg-gray-800 text-gray-200">Corporate Firm Retainer</th>
                        <th className="p-4 font-bold uppercase tracking-wider border-b border-gray-700 bg-[#5A4C33] text-[#D2A02A]">AMA Legal Solutions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Statutory Legal Standing</td>
                        <td className="p-4 text-red-700 font-medium">None. Cannot appear before DRT, NCLT, or Magistrates.</td>
                        <td className="p-4 text-gray-700">Full advocate standing, but delegated to junior associates.</td>
                        <td className="p-4 text-emerald-800 font-bold bg-amber-50/40">Direct Bar Council Senior Advocate Representation &amp; Vakalatnama.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Section 96 Moratorium Protection</td>
                        <td className="p-4 text-red-700 font-medium">Incapable of filing insolvency petitions under IBC.</td>
                        <td className="p-4 text-gray-700">Capable, but burdened by multi-layered procedural delay.</td>
                        <td className="p-4 text-emerald-800 font-bold bg-amber-50/40">Immediate statutory trigger staying all pending civil and recovery actions.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Recovery Agent Interception</td>
                        <td className="p-4 text-red-700 font-medium">Ineffective. Lenders ignore calls from unauthorized third parties.</td>
                        <td className="p-4 text-gray-700">Formal legal notices issued at substantial extra hourly costs.</td>
                        <td className="p-4 text-emerald-800 font-bold bg-amber-50/40">Statutory cease-and-desist notices citing RBI 2022 recovery circulars.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Criminal Defense (Sec 138 / Sec 25)</td>
                        <td className="p-4 text-red-700 font-medium">Zero defense. Borrowers face non-bailable warrants alone.</td>
                        <td className="p-4 text-gray-700">Litigation handled at heavy additional trial appearance retainers.</td>
                        <td className="p-4 text-emerald-800 font-bold bg-amber-50/40">Integrated criminal defense, bail appearance &amp; joint compounding petitions.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Fee Structure &amp; Transparency</td>
                        <td className="p-4 text-red-700 font-medium">Hidden commissions and monthly recurring subscription deductions.</td>
                        <td className="p-4 text-gray-700">Open-ended hourly billing, surprise retainers, and expense markups.</td>
                        <td className="p-4 text-emerald-800 font-bold bg-amber-50/40">Transparent fixed legal advisory without hourly markups or surprise retainers.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Finality of Debt Discharge</td>
                        <td className="p-4 text-red-700 font-medium">High risk of fake settlement receipts; debts remain active in CIBIL.</td>
                        <td className="p-4 text-gray-700">Legally binding, but lengthy and commercially burdensome.</td>
                        <td className="p-4 text-emerald-800 font-bold bg-amber-50/40">Authentic bank No Dues Certificate or binding tribunal discharge order.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── 4. STATUTORY IBC 2016 FRAMEWORK ── */}
              <section id="statutory-ibc-framework" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Statutory Insolvency Framework: IBC 2016, RDB Act 1993 &amp; DRT Jurisdictions
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  India&apos;s insolvency jurisprudence underwent a seismic transformation with the enactment of the <strong>Insolvency and Bankruptcy Code, 2016 (IBC)</strong>. Prior to the IBC, personal insolvency was governed by fragmented, century-old colonial legislation: the <em>Presidency Towns Insolvency Act, 1909</em> (applicable in Kolkata, Mumbai, and Chennai) and the <em>Provincial Insolvency Act, 1920</em> (applicable across the remainder of India). These antiquated statutes were slow, stigmatizing, and offered minimal practical debt relief.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  The IBC established a unified, modern insolvency and debt restructuring mechanism under the regulatory oversight of the <strong>Insolvency and Bankruptcy Board of India (IBBI)</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
                    <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">🏢</span> Corporate Insolvency (CIRP)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Governed by Part II (Sections 4 to 32) before the <strong>National Company Law Tribunal (NCLT)</strong>. When a corporate debtor defaults, financial or operational creditors or the corporate debtor itself can initiate Corporate Insolvency Resolution Process (CIRP). Under Section 14, an immediate statutory moratorium prohibits institution or continuation of suits, transfer of encumbered assets, and enforcement of security interests under SARFAESI.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
                    <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">👤</span> Individual &amp; Personal Insolvency
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Governed by Part III (Sections 94 to 104) before the <strong>Debt Recovery Tribunal (DRT)</strong> established under the Recovery of Debts and Bankruptcy Act, 1993 (RDB Act). For personal guarantors to corporate debtors, petitions are adjudicated before the NCLT. Crucially, the filing of an application triggers Section 96 interim moratorium, extending complete legal immunity against coercive creditor actions.
                    </p>
                  </div>
                </div>

                <blockquote className="p-5 border-l-4 border-[#D2A02A] bg-amber-50/60 rounded-r-xl text-sm md:text-base text-gray-800 italic">
                  &ldquo;Section 96(1)(b) of the IBC mandates that upon filing an application under Section 94 or 95, any legal action or proceeding pending in respect of any debt shall be deemed to have been stayed, and the creditors of the debtor shall not initiate any legal action or proceedings in respect of any debt.&rdquo;
                </blockquote>
              </section>

              {/* ── 5. PERSONAL INSOLVENCY PROCESS UNDER SECTIONS 94–104 ── */}
              <section id="personal-insolvency-process" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Personal Insolvency Mechanism: Sections 94 to 104 of the IBC Explained
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Navigating personal insolvency requires meticulous legal drafting and strategic timing. The process follows a structured statutory sequence designed to balance creditor recoveries with the debtor&apos;s constitutional right to a dignified livelihood:
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      1. Debtor Petition Filing under Section 94
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      An individual debtor who is not an undischarged bankrupt and has not undergone an insolvency resolution process in the preceding twelve months files an application before the jurisdictional DRT. The petition includes complete disclosure of all credit facilities, debts, personal assets, excluded household assets under Section 79(14), and audited financial statements.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      2. Appointment of Resolution Professional (RP) under Section 97
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The adjudicating authority directs the IBBI to nominate an independent Insolvency Resolution Professional (or confirms the RP nominated by the advocate). The RP examines the application within ten days and submits a statutory report recommending admission or rejection under Section 99.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      3. Formal Moratorium &amp; Repayment Plan Formulation under Section 101 &amp; 105
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Upon formal admission by the DRT, a statutory 180-day moratorium takes effect under Section 101. The debtor, guided by legal counsel, drafts a comprehensive Repayment Plan specifying the restructuring terms, proposed settlement concessions, source of funds, and asset realization schedule.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      4. Creditor Meeting &amp; Approval under Section 106 to 111
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The RP convenes a formal meeting of creditors. To become legally binding, the repayment plan must be approved by a majority of more than three-fourths in value of the participating creditors. Secured creditors may choose to concur or enforce their security separately subject to moratorium restrictions.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      5. Judicial Sanction &amp; Final Discharge Order under Section 114 to 118
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Once sanctioned by the DRT, the repayment plan binds all creditors. Upon successful implementation, the tribunal passes a formal <strong>Discharge Order under Section 115</strong>, permanently releasing the debtor from all qualifying liabilities included in the plan and bringing permanent legal closure.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 6. THE 5-STAGE ADVOCATE PROTOCOL ── */}
              <section id="the-5-stage-protocol" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Stage Advocate-Led Debt Defense &amp; Insolvency Protocol
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, our senior advocates execute a disciplined, multi-stage protocol engineered to shield stressed individuals, entrepreneurs, and corporate directors from aggressive banking litigation while negotiating maximum debt restructuring concessions.
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4 items-start p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#5A4C33] text-[#D2A02A] font-extrabold text-xl flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        Forensic Debt Portfolio Audit &amp; Usurious Interest Segregation
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We perform an exhaustive forensic analysis of every loan contract, sanction letter, account statement, and credit card statement. Our banking advocates separate genuine principal obligations from compounding penal interest, unauthorized late charges, and hidden processing fees. We evaluate whether the borrower qualifies for Section 94 personal insolvency, Section 89 court-annexed mediation, or bilateral compromise restructuring under Reserve Bank of India prudential circulars.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 items-start p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#5A4C33] text-[#D2A02A] font-extrabold text-xl flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        Vakalatnama Issuance &amp; Section 96 Interim Moratorium Trigger
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our advocates execute and file formal on-record Vakalatnamas before the appropriate judicial forum. Concurrently, we issue statutory cease-and-desist notices to bank legal verticals and collection agencies. If personal insolvency or guarantor proceedings are initiated, we invoke the Section 96 statutory interim moratorium, instantly prohibiting institutional lenders from executing civil attachment warrants, pursuing summary suits under Order 37 of the CPC, or harassing family members.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 items-start p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#5A4C33] text-[#D2A02A] font-extrabold text-xl flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        Bona Fide Hardship Dossier &amp; Statutory Compromise Petition
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Lenders and tribunals distinguish between wilful defaulters and bona fide distressed borrowers. Our legal team compiles a comprehensive, evidentiary Hardship Dossier containing audited tax returns, medical records, business dissolution certificates, or involuntary job loss documentation. We frame statutory compromise petitions under <strong>Section 63 of the Indian Contract Act, 1872</strong>, proving that a structured compromise payment yields superior recovery value compared to prolonged tribunal litigation.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 items-start p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#5A4C33] text-[#D2A02A] font-extrabold text-xl flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        High-Level Tribunal Representation &amp; Creditor Committee Advocacy
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our senior advocates appear directly before the Debt Recovery Tribunal (DRT), NCLT benches, and National Lok Adalats organized by District Legal Services Authorities (DLSA). We bypass aggressive collection telecallers to negotiate directly with senior bank stressed-asset executives, Circle General Managers, and Asset Reconstruction Company (ARC) committees, securing substantial waivers on interest, penalties, and outstanding principal balances.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-4 items-start p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#5A4C33] text-[#D2A02A] font-extrabold text-xl flex items-center justify-center shrink-0">
                      5
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        Discharge Decree Sanction, Authentic No Dues Certificate &amp; CIBIL Bureau Update
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Once a compromise or repayment plan is finalized, we rigorously verify the official Bank Sanction Letter or Tribunal Discharge Decree against core banking records. We ensure funds are deposited directly to the lender&apos;s authorized account (never third parties). Finally, we enforce the issuance of an unconditional, bank-stamped <strong>No Dues Certificate (NDC)</strong> and file formal directives compelling commercial credit bureaus to update records under the Credit Information Companies (Regulation) Act, 2005.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 7. SIGNATURE INFOGRAPHIC CARD ── */}
              <section id="signature-infographic" className="scroll-mt-28">
                <div className="my-10 p-6 md:p-8 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                  <div className="max-w-3xl mx-auto space-y-4">
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#5A4C33] bg-[#D2A02A]/20 rounded-full">
                      Strategic Legal Blueprint
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#1a202c]">
                      AMA Legal Solutions: Institutional Insolvency &amp; Debt Relief Architecture
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Visualizing our comprehensive defense framework: from initial forensic portfolio audit and Section 96 interim moratorium invocation, to DRT tribunal advocacy and definitive court-certified debt discharge.
                    </p>
                    <div className="pt-4">
                      <img
                        src="/images/og/bankruptcy-lawyer-in-india.png"
                        alt="Bankruptcy Lawyer in India - Personal Insolvency & IBC Debt Relief Architecture"
                        className="w-full h-auto rounded-xl shadow-lg border border-gray-200 object-cover"
                      />
                      <p className="text-xs text-gray-500 mt-3 italic">
                        Figure 1.0: End-to-end statutory defense framework under the Insolvency and Bankruptcy Code, 2016 and DRT jurisprudence.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 8. DEFENSE AGAINST SECTION 138 & SECTION 25 PSSA ── */}
              <section id="parallel-criminal-defense" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Defense Against Parallel Criminal Proceedings: Section 138 NI Act &amp; Section 25 PSSA
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  In India, banks and NBFCs routinely weaponize criminal statutes to coerce defaulting borrowers into immediate compliance, even when defaults stem from genuine business liquidation or catastrophic income disruption. Distressed borrowers frequently face:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
                    <h3 className="font-bold text-[#1a202c] text-base">
                      Section 138 of the Negotiable Instruments Act, 1881
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Initiated upon the dishonour of security post-dated cheques (PDCs) provided during loan disbursement. While quasi-criminal in nature and carrying penalties up to two years imprisonment and fines, established Supreme Court precedents dictate that security cheques presented without an existing, crystallized debt liability can be vigorously contested through forensic accounting and evidence of payments made.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
                    <h3 className="font-bold text-[#1a202c] text-base">
                      Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Invoked when electronic NACH / e-Mandate auto-debits bounce due to insufficient funds in the borrower&apos;s bank account. Section 25 criminal complaints follow the same procedural trajectory as Section 138. Our advocates file comprehensive statutory replies within the mandatory thirty-day notice window, challenging procedural service defects and establishing the absence of fraudulent intent.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-amber-50/70 border border-[#D2A02A]/40 rounded-xl space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">
                    How Interim Moratorium &amp; Lok Adalat Compounding Neutralize Criminal Summons
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Under the landmark Supreme Court ruling in <em>P. Mohanraj &amp; Ors. v. Shah Brothers Ispat Pvt. Ltd. (2021)</em>, statutory moratoriums under the IBC operate as a complete legal bar on the continuation of Section 138 proceedings against corporate entities. In personal loan disputes, our advocates represent borrowers directly before Metropolitan Magistrates, secure bail on personal recognizance bonds, and transfer the dispute to National Lok Adalat benches. Once a compromise settlement is paid, we draft joint compounding applications under Section 147 of the NI Act, ensuring complete quashing and withdrawal of all criminal summons.
                  </p>
                </div>
              </section>

              {/* ── 9. HALTING ILLEGAL RECOVERY AGENT HARASSMENT ── */}
              <section id="halting-recovery-harassment" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Halting Recovery Agent Harassment: Enforcing RBI Master Directions &amp; Police Protection
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Financial insolvency is a civil contractual default; it is never a criminal offense. Yet, unregulated third-party collection agencies routinely resort to abusive phone calls, public shaming, visits to workplaces, and unauthorized contact with extended family members. These practices violate core constitutional protections and binding regulatory directives.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Under the <strong>Reserve Bank of India Master Directions on the Fair Practices Code for Lenders</strong> and the comprehensive circular on <em>Outsourcing of Financial Services and Recovery Agents (2022)</em>:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 leading-relaxed">
                  <li><strong>Time Restrictions:</strong> Recovery agents are strictly prohibited from calling or visiting borrowers before 8:00 AM or after 7:00 PM.</li>
                  <li><strong>Privacy &amp; Dignity:</strong> Agents cannot intimidate borrowers, harass relatives or colleagues, or disclose debt details to unauthorized third parties.</li>
                  <li><strong>Mandatory Identification:</strong> Recovery agents must carry authentic bank authorization letters, identity cards, and pre-announced visit notices.</li>
                  <li><strong>Legal Communication Mandate:</strong> Once an advocate issues formal on-record appearance, banks are statutorily required to address all communications through legal counsel.</li>
                </ul>

                <p className="text-sm text-gray-700 leading-relaxed">
                  If rogue recovery agents persist in intimidation, AMA Legal Solutions immediately files formal complaints before the <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021</strong>, and lodges police complaints under Bharatiya Nyaya Sanhita (BNS) provisions for criminal intimidation, stalking, and extortion, bringing swift legal accountability.
                </p>
              </section>

              {/* ── 10. JURISDICTION & MULTI-CITY REACH ── */}
              <section id="jurisdiction-and-tribunals" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Tribunal Jurisdictions &amp; Pan-India Advocate Network
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Whether your banking dispute originates in a metro financial hub or an emerging industrial district, insolvency and recovery litigation is governed by territorial and pecuniary jurisdiction. Our legal team provides strategic tribunal appearances across major judicial corridors:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                    <h3 className="font-bold text-[#1a202c] text-sm">Delhi NCR &amp; North India</h3>
                    <p className="text-xs text-gray-600">
                      Appearing before DRT-I, DRT-II, and DRT-III Delhi, DRAT Delhi, NCLT Principal Bench New Delhi, and High Courts of Delhi and Punjab &amp; Haryana.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                    <h3 className="font-bold text-[#1a202c] text-sm">Mumbai &amp; Western India</h3>
                    <p className="text-xs text-gray-600">
                      Senior insolvency &amp; bankruptcy attorneys in Mumbai appearing before DRT-I, II, and III Mumbai, DRAT Mumbai, NCLT Mumbai Benches, and Bombay High Court.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                    <h3 className="font-bold text-[#1a202c] text-sm">Bengaluru &amp; Karnataka</h3>
                    <p className="text-xs text-gray-600">
                      Corporate insolvency resolution law firm counsel before DRT-I and DRT-II Bengaluru, NCLT Bengaluru Bench, and Karnataka High Court.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                    <h3 className="font-bold text-[#1a202c] text-sm">Kolkata &amp; Eastern India</h3>
                    <p className="text-xs text-gray-600">
                      Insolvency lawyer representation before DRT-I, II, and III Kolkata, DRAT Kolkata, NCLT Kolkata Bench, and Calcutta High Court.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                    <h3 className="font-bold text-[#1a202c] text-sm">Hyderabad &amp; Telangana</h3>
                    <p className="text-xs text-gray-600">
                      Tribunal defense before DRT-I and II Hyderabad, NCLT Hyderabad Bench, and Telangana High Court for commercial loan defaults.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1">
                    <h3 className="font-bold text-[#1a202c] text-sm">Chennai &amp; Southern India</h3>
                    <p className="text-xs text-gray-600">
                      Senior counsel appearances before DRT-I, II, and III Chennai, DRAT Chennai, NCLT Chennai Bench, and Madras High Court.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 11. TRANSPARENT FIXED LEGAL ADVISORY ── */}
              <section id="transparent-fixed-advisory" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Transparent Fixed Legal Advisory vs Expensive Corporate Firm Retainers
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  A common barrier preventing distressed individuals and family businesses from obtaining elite legal defense is fear of unpredictable legal expenses. Traditional corporate law firms typically bill on an hourly basis, demanding substantial replenishing retainers, billing for every telephone minute, and adding administrative markups that compound a client&apos;s insolvency.
                </p>
                <div className="p-6 bg-[#FAF7F0] border-2 border-[#D2A02A]/40 rounded-2xl space-y-4">
                  <h3 className="text-lg font-bold text-[#1a202c] flex items-center gap-2">
                    <span>💎</span> The AMA Legal Solutions Commercial Standard:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                    <div className="p-4 bg-white rounded-xl border border-gray-200">
                      <p className="font-bold text-[#5A4C33] mb-1">Fixed-Scope Engagement</p>
                      <p className="text-gray-600">
                        Complete clarity from day one. You know the exact scope of representation, from document audit to final No Dues Certificate, without hourly creep.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200">
                      <p className="font-bold text-[#5A4C33] mb-1">Zero Hidden Markups</p>
                      <p className="text-gray-600">
                        No surprise expenses, clerical overheads, or hidden commission cuts. We prioritize preserving your liquidity for the actual compromise settlement.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200">
                      <p className="font-bold text-[#5A4C33] mb-1">Direct Senior Access</p>
                      <p className="text-gray-600">
                        Your matter is handled directly by Bar Council enrolled advocates, not junior paralegals or third-party call center telecallers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 12. VALIDATING SETTLEMENT LETTER & NDC ── */}
              <section id="settlement-letter-and-ndc" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Official Settlement Sanction Verification &amp; Authentic No Dues Certificate
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Every month, hundreds of borrowers fall victim to fake or unauthorized settlement letters generated by rogue collection agencies eager to collect commission. Paying money on an unverified document results in tragic consequences: the payment is absorbed as a partial interest recovery, the debt remains active, and recovery harassment resumes.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Under <strong>Section 63 of the Indian Contract Act, 1872</strong> (the doctrine of accord and satisfaction), an authentic debt extinguishment requires five verifiable statutory elements:
                </p>

                <div className="space-y-3">
                  <div className="p-4 bg-white border-l-4 border-[#D2A02A] rounded-r-xl border-y border-r border-gray-200">
                    <p className="text-sm text-gray-800 font-medium">
                      <strong>1. Institutional Letterhead &amp; Dispatch Number:</strong> The sanction letter must be issued directly on the bank&apos;s registered corporate letterhead with a verifiable internal tracking number.
                    </p>
                  </div>
                  <div className="p-4 bg-white border-l-4 border-[#D2A02A] rounded-r-xl border-y border-r border-gray-200">
                    <p className="text-sm text-gray-800 font-medium">
                      <strong>2. Authorized Signatory Seal:</strong> Must be signed by a designated Assistant Vice President (AVP), Circle Head, or Chief Manager of the Stressed Assets Resolution Branch (SARB).
                    </p>
                  </div>
                  <div className="p-4 bg-white border-l-4 border-[#D2A02A] rounded-r-xl border-y border-r border-gray-200">
                    <p className="text-sm text-gray-800 font-medium">
                      <strong>3. Explicit Waiver of Balance Claims:</strong> The document must unequivocally state that upon receipt of the agreed compromise sum, all further claims, penal charges, and legal proceedings are permanently waived.
                    </p>
                  </div>
                  <div className="p-4 bg-white border-l-4 border-[#D2A02A] rounded-r-xl border-y border-r border-gray-200">
                    <p className="text-sm text-gray-800 font-medium">
                      <strong>4. Direct Bank Payment Only:</strong> All funds must be credited directly to the borrower&apos;s dedicated loan account number via RTGS/NEFT—never to a third party or agency account.
                    </p>
                  </div>
                  <div className="p-4 bg-white border-l-4 border-[#D2A02A] rounded-r-xl border-y border-r border-gray-200">
                    <p className="text-sm text-gray-800 font-medium">
                      <strong>5. Unconditional No Dues Certificate (NDC):</strong> Within fifteen to thirty days of settlement remittance, the bank must issue an official NDC and return all original security cheques or property title deeds.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 13. CIBIL CREDIT REHABILITATION ── */}
              <section id="cibil-credit-rehabilitation" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Credit Bureau Rehabilitation: Rebuilding CIBIL Post-Insolvency &amp; Settlement
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  A common concern among distressed borrowers is the impact of insolvency or debt settlement on credit ratings. Under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, all commercial lenders are mandated to update account statuses across the four licensed credit bureaus: TransUnion CIBIL, Experian, CRIF High Mark, and Equifax.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  When a loan is resolved through a compromise settlement, the credit bureau updates the reporting field from &apos;Written Off&apos; or active default to <strong>&apos;Settled&apos;</strong>. While this temporary mark impacts credit scoring in the short term, it accomplishes the most critical objective: it halts the catastrophic month-on-month DPD (Days Past Due) degradation and terminates all active litigation.
                </p>
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
                  <h3 className="font-bold text-[#1a202c] text-base">
                    The 24-Month Credit Restoration Roadmap
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Following debt discharge, borrowers can systematically rehabilitate their credit scores. By securing a small fixed-deposit-backed credit card, maintaining credit utilization below thirty percent, and ensuring zero delayed payments on utility bills, borrowers routinely restore their credit scores to prime borrowing territory within eighteen to twenty-four months. Our legal team ensures that the lender formally transmits the NDC to all bureaus within thirty days to eliminate erroneous reporting.
                  </p>
                </div>
              </section>

              {/* ── 14. 8-QUESTION QUOTABLE ACCORDION FAQ ── */}
              <section id="frequently-asked-questions" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-4">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Clarifications
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    Frequently Asked Questions on Bankruptcy &amp; Debt Relief in India
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full p-5 text-left font-bold text-gray-900 flex justify-between items-center gap-4 hover:bg-gray-50 cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm md:text-base">{faq.question}</span>
                          <span
                            className={`transform transition-transform text-[#D2A02A] text-lg font-bold shrink-0 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-5 pt-0 text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── 15. INTERNAL LEGAL GUIDES GRID ── */}
              <section id="internal-guides" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-4">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Comprehensive Knowledge Base
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    More Legal Debt Relief &amp; Banking Litigation Guides
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    href="/loan-settlement-amount-calculator"
                    className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition group shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">Interactive Tool</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#5A4C33] text-sm">
                        Loan Settlement Amount Calculator
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Estimate reasonable compromise ranges and legal waiver percentages for unsecured defaults.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 inline-flex items-center gap-1">
                      Calculate Now &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/legal-rights-after-loan-default"
                    className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition group shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">Borrower Rights</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#5A4C33] text-sm">
                        Legal Rights After Loan Default in India
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Understanding constitutional liberties, SARFAESI protections, and civil safeguards against recovery abuse.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 inline-flex items-center gap-1">
                      Read Legal Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/what-is-ots"
                    className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition group shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">Statutory Process</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#5A4C33] text-sm">
                        What is OTS? One-Time Settlement Explained
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Complete legal overview of bank compromise settlement policies under Reserve Bank guidelines.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 inline-flex items-center gap-1">
                      Explore OTS &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/best-loan-settlement-agencies-in-india"
                    className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition group shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">Agency Evaluation</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#5A4C33] text-sm">
                        Best Loan Settlement Agencies vs Law Firms
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Why unregulated agencies fail in court and how advocate representation safeguards borrowers.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 inline-flex items-center gap-1">
                      Compare Options &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/services/loan-settlement"
                    className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition group shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">Practice Area</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#5A4C33] text-sm">
                        Advocate-Led Loan Settlement Services
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Institutional debt resolution, DRT litigation defense, and court-certified settlement decrees.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 inline-flex items-center gap-1">
                      View Practice &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition group shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">Confidential Advisory</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#5A4C33] text-sm">
                        Contact Senior Legal Counsel
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Schedule a privileged consultation to evaluate your insolvency relief options today.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 inline-flex items-center gap-1">
                      Get in Touch &rarr;
                    </span>
                  </Link>
                </div>
              </section>

              {/* ── 16. REFERENCES & REGULATORY AUTHORITIES ── */}
              <section id="statutory-references" className="space-y-4 scroll-mt-28">
                <h3 className="text-lg font-bold text-[#1a202c]">
                  Statutory References &amp; Regulatory Authorities
                </h3>
                <p className="text-xs text-gray-600">
                  Verify insolvency statutes, tribunal rules, and debt relief frameworks directly through official government portals:
                </p>
                <ul className="text-xs space-y-2">
                  <li>
                    &bull;{" "}
                    <a
                      href="https://www.ibbi.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Insolvency and Bankruptcy Board of India (IBBI)
                    </a>{" "}
                    – Statutory regulator governing insolvency professionals and IBC code administration.
                  </li>
                  <li>
                    &bull;{" "}
                    <a
                      href="https://drt.etribunals.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Debt Recovery Appellate Tribunal &amp; DRT eTribunals Portal
                    </a>{" "}
                    – Official e-filing portal and cause lists for Debt Recovery Tribunals across India.
                  </li>
                  <li>
                    &bull;{" "}
                    <a
                      href="https://www.mca.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Ministry of Corporate Affairs (MCA)
                    </a>{" "}
                    – National Company Law Tribunal notifications and corporate insolvency statutory thresholds.
                  </li>
                  <li>
                    &bull;{" "}
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Reserve Bank of India (RBI)
                    </a>{" "}
                    – Master Directions on Prudential Norms, Compromise Settlements, and Recovery Agents.
                  </li>
                </ul>
              </section>

              {/* ── 17. SOCIAL SHARE ROW ── */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Share this legal resource:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-9 h-9 rounded-xl bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-9 h-9 rounded-xl bg-gray-100 text-gray-800 hover:bg-black hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on Twitter / X"
                    aria-label="Share on Twitter / X"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-9 h-9 rounded-xl bg-sky-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on LinkedIn"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-9 h-9 rounded-xl bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="h-9 px-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1.5 transition cursor-pointer shadow-xs text-xs font-semibold"
                    title="Copy Page Link"
                    aria-label="Copy Page Link"
                  >
                    {shareMsg ? (
                      <>
                        <FaCheck className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* ── 18. AMA COMPANY & MEDIA SECTION ── */}
              <section id="ama-company-section" className="scroll-mt-28">
                <div className="border-4 border-[#D2A02A] rounded-2xl p-6 md:p-8 bg-[#FAF7F0] space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <img
                      src="/ama3.svg"
                      alt="AMA Legal Solutions"
                      className="h-10 w-auto"
                    />
                    <div className="flex items-center gap-2">
                      <Stars count={5} />
                      <span className="text-sm font-bold text-gray-800">4.7 Google Rating</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#1a202c]">
                      About AMA Legal Solutions
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Founded by Advocate Anuj Anand Malik, AMA Legal Solutions is India&apos;s foremost advocate-led banking litigation, insolvency, and debt resolution law firm. Operating with offices in Delhi NCR and a nationwide network of enrolled senior advocates, we protect individuals, entrepreneurs, and corporations against unlawful banking recoveries, DRT asset attachments, and coercive criminal summons through transparent, privileged, and court-sanctioned legal defense.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                      Our Solutions
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <Link
                        href="/services/loan-settlement"
                        className="p-2.5 text-center text-xs font-bold border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-lg transition"
                      >
                        Loan Settlement
                      </Link>
                      <Link
                        href="/what-is-ots"
                        className="p-2.5 text-center text-xs font-bold border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-lg transition"
                      >
                        RBI OTS Advisory
                      </Link>
                      <Link
                        href="/loan-settlement-expert-for-high-value-debts"
                        className="p-2.5 text-center text-xs font-bold border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-lg transition"
                      >
                        DRT &amp; IBC Defense
                      </Link>
                      <Link
                        href="/contact"
                        className="p-2.5 text-center text-xs font-bold border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-lg transition"
                      >
                        Advocate Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar (280px) */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4">
                <div className="relative w-20 h-20 mx-auto">
                  <img
                    src="/anujbhiya.png"
                    alt="Anuj Anand Malik"
                    className="w-full h-full rounded-full object-cover border-2 border-[#D2A02A] shadow"
                  />
                  <span className="absolute bottom-0 right-0 bg-[#D2A02A] text-white p-1 rounded-full text-[10px]">
                    ⚖️
                  </span>
                </div>
                <div>
                  <Link
                    href="/author/anuj-anand-malik"
                    className="font-bold text-gray-900 text-base hover:text-[#D2A02A] transition"
                  >
                    Anuj Anand Malik
                  </Link>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Founder &amp; Senior Advocate
                  </p>
                  <p className="text-[11px] text-[#5A4C33] font-semibold mt-1">
                    Enrolled with Bar Council of Delhi
                  </p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed text-left">
                  Specializing in banking litigation, DRT asset defense, and IBC insolvency resolutions. Represents borrowers across high-stake financial disputes nationwide.
                </p>
                <div className="pt-2 border-t border-gray-100">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
                  >
                    <span>Connect on LinkedIn</span> &rarr;
                  </a>
                </div>
              </div>

              {/* Need Legal Help CTA Card */}
              <div className="bg-gradient-to-br from-[#5A4C33] to-[#3a301f] text-white p-6 rounded-2xl shadow-xl border border-[#D2A02A]/40 space-y-4">
                <div className="inline-block px-2.5 py-1 bg-[#D2A02A]/20 text-[#D2A02A] text-[10px] font-extrabold uppercase tracking-wider rounded-full">
                  Privileged Counsel
                </div>
                <h3 className="text-lg font-extrabold leading-snug">
                  Facing Insolvency, DRT Suits or Recovery Agents?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Connect directly with enrolled senior advocates for confidential case evaluation, Section 96 moratorium relief, and transparent fixed advisory.
                </p>
                <div className="pt-2 space-y-2">
                  <a
                    href="tel:+918700343611"
                    className="block w-full py-2.5 px-4 bg-[#D2A02A] hover:bg-[#b88c22] text-[#1a202c] font-bold rounded-xl text-center text-xs sm:text-sm shadow transition"
                  >
                    📞 Call +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full py-2.5 px-4 bg-white hover:bg-gray-100 text-[#5A4C33] font-bold rounded-xl text-center text-xs sm:text-sm shadow transition cursor-pointer"
                  >
                    Request Callback
                  </button>
                </div>
              </div>

              {/* Verified Client Review Card (Matches Schema Verbatim) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Stars count={5} />
                    <span className="text-xs font-bold text-gray-800">{clientReviewData.ratingValue} Rating</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
                <blockquote className="text-xs text-gray-600 leading-relaxed italic">
                  &ldquo;{clientReviewData.reviewBody}&rdquo;
                </blockquote>
                <div className="border-t border-gray-100 pt-2 text-right">
                  <p className="text-xs font-bold text-[#1a202c]">{clientReviewData.authorName}</p>
                  <p className="text-[10px] text-gray-500">{clientReviewData.authorRole}</p>
                </div>
                <div className="pt-2 text-center">
                  <Link
                    href="/ama-legal-solutions-reviews"
                    className="text-[11px] font-bold text-[#D2A02A] hover:text-[#5A4C33] transition"
                  >
                    Read All Verified Client Reviews &rarr;
                  </Link>
                </div>
              </div>

              {/* Related Topic Guides */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-[#1a202c] text-xs uppercase tracking-wider border-b border-gray-100 pb-2">
                  Related Legal Guides
                </h3>
                <div className="space-y-2 text-xs">
                  <Link
                    href="/loan-settlement-expert-for-high-value-debts"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; High-Value DRT Debt Defense
                  </Link>
                  <Link
                    href="/best-debt-settlement-law-firm-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Law Firm
                  </Link>
                  <Link
                    href="/what-is-ots"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; RBI One-Time Settlement (OTS)
                  </Link>
                  <Link
                    href="/legal-rights-after-loan-default"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Legal Rights After Loan Default
                  </Link>
                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs Consolidation
                  </Link>
                  <Link
                    href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Sec 25 PSSA vs Sec 138 NI Act
                  </Link>
                  <Link
                    href="/can-bank-reject-settlement-request"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Can Bank Reject Settlement?
                  </Link>
                  <Link
                    href="/how-to-improve-cibil-score-after-loan-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; CIBIL Repair After Settlement
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
                      Insolvency &amp; Debt Evaluation
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
                        placeholder="e.g. Rajeshwari Ramanathan"
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
                          placeholder="e.g. Mumbai, Maharashtra"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Category / Matter Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm bg-white"
                        >
                          <option value="Personal Insolvency & Loans">Personal Insolvency &amp; Loans</option>
                          <option value="Personal Guarantor to Corporate Debt">Personal Guarantor to Corporate Debt</option>
                          <option value="Corporate Insolvency (CIRP)">Corporate Insolvency (CIRP)</option>
                          <option value="DRT & SARFAESI Defense">DRT &amp; SARFAESI Defense</option>
                          <option value="Section 138 / 25 Criminal Summons">Section 138 / 25 Criminal Summons</option>
                          <option value="Multi-Lender Banking Dispute">Multi-Lender Banking Dispute</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Brief Details of Liabilities / Litigation
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Mention lenders, notices received, or pending DRT/court cases..."
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
                    Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Your details have been transmitted directly to our senior banking and insolvency legal team under Section 126 legal privilege.
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

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/best-debt-settlement-law-firm-in-india";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/best-debt-settlement-law-firm-in-india.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-17";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What distinguishes the best debt settlement law firm in India from unregulated debt relief agencies?",
    answer:
      "The best debt settlement law firm in India operates exclusively through licensed advocates enrolled with State Bar Councils under the Advocates Act, 1961, providing constitutional standing to represent borrowers before Judicial Magistrates, Civil Courts, Debt Recovery Tribunals (DRT), and National Lok Adalats. Unregulated commercial debt relief companies and call-center agencies are non-legal entities that lack legal authority to appear in court, cannot sign pleadings or Vakalatnamas, and leave borrowers completely unprotected when lenders initiate coercive litigation. Furthermore, retaining an enrolled law firm confers absolute advocate-client privilege under Section 126 of the Indian Evidence Act, 1872, preventing the forced disclosure of confidential financial disclosures to creditors or outside parties.",
  },
  {
    id: "faq-2",
    question: "How does an advocate-led law firm protect borrowers against recovery agent harassment under RBI regulations?",
    answer:
      "An advocate-led law firm immediately invokes the Reserve Bank of India Master Directions on the Fair Practices Code for Lenders and the 2022 Directives on Recovery Agents by issuing formal legal notices and filing a Vakalatnama on record with the lending institution. This formal statutory intervention legally obligates banks and NBFCs to route all communications through the appointed legal counsel and prohibits recovery agents from visiting the borrower's residence, contacting relatives, or calling outside permitted hours between 8:00 AM and 7:00 PM. If third-party recovery agencies persist in intimidation, the law firm files formal complaints before the RBI Integrated Ombudsman Scheme and initiates appropriate contempt and criminal proceedings before the jurisdictional magistrate.",
  },
  {
    id: "faq-3",
    question: "Can the best debt settlement law firm defend borrowers facing Section 138 and Section 25 criminal proceedings?",
    answer:
      "Yes, an established debt settlement law firm provides courtroom criminal defense when lenders initiate summons under Section 138 of the Negotiable Instruments Act, 1881 for cheque dishonour or Section 25 of the Payment and Settlement Systems Act, 2007 for failed NACH auto-debits. The firm's advocates draft verified statutory replies challenging the foundational legality of the debt claim, establish the absence of Mens Rea under Section 415 of the Indian Penal Code, and appear directly before the Metropolitan Magistrate to secure bail and protect the borrower's liberty. Once a formal One-Time Settlement (OTS) is concluded, the law firm files joint compounding applications to ensure the complete withdrawal and quashing of all pending criminal complaints.",
  },
  {
    id: "faq-4",
    question: "Why do free online DIY debt settlement templates fail before bank compromise committees?",
    answer:
      "Free automated DIY online templates fail because institutional bank compromise committees reject generic correspondence that lacks verifiable evidentiary weight and statutory compliance under Section 63 of the Indian Contract Act, 1872. Automated templates and fill-in-the-blank internet letters cannot substantiate genuine financial hardship through audited bank statements, medical records, or tax returns, nor can they establish legal leverage through forensic audit of unauthorized penal interest. Most critically, generic templates provide zero courtroom representation, leaving the distressed borrower undefended when the bank ignores the DIY letter and initiates immediate recovery proceedings or asset attachment.",
  },
  {
    id: "faq-5",
    question: "How does transparent fixed legal advisory protect borrowers compared to corporate law firm retainers?",
    answer:
      "Transparent fixed legal advisory eliminates the severe financial uncertainty created by open-ended corporate law firm hourly billing and open-ended retainer retainers, providing stressed borrowers with complete cost predictability from initial case review to final account closure. Corporate firms typically demand continuous hourly markups and expensive retainer replenishments that compound a borrower's existing insolvency without guaranteeing direct access to senior counsel. In contrast, an advocate-led debt resolution practice delivers focused, comprehensive institutional representation under a transparent, fixed-scope structure designed specifically to maximize borrower relief and preserve liquidity for the actual compromise payment.",
  },
  {
    id: "faq-6",
    question: "Which types of debts are legally eligible for compromise settlement under RBI guidelines?",
    answer:
      "Under the RBI Framework for Compromise Settlements and Technical Write-offs, eligible facilities include unsecured personal loans, credit card balances, unsecured business credit lines, consumer durable loans, and non-collateralized MSME working capital advances classified as Special Mention Accounts (SMA) or Non-Performing Assets (NPA). Secured facilities backed by immovable mortgaged property fall under the strict statutory framework of the SARFAESI Act, 2002 and require specialized pre-auction asset defense rather than standard unsecured compromise protocols. Willful defaulters and fraudulent borrowers facing forensic audit sanctions under RBI circulars are statutorily excluded from standard compromise settlement frameworks.",
  },
  {
    id: "faq-7",
    question: "What official bank documentation confirms that a debt is permanently settled and extinguished?",
    answer:
      "The definitive legal instrument proving complete debt extinguishment is an official, bank-stamped No Dues Certificate (NDC) or Account Closure Letter issued on the bank's registered corporate letterhead, signed by an authorized signatory with a verifiable institutional dispatch number. This legal certificate expressly confirms full and final discharge of all primary borrower and co-borrower obligations under Section 63 of the Indian Contract Act, 1872, terminating the original loan contract under the doctrine of accord and satisfaction. An experienced debt settlement law firm conducts rigorous forensic verification of this document against core banking records before counseling the client to execute the final compromise payment.",
  },
  {
    id: "faq-8",
    question: "How does an advocate-negotiated settlement impact a borrower's CIBIL score and future credit eligibility?",
    answer:
      "An advocate-negotiated compromise settlement leads the reporting credit bureaus (CIBIL, Experian, CRIF High Mark, and Equifax) to record the account status as 'Settled' under the Credit Information Companies (Regulation) Act, 2005, which eliminates ongoing Days Past Due (DPD) accumulation and terminates active default escalation. While a 'Settled' classification causes an initial drop in the borrower's credit score, it halts legal enforcement and creates a stable baseline for credit rehabilitation within eighteen to twenty-four months through disciplined credit utilization. The law firm ensures that the lender formally transmits the NDC to all four authorized credit bureaus within thirty days to prevent erroneous reporting of outstanding dues.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Vikram Malhotra",
  authorRole: "Managing Director, Gurgaon • Resolved Multi-Lender Commercial Debt",
  reviewBody:
    "When my enterprise suffered sudden working capital distress, unsecured business loans and personal credit card debts mounted rapidly. Unregulated debt relief agencies demanded recurring monthly fees without any legal protection, while traditional corporate firms quoted unaffordable hourly retainers. Engaging AMA Legal Solutions was the best decision for our family and business. Advocate Anuj Anand Malik provided transparent fixed legal advisory, halted persistent recovery calls within forty-eight hours through formal statutory notices, and defended our interests in Lok Adalat. They successfully negotiated board-approved RBI compromise settlements across three major private banks, securing authentic No Dues Certificates with complete confidentiality.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Best Debt Settlement Law Firm in India | Advocate-Led RBI Compromise & Legal Defense",
      description:
        "Comprehensive commercial and legal guide to selecting the best debt settlement law firm in India. Understand advocate representation, RBI compromise settlement frameworks, defense against Section 138, and authentic bank No Dues Certificates.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Best Debt Settlement Law Firm in India | Advocate-Led RBI Compromise & Legal Defense",
      description:
        "In-depth legal evaluation of the best debt settlement law firm in India. Explore why advocate representation under the Advocates Act, 1961 supersedes unregulated call centers, how transparent fixed legal advisory protects borrowers, and how RBI compromise policies extinguish debt.",
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
      name: "Advocate-Led Debt Settlement Legal Advisory",
      description:
        "Specialized legal representation for One-Time Settlement (OTS) compromise negotiations under Reserve Bank of India guidelines, providing courtroom defense against recovery harassment and securing authentic bank No Dues Certificates.",
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
          name: "Best Debt Settlement Law Firm in India",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Stage Advocate-Led Debt Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Portfolio Audit & Usurious Interest Segregation",
          description:
            "Comprehensive forensic review of sanction letters, repayment schedules, and bank account ledgers to separate unauthorized penal interest and procedural fees from authentic principal dues.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Vakalatnama Issuance & RBI Anti-Harassment Enforcement",
          description:
            "Formal on-record advocate representation under the Advocates Act, 1961, serving statutory cease-and-desist notices to bank legal departments to halt illegal recovery agent calls and visits.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bona Fide Hardship Dossier & Statutory Compromise Petition",
          description:
            "Preparation of an evidence-based hardship petition substantiating genuine insolvency, medical crises, or business loss under Section 63 of the Indian Contract Act, 1872.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "High-Level Compromise Committee Negotiation & Lok Adalat Defense",
          description:
            "Senior advocate appearance before bank stressed-asset verticals and National Lok Adalat benches to negotiate maximum legal waivers and finalize binding compromise decrees.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "OTS Sanction Verification, Direct Settlement Escrow & No Dues Enforcement",
          description:
            "Forensic authentication of official bank OTS sanction letters, supervised direct transfer to the lending bank, and statutory enforcement of unconditional No Dues Certificates and credit bureau updates.",
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
  { id: "why-choose-law-firm-vs-agency", title: "Why an Advocate-Led Law Firm is Essential" },
  { id: "comparative-analysis-matrix", title: "Institutional Comparison Matrix" },
  { id: "statutory-settlement-framework", title: "Statutory & RBI Legal Framework" },
  { id: "the-5-stage-legal-protocol", title: "5-Stage Advocate Settlement Protocol" },
  { id: "signature-infographic", title: "Firm Resolution Architecture" },
  { id: "criminal-defense-138-25", title: "Defense Against Section 138 & Section 25" },
  { id: "rbi-anti-harassment-mechanisms", title: "Halting Recovery Harassment Legally" },
  { id: "eligible-debts-assessment", title: "Eligible vs Ineligible Debt Facilities" },
  { id: "validating-settlement-letter-ndc", title: "OTS Sanction & No Dues Verification" },
  { id: "cibil-credit-rehabilitation", title: "CIBIL Rehabilitation & Future Credit" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "Statutory References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function BestDebtSettlementLawFirmInIndiaClient() {
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
    const textMsg = `Hello AMA Legal Solutions, I would like to consult the Best Debt Settlement Law Firm in India regarding my accounts.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Debt Facility: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory under the RBI compromise settlement framework."}`;
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
      "Best Debt Settlement Law Firm in India | Advocate-Led RBI OTS Advisory – AMA Legal Solutions";
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
      label: "Best Debt Settlement Law Firm in India",
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
                <span>⚖️</span> Premier Advocate-Led Banking &amp; Debt Resolution Practice
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Best <span className="text-[#D2A02A]">Debt Settlement Law Firm in India</span>: Advocate-Led RBI Compromise &amp; Legal Defense
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Empower your financial recovery with India&apos;s leading advocate-led debt settlement law firm.
                AMA Legal Solutions provides institutional One-Time Settlement (OTS) representation under Reserve Bank of India
                compromise frameworks, eliminates recovery agent harassment through statutory Vakalatnamas, and defends against
                Section 138 and Section 25 criminal notices through transparent fixed legal advisory without hourly markups or surprise retainers.
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
                    <span>🛡️</span> Bar Council Regulated
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule Advocate Case Evaluation</span>
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

            {/* Right Col — Generated OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/best-debt-settlement-law-firm-in-india.png"
                  alt="Best Debt Settlement Law Firm in India – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Institutional Legal Excellence
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Advocate-Led Compromise &bull; 100% Privileged Counsel
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
                  <span className="text-[#D2A02A]">🛡️</span> Section 126
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Advocate-Client Privilege
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
                  Published: <span className="font-semibold text-gray-700">September 17, 2026</span> &bull; Practice Area: <span className="font-semibold text-gray-700">Banking Litigation &amp; Debt Resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Share:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition cursor-pointer"
                    title="Share on Facebook"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-sky-50 text-sky-600 hover:bg-sky-100 transition cursor-pointer"
                    title="Share on Twitter"
                  >
                    Twitter/X
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition cursor-pointer"
                    title="Share on LinkedIn"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-amber-50 text-[#5A4C33] hover:bg-amber-100 transition cursor-pointer"
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
                  AMA Legal Solutions is widely recognized as the premier debt settlement law firm in India because the practice operates exclusively through licensed, Bar Council-enrolled senior advocates who provide direct courtroom defense and institutional compromise negotiations. Rather than functioning as an unregulated commercial call center or charging open-ended corporate retainers, the firm delivers transparent fixed legal advisory under the Reserve Bank of India (RBI) Prudential Framework and Section 63 of the Indian Contract Act, 1872. This advocate-led representation immediately halts third-party recovery agent harassment, defends borrowers against quasi-criminal summons under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007, and secures authentic, bank-stamped No Dues Certificates.
                </p>
              </div>

              {/* ══ SECTION 1: WHY AN ADVOCATE-LED LAW FIRM IS ESSENTIAL ══ */}
              <section id="why-choose-law-firm-vs-agency" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  INSTITUTIONAL DISTINCTION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Why You Need an Advocate-Led Law Firm: The Critical Divide Between Legal Counsel and Call-Center Agencies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When acute financial distress, sudden medical emergencies, loss of employment, or business disruptions make it impossible to service mounting loan EMIs and credit card minimum payments, borrowers often search desperately for debt relief. During this vulnerable phase, thousands of borrowers fall victim to commercial debt settlement companies, private mediation agencies, and online aggregators. These commercial entities are <strong>not law firms</strong>. They operate call centers staffed by non-legal personnel who cannot enter a courtroom, cannot file a Vakalatnama, and cannot assert legal defenses under Indian statutory law.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Under the <strong>Advocates Act, 1961</strong>, the right to practice law, enter appearances before judicial authorities, advise on statutory enactments, and draft binding legal pleadings is exclusively reserved for advocates enrolled with State Bar Councils. When an unregulated agency attempts to negotiate with institutional lenders, bank legal recovery departments routinely disregard their communications because such agencies possess zero legal standing. In sharp contrast, engaging an advocate-led law firm immediately shifts the power dynamic:
                </p>

                <ul className="space-y-3 text-gray-700 list-disc pl-5">
                  <li>
                    <strong>Statutory Bar Council Accountability:</strong> Enrolled advocates are strictly bound by the Bar Council of India Rules and professional ethics, ensuring transparent advisory, confidentiality, and fiduciary accountability.
                  </li>
                  <li>
                    <strong>Advocate-Client Privilege:</strong> Under <strong>Section 126 of the Indian Evidence Act, 1872</strong>, all communications, asset disclosures, and financial records shared between a client and their advocate are legally privileged and immune from compulsory disclosure or creditor subpoenas.
                  </li>
                  <li>
                    <strong>Judicial Standing Across Tribunals:</strong> A licensed law firm can defend you before Metropolitan Magistrates in Section 138 cheque bounce proceedings, file Section 9 or Section 34 petitions in arbitration disputes, appear before Debt Recovery Tribunals (DRT), and represent you before National Lok Adalats.
                  </li>
                  <li>
                    <strong>Institutional Zonal Credibility:</strong> Bank compromise committees and zonal settlement boards engage seriously with formal legal submissions submitted under advocate letterheads, knowing that unlawful creditor actions will face immediate legal challenge before the High Court or Banking Ombudsman.
                  </li>
                </ul>
              </section>

              {/* ══ SECTION 2: COMPARATIVE ANALYSIS MATRIX ══ */}
              <section id="comparative-analysis-matrix" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  MARKET COMPARISON
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Comparative Analysis: DIY Templates vs Unregulated Agencies vs Corporate Law Firms vs AMA Legal Solutions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To understand the commercial reality of debt resolution in India, borrowers must evaluate their legal representation options based on statutory enforceability, total cost structure, courtroom capability, and genuine protection:
                </p>

                {/* Detailed Table */}
                <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm text-gray-700">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="p-3 sm:p-4 font-semibold">Evaluation Criteria</th>
                        <th className="p-3 sm:p-4 font-semibold">Free DIY Online Templates</th>
                        <th className="p-3 sm:p-4 font-semibold">Unregulated Debt Relief Agencies</th>
                        <th className="p-3 sm:p-4 font-semibold">Traditional Corporate Law Firms</th>
                        <th className="p-3 sm:p-4 font-semibold bg-[#D2A02A] text-white font-bold">AMA Legal Solutions (Advocate-Led)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Legal Enforceability &amp; Standing</td>
                        <td className="p-3 sm:p-4 text-red-600">Zero; routinely ignored by bank legal departments</td>
                        <td className="p-3 sm:p-4 text-red-600">None; prohibited from practicing law under Advocates Act</td>
                        <td className="p-3 sm:p-4 text-green-700">Full legal standing in courts</td>
                        <td className="p-3 sm:p-4 font-bold text-green-700 bg-amber-50/50">Full Bar Council standing across all courts and tribunals</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Courtroom Criminal Defense (Sec 138/25)</td>
                        <td className="p-3 sm:p-4 text-red-600">Impossible; leaves borrower vulnerable to arrest warrants</td>
                        <td className="p-3 sm:p-4 text-red-600">Cannot appear; forces borrower to hire separate lawyers</td>
                        <td className="p-3 sm:p-4 text-green-700">Available at heavy billable rates</td>
                        <td className="p-3 sm:p-4 font-bold text-green-700 bg-amber-50/50">Direct advocate appearance, bail handling, and compounding defense</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Pricing &amp; Cost Predictability</td>
                        <td className="p-3 sm:p-4">Free initially, but leads to catastrophic default costs</td>
                        <td className="p-3 sm:p-4 text-red-600">Recurring monthly fees &amp; hidden success commissions</td>
                        <td className="p-3 sm:p-4 text-red-600">Prohibitive hourly billings &amp; open-ended retainers</td>
                        <td className="p-3 sm:p-4 font-bold text-green-700 bg-amber-50/50">Transparent fixed legal advisory with zero surprise retainers</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Advocate-Client Privilege (Sec 126)</td>
                        <td className="p-3 sm:p-4 text-red-600">No protection</td>
                        <td className="p-3 sm:p-4 text-red-600">No protection; financial data exposed</td>
                        <td className="p-3 sm:p-4 text-green-700">Protected</td>
                        <td className="p-3 sm:p-4 font-bold text-green-700 bg-amber-50/50">Absolute statutory confidentiality under Indian Evidence Act</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">Recovery Harassment Elimination</td>
                        <td className="p-3 sm:p-4 text-red-600">Ineffective; calls and home visits escalate</td>
                        <td className="p-3 sm:p-4 text-red-600">Weak informal requests; agents ignore call centers</td>
                        <td className="p-3 sm:p-4 text-yellow-700">Usually focuses on corporate litigation, not retail calls</td>
                        <td className="p-3 sm:p-4 font-bold text-green-700 bg-amber-50/50">Immediate statutory cease-and-desist notices citing RBI circulars</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-gray-50">No Dues Certificate (NDC) Verification</td>
                        <td className="p-3 sm:p-4 text-red-600">Borrower unable to detect forged or conditional letters</td>
                        <td className="p-3 sm:p-4 text-red-600">High risk of accepting fake or revoked settlement offers</td>
                        <td className="p-3 sm:p-4 text-green-700">Verified through associate review</td>
                        <td className="p-3 sm:p-4 font-bold text-green-700 bg-amber-50/50">Forensic bank-branch verification before payment release</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  As shown above, relying on free online DIY letter templates or contracting with unregulated third-party agencies jeopardizes the borrower&apos;s legal safety and financial future. Meanwhile, traditional corporate law firms prioritize multi-million dollar commercial conglomerates and bill astronomical hourly retainers that are entirely inaccessible to individual borrowers and small business owners. AMA Legal Solutions bridges this crucial gap by providing institutional-grade, advocate-led banking defense under a transparent fixed legal advisory model.
                </p>
              </section>

              {/* ══ SECTION 3: STATUTORY & RBI LEGAL FRAMEWORK ══ */}
              <section id="statutory-settlement-framework" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  GOVERNING STATUTES
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Statutory Foundations of Debt Settlement in Indian Banking Jurisprudence
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Debt settlement in India is not an informal favour or an extralegal loophole; it is a legally codified contractual remedy governed by explicit statutory provisions and central banking circulars. The entire architecture of loan compromise rests upon two core pillars:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl space-y-3">
                    <h3 className="font-bold text-[#1a202c] text-lg flex items-center gap-2">
                      <span className="text-[#D2A02A]">📜</span> Section 63, Indian Contract Act, 1872
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      &ldquo;Every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may extend the time for such performance, or may accept instead of it any satisfaction which he thinks fit.&rdquo;
                    </p>
                    <p className="text-xs text-gray-700 font-medium">
                      This statutory doctrine of <em>accord and satisfaction</em> gives banks the full legal authority to accept a discounted compromise sum and permanently discharge the borrower from all residual liabilities.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl space-y-3">
                    <h3 className="font-bold text-[#1a202c] text-lg flex items-center gap-2">
                      <span className="text-[#D2A02A]">🏛️</span> RBI Compromise Settlement Framework
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Under the Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) and the June 8, 2023 Framework for Compromise Settlements and Technical Write-offs, all scheduled commercial banks and NBFCs must maintain board-approved compromise policies.
                    </p>
                    <p className="text-xs text-gray-700 font-medium">
                      These regulations empower institutional sanctioning committees to approve principal concessions, waive unrecovered interest, and execute binding settlement agreements for genuine non-willful defaulters.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Furthermore, when debt settlements are formalized before a <strong>National Lok Adalat</strong> constituted under the <strong>Legal Services Authorities Act, 1987</strong>, the resulting award holds the legal force of a decree of a civil court. Under Section 21 of the Act, an award passed by the Lok Adalat is final, binding upon both lender and borrower, and non-appealable in any court of law, ensuring complete finality and absolute legal protection against reopened claims.
                </p>
              </section>

              {/* ══ SECTION 4: THE 5-STAGE LEGAL PROTOCOL ══ */}
              <section id="the-5-stage-legal-protocol" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  METHODOLOGY
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Stage Advocate-Led Debt Settlement Protocol
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  As the best debt settlement law firm in India, AMA Legal Solutions executes a disciplined, five-stage legal protocol engineered to safeguard client dignity, eliminate illegal harassment, and achieve maximum statutory compromise terms:
                </p>

                <div className="space-y-6 mt-4">
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm">
                        1
                      </span>
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        Forensic Portfolio Audit &amp; Usurious Interest Segregation
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-11">
                      Our banking litigation advocates conduct an exhaustive forensic audit of all loan agreements, sanction letters, interest rate reset notices, and statement ledgers. We mathematically isolate compounded penal interest, late payment charges, bounce penalties, and unauthorized processing fees from genuine principal dues, creating an indisputable baseline for compromise negotiations.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm">
                        2
                      </span>
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        Vakalatnama Issuance &amp; RBI Anti-Harassment Enforcement
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-11">
                      We execute a formal Vakalatnama and dispatch statutory legal notices to the head of credit, collection vertical heads, and zonal recovery cells of each lending institution. We formally place the lender on notice under the RBI Master Directions on Recovery Agents, ordering all third-party collection agencies to cease residential visits, workplace inquiries, and aggressive phone outreach immediately.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm">
                        3
                      </span>
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        Bona Fide Hardship Dossier &amp; Statutory Compromise Petition
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-11">
                      Under Section 63 of the Indian Contract Act, 1872, our legal team drafts a comprehensive, evidence-backed Hardship Dossier. We assemble corroborating medical records, business termination letters, income tax returns, salary reduction notices, and asset declaration affidavits to prove genuine financial incapacity, establishing that a compromise settlement yields the highest recovery realization for the lender compared to costly civil litigation.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm">
                        4
                      </span>
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        High-Level Compromise Committee Negotiation &amp; Lok Adalat Defense
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-11">
                      Our senior advocates appear directly before bank stressed-asset verticals, internal compromise sanctioning committees, and National Lok Adalat benches. We counter exaggerated lender claims, present our forensic audit, and negotiate substantial principal waivers and complete write-offs of unrecovered interest, ensuring all settlement terms strictly adhere to board-approved policies.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm">
                        5
                      </span>
                      <h3 className="font-bold text-lg text-[#1a202c]">
                        OTS Sanction Verification, Direct Settlement Escrow &amp; No Dues Enforcement
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-11">
                      Before our client releases a single rupee, our advocates verify the authenticity of the One-Time Settlement (OTS) sanction letter against internal bank records, ensuring it is signed by an authorized zonal officer on corporate letterhead. Payment is transferred directly to the borrower&apos;s dedicated loan account (never to third-party intermediaries), following which we compel the timely issuance of an unconditional No Dues Certificate (NDC) and credit bureau status rectification.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 5: SIGNATURE INFOGRAPHIC CARD ══ */}
              <section id="signature-infographic" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#D2A02A] text-white uppercase tracking-wider">
                    Institutional Blueprint
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    AMA Legal Solutions Resolution Architecture
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow">
                  <img
                    src="/images/og/best-debt-settlement-law-firm-in-india.png"
                    alt="Best Debt Settlement Law Firm in India - Institutional Resolution Architecture"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 italic text-center">
                  Figure 1.1: The institutional legal framework deployed by AMA Legal Solutions to protect borrower rights, enforce RBI fair practice directives, and execute binding compromise settlements.
                </p>
              </section>

              {/* ══ SECTION 6: CRIMINAL DEFENSE 138 & 25 ══ */}
              <section id="criminal-defense-138-25" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  COURTROOM DEFENSE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Quasi-Criminal Defense: Overcoming Section 138 NI Act &amp; Section 25 PSS Act Proceedings
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the most intimidating tactics deployed by institutional lenders against defaulted borrowers is the weaponization of quasi-criminal statutes. When loan repayment cheques bounce or NACH auto-debit mandates fail due to insufficient funds, banks frequently issue statutory demand notices under:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-base">
                      Section 138, Negotiable Instruments Act, 1881
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Pertains to dishonoured cheques issued towards a legally enforceable debt. Failure to respond to the statutory 15-day demand notice can result in criminal complaints before a Judicial Magistrate, bailable warrants, and potential imprisonment of up to two years.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-base">
                      Section 25, Payment and Settlement Systems Act, 2007
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Pertains to electronic fund management and automated NACH clearing mandates. Provides identical penal consequences to Section 138 for dishonoured electronic clearing instructions.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Unregulated debt settlement companies cannot help you when a magistrate court issues a summons. They cannot file an appearance, represent you at the bar, or plead your defense. AMA Legal Solutions provides comprehensive criminal litigation defense:
                </p>

                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>
                    <strong>Statutory Demand Replies:</strong> Drafting precise legal replies within the statutory 15-day window, disputing exaggerated debt figures, demonstrating lack of fraudulent intent, and placing the borrower&apos;s willingness to settle on record.
                  </li>
                  <li>
                    <strong>Magistrate Court Representation:</strong> Enrolled advocates appear in court, furnish bail, and represent the accused borrower, preventing the issuance of non-bailable warrants.
                  </li>
                  <li>
                    <strong>Compounding &amp; Quashing:</strong> Under Section 147 of the Negotiable Instruments Act, offenses under Section 138 are compoundable. Once an OTS is concluded and paid, our advocates file joint compromise applications to compound the offense, securing the formal dismissal of the criminal complaint with zero criminal record.
                  </li>
                </ul>
              </section>

              {/* ══ SECTION 7: RBI ANTI-HARASSMENT MECHANISMS ══ */}
              <section id="rbi-anti-harassment-mechanisms" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  REGULATORY SHIELD
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Halting Recovery Harassment Legally: Enforcing RBI Directives &amp; Ombudsman Escalation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing financial distress frequently endure relentless intimidation from third-party recovery agents, including incessant phone calls to family members, unannounced home visits at odd hours, threats of physical confrontation, and public defamation. The Supreme Court of India and the Reserve Bank of India have repeatedly affirmed that debt recovery must be conducted with absolute adherence to the rule of law.
                </p>

                <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 my-4 bg-gray-50 text-gray-700 italic">
                  <strong>Supreme Court of India (ICICI Bank v. Prakash Kaur, 2007):</strong> &ldquo;We deem it appropriate to observe that banks are certainly not entitled to use musclemen for recovery of loan installments, and that recovery agents who intimidate or harass borrowers must face strict penal consequences.&rdquo;
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  Under the <strong>RBI Master Circular on Fair Practices Code</strong> and the <strong>Circular on Recovery Agents (August 2022)</strong>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
                    <div className="text-2xl mb-1">⏰</div>
                    <h3 className="font-bold text-sm text-[#1a202c]">Permitted Calling Hours</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Calls are strictly permitted only between 8:00 AM and 7:00 PM. Calls at night or early morning are unlawful.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
                    <div className="text-2xl mb-1">🏠</div>
                    <h3 className="font-bold text-sm text-[#1a202c]">Privacy &amp; Third Parties</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Agents cannot contact relatives, friends, or employers, nor disclose loan default details to third parties.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
                    <div className="text-2xl mb-1">🪪</div>
                    <h3 className="font-bold text-sm text-[#1a202c]">Mandatory Identification</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Agents must carry bank-issued identity cards, official authorization letters, and maintain strict decorum.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  When you retain AMA Legal Solutions, our advocates serve an official cease-and-desist notice citing specific RBI circular provisions. If any agent attempts subsequent violations, our firm files formal complaints before the <strong>RBI Integrated Ombudsman Scheme, 2021</strong> and initiates criminal complaints for criminal intimidation under <strong>Section 503 and Section 506 of the Indian Penal Code</strong>.
                </p>
              </section>

              {/* ══ SECTION 8: ELIGIBLE DEBTS ASSESSMENT ══ */}
              <section id="eligible-debts-assessment" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  PORTFOLIO AUDIT
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Debt Eligibility Audit: Unsecured Credit Facilities vs Secured Assets
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Not all debt obligations can be resolved through standard compromise settlement mechanisms. Understanding the legal classification of your debt is critical for crafting an effective legal strategy:
                </p>

                <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm my-4">
                  <table className="w-full text-left text-xs sm:text-sm text-gray-700">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="p-3 sm:p-4 font-semibold">Credit Facility Category</th>
                        <th className="p-3 sm:p-4 font-semibold">Settlement Eligibility</th>
                        <th className="p-3 sm:p-4 font-semibold">Governing Legal Framework</th>
                        <th className="p-3 sm:p-4 font-semibold">Advocate Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold">Unsecured Personal Loans</td>
                        <td className="p-3 sm:p-4 text-green-700 font-semibold">Highly Eligible</td>
                        <td className="p-3 sm:p-4">Section 63 Contract Act &amp; RBI Compromise Framework</td>
                        <td className="p-3 sm:p-4">Audit penal interest, submit hardship dossier, negotiate maximum principal waiver</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold">Credit Card Outstanding Balances</td>
                        <td className="p-3 sm:p-4 text-green-700 font-semibold">Highly Eligible</td>
                        <td className="p-3 sm:p-4">RBI Fair Practices Code &amp; Usurious Loans Act</td>
                        <td className="p-3 sm:p-4">Challenge exorbitant annualized finance charges (40-50%), settle on actual principal</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold">Unsecured MSME &amp; Business Credit</td>
                        <td className="p-3 sm:p-4 text-green-700 font-semibold">Eligible</td>
                        <td className="p-3 sm:p-4">MSMED Act, 2006 &amp; RBI Stressed Asset Framework</td>
                        <td className="p-3 sm:p-4">Demonstrate working capital distress, restructure balance, obtain clean closure</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold">Home Loans &amp; Mortgages</td>
                        <td className="p-3 sm:p-4 text-amber-700 font-semibold">Conditional / Pre-Auction</td>
                        <td className="p-3 sm:p-4">SARFAESI Act, 2002 (Sec 13(2) &amp; Sec 13(4))</td>
                        <td className="p-3 sm:p-4">DRT Section 17 appeal, stay auction proceedings, negotiate structured private treaty</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold">Auto &amp; Vehicle Loans</td>
                        <td className="p-3 sm:p-4 text-amber-700 font-semibold">Conditional</td>
                        <td className="p-3 sm:p-4">Hire Purchase Agreements &amp; Motor Vehicles Act</td>
                        <td className="p-3 sm:p-4">Defend against unlawful repossession, negotiate balance shortfall after vehicle return</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold">Willful Default / Fraud Sanctioned</td>
                        <td className="p-3 sm:p-4 text-red-600 font-semibold">Ineligible for Standard OTS</td>
                        <td className="p-3 sm:p-4">RBI Master Circular on Willful Defaulters</td>
                        <td className="p-3 sm:p-4">Challenge identification committee classification via High Court Writ Petition under Art. 226</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ══ SECTION 9: VALIDATING SETTLEMENT LETTER & NDC ══ */}
              <section id="validating-settlement-letter-ndc" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  CLOSURE SECURITY
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Forensic Verification: Protecting Borrowers Against Fake Settlement Letters &amp; Ensuring Genuine No Dues Certificates
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A widespread hazard in Indian debt resolution is the issuance of fake or unauthorized settlement letters by rogue collection agents. In many instances, recovery agents provide falsified settlement approval letters to induce borrowers to deposit partial funds into an account, only for the bank to apply the money against accumulated interest while keeping the entire loan open and defaulting.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  As India&apos;s leading debt settlement law firm, AMA Legal Solutions subjects every One-Time Settlement (OTS) sanction letter to a rigorous five-point forensic verification:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1 shadow-sm">
                    <h3 className="font-bold text-[#1a202c] text-sm">1. Official Corporate Letterhead</h3>
                    <p className="text-xs text-gray-600">
                      Must feature official bank corporate logos, registered office address, CIN/registration numbers, and official zonal contact details.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1 shadow-sm">
                    <h3 className="font-bold text-[#1a202c] text-sm">2. Institutional Reference Number</h3>
                    <p className="text-xs text-gray-600">
                      Must contain a unique, verifiable institutional dispatch number tracked in the core banking system (CBS).
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1 shadow-sm">
                    <h3 className="font-bold text-[#1a202c] text-sm">3. Authorized Signatory Seal</h3>
                    <p className="text-xs text-gray-600">
                      Must be signed by an authorized Assistant Vice President, Chief Manager, or Zonal Head with employee code and round bank stamp.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1 shadow-sm">
                    <h3 className="font-bold text-[#1a202c] text-sm">4. Direct Loan Account Payment</h3>
                    <p className="text-xs text-gray-600">
                      Payment instructions must specify the borrower&apos;s exact loan account or bank virtual account—never personal or agency accounts.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Once payment is completed in strict accordance with the sanctioned OTS letter, our advocates follow through to secure an unconditional <strong>No Dues Certificate (NDC)</strong> or <strong>Account Closure Letter</strong> within thirty days, permanently discharging all legal liability under the Indian Contract Act, 1872.
                </p>
              </section>

              {/* ══ SECTION 10: CIBIL CREDIT REHABILITATION ══ */}
              <section id="cibil-credit-rehabilitation" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  FINANCIAL RESTORATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  CIBIL Score Rehabilitation: Transitioning from &lsquo;Settled&rsquo; to Long-Term Financial Freedom
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A common question asked by borrowers is how debt settlement impacts their credit score. Under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, lenders are legally mandated to report account modifications to all four RBI-licensed credit bureaus: TransUnion CIBIL, Equifax, Experian, and CRIF High Mark.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  When a debt is settled via mutual compromise, the reporting bureau updates the account status from &ldquo;Written Off&rdquo; or &ldquo;Default&rdquo; to <strong>&ldquo;Settled&rdquo;</strong> with an outstanding balance of zero. While a &ldquo;Settled&rdquo; status causes a temporary reduction in credit rating, it achieves three vital milestones:
                </p>

                <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                  <li>
                    <strong>Halts Days Past Due (DPD) Bleeding:</strong> In an active default, every passing month adds 30 days to your DPD metric (e.g., 90, 180, 360+ DPD), destroying your financial profile. Settlement immediately stops this deterioration.
                  </li>
                  <li>
                    <strong>Eliminates Active Legal Risk:</strong> A settled account cannot be litigated, referred to recovery agencies, or used to attach bank balances.
                  </li>
                  <li>
                    <strong>Establishes a Credit Repair Pathway:</strong> With zero active default liabilities, borrowers can rebuild their CIBIL score to 750+ within 18 to 24 months through secured credit cards (backed by fixed deposits) and immaculate utility repayment discipline.
                  </li>
                </ol>
              </section>

              {/* ══ SECTION 11: FREQUENTLY ASKED QUESTIONS (8 ACCORDION ITEMS) ══ */}
              <section id="frequently-asked-questions" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STATUTORY INQUIRIES
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Frequently Asked Questions: Best Debt Settlement Law Firm in India
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Explore self-contained legal answers addressing essential statutory acts, judicial precedents, and compromise frameworks:
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-gray-900 hover:text-[#D2A02A] transition-colors focus:outline-none cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-base sm:text-lg pr-4 flex items-center gap-2">
                            <span className="text-[#D2A02A]">Q{index + 1}.</span> {faq.question}
                          </span>
                          <span
                            className={`transform transition-transform duration-200 text-[#D2A02A] text-xl font-bold ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▾
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ══ SECTION 12: INTERNAL GUIDES GRID ══ */}
              <section id="internal-guides" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  KNOWLEDGE BASE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Explore Related Legal Debt Resolution Guides
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Deepen your understanding of Indian banking laws, statutory borrower protections, and strategic compromise negotiation by reviewing our comprehensive legal resources:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Link
                    href="/what-is-debt-settlement"
                    className="p-4 bg-gray-50 hover:bg-amber-50/60 border border-gray-200 hover:border-[#D2A02A] rounded-xl transition duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="font-bold text-[#1a202c] text-sm group-hover:text-[#D2A02A] transition">
                        What is Debt Settlement?
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Comprehensive guide to statutory OTS meaning, RBI framework, and legal rights.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#D2A02A] mt-3 inline-flex items-center gap-1">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/debt-settlement-letter"
                    className="p-4 bg-gray-50 hover:bg-amber-50/60 border border-gray-200 hover:border-[#D2A02A] rounded-xl transition duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="font-bold text-[#1a202c] text-sm group-hover:text-[#D2A02A] transition">
                        Debt Settlement Letter Format
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Statutory letter drafting, legal clauses, and bank negotiation protocols.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#D2A02A] mt-3 inline-flex items-center gap-1">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/essentials-of-a-valid-debt-settlement-letter"
                    className="p-4 bg-gray-50 hover:bg-amber-50/60 border border-gray-200 hover:border-[#D2A02A] rounded-xl transition duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="font-bold text-[#1a202c] text-sm group-hover:text-[#D2A02A] transition">
                        Valid vs Fake Settlement Letter
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Forensic verification methods to identify forged recovery letters.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#D2A02A] mt-3 inline-flex items-center gap-1">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="p-4 bg-gray-50 hover:bg-amber-50/60 border border-gray-200 hover:border-[#D2A02A] rounded-xl transition duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="font-bold text-[#1a202c] text-sm group-hover:text-[#D2A02A] transition">
                        Settlement vs Consolidation
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Critical analysis of debt consolidation loan pitfalls vs permanent settlement.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#D2A02A] mt-3 inline-flex items-center gap-1">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="p-4 bg-gray-50 hover:bg-amber-50/60 border border-gray-200 hover:border-[#D2A02A] rounded-xl transition duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="font-bold text-[#1a202c] text-sm group-hover:text-[#D2A02A] transition">
                        Stop Recovery Harassment
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Step-by-step legal procedures to halt coercive collection tactics.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#D2A02A] mt-3 inline-flex items-center gap-1">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/section-138-cheque-bounce-notice-for-personal-loan"
                    className="p-4 bg-gray-50 hover:bg-amber-50/60 border border-gray-200 hover:border-[#D2A02A] rounded-xl transition duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="font-bold text-[#1a202c] text-sm group-hover:text-[#D2A02A] transition">
                        Section 138 NI Act Defense
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        How to reply to cheque bounce legal notices and defend criminal summons.
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#D2A02A] mt-3 inline-flex items-center gap-1">
                      Read Guide &rarr;
                    </span>
                  </Link>
                </div>
              </section>

              {/* ══ SECTION 13: REFERENCES & AUTHORITY ══ */}
              <section id="statutory-references" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  LEGAL CITATIONS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Statutory References &amp; Regulatory Authorities
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All legal positions, statutory rights, and defense protocols articulated in this guide are directly derived from official Indian enactments and central banking directives:
                </p>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">1.</span>
                    <div>
                      <strong>Reserve Bank of India (RBI):</strong> Framework for Compromise Settlements and Technical Write-offs (Notification RBI/2023-24/40 DOR.STR.REC.20/21.04.048/2023-24).{" "}
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Visit Official RBI Portal &rarr;
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">2.</span>
                    <div>
                      <strong>Indian Contract Act, 1872 (Section 63):</strong> Remission of performance and accord and satisfaction doctrines governing commercial loan compromise agreements.{" "}
                      <a
                        href="https://www.indiacode.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        View India Code Legislative Repository &rarr;
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">3.</span>
                    <div>
                      <strong>Negotiable Instruments Act, 1881 (Sections 138 &amp; 147):</strong> Statutory summons defense, compounding of cheque dishonour offenses, and magistrate court procedures.{" "}
                      <a
                        href="https://indiankanoon.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Inspect Judgments on Indian Kanoon &rarr;
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">4.</span>
                    <div>
                      <strong>Legal Services Authorities Act, 1987 (Section 21):</strong> Statutory finality of National Lok Adalat awards holding the force of a non-appealable civil court decree.{" "}
                      <a
                        href="https://nalsa.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Access National Legal Services Authority (NALSA) &rarr;
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">5.</span>
                    <div>
                      <strong>Bar Council of India:</strong> Advocates Act, 1961 professional conduct standards governing advocate representation and courtroom appearance.{" "}
                      <a
                        href="http://www.barcouncilofindia.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Visit Bar Council of India &rarr;
                      </a>
                    </div>
                  </li>
                </ul>
              </section>

              {/* ══ SOCIAL SHARE ROW AT BOTTOM ══ */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Share This Legal Resource:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition cursor-pointer"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-sky-50 text-sky-600 hover:bg-sky-100 transition cursor-pointer"
                  >
                    Twitter/X
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition cursor-pointer"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-amber-50 text-[#5A4C33] hover:bg-amber-100 transition cursor-pointer"
                  >
                    {shareMsg || "Copy Link"}
                  </button>
                </div>
              </div>

              {/* ══ AMA COMPANY & MEDIA SECTION ══ */}
              <section id="ama-company-section" className="p-6 md:p-8 bg-[#FAF7F0] border-4 border-[#D2A02A] rounded-2xl space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="w-20 h-20 shrink-0 bg-[#1a202c] p-2 rounded-2xl border-2 border-[#D2A02A] flex items-center justify-center shadow">
                    <img src={LOGO_URL} alt="AMA Legal Solutions Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <div className="inline-block px-2.5 py-0.5 bg-[#D2A02A]/20 text-[#5A4C33] text-xs font-bold rounded-full">
                      PREMIER LAW FIRM
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                      AMA Legal Solutions
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Advocate-led debt resolution practice, banking litigation defense, and corporate advisory.
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-gray-700">
                      <span className="font-bold text-[#D2A02A]">★ 4.7 Google Rating</span>
                      <span>&bull;</span>
                      <span>Verified Client Trust Across India</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Headquartered in Gurugram, Haryana with nationwide practice coordination, AMA Legal Solutions represents salaried individuals, business proprietors, and corporate entities facing unmanageable credit facilities. Our legal team eliminates recovery agent harassment through statutory intervention, defends quasi-criminal cheque bounce litigation, and negotiates board-approved RBI compromise settlements with transparent fixed legal advisory.
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 text-center sm:text-left">
                    Explore Our Legal Practice Areas:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                    <Link
                      href="/personal-loan-settlement"
                      className="p-2 bg-white border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-lg text-center font-semibold transition"
                    >
                      Personal Loan Settlement
                    </Link>
                    <Link
                      href="/credit-card-debt-settlement"
                      className="p-2 bg-white border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-lg text-center font-semibold transition"
                    >
                      Credit Card Settlement
                    </Link>
                    <Link
                      href="/business-loan-settlement"
                      className="p-2 bg-white border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-lg text-center font-semibold transition"
                    >
                      Business Loan Relief
                    </Link>
                    <Link
                      href="/loan-settlement-expert-for-high-value-debts"
                      className="p-2 bg-white border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-lg text-center font-semibold transition"
                    >
                      High-Value DRT Defense
                    </Link>
                  </div>
                </div>
              </section>

            </main>

            {/* ══ RIGHT STICKY SIDEBAR (280px) ══ */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A] shrink-0">
                    <img src="/anujbhiya.png" alt="Advocate Anuj Anand Malik" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="font-bold text-[#1a202c] text-sm hover:text-[#D2A02A] transition"
                    >
                      Anuj Anand Malik
                    </Link>
                    <p className="text-[11px] text-gray-500">Founder &amp; Senior Advocate</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Leading advocate specializing in banking dispute resolution, SARFAESI defense, and One-Time Settlements (OTS) under RBI frameworks. Dedicated to protecting borrower dignity against predatory recovery mechanisms.
                </p>
                <div className="pt-1">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
                  >
                    <span>Connect on LinkedIn</span> &rarr;
                  </a>
                </div>
              </div>

              {/* Need Legal Help CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-lg space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#D2A02A]/20 border border-[#D2A02A] flex items-center justify-center mx-auto text-2xl">
                  ⚖️
                </div>
                <h3 className="font-extrabold text-lg text-white">
                  Need Legal Debt Settlement Help?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Halt recovery agent harassment, defend criminal notices, and negotiate authentic RBI compromise settlements with our senior advocates.
                </p>
                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+918700343611"
                    className="block w-full py-2.5 px-4 bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold rounded-xl text-xs sm:text-sm shadow transition"
                  >
                    Direct Call: +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full py-2.5 px-4 bg-white hover:bg-gray-100 text-[#5A4C33] font-bold rounded-xl text-xs sm:text-sm shadow transition cursor-pointer"
                  >
                    Request Case Evaluation
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
                    href="/best-debt-settlement-company"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Company
                  </Link>
                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs. Debt Consolidation
                  </Link>
                  <Link
                    href="/loan-settlement-expert-for-high-value-debts"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; High-Value DRT Defense
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
                        placeholder="e.g. Vikram Malhotra"
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
                          placeholder="e.g. vikram@example.com"
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
                          placeholder="e.g. Gurugram, Haryana"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Category / Debt Type
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
                        placeholder="Briefly describe your debt scenario, number of lenders, or whether recovery harassment or legal notices have commenced..."
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
                    Thank you, <span className="font-bold text-gray-900">{formData.fullName}</span>. A senior advocate from Team AMA Legal Solutions will review your portfolio details shortly.
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

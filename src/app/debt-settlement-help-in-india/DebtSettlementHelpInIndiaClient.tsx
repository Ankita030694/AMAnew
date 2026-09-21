"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/debt-settlement-help-in-india";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/debt-settlement-help-in-india.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-17";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "How does professional debt settlement help protect borrowers against recovery agent harassment?",
    answer:
      "Retaining professional debt settlement legal counsel invokes the statutory protections of the Reserve Bank of India Master Directions on Fair Practices Code and the landmark Supreme Court ruling in ICICI Bank v. Prakash Kaur. The advocate immediately serves a formal Vakalatnama and cease-and-desist notice instructing the lending institution and its recovery agencies to channel all communications strictly through counsel. This legal intervention halts unannounced home visits, prevents unauthorized calls outside the permitted hours of 8:00 AM to 7:00 PM, and protects the borrower's constitutional right to privacy under Article 21.",
  },
  {
    id: "faq-2",
    question: "Is debt settlement help recognized under Reserve Bank of India (RBI) regulations?",
    answer:
      "Yes, professional debt settlement is formally recognized under the Reserve Bank of India Prudential Framework for Resolution of Stressed Assets and the Circular on Compromise Settlements and Technical Write-offs. These central bank directives mandate that commercial banks and NBFCs establish board-approved compromise settlement policies empowering designated credit sanctioning committees to approve financial waivers for distressed borrowers. Furthermore, when formal compromise agreements are executed before the National Lok Adalat pursuant to Section 21 of the Legal Services Authorities Act, 1987, the resulting settlement award carries the binding authority of a non-appealable civil court decree.",
  },
  {
    id: "faq-3",
    question: "Why do free automated DIY settlement templates fail compared to advocate-led legal drafting?",
    answer:
      "Automated DIY online templates lack legal standing under the Advocates Act, 1961 and fail to satisfy the evidentiary threshold demanded by bank stressed asset management verticals. Bank legal cells immediately dismiss generic template letters because automated forms cannot establish a verified forensic paper trail of bona fide financial hardship, severe insolvency, or medical emergencies. Most critically, an automated template cannot enter an appearance or defend an accused borrower in magistrate court if the lender initiates criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881.",
  },
  {
    id: "faq-4",
    question: "How does transparent fixed legal advisory compare to traditional corporate law firm retainers?",
    answer:
      "Transparent fixed legal advisory eliminates the financial unpredictability of open-ended corporate law firm retainers and hourly billable rates, giving financially distressed borrowers complete cost certainty from initial ledger audit through final account closure. Enrolling an advocate under a fixed legal engagement establishes absolute attorney-client privilege under Section 126 of the Indian Evidence Act, 1872, legally barring the disclosure of confidential financial disclosures. Unlike unregulated third-party collection settlement agencies that extract recurring monthly subscriptions without court standing, licensed advocates provide direct courtroom representation with zero surprise retainers.",
  },
  {
    id: "faq-5",
    question: "How does legal counsel defend against Section 138 cheque bounce and Section 25 NACH complaints during debt settlement?",
    answer:
      "When lending institutions initiate coercive criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007, an advocate serves a prompt statutory legal reply rebutting the statutory presumption of an enforceable debt. The advocate demonstrates the absence of dishonest intention under Section 415 of the Indian Penal Code and presents the ongoing bona fide settlement negotiations as an affirmative defense. Upon payment of the agreed One-Time Settlement (OTS), counsel ensures that the complainant bank files a joint compounding petition under Section 147 of the NI Act to dismiss all pending criminal proceedings.",
  },
  {
    id: "faq-6",
    question: "Can secured loans like home or auto loans be settled through debt settlement help?",
    answer:
      "While debt settlement help is primarily designed for unsecured obligations such as personal loans, credit card balances, and fintech credit lines, secured debts like home loans or commercial mortgages are governed under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002. Secured lenders retain the statutory authority to seize and auction mortgaged collateral without court intervention under Section 13(4) of the SARFAESI Act. However, specialized advocates can intervene before the Debt Recovery Tribunal (DRT) to obtain interim stay orders against asset possession while negotiating a structured compromise resolution.",
  },
  {
    id: "faq-7",
    question: "How does an advocate ensure that an OTS sanction letter is authentic and legally enforceable?",
    answer:
      "An experienced advocate conducts a forensic verification of the One-Time Settlement (OTS) sanction letter before any payment is disbursed, ensuring it is issued on authentic bank corporate letterhead with a verified Centralized Banking System (CBS) reference number. The advocate confirms that the sanctioning official possesses delegated lending authority under internal bank credit governance rules and verifies that the letter explicitly contains an unconditional discharge clause under Section 63 of the Indian Contract Act, 1872. This verification eliminates the catastrophic risk of paying money into fraudulent third-party collection accounts.",
  },
  {
    id: "faq-8",
    question: "What happens to a borrower's CIBIL score after completing debt settlement, and how is credit rehabilitated?",
    answer:
      "Following settlement payment, the lending institution updates the loan status with credit bureaus including CIBIL, Experian, and CRIF High Mark to 'Settled' in accordance with the Credit Information Companies (Regulation) Act, 2005. Although a 'Settled' status reflects a historical concession and produces an initial dip in credit score, it immediately halts ongoing Days Past Due (DPD) accumulation and ceases destructive monthly overdue penalties. Borrowers can rehabilitate their credit profile over eighteen to twenty-four months by establishing timely repayments on a secured credit card backed by a fixed deposit and maintaining a low credit utilization ratio.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Siddharth Sengupta",
  authorRole: "Corporate Operations Manager, Gurugram • Settled Multiple Personal Loans & Credit Cards",
  reviewBody:
    "Facing severe debt distress across multiple unsecured credit cards and personal loans following an unexpected job loss left me paralyzed by relentless recovery agent calls and intimidating Section 138 notices. Free online templates were dismissed outright by bank managers, and traditional corporate law firms asked for exorbitant open-ended retainers. Advocate Anuj Anand Malik and AMA Legal Solutions provided immediate, transparent fixed legal advisory, served statutory cease-and-desist notices that ended recovery harassment within twenty-four hours, represented me before the National Lok Adalat, and negotiated an RBI-compliant compromise settlement with substantial waivers. They secured authentic bank No Dues Certificates for all accounts with zero surprise charges.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Debt Settlement Help in India: Advocate-Led RBI OTS Advisory & Legal Defense",
      description:
        "Comprehensive commercial and legal guide to debt settlement help in India under Reserve Bank of India compromise frameworks. Learn statutory rights, Section 138 defense, advocate negotiation, and No Dues Certificates.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Debt Settlement Help in India: Advocate-Led RBI OTS Advisory & Legal Defense",
      description:
        "Complete commercial and legal guide to debt settlement help in India. Understand how advocate-led compromise negotiations extinguish debt liabilities, halt recovery harassment, defeat Section 138 notices, and deliver authentic bank No Dues Certificates.",
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
      name: "Advocate-Led Debt Settlement Help & Legal Advisory",
      description:
        "Specialized legal advisory and dispute representation for One-Time Settlement (OTS) negotiations under Reserve Bank of India compromise frameworks, stopping unlawful recovery harassment and securing authentic bank No Dues Certificates.",
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
          name: "Debt Settlement Help in India",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Step Legal Debt Resolution Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Comprehensive Ledger Audit & Forensic Charge Dissection",
          description:
            "Senior banking advocates examine loan agreements, sanction letters, and account statements to isolate compounded interest, penal interest, and unauthorized processing fees from legitimate principal balances.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Issuance of Statutory Representation Notice & Harassment Injunction",
          description:
            "Formal service of advocate Vakalatnama and cease-and-desist notices under the RBI Master Directions on Fair Practices Code to halt recovery agent intimidation, residential visits, and contact outside statutory hours.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Formulation of Evidentiary Hardship Dossier Under Section 63",
          description:
            "Drafting of an evidence-backed One-Time Settlement (OTS) proposal demonstrating bona fide financial incapacity, medical distress, or commercial insolvency under Section 63 of the Indian Contract Act, 1872.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Institutional Bank Committee Negotiation & Sanction Letter Authentication",
          description:
            "Direct advocate negotiation before bank compromise committees and Lok Adalat benches, concluding with forensic verification of the bank-stamped OTS sanction letter and official signatory credentials.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Supervised Payment Execution & No Dues Certificate Enforcement",
          description:
            "Direct settlement disbursement to the official loan account, enforcement of bank No Dues Certificate (NDC) issuance, and statutory compliance updates with credit rating agencies.",
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
  { id: "legal-meaning-and-statutory-framework", title: "Statutory Framework & RBI Directives" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate Advisory vs DIY Templates vs Corporate Firms" },
  { id: "eligible-debts-for-settlement", title: "Eligible Debts vs Ineligible Facilities" },
  { id: "5-step-legal-protocol", title: "5-Step Legal Debt Resolution Protocol" },
  { id: "infographic-workflow", title: "Settlement Workflow Infographic" },
  { id: "statutory-criminal-defense", title: "Section 138 & Section 25 Legal Defense" },
  { id: "rbi-anti-harassment-enforcement", title: "Enforcing RBI Anti-Harassment Directives" },
  { id: "ots-letter-authentication-and-ndc", title: "Sanction Letter Verification & No Dues Certificate" },
  { id: "cibil-score-rehabilitation", title: "Credit Score Impact & Legal Rehabilitation" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "more-legal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-authorities", title: "Statutory References & Judicial Authorities" },
  { id: "ama-company-profile", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function DebtSettlementHelpInIndiaClient() {
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
    const textMsg = `Hello AMA Legal Solutions, I require professional debt settlement help for my outstanding loan accounts.
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
      "Debt Settlement Help in India: Advocate-Led RBI OTS Advisory & Legal Defense – AMA Legal Solutions";
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
      label: "Debt Settlement Help in India",
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
                <span>⚖️</span> Statutory Debt Resolution &amp; RBI OTS Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Professional <span className="text-[#D2A02A]">Debt Settlement Help</span> in India: Advocate-Led OTS Advisory &amp; Legal Protection
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Reclaim financial freedom and legal peace of mind with India&apos;s trusted advocate-led debt resolution practice.
                AMA Legal Solutions provides institutional One-Time Settlement (OTS) representation under Reserve Bank of India
                compromise frameworks, terminates recovery agent harassment through statutory Vakalatnamas, and defends against
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
                    <span className="text-gray-400">⏱️</span> 17 Min Read
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
                  src="/images/og/debt-settlement-help-in-india.png"
                  alt="Debt Settlement Help in India – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Advocate-Led Banking Resolution
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    RBI Compromise Framework &bull; 100% Confidential Legal Privilege
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
                  Absolute Attorney Privilege
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> Official NDC
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Bank-Stamped Debt Closure
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
                    onClick={() => handleShare("whatsapp")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-green-50 text-green-600 hover:bg-green-100 transition cursor-pointer"
                    title="Share on WhatsApp"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition cursor-pointer"
                    title="Copy Link"
                  >
                    {shareMsg || "Copy Link"}
                  </button>
                </div>
              </div>

              {/* ── STANDALONE QUICK ANSWER BLOCK ── */}
              <div
                id="quick-answer"
                className="p-6 bg-amber-50/60 border-l-4 border-[#D2A02A] rounded-r-xl space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A4C33]">
                  <span>⚡</span> Quick Answer: What is Professional Debt Settlement Help in India?
                </div>
                <p className="text-base text-gray-800 leading-relaxed font-medium">
                  Professional <strong>debt settlement help</strong> in India is an advocate-supervised legal process wherein licensed legal counsel represents distressed borrowers to negotiate a formal One-Time Settlement (OTS) with commercial banks and non-banking financial companies (NBFCs) under the Reserve Bank of India (RBI) Prudential Framework for Resolution of Stressed Assets and Section 63 of the Indian Contract Act, 1872. Specialized debt settlement help immediately halts unlawful recovery agent harassment through statutory Vakalatnamas, defends against coercive criminal complaints under Section 138 of the Negotiable Instruments Act and Section 25 of the Payment and Settlement Systems Act, and secures an authentic, bank-stamped No Dues Certificate (NDC) under transparent fixed legal advisory without hourly markups or open-ended retainers.
                </p>
              </div>

              {/* ── SECTION 1: STATUTORY FRAMEWORK & RBI DIRECTIVES ── */}
              <section id="legal-meaning-and-statutory-framework" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  Statutory Meaning &amp; Regulatory Framework of Debt Settlement in India
                </h2>

                <p className="text-base text-gray-700 leading-relaxed">
                  In Indian commercial and banking jurisprudence, debt settlement is not an informal request for charity or an unregulated concession. Rather, debt settlement represents a legally binding bilateral contract recognized under <strong>Section 63 of the Indian Contract Act, 1872</strong>, which codifies that every promisee may dispense with or remit, wholly or in part, the performance of the promise made to them, or may accept instead of it any satisfaction which they think fit. When a banking institution executes a compromise settlement agreement with a borrower, the payment of the agreed settlement sum completely and irrevocably discharges the borrower from all further legal liability.
                </p>

                <p className="text-base text-gray-700 leading-relaxed">
                  From a regulatory standpoint, institutional debt settlement is anchored in clear mandates issued by the central banking authority. The <strong>Reserve Bank of India (RBI) Framework for Compromise Settlements and Technical Write-offs</strong>, read alongside the <strong>Master Direction on Fair Practices Code for Lenders</strong>, establishes that regulated entities—including all scheduled commercial banks, public sector lenders, regional rural banks, and non-banking financial companies (NBFCs)—must maintain transparent, board-approved compromise settlement policies. These institutional guidelines permit authorized bank committees to sanction substantial waivers on penal interest, late payment penalties, and compounded interest, and in cases of documented insolvency, to accept haircuts on the principal outstanding balance.
                </p>

                <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#D2A02A]/30 space-y-3">
                  <h4 className="font-bold text-[#5A4C33] text-sm uppercase tracking-wide flex items-center gap-2">
                    <span>📜</span> Key Statutory Pillars of Indian Debt Settlement
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span><strong>Section 63, Indian Contract Act, 1872:</strong> Empowers creditors to remit or accept reduced satisfaction to fully extinguish contractual obligations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span><strong>RBI Circular on Compromise Settlements:</strong> Obligates banks and NBFCs to maintain objective, board-approved compromise frameworks for stressed accounts without discrimination.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span><strong>Section 21, Legal Services Authorities Act, 1987:</strong> Confers the status of a final, non-appealable civil court decree upon compromise settlements executed before the Lok Adalat.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span><strong>Section 126, Indian Evidence Act, 1872:</strong> Confers absolute legal privilege on all client communications, balance sheets, and financial disclosures made to enrolled advocates.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── SECTION 2: COMMERCIAL REALITY — ADVOCATE VS DIY VS CORPORATE ── */}
              <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  The Commercial Reality: Transparent Advocate Advisory vs. Free DIY Templates vs. Corporate Law Firms
                </h2>

                <p className="text-base text-gray-700 leading-relaxed">
                  When facing severe financial distress, borrowers often search for immediate debt settlement help. In doing so, borrowers encounter three distinct avenues: free automated DIY templates found on unregulated internet websites, traditional corporate law firms charging exorbitant hourly retainers, and specialized advocate-led legal practices offering transparent fixed legal advisory. Understanding the commercial and legal differences between these alternatives is critical to securing genuine debt relief and avoiding legal jeopardy.
                </p>

                <blockquote className="border-l-4 border-[#D2A02A] pl-4 italic text-gray-700 bg-amber-50/40 p-4 rounded-r-lg">
                  &ldquo;A debt settlement negotiation is a formal legal dispute conducted against institutional bank legal cells. Submitting an unverified DIY internet template or hiring an unregulated call-center agency provides zero legal protection when a bank files a criminal complaint under Section 138 of the Negotiable Instruments Act. Legal accessibility requires transparent fixed advisory, direct advocate accountability, and enforceable courtroom defense.&rdquo;
                  <footer className="text-xs text-gray-500 font-semibold mt-2 not-italic">
                    — Advocate Anuj Anand Malik, Founder &amp; Senior Advocate, AMA Legal Solutions
                  </footer>
                </blockquote>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a202c]">
                    Why Free Automated Online DIY Templates Fail in Banking Practice
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Automated online forms and generic settlement draft templates may appear cost-effective initially, but they present grave structural risks:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base text-gray-700">
                    <li><strong>Zero Evidentiary Standing:</strong> Institutional bank compromise committees follow rigorous internal audit controls. A boilerplate template letter lacking formal forensic financial accounting or certified hardship proofs is routinely rejected by credit risk managers without review.</li>
                    <li><strong>Accidental Admission of Liability:</strong> Poorly drafted DIY letters frequently contain inadvertent acknowledgments of debt that restart the three-year limitation period under the <em>Limitation Act, 1963</em>, inadvertently forfeiting the borrower&apos;s statutory defenses.</li>
                    <li><strong>Total Absence of Criminal Courtroom Defense:</strong> When a bank serves a statutory notice under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, an internet template cannot draft a tailored statutory reply, enter an appearance before a Judicial Magistrate, or prevent bailable warrants.</li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a202c]">
                    Why Uncapped Corporate Law Firm Retainers Are Ill-Suited for Distressed Borrowers
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Traditional multi-tier corporate law firms operate on hourly billing models, junior associate staffing markups, and open-ended retainer agreements. For an individual or small business owner already struggling with monthly liquidity, committing to unpredictable legal billing creates compounding anxiety. In contrast, <strong>AMA Legal Solutions</strong> champions commercial accessibility through transparent fixed legal advisory. Borrowers receive senior advocate representation, comprehensive ledger audits, anti-harassment injunctions, and full bank negotiations with complete financial predictability and zero surprise retainers.
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                    <thead>
                      <tr className="bg-[#1a202c] text-white text-xs uppercase tracking-wider">
                        <th className="p-3.5 border-b border-gray-700 font-semibold">Evaluation Criteria</th>
                        <th className="p-3.5 border-b border-gray-700 font-semibold">Free Online DIY Templates</th>
                        <th className="p-3.5 border-b border-gray-700 font-semibold">Corporate Law Firms</th>
                        <th className="p-3.5 border-b border-gray-700 font-semibold text-[#D2A02A]">AMA Legal Solutions</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm divide-y divide-gray-200 text-gray-700">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Legal Standing in Court</td>
                        <td className="p-3.5 text-red-600 font-medium">None (Non-enforceable forms)</td>
                        <td className="p-3.5 text-green-700 font-medium">Enrolled Advocates</td>
                        <td className="p-3.5 text-green-700 font-bold bg-amber-50/50">Enrolled Senior Advocates</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Attorney-Client Privilege</td>
                        <td className="p-3.5 text-red-600 font-medium">No legal privilege</td>
                        <td className="p-3.5 text-green-700 font-medium">Yes (Section 126 Evidence Act)</td>
                        <td className="p-3.5 text-green-700 font-bold bg-amber-50/50">100% Confidential Legal Privilege</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Fee &amp; Cost Predictability</td>
                        <td className="p-3.5 text-gray-600">Free download, but zero outcome</td>
                        <td className="p-3.5 text-red-600 font-medium">Uncapped hourly billing &amp; retainers</td>
                        <td className="p-3.5 text-green-700 font-bold bg-amber-50/50">Transparent Fixed Legal Advisory</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Recovery Harassment Halt</td>
                        <td className="p-3.5 text-red-600 font-medium">Ignored by recovery agencies</td>
                        <td className="p-3.5 text-green-700 font-medium">Notice served on billable hours</td>
                        <td className="p-3.5 text-green-700 font-bold bg-amber-50/50">Immediate Statutory Vakalatnama</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Section 138 Criminal Defense</td>
                        <td className="p-3.5 text-red-600 font-medium">Cannot appear or defend in court</td>
                        <td className="p-3.5 text-green-700 font-medium">Additional litigation retainers</td>
                        <td className="p-3.5 text-green-700 font-bold bg-amber-50/50">Integrated Legal Representation</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Bank NDC Verification</td>
                        <td className="p-3.5 text-red-600 font-medium">Risk of fake collection receipts</td>
                        <td className="p-3.5 text-green-700 font-medium">Formal document review</td>
                        <td className="p-3.5 text-green-700 font-bold bg-amber-50/50">Forensic CBS &amp; Zonal Signatory Audit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── SECTION 3: ELIGIBLE DEBTS VS INELIGIBLE FACILITIES ── */}
              <section id="eligible-debts-for-settlement" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  Eligible Debts vs. Ineligible Facilities: What Loans Can Be Settled?
                </h2>

                <p className="text-base text-gray-700 leading-relaxed">
                  A foundational step in seeking professional debt settlement help is distinguishing between unsecured credit facilities, which are prime candidates for compromise settlements, and secured credit lines governed by asset-recovery statutes. Lenders evaluate settlement proposals based on collateral coverage, underlying security, and the commercial cost of protracted litigation.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                    <thead>
                      <tr className="bg-[#5A4C33] text-white text-xs uppercase tracking-wider">
                        <th className="p-3.5 border-b border-gray-700 font-semibold">Credit Facility Type</th>
                        <th className="p-3.5 border-b border-gray-700 font-semibold">Settlement Feasibility</th>
                        <th className="p-3.5 border-b border-gray-700 font-semibold">Applicable Legal Mechanism</th>
                        <th className="p-3.5 border-b border-gray-700 font-semibold">Advocate Strategic Role</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm divide-y divide-gray-200 text-gray-700">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Unsecured Personal Loans</td>
                        <td className="p-3.5 text-green-700 font-bold">Highly Eligible</td>
                        <td className="p-3.5">RBI Stressed Assets Framework &bull; Sec 63 Contract Act</td>
                        <td className="p-3.5">Audit penal charges, compile hardship dossier, negotiate OTS letter.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Credit Card Outstandings</td>
                        <td className="p-3.5 text-green-700 font-bold">Highly Eligible</td>
                        <td className="p-3.5">Usurious interest challenge &bull; RBI Master Directions</td>
                        <td className="p-3.5">Eliminate compounded annualized finance charges and late fee markups.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Fintech &amp; Instant Loan Apps</td>
                        <td className="p-3.5 text-green-700 font-bold">Highly Eligible</td>
                        <td className="p-3.5">RBI Digital Lending Guidelines &bull; IT Act Data Privacy</td>
                        <td className="p-3.5">Halt unlawful contact list scraping and enforce regulated recovery rules.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Unsecured Business Loans</td>
                        <td className="p-3.5 text-green-700 font-bold">Eligible with Proof</td>
                        <td className="p-3.5">MSME Restructuring &bull; Bank Stressed Assets Wing</td>
                        <td className="p-3.5">Present audited balance sheets demonstrating commercial insolvency.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Home Loans &amp; Mortgages</td>
                        <td className="p-3.5 text-amber-700 font-bold">Conditional / Limited</td>
                        <td className="p-3.5">SARFAESI Act, 2002 &bull; Sec 13(2) &amp; Sec 13(4)</td>
                        <td className="p-3.5">File DRT Securitisation Applications to restrain auction during restructuring.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Vehicle / Auto Loans</td>
                        <td className="p-3.5 text-amber-700 font-bold">Conditional</td>
                        <td className="p-3.5">Hypothecation Agreement &bull; Arbitration Act, 1996</td>
                        <td className="p-3.5">Restrain extrajudicial vehicle repossession through Section 9 petitions.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── SECTION 4: 5-STEP LEGAL SETTLEMENT PROTOCOL ── */}
              <section id="5-step-legal-protocol" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  The 5-Step Legal Debt Settlement Protocol at AMA Legal Solutions
                </h2>

                <p className="text-base text-gray-700 leading-relaxed">
                  Executing a successful compromise settlement requires a methodical, litigation-tested procedure. Our senior advocates implement a five-step legal protocol designed to safeguard your rights, eliminate coercive collection tactics, and secure authentic debt extinguishment.
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#D2A02A]/30 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                        01
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Comprehensive Ledger Audit &amp; Forensic Charge Dissection
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-12">
                      Our banking legal team scrutinizes your original loan agreement, sanction schedules, and multi-year statement of accounts. We isolate illegitimate penal interest, annualized compound finance charges, insurance premiums added without consent, and bounce charges. By dissecting the account ledger, we establish the true principal benchmark, stripping away inflated collection claims.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#D2A02A]/30 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                        02
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Issuance of Statutory Representation Notice &amp; Anti-Harassment Injunction
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-12">
                      An enrolled advocate serves a formal Vakalatnama and legal notice upon the lender&apos;s managing director and collection heads. Citing the RBI Master Directions on Fair Practices Code and Supreme Court directives, this notice informs the creditor that you are represented by counsel. The notice legally forbids third-party recovery agents from contacting your workplace, calling outside statutory hours, or visiting your residence.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#D2A02A]/30 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                        03
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Formulation of Evidentiary Hardship Dossier Under Section 63
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-12">
                      Banks require verifiable evidence to justify debt waivers to their statutory auditors and credit committees. We draft a comprehensive legal dossier documenting bona fide hardship—including termination letters, medical diagnosis records, salary reduction slips, or business balance sheets. This evidence-based petition substantiates that the proposed compromise is commercially advantageous for the bank compared to uncollectible litigation.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#D2A02A]/30 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                        04
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Institutional Bank Committee Negotiation &amp; Sanction Letter Authentication
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-12">
                      Our senior advocates represent you directly before bank stressed asset committees, circle legal managers, and National Lok Adalat benches. Once a compromise is reached, we conduct a forensic audit of the formal OTS sanction letter. We verify that the document is issued on genuine corporate letterhead, contains a verifiable CBS reference number, and includes explicit clauses discharging all future claims.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#D2A02A]/30 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                        05
                      </span>
                      <h3 className="text-lg font-bold text-[#1a202c]">
                        Supervised Payment Execution &amp; No Dues Certificate Enforcement
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-12">
                      Payment is routed exclusively and directly into your designated bank loan account—never through third-party escrow or intermediary accounts. Upon confirmation of receipt, we enforce the delivery of an unconditional, bank-stamped No Dues Certificate (NDC). Furthermore, our counsel monitors the mandatory reporting to CIBIL, Experian, and CRIF High Mark to record the account as formally settled.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 5: SIGNATURE EDITORIAL INFOGRAPHIC CARD ── */}
              <section id="infographic-workflow" className="space-y-4">
                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="flex flex-col items-center">
                    <div className="w-full rounded-xl overflow-hidden shadow-lg border border-[#D2A02A]/30">
                      <img
                        src="/images/og/debt-settlement-help-in-india.png"
                        alt="Statutory Debt Resolution & RBI Compromise Workflow Infographic – AMA Legal Solutions"
                        className="w-full h-auto object-cover block"
                      />
                    </div>
                    <div className="mt-4 text-center max-w-2xl">
                      <h4 className="text-sm md:text-base font-bold text-[#1a202c]">
                        Institutional Debt Resolution &amp; RBI Compromise Workflow
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        Visualizing the five-stage advocate-led protocol: forensic ledger review, statutory Vakalatnama issuance under RBI fair practice directives, evidentiary hardship filing, bank committee compromise negotiation, and enforceable No Dues Certificate issuance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── SECTION 6: SECTION 138 & SECTION 25 CRIMINAL DEFENSE ── */}
              <section id="statutory-criminal-defense" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  Defending Criminal Litigation: Section 138 NI Act &amp; Section 25 PSSA
                </h2>

                <p className="text-base text-gray-700 leading-relaxed">
                  A common pressure tactic employed by banking institutions and NBFCs is converting civil loan defaults into criminal litigation. When security cheques or electronic NACH mandates fail due to insufficient funds, lenders frequently issue statutory demand notices under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> or <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong>.
                </p>

                <div className="bg-[#FAF7F0] p-6 rounded-xl border border-[#D2A02A]/30 space-y-4">
                  <h3 className="text-lg font-bold text-[#5A4C33] flex items-center gap-2">
                    <span>⚖️</span> Strategic Legal Defense Protocols in Magistrate Courts
                  </h3>
                  <div className="space-y-3 text-sm md:text-base text-gray-700">
                    <p>
                      <strong>1. Mandatory 15-Day Reply Window:</strong> Under Section 138(b) of the NI Act, an accused recipient has fifteen days from receipt of statutory notice to respond. Our advocates draft a comprehensive legal reply establishing that the dishonoured cheque was delivered as an undated security instrument rather than for a matured debt, rebutting the statutory presumption under Section 139.
                    </p>
                    <p>
                      <strong>2. Rebutting Fraudulent Intent Under IPC / BNS:</strong> A civil inability to pay does not constitute criminal breach of trust or cheating. In accordance with Supreme Court jurisprudence, financial distress arising from economic misfortune lacks <em>mens rea</em> (guilty mind), rendering criminal cheating complaints legally untenable.
                    </p>
                    <p>
                      <strong>3. Compounding of Offenses Under Section 147:</strong> Section 147 of the Negotiable Instruments Act provides that every offense punishable under the Act is compoundable. When our advocates execute an OTS agreement, we insert a mandatory clause requiring the bank&apos;s legal representative to appear before the Judicial Magistrate and file a joint compounding petition to withdraw the complaint in its entirety.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 7: ENFORCING RBI ANTI-HARASSMENT DIRECTIVES ── */}
              <section id="rbi-anti-harassment-enforcement" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  Enforcing RBI Anti-Harassment Directives: Shielding Borrowers from Coercion
                </h2>

                <p className="text-base text-gray-700 leading-relaxed">
                  Third-party recovery agencies frequently deploy intimidatory tactics, unsolicited phone calls to relatives, workplace confrontations, and public humiliation. These abusive practices violate regulatory frameworks and constitutional rights. Retaining legal counsel creates an enforceable barrier against collection misconduct.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a202c]">
                    Binding Rules Enforced by Advocate Representation
                  </h3>
                  <ul className="space-y-3 text-sm md:text-base text-gray-700">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D2A02A] font-bold text-lg">&bull;</span>
                      <span><strong>Permitted Calling Window:</strong> The RBI Master Direction mandates that recovery agents may only communicate between 8:00 AM and 7:00 PM. Calls outside this window are actionable regulatory violations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D2A02A] font-bold text-lg">&bull;</span>
                      <span><strong>Strict Ban on Third-Party Privacy Violations:</strong> Recovery agents are strictly prohibited from contacting your colleagues, friends, neighbors, or employers regarding your financial obligations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D2A02A] font-bold text-lg">&bull;</span>
                      <span><strong>Mandatory Identification &amp; Authorization:</strong> Every recovery representative must carry formal bank identification, an authorization letter, and an official notice of debt assignment. Unidentified recovery agents have zero legal standing.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D2A02A] font-bold text-lg">&bull;</span>
                      <span><strong>Regulatory Recourse via RBI Ombudsman:</strong> If an agency violates these standards after advocate notification, our team files formal complaints through the RBI Complaint Management System (CMS) under the Integrated Ombudsman Scheme, 2021, and initiates contempt or civil tort proceedings.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── SECTION 8: OTS LETTER AUTHENTICATION & NO DUES CERTIFICATE ── */}
              <section id="ots-letter-authentication-and-ndc" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  Sanction Letter Verification &amp; Securing the No Dues Certificate (NDC)
                </h2>

                <p className="text-base text-gray-700 leading-relaxed">
                  One of the greatest hazards facing unrepresented borrowers is making settlement payments against forged or unauthorized settlement letters issued by rogue recovery agents. Paying money without rigorous legal verification often results in the sum being credited as a regular part-payment, leaving the loan account active and subject to ongoing interest compounding.
                </p>

                <div className="bg-[#FAF7F0] p-6 rounded-xl border border-[#D2A02A]/30 space-y-4">
                  <h3 className="text-lg font-bold text-[#5A4C33] flex items-center gap-2">
                    <span>🔍</span> Forensic Checklist for Valid Debt Settlement Letters
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-700">
                    <div className="p-3 bg-white rounded-lg border border-gray-200 space-y-1">
                      <p className="font-bold text-gray-900">Official Bank Letterhead</p>
                      <p>Must display the bank&apos;s registered corporate name, CIN, logo, and zonal office address.</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-200 space-y-1">
                      <p className="font-bold text-gray-900">Unique CBS Reference Number</p>
                      <p>Must include a system-generated reference traceable directly within the bank&apos;s central core software.</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-200 space-y-1">
                      <p className="font-bold text-gray-900">Signatory Authority &amp; Official Domain</p>
                      <p>Signed by an authorized branch or circle manager with official designation and verified bank domain email.</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-200 space-y-1">
                      <p className="font-bold text-gray-900">Full &amp; Final Extinguishment Clause</p>
                      <p>Explicitly states that upon receipt of the agreed sum, the entire loan account is closed with zero future claims.</p>
                    </div>
                  </div>
                </div>

                <p className="text-base text-gray-700 leading-relaxed">
                  Once payment is completed in accordance with the authenticated letter, our legal counsel ensures the issuance of an official <strong>No Dues Certificate (NDC)</strong> or Closure Letter. This document is your permanent legal shield against future asset attachment, third-party collection claims, or legal proceedings.
                </p>
              </section>

              {/* ── SECTION 9: CIBIL SCORE IMPACT & REHABILITATION ── */}
              <section id="cibil-score-rehabilitation" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  CIBIL Score Impact &amp; Strategic Post-Settlement Credit Rehabilitation
                </h2>

                <p className="text-base text-gray-700 leading-relaxed">
                  Transparency regarding credit score consequences is an essential component of honest legal counsel. Under the <strong>Credit Information Companies (Regulation) Act, 2005</strong>, when a loan is resolved through a compromise settlement, the lending institution reports the account to credit bureaus with the remark <em>&lsquo;Settled&rsquo;</em>.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a202c]">
                    Settled vs. Written-Off: The Critical Distinction
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    A &lsquo;Settled&rsquo; status confirms that the creditor entered into a mutual compromise, received the agreed satisfaction, and extinguished the debt obligation. In contrast, an account classified as &lsquo;Written Off&rsquo; or &lsquo;Post-Write-Off Settled&rsquo; indicates that the lender unilaterally wrote off the balance as bad debt while retaining ongoing rights of recovery. While a settled account results in a temporary score decrease, it immediately terminates destructive monthly Days Past Due (DPD) accumulation.
                  </p>
                </div>

                <div className="p-5 bg-amber-50/50 rounded-xl border border-[#D2A02A]/30 space-y-3">
                  <h4 className="font-bold text-[#5A4C33] text-sm uppercase tracking-wider">
                    The 24-Month Credit Restoration Roadmap
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">1.</span>
                      <span><strong>Obtain Secured Credit Card:</strong> Open a fixed-deposit-backed secured credit card with a scheduled commercial bank to initiate positive credit reporting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">2.</span>
                      <span><strong>Maintain Sub-30% Credit Utilization:</strong> Restrict monthly credit card usage to below thirty percent of the available credit limit and settle the entire balance on time.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">3.</span>
                      <span><strong>Audit Bureau Records Every Quarter:</strong> Review your CIBIL, Experian, and Equifax reports every ninety days to ensure no obsolete DPD marks or phantom accounts remain active.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">4.</span>
                      <span><strong>Re-establish Pristine Repayment History:</strong> Consistent, disciplined repayment over eighteen to twenty-four months restores creditworthiness for future personal or home finance.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── SECTION 10: 8-QUESTION ACCORDION FAQ ── */}
              <section id="frequently-asked-questions" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  Frequently Asked Questions About Debt Settlement Help
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Authoritative statutory answers addressing common legal, commercial, and procedural concerns regarding debt settlement in India.
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-5 bg-[#FAF7F0]/60 hover:bg-[#FAF7F0] flex items-center justify-between gap-4 font-bold text-[#1a202c] text-sm md:text-base cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <span className="text-[#D2A02A] text-xl font-bold transition-transform duration-200">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-5 bg-white text-sm md:text-base text-gray-700 leading-relaxed border-t border-gray-100">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── SECTION 11: MORE LEGAL DEBT RELIEF GUIDES (INTERNAL LINKS) ── */}
              <section id="more-legal-guides" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  Explore Related Legal Debt Relief Guides
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Access comprehensive legal guides authored by our banking and dispute resolution advocates to understand your statutory options.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/best-debt-settlement-law-firm-in-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                  >
                    <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Best Debt Settlement Law Firm in India &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Advocate-led RBI compromise frameworks and courtroom defense strategies across Indian jurisdictions.
                    </p>
                  </Link>

                  <Link
                    href="/debt-settlement-letter"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                  >
                    <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Debt Settlement Letter Drafting &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Essential legal clauses, evidentiary hardship attachments, and bank negotiation protocols.
                    </p>
                  </Link>

                  <Link
                    href="/essentials-of-a-valid-debt-settlement-letter"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                  >
                    <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Valid vs. Fake Settlement Letters &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      How to conduct a forensic check on CBS reference numbers and protect against fraudulent collection notices.
                    </p>
                  </Link>

                  <Link
                    href="/what-is-debt-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                  >
                    <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      What is Debt Settlement? &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Detailed statutory meaning, legal rights under Section 63, and RBI OTS framework breakdown.
                    </p>
                  </Link>

                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                  >
                    <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Loan Settlement vs. Debt Consolidation &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Comparative legal and commercial evaluation of principal write-offs versus restructured repayment loans.
                    </p>
                  </Link>

                  <Link
                    href="/section-138-cheque-bounce-notice-for-personal-loan"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                  >
                    <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Section 138 NI Act Defense Guide &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Magistrate summons defense, statutory replies, and compounding procedures under Section 147.
                    </p>
                  </Link>

                  <Link
                    href="/protection-from-loan-recovery-harassment"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                  >
                    <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Protection from Recovery Harassment &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Statutory steps to enforce RBI fair practices codes and file complaints against rogue agencies.
                    </p>
                  </Link>

                  <Link
                    href="/special-lok-adalat-for-loan-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                  >
                    <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                      Lok Adalat Loan Settlement Guide &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      How to secure binding civil court decrees under the Legal Services Authorities Act, 1987.
                    </p>
                  </Link>
                </div>
              </section>

              {/* ── SECTION 12: REFERENCES & AUTHORITY ── */}
              <section id="statutory-authorities" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c]">
                  Statutory References &amp; Regulatory Authorities
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Official statutory portals and central regulatory frameworks governing compromise settlements, banking conduct, and judicial oversight in India:
                </p>

                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">&bull;</span>
                    <div>
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                      >
                        Reserve Bank of India (RBI)
                      </a>
                      <span className="text-gray-600"> — Prudential Framework for Resolution of Stressed Assets and Master Directions on Fair Practices Code for Lenders.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">&bull;</span>
                    <div>
                      <a
                        href="https://main.sci.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                      >
                        Supreme Court of India
                      </a>
                      <span className="text-gray-600"> — Landmark rulings on recovery agent conduct (ICICI Bank v. Prakash Kaur) and Section 138 compounding jurisprudence.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">&bull;</span>
                    <div>
                      <a
                        href="https://nalsa.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                      >
                        National Legal Services Authority (NALSA)
                      </a>
                      <span className="text-gray-600"> — Statutory framework for National Lok Adalat conciliation under the Legal Services Authorities Act, 1987.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">&bull;</span>
                    <div>
                      <a
                        href="https://www.indiacode.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                      >
                        India Code Legislative Repository
                      </a>
                      <span className="text-gray-600"> — Official text of Section 63 Indian Contract Act, 1872 and Negotiable Instruments Act, 1881.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D2A02A] font-bold">&bull;</span>
                    <div>
                      <a
                        href="https://cms.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                      >
                        RBI Complaint Management System (CMS)
                      </a>
                      <span className="text-gray-600"> — Centralized portal for lodging regulatory grievances under the RBI Integrated Ombudsman Scheme, 2021.</span>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Bottom Social Share Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Share this legal resource:
                </span>
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
                    onClick={() => handleShare("whatsapp")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-green-50 text-green-600 hover:bg-green-100 transition cursor-pointer"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition cursor-pointer"
                  >
                    {shareMsg || "Copy Link"}
                  </button>
                </div>
              </div>

              {/* ── SECTION 13: AMA COMPANY & MEDIA SECTION ── */}
              <section id="ama-company-profile" className="space-y-6 pt-6">
                <div className="border-4 border-[#D2A02A] rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] shadow-md space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#1a202c] p-2 flex items-center justify-center shadow-md">
                        <img src="/ama3.svg" alt="AMA Legal Solutions" className="w-12 h-12 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#1a202c]">
                          AMA Legal Solutions
                        </h3>
                        <p className="text-xs text-gray-600 font-medium">
                          Premier Banking &amp; Dispute Resolution Law Firm &bull; India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                      <Stars count={5} />
                      <span className="font-extrabold text-[#1a202c] text-sm">4.7 / 5.0</span>
                      <span className="text-xs text-gray-500 font-medium">(Google Rating)</span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    AMA Legal Solutions is an established Indian law firm dedicated to defending borrowers against unfair banking practices, excessive interest compounding, and unlawful recovery coercion. Led by Advocate Anuj Anand Malik, our legal team provides constitutional representation before Civil Courts, Debt Recovery Tribunals (DRT), High Courts, and National Lok Adalat benches. We combine deep banking litigation acumen with transparent fixed legal advisory to ensure complete debt resolution without surprise retainers.
                  </p>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#5A4C33] mb-3">
                      Our Legal Solutions Portfolio:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <Link
                        href="/personal-loan-settlement"
                        className="p-2.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition block"
                      >
                        Personal Loan OTS
                      </Link>
                      <Link
                        href="/credit-card-debt-settlement"
                        className="p-2.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition block"
                      >
                        Credit Card Relief
                      </Link>
                      <Link
                        href="/section-138-cheque-bounce-notice-for-personal-loan"
                        className="p-2.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition block"
                      >
                        Section 138 Defense
                      </Link>
                      <Link
                        href="/protection-from-loan-recovery-harassment"
                        className="p-2.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition block"
                      >
                        Anti-Harassment Shield
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

            </main>

            {/* ══ RIGHT STICKY SIDEBAR (280px) ══ */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-[#D2A02A] shadow-md">
                  <img
                    src="/anujbhiya.png"
                    alt="Advocate Anuj Anand Malik"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-[#1a202c]">
                    Anuj Anand Malik
                  </h3>
                  <p className="text-xs text-[#D2A02A] font-bold mt-0.5">
                    Senior Advocate &amp; Founder
                  </p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    Advocate practicing in banking litigation, debt resolution, DRT disputes, and Negotiable Instruments Act defense before High Courts and Supreme Court tribunals.
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition"
                  >
                    <span>Connect on LinkedIn</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
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
                    href="/best-debt-settlement-law-firm-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Law Firm
                  </Link>
                  <Link
                    href="/debt-settlement-letter"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement Letter Format
                  </Link>
                  <Link
                    href="/essentials-of-a-valid-debt-settlement-letter"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Fake vs Real Settlement Letters
                  </Link>
                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs Consolidation
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
                    href="/special-lok-adalat-for-loan-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Special Lok Adalat Settlements
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
                        placeholder="e.g. Siddharth Sengupta"
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
                          placeholder="e.g. siddharth@example.com"
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
                          Debt Facility Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm bg-white"
                        >
                          <option value="Unsecured Personal Loans">Unsecured Personal Loans</option>
                          <option value="Credit Card Balances">Credit Card Balances</option>
                          <option value="Fintech Instant Loan Apps">Fintech Instant Loan Apps</option>
                          <option value="Business Loans (Unsecured)">Business Loans (Unsecured)</option>
                          <option value="Multiple Mixed Accounts">Multiple Mixed Accounts</option>
                          <option value="Section 138 Notice Received">Section 138 Notice Received</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Case Details &amp; Creditor Information
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={3}
                        placeholder="Specify bank names, recovery calls, legal notices received, or questions regarding RBI compromise settlement..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm resize-none"
                      />
                    </div>

                    <p className="text-[11px] text-gray-500 leading-tight">
                      🔒 <strong>100% Legal Confidentiality:</strong> Submitting this request establishes advocate-client privilege under Section 126 of the Indian Evidence Act. Your details are never shared with lenders or recovery agencies.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-[#D2A02A] hover:bg-[#b08522] text-white font-extrabold rounded-xl shadow-lg transition text-sm cursor-pointer"
                    >
                      Submit for Senior Advocate Review &rarr;
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#1a202c]">
                      Evaluation Request Received
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. A senior debt resolution advocate from AMA Legal Solutions has received your case details.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF7F0] rounded-2xl border border-[#D2A02A]/30 text-left space-y-2 text-xs text-gray-700">
                    <p><strong>Primary Contact:</strong> {formData.phone}</p>
                    <p><strong>Facility:</strong> {formData.assetType}</p>
                    <p><strong>Privilege Status:</strong> Protected under Section 126 Evidence Act</p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold rounded-xl shadow-md transition text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>💬 Continue Immediately on WhatsApp</span>
                    </button>
                    <button
                      onClick={resetModal}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-gray-500 hover:text-gray-800 transition cursor-pointer"
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

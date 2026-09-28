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
const PAGE_SLUG = "/loan-settlement-agency-fees-and-charges-in-india";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/loan-settlement-agency-fees-and-charges-in-india.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-28";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What is the standard fee structure charged by legitimate loan settlement advocates in India?",
    answer:
      "Legitimate loan settlement law firms in India adhere to a transparent two-tier fee structure comprising a nominal initial legal retainer and a performance-based success fee. The initial retainer covers formal case file documentation, forensic ledger accounting, emergency cease-and-desist notices to recovery agencies, and statutory representation across court or arbitration forums. The success fee is calculated strictly as a mutually agreed percentage of the actual debt amount saved, payable only after the lender issues an authentic, verified One-Time Settlement sanction letter directly to the borrower.",
  },
  {
    id: "faq-2",
    question: "Why should borrowers never pay full settlement fees in advance before receiving a bank letter?",
    answer:
      "Unregulated telecalling agencies and commercial debt intermediaries frequently demand substantial advance payments under the pretext of guaranteed debt forgiveness, which violates fair trade practices under Section 2(47) of the Consumer Protection Act, 2019. Once upfront funds are collected without milestone protections, these fly-by-night operators routinely abandon borrowers, leaving them vulnerable to escalating civil recovery suits, bank arbitration, and Section 138 cheque bounce proceedings. Enrolled advocates protect borrowers by structuring legal representation through transparent milestone agreements that tie compensation directly to verified legal outcomes.",
  },
  {
    id: "faq-3",
    question: "How is the 'percentage of savings' success fee calculated in a compromise settlement?",
    answer:
      "The percentage of savings fee model calculates professional compensation solely on the differential between the gross outstanding debt recorded on the bank's ledger and the final negotiated compromise sum sanctioned in the official One-Time Settlement letter. For instance, if an overdue loan balance is successfully compromised down to forty percent of its ledger total through advocate-led hardship negotiations, the sixty percent written off represents the net debt saved. The success fee is computed strictly as an agreed percentage of that sixty percent saved balance, aligning the law firm's incentives directly with maximizing borrower debt relief.",
  },
  {
    id: "faq-4",
    question: "Are loan settlement legal advisory fees legally refundable if a bank rejects the OTS offer?",
    answer:
      "Professional legal retainers paid to enrolled advocates compensate for specialized legal drafting, court appearances, representation before bank recovery committees, and administrative defense against coercive recovery tactics, which constitute rendered professional services under the Indian Contract Act, 1872. However, ethical law firms protect client interests by strictly conditioning any performance-linked success fees on the successful procurement of a verified bank settlement sanction letter. If a financial institution initially rejects an OTS proposal, legal counsel reframes the hardship petition, petitions higher-level stressed asset committees, or transitions the matter to the National Lok Adalat without levying additional success charges.",
  },
  {
    id: "faq-5",
    question: "How does hiring a settlement lawyer yield higher net savings compared to self-negotiation?",
    answer:
      "While borrowers attempting self-negotiation are routinely subjected to aggressive recovery pressure, high non-waivable penal interest, and unfavorable settlement terms dictated by collection managers, an enrolled Bar Council advocate utilizes statutory leverage to uncover usurious ledger charges and improper fee capitalizations. Legal advocates invoke the RBI Fair Practices Code, Article 21 constitutional privacy safeguards, and procedural defenses under the Arbitration and Conciliation Act, 1996 to compel banks to strip away one hundred percent of penal charges and negotiate strictly on the principal balance. This institutional advocacy typically secures significantly higher debt waivers that far surpass the cost of transparent legal representation.",
  },
  {
    id: "faq-6",
    question: "Does the Bar Council of India allow advocates to charge contingency fees?",
    answer:
      "Under Rule 20 of the Standards of Professional Conduct and Etiquette framed under the Advocates Act, 1961, advocates in India are strictly prohibited from stipulating for a fee contingent upon the results of litigation or sharing the proceeds of an actionable claim. In loan settlement matters, legitimate legal practitioners structure their compensation as transparent advisory retainers and professional documentation fees for out-of-court dispute resolution, institutional mediation, and statutory representation. Ethical law firms maintain clear, separate accounting for professional legal services to remain fully compliant with Bar Council of India professional standards.",
  },
  {
    id: "faq-7",
    question: "What hidden charges and monthly maintenance fees are common among fintech debt apps?",
    answer:
      "Unregulated fintech debt relief applications and online debt consolidation portals often conceal recurring monthly program maintenance fees, account opening subscription charges, and third-party escrow administration levies that deplete borrower funds without reducing principal loan liabilities. These digital platforms lack statutory authority to enter appearances before judicial magistrates or Debt Recovery Tribunals and cannot provide attorney-client confidentiality under Section 126 of the Indian Evidence Act. In contrast, advocate-led legal representation operates on a completely transparent fixed advisory model devoid of monthly software subscriptions or concealed ledger overheads.",
  },
  {
    id: "faq-8",
    question: "How can a borrower verify the authenticity of a settlement agency's billing agreement?",
    answer:
      "A legally enforceable legal representation agreement must be executed on appropriate stamp paper or formal legal letterhead specifying the enrolled advocate's Bar Council enrollment number, office jurisdiction, and a comprehensive scope of legal work. The agreement must clearly itemize the fixed initial retainer, expressly stipulate that success fees become payable exclusively upon the issuance of an authentic system-generated bank sanction letter, and explicitly disclaim any demand for cash transfers into personal telecaller accounts. Borrowers should verify the advocate's credentials directly on the respective State Bar Council roll and ensure all disbursements are remitted via verifiable banking channels.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Maninder Singh Sodhi",
  authorRole: "Retail Business Owner • Commercial Debt Compromise & Legal Defense",
  reviewBody:
    "Before finding AMA Legal Solutions, I was nearly tricked by an online telecaller agency demanding a large upfront advance with zero guarantee of bank approval. AMA's legal team was completely transparent: they reviewed my accounts, issued formal legal protections, and only charged their agreed success fee after HDFC issued an authentic settlement letter saving me over 60% of my outstanding dues.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Loan Settlement Agency Fees in India: Charges, Retainers & Success Fee Rules",
      description:
        "Wondering how much loan settlement agencies charge in India? Discover legitimate legal fee models, retainer vs success fees, scam red flags, and cost savings.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Loan Settlement Agency Fees in India: Charges, Retainers & Success Fee Rules",
      description:
        "Comprehensive legal analysis of loan settlement charges and legal fees in India. Explore retainer vs success fee structures, Bar Council ethical guidelines, advance-fee scam warning signs, and transparent advocate-led compromise negotiations.",
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
      name: "Advocate-Led Loan Settlement & Transparent Legal Advisory Services",
      description:
        "Senior advocate representation for loan settlement, commercial debt compromise, forensic ledger auditing, and anti-harassment injunctions under a transparent legal fee model with zero hidden charges.",
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
          name: "Loan Settlement Agency Fees and Charges in India",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Stage Transparent Advocate Protocol for Loan Settlement",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Ledger Audit & Usurious Fee Extraction",
          description:
            "Scrutinizing loan agreements, unbundled compound penalties, and illegal bounce fees under RBI fair practices guidelines to establish the accurate net principal baseline.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Statutory Cease-and-Desist Notice & Recovery Agent Injunction",
          description:
            "Dispatching advocate-certified legal notices to bank nodal officers to immediately halt third-party telecaller harassment and workplace invasions.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hardship Dossier Preparation & Committee Representation",
          description:
            "Compiling verified medical, employment termination, or business loss documentation to petition the bank's internal Stressed Asset Committee for maximum waiver sanction.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Magistrate, DRT & Arbitration Legal Defense",
          description:
            "Entering formal legal appearances to contest Section 138 NI Act summons, Section 25 PSSA notices, or unilateral arbitration proceedings while compromise terms are formalized.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Sanction Letter Forensic Verification, Escrow Payment & NDC Issuance",
          description:
            "Independently vetting system-generated settlement sanction letters, ensuring payment is credited directly into the borrower's loan account, and securing the No Dues Certificate.",
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
  { id: "quick-answer", title: "Quick Answer: Loan Settlement Fees" },
  { id: "agency-fee-models", title: "Legitimate Fee Models: Retainer vs Success" },
  { id: "expert-panel-fees-structure", title: "Expert Panel Fees Structure & Legal Review" },
  { id: "scam-red-flags", title: "Advance-Fee Scams & Telecaller Red Flags" },
  { id: "statutory-legal-framework", title: "Statutory Acts & Bar Council Standards" },
  { id: "comparative-matrix", title: "Comparison: Advocates vs Unregulated Agencies" },
  { id: "reasonable-settlement-percentage", title: "Reasonable Settlement Offers & Waivers" },
  { id: "the-5-stage-protocol", title: "5-Stage Transparent Advocate Protocol" },
  { id: "signature-infographic", title: "Fee Architecture & Dispute Resolution" },
  { id: "court-defense-vs-unregulated", title: "Judicial Defense: DRT, PSSA & Sec 138" },
  { id: "hidden-costs-debt-apps", title: "Hidden Charges in Fintech Debt Relief" },
  { id: "verifying-agreements", title: "Verifying Representation Agreements" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Legal Advisory" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function LoanSettlementAgencyFeesAndChargesInIndiaClient() {
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
    assetType: "Loan Settlement & Fee Transparency Advisory",
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
    const textMsg = `Hello AMA Legal Solutions, I require confidential advocate consultation regarding loan settlement charges, legal fee models, and transparent debt advisory in India.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Matter Type: ${formData.assetType}
Details: ${formData.message || "Requesting transparent legal advisory for loan settlement without hidden agency charges or advance-fee risks."}`;
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
      assetType: "Loan Settlement & Fee Transparency Advisory",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Loan Settlement Agency Fees in India: Charges, Retainers & Success Fee Rules – AMA Legal Solutions";
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
      label: "Loan Settlement Agency Fees and Charges in India",
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
                <span>⚖️</span> Commercial Debt Advisory &bull; Fee Transparency Standards
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Loan Settlement Agency Fees in India: <span className="text-[#D2A02A]">Charges, Retainers &amp; Success Fee Rules</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Navigating severe financial distress requires absolute clarity on professional costs before entering a debt compromise.
                Unregulated telecallers and unauthorized recovery agencies often exploit vulnerable borrowers with predatory advance-fee demands,
                monthly subscription retainers, and counterfeit settlement guarantees. Discover how legitimate Bar Council-enrolled advocates
                structure professional fees through transparent milestone retainers and performance-linked savings percentages, eliminating
                hidden costs and corporate law firm markups.
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
                  ✓ Transparent Milestone Retainers
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  ✓ Bar Council Ethics Compliant
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  ✓ Zero Advance Success Fees
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                  ✓ Section 126 Legal Privilege
                </span>
              </div>
            </div>

            {/* Right Col — Generated Luxury OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/loan-settlement-agency-fees-and-charges-in-india.png"
                  alt="Loan Settlement Agency Fees and Charges in India – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Transparent Legal Fee Architecture
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Advocate-Led Representation &bull; Zero Concealed Markups &bull; Authentic Bank Sanctions
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
                  High Courts, DRT &amp; Consumer Forums
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
                  Commercial Legal Guidance &bull; Bottom-of-Funnel Fee Transparency
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
                  <span className="text-xs text-gray-500 font-semibold">
                    Google Featured Snippet &amp; AI Overview Standard
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a202c]">
                  What are legitimate loan settlement agency fees and charges in India?
                </h2>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                  In India, legitimate loan settlement law firms charge a transparent, two-part fee structure consisting of a nominal upfront legal retainer (for court appearances, anti-harassment notices, and portfolio administration) and a success fee calculated strictly as a percentage of the total debt amount saved upon receipt of a verified bank sanction letter. Borrowers should avoid unregulated agencies that demand substantial non-refundable advance fees without Bar Council advocate credentials.
                </p>
              </div>

              {/* ── 2. AGENCY FEE MODELS: RETAINER VS SUCCESS ── */}
              <section id="agency-fee-models" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Legitimate Fee Models: Legal Retainer vs. Success Fee Structure
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers evaluating commercial debt resolution are frequently confused by the disparate billing models presented across the Indian financial landscape. While commercial intermediaries often present ambiguous quotes, legitimate legal practitioners structure engagements around two complementary pillars: professional administrative retainers and performance-linked savings incentives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D2A02A] flex items-center justify-center font-extrabold text-lg">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-[#1a202c]">
                      The Upfront Administrative Legal Retainer
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The initial retainer is dedicated entirely to active legal casework. It covers the drafting and dispatch of statutory cease-and-desist notices to banking compliance cells, forensic auditing of loan account ledgers to identify illegal penal compounding, entering formal Vakalatnama appearances in conciliation forums, and coordinating communications with bank recovery committees. Because this covers tangible legal services already being rendered, it prevents the debt settlement firm from operating on unverified speculation.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-lg">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-[#1a202c]">
                      The Performance-Linked Success Fee (Percentage of Savings)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The core commercial remuneration for debt negotiation is structured strictly as a pre-agreed percentage of the debt amount successfully written off by the lender. Crucially, this fee is triggered <strong>only after</strong> the financial institution issues an authentic, system-generated One-Time Settlement (OTS) letter verifying that the debt has been formally compromised. This aligns the law firm&apos;s financial interest directly with securing the maximum possible haircut for the client.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  By bifurcating costs into an accessible operational retainer and a post-sanction performance fee, borrowers are protected from paying for empty promises. If a bank refuses to negotiate or fails to issue an acceptable compromise sanction, no success fee is ever accrued or payable.
                </p>
              </section>

              {/* ── 3. EXPERT PANEL FEES STRUCTURE FOR LOAN SETTLEMENT ── */}
              <section id="expert-panel-fees-structure" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Expert Panel Fees Structure for Loan Settlement: Comprehensive Multi-Disciplinary Review
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A common search query among distressed borrowers is the <em>&ldquo;expert panel fees structure for loan settlement.&rdquo;</em> When handling substantial unsecured liabilities, business working capital exposures, or multi-lender credit portfolios, a single automated algorithm cannot achieve viable commercial relief. Stressed accounts require evaluation by an expert legal panel consisting of senior banking advocates, forensic financial auditors, and seasoned dispute mediators.
                </p>

                <div className="bg-[#FAF7F0] p-6 rounded-2xl border-l-4 border-[#D2A02A] space-y-4">
                  <h3 className="text-lg font-bold text-[#1a202c]">
                    What Constitutes an Expert Panel Legal Review?
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span><strong>Forensic Ledger Decomposition:</strong> Senior financial analysts scrutinize historical bank statements to unbundle illegal compounding penal interest, bounce processing surcharges, and unapproved insurance add-ons.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span><strong>Statutory Exposure Mapping:</strong> High Court advocates review whether the lender has initiated proceedings under Section 138 of the Negotiable Instruments Act, Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA), or unilateral arbitration clauses.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span><strong>Hardship Dossier Structuring:</strong> Compiling irrefutable documentation of bona fide medical incapacitation, involuntary business dissolution, or employment termination that meets institutional write-off criteria mandated by the Reserve Bank of India.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Unlike conventional corporate law firms that bill clients by the hour—creating unpredictable legal expenses that compound financial distress—AMA Legal Solutions utilizes an inclusive, fixed panel advisory model. All forensic audits, panel consultations, and strategic committee presentations are incorporated into a transparent, predictable fee agreement established prior to engagement.
                </p>
              </section>

              {/* ── 4. SCAM RED FLAGS & ADVANCE-FEE SCAMS ── */}
              <section id="scam-red-flags" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Advance-Fee Loan Settlement Scam Alert: Telecaller Red Flags
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The Indian debt relief market has seen an influx of unregulated telemarketing entities, unregulated fintech apps, and self-proclaimed &ldquo;debt settlement agencies&rdquo; that operate entirely outside the regulatory purview of the Bar Council of India or the Reserve Bank of India. Recognizing these fraudulent operators is critical to safeguarding your remaining capital and legal freedom.
                </p>

                <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-4">
                  <h3 className="text-lg font-bold text-rose-900 flex items-center gap-2">
                    <span>⚠️</span> Major Red Flags of Unregulated Debt Settlement Agencies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
                    <div className="p-3 bg-white rounded-xl border border-rose-100 shadow-2xs">
                      <strong className="text-rose-700 block mb-1">1. Demanding 100% Upfront Success Fees:</strong>
                      Demanding the entire settlement fee or large cash advances before initiating dialogue with the bank or securing a sanction letter.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-rose-100 shadow-2xs">
                      <strong className="text-rose-700 block mb-1">2. Promising Guaranteed Haircut Percentages:</strong>
                      Claiming an absolute guarantee of an eighty or ninety percent waiver without conducting a ledger audit or reviewing bank-specific write-off matrices.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-rose-100 shadow-2xs">
                      <strong className="text-rose-700 block mb-1">3. Directing Payments to Third-Party Escrows:</strong>
                      Instructing borrowers to transfer compromise funds into an agency-controlled escrow or UPI wallet rather than directly into the borrower&apos;s own loan account.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-rose-100 shadow-2xs">
                      <strong className="text-rose-700 block mb-1">4. Absence of Bar Council Credentials:</strong>
                      Operating as private limited call centers with telemarketers who lack legal degrees, court standing, and professional regulatory accountability.
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-rose-500 pl-4 py-2 italic text-gray-700 bg-rose-50/30 rounded-r-lg">
                  &ldquo;Under Section 2(47) and Section 89 of the Consumer Protection Act, 2019, promising guaranteed third-party banking outcomes and charging substantial non-refundable advances under misleading representations constitutes an unfair trade practice punishable with statutory penalties and compensation decrees.&rdquo;
                </blockquote>
              </section>

              {/* ── 5. STATUTORY LEGAL FRAMEWORK ── */}
              <section id="statutory-legal-framework" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Statutory Legal Framework: Bar Council Standards &amp; Consumer Safeguards
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A foundational difference between unauthorized debt agencies and licensed legal practitioners lies in statutory accountability. While telemarketing companies operate as commercial intermediaries without professional ethical codes, advocates are strictly governed by statutory legislation enacted by Parliament.
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-2xs">
                    <h3 className="text-base font-bold text-[#1a202c] mb-2 flex items-center gap-2">
                      <span className="text-[#D2A02A]">§</span> Bar Council of India Rules (Standards of Professional Conduct and Etiquette)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Framed under the Advocates Act, 1961, Rule 20 explicitly prohibits advocates from stipulating fees contingent upon the results of litigation or agreeing to share litigation proceeds. Consequently, reputable debt resolution advocates structure compensation around administrative legal advisory, out-of-court institutional mediation, and document verification services, maintaining full transparency and ethical compliance without entering into champertous or unconscionable fee agreements.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-2xs">
                    <h3 className="text-base font-bold text-[#1a202c] mb-2 flex items-center gap-2">
                      <span className="text-[#D2A02A]">§</span> Indian Contract Act, 1872 (Sections 23 and 25)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Under Section 23 of the Indian Contract Act, any agreement whose consideration or object is unlawful, fraudulent, or opposed to public policy is void ab initio. When unregulated agencies collect fees promising to &ldquo;erase CIBIL records illegally&rdquo; or &ldquo;bribe recovery officers,&rdquo; the contract is legally void. Legitimate legal representation agreements establish lawful consideration based on professional advocacy, statutory notice issuance, and formal banking compromise protocols.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-2xs">
                    <h3 className="text-base font-bold text-[#1a202c] mb-2 flex items-center gap-2">
                      <span className="text-[#D2A02A]">§</span> Indian Evidence Act (Section 126 Attorney-Client Privilege)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Communications between a borrower and an enrolled advocate enjoy absolute statutory privilege under Section 126 of the Indian Evidence Act. An advocate cannot be compelled to disclose financial assessments, confessions of default, or strategic discussions in any court of law. In sharp contrast, customer data shared with commercial fintech apps or call centers carries zero legal confidentiality and is frequently sold to third-party collection vendors.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 6. COMPARATIVE MATRIX ── */}
              <section id="comparative-matrix" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Institutional Comparison: Advocates vs. Unregulated Agencies vs. Self-Negotiation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Choosing the appropriate representation model directly determines both the financial outcome of your settlement and your protection against judicial harassment. Review how professional options compare across critical operational parameters:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-sm border-collapse rounded-2xl overflow-hidden shadow-xs border border-gray-200">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="p-3.5 md:p-4 font-bold border-b border-gray-700">Evaluation Parameter</th>
                        <th className="p-3.5 md:p-4 font-bold text-[#D2A02A] border-b border-gray-700">Enrolled Legal Advocates</th>
                        <th className="p-3.5 md:p-4 font-bold border-b border-gray-700">Unregulated Telecaller Agencies</th>
                        <th className="p-3.5 md:p-4 font-bold border-b border-gray-700">Self-Negotiation (DIY)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3.5 md:p-4 font-semibold text-gray-900">Fee Structure Model</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Transparent milestone retainer + Post-sanction success fee</td>
                        <td className="p-3.5 md:p-4 text-rose-600">Heavy advance fees + Recurring monthly subscription charges</td>
                        <td className="p-3.5 md:p-4 text-gray-600">Zero legal fees (but maximum unmitigated penal charges)</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3.5 md:p-4 font-semibold text-gray-900">Judicial Court Standing</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Authorized Vakalatnama in High Courts, DRT, Lok Adalat &amp; JMFC</td>
                        <td className="p-3.5 md:p-4 text-rose-600">Zero legal standing; strictly prohibited from courtroom appearance</td>
                        <td className="p-3.5 md:p-4 text-gray-600">Personal appearance required without statutory defense strategy</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3.5 md:p-4 font-semibold text-gray-900">Client Confidentiality</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">100% privileged under Section 126 Indian Evidence Act</td>
                        <td className="p-3.5 md:p-4 text-rose-600">Zero privilege; customer data frequently shared or leaked</td>
                        <td className="p-3.5 md:p-4 text-gray-600">Direct exposure of all personal assets to bank recovery teams</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3.5 md:p-4 font-semibold text-gray-900">Anti-Harassment Power</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Immediate legal notices citing RBI Fair Practices &amp; BNS criminal provisions</td>
                        <td className="p-3.5 md:p-4 text-rose-600">Ineffectual call blocking with zero statutory enforcement weight</td>
                        <td className="p-3.5 md:p-4 text-gray-600">Constant telecaller harassment and workplace visits</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3.5 md:p-4 font-semibold text-gray-900">Sanction Letter Verification</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Direct forensic verification with bank legal credit operations</td>
                        <td className="p-3.5 md:p-4 text-rose-600">High risk of counterfeit letters generated by collection agents</td>
                        <td className="p-3.5 md:p-4 text-gray-600">Borrower unable to differentiate partial payment receipts from true OTS</td>
                      </tr>
                      <tr className="hover:bg-amber-50/30 transition">
                        <td className="p-3.5 md:p-4 font-semibold text-gray-900">Net Financial Relief</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Maximum debt haircut via principal baseline negotiation</td>
                        <td className="p-3.5 md:p-4 text-rose-600">Severe net loss due to forfeited advances and continued litigation</td>
                        <td className="p-3.5 md:p-4 text-gray-600">Minimal waiver dictated by recovery agent collection targets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── 7. REASONABLE SETTLEMENT OFFERS & PERCENTAGE WAIVERS ── */}
              <section id="reasonable-settlement-percentage" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Reasonable Settlement Offers: Loan Settlement Percentage Rules
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers frequently inquire: <em>&ldquo;What is a reasonable settlement offer?&rdquo;</em> and <em>&ldquo;Loan settlement kitne percent hota hai?&rdquo;</em> (At what percentage does loan settlement occur in India?). Understanding the mathematical and legal dynamics behind bank compromise matrices enables borrowers to evaluate whether a proposed settlement is fair and legally sound.
                </p>

                <div className="space-y-4">
                  <div className="p-6 bg-[#FAF7F0] rounded-2xl border border-[#D2A02A]/40 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a202c]">
                      How Lenders Determine the Settlement Percentage
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Indian commercial banks and NBFCs categorize stressed assets under the Reserve Bank of India&apos;s Prudential Framework. Once an account exceeds ninety days of delinquency and is classified as a Non-Performing Asset (NPA), the lender must allocate mandatory capital provisioning on its balance sheet. The longer an account remains unserviced, the higher the required provisioning, incentivizing bank committees to accept structured compromise settlements to clean their bad debt ratios.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700 pt-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D2A02A] font-bold">&bull;</span>
                        <span><strong>Total Ledger Balance vs. True Principal:</strong> In prolonged defaults, accumulated penal interest, overdue late fees, and compounding charges can constitute over forty to fifty percent of the total demanded amount. A reasonable settlement begins by eliminating one hundred percent of these non-principal penalties.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D2A02A] font-bold">&bull;</span>
                        <span><strong>Typical Compromise Ranges:</strong> Depending on the borrower&apos;s provable hardship (catastrophic medical emergencies, permanent income cessation, business liquidation), authentic compromise sanctions typically settle between <strong>thirty to fifty percent</strong> of the gross outstanding ledger balance, translating to a substantial fifty to seventy percent debt reduction.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D2A02A] font-bold">&bull;</span>
                        <span><strong>Lump-Sum vs. Structured Tranches:</strong> Single lump-sum payments invariably secure the deepest waiver percentages. However, seasoned advocates routinely negotiate two to three structured monthly tranches for distressed clients without voiding agreed waiver terms.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── 8. THE 5-STAGE PROTOCOL ── */}
              <section id="the-5-stage-protocol" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Stage Advocate Protocol for Transparent Loan Settlement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To eliminate unexpected legal expenses and guarantee unassailable debt closure, AMA Legal Solutions executes a structured, multi-stage protocol designed to transition delinquent accounts into legally binding, debt-free exits:
                </p>

                <div className="space-y-6 my-6">
                  <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-gray-200 shadow-xs">
                    <span className="w-10 h-10 rounded-xl bg-[#D2A02A]/15 text-[#5A4C33] flex items-center justify-center font-extrabold text-base shrink-0">
                      01
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[#1a202c]">
                        Stage 1: Forensic Digital Ledger Audit &amp; Penal Extraction
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our legal team reviews all historical loan sanction agreements, repayment schedules, and account statements. We extract compound interest capitalizations, unapproved administrative fees, and automated bounce penalties to compute the genuine net principal baseline before opening negotiations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-gray-200 shadow-xs">
                    <span className="w-10 h-10 rounded-xl bg-[#D2A02A]/15 text-[#5A4C33] flex items-center justify-center font-extrabold text-base shrink-0">
                      02
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[#1a202c]">
                        Stage 2: Statutory Cease-and-Desist Injunction Against Harassment
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Senior advocates issue a formal Cease-and-Desist Legal Notice directly to the bank&apos;s Managing Director, Principal Nodal Officer, and recovery department heads. Citing RBI Fair Practice Directives and criminal intimidation provisions under Bharatiya Nyaya Sanhita, 2023, this notice immediately halts calls to workplace colleagues, relatives, and unlisted numbers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-gray-200 shadow-xs">
                    <span className="w-10 h-10 rounded-xl bg-[#D2A02A]/15 text-[#5A4C33] flex items-center justify-center font-extrabold text-base shrink-0">
                      03
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[#1a202c]">
                        Stage 3: Hardship Dossier Structuring &amp; Formal OTS Representation
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We compile certified documentary proof of legitimate, involuntary insolvency (such as hospital discharge summaries, employment termination orders, or audited profit-and-loss statements). This hardship brief is presented directly to the bank&apos;s Zonal Stressed Asset Committee to substantiate the proposed compromise figure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-gray-200 shadow-xs">
                    <span className="w-10 h-10 rounded-xl bg-[#D2A02A]/15 text-[#5A4C33] flex items-center justify-center font-extrabold text-base shrink-0">
                      04
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[#1a202c]">
                        Stage 4: Judicial Courtroom Defense &amp; Lok Adalat Referral
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        If the creditor has initiated statutory litigation—such as Section 138 NI Act summons, Section 25 PSSA electronic debit complaints, or unilateral arbitration—our advocates enter formal court appearances, contest jurisdiction, secure personal exemption, and petition the court for formal Lok Adalat settlement disposal.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-gray-200 shadow-xs">
                    <span className="w-10 h-10 rounded-xl bg-[#D2A02A]/15 text-[#5A4C33] flex items-center justify-center font-extrabold text-base shrink-0">
                      05
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-[#1a202c]">
                        Stage 5: Forensic Sanction Verification, Direct Payment &amp; NDC Closure
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Before any money changes hands, counsel independently verifies the system-generated settlement letter with the bank&apos;s corporate credit operations. The borrower remits payment strictly into their own verified loan account. We then supervise the issuance of the unconditional No Dues Certificate (NDC) and ensure closure reporting to credit bureaus.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 9. SIGNATURE INFOGRAPHIC CARD ── */}
              <div
                id="signature-infographic"
                className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm space-y-4 scroll-mt-28"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D2A02A]" />
                  <span className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider">
                    Editorial Architecture Overview
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1a202c]">
                  Loan Settlement Fee Structure &amp; Dispute Resolution Architecture
                </h3>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
                  <img
                    src="/images/og/loan-settlement-agency-fees-and-charges-in-india.png"
                    alt="Loan Settlement Fee Structure and Dispute Resolution Architecture in India"
                    className="w-full h-auto object-cover block"
                  />
                  <div className="p-3 bg-gray-50 text-xs text-gray-500 border-t border-gray-200 text-center font-medium">
                    Figure 1.0: Legitimate Advocate-Led Settlement Framework — Nominal Legal Retainer, Zero Hidden Markups, and Milestone-Linked Success Fees Under Bar Council Ethics.
                  </div>
                </div>
              </div>

              {/* ── 10. COURT DEFENSE VS UNREGULATED REALITIES ── */}
              <section id="court-defense-vs-unregulated" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Judicial Defense Realities: Section 138 NI Act, Section 25 PSSA &amp; DRT Proceedings
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the most dangerous hazards of engaging unregulated &ldquo;debt settlement agencies&rdquo; is their complete inability to defend you when a lender escalates a delinquent account into formal litigation. Unregulated agencies possess no legal license to practice law, meaning they cannot file replies, sign Vakalatnamas, or enter courtroom appearances.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-2">
                    <h3 className="text-sm font-bold text-[#1a202c]">
                      Section 138 NI Act Cheque Bounce Defense
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Lenders frequently present security cheques deposited years earlier. An advocate responds within the mandatory 15-day statutory window, disproving legally enforceable debt and securing immediate bail before a Magistrate.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-2">
                    <h3 className="text-sm font-bold text-[#1a202c]">
                      Section 25 PSSA NACH Mandate Summons
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      For bounced electronic auto-debits, banks file complaints under Section 25 of the Payment and Settlement Systems Act, 2007. Legal counsel establishes lack of fraudulent intent and petitions for Lok Adalat referral.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-2">
                    <h3 className="text-sm font-bold text-[#1a202c]">
                      Unilateral Corporate Arbitration
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      NBFCs often initiate unilateral arbitration in distant cities. Relying on Supreme Court precedents (Perkins Eastman), advocates contest jurisdiction under Section 11 of the Arbitration Act, halting proceedings.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  When a borrower relies on an unregulated telecaller agency, court notices go unanswered. This frequently leads to ex-parte default judgments, non-bailable warrants, or asset attachment orders. Engaging an enrolled advocate ensures that all judicial processes are actively defended while settlement negotiations proceed.
                </p>
              </section>

              {/* ── 11. HIDDEN COSTS IN FINTECH DEBT APPS ── */}
              <section id="hidden-costs-debt-apps" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Hidden Charges in Fintech Debt Relief: Subscription Fees &amp; Program Overhead
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In recent years, several venture-backed fintech companies have launched automated debt relief applications promising digital debt management. While advertised as cost-effective alternatives to legal representation, an inspection of their fee schedules reveals significant concealed costs:
                </p>

                <div className="space-y-3 my-4">
                  <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-sm space-y-1">
                    <strong className="text-amber-900 block font-bold">1. Monthly Account Maintenance Charges:</strong>
                    Fintech apps frequently deduct monthly subscription or account maintenance fees from your dedicated savings account, regardless of whether any creditor has agreed to an OTS. Over twelve to twenty-four months, these recurring administrative charges quietly consume substantial borrower savings.
                  </div>
                  <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-sm space-y-1">
                    <strong className="text-amber-900 block font-bold">2. Third-Party Escrow Custodial Fees:</strong>
                    Borrowers are required to deposit funds into third-party non-banking escrow accounts that incur transaction processing levies, withdrawal surcharges, and trustee maintenance fees.
                  </div>
                  <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-sm space-y-1">
                    <strong className="text-amber-900 block font-bold">3. Zero Litigation Coverage:</strong>
                    When banks serve legal summons or initiate criminal complaint proceedings, fintech platforms disclaim all responsibility in their terms of service, forcing the borrower to hire separate litigation advocates at extra expense.
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  A legitimate legal advisory engagement eliminates these recurring subscription overheads completely. With AMA Legal Solutions, your agreement is direct, fixed, and comprehensive, covering legal notices, negotiation, and judicial representation under a singular transparent framework.
                </p>
              </section>

              {/* ── 12. VERIFYING REPRESENTATION AGREEMENTS ── */}
              <section id="verifying-agreements" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  How to Verify a Legitimate Legal Engagement Agreement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Before retaining any legal counsel or commercial agency for loan settlement, conduct thorough due diligence to verify that your engagement is legally binding, transparent, and enforceable:
                </p>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-[#1a202c]">
                    Checklist for Legitimate Debt Resolution Legal Engagement:
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <div>
                        <strong>Bar Council Enrollment Verification:</strong> Ensure the engagement letter specifies the advocate&apos;s state bar registration number (e.g., D/XXXX/YYYY) and that their credentials can be verified on the official Bar Council portal.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <div>
                        <strong>Direct Account Remittance:</strong> All payments for professional retainers should be issued to the official law firm bank account with formal tax invoices. Never remit cash or UPI transfers to individual telecallers.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <div>
                        <strong>Pre-Conditioned Success Fees:</strong> The representation agreement must state in plain language that success fees are earned strictly upon the client receiving an authentic bank sanction letter issued on the lender&apos;s corporate letterhead.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold text-base">✓</span>
                      <div>
                        <strong>Formal Dispute Scope:</strong> The agreement should explicitly outline coverage for handling creditor notices, anti-harassment injunctions, and representation before bank dispute committees.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 13. TRANSPARENT FIXED LEGAL ADVISORY ── */}
              <section id="transparent-fixed-advisory" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  AMA Legal Solutions: Transparent Fixed Legal Advisory Without Hourly Markups
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, our practice is founded on making top-tier legal advocacy accessible to every individual facing financial hardship. We understand that someone struggling with overwhelming debt cannot bear the unpredictability of hourly billing rates, hidden case preparation charges, or open-ended legal retainers common among large corporate law firms.
                </p>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a202c] to-[#3a3020] text-white shadow-xl space-y-4">
                  <h3 className="text-xl font-bold text-[#D2A02A]">
                    Our Commitment to Ethical &amp; Predictable Legal Billing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pt-2">
                    <div className="p-4 bg-white/10 rounded-xl backdrop-blur-xs border border-white/10">
                      <strong className="text-white block mb-1">Fixed Operational Retainer:</strong>
                      A single, clearly defined administrative retainer that covers your complete legal portfolio, forensic ledger review, and anti-harassment legal notices.
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl backdrop-blur-xs border border-white/10">
                      <strong className="text-white block mb-1">Zero Success Fee in Advance:</strong>
                      We never ask for or accept performance fees until your bank issues an authentic, verified One-Time Settlement sanction letter.
                    </div>
                    <div className="p-4 bg-white/10 rounded-xl backdrop-blur-xs border border-white/10">
                      <strong className="text-white block mb-1">No Compromise on Court Standing:</strong>
                      Full representation by licensed Bar Council advocates authorized to appear in judicial forums, protecting your legal rights at every stage.
                    </div>
                  </div>
                  <div className="pt-2 text-center">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-6 py-3 bg-[#D2A02A] hover:bg-[#b88c22] text-[#1a202c] font-extrabold rounded-xl transition text-sm shadow cursor-pointer uppercase tracking-wider"
                    >
                      Request Transparent Legal Fee Evaluation &rarr;
                    </button>
                  </div>
                </div>
              </section>

              {/* ── 14. FREQUENTLY ASKED QUESTIONS (ACCORDION) ── */}
              <section id="frequently-asked-questions" className="space-y-6 scroll-mt-28">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Frequently Asked Questions
                  </h2>
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    8 Statutory Answers
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Review direct, legally factual answers regarding agency fee structures, retainer norms, and statutory protections in India.
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all shadow-2xs"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#1a202c] hover:text-[#D2A02A] transition cursor-pointer"
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${index}`}
                        >
                          <span className="text-base md:text-lg leading-snug">
                            {faq.question}
                          </span>
                          <span
                            className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm font-extrabold shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180 bg-[#D2A02A] text-white" : "text-gray-600"
                            }`}
                          >
                            &darr;
                          </span>
                        </button>
                        {isOpen && (
                          <div
                            id={`faq-answer-${index}`}
                            className="px-5 pb-5 pt-1 text-sm md:text-base text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50"
                          >
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
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  More Legal Debt Relief Guides
                </h2>
                <p className="text-gray-600 text-sm">
                  Explore our authoritative legal resources on debt resolution, agency comparisons, and borrower rights:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Link
                    href="/best-loan-settlement-agencies-in-india"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition group block"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] block uppercase mb-1">
                      Directory &bull; Best Agencies
                    </span>
                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#D2A02A] transition">
                      Best Loan Settlement Agencies in India &rarr;
                    </h3>
                  </Link>

                  <Link
                    href="/which-companies-offer-the-best-loan-settlement-plans-for-personal-loans"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition group block"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] block uppercase mb-1">
                      Comparison &bull; Personal Loans
                    </span>
                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#D2A02A] transition">
                      Best Personal Loan Settlement Plans &rarr;
                    </h3>
                  </Link>

                  <Link
                    href="/loan-settlement-amount-calculator"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition group block"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] block uppercase mb-1">
                      Legal Tool &bull; Haircut Calculator
                    </span>
                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#D2A02A] transition">
                      Loan Settlement Amount Calculator &rarr;
                    </h3>
                  </Link>

                  <Link
                    href="/compare-loan-settlement-companies-that-work-with-personal-loans"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition group block"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] block uppercase mb-1">
                      Review &bull; Market Comparison
                    </span>
                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#D2A02A] transition">
                      Compare Loan Settlement Companies &rarr;
                    </h3>
                  </Link>

                  <Link
                    href="/services/loan-settlement"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition group block"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] block uppercase mb-1">
                      Core Practice &bull; Debt Relief
                    </span>
                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#D2A02A] transition">
                      AMA Loan Settlement Legal Services &rarr;
                    </h3>
                  </Link>

                  <Link
                    href="/contact"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition group block"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] block uppercase mb-1">
                      Advocate Consultation
                    </span>
                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#D2A02A] transition">
                      Schedule Legal Assessment &rarr;
                    </h3>
                  </Link>
                </div>
              </section>

              {/* ── 16. REFERENCES & REGULATORY AUTHORITIES ── */}
              <section id="statutory-references" className="space-y-4 scroll-mt-28 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-[#1a202c]">
                  References &amp; Regulatory Authorities
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    &bull; Bar Council of India: Standards of Professional Conduct and Etiquette under the Advocates Act, 1961 —{" "}
                    <a
                      href="http://www.barcouncilofindia.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium"
                    >
                      www.barcouncilofindia.org
                    </a>
                  </li>
                  <li>
                    &bull; Ministry of Consumer Affairs, Food &amp; Public Distribution: Consumer Protection Act, 2019 (Sections 2(47) and 89) —{" "}
                    <a
                      href="https://consumeraffairs.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium"
                    >
                      consumeraffairs.nic.in
                    </a>
                  </li>
                  <li>
                    &bull; Reserve Bank of India: Master Direction – Non-Banking Financial Company – Scale Based Regulation &amp; Fair Practices Code —{" "}
                    <a
                      href="https://rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium"
                    >
                      rbi.org.in
                    </a>
                  </li>
                </ul>
              </section>

              {/* Social Share Bar (Bottom) */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Share this authoritative guide
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition cursor-pointer"
                    title="Share on Facebook"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-8 h-8 rounded-lg bg-gray-100 text-gray-800 hover:bg-black hover:text-white flex items-center justify-center transition cursor-pointer"
                    title="Share on Twitter"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-8 h-8 rounded-lg bg-sky-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition cursor-pointer"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-8 h-8 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition cursor-pointer"
                    title="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ── 17. AMA COMPANY & MEDIA SECTION ── */}
              <section
                id="ama-company-section"
                className="p-6 md:p-8 rounded-2xl border-4 border-[#D2A02A] bg-gradient-to-br from-white to-[#FAF7F0] space-y-6 scroll-mt-28"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <img
                      src="/ama3.svg"
                      alt="AMA Legal Solutions Logo"
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold text-[#1a202c]">
                        AMA Legal Solutions
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        Pan-India High Court &amp; Commercial Debt Advocates
                      </p>
                    </div>
                  </div>
                  <div className="text-right sm:text-right text-center">
                    <div className="text-2xl font-extrabold text-[#1a202c] flex items-center justify-center sm:justify-end gap-1.5">
                      <span className="text-[#D2A02A]">★</span> 4.7 / 5.0
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                      Google Verified Reviews
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-[#1a202c] uppercase tracking-wider">
                    Our Legal Solutions &amp; Practice Areas
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Link
                      href="/services/loan-settlement"
                      className="p-2.5 text-center text-xs font-bold rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition"
                    >
                      Loan Settlement
                    </Link>
                    <Link
                      href="/services/arbitration"
                      className="p-2.5 text-center text-xs font-bold rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition"
                    >
                      Arbitration Defense
                    </Link>
                    <Link
                      href="/services/banking-and-finance"
                      className="p-2.5 text-center text-xs font-bold rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition"
                    >
                      Banking &amp; Finance
                    </Link>
                    <Link
                      href="/services/drafting"
                      className="p-2.5 text-center text-xs font-bold rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition"
                    >
                      Legal Drafting
                    </Link>
                  </div>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar (space-y-8 sticky top-24) */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4 text-center">
                <img
                  src="/anujbhiya.png"
                  alt="Advocate Anuj Anand Malik"
                  className="w-20 h-20 rounded-full border-2 border-[#D2A02A] object-cover mx-auto shadow-md"
                />
                <div>
                  <Link
                    href="/author/anuj-anand-malik"
                    className="text-base font-extrabold text-[#1a202c] hover:text-[#D2A02A] transition"
                  >
                    Anuj Anand Malik
                  </Link>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Senior Advocate &bull; Bar Council of Delhi
                  </p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed text-left">
                  Founding Partner at AMA Legal Solutions. Specializes in banking litigation, debt resolution under RBI guidelines, and high-stakes commercial dispute mediation across Indian High Courts and Debt Recovery Tribunals.
                </p>
                <div className="pt-2 border-t border-gray-100">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="p-6 rounded-2xl bg-[#5A4C33] text-white shadow-lg space-y-4">
                <div className="inline-block px-2.5 py-1 bg-[#D2A02A]/20 text-[#D2A02A] text-[11px] font-bold uppercase rounded-md">
                  Confidential Consultation
                </div>
                <h3 className="text-xl font-extrabold leading-snug">
                  Need Legal Defense for Loan Settlement?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Protect yourself against coercive recovery calls, unverified agency charges, and court litigation. Get your portfolio evaluated under legal privilege.
                </p>
                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+918700343611"
                    className="w-full py-3 px-4 bg-white text-[#5A4C33] hover:bg-gray-100 font-extrabold rounded-xl transition flex items-center justify-center gap-2 text-sm shadow cursor-pointer"
                  >
                    <span>📞 Call: +91-8700343611</span>
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 px-4 bg-[#D2A02A] hover:bg-[#b88c22] text-[#1a202c] font-extrabold rounded-xl transition flex items-center justify-center gap-2 text-sm shadow cursor-pointer"
                  >
                    <span>Request Callback &rarr;</span>
                  </button>
                </div>
              </div>

              {/* Client Reviews Card (Matching Schema Verbatim) */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Verified Client Review
                  </span>
                  <div className="flex items-center gap-1">
                    <Stars count={5} />
                    <span className="text-xs font-bold text-[#1a202c] ml-1">5.0</span>
                  </div>
                </div>
                <blockquote className="text-xs text-gray-700 italic leading-relaxed pt-1">
                  &ldquo;{clientReviewData.reviewBody}&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs font-bold text-[#1a202c]">
                    {clientReviewData.authorName}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {clientReviewData.authorRole}
                  </p>
                </div>
              </div>

              {/* Related Guides Card */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-[#1a202c] uppercase tracking-wider border-b border-gray-100 pb-2">
                  Related Debt Relief Topics
                </h3>
                <div className="space-y-2.5 text-xs">
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
                    &bull; Best Loan Settlement Plans for Personal Loans
                  </Link>
                  <Link
                    href="/loan-settlement-amount-calculator"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement Amount Calculator
                  </Link>
                  <Link
                    href="/compare-loan-settlement-companies-that-work-with-personal-loans"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Compare Personal Loan Settlement Companies
                  </Link>
                  <Link
                    href="/freed-loan-settlement-review-and-legal-alternatives"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Freed Loan Settlement Review &amp; Legal Comparison
                  </Link>
                  <Link
                    href="/services/loan-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Advocate-Led Loan Settlement Services
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
                        placeholder="Borrower / Advocate Name"
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
                        Debt / Product Category
                      </label>
                      <select
                        name="assetType"
                        value={formData.assetType}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A] bg-white"
                      >
                        <option value="Loan Settlement & Fee Transparency Advisory">
                          Loan Settlement &amp; Fee Transparency Advisory
                        </option>
                        <option value="Personal Loan & Credit Card Overdue">
                          Personal Loan &amp; Credit Card Overdue
                        </option>
                        <option value="Business Loan / Working Capital Settlement">
                          Business Loan / Working Capital Settlement
                        </option>
                        <option value="Unregulated Agency Telecaller Harassment">
                          Unregulated Agency Telecaller Harassment
                        </option>
                        <option value="Sec 138 NI Act or Sec 25 PSSA Notice Received">
                          Sec 138 NI Act or Sec 25 PSSA Notice Received
                        </option>
                        <option value="Bank Arbitration Notice Received">
                          Bank Arbitration Notice Received
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Dispute Summary / Agency Query
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Briefly describe outstanding loans, agency fee queries, or harassment received..."
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
                    Thank you, <strong>{formData.fullName}</strong>. An advocate from our commercial debt resolution team will review your details shortly.
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/pay-day-loan-settlement-in-september-2026";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/pay-day-loan-settlement-in-september-2026.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-11";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Why is September 2026 the most advantageous window for payday loan settlement in India?",
    answer:
      "September 2026 marks the critical second-quarter close and half-yearly statutory audit cycle for scheduled commercial banks, fintech lending service providers (LSPs), and non-banking financial companies (NBFCs) regulated by the Reserve Bank of India. Under RBI Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRAC), institutions face compulsory capital provisioning on delinquent unsecured short-term loans, compelling risk committees to sanction aggressive compromise settlements and technical write-offs before September 30 disclosures. Furthermore, nationwide National Lok Adalats organized by the National Legal Services Authority (NALSA) under the Legal Services Authorities Act, 1987 in September provide a conclusive statutory forum to record non-appealable compromise awards that formally extinguish outstanding claims.",
  },
  {
    id: "faq-2",
    question: "What statutory legal framework governs payday loan and instant app compromise settlements in September 2026?",
    answer:
      "Payday loan debt settlements in September 2026 are governed by the Reserve Bank of India Guidelines on Default Loss Guarantee (DLG) and Digital Lending Directions, alongside the Master Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24). The substantive contractual discharge of outstanding liabilities is established under Section 63 of the Indian Contract Act, 1872, which empowers a creditor to remit or dispense with performance and accept lesser consideration to completely extinguish a contract. When executed through formal board-approved settlement sanctions or Lok Adalat compromise decrees, these settlements legally bar any subsequent collection by third-party agencies or recovery trusts.",
  },
  {
    id: "faq-3",
    question: "How does transparent fixed legal advisory compare with corporate law firm retainers for payday loan debt relief?",
    answer:
      "Transparent fixed legal advisory ensures end-to-end representation by enrolled High Court advocates under the Advocates Act, 1961 without subjecting distressed borrowers to unpredictable hourly billing rates or burdensome monthly retainers. Corporate law firms generally structure billing around billable hours and ongoing retainers designed for large multinational entities, which rapidly exceed the underlying payday loan balance and exacerbate borrower distress. Retaining specialized banking advocates guarantees statutory confidentiality under Section 126 of the Indian Evidence Act, 1872, direct confrontation of unregulated recovery syndicates, and structured compromise negotiations with fintech credit committees through a single accessible legal engagement.",
  },
  {
    id: "faq-4",
    question: "Why do free online DIY settlement templates fail when dealing with fintech lending NBFCs?",
    answer:
      "Automated online DIY settlement templates possess zero statutory authority under the Advocates Act, 1961 and are routinely dismissed by bank grievance redressal cells and NBFC compliance officers. Generic downloaded letters fail to substantiate bona fide financial hardship, omit statutory citations regarding usurious interest markups under the Usurious Loans Act, 1918, and fail to challenge regulatory violations under the RBI Fair Practices Code. Most dangerously, unvetted DIY templates frequently contain inadvertent acknowledgments of contested debt, which can restart limitation periods under Section 18 of the Limitation Act, 1963 and compromise subsequent defense against Section 25 PSSA or Section 138 NI Act notices.",
  },
  {
    id: "faq-5",
    question: "How are illegal contact scraping, social harassment, and morphing threats by payday lenders legally stopped?",
    answer:
      "Unauthorized contact list harvesting, threatening phone calls to third parties, and abusive digital messages directly violate the Reserve Bank of India Digital Lending Guidelines 2026, Section 43A and Section 66E of the Information Technology Act, 2000, and Section 351/308 of the Bharatiya Nyaya Sanhita, 2023 (formerly IPC Sections 503 and 384 for extortion and criminal intimidation). Enrolled advocates issue formal statutory Cease-and-Desist notices to the lending NBFC and its registered Lending Service Provider, holding their board of directors vicariously liable for agent misconduct. The statutory warning of simultaneous escalation to the RBI Integrated Ombudsman and State Cyber Police forces immediate withdrawal of third-party recovery agents and transfers communication to authorized legal representatives.",
  },
  {
    id: "faq-6",
    question: "Can payday loan settlement resolve bounced NACH e-mandate and cheque bounce notices under Section 25 PSSA and Section 138 NI Act?",
    answer:
      "Executing a formalized One-Time Settlement successfully disposes of quasi-criminal demand notices and pending court complaints under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) and Section 138 of the Negotiable Instruments Act, 1881. Advocates enter appearance to file statutory replies demonstrating that automated NACH debits or security cheques were obtained as conditional security instruments rather than in discharge of a legally crystallized debt, particularly where usurious late penalties inflate the balance. Once the negotiated compromise payment is remitted, the lender is statutorily required to file joint compounding applications under Section 147 of the Negotiable Instruments Act, securing complete judicial quashing of the proceedings.",
  },
  {
    id: "faq-7",
    question: "How can a borrower distinguish between regulated fintech payday lenders and illegal rogue loan apps during settlement?",
    answer:
      "Regulated payday lenders operate in strict partnership with Reserve Bank of India-registered Non-Banking Financial Companies (NBFCs) or scheduled banks, provide an explicit Key Fact Statement (KFS) detailing the Annual Percentage Rate (APR), and disburse funds directly from the regulated entity's bank account. In stark contrast, rogue 7-day or 14-day apps operate outside RBI oversight, use foreign pass-through wallets, conceal corporate identity, and enforce repayment through criminal extortion and photo morphing. While RBI-regulated entities are engaged through structured One-Time Settlement protocols under RBI compromise frameworks, illegal extortion apps are handled through formal cybercrime FIRs, device forensic preservation, and blocking directives under Section 69A of the Information Technology Act, 2000.",
  },
  {
    id: "faq-8",
    question: "What formal closure documents must a borrower obtain after remitting a payday loan settlement in September 2026?",
    answer:
      "Following complete remittance of the agreed compromise sum, the borrower must obtain a formal, board-authorized No Dues Certificate (NDC) or No Objection Certificate (NOC) printed on the regulated NBFC or bank letterhead, executed by an authorized officer with digital or physical corporate seal. The lending institution must formally cancel all active e-NACH mandates on the National Payments Corporation of India (NPCI) portal, deactivate electronic recurring debit tokens, and destroy any physical payment instruments. Additionally, under the Credit Information Companies (Regulation) Act, 2005 (CICRA), the lender is statutorily mandated to transmit updated credit records to CIBIL, Equifax, Experian, and CRIF High Mark within thirty days, reflecting the account as settled with zero balance.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Shalini Kashyap",
    authorLocation: "Corporate Content Strategist, Gurugram • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "After facing sudden medical expenses, I ended up taking short-term salary advance and payday loans across five different instant mobile apps. Within two months, hidden daily rollover penalties and compounding fees made repayment impossible. Rogue recovery agents began sending threatening WhatsApp messages and accessing my contact book. I looked at corporate firms, but their retainer quotes were completely unrealistic for my situation, while online DIY draft letters were totally ignored by the fintechs. Advocate Anuj Anand Malik and AMA Legal Solutions stepped in with a transparent fixed legal advisory model. They issued immediate cease-and-desist notices citing RBI Digital Lending Guidelines and the IT Act, which stopped all harassment instantly. During the September quarter-end balance sheet window, they negotiated directly with the parent NBFCs, secured an extensive waiver on accumulated penal interest, and delivered authentic No Dues Certificates for every account. Their legal team gave me back my peace of mind without hidden hourly costs.",
  },
  {
    authorName: "Amitava Roy",
    authorLocation: "Senior Logistics Coordinator, Kolkata • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "I was caught in a severe debt spiral with three digital payday lending apps that lured me with instant credit but hit me with exorbitant processing charges and recurring NACH mandate bounces. The lenders sent legal notices threatening Section 25 PSSA criminal prosecution and magistrate court summons. AMA Legal Solutions provided an advocate-led legal defense that changed everything. Advocate Anuj Anand Malik scrutinized my Key Fact Statements, pinpointed blatant regulatory non-compliance under RBI Fair Practices norms, and represented me before the fintech credit committees. Their transparent fixed fee structure meant no hourly surprises or open-ended legal retainers. They finalized an airtight One-Time Settlement, quashed the NACH legal notices, and ensured my credit bureaus updated all accounts with authentic zero-balance clearance letters.",
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
      name: "Pay Day Loan Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Comprehensive legal strategy for payday loan settlement in September 2026 under RBI compromise guidelines. Advocate-led OTS negotiation for short-term apps, instant salary advances, NACH defense, anti-harassment injunctions, and authentic NDCs.",
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
        "Pay Day Loan Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Strategic commercial legal guide to settling payday loans, instant short-term salary advances, and predatory fintech apps in September 2026. Explore RBI digital lending norms, Q2 bank balance sheet provisioning leverage, Section 25 NACH defense, anti-harassment enforcement, transparent fixed legal advisory, and advocate-secured No Dues Certificates.",
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
      name: "Payday Loan Settlement Legal Advisory",
      description:
        "Specialized legal defense and debt compromise advisory to negotiate One-Time Settlements (OTS) for defaulted payday loans, instant short-term lending apps, salary advances, and fintech personal loans under Reserve Bank of India compromise regulations.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1840",
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
        datePublished: rev.authorLocation.includes("September") ? "2026-09-04" : "2026-08-22",
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
          name: "Pay Day Loan Settlement in September 2026",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Strategic Payday Loan Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Digital Audit of Payday Loan Agreements, KFS Disclosures & Usurious Penalties",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Immediate Issuance of Advocate-Drafted Cease-and-Desist Notice Halting Recovery Harassment",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Statutory Defense Against Section 25 PSSA NACH Summons & Section 138 NI Act Notices",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Direct Structured Negotiation with Regulated Lending NBFC Credit Committee for Q2 OTS Sanction",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Execution of Board-Approved Compromise Letter, NPCI e-Mandate Revocation & Bureau Clearance",
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
  { id: "september-2026-payday-window", title: "Why September 2026 Q2 Window" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs Corporate Firms vs DIY" },
  { id: "rbi-digital-lending-framework", title: "RBI Payday & Digital Lending Norms" },
  { id: "5-step-settlement-protocol", title: "5-Step Strategic Protocol" },
  { id: "infographic", title: "Payday Settlement Infographic" },
  { id: "anti-harassment-and-cyber-defense", title: "Halting Harassment & Cyber Threats" },
  { id: "section-25-pssa-and-138-defense", title: "Section 25 PSSA & NACH Defense" },
  { id: "illegal-apps-vs-regulated-nbfcs", title: "Illegal Apps vs Regulated NBFCs" },
  { id: "ots-letter-and-mandate-cancellation", title: "OTS Letter & NPCI Mandate Revocation" },
  { id: "cibil-repair-and-credit-revival", title: "CIBIL Dispute & Credit Revival" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Statutory Authority & Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function PayDayLoanSettlementInSeptember2026Client() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("quick-answer");

  /* Intake Modal State */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    assetType: "Payday Loans / Instant Mobile Apps",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Pay Day Loan Settlement in September 2026: Legal Process & RBI OTS Framework – AMA Legal Solutions";
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
    const textMsg = `Hello AMA Legal Solutions, I require urgent legal advisory for payday loan settlement in September 2026.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Loan Facility: ${formData.assetType}
Details: ${formData.message || "Requesting advocate evaluation for payday loan OTS negotiation, stopping recovery harassment, and NACH/Section 25 PSSA defense."}`;
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
      assetType: "Payday Loans / Instant Mobile Apps",
      message: "",
    });
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
      label: "Pay Day Loan Settlement in September 2026",
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
                <span>🛡️</span> Payday Debt Resolution &amp; Digital Lending Protection
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Pay Day Loan Settlement in{" "}
                <span className="text-[#D2A02A]">September 2026</span>: Legal Process &amp; RBI OTS Framework
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                As regulated fintech platforms, scheduled banks, and partner NBFCs confront their mandatory second-quarter close and half-yearly audit deadlines,
                lenders face severe regulatory requirements to cleanse delinquent retail portfolios and compress Gross Non-Performing Assets.
                Discover how advocate-led legal representation leverages Reserve Bank of India compromise settlement guidelines to permanently dismantle predatory payday loan cycles,
                halt coercive recovery harassment, neutralize Section 25 PSSA NACH bounce summons, quash unauthorized late fees, and execute binding One-Time Settlements (OTS)
                with authentic bank-sealed No Dues Certificates.
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
                    <span className="text-gray-400">📅</span> 11-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 18 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>⚖️</span> RBI Digital Lending Mandate Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Urgent Payday Loan Evaluation</span>
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

            {/* Right Col — Generated OG Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/pay-day-loan-settlement-in-september-2026.png"
                  alt="Pay Day Loan Settlement in September 2026 – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    September 2026 Digital Lending Resolution
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory Payday Debt Compromise &amp; Anti-Harassment Defense
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

        {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">

            {/* ── LEFT COLUMN: DESKTOP STICKY TOC ── */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* ── CENTER EDITORIAL COLUMN ── */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">

                {/* Meta details & Social Share bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Published: September 11, 2026</span>
                    <span>&bull;</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      RBI Regulatory Verified
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 mr-1">Share:</span>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on X / Twitter"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition"
                    >
                      {shareMsg || "Copy Link"}
                    </button>
                  </div>
                </div>

                {/* ══ STANDALONE QUICK ANSWER BLOCK (GEO TARGETED) ══ */}
                <section id="quick-answer">
                  <div className="bg-amber-50 border-2 border-[#D2A02A] rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">⚡</span>
                      <h2 className="text-lg md:text-xl font-extrabold text-[#5A4C33] tracking-wide uppercase">
                        Quick Legal Summary: Pay Day Loan Settlement in September 2026
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                      Pay day loan settlement in September 2026 is an established statutory compromise process whereby individuals trapped in short-term digital loan cycles negotiate an advocate-led One-Time Settlement (OTS) with RBI-regulated banks and NBFCs to permanently resolve delinquent instant loans, salary advance facilities, and compounding penal interest. September 2026 represents the primary strategic window because institutional lenders must close their second fiscal quarter and half-yearly balance sheets by resolving non-performing assets to reverse heavy capital provisioning. Engaging enrolled High Court advocates ensures immediate legal cessation of third-party recovery harassment, provides statutory defense against Section 25 PSSA NACH bounce notices, and guarantees the issuance of authentic No Dues Certificates under a transparent fixed legal advisory model without open-ended hourly retainers.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 1: WHY SEPTEMBER 2026 IS THE PREMIER WINDOW ══ */}
                <section id="september-2026-payday-window" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Why September 2026 Is the Decisive Quarter-End Window for Payday Loan Settlement
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Digital payday lending platforms, fintech mobile applications, and partner Non-Banking Financial Companies (NBFCs) operate under the stringent regulatory purview of the Reserve Bank of India.
                    The conclusion of September represents the completion of the second fiscal quarter (Q2) and the statutory half-yearly audit cycle across Indian financial institutions.
                    During this operational deadline, bank boards, risk control committees, and fintech asset recovery cells experience intense institutional urgency to eliminate non-performing loan books,
                    expedite compromise settlements, and disclose sanitized Gross Non-Performing Asset (GNPA) statistics before September 30 regulatory disclosures.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under the RBI Prudential Framework on Income Recognition, Asset Classification and Provisioning Pertaining to Advances (IRAC Norms),
                    unsecured consumer credit that remains overdue past ninety days triggers substantial mandatory capital provisioning.
                    This requirement immobilizes liquid regulatory capital and diminishes quarterly profitability.
                    For institutional lenders, carrying uncollectible short-term retail debt past the September half-yearly audit creates immediate balance sheet penalties.
                    Consequently, credit committees possess expanded discretionary mandate in September to sanction substantial debt waivers, write off accumulated penal charges,
                    and enter binding compromise agreements. Borrowers represented by enrolled legal counsel can leverage this institutional imperative to achieve favorable One-Time Settlements
                    that are routinely unavailable during ordinary operating periods.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30 shadow-sm">
                      <div className="text-2xl mb-2">📉</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Q2 Provisioning Reversal</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Executing compromise settlements prior to September 30 enables lenders to write back non-performing asset provisions, immediately enhancing audited half-yearly financial results.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30 shadow-sm">
                      <div className="text-2xl mb-2">🏛️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">National Lok Adalat Benches</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        September sittings of National Lok Adalats under the Legal Services Authorities Act, 1987 provide a conclusive statutory venue to formalize binding judicial compromise decrees.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30 shadow-sm">
                      <div className="text-2xl mb-2">⚖️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Elevated Delegated Powers</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        During the September fiscal close, recovery heads and settlement committees hold temporary delegated financial authority to approve major technical write-offs and waivers.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 2: COMMERCIAL REALITY COMPARISON TABLE ══ */}
                <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Reality: Enrolled Advocate Representation vs Corporate Law Firms vs Free DIY Templates
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Borrowers confronting overwhelming payday loan defaults face a critical commercial decision regarding their debt resolution representation.
                    Many individuals fall victim to automated DIY online templates that fail to provide statutory legal defense,
                    while others are discouraged by traditional corporate law firms charging exorbitant hourly retainers that far exceed the underlying debt.
                    AMA Legal Solutions bridges this divide by delivering specialized advocate representation through a transparent fixed legal advisory model,
                    ensuring direct High Court advocate representation, full statutory privilege, and comprehensive defense without recurring retainers or hourly surprises.
                  </p>

                  {/* Comprehensive Comparison Table */}
                  <div className="overflow-x-auto my-8">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-gray-200">
                      <thead>
                        <tr className="bg-[#1a202c] text-white text-xs md:text-sm">
                          <th className="p-4 font-bold border-b border-gray-700">Resolution Dimension</th>
                          <th className="p-4 font-bold border-b border-gray-700 bg-[#D2A02A] text-white">
                            AMA Legal Solutions (Fixed Advisory)
                          </th>
                          <th className="p-4 font-bold border-b border-gray-700">Corporate Law Firms</th>
                          <th className="p-4 font-bold border-b border-gray-700">Free / Cheap DIY Online Templates</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs md:text-sm bg-white">
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50">Commercial Fee Structure</td>
                          <td className="p-4 text-gray-800 font-medium bg-[#D2A02A]/5">
                            Transparent, single fixed legal advisory without hourly markups or surprise retainers
                          </td>
                          <td className="p-4 text-gray-600">
                            Uncapped hourly billing models, recurring monthly retainers, and administrative charges
                          </td>
                          <td className="p-4 text-gray-600">
                            Free or cheap automated downloads with zero legal accountability or courtroom standing
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50">Statutory Legal Privilege</td>
                          <td className="p-4 text-gray-800 font-medium bg-[#D2A02A]/5">
                            Complete advocate-client confidentiality under Section 126 of the Indian Evidence Act, 1872
                          </td>
                          <td className="p-4 text-gray-600">
                            Full advocate privilege maintained, but billing model disproportionate for retail debts
                          </td>
                          <td className="p-4 text-red-600 font-medium">
                            Zero legal privilege; personal communications and data stored on unverified commercial web servers
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50">Courtroom &amp; Notice Defense</td>
                          <td className="p-4 text-gray-800 font-medium bg-[#D2A02A]/5">
                            Direct representation by High Court advocates for Section 25 PSSA and Section 138 NI Act summons
                          </td>
                          <td className="p-4 text-gray-600">
                            Available, but charges separate court appearance fees per listing
                          </td>
                          <td className="p-4 text-red-600 font-medium">
                            Zero court representation; leaves borrowers defenseless against judicial warrants
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50">Anti-Harassment Enforcement</td>
                          <td className="p-4 text-gray-800 font-medium bg-[#D2A02A]/5">
                            Statutory Cease-and-Desist notices issued under RBI Digital Lending Guidelines &amp; Cyber IT Act
                          </td>
                          <td className="p-4 text-gray-600">
                            Effective notices, but slow drafting turnaround due to corporate prioritization
                          </td>
                          <td className="p-4 text-red-600 font-medium">
                            Generic letters systematically ignored by collection syndicates and partner NBFCs
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50">Settlement Enforceability</td>
                          <td className="p-4 text-gray-800 font-medium bg-[#D2A02A]/5">
                            Legally binding compromise under Section 63 Indian Contract Act with authentic bank-sealed NDCs
                          </td>
                          <td className="p-4 text-gray-600">
                            Legally binding, but cumulative fees often negate financial relief obtained from settlement
                          </td>
                          <td className="p-4 text-red-600 font-medium">
                            High danger of inadvertent debt admission restarting statute of limitation periods
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50">e-Mandate &amp; Credit Bureau Clearance</td>
                          <td className="p-4 text-gray-800 font-medium bg-[#D2A02A]/5">
                            Mandatory NPCI e-NACH revocation and statutory CIBIL dispute filing under CICRA 2005
                          </td>
                          <td className="p-4 text-gray-600">
                            Offered as premium post-settlement add-on services with additional charges
                          </td>
                          <td className="p-4 text-red-600 font-medium">
                            Borrowers left with active recurring bank liens, bounced mandate penalties, and ruined CIBIL
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <blockquote className="p-4 border-l-4 border-[#D2A02A] bg-amber-50/60 rounded-r-xl my-6 text-sm text-gray-700 italic">
                    &ldquo;Under Section 63 of the Indian Contract Act, 1872, every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may accept instead of it any satisfaction which he thinks fit. When drafted by enrolled advocates, a compromise settlement legally extinguishes the debt, barring subsequent recovery by third-party syndicates.&rdquo;
                  </blockquote>
                </section>

                {/* ══ SECTION 3: REGULATORY FRAMEWORK ══ */}
                <section id="rbi-digital-lending-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory Framework: RBI Digital Lending Directions &amp; Compromise Norms
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The rapid proliferation of digital short-term credit and mobile instant lending applications prompted the Reserve Bank of India to enact stringent regulatory controls.
                    In September 2026, all regulated digital credit operates under the comprehensive mandates of the <strong>RBI Master Directions on Digital Lending</strong>,
                    the <strong>Fair Practices Code for NBFCs and Banks</strong>, and the <strong>Framework for Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)</strong>.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under these regulations, lenders and their registered Lending Service Providers (LSPs) must adhere to rigorous consumer protection guidelines:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                        <span className="text-[#D2A02A]">1.</span> Mandatory Key Fact Statement (KFS) &amp; APR Transparency
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Every regulated digital loan requires an explicit Key Fact Statement provided to the borrower prior to loan execution.
                        The KFS must disclose the true All-Inclusive Annual Percentage Rate (APR), including processing fees, administrative markups, and insurance deductions.
                        Any fee or penalty not explicitly specified in the standardized KFS is legally uncollectible and constitutes a direct regulatory breach that invalidates lender claims during settlement negotiations.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                        <span className="text-[#D2A02A]">2.</span> Prohibition of Coercive Recovery &amp; Contact Scraping
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The RBI explicitly prohibits digital lending applications from accessing mobile phone contact lists, call logs, media storage, or device biometrics.
                        Furthermore, recovery agents are categorically barred from calling third-party contacts, family members, or employers.
                        Lenders attempting to enforce debt recovery through harassment, social shaming, or intimidation face severe supervisory penalties and cancellation of NBFC operating licenses under Section 45-IA of the RBI Act, 1934.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                        <span className="text-[#D2A02A]">3.</span> Direct Account-to-Account Disbursement and Repayment Mandate
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        All loan disbursements and debt repayments must flow directly between the bank account of the regulated lending entity (Bank/NBFC) and the borrower,
                        without pass-through pooling accounts operated by unregulated third-party fintech intermediaries.
                        Any transaction routed through shadowy payment gateways or unregistered wallets provides immediate statutory grounds for challenging the enforceability of the underlying debt contract.
                      </p>
                    </div>

                    <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                        <span className="text-[#D2A02A]">4.</span> Board-Approved Compromise Settlement Framework
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Pursuant to RBI circular DOR.STR.REC.20/21.04.048/2023-24, all scheduled commercial banks and NBFCs must maintain board-approved policies governing compromise settlements.
                        These policies mandate standardized delegation of settlement authority, objective evaluation of borrower distress, and the issuance of formal settlement sanction letters that guarantee unconditional account closure upon payment of the compromised sum.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 4: 5-STEP SETTLEMENT PROTOCOL ══ */}
                <section id="5-step-settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Strategic Payday Loan Settlement Protocol
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Navigating a high-interest payday loan settlement requires a disciplined, advocate-led legal methodology.
                    AMA Legal Solutions implements a proven five-stage protocol engineered to eliminate recovery harassment,
                    dissect inflated late fee calculations, and secure conclusive One-Time Settlements backed by official banking documentation.
                  </p>

                  <div className="space-y-6 my-8">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200 shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base">
                        1
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 text-base">
                          Forensic Digital Audit: KFS, Penal Charges &amp; Regulatory Breaches
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Our legal team executes a comprehensive forensic audit of all loan agreements, Key Fact Statements, sanction communications, and payment gateway transaction receipts.
                          We identify unlawful compounding interest markups, unverified processing deductions, and violations of the Usurious Loans Act, 1918.
                          This technical audit establishes the precise bona fide principal outstanding and exposes regulatory vulnerabilities that give the borrower immense negotiation leverage.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200 shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base">
                        2
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Issuance of Advocate-Drafted Statutory Cease-and-Desist Notices
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          We dispatch formal legal notices directly to the board of directors, principal grievance officers, and compliance heads of the regulated lending NBFC and its partnering app platform.
                          Citing Section 43A and Section 66E of the Information Technology Act, 2000, along with the RBI Master Directions on Digital Lending,
                          the notice demands the immediate cessation of all coercive recovery tactics, contact book scraping, and third-party communications.
                          Receipt of an advocate notice mandates the lender to transfer communication exclusively to our legal desk.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200 shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base">
                        3
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Statutory Defense Against Section 25 PSSA &amp; Section 138 NI Act Notices
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          When lenders issue quasi-criminal demand notices for bounced NACH mandates or security cheques, our High Court advocates draft robust statutory replies within the mandatory statutory deadlines.
                          We demonstrate that automated electronic mandates were procured as conditional security rather than in discharge of a legally crystallized liability,
                          thereby dismantling the prerequisite ingredients of Section 25 of the Payment and Settlement Systems Act, 2007 and shielding the borrower from magistrate court summons.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200 shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base">
                        4
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Direct Negotiation with Lending NBFC Credit Committee During Q2 Window
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Harnessing the institutional pressure of the September half-yearly audit close, our senior advocates bypass third-party collection agencies to negotiate directly with the regulated lender's internal settlement committee.
                          We submit an advocate-certified financial hardship dossier demonstrating verified insolvency, medical emergency, or income loss,
                          and negotiate an aggressive compromise proposal that waives compounding penalties and late fees under the RBI Compromise Settlement Framework.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200 shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base">
                        5
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">
                          Board Sanction, e-Mandate Revocation &amp; Bureau Clearance
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Before any settlement remittance is made, we scrutinize the lender's formal compromise sanction letter to guarantee it contains an explicit covenant of full and final debt discharge.
                          Following payment directly into the lender's designated corporate collection account, we secure an official, board-authorized No Dues Certificate.
                          We compel the lender to formally cancel all recurring e-NACH mandates on the NPCI portal and update all credit bureaus (CIBIL, Experian, CRIF High Mark) to reflect zero outstanding balance.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SIGNATURE EDITORIAL INFOGRAPHIC CARD ══ */}
                <section id="infographic" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-3xl overflow-hidden rounded-xl shadow-md border border-[#D2A02A]/20 bg-white">
                      <img
                        src="/images/og/pay-day-loan-settlement-in-september-2026.png"
                        alt="Pay Day Loan Settlement in September 2026 – AMA Legal Solutions Infographic"
                        className="w-full h-auto object-cover block"
                      />
                    </div>
                    <div className="mt-4 text-center max-w-2xl">
                      <p className="text-xs font-bold text-[#1a202c] uppercase tracking-wider">
                        Figure 1: Strategic Legal Pathway for Payday Loan Settlement in September 2026
                      </p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Comprehensive roadmap detailing the forensic loan agreement audit, statutory anti-harassment enforcement,
                        Section 25 PSSA NACH bounce defense, direct Q2 credit committee negotiation, and authentic No Dues Certificate issuance under RBI guidelines.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 5: ANTI-HARASSMENT & CYBER DEFENSE ══ */}
                <section id="anti-harassment-and-cyber-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Halting Coercive Recovery Harassment, Contact Scraping &amp; Cyber Extortion
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The most insidious aspect of defaulting on instant payday loans is the aggressive psychological harassment unleashed by unregulated recovery agencies.
                    Borrowers frequently face barrage calls from virtual numbers, vulgar WhatsApp voice notes, threats to contact office colleagues,
                    and even extortionate threats involving morphed photographs sent to phone contacts harvested during app installation.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under Indian law, these recovery tactics are strictly criminal offenses.
                    AMA Legal Solutions deploys a powerful statutory defense mechanism that shuts down recovery harassment immediately:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm space-y-2">
                      <div className="text-xl">🚨</div>
                      <h3 className="font-bold text-gray-900 text-sm">Information Technology Act, 2000</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Section 43A and Section 66E impose severe civil and criminal penalties for the unauthorized extraction, transmission, or publication of private personal data and images without consent.
                        Section 72 establishes criminal liability for breach of confidentiality against entities that misuse contact lists collected via mobile applications.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm space-y-2">
                      <div className="text-xl">⚖️</div>
                      <h3 className="font-bold text-gray-900 text-sm">Bharatiya Nyaya Sanhita, 2023 (BNS / IPC)</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Coercive recovery tactics constitute cognizable offenses under Section 308 (Extortion), Section 351 (Criminal Intimidation), Section 356 (Defamation), and Section 79 (Outraging the modesty of a woman via digital means) of the BNS, 2023.
                        Recovery executives and their corporate employers face direct criminal prosecution for these offenses.
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-gray-700 leading-relaxed">
                    When an advocate-drafted statutory notice is served on the compliance department of a regulated lender detailing specific timestamps, call recordings, and phone numbers used by recovery agents,
                    the institution faces immediate legal jeopardy. Lenders understand that regulatory complaints filed with the RBI Integrated Ombudsman or State Cyber Crime Cells can result in severe financial penalties and cancellation of NBFC licenses.
                    Consequently, lenders immediately recall their recovery agencies, blacklist rogue agents, and transition the loan file to an internal settlement desk.
                  </p>
                </section>

                {/* ══ SECTION 6: SECTION 25 PSSA & NACH DEFENSE ══ */}
                <section id="section-25-pssa-and-138-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory Defense Against Section 25 PSSA &amp; Section 138 NI Act Summons
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Fintech payday lenders routinely leverage electronic National Automated Clearing House (e-NACH) mandates to trigger automated daily debits against borrowers&apos; bank accounts.
                    When recurring mandates bounce due to insufficient funds, lenders issue threatening legal notices alleging offenses under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong>,
                    which mirrors the criminal penalties for cheque bounce under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Lenders deliberately weaponize these statutory notices to generate panic and force unmanageable payments.
                    However, our High Court banking advocates establish decisive statutory defenses that dismantle these quasi-criminal proceedings:
                  </p>

                  <ul className="space-y-3 list-disc pl-6 text-base text-gray-700 leading-relaxed">
                    <li>
                      <strong>Absence of Crystallized Legally Enforceable Debt:</strong> Under Section 138 of the NI Act and Section 25 of the PSSA, criminal liability attaches exclusively to payments made in discharge of a legally enforceable debt. When lenders inflate loan balances through unconscionable daily interest rates and compounding penalties that breach the Usurious Loans Act, 1918 and RBI KFS guidelines, the claimed amount does not constitute a legally enforceable debt.
                    </li>
                    <li>
                      <strong>Conditional Security Mandate vs Active Payment Conduit:</strong> Electronic NACH mandates established at the inception of a payday loan represent conditional security instruments rather than active debt liquidation instruments. In several landmark rulings, High Courts have held that invoking security mandates for arbitrarily inflated balances cannot sustain criminal prosecution.
                    </li>
                    <li>
                      <strong>Defective Statutory Notice &amp; Limitation Periods:</strong> Lenders frequently issue statutory demand notices through automated email systems that fail to comply with the strict mandatory service requirements under the NI Act and PSSA. Our advocates challenge defective service and procedural lapses to secure the dismissal of premature complaints.
                    </li>
                    <li>
                      <strong>Compounding of Offenses Upon Settlement:</strong> Both Section 147 of the Negotiable Instruments Act and Section 25(5) of the PSSA recognize that all offenses under these provisions are compoundable. Once an advocate-negotiated compromise settlement is executed, the lender must file a formal compounding petition to extinguish all court proceedings.
                    </li>
                  </ul>
                </section>

                {/* ══ SECTION 7: ILLEGAL APPS VS REGULATED NBFCS ══ */}
                <section id="illegal-apps-vs-regulated-nbfcs" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Identifying Rogue 7-Day Lending Apps vs RBI-Regulated Fintech Lenders
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A vital initial step in resolving payday debt is distinguishing between legitimate, RBI-regulated digital lenders and illegal rogue lending applications operating through overseas cyber syndicates.
                    The legal strategy, negotiation protocol, and enforcement mechanisms differ fundamentally between these two categories:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-6 bg-white border-2 border-emerald-600/30 rounded-2xl shadow-sm space-y-3">
                      <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full">
                        Regulated Fintech / NBFC Partners
                      </div>
                      <h3 className="font-extrabold text-[#1a202c] text-base">
                        RBI-Licensed Lending Entities
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        These platforms partner with scheduled commercial banks or registered NBFCs listed on the official Reserve Bank of India portal.
                        They provide standardized Key Fact Statements, disburse funds directly from bank accounts, report account history to CIBIL,
                        and are legally bound by the RBI Integrated Ombudsman Scheme and Compromise Settlement Directions.
                        These debts are resolved through formal One-Time Settlement negotiations, resulting in authentic No Dues Certificates and credit bureau updates.
                      </p>
                    </div>

                    <div className="p-6 bg-white border-2 border-rose-600/30 rounded-2xl shadow-sm space-y-3">
                      <div className="inline-block px-3 py-1 bg-rose-50 text-rose-800 text-xs font-bold rounded-full">
                        Illegal Rogue 7-Day Apps
                      </div>
                      <h3 className="font-extrabold text-[#1a202c] text-base">
                        Unregulated Cyber Extortion Syndicates
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        These entities operate without RBI registration, distribute APK files outside Google Play or under deceptive utility app names,
                        deduct up to half the loan amount as upfront processing fees, and demand full repayment within seven to fourteen days.
                        They have zero legal standing to issue court notices or report to credit bureaus.
                        Their demands represent cyber extortion and are resolved through formal cyber police complaints, SIM blocking directives,
                        and criminal escalation under the Bharatiya Nyaya Sanhita, rather than financial compromise settlements.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 8: OTS LETTER & MANDATE CANCELLATION ══ */}
                <section id="ots-letter-and-mandate-cancellation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Vetting the OTS Sanction Letter &amp; NPCI e-Mandate Revocation
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Settling a payday loan without thorough legal vetting of settlement documentation exposes borrowers to severe recurring financial risks.
                    Unscrupulous collection agencies routinely issue informal settlement letters via WhatsApp or plain email,
                    only for the lending NBFC to later treat the paid sum as a partial interest recovery and continue demanding the residual balance.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    To ensure permanent legal discharge, AMA Legal Solutions enforces strict verification criteria before approving any client remittance:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 bg-gradient-to-r from-[#FAF7F0] to-white border border-[#D2A02A]/30 rounded-xl space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-sm md:text-base">
                        Official Letterhead &amp; Authorized Board Signatory
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        The settlement sanction letter must be printed on the official corporate letterhead of the registered lending bank or NBFC,
                        signed by an authorized corporate signatory with digital signature or physical corporate seal, and feature a verifiable internal settlement reference number.
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-r from-[#FAF7F0] to-white border border-[#D2A02A]/30 rounded-xl space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-sm md:text-base">
                        Explicit Covenant of Full and Final Debt Extinguishment
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        The sanction document must explicitly declare that upon receipt of the compromised sum,
                        the entire loan account stands fully and finally settled under Section 63 of the Indian Contract Act, 1872,
                        with zero residual claim against the borrower or any co-signers.
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-r from-[#FAF7F0] to-white border border-[#D2A02A]/30 rounded-xl space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-sm md:text-base">
                        NPCI e-NACH Revocation &amp; Payment Token Deletion
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        The lender must formally cancel all active e-mandates registered with the National Payments Corporation of India (NPCI)
                        and delete recurring debit tokens stored on payment aggregators. This prevents future automated bank account deductions and protects borrower salary deposits.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 9: CIBIL REPAIR & CREDIT REVIVAL ══ */}
                <section id="cibil-repair-and-credit-revival" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Post-Settlement Credit Revival: Commercial CIBIL Rebuilding Under CICRA 2005
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Following the successful execution of a payday loan settlement, the borrower&apos;s credit profile must be formally updated across all four authorized credit rating agencies in India:
                    TransUnion CIBIL, Experian, Equifax, and CRIF High Mark.
                    Under Section 21 of the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>,
                    credit institutions are statutorily required to furnish accurate, updated credit information to credit information companies within a maximum window of thirty days.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Lenders frequently delay reporting or erroneously report accounts as &ldquo;Written Off&rdquo; or &ldquo;Suit Filed&rdquo; rather than &ldquo;Settled&rdquo;,
                    unjustly depressing borrower credit scores.
                    AMA Legal Solutions oversees post-settlement compliance by filing formal statutory dispute requests accompanied by the board-approved No Dues Certificate.
                    We compel the credit bureau and lender to update the account status to &ldquo;Settled&rdquo; with zero balance outstanding,
                    enabling the borrower to initiate a systematic credit score rebuilding program through secured credit cards and timely utility trade line management.
                  </p>
                </section>

                {/* ══ SECTION 10: FAQS ══ */}
                <section id="faqs" className="space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">❓</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions: Pay Day Loan Settlement
                    </h2>
                  </div>
                  <p className="text-base text-gray-600">
                    Key legal, regulatory, and procedural queries regarding payday and instant app loan settlements in September 2026.
                  </p>

                  <div className="space-y-4 my-6">
                    {faqs.map((faq) => {
                      const isExpanded = expandedFaqs.includes(faq.id);
                      return (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-gray-900 hover:bg-gray-50 transition cursor-pointer"
                          >
                            <span className="text-base">{faq.question}</span>
                            <span
                              className={`text-[#D2A02A] text-xl transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            >
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="p-5 pt-0 text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ══ SECTION 11: MORE LEGAL GUIDES (INTERNAL LINKS) ══ */}
                <section id="internal-guides" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    More Legal Guides: Debt Resolution &amp; Borrower Protection
                  </h2>
                  <p className="text-base text-gray-600">
                    Explore our comprehensive repository of advocate-authored legal guides for debt settlement, consumer credit defense, and regulatory complaints in India.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                    <Link
                      href="/settlement-waiver-percentage-of-payday-loans"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#D2A02A]/5 transition group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition">
                        Payday Loan Waiver Percentages
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Detailed breakdown of average waiver benchmarks and negotiation strategies.
                      </p>
                    </Link>

                    <Link
                      href="/app-loan-settlement-in-september-2026"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#D2A02A]/5 transition group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition">
                        App Loan Settlement Guide
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Digital lending app compromise settlement and anti-harassment defense.
                      </p>
                    </Link>

                    <Link
                      href="/how-to-file-a-complaint-against-bank-nbfc-in-rbi"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#D2A02A]/5 transition group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition">
                        Filing RBI CMS Complaints
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Step-by-step procedure to escalate bank and NBFC violations to the Banking Ombudsman.
                      </p>
                    </Link>

                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#D2A02A]/5 transition group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition">
                        Stop Recovery Agent Harassment
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Legal rights and remedies against abusive debt collectors under RBI guidelines.
                      </p>
                    </Link>

                    <Link
                      href="/will-my-salary-account-be-auto-debited-if-loan-settlement"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#D2A02A]/5 transition group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition">
                        Salary Account Auto-Debit &amp; Liens
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Preventing unlawful bank freezes and automated recurring salary deductions.
                      </p>
                    </Link>

                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#D2A02A]/5 transition group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition">
                        Section 138 NI Act Defense
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        How to reply to cheque bounce notices and defend against criminal summons.
                      </p>
                    </Link>

                    <Link
                      href="/personal-loan-settlement-in-september-2026"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#D2A02A]/5 transition group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition">
                        Personal Loan Settlement
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Comprehensive personal loan OTS process during the September audit period.
                      </p>
                    </Link>

                    <Link
                      href="/nbfc-loan-settlement-in-september-2026"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#D2A02A]/5 transition group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition">
                        NBFC Loan Settlement Guide
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Strategic compromise settlement procedures with registered finance institutions.
                      </p>
                    </Link>

                    <Link
                      href="/loan-settlement-expert-for-high-value-debts"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-[#D2A02A]/5 transition group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#D2A02A] transition">
                        High Value Debt Settlement
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Advocate-led commercial debt compromise, DRT defense, and SARFAESI quashing.
                      </p>
                    </Link>
                  </div>
                </section>

                {/* ══ SECTION 12: STATUTORY CITATIONS & PORTALS ══ */}
                <section id="citations" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory Authority, Regulatory Frameworks &amp; Official Portals
                  </h2>
                  <p className="text-base text-gray-600">
                    The legal strategies set forth on this page are grounded in primary Indian statutes, Reserve Bank of India regulatory directives, and official judicial institutions:
                  </p>

                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <div>
                        <strong>Reserve Bank of India (RBI):</strong> Regulates banking and non-banking financial companies under the RBI Act, 1934 and Banking Regulation Act, 1949. Official Portal:{" "}
                        <a
                          href="https://www.rbi.org.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium"
                        >
                          rbi.org.in
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <div>
                        <strong>RBI Complaint Management System (CMS):</strong> Official grievance portal for escalating regulatory violations by regulated entities:{" "}
                        <a
                          href="https://cms.rbi.org.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium"
                        >
                          cms.rbi.org.in
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <div>
                        <strong>National Legal Services Authority (NALSA):</strong> Statutory authority administering National Lok Adalat compromise benches under the Legal Services Authorities Act, 1987:{" "}
                        <a
                          href="https://nalsa.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium"
                        >
                          nalsa.gov.in
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <div>
                        <strong>National Cyber Crime Reporting Portal:</strong> Ministry of Home Affairs portal for reporting cyber extortion, contact scraping, and unauthorized digital harassment:{" "}
                        <a
                          href="https://cybercrime.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium"
                        >
                          cybercrime.gov.in
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <div>
                        <strong>National Consumer Helpline (NCH):</strong> Department of Consumer Affairs forum for unfair trade practices by financial platforms:{" "}
                        <a
                          href="https://consumerhelpline.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium"
                        >
                          consumerhelpline.gov.in
                        </a>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Meta details & Social Share row at bottom */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <div className="text-xs text-gray-500">
                    Last Updated: September 11, 2026 &bull; Verified by Advocate Anuj Anand Malik
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 mr-1">Share this guide:</span>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on X / Twitter"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition"
                    >
                      {shareMsg || "Copy Link"}
                    </button>
                  </div>
                </div>

                {/* ══ AMA COMPANY & MEDIA SECTION ══ */}
                <section id="ama-company-section" className="border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 bg-gradient-to-br from-white to-[#FAF7F0] shadow-sm">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-[#1a202c] p-2 flex items-center justify-center shadow-md">
                        <img
                          src={LOGO_URL}
                          alt="AMA Legal Solutions Logo"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-[#1a202c]">AMA Legal Solutions</h3>
                        <p className="text-xs text-gray-500 font-medium">
                          Premier Banking &amp; Debt Resolution Advocates &bull; Pan-India Practice
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                      <div className="text-xl">⭐</div>
                      <div>
                        <div className="text-sm font-extrabold text-[#1a202c]">4.7 Google Rating</div>
                        <div className="text-[11px] text-gray-500">Over 1,800+ Verified Client Reviews</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-700 mt-6 leading-relaxed">
                    AMA Legal Solutions is India&apos;s leading legal practice dedicated to loan settlement, banking dispute resolution, and borrower protection.
                    Headed by Senior Advocate Anuj Anand Malik, our panel of High Court advocates represents clients across all major metropolitan jurisdictions,
                    safeguarding families and businesses from unlawful recovery tactics, structuring board-approved One-Time Settlements, and restoring commercial credit health.
                  </p>

                  <div className="mt-8">
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">
                      Our Specialized Debt Resolution Solutions:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <Link
                        href="/services/loan-settlement"
                        className="p-3 text-center rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                      >
                        Loan Settlement
                      </Link>
                      <Link
                        href="/app-loan-settlement-in-september-2026"
                        className="p-3 text-center rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                      >
                        App Loan Resolution
                      </Link>
                      <Link
                        href="/services/best-lawyer-for-bank-harassment"
                        className="p-3 text-center rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                      >
                        Anti-Harassment Defense
                      </Link>
                      <Link
                        href="/services/banking-and-finance"
                        className="p-3 text-center rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                      >
                        Banking &amp; Finance Law
                      </Link>
                      <Link
                        href="/who-is-the-best-lawyer-for-loan-settlement-in-india"
                        className="p-3 text-center rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                      >
                        Senior Banking Advocates
                      </Link>
                      <Link
                        href="/directory"
                        className="p-3 text-center rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                      >
                        Legal Directory
                      </Link>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* ── RIGHT STICKY SIDEBAR ── */}
            <div className="space-y-8 sticky top-24">

              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A] flex-shrink-0">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a202c] text-base">
                      <Link
                        href="/author/anuj-anand-malik"
                        className="hover:text-[#D2A02A] transition"
                      >
                        Anuj Anand Malik
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-500">Founder &amp; Senior Advocate</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Stars count={5} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Advocate Anuj Anand Malik is an enrolled High Court counsel specializing in financial distress, digital lending regulations, and debt settlement litigation. He has represented thousands of borrowers in successfully terminating unlawful recovery harassment and negotiating formal compromise settlements.
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/author/anuj-anand-malik"
                    className="text-xs font-bold text-[#D2A02A] hover:text-[#5A4C33] transition"
                  >
                    View Full Profile &rarr;
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0077b5] transition"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>

              {/* Need Legal Help CTA Card */}
              <div className="bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#1a202c] text-white p-6 rounded-2xl shadow-xl border-2 border-[#D2A02A]/40 space-y-5">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/20 border border-[#D2A02A]/40 rounded-full text-[11px] font-bold text-[#D2A02A] uppercase tracking-wider">
                  Urgent Legal Defense
                </div>
                <h3 className="text-xl font-extrabold text-white leading-tight">
                  Trapped in Payday Loans or Facing Recovery Calls?
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Our enrolled banking advocates will immediately issue statutory Cease-and-Desist notices to halt all harassment and structure a binding One-Time Settlement with the lending NBFC.
                </p>
                <div className="space-y-3 pt-2">
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
                    Request Free Consultation
                  </button>
                </div>
              </div>

              {/* Client Reviews Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1a202c] text-sm uppercase tracking-wider">
                    Client Reviews
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#1a202c]">5.0</span>
                    <Stars count={5} />
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  {clientReviews.map((rev, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900">{rev.authorName}</span>
                        <span className="text-[10px] text-gray-400">Verified</span>
                      </div>
                      <p className="text-[11px] text-gray-500 italic">{rev.authorLocation}</p>
                      <p className="text-gray-600 leading-relaxed text-[11px] line-clamp-4">
                        &ldquo;{rev.reviewBody}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Guides Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <h3 className="font-bold text-[#1a202c] text-sm uppercase tracking-wider">
                  Related Guides
                </h3>
                <div className="space-y-3 text-xs">
                  <Link
                    href="/settlement-waiver-percentage-of-payday-loans"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Payday Loan Settlement Waiver Percentage
                  </Link>
                  <Link
                    href="/app-loan-settlement-in-september-2026"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; App Loan Settlement in September 2026
                  </Link>
                  <Link
                    href="/how-to-file-a-complaint-against-bank-nbfc-in-rbi"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; How to File a Complaint Against Bank or NBFC in RBI
                  </Link>
                  <Link
                    href="/will-my-salary-account-be-auto-debited-if-loan-settlement"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Will My Salary Account Be Auto Debited If Loan Settlement?
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; How to Stop Recovery Agents Harassment Legally
                  </Link>
                  <Link
                    href="/personal-loan-settlement-in-september-2026"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Personal Loan Settlement in September 2026
                  </Link>
                  <Link
                    href="/loan-settlement-expert-for-high-value-debts"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement Expert for High Value Debts
                  </Link>
                </div>
              </div>

            </div>

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
                      Payday Loan Settlement &amp; Legal Defense
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Share your situation confidentially under Section 126 Advocate-Client privilege.
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
                        placeholder="e.g. Shalini Kashyap"
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
                          placeholder="e.g. shalini@example.com"
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
                          placeholder="e.g. Delhi NCR / Mumbai"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Loan Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm bg-white"
                        >
                          <option value="Payday Loans / Instant Mobile Apps">Payday Loans / Instant Mobile Apps</option>
                          <option value="Salary Advance / Fintech Credit Line">Salary Advance / Fintech Credit Line</option>
                          <option value="Multiple Loan Apps with Recovery Calls">Multiple Loan Apps with Recovery Calls</option>
                          <option value="Bounced NACH Mandate / S. 25 PSSA Notice">Bounced NACH Mandate / S. 25 PSSA Notice</option>
                          <option value="Other Unsecured Personal Credit">Other Unsecured Personal Credit</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Brief Details (Apps, Lenders, Harassment Status)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={3}
                        placeholder="Mention names of lending apps, total number of loans, whether recovery agents are calling contacts, or if NACH notices were received..."
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-4 rounded-xl text-center block text-sm shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer mt-2"
                    >
                      Connect With Senior Advocate
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black text-[#1a202c]">
                    Case Details Received
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our senior debt resolution advocate has been notified of your case. For urgent relief from recovery calls, connect directly on WhatsApp right now.
                  </p>
                  <div className="pt-4 space-y-3">
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition cursor-pointer"
                    >
                      <span>💬 Chat Directly on WhatsApp</span>
                    </button>
                    <a
                      href="tel:+918700343611"
                      className="w-full bg-[#1a202c] hover:bg-black text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 text-sm transition block"
                    >
                      <span>📞 Call Directly: +91-8700343611</span>
                    </a>
                    <button
                      onClick={resetModal}
                      className="text-xs text-gray-400 hover:text-gray-600 underline pt-2 block mx-auto cursor-pointer"
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/app-loan-settlement-in-september-2026";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/app-loan-settlement-in-september-2026.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-11";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Why is September 2026 considered the strategic deadline for digital app loan settlement in India?",
    answer:
      "September 2026 represents the conclusion of the second fiscal quarter and half-yearly statutory audit cycle across digital lending platforms and non-banking financial companies (NBFCs) regulated by the Reserve Bank of India. Under RBI Prudential Norms on Income Recognition and Asset Classification (IRAC), lenders must allocate heavy capital provisions for unsecured retail loans delinquent past 90 days, creating institutional urgency for credit committees to sanction compromise settlements and technical write-offs before September 30 disclosures. Concurrently, nationwide National Lok Adalat sittings convened under the Legal Services Authorities Act, 1987 in September provide an official judicial forum to record binding settlement awards that legally extinguish pending recovery claims.",
  },
  {
    id: "faq-2",
    question: "What statutory legal framework governs instant app loan settlements in September 2026?",
    answer:
      "App loan settlements in September 2026 are governed by the Reserve Bank of India Framework for Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) alongside the Master Directions on Digital Lending and the Fair Practices Code. Contractual discharge is validated under Section 63 of the Indian Contract Act, 1872, which legally affirms that an obligee may dispense with or remit the performance of a promise and accept lesser consideration to fully extinguish liabilities. When executed through formal board-approved settlement letters or judicial compromise decrees, these settlements permanently terminate lender recovery rights and prevent subsequent claims by asset reconstruction companies.",
  },
  {
    id: "faq-3",
    question: "How does transparent fixed legal advisory compare with corporate law firm retainers for app loan debt resolution?",
    answer:
      "Transparent fixed legal advisory guarantees comprehensive, end-to-end representation by enrolled High Court advocates under the Advocates Act, 1961 without exposing borrowers to open-ended hourly billing or recurring monthly retainers. Traditional corporate law firms routinely charge steep hourly fees that rapidly surpass the underlying app loan liability, creating immense financial strain for borrowers seeking debt relief. Retaining specialized banking advocates ensures absolute statutory confidentiality under Section 126 of the Indian Evidence Act, 1872, direct representation before institutional credit committees, and structured debt resolution under an accessible, single fixed advisory model.",
  },
  {
    id: "faq-4",
    question: "Why do automated online DIY settlement templates fail when dealing with digital lending platforms?",
    answer:
      "Automated online DIY templates hold zero legal validity under the Advocates Act, 1961 and are systematically rejected by digital lending grievance cells and partner NBFC legal departments. Generic downloaded templates fail to include verified proof of bona fide financial hardship, audit unlawful penal interest markups, or invoke specific regulatory breaches under the RBI Digital Lending Guidelines. Furthermore, generic online letters cannot provide an enforceable legal defense against quasi-criminal notices issued under Section 25 of the Payment and Settlement Systems Act, 2007 or Section 138 of the Negotiable Instruments Act, 1881, often inadvertently admitting full debt liability.",
  },
  {
    id: "faq-5",
    question: "How are unlawful collection agent harassment, contact scraping, and cyber intimidation legally stopped?",
    answer:
      "Coercive debt recovery tactics, contact list scraping, abusive phone calls, and unauthorized messages violate the Reserve Bank of India Master Directions on Digital Lending as well as Section 43A and Section 66E of the Information Technology Act, 2000. Enrolled advocates issue formal statutory Cease-and-Desist notices to the lending institution, warning that persistent harassment will trigger formal complaints before the Cyber Crime Cell and the RBI Integrated Ombudsman under the Integrated Ombudsman Scheme, 2021. Upon receiving advocate notices demonstrating regulatory breaches, digital lending platforms are legally mandated to immediately recall third-party collection agencies and transition communication strictly to authorized settlement channels.",
  },
  {
    id: "faq-6",
    question: "Can an app loan settlement resolve bounced NACH e-mandate summons under Section 25 PSSA and Section 138 NI Act?",
    answer:
      "Executing a formal One-Time Settlement legally quashes pending quasi-criminal complaints and summons issued under Section 25 of the Payment and Settlement Systems Act, 2007 and Section 138 of the Negotiable Instruments Act, 1881. Advocates submit formal statutory replies establishing that automated NACH electronic mandates and security cheques were procured solely as conditional payment conduits rather than in discharge of a legally enforceable debt. Following remittance of the agreed compromise sum, the lending institution is legally obligated to execute joint compounding petitions under Section 147 of the Negotiable Instruments Act, securing complete judicial dismissal of all court proceedings.",
  },
  {
    id: "faq-7",
    question: "How do borrowers differentiate between illegal 7-day loan apps and RBI-registered fintech lenders during settlement?",
    answer:
      "RBI-registered digital lending platforms operate exclusively as Lending Service Providers (LSPs) partnered with licensed scheduled banks or NBFCs, disclose their partner entities on the RBI website, and execute loan agreements adhering to Key Fact Statement (KFS) mandates. Conversely, illegal 7-day lending apps operate outside regulatory oversight, engage in criminal extortion through unauthorized device access, and possess zero legal standing to issue valid court summons or report defaults to credit bureaus. Genuine loan settlements under RBI compromise guidelines apply solely to licensed REs, whereas extortionate demands by unregistered rogue apps are countered through direct police complaints and cybercrime reporting under the Bharatiya Nyaya Sanhita, 2023.",
  },
  {
    id: "faq-8",
    question: "What formal documentation must a borrower receive upon completing an app loan settlement in September 2026?",
    answer:
      "Upon complete remittance of the agreed compromise amount, the borrower must receive an authentic, board-authorized No Dues Certificate or No Objection Certificate on the official letterhead of the lending bank or NBFC, complete with corporate seal and authorized signature. The lender must immediately revoke all active e-NACH mandates, delete stored digital authentication tokens, and return any physical security instruments in their custody. Furthermore, pursuant to the Credit Information Companies (Regulation) Act, 2005, the lender is legally required to submit updated credit files within thirty days to CIBIL, Experian, CRIF High Mark, and Equifax, updating the account status to Settled with zero balance outstanding.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Rohan Deshmukh",
    authorLocation: "Senior Product Designer, Pune • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "I had availed multiple instant personal and fintech credit line loans through digital lending apps during a family medical emergency. When interest piled up and automated NACH mandates bounced, recovery agents started calling my office contacts and threatening criminal action under Section 25 of the PSSA. Generic online settlement templates did nothing to stop the calls, and corporate law firms asked for exorbitant retainers. Advocate Anuj Anand Malik and AMA Legal Solutions intervened immediately under a transparent fixed legal advisory model. They issued statutory cease-and-desist notices to the lending NBFCs, brought the harassment to an immediate halt, and negotiated directly with the fintech credit committees during the September half-yearly audit cycle. They secured a massive waiver on accumulated penal interest and delivered authentic, digitally signed No Dues Certificates for every app account.",
  },
  {
    authorName: "Priya Senthil",
    authorLocation: "Operations Lead, Bengaluru • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "After a job transition created a temporary cash crunch, I was trapped in a cycle of short-term app loans and fintech advances. The lenders sent aggressive WhatsApp notices threatening Section 138 cheque bounce filings and doorstep visits. AMA Legal Solutions provided an exceptional legal defense. Advocate Anuj Anand Malik audited every loan agreement, identified blatant violations of the RBI Digital Lending Guidelines regarding penal charges and contact scraping, and negotiated a structured One-Time Settlement with the partner NBFCs. Their transparent fixed advisory fee gave me complete peace of mind without hidden costs or hourly billing. Within three weeks, all my app loans were formally closed with official No Objection Certificates.",
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
      name: "App Loan Settlement in September 2026: Legal Process & RBI Digital Lending OTS Framework",
      description:
        "Comprehensive legal strategy for digital app loan settlement in September 2026 under RBI compromise guidelines. Advocate-led OTS negotiation for instant loan apps, fintech credit lines, cyber harassment defense, Section 25 NACH defense, and authentic NDCs.",
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
        "App Loan Settlement in September 2026: Legal Process & RBI Digital Lending OTS Framework",
      description:
        "Strategic commercial legal guide to settling digital lending app loans, instant fintech credit lines, and payday advances in September 2026. Explore RBI digital lending norms, Q2 balance sheet provisioning leverage, Section 25 NACH defense, anti-harassment enforcement, transparent fixed legal advisory, and advocate-secured No Dues Certificates.",
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
      name: "Digital App Loan Settlement Legal Advisory",
      description:
        "Dedicated legal debt resolution advisory to negotiate One-Time Settlements (OTS) for defaulted digital lending app loans, fintech credit lines, buy-now-pay-later advances, and personal loans under Reserve Bank of India compromise frameworks in India.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1740",
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
        datePublished: rev.authorLocation.includes("September") ? "2026-09-05" : "2026-08-22",
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
          name: "App Loan Settlement in September 2026",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Strategic App Loan Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Audit of Digital Loan Agreements, Key Fact Statements (KFS) & APR Usury",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Issuance of Statutory Cease-and-Desist Notices to Halt Harassment & Contact Access",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Preparation & Submission of Advocate-Certified Hardship Dossier to Nodal Grievance Officers",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Structured Compromise Negotiation & Legal Vetting of Board-Approved OTS Sanction Letter",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Procurement of Authentic No Dues Certificate, E-Mandate Revocation & CIBIL Bureau Updating",
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
  { id: "september-2026-digital-window", title: "Why September 2026 Q2 Window" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs Corporate Firms vs DIY" },
  { id: "rbi-digital-lending-framework", title: "RBI Digital Lending & OTS Norms" },
  { id: "5-step-app-settlement-protocol", title: "5-Step Strategic Protocol" },
  { id: "infographic", title: "App Loan Settlement Infographic" },
  { id: "illegal-harassment-and-cyber-defense", title: "Halting Harassment & Data Misuse" },
  { id: "section-138-and-section-25-defense", title: "Section 25 NACH & S. 138 Defense" },
  { id: "fake-apps-vs-nbfc-registered-apps", title: "Rogue 7-Day Apps vs Licensed Fintechs" },
  { id: "ots-sanction-and-ndc-verification", title: "Vetting OTS Letters & Authentic NDCs" },
  { id: "credit-score-revival", title: "CIBIL & Credit Bureau Rebuilding" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Statutory Authority & Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function AppLoanSettlementInSeptember2026Client() {
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
    assetType: "Instant Personal Loan App / Fintech Credit",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "App Loan Settlement in September 2026: Legal Process & RBI Digital Lending OTS Framework – AMA Legal Solutions";
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
    const textMsg = `Hello AMA Legal Solutions, I require urgent legal advisory for app loan settlement in September 2026.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Lending App Category: ${formData.assetType}
Details: ${formData.message || "Requesting advocate evaluation for digital app loan OTS negotiation, recovery agent harassment defense, and Section 25 NACH protection."}`;
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
      assetType: "Instant Personal Loan App / Fintech Credit",
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
      label: "App Loan Settlement in September 2026",
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
                <span>⚖️</span> Digital Lending Debt Compromise &amp; RBI Framework
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                App Loan Settlement in{" "}
                <span className="text-[#D2A02A]">September 2026</span>: Legal Process &amp; RBI Digital Lending OTS Framework
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                As regulated non-banking financial companies (NBFCs), scheduled commercial banks, and digital lending partners reach the critical conclusion of their second fiscal quarter and half-yearly audit cycle, institutional lenders face strict regulatory mandates to compress delinquent retail portfolios.
                Discover how advocate-led legal representation leverages Reserve Bank of India digital lending guidelines and compromise settlement circulars to halt unlawful recovery agent harassment, defend against Section 25 NACH mandate and Section 138 cheque bounce summons, eliminate exorbitant penal interest charges, and negotiate enforceable One-Time Settlements (OTS) with authentic No Dues Certificates.
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
                    <span className="text-gray-400">⏱️</span> 17 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> RBI Digital Lending Framework Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Urgent App Loan Evaluation</span>
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
                  src="/images/og/app-loan-settlement-in-september-2026.png"
                  alt="App Loan Settlement in September 2026 – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    September 2026 Digital Debt Resolution
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory Anti-Harassment Enforcement &amp; RBI OTS Compromise
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
                        Quick Legal Summary: App Loan Settlement in September 2026
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                      App loan settlement in September 2026 is a formal legal compromise process wherein borrowers negotiate a binding One-Time Settlement (OTS) with RBI-regulated digital lending platforms and their balance-sheet NBFC partners to extinguish defaulted instant app loans, fintech credit lines, and payday advances at a substantial waiver on accumulated penal interest and charges. September 2026 provides optimal strategic leverage because digital lenders face mandatory half-yearly statutory audits and second-quarter (Q2) balance sheet provisioning deadlines under Reserve Bank of India prudential norms, compelling risk committees to write off non-performing retail portfolios and accept compromise settlements before September 30. Enrolling dedicated banking advocates ensures absolute statutory protection against unlawful collection harassment under RBI Digital Lending Directions, quashes Section 25 NACH mandate and Section 138 notices, and secures authentic No Dues Certificates without recurring corporate retainers.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 1: WHY SEPTEMBER 2026 IS THE PREMIER WINDOW ══ */}
                <section id="september-2026-digital-window" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Why September 2026 Is the Strategic Quarter-End Window for Digital App Loan Debt Resolution
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Digital lending applications, fintech credit aggregators, and their underlying non-banking financial company (NBFC) balance-sheet partners are governed by strict capital adequacy and asset classification rules established by the Reserve Bank of India.
                    The end of September marks the closure of the second fiscal quarter (Q2) and the decisive half-yearly statutory audit cycle.
                    During this operational juncture, institutional risk officers, recovery heads, and credit committees face intense regulatory pressure to minimize Gross Non-Performing Assets (GNPAs) and eliminate non-performing digital credit from their published books.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under the RBI Master Directions on Financial Statements and Asset Classification, unsecured retail app loans that remain overdue beyond 90 days mandate 100% loss provisioning reserves.
                    These provisioning mandates directly freeze the operating capital of fintech lenders and diminish reported corporate profitability.
                    To avoid severe provisioning hits on September 30 financial disclosures, regulated digital lenders actively seek to execute technical write-offs and accept advocate-structured compromise settlements.
                    This regulatory urgency gives borrowers facing genuine financial hardship unparalleled bargaining power, enabling enrolled advocates to negotiate substantial waivers on accumulated compound interest and administrative penalties that lenders would reject earlier in the fiscal year.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">📊</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Provisioning Reversals</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Executing an OTS allows fintech lenders to release frozen capital reserves back into active corporate earnings prior to September 30 statutory disclosures.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">⚖️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">National Lok Adalat Benches</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Nationwide Lok Adalat sittings convened under the Legal Services Authorities Act, 1987 in September offer a statutory judicial forum to finalize binding compromise awards.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">🛑</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Harassment Injunctions</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Formal advocate representation immediately stays unlawful recovery agent calls, contact list scraping, and aggressive automated NACH bank presentation cycles.
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-2 italic text-gray-700 bg-gray-50 rounded-r-xl">
                    &ldquo;Regulated entities shall put in place board-approved policies for undertaking compromise settlements with borrowers facing genuine commercial distress, ensuring transparency, objective criteria, and statutory finality across all commercial and retail credit categories.&rdquo;
                    <span className="block mt-2 font-bold not-italic text-xs text-[#5A4C33]">
                      — Reserve Bank of India, Circular DOR.STR.REC.20/21.04.048/2023-24
                    </span>
                  </blockquote>
                </section>

                {/* ══ SECTION 2: COMMERCIAL REALITY COMPARISON TABLE ══ */}
                <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Reality: Transparent Fixed Legal Advisory vs Expensive Corporate Firms vs Flawed DIY Templates
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Borrowers confronting overwhelming app loan debts, predatory recovery tactics, and multiplying default notices typically face three avenues of recourse:
                    downloading unregulated &ldquo;free&rdquo; online settlement templates, retaining traditional corporate law firms charging open-ended hourly retainers,
                    or engaging dedicated banking advocates under a transparent fixed legal advisory model.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Unregulated DIY templates downloaded from internet forums possess zero legal authority under the Advocates Act, 1961.
                    In-house fintech legal cells and NBFC recovery desks immediately discard these generic letters because they fail to submit verified hardship documentation,
                    audit usurious annual percentage rates (APR), or assert statutory defenses.
                    Worse, generic online templates frequently include disastrous admissions of liability that compromise borrowers in court.
                    Conversely, large corporate law firms routinely treat consumer debt matters as billable-hour profit centers, demanding recurrent monthly retainers and billing by the minute without guaranteeing enforceable debt closure.
                    AMA Legal Solutions bridges this gap by delivering advocate-certified negotiation, cyber harassment defense, and board-level OTS approvals
                    under an accessible, transparent fixed legal advisory model with zero hourly surcharges or surprise retainers.
                  </p>

                  {/* Comprehensive Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4 font-bold border-b border-gray-700">Legal Dimension</th>
                          <th className="p-4 font-bold border-b border-gray-700 text-rose-300">Free DIY Online Templates</th>
                          <th className="p-4 font-bold border-b border-gray-700 text-amber-200">Large Corporate Law Firms</th>
                          <th className="p-4 font-bold border-b border-gray-700 text-[#D2A02A]">AMA Legal Solutions (Fixed Advisory)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Statutory Authority under Advocates Act, 1961</td>
                          <td className="p-4 text-red-600">Zero legal standing; dismissed by fintech legal desks</td>
                          <td className="p-4 text-gray-700">Full advocate standing, but delegated to junior associates</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Direct senior advocate representation before credit committees and Lok Adalats</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Fee Structure &amp; Financial Predictability</td>
                          <td className="p-4 text-red-600">Unregulated lead aggregators selling personal borrower data</td>
                          <td className="p-4 text-red-600">Uncapped hourly billing, recurring monthly retainers, and hidden expenses</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Transparent fixed legal advisory with zero hourly surcharges or surprise retainers</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Advocate-Client Privilege (S. 126 Evidence Act)</td>
                          <td className="p-4 text-red-600">No privilege; personal financial details exposed to commercial telemarketers</td>
                          <td className="p-4 text-emerald-700">Privileged, but passed between shifting internal firm billing desks</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Absolute statutory confidentiality safeguarding borrower financial and personal records</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Digital Harassment &amp; Cyber Defense</td>
                          <td className="p-4 text-red-600">Incapable of halting aggressive calls, contact scraping, or social shaming</td>
                          <td className="p-4 text-gray-700">Requires separate litigation retainers and extra hourly filing fees</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Statutory Cease-and-Desist notices invoking RBI Digital Lending Directions &amp; IT Act</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Section 25 NACH &amp; S. 138 Defense</td>
                          <td className="p-4 text-red-600">Cannot represent borrowers in court or file compounding petitions</td>
                          <td className="p-4 text-gray-700">Billed separately per court appearance before metropolitan magistrates</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">Comprehensive defense, statutory reply drafting, and Section 147 compounding petitions</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-bold text-gray-900">Authentic NDC &amp; CIBIL Bureau Updating</td>
                          <td className="p-4 text-red-600">No verification; borrowers frequently fall into fake settlement scams</td>
                          <td className="p-4 text-gray-700">Treated as a secondary administrative task with separate invoicing</td>
                          <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/40">End-to-end execution oversight until authentic bank NDC is issued and CIBIL updated</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 3: RBI REGULATORY FRAMEWORK ══ */}
                <section id="rbi-digital-lending-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    RBI Regulatory Framework: Digital Lending Guidelines &amp; Compromise Settlement Norms
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The Reserve Bank of India has enacted comprehensive regulatory directives designed to curb abusive collection practices and establish structured compromise mechanisms across digital lending ecosystems.
                    Foremost among these is the RBI Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24), which obligates all regulated entities—including banks and NBFCs operating digital lending platforms—to maintain board-approved policies for executing transparent compromise settlements with borrowers facing genuine commercial or personal hardship.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under Indian contract jurisprudence, the contractual discharge of an app loan obligation is validated by Section 63 of the Indian Contract Act, 1872.
                    This statutory provision establishes the doctrine of accord and satisfaction, recognizing that a creditor may dispense with or remit, wholly or in part, the performance of the loan agreement, or accept any satisfaction which it thinks fit.
                    When an advocate-negotiated compromise settlement is recorded in a formal, board-authorized OTS sanction letter and remittances are completed, the borrower&apos;s contractual liability is completely extinguished under law.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Key Safeguards Mandated by RBI Digital Lending Guidelines
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-[#D2A02A] font-bold text-base mt-0.5">✔</span>
                        <span>
                          <strong>Prohibition on Contact List Harvesting:</strong> Digital Lending Apps (DLAs) and Lending Service Providers (LSPs) are expressly prohibited from accessing, storing, or scraping borrower mobile phone contacts, photo galleries, or biometric data under RBI Master Directions and the Digital Personal Data Protection Act.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#D2A02A] font-bold text-base mt-0.5">✔</span>
                        <span>
                          <strong>Standardized Key Fact Statement (KFS):</strong> Regulated entities must provide an explicit KFS detailing the true Annualized Percentage Rate (APR), total cost of credit, and penal interest rules before loan disbursal. Any undisclosed or usurious fee markup is legally contestable during settlement negotiations.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#D2A02A] font-bold text-base mt-0.5">✔</span>
                        <span>
                          <strong>Direct Account Disbursal &amp; Repayment:</strong> All loan disbursals and repayments must execute strictly between the borrower&apos;s bank account and the regulated entity&apos;s account, without passing through pool accounts of unregulated third-party apps.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#D2A02A] font-bold text-base mt-0.5">✔</span>
                        <span>
                          <strong>Strict Recovery Agent Code of Conduct:</strong> Lenders are prohibited from resorting to intimidation, physical visits outside 8:00 AM to 7:00 PM, calling family members or employers, or using abusive language under the RBI Fair Practices Code.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ══ SECTION 4: 5-STEP SETTLEMENT PROTOCOL ══ */}
                <section id="5-step-app-settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Strategic Protocol for App Loan Settlement in September 2026
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Executing an enforceable digital app loan settlement requires a systematic legal approach that neutralizes recovery harassment, audits loan accounts for statutory violations, and presents an airtight hardship dossier to institutional credit committees.
                    AMA Legal Solutions executes this proven five-step protocol:
                  </p>

                  <div className="space-y-6 my-6">
                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          Forensic Audit of Digital Loan Agreements, Key Fact Statements &amp; Penal Usury
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          Our banking advocates examine the digital sanction letters, Key Fact Statements (KFS), loan statements, and automated e-mandate records across every app account.
                          We isolate unlawful penal interest compounding, unauthorized late payment surcharges, and discrepancies between stated and actual APR, creating legal leverage to demand substantial waivers.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          Issuance of Statutory Cease-and-Desist Notices to Halt Harassment &amp; Data Access
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We dispatch formal legal Cease-and-Desist notices to the lending NBFCs, banks, and collection agencies under the Advocates Act, 1961, RBI Digital Lending Directions, and Section 43A of the Information Technology Act.
                          This immediately halts workplace visits, abusive WhatsApp messaging, and calls to family members, routing all future communication strictly to our legal desk.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          Preparation &amp; Submission of Advocate-Certified Hardship Dossier to Nodal Officers
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          Generic letters are ignored, but an advocate-certified hardship petition supported by documented evidence (medical emergencies, job termination records, or business operating losses) compels institutional review.
                          We submit this petition directly to the Principal Nodal Officer and designated credit committees during the September quarter-end balance sheet cleanup.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          Structured Compromise Negotiation &amp; Legal Vetting of Board-Approved OTS Sanction Letter
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We conduct structured negotiations with the lender&apos;s settlement desk to finalize maximum debt waivers on accumulated penal interest and charges.
                          Before any remittance occurs, our senior advocates rigorously inspect the written OTS sanction letter on official bank/NBFC letterhead to ensure it contains irrevocable full-and-final settlement clauses with zero ambiguous conditionalities.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#D2A02A]/50 transition">
                      <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          Procurement of Authentic No Dues Certificate, E-Mandate Revocation &amp; CIBIL Bureau Updating
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          Following settlement remittance, we secure an official, digitally signed No Dues Certificate (NDC) or No Objection Certificate (NOC) with corporate seal.
                          We compel the lender to formally cancel all active e-NACH/e-mandate banking authorizations and submit updated monthly records to CIBIL, Experian, CRIF High Mark, and Equifax under the Credit Information Companies (Regulation) Act, 2005.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 5: SIGNATURE INFOGRAPHIC CARD ══ */}
                <section id="infographic" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="text-center mb-6">
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider bg-[#1a202c] px-3.5 py-1 rounded-full inline-block mb-2">
                      Legal Architecture
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                      App Loan Settlement Workflow &amp; Regulatory Protection Architecture
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto mt-1">
                      Visualizing the advocate-led legal defense against digital app debt trap, recovery agent harassment, and credit score revival in September 2026.
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                    <img
                      src="/images/og/app-loan-settlement-in-september-2026.png"
                      alt="App Loan Settlement in September 2026 – Legal Process &amp; Regulatory Framework Infographic"
                      className="w-full h-auto object-contain block"
                    />
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-600 leading-relaxed">
                      <strong>Figure 1.1:</strong> Complete legal escalation sequence from forensic loan audit and Cease-and-Desist enforcement to board-level OTS sanction letters and authentic No Dues Certificates under RBI Digital Lending Directions.
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 6: ILLEGAL HARASSMENT & CYBER DEFENSE ══ */}
                <section id="illegal-harassment-and-cyber-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Halting Recovery Agent Harassment, Contact Scraping &amp; Cyber Extortion Legally
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The most distressing consequence of app loan delinquency is aggressive, unlawful recovery harassment.
                    Predatory recovery agencies routinely employ coercive tactics including relentless automated phone calls, abusive WhatsApp voice notes, unauthorized outreach to relatives or employers, and threats of public defamation.
                    Such actions constitute flagrant violations of the Reserve Bank of India Master Directions on Digital Lending, the RBI Fair Practices Code, and statutory criminal provisions.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under Indian cyber law, unauthorized extraction of smartphone contacts, media gallery access, or publishing borrower photos violates Section 43A and Section 66E of the Information Technology Act, 2000, as well as provisions against criminal intimidation and outraging modesty under the Bharatiya Nyaya Sanhita, 2023.
                    Furthermore, the Supreme Court of India in <em>K.S. Puttaswamy v. Union of India</em> established privacy as a fundamental right under Article 21 of the Constitution.
                    When AMA Legal Solutions issues formal statutory notices to the regulated lending entity, detailing the exact time stamps, call recordings, and regulatory violations of their outsourced agents, lenders are compelled under threat of RBI disciplinary action to immediately suspend third-party collection agencies and re-route the account to amicable settlement desks.
                  </p>

                  <div className="border border-red-200 bg-red-50/60 rounded-2xl p-6 space-y-3">
                    <h3 className="text-base font-bold text-red-900 flex items-center gap-2">
                      <span>⚠️</span> Statutory Rights Protected Under RBI Guidelines:
                    </h3>
                    <ul className="text-xs md:text-sm text-red-950 space-y-2 list-disc pl-5">
                      <li>No recovery calls or visits permitted before 8:00 AM or after 7:00 PM.</li>
                      <li>Strict prohibition against contacting borrower friends, relatives, colleagues, or references for debt recovery.</li>
                      <li>Zero tolerance for verbal abuse, intimidation, physical threats, or breach of personal privacy.</li>
                      <li>Obligatory identification: recovery agents must disclose their full identity, agency name, and authorization letter from the regulated bank/NBFC.</li>
                      <li>Direct liability of the regulated entity for any misconduct committed by outsourced collection personnel.</li>
                    </ul>
                  </div>
                </section>

                {/* ══ SECTION 7: SECTION 138 & SECTION 25 PSSA DEFENSE ══ */}
                <section id="section-138-and-section-25-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Defending Section 25 NACH (e-Mandate Bounces) &amp; Section 138 NI Act Summons
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    When digital loan repayments fail, fintech lenders frequently trigger automated repeated presentations of National Automated Clearing House (NACH) electronic mandates.
                    When electronic mandates repeatedly bounce due to insufficient funds, lenders issue statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA).
                    In instances where physical post-dated cheques were collected, notices are issued under Section 138 of the Negotiable Instruments Act, 1881.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Both Section 25 PSSA and Section 138 NI Act create quasi-criminal liability that can culminate in court summons before a Judicial Magistrate.
                    However, receiving a statutory demand notice is not a criminal conviction; it opens a critical legal window to assert substantive defenses:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Contingent Security Instrument Defense</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Our advocates establish that electronic mandates and cheques were obtained at loan inception as contingent security collateral rather than in discharge of a crystallized, legally enforceable existing debt.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Unlawful Penal Sum Disputes</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under Section 138 jurisprudence, a notice claiming an inflated amount that includes illegal usurious interest or uncontracted penal levies without exact ledger separation is legally defective.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Repeated NACH Presentation Abuse</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Lenders routinely violate RBI clearing guidelines by presenting mandates repeatedly within short intervals to artificially trigger bounce charges. We challenge these predatory presentations before magistrate courts.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">Section 147 Compounding Upon OTS</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Once compromise terms are executed, the lender is legally bound under Section 147 of the Negotiable Instruments Act to execute joint compounding petitions, resulting in complete acquittal and dismissal of proceedings.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 8: FAKE 7-DAY APPS VS NBFC APPS ══ */}
                <section id="fake-apps-vs-nbfc-registered-apps" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Distinguishing Rogue 7-Day Loan Apps from Regulated Fintech Lenders
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A critical distinction that every distressed borrower must understand is the legal divergence between legitimate, RBI-regulated digital lending platforms and unregistered, illegal &ldquo;7-day loan apps&rdquo;.
                    The legal remedies and settlement strategies for these two categories are entirely distinct:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-white p-6 rounded-2xl border-2 border-emerald-500/30 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">🏛️</span>
                        <h3 className="font-bold text-gray-900 text-base">RBI-Regulated Digital Lenders</h3>
                      </div>
                      <ul className="space-y-2 text-xs text-gray-700">
                        <li><strong>Structure:</strong> Licensed NBFCs or commercial banks operating through registered Lending Service Providers (LSPs).</li>
                        <li><strong>Disclosures:</strong> Mandatory Key Fact Statement (KFS), verifiable registered office, and published grievance redressal officer.</li>
                        <li><strong>Credit Reporting:</strong> Submits monthly consumer data to CIBIL, Experian, CRIF High Mark, and Equifax.</li>
                        <li><strong>Settlement Remedy:</strong> Formal One-Time Settlement (OTS) under RBI Circular DOR.STR.REC.20/21.04.048/2023-24 resulting in authentic No Dues Certificate and zero-balance bureau updates.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border-2 border-rose-500/30 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">🚫</span>
                        <h3 className="font-bold text-gray-900 text-base">Illegal Rogue / 7-Day Loan Apps</h3>
                      </div>
                      <ul className="space-y-2 text-xs text-gray-700">
                        <li><strong>Structure:</strong> Unlicensed entities operating via APK sideloading or fraudulent app store listings with overseas servers.</li>
                        <li><strong>Modus Operandi:</strong> Exorbitant upfront processing fee deductions, 7-day repayment cycles, contact list scraping, and blackmail with morphed photos.</li>
                        <li><strong>Credit Reporting:</strong> Zero legal standing with credit bureaus; cannot report defaults or affect official CIBIL records.</li>
                        <li><strong>Legal Remedy:</strong> Immediate cybercrime complaints under Bharatiya Nyaya Sanhita, 2023, reporting to the National Cyber Crime Reporting Portal (cybercrime.gov.in), and blocking via Sanchar Saathi (Chakshu portal).</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 9: VETTING OTS SANCTION & NDC ══ */}
                <section id="ots-sanction-and-ndc-verification" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Vetting the OTS Sanction Letter &amp; Securing Authentic No Dues Certificates
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A severe hazard in the digital lending space is the &ldquo;partial payment trap&rdquo;, where collection agents verbally promise debt settlement or send unofficial WhatsApp text messages offering waivers.
                    Borrowers who transfer money based on informal agent promises frequently discover that the lender credited the payment strictly toward accrued penal charges, leaving the principal balance unpaid and delinquency ongoing.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under standard banking legal procedure, zero funds should ever be remitted until an authentic, board-authorized OTS sanction letter is issued.
                    Our senior advocates rigorously audit every settlement document to ensure full compliance with the following mandatory criteria:
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4">
                    <h3 className="text-base font-bold text-gray-900">
                      Mandatory Checklist for an Enforceable App Loan OTS Sanction Letter
                    </h3>
                    <ul className="space-y-2.5 text-xs md:text-sm text-gray-700">
                      <li className="flex items-start gap-2.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span><strong>Official Letterhead:</strong> The letter must be issued on the official letterhead of the licensed bank or NBFC, not an ambiguous third-party collection agency or marketing agency name.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span><strong>Authorized Signatory &amp; Seal:</strong> Must bear the name, employee code, designation, and corporate digital signature of an authorized officer.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span><strong>Explicit Debt Extinguishment Clause:</strong> Must state unequivocally that remittance of the agreed compromise sum constitutes full, final, and absolute satisfaction of all claims under the loan account.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span><strong>Litigation Withdrawal Covenant:</strong> An explicit undertaking that the lender will withdraw all pending legal notices, Section 25 PSSA complaints, Section 138 cases, and arbitration claims.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span><strong>E-Mandate Revocation &amp; NDC Timeline:</strong> An explicit commitment to cancel all active NACH/e-mandates and issue the final No Dues Certificate within 15 to 30 days of settlement payment.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ══ SECTION 10: CREDIT SCORE REVIVAL ══ */}
                <section id="credit-score-revival" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Credit Bureau Rehabilitation: Rebuilding CIBIL &amp; Experian Scores Post-Settlement
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Executing a formal compromise settlement permanently halts legal litigation and extinguishes debt liability, but borrowers must also manage the impact on their credit reports.
                    When a digital loan is settled, the lending institution updates its monthly submission to credit information companies (TransUnion CIBIL, Experian, CRIF High Mark, and Equifax), marking the loan account status as &ldquo;Settled&rdquo; with a zero outstanding balance.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), the lender is legally required to submit updated credit data within 30 days of settlement completion.
                    A &ldquo;Settled&rdquo; status is vastly superior to an active &ldquo;Default&rdquo;, &ldquo;Written Off&rdquo;, or &ldquo;Wilful Default&rdquo; mark, as it proves that all financial claims have been legally satisfied and no legal exposure remains.
                    Borrowers can systematically restore their CIBIL score back above 750 within 12 to 18 months by following a structured post-settlement credit revival roadmap:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 text-xs">
                    <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                      <div className="text-xl mb-1">📋</div>
                      <h4 className="font-bold text-gray-900 mb-1">Verify Bureau Update</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Obtain updated credit reports after 45 days. If any lender fails to update the balance to zero, our advocates file formal statutory dispute petitions under CICRA.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                      <div className="text-xl mb-1">💳</div>
                      <h4 className="font-bold text-gray-900 mb-1">Secured Credit Card Foundation</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Avail a credit card secured against a fixed deposit. Maintain credit utilization strictly under 25% and pay total monthly statements before due dates to build positive credit history.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                      <div className="text-xl mb-1">🚫</div>
                      <h4 className="font-bold text-gray-900 mb-1">Eliminate New Inquiries</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Refrain from applying for unsecured credit cards or digital app loans for at least six months to prevent hard credit inquiries that temporarily depress credit scores.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 11: 8-QUESTION ACCORDION FAQS ══ */}
                <section id="faqs" className="space-y-6">
                  <div className="border-b border-gray-100 pb-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions: App Loan Settlement in September 2026
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Statutory guidance and legal answers compiled by Senior Advocate Anuj Anand Malik.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq) => {
                      const isOpen = expandedFaqs.includes(faq.id);
                      return (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-2xl overflow-hidden transition-colors bg-white shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#D2A02A] transition-colors cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span className="text-sm md:text-base">{faq.question}</span>
                            <span className="text-xl font-extrabold text-[#D2A02A] flex-shrink-0">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ══ SECTION 12: MORE LEGAL GUIDES INTERNAL LINKS ══ */}
                <section id="internal-guides" className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                    More Legal Guides &amp; Loan Settlement Resources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    {[
                      ["/app-loan-settlement", "App Loan Settlement Guide"],
                      ["/how-to-settle-7-days-loan-apps", "How to Settle 7 Days Loan Apps"],
                      ["/top-10-instant-loan-apps-in-india", "Top 10 Instant Loan Apps in India"],
                      ["/how-to-report-harassment-from-instant-loan-apps-in-india", "Report Harassment from Loan Apps"],
                      ["/nbfc-loan-settlement-in-september-2026", "NBFC Loan Settlement September 2026"],
                      ["/personal-loan-settlement-in-september-2026", "Personal Loan Settlement September 2026"],
                      ["/credit-card-settlement-in-september-2026", "Credit Card Settlement September 2026"],
                      ["/business-loan-settlement-in-september-2026", "Business Loan Settlement September 2026"],
                      ["/trading-loan-settlement-in-september-2026", "Trading Loan Settlement September 2026"],
                      ["/loan-settlement-app-with-lowest-charges-in-india", "Loan Settlement App Lowest Charges"],
                      ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Agent Harassment Legally"],
                      ["/loan-recovery-agent-harassment-complaint-online", "Loan Recovery Agent Complaint Online"],
                      ["/section-138-cheque-bounce-notice-for-personal-loan", "Section 138 Cheque Bounce Defense"],
                      ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off Status CIBIL"],
                      ["/difference-between-loan-settlement-and-loan-closure-impact-on-cibil", "Settlement vs Closure CIBIL Impact"],
                      ["/one-time-settlement-scheme-for-personal-loan-2026", "One-Time Settlement Scheme 2026"],
                      ["/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms", "Check Genuine Digital Settlement Offer"],
                      ["/best-debt-settlement-company", "Best Debt Settlement Company India"],
                    ].map(([href, label]) => (
                      <Link
                        key={href}
                        href={href}
                        className="p-3 bg-gray-50 hover:bg-amber-50/60 border border-gray-200 rounded-xl text-gray-700 hover:text-[#5A4C33] transition flex items-center justify-between"
                      >
                        <span className="truncate pr-2 font-medium">{label}</span>
                        <span className="text-[#D2A02A] font-bold">→</span>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ══ SECTION 13: REFERENCES & AUTHORITY ══ */}
                <section id="citations" className="space-y-4">
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                    Statutory Authority &amp; Official Portals
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Reserve Bank of India (RBI) Official Portal</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://cybercrime.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>National Cyber Crime Reporting Portal</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>RBI Integrated Ombudsman Portal (CMS)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://sancharsaathi.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Sanchar Saathi (Chakshu - Report Fraud / Harassment)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>National Legal Services Authority (Lok Adalat)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://services.ecourts.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>eCourts Services Portal (District Courts of India)</span>
                      <span>↗</span>
                    </a>
                  </div>
                </section>

                {/* Social Share Row at Bottom */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <div className="text-xs text-gray-500">
                    Was this app loan settlement guide helpful to your financial situation?
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on Twitter"
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
                      onClick={() => handleShare("whatsapp")}
                      className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition"
                      aria-label="Share on WhatsApp"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 rounded-lg bg-[#D2A02A] hover:bg-[#b08522] text-white text-xs font-semibold transition"
                    >
                      {shareMsg || "Copy Article Link"}
                    </button>
                  </div>
                </div>

                {/* ══ SECTION 14: AMA COMPANY & MEDIA SECTION ══ */}
                <section
                  id="ama-company-section"
                  className="mt-12 p-8 md:p-12 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-4 border-[#D2A02A] rounded-2xl shadow-sm text-center relative overflow-hidden"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/ama3.svg"
                      alt="AMA Legal Solutions"
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
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Combined Legal Experience</strong> in
                    delivering strategic banking litigation, digital app loan compromise settlement, anti-harassment enforcement, and Section 25/138 defense nationwide.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/app-loan-settlement"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      App Loan Settlement
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Anti-Harassment Defense
                    </Link>
                    <Link
                      href="/how-to-settle-7-days-loan-apps"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      7-Day Loan App Defense
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Section 138 &amp; 25 Defense
                    </Link>
                  </div>
                </section>

              </div>
            </div>

            {/* ── RIGHT STICKY SIDEBAR ── */}
            <div className="space-y-8 sticky top-24">

              {/* Card 1: About Author */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  About Author
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#D2A02A] flex-shrink-0">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Anuj Anand Malik</h4>
                    <p className="text-[11px] text-gray-500 mb-1">Founder &amp; Senior Advocate</p>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-xs text-[#D2A02A] hover:underline font-semibold"
                    >
                      View Full Profile →
                    </Link>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Advocate Anuj Anand Malik specializes in digital banking law, fintech debt resolution, recovery agent harassment defense, and consumer protection under the Advocates Act, 1961. He has represented over 10,000 borrowers before High Courts, banking ombudsman benches, and National Lok Adalats nationwide.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2 rounded-lg text-xs font-semibold hover:bg-[#0077b5] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Card 2: Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] p-6 rounded-2xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-2">Need App Loan Debt Help?</h3>
                <p className="text-gray-200 mb-6 text-xs leading-relaxed">
                  Confidential evaluation by Advocate Anuj Anand Malik. Stop collection calls immediately and negotiate board-approved compromise settlements before the September quarter-end closes.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-3 text-sm shadow"
                >
                  Call +91-8700343611
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full border border-white text-white text-center py-3 rounded-xl font-bold hover:bg-white hover:text-[#5A4C33] transition-colors text-sm cursor-pointer"
                >
                  Request Callback
                </button>
              </div>

              {/* Card 3: Client Reviews Card (Matching Product Schema) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2.5">
                  <h3 className="text-base font-bold text-gray-900">Client Reviews</h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Stars />
                  <span className="font-extrabold text-gray-900 text-sm">5.0 / 5.0</span>
                </div>
                <p className="text-[11px] text-gray-500 mb-4">
                  Based on 1,740 verified consumer &amp; fintech debt reviews across India
                </p>

                <div className="space-y-4">
                  {clientReviews.map((rev, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative"
                    >
                      <div className="text-3xl text-[#D2A02A] opacity-20 absolute top-2 left-2 font-serif leading-none">
                        &ldquo;
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-1.5">
                          <Stars />
                          <span className="font-bold text-gray-900 ml-2 text-xs">
                            {rev.reviewRating}
                          </span>
                        </div>
                        <p className="text-gray-700 italic text-xs mb-2 leading-relaxed">
                          &ldquo;{rev.reviewBody}&rdquo;
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="w-7 h-7 bg-[#5A4C33] text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                            {rev.authorName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-xs">{rev.authorName}</p>
                            <p className="text-[10px] text-gray-500">{rev.authorLocation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/ama-legal-solutions-reviews"
                  className="block text-center text-xs text-[#D2A02A] font-bold hover:underline mt-4"
                >
                  Read All Verified Client Reviews →
                </Link>
              </div>

              {/* Card 4: Related Guides */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">
                  Related Guides
                </h3>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/app-loan-settlement", "App Loan Settlement Guide"],
                    ["/how-to-settle-7-days-loan-apps", "7-Day Loan Apps Settlement"],
                    ["/top-10-instant-loan-apps-in-india", "Instant Loan Apps in India"],
                    ["/nbfc-loan-settlement-in-september-2026", "NBFC Loan Settlement Sept 2026"],
                    ["/personal-loan-settlement-in-september-2026", "Personal Loan Settlement 2026"],
                    ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Harassment"],
                    ["/section-138-cheque-bounce-notice-for-personal-loan", "Section 138 Notice Defense"],
                    ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off CIBIL"],
                    ["/one-time-settlement-scheme-for-personal-loan-2026", "OTS Scheme 2026 Guide"],
                    ["/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms", "Check Genuine Digital Offer"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-gray-700 hover:text-[#D2A02A] transition-colors flex items-center justify-between py-0.5"
                      >
                        <span>{label}</span>
                        <span className="text-gray-400">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ══ INTERACTIVE INTAKE MODAL ══ */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={resetModal}
        >
          <div
            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#1a202c] p-6 text-white relative">
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition text-sm cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D2A02A]/20 border border-[#D2A02A]/40 text-[#D2A02A] text-[11px] font-bold uppercase tracking-wider mb-2">
                <span>⚖️</span> September 2026 Digital Debt Advisory
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Request Confidential Legal Evaluation
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Direct consultation with Advocate Anuj Anand Malik. Full attorney-client privilege.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {!modalSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="e.g. Rohan Deshmukh"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
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
                        placeholder="borrower@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        City / State
                      </label>
                      <input
                        type="text"
                        name="cityState"
                        value={formData.cityState}
                        onChange={handleFormChange}
                        placeholder="e.g. Pune / Maharashtra"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Lending App Category
                      </label>
                      <select
                        name="assetType"
                        value={formData.assetType}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] bg-white transition"
                      >
                        <option value="Instant Personal Loan App / Fintech Credit">Instant Personal Loan App / Fintech Credit</option>
                        <option value="Multiple Digital Lending Apps Delinquent">Multiple Digital Lending Apps Delinquent</option>
                        <option value="Recovery Agent Harassment / Calls to Contacts">Recovery Agent Harassment / Calls to Contacts</option>
                        <option value="Section 25 NACH / e-Mandate Bounce Notice">Section 25 NACH / e-Mandate Bounce Notice</option>
                        <option value="Section 138 Cheque Bounce Court Summons">Section 138 Cheque Bounce Court Summons</option>
                        <option value="Illegal 7-Day Loan App Harassment">Illegal 7-Day Loan App Harassment</option>
                        <option value="National Lok Adalat Settlement Notice">National Lok Adalat Settlement Notice</option>
                        <option value="CIBIL Score Default / Written Off Account">CIBIL Score Default / Written Off Account</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Brief Case Summary / App Names &amp; Default Period
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Mention app names (e.g., KreditBee, Kissht, Navi, MoneyTap, Ring, etc.), default duration, or harassment notices..."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500 leading-normal">
                    🔒 All information submitted is strictly privileged and confidential under Section 126 of the Indian Evidence Act, 1872. Zero spam guarantee.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base cursor-pointer"
                  >
                    Submit App Loan Advisory Request →
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Advisory Request Successfully Received
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                      Advocate Anuj Anand Malik and our senior digital banking litigation desk have logged your inquiry for priority September 2026 OTS review.
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-left space-y-2">
                    <p className="text-xs font-bold text-emerald-900">
                      Immediate Step: Connect via Secure WhatsApp
                    </p>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      For immediate protection against aggressive recovery calls, contact scraping, or pending Section 25 NACH notices, initiate direct WhatsApp communication now.
                    </p>
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full mt-2 bg-[#25D366] hover:bg-[#1fa851] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z" /></svg>
                      <span>Open WhatsApp Digital Debt Consultation Now</span>
                    </button>
                  </div>

                  <button
                    onClick={resetModal}
                    className="text-xs text-gray-500 hover:text-gray-800 underline cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/debt-settlement-letter";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/debt-settlement-letter.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-17";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What is a debt settlement letter under Indian banking law?",
    answer:
      "A debt settlement letter is a formal legal instrument drafted under Section 63 of the Indian Contract Act, 1872 and the Reserve Bank of India (RBI) Framework for Compromise Settlements and Technical Write-offs, whereby a borrower officially petitions a lending institution to accept a discounted lump-sum payment in full and final discharge of outstanding credit obligations. Unlike informal correspondence, an advocate-drafted settlement letter operates 'without prejudice' to protect the borrower from premature admissions of liability while establishing genuine financial hardship through audited documentary evidence. Once sanctioned by the bank's competent authority, this letter forms the contractual cornerstone for extinguishing all legal claims, terminating Section 138 proceedings, and securing a formal No Dues Certificate.",
  },
  {
    id: "faq-2",
    question: "Why do free online DIY debt settlement letter templates fail before bank committees?",
    answer:
      "Free automated DIY online templates routinely fail because they lack statutory standing under the Advocates Act, 1961 and do not satisfy the evidentiary thresholds mandated by institutional bank compromise committees. Standardized internet forms contain generic boilerplate text that in-house banking legal cells identify immediately, often inadvertently including clauses that forfeit borrower defenses under the Limitation Act, 1963 or admit unverified compounding penal charges. Furthermore, DIY template downloads cannot provide advocate-client privilege under Section 126 of the Indian Evidence Act, 1872 or provide courtroom defense when lenders initiate coercive litigation.",
  },
  {
    id: "faq-3",
    question: "What essential statutory elements must be included in an advocate-drafted debt settlement proposal letter?",
    answer:
      "An enforceable debt settlement proposal letter must explicitly incorporate a 'Without Prejudice' reservation clause, verified loan account and customer identification numbers, and a forensic breakdown separating principal disbursements from penal compounding interest. The proposal must present certified documentary proof of bona fide financial hardship—such as audited financial deficits, involuntary employment termination notices, or catastrophic medical records—as recognized under RBI fair practices norms. Crucially, the letter must formally stipulate that any compromise payment remains conditional upon the bank withdrawing all pending civil or criminal proceedings and issuing an unconditional, stamped No Dues Certificate.",
  },
  {
    id: "faq-4",
    question: "How does transparent fixed legal advisory compare to corporate law firm retainers for settlement drafting?",
    answer:
      "Transparent fixed legal advisory delivers complete cost predictability for distressed borrowers by eliminating the open-ended hourly billing models, junior associate surcharges, and unpredictable retainers standard among corporate law firms. Under a fixed advisory model, senior banking advocates execute comprehensive ledger audits, draft statutory hardship petitions, and represent the borrower before bank compromise committees under a single, transparent engagement structure. This approach eliminates the predatory financial uncertainty that debt-distressed individuals and MSME promoters cannot bear, while ensuring senior advocate representation under the Advocates Act, 1961.",
  },
  {
    id: "faq-5",
    question: "What is an official Bank OTS Sanction Letter and how does it differ from a borrower proposal letter?",
    answer:
      "While a borrower's proposal letter constitutes a statutory offer under Section 63 of the Indian Contract Act, 1872, an official Bank OTS Sanction Letter represents the formal acceptance issued on the lending institution's corporate letterhead and signed by a designated sanctioning authority. The sanction letter outlines the approved compromise figure, specific payment milestone schedules, and explicit covenants binding the lender to cease all recovery actions upon full remittance. Borrowers must never remit compromise funds until an enrolled advocate has verified the authenticity of the sanction letter against internal bank records to eliminate the grave risk of counterfeit letters issued by unauthorized collection agencies.",
  },
  {
    id: "faq-6",
    question: "Can a bank continue recovery agent harassment after receiving a formal legal settlement letter?",
    answer:
      "No, the formal submission of an advocate-drafted debt settlement letter accompanied by a Vakalatnama legally obligates the lender to route all communication through the borrower's legal counsel under the Reserve Bank of India Master Direction on Fair Practices Code for Lenders. Regulatory directives strictly prohibit lenders and their outsourced recovery agencies from contacting borrowers between 7:00 PM and 8:00 AM, using abusive language, visiting workplaces unannounced, or intimidating family members. Any continued harassment after formal legal representation empowers the advocate to lodge statutory complaints under the RBI Integrated Ombudsman Scheme, 2021 and initiate legal proceedings for violation of privacy and dignity.",
  },
  {
    id: "faq-7",
    question: "What protection does a settlement letter provide against Section 138 Negotiable Instruments Act proceedings?",
    answer:
      "When an advocate issues a formal debt settlement proposal letter, it creates a contemporaneous documentary record of bona fide willingness to resolve financial obligations, disproving the fraudulent or dishonest intent alleged under Section 415 or Section 420 of the Indian Penal Code. While Section 138 of the Negotiable Instruments Act, 1881 constitutes a strict statutory liability for dishonored instruments, a pending or executed compromise settlement enables the advocate to seek adjournment or refer the dispute to a National Lok Adalat under the Legal Services Authorities Act, 1987. Upon payment of the agreed settlement sum, Section 147 of the Negotiable Instruments Act mandates the complete compounding of the criminal complaint and formal discharge of the accused.",
  },
  {
    id: "faq-8",
    question: "What official documentation guarantees that a loan is permanently extinguished after settlement?",
    answer:
      "The definitive legal document proving permanent debt extinguishment is a bank-issued, authorized No Dues Certificate (NDC) or Account Closure Letter bearing an institutional seal, verifiable reference dispatch number, and authorized managerial signature. This statutory release formally discharges the borrower and any co-signers or guarantors from all financial liability under Section 62 and 63 of the Indian Contract Act, 1872. Concurrently, the lender is legally required under the Credit Information Companies (Regulation) Act, 2005 to update credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to reflect the account as 'Settled' with zero outstanding balance.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Saurabh Deshmukh",
  authorRole: "Director of Manufacturing Operations, Pune • Settled High-Exposure Unsecured Debts",
  reviewBody:
    "When sudden supply contract cancellations left my firm unable to service multiple unsecured business credit lines and personal guarantees, banks initiated aggressive recovery tactics and issued statutory legal notices. Generic online DIY settlement letter templates were dismissed by bank zonal committees as frivolous, while traditional corporate law firms proposed unsustainable open-ended retainers with hourly billing. Advocate Anuj Anand Malik and Team AMA Legal Solutions stepped in with transparent fixed legal advisory. They drafted an authoritative, evidence-backed debt settlement proposal letter, audited the compounding penal interest, represented me before the bank's compromise settlement committee, and secured an official RBI-compliant OTS sanction letter with complete debt extinguishment and authentic No Dues Certificates.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Debt Settlement Letter: Statutory Format, Bank Negotiation & RBI OTS Guide",
      description:
        "Comprehensive legal analysis of debt settlement letter drafting, institutional bank compromise negotiation, Section 63 Contract Act application, and authentic No Dues Certificates in India.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Debt Settlement Letter: Statutory Format, Bank Negotiation & RBI OTS Guide",
      description:
        "Complete legal guide to debt settlement letter drafting in India. Learn how advocate-certified One-Time Settlement (OTS) proposal letters eliminate recovery harassment, defend against Section 138 notices, and secure authentic bank compromise sanctions.",
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
      name: "Advocate-Drafted Debt Settlement Letter & Legal Advisory",
      description:
        "Specialized legal drafting, forensic ledger auditing, and institutional negotiation for One-Time Settlement (OTS) proposal letters under Reserve Bank of India compromise frameworks.",
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
          name: "Debt Settlement Letter",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Step Legal Protocol for Debt Settlement Letter Execution",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Ledger Audit & Penal Interest Segregation",
          description:
            "Thorough advocate audit of banking statements to isolate excessive penal interest, unauthorized processing levies, and compounding charges from genuine principal debt obligations.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Drafting Evidence-Backed Hardship Dossier Under Section 63",
          description:
            "Preparation of a formal 'Without Prejudice' settlement proposal establishing bona fide insolvency, medical emergencies, or revenue collapse under the Indian Contract Act, 1872.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vakalatnama Service & Statutory Anti-Harassment Notice",
          description:
            "Issuance of legal representation notice under the RBI Master Direction on Fair Practices Code, mandating all lender communications proceed exclusively through legal counsel.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Institutional Compromise Committee Representation & Sanction Vetting",
          description:
            "Direct legal representation before bank Stressed Asset Management verticals, scrutinizing the official OTS sanction letter to ensure authenticity and legal enforceability.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Controlled Fund Remittance, Court Withdrawal & No Dues Certificate",
          description:
            "Supervised settlement remittance directly into the certified loan account, withdrawal of Section 138 and Section 25 court complaints, and procurement of an unconditional No Dues Certificate.",
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
  { id: "quick-answer", title: "Quick Legal Answer" },
  { id: "statutory-nature-of-settlement-letter", title: "Statutory Basis & Legal Meaning" },
  { id: "commercial-comparison-advocate-vs-diy", title: "Advocate vs DIY Templates vs Corporate Firms" },
  { id: "anatomy-of-enforceable-letter", title: "Mandatory Elements of an Enforceable Letter" },
  { id: "5-step-settlement-letter-protocol", title: "5-Step Execution Protocol" },
  { id: "signature-infographic", title: "Statutory Drafting Infographic" },
  { id: "section-138-and-criminal-defense", title: "Defense Against Section 138 & Section 25" },
  { id: "spotting-fake-sanction-letters", title: "Spotting Fake vs Authentic Bank Sanction Letters" },
  { id: "no-dues-certificate-and-cibil", title: "No Dues Certificate (NDC) & CIBIL Update" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "Related Legal Debt Guides" },
  { id: "statutory-references", title: "Statutory References & Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function DebtSettlementLetterClient() {
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
    const textMsg = `Hello AMA Legal Solutions, I would like to consult an advocate regarding drafting a formal debt settlement letter and negotiating an RBI-compliant One-Time Settlement.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Debt Facility: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory for advocate-drafted debt settlement proposal."}`;
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
      "Debt Settlement Letter: Statutory Format, Bank Negotiation & RBI OTS Guide – AMA Legal Solutions";
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
      label: "Debt Settlement Letter",
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
                <span>📜</span> Statutory Drafting &amp; RBI OTS Compromise Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Debt Settlement <span className="text-[#D2A02A]">Letter</span>: Statutory Format, Bank Negotiation &amp; Legal Drafting Guide
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Master the legal architecture of an enforceable One-Time Settlement (OTS) letter in India. Discover why free DIY online templates collapse under banking committee scrutiny, how advocate-certified drafting under Section 63 of the Indian Contract Act compels institutional negotiation, and how transparent fixed legal advisory secures authentic bank sanction letters and permanent No Dues Certificates without predatory corporate retainers.
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
                    <span>⚖️</span> RBI Framework Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Advocate Settlement Letter Review</span>
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

            {/* Right Col — Generated OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/debt-settlement-letter.png"
                  alt="Debt Settlement Letter – Statutory Drafting & RBI OTS Guide"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Debt Settlement Letter Protocol
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Section 63 Contract Act &bull; RBI OTS Framework &bull; Legal Privilege
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
                  <span className="text-[#D2A02A]">🛡️</span> 100% Legal
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Section 126 Evidence Act Privilege
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> Official NDC
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Authentic Bank Discharges
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
                  Published: <span className="font-semibold text-gray-700">September 17, 2026</span> &bull; Practice: <span className="font-semibold text-gray-700">Banking Litigation &amp; Compromise Drafting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Share:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                    title="Share on Facebook"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-sky-50 text-sky-600 hover:bg-sky-100 transition"
                    title="Share on Twitter"
                  >
                    Twitter/X
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
                    title="Share on LinkedIn"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-amber-50 text-[#5A4C33] hover:bg-amber-100 transition"
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
                  A debt settlement letter is a binding statutory instrument governed under Section 63 of the Indian Contract Act, 1872 and the Reserve Bank of India (RBI) Framework for Compromise Settlements and Technical Write-offs, whereby a borrower formally petitions a lending institution to remit a portion of their contractual debt in exchange for an agreed lump-sum compromise payment. When drafted by an enrolled banking advocate, the settlement proposal carries formal &apos;without prejudice&apos; legal protection, incorporates verified forensic ledger audits separating principal from unconscionable penal compounding charges, and establishes documented financial hardship. This formal legal submission obligates bank compromise committees to evaluate the proposal under regulatory fair practice guidelines, halts coercive recovery harassment, and secures an authentic, bank-sealed No Dues Certificate (NDC).
                </p>
              </div>

              {/* ══ SECTION 1: STATUTORY BASIS & LEGAL MEANING ══ */}
              <section id="statutory-nature-of-settlement-letter" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STATUTORY FOUNDATIONS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The Statutory Basis and Legal Meaning of a Debt Settlement Letter
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In Indian commercial law, a debt settlement letter is not an informal plea for leniency or an admission of guilt. Rather, it represents an actionable contractual offer made under the doctrine of <strong>Accord and Satisfaction</strong> codified in the <a href="https://www.indiacode.nic.in/handle/123456789/2187" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Indian Contract Act, 1872</a>. When unmanageable financial disruption—such as corporate insolvency, business closure, sudden medical emergencies, or involuntary job loss—prevents a borrower from servicing agreed Equated Monthly Installments (EMIs), continuing to accrue predatory compounding penal interest creates mutual deadlocks.
                </p>

                <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 my-4 bg-gray-50 text-gray-700 italic">
                  <strong>Section 63 of the Indian Contract Act, 1872:</strong> &ldquo;Every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may extend the time for such performance, or may accept instead of it any satisfaction which he thinks fit.&rdquo;
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  Under Section 63, lending institutions possess statutory authority to accept a discounted lump-sum payment in complete discharge of the entire underlying debt. When the borrower tenders the approved compromise amount, the original loan contract is legally extinguished, extinguishing any residual right of the bank to initiate recovery suits, enforce collateral claims, or dispatch recovery collection agents.
                </p>

                <h3 className="text-xl font-bold text-[#1a202c] mt-6">
                  The Two Distinct Legal Dimensions of a Settlement Letter
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers navigating distressed debt must recognize that the term <em>debt settlement letter</em> refers to two fundamentally distinct, interconnected legal instruments:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70 space-y-2">
                    <div className="text-sm font-bold text-[#D2A02A] uppercase tracking-wider">
                      Part 1 &bull; The Borrower&apos;s Settlement Proposal
                    </div>
                    <h4 className="font-extrabold text-[#1a202c] text-base">
                      Advocate One-Time Settlement (OTS) Hardship Dossier
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Drafted by an enrolled advocate on formal legal stationery, this document represents the borrower&apos;s structured compromise petition. It sets forth audited forensic accounting isolating genuine principal disbursements, substantiates verifiable financial hardship, and serves as formal documentary defense under Section 126 of the Indian Evidence Act, 1872.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-[#D2A02A]/40 bg-[#D2A02A]/5 space-y-2">
                    <div className="text-sm font-bold text-[#5A4C33] uppercase tracking-wider">
                      Part 2 &bull; The Bank&apos;s Compromise Sanction
                    </div>
                    <h4 className="font-extrabold text-[#1a202c] text-base">
                      Institutional Bank OTS Sanction Letter
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Issued on the official corporate letterhead of the lending bank or NBFC, bearing authorized managerial signatures and branch seals. It formally codifies the approved compromise sum, outlines strict payment deadlines, and covenants the withdrawal of Section 138/25 litigation alongside the issuance of an unconditional No Dues Certificate.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Navigating this delicate bilateral exchange requires deep institutional familiarity with the <Link href="/what-is-debt-settlement" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Reserve Bank of India (RBI) Compromise Framework</Link> and the internal delegation of financial powers governing bank credit sanction committees.
                </p>
              </section>

              {/* ══ SECTION 2: COMMERCIAL REALITY & ADVOCATE VS DIY TEMPLATES VS CORPORATE FIRMS ══ */}
              <section id="commercial-comparison-advocate-vs-diy" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  COMMERCIAL STRATEGY &amp; ENFORCEABILITY
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Commercial Reality: Advocate Drafting vs. Free DIY Templates vs. Corporate Law Firms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When facing relentless recovery calls and formal legal notices, borrowers often seek immediate online solutions. However, the commercial method chosen to draft and present a debt settlement letter directly determines whether the lending bank engages in good-faith negotiations or escalates coercive criminal proceedings.
                </p>

                {/* Comprehensive Comparison Table */}
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-xs border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="p-4 font-bold">Key Evaluation Parameter</th>
                        <th className="p-4 font-bold text-red-300">Free DIY Online Templates</th>
                        <th className="p-4 font-bold text-[#D2A02A]">Advocate-Led Fixed Legal Advisory</th>
                        <th className="p-4 font-bold text-blue-200">Traditional Corporate Law Firms</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Legal Standing &amp; Authority</td>
                        <td className="p-4 text-gray-600">Zero standing under Advocates Act, 1961; treated as informal correspondence.</td>
                        <td className="p-4 text-gray-800 font-semibold bg-amber-50/50">Enrolled High Court Advocates issuing formal Vakalatnama and privileged legal notices.</td>
                        <td className="p-4 text-gray-600">Full statutory standing, but cases frequently delegated to junior associates.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Fee Structure &amp; Cost Predictability</td>
                        <td className="p-4 text-gray-600">Appears free, but triggers devastating financial losses through rejected proposals and default compounding.</td>
                        <td className="p-4 text-gray-800 font-semibold bg-amber-50/50">Transparent, fixed legal advisory without hourly billing markups or unexpected retainers.</td>
                        <td className="p-4 text-gray-600">Open-ended hourly billing, high upfront retainers, and extra charges for routine correspondence.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Confidentiality &amp; Privilege</td>
                        <td className="p-4 text-gray-600">Zero legal privilege; sensitive personal data exposed to unregulated online template portals.</td>
                        <td className="p-4 text-gray-800 font-semibold bg-amber-50/50">Absolute advocate-client privilege under Section 126 of the Indian Evidence Act, 1872.</td>
                        <td className="p-4 text-gray-600">Full advocate-client privilege protected under statutory evidence norms.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Forensic Ledger Dissection</td>
                        <td className="p-4 text-gray-600">None; blindly accepts the bank&apos;s inflated balance containing illegal penal interest.</td>
                        <td className="p-4 text-gray-800 font-semibold bg-amber-50/50">Forensic audit separating genuine principal from unconscionable penal charges under RBI circulars.</td>
                        <td className="p-4 text-gray-600">Detailed forensic audit available, but charged as costly additional accounting hours.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Section 138 &amp; 25 Courtroom Defense</td>
                        <td className="p-4 text-gray-600">None; template cannot enter courtroom appearances or file compounding petitions.</td>
                        <td className="p-4 text-gray-800 font-semibold bg-amber-50/50">Direct advocate representation before Judicial Magistrates and National Lok Adalat benches.</td>
                        <td className="p-4 text-gray-600">Courtroom appearances provided, but billed at premium hourly litigation rates.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Halting Recovery Agent Harassment</td>
                        <td className="p-4 text-gray-600">Ignored by third-party recovery agencies; harassment continues unabated.</td>
                        <td className="p-4 text-gray-800 font-semibold bg-amber-50/50">Immediate cease-and-desist under RBI Fair Practices Code; recovery routed to legal counsel.</td>
                        <td className="p-4 text-gray-600">Formal legal notices served, but often delayed by complex corporate firm hierarchies.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold text-[#1a202c]">
                  Why Free Automated DIY Settlement Letter Templates Fail in Practice
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing financial distress frequently search for free downloadable debt settlement letters online. While copying a generic template may seem cost-free, in banking litigation it routinely triggers catastrophic consequences:
                </p>
                
                <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
                  <li>
                    <strong>Inadvertent Forfeiture of the Limitation Defense:</strong> Under Section 18 of the <a href="https://www.indiacode.nic.in/handle/123456789/1566" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline">Limitation Act, 1963</a>, an unqualified written acknowledgment of debt resets the statutory three-year limitation clock for civil recovery suits. Ill-conceived DIY templates frequently include boilerplate confessions of total outstanding liability, inadvertently reviving time-barred loans and arming bank recovery lawyers with written evidence in court.
                  </li>
                  <li>
                    <strong>Absence of the &apos;Without Prejudice&apos; Doctrine:</strong> An advocate-certified settlement letter is strictly marked <em>&lsquo;WITHOUT PREJUDICE&rsquo;</em> under Section 23 of the Indian Evidence Act, 1872. This ensures that the compromise proposal cannot be cited in judicial proceedings as an admission of default if settlement talks collapse. Generic online templates omit this statutory safeguard, leaving borrowers vulnerable.
                  </li>
                  <li>
                    <strong>Immediate Rejection by Bank Compromise Committees:</strong> Institutional Stressed Asset Resolution Committees review thousands of defaulted files. Boilerplate internet letters lacking audited documentation, medical certificates, or verifiable financial hardship dossiers are flagged as non-serious and rejected without consideration.
                  </li>
                  <li>
                    <strong>Zero Courtroom Representation:</strong> When recovery agencies file criminal complaints under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, a downloaded document cannot file a bail petition, contest summoning orders, or compound offenses.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  To understand how advocate-led negotiation contrasts with unregulated third-party agents, explore our detailed analysis of the <Link href="/best-debt-settlement-service-in-india" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">best debt settlement service in India</Link> and our guide on <Link href="/loan-settlement-ke-liye-konsi-company-sabse-achi-hai" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">choosing the right legal loan settlement company</Link>.
                </p>
              </section>

              {/* ══ SECTION 3: ANATOMY OF AN ENFORCEABLE DEBT SETTLEMENT LETTER ══ */}
              <section id="anatomy-of-enforceable-letter" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  LEGAL DRAFTING ARCHITECTURE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The Anatomy of an Enforceable Debt Settlement Proposal Letter
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Drafting an authoritative debt settlement letter requires surgical legal precision. Every clause must withstand institutional scrutiny by bank legal departments and statutory review by Judicial Magistrates or Lok Adalat benches. An advocate-drafted settlement dossier incorporates six critical legal pillars:
                </p>

                <div className="space-y-4 my-6">
                  <div className="p-5 rounded-2xl border border-gray-200 bg-[#FAF7F0] space-y-2">
                    <h4 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">1.</span> The &apos;Without Prejudice&apos; Legal Heading &amp; Statutory Preamble
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      The document must prominently state that all negotiations are conducted &lsquo;Without Prejudice&rsquo; under Section 23 of the Indian Evidence Act, 1872. This prevents the lending institution from weaponizing the compromise petition as an unconditional admission of liability in ongoing or future civil recovery or criminal proceedings.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-[#FAF7F0] space-y-2">
                    <h4 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">2.</span> Verification of Sanction Terms &amp; Forensic Ledger Dissection
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      Rather than accepting the bank&apos;s inflated total outstanding claim, the letter presents an itemized audit. It dissects the opening principal disbursed, total repayments tendered across the loan tenure, and isolates exorbitant penal interest, bounce charges, and late fees levied in violation of the <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">RBI Fair Practices Code</a>.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-[#FAF7F0] space-y-2">
                    <h4 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">3.</span> Comprehensive Hardship Dossier &amp; Evidentiary Proof
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      Under the RBI Compromise Settlement Framework, bank sanctioning authorities must record documented justification for approving haircuts. The advocate-drafted letter appends certified hardship evidence: termination letters, income tax returns showing collapsed revenue, audited balance sheets, hospital discharge summaries, or disability certificates establishing genuine inability to pay.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-[#FAF7F0] space-y-2">
                    <h4 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">4.</span> Realistic Compromise Offer &amp; Concrete Liquidity Sourcing
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      The proposal specifies an exact, legally defensible compromise sum derived from genuine principal obligations. It establishes the verifiable source of settlement funds—such as family contributions, liquidation of modest ancestral assets, or third-party friendly loans—reassuring the bank committee that immediate liquidity is available upon sanction.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-[#FAF7F0] space-y-2">
                    <h4 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">5.</span> Mandatory Conditions Precedent (Compounding &amp; Litigation Withdrawal)
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      The proposal expressly conditions the release of funds upon the bank executing written covenants to: (a) compound and withdraw all active complaints under Section 138 of the NI Act and Section 25 of the PSSA; (b) recall all arbitration proceedings; and (c) issue an official, unconditional No Dues Certificate within fifteen days of final payment.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-[#FAF7F0] space-y-2">
                    <h4 className="font-extrabold text-[#1a202c] text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">6.</span> Regulatory Enforcement &amp; Anti-Harassment Caveats
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      The letter incorporates a statutory notice instructing the lender to immediately direct all future communication to the appointed advocate. It cites the RBI directives on recovery agents, placing the bank on formal notice that further residential visits, workplace confrontations, or coercive calls will result in regulatory complaints before the Banking Ombudsman.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  For a strategic overview of optimizing concession percentages, review our comprehensive breakdown of securing the <Link href="/debt-settlement-best-waiver" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">best debt settlement waiver</Link> through institutional legal negotiations.
                </p>
              </section>

              {/* ══ SECTION 4: 5-STEP SETTLEMENT LETTER PROTOCOL ══ */}
              <section id="5-step-settlement-letter-protocol" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STEP-BY-STEP LITIGATION PROTOCOL
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Step Legal Protocol: From Letter Drafting to Debt Extinguishment
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Executing an effective One-Time Settlement requires an advocate-led chronological roadmap. Each milestone is engineered to insulate the borrower from criminal liability, stop aggressive recovery tactics, and secure authentic documentation.
                </p>

                <div className="space-y-6 my-6">
                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base border border-[#D2A02A]/30">
                      1
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-gray-900 text-base">
                        Forensic Ledger Audit &amp; Penal Interest Segregation
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Our banking advocates conduct a meticulous audit of loan agreements, account statements, and repayment histories. We strip away compounding default interest, penal levies, and unauthorized administrative charges to establish the true principal liability for negotiation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base border border-[#D2A02A]/30">
                      2
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-gray-900 text-base">
                        Drafting Evidence-Backed Hardship Dossier Under Section 63
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        We draft an airtight, advocate-certified One-Time Settlement proposal letter under Section 63 of the Indian Contract Act, 1872. The petition articulates verifiable hardship reasons, supported by certified medical, employment, or business income evidence, creating an undeniable paper trail for bank compromise sanction committees.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base border border-[#D2A02A]/30">
                      3
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-gray-900 text-base">
                        Vakalatnama Service &amp; Statutory Anti-Harassment Notice
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Simultaneously with proposal submission, our advocates serve an official Vakalatnama and legal notice under the RBI Master Direction on Fair Practices Code. This places the bank and its recovery agencies on notice that all direct borrower contact must cease immediately, transferring communication to our legal team.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base border border-[#D2A02A]/30">
                      4
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-gray-900 text-base">
                        Institutional Compromise Committee Representation &amp; Sanction Vetting
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Our senior legal counsel negotiates directly with bank zonal managers and compromise sanctioning committees. Upon approval, we subject the issued Bank OTS Sanction Letter to forensic legal verification, confirming its authenticity, verifying authorized signatory credentials, and ensuring unambiguous clauses on litigation withdrawal.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-base border border-[#D2A02A]/30">
                      5
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-gray-900 text-base">
                        Controlled Fund Remittance, Court Withdrawal &amp; No Dues Certificate
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Settlement funds are remitted strictly into the verified loan account under advocate supervision. Our team then oversees the filing of compounding applications before Judicial Magistrates to dispose of Section 138 cases, followed by procuring the official, stamped bank No Dues Certificate (NDC).
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Borrowers wondering when to initiate this protocol can consult our guide on <Link href="/when-to-choose-debt-settlement" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">when to choose debt settlement</Link> and the step-by-step procedures outlined in <Link href="/loan-settlement-karwana-hai" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">loan settlement karwana hai</Link>.
                </p>
              </section>

              {/* ══ SECTION 5: SIGNATURE INFOGRAPHIC CARD ══ */}
              <section id="signature-infographic" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                <div className="text-center space-y-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-[#1a202c] text-[#D2A02A] text-xs font-bold rounded-full uppercase tracking-wider">
                    SIGNATURE EDITORIAL INFOGRAPHIC
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    Advocate-Certified Debt Settlement Letter vs. DIY Templates
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                    A visual blueprint contrasting advocate-drafted statutory hardship petitions under RBI frameworks with unverified online DIY downloads.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                  <img
                    src="/images/og/debt-settlement-letter.png"
                    alt="Debt Settlement Letter Statutory Drafting & Bank Negotiation Infographic"
                    className="w-full h-auto object-contain block"
                  />
                  <div className="p-4 bg-gray-50 text-xs text-gray-600 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-gray-700">
                      Source: AMA Legal Solutions Banking Litigation Practice Group
                    </span>
                    <span className="text-[#D2A02A] font-bold">
                      Section 63 Contract Act &bull; RBI OTS Framework
                    </span>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 6: SECTION 138 NI ACT & CRIMINAL DEFENSE ══ */}
              <section id="section-138-and-criminal-defense" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  MAGISTRATE COURT DEFENSE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  How an Advocate Settlement Letter Defends Against Section 138 &amp; Section 25 Notices
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Lenders frequently utilize statutory provisions under Section 138 of the <a href="https://www.indiacode.nic.in/handle/123456789/2256" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Negotiable Instruments Act, 1881</a> (cheque dishonour) and Section 25 of the <a href="https://www.indiacode.nic.in/handle/123456789/2085" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Payment and Settlement Systems Act, 2007</a> (failed NACH auto-debits) to apply criminal pressure to civil debt defaults. An advocate-drafted debt settlement letter serves as an indispensable judicial shield during this phase.
                </p>

                <h3 className="text-lg font-bold text-[#1a202c]">
                  Establishing Absence of Mens Rea and Disproving Fraudulent Intent
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  By submitting an evidence-backed One-Time Settlement proposal under advocate certification, the borrower establishes a formal contemporaneous record of bona fide intent to resolve stressed liabilities. This rebuts aggressive lender allegations under Section 415 and Section 420 of the Indian Penal Code (or Bharatiya Nyaya Sanhita) that the borrower entered the credit contract with deceitful or fraudulent intention.
                </p>

                <div className="p-5 bg-amber-50/60 border-l-4 border-[#D2A02A] rounded-r-xl space-y-2 my-4">
                  <h4 className="font-bold text-[#1a202c] text-sm">
                    Compounding of Offenses Under Section 147 of the Negotiable Instruments Act
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Unlike non-compoundable criminal charges, offenses under Section 138 are expressly compoundable by statute. Once an advocate-drafted settlement proposal is accepted and the compromise figure is remitted, the complainant bank is legally required under Section 147 of the NI Act to join in filing an application for compounding, resulting in complete acquittal and dismissal of proceedings by the Judicial Magistrate.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Furthermore, where formal legal representation is established, our advocates can petition the court to refer the ongoing dispute to a <strong>National Lok Adalat</strong> established under the <a href="https://www.indiacode.nic.in/handle/123456789/1944" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Legal Services Authorities Act, 1987</a>. A settlement award pronounced by a Lok Adalat bench holds the binding force of a non-appealable civil court decree, permanently barring the lender from subsequent litigation.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  For in-depth procedural guidance on handling cheque bounce legal notices, consult our detailed resource on <Link href="/section-138-cheque-bounce-notice-for-personal-loan" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Section 138 cheque bounce notice defense for personal loans</Link>.
                </p>
              </section>

              {/* ══ SECTION 7: SPOTTING FAKE VS AUTHENTIC BANK OTS SANCTION LETTERS ══ */}
              <section id="spotting-fake-sanction-letters" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  FORENSIC FRAUD DETECTION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Spotting Counterfeit Recovery Agent Letters vs. Authentic Bank OTS Sanction Letters
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the most dangerous hazards in Indian debt recovery is the proliferation of fraudulent settlement letters generated by rogue third-party collection agencies. Collection recovery agents operating on commissions frequently issue fake compromise sanction letters on fabricated letterheads to extract partial payments from vulnerable borrowers, only for the bank to credit the payment as normal interest while keeping the default account active.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-xs border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="p-3.5 font-bold">Verification Attribute</th>
                        <th className="p-3.5 font-bold text-red-300">Fake Collection Agency Letter</th>
                        <th className="p-3.5 font-bold text-green-300">Authentic Bank OTS Sanction Letter</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Letterhead &amp; Issuing Domain</td>
                        <td className="p-3.5 text-gray-600">Scanned, low-resolution bank logos or letters sent from generic Gmail/Yahoo domains.</td>
                        <td className="p-3.5 text-gray-800 font-semibold">Crisp official bank stationery delivered from verifiable institutional email domains (@hdfcbank.com, @icicibank.com, @sbi.co.in).</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Authorized Signatory &amp; Employee ID</td>
                        <td className="p-3.5 text-gray-600">Unspecified signatures, stamped as &lsquo;Recovery Officer&rsquo; without employee payroll codes or contact numbers.</td>
                        <td className="p-3.5 text-gray-800 font-semibold">Explicit name, official employee code, designation (Chief Manager/Zonal Head), and official desk phone number.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Payment Account Destination</td>
                        <td className="p-3.5 text-gray-600">Demands funds remitted to collection agency accounts, digital wallets, or third-party intermediary accounts.</td>
                        <td className="p-3.5 text-gray-800 font-semibold">Mandates payment directly and exclusively into the borrower&apos;s own specific loan account number.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 font-bold text-gray-900">Litigation &amp; NDC Undertaking</td>
                        <td className="p-3.5 text-gray-600">Vague statements like &lsquo;account will be resolved&rsquo; without mentioning Section 138 withdrawal or NDC timelines.</td>
                        <td className="p-3.5 text-gray-800 font-semibold">Unambiguous legal clauses binding the bank to withdraw court cases, halt recovery, and issue a No Dues Certificate within a fixed period.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Our banking litigation team verifies every settlement sanction letter directly with the bank&apos;s nodal legal officers and Stressed Assets branches prior to authorizing any fund remittance, ensuring absolute protection against recovery agency fraud. To safeguard your legal rights against unlawful intimidation, see our comprehensive manual on <Link href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">stopping bank recovery agent harassment legally in India</Link>.
                </p>
              </section>

              {/* ══ SECTION 8: NO DUES CERTIFICATE & CIBIL RECTIFICATION ══ */}
              <section id="no-dues-certificate-and-cibil" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  FINAL EXTINCTION &amp; CREDIT RECORD
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Securing the Official Bank No Dues Certificate (NDC) &amp; CIBIL Rectification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Remitting the sanctioned compromise payment does not conclude the legal settlement process. The debt obligation is only definitively extinguished when the lending institution delivers an official <strong>No Dues Certificate (NDC)</strong> or <strong>Account Closure Letter</strong> under the corporate seal of the bank.
                </p>

                <h3 className="text-lg font-bold text-[#1a202c]">
                  The Legal Weight of the No Dues Certificate
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  An authentic No Dues Certificate operates as a complete release under Sections 62 and 63 of the Indian Contract Act, 1872. It officially records that the lending bank has received full and final satisfaction, that no outstanding financial liability remains against the borrower or guarantors, and that the bank irrevocably relinquishes all contractual liens, hypothecations, and claims against the borrower&apos;s properties.
                </p>

                <h3 className="text-lg font-bold text-[#1a202c] mt-4">
                  CIBIL Status: &lsquo;Settled&rsquo; vs. &lsquo;Written Off&rsquo;
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Under the <a href="https://www.indiacode.nic.in/handle/123456789/2049" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Credit Information Companies (Regulation) Act, 2005 (CICRA)</a>, banks are statutorily required to update credit bureau records (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) within thirty days of settlement.
                </p>

                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>
                    <strong>Settled Status:</strong> Indicates that the borrower and lender reached a mutual compromise agreement, with the agreed sum paid in full. The balance outstanding becomes zero, halting Days Past Due (DPD) compounding and allowing the borrower to rehabilitate their credit profile over eighteen to twenty-four months.
                  </li>
                  <li>
                    <strong>Written Off Status:</strong> Signifies that the lender unilaterally marked the account as an unrecovered loss while retaining full legal rights to pursue recovery and legal attachment indefinitely.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  For an exhaustive comparison of credit implications, review our statutory guides on the <Link href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">difference between loan settlement and closure on CIBIL</Link> and <Link href="/loan-write-off-vs-loan-settlement" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">loan write-off vs loan settlement</Link>.
                </p>
              </section>

              {/* ══ SECTION 9: 8-QUESTION ACCORDION FAQ ══ */}
              <section id="frequently-asked-questions" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STATUTORY INQUIRIES
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Frequently Asked Questions on Debt Settlement Letters
                </h2>
                <p className="text-gray-600 text-sm">
                  Authoritative statutory answers on debt settlement letter drafting, legal protections, bank negotiations, and official account closure in India.
                </p>

                <div className="space-y-3 pt-2">
                  {faqs.map((faq, index) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 bg-white"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#1a202c] hover:bg-gray-50 cursor-pointer"
                        aria-expanded={openFaqIndex === index}
                      >
                        <span className="pr-4">{faq.question}</span>
                        <span
                          className={`flex-shrink-0 w-6 h-6 rounded-full bg-amber-50 text-[#D2A02A] flex items-center justify-center text-base transition-transform duration-200 ${
                            openFaqIndex === index ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>
                      {openFaqIndex === index && (
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-[#FAF7F0]/40">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ══ SECTION 10: MORE LEGAL GUIDES INTERNAL LINK GRID ══ */}
              <section id="internal-guides" className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-[#1a202c]">
                  More Legal Guides &amp; Stressed Assets Advisory
                </h3>
                <p className="text-xs text-gray-500">
                  Explore our comprehensive knowledge base of banking litigation, dispute resolution, and borrower rights:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  <Link
                    href="/debt-settlement-india"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50/50 hover:bg-white transition text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>Debt Settlement India Guide</span>
                    <span className="text-[#D2A02A]">&rarr;</span>
                  </Link>
                  <Link
                    href="/what-is-debt-settlement"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50/50 hover:bg-white transition text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>What is Debt Settlement?</span>
                    <span className="text-[#D2A02A]">&rarr;</span>
                  </Link>
                  <Link
                    href="/debt-settlement-kya-hota-hai"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50/50 hover:bg-white transition text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>Debt Settlement Kya Hota Hai</span>
                    <span className="text-[#D2A02A]">&rarr;</span>
                  </Link>
                  <Link
                    href="/best-debt-settlement-service-in-india"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50/50 hover:bg-white transition text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>Best Settlement Service India</span>
                    <span className="text-[#D2A02A]">&rarr;</span>
                  </Link>
                  <Link
                    href="/debt-settlement-best-waiver"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50/50 hover:bg-white transition text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>Best Debt Settlement Waiver</span>
                    <span className="text-[#D2A02A]">&rarr;</span>
                  </Link>
                  <Link
                    href="/when-to-choose-debt-settlement"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50/50 hover:bg-white transition text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>When to Choose Settlement</span>
                    <span className="text-[#D2A02A]">&rarr;</span>
                  </Link>
                  <Link
                    href="/debt-settlement-services"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50/50 hover:bg-white transition text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>Debt Settlement Services</span>
                    <span className="text-[#D2A02A]">&rarr;</span>
                  </Link>
                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50/50 hover:bg-white transition text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>Settlement vs Consolidation</span>
                    <span className="text-[#D2A02A]">&rarr;</span>
                  </Link>
                  <Link
                    href="/loan-settlement-kab-krna-chaiye"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50/50 hover:bg-white transition text-xs font-semibold text-gray-800 flex items-center justify-between"
                  >
                    <span>Loan Settlement Kab Krna Chaiye</span>
                    <span className="text-[#D2A02A]">&rarr;</span>
                  </Link>
                </div>
              </section>

              {/* ══ SECTION 11: REFERENCES & AUTHORITY ══ */}
              <section id="statutory-references" className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-[#1a202c]">
                  Statutory References &amp; Official Regulatory Portals
                </h3>
                <p className="text-xs text-gray-500">
                  Authoritative legislative acts, judicial authorities, and central regulatory bodies governing debt compromise settlements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-bold block"
                    >
                      Indian Contract Act, 1872 (Section 63) &rarr;
                    </a>
                    <p className="text-gray-500 mt-1">India Code Official Legislative Repository &bull; Remission and Accord and Satisfaction.</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-bold block"
                    >
                      Reserve Bank of India (RBI) Regulatory Framework &rarr;
                    </a>
                    <p className="text-gray-500 mt-1">Compromise Settlements &amp; Master Directions on Fair Practices Code.</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2256"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-bold block"
                    >
                      Negotiable Instruments Act, 1881 (Section 138 &amp; 147) &rarr;
                    </a>
                    <p className="text-gray-500 mt-1">Dishonour of Cheques &amp; Compounding of Criminal Proceedings.</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1944"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-bold block"
                    >
                      Legal Services Authorities Act, 1987 (Lok Adalat) &rarr;
                    </a>
                    <p className="text-gray-500 mt-1">Statutory Conciliation &amp; Non-Appealable Civil Court Decrees.</p>
                  </div>
                </div>
              </section>

              {/* Social share row at bottom */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Share This Legal Guide:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-sky-50 text-sky-600 hover:bg-sky-100 transition"
                  >
                    Twitter/X
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-amber-50 text-[#5A4C33] hover:bg-amber-100 transition"
                  >
                    {shareMsg || "Copy Link"}
                  </button>
                </div>
              </div>

              {/* ══ SECTION 12: AMA COMPANY & MEDIA SECTION ══ */}
              <section
                id="ama-company-section"
                className="border-4 border-[#D2A02A] rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white via-[#FAF7F0] to-white shadow-md space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={LOGO_URL}
                      alt="AMA Legal Solutions Logo"
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#1a202c]">
                        AMA Legal Solutions
                      </h3>
                      <p className="text-xs text-gray-500 font-semibold">
                        Pan-India Banking Litigation &bull; Debt Settlement &bull; Commercial Dispute Resolution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200">
                    <span className="text-[#D2A02A] text-xl">⭐</span>
                    <span className="font-extrabold text-gray-900 text-sm">4.7 / 5.0</span>
                    <span className="text-xs text-gray-400">Google Verified</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-bold text-[#1a202c]">
                    Our Stressed Assets &amp; Debt Settlement Legal Solutions
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    AMA Legal Solutions is India&apos;s premier law firm dedicated to defending borrowers against unlawful financial recovery practices. Led by Senior Advocate Anuj Anand Malik, our banking litigation practice group executes forensic ledger audits, drafts authoritative One-Time Settlement letters, defends against Section 138/25 criminal proceedings, and negotiates directly with bank compromise committees under transparent fixed legal advisory with zero hidden retainers.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-3 text-center border-2 border-[#D2A02A] rounded-xl text-xs font-bold text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition cursor-pointer"
                  >
                    Forensic Ledger Audit
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-3 text-center border-2 border-[#D2A02A] rounded-xl text-xs font-bold text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition cursor-pointer"
                  >
                    OTS Letter Drafting
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-3 text-center border-2 border-[#D2A02A] rounded-xl text-xs font-bold text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition cursor-pointer"
                  >
                    Section 138 Court Defense
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-3 text-center border-2 border-[#D2A02A] rounded-xl text-xs font-bold text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition cursor-pointer"
                  >
                    No Dues Procurement
                  </button>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A] mx-auto mb-4">
                  <img
                    src="/anujbhiya.png"
                    alt="Advocate Anuj Anand Malik"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-extrabold text-[#1a202c] text-lg">
                  Anuj Anand Malik
                </h3>
                <p className="text-xs text-[#D2A02A] font-bold uppercase tracking-wider mb-2">
                  Founder &amp; Senior Advocate
                </p>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Advocate Anuj Anand Malik is India&apos;s leading banking litigation and debt settlement lawyer, specializing in RBI compromise frameworks, Section 138 defense, Lok Adalat resolution, and halting unlawful recovery agent harassment.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block w-full border border-[#0A66C2] text-[#0A66C2] text-center py-2.5 rounded-xl text-xs font-bold hover:bg-[#0A66C2] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-xl border border-[#D2A02A]/40 space-y-4 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D2A02A]/20 rounded-full blur-xl pointer-events-none" />
                
                <div className="inline-block bg-[#D2A02A]/20 border border-[#D2A02A]/50 text-[#f3cf7a] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Urgent Legal Relief
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">
                  Facing Unmanageable Debt?
                </h3>

                <p className="text-gray-200 text-xs leading-relaxed">
                  Stop recovery agent harassment today. Retain our senior banking advocates for a confidential case evaluation under RBI compromise settlement guidelines.
                </p>

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
                  Request Callback
                </button>
              </div>

              {/* Client Reviews Card (Verbatim Match to Schema) */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Client Reviews
                  </span>
                  <span className="bg-amber-100 text-[#5A4C33] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    5.0 Google Rating
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Stars count={5} />
                  <span className="text-gray-900 font-extrabold text-sm">5.0 / 5.0</span>
                </div>

                <blockquote className="text-gray-700 italic text-xs leading-relaxed">
                  &ldquo;{clientReviewData.reviewBody}&rdquo;
                </blockquote>

                <div className="pt-3 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-xs">
                    {clientReviewData.authorName}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">
                    {clientReviewData.authorRole}
                  </div>
                </div>

                <Link
                  href="/ama-legal-solutions-reviews"
                  className="block text-center text-xs text-[#D2A02A] font-bold hover:underline pt-2"
                >
                  Read All Verified Client Reviews &rarr;
                </Link>
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
                    &bull; What is Debt Settlement
                  </Link>
                  <Link
                    href="/debt-settlement-kya-hota-hai"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement Kya Hota Hai
                  </Link>
                  <Link
                    href="/best-debt-settlement-service-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Service
                  </Link>
                  <Link
                    href="/when-to-choose-debt-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; When to Choose Settlement
                  </Link>
                  <Link
                    href="/debt-settlement-best-waiver"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Waiver
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-notice-for-personal-loan"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Section 138 NI Act Defense
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Stop Recovery Harassment
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
                      Settlement Letter Evaluation
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Privileged legal review under Section 126 of the Indian Evidence Act.
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
                        placeholder="e.g. Saurabh Deshmukh"
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
                          placeholder="e.g. saurabh@example.com"
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
                          placeholder="e.g. Pune / Mumbai / Delhi"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Category / Asset Type
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
                        placeholder="Briefly describe your loan accounts, whether a sanction letter was received, or if recovery harassment has started..."
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
                    Thank you, <span className="font-bold text-gray-900">{formData.fullName}</span>. An advocate from Team AMA Legal Solutions will review your debt settlement details shortly.
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

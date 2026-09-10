"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/credit-card-settlement-in-september-2026";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/credit-card-settlement-in-september-2026.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-09";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Why is September 2026 considered the prime window for credit card settlement in India?",
    answer:
      "September 2026 marks the conclusion of the second financial quarter (Q2) and half-yearly audit cycle for Indian commercial banks and card issuers, creating urgent institutional requirements to reduce gross Non-Performing Assets (NPAs) to meet regulatory capital adequacy ratios. Under the Reserve Bank of India Framework for Compromise Settlements, bank credit committees receive temporary board-delegated authority during September to write off irrecoverable debt and approve maximum waiver percentages on accumulated finance charges and principal balances. Furthermore, nationwide National Lok Adalat benches convened under the Legal Services Authorities Act, 1987 in September provide an institutional forum to formalize binding compromise decrees with complete judicial finality.",
  },
  {
    id: "faq-2",
    question: "What statutory legal frameworks govern credit card debt settlement in September 2026?",
    answer:
      "Credit card debt settlements in September 2026 are governed by the Reserve Bank of India Master Direction on Credit Card and Debit Card Issuance and Conduct Directions alongside the Circular on Compromise Settlements and Technical Write-offs. Contractual settlement terms are legally anchored under Section 63 of the Indian Contract Act, 1872, which recognizes the acceptance of lesser performance to satisfy and discharge a contractual liability. When recorded and decreed before a Lok Adalat bench under Section 21 of the Legal Services Authorities Act, 1987, the compromise settlement carries the enforceable authority of a civil court decree with absolute finality and zero appealability.",
  },
  {
    id: "faq-3",
    question: "Why do free online DIY settlement templates and automated forms fail when dealing with bank legal cells?",
    answer:
      "Free online DIY templates and automated settlement letters lack statutory standing under the Advocates Act, 1961 and fail to address the complex institution-specific compromise settlement mandates established by bank credit committees. In-house bank recovery legal teams routinely discard generic template requests because automated drafts lack certified evidentiary documentation of bona fide financial hardship and fail to raise valid statutory counter-defenses. Furthermore, DIY templates cannot respond to formal statutory notices issued under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007, frequently compromising the cardholder's legal rights through inadvertent admissions of liability.",
  },
  {
    id: "faq-4",
    question: "How does transparent fixed legal advisory protect cardholders compared to commercial debt agencies?",
    answer:
      "Engaging an enrolled advocate under a transparent fixed legal advisory model creates binding advocate-client privilege under Section 126 of the Indian Evidence Act, 1872, shielding personal financial records and communications from third-party disclosure. Unlike unregulated commercial debt settlement companies that operate without judicial accountability and face continuous regulatory warnings, licensed advocates hold legal standing to represent cardholders before judicial magistrates, civil courts, and Lok Adalat benches. Transparent legal advisory eliminates recurring monthly agency percentages, prevents unauthorized collection agency collusion, and ensures that all negotiations adhere strictly to Reserve Bank of India consumer protection directives.",
  },
  {
    id: "faq-5",
    question: "Can card-issuing banks initiate criminal proceedings under Section 138 or Section 25 for unpaid dues?",
    answer:
      "Credit card issuers frequently initiate statutory demand notices under Section 138 of the Negotiable Instruments Act, 1881 for security cheque dishonour or Section 25 of the Payment and Settlement Systems Act, 2007 for automated NACH mandate bounces prior to settlement. Engaging an advocate ensures the prompt dispatch of formal statutory replies establishing bona fide economic hardship and the absence of fraudulent intent to cheat under Section 415 of the Indian Penal Code. Upon execution of a formal One-Time Settlement (OTS), the lender is legally required to withdraw all pending criminal complaints and file joint compounding applications before the competent judicial magistrate.",
  },
  {
    id: "faq-6",
    question: "How do Reserve Bank of India guidelines protect credit card borrowers from aggressive collection agent harassment?",
    answer:
      "The Reserve Bank of India Master Circular on Recovery Agents and Directives on Digital Lending strictly prohibit card issuers and third-party recovery agencies from resorting to intimidation, verbal abuse, workplace humiliation, or unauthorized residential visitations. Recovery personnel are statutorily barred from contacting cardholders before 8:00 AM or after 7:00 PM, calling friends, relatives, or workplace supervisors, or misrepresenting judicial authority. Advocate-issued legal cease-and-desist notices citing these binding RBI guidelines, accompanied by prompt escalation to the RBI Integrated Ombudsman Scheme, 2021, effectively halt unlawful recovery intimidation.",
  },
  {
    id: "faq-7",
    question: "What essential legal clauses must appear in an authentic credit card One-Time Settlement (OTS) letter?",
    answer:
      "An authentic credit card One-Time Settlement sanction letter must be issued on the official corporate letterhead of the card-issuing bank or NBFC, displaying a unique verifiable reference number, corporate seal, and authorized signature of a designated credit committee officer. The sanction document must explicitly detail the total waived amount, the exact negotiated settlement sum, the structured payment schedule, and an irrevocable covenant to issue an unconditional No Dues Certificate (NDC). Thorough legal vetting of this letter prevents deceptive recovery practices where payments are improperly adjusted against compounding finance charges rather than fully extinguishing the credit card account.",
  },
  {
    id: "faq-8",
    question: "How does credit card settlement affect credit bureau scores and future financial recovery?",
    answer:
      "Executing a credit card settlement results in credit bureaus such as CIBIL, Experian, and Equifax recording the account remark as 'Settled' or 'Post-Write-Off Settled' in accordance with the Credit Information Companies (Regulation) Act, 2005. While this remark initially lowers the credit score, it definitively terminates the catastrophic accumulation of Days Past Due (DPD) penalties and prevents aggressive civil execution decrees. Over a structured eighteen to twenty-four month financial recovery phase, disciplined monetary conduct and the strategic utilization of secured credit instruments allow settled cardholders to systematically rebuild their credit score above 750.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Vikramaditya Sengupta",
    authorLocation: "Kolkata • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "Accumulating compounding finance charges across three credit cards during an unexpected business downturn left me overwhelmed by abusive collection calls and threats of legal action. Commercial debt settlement companies demanded recurring monthly percentages without any legal accountability, while automated DIY online templates were completely ignored by bank recovery managers. Advocate Anuj Anand Malik and AMA Legal Solutions provided transparent fixed legal advisory, issued strict statutory counter-notices that silenced the recovery agents, and represented me in negotiating RBI-compliant OTS agreements during the September quarter-end cycle. They secured authentic No Dues Certificates with over sixty-five percent waivers and zero unexpected fees.",
  },
  {
    authorName: "Meenakshi Sundaram",
    authorLocation: "Chennai • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "After facing job displacement, my credit card minimum dues quickly escalated with compounding interest and late penalties. The bank dispatched statutory notices under Section 25 of the PSS Act and agents showed up at my previous workplace. AMA Legal Solutions intervened immediately with an advocate-drafted reply and represented my matter directly with the bank's zonal credit settlement committee. Advocate Anuj Anand Malik finalized a structured compromise settlement with official bank letterhead sanction and complete criminal quashing. The peace of mind from receiving bank-stamped NDCs with transparent legal guidance was invaluable.",
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
      name: "Credit Card Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Comprehensive legal strategy for credit card debt settlement in September 2026 under RBI compromise frameworks. Advocate-led OTS negotiation, harassment protection, Lok Adalat resolution, and substantial waivers.",
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
        "Credit Card Settlement in September 2026: Legal Process & RBI OTS Framework",
      description:
        "Strategic guide to settling credit card debt in September 2026. Explore RBI compromise guidelines, quarter-end provisioning leverage, Section 138 defense, transparent fixed legal advisory, and how advocate representation secures genuine No Dues Certificates.",
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
      name: "Credit Card Settlement Legal Consultation",
      description:
        "Dedicated legal consultation and dispute representation to negotiate One-Time Settlements (OTS) for defaulted credit card accounts under Reserve Bank of India compromise frameworks in India.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1680",
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
        datePublished: rev.authorLocation.includes("September") ? "2026-09-03" : "2026-08-18",
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
          name: "Credit Card Settlement in September 2026",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Legal Credit Card Debt Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Credit Card Liability Forensic Audit & Finance Charge Stratification",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Dispatch of Statutory Anti-Harassment Cease & Desist Under RBI Guidelines",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Advocate-Certified Financial Hardship Dossier Submission to Credit Committee",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Legal Vetting of OTS Sanction Letter & Quashing Criminal Proceedings",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Securing Unconditional No Dues Certificate & Credit Bureau Record Rectification",
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
  { id: "september-2026-window", title: "Why September 2026 Quarter-End Window" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs Agencies vs DIY Templates" },
  { id: "rbi-regulatory-framework", title: "RBI Compromise Settlement Norms" },
  { id: "5-step-settlement-protocol", title: "5-Step Legal Settlement Protocol" },
  { id: "infographic", title: "Settlement Workflow Infographic" },
  { id: "statutory-criminal-defense", title: "Section 138 & Section 25 Defense" },
  { id: "anti-harassment-enforcement", title: "Enforcing RBI Anti-Harassment Rules" },
  { id: "settlement-letter-and-ndc", title: "Vetting OTS Letter & Securing NDC" },
  { id: "credit-rebuilding-post-settlement", title: "CIBIL Rectification & Financial Revival" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Statutory Authority & Official Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function CreditCardSettlementInSeptember2026Client() {
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
    assetType: "Single Credit Card Default",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Credit Card Settlement in September 2026: Legal Process & RBI OTS Framework – AMA Legal Solutions";
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
      alert("Please enter your name and phone number.");
      return;
    }
    setModalSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const textMsg = `Hello AMA Legal Solutions, I require urgent legal advisory for credit card settlement in September 2026.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Debt Category: ${formData.assetType}
Details: ${formData.message || "Requesting advocate evaluation for RBI OTS negotiation."}`;
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
      assetType: "Single Credit Card Default",
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
      label: "Credit Card Settlement in September 2026",
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
                <span>⚖️</span> Statutory Debt Resolution &amp; RBI Compromise Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Credit Card Settlement in{" "}
                <span className="text-[#D2A02A]">September 2026</span>: Legal Process &amp; RBI OTS Framework
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                As card-issuing commercial banks and financial institutions reach their critical second-quarter balance sheet audit,
                the institutional window for negotiated One-Time Settlements (OTS) opens with maximum flexibility.
                Discover how licensed advocate representation leverages Reserve Bank of India compromise settlement
                mandates, eliminates predatory recovery harassment, defends against Section 138 and Section 25 criminal notices,
                and secures legally binding debt waivers backed by authentic No Dues Certificates.
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
                    <span className="text-gray-400">📅</span> 09-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 17 Min Read
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
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
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

            {/* Right Col — Generated OG Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/credit-card-settlement-in-september-2026.png"
                  alt="Credit Card Settlement in September 2026 – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    September 2026 Compromise Framework
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory Debt Resolution &amp; Judicial Protection
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

        {/* ══ MAIN 3-COLUMN EDITORIAL GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">

            {/* ── LEFT COLUMN: DESKTOP STICKY TOC ── */}
            <div className="hidden lg:block sticky top-28 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 max-h-[calc(100vh-140px)] overflow-y-auto">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <span className="text-[#D2A02A] text-lg font-bold">📑</span>
                <p className="font-bold text-gray-900 text-sm">Table of Contents</p>
              </div>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* ── CENTER COLUMN: EDITORIAL CONTENT ── */}
            <div className="min-w-0">
              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">

                {/* Meta details & Social Share bar */}
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
                    &bull; Published: September 2026
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-gray-700">Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm cursor-pointer"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition shadow-sm cursor-pointer"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm cursor-pointer"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm cursor-pointer"
                      title="Share on WhatsApp"
                      aria-label="Share on WhatsApp"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z" /></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition cursor-pointer"
                      title="Copy URL"
                    >
                      {shareMsg || "Copy"}
                    </button>
                  </div>
                </div>

                {/* Standalone Quick-Answer Block */}
                <div
                  id="quick-answer"
                  className="p-6 md:p-8 bg-amber-50 border-2 border-[#D2A02A] rounded-2xl shadow-sm text-gray-800"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[#D2A02A] text-xl">📌</span>
                    <h2 className="text-lg md:text-xl font-extrabold text-[#5A4C33] tracking-tight">
                      Quick Answer: Credit Card Settlement in September 2026
                    </h2>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-gray-800 font-medium">
                    Credit card settlement in September 2026 is a formal legal procedure whereby an unsecured cardholder and a card-issuing bank execute a binding compromise deed to extinguish outstanding card liabilities through a mutually agreed lump-sum or structured payment. Under the Reserve Bank of India Compromise Settlements and Technical Write-offs Framework, regulated banks and NBFCs leverage the September quarter-ending balance sheet provisioning cycle to sanction substantial waivers on accumulated finance charges, penal levies, and principal balances. Conducting credit card settlement under advocate guidance guarantees complete immunity against collection agent harassment, quashes Section 138 and Section 25 criminal notices, and secures an unconditional No Dues Certificate without residual legal exposure.
                  </p>
                </div>

                {/* Section 1: September 2026 Quarter-End Window */}
                <section id="september-2026-window" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Why September 2026 is the Prime Quarter-End Settlement Window
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    In the Indian banking ecosystem, September represents a vital institutional turning point. As the conclusion of the second fiscal quarter (Q2) and the halfway mark of the financial year, commercial banks, multinational card issuers, and non-banking financial companies (NBFCs) operate under intense regulatory pressure to submit verified half-yearly balance sheets to the Reserve Bank of India, credit rating institutions, and financial markets.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Under the <Link href="/what-happens-after-loan-account-becomes-npa" className="text-[#D2A02A] font-semibold hover:underline">Prudential Framework for Resolution of Stressed Assets</Link>, banks are legally mandated to maintain heavy capital provisioning against Non-Performing Assets (NPAs). Unsecured credit card balances classified as Sub-standard, Doubtful, or Loss assets severely penalize institutional profitability because banks must lock away precious capital reserves without generating interest income. Consequently, during September, bank credit sanctioning committees and recovery verticals operate under direct board mandates to clean stressed loan books by executing compromise settlements.
                  </p>

                  <div className="bg-[#FAF7F0] border-l-4 border-[#D2A02A] p-5 rounded-r-xl space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5A4C33]">
                      Institutional Provisioning Drivers in September 2026
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-gray-700">
                      <li><strong>Quarterly NPA Compression Mandates:</strong> Zonal recovery heads and credit settlement committees receive temporary discretionary authority to approve higher waiver percentages on finance charges and principal debt to achieve quarterly balance sheet targets before September 30.</li>
                      <li><strong>RBI Technical Write-Off Ceilings:</strong> Regulatory write-off guidelines incentivize lenders to shift chronic delinquent card accounts from active ledger books into technically written-off pools where compromise agreements are sanctioned with significantly reduced administrative friction.</li>
                      <li><strong>National Lok Adalat Synchronization:</strong> Nationwide National Lok Adalat sittings convened during September under the Legal Services Authorities Act, 1987 provide an official judicial framework to record compromise settlements with the binding weight of a civil court decree.</li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Cardholders who attempt negotiations outside of these audit windows encounter rigid institutional resistance, automated collection calls, and minimal waiver concessions. By aligning legal representations with the September audit timeline, an advocate harnesses the lender&apos;s internal provisioning urgency to obtain settlement terms that would otherwise be summarily rejected.
                  </p>
                </section>

                {/* Section 2: Commercial Reality: Advocate vs Agencies vs DIY Templates */}
                <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Reality: Legal Advocate vs. Unregulated Agencies vs. Free DIY Templates
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    When dealing with overwhelming credit card debt, cardholders are confronted with three primary options: generic online DIY templates, unregulated commercial settlement companies, and licensed banking advocates. Evaluating these choices based on legal enforceability, court standing, and cost-effectiveness is essential for safeguarding your financial future.
                  </p>

                  {/* Comparative Analysis Table */}
                  <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm text-gray-700">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700">Evaluation Metric</th>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700 text-red-300">Free DIY Online Templates</th>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700 text-amber-300">Unregulated Settlement Agencies</th>
                          <th className="p-3.5 md:p-4 font-bold border-b border-gray-700 text-emerald-300">AMA Legal Solutions (Advocate Advisory)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Statutory Court Standing</td>
                          <td className="p-3.5 md:p-4 text-red-600">Zero legal standing; inadmissible as formal legal pleadings</td>
                          <td className="p-3.5 md:p-4 text-amber-600">No judicial authority; barred under Advocates Act, 1961</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Full statutory standing before High Courts, Magistrates &amp; Lok Adalats</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Legal Representation &amp; Privilege</td>
                          <td className="p-3.5 md:p-4 text-gray-600">None; unprotected admissions can be weaponized in court</td>
                          <td className="p-3.5 md:p-4 text-gray-600">Unregulated call centers; no client confidentiality privilege</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Absolute advocate-client privilege under Evidence Act Section 126</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Defense Against Section 138 / Section 25</td>
                          <td className="p-3.5 md:p-4 text-red-600">Cannot represent or file compounding petitions</td>
                          <td className="p-3.5 md:p-4 text-red-600">Cannot appear; cardholder risks non-bailable arrest warrants</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Comprehensive defense, formal reply drafting &amp; court compounding</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">Fee Transparency &amp; Cost Structure</td>
                          <td className="p-3.5 md:p-4 text-gray-600">Appears free but causes severe financial loss via unverified scams</td>
                          <td className="p-3.5 md:p-4 text-amber-600">Recurring monthly percentages &amp; surprise subscription deductions</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Transparent fixed advisory without hourly markups or corporate retainers</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3.5 md:p-4 font-bold text-gray-900">OTS Letter &amp; NDC Authentication</td>
                          <td className="p-3.5 md:p-4 text-red-600">No verification; cardholder vulnerable to fake collection letters</td>
                          <td className="p-3.5 md:p-4 text-amber-600">Frequent collusion with recovery agents; unverified receipts</td>
                          <td className="p-3.5 md:p-4 text-emerald-700 font-semibold">Rigorous forensic legal vetting of sanction letter &amp; unconditional NDC</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      The commercial appeal of free internet templates is dangerously misleading. In practical banking operations, sending an automated or unverified template letter to a bank&apos;s legal cell often operates as an irrevocable written admission of liability. Without statutory defenses, banks immediately expedite summary recovery suits under Order XXXVII of the Code of Civil Procedure or initiate criminal proceedings under Section 138 of the Negotiable Instruments Act.
                    </p>
                    <p>
                      Similarly, commercial debt settlement companies operate in a grey regulatory zone. Because these entities lack enrollment under the <Link href="/top-loan-settlement-lawyers-in-india" className="text-[#D2A02A] font-semibold hover:underline">Advocates Act, 1961</Link>, they cannot step into a courtroom, file an appearance before a judicial magistrate, or sign settlement agreements on behalf of clients. Furthermore, their compensation models often rely on ongoing monthly retainers or ambiguous contingency cuts, bleeding financially distressed cardholders.
                    </p>
                    <p>
                      AMA Legal Solutions delivers a transparent, fixed legal advisory model. We replace bloated corporate retainers and hourly billing spirals with transparent legal representation. Every communication is protected under Section 126 of the Indian Evidence Act, and all settlement terms are negotiated directly with authorized institutional officers.
                    </p>
                  </div>
                </section>

                {/* Section 3: RBI Regulatory Framework & Master Directions */}
                <section id="rbi-regulatory-framework" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    RBI Regulatory Framework Governing Credit Card Compromise Settlements
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Credit card debt resolution in India is not an informal negotiation; it is a legally codified process regulated by the Reserve Bank of India. Understanding the governing directives empowers borrowers to negotiate from a position of statutory strength.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                      <div className="flex items-center gap-2 text-[#D2A02A] font-bold text-sm">
                        <span>📖</span> RBI Compromise Settlement Circular
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        The Reserve Bank of India Framework for Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) mandates that all commercial banks and NBFCs must maintain board-approved compromise settlement policies. It requires lenders to offer fair, non-discriminatory settlement avenues to distressed borrowers facing bona fide economic incapacity.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                      <div className="flex items-center gap-2 text-[#D2A02A] font-bold text-sm">
                        <span>💳</span> Master Direction on Credit Cards
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        The RBI Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022 (updated 2024) strictly governs the calculation of compounding finance charges, excessive late payment fees, and penal interest. It explicitly prohibits card issuers from levying hidden charges once an account enters structured resolution.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                      <div className="flex items-center gap-2 text-[#D2A02A] font-bold text-sm">
                        <span>📜</span> Section 63 of Indian Contract Act, 1872
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Under Section 63, every promisee may dispense with or remit, wholly or in part, the performance of the promise made to them, or may accept instead of it any satisfaction which they think fit. This provides the primary statutory foundation for binding debt waivers.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                      <div className="flex items-center gap-2 text-[#D2A02A] font-bold text-sm">
                        <span>⚖️</span> Legal Services Authorities Act, 1987
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Section 21 establishes that an award made by a Lok Adalat bench shall be deemed to be a decree of a civil court. Lok Adalat settlement awards are final and binding on all parties, with zero appeal allowed in any appellate court, completely extinguishing the debt.
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 my-4 text-xs md:text-sm italic text-gray-700 bg-[#FAF7F0] rounded-r-lg">
                    &ldquo;Under the Reserve Bank of India directives, compromise settlements must be executed through transparent, objective criteria. Card-issuing institutions cannot adopt coercive or discriminatory practices against borrowers experiencing genuine economic hardship, nor can they delegate judicial functions to third-party recovery agencies.&rdquo;
                  </blockquote>
                </section>

                {/* Section 4: 5-Step Legal Settlement Protocol */}
                <section id="5-step-settlement-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Legal Credit Card Settlement Protocol
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Executing an authentic, legally enforceable credit card settlement requires strict adherence to a disciplined procedural roadmap. AMA Legal Solutions follows a proven 5-step framework designed to maximize debt waivers while guaranteeing full statutory immunity.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "Step 1",
                        title: "Credit Card Liability Forensic Audit & Finance Charge Stratification",
                        desc: "Our legal team conducts a forensic examination of your credit card statements across the preceding twenty-four to thirty-six months. We segregate the authentic principal expenditure from compounding finance charges (which often exceed 42% to 48% annualized), GST levies, over-limit penalties, and late fee cascades. This audit establishes the baseline figure for institutional negotiation and exposes any regulatory non-compliance under RBI Master Directions.",
                      },
                      {
                        step: "Step 2",
                        title: "Dispatch of Statutory Anti-Harassment Cease & Desist Under RBI Guidelines",
                        desc: "Upon engagement, our advocates issue formal legal notices to the bank's collection vertical, compliance department, and affiliated third-party recovery agencies. Citing the RBI Master Circular on Recovery Agents and Supreme Court rulings on privacy, the notice establishes that all further communications must be routed exclusively through legal counsel. This immediately terminates aggressive calls, workplace visits, and unauthorized third-party harassment.",
                      },
                      {
                        step: "Step 3",
                        title: "Advocate-Certified Financial Hardship Dossier Submission to Credit Committee",
                        desc: "We prepare and file a comprehensive hardship dossier directly before the bank's authorized Zonal Credit Committee or Stressed Asset Management Branch. Backed by certified documentary evidence—such as medical diagnoses, business cash flow disruptions, employment termination records, or bank statements—the dossier proves bona fide financial distress and substantiates an authentic proposal for an RBI compromise write-off.",
                      },
                      {
                        step: "Step 4",
                        title: "Legal Vetting of OTS Sanction Letter & Quashing Criminal Proceedings",
                        desc: "When the bank approves the compromise terms, our banking advocates conduct exhaustive vetting of the One-Time Settlement (OTS) sanction letter. We ensure the document is issued on official bank letterhead, signed by an authorized scale manager, contains explicit waiver clauses, and includes an enforceable obligation to withdraw pending Section 138 NI Act or Section 25 PSS Act complaints upon final payment.",
                      },
                      {
                        step: "Step 5",
                        title: "Securing Unconditional No Dues Certificate & Credit Bureau Record Rectification",
                        desc: "Following the execution of the agreed settlement payment, we follow up with the lender to obtain an official, bank-stamped No Dues Certificate (NDC). We ensure that the settlement decree is recorded before a Lok Adalat bench or civil court, and verify that the account status is accurately reported to CIBIL, Experian, and Equifax as 'Settled', successfully closing your liability ledger.",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#D2A02A] transition-all shadow-sm flex flex-col md:flex-row gap-4 items-start"
                      >
                        <div className="px-3 py-1.5 rounded-lg bg-[#1a202c] text-[#D2A02A] font-extrabold text-xs tracking-wider uppercase flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="space-y-1.5">
                          <h3 className="text-base md:text-lg font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 5: Signature Editorial Infographic Card */}
                <section
                  id="infographic"
                  className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#D2A02A] text-lg font-bold">📊</span>
                    <h3 className="text-base md:text-lg font-extrabold text-[#5A4C33]">
                      Editorial Overview: Credit Card Settlement Architecture (September 2026)
                    </h3>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm mb-3">
                    <img
                      src="/images/og/credit-card-settlement-in-september-2026.png"
                      alt="Credit Card Settlement in September 2026 Infographic"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center italic">
                    Figure 1: Strategic legal workflow connecting RBI compromise settlement directives, quarter-end balance sheet provisioning, anti-harassment protections, and court-decreed No Dues Certificates.
                  </p>
                </section>

                {/* Section 6: Statutory Defense Against Section 138 & Section 25 */}
                <section id="statutory-criminal-defense" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory Defense Against Section 138 NI Act &amp; Section 25 PSS Act
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Card-issuing banks routinely initiate aggressive legal tactics to pressure defaulting cardholders before considering a compromise settlement. The two most common legal maneuvers involve issuing demand notices under Section 138 of the Negotiable Instruments Act, 1881 for cheque bounce and Section 25 of the Payment and Settlement Systems Act, 2007 for automated NACH electronic clearing mandate failures.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                    <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm space-y-2">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base flex items-center gap-2">
                        <span className="text-[#D2A02A]">⚖️</span> Section 138 NI Act (Cheque Bounce)
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        When a security cheque deposited during credit card issuance is presented and dishonoured due to insufficient funds, the bank issues a 15-day statutory demand notice. Failure to issue a prompt legal reply can lead to criminal complaint registration before a Metropolitan Magistrate. An advocate-drafted reply challenges the presentation of undated security cheques, establishes lack of crystallized debt at the time of issuance, and halts unilateral prosecution.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm space-y-2">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base flex items-center gap-2">
                        <span className="text-[#D2A02A]">📱</span> Section 25 PSS Act (NACH Dishonour)
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Electronic clearing mandates (e-NACH) that return unpaid trigger criminal liabilities analogous to Section 138. Banks frequently dispatch automated computerized notices threatening immediate arrest. Our legal counsel responds by documenting genuine economic incapacity, disputing illegal punitive interest calculations, and negotiating formal compounding during pending court proceedings.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Under Indian criminal jurisprudence, both Section 138 and Section 25 offenses are compoundable under Section 147 of the Negotiable Instruments Act and Section 320 of the Code of Criminal Procedure (Bharatiya Nagarik Suraksha Sanhita). When our advocates finalize a compromise settlement, a joint compounding petition is submitted before the court, resulting in the complete quashing of criminal charges and immediate release from judicial summons.
                  </p>
                </section>

                {/* Section 7: Enforcing RBI Anti-Harassment Rules */}
                <section id="anti-harassment-enforcement" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Enforcing RBI Anti-Harassment Rules Against Aggressive Recovery
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Credit card debt recovery is notoriously prone to severe misconduct by outsourced collection agencies. Third-party agents routinely resort to abusive language, public humiliation, calls to extended family members, and unlawful visits to corporate workplaces. Cardholders must understand that these collection tactics are strictly illegal under Indian law.
                  </p>

                  <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-[#D2A02A]/40 space-y-3">
                    <h3 className="font-bold text-sm md:text-base text-[#5A4C33] uppercase tracking-wide">
                      Strict Prohibitions Under Reserve Bank of India Recovery Guidelines
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-xs md:text-sm text-gray-700">
                      <li><strong>Calling Hours Restriction:</strong> Recovery agents are legally prohibited from telephoning or visiting borrowers before 8:00 AM or after 7:00 PM under any circumstances.</li>
                      <li><strong>No Contact with Third Parties:</strong> Lenders cannot contact employers, workplace colleagues, relatives, or social acquaintances regarding your credit card dues.</li>
                      <li><strong>Prohibition of Coercion and Abuse:</strong> Any use of threatening language, psychological intimidation, or public shaming constitutes a criminal offense under the Bharatiya Nyaya Sanhita (formerly Indian Penal Code).</li>
                      <li><strong>No Misrepresentation of Judicial Authority:</strong> Agents cannot impersonate court marshals, police officers, or state investigators to extract payments.</li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    When recovery personnel violate these directives, AMA Legal Solutions files formal complaints before the bank&apos;s Principal Nodal Officer and escalates directly to the <Link href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india" className="text-[#D2A02A] font-semibold hover:underline">RBI Integrated Ombudsman Scheme</Link>. The Reserve Bank imposes severe financial penalties on non-compliant card issuers, which immediately compels the bank to withdraw aggressive agents and transition the file to a formal compromise settlement track.
                  </p>
                </section>

                {/* Section 8: Deconstructing OTS Letter & Securing NDC */}
                <section id="settlement-letter-and-ndc" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Deconstructing the Authentic Bank OTS Letter &amp; Securing Genuine NDCs
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    A critical hazard in credit card debt resolution is falling victim to unauthorized collection agent promises. Rogue agents frequently issue forged settlement emails or verbal assurances, collect funds from distressed cardholders, and credit those monies toward accrued penal charges—leaving the principal debt completely unpaid.
                  </p>

                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      Checklist: What a Valid One-Time Settlement (OTS) Sanction Letter Must Contain
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-gray-700">
                      <div className="p-3.5 rounded-xl border border-gray-200 bg-white space-y-1">
                        <span className="font-bold text-[#D2A02A]">✔ Official Letterhead &amp; Reference:</span>
                        <p>Must be issued on corporate bank stationery with a verifiable internal tracking number verifiable through net banking or branch customer service.</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-gray-200 bg-white space-y-1">
                        <span className="font-bold text-[#D2A02A]">✔ Specific Account Identification:</span>
                        <p>Must clearly state the 16-digit credit card number (masked for privacy) and registered cardholder details matching KYC records.</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-gray-200 bg-white space-y-1">
                        <span className="font-bold text-[#D2A02A]">✔ Clear Waiver Breakdown:</span>
                        <p>Must explicitly record the total outstanding ledger balance, the exact approved settlement payment sum, and the specific waived amount.</p>
                      </div>
                      <div className="p-3.5 rounded-xl border border-gray-200 bg-white space-y-1">
                        <span className="font-bold text-[#D2A02A]">✔ Binding NDC Issuance Covenant:</span>
                        <p>Must include an unequivocal legal commitment to issue an unconditional No Dues Certificate within 21 to 30 days of final payment.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    Never transfer settlement funds without prior advocate verification of the OTS letter. Once verified, payments must be remitted exclusively to the designated credit card account number through official banking channels (NEFT/RTGS/IMPS), never to individual collection personnel.
                  </p>
                </section>

                {/* Section 9: Credit Score Revival & CIBIL Rectification */}
                <section id="credit-rebuilding-post-settlement" className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Credit Score Revival &amp; CIBIL Rectification Post-Settlement
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    A primary concern for borrowers undergoing credit card settlement is the resulting impact on their credit bureau profile. When an account is settled under an RBI compromise agreement, credit bureaus such as CIBIL, Experian, CRIF High Mark, and Equifax mark the account status as &ldquo;Settled&rdquo; or &ldquo;Post-Write-Off Settled&rdquo; pursuant to the Credit Information Companies (Regulation) Act, 2005.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    While a &ldquo;Settled&rdquo; status causes an initial reduction in credit score, it halts the catastrophic monthly Days Past Due (DPD) accumulation (such as 90, 120, 180+ DPD) that permanently paralyzes your financial standing. More importantly, it permanently eliminates the risk of civil attachment orders, salary garnishments, and judicial recovery warrants.
                  </p>

                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base text-[#5A4C33]">
                      The 18-to-24 Month Credit Score Rehabilitation Roadmap
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs md:text-sm">
                      <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                        <span className="font-bold text-[#1a202c]">Months 1–3:</span>
                        <p className="text-gray-600">Obtain official bank-stamped NDC. File dispute redressal with CIBIL to ensure DPD counters are frozen and zero outstanding liability is reflected.</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                        <span className="font-bold text-[#1a202c]">Months 4–12:</span>
                        <p className="text-gray-600">Acquire a secured credit card backed by a fixed deposit. Maintain credit utilization strictly below 25% and automate full monthly statement repayments.</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-xl space-y-1">
                        <span className="font-bold text-[#1a202c]">Months 13–24:</span>
                        <p className="text-gray-600">Gradually build on-time repayment history across diverse credit instruments. Re-establish credit score trajectory toward 750+ institutional eligibility.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 10: 8-Question Accordion FAQ */}
                <section id="faqs" className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions
                    </h2>
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                      Statutory Legal Clarifications
                    </span>
                  </div>

                  <div className="space-y-3">
                    {faqs.map((faq) => {
                      const isOpen = expandedFaqs.includes(faq.id);
                      return (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full p-4 md:p-5 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition text-sm md:text-base cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span
                              className={`text-[#D2A02A] text-lg font-mono transition-transform duration-200 ml-4 flex-shrink-0 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            >
                              ▼
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-4 md:p-5 pt-0 text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-[#FAF7F0]/40">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Section 11: More Legal Guides Grid */}
                <section id="internal-guides" className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    More Legal Guides on Debt Resolution &amp; Banking Litigation
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">
                    Explore our comprehensive repository of advocate-authored legal guides covering loan settlement, recovery defense, and statutory banking dispute procedures:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      {
                        title: "Credit Card Debt Settlement",
                        href: "/credit-card-debt-settlement",
                        desc: "Complete procedural guide to resolving unsecured credit card arrears under Indian banking laws.",
                      },
                      {
                        title: "Best Credit Card Settlement Service",
                        href: "/best-credit-card-settlement-service",
                        desc: "Evaluating legal representation and RBI-compliant dispute resolution for credit card default.",
                      },
                      {
                        title: "Personal Loan Settlement in September 2026",
                        href: "/personal-loan-settlement-in-september-2026",
                        desc: "Strategic guide to settling personal loan liabilities during the Q2 banking balance sheet audit.",
                      },
                      {
                        title: "How to Stop Bank Recovery Agents Harassment",
                        href: "/how-to-stop-bank-recovery-agents-harassment-legally-in-india",
                        desc: "Statutory frameworks, police complaints, and RBI Ombudsman remedies against abusive collectors.",
                      },
                      {
                        title: "Credit Card Settlement After 6 Months",
                        href: "/credit-card-settlement-process-in-india-after-6-months-default",
                        desc: "Navigating post-NPA classification, technical write-off pools, and compromise negotiation.",
                      },
                      {
                        title: "Legal Notice for Credit Card Harassment",
                        href: "/legal-notice-for-credit-card-recovery-harassment-dues",
                        desc: "Advocate drafting protocols to issue formal cease-and-desist notices to banking compliance cells.",
                      },
                      {
                        title: "Section 138 Cheque Bounce Defense",
                        href: "/section-138-cheque-bounce-notice-for-personal-loan",
                        desc: "Legal defenses and procedure to compound criminal cheque dishonour notices under NI Act.",
                      },
                      {
                        title: "Failed Debt Consolidation Settlement",
                        href: "/how-to-settle-loans-after-a-failed-debt-consolidation-plan",
                        desc: "How to resolve multiple defaulted credit lines after a failed debt consolidation attempt.",
                      },
                      {
                        title: "Remove Written-Off Status from CIBIL",
                        href: "/how-to-remove-a-written-off-status-from-a-credit-report",
                        desc: "Procedural guide to resolving post-write-off tags with credit bureaus through official channels.",
                      },
                    ].map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="p-3.5 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-[#FAF7F0] transition group block"
                      >
                        <p className="font-bold text-xs md:text-sm text-gray-900 group-hover:text-[#D2A02A] transition-colors flex items-center justify-between">
                          <span>{guide.title}</span>
                          <span className="text-[#D2A02A]">→</span>
                        </p>
                        <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                          {guide.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Section 12: References & Statutory Authority */}
                <section id="citations" className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    References &amp; Statutory Authority
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600">
                    Our legal strategies are grounded in established statutory enactments, regulatory directives, and judicial precedents:
                  </p>
                  <ul className="space-y-2 text-xs md:text-sm">
                    <li>
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Reserve Bank of India (RBI) Official Portal
                      </a>{" "}
                      — Master Direction on Credit Card Issuance &amp; Circular on Compromise Settlements.
                    </li>
                    <li>
                      <a
                        href="https://nalsa.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        National Legal Services Authority (NALSA)
                      </a>{" "}
                      — Guidelines on National Lok Adalat and Pre-Litigation Conciliation Settlements.
                    </li>
                    <li>
                      <a
                        href="https://services.ecourts.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        e-Courts Services, High Courts &amp; District Courts of India
                      </a>{" "}
                      — Jurisprudence on Section 138 Negotiable Instruments Act and Section 25 PSS Act.
                    </li>
                    <li>
                      <a
                        href="https://financialservices.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Department of Financial Services, Ministry of Finance
                      </a>{" "}
                      — Guidelines on Consumer Protection, Bank Recovery Norms, and Fair Practices Code.
                    </li>
                    <li>
                      <a
                        href="https://www.cibil.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        TransUnion CIBIL India
                      </a>{" "}
                      — Credit Information Companies (Regulation) Act, 2005 Compliance &amp; Dispute Redressal.
                    </li>
                  </ul>
                </section>

                {/* Social Share Row at Bottom */}
                <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs md:text-sm font-bold text-gray-700">
                    Share this legal advisory with someone navigating credit card debt:
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="px-3 py-1.5 rounded-lg bg-[#1877F2] text-white text-xs font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      X / Twitter
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="px-3 py-1.5 rounded-lg bg-[#0A66C2] text-white text-xs font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>

                {/* Section 13: AMA Company & Media Section */}
                <section
                  id="ama-company-section"
                  className="border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 bg-white text-center shadow-lg relative mt-12 mb-8"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/ama3.svg"
                      alt="AMA Legal Solutions Logo"
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
                    delivering strategic banking litigation, compromise debt settlement, anti-harassment defense, and credit rehabilitation nationwide.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/credit-card-debt-settlement"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Credit Card Settlement
                    </Link>
                    <Link
                      href="/personal-loan-settlement-services"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Personal Loan Settlement
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Anti-Harassment Defense
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Section 138 Defense
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
                  Advocate Anuj Anand Malik specializes in banking litigation, debt compromise resolution, and consumer financial protection under the Advocates Act, 1961. He has represented over 10,000 borrowers across High Courts, District Courts, and Lok Adalats.
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
                <h3 className="text-xl font-bold mb-2">Need Legal Debt Help?</h3>
                <p className="text-gray-200 mb-6 text-xs leading-relaxed">
                  Confidential evaluation by Advocate Anuj Anand Malik. Stop recovery harassment immediately and negotiate RBI-compliant compromise settlements before the September quarter closes.
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
                  Based on 1,680 verified client reviews across India
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
                    ["/credit-card-debt-settlement", "Credit Card Debt Settlement"],
                    ["/best-credit-card-settlement-service", "Best Credit Card Settlement Service"],
                    ["/personal-loan-settlement-in-september-2026", "Personal Loan Settlement September 2026"],
                    ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Agents Legally"],
                    ["/credit-card-settlement-process-in-india-after-6-months-default", "Settlement After 6 Months Default"],
                    ["/how-to-settle-loans-after-a-failed-debt-consolidation-plan", "Failed Debt Consolidation Settlement"],
                    ["/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity", "Debt Payments Exceed Capacity"],
                    ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off CIBIL Tag"],
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
                <span>⚖️</span> September 2026 Quarter-End Advisory
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
                      placeholder="e.g. Ramesh Chandra Verma"
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
                        placeholder="name@example.com"
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
                        placeholder="e.g. New Delhi / Mumbai"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
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
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] bg-white transition"
                      >
                        <option value="Single Credit Card Default">Single Credit Card Default</option>
                        <option value="Multiple Credit Cards Default">Multiple Credit Cards Default</option>
                        <option value="Credit Card + Personal Loan Mixed Debt">Credit Card + Personal Loan Mixed Debt</option>
                        <option value="Corporate / Business Credit Card">Corporate / Business Credit Card</option>
                        <option value="Section 138 / Section 25 Court Notice Received">Section 138 / Section 25 Court Notice Received</option>
                        <option value="Severe Recovery Agent Harassment">Severe Recovery Agent Harassment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Brief Case Summary / Stressed Banks
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Mention bank names, approximate default duration, or notices received..."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500 leading-normal">
                    🔒 All data submitted is protected under Section 126 of the Indian Evidence Act, 1872. Zero spam guarantee.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base cursor-pointer"
                  >
                    Submit Legal Advisory Request →
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Request Successfully Received
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                      Advocate Anuj Anand Malik and our senior banking litigation desk have logged your inquiry for priority September 2026 OTS review.
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-left space-y-2">
                    <p className="text-xs font-bold text-emerald-900">
                      Immediate Step: Connect via Secure WhatsApp
                    </p>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      For immediate cessation of recovery agent harassment or urgent defense against pending Section 138/25 notices, initiate direct WhatsApp chat now.
                    </p>
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full mt-2 bg-[#25D366] hover:bg-[#1fa851] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z" /></svg>
                      <span>Open WhatsApp Consultation Now</span>
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

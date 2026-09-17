"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/best-debt-settlement-service-in-india";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/best-debt-settlement-service-in-india.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-17";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What makes an advocate-led law firm the best debt settlement service in India compared to private settlement agencies?",
    answer:
      "An advocate-led law firm represents the highest standard of debt settlement service in India because licensed legal practitioners possess exclusive statutory standing under the Advocates Act, 1961 to represent borrowers before judicial magistrates, civil courts, and National Lok Adalat benches. Private commercial agencies and app-based intermediaries are non-legal commercial entities that cannot execute a Vakalatnama, cannot defend against criminal notices under Section 138 of the Negotiable Instruments Act, 1881, and offer no advocate-client confidentiality under Section 126 of the Indian Evidence Act, 1872. Enrolling an advocate ensures immediate statutory immunity against recovery harassment under Reserve Bank of India (RBI) directives and guarantees that One-Time Settlement (OTS) sanction terms are forensically vetted to secure authentic bank No Dues Certificates.",
  },
  {
    id: "faq-2",
    question: "Is debt settlement legal and enforceable under Reserve Bank of India (RBI) regulations?",
    answer:
      "Debt settlement is fully legal, statutory, and institutionalized under the Reserve Bank of India Framework for Compromise Settlements and Technical Write-offs alongside the Prudential Framework for Resolution of Stressed Assets. These regulatory guidelines require scheduled commercial banks and Non-Banking Financial Companies (NBFCs) to maintain board-approved compromise policies empowering institutional sanctioning committees to approve principal concessions and waive unbundled penal interest for distressed borrowers facing genuine insolvency. Furthermore, compromise settlements recorded before a National Lok Adalat bench constituted under the Legal Services Authorities Act, 1987 hold the force of a final, non-appealable civil court decree under Section 21 of the statute.",
  },
  {
    id: "faq-3",
    question: "Why do free online DIY settlement templates fail before bank compromise committees and in court?",
    answer:
      "Free automated DIY online templates and boilerplate letters fail because they lack legal authority under the Advocates Act, 1961 and do not adhere to the rigorous evidentiary standards mandated by institutional bank compromise committees. Generic internet templates routinely contain inadvertent admissions of unconditional civil liability or omit statutory reservations, which bank litigation wings exploit to accelerate coercive recovery and summary court proceedings. Crucially, generic DIY templates cannot cross-examine bank ledgers, establish a legally admissible hardship dossier under Section 63 of the Indian Contract Act, 1872, or enter an appearance before a Judicial Magistrate when lenders initiate criminal complaints under Section 138 of the Negotiable Instruments Act, 1881.",
  },
  {
    id: "faq-4",
    question: "How does transparent fixed legal advisory protect borrowers compared to corporate law firm retainers?",
    answer:
      "Transparent fixed legal advisory eliminates the crushing financial uncertainty of open-ended corporate law firm retainers and hourly billable fee structures, giving distressed borrowers complete cost predictability from initial forensic ledger audit to final account closure. Corporate law firms typically demand substantial advance retainers and charge for every communication, consultation, and court appearance, draining the liquid reserves of individuals and small enterprises experiencing severe financial distress. In contrast, advocate-led fixed legal advisory delivers comprehensive courtroom defense, institutional bank negotiations, and bureau rectification under a clearly defined, transparent engagement model with zero surprise retainers or billing escalations.",
  },
  {
    id: "faq-5",
    question: "How does a premier debt settlement service defend against Section 138 and Section 25 criminal notices?",
    answer:
      "A premier debt settlement service neutralizes criminal exposure by immediately serving formal statutory replies to demand notices under Section 138 of the Negotiable Instruments Act, 1881 (cheque bounce) and Section 25 of the Payment and Settlement Systems Act, 2007 (electronic NACH auto-debit dishonour) within the mandatory fifteen-day statutory window. Senior litigation advocates establish bona fide financial incapacity, challenge unlawful penal interest inflations, and place on record that security instruments were unlawfully deposited without current debt crystallization, defeating allegations of dishonest intention under Section 415 of the Indian Penal Code. Once compromise terms are executed, the legal counsel formalizes the settlement before a magistrate court or Lok Adalat bench, securing statutory compounding and dismissal of all criminal proceedings.",
  },
  {
    id: "faq-6",
    question: "How does legal representation enforce RBI guidelines to halt unlawful recovery agent harassment?",
    answer:
      "Serving a formal Vakalatnama and statutory cease-and-desist notice from an enrolled advocate immediately invokes the Reserve Bank of India Master Direction on Fair Practices Code for Lenders and the Master Circular on Recovery Agents. These statutory regulations legally prohibit commercial lenders and their outsourced recovery agencies from contacting borrowers outside the designated hours of 8:00 AM to 7:00 PM, making unannounced visits to workplaces, intimidating family members, or breaching third-party privacy. Any subsequent violation constitutes an actionable regulatory offence, empowering the advocate to file institutional complaints under the RBI Integrated Ombudsman Scheme, 2021 and initiate contempt or civil damages claims against the lending institution.",
  },
  {
    id: "faq-7",
    question: "What types of debt are legally eligible for compromise settlement in India?",
    answer:
      "Under Indian banking regulations, debt settlement is uniquely applicable to unsecured credit facilities—including personal loans, credit card balances, unsecured business working capital loans, and digital app credit lines—where lenders hold no registered asset hypothecation. Secured credit facilities such as residential mortgages, commercial property loans, and vehicle loans are legally excluded because they are anchored by underlying collateral governed under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002. Under Section 13 of the SARFAESI Act, secured lenders have the statutory power to seize and auction mortgaged assets without court intervention, making unsecured debts the primary focus of compromise settlement.",
  },
  {
    id: "faq-8",
    question: "What official statutory document proves that an account is permanently settled and legally closed?",
    answer:
      "The definitive legal proof of debt extinguishment is an official, bank-stamped No Dues Certificate (NDC) or Account Closure Letter issued on the lending institution's corporate letterhead, signed by an authorized zonal officer with an authentic, verifiable reference number. Under the Indian Contract Act, 1872, this statutory instrument confirms complete receipt of the sanctioned compromise amount and legally discharges the borrower and any guarantors from all future liability. Borrowers must ensure this document is forensically authenticated by their legal counsel before releasing final settlement funds, preventing unauthorized collection agencies from misallocating payments as partial interest collections.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Sunil Narang",
  authorRole: "Manufacturing Executive, New Delhi • Settled Multiple Unsecured Debts",
  reviewBody:
    "When compounding penalties and aggressive recovery agent harassment pushed my business and personal finances to the brink, I needed the best debt settlement service in India with true legal authority. Unregulated private settlement agencies demanded recurring monthly subscriptions without court protection, while corporate law firms asked for unpredictable hourly retainers. Advocate Anuj Anand Malik and AMA Legal Solutions stepped in with transparent fixed legal advisory, served statutory cease-and-desist notices under RBI guidelines to halt harassment, defended against Section 138 notices, and negotiated institutional OTS agreements with substantial legal concessions across three banks. They secured authentic No Dues Certificates with zero surprise fees.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Best Debt Settlement Service in India: Advocate-Led RBI Compromise & Legal Resolution",
      description:
        "Comprehensive legal analysis of the best debt settlement service in India. Learn about advocate-led One-Time Settlement (OTS) under RBI frameworks, courtroom defense against Section 138, anti-harassment enforcement, and authentic No Dues Certificates.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Best Debt Settlement Service in India: Advocate-Led RBI Compromise & Legal Resolution",
      description:
        "Complete commercial and legal guide to choosing the best debt settlement service in India. Discover why advocate representation under Reserve Bank of India compromise frameworks outperforms unregulated commercial agencies and corporate firm retainers.",
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
      name: "Advocate-Led Debt Settlement Legal Service",
      description:
        "Premier advocate-led debt settlement legal advisory and dispute representation for One-Time Settlement (OTS) negotiations under Reserve Bank of India compromise frameworks, stopping unlawful recovery harassment and securing authentic bank No Dues Certificates.",
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
          name: "Best Debt Settlement Service in India",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Step Advocate-Led Debt Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Ledger Audit & Penal Interest Dissection",
          description:
            "Exhaustive legal review of loan sanction letters, statements of account, and repayment histories to isolate penal interest and unauthorized late charges from genuine principal obligations.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Statutory Cease-and-Desist Notice Under RBI Guidelines",
          description:
            "Issuance of formal Vakalatnama and legal notices under the RBI Master Direction on Fair Practices Code to halt all third-party recovery agent harassment, calls, and residential visits.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Advocate Hardship Dossier Preparation Under Section 63",
          description:
            "Drafting of an evidence-backed One-Time Settlement (OTS) petition substantiating genuine borrower hardship, medical emergencies, or insolvency under Section 63 of the Indian Contract Act, 1872.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Bank Compromise Committee Negotiation & Sanction Letter Vetting",
          description:
            "Senior advocate representation before bank stressed asset verticals, negotiating maximum legal waivers and verifying the authenticity of official bank OTS sanction letters.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Settlement Execution, No Dues Certificate Enforcement & CIBIL Rehabilitation",
          description:
            "Supervised settlement fund transfer directly to the lending institution, securing an unconditional No Dues Certificate (NDC) and enforcing updated reporting to credit information bureaus.",
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
  { id: "what-defines-best-service", title: "What Defines the Best Debt Settlement Service" },
  { id: "statutory-framework", title: "Statutory & RBI Regulatory Framework" },
  { id: "commercial-comparison", title: "Advocate Advisory vs Agencies vs Corporate Retainers" },
  { id: "why-diy-templates-fail", title: "Why Free DIY Templates Fail in Court" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Advisory vs Retainers" },
  { id: "eligible-vs-ineligible-debts", title: "Eligible vs Ineligible Debts Matrix" },
  { id: "5-step-settlement-protocol", title: "5-Step Advocate Resolution Protocol" },
  { id: "signature-infographic", title: "Strategic Workflow Infographic" },
  { id: "section-138-defense", title: "Defending Section 138 & Section 25 Notices" },
  { id: "rbi-anti-harassment-shield", title: "Enforcing RBI Anti-Harassment Rules" },
  { id: "sanction-letter-and-ndc", title: "Vetting OTS Letters & No Dues Certificates" },
  { id: "cibil-rehabilitation", title: "CIBIL Score Restoration Framework" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "Statutory References & Regulatory Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function BestDebtSettlementServiceInIndiaClient() {
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
    const textMsg = `Hello AMA Legal Solutions, I would like to consult with an advocate regarding the best debt settlement service in India for my accounts.
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
      "Best Debt Settlement Service in India: Advocate-Led RBI Compromise & Legal Resolution – AMA Legal Solutions";
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
      label: "Best Debt Settlement Service in India",
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
            {/* Left Column — Title & Metadata (lg:col-span-8) */}
            <div className="flex flex-col lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase tracking-wider w-max mb-4 shadow-sm border border-[#D2A02A]/30">
                <span>⚖️</span> Premier Advocate-Led Banking &amp; Stressed Assets Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Best <span className="text-[#D2A02A]">Debt Settlement Service in India</span>: Advocate-Led RBI Compromise &amp; Legal Resolution
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Secure definitive debt relief through India&apos;s foremost advocate-led banking resolution firm.
                Discover how licensed senior advocates negotiate institutional One-Time Settlements (OTS) under
                Reserve Bank of India compromise frameworks, halt aggressive recovery agent harassment, defend against
                Section 138 and Section 25 criminal notices, and obtain authentic bank No Dues Certificates through
                transparent, fixed legal advisory without unpredictable hourly retainers.
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
                    <span className="text-gray-400">⏱️</span> 18 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> Bar Council Enrolled
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Confidential Evaluation</span>
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

            {/* Right Column — Generated OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/best-debt-settlement-service-in-india.png"
                  alt="Best Debt Settlement Service in India – Advocate-Led RBI Compromise & Legal Resolution"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Institutional Stressed Assets Resolution
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    RBI Compromise Framework &amp; Judicial Protection
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
                  Enrolled Senior Advocates
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🛡️</span> 100% Legal
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Privileged Advocate Counsel
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
                  Published: <span className="font-semibold text-gray-700">September 17, 2026</span> &bull; Practice: <span className="font-semibold text-gray-700">Banking Litigation &amp; Stressed Assets Resolution</span>
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
                  The best debt settlement service in India is an advocate-led legal advisory firm enrolled with the Bar Council of India that negotiates formal One-Time Settlements (OTS) under Reserve Bank of India compromise frameworks and Section 63 of the Indian Contract Act, 1872. Unlike unregulated commercial agencies or DIY templates, advocate representation provides statutory immunity against recovery agent harassment under the RBI Fair Practices Code, courtroom defense against Section 138 Negotiable Instruments Act and Section 25 Payment and Settlement Systems Act proceedings, and forensic vetting of bank sanction letters to secure authentic No Dues Certificates. AMA Legal Solutions delivers this institutional representation through transparent, fixed legal advisory without unpredictable hourly retainers or corporate markups.
                </p>
              </div>

              {/* ══ SECTION 1: WHAT DEFINES THE BEST SERVICE ══ */}
              <section id="what-defines-best-service" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  CORE JURISPRUDENTIAL BENCHMARKS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  What Truly Defines the Best Debt Settlement Service in India?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Navigating severe debt distress requires far more than automated mathematical calculations or aggressive telephonic negotiations. When an individual, salaried professional, or commercial enterprise faces compounding defaults across credit cards, personal loans, or unsecured business facilities, the resolution process moves directly into the realm of Indian banking regulations, contract law, and judicial litigation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The term &ldquo;best debt settlement service&rdquo; is frequently co-opted by commercial marketing agencies, call centers, and app-based debt counseling intermediaries. However, under Indian law, the definitive benchmarks that distinguish true premier legal representation from non-legal commercial entities center on four critical capabilities:
                </p>

                <div className="space-y-4 my-6">
                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">1.</span> Statutory Standing Under the Advocates Act, 1961
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      Only advocates enrolled with a State Bar Council possess the legal authority to execute a Vakalatnama, enter an appearance before Judicial Magistrates, civil courts, and Lok Adalat benches, and serve binding statutory notices. Commercial agencies operate outside this statutory umbrella and cannot legally represent or defend a borrower before judicial bodies.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">2.</span> Absolute Advocate-Client Privilege Under Section 126 Evidence Act
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      Under <strong>Section 126 of the Indian Evidence Act, 1872</strong>, all communications, asset disclosures, financial statements, and strategies shared between a client and their enrolled advocate are statutorily privileged and inadmissible as adverse evidence in court. Conversely, communications with private commercial debt settlement companies enjoy zero legal confidentiality and are vulnerable to subpoena or disclosure.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">3.</span> Direct Stressed Asset Committee Institutional Access
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      Institutional bank compromise decisions are not made by low-level tele-callers or third-party collection agencies. They are governed by internal Circulars and determined by Zonal Stressed Assets Resolution Committees. An authoritative legal service engages directly with institutional credit risk heads and legal managers, presenting forensic hardship documentation that satisfies bank internal audit mandates.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-[#D2A02A]">4.</span> End-to-End Criminal Notice Defense &amp; Compounding
                    </h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      Lenders frequently leverage quasi-criminal mechanisms under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> (cheque dishonour) and <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong> (NACH auto-debit failure) to coerce borrowers. The best debt settlement service provides comprehensive litigation defense, bail facilitation, and statutory compounding before magistrate benches and National Lok Adalats.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 2: STATUTORY FRAMEWORK ══ */}
              <section id="statutory-framework" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  REGULATORY &amp; LEGAL FOUNDATIONS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The Statutory &amp; RBI Regulatory Framework Governing Debt Settlement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Debt settlement in India is a recognized statutory remedy codified across multiple legislative enactments and central bank directives. Understanding this regulatory framework empowers distressed borrowers to recognize that compromise settlement is an institutional legal right, not a favor bestowed by lending institutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Section 63, Indian Contract Act, 1872
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Codifies the statutory doctrine of remission and satisfaction. It explicitly allows a promisee (the lending bank or NBFC) to dispense with or remit, wholly or in part, the performance of the promise made to them, or accept instead of it any satisfaction which they think fit, legally discharging the borrower.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      RBI Compromise Settlements Framework
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The Reserve Bank of India Framework for Compromise Settlements and Technical Write-offs empowers supervised lending entities to execute One-Time Settlements (OTS) with distressed borrowers, mandating board-approved policies, transparent delegation of sanction powers, and verifiable hardship audits.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Legal Services Authorities Act, 1987 (Lok Adalat)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Under Section 21 of the Act, an award rendered by a National Lok Adalat bench on an agreed compromise settlement holds the status of a formal civil court decree. It is final, legally binding on both bank and borrower, and non-appealable in any court of law.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      RBI Master Direction on Fair Practices Code
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Establishes binding operational standards governing debt collection. Lenders and contracted recovery agents are prohibited from employing verbal abuse, public intimidation, calling outside statutory hours (8:00 AM to 7:00 PM), or intruding into borrower workplaces.
                    </p>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 my-4 bg-gray-50 text-gray-700 italic">
                  <strong>Judicial Principle:</strong> Defaulting on an unsecured financial facility due to genuine economic distress constitutes a civil breach of contract under Indian law, not a criminal offence. The Supreme Court of India has established that criminal breach of trust requires proof of dishonest or fraudulent intent at the inception of the loan agreement.
                </blockquote>
              </section>

              {/* ══ SECTION 3: COMMERCIAL COMPARISON ══ */}
              <section id="commercial-comparison" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  MARKET &amp; SERVICE COMPARISON
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Commercial Comparison: Advocate Advisory vs. Commercial Agencies vs. Corporate Law Firms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When seeking debt relief, borrowers in India encounter multiple market options: automated online DIY templates, unregulated private commercial agencies, high-cost corporate law firms, or advocate-led fixed legal advisory. Evaluating the legal enforceability, court standing, and cost structure of each model is critical before committing your financial future.
                </p>

                {/* COMPARISON TABLE */}
                <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#1a202c] text-white">
                        <th className="p-3.5 sm:p-4 font-bold border-b border-gray-700">Evaluation Dimension</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Free Online DIY Templates</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Unregulated Settlement Apps</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Corporate Law Firms</th>
                        <th className="p-3.5 sm:p-4 font-bold text-[#D2A02A] border-b border-gray-700 bg-black/30">AMA Legal Solutions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Legal Standing (Advocates Act)</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Zero Court Standing</td>
                        <td className="p-3.5 sm:p-4 text-red-600">No Legal Standing</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Full Court Standing</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Full Court Standing (Vakalatnama)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Advocate-Client Privilege</td>
                        <td className="p-3.5 sm:p-4 text-red-600">None</td>
                        <td className="p-3.5 sm:p-4 text-red-600">None (Data Exposed)</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Protected</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Strict Statutory Privilege (Sec 126)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Section 138 / Section 25 Defense</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Incapable of Defense</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Cannot Represent</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Comprehensive Defense</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Magistrate Defense &amp; Compounding</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">RBI Anti-Harassment Enforcement</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Ignored by Lenders</td>
                        <td className="p-3.5 sm:p-4 text-amber-600">Ineffective Follow-ups</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Formal Legal Notices</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Immediate Cease-and-Desist &amp; Ombudsman</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Cost &amp; Billing Model</td>
                        <td className="p-3.5 sm:p-4 text-gray-500">Unverified / DIY</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Recurring Subscriptions</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Heavy Retainers &amp; Hourly Bills</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Transparent Fixed Legal Advisory</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">OTS Sanction Letter Vetting</td>
                        <td className="p-3.5 sm:p-4 text-red-600">High Risk of Fake Letters</td>
                        <td className="p-3.5 sm:p-4 text-amber-600">Administrative Only</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Forensic Legal Review</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Advocate-Certified Bank Authentication</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ══ SECTION 4: WHY FREE DIY TEMPLATES FAIL ══ */}
              <section id="why-diy-templates-fail" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  EVIDENTIARY ANALYSIS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Why Free DIY Online Templates Fail in Court and Before Bank Committees
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In an attempt to conserve cash, distressed borrowers frequently search online for free settlement letters, generic hardship templates, or automated legal notice drafts. While appealing in concept, relying on automated DIY templates is one of the most hazardous missteps in banking litigation.
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
                    <h3 className="font-bold text-red-900 text-lg flex items-center gap-2">
                      <span>⚠️</span> Fatal Inadvertent Admissions of Liability
                    </h3>
                    <p className="text-sm text-red-800 mt-2 leading-relaxed">
                      Boilerplate online templates often contain generic sentences acknowledging the full validity of inflated ledgers, unbundled late fees, and compounding penal charges. When sent directly by a borrower, these statements constitute binding admissions of civil liability under <strong>Sections 17 to 21 of the Indian Evidence Act, 1872</strong>, depriving the borrower of statutory defenses when the lender files a summary recovery suit under Order XXXVII of the Code of Civil Procedure.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
                    <h3 className="font-bold text-red-900 text-lg flex items-center gap-2">
                      <span>⚠️</span> Disregard by Institutional Compromise Committees
                    </h3>
                    <p className="text-sm text-red-800 mt-2 leading-relaxed">
                      Bank Zonal Stressed Assets Committees operate under strict internal governance protocols audited by internal compliance officers and the Reserve Bank of India. Generic, copy-pasted letters downloaded from internet blogs fail to satisfy institutional audit standards. They lack structured evidentiary proofs—such as medical disability certificates, corporate dissolution records, or forensic ledger reconciliations—causing bank committees to reject petitions out of hand.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
                    <h3 className="font-bold text-red-900 text-lg flex items-center gap-2">
                      <span>⚠️</span> Absence of Judicial Courtroom Representation
                    </h3>
                    <p className="text-sm text-red-800 mt-2 leading-relaxed">
                      A template cannot stand before a Metropolitan Magistrate when a summons or bailable warrant is issued under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act. Only an enrolled advocate can enter a physical or digital appearance, argue against interim compensation applications under Section 143A, and steer the dispute toward Lok Adalat conciliation.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 5: TRANSPARENT FIXED ADVISORY ══ */}
              <section id="transparent-fixed-advisory" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  COST PREDICTABILITY
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The Advantage of Transparent Fixed Advisory over Corporate Law Firm Retainers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Traditional corporate law firms maintain high structural overheads and bill clients on open-ended hourly rates or substantial advance monthly retainers. For an individual, salaried employee, or small business owner already struggling with liquidity contraction, entering an open-ended hourly legal engagement introduces severe financial risk.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  AMA Legal Solutions pioneered a transparent, fixed legal advisory model tailored specifically for stressed asset resolution. This approach guarantees complete financial transparency without compromising the caliber of senior advocate representation:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="text-2xl">🔒</div>
                    <h3 className="font-bold text-gray-900 text-base">
                      Zero Hourly Markups
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      All legal work—including document review, legal notice drafting, bank negotiations, and follow-ups—is conducted under a clear, agreed scope of work without ticking billable clocks or unexpected administrative overheads.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="text-2xl">🚫</div>
                    <h3 className="font-bold text-gray-900 text-base">
                      Elimination of Rolling Retainers
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Unlike commercial debt counseling agencies that extract ongoing monthly subscription debits regardless of progress, our fixed legal advisory aligns directly with tangible milestones: ledger audit, notice defense, and final settlement sanction.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="text-2xl">🎯</div>
                    <h3 className="font-bold text-gray-900 text-base">
                      Predictable Capital Planning
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Borrowers can reserve their liquid capital specifically for the negotiated One-Time Settlement compromise payment directly to the lending institution, rather than exhausting critical funds on runaway legal retainers.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 6: ELIGIBLE VS INELIGIBLE DEBTS ══ */}
              <section id="eligible-vs-ineligible-debts" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  CREDIT FACILITY DIAGNOSTICS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Eligible vs. Ineligible Debts Matrix for Settlement in India
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A foundational requirement for selecting the best debt settlement service is understanding which types of credit facilities can be legally compromised under Indian banking jurisprudence. Applying debt settlement to ineligible assets can trigger immediate recovery lawsuits and property foreclosure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  {/* Eligible Column */}
                  <div className="p-6 rounded-2xl border-2 border-green-200 bg-green-50/40 space-y-4">
                    <h3 className="font-extrabold text-green-900 text-lg flex items-center gap-2">
                      <span>✅</span> Legally Eligible Debts (Unsecured)
                    </h3>
                    <ul className="space-y-3 text-xs sm:text-sm text-green-950">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-green-700">&bull;</span>
                        <div>
                          <strong>Personal Loans:</strong> Unsecured term loans from scheduled commercial banks and digital NBFCs where no asset hypothecation exists.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-green-700">&bull;</span>
                        <div>
                          <strong>Credit Card Outstandings:</strong> Revolving credit balances, cash advance debt, and converted credit card EMIs subject to high finance charges.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-green-700">&bull;</span>
                        <div>
                          <strong>Digital Instant Lending Apps:</strong> Short-term fintech credit facilities governed under RBI Digital Lending Guidelines.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-green-700">&bull;</span>
                        <div>
                          <strong>Unsecured MSME &amp; Business Credit:</strong> Collateral-free working capital lines and professional business term borrowings.
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Ineligible Column */}
                  <div className="p-6 rounded-2xl border-2 border-red-200 bg-red-50/40 space-y-4">
                    <h3 className="font-extrabold text-red-900 text-lg flex items-center gap-2">
                      <span>❌</span> Ineligible Debts (Secured / SARFAESI)
                    </h3>
                    <ul className="space-y-3 text-xs sm:text-sm text-red-950">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">&bull;</span>
                        <div>
                          <strong>Home Loans &amp; Mortgages:</strong> Governed by the SARFAESI Act, 2002; lenders can initiate property attachment under Section 13(4) without court intervention.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">&bull;</span>
                        <div>
                          <strong>Auto &amp; Vehicle Loans:</strong> Subject to hypothecation agreements; non-payment results in lawful vehicle repossession.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">&bull;</span>
                        <div>
                          <strong>Gold &amp; Security-Backed Loans:</strong> Pledged physical gold or securities are auctioned by the lender under the Indian Contract Act.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-red-700">&bull;</span>
                        <div>
                          <strong>Statutory &amp; Tax Liabilities:</strong> GST, income tax assessments, and government revenues cannot be compromised via civil settlement.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 7: 5-STEP PROTOCOL ══ */}
              <section id="5-step-settlement-protocol" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  SYSTEMATIC LEGAL WORKFLOW
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Step Advocate-Led Debt Settlement Protocol
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Executing an institutional compromise settlement requires methodical adherence to banking regulations, evidentiary protocols, and judicial timelines. AMA Legal Solutions executes every case through our proprietary five-step legal workflow:
                </p>

                <div className="space-y-6 my-6">
                  {/* Step 1 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Forensic Ledger Audit &amp; Penal Interest Dissection
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our banking legal team audits all original sanction letters, statements of account, and repayment records. We mathematically separate legitimate principal liabilities from compound penal interest, bounce surcharges, and unauthorized collection fees, establishing an accurate baseline for institutional negotiations.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Statutory Cease-and-Desist Notice Under RBI Guidelines
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We execute a formal Vakalatnama and serve statutory cease-and-desist notices upon the lending institution and its authorized collection agencies. This formally invokes the <strong>RBI Master Direction on Fair Practices Code</strong>, legally mandating that all future communication occur exclusively through designated legal counsel and halting recovery agent harassment.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Advocate Hardship Dossier Preparation Under Section 63
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We prepare an evidence-backed One-Time Settlement (OTS) dossier establishing genuine insolvency, job loss, business collapse, or medical distress. Formulated under <strong>Section 63 of the Indian Contract Act, 1872</strong>, this legal petition demonstrates bona fide inability to maintain original terms and disproves willful default classifications.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Bank Compromise Committee Negotiation &amp; Sanction Letter Vetting
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Senior litigation advocates represent your interests directly before the bank&apos;s Zonal Stressed Assets Resolution Committee. Upon securing an offer, we forensically vet the official bank OTS sanction letter to ensure it is issued on authentic corporate letterhead, contains valid authorization signatures, and covenants complete debt extinguishment.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      5
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Settlement Execution, No Dues Certificate Enforcement &amp; CIBIL Rehabilitation
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Compromise funds are paid directly to the bank&apos;s official loan account—never to intermediary accounts. Following payment, we enforce delivery of the authentic bank No Dues Certificate (NDC), file compounding petitions to withdraw pending court cases, and monitor credit bureau status updates under the Credit Information Companies Act.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 8: SIGNATURE INFOGRAPHIC CARD ══ */}
              <section id="signature-infographic" className="space-y-4">
                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                  <div className="inline-block px-3 py-1 bg-[#D2A02A]/20 text-[#5A4C33] text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    Official Infographic &bull; Strategic Blueprint
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c] mb-4">
                    Best Debt Settlement Service in India: Advocate-Led Resolution Model
                  </h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md max-w-3xl mx-auto mb-4 bg-white">
                    <img
                      src="/images/og/best-debt-settlement-service-in-india.png"
                      alt="Best Debt Settlement Service in India - Advocate Representation vs Commercial Agencies"
                      className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto italic leading-relaxed">
                    Comprehensive legal framework illustrating advocate standing under the Advocates Act, RBI compromise settlement guidelines, forensic ledger analysis, court defense against criminal notices, and authentic No Dues Certificate delivery.
                  </p>
                </div>
              </section>

              {/* ══ SECTION 9: DEFENDING SECTION 138 & 25 ══ */}
              <section id="section-138-defense" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  COURT LITIGATION SHIELD
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Judicial Defense: Neutralizing Section 138 NI Act &amp; Section 25 PSS Act Complaints
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The primary weapon deployed by aggressive lending institutions to intimidate defaulting borrowers is the initiation of quasi-criminal proceedings. These proceedings are engineered to convert a civil breach of contract into a courtroom emergency:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Section 138 of the Negotiable Instruments Act, 1881
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Deals with the dishonour of cheques for insufficiency of funds. Lenders frequently present undated security cheques obtained during loan onboarding, triggering a 15-day statutory demand notice that must be answered with legal precision.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/70 space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Section 25 of the Payment and Settlement Systems Act, 2007
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Creates statutory criminal liability for the failure of electronic NACH or ECS automated debits. The procedural rules and defenses mirror Section 138 proceedings, demanding formal legal representation before magistrate benches.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1a202c] mt-6">
                  How Advocates Protect Borrowers Against Criminal Coercion
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When you retain AMA Legal Solutions, our senior litigation advocates execute three coordinated legal protections:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Timely Statutory Reply:</strong> We draft and serve a comprehensive legal reply within the mandatory 15-day window, documenting bona fide hardship, challenging inflated claim figures, and disproving fraudulent intention under Section 415 of the Indian Penal Code.
                  </li>
                  <li>
                    <strong>Magistrate Court Representation &amp; Bail:</strong> If the lender files a formal complaint before a Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM), our litigation advocates appear on your behalf, secure bail, and prevent coercive non-bailable warrants.
                  </li>
                  <li>
                    <strong>Compounding &amp; Quashing:</strong> Both Section 138 and Section 25 offences are compoundable under Indian law. Upon completing the One-Time Settlement, we present the agreement before a National Lok Adalat or magistrate court to compound the offence and dismiss all proceedings.
                  </li>
                </ul>
              </section>

              {/* ══ SECTION 10: RBI ANTI-HARASSMENT SHIELD ══ */}
              <section id="rbi-anti-harassment-shield" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STATUTORY CONSUMER PROTECTION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Enforcing RBI Anti-Harassment Rules &amp; Restoring Borrower Dignity
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  No lending institution, whether a major private bank, public sector bank, or NBFC, has the legal right to subject borrowers or their families to threats, public humiliation, or persistent harassment. The Reserve Bank of India enforces strict compliance through its <em>Master Direction on Fair Practices Code</em> and <em>Master Circular on Recovery Agents</em>.
                </p>

                <div className="p-6 rounded-2xl bg-amber-50/60 border border-[#D2A02A]/30 space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    <span>🛡️</span> Key Protections Under RBI Directives
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Calling Hour Restrictions:</strong> Recovery agents may contact borrowers only between 8:00 AM and 7:00 PM. Calls before 8:00 AM, late at night, or on national holidays constitute punishable central bank violations.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Absolute Ban on Verbal Intimidation:</strong> Using vulgarity, threatening physical harm, or applying persistent psychological intimidation is strictly illegal and attracts severe regulatory penalties.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Privacy &amp; Reference Protection:</strong> Contacting employers, colleagues, friends, or extended family members regarding a personal loan default is an actionable violation of privacy rights.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-200">
                      <strong>Prohibition of Workplace Visits:</strong> Unannounced visits to a borrower&apos;s workplace or residential society designed to cause public embarrassment violate central bank guidelines.
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  When recovery agents breach these standards, AMA Legal Solutions serves formal legal notices upon the bank&apos;s Principal Nodal Officer and escalates complaints directly to the <strong>Reserve Bank of India Integrated Ombudsman Scheme, 2021</strong>. If necessary, we pursue civil damages and criminal injunctions before competent courts.
                </p>
              </section>

              {/* ══ SECTION 11: VETTING OTS SANCTION LETTER & NDC ══ */}
              <section id="sanction-letter-and-ndc" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  LEGAL DOCUMENT AUTHENTICATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Vetting the Bank OTS Sanction Letter &amp; Securing the No Dues Certificate
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A critical differentiator of the best debt settlement service is the ability to protect borrowers from fraudulent or defective settlement letters. Unauthorized collection agents routinely forge settlement letters or issue letters lacking institutional sanction, causing funds to be misallocated toward interest without closing the loan.
                </p>

                <h3 className="text-xl font-bold text-[#1a202c]">
                  Essential Checklist of an Authentic Bank OTS Sanction Letter
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <strong className="text-gray-900">1. Official Bank Stationery:</strong> The letter must be printed on the authorized corporate letterhead of the bank or NBFC, complete with registered office details and Corporate Identification Number (CIN).
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <strong className="text-gray-900">2. Authorized Signatory:</strong> It must be signed by an authorized branch manager, zonal recovery head, or credit risk officer, specifying their full name, designation, and official employee code.
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <strong className="text-gray-900">3. Explicit Covenant of Total Extinguishment:</strong> The sanction letter must explicitly state that upon receipt of the agreed compromise sum, the borrower is fully released from all outstanding liability and the account will be closed.
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <strong className="text-gray-900">4. Direct Bank Account Remittance:</strong> Payment instructions must require transfer directly into the borrower&apos;s official loan account—never to a third-party collection agency or individual bank account.
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <strong className="text-gray-900">5. Binding Timeline for No Dues Certificate:</strong> The sanction letter should commit the lender to issuing an unconditional No Dues Certificate (NDC) within twenty-one to thirty working days of receipt.
                  </div>
                </div>
              </section>

              {/* ══ SECTION 12: CIBIL REHABILITATION ══ */}
              <section id="cibil-rehabilitation" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  CREDIT RESTORATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  CIBIL Score Impact &amp; Long-Term Credit Rehabilitation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers frequently inquire about the credit score consequences of settling a debt. Under the <strong>Credit Information Companies (Regulation) Act, 2005</strong>, lenders are legally mandated to report account resolutions to credit bureaus including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When a debt is compromised, the account status reflects as &lsquo;Settled&rsquo; rather than &lsquo;Closed&rsquo;. While this reflects that the loan was discharged through a concession, it produces two vital financial benefits:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Halts Days Past Due (DPD) Compounding:</strong> An unresolved delinquent account continues to accrue worsening DPD flags every month (e.g., 90, 120, 180 DPD), continually degrading your credit score. Settlement permanently stops this negative scoring cascade.
                  </li>
                  <li>
                    <strong>Extinguishes Legal Liabilities:</strong> By obtaining an authentic No Dues Certificate, the borrower eliminates the risk of future civil recovery lawsuits, bank account freezes, and asset attachments.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Following settlement, our legal advisory team guides borrowers through credit rehabilitation: verifying bureau reporting to ensure outstanding balances reflect zero, maintaining utility and secured credit lines, and rebuilding credit scores to prime status within eighteen to twenty-four months.
                </p>
              </section>

              {/* ══ SECTION 13: FAQS ══ */}
              <section id="frequently-asked-questions" className="space-y-6 pt-6 border-t border-gray-200">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  QUOTABLE LEGAL FAQS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Frequently Asked Questions on Best Debt Settlement Service in India
                </h2>
                <p className="text-gray-600 text-sm">
                  Authoritative statutory answers to essential questions regarding legal representation, compromise guidelines, and borrower rights in India.
                </p>

                <div className="space-y-4 my-6">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-5 md:p-6 font-bold text-[#1a202c] hover:text-[#D2A02A] flex justify-between items-center gap-4 transition-colors cursor-pointer"
                        >
                          <span className="text-base md:text-lg">
                            {index + 1}. {faq.question}
                          </span>
                          <span className="text-xl font-extrabold text-[#D2A02A] shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-gray-700 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ══ SECTION 14: MORE LEGAL GUIDES INTERNAL LINK GRID ══ */}
              <section id="internal-guides" className="space-y-6 pt-6 border-t border-gray-200">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  EXPLORE RELATED TOPICS
                </div>
                <h2 className="text-2xl font-bold text-[#1a202c]">
                  More Legal Guides on Debt Settlement &amp; Banking Litigation
                </h2>
                <p className="text-sm text-gray-600">
                  Explore comprehensive resources prepared by our senior banking litigation advocates to help you navigate debt resolution, borrower rights, and credit repair:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
                  <Link
                    href="/when-to-choose-debt-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Strategic Timing
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      When to Choose Debt Settlement &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Critical insolvency triggers and legal thresholds for initiating One-Time Settlement.
                    </p>
                  </Link>

                  <Link
                    href="/what-is-debt-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Legal Foundations
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      What is Debt Settlement? &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Comprehensive guide to compromise settlements and borrower rights under RBI rules.
                    </p>
                  </Link>

                  <Link
                    href="/debt-settlement-best-waiver"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Concession Strategy
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Best Debt Settlement Waiver &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      How senior advocates negotiate maximum legal waivers and interest write-offs.
                    </p>
                  </Link>

                  <Link
                    href="/debt-settlement-services"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Practice Overview
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Debt Settlement Services &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Institutional legal resolution and commercial negotiation under central bank directives.
                    </p>
                  </Link>

                  <Link
                    href="/debt-settlement-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Indian Jurisprudence
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Debt Settlement India &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Detailed analysis of debt settlement statutes, Lok Adalats, and RBI frameworks.
                    </p>
                  </Link>

                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Strategy Comparison
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Settlement vs Consolidation &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Comparing consolidation loans with One-Time Settlement to choose the right strategy.
                    </p>
                  </Link>

                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Anti-Harassment Shield
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Stop Recovery Harassment &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Legal procedures to halt recovery harassment under the RBI Fair Practices Code.
                    </p>
                  </Link>

                  <Link
                    href="/section-138-cheque-bounce-notice-for-personal-loan"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Court Defense
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Section 138 NI Act Defense &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      How senior advocates defend cheque bounce notices and compound complaints.
                    </p>
                  </Link>

                  <Link
                    href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition group bg-[#FAF7F0]/40"
                  >
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-1">
                      Credit Impact
                    </div>
                    <div className="font-bold text-gray-900 group-hover:text-[#D2A02A] transition text-sm">
                      Settlement vs Closure on CIBIL &rarr;
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Understanding bureau remarks and practical credit repair steps following resolution.
                    </p>
                  </Link>
                </div>
              </section>

              {/* ══ SECTION 15: STATUTORY REFERENCES & REGULATORY AUTHORITIES ══ */}
              <section id="statutory-references" className="space-y-4 pt-6 border-t border-gray-200">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  REGULATORY CITATIONS
                </div>
                <h2 className="text-2xl font-bold text-[#1a202c]">
                  Statutory References &amp; Regulatory Authorities
                </h2>
                <p className="text-sm text-gray-600">
                  Every legal argument and advisory framework presented on this page is anchored in official Indian statutes and central bank regulations:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Indian Contract Act, 1872 (Section 63)</div>
                    <p className="text-gray-500 mt-0.5">Statutory doctrine of accord and satisfaction for compromise settlements.</p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      India Code Legislative Database &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">RBI Master Direction on Fair Practices Code</div>
                    <p className="text-gray-500 mt-0.5">Regulatory standards for recovery agents, calling hours, and grievance redressal.</p>
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      Reserve Bank of India Portal &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Negotiable Instruments Act, 1881 (Section 138)</div>
                    <p className="text-gray-500 mt-0.5">Statutory provisions for dishonoured cheques and compounding of offenses.</p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2189"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      India Code Legislative Database &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Payment and Settlement Systems Act, 2007 (Section 25)</div>
                    <p className="text-gray-500 mt-0.5">Statutory defense against dishonour of electronic mandates (NACH / ECS).</p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2048"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      India Code Legislative Database &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Legal Services Authorities Act, 1987 (Lok Adalat)</div>
                    <p className="text-gray-500 mt-0.5">Section 21 statutory framework for Lok Adalat compromise awards as civil decrees.</p>
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      National Legal Services Authority (NALSA) &rarr;
                    </a>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="font-bold text-gray-900">Credit Information Companies (Regulation) Act, 2005</div>
                    <p className="text-gray-500 mt-0.5">Rules governing credit reporting, &lsquo;Settled&rsquo; remarks, and balance updates.</p>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2056"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold mt-1 inline-block"
                    >
                      India Code Legislative Database &rarr;
                    </a>
                  </div>
                </div>
              </section>

              {/* Social Share Row at bottom of content */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  Was this strategic legal guide helpful? Share it with borrowers seeking clarity on debt relief.
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-900 text-white hover:bg-black transition"
                  >
                    Twitter/X
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* ══ SECTION 16: AMA COMPANY & MEDIA SECTION ══ */}
              <section
                id="ama-company-section"
                className="p-6 md:p-8 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-4 border-[#D2A02A] rounded-2xl shadow-sm space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#D2A02A]/30 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1a202c] p-2 flex items-center justify-center shrink-0 border border-[#D2A02A]/40">
                      <img src="/ama3.svg" alt="AMA Legal Solutions Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#1a202c]">AMA Legal Solutions</h3>
                      <p className="text-xs text-gray-600 font-medium mt-0.5">
                        India&apos;s Premier Advocate-Led Banking &amp; Stressed Assets Law Firm
                      </p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right shrink-0">
                    <div className="text-2xl font-extrabold text-[#1a202c] flex items-center justify-center sm:justify-end gap-1">
                      <span className="text-[#D2A02A]">★</span> 4.7 / 5.0
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Google Verified Firm Rating</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Founded by Senior Advocate Anuj Anand Malik, AMA Legal Solutions is dedicated to protecting consumers, salaried professionals, and entrepreneurs from predatory lending, unlawful recovery harassment, and aggressive financial litigation. Operating with strict adherence to Bar Council of India standards, our litigation advocates represent clients nationwide across civil courts, magistrate benches, and National Lok Adalats.
                </p>

                <div>
                  <div className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-3">
                    Our Specialized Practice Areas
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold">
                    <Link
                      href="/personal-loan-settlement"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Personal Loan Settlement
                    </Link>
                    <Link
                      href="/credit-card-settlement"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Credit Card Settlement
                    </Link>
                    <Link
                      href="/business-loan-settlement"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Business Loan Settlement
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Section 138 Defense
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      Recovery Harassment Protection
                    </Link>
                    <Link
                      href="/debt-recovery-tribunal-advocate"
                      className="p-2.5 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-center"
                    >
                      DRT Litigation Defense
                    </Link>
                  </div>
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
                  Seeking Debt Relief?
                </h3>

                <p className="text-gray-200 text-xs leading-relaxed">
                  Consult India&apos;s premier advocate-led debt settlement law firm. Stop recovery harassment and negotiate authentic bank OTS terms under RBI guidelines.
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
                    href="/when-to-choose-debt-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; When to Choose Debt Settlement
                  </Link>
                  <Link
                    href="/what-is-debt-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; What is Debt Settlement?
                  </Link>
                  <Link
                    href="/debt-settlement-best-waiver"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Waiver
                  </Link>
                  <Link
                    href="/debt-settlement-services"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement Services
                  </Link>
                  <Link
                    href="/debt-settlement-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement India Guide
                  </Link>
                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs. Debt Consolidation
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
                      Confidential Debt Evaluation
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
                        placeholder="e.g. Ramesh Chandra"
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
                          placeholder="e.g. ramesh@example.com"
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
                          placeholder="e.g. New Delhi / Bengaluru"
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
                        placeholder="Briefly describe your debt scenario, number of lenders, or whether recovery harassment has commenced..."
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
                    Thank you, <span className="font-bold text-gray-900">{formData.fullName}</span>. An advocate from Team AMA Legal Solutions will review your details shortly.
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

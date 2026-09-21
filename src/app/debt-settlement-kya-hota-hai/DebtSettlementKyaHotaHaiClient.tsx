"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/debt-settlement-kya-hota-hai";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/debt-settlement-kya-hota-hai.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-17";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Debt settlement kya hota hai aur iska statutory legal process kya hai?",
    answer:
      "Debt settlement ek kanooni compromise samjhauta hai jo Section 63 of the Indian Contract Act, 1872 aur Reserve Bank of India (RBI) Prudential Framework for Resolution of Stressed Assets ke tahat execute kiya jata hai, jismein bank ya NBFC karzdar ki genuine financial incapacity ko dekhte hue ek discounted lump-sum payment par poora loan extinguish karne ke liye taiyar hota hai. Advocate dwara lead ki gayi is negotiation process mein lender dwara formal One-Time Settlement (OTS) sanction letter issue kiya jata hai jo borrower ko sabhi recovery litigation aur collection action se mukti deta hai. Compromise payment sidhe lender ke loan account mein transfer hone ke baad bank official No Dues Certificate (NDC) issue karta hai jo account ko permanently legally close karta hai.",
  },
  {
    id: "faq-2",
    question: "Kya debt settlement Reserve Bank of India (RBI) ke niyamanooshar poori tarah kanoonan vaidh hai?",
    answer:
      "Haan, debt settlement poori tarah statutory aur legal hai jise Reserve Bank of India (RBI) ke Master Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) aur Master Direction on Fair Practices Code ke antargat manzoori prapt hai. Ye regulatory guidelines har commercial bank aur regulated NBFC ko mandatory board-approved settlement policy banane ka nirdesh deti hain jisse genuine default cases mein principal waivers aur penal interest remission sanction kiya ja sake. Iske atirikt, National Lok Adalat bench dwara pass kiya gaya settlement award Legal Services Authorities Act, 1987 ke Section 21 ke antargat ek final aur non-appealable civil court decree ka darja rakhta hai.",
  },
  {
    id: "faq-3",
    question: "Free online DIY settlement templates bank committees aur court ke samne kyu reject ho jaate hain?",
    answer:
      "Free automated DIY online templates aur generic download kiye gaye format letters ko bank ke zonal compromise committees aur recovery legal cells turant dismiss kar dete hain kyunki unki Advocates Act, 1961 ke tahat koi statutory standing nahi hoti. Generic templates karzdar ki genuine financial hardship ka documentary evidence pesh karne mein asamarth hote hain aur unmein inadvertent admission of liability hone ka khatra hota hai jo Section 18 of the Limitation Act, 1963 ke antargat bank ke recovery claim ko naya jeevandaan de sakta hai. Iske alawa, online templates Judicial Magistrate ke samne Section 138 Negotiable Instruments Act ya Section 25 Payment and Settlement Systems Act ke criminal summons mein borrower ko physically represent ya defend nahi kar sakte.",
  },
  {
    id: "faq-4",
    question: "Corporate law firms ke open-ended retainers ke mukable transparent fixed legal advisory kyu labhdayak hai?",
    answer:
      "Corporate law firms aamtaur par multi-tier corporate hourly rates aur recurring monthly retainers par kaam karti hain jo ek stressed borrower ke liye unpredictable financial burden khada kar deti hain. Iske viprit, transparent fixed legal advisory karzdar ko case audit se lekar final No Dues Certificate issuance tak bina kisi hourly markups ya surprise retainers ke structured legal support deti hai. Licensed banking advocates se formal legal representation lene se Section 126 of the Indian Evidence Act, 1872 ke tahat advocate-client privilege milta hai jo karzdar ki confidential personal financial position ko legally protect karta hai.",
  },
  {
    id: "faq-5",
    question: "Kya debt settlement ke dauran bank Section 138 cheque bounce ya Section 25 NACH case file kar sakta hai?",
    answer:
      "Haan, banks aur NBFCs psychological pressure banane ke liye dishonoured cheques par Section 138 of the Negotiable Instruments Act, 1881 aur failed automated debits par Section 25 of the Payment and Settlement Systems Act, 2007 ke tahat quasi-criminal proceedings shuru kar sakte hain. Jab ek enrolled advocate borrower ki taraf se appearance enter karke formal legal reply file karta hai, toh bona fide financial inability establish karke fraudulent intention ke allegations ko disprove kiya jata hai. Ek baar One-Time Settlement (OTS) agree hokar payment ho jati hai, toh Section 147 of the Negotiable Instruments Act ke antargat magistrate court mein joint compounding application lagakar sabhi criminal complaints ko dismiss aur quash karwa diya jata hai.",
  },
  {
    id: "faq-6",
    question: "Advocate ke zariye legal notice bhejne par recovery agents ki harassment kaise band hoti hai?",
    answer:
      "Advocate dwara official Vakalatnama ke sath statutory Cease-and-Desist Legal Notice issue hote hi Reserve Bank of India (RBI) Directives on Recovery Agents and Fair Practices Code active ho jate hain jiske baad bank ko third-party recovery agents ko case se hatana padta hai. RBI guidelines ke mutabik subah 8:00 baje se pehle aur shaam 7:00 baje ke baad call karna, karzdar ke relatives ya employer ko contact karna, aur bina permission residential visits karna kanooni jurm hai. Yadi koi agency in rules ka violation karti hai, toh advocate dwara RBI Integrated Ombudsman Scheme, 2021 ke tahat regulatory action aur police authorities ke samne criminal intimidation ki complaint darj karwai ja sakti hai.",
  },
  {
    id: "faq-7",
    question: "Debt settlement aur loan write-off mein kya kanooni farq hota hai aur CIBIL par kya asar hota hai?",
    answer:
      "Credit Information Companies (Regulation) Act, 2005 ke antargat debt settlement ek mutual bilateral agreement hota hai jismein agreed compromise amount pay karne ke baad account status 'Settled' ho jata hai aur borrower ki poori legal liability terminate ho jati hai. Iske viprit, loan write-off bank dwara balance sheet clean karne ke liye kiya gaya ek unilateral internal accounting action hota hai jismein bank legal recovery aur property attachment ke rights ko retain rakhta hai. Halanki settlement ke baad credit score mein temporary dip aata hai, parantu compounding Days Past Due (DPD) aur legal notices ka cycle hamesha ke liye band ho jata hai aur karzdar 12 se 24 mahino mein secured financial products ke zariye credit score ko 750+ tak rehabilitate kar sakta hai.",
  },
  {
    id: "faq-8",
    question: "Debt settlement poora hone ke baad kaun sa official document prove karta hai ki loan hamesha ke liye band ho gaya hai?",
    answer:
      "Debt settlement permanently execute hone ka statutory aur conclusive saboot lending institution ke official letterhead par authorized officer dwara sign aur stamp kiya gaya No Dues Certificate (NDC) ya Closure Letter hota hai jismein verified reference number aur account details darj hoti hain. Ye document Section 63 of the Indian Contract Act ke tahat borrower aur kisi bhi guarantor ko future claims se permanently release karta hai aur bank ko credit bureaus ko zero outstanding notify karne ke liye legally bind karta hai. Karzdaron ko advocate se authenticate karwaye bina kisi collection agent ke verbal assurance ya plain email communication par vishwas nahi karna chahiye.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Praveen Sharma",
  authorRole: "Small Enterprise Director, New Delhi • Settled Multiple Unsecured Debts",
  reviewBody:
    "Facing unmanageable debt across multiple credit cards and personal loans after a supply chain disruption left me overwhelmed with constant recovery calls and Section 138 notices. Corporate law firms demanded exorbitant open-ended retainers, while free online DIY templates were immediately rejected by bank recovery managers. Advocate Anuj Anand Malik and AMA Legal Solutions provided transparent fixed legal advisory without hidden costs or hourly markups. They stepped in to defend me before the bank's compromise committee, issued statutory cease-and-desist notices to stop recovery agent harassment, and negotiated RBI-compliant OTS agreements with comprehensive waivers. They secured authentic bank-sealed No Dues Certificates from all lenders without surprise retainers.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Debt Settlement Kya Hota Hai? Legal Process, RBI OTS Rules & Advocate Advisory",
      description:
        "Comprehensive legal and commercial guide explaining what debt settlement is in India under Reserve Bank of India compromise frameworks. Learn statutory rights, Section 138 defense, advocate negotiation, and No Dues Certificates.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Debt Settlement Kya Hota Hai? Legal Process, RBI OTS Rules & Advocate Advisory",
      description:
        "Complete legal guide explaining what debt settlement is in India under RBI compromise directives. Understand how advocate-led OTS negotiations extinguish debt liabilities, halt recovery harassment, defeat Section 138 notices, and deliver authentic bank No Dues Certificates.",
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
        "Specialized legal advisory and dispute representation for One-Time Settlement (OTS) negotiations under Reserve Bank of India compromise frameworks, stopping unlawful harassment and securing bank No Dues Certificates.",
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
          name: "Debt Settlement Kya Hota Hai",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Step Statutory Debt Settlement Protocol",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Ledger Audit & Penal Interest Dissection",
          description:
            "Exhaustive legal review of loan sanction letters, compounding schedules, and bank account ledgers to separate unauthorized penal levies from genuine principal liabilities.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Statutory Cease-and-Desist Notice Under RBI Guidelines",
          description:
            "Formal service of advocate Vakalatnama and legal notices invoking RBI Fair Practices Code to stop recovery agent calls, residential visits, and third-party communications.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Advocate Hardship Dossier Compilation & Lok Adalat Submission",
          description:
            "Substantiation of bona fide borrower insolvency, medical crisis, or business disruption under Section 63 of the Indian Contract Act presented before bank compromise verticals.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Bank Compromise Committee Negotiation & OTS Letter Vetting",
          description:
            "Advocate-led negotiation before bank asset recovery committees to secure institutional waivers and forensic authentication of the formal bank OTS sanction letter.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Settlement Remittance, No Dues Certificate Enforcement & CIBIL Rectification",
          description:
            "Controlled remittance of compromise funds directly to the bank loan account, securing an irrevocable No Dues Certificate and enforcing updated reporting across credit bureaus.",
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
  { id: "quick-answer", title: "Quick Answer: Debt Settlement Kya Hota Hai?" },
  { id: "statutory-definition-and-framework", title: "Legal Meaning & RBI Statutory Framework" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs DIY Templates vs Corporate Retainers" },
  { id: "eligible-vs-ineligible-debts", title: "Eligible vs Ineligible Debts" },
  { id: "5-step-settlement-protocol", title: "5-Step Legal Settlement Protocol" },
  { id: "signature-infographic", title: "Settlement Workflow Infographic" },
  { id: "statutory-criminal-defense", title: "Section 138 & Section 25 Defense" },
  { id: "rbi-anti-harassment-enforcement", title: "Enforcing RBI Anti-Harassment Rules" },
  { id: "settlement-letter-and-ndc", title: "OTS Sanction Letter & No Dues Certificate" },
  { id: "cibil-impact-and-restoration", title: "CIBIL Impact & Credit Restoration" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions (FAQs)" },
  { id: "internal-guides", title: "Related Legal Debt Relief Guides" },
  { id: "statutory-references", title: "Statutory References & Regulatory Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function DebtSettlementKyaHotaHaiClient() {
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
    const textMsg = `Hello AMA Legal Solutions, I would like to understand what debt settlement options are available for my accounts.
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
      "Debt Settlement Kya Hota Hai? Meaning, Legal Process & RBI Framework – AMA Legal Solutions";
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
      label: "Debt Settlement Kya Hota Hai",
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
                <span className="text-[#D2A02A]">Debt Settlement Kya Hota Hai</span>? Complete Legal Meaning, RBI OTS Process &amp; Borrower Rights
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Understand the statutory framework of One-Time Settlement (OTS) under Section 63 of the Indian Contract Act, 1872
                and Reserve Bank of India directives. Discover how advocate-certified representation eliminates recovery agent
                harassment, defends against Section 138 and Section 25 criminal notices, and secures authentic No Dues Certificates
                through transparent fixed legal advisory without hourly markups or surprise retainers.
              </p>

              {/* Author & Meta Row */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A]">
                    <Image
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="font-bold text-[#1a202c] hover:text-[#D2A02A] transition"
                    >
                      Anuj Anand Malik
                    </Link>
                    <p className="text-xs text-gray-500">
                      Founder &amp; Senior Advocate • High Court &amp; DRT
                    </p>
                  </div>
                </div>

                <div className="h-8 w-px bg-gray-300 hidden sm:block" />

                <div className="text-xs text-gray-600 space-y-0.5">
                  <p className="font-semibold text-gray-800">
                    Reviewed by Team AMA Legal Solutions
                  </p>
                  <p>Advocates &amp; Insolvency Practitioners</p>
                </div>

                <div className="h-8 w-px bg-gray-300 hidden sm:block" />

                <div className="flex items-center gap-3 text-xs font-semibold text-gray-600">
                  <span className="bg-white px-2.5 py-1 rounded-md border border-gray-200">
                    📅 17-09-2026
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-gray-200">
                    ⏱️ 14 Min Read
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col — Featured Image Card (lg:col-span-4) */}
            <div className="lg:col-span-4">
              <div className="bg-white p-3 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden group">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="/images/og/debt-settlement-kya-hota-hai.png"
                    alt="Debt Settlement Kya Hota Hai – Legal Process & RBI OTS Framework"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D2A02A]">
                    Official RBI Resolution Architecture
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Advocate-Led Compromise Under Indian Contract Act &amp; RBI Master Directions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mb-20">

            {/* Left Sticky Column — Table of Contents */}
            <aside className="hidden lg:block sticky top-28 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-extrabold text-[#1a202c] text-xs uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                Contents Index
              </h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            {/* Center Column — Comprehensive Editorial Content */}
            <main className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 min-w-0">

              {/* Meta details & Social Share bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-medium text-gray-700">
                    Compliant with RBI Circular DOR.STR.REC.20/21.04.048/2023-24
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Share Guide:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#D2A02A] hover:text-white transition cursor-pointer"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#D2A02A] hover:text-white transition cursor-pointer"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#D2A02A] hover:text-white transition cursor-pointer"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#D2A02A] hover:text-white transition text-xs font-semibold cursor-pointer"
                    aria-label="Copy Page Link"
                  >
                    🔗
                  </button>
                </div>
                {shareMsg && (
                  <span className="text-[#D2A02A] font-semibold text-xs ml-auto">
                    {shareMsg}
                  </span>
                )}
              </div>

              {/* ══ STANDALONE QUICK ANSWER BLOCK ══ */}
              <div
                id="quick-answer"
                className="p-6 md:p-8 bg-amber-50/80 rounded-2xl border-l-4 border-[#D2A02A] shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2 text-[#5A4C33] font-bold text-sm uppercase tracking-wider">
                  <span>⚡</span> Statutory Direct Definition: Debt Settlement Kya Hota Hai?
                </div>
                <p className="text-gray-900 font-medium text-base md:text-lg leading-relaxed">
                  Debt settlement in India is a legally binding bilateral compromise contract executed under Section 63 of the Indian Contract Act, 1872 and the Reserve Bank of India (RBI) Prudential Framework for Resolution of Stressed Assets, wherein a lender formally agrees to accept a mutually negotiated discounted lump-sum payment to extinguish a borrower&apos;s outstanding debt obligation. The debt settlement mechanism completely discharges the borrower from active collection actions, halts third-party recovery agent harassment under the RBI Fair Practices Code, and mandates the withdrawal of pending Section 138 Negotiable Instruments Act or Section 25 Payment and Settlement Systems Act proceedings upon payment. Following the remittance of the sanctioned compromise amount directly to the lending institution&apos;s loan account, the lender issues an irrevocable, bank-sealed No Dues Certificate (NDC) that permanently terminates all legal claims against the borrower.
                </p>
                <p className="text-xs text-gray-600 italic">
                  Note: A legal settlement is distinct from an internal bank write-off; debt settlement legally extinguishes liability, whereas write-offs maintain recovery rights until formally compromised.
                </p>
              </div>

              {/* ══ SECTION 1: STATUTORY DEFINITION & FRAMEWORK ══ */}
              <section id="statutory-definition-and-framework" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Framework &amp; Jurisprudence
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Legal Meaning &amp; Reserve Bank of India Framework for Debt Settlement
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Many distressed Indian borrowers ask the foundational question: <strong className="text-gray-900">debt settlement kya hota hai</strong>? Under Indian jurisprudence, debt settlement is neither a loan default nor an informal evasion of liability. Rather, it is a formal, legally enforceable novation and compromise contract recognized by the highest monetary and judicial authorities in India. When a borrower faces insurmountable financial hardship—such as severe medical catastrophe, unexpected business liquidation, or sudden loss of primary livelihood—the borrower enters an acute debt trap where continuing routine EMIs is mathematically impossible.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The substantive legal backbone of debt settlement rests on three statutory pillars:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="text-2xl">📜</div>
                    <h3 className="font-bold text-gray-900 text-sm">Section 63, Indian Contract Act</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Codifies the doctrine of accord and satisfaction. Every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may accept instead of it any satisfaction which he thinks fit.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="text-2xl">🏛️</div>
                    <h3 className="font-bold text-gray-900 text-sm">RBI Compromise Framework 2023</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Circular DOR.STR.REC.20/21.04.048/2023-24 directs all scheduled commercial banks and NBFCs to maintain board-approved compromise policies empowering sanctioned authorities to approve genuine principal waivers.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="text-2xl">⚖️</div>
                    <h3 className="font-bold text-gray-900 text-sm">Legal Services Authorities Act, 1987</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Settlements formalized before a National Lok Adalat bench hold the statutory status of a final civil court decree under Section 21, barring all future appeals or recovery litigation by the creditor bank.
                    </p>
                  </div>
                </div>

                <blockquote className="p-4 bg-amber-50/60 border-l-4 border-[#D2A02A] rounded-r-xl text-sm italic text-gray-800 leading-relaxed">
                  &ldquo;Under Section 63 of the Indian Contract Act, 1872, the creditor has full statutory competence to accept a lesser sum in full satisfaction of a larger debt. Once such accord is executed and consideration is remitted, the original contract is completely superseded and extinguished.&rdquo;
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  When executed under advocate guidance, debt settlement transforms an uncontrolled debt crisis into an orderly legal closing. Instead of enduring years of compounding penal charges, abusive recovery calls, and compounding civil suits, the borrower secures an institutional exit backed by verified banking seals and court compounding orders.
                </p>
              </section>

              {/* ══ SECTION 2: COMMERCIAL REALITY & ADVOCATE VS DIY ══ */}
              <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Commercial Search Intent &amp; Strategy
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Why Free DIY Online Templates Fail &amp; How Transparent Fixed Advisory Eliminates Corporate Retainers
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed text-base">
                  When borrowers search for debt relief solutions online, they frequently encounter two dangerous commercial extremes: misleading automated &ldquo;free DIY settlement templates&rdquo; on the one hand, and traditional corporate law firms demanding exorbitant, open-ended billable hourly retainers on the other. Both approaches fail individual borrowers facing acute financial distress.
                </p>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-gray-900">
                    The Critical Pitfalls of Free Automated DIY Online Templates
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Automated templates and generic draft letters downloaded from informal forums lack legal standing under the Advocates Act, 1961. Bank recovery managers and institutional compromise committees review hundreds of default accounts weekly; when they receive a copy-paste internet template, it is immediately discarded. More critically:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                    <li>
                      <strong className="text-gray-900">Inadvertent Limitation Restart:</strong> Under Section 18 of the Limitation Act, 1963, any unqualified written acknowledgment of debt can reset the three-year limitation clock, giving the bank renewed rights to initiate civil recovery suits and asset attachments.
                    </li>
                    <li>
                      <strong className="text-gray-900">Zero Courtroom Defense:</strong> Free online templates cannot appear before a Judicial Magistrate when the bank issues a criminal summons under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act.
                    </li>
                    <li>
                      <strong className="text-gray-900">No Privilege or Protection:</strong> Communications conducted via unregulated web portals or unauthorized agencies enjoy zero legal privilege, exposing sensitive personal income data directly to aggressive recovery agents.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-gray-900">
                    The Corporate Law Firm Trap: Open-Ended Hourly Retainers
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    At the opposite extreme, traditional corporate law firms treat retail loan distress through the lens of large-scale commercial litigation. They impose multi-tier hourly billing schedules, recurring monthly retainers, and extra court appearance surcharges. For a borrower struggling to meet basic living costs, an open-ended corporate retainer adds legal insolvency on top of debt distress.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-gray-900">
                    The AMA Legal Solutions Model: Transparent Fixed Legal Advisory
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    AMA Legal Solutions bridges this gap by providing institutional-grade advocate representation through a <strong className="text-gray-900">transparent fixed legal advisory model</strong>. Borrowers receive complete legal certainty: no hourly billing surprises, no recurring retainers, and no hidden markups. Every step—from initial forensic ledger audit to statutory cease-and-desist notices, compromise committee hearings, and No Dues Certificate authentication—is handled under a clear, single-engagement framework protected by statutory advocate-client privilege under Section 126 of the Indian Evidence Act, 1872.
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="p-3.5 sm:p-4 font-bold">Key Evaluation Parameter</th>
                        <th className="p-3.5 sm:p-4 font-semibold text-gray-300">Free Online DIY Templates</th>
                        <th className="p-3.5 sm:p-4 font-semibold text-gray-300">Corporate Law Firm Retainers</th>
                        <th className="p-3.5 sm:p-4 font-bold text-[#D2A02A]">AMA Legal Solutions (Advocate-Led)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Legal Standing &amp; Representation</td>
                        <td className="p-3.5 sm:p-4 text-red-600 font-medium">None; dismissed by banks</td>
                        <td className="p-3.5 sm:p-4 text-gray-700">Full advocate standing</td>
                        <td className="p-3.5 sm:p-4 text-green-700 font-bold bg-amber-50/40">Direct High Court &amp; DRT Advocate Counsel</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Commercial Fee Structure</td>
                        <td className="p-3.5 sm:p-4 text-gray-600">Zero upfront, severe hidden legal exposure</td>
                        <td className="p-3.5 sm:p-4 text-red-600 font-medium">Unpredictable hourly billing &amp; retainers</td>
                        <td className="p-3.5 sm:p-4 text-green-700 font-bold bg-amber-50/40">Transparent fixed legal advisory, zero hourly markups</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Privilege &amp; Data Protection</td>
                        <td className="p-3.5 sm:p-4 text-red-600">None; private portals leak data</td>
                        <td className="p-3.5 sm:p-4 text-gray-700">Section 126 Evidence Act applies</td>
                        <td className="p-3.5 sm:p-4 text-green-700 font-bold bg-amber-50/40">Strict statutory advocate-client confidentiality</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Section 138 &amp; Section 25 Defense</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Incapable of courtroom appearance</td>
                        <td className="p-3.5 sm:p-4 text-gray-700">Covered at substantial extra billings</td>
                        <td className="p-3.5 sm:p-4 text-green-700 font-bold bg-amber-50/40">Comprehensive formal replies &amp; compounding defense</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">RBI Anti-Harassment Notice</td>
                        <td className="p-3.5 sm:p-4 text-gray-500">Ineffectual generic emails ignored</td>
                        <td className="p-3.5 sm:p-4 text-gray-700">Standard legal notice</td>
                        <td className="p-3.5 sm:p-4 text-green-700 font-bold bg-amber-50/40">Immediate statutory cease-and-desist under Fair Practices Code</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">OTS Letter &amp; NDC Authentication</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Borrower vulnerable to fake letters</td>
                        <td className="p-3.5 sm:p-4 text-gray-700">Document verification included</td>
                        <td className="p-3.5 sm:p-4 text-green-700 font-bold bg-amber-50/40">Multi-point forensic audit of bank seal, QR &amp; ledger closure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ══ SECTION 3: ELIGIBLE VS INELIGIBLE DEBTS ══ */}
              <section id="eligible-vs-ineligible-debts" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Credit Facilities &amp; RBI Scope
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Eligible vs. Ineligible Debt Facilities Under the RBI Compromise Framework
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Borrowers must understand which credit facilities qualify for compromise debt settlement under Reserve Bank of India prudential regulations. The RBI framework provides distinct resolution pathways for unsecured consumer loans versus secured asset-backed credit.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-green-50/50 border border-green-200 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2 text-green-800 font-bold text-sm uppercase">
                      <span>✓</span> High-Eligibility Debt Facilities
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc pl-5">
                      <li>
                        <strong className="text-gray-900">Unsecured Personal Loans:</strong> Defaulted salary personal loans from public sector banks, private banks, and regulated NBFCs.
                      </li>
                      <li>
                        <strong className="text-gray-900">Credit Card Outstanding Balances:</strong> Revolving credit balances, unmanageable finance charges, and over-limit penalties across commercial banks.
                      </li>
                      <li>
                        <strong className="text-gray-900">Instant Digital App Loans:</strong> Micro-loans from RBI-registered NBFC apps facing recovery distress.
                      </li>
                      <li>
                        <strong className="text-gray-900">Unsecured MSME &amp; Business Loans:</strong> Clean business credit lines, vendor financing, and merchant cash advances without underlying real estate hypothecation.
                      </li>
                      <li>
                        <strong className="text-gray-900">Consolidated Consumer Credit:</strong> Multiple fragmented unsecured liabilities merged into an institutional compromise agenda.
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-red-50/50 border border-red-200 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2 text-red-800 font-bold text-sm uppercase">
                      <span>✕</span> Ineligible or Restricted Facilities
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc pl-5">
                      <li>
                        <strong className="text-gray-900">Willful Defaulters:</strong> Borrowers formally classified as willful defaulters under the RBI Master Circular on Wilful Defaulters (having capacity but refusing payment).
                      </li>
                      <li>
                        <strong className="text-gray-900">Accounts Under Fraud Investigation:</strong> Facilities red-flagged for fraud under Section 447 of the Companies Act or referred to CBI / Enforcement Directorate.
                      </li>
                      <li>
                        <strong className="text-gray-900">Home Loans with Active SARFAESI:</strong> Secured residential mortgages where the bank has already issued Section 13(4) physical possession notices (requires restructuring or auction defense rather than pure unsecured OTS).
                      </li>
                      <li>
                        <strong className="text-gray-900">Automobile Loans with Repossession Orders:</strong> Secured vehicle loans where the underlying asset remains readily accessible for physical impoundment.
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  If an account is categorized as a Non-Performing Asset (NPA) after passing the mandatory 90-day overdue threshold under RBI guidelines, banks face strict provisioning mandates. This regulatory requirement incentivizes institutional credit committees to agree to realistic One-Time Settlement terms when approached by legal counsel.
                </p>
              </section>

              {/* ══ SECTION 4: 5-STEP SETTLEMENT PROTOCOL ══ */}
              <section id="5-step-settlement-protocol" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Execution Architecture
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 5-Step Statutory Debt Settlement Protocol
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Executing a successful debt settlement requires an orderly, multi-stage legal protocol that protects the borrower at every juncture while systematically securing the maximum legal concessions authorized under banking regulations.
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-xl">
                      01
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Forensic Ledger Audit &amp; Penal Interest Dissection
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Our legal team conducts an exhaustive review of all loan sanction agreements, repayment schedules, and bank account ledgers. We isolate unlawful compound interest, exorbitant late payment charges, and unauthorized collection fees added by the lender. Stripping away non-statutory penalties establishes the true baseline principal obligation, drastically strengthening our compromise bargaining position.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-xl">
                      02
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Statutory Cease-and-Desist Notice Under RBI Guidelines
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        We issue a formal Vakalatnama and legal representation notice to the head of retail credit and the board of directors of the lending institution. This notice formally notifies the bank that the borrower is represented by legal counsel under the Advocates Act, 1961 and invokes the RBI Master Directions on Fair Practices Code. The bank is statutorily directed to immediately withdraw third-party recovery agents, stop unauthorized phone calls, and route all communications exclusively through our legal office.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-xl">
                      03
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Advocate Hardship Dossier Compilation &amp; Lok Adalat Submission
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        We compile an evidentiary Hardship Dossier substantiating genuine insolvency under Section 63 of the Indian Contract Act. This dossier incorporates audited income statements, bank statements showing cash flow disruptions, termination letters, medical diagnosis summaries, and dependency liabilities. The dossier is formally submitted to the bank&apos;s Zonal Stressed Assets Resolution Committee or placed before a National Lok Adalat bench for judicial sanction.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-xl">
                      04
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Bank Compromise Committee Negotiation &amp; OTS Letter Vetting
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Senior banking advocates represent the borrower during bilateral compromise negotiations with the bank&apos;s regional credit committee. Once terms are approved, we perform a rigorous forensic audit of the formal One-Time Settlement (OTS) sanction letter. We verify that the letter is issued on official bank letterhead, contains a verified internal reference number, explicitly itemizes full waiver of remaining balances, and contains no ambiguous revival clauses.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-xl">
                      05
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900">
                        Settlement Remittance, No Dues Certificate Enforcement &amp; CIBIL Rectification
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        The borrower remits the sanctioned compromise amount directly into the designated loan account via RTGS/NEFT—never to personal or agency accounts. Upon credit confirmation, we enforce the issuance of an unconditional, bank-sealed No Dues Certificate (NDC). Furthermore, we ensure the lender fulfills its statutory obligation under Section 21 of the Credit Information Companies (Regulation) Act, 2005 to update credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to reflect the account as permanently closed and settled.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 5: SIGNATURE INFOGRAPHIC ══ */}
              <section id="signature-infographic" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Visual Legal Roadmap
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Debt Settlement Architecture &amp; Workflow Infographic
                  </h2>
                </div>

                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm space-y-4">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20">
                    <Image
                      src="/images/og/debt-settlement-kya-hota-hai.png"
                      alt="Debt Settlement Kya Hota Hai – Complete Legal Process & RBI Guidelines Infographic"
                      fill
                      sizes="(max-width: 1200px) 100vw, 900px"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="font-bold text-sm text-[#1a202c]">
                      Figure 1.1: Complete Statutory Debt Settlement Architecture in India
                    </p>
                    <p className="text-xs text-gray-600 max-w-2xl mx-auto">
                      From initial forensic ledger audit to statutory cease-and-desist notice, hardship dossier submission, compromise committee negotiation, and final No Dues Certificate enforcement under RBI directives.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 6: STATUTORY CRIMINAL DEFENSE ══ */}
              <section id="statutory-criminal-defense" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Criminal Notice Defense
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Defending Against Section 138 NI Act &amp; Section 25 PSSA Notices
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  A major anxiety for defaulted borrowers is the receipt of formal legal notices threatening criminal prosecution and imprisonment. Lending institutions routinely deploy two statutory instruments to enforce payment:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                    <h3 className="font-bold text-gray-900 text-sm">
                      Section 138, Negotiable Instruments Act, 1881
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Triggered when a post-dated security cheque submitted at the time of loan disbursement is presented by the bank and dishonoured for &ldquo;insufficient funds&rdquo;. The statute provides for imprisonment of up to two years and heavy financial fines.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                    <h3 className="font-bold text-gray-900 text-sm">
                      Section 25, Payment &amp; Settlement Systems Act, 2007
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Triggered when an automated NACH/e-Mandate auto-debit fails due to insufficient balance. It mirrors the criminal provisions of Section 138, treating failed digital auto-debits as quasi-criminal offences before a Metropolitan Magistrate.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-base text-gray-900">
                    Advocate-Led Strategic Counter-Defense Protocol
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Defaulting on a debt is fundamentally a civil breach of contract, not a criminal fraud. Under the landmark jurisprudence of the Supreme Court of India in <em>Meters and Instruments Private Limited v. Kanchan Mehta</em> and <em>Dashrath Rupsingh Rathod v. State of Maharashtra</em>, criminal courts cannot be converted into debt collection recovery agencies.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                    <li>
                      <strong className="text-gray-900">Rebuttal of Section 139 Presumption:</strong> We draft and serve comprehensive legal replies disproving that the dishonoured cheque was issued for an existing, enforceable debt of the exact face value, demonstrating that blank security cheques were misapplied.
                    </li>
                    <li>
                      <strong className="text-gray-900">Absence of Mens Rea:</strong> We demonstrate bona fide financial inability, establishing the complete absence of criminal fraudulent intention under Section 415 of the Indian Penal Code (or Bharatiya Nyaya Sanhita, 2023).
                    </li>
                    <li>
                      <strong className="text-gray-900">Compounding of Offenses Under Section 147:</strong> Under Section 147 of the NI Act, offenses under Section 138 are expressly compoundable. Once an OTS compromise is executed, our advocates move a joint application before the trial court to compound the offense and quash all proceedings with zero criminal record.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ══ SECTION 7: RBI ANTI-HARASSMENT ENFORCEMENT ══ */}
              <section id="rbi-anti-harassment-enforcement" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Borrower Protection &amp; Human Dignity
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Enforcing RBI Anti-Harassment Directives &amp; Police Action Against Misconduct
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  One of the most destructive aspects of financial default is the psychological abuse inflicted by unregulated third-party collection agencies. Many borrowers do not know that such aggressive tactics are flagrantly illegal under binding guidelines issued by the Reserve Bank of India and multiple Supreme Court rulings.
                </p>

                <div className="p-6 bg-[#1a202c] text-white rounded-2xl space-y-4 shadow-lg">
                  <h3 className="font-bold text-[#D2A02A] text-base uppercase tracking-wider">
                    Statutory Prohibitions Under RBI Fair Practices Code for Lenders
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">🚫</span>
                      <span>Calling before 8:00 AM or after 7:00 PM is strictly prohibited under banking directives.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">🚫</span>
                      <span>Contacting family members, friends, neighbors, or colleagues regarding debt default is illegal.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">🚫</span>
                      <span>Visiting the borrower&apos;s workplace or unannounced home intrusion without prior appointment is prohibited.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">🚫</span>
                      <span>Using verbal abuse, physical intimidation, or humiliation constitutes a punishable criminal offense.</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  The Supreme Court in <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> explicitly held that banks cannot employ musclemen or recovery agents to recover loans through coercion. When AMA Legal Solutions issues a statutory cease-and-desist notice, the bank is put on notice that any further harassment will trigger:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-700">
                  <li>Formal escalation to the RBI Banking Ombudsman under the RBI Integrated Ombudsman Scheme, 2021.</li>
                  <li>First Information Report (FIR) for criminal intimidation, extortion, and criminal trespass under the Bharatiya Nyaya Sanhita, 2023.</li>
                  <li>Criminal complaints under Section 66E of the Information Technology Act, 2000 for invasion of privacy.</li>
                </ul>
              </section>

              {/* ══ SECTION 8: SETTLEMENT LETTER & NDC ══ */}
              <section id="settlement-letter-and-ndc" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Documentary Verification
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    OTS Sanction Letter Forensic Verification &amp; Authentic No Dues Certificate
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  A debt settlement is only as good as the paper it is written on. Thousands of borrowers fall prey to unauthorized recovery agents who issue fabricated &ldquo;settlement receipts&rdquo; on plain paper, siphon off payments into private UPI handles, and leave the loan active with compounding penalties.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-6 bg-amber-50/50 border border-amber-200 rounded-2xl space-y-3">
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                      <span>🔍</span> Mandatory Elements of an Authentic OTS Sanction Letter
                    </h3>
                    <ul className="space-y-2 text-xs text-gray-700 list-disc pl-4">
                      <li>Printed on the official corporate letterhead of the bank or registered NBFC.</li>
                      <li>Signed by an authorized branch manager, zonal head, or authorized collection officer with designation and employee ID.</li>
                      <li>Contains an official, trackable internal dispatch or sanction reference number.</li>
                      <li>Itemizes the exact loan account number, sanctioned compromise amount, and payment deadline.</li>
                      <li>Unconditionally declares that upon receipt of the compromise sum, the remaining balance is waived and the account will be closed.</li>
                      <li>Specifies payment directly into the designated bank loan account via internal bank teller, RTGS, or official virtual portal.</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-blue-50/50 border border-blue-200 rounded-2xl space-y-3">
                    <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                      <span>📜</span> The Irrevocable No Dues Certificate (NDC)
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      The No Dues Certificate (NDC) or No Objection Certificate (NOC) is the ultimate legal shield. Under Section 63 of the Indian Contract Act, the NDC constitutes an irrevocable discharge of liability. It legally bars the bank, its asset reconstruction companies (ARCs), and collection agencies from ever claiming any residual balance or pursuing future litigation against the borrower or legal heirs.
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                      AMA Legal Solutions verifies the NDC directly against the bank&apos;s core banking database before certifying account extinguishment to our clients.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 9: CIBIL IMPACT & RESTORATION ══ */}
              <section id="cibil-impact-and-restoration" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Credit Score Architecture
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Credit Bureau (CIBIL) Impact, &apos;Settled&apos; Remark &amp; Step-by-Step Credit Rehabilitation
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Borrowers must maintain a realistic and legally accurate understanding of how debt settlement impacts their credit profile. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), lending institutions are required to transmit monthly updates to all four operational credit bureaus in India: TransUnion CIBIL, Experian, Equifax, and CRIF High Mark.
                </p>

                <div className="space-y-4">
                  <h3 className="font-bold text-base text-gray-900">
                    Understanding the &apos;Settled&apos; Tag vs Continuous Default
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    When an OTS compromise is executed, the bank updates the account status from &ldquo;Overdue / Default / NPA&rdquo; to &ldquo;Settled&rdquo;. While a &ldquo;Settled&rdquo; status indicates that the lender accepted less than the full contractual value—resulting in a temporary downward adjustment in credit score—it provides crucial legal and financial advantages over an ongoing default:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                    <div className="p-4 bg-red-50 rounded-xl border border-red-100 text-xs text-gray-700">
                      <strong className="text-red-800 block mb-1">Ongoing Unsettled Default:</strong>
                      Compounding Days Past Due (DPD) every 30 days (e.g. 90, 180, 360+ DPD), active recovery litigation, continuous agent harassment, and complete blacklisting by all financial institutions.
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-xs text-gray-700">
                      <strong className="text-green-800 block mb-1">Executed Debt Settlement:</strong>
                      DPD reporting permanently halted, total outstanding balance reported as zero, civil/criminal litigation terminated, and clean slate to rebuild credit from day one.
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-base text-gray-900">
                    The 24-Month Credit Restoration Protocol
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Rebuilding your credit profile to a prime 750+ score after a settlement is a proven, predictable process:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-xs sm:text-sm text-gray-700">
                    <li>
                      <strong className="text-gray-900">Verify Bureau Reporting (Day 30–45):</strong> Download updated reports from all four bureaus to confirm the outstanding balance is reported as zero and the account status is updated to &ldquo;Settled&rdquo;. If discrepancies exist, our office files formal disputes under Section 21 of CICRA.
                    </li>
                    <li>
                      <strong className="text-gray-900">Secure a Fixed Deposit-Backed Credit Card (Month 3):</strong> Apply for a secured credit card backed by a modest fixed deposit. This card requires no credit score verification and issues a fresh, active credit tradeline.
                    </li>
                    <li>
                      <strong className="text-gray-900">Maintain Sub-30% Credit Utilization (Months 4–12):</strong> Use the secured card for routine, disciplined monthly expenses, always keeping utilization below thirty percent of the credit limit.
                    </li>
                    <li>
                      <strong className="text-gray-900">Zero Late Payments:</strong> Pay the statement balance in full before the due date each month. Over 12 to 24 consecutive months of flawless reporting, your credit score steadily rehabilitates to prime eligibility.
                    </li>
                  </ol>
                </div>
              </section>

              {/* ══ SECTION 10: FREQUENTLY ASKED QUESTIONS (8 ACCORDIONS) ══ */}
              <section id="frequently-asked-questions" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Inquiries
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Frequently Asked Questions on Debt Settlement in India
                  </h2>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#D2A02A] transition cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm sm:text-base leading-snug">
                            {faq.question}
                          </span>
                          <span className="text-lg font-extrabold text-[#D2A02A] flex-shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50">
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
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Related Legal Research
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Explore More Legal Debt Relief &amp; Settlement Guides
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/what-is-debt-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/30 group"
                  >
                    <p className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A]">
                      What is Debt Settlement? Complete Guide &rarr;
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Comprehensive English legal overview of One-Time Settlement under RBI compromise guidelines.
                    </p>
                  </Link>

                  <Link
                    href="/best-debt-settlement-service-in-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/30 group"
                  >
                    <p className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A]">
                      Best Debt Settlement Service in India &rarr;
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      How advocate-certified compromise advisory protects borrowers from unregulated settlement agencies.
                    </p>
                  </Link>

                  <Link
                    href="/when-to-choose-debt-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/30 group"
                  >
                    <p className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A]">
                      When to Choose Debt Settlement? &rarr;
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Critical warning signs, legal timing, and NPA timelines to initiate compromise negotiations.
                    </p>
                  </Link>

                  <Link
                    href="/loan-settlement-karwana-hai"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/30 group"
                  >
                    <p className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A]">
                      Loan Settlement Karwana Hai? Full Guide &rarr;
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Hindi legal guide on RBI OTS process, stopping harassment, and securing genuine No Dues Certificates.
                    </p>
                  </Link>

                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/30 group"
                  >
                    <p className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A]">
                      Loan Settlement vs. Debt Consolidation &rarr;
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Compare debt consolidation loans with legal OTS settlements to determine the right financial reset.
                    </p>
                  </Link>

                  <Link
                    href="/loan-write-off-vs-loan-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/30 group"
                  >
                    <p className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A]">
                      Loan Write-Off vs. Loan Settlement &rarr;
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Understand why a written-off loan leaves you legally vulnerable, while a settlement permanently discharges debt.
                    </p>
                  </Link>

                  <Link
                    href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/30 group"
                  >
                    <p className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A]">
                      CIBIL Impact: Settlement vs. Closure &rarr;
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Detailed statutory breakdown of credit bureau score implications and reporting under CICRA 2005.
                    </p>
                  </Link>

                  <Link
                    href="/how-to-know-if-the-settlement-letter-is-valid"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/30 group"
                  >
                    <p className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A]">
                      How to Know if Settlement Letter is Valid &rarr;
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Forensic checklist to identify fake collection agency letters and verify official bank seals.
                    </p>
                  </Link>
                </div>
              </section>

              {/* ══ SECTION 12: STATUTORY REFERENCES & AUTHORITIES ══ */}
              <section id="statutory-references" className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Judicial &amp; Regulatory Authorities
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Statutory References &amp; Official Portals
                  </h2>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-4 text-xs sm:text-sm text-gray-700">
                  <p className="font-medium text-gray-900">
                    The legal principles, rights, and regulatory frameworks discussed in this publication are anchored in the following official statutes and notifications:
                  </p>
                  <ul className="space-y-2.5">
                    <li>
                      •{" "}
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Reserve Bank of India (RBI) Official Portal
                      </a>{" "}
                      — Master Direction on Compromise Settlements and Technical Write-offs (June 8, 2023) &amp; Master Direction on Fair Practices Code.
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://indiacode.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        India Code (Ministry of Law and Justice)
                      </a>{" "}
                      — Section 63 of the Indian Contract Act, 1872 (Accord &amp; Satisfaction) and Section 126 of the Indian Evidence Act, 1872.
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://nalsa.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        National Legal Services Authority (NALSA)
                      </a>{" "}
                      — Legal Services Authorities Act, 1987 provisions regarding Lok Adalat compromise awards and civil decrees.
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://cms.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        RBI Integrated Ombudsman Scheme (CMS Portal)
                      </a>{" "}
                      — Statutory grievance redressal mechanism against recovery harassment and banking non-compliance.
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://main.sci.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Supreme Court of India Case Law Portal
                      </a>{" "}
                      — Landmark judgments: <em>ICICI Bank v. Prakash Kaur</em> (anti-harassment) and <em>Meters and Instruments v. Kanchan Mehta</em> (compounding).
                    </li>
                  </ul>
                </div>
              </section>

              {/* Social Share Row at Bottom */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
                <span className="font-semibold text-gray-800">
                  Did this legal guide answer your debt settlement questions? Share it with other borrowers:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#D2A02A] hover:text-white transition font-medium cursor-pointer"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#D2A02A] hover:text-white transition font-medium cursor-pointer"
                  >
                    X (Twitter)
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#D2A02A] hover:text-white transition font-medium cursor-pointer"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#D2A02A] hover:text-white transition font-medium cursor-pointer"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* ══ SECTION 13: AMA COMPANY & MEDIA SECTION ══ */}
              <section
                id="ama-company-section"
                className="border-4 border-[#D2A02A] rounded-2xl p-6 sm:p-10 bg-[#FAF7F0] space-y-6 shadow-md"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-[#D2A02A]/30">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1a202c] p-2 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/ama3.svg"
                        alt="AMA Legal Solutions"
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a202c]">
                        AMA Legal Solutions
                      </h3>
                      <p className="text-xs text-gray-600">
                        Premier Banking Litigation, Debt Settlement &amp; Dispute Resolution Law Firm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                    <span className="text-base font-extrabold text-gray-900">4.7</span>
                    <Stars count={5} />
                    <span className="text-xs text-gray-500 font-medium">Google Rating</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  Founded by Senior Advocate Anuj Anand Malik, AMA Legal Solutions has represented thousands of distressed borrowers across India. Our firm provides transparent, fixed legal advisory without hourly markups, defending clients against recovery harassment, quashing Section 138 criminal notices, and executing institutional One-Time Settlements before bank compromise committees and Lok Adalat benches.
                </p>

                <div className="space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#5A4C33]">
                    Our Legal Solutions:
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      href="/services/loan-settlement"
                      className="px-3 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] font-semibold hover:bg-[#D2A02A] hover:text-white transition"
                    >
                      Personal Loan Settlement
                    </Link>
                    <Link
                      href="/credit-card-debt-settlement"
                      className="px-3 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] font-semibold hover:bg-[#D2A02A] hover:text-white transition"
                    >
                      Credit Card Settlement
                    </Link>
                    <Link
                      href="/services/best-lawyer-for-bank-harassment"
                      className="px-3 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] font-semibold hover:bg-[#D2A02A] hover:text-white transition"
                    >
                      Anti-Harassment Injunctions
                    </Link>
                    <Link
                      href="/cheque-bounce-legal-notice"
                      className="px-3 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] font-semibold hover:bg-[#D2A02A] hover:text-white transition"
                    >
                      Section 138 NI Act Defense
                    </Link>
                    <Link
                      href="/special-lok-adalat-for-loan-settlement"
                      className="px-3 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] font-semibold hover:bg-[#D2A02A] hover:text-white transition"
                    >
                      Lok Adalat Settlement Awards
                    </Link>
                  </div>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar */}
            <aside className="space-y-8 sticky top-28">

              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A] flex-shrink-0">
                    <Image
                      src="/anujbhiya.png"
                      alt="Anuj Anand Malik"
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#1a202c] text-sm">
                      Anuj Anand Malik
                    </h3>
                    <p className="text-xs text-[#D2A02A] font-semibold">
                      Founder &amp; Senior Advocate
                    </p>
                    <p className="text-[11px] text-gray-500">High Court &amp; DRT Practice</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Specializing in banking litigation, debt compromise settlements, and insolvency advisory. Representing distressed retail and business borrowers against institutional creditors nationwide.
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                  <Link
                    href="/author/anuj-anand-malik"
                    className="font-bold text-[#D2A02A] hover:underline"
                  >
                    View Complete Profile &rarr;
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0077b5] transition"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-md space-y-4">
                <span className="inline-block px-2.5 py-1 bg-[#D2A02A] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-md">
                  CONFIDENTIAL ADVOCATE CONSULTATION
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  Struggling with Unmanageable Debt or Harassment?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Stop suffering from illegal recovery agent threats and Section 138 notices. Speak directly with an experienced banking advocate under transparent fixed legal advisory.
                </p>
                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+918700343611"
                    className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 px-4 rounded-xl text-center block text-xs shadow-md transition"
                  >
                    📞 Call: +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl text-center block text-xs border border-white/20 transition cursor-pointer"
                  >
                    Request Confidential Callback
                  </button>
                </div>
                <p className="text-[10px] text-gray-300 text-center">
                  Protected under Section 126 of Indian Evidence Act
                </p>
              </div>

              {/* Client Reviews Card (Verbatim 1:1 with Schema) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <h3 className="font-bold text-[#1a202c] text-xs uppercase tracking-wider">
                    Verified Client Reviews
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                    <span>{clientReviewData.ratingValue}</span>
                    <Stars count={5} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-900">
                    {clientReviewData.authorName}
                  </p>
                  <p className="text-[11px] text-[#D2A02A] font-semibold">
                    {clientReviewData.authorRole}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed italic">
                    &ldquo;{clientReviewData.reviewBody}&rdquo;
                  </p>
                </div>
              </div>

              {/* Related Topic Guides */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-[#1a202c] text-xs uppercase tracking-wider border-b border-gray-100 pb-2">
                  Related Topic Guides
                </h3>
                <div className="space-y-2 text-xs">
                  <Link
                    href="/debt-settlement-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement India Guide
                  </Link>
                  <Link
                    href="/what-is-debt-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; What is Debt Settlement?
                  </Link>
                  <Link
                    href="/best-debt-settlement-service-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Service in India
                  </Link>
                  <Link
                    href="/when-to-choose-debt-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; When to Choose Debt Settlement?
                  </Link>
                  <Link
                    href="/loan-settlement-karwana-hai"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement Karwana Hai
                  </Link>
                  <Link
                    href="/loan-settlement-kab-krna-chaiye"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement Kab Krna Chaiye?
                  </Link>
                  <Link
                    href="/loan-settlement-ke-liye-konsi-company-sabse-achi-hai"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Settlement Company Comparison
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
                          placeholder="e.g. New Delhi / Mumbai"
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

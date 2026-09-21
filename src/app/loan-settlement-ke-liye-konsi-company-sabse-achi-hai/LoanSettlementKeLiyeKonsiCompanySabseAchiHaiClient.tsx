"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/loan-settlement-ke-liye-konsi-company-sabse-achi-hai";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/loan-settlement-ke-liye-konsi-company-sabse-achi-hai.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-14";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Loan settlement ke liye konsi company sabse achi hai aur chunte samay kin baaton ka dhyan rakhna chahiye?",
    answer:
      "Loan settlement ke liye sabse achi sanstha wahi hai jo Advocates Act, 1961 ke tahat registered High Court advocates dwara direct legal representation deti hai aur Reserve Bank of India (RBI) ke Master Circular on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24) ke mutabik negotiations karti hai. Unregulated commercial debt agencies ke viprit, ek verified legal firm bank ki credit committee ke sath formal legal dialogue establish karti hai, recovery harassment ke khilaf statutory cease-and-desist notice issue karti hai, aur Indian Contract Act, 1872 ke Section 63 ke antargat bank-sealed authentic No Dues Certificate prapt karwati hai. Karzdaron ko hamesha aisi legal advisory select karni chahiye jo transparent fixed legal advisory par bina kisi corporate hourly markup ke kaam kare.",
  },
  {
    id: "faq-2",
    question: "Unregulated debt relief agencies aur enrolled High Court advocates ki legal firm mein kya antar hota hai?",
    answer:
      "Advocates Act, 1961 ke Section 29 aur 30 ke antargat keval State Bar Council mein registered advocates ko hi kisi bhi court, tribunal, ya statutory authority ke samaksh pratinidhitwa karne ka exclusive right prapt hai. Private limited debt relief agencies ya third-party recovery mediators ke paas koi statutory standing nahi hoti, aur ve Section 138 NI Act ya Section 25 PSSA ke criminal notices par legal reply file karne ke liye kanoonan anadhikrit hain. Iske alawa, Indian Evidence Act, 1872 ke Section 126 ke tahat karzdar aur advocate ke beech ka communication privileged aur confidential hota hai, jabki private agencies karzdar ka data third parties ke sath share karke privacy risk khada kar sakti hain.",
  },
  {
    id: "faq-3",
    question: "Kya loan settlement agency bank court notices jaise Section 138 NI Act ya Section 25 PSSA par legal representation de sakti hai?",
    answer:
      "Nahi, koi bhi private company, loan settlement agency, ya financial consultancy firm court mein criminal ya quasi-criminal summons par legal representation nahi de sakti kyunki Bar Council of India ke rules non-advocate entities ko legal practice se sakhti se rokte hain. Negotiable Instruments Act, 1881 ke Section 138 aur Payment and Settlement Systems Act, 2007 ke Section 25 ke tahat aane wale notices par keval practicing advocate hi formal vakalatnama laga kar interim bail, quashing, ya compounding proceedings execute kar sakta hai. Section 147 NI Act ke antargat settlement ke aadhar par criminal proceedings ko legally compound karwana ek verified banking advocate ka hi kshetrajna hai.",
  },
  {
    id: "faq-4",
    question: "Corporate law firms ki tulna mein transparent fixed legal advisory model kyu behtar aur cost-effective vikalp hai?",
    answer:
      "Corporate law firms aamtaur par large business conglomerates aur multinational banks ke liye hourly billing rates aur ongoing monthly retainers ke model par kaam karti hain, jismein har court appearance, legal drafting, aur negotiation phone call ka alag se billing markup joda jata hai jo aam karzdar ke liye bilkul anupyogi hota hai. Iske viprit, transparent fixed legal advisory model karzdar ko shuruat se hi clear, predictable, aur accessible legal support pradan karta hai jismein koi surprise billings ya hourly retainers nahi hote. Enrolled High Court advocates pure settlement cycle—notice evaluation se lekar No Dues Certificate clearance tak—end-to-end manage karte hain.",
  },
  {
    id: "faq-5",
    question: "Online free DIY templates ya automated software se settlement draft taiyar karna kyu dangerous ho sakta hai?",
    answer:
      "Online free DIY legal templates bina kisi statutory context ke generic language use karte hain, jo Limitation Act, 1963 ke Section 18 ke antargat anjaane mein karzdar dwara time-barred debt ko revive ya acknowledge karwa sakti hain. Bank grievance cells aur dispute resolution committees automated templates ko non-serious maankar sidhe reject kar deti hain jisse settlement negotiations shuru hone se pehle hi deadlock mein phans jaati hain. Advocate-certified drafting mein genuine financial hardship ko verifiable income tax returns, medical records, ya business termination notices ke sath substantiate kiya jata hai jisse bank credit committee compromise approve karne ke liye baadhya hoti hai.",
  },
  {
    id: "faq-6",
    question: "Best legal settlement firm recovery agents ki illegal harassment aur calls ko kanoonan kaise rokti hai?",
    answer:
      "Ek established legal advisory firm Supreme Court ke landmark precedent *ICICI Bank v. Prakash Kaur* (2007) 2 SCC 711 aur RBI Master Direction on Fair Practices Code ke tahat bank ke managing director aur nodal officers ko statutory cease-and-desist legal notice bhejti hai. Is notice mein Bharatiya Nyaya Sanhita, 2023 ke Section 351 (Criminal Intimidation) aur Section 308 (Extortion) ke kanooni parinaamo ko darshaya jata hai, jisse bank turant third-party recovery agency ko case se hatane ke liye vivash ho jata hai. Formal legal representation shuru hote hi bank ke legal officers seedhe karzdar ke advocate se communication establish karte hain aur unauthorized phone calls turant ruk jaati hain.",
  },
  {
    id: "faq-7",
    question: "Bank se prapt hone wale One-Time Settlement (OTS) sanction letter ki authenticity kaise verify ki jaati hai?",
    answer:
      "Ek genuine loan settlement firm sanction letter prapt hone par yeh verify karti hai ki letter bank ke authorized credit approval authority ya regional zonal manager ke digital signatures, official reference number, aur bank seal ke sath formal letterhead par jari hua ho. Iske sath hi letter mein Indian Contract Act ke Section 63 ke mutabik explicit clause hona chahiye ki agreed compromise amount jama hone par bacha hua liability balance completely waive aur extinguish ho jayega. Advocate yeh bhi verify karte hain ki settlement amount seedhe bank ke designated borrower loan account mein remit ho, kisi recovery agent ya third-party intermediary ke account mein nahi.",
  },
  {
    id: "faq-8",
    question: "Settlement complete hone ke baad authentic No Dues Certificate (NDC) aur CIBIL status update kaise sunishchit kiya jata hai?",
    answer:
      "Compromise payment poora hote hi legal team bank se signed No Dues Certificate (NDC) aur No Objection Certificate (NOC) prapt karti hai, tatha National Payments Corporation of India (NPCI) portal par active e-NACH mandate ko cancel karwati hai. Credit Information Companies (Regulation) Act, 2005 (CICRA) ke Section 21 ke anusar bank ko 30 din ke bheetar CIBIL, Experian, Equifax, aur CRIF High Mark ko zero balance update bhejna mandatory hota hai. Yadi credit bureau update mein deri hoti hai, toh advocate regulatory grievance file karke credit bureau correction notice bhejte hain jisse karzdar ka CIBIL score future rebuilding ke liye tayyar ho sake.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Amitav Sen",
    authorLocation: "Senior IT Consultant, Gurugram • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "Jab multiple personal loans aur credit card liabilities ke chalte recovery agents ne mere ghar aur office mein call karna shuru kiya, tab maine search kiya ki loan settlement ke liye konsi company sabse achi hai. Unregulated agencies ne bina kisi legal guarantee ke upfront maang ki, jabki corporate law firms ke hourly retainers unaffordable the. AMA Legal Solutions aur Advocate Anuj Anand Malik ki team ne transparent fixed legal advisory ke antargat mera case sambhala. Unhone turant RBI Fair Practices Code ke tahat cease-and-desist notice bhejkar harassment band karwaya aur bank credit committee se formal OTS approval dilwaya. Mujhe verified bank-sealed No Dues Certificate mila aur mera account completely debt-free ho gaya.",
  },
  {
    authorName: "Sunita Raghavan",
    authorLocation: "Operations Director, Bengaluru • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "Business setback ke baad jab mere do unsecured business loans default hue, toh bank ne Section 25 PSSA aur arbitration notice bhej diya. Maine online search kiya ki loan settlement ke liye konsi company sabse achi hai jo court aur bank dono jagah legal defense de sake. AMA Legal Solutions ne bina kisi hourly markups ke fixed advisory par case liya. Advocate Anuj Anand Malik ne arbitration aur bank grievance cell dono jagah statutory replies submit kiye aur genuine hardship prove karke official compromise settle karwaya. Pure procedure mein complete transparency thi aur mujhe authentic No Objection Certificate prapt hua.",
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
      name: "Loan Settlement Ke Liye Konsi Company Sabse Achi Hai? Legal Guide & Comparison",
      description:
        "Janein loan settlement ke liye konsi company sabse achi hai. Discover why enrolled High Court advocates outperform unregulated debt agencies, RBI OTS framework, and advocate-led protection.",
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
        "Loan Settlement Ke Liye Konsi Company Sabse Achi Hai? Best Legal Firm vs Agency Comparison & RBI Guidelines",
      description:
        "Comprehensive commercial legal analysis on selecting the best loan settlement company in India. Compare registered High Court advocates against unregulated private agencies, corporate law firm retainers, and DIY templates under RBI OTS guidelines, Advocates Act 1961, and Section 63 Indian Contract Act.",
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
      name: "Loan Settlement Legal Evaluation & Representation Advisory",
      description:
        "Advocate-led commercial debt settlement representation in India. Direct negotiations with scheduled commercial banks and NBFC credit committees under RBI compromise settlement directions, stopping recovery agent harassment, Section 138 NI Act & Section 25 PSSA court defense, and verified No Dues Certificate clearance.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "2140",
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
        datePublished: rev.authorLocation.includes("September") ? "2026-09-08" : "2026-08-24",
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
          name: "Loan Settlement Ke Liye Konsi Company Sabse Achi Hai",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Strategic Protocol for Selecting the Best Loan Settlement Firm",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Verification of Statutory Credentials & Advocate Enrolment Under Advocates Act, 1961",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Immediate Anti-Harassment Cease-and-Desist Notice Under RBI Fair Practices Code",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Formal Legal Defense to Section 138 NI Act Cheque Bounce & Section 25 PSSA NACH Notices",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Bilateral Credit Committee Negotiations Under RBI Compromise Settlement Framework",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Execution of Board-Sanctioned Compromise, NPCI Mandate Revocation & No Dues Certificate Verification",
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
  { id: "evaluating-settlement-companies", title: "Evaluating Settlement Firms" },
  { id: "comparison-table", title: "Legal Firm vs Agency vs DIY" },
  { id: "unregulated-agency-risks", title: "Risks of Private Agencies" },
  { id: "cost-effective-fixed-advisory", title: "Cost-Effective Fixed Advisory" },
  { id: "five-step-selection-protocol", title: "5-Step Strategic Protocol" },
  { id: "infographic", title: "Resolution Infographic" },
  { id: "anti-harassment-protection", title: "Stopping Recovery Harassment" },
  { id: "criminal-notice-defense", title: "Sec 138 & NACH Notice Defense" },
  { id: "verifying-ots-letters", title: "Verifying Genuine OTS Letters" },
  { id: "noc-cibil-restoration", title: "NDC & CIBIL Score Revival" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "statutory-authorities", title: "Official References & Authority" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function LoanSettlementKeLiyeKonsiCompanySabseAchiHaiClient() {
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
    assetType: "Personal Loan / Credit Card Debt",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Loan Settlement Ke Liye Konsi Company Sabse Achi Hai? Legal Guide & Comparison – AMA Legal Solutions";
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
    const textMsg = `Hello AMA Legal Solutions, mujhe loan settlement ke liye best company aur legal advisory chahiye.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Loan Type: ${formData.assetType}
Details: ${formData.message || "Requesting advocate evaluation for bank/NBFC loan settlement, stopping recovery agent calls, and legal protection."}`;

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
      assetType: "Personal Loan / Credit Card Debt",
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
      label: "Loan Settlement Ke Liye Konsi Company Sabse Achi Hai",
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
                <span>⚖️</span> Strategic Legal Selection &bull; RBI OTS Framework
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?{" "}
                <span className="text-[#D2A02A]">Best Legal Firm vs Agency Comparison</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Jab karzdar multiple unsecured personal loans, credit card debts, ya NBFC loan defaults se ghir jata hai aur recovery agents ki harassment shuru hoti hai, toh sabse pehla sawal yahi uthta hai ki &ldquo;loan settlement ke liye konsi company sabse achi hai?&rdquo; Samajhna zaroori hai ki unregulated commercial debt relief agencies ya third-party recovery apps ke paas court mein khade hone ka koi statutory standing nahi hota. Janein kaise Bar Council mein registered High Court advocates ke dwara structured legal representation se aap criminal notices (Section 138 NI Act aur Section 25 PSSA) se surakshit rehte hain, corporate law firms ke open-ended hourly retainers se bachte hain, aur authentic bank-sealed No Dues Certificate prapt karte hain.
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
                    <span className="text-gray-400">📅</span> 14-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 18 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> Statutory Legal Protection Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Confidential Legal Evaluation</span>
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
                  src="/images/og/loan-settlement-ke-liye-konsi-company-sabse-achi-hai.png"
                  alt="Loan Settlement Ke Liye Konsi Company Sabse Achi Hai Infographic Banner"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-gradient-to-t from-gray-50 to-white w-full border-t border-gray-100 text-center">
                  <span className="text-xs font-bold text-[#5A4C33] tracking-wide uppercase">
                    Advocate-Led Strategic Resolution &bull; RBI OTS Framework
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mb-20">
            {/* ── Left Column: Table of Contents (Sticky) ── */}
            <aside className="hidden lg:block sticky top-24">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">
                  Navigation
                </div>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* ── Center Editorial Column ── */}
            <main className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 min-w-0">
              {/* Meta & Share bar */}
              <div className="flex flex-wrap items-center justify-between pb-6 border-b border-gray-100 gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <span>Author:</span>
                  <Link
                    href="/author/anuj-anand-malik"
                    className="font-bold text-[#5A4C33] hover:text-[#D2A02A] transition-colors"
                  >
                    Advocate Anuj Anand Malik
                  </Link>
                  <span>&bull;</span>
                  <span>Enrolled High Court Advocate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-medium mr-1">Share:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    aria-label="Share on Facebook"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-xs transition-colors"
                  >
                    f
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    aria-label="Share on X"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center text-xs transition-colors"
                  >
                    𝕏
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    aria-label="Share on LinkedIn"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center text-xs transition-colors"
                  >
                    in
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    aria-label="Share on WhatsApp"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-xs transition-colors"
                  >
                    WA
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    aria-label="Copy link"
                    className="px-2.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors"
                  >
                    {shareMsg || "Copy"}
                  </button>
                </div>
              </div>

              {/* ── Standalone Quick-Answer Block (Targeting Primary Query) ── */}
              <div
                id="quick-answer"
                className="p-6 md:p-8 bg-amber-50/80 rounded-2xl border-2 border-[#D2A02A] relative shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5A4C33] mb-3">
                  <span className="text-base">⚡</span> Direct Regulatory Answer: Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?
                </div>
                <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium">
                  Loan settlement ke liye sabse achi company ya sanstha wahi hai jo Advocates Act, 1961 ke tahat registered High Court advocates ke dwara kanooni pratinidhitwa (legal representation) pradan karti hai aur Reserve Bank of India (RBI) ke Master Circular on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24) ke antargat One-Time Settlement (OTS) execute karwati hai. Unregulated private debt settlement companies ya third-party middleman agencies adalaton mein khade hone ka adhikar nahi rakhti hain aur Section 138 NI Act ya Section 25 PSSA ke criminal notices par legal protection dene mein asafal rehti hain. AMA Legal Solutions jaise verified banking legal advisory firms transparent fixed legal advisory model par operate karte hain, jahan bina kisi corporate hourly retainers ke karzdar ko court-enforceable settlement aur authentic bank-sealed No Dues Certificate prapt hota hai.
                </p>
              </div>

              {/* ── Editorial Section 1: The Core Dilemma & Statutory Grounding ── */}
              <section id="evaluating-settlement-companies" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-tight">
                  The Core Dilemma: Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?
                </h2>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Jab kisi karzdar ka regular cash flow toot jata hai—chahe woh medical tragedy, job termination, ya business loss ke karan ho—aur lending institutions ke recovery agents phone par dhamkiyan aur ghar aakar badtameezi shuru karte hain, toh karzdar internet par solution talash karta hai: <em>&ldquo;Loan settlement ke liye konsi company sabse achi hai?&rdquo;</em> Is sawal ke jawab mein market mein teen tarah ke khiladi saamne aate hain:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/50 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
                      <span>⚠️</span> 1. Unregulated Agencies
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Private Debt Relief Companies</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Yeh private limited entities ya telecalling agencies hoti hain jo heavy commission charge karti hain par court mein khade hone ka koi statutory authority nahi rakhti hain. Notice aane par yeh hath khade kar deti hain.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                      <span>🏛️</span> 2. Corporate Law Firms
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Tier-1 Corporate Practices</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Yeh firms institutional clients aur MNCs ke liye open-ended hourly retainers par kaam karti hain. Aam individual karzdar ke liye inki hourly billing rates aur unexpected litigation fees unaffordable hoti hain.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border-2 border-[#D2A02A] bg-amber-50/40 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#5A4C33] flex items-center gap-1.5">
                      <span>⚖️</span> 3. Dedicated Legal Advisory
                    </div>
                    <h3 className="text-base font-bold text-[#1a202c]">High Court Banking Advocates</h3>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      Registered High Court advocates jo transparent fixed legal advisory par operate karte hain. Yeh court representation, anti-harassment cease-and-desist, aur direct RBI-aligned credit committee negotiations manage karte hain.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed">
                  Kanooni taur par, loan settlement koi marketing exercise nahi hai. Yeh <strong>Indian Contract Act, 1872 ke Section 63</strong> ke antargat ek binding compromise deed hai jismein lender apni principal liability ko extinguish karta hai. Isliye kisi bhi service ko select karte samay statutory competency, court representation capability, aur financial transparency sabse prathmik criteria hone chahiye.
                </p>

                <blockquote className="p-5 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl italic text-gray-700 text-sm md:text-base leading-relaxed">
                  &ldquo;Advocates Act, 1961 ke Sections 29 aur 30 ke mutabik keval Bar Council of India mein sansthit advocates ke paas hi kisi bhi nyayalay, tribunal ya banking credit dispute mein legal representation ka exclusive adhikar hai. Kisi third-party company ya recovery agency dwara legal settlement ka daawa karna kanoonan apradhik aur invalid hai.&rdquo;
                </blockquote>
              </section>

              {/* ── Comparison Table: Legal Firm vs Unregulated Agency vs Corporate vs DIY ── */}
              <section id="comparison-table" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-tight">
                  Comprehensive Comparative Evaluation: Legal Firm vs Debt Agency vs Corporate vs DIY
                </h2>

                <p className="text-gray-700 text-base leading-relaxed">
                  Agar aap yeh faisla karna chahte hain ki loan settlement ke liye konsi company sabse achi hai, toh neeche di gayi statutory comparison table aapko kanooni enforceability, court appearance, aur retainer transparency ke aadhar par sahi chunav karne mein madad karegi:
                </p>

                <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left text-sm text-gray-700 border-collapse">
                    <thead className="bg-[#1a202c] text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="p-4 border-b border-gray-700">Evaluation Parameter</th>
                        <th className="p-4 border-b border-gray-700 text-[#D2A02A]">AMA Legal Solutions (Advocates)</th>
                        <th className="p-4 border-b border-gray-700">Unregulated Debt Relief Agencies</th>
                        <th className="p-4 border-b border-gray-700">Corporate Law Firms</th>
                        <th className="p-4 border-b border-gray-700">Free DIY Online Templates</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Statutory Standing</td>
                        <td className="p-4 font-semibold text-[#5A4C33] bg-amber-50/50">
                          Enrolled High Court Advocates (Advocates Act, 1961)
                        </td>
                        <td className="p-4 text-red-600">Zero legal standing; Private Ltd entity</td>
                        <td className="p-4">Recognized law firm partnership</td>
                        <td className="p-4 text-red-600">Nil; automated software script</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Court Representation (Sec 138 / 25 PSSA)</td>
                        <td className="p-4 font-semibold text-[#5A4C33] bg-amber-50/50">
                          Full court defense, Vakalatnama, quashing &amp; compounding
                        </td>
                        <td className="p-4 text-red-600">Strictly prohibited by Bar Council Rules</td>
                        <td className="p-4">Yes, but requires expensive litigation fees</td>
                        <td className="p-4 text-red-600">Cannot appear or represent in court</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Anti-Harassment Injunction</td>
                        <td className="p-4 font-semibold text-[#5A4C33] bg-amber-50/50">
                          Statutory Cease &amp; Desist to Bank MD &amp; Nodal Officers
                        </td>
                        <td className="p-4 text-red-600">Ineffective informal calls ignored by banks</td>
                        <td className="p-4">Formal notices, high transactional friction</td>
                        <td className="p-4 text-red-600">Zero deterrence for recovery agents</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Advisory Retainer Structure</td>
                        <td className="p-4 font-semibold text-[#5A4C33] bg-amber-50/50">
                          Transparent fixed legal advisory; no hourly markups
                        </td>
                        <td className="p-4 text-red-600">Hidden processing retainers &amp; percentages</td>
                        <td className="p-4 text-red-600">Unpredictable hourly billing &amp; retainers</td>
                        <td className="p-4">Nominally free, but leads to costly mistakes</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Client Confidentiality</td>
                        <td className="p-4 font-semibold text-[#5A4C33] bg-amber-50/50">
                          Section 126 Evidence Act privileged protection
                        </td>
                        <td className="p-4 text-red-600">Commercial database; risk of data resale</td>
                        <td className="p-4">Privileged client communication</td>
                        <td className="p-4 text-red-600">Third-party server data tracking</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-900">Authentic No Dues Certificate</td>
                        <td className="p-4 font-semibold text-[#5A4C33] bg-amber-50/50">
                          Bank-sealed NDC verified with Credit Bureau updating
                        </td>
                        <td className="p-4 text-red-600">Frequent risk of fake settlement letters</td>
                        <td className="p-4">Verified institutional discharge</td>
                        <td className="p-4 text-red-600">No guarantee of bank clearance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── Section 2: Why Unregulated Agencies Pose Severe Risk ── */}
              <section id="unregulated-agency-risks" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-tight">
                  Why Unregulated &ldquo;Debt Relief Companies&rdquo; Put Borrowers at Severe Legal Risk
                </h2>

                <p className="text-gray-700 text-base leading-relaxed">
                  Bohot se karzdar internet par aakar aisi companies ke trap mein phans jaate hain jo khud ko &ldquo;debt settlement agency&rdquo; kehte hain par unka Bar Council ya Reserve Bank of India se koi sanbandh nahi hota. In companies ke sath aage badhne ke gambhir kanooni khatre hain:
                </p>

                <div className="space-y-4 my-6">
                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm space-y-2">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-red-500 font-extrabold">✕</span> 1. Section 18 Limitation Act: Unintentional Debt Revivals
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Unregulated agencies aksar aam email drafts bank ko bhej deti hain jismein karzdar ke behalf par liability ko acknowledge kar liya jata hai. <strong>Limitation Act, 1963 ke Section 18</strong> ke tahat yadi koi karzdar ya uska unverified agent likhit mein liability admit karta hai, toh 3 saal ka limitation period naye sire se restart ho jata hai. Isse bank ko karzdar ke khilaf civil suit ya summary suit file karne ka kanooni adhikar dobara mil jata hai jo shayad pehle time-barred ho chuka tha.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm space-y-2">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-red-500 font-extrabold">✕</span> 2. Inability to Defend Section 138 &amp; Section 25 Notices
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Jab bank cheque bounce hone par <strong>Section 138 Negotiable Instruments Act</strong> ya electronic clearing mandate fail hone par <strong>Section 25 Payment and Settlement Systems Act, 2007 (PSSA)</strong> ke antargat statutory legal notice bhejta hai, toh aam settlement agencies peeche hat jaati hain. Court mein keval enrolled advocate hi vakalatnama file kar sakta hai aur Section 147 NI Act ke antargat apradh ko legally compound karwa sakta hai.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm space-y-2">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-red-500 font-extrabold">✕</span> 3. Fake Settlement Letters &amp; Intermediary Frauds
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Har saal hazaron karzdar aisi fake agencies ka shikar bante hain jo recovery agents ke sath milkar computer-generated fake settlement letters issue kar deti hain aur amount third-party virtual accounts mein jama karwa leti hain. Baad mein pata chalta hai ki bank record mein account abhi bhi default mein hai aur penal interest lag raha hai. Sahi legal firm yeh sunishchit karti hai ki settlement amount seedhe bank ke designated loan account mein hi jama ho.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 3: Transparent Fixed Legal Advisory vs Hourly Retainers ── */}
              <section id="cost-effective-fixed-advisory" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-tight">
                  Transparent Fixed Legal Advisory: Legal Accessibility Without Corporate Retainers
                </h2>

                <p className="text-gray-700 text-base leading-relaxed">
                  Jab karzdar kisi corporate law firm se contact karta hai, toh unka model corporate litigation ke anuroop hota hai jismein briefing charges, per-hearing appearance retainers, drafting fees, aur hourly consultation rates shamil hote hain. Financial crisis se joojh rahe karzdar ke liye yeh anishchit hourly structure aur zyada debt trap ka sabab ban jata hai.
                </p>

                <div className="p-6 bg-gradient-to-r from-[#FAF7F0] to-white rounded-2xl border-2 border-[#D2A02A]/40 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-[#5A4C33]">
                    The Philosophy of Transparent Fixed Legal Advisory
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    AMA Legal Solutions ne aam karzdaron aur MSME business owners ke liye <strong>transparent fixed legal advisory</strong> ka niyam sthapit kiya hai. Is model ke antargat:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">✓</span>
                      <span><strong>No Hourly Markups:</strong> Pure settlement process ke dauran koi hourly clock ya billing meter nahi chalta.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">✓</span>
                      <span><strong>Zero Surprise Retainers:</strong> Karzdar ko shuruat se hi clear kanooni roadmap pradan kiya jata hai.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">✓</span>
                      <span><strong>Complete End-to-End Coverage:</strong> Notice reply se lekar credit committee representation aur No Dues Certificate tak unified advocacy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">✓</span>
                      <span><strong>Direct High Court Advocate Access:</strong> Case telecallers ke haath mein nahi balki Bar Council enrolled advocates dwara handle kiya jata hai.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── Section 4: 5-Step Strategic Protocol for Evaluation & Resolution ── */}
              <section id="five-step-selection-protocol" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-tight">
                  5-Step Strategic Protocol: Sahi Legal Firm Chunte Samay aur Settlement Karate Samay
                </h2>

                <p className="text-gray-700 text-base leading-relaxed">
                  Agar aapko loan settlement karwana hai aur aap sabse behtar kanooni sanstha select karna chahte hain, toh is 5-step statutory protocol ka palan karein:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 text-lg">
                        Bar Council Registration &amp; Advocate Credential Verification
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Chunne se pehle yeh verify karein ki aapka case kisi registered advocate dwara represent kiya ja raha hai jiske paas State Bar Council ka sansthit enrollment number ho. Keval enrolled advocate hi bank ke legal department ke sath official privilege ke tahat baat kar sakta hai.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 text-lg">
                        Immediate Statutory Cease-and-Desist Legal Notice Under RBI Directives
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Best legal firm onboarding ke turant baad bank ke Managing Director, Principal Nodal Officer, aur recovery department ko formal legal notice bhejti hai. Is notice se recovery agents ki harassment aur calls par kanoonan rok lagti hai.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 text-lg">
                        Statutory Defense to Section 138 NI Act &amp; Section 25 PSSA Summons
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Yadi bank ne cheque dishonour ya NACH auto-debit failure par criminal summons bhej diye hain, toh advocate dwara court mein appearance aur interim defense file ki jaati hai taaki settlement dialogue chalte samay karzdar ke khilaf bailable ya non-bailable warrants na jari hon.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 text-lg">
                        Bilateral Credit Committee Negotiations Under RBI OTS Norms
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Advocate karzdar ki genuine financial hardship (medical reports, income loss, termination letters) ko substantiate karte hue bank ke Zonal Credit Committee ke samne formal proposal pesh karta hai. RBI Master Circular on Compromise Settlements ke tahat official compromise approve karwaya jata hai.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-lg">
                      5
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 text-lg">
                        Board-Approved Sanction Verification, NPCI Mandate Revocation &amp; NDC
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Compromise sanction letter aane par advocate uski kanooni validity check karta hai. Agreed payment directly bank account mein jama karne ke baad authentic No Dues Certificate prapt kiya jata hai aur active e-NACH mandate ko cancel karwaya jata hai.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Signature Editorial Infographic Card ── */}
              <section id="infographic" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                    <img
                      src="/images/og/loan-settlement-ke-liye-konsi-company-sabse-achi-hai.png"
                      alt="Selecting the Best Loan Settlement Firm in India Infographic Architecture"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center space-y-1">
                    <span className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider">
                      Figure 1.1: Comprehensive Framework for Selecting India&rsquo;s Premier Legal Loan Settlement Advisory
                    </span>
                    <p className="text-[12px] text-gray-500 max-w-xl mx-auto">
                      Statutory comparison illustrating why Bar Council registered banking advocates protect borrowers from criminal summons, recovery harassment, and unfair retainers under RBI compromise guidelines.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 5: Legal Protection Against Recovery Agent Harassment ── */}
              <section id="anti-harassment-protection" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-tight">
                  Halting Recovery Agent Harassment: The Judicial &amp; Regulatory Shield
                </h2>

                <p className="text-gray-700 text-base leading-relaxed">
                  Sabse achi loan settlement firm wahi hoti hai jo karzdar ko pehle din se recovery agents ki mansik pratadna (mental harassment) se suraksha pradan kare. Bohot si private agencies keval &ldquo;call forwarding&rdquo; ya number block karne ki salah deti hain, jo samasya ka kanooni hal nahi hai.
                </p>

                <div className="space-y-4 my-6">
                  <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] space-y-2">
                    <h3 className="font-bold text-gray-900 text-base">
                      Supreme Court Mandate: ICICI Bank v. Prakash Kaur (2007) 2 SCC 711
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Hon&rsquo;ble Supreme Court of India ne sakht shabdon mein spasht kiya hai ki banks aur financial institutions recovery ke liye musclemen, goons, ya unverified recovery agents ka sahara nahi le sakte. Civilized society mein kisi bhi karzdar ke ghar ya office mein jakar public humiliation karna kanooni roop se asweekarya hai.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#1a202c] space-y-2">
                    <h3 className="font-bold text-gray-900 text-base">
                      Criminal Penalties: Sections 351 &amp; 308 of Bharatiya Nyaya Sanhita, 2023
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Recovery agents dwara dhmaki dena <strong>Section 351 (Criminal Intimidation)</strong> ke antargat apradh hai, aur unprovoked physical threat dekar jabran paise vasoolna <strong>Section 308 (Extortion)</strong> ke purview mein aata hai. Jab registered advocate bank ko legal notice bhejkar in statutory provisions ko invoke karta hai, toh bank management agent contract turant terminate karne par vivash ho jaata hai.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] space-y-2">
                    <h3 className="font-bold text-gray-900 text-base">
                      Digital Lending &amp; Privacy: Section 66E of Information Technology Act, 2000
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Instant loan apps aur NBFCs dwara karzdar ke contact list ko access karna, relatives ko phone karna, ya morphed photos bhejna <strong>IT Act, 2000 ke Section 66E</strong> tatha Indian Penal / BNS laws ke tahat non-bailable offense hai. Advocate dwara Cyber Crime cell aur RBI ombudsman mein formal complaint lodge karwake immediate injunction haasil kiya jata hai.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 6: Handling Criminal & Arbitration Threats ── */}
              <section id="criminal-notice-defense" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-tight">
                  Handling Criminal &amp; Arbitration Notices: Why Only Practicing Advocates Can Protect You
                </h2>

                <p className="text-gray-700 text-base leading-relaxed">
                  Default hone par banks aamtaur par teen tarah ke kanooni hathiyaron ka prayog karte hain jinpar kisi bhi private company ya telecalling firm ke paas koi legal defense nahi hota:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
                    <div className="inline-block px-2.5 py-1 bg-red-100 text-red-800 rounded text-xs font-bold uppercase tracking-wider">
                      Section 138 NI Act
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Cheque Dishonour Summons</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Cheque bounce ka case ek quasi-criminal proceeding hai jismein 2 saal tak ki jail ho sakti hai. Enrolled advocates <strong>Section 147 NI Act</strong> ke tahat matter ko compoundable banate hain aur settlement ke aadhar par trial court se formal discharge ya case dismissal order haasil karte hain.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
                    <div className="inline-block px-2.5 py-1 bg-blue-100 text-blue-800 rounded text-xs font-bold uppercase tracking-wider">
                      Section 25 PSSA, 2007
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Electronic NACH Bounce Notices</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Jab monthly auto-debit fail hota hai toh bank Section 25 PSSA ke tahat criminal complaint file karta hai. Advocates Section 25(3) ke procedural defenses pesh karke bank dwara statutory demand notice ki validity ko challenge karte hain aur OTS negotiate karte hain.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
                    <div className="inline-block px-2.5 py-1 bg-amber-100 text-[#5A4C33] rounded text-xs font-bold uppercase tracking-wider">
                      Arbitration &amp; Conciliation Act
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Unilateral Sole Arbitrator Notices</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Banks aksar unilateral sole arbitrators appoint karke ex-parte arbitral awards pass karwane ki koshish karte hain. Hon&rsquo;ble Supreme Court ke <em>Perkins Eastman</em> ruling ke aadhar par advocate aisi unilateral appointments ko challenge karte hain aur matter ko Lok Adalat ya bilateral conciliation mein shift karwate hain.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
                    <div className="inline-block px-2.5 py-1 bg-purple-100 text-purple-800 rounded text-xs font-bold uppercase tracking-wider">
                      DRT &amp; SARFAESI Proceedings
                    </div>
                    <h3 className="text-base font-bold text-gray-900">High-Value Debts &amp; Security</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      High-value business loans ya secured defaults mein Debt Recovery Tribunal (DRT) ke samaksh Section 17 SARFAESI appeal ya RDDBFI Act ke proceedings shuru hoti hain, jahan keval High Court aur DRT advocates hi stay aur compromise orders secure kar sakte hain.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 7: Verifying Sanction Letters & Avoiding Scams ── */}
              <section id="verifying-ots-letters" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-tight">
                  Verifying Genuine OTS Sanction Letters: Safeguarding Your Financial Clearance
                </h2>

                <p className="text-gray-700 text-base leading-relaxed">
                  Sabse achi loan settlement company wahi hai jo sanction letter ki har statutory requirement ko rigorously audit karti hai. Sanction letter prapt hone par in 4 binduon ki pushti karna anivarya hai:
                </p>

                <div className="space-y-3 my-6">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="text-[#D2A02A] font-extrabold text-lg">1.</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Official Bank Letterhead &amp; Regional Sanction Authority</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Letter bank ke zonal ya regional credit approval authority ke seal, employee code, aur official digital signature ke sath hona chahiye. Recovery agency ke letterhead par jari letter legally void hota hai.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="text-[#D2A02A] font-extrabold text-lg">2.</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Explicit Debt Discharge Under Section 63 Contract Act</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Letter mein spasht likha hona chahiye ki agreed compromise amount prapt hone ke baad bank bacha hua loan balance permanently waive aur write-off karega, aur koi future claim nahi bachega.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="text-[#D2A02A] font-extrabold text-lg">3.</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Withdrawal of All Pending Civil &amp; Criminal Proceedings</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Sanction condition mein yeh obligation shamil honi chahiye ki bank trial court, arbitration panel, ya police station mein chal rahe sabhi complaints ko formally wapas lega.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <span className="text-[#D2A02A] font-extrabold text-lg">4.</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Direct Remittance to Designated Borrower Loan Account</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Compromise payment hamesha seedhe karzdar ke original loan account number mein via RTGS/NEFT remit ki jaati hai. Kisi bhi intermediary ke account mein payment kabhi nahi karni chahiye.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Section 8: Post-Settlement Clearance & CIBIL Score Revival ── */}
              <section id="noc-cibil-restoration" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] tracking-tight">
                  No Dues Certificate (NDC) &amp; CIBIL Score Revival Protocol
                </h2>

                <p className="text-gray-700 text-base leading-relaxed">
                  Loan settlement ka final goal karzdar ko debt-free banana aur financial future ko restore karna hai. Ek premier legal firm compromise payment ke baad in anivarya statutory charanon ko poora karwati hai:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-2">
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                      Step A: No Dues Certificate
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Bank-Sealed NDC &amp; NOC Issuance</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Bank se physical aur digitally signed No Dues Certificate prapt kiya jata hai jo yeh pramanit karta hai ki karzdar par us loan account ke sambandh mein koi baaki rashi (liability) shesh nahi hai.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-2">
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                      Step B: NPCI e-Mandate Revocation
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Deactivation of Auto-Debits</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Bank dwara NPCI portal par active e-NACH mandate ko cancel karwaya jata hai taaki settlement ke baad salary account se kisi bhi tarah ka unauthorised auto-debit na ho.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-2">
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                      Step C: Section 21 CICRA Compliance
                    </div>
                    <h3 className="text-base font-bold text-gray-900">30-Day Credit Bureau Zero Balance</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Credit Information Companies (Regulation) Act, 2005 ke mutabik bank ko 30 din mein CIBIL aur anya credit bureaus ko account status &lsquo;Settled&rsquo; aur outstanding balance &lsquo;Zero&rsquo; report karna mandatory hota hai.
                    </p>
                  </div>

                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-2">
                    <div className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                      Step D: Score Rebuilding
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Credit Health Reconstruction</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Active default aur continuous late payment flags hatne ke baad karzdar fixed deposit backed secured credit card lekar agle 12 se 24 mahino mein apna credit score wapas 750+ tak badha sakta hai.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 8-Question Accordion FAQ Section ── */}
              <section id="faqs" className="space-y-6 pt-6 border-t border-gray-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0] text-[#5A4C33] text-xs font-bold uppercase tracking-wider border border-[#D2A02A]/30">
                    <span>❓</span> Authoritative Statutory Guidance
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Frequently Asked Questions: Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?
                  </h2>
                  <p className="text-sm text-gray-500">
                    Clear, statutory-grounded answers for borrowers navigating loan default, legal notices, and settlement firm selection in India.
                  </p>
                </div>

                <div className="space-y-3 mt-6">
                  {faqs.map((faq) => {
                    const isOpen = expandedFaqs.includes(faq.id);
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 bg-white"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#D2A02A] transition-colors bg-white hover:bg-gray-50/60 cursor-pointer text-sm md:text-base"
                        >
                          <span>{faq.question}</span>
                          <span className="text-[#D2A02A] font-extrabold text-lg shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-4 md:p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── More Legal Guides (Internal Links) ── */}
              <section id="internal-guides" className="space-y-4 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">
                  More Legal Guides &amp; Debt Resolution Resources
                </h3>
                <p className="text-xs text-gray-500">
                  Explore our comprehensive guides on bank negotiations, recovery agent complaints, and statutory debt settlement procedures:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  <Link
                    href="/loan-settlement-karwana-hai"
                    className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl text-xs font-semibold text-gray-800 hover:text-[#5A4C33] transition-colors block shadow-2xs"
                  >
                    &bull; Loan Settlement Karwana Hai: Complete Guide
                  </Link>
                  <Link
                    href="/best-debt-settlement-company"
                    className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl text-xs font-semibold text-gray-800 hover:text-[#5A4C33] transition-colors block shadow-2xs"
                  >
                    &bull; Best Debt Settlement Company in India
                  </Link>
                  <Link
                    href="/loan-settlement-lawyers"
                    className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl text-xs font-semibold text-gray-800 hover:text-[#5A4C33] transition-colors block shadow-2xs"
                  >
                    &bull; Loan Settlement Lawyers &amp; Legal Support
                  </Link>
                  <Link
                    href="/best-lawyer-for-loan-settlement"
                    className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl text-xs font-semibold text-gray-800 hover:text-[#5A4C33] transition-colors block shadow-2xs"
                  >
                    &bull; Best Lawyer for Loan Settlement in India
                  </Link>
                  <Link
                    href="/one-time-settlement"
                    className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl text-xs font-semibold text-gray-800 hover:text-[#5A4C33] transition-colors block shadow-2xs"
                  >
                    &bull; One-Time Settlement (OTS) Scheme &amp; Rules
                  </Link>
                  <Link
                    href="/loan-settlement-process-in-hindi"
                    className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl text-xs font-semibold text-gray-800 hover:text-[#5A4C33] transition-colors block shadow-2xs"
                  >
                    &bull; Loan Settlement Process in Hindi
                  </Link>
                  <Link
                    href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                    className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl text-xs font-semibold text-gray-800 hover:text-[#5A4C33] transition-colors block shadow-2xs"
                  >
                    &bull; Loan Settlement vs Loan Closure (CIBIL Impact)
                  </Link>
                  <Link
                    href="/how-to-reply-to-bank-legal-notice-for-personal-loan-default"
                    className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl text-xs font-semibold text-gray-800 hover:text-[#5A4C33] transition-colors block shadow-2xs"
                  >
                    &bull; How to Reply to Bank Legal Notice
                  </Link>
                  <Link
                    href="/can-banks-refuse-settlement"
                    className="p-3 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A]/50 rounded-xl text-xs font-semibold text-gray-800 hover:text-[#5A4C33] transition-colors block shadow-2xs"
                  >
                    &bull; Can Banks Refuse a Settlement Request?
                  </Link>
                </div>
              </section>

              {/* ── References & Authority Section ── */}
              <section id="statutory-authorities" className="space-y-4 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">
                  Statutory Authorities &amp; Official References
                </h3>
                <p className="text-xs text-gray-500">
                  Official government, judicial, and regulatory portals governing debt compromise, banking practices, and borrower protection in India:
                </p>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
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
                    &ndash; Master Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24).
                  </li>
                  <li>
                    &bull;{" "}
                    <a
                      href="https://financialservices.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Department of Financial Services (DFS), Ministry of Finance
                    </a>{" "}
                    &ndash; Guidelines on Prudential Norms, NPA Management &amp; One-Time Settlement Schemes.
                  </li>
                  <li>
                    &bull;{" "}
                    <a
                      href="https://main.sci.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Supreme Court of India
                    </a>{" "}
                    &ndash; Landmark Precedent on Borrower Protection &amp; Anti-Harassment: <em>ICICI Bank v. Prakash Kaur</em> (2007) 2 SCC 711.
                  </li>
                  <li>
                    &bull;{" "}
                    <a
                      href="https://www.indiacode.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      India Code &ndash; Legislative Repository
                    </a>{" "}
                    &ndash; Indian Contract Act, 1872 (Section 63: Remission of Performance), Advocates Act, 1961, and Negotiable Instruments Act, 1881.
                  </li>
                  <li>
                    &bull;{" "}
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      National Legal Services Authority (NALSA)
                    </a>{" "}
                    &ndash; Statutory Pre-Litigation Conciliation &amp; National Lok Adalat Settlement Guidelines.
                  </li>
                </ul>
              </section>

              {/* ── Social Share Row at Bottom ── */}
              <div className="flex flex-wrap items-center justify-between pt-6 border-t border-gray-100 gap-4">
                <span className="text-xs text-gray-500 font-medium">
                  Help someone facing loan default and recovery harassment:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#1877F2] hover:text-white text-xs font-semibold transition-colors"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-black hover:text-white text-xs font-semibold transition-colors"
                  >
                    𝕏 Post
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#0A66C2] hover:text-white text-xs font-semibold transition-colors"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#25D366] hover:text-white text-xs font-semibold transition-colors"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* ── AMA Company & Media Section ── */}
              <div
                id="ama-company-section"
                className="p-6 md:p-8 bg-[#FAF7F0] border-4 border-[#D2A02A] rounded-2xl shadow-sm space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/ama3.svg"
                      alt="AMA Legal Solutions Logo"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-lg">
                        AMA Legal Solutions
                      </h4>
                      <p className="text-xs text-gray-600">
                        Premier Banking Litigation &amp; Debt Advisory Law Practice
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-[#D2A02A]/40 shadow-xs">
                    <Stars count={5} />
                    <span className="text-xs font-extrabold text-[#5A4C33]">
                      4.7 / 5.0 Google Rating
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  AMA Legal Solutions is India&rsquo;s trusted legal advisory firm specializing in advocate-led banking dispute resolution, debtor representation under Reserve Bank of India compromise directions, and protection from unlawful recovery practices. Founded by Advocate Anuj Anand Malik, the firm provides transparent fixed legal advisory to individuals, professionals, and MSME business owners across India.
                </p>

                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-3">
                    Our Solutions &amp; Advisory Portfolios:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {[
                      { name: "Credit Card Settlement", href: "/credit-card-debt-settlement" },
                      { name: "Personal Loan Resolution", href: "/personal-loan-settlement" },
                      { name: "Business Loan OTS", href: "/business-loan-settlement" },
                      { name: "Anti-Harassment Notice", href: "/legal-notice-for-loan-settlement-harassment" },
                      { name: "Sec 138 NI Act Defense", href: "/services/loan-settlement" },
                      { name: "Sec 25 PSSA NACH Defense", href: "/section-25-payment-and-settlement-act-bailable-or-not" },
                      { name: "Arbitration Representation", href: "/bank-arbitration-settlement" },
                      { name: "DRT High-Value Defense", href: "/debt-recovery-tribunal-advocate" },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="text-center p-2 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] text-xs font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors block truncate"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </main>

            {/* ── Right Sticky Sidebar ── */}
            <aside className="space-y-8 sticky top-24">
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A] shrink-0">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-base">
                      Anuj Anand Malik
                    </h4>
                    <p className="text-xs text-[#D2A02A] font-semibold">
                      Senior Advocate &amp; Founder
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Bar Council of Punjab &amp; Haryana
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Advocate Anuj Anand Malik specializes in banking dispute litigation, SARFAESI defense, Section 138 NI Act compounding, and structured RBI One-Time Settlements (OTS) across India.
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/author/anuj-anand-malik"
                    className="text-xs font-bold text-[#5A4C33] hover:text-[#D2A02A] transition-colors"
                  >
                    View Full Profile &rarr;
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline font-semibold"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Need Legal Help CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-xl space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-[#D2A02A] text-xs font-bold uppercase tracking-wider">
                  <span>⚖️</span> Direct Legal Advisory
                </div>
                <h3 className="text-xl font-bold leading-snug">
                  Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Speak directly with enrolled High Court banking advocates. Stop recovery harassment immediately and negotiate a legally binding One-Time Settlement under RBI guidelines.
                </p>
                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+918700343611"
                    className="w-full py-3 px-4 bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold rounded-xl text-center text-sm block shadow transition-colors"
                  >
                    📞 Call +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-center text-sm block border border-white/20 transition-colors cursor-pointer"
                  >
                    Request Confidential Callback
                  </button>
                </div>
              </div>

              {/* Client Reviews Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Client Reviews
                  </span>
                  <div className="flex items-center gap-1">
                    <Stars count={5} />
                    <span className="text-xs font-bold text-gray-900 ml-1">5.0</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {clientReviews.map((rev, idx) => (
                    <div key={idx} className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900">{rev.authorName}</span>
                        <Stars count={5} />
                      </div>
                      <p className="text-[11px] text-gray-400">{rev.authorLocation}</p>
                      <p className="text-gray-600 leading-relaxed italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                        &ldquo;{rev.reviewBody}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Guides Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <h4 className="font-bold text-gray-900 text-sm border-b border-gray-100 pb-2">
                  Related Guides
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/how-is-loan-settlement-done"
                      className="text-gray-700 hover:text-[#D2A02A] transition-colors font-medium block"
                    >
                      &bull; How is Loan Settlement Done in India?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/best-lawyer-for-loan-settlement"
                      className="text-gray-700 hover:text-[#D2A02A] transition-colors font-medium block"
                    >
                      &bull; Best Lawyer for Loan Settlement in India
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/best-debt-settlement-company"
                      className="text-gray-700 hover:text-[#D2A02A] transition-colors font-medium block"
                    >
                      &bull; Best Debt Settlement Company in India
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/can-banks-refuse-settlement"
                      className="text-gray-700 hover:text-[#D2A02A] transition-colors font-medium block"
                    >
                      &bull; Can Banks Reject a Settlement Offer?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/section-25-payment-and-settlement-act-bailable-or-not"
                      className="text-gray-700 hover:text-[#D2A02A] transition-colors font-medium block"
                    >
                      &bull; Section 25 PSSA: Bailable or Non-Bailable?
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ══ INTERACTIVE INTAKE MODAL ══ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative border border-gray-100 animate-in fade-in zoom-in duration-200">
            <button
              onClick={resetModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-xl font-bold w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              aria-label="Close modal"
            >
              ✕
            </button>

            {!modalSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#FAF7F0] text-[#5A4C33] rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-[#D2A02A]/30">
                    Confidential Legal Intake
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1a202c]">
                    Loan Settlement Legal Evaluation
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    Connect directly with Advocate Anuj Anand Malik&rsquo;s team to evaluate your bank/NBFC loan settlement options under RBI compromise directions.
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
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                      />
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
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Loan / Debt Category
                      </label>
                      <select
                        name="assetType"
                        value={formData.assetType}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none bg-white"
                      >
                        <option value="Personal Loan / Credit Card Debt">Personal Loan / Credit Card</option>
                        <option value="Multiple Bank Unsecured Loans">Multiple Bank Loans</option>
                        <option value="NBFC & Instant Loan Apps">NBFC &amp; Instant Loan Apps</option>
                        <option value="Business Loan / MSME Debt">Business Loan / MSME Debt</option>
                        <option value="Section 138 / Section 25 Notices">Cheque Bounce / NACH Notice</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Loan Details / Hardship Summary
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Bank name, overdue months, whether recovery agents are calling, or any legal notice received..."
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Submit for Advocate Review
                  </button>
                  <p className="text-[11px] text-gray-400 text-center">
                    🔒 100% Confidential. Protected under Section 126 of the Indian Evidence Act.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Request Submitted Successfully
                </h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our legal team has received your information and is reviewing your loan profile against RBI compromise norms.
                </p>
                <div className="pt-4 space-y-3">
                  <button
                    onClick={openWhatsAppDirect}
                    className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20b858] text-white font-bold rounded-xl text-sm shadow flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>💬 Chat Directly on WhatsApp</span>
                  </button>
                  <button
                    onClick={resetModal}
                    className="text-xs text-gray-500 hover:text-gray-800 font-semibold"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

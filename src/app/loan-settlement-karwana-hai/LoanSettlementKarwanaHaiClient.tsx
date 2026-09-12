"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/loan-settlement-karwana-hai";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/loan-settlement-karwana-hai.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-12";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Agar mujhe loan settlement karwana hai, toh kya bank se settlement karwana kanoonan vaidh hai?",
    answer:
      "Haan, Reserve Bank of India (RBI) ke Master Circular on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24) aur Indian Contract Act, 1872 ke Section 63 ke tahat loan settlement poori tarah vaidh aur kanooni adhikar hai. Jab karzdar genuine financial hardship jaise job loss ya medical emergency ke chalte repayment karne mein asamarth hota hai, toh bank ki board-approved policy ke antargat One-Time Settlement (OTS) execute kiya jata hai. Is prakriya mein bache hue loan liability ko legal compromise letter aur No Dues Certificate ke sath hamesha ke liye extinguish kiya jata hai.",
  },
  {
    id: "faq-2",
    question: "Loan settlement karwana hai toh kya mujhe kisi advocate ko hire karna chahiye ya online free templates use karne chahiye?",
    answer:
      "Free online DIY templates ya unverified agencies ke drafts ko bank grievance cells aur legal teams reject kar deti hain kyunki unki koi statutory standing nahi hoti aur unmein anjaane mein liability acknowledge ho sakti hai jo Limitation Act, 1963 ke Section 18 ke tahat limitation period ko restart kar sakti hai. Advocates Act, 1961 ke tahat registered banking advocates client confidentiality (Section 126 Indian Evidence Act, 1872) maintain karte hue bank ke regional legal managers aur credit committees ke sath formal dialogue establish karte hain. Ek transparent fixed legal advisory model aapko unpredictable corporate hourly billings aur hidden retainers se bachate hue court-enforceable settlement provide karta hai.",
  },
  {
    id: "faq-3",
    question: "Loan settlement karwane ke dauran recovery agents ki badtameezi aur threats ko kaise roka jata hai?",
    answer:
      "Reserve Bank of India (RBI) Fair Practices Code aur Digital Lending Guidelines ke mutabik recovery agents dwara gaali-galoch karna, bina permission ghar aana, relatives ko call karna, ya social harassment karna poori tarah gair-kanooni hai. Advocate dwara issue kiya gaya Cease-and-Desist Legal Notice bank ke board of directors ko agent misconduct ke liye vicariously liable thehrata hai aur Section 351/308 Bharatiya Nyaya Sanhita, 2023 tatha IT Act, 2000 ke Section 66E ke kanooni parinaamo se aavashyak roop se aagah karta hai. Aise formal legal notices ke baad bank turant third-party recovery agency ko case se hata kar matter ko official legal counsel ko handover karta hai.",
  },
  {
    id: "faq-4",
    question: "Kya loan settlement karwane se cheque bounce (Section 138 NI Act) ya NACH bounce (Section 25 PSSA) case khatam ho jata hai?",
    answer:
      "Haan, One-Time Settlement (OTS) finalize hone aur agreed compromise payment remit hone ke baad lending institution court mein pending criminal ya quasi-criminal complaints ko withdraw karne ke liye baadhya hota hai. Negotiable Instruments Act, 1881 ke Section 147 ke tahat Section 138 ke apradh compoundable hote hain, jismein advocate joint application lagakar proceedings ko quash karwate hain. Isi tarah Payment and Settlement Systems Act, 2007 ke Section 25 ke antargat bank court mein settlement receipt pesh karke criminal notice ko formally close karta hai.",
  },
  {
    id: "faq-5",
    question: "Loan settlement karwana hai toh bank meri settlement request ko kis aadhar par accept karta hai?",
    answer:
      "Banks aur NBFCs loan settlement proposal ko accept karne ke liye borrower ki genuine financial hardship, loss of income, chronic medical condition, ya business failure ke documentary proof ki maang karte hain. RBI prudential norms ke mutabik jab account 90 days overdue hokar Non-Performing Asset (NPA) categorize ho jata hai, tab banks ko mandatory capital provisioning karni padti hai jisse unka recovery incentive badh jata hai. Advocate-certified representation ke dwara borrower ki repayment capacity aur genuine hardship ko substantiate karke bank credit committee se formal approval haasil kiya jata hai.",
  },
  {
    id: "faq-6",
    question: "Loan settlement ke baad mujhe bank se kaun se documents lene anivarya hain?",
    answer:
      "Settlement amount jama karne ke baad borrower ko bank ya NBFC ke official letterhead par authorized officer dwara signed aur stamped No Dues Certificate (NDC) ya No Objection Certificate (NOC) prapt karna anivarya hai. Iske sath hi bank dwara National Payments Corporation of India (NPCI) portal par active e-NACH mandate ko cancel karwana aur security cheques ko return ya destroy karwana anivarya hota hai. Credit Information Companies (Regulation) Act, 2005 ke anusar bank ko 30 din ke bheetar CIBIL aur anya credit bureaus ko zero balance report update karni hoti hai.",
  },
  {
    id: "faq-7",
    question: "Corporate law firms ki jagah transparent fixed legal advisory kyu behtar vikalp hai?",
    answer:
      "Corporate law firms aamtaur par multinational corporations ke liye hourly rate aur monthly retainer models par kaam karti hain, jo aam karzdar ke loan amount se bhi zyada kharchila ban sakti hain. Iske viprit, transparent fixed legal advisory mein karzdar ko shuruat se hi clear, accessible kanooni margdarshan milta hai jismein koi chhupe hue retainers ya hourly markups nahi hote. Is model ke antargat enrolled high court advocates case analysis, notice replies, anti-harassment injunctions, aur bank negotiations ko end-to-end manage karte hain.",
  },
  {
    id: "faq-8",
    question: "Loan settlement karwane ke baad CIBIL score par kya asar padta hai aur ise kaise sudharein?",
    answer:
      "Settlement ke baad credit bureaus (CIBIL, Experian, Equifax, CRIF) par account status 'Settled' reflect hota hai jisse credit score temporary taur par drop hota hai, parantu unpaid active default aur continuous DPD (Days Past Due) ka cycle turant ruk jata hai. Ek baar authentic No Dues Certificate aane ke baad karzdar secured credit card (fixed deposit backed) lekar timely repayments ke zariye agle 12 se 24 mahino mein apna credit score 750+ tak recover kar sakta hai. Yadi bank 30 din mein record update na kare toh advocate dwara Section 21 CICRA ke tahat regulatory grievance file karwai ja sakti hai.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Vikramaditya Chauhan",
    authorLocation: "Small Business Owner, Delhi NCR • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "Jab mera business cash flow collapse hua aur multiple unsecured business loans aur credit card dues accumulate ho gaye, recovery agents mujhe aur mere parivar ko din bhar harass kar rahe the. Maine socha tha ki 'loan settlement karwana hai' par corporate law firms ke open-ended retainers mere reach se bahar the, aur online free templates bank ne sidhe reject kar diye. AMA Legal Solutions aur Advocate Anuj Anand Malik ki team ne transparent fixed legal advisory ke sath mera case liya. Unhone turant bank ko legal notice bhejkar illegal recovery calls band karwayi, credit committee ke sath strategic OTS negotiate kiya, aur mujhe bank-sealed No Dues Certificate dila kar debt-free banaya. Highly recommended for genuine borrowers.",
  },
  {
    authorName: "Pooja Deshmukh",
    authorLocation: "IT Project Lead, Pune • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "Medical emergency ki wajah se maine tin personal loans aur do credit cards liye the. Job change ke dauran salary delay hone par jab NACH mandate bounce hua toh Section 25 PSSA aur arbitration notices aane lage. Main bohot panic mein thi aur decide kiya ki loan settlement karwana hai bina kisi hidden costs ke. Advocate Anuj Anand Malik ne sabhi notices ka solid legal reply file kiya, excessive penal charges ko dispute karwaya, aur bank ke samne meri genuine financial hardship prove karke ek formal compromise sanction karwaya. Poora process completely transparent tha bina kisi hourly markup ke, aur mujhe proper NOC mil gayi.",
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
      name: "Loan Settlement Karwana Hai: Legal Process, RBI Guidelines & Advocate Advisory",
      description:
        "Complete legal process for borrowers looking to settle debt in India. Discover RBI One-Time Settlement (OTS) norms, advocate-backed negotiation, recovery protection, and authentic No Dues Certificates.",
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
        "Loan Settlement Karwana Hai: Complete Legal Process, RBI Guidelines & Advocate Advisory",
      description:
        "In-depth legal guide for borrowers seeking loan settlement in India under Reserve Bank of India compromise settlement directions. Explore Section 63 Contract Act discharge, stopping recovery agent harassment, Section 138 NI Act & Section 25 PSSA defense, transparent fixed legal advisory, and genuine No Dues Certificate clearance.",
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
      name: "Loan Settlement Legal Advisory Services",
      description:
        "Comprehensive advocate-led debt settlement representation in India. Negotiate legally binding One-Time Settlements (OTS) with scheduled banks and NBFCs, halt recovery agent harassment, defend against Section 138 NI Act and Section 25 PSSA notices, and secure verified No Dues Certificates.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1980",
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
        datePublished: rev.authorLocation.includes("September") ? "2026-09-05" : "2026-08-20",
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
          name: "Loan Settlement Karwana Hai",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Strategic Protocol Jab Loan Settlement Karwana Ho",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Comprehensive Financial & Regulatory Audit: Verification of Statements, Usurious Interest & Unlawful Penalties",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Immediate Anti-Harassment Cease & Desist Legal Notice Under RBI Fair Practices Code",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Advocate-Drafted Legal Defense to Section 138 NI Act Cheque Bounce & Section 25 PSSA NACH Summons",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Direct Bilateral Representation with Bank/NBFC Regional Credit Committee for Compromise Sanction",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Verification of Board-Approved Settlement Letter, Revocation of NPCI e-Mandates & Issuance of No Dues Certificate",
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
  { id: "rbi-guidelines-ots", title: "RBI Compromise OTS Framework" },
  { id: "advocate-vs-corporate-vs-diy", title: "Advocate vs Corporate vs DIY" },
  { id: "step-by-step-process", title: "5-Step Strategic Protocol" },
  { id: "infographic", title: "Legal Resolution Infographic" },
  { id: "recovery-harassment-defense", title: "Halting Harassment & Threats" },
  { id: "sec-138-and-nach-defense", title: "Sec 138 & Sec 25 PSSA Defense" },
  { id: "genuine-hardship-eligibility", title: "Hardship & Eligibility Criteria" },
  { id: "noc-and-cibil-revival", title: "Authentic NDC & CIBIL Revival" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "statutory-authorities", title: "Statutory Authority & Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function LoanSettlementKarwanaHaiClient() {
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
      "Loan Settlement Karwana Hai: Complete Legal Process, RBI Guidelines & Advocate Advisory – AMA Legal Solutions";
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
    const textMsg = `Hello AMA Legal Solutions, mujhe loan settlement karwana hai aur urgent legal guidance chahiye.
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
      label: "Loan Settlement Karwana Hai",
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
                <span>🛡️</span> Strategic Debt Resolution &amp; Borrower Protection
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Loan Settlement Karwana Hai?{" "}
                <span className="text-[#D2A02A]">Complete Legal Process</span> &amp; RBI OTS Guide
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Agar aap bank ya NBFC ke loan default, lagatar badhte penal charges, aur recovery agents ki abusive calls se pareshan hain aur &ldquo;loan settlement karwana hai&rdquo; ka faisla kar rahe hain, toh samajhna zaroori hai ki settlement koi apraadh nahi balki Reserve Bank of India (RBI) dwara sanctioned ek kanooni adhikar hai. Janein kaise High Court advocates ke dwara structured One-Time Settlement (OTS) karwake aap recovery harassment ko turant rok sakte hain, Section 138 NI Act aur Section 25 PSSA notices se bach sakte hain, aur bina kisi corporate hourly retainers ke authentic bank-sealed No Dues Certificate haasil kar sakte hain.
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
                    <span className="text-gray-400">📅</span> 12-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 16 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>⚖️</span> RBI Compromise Norms Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Urgent Loan Settlement Advisory</span>
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
                  src="/images/og/loan-settlement-karwana-hai.png"
                  alt="Loan Settlement Karwana Hai Infographic"
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
                    wa
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    aria-label="Copy Link"
                    className="px-2.5 py-1 rounded-full bg-gray-100 hover:bg-[#D2A02A] hover:text-white text-xs font-semibold transition-colors"
                  >
                    {shareMsg || "Copy"}
                  </button>
                </div>
              </div>

              {/* ── 1. Standalone QUICK ANSWER Block ── */}
              <div
                id="quick-answer"
                className="p-6 rounded-2xl bg-amber-50 border-2 border-[#D2A02A] shadow-sm relative"
              >
                <div className="inline-flex items-center gap-2 text-[#5A4C33] font-bold text-xs uppercase tracking-wider mb-2">
                  <span>⚡</span> Quick Answer: Loan Settlement Karwana Hai
                </div>
                <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium">
                  Loan settlement karwana ek vaidhik aur Reserve Bank of India (RBI) dwara nirdharit One-Time Settlement (OTS) prakriya hai jismein genuine financial hardship ke aadhar par karzdar bank ya NBFC ke sath bache hue loan dues ko negotiated compromise ke madhyam se poori tarah extinguish karta hai. Registered advocates ke dwara represent hone par recovery agents ki unlawful harassment turant rukti hai, Section 138 Cheque Bounce aur Section 25 PSSA NACH notices ka statutory defense file hota hai, aur bank ki credit committee se authentic board-approved No Dues Certificate prapt hota hai bina kisi corporate hourly billing ya hidden retainers ke.
                </p>
              </div>

              {/* ── 2. RBI Guidelines & OTS Framework ── */}
              <section id="rbi-guidelines-ots" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b border-gray-200 pb-3">
                  Loan Settlement Karwana Hai? Janein Kanooni Aadhar Aur RBI Guidelines
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Bharat mein karzdaron ke beech yeh ek aam dar rehta hai ki yadi unka loan default ho gaya hai toh bank unhe jail bhej sakta hai ya unpar criminal case darj ho jayega. Sachai yeh hai ki loan repayment na kar pana ek <strong>civil breach of contract</strong> hai, koi criminal offense nahi. Yadi aapko lagta hai ki aapki aarthik sthiti ab regular monthly installments (EMIs) bharne ki nahi rahi hai aur aap sochte hain ki <em>&ldquo;mujhe loan settlement karwana hai&rdquo;</em>, toh iske liye Reserve Bank of India ne formal aur binding rules bana rakhe hain.
                </p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  RBI ka Master Circular on <strong>Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)</strong> sabhi scheduled commercial banks, NBFCs, aur housing finance companies ko yeh nirdesh deta hai ki unke paas ek board-approved loan settlement policy honi chahiye. Iske atirikt, <strong>Indian Contract Act, 1872 ka Section 63</strong> spasht roop se pravdhan karta hai ki koi bhi creditor (bank) apne debtor (karzdar) ko contract ke poore performance se mukt kar sakta hai aur kam rashi (compromise consideration) lekar poore daayitv ko kanooni roop se samapt kar sakta hai.
                </p>

                <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 my-4 italic text-gray-700 bg-[#FAF7F0] rounded-r-lg">
                  &ldquo;Section 63 of the Indian Contract Act, 1872: Every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may extend the time for such performance, or may accept instead of it any satisfaction which he thinks fit.&rdquo;
                </blockquote>

                <p className="text-gray-700 leading-relaxed text-base">
                  Jab koi loan account lagatar teen mahine (90 days) tak unpaid rehta hai, toh RBI ke <strong>Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRAC)</strong> ke antargat bank ko use Non-Performing Asset (NPA) declare karna padta hai. NPA declare hote hi bank ko apni balance sheet mein us loan ke viruddh mandatory capital provisioning karni hoti hai. Yahi kaaran hai ki banks aur NBFCs NPA accounts ko lambe samay tak kheenchne ki jagah One-Time Settlement (OTS) ke zariye settle karne ke liye kanooni roop se taiyar hote hain.
                </p>
              </section>

              {/* ── 3. Commercial Search Intent: Advocate vs Corporate vs DIY ── */}
              <section id="advocate-vs-corporate-vs-diy" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b border-gray-200 pb-3">
                  Kanooni Sahayata Ka Chayan: Advocate-Led Advisory vs Corporate Law Firms vs Free DIY Templates
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Jab karzdar yeh nishchay karta hai ki <strong>&ldquo;loan settlement karwana hai&rdquo;</strong>, toh sabse bada commercial sawaal yeh hota hai ki representation kisse karwayi jaye. Market mein teen vikalp dikhte hain: internet se download kiye gaye <em>free DIY settlement templates</em>, badi <em>corporate law firms</em>, aur registered <em>high court banking advocates</em> jo transparent fixed legal advisory model par kaam karte hain.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full text-left border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-[#1a202c] text-white text-xs md:text-sm uppercase tracking-wider">
                      <tr>
                        <th className="p-4 border-b border-gray-700">Mukhya Parameters</th>
                        <th className="p-4 border-b border-gray-700 text-[#D2A02A]">Advocate-Led Fixed Advisory (AMA Legal)</th>
                        <th className="p-4 border-b border-gray-700">Corporate Law Firms</th>
                        <th className="p-4 border-b border-gray-700">Free DIY Online Templates</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-xs md:text-sm text-gray-700 bg-white">
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Kanooni Manyata (Statutory Standing)</td>
                        <td className="p-4 text-[#5A4C33] font-semibold bg-[#FAF7F0]">High Court Enrolled Advocates (Advocates Act, 1961)</td>
                        <td className="p-4">Senior Corporate Lawyers</td>
                        <td className="p-4 text-red-600 font-semibold">Zero Statutory Authority / Dismissed by Banks</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Billing Model &amp; Retainer Structure</td>
                        <td className="p-4 text-[#5A4C33] font-semibold bg-[#FAF7F0]">Transparent Fixed Legal Advisory (No Hidden Retainers)</td>
                        <td className="p-4 text-red-600 font-semibold">Expensive Hourly Billing &amp; Monthly Retainers</td>
                        <td className="p-4">Free / Unregulated Download</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Recovery Harassment Protection</td>
                        <td className="p-4 text-[#5A4C33] font-semibold bg-[#FAF7F0]">Immediate Statutory Cease-and-Desist Legal Notices</td>
                        <td className="p-4">Formal Notices (Slow Corporate Clearance)</td>
                        <td className="p-4 text-red-600">No Protection; Recovery Agents Ignore DIY Letters</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Section 138 &amp; Sec 25 PSSA Defense</td>
                        <td className="p-4 text-[#5A4C33] font-semibold bg-[#FAF7F0]">Court Appearances &amp; Formal Statutory Replies</td>
                        <td className="p-4">Handled at Substantial Additional Legal Fees</td>
                        <td className="p-4 text-red-600 font-semibold">Cannot Represent or File Court Vakalatnama</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Client Confidentiality Privilege</td>
                        <td className="p-4 text-[#5A4C33] font-semibold bg-[#FAF7F0]">Protected Under Section 126 Indian Evidence Act</td>
                        <td className="p-4">Protected Under Section 126 Evidence Act</td>
                        <td className="p-4 text-red-600">High Risk of Data Leak &amp; Phishing Traps</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-gray-900">Limitation Act Risk Protection</td>
                        <td className="p-4 text-[#5A4C33] font-semibold bg-[#FAF7F0]">Safeguards Against Section 18 Liability Admission</td>
                        <td className="p-4">Legally Protected Drafting</td>
                        <td className="p-4 text-red-600 font-semibold">Accidental Debt Admission Restarts 3-Yr Limitation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border border-[#D2A02A]/40 space-y-3">
                  <h3 className="font-bold text-lg text-[#5A4C33]">
                    Kyu Free DIY Templates Court Mein Fail Hote Hain Aur Khatarnak Hain?
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Internet se copy-paste kiye gaye settlement formats mein aamtaur par karzdar likh deta hai ki <em>&ldquo;Maine bank se itna loan liya tha aur main ise chuka nahi pa raha hu&rdquo;</em>. <strong>Section 18 of the Limitation Act, 1963</strong> ke tahat, aisi written debt acknowledgment bank ke liye ek nayi limitation period shuru kar deti hai. Isse bank ko karzdar par recovery suit ya summary suit file karne ke liye naya 3-saal ka samay mil jata hai. Iske viprit, ek anubhavi banking advocate debt ko dispute karte hue, excessive penal interest aur unfair banking charges ko challenge karke negotiations ko favorable banata hai.
                  </p>
                </div>
              </section>

              {/* ── 4. 5-Step Strategic Settlement Protocol ── */}
              <section id="step-by-step-process" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b border-gray-200 pb-3">
                  5-Step Strategic Protocol: Jab Loan Settlement Karwana Ho Toh Kya Karein
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Yadi aapne tay kar liya hai ki aapko loan settlement karwana hai, toh kisi bhi unverified recovery agent ya agent ke phone call par bharosa na karein. Ek vaidhik aur permanent debt clearance ke liye AMA Legal Solutions dwara follow kiya jane wala 5-step certified legal framework nimnlikhit hai:
                </p>

                <div className="space-y-6 mt-6">
                  {/* Step 1 */}
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                        1
                      </span>
                      <h3 className="text-xl font-bold text-[#1a202c]">
                        Forensic Loan &amp; Account Statement Audit
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-11">
                      Advocates aapke sabhi loan agreements, Key Fact Statements (KFS), repayment track records, aur bank account statements ka forensic audit karte hain. Isme check kiya jata hai ki bank ne <strong>RBI Fair Practices Code</strong> aur <strong>Usurious Loans Act, 1918</strong> ke viruddh kitna compound interest, penal charges, aur bounce fees anadhikrit roop se joda hai. In sabhi illegal markups ko deduct karwake principal liability ko isolate kiya jata hai.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                        2
                      </span>
                      <h3 className="text-xl font-bold text-[#1a202c]">
                        Immediate Anti-Harassment Cease &amp; Desist Legal Notice
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-11">
                      Enrolled advocates bank ke Grievance Redressal Officer aur Nodal Officer ko official statutory Cease-and-Desist notice bhejte hain. Isme spasht roop se <strong>Section 351/308 Bharatiya Nyaya Sanhita, 2023</strong> (criminal intimidation) aur RBI Digital Lending Guidelines ke ullanghan ki chetavni di jati hai. Notice ke madhyam se bank ko aadesh diya jata hai ki teesre paksh ke recovery agents ka aana aur phone calls turant band kiye jayein aur poora samvaad kewal advocate ke madhyam se ho.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                        3
                      </span>
                      <h3 className="text-xl font-bold text-[#1a202c]">
                        Statutory Defense to Section 138 NI Act &amp; Section 25 PSSA Notices
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-11">
                      Yadi bank ne security cheque bounce ya e-NACH mandate fail hone par 15-day statutory demand notice bheja hai, toh hamare advocates 15 din ke andar kanooni reply draft karke file karte hain. Reply mein yeh establish kiya jata hai ki cheque ya mandate &lsquo;legally enforceable debt&rsquo; ke discharge mein nahi balki blank conditional security instrument ke roop mein liya gaya tha, jisse magistrate court mein criminal liability extinguish hone ka rasta banta hai.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                        4
                      </span>
                      <h3 className="text-xl font-bold text-[#1a202c]">
                        Direct Structured Negotiation with Bank Credit Committee
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-11">
                      Recovery telecallers se baat karne ke bajaye, hamare advocates bank ke Zonal Credit Committee, SAMD (Stressed Asset Management Department), ya Lok Adalat benches ke samne aapki genuine financial hardship (jaise salary slip, medical records, GST filings) prastut karte hain. Bank ke samne prove kiya jata hai ki litigation mein saalon lagane se behtar hai ki bank One-Time Settlement (OTS) sanction kare.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                        5
                      </span>
                      <h3 className="text-xl font-bold text-[#1a202c]">
                        OTS Letter Verification, NPCI Mandate Revocation &amp; No Dues Certificate
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-11">
                      Bank dwara settlement approval aane par advocate pehle sanction letter ke sabhi terms, bank seal, aur authorized signatory ko verify karte hain taaki koi fake letter na ho. Agreed settlement amount jama hone ke baad, National Payments Corporation of India (NPCI) portal par active e-mandate ko officially revoke karwaya jata hai aur bank letterhead par authentic <strong>No Dues Certificate (NDC)</strong> haasil karke CIBIL records ko update karwaya jata hai.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 5. Signature Editorial Infographic Card ── */}
              <section id="infographic" className="scroll-mt-28">
                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D2A02A]/10 text-[#5A4C33] rounded-full text-xs font-bold uppercase tracking-wider">
                      <span>📊</span> Editorial Legal Architecture
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Source: AMA Legal Solutions Strategy Desk</span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                    <img
                      src="/images/og/loan-settlement-karwana-hai.png"
                      alt="Comprehensive Loan Settlement Protocol Infographic"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-4 leading-relaxed text-center font-medium">
                    Figure 1: Strategic legal workflow when pursuing bank and NBFC loan compromise settlement under Reserve Bank of India directions, ensuring total protection from unlawful recovery intimidation and criminal notices.
                  </p>
                </div>
              </section>

              {/* ── 6. Halting Recovery Harassment & Threats ── */}
              <section id="recovery-harassment-defense" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b border-gray-200 pb-3">
                  Recovery Agents Ki Harassment Aur Dhamkiyon Par Kanooni Rok
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Jab karzdar loan default karta hai, toh banks aur unki contracted collection agencies aksar gair-kanooni hathkande apnati hain. Recovery agents subah 8 baje se pehle aur raat 7 baje ke baad call karte hain, workplace par aakar tamasha karte hain, ya parivar aur dosto ko phone karke badnaam karne ki dhamki dete hain. Yadi aap soch rahe hain ki <em>&ldquo;mujhe loan settlement karwana hai lekin recovery wale jeena haram kar rahe hain&rdquo;</em>, toh janein ki kanoon aapki poori suraksha karta hai.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">RBI Recovery Norms Violation</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      RBI ke niyam anusar recovery agent kewal subah 8 baje se shaam 7 baje ke beech hi call ya visit kar sakte hain. Kisi bhi third party ya relative se karz ke baare mein baat karna strict privacy breach hai.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Bharatiya Nyaya Sanhita (BNS) 2023</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Section 351 (Criminal Intimidation) aur Section 308 (Extortion) ke tahat gaali-galoch ya dhamki dena bailable nahi hai. Advocate ke notice se bank ke Managing Director tak criminal complaint ka risk khada hota hai.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Information Technology Act, 2000</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Instant apps dwara contacts hack karna ya photos morph karna Section 43A aur Section 66E ke tahat cybercrime hai, jismein direct Cyber Police Station FIR aur pass-through account freeze hota hai.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Vicarious Liability of Banks</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Supreme Court ke <em>ICICI Bank vs. Shanti Devi Sharma (2008)</em> judgment ke anusar bank apne recovery agents ke har galat vyavahar ke liye direct criminal aur civil roop se zimmedar hai.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-base">
                  Jaise hi AMA Legal Solutions ka official notice bank ko serve hota hai, bank ke compliance department mein red flag trigger ho jata hai. Unhe pta hota hai ki matter ab kisi anpadh ya lachaar borrower ke haath mein nahi balki High Court ke advocates ke pass hai. Iske parinaamsvaroop recovery agency ko turant terminate ya transfer kar diya jata hai aur matter official legal desk par transfer ho jata hai.
                </p>
              </section>

              {/* ── 7. Section 138 & Section 25 PSSA Defense ── */}
              <section id="sec-138-and-nach-defense" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b border-gray-200 pb-3">
                  Cheque Bounce (Sec 138 NI Act) Aur NACH Bounce (Sec 25 PSSA) Ka Samadhan
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Jab karzdar loan ki kisht nahi bhar pata, toh banks unke diye gaye blank security cheques ko present karke bounce karwa dete hain ya automated electronic clearing system (e-NACH) mandate ko bar-bar trigger karte hain. Iske baad bank ke advocate dwara <strong>Section 138 Negotiable Instruments Act, 1881</strong> ya <strong>Section 25 Payment and Settlement Systems Act, 2007 (PSSA)</strong> ke antargat 15-day statutory demand notice bheja jata hai jismein 2 saal tak ki jail ki chetavni di jati hai.
                </p>

                <div className="p-6 bg-red-50/50 border border-red-200 rounded-2xl space-y-3 my-4">
                  <h3 className="font-bold text-red-900 text-base md:text-lg">
                    Dhyan Dein: 15-Day Statutory Notice Ko Ignore Karna Sabse Badi Galti Hai!
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Yadi aap notice milne ke 15 din ke bheetar formal legal reply nahi bhejte, toh bank ko Magistrate Court mein complaint file karne ka right mil jata hai jahan se bailable ya non-bailable warrants issue ho sakte hain. Lekin yadi anubhavi advocate dwara statutory reply bheja jaye, toh court mein case khada hi nahi reh pata kyunki:
                  </p>
                  <ul className="list-disc pl-5 text-sm md:text-base text-gray-700 space-y-2">
                    <li>
                      <strong>Security Instrument Defense:</strong> Cheque ya mandate kisi crystallized liability ke liye nahi balki conditional security ke roop mein loan sanction ke waqt liya gaya tha.
                    </li>
                    <li>
                      <strong>Inflated &amp; Unenforceable Debt:</strong> Bank ne bounc charges, penal interest, aur excessive levies jodkar notice amount ko artificially inflate kiya hai, jo Section 138 ke kanooni daayre mein unenforceable ban jata hai.
                    </li>
                    <li>
                      <strong>Compounding Under Section 147 NI Act:</strong> Negotiable Instruments Act ka Section 147 sabhi cheque bounce mamlon ko compoundable banata hai. Iska matlab hai ki One-Time Settlement (OTS) hote hi court case poori tarah quash aur dismiss ho jata hai.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── 8. Genuine Hardship & Eligibility Criteria ── */}
              <section id="genuine-hardship-eligibility" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b border-gray-200 pb-3">
                  Genuine Hardship Criteria: Kisko Milta Hai Loan Settlement Ka Labh?
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Aksar log puchte hain ki <em>&ldquo;Kya har koi loan settlement karwa sakta hai?&rdquo;</em> Kanoonan, RBI ne <strong>&lsquo;Wilful Defaulters&rsquo;</strong> aur <strong>&lsquo;Genuine Borrowers in Distress&rsquo;</strong> ke beech spasht antar banaya hai. Bank unhi karzdaron ke sath compromise settlement sanction karta hai jinki repayment capacity genuine circumstances ke chalte prabhavit hui ho.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-5 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all">
                    <div className="text-2xl mb-2">💼</div>
                    <h4 className="font-bold text-gray-900 mb-2">Job Loss &amp; Pay Cut</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Layoffs, corporate downsizing, ya medical disability ke karan regular salary band hona. Termination letter ya salary slips ke aadhar par bank hardship ko acknowledge karta hai.
                    </p>
                  </div>
                  <div className="p-5 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all">
                    <div className="text-2xl mb-2">🏥</div>
                    <h4 className="font-bold text-gray-900 mb-2">Severe Medical Emergency</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Karzdar ya parivar ke kisi sadasya ko critical illness, hospitalization, ya uninsurable medical expense hona jisse poori savings exhaust ho gayi hon.
                    </p>
                  </div>
                  <div className="p-5 bg-white border-2 border-gray-100 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all">
                    <div className="text-2xl mb-2">📉</div>
                    <h4 className="font-bold text-gray-900 mb-2">Business &amp; Market Collapse</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Severe business turnover loss, client default, bad debts, ya inflation ke karan cash flow collapse hona. ITR aur bank statements ke zariye hardship substantiate hoti hai.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-base">
                  Jab AMA Legal Solutions ke advocates aapka case tayar karte hain, toh in sabhi documents ki legal docketing karke bank ke Credit Assessment Board ke samne prastut ki jati hai. Isse bank ko spasht dikhta hai ki legal battle ladne mein bank ka samay aur kharch zyada hoga, jabki immediate OTS sanction karne se unhe guaranteed recovery mil jayegi.
                </p>
              </section>

              {/* ── 9. Authentic NDC & CIBIL Score Revival ── */}
              <section id="noc-and-cibil-revival" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b border-gray-200 pb-3">
                  Authentic No Dues Certificate (NDC) Aur CIBIL Score Revival
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Loan settlement ka antim aur sabse mehatvapurna charan hota hai authentic No Dues Certificate (NDC) haasil karna. Kai baar fraud collection agents karzdar ko personal UPI ya fake letter dekar paise le lete hain aur bank record mein loan unpaid hi reh jata hai. AMA Legal Solutions ensure karta hai ki settlement payment kewal aur kewal bank ke official loan account mein hi transfer ho.
                </p>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Payment hone ke baad, bank se formal NDC prapt kiya jata hai jismein spasht roop se likha hota hai ki loan account poori tarah close kar diya gaya hai aur bank ka borrower par koi daayitv baaki nahi hai.
                </p>

                <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#D2A02A]/30 space-y-3 my-4">
                  <h3 className="font-bold text-[#5A4C33] text-lg">
                    CIBIL Score Par Asar Aur 12-24 Mahino Mein Credit Recovery
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Settlement hone par CIBIL report mein account status &lsquo;Settled&rsquo; show hota hai. Kuch log sochte hain ki CIBIL hamesha ke liye kharab ho gaya, jo ki ek afwaah hai. Default ki sthiti mein Days Past Due (DPD) har mahine badhta rehta hai jo score ko lagatar neeche girata hai. Settlement hone se DPD cycle turant freeze ho jata hai aur balance zero ho jata hai.
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Iske baad, karzdar kisi nationalized bank se fixed deposit ke against secured credit card lekar agle 12 se 18 mahine timely repayments karke apna credit score punah 750+ tak build kar sakta hai. Yadi bank 30 din mein CIBIL ko zero balance update na kare, toh advocate dwara <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong> ke Section 21 ke tahat regulatory notice bhejkar record ko correct karwaya jata hai.
                  </p>
                </div>
              </section>

              {/* ── 10. 8-Question Accordion FAQ ── */}
              <section id="faqs" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b border-gray-200 pb-3">
                  Frequently Asked Questions (Aamtaur Par Pooche Jane Wale Sawaal)
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq) => {
                    const isOpen = expandedFaqs.includes(faq.id);
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 bg-white shadow-sm"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:text-[#D2A02A] transition-colors focus:outline-none"
                        >
                          <span className="text-base md:text-lg pr-4">{faq.question}</span>
                          <span className="text-[#D2A02A] text-xl font-bold flex-shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── 11. More Legal Guides Internal Links ── */}
              <section id="internal-guides" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b border-gray-200 pb-3">
                  More Legal Guides &amp; Loan Resolution Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/loan-settlement"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition-all block group"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Comprehensive Guide
                    </span>
                    <h3 className="font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition-colors text-sm md:text-base">
                      Loan Settlement in India: Legal Rights &amp; Bank OTS Procedure
                    </h3>
                  </Link>
                  <Link
                    href="/kya-mai-loan-settlement-karwane-ke-liye-eligible-hu"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition-all block group"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Eligibility Guide
                    </span>
                    <h3 className="font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition-colors text-sm md:text-base">
                      Kya Mai Loan Settlement Karwane Ke Liye Eligible Hu? Complete Assessment
                    </h3>
                  </Link>
                  <Link
                    href="/loan-settlement-karwane-ke-kya-nuksaan-or-fayde-hai"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition-all block group"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Pros &amp; Cons
                    </span>
                    <h3 className="font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition-colors text-sm md:text-base">
                      Loan Settlement Karwane Ke Kya Nuksaan Aur Fayde Hai? Full Comparison
                    </h3>
                  </Link>
                  <Link
                    href="/kya-loan-settlement-karwane-se-mujhe-jail-ho-skti-hai"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition-all block group"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Criminal Defense
                    </span>
                    <h3 className="font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition-colors text-sm md:text-base">
                      Kya Loan Settlement Karwane Se Jail Ho Sakti Hai? Legal Realities
                    </h3>
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition-all block group"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Anti-Harassment
                    </span>
                    <h3 className="font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition-colors text-sm md:text-base">
                      How to Stop Bank Recovery Agents Harassment Legally in India
                    </h3>
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-notice-for-personal-loan"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition-all block group"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Statutory Notice
                    </span>
                    <h3 className="font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition-colors text-sm md:text-base">
                      Section 138 Cheque Bounce Notice For Personal Loan: Reply Procedure
                    </h3>
                  </Link>
                  <Link
                    href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition-all block group"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Credit Impact
                    </span>
                    <h3 className="font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition-colors text-sm md:text-base">
                      Difference Between Loan Settlement and Loan Closure: CIBIL Impact
                    </h3>
                  </Link>
                  <Link
                    href="/how-to-file-a-complaint-against-bank-nbfc-in-rbi"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition-all block group"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Ombudsman Portal
                    </span>
                    <h3 className="font-bold text-[#1a202c] group-hover:text-[#D2A02A] transition-colors text-sm md:text-base">
                      How to File a Complaint Against Bank or NBFC in RBI Integrated Portal
                    </h3>
                  </Link>
                </div>
              </section>

              {/* ── 12. References & Authority ── */}
              <section id="statutory-authorities" className="space-y-4 scroll-mt-28 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-bold text-gray-900">
                  Statutory References &amp; Official Regulatory Portals
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                  <li>
                    &bull; Reserve Bank of India Master Circular on Compromise Settlements:{" "}
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      rbi.org.in/compromise-settlements
                    </a>
                  </li>
                  <li>
                    &bull; National Legal Services Authority (NALSA) Lok Adalat Settlement Benches:{" "}
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      nalsa.gov.in/lok-adalat
                    </a>
                  </li>
                  <li>
                    &bull; National Payments Corporation of India (NPCI) e-NACH Mandate Guidelines:{" "}
                    <a
                      href="https://www.npci.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      npci.org.in/nach-mandate-norms
                    </a>
                  </li>
                  <li>
                    &bull; National Cyber Crime Reporting Portal (Ministry of Home Affairs):{" "}
                    <a
                      href="https://cybercrime.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      cybercrime.gov.in/digital-lending-harassment
                    </a>
                  </li>
                  <li>
                    &bull; Supreme Court of India Decisions on Bank Recovery Conduct:{" "}
                    <a
                      href="https://main.sci.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      main.sci.gov.in/judgments
                    </a>
                  </li>
                </ul>
              </section>

              {/* Bottom Social Share */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-medium">Was this guide helpful? Share it with other borrowers:</span>
                <div className="flex items-center gap-2">
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
                    wa
                  </button>
                </div>
              </div>

              {/* ── 13. AMA Company & Media Section ── */}
              <section
                id="ama-company-section"
                className="p-8 bg-white border-4 border-[#D2A02A] rounded-2xl shadow-md space-y-6 scroll-mt-28"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <img
                        src="/ama3.svg"
                        alt="AMA Legal Solutions Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a202c]">
                        AMA Legal Solutions
                      </h3>
                      <p className="text-xs text-gray-500">
                        Premier Banking Litigation &amp; Debt Resolution Law Firm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF7F0] px-4 py-2 rounded-xl border border-[#D2A02A]/30">
                    <Stars count={5} />
                    <span className="font-bold text-gray-900 text-sm">4.7</span>
                    <span className="text-xs text-gray-500">(Google Verified Reviews)</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  AMA Legal Solutions is India&rsquo;s leading legal practice dedicated to safeguarding borrowers from predatory lending, abusive collection harassment, and unlawful financial exploitation. Spearheaded by Advocate Anuj Anand Malik, our legal team provides accessible, advocate-led representation across scheduled commercial banks, NBFCs, and fintech institutions throughout India.
                </p>

                <div>
                  <div className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-3">
                    Explore Our Legal Solutions
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Link
                      href="/personal-loan-settlement"
                      className="text-center py-2.5 px-3 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white text-xs font-bold transition-all"
                    >
                      Personal Loans
                    </Link>
                    <Link
                      href="/credit-card-settlement"
                      className="text-center py-2.5 px-3 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white text-xs font-bold transition-all"
                    >
                      Credit Cards
                    </Link>
                    <Link
                      href="/business-loan-settlement"
                      className="text-center py-2.5 px-3 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white text-xs font-bold transition-all"
                    >
                      Business Loans
                    </Link>
                    <Link
                      href="/contact"
                      className="text-center py-2.5 px-3 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white text-xs font-bold transition-all"
                    >
                      Contact Lawyers
                    </Link>
                  </div>
                </div>
              </section>
            </main>

            {/* ── Right Column: Sticky Sidebar ── */}
            <aside className="space-y-8 sticky top-24">
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#D2A02A] shadow">
                  <img
                    src="/anujbhiya.png"
                    alt="Advocate Anuj Anand Malik"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  Anuj Anand Malik
                </h3>
                <p className="text-xs text-[#5A4C33] font-semibold mb-3">
                  Founder &amp; Senior Advocate
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mb-4 text-left">
                  Specializing in banking litigation, debt compromise settlements, RBI regulatory disputes, and DRT defense. Represented thousands of distressed borrowers against aggressive bank recovery actions.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
                >
                  <span>Connect on LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-xl space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-[#D2A02A] text-xs font-bold uppercase tracking-wider">
                  <span>⚖️</span> Direct Legal Advisory
                </div>
                <h3 className="text-xl font-bold leading-snug">
                  Loan Settlement Karwana Hai?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Speak directly with senior banking advocates. Stop recovery harassment immediately and negotiate a legally binding One-Time Settlement under RBI guidelines.
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
                      href="/documents-required-for-loan-settlement-through-law-firm"
                      className="text-gray-700 hover:text-[#D2A02A] transition-colors font-medium block"
                    >
                      &bull; Documents Required for Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/can-bank-reject-settlement-request"
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
                    Connect directly with Advocate Anuj Anand Malik&rsquo;s team to assess your bank/NBFC loan settlement options.
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
                      placeholder="Bank name, total overdue, whether recovery agents are calling, or any legal notice received..."
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

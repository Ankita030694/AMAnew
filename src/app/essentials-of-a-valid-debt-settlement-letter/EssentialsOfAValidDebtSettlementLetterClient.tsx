"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/essentials-of-a-valid-debt-settlement-letter";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/essentials-of-a-valid-debt-settlement-letter.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-17";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What is the most definitive way to check if a debt settlement letter is fake or real?",
    answer:
      "The most conclusive test of authenticity is verifying the settlement letter's internal reference number directly against the lending institution's Core Banking Solution (CBS) database through an authorized branch manager or an enrolled advocate. A genuine One-Time Settlement (OTS) letter must be issued on official bank corporate letterhead, originate from an institutional banking email domain, and mandate that funds be deposited exclusively into the borrower's designated loan account rather than a third-party entity. Under Reserve Bank of India compromise settlement frameworks, banks never authorize recovery agents to collect cash or route compromise payments through personal UPI handles.",
  },
  {
    id: "faq-2",
    question: "Can an outsourced recovery agency legally issue a debt settlement letter on their own letterhead?",
    answer:
      "Under the Reserve Bank of India Master Direction on Fair Practices Code for Lenders, third-party recovery agencies and collection agents have zero statutory authority to issue compromise settlement letters on their own company letterheads. Any binding One-Time Settlement agreement is a bilateral contract under Section 63 of the Indian Contract Act, 1872 that must originate exclusively from the sanctioned credit authority of the lending bank or Non-Banking Financial Company (NBFC). Letters printed on collection agency stationery or signed by recovery agents without an accompanying registered Power of Attorney from the bank are legally void and unenforceable in court.",
  },
  {
    id: "faq-3",
    question: "Why do free online DIY settlement templates fail to protect borrowers from fake settlement letters?",
    answer:
      "Free automated online DIY templates and generic form generators fail because they cannot conduct forensic document verification or interrogate bank Core Banking Solution systems to authenticate institutional sanction authority. Automated online templates lack legal standing under the Advocates Act, 1961, and provide no statutory protection if a borrower inadvertently transfers funds against a forged recovery notice. Furthermore, generic DIY templates cannot cross-examine recovery representatives or represent distressed debtors before a Judicial Magistrate when lenders pursue criminal charges under Section 138 of the Negotiable Instruments Act, 1881.",
  },
  {
    id: "faq-4",
    question: "How does transparent fixed legal advisory protect borrowers against fraudulent settlement letters?",
    answer:
      "Transparent fixed legal advisory shields borrowers by providing enrolled advocate representation backed by statutory advocate-client privilege under Section 126 of the Indian Evidence Act, 1872, eliminating the excessive hourly billables and surprise retainers of corporate law firms. A licensed advocate conducts forensic vetting of the settlement sanction, interfaces directly with the bank's zonal stressed assets vertical, and verifies that the settlement terms legally extinguish all liabilities. This structured legal model ensures that distressed borrowers achieve genuine debt closure and court case withdrawal without paying unauthorized retainers or falling victim to collection fraud.",
  },
  {
    id: "faq-5",
    question: "What must be stated in a valid debt settlement letter regarding Section 138 and Section 25 court cases?",
    answer:
      "A legally valid debt settlement letter must contain an explicit, enforceable clause binding the lending institution to withdraw all pending civil suits, arbitration references under the Arbitration and Conciliation Act, 1996, and criminal complaints under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007. The sanction terms must specify that upon receipt of the agreed compromise payment, the bank's authorized advocate will file formal applications for compounding of offenses before the competent Judicial Magistrate. A settlement letter that remains silent on the compounding and closure of criminal proceedings leaves the borrower vulnerable to ongoing prosecution and non-bailable warrants.",
  },
  {
    id: "faq-6",
    question: "What payment destination verifies that a debt settlement letter is genuine?",
    answer:
      "A genuine debt settlement letter will without exception stipulate that compromise funds must be deposited directly into the borrower's specific loan account number or remitted via a crossed Demand Draft drawn in the legal corporate name of the lending bank or NBFC. Any letter or recovery agent instructing the borrower to deposit funds into a collection agency account, an individual third-party account, or a personal UPI address is fraudulent under Section 420 and Section 468 of the Indian Penal Code. Depositing money into unauthorized third-party accounts does not reduce the borrower's principal liability on the bank's CBS ledger and leaves the borrower fully exposed to continued recovery actions.",
  },
  {
    id: "faq-7",
    question: "How soon after paying a settlement amount should an unconditional No Dues Certificate be issued?",
    answer:
      "Under the Reserve Bank of India Master Directions and Central Banking Fair Practices Code, commercial banks and NBFCs are obligated to issue an unconditional No Dues Certificate (NDC) or Closure Certificate within 15 to 30 days of receiving the agreed compromise settlement funds. The settlement letter itself must prescribe this mandatory delivery timeframe alongside an obligation to return all post-dated cheques and original property documents. Furthermore, the lending institution must legally commit to updating the borrower's account status to 'Settled' with CIBIL, Experian, Equifax, and CRIF High Mark in accordance with the Credit Information Companies (Regulation) Act, 2005.",
  },
  {
    id: "faq-8",
    question: "What legal action can a borrower initiate if a recovery agent issues a forged settlement letter?",
    answer:
      "When a recovery agent issues a forged debt settlement letter to extract funds, the borrower can initiate immediate criminal proceedings by filing a First Information Report (FIR) under Section 420 (Cheating), Section 468 (Forgery for Purpose of Cheating), and Section 384 (Extortion) of the Indian Penal Code (or corresponding sections under the Bharatiya Nyaya Sanhita). Distressed borrowers can simultaneously file a statutory complaint with the Reserve Bank of India Ombudsman under the Integrated Ombudsman Scheme, 2021, and lodge a cyber fraud complaint on the National Cyber Crime Reporting Portal. Retaining an advocate ensures the prompt service of a formal legal notice holding both the rogue recovery agency and the principal lending institution vicariously liable for unlawful practices.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Vikram Malhotra",
  authorRole: "Commercial Real Estate Consultant, Mumbai • Recovered from Fake Settlement Notice Scam",
  reviewBody:
    "After falling behind on unsecured credit lines, I received an official-looking settlement letter via WhatsApp from an alleged collection agency offering a substantial discount. Suspicious of the payment terms demanding immediate UPI transfers to a third-party account, I consulted Advocate Anuj Anand Malik at AMA Legal Solutions under their transparent fixed legal advisory. They conducted an immediate forensic ledger and Core Banking Solution audit, exposing the letter as a dangerous forgery issued by an unauthorized recovery agency. Advocate Malik then engaged directly with the bank's zonal stressed assets committee, secured a genuine RBI-compliant OTS sanction letter on official bank stationery, supervised the direct account payment, and obtained an unconditional bank No Dues Certificate.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Essentials of a Valid Debt Settlement Letter: How to Check Fake vs Real",
      description:
        "Comprehensive legal and forensic guide on how to check if a debt settlement letter is fake or real in India under RBI compromise guidelines, Indian Contract Act, and advocate verification.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Essentials of a Valid Debt Settlement Letter: How to Check Fake vs Real",
      description:
        "Exhaustive legal breakdown of the essential features of a valid debt settlement letter in India. Master the forensic steps to verify authentic bank OTS sanction letters and avoid recovery agent scams.",
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
      name: "Advocate-Led Debt Settlement Letter Verification & Legal Advisory",
      description:
        "Specialized forensic audit and legal verification of One-Time Settlement (OTS) sanction letters under Reserve Bank of India compromise frameworks, protecting borrowers from fraudulent recovery scams and securing authentic bank No Dues Certificates.",
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
          name: "Essentials of a Valid Debt Settlement Letter",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Step Forensic Legal Verification Protocol for Settlement Letters",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Official Banking Domain & Letterhead Authentication",
          description:
            "Forensic examination of the document origin, digital headers, corporate watermarks, and verification of institutional email transmission from authorized bank servers.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Core Banking Solution (CBS) Reference Audit",
          description:
            "Reconciliation of the internal compromise sanction number against the lending bank's central core banking database to confirm formal committee approval.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Signatory Authority & Delegation of Powers Vetting",
          description:
            "Verification of the signatory's employee code, official designation, and delegated authority under the bank's board-approved compromise policy.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Statutory Clause Scrutiny & Section 138 Compounding Mandate",
          description:
            "Reviewing legal terms to ensure explicit full and final extinguishment under Section 63 of the Indian Contract Act and mandatory withdrawal of pending criminal complaints.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Supervised Account-Only Payment & NDC Enforcement",
          description:
            "Ensuring compromise remittances are deposited strictly into the designated loan master account and enforcing the time-bound issuance of an unconditional No Dues Certificate.",
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
  { id: "epidemic-of-fake-settlement-letters", title: "The Epidemic of Forged Letters" },
  { id: "statutory-foundations-of-valid-ots", title: "Statutory Foundations of an OTS Letter" },
  { id: "seven-essential-elements-check", title: "7 Essentials: Fake vs Real Checks" },
  { id: "advocate-vs-diy-vs-corporate", title: "Advocate Vetting vs DIY vs Corporate" },
  { id: "forensic-verification-protocol", title: "5-Step Forensic Verification Protocol" },
  { id: "signature-infographic", title: "Verification Workflow Infographic" },
  { id: "catastrophic-risks-of-paying-fake", title: "Catastrophic Risks of Paying Fake Letters" },
  { id: "criminal-remedies-against-forgery", title: "Criminal & RBI Remedies for Forgery" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "Statutory References & Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function EssentialsOfAValidDebtSettlementLetterClient() {
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
    assetType: "Settlement Letter Verification",
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
    const textMsg = `Hello AMA Legal Solutions, I would like to verify a debt settlement letter to confirm if it is genuine or fake.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Matter: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory and advocate document verification before transferring settlement funds."}`;
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
      assetType: "Settlement Letter Verification",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Essentials of a Valid Debt Settlement Letter: How to Check Fake vs Real – AMA Legal Solutions";
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
      label: "Essentials of a Valid Debt Settlement Letter",
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
                <span>⚖️</span> Statutory Debt Resolution &amp; OTS Verification Advisory
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Essentials of a Valid Debt Settlement Letter: <span className="text-[#D2A02A]">How to Check if the Debt Settlement Letter is Fake or Real</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the 7 mandatory legal essentials of an authentic bank One-Time Settlement (OTS) sanction letter under
                Reserve Bank of India compromise frameworks. Master the forensic document checks to expose fraudulent recovery
                notices, prevent unauthorized third-party transfers, and secure an advocate-certified discharge without surprise
                retainers or open-ended corporate legal fees.
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
                    <span>🛡️</span> Forensic Legal Vetting
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Forensic Letter Verification</span>
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
                  src="/images/og/essentials-of-a-valid-debt-settlement-letter.png"
                  alt="Essentials of a Valid Debt Settlement Letter – How to Check Fake vs Real"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Forensic Sanction Letter Verification
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory Authenticity Audit &bull; RBI OTS Safeguards
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
                  Privileged Legal Counsel
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> Genuine NDC
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Core Banking Solution Audits
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
                  Published: <span className="font-semibold text-gray-700">September 17, 2026</span> &bull; Practice: <span className="font-semibold text-gray-700">Stressed Assets Litigation &amp; Document Forensics</span>
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
                  To check if a debt settlement letter is fake or real, a borrower must verify seven mandatory legal essentials: the letter must be issued directly on official bank corporate letterhead rather than an outsourced recovery agency stationary, feature a verifiable Core Banking Solution (CBS) internal reference number, be signed by an authorized bank officer with verifiable employee credentials, direct payment exclusively into the borrower designated loan account rather than third-party or personal UPI accounts, explicitly state full and final discharge under Section 63 of the Indian Contract Act, 1872, commit to quashing Section 138 and Section 25 criminal litigation, and specify a binding timeline for the issuance of an unconditional No Dues Certificate. Any compromise document lacking official banking domain email authentication or demanding cash handover to recovery agents is fraudulent under the Indian Penal Code.
                </p>
              </div>

              {/* ══ SECTION 1: THE EPIDEMIC OF FORGED SETTLEMENT LETTERS ══ */}
              <section id="epidemic-of-fake-settlement-letters" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  DOCUMENT FRAUD ALERT
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The Epidemic of Forged Settlement Letters in Indian Banking &amp; Debt Recovery
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In modern Indian debt recovery, distressed retail borrowers and MSME entrepreneurs facing financial distress
                  frequently fall prey to predatory collection networks. When an account defaults and passes the 90-day non-performing
                  asset (NPA) threshold, commercial banks and Non-Banking Financial Companies (NBFCs) often assign recovery mandates
                  to third-party collection agencies. Driven by aggressive commission targets, unethical recovery personnel exploit
                  borrower desperation by creating and circulating <strong>fabricated One-Time Settlement (OTS) sanction letters</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These forged documents replicate institutional typography, display copied bank logos, and offer irresistible discounts.
                  Borrowers, believing their financial ordeal is ending, transfer substantial sums through digital payment handles or cash.
                  Weeks later, they discover the devastating reality: the lending bank has no record of the settlement, the transferred
                  funds were siphoned into unauthorized accounts, the loan remains active with compounding penal interest, and magistrate
                  court summons under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> continue unabated.
                </p>

                <div className="p-5 rounded-xl border border-red-200 bg-red-50/60 space-y-3">
                  <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                    <span>🚨</span> Common Modus Operandi of Fake Settlement Scams
                  </h3>
                  <ul className="list-disc pl-5 text-sm text-red-900 space-y-2">
                    <li>
                      <strong>WhatsApp PDF Sanctions:</strong> Unofficial collection agents send low-resolution PDF sanction letters via personal WhatsApp numbers, insisting that immediate payment is required within 24 hours to prevent police arrest.
                    </li>
                    <li>
                      <strong>Collection Agency Stationery:</strong> The letter is printed on the letterhead of a recovery vendor or tele-calling agency rather than the actual banking corporation.
                    </li>
                    <li>
                      <strong>Spoofed &amp; Generic Email Addresses:</strong> Correspondence arrives from free public email providers (such as Gmail, Yahoo, or Outlook) or spoofed domain names that mimic bank handles (e.g., support-hdfcsettlement.in instead of the genuine institutional domain).
                    </li>
                    <li>
                      <strong>Diverted Payment Channels:</strong> The letter directs payment to an individual recovery agent bank account, an agency escrow, or a personal UPI ID, falsely claiming it is a nodal collection gateway.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ══ SECTION 2: STATUTORY FOUNDATIONS OF A VALID OTS LETTER ══ */}
              <section id="statutory-foundations-of-valid-ots" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STATUTORY FRAMEWORK
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Statutory Foundations of an Authentic Bank OTS Sanction Letter
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A debt settlement letter is not an informal receipt or a casual assurance; it is an executive bilateral contract
                  governed under established Indian statutory enactments and regulatory circulars of the Reserve Bank of India.
                  For a settlement letter to possess judicial enforceability, it must satisfy three foundational legal pillars:
                </p>

                <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 my-4 bg-gray-50 text-gray-700 italic">
                  <strong>Section 63 of the Indian Contract Act, 1872:</strong> &ldquo;Every promisee may dispense with or remit, wholly or in part, the performance of the promise made to him, or may extend the time for such performance, or may accept instead of it any satisfaction which he thinks fit.&rdquo;
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  Under the doctrine of <em>Accord and Satisfaction</em> codified in Section 63, a promisee (the lending bank) is legally
                  empowered to accept a reduced sum in total extinguishment of the contract. Once this agreement is formalized in writing
                  by an authorized officer and the compromise sum is received, the original debt obligation is legally extinguished.
                  Any subsequent claim by the bank for the remaining balance constitutes a breach of contract and promissory estoppel.
                </p>

                <h3 className="text-xl font-bold text-[#1a202c] mt-6">
                  Reserve Bank of India Directives on Compromise Settlements
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Under the <strong>Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets)</strong> and the
                  subsequent <strong>Framework for Compromise Settlements and Technical Write-offs</strong>, the central bank mandates that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Board-Approved Compromise Mandates:</strong> All compromise settlements must strictly adhere to the lender board-approved compromise policy, outlining delegation of financial authority and transparent eligibility criteria.
                  </li>
                  <li>
                    <strong>Delegated Sanctioning Authority:</strong> A settlement sanction letter can only be signed by an officer invested with specific financial delegation (such as an Assistant General Manager, Chief Manager - Stressed Assets, or Zonal Credit Head), never an unaccredited field recovery agent.
                  </li>
                  <li>
                    <strong>Section 65B Electronic Evidentiary Compliance:</strong> When settlement letters are delivered electronically via email, they must comply with Section 65B of the Indian Evidence Act, 1872 (now Bharatiya Sakshya Adhiniyam) by originating from verifiable corporate email servers with cryptographic server headers.
                  </li>
                </ul>
              </section>

              {/* ══ SECTION 3: THE 7 ESSENTIAL ELEMENTS (FAKE VS REAL CHECKS) ══ */}
              <section id="seven-essential-elements-check" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  FORENSIC VERIFICATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 7 Essential Elements: How to Check if the Debt Settlement Letter is Fake or Real
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Before remitting any compromise funds towards an alleged arrangement, every borrower and legal counsel must
                  subject the document to rigorous forensic examination across these seven critical parameters:
                </p>

                <div className="space-y-6">
                  {/* Element 1 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#1a202c] flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center text-sm font-bold">1</span>
                        Official Bank Corporate Letterhead &amp; Watermark
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">MANDATORY</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      A valid settlement letter must be printed on the official corporate stationary of the principal lending bank or NBFC.
                      It must feature the institution registered corporate logo, official registered office address, Corporate Identity Number
                      (CIN), and high-resolution background watermarking. If the letter is printed on plain paper, features jagged or pixelated
                      logos downloaded from search engines, or bears the name of an outsourced recovery vendor, it is counterfeit.
                    </p>
                  </div>

                  {/* Element 2 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#1a202c] flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center text-sm font-bold">2</span>
                        Core Banking Solution (CBS) Internal Reference Number
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">VERIFIABLE</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Every genuine OTS sanction generated by a banking institution is assigned a unique, system-generated tracking number
                      (e.g., SAMB/OTS/2026-27/08492). This reference number is logged in the bank Core Banking Solution (CBS) such as Finacle
                      or BaNCS. A borrower or their legal counsel can present this reference number at any official branch or verify it through
                      the bank grievance portal. If a letter contains no reference number, or if branch staff state that the number does not exist
                      in their internal intranet, the letter is a complete fabrication.
                    </p>
                  </div>

                  {/* Element 3 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#1a202c] flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center text-sm font-bold">3</span>
                        Authorized Signatory Credentials &amp; Banking Domain Email
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">INSTITUTIONAL</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The document must display the complete name, official employee code, branch/vertical designation, and signature stamp
                      of an authorized bank official holding delegated financial powers. Furthermore, if the letter was delivered digitally,
                      it must originate directly from an institutional banking domain (e.g., @icicibank.com, @sbi.co.in, @axisbank.com).
                      Under Reserve Bank of India IT governance norms, official settlement communications sent via public domain addresses
                      carry zero evidentiary validity and are considered unauthorized.
                    </p>
                  </div>

                  {/* Element 4 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#1a202c] flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center text-sm font-bold">4</span>
                        Full &amp; Final Extinguishment Clause under Section 63
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">LEGAL IMMUNITY</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The letter must contain explicit statutory language confirming that the sanctioned compromise amount constitutes
                      <strong>&ldquo;full, final, and complete discharge of all outstanding contractual liabilities&rdquo;</strong> in respect of the specified
                      loan account. It must explicitly state that the remaining balance, penal charges, and accrued interest are irrevocably waived.
                      If the letter ambiguous language indicating that the payment will merely be adjusted as a part-payment or that the bank
                      reserves rights to revive the remaining debt, the document fails to provide legal settlement protection.
                    </p>
                  </div>

                  {/* Element 5 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#1a202c] flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center text-sm font-bold">5</span>
                        Direct-to-Account Payment Mechanism (Zero Third Parties)
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">CRITICAL AUDIT</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This is the single most vital fraud detection checkpoint. A valid settlement letter will <em>only</em> instruct the borrower
                      to deposit funds directly into their own active loan account number or submit a crossed Demand Draft drawn payable directly to
                      the institutional name of the lender (e.g., &ldquo;HDFC Bank Ltd - A/c No. XXXXXXXXXXXX&rdquo;). Any instruction to remit funds to an
                      agency account, third-party private company, or an individual recovery agent UPI ID is fraudulent. Under Indian banking law,
                      payments made to third parties do not reduce CBS debt obligations.
                    </p>
                  </div>

                  {/* Element 6 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#1a202c] flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center text-sm font-bold">6</span>
                        Compounding of Criminal Cases &amp; Litigation Withdrawal
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">JUDICIAL SHIELD</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      If the lender has initiated legal action—such as criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881
                      for cheque dishonour, Section 25 of the Payment and Settlement Systems Act, 2007 for NACH mandate failure, or civil arbitration
                      under the Arbitration and Conciliation Act, 1996—the settlement letter must contain an unambiguous covenant obligating the lender
                      to file applications for compounding of offenses and withdraw all pending judicial petitions upon receipt of funds.
                    </p>
                  </div>

                  {/* Element 7 */}
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#1a202c] flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center text-sm font-bold">7</span>
                        Mandatory Delivery Timeline for No Dues Certificate (NDC) &amp; CIBIL Update
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-green-100 text-green-800">FINAL CLOSURE</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      A genuine sanction letter specifies an exact timeframe (typically 15 to 30 calendar days from payment clearance) within which
                      the bank will issue an unconditional No Dues Certificate (NDC) and return any undrawn security cheques or collateral documents.
                      Additionally, the letter must formally confirm that the lending institution will report the loan status as &ldquo;Settled&rdquo; to
                      all four RBI-registered credit bureaus (CIBIL, Experian, Equifax, and CRIF High Mark) in accordance with the Credit Information
                      Companies (Regulation) Act, 2005.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 4: COMMERCIAL REALITY (ADVOCATE VS DIY VS CORPORATE) ══ */}
              <section id="advocate-vs-diy-vs-corporate" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  COMMERCIAL EVALUATION
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Commercial Realities: Advocate-Led Verification vs. Free DIY Templates vs. Corporate Retainers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When evaluating whether a settlement letter is legitimate, borrowers are caught between risky shortcuts and unaffordable
                  traditional legal avenues. Understanding the comparative strengths and structural vulnerabilities of each option is vital
                  for securing genuine debt relief without financial exploitation.
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>⚠️</span> The Dangerous Illusion of Free DIY Online Templates
                    </h3>
                    <p className="text-sm text-red-800 mt-2 leading-relaxed">
                      Automated online settlement letter generators and free downloaded samples cannot verify the authenticity of a bank sanction.
                      Generic templates provide zero ability to audit Core Banking Solution internal references, cannot interface with bank zonal
                      stressed asset committees, and have no legal standing under the Advocates Act, 1961. Relying on an automated form generator
                      leaves borrowers completely defenseless when rogue collection agents issue forged letters.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50">
                    <h3 className="font-bold text-blue-900 text-base flex items-center gap-2">
                      <span>⚖️</span> The Prohibitive Burden of Corporate Law Firm Retainers
                    </h3>
                    <p className="text-sm text-blue-800 mt-2 leading-relaxed">
                      Traditional corporate law firms operate on open-ended hourly billing schedules and demand substantial upfront retainers.
                      For distressed individuals or small business owners already facing severe liquidity shortages, these corporate legal fee
                      structures create additional financial anxiety. Borrowers require cost predictability, rapid document authentication,
                      and senior advocate representation without recurring billing shocks.
                    </p>
                  </div>
                </div>

                {/* INSTITUTIONAL COMPARISON TABLE */}
                <h3 className="text-xl font-bold text-[#1a202c] mt-8">
                  Institutional Comparison: Settlement Letter Vetting &amp; Legal Protection
                </h3>
                <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#1a202c] text-white">
                        <th className="p-3.5 sm:p-4 font-bold border-b border-gray-700">Legal Feature &amp; Capability</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Free DIY Online Templates</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Unregulated Recovery Apps</th>
                        <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-700">Corporate Law Firms</th>
                        <th className="p-3.5 sm:p-4 font-bold text-[#D2A02A] border-b border-gray-700 bg-black/30">AMA Legal Solutions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Forensic CBS Sanction Audit</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Zero Capability</td>
                        <td className="p-3.5 sm:p-4 text-red-600">No Banking Access</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Institutional Audit</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Direct Stressed Asset Verification</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Court Standing (Advocates Act)</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Zero Standing</td>
                        <td className="p-3.5 sm:p-4 text-red-600">No Legal Standing</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Full Court Standing</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Full Court Standing (Vakalatnama)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Advocate-Client Privilege (Sec 126)</td>
                        <td className="p-3.5 sm:p-4 text-red-600">None</td>
                        <td className="p-3.5 sm:p-4 text-red-600">None (Exposed Data)</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Privileged</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Strict Statutory Privilege</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Section 138 &amp; 25 Compounding</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Incapable of Defense</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Cannot Represent</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Compounding Petitions</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Judicial Compounding &amp; Quashing</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">Commercial Advisory Structure</td>
                        <td className="p-3.5 sm:p-4 text-gray-500">Unverified / Unregulated</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Monthly Subscriptions</td>
                        <td className="p-3.5 sm:p-4 text-red-600">Hourly Rates &amp; High Retainers</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Transparent Fixed Legal Advisory</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-3.5 sm:p-4 font-bold text-gray-900">No Dues Certificate Enforcement</td>
                        <td className="p-3.5 sm:p-4 text-red-600">High Risk of Fake Letters</td>
                        <td className="p-3.5 sm:p-4 text-amber-600">Administrative Only</td>
                        <td className="p-3.5 sm:p-4 text-green-700">Legal Follow-up</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700 bg-amber-50/40">Advocate-Enforced Bank Delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  AMA Legal Solutions fills this critical commercial void. We provide accessible, transparent, fixed legal advisory
                  without hourly markups or surprise retainers. Distressed borrowers receive senior advocate document verification,
                  institutional bank liaison, and magistrate court litigation defense with absolute cost transparency.
                </p>
              </section>

              {/* ══ SECTION 5: 5-STEP FORENSIC VERIFICATION PROTOCOL ══ */}
              <section id="forensic-verification-protocol" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STEP-BY-STEP WORKFLOW
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Step Forensic Legal Verification Protocol
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When a borrower presents a purported debt settlement letter to our legal team, we implement an uncompromising
                  five-step forensic verification protocol before any funds are released:
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl border-l-4 border-[#D2A02A] bg-gray-50 space-y-1">
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">Step 1</span>
                    <h3 className="text-base font-bold text-[#1a202c]">
                      Corporate Domain &amp; Electronic Header Authentication
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We verify that the digital document originated from an authenticated corporate email server belonging to the bank,
                      evaluating cryptographic DKIM, SPF, and DMARC mail headers to rule out address spoofing or intermediate tampering.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border-l-4 border-[#D2A02A] bg-gray-50 space-y-1">
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">Step 2</span>
                    <h3 className="text-base font-bold text-[#1a202c]">
                      Core Banking Solution (CBS) Internal Sanction Audit
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Our advocates interface directly with the designated branch manager and zonal stressed assets department to cross-reference
                      the unique sanction reference number against the bank live CBS database, confirming that the approval is officially recorded.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border-l-4 border-[#D2A02A] bg-gray-50 space-y-1">
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">Step 3</span>
                    <h3 className="text-base font-bold text-[#1a202c]">
                      Signatory Power of Attorney &amp; Delegation Vetting
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We verify that the signing officer possesses legitimate delegation of powers under the bank board-approved compromise policy
                      and that their employee credentials match internal banking directories.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border-l-4 border-[#D2A02A] bg-gray-50 space-y-1">
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">Step 4</span>
                    <h3 className="text-base font-bold text-[#1a202c]">
                      Statutory Clause Scrutiny &amp; Section 138 Compounding Enforcement
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We scrutinize the contractual clauses to ensure absolute debt extinguishment under Section 63 of the Indian Contract Act,
                      incorporating explicit commitments for the compounding and withdrawal of all pending Section 138 NI Act and Section 25 PSSA court cases.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border-l-4 border-[#D2A02A] bg-gray-50 space-y-1">
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">Step 5</span>
                    <h3 className="text-base font-bold text-[#1a202c]">
                      Supervised Direct Account Payment &amp; NDC Delivery
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Payment is executed strictly into the designated loan master account via traceable banking instruments. Following clearance,
                      we enforce the statutory delivery of an unconditional bank No Dues Certificate and verify updated reporting across credit bureaus.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SIGNATURE EDITORIAL INFOGRAPHIC CARD ══ */}
              <div
                id="signature-infographic"
                className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm"
              >
                <div className="text-center mb-4">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    EXECUTIVE LEGAL INFOGRAPHIC
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1a202c]">
                    Forensic Verification Architecture: Fake vs Real Debt Settlement Letters
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Comprehensive checklist of essential security markers mandated under Indian banking law and RBI compromise guidelines.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                  <img
                    src="/images/og/essentials-of-a-valid-debt-settlement-letter.png"
                    alt="Infographic: Essentials of a Valid Debt Settlement Letter - How to Check Fake vs Real"
                    className="w-full h-auto object-contain block"
                  />
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg border border-gray-100 text-center">
                  <p className="text-xs text-gray-600 font-medium">
                    <em>Statutory Note:</em> Under Section 63 of the Indian Contract Act, 1872 and RBI Master Directions, only institutional
                    bank sanction letters with verifiable CBS tracking numbers provide permanent legal extinguishment of debt.
                  </p>
                </div>
              </div>

              {/* ══ SECTION 6: CATASTROPHIC RISKS OF PAYING ON A FAKE LETTER ══ */}
              <section id="catastrophic-risks-of-paying-fake" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  LEGAL CONSEQUENCES
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Catastrophic Risks of Paying on a Fake Settlement Letter
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Transferring funds pursuant to a counterfeit debt settlement letter causes catastrophic financial and judicial damage.
                  Because the transaction occurs outside the bank Core Banking Solution parameters, the legal fallout is severe:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-2">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>❌</span> Continued Liability &amp; Loss of Funds
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Monies paid to an unauthorized recovery agent or third-party account are treated as zero payment by the lending bank.
                      The principal loan balance remains completely unpaid, interest compounds daily, and the borrower loses their hard-earned money.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-2">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>❌</span> Ongoing Section 138 Criminal Prosecution
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Because the bank legal vertical never sanctioned the compromise, pending criminal cases under Section 138 of the Negotiable
                      Instruments Act or Section 25 of the Payment and Settlement Systems Act proceed unabated, resulting in bailable or non-bailable warrants.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-2">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>❌</span> Permanent Credit Bureau Damage (CIBIL Write-Off)
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Without a legitimate settlement agreement logged on the bank CBS, the account is eventually flagged as &ldquo;Written Off&rdquo; or
                      &ldquo;Suit Filed&rdquo; across CIBIL, Experian, and Equifax, destroying creditworthiness for up to seven years.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50/40 space-y-2">
                    <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
                      <span>❌</span> Forfeiture of Genuine OTS Eligibility
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Lenders may interpret unauthorized third-party arrangements as deliberate evasion, leading the bank compromise committee to
                      revoke future settlement concessions and initiate immediate asset attachment or salary garnishee proceedings.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 7: CRIMINAL & RBI REMEDIES AGAINST FORGERY ══ */}
              <section id="criminal-remedies-against-forgery" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  STATUTORY RECOURSE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Criminal &amp; RBI Statutory Remedies Against Fraudulent Recovery Agents
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Indian law provides potent criminal and regulatory remedies against recovery personnel and agencies that fabricate
                  settlement documents. When our advocates uncover a forged settlement notice, we initiate swift statutory countermeasures:
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                      <span>⚖️</span> First Information Report (FIR) under Indian Penal Code / BNS
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We draft and lodge criminal complaints before the police authorities for registration of an FIR under <strong>Section 420</strong> (Cheating),
                      <strong>Section 468</strong> (Forgery for purpose of cheating), <strong>Section 471</strong> (Using as genuine a forged document), and
                      <strong>Section 384</strong> (Extortion) of the Indian Penal Code (or corresponding sections under the Bharatiya Nyaya Sanhita).
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                      <span>🏛️</span> Escalation under the RBI Integrated Ombudsman Scheme, 2021
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Under the Reserve Bank of India Master Direction on Managing Risks in Outsourcing of Financial Services, principal lenders
                      bear <strong>vicarious liability</strong> for the unlawful actions of contracted recovery agencies. We submit formal petitions
                      before the Banking Ombudsman to enforce immediate penalty sanctions and secure institutional debt resolution.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-base flex items-center gap-2">
                      <span>💻</span> National Cyber Crime Reporting Portal Filing
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Where forged letters are circulated via WhatsApp, spoofed emails, or fake payment links, we report the digital identifiers
                      and fraudulent UPI IDs to the National Cyber Crime Reporting Portal (cybercrime.gov.in) to trigger bank account freezing
                      and telecommunication blacklisting.
                    </p>
                  </div>
                </div>
              </section>

              {/* ══ SECTION 8: 8-QUESTION ACCORDION FAQ ══ */}
              <section id="frequently-asked-questions" className="space-y-6">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  COMMONLY ASKED QUESTIONS
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Frequently Asked Questions on Checking Debt Settlement Letters
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Review clear statutory answers to the most urgent questions regarding the verification and legal enforceability of bank One-Time Settlement letters in India:
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:text-[#D2A02A] transition-colors gap-4 cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-base sm:text-lg">{faq.question}</span>
                          <span className="text-[#D2A02A] text-xl font-extrabold flex-shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ══ MORE LEGAL GUIDES INTERNAL LINK GRID ══ */}
              <section id="internal-guides" className="space-y-6 pt-6 border-t border-gray-200">
                <div className="inline-block px-3 py-1 bg-[#D2A02A]/15 text-[#5A4C33] text-xs font-bold rounded-full">
                  KNOWLEDGE BASE
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  More Legal Debt Relief &amp; Settlement Guides
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Explore our authoritative statutory guides on debt settlement, recovery defense, and credit score rehabilitation:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    href="/debt-settlement-letter"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50 hover:bg-white transition shadow-sm group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A] transition">
                      Debt Settlement Letter Format &amp; Negotiation &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Statutory proposal drafting, bank negotiation, and RBI OTS framework.
                    </p>
                  </Link>

                  <Link
                    href="/what-is-debt-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50 hover:bg-white transition shadow-sm group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A] transition">
                      What is Debt Settlement? &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Statutory meaning, RBI OTS directives, and borrower rights in India.
                    </p>
                  </Link>

                  <Link
                    href="/debt-settlement-kya-hota-hai"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50 hover:bg-white transition shadow-sm group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A] transition">
                      Debt Settlement Kya Hota Hai? &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Complete legal process, RBI OTS rules, and advocate advisory.
                    </p>
                  </Link>

                  <Link
                    href="/best-debt-settlement-service-in-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50 hover:bg-white transition shadow-sm group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A] transition">
                      Best Debt Settlement Service in India &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Advocate-led compromise resolution and institutional representation.
                    </p>
                  </Link>

                  <Link
                    href="/when-to-choose-debt-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50 hover:bg-white transition shadow-sm group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A] transition">
                      When to Choose Debt Settlement? &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Critical signs, legal timing, and financial distress evaluation.
                    </p>
                  </Link>

                  <Link
                    href="/debt-settlement-best-waiver"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50 hover:bg-white transition shadow-sm group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A] transition">
                      Best Debt Settlement Waiver &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Advocate-led OTS negotiation and maximum RBI statutory concessions.
                    </p>
                  </Link>

                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50 hover:bg-white transition shadow-sm group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A] transition">
                      Settlement vs Debt Consolidation &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Comparing legal liabilities, interest compounding, and credit impacts.
                    </p>
                  </Link>

                  <Link
                    href="/loan-write-off-vs-loan-settlement"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50 hover:bg-white transition shadow-sm group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A] transition">
                      Settlement vs Loan Write-Off &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Balance sheet technical write-offs versus bilateral accord and satisfaction.
                    </p>
                  </Link>

                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] bg-gray-50 hover:bg-white transition shadow-sm group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D2A02A] transition">
                      Stop Recovery Agent Harassment Legally &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Invoking RBI Fair Practices Code, cease-and-desist notices, and court relief.
                    </p>
                  </Link>
                </div>
              </section>

              {/* ══ REFERENCES & AUTHORITY ══ */}
              <section id="statutory-references" className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-sm text-[#1a202c] uppercase tracking-wider">
                  Statutory References &amp; Regulatory Authorities
                </h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-2">
                  <li>
                    &bull; Reserve Bank of India (RBI):{" "}
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                    >
                      Prudential Framework for Resolution of Stressed Assets &amp; Compromise Settlements
                    </a>
                  </li>
                  <li>
                    &bull; Legislative Department of India:{" "}
                    <a
                      href="https://indiankanoon.org/doc/171398/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                    >
                      Section 63, Indian Contract Act, 1872 (Accord &amp; Satisfaction)
                    </a>
                  </li>
                  <li>
                    &bull; eCourts Integrated Services:{" "}
                    <a
                      href="https://ecourts.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                    >
                      Negotiable Instruments Act, 1881 (Section 138 Compounding Procedures)
                    </a>
                  </li>
                  <li>
                    &bull; Credit Information Companies (Regulation) Act, 2005:{" "}
                    <a
                      href="https://www.cibil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                    >
                      Statutory Reporting Standards for Settled Accounts
                    </a>
                  </li>
                  <li>
                    &bull; National Cyber Crime Reporting Portal:{" "}
                    <a
                      href="https://cybercrime.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                    >
                      Cyber Crime Reporting of Document Forgery &amp; Financial Cheating
                    </a>
                  </li>
                </ul>
              </section>

              {/* Social Share Row at Bottom */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Share this Legal Verification Guide:
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
                    onClick={() => handleShare("whatsapp")}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-green-50 text-green-700 hover:bg-green-100 transition"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* ══ AMA COMPANY & MEDIA SECTION ══ */}
              <section
                id="ama-company-section"
                className="p-6 sm:p-8 bg-[#FAF7F0] border-4 border-[#D2A02A] rounded-2xl space-y-6 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <img
                      src={LOGO_URL}
                      alt="AMA Legal Solutions"
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-black text-[#1a202c]">
                        AMA Legal Solutions
                      </h3>
                      <p className="text-xs text-gray-600 font-medium">
                        Premier Stressed Assets, Banking Litigation &amp; Dispute Resolution Law Chamber
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                    <span className="text-yellow-500 text-lg">⭐</span>
                    <span className="font-extrabold text-sm text-gray-900">4.7 / 5.0</span>
                    <span className="text-xs text-gray-500 font-medium">(Verified Client Reviews)</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  <p>
                    Founded by <strong>Advocate Anuj Anand Malik</strong>, AMA Legal Solutions is an elite Indian legal practice
                    dedicated to defending borrowers, entrepreneurs, and retail consumers against aggressive banking practices,
                    fraudulent recovery rackets, and unmanageable debt spirals.
                  </p>
                  <p>
                    Operating under transparent, fixed legal advisory without hourly markups or surprise retainers, our advocates
                    conduct forensic audits of settlement letters, protect clients under statutory advocate-client privilege
                    (Section 126 of the Indian Evidence Act, 1872), defend against Section 138 NI Act and Section 25 PSSA summons,
                    and secure authentic, bank-issued No Dues Certificates.
                  </p>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Our Core Practice Solutions:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <Link
                      href="/debt-settlement-letter"
                      className="px-3.5 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                    >
                      OTS Letter Verification
                    </Link>
                    <Link
                      href="/what-is-debt-settlement"
                      className="px-3.5 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                    >
                      Debt Settlement Advisory
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="px-3.5 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                    >
                      Recovery Harassment Defense
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="px-3.5 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                    >
                      Section 138 NI Act Defense
                    </Link>
                    <Link
                      href="/best-debt-settlement-company"
                      className="px-3.5 py-1.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition font-bold text-xs"
                    >
                      Institutional Compromise
                    </Link>
                  </div>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar */}
            <aside className="space-y-8 sticky top-24">
              
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
                      <Link href="/author/anuj-anand-malik" className="hover:text-[#D2A02A] transition">
                        Anuj Anand Malik
                      </Link>
                    </h3>
                    <p className="text-xs text-[#D2A02A] font-semibold">
                      Founder &amp; Senior Advocate
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Bar Council of Delhi &bull; Supreme Court &amp; High Court Practitioner
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Specializing in banking law, stressed assets litigation, debt restructuring, and criminal defense under Section 138 of the Negotiable Instruments Act. Passionate about defending borrowers against predatory recovery tactics.
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/author/anuj-anand-malik"
                    className="text-xs font-bold text-[#D2A02A] hover:underline"
                  >
                    View Complete Profile &rarr;
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-[#0077b5] transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-xl space-y-4 border border-[#D2A02A]/30">
                <span className="inline-block px-2.5 py-1 bg-[#D2A02A] text-white text-[10px] font-extrabold uppercase tracking-wider rounded">
                  AUTHENTICATE YOUR LETTER
                </span>
                <h3 className="text-xl font-bold leading-snug">
                  Unsure if Your Settlement Letter is Real or Fake?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Do not transfer settlement funds to unverified accounts. Let our senior advocates conduct an immediate forensic CBS audit and verify institutional validity under our transparent fixed legal advisory.
                </p>
                <div className="space-y-2.5 pt-2">
                  <a
                    href="tel:+918700343611"
                    className="block w-full py-3 bg-[#D2A02A] hover:bg-[#b08522] text-white text-center rounded-xl font-bold text-sm shadow-md transition"
                  >
                    📞 Call: +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full py-3 bg-white/10 hover:bg-white/20 text-white text-center rounded-xl font-semibold text-sm border border-white/20 transition cursor-pointer"
                  >
                    Request Callback
                  </button>
                </div>
              </div>

              {/* Client Reviews Card (Verbatim to Schema) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <h3 className="font-bold text-[#1a202c] text-xs uppercase tracking-wider">
                    Client Testimonial
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#1a202c]">5.0</span>
                    <Stars count={5} />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-gray-600 italic leading-relaxed">
                    &ldquo;{clientReviewData.reviewBody}&rdquo;
                  </p>
                  <div className="pt-2">
                    <p className="font-bold text-xs text-gray-900">
                      {clientReviewData.authorName}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      {clientReviewData.authorRole}
                    </p>
                  </div>
                </div>

                <Link
                  href="/reviews"
                  className="block text-center text-xs font-bold text-[#D2A02A] hover:underline pt-2 border-t border-gray-100"
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
                    href="/debt-settlement-letter"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement Proposal Format
                  </Link>
                  <Link
                    href="/what-is-debt-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; What is Debt Settlement in India?
                  </Link>
                  <Link
                    href="/debt-settlement-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Debt Settlement India Legal Guide
                  </Link>
                  <Link
                    href="/best-debt-settlement-company"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Best Debt Settlement Company
                  </Link>
                  <Link
                    href="/loan-settlement-vs-debt-consolidation"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Settlement vs Debt Consolidation
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Stop Recovery Harassment Legally
                  </Link>
                  <Link
                    href="/how-to-file-a-complaint-against-bank-nbfc-in-rbi"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; File Complaint Against Bank in RBI
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
                      Verify Settlement Letter
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
                          Category / Matter Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm bg-white"
                        >
                          <option value="Settlement Letter Verification">Settlement Letter Verification</option>
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
                        placeholder="Mention the lending bank name, whether the letter came via WhatsApp or email, and if payment is being demanded..."
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

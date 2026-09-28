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
const PAGE_SLUG = "/section-25-payment-and-settlement-act-legal-defense";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/section-25-payment-and-settlement-act-legal-defense.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-28";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Is an arrest warrant automatically issued upon receiving a Section 25 PSSA notice?",
    answer:
      "No, an arrest warrant is never automatically issued upon the receipt of a statutory demand notice or even the initial filing of a complaint under Section 25 of the Payment and Settlement Systems Act, 2007. The magistrate must first review the lender's sworn verification and issue a bailable summons requiring appearance; warrants are only considered if a summoned borrower repeatedly fails to enter an appearance either in person or through an authorized Bar Council advocate.",
  },
  {
    id: "faq-2",
    question: "What is the maximum punishment prescribed under Section 25 of the PSSA?",
    answer:
      "Under Section 25(1) of the Payment and Settlement Systems Act, 2007, the statutory punishment for dishonour of an electronic funds transfer due to insufficiency of funds is imprisonment for a term which may extend to two years, or with a fine which may extend to twice the amount of the electronic mandate dishonoured, or with both. However, because Section 25 is compoundable and bailable, the vast majority of cases conclude through mutual settlement or compounding before trial commences.",
  },
  {
    id: "faq-3",
    question: "What is the mandatory statutory notice period required before a bank can file a Section 25 complaint?",
    answer:
      "Under Section 25(1)(b) of the PSSA, the complainant institution must serve a formal written statutory demand notice upon the account holder within thirty days of receiving intimation from the clearing house regarding the electronic funds dishonour. The borrower is granted a mandatory statutory grace window of fifteen days from the date of receipt of the notice to pay the unpaid mandate amount before any criminal complaint can lawfully be filed in court.",
  },
  {
    id: "faq-4",
    question: "Can an advocate appear on behalf of the borrower under Section 205 CrPC?",
    answer:
      "Yes, an accused borrower can file an application under Section 205 of the Code of Criminal Procedure, 1973 (corresponding to Section 228 of the Bharatiya Nagarik Suraksha Sanhita, 2023) requesting the magistrate to dispense with their personal attendance and permit their enrolled defense advocate to represent them across routine hearings. Magistrates routinely grant this exemption in quasi-criminal commercial dishonour matters when represented by licensed counsel who undertakes that the borrower will appear whenever specifically directed.",
  },
  {
    id: "faq-5",
    question: "How can a Section 25 court case be compounded and withdrawn post-settlement?",
    answer:
      "By virtue of Section 25(5) of the PSSA read with Section 147 of the Negotiable Instruments Act, 1881 and Section 320 of the CrPC (Section 359 BNSS), every offense punishable under Section 25 is compoundable. Once a compromise One-Time Settlement (OTS) is executed and the lender receives the agreed settlement remittance, both parties file a joint compounding petition or the complainant files a formal withdrawal memo before the magistrate, resulting in the complete discharge and acquittal of the accused borrower.",
  },
  {
    id: "faq-6",
    question: "What is the legal difference between an ordinary loan default and a Section 25 offense?",
    answer:
      "An ordinary loan default is purely a civil breach of a contractual lending agreement actionable through money recovery suits before civil courts or recovery certificates under SARFAESI and DRT statutes. Conversely, a Section 25 offense is a statutory penal violation triggered specifically by the dishonour of an electronic mandate (NACH or e-mandate) due to insufficiency of funds, converting an unpaid debt installment into a quasi-criminal complaint filed before a Metropolitan Magistrate.",
  },
  {
    id: "faq-7",
    question: "What happens if an electronic mandate bounces due to a closed or frozen bank account?",
    answer:
      "If an electronic funds transfer bounces with bank remarks such as 'Account Closed' or 'Account Frozen', the statutory presumption of insufficiency of funds under Section 25 still applies if the account was closed prior to honoring a pre-authorized standing mandate. However, if the account was frozen by an external regulatory or law enforcement directive without the borrower's control, a defense advocate can present certified banking records to demonstrate lack of mens rea and dispute the statutory prerequisite of voluntary fund insufficiency.",
  },
  {
    id: "faq-8",
    question: "Can a non-bailable warrant (NBW) be recalled if a borrower missed a prior court date?",
    answer:
      "Yes, if a non-bailable warrant has been issued due to non-service of summons, address change, or an inadvertent missed court date, an enrolled advocate can immediately file a formal application under Section 70(2) of the CrPC to cancel or recall the warrant. By submitting an affidavit establishing bona fide reasons for the prior absence and demonstrating willingness to submit to judicial process and explore compounding, advocates routinely secure warrant recall on the very day of filing without custodial arrest.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Alok Srivastava",
  authorRole: "Small Business Owner • Commercial Credit & NACH Litigation Defense",
  reviewBody:
    "An NBFC filed a criminal complaint against me under Section 25 of the Payment and Settlement Systems Act after two consecutive NACH mandate bounces. The court issued bailable summons. AMA Legal Solutions assigned an advocate who represented me before the Metropolitan Magistrate, secured bail without hassle, and mediated with the lender's counsel to compound the complaint into an affordable OTS.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Section 25 Payment & Settlement Systems Act: Notice, Bailable Warrant & Legal Defense",
      description:
        "Received a court summons or notice under Section 25 PSSA for NACH auto-debit bounce? Learn bail rules, compounding procedure, and how advocates resolve the case.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Section 25 Payment & Settlement Systems Act: Notice, Bailable Warrant & Legal Defense",
      description:
        "Comprehensive authoritative legal analysis of Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). Covers NACH bounce legal notices, bailable warrant recall, Section 205 CrPC personal appearance exemption, compounding procedures, and advocate-led OTS debt resolution.",
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
      name: "Section 25 PSSA Criminal Defense & Compounding Settlement Representation",
      description:
        "Licensed Bar Council advocate legal defense for electronic funds bounce, NACH debit dishonour notices, warrant recall under Section 70(2) CrPC, Section 205 appearance exemption, and One-Time Settlement (OTS) compounding.",
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
          name: "Section 25 Payment & Settlement Systems Act Legal Defense",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Stage Advocate Protocol for Section 25 PSSA Defense & Compounding Settlement",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Statutory Notice Analysis & Jurisdictional Scrutiny",
          description:
            "Examining the bank demand notice under Section 25(1)(b) to verify statutory limitation, proper clearing house memo, mandate validity, and territorial jurisdiction.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Formal Legal Reply & Cease-and-Desist Enforcement",
          description:
            "Serving an exhaustive statutory reply establishing bona fide financial hardship, challenging illegal penal levies, and restraining third-party collection agency harassment.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Magisterial Court Appearance, Bail & Section 205 Exemption",
          description:
            "Filing formal advocate Vakalatnama, securing regular bail upon personal bond under Section 436 CrPC, and petitioning for exemption from personal attendance under Section 205 CrPC.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Emergency Recall of Bailable or Non-Bailable Warrants",
          description:
            "Moving immediate applications under Section 70(2) CrPC to recall unexecuted warrants issued due to address mismatch or non-service of summons without custodial risk.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Judicial Compounding & Complete Criminal Discharge",
          description:
            "Negotiating an advocate-led compromise OTS with lender nodal leadership, remitting the compromise amount directly, and obtaining an official court compounding order under Section 147 NI Act / Section 320 CrPC.",
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
  { id: "quick-answer", title: "Quick Answer: Section 25 PSSA Defense" },
  { id: "statutory-framework", title: "Statutory Framework: Section 25 PSSA Explained" },
  { id: "bailable-status-bail-rules", title: "Is Section 25 Bailable or Non-Bailable?" },
  { id: "notice-period-limitation", title: "Mandatory Notice & Limitation Rules" },
  { id: "warrants-and-recall-procedure", title: "Bailable Warrants & Section 70(2) Recall" },
  { id: "section-205-crpc-exemption", title: "Section 205 CrPC Personal Appearance Exemption" },
  { id: "comparative-reality-matrix", title: "Bank Threat Narrative vs Judicial Reality" },
  { id: "section-25-vs-section-138", title: "Section 25 PSSA vs Section 138 NI Act" },
  { id: "signature-infographic", title: "Litigation Defense & Compounding Blueprint" },
  { id: "five-stage-advocate-protocol", title: "5-Stage Advocate Settlement Protocol" },
  { id: "telecallers-vs-advocates", title: "Recovery Agencies vs Bar Council Advocates" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Legal Advisory" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Defense & Debt Relief Guides" },
  { id: "statutory-references", title: "Regulatory Authorities & Judicial Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function Section25LegalDefenseClient() {
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
    assetType: "Section 25 PSSA NACH Bounce Notice",
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
    const textMsg = `Hello AMA Legal Solutions, I require urgent confidential advocate consultation regarding a Section 25 Payment and Settlement Systems Act court notice, summons, or warrant.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Matter Type: ${formData.assetType}
Details: ${formData.message || "Requesting advocate representation for court appearance, bail, warrant recall, and compounding settlement."}`;
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
      assetType: "Section 25 PSSA NACH Bounce Notice",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Section 25 Payment & Settlement Systems Act: Notice, Bailable Warrant & Legal Defense – AMA Legal Solutions";
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
      label: "Section 25 PSSA Legal Defense",
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
                <span>⚖️</span> Criminal Litigation Defense &bull; High Court &amp; Magisterial Practice
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Section 25 Payment &amp; Settlement Systems Act:{" "}
                <span className="text-[#D2A02A]">Notice, Bailable Warrant &amp; Legal Defense</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Received a statutory demand notice, court summons, or bailable warrant under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) following a NACH or e-mandate bounce? Understand your statutory bail rights under Section 436 CrPC, how enrolled advocates secure court appearance exemptions under Section 205 CrPC, and the judicial procedure to compound criminal complaints into a permanent compromise settlement.
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
                    <span>⏱️ 17 Min Read</span>
                  </div>
                </div>
              </div>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ✓ 100% Bailable Offense (Sec 436 CrPC)
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  ✓ Section 205 CrPC Appearance Exemption
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  ✓ Section 70(2) Warrant Recall Protocol
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-200 border border-purple-200">
                  ✓ Compoundable Under Section 147 NI Act
                </span>
              </div>
            </div>

            {/* Right Col — Generated Luxury OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/section-25-payment-and-settlement-act-legal-defense.png"
                  alt="Section 25 Payment and Settlement Systems Act Legal Defense – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    NACH &amp; E-Mandate Criminal Defense
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Magisterial Representation &bull; Bail as a Matter of Right &bull; Permanent Compounding
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
                  Verified Google Client Reviews
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⚖️</span> Bar Council
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Enrolled Criminal Defense Advocates
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🏛️</span> Pan-India Courts
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Metropolitan &amp; Judicial Magistrates
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🔒</span> 100% Privilege
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Sec 126 Evidence Act Confidentiality
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
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Statutory Criminal Defense Advisory &bull; Updated September 2026
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-medium mr-1">Share:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white text-gray-600 flex items-center justify-center transition"
                    title="Share on Facebook"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-600 flex items-center justify-center transition"
                    title="Share on X (Twitter)"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#0A66C2] hover:text-white text-gray-600 flex items-center justify-center transition"
                    title="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#25D366] hover:text-white text-gray-600 flex items-center justify-center transition"
                    title="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white text-gray-600 flex items-center justify-center transition"
                    title="Copy Article Link"
                  >
                    {shareMsg ? (
                      <FaCheck className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <FaCopy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* ── 1. STANDALONE QUICK-ANSWER BLOCK ── */}
              <div
                id="quick-answer"
                className="p-6 md:p-8 bg-amber-50/80 border-2 border-[#D2A02A] rounded-2xl shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A4C33]">
                  <span>⚡</span> Quick Legal Answer: Section 25 PSSA Defense &amp; Bail Status
                </div>
                <p className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                  Section 25 of the Payment and Settlement Systems Act, 2007 is a bailable and compoundable offense penalizing the dishonour of electronic fund transfers (NACH or e-mandate bounces) due to insufficient funds. A borrower who receives a court summons cannot be arrested immediately; they are entitled to regular bail as a matter of right upon furnishing a personal bond before the Magistrate. A defense advocate can file for exemption from personal appearance under Section 205 CrPC and compound the offense through a mutual loan settlement.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-gray-600">
                  <span className="bg-white/80 px-2.5 py-1 rounded border border-[#D2A02A]/40">
                    Statute: PSSA 2007 &sect; 25
                  </span>
                  <span className="bg-white/80 px-2.5 py-1 rounded border border-[#D2A02A]/40">
                    Bail Entitlement: CrPC &sect; 436 / BNSS &sect; 478
                  </span>
                  <span className="bg-white/80 px-2.5 py-1 rounded border border-[#D2A02A]/40">
                    Compounding: NI Act &sect; 147 / CrPC &sect; 320
                  </span>
                </div>
              </div>

              {/* ── 2. STATUTORY FRAMEWORK ── */}
              <section id="statutory-framework" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Statutory Framework: Understanding Section 25 of the PSSA, 2007
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  With the digitization of the Indian retail banking architecture, traditional physical post-dated cheques (PDCs) were largely superseded by the National Automated Clearing House (NACH) and recurring electronic mandates (e-mandates) administered under the auspices of the National Payments Corporation of India (NPCI). To establish judicial parity between paper instrument dishonours and electronic debit failures, Parliament enacted the <strong>Payment and Settlement Systems Act, 2007 (PSSA)</strong>, placing <strong>Section 25</strong> on the statute books.
                </p>

                <blockquote className="p-5 border-l-4 border-[#D2A02A] bg-gray-50 rounded-r-xl text-sm md:text-base italic text-gray-800 leading-relaxed">
                  &ldquo;Where an electronic funds transfer initiated by a person from an account maintained by him cannot be executed on the ground that the amount of money standing to the credit of that account is insufficient to honour the transfer instruction... such person shall be deemed to have committed an offence and shall, without prejudice to any other provisions of this Act, be punished with imprisonment for a term which may be extended to two years, or with fine which may extend to twice the amount of the electronic funds transfer, or with both.&rdquo;
                  <span className="block mt-2 text-xs font-bold text-gray-500 not-italic">
                    — Section 25(1), Payment and Settlement Systems Act, 2007
                  </span>
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  Crucially, <strong>Section 25(5) of the PSSA</strong> statutorily imports the entire procedural and evidentiary architecture of Sections 138 to 142 of the <em>Negotiable Instruments Act, 1881</em>. Consequently, the legal principles governing notice periods, locus standi, territorial jurisdiction, presumption of legally enforceable debt under Section 139 NI Act, and compounding mechanisms under Section 147 apply with equal force to NACH auto-debit bounces.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h3 className="font-bold text-sm text-[#1a202c] mb-1">Electronic Fund Transfer</h3>
                    <p className="text-xs text-gray-600">
                      Covers automated NACH mandates, ECS instructions, and debit standing mandates executed via RBI-authorized clearing networks.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h3 className="font-bold text-sm text-[#1a202c] mb-1">Insufficiency of Funds</h3>
                    <p className="text-xs text-gray-600">
                      Requires that the mandate failure arose either because the account balance was inadequate or exceeded the pre-arranged overdraft arrangement.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h3 className="font-bold text-sm text-[#1a202c] mb-1">Legally Enforceable Debt</h3>
                    <p className="text-xs text-gray-600">
                      The instruction must have been initiated for the discharge, in whole or in part, of a lawful debt, loan EMI, or legal liability.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 3. BAILABLE STATUS & BAIL RULES ── */}
              <section id="bailable-status-bail-rules" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Is Section 25 Payment and Settlement Act Bailable or Not? Bail Rules Explained
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The primary panic among borrowers receiving a court summons under Section 25 is whether the police will arrive at their doorstep with handcuffs. The legal reality is unequivocal: <strong>Section 25 of the Payment and Settlement Systems Act, 2007 is an entirely bailable offense as a matter of absolute statutory right</strong>.
                </p>

                <div className="p-5 bg-emerald-50/70 border border-emerald-300 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                    <span>⚖️</span> Statutory Bail Guarantee Under Section 436 CrPC / Section 478 BNSS
                  </div>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    Under the Code of Criminal Procedure, 1973 (and the Bharatiya Nagarik Suraksha Sanhita, 2023), any offense not explicitly categorized as non-bailable in the First Schedule is governed by Section 436 CrPC. Because Section 25 carries a maximum sentence of up to two years and is modeled on Section 138 NI Act, the presiding Metropolitan Magistrate or Judicial Magistrate First Class (JMFC) has <strong>no discretionary power to deny bail</strong> when the accused appears and offers a personal bond or local surety.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-bold text-[#1a202c]">
                    Key Bail Rights Guaranteed to Every Accused Borrower:
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span>
                        <strong>No Pre-Summons Police Arrest:</strong> Unlike cognizable IPC/BNS offenses (such as criminal breach of trust or theft), Section 25 is non-cognizable. The police cannot investigate, register an FIR, or arrest an individual without an explicit warrant issued by a judicial magistrate.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span>
                        <strong>Furnishing Personal Bond:</strong> In most magisterial jurisdictions across Delhi NCR, Mumbai, Bengaluru, and Kolkata, magistrates routinely grant bail on the accused person&apos;s own personal bond without requiring an external solvent surety if represented by an enrolled advocate.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">&bull;</span>
                      <span>
                        <strong>Same-Day Magisterial Bail:</strong> The entire bail procedure before the trial court takes between thirty to forty-five minutes. Counsel presents the bail application alongside the personal bond, the magistrate accepts the undertaking, and the borrower walks out with certified bail orders.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── 4. NOTICE PERIOD & LIMITATION RULES ── */}
              <section id="notice-period-limitation" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Mandatory Statutory Notice Period &amp; Magisterial Limitation Rules
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A lending institution—whether a public sector bank, private scheduled bank, or digital NBFC—cannot directly file a criminal complaint before a magistrate immediately upon an auto-debit bounce. Section 25(1) establishes strict statutory preconditions that must be meticulously satisfied; any procedural flaw by the lender creates an immediate ground for quashing the complaint under Section 482 CrPC (Section 528 BNSS).
                </p>

                {/* 3-Step Limitation Process */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 relative">
                    <span className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold">
                      Step 1
                    </span>
                    <h3 className="font-bold text-[#1a202c] mt-2 mb-2 text-sm">
                      30-Day Demand Notice Window
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      The lender must dispatch a formal written statutory demand notice within <strong>30 days</strong> of receiving the return memo from the clearing house. If the notice is dispatched on day 31, the complaint is time-barred and statutorily void ab initio.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 relative">
                    <span className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold">
                      Step 2
                    </span>
                    <h3 className="font-bold text-[#1a202c] mt-2 mb-2 text-sm">
                      15-Day Statutory Cure Period
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Upon receipt of the notice, the borrower is afforded a mandatory <strong>15-day grace period</strong> to pay the bounced amount. No cause of action arises, and no court can take cognizance of an offense, until this 15-day period fully expires without payment.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 relative">
                    <span className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold">
                      Step 3
                    </span>
                    <h3 className="font-bold text-[#1a202c] mt-2 mb-2 text-sm">
                      30-Day Court Filing Limitation
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      If the 15-day cure window lapses without satisfaction, the lender must file its formal complaint before the competent Metropolitan Magistrate within exactly <strong>30 days</strong>. Any delay requires condonation under Section 142(1)(b) NI Act.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs md:text-sm text-gray-700 leading-relaxed">
                  <strong>Critical Advocate Insight:</strong> In predatory digital lending scenarios, NBFCs frequently issue WhatsApp messages or automated emails disguised as court notices. A valid Section 25 notice must be a formal legal demand explicitly citing the NACH Unique Mandate Reference Number (UMRN), date of dishonour, return memo code, and specific demand for the dishonoured installment.
                </div>
              </section>

              {/* ── 5. WARRANTS & RECALL PROCEDURE ── */}
              <section id="warrants-and-recall-procedure" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Bailable &amp; Non-Bailable Warrants: Section 70(2) CrPC Recall Protocol
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  In practical litigation, borrowers often discover a Section 25 case only after a police official visits their permanent residence with a <strong>Bailable Warrant (BW)</strong> or <strong>Non-Bailable Warrant (NBW)</strong>. This occurs not because the borrower committed an egregious crime, but because the bank served initial court summons to an outdated rental address or incomplete postal coordinate.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#1a202c]">
                    How Warrants Progress in Magisterial Courts:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                    <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50">
                      <span className="font-bold text-blue-900 block mb-1">Stage 1: Court Summons</span>
                      <p className="text-blue-800">
                        The court issues judicial summons requiring appearance. If summons return unserved due to address change, banks frequently misrepresent to the court that the borrower is evading service.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                      <span className="font-bold text-amber-900 block mb-1">Stage 2: Bailable Warrant</span>
                      <p className="text-amber-800">
                        To enforce attendance, the magistrate issues a bailable warrant with a nominal endorsement amount. The police officer executes this warrant simply by taking a local personal undertaking.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50">
                      <span className="font-bold text-rose-900 block mb-1">Stage 3: Non-Bailable Warrant</span>
                      <p className="text-rose-800">
                        If the bailable warrant returns unexecuted, an NBW may be ordered. However, Supreme Court guidelines strictly mandate that NBWs should not be issued lightly in quasi-criminal commercial dishonours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl space-y-3">
                  <h3 className="font-bold text-base text-[#1a202c]">
                    The Supreme Court Mandate in Inder Mohan Goswami v. State of Uttaranchal:
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    The Hon&apos;ble Supreme Court of India held that personal liberty under Article 21 is paramount and non-bailable warrants should be issued only as a last resort when the court is satisfied that the accused is intentionally fleeing justice. In commercial dishonour proceedings under Section 138 and Section 25, courts must first exhaust summons and bailable warrants before coercive steps are initiated.
                  </p>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    <strong>Warrant Recall Procedure under Section 70(2) CrPC:</strong> When a warrant is issued, your defense advocate files an urgent application under Section 70(2) CrPC (Section 72 BNSS) stating that the non-appearance was neither willful nor deliberate, accompanied by an affidavit and proof of genuine residential address. Magistrates routinely recall and cancel the warrant on the very day of filing without taking the borrower into custody.
                  </p>
                </div>
              </section>

              {/* ── 6. SECTION 205 CRPC EXEMPTION ── */}
              <section id="section-205-crpc-exemption" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Section 205 CrPC: Permanent Exemption from Personal Court Attendance
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the most powerful procedural shields available to working professionals, entrepreneurs, senior citizens, and outstation borrowers is <strong>Section 205 of the Code of Criminal Procedure, 1973</strong> (corresponding to Section 228 of the Bharatiya Nagarik Suraksha Sanhita, 2023).
                </p>

                <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 border border-[#D2A02A]/40 rounded-xl space-y-2">
                  <h3 className="text-sm font-bold text-[#5A4C33] uppercase tracking-wide">
                    Statutory Exemption Provision
                  </h3>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    Section 205 empowers a Magistrate, upon issuing summons, to dispense with the personal attendance of the accused and permit them to appear through their pleader (enrolled advocate). This ensures that you do not need to take leaves from work, travel across state lines, or sit in crowded courtroom corridors for routine procedural dates.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-bold text-[#1a202c]">
                    Prerequisites for Securing Section 205 Appearance Exemption:
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                    <li>
                      <strong>Execution of Vakalatnama:</strong> The borrower authorizes an enrolled Bar Council advocate to represent them in the specific complaint case.
                    </li>
                    <li>
                      <strong>Substantiated Hardship Grounds:</strong> The application outlines valid grounds such as outstation employment, medical ailments, business obligations, or inability to travel without disproportionate financial expenditure.
                    </li>
                    <li>
                      <strong>Counsel Undertaking:</strong> The advocate files an explicit undertaking that they will appear on every effective hearing date and will produce the accused borrower whenever specifically mandated by the court (such as recording Section 313 statements or final judgment).
                    </li>
                    <li>
                      <strong>Facilitating Lok Adalat Referral:</strong> The exemption order allows the advocate to initiate compromise settlement negotiations with the bank counsel without the borrower facing procedural intimidation.
                    </li>
                  </ol>
                </div>
              </section>

              {/* ── 7. COMPARISON TABLE: REALITY MATRIX ── */}
              <section id="comparative-reality-matrix" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Comparative Matrix: Bank Threat Narrative vs Judicial Reality Under Section 25 PSSA
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Lenders, collection agencies, and automated recovery telecallers frequently deploy deceptive, threatening scripts to coerce immediate debt repayment. Compare the aggressive claims made by recovery wings against the actual statutory provisions upheld by Indian judicial courts:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="p-4 font-semibold">Litigation Parameter</th>
                        <th className="p-4 font-semibold text-rose-300">Bank / Recovery Agent Threat</th>
                        <th className="p-4 font-semibold text-[#D2A02A]">Judicial Reality &amp; Statutory Protection</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold text-gray-900">Arrest &amp; Custody</td>
                        <td className="p-4 text-gray-700">
                          &ldquo;Police will arrest you within 24 hours at your workplace or home.&rdquo;
                        </td>
                        <td className="p-4 text-gray-700 font-medium">
                          <strong>Strictly Prohibited:</strong> Non-cognizable, bailable offense. Police have zero authority to arrest without prior judicial warrants.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold text-gray-900">Bail Entitlement</td>
                        <td className="p-4 text-gray-700">
                          &ldquo;You will be sent to judicial remand and denied bail by the judge.&rdquo;
                        </td>
                        <td className="p-4 text-gray-700 font-medium">
                          <strong>Bail as a Matter of Right:</strong> Under Sec 436 CrPC / Sec 478 BNSS, bail is non-discretionary upon furnishing a personal bond.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold text-gray-900">Court Appearance</td>
                        <td className="p-4 text-gray-700">
                          &ldquo;You must physically stand in the dock at every single court hearing.&rdquo;
                        </td>
                        <td className="p-4 text-gray-700 font-medium">
                          <strong>Section 205 CrPC Exemption:</strong> Magistrates routinely dispense with personal attendance, permitting advocates to appear on your behalf.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold text-gray-900">Notice Period</td>
                        <td className="p-4 text-gray-700">
                          &ldquo;We will file a case immediately without any notice or grace period.&rdquo;
                        </td>
                        <td className="p-4 text-gray-700 font-medium">
                          <strong>Mandatory 15-Day Cure Period:</strong> Section 25(1)(b) mandates a 30-day notice window and 15-day cure period; non-compliance invalidates the suit.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold text-gray-900">Criminal Record</td>
                        <td className="p-4 text-gray-700">
                          &ldquo;You will have a permanent criminal record preventing passport renewals.&rdquo;
                        </td>
                        <td className="p-4 text-gray-700 font-medium">
                          <strong>Complete Discharge via Compounding:</strong> Once settled, court compounding under Sec 147 NI Act / Sec 320 CrPC results in complete judicial acquittal.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold text-gray-900">OTS Compromise</td>
                        <td className="p-4 text-gray-700">
                          &ldquo;Settlement is impossible once a Section 25 case has been instituted.&rdquo;
                        </td>
                        <td className="p-4 text-gray-700 font-medium">
                          <strong>Fast-Track Settlement:</strong> Magisterial courts actively encourage Lok Adalat mediation and compromise OTS under Section 89 CPC.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── 8. SECTION 25 PSSA VS SECTION 138 NI ACT ── */}
              <section id="section-25-vs-section-138" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Comparative Analysis: Section 25 PSSA vs Section 138 NI Act
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  While both statutes deal with the failure of payment instruments to satisfy legally enforceable liabilities, they operate through distinct technical mechanisms. Understanding the operational differences between physical paper cheques and electronic debit instructions is essential for framing a robust magisterial defense.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                    <div className="inline-block px-3 py-1 rounded bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase">
                      Section 138 Negotiable Instruments Act
                    </div>
                    <h3 className="font-bold text-base text-[#1a202c]">
                      Physical Cheque Dishonour
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                      <li>&bull; <strong>Instrument:</strong> Physical negotiable instrument signed by drawer.</li>
                      <li>&bull; <strong>Presentation:</strong> Deposited in bank clearing within 3 months of cheque date.</li>
                      <li>&bull; <strong>Jurisdiction:</strong> Governed by Section 142(2) NI Act (location of payee bank branch where cheque is presented).</li>
                      <li>&bull; <strong>Defenses:</strong> Signature dispute, lost cheque memo, misuse of security cheque, material alteration.</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                    <div className="inline-block px-3 py-1 rounded bg-[#5A4C33] text-white text-xs font-bold uppercase">
                      Section 25 Payment &amp; Settlement Systems Act
                    </div>
                    <h3 className="font-bold text-base text-[#1a202c]">
                      Electronic Mandate / NACH Dishonour
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                      <li>&bull; <strong>Instrument:</strong> Digital NACH mandate, e-mandate, or ECS standing debit instruction.</li>
                      <li>&bull; <strong>Presentation:</strong> Triggered electronically via NPCI clearing cycles on scheduled EMI dates.</li>
                      <li>&bull; <strong>Jurisdiction:</strong> Magisterial court where the electronic transfer was initiated or beneficiary account is maintained.</li>
                      <li>&bull; <strong>Defenses:</strong> Revoked mandate intimation, lack of digital authentication proof, usurious penal fee over-claims, unadjusted prior payments.</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs md:text-sm text-gray-800 leading-relaxed">
                  <strong>Prohibition of Double Jeopardy:</strong> Can a bank file both a Section 138 case and a Section 25 case for the exact same loan EMI installment? Indian High Courts have affirmed that a lender cannot maintain simultaneous criminal prosecutions for the exact same underlying default installment under Article 20(2) of the Constitution and Section 300 CrPC.
                </div>
              </section>

              {/* ── 9. SIGNATURE EDITORIAL INFOGRAPHIC CARD ── */}
              <div
                id="signature-infographic"
                className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm space-y-4"
              >
                <div className="text-center space-y-1">
                  <span className="text-[11px] font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Defense Architecture
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                    Section 25 PSSA: Court Notice, Bail &amp; Compounding Workflow
                  </h3>
                  <p className="text-xs text-gray-500 max-w-2xl mx-auto">
                    Visual roadmap of magisterial litigation defense, notice audit, Section 205 CrPC exemption, and permanent dispute compounding under Bar Council advocate representation.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-[#D2A02A]/30 shadow-md bg-white">
                  <img
                    src="/images/og/section-25-payment-and-settlement-act-legal-defense.png"
                    alt="Section 25 PSSA Legal Defense Workflow Infographic"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-gray-50 text-center border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-700">
                      Figure 1: Strategic Defense Blueprint — From Magisterial Summons to Compounding &amp; Closure
                    </p>
                  </div>
                </div>
              </div>

              {/* ── 10. FIVE-STAGE ADVOCATE PROTOCOL ── */}
              <section id="five-stage-advocate-protocol" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  The 5-Stage Advocate Protocol for Section 25 Defense &amp; Compounding
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Navigating quasi-criminal litigation requires strict adherence to statutory timelines and magisterial court procedure. AMA Legal Solutions deploys a structured five-stage protocol that protects clients from arrest, secures routine appearance exemptions, and compounds the case into an affordable One-Time Settlement:
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">
                        1
                      </span>
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 1: Forensic Notice Audit &amp; Jurisdictional Scrutiny
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 pl-9 leading-relaxed">
                      Our advocates examine the statutory demand notice under Section 25(1)(b) to verify whether the lender served the notice within the mandatory 30-day window, whether the 15-day cure period was observed, and whether the electronic mandate was executed without unauthorized alteration or premature debiting.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">
                        2
                      </span>
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 2: Comprehensive Legal Reply &amp; Anti-Harassment Injunction
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 pl-9 leading-relaxed">
                      We draft and dispatch an authoritative legal reply detailing bona fide financial hardship (job loss, business closure, medical crisis) and refuting inflated claims. Concurrently, we serve formal warnings under the RBI Fair Practices Code on bank nodal officers, immediately halting coercive recovery visits.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">
                        3
                      </span>
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 3: Magisterial Appearance, Bail &amp; Section 205 Appearance Exemption
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 pl-9 leading-relaxed">
                      Upon the case being listed before the Metropolitan Magistrate or JMFC, our advocates file a formal Vakalatnama, obtain regular bail upon personal bond under Section 436 CrPC, and move a petition under Section 205 CrPC to dispense with your personal attendance for all subsequent procedural dates.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">
                        4
                      </span>
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 4: Emergency Warrant Recall under Section 70(2) CrPC
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 pl-9 leading-relaxed">
                      If bailable or non-bailable warrants have been ordered due to historical address changes or non-service of process, we move an urgent application under Section 70(2) CrPC. Counsel establishes bona fide non-receipt of summons and secures warrant cancellation without any custodial detainment.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold flex items-center justify-center">
                        5
                      </span>
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 5: High-Level OTS Compounding &amp; Judicial Acquittal
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 pl-9 leading-relaxed">
                      With court protection securely established, our debt resolution advocates negotiate directly with the lender&apos;s Stressed Asset Management team. Upon securing an official compromise sanction letter and supervising payment directly into your loan account, we file a joint compounding petition under Section 147 NI Act / Section 320 CrPC, obtaining a formal court order for complete acquittal and criminal case withdrawal.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 11. RECOVERY TELECALLERS VS ADVOCATES ── */}
              <section id="telecallers-vs-advocates" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Why Recovery Agencies &amp; Online Templates Fail in Court
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Many distressed borrowers initially attempt to rely on unregulated debt settlement agencies, online grievance bots, or generic legal notice reply templates downloaded from the internet. When criminal complaints under Section 25 PSSA reach the trial court, these approaches collapse completely:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
                    <h3 className="font-bold text-sm text-rose-900 uppercase tracking-wide">
                      Unregulated Agencies &amp; DIY Online Templates
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                      <li>&times; <strong>Legally Barred from Court:</strong> Under Sections 29 and 30 of the Advocates Act, 1961, private agencies have zero right of audience before magistrates.</li>
                      <li>&times; <strong>Zero Warrant Recall Authority:</strong> Cannot move Section 70(2) warrant recall applications or execute bail bonds.</li>
                      <li>&times; <strong>No Attorney-Client Privilege:</strong> Informal agency communications have no protection under Section 126 of the Evidence Act.</li>
                      <li>&times; <strong>Generic Template Failures:</strong> Boilerplate replies fail to identify statutory limitation flaws or procedural mandate defects.</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                    <h3 className="font-bold text-sm text-emerald-900 uppercase tracking-wide">
                      Enrolled Bar Council Advocates
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                      <li>✓ <strong>Full Judicial Audience:</strong> Enter formal court appearances across all Metropolitan and Judicial Magistrates in India.</li>
                      <li>✓ <strong>Bail &amp; Section 205 Exemption:</strong> Secure regular bail and obtain judicial orders dispensing with your personal appearance.</li>
                      <li>✓ <strong>Privileged Legal Counsel:</strong> Complete statutory protection under Section 126 of the Indian Evidence Act.</li>
                      <li>✓ <strong>Binding Compounding Orders:</strong> Draft official compromise petitions resulting in clean judicial acquittals and No Dues Certificates.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── 12. TRANSPARENT FIXED LEGAL ADVISORY ── */}
              <section id="transparent-fixed-advisory" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Commercial Search Intent: Transparent Fixed Legal Advisory
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing court litigation are already navigating severe economic hardship. Traditional corporate law firms often compound this distress by demanding exorbitant retainer fees, unpredictable hourly billing increments, and surprise appearance charges for every procedural adjournment.
                </p>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-200 space-y-4">
                  <h3 className="font-bold text-base text-[#1a202c]">
                    The AMA Legal Solutions Professional Standard:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs md:text-sm">
                    <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="font-bold text-[#1a202c] block mb-1">Transparent Fixed Advisory</span>
                      <p className="text-gray-600">
                        Clear, upfront engagement terms for notice drafting, court defense, and compounding without hidden costs.
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="font-bold text-[#1a202c] block mb-1">No Hourly Markups</span>
                      <p className="text-gray-600">
                        Eliminates corporate firm hourly billing models and speculative percentages of your negotiated settlement waiver.
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="font-bold text-[#1a202c] block mb-1">Direct Bank Remittance</span>
                      <p className="text-gray-600">
                        All settlement funds are deposited directly into your designated bank loan account; we never pool or handle client funds.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 13. FREQUENTLY ASKED QUESTIONS (ACCORDION) ── */}
              <section id="frequently-asked-questions" className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] border-b pb-3">
                  Frequently Asked Questions on Section 25 PSSA Legal Defense
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Review concise, statutory answers to the most common procedural and judicial questions regarding Section 25 notices, bailable warrants, and magisterial defense:
                </p>

                <div className="space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm transition"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm md:text-base text-[#1a202c] hover:bg-gray-50/80 transition cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <span
                            className={`transform transition-transform text-[#D2A02A] text-lg font-extrabold ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          >
                            +
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

              {/* ── 14. INTERNAL GUIDES GRID ── */}
              <section id="internal-guides" className="space-y-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c] border-b pb-3">
                  More Legal Debt Relief &amp; Litigation Guides
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                  <Link
                    href="/section-25-payment-and-settlement-act-bailable-or-not"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition block font-semibold text-gray-800"
                  >
                    &rarr; Section 25 PSSA: Is It Bailable or Not? Quick Guide
                  </Link>
                  <Link
                    href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition block font-semibold text-gray-800"
                  >
                    &rarr; Section 25 PSSA vs Section 138 NI Act: Comparative Guide
                  </Link>
                  <Link
                    href="/legal-rights-after-loan-default"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition block font-semibold text-gray-800"
                  >
                    &rarr; Legal Rights of Borrowers After Loan Default in India
                  </Link>
                  <Link
                    href="/services/loan-settlement/lok-adalat"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition block font-semibold text-gray-800"
                  >
                    &rarr; Lok Adalat Settlement for Bank &amp; NBFC Loan Disputes
                  </Link>
                  <Link
                    href="/what-happens-after-bank-issues-recall-notice"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition block font-semibold text-gray-800"
                  >
                    &rarr; What Happens After Bank Issues Loan Recall Notice?
                  </Link>
                  <Link
                    href="/freed-loan-settlement-review-and-legal-alternatives"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition block font-semibold text-gray-800"
                  >
                    &rarr; Freed Loan Settlement Review: Is It Safe &amp; Legal?
                  </Link>
                  <Link
                    href="/loan-settlement-for-bajaj-finserv"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition block font-semibold text-gray-800"
                  >
                    &rarr; Bajaj Finserv Loan Settlement: Stop Harassment &amp; Settle Debt
                  </Link>
                  <Link
                    href="/loan-settlement-for-hdfc-bank"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition block font-semibold text-gray-800"
                  >
                    &rarr; HDFC Bank Loan Settlement: Credit Card &amp; Personal Loan OTS
                  </Link>
                </div>
              </section>

              {/* ── 15. STATUTORY REFERENCES & EXTERNAL PORTALS ── */}
              <section id="statutory-references" className="space-y-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c] border-b pb-3">
                  Regulatory Authorities &amp; Judicial Portals
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <a
                    href="https://services.ecourts.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 hover:border-[#D2A02A] transition block text-gray-700"
                  >
                    <span className="font-bold text-[#1a202c] block mb-0.5">
                      eCourts Services Portal &rarr;
                    </span>
                    Official Case Status, Cause Lists &amp; Magisterial Orders (services.ecourts.gov.in)
                  </a>
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 hover:border-[#D2A02A] transition block text-gray-700"
                  >
                    <span className="font-bold text-[#1a202c] block mb-0.5">
                      Reserve Bank of India (Payment Systems) &rarr;
                    </span>
                    PSSA 2007 Guidelines &amp; NPCI Settlement Framework (rbi.org.in)
                  </a>
                  <a
                    href="http://www.barcouncilofindia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 hover:border-[#D2A02A] transition block text-gray-700"
                  >
                    <span className="font-bold text-[#1a202c] block mb-0.5">
                      Bar Council of India &rarr;
                    </span>
                    Advocates Act 1961 &amp; Professional Conduct Standards (barcouncilofindia.org)
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 hover:border-[#D2A02A] transition block text-gray-700"
                  >
                    <span className="font-bold text-[#1a202c] block mb-0.5">
                      National Legal Services Authority (NALSA) &rarr;
                    </span>
                    Statutory Lok Adalat Framework &amp; Compounding Guidelines (nalsa.gov.in)
                  </a>
                </div>
              </section>

              {/* Bottom Social Share */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  Share This Legal Guide
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white text-gray-600 flex items-center justify-center transition"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-600 flex items-center justify-center transition"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#0A66C2] hover:text-white text-gray-600 flex items-center justify-center transition"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#25D366] hover:text-white text-gray-600 flex items-center justify-center transition"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white text-gray-600 flex items-center justify-center transition"
                  >
                    {shareMsg ? (
                      <FaCheck className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <FaCopy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* ── 16. AMA COMPANY & MEDIA SECTION ── */}
              <section
                id="ama-company-section"
                className="p-6 md:p-8 rounded-2xl border-4 border-[#D2A02A] bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#1a202c] text-white space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="/ama3.svg"
                      alt="AMA Legal Solutions Logo"
                      className="h-10 w-auto"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold text-white">
                        AMA Legal Solutions
                      </h3>
                      <p className="text-xs text-[#D2A02A] font-semibold tracking-wider uppercase">
                        Premier Debt Resolution &amp; Criminal Litigation Practice
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-[#D2A02A]/40 text-xs">
                    <Stars count={5} />
                    <span className="font-bold text-white ml-1">4.7 / 5.0 Google Rating</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Headquartered in Gurugram with associated counsel appearing before High Courts and Metropolitan Magistrates nationwide, AMA Legal Solutions is India&apos;s authoritative law firm representing borrowers facing Section 138 NI Act, Section 25 PSSA notices, bank arbitrations, and SARFAESI actions. Our advocates combine deep procedural mastery with direct bank stressed asset mediation to achieve clean compounding dismissals.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <Link
                    href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                    className="p-3 text-center rounded-xl border-2 border-[#D2A02A] text-white hover:bg-[#D2A02A] hover:text-[#1a202c] transition text-xs font-bold"
                  >
                    Sec 25 vs 138 Guide
                  </Link>
                  <Link
                    href="/legal-rights-after-loan-default"
                    className="p-3 text-center rounded-xl border-2 border-[#D2A02A] text-white hover:bg-[#D2A02A] hover:text-[#1a202c] transition text-xs font-bold"
                  >
                    Borrower Rights
                  </Link>
                  <Link
                    href="/services/loan-settlement/lok-adalat"
                    className="p-3 text-center rounded-xl border-2 border-[#D2A02A] text-white hover:bg-[#D2A02A] hover:text-[#1a202c] transition text-xs font-bold"
                  >
                    Lok Adalat OTS
                  </Link>
                  <Link
                    href="/contact"
                    className="p-3 text-center rounded-xl border-2 border-[#D2A02A] bg-[#D2A02A] text-[#1a202c] hover:bg-[#b88c22] transition text-xs font-bold"
                  >
                    Contact Advocates
                  </Link>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4">
                <img
                  src="/anujbhiya.png"
                  alt="Advocate Anuj Anand Malik"
                  className="w-20 h-20 rounded-full mx-auto border-2 border-[#D2A02A] object-cover shadow"
                />
                <div>
                  <h3 className="font-bold text-[#1a202c] text-base">
                    Anuj Anand Malik
                  </h3>
                  <p className="text-xs text-[#D2A02A] font-semibold mt-0.5">
                    Founder &amp; Senior Advocate
                  </p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    Advocate Anuj Anand Malik leads the debt resolution and financial litigation defense practice at AMA Legal Solutions, advising borrowers on Section 138 NI Act, Section 25 PSSA defense, and RBI compromise settlements.
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0A66C2] hover:underline font-semibold"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-lg space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#D2A02A] uppercase tracking-wider">
                    Emergency Magisterial Defense
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Received Section 25 Summons or Notice?
                  </h3>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Do not panic about arrest. Consult verified Bar Council criminal defense advocates for immediate bail filing, Section 205 appearance exemption, and compounding settlement.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <a
                    href="tel:+918700343611"
                    className="w-full py-3 px-4 bg-white text-[#5A4C33] font-extrabold rounded-xl transition flex items-center justify-center gap-2 text-xs shadow hover:bg-gray-100"
                  >
                    <span>📞 Call +91-8700343611</span>
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 px-4 bg-[#D2A02A] hover:bg-[#b88c22] text-[#1a202c] font-extrabold rounded-xl transition text-xs shadow uppercase tracking-wider cursor-pointer"
                  >
                    Request Callback &rarr;
                  </button>
                </div>

                <div className="pt-2 border-t border-white/20 text-center">
                  <p className="text-[11px] text-gray-300">
                    🔒 Privileged legal consultation under Section 126 Evidence Act.
                  </p>
                </div>
              </div>

              {/* Client Reviews Card (Verbatim to Schema) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="font-bold text-[#1a202c] text-xs uppercase tracking-wider">
                    Verified Client Case
                  </span>
                  <div className="flex items-center gap-1">
                    <Stars count={5} />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-gray-700 italic leading-relaxed">
                    &ldquo;{clientReviewData.reviewBody}&rdquo;
                  </p>
                  <div className="pt-2">
                    <p className="text-xs font-bold text-[#1a202c]">
                      {clientReviewData.authorName}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {clientReviewData.authorRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Topic Guides */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-[#1a202c] text-xs uppercase tracking-wider border-b border-gray-100 pb-2">
                  Related Legal Guides
                </h3>
                <div className="space-y-2 text-xs">
                  <Link
                    href="/section-25-payment-and-settlement-act-bailable-or-not"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Sec 25 PSSA Bailable or Not
                  </Link>
                  <Link
                    href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Sec 25 PSSA vs Sec 138 NI Act
                  </Link>
                  <Link
                    href="/legal-rights-after-loan-default"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Borrower Rights After Default
                  </Link>
                  <Link
                    href="/services/loan-settlement/lok-adalat"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Lok Adalat Settlement Process
                  </Link>
                  <Link
                    href="/what-happens-after-bank-issues-recall-notice"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Bank Loan Recall Notice Guide
                  </Link>
                  <Link
                    href="/loan-settlement-for-bajaj-finserv"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Bajaj Finserv Loan Settlement
                  </Link>
                  <Link
                    href="/loan-settlement-for-hdfc-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; HDFC Bank Loan Settlement
                  </Link>
                  <Link
                    href="/loan-settlement-for-sbi-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; SBI Bank Loan Settlement
                  </Link>
                  <Link
                    href="/freed-loan-settlement-review-and-legal-alternatives"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Freed Loan Settlement Review
                  </Link>
                  <Link
                    href="/contact"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Contact Legal Defense Advocates
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
                      Section 25 PSSA Legal Defense
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
                        placeholder="Borrower / Accused Name"
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
                        Matter / Notice Category
                      </label>
                      <select
                        name="assetType"
                        value={formData.assetType}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A] bg-white"
                      >
                        <option value="Section 25 PSSA NACH Bounce Notice">
                          Section 25 PSSA NACH Bounce Notice
                        </option>
                        <option value="Court Summons Received from Magistrate">
                          Court Summons Received from Magistrate
                        </option>
                        <option value="Bailable / Non-Bailable Warrant Issued">
                          Bailable / Non-Bailable Warrant Issued
                        </option>
                        <option value="Section 138 NI Act Cheque Bounce Notice">
                          Section 138 NI Act Cheque Bounce Notice
                        </option>
                        <option value="Personal Loan & Credit Card Compounding">
                          Personal Loan &amp; Credit Card Compounding
                        </option>
                        <option value="Recovery Agent Harassment Intervention">
                          Recovery Agent Harassment Intervention
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Dispute Summary / Notice Details
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Briefly state lender name, court location (if known), date of notice, or summons status..."
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
                    Thank you, <strong>{formData.fullName}</strong>. An advocate from our criminal litigation defense and compounding team will review your details shortly.
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

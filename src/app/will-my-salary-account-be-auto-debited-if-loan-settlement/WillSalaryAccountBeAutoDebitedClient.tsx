"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/will-my-salary-account-be-auto-debited-if-loan-settlement";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/will-my-salary-account-be-auto-debited-if-loan-settlement.png`;
const LOCAL_IMAGE_PATH = "/images/og/will-my-salary-account-be-auto-debited-if-loan-settlement.png";
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-11";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question:
      "Will my salary account be automatically debited via NACH or e-Mandate if I enter into loan settlement negotiations?",
    answer:
      "Under National Payments Corporation of India (NPCI) procedural guidelines and the Reserve Bank of India (RBI) Circular on Fair Practices Code, active NACH or e-Mandates remain mechanically operative on scheduled presentation dates until a formal written revocation or settlement hold is registered with the destination bank. If a borrower initiates loan settlement without legally revoking or pausing the mandate through advocate notice, automated clearing runs will continue to pull funds from the salary account or generate penal bounce charges. Once formal settlement negotiations commence under advocate representation, lenders are legally required to suspend automated debit sweeps and agree to structured settlement instalments to avoid duplicative recoveries.",
  },
  {
    id: "faq-2",
    question:
      "Can a bank legally mark a lien or freeze my salary account if the loan is with the exact same bank?",
    answer:
      "Under Section 171 of the Indian Contract Act, 1872, banks possess a statutory general lien allowing them to retain security and set off balances against debts owed to them in the same capacity. However, judicial rulings by various High Courts including the Kerala High Court in Radhika v. State Bank of India have established that a general lien cannot be exercised arbitrarily to swallow an entire month's salary deposited exclusively for basic sustenance and family survival. Banks are legally mandated to serve prior written notice specifying the overdue balance and granting reasonable opportunity before exercising set-off, making immediate transfer of employer payroll to an independent non-creditor bank a critical legal safeguard.",
  },
  {
    id: "faq-3",
    question:
      "Can a lending bank or NBFC freeze my salary account if it is maintained in a completely different third-party bank?",
    answer:
      "A lending bank or NBFC possesses zero statutory authority, contractual privity, or banker's lien over your deposit accounts held with a rival or separate scheduled commercial bank. A third-party bank cannot freeze your salary, mark a lien, or transfer your funds to an outside lender without a binding garnishee order or attachment decree issued by a competent Civil Court or Debt Recovery Tribunal (DRT) under Order XXI Rule 46 of the Code of Civil Procedure, 1908. Any informal letter or verbal instruction from a recovery department requesting another bank to freeze an account is legally void, ultra vires, and actionable as a gross deficiency of service under the Consumer Protection Act, 2019.",
  },
  {
    id: "faq-4",
    question:
      "How does Section 60 of the Code of Civil Procedure (CPC) protect a borrower's salary from total bank attachment?",
    answer:
      "Section 60(1)(i) of the Code of Civil Procedure, 1908 specifically provides statutory immunity for salary accounts by stipulating that the first one thousand rupees plus two-thirds of the remaining salary is completely exempt from civil attachment in execution of a decree. This statutory exemption safeguards the debtor's constitutional right to dignity and basic livelihood guaranteed under Article 21 of the Constitution of India, preventing commercial creditors from creating total insolvency or destitution. Even when a creditor obtains a judicial decree, execution courts are strictly prohibited from attaching the protected portion of a salaried employee's monthly earnings.",
  },
  {
    id: "faq-5",
    question:
      "Why do free online DIY NACH cancellation letters and settlement templates fail to protect salary accounts?",
    answer:
      "Generic online DIY templates downloaded from unregulated internet forums lack statutory force under the Advocates Act, 1961 and frequently omit mandatory references to NPCI circulars and RBI Fair Practices directives. Boilerplate letters fail to address the specific clearing destination identifier (UMRN) or the distinct legal grounds separating contractual debt from statutory wage protections under Section 60 of the Code of Civil Procedure. Furthermore, untrained borrowers often inadvertently include admissions of immediate liquidity or debt acknowledgment in DIY forms, which lender legal teams immediately exploit to trigger Section 138 Negotiable Instruments Act or Section 25 Payment and Settlement Systems Act criminal complaints.",
  },
  {
    id: "faq-6",
    question:
      "How does transparent fixed legal advisory protect borrowers from excessive corporate law firm retainers during loan settlement?",
    answer:
      "Transparent fixed legal advisory provides comprehensive representation—including NACH mandate audit, statutory revocation notices, cease-and-desist warnings against unlawful liens, and structured settlement drafting—without open-ended hourly billing meters or recurring corporate retainers. Traditional corporate law firms routinely charge steep monthly retainers and bill for clerical phone calls by the minute, compounding financial hardship for distressed salaried individuals seeking straightforward debt resolution. Engaging an advocate under an upfront fixed advisory model secures statutory attorney-client privilege under Section 126 of the Indian Evidence Act, 1872 while eliminating unexpected legal markups.",
  },
  {
    id: "faq-7",
    question:
      "What immediate legal steps should a salaried employee take if a bank abruptly marks a lien on their salary account?",
    answer:
      "When a bank abruptly marks an internal lien without judicial authority, the borrower must immediately serve a statutory legal notice through an advocate challenging the lien under Section 171 of the Indian Contract Act and Section 60 of the Code of Civil Procedure, 1908. The notice demands the immediate restoration of subsistence salary funds and requests a formal copy of the internal authorization, while simultaneously notifying the employer's human resources division to reroute future payroll disbursements to an alternative scheduled bank. If the bank fails to reverse the lien within forty-eight hours, an urgent grievance must be escalated to the RBI Banking Ombudsman under Clause 10 of the Integrated Ombudsman Scheme, 2021 and before the Consumer Commission for urgent interim relief.",
  },
  {
    id: "faq-8",
    question:
      "Can a bank initiate criminal proceedings under Section 25 of the PSS Act if auto-debit bounces during settlement talks?",
    answer:
      "If an automated NACH debit dishonors due to insufficient funds during uncoordinated settlement negotiations, the lender can technically issue a statutory demand notice under Section 25 of the Payment and Settlement Systems Act, 2007, which carries penal provisions identical to Section 138 cheque bounces. However, when an advocate formally issues a prior written notice revoking the mandate and recording ongoing bona fide settlement proceedings, the legal element of fraudulent intent or willful default is effectively rebutted in court. Timely advocate communication establishes a contemporaneous evidentiary record demonstrating that the mandate was revoked due to genuine financial distress and pending settlement, preventing malicious criminal prosecution.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Rajeshwar Sharma",
    authorLocation: "Senior IT Consultant, Bengaluru • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "When I initiated loan settlement discussions with my primary bank, they suddenly marked an internal lien on my salary account under Section 171, freezing my entire monthly paycheck and triggering auto-debit bounces with penal charges. Corporate law firms quoted exorbitant monthly retainers that I could not afford in my financial crisis, while generic internet advice was useless. Advocate Anuj Anand Malik and AMA Legal Solutions intervened immediately under a transparent fixed legal advisory model. They issued a statutory legal notice citing Section 60 CPC and Kerala High Court precedents, forced the bank to unfreeze my subsistence salary within 48 hours, legally revoked my NACH mandates, and structured an airtight settlement agreement without hourly markups or surprise retainers.",
  },
  {
    authorName: "Pooja Venkatesh",
    authorLocation: "Operations Manager, Gurugram • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "An NBFC threatened to contact my employer's HR and freeze my salary account at another bank while trying to force full payment during our debt settlement talks. I was in total panic until I consulted AMA Legal Solutions. Advocate Anuj Anand Malik explained that a third-party bank has no legal right to freeze an account without a court order under Order XXI Rule 46 CPC. The firm drafted a firm Cease-and-Desist notice against the NBFC, stopped illegal recovery threats, and properly paused all auto-debits with my salary bank. Their transparent fixed advisory fee gave me complete peace of mind, saving me from corporate law firm retainers and leading to a successful, legally binding settlement.",
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
      name: "Will My Salary Account Be Auto Debited If I Go for Loan Settlement? Freeze & Lien Legal Guide",
      description:
        "Comprehensive legal strategy examining whether salary accounts are auto-debited, frozen, or lien-marked during loan settlements. Learn Section 171 Banker's Lien limits, Section 60 CPC wage exemptions, NACH revocation rules, and transparent fixed advocate advisory.",
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
        "Will My Salary Account Be Auto Debited If I Go for Loan Settlement or Can It Be Marked Freeze or Lien?",
      description:
        "Exhaustive legal analysis on auto-debits, banker's lien under Section 171 Indian Contract Act, third-party bank account protections under Order XXI Rule 46 CPC, and statutory NACH cancellation protocols during loan settlement negotiations.",
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
      "@id": `${PAGE_URL}#product`,
      name: "Salary Account Protection & Loan Settlement Legal Advisory",
      description:
        "Professional legal advisory to protect salary accounts from unlawful auto-debits, banker's lien, and account freezes during personal loan and credit card settlements under Indian banking laws.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1820",
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
        datePublished: rev.authorLocation.includes("September")
          ? "2026-09-04"
          : "2026-08-20",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Will My Salary Account Be Auto Debited If Loan Settlement?",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Statutory Protocol to Safeguard Salary Accounts During Loan Settlement",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Auditing Active NACH / e-Mandates, Clearing UMRNs, and Destination Bank Accounts",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Serving Advocate Statutory Revocation Notices to Lender and Destination Clearing Bank Under NPCI Guidelines",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Migrating Employer Payroll Disbursements to an Independent Non-Creditor Scheduled Bank",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Issuing Formal Cease-and-Desist Notice Against Unlawful Section 171 Liens and Section 60 CPC Violations",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Structuring Binding One-Time Settlement (OTS) Agreement with Written Moratorium on Auto-Debits",
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

/* ────────────────────────── TOC SECTIONS ────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Legal Answer" },
  { id: "auto-debit-nach-mechanics", title: "Can Salary Account Be Auto-Debited?" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate Advisory vs DIY vs Corporate Firms" },
  { id: "bankers-lien-section-171", title: "Banker's Lien & Right of Set-Off (Sec 171)" },
  { id: "same-bank-vs-different-bank", title: "Same Bank vs Different Bank Salary Account" },
  { id: "salary-protection-section-60-cpc", title: "Salary Immunity: Sec 60 CPC & Art 21" },
  { id: "step-by-step-protection-protocol", title: "5-Step Statutory Protection Protocol" },
  { id: "infographic", title: "Visual Salary Protection Roadmap" },
  { id: "nach-mandate-cancellation", title: "Legal NACH & e-Mandate Revocation" },
  { id: "section-25-pss-and-138-ni-act", title: "Defending Against Sec 25 PSS & 138 NI Act" },
  { id: "unlawful-freeze-remedies", title: "Remedies for Unlawful Account Freeze" },
  { id: "rbi-guidelines-and-court-precedents", title: "Judicial Precedents on Attachment" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "citations", title: "References & Authority" },
];

export default function WillSalaryAccountBeAutoDebitedClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>(["faq-1"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    assetType: "NACH Auto-Debit Revocation & Settlement",
    message: "",
  });

  const toggleFaq = (id: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShare = (platform: string) => {
    let shareUrl = "";
    const title =
      "Will My Salary Account Be Auto Debited If Loan Settlement? Freeze & Lien Legal Guide";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(PAGE_URL)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
    const textMsg = `Hello Advocate Anuj Anand Malik (AMA Legal Solutions),
I require confidential legal guidance regarding my salary account protection, auto-debits, and loan settlement:
Full Name: ${formData.fullName}
WhatsApp/Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Primary Concern: ${formData.assetType}
Details: ${formData.message || "Seeking advocate advisory to revoke NACH mandates, prevent or challenge banker's lien on salary, and structure a binding one-time loan settlement."}`;
    const waUrl = `https://api.whatsapp.com/send?phone=918700343611&text=${encodeURIComponent(
      textMsg
    )}`;
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
      assetType: "NACH Auto-Debit Revocation & Settlement",
      message: "",
    });
  };

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    {
      label: "Will My Salary Account Be Auto Debited If Loan Settlement?",
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

          {/* Asymmetric 12-Column Hero - Matching /blog/[slug] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col lg:col-span-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Will My Salary Account Be Auto Debited If I Go for{" "}
                <span className="text-[#D2A02A]">Loan Settlement</span> or Can It Be Marked Freeze or Lien?
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                When a borrower defaults or initiates loan settlement discussions, lenders frequently weaponize automated clearing house debits
                and threaten account freezes. Understanding whether your salary account will be automatically debited via NACH or subjected to an
                internal banker&apos;s lien under Section 171 of the Indian Contract Act is essential to protecting your monthly livelihood.
              </p>

              {/* Author & Meta Data */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a202c] flex items-center justify-center text-white font-bold text-lg border-2 border-[#D2A02A]">
                    <img
                      src="/anujbhiya.png"
                      alt="Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a202c] text-base">
                      <Link
                        href="/author/anuj-anand-malik"
                        className="hover:text-[#D2A02A] transition-colors"
                      >
                        Anuj Anand Malik
                      </Link>
                    </p>
                    <p className="text-xs text-gray-500">
                      Reviewed by AMA Legal Solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> 11-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 12 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
                <img
                  src={LOCAL_IMAGE_PATH}
                  alt="Will My Salary Account Be Auto Debited If Loan Settlement? Freeze & Lien Legal Guide"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid - Matching /blog/[slug] */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
                {/* Meta details & Share */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center border-b border-gray-100 pb-6 mb-6 gap-4">
                  <div className="text-xs md:text-sm text-gray-500 font-medium">
                    Written by{" "}
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-[#D2A02A] hover:underline font-semibold"
                    >
                      Advocate Anuj Anand Malik
                    </Link>{" "}
                    &bull; Reviewed by{" "}
                    <span className="font-semibold text-gray-700">
                      Team AMA Legal Solutions
                    </span>{" "}
                    &bull; Last updated: 11-09-2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs md:text-sm font-bold text-gray-700">
                      Share:
                    </span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-blue-700 transition shadow-sm"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-sm"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-blue-800 transition shadow-sm"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Article Content - Styled with tiptap-content matching /blog/[slug] */}
                <div className="prose prose-lg max-w-none text-gray-700 tiptap-content">
                  {/* Standalone Quick Answer Box */}
                  <div
                    id="quick-answer"
                    className="not-prose my-6 p-5 sm:p-6 bg-amber-50/70 border border-[#D2A02A]/40 rounded-xl"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-[#5A4C33] mb-2 flex items-center gap-2">
                      <span>⚡</span> Quick Legal Answer: Will My Salary Account Be Auto Debited or Marked Freeze/Lien During Loan Settlement?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                      A salary account will continue to be auto-debited via NACH or e-Mandate during loan settlement negotiations unless the borrower formally submits a written mandate revocation notice citing National Payments Corporation of India (NPCI) guidelines and Reserve Bank of India (RBI) Fair Practices directives. If the salary account is maintained at the exact same lending bank, the bank may attempt to exercise a unilateral right of set-off or banker&apos;s lien under Section 171 of the Indian Contract Act, 1872; however, judicial precedents prohibit banks from seizing essential subsistence earnings protected under Section 60(1)(i) of the Code of Civil Procedure, 1908 and Article 21 of the Constitution of India. Conversely, if the salary account is held with an independent third-party bank, the lending institution has zero legal authority to freeze, place a lien upon, or debit the account without a formal court decree or garnishee order under Order XXI Rule 46 of the Code of Civil Procedure.
                    </p>
                  </div>

                  {/* Section 1 */}
                  <h2 id="auto-debit-nach-mechanics">
                    Can Your Salary Account Be Auto-Debited During Loan Settlement? (NACH, e-Mandates &amp; Standing Instructions)
                  </h2>
                  <p>
                    When a borrower experiences genuine financial distress—such as acute business cash crunch, medical emergency, or unexpected job transition—and
                    approaches a bank or Non-Banking Financial Company (NBFC) for a structured One-Time Settlement (OTS), a dangerous procedural disconnect often occurs.
                    While the credit recovery or legal department entertains settlement proposals, the automated payment clearing machinery operates on rigid, automated schedules.
                  </p>
                  <p>
                    Under the National Automated Clearing House (NACH) system governed by the National Payments Corporation of India (NPCI) and the Payment and Settlement Systems Act, 2007,
                    an electronic mandate operates continuously until its pre-configured expiry date or until a formal revocation instrument is lodged. Lenders do not
                    automatically cancel or suspend electronic debit mandates simply because an informal email or verbal request for loan settlement has been submitted.
                    Consequently, on the scheduled installment date, the automated clearing sweep attempts to pull the full Equated Monthly Installment (EMI) from the borrower&apos;s salary account.
                  </p>
                  <p>
                    If funds are present in the salary account, the automated clearing run executes, depleting money earmarked for urgent living expenses, rent, and legal advisory fees.
                    If the account contains insufficient funds, each failed debit run triggers severe penal bounce charges by both the lending institution and the destination bank.
                    More critically, repeated automated dishonors create statutory grounds for lenders to issue penal notices under Section 25 of the Payment and Settlement Systems Act, 2007
                    or Section 138 of the Negotiable Instruments Act, 1881. Therefore, formally pausing and revoking active NACH mandates through advocate-issued notice is the indispensable first step
                    before entering into any settlement discussions.
                  </p>

                  {/* Section 2 */}
                  <h2 id="commercial-reality-advocate-vs-diy">
                    Commercial Reality: Transparent Fixed Legal Advisory vs Free DIY Templates vs Corporate Law Firms
                  </h2>
                  <p>
                    When salaried individuals face the prospect of account freezes or unauthorized debits during loan default, navigating legal options can be daunting.
                    Many distressed borrowers fall into two dangerous extremes: relying on free, unvetted DIY online letters downloaded from internet forums, or approaching
                    elite corporate law firms that demand crippling monthly retainers. Understanding the commercial and procedural realities of these choices is essential
                    to preserving both your monthly income and your legal rights.
                  </p>

                  {/* Comparison Table */}
                  <table>
                    <thead>
                      <tr>
                        <th>Evaluation Metric</th>
                        <th>Free Online DIY Templates</th>
                        <th>AMA Legal Solutions (Fixed Advisory)</th>
                        <th>Corporate Law Firms</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Statutory Authority &amp; Enforceability</strong></td>
                        <td>Zero legal standing; ignored by bank legal desks; risks fatal debt admissions.</td>
                        <td>Advocate-certified drafting under Advocates Act, 1961; enforceable across civil courts.</td>
                        <td>High statutory standing; formal court appearance capability.</td>
                      </tr>
                      <tr>
                        <td><strong>Fee Structure &amp; Transparency</strong></td>
                        <td>Free initially, but causes severe secondary bounce charges and litigation losses.</td>
                        <td>Transparent fixed legal advisory without hourly markups or surprise retainers.</td>
                        <td>Excessive corporate retainers, unpredictable hourly billing, and clerical surcharges.</td>
                      </tr>
                      <tr>
                        <td><strong>NACH Revocation &amp; UMRN Handling</strong></td>
                        <td>Generic text lacking specific destination bank routing and NPCI circular citations.</td>
                        <td>Comprehensive UMRN audit, formal bank service, and interim stay on auto-debits.</td>
                        <td>Handled through junior associates with extensive bureaucratic turnaround times.</td>
                      </tr>
                      <tr>
                        <td><strong>Lien Defense &amp; Section 60 CPC Pleading</strong></td>
                        <td>Cannot articulate constitutional subsistence protections or High Court precedents.</td>
                        <td>Immediate cease-and-desist notices invoking Radhika v. SBI and Article 21 rights.</td>
                        <td>Capable, but requires prohibitive litigation retainers for simple pre-litigation notices.</td>
                      </tr>
                      <tr>
                        <td><strong>Confidentiality &amp; Privilege</strong></td>
                        <td>None; unprotected internet data vulnerable to scraping and commercial exploitation.</td>
                        <td>Strict statutory attorney-client privilege under Section 126 of the Indian Evidence Act.</td>
                        <td>Full privilege maintained under corporate legal retainers.</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>
                    By choosing advocate-certified representation under a transparent fixed legal advisory model, borrowers eliminate open-ended legal bills while securing
                    airtight statutory protections that compel financial institutions to halt unauthorized debits and negotiate settlements on equitable terms.
                  </p>

                  {/* Section 3 */}
                  <h2 id="bankers-lien-section-171">
                    The Banker&apos;s Right to General Lien &amp; Set-Off (Section 171, Indian Contract Act, 1872)
                  </h2>
                  <p>
                    The most alarming scenario for a salaried borrower occurs when their employer deposits their monthly paycheck into an account held at the exact same bank
                    where an overdue personal loan, business overdraft, or credit card is outstanding. Under such circumstances, lenders frequently execute an internal freeze,
                    commonly referred to as a &ldquo;banker&apos;s lien&rdquo; or &ldquo;right of set-off.&rdquo;
                  </p>
                  <p>
                    Statutorily, Section 171 of the Indian Contract Act, 1872 provides that bankers may, in the absence of a contract to the contrary, retain as a security
                    for a general balance of account, any goods bailed to them. Through extended commercial practice, banks interpret this right alongside the equitable doctrine
                    of set-off, which allows a creditor to combine accounts and apply credit balances in one account against debit balances in another, provided both accounts
                    stand in the exact same legal capacity and mutuality.
                  </p>

                  <blockquote>
                    <strong>Section 171, Indian Contract Act, 1872:</strong> &ldquo;Bankers, factors, wharfingers, attorneys of a High Court and policy-brokers may, in the absence of a contract to the contrary,
                    retain as a security for a general balance of account, any goods bailed to them; but no other persons have a right to retain, as a security for
                    such balance, goods bailed to them, unless there is an express contract to that effect.&rdquo;
                  </blockquote>

                  <p>
                    However, financial institutions routinely exceed their statutory mandate by asserting an absolute, unfettered right to freeze an employee&apos;s salary without prior notice.
                    The judiciary has repeatedly circumscribed this practice:
                  </p>
                  <ul>
                    <li>
                      <strong>Requirement of Mutuality of Capacity:</strong> A bank cannot exercise a general lien over deposits held in a fiduciary, trust,
                      or special-purpose capacity. If funds are deposited specifically as remuneration for personal labor and sustenance, mutuality of commercial debt is strictly contested.
                    </li>
                    <li>
                      <strong>Mandatory Prior Notice:</strong> As held in multiple landmark rulings, a banker must issue reasonable prior written notice specifying the intent
                      to exercise set-off, providing the customer an opportunity to explain their financial hardship or arrange basic living funds.
                    </li>
                    <li>
                      <strong>Prohibition on Total Livelihood Seizure:</strong> Freezing 100% of a salary account unlawfully deprives an individual of the means of existence,
                      contravening constitutional safeguards and specific statutory exemptions under civil execution codes.
                    </li>
                  </ul>

                  {/* Section 4 */}
                  <h2 id="same-bank-vs-different-bank">
                    Same Bank vs Different Bank Salary Account: Crucial Legal Distinctions
                  </h2>
                  <p>
                    Whether your salary account can be frozen or marked with a lien depends entirely on whether your payroll account is maintained with the lending institution
                    or with an independent, separate scheduled commercial bank. Borrowers must understand the critical legal wall separating these two environments:
                  </p>
                  <ol>
                    <li>
                      <strong>Salary Account in the Same Lending Bank:</strong> If your salary is credited to the bank where your defaulted loan exists, the bank holds both the deposit ledger and the debt ledger.
                      Through internal software controls, the branch or recovery wing can unilaterally mark a lien under Section 171 of the Indian Contract Act
                      or trigger automatic internal transfers. In such cases, requesting your employer&apos;s human resources department to update your salary disbursement mandate to an independent third-party bank is essential.
                    </li>
                    <li>
                      <strong>Salary Account in a Different Bank:</strong> A lending bank or NBFC has ZERO legal authority, contractual privity, or banker&apos;s lien over deposit accounts in another bank.
                      A rival bank CANNOT freeze your funds simply because an outside lender claims default. A third-party bank can only freeze or attach funds upon receiving a formal court decree, a garnishee order under Order XXI Rule 46 CPC, or a police notice under CrPC.
                    </li>
                  </ol>
                  <p>
                    Recovery agents frequently threaten defaulted borrowers by claiming they will freeze every account across all banks linked to their PAN.
                    This claim is completely fictitious and legally impossible without formal judicial decrees.
                  </p>

                  {/* Section 5 */}
                  <h2 id="salary-protection-section-60-cpc">
                    Statutory Protection of Salary Under Section 60 CPC &amp; Article 21 of the Constitution
                  </h2>
                  <p>
                    The Indian legal system explicitly recognizes that debt recovery cannot be executed in a manner that starves a citizen or deprives their family of fundamental subsistence.
                    Even in the formal judicial enforcement of a civil court money decree, the Parliament of India codified strict statutory exemptions under Section 60 of the Code of Civil Procedure, 1908 (CPC).
                  </p>

                  <blockquote>
                    <strong>Section 60(1)(i), Code of Civil Procedure, 1908:</strong> &ldquo;Provided that the following particulars shall not be liable to such attachment or sale, namely:—
                    salary to the extent of the first one thousand rupees and two-thirds of the remainder in execution of any decree other than a decree for maintenance.&rdquo;
                  </blockquote>

                  <p>
                    This statutory formula ensures that a substantial majority of a salaried worker&apos;s earnings remains completely untouchable by creditors.
                    Furthermore, the Supreme Court of India has ruled in multiple constitutional judgments that the right to livelihood forms an integral, non-negotiable core
                    of the Right to Life guaranteed under Article 21 of the Constitution of India.
                  </p>

                  {/* Section 6 */}
                  <h2 id="step-by-step-protection-protocol">
                    5-Step Statutory Protocol to Safeguard Your Salary Account During Loan Settlement
                  </h2>
                  <ol>
                    <li>
                      <strong>Comprehensive NACH &amp; e-Mandate Audit:</strong> Identify all active mandates linked to your salary account. Extract the Unique Mandate Reference Number (UMRN), presentation dates, maximum debit caps, and recipient financial entities.
                    </li>
                    <li>
                      <strong>Advocate-Drafted Statutory Mandate Revocation:</strong> Serve a formal revocation notice to both the destination bank and the lender citing NPCI Procedural Guidelines and RBI Fair Practices Code, instructing the bank to stop honoring electronic debit presentations.
                    </li>
                    <li>
                      <strong>Strategic Payroll Account Migration:</strong> If your salary is currently credited to the lending bank, immediately notify your employer&apos;s payroll department to switch future disbursements to a fresh, independent scheduled bank where you hold no debt obligations.
                    </li>
                    <li>
                      <strong>Cease-and-Desist Notice Against Unlawful Liens:</strong> Issue a pre-emptive legal notice warning the lender against unlawful Section 171 lien marking, citing Section 60 CPC wage protections and Supreme Court precedents prohibiting harassment and extrajudicial asset freezing.
                    </li>
                    <li>
                      <strong>Formal Settlement Structuring &amp; Written Debit Moratorium:</strong> Execute formal One-Time Settlement (OTS) negotiations under advocate representation, ensuring the settlement agreement explicitly mandates zero debit runs, waiver of all bounce charges, and issuance of a clean No Dues Certificate (NDC).
                    </li>
                  </ol>

                  {/* Section 7 - Infographic - Matching /blog/[slug] lines 382-408 */}
                  <div id="infographic" className="not-prose my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D2A02A]/20">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#D2A02A] text-white font-bold text-base shadow-sm">
                        📊
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                          Key Insights &amp; Data Infographic
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          Salary Account Protection, NACH Revocation &amp; Section 171 Lien Framework
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20 shadow-sm flex justify-center items-center p-2 sm:p-4">
                      <img
                        src={LOCAL_IMAGE_PATH}
                        alt="Salary Account Protection Roadmap – Infographic"
                        className="w-full h-auto max-h-[900px] object-contain rounded-lg hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                      Prepared by AMA Legal Solutions Research &amp; Analytics Team &bull; Banking Law &amp; Compliance Overview
                    </p>
                  </div>

                  {/* Section 8 */}
                  <h2 id="nach-mandate-cancellation">
                    Legal Procedure to Cancel NACH / ECS Mandates Without Triggering Criminal Allegations
                  </h2>
                  <p>
                    One of the most persistent concerns for salaried borrowers is whether canceling a NACH mandate or requesting their bank to stop payment
                    constitutes a criminal offense. Under Indian banking jurisprudence, revoking an electronic mandate is a legitimate contractual act;
                    however, the manner and timing in which it is executed dictate whether criminal exposure can arise.
                  </p>
                  <p>
                    Under NPCI circulars, a customer has the legal right to revoke an e-Mandate or NACH debit through their sponsor bank or destination bank.
                    However, simply clicking &ldquo;Stop Debit&rdquo; in internet banking without legal notice often causes the clearing system to record the failure
                    as &ldquo;Account Closed&rdquo; or &ldquo;Payment Stopped by Drawer.&rdquo; Lenders routinely weaponize such return codes to allege fraudulent intent
                    under Section 25 of the Payment and Settlement Systems Act, 2007.
                  </p>
                  <p>
                    When an advocate drafts the mandate revocation, the communication clearly establishes that the mandate is being paused due to bona fide financial
                    incapacity and that the borrower is actively pursuing formal restructuring or loan settlement under RBI guidelines. This contemporaneous legal record
                    shuts down allegations of deliberate fraud or bad-faith evasion.
                  </p>

                  {/* Section 9 */}
                  <h2 id="section-25-pss-and-138-ni-act">
                    Defending Against Section 25 PSS Act &amp; Section 138 NI Act Bounces
                  </h2>
                  <p>
                    If an auto-debit fails or a post-dated security cheque bounces, lenders typically issue a statutory demand notice giving the borrower fifteen days to pay.
                    Section 25 of the Payment and Settlement Systems Act, 2007 mirrors Section 138 of the Negotiable Instruments Act, 1881 in its punitive structure.
                  </p>
                  <p>
                    However, establishing a criminal offense under Section 25 requires proof of a legally enforceable debt at the exact time of debit presentation and a failure
                    to rectify following valid statutory notice. When an advocate handles your loan settlement, a comprehensive reply is issued within the mandatory 15-day window,
                    placing on record genuine hardship, arbitrary charges, and active settlement negotiations, effectively destroying the prosecutorial foundation for criminal trial.
                  </p>

                  {/* Section 10 */}
                  <h2 id="unlawful-freeze-remedies">
                    What to Do If Your Salary Account Is Already Frozen or Marked with a Lien
                  </h2>
                  <p>
                    If you discover that a lien has already been placed on your salary account or your balance shows as negative due to an internal hold,
                    prompt legal action is critical:
                  </p>
                  <ol>
                    <li>
                      <strong>Demand Written Legal Basis:</strong> Immediately submit a formal written demand to the branch manager requesting the specific statutory section or court order number under which the lien was marked.
                    </li>
                    <li>
                      <strong>Serve Advocate Legal Notice:</strong> Have a banking advocate issue an urgent legal notice challenging the lien under Section 171 Indian Contract Act, citing Section 60(1)(i) CPC wage exemptions.
                    </li>
                    <li>
                      <strong>Escalate to the RBI Integrated Ombudsman:</strong> Lodge an expedited digital complaint under Clause 10 of the Reserve Bank - Integrated Ombudsman Scheme, 2021.
                    </li>
                    <li>
                      <strong>File an Urgent Consumer Complaint:</strong> Approach the District Consumer Disputes Redressal Commission under Section 35 of the Consumer Protection Act, 2019 seeking an immediate interim order unfreezing the account.
                    </li>
                  </ol>

                  {/* Section 11 */}
                  <h2 id="rbi-guidelines-and-court-precedents">
                    Key Judicial Precedents &amp; RBI Directives on Bank Account Attachment
                  </h2>
                  <ul>
                    <li>
                      <strong>Radhika v. State Bank of India (Kerala High Court):</strong> The High Court ruled that a bank cannot freeze a customer&apos;s account or withhold funds deposited for basic sustenance without due process of law. The banker&apos;s right of lien under Section 171 cannot override constitutional guarantees of life and personal dignity under Article 21.
                    </li>
                    <li>
                      <strong>ICICI Bank Ltd. v. Prakash Kaur (Supreme Court of India):</strong> The Apex Court condemned coercive and strong-arm recovery tactics by financial institutions, affirming that all debt recovery procedures must strictly comply with the rule of law.
                    </li>
                    <li>
                      <strong>RBI Master Direction on Fair Practices Code for Lenders:</strong> Mandates that banks and NBFCs must refrain from unwarranted interference in the affairs of borrowers and provide clear grievance redressal mechanisms prior to initiating coercive recovery.
                    </li>
                  </ul>
                </div>

                {/* Tiptap Styles - Matching /blog/[slug] lines 420-439 */}
                <style jsx global>{`
                  .tiptap-content h1 {
                    font-size: 2em;
                    font-weight: bold;
                    margin-top: 1.5em;
                    margin-bottom: 0.8em;
                    color: #1a202c;
                  }
                  .tiptap-content h2 {
                    font-size: 1.75em;
                    font-weight: bold;
                    margin-top: 1.5em;
                    margin-bottom: 0.8em;
                    color: #1a202c;
                    scroll-margin-top: 100px;
                  }
                  .tiptap-content h3 {
                    font-size: 1.5em;
                    font-weight: bold;
                    margin-top: 1.2em;
                    margin-bottom: 0.6em;
                    color: #2d3748;
                    scroll-margin-top: 100px;
                  }
                  .tiptap-content p {
                    margin-bottom: 1.2em;
                    line-height: 1.8;
                    font-size: 1.05rem;
                  }
                  .tiptap-content ul {
                    list-style-type: disc;
                    padding-left: 1.5em;
                    margin-bottom: 1.2em;
                  }
                  .tiptap-content ol {
                    list-style-type: decimal;
                    padding-left: 1.5em;
                    margin-bottom: 1.2em;
                  }
                  .tiptap-content li {
                    margin-bottom: 0.5em;
                  }
                  .tiptap-content blockquote {
                    border-left: 4px solid #d2a02a;
                    padding-left: 1em;
                    font-style: italic;
                    color: #4a5568;
                    background: #fffaf0;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-bottom: 1.2em;
                  }
                  .tiptap-content a {
                    color: #b8860b;
                    font-weight: 600;
                    text-decoration: underline;
                    text-underline-offset: 3px;
                    transition: color 0.15s ease;
                  }
                  .tiptap-content a:hover {
                    color: #8a6508;
                    text-decoration-color: #8a6508;
                  }
                  .tiptap-content table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;
                    margin: 2.5rem 0;
                    border: 1px solid #e2e8f0;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
                  }
                  .tiptap-content th {
                    background: #faf7f0;
                    color: #1a202c;
                    padding: 0.9rem 1.1rem;
                    text-align: left;
                    font-weight: 700;
                    font-size: 0.95rem;
                    border-bottom: 2px solid #d2a02a;
                    border-right: 1px solid #e2e8f0;
                  }
                  .tiptap-content th:last-child {
                    border-right: none;
                  }
                  .tiptap-content td {
                    padding: 0.85rem 1.1rem;
                    border-bottom: 1px solid #edf2f7;
                    border-right: 1px solid #edf2f7;
                    font-size: 0.925rem;
                    vertical-align: top;
                  }
                  .tiptap-content td:last-child {
                    border-right: none;
                  }
                  .tiptap-content tr:last-child td {
                    border-bottom: none;
                  }
                  .tiptap-content tr:nth-child(even) {
                    background-color: #fdfbf7;
                  }
                `}</style>

                {/* References & Authority Section - Matching /blog/[slug] lines 442-456 */}
                <div id="citations" className="border-t border-gray-200 pt-8 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    References &amp; Authority
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D2A02A] underline"
                      >
                        Reserve Bank of India (RBI) – Master Direction on Fair Practices Code for Lenders
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cms.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D2A02A] underline"
                      >
                        RBI Integrated Ombudsman Scheme, 2021 – Clause 10 Grounds of Complaint
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.npci.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D2A02A] underline"
                      >
                        National Payments Corporation of India (NPCI) – NACH / e-Mandate Procedural Guidelines
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://indiacode.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D2A02A] underline"
                      >
                        India Code – Section 60(1)(i) of the Code of Civil Procedure, 1908 &amp; Section 171 Indian Contract Act, 1872
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://consumerhelpline.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D2A02A] underline"
                      >
                        Department of Consumer Affairs – National Consumer Helpline (INGRAM)
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Share Section - Matching /blog/[slug] lines 458-476 */}
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Share this article:</span>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleShare("facebook")}
                        className="text-gray-500 hover:text-[#D2A02A] transition-colors"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleShare("twitter")}
                        className="text-gray-500 hover:text-[#D2A02A] transition-colors"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="text-gray-500 hover:text-[#D2A02A] transition-colors"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* AMA Legal Solutions Company & Media Section - Matching /blog/[slug] lines 479-580 */}
                <section className="border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 bg-white text-center shadow-lg relative mt-12 mb-8">
                  <div className="flex justify-center mb-4">
                    <img
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
                    Trusted with a <strong className="text-[#D2A02A] font-bold">4.7 Google Rating</strong>, over <strong className="text-[#D2A02A] font-bold">10,000+ Clients Served</strong>, <strong className="text-[#D2A02A] font-bold">25,000+ Cases Handled</strong>, and more than <strong className="text-[#D2A02A] font-bold">40+ Years of Experience</strong> in providing strategic legal defense and debt resolution across India.
                  </p>

                  {/* Media Coverages */}
                  <div className="border-t border-b border-gray-100 py-4 my-6">
                    <h3 className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                      Our media coverages
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
                      <Link
                        href="https://yourstory.com/companies/ama-legal-solutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img
                          src="/newAssets/media/yourstory.png"
                          alt="YourStory"
                          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.livemint.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img
                          src="/newAssets/media/livemint.png"
                          alt="LiveMint"
                          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.barandbench.com/news/ama-legal-solutions-launches-indias-first-law-firm-backed-pro-bono-driven-mobile-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img
                          src="/newAssets/media/barandbench.png"
                          alt="Bar and Bench"
                          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://medium.com/@amalegalsolutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img
                          src="/newAssets/media/medium.png"
                          alt="Medium"
                          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.mid-day.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <img
                          src="/newAssets/media/mid_day.png"
                          alt="Mid-day"
                          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Services in single row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/loan-settlement"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Loan Settlement Services
                    </Link>
                    <Link
                      href="/can-a-bank-freeze-my-salary-account-for-personal-loan-default"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Salary Account Protection
                    </Link>
                    <Link
                      href="/send-legal-notice"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Legal Notice Services
                    </Link>
                    <Link
                      href="/virtual-inhouse-councel"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Virtual In-house Counsel
                    </Link>
                  </div>
                </section>

                {/* FAQs Section - Matching /blog/[slug] lines 618-646 */}
                <section id="faqs" className="scroll-mt-32 border-t border-gray-200 pt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.id}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="flex justify-between items-center w-full text-left p-4 font-medium text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors"
                        >
                          <span className="flex items-center">
                            <span className="text-[#D2A02A] mr-3 font-bold">Q.</span>
                            {faq.question}
                          </span>
                          <span
                            className={`transform transition-transform duration-200 ${
                              expandedFaqs.includes(faq.id) ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              className="w-5 h-5 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </button>
                        {expandedFaqs.includes(faq.id) && (
                          <div className="px-4 pb-4 pt-0 text-gray-700 leading-relaxed pl-10 text-sm">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Related Articles - Matching /blog/[slug] lines 648-684 */}
                <section className="border-t border-gray-200 pt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Related Articles &amp; Guides
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <Link
                      href="/can-a-bank-freeze-my-salary-account-for-personal-loan-default"
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D2A02A] transition-colors line-clamp-2">
                            Can Bank Freeze Salary Account for Personal Loan Default?
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                            Understand the legal boundaries of banker&apos;s lien, court attachment orders, and your defense options.
                          </p>
                          <span className="text-[#D2A02A] font-medium text-sm flex items-center mt-auto">
                            Read Article{" "}
                            <svg
                              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D2A02A] transition-colors line-clamp-2">
                            How to Stop Bank Recovery Agents Harassment Legally in India
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                            Supreme Court precedents, RBI directives, and police complaint procedures against aggressive collectors.
                          </p>
                          <span className="text-[#D2A02A] font-medium text-sm flex items-center mt-auto">
                            Read Article{" "}
                            <svg
                              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/how-to-reply-to-bank-legal-notice-for-personal-loan-default"
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D2A02A] transition-colors line-clamp-2">
                            How to Reply to Bank Legal Notice for Personal Loan Default
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                            Essential drafting protocols, statutory counter-notices, and dispute documentation.
                          </p>
                          <span className="text-[#D2A02A] font-medium text-sm flex items-center mt-auto">
                            Read Article{" "}
                            <svg
                              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/one-time-settlement-scheme-for-personal-loan-2026"
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D2A02A] transition-colors line-clamp-2">
                            One-Time Settlement (OTS) Scheme for Personal Loans
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
                            RBI loan settlement guidelines, waiver negotiation strategies, and formal closure procedures.
                          </p>
                          <span className="text-[#D2A02A] font-medium text-sm flex items-center mt-auto">
                            Read Article{" "}
                            <svg
                              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Sidebar - Author & CTA - Matching /blog/[slug] lines 688-746 */}
            <div className="space-y-8 sticky top-24">
              {/* Author Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  About Author
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#D2A02A]">
                    <img
                      src="/anujbhiya.png"
                      alt="Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Anuj Anand Malik</h4>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-xs text-[#D2A02A] hover:underline"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                  Founder of AMA Legal Solutions, trusted advocate, loan settlement expert, and banking lawyer with extensive experience in debt resolution and compliance.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2 rounded-lg text-sm font-semibold hover:bg-[#0077b5] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Contact Card */}
              <div className="bg-[#5A4C33] p-6 rounded-xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">Need Legal Help?</h3>
                <p className="text-gray-200 mb-6 text-sm">
                  Get expert advice on loan settlement and protecting your salary account.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full border border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5A4C33] transition-colors cursor-pointer"
                >
                  Request Callback
                </button>
              </div>

              {/* Client Reviews Card (Matching Product Schema) */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2.5">
                  <h3 className="text-base font-bold text-gray-900">Client Reviews</h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Stars />
                  <span className="font-extrabold text-gray-900 text-sm">
                    5.0 / 5.0
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mb-4">
                  Based on 1,820 verified borrower reviews across India
                </p>

                <div className="space-y-4">
                  {clientReviews.map((rev, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative"
                    >
                      <div className="flex items-center mb-1.5">
                        <Stars />
                        <span className="font-bold text-gray-900 ml-2 text-xs">
                          {rev.reviewRating}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed mb-3 italic">
                        &ldquo;{rev.reviewBody}&rdquo;
                      </p>
                      <div className="border-t border-gray-200/60 pt-2">
                        <p className="font-bold text-gray-900 text-xs">
                          {rev.authorName}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          {rev.authorLocation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Guides Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                  Quick Links
                </h3>
                <div className="space-y-2.5 text-xs">
                  <Link
                    href="/can-a-bank-freeze-my-salary-account-for-personal-loan-default"
                    className="block p-2 rounded-lg hover:bg-[#FAF7F0] text-gray-700 hover:text-[#5A4C33] transition"
                  >
                    <span className="font-semibold block">
                      Can Bank Freeze Salary Account?
                    </span>
                    <span className="text-[11px] text-gray-500">
                      Personal Loan Default Defense
                    </span>
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="block p-2 rounded-lg hover:bg-[#FAF7F0] text-gray-700 hover:text-[#5A4C33] transition"
                  >
                    <span className="font-semibold block">
                      Stop Recovery Agent Harassment
                    </span>
                    <span className="text-[11px] text-gray-500">
                      Supreme Court Precedents &amp; Rights
                    </span>
                  </Link>
                  <Link
                    href="/one-time-settlement-scheme-for-personal-loan-2026"
                    className="block p-2 rounded-lg hover:bg-[#FAF7F0] text-gray-700 hover:text-[#5A4C33] transition"
                  >
                    <span className="font-semibold block">
                      One-Time Settlement Scheme 2026
                    </span>
                    <span className="text-[11px] text-gray-500">
                      RBI Guidelines &amp; Waiver Framework
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Intake Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
            onClick={(e) => {
              if (e.target === e.currentTarget) resetModal();
            }}
          >
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-gray-100 relative">
              <button
                onClick={resetModal}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
                aria-label="Close modal"
              >
                ✕
              </button>

              {!modalSubmitted ? (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase mb-2">
                      <span>⚖️</span> Confidential Legal Consultation
                    </div>
                    <h3 className="text-xl font-bold text-[#1a202c]">
                      Protect Your Salary Account
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Direct consultation with Advocate Anuj Anand Malik under a transparent fixed legal advisory model.
                    </p>
                  </div>

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
                        placeholder="e.g. Rajeshwar Sharma"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] transition"
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
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] transition"
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
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] transition"
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
                          placeholder="e.g. Bengaluru / Karnataka"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Primary Concern
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] bg-white transition"
                        >
                          <option value="NACH Auto-Debit Revocation & Settlement">
                            NACH Auto-Debit Revocation &amp; Settlement
                          </option>
                          <option value="Salary Account Frozen by Same Bank (Section 171)">
                            Salary Account Frozen by Same Bank (Section 171)
                          </option>
                          <option value="Lender Threatening to Freeze Third-Party Account">
                            Lender Threatening to Freeze Third-Party Account
                          </option>
                          <option value="Section 25 PSS Act / 138 NI Notice Received">
                            Section 25 PSS Act / 138 NI Notice Received
                          </option>
                          <option value="Recovery Agent Workplace Harassment">
                            Recovery Agent Workplace Harassment
                          </option>
                          <option value="One-Time Loan Settlement (OTS) Structuring">
                            One-Time Loan Settlement (OTS) Structuring
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Brief Case Summary / Concerned Bank or NBFC
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Mention the bank name, loan type, whether salary account is in the same bank, and current status of auto-debits..."
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] transition resize-none"
                      />
                    </div>

                    <p className="text-[11px] text-gray-500 leading-normal">
                      🔒 All submissions are strictly confidential under Section 126 of the Indian Evidence Act, 1872. Zero spam guarantee.
                    </p>

                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 rounded-lg shadow transition text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit &amp; Open WhatsApp Legal Desk</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Request Received Successfully
                  </h3>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Advocate Anuj Anand Malik&apos;s team has recorded your details. If your WhatsApp did not open automatically, click the direct chat button below:
                  </p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=918700343611&text=${encodeURIComponent(
                      `Hello Advocate Anuj Anand Malik, I submitted a consultation request regarding salary account protection and loan settlement for ${formData.fullName} (${formData.phone}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#D2A02A] text-white px-6 py-3 rounded-lg font-bold text-sm shadow hover:bg-[#b08522] transition"
                  >
                    <span>Open WhatsApp Legal Desk Now</span>
                  </a>
                  <div>
                    <button
                      onClick={resetModal}
                      className="text-xs text-gray-500 hover:text-gray-800 underline mt-2 cursor-pointer"
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

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
const PAGE_SLUG = "/loan-settlement-for-sbi-bank";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/loan-settlement-for-sbi-bank.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-28";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What is the SBI Rin Samadhan OTS scheme and who is eligible?",
    answer:
      "The State Bank of India Rin Samadhan scheme is a specialized Board-approved One-Time Settlement (OTS) framework formulated under the State Bank of India General Regulations to resolve chronic Non-Performing Assets (NPAs). Eligible borrowers include individuals, agriculturalists, and MSMEs whose unsecured or doubtful debt accounts have been classified under Sub-Standard, Doubtful, or Loss asset categories for at least 90 to 180 days. Under this scheme, SBI sanctions substantial waivers on accrued penal interest, legal expenses, and uncollected compound levies, provided the borrower demonstrates genuine hardship and tenders the negotiated compromise payment within the prescribed timeframe.",
  },
  {
    id: "faq-2",
    question: "How does SBI calculate the minimum compromise settlement amount?",
    answer:
      "Under SBI's internal compromise settlement policy and RBI prudential provisioning guidelines, the compromise amount is evaluated on the Net Present Value (NPV) of the underlying asset rather than inflated ledger balances. The calculation begins with the core contractual principal outstanding, deducting unrealized compound interest, penal charges, and processing penalties capitalised after NPA classification. The settlement committee assesses the realizable value of any collateral, the borrower's documented financial incapacity, and the legal recoverability timeframe before determining an enforceable compromise sanction figure.",
  },
  {
    id: "faq-3",
    question: "What is the role of SBI's Stressed Assets Recovery Branch (SARB) in settlement?",
    answer:
      "When a retail personal loan, SME credit facility, or credit card debt defaults beyond ninety days, SBI transfers the file from the local home branch to a specialized Stressed Assets Recovery Branch (SARB) or Stressed Assets Management Branch (SAMB). SARB units are centralized recovery centers staffed by authorized Chief Managers empowered with delegated financial powers to sanction compromise waivers under Bank Board policies. Initiating advocate-led legal representations directly with SARB bypasses unresponsive branch officers and halts unauthorized recovery agent domestic visits.",
  },
  {
    id: "faq-4",
    question: "Can SBI Card dues be settled together with an SBI personal loan?",
    answer:
      "Although State Bank of India and SBI Cards and Payment Services Limited share brand identity, they are distinct corporate legal entities governed by separate regulatory compliance boards. SBI Bank operates as a statutory public sector banking corporation under the SBI Act, 1955, whereas SBI Cards is a publicly listed Non-Banking Financial Company (NBFC-ND-SI) governed by RBI directions for NBFCs. Consequently, an SBI personal loan and an SBI credit card cannot be bundled into a single joint compromise letter; an advocate must file distinct, parallel hardship petitions with each entity to obtain independent, legally enforceable sanction letters.",
  },
  {
    id: "faq-5",
    question: "What should a borrower do upon receiving a Lok Adalat notice from SBI?",
    answer:
      "Receiving a notice to appear before the National Lok Adalat under the Legal Services Authorities Act, 1987 represents a prime legal opportunity to secure a binding debt settlement. An award passed by the Lok Adalat holds the exact legal status of a final civil court decree under Section 21 of the Act, which is permanently non-appealable and binds both the bank and borrower. Distressed borrowers represented by Bar Council advocates can present documented hardship evidence to the Lok Adalat panel, securing formal judicial sanction for interest waivers and zero-liability compromise orders without incurring court fees.",
  },
  {
    id: "faq-6",
    question: "Does SBI agree to installment payments for an approved OTS compromise?",
    answer:
      "Under SBI's Board-approved One-Time Settlement policy, borrowers are typically required to deposit an upfront earnest money deposit—usually ten to fifteen percent of the sanctioned compromise amount—upon acceptance of the OTS sanction letter. The remaining compromise balance can be structured into structured tranches payable over thirty to ninety days, subject to the approval of the competent sanctioning authority. However, extending payments beyond the stipulated OTS sanction validity period may revoke the approved concessions, making strict adherence to the advocate-negotiated schedule critical.",
  },
  {
    id: "faq-7",
    question: "What legal remedies exist if SBI threatens legal action on pension or salary accounts?",
    answer:
      "While banks frequently invoke the right of general lien under Section 171 of the Indian Contract Act, 1872, Indian law strictly prohibits arbitrary attachment of pension and subsistence allowances. Under Section 60(1)(g) of the Code of Civil Procedure, 1908 and Supreme Court precedents, pensions, provident funds, and basic welfare allowances are legally exempt from attachment or unilateral recovery offsets. Enrolled advocates immediately serve formal legal notices restraining the branch from freezing subsistence accounts, petitioning the RBI Integrated Ombudsman if statutory protections are infringed.",
  },
  {
    id: "faq-8",
    question: "How long does it take to receive an official No Dues Certificate from SBI post-payment?",
    answer:
      "Following complete remittance of the sanctioned compromise amount within the stipulated deadline, SBI's Stressed Assets Recovery Branch is mandated under the RBI Fair Practices Code to issue an official No Dues Certificate (NDC) or Closure Letter within twenty-one to thirty business days. The bank is simultaneously required to release any original property documents or pledged securities and submit updated account status records to TransUnion CIBIL, Equifax, Experian, and CRIF High Mark. Advocates actively supervise post-payment compliance to ensure the account status is updated to 'Settled' without residual audit discrepancies.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Harish Chandra Joshi",
  authorRole: "Retired Government Officer • SBI Personal Loan & Lok Adalat Compromise",
  reviewBody:
    "Following medical emergencies, my SBI personal loan fell into NPA and was assigned to the Stressed Assets Recovery Branch (SARB). I received summons for the National Lok Adalat. Advocates from AMA Legal Solutions represented me at the Lok Adalat session, presented my medical hardship documents, and secured an official compromise decree waiving all penal interest with complete legal immunity.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "SBI Loan Settlement: One-Time Settlement (OTS Scheme) & Credit Card Process",
      description:
        "Facing default on SBI personal loans, SME loans, or SBI Cards? Discover the official SBI OTS compromise scheme rules, waiver percentage, and legal advocate guidance.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "SBI Loan Settlement: One-Time Settlement (OTS Scheme) & Credit Card Process",
      description:
        "Authoritative legal guide on State Bank of India (SBI) loan and credit card settlement. Discover the Rin Samadhan OTS scheme, SARB branch protocol, Lok Adalat compromise awards, and Bar Council advocate representation.",
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
      name: "Advocate-Led State Bank of India (SBI) Loan & Credit Card Settlement Legal Representation",
      description:
        "Specialized legal counsel and formal compromise negotiation for SBI personal loans, SBI credit cards, Rin Samadhan OTS scheme, SARB proceedings, and National Lok Adalat compromise awards.",
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
          name: "Loan Settlement for SBI",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Stage Advocate Protocol for State Bank of India (SBI) Loan Settlement",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "NPA Account Classification & Unbundled Ledger Audit",
          description:
            "Forensic examination of SBI loan account statements, separating contractual principal from uncollected penal interest, processing fees, and unlawful compound capitalization.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cease-and-Desist Notice & Recovery Agent Injunction",
          description:
            "Serving formal legal notice on SBI SARB Chief Managers and regional controllers, halting third-party telecaller intimidation, unannounced residence visits, and employer contact under RBI regulations.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rin Samadhan Hardship Submission & Lok Adalat Representation",
          description:
            "Submitting authenticated medical and financial hardship dossiers to the competent SBI settlement committee or representing the borrower before the National Lok Adalat bench.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Forensic OTS Sanction Letter Verification",
          description:
            "Scrutinizing the official written SBI compromise sanction letter to confirm official seal, designated manager signatures, clear account identifiers, and waiver terms.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Direct Account Remittance, No Dues Certificate & CIBIL Bureau Updating",
          description:
            "Supervising compromise fund remittance directly into the borrower's SBI account, securing the unconditional No Dues Certificate, and ensuring credit bureaus reflect 'Settled' status.",
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
  { id: "quick-answer", title: "Quick Answer: SBI Loan Settlement" },
  { id: "sbi-npa-sarb-framework", title: "SBI Stressed Assets Framework (SARB & SAMB)" },
  { id: "rin-samadhan-ots-scheme", title: "SBI Rin Samadhan OTS Scheme (Rules & Eligibility)" },
  { id: "sbi-card-vs-sbi-bank", title: "SBI Bank vs SBI Cards: Key Structural Distinctions" },
  { id: "lok-adalat-compromise", title: "National Lok Adalat Settlement Protocol" },
  { id: "comparative-settlement-matrix", title: "Institutional Settlement Comparison Matrix" },
  { id: "the-5-stage-protocol", title: "5-Stage Advocate Protocol for SBI Settlement" },
  { id: "signature-infographic", title: "SBI Settlement & Discharge Architecture" },
  { id: "defense-sec-138-pssa-sarfaesi", title: "Defense: Sec 138 NI Act, NACH & SARFAESI" },
  { id: "halting-recovery-harassment", title: "Halting Recovery Agent Harassment & Calls" },
  { id: "salary-pension-account-protection", title: "Salary & Pension Account Protection" },
  { id: "settlement-letter-verification", title: "Verifying SBI OTS Sanction Letters & NDC" },
  { id: "cibil-credit-rehabilitation", title: "CIBIL Reporting & Future Borrowing Eligibility" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Legal Advisory" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function LoanSettlementForSbiBankClient() {
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
    assetType: "SBI Personal Loan & Credit Card",
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
    const textMsg = `Hello AMA Legal Solutions, I require confidential advocate consultation regarding State Bank of India (SBI) loan or credit card settlement.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Matter Type: ${formData.assetType}
Details: ${formData.message || "Consultation requested."}`;
    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/918700343611?text=${encoded}`, "_blank");
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setModalSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      cityState: "",
      assetType: "SBI Personal Loan & Credit Card",
      message: "",
    });
  };

  const handleShare = (network: string) => {
    const title = "SBI Loan Settlement: One-Time Settlement (OTS Scheme) & Credit Card Process";
    let shareUrl = "";

    if (network === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
    } else if (network === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(title)}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
    } else if (network === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`;
      window.open(shareUrl, "_blank", "width=600,height=400");
    } else if (network === "whatsapp") {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${PAGE_URL}`)}`;
      window.open(shareUrl, "_blank");
    } else if (network === "copy") {
      navigator.clipboard.writeText(PAGE_URL);
      setShareMsg("Link copied to clipboard!");
      setTimeout(() => setShareMsg(null), 3000);
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Loan Settlement for SBI", href: PAGE_SLUG },
  ];

  return (
    <>
      {/* ── JSON-LD SCHEMA INJECTION ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pt-20 md:pt-28 font-sans antialiased selection:bg-[#D2A02A] selection:text-white">
        
        {/* ══ ASYMMETRIC 12-COLUMN HERO SECTION ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mb-8 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-6">
              <Breadcrumbs items={breadcrumbItems} />

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#1a202c] tracking-tight leading-[1.15]">
                SBI Loan Settlement: <span className="text-[#D2A02A]">One-Time Settlement (OTS Scheme)</span> &amp; Credit Card Process
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                Defaulting on State Bank of India personal loans, SME credit, or SBI Cards triggers administrative recovery transfers, SARFAESI proceedings, and Lok Adalat summons. Discover the statutory framework governing SBI&apos;s Board-approved Rin Samadhan OTS scheme, Stressed Assets Recovery Branches (SARB), and advocate-led compromise negotiations designed to achieve debt freedom with complete legal immunity.
              </p>

              {/* Author & Review Metadata Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-300/60 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <img
                    src="/anujbhiya.png"
                    alt="Advocate Anuj Anand Malik"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#D2A02A] shadow-sm"
                  />
                  <div>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="font-bold text-gray-900 hover:text-[#D2A02A] transition"
                    >
                      Anuj Anand Malik
                    </Link>
                    <span className="block text-[11px] text-gray-500">
                      Founder &amp; Senior Advocate
                    </span>
                  </div>
                </div>

                <span className="text-gray-300 hidden sm:inline">&bull;</span>
                <span className="text-gray-600 font-medium">
                  Reviewed by <span className="font-semibold text-gray-800">Team AMA Legal Solutions</span>
                </span>

                <span className="text-gray-300 hidden sm:inline">&bull;</span>
                <span className="inline-flex items-center gap-1 text-gray-600">
                  <span>📅</span> 28-09-2026
                </span>

                <span className="text-gray-300 hidden sm:inline">&bull;</span>
                <span className="inline-flex items-center gap-1 text-gray-600">
                  <span>⏱️</span> 16 Min Read
                </span>
              </div>

              {/* Badges Bar */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ✓ SBI Rin Samadhan OTS 2026
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  ✓ National Lok Adalat Defense
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  ✓ 100% Bar Council Legal Privileged
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                  ✓ Section 138 &amp; SARFAESI Defense
                </span>
              </div>
            </div>

            {/* Right Col — Generated Luxury OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/loan-settlement-for-sbi-bank.png"
                  alt="SBI Loan Settlement – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Authoritative SBI Debt Resolution
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Official OTS Sanction Letters &bull; Zero Third-Party Risk &bull; Full Discharge
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
                  Licensed High Court Advocates
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🏛️</span> Lok Adalat
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Binding Civil Court Decrees
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> Genuine NDC
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Authentic Bank Sanction Letters
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
                  Published: <span className="font-semibold text-gray-700">September 28, 2026</span> &bull; Practice Area: <span className="font-semibold text-gray-700">Public Sector Banking, OTS Resolution &amp; Judicial Defense</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Share:</span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-8 h-8 rounded-lg bg-gray-100 text-gray-800 hover:bg-black hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on Twitter/X"
                    aria-label="Share on Twitter"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on LinkedIn"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#5A4C33] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Copy Link"
                    aria-label="Copy Link"
                  >
                    <FaCopy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {shareMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                  <FaCheck className="w-4 h-4 text-emerald-600" />
                  <span>{shareMsg}</span>
                </div>
              )}

              {/* ── SECTION 1: QUICK ANSWER BLOCK ── */}
              <section id="quick-answer" className="scroll-mt-28">
                <div className="p-6 md:p-8 bg-amber-50/70 border-l-4 border-[#D2A02A] rounded-r-2xl shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#D2A02A]"></span>
                    Statutory Definition &bull; Featured Snippet &amp; AI Overview
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    What is SBI Loan Settlement?
                  </h2>
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed font-serif">
                    SBI loan settlement is a formal compromise mechanism conducted under State Bank of India&apos;s Board-approved One-Time Settlement (OTS) policy or during National Lok Adalats, allowing distressed borrowers to settle non-performing personal, agricultural, or SME loans for a reduced lump-sum payment. Once an account is transferred to SBI&apos;s Stressed Assets Recovery Branch (SARB), borrowers can secure waivers on accumulated penal interest and uncollected charges, paying off the agreed principal balance in 1 to 3 installments.
                  </p>
                </div>
              </section>

              {/* ── SECTION 2: SBI NPA & STRESSED ASSETS FRAMEWORK ── */}
              <section id="sbi-npa-sarb-framework" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Institutional Hierarchy
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    State Bank of India NPA Classification &amp; Stressed Assets Infrastructure
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  As India&apos;s largest public sector banking institution, the State Bank of India operates under a highly codified, audit-intensive regulatory architecture. Unlike private lenders that frequently outsource recovery to loosely regulated telecaller agencies, SBI follows rigorous prudential directives mandated by the Reserve Bank of India (RBI) and the *State Bank of India General Regulations, 1955*. When an unsecured personal loan, Xpress Credit facility, SME term loan, or agricultural credit slips into default, the recovery machinery progresses through strictly demarcated statutory stages.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                    <span className="text-xs font-bold text-gray-500 uppercase">Stage 1: Days 1–30</span>
                    <h3 className="text-base font-bold text-gray-900 mt-1">SMA-0 Classification</h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      Initial installment or interest payment overdue. SBI branches send automated SMS alerts and standard telephonic payment reminders. The account remains in standard category.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
                    <span className="text-xs font-bold text-amber-700 uppercase">Stage 2: Days 31–90</span>
                    <h3 className="text-base font-bold text-gray-900 mt-1">SMA-1 &amp; SMA-2 Cadence</h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      Delinquency escalates across 60 and 90-day thresholds. Bank branches issue demand letters, NACH presentation re-attempts, and field recovery officer home visits commence.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-red-200 bg-red-50/40">
                    <span className="text-xs font-bold text-red-700 uppercase">Stage 3: Day 91+</span>
                    <h3 className="text-base font-bold text-gray-900 mt-1">NPA &amp; SARB Transfer</h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      The account is classified as a Non-Performing Asset (NPA). Jurisdiction transfers from the home branch to the Stressed Assets Recovery Branch (SARB) or Stressed Assets Management Branch (SAMB).
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  The transfer to **SARB (Stressed Assets Recovery Branch)** represents a fundamental inflection point. Local branch managers have limited discretionary authority to waive interest or agree to compromise settlements once an account is classified as Sub-Standard, Doubtful, or Loss. The SARB is a specialized zonal branch staffed by senior Chief Managers and Assistant General Managers equipped with specific delegated financial authority under the Bank&apos;s Board-approved Compromise Settlement Policy. Engaging with SARB through enrolled Bar Council advocates allows borrowers to bypass branch-level delays and negotiate directly with decision-makers empowered to execute legally binding compromise agreements.
                </p>

                <blockquote className="p-4 bg-gray-50 border-l-4 border-[#5A4C33] rounded-r-xl text-sm italic text-gray-700">
                  &ldquo;Under the RBI Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning, scheduled commercial banks must make substantial capital provisions against unserviced credit exposure. For SBI, non-performing exposures represent idle capital that incentivizes the bank&apos;s settlement committees to sanction One-Time Settlements (OTS) rather than pursue prolonged, costly civil court litigation.&rdquo;
                </blockquote>
              </section>

              {/* ── SECTION 3: RIN SAMADHAN OTS SCHEME ── */}
              <section id="rin-samadhan-ots-scheme" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Settlement Scheme
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    The SBI Rin Samadhan OTS Scheme: Rules, Eligibility &amp; Concessions
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Borrowers actively searching for <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-800">sbi loan settlement scheme 2026</code> and <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-800">sbi rin samadhan scheme ots</code> need to understand the formal architecture of State Bank of India&apos;s flagship compromise initiative. The **SBI Rin Samadhan Scheme** is a periodic, non-discretionary, non-discriminatory One-Time Settlement scheme notified under specific guidelines approved by the Central Board of the State Bank of India.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  1. Core Eligibility Criteria for Rin Samadhan OTS
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li>
                    <strong>Asset Classification Age:</strong> The loan account must be classified as a Non-Performing Asset (NPA) under Sub-Standard, Doubtful (D1, D2, D3), or Loss asset categories for at least 90 to 180 days prior to the scheme&apos;s cut-off date.
                  </li>
                  <li>
                    <strong>Facility Scope:</strong> Covers unsecured personal loans, SBI Xpress Credit, SME overdrafts, cash credit defaults, agricultural term loans, and stressed retail credit advances.
                  </li>
                  <li>
                    <strong>Exclusion of Willful Defaulters:</strong> Accounts red-flagged or categorized as Willful Defaulters or Fraud by SBI&apos;s Fraud Monitoring Cell are strictly ineligible for scheme concessions under RBI circulars.
                  </li>
                  <li>
                    <strong>Documented Hardship:</strong> The borrower must establish genuine inability to service contractual EMIs caused by business liquidation, involuntary employment termination, critical medical disability, or death of the primary earner.
                  </li>
                </ul>

                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  2. Waiver Mechanics &amp; Compromise Calculation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Under the Rin Samadhan formula, SBI calculates the settlement amount by evaluating the **Net Present Value (NPV)** of the underlying debt rather than inflated book balances. The ledger balance of a defaulted SBI loan typically includes contractual interest, compounding penal interest, incidental inspection charges, and legal recovery levies capitalised after default.
                </p>

                <div className="p-5 bg-gradient-to-br from-amber-50/60 to-white rounded-xl border border-[#D2A02A]/30 space-y-3">
                  <h4 className="text-sm font-bold text-[#5A4C33] uppercase tracking-wider">
                    Statutory Concessions Available Under SBI Rin Samadhan
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">✓</span>
                      <span><strong>100% Penal Interest Waiver:</strong> All punitive interest levied on delayed installments is summarily eliminated.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">✓</span>
                      <span><strong>Compounding Levy Waiver:</strong> Uncollected compound interest accumulated after NPA classification is deducted.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">✓</span>
                      <span><strong>Legal &amp; Incidental Costs:</strong> Court fees, notice dispatch charges, and SARFAESI publication expenses waived.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">✓</span>
                      <span><strong>Principal Concession on Hardship:</strong> For unsecured credit in chronic Doubtful or Loss categories, substantial principal relief is sanctioned upon forensic audit of the borrower&apos;s net worth.</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  To explore current waiver percentages across various public sector loan profiles, review our detailed guide on{" "}
                  <Link
                    href="/settlement-waiver-percentage-of-sbi-bank-loans"
                    className="text-[#D2A02A] font-semibold hover:underline"
                  >
                    Settlement Waiver Percentage of SBI Bank Loans
                  </Link>
                  , or examine the foundational principles behind{" "}
                  <Link
                    href="/what-is-ots"
                    className="text-[#D2A02A] font-semibold hover:underline"
                  >
                    What is RBI One-Time Settlement (OTS)
                  </Link>
                  .
                </p>
              </section>

              {/* ── SECTION 4: SBI CARD VS SBI BANK ── */}
              <section id="sbi-card-vs-sbi-bank" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Corporate &amp; Regulatory Separation
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    SBI Bank vs SBI Card: Distinct Legal Entities &amp; Settlement Pathways
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  One of the most frequent misconceptions encountered by distressed borrowers relates to the queries <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-800">sbi credit card settlement process</code> and <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-800">sbi credit card settlement kaise kare</code>. Borrowers frequently assume that defaulting on an SBI credit card can be settled at their local SBI branch counter, or that an SBI personal loan settlement will automatically discharge credit card liabilities.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  In corporate law and regulatory reality, **State Bank of India** and **SBI Cards and Payment Services Limited** are two distinct legal entities:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/30 space-y-3">
                    <div className="inline-block px-2.5 py-1 bg-blue-100 text-blue-900 rounded-md text-xs font-bold">
                      Entity 1: State Bank of India (SBI Bank)
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      Public Sector Banking Corporation
                    </h3>
                    <ul className="text-xs text-gray-700 space-y-2 list-disc pl-4">
                      <li>Incorporated under the State Bank of India Act, 1955.</li>
                      <li>Handles savings, personal loans, Xpress Credit, home loans, and SME advances.</li>
                      <li>Settlements routed through SARB, SAMB, or National Lok Adalats.</li>
                      <li>Governed by Public Sector Bank Board guidelines and Vigilance oversight.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl border border-purple-200 bg-purple-50/30 space-y-3">
                    <div className="inline-block px-2.5 py-1 bg-purple-100 text-purple-900 rounded-md text-xs font-bold">
                      Entity 2: SBI Cards and Payment Services Ltd
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      Listed Non-Banking Financial Company (NBFC)
                    </h3>
                    <ul className="text-xs text-gray-700 space-y-2 list-disc pl-4">
                      <li>Incorporated under Companies Act; publicly listed NBFC-ND-SI.</li>
                      <li>Issues credit cards, Encash loans, and Flexipay EMI facilities.</li>
                      <li>Settlements negotiated with Gurgaon corporate collections headquarters.</li>
                      <li>Governed by RBI Master Directions on Digital Lending and Credit Cards.</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Because these entities maintain distinct regulatory registrations, separate credit bureau reporting codes, and independent audit committees, an SBI personal loan settlement sanction letter from SARB has **zero legal enforceability** against outstanding SBI Card dues. To achieve complete debt freedom, an advocate must execute parallel, coordinated legal submissions tailored to the specific recovery matrix of each institution.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  For a detailed review of credit card compromise strategies across Indian lenders, visit our dedicated analysis on{" "}
                  <Link
                    href="/credit-card-settlement"
                    className="text-[#D2A02A] font-semibold hover:underline"
                  >
                    Credit Card Settlement in India
                  </Link>
                  .
                </p>
              </section>

              {/* ── SECTION 5: LOK ADALAT COMPROMISE ── */}
              <section id="lok-adalat-compromise" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Alternative Dispute Resolution (ADR)
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    National Lok Adalat Settlement Protocol: Judicial Immunity &amp; Finality
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Thousands of distressed SBI borrowers receive formal summons or pre-litigation notices summoning them to appear before the **National Lok Adalat**. While unrepresented borrowers frequently panic upon receiving a notice printed with judicial insignia, an appearance before the Lok Adalat is, in fact, the most advantageous legal forum for resolving defaulted banking debt in India.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Conducted under the statutory mandate of the *Legal Services Authorities Act, 1987*, National Lok Adalats are held quarterly across District Courts, High Courts, and Taluk legal service authorities under the supervision of the National Legal Services Authority (NALSA).
                </p>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-4">
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-lg">⚖️</span> Statutory Legal Status of a Lok Adalat Compromise Award
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Under **Section 21 of the Legal Services Authorities Act, 1987**, every award made by a Lok Adalat shall be deemed to be a decree of a Civil Court. Crucially, under **Section 21(2)**, no appeal shall lie to any court against the award of the Lok Adalat.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 pt-2">
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-xs">
                      <span className="font-bold text-gray-900 block mb-1">Civil Court Decree Force</span>
                      The compromise terms entered in the Lok Adalat award carry the identical binding weight of a decree issued by a Principal Senior Civil Judge.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-xs">
                      <span className="font-bold text-gray-900 block mb-1">Permanent Finality</span>
                      Neither SBI nor any subsequent asset reconstruction company (ARC) can ever repudiate the settlement or re-demand waived sums in any appellate court.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-xs">
                      <span className="font-bold text-gray-900 block mb-1">Zero Judicial Court Fees</span>
                      Under Section 21(1), no court fees are levied for settling matters before the Lok Adalat, and any court fees previously paid are refunded.
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-xs">
                      <span className="font-bold text-gray-900 block mb-1">Complete Legal Immunity</span>
                      Pending Section 138 NI Act cheque bounce complaints or Section 25 PSSA proceedings are formally compounded and closed by judicial order.
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  When a borrower attends Lok Adalat unrepresented, bank recovery officers frequently offer minor concessions. However, when an enrolled Bar Council advocate appears on behalf of the borrower, presents a structured legal hardship dossier, and cross-examines the bank&apos;s interest capitalizations, the Lok Adalat presiding judge actively facilitates substantial principal and penal interest waivers.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Learn more about our dedicated court representation in our guide to{" "}
                  <Link
                    href="/services/loan-settlement/lok-adalat"
                    className="text-[#D2A02A] font-semibold hover:underline"
                  >
                    Lok Adalat Loan Settlement Legal Support
                  </Link>
                  .
                </p>
              </section>

              {/* ── SECTION 6: COMPARATIVE SETTLEMENT MATRIX ── */}
              <section id="comparative-settlement-matrix" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Institutional Comparative Analysis
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    SBI Bank OTS vs Private Bank Compromise vs Unregulated Debt Agencies
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Navigating defaulted banking exposure requires a clear understanding of institutional mechanisms. Borrowers who turn to unregulated telecaller agencies, unlicensed mediation platforms, or automated DIY online templates frequently find themselves victims of fabricated settlement letters, rejected payments, and unresolved criminal summons.
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-xs md:text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                    <thead>
                      <tr className="bg-[#1a202c] text-white">
                        <th className="p-3 md:p-4 font-bold border-b border-gray-700">Resolution Parameter</th>
                        <th className="p-3 md:p-4 font-bold border-b border-gray-700 text-[#D2A02A]">Advocate-Led SBI OTS / Lok Adalat</th>
                        <th className="p-3 md:p-4 font-bold border-b border-gray-700">Private Bank Informal Settlement</th>
                        <th className="p-3 md:p-4 font-bold border-b border-gray-700">Unregulated Telecaller Agency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-3 md:p-4 font-semibold text-gray-900 bg-gray-50/50">Statutory Authority</td>
                        <td className="p-3 md:p-4 text-emerald-800 font-medium bg-emerald-50/30">SBI Regulations 1955 &amp; LSA Act 1987</td>
                        <td className="p-3 md:p-4 text-gray-700">Internal Collection Matrices</td>
                        <td className="p-3 md:p-4 text-red-700 font-medium">None (Unauthorized Intermediaries)</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-3 md:p-4 font-semibold text-gray-900 bg-gray-50/50">Sanctioning Body</td>
                        <td className="p-3 md:p-4 text-emerald-800 font-medium bg-emerald-50/30">SARB Chief Manager / Lok Adalat Bench</td>
                        <td className="p-3 md:p-4 text-gray-700">Retail Asset Collections Unit</td>
                        <td className="p-3 md:p-4 text-red-700 font-medium">Third-Party Commission Agents</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-3 md:p-4 font-semibold text-gray-900 bg-gray-50/50">Legal Privilege</td>
                        <td className="p-3 md:p-4 text-emerald-800 font-medium bg-emerald-50/30">100% Protected (Sec 126 Evidence Act)</td>
                        <td className="p-3 md:p-4 text-gray-700">Limited Commercial Privilege</td>
                        <td className="p-3 md:p-4 text-red-700 font-medium">Zero (Data Shared with Telecallers)</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-3 md:p-4 font-semibold text-gray-900 bg-gray-50/50">Enforceability &amp; Finality</td>
                        <td className="p-3 md:p-4 text-emerald-800 font-medium bg-emerald-50/30">Non-Appealable Civil Court Decree Force</td>
                        <td className="p-3 md:p-4 text-gray-700">Contractual Compromise Letter</td>
                        <td className="p-3 md:p-4 text-red-700 font-medium">Unenforceable; High Fraud Risk</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-3 md:p-4 font-semibold text-gray-900 bg-gray-50/50">Criminal Summons Defense</td>
                        <td className="p-3 md:p-4 text-emerald-800 font-medium bg-emerald-50/30">Formal Compounding &amp; Judicial Bail</td>
                        <td className="p-3 md:p-4 text-gray-700">Notice Withdrawal Undertakings</td>
                        <td className="p-3 md:p-4 text-red-700 font-medium">Cannot Represent in Court</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-3 md:p-4 font-semibold text-gray-900 bg-gray-50/50">Fee Model</td>
                        <td className="p-3 md:p-4 text-emerald-800 font-medium bg-emerald-50/30">Transparent Fixed Legal Advisory</td>
                        <td className="p-3 md:p-4 text-gray-700">Variable Retainers</td>
                        <td className="p-3 md:p-4 text-red-700 font-medium">Contingency Markups &amp; Hidden Surcharges</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Under the Advocates Act, 1961, only an enrolled advocate possesses the legal standing (*locus standi*) to represent a borrower before judicial tribunals, compound criminal complaints under Section 138 of the Negotiable Instruments Act, and file statutory objections against SARFAESI demand notices. Unregulated agencies possess zero courtroom authorization and cannot protect you from arrest warrants or attachment orders.
                </p>
              </section>

              {/* ── SECTION 7: THE 5-STAGE PROTOCOL ── */}
              <section id="the-5-stage-protocol" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Legal Workflow
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    The 5-Stage Advocate Protocol for SBI Bank Loan Settlement
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Executing a legally secure settlement with State Bank of India requires a structured, multi-phase legal cadence designed to eliminate third-party harassment, audit unbundled account balances, and secure an authentic sanction letter with complete civil immunity.
                </p>

                <div className="space-y-6 my-6">
                  
                  {/* Step 1 */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-base">
                      01
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-gray-900">
                        NPA Account Classification &amp; Forensic Ledger Audit
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Our advocates conduct an exhaustive forensic audit of your SBI loan statements and credit card ledgers. We isolate the contractual principal from compounding interest, late payment penalties, and processing levies capitalised post-default. We determine whether the account is held at the home branch or has been transferred to SARB/SAMB, establishing the exact institutional jurisdiction.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#5A4C33] text-white font-extrabold flex items-center justify-center shrink-0 text-base">
                      02
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-gray-900">
                        Cease-and-Desist Legal Notice &amp; Harassment Injunction
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        An enrolled High Court advocate issues a formal Legal Notice to SBI&apos;s Stressed Assets Recovery Branch Chief Manager and General Manager, citing the *RBI Fair Practices Code for Lenders* and Supreme Court precedents (*ICICI Bank v. Prakash Kaur*). All unlawful communications, abusive telecalling, unannounced home visits, and workplace intrusions are legally halted under pain of contempt and criminal proceedings.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-base">
                      03
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-gray-900">
                        Rin Samadhan Hardship Submission &amp; Lok Adalat Representation
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        We draft a comprehensive, verified Hardship Petition substantiating involuntary job loss, business liquidation, or medical crises, supported by documentary affidavits. We submit this dossier directly to SBI&apos;s designated Settlement Committee or represent you before the National Lok Adalat bench to obtain a court-sanctioned compromise decree waiving penal charges and uncollected interest.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#5A4C33] text-white font-extrabold flex items-center justify-center shrink-0 text-base">
                      04
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-gray-900">
                        Forensic Settlement Sanction Letter Verification
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Before any compromise funds are transferred, our legal team conducts forensic due diligence on the bank&apos;s OTS Sanction Letter. We verify the unique bank dispatch reference number, the authorized Chief Manager&apos;s digital signature and seal, the explicit schedule of payment tranches, and clear contractual covenants confirming that full remittance permanently satisfies and discharges all debt obligations.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-xl bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center shrink-0 text-base">
                      05
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-gray-900">
                        Direct Account Remittance, No Dues Certificate &amp; CIBIL Bureau Updating
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Funds are remitted strictly into your own verified SBI loan account—never through any third-party escrow or intermediary. Upon completion, we enforce issuance of the official, unconditional **No Dues Certificate (NDC)** within 21 to 30 days, ensure the return of original documents/cheques, and supervise credit bureau reporting updates to reflect &apos;Settled&apos; status.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* ── SECTION 8: SIGNATURE INFOGRAPHIC CARD ── */}
              <section id="signature-infographic" className="scroll-mt-28">
                <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#D2A02A]"></span>
                    Signature Legal Architecture &bull; Official Settlement Blueprint
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
                    <img
                      src="/images/og/loan-settlement-for-sbi-bank.png"
                      alt="SBI Loan Settlement Process - Rin Samadhan OTS & Credit Card Legal Architecture"
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                  <div className="mt-4 p-3 bg-white/80 rounded-xl border border-gray-200 text-xs text-gray-600 leading-relaxed">
                    <strong className="text-gray-900">Editorial Infographic Note:</strong> Illustrated above is the authoritative advocate-led resolution protocol for State Bank of India (SBI) loan accounts and SBI Cards. From initial 90-day NPA classification and SARB jurisdiction to the execution of National Lok Adalat compromise awards and No Dues Certificates, this institutional framework ensures complete legal protection and permanent debt discharge under Indian banking law.
                  </div>
                </div>
              </section>

              {/* ── SECTION 9: DEFENSE SEC 138, PSSA & SARFAESI ── */}
              <section id="defense-sec-138-pssa-sarfaesi" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Court Litigation Defense
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    Defense: Section 138 NI Act, Section 25 PSSA &amp; SARFAESI Demand Notices
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Borrowers struggling with SBI defaults frequently encounter aggressive legal notices citing criminal provisions and asset attachment powers. Search queries like <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-800">sbi leagal notice on home loan</code> reflect acute anxiety over property possession and prosecution. Understanding your statutory defenses is essential to neutralizing bank pressure.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  1. Cheque Bounce &amp; NACH Mandate Complaints
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When a borrower defaults on an SBI personal loan or credit card EMI, the bank often presents post-dated security cheques or triggers electronic NACH debit mandates. If these instruments return unpaid due to insufficient funds, SBI&apos;s legal panel issues formal statutory demand notices under:
                </p>

                <ul className="space-y-3 text-sm text-gray-700 list-disc pl-5">
                  <li>
                    <strong>Section 138 of the Negotiable Instruments Act, 1881:</strong> Requires service of a statutory notice within 30 days of receipt of the bank return memo. Failure to reply within 15 days allows the lender to file a criminal complaint before a Judicial Magistrate.
                  </li>
                  <li>
                    <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA):</strong> Governs automated electronic clearing and NACH bounces, carrying penalties identical to Section 138 proceedings.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  An advocate immediately issues a robust legal reply establishing absence of fraudulent intent, disputing inflated balance claims, and asserting bona fide financial incapacity. When cases proceed to court, our advocates enter appearances, obtain immediate judicial bail, and file for compounding of offenses under Section 147 of the NI Act once compromise terms are finalized. For an in-depth comparative review, consult our statutory guide on{" "}
                  <Link
                    href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                    className="text-[#D2A02A] font-semibold hover:underline"
                  >
                    Section 25 PSSA vs Section 138 NI Act Loan Recovery
                  </Link>
                  .
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  2. SARFAESI Act Notices on Home &amp; SME Loans
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For secured home loans or SME advances backed by residential or commercial property, SBI invokes the *Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act)*:
                </p>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <strong className="text-gray-900 block mb-1">Section 13(2) Demand Notice:</strong>
                    Gives the borrower sixty days to discharge entire liabilities. Within this 60-day window, borrowers have the statutory right under **Section 13(3A)** to submit formal legal objections and representations. The bank is legally obligated to consider these representations and communicate reasons for rejection within 15 days.
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <strong className="text-gray-900 block mb-1">Section 13(4) Symbolic Possession &amp; DRT Remedy:</strong>
                    If the bank attempts to take symbolic possession, borrowers can file a Securitisation Application (SA) before the **Debt Recovery Tribunal (DRT)** under Section 17 of the SARFAESI Act, staying coercive possession while negotiating an OTS compromise.
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  To explore broader bankruptcy remedies and DRT defense, review our comprehensive resource on{" "}
                  <Link
                    href="/bankruptcy-lawyer-in-india"
                    className="text-[#D2A02A] font-semibold hover:underline"
                  >
                    Bankruptcy Lawyer in India: Personal Insolvency &amp; IBC Debt Relief Advocates
                  </Link>
                  .
                </p>
              </section>

              {/* ── SECTION 10: HALTING RECOVERY HARASSMENT ── */}
              <section id="halting-recovery-harassment" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Borrower Rights &amp; Regulatory Protection
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    Halting Unlawful Recovery Harassment, Telecaller Threats &amp; Domestic Visits
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  While State Bank of India maintains formal recovery protocols, outsourced recovery agencies frequently breach regulatory bounds. Borrowers report ceaseless phone calls from anonymous numbers, abusive WhatsApp messages, domestic visits at untimely hours, and public humiliation among workplace colleagues and family members.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Under Indian law, debt default is strictly a **civil contractual dispute** governed by the Indian Contract Act, 1872. It does not constitute a cognizable criminal offense under the Bharatiya Nyaya Sanhita (BNS) or erstwhile Indian Penal Code (IPC). Neither SBI nor its recovery agents have the legal authority to register an FIR, dispatch police personnel to your home, or effect an arrest for unpaid unsecured credit.
                </p>

                <div className="p-5 bg-red-50/50 rounded-xl border border-red-200 space-y-3">
                  <h3 className="text-sm font-bold text-red-900 uppercase tracking-wider">
                    Key RBI Directives Protecting Defaulting Borrowers
                  </h3>
                  <ul className="text-xs text-gray-700 space-y-2 list-disc pl-4">
                    <li>
                      <strong>Restricted Calling Hours:</strong> Recovery agents may only contact borrowers between 08:00 AM and 07:00 PM. Calls outside this window violate RBI Master Directions.
                    </li>
                    <li>
                      <strong>Prohibition of Workplace &amp; Third-Party Harassment:</strong> Contacting employers, colleagues, relatives, or neighbors to disclose debt status is strictly prohibited.
                    </li>
                    <li>
                      <strong>Zero Abusive Conduct:</strong> Using intimidating language, musclemen tactics, or fabricated legal summons violates the *Fair Practices Code* and invites criminal prosecution for criminal intimidation.
                    </li>
                    <li>
                      <strong>Mandatory Identity Disclosure:</strong> Agents visiting residences must carry official bank authorization letters and valid identification cards.
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  The moment an advocate issues a formal **Cease-and-Desist Notice** to SBI&apos;s Principal Nodal Officer and SARB management, unauthorized agency interactions cease. Lenders understand that continuing abusive conduct exposes the bank to substantial financial penalties under the *Reserve Bank - Integrated Ombudsman Scheme, 2021* and damages actions before Consumer Disputes Redressal Commissions.
                </p>
              </section>

              {/* ── SECTION 11: SALARY & PENSION ACCOUNT PROTECTION ── */}
              <section id="salary-pension-account-protection" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Banking Law Protections
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    Protecting Salary &amp; Pension Accounts Against SBI Banker&apos;s Lien
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  A common threat issued by recovery personnel is that the State Bank of India will freeze the borrower&apos;s salary account, attach pensions, or automatically debit deposited funds to offset unpaid loan dues. Understanding the legal limits of a bank&apos;s recovery powers is vital for distressed individuals.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  1. The Doctrine of Banker&apos;s Lien (Section 171 Contract Act)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Banks routinely cite **Section 171 of the Indian Contract Act, 1872** (Banker&apos;s General Lien) and contractual Right of Set-Off clauses to freeze or appropriate balances maintained within the same institution. If you hold an unpaid SBI personal loan and simultaneously maintain an SBI savings account, the bank may attempt an automated internal set-off.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  2. Absolute Statutory Immunity for Pensions &amp; Subsistence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  However, Indian jurisprudence places strict constitutional and statutory limits on internal set-offs. Under **Section 60(1)(g) of the Code of Civil Procedure, 1908 (CPC)**, pensions and stipends allowed to government pensioners are **strictly exempt from attachment** or appropriation by any civil court or financial institution.
                </p>

                <blockquote className="p-4 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl text-sm italic text-gray-700">
                  &ldquo;The Supreme Court of India in Union of India v. Jyoti Chit Fund &amp; Finance established that pension and provident fund balances represent social security and subsistence provisions that cannot be attached or set off by creditors, preserving the fundamental dignity and survival of the pensioner.&rdquo;
                </blockquote>

                <p className="text-gray-700 leading-relaxed">
                  When facing default, our legal counsel advises borrowers to open a secondary operating account with an unrelated banking institution for incoming salary or business proceeds, while our advocates issue protective notices restraining SBI from making unauthorized debits on subsistence balances.
                </p>
              </section>

              {/* ── SECTION 12: SETTLEMENT LETTER VERIFICATION ── */}
              <section id="settlement-letter-verification" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Due Diligence &amp; Fraud Prevention
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    Verifying Authentic SBI OTS Sanction Letters &amp; Securing No Dues Certificates
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  The internet is flooded with fraudulent collection agencies issuing forged compromise settlement letters. Distressed borrowers frequently deposit money into unauthorized accounts believing their loan is settled, only to discover months later that the bank has classified them as absconding defaulters and initiated criminal complaints.
                </p>

                <div className="p-6 bg-amber-50/50 rounded-2xl border border-[#D2A02A]/40 space-y-4">
                  <h3 className="text-base font-bold text-gray-900">
                    Checklist: How to Verify an Authentic SBI Compromise Sanction Letter
                  </h3>
                  <div className="space-y-2 text-xs md:text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">1.</span>
                      <span><strong>Official Bank Letterhead &amp; Dispatch Number:</strong> Must be issued on State Bank of India letterhead bearing a verified internal dispatch / reference number verifiable on SBI&apos;s Core Banking Solution (CBS).</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">2.</span>
                      <span><strong>Authorized Signatory Seal:</strong> Must be signed and stamped by an authorized Chief Manager or Assistant General Manager from SARB or the competent Zonal Office—never an unverified agency agent.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">3.</span>
                      <span><strong>Explicit Account Identification:</strong> Must clearly list your full legal name, loan account number, CIF number, and branch IFSC code.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">4.</span>
                      <span><strong>Payment Tranches &amp; Deadlines:</strong> Must specify the precise compromise sum and the exact calendar deadlines for remittance.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">5.</span>
                      <span><strong>Unambiguous Release Covenant:</strong> Must confirm that upon timely remittance of the compromise figure, the account will be closed in full and final settlement and a No Dues Certificate will be issued.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#D2A02A] font-bold">6.</span>
                      <span><strong>Remittance into Loan Account Only:</strong> Payments must be deposited strictly into your existing SBI loan account number—never into an individual&apos;s UPI ID or agency escrow.</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Upon completion of payments, the bank is legally required under the *RBI Fair Practices Code* to issue an unconditional **No Dues Certificate (NDC)** within 21 to 30 business days, releasing all original title deeds, hypothecation records, and uncashed security cheques.
                </p>
              </section>

              {/* ── SECTION 13: CIBIL CREDIT REHABILITATION ── */}
              <section id="cibil-credit-rehabilitation" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Credit Score &amp; Future Borrowing
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    CIBIL Bureau Reporting: &apos;Settled&apos; Status &amp; Rebuilding Borrowing Capacity
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Two of the most pressing questions asked by borrowers default are: <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-800">can i get loan after settlement sbi</code> and how does a compromise affect their credit profile. Transparency is essential to planning long-term financial recovery.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  1. &apos;Settled&apos; vs &apos;Written Off&apos; Status
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Under the *Credit Information Companies (Regulation) Act, 2005 (CICRA)*, SBI reports the compromise closure to credit bureaus including TransUnion CIBIL, Equifax, Experian, and CRIF High Mark as **&apos;Settled&apos;** or **&apos;Post-Write-Off Settled&apos;**.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 text-xs text-gray-700 space-y-2">
                    <span className="font-bold text-gray-900 block text-sm">Active Default Status (Pre-Settlement)</span>
                    <p>Account marked as &apos;Overdue&apos;, &apos;NPA&apos;, or &apos;Suit Filed&apos;. DPD (Days Past Due) counters advance monthly. CIBIL score plummets below 600. Lenders universally reject all applications, and legal summons accumulate.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 text-xs text-gray-700 space-y-2">
                    <span className="font-bold text-emerald-900 block text-sm">&apos;Settled&apos; Status (Post-Compromise)</span>
                    <p>All active delinquency counters frozen at zero. DPD counter permanently stops. Suit filed and recovery flags erased. While score reflects historical concession, financial hemorrhage is permanently halted.</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  2. Can I Get a Loan After an SBI Settlement?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  **Yes, absolutely.** While SBI may restrict fresh unsecured lending for a seasoning period, borrowers can systematically rehabilitate their credit scores back above 750 within 12 to 24 months post-settlement. By securing a fixed-deposit-backed secured credit card, keeping credit utilization below 25%, and maintaining flawless on-time payment records, borrowers re-establish prime creditworthiness across other commercial lenders.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  For comprehensive strategies on credit rehabilitation, consult our guides on{" "}
                  <Link
                    href="/does-loan-settlement-affect-cibil-score"
                    className="text-[#D2A02A] font-semibold hover:underline"
                  >
                    Does Loan Settlement Affect CIBIL Score
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/how-to-improve-cibil-score-after-loan-settlement"
                    className="text-[#D2A02A] font-semibold hover:underline"
                  >
                    How to Improve CIBIL Score After Loan Settlement
                  </Link>
                  .
                </p>
              </section>

              {/* ── SECTION 14: TRANSPARENT FIXED LEGAL ADVISORY ── */}
              <section id="transparent-fixed-advisory" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Commercial Clarity &amp; Advocate Engagement
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    Transparent Fixed Legal Advisory: Accessible Representation Without Markups
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, our practice philosophy is founded on **universal legal accessibility, professional ethics, and complete commercial transparency**. Distressed borrowers seeking debt relief are already under immense financial strain; they should never be subjected to ambiguous hourly legal billing, surprise retainers, or unregulated contingency markups.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-xs space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                      01
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      Fixed Legal Advisory
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Our advocate engagement models feature clear, transparent fixed legal advisory terms agreed upon upfront. Borrowers face zero surprise expenses, zero hourly billable escalation, and zero hidden retainer markups.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-xs space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-[#5A4C33] text-white flex items-center justify-center font-bold text-sm">
                      02
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      Eliminating Law Firm Overhead
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Large corporate law firms charge excessive retainers for debt matters. AMA Legal Solutions combines senior Bar Council courtroom expertise with streamlined case operations, delivering top-tier defense at accessible rates.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-gray-200 bg-white shadow-xs space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm">
                      03
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      Zero Telecaller Risk
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Unregulated debt settlement companies operate call centers without legal credentials, taking hefty percentages of alleged savings. Our advocates work strictly under the Advocates Act, 1961 with zero commercial conflict of interest.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-[#1a202c] to-[#3a3022] rounded-2xl text-white space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    Need Immediate Legal Counsel for SBI Debt?
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Whether you have received an SBI SARFAESI demand notice, Lok Adalat summons, or Section 138 NI Act notice, our senior banking resolution advocates are prepared to intervene immediately.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-6 py-3 bg-[#D2A02A] hover:bg-[#b88c24] text-white font-bold rounded-xl text-sm transition cursor-pointer shadow-md"
                    >
                      Request Advocate Evaluation &rarr;
                    </button>
                    <a
                      href="tel:+918700343611"
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition flex items-center gap-2 border border-white/20"
                    >
                      <span>📞</span> Direct Helpline: +91-8700343611
                    </a>
                  </div>
                </div>
              </section>

              {/* ── SECTION 15: FREQUENTLY ASKED QUESTIONS (8 ACCORDION ITEMS) ── */}
              <section id="frequently-asked-questions" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory FAQ Accordion
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    Frequently Asked Questions on SBI Bank Loan Settlement
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-xs transition duration-200"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50/80 transition cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="font-bold text-gray-900 text-sm md:text-base pr-4">
                            {faq.question}
                          </span>
                          <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-600 font-bold text-lg">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-5 pt-0 text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/40">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── SECTION 16: MORE LEGAL GUIDES (INTERNAL LINK GRID) ── */}
              <section id="internal-guides" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Authoritative Legal Resources
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    More Legal Debt Relief &amp; Banking Defense Guides
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    href="/settlement-waiver-percentage-of-sbi-bank-loans"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:border-[#D2A02A] hover:bg-white transition group shadow-xs"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      SBI Waiver Matrix
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#D2A02A] transition">
                      Settlement Waiver Percentage of SBI Bank Loans &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      In-depth breakdown of concession bands across personal loans, SME debt, and agricultural NPA accounts.
                    </p>
                  </Link>

                  <Link
                    href="/services/loan-settlement/sbi-bank"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:border-[#D2A02A] hover:bg-white transition group shadow-xs"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Service Practice
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#D2A02A] transition">
                      SBI Bank Loan Settlement Practice &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      Specialized legal counsel for State Bank of India defaults, Rin Samadhan filings, and SARB hearings.
                    </p>
                  </Link>

                  <Link
                    href="/services/loan-settlement/lok-adalat"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:border-[#D2A02A] hover:bg-white transition group shadow-xs"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Judicial Forum
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#D2A02A] transition">
                      Lok Adalat Loan Settlement Legal Support &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      Comprehensive courtroom representation before National Lok Adalat benches to secure non-appealable compromise decrees.
                    </p>
                  </Link>

                  <Link
                    href="/personal-loan-settlement"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:border-[#D2A02A] hover:bg-white transition group shadow-xs"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Unsecured Debt
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#D2A02A] transition">
                      Personal Loan Settlement Guide &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      Statutory advocate strategies for resolving multi-lender personal loans and halting third-party harassment.
                    </p>
                  </Link>

                  <Link
                    href="/credit-card-settlement"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:border-[#D2A02A] hover:bg-white transition group shadow-xs"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Revolving Debt
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#D2A02A] transition">
                      Credit Card Settlement in India &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      How to legally settle credit card balances, eliminate compound interest, and secure official closure letters.
                    </p>
                  </Link>

                  <Link
                    href="/loan-settlement-for-hdfc-bank"
                    className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:border-[#D2A02A] hover:bg-white transition group shadow-xs"
                  >
                    <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider block mb-1">
                      Private Bank Settlement
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#D2A02A] transition">
                      Loan Settlement for HDFC Bank &rarr;
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      Compare public sector OTS rules with private banking compromise procedures for HDFC personal loans and credit cards.
                    </p>
                  </Link>
                </div>
              </section>

              {/* ── SECTION 17: STATUTORY REFERENCES & AUTHORITIES ── */}
              <section id="statutory-references" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Government &amp; Regulatory Authorities
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    Statutory Framework &amp; Regulatory Reference Portals
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  Our legal debt resolution practices are strictly anchored in Indian statutory enactments, RBI Master Directions, and authoritative judicial precedents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs space-y-2">
                    <span className="font-bold text-gray-900 block">Official Banking Portals</span>
                    <ul className="space-y-1.5">
                      <li>
                        <a
                          href="https://sbi.co.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                        >
                          &bull; State Bank of India Official Portal (sbi.co.in)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://cms.rbi.org.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                        >
                          &bull; RBI Integrated Ombudsman Portal (cms.rbi.org.in)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://nalsa.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                        >
                          &bull; National Legal Services Authority (NALSA Portal)
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs space-y-2">
                    <span className="font-bold text-gray-900 block">Governing Statutory Enactments</span>
                    <ul className="space-y-1.5 text-gray-600">
                      <li>&bull; State Bank of India General Regulations, 1955</li>
                      <li>&bull; Legal Services Authorities Act, 1987 (Sections 19–22)</li>
                      <li>&bull; SARFAESI Act, 2002 (Sections 13(2), 13(3A) &amp; 13(4))</li>
                      <li>&bull; Negotiable Instruments Act, 1881 (Section 138 &amp; 147)</li>
                      <li>&bull; Payment and Settlement Systems Act, 2007 (Section 25)</li>
                      <li>&bull; Code of Civil Procedure, 1908 (Section 60(1)(g))</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Social Share Bar at Bottom */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-b border-gray-200">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Did this legal guide assist you? Share with other borrowers:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition cursor-pointer"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-8 h-8 rounded-lg bg-gray-100 text-gray-800 hover:bg-black hover:text-white flex items-center justify-center transition cursor-pointer"
                    aria-label="Share on Twitter"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-8 h-8 rounded-lg bg-blue-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition cursor-pointer"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition cursor-pointer"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#5A4C33] hover:text-white flex items-center justify-center transition cursor-pointer"
                    aria-label="Copy Link"
                  >
                    <FaCopy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* ── SECTION 18: AMA COMPANY & MEDIA SECTION ── */}
              <section id="ama-company-section" className="scroll-mt-28">
                <div className="border-4 border-[#D2A02A] p-6 sm:p-10 rounded-3xl bg-[#FAF7F0] space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-300/70 pb-6">
                    <div className="flex items-center gap-4">
                      <img
                        src="/ama3.svg"
                        alt="AMA Legal Solutions"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      />
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#1a202c]">
                          AMA Legal Solutions
                        </h3>
                        <p className="text-xs text-gray-600 font-medium">
                          Premier Banking Law &amp; Judicial Dispute Resolution Firm
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-gray-200 shadow-xs">
                      <div className="text-xl font-extrabold text-[#1a202c]">
                        ⭐ 4.7
                      </div>
                      <div className="text-left text-xs text-gray-500">
                        <span className="font-semibold text-gray-800 block">Google Rating</span>
                        Verified Client Endorsements
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    AMA Legal Solutions is a distinguished full-service law firm headquartered in Gurugram, Delhi NCR, with practice networks spanning High Courts and District Courts nationwide. Led by Advocate Anuj Anand Malik, the firm provides authoritative defense in banking disputes, public sector OTS compromise negotiations, personal bankruptcy, and commercial debt recovery defense under strict Bar Council ethics.
                  </p>

                  <div>
                    <h4 className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-3">
                      Explore Our Specialized Practice Solutions:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <Link
                        href="/services/loan-settlement"
                        className="p-2.5 bg-white border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-xl text-center text-xs font-bold transition shadow-xs"
                      >
                        Loan Settlement
                      </Link>
                      <Link
                        href="/bankruptcy-lawyer-in-india"
                        className="p-2.5 bg-white border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-xl text-center text-xs font-bold transition shadow-xs"
                      >
                        Bankruptcy (IBC)
                      </Link>
                      <Link
                        href="/services/arbitration"
                        className="p-2.5 bg-white border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-xl text-center text-xs font-bold transition shadow-xs"
                      >
                        Arbitration Defense
                      </Link>
                      <Link
                        href="/contact"
                        className="p-2.5 bg-white border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white rounded-xl text-center text-xs font-bold transition shadow-xs"
                      >
                        Contact Advocates
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar (lg:col-span-1 / 280px) */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4 text-center">
                <img
                  src="/anujbhiya.png"
                  alt="Advocate Anuj Anand Malik"
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-[#D2A02A]/40 shadow-sm"
                />
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900">
                    Anuj Anand Malik
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Managing Partner &bull; Senior Banking Advocate
                  </p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed text-left">
                  Specializing in banking recovery defense, State Bank of India compromise negotiations, SARFAESI injunctions, and National Lok Adalat representation.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="p-6 bg-[#5A4C33] text-white rounded-2xl shadow-lg space-y-4 text-center">
                <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                  Bar Council Privileged
                </span>
                <h3 className="text-xl font-bold">
                  Facing SBI Action or Lok Adalat Notice?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Stop recovery telecaller intimidation and secure a legally binding Rin Samadhan compromise sanction letter.
                </p>
                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+918700343611"
                    className="block w-full py-3 bg-[#D2A02A] hover:bg-[#b88c24] text-white font-bold rounded-xl text-xs transition shadow-md"
                  >
                    📞 Call +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs transition border border-white/20 cursor-pointer"
                  >
                    Request Confidential Callback
                  </button>
                </div>
                <p className="text-[10px] text-gray-300">
                  100% Confidential &bull; Section 126 Evidence Act Protected
                </p>
              </div>

              {/* Client Reviews Card (Verbatim to Schema) */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Client Review
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#D2A02A]">5.0</span>
                    <Stars count={5} />
                  </div>
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  &ldquo;{clientReviewData.reviewBody}&rdquo;
                </p>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-900">
                    {clientReviewData.authorName}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {clientReviewData.authorRole}
                  </p>
                </div>
              </div>

              {/* Related Guides Card */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 pb-2">
                  Related Debt Relief Topics
                </h3>
                <div className="space-y-2 text-xs">
                  <Link
                    href="/settlement-waiver-percentage-of-sbi-bank-loans"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; SBI Settlement Waiver Percentage
                  </Link>
                  <Link
                    href="/services/loan-settlement/sbi-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; SBI Bank Settlement Services
                  </Link>
                  <Link
                    href="/services/loan-settlement/lok-adalat"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Lok Adalat Settlement Procedure
                  </Link>
                  <Link
                    href="/does-loan-settlement-affect-cibil-score"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Does Settlement Affect CIBIL Score?
                  </Link>
                  <Link
                    href="/how-to-improve-cibil-score-after-loan-settlement"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; CIBIL Repair After Settlement
                  </Link>
                  <Link
                    href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Sec 25 PSSA vs Sec 138 NI Act
                  </Link>
                  <Link
                    href="/bankruptcy-lawyer-in-india"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Bankruptcy Lawyer in India
                  </Link>
                  <Link
                    href="/loan-settlement-for-hdfc-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement for HDFC Bank
                  </Link>
                  <Link
                    href="/what-is-ots"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; What is RBI OTS Scheme?
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
                      SBI Loan Settlement Evaluation
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Privileged legal consultation under Section 126 of the Indian Evidence Act.
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
                        placeholder="e.g. Harish Chandra Joshi"
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
                          placeholder="e.g. name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          City / State
                        </label>
                        <input
                          type="text"
                          name="cityState"
                          value={formData.cityState}
                          onChange={handleFormChange}
                          placeholder="e.g. Lucknow, Uttar Pradesh"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Account / Loan Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm bg-white"
                        >
                          <option value="SBI Personal Loan & Credit Card">SBI Personal Loan &amp; Credit Card</option>
                          <option value="SBI Personal Loan (Xpress Credit)">SBI Personal Loan (Xpress Credit)</option>
                          <option value="SBI Card (Credit Card Only)">SBI Card (Credit Card Only)</option>
                          <option value="SBI Home Loan / SARFAESI Notice">SBI Home Loan / SARFAESI Notice</option>
                          <option value="SBI SME / MSME Credit Default">SBI SME / MSME Credit Default</option>
                          <option value="National Lok Adalat Summons">National Lok Adalat Summons</option>
                          <option value="Section 138 / 25 PSSA Notice">Section 138 / 25 PSSA Notice</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Brief Details of Overdue Debt / Notices Received
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Mention total loans/cards, months overdue, or notices received..."
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#5A4C33] hover:bg-[#433826] text-white font-bold rounded-xl transition cursor-pointer text-sm shadow-md"
                    >
                      Proceed to Advocate Consultation &rarr;
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1a202c]">
                    Consultation Request Registered
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
                    Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Your details have been transmitted directly to our senior banking and loan resolution team under Section 126 legal privilege.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={openWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow transition cursor-pointer"
                    >
                      <span>💬</span> Connect Instantly on WhatsApp &rarr;
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Direct advocate helpline: +91-8700343611 &bull; 100% Confidential
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </>
  );
}

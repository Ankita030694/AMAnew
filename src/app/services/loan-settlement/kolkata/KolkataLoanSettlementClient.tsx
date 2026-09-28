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
const PAGE_SLUG = "/services/loan-settlement/kolkata";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/services/loan-settlement/kolkata.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-28";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "How do loan settlement advocates in Kolkata negotiate with private banks?",
    answer:
      "Enrolled High Court advocates negotiate directly with the Zonal Stressed Assets Recovery Branches (SARB) and Retail Asset Operations teams of major private lenders (such as HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank) located across Kolkata, including Shakespeare Sarani, Salt Lake Sector V, and BBD Bagh. By presenting an evidence-backed legal brief detailing documented involuntary financial hardship, advocates bypass aggressive outsourced telecallers and invoke RBI compromise framework directives to strip away 100% of accumulated penal interest, late fees, and overdue penalties. This structured legal negotiation culminates in a formal, system-generated One-Time Settlement (OTS) sanction letter granting substantial principal debt relief.",
  },
  {
    id: "faq-2",
    question: "Can recovery agents visit my residence in Salt Lake, New Town, or Howrah without notice?",
    answer:
      "No recovery agent or bank representative has the statutory authority to make unannounced visits to a borrower's residence or workplace in Salt Lake, New Town, Howrah, or any Kolkata locality. Under the RBI Master Directions on Recovery Agents and Fair Practices Code (August 2022 & April 2023), lenders are strictly prohibited from visiting without prior written appointment, contacting borrowers before 8:00 AM or after 7:00 PM, intimidating family members, or entering residential premises unlawfully. In the event of unauthorized trespass or intimidation, an advocate immediately issues an emergency Cease-and-Desist Legal Notice citing criminal intimidation under Section 351 of the Bharatiya Nyaya Sanhita (BNS) and lodges formal complaints with the Kolkata Police Commissionerate and the RBI Integrated Ombudsman.",
  },
  {
    id: "faq-3",
    question: "How are loan dispute cases resolved in the Bankshall and Alipore District Courts?",
    answer:
      "Loan dispute cases in Kolkata typically manifest as summary civil recovery suits under Order XXXVII of the Code of Civil Procedure (CPC) or criminal complaint proceedings under Section 138 of the Negotiable Instruments Act and Section 25 of the Payment and Settlement Systems Act (PSSA). In Bankshall Court (Kolkata City Civil & Sessions Courts) and Alipore District Court (South 24 Parganas), enrolled defense advocates enter formal appearance (vakalatnama), challenge procedural service defects, and file leave to defend or bail applications to insulate the borrower from coercive warrants. Simultaneously, legal counsel petitions the court to refer the civil or compoundable criminal proceedings to the National Lok Adalat for an amicable, court-sanctioned compromise decree.",
  },
  {
    id: "faq-4",
    question: "What is the process for settling an unsecured personal loan through the Kolkata Lok Adalat?",
    answer:
      "Settling a personal loan or credit card default through the Kolkata Lok Adalat is governed by Sections 19 to 21 of the Legal Services Authorities Act, 1987, administered by the Calcutta High Court Legal Services Committee and District Legal Services Authorities (DLSA). Either the lending institution or the borrower via legal counsel submits a pre-litigation or pending-dispute compromise application requesting referral to the upcoming quarterly National Lok Adalat bench. During the session, the judicial officers and appointed conciliators review the borrower's hardship documentation and facilitate a binding compromise agreement, culminating in an award that carries the conclusive force of a civil court decree with zero appealability and a refund of any paid court fees.",
  },
  {
    id: "faq-5",
    question: "How does the West Bengal Money-Lenders Act protect borrowers against predatory interest?",
    answer:
      "The West Bengal Money-Lenders Act, 1940 provides robust statutory safeguards against unlicensed private moneylenders, digital predatory lending apps, and exorbitant financing rates across Kolkata and West Bengal. Under Section 8 and Section 30 of the Act, any non-compliant entity lending capital without a valid moneylending license or charging usurious interest rates exceeding statutory thresholds is legally barred from enforcing the loan agreement through any civil court in West Bengal. Advocate intervention invokes these provisions to challenge fabricated late charges and inflated principal ledgers, providing borrowers with absolute legal defense against extortionate recovery tactics.",
  },
  {
    id: "faq-6",
    question: "What documents are required by Kolkata advocates to initiate debt compromise talks?",
    answer:
      "To initiate formal loan compromise negotiations with bank legal committees, Kolkata advocates require the original loan sanction agreement, recent loan account or credit card statements, and all written demand notices received from the lender or its collection agencies. Additionally, borrowers must furnish verifiable hardship documentation, such as medical treatment summaries, hospital discharge certificates, formal employment termination letters, salary reduction slips, or business GST filing declines. These records form the factual foundation of the advocate's legal hardship dossier, establishing that the default is bona fide rather than willful, which is mandatory under RBI settlement guidelines.",
  },
  {
    id: "faq-7",
    question: "What steps should a borrower take if recovery telecallers threaten police action in Kolkata?",
    answer:
      "When recovery telecallers or agency representatives threaten arrest or local police intervention in Kolkata, borrowers must recognize that loan default on unsecured personal credit is strictly a civil contractual matter under the Indian Contract Act, 1872. The Kolkata Police has no jurisdiction to register FIRs or detain citizens for non-payment of civil consumer debts. Borrowers should never entertain threats, demand the telecaller's full agency name and employee ID, preserve call audio recordings and WhatsApp transcripts, and immediately consult a legal advocate to issue an anti-extortion legal notice under Sections 308 and 351 of the Bharatiya Nyaya Sanhita, 2023.",
  },
  {
    id: "faq-8",
    question: "How long does the complete loan settlement process take in Kolkata?",
    answer:
      "The complete loan settlement timeline in Kolkata typically spans between 45 and 90 days from the initial issuance of the advocate representation notice to the receipt of the unconditional No Dues Certificate. The preliminary stage of halting recovery harassment and establishing legal representation is accomplished within 24 to 72 hours. Subsequent forensic ledger auditing, formal hardship dossier presentation, and bilateral negotiations with bank zonal credit committees at BBD Bagh or Salt Lake require approximately 3 to 6 weeks, culminating in the execution of the official settlement letter and supervised payment.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Subhashish Mukherjee",
  authorRole: "IT Consultant (Salt Lake, Sector V) • Unsecured Credit Card Restructuring",
  reviewBody:
    "I was dealing with over 11 lakhs in overdue credit card debt across two private banks, and local collection agencies in Kolkata were harassing my elderly parents at our residence in Behala. AMA Legal Solutions' advocates intervened, filed an official complaint with the bank's zonal legal branch in Kolkata, and settled both card debts at a 58% discount through a verified settlement letter.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Loan Settlement Agency in Kolkata: Debt Relief Advocates & OTS Services",
      description:
        "Struggling with credit card debt or personal loans in Kolkata? Consult verified loan settlement advocates in Kolkata for bank negotiations, Lok Adalat, and debt relief.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Loan Settlement Agency in Kolkata: Debt Relief Advocates & OTS Services",
      description:
        "Comprehensive legal roadmap on loan settlement and debt resolution in Kolkata. Learn how licensed Bar Council advocates halt recovery harassment, represent borrowers across Bankshall Court, Alipore Court, and Calcutta High Court, and negotiate binding RBI OTS waivers.",
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
      name: "Advocate-Led Loan Settlement & Debt Resolution Legal Representation in Kolkata",
      description:
        "Specialized legal counsel and formal compromise negotiation for Kolkata borrowers facing credit card debt, personal loan defaults, and NBFC recovery litigation, with full defense across Bankshall Court, Alipore Court, DRT Kolkata, and National Lok Adalats.",
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
          name: "Loan Settlement",
          item: `${SITE}/services/loan-settlement`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Kolkata",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Stage Advocate Protocol for Loan Settlement in Kolkata",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Ledger Audit & Usurious Fee Stripping",
          description:
            "Scrutinizing loan accounts and billing statements from Kolkata banking branches to eliminate unauthorized penal interest, compound charges, and processing fees under West Bengal banking guidelines.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Emergency Anti-Harassment Legal Notice & Telecaller Injunction",
          description:
            "Issuing formal cease-and-desist notices to bank zonal heads and recovery agencies across Kolkata and Howrah to immediately halt residential trespass, workplace calls, and unauthorized family contact under RBI regulations.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Judicial Defense in Bankshall & Alipore Courts",
          description:
            "Entering formal legal appearance (vakalatnama) in summons proceedings under Section 138 NI Act, Section 25 PSSA, or summary civil suits to secure personal exemption and contest jurisdiction.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Zonal Asset Recovery Branch & Lok Adalat Compromise Negotiation",
          description:
            "Presenting documented medical or economic hardship dossiers directly to bank Stressed Assets Recovery Branches (SARB) and facilitating consent awards before National Lok Adalat benches.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Sanction Letter Forensic Vetting, Supervised Payment & No Dues Certificate",
          description:
            "Vetting official system-generated OTS sanction letters, ensuring payment is remitted directly to the lender's escrow account, and securing unconditional No Dues Certificates and credit bureau closure reports.",
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
  { id: "quick-answer", title: "Quick Answer: Kolkata Loan Settlement" },
  { id: "kolkata-debt-landscape", title: "Kolkata Debt Realities & Local Recovery Tactics" },
  { id: "stopping-recovery-harassment", title: "Halting Harassment: Salt Lake, New Town & Howrah" },
  { id: "judicial-representation-kolkata", title: "Court Representation: Bankshall, Alipore & High Court" },
  { id: "drt-drat-litigation-defense", title: "DRT & DRAT Kolkata Legal Defense" },
  { id: "arbitration-defense-kolkata", title: "Arbitration & Section 34 Petitions" },
  { id: "wb-money-lenders-act", title: "West Bengal Money-Lenders Act Protections" },
  { id: "lok-adalat-kolkata-process", title: "Resolving Debts via Kolkata Lok Adalat" },
  { id: "comparative-defense-matrix", title: "Institutional Comparison Matrix" },
  { id: "the-5-stage-protocol", title: "5-Stage Advocate Settlement Protocol" },
  { id: "signature-infographic", title: "Settlement & Relief Architecture" },
  { id: "sec-25-pssa-138-ni-act", title: "Section 25 PSSA & 138 NI Act Defense" },
  { id: "verifying-sanction-letter", title: "Verifying Bank Settlement Letters & NDC" },
  { id: "cibil-credit-rehabilitation", title: "CIBIL Bureau Reporting & Credit Repair" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Legal Advisory" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function KolkataLoanSettlementClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("quick-answer");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "Kolkata, West Bengal",
    assetType: "Unsecured Personal Loan & Credit Cards",
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
    const textMsg = `Hello AMA Legal Solutions, I require confidential advocate consultation regarding loan and credit card settlement in Kolkata, West Bengal.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "Kolkata, West Bengal"}
Matter Type: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory for bank compromise, Lok Adalat referral, court defense, and protection against recovery agent harassment."}`;
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
      cityState: "Kolkata, West Bengal",
      assetType: "Unsecured Personal Loan & Credit Cards",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Loan Settlement Agency in Kolkata: Debt Relief Advocates & OTS Services – AMA Legal Solutions";
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
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    {
      label: "Kolkata",
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
                <span>⚖️</span> Kolkata &amp; Howrah Bar Council Debt Relief Advocates
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Loan Settlement Agency in Kolkata:{" "}
                <span className="text-[#D2A02A]">Debt Relief Advocates &amp; OTS Services</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Struggling with overdue personal loans, credit card balances, or aggressive recovery agents in Salt Lake, New Town, Behala, or Howrah?
                AMA Legal Solutions provides senior Bar Council advocate representation across Bankshall Court, Alipore District Court, and the Calcutta High Court.
                We halt unlawful telecaller intimidation under RBI directives, challenge coercive Section 138 NI Act and Section 25 PSSA notices, and negotiate
                binding One-Time Settlement (OTS) compromise sanction letters directly with bank Zonal Asset Recovery Branches through transparent fixed legal advisory.
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
                    <span>⏱️ 16 Min Read</span>
                  </div>
                </div>
              </div>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ✓ Bankshall &amp; Alipore Court Representation
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  ✓ Kolkata Lok Adalat Consent Awards
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  ✓ 100% Bar Council Legal Privileged
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                  ✓ Section 25 PSSA &amp; 138 NI Act Defense
                </span>
              </div>
            </div>

            {/* Right Col — Generated Luxury OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/services/loan-settlement/kolkata.png"
                  alt="Loan Settlement Agency in Kolkata – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Kolkata Dedicated Debt Relief Hub
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Official OTS Sanction Letters &bull; Zero Third-Party Risk &bull; Full Legal Immunity
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
                  <span className="text-[#D2A02A]">🏛️</span> Pan-Kolkata
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Bankshall, Alipore &amp; Calcutta High Court
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">🔒</span> 100% Privilege
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Section 126 Evidence Act Protection
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
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  Kolkata Debt Resolution &amp; Commercial Defense Hub
                </div>
                <div className="flex items-center gap-2">
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
                    title="Share on Twitter"
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
                    className="w-8 h-8 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-8 h-8 rounded-lg bg-amber-50 text-[#D2A02A] hover:bg-[#D2A02A] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs relative"
                    title="Copy Page Link"
                    aria-label="Copy Page Link"
                  >
                    {shareMsg ? <FaCheck className="w-3.5 h-3.5" /> : <FaCopy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* 1. Quick-Answer Callout Box */}
              <div
                id="quick-answer"
                className="p-6 md:p-8 bg-amber-50/80 border-l-4 border-[#D2A02A] rounded-r-2xl my-6 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⚡</span>
                  <h3 className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider">
                    Quick Answer: Loan Settlement in Kolkata &amp; Howrah
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                  A loan settlement agency in Kolkata consists of licensed legal advocates specializing in debt resolution under RBI guidelines for borrowers in Kolkata and Howrah facing unmanageable credit card or personal loan defaults. Enrolled advocates intervene to halt harassment from local recovery agencies, represent borrowers before Bankshall Court, Alipore Court, or National Lok Adalats, and negotiate binding One-Time Settlement (OTS) waivers directly with bank zonal asset recovery branches.
                </p>
                <div className="mt-4 pt-3 border-t border-[#D2A02A]/20 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
                  <span>Authoritative Bar Council of Delhi &amp; Calcutta High Court Representation</span>
                  <span className="font-semibold text-[#5A4C33]">RBI Fair Practices Code &bull; Lok Adalat Pre-Litigation</span>
                </div>
              </div>

              {/* 2. Kolkata Debt Realities & Local Recovery Tactics */}
              <section id="kolkata-debt-landscape" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Kolkata Debt Realities: Overdue Personal Loans &amp; Local Recovery Tactics
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  As the primary financial and commercial capital of Eastern India, Kolkata has witnessed an unprecedented surge in unsecured consumer retail credit, ranging from personal loans disbursed by major private banking institutions (such as HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank) to high-interest revolving credit cards and app-based digital NBFC credit lines. However, sudden economic shifts, corporate restructuring in the Sector V and Rajarhat IT corridors, business cash flow disruptions in Burrabazar and Posta, or unforeseen medical emergencies frequently plunge bona fide borrowers into severe financial distress.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When a borrower defaults across Kolkata, Howrah, or the wider Kolkata Metropolitan Area, financial institutions swiftly hand over delinquent portfolios to aggressive third-party collection agencies operating out of peripheral hubs. In contrast to professional legal negotiations, these unregulated collection syndicates deploy relentless psychological coercion:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Intrusive Residential Visits:</strong> Unannounced visits by collection agents to residential complexes in Salt Lake, New Town, Garia, Behala, Ballygunge, and Howrah, creating public embarrassment among neighbors and security personnel.
                  </li>
                  <li>
                    <strong>Workplace &amp; HR Telecalling:</strong> Harassing phone calls directed to corporate office landlines and HR departments in Sector V IT parks, threatening the borrower’s employment security and professional reputation.
                  </li>
                  <li>
                    <strong>Spam VoIP WhatsApp Intimidation:</strong> Flooding the borrower and their family members with threatening messages from unverified virtual numbers, falsely alleging pending police warrants or imminent criminal arrest.
                  </li>
                  <li>
                    <strong>Misleading Pre-Litigation Threats:</strong> Fabricating non-bailable warrant notices or threatening immediate property confiscation, capitalizing on borrowers&apos; lack of awareness regarding civil contractual law.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Navigating this aggressive pressure requires immediate intervention by a verified <Link href="/services/loan-settlement/kolkata" className="text-[#D2A02A] font-semibold hover:underline">loan settlement agency in kolkata</Link> staffed by licensed advocates. Rather than relying on unlicensed commercial agencies that lack statutory standing, borrowers require Bar Council-enrolled counsel to invoke RBI prudential directions, assert legal privilege, and negotiate formal compromise solutions.
                </p>
              </section>

              {/* 3. Halting Harassment: Salt Lake, New Town & Howrah */}
              <section id="stopping-recovery-harassment" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Halting Harassment: Residential &amp; Workplace Protection Across Kolkata &amp; Howrah
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Under the Reserve Bank of India’s <em>Master Directions on Fair Practices Code</em> and its updated <em>Circular on Outsourcing of Financial Services &amp; Recovery Agents (August 2022 &amp; April 2023)</em>, the regulatory framework governing debt collection in India is unequivocal: recovery agents are strictly prohibited from resorting to intimidation, verbal abuse, harassment, or violating borrower privacy.
                </p>
                <blockquote className="border-l-4 border-[#D2A02A] pl-4 italic text-gray-700 bg-gray-50 py-3 rounded-r-lg">
                  &ldquo;Regulated entities shall ensure that their recovery agents do not resort to intimidation or harassment of any kind, either verbally or physically, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the borrowers&apos; family members, referees, or friends, or making threatening and anonymous calls.&rdquo;
                  <br />
                  <span className="text-xs font-semibold text-gray-500 not-italic block mt-1">
                    — Reserve Bank of India, Master Direction on Recovery Agents
                  </span>
                </blockquote>
                <p className="text-gray-700 leading-relaxed">
                  When a borrower retains AMA Legal Solutions, our senior advocates immediately draft and dispatch a formal <strong>Emergency Cease-and-Desist Legal Notice</strong> directly to the bank’s Principal Nodal Officer, Zonal Recovery Head, and the offending collection agency. This notice puts the financial institution on formal legal record regarding:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Statutory Criminal Liability:</strong> Highlighting provisions under Section 351 (Criminal Intimidation) and Section 308 (Extortion) of the <em>Bharatiya Nyaya Sanhita, 2023 (BNS)</em> (formerly Sections 503 and 384 of the IPC), as well as Section 79 for outraging modesty if female family members are harassed.
                  </li>
                  <li>
                    <strong>Subjugation of Agency Mandate:</strong> Directing all future communication strictly through designated legal counsel under Section 126 of the Indian Evidence Act, rendering direct recovery telecalling legally untenable.
                  </li>
                  <li>
                    <strong>Regulatory Escalation:</strong> Warning of immediate statutory escalation to the RBI Integrated Ombudsman Scheme (CMS Portal) and the Kolkata Police Cyber Cell if unlawful virtual communications persist.
                  </li>
                </ol>
                <p className="text-gray-700 leading-relaxed">
                  In over 95% of cases across Kolkata, Howrah, and Bidhannagar, serving this advocate-certified notice halts third-party recovery telecalling within 24 to 48 hours, creating a secure environment for structured financial negotiations.
                </p>
              </section>

              {/* 4. Judicial Representation: Bankshall, Alipore & High Court */}
              <section id="judicial-representation-kolkata" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Judicial Court Representation: Bankshall Court, Alipore Court &amp; Calcutta High Court
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When private banks and NBFCs realize that telecaller harassment cannot force an insolvent borrower to pay, they frequently initiate formal legal proceedings across Kolkata’s judicial system. Unlike unregulated private debt management firms that are legally barred from appearing before a judicial magistrate, AMA Legal Solutions provides licensed court representation through seasoned <Link href="/services/loan-settlement/kolkata" className="text-[#D2A02A] font-semibold hover:underline">loan settlement lawyers in kolkata</Link>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#5A4C33] flex items-center justify-center font-bold text-sm">
                      🏛️
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Bankshall Court (Kolkata City Civil &amp; Sessions)</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Handling Section 138 NI Act cheque bounce complaints, Section 25 PSSA NACH bounce summons, and summary civil recovery suits under Order XXXVII CPC for central Kolkata jurisdictions.
                    </p>
                  </div>
                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm">
                      🏛️
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Alipore District Court (South 24 Parganas)</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Covering extensive South Kolkata residential sectors including Alipore, Behala, Jadavpur, Ballygunge, Kasba, and Garia for judicial summons defense and civil attachments.
                    </p>
                  </div>
                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-sm">
                      🏛️
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Calcutta High Court (Appellate Jurisdiction)</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Invoking Article 226 writ jurisdiction against arbitrary bank asset freezes, challenging ex-parte arbitration awards under Section 34, and accessing High Court Legal Services.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Upon receiving a judicial summons, our advocates file an appearance memorandum (Vakalatnama), examine the plaint for procedural non-compliance (such as invalid statutory notice service or defective electronic records under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023), and secure personal exemption for the borrower. By controlling the courtroom timeline, we transfer the dispute from an adversarial trial to structured Lok Adalat conciliation.
                </p>
              </section>

              {/* 5. DRT & DRAT Kolkata Legal Defense */}
              <section id="drt-drat-litigation-defense" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  DRT &amp; DRAT Kolkata: Defending Higher-Value Banking Litigation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For high-exposure liabilities, small business loans, or consolidated credit portfolios exceeding statutory thresholds under the <em>Recovery of Debts and Bankruptcy Act, 1993 (RDB Act)</em>, institutional lenders file Original Applications (OA) before the <strong>Debts Recovery Tribunal (DRT) Kolkata</strong> (DRT-1, DRT-2, and DRT-3 located at Strand Road and Nizam Palace, AJC Bose Road), with appellate oversight under the <strong>Debts Recovery Appellate Tribunal (DRAT) Kolkata</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our specialized <Link href="/services/loan-settlement/kolkata" className="text-[#D2A02A] font-semibold hover:underline">drt lawyer in kolkata</Link> team intervenes at the DRT stage to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>File Written Statements (WS):</strong> Scrutinizing the bank’s certified statement of accounts under the Bankers’ Books Evidence Act to challenge compounding interest calculations and unauthorized administrative debits.
                  </li>
                  <li>
                    <strong>Contest Interim Injunctions:</strong> Opposing interim asset restraint petitions or conditional payment orders sought by institutional recovery counsel.
                  </li>
                  <li>
                    <strong>Facilitate In-Court OTS Compromise:</strong> Utilizing Section 19(20) of the RDB Act to submit a formal One-Time Settlement compromise proposal directly to the Presiding Officer, binding the bank to structured terms and securing formal disposal of the Original Application.
                  </li>
                </ul>
              </section>

              {/* 6. Arbitration & Section 34 Petitions */}
              <section id="arbitration-defense-kolkata" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Arbitration Notices &amp; Section 34 Set-Aside Petitions in Kolkata
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A favored recovery technique of private banks and NBFCs is issuing unilateral arbitration notices under Section 21 of the <em>Arbitration and Conciliation Act, 1996</em>, often appointing a sole arbitrator based in distant metro cities like Delhi, Mumbai, or Pune without the borrower&apos;s explicit consent. Borrowers in Kolkata are frequently blindsided by ex-parte arbitration awards ordering massive payments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As experienced <Link href="/services/loan-settlement/kolkata" className="text-[#D2A02A] font-semibold hover:underline">arbitration lawyers in kolkata</Link>, AMA Legal Solutions leverages landmark Supreme Court jurisprudence to dismantle these biased proceedings:
                </p>
                <div className="p-5 bg-amber-50/60 border-l-4 border-[#D2A02A] rounded-r-xl space-y-2">
                  <h3 className="font-bold text-gray-900 text-sm">
                    The Perkins Eastman Doctrine &amp; Unilateral Appointments
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Under the Supreme Court’s authoritative ruling in <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020)</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd. (2017)</em>, an interested party or financial institution cannot unilaterally appoint a sole arbitrator. Such appointments are void <em>ab initio</em>.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our counsel files immediate jurisdictional objections under Section 16 of the Arbitration Act, petitioning for independent arbitrator substitution under Section 11 or instituting a set-aside petition under <strong>Section 34 of the Arbitration and Conciliation Act</strong> before the Calcutta High Court or District Judge. Facing robust procedural challenges, lending institutions routinely agree to abandon contentious arbitration and finalize an out-of-court compromise settlement.
                </p>
              </section>

              {/* 7. West Bengal Money-Lenders Act Protections */}
              <section id="wb-money-lenders-act" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Statutory Safeguards: The West Bengal Money-Lenders Act, 1940
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers in Kolkata frequently fall prey to informal private moneylenders, unregulated loan sharks in trading districts, or predatory quick-credit mobile apps operating without valid licensing. In such scenarios, the <em>West Bengal Money-Lenders Act, 1940</em> provides vital statutory shields:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Mandatory Moneylending License (Section 8):</strong> Any entity or individual advancing capital in West Bengal must hold an active license issued by the competent licensing authority. Unlicensed entities are legally barred from maintaining civil recovery suits in any court across the state.
                  </li>
                  <li>
                    <strong>Statutory Interest Ceiling (Section 30):</strong> The Act imposes rigid statutory ceilings on interest rates. Any penal or compounding interest exceeding prescribed state thresholds is legally unenforceable and void.
                  </li>
                  <li>
                    <strong>Damdupat Principle Protection:</strong> The doctrine of <em>damdupat</em> codified under West Bengal state jurisprudence ensures that the total accumulated interest recoverable from a borrower can never exceed the original principal sum disbursed.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  When aggressive private financiers attempt to enforce extortionate claims, our advocates invoke these statutory bars, exposing the lender to criminal penalties and neutralizing coercive claims.
                </p>
              </section>

              {/* 8. Resolving Debts via Kolkata Lok Adalat */}
              <section id="lok-adalat-kolkata-process" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Resolving Debts Through Kolkata National Lok Adalat
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the most effective, legally sound avenues for achieving a clean debt-free exit in Kolkata is through the <strong>National Lok Adalat</strong>, organized under the auspices of the <em>West Bengal State Legal Services Authority (WBSLSA)</em> and the <em>Calcutta High Court Legal Services Committee</em> under the <em>Legal Services Authorities Act, 1987</em>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Held quarterly across civil court complexes including Bankshall Court, Alipore Court, and Howrah District Court, the Lok Adalat provides a statutory conciliation forum where bank recovery managers are empowered to sanction maximum compromise concessions:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-5 bg-white border-2 border-emerald-100 rounded-xl space-y-2 shadow-xs">
                    <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider">Advantage #1</span>
                    <h3 className="font-bold text-gray-900 text-sm">Status of a Civil Court Decree (Section 21)</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      An award passed by the Lok Adalat possesses the conclusive legal status of a decree of a Civil Court. Once signed, it cannot be appealed before any higher judicial forum, granting absolute legal closure.
                    </p>
                  </div>
                  <div className="p-5 bg-white border-2 border-emerald-100 rounded-xl space-y-2 shadow-xs">
                    <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider">Advantage #2</span>
                    <h3 className="font-bold text-gray-900 text-sm">Complete Waiver of Litigative Penalties</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Lok Adalat benches mandate the complete waiver of overdue penal charges, processing fees, and compounding interest, focusing negotiations strictly around the realistic net principal capacity of the borrower.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  AMA Legal Solutions files pre-litigation conciliation applications before the Kolkata District Legal Services Authority (DLSA), representing the borrower in session, presenting hardship documentation, and securing a formal Lok Adalat Award with unconditional immunity.
                </p>
              </section>

              {/* 9. Institutional Comparison Matrix */}
              <section id="comparative-defense-matrix" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Institutional Comparison: Recovery Agencies vs. Online Apps vs. Bar Council Advocates
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing financial distress in Kolkata must understand the critical legal distinction between commercial telecalling agencies, non-legal automated debt settlement apps, and licensed Bar Council advocates:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-xs md:text-sm border-collapse bg-white rounded-xl shadow-xs overflow-hidden border border-gray-200">
                    <thead>
                      <tr className="bg-[#1a202c] text-white">
                        <th className="p-3.5 md:p-4 font-bold border-b border-gray-700">Legal Parameter / Service</th>
                        <th className="p-3.5 md:p-4 font-bold border-b border-gray-700">Unregulated Kolkata Agencies</th>
                        <th className="p-3.5 md:p-4 font-bold border-b border-gray-700">Generic Online Debt Apps</th>
                        <th className="p-3.5 md:p-4 font-bold border-b border-[#D2A02A] text-[#D2A02A]">
                          AMA Legal Solutions (Advocates)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3.5 md:p-4 font-semibold">Bar Council Enrolled Advocates</td>
                        <td className="p-3.5 md:p-4 text-red-600 font-medium">❌ No (Call center telecallers)</td>
                        <td className="p-3.5 md:p-4 text-red-600 font-medium">❌ No (Fintech aggregators)</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-bold">✓ Yes (High Court Advocates)</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3.5 md:p-4 font-semibold">Bankshall &amp; Alipore Court Representation</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ Legally Barred (No Vakalatnama)</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ Legally Barred from Court</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-bold">✓ Full Appearance &amp; Bail Filing</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 md:p-4 font-semibold">Section 138 &amp; 25 PSSA Criminal Defense</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ Zero Defense (Risk of NBW)</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ Unresponsive to Summons</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-bold">✓ Formal Reply, Exemption &amp; Quashing</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3.5 md:p-4 font-semibold">Halting Telecaller Residential Harassment</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ Ineffective verbal requests</td>
                        <td className="p-3.5 md:p-4 text-amber-600">⚠️ Automated generic emails</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-bold">✓ Cease-and-Desist Notice (BNS 351/308)</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 md:p-4 font-semibold">Direct Access to Bank Zonal SARB Heads</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ Restricted to low-tier collectors</td>
                        <td className="p-3.5 md:p-4 text-amber-600">⚠️ Bureaucratic ticket queues</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-bold">✓ Direct Legal Cell &amp; Zonal SARB Access</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="p-3.5 md:p-4 font-semibold">Attorney-Client Legal Privilege</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ No (Data exposed to third parties)</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ Commercial SaaS Terms</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-bold">✓ 100% Protected (Sec 126 Evidence Act)</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 md:p-4 font-semibold">National Lok Adalat Consent Awards</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ Cannot file DLSA petitions</td>
                        <td className="p-3.5 md:p-4 text-red-600">❌ Cannot represent before bench</td>
                        <td className="p-3.5 md:p-4 text-emerald-700 font-bold">✓ Full Conciliation &amp; Final Decree</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 10. The 5-Stage Advocate Settlement Protocol */}
              <section id="the-5-stage-protocol" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Stage Advocate Settlement Protocol in Kolkata
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our structured debt compromise workflow delivers complete legal immunity and substantial financial relief through a rigorous 5-stage legal process:
                </p>

                <div className="space-y-6 my-6">
                  {/* Step 1 */}
                  <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-xs flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-xl shrink-0">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        Forensic Digital Ledger Audit &amp; Usurious Fee Stripping
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our legal team conducts a line-by-line examination of your loan agreements, repayment schedules, and bank account ledgers. We identify and isolate compounding penal interest, duplicate bounce charges, and unbundled service fees that violate RBI guidelines, establishing an accurate net principal baseline for negotiation.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-xs flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-xl shrink-0">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        Emergency Anti-Harassment Legal Notice &amp; Telecaller Injunction
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We serve a formal legal notice upon the lender&apos;s Zonal Management in Kolkata and the recovery agency, citing the RBI Fair Practices Code and Section 351/308 of the Bharatiya Nyaya Sanhita. This establishes legal privilege and mandates that all communication be redirected to our law office, stopping home visits and workplace harassment.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-xs flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-xl shrink-0">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        Judicial Defense in Bankshall &amp; Alipore Courts
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        If the bank has initiated litigation under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, our advocates enter appearance before the competent Metropolitan Magistrate or Civil Judge, securing bail, filing objections, and safeguarding you from coercive warrants.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-xs flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-xl shrink-0">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        Zonal Asset Recovery Branch &amp; Lok Adalat Compromise Negotiation
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We compile and present a comprehensive Hardship Dossier (medical records, job loss proof, business declines) directly to the bank&apos;s Zonal Credit Committee or Stressed Asset Recovery Branch (SARB) at Shakespeare Sarani or BBD Bagh, or present the matter before the National Lok Adalat for an amicable settlement.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-xs flex flex-col md:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-extrabold text-xl shrink-0">
                      5
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        Sanction Letter Forensic Vetting, Supervised Payment &amp; No Dues Certificate
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We verify the authenticity of the system-generated settlement letter issued on the bank&apos;s corporate letterhead. Payments are made directly to your loan account—never to third-party accounts. Upon payment, we obtain the unconditional No Dues Certificate (NDC) and ensure closure reporting to CIBIL and CRIF High Mark.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 11. Signature Editorial Infographic Card */}
              <section id="signature-infographic" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <img
                      src="/images/og/services/loan-settlement/kolkata.png"
                      alt="Infographic: Kolkata Loan Settlement & Debt Relief Architecture"
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                  <div className="space-y-1 max-w-2xl">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                      Figure 1: Institutional Loan Settlement &amp; Legal Protection Architecture in Kolkata
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Comprehensive visual overview of advocate-led debt resolution across Kolkata Metropolitan Area, integrating Bankshall and Alipore court defense, Calcutta High Court legal services conciliation, and RBI-mandated OTS compromise execution.
                    </p>
                  </div>
                </div>
              </section>

              {/* 12. Section 25 PSSA & Section 138 NI Act Defense */}
              <section id="sec-25-pssa-138-ni-act" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Defending Section 25 PSSA (NACH Bounce) &amp; Section 138 NI Act Summons
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The primary statutory weapons used by lending institutions against loan defaulters in Kolkata are complaints filed under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> for bounced electronic NACH/e-mandates, and <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> for dishonored security cheques.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Many borrowers panic upon receiving formal legal demand notices or court summons, fearing immediate police arrest. It is crucial to recognize the statutory procedural defenses available:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                    <h3 className="font-bold text-gray-900 text-sm">Absence of Fraudulent Mens Rea</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Default arising from documented involuntary job loss, business insolvency, or health crises constitutes a civil breach of contract rather than criminal deception. Establishing this distinction before the magistrate disproves criminal intent.
                    </p>
                  </div>
                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                    <h3 className="font-bold text-gray-900 text-sm">Compoundable Nature of Offenses</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Both Section 138 NI Act and Section 25 PSSA are explicitly compoundable under law. Upon reaching an agreed OTS compromise, the bank is legally obligated to withdraw all criminal complaints unconditionally.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our advocates manage the entire timeline: drafting formal statutory replies within the mandatory 15-day window, appearing before the Chief Metropolitan Magistrate at Bankshall Court or Alipore Court, and ensuring complete dismissal of complaints upon settlement payment.
                </p>
              </section>

              {/* 13. Verifying Bank Settlement Letters & NDC */}
              <section id="verifying-sanction-letter" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Verifying Bank Settlement Letters &amp; Securing No Dues Certificates (NDC)
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A critical risk faced by unrepresented borrowers in Kolkata is falling victim to fraudulent settlement letters concocted by third-party recovery telecallers seeking to hit monthly recovery quotas. Unregulated agents routinely forge compromise letters on scanned bank letterheads, instructing borrowers to remit funds into unverified accounts, only for the bank to later treat the payment as a routine partial recovery while maintaining the full overdue balance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  To ensure complete legal safety, AMA Legal Solutions implements a strict <strong>Forensic Settlement Verification Checklist</strong>:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Official Bank Letterhead &amp; System Reference:</strong> The settlement letter must be generated directly from the bank’s central core banking platform, featuring a verifiable barcode or reference number.
                  </li>
                  <li>
                    <strong>Unambiguous Account &amp; Compromise Terms:</strong> The letter must explicitly cite your exact loan account or credit card number, the agreed one-time compromise amount, the payment schedule, and an express clause affirming that no further claims exist.
                  </li>
                  <li>
                    <strong>Direct Payment Destination:</strong> All settlement payments must be deposited strictly into your own loan account through official bank payment portals or NEFT/RTGS to the bank&apos;s corporate escrow account—never to any individual or agency.
                  </li>
                  <li>
                    <strong>Guaranteed Issuance of No Dues Certificate:</strong> The sanction letter must stipulate the issuance of an unconditional No Dues Certificate (NDC) within 15 to 30 days of final payment, along with an update to credit information companies (CIBIL, Equifax, Experian, CRIF High Mark).
                  </li>
                </ul>
              </section>

              {/* 14. CIBIL Bureau Reporting & Credit Repair */}
              <section id="cibil-credit-rehabilitation" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  CIBIL Bureau Reporting &amp; Post-Settlement Credit Rehabilitation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers must understand the impact of loan settlement on credit bureau records. Under RBI Credit Information Companies Regulations, when a loan or credit card is resolved through a negotiated compromise waiver, the lending institution updates the trade line status from &ldquo;Default&rdquo; or &ldquo;Written Off&rdquo; to <strong>&ldquo;Settled&rdquo; (or &ldquo;Post-Write-off Settled&rdquo;)</strong> with a zero outstanding balance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  While a &ldquo;Settled&rdquo; remark reflects that a partial waiver was granted, it provides immense strategic advantages over perpetual delinquency:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Termination of Accruing Dues:</strong> Late penalties, compounding interest, and overdue legal charges immediately cease accruing, freezing the debt footprint.
                  </li>
                  <li>
                    <strong>Complete Legal Immunity:</strong> The lender is legally estopped from filing further recovery suits, executing civil decrees, or selling the residual ledger balance to asset reconstruction companies (ARCs).
                  </li>
                  <li>
                    <strong>Clear Path to Credit Score Reconstruction:</strong> With zero active delinquencies, borrowers can systematically rehabilitate their credit score within 18 to 24 months by utilizing secured credit cards (backed by fixed deposits), maintaining impeccable repayment records, and keeping credit utilization ratios below 25%.
                  </li>
                </ol>
              </section>

              {/* 15. Transparent Fixed Legal Advisory */}
              <section id="transparent-fixed-advisory" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Transparent Fixed Legal Advisory: Accessible Debt Relief Representation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, our institutional mission is to provide accessible, high-caliber legal representation to distressed borrowers across Kolkata and West Bengal. Unlike traditional commercial law firms that impose excessive corporate retainers, unpredictable hourly markups, or hidden legal filing fees, our practice is built upon <strong>transparent fixed legal advisory</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe that financial hardship should never bar an individual or family from receiving top-tier courtroom protection and senior advocate negotiation. We ensure:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Transparent Engagement:</strong> Clearly defined scopes of advocate representation covering notice drafting, court appearance, and zonal bank negotiations without hidden surprises.
                  </li>
                  <li>
                    <strong>Elimination of Excessive Retainers:</strong> Transparent legal counsel tailored to your specific loan exposure, eliminating excessive corporate law firm retainers.
                  </li>
                  <li>
                    <strong>Superior Protection vs. DIY Templates:</strong> Avoiding the severe legal perils of free, automated online templates or unregulated telecalling agencies that fail under judicial scrutiny in Bankshall or Alipore courts.
                  </li>
                  <li>
                    <strong>Complete Statutory Confidentiality:</strong> Complete statutory protection under Section 126 of the Indian Evidence Act, ensuring your financial and legal data is never shared with third-party marketing networks.
                  </li>
                </ul>
              </section>

              {/* 16. Frequently Asked Questions (Accordion) */}
              <section id="frequently-asked-questions" className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">❓</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Frequently Asked Questions: Kolkata Loan Settlement
                  </h2>
                </div>
                <p className="text-gray-600 text-sm">
                  Statutory answers to critical legal and procedural questions regarding debt resolution, recovery harassment, and court defense in Kolkata.
                </p>

                <div className="space-y-4 pt-2">
                  {faqs.map((faq, index) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-5 py-4 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition cursor-pointer text-sm md:text-base gap-4"
                        aria-expanded={openFaqIndex === index}
                      >
                        <span>{faq.question}</span>
                        <span className="text-xl text-[#D2A02A] shrink-0 font-extrabold">
                          {openFaqIndex === index ? "−" : "+"}
                        </span>
                      </button>
                      {openFaqIndex === index && (
                        <div className="px-5 pb-5 pt-2 text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* 17. More Legal Guides (Internal Links) */}
              <section id="internal-guides" className="space-y-4 pt-4 border-t border-gray-200">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                  More Legal Debt Relief Guides
                </h2>
                <p className="text-gray-600 text-sm">
                  Explore our authoritative guides on bank-specific settlement protocols, statutory defenses, and regional insolvency services:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  <Link
                    href="/services/loan-settlement/west-bengal"
                    className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-white transition text-xs font-semibold text-gray-800 block"
                  >
                    &rarr; Loan Settlement in West Bengal
                  </Link>
                  <Link
                    href="/best-loan-settlement-agencies-in-india"
                    className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-white transition text-xs font-semibold text-gray-800 block"
                  >
                    &rarr; Best Loan Settlement Agencies in India
                  </Link>
                  <Link
                    href="/personal-loan-settlement"
                    className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-white transition text-xs font-semibold text-gray-800 block"
                  >
                    &rarr; Personal Loan Settlement Guide
                  </Link>
                  <Link
                    href="/credit-card-settlement"
                    className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-white transition text-xs font-semibold text-gray-800 block"
                  >
                    &rarr; Credit Card Debt Settlement
                  </Link>
                  <Link
                    href="/loan-settlement-for-sbi-bank"
                    className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-white transition text-xs font-semibold text-gray-800 block"
                  >
                    &rarr; SBI Loan Settlement &amp; OTS Scheme
                  </Link>
                  <Link
                    href="/loan-settlement-for-hdfc-bank"
                    className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-white transition text-xs font-semibold text-gray-800 block"
                  >
                    &rarr; HDFC Bank Loan Settlement
                  </Link>
                  <Link
                    href="/loan-settlement-for-bajaj-finserv"
                    className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-white transition text-xs font-semibold text-gray-800 block"
                  >
                    &rarr; Bajaj Finserv Loan Settlement
                  </Link>
                  <Link
                    href="/bankruptcy-lawyer-in-india"
                    className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-white transition text-xs font-semibold text-gray-800 block"
                  >
                    &rarr; Bankruptcy Lawyer in India (IBC)
                  </Link>
                  <Link
                    href="/section-25-payment-and-settlement-act-legal-defense"
                    className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#D2A02A] hover:bg-white transition text-xs font-semibold text-gray-800 block"
                  >
                    &rarr; Section 25 PSSA Legal Defense
                  </Link>
                </div>
              </section>

              {/* 18. References & Regulatory Authorities */}
              <section id="statutory-references" className="space-y-4 pt-4 border-t border-gray-200">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                  References &amp; Regulatory Authorities
                </h2>
                <p className="text-gray-600 text-sm">
                  Official judicial portals, regulatory guidelines, and statutory bodies governing debt resolution and borrower rights in Kolkata:
                </p>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                  <li>
                    &bull;{" "}
                    <a
                      href="https://calcuttahighcourt.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Calcutta High Court Official Portal &amp; High Court Legal Services Committee
                    </a>{" "}
                    – Jurisdiction, case status, and pre-litigation conciliation.
                  </li>
                  <li>
                    &bull;{" "}
                    <a
                      href="https://wbslsa.wb.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      West Bengal State Legal Services Authority (WBSLSA)
                    </a>{" "}
                    – National Lok Adalat schedules and District Legal Services Authority rosters.
                  </li>
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
                    – Master Directions on Fair Practices Code and Outsourcing of Recovery Agents.
                  </li>
                  <li>
                    &bull;{" "}
                    <a
                      href="https://drt.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Debts Recovery Tribunal (DRT Kolkata)
                    </a>{" "}
                    – Procedural rules and orders for banking claims exceeding statutory limits.
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
                    – Statutory framework under the Legal Services Authorities Act, 1987.
                  </li>
                </ul>
              </section>

              {/* Bottom Social Share Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
                <div className="text-xs font-semibold text-gray-500">
                  Share this authoritative legal guide with borrowers in Kolkata:
                </div>
                <div className="flex items-center gap-2">
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
                    title="Share on Twitter"
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
                    className="w-8 h-8 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 19. AMA Company & Media Section */}
              <section
                id="ama-company-section"
                className="p-6 md:p-8 bg-[#FAF7F0] border-4 border-[#D2A02A] rounded-2xl space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={LOGO_URL}
                    alt="AMA Legal Solutions Logo"
                    className="w-24 h-24 object-contain shrink-0"
                  />
                  <div className="text-center sm:text-left space-y-2">
                    <h3 className="text-2xl font-extrabold text-[#1a202c]">
                      AMA Legal Solutions
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      A premier legal advocacy firm dedicated to debtor protection, banking litigation defense, and institutional dispute resolution. Headquartered in Gurugram with active practice across Calcutta High Court, Bankshall Court, Alipore Court, and pan-India judicial benches.
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-800 bg-white px-3 py-1 rounded-full border border-gray-200">
                        ⭐ 4.7 Google Rating
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-800 bg-white px-3 py-1 rounded-full border border-gray-200">
                        ⚖️ Bar Council of Delhi Registered
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D2A02A]/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A4C33] mb-3">
                    Our Specialized Practice Areas
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <Link
                      href="/personal-loan-settlement"
                      className="text-center p-2.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-xs font-bold"
                    >
                      Personal Loan Settlement
                    </Link>
                    <Link
                      href="/credit-card-settlement"
                      className="text-center p-2.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-xs font-bold"
                    >
                      Credit Card Settlement
                    </Link>
                    <Link
                      href="/section-25-payment-and-settlement-act-legal-defense"
                      className="text-center p-2.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-xs font-bold"
                    >
                      Section 25 PSSA Defense
                    </Link>
                    <Link
                      href="/contact"
                      className="text-center p-2.5 rounded-lg border-2 border-[#D2A02A] text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition text-xs font-bold"
                    >
                      Advocate Consultation
                    </Link>
                  </div>
                </div>
              </section>

            </main>

            {/* Right Sticky Sidebar */}
            <aside className="space-y-8 sticky top-24">
              
              {/* Card 1: About Author */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/anujbhiya.png"
                    alt="Advocate Anuj Anand Malik"
                    className="w-14 h-14 rounded-full border-2 border-[#D2A02A] object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      <Link href="/author/anuj-anand-malik" className="hover:text-[#D2A02A] transition">
                        Anuj Anand Malik
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-500">Founder &amp; Senior Advocate</p>
                    <p className="text-[11px] text-gray-400">Bar Council of Delhi (D/2016)</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Specializing in banking recovery defense, Section 138 NI Act litigation, corporate arbitration contests, and borrower civil rights before High Courts and National Lok Adalat tribunals.
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] font-semibold hover:underline flex items-center gap-1"
                  >
                    <FaLinkedinIn className="w-3 h-3" /> View LinkedIn
                  </a>
                  <Link href="/author/anuj-anand-malik" className="text-[#D2A02A] font-semibold hover:underline">
                    Full Profile &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 2: Need Legal Help? CTA */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-md space-y-4">
                <span className="inline-block px-2.5 py-0.5 bg-[#D2A02A] text-[#1a202c] text-[10px] font-bold uppercase rounded-md">
                  Confidential &bull; Kolkata &amp; Howrah
                </span>
                <h3 className="text-xl font-extrabold leading-snug">
                  Harassed by Bank Recovery Agents in Kolkata?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Get immediate Bar Council advocate protection against unauthorized residential visits in Salt Lake, New Town, or Behala, and defend court summons.
                </p>
                <div className="space-y-2 pt-1">
                  <a
                    href="tel:+918700343611"
                    className="w-full py-2.5 px-4 bg-white text-[#5A4C33] hover:bg-gray-100 font-extrabold rounded-xl transition flex items-center justify-center gap-2 text-xs shadow-xs"
                  >
                    <span>📞</span> Call +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-2.5 px-4 bg-[#D2A02A] hover:bg-[#b88c22] text-[#1a202c] font-extrabold rounded-xl transition text-xs shadow-xs cursor-pointer"
                  >
                    Request Callback &rarr;
                  </button>
                </div>
                <p className="text-[10px] text-gray-300 text-center">
                  Protected under Section 126 Evidence Act Legal Privilege.
                </p>
              </div>

              {/* Card 3: Client Reviews */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                    Verified Client Review
                  </span>
                  <span className="text-xs font-extrabold text-[#D2A02A] bg-amber-50 px-2 py-0.5 rounded">
                    5.0 / 5.0
                  </span>
                </div>
                <Stars count={5} />
                <blockquote className="text-xs text-gray-700 italic leading-relaxed pt-1">
                  &ldquo;{clientReviewData.reviewBody}&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-900">{clientReviewData.authorName}</p>
                  <p className="text-[11px] text-gray-500">{clientReviewData.authorRole}</p>
                </div>
              </div>

              {/* Card 4: Related Guides */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
                <h3 className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                  Related Debt Relief Guides
                </h3>
                <div className="space-y-2 text-xs">
                  <Link
                    href="/services/loan-settlement/west-bengal"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement in West Bengal
                  </Link>
                  <Link
                    href="/loan-settlement-for-sbi-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; SBI Loan Settlement &amp; OTS Rules
                  </Link>
                  <Link
                    href="/loan-settlement-for-hdfc-bank"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; HDFC Personal Loan &amp; Credit Cards
                  </Link>
                  <Link
                    href="/loan-settlement-for-bajaj-finserv"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Bajaj Finserv EMI Card &amp; Arbitration
                  </Link>
                  <Link
                    href="/section-25-payment-and-settlement-act-legal-defense"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Section 25 PSSA NACH Bounce Defense
                  </Link>
                  <Link
                    href="/services/loan-settlement/hyderabad"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement in Hyderabad
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
                      Kolkata Loan Settlement Evaluation
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
                        placeholder="Borrower / Client Name"
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
                          Locality / City
                        </label>
                        <input
                          type="text"
                          name="cityState"
                          value={formData.cityState}
                          onChange={handleFormChange}
                          placeholder="e.g. Salt Lake, Behala, Howrah"
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
                        Debt / Matter Category
                      </label>
                      <select
                        name="assetType"
                        value={formData.assetType}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A] bg-white"
                      >
                        <option value="Unsecured Personal Loan & Credit Cards">
                          Unsecured Personal Loan &amp; Credit Cards
                        </option>
                        <option value="Severe Telecaller Harassment & Residential Visits">
                          Severe Telecaller Harassment &amp; Residential Visits
                        </option>
                        <option value="Bankshall / Alipore Court Summons (138 NI / 25 PSSA)">
                          Bankshall / Alipore Court Summons (138 NI / 25 PSSA)
                        </option>
                        <option value="Kolkata Lok Adalat Pre-Litigation OTS">
                          Kolkata Lok Adalat Pre-Litigation OTS
                        </option>
                        <option value="Arbitration Notice / Award Contest (Sec 34)">
                          Arbitration Notice / Award Contest (Sec 34)
                        </option>
                        <option value="DRT Kolkata Original Application (OA)">
                          DRT Kolkata Original Application (OA)
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
                        placeholder="Briefly describe banks involved, overdue duration, notices received, or harassment..."
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
                    Thank you, <strong>{formData.fullName}</strong>. An advocate from our Kolkata debt resolution team will review your matter shortly.
                  </p>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-left text-xs space-y-1">
                    <p>
                      <strong>Phone:</strong> {formData.phone}
                    </p>
                    <p>
                      <strong>Location:</strong> {formData.cityState || "Kolkata, West Bengal"}
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

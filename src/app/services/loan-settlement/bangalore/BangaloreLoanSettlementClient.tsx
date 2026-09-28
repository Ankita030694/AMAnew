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
const PAGE_SLUG = "/services/loan-settlement/bangalore";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/services/loan-settlement/bangalore.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-28";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "How do Bangalore debt settlement advocates handle defaults with fintech lending apps?",
    answer:
      "Enrolled advocates represent borrowers by interfacing directly with the institutional nodal grievance officers and legal compliance teams of Bengaluru-headquartered fintech NBFCs (such as Navi, KreditBee, Moneyview, and Fibe) pursuant to the RBI Digital Lending Guidelines (2022). By conducting a forensic audit of the Key Fact Statement (KFS) to identify undisclosed annual percentage rate (APR) inflations or illegal fee compounding, legal counsel strips away coercive late penalties and formalizes an enforceable One-Time Settlement (OTS) compromise letter. This structured statutory procedure halts aggressive automated collection algorithms and ensures that all compromise disbursements are credited directly to the regulated entity's designated escrow account.",
  },
  {
    id: "faq-2",
    question: "What legal protections exist against recovery agents visiting tech parks or gated apartments in Bangalore?",
    answer:
      "Under the RBI Master Directions on Recovery Agents and Fair Practices Code (August 2022 & April 2023), financial institutions and their outsourced agencies are strictly prohibited from visiting a borrower's corporate workspace in Electronic City, Whitefield, or Manyata Tech Park, or residential communities across Koramangala and Indiranagar without prior written appointment. Unannounced workplace confrontations or public intimidation violate Section 351 of the Bharatiya Nyaya Sanhita (BNS) regarding criminal intimidation and breach apartment association privacy protocols. When such incidents occur, an advocate immediately issues an emergency Cease-and-Desist Legal Notice to the bank's zonal recovery head and files formal statutory complaints with the Karnataka State Legal Services Authority and the jurisdictional police commissionerate.",
  },
  {
    id: "faq-3",
    question: "How does the Karnataka Prohibition of Charging Exorbitant Interest Act protect borrowers?",
    answer:
      "The Karnataka Prohibition of Charging Exorbitant Interest Act, 2004, read alongside the Karnataka Money Lenders Act, 1961, strictly penalizes lenders and uncertified financiers who levy usurious interest rates (daily interest, hourly compounding, or exorbitant rollover charges) under civil and criminal penalty frameworks. Section 3 and Section 4 of the Act render contracts demanding exorbitant interest legally unenforceable in Bengaluru courts and empower borrowers to deposit disputed amounts before the court to seek complete debt discharge. Retaining an enrolled advocate ensures that usurious charges levied by predatory digital lenders or private recovery syndicates are struck down during formal settlement proceedings.",
  },
  {
    id: "faq-4",
    question: "What is the procedure for settling credit card debt through the Bengaluru City Civil Court Lok Adalat?",
    answer:
      "Credit card and unsecured personal loan settlements through the Bengaluru City Civil Court Lok Adalat are administered under Sections 19 to 21 of the Legal Services Authorities Act, 1987, in coordination with the Karnataka State Legal Services Authority (KSLSA). Prior to the quarterly National Lok Adalat sitting, the borrower's advocate files a pre-litigation conciliation petition or jointly requests referral of pending recovery proceedings before the designated judicial bench. The presiding judicial officer and appointed conciliation panelists review the verified financial hardship dossier, evaluate the bank's compromise policy, and pass a final consent award that holds the conclusive force of a civil court decree, eliminating future litigation and ensuring complete refund of any paid court fees.",
  },
  {
    id: "faq-5",
    question: "Can an advocate negotiate multiple unsecured loans simultaneously in Bengaluru?",
    answer:
      "Yes, specialized debt resolution advocates in Bengaluru routinely manage multi-lender restructuring portfolios for salaried IT professionals and entrepreneurs dealing with concurrent personal loans, revolving credit card balances, and digital credit lines. Counsel establishes a synchronized legal defense perimeter by issuing simultaneous advocate representation notices to all private banks and NBFCs, halting harassment across the board. Negotiations are then staged systematically—prioritizing aggressive digital lenders and legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA) before addressing institutional term loans—ensuring that the borrower's available compromise funds are deployed strategically without triggering cross-default litigation.",
  },
  {
    id: "faq-6",
    question: "What happens if a tech employee with loan defaults is preparing to switch employers in Bangalore?",
    answer:
      "A pending loan default or credit dispute does not legally disqualify a software engineer or IT manager from changing employers in Bangalore, as debt default remains a purely civil contractual matter under the Indian Contract Act, 1872. However, unauthorized recovery agents frequently attempt to disrupt background verification (BGV) checks by calling corporate HR desks or threatening to serve fabricated legal notices at the new employer's premises. Retaining an advocate insulates the employee by serving formal cease-and-desist warnings that mandate all creditor communications be directed exclusively to legal counsel's office, protecting corporate employment records from third-party interference.",
  },
  {
    id: "faq-7",
    question: "How does a loan settlement affect future US or European employment visa verifications?",
    answer:
      "A civil loan compromise or credit card settlement does not impede employment visa approvals (such as US H-1B, L-1, or European EU Blue Card applications), as consular immigration authorities conduct criminal background checks rather than civil financial audits. Immigration verification checks focus strictly on court records for non-bailable warrants or criminal convictions under the Bharatiya Nyaya Sanhita, from which civil loan borrowers are completely exempt. By securing a court-recognized Lok Adalat decree or a verified bank No Dues Certificate (NDC), advocates ensure that no unresolved summonses or Section 138 Negotiable Instruments Act proceedings linger on judicial portals.",
  },
  {
    id: "faq-8",
    question: "How can a borrower in Bengaluru verify the authenticity of a digital loan settlement offer?",
    answer:
      "To verify a legitimate loan settlement offer in Bengaluru, borrowers must ensure the settlement letter is printed on the official letterhead of the lending bank or registered NBFC, containing a traceable internal reference number, branch manager or authorized signatory digital signature, and explicit terms waiving remaining principal and interest. Borrowers must never accept settlement letters sent from generic Gmail or WhatsApp accounts, nor should payment ever be remitted into a collection agency's personal account or third-party UPI handle. Enrolled legal advocates conduct forensic verification by cross-checking the letter with the bank's Zonal Stressed Assets Management Branch (SAMB) or official nodal officer prior to authorizing any compromise remittance.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Pradeep Venkatesh",
  authorRole: "Lead Cloud Architect (Whitefield, Bengaluru) • Tech Corridor Multi-Loan Restructuring",
  reviewBody:
    "Following a salary cut and medical emergency, I was juggling three personal loans and two credit cards totaling 18 lakhs. Third-party agents were threatening to visit my office reception in Electronic City. Team AMA Legal Solutions stepped in, issued immediate cease-and-desist notices to the collection agencies, and negotiated structured one-time settlements across all five accounts with a 54% overall waiver.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Loan Settlement Agency in Bangalore: Debt Settlement Lawyers in Bengaluru",
      description:
        "Facing personal loan default or credit card debt in Bengaluru? Consult verified debt settlement lawyers in Bangalore for fintech NBFC and bank negotiations.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Loan Settlement Agency in Bangalore: Debt Settlement Lawyers in Bengaluru",
      description:
        "Comprehensive legal roadmap on loan settlement and debt resolution in Bangalore. Learn how licensed Bar Council advocates halt recovery harassment in tech parks, represent borrowers across Bengaluru City Civil Court, and negotiate binding RBI OTS waivers with fintech NBFCs and private banks.",
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
      name: "Advocate-Led Loan Settlement & Debt Resolution Legal Representation in Bangalore",
      description:
        "Specialized legal counsel and formal compromise negotiation for Bengaluru borrowers facing credit card debt, personal loan defaults, and fintech NBFC recovery litigation, with full defense across Bengaluru City Civil Court, Magistrate Benches, DRT Bengaluru, and KSLSA National Lok Adalats.",
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
          name: "Bangalore",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Stage Advocate Protocol for Loan Settlement in Bengaluru",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Ledger Audit, Fintech KFS Scrutiny & Penal Interest Stripping",
          description:
            "Scrutinizing loan sanction letters, Key Fact Statements (KFS), and billing statements from Bengaluru banking branches and fintech NBFCs to eliminate unauthorized penal interest, hidden APR compounding, and illegal tech fees.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Emergency Anti-Harassment Legal Notice & Tech Park Injunction",
          description:
            "Issuing formal cease-and-desist notices to bank zonal heads and collection agencies across Bengaluru to immediately halt residential trespass in gated communities and unauthorized telecalling to tech corporate offices under RBI regulations.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Judicial Defense in Bengaluru City Civil Court & Magistrate Benches",
          description:
            "Entering formal legal appearance (vakalatnama) in summons proceedings under Section 138 NI Act, Section 25 PSSA, or summary civil suits to secure personal exemption and challenge jurisdiction.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Zonal Asset Recovery Branch & KSLSA Lok Adalat Compromise Negotiation",
          description:
            "Presenting documented medical or economic hardship dossiers directly to bank Stressed Assets Recovery Branches (SARB) and facilitating consent awards before Karnataka State Legal Services Authority Lok Adalat benches.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Sanction Letter Forensic Vetting, Supervised Payment & No Dues Certificate",
          description:
            "Vetting official system-generated OTS sanction letters, ensuring payment is remitted directly to the lender's designated escrow account, and securing unconditional No Dues Certificates and credit bureau closure reports.",
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
  { id: "quick-answer", title: "Quick Answer: Bangalore Loan Settlement" },
  { id: "bengaluru-debt-landscape", title: "Bengaluru Tech Corridor Debt Realities" },
  { id: "stopping-recovery-harassment", title: "Halting Harassment: Tech Parks & Gated Communities" },
  { id: "fintech-nbfc-defense", title: "Fintech App Defaults: Navi, KreditBee & Moneyview" },
  { id: "karnataka-money-lenders-act", title: "Karnataka Exorbitant Interest Act Safeguards" },
  { id: "judicial-representation-bengaluru", title: "Court Defense: City Civil Court & Magistrate Benches" },
  { id: "sec-25-pssa-138-ni-act", title: "Section 25 PSSA & Section 138 NI Act Defense" },
  { id: "lok-adalat-kslsa-process", title: "KSLSA Lok Adalat Consent Decrees" },
  { id: "comparative-defense-matrix", title: "Institutional Comparison Matrix" },
  { id: "the-5-stage-protocol", title: "5-Stage Advocate Settlement Protocol" },
  { id: "signature-infographic", title: "Settlement & Relief Architecture" },
  { id: "verifying-sanction-letter", title: "Verifying Bank Settlement Letters & NDC" },
  { id: "cibil-credit-rehabilitation", title: "CIBIL Bureau Reporting & Credit Repair" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Legal Advisory" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function BangaloreLoanSettlementClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("quick-answer");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "Bengaluru, Karnataka",
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
    const textMsg = `Hello AMA Legal Solutions, I require confidential advocate consultation regarding loan and credit card settlement in Bengaluru, Karnataka.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "Bengaluru, Karnataka"}
Matter Type: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory for fintech NBFC compromise, bank negotiations, Lok Adalat referral, court defense, and protection against recovery agent harassment."}`;
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
      cityState: "Bengaluru, Karnataka",
      assetType: "Unsecured Personal Loan & Credit Cards",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Loan Settlement Agency in Bangalore: Debt Settlement Lawyers in Bengaluru – AMA Legal Solutions";
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
      label: "Bangalore",
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
                <span>⚖️</span> Bengaluru &amp; Karnataka Bar Council Debt Settlement Advocates
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Loan Settlement Agency in Bangalore:{" "}
                <span className="text-[#D2A02A]">Debt Settlement Lawyers in Bengaluru</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Facing unmanageable personal loan default, credit card balances, or aggressive collection calls from fintech lending apps in Whitefield,
                Electronic City, Koramangala, or Indiranagar? AMA Legal Solutions provides senior Bar Council advocate representation across Bengaluru City
                Civil Court, Magistrate Benches, and the High Court of Karnataka. We halt unlawful telecaller harassment at tech parks and gated residences,
                defend against coercive Section 25 PSSA and Section 138 NI Act notices, and negotiate binding One-Time Settlement (OTS) compromise sanction
                letters directly with bank zonal credit committees and fintech NBFCs through transparent fixed legal advisory.
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
                  ✓ Bengaluru City Civil Court Representation
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  ✓ KSLSA Lok Adalat Consent Awards
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
                  src="/images/og/services/loan-settlement/bangalore.png"
                  alt="Loan Settlement Agency in Bangalore: Debt Settlement Lawyers in Bengaluru – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Bengaluru Dedicated Tech &amp; Banking Debt Relief Hub
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
                  <span className="text-[#D2A02A]">⭐</span> 5.0 Rating
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
                  <span className="text-[#D2A02A]">🏛️</span> Pan-Bengaluru
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  City Civil Court, Magistrate &amp; High Court
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
                  Bengaluru Debt Resolution &amp; Commercial Defense Hub
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
                    Quick Answer: Loan Settlement Agency in Bangalore
                  </h3>
                </div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                  A loan settlement agency in Bangalore comprises specialized banking advocates representing salaried professionals and entrepreneurs across Bengaluru in resolving overdue credit cards, unsecured personal loans, and fintech app debts. Operating under RBI prudential frameworks, advocates safeguard borrowers against unlawful home visits in localities like Whitefield, Koramangala, and Indiranagar, while executing legally binding compromise settlements through City Civil Courts or direct zonal banking negotiations.
                </p>
                <div className="mt-4 pt-3 border-t border-[#D2A02A]/20 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
                  <span>Authoritative Bar Council of India &amp; High Court of Karnataka Representation</span>
                  <span className="font-semibold text-[#5A4C33]">RBI Fair Practices Code &bull; KSLSA Lok Adalat Conciliation</span>
                </div>
              </div>

              {/* 2. Bengaluru Debt Realities & Tech Corridor Recovery Pressures */}
              <section id="bengaluru-debt-landscape" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Bengaluru Tech Corridor Debt Realities: Salaried Defaults &amp; Local Recovery Tactics
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  As the premier technological capital of India, Bengaluru hosts hundreds of thousands of high-earning software engineers, system architects, startup founders, and corporate professionals. Over recent years, aggressive digital retail lending and instant app-based credit have expanded rapidly across tech hubs like Electronic City, Whitefield, Bellandur, Marathahalli, Manyata Tech Park, and the Outer Ring Road (ORR). However, sudden macroeconomic shocks, tech sector layoffs, startup downsizings, stock option devaluations, or severe medical emergencies frequently disrupt cash flows, turning multiple concurrent EMIs into an overwhelming financial crisis.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When a borrower in Bengaluru defaults on credit cards or personal loans, institutional creditors (including major private banks like HDFC, ICICI, Axis, Kotak, and SBI) along with app lenders rapidly outsource delinquent accounts to third-party debt recovery agencies. Rather than initiating constructive financial restructuring, these unregulated collection syndicates deploy aggressive psychological coercion:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Workplace &amp; Tech Park Infiltration:</strong> Intimidating calls to corporate office switches, threatening to confront software engineers at campus reception lobbies in Electronic City or Whitefield tech parks, directly endangering employment status and professional reputation.
                  </li>
                  <li>
                    <strong>Gated Community Harassment:</strong> Unannounced residential visits to gated apartment complexes across Koramangala, Indiranagar, HSR Layout, Sarjapur Road, and Bannerghatta Road, creating public humiliation in front of neighbors and apartment security.
                  </li>
                  <li>
                    <strong>Fintech Digital Contact Scraping:</strong> Automated robocalling and WhatsApp spamming targeting family members and professional references, exploiting data scraped by instant loan apps in blatant violation of Reserve Bank of India data privacy guidelines.
                  </li>
                  <li>
                    <strong>Fabricated Legal Threats:</strong> Dispatching pseudo-legal notices from simulated police desks or unverified arbitration forums, falsely threatening non-bailable warrants or immediate salary attachment without court orders.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Overcoming this immense pressure requires engaging a verified <Link href="/services/loan-settlement/bangalore" className="text-[#D2A02A] font-semibold hover:underline">loan settlement agency in bangalore</Link> led by licensed High Court advocates. In contrast to unregulated commercial telecalling companies that lack legal standing, enrolled advocates utilize Bar Council statutory privilege to insulate borrowers, contest unlawful collections, and execute binding compromise agreements.
                </p>
              </section>

              {/* 3. Halting Harassment: Tech Parks & Gated Communities */}
              <section id="stopping-recovery-harassment" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Halting Harassment: Legal Protection for Tech Parks &amp; Gated Residences Across Bengaluru
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Under the Reserve Bank of India’s <em>Master Directions on Fair Practices Code</em> and its updated <em>Circular on Outsourcing of Financial Services &amp; Recovery Agents (August 2022 &amp; April 2023)</em>, the legal framework governing recovery practices in India is unequivocal: recovery personnel are strictly forbidden from resorting to verbal intimidation, persistent harassment, or privacy intrusions.
                </p>
                <blockquote className="border-l-4 border-[#D2A02A] pl-4 italic text-gray-700 bg-gray-50 py-3 rounded-r-lg">
                  &ldquo;Regulated Entities and their recovery agents shall not resort to intimidation or harassment of any kind, either verbal or physical, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the debtors’ family members, referees, or employers.&rdquo;
                  <span className="block text-xs font-semibold text-gray-500 mt-1 not-italic">
                    — Reserve Bank of India (RBI) Master Directions on Debt Collection
                  </span>
                </blockquote>
                <p className="text-gray-700 leading-relaxed">
                  When recovery agents trespass on residential premises in Bengaluru or intimidate tech professionals at their corporate campuses, AMA Legal Solutions intervenes decisively:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-gray-200 bg-[#FAF7F0] space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-sm flex items-center gap-2">
                      <span className="text-[#D2A02A]">🛡️</span> Immediate Cease-and-Desist Injunction
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We draft and serve formal legal notices upon the bank’s Zonal Stressed Assets Recovery Branch (SARB) and recovery agency directors, citing Section 351 of the Bharatiya Nyaya Sanhita, 2023 (BNS) for criminal intimidation and Section 308 for extortion.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-[#FAF7F0] space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-sm flex items-center gap-2">
                      <span className="text-[#D2A02A]">🏢</span> Corporate &amp; Apartment Shielding
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We instruct tech park security and apartment management associations (under Karnataka Apartment Ownership Act protocols) that unauthorized commercial telecallers have no legal right of entry without a judicial warrant, insulating your family and career.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Furthermore, under Section 126 of the Indian Evidence Act, 1872, all client communications with our enrolled advocates are protected by absolute legal privilege. Creditors and collection agencies are mandated by law to communicate exclusively with your appointed legal counsel, immediately ending unauthorized calls to your personal phone or workplace.
                </p>
              </section>

              {/* 4. Fintech App Defaults: Navi, KreditBee & Moneyview */}
              <section id="fintech-nbfc-defense" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Fintech App Defaults: Resolving Debts with Navi, KreditBee, Moneyview &amp; Fibe
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Bengaluru serves as the global epicenter for India&apos;s fintech revolution. Prominent NBFCs and digital lending applications—such as Navi Finserv, KreditBee (Krazybee Services), Moneyview (Whizdm Finance), Fibe (EarlySalary), and PayU Finance—maintain their primary operations and tech infrastructure in Bengaluru. While digital lending provides rapid disbursements, default triggers automated algorithms that escalate aggressive reminders and rapid bureau reporting.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Resolving fintech app debts in Bengaluru requires deep technical and statutory expertise under the <em>RBI Digital Lending Guidelines (August 2022)</em>:
                </p>
                <div className="space-y-3 my-4">
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <h3 className="font-bold text-gray-800 text-sm">1. Forensic Key Fact Statement (KFS) Audit</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Fintech lenders are legally mandated under RBI norms to provide a comprehensive Key Fact Statement disclosing the true Annual Percentage Rate (APR), processing deductions, and penal charges. Our advocates audit these contracts to identify regulatory violations, stripping fabricated rollover fees and compounding charges from the outstanding balance.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <h3 className="font-bold text-gray-800 text-sm">2. Elimination of Unauthorized Contact List Access</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      RBI regulations explicitly prohibit Digital Lending Apps (DLAs) from accessing mobile device data, phonebooks, or photo galleries. When aggressive fintech collection agents attempt contact-list extortion, our legal team files statutory non-compliance complaints with the RBI Ombudsman and the National Cyber Crime Reporting Portal.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <h3 className="font-bold text-gray-800 text-sm">3. Direct Escalation to Principal Grievance Redressal Officers</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Rather than negotiating with low-level outsourced telecallers, our advocates bypass third-party call centers entirely, issuing formal legal briefs directly to the Chief Compliance Officers and Nodal Legal Officers at the NBFC&apos;s corporate headquarters in Bengaluru, negotiating substantial waivers on documented hardship grounds.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Learn more about our dedicated frameworks for digital debt resolution in our specialized <Link href="/pay-day-loan-settlement" className="text-[#D2A02A] font-semibold hover:underline">pay day loan settlement</Link> and <Link href="/best-apps-for-managing-loan-settlement-offers-in-India" className="text-[#D2A02A] font-semibold hover:underline">best apps for managing loan settlement offers in India</Link> guides.
                </p>
              </section>

              {/* 5. Karnataka Money Lenders Act & Exorbitant Interest Protections */}
              <section id="karnataka-money-lenders-act" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Karnataka Exorbitant Interest Act Safeguards: Statutory Protections Against Predatory Financing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing financial distress in Bengaluru frequently encounter unregulated private financiers, unauthorized payday apps, or shadow lending platforms charging usurious rates. The State of Karnataka maintains robust legislative shields designed to protect citizens from predatory lending:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-sm">
                      Karnataka Prohibition of Charging Exorbitant Interest Act, 2004
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Enacted to eliminate &ldquo;meter vaddi&rdquo;, &ldquo;kandhu vaddi&rdquo;, and hourly interest exploitation. Section 3 strictly prohibits charging exorbitant interest above rates fixed by the government. Section 4 empowers borrowers to petition the court to deposit fair amounts and secure complete discharge, while Section 5 prescribes criminal imprisonment for violators.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-sm">
                      Karnataka Money Lenders Act, 1961
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Mandates strict licensing for all entities carrying on money-lending businesses in Karnataka. Under Section 11, any suit instituted by an unlicensed moneylender is liable to be dismissed forthwith. Courts possess statutory powers under Section 21 to reopen loan accounts and reduce excessive interest rates.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  When dealing with aggressive private lenders or fintech platforms charging predatory interest rates across Karnataka, our advocates invoke these statutory protections in court pleadings and legal notices, invalidating unfair contractual clauses and compelling lenders to accept fair, principal-centered settlements. For comprehensive regional details, explore our guide on <Link href="/services/loan-settlement/karnataka" className="text-[#D2A02A] font-semibold hover:underline">loan settlement services in karnataka</Link>.
                </p>
              </section>

              {/* 6. Judicial Representation: City Civil Court & Magistrate Benches */}
              <section id="judicial-representation-bengaluru" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Judicial Representation: Bengaluru City Civil Court, Magistrate Benches &amp; High Court
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When loan defaults persist beyond 90 to 180 days, lending institutions initiate formal legal recovery proceedings in Bengaluru courts. Many salaried professionals panic upon receiving formal court summonses, fearing immediate property attachment or imprisonment. However, with experienced advocate defense, these legal proceedings can be managed smoothly and leveraged into court-sanctioned compromise settlements:
                </p>
                <div className="space-y-4 my-4">
                  <div className="p-4 rounded-xl border border-gray-200 bg-[#FAF7F0]">
                    <h3 className="font-bold text-[#1a202c] text-sm">
                      Bengaluru City Civil and Sessions Court (Mayo Hall &amp; Main Complex)
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Banks frequently institute summary recovery suits under Order XXXVII of the Code of Civil Procedure (CPC) seeking monetary decrees. Our advocates enter formal appearance (vakalatnama), challenge procedural defects in loan documentation, and file comprehensive Leave to Defend applications. This judicial defense prevents ex-parte orders and provides the strategic leverage required to compel bank legal committees to offer substantial OTS concessions.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-[#FAF7F0]">
                    <h3 className="font-bold text-[#1a202c] text-sm">
                      Magistrate Courts (ACMM Benches, Nrupathunga Road &amp; Mayo Hall)
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Where lenders file criminal complaint cases under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, our advocates secure personal exemption under Section 205 CrPC / Section 228 BNSS. We contest signature verifications, statutory demand notice service periods, and presentation dates, insulating borrowers from coercive warrants while facilitating an amicable compromise.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-[#FAF7F0]">
                    <h3 className="font-bold text-[#1a202c] text-sm">
                      Debt Recovery Tribunal (DRT-1 &amp; DRT-2 Bengaluru)
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      For high-value debts exceeding the statutory threshold of 20 lakhs under the Recovery of Debts and Bankruptcy Act (RDBA), 1993, proceedings are adjudicated before DRT Bengaluru. Our senior banking advocates draft rigorous written statements contesting bank interest calculations, accounting ledgers, and penal compounding, providing robust commercial defense.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Crucially, under Section 60(1)(g) of the Code of Civil Procedure, 1908, employee salaries, government pensions, and statutory gratuity are legally protected from arbitrary execution or attachment. Lenders cannot simply freeze corporate salary accounts without a specific, non-appealable judicial attachment order, which our counsel vigorously contests.
                </p>
              </section>

              {/* 7. Section 25 PSSA & 138 NI Act Defense */}
              <section id="sec-25-pssa-138-ni-act" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Section 25 PSSA &amp; Section 138 NI Act Defense: Handling NACH ECS Mandate Failures
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When a borrower in Bengaluru experiences salary delays or liquidity constraints, monthly automated NACH electronic clearing service (ECS) debits fail. In response, lenders frequently issue aggressive statutory demand notices threatening prosecution under:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-sm">
                      Section 25 Payment and Settlement Systems Act, 2007 (PSSA)
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Governs dishonor of electronic funds transfer mandates. While quasi-criminal in format, Section 25 cases require strict statutory compliance by the complainant, including service of notice within 30 days and valid mandate generation. Crucially, offences under Section 25 are legally compoundable under Section 147 of the NI Act upon mutual compromise.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-sm">
                      Section 138 Negotiable Instruments Act, 1881
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Applies to physical cheque dishonor. Many digital lenders demand undated blank security cheques at loan disbursement, which they later present for full accelerated balances. Our advocates challenge the invocation of security instruments for disputed unliquidated damages, filing formal legal replies that refute criminal intent.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Upon receiving a statutory notice, borrowers must never ignore it. Within the mandatory 15-day response window, an enrolled advocate drafts a precise statutory reply establishing bona fide financial hardship, challenging incorrect ledger claims, and expressing willingness to resolve the matter amicably through conciliation. This formal legal reply forms the foundation for converting criminal exposure into a structured, court-sanctioned compromise settlement.
                </p>
              </section>

              {/* 8. KSLSA Lok Adalat Consent Decrees */}
              <section id="lok-adalat-kslsa-process" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  KSLSA Lok Adalat: Securing Legally Binding, Non-Appealable Consent Decrees
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For borrowers seeking an absolute, permanent resolution with zero risk of future litigation, the National Lok Adalat administered by the <strong>Karnataka State Legal Services Authority (KSLSA)</strong> in Bengaluru provides the gold standard of debt settlement. Governed by Sections 19 through 21 of the <em>Legal Services Authorities Act, 1987</em>, Lok Adalat proceedings facilitate amicable compromise between creditors and debtors under judicial supervision.
                </p>
                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="text-[#D2A02A] font-bold text-base mt-0.5">⚖️</span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">Conclusive Force of a Civil Court Decree</h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Under Section 21(1) of the Act, every award made by a Lok Adalat holds the conclusive status of a decree of a civil court. Once passed, neither the bank nor the borrower can file an appeal in any court, completely insulating the borrower from future claims or reopening of settled accounts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="text-[#D2A02A] font-bold text-base mt-0.5">💰</span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">100% Court Fee Refund &amp; Zero Stamp Charges</h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Under Section 21(2), where any pending suit or dispute is resolved through a Lok Adalat award, any court fees previously paid by the parties are refunded in full, making it a highly cost-efficient dispute resolution forum for both sides.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="text-[#D2A02A] font-bold text-base mt-0.5">📝</span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">Pre-Litigation Settlement Referral</h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Even if no formal court suit has been instituted, our advocates can petition the KSLSA for pre-litigation conciliation, summoning the bank’s authorized representatives to a compromise table where substantial principal waivers can be formalized amicably.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our legal team prepares the requisite compromise petition, accompanies borrowers during judicial conciliation sessions at the City Civil Court complex, and ensures that the final Lok Adalat award strictly incorporates terms for immediate CIBIL bureau closure and issuance of an unconditional No Dues Certificate.
                </p>
              </section>

              {/* 9. Institutional Comparison Matrix */}
              <section id="comparative-defense-matrix" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Institutional Comparison Matrix: Unregulated Agencies vs Advocate Representation in Bengaluru
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When dealing with debt distress in Bengaluru, borrowers must distinguish between unregulated commercial debt settlement companies, aggressive bank recovery telecallers, and licensed Bar Council advocate representation. Navigating legal and banking complexities requires statutory standing that commercial entities simply cannot provide:
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden shadow-xs border border-gray-200">
                    <thead className="bg-[#1a202c] text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="p-4 border-b border-gray-700">Evaluation Parameter</th>
                        <th className="p-4 border-b border-gray-700">Unregulated Telecaller Agency</th>
                        <th className="p-4 border-b border-gray-700">Commercial Settlement Firm</th>
                        <th className="p-4 border-b border-gray-700 bg-[#5A4C33] text-[#D2A02A]">
                          AMA Legal Solutions Advocates
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white text-xs md:text-sm">
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-semibold text-gray-900">Statutory Authority &amp; Standing</td>
                        <td className="p-4 text-red-600">None (Outsourced call center)</td>
                        <td className="p-4 text-amber-600">Private commercial company</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/40">
                          Licensed Advocates (Bar Council of India)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-semibold text-gray-900">Tech Park &amp; Residential Protection</td>
                        <td className="p-4 text-red-600">Causes workplace harassment</td>
                        <td className="p-4 text-gray-600">No power to issue injunctions</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/40">
                          Binding Cease-and-Desist Legal Notices
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-semibold text-gray-900">Fintech NBFC Negotiation Capability</td>
                        <td className="p-4 text-red-600">Enforces predatory claims</td>
                        <td className="p-4 text-gray-600">Generic call center emails</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/40">
                          Direct nodal compliance audits &amp; KFS review
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-semibold text-gray-900">Bengaluru Court Representation</td>
                        <td className="p-4 text-red-600">Cannot appear in court</td>
                        <td className="p-4 text-red-600">Barred from judicial appearance</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/40">
                          Full Vakalatnama in City Civil &amp; ACMM Courts
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-semibold text-gray-900">Section 25 PSSA / 138 NI Defense</td>
                        <td className="p-4 text-red-600">Instigates police complaints</td>
                        <td className="p-4 text-red-600">Advises ignoring summonses</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/40">
                          Formal legal reply, bail defense &amp; Lok Adalat
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-semibold text-gray-900">Fee Transparency &amp; Retainers</td>
                        <td className="p-4 text-gray-600">Hidden collection commissions</td>
                        <td className="p-4 text-red-600">Large advance retainers with zero guarantee</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/40">
                          Transparent fixed legal advisory without hourly markups
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-semibold text-gray-900">Enforceability of Settlement Letter</td>
                        <td className="p-4 text-red-600">High risk of fake WhatsApp slips</td>
                        <td className="p-4 text-amber-600">Unverified email confirmations</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/40">
                          Forensically vetted bank letter &amp; Lok Adalat decree
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-4 font-semibold text-gray-900">CIBIL Bureau Rectification</td>
                        <td className="p-4 text-red-600">Account marked as &lsquo;Written Off&rsquo;</td>
                        <td className="p-4 text-gray-600">Slow or non-existent follow-up</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/40">
                          Mandatory NDC clause &amp; RBI CICRA compliance
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Choosing licensed advocate representation ensures that every stage of your debt resolution is protected by statutory privilege and executed in compliance with Indian banking law. Review our detailed analysis on <Link href="/best-loan-settlement-agencies-in-india" className="text-[#D2A02A] font-semibold hover:underline">best loan settlement agencies in india</Link> for additional comparative insights.
                </p>
              </section>

              {/* 10. The 5-Stage Advocate Settlement Protocol */}
              <section id="the-5-stage-protocol" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Stage Advocate Protocol for Loan Settlement in Bengaluru
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  AMA Legal Solutions implements a systematic, legally rigorous protocol designed to protect the debtor’s civil rights, eliminate predatory penalties, and secure an official, binding compromise decree:
                </p>
                <div className="space-y-6 my-6">
                  <div className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-[#1a202c] text-base">
                        Forensic Ledger Audit, Fintech KFS Scrutiny &amp; Penal Interest Stripping
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Our banking advocates conduct an exhaustive forensic audit of all loan sanction agreements, monthly statements, and Key Fact Statements (KFS). We identify and strip away unauthorized penal compounding, illegal bounce charges, hidden APR hikes, and excessive technology platform fees levied by fintech lenders and private banks.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-[#1a202c] text-sm md:text-base">
                        Emergency Anti-Harassment Legal Notice &amp; Tech Park Injunction
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We issue formal advocate representation notices and statutory cease-and-desist warnings to bank zonal recovery heads and collection agencies. Under RBI directives and Section 351 BNS, all unauthorized home visits to gated communities in Koramangala or Whitefield, and harassment calls to corporate employers in Electronic City, are immediately enjoined.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg flex-shrink-0">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-[#1a202c] text-sm md:text-base">
                        Judicial Defense in Bengaluru City Civil Court &amp; Magistrate Benches
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Should the lender initiate legal recovery—under Section 25 PSSA, Section 138 NI Act, or summary civil suits—our advocates enter formal appearance (vakalatnama), challenge procedural service defects, and file leave to defend or bail applications, completely shielding the borrower from coercive warrants.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg flex-shrink-0">
                      4
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-[#1a202c] text-sm md:text-base">
                        Zonal Asset Recovery Branch &amp; KSLSA Lok Adalat Compromise Negotiation
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Counsel presents a comprehensive legal hardship dossier—documenting involuntary salary reductions, medical crises, or business cash flow constraints—directly to bank Zonal Stressed Assets Recovery Branches (SARB) or petitions the Karnataka State Legal Services Authority (KSLSA) Lok Adalat for an official conciliation award.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-lg flex-shrink-0">
                      5
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-[#1a202c] text-sm md:text-base">
                        Sanction Letter Forensic Vetting, Supervised Payment &amp; No Dues Certificate
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Prior to any payment, our legal team verifies the system-generated settlement letter from the bank’s central domain, ensuring all legal clauses and waivers are valid. Once payment is remitted directly to the lender’s designated loan account, we secure the unconditional No Dues Certificate and ensure proper CIBIL reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 11. Signature Editorial Infographic Card */}
              <div
                id="signature-infographic"
                className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#D2A02A] text-xl">🏛️</span>
                  <h3 className="text-sm md:text-base font-bold text-[#1a202c] uppercase tracking-wider">
                    Statutory Architecture: Bangalore Debt Settlement &amp; Legal Shield
                  </h3>
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                  <img
                    src="/images/og/services/loan-settlement/bangalore.png"
                    alt="Infographic: Bangalore Debt Settlement & Legal Shield Framework"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed text-center italic">
                  Figure 1.1: Institutional workflow illustrating advocate-led forensic audits, tech park anti-harassment injunctions, and KSLSA Lok Adalat consent decrees across Bengaluru.
                </p>
              </div>

              {/* 12. Verifying Bank Settlement Letters & NDC */}
              <section id="verifying-sanction-letter" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Verifying Bank Settlement Letters: Avoiding Fake WhatsApp Slips &amp; Securing Genuine NDCs
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A critical hazard facing distressed borrowers in Bengaluru is the proliferation of fraudulent settlement letters generated by aggressive collection agency telecallers. Eager to hit monthly recovery quotas, rogue recovery agents frequently send fake compromise letters via WhatsApp or unverified Gmail addresses, pocketing payments while the borrower remains liable for the full balance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Before remitting any compromise payment, our legal advocates subject the document to rigorous forensic verification:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Official Bank Letterhead &amp; Internal Reference:</strong> The letter must be printed on the official stationary of the lending bank or registered NBFC, containing a verifiable internal settlement sanction reference number.
                  </li>
                  <li>
                    <strong>Authorized Signatory Verification:</strong> The document must be executed by a designated officer (such as an Assistant General Manager or Chief Manager at the Stressed Assets Recovery Branch) with their official employee code and corporate email.
                  </li>
                  <li>
                    <strong>Explicit Principal &amp; Interest Waiver Clause:</strong> The letter must unequivocally state that upon receipt of the agreed compromise sum, all remaining principal, interest, penal charges, and legal expenses stand waived in full.
                  </li>
                  <li>
                    <strong>Mandatory NDC &amp; Court Withdrawal Commitment:</strong> The document must contain an express undertaking that the lender will issue an unconditional No Dues Certificate within 30 days and withdraw all pending cases under Section 138 NI Act or Section 25 PSSA.
                  </li>
                  <li>
                    <strong>Direct Account Disbursement Only:</strong> Settlement funds must be deposited exclusively into the borrower’s dedicated loan account or bank escrow—never into a collection agency&apos;s account, third-party wallet, or personal UPI ID.
                  </li>
                </ul>
              </section>

              {/* 13. CIBIL Bureau Reporting & Credit Repair */}
              <section id="cibil-credit-rehabilitation" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  CIBIL Bureau Reporting: Credit Rehabilitation After a Bangalore Loan Settlement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers frequently inquire about the impact of a loan compromise on their credit profile. When an unsecured personal loan or credit card is settled, credit information companies (CIBIL, Experian, CRIF High Mark, and Equifax) update the account status to &ldquo;Settled&rdquo; or &ldquo;Post-Settlement Written-Off&rdquo;. While this reflects that the full contractual principal was not repaid, it formally closes the toxic &ldquo;Overdue / Default / SMA-2&rdquo; status that completely freezes financial access.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Under the <em>Credit Information Companies (Regulation) Act, 2005 (CICRA)</em>, our legal team ensures that:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-sm">
                      Mandatory 30-Day Bureau Update
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Lenders are legally obligated to transmit updated account closure data to all four credit bureaus within 30 days of settlement payment clearance, converting delinquent statuses to closed settled accounts with zero outstanding balance.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
                    <h3 className="font-bold text-[#1a202c] text-sm">
                      Credit Rehabilitation Strategy
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Following receipt of the No Dues Certificate, borrowers can rebuild their credit score to 750+ over 12 to 24 months by utilizing secured credit cards (backed by fixed deposits) and maintaining disciplined, 100% on-time repayment schedules.
                    </p>
                  </div>
                </div>
              </section>

              {/* 14. Transparent Fixed Legal Advisory */}
              <section id="transparent-fixed-advisory" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Transparent Fixed Legal Advisory: Accessible Representation Without Surprise Retainers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At AMA Legal Solutions, we fundamentally believe that legal defense should be accessible to professionals in financial distress. Unlike traditional corporate law firms that demand exorbitant hourly billing and open-ended retainers, or unregulated commercial debt agencies that charge predatory advance commissions without legal accountability, our practice is founded on absolute transparency:
                </p>
                <div className="space-y-3 my-4">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                    <span className="text-[#D2A02A] font-bold text-lg mt-0.5">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Transparent Fixed Legal Advisory</h3>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        All advocate engagement terms are established upfront under clear, fixed advisory agreements. You will never encounter surprise retainers, hidden hourly markups, or unexpected billing increments.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                    <span className="text-[#D2A02A] font-bold text-lg mt-0.5">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Elimination of Excessive Law Firm Retainers</h3>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        We have restructured our banking defense workflow to eliminate the bureaucratic overhead of legacy corporate law firms, ensuring that salaried individuals and tech founders receive senior advocate representation at practical, accessible rates.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                    <span className="text-[#D2A02A] font-bold text-lg mt-0.5">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Why DIY Online Templates &amp; Telecallers Fail</h3>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Free automated online templates and commercial call centers lack the statutory authority to represent you in court or issue privileged legal notices. When bank recovery enters judicial stages, only a licensed advocate enrolled with the Bar Council can protect your freedom and assets.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 15. Frequently Asked Questions (8 Quotable Accordions) */}
              <section id="frequently-asked-questions" className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Frequently Asked Questions: Bengaluru Loan &amp; Debt Settlement
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Statutory answers to critical legal and procedural queries regarding debt compromise in Bangalore.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={faq.id}
                        className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-200 shadow-xs"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 hover:text-[#D2A02A] transition cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm md:text-base font-bold flex items-center gap-2">
                            <span className="text-[#D2A02A] font-extrabold text-sm">Q{idx + 1}.</span>
                            {faq.question}
                          </span>
                          <span className="text-lg text-gray-400 font-bold flex-shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 md:px-5 pb-5 text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* 16. More Legal Debt Relief Guides (Internal Link Grid) */}
              <section id="internal-guides" className="space-y-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                  More Legal Debt Relief Guides
                </h2>
                <p className="text-xs md:text-sm text-gray-600">
                  Explore our authoritative legal resources on debt restructuring, RBI compromise guidelines, and state-specific settlement frameworks:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  <Link
                    href="/services/loan-settlement/karnataka"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/60 block group"
                  >
                    <span className="text-xs font-bold text-gray-900 group-hover:text-[#D2A02A] transition block">
                      Loan Settlement in Karnataka →
                    </span>
                    <span className="text-[11px] text-gray-500 mt-1 block">
                      Statewide legal defense &amp; money lenders act framework
                    </span>
                  </Link>

                  <Link
                    href="/best-loan-settlement-agencies-in-india"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/60 block group"
                  >
                    <span className="text-xs font-bold text-gray-900 group-hover:text-[#D2A02A] transition block">
                      Best Loan Settlement Agencies in India →
                    </span>
                    <span className="text-[11px] text-gray-500 mt-1 block">
                      Advocate vs agency comparative analysis
                    </span>
                  </Link>

                  <Link
                    href="/best-apps-for-managing-loan-settlement-offers-in-India"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/60 block group"
                  >
                    <span className="text-xs font-bold text-gray-900 group-hover:text-[#D2A02A] transition block">
                      Apps for Loan Settlement Offers →
                    </span>
                    <span className="text-[11px] text-gray-500 mt-1 block">
                      Managing digital lending settlement verification
                    </span>
                  </Link>

                  <Link
                    href="/pay-day-loan-settlement"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/60 block group"
                  >
                    <span className="text-xs font-bold text-gray-900 group-hover:text-[#D2A02A] transition block">
                      Pay Day Loan Settlement →
                    </span>
                    <span className="text-[11px] text-gray-500 mt-1 block">
                      Stopping digital lending app harassment &amp; cyber extortion
                    </span>
                  </Link>

                  <Link
                    href="/services/loan-settlement/hyderabad"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/60 block group"
                  >
                    <span className="text-xs font-bold text-gray-900 group-hover:text-[#D2A02A] transition block">
                      Loan Settlement in Hyderabad →
                    </span>
                    <span className="text-[11px] text-gray-500 mt-1 block">
                      Cyberabad tech corridor legal debt defense
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition bg-gray-50/60 block group"
                  >
                    <span className="text-xs font-bold text-gray-900 group-hover:text-[#D2A02A] transition block">
                      Confidential Case Assessment →
                    </span>
                    <span className="text-[11px] text-gray-500 mt-1 block">
                      Consult our senior debt resolution advocates
                    </span>
                  </Link>
                </div>
              </section>

              {/* 17. References & Authority Links */}
              <section id="statutory-references" className="space-y-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                  References &amp; Regulatory Authorities
                </h2>
                <p className="text-xs md:text-sm text-gray-600">
                  Official statutory portals, judicial portals, and regulatory directions referenced in this Bangalore legal roadmap:
                </p>
                <ul className="space-y-2 text-xs md:text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D2A02A]">🏛️</span>
                    <a
                      href="https://kslsa.kar.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Karnataka State Legal Services Authority (KSLSA) — Official Portal (kslsa.kar.nic.in)
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D2A02A]">🏛️</span>
                    <a
                      href="https://bengaluru.dcourts.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Bengaluru City Civil and Sessions Court — Official e-Courts Portal (bengaluru.dcourts.gov.in)
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D2A02A]">🏛️</span>
                    <a
                      href="https://karnatakajudiciary.kar.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      High Court of Karnataka — Principal Bench Bengaluru (karnatakajudiciary.kar.nic.in)
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D2A02A]">📜</span>
                    <a
                      href="https://rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      Reserve Bank of India — Master Directions on Digital Lending &amp; Fair Practices Code (rbi.org.in)
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D2A02A]">🛡️</span>
                    <a
                      href="https://cybercrime.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      National Cyber Crime Reporting Portal — Ministry of Home Affairs (cybercrime.gov.in)
                    </a>
                  </li>
                </ul>
              </section>

              {/* Bottom Social Share */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-semibold text-gray-500">
                  Share this authoritative Bangalore legal guide:
                </span>
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

              {/* 18. AMA Company & Media Section */}
              <div
                id="ama-company-section"
                className="mt-12 p-6 md:p-8 rounded-2xl border-4 border-[#D2A02A] bg-white shadow-lg space-y-6"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src="/ama3.svg"
                      alt="AMA Legal Solutions Logo"
                      className="h-14 w-auto object-contain"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-[#1a202c]">
                        AMA Legal Solutions
                      </h3>
                      <p className="text-xs text-gray-500">
                        Senior Banking Litigation &amp; Dispute Resolution Advocates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF7F0] px-4 py-2 rounded-xl border border-[#D2A02A]/40">
                    <Stars count={5} />
                    <span className="text-xs font-bold text-gray-800">
                      5.0 Google Rating &bull; Verified Reviews
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Headquartered at Sushant Lok 2, Sector 57, Gurugram, with extensive court practice across the National Capital Region and pan-India judicial benches, AMA Legal Solutions represents borrowers in high-stakes debt disputes, banking arbitrations, DRT actions, and Lok Adalat conciliations. In Bengaluru, our senior advocates provide specialized legal defense for technology employees, startup founders, and commercial borrowers facing aggressive banking litigation and predatory recovery tactics.
                </p>

                <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-2">
                  <span className="text-xs font-bold text-gray-800 self-center mr-2">
                    Our Solutions:
                  </span>
                  <Link
                    href="/services/loan-settlement"
                    className="px-3 py-1.5 rounded-lg border-2 border-[#D2A02A] text-xs font-bold text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition"
                  >
                    Loan Settlement Services
                  </Link>
                  <Link
                    href="/services/banking-and-finance"
                    className="px-3 py-1.5 rounded-lg border-2 border-[#D2A02A] text-xs font-bold text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition"
                  >
                    Banking &amp; Finance Litigation
                  </Link>
                  <Link
                    href="/services/arbitration"
                    className="px-3 py-1.5 rounded-lg border-2 border-[#D2A02A] text-xs font-bold text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition"
                  >
                    Commercial Arbitration
                  </Link>
                  <Link
                    href="/contact"
                    className="px-3 py-1.5 rounded-lg border-2 border-[#D2A02A] text-xs font-bold text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition"
                  >
                    Consult an Advocate
                  </Link>
                </div>
              </div>
            </main>

            {/* Right Sticky Sidebar */}
            <aside className="space-y-8 sticky top-24">
              
              {/* About Author Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 text-center">
                <img
                  src="/anujbhiya.png"
                  alt="Advocate Anuj Anand Malik"
                  className="w-20 h-20 rounded-full mx-auto border-3 border-[#D2A02A] object-cover shadow"
                />
                <div>
                  <h3 className="font-extrabold text-[#1a202c] text-base">
                    <Link
                      href="/author/anuj-anand-malik"
                      className="hover:text-[#D2A02A] transition"
                    >
                      Anuj Anand Malik
                    </Link>
                  </h3>
                  <p className="text-xs text-gray-500">
                    Founder &amp; Senior Advocate
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Bar Council of Delhi &bull; Supreme Court Bar
                  </p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed text-left">
                  Specializing in complex commercial debt resolution, banking litigation, and high-value loan restructuring, Advocate Anuj Anand Malik has represented thousands of borrowers in obtaining binding court compromises and RBI OTS waivers.
                </p>
                <div className="pt-2 border-t border-gray-100 flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Need Legal Help? Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-lg space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D2A02A]/20 text-[#D2A02A] text-[11px] font-bold uppercase tracking-wider">
                  <span>⚡</span> Urgent Bangalore Legal Support
                </div>
                <h3 className="text-lg font-extrabold text-white leading-tight">
                  Facing Loan Default or Recovery Calls in Bengaluru?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Connect immediately with our senior debt resolution advocates. We stop unauthorized recovery calls, review your sanction terms, and execute binding court settlements.
                </p>
                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+918700343611"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#D2A02A] hover:bg-[#c29324] text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-md"
                  >
                    <span>📞</span> Call +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition border border-white/20 cursor-pointer"
                  >
                    <span>📋</span> Request Confidential Callback
                  </button>
                </div>
                <p className="text-[10px] text-gray-300 text-center">
                  100% Confidential &bull; Bar Council Legal Privilege
                </p>
              </div>

              {/* Client Reviews Card (Verbatim for Schema & Sidebar) */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Verified Client Review
                  </h3>
                  <span className="text-xs font-extrabold text-[#D2A02A] bg-amber-50 px-2 py-0.5 rounded border border-[#D2A02A]/30">
                    5.0 / 5.0
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#D2A02A]">
                  <Stars count={5} />
                </div>
                <blockquote className="text-xs text-gray-700 italic leading-relaxed border-l-2 border-[#D2A02A] pl-3 py-1">
                  &ldquo;{clientReviewData.reviewBody}&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-900">
                    {clientReviewData.authorName}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                    {clientReviewData.authorRole}
                  </p>
                </div>
              </div>

              {/* Related Guides Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Related Debt Relief Topics
                </h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/services/loan-settlement/karnataka"
                      className="text-gray-700 hover:text-[#D2A02A] transition flex items-center justify-between"
                    >
                      <span>Karnataka Loan Settlement</span>
                      <span className="text-gray-400">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/best-loan-settlement-agencies-in-india"
                      className="text-gray-700 hover:text-[#D2A02A] transition flex items-center justify-between"
                    >
                      <span>Top Settlement Agencies</span>
                      <span className="text-gray-400">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pay-day-loan-settlement"
                      className="text-gray-700 hover:text-[#D2A02A] transition flex items-center justify-between"
                    >
                      <span>Pay Day Loan Relief</span>
                      <span className="text-gray-400">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/loan-settlement/hyderabad"
                      className="text-gray-700 hover:text-[#D2A02A] transition flex items-center justify-between"
                    >
                      <span>Hyderabad Debt Defense</span>
                      <span className="text-gray-400">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-[#D2A02A] font-bold hover:underline transition flex items-center justify-between"
                    >
                      <span>Schedule Free Consultation</span>
                      <span>→</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </aside>
          </div>
        </div>

        {/* ══ INTERACTIVE INTAKE MODAL ══ */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border border-gray-200">
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer"
                aria-label="Close modal"
              >
                &times;
              </button>

              {!modalSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <span className="text-2xl">⚖️</span>
                    <h3 className="text-xl font-extrabold text-[#1a202c] mt-2">
                      Bengaluru Loan Settlement Consultation
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Privileged legal review by Bar Council advocates. We review your bank contracts, halt recovery calls, and negotiate RBI OTS waivers.
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
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="e.g. Rahul Sharma"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-hidden"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-hidden"
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          City / Locality
                        </label>
                        <input
                          type="text"
                          name="cityState"
                          value={formData.cityState}
                          onChange={handleFormChange}
                          placeholder="e.g. Whitefield, Bengaluru"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Loan / Credit Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-hidden bg-white"
                        >
                          <option value="Unsecured Personal Loan & Credit Cards">
                            Unsecured Personal Loan &amp; Cards
                          </option>
                          <option value="Fintech App Loan (Navi/KreditBee/Fibe)">
                            Fintech App Loan (Navi/KreditBee/Fibe)
                          </option>
                          <option value="Multiple Personal Loans">Multiple Personal Loans</option>
                          <option value="Section 25 PSSA / 138 Notice">
                            Section 25 PSSA / 138 NI Notice
                          </option>
                          <option value="Business / MSME Loan">Business / MSME Loan</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Brief Details of Loan or Recovery Issue
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={3}
                        placeholder="Mention total overdue debt, bank/app names, and whether recovery agents are calling your tech park or home..."
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-hidden"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-xl bg-[#D2A02A] hover:bg-[#c29324] text-white font-extrabold text-xs uppercase tracking-wider transition shadow-md cursor-pointer"
                      >
                        Submit Confidential Case Details
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900">
                    Request Received Successfully
                  </h3>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-gray-800">{formData.fullName}</span>. An advocate from our Bengaluru debt resolution panel will review your matter and contact you confidentially.
                  </p>
                  <div className="pt-2 space-y-2">
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-md cursor-pointer"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      Chat Directly with Advocate on WhatsApp
                    </button>
                    <button
                      onClick={resetModal}
                      className="w-full py-2 px-4 rounded-xl border border-gray-200 text-gray-600 text-xs hover:bg-gray-50 transition cursor-pointer"
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

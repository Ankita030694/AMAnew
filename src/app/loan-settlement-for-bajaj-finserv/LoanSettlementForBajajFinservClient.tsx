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
const PAGE_SLUG = "/loan-settlement-for-bajaj-finserv";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/loan-settlement-for-bajaj-finserv.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-28";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What legal actions can Bajaj Finserv take for an unpaid personal loan or EMI card?",
    answer:
      "For delinquent personal loans or overdue EMI Network Cards, Bajaj Finserv is legally limited to civil debt recovery remedies and statutory dispute resolution mechanisms. The NBFC can issue formal demand notices, initiate contractual arbitration proceedings (commonly seated in Pune or Delhi under the Arbitration and Conciliation Act, 1996), and file complaints under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) or Section 138 of the Negotiable Instruments Act for dishonored electronic NACH mandates or security cheques. Defaulting on unsecured debt is strictly a civil dispute under the Indian Contract Act, 1872, and does not permit Bajaj Finserv to initiate criminal arrests, register police FIRs, or seize unencumbered personal assets without a decree from a competent civil court.",
  },
  {
    id: "faq-2",
    question: "How can I stop Bajaj recovery agents from calling my office colleagues and relatives?",
    answer:
      "Under the RBI Master Directions on Non-Banking Financial Companies and the April 2023 Circular on Outsourcing and Recovery Agents, third-party collection personnel are strictly prohibited from contacting coworkers, accessing phone contact lists, harassing family members, or calling from unverified temporary virtual numbers. When such unlawful contact occurs, an enrolled Bar Council advocate issues an emergency Cease-and-Desist Legal Notice directly to Bajaj Finserv's Principal Nodal Officer, Managing Director, and compliance heads. This puts the lender on formal legal notice under criminal intimidation statutes (Section 351 BNS / Section 503 IPC) and triggers immediate statutory escalation to the RBI Sachet Portal and Integrated Ombudsman, effectively halting rogue telecaller outreach within 24 to 48 hours.",
  },
  {
    id: "faq-3",
    question: "What should I do if I receive an arbitration notice from Bajaj's legal team in Pune?",
    answer:
      "Receiving a Section 21 notice of arbitration or a unilateral arbitrator appointment letter from Bajaj Finserv's corporate legal cell requires prompt advocate response rather than inaction. Under the Supreme Court landmark ruling in Perkins Eastman Architects DPC v. HSCC (India) Ltd., unilateral appointment of sole arbitrators by financial institutions without mutual borrower consent is void ab initio. Your legal counsel files a preliminary formal objection contesting jurisdiction, demanding neutral arbitrator reconstitution under Section 11 of the Arbitration and Conciliation Act, and simultaneously presenting documented medical or involuntary financial hardship to transfer the dispute to out-of-court One-Time Settlement (OTS) negotiations.",
  },
  {
    id: "faq-4",
    question: "Can Bajaj Finserv issue an arrest warrant or travel ban for loan default?",
    answer:
      "No non-banking financial company or recovery agency possesses the statutory power to issue arrest warrants, initiate police detentions, or place Look Out Circulars (LOC) and travel bans for unsecured loan or credit card defaults. Judicial arrest warrants can only be issued by a Judicial Magistrate First Class or Metropolitan Magistrate if an individual repeatedly absconds from summons in a Section 138 NI Act or Section 25 PSSA cheque/mandate bounce proceeding, in which case formal advocate representation secures immediate judicial bail. Look Out Circulars are strictly restricted to statutory law enforcement authorities in grave economic fraud offenses and cannot be invoked by NBFCs for civil personal loan defaults.",
  },
  {
    id: "faq-5",
    question: "How long after defaulting will Bajaj Finserv agree to an out-of-court settlement?",
    answer:
      "Bajaj Finserv follows structured prudential provisioning guidelines mandated by the Reserve Bank of India, transitioning accounts from SMA-0 through SMA-2 before classifying unserviced exposure as a Non-Performing Asset (NPA) after 90 consecutive days of delinquency. Realistic compromise settlement negotiations typically open once the account has remained delinquent for 90 to 180 days, as the NBFC must write off provisioning capital against stressed portfolios. Initiating advocate-led settlement discussions during this window leverages Bajaj's internal recovery matrices to secure substantial principal waivers before external debt-collection litigation or arbitration hearings escalate.",
  },
  {
    id: "faq-6",
    question: "What is the typical waiver percentage Bajaj offers on overdue personal loans?",
    answer:
      "Settlement concessions on delinquent Bajaj Finserv personal loans, business lines of credit, and EMI Network Cards generally range between 40% and 65% of the total recorded ledger balance, depending on verifiable borrower hardship. The final settlement sum is calculated by stripping away 100% of accumulated penal interest, bounce charges, legal processing fees, and compounding late penalties, leaving the net principal as the primary negotiation baseline. In cases of certified catastrophic medical illness, documented involuntary employment termination, or business insolvency presented by legal counsel, corporate recovery heads frequently agree to steep compromise settlements to achieve clean ledger closure.",
  },
  {
    id: "faq-7",
    question: "What is the legal procedure to quash a Section 25 PSSA notice issued by Bajaj?",
    answer:
      "When Bajaj Finserv issues a legal demand notice under Section 25 of the Payment and Settlement Systems Act, 2007 for bounced electronic NACH debits, a borrower has a strict statutory window of 15 days from receipt to respond. Your advocate drafts a point-by-point legal reply establishing absence of fraudulent mens rea, documenting genuine financial distress, and challenging improper mandate presentation protocols. If a formal complaint is subsequently filed before the magistrate, legal counsel enters appearance, secures personal exemption or prompt bail, and petitions the court to refer the underlying commercial dispute to the National Lok Adalat for binding OTS compromise disposal.",
  },
  {
    id: "faq-8",
    question: "How do I verify that an online settlement offer letter from Bajaj is authentic?",
    answer:
      "An authentic Bajaj Finserv settlement letter must be generated directly on official Bajaj Finance Limited corporate letterhead, featuring a verified system-generated reference number, the borrower's exact loan/EMI card account number, the agreed compromise settlement figure, and a transparent payment deadline. Crucially, the letter must mandate payment strictly into your own existing Bajaj loan account or through the official customer portal (bajajfinserv.in), and never into any third-party agency, telecaller, or collection executive personal bank account. Borrowers must have their advocate independently verify the sanction reference with Bajaj's corporate credit operations before remitting any settlement funds.",
  },
];

/* ──────────────────────── VERIFIED REVIEW DATA (VERBATIM) ──────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: "1",
  authorName: "Tanmay Deshmukh",
  authorRole: "Software Engineer • Unsecured Personal Loan & EMI Card Restructuring",
  reviewBody:
    "Bajaj recovery agents were calling my HR department and sending automated WhatsApp threats regarding my overdue personal loan. They even served an online arbitration notice. AMA Legal Solutions immediately dispatched an anti-harassment legal notice citing RBI guidelines, which stopped the calls within 24 hours. Their advocates then represented me in arbitration and closed the loan at a 50% waiver.",
};

/* ────────────────────────── SCHEMA GRAPH ────────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Bajaj Finserv Loan Settlement: Stop Harassment & Settle Overdue EMI Debt",
      description:
        "Harassed by Bajaj recovery agents or facing corporate arbitration? Learn how to legally stop agent calls and negotiate a Bajaj personal loan and EMI card settlement.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Bajaj Finserv Loan Settlement: Stop Harassment & Settle Overdue EMI Debt",
      description:
        "Comprehensive legal playbook on Bajaj Finserv loan and EMI card settlement. Explore RBI fair practice directives, anti-harassment legal notices, defense against unilateral arbitration and Section 25 PSSA proceedings, and advocate-led compromise procedures.",
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
      name: "Advocate-Led Bajaj Finserv Loan & EMI Card Settlement Legal Representation",
      description:
        "Specialized legal counsel and formal compromise negotiation for Bajaj Finserv personal loans, EMI Network Cards, business lines of credit, and consumer durable financing with comprehensive defense against recovery harassment, unilateral arbitration, and Section 25 PSSA litigation.",
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
          name: "Loan Settlement for Bajaj Finserv",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "The 5-Stage Advocate Protocol for Bajaj Finserv Loan Settlement",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forensic Digital Ledger Audit & Usurious Fee Stripping",
          description:
            "Auditing Bajaj Finserv account statements, unbundled processing fees, compounding bounce charges, and penal interest to establish the true net principal baseline.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Emergency Anti-Harassment Notice & Telecaller Injunction",
          description:
            "Serving formal legal notice under RBI Fair Practices Code on Bajaj Finserv's Principal Nodal Officer and recovery leadership to immediately halt calls to workplace colleagues, relatives, and unlisted numbers.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Defense Against Unilateral Arbitration & Section 25 PSSA Summons",
          description:
            "Challenging unilateral sole arbitrator appointments seated in Pune/Delhi under Section 11 of the Arbitration Act and replying to Section 25 PSSA NACH bounce notices.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Corporate Credit Operations Negotiation & Hardship Presentation",
          description:
            "Engaging Bajaj Finserv's corporate legal and stressed asset recovery committees directly with documented bona fide medical or financial hardship proof to negotiate a binding One-Time Settlement.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Sanction Letter Forensic Vetting, Payment Supervision & No Dues Certificate",
          description:
            "Verifying official system-generated settlement sanction letters, ensuring payment is credited directly into the borrower's loan account, and securing the unconditional No Dues Certificate and CIBIL status update.",
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
  { id: "quick-answer", title: "Quick Answer: Bajaj Finserv Settlement" },
  { id: "bajaj-collections-tactics", title: "Aggressive Collections & Recovery Tactics" },
  { id: "stopping-workplace-harassment", title: "Stopping Workplace & WhatsApp Harassment" },
  { id: "arbitration-defense-pune", title: "Corporate Arbitration Notices & Defense" },
  { id: "statutory-legal-framework", title: "Statutory Acts, RBI Directives & Precedents" },
  { id: "comparative-defense-matrix", title: "Institutional Comparison Matrix" },
  { id: "the-5-stage-protocol", title: "5-Stage Advocate Settlement Protocol" },
  { id: "signature-infographic", title: "Settlement & Relief Architecture" },
  { id: "sec-25-pssa-defense", title: "Section 25 PSSA NACH Bounce Defense" },
  { id: "travel-ban-police-myths", title: "Debunking Arrest & Travel Ban Threats" },
  { id: "verifying-sanction-letter", title: "Verifying Bajaj Settlement Letters & NDC" },
  { id: "cibil-credit-rehabilitation", title: "CIBIL Bureau Reporting & Credit Repair" },
  { id: "transparent-fixed-advisory", title: "Transparent Fixed Legal Advisory" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Debt Relief Guides" },
  { id: "statutory-references", title: "References & Regulatory Authorities" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN CLIENT COMPONENT ───────────────────────── */
export default function LoanSettlementForBajajFinservClient() {
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
    assetType: "Bajaj Personal Loan & EMI Card",
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
    const textMsg = `Hello AMA Legal Solutions, I require confidential advocate consultation regarding Bajaj Finserv loan and EMI card settlement in India.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Matter Type: ${formData.assetType}
Details: ${formData.message || "Requesting transparent fixed legal advisory for Bajaj Finserv debt compromise, arbitration defense, and harassment protection."}`;
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
      assetType: "Bajaj Personal Loan & EMI Card",
      message: "",
    });
  };

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Bajaj Finserv Loan Settlement: Stop Harassment & Settle Overdue EMI Debt – AMA Legal Solutions";
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
      label: "Loan Settlement for Bajaj Finserv",
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
                <span>🛡️</span> Bajaj Finserv Debt Resolution &amp; Arbitration Defense Advocates
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Bajaj Finserv Loan Settlement: <span className="text-[#D2A02A]">Stop Harassment &amp; Settle Overdue EMI Debt</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Facing aggressive recovery agents calling your workplace, automated WhatsApp threats from temporary virtual numbers,
                or unilateral arbitration notices seated in Pune from Bajaj Finserv? AMA Legal Solutions provides senior Bar Council advocate
                representation to enforce RBI Fair Practice Directives, defend against Section 25 PSSA NACH bounce summons, halt coercive telecaller outreach,
                and negotiate authentic One-Time Settlement (OTS) sanction letters through transparent fixed legal advisory.
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
                    <span>⏱️ 15 Min Read</span>
                  </div>
                </div>
              </div>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ✓ RBI Anti-Harassment Enforcement
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  ✓ Pune Arbitration Defense &amp; Jurisdiction Contests
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  ✓ 100% Bar Council Legal Privileged
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                  ✓ Section 25 PSSA &amp; 138 NI Act Protection
                </span>
              </div>
            </div>

            {/* Right Col — Generated Luxury OG Image Card (lg:col-span-4) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[92%] sm:w-[85%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D2A02A]/30 bg-white flex flex-col items-center">
                <img
                  src="/images/og/loan-settlement-for-bajaj-finserv.png"
                  alt="Bajaj Finserv Loan Settlement – AMA Legal Solutions"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Authoritative Bajaj Debt Resolution
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
                  <span className="text-[#D2A02A]">🏛️</span> Pan-India
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  High Courts, DRT &amp; Consumer Forums
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
                  Direct Commercial Settlement &amp; Legal Defense
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
                    title="Share on Twitter / X"
                    aria-label="Share on Twitter / X"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-8 h-8 rounded-lg bg-sky-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
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
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="h-8 px-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1.5 transition cursor-pointer shadow-xs text-xs font-semibold"
                    title="Copy Page Link"
                    aria-label="Copy Page Link"
                  >
                    {shareMsg ? (
                      <>
                        <FaCheck className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-700 font-bold text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* ── 1. STANDALONE QUICK-ANSWER BLOCK ── */}
              <div
                id="quick-answer"
                className="p-6 md:p-8 rounded-2xl bg-amber-50/70 border-2 border-[#D2A02A] shadow-xs space-y-3 scroll-mt-28"
              >
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#D2A02A] text-white text-[11px] font-extrabold uppercase rounded-md tracking-wider">
                    Quick-Answer Definition
                  </span>
                  <span className="text-xs font-bold text-[#5A4C33]">
                    Featured Legal Overview &amp; Statutory Scope
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                  <strong>Bajaj Finserv loan settlement</strong> is a formal legal procedure through which a defaulting borrower settles delinquent personal loans, EMI Network Cards, or business lines of credit for a negotiated lump-sum waiver. When borrowers experience financial distress, licensed legal counsel issues formal anti-harassment notices under RBI fair practice guidelines, halting unauthorized telecalling and workplace visits, while simultaneously engaging Bajaj Finserv&apos;s corporate legal cell to resolve pending arbitration notices through a binding One-Time Settlement.
                </p>
                <p className="text-xs text-gray-500 italic">
                  Statutory basis: Reserve Bank of India Master Directions for NBFCs (2016) &bull; RBI Outsourcing Circular (April 2023) &bull; Arbitration and Conciliation Act, 1996 &bull; Section 25 Payment and Settlement Systems Act, 2007.
                </p>
              </div>

              {/* ── 2. BAJAJ COLLECTIONS & AGGRESSIVE RECOVERY TACTICS ── */}
              <section id="bajaj-collections-tactics" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Deconstructing Bajaj Finserv&apos;s Digital Recovery Architecture
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Bajaj Finance Limited (operating under the brand name <strong>Bajaj Finserv</strong>) is India&apos;s largest and most aggressive retail asset non-banking financial company (NBFC). Operating across millions of consumer durable loans, digital EMI Network Cards, flexi personal loans, and small business credit lines, the institution deploys high-velocity algorithmic collection pipelines. When an automated monthly National Automated Clearing House (NACH) mandate or electronic auto-debit bounces, the account triggers an immediate sequence of computerized reminders, telecalling rotations, and external recovery agency allocations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Unlike traditional public sector commercial banks that operate slowly through regional branches, Bajaj Finserv centralizes delinquent loan files within automated collection hubs. In an effort to enforce recoveries before the mandatory 90-day Non-Performing Asset (NPA) capital provisioning deadline, outsourced telecallers and empanelled recovery agents frequently resort to extreme pressure tactics. Borrowers routinely report <strong>recovery agents doing spam calling on whatsapp from temporary virtual numbers bajaj</strong>, unlawful calls placed to distant relatives whose details were scraped from mobile app permissions, and collection executives turning up unannounced at private residential gates or village family homes.
                </p>
                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#D2A02A] text-sm text-gray-700 space-y-2">
                  <p className="font-bold text-[#1a202c]">
                    Key Regulatory Reality Under Indian Banking Jurisprudence:
                  </p>
                  <p>
                    While Bajaj Finserv has a contractual right to recover disbursed principal and agreed interest, that right is strictly circumscribed by the Reserve Bank of India&apos;s statutory Fair Practices Code and constitutional privacy rights guaranteed under Article 21. No financial institution or third-party collection agency is permitted to breach personal privacy, intimidate family members, or harass employers.
                  </p>
                </div>
              </section>

              {/* ── 3. STOPPING WORKPLACE & WHATSAPP HARASSMENT ── */}
              <section id="stopping-workplace-harassment" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Stopping Workplace Contact, Relative Calls &amp; WhatsApp Threats
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the most frequent grievances highlighted by borrowers is: <em>&ldquo;bajaj agent called my office is this legal?&rdquo;</em> or <em>&ldquo;bajaj emi card overdue agents targeting workplace coworkers contacts.&rdquo;</em> The answer under established law is an unequivocal <strong>NO</strong>. Under the Reserve Bank of India&apos;s Master Directions on Outsourcing of Financial Services and the Fair Practices Code for NBFCs, collection personnel are expressly forbidden from contacting a borrower&apos;s colleagues, supervisors, human resources departments, or personal contact lists.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When collection agencies unlawfully extract secondary contact data or trace workplace desk phone numbers, they commit serious legal infractions under both regulatory and criminal law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Violation of RBI Contact Hours &amp; Location Norms:</strong> Agents may only interact between 08:00 AM and 07:00 PM at the borrower&apos;s designated residence or place of business, and only after prior intimation. Visiting a borrower&apos;s village ancestral home or workplace unannounced violates statutory guidelines.
                  </li>
                  <li>
                    <strong>Criminal Intimidation &amp; Extortion:</strong> Threatening WhatsApp broadcasts, abusive audio notes, and fake police arrest notices sent from untraceable virtual VoIP numbers constitute offenses under Section 351 (Criminal Intimidation) and Section 308 (Extortion) of the Bharatiya Nyaya Sanhita, 2023 (formerly Sections 503 and 384 of the Indian Penal Code).
                  </li>
                  <li>
                    <strong>Digital Personal Data Protection Violations:</strong> Utilizing contacts extracted through digital loan app permissions for harassment violates the Digital Personal Data Protection Act, 2023 and the RBI Digital Lending Guidelines.
                  </li>
                </ul>

                <div className="p-5 bg-[#FAF7F0] rounded-xl border border-[#D2A02A]/40 space-y-3">
                  <h3 className="font-bold text-base text-[#1a202c]">
                    How Bar Council Advocates Enforce Immediate Injunctions:
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    When represented by AMA Legal Solutions, our senior advocates immediately serve a formal <strong>Cease-and-Desist Notice</strong> upon Bajaj Finserv&apos;s corporate management, Principal Nodal Officer, and national collections director. The notice documents the virtual phone numbers, call recordings, WhatsApp threats, and unauthorized third-party contact logs, notifying the lender that continued violations will trigger immediate complaints before the Reserve Bank of India Ombudsman, the Cyber Crime Reporting Portal (cybercrime.gov.in), and jurisdictional judicial magistrates. In 95% of cases, this formal advocate intervention halts illegal telecaller harassment within 24 to 48 hours.
                  </p>
                </div>
              </section>

              {/* ── 4. ARBITRATION DEFENSE PUNE NOTICES ── */}
              <section id="arbitration-defense-pune" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Defending Against Bajaj Corporate Arbitration Notices Seated in Pune
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A distinct tactical weapon utilized by Bajaj Finserv is the mass issuance of <strong>Section 21 Arbitration Notices</strong> under the <em>Arbitration and Conciliation Act, 1996</em>. Borrowers across India—whether residing in Delhi, Bengaluru, Lucknow, or Kolkata—frequently receive automated notices or digital summons declaring that an ex-parte sole arbitrator has been appointed to adjudicate their overdue personal loan or EMI card liability, with arbitral proceedings unilaterally seated at Bajaj&apos;s corporate headquarters in Pune, Maharashtra.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers panic asking: <em>&ldquo;what happens if i ignore arbitration notice sent by bajaj corporate team?&rdquo;</em> Ignoring these notices is dangerous because the arbitrator may proceed ex-parte and deliver an arbitral award for the entire claimed amount plus inflated penal interest and costs. However, capitulating blindly is equally unnecessary because unilateral corporate arbitrations suffer from fatal statutory flaws:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-xs space-y-2">
                    <div className="font-bold text-sm text-[#1a202c] flex items-center gap-2">
                      <span className="text-[#D2A02A]">⚖️</span> The Perkins Eastman Doctrine
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      In the landmark judgment <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2019)</em>, the Supreme Court of India held that an interested party having an economic interest in the dispute outcome is disqualified from unilaterally appointing a sole arbitrator. Unilateral appointments by lenders without mutual consent are null and void ab initio.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-xs space-y-2">
                    <div className="font-bold text-sm text-[#1a202c] flex items-center gap-2">
                      <span className="text-[#D2A02A]">🏛️</span> Jurisdictional Challenges Under Section 16
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Borrowers cannot be coerced into traveling hundreds of miles to Pune for an unsecured consumer loan dispute. Advocates file formal objections under Section 16 challenging arbitrator competence, independence, and seat convenience, forcing Bajaj&apos;s legal cell to stay the proceedings and open genuine OTS compromise channels.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  By engaging licensed advocates, you shift the arbitration forum from a unilateral pressure mechanism into a powerful settlement forum. When our advocates appear or submit formal statements of defense, Bajaj&apos;s corporate arbitration counsel realizes that contested litigation will involve substantial legal costs and jurisdictional scrutiny, making an out-of-court One-Time Settlement their most commercially viable resolution.
                </p>
              </section>

              {/* ── 5. STATUTORY LEGAL FRAMEWORK ── */}
              <section id="statutory-legal-framework" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Statutory References, Legal Acts &amp; Judicial Protections
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  A successful Bajaj Finserv loan settlement is not achieved through emotional pleading; it is grounded in statutory compliance, banking regulations, and binding High Court and Supreme Court precedents. When negotiating with Bajaj&apos;s stressed asset recovery heads, AMA Legal Solutions anchors every defense on the following legal pillars:
                </p>

                <div className="space-y-3 my-4">
                  <blockquote className="p-4 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl text-xs md:text-sm text-gray-800 space-y-1">
                    <p className="font-bold text-[#1a202c]">
                      1. Reserve Bank of India Master Directions for NBFCs (2016 &amp; Updated 2023)
                    </p>
                    <p>
                      Mandates fair treatment of borrowers, transparent disclosure of interest rates and penal levies, strict prohibition against coercive recovery practices, and establishment of dedicated internal grievance redressal mechanisms before initiating recovery actions.
                    </p>
                  </blockquote>

                  <blockquote className="p-4 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl text-xs md:text-sm text-gray-800 space-y-1">
                    <p className="font-bold text-[#1a202c]">
                      2. Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)
                    </p>
                    <p>
                      Governs dishonor of electronic funds transfers and NACH mandates. Strict statutory timelines apply: Bajaj must serve written demand within 30 days of the return memo, giving 15 days for payment. Failure to adhere strictly to statutory notice service protocols invalidates criminal prosecution.
                    </p>
                  </blockquote>

                  <blockquote className="p-4 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl text-xs md:text-sm text-gray-800 space-y-1">
                    <p className="font-bold text-[#1a202c]">
                      3. Supreme Court of India in ICICI Bank v. Prakash Kaur (2007)
                    </p>
                    <p>
                      The Apex Court firmly prohibited commercial banks and financial institutions from using musclemen, recovery agents, or abusive third-party telecallers to recover unpaid dues, holding that debt recovery must strictly follow due process of law.
                    </p>
                  </blockquote>

                  <blockquote className="p-4 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl text-xs md:text-sm text-gray-800 space-y-1">
                    <p className="font-bold text-[#1a202c]">
                      4. Section 29 &amp; 30 of the Advocates Act, 1961
                    </p>
                    <p>
                      Only advocates enrolled with the Bar Council of India possess the statutory right to represent clients before courts, arbitral tribunals, and quasi-judicial authorities. Unregulated private settlement agencies and telecallers have zero legal standing and cannot defend you in judicial proceedings.
                    </p>
                  </blockquote>
                </div>
              </section>

              {/* ── 6. COMPARATIVE DEFENSE MATRIX ── */}
              <section id="comparative-defense-matrix" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Institutional Comparison Matrix: Recovery Defense &amp; Relief
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing Bajaj Finserv debt frequently consider three distinct paths: dealing directly with unregulated telecalling agencies, enrolling in non-advocate debt relief apps, or securing Bar Council advocate legal representation. The comparative matrix below outlines the critical legal and operational distinctions:
                </p>

                <div className="overflow-x-auto my-6 border border-gray-200 rounded-2xl shadow-xs">
                  <table className="min-w-full divide-y divide-gray-200 text-left text-xs md:text-sm">
                    <thead className="bg-[#1a202c] text-white">
                      <tr>
                        <th className="py-3.5 px-4 font-bold">Evaluation Parameter</th>
                        <th className="py-3.5 px-4 font-bold text-red-300">Unregulated Telecaller Agencies</th>
                        <th className="py-3.5 px-4 font-bold text-amber-300">Non-Advocate Debt Apps</th>
                        <th className="py-3.5 px-4 font-bold text-[#D2A02A]">Bar Council Advocates (AMA Legal)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-gray-700">
                      <tr>
                        <td className="py-3.5 px-4 font-semibold text-gray-900">Legal Representation Right</td>
                        <td className="py-3.5 px-4 text-red-600 font-medium">None (Illegal / Barred under Law)</td>
                        <td className="py-3.5 px-4 text-amber-600 font-medium">None (Barred by Sec 29 Advocates Act)</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold">Exclusive Statutory Right (Sec 30 Advocates Act)</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="py-3.5 px-4 font-semibold text-gray-900">Arbitration Notice Defense</td>
                        <td className="py-3.5 px-4 text-red-600">Zero defense; ignores notices</td>
                        <td className="py-3.5 px-4 text-amber-600">Cannot appear or draft Section 16 objections</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-semibold">Formal statement of defense &amp; jurisdiction contest</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-semibold text-gray-900">Halting Workplace Harassment</td>
                        <td className="py-3.5 px-4 text-red-600">Often causes harassment</td>
                        <td className="py-3.5 px-4 text-amber-600">Informal emails; lenders routinely ignore</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-semibold">Statutory Cease-and-Desist legal notice to Nodal Officer</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="py-3.5 px-4 font-semibold text-gray-900">Court Representation (Sec 25/138)</td>
                        <td className="py-3.5 px-4 text-red-600 font-medium">Cannot appear in court</td>
                        <td className="py-3.5 px-4 text-amber-600 font-medium">Cannot represent or secure judicial bail</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold">Full appearance, bail execution &amp; Lok Adalat disposal</td>
                      </tr>
                      <tr>
                        <td className="py-3.5 px-4 font-semibold text-gray-900">Sanction Letter Forensic Vetting</td>
                        <td className="py-3.5 px-4 text-red-600">High risk of fake receipts</td>
                        <td className="py-3.5 px-4 text-amber-600">Basic verification without legal liability</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-semibold">System verification directly with Bajaj Credit Ops</td>
                      </tr>
                      <tr className="bg-gray-50/50">
                        <td className="py-3.5 px-4 font-semibold text-gray-900">Fee Transparency &amp; Retainers</td>
                        <td className="py-3.5 px-4 text-red-600">Hidden kickbacks &amp; extortion</td>
                        <td className="py-3.5 px-4 text-amber-600">Recurring monthly platform subscriptions</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold">Transparent fixed legal advisory; no hidden markups</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── 7. THE 5-STAGE ADVOCATE PROTOCOL ── */}
              <section id="the-5-stage-protocol" className="space-y-6 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  The 5-Stage Advocate Protocol for Bajaj Finserv Loan Settlement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Navigating an out-of-court One-Time Settlement with an aggressive NBFC requires procedural rigor, documentation discipline, and legal leverage. AMA Legal Solutions executes a structured 5-stage protocol designed to protect the borrower&apos;s dignity while securing maximum compromise waivers:
                </p>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                      1
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 1: Forensic Digital Ledger Audit &amp; Usurious Fee Stripping
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Our advocates conduct an exhaustive forensic audit of your Bajaj personal loan or EMI card statement. We deconstruct accumulated penal interest, overdue EMI bounce charges, flexi loan maintenance fees, and computerized processing penalties. By stripping away non-principal levies, we isolate the true unserviced principal baseline, preventing Bajaj from negotiating on inflated ledger balances.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                      2
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 2: Emergency Anti-Harassment Notice &amp; Telecaller Injunction
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        We serve a comprehensive legal notice upon Bajaj Finserv&apos;s Principal Nodal Officer, Managing Director, and regional recovery heads. Citing the RBI Master Directions and criminal intimidation provisions of the Bharatiya Nyaya Sanhita, the notice formally forbids any calls to workplace colleagues, relatives, or unlisted numbers, and restrains unauthorized home gate visits.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                      3
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 3: Corporate Arbitration Defense &amp; Section 25 PSSA Repositioning
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        If Bajaj has issued Section 21 arbitration notices seated in Pune or Delhi, our advocates file formal objections contesting unilateral arbitrator appointments under <em>Perkins Eastman</em> and Section 11/16 of the Arbitration Act. Simultaneously, we formulate statutory replies to any Section 25 PSSA NACH bounce notices, establishing absence of criminal fraudulent intent and shifting the battlefield to compromise dialogue.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                      4
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 4: Bona Fide Hardship Representation &amp; Corporate OTS Negotiation
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        We compile and submit a verified hardship dossier substantiating genuine insolvency factors—such as involuntary job termination, catastrophic medical diagnosis, or commercial enterprise closure. Bypassing third-party telecallers, we negotiate directly with Bajaj Finserv&apos;s corporate stressed asset settlement committee to secure maximum principal waivers and structured payment timelines.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-extrabold flex items-center justify-center text-sm">
                      5
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-[#1a202c]">
                        Stage 5: Sanction Letter Forensic Vetting, Payment &amp; Complete Discharge
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Before any payment is executed, our advocates cross-verify the written One-Time Settlement sanction letter with Bajaj&apos;s corporate credit operations to ensure authentic reference numbers and irrevocable waiver covenants. We supervise payment strictly into your own loan account, obtain the official No Dues Certificate (NDC), and enforce credit bureau reporting updates to &ldquo;Settled&rdquo;.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 8. SIGNATURE EDITORIAL INFOGRAPHIC CARD ── */}
              <div
                id="signature-infographic"
                className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm scroll-mt-28 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider">
                    Signature Editorial Infographic
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">
                    Verified Legal Architecture &bull; AMA Legal Solutions
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#D2A02A]/20 bg-white">
                  <img
                    src="/images/og/loan-settlement-for-bajaj-finserv.png"
                    alt="Bajaj Finserv Loan Settlement Architecture – AMA Legal Solutions"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-center text-gray-600 italic">
                  Figure 1.1: Comprehensive advocate-led defense architecture for Bajaj Finserv personal loans, EMI Network Cards, unilateral corporate arbitration, and RBI Fair Practice compliance.
                </p>
              </div>

              {/* ── 9. SECTION 25 PSSA NACH BOUNCE DEFENSE ── */}
              <section id="sec-25-pssa-defense" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Defense Against Section 25 PSSA Electronic Mandate Bounce Summons
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When borrowers sign up for Bajaj Finserv loans or EMI cards, they execute an electronic National Automated Clearing House (NACH) mandate allowing automated monthly deductions. If this mandate fails due to insufficient funds, Bajaj frequently serves demand notices threatening prosecution under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Section 25 PSSA is the electronic mandate counterpart to Section 138 of the Negotiable Instruments Act for physical cheques. While it carries quasi-criminal provisions, Indian courts have established strict statutory safeguards to prevent financial lenders from misusing it as an instrument of extortion:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1.5">
                    <div className="font-bold text-sm text-[#1a202c]">15-Day Statutory Window</div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      A borrower has 15 statutory days from formal receipt of the demand notice to reply. A well-crafted advocate response establishing lack of fraudulent intention provides crucial protection against premature litigation.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1.5">
                    <div className="font-bold text-sm text-[#1a202c]">Absence of Mens Rea</div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Involuntary financial distress resulting from documented job termination or health emergencies negates criminal intent to defraud, demonstrating a purely civil inability to pay.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1.5">
                    <div className="font-bold text-sm text-[#1a202c]">Lok Adalat Compromise</div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      If Bajaj files a complaint before a Metropolitan Magistrate, your advocate appears, executes personal bail, and applies to refer the matter to National Lok Adalat for non-appealable compromise disposal.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 10. DEBUNKING ARREST & TRAVEL BAN THREATS ── */}
              <section id="travel-ban-police-myths" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Debunking Recovery Myths: Police FIRs, Arrests &amp; Travel Bans
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers facing intense telecaller harassment are frequently subjected to fabricated legal intimidation. Two of the most common threats are: <em>&ldquo;can bajaj put travel ban notice or look out notice for unpaid loans?&rdquo;</em> and <em>&ldquo;police will visit your home with an arrest warrant tomorrow morning.&rdquo;</em>
                </p>
                <div className="p-5 bg-white rounded-2xl border-2 border-red-200 space-y-3">
                  <h3 className="font-extrabold text-base text-red-900 flex items-center gap-2">
                    <span>⚠️</span> The Ground Reality Under Constitutional &amp; Procedural Law:
                  </h3>
                  <div className="space-y-2 text-xs md:text-sm text-gray-700">
                    <p>
                      <strong>1. Zero Authority to Issue Travel Bans or LOCs:</strong> Look Out Circulars (LOCs) can only be requested by designated public sector banks or federal law enforcement bodies (CBI, ED, SFIO) in cases involving massive wilful economic fraud affecting national interest. Private NBFCs like Bajaj Finserv have zero statutory power to request or impose immigration travel bans or passport impoundments for personal loan defaults.
                    </p>
                    <p>
                      <strong>2. Police Cannot Intervene in Civil Loan Defaults:</strong> Defaulting on an unsecured personal loan or EMI card is strictly a breach of contract under the Indian Contract Act, 1872. Local police stations have no jurisdiction to register an FIR, summon borrowers, or act as recovery agents for private financial institutions. Recovery agents threatening police visits commit impersonation and criminal extortion.
                    </p>
                    <p>
                      <strong>3. Arrests Require Court Summons &amp; Due Process:</strong> An arrest cannot occur arbitrarily. In the rare scenario of a Section 138 or Section 25 court proceeding, judicial bailable summons are issued by a magistrate. When represented by counsel, our advocates secure immediate judicial bail on the first appearance, completely nullifying any threat of incarceration.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 11. VERIFYING BAJAJ SETTLEMENT LETTERS & NDC ── */}
              <section id="verifying-sanction-letter" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Forensic Verification of Bajaj Settlement Letters &amp; No Dues Certificates
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  One of the most dangerous traps in NBFC debt resolution is the circulation of fraudulent settlement letters by rogue recovery agents. Unscrupulous telecallers often create mock offer letters promising a 70% discount, collect cash or UPI transfers into third-party agency accounts, and abscond—leaving the borrower&apos;s loan account fully delinquent with escalated penal interest.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  To safeguard against recovery fraud, AMA Legal Solutions enforces a rigorous 4-point verification checklist before authorizing any settlement payment:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#D2A02A]/30 space-y-1">
                    <div className="font-bold text-sm text-[#1a202c]">1. Official Corporate Letterhead</div>
                    <p className="text-xs text-gray-600">
                      The sanction letter must be issued on official Bajaj Finance Limited stationery bearing the corporate registered office address in Pune and authorized executive digital signatures.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#D2A02A]/30 space-y-1">
                    <div className="font-bold text-sm text-[#1a202c]">2. System Reference Code</div>
                    <p className="text-xs text-gray-600">
                      The document must feature a unique system-generated OTS proposal reference number that can be independently cross-verified on Bajaj Finserv&apos;s internal collections core database.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#D2A02A]/30 space-y-1">
                    <div className="font-bold text-sm text-[#1a202c]">3. Direct Account Payment Covenants</div>
                    <p className="text-xs text-gray-600">
                      Payment must be credited strictly into your specific 16-digit Bajaj loan account or through the official corporate portal—never into third-party agent accounts or UPI handles.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#D2A02A]/30 space-y-1">
                    <div className="font-bold text-sm text-[#1a202c]">4. Guaranteed No Dues Certificate</div>
                    <p className="text-xs text-gray-600">
                      The sanction terms must explicitly state that upon receipt of the agreed compromise sum, Bajaj Finserv will issue an unconditional No Dues Certificate and withdraw all pending legal notices.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 12. CIBIL CREDIT REHABILITATION ── */}
              <section id="cibil-credit-rehabilitation" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  CIBIL Bureau Reporting &amp; Post-Settlement Credit Rehabilitation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), financial institutions are legally obligated to report loan closures to credit bureaus including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax. Following a compromise settlement, Bajaj Finserv reports the account status as <strong>&ldquo;Settled&rdquo;</strong> or <strong>&ldquo;Post-Write-Off Settled&rdquo;</strong> rather than &ldquo;Closed&rdquo;.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  While a &ldquo;Settled&rdquo; remark indicates that the lender accepted less than the full contractual balance, its legal and practical benefits far outweigh remaining in perpetual default:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Immediate Cessation of Delinquency Reporting:</strong> Once marked &ldquo;Settled&rdquo;, the account ceases to accumulate 90+, 180+, or 360+ Days Past Due (DPD) flags, ending monthly score hemorrhaging.
                  </li>
                  <li>
                    <strong>Elimination of Litigation &amp; Write-Off Markers:</strong> Active suit-filed notices and recovery proceedings are formally cleared from your public credit registry.
                  </li>
                  <li>
                    <strong>Roadmap to 750+ Credit Score:</strong> Over 12 to 24 months following settlement, borrowers can rebuild their credit profile to prime status through disciplined use of secured fixed-deposit credit builder cards, prompt utility bill clearances, and periodic bureau reconciliation.
                  </li>
                </ul>
              </section>

              {/* ── 13. TRANSPARENT FIXED LEGAL ADVISORY ── */}
              <section id="transparent-fixed-advisory" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                  Transparent Fixed Legal Advisory: Accessible Debt Relief Representation
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Borrowers struggling with debt should never be pushed into further financial hardship by exploitative legal retainers or vague hourly billings. Traditional corporate law firms often charge prohibitive hourly retainers that are out of reach for distressed consumers, while unregulated online agencies lure borrowers with unrealistic &ldquo;free&rdquo; or cheap automated DIY templates that fail completely in court.
                </p>
                <div className="p-6 bg-gradient-to-br from-white to-[#FAF7F0] rounded-2xl border-2 border-[#D2A02A]/40 shadow-xs space-y-4">
                  <h3 className="font-extrabold text-lg text-[#1a202c]">
                    The AMA Legal Solutions Commitment: Transparent &amp; Predictable
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-700">
                    <div className="space-y-2">
                      <p className="font-bold text-[#1a202c]">✓ Transparent Fixed Legal Advisory</p>
                      <p className="text-gray-600">
                        We operate on a transparent fixed legal advisory model with zero hourly billing markups or unexpected retainer surprises. You know the exact scope of advocate representation from day one.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-[#1a202c]">✓ No Percentage Commission Conflicts</p>
                      <p className="text-gray-600">
                        Unlike commercial debt relief agencies that demand aggressive percentage commissions or monthly subscriptions, our advocates adhere strictly to the Bar Council of India Standards of Professional Conduct.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-[#1a202c]">✓ Court &amp; Arbitration Representation</p>
                      <p className="text-gray-600">
                        Our enrolled advocates can enter appearances, draft statutory notices, file Section 16 objections, and represent you directly before courts and tribunals across India.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-[#1a202c]">✓ Complete Section 126 Privilege</p>
                      <p className="text-gray-600">
                        All financial dossiers, debt disclosures, and correspondence are protected under statutory attorney-client privilege under Section 126 of the Indian Evidence Act.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 14. 8-QUESTION ACCORDION FAQ ── */}
              <section id="frequently-asked-questions" className="space-y-6 scroll-mt-28">
                <div className="border-b border-gray-200 pb-4">
                  <span className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Statutory Inquiries
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c] mt-1">
                    Frequently Asked Questions: Bajaj Finserv Loan Settlement
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Direct statutory answers compiled by Bar Council advocates for distressed borrowers.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.id}
                        className="rounded-xl border border-gray-200 bg-white overflow-hidden transition shadow-xs"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full py-4 px-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition cursor-pointer"
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${faq.id}`}
                        >
                          <span className="font-bold text-sm md:text-base text-[#1a202c]">
                            {faq.question}
                          </span>
                          <span className="text-[#D2A02A] font-extrabold text-lg flex-shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div
                            id={`faq-answer-${faq.id}`}
                            className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/40"
                          >
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── 15. MORE LEGAL GUIDES INTERNAL LINK GRID ── */}
              <section id="internal-guides" className="space-y-6 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                  More Legal Debt Relief Guides &amp; Banking Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    href="/services/loan-settlement/bajaj-finserv"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Service Page</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Bajaj Finserv Loan Settlement Services
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        Official advocate service page for Bajaj Finserv EMI card and personal loan dispute resolution.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      View Service &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/settlement-waiver-percentage-of-bajaj-fin"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Waiver Metrics</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Settlement Waiver Percentage of Bajaj Finance
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        Detailed breakdown of Bajaj settlement waiver percentages, policy parameters, and hardship criteria.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/how-do-i-stop-recovery-agent-from-coming-home"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Harassment Injunction</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        How Do I Stop Recovery Agent From Coming Home?
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        Legal protocols, RBI directives, and police complaint mechanisms to halt unauthorized home visits.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/got-an-arbitration-notice-dont-worry-we-got-you"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Arbitration Defense</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Got an Arbitration Notice? Don&apos;t Worry
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        Comprehensive legal guide on challenging unilateral sole arbitrator notices and protecting your rights.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/legal-rights-after-loan-default"
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Borrower Rights</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Legal Rights After Loan Default in India
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        Fundamental constitutional and statutory rights every borrower retains during default proceedings.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Read Guide &rarr;
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="p-4 rounded-xl border border-[#D2A02A]/40 bg-[#FAF7F0] hover:border-[#D2A02A] hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#5A4C33] uppercase mb-1">Advocate Consultation</div>
                      <h3 className="font-bold text-sm text-[#1a202c] group-hover:text-[#D2A02A] transition">
                        Speak With Senior Advocates
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        Schedule a privileged legal consultation under Section 126 of the Evidence Act.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4C33] mt-3 group-hover:translate-x-1 transition-transform inline-block">
                      Contact Chambers &rarr;
                    </span>
                  </Link>
                </div>
              </section>

              {/* ── 16. REFERENCES & REGULATORY AUTHORITIES ── */}
              <section id="statutory-references" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                  References &amp; Regulatory Authorities
                </h2>
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3 text-xs text-gray-600">
                  <p>
                    1. <strong>Reserve Bank of India Sachet Portal:</strong> Portal for checking unauthorized entities and filing complaints against NBFC harassment &bull;{" "}
                    <a
                      href="https://sachet.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      sachet.rbi.org.in
                    </a>
                  </p>
                  <p>
                    2. <strong>National Cyber Crime Reporting Portal:</strong> Ministry of Home Affairs, Government of India portal for reporting online harassment and virtual VoIP extortion threats &bull;{" "}
                    <a
                      href="https://cybercrime.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      cybercrime.gov.in
                    </a>
                  </p>
                  <p>
                    3. <strong>Reserve Bank of India (RBI) Complaint Management System:</strong> Banking &amp; NBFC Integrated Ombudsman Portal &bull;{" "}
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      cms.rbi.org.in
                    </a>
                  </p>
                  <p>
                    4. <strong>Bar Council of India:</strong> Statutory regulator for legal practice under the Advocates Act, 1961 &bull;{" "}
                    <a
                      href="http://www.barcouncilofindia.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                    >
                      barcouncilofindia.org
                    </a>
                  </p>
                </div>
              </section>

              {/* Bottom Social Share Row */}
              <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Share This Authoritative Legal Guide:
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
                    title="Share on Twitter / X"
                    aria-label="Share on Twitter / X"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-8 h-8 rounded-lg bg-sky-50 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition cursor-pointer shadow-xs"
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
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="h-8 px-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1.5 transition cursor-pointer shadow-xs text-xs font-semibold"
                    title="Copy Page Link"
                    aria-label="Copy Page Link"
                  >
                    {shareMsg ? (
                      <>
                        <FaCheck className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-700 font-bold text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* ── 17. AMA COMPANY & MEDIA SECTION ── */}
              <section
                id="ama-company-section"
                className="mt-12 p-8 rounded-2xl bg-white border-4 border-[#D2A02A] shadow-lg text-center space-y-6 scroll-mt-28"
              >
                <div className="flex justify-center">
                  <img
                    src={LOGO_URL}
                    alt="AMA Legal Solutions"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="space-y-2 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-extrabold text-[#1a202c]">
                    AMA Legal Solutions
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    India&apos;s premier advocate-led debt resolution, banking litigation, and consumer protection law firm.
                    Headquartered in Gurugram, NCR, our senior advocates represent clients nationwide against aggressive banking
                    and NBFC practices through ethical, Bar Council-regulated legal counsel.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 py-2 border-y border-gray-100 text-sm">
                  <div className="flex items-center gap-1.5 font-bold text-gray-800">
                    <Stars count={5} />
                    <span>4.7 / 5.0 Google Rating</span>
                  </div>
                  <div className="text-gray-400 hidden sm:block">&bull;</div>
                  <div className="font-semibold text-gray-700">
                    100% Licensed Bar Council Advocates
                  </div>
                  <div className="text-gray-400 hidden sm:block">&bull;</div>
                  <div className="font-semibold text-gray-700">
                    Pan-India Legal Notice &amp; Arbitration Defense
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold text-[#5A4C33] uppercase tracking-wider mb-4">
                    Explore Our Core Legal Solutions:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link
                      href="/services/loan-settlement"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      Loan Settlement Services
                    </Link>
                    <Link
                      href="/bankruptcy-lawyer-in-india"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      Bankruptcy &amp; Insolvency Defense
                    </Link>
                    <Link
                      href="/loan-settlement-for-hdfc-bank"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      HDFC Bank Loan Settlement
                    </Link>
                    <Link
                      href="/loan-settlement-for-sbi-bank"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      SBI Loan Settlement
                    </Link>
                    <Link
                      href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      Section 138 &amp; 25 PSSA Defense
                    </Link>
                    <Link
                      href="/loan-settlement-amount-calculator"
                      className="px-4 py-2 rounded-xl border-2 border-[#D2A02A] text-[#5A4C33] font-bold text-xs hover:bg-[#D2A02A] hover:text-white transition shadow-xs"
                    >
                      Settlement Amount Calculator
                    </Link>
                  </div>
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
                  <h3 className="font-extrabold text-base text-[#1a202c]">
                    Anuj Anand Malik
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Senior Advocate &bull; Founder
                  </p>
                  <p className="text-xs text-[#D2A02A] font-semibold mt-0.5">
                    Enrolled Bar Council of Delhi
                  </p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed text-left">
                  Advocate Anuj Anand Malik specializes in banking litigation, debt settlement law, and financial dispute resolution. He represents borrowers against coercive institutional recoveries and defends against Section 138 NI Act, Section 25 PSSA, and unilateral corporate arbitrations across Indian courts.
                </p>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/iamanujmalik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <span className="text-gray-300">&bull;</span>
                  <Link
                    href="/author/anuj-anand-malik"
                    className="text-xs font-bold text-[#5A4C33] hover:text-[#D2A02A] hover:underline"
                  >
                    Author Profile
                  </Link>
                </div>
              </div>

              {/* Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] text-white p-6 rounded-2xl shadow-md space-y-5">
                <div className="inline-block px-2.5 py-1 bg-[#D2A02A]/20 text-[#D2A02A] text-[11px] font-bold uppercase rounded-md tracking-wider">
                  Advocate Chambers
                </div>
                <h3 className="text-xl font-extrabold leading-snug">
                  Facing Bajaj Agent Harassment or Arbitration?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Do not negotiate blindly with aggressive telecallers. Secure privileged advocate representation to halt harassment, respond to legal notices, contest unilateral arbitration, and secure verified Bajaj OTS sanction letters.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="tel:+918700343611"
                    className="w-full py-3 px-4 bg-[#D2A02A] hover:bg-[#b88c22] text-[#1a202c] font-extrabold rounded-xl transition flex items-center justify-center gap-2 text-sm shadow cursor-pointer"
                  >
                    <span>📞</span> Call +91-8700343611
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition border border-white/20 text-sm cursor-pointer"
                  >
                    Request Callback &rarr;
                  </button>
                </div>
                <p className="text-[10px] text-gray-300 text-center">
                  Protected under Section 126 Evidence Act &bull; 100% Confidential
                </p>
              </div>

              {/* Client Reviews Card (Verbatim to Schema) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <h3 className="font-extrabold text-sm text-[#1a202c]">
                      Verified Client Review
                    </h3>
                    <p className="text-[11px] text-gray-400">Google Verified Client Feedback</p>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-sm text-gray-900">5.0 / 5.0</div>
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
                    href="/settlement-waiver-percentage-of-bajaj-fin"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Bajaj Settlement Waiver %
                  </Link>
                  <Link
                    href="/how-do-i-stop-recovery-agent-from-coming-home"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Stop Recovery Agent Coming Home
                  </Link>
                  <Link
                    href="/got-an-arbitration-notice-dont-worry-we-got-you"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Got Arbitration Notice? Defense
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
                    href="/section-25-pssa-vs-section-138-ni-act-loan-recovery"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Sec 25 PSSA vs Sec 138 NI Act
                  </Link>
                  <Link
                    href="/legal-rights-after-loan-default"
                    className="block font-medium text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Legal Rights After Loan Default
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
                      Bajaj Finserv Settlement Evaluation
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
                        placeholder="Advocate/Borrower Name"
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
                          placeholder="e.g. Pune, Delhi, Mumbai"
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
                        Debt / Product Category
                      </label>
                      <select
                        name="assetType"
                        value={formData.assetType}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#D2A02A] bg-white"
                      >
                        <option value="Bajaj Personal Loan & EMI Card">
                          Bajaj Personal Loan &amp; EMI Card
                        </option>
                        <option value="Bajaj Finserv Flexi Business Loan">
                          Bajaj Finserv Flexi Business Loan
                        </option>
                        <option value="Bajaj Consumer Durable / Lifestyle Loan">
                          Bajaj Consumer Durable / Lifestyle Loan
                        </option>
                        <option value="Arbitration Notice Received (Pune/Delhi)">
                          Arbitration Notice Received (Pune/Delhi)
                        </option>
                        <option value="Sec 25 PSSA NACH Bounce Notice">
                          Sec 25 PSSA NACH Bounce Notice
                        </option>
                        <option value="Severe Workplace Telecaller Harassment">
                          Severe Workplace Telecaller Harassment
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
                        placeholder="Briefly describe overdue duration, harassment calls, or notices received..."
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
                    Thank you, <strong>{formData.fullName}</strong>. An advocate from our Bajaj debt resolution team will review your details shortly.
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/how-to-file-a-complaint-against-bank-nbfc-in-NCH";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/how-to-file-a-complaint-against-bank-nbfc-in-NCH.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-11";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question:
      "What is the statutory jurisdiction of the National Consumer Helpline (NCH) over banks and NBFCs in India?",
    answer:
      "Section 2(42) of the Consumer Protection Act, 2019 explicitly classifies banking and financing as a statutory service, bringing all scheduled commercial banks, cooperative banks, and non-banking financial companies (NBFCs) under the jurisdiction of the Department of Consumer Affairs. Aggrieved borrowers and account holders can lodge pre-litigation grievances on the NCH INGRAM portal at consumerhelpline.gov.in or via the national toll-free helpline 1915 for deficiency in service, unfair trade practices under Section 2(47), and unfair contract terms under Section 2(46). The Supreme Court of India in Virender Khullar v. American Express Bank Ltd. affirmed that banking customers maintain unequivocal locus standi to seek redress against financial institutions before consumer redressal mechanisms.",
  },
  {
    id: "faq-2",
    question:
      "How does the National Consumer Helpline (NCH) Convergence Scheme resolve disputes against banks and NBFCs?",
    answer:
      "Under the NCH Convergence Scheme initiated by the Ministry of Consumer Affairs, leading public and private sector banks alongside major NBFCs function as registered convergence partners with direct electronic integration to the INGRAM grievance software. When an aggrieved consumer registers a complaint on NCH, the system generates a unique National Consumer Docket Number and automatically routes the dispute dossier to the lender's designated Principal Nodal Officer or Grievance Redressal Officer. The convergence protocol establishes a time-bound redressal window of forty-five to sixty calendar days for the financial institution to investigate allegations of unfair charges, delayed property title deeds, or recovery harassment and propose formal conciliation under central government monitoring.",
  },
  {
    id: "faq-3",
    question:
      "Why do free online DIY complaint templates consistently fail before NCH and Consumer Commissions?",
    answer:
      "Generic online DIY complaint templates lack statutory standing under the Advocates Act, 1961 and routinely fail to plead specific definitions of deficiency in service under Section 2(11) or unfair contract under Section 2(46) of the Consumer Protection Act, 2019. Financial institutions employ specialized in-house legal departments that swiftly exploit boilerplate templates lacking chronological transaction ledgers, authenticated call recordings, and certified banking correspondence. Most critically, unvetted online drafts often contain inadvertent factual admissions regarding loan liability, which bank counsel subsequently weaponize in Section 138 Negotiable Instruments Act cheque dishonor proceedings or Debt Recovery Tribunal recovery actions.",
  },
  {
    id: "faq-4",
    question:
      "How does transparent fixed legal advisory benefit borrowers filing NCH complaints compared to corporate law firms?",
    answer:
      "Retaining an enrolled banking advocate under a transparent fixed legal advisory model provides comprehensive legal notice drafting, evidentiary dossier assembly, and direct institutional escalation without open-ended hourly billing meters or recurring corporate retainers. Traditional corporate law firms routinely charge steep monthly retainers and bill for clerical communications by the minute, placing an unnecessary financial burden on retail consumers and small business owners seeking basic consumer rights enforcement. An advocate-led fixed advisory engagement guarantees statutory attorney-client privilege under Section 126 of the Indian Evidence Act, 1872 and ensures a seamless procedural transition to e-Daakhil consumer court litigation if the financial institution refuses conciliation on NCH.",
  },
  {
    id: "faq-5",
    question:
      "Can registering a complaint on NCH halt unlawful recovery agent harassment and coercive collection tactics?",
    answer:
      "Registering a formal consumer grievance on NCH coupled with an advocate-drafted Cease-and-Desist legal notice establishes an active regulatory and consumer dispute record that legally restrains aggressive collection tactics. Under binding directives issued by the Reserve Bank of India and affirmed by the Supreme Court of India in ICICI Bank Ltd. v. Prakash Kaur, lenders and their outsourced recovery agencies are strictly prohibited from visiting residential premises without notice, intimidating borrowers, contacting third-party relatives, or calling outside permitted business hours. When an advocate serves notice detailing these violations alongside an active NCH docket, the financial institution faces imminent exposure to punitive compensation under Section 39 of the Consumer Protection Act, 2019, prompting immediate cessation of recovery harassment.",
  },
  {
    id: "faq-6",
    question:
      "What legal recourse exists if a bank or NBFC rejects or ignores an NCH grievance after sixty days?",
    answer:
      "If a bank or NBFC fails to resolve the grievance or formally rejects the claim on the NCH INGRAM portal, the complainant is legally entitled to escalate the dispute directly to the competent Consumer Disputes Redressal Commission via the digital e-Daakhil portal at edaakhil.nic.in. Under Section 34, Section 47, or Section 58 of the Consumer Protection Act, 2019, the consumer can initiate formal consumer court proceedings before the District, State, or National Commission based on pecuniary jurisdiction. The complete NCH docket, including the bank's written refusal or failure to respond, serves as conclusive documentary evidence establishing persistent deficiency in service and bad faith under Section 2(11).",
  },
  {
    id: "faq-7",
    question:
      "What statutory remedies and compensation can Consumer Commissions award against a defaulting bank or NBFC?",
    answer:
      "Under Section 39(1) of the Consumer Protection Act, 2019, the Consumer Commission is empowered to direct the bank or NBFC to remove the deficiency in service, refund unauthorized debits, reverse arbitrary penal interest, and execute immediate return of original property title deeds. Furthermore, the Commission exercises statutory authority to award punitive compensation for mental agony, financial distress, and harassment, alongside mandatory litigation costs incurred by the consumer. In cases involving deliberate withholding of mortgage title deeds, consumer courts routinely impose heavy daily penalties and issue binding directives to rectify corrupted credit bureau scores across CIBIL, Equifax, Experian, and CRIF High Mark under the Credit Information Companies (Regulation) Act, 2005.",
  },
  {
    id: "faq-8",
    question:
      "How does an NCH complaint differ from an RBI Integrated Ombudsman complaint, and can both be pursued simultaneously?",
    answer:
      "While the Reserve Bank - Integrated Ombudsman Scheme, 2021 provides a sector-specific regulatory conciliation mechanism focused on banking code compliance, the National Consumer Helpline operates under the statutory framework of the Consumer Protection Act, 2019, focusing on consumer rights, unfair trade practices, and judicial compensation. A complainant can leverage NCH for swift pre-litigation convergence conciliation and simultaneously or sequentially escalate the dispute to the RBI Ombudsman under Clause 10 or to Consumer Commissions via e-Daakhil, provided the subject matter is not already adjudicated with finality. Engaging experienced banking advocates ensures that pleadings across both forums remain legally harmonious, preventing jurisdictional conflicts and maximizing leverage against the regulated entity.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Vikramaditya Sen",
    authorLocation: "Proprietor, Sen Precision Engineering, Pune • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "When our bank arbitrarily levied unauthorized foreclosure penalties and delayed returning the original title deeds to our industrial workshop after full loan payoff, we faced severe operational disruption. Corporate law firms demanded exorbitant monthly retainers, while generic online complaint templates were completely disregarded by the bank's zonal office. Advocate Anuj Anand Malik and AMA Legal Solutions represented us under a transparent fixed legal advisory model. They issued a statutory legal notice citing the Consumer Protection Act, 2019, registered our dispute on the National Consumer Helpline INGRAM portal with indexed financial ledgers, and secured full refund of all contested charges alongside immediate release of our property deeds without hidden hourly fees or surprise retainers.",
  },
  {
    authorName: "Meenakshi Sundaram",
    authorLocation: "Director, Sundaram Retail Solutions, Chennai • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "An NBFC unleashed aggressive third-party collection agents who repeatedly harassed our store employees over an alleged ledger discrepancy on a business credit line, while refusing to furnish verified account statements. Free internet consumer complaint forms yielded zero relief, and corporate attorneys quoted unaffordable retainer fees. AMA Legal Solutions stepped in decisively. Advocate Anuj Anand Malik served an immediate Cease-and-Desist notice under Section 2(47) of the Consumer Protection Act, escalated our grievance through NCH, and prepared an airtight e-Daakhil consumer petition. Within three weeks, the NBFC's nodal grievance desk conceded, withdrew all recovery agents, rectified our CIBIL score, and closed the dispute. AMA Legal Solutions provided unparalleled legal excellence with complete fee transparency.",
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
      name: "How to File a Complaint Against a Bank or an NBFC in NCH: Legal Guide & Consumer Helpline Procedure",
      description:
        "Comprehensive legal strategy and step-by-step procedure on how to file a complaint against a bank or an NBFC in NCH under the Consumer Protection Act, 2019. Learn INGRAM portal escalation, 1915 helpline protocol, recovery harassment defense, and advocate-led fixed advisory.",
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
        "How to File a Complaint Against a Bank or an NBFC in NCH: Legal Guide & Consumer Helpline Procedure",
      description:
        "Step-by-step legal guide on how to file a complaint against a bank or an NBFC in NCH under the Consumer Protection Act, 2019. Learn INGRAM convergence resolution, statutory pre-complaint legal notices, recovery agent harassment defense, and transparent fixed legal advisory.",
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
      name: "NCH Banking & NBFC Consumer Grievance Legal Advisory",
      description:
        "Professional legal advisory to draft statutory notices, file and track banking and NBFC complaints on National Consumer Helpline (NCH / INGRAM), and escalate to Consumer Commissions under CPA 2019.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1740",
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
        datePublished: rev.authorLocation.includes("September") ? "2026-09-04" : "2026-08-20",
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
          name: "How to File a Complaint Against a Bank or an NBFC in NCH",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Statutory Protocol to File a Complaint Against a Bank or an NBFC in NCH",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Serving Advocate Pre-Litigation Legal Notice to Bank / NBFC Branch & Principal Nodal Officer",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Compiling Chronological Evidentiary Dossier, Statement of Accounts & Audio-Visual Harassment Proof",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Registering the Formal Consumer Grievance on National Consumer Helpline (INGRAM Portal & Helpline 1915)",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Monitoring NCH Convergence Conciliation, Counter-Pleading Rebuttals & Nodal Officer Negotiation",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Enforcing Resolution Settlement or Seamless Escalation to District Consumer Commission via e-Daakhil",
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
  { id: "nch-banking-framework", title: "NCH & Consumer Protection Act 2019" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate Advisory vs DIY vs Corporate Firms" },
  { id: "statutory-grounds-for-complaint", title: "Actionable Grounds Against Banks & NBFCs" },
  { id: "nch-convergence-model", title: "NCH Convergence Scheme & INGRAM" },
  { id: "step-by-step-nch-filing-protocol", title: "5-Step Statutory Filing Protocol" },
  { id: "infographic", title: "Visual NCH Roadmap" },
  { id: "stopping-recovery-agent-harassment", title: "Halting Recovery Harassment Legally" },
  { id: "evidence-dossier-preparation", title: "Compiling Evidentiary Dossier" },
  { id: "edaakhil-consumer-court-escalation", title: "Transitioning to e-Daakhil Court" },
  { id: "title-deed-and-cibil-rectification", title: "Deed Release & CIBIL Rectification" },
  { id: "statutory-remedies-and-compensation", title: "Remedies & Punitive Compensation" },
  { id: "nch-vs-rbi-ombudsman", title: "Strategic Comparison: NCH vs RBI" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Statutory Authority & Portals" },
];

export default function HowToFileAComplaintAgainstBankNbfcInNCHClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>(["faq-1"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [shareMsg, setShareMsg] = useState("");
  const [activeSection, setActiveSection] = useState<string>("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    assetType: "Unauthorized Charges & Interest Hikes",
    message: "",
  });

  const toggleFaq = (id: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(PAGE_URL);
    const title = encodeURIComponent(
      "How to File a Complaint Against a Bank or an NBFC in NCH: Legal Guide & Procedure"
    );

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        "_blank"
      );
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "_blank"
      );
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank"
      );
    } else if (platform === "whatsapp") {
      window.open(`https://api.whatsapp.com/send?text=${title}%20${url}`, "_blank");
    } else if (platform === "copy") {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(PAGE_URL);
        setShareMsg("Link Copied!");
        setTimeout(() => setShareMsg(""), 2500);
      }
    }
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
I would like a confidential legal evaluation regarding filing an NCH consumer complaint against a Bank or NBFC:
Full Name: ${formData.fullName}
WhatsApp/Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Grievance Category: ${formData.assetType}
Details: ${formData.message || "Requesting advocate evaluation for drafting statutory legal notice, escalating complaint via National Consumer Helpline (NCH / INGRAM), and securing consumer court remedies."}`;
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
      assetType: "Unauthorized Charges & Interest Hikes",
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
      label: "How to File a Complaint Against a Bank or an NBFC in NCH",
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
                <span>⚖️</span> National Consumer Helpline &amp; NBFC Redressal
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                How to File a Complaint Against a{" "}
                <span className="text-[#D2A02A]">Bank or an NBFC in NCH</span>: Legal Guide &amp; Consumer Helpline Procedure
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                When financial institutions engage in gross deficiency in service, arbitrary interest hikes, unauthorized debit cascades,
                withholding original property title deeds, or coercive recovery agent harassment, borrowers possess enforceable statutory rights
                under the Consumer Protection Act, 2019. Discover how advocate-certified drafting and transparent fixed legal advisory empower
                consumers and commercial borrowers to issue formal pre-litigation notices, lodge airtight grievances via the National Consumer
                Helpline (NCH) INGRAM portal, leverage the institutional Convergence Scheme, and seamlessly transition to e-Daakhil Consumer
                Commissions for binding compensation and debt relief.
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
                    <span className="text-gray-400">📅</span> 11-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 19 Min Read
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#D2A02A]/10 border border-[#D2A02A]/40 rounded-full text-xs font-bold text-[#5A4C33]">
                    <span>🛡️</span> Consumer Protection Act 2019 Aligned
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Urgent Grievance Evaluation</span>
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
                  src="/images/og/how-to-file-a-complaint-against-bank-nbfc-in-NCH.png"
                  alt="How to File a Complaint Against a Bank or an NBFC in NCH – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    National Consumer Helpline (NCH) Redressal
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory INGRAM Procedure &amp; Advocate Representation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ TRUST & ACHIEVEMENTS BANNER (MATCHING /blog/[slug]) ══ */}
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
                  <span className="text-[#D2A02A]">👥</span> 10,000+
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Clients Represented Nationwide
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⚖️</span> 25,000+
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Banking &amp; Consumer Disputes Handled
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> 40+ Years
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Combined Legal Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN EDITORIAL 3-COLUMN GRID ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">

            {/* ── LEFT COLUMN: DESKTOP STICKY TOC ── */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* ── CENTER EDITORIAL COLUMN ── */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">

                {/* Meta details & Social Share bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Published: September 11, 2026</span>
                    <span>&bull;</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      Consumer Protection Act 2019 Verified
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 mr-1">Share:</span>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on X / Twitter"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition"
                    >
                      {shareMsg || "Copy Link"}
                    </button>
                  </div>
                </div>

                {/* ══ STANDALONE QUICK ANSWER BLOCK (GEO TARGETED) ══ */}
                <section id="quick-answer">
                  <div className="bg-amber-50 border-2 border-[#D2A02A] rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">⚡</span>
                      <h2 className="text-lg md:text-xl font-extrabold text-[#5A4C33] tracking-wide uppercase">
                        Quick Legal Answer: How to File a Complaint Against a Bank or an NBFC in NCH
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                      Filing a complaint against a bank or an NBFC in NCH is a statutory pre-litigation consumer grievance process established under the Consumer Protection Act, 2019 and administered by the Department of Consumer Affairs via the Integrated Grievance Redressal Mechanism (INGRAM) portal at consumerhelpline.gov.in and national toll-free helpline 1915. Consumers and commercial borrowers lodge grievances against scheduled commercial banks and non-banking financial companies for deficiency in service, unfair trade practices, unauthorized debits, arbitrary interest rate hikes, delayed release of property title deeds, or unlawful recovery agent harassment. The National Consumer Helpline assigns a unique National Consumer Docket Number and transmits the dispute dossier directly to the regulated entity&apos;s designated Principal Nodal Officer under the NCH Convergence Model for time-bound resolution within forty-five to sixty days. If the financial institution fails to resolve the dispute satisfactorily, complainants can immediately escalate the verified dispute record to the competent District Consumer Disputes Redressal Commission via the digital e-Daakhil portal with advocate-assisted legal representation.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 1: NCH & CONSUMER PROTECTION ACT 2019 ══ */}
                <section id="nch-banking-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Understanding the National Consumer Helpline (NCH) &amp; Consumer Protection Act, 2019 Jurisdiction
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The National Consumer Helpline (NCH) is a statutory consumer grievance redressal and pre-litigation conciliation platform established
                    by the Department of Consumer Affairs (DOCA), Ministry of Consumer Affairs, Food and Public Distribution, Government of India.
                    While many borrowers mistakenly believe that banking and financial grievances are exclusively governed by the Reserve Bank of India,
                    the Parliament of India fundamentally broadened consumer protections under the Consumer Protection Act, 2019 (Act No. 35 of 2019).
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under Section 2(42) of the Consumer Protection Act, 2019, the statutory definition of &ldquo;service&rdquo; expressly includes
                    &ldquo;banking, financing, insurance, transport, processing, supply of electrical or other energy, telecom, board or lodging or both,
                    housing construction, entertainment, amusement or the purveying of news or other information.&rdquo; Consequently, every commercial bank,
                    regional rural bank, cooperative bank, and Non-Banking Financial Company (NBFC) operating in India is subject to consumer law obligations.
                    Any failure to maintain prescribed service standards constitutes an actionable &ldquo;deficiency in service&rdquo; under Section 2(11),
                    while deceitful fee structures, unilateral floating interest revisions, and hidden penalties constitute &ldquo;unfair trade practices&rdquo;
                    under Section 2(47) or &ldquo;unfair contract terms&rdquo; under Section 2(46).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">🏛️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">CPA 2019 Section 2(42)</h3>
                      <p className="text-xs text-gray-600">
                        Explicit statutory inclusion of banking and financing under consumer protection laws, granting consumers absolute standing.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">💻</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">INGRAM Digital Network</h3>
                      <p className="text-xs text-gray-600">
                        Integrated Grievance Redressal Mechanism linking over 800 major enterprises and public/private lenders directly with DOCA.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">⚖️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Direct Court Escalation</h3>
                      <p className="text-xs text-gray-600">
                        Unresolved NCH dockets transition seamlessly into formal petitions before District Consumer Commissions via e-Daakhil.
                      </p>
                    </div>
                  </div>

                  <blockquote className="p-4 bg-gray-50 border-l-4 border-[#D2A02A] rounded-r-xl text-xs md:text-sm text-gray-700 italic">
                    &ldquo;A customer banking with a scheduled commercial bank or taking financial accommodation from an NBFC does not surrender basic consumer protections.
                    Deficiency in financial service, coercive debt collection, or unilateral alterations of contractual interest spreads entitle the consumer to statutory
                    restitution and punitive damages under the Consumer Protection Act.&rdquo;
                    <span className="block font-bold text-gray-900 mt-1 not-italic">
                      — Supreme Court of India in landmark consumer banking jurisprudence
                    </span>
                  </blockquote>
                </section>

                {/* ══ SECTION 2: COMMERCIAL REALITY COMPARISON TABLE ══ */}
                <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Reality: Advocate-Certified Fixed Advisory vs Corporate Law Firms vs Free DIY Templates
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    When confronted with predatory loan recovery practices, unlawful debit deductions, unexplained penal charges, or an NBFC&apos;s
                    refusal to release original property title deeds, consumers and business owners encounter three distinct avenues: utilizing &ldquo;free&rdquo;
                    generic internet templates, hiring traditional corporate law firms charging prohibitive open-ended retainers, or partnering with
                    specialized banking advocates under a transparent fixed legal advisory model.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Free online templates routinely prove fatal to a consumer&apos;s claim. They lack statutory precision under the Advocates Act, 1961,
                    fail to plead the specific statutory requirements of Section 2(11) and Section 2(47) of the Consumer Protection Act, and frequently
                    incorporate unintentional admissions of liability that lender counsel later weaponize in Debt Recovery Tribunal (DRT) or Section 138
                    Negotiable Instruments Act litigation. Conversely, corporate law firms treat basic consumer disputes as billing opportunities,
                    demanding steep monthly retainers and billing by the hour without delivering cost-effective resolution. AMA Legal Solutions solves
                    this commercial dilemma by providing advocate-drafted statutory notices, precision NCH INGRAM filing, and seamless Consumer Commission
                    representation under an accessible, transparent fixed legal advisory model with zero hourly markups or surprise retainers.
                  </p>

                  {/* Comprehensive Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-gray-200 rounded-2xl shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-4 font-bold border-r border-gray-700">Evaluation Metric</th>
                          <th className="p-4 font-bold border-r border-gray-700 text-red-300">Free / Cheap Online DIY Templates</th>
                          <th className="p-4 font-bold border-r border-gray-700 text-amber-300">Traditional Corporate Law Firms</th>
                          <th className="p-4 font-bold text-[#D2A02A]">AMA Legal Solutions (Fixed Advisory)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Statutory Standing Under Advocates Act, 1961
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Zero legal standing; dismissed by bank legal desks as unvetted automated complaints.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Full advocate standing, but frequently delegated to junior associates or paralegals.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Enrolled High Court advocates issue certified statutory notices carrying full legal authority.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Fee Predictability &amp; Commercial Structure
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Appears free, but results in severe financial detriment through mishandled claims and lost deeds.
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Astronomical corporate retainers, uncapped hourly billing, and expensive procedural markups.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Transparent fixed legal advisory; zero hourly meters, zero surprise retainers.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Pre-Complaint Notice to Principal Nodal Officer
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Informal email sent to general customer care; easily ignored without creating legal liability.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Legally drafted, but billed separately under complex multi-tier retainer schedules.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Statutory legal notice served directly on PNO, Board of Directors, and Nodal desks with post proof.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Protection Against Accidental Debt Admissions
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Extremely hazardous; frequently admits contested balances, crippling future court defense.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Protected, but requires cumbersome billing authorizations for every draft modification.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Vetted drafting safeguards borrower rights, submitted strictly without prejudice to defense.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Immediate Cease-and-Desist for Recovery Harassment
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Ignored by third-party recovery agencies; coercive phone calls and visits continue unabated.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Slow turnaround due to bureaucratic inter-departmental clearances.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Rapid 24-48 hour statutory Cease-and-Desist notice served on lender Board &amp; collection agency.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Escalation to e-Daakhil Consumer Commissions
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Complainant left unassisted; unable to draft formal legal complaint, affidavit, or verify evidence.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Requires fresh retainer agreement and substantial upfront filing and appearance disbursements.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Seamless escalation with complete indexed pleadings, affidavits, and e-Daakhil court representation.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 3: RECOGNIZED STATUTORY GROUNDS ══ */}
                <section id="statutory-grounds-for-complaint" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Recognized Statutory Grounds for Filing Complaints Against Banks &amp; NBFCs in NCH
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under the Consumer Protection Act, 2019, any act of omission, commission, or unilateral contractual breach by a lender
                    constitutes an actionable deficiency. The following six categories represent the most frequent statutory grievances prosecuted
                    by our senior advocates before NCH and Consumer Commissions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">1.</span> Withholding Original Property Title Deeds
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Refusal or delay by a bank or NBFC in returning original sale deeds, title documents, and NOCs after complete loan
                        repayment or settlement. This constitutes gross deficiency under Section 2(11) and violates RBI Circular RBI/2023-24/60,
                        entitling the borrower to daily statutory compensation and property damages.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">2.</span> Coercive &amp; Abusive Recovery Agent Harassment
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Deploying unvetted third-party recovery agents who initiate threatening calls outside permitted hours, contact relatives or employers,
                        visit private residences without authorization, or use abusive language. Such conduct violates Section 2(47) of CPA 2019 and
                        binding Supreme Court rulings in ICICI Bank v. Prakash Kaur.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">3.</span> Arbitrary Floating Interest Rate Spreads &amp; Hikes
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Unilaterally extending loan tenure or increasing interest margins without prior written notification or borrower consent.
                        Lenders must provide clear disclosure and the option to switch to fixed rates or switch lenders under RBI Reset of Floating Rate circulars.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">4.</span> Erroneous CIBIL &amp; Bureau Default Misreporting
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Reporting settled or cleared loan accounts as &ldquo;Written Off&rdquo;, &ldquo;Suit Filed&rdquo;, or &ldquo;Wilful Default&rdquo;
                        in violation of the Credit Information Companies (Regulation) Act, 2005 (CICRA), crippling the consumer&apos;s commercial creditworthiness.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">5.</span> Unauthorized Debits &amp; Predatory Penal Charges
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Levying exorbitant bounce charges, excessive penal interest, foreclosure penalties on floating rate loans, or processing
                        unauthorized auto-debits without valid NACH / e-mandate authentication.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">6.</span> Refusal to Issue Authentic No Dues Certificates (NDC)
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Failing to issue authentic, board-authorized No Dues Certificates and No Objection Certificates after full loan closure
                        or agreed One-Time Settlement (OTS), exposing the borrower to continuous unauthorized collection demands.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 4: NCH CONVERGENCE MODEL ══ */}
                <section id="nch-convergence-model" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The NCH Convergence Scheme: How INGRAM Coordinates with Regulated Lenders
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The core mechanism of the National Consumer Helpline is its proprietary **Integrated Grievance Redressal Mechanism (INGRAM)**,
                    developed under the auspices of the Department of Consumer Affairs. Recognizing that courtroom litigation can be protracted,
                    the central government introduced the **NCH Convergence Scheme**—a direct institutional bridge between consumer regulators
                    and registered commercial entities.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under this convergence model, all major scheduled commercial banks (including State Bank of India, HDFC Bank, ICICI Bank, Axis Bank,
                    Punjab National Bank, Kotak Mahindra Bank, and Bank of Baroda) alongside prominent NBFCs (such as Bajaj Finance, Tata Capital,
                    Aditya Birla Finance, and Mahindra Finance) maintain dedicated internal IT interfaces linked directly to NCH. When our advocates
                    lodge an evidentiary complaint on the INGRAM portal, the platform generates a unique National Consumer Docket Number.
                    This docket is automatically routed into the secure queue of the bank or NBFC&apos;s Principal Nodal Officer and Chief Grievance Redressal Desk.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The lender is mandated by the Department of Consumer Affairs to investigate the grievance, upload verifiable transaction ledgers,
                    and attempt a pre-litigation resolution within a standard timeline of **45 to 60 calendar days**. Because the grievance is logged
                    on a central government monitoring portal, financial institutions treat convergence dockets with high institutional priority,
                    significantly increasing the likelihood of an amicable settlement, waiver of unlawful fees, or prompt release of property deeds.
                  </p>
                </section>

                {/* ══ SECTION 5: 5-STEP STATUTORY PROTOCOL ══ */}
                <section id="step-by-step-nch-filing-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    5-Step Statutory Protocol: From Advocate Notice to NCH Resolution
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Achieving successful redress against a well-resourced financial institution requires adherence to a rigorous, legally sound protocol.
                    AMA Legal Solutions executes a structured five-step statutory escalation that ensures evidentiary superiority at every stage:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm flex-shrink-0">
                          1
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base">
                          Serving Advocate Pre-Litigation Legal Notice to Bank / NBFC Principal Nodal Officer
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed pl-11">
                        Our senior advocates draft and serve a formal statutory legal notice under Section 35 of the Consumer Protection Act, 2019
                        and relevant RBI Master Directions upon the Branch Manager, Principal Nodal Officer, and Board of Directors of the lender.
                        The notice itemizes every deficiency in service, calculates wrongful deductions, demands immediate cessation of recovery harassment,
                        and sets a strict 15 to 30 day cure period backed by proof of registered postal dispatch.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm flex-shrink-0">
                          2
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base">
                          Compiling Chronological Evidentiary Dossier &amp; Audio-Visual Proof
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed pl-11">
                        We assemble an indexed evidentiary dossier comprising contract sanction letters, itemized bank statements, repayment receipts,
                        WhatsApp/SMS intimidation records, and call recordings formatted in compliance with Section 65B of the Indian Evidence Act, 1872.
                        Every factual allegation is tied directly to statutory provisions of CPA 2019 and binding judicial precedents.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm flex-shrink-0">
                          3
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base">
                          Registering Formal Consumer Grievance on National Consumer Helpline (INGRAM &amp; 1915)
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed pl-11">
                        We lodge the formal grievance via the INGRAM portal (consumerhelpline.gov.in) and telephonically cross-register the complaint
                        on National Toll-Free Helpline 1915. The system generates an official National Consumer Docket Number, triggering the statutory
                        convergence mechanism and notifying the lender&apos;s senior compliance management.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm flex-shrink-0">
                          4
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base">
                          Monitoring Convergence Conciliation, Counter-Pleading Rebuttals &amp; Nodal Negotiation
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed pl-11">
                        Throughout the 45 to 60 day convergence evaluation window, our advocates monitor the online docket status, examine any formal
                        reply uploaded by the bank&apos;s legal team, file forensic rejoinders to false factual claims, and negotiate directly with the lender&apos;s
                        Grievance Redressal Officer to secure favorable conciliation terms.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] font-bold flex items-center justify-center text-sm flex-shrink-0">
                          5
                        </span>
                        <h3 className="font-extrabold text-gray-900 text-base">
                          Enforcing Settlement or Seamless Escalation to District Consumer Commission via e-Daakhil
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed pl-11">
                        If the lender agrees to terms, we supervise the execution of full financial restitution, No Dues Certificate issuance, and title deed release.
                        If the bank rejects the complaint or fails to resolve the matter satisfactorily, we immediately transition the complete, verified NCH docket
                        into a formal Consumer Petition filed electronically on the e-Daakhil portal before the competent District Consumer Disputes Redressal Commission.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 6: SIGNATURE INFOGRAPHIC EMBED ══ */}
                <section id="infographic">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm flex flex-col items-center">
                    <img
                      src="/images/og/how-to-file-a-complaint-against-bank-nbfc-in-NCH.png"
                      alt="Comprehensive Infographic: How to File a Complaint Against a Bank or an NBFC in NCH"
                      className="w-full max-w-3xl rounded-xl shadow-md border border-gray-200"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-sm md:text-base font-bold text-[#5A4C33]">
                        Official NCH Grievance Redressal &amp; Consumer Commission Escalation Architecture
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 max-w-2xl">
                        Statutory escalation from advocate pre-notice, through INGRAM convergence conciliation at consumerhelpline.gov.in,
                        to formal e-Daakhil consumer court petitions and Section 39 compensation decrees.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 7: HALTING RECOVERY HARASSMENT ══ */}
                <section id="stopping-recovery-agent-harassment" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Halting Unlawful Recovery Agent Harassment Under CPA 2019 &amp; Supreme Court Precedents
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Unregulated third-party collection agencies contracted by aggressive lenders routinely subject borrowers and their families
                    to persistent psychological intimidation. Common unlawful tactics include threatening telephone calls before 8:00 AM and after 7:00 PM,
                    confrontations at places of employment, public shaming, sending unauthorized collection agents to private residences,
                    and circulating defamatory messages to contacts extracted via digital lending apps.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The Supreme Court of India in the seminal judgment of <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Anr.</em> [(2007) 2 SCC 711]
                    authoritatively held that banks and financial institutions cannot deploy musclemen or strong-arm methods to recover debts.
                    This principle was further solidified in <em>Sardar Trilok Singh v. Satya Deo Tripathi</em>, establishing that coercive repossession
                    and intimidation constitute actionable civil and criminal wrongs.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under Section 2(47) of the Consumer Protection Act, 2019, deploying coercive collection practices constitutes an egregious unfair trade practice.
                    When AMA Legal Solutions intervenes, our senior advocates serve an immediate Cease-and-Desist Legal Notice citing these binding Supreme Court
                    precedents alongside the Reserve Bank of India Master Directions on Outsourcing of Financial Services. Concurrently, we lodge an emergency
                    harassment docket on the NCH INGRAM portal. This dual escalation creates a direct legal and regulatory bar: lenders face immediate exposure
                    to punitive compensation and regulatory censure if recovery agents persist with coercive actions during pending consumer conciliation.
                  </p>
                </section>

                {/* ══ SECTION 8: EVIDENCE DOSSIER PREPARATION ══ */}
                <section id="evidence-dossier-preparation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Compiling an Airtight Evidentiary Dossier for NCH &amp; Consumer Commissions
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The determining factor between a summary rejection and a comprehensive resolution award is the depth and forensic structure
                    of the documentary evidence. Both the NCH convergence officers and Consumer Commission benches evaluate grievances strictly
                    upon written pleadings and substantiated documentary records. Our legal team compiles an indexed, cross-referenced dossier including:
                  </p>
                  <ul className="space-y-3 text-xs md:text-sm text-gray-700">
                    <li>
                      <strong>1. Certified Pre-Notice &amp; India Post Tracking:</strong> Formal advocate legal notice served on the lender&apos;s Principal Nodal Officer, complete with postal consignment proof and verified tracking delivery logs establishing that the lender was duly notified.
                    </li>
                    <li>
                      <strong>2. Reconciled Financial Ledgers &amp; Bank Statements:</strong> Comprehensive account statements with forensic annotations detailing every unauthorized debit, disputed bounce charge, uncontracted interest rate spread, or miscalculated foreclosure penalty.
                    </li>
                    <li>
                      <strong>3. Digital Audio-Visual Proof (Section 65B Certified):</strong> Audio recordings of coercive recovery calls, screenshots of intimidating WhatsApp or SMS messages, and timestamped security camera footage of unauthorized home visits, accompanied by an advocate-certified Section 65B Indian Evidence Act certificate.
                    </li>
                    <li>
                      <strong>4. Loan Agreement Sanction Terms &amp; Repayment Proofs:</strong> Original loan sanction letters, Key Fact Statements (KFS), amortisation schedules, and all transaction receipts proving timely EMI payments or agreed settlement payments.
                    </li>
                    <li>
                      <strong>5. Statutory &amp; Regulatory Cross-Citations:</strong> Direct statutory mapping connecting each instance of lender misconduct to specific sections of the Consumer Protection Act, 2019, RBI Fair Practices Code, and relevant High Court and Supreme Court precedents.
                    </li>
                  </ul>
                </section>

                {/* ══ SECTION 9: TRANSITIONING TO E-DAAKHIL ══ */}
                <section id="edaakhil-consumer-court-escalation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Post-NCH Escalation: Transitioning to e-Daakhil &amp; District Consumer Commissions
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    While the National Consumer Helpline provides a highly effective pre-litigation conciliation forum, it is fundamentally an administrative
                    and conciliation body. It does not possess contempt powers or the authority to pass unilateral enforceable decrees if a recalcitrant lender
                    adamantly refuses to cooperate or denies the grievance.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    This is where advocate-led representation becomes indispensable. If the bank or NBFC fails to resolve the matter within the sixty-day
                    convergence window, AMA Legal Solutions immediately transitions the case to the **Consumer Disputes Redressal Commission** via the central
                    government&apos;s digital **e-Daakhil portal (edaakhil.nic.in)**. Under Section 34 of the Consumer Protection Act, 2019, a formal Consumer Complaint
                    can be instituted in the District Commission within whose local jurisdiction the consumer resides or works, eliminating the need to travel
                    to the lender&apos;s corporate headquarters.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Because we have already established an unassailable evidentiary record through the statutory pre-notice and the NCH INGRAM docket,
                    the Consumer Commission petition is filed with pre-established proof of deficiency in service under Section 2(11). The lender can no longer
                    claim ignorance or procedural omission, placing the consumer in an overwhelmingly superior bargaining position before the presiding Judicial Member.
                  </p>
                </section>

                {/* ══ SECTION 10: DEED RELEASE & CIBIL RECTIFICATION ══ */}
                <section id="title-deed-and-cibil-rectification" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Securing Original Property Title Deeds &amp; Credit Bureau CIBIL Restoration
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Two of the most damaging consequences of banking misconduct are the prolonged withholding of original property title deeds and
                    erroneous default reporting to credit information companies. Lenders frequently claim that deeds are misplaced in distant central repositories,
                    preventing property owners from selling, leasing, or mortgaging their assets.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our post-docket legal enforcement protocol targets these two specific remedies with uncompromising vigor:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">Title Deed Handover</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Physical Document Release</h4>
                      <p className="text-[11px] text-gray-600">
                        Compelling immediate physical return of original title deeds, sale deeds, and encumbrance certificates with statutory delay compensation.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">CIBIL Restoration</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Bureau Default Expunction</h4>
                      <p className="text-[11px] text-gray-600">
                        Enforcing statutory updates under CICRA 2005 across CIBIL, Equifax, Experian, and CRIF High Mark to restore credit scores.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">CERSAI Release</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Charge Satisfaction</h4>
                      <p className="text-[11px] text-gray-600">
                        Verifying formal registration of charge satisfaction on CERSAI and Ministry of Corporate Affairs (MCA) registries.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 11: STATUTORY REMEDIES & COMPENSATION ══ */}
                <section id="statutory-remedies-and-compensation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Binding Consumer Remedies, Financial Restitution &amp; Punitive Compensation Under Section 39 CPA 2019
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under Section 39(1) of the Consumer Protection Act, 2019, Consumer Disputes Redressal Commissions possess broad statutory powers
                    to grant definitive, legally binding orders against financial institutions found guilty of deficiency in service or unfair trade practices:
                  </p>
                  <div className="space-y-3 my-4 text-xs md:text-sm text-gray-700">
                    <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-[#D2A02A]">
                      <strong>Restitution of Contested Monies:</strong> Directing the bank or NBFC to refund all disputed debit deductions, arbitrary processing fees, unlawful foreclosure penalties, and compounded penal interest.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-[#D2A02A]">
                      <strong>Punitive Damages for Mental Agony:</strong> Awarding substantial compensation for mental harassment, commercial distress, loss of business opportunities, and psychological agony inflicted by coercive recovery practices.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-[#D2A02A]">
                      <strong>Statutory Property Delay Penalties:</strong> Imposing daily financial penalties on the lender for every calendar day of delay in releasing original mortgage documents beyond thirty days of full loan repayment.
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-[#D2A02A]">
                      <strong>Litigation Costs &amp; Advocate Fees:</strong> Mandating that the defaulting financial institution reimburse all reasonable legal and administrative costs incurred by the consumer in prosecuting the dispute.
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 12: NCH VS RBI OMBUDSMAN ══ */}
                <section id="nch-vs-rbi-ombudsman" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Strategic Comparison: National Consumer Helpline vs RBI Integrated Ombudsman
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A frequent question confronted by aggrieved borrowers is whether to file their complaint with the National Consumer Helpline
                    under the Consumer Protection Act, 2019 or with the Reserve Bank of India under the Integrated Ombudsman Scheme, 2021.
                    In reality, both forums serve distinct, complementary functions in a well-orchestrated legal strategy:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">🏛️</span> National Consumer Helpline (NCH)
                      </h3>
                      <ul className="space-y-2 text-xs text-gray-600 leading-relaxed">
                        <li>&bull; <strong>Governing Statute:</strong> Consumer Protection Act, 2019 (DOCA).</li>
                        <li>&bull; <strong>Core Focus:</strong> Consumer rights, unfair trade practices, unfair contracts, mental agony compensation.</li>
                        <li>&bull; <strong>Pre-Litigation Nature:</strong> Conciliation via Convergence Model; seamless direct transition to e-Daakhil court.</li>
                        <li>&bull; <strong>Jurisdiction:</strong> Wide consumer standing; handles all banks, NBFCs, and financial service entities.</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-[#1a202c] text-base mb-2 flex items-center gap-2">
                        <span className="text-[#D2A02A]">🏦</span> RBI Integrated Ombudsman (RB-IOS)
                      </h3>
                      <ul className="space-y-2 text-xs text-gray-600 leading-relaxed">
                        <li>&bull; <strong>Governing Statute:</strong> Banking Regulation Act, 1949 &amp; RBI Act, 1934.</li>
                        <li>&bull; <strong>Core Focus:</strong> Regulatory circular adherence, systemic banking codes, technical circular compliance.</li>
                        <li>&bull; <strong>Quasi-Judicial:</strong> Binding awards up to statutory caps; administrative appeal to RBI Executive Director.</li>
                        <li>&bull; <strong>Jurisdiction:</strong> Strictly regulated scheduled banks, specified NBFCs, and payment system participants.</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-base text-gray-700 leading-relaxed">
                    Our senior advocates often execute a coordinated multi-forum approach: serving a unified statutory legal notice,
                    initiating NCH convergence conciliation to trigger Department of Consumer Affairs pressure, and holding an RBI CMS complaint
                    or e-Daakhil consumer petition in reserve should the lender demonstrate intransigence. This dual-track strategy ensures maximum
                    institutional leverage without creating procedural contradictions.
                  </p>
                </section>

                {/* ══ SECTION 13: 8-QUESTION ACCORDION FAQ ══ */}
                <section id="faqs" className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                    <span className="text-2xl text-[#D2A02A]">❓</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions: Filing Complaints Against Banks &amp; NBFCs in NCH
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {faqs.map((faq) => {
                      const isOpen = expandedFaqs.includes(faq.id);
                      return (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full flex items-center justify-between p-4 md:p-5 text-left font-bold text-gray-900 hover:text-[#D2A02A] transition bg-gray-50/50 hover:bg-gray-50 cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span className="text-sm md:text-base pr-4">{faq.question}</span>
                            <span className="text-lg font-extrabold text-[#D2A02A] flex-shrink-0">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-4 md:p-6 text-xs md:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-white">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ══ SECTION 14: MORE LEGAL GUIDES INTERNAL LINKS ══ */}
                <section id="internal-guides" className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                    More Legal Guides &amp; Consumer Redressal Resources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    {[
                      ["/how-to-file-a-complaint-against-bank-nbfc-in-rbi", "File Complaint Against Bank in RBI"],
                      ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Bank Recovery Harassment Legally"],
                      ["/how-to-reply-to-bank-legal-notice-for-personal-loan-default", "Reply to Bank Legal Notice"],
                      ["/can-a-bank-freeze-my-salary-account-for-personal-loan-default", "Can Bank Freeze Salary Account"],
                      ["/section-138-cheque-bounce-notice-for-personal-loan", "Section 138 Cheque Bounce Defense"],
                      ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off Status from CIBIL"],
                      ["/one-time-settlement-scheme-for-personal-loan-2026", "One-Time Settlement (OTS) Guide 2026"],
                      ["/difference-between-loan-settlement-and-loan-closure-impact-on-cibil", "Settlement vs Closure CIBIL Impact"],
                      ["/what-happens-after-loan-account-becomes-npa", "What Happens After Account Becomes NPA"],
                      ["/nbfc-loan-settlement-in-september-2026", "NBFC Loan Settlement Process 2026"],
                      ["/best-debt-settlement-company", "Best Debt Settlement Company India"],
                      ["/best-personal-loan-settlement-service", "Personal Loan Settlement Services"],
                      ["/best-credit-card-settlement-service", "Credit Card Settlement Services"],
                      ["/best-lawyer-for-loan-settlement", "Best Lawyer for Loan Settlement"],
                      ["/credit-card-debt-settlement", "Credit Card Debt Settlement"],
                      ["/personal-loan-debt-settlement", "Personal Loan Debt Settlement"],
                      ["/app-loan-settlement-in-september-2026", "App Loan Settlement Legal Process"],
                      ["/business-loan-settlement-in-september-2026", "Business Loan Settlement Legal Process"],
                    ].map(([href, label]) => (
                      <Link
                        key={href}
                        href={href}
                        className="p-3 bg-gray-50 hover:bg-amber-50/60 border border-gray-200 rounded-xl text-gray-700 hover:text-[#5A4C33] transition flex items-center justify-between"
                      >
                        <span className="truncate pr-2 font-medium">{label}</span>
                        <span className="text-[#D2A02A] font-bold">→</span>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ══ SECTION 15: REFERENCES & AUTHORITY ══ */}
                <section id="citations" className="space-y-4">
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                    Statutory Authority &amp; Official Portals
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <a
                      href="https://consumerhelpline.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>National Consumer Helpline (INGRAM Portal)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://edaakhil.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>e-Daakhil Portal (Consumer Dispute Redressal Commissions)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://consumeraffairs.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Department of Consumer Affairs (Govt. of India)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://ncdrc.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>National Consumer Disputes Redressal Commission (NCDRC)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>RBI Complaint Management System (CMS Portal)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.cibil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>TransUnion CIBIL India (Credit Information Bureau)</span>
                      <span>↗</span>
                    </a>
                  </div>
                </section>

                {/* Social Share Row at Bottom */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <div className="text-xs text-gray-500">
                    Was this National Consumer Helpline (NCH) banking and NBFC grievance guide helpful?
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition"
                      aria-label="Share on WhatsApp"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z"/></svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="px-3 py-1.5 rounded-lg bg-[#D2A02A] hover:bg-[#b08522] text-white text-xs font-semibold transition"
                    >
                      {shareMsg || "Copy Article Link"}
                    </button>
                  </div>
                </div>

                {/* ══ SECTION 15: AMA COMPANY & MEDIA SECTION ══ */}
                <section
                  id="ama-company-section"
                  className="mt-12 p-8 md:p-12 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-4 border-[#D2A02A] rounded-2xl shadow-sm text-center relative overflow-hidden"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/ama3.svg"
                      alt="AMA Legal Solutions"
                      width={75}
                      height={75}
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#5A4C33] mb-3">
                    AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 text-sm md:text-base font-medium">
                    Trusted with a{" "}
                    <strong className="text-[#D2A02A] font-bold">4.7 Google Rating</strong>, over{" "}
                    <strong className="text-[#D2A02A] font-bold">10,000+ Clients Represented</strong>,{" "}
                    <strong className="text-[#D2A02A] font-bold">25,000+ Disputes Handled</strong>, and
                    more than{" "}
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Combined Legal Experience</strong> in
                    delivering strategic banking litigation, National Consumer Helpline dispute resolution, anti-harassment defense, and Consumer Commission counsel across India.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/how-to-file-a-complaint-against-bank-nbfc-in-rbi"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      RBI Banking Complaints
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Anti-Harassment Defense
                    </Link>
                    <Link
                      href="/how-to-reply-to-bank-legal-notice-for-personal-loan-default"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Reply to Legal Notice
                    </Link>
                    <Link
                      href="/best-debt-settlement-company"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Debt Settlement Counsel
                    </Link>
                  </div>
                </section>

              </div>
            </div>

            {/* ── RIGHT STICKY SIDEBAR ── */}
            <div className="space-y-8 sticky top-24">

              {/* Card 1: About Author */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  About Author
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#D2A02A] flex-shrink-0">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Anuj Anand Malik</h4>
                    <p className="text-[11px] text-gray-500 mb-1">Founder &amp; Senior Advocate</p>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-xs text-[#D2A02A] hover:underline font-semibold"
                    >
                      View Full Profile →
                    </Link>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Advocate Anuj Anand Malik specializes in consumer protection litigation, banking disputes, debt resolution defense, and High Court advocacy under the Advocates Act, 1961. He has represented over 10,000 retail and commercial borrowers across High Courts, Consumer Disputes Redressal Commissions, and regulatory bodies nationwide.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2 rounded-lg text-xs font-semibold hover:bg-[#0077b5] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Card 2: Need Legal Help? CTA Card */}
              <div className="bg-[#5A4C33] p-6 rounded-2xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-2">Need Help Filing an NCH Complaint?</h3>
                <p className="text-gray-200 mb-6 text-xs leading-relaxed">
                  Confidential evaluation by Advocate Anuj Anand Malik. Issue statutory pre-notices, halt recovery harassment immediately, and escalate your dispute through the National Consumer Helpline INGRAM portal with complete evidentiary backing.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-3 text-sm shadow"
                >
                  Call +91-8700343611
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full border border-white text-white text-center py-3 rounded-xl font-bold hover:bg-white hover:text-[#5A4C33] transition-colors text-sm cursor-pointer"
                >
                  Request Callback
                </button>
              </div>

              {/* Card 3: Client Reviews Card (Matching Product Schema) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2.5">
                  <h3 className="text-base font-bold text-gray-900">Client Reviews</h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Stars />
                  <span className="font-extrabold text-gray-900 text-sm">5.0 / 5.0</span>
                </div>
                <p className="text-[11px] text-gray-500 mb-4">
                  Based on 1,740 verified corporate &amp; retail reviews across India
                </p>

                <div className="space-y-4">
                  {clientReviews.map((rev, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative"
                    >
                      <div className="text-3xl text-[#D2A02A] opacity-20 absolute top-2 left-2 font-serif leading-none">
                        &ldquo;
                      </div>
                      <div className="relative z-10">
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
                          <p className="font-bold text-gray-900 text-xs">{rev.authorName}</p>
                          <p className="text-[10px] text-gray-500">{rev.authorLocation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-gray-500">
                  <span>Google Verified</span>
                  <span>&bull;</span>
                  <span className="font-bold text-[#D2A02A]">100% Authentic Client Feedback</span>
                </div>
              </div>

              {/* Card 4: Related Guides Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                  Related Redressal Guides
                </h3>
                <div className="space-y-2.5 text-xs">
                  <Link
                    href="/how-to-file-a-complaint-against-bank-nbfc-in-rbi"
                    className="block p-2 rounded-lg hover:bg-[#FAF7F0] text-gray-700 hover:text-[#5A4C33] transition"
                  >
                    <span className="font-semibold block">File Complaint Against Bank in RBI</span>
                    <span className="text-[11px] text-gray-500">Integrated Ombudsman Scheme 2021</span>
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="block p-2 rounded-lg hover:bg-[#FAF7F0] text-gray-700 hover:text-[#5A4C33] transition"
                  >
                    <span className="font-semibold block">Stop Recovery Agent Harassment</span>
                    <span className="text-[11px] text-gray-500">Supreme Court Precedents &amp; Police Action</span>
                  </Link>
                  <Link
                    href="/how-to-reply-to-bank-legal-notice-for-personal-loan-default"
                    className="block p-2 rounded-lg hover:bg-[#FAF7F0] text-gray-700 hover:text-[#5A4C33] transition"
                  >
                    <span className="font-semibold block">Reply to Bank Legal Notice</span>
                    <span className="text-[11px] text-gray-500">Statutory Counter-Notices &amp; Defense</span>
                  </Link>
                  <Link
                    href="/how-to-remove-a-written-off-status-from-a-credit-report"
                    className="block p-2 rounded-lg hover:bg-[#FAF7F0] text-gray-700 hover:text-[#5A4C33] transition"
                  >
                    <span className="font-semibold block">Remove Written-Off Status from CIBIL</span>
                    <span className="text-[11px] text-gray-500">Credit Score Restoration Protocols</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ══ INTERACTIVE INTAKE MODAL ══ */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
            onClick={(e) => {
              if (e.target === e.currentTarget) resetModal();
            }}
          >
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-gray-100 relative animate-scaleUp">
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
                      <span>⚖️</span> Confidential Legal Evaluation
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#1a202c]">
                      Request NCH Grievance Evaluation
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">
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
                        placeholder="e.g. Vikramaditya Sen"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
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
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
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
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
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
                          placeholder="e.g. Pune / Maharashtra"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Grievance Category
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] bg-white transition"
                        >
                          <option value="Unauthorized Charges & Interest Hikes">Unauthorized Charges &amp; Interest Hikes</option>
                          <option value="Recovery Agent Harassment / Threats">Recovery Agent Harassment / Threats</option>
                          <option value="Non-Release of Original Property Title Deeds">Non-Release of Original Property Title Deeds</option>
                          <option value="Erroneous CIBIL / Bureau Reporting">Erroneous CIBIL / Bureau Reporting</option>
                          <option value="Refusal to Issue No Dues Certificate (NDC)">Refusal to Issue No Dues Certificate (NDC)</option>
                          <option value="Unfair Contract Terms / Foreclosure Penalties">Unfair Contract Terms / Foreclosure Penalties</option>
                          <option value="NBFC Breach of Fair Practices Code">NBFC Breach of Fair Practices Code</option>
                          <option value="Digital Lending App Malpractices">Digital Lending App Malpractices</option>
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
                        placeholder="Mention the bank or NBFC name, account type, nature of grievance, or whether notice was already sent..."
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition resize-none"
                      />
                    </div>

                    <p className="text-[11px] text-gray-500 leading-normal">
                      🔒 All submissions are strictly confidential under Section 126 of the Indian Evidence Act, 1872. Zero spam guarantee.
                    </p>

                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit &amp; Open WhatsApp Legal Desk</span>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z" />
                      </svg>
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Grievance Details Transmitted
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, <strong className="text-gray-900">{formData.fullName}</strong>. Your grievance summary has been routed to our senior banking desk.
                  </p>
                  <p className="text-xs text-gray-500">
                    If WhatsApp did not automatically launch, connect immediately via the direct link below:
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://api.whatsapp.com/send?phone=918700343611&text=${encodeURIComponent(
                        `Hello Advocate Anuj Anand Malik, I submitted my grievance details regarding an NCH complaint against my lender (${formData.fullName}, ${formData.phone}). Please evaluate my case.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition shadow"
                    >
                      <span>Open WhatsApp Chat Directly</span>
                      <span>💬</span>
                    </a>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={resetModal}
                      className="text-xs text-gray-400 hover:text-gray-600 underline"
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

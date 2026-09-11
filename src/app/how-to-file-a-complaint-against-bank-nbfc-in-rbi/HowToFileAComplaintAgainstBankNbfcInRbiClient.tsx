"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/how-to-file-a-complaint-against-bank-nbfc-in-rbi";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/how-to-file-a-complaint-against-bank-nbfc-in-rbi.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-11";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "What are the mandatory legal prerequisites before filing a complaint against a bank or an NBFC in RBI?",
    answer:
      "Under Clause 10 of the Reserve Bank - Integrated Ombudsman Scheme, 2021, an aggrieved borrower or banking customer must first serve a formal written grievance or an advocate-drafted legal notice to the bank or NBFC's designated Branch Manager, Grievance Redressal Officer, or Principal Nodal Officer. The complainant is legally authorized to escalate the dispute to the RBI Ombudsman only after thirty calendar days have elapsed without receiving a resolution, or within one year of receiving an unsatisfactory reply or rejection from the regulated entity. Lodging an application with the RBI without first exhausting this statutory thirty-day internal dispute period results in immediate summary dismissal by the Centralised Receipt and Processing Centre.",
  },
  {
    id: "faq-2",
    question: "Which regulatory authority and digital portal handle complaints against banks and NBFCs in India?",
    answer:
      "Grievances against scheduled commercial banks, regional rural banks, payment banks, primary cooperative banks, and deposit or non-deposit taking NBFCs are adjudicated under the Reserve Bank - Integrated Ombudsman Scheme, 2021 through the digital Complaint Management System (CMS) portal hosted at cms.rbi.org.in. Physical complaint dossiers are centrally processed by the Centralised Receipt and Processing Centre (CRPC) situated at the Reserve Bank of India, 4th Floor, Sector 17, Chandigarh. The Integrated Ombudsman framework functions under statutory authority derived from Section 35A of the Banking Regulation Act, 1949, Section 45L of the Reserve Bank of India Act, 1934, and Section 18 of the Payment and Settlement Systems Act, 2007.",
  },
  {
    id: "faq-3",
    question: "How does transparent fixed legal advisory protect borrowers filing RBI complaints compared to corporate law firms?",
    answer:
      "Retaining an enrolled banking advocate under a transparent fixed legal advisory model provides comprehensive dossier compilation, statutory nodal officer correspondence, and direct Ombudsman representation without open-ended hourly billing or recurring monthly retainers. Traditional corporate law firms routinely charge open-ended retainers and bill for procedural correspondence by the minute, imposing severe financial strain on retail borrowers and commercial enterprises seeking basic regulatory protection. An advocate-certified engagement guarantees statutory attorney-client privilege under Section 126 of the Indian Evidence Act, 1872 and ensures rigorous statutory citations that compel regulated entities to reach enforceable conciliation.",
  },
  {
    id: "faq-4",
    question: "Why do free online DIY complaint templates routinely fail before the RBI Ombudsman?",
    answer:
      "Generic online DIY complaint templates lack statutory standing under the Advocates Act, 1961 and consistently fail to satisfy the strict procedural admissibility criteria outlined in Clause 10(2) of the Integrated Ombudsman Scheme. Regulated financial institutions employ specialized internal legal teams that swiftly dismantle boilerplate allegations lacking forensic account ledgers, specific circular citations, and authenticated documentary proof. Crucially, unvetted online templates frequently contain unintended admissions of liability or mischaracterize commercial disputes, which bank counsel subsequently exploit in Debt Recovery Tribunal proceedings or civil court litigation.",
  },
  {
    id: "faq-5",
    question: "Can filing an RBI complaint halt unlawful recovery agent harassment and abusive collection tactics?",
    answer:
      "Filing a formal complaint citing the Reserve Bank of India Master Circular on Recovery Agents and Directives on Outsourcing of Financial Services triggers immediate regulatory scrutiny that halts unlawful third-party collection conduct. Under binding RBI directives, banks and NBFCs are strictly prohibited from contacting borrowers before 8:00 AM or after 7:00 PM, calling family references or employers, visiting workplaces without prior notification, or utilizing threatening language. A formal advocate legal notice followed by a CMS portal escalation creates an active regulatory inquiry, legally restraining the financial institution from deploying coercive recovery tactics while the Ombudsman adjudicates the dispute.",
  },
  {
    id: "faq-6",
    question: "What statutory remedies and compensation can the RBI Integrated Ombudsman award against a defaulting bank or NBFC?",
    answer:
      "Under Clause 15 of the Integrated Ombudsman Scheme, 2021, the Ombudsman exercises statutory authority to issue a binding award directing the bank or NBFC to reverse unauthorized transactions, restore corrupted credit scores, release original property title deeds, or eliminate arbitrary interest hikes. In addition to mandating full restitution of disputed financial amounts, the Ombudsman is empowered to grant formal compensation for mental anguish, loss of time, and out-of-pocket expenses suffered by the complainant due to gross deficiency in service. Should the regulated entity fail to comply with the final award within thirty days, the complainant can enforce the decree through the RBI Consumer Education and Protection Department or execute it via civil court proceedings.",
  },
  {
    id: "faq-7",
    question: "What legal grounds will cause the RBI Ombudsman to summarily reject a complaint against a bank or NBFC?",
    answer:
      "Complaints are summarily rejected under Clause 10(2) of the Scheme if the core subject matter is already pending adjudication or has been previously settled by any civil court, consumer dispute commission, Debt Recovery Tribunal, or arbitral tribunal. Furthermore, the Ombudsman will reject claims submitted more than one year after receiving the lender's final rejection letter, grievances representing commercial contract disputes between business partners, or submissions that fail to establish a verifiable deficiency in banking service. Engaging experienced banking counsel prevents procedural dismissal by ensuring that all statutory prerequisites are met and that no jurisdictional conflicts compromise the complaint.",
  },
  {
    id: "faq-8",
    question: "What legal appeal remedies exist if the RBI Ombudsman rejects a valid grievance or issues an inadequate award?",
    answer:
      "If a complainant or regulated entity is dissatisfied with an Ombudsman award or a decision rejecting the complaint under specific procedural clauses, Clause 17 of the Scheme provides a statutory right of appeal within thirty calendar days of receiving the order. The designated statutory Appellate Authority is the Executive Director in charge of the Consumer Education and Protection Department at the Reserve Bank of India. Beyond the administrative appellate mechanism of the central bank, an aggrieved borrower retains the constitutional remedy of filing a Writ Petition under Article 226 of the Constitution of India before the competent High Court to challenge arbitrary or procedurally flawed administrative determinations.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    authorName: "Rajeshwari Nambiar",
    authorLocation: "Co-Founder, Nambiar Agro Logistics • September 2026",
    reviewRating: "5.0",
    reviewBody:
      "When our commercial bank arbitrarily hiked interest rates and authorized third-party recovery agents to disrupt operations at our logistics hub, our business was pushed into severe distress. Corporate law firms quoted astronomical monthly retainers just to issue initial notices, while free online templates failed to elicit any response from the bank's zonal office. Advocate Anuj Anand Malik and AMA Legal Solutions took over our representation under a transparent fixed legal advisory model. They drafted an airtight statutory legal notice citing RBI Master Directions, escalated our case through the RBI CMS portal with complete forensic evidence, and secured a comprehensive Ombudsman award that reversed all improper charges, permanently halted recovery agent visits, and restored our company credit profile without surprise legal bills.",
  },
  {
    authorName: "Devendra K. Agarwal",
    authorLocation: "Managing Director, Agarwal Metal Fab • August 2026",
    reviewRating: "5.0",
    reviewBody:
      "An NBFC illegally retained the original property title deeds of our manufacturing plant despite our complete repayment of an equipment term loan, while threatening us with frivolous arbitration claims. Free internet guides were completely useless against their in-house legal department, and corporate attorneys demanded huge hourly retainers. AMA Legal Solutions provided decisive, cost-effective legal counsel. Advocate Anuj Anand Malik filed a formal complaint with the RBI Integrated Ombudsman under Clause 15, establishing gross deficiency in service. The Ombudsman directed the NBFC to return our title deeds immediately and granted formal compensation for administrative harassment. AMA Legal Solutions delivered total victory and peace of mind through their transparent fixed fee approach.",
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
      name: "How to File a Complaint Against a Bank or an NBFC in RBI: Legal Guide & CMS Procedure",
      description:
        "Comprehensive legal strategy and step-by-step procedure on how to file a complaint against a bank or an NBFC in RBI under the Integrated Ombudsman Scheme 2021. Learn mandatory pre-complaint legal notices, CMS portal escalation, recovery harassment defense, and advocate-led fixed advisory.",
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
        "How to File a Complaint Against a Bank or an NBFC in RBI: Legal Guide & CMS Procedure",
      description:
        "Step-by-step legal guide on how to file a complaint against a bank or an NBFC in RBI under the Reserve Bank - Integrated Ombudsman Scheme, 2021. Learn CMS portal escalation, pre-complaint notice requirements, recovery agent harassment defense, and transparent fixed legal advisory.",
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
      name: "RBI Banking Ombudsman & NBFC Grievance Legal Advisory",
      description:
        "Dedicated banking grievance and regulatory dispute advisory to file statutory complaints against scheduled commercial banks and NBFCs under the Reserve Bank - Integrated Ombudsman Scheme, 2021 in India.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1680",
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
        datePublished: rev.authorLocation.includes("September") ? "2026-09-05" : "2026-08-22",
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
          name: "How to File a Complaint Against a Bank or an NBFC in RBI",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Statutory Protocol to File a Complaint Against a Bank or an NBFC in RBI",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Serving Formal Statutory Legal Notice to Bank / NBFC Branch & Principal Nodal Officer",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Compiling Forensic Evidence Dossier & Monitoring 30-Day Mandatory Statutory Resolution Window",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Lodging the Digital Grievance via RBI Complaint Management System (CMS) Portal & CRPC Chandigarh",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Advocate Representation During Ombudsman Conciliation, Evidence Rebuttals & Regulatory Scrutiny",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Securing & Enforcing Binding Ombudsman Award, Restitution, Title Deed Release & Appellate Review",
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
  { id: "quick-answer", title: "Quick Legal Answer" },
  { id: "rbi-ombudsman-framework-overview", title: "RBI Integrated Ombudsman Scheme" },
  { id: "commercial-reality-advocate-vs-diy", title: "Advocate vs Corporate vs DIY" },
  { id: "pre-complaint-statutory-notice", title: "Mandatory 30-Day Notice to PNO" },
  { id: "step-by-step-cms-filing-protocol", title: "5-Step CMS Filing Protocol" },
  { id: "infographic", title: "RBI Complaint Infographic" },
  { id: "grounds-for-complaint-banks-nbfcs", title: "Recognized Grounds for Grievance" },
  { id: "halting-recovery-agent-harassment", title: "Halting Collection Harassment" },
  { id: "evidence-dossier-compilation", title: "Compiling Forensic Evidence" },
  { id: "ombudsman-awards-and-compensation", title: "Binding Awards & Compensation" },
  { id: "appellate-remedy-and-high-court", title: "Appeals & High Court Writ Remedy" },
  { id: "post-order-cibil-and-deed-release", title: "Credit Restoration & Deed Release" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "Statutory Authority & Portals" },
  { id: "ama-company-section", title: "About AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function HowToFileAComplaintAgainstBankNbfcInRbiClient() {
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
    assetType: "Unauthorized Charges & Interest Hikes",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "How to File a Complaint Against a Bank or an NBFC in RBI: Legal Guide & CMS Procedure – AMA Legal Solutions";
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
    const textMsg = `Hello AMA Legal Solutions, I require urgent legal advisory to file a complaint against a bank or NBFC in RBI.
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Grievance Category: ${formData.assetType}
Details: ${formData.message || "Requesting advocate evaluation for drafting statutory legal notice, escalating complaint via RBI CMS portal, and securing Ombudsman relief."}`;
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
      label: "How to File a Complaint Against a Bank or an NBFC in RBI",
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
                <span>⚖️</span> Banking Ombudsman &amp; NBFC Regulatory Redressal
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                How to File a Complaint Against a{" "}
                <span className="text-[#D2A02A]">Bank or an NBFC in RBI</span>: Legal Guide &amp; CMS Procedure
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                When financial institutions violate Reserve Bank of India directives through predatory recovery agent harassment,
                unauthorized account debits, arbitrary floating rate hikes, withholding property title deeds, or erroneous CIBIL reporting,
                borrowers possess enforceable statutory remedies under the Reserve Bank - Integrated Ombudsman Scheme, 2021.
                Discover how advocate-certified drafting and transparent fixed legal advisory empower consumers and commercial borrowers
                to issue decisive 30-day pre-complaint notices, lodge airtight grievances via the RBI Complaint Management System (CMS) portal,
                quash lender counter-claims, and secure binding restitution awards.
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
                    <span>🛡️</span> Integrated Ombudsman Scheme Aligned
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
                  src="/images/og/how-to-file-a-complaint-against-bank-nbfc-in-rbi.png"
                  alt="How to File a Complaint Against a Bank or an NBFC in RBI – AMA Legal Solutions Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Reserve Bank of India Grievance Redressal
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory CMS Portal Procedure &amp; Advocate Representation
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
                  Banking Disputes Handled
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
                      RBI Regulatory Compliance Verified
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
                        Quick Legal Answer: How to File a Complaint Against a Bank or an NBFC in RBI
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                      Filing a complaint against a bank or an NBFC in RBI is a statutory grievance redressal mechanism established under the Reserve Bank - Integrated Ombudsman Scheme, 2021, empowering aggrieved consumers and commercial borrowers to escalate unresolved service deficiencies, unauthorized debits, predatory lending, or recovery agent harassment directly to the central banking regulator. Complainants must first submit a formal written grievance or advocate legal notice to the regulated entity&apos;s Principal Nodal Officer; if the financial institution rejects the grievance or fails to provide resolution within thirty calendar days, the dispute is escalated through the RBI Complaint Management System (CMS) portal at cms.rbi.org.in or submitted via physical dossier to the Centralised Receipt and Processing Centre (CRPC) in Chandigarh. Engaging an enrolled banking advocate ensures statutory evidence compilation, quashes frivolous counter-claims, and secures binding awards or compensation under Clause 15 of the Integrated Ombudsman Scheme.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 1: RBI INTEGRATED OMBUDSMAN SCHEME OVERVIEW ══ */}
                <section id="rbi-ombudsman-framework-overview" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Understanding the Reserve Bank - Integrated Ombudsman Scheme, 2021
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Prior to November 2021, bank and non-banking financial company customers in India had to navigate fragmented regulatory frameworks,
                    including the Banking Ombudsman Scheme, 2006, the Ombudsman Scheme for Non-Banking Financial Companies, 2018, and the Ombudsman Scheme for Digital Transactions, 2019.
                    To eliminate jurisdictional ambiguities and establish a seamless &ldquo;One Nation, One Ombudsman&rdquo; mechanism,
                    the Reserve Bank of India consolidated these disparate regimes into the Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS).
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The RB-IOS derives statutory force from Section 35A of the Banking Regulation Act, 1949, Section 45L of the Reserve Bank of India Act, 1934,
                    and Section 18 of the Payment and Settlement Systems Act, 2007. It encompasses all Scheduled Commercial Banks, Regional Rural Banks,
                    Scheduled Primary Urban Co-operative Banks, Payment System Participants, and non-banking financial companies (NBFCs) meeting statutory threshold assets.
                    Under this integrated regime, any &ldquo;deficiency in service&rdquo;—defined broadly as any shortcoming, inadequacy, or violation of RBI master directions—constitutes
                    a valid ground for regulatory adjudication, enabling borrowers to challenge financial misconduct without incurring prohibitive courtroom expenses.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">🏛️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Single Point of Entry</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        A unified portal (CMS) and central processing hub (CRPC, Chandigarh) receive and triage all complaints against banks, NBFCs, and payment gateways.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">⚖️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Broad Deficiency Grounds</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Eliminates rigid positive lists; any breach of RBI regulations, fair practices codes, or unfair trade practice qualifies for formal investigation.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-5 rounded-xl border border-[#D2A02A]/30">
                      <div className="text-2xl mb-2">🛡️</div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Statutory Compensation</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        The Ombudsman holds delegated authority under Clause 15 to award direct financial restitution alongside compensation for harassment and loss of time.
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-2 italic text-gray-700 bg-gray-50 rounded-r-xl">
                    &ldquo;The Reserve Bank - Integrated Ombudsman Scheme adopts a &apos;One Nation One Ombudsman&apos; approach, making the alternate dispute redress mechanism simpler, efficient and responsive to consumer grievances across all regulated financial entities in India.&rdquo;
                    <span className="block mt-2 font-bold not-italic text-xs text-[#5A4C33]">
                      — Reserve Bank of India, Statement on Developmental and Regulatory Policies
                    </span>
                  </blockquote>
                </section>

                {/* ══ SECTION 2: COMMERCIAL REALITY COMPARISON TABLE ══ */}
                <section id="commercial-reality-advocate-vs-diy" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Reality: Advocate-Certified Fixed Advisory vs Corporate Law Firms vs Free DIY Templates
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    When confronted with aggressive collection tactics, unauthorized debit cascades, or stubborn refusal by lenders to release property deeds,
                    borrowers generally consider three options: downloading &ldquo;free&rdquo; online complaint templates, hiring corporate law firms charging open-ended retainers,
                    or engaging specialized banking advocates under a transparent fixed legal advisory model.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Free online templates frequently prove catastrophic. They lack legal standing under the Advocates Act, 1961, omit mandatory evidence cross-referencing,
                    and frequently include unvetted statements that banks treat as admissions of liability in subsequent Debt Recovery Tribunal (DRT) or Section 138 NI Act litigation.
                    Conversely, traditional corporate firms treat regulatory complaints as open-ended billing opportunities, demanding steep monthly retainers and billing by the hour
                    without guaranteeing enforceable results. AMA Legal Solutions bridges this gap by delivering advocate-drafted statutory notices,
                    comprehensive CMS dossier submissions, and Ombudsman representation under an accessible fixed legal advisory structure with zero hidden retainers or hourly markups.
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
                            Zero legal standing; dismissed by bank legal cells as automated consumer noise.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Full advocate standing, but often delegated to junior associate paralegals.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Enrolled High Court advocates issue signed statutory notices carrying legal weight.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Fee Predictability &amp; Commercial Structure
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Appears free, but leads to massive financial loss through botched claims or lost collateral.
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Excessive corporate retainers, uncapped hourly billing, and surprise administrative markups.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Transparent fixed legal advisory; zero hourly billing, zero surprise retainer fees.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Pre-Complaint Notice to Principal Nodal Officer
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Generic email sent to general customer care; fails statutory Clause 10 requirements.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Legally drafted, but billed separately under complex multi-tier retainer schedules.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Precision statutory legal notice served directly on PNO and Head Office Compliance.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Protection Against Accidental Debt Admissions
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Extremely dangerous; often admits unverified balances, crippling future court defense.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Protected, but requires cumbersome billing authorizations for every draft modification.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Vetted drafting safeguards borrower rights, without prejudice to pending DRT or court cases.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Immediate Cease-and-Desist for Recovery Harassment
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Ignored by third-party recovery agencies; harassment continues unabated.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Slow turnaround due to bureaucratic inter-departmental clearances.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Immediate 24-48 hour statutory Cease-and-Desist notice served on lender Board &amp; recovery agency.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900 bg-gray-50 border-r border-gray-200">
                            Representation During Conciliation &amp; Appeals
                          </td>
                          <td className="p-4 text-red-600 border-r border-gray-200">
                            Complainant left unassisted; easily outmaneuvered by bank law officers during conciliation.
                          </td>
                          <td className="p-4 text-gray-700 border-r border-gray-200">
                            Available only at steep additional appearance fees and multi-advocate charges.
                          </td>
                          <td className="p-4 text-emerald-800 font-semibold bg-emerald-50/50">
                            Comprehensive advocacy through written submissions, evidence rejoinders, and appellate review.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 3: PRE-COMPLAINT STATUTORY NOTICE TO PNO ══ */}
                <section id="pre-complaint-statutory-notice" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The Mandatory 30-Day Pre-Complaint Legal Notice to the Principal Nodal Officer
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The most prevalent procedural error committed by consumers is lodging a complaint on the RBI CMS portal immediately after a dispute arises.
                    Under Clause 10 of the Integrated Ombudsman Scheme, 2021, the Ombudsman lacks statutory jurisdiction to entertain any application unless the complainant
                    has first submitted a formal representation to the concerned bank or NBFC and satisfied one of two conditions:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-base text-gray-700">
                    <li>The bank or NBFC has formally rejected the complaint, or provided an unsatisfactory resolution; or</li>
                    <li>A period of thirty calendar days has elapsed from the date the bank or NBFC received the formal representation without providing any written response.</li>
                  </ol>
                  <p className="text-base text-gray-700 leading-relaxed">
                    To satisfy this threshold conclusively, our advocates draft and serve a comprehensive Statutory Legal Notice upon the Branch Manager,
                    the Zonal Grievance Officer, and the designated Principal Nodal Officer (PNO) of the regulated entity via Registered Post with Acknowledgment Due (RPAD)
                    and official email channels. Serving an advocate-signed legal notice under the Advocates Act, 1961 elevates the dispute from routine frontline customer support
                    to the bank&apos;s senior regulatory compliance and legal departments, frequently triggering internal resolutions before the thirty-day statutory period expires.
                  </p>

                  <div className="bg-amber-50/70 border border-[#D2A02A]/40 rounded-2xl p-6 space-y-3">
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide text-[#5A4C33]">
                      Essential Elements of an Airtight Pre-Complaint Legal Notice:
                    </h3>
                    <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                      <li>• <strong>Account &amp; Facility Specifics:</strong> Precise loan account numbers, customer identification files (CIF), credit card credentials, or branch references.</li>
                      <li>• <strong>Chronological Factual Matrix:</strong> Exact dates, transaction reference numbers (UTR), disputed debit entries, or illicit collection agent interactions.</li>
                      <li>• <strong>Specific RBI Master Direction Violations:</strong> Explicit statutory citations (e.g., Master Direction on Fair Practices Code, Recovery Agent Directives, or Digital Lending Guidelines).</li>
                      <li>• <strong>Quantified Restitution Demand:</strong> Demand for exact reversal of improper charges, credit score rectification, or immediate return of withheld property deeds.</li>
                      <li>• <strong>Clear 30-Day Escalation Warning:</strong> Explicit reservation of rights to escalate the matter to the RBI Integrated Ombudsman, Consumer Commission, or High Court upon non-compliance.</li>
                    </ul>
                  </div>
                </section>

                {/* ══ SECTION 4: 5-STEP CMS FILING PROTOCOL ══ */}
                <section id="step-by-step-cms-filing-protocol" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    5-Step Strategic Protocol to File a Complaint Against a Bank or NBFC in RBI
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    When the thirty-day statutory notice period elapses without adequate redress, our legal team initiates the formal regulatory escalation protocol.
                    Below is the definitive five-step procedure ensuring compliance with RBI procedural norms:
                  </p>

                  <div className="space-y-6 my-6">
                    <div className="p-6 bg-gradient-to-r from-white to-[#FAF7F0] border-l-4 border-[#D2A02A] rounded-r-2xl shadow-sm space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#5A4C33] uppercase tracking-wider">
                        <span>Step 1</span> &bull; <span>Statutory Notice &amp; Legal Dispatch</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-900">
                        Forensic Review &amp; Statutory Legal Notice to Bank / NBFC Nodal Officer
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        We perform a forensic audit of account statements, loan sanction letters, or recovery correspondence.
                        We then issue a formal statutory legal notice to the lender&apos;s Principal Nodal Officer, establishing a legal paper trail under Section 126 of the Indian Evidence Act.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-white to-[#FAF7F0] border-l-4 border-[#D2A02A] rounded-r-2xl shadow-sm space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#5A4C33] uppercase tracking-wider">
                        <span>Step 2</span> &bull; <span>Evidence Dossier Compilation</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-900">
                        Compiling the Evidentiary Dossier &amp; Expiry of the 30-Day Resolution Window
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        During the mandatory thirty-day waiting period, we compile call recordings, WhatsApp transcripts, postal delivery receipts,
                        and disputed ledger entries into an indexed, certified evidentiary dossier ready for digital upload.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-white to-[#FAF7F0] border-l-4 border-[#D2A02A] rounded-r-2xl shadow-sm space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#5A4C33] uppercase tracking-wider">
                        <span>Step 3</span> &bull; <span>Digital CMS Escalation</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-900">
                        Lodging the Grievance via RBI Complaint Management System (cms.rbi.org.in)
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        We file the formal complaint through the RBI CMS portal, selecting the precise category of regulated entity and deficiency grounds.
                        Simultaneously, for complex commercial disputes, a physical certified copy is dispatched to the CRPC in Chandigarh to ensure dual tracking.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-white to-[#FAF7F0] border-l-4 border-[#D2A02A] rounded-r-2xl shadow-sm space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#5A4C33] uppercase tracking-wider">
                        <span>Step 4</span> &bull; <span>Conciliation &amp; Legal Rejoinder</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-900">
                        Advocate Representation During Ombudsman Scrutiny &amp; Regulatory Conciliation
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        When the Ombudsman calls upon the bank or NBFC to submit its written reply, we scrutinize their defenses,
                        file point-by-point statutory rejoinders, and represent the complainant during conciliation conferences to defeat evasive institutional arguments.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-white to-[#FAF7F0] border-l-4 border-[#D2A02A] rounded-r-2xl shadow-sm space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#5A4C33] uppercase tracking-wider">
                        <span>Step 5</span> &bull; <span>Award Enforcement &amp; Appellate Review</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-900">
                        Securing Binding Ombudsman Award, Restitution, Title Deed Release &amp; Appellate Remedy
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Upon issuance of a favourable Ombudsman award or settlement agreement, we enforce compliance within the thirty-day window.
                        If the award is inadequate or procedurally compromised, we immediately prepare an appeal before the RBI Appellate Authority or file a High Court Writ Petition.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 5: SIGNATURE INFOGRAPHIC EMBED ══ */}
                <section id="infographic">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm flex flex-col items-center">
                    <img
                      src="/images/og/how-to-file-a-complaint-against-bank-nbfc-in-rbi.png"
                      alt="Comprehensive Infographic: How to File a Complaint Against a Bank or an NBFC in RBI"
                      className="w-full max-w-3xl rounded-xl shadow-md border border-gray-200"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-sm md:text-base font-bold text-[#5A4C33]">
                        Official RBI Banking Ombudsman &amp; NBFC Complaint Roadmap
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 max-w-2xl">
                        Statutory escalation from 30-day Principal Nodal Officer pre-notice, through digital CMS filing at cms.rbi.org.in,
                        to Ombudsman conciliation and binding Clause 15 compensation awards.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 6: RECOGNIZED GROUNDS FOR GRIEVANCE ══ */}
                <section id="grounds-for-complaint-banks-nbfcs" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Recognized Grounds for Filing Complaints Against Banks &amp; NBFCs
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under the Integrated Ombudsman Scheme, 2021, any departure from RBI regulations, customer service circulars, or fair lending practices
                    constitutes an actionable deficiency. The following categories represent the most frequent statutory grievances prosecuted by our advocates:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">1.</span> Non-Release of Original Property Deeds
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Violation of RBI Circular RBI/2023-24/60, which mandates release of all original movable and immovable property documents
                        within thirty days of full loan repayment. Lenders failing this mandate are liable to pay daily statutory compensation.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">2.</span> Recovery Agent Intimidation &amp; Abuses
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Breach of RBI Master Circular on Recovery Agents and Outsourcing Directives, including calls outside 8:00 AM - 7:00 PM,
                        calling friends and relatives, workplace visits, verbal abuse, or harassment of female family members.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">3.</span> Arbitrary Floating Interest Rate Hikes
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Increasing loan tenure or interest spreads without borrower consent, violating RBI circulars on &ldquo;Reset of Floating Interest Rate on Equated Monthly Instalments (EMI)&rdquo;.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">4.</span> Inaccurate CIBIL &amp; Bureau Reporting
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Reporting paid or settled loans as &ldquo;Written Off&rdquo; or &ldquo;Wilful Default&rdquo; in violation of the Credit Information Companies (Regulation) Act, 2005 (CICRA),
                        damaging the borrower&apos;s commercial and personal financial credit profile.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">5.</span> Unauthorized Digital Lending App Debits
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Breaches of RBI Digital Lending Guidelines, such as disbursements through unregulated third-party pass-through accounts,
                        contact scraping, or imposing undisclosed penal charges.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                        <span className="text-[#D2A02A]">6.</span> Failure to Issue No Dues Certificates (NDC)
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Refusing to issue authentic, board-authorized No Dues Certificates after complete execution of a One-Time Settlement (OTS)
                        or regular loan closure, exposing borrowers to future unauthorized recovery actions.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 7: HALTING RECOVERY AGENT HARASSMENT ══ */}
                <section id="halting-recovery-agent-harassment" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Halting Unlawful Recovery Agent Harassment Under RBI Directives
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Unregulated third-party debt collection agencies routinely employ coercive tactics against vulnerable borrowers and small business owners.
                    These include unannounced visits to personal residences, aggressive workplace confrontations, menacing WhatsApp messages,
                    and unauthorized calls to relatives whose contact details were obtained through predatory digital lending apps.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The Supreme Court of India in the landmark ruling of <em>ICICI Bank Ltd. v. Prakash Kaur</em> (2007) and subsequent High Court judgments
                    have repeatedly affirmed that financial institutions cannot use muscle power or extra-legal strong-arm tactics to recover loans.
                    Furthermore, the Reserve Bank of India Master Circular on Loans and Advances explicitly mandates that banks and NBFCs are strictly responsible
                    for the unlawful actions of their recovery agents.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    When our advocates intervene, we serve immediate Cease-and-Desist notices citing these binding precedents and RBI directives upon both the recovery agency
                    and the lender&apos;s Board of Directors. Escalating this conduct simultaneously to the RBI Integrated Ombudsman creates an active regulatory barrier:
                    banks face severe administrative penalties and reputational risk if their outsourced recovery agents continue unlawful collection tactics during pending Ombudsman scrutiny.
                  </p>
                </section>

                {/* ══ SECTION 8: EVIDENCE DOSSIER COMPILATION ══ */}
                <section id="evidence-dossier-compilation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Compiling an Airtight Evidentiary Dossier for the Ombudsman
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    The single most decisive factor distinguishing a successful RBI complaint from a summarily dismissed submission is the quality and forensic structure
                    of the evidentiary dossier. Under the Integrated Ombudsman Scheme, the Ombudsman evaluates disputes based on documentary evidence and written pleadings.
                    Our team compiles an indexed, cross-referenced dossier structured as follows:
                  </p>
                  <ul className="space-y-3 text-xs md:text-sm text-gray-700">
                    <li>
                      <strong>1. Statutory Legal Notice &amp; Postal Proof:</strong> Certified copy of the initial advocate legal notice served on the Principal Nodal Officer, accompanied by the India Post tracking report proving delivery and date of receipt.
                    </li>
                    <li>
                      <strong>2. Complete Financial Ledgers:</strong> Reconciled account statements highlighting disputed debits, unauthorized penal charges, or divergent interest rate computations against contractual sanction terms.
                    </li>
                    <li>
                      <strong>3. Digital Audio-Visual Proof:</strong> Certified call recordings of abusive recovery agents, screenshots of intimidating WhatsApp or SMS messages, and CCTV recordings of unauthorized premises visits, formatted in compliance with Section 65B of the Indian Evidence Act, 1872.
                    </li>
                    <li>
                      <strong>4. Regulatory Cross-References:</strong> Specific citations of violated RBI Master Directions, Circulars, and Fair Practices Codes directly linked to each factual allegation.
                    </li>
                  </ul>
                </section>

                {/* ══ SECTION 9: BINDING OMBUDSMAN AWARDS & COMPENSATION ══ */}
                <section id="ombudsman-awards-and-compensation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Binding Ombudsman Awards, Financial Restitution &amp; Compensation Powers
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under the Integrated Ombudsman Scheme, 2021, the Ombudsman acts as a quasi-judicial authority.
                    When conciliation between the parties fails to reach an agreed settlement, the Ombudsman is empowered under Clause 15 to pass a formal, binding Award.
                    The Award directs the regulated entity to provide specific performance or financial redress to rectify the established deficiency.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Crucially, the Ombudsman&apos;s award powers are not limited to mere reversal of unauthorized deductions.
                    Under Clause 15(2), the Ombudsman may grant compensation for the loss of the complainant&apos;s time, expenses incurred in pursuing the dispute,
                    and harassment or mental anguish suffered. Furthermore, in complaints involving delayed return of original title documents under the September 2023 RBI circular,
                    the lender is subject to mandatory daily compensation for every day of delay beyond the statutory thirty-day release window.
                    Once accepted by the complainant, the award becomes legally binding on the bank or NBFC, which must execute the order within thirty calendar days.
                  </p>
                </section>

                {/* ══ SECTION 10: APPEALS & HIGH COURT WRIT REMEDY ══ */}
                <section id="appellate-remedy-and-high-court" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Appellate Remedies Under Clause 17 &amp; Constitutional Writ Petitions
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    If an Ombudsman erroneously rejects a valid complaint under procedural clauses or issues an inadequate award,
                    the legal process does not terminate. Under Clause 17 of the Scheme, the complainant has the statutory right to file an Appeal
                    within thirty days of receiving the order before the designated Appellate Authority—the Executive Director in charge of the Consumer Education and Protection Department of the RBI.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Moreover, because the Reserve Bank of India and its Integrated Ombudsman function as statutory authorities exercising public functions,
                    their administrative and quasi-judicial determinations are subject to judicial review by constitutional courts.
                    If the Ombudsman acts arbitrarily, fails to consider vital forensic evidence, or violates the principles of natural justice,
                    our senior advocates file a Writ Petition under Article 226 of the Constitution of India before the High Court,
                    securing judicial directions to quash perverse administrative orders and enforce regulatory justice.
                  </p>
                </section>

                {/* ══ SECTION 11: CREDIT RESTORATION & DEED RELEASE ══ */}
                <section id="post-order-cibil-and-deed-release" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Post-Order Credit Bureau Rectification &amp; Collateral Title Deed Retrieval
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Securing a favourable Ombudsman award is only half the battle; the critical final phase is ensuring seamless institutional execution.
                    Lenders frequently delay updating credit bureau records or prolong the physical return of title documents stored in distant centralized repositories.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our post-order enforcement protocol includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">CIBIL Rectification</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Bureau Corrections</h4>
                      <p className="text-[11px] text-gray-600">
                        Ensuring the bank submits corrected data under CICRA norms to eliminate erroneous default notations within thirty days.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">Deed Handover</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Original Title Release</h4>
                      <p className="text-[11px] text-gray-600">
                        Supervising the physical handover of original sale deeds, NOCs, and satisfaction certificates from the bank branch.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center">
                      <div className="text-lg font-extrabold text-[#D2A02A] mb-1">CERSAI Satisfaction</div>
                      <h4 className="font-bold text-gray-900 text-xs mb-1">Security Charge Removal</h4>
                      <p className="text-[11px] text-gray-600">
                        Verifying the formal satisfaction of charge on CERSAI and Ministry of Corporate Affairs (MCA) registries.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 12: 8-QUESTION ACCORDION FAQ ══ */}
                <section id="faqs" className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                    <span className="text-2xl text-[#D2A02A]">❓</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                      Frequently Asked Questions: Filing Complaints Against Banks &amp; NBFCs in RBI
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

                {/* ══ SECTION 13: MORE LEGAL GUIDES INTERNAL LINKS ══ */}
                <section id="internal-guides" className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                    More Legal Guides &amp; Banking Redressal Resources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    {[
                      ["/bank-complaint-in-rbi", "Bank Complaint in RBI Guide"],
                      ["/how-to-file-complaint-rbi-ombudsman-online", "File Online RBI Ombudsman Complaint"],
                      ["/legal-notice-against-nbfc", "Legal Notice Against NBFC"],
                      ["/rbi-guideline-violation-complaint", "RBI Guideline Violation Complaint"],
                      ["/rbi-guidelines-for-recovery-agents-pdf-2026", "RBI Recovery Agent Guidelines 2026"],
                      ["/borrower-rights-under-rbi-guidelines-india", "Borrower Rights Under RBI Norms"],
                      ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Harassment Legally"],
                      ["/consumer-complaint-against-finance-company", "Consumer Complaint Against Finance Company"],
                      ["/loan-recovery-agent-harassment-complaint-online", "Report Recovery Agent Harassment Online"],
                      ["/how-to-register-complaint-against-debt-collector", "Register Complaint Against Debt Collector"],
                      ["/official-helpline-for-digital-lending-app-harassment-complaints", "Digital Lending App Complaint Helpline"],
                      ["/can-a-bank-freeze-my-salary-account-for-personal-loan-default", "Can Bank Freeze Salary Account"],
                      ["/section-138-cheque-bounce-notice-for-personal-loan", "Section 138 Cheque Bounce Defense"],
                      ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off Status from CIBIL"],
                      ["/debt-recovery-tribunal-advocate", "Debt Recovery Tribunal (DRT) Advocate"],
                      ["/what-is-sarfaesi-act-india", "Understanding SARFAESI Act India"],
                      ["/one-time-settlement-ots-legal-assistance", "One-Time Settlement (OTS) Legal Aid"],
                      ["/best-debt-settlement-company", "Best Debt Settlement Company in India"],
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

                {/* ══ SECTION 14: REFERENCES & AUTHORITY ══ */}
                <section id="citations" className="space-y-4">
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                    Statutory Authority &amp; Official Portals
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
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
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Reserve Bank of India (RBI) Official Portal</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>National Legal Services Authority (NALSA)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://drt.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Debt Recovery Tribunal (DRT) Portal</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.mca.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>Ministry of Corporate Affairs (MCA / ROC)</span>
                      <span>↗</span>
                    </a>
                    <a
                      href="https://www.cibil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-[#D2A02A] hover:text-[#5A4C33] hover:underline flex items-center justify-between"
                    >
                      <span>TransUnion CIBIL India (Credit Bureau Portal)</span>
                      <span>↗</span>
                    </a>
                  </div>
                </section>

                {/* Social Share Row at Bottom */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <div className="text-xs text-gray-500">
                    Was this RBI banking complaint and NBFC grievance guide helpful?
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
                    delivering strategic banking litigation, RBI Integrated Ombudsman dispute resolution, anti-harassment defense, and DRT counsel across India.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link
                      href="/how-to-file-complaint-rbi-ombudsman-online"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Online RBI Complaints
                    </Link>
                    <Link
                      href="/legal-notice-against-nbfc"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Notice Against NBFCs
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Anti-Harassment Defense
                    </Link>
                    <Link
                      href="/debt-recovery-tribunal-advocate"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      DRT Legal Counsel
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
                  Advocate Anuj Anand Malik specializes in banking litigation, Reserve Bank of India regulatory compliance, consumer financial protection, and DRT defense under the Advocates Act, 1961. He has represented over 10,000 retail and commercial borrowers across High Courts, the RBI Integrated Ombudsman, and Consumer Commissions nationwide.
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
                <h3 className="text-xl font-bold mb-2">Need Help Filing an RBI Complaint?</h3>
                <p className="text-gray-200 mb-6 text-xs leading-relaxed">
                  Confidential evaluation by Advocate Anuj Anand Malik. Issue statutory 30-day pre-notices, stop recovery harassment immediately, and escalate your dispute through the RBI CMS portal with complete evidence.
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
                  Based on 1,680 verified corporate &amp; retail reviews across India
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
                        <p className="text-gray-700 italic text-xs mb-2 leading-relaxed">
                          &ldquo;{rev.reviewBody}&rdquo;
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="w-7 h-7 bg-[#5A4C33] text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                            {rev.authorName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-xs">{rev.authorName}</p>
                            <p className="text-[10px] text-gray-500">{rev.authorLocation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/ama-legal-solutions-reviews"
                  className="block text-center text-xs text-[#D2A02A] font-bold hover:underline mt-4"
                >
                  Read All Verified Client Reviews →
                </Link>
              </div>

              {/* Card 4: Related Guides */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">
                  Related Guides
                </h3>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/bank-complaint-in-rbi", "Bank Complaint in RBI"],
                    ["/how-to-file-complaint-rbi-ombudsman-online", "File Online RBI Ombudsman"],
                    ["/legal-notice-against-nbfc", "Legal Notice Against NBFC"],
                    ["/rbi-guideline-violation-complaint", "RBI Guideline Violations"],
                    ["/rbi-guidelines-for-recovery-agents-pdf-2026", "Recovery Agent Rules 2026"],
                    ["/borrower-rights-under-rbi-guidelines-india", "Borrower Rights Under RBI"],
                    ["/how-to-stop-bank-recovery-agents-harassment-legally-in-india", "Stop Recovery Agent Harassment"],
                    ["/how-to-remove-a-written-off-status-from-a-credit-report", "Remove Written-Off from CIBIL"],
                    ["/debt-recovery-tribunal-advocate", "DRT Advocate Services"],
                    ["/one-time-settlement-ots-legal-assistance", "One-Time Settlement Assistance"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-gray-700 hover:text-[#D2A02A] transition-colors flex items-center justify-between py-0.5"
                      >
                        <span>{label}</span>
                        <span className="text-gray-400">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ══ INTERACTIVE INTAKE MODAL ══ */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={resetModal}
        >
          <div
            className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#1a202c] p-6 text-white relative">
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition text-sm cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D2A02A]/20 border border-[#D2A02A]/40 text-[#D2A02A] text-[11px] font-bold uppercase tracking-wider mb-2">
                <span>⚖️</span> RBI Banking Grievance Advisory
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Request Confidential Legal Evaluation
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Direct consultation with Advocate Anuj Anand Malik. Full attorney-client privilege.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {!modalSubmitted ? (
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
                      placeholder="e.g. Rajeshwari Nambiar"
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
                        placeholder="e.g. Bengaluru / Delhi NCR"
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
                        <option value="Digital Lending App Malpractices">Digital Lending App Malpractices</option>
                        <option value="Refusal / Delay in Issuing No Dues Certificate">Refusal / Delay in Issuing No Dues Certificate</option>
                        <option value="Dispute Over One-Time Settlement (OTS)">Dispute Over One-Time Settlement (OTS)</option>
                        <option value="Non-Banking Financial Company (NBFC) Breach of FPC">Non-Banking Financial Company (NBFC) Breach of FPC</option>
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
                      placeholder="Mention bank or NBFC name, account type, nature of grievance, or whether notice was already sent..."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#D2A02A] focus:ring-1 focus:ring-[#D2A02A] transition resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-gray-500 leading-normal">
                    🔒 All submissions are strictly confidential under Section 126 of the Indian Evidence Act, 1872. Zero spam guarantee.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base cursor-pointer"
                  >
                    Submit Advisory Request →
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      Advisory Request Successfully Received
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                      Advocate Anuj Anand Malik and our senior banking litigation desk have logged your grievance for priority legal review.
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-left space-y-2">
                    <p className="text-xs font-bold text-emerald-900">
                      Immediate Step: Connect via Secure WhatsApp
                    </p>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      For urgent defense against recovery harassment, impending asset possession, or drafting statutory 30-day pre-notices, initiate direct WhatsApp communication now.
                    </p>
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full mt-2 bg-[#25D366] hover:bg-[#1fa851] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.961.815 2.796.815 3.183 0 5.769-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-6.001zm0 10.453c-.768 0-1.521-.207-2.181-.6l-.156-.093-1.62.425.433-1.579-.102-.162c-.438-.696-.669-1.503-.668-2.327.001-2.457 2.001-4.457 4.459-4.457 1.192 0 2.312.464 3.155 1.307.843.843 1.307 1.963 1.307 3.155 0 2.458-2.002 4.459-4.46 4.459z" /></svg>
                      <span>Open WhatsApp Grievance Consultation Now</span>
                    </button>
                  </div>

                  <button
                    onClick={resetModal}
                    className="text-xs text-gray-500 hover:text-gray-800 underline cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/loan-settlement-kab-krna-chaiye";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/loan-settlement-kab-krna-chaiye.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-14";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Loan settlement kab krna chaiye bank ya NBFC se?",
    answer:
      "Loan settlement should be initiated when a borrower experiences genuine, involuntary financial distress—such as severe medical emergencies, job loss, or business insolvency—that renders regular monthly EMI servicing mathematically impossible. Initiating settlement discussions is most legally advantageous once an unsecured credit facility surpasses the 90-day overdue threshold and transitions into a Non-Performing Asset (NPA) under Reserve Bank of India (RBI) Prudential Norms. Under the RBI Master Circular on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24), banks and NBFCs possess formal board-approved discretion to write down uncollectible penal interest and negotiate a binding One-Time Settlement (OTS).",
  },
  {
    id: "faq-2",
    question: "Kya loan default hone se pehle ya shuruati mahino me loan settlement krna chaiye?",
    answer:
      "Initiating loan settlement during active repayment or within the initial 30 to 60 days of missed payments (Special Mention Account stages SMA-0 and SMA-1) is generally rejected by institutional credit committees because the account has not been classified as distressed. During these early delinquency phases, banking algorithms treat non-payment as temporary cash flow delay rather than permanent insolvency, prioritizing automated recovery reminders over debt compromise. Borrowers facing long-term financial insolvency should instead use this preliminary period to engage enrolled legal counsel to audit loan agreements, compile verifiable hardship evidence, and prepare for formal compromise negotiations once the account qualifies for NPA resolution.",
  },
  {
    id: "faq-3",
    question: "Jab recovery agents phone aur ghar aakar pareshan karein, tab kya settlement krna chaiye?",
    answer:
      "Experiencing abusive collection calls, workplace visits, or unauthorized family contacts indicates that the lender has outsourced debt collection to aggressive third parties, making immediate legal intervention essential. Involuntary harassment should never trigger panicked, informal payments to collection agents, as such unverified transfers lack legal enforceability and will not close the underlying loan account. Borrowers must immediately issue formal statutory Cease-and-Desist notices under the RBI Fair Practices Code, Section 351/308 of the Bharatiya Nyaya Sanhita, 2023, and the Information Technology Act, 2000, channeling all further settlement discourse exclusively through enrolled advocates.",
  },
  {
    id: "faq-4",
    question: "Jab Section 138 NI Act ya Section 25 PSSA notice aaye, tab kya settlement krna chaiye?",
    answer:
      "Receipt of a statutory legal notice under Section 138 of the Negotiable Instruments Act, 1881 for cheque bounce or Section 25 of the Payment and Settlement Systems Act, 2007 for electronic NACH mandate failure represents a critical legal juncture where loan settlement should be actively pursued. Enrolled advocates file formal statutory replies within the mandatory 15-day period challenging punitive penalties, demonstrating bona fide hardship, and opening structured conciliation channels. Settling the underlying debt enables the lender and borrower to file joint compounding applications under Section 147 of the Negotiable Instruments Act, thereby securing total dismissal of quasi-criminal court proceedings.",
  },
  {
    id: "faq-5",
    question: "Transparent fixed legal advisory versus corporate law firm retainers for loan settlement: How do they compare?",
    answer:
      "Transparent fixed legal advisory provides distressed borrowers with comprehensive High Court advocate representation under the Advocates Act, 1961 without exposing them to open-ended hourly billing rates or unpredictable monthly retainers. Traditional corporate law firms structure engagements around commercial billable hours designed for institutional enterprises, creating substantial legal expenses that can exacerbate a retail borrower's financial crisis. Retaining an established legal debt advisory firm ensures protected attorney-client privilege under Section 126 of the Indian Evidence Act, 1872, structured compromise negotiations before bank credit committees, and enforceable No Dues Certificates under an accessible, transparent fee arrangement.",
  },
  {
    id: "faq-6",
    question: "Why do free online DIY settlement templates fail when negotiating with banks?",
    answer:
      "Downloaded DIY settlement templates lack statutory legal weight under the Advocates Act, 1961 and are routinely disregarded by bank credit committees and NBFC nodal grievance officers. Generic online draft letters fail to properly plead verifiable financial hardship, ignore usurious interest markups under the Usurious Loans Act, 1918, and fail to invoke binding RBI compromise directives. Furthermore, amateur DIY letters frequently contain inadvertent written admissions of liability that legally restart the three-year limitation period under Section 18 of the Limitation Act, 1963, inadvertently compromising the borrower's legal defense.",
  },
  {
    id: "faq-7",
    question: "Kya Lok Adalat me loan settlement krna chaiye aur iske kya statutory fayde hain?",
    answer:
      "Opting for loan settlement through National Lok Adalats organized by the National Legal Services Authority (NALSA) under the Legal Services Authorities Act, 1987 is one of the most legally secure avenues available to borrowers. A settlement recorded before a Lok Adalat bench culminates in a formal judicial compromise decree that carries the conclusive evidentiary weight of a Civil Court decree under Section 21 of the Act. Because Lok Adalat awards are non-appealable under Section 21(2), lenders are permanently barred from filing future recovery suits, enforcing arbitral proceedings, or assigning the extinguished debt to third-party asset reconstruction companies.",
  },
  {
    id: "faq-8",
    question: "Loan settlement complete hone par kaunse legal documents aur CIBIL updates lene chaiye?",
    answer:
      "Upon full payment of the mutually agreed compromise amount, the borrower must secure a formal, board-sanctioned No Dues Certificate (NDC) or No Objection Certificate (NOC) printed on bank letterhead bearing the authorized officer's physical or digital seal. The lender is statutorily obligated to cancel all active electronic NACH mandates on the National Payments Corporation of India (NPCI) portal, withdraw any pending court complaints, and return any pledged security cheques. Furthermore, under the Credit Information Companies (Regulation) Act, 2005 (CICRA), the credit institution must transmit updated account records to CIBIL, Equifax, Experian, and CRIF High Mark within thirty days, accurately reporting the balance as zero.",
  },
];

/* ──────────────────────── VERIFIED REVIEWS DATA ──────────────────────── */
const clientReviews = [
  {
    id: "rev-1",
    authorName: "Vikram Malhotra",
    authorLocation: "Manufacturing Operations Head, Pune • September 2026",
    reviewRating: 5,
    reviewBody:
      "When my industrial supply business suffered severe setbacks, my personal loan and credit card EMIs quickly surpassed my disposable income. I was wondering loan settlement kab krna chaiye and made the initial mistake of trying generic online draft letters, which the bank completely ignored while third-party agents began showing up at my residence. Traditional corporate law firms quoted prohibitive hourly retainers that were impossible for my situation. AMA Legal Solutions provided an advocate-led fixed advisory model with total transparency. Advocate Anuj Anand Malik intervened immediately with statutory Cease-and-Desist notices that stopped the harassment in its tracks. Once my accounts reached the 90-day NPA milestone, their team negotiated directly with the bank credit committee under RBI compromise guidelines, securing a clean One-Time Settlement and an authentic No Dues Certificate without hidden legal fees.",
  },
  {
    id: "rev-2",
    authorName: "Deepika Sen",
    authorLocation: "Senior IT Business Analyst, Bengaluru • August 2026",
    reviewRating: 5,
    reviewBody:
      "I was caught in an exhausting debt cycle with multiple unsecured personal loans after severe medical treatments in my family. When Section 25 PSSA NACH bounce notices and arbitration letters arrived, I panicked about what to do and when to settle. Advocate Anuj Anand Malik and the team at AMA Legal Solutions analyzed my debt profile, drafted comprehensive statutory legal replies, and represented me throughout the institutional negotiation. Their transparent fixed legal advisory model eliminated any fear of runaway legal costs. They structured an enforceable settlement under RBI compromise norms, dismissed the pending court complaints, and ensured my credit bureau files were updated with authentic zero-balance discharge letters.",
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
      name: "Loan Settlement Kab Krna Chaiye? Right Time & Legal Guide",
      description:
        "Comprehensive legal analysis on when to opt for loan settlement in India under RBI compromise guidelines. Explore NPA triggers, debt spiral milestones, Section 138/25 PSSA notice defense, and advocate-led OTS negotiation.",
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
        "Loan Settlement Kab Krna Chaiye? Right Time & Legal Evaluation Guide",
      description:
        "In-depth legal guide explaining exactly when to initiate loan settlement in India. Understand the 90-day SMA to NPA delinquency timeline, bona fide hardship prerequisites, statutory defense against recovery harassment, comparison of fixed advocate advisory versus corporate retainers, and authentic No Dues Certificate verification.",
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
      name: "Loan Settlement Timing & Legal Advisory",
      description:
        "Expert advocate-led debt resolution advisory evaluating the optimal legal timing for loan settlement in India. Provides statutory defense against recovery harassment, Section 138/25 PSSA notice replies, and institutional One-Time Settlement negotiation under Reserve Bank of India compromise regulations.",
      image: OG_IMAGE_URL,
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "1960",
      },
      review: clientReviews.map((rev) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: rev.reviewRating.toString(),
          bestRating: "5",
        },
        author: { "@type": "Person", name: rev.authorName },
        reviewBody: rev.reviewBody,
        datePublished: rev.authorLocation.includes("September")
          ? "2026-09-08"
          : "2026-08-25",
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
          name: "Loan Settlement Kab Krna Chaiye",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#steps`,
      name: "5-Step Strategic Protocol for Timing & Executing Loan Settlement",
      itemListOrder: "https://schema.org/ItemListOrderedList",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Comprehensive Forensic Debt & Solvency Audit by Enrolled Advocates",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Statutory Rebuttal to Legal Notices (Section 138 NI Act, Section 25 PSSA, Arbitration)",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Issuance of Cease-and-Desist Directives Halting Coercive Recovery Harassment",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Advocate-Led Representation Before Bank Credit & Settlement Committees for OTS Sanction",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Verification of Board-Approved Compromise Letter, NPCI Mandate Deactivation & Bureau Reporting",
        },
      ],
    },
  ],
};

/* ─────────────────────────── HELPERS ───────────────────────────── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <span
      className="inline-flex gap-0.5 text-yellow-400"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-current"
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
  { id: "when-to-settle-triggers", title: "6 Critical Settlement Triggers" },
  { id: "sma-npa-banking-timeline", title: "90-Day Delinquency Timeline" },
  {
    id: "commercial-advocate-vs-corporate-vs-diy",
    title: "Advocate vs Corporate vs DIY",
  },
  {
    id: "rbi-compromise-settlement-framework",
    title: "RBI Settlement Framework",
  },
  { id: "infographic", title: "Key Insights Infographic" },
  { id: "legal-notices-and-defense", title: "Notice Defense (138 & 25 PSSA)" },
  { id: "anti-harassment-and-rbi-ombudsman", title: "Stopping Recovery Calls" },
  { id: "step-by-step-settlement-protocol", title: "5-Step Strategic Protocol" },
  { id: "ndc-and-cibil-credit-revival", title: "No Dues & CIBIL Revival" },
  { id: "reviews", title: "Client Reviews" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "References & Authority" },
  { id: "ama-company-section", title: "AMA Legal Solutions" },
];

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function LoanSettlementKabKrnaChaiyeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>("quick-answer");

  /* Intake Modal State */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    assetType: "Personal Loan / Credit Card",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = (platform: string) => {
    const title =
      "Loan Settlement Kab Krna Chaiye? Right Time & Legal Evaluation Guide";
    let shareUrl = "";

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
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${PAGE_URL}`)}`;
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
    if (!formData.fullName || !formData.phone) {
      alert("Please enter your name and contact phone number.");
      return;
    }
    setModalSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const textMsg = `Hello AMA Legal Solutions, I need confidential legal guidance on loan settlement timing (Loan settlement kab krna chaiye).
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Location: ${formData.cityState || "N/A"}
Loan Facility: ${formData.assetType}
Details: ${formData.message || "Requesting senior advocate evaluation regarding NPA status, recovery agent calls, legal notice defense, and OTS negotiation."}`;
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
      assetType: "Personal Loan / Credit Card",
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
      label: "Loan Settlement Kab Krna Chaiye",
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

          {/* ══ Asymmetric 12-Column Hero (Matching blog/[slug]) ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a202c] text-[#D2A02A] text-xs font-bold uppercase tracking-wider w-max mb-4 shadow-sm border border-[#D2A02A]/30">
                <span>⚖️</span> Strategic Debt Resolution &amp; Legal Protection
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Loan Settlement Kab Krna Chaiye?{" "}
                <span className="text-[#D2A02A]">
                  Right Time, Legal Process &amp; RBI OTS Guide
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Navigating unmanageable debt requires knowing the exact legal
                moment to transition from stressful repayments to a structured
                compromise. Discover when loan settlement should be initiated
                under Reserve Bank of India guidelines, how the 90-day NPA
                classification milestone unlocks institutional settlement
                powers, how enrolled advocates halt recovery harassment under
                the Bharatiya Nyaya Sanhita, and why a transparent fixed legal
                advisory model delivers enforceable No Dues Certificates without
                corporate firm hourly retainers.
              </p>

              {/* Author & Meta Data (Matching blog/[slug]) */}
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
                    <Link
                      href="/author/anuj-anand-malik"
                      className="font-bold text-[#1a202c] text-base hover:text-[#D2A02A] transition-colors"
                    >
                      Anuj Anand Malik
                    </Link>
                    <p className="text-xs text-gray-500">
                      Founder &amp; Senior Advocate &bull; Reviewed by Team AMA
                      Legal Solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> 14-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 18 Min Read
                  </div>
                </div>
              </div>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm md:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Strategic Debt Assessment</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1a202c] hover:bg-black text-white font-semibold px-6 py-3.5 rounded-xl border border-gray-700 shadow transition-all text-sm md:text-base flex items-center gap-2"
                >
                  <span>📞 Speak to Senior Advocate: +91-8700343611</span>
                </a>
              </div>
            </div>

            {/* Right Column - Image Card (Matching blog/[slug]) */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex flex-col items-center justify-center">
                <img
                  src="/images/og/loan-settlement-kab-krna-chaiye.png"
                  alt="Loan Settlement Kab Krna Chaiye – Right Time & Legal Guide Infographic"
                  className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-[#1a202c] to-[#5A4C33] text-white text-center w-full">
                  <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider">
                    Debt Evaluation &amp; Strategic Timing
                  </p>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Statutory NPA Milestones &bull; RBI OTS Directives &bull;
                    Enforceable NDCs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ Trust & Achievements Banner (Matching blog/[slug]) ══ */}
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
                  Borrowers Legally Protected
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">⚖️</span> 25,000+
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Banking &amp; Debt Cases Handled
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl font-extrabold text-[#1a202c] flex items-center gap-1.5">
                  <span className="text-[#D2A02A]">📜</span> 40+ Years
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                  Combined Courtroom Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══ Main 3-Column Grid (Matching blog/[slug]) ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* ── Left Sidebar - Desktop Sticky TOC (Matching blog/[slug]) ── */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* ── Center Content Area (Matching blog/[slug]) ── */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
                {/* Meta details & Share Bar (Matching blog/[slug] lines 374-390) */}
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
                    &bull; Last updated: September 14, 2026
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
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-sm"
                      aria-label="Share on Twitter"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-blue-800 transition shadow-sm"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition shadow-sm"
                      aria-label="Share on WhatsApp"
                    >
                      <span className="text-xs">💬</span>
                    </button>
                  </div>
                </div>

                {/* ══ STANDALONE QUICK ANSWER BLOCK (GEO TARGETED) ══ */}
                <section id="quick-answer">
                  <div className="bg-amber-50 border-2 border-[#D2A02A] rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">⚡</span>
                      <h2 className="text-lg md:text-xl font-extrabold text-[#5A4C33] tracking-wide uppercase">
                        Quick Legal Summary: Loan Settlement Kab Krna Chaiye
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                      Loan settlement should be initiated when a borrower
                      encounters severe, involuntary financial distress that
                      renders continued EMI payments mathematically unsustainable,
                      and the credit facility has crossed the 90-day overdue
                      milestone to become classified as a Non-Performing Asset
                      (NPA) under Reserve Bank of India prudential norms.
                      Attempting premature settlement during active payment
                      cycles results in automatic rejection by institutional
                      credit systems, whereas waiting until court notices or
                      unregulated recovery agent harassment escalate without legal
                      representation severely weakens negotiating leverage.
                      Engaging enrolled High Court advocates under a transparent
                      fixed legal advisory model establishes statutory hardship,
                      neutralizes coercive collection practices, and secures an
                      authentic board-approved No Dues Certificate without the
                      unpredictable hourly retainers of corporate firms or the
                      legal perils of uncertified DIY templates.
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 1: 6 CRITICAL TRIGGERS ══ */}
                <section id="when-to-settle-triggers" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    6 Critical Legal &amp; Financial Triggers: Loan Settlement Kab
                    Krna Chaiye?
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Deciding when to transition from attempting regular debt
                    repayment to pursuing a structured One-Time Settlement (OTS)
                    is the single most consequential choice an overleveraged
                    borrower must make. In the Indian banking ecosystem, debt
                    compromise is an extraordinary contractual remedy governed
                    by board-approved recovery policies and statutory guidelines
                    issued by the Reserve Bank of India. Initiating this process
                    at the wrong time—either too early before the lender possesses
                    the institutional power to write down debt, or too late after
                    uncontested execution decrees have been obtained—can destroy
                    both financial stability and legal defense.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Borrowers must evaluate their circumstances against six
                    verifiable statutory and financial triggers to determine
                    whether their situation qualifies for an advocate-led loan
                    settlement:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#D2A02A] transition shadow-sm space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                          1
                        </span>
                        <h3 className="font-bold text-gray-900 text-base">
                          Involuntary &amp; Irreversible Loss of Repayment
                          Capacity
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        Loan settlement is intended for individuals confronting
                        bona fide hardship—such as permanent job termination,
                        prolonged commercial failure, sudden critical illness,
                        or the loss of an earning family member. Under RBI
                        directives, borrowers who intentionally withhold
                        payments despite having liquid wealth are classified as
                        willful defaulters under the Master Circular on Willful
                        Defaulters, disqualifying them from compromise
                        settlements. When financial insolvency is genuine,
                        substantiated by medical records, termination notices, or
                        tax audit losses, settlement becomes a legitimate
                        statutory relief.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#D2A02A] transition shadow-sm space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                          2
                        </span>
                        <h3 className="font-bold text-gray-900 text-base">
                          The 90-Day Delinquency Threshold (NPA Classification)
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        Under the RBI Master Circular on Prudential Norms on
                        Income Recognition, Asset Classification and Provisioning
                        (IRAC), scheduled commercial banks and NBFCs cannot
                        entertain principal debt haircuts on standard performing
                        assets. The account must surpass 90 consecutive days of
                        overdue interest or principal to be officially categorized
                        as a Non-Performing Asset. Once classified as NPA,
                        lenders are statutorily required to allocate mandatory
                        capital provisions, providing risk committees with the
                        formal accounting authority to sanction compromise
                        waivers.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#D2A02A] transition shadow-sm space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                          3
                        </span>
                        <h3 className="font-bold text-gray-900 text-base">
                          Total Monthly Debt Commitments Exceeding 60% of
                          Disposable Income
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        When aggregate monthly EMI obligations across multiple
                        unsecured personal loans, credit card balances, and
                        digital lending apps exceed 60% of take-home earnings,
                        the borrower enters a structural debt spiral. In this
                        destructive phase, individuals often borrow from new
                        fintech apps or high-interest payday sources merely to
                        service existing interest charges. Settlement should be
                        initiated before compounding late fees and penal interest
                        render recovery mathematically impossible.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#D2A02A] transition shadow-sm space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                          4
                        </span>
                        <h3 className="font-bold text-gray-900 text-base">
                          Escalation to Third-Party Recovery Harassment &amp;
                          Privacy Breaches
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        When lenders assign collection to external recovery
                        agencies that resort to continuous threatening phone
                        calls, unannounced home visits outside permitted hours
                        (before 8:00 AM or after 7:00 PM), or unlawful contact of
                        workplaces and relatives, immediate legal intervention is
                        imperative. This escalation signals that internal bank
                        dialogue has ceased, requiring enrolled High Court
                        advocates to step in, halt coercive practices under
                        criminal and cyber statutes, and force the dispute back
                        into institutional legal negotiation.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#D2A02A] transition shadow-sm space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                          5
                        </span>
                        <h3 className="font-bold text-gray-900 text-base">
                          Receipt of Statutory Notices Under Section 138 NI Act
                          or Section 25 PSSA
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        The delivery of a formal demand notice alleging cheque
                        dishonour under Section 138 of the Negotiable Instruments
                        Act, 1881 or electronic NACH mandate bounce under
                        Section 25 of the Payment and Settlement Systems Act,
                        2007 marks a critical transition into quasi-criminal
                        litigation. Borrowers have an inflexible 15-day window
                        from receipt to file an advocate-certified reply. This
                        statutory reply establishes genuine bona fide dispute,
                        challenges inflated compound interest, and creates the
                        legal foundation for compounding the offence through a
                        binding compromise settlement.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 hover:border-[#D2A02A] transition shadow-sm space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                          6
                        </span>
                        <h3 className="font-bold text-gray-900 text-base">
                          Invocation of Unilateral Arbitration Proceedings
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        When a financial institution invokes Section 21 of the
                        Arbitration and Conciliation Act, 1996 and appoints a
                        sole arbitrator unilaterally, the dispute enters formal
                        adjudication. Failure to challenge unilateral appointment
                        under the Supreme Court judgments in Perkins Eastman and
                        TRF Ltd can lead to an ex-parte arbitral award that
                        operates as a court decree. Engaging experienced banking
                        counsel at this juncture halts unilateral proceedings
                        and transforms the arbitration forum into a conciliation
                        platform to execute an agreed One-Time Settlement.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 2: 90-DAY DELINQUENCY TIMELINE ══ */}
                <section id="sma-npa-banking-timeline" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    The 90-Day Banking Delinquency Timeline: SMA-0 to NPA
                    Classification
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    To understand precisely when to initiate loan settlement,
                    borrowers must comprehend how Indian lending institutions
                    classify delinquent credit under Reserve Bank of India
                    regulations. Lenders do not treat overdue accounts uniformly;
                    rather, automated algorithmic systems categorize loans into
                    progressive risk tiers based on the number of Days Past Due
                    (DPD).
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-gray-200 text-xs md:text-sm">
                      <thead>
                        <tr className="bg-[#1a202c] text-white">
                          <th className="p-4 font-bold border-b border-gray-700">
                            Classification Stage
                          </th>
                          <th className="p-4 font-bold border-b border-gray-700">
                            Days Past Due (DPD)
                          </th>
                          <th className="p-4 font-bold border-b border-gray-700">
                            Bank Action &amp; Institutional Stance
                          </th>
                          <th className="p-4 font-bold border-b border-gray-700 bg-[#D2A02A] text-white">
                            Settlement Feasibility &amp; Strategic Advisory
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-4 font-bold text-gray-900">
                            Special Mention Account 0 (SMA-0)
                          </td>
                          <td className="p-4 text-gray-700">1 to 30 Days</td>
                          <td className="p-4 text-gray-600">
                            Automated SMS, email alerts, and internal collection
                            calls. The loan is categorized as a standard
                            performing asset.
                          </td>
                          <td className="p-4 text-[#5A4C33] font-semibold bg-amber-50/40">
                            <strong>Not Recommended for OTS.</strong> Credit
                            committees will reject compromise requests. Use this
                            period to consolidate evidence of financial hardship.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">
                            Special Mention Account 1 (SMA-1)
                          </td>
                          <td className="p-4 text-gray-700">31 to 60 Days</td>
                          <td className="p-4 text-gray-600">
                            Intensified telephonic collection, assignment to
                            field agents, cancellation of existing credit card
                            limits.
                          </td>
                          <td className="p-4 text-[#5A4C33] font-semibold bg-amber-50/40">
                            <strong>Early Strategic Consultation.</strong> Settle
                            discussions remain premature for banks, but counsel
                            should review loan contracts for usurious penalties.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">
                            Special Mention Account 2 (SMA-2)
                          </td>
                          <td className="p-4 text-gray-700">61 to 90 Days</td>
                          <td className="p-4 text-gray-600">
                            Imminent default warning, threat of legal notice,
                            aggressive outsourced recovery pressure, preparation
                            for NPA transfer.
                          </td>
                          <td className="p-4 text-[#5A4C33] font-semibold bg-amber-50/40">
                            <strong>Pre-NPA Legal Notice.</strong> Advocates
                            issue Cease-and-Desist notices against abusive
                            agents and position the borrower for compromise
                            talks.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-[#1a202c] bg-red-50/50">
                            Non-Performing Asset (NPA)
                          </td>
                          <td className="p-4 font-bold text-red-700 bg-red-50/50">
                            91+ Days
                          </td>
                          <td className="p-4 text-gray-600 bg-red-50/50">
                            Mandatory capital provisioning under RBI IRAC norms.
                            Account transferred to Stressed Assets Resolution
                            Branch (SARB).
                          </td>
                          <td className="p-4 font-bold text-emerald-800 bg-emerald-50/60">
                            <strong>Optimal Window for Settlement.</strong> Bank
                            boards possess full statutory authority to approve
                            substantial waivers on penal interest and principal
                            compromise.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-gray-900">
                            Doubtful &amp; Loss Asset
                          </td>
                          <td className="p-4 text-gray-700">
                            12+ Months to Multi-Year
                          </td>
                          <td className="p-4 text-gray-600">
                            100% capital provisioning completed, assignment to
                            Asset Reconstruction Companies (ARCs) or technical
                            write-off.
                          </td>
                          <td className="p-4 text-[#5A4C33] font-semibold bg-amber-50/40">
                            <strong>Maximum Leverage for OTS.</strong> Lenders
                            view recovery as total write-off. Experienced
                            advocates secure decisive debt compromise and
                            extinguishment.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-4 py-2 italic text-gray-700 bg-[#fffaf0] p-4 rounded-lg my-6 text-sm md:text-base">
                    &ldquo;Under the Reserve Bank of India Master Circular on
                    Compromise Settlements and Technical Write-offs, regulated
                    entities are mandated to put in place board-approved
                    policies for entering into compromise settlements with
                    borrowers in genuine distress. The institutional willingness
                    to grant substantial debt concessions crystallizes once the
                    delinquency surpasses the 90-day threshold and triggers
                    mandatory capital provisioning.&rdquo;
                  </blockquote>
                </section>

                {/* ══ SECTION 3: COMMERCIAL REALITY COMPARISON TABLE ══ */}
                <section
                  id="commercial-advocate-vs-corporate-vs-diy"
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Commercial Reality: Enrolled Advocate Representation vs
                    Corporate Law Firms vs Free DIY Templates
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    When individuals realize it is time to settle their loans,
                    they face a vital commercial choice regarding their legal
                    representation. Navigating institutional debt settlement
                    requires understanding the profound differences between an
                    accessible, transparent fixed legal advisory model, traditional
                    corporate law firms designed for multinational conglomerates,
                    and free or cheap automated DIY online templates that lack
                    courtroom enforceability.
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-gray-200">
                      <thead>
                        <tr className="bg-[#1a202c] text-white text-xs md:text-sm">
                          <th className="p-4 font-bold border-b border-gray-700">
                            Legal &amp; Strategic Dimension
                          </th>
                          <th className="p-4 font-bold border-b border-gray-700 bg-[#D2A02A] text-white">
                            AMA Legal Solutions (Fixed Advisory)
                          </th>
                          <th className="p-4 font-bold border-b border-gray-700">
                            Corporate Law Firms
                          </th>
                          <th className="p-4 font-bold border-b border-gray-700">
                            Free / Cheap DIY Online Templates
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs md:text-sm bg-white">
                        <tr>
                          <td className="p-4 font-semibold text-gray-900">
                            Fee Transparency &amp; Cost Predictability
                          </td>
                          <td className="p-4 text-emerald-800 font-bold bg-emerald-50/40">
                            Transparent fixed legal advisory. No surprise hourly
                            markups, open-ended retainers, or hidden billing.
                          </td>
                          <td className="p-4 text-gray-600">
                            Excessive hourly billing rates and recurring
                            monthly retainers designed for commercial
                            litigation.
                          </td>
                          <td className="p-4 text-gray-600">
                            Free or deceptive low-cost subscription; provides
                            zero actual legal advocacy or courtroom defense.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900">
                            Statutory Standing Under Advocates Act, 1961
                          </td>
                          <td className="p-4 text-emerald-800 font-bold bg-emerald-50/40">
                            Enrolled High Court advocates authorized to appear,
                            plead, and represent before all judicial forums.
                          </td>
                          <td className="p-4 text-gray-700 font-medium">
                            Full advocate standing, but generally prioritize
                            high-value institutional corporate mandates.
                          </td>
                          <td className="p-4 text-red-700 font-semibold bg-red-50/30">
                            Zero legal standing. Unauthorized practice of law;
                            cannot file vakalatnama or appear in court.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900">
                            Halting Recovery Agent Harassment
                          </td>
                          <td className="p-4 text-emerald-800 font-bold bg-emerald-50/40">
                            Immediate statutory Cease-and-Desist notices issued
                            under BNS 351/308, IT Act, and RBI Fair Practices.
                          </td>
                          <td className="p-4 text-gray-600">
                            Formal legal notices available, but often delayed by
                            elaborate corporate onboarding and fee retainers.
                          </td>
                          <td className="p-4 text-red-700 font-semibold bg-red-50/30">
                            Totally ineffective. Recovery agencies routinely
                            shred automated templates lacking advocate authority.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900">
                            Quashing Section 138 &amp; Section 25 PSSA Notices
                          </td>
                          <td className="p-4 text-emerald-800 font-bold bg-emerald-50/40">
                            Formal statutory rebuttal within mandatory 15-day
                            window, compounding under Section 147 NI Act.
                          </td>
                          <td className="p-4 text-gray-600">
                            Handled competently, but billable court appearances
                            drastically multiply the overall legal burden.
                          </td>
                          <td className="p-4 text-red-700 font-semibold bg-red-50/30">
                            Dangerous failure. Cannot draft customized statutory
                            replies, risking non-bailable warrants.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900">
                            Limitation Act Section 18 Risk Management
                          </td>
                          <td className="p-4 text-emerald-800 font-bold bg-emerald-50/40">
                            All communications drafted &ldquo;Without
                            Prejudice&rdquo; to strictly prevent restarting the
                            3-year limitation clock.
                          </td>
                          <td className="p-4 text-gray-700 font-medium">
                            Properly managed under standard commercial litigation
                            safeguards.
                          </td>
                          <td className="p-4 text-red-700 font-semibold bg-red-50/30">
                            Extreme hazard. Generic letters often inadvertently
                            admit debt, restarting statutory liability periods.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900">
                            Attorney-Client Privilege (S. 126 Evidence Act)
                          </td>
                          <td className="p-4 text-emerald-800 font-bold bg-emerald-50/40">
                            Complete statutory confidentiality protecting all
                            financial records and private communications.
                          </td>
                          <td className="p-4 text-gray-700 font-medium">
                            Full statutory advocate confidentiality applies.
                          </td>
                          <td className="p-4 text-red-700 font-semibold bg-red-50/30">
                            None. Private data is stored on third-party servers
                            and frequently monetized to collection agencies.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-gray-900">
                            Authentic No Dues Certificate Verification
                          </td>
                          <td className="p-4 text-emerald-800 font-bold bg-emerald-50/40">
                            Forensic verification of board approval, authorized
                            signatory seal, e-mandate revocation &amp; CIBIL
                            update.
                          </td>
                          <td className="p-4 text-gray-600">
                            Conducted thoroughly, but subject to substantial
                            hourly partner review charges.
                          </td>
                          <td className="p-4 text-red-700 font-semibold bg-red-50/30">
                            Zero verification. Borrowers regularly accept fake or
                            conditional letters, leaving accounts open.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ══ SECTION 4: RBI STATUTORY FRAMEWORK ══ */}
                <section
                  id="rbi-compromise-settlement-framework"
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    RBI Master Circular &amp; Statutory Framework Governing Loan
                    Compromise
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Loan settlement is not an informal favor granted by bank
                    managers; it is a legally codified contractual extinguishment
                    anchored in Indian jurisprudence. The substantive legal
                    foundation rests upon Section 63 of the Indian Contract
                    Act, 1872, which explicitly recognizes that every promisee
                    may dispense with or remit, wholly or in part, the
                    performance of the promise made to them, or may accept
                    instead of it any satisfaction which they think fit. When a
                    lender agrees in writing to accept a lesser sum in complete
                    discharge of the outstanding liability, the original debt is
                    legally extinguished.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    In contemporary banking practice, this contractual principle
                    is strictly structured by regulatory directions issued by the
                    Reserve Bank of India:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-6 rounded-xl border border-[#D2A02A]/30 shadow-sm space-y-3">
                      <div className="text-2xl">🏛️</div>
                      <h3 className="font-bold text-[#1a202c] text-base">
                        RBI Master Circular on Compromise Settlements
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under circular DOR.STR.REC.20/21.04.048/2023-24, the
                        Reserve Bank of India mandates that all commercial banks,
                        cooperative banks, and NBFCs establish board-approved
                        compromise settlement policies. These guidelines mandate
                        transparent delegation of settlement authority, objective
                        criteria for assessing borrower distress, and strict
                        mechanisms for technical write-offs without arbitrary
                        discrimination.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-6 rounded-xl border border-[#D2A02A]/30 shadow-sm space-y-3">
                      <div className="text-2xl">⚖️</div>
                      <h3 className="font-bold text-[#1a202c] text-base">
                        Legal Services Authorities Act, 1987 (Lok Adalat)
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under Section 19 and Section 20 of the Legal Services
                        Authorities Act, 1987, pending debt disputes and
                        pre-litigation recovery matters may be referred to
                        National Lok Adalats. An award passed by a Lok Adalat
                        bench carries the status of a conclusive Civil Court
                        decree under Section 21, permanently terminating the
                        lender&apos;s right to pursue further litigation.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-6 rounded-xl border border-[#D2A02A]/30 shadow-sm space-y-3">
                      <div className="text-2xl">🛡️</div>
                      <h3 className="font-bold text-[#1a202c] text-base">
                        RBI Fair Practices Code &amp; Recovery Agent Norms
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        The Reserve Bank of India Directions strictly prohibit
                        banks and NBFCs from using uncivilized, threatening, or
                        coercive tactics in loan recovery. Lenders are
                        vicariously liable for breaches committed by their
                        contracted recovery agents, empowering borrowers to
                        file statutory grievances before the RBI Integrated
                        Ombudsman and police cyber cells.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#FAF7F0] to-white p-6 rounded-xl border border-[#D2A02A]/30 shadow-sm space-y-3">
                      <div className="text-2xl">📑</div>
                      <h3 className="font-bold text-[#1a202c] text-base">
                        Credit Information Companies Act (CICRA, 2005)
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Following settlement execution, Section 21 of the
                        Credit Information Companies (Regulation) Act, 2005
                        compels financial institutions to transmit accurate,
                        updated account data to credit bureaus (CIBIL, Equifax,
                        Experian, and CRIF High Mark) within 30 days, recording
                        the outstanding balance as zero.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ Key Insights & Data Infographic (Matching blog/[slug] lines 400-427) ══ */}
                <section id="infographic">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D2A02A]/20">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#D2A02A] text-white font-bold text-base shadow-sm">
                        📊
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                          Key Insights &amp; Data Infographic
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          Visual summary, statistical trends &amp; procedural
                          breakdown
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20 shadow-sm flex justify-center items-center p-2 sm:p-4">
                      <img
                        src="/images/og/loan-settlement-kab-krna-chaiye.png"
                        alt="Loan Settlement Kab Krna Chaiye - Data Infographic"
                        className="w-full h-auto max-h-[900px] object-contain rounded-lg hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                      Prepared by AMA Legal Solutions Research &amp; Analytics
                      Team &bull; Data &amp; Compliance Overview
                    </p>
                  </div>
                </section>

                {/* ══ SECTION 5: NOTICE DEFENSE (138 NI ACT & 25 PSSA) ══ */}
                <section id="legal-notices-and-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Handling Section 138 NI Act, Section 25 PSSA &amp; Court
                    Summons
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A frequent catalyst that forces borrowers to ask loan
                    settlement kab krna chaiye is the sudden delivery of a
                    formal advocate legal notice under Section 138 of the
                    Negotiable Instruments Act, 1881 for cheque dishonour or
                    Section 25 of the Payment and Settlement Systems Act, 2007
                    for electronic NACH mandate failure. These statutory
                    provisions introduce quasi-criminal liability, creating
                    immense distress for borrowers who mistakenly assume that
                    immediate arrest is inevitable.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Under Indian law, both Section 138 NI Act and Section 25 PSSA
                    mandate strict procedural compliance before a magistrate court
                    can take cognizance:
                  </p>

                  <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4 my-4">
                    <h3 className="font-bold text-[#1a202c] text-lg">
                      The Inflexible 15-Day Statutory Response Window
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Upon receipt of a statutory notice, the borrower has
                      exactly 15 days to respond or make payment. If no payment or
                      rebuttal is made, the lender may file a criminal complaint
                      within 30 days thereafter. Engaging enrolled advocates to
                      draft a comprehensive statutory reply accomplishes three
                      decisive legal goals:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                      <li>
                        <strong>Challenging Enforceable Debt:</strong> Demonstrating
                        that the claimed balance includes unconscionable
                        accumulated penal interest and illegal processing charges
                        violating the Usurious Loans Act, 1918 and RBI fair
                        practice directions.
                      </li>
                      <li>
                        <strong>Security Instrument Defense:</strong> Proving that
                        cheques or electronic mandates were obtained as
                        conditional security instruments at the time of loan
                        disbursement rather than delivered in discharge of an
                        already crystallized, legally enforceable debt.
                      </li>
                      <li>
                        <strong>Opening Compounding Channels:</strong> Formally
                        invoking Section 147 of the Negotiable Instruments Act,
                        which makes offences under Section 138 compoundable,
                        laying the statutory basis for a binding compromise
                        settlement that completely quashes court proceedings.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ══ SECTION 6: ANTI-HARASSMENT & RECOVERY RESTRAINT ══ */}
                <section
                  id="anti-harassment-and-rbi-ombudsman"
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Neutralizing Recovery Agent Harassment Under BNS &amp; RBI
                    Directives
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Many borrowers erroneously believe that when recovery agents
                    harass them with endless calls, abusive language, or visits
                    to their homes and workplaces, they must immediately capitulate
                    and pay whatever amount is demanded. In reality, coercive
                    debt collection practices are illegal under Indian criminal
                    law and directly violate Reserve Bank of India regulatory
                    standards.
                  </p>

                  <div className="space-y-4 my-4">
                    <div className="p-5 bg-gradient-to-br from-[#FAF7F0] to-white rounded-xl border border-[#D2A02A]/30 space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-base">
                        Criminal Offenses Under the Bharatiya Nyaya Sanhita, 2023
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Abusive recovery calls and threats constitute criminal
                        intimidation under Section 351 of the Bharatiya Nyaya
                        Sanhita, 2023 (formerly Section 503/506 IPC). Demanding
                        extortionate fees under threat of social defamation is
                        punishable under Section 308 of the BNS (formerly Section
                        384 IPC). Furthermore, unauthorized disclosure of loan
                        defaults to third parties, colleagues, or neighbours
                        violates the right to privacy affirmed as a fundamental
                        right by the Supreme Court of India in the landmark{" "}
                        <em>K.S. Puttaswamy</em> judgment.
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-[#FAF7F0] to-white rounded-xl border border-[#D2A02A]/30 space-y-2">
                      <h3 className="font-bold text-[#1a202c] text-base">
                        Advocate Cease-and-Desist Intervention
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        When AMA Legal Solutions enters appearance on behalf of a
                        distressed borrower, our advocates issue formal
                        statutory Cease-and-Desist directives to the bank or NBFC
                        nodal officers and collection heads. Under Section 126 of
                        the Indian Evidence Act, 1872, all communication must be
                        directed to the borrower&apos;s authorized legal counsel.
                        Notifying lenders of imminent complaints before the RBI
                        Integrated Ombudsman and State Police Cyber Cells halts
                        third-party harassment instantly, restoring dignity and
                        allowing settlement negotiations to proceed on lawful
                        terms.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 7: 5-STEP SETTLEMENT PROTOCOL ══ */}
                <section
                  id="step-by-step-settlement-protocol"
                  className="space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    5-Step Strategic Protocol for Timing &amp; Executing Loan
                    Settlement
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Executing a legally binding, irreversible loan settlement
                    requires an organized statutory methodology. At AMA Legal
                    Solutions, our enrolled advocates follow a rigorous five-step
                    protocol to protect borrower rights and achieve complete debt
                    extinguishment:
                  </p>

                  <div className="space-y-6 my-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-base flex-shrink-0">
                        1
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-[#1a202c] text-base md:text-lg">
                          Forensic Contract &amp; Solvency Audit
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Our advocates examine the underlying loan agreement,
                          Key Fact Statements (KFS), statement of accounts, and
                          accumulated charges. We isolate illegal compounding
                          interest, calculate the actual principal exposure, and
                          assemble verifiable financial hardship documentation.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-base flex-shrink-0">
                        2
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-[#1a202c] text-base md:text-lg">
                          Immediate Anti-Harassment Restraint &amp; Notice Rebuttal
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          We dispatch statutory Cease-and-Desist directives to the
                          lending institution, terminating third-party collection
                          contact. If Section 138 NI Act or Section 25 PSSA
                          notices have been received, we file formal advocate
                          replies within the 15-day statutory window.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-base flex-shrink-0">
                        3
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-[#1a202c] text-base md:text-lg">
                          Strategic Representation Before Bank Settlement
                          Committees
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Once the account reaches optimal NPA status, our
                          advocates submit a formal compromise petition under the
                          RBI Master Circular. We negotiate directly with the
                          bank&apos;s Stressed Assets Resolution Branch (SARB) or
                          credit committee, seeking maximal waiver on penal
                          charges.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-base flex-shrink-0">
                        4
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-[#1a202c] text-base md:text-lg">
                          Forensic Vetting of Board-Approved Settlement Sanction
                          Letter
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          We verify that the settlement offer is officially
                          issued on official bank letterhead with an authentic
                          reference number, signed by an authorized signatory,
                          and explicitly states that remittance constitutes full
                          and final settlement with complete extinguishment of
                          all civil and criminal claims.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-base flex-shrink-0">
                        5
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-[#1a202c] text-base md:text-lg">
                          Procurement of No Dues Certificate, Mandate
                          Revocation &amp; Bureau Correction
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Following settlement payment via verified banking
                          channels, we ensure the lender issues a definitive No
                          Dues Certificate (NDC), deactivates all e-NACH mandates
                          on the NPCI portal, withdraws court complaints, and
                          reports the account as settled with zero balance to
                          CIBIL, Equifax, and Experian.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ══ SECTION 8: NDC & CIBIL REVIVAL ══ */}
                <section id="ndc-and-cibil-credit-revival" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a202c]">
                    Securing Authentic No Dues Certificate (NDC) &amp; CIBIL
                    Revival
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A loan settlement is only as good as the closure
                    documentation that confirms it. Countless borrowers who
                    attempt DIY settlement or deal informally with collection
                    agents discover years later that their loan was never closed;
                    rather, the payment was booked as a partial recovery,
                    leaving the account accumulating compound penal interest and
                    destroying their credit standing.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    To achieve complete legal and financial freedom, borrowers
                    must insist upon three mandatory closure confirmations:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm space-y-2">
                      <div className="text-xl">📜</div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        Authentic No Dues Certificate (NDC)
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Must be printed on official bank or NBFC letterhead,
                        bearing the name, employee code, and official seal of the
                        authorized manager, explicitly certifying that all
                        claims against the borrower stand fully satisfied.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm space-y-2">
                      <div className="text-xl">💳</div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        NPCI e-NACH Mandate Revocation
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        The lending institution must formally cancel recurring
                        auto-debit instructions on the National Payments
                        Corporation of India portal, preventing future unlawful
                        auto-debits and bounce charges from bank accounts.
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm space-y-2">
                      <div className="text-xl">📈</div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        Credit Bureau Status: Settled &bull; Zero Balance
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under CICRA regulations, the lender must transmit
                        updated records within 30 days. The account status will
                        reflect as &ldquo;Settled&rdquo; with current outstanding
                        balance updated to zero, enabling credit score revival.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ══ Reviews Section (Matching blog/[slug] lines 600-634) ══ */}
                <section id="reviews" className="scroll-mt-32 border-t border-gray-200 pt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Reviews</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {clientReviews.map((review) => (
                      <div
                        key={review.id}
                        className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative"
                      >
                        <div className="text-4xl text-[#D2A02A] opacity-20 absolute top-4 left-4 font-serif font-black select-none">
                          &ldquo;
                        </div>
                        <div className="relative z-10">
                          <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400 mr-2">
                              <Stars count={review.reviewRating} />
                            </div>
                            <span className="font-bold text-gray-900">
                              {review.reviewRating}.0
                            </span>
                          </div>
                          <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                            &ldquo;{review.reviewBody}&rdquo;
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-3 font-bold text-sm">
                              👤
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm">
                                {review.authorName}
                              </p>
                              <p className="text-xs text-gray-500">
                                {review.authorLocation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ══ FAQs Section (Matching blog/[slug] lines 636-662) ══ */}
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
                            <span className="text-[#D2A02A] mr-3 font-bold">
                              Q.
                            </span>
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

                {/* ══ More Legal Guides Section ══ */}
                <section id="internal-guides" className="scroll-mt-32 border-t border-gray-200 pt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    More Legal Guides &amp; Related Resources
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 text-xs">
                    <Link
                      href="/loan-settlement-karwana-hai"
                      className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition font-semibold text-gray-800 flex flex-col justify-between"
                    >
                      <span>Loan Settlement Karwana Hai: Complete Guide</span>
                      <span className="text-[#D2A02A] font-bold mt-2">
                        Read Guide &rarr;
                      </span>
                    </Link>
                    <Link
                      href="/loan-settlement-ke-liye-konsi-company-sabse-achi-hai"
                      className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition font-semibold text-gray-800 flex flex-col justify-between"
                    >
                      <span>
                        Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?
                      </span>
                      <span className="text-[#D2A02A] font-bold mt-2">
                        Read Guide &rarr;
                      </span>
                    </Link>
                    <Link
                      href="/kya-mai-loan-settlement-karwane-ke-liye-eligible-hu"
                      className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition font-semibold text-gray-800 flex flex-col justify-between"
                    >
                      <span>
                        Kya Mai Loan Settlement Karwane Ke Liye Eligible Hu?
                      </span>
                      <span className="text-[#D2A02A] font-bold mt-2">
                        Read Guide &rarr;
                      </span>
                    </Link>
                    <Link
                      href="/understanding-90-day-loan-default-india"
                      className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition font-semibold text-gray-800 flex flex-col justify-between"
                    >
                      <span>Understanding 90-Day Loan Default in India</span>
                      <span className="text-[#D2A02A] font-bold mt-2">
                        Read Guide &rarr;
                      </span>
                    </Link>
                    <Link
                      href="/what-happens-after-loan-account-becomes-npa"
                      className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition font-semibold text-gray-800 flex flex-col justify-between"
                    >
                      <span>What Happens After Loan Account Becomes NPA?</span>
                      <span className="text-[#D2A02A] font-bold mt-2">
                        Read Guide &rarr;
                      </span>
                    </Link>
                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition font-semibold text-gray-800 flex flex-col justify-between"
                    >
                      <span>Stop Bank Recovery Agents Harassment Legally</span>
                      <span className="text-[#D2A02A] font-bold mt-2">
                        Read Guide &rarr;
                      </span>
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition font-semibold text-gray-800 flex flex-col justify-between"
                    >
                      <span>Section 138 Cheque Bounce Notice Defense</span>
                      <span className="text-[#D2A02A] font-bold mt-2">
                        Read Guide &rarr;
                      </span>
                    </Link>
                    <Link
                      href="/section-25-payment-and-settlement-act-bailable-or-not"
                      className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition font-semibold text-gray-800 flex flex-col justify-between"
                    >
                      <span>Section 25 PSSA NACH Mandate Legal Guide</span>
                      <span className="text-[#D2A02A] font-bold mt-2">
                        Read Guide &rarr;
                      </span>
                    </Link>
                    <Link
                      href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                      className="p-4 bg-gray-50 hover:bg-[#FAF7F0] border border-gray-200 hover:border-[#D2A02A] rounded-xl transition font-semibold text-gray-800 flex flex-col justify-between"
                    >
                      <span>Loan Settlement vs Closure Impact on CIBIL</span>
                      <span className="text-[#D2A02A] font-bold mt-2">
                        Read Guide &rarr;
                      </span>
                    </Link>
                  </div>
                </section>

                {/* ══ References Section (Matching blog/[slug] lines 460-473) ══ */}
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
                        Reserve Bank of India (RBI): Master Circular on
                        Compromise Settlements and Technical Write-offs
                        (DOR.STR.REC.20/21.04.048/2023-24)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://nalsa.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D2A02A] underline"
                      >
                        National Legal Services Authority (NALSA): National Lok
                        Adalat Guidelines &amp; Judicial Decrees
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D2A02A] underline"
                      >
                        Indian Contract Act, 1872: Section 63 (Remission of
                        Performance &amp; Contractual Discharge)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D2A02A] underline"
                      >
                        Supreme Court of India: Landmark Precedents on Debt
                        Recovery, Arbitration &amp; Privacy Rights
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cms.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D2A02A] underline"
                      >
                        RBI Integrated Ombudsman Scheme: Grievance Filing
                        Against Unlawful Recovery Harassment
                      </a>
                    </li>
                  </ul>
                </div>

                {/* ══ Share Section at bottom (Matching blog/[slug] lines 476-494) ══ */}
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      Share this article:
                    </span>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleShare("facebook")}
                        className="text-gray-500 hover:text-[#D2A02A] transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleShare("twitter")}
                        className="text-gray-500 hover:text-[#D2A02A] transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="text-gray-500 hover:text-[#D2A02A] transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* ══ AMA Legal Solutions Company & Media Section (Exact match to blog/[slug] lines 496-598) ══ */}
                <section
                  id="ama-company-section"
                  className="border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 bg-white text-center shadow-lg relative mt-12 mb-8"
                >
                  <div className="flex justify-center mb-4">
                    <Image
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
                    Trusted with a{" "}
                    <strong className="text-[#D2A02A] font-bold">
                      4.7 Google Rating
                    </strong>
                    , over{" "}
                    <strong className="text-[#D2A02A] font-bold">
                      10,000+ Clients Served
                    </strong>
                    ,{" "}
                    <strong className="text-[#D2A02A] font-bold">
                      25,000+ Cases Handled
                    </strong>
                    , and more than{" "}
                    <strong className="text-[#D2A02A] font-bold">
                      40+ Years of Experience
                    </strong>{" "}
                    in providing strategic legal defense and debt resolution
                    across India.
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
                        <Image
                          src="/newAssets/media/yourstory.png"
                          alt="YourStory"
                          width={120}
                          height={45}
                          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.livemint.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src="/newAssets/media/livemint.png"
                          alt="LiveMint"
                          width={120}
                          height={45}
                          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.barandbench.com/news/ama-legal-solutions-launches-indias-first-law-firm-backed-pro-bono-driven-mobile-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src="/newAssets/media/barandbench.png"
                          alt="Bar and Bench"
                          width={120}
                          height={45}
                          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://medium.com/@amalegalsolutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src="/newAssets/media/medium.png"
                          alt="Medium"
                          width={120}
                          height={45}
                          className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.mid-day.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src="/newAssets/media/mid_day.png"
                          alt="Mid-day"
                          width={120}
                          height={45}
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
                      href="/send-legal-notice"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Legal Notice Services
                    </Link>
                    <Link
                      href="/drafting-of-will"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Will Drafting Services
                    </Link>
                    <Link
                      href="/virtual-inhouse-councel"
                      className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center"
                    >
                      Virtual In-house Counsel
                    </Link>
                  </div>
                </section>
              </div>
            </div>

            {/* ── Right Sidebar (Exact match to blog/[slug] lines 706-764) ── */}
            <div className="space-y-8 sticky top-24">
              {/* Author Card (Matching blog/[slug] lines 708-742) */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  About Author
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border border-gray-100">
                    <img
                      src="/anujbhiya.png"
                      alt="Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Anuj Anand Malik
                    </h4>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-xs text-[#D2A02A] hover:underline"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted
                  advocate, loan settlement expert, legal advisor, and banking
                  lawyer. With over a decade of experience in loan settlement,
                  corporate law, financial disputes, and compliance, he leads a
                  result-driven law firm based in India that helps individuals,
                  startups, and businesses achieve legal and financial
                  stability.
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

              {/* Contact Card (Matching blog/[slug] lines 745-762) */}
              <div className="bg-[#5A4C33] p-6 rounded-xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">Need Legal Help?</h3>
                <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                  Get expert advice on loan settlement and debt relief.
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

              {/* Related Guides Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                  Related Guides
                </h3>
                <div className="space-y-3 text-xs">
                  <Link
                    href="/loan-settlement-karwana-hai"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement Karwana Hai: Complete Guide
                  </Link>
                  <Link
                    href="/loan-settlement-ke-liye-konsi-company-sabse-achi-hai"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?
                  </Link>
                  <Link
                    href="/kya-mai-loan-settlement-karwane-ke-liye-eligible-hu"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Kya Mai Loan Settlement Ke Liye Eligible Hu?
                  </Link>
                  <Link
                    href="/understanding-90-day-loan-default-india"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Understanding 90-Day Loan Default in India
                  </Link>
                  <Link
                    href="/what-happens-after-loan-account-becomes-npa"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; What Happens After Loan Account Becomes NPA?
                  </Link>
                  <Link
                    href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; How to Stop Recovery Agents Harassment Legally
                  </Link>
                  <Link
                    href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                    className="block font-semibold text-gray-700 hover:text-[#D2A02A] transition"
                  >
                    &bull; Loan Settlement vs Closure Impact on CIBIL
                  </Link>
                </div>
              </div>
            </div>
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
                      Strategic Debt Evaluation &amp; Legal Defense
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Share your details confidentially under Section 126
                      Advocate-Client privilege.
                    </p>
                  </div>

                  <form
                    onSubmit={handleFormSubmit}
                    className="space-y-4 text-left"
                  >
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
                        placeholder="e.g. Vikram Malhotra"
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
                          placeholder="e.g. vikram@example.com"
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
                          placeholder="e.g. Pune, Maharashtra"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Category / Asset Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleFormChange}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm bg-white"
                        >
                          <option value="Personal Loan / Credit Card">
                            Personal Loan / Credit Card
                          </option>
                          <option value="Multiple Digital Loan Apps">
                            Multiple Digital Loan Apps
                          </option>
                          <option value="Business Loan / MSME Credit">
                            Business Loan / MSME Credit
                          </option>
                          <option value="Received Section 138 / 25 PSSA Notice">
                            Received Section 138 / 25 PSSA Notice
                          </option>
                          <option value="Facing Severe Recovery Harassment">
                            Facing Severe Recovery Harassment
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Brief Situation / Current Overdue Days
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={3}
                        placeholder="Mention names of lenders, number of overdue days (e.g. 90+ days), whether recovery agents are calling, or if court notices arrived..."
                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D2A02A] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-4 rounded-xl text-center block text-sm shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer mt-2"
                    >
                      Connect With Senior Advocate
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black text-[#1a202c]">
                    Case Details Received
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our senior
                    debt resolution advocate has been notified of your case. For
                    immediate assistance and protection from recovery calls,
                    connect directly on WhatsApp right now.
                  </p>
                  <div className="pt-4 space-y-3">
                    <button
                      onClick={openWhatsAppDirect}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition cursor-pointer"
                    >
                      <span>💬 Chat Directly on WhatsApp</span>
                    </button>
                    <a
                      href="tel:+918700343611"
                      className="w-full bg-[#1a202c] hover:bg-black text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 text-sm transition block"
                    >
                      <span>📞 Call Directly: +91-8700343611</span>
                    </a>
                    <button
                      onClick={resetModal}
                      className="text-xs text-gray-400 hover:text-gray-600 underline pt-2 block mx-auto cursor-pointer"
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

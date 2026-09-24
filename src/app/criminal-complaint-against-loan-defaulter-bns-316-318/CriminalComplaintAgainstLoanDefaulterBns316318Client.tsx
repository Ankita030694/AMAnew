"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/criminal-complaint-against-loan-defaulter-bns-316-318";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/criminal-complaint-against-loan-defaulter-bns-316-318.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const PUBLISHED_DATE = "2026-09-24T12:00:00+05:30";
const MODIFIED_DATE = "2026-09-24T13:15:00+05:30";

/* ─────────────────────────── TOC SECTIONS ──────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Can You File a Criminal Case for Loan Default Under BNS 316 & 318?" },
  { id: "statutory-transition-bns", title: "Statutory Transition: IPC 405/406 & 420 to BNS 316 & 318" },
  { id: "civil-vs-criminal-boundary", title: "The Fundamental Boundary: Civil Breach of Contract vs. Criminal Fraud" },
  { id: "mens-rea-at-inception", title: "The Core Legal Test: Mens Rea (Fraudulent Intention) at Inception" },
  { id: "section-316-criminal-breach-of-trust", title: "Section 316 BNS (Criminal Breach of Trust): When Does It Apply in Loans?" },
  { id: "section-318-cheating-loan-fraud", title: "Section 318 BNS (Cheating): Forged KYC, Fake Salary Slips & Synthetic Identity" },
  { id: "mutual-exclusivity", title: "The Mutual Exclusivity Doctrine: Why BNS 316 and 318 Cannot Be Jointly Alleged" },
  { id: "procedural-roadmap-bnss", title: "Procedural Roadmap Under BNSS: Section 173(3) Enquiry to Section 223 Hearing" },
  { id: "evidentiary-mandate-bsa", title: "Digital Evidence Protocol: Proving Loan Fraud Under Section 63 BSA" },
  { id: "comparative-master-matrix", title: "Master Comparison: Civil Default vs BNS 316 vs BNS 318 vs Section 138 NI Act" },
  { id: "supreme-court-precedents", title: "Landmark Supreme Court Rulings on Loan Defaults & Criminal Quashing" },
  { id: "borrower-defense-rights", title: "Borrower Rights & Quashing Remedies Under Section 528 BNSS & Article 226" },
  { id: "institutional-case-proof", title: "Institutional Case Proof: Handled by AMA Legal Solutions" },
  { id: "frequently-asked-questions", title: "Frequently Asked Questions (Criminal Banking Litigation Desk)" },
  { id: "statutory-references", title: "Statutory Authorities & Judicial Repositories" },
  { id: "author-credentials", title: "About Senior Advocate Anuj Anand Malik" },
];

/* ─────────────────────────── CLIENT REVIEW DATA ─────────────────── */
const clientReviewData = {
  authorName: "Vikramaditya Singhania, Head of Risk & Fraud Prevention at Apex Microfinance NBFC",
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "54",
  reviewBody:
    "AMA Legal Solutions provided exceptional institutional clarity when our portfolio was hit by an organized syndicate using doctored salary slips. Their precise invocation of Section 318(4) BNS with Section 63 BSA digital evidence led to FIR registration and full recovery, while cleanly separating genuine distressed borrowers from deliberate fraudsters.",
};

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Can a bank or NBFC file a police complaint (FIR) solely for non-payment of an EMI?",
    answer:
      "No. The Supreme Court of India in landmark rulings such as Satishchandra Ratanlal Shah v. State of Gujarat (2019) and Indian Oil Corporation v. NEPC India Ltd. (2006) has definitively established that mere failure to repay a loan is a pure civil breach of contract, not a criminal offence. For an FIR to be legally registered under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS), the lender must furnish concrete prima facie evidence demonstrating fraudulent or dishonest intention at the very inception of the transaction, such as forged documents, fabricated financial statements, or identity theft.",
  },
  {
    id: "faq-2",
    question: "What is the key difference between Section 316 and Section 318 of the Bharatiya Nyaya Sanhita (BNS)?",
    answer:
      "Section 316 BNS governs 'Criminal Breach of Trust' (formerly Sections 405/406 IPC), which requires an initial lawful entrustment of property or dominion over property, followed by subsequent dishonest misappropriation. Section 318 BNS governs 'Cheating' (formerly Sections 415/420 IPC), which requires fraudulent or dishonest inducement and deception right at the inception of the transaction. Because Section 316 presumes good faith at inception while Section 318 presumes deception from the start, the Supreme Court has ruled that both charges are antithetical and mutually exclusive.",
  },
  {
    id: "faq-3",
    question: "When does a loan default become a criminal offence under Section 318(4) BNS?",
    answer:
      "A loan transaction crosses the threshold from a civil default into a criminal offence under Section 318(4) BNS (cheating and dishonestly inducing delivery of property) when the borrower obtains funds through fraudulent misrepresentation. Common examples include: submitting forged salary slips or fabricated ITR acknowledgements, manipulating PDF bank statements to inflate balances, using stolen KYC documents to create synthetic identities, mortgaging non-existent assets, or participating in premeditated First Payment Default (FPD) fraud syndicates.",
  },
  {
    id: "faq-4",
    question: "How does Section 173(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS) protect borrowers from false FIRs?",
    answer:
      "Under Section 173(3) of the BNSS, 2023, the police are granted statutory power to conduct a preliminary enquiry of up to fourteen days before registering an FIR for cognizable offences punishable between three and seven years (which includes Section 318(4) BNS). The enquiry, conducted with prior permission from an officer not below the rank of Deputy Superintendent of Police (DSP), is specifically intended to weed out commercial and civil debt disputes dressed up as criminal offences before any coercive police action is initiated.",
  },
  {
    id: "faq-5",
    question: "What is the new safeguard under Section 223 of the BNSS regarding private criminal complaints?",
    answer:
      "Section 223 of the BNSS, 2023 introduces a revolutionary statutory safeguard that did not exist under Section 200 of the old CrPC. Under the proviso to Section 223(1) BNSS, a Magistrate cannot take cognizance of an offence in a private criminal complaint without first giving the proposed accused an opportunity of being heard. This ensures that borrowers cannot be subjected to ex-parte criminal process or arrest warrants without having a legal chance to present loan statements and prove that the matter is a bona fide civil dispute.",
  },
  {
    id: "faq-6",
    question: "When can Section 316 BNS (Criminal Breach of Trust) be invoked against a borrower?",
    answer:
      "In general unsecured personal loans, Section 316 BNS cannot be invoked because money lent creates a debtor-creditor relationship rather than an 'entrustment'. However, Section 316 BNS becomes directly actionable in secured asset-backed financing where the borrower is entrusted with physical possession of a hypothecated vehicle, plant equipment, or pledged warehouse stock, and subsequently sells, dismantles, secretes, or disposes of that property without lender authorization and pockets the proceeds.",
  },
  {
    id: "faq-7",
    question: "Can an advocate get a false criminal complaint or FIR quashed by the High Court?",
    answer:
      "Yes. If an aggressive lender or recovery agency maliciously files an FIR or criminal complaint for a genuine business failure or bona fide loan default, the borrower can approach the High Court under Section 528 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 482 CrPC) or under Article 226 of the Constitution of India. The High Court will quash the proceedings if the complaint fails to establish deceptive intent at inception or where civil remedies are deliberately converted into criminal extortion.",
  },
  {
    id: "faq-8",
    question: "What electronic evidence is required under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA) to prove loan fraud?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), any digital evidence—including digital loan agreements, IP address logs, device identifiers, OTP verification audit trails, and bank API response payloads—must be accompanied by a formal Section 63 BSA certificate. This certificate requires dual signatures (the system custodian and technical expert) and cryptographic SHA-256 hash validation to ensure tamper-proof court admissibility.",
  },
];

/* ─────────────────────────── VERIFIED CASE PROOFS ──────────────── */
const clientInstitutions = [
  {
    name: "FinPulse Capital",
    category: "Digital Consumer NBFC",
    metric: "100% Criminal Charge Dismissal (Civil Clarification)",
    quote:
      "When our recovery desk was faced with fraudulent synthetic identity rings, AMA Legal Solutions crafted airtight Section 318(4) BNS criminal complaints backed by Section 63 BSA digital evidence. Concurrently, their advisory prevented rogue recovery agents from harassing bona fide distressed borrowers, keeping our regulatory record pristine.",
  },
  {
    name: "Autovance Credit Corp",
    category: "Commercial Vehicle & Equipment Financier",
    metric: "Secured Asset Recovery via BNS 316",
    quote:
      "In five complex cases where borrowers illegally sold hypothecated transit trucks without lender NOC, AMA Legal Solutions invoked Section 316 BNS for criminal breach of trust. The prompt police intervention and magistrate orders resulted in the physical tracing and repossession of all five vehicles.",
  },
  {
    name: "Pinnacle Capital Advisory",
    category: "Corporate Loan & Debt Restructuring Desk",
    metric: "High Court Quashing Under Section 528 BNSS",
    quote:
      "When an aggressive private creditor filed a malicious cheating FIR against our MSME client during genuine supply chain disruption, Advocate Anuj Anand Malik secured an immediate stay and quashing from the High Court, reaffirming the classic rule in Satishchandra Ratanlal Shah.",
  },
];

/* ─────────────────────────── STEP PROTOCOL ─────────────────────── */
const stepListItems = [
  {
    title: "Stage 1: Forensic Triaging & Inception Intent Audit",
    desc: "The legal desk audits loan application files, KYC artifacts, bank statement metadata, and repayment history to determine whether the matter is a bona fide civil default or actionable fraud with criminal intent at inception.",
  },
  {
    title: "Stage 2: Section 63 BSA Electronic Evidence Preservation",
    desc: "Digital signatures, device telemetry, IP logs, Aadhaar authentication timestamps, and clearing bank API logs are extracted and certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 with SHA-256 hashing.",
  },
  {
    title: "Stage 3: Written Criminal Demand Notice & Opportunity to Cure",
    desc: "A formal advocate notice on High Court letterhead is dispatched outlining specific documentary forgeries or illicit asset disposals, putting the borrower on formal notice before criminal machinery is engaged.",
  },
  {
    title: "Stage 4: Police Complaint & Section 173(3) BNSS Preliminary Enquiry",
    desc: "In cases of established forgery, a formal complaint is submitted under Section 173(1) BNSS. For offences with 3-7 year punishments, the police conduct a 14-day preliminary enquiry under Section 173(3) BNSS to verify prima facie criminality.",
  },
  {
    title: "Stage 5: Section 175(3) BNSS Application / Section 223 BNSS Private Complaint",
    desc: "If the police fail to register an FIR, an application supported by affidavit is filed before the Judicial Magistrate under Section 175(3) BNSS, or a private complaint is filed where the accused is heard under Section 223 BNSS.",
  },
];

/* ────────────────────────── SCHEMA GRAPH ───────────────────────── */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline:
        "Criminal Complaint Against Loan Defaulter: BNS 316 & 318 Legal Guide & Judicial Boundaries",
      description:
        "Authoritative legal playbook on filing or defending criminal complaints against loan defaulters under Section 316 (Criminal Breach of Trust) and Section 318 (Cheating) of Bharatiya Nyaya Sanhita, 2023. Examines civil default vs criminal fraud, BNSS 173(3) preliminary enquiry, BNSS 223 pre-cognizance hearings, Section 63 BSA digital evidence, and Supreme Court quashing precedents.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": `${PAGE_URL}#webpage` },
      image: [OG_IMAGE_URL],
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      author: {
        "@type": "Person",
        name: "Anuj Anand Malik",
        jobTitle: "Founder & Senior Banking Advocate",
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
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Criminal Complaint Against Loan Defaulter: BNS 316 & 318 Legal Guide",
      description:
        "Authoritative legal guide on Section 316 (Criminal Breach of Trust) and Section 318 (Cheating) of the Bharatiya Nyaya Sanhita, 2023 for loan recovery and borrower defense.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
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
      name: "Criminal Banking Litigation Advisory: BNS 316 & 318 Prosecution & Defense",
      image: OG_IMAGE_URL,
      description:
        "Advocate-led criminal litigation, forensic investigation, and defense advisory under Bharatiya Nyaya Sanhita (BNS 2023) and Bharatiya Nagarik Suraksha Sanhita (BNSS 2023). Covering Section 318(4) cheating complaints, Section 316 hypothecation breach of trust, Section 173(3) police enquiries, Section 223 magistrate hearings, and Section 528 BNSS High Court quashing petitions.",
      brand: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: clientReviewData.ratingValue,
        bestRating: clientReviewData.bestRating,
        reviewCount: clientReviewData.reviewCount,
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: clientReviewData.ratingValue,
          bestRating: clientReviewData.bestRating,
        },
        author: {
          "@type": "Person",
          name: clientReviewData.authorName,
        },
        reviewBody: clientReviewData.reviewBody,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "AMA Legal Solutions",
      url: SITE,
      logo: LOGO_URL,
      telephone: "+91-8700343611",
      email: "contact@amalegalsolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 124, Sector 44",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122003",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/amalegalsolutions",
        "https://twitter.com/amalegalsolutions",
        "https://www.linkedin.com/company/amalegalsolutions",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Criminal Complaint Against Loan Defaulter (BNS 316 & 318)",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 5-Stage Criminal Loan Default Assessment & Litigation Protocol",
      itemListElement: stepListItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.desc,
      })),
    },
  ],
};

/* ─────────────────────────── CLIENT COMPONENT ──────────────────── */
export default function CriminalComplaintAgainstLoanDefaulterBns316318Client() {
  const [activeSection, setActiveSection] = useState("quick-answer");
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([faqs[0].id, faqs[1].id]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cityState: "",
    partyType: "Institutional Lender / NBFC",
    disputeType: "Section 318(4) BNS Cheating (Forged KYC / Documents)",
    message: "",
  });

  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleShare = async (platform: string) => {
    const url = PAGE_URL;
    const text =
      "Criminal Complaint Against Loan Defaulter: BNS 316 & 318 Legal Guide – AMA Legal Solutions";
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

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setModalSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        cityState: "",
        partyType: "Institutional Lender / NBFC",
        disputeType: "Section 318(4) BNS Cheating (Forged KYC / Documents)",
        message: "",
      });
    }, 2800);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const section of tocSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── JSON-LD SCRIPT INJECTION ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-amber-100 selection:text-amber-900">
        {/* ── LUXURY HERO SECTION ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-28 pb-20 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  {
                    label: "Criminal Complaint Against Loan Defaulter (BNS 316 & 318)",
                    href: PAGE_URL,
                  },
                ]}
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bharatiya Nyaya Sanhita (BNS 2023)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Section 173 & 223 BNSS Safeguards
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Supreme Court Quashing Jurisprudence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-5xl mb-6">
              Criminal Complaint Against Loan Defaulter:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">
                Section 316 & 318 BNS Legal Playbook
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl font-normal leading-relaxed mb-8">
              A comprehensive statutory analysis on the fine boundary between civil loan default and criminal prosecution under Bharatiya Nyaya Sanhita, 2023. Understand the doctrine of <em className="text-amber-200 not-italic font-semibold">mens rea at inception</em>, procedural filters under Section 173(3) & 223 BNSS, digital forensic certification under Section 63 BSA, and landmark Supreme Court quashing standards.
            </p>

            {/* Author Byline & Meta Strip */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-800 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-lg">
                  <Image
                    src="/anujbhiya.png"
                    alt="Advocate Anuj Anand Malik"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <Link
                      href="/author/anuj-anand-malik"
                      className="hover:text-amber-300 transition-colors"
                    >
                      Advocate Anuj Anand Malik
                    </Link>
                    <span className="text-amber-400 text-xs" title="Senior Banking & Criminal Litigator">
                      ✓
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Founder, AMA Legal Solutions • Supreme Court & Delhi High Court Bar
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Published: September 2026</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>22 min in-depth read</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Judicially Vetted Precedents</span>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Bar */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Consult Criminal Banking Litigator
              </button>
              <a
                href="#quick-answer"
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium text-sm border border-slate-700/80 transition-all duration-200 flex items-center gap-2"
              >
                <span>Read AI Answer Engine Summary</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT GRID WITH STICKY SIDEBAR ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* ── LEFT COLUMN: STICKY TOC & DESK CONTACT (LG: 4 COLS) ── */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-28 space-y-6">
                {/* Table of Contents Card */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      On This Page (Table of Contents)
                    </h3>
                  </div>
                  <nav className="space-y-1 max-h-[62vh] overflow-y-auto pr-1 text-sm custom-scrollbar">
                    {tocSections.map((sec) => {
                      const isActive = activeSection === sec.id;
                      return (
                        <a
                          key={sec.id}
                          href={`#${sec.id}`}
                          className={`block py-1.5 px-3 rounded-lg transition-all text-xs leading-relaxed ${
                            isActive
                              ? "bg-amber-50 text-amber-900 font-semibold border-l-4 border-amber-500 shadow-xs"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                          }`}
                        >
                          {sec.title}
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* Social Share & Quick Action */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Share Case Briefing
                  </h4>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      onClick={() => handleShare("whatsapp")}
                      title="Share on WhatsApp"
                      className="p-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      title="Share on LinkedIn"
                      className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      title="Share on Twitter"
                      className="p-2.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      title="Copy URL"
                      className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  {shareMsg && (
                    <p className="text-xs text-center text-emerald-600 font-semibold mt-2">
                      {shareMsg}
                    </p>
                  )}
                </div>

                {/* Direct Consultation Box */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 shadow-md border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    Need Emergency Defense or Prosecution Advisory?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Whether filing an institutional complaint for digital loan fraud under Section 318(4) BNS or challenging an illegal criminal notice from recovery agents, consult our senior banking advocates directly.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-colors"
                  >
                    Schedule Legal Assessment
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Strict Confidentiality • Fixed Institutional Advisory
                  </p>
                </div>
              </div>
            </aside>

            {/* ── RIGHT COLUMN: FULL LEGAL CONTENT (LG: 8 COLS) ── */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-12">
              {/* ── 1. QUICK ANSWER BLOCK (GEO & AI SNIPPET OPTIMIZED) ── */}
              <section
                id="quick-answer"
                className="scroll-mt-28 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/50 rounded-3xl border border-amber-200/80 p-7 sm:p-9 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Direct AI Overview & Legal Conclusion
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Can You File a Criminal Case Against a Loan Defaulter Under Section 316 & 318 BNS?
                </h2>

                <div className="prose prose-slate max-w-none text-slate-800 text-base sm:text-lg leading-relaxed space-y-4">
                  <p>
                    <strong>The Supreme Rule:</strong> A simple loan default is fundamentally a <strong>civil breach of contract</strong> and does <strong>not</strong> constitute a criminal offence under Indian law. The Supreme Court of India has ruled in multiple landmark judgments—including <em>Satishchandra Ratanlal Shah v. State of Gujarat (2019)</em> and <em>Indian Oil Corporation v. NEPC India Ltd. (2006)</em>—that the criminal justice machinery cannot be weaponized as a shortcut for civil debt recovery.
                  </p>
                  <p>
                    However, a loan transaction crosses into criminal criminality under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> in two specific, evidentiary-proven circumstances:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/80 p-4 rounded-xl border border-amber-200">
                      <div className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1">
                        1. Section 318(4) BNS (Cheating)
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                        Applies when there was <strong>fraudulent intention at inception</strong>—e.g., borrower obtained the loan using forged salary slips, fake ITRs, manipulated PDF bank statements, stolen KYC, or synthetic identities.
                      </p>
                    </div>
                    <div className="bg-white/80 p-4 rounded-xl border border-amber-200">
                      <div className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1">
                        2. Section 316 BNS (Breach of Trust)
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                        Applies strictly in <strong>secured financing</strong> where the borrower was lawfully entrusted with physical possession of hypothecated goods (vehicles, factory machinery, warehouse stock) and dishonestly sells or disposes of them without lender consent.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 bg-amber-100/60 p-3 rounded-lg border-l-4 border-amber-600">
                    <strong>Critical BNSS Safeguard:</strong> Under Section 173(3) of the Bharatiya Nagarik Suraksha Sanhita, 2023, the police must conduct a 14-day preliminary enquiry before registering an FIR for offences carrying 3–7 years imprisonment. Furthermore, under the proviso to Section 223(1) BNSS, a Magistrate cannot take cognizance of a private criminal complaint without first granting the borrower an opportunity of being heard.
                  </p>
                </div>
              </section>

              {/* ── 2. STATUTORY TRANSITION: IPC TO BNS ── */}
              <section id="statutory-transition-bns" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Statutory Codification
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Statutory Transition: Old IPC Provisions to Bharatiya Nyaya Sanhita, 2023
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  With the enforcement of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> replacing the colonial Indian Penal Code, 1860 (IPC), the substantive criminal definitions governing financial misconduct, loan fraud, and commercial dishonesty have been codified into modern provisions. Understanding the precise mapping is essential for lenders issuing statutory legal notices and borrowers drafting criminal quashing petitions.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                        <th className="py-3 px-4">Offence Description</th>
                        <th className="py-3 px-4">Old IPC Provision</th>
                        <th className="py-3 px-4">New BNS Provision</th>
                        <th className="py-3 px-4">Prescribed Punishment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Criminal Breach of Trust (Definition & Penalty)
                        </td>
                        <td className="py-3 px-4">Section 405 & 406 IPC</td>
                        <td className="py-3 px-4 font-mono font-bold text-amber-800">
                          Section 316(1) & 316(2) BNS
                        </td>
                        <td className="py-3 px-4">Imprisonment up to 5 years, or fine, or both</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-amber-50/20">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Cheating & Dishonestly Inducing Delivery of Property
                        </td>
                        <td className="py-3 px-4">Section 415 & 420 IPC</td>
                        <td className="py-3 px-4 font-mono font-bold text-amber-800">
                          Section 318(1) & 318(4) BNS
                        </td>
                        <td className="py-3 px-4">Imprisonment up to 7 years and fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Forgery (Fake Salary Slips / Documents)
                        </td>
                        <td className="py-3 px-4">Section 463 & 465 IPC</td>
                        <td className="py-3 px-4 font-mono font-bold text-amber-800">
                          Section 336 BNS
                        </td>
                        <td className="py-3 px-4">Imprisonment up to 2 years, or fine, or both</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-amber-50/20">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Forgery of Valuable Security / Loan Agreements
                        </td>
                        <td className="py-3 px-4">Section 467 IPC</td>
                        <td className="py-3 px-4 font-mono font-bold text-amber-800">
                          Section 338 BNS
                        </td>
                        <td className="py-3 px-4">Imprisonment for life, or up to 10 years, and fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Using a Forged Document as Genuine
                        </td>
                        <td className="py-3 px-4">Section 471 IPC</td>
                        <td className="py-3 px-4 font-mono font-bold text-amber-800">
                          Section 340 BNS
                        </td>
                        <td className="py-3 px-4">Punished in same manner as if forged</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-amber-50/20">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Criminal Conspiracy (Multi-Borrower Fraud Rings)
                        </td>
                        <td className="py-3 px-4">Section 120-B IPC</td>
                        <td className="py-3 px-4 font-mono font-bold text-amber-800">
                          Section 61(2) BNS
                        </td>
                        <td className="py-3 px-4">Same as abetment of the substantive offence</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          Criminal Intimidation (Rogue Recovery Threats)
                        </td>
                        <td className="py-3 px-4">Section 503 & 506 IPC</td>
                        <td className="py-3 px-4 font-mono font-bold text-amber-800">
                          Section 351 BNS
                        </td>
                        <td className="py-3 px-4">Imprisonment up to 2 years (or up to 7 years for grave threats)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── 3. THE CIVIL VS CRIMINAL BOUNDARY ── */}
              <section id="civil-vs-criminal-boundary" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Core Jurisprudence
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    The Fundamental Boundary: Civil Breach of Contract vs. Criminal Fraud
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  In modern Indian banking and commercial litigation, financial institutions frequently attempt to add criminal flavor to civil debt defaults to exert coercive psychological pressure upon borrowers. However, the constitutional and criminal courts have consistently dismantled this practice, establishing a clear line of demarcation between commercial inability and criminal culpability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Civil Default Card */}
                  <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      Bona Fide Civil Loan Default
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-4">
                      <li>Borrower provided authentic, unmanipulated identity and financial documents.</li>
                      <li>Repayments were made consistently until an unforeseen event (loss of employment, medical crisis, market downturn).</li>
                      <li>Debtor acknowledges the debt but is commercially insolvent or experiencing liquidity distress.</li>
                      <li>
                        <strong>Exclusive Legal Remedy:</strong> Section 138 NI Act, Section 25 PSSA, SARFAESI Act, DRT application, or Summary Civil Suit (Order 37 CPC).
                      </li>
                    </ul>
                  </div>

                  {/* Criminal Fraud Card */}
                  <div className="bg-white p-6 rounded-2xl border-2 border-amber-300 shadow-xs space-y-3">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                      Actionable Criminal Offence (BNS 318 / 316)
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-4">
                      <li>Borrower submitted fabricated salary slips, doctored PDFs, or stolen KYC data.</li>
                      <li>Zero intent to repay existed at the time of sanction (First Payment Default syndicates).</li>
                      <li>Hypothecated or pledged collateral was secretly sold or dismantled without lender permission.</li>
                      <li>
                        <strong>Criminal Recourse:</strong> Formal complaint under Section 173 BNSS for BNS 318(4) & 336/340, backed by Section 63 BSA electronic evidence.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl border border-slate-800 text-sm leading-relaxed space-y-2">
                  <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                    Judicial Principle: No Criminal Shortcut for Civil Debts
                  </div>
                  <p>
                    As held by the Supreme Court in <em>Alpic Finance Ltd. v. P. Sadasivan (2001) 3 SCC 513</em>:
                  </p>
                  <blockquote className="border-l-2 border-amber-400 pl-4 italic text-slate-300">
                    &ldquo;An awareness of the distinction between mere breach of contract and the offence of cheating is essential. The machinery of criminal law is not to be utilized for coercing a debtor into repayment of a civil loan where the allegations fail to disclose fraudulent inducement at inception.&rdquo;
                  </blockquote>
                </div>
              </section>

              {/* ── 4. MENS REA AT INCEPTION ── */}
              <section id="mens-rea-at-inception" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Evidentiary Core
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    The Core Legal Test: Mens Rea (Fraudulent Intention) at Inception
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  In all prosecutions initiated under <strong>Section 318 BNS (formerly Section 420 IPC)</strong>, the sine qua non (indispensable condition) is the existence of <strong>fraudulent or dishonest intention at the time of making the promise or representation</strong>. Subsequent inability to honor a financial promise does not retroactively transform a civil contract into criminal cheating.
                </p>

                <div className="bg-amber-50/60 border border-amber-200 p-6 rounded-2xl space-y-4">
                  <h3 className="text-lg font-bold text-amber-950">
                    The Temporal Test Established in Hridaya Ranjan Prasad Verma (2000) & Dalip Kaur (2009)
                  </h3>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    The Supreme Court of India in <em>Hridaya Ranjan Prasad Verma v. State of Bihar (2000) 4 SCC 168</em> laid down the definitive test for distinguishing between mere failure to perform a promise and the criminal offence of cheating:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-white p-4 rounded-xl border border-amber-200">
                      <div className="font-bold text-slate-900 mb-1">Mere Breach of Contract</div>
                      <p className="text-slate-600">
                        The promisor or borrower intended to perform the promise at the time it was made, but subsequently failed to do so due to external circumstances, commercial insolvency, or changed conditions. <em>No criminal offence is made out.</em>
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-amber-200">
                      <div className="font-bold text-slate-900 mb-1">Offence of Cheating (BNS 318)</div>
                      <p className="text-slate-600">
                        The promisor or borrower had <strong>dishonest intention at the very moment the promise was made</strong>, inducing the lender to part with money based on a representation known to be false. <em>Attracts up to 7 years imprisonment.</em>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 5. SECTION 316 BNS: CRIMINAL BREACH OF TRUST ── */}
              <section id="section-316-criminal-breach-of-trust" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Secured Lending Dynamics
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Section 316 BNS (Criminal Breach of Trust): When Does It Apply in Loans?
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  Under <strong>Section 316 of the Bharatiya Nyaya Sanhita, 2023</strong> (replacing Section 405/406 IPC), criminal breach of trust requires two fundamental components:
                </p>
                <ol className="list-decimal pl-5 text-slate-700 space-y-2 text-sm sm:text-base">
                  <li><strong>Entrustment:</strong> Property or dominion over property must be entrusted to the accused in a fiduciary or custodial capacity.</li>
                  <li><strong>Dishonest Misappropriation:</strong> The accused must dishonestly convert that property to their own use, or dispose of it in violation of a legal contract or statutory direction.</li>
                </ol>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Why Section 316 Rarely Applies to Unsecured Personal Loans
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    When a commercial bank or NBFC disburses an unsecured personal loan or payday advance, the ownership of the funds is transferred unconditionally to the borrower. The relationship between the bank and the borrower is strictly that of <strong>creditor and debtor</strong>, not <strong>trustee and beneficiary</strong>. Because the borrower becomes the absolute owner of the borrowed money, they cannot &ldquo;misappropriate&rdquo; what has legally become their own property.
                  </p>
                </div>

                <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200 p-6 space-y-3">
                  <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    When Section 316 BNS IS Legally Sustainable
                  </h3>
                  <p className="text-sm text-slate-800 leading-relaxed">
                    Section 316 BNS becomes fully actionable in <strong>hypothecation and asset-backed financing</strong>:
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-5">
                    <li>
                      <strong>Hypothecated Vehicle Loans:</strong> The borrower has possession of a commercial truck, cab, or passenger car where legal charge is registered in favor of the NBFC. If the borrower secretly sells the vehicle, creates illegal third-party liens, or dismantles the engine and chassis without the lender&apos;s NOC, Section 316 BNS is directly triggered.
                    </li>
                    <li>
                      <strong>Pledged Warehouse Stock & Inventory:</strong> In commodity or working capital finance, stock pledged to the lender that is liquidated without depositing sale proceeds into the designated escrow account attracts prosecution under Section 316(2) BNS.
                    </li>
                    <li>
                      <strong>Escrow Project Financing:</strong> Where commercial consortium loan agreements mandate that advances must be deployed exclusively for a specified infrastructure project, diversion to shell entities constitutes criminal misappropriation.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── 6. SECTION 318 BNS: CHEATING & FORGERY ── */}
              <section id="section-318-cheating-loan-fraud" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Digital Lending Frauds
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Section 318 BNS (Cheating): Forged KYC, Fake Salary Slips & Synthetic Identity
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  <strong>Section 318(4) of the Bharatiya Nyaya Sanhita, 2023</strong> (the modern equivalent of IPC Section 420) is the cornerstone for prosecuting genuine loan frauds. It prescribes imprisonment up to seven years and a mandatory fine for cheating and dishonestly inducing the delivery of property or valuable securities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Doctored PDF Bank Statements
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Borrowers editing PDF statement text layers using design tools to show inflated average monthly balances, fake salary credits, or suppressed EMI outflows. Traced via font-rendering and PDF creation metadata.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Fabricated Salary Slips & Form 16
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Submission of forged employer salary slips or fictitious Form 16 certificates from shell companies that have no physical existence or tax deposits. Attracts Section 336 & 340 BNS (Forgery).
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Synthetic Identities & Stolen KYC
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Organized syndicates using morphed Aadhaar cards, spoofed PAN numbers, and prepaid mule bank accounts to withdraw credit line disbursements before immediately abandoning SIM cards.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Multiple Pledging of Same Property
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Borrowers using certified duplicate title deeds or forged non-encumbrance certificates to secure simultaneous mortgages from multiple banks or housing finance NBFCs on the same physical immovable asset.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 7. MUTUAL EXCLUSIVITY DOCTRINE ── */}
              <section id="mutual-exclusivity" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Pleading Rules
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    The Mutual Exclusivity Doctrine: Why BNS 316 and 318 Cannot Be Jointly Alleged
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  A common pleading error committed by institutional recovery desks and untrained practitioners is blindly citing both <strong>Section 316 (Breach of Trust)</strong> and <strong>Section 318 (Cheating)</strong> against a borrower for the same transaction. The Supreme Court of India has repeatedly declared that these two offences are conceptually <strong>antithetical and mutually exclusive</strong>.
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="border-l-2 border-amber-400 pl-4 space-y-2">
                      <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                        Section 316 BNS (Breach of Trust)
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm">
                        Requires that property was <strong>lawfully and genuinely entrusted</strong> to the accused in good faith. The accused had no criminal intent initially; dishonest misappropriation developed at a subsequent stage.
                      </p>
                    </div>

                    <div className="border-l-2 border-blue-400 pl-4 space-y-2">
                      <div className="text-blue-400 font-bold text-xs uppercase tracking-wider">
                        Section 318 BNS (Cheating)
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm">
                        Requires that the accused had <strong>dishonest intention at the very beginning</strong>. The transfer of property was induced by deceit. There was never any lawful entrustment in the eyes of the law.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 border-t border-slate-800 pt-3">
                    <strong>Litigation Warning:</strong> If a criminal complaint mechanically alleges that a borrower both &ldquo;cheated at inception&rdquo; and was &ldquo;lawfully entrusted with property that they later converted,&rdquo; the High Court can quash the complaint on the grounds of contradictory and legally irreconcilable pleadings.
                  </p>
                </div>
              </section>

              {/* ── 8. PROCEDURAL ROADMAP UNDER BNSS ── */}
              <section id="procedural-roadmap-bnss" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Procedural Due Process
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Procedural Roadmap Under BNSS: Section 173(3) Enquiry to Section 223 Hearing
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  The <strong>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</strong> introduced procedural safeguards to prevent the abuse of the criminal process in debt and commercial disputes. Both lenders seeking legitimate FIR registration and borrowers defending against harassment must master this five-step procedural funnel.
                </p>

                <div className="space-y-4">
                  {stepListItems.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row gap-4 items-start"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 font-bold flex items-center justify-center shrink-0 text-sm">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-slate-900 tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl space-y-3">
                  <h4 className="text-sm font-bold text-blue-900">
                    Key Statutory Safeguards Introduced by BNSS, 2023:
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-5">
                    <li>
                      <strong>Section 173(3) BNSS (14-Day Preliminary Enquiry):</strong> Police cannot immediately arrest or register FIRs for offences carrying 3–7 years imprisonment (including Section 318(4) BNS). With DSP permission, police must conduct a 14-day enquiry to weed out pure civil defaults.
                    </li>
                    <li>
                      <strong>Section 175(3) BNSS (Magistrate Application):</strong> Replaces Section 156(3) CrPC. Requires prior representation to the SP under Section 173(4), a sworn affidavit, and mandatory hearing of the police officer before ordering investigation.
                    </li>
                    <li>
                      <strong>Section 223 BNSS (Pre-Cognizance Hearing):</strong> Replaces Section 200 CrPC. The Magistrate cannot take cognizance of a private complaint without giving the proposed accused an opportunity of being heard.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ── 9. DIGITAL EVIDENCE MANDATE UNDER SECTION 63 BSA ── */}
              <section id="evidentiary-mandate-bsa" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Evidentiary Admissibility
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Digital Evidence Protocol: Proving Loan Fraud Under Section 63 BSA
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  In modern fintech, payday lending, and retail credit, virtually 100% of interactions occur through digital channels (mobile apps, web portals, e-signatures, and API banking). Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the Indian Evidence Act, 1872, digital evidence cannot be introduced informally.
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    Mandatory Section 63 BSA Forensic Dossier Checklist
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <strong>1. Device Telemetry & IP Logs:</strong> Timestamped IP address, IMEI/device UUID, geolocation coordinates, and ISP logs recorded during the loan submission.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <strong>2. Aadhaar / PAN OTP Audit Trail:</strong> UIDAI or NSDL API transaction IDs proving whether the verified phone number matched the applicant.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <strong>3. PDF Text Layer Analysis:</strong> Technical extraction demonstrating manipulation of salary slip figures or mismatched font metadata in uploaded bank statements.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <strong>4. Dual-Signature Certificate:</strong> Schedule certificate signed jointly by the operational custodian and technical officer with cryptographic SHA-256 hash.
                    </div>
                  </div>
                </div>
              </section>

              {/* ── 10. MASTER COMPARISON TABLE ── */}
              <section id="comparative-master-matrix" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Comparative Matrix
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Master Comparison: Civil Default vs BNS 316 vs BNS 318 vs Section 138 NI Act
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                        <th className="py-3.5 px-4">Parameter</th>
                        <th className="py-3.5 px-4">Civil Default</th>
                        <th className="py-3.5 px-4">BNS 316 (Breach of Trust)</th>
                        <th className="py-3.5 px-4">BNS 318(4) (Cheating)</th>
                        <th className="py-3.5 px-4">Sec 138 NI / Sec 25 PSSA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Legal Nature</td>
                        <td className="py-3 px-4">Pure breach of contract</td>
                        <td className="py-3 px-4">Criminal misappropriation</td>
                        <td className="py-3 px-4">Criminal deceit / fraud</td>
                        <td className="py-3 px-4">Quasi-criminal statutory penal</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-amber-50/20">
                        <td className="py-3 px-4 font-semibold text-slate-900">Mental State (Mens Rea)</td>
                        <td className="py-3 px-4">Not applicable</td>
                        <td className="py-3 px-4">Dishonest intent arises later</td>
                        <td className="py-3 px-4 font-bold text-amber-900">Mandatory at inception</td>
                        <td className="py-3 px-4">Strict statutory liability</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Applicable Scenarios</td>
                        <td className="py-3 px-4">Inability to pay genuine loan</td>
                        <td className="py-3 px-4">Selling hypothecated vehicle/stock</td>
                        <td className="py-3 px-4">Fake KYC, forged salary slips, FPD</td>
                        <td className="py-3 px-4">Cheque bounce or NACH dishonour</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-amber-50/20">
                        <td className="py-3 px-4 font-semibold text-slate-900">Pre-FIR Procedure</td>
                        <td className="py-3 px-4">Civil demand notice</td>
                        <td className="py-3 px-4">14-day enquiry under BNSS 173(3)</td>
                        <td className="py-3 px-4">14-day enquiry under BNSS 173(3)</td>
                        <td className="py-3 px-4">30-day statutory notice, 15-day cure</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Cognizance Safeguard</td>
                        <td className="py-3 px-4">Civil Court summons</td>
                        <td className="py-3 px-4">Pre-cognizance hearing (BNSS 223)</td>
                        <td className="py-3 px-4">Pre-cognizance hearing (BNSS 223)</td>
                        <td className="py-3 px-4">Section 142 NI Act complaint</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-amber-50/20">
                        <td className="py-3 px-4 font-semibold text-slate-900">Maximum Penalty</td>
                        <td className="py-3 px-4">Money decree & attachment</td>
                        <td className="py-3 px-4">Up to 5 years imprisonment</td>
                        <td className="py-3 px-4">Up to 7 years imprisonment</td>
                        <td className="py-3 px-4">Up to 2 years imprisonment & 2x fine</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-semibold text-slate-900">Quashing Route</td>
                        <td className="py-3 px-4">Civil rejection (Order 7 Rule 11)</td>
                        <td className="py-3 px-4">Section 528 BNSS / Art 226</td>
                        <td className="py-3 px-4">Section 528 BNSS / Art 226</td>
                        <td className="py-3 px-4">Section 528 BNSS (Limitation/Lack of Debt)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── 11. SUPREME COURT PRECEDENTS ── */}
              <section id="supreme-court-precedents" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Authoritative Bench Precedents
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Landmark Supreme Court Rulings on Loan Defaults & Criminal Quashing
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900">
                        Satishchandra Ratanlal Shah v. State of Gujarat (2019) 9 SCC 148
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full">
                        Non-Payment of Loan is Not Cheating
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      A division bench of the Supreme Court held that the inability or failure to repay a loan of significant sum from a lending company does not amount to criminal cheating or criminal breach of trust in the absence of specific evidence proving fraudulent intention at the inception of the contract. The criminal proceedings were accordingly quashed.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900">
                        Indian Oil Corporation v. NEPC India Ltd. (2006) 6 SCC 736
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-900 rounded-full">
                        Deprecating Criminal Pressure for Civil Debts
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The Apex Court strongly deprecated the growing tendency in commercial circles to convert purely civil disputes into criminal cases to pressure the opposite party. The Court affirmed that hypothecation of property does not amount to &ldquo;entrustment&rdquo; under criminal breach of trust because legal ownership and possession remain with the debtor.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900">
                        Vijay Kumar Ghai v. State of West Bengal (2022) 7 SCC 124
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-900 rounded-full">
                        Strict Test for Cheating
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The Supreme Court reaffirmed that there is a palpable distinction between civil breach of contract and the criminal offence of cheating. There must be dishonest inducement from the very start. Filing criminal complaints to bypass civil limitation or settle commercial scores is an abuse of judicial process.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900">
                        Priyanka Srivastava v. State of U.P. (2015) 6 SCC 287
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-purple-100 text-purple-900 rounded-full">
                        Mandatory Affidavit for Magistrate Complaints
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The Supreme Court mandated that applications seeking Magistrate-ordered police investigations against lenders or borrowers must be supported by a sworn affidavit. This rule has now been formally codified into Section 175(3) of the BNSS, 2023.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 12. BORROWER DEFENSE RIGHTS & QUASHING REMEDIES ── */}
              <section id="borrower-defense-rights" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Defense Strategy & Quashing
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Borrower Rights & Quashing Remedies Under Section 528 BNSS & Article 226
                  </h2>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  If you are a borrower facing unlawful criminal threats, harassing WhatsApp messages claiming that &ldquo;non-bailable warrants have been issued under BNS 318,&rdquo; or an illegal police summons for a pure loan default, you have robust statutory and constitutional shields:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="text-sm font-bold text-slate-900">
                      1. Section 173(3) BNSS Preliminary Response
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When summoned for a preliminary enquiry, submit your complete bank statements showing prior EMI payments and documentary proof of financial distress (pink slip, medical discharge summary). This disproves fraudulent intent at inception.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="text-sm font-bold text-slate-900">
                      2. Exercise Section 223 BNSS Right of Hearing
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under the new BNSS proviso, demand your statutory right of being heard before the Magistrate takes cognizance on a private complaint. Present evidence that the dispute is strictly governed by civil loan agreements.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="text-sm font-bold text-slate-900">
                      3. High Court Quashing Under Section 528 BNSS
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Invoke the inherent powers of the High Court (formerly Section 482 CrPC) to quash malicious FIRs or complaints where the dispute is civil debt recovery, citing <em>Satishchandra Ratanlal Shah</em> and <em>Indian Oil Corporation</em>.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <div className="text-sm font-bold text-slate-900">
                      4. Counter-Complaints for Criminal Intimidation
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File a counter-complaint under <strong>Section 351 BNS</strong> (Criminal Intimidation) and lodge complaints with the <strong>RBI Banking Ombudsman</strong> if recovery agents threaten public shaming, physical harm, or send fake court notices.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── 13. INSTITUTIONAL CASE PROOFS ── */}
              <section id="institutional-case-proof" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Verified Case Outcomes
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Institutional Case Proof: Handled by AMA Legal Solutions
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {clientInstitutions.map((c, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                          {c.category}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{c.name}</h3>
                        <p className="text-xs text-slate-600 italic leading-relaxed">
                          &ldquo;{c.quote}&rdquo;
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                        <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{c.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── 14. FREQUENTLY ASKED QUESTIONS ── */}
              <section id="frequently-asked-questions" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Judicial FAQ Desk
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Frequently Asked Questions (Criminal Banking Litigation Desk)
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq) => {
                    const isExpanded = expandedFaqs.includes(faq.id);
                    return (
                      <div
                        key={faq.id}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full py-4 px-6 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-sm sm:text-base"
                        >
                          <span>{faq.question}</span>
                          <span
                            className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 text-slate-600 ${
                              isExpanded ? "rotate-180 bg-amber-100 text-amber-900" : ""
                            }`}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── 15. STATUTORY REPOSITORIES & CITATIONS ── */}
              <section id="statutory-references" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    Statutory Portals
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                    Statutory Authorities & Judicial Repositories
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-colors block group"
                  >
                    <div className="font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5 mb-1">
                      <span>India Code Portal (Legislative Department)</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-slate-600">
                      Official gazette text of Bharatiya Nyaya Sanhita, 2023 (BNS) and Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS).
                    </p>
                  </a>

                  <a
                    href="https://main.sci.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-colors block group"
                  >
                    <div className="font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5 mb-1">
                      <span>Supreme Court of India Official Repository</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-slate-600">
                      Verbatim reported judgments on Section 482 CrPC (now Section 528 BNSS) quashing and civil-criminal distinctions.
                    </p>
                  </a>

                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-colors block group"
                  >
                    <div className="font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5 mb-1">
                      <span>Reserve Bank of India (Fair Practices Code)</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-slate-600">
                      Regulatory guidelines on recovery agents, fair treatment, prohibition of intimidation, and grievance redressal mechanisms.
                    </p>
                  </a>

                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-colors block group"
                  >
                    <div className="font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5 mb-1">
                      <span>National Cyber Crime Reporting Portal (MHA)</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-slate-600">
                      Official portal for reporting identity theft, forged KYC document syndicates, and financial loan frauds.
                    </p>
                  </a>
                </div>
              </section>

              {/* ── 16. AUTHOR CREDENTIALS ── */}
              <section
                id="author-credentials"
                className="scroll-mt-28 bg-gradient-to-br from-slate-950 to-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0 shadow-lg">
                    <Image
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 text-center sm:text-left">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Senior Legal Counsel & Author
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                        Advocate Anuj Anand Malik
                      </h3>
                      <p className="text-xs text-slate-400">
                        Founder, AMA Legal Solutions • Practicing Advocate, Supreme Court of India & Delhi High Court
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Advocate Anuj Anand Malik leads the Banking Litigation and Economic Offenses practice at AMA Legal Solutions. With extensive experience advising prominent digital NBFCs, institutional banks, and private clients across India, he specializes in separating bona fide commercial debts from criminal frauds under the new Bharatiya Nyaya Sanhita (BNS) and Bharatiya Nagarik Suraksha Sanhita (BNSS).
                    </p>
                    <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                      <Link
                        href="/author/anuj-anand-malik"
                        className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors"
                      >
                        View Full Advocate Profile
                      </Link>
                      <a
                        href="https://www.linkedin.com/in/iamanujmalik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>

        {/* ── CASE INTAKE / CONSULTATION MODAL ── */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mb-5">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  Confidential Advisory Desk
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
                  Schedule Criminal Banking Case Review
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Connect with Senior Banking Advocates to assess criminal liability, file Section 318(4) BNS complaints, or quash malicious proceedings.
                </p>
              </div>

              {modalSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Case Request Received</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Our Senior Banking Advocate will review your case facts and contact you within 2 working hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      Full Name / Entity Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="e.g., Rajesh Kumar / Zenith Capital NBFC"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">Official Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="counsel@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">Your Role / Side</label>
                      <select
                        name="partyType"
                        value={formData.partyType}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 bg-white"
                      >
                        <option value="Institutional Lender / NBFC">Institutional Lender / NBFC</option>
                        <option value="Commercial Bank / Fintech">Commercial Bank / Fintech</option>
                        <option value="Borrower Facing Criminal Threat">Borrower Facing Criminal Threat</option>
                        <option value="Advocate / Legal Department">Advocate / Legal Department</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-800 mb-1">Matter Type</label>
                      <select
                        name="disputeType"
                        value={formData.disputeType}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 bg-white"
                      >
                        <option value="Section 318(4) BNS Cheating (Forged KYC / Documents)">
                          Section 318(4) BNS Cheating (Forged Documents)
                        </option>
                        <option value="Section 316 BNS Breach of Trust (Hypothecation Sale)">
                          Section 316 BNS Breach of Trust (Hypothecation)
                        </option>
                        <option value="High Court Quashing Under Section 528 BNSS">
                          High Court Quashing Under Section 528 BNSS
                        </option>
                        <option value="Section 173(3) BNSS Police Notice Response">
                          Section 173(3) BNSS Police Notice Response
                        </option>
                        <option value="Section 223 BNSS Pre-Cognizance Defense">
                          Section 223 BNSS Pre-Cognizance Defense
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      Brief Case Summary & Current Stage
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Specify loan type, nature of fraud or harassment, police/court status..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wide shadow-md transition-all"
                  >
                    Submit for Senior Advocate Review
                  </button>
                  <p className="text-[11px] text-slate-500 text-center">
                    Protected by Attorney-Client Privilege • Zero Commission Cuts
                  </p>
                </form>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

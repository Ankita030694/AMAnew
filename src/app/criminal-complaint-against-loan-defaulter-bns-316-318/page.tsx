import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const PAGE_URL = "https://www.amalegalsolutions.com/criminal-complaint-against-loan-defaulter-bns-316-318";
const OG_IMAGE = "https://www.amalegalsolutions.com/images/og/criminal-complaint-against-loan-defaulter-bns-316-318.png";

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    question: "Can a bank, NBFC, or fintech lender file a police complaint (FIR) solely for non-payment of an EMI?",
    answer:
      "No. The Supreme Court of India in landmark rulings such as Satishchandra Ratanlal Shah v. State of Gujarat (2019) and Indian Oil Corporation v. NEPC India Ltd. (2006) has definitively established that mere failure to repay a loan is a pure civil breach of contract, not a criminal offence. For an FIR to be legally registered under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS), the lender must furnish concrete prima facie evidence demonstrating fraudulent or dishonest intention at the very inception of the transaction, such as forged documents, fabricated financial statements, or identity theft.",
  },
  {
    question: "What is the key difference between Section 316 and Section 318 of the Bharatiya Nyaya Sanhita (BNS)?",
    answer:
      "Section 316 BNS governs 'Criminal Breach of Trust' (formerly Sections 405/406 IPC), which requires an initial lawful entrustment of property or dominion over property, followed by subsequent dishonest misappropriation. Section 318 BNS governs 'Cheating' (formerly Sections 415/420 IPC), which requires fraudulent or dishonest inducement and deception right at the inception of the transaction. Because Section 316 presumes good faith at inception while Section 318 presumes deception from the start, the Supreme Court has ruled that both charges are antithetical and mutually exclusive.",
  },
  {
    question: "When does a loan default become an actionable criminal offence under Section 318(4) BNS?",
    answer:
      "A loan transaction crosses the threshold from a civil default into a criminal offence under Section 318(4) BNS (cheating and dishonestly inducing delivery of property) when the borrower obtains funds through fraudulent misrepresentation. Common examples include: submitting forged salary slips or fabricated ITR acknowledgements, manipulating PDF bank statements to inflate balances, using stolen KYC documents to create synthetic identities, mortgaging non-existent assets, or participating in premeditated First Payment Default (FPD) fraud syndicates.",
  },
  {
    question: "How does Section 173(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS) protect borrowers from false FIRs?",
    answer:
      "Under Section 173(3) of the BNSS, 2023, the police are granted statutory power to conduct a preliminary enquiry of up to fourteen days before registering an FIR for cognizable offences punishable between three and seven years (which includes Section 318(4) BNS). The enquiry, conducted with prior permission from an officer not below the rank of Deputy Superintendent of Police (DSP), is specifically intended to weed out commercial and civil debt disputes dressed up as criminal offences before any coercive police action is initiated.",
  },
  {
    question: "What is the new safeguard under Section 223 of the BNSS regarding private criminal complaints?",
    answer:
      "Section 223 of the BNSS, 2023 introduces a revolutionary statutory safeguard that did not exist under Section 200 of the old CrPC. Under the proviso to Section 223(1) BNSS, a Magistrate cannot take cognizance of an offence in a private criminal complaint without first giving the proposed accused an opportunity of being heard. This ensures that borrowers cannot be subjected to ex-parte criminal process or arrest warrants without having a legal chance to present loan statements and prove that the matter is a bona fide civil dispute.",
  },
  {
    question: "When can Section 316 BNS (Criminal Breach of Trust) be invoked against a borrower?",
    answer:
      "In general unsecured personal loans, Section 316 BNS cannot be invoked because money lent creates a debtor-creditor relationship rather than an 'entrustment'. However, Section 316 BNS becomes directly actionable in secured asset-backed financing where the borrower is entrusted with physical possession of a hypothecated vehicle, plant equipment, or pledged warehouse stock, and subsequently sells, dismantles, secretes, or disposes of that property without lender authorization and pockets the proceeds.",
  },
  {
    question: "Can an advocate get a false criminal complaint or FIR quashed by the High Court?",
    answer:
      "Yes. If an aggressive lender or recovery agency maliciously files an FIR or criminal complaint for a genuine business failure or bona fide loan default, the borrower can approach the High Court under Section 528 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 482 CrPC) or under Article 226 of the Constitution of India. The High Court will quash the proceedings if the complaint fails to establish deceptive intent at inception or where civil remedies are deliberately converted into criminal extortion.",
  },
  {
    question: "What electronic evidence is required under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA) to prove loan fraud?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), any digital evidence—including digital loan agreements, IP address logs, device identifiers, OTP verification audit trails, and bank API response payloads—must be accompanied by a formal Section 63 BSA certificate. This certificate requires dual signatures (the system custodian and technical expert) and cryptographic SHA-256 hash validation to ensure tamper-proof court admissibility.",
  },
  {
    question: "What should a borrower do if recovery agents threaten police arrest or fake warrants under BNS 318?",
    answer:
      "Police officers cannot issue arrest warrants; only a competent Magistrate can issue warrants after judicial examination. If recovery agents send intimidating messages claiming non-bailable warrants or criminal cases, file a written complaint under Section 351 BNS (Criminal Intimidation) and report the lending institution to the Reserve Bank of India (RBI) Ombudsman for violating the Fair Practices Code and Digital Lending Guidelines.",
  },
  {
    question: "Can a lender pursue both civil recovery and Section 138 NI Act / Section 25 PSSA simultaneously?",
    answer:
      "Yes. A lender can simultaneously pursue quasi-criminal remedies for cheque dishonour under Section 138 of the Negotiable Instruments Act or electronic mandate bounce under Section 25 of the Payment and Settlement Systems Act, while also maintaining civil recovery proceedings under the SARFAESI Act, DRT, or Order 37 CPC. However, initiating general cheating charges under BNS 318 requires independent proof of fraud at inception.",
  },
];

/* ─────────────────────────── METADATA ──────────────────────────── */
export const metadata = {
  title: "Criminal Complaint Against Loan Defaulter: BNS 316 & 318 Legal Guide | AMA",
  description:
    "Exhaustive legal guide on criminal complaints against loan defaulters under Section 316 & 318 BNS. Learn the difference between civil default and criminal fraud, Section 173(3) BNSS enquiries, and High Court quashing.",
  keywords: [
    "criminal complaint against loan defaulter bns 316 318",
    "bns section 318 cheating loan fraud",
    "bns section 316 criminal breach of trust loan default",
    "loan default civil dispute or criminal offence",
    "fake kyc forged salary slip loan fir",
    "section 173 bnss preliminary enquiry loan",
    "section 223 bnss hearing of accused",
    "section 528 bnss quash loan fir",
    "satishchandra ratanlal shah loan default",
    "indian oil corporation vs nepc india",
    "nbfc bank loan recovery criminal notice",
    "hypothecated asset sold criminal breach of trust",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Criminal Complaint Against Loan Defaulter: BNS 316 & 318 Legal Guide",
    description:
      "Authoritative analysis on whether loan default constitutes a criminal offence under Section 316 and 318 BNS. Procedural safeguards under BNSS 173(3) and 223, digital proof under Section 63 BSA, and High Court quashing.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Criminal Complaint Against Loan Defaulter BNS 316 318 Legal Guide - AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criminal Complaint Against Loan Defaulter: BNS 316 & 318 Legal Guide",
    description:
      "Authoritative analysis on whether loan default constitutes a criminal offence under Section 316 and 318 BNS. Procedural safeguards under BNSS 173(3) and 223, digital proof under Section 63 BSA, and High Court quashing.",
    images: [OG_IMAGE],
    site: "@AMALegalSol",
    creator: "@AnujAnandMalik",
  },
  authors: [{ name: "Adv. Anuj Anand Malik", url: "/author/anuj-anand-malik" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ─────────────────────────── SCHEMAS ───────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.amalegalsolutions.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.amalegalsolutions.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Criminal Complaint Against Loan Defaulter (BNS 316 & 318)",
      item: PAGE_URL,
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Criminal Complaint Against Loan Defaulter: BNS 316 & 318 Legal Guide & Quashing Jurisprudence",
  description:
    "Exhaustive legal treatise on filing and defending criminal complaints against loan defaulters under Section 316 (Criminal Breach of Trust) and Section 318 (Cheating) of Bharatiya Nyaya Sanhita, 2023. Examines civil default vs criminal fraud, BNSS 173(3) preliminary enquiry, BNSS 223 pre-cognizance hearings, Section 63 BSA digital evidence, and Supreme Court quashing precedents.",
  image: OG_IMAGE,
  datePublished: "2026-09-24",
  dateModified: "2026-09-24",
  author: {
    "@type": "Person",
    name: "Adv. Anuj Anand Malik",
    jobTitle: "Founder & Managing Partner",
    url: "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    image: "https://www.amalegalsolutions.com/anujbhiya.png",
    sameAs: [
      "https://www.linkedin.com/in/iamanujmalik/",
      "https://www.instagram.com/amalegalsolutions/?hl=en",
    ],
  },
  publisher: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://www.amalegalsolutions.com/ama3.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": PAGE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Criminal Banking Litigation & Defense Advisory (BNS 316 & 318)",
  image: OG_IMAGE,
  description:
    "Advocate-led criminal litigation, forensic investigation, and defense advisory under Bharatiya Nyaya Sanhita (BNS 2023) and Bharatiya Nagarik Suraksha Sanhita (BNSS 2023).",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1180",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", "name": "Vikramaditya S." },
      reviewBody:
        "AMA Legal Solutions provided exceptional institutional clarity when our portfolio faced a syndicate using doctored salary slips. Their precise invocation of Section 318(4) BNS with Section 63 BSA digital evidence led to prompt FIR registration, while cleanly protecting genuine distressed borrowers.",
    },
  ],
};

/* ─────────────────────────── TOC SECTIONS ──────────────────────── */
const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "statutory-transition", title: "IPC to BNS Transition" },
  { id: "civil-vs-criminal", title: "Civil Default vs Criminal Fraud" },
  { id: "mens-rea-at-inception", title: "Mens Rea at Inception" },
  { id: "section-316-breach-of-trust", title: "Section 316 BNS (Breach of Trust)" },
  { id: "section-318-cheating", title: "Section 318 BNS (Cheating)" },
  { id: "mutual-exclusivity", title: "Mutual Exclusivity Doctrine" },
  { id: "bnss-procedural-roadmap", title: "BNSS Procedural Safeguards" },
  { id: "bsa-digital-evidence", title: "Digital Proof (Section 63 BSA)" },
  { id: "comparison-table", title: "Master Comparison Table" },
  { id: "supreme-court-precedents", title: "Supreme Court Precedents" },
  { id: "borrower-defense-quashing", title: "Quashing Under Section 528 BNSS" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const breadcrumbItems = [
  { label: "Services", href: "/services" },
  { label: "Criminal Complaint Against Loan Defaulter", href: PAGE_URL },
];

const relatedPages = [
  { label: "Section 25 PSSA vs Section 138 NI Act", href: "/section-25-pssa-vs-section-138-ni-act-loan-recovery" },
  { label: "Debt Recovery System for NBFCs", href: "/debt-recovery-system-for-nbfcs" },
  { label: "Debt Recovery System for Pay Day Loans", href: "/debt-recovery-system-for-pay-day-loans" },
  { label: "Automated Bulk Legal Notice for Digital Lenders", href: "/automated-bulk-legal-notice-for-digital-lenders" },
  { label: "Loan Settlement Expert Advisory", href: "/services/loan-settlement" },
];

export default function CriminalComplaintLoanDefaulterPage() {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* ── HERO SECTION (AMA SIGNATURE NAVY & GOLD) ── */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#D2A02A] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>

          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-2xl md:text-6xl font-extrabold mb-5 md:mb-8 leading-tight tracking-tight">
              Criminal Complaint Against <span className="text-[#D2A02A]">Loan Defaulter: BNS 316 & 318</span> Legal Guide
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-medium">
              An exhaustive legal breakdown on the fine line between civil loan default and criminal prosecution under Bharatiya Nyaya Sanhita, 2023. Understand <em className="text-[#D2A02A] not-italic font-semibold">mens rea at inception</em>, Section 173(3) & 223 BNSS safeguards, Section 63 BSA digital evidence, and High Court quashing under Section 528 BNSS.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-7 md:py-5 md:px-14 rounded-full transition-all transform hover:scale-105 shadow-2xl text-sm md:text-xl">
                  Consult Criminal Banking Litigator
                </button>
              </Link>
              <a
                href="tel:+918700343611"
                className="bg-transparent border-2 border-white/30 backdrop-blur-sm hover:border-[#D2A02A] text-white font-bold py-3 px-7 md:py-5 md:px-14 rounded-full transition-all transform hover:scale-105 text-sm md:text-xl"
              >
                Emergency Legal Case Review
              </a>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTAINER (3-COLUMN SIGNATURE LAYOUT) ── */}
        <div className="container mx-auto px-4 max-w-8xl py-10">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            {/* ── LEFT SIDEBAR: TOPIC OVERVIEW (TOC) ── */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-3 border-b pb-2">Topic Overview</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* ── CENTER COLUMN: MAIN CONTENT ── */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12 border border-gray-100">
                {/* 1. Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    The Debt vs. Crime Dilemma: A Critical Analysis
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 md:space-y-8 mt-6">
                    <p className="text-base md:text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-[#D2A02A] first-letter:mr-3 first-letter:float-left">
                      &ldquo;A police complaint under BNS Section 318 has been registered against you,&rdquo; or &ldquo;Non-bailable warrants have been initiated for cheating under Section 316.&rdquo; Across India—from the tech corridors of Bengaluru and Gurugram to commercial trading hubs in Mumbai and Ahmedabad—borrowers struggling with overdue loans are bombarded with these aggressive, intimidating messages by collection desks. But the central constitutional question remains: <strong>Can an unpaid loan legally justify a criminal complaint under the Bharatiya Nyaya Sanhita, 2023?</strong>
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      At AMA Legal Solutions, we witness both sides of this sharp legal sword. On one hand, fintech lenders and NBFCs face organized cyber syndicates that exploit digital credit systems using forged salary slips, doctored PDF bank statements, and synthetic identities with zero intention of repaying. On the other hand, genuine salaried employees, small business owners, and startup founders who suffered genuine economic catastrophes—such as sudden medical crises, vendor insolvencies, or job loss—are subjected to unlawful police threats designed to convert pure civil defaults into criminal extortion.
                    </p>
                    <div className="bg-gray-900 text-white p-8 md:p-10 rounded-[2rem] border-l-[10px] border-[#D2A02A] relative group">
                      <div className="absolute top-4 left-4 text-[#D2A02A] text-6xl opacity-20 group-hover:opacity-40 transition-opacity">&ldquo;</div>
                      <p className="text-lg md:text-xl italic font-medium leading-relaxed">
                        &ldquo;The distinction between mere breach of contract and the offence of cheating is a fine one. It depends upon the intention of the accused at the time of inducement. The machinery of criminal law is not to be utilized for coercing a debtor into repayment where no fraudulent intent existed at inception.&rdquo;
                      </p>
                      <div className="mt-4 text-[#D2A02A] font-bold text-sm tracking-widest uppercase text-right">
                        — Supreme Court of India in Satishchandra Ratanlal Shah & Alpic Finance
                      </div>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed">
                      Indian jurisprudence is uncompromisingly clear: <strong>A simple loan default is a civil dispute, not a crime.</strong> However, when the borrowing transaction is born out of fraudulent deception, fake KYC, or deliberate asset misappropriation, the criminal justice machinery under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS) is legitimately engaged.
                    </p>
                  </div>
                </section>

                {/* 2. Statutory Transition: IPC to BNS */}
                <section id="statutory-transition" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    Statutory Codification: Old IPC Provisions to Bharatiya Nyaya Sanhita, 2023
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      With the complete enforcement of the new criminal laws, the colonial Indian Penal Code, 1860 (IPC) has been replaced by the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>. Legal notices, police complaints, and High Court quashing petitions must strictly invoke the updated sections to avoid immediate procedural dismissal:
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mt-4">
                      <table className="w-full text-left text-sm border-collapse">
                        <thead>
                          <tr className="bg-gray-900 text-white text-xs uppercase tracking-wider">
                            <th className="py-4 px-5">Offence Description</th>
                            <th className="py-4 px-5">Old IPC Provision</th>
                            <th className="py-4 px-5">New BNS Provision</th>
                            <th className="py-4 px-5">Prescribed Punishment</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-700 text-xs md:text-sm">
                          <tr className="hover:bg-gray-50">
                            <td className="py-3.5 px-5 font-semibold text-gray-900">
                              Criminal Breach of Trust (Definition & Penalty)
                            </td>
                            <td className="py-3.5 px-5">Section 405 & 406 IPC</td>
                            <td className="py-3.5 px-5 font-bold text-[#D2A02A]">Section 316(1) & 316(2) BNS</td>
                            <td className="py-3.5 px-5">Imprisonment up to 5 years, or fine, or both</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-amber-50/30">
                            <td className="py-3.5 px-5 font-semibold text-gray-900">
                              Cheating & Dishonestly Inducing Delivery of Property
                            </td>
                            <td className="py-3.5 px-5">Section 415 & 420 IPC</td>
                            <td className="py-3.5 px-5 font-bold text-[#D2A02A]">Section 318(1) & 318(4) BNS</td>
                            <td className="py-3.5 px-5">Imprisonment up to 7 years and fine</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-3.5 px-5 font-semibold text-gray-900">
                              Forgery (Fake Salary Slips / Documents)
                            </td>
                            <td className="py-3.5 px-5">Section 463 & 465 IPC</td>
                            <td className="py-3.5 px-5 font-bold text-[#D2A02A]">Section 336 BNS</td>
                            <td className="py-3.5 px-5">Imprisonment up to 2 years, or fine, or both</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-amber-50/30">
                            <td className="py-3.5 px-5 font-semibold text-gray-900">
                              Forgery of Valuable Security / Loan Agreements
                            </td>
                            <td className="py-3.5 px-5">Section 467 IPC</td>
                            <td className="py-3.5 px-5 font-bold text-[#D2A02A]">Section 338 BNS</td>
                            <td className="py-3.5 px-5">Imprisonment for life, or up to 10 years, and fine</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-3.5 px-5 font-semibold text-gray-900">
                              Using a Forged Document as Genuine
                            </td>
                            <td className="py-3.5 px-5">Section 471 IPC</td>
                            <td className="py-3.5 px-5 font-bold text-[#D2A02A]">Section 340 BNS</td>
                            <td className="py-3.5 px-5">Punished in same manner as if forged</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-amber-50/30">
                            <td className="py-3.5 px-5 font-semibold text-gray-900">
                              Criminal Conspiracy (Multi-Borrower Fraud Rings)
                            </td>
                            <td className="py-3.5 px-5">Section 120-B IPC</td>
                            <td className="py-3.5 px-5 font-bold text-[#D2A02A]">Section 61(2) BNS</td>
                            <td className="py-3.5 px-5">Same as abetment of substantive offence</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-3.5 px-5 font-semibold text-gray-900">
                              Criminal Intimidation (Recovery Agent Threats)
                            </td>
                            <td className="py-3.5 px-5">Section 503 & 506 IPC</td>
                            <td className="py-3.5 px-5 font-bold text-[#D2A02A]">Section 351 BNS</td>
                            <td className="py-3.5 px-5">Imprisonment up to 2 years (or 7 years for grave threats)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* 3. Civil Default vs Criminal Fraud */}
                <section id="civil-vs-criminal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    The Fundamental Boundary: Civil Breach vs. Criminal Fraud
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Every loan transaction is governed by a contract executed under the Indian Contract Act, 1872. When a borrower fails to pay, the default is prima facie a <strong>civil injury</strong>. To transform this breach into a cognizable penal crime, the complainant lender must satisfy stringent judicial criteria:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                      <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm space-y-3">
                        <div className="flex items-center gap-2 text-gray-900 font-bold text-base">
                          <span className="w-3 h-3 rounded-full bg-blue-600" />
                          Bona Fide Civil Loan Default
                        </div>
                        <ul className="text-xs md:text-sm text-gray-600 space-y-2 list-disc pl-4">
                          <li>Borrower provided authentic, unmanipulated identity and financial records.</li>
                          <li>Repayments were made consistently until an unforeseen event (loss of job, medical emergency, business failure).</li>
                          <li>Debtor acknowledges the liability but is commercially insolvent or facing liquidity distress.</li>
                          <li>
                            <strong>Exclusive Legal Recourse:</strong> Section 138 NI Act, Section 25 PSSA, SARFAESI Act, DRT, or Summary Civil Suit (Order 37 CPC).
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border-2 border-amber-300 shadow-sm space-y-3">
                        <div className="flex items-center gap-2 text-[#D2A02A] font-bold text-base">
                          <span className="w-3 h-3 rounded-full bg-[#D2A02A]" />
                          Actionable Criminal Offence (BNS 318 / 316)
                        </div>
                        <ul className="text-xs md:text-sm text-gray-600 space-y-2 list-disc pl-4">
                          <li>Borrower submitted fabricated salary slips, doctored PDFs, or stolen KYC data.</li>
                          <li>Zero intent to repay existed at the time of sanction (First Payment Default syndicates).</li>
                          <li>Hypothecated or pledged collateral was secretly sold or dismantled without lender permission.</li>
                          <li>
                            <strong>Criminal Recourse:</strong> Formal complaint under Section 173 BNSS for BNS 318(4) & 336/340, backed by Section 63 BSA electronic evidence.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. Mens Rea at Inception */}
                <section id="mens-rea-at-inception" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    The Core Legal Test: Mens Rea (Fraudulent Intention) at Inception
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      In all criminal proceedings initiated under <strong>Section 318 BNS (formerly Section 420 IPC)</strong>, the sine qua non (indispensable condition) is the existence of <strong>fraudulent or dishonest intention at the time of making the promise or representation</strong>. Subsequent inability to honor a financial promise does not retroactively transform a civil contract into criminal cheating.
                    </p>
                    <div className="bg-[#f9f5e8] border border-amber-200 p-6 md:p-8 rounded-2xl space-y-4">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        The Temporal Test Established in Hridaya Ranjan Prasad Verma (2000) & Dalip Kaur (2009)
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        The Supreme Court of India in <em>Hridaya Ranjan Prasad Verma v. State of Bihar (2000) 4 SCC 168</em> laid down the definitive test for distinguishing between mere failure to perform a promise and the criminal offence of cheating:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm not-prose">
                        <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-xs">
                          <div className="font-bold text-gray-900 mb-1">Mere Breach of Contract</div>
                          <p className="text-gray-600">
                            The promisor or borrower intended to perform the promise at the time it was made, but subsequently failed to do so due to external circumstances, commercial insolvency, or changed conditions. <em>No criminal offence is made out.</em>
                          </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-xs">
                          <div className="font-bold text-gray-900 mb-1">Offence of Cheating (BNS 318)</div>
                          <p className="text-gray-600">
                            The promisor or borrower had <strong>dishonest intention at the very moment the promise was made</strong>, inducing the lender to part with money based on a representation known to be false. <em>Attracts up to 7 years imprisonment.</em>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. Section 316 BNS: Breach of Trust */}
                <section id="section-316-breach-of-trust" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    Section 316 BNS (Criminal Breach of Trust): When Does It Apply in Loans?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Under <strong>Section 316 of the Bharatiya Nyaya Sanhita, 2023</strong> (replacing Section 405/406 IPC), criminal breach of trust requires two fundamental components:
                    </p>
                    <ol className="list-decimal pl-5 text-gray-700 space-y-2 text-sm md:text-base">
                      <li><strong>Entrustment:</strong> Property or dominion over property must be entrusted to the accused in a fiduciary or custodial capacity.</li>
                      <li><strong>Dishonest Misappropriation:</strong> The accused must dishonestly convert that property to their own use, or dispose of it in violation of a legal contract or statutory direction.</li>
                    </ol>

                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-4">
                      <h3 className="text-base font-bold text-gray-900">
                        Why Section 316 Rarely Applies to Unsecured Personal Loans
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        When a commercial bank or NBFC disburses an unsecured personal loan or payday advance, the ownership of the funds is transferred unconditionally to the borrower. The relationship between the bank and the borrower is strictly that of <strong>creditor and debtor</strong>, not <strong>trustee and beneficiary</strong>. Because the borrower becomes the absolute owner of the borrowed money, they cannot &ldquo;misappropriate&rdquo; what has legally become their own property.
                      </p>
                    </div>

                    <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200 p-6 space-y-3">
                      <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                        When Section 316 BNS IS Legally Sustainable
                      </h3>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        Section 316 BNS becomes fully actionable in <strong>hypothecation and asset-backed financing</strong>:
                      </p>
                      <ul className="text-xs md:text-sm text-gray-700 space-y-2 list-disc pl-5">
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
                  </div>
                </section>

                {/* 6. Section 318 BNS: Cheating */}
                <section id="section-318-cheating" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    Section 318 BNS (Cheating): Forged KYC, Fake Salary Slips & Synthetic Identity
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      <strong>Section 318(4) of the Bharatiya Nyaya Sanhita, 2023</strong> (the modern successor to Section 420 IPC) prescribes imprisonment up to seven years and a mandatory fine for cheating and dishonestly inducing the delivery of property or valuable securities. This section is the primary legal mechanism for prosecuting genuine loan frauds:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
                        <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#D2A02A]" />
                          Doctored PDF Bank Statements
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Borrowers editing PDF statement text layers using design tools to show inflated average monthly balances, fake salary credits, or suppressed EMI outflows. Traced via font-rendering and PDF creation metadata.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
                        <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#D2A02A]" />
                          Fabricated Salary Slips & Form 16
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Submission of forged employer salary slips or fictitious Form 16 certificates from shell companies that have no physical existence or tax deposits. Attracts Section 336 & 340 BNS (Forgery).
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
                        <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#D2A02A]" />
                          Synthetic Identities & Stolen KYC
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Organized syndicates using morphed Aadhaar cards, spoofed PAN numbers, and prepaid mule bank accounts to withdraw credit line disbursements before immediately abandoning SIM cards.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
                        <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#D2A02A]" />
                          Multiple Pledging of Same Property
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Borrowers using certified duplicate title deeds or forged non-encumbrance certificates to secure simultaneous mortgages from multiple banks or housing finance NBFCs on the same physical immovable asset.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 7. Mutual Exclusivity Doctrine */}
                <section id="mutual-exclusivity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    The Mutual Exclusivity Doctrine: Why BNS 316 and 318 Cannot Be Jointly Alleged
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      A common pleading error committed by institutional recovery desks and untrained practitioners is blindly citing both <strong>Section 316 (Breach of Trust)</strong> and <strong>Section 318 (Cheating)</strong> against a borrower for the same transaction. The Supreme Court of India has repeatedly declared that these two offences are conceptually <strong>antithetical and mutually exclusive</strong>:
                    </p>
                    <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 border border-gray-800 space-y-4 not-prose">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div className="border-l-2 border-[#D2A02A] pl-4 space-y-2">
                          <div className="text-[#D2A02A] font-bold text-xs uppercase tracking-wider">
                            Section 316 BNS (Breach of Trust)
                          </div>
                          <p className="text-gray-300 text-xs md:text-sm">
                            Requires that property was <strong>lawfully and genuinely entrusted</strong> to the accused in good faith. The accused had no criminal intent initially; dishonest misappropriation developed at a subsequent stage.
                          </p>
                        </div>

                        <div className="border-l-2 border-blue-400 pl-4 space-y-2">
                          <div className="text-blue-400 font-bold text-xs uppercase tracking-wider">
                            Section 318 BNS (Cheating)
                          </div>
                          <p className="text-gray-300 text-xs md:text-sm">
                            Requires that the accused had <strong>dishonest intention at the very beginning</strong>. The transfer of property was induced by deceit. There was never any lawful entrustment in the eyes of the law.
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 border-t border-gray-800 pt-3">
                        <strong>Litigation Warning:</strong> If a criminal complaint mechanically alleges that a borrower both &ldquo;cheated at inception&rdquo; and was &ldquo;lawfully entrusted with property that they later converted,&rdquo; the High Court can quash the complaint on the grounds of contradictory and legally irreconcilable pleadings.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 8. Procedural Roadmap Under BNSS */}
                <section id="bnss-procedural-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    Procedural Roadmap Under BNSS: Section 173(3) Enquiry to Section 223 Hearing
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      The <strong>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</strong> introduced procedural safeguards to prevent the abuse of the criminal process in debt and commercial disputes:
                    </p>
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl space-y-3 not-prose my-6">
                      <h4 className="text-base font-bold text-blue-900">
                        Key Statutory Safeguards Introduced by BNSS, 2023:
                      </h4>
                      <ul className="text-xs md:text-sm text-gray-700 space-y-3 list-disc pl-5">
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
                  </div>
                </section>

                {/* 9. Digital Evidence Protocol: Section 63 BSA */}
                <section id="bsa-digital-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    Digital Evidence Protocol: Proving Loan Fraud Under Section 63 BSA
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      In modern fintech, payday lending, and retail credit, virtually 100% of interactions occur through digital channels. Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced Section 65B of the Indian Evidence Act, digital records must be authenticated with strict technical integrity:
                    </p>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-4 not-prose">
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                        <span className="w-3 h-3 rounded-full bg-emerald-500" />
                        Mandatory Section 63 BSA Forensic Dossier Checklist
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-700">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                          <strong>1. Device Telemetry & IP Logs:</strong> Timestamped IP address, IMEI/device UUID, geolocation coordinates, and ISP logs recorded during the loan submission.
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                          <strong>2. Aadhaar / PAN OTP Audit Trail:</strong> UIDAI or NSDL API transaction IDs proving whether the verified phone number matched the applicant.
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                          <strong>3. PDF Text Layer Analysis:</strong> Technical extraction demonstrating manipulation of salary slip figures or mismatched font metadata in uploaded bank statements.
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                          <strong>4. Dual-Signature Certificate:</strong> Schedule certificate signed jointly by the operational custodian and technical officer with cryptographic SHA-256 hash.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 10. Master Comparison Table */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    Master Comparison: Civil Default vs BNS 316 vs BNS 318 vs Section 138 NI Act
                  </h2>
                  <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mt-4">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-900 text-white text-xs uppercase tracking-wider">
                          <th className="py-4 px-4">Parameter</th>
                          <th className="py-4 px-4">Civil Default</th>
                          <th className="py-4 px-4">BNS 316 (Breach of Trust)</th>
                          <th className="py-4 px-4">BNS 318(4) (Cheating)</th>
                          <th className="py-4 px-4">Sec 138 NI / Sec 25 PSSA</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-700 text-xs md:text-sm">
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-gray-900">Legal Nature</td>
                          <td className="py-3 px-4">Pure breach of contract</td>
                          <td className="py-3 px-4">Criminal misappropriation</td>
                          <td className="py-3 px-4">Criminal deceit / fraud</td>
                          <td className="py-3 px-4">Quasi-criminal statutory penal</td>
                        </tr>
                        <tr className="hover:bg-gray-50 bg-amber-50/20">
                          <td className="py-3 px-4 font-semibold text-gray-900">Mental State (Mens Rea)</td>
                          <td className="py-3 px-4">Not applicable</td>
                          <td className="py-3 px-4">Dishonest intent arises later</td>
                          <td className="py-3 px-4 font-bold text-[#D2A02A]">Mandatory at inception</td>
                          <td className="py-3 px-4">Strict statutory liability</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-gray-900">Applicable Scenarios</td>
                          <td className="py-3 px-4">Inability to pay genuine loan</td>
                          <td className="py-3 px-4">Selling hypothecated vehicle/stock</td>
                          <td className="py-3 px-4">Fake KYC, forged salary slips, FPD</td>
                          <td className="py-3 px-4">Cheque bounce or NACH dishonour</td>
                        </tr>
                        <tr className="hover:bg-gray-50 bg-amber-50/20">
                          <td className="py-3 px-4 font-semibold text-gray-900">Pre-FIR Procedure</td>
                          <td className="py-3 px-4">Civil demand notice</td>
                          <td className="py-3 px-4">14-day enquiry under BNSS 173(3)</td>
                          <td className="py-3 px-4">14-day enquiry under BNSS 173(3)</td>
                          <td className="py-3 px-4">30-day notice, 15-day cure</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-gray-900">Cognizance Safeguard</td>
                          <td className="py-3 px-4">Civil Court summons</td>
                          <td className="py-3 px-4">Pre-cognizance hearing (BNSS 223)</td>
                          <td className="py-3 px-4">Pre-cognizance hearing (BNSS 223)</td>
                          <td className="py-3 px-4">Section 142 NI Act complaint</td>
                        </tr>
                        <tr className="hover:bg-gray-50 bg-amber-50/20">
                          <td className="py-3 px-4 font-semibold text-gray-900">Maximum Penalty</td>
                          <td className="py-3 px-4">Money decree & attachment</td>
                          <td className="py-3 px-4">Up to 5 years imprisonment</td>
                          <td className="py-3 px-4">Up to 7 years imprisonment</td>
                          <td className="py-3 px-4">Up to 2 years imprisonment & 2x fine</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-gray-900">Quashing Route</td>
                          <td className="py-3 px-4">Civil rejection (Order 7 Rule 11)</td>
                          <td className="py-3 px-4">Section 528 BNSS / Art 226</td>
                          <td className="py-3 px-4">Section 528 BNSS / Art 226</td>
                          <td className="py-3 px-4">Section 528 BNSS (Limitation/Debt)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 11. Supreme Court Precedents */}
                <section id="supreme-court-precedents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    Landmark Supreme Court Rulings on Loan Defaults & Criminal Quashing
                  </h2>
                  <div className="space-y-4 not-prose mt-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-gray-900">
                          Satishchandra Ratanlal Shah v. State of Gujarat (2019) 9 SCC 148
                        </h3>
                        <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-900 rounded-full">
                          Non-Payment of Loan is Not Cheating
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        A division bench of the Supreme Court held that the inability or failure to repay a loan from a lending company does not amount to criminal cheating or criminal breach of trust in the absence of specific evidence proving fraudulent intention at the inception of the contract. The criminal proceedings were quashed.
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-gray-900">
                          Indian Oil Corporation v. NEPC India Ltd. (2006) 6 SCC 736
                        </h3>
                        <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-900 rounded-full">
                          Deprecating Criminal Pressure for Civil Debts
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        The Apex Court strongly deprecated the growing tendency in commercial circles to convert purely civil disputes into criminal cases to pressure the opposite party. The Court affirmed that hypothecation of property does not amount to &ldquo;entrustment&rdquo; under criminal breach of trust because legal ownership and possession remain with the debtor.
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-gray-900">
                          Vijay Kumar Ghai v. State of West Bengal (2022) 7 SCC 124
                        </h3>
                        <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full">
                          Strict Test for Cheating
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        The Supreme Court reaffirmed that there is a palpable distinction between civil breach of contract and the criminal offence of cheating. There must be dishonest inducement from the very start. Filing criminal complaints to bypass civil limitation or settle commercial scores is an abuse of judicial process.
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-gray-900">
                          Priyanka Srivastava v. State of U.P. (2015) 6 SCC 287
                        </h3>
                        <span className="text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-900 rounded-full">
                          Mandatory Affidavit for Magistrate Complaints
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        The Supreme Court mandated that applications seeking Magistrate-ordered police investigations against lenders or borrowers must be supported by a sworn affidavit. This rule has now been formally codified into Section 175(3) of the BNSS, 2023.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 12. Borrower Defense & Quashing */}
                <section id="borrower-defense-quashing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    Borrower Rights & Quashing Remedies Under Section 528 BNSS & Article 226
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      If you are a borrower facing unlawful criminal threats, harassing WhatsApp messages claiming that &ldquo;non-bailable warrants have been issued under BNS 318,&rdquo; or an illegal police summons for a pure loan default, you have robust statutory and constitutional shields:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
                        <div className="text-sm font-bold text-gray-900">
                          1. Section 173(3) BNSS Preliminary Response
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          When summoned for a preliminary enquiry, submit your complete bank statements showing prior EMI payments and documentary proof of financial distress (pink slip, medical discharge summary). This disproves fraudulent intent at inception.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
                        <div className="text-sm font-bold text-gray-900">
                          2. Exercise Section 223 BNSS Right of Hearing
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Under the new BNSS proviso, demand your statutory right of being heard before the Magistrate takes cognizance on a private complaint. Present evidence that the dispute is strictly governed by civil loan agreements.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
                        <div className="text-sm font-bold text-gray-900">
                          3. High Court Quashing Under Section 528 BNSS
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Invoke the inherent powers of the High Court (formerly Section 482 CrPC) to quash malicious FIRs or complaints where the dispute is civil debt recovery, citing <em>Satishchandra Ratanlal Shah</em> and <em>Indian Oil Corporation</em>.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
                        <div className="text-sm font-bold text-gray-900">
                          4. Counter-Complaints for Criminal Intimidation
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          File a counter-complaint under <strong>Section 351 BNS</strong> (Criminal Intimidation) and lodge complaints with the <strong>RBI Banking Ombudsman</strong> if recovery agents threaten public shaming, physical harm, or send fake court notices.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 13. FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 border-b-4 border-[#D2A02A] pb-3 inline-block">
                    Frequently Asked Questions (Criminal Banking Litigation Desk)
                  </h2>
                  <div className="space-y-4 not-prose mt-6">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-2 flex gap-2 text-base md:text-lg">
                          <span className="text-[#D2A02A]">Q.</span>
                          {faq.question}
                        </h4>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed border-t pt-2 mt-2">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── AUTHOR BIO BOX (AMA SIGNATURE) ── */}
                <aside className="bg-[#f9f5e8] p-6 md:p-8 rounded-3xl border border-amber-200 mt-12 mb-12 flex flex-col md:flex-row gap-6 items-center text-left">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A] shadow-md">
                    <Image
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik - Founder & Managing Partner"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-3 flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Reviewed & Authored by Adv. Anuj Anand Malik
                      </h3>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
                        Verified Bar Council Advocate
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-gray-700">
                      Founder & Managing Partner, AMA Legal Solutions | Enrolled with Bar Council of Delhi & Delhi High Court Bar Association
                    </p>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                      Advocate Anuj Anand Malik leads the Banking Litigation and Economic Offenses practice at AMA Legal Solutions. With extensive courtroom experience advising prominent digital NBFCs, institutional banks, and private borrowers across India, he specializes in separating bona fide commercial debts from criminal frauds under the new Bharatiya Nyaya Sanhita (BNS) and Bharatiya Nagarik Suraksha Sanhita (BNSS).
                    </p>
                    <div className="flex flex-wrap gap-4 pt-1 text-xs font-bold">
                      <a
                        href="https://www.linkedin.com/in/iamanujmalik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#b88a22] flex items-center gap-1"
                      >
                        LinkedIn Profile →
                      </a>
                      <Link
                        href="/author/anuj-anand-malik"
                        className="text-gray-800 hover:text-black flex items-center gap-1"
                      >
                        Author Profile & Credentials →
                      </Link>
                    </div>
                  </div>
                </aside>

                {/* ── BOTTOM CTA BOX (AMA SIGNATURE) ── */}
                <section id="cta-final" className="scroll-mt-32">
                  <div className="bg-[#1a202c] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden text-center border-b-8 border-[#D2A02A]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                      Facing Loan Criminal Threats or Suspect Loan Fraud?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                      Whether filing an institutional complaint for digital loan fraud under Section 318(4) BNS or quashing an illegal criminal notice from recovery agents, our senior banking litigators protect your rights.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                      <Link
                        href="/contact"
                        className="bg-[#D2A02A] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#b88a22] transition-all transform hover:scale-105"
                      >
                        Schedule Advocate Consultation
                      </Link>
                      <a
                        href="tel:+918700343611"
                        className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all border border-gray-200"
                      >
                        Call: +91 87003 43611
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* ── RIGHT SIDEBAR: QUICK ACTION & HELPFUL LINKS ── */}
            <div className="hidden lg:block space-y-10 sticky top-24">
              <div className="bg-[#1a202c] p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A] opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Stop Harassment. Know Your Rights.</h3>
                <p className="text-gray-300 mb-8 text-sm relative z-10 leading-relaxed">
                  Lenders cannot use criminal law as a shortcut for civil recovery. A strategic legal notice or quashing petition from AMA Legal Solutions stops unlawful intimidation.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-lg mb-6 text-lg"
                >
                  Immediate Call
                </a>
                <div className="text-center text-xs text-gray-400 font-medium tracking-wider uppercase">
                  Protected by Attorney-Client Privilege
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-1.5 h-6 bg-[#D2A02A] rounded-full mr-3"></span>
                  Helpful Links
                </h3>
                <div className="space-y-4">
                  {relatedPages.map((page, idx) => (
                    <Link
                      key={idx}
                      href={page.href}
                      className="group block p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                    >
                      <p className="text-sm font-semibold text-gray-700 group-hover:text-[#D2A02A] transition-colors">
                        {page.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

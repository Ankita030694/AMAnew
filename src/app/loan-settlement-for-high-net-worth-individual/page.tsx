import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can a high net worth individual settle a personal or business loan of more than 1 Crore in India?",
    answer: "Yes, high net worth individuals can legally settle multi-crore personal and business loans in India. Financial institutions are open to a One Time Settlement (OTS) for high-value exposures when genuine business failures, market downturns, or liquidity crises prevent repayment. The process is governed by the Reserve Bank of India (RBI) guidelines for stressed assets and typically involves high-level negotiations with the bank's Stressed Asset Management branches."
  },
  {
    question: "How does a loan settlement affect an HNWI's ability to remain a company director?",
    answer: "A loan settlement itself does not automatically disqualify an individual from being a company director. However, if the bank classifies the individual as a 'Wilful Defaulter' under RBI guidelines, Section 164(2) of the Companies Act, 2013, may trigger disqualification. Working with expert legal professionals like AMA Legal Solutions ensures that the settlement agreement prevents or reverses any wilful defaulter classification, keeping your corporate status intact."
  },
  {
    question: "Can banks issue a Look Out Circular (LOC) for high-value loan defaults?",
    answer: "Yes, public sector banks in India have the authority to request the Ministry of Home Affairs to issue Look Out Circulars (LOCs) against promoters or directors who default on high-value loans (typically exceeding 50 Crores, though it can occur for lower amounts in specific default scenarios). This is done to prevent individuals from leaving the country. Negotiating a structured settlement is the most effective way to have the bank withdraw the LOC."
  },
  {
    question: "What legal actions can banks take against HNWIs under the SARFAESI Act?",
    answer: "For secured loans, banks can invoke the SARFAESI Act, 2002, to take possession of and auction the collateral (properties or assets) without court intervention, provided the account is classified as an NPA and a 60-day notice is served. For high net worth individuals, challenging the validity of the SARFAESI notices in the Debt Recovery Tribunal (DRT) while negotiating an OTS is a common strategy to protect valuable assets."
  },
  {
    question: "Why should an HNWI hire a specialized legal firm instead of negotiating directly?",
    answer: "High-value loan settlements are highly complex, involving corporate guarantees, promoter shares, personal guarantees, and collateral under the SARFAESI Act. Banks deploy senior recovery committees and legal teams. A specialized legal firm like AMA Legal Solutions understands banking law, RBI regulations, and negotiating strategies, protecting your corporate reputation and securing favorable terms without litigious exposure."
  }
];

// Content for Related Pages
const relatedPages = [
  { name: "How to Settle Loans Above 1 Crore", href: "/how-to-settle-loans-above-1-crore" },
  { name: "How to Settle Loans Above 5 Crore", href: "/how-to-settle-loans-above-5-crore" },
  { name: "One Time Settlement (OTS) Legal Guide", href: "/one-time-settlement-ots-legal-assistance" },
  { name: "Debt Settlement Company in India", href: "/debt-settlement-company-in-india" },
  { name: "Legal Rights After Loan Default", href: "/legal-rights-after-loan-default" },
  { name: "CIBIL Score Recovery After Settlement", href: "/how-to-improve-cibil-score-after-loan-settlement" }
];

// Schema Data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Loan Settlement for High Net Worth Individuals",
      "item": "https://www.amalegalsolutions.com/loan-settlement-for-high-net-worth-individual"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement for High Net Worth Individuals (HNWIs) in India: Legality and Reputation Protection",
  "description": "Expert guide on loan settlement for high net worth individuals. Learn about the legal frameworks, RBI OTS guidelines, reputational protection, and high-value debt resolution.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "HNWI Loan Settlement and Stressed Asset Advisory",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "High-value debt resolution and One Time Settlement negotiations for high net worth individuals.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1790"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Samrat Basu"
      },
      "reviewBody": "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Santharaman Rajarajeswari"
      },
      "reviewBody": "I sincerely appreciate the support and guidance provided by the expert panel in resolving my credit card settlement process. Their approach was highly professional, transparent, and customer-focused. Every step was explained clearly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sk Nazir"
      },
      "reviewBody": "Very good consultation Ama Legal solutions. Firm believe in clients delight as primary aim rather then other inters. I know few cases where clients were associated with other firms and not getting relief in few years but this firm given Very quick relief and finalized the case."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Surendra Rao"
      },
      "reviewBody": "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
    }
  ]
};

export const metadata = {
  title: "HNWI Loan Settlement India | High-Value Debt Resolution",
  description: "Confidential One Time Settlement (OTS) guide for high net worth individuals in India. Settle multi-crore debts legally & protect your reputation.",
  keywords: [
    "loan settlement for high net worth individual",
    "high net worth individual",
    "One Time Settlement",
    "SARFAESI Act",
    "Debt Recovery Tribunal",
    "Wilful Defaulter",
    "Asset Reconstruction Company",
    "promoter debt",
    "No Dues Certificate",
    "CIBIL credit report",
    "banking ombudsman"
  ]
};

export default function HNWILoanSettlement() {
  const reviews = [
    {
      name: "Samrat Basu",
      location: "Kolkata",
      rating: 5,
      text: "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me.",
      date: "March 2025"
    },
    {
      name: "Santharaman Rajarajeswari",
      location: "Chennai",
      rating: 5,
      text: "I sincerely appreciate the support and guidance provided by the expert panel in resolving my credit card settlement process. Their approach was highly professional, transparent, and customer-focused. Every step was explained clearly.",
      date: "April 2025"
    },
    {
      name: "Sk Nazir",
      location: "Kolkata",
      rating: 5,
      text: "Very good consultation Ama Legal solutions. Firm believe in clients delight as primary aim rather then other inters. I know few cases where clients were associated with other firms and not getting relief in few years but this firm given Very quick relief and finalized the case.",
      date: "May 2025"
    },
    {
      name: "Surendra Rao",
      location: "Hyderabad",
      rating: 5,
      text: "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance.",
      date: "January 2025"
    }
  ];

  const tocSections = [
    { id: "direct-answer", title: "Direct Answer" },
    { id: "unique-stakes", title: "High-Value Default Stakes" },
    { id: "legal-risks-deep-dive", title: "Legal Risks & Exposures" },
    { id: "why-standard-falls-short", title: "Why Standard Programs Fail" },
    { id: "legal-framework", title: "Legal Framework & RBI Rules" },
    { id: "step-by-step", title: "Strategic Settlement Process" },
    { id: "data-points", title: "Key Debt Metrics" },
    { id: "cibil-restoration", title: "Credit Profile Restoration" },
    { id: "testimonials", title: "Client Testimonials" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement for HNWIs", href: "/loan-settlement-for-high-net-worth-individual" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800 text-[13px] md:text-[14px]">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-5 leading-tight">
              High-Value <span className="text-[#D2A02A]">Loan Settlement</span> for High Net Worth Individuals
            </h1>
            <p className="text-sm md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Discreet, legally sound debt resolution strategies for promoters, business owners, and directors with multi-crore exposures in India.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3.5 px-8 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base">
                Schedule a Confidential Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1400px] py-6">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_260px] gap-8 items-start">
            {/* Left Column - Table of Contents */}
            <div className="hidden lg:block sticky top-20 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 border-b pb-1.5 text-xs uppercase tracking-wider">On This Page</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="bg-white p-5 md:p-12 rounded-2xl shadow-xl space-y-12">
                
                {/* Direct Answer Section */}
                <section id="direct-answer" className="scroll-mt-24">
                  <div className="bg-[#fffaf0] border-l-4 border-[#D2A02A] p-5 rounded-r-lg">
                    <p className="text-base text-gray-900 font-semibold leading-relaxed">
                      High Net Worth Individuals (HNWIs) in India can settle high-value personal and business loans legally through a structured One Time Settlement (OTS) with banks. This process, governed by RBI guidelines, reduces outstanding liabilities while preventing aggressive Debt Recovery Tribunal (DRT) lawsuits, SARFAESI property seizures, and Wilful Defaulter classifications.
                    </p>
                  </div>
                </section>

                {/* The Unique Stakes Section */}
                <section id="unique-stakes" className="scroll-mt-24">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                    The Unique Stakes of High-Value Loan Defaults for HNWIs
                  </h2>
                  <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-5 leading-relaxed">
                    <p>
                      For a high net worth individual, financial distress is not merely a balance sheet problem-it is a significant threat to reputation, corporate standing, and personal liberty. While a standard retail borrower defaults on a few lakhs, an HNWI default typically involves multi-crore exposures, complex corporate debt structures, personal guarantees, and promoter debt. The stakes change dramatically as banks move from simple recovery calls to aggressive litigation.
                    </p>
                    <p>
                      When liabilities exceed the 1 Crore threshold, banks activate their specialized Asset Recovery Management branches or sell the non-performing assets (NPAs) to an Asset Reconstruction Company (ARC). Additionally, regulatory and legal pressures escalate under the SARFAESI Act, 2002, where banks attempt to seize high-value collateral, and the Debt Recovery Tribunal (DRT), which initiates legal recovery proceedings.
                    </p>
                    <p>
                      The primary danger, however, lies in personal exposure. Promoter personal guarantees are frequently invoked, and banks may pursue criminal routes under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act for failed checks and auto-debits. Understanding this risk hierarchy is the first step toward reclaiming your commercial peace of mind.
                    </p>
                    <p>
                      In India's financial ecosystem, high net worth individuals often operate across multiple business entities, holding directorships, partnership stakes, and substantial equity portfolios. A single default in one corporate entity can trigger cross-collateralization and cross-default clauses in other healthy business lines. This means that a localized liquidity crunch can cascade into a systemic threat to an entire business empire, resulting in freezes on personal bank accounts and corporate assets.
                    </p>
                    <p>
                      Consequently, the negotiation strategy for an HNWI cannot be a simple request for interest waivers. It must be a comprehensive legal maneuver designed to firewall personal assets, insulate unrelated business concerns, and release promoters from binding personal guarantees that could otherwise restrict their commercial operations for decades.
                    </p>
                  </div>
                </section>

                {/* Legal Risks & Exposures Deep Dive */}
                <section id="legal-risks-deep-dive" className="scroll-mt-24">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                    Legal Risks & Exposures: DRT, SARFAESI, and Criminal Prosecutions
                  </h2>
                  <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-5 leading-relaxed">
                    <p>
                      Understanding the legal mechanisms deployed by financial institutions is critical for constructing an effective defense. For secured high-value debts, the most potent weapon in a bank's arsenal is the <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</strong>. 
                    </p>
                    <p>
                      Under Section 13(2) of the SARFAESI Act, once an account is classified as a Non-Performing Asset (NPA), the bank issues a 60-day demand notice requiring the borrower to discharge the entire liability. If the borrower fails to do so, the bank can invoke Section 13(4) to take symbolic or physical possession of the secured assets, including residential properties, commercial offices, or industrial land, and auction them to recover the outstanding dues. Challenging these notices in the <strong>Debt Recovery Tribunal (DRT)</strong> under Section 17 is a crucial legal step to delay auctions and create negotiating leverage.
                    </p>
                    <p>
                      Parallel to civil asset recovery, banks routinely initiate criminal proceedings. Under <strong>Section 138 of the Negotiable Instruments Act</strong>, any dishonored check issued for debt discharge constitutes a criminal offense, punishable by up to two years of imprisonment or a fine of up to twice the check amount. Similarly, failed electronic mandates trigger prosecutions under <strong>Section 25 of the Payment and Settlement Systems Act</strong>. Banks also leverage sections of the Indian Penal Code (IPC), such as Section 406 (Criminal Breach of Trust) and Section 420 (Cheating), to apply psychological pressure.
                    </p>
                    <p>
                      For high net worth individuals, the risk extends to corporate disqualification and travel restrictions. If a bank classifies a promoter or director as a <strong>Wilful Defaulter</strong> under RBI guidelines, the consequences are severe. Under Section 164(2) of the Companies Act, 2013, a director of a company that has defaulted on debentures or loan repayments may face direct disqualification from board positions across all registered companies. Furthermore, public sector banks are empowered to request the Ministry of Home Affairs to issue <strong>Look Out Circulars (LOCs)</strong>, preventing the default-associated individual from leaving India.
                    </p>
                    <p>
                      At AMA Legal Solutions, we specialize in defending HNWIs against these multifaceted legal assaults. We represent clients before the DRT, draft replies to SARFAESI notices, defend NI 138 criminal complaints, and file writ petitions in various High Courts to challenge arbitrary Look Out Circulars and Wilful Defaulter classifications. Our legal actions are designed to neutralize the bank's litigation pressure, establishing a balanced environment for structured negotiations.
                    </p>
                  </div>
                </section>

                {/* Why Standard Debt Relief Falls Short */}
                <section id="why-standard-falls-short" className="scroll-mt-24">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-b pb-2">
                    Why Standard Debt Relief Programs Fall Short for HNWIs
                  </h2>
                  <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-5 leading-relaxed">
                    <p>
                      Many debt relief programs in India are built for retail debtors struggling with credit card limits or minor personal loans. They rely on standardized negotiation templates and bulk communications. This retail approach fails entirely when applied to high net worth individuals due to the structural complexity of their assets and liabilities.
                    </p>
                    <p>
                      High-value defaults usually feature interconnected debts: personal loans, business cash credits, loans against property (LAP), and corporate guarantees. Negotiating one loan in isolation without considering the impact on co-obligors or corporate assets can lead to disastrous legal crossfires.
                    </p>
                    <p>
                      Moreover, retail agencies lack the legal standing to represent clients before tribunals or challenge SARFAESI actions. A retail debt settlement company might send automated emails to customer care, but they cannot represent you in the Debt Recovery Tribunal, file a stay petition against a property auction, or defend a criminal complaint under Section 138.
                    </p>
                    <p>
                      At AMA Legal Solutions, we approach HNWI debt through a comprehensive legal audit. We examine corporate documentation, evaluate the legal validity of personal guarantees, and build a defense strategy that aligns with the business owner's overarching commercial goals. We understand that high-value negotiations are not solved by call centers; they require senior advocates who can engage directly with the bank's executive committees and Asset Recovery Management Branches (ARMBs).
                    </p>
                    <p>
                      Furthermore, standard programs do not account for the tax and structural implications of a settlement. A multi-crore waiver can trigger massive tax liabilities under Section 28 or Section 41(1) of the Income Tax Act if not structured correctly as a capital receipt or business restructuring adjustment. Our legal and financial experts ensure that the settlement is executed in a manner that minimizes both legal risk and tax exposure.
                    </p>
                  </div>
                </section>

                {/* Legal Framework and RBI Rules */}
                <section id="legal-framework" className="scroll-mt-24">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
                    The Legal Framework: RBI Guidelines on Stressed Asset Resolution
                  </h2>
                  <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-5 leading-relaxed">
                    <p>
                      High-value debt settlement is structured strictly under the regulatory supervision of the Reserve Bank of India (RBI). In India, loan settlement is not an informal deal; it is a legally recognized mechanism governed by the RBI's Prudential Framework for Resolution of Stressed Assets.
                    </p>
                    <p>
                      Under these directives, banks have the discretion to enter into a One Time Settlement (OTS) with borrowers who are facing genuine, verifiable economic distress. The primary objective of the bank is recovery efficiency-recovering a compromised amount quickly is often preferred over spending a decade in civil litigation or DRT trials.
                    </p>
                    <p>
                      The RBI's June 2023 Circular on Framework for Compromise Settlements and Technical Write-offs further formalized this process. This landmark guideline explicitly permits banks, NBFCs, and cooperative lenders to undertake compromise settlements with borrowers classified as wilful defaulters or fraud accounts, without prejudice to any ongoing criminal proceedings. This provides a clear window for promoters to settle commercial liabilities while resolving parallel legal matters.
                    </p>
                    <p>
                      Another critical element in high-value resolutions is the role of <strong>Asset Reconstruction Companies (ARCs)</strong>. When banks fail to recover a large loan after multiple years, they often sell the debt portfolio to ARCs (such as Edelweiss ARC, Phoenix ARC, or ARCIL) at a steep discount under Section 5 of the SARFAESI Act.
                    </p>
                    <p>
                      Once a loan is transferred to an ARC, the negotiation dynamics change. ARCs are commercial asset management companies driven by cash flows and recovery velocity. Since they purchase the debt at a discount, they possess far greater flexibility in restructuring the repayment terms or accepting a lower compromise payment compared to public sector banks. We maintain senior-level relations with all major ARCs in India, enabling us to negotiate highly favorable terms for our clients once their debt is sold.
                    </p>
                  </div>
                </section>

                {/* Strategic Step-by-Step Settlement Process */}
                <section id="step-by-step" className="scroll-mt-24">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
                    The Strategic Step-by-Step Settlement Process for HNWIs
                  </h2>
                  <div className="space-y-10">
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:rotate-6 transition-transform">01</div>
                      <div className="pt-1.5">
                        <h3 className="text-base font-bold mb-3 text-gray-900">Comprehensive Liability Audit</h3>
                        <p className="text-gray-600">
                          We conduct an in-depth audit of all outstanding liabilities, personal guarantees, and corporate exposures. We verify the assets pledged as security, examine the bank's valuations, and identify legal gaps in the loan agreements. This provides the exact coordinates of our negotiating leverage.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:rotate-6 transition-transform">02</div>
                      <div className="pt-1.5">
                        <h3 className="text-base font-bold mb-3 text-gray-900">Formal Legal Representation</h3>
                        <p className="text-gray-600">
                          We formally notify the lenders, their recovery departments, and legal teams that AMA Legal Solutions is representing your interests. A cease-and-desist notice is issued to ensure all recovery agents redirect their communications to our law offices. This halts direct intimidation, allowing for professional dialogue.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:rotate-6 transition-transform">03</div>
                      <div className="pt-1.5">
                        <h3 className="text-base font-bold mb-3 text-gray-900">High-Level Negotiations</h3>
                        <p className="text-gray-600">
                          We engage directly with senior credit risk committees, asset recovery management branches, and ARC acquisition heads. Unlike retail debt, high-value settlement negotiations are technical exercises based on collateral valuation, legal loopholes, and recovery timeline analysis. We present a legally backed financial restructuring proposal.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:rotate-6 transition-transform">04</div>
                      <div className="pt-1.5">
                        <h3 className="text-base font-bold mb-3 text-gray-900">OTS Letter Verification</h3>
                        <p className="text-gray-600">
                          Once terms are agreed, the lender issues a formal One Time Settlement (OTS) letter. We perform a detailed review of this document to eliminate hidden clauses, verify the waiver percentages, ensure the release of all personal and corporate guarantees, and check the timeline for release of title deeds.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-xl flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:rotate-6 transition-transform">05</div>
                      <div className="pt-1.5">
                        <h3 className="text-base font-bold mb-3 text-gray-900">Execution and No Dues Certificate</h3>
                        <p className="text-gray-600">
                          After structured payments are completed, we secure the original No Dues Certificate (NDC) from the bank. We oversee the release and return of all physical property documents, shares, and post-dated checks. Finally, we coordinate the formal withdrawal of all pending court cases, LOCs, and DRT petitions.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Markdown Table Data Points */}
                <section id="data-points" className="scroll-mt-24">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
                    Key Metrics for High-Value Loan Settlement in India
                  </h2>
                  <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-5 leading-relaxed">
                    <p>
                      To assist HNWIs in assessing their exposure, we have compiled the critical metrics, regulatory limits, and potential outcomes associated with large debt categories.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 overflow-x-auto my-8 text-xs">
                      <table className="w-full text-left border-collapse">
                        <thead className="border-b-2 border-blue-200">
                          <tr className="text-blue-900 font-black uppercase tracking-wider">
                            <th className="py-3 px-5">Metric Category</th>
                            <th className="py-3 px-5">Unsecured (Credit/PL)</th>
                            <th className="py-3 px-5">Secured Property (LAP/Home)</th>
                            <th className="py-3 px-5">Corporate / Promoter Debt</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-100 text-gray-700">
                          <tr>
                            <td className="py-3 px-5 font-bold text-gray-900">Typical Debt Range</td>
                            <td className="py-3 px-5">INR 50 Lakhs to 5+ Crores</td>
                            <td className="py-3 px-5">INR 1 Crore to 25+ Crores</td>
                            <td className="py-3 px-5">INR 5 Crores to 100+ Crores</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-5 font-bold text-gray-900">Primary Legal Risks</td>
                            <td className="py-3 px-5">Sec 138 (Cheque Bounce), Sec 25</td>
                            <td className="py-3 px-5">SARFAESI Act (Sec 13(2)/13(4))</td>
                            <td className="py-3 px-5">DRT, Insolvency (IBC), Wilful Default</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-5 font-bold text-gray-900">Settlement Waiver %</td>
                            <td className="py-3 px-5">50% to 75% on interest & principal</td>
                            <td className="py-3 px-5">25% to 45% (dependent on asset value)</td>
                            <td className="py-3 px-5">30% to 60% of total outstanding</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-5 font-bold text-gray-900">Key Focus Area</td>
                            <td className="py-3 px-5">Criminal case withdrawals</td>
                            <td className="py-3 px-5">Protecting the title deeds/auctions</td>
                            <td className="py-3 px-5">Guarantee release & travel LOC removal</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Restoring Credit Profile */}
                <section id="cibil-restoration" className="scroll-mt-24">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
                    Restoring Credit Standing and CIBIL Health Post-Settlement
                  </h2>
                  <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-5 leading-relaxed">
                    <p>
                      A One Time Settlement (OTS) results in the bank reporting the loan to the Credit Information Bureau (India) Limited (CIBIL) as 'Settled' rather than 'Closed.' For a high net worth individual, this can impact credit metrics initially and raise red flags for subsequent business expansions.
                    </p>
                    <p>
                      However, this is far superior to leaving the account as 'Defaulted' or 'Written Off,' which permanently locks you out of the banking system. Once your legal settlement is executed and your debt is zeroed, we guide you through rebuilding your credit profile:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Commercial CIBIL Correction:</strong> Ensure the bank updates the credit bureaus within 45 days of receiving the No Dues Certificate.</li>
                      <li><strong>Secured Business Lines:</strong> Re-establish borrowing history by utilizing corporate cash-backed letters of credit or overdrafts against fixed deposits.</li>
                      <li><strong>Eliminating Guarantor Tags:</strong> Confirm that co-borrower and guarantor registries reflect the full discharge of liabilities.</li>
                    </ul>
                    <p>
                      For an HNWI, CIBIL Commercial reports hold as much weight as personal credit scores. A commercial credit report documents the credit history of a business entity. When we execute an OTS, our lawyers negotiate specific reporting parameters with the bank's legal division. We work to ensure that the credit bureau reporting reflects a full release from all outstanding corporate dues, thereby minimizing the impact on your subsidiary companies.
                    </p>
                    <p>
                      Additionally, we recommend starting a structured rehabilitation program. This includes clearing any minor outstanding balances, challenging inaccurate reporting entries via the CIBIL dispute resolution cell, and establishing small, cash-collateralized borrowing limits. By exhibiting consistent repayment behavior on new credit lines, HNWIs can restore their personal credit rating back to prime status within 18 to 24 months.
                    </p>
                  </div>
                </section>

                {/* Client Testimonials Section */}
                <section id="testimonials" className="scroll-mt-24">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
                    Trusted Client Testimonials: Real Reviews from AMA Legal Solutions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((rev, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex text-[#D2A02A] mb-3 text-xs">
                            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                          </div>
                          <p className="text-gray-700 italic mb-4">"{rev.text}"</p>
                        </div>
                        <div>
                          <p className="font-extrabold text-gray-950 text-sm">{rev.name}</p>
                          <p className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">{rev.location} | {rev.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="scroll-mt-24">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6 divide-y divide-gray-100">
                    {faqs.map((faq, index) => (
                      <div key={index} className={`pt-6 ${index === 0 ? '!pt-0' : ''}`}>
                        <h3 className="text-base font-bold text-gray-950 mb-2">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6 sticky top-20 text-[12px] md:text-[13px]">
              
              {/* Call to Action Banner */}
              <div className="bg-[#1a202c] text-white p-6 rounded-xl shadow-xl space-y-4">
                <h3 className="text-lg font-black uppercase tracking-tight text-[#D2A02A]">Confidential Legal Counsel</h3>
                <p className="text-gray-300 leading-relaxed text-xs">
                  Protect your business interests, personal reputation, and commercial liberty. Our senior legal partners specialize in complex high-value OTS negotiations.
                </p>
                <div className="pt-3 border-t border-gray-700 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-sm">📞</div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">HNWI Helpline</p>
                    <p className="font-black text-xs">+91-8700343611</p>
                  </div>
                </div>
              </div>

              {/* Related Pages Sidebar */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-base font-black text-gray-900 mb-4 border-b pb-3 uppercase tracking-tighter">Useful Resources</h3>
                <ul className="space-y-3">
                  {relatedPages.map((page, idx) => (
                    <li key={idx}>
                      <Link 
                        href={page.href}
                        className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-all"
                      >
                        <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2.5 group-hover:scale-150 transition-transform"></span>
                        <span className="text-xs font-bold">{page.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Review Snippet Visualization */}
              <div className="bg-[#fff9e6] p-5 rounded-xl border border-[#ffe080]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#D2A02A] text-xs">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                  <span className="font-black text-gray-900 text-xs">4.9/5</span>
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  "AMA Legal Solutions resolved my complex corporate debt case and saved our family assets from public auction. Highly discreet services."
                </p>
                <p className="text-[9px] text-gray-500 mt-2 font-bold uppercase tracking-widest">: Samrat Basu, Kolkata</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

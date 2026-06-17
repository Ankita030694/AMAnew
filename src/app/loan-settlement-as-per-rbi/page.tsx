import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaEnvelope
} from "react-icons/fa";

export const metadata = {
  title: "Loan Settlement as per RBI Guidelines: Rules & Rights",
  description: "Struggling with loan default? Learn about loan settlement as per RBI guidelines, haircut percentages, cooling-off rules, & borrower rights under OTS.",
  keywords: "loan settlement as per rbi, rbi loan settlement guidelines, compromise settlement rbi, one time settlement rbi, npa guidelines, haircut percentage, credit score recovery, ama legal solutions",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-as-per-rbi',
  },
  openGraph: {
    title: "Loan Settlement as per RBI Guidelines: Rules & Rights",
    description: "Struggling with loan default? Learn about loan settlement as per RBI guidelines, haircut percentages, cooling-off rules, & borrower rights under OTS.",
    url: "https://www.amalegalsolutions.com/loan-settlement-as-per-rbi",
    siteName: "AMA Legal Solutions",
    images: [
      {
        url: "https://www.amalegalsolutions.com/newAssets/it_loan_settlement.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement as per RBI Guidelines",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Settlement as per RBI Guidelines: Rules & Rights",
    description: "Struggling with loan default? Learn about loan settlement as per RBI guidelines, haircut percentages, cooling-off rules, & borrower rights under OTS.",
    images: ["https://www.amalegalsolutions.com/newAssets/it_loan_settlement.png"],
    creator: "@amalegalsolutions",
    site: "@amalegalsolutions",
  },
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "rbi-legality", title: "RBI Guidelines & Legality" },
  { id: "june-circular", title: "June 2023 RBI Circular" },
  { id: "npa-threshold", title: "The 90-Day NPA Threshold" },
  { id: "haircut-percentages", title: "Waivers & Haircuts" },
  { id: "cooling-off", title: "Cooling-Off Period" },
  { id: "recovery-agents", title: "Defaulter Rights & Agents" },
  { id: "cibil-impact", title: "CIBIL Score Recovery" },
  { id: "why-ama", title: "Why Hire AMA Legal Solutions" },
  { id: "step-by-step", title: "Step-by-Step OTS Process" },
  { id: "comparison-table", title: "Debt Resolution Comparison" },
  { id: "testimonials-section", title: "Client Success Stories" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Does Loan Settlement Affect CIBIL?", href: "/does-loan-settlement-affect-cibil-score" },
  { title: "RBI New Recovery Guidelines", href: "/rbi-new-recovery-guidelines-july-2026" },
  { title: "How to Improve CIBIL Score Post-Settlement", href: "/how-to-improve-cibil-score-after-loan-settlement" },
  { title: "Personal Loan Settlement Guide", href: "/personal-loan-settlement" },
  { title: "Credit Card Settlement Process", href: "/credit-card-settlement" },
  { title: "Business Loan Settlement Guide", href: "/business-loan-settlement" },
  { title: "Legal Rights After Loan Default", href: "/legal-rights-after-loan-default" },
  { title: "What is OTS (One-Time Settlement)?", href: "/what-is-ots" },
  { title: "Can Bank Reject Settlement Request?", href: "/can-bank-reject-settlement-request" },
];

const faqs = [
  {
    question: "Is loan settlement legal as per RBI guidelines?",
    answer: "Yes, loan settlement is a fully legal mechanism recognized by the Reserve Bank of India (RBI). Under the RBI's Prudential Framework and its June 8, 2023 directive on compromise settlements, banks, NBFCs, and co-operative banks are permitted to negotiate and execute compromise settlements to resolve defaulting accounts."
  },
  {
    question: "What is the maximum waiver or haircut percentage allowed by the RBI?",
    answer: "The RBI does not specify a fixed maximum waiver or haircut percentage. Instead, it mandates that all compromise settlements must follow a Board-approved policy. In practice, depending on the borrower's hardship and asset class, lenders may offer interest and penalty waivers of 50% to 75% for unsecured debts."
  },
  {
    question: "What is the cooling-off period after a compromise settlement under RBI rules?",
    answer: "As per the RBI circular dated June 8, 2023, borrowers who undergo a compromise settlement must complete a mandatory cooling-off period of at least 12 months. During this 12-month period, regulated financial institutions are barred from extending fresh credit or new loans to the settling borrower."
  },
  {
    question: "Can willful defaulters or fraud-classified accounts settle as per RBI?",
    answer: "Yes. The RBI's June 2023 circular clarifies that regulated entities can enter into compromise settlements with borrowers classified as willful defaulters or fraud. However, this commercial compromise does not waive or stall any ongoing criminal proceedings or legal action against the defaulting entities."
  },
  {
    question: "Does the RBI permit banks to use third-party recovery agents for settlement?",
    answer: "Yes, but they must strictly comply with the RBI's Fair Practices Code. Recovery agents are legally prohibited from using threats, physical intimidation, making calls at night (outside the 8:00 AM to 7:00 PM window), contacting references, or invading the borrower's workplace privacy."
  }
];

export default function LoanSettlementAsPerRbi() {
  const breadcrumbItems = [
    { label: "Guides", href: "/articles" },
    { label: "Loan Settlement as per RBI", href: "/loan-settlement-as-per-rbi" },
  ];

  const pageUrl = "https://www.amalegalsolutions.com/loan-settlement-as-per-rbi";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.amalegalsolutions.com/articles" },
      { "@type": "ListItem", "position": 3, "name": "Loan Settlement as per RBI", "item": pageUrl }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Loan Settlement as per RBI Guidelines: Rules, Haircuts & Defaulter Rights",
    "description": "Struggling with loan default? Learn about loan settlement as per RBI guidelines, haircut percentages, cooling-off rules, and borrower rights under OTS.",
    "image": "https://www.amalegalsolutions.com/newAssets/it_loan_settlement.png",
    "author": {
      "@type": "Person",
      "name": "Anuj Anand Malik",
      "jobTitle": "Advocate",
      "worksFor": {
        "@type": "LegalService",
        "name": "AMA Legal Solutions",
        "url": "https://www.amalegalsolutions.com"
      },
      "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg"
      }
    },
    "datePublished": "2026-06-17",
    "dateModified": "2026-06-17",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "jobTitle": "Advocate",
    "worksFor": {
      "@type": "LegalService",
      "name": "AMA Legal Solutions",
      "url": "https://www.amalegalsolutions.com"
    },
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "sameAs": [
      "https://www.linkedin.com/in/iamanujmalik/"
    ]
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Negotiate a Loan Settlement under RBI Guidelines",
    "description": "Step-by-step procedure to legally negotiate, verify, and complete a One-Time Settlement with a bank or NBFC in India.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Verify NPA Classification",
        "text": "Confirm that your loan account has crossed the 90-day delinquency mark and has been officially classified as a Non-Performing Asset."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Document Financial Hardship",
        "text": "Compile authentic proofs of income loss, job termination, medical emergencies, or business failure to back your settlement proposal."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Draft and Submit OTS Proposal",
        "text": "Prepare a formal settlement proposal detailing your financial condition and submit it to the bank's compromise committee."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Verify the Official Settlement Letter",
        "text": "Thoroughly check the bank's written OTS offer for authorized signatures and ensure it states the waiver clearly before transferring funds."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Secure the No Dues Certificate",
        "text": "Transfer the settled amount and obtain a physical No Dues Certificate (NDC) to ensure the account is updated at credit bureaus."
      }
    ]
  };

  const productReviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "RBI Loan Settlement Advisory",
    "image": "https://www.amalegalsolutions.com/newAssets/it_loan_settlement.png",
    "description": "Professional legal consultation and OTS representation for retail borrowers facing loan default under RBI guidelines.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "620"
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
          "name": "Shourya Sharma"
        },
        "reviewBody": "Thanks for the legal advice provided by your team Adv.Anuj Anand Malik and the team. My case and query were resolved within no time and with personal touch they always kept me informed about my case."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Vinod Marskole"
        },
        "reviewBody": "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
      }
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="person-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="faq-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="product-review-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productReviewSchema) }}
      />

      <div className="min-h-screen bg-[#FDFCF9] text-[#30261C] font-sans selection:bg-[#D29E0D]/30">
        {/* Hero Banner */}
        <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
          ></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
                Legal Resolution Framework: <span className="text-[#D29E0D]">Loan Settlement as per RBI</span>
              </h1>
              <p className="text-base md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
                Struggling with debt defaults, mounting interest charges, or recovery agent pressure? Discover the official compromise settlement frameworks, haircut policies, and legal rights established by the Reserve Bank of India.
              </p>
              <div className="flex flex-row gap-3 justify-center items-center w-full max-w-lg mx-auto">
                <Link href="/contact" className="w-1/2">
                  <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3.5 md:py-4 px-2 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-1.5 md:gap-2 text-[12px] sm:text-sm md:text-base whitespace-nowrap">
                    <FaShieldAlt className="shrink-0" /> Settle Loans
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="w-1/2">
                  <button className="w-full bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-3.5 md:py-4 px-2 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-1.5 md:gap-2 text-[12px] sm:text-sm md:text-base whitespace-nowrap">
                    <FaWhatsapp className="shrink-0 text-green-500" /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="max-w-[1600px] mx-auto px-6 mt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Main Content Layout */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 pb-24 flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
          
          {/* Left Column - Table of Contents (Desktop Only) */}
          <aside className="lg:w-[20%] hidden lg:block sticky top-32 h-fit">
            <h4 className="text-lg font-bold mb-4 text-[#30261C] border-b pb-2 uppercase tracking-wider text-xs">On This Page</h4>
            <TableOfContents sections={sections} orientation="vertical" />
          </aside>

          {/* Middle Column - Content */}
          <main className="w-full lg:w-[55%] min-w-0">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-6 sticky top-20 z-20">
              <TableOfContents sections={sections} orientation="horizontal" />
            </div>

            <article className="prose prose-sm md:prose-lg max-w-none text-[#30261C]/90 leading-relaxed space-y-8">
              
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-24 space-y-4">
                <p className="font-semibold text-lg text-[#30261C] border-l-4 border-[#D29E0D] pl-4 py-1 bg-[#D29E0D]/5 rounded-r-lg">
                  <strong>Loan settlement as per RBI</strong> guidelines is a legal financial compromise enabling distressed borrowers to settle outstanding debts by paying a lower, negotiated lump-sum amount. Governed by the central bank's compromise frameworks, this process permits commercial banks and NBFCs to write off accumulated interest and penalties to resolve bad assets.
                </p>

                <p className="text-xl font-light leading-relaxed text-[#30261C]/80 mt-4">
                  Defaulting on a bank loan in India is a highly stressful event. Borrowers who experience unforeseen personal challenges-such as job losses, business failures, or debilitating medical emergencies-often find themselves unable to meet their monthly Equated Monthly Installment (EMI) obligations. As payments are missed, simple and compound interests begin to accumulate alongside heavy late payment penalties, creating a spiraling debt trap.
                </p>
                <p>
                  To manage such situations, the Reserve Bank of India (RBI) has laid down clear legal parameters allowing financial institutions to execute compromise settlements. These rules protect the rights of borrowers while allowing banks to resolve accounts that have turned into bad debt. Navigating these central bank directives independently can be a highly technical and demanding process. 
                </p>
                <p>
                  At <strong>AMA Legal Solutions</strong>, led by Advocate Anuj Anand Malik, we leverage these official regulatory frameworks to represent borrowers. We protect families from unlawful recovery harassment, check the validity of compromise letters, and negotiate directly with bank compromise committees to secure significant waivers. This exhaustive guide provides a comprehensive analysis of loan settlement as per RBI guidelines.
                </p>

                <div className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                  <Image 
                    src="/newAssets/it_loan_settlement.png" 
                    alt="Legal experts at AMA Legal Solutions discussing loan settlement rules as per RBI guidelines" 
                    width={800} 
                    height={500} 
                    className="w-full h-auto object-cover rounded-xl"
                    priority
                  />
                  <p className="text-xs text-center text-gray-500 mt-2 italic">Figure 1: Legal team at AMA Legal Solutions auditing loan agreements and proposing compromise terms under RBI frameworks.</p>
                </div>
              </section>

              {/* Section 1 */}
              <section id="rbi-legality" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Is Loan Settlement Legal? What the RBI Directives Say
                </h2>
                <p>
                  A common misconception among borrowers is that settling a loan is an illegal bypass or a loophole. On the contrary, loan settlement is a fully recognized and legal debt resolution mechanism within the Indian banking ecosystem, actively encouraged by the RBI to maintain financial stability.
                </p>
                <p>
                  The central bank mandates that every commercial bank, cooperative bank, and Non-Banking Financial Company (NBFC) must formulate a robust **Board-approved policy** for the resolution of stressed assets. Under these board-approved policies, lenders are given the discretionary commercial authority to negotiate compromises with defaulting borrowers. Instead of spending years pursuing expensive civil litigation or executing distress asset sales, lenders are permitted to write off a portion of their dues and close the account under a One-Time Settlement (OTS).
                </p>
                <p>
                  This commercial compromise is governed by the principles of the Indian Contract Act, 1872. Once the lender and the borrower sign a mutual OTS agreement, it represents a legally binding contract. The borrower is discharged from all remaining liabilities upon the successful transfer of the agreed-upon settlement amount, and the lender is legally required to withdraw any pending litigation or recovery notices.
                </p>
              </section>

              {/* Section 2 */}
              <section id="june-circular" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  The June 8, 2023 RBI Circular on Compromise Settlements
                </h2>
                <p>
                  On June 8, 2023, the RBI issued a historic circular titled **"Framework for Compromise Settlements and Technical Write-offs."** This regulatory framework was designed to streamline the recovery process across all regulated entities and resolve long-standing ambiguities.
                </p>
                <p>
                  The June 2023 framework introduced several key regulatory updates:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Universal Coverage:</strong> The directive applies to all scheduled commercial banks, primary cooperative banks, state cooperative banks, NBFCs, and housing finance companies.</li>
                  <li><strong>Defaulter Eligibility:</strong> Regulated entities are permitted to enter into compromise settlements even with accounts classified as **wilful defaulters** or those involving fraud, without prejudice to any ongoing criminal proceedings or police complaints.</li>
                  <li><strong>Mandatory Board Supervision:</strong> All compromise proposals must undergo a strict check-and-balance process, managed by internal audit committees and board-level executives, to ensure transparency and prevent arbitrary decisions.</li>
                </ul>
                <p>
                  This circular was a major win for retail borrowers. It reaffirmed that settlement is a standard commercial tool, and banks have the clear authority to negotiate, regardless of how the default has been classified.
                </p>
              </section>

              {/* Section 3 */}
              <section id="npa-threshold" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  When Can a Loan Be Settled? The 90-Day NPA Classification
                </h2>
                <p>
                  Borrowers often ask whether they can walk into a bank and request a settlement after missing a single EMI. Under RBI directives, lenders cannot initiate or approve compromise settlements on standard, active loan accounts. A specific legal threshold must be met first.
                </p>
                <p>
                  Under RBI's asset classification rules, a loan account must remain in default for a continuous period of **90 days** to be classified as a **Non-Performing Asset (NPA)**. The 90-day delinquency timeline serves as the legal boundary. Once an account is classified as an NPA, the lender realizes that normal recovery is unlikely and places the account under the supervision of its recovery or compromise department.
                </p>
                <p>
                  While NPA status is a prerequisite, eligibility for an OTS is not automatic. Banks carefully evaluate:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Source of Default:</strong> Whether the borrower has suffered a genuine financial hardship (illness, business closure, layout) or is a willful defaulter choosing to withhold payments.</li>
                  <li><strong>Security Value:</strong> For secured loans, banks check the value of the collateral. If the collateral is hard to liquidate or involved in litigation, they are far more likely to settle.</li>
                  <li><strong>Legal Recovery Prospects:</strong> Lenders compute the cost and time required to pursue legal remedies (such as civil suits or arbitration) versus accepting a lump-sum OTS.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="haircut-percentages" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Understanding Haircut Percentages and Waiver Limits
                </h2>
                <p>
                  In banking terminology, the portion of the outstanding debt that the lender agrees to waive or write off is referred to as the **"haircut percentage."** The remaining balance that the borrower must pay is the settlement amount.
                </p>
                <p>
                  The RBI does not enforce a rigid minimum or maximum haircut. Every financial institution determines its haircut margins based on internal risk models, course of default, and asset categories.
                </p>
                <h3 className="text-xl font-semibold text-[#D29E0D] mt-6">Unsecured Loans (Personal Loans & Credit Cards)</h3>
                <p>
                  Because unsecured loans lack physical collateral, lenders face a total loss in the event of insolvency. Consequently, haircut percentages for unsecured loans are high, ranging between **50% and 75%** of the total outstanding dues (including principal, interest, and late fees). In extreme hardship cases, banks may settle for even less, focusing primarily on recovering a small fraction of the principal.
                </p>
                <h3 className="text-xl font-semibold text-[#D29E0D]">Secured Loans (Home Loans & Business Loans)</h3>
                <p>
                  Settling secured loans is considerably more complex because the lender has the legal right to seize and auction the collateral under the **SARFAESI Act, 2002**. However, executing an auction requires significant administrative costs, legal clearances, and time. If a borrower has strong legal defense or if the property is difficult to sell, banks will accept a compromise. Haircuts on secured debts are lower, typically ranging from **20% to 40%**, prioritizing the recovery of the complete principal amount.
                </p>
              </section>

              {/* Section 5 */}
              <section id="cooling-off" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  The Mandatory 12-Month Cooling-Off Period
                </h2>
                <p>
                  While compromise settlements offer immediate relief from debt traps, they carry regulatory consequences designed to prevent moral hazard. The most significant consequence introduced by the June 2023 RBI framework is the **cooling-off period**.
                </p>
                <p>
                  Under the RBI directive, any borrower who executes a compromise settlement with a regulated lender must undergo a **mandatory cooling-off period of at least 12 months**. During this one-year period:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The borrower is legally barred from receiving any fresh credit facilities, credit cards, or loans from any regulated bank or NBFC in India.</li>
                  <li>Lenders cannot approve new credit lines, even if the borrower's financial situation has fully recovered.</li>
                  <li>For farm credit or crop loans, the cooling-off period and eligibility terms are governed by separate board-approved rules.</li>
                </ul>
                <p>
                  This cooling-off window makes it critical for borrowers to plan their finances carefully. You must ensure you have sufficient liquidity to manage your expenses during this credit-free year.
                </p>
              </section>

              {/* Section 6 */}
              <section id="recovery-agents" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  RBI Fair Practices Code: Rights Against Recovery Agents
                </h2>
                <p>
                  One of the most challenging aspects of defaulting on a loan is dealing with third-party debt collection agencies. The RBI has established strict consumer protection rules under its Fair Practices Code to halt predatory recovery practices.
                </p>
                <p>
                  Under RBI's directives, borrowers possess fundamental rights that lenders and their agents must respect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Restricted Calling Hours:</strong> Recovery agents are legally permitted to call or visit you only between **8:00 AM and 7:00 PM**. Calls or visits outside these hours violate RBI guidelines.</li>
                  <li><strong>Right to Privacy:</strong> Agents cannot contact your relatives, neighbors, friends, or co-workers to disclose your debt. They are strictly prohibited from visiting your workplace unless authorized.</li>
                  <li><strong>No Harassment or Intimidation:</strong> The RBI maintains a zero-tolerance policy for verbal abuse, threats of physical harm, or psychological pressure. Agents cannot send fake legal notices or pretend to be court officers.</li>
                  <li><strong>Direct Communication via Counsel:</strong> If you are represented by a legal advocate, you have the right to request that all recovery communications be directed to your attorney's office.</li>
                </ul>
                <p>
                  If a recovery agent violates these guidelines, you have the right to file an official complaint with the bank's Nodal Officer, escalate it to the RBI Ombudsman, or take legal action through a law firm like AMA Legal Solutions.
                </p>
              </section>

              {/* Section 7 */}
              <section id="cibil-impact" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  CIBIL Score Impact and Rebuilding Your Credit
                </h2>
                <p>
                  Executing an OTS has a direct impact on your credit profile. Once a settlement is completed, the lender is required to report the status of the account to credit bureaus (such as CIBIL, Experian, and Equifax).
                </p>
                <p>
                  Instead of marking the account as "Closed" (which indicates full payment as per original terms), the bank will report the account status as **"Settled"**. 
                </p>
                <p>
                  The "Settled" status remains on your credit history for up to **seven years**. It indicates to future lenders that you defaulted on your initial agreement, leading to a drop in your credit score and making it difficult to secure unsecured credit. However, a "Settled" status is far better than an active "Default" or "Written-Off" tag, which represents an open legal liability.
                </p>
                <h3 className="text-xl font-semibold text-[#D29E0D] mt-6">Rebuilding Your Credit Score</h3>
                <p>
                  A "Settled" tag is not a lifetime sentence. You can restore your credit health through disciplined steps:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Secure a FD-Backed Credit Card:</strong> Since standard credit card applications will be rejected, secure a card against a Fixed Deposit (FD). Paying the bill in full each month demonstrates credit discipline and builds a fresh repayment history.</li>
                  <li><strong>Keep Utilization Low:</strong> Maintain your credit utilization ratio below 30% of the card's limit to show credit stability.</li>
                  <li><strong>Ensure Correct Reporting:</strong> Verify that the bank updates the credit bureaus to show the account balance as zero. If the report shows an active balance post-settlement, you must raise a dispute immediately.</li>
                  <li><strong>Convert to 'Closed' Later:</strong> If your financial situation improves, you can pay the bank the remaining waived amount (the haircut) to obtain a clean No Dues Certificate and update the status from 'Settled' to 'Closed'.</li>
                </ol>
              </section>

              {/* Section 8 */}
              <section id="why-ama" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Why Choose AMA Legal Solutions for RBI-Compliant Loan Settlement
                </h2>
                <p>
                  Settling a loan with a major financial institution requires deep knowledge of banking laws and negotiation tactics. Approaching the bank without legal counsel often leads to sub-optimal waiver offers or falling victim to fraudulent settlement schemes.
                </p>
                <p>
                  At <strong>AMA Legal Solutions</strong>, we offer comprehensive debt resolution services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Stop Recovery Harassment:</strong> We send a formal legal notice to the lender upon engagement, advising them that you have retained legal counsel and directing all recovery agent communications to our office.</li>
                  <li><strong>Verification of Settlement Offers:</strong> Fake OTS letters issued by third-party collection agencies are a major risk. Our team verifies every settlement offer directly with the bank's internal nodal officers before you make any payment.</li>
                  <li><strong>Negotiating Maximum Haircuts:</strong> We build a strong hardship file backed by legal documentation, representing your case directly to the bank's compromise committees to secure the highest possible waivers.</li>
                  <li><strong>Enforcing Legal Compliance:</strong> We ensure that your settlement agreement is drafted under the Indian Contract Act, releasing you and any co-borrowers from all future civil or criminal liabilities.</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section id="step-by-step" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  The Step-by-Step RBI Compromise Settlement Process
                </h2>
                <p>
                  A structured, legally compliant negotiation process is key to ensuring the bank accepts your settlement terms and issues a clean account closure.
                </p>

                <h3 className="text-xl font-semibold text-[#D29E0D] mt-6">Step 1: Thorough Account and Interest Auditing</h3>
                <p>
                  Before initiating discussions, our legal team audits your loan history to calculate the exact principal and interest components. This audit ensures the bank has not added unauthorized charges or violated interest rules.
                </p>

                <h3 className="text-xl font-semibold text-[#D29E0D]">Step 2: Preparing a Hardship Proposal File</h3>
                <p>
                  We draft a formal OTS proposal, compiling documentation that proves your genuine financial hardship. This file includes job termination letters, salary slips, medical records, or bank statements showing zero income.
                </p>

                <h3 className="text-xl font-semibold text-[#D29E0D]">Step 3: Bilateral Negotiations with the Lender</h3>
                <p>
                  We submit the proposal to the bank's recovery department or compromise committee. Our advocates handle all negotiation rounds to secure the maximum waiver on the outstanding dues.
                </p>

                <h3 className="text-xl font-semibold text-[#D29E0D]">Step 4: Securing the Written OTS Letter and NDC</h3>
                <p>
                  Once terms are agreed, the bank must issue an official, signed One-Time Settlement (OTS) letter. We review this document to confirm the payment schedule and waiver terms. After you make the payment, we follow up to secure the physical No Dues Certificate (NDC).
                </p>
              </section>

              {/* Section 10 */}
              <section id="comparison-table" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Comparison of Debt Relief Options Under RBI Guidelines
                </h2>
                <p>
                  Understanding the differences between various debt relief options is essential to choosing the right approach for your financial situation.
                </p>
                <div className="my-8 overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#30261C]">Resolution Option</th>
                        <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#30261C]">RBI Framework / Legality</th>
                        <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#30261C]">Primary Benefit</th>
                        <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#30261C]">CIBIL Reporting</th>
                        <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#30261C]">Credit Score Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2 font-semibold">Repayment Tenure Extension</td>
                        <td className="border border-gray-200 px-4 py-2">RBI Prudential Framework</td>
                        <td className="border border-gray-200 px-4 py-2">Extends tenure up to 15 years to lower monthly EMIs.</td>
                        <td className="border border-gray-200 px-4 py-2">"Restructured" or "Active"</td>
                        <td className="border border-gray-200 px-4 py-2 text-yellow-600">Minor drop</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-200 px-4 py-2 font-semibold">One-Time Settlement (OTS)</td>
                        <td className="border border-gray-200 px-4 py-2">RBI June 8, 2023 Circular</td>
                        <td className="border border-gray-200 px-4 py-2">Waives 50% to 75% of total outstanding dues.</td>
                        <td className="border border-gray-200 px-4 py-2">"Settled" (Zero Balance)</td>
                        <td className="border border-gray-200 px-4 py-2 text-red-600">Significant drop</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2 font-semibold">Technical Write-off</td>
                        <td className="border border-gray-200 px-4 py-2">RBI Compromise Framework</td>
                        <td className="border border-gray-200 px-4 py-2">Lender moves debt to write-off ledger for tax purposes.</td>
                        <td className="border border-gray-200 px-4 py-2">"Written Off"</td>
                        <td className="border border-gray-200 px-4 py-2 text-red-600">Severe drop</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 11: Testimonials Section */}
              <section id="testimonials-section" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Testimonials: Verified Client Reviews
                </h2>
                <p>
                  Read feedback from clients who resolved their debt obligations under RBI guidelines with the help of AMA Legal Solutions:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Testimonial 1 */}
                  <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                    <p className="text-sm italic text-[#30261C]/80">
                      "Thanks for the legal advice provided by your team Adv.Anuj Anand Malik and the team. My case and query were resolved within no time and with personal touch they always kept me informed about my case."
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-bold text-[#30261C]">Shourya Sharma</h4>
                      <p className="text-xs text-[#D29E0D]">Verified Client Review</p>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                    <p className="text-sm italic text-[#30261C]/80">
                      "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-bold text-[#30261C]">Vinod Marskole</h4>
                      <p className="text-xs text-[#D29E0D]">Verified Client Review</p>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                    <p className="text-sm italic text-[#30261C]/80">
                      "The AMA service is very good. Ms. Shruthi madam and Ms. Kritima are giving good advice and explaining things very clearly. They are also checking on the situation daily."
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-bold text-[#30261C]">Jagadeeshwar K</h4>
                      <p className="text-xs text-[#D29E0D]">Verified Client Review</p>
                    </div>
                  </div>

                  {/* Testimonial 4 */}
                  <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                    <p className="text-sm italic text-[#30261C]/80">
                      "I had a very good experience with AMA Legal Solutions for my credit card settlement. Their team is highly professional, supportive, and transparent throughout the process. They guided me step by step and helped me close my credit card."
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="font-bold text-[#30261C]">deepak</h4>
                      <p className="text-xs text-[#D29E0D]">Verified Client Review</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" className="scroll-mt-24 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] border-b pb-3" style={{ fontFamily: "var(--font-polysans)" }}>
                  Frequently Asked Questions (FAQ)
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-bold text-[#30261C] mb-2">{faq.question}</h3>
                      <p className="text-[#30261C]/80 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

            </article>
          </main>

          {/* Right Column - Related Guides */}
          <aside className="w-full lg:w-[25%] space-y-6">
            <div className="bg-[#EBE9E4] p-6 rounded-2xl border border-gray-200">
              <h4 className="text-lg font-bold text-[#30261C] mb-4" style={{ fontFamily: "var(--font-polysans)" }}>Related Guides</h4>
              <ul className="space-y-3">
                {relatedPages.map((page, idx) => (
                  <li key={idx}>
                    <Link href={page.href} className="text-sm text-[#30261C]/80 hover:text-[#D29E0D] transition-colors flex items-start gap-2">
                      <span className="text-[#D29E0D] font-bold mt-0.5">•</span>
                      <span>{page.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#30261C] text-white p-6 rounded-2xl text-center space-y-4">
              <h4 className="text-lg font-bold" style={{ fontFamily: "var(--font-polysans)" }}>Facing Loan Default?</h4>
              <p className="text-xs text-white/70">
                Are recovery agents harassing your family or calling your workplace? Consult with Adv. Anuj Anand Malik for professional legal assistance.
              </p>
              <div className="space-y-2 pt-2">
                <a href="tel:+918700343611" className="block w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-2.5 rounded-full text-sm transition-colors">
                  Call: +91-8700343611
                </a>
                <a href="mailto:notify@amalegalsolutions.com" className="block w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-full text-xs transition-colors">
                  Email Support
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}

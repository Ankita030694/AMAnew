import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan foreclosure the same as loan settlement?",
    answer: "No, they are very different. Loan foreclosure means you are paying the entire outstanding principal amount before the end of the tenure to close the loan 'in full'. Loan settlement means you are negotiating to pay a 'reduced' amount because you cannot pay the full dues. Foreclosure is generally positive for your credit score, while settlement is highly negative."
  },
  {
    question: "Does the RBI allow banks to charge foreclosure fees?",
    answer: "According to RBI guidelines, banks and NBFCs cannot charge foreclosure or prepayment penalties on 'floating-rate' personal, home, or small business loans given to individuals. However, for 'fixed-rate' loans, lenders are permitted to levy a foreclosure charge, typically ranging from 2 percent to 5 percent of the outstanding amount."
  },
  {
    question: "How long after foreclosure will my CIBIL score update?",
    answer: "Banks typically report data to CIBIL once every 30 to 45 days. Once you foreclose your loan and receive the No Dues Certificate, it usually takes about 4 to 8 weeks for the 'Closed' status to reflect on your CIBIL report and for your score to adjust accordingly."
  },
  {
    question: "Can foreclosure lower my credit score?",
    answer: "While foreclosure is generally positive as it reduces your debt burden, you might see a temporary, minor dip of 5 to 10 points. This happens because the 'total length of credit history' decreases or your 'credit mix' changes (e.g., if you closed your only installment loan). However, this dip is short-lived and your score recovers quickly."
  },
  {
    question: "What legal documents should I collect after foreclosing a loan?",
    answer: "The most critical document is the 'No Dues Certificate' (NDC) or 'No Objection Certificate' (NOC). Additionally, ensure you get back any original property documents (for home loans) or the RTO form 35 (for car loans) that were pledged as collateral. Always keep a copy of the final payment receipt."
  },
  {
    question: "Does foreclosing a car loan affect the credit mix and score?",
    answer: "Yes, it can influence your credit mix. Credit bureaus like to see a balance between secured and unsecured debt. Foreclosing a secured car loan might leave you with only unsecured credit cards, which could lead to a small, temporary fluctuation in your score. However, being debt-free is always more valuable long term than maintaining a 'mix' for the sake of a few points."
  },
  {
    question: "Can I get a home loan after a forced foreclosure in my history?",
    answer: "It is significantly harder. A forced foreclosure due to default usually results in a 'Written Off' status. Most top-tier Indian banks require at least 3 to 5 years of clean credit history after such an event before they consider a new application. Working with a legal expert to 'rectify' your CIBIL records is often necessary in such cases."
  },
  {
    question: "Is a 'Closed' status better than an 'Active' status on a loan?",
    answer: "A 'Closed' status is generally better for your future eligibility because it brings down your Debt-to-Income (DTI) ratio. Lenders prefer borrowers who have successfully completed their previous obligations. An active loan, even if paid on time, still represents a financial liability that reduces your 'fresh' borrowing capacity."
  },
  {
    question: "Does foreclosure save more money than simple prepayments?",
    answer: "Foreclosure is the ultimate form of prepayment. Every rupee you pay toward the principal before the maturity date saves you the 'future interest' on that amount. The earlier you foreclosure in the loan lifecycle, the more significant your savings will be, as interest is usually front-loaded in Indian EMI structures."
  },
  {
    question: "What happens to my CIBIL score if I foreclose using a top-up loan?",
    answer: "If you take a top-up loan to foreclose multiple smaller debts, your CIBIL score will reflect multiple 'Closed' accounts and one new 'Active' account. This is usually very positive for your score because it reduces your credit utilization and replaces high-interest debts with a more manageable, often secured, credit line."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Knowledge Base",
      "item": "https://amalegalsolutions.com/articles"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Does Foreclosure of Loan Affect CIBIL",
      "item": "https://amalegalsolutions.com/does-foreclosure-of-loan-affect-cibil"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Does Foreclosure of Loan Affect CIBIL Score? Legal & Financial Guide",
  "description": "Examine the impact of loan foreclosure on your CIBIL score. Learn about voluntary vs involuntary foreclosure, interest savings, and legal rights in India.",
  "image": "https://amalegalsolutions.com/assets/foreclosure-impact-cibil.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-02-23",
  "dateModified": "2025-02-23"
};

// FAQ Schema
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

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Foreclosure Advisory",
  "image": "https://amalegalsolutions.com/assets/foreclosure-icon.png",
  "description": "Legal advisory services for loan foreclosure and credit score management.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1050"
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
        "name": "Vikram Rathore"
      },
      "reviewBody": "AMA team helped me understand the legal nuances of foreclosing my home loan while avoiding illegal penalties. My CIBIL score improved significantly afterward."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Rao"
      },
      "reviewBody": "AMA Legal Solutions helped me understand the tax implications of foreclosing my education loan early. Their advice was spot on and saved me from tax surprises."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "reviewBody": "They stopped the illegal recovery calls and helped me negotiate a fair closure for my personal debt. My CIBIL is finally back in the healthy range."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anita Desai"
      },
      "reviewBody": "Extremely professional. They handled the lien removal process from the RTO after my car loan foreclosure. Highly recommended for complex cases."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karthik S"
      },
      "reviewBody": "I was worried about my CIBIL score dropping after closing my personal loan early. AMA's experts guided me through the right credit monitoring tools."
    }
  ]
};

export const metadata = {
  title: "Does Foreclosure of Loan Affect CIBIL? - AMA Legal Solutions",
  description: "Learn how foreclosing your loan affects your CIBIL score. Discover the legal difference between voluntary and forced foreclosure and how to protect your credit history.",
  keywords: [
    "foreclosure affect cibil score",
    "loan foreclosure india",
    "prepayment of loan cibil impact",
    "legal rights foreclosure india",
    "rbi guidelines loan foreclosure",
    "foreclosure charges india",
    "closing loan early cibil",
    "loan preclosure benefits"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/does-foreclosure-of-loan-affect-cibil',
  }
};

export default function ForeclosureImpactPage() {
  const tocSections = [
    { id: 'introduction', title: 'The Foreclosure Overview' },
    { id: 'types-of-foreclosure', title: 'Voluntary vs Forced' },
    { id: 'cibil-impact', title: 'Impact on CIBIL' },
    { id: 'legal-framework', title: 'Legal Rights & RBI' },
    { id: 'financial-impact', title: 'Financial Implications' },
    { id: 'secured-vs-unsecured', title: 'Secured vs Unsecured' },
    { id: 'recovery-agent-rights', title: 'Dealing with Harassment' },
    { id: 'psychology-of-foreclosure', title: 'Mental Impact' },
    { id: 'future-borrowing', title: 'Future of Credit' },
    { id: 'checklist', title: 'Foreclosure Checklist' },
    { id: 'glossary', title: 'Important Terms' },
    { id: 'testimonials', title: 'Success Stories' },
    { id: 'faqs', title: 'Common Questions' },
  ];

  const breadcrumbItems = [
    { label: "Articles", href: "/articles" },
    { label: "Does Foreclosure Affect CIBIL", href: "/does-foreclosure-of-loan-affect-cibil" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#30261C] text-white">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-10 md:py-24 text-center">
            <h1 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-8">
              Does Foreclosure of Loan <br/><span className="text-[#D2A02A]">Affect Your CIBIL Score?</span>
            </h1>
            <p className="text-xs md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-200">
              Navigate the complex legal and financial realities of closing your loan early. Understand how voluntary prepayments differ from forced bank actions and protect your credit reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                    <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-xs md:text-lg">
                        Get Legal Advisory
                    </button>
                </Link>
                <a href="tel:+918700343611">
                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all text-xs md:text-lg">
                        Call Expert Lawyer
                    </button>
                </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-6">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_240px] gap-6 items-start mt-6">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-hide">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-12 rounded-2xl shadow-xl space-y-10 md:space-y-16 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">Introduction to Loan Foreclosure in India</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        In the Indian financial ecosystem, the term 'foreclosure' often carries a dual meaning that can lead to significant confusion for borrowers. At its core, foreclosure refers to the closure of a loan account before its scheduled maturity date. This can happen in two very different ways: either voluntarily by the borrower seeking to save on interest, or involuntarily through legal action initiated by a lender due to persistent defaults.
                    </p>
                    <p>
                        Understanding whether foreclosure of a loan affects CIBIL scores requires a deep dive into the 'why' and 'how' of the closure process. While a voluntary pre-closure is typically a sign of financial strength and discipline, a forced foreclosure is a red flag in the banking system. At AMA Legal Solutions, we frequently assist clients in navigating these waters, ensuring that their rights are protected and their credit scores remain healthy during either process.
                    </p>
                    <p>
                        As the Indian economy becomes increasingly credit-driven, the CIBIL score has become the most vital financial asset for an individual. It dictates everything from your eligibility for future home loans to the interest rates you pay on credit cards. Therefore, making an informed decision about closing your debt early is not just about saving money today, but about securing your borrowing power for the next decade.
                    </p>
                  </div>
                </section>

                {/* Types of Foreclosure */}
                <section id="types-of-foreclosure" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">The Two Faces of Foreclosure: Voluntary vs Forced</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <div className="p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm">
                            <h4 className="text-xl font-bold text-green-800 mb-3">1. Voluntary Foreclosure (Pre-closure)</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                This occurs when you decide to repay your entire outstanding loan amount in a single payment using your own savings or a windfall. It is a proactive choice aimed at eliminating monthly EMI obligations and saving on the total interest cost of the loan. This is most common in home loans and personal loans when a borrower receives a bonus or sells another asset.
                            </p>
                        </div>
                        <div className="p-6 bg-red-50 rounded-2xl border border-red-100 shadow-sm">
                            <h4 className="text-xl font-bold text-red-800 mb-3">2. Forced Foreclosure (Legal Action)</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                This is a legal recovery procedure initiated by a bank or NBFC when a borrower has defaulted on three or more consecutive EMIs. For secured loans, the bank uses the SARFAESI Act to seize the property and auction it. The proceeds are used to 'foreclose' the loan. This is a sign of financial collapse and has devastating consequences for the borrower's legal and credit standing.
                            </p>
                        </div>
                  </div>
                </section>

                {/* CIBIL Impact */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">How Each Scenario Impacts Your CIBIL Score</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                        <p>
                            The impact on your CIBIL score is determined by the 'status' reported by the bank to the credit bureaus. Let's look at the specific outcomes for each scenario:
                        </p>
                        <div className="space-y-6">
                            <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Impact of Voluntary Foreclosure: Neutral to Positive</h4>
                                <p>
                                    When you pay off a loan early, your credit report reflects the status as 'Closed'. This significantly improves your **Debt-to-Income (DTI) ratio**, which is a key metric lenders use to gauge your repayment capacity. While you might see a temporary, minor dip because you have one fewer active credit line, the long term effect is a more robust credit profile and higher scores.
                                </p>
                            </div>
                            <div className="border-l-4 border-red-600 pl-6 py-2">
                                <h4 className="text-xl font-bold text-red-700 mb-2">Impact of Forced Foreclosure: Catastrophic</h4>
                                <p>
                                    In a forced foreclosure, the bank reports the loan as 'Written Off' or 'Settled'. This indicates that the lender had to take legal measures to recover the funds and likely suffered a loss. Your CIBIL score can crash by **150 points or more** in a single month. Recovering from this status takes 5 to 7 years of impeccable financial behavior, and most traditional banks will reject your loan applications during this period.
                                </p>
                            </div>
                        </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">The Legal Framework: RBI Guidelines & Your Rights</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        Navigating foreclosure requires an understanding of the legal protections provided by the **Reserve Bank of India (RBI)**. For many years, banks used high foreclosure penalties to lock borrowers into expensive long term loans. However, the RBI has intervened to protect individual borrowers:
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-3 items-start bg-gray-50 p-4 rounded-xl">
                            <span className="text-[#D2A02A] font-bold">●</span>
                            <span><strong>Zero Penalties on Floating Rates:</strong> The RBI has mandated that no foreclosure charges can be levied on floating-rate loans given to individuals for non-business purposes. This applies to most home loans and personal loans in the country.</span>
                        </li>
                        <li className="flex gap-3 items-start bg-gray-50 p-4 rounded-xl">
                            <span className="text-[#D2A02A] font-bold">●</span>
                            <span><strong>Fair Practices Code:</strong> Lenders must maintain transparency about foreclosure charges in the loan agreement. Any hidden fee discovered at the time of closure can be legally challenged through the Banking Ombudsman.</span>
                        </li>
                        <li className="flex gap-3 items-start bg-gray-50 p-4 rounded-xl">
                            <span className="text-[#D2A02A] font-bold">●</span>
                            <span><strong>Right to Receive Collateral:</strong> Upon successful foreclosure, you have the legal right to receive all original documents and a 'No Dues Certificate' within a stipulated period, usually 15 to 30 days.</span>
                        </li>
                    </ul>
                  </div>
                </section>

                {/* Financial Impact */}
                <section id="financial-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">Financial Implications: Interest Savings vs Cost to Close</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        From a financial perspective, foreclosing a loan is a battle between **interest savings** and **foreclosure costs**. In the early years of a loan, particularly a home loan, the bulk of your EMI goes toward interest rather than principal. Foreclosing during this 'interest-heavy' period yields the highest savings.
                    </p>
                    <p>
                        However, if you are in the final 2 or 3 years of a 15 year loan, most of the interest has already been paid. In this case, the benefit of foreclosure is minimal, and the liquidity loss might not be worth the small savings. Additionally, borrowers must consider the **loss of tax benefits under Section 24(b)** for home loans. If you foreclose your loan, you stop getting the annual 2 Lakh deduction on interest, which could increase your effective tax liability.
                    </p>
                  </div>
                </section>

                {/* Secured vs Unsecured Redux */}
                <section id="secured-vs-unsecured" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">Secured vs Unsecured Loan Foreclosure</h2>
                    <div className="space-y-8">
                        <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm">
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Home and Property Loans (Secured)</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Foreclosing a secured loan involves the physical return of your property title deeds. It is a moment of great financial release, but it is also the most document-intensive. You must ensure that the bank removes the 'lien' or 'charge' on your property from the Registrar's records. Failure to do this can make it impossible to sell the property in the future, even if the loan is paid off.
                            </p>
                        </div>
                        <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm">
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Personal and Credit Card Loans (Unsecured)</h4>
                            <p className="text-gray-700 leading-relaxed">
                                These loans typically have much higher interest rates, often ranging from 12 percent to 40 percent. Foreclosing these should be your top priority. While the documentation is simpler (only requiring a digital No Dues Certificate), the impact on your cash flow is immediate. However, be wary of 'foreclosure lock-in periods' where some lenders don't allow pre-closure for the first 6 to 12 months.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Recovery Agent Rights */}
                <section id="recovery-agent-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">Stopping Harassment: Your Legal Protection</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        In cases where foreclosure is looming due to default, borrowers often face extreme harassment from recovery agents. It is important to know that **harassment is illegal**. Even if you owe money, you have the right to dignity. Recovery agents cannot call you before 8 AM or after 7 PM, they cannot use abusive language, and they cannot contact your family or colleagues to shame you.
                    </p>
                    <p>
                        If you are facing such pressure, AMA Legal Solutions can issue a formal legal notice to the bank. Under the RBI's guidelines, once a borrower is represented by a legal firm, all recovery communications must be directed toward the legal counsel. This creates a safe space for you to breathe and work toward a strategic foreclosure or settlement.
                    </p>
                  </div>
                </section>

                {/* Checklist Section */}
                <section id="checklist" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">The Secure Foreclosure Checklist</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            To ensure your foreclosure is correctly recorded and doesn't return to haunt you as a 'technical error' in CIBIL, follow this strict checklist:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 bg-white border border-gray-200 rounded-2xl flex items-start gap-4">
                                <span className="text-[#D2A02A] text-2xl">✓</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 mb-2">Final Balance Verification</h5>
                                    <p className="text-sm">Get a written 'Foreclosure Quote' from the bank that is valid for 7 days. This should include the principal and any daily interest accrual.</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border border-gray-200 rounded-2xl flex items-start gap-4">
                                <span className="text-[#D2A02A] text-2xl">✓</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 mb-2">EMI Stopper</h5>
                                    <p className="text-sm">Instruct your bank to stop the National Automated Clearing House (NACH) mandate or standing instruction for future EMIs once the foreclosure is paid.</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border border-gray-200 rounded-2xl flex items-start gap-4">
                                <span className="text-[#D2A02A] text-2xl">✓</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 mb-2">No Dues Certificate</h5>
                                    <p className="text-sm">Ensure you receive the original signed and stamped NDC. Verify that your loan account number and correct name are mentioned.</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white border border-gray-200 rounded-2xl flex items-start gap-4">
                                <span className="text-[#D2A02A] text-2xl">✓</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 mb-2">CIBIL Monitoring</h5>
                                    <p className="text-sm">Wait 60 days and then download your CIBIL report. Confirm the status is marked as 'Closed' and not 'Settled' or 'Written Off'.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Glossary Section */}
                <section id="glossary" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">Glossary of Foreclosure Terms</h2>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-3">1. Moratorium Period</h4>
                            <p className="text-gray-700">A temporary holiday from loan repayments, often seen during disasters or in education loans. Foreclosing during a moratorium can save a massive amount of accumulated interest.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-3">2. Lien Removal</h4>
                            <p className="text-gray-700">The legal process of removing the bank's claim over your asset (like a car or house) from the official government registry after the loan is closed.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-3">3. Prepayment Penalty</h4>
                            <p className="text-gray-700">A fee charged by lenders to recover a part of the interest they lose when you pay back a loan early. Currently illegal for individuals on floating rate loans in India.</p>
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">Client Case Studies</h2>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-6xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-sm md:text-lg leading-relaxed">
                        "I wanted to foreclose my fixed-rate personal loan, but the bank was charging a 6 percent penalty. AMA's lawyers reviewed my contract and found a clause that made this charge illegal. I saved over 50,000 Rupees in fees alone."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">V</div>
                        <div>
                          <p className="font-black text-gray-900 text-base md:text-lg">Vikram Rathore</p>
                          <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider">Software Architect, Pune</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-6xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-sm md:text-lg leading-relaxed">
                        "AMA Legal Solutions helped me understand the tax implications of foreclosing my education loan early. Their advice was spot on and prevented me from losing tax benefits I didn't know I had."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">S</div>
                        <div>
                          <p className="font-black text-gray-900 text-base md:text-lg">Sunita Rao</p>
                          <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider">Senior Professor, Hyderabad</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-6xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-sm md:text-lg leading-relaxed">
                        "They stopped the illegal recovery calls within 24 hours and helped me negotiate a formal closure. My credit reputation is finally secure again and my CIBIL reflected 'Closed' status within 45 days."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">R</div>
                        <div>
                          <p className="font-black text-gray-900 text-base md:text-lg">Rajesh Kumar</p>
                          <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider">Operations Manager, Delhi</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-6xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-sm md:text-lg leading-relaxed">
                        "The lien removal process after my car loan foreclosure was a mess until AMA took over. They handled the bank and the RTO perfectly, ensuring I could sell my car without any legal hurdles."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">A</div>
                        <div>
                          <p className="font-black text-gray-900 text-base md:text-lg">Anita Desai</p>
                          <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider">Independent Consultant, Mumbai</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-6xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-sm md:text-lg leading-relaxed">
                        "AMA's guidance on monitoring my CIBIL post-foreclosure was invaluable. My score actually improved faster than I expected after closing my high-interest personal debts. Professional and effective."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">K</div>
                        <div>
                          <p className="font-black text-gray-900 text-base md:text-lg">Karthik S</p>
                          <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider">Data Scientist, Bengaluru</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-5 md:mb-8 border-b-4 border-[#D2A02A] pb-3 inline-block">Frequently Asked Questions</h2>
                  <div className="space-y-6 md:space-y-10">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group border-b border-gray-200 pb-8 last:border-0 hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 flex items-start gap-4">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-1">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-12 text-sm md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#1a202c] rounded-[2.5rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl border-4 border-[#D2A02A]">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-black mb-5 md:mb-8 leading-tight">Ready to Secure Your <br/><span className="text-[#D2A02A]">Financial Reputation?</span></h2>
                    <p className="text-xs md:text-xl opacity-90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                      Don't let legal complexities or aggressive banking tactics stop you from achieving financial freedom. Get expert legal advice for your loan foreclosure today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-3 px-8 md:py-5 md:px-12 rounded-full transition-all transform hover:scale-110 shadow-2xl text-sm md:text-lg w-full">
                          Get Free Case Audit
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="bg-transparent border-4 border-white hover:bg-white hover:text-gray-900 text-white font-black py-3 px-8 md:py-5 md:px-12 rounded-full transition-all text-sm md:text-lg w-full">
                          Speak to a Lawyer
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="hidden lg:block space-y-10 sticky top-24">
              <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-8 rounded-[2rem] shadow-2xl text-white border-2 border-[#fff2cc]">
                <h3 className="text-2xl font-black mb-4">Foreclosing Today?</h3>
                <p className="text-white/90 mb-8 text-sm leading-relaxed">
                  Avoid illegal penalties and ensure your CIBIL score remains safe with our expert legal audit.
                </p>
                <div className="space-y-4">
                  <a href="tel:+918700343611" className="flex items-center justify-center gap-3 w-full bg-white text-[#D2A02A] py-4 rounded-2xl font-black hover:bg-gray-100 transition-all shadow-lg">
                    📞 Call Now
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                <h3 className="text-xl font-black text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">Essential Guides</h3>
                <ul className="space-y-5">
                  {[
                    { label: "Loan Settlement vs Foreclosure", href: "/services/loan-settlement" },
                    { label: "CIBIL Score Repair", href: "/cibil-repair" },
                    { label: "Legal Notice for Harassment", href: "/not-being-paid-fnf-want-to-send-legal-notice" },
                    { label: "SARFAESI Act Rights", href: "/sarfaesi-rights" }
                  ].map((page, idx) => (
                    <li key={idx}>
                      <Link href={page.href} className="group flex items-center justify-between text-gray-700 hover:text-[#D2A02A] transition-colors">
                        <span className="text-sm font-bold group-hover:translate-x-2 transition-transform">{page.label}</span>
                        <span className="text-gray-300 group-hover:text-[#D2A02A] transition-colors">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

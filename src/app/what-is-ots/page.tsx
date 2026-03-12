import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What exactly is a One Time Settlement (OTS) for a bank loan?",
    answer: "A One Time Settlement (OTS) is a financial arrangement where a lender agrees to accept a single, reduced payment from a borrower to close a defaulted loan account. This involves the bank waiving a portion of the interest, penalties, and sometimes even a part of the principal amount. It is primarily offered to borrowers whose accounts have been classified as Non-Performing Assets (NPAs) and who are facing genuine financial hardship that prevents them from repaying the full debt."
  },
  {
    question: "Is OTS better than a regular loan settlement?",
    answer: "The term OTS is often used interchangeably with loan settlement, but it specifically refers to the scheme where the payment is made in one go or a very short, specified period. Technically, it is a formal compromise where the bank clean up its books while the borrower gets rid of the debt burden. From a credit perspective, both are reported as 'Settled', but OTS is usually a more structured process governed by specific bank policies or RBI guidelines."
  },
  {
    question: "Will the RBI allow a One Time Settlement for personal loans?",
    answer: "Yes, the Reserve Bank of India (RBI) allows and even encourages banks to have board-approved policies for One Time Settlements to recover dues from NPAs. This applies to personal loans, business loans, and other types of credit. RBI's recent circulars have streamlined the process, ensuring that even wilful defaulters (under certain strict conditions) can be considered for compromise settlements, though the primary focus remains on honest borrowers in distress."
  },
  {
    question: "How does an OTS affect my CIBIL score in the long run?",
    answer: "Initially, an OTS will cause your CIBIL score to drop because the account is marked as 'Settled' instead of 'Closed'. This indicates that you did not pay the full outstanding amount. However, over time (usually 18 to 24 months), you can rebuild your score by maintaining flawless payment records on other credit lines or by using secured credit cards. It is a far better alternative than leaving an account as a 'Default' which permanently blocks credit access."
  },
  {
    question: "Can I apply for OTS if my case is already in the DRT or SARFAESI court?",
    answer: "Absolutely. In fact, many settlements occur while legal proceedings are ongoing in the Debt Recovery Tribunal (DRT) or under the SARFAESI Act. Banks often prefer a guaranteed settlement amount today over a long drawn legal battle that might take years. A lawyer can help you move a 'compromise petition' in court once the OTS terms are agreed upon, effectively ending the litigation."
  },
  {
    question: "What is the typical percentage of waiver I can expect in an OTS?",
    answer: "The waiver percentage varies significantly based on the bank, the type of loan, and your negotiation skills. Generally, waivers can range from 25% to 60% of the total outstanding amount. In cases where the default is very old or the borrower's financial situation is extremely dire, the waiver can be even higher. Having expert legal representation often helps in securing a better waiver as lawyers understand the bank's recovery costs."
  },
  {
    question: "Do I need to pay the entire OTS amount on the same day?",
    answer: "Ideally, the bank expects the payment immediately after the sanction of the OTS. However, most banks allow a period of 15 to 30 days for the full payment. In some cases, you can negotiate a staggered payment plan where a significant portion is paid upfront and the rest within 3 to 6 months. Failing to meet these deadlines usually renders the OTS sanction letter void."
  },
  {
    question: "Does an OTS apply to home loans or secured property loans?",
    answer: "Yes, OTS can be applied to secured loans, but it is much harder to negotiate. Since the bank has collateral (the property), they have a higher chance of recovering the full amount by selling it. You must prove that the property value has depreciated or that there are legal hurdles in liquidating the asset. For secured loans, the bank usually focuses on waiving the penal interest rather than the principal."
  },
  {
    question: "What documents are most critical for a successful OTS sanction?",
    answer: "The most critical documents are those that prove your inability to pay. This includes bank statements for the last 6 to 12 months, salary slips (if any), a letter explaining the cause of default (job loss, medical emergency, business failure), and medical reports or termination letters if applicable. You also need the latest loan account statement showing the exact outstanding breakdown."
  },
  {
    question: "Can a bank refuse my OTS application?",
    answer: "Yes, banks have the discretion to refuse an OTS if they believe the borrower has the capacity to pay or if they find discrepancies in the financial hardship claims. They may also refuse if they believe the collateral value is sufficient to cover the entire debt. This is why the initial application must be legally sound and well documented to leave no room for arbitrary rejection."
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
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "What is OTS?",
      "item": "https://www.amalegalsolutions.com/what-is-ots"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is One Time Settlement (OTS)? Comprehensive Guide to Debt Relief in India",
  "description": "Learn everything about One Time Settlement (OTS) for bank loans in India. Understand eligibility, RBI guidelines, process, and how to negotiate for maximum waiver.",
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
  "datePublished": "2024-02-10",
  "dateModified": "2024-02-10"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
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
  "name": "OTS Legal Consultancy",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal assistance for One Time Settlement (OTS) with major Indian banks.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2150"
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
        "name": "Amit Kumar"
      },
      "reviewBody": "AMA Legal Solutions helped me get an OTS from SBI for my business loan. The waiver was significant and the process was handled professionally without any stress."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Roy"
      },
      "reviewBody": "Highly recommended for debt issues. They stopped the recovery calls and negotiated an excelente OTS for my credit card dues."
    }
  ]
};

export const metadata = {
  title: "What is OTS? | Complete Guide to One Time Settlement India 2024",
  description:
    "Everything you need to know about One Time Settlement (OTS) in India. Learn the RBI rules, eligibility, process, and negotiation tips to settle your bank loans legally.",
  keywords: [
    "what is ots",
    "one time settlement india",
    "ots bank loan",
    "rbi ots guidelines 2024",
    "ots vs loan settlement",
    "npa resolution ots",
    "sbi ots scheme",
    "how to apply for ots",
    "debt settlement process india",
    "loan waiver schemes india"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/what-is-ots',
  },
};

export default function OTSPage() {
  const tocSections = [
    { id: "introduction", title: "Definition & Overview" },
    { id: "what-is-ots", title: "What is One Time Settlement?" },
    { id: "rbi-guidelines", title: "RBI Guidelines 2024" },
    { id: "eligibility", title: "Who is Eligible?" },
    { id: "sbi-ots", title: "SBI OTS Schemes" },
    { id: "bank-specific", title: "Other Major Bank OTS" },
    { id: "loan-types", title: "In-depth: Loan Categories" },
    { id: "process", title: "Step-by-Step OTS Process" },
    { id: "negotiation", title: "Negotiation Strategies" },
    { id: "documents", title: "Required Documents" },
    { id: "cibil-impact", title: "Impact on CIBIL Score" },
    { id: "pros-cons", title: "Pros and Cons" },
    { id: "legal-protection", title: "Anti-Harassment Laws" },
    { id: "psychology", title: "The Psychology of Debt" },
    { id: "myths", title: "Debunking OTS Myths" },
    { id: "case-studies", title: "Success Case Studies" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "What is OTS?", href: "/what-is-ots" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="absolute inset-0 z-0">
             {/* Simple aesthetic background without grid */}
             <div className="w-full h-full bg-gradient-to-r from-blue-900 via-black to-blue-900 opacity-50"></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-36 text-center">
            <div className="flex items-center justify-center gap-2 mb-4 bg-white/10 backdrop-blur-sm w-fit mx-auto px-4 py-1.5 rounded-full border border-white/20">
              <div className="flex text-[#D2A02A] text-sm">★★★★★</div>
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">4.9/5 Rating (2,150+ Reviews)</span>
            </div>
            <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight mt-10 tracking-tight">
              What is <span className="text-[#D2A02A]">One Time Settlement (OTS)</span>?
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-300 font-light italic">
              A complete legal and financial roadmap to understanding OTS schemes, RBI regulations, and debt resolution strategies in India for 2024.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 md:py-5 md:px-14 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-xl uppercase tracking-widest">
                Enquire for OTS Support
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-10 items-start mt-8">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28 h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-8 sticky top-20 z-30 shadow-md">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-16 rounded-3xl shadow-xl border border-gray-100 space-y-12 md:space-y-20">
                
                {/* Section 1: Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">Understanding Financial Distress and the OTS Exit Route</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the modern era of credit expansion in India, the burden of debt has become a significant reality for millions of individuals and businesses. While loans provide the necessary capital for growth, home ownership, and personal aspirations, they also carry the risk of becoming unmanageable during times of economic instability. One Time Settlement, commonly abbreviated as OTS, stands as a critical financial tool designed to resolve these situations when all other repayment avenues have reached an impasse.
                    </p>
                    <p>
                      Financial distress is rarely a choice. It is often the result of unforeseen circumstances such as a global pandemic, a sudden business downturn, a loss of primary employment, or a catastrophic medical emergency within the family. When a borrower fails to meet their EMI obligations for ninety consecutive days, the loan account is technically classified as a Non-Performing Asset or NPA. At this juncture, the relationship between the lender and the borrower shifts from transactional to one involving recovery and legal procedures.
                    </p>
                    <p>
                      This is where the concept of One Time Settlement enters the picture. It is not merely a waiver of debt but a strategic compromise between a financial institution and a borrower. Banks, being commercial entities, recognize that a prolonged legal battle to recover funds can be expensive, time consuming, and often yields uncertain results. By offering an OTS, the bank chooses to recover a guaranteed portion of the debt today rather than waiting years for a full recovery through the courts. For the borrower, it offers a definitive end to the stress of debt, the cessation of recovery agent calls, and the clearing of their legal name.
                    </p>
                    <p>
                      In this exhaustive guide, we will explore the depths of the OTS mechanism in India. We will look at how it differs from a regular settlement, the latest guidelines issued by the Reserve Bank of India, and the practical steps you can take to secure a favorable outcome for your specific case. Whether you are struggling with a personal loan, a credit card debt trap, or a business loan that has gone south, understanding what an OTS is will empower you to make informed decisions for your financial future.
                    </p>
                  </div>
                </section>

                {/* Section 2: What is One Time Settlement? */}
                <section id="what-is-ots" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">What Exactly is a One Time Settlement (OTS)?</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      At its core, a One Time Settlement is a mutual agreement where the bank agrees to settle the outstanding debt for an amount that is less than the total dues, provided the payment is made in a single lump sum or within a very short, specified timeframe. This process usually involves the bank waiving off the accrued interest, penal interest, and other charges, and in many instances, even a portion of the principal amount itself.
                    </p>
                    <div className="bg-[#fff9e6] border-l-8 border-[#D2A02A] p-8 my-10 rounded-r-2xl shadow-inner">
                       <h3 className="text-xl font-bold text-gray-900 mb-4">The Technical Definition</h3>
                       <p className="italic text-gray-800">
                          "One Time Settlement is an out of court path where the lender enters into a compromise with the borrower who has defaulted. The bank sacrifices its right to the full amount in exchange for an immediate recovery of a significant portion of the money, thereby reducing its NPA burden and saving on litigation costs."
                       </p>
                    </div>
                    <p>
                      It is important to distinguish OTS from 'Loan Restructuring'. In restructuring, the bank changes the terms of the loan such as the tenure or the interest rate to help you pay the full amount over a longer period. In OTS, the account is closed forever after paying the negotiated amount. It is the finality of the process that makes it attractive to both parties.
                    </p>
                    <p>
                      Historically, OTS schemes were primarily used for agricultural and small business loans during periods of natural disaster or severe economic depression. However, with the rise of retail banking, OTS is now commonly applied to personal loans, credit cards, education loans, and home loans. The mechanics of the process are governed by the internal board approved policy of each bank, which in turn must adhere to the broad framework provided by the Reserve Bank of India.
                    </p>
                    <p>
                      When a bank offers an OTS, it is essentially declaring that the cost of recovery is higher than the benefit of waiting for the full amount. This 'cost of recovery' includes legal fees for filing cases in the DRT (Debt Recovery Tribunal), salaries of the recovery team, the opportunity cost of having an NPA on the books which requires higher capital provisioning, and the risk that the borrower might eventually file for insolvency.
                    </p>
                  </div>
                </section>

                {/* Section 3: RBI Guidelines 2024 */}
                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">RBI Guidelines and the Roadmap 2024</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The landscape of debt settlement in India underwent a tectonic shift with the RBI's 'Framework for Compromise Settlements and Technical Write-offs' issued in 2023 and reinforced in 2024. These guidelines were introduced to bring transparency and efficiency to the way banks handle stressed accounts.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                       <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                          <h4 className="text-[#D2A02A] font-bold text-xl mb-4 uppercase">Mandatory Board Policy</h4>
                          <p className="text-sm">Every bank and NBFC must have a board approved policy for compromise settlements. This means the process cannot be arbitrary. If you meet the criteria defined in the policy, the bank is obligated to consider your request for an OTS in a fair manner.</p>
                       </div>
                       <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                          <h4 className="text-[#D2A02A] font-bold text-xl mb-4 uppercase">The Cooling-Off Period</h4>
                          <p className="text-sm">One of the most significant 2024 updates is the introduction of a minimum 'cooling off' period of twelve months. This means after you settle a loan via OTS, you cannot take a new loan from any bank for at least a year. this is designed to prevent moral hazard while allowing you a path back to credit visibility.</p>
                       </div>
                    </div>
                    <p>
                      Perhaps the most debated aspect of the new guidelines is the inclusion of 'Wilful Defaulters' and 'Fraud Accounts' in the compromise settlement framework. While critics argued this rewards dishonesty, the RBI clarified that this is a pragmatic step to allow banks to recover as much money as possible from stuck accounts. However, for a wilful defaulter to enter into an settlement, the process is far more rigorous, often requiring high level approvals and strictly excluding them from fresh credit for longer periods.
                    </p>
                    <p>
                      For the average borrower, these guidelines are a blessing. They provide a predictable environment where you can demand to see the bank's OTS policy. It also mandates that the bank must provide a clean 'No Dues Certificate' once the settlement amount is paid, ensuring you have the legal proof required to close the chapter on your debt.
                    </p>
                    <p>
                       The RBI also emphasizes that banks must ensure 'fair treatment' of borrowers during the settlement process. This includes stopping all coercive recovery practices once a formal settlement proposal is under active consideration. If a bank continues to harass you after you have submitted a valid OTS request, you have the right to approach the Banking Ombudsman.
                    </p>
                  </div>
                </section>

                {/* Section 4: Eligibility */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">Who is Eligible for an OTS?</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Not every borrower who wants a waiver will get one. Banks use a strict set of criteria to determine if a case is suitable for a One Time Settlement. Understanding these criteria can help you assess your own chances of success.
                    </p>
                    <ul className="list-none space-y-6">
                       <li className="flex items-start gap-4">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</span>
                          <div>
                             <h4 className="font-bold text-xl text-gray-900">NPA Classification</h4>
                             <p>The primary requirement is that the account must be an NPA (Non-Performing Asset). Typically, an account must be in default for at least 90 to 180 days before the bank even considers it for a settlement. Accounts that are currently 'regular' are not eligible for OTS waivers.</p>
                          </div>
                       </li>
                       <li className="flex items-start gap-4">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</span>
                          <div>
                             <h4 className="font-bold text-xl text-gray-900">Genuine Hardship Proof</h4>
                             <p>You must be able to prove that you *cannot* pay the full amount due to reasons beyond your control. Having the money in your bank account while asking for a waiver is a recipe for rejection. The bank will scrutinize your bank statements and income tax returns to verify your financial status.</p>
                          </div>
                       </li>
                       <li className="flex items-start gap-4">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</span>
                          <div>
                             <h4 className="font-bold text-xl text-gray-900">Value of Collateral</h4>
                             <p>For secured loans, the eligibility depends heavily on the value of the asset. If you owe 50 Lakhs but the property you pledged is worth 1 Crore, the bank is unlikely to give you a principal waiver because they can recover the full amount by selling the property. OTS is more common when the debt exceeds the value of the security.</p>
                          </div>
                       </li>
                       <li className="flex items-start gap-4">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">4</span>
                          <div>
                             <h4 className="font-bold text-xl text-gray-900">Age of the Debt</h4>
                             <p>Older defaults are generally more eligible for deeper waivers. A debt that has been outstanding for five years is seen as a higher recovery risk than a debt that is six months old. Banks often 'write off' older debts in their ledger, making them more flexible during negotiations.</p>
                          </div>
                       </li>
                    </ul>
                  </div>
                </section>

                {/* Section: SBI OTS Schemes */}
                <section id="sbi-ots" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">State Bank of India (SBI) One Time Settlement Schemes</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      As the largest public sector lender in India, State Bank of India (SBI) often leads the way in introducing comprehensive OTS schemes for its borrowers. SBI typically categorizes its OTS offerings based on the type of loan and the amount of default. The 'Rinn Samadhan' or similar schemes are often launched during specific periods of the year to encourage borrowers to clear their long-standing dues.
                    </p>
                    <p>
                      For agricultural borrowers, SBI frequently announces special waivers where the entire interest component might be forgiven if the principal is paid. For retail borrowers with personal loans or credit card debts (SBI Card), the bank follows a policy that looks at the 'net present value' of the recovery. If the account is a chronic NPA, the degree of waiver can be significant.
                    </p>
                    <p>
                      In 2024, SBI's policy focus has been on resolving small ticket loans up to 20 Lakhs through digital channels or simplified branch level approvals. This reduces the time taken for a sanction from months to just a few weeks. However, for larger loans exceeding 50 Lakhs, the case moves to the Zonal or Local Head Office (LHO) for a more rigorous audit. Understanding which tier of SBI is handling your case is the first step in successful negotiation.
                    </p>
                    <p>
                       The 'SBI UTS' (Uniform Tracking System) ensures that once a settlement is entered, it is tracked across the country. This means you cannot settle a loan in one branch and expect the bank to ignore it in another. Consistency in documentation is paramount when dealing with SBI.
                    </p>
                  </div>
                </section>

                {/* Section: Other Major Bank OTS */}
                <section id="bank-specific" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">OTS Policies of Other Major Private and Public Banks</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      While public sector banks like PNB, Bank of Baroda, and Canara Bank follow a process similar to SBI, private sector giants like HDFC Bank, ICICI Bank, and Axis Bank have a more aggressive approach to debt recovery and settlement.
                    </p>
                    <p>
                      <strong>HDFC Bank OTS</strong>: HDFC is known for its focus on recovering the principal amount. They are often willing to settle credit card debts (which have high interest components) for a reasonable percentage of the total outstanding, provided the hardship claim is verified. They use specialized recovery agencies, but the final settlement authority remains with their central credit team.
                    </p>
                    <p>
                      <strong>ICICI Bank OTS</strong>: ICICI Bank often utilizes 'Settlement Camps' in major cities where borrowers can meet bank officials directly to negotiate. Their policy is data driven: if their internal system predicts a low probability of recovery through legal means, they are more open to a generous settlement.
                    </p>
                    <p>
                      <strong>Axis Bank and Kotak Mahindra</strong>: These banks often look for a settlement that covers at least their 'book value'. If you can offer an amount that ensures the bank doesn't show a huge loss on its books, you have a high chance of approval. They also prioritize closures before the end of the financial quarter.
                    </p>
                    <p>
                       For NBFCs like Bajaj Finserv or Tata Capital, the OTS process is often faster but the waivers might be slightly lower compared to large banks. NBFCs are more flexible with payment timelines, allowing 3 to 6 installments for the settlement amount.
                    </p>
                  </div>
                </section>

                {/* Section: Loan Categories */}
                <section id="loan-types" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">In-depth: Settling Different Loan Categories</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The strategy for a One Time Settlement is not 'one size fits all'. Each loan type has its own nuances and leverage points during negotiation.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">1. Unsecured Personal Loans</h3>
                    <p>
                      These are the most common candidates for OTS. Since there is no collateral, the bank's only recourse is legal action. Once the legal costs start mounting, the bank becomes highly motivated to settle. You can often achieve waivers as high as 50% to 70% of the total outstanding interest and a part of the principal.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">2. Credit Card Dues</h3>
                    <p>
                      With interest rates often exceeding 40% per year, credit card debt grows exponentially. Banks are aware that these rates are unsustainable for a person in distress. Credit card settlements are usually the fastest to conclude. They often look for a payment that covers the original spent amount plus a small portion of the interest.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">3. MSME and Business Loans</h3>
                    <p>
                      For business loans, the bank looks at the 'surviving capacity' of the business. If the business has shut down, they are very open to an OTS. However, if the business is still running, they might prefer restructuring over a settlement. Showing a closure of GST registration or a business loss report from a Chartered Accountant is key here.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">4. Education Loans</h3>
                    <p>
                      Education loan settlements are handled with a bit more empathy, especially if the student has not secured a job. However, the bank will check the financial status of the parents who are usually co-applicants. If the parents have assets, the bank will be less likely to give a large waiver.
                    </p>
                  </div>
                </section>

                {/* Section 5: Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">The Step-by-Step OTS Journey</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Navigating an OTS can feel like walking through a labyrinth of banking terminology and hierarchy. Here is a clear, simplified roadmap of the process from start to finish.
                    </p>
                    <div className="relative border-l-4 border-gray-100 pl-10 ml-6 space-y-12">
                       <div className="relative">
                          <div className="absolute -left-[54px] top-0 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center z-10">
                             <span className="text-xs font-bold text-gray-900">1</span>
                          </div>
                          <h4 className="font-bold text-2xl text-gray-900 mb-3">Initiation and Letter of Intent</h4>
                          <p>The process begins with a formal letter from the borrower to the bank manager. This letter should clearly state your intention to settle the loan via an OTS, provide your account details, and provide a brief explanation of your financial hardship. importantly, you should also propose an initial settlement amount that you are prepared to pay.</p>
                       </div>
                       <div className="relative">
                          <div className="absolute -left-[54px] top-0 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center z-10">
                             <span className="text-xs font-bold text-gray-900">2</span>
                          </div>
                          <h4 className="font-bold text-2xl text-gray-900 mb-3">Submission of Hardship Evidence</h4>
                          <p>Once the bank shows interest, you will be asked to submit a detailed set of documents. This is the 'Discovery Phase' where the bank validates your claims. You must provide salary slips, medical bills, business loss statements, or any other proof that supports your case for a waiver. This is often where a legal consultant adds the most value by organizing these documents effectively.</p>
                       </div>
                       <div className="relative">
                          <div className="absolute -left-[54px] top-0 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center z-10">
                             <span className="text-xs font-bold text-gray-900">3</span>
                          </div>
                          <h4 className="font-bold text-2xl text-gray-900 mb-3">Multiple Rounds of Negotiation</h4>
                          <p>Expect several rounds of back-and-forth communication. The bank will likely reject your first offer and counter it with a higher figure. This negotiation usually happens with the Branch Manager or the specialized Recovery Team. It is a game of patience and persistence. You must consistently highlight your inability to pay the higher amount while showing your commitment to the settlement.</p>
                       </div>
                       <div className="relative">
                          <div className="absolute -left-[54px] top-0 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center z-10">
                             <span className="text-xs font-bold text-gray-900">4</span>
                          </div>
                          <h4 className="font-bold text-2xl text-gray-900 mb-3">Sanction Letter Issuance</h4>
                          <p>If an agreement is reached, the bank's internal committee (often the Credit Committee or NPA Committee) will formalize the approval. The bank will then issue a 'Sanction Letter' or 'Acceptance Letter'. This is a critical legal document that outlines the final settlement amount, the deadline for payment, and the conditions of the settlement. DO NOT pay any money until you have this letter in hand.</p>
                       </div>
                       <div className="relative">
                          <div className="absolute -left-[54px] top-0 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center z-10">
                             <span className="text-xs font-bold text-gray-900">5</span>
                          </div>
                          <h4 className="font-bold text-2xl text-gray-900 mb-3">Payment and Closure</h4>
                          <p>Make the payment as per the terms of the Sanction Letter. It is highly recommended to pay through traceable banking channels like NEFT, RTGS, or Demand Draft. Once the payment is cleared, the bank should issue a 'No Dues Certificate' (NDC) and return any original documents or security cheques they held. The account will then be closed in their core banking system.</p>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Section 6: Negotiation */}
                <section id="negotiation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">Pro Negotiation Strategies for OTS</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Negotiating with a large bank can feel like a David versus Goliath battle. However, you have more leverage than you might think. A bank with an NPA wants to recover money just as much as you want to pay it off. Here are strategies to negotiate like a professional.
                    </p>
                    <div className="bg-gray-900 text-white p-10 rounded-3xl space-y-8">
                       <div className="flex items-center gap-6">
                          <div className="w-16 h-16 border-2 border-[#D2A02A] rounded-full flex items-center justify-center text-[#D2A02A] font-bold text-2xl">01</div>
                          <div>
                             <h4 className="text-xl font-bold mb-1">Know the Numbers</h4>
                             <p className="text-gray-400 text-sm">Before talking to the bank, know your exact principal outstanding and the total interest. Banks usually prioritize recovering the principal first. Start your negotiation by offering the principal amount or even slightly less if the default is old.</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-6">
                          <div className="w-16 h-16 border-2 border-[#D2A02A] rounded-full flex items-center justify-center text-[#D2A02A] font-bold text-2xl">02</div>
                          <div>
                             <h4 className="text-xl font-bold mb-1">Highlight 'Lack of Assets'</h4>
                             <p className="text-gray-400 text-sm">The bank's willingness to settle depends on their ability to recover funds from you. If you show that you have no other assets, no high-paying job, and no significant liquid cash, their only option for recovery is the OTS you are offering. Avoid showing off wealth during this phase.</p>
                       </div>
                       </div>
                       <div className="flex items-center gap-6">
                          <div className="w-16 h-16 border-2 border-[#D2A02A] rounded-full flex items-center justify-center text-[#D2A02A] font-bold text-2xl">03</div>
                          <div>
                             <h4 className="text-xl font-bold mb-1">The 'Third Party' Strategy</h4>
                             <p className="text-gray-400 text-sm">Mention that the settlement amount is being provided by a family member or a friend specifically for this closure and will not be available if the settlement is rejected. This creates a sense of 'now or never' for the bank manager.</p>
                          </div>
                       </div>
                    </div>
                    <p>
                      Remember, silence is also a tool. If the bank insists on an amount you cannot pay, do not agree to it immediately. Reiterate your financial position and let them know you will have to look at other legal options like insolvency if a fair settlement is not reached. This subtle nudge often makes them reconsider their stance.
                    </p>
                  </div>
                </section>

                {/* Section 7: Documents */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">The Exhaustive Documentation Checklist</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Documentation is the backbone of a successful One Time Settlement. A missing document can delay the process by weeks or even lead to rejection. Compile the following into a comprehensive file before you begin.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                          <span className="text-[#D2A02A] text-2xl font-bold">☐</span>
                          <span className="text-gray-800 font-medium">Detailed Cause of Default Letter</span>
                       </div>
                       <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                          <span className="text-[#D2A02A] text-2xl font-bold">☐</span>
                          <span className="text-gray-800 font-medium">Last 12 Months Bank Statements</span>
                       </div>
                       <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                          <span className="text-[#D2A02A] text-2xl font-bold">☐</span>
                          <span className="text-gray-800 font-medium">Latest Salary Slips or Form 16</span>
                       </div>
                       <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                          <span className="text-[#D2A02A] text-2xl font-bold">☐</span>
                          <span className="text-gray-800 font-medium">Income Tax Returns (Last 2 Years)</span>
                       </div>
                       <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                          <span className="text-[#D2A02A] text-2xl font-bold">☐</span>
                          <span className="text-gray-800 font-medium">Medical Reports & Hospital Bills</span>
                       </div>
                       <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                          <span className="text-[#D2A02A] text-2xl font-bold">☐</span>
                          <span className="text-gray-800 font-medium">Business Loss Certificate from CA</span>
                       </div>
                       <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                          <span className="text-[#D2A02A] text-2xl font-bold">☐</span>
                          <span className="text-gray-800 font-medium">Termination or Redundancy Letter</span>
                       </div>
                       <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                          <span className="text-[#D2A02A] text-2xl font-bold">☐</span>
                          <span className="text-gray-800 font-medium">Legal Notices received from Bank</span>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Section 8: CIBIL Impact */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">The CIBIL Reality: What Happens After OTS?</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      One of the biggest concerns for borrowers is the impact on their credit score. It is vital to be transparent: an OTS is not a clean slate in the eyes of credit bureaus. When you settle a loan, the credit bureau reports the status as 'Settled'. This is different from 'Closed', which indicates full repayment.
                    </p>
                    <p>
                      A 'Settled' status tells future lenders that you did not fulfill your original promise to pay the full amount. This can make it difficult to get new unsecured loans like personal loans or credit cards for the next 2 to 5 years. However, this is not a life sentence.
                    </p>
                    <div className="bg-blue-900 text-white p-12 rounded-3xl my-10 relative overflow-hidden">
                       <h3 className="text-2xl font-bold mb-6 relative z-10">Rebuilding Your Credit from Zero</h3>
                       <div className="space-y-4 relative z-10">
                          <p>1. <strong>The Secured Credit Card Path</strong>: apply for a credit card against a fixed deposit. Use it for small purchases and pay the bill in full every month. This is the fastest way to show credit discipline.</p>
                          <p>2. <strong>Avoid Hard Inquiries</strong>: do not apply for multiple loans immediately after a settlement. Each rejection will push your score down further.</p>
                          <p>3. <strong>Check for Status Errors</strong>: sometimes banks fail to update the status to 'Settled' and leave it as 'Default'. This is illegal. Regularly check your report and raise disputes if the status is incorrect.</p>
                       </div>
                    </div>
                    <p>
                      From a logical perspective, a 'Settled' status is much better than an 'Active Default' or 'Written Off' status. A default means you have an open wound in your financial history that is festering every month. A settlement is like a scar: it shows you had a problem, but it also shows the problem is now resolved. Over time, scars fade, and so does the negative impact of an OTS.
                    </p>
                  </div>
                </section>

                {/* Section 9: Pros & Cons */}
                <section id="pros-cons" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">The Honest Pros and Cons of OTS</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Is One Time Settlement the right choice for you? Let's break down the advantages and disadvantages objectively.
                    </p>
                    <div className="overflow-x-auto my-10">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="p-6 text-left border border-gray-200 text-[#D2A02A] font-extrabold uppercase tracking-widest">Advantages (Pros)</th>
                            <th className="p-6 text-left border border-gray-200 text-red-600 font-extrabold uppercase tracking-widest">Disadvantages (Cons)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-6 border border-gray-200 align-top space-y-4">
                              <p><strong>Massive Debt Reduction</strong>: Save 30% to 60% of your total outstanding dues, giving you immediate financial breathing room.</p>
                              <p><strong>End of Harassment</strong>: Recovery agents stop calling once a settlement is sanctioned and paid.</p>
                              <p><strong>Legal Closure</strong>: All pending court cases, DRT proceedings, and SARFAESI notices are withdrawn.</p>
                              <p><strong>Mental Peace</strong>: The psychological burden of mounting debt is lifted, allowing you to focus on your career and family.</p>
                            </td>
                            <td className="p-6 border border-gray-200 align-top space-y-4 bg-gray-50">
                              <p><strong>Credit Score Damage</strong>: Your CIBIL score will take a hit and the 'Settled' tag will remain for years.</p>
                              <p><strong>Future Credit Access</strong>: Getting fresh loans becomes difficult for a few years due to the cooling off period.</p>
                              <p><strong>Tax Liability</strong>: Technically, the amount waived by the bank can be treated as taxable income under certain sections of the Income Tax Act.</p>
                              <p><strong>Lump Sum Requirement</strong>: Finding the cash for a one time payment can be challenging for those already in distress.</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 10: Legal Protection */}
                <section id="legal-protection" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">Legal Protection Against Recovery Harassment</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      One of the main reasons borrowers seek an OTS is to stop the unethical practices used by recovery agents. It is crucial to know that the Supreme Court of India and the RBI have laid down very strict rules that recovery agents must follow.
                    </p>
                    <div className="bg-red-50 border-2 border-red-100 p-10 rounded-3xl space-y-6 shadow-sm">
                       <h3 className="text-red-800 font-bold text-2xl">Illegal Recovery Practices</h3>
                       <p className="text-red-700">If a recovery agent does any of the following, they are breaking the law:</p>
                       <ul className="list-disc pl-6 text-red-900 font-medium">
                          <li>Calling before 8 AM or after 7 PM.</li>
                          <li>Using abusive language or persistent threats.</li>
                          <li>Calling your neighbors, relatives, or office colleagues.</li>
                          <li>Visiting your home without prior notice or ID proof.</li>
                          <li>Physically intimidating you or entering your house without permission.</li>
                       </ul>
                    </div>
                    <p>
                      Once you hire a legal firm for your OTS, we send a formal notice to the bank stating that all communication should be routed through us. This acts as a legal shield. If the harassment continues, we can file a police complaint (FIR) under Section 506 (Criminal Intimidation) or move the consumer court for damages. Knowledge of your rights is your strongest defense during the debt struggle.
                    </p>
                  </div>
                </section>

                {/* Section: Psychology of Debt */}
                <section id="psychology" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">The Psychology of Debt and the Relief of Settlement</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Being in debt is not just a financial burden; it is a profound psychological weight that affects every aspect of a person's life. The constant pressure of mounting interest, the fear of legal notices, and the relentless calls from recovery agents can lead to severe anxiety, depression, and a sense of isolation. Many borrowers experience a loss of self-esteem and a feeling of being 'trapped' with no way out.
                    </p>
                    <p>
                      This psychological toll often leads to 'ostrich syndrome', where the borrower ignores all communications from the bank, hoping the problem will go away. Unfortunately, this only worsens the situation as penalties continue to pile up. A One Time Settlement offers a psychological breakthrough. It provides a 'light at the end of the tunnel' and a tangible goal to work towards.
                    </p>
                    <p>
                      The moment an OTS sanction letter is received, there is often an immediate sense of relief. It marks the transition from being a 'debtor' to being someone who has successfully resolved their financial obligations. At AMA Legal Solutions, we understand this human element. We don't just provide legal support; we provide the empathy and clarity needed to navigate the emotional turmoil of debt recovery.
                    </p>
                  </div>
                </section>

                {/* Section: Debunking OTS Myths */}
                <section id="myths" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">Debunking Common OTS Myths</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      There is a lot of misinformation surrounding One Time Settlements. Let's clear the air on some of the most common myths.
                    </p>
                    <p>
                      <strong>Myth 1: 'OTS is only for the rich or large businesses.'</strong> <br /> Reality: OTS is for everyone. From a 50,000 rupee credit card debt to a 50 Crore corporate loan, the principle of compromise remains the same. Banks are often more flexible with small retail loans because they are easier to process.
                    </p>
                    <p>
                      <strong>Myth 2: 'My bank is obligated to give me an OTS if I ask.'</strong> <br /> Reality: OTS is a matter of compromise, not a matter of right. While RBI guidelines mandate a board approved policy, the bank has the final say on whether to accept your specific offer based on their recovery risk assessment.
                    </p>
                    <p>
                      <strong>Myth 3: 'An OTS is a criminal record.'</strong> <br /> Reality: Absolutely not. An OTS is a civil financial arrangement. It does not appear on any police record or impact your ability to travel or hold a government job. It only appears on your credit report.
                    </p>
                    <p>
                      <strong>Myth 4: 'I can get an OTS immediately after missing one EMI.'</strong> <br /> Reality: No. Banks usually wait until the account is a 'Sub-Standard' or 'Doubtful' NPA (90+ days of default) before talking about a settlement. They first try to recover the full amount through regular follow ups.
                    </p>
                  </div>
                </section>

                {/* Section: Case Studies */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block">In-Depth Debt Resolution Case Studies</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      To help you understand the practical application of OTS, let's look at three diverse success stories from our archives at AMA Legal Solutions.
                    </p>
                    <div className="space-y-10">
                       <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                          <h4 className="font-bold text-xl mb-3">Case 1: The Credit Card Trap</h4>
                          <p><strong>The Situation</strong>: A young professional in Delhi had three credit cards with a total outstanding of 12 Lakhs. Due to job loss during a market downturn, he defaulted. The interest was growing at 42% per annum, and recovery agents were calling his office daily.</p>
                          <p><strong>The Solution</strong>: We consolidated his accounts and initiated an OTS with his two primary banks. We proved his current low paying job status. After three months of negotiation, we settled the 12 Lakh debt for a total of 5.5 Lakhs (inclusive of all charges).</p>
                          <p><strong>The Outcome</strong>: The harassment stopped, the accounts were marked as settled, and he is now successfully rebuilding his score through a secured credit card.</p>
                       </div>
                       <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                          <h4 className="font-bold text-xl mb-3">Case 2: The Stalled MSME Loan</h4>
                          <p><strong>The Situation</strong>: A small manufacturing unit in Mumbai was unable to repay its 40 Lakh machinery loan after a major client defaulted on their payments. The bank had sent a SARFAESI notice to seize the unit's tools.</p>
                          <p><strong>The Solution</strong>: We challenged the SARFAESI notice on technical grounds while simultaneously proposing a One Time Settlement. We proved that the machine's resale value was low. The bank agreed to an OTS of 22 Lakhs, payable in three installments over 4 months.</p>
                          <p><strong>The Outcome</strong>: The unit was saved from seizure, and the entrepreneur was able to pivot his business model without the weight of the old debt.</p>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Section: Client Reviews & Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center uppercase tracking-tighter">What Our Clients Say</h2>
                  
                  {/* Summary Rating */}
                  <div className="flex flex-col items-center mb-16 bg-gray-50 py-10 rounded-[40px] border border-gray-100 shadow-inner">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex text-[#D2A02A] text-4xl">
                        {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                      </div>
                      <span className="text-4xl font-black text-gray-900">4.9/5</span>
                    </div>
                    <p className="text-gray-500 font-medium uppercase tracking-[0.2em] text-sm">Verified Rating Based on 2,150+ OTS Cases</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform">
                      <div className="absolute top-0 right-10 -mt-6 bg-[#D2A02A] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Case Resolved</div>
                      <div className="text-6xl text-gray-100 absolute bottom-10 right-10 leading-none select-none">"</div>
                      <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed">
                        "AMA Legal Solutions helped me get an OTS from SBI for my business loan. The waiver was significant and the process was handled professionally without any stress. Highly grateful for their legal expertise."
                      </p>
                      <div className="flex items-center border-t border-gray-50 pt-8 mt-auto">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-800 font-black text-xl mr-4 shadow-sm group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">AK</div>
                        <div>
                          <p className="font-extrabold text-gray-900 text-base">Amit Kumar</p>
                          <p className="text-xs text-[#D2A02A] font-bold uppercase tracking-widest">Business Owner</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform">
                      <div className="absolute top-0 right-10 -mt-6 bg-green-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">50% Waiver</div>
                      <div className="text-6xl text-gray-100 absolute bottom-10 right-10 leading-none select-none">"</div>
                      <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed">
                        "Highly recommended for debt issues. They stopped the recovery calls and negotiated an excelente OTS for my credit card dues. I can finally breathe again!"
                      </p>
                      <div className="flex items-center border-t border-gray-50 pt-8 mt-auto">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-800 font-black text-xl mr-4 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">SR</div>
                        <div>
                          <p className="font-extrabold text-gray-900 text-base">Sneha Roy</p>
                          <p className="text-xs text-green-600 font-bold uppercase tracking-widest">Professional</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <p className="text-gray-400 text-sm font-light italic">More than 500+ success stories updated monthly. Individual results may vary based on bank policy.</p>
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-12 border-b-4 border-[#D2A02A] pb-4 inline-block">One Time Settlement (OTS) - FAQs</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-4">
                          <span className="text-[#D2A02A] text-2xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 border-l-2 border-gray-100">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-[#1a202c] rounded-[40px] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>
                  <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Your Debt is Just a <span className="text-[#D2A02A]">Challenge</span>, Not Your Final Destination.</h2>
                    <p className="text-lg md:text-2xl text-gray-400 mb-12 font-light">
                      Don't wait for the court notices to pile up. Take proactive control of your financial life today. Our senior lawyers specialize in negotiating One Time Settlements that give you a fresh start.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-wider w-full">
                          Start Your Recovery Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-5 px-12 rounded-full transition-all text-lg shadow-xl w-full border-2 border-transparent">
                          Call Expert: +91 8700-343-611
                        </button>
                      </a>
                    </div>
                    <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50">
                       <span className="text-xs uppercase tracking-[0.3em] font-bold">Confidential</span>
                       <span className="text-xs uppercase tracking-[0.3em] font-bold">Legal</span>
                       <span className="text-xs uppercase tracking-[0.3em] font-bold">Effective</span>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-28 h-[calc(100vh-120px)] overflow-y-auto no-scrollbar pb-10">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl shadow-2xl border border-gray-800 text-white group">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#D2A02A] transition-colors">Drowning in EMIs?</h3>
                  <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                    Once you hire us, we take over all bank communications. No more harassment. Just a legal path to freedom.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-lg"
                  >
                    Assess My Case Free
                  </Link>
                  <p className="text-[10px] text-center mt-4 text-gray-600 uppercase tracking-widest font-bold">Trusted by 5000+ Clients</p>
                </div>

                {/* Related Pages */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Guides & Resources</h3>
                  <ul className="space-y-5">
                    {[
                      { name: "Loan Settlement Steps", href: "/services/loan-settlement" },
                      { name: "SBI OTS Schemes", href: "/services/loan-settlement/sbi-bank" },
                      { name: "Negotiation Guide", href: "/how-to-negotiate-a-loan-settlement-with-lenders-online" },
                      { name: "Job Loss Support", href: "/job-lost-loan-settlement" },
                      { name: "Lok Adalat Helper", href: "/special-lok-adalat-for-loan-settlement" },
                      { name: "Credit Card Relief", href: "/best-apps-for-managing-loan-settlement-offers-in-India" }
                    ].map((item, i) => (
                      <li key={i}>
                        <Link 
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-[#D2A02A] transition-all text-sm group"
                        >
                          <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* App Download */}
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 text-center">
                   <h4 className="font-bold text-blue-900 mb-4">Track Progress on Our App</h4>
                   <div className="flex flex-col gap-3">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                        <Image src="/newAssets/appstore.svg" alt="Play Store" width={140} height={40} className="mx-auto" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} className="mx-auto" />
                      </Link>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

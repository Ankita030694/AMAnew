import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the primary criteria for settling a loan above 1 crore in India?",
    answer: "The primary criteria for settling a high value loan above 1 crore is the classification of the account as a Non Performing Asset (NPA) and the demonstration of genuine financial hardship. Banks and financial institutions follow board approved policies that determine eligibility based on the borrower's intent to pay, the value of collateral, and the overall recovery probability. Genuine hardship due to business failure or medical emergencies is usually considered a strong ground for initiating a One Time Settlement (OTS)."
  },
  {
    question: "Can wilful defaulters settle loans above 1 crore under new RBI rules?",
    answer: "Yes, according to the RBI circular issued in June 2023, banks can enter into compromise settlements with borrowers classified as wilful defaulters or fraud accounts. This is done without prejudice to any ongoing criminal proceedings against the borrower. The goal is to maximize recovery for the bank while providing a resolution path. However, such settlements are subject to strict scrutiny and must be approved by the bank's board of directors."
  },
  {
    question: "How long does a high value loan settlement process usually take?",
    answer: "A settlement involving amounts above 1 crore typically takes between 4 to 9 months. This process is longer than retail settlements because it involves multiple levels of approval within the bank or Asset Reconstruction Company (ARC). It requires detailed financial audits, valuation of assets, and often multiple rounds of negotiation before a final Settlement Letter is issued. Legal documentation also takes more time to ensure all rights and liabilities are clearly addressed."
  },
  {
    question: "Do Asset Reconstruction Companies (ARCs) handle settlements differently than banks?",
    answer: "Yes, ARCs often have more flexibility than traditional banks because their primary business is recovering value from distressed assets. For loans above 1 crore, ARCs may look closer at the net present value of the collateral. They might be more willing to accept a significant haircut if they believe that a quick settlement offers better value than long drawn legal battles. However, they also have stringent internal guidelines to ensure the settlement is commercial and transparent."
  },
  {
    question: "What is the role of a lawyer in a 1 crore plus loan settlement?",
    answer: "For high value settlements, a lawyer is essential to protect the borrower's interests. They handle the complex legal correspondence, respond to SARFAESI and Section 138 notices, and negotiate terms from a position of legal strength. A lawyer ensures that the Settlement Letter is legally binding, contains no hidden clauses, and that the bank issues a proper No Dues Certificate. They also represent the borrower in Debt Recovery Tribunals (DRT) if litigation is already underway."
  },
  {
    question: "Can a settlement be done for a secured loan where the property value is high?",
    answer: "Settling a secured loan is more challenging when the collateral value exceeds the loan amount. However, it is still possible through expert negotiation. Factors such as the cost of litigation, the time involved in auctioning the property, and the legal hurdles under the SARFAESI Act can motivate banks to settle. A skilled negotiator can often secure a waiver of penal interest and a reduction in the total outstanding despite the presence of high value collateral."
  },
  {
    question: "Does loan settlement attract any tax liabilities for the borrower?",
    answer: "Under the Indian Income Tax Act, the amount waived by the lender in a settlement may be treated as 'perquisite' or 'income from other sources' for business entities. For individuals, the treatment can vary based on whether the loan was for business or personal use. It is highly recommended to consult with a tax expert alongside your legal counsel to understand the specific tax implications of a 1 crore plus settlement agreement."
  },
  {
    question: "How does a 1 crore plus settlement impact the credit report of a corporate entity?",
    answer: "Just like individual borrowers, corporate entities will see their credit reports marked as 'Settled' by bureaus such as CIBIL and CRIF High Mark. This will lower the entity's credit rating and may make it difficult to secure new credit lines for a few years. However, a settlement is often preferred over an 'NPA' or 'Suit Filed' status, as it shows a resolved liability and allows the business to move forward without the weight of mounting litigation."
  },
  {
    question: "What documents are required for a high value OTS application?",
    answer: "The requirements include the latest audited balance sheets (for businesses), tax returns for the last 3 years, bank statements, a detailed 'Hardship Letter' explaining the reasons for default, a list of all existing assets and liabilities, and valuation reports of any collateral. The bank will also require a formal proposal stating the amount offered and the timeline for payment. Providing comprehensive and transparent documentation is key to a successful settlement."
  },
  {
    question: "Can a bank revoke a settlement agreement after initial payment?",
    answer: "A bank can revoke a settlement agreement if the borrower fails to adhere to the payment schedule or if it is discovered that the borrower intentionally concealed material financial information. Most Settlement Letters contain a 'Default Clause' specifying that in the event of any payment failure, the entire original outstanding amount becomes due immediately, and all waivers are cancelled. Therefore, it is critical to ensure that the settlement amount is realistic and manageable."
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
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Settle Loans Above 1 Crore",
      "item": "https://www.amalegalsolutions.com/how-to-settle-loans-above-1-crore"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Settle Loans Above 1 Crore in India: The Ultimate Legal Guide",
  "description": "Comprehensive guide on settling high-value loans above 1 crore in India. Learn about RBI guidelines, OTS schemes, ARC negotiations, and legal strategies to manage large debt.",
  "image": "https://www.amalegalsolutions.com/newAssets/high-value-loan.webp",
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
  "datePublished": "2024-03-20",
  "dateModified": "2024-03-20"
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
  "name": "High Value Loan Settlement Service",
  "image": "https://www.amalegalsolutions.com/newAssets/high-value-loan.webp",
  "description": "Expert legal help for settling loans above 1 crore with banks and ARCs.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
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
        "name": "Vikram Mehta"
      },
      "reviewBody": "I was struggling with a 1.5 Crore business loan default. AMA Legal Solutions helped me navigate the ARC settlement process expertly. Their legal team is top-notch."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Iyer"
      },
      "reviewBody": "Professional and transparent. They handled my 1.2 Crore personal loan settlement with a private bank and got me a 45% waiver. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "How to Settle Loans Above 1 Crore in India | Expert Legal Strategy",
  description: "Comprehensive guide for high-value loan settlement in India. Learn about RBI guidelines, OTS schemes, and legal experts to settle debt above 1 crore.",
  keywords: [
    "how to settle loans above 1 crore",
    "loan settlement india",
    "1 crore loan settlement",
    "RBI guidelines for OTS",
    "high value debt settlement",
    "ARC settlement rules",
    "one time settlement 1 crore",
    "legal help for loan default",
    "settling corporate loans",
    "SME loan settlement"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-to-settle-loans-above-1-crore',
  },
};

export default function HighValueLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction to High-Value Debt" },
    { id: "what-is-settlement", title: "What is High-Value Settlement?" },
    { id: "rbi-guidelines", title: "RBI Guidelines (2023 Update)" },
    { id: "why-it-is-different", title: "Why 1 Crore+ is Different?" },
    { id: "ots-explained", title: "OTS Schemes Explained" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "role-of-arcs", title: "The Role of ARCs" },
    { id: "step-by-step", title: "Step-by-Step Guide" },
    { id: "negotiation-strategies", title: "Negotiation Strategies" },
    { id: "legal-framework", title: "The SARFAESI Act" },
    { id: "drt-proceedings", title: "DRT vs Settlement" },
    { id: "wilful-defaulters", title: "Wilful Defaulters Resolution" },
    { id: "commercial-implications", title: "Commercial Implications" },
    { id: "documents-required", title: "Documents Checklist" },
    { id: "why-legal-help", title: "Why Choose Our Legal Team" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "Expert FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "High Value Settlements", href: "/how-to-settle-loans-above-1-crore" },
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
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              <span className="text-[#D2A02A]">How to Settle Loans</span> <br /> Above 1 Crore in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Navigating high value debt demands strategic legal precision. Our senior legal consultants specialize in securing One Time Settlements (OTS) for liabilities exceeding 1 crore with top Indian banks and ARCs.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Secure High-Value OTS Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-5xl font-black text-gray-900 mb-8 lg:mb-12 leading-tight">Mastering the Complex Journey of 1 Crore Plus Debt Settlement</h2>
                  <div className="prose prose-lg lg:prose-xl text-gray-700 max-w-none space-y-6">
                    <p>
                      Facing a debt burden that exceeds one crore is a situation that places immense pressure on any business owner or high net worth individual in India. The stakes are extraordinarily high, involving personal reputation, commercial viability, and the potential loss of significant assets. At this level of financial liability, standard banking procedures often give way to complex legal negotiations, multi layered approval hierarchies, and the involvement of specialized recovery entities like Asset Reconstruction Companies (ARCs).
                    </p>
                    <p>
                      The journey to becoming debt free when your outstanding balance is above 1 crore requires more than just a simple request for a waiver. It demands a sophisticated legal strategy that aligns with the latest Reserve Bank of India (RBI) circulars while addressing the commercial interests of the lending institution. Whether you are dealing with a public sector bank, a private lender, or a Non Banking Financial Company (NBFC), the approach must be meticulous, documented, and legally robust.
                    </p>
                    <p>
                      In this comprehensive guide, we delve into the nuances of <strong>how to settle loans above 1 crore</strong> in the Indian context. We explore the legal mechanisms like the SARFAESI Act, the role of Debt Recovery Tribunals (DRT), and the various One Time Settlement (OTS) schemes available today. Our goal is to provide you with the clarity and professional insight needed to navigate these turbulent waters and emerge with a resolution that protects your future.
                    </p>
                  </div>
                </section>

                {/* Historical Context Section for Word Count & SEO */}
                <section id="historical-context" className="scroll-mt-32 bg-gray-50 p-10 rounded-3xl border border-gray-100">
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6">The Evolution of Debt Recovery and Settlement in India</h3>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>To truly understand how to settle a loan above 1 crore today, one must appreciate the historical evolution of debt recovery laws in India. For decades, Indian banks struggled with a sluggish legal system that made recovering large loans nearly impossible. In the early 1990s, the Narasimham Committee recommended several reforms, leading to the enactment of the Recovery of Debts Due to Banks and Financial Institutions Act (RDDBFI Act) in 1993. This act established the Debt Recovery Tribunals (DRTs) as specialized forums for handling loan recovery cases specifically above 10 lakhs (now effectively focusing on much larger amounts).</p>
                    <p>Despite the establishment of DRTs, recovery remained slow due to procedural loopholes and judicial delays. This led to the landmark move in 2002: the enactment of the SARFAESI Act. For the first time, banks were empowered to seize and sell secured assets without going through a court, provided the loan amount was above 1 lakh and correctly classified as an NPA. This was a game changer for high value loan recovery. For the borrower, it meant that the 'threat' of losing their property became immediate and real, which ironically paved the way for more serious settlement negotiations. If a bank could seize a factory worth 10 crores, the borrower was now highly motivated to offer a 2 crore settlement to keep the asset.</p>
                    <p>The next major milestone was the introduction of Asset Reconstruction Companies (ARCs) under the SARFAESI framework. ARCs like ARCIL (Asset Reconstruction Company of India Limited) were created to buy bad loans from banks and focus exclusively on their resolution. By the 2010s, the volume of NPAs in the Indian banking system, particularly in the corporate and SME sectors, reached alarming levels. This led the RBI to introduce various restructuring mechanisms like the Strategic Debt Restructuring (SDR) and the Scheme for Sustainable Structuring of Stressed Assets (S4A). However, these were often perceived as too complex for smaller businesses with debts in the 1 to 10 crore range.</p>
                    <p>The Insolvency and Bankruptcy Code (IBC) of 2016 was the final 'nuclear' option added to the recovery toolkit. For corporate borrowers, the threat of being dragged into the National Company Law Tribunal (NCLT) meant the potential loss of control over the entire company. This heightened the demand for out of court settlements. Today, the 2023 RBI guidelines for compromise settlements represent a refined, mature approach. The regulator has realized that while recovery is important, providing a 'fresh start' to honest but unfortunate borrowers is equally crucial for the health of the economy. This is the environment in which we operate today: a delicate balance between strict recovery laws like SARFAESI and the humane resolution path provided by OTS schemes.</p>
                    <p>For a borrower with a 1 crore plus liability, this history means that the lender has more 'teeth' than ever before, but they also have more 'regulatory encouragement' to settle than ever before. Successfully navigating this requires a legal partner who understands the nuances of every act from 1993 to 2023. At AMA Legal Solutions, we leverage this entire historical framework to build your case, ensuring that your settlement proposal is not viewed as an act of desperation, but as a valid under the law resolution to a complex financial problem.</p>
                  </div>
                </section>

                {/* What is High-Value Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-6">What Exactly is High-Value Loan Settlement?</h2>
                  <div className="bg-[#F8FAFC] p-8 lg:p-12 rounded-3xl border border-gray-100 mb-10 shadow-inner">
                    <p className="text-lg lg:text-2xl text-gray-800 italic font-medium leading-relaxed">
                      "High-value loan settlement is a negotiated compromise between a borrower and a lender where the lender agrees to accept a lump sum amount which is significantly lower than the total outstanding debt, usually involving amounts above 10 million Indian Rupees (1 Crore)."
                    </p>
                  </div>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      This process is not a right but a commercial decision made by the bank. When a loan account is classified as a Non Performing Asset (NPA) because of non payment for over 90 days, the bank must set aside funds as provisions. For loans above 1 crore, these provisions can be substantial, impacting the bank's profitability. Therefore, lenders are often willing to consider a settlement if they are convinced that the recovery through legal means would be time consuming, expensive, or uncertain.
                    </p>
                    <p>
                      A settlement at this scale often involves large haircuts, where 30% to 60% of the total dues might be waived. However, such decisions are never made lightly. Every proposal is subjected to a 'Pre Settlement Audit' and must pass through a 'Settlement Committee' or the bank's Board of Directors. The primary objective for the lender is to minimize losses while maximizing current cash flow.
                    </p>
                  </div>
                </section>

                {/* RBI Guidelines */}
                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-10 uppercase tracking-tight">Latest RBI Guidelines: The 2023 Paradigm Shift</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      The landscape of debt resolution in India underwent a significant transformation in June 2023. The Reserve Bank of India issued a circular titled 'Framework for Compromise Settlements and Technical Write-offs,' which streamlined the procedure for all regulated entities, including banks and NBFCs.
                    </p>
                    <p>
                      One of the most notable aspects of this new framework is the inclusion of wilful defaulters and fraud accounts in the eligibility for compromise settlements. Previously, such accounts were often excluded from any form of settlement negotiations. The RBI clarified that while criminal proceedings must continue, the financial recovery process through settlement is a valid mechanism for banks to clean up their balance sheets.
                    </p>
                    <div className="bg-yellow-50 p-8 rounded-2xl border-2 border-yellow-100 mt-8">
                      <h4 className="text-xl font-bold text-yellow-800 mb-4">Key pillars of the new RBI Framework:</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-[#D2A02A] mr-3 font-bold text-xl">01</span>
                          <span><strong>Board Approved Policies:</strong> Every bank must have a documented policy for high value settlements that is transparent and objective.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#D2A02A] mr-3 font-bold text-xl">02</span>
                          <span><strong>Cooling off Period:</strong> Borrowers who settle their debts will face a cooling off period of at least 12 months before they can seek fresh credit from the same lender.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#D2A02A] mr-3 font-bold text-xl">03</span>
                          <span><strong>Delegated Authority:</strong> The circular emphasizes that the authority for approving settlements must be delegated to committees that are independent of the officers who sanctioned the original loan.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Why 1 Crore+ is Different */}
                <section id="why-it-is-different" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 border-b-4 border-gray-100 pb-4">Why Settling Loans Above 1 Crore Requires a Unique Strategy</h2>
                  <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed font-light">
                    Processing a 10 lakh loan settlement is a routine administrative task. Processing a 1 crore plus settlement is a high stakes legal and commercial operation. Here is why the approach must be fundamentally different:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group p-10 bg-white rounded-3xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-2xl transition-all duration-300">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🏢</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Approval Hierarchy</h4>
                      <p className="text-gray-600 leading-relaxed">Small loans are settled at the branch or regional level. For amounts above 1 crore, the proposal must travel to the Head Office and often requires the nod of the Executive Director or the Board Committee. The negotiation window is much narrower and requires expert positioning.</p>
                    </div>
                    <div className="group p-10 bg-white rounded-3xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-2xl transition-all duration-300">
                      <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">⚖️</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Legal Complexity</h4>
                      <p className="text-gray-600 leading-relaxed">High value loans are almost always associated with active litigation under the SARFAESI Act or in the Debt Recovery Tribunal. A settlement must be carefully coordinated with court proceedings to ensure that any 'Consent Decree' protects the borrower's legal rights completely.</p>
                    </div>
                    <div className="group p-10 bg-white rounded-3xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-2xl transition-all duration-300">
                      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🔍</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Detailed Financial Audit</h4>
                      <p className="text-gray-600 leading-relaxed">Banks will conduct a thorough investigation into your assets, including cross checking with income tax records and other credit bureaus. For debts above 1 crore, the 'ability to pay' vs 'willingness to pay' is analyzed using sophisticated forensic tools.</p>
                    </div>
                    <div className="group p-10 bg-white rounded-3xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-2xl transition-all duration-300">
                      <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🤝</div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Involvement of ARCs</h4>
                      <p className="text-gray-600 leading-relaxed">Many high value NPAs are sold by banks to Asset Reconstruction Companies at a discount. Negotiating with an ARC is a different ball game compared to a bank, requiring a deep understanding of ARC specific valuation models and recovery mandates.</p>
                    </div>
                  </div>
                </section>

                {/* OTS Explained */}
                <section id="ots-explained" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-10">The One Time Settlement (OTS) Scheme: Your Path to Freedom</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      The One Time Settlement, or OTS, is the most common legal mechanism used to resolve high value debt in India. While there are standard OTS schemes launched periodically by public sector banks, custom OTS proposals can be submitted at any time. For a loan above 1 crore, a custom proposal is often more effective than waiting for a generic scheme.
                    </p>
                    <p>
                      An OTS involves paying a single lump sum amount, which is usually the 'Principal Outstanding' plus a small percentage of the interest, while the rest of the interest and all penalties are waived. In very distressed cases, even a portion of the principal can be written off. This is particularly possible if the property value has depreciated or if the bank believes that a forced auction will result in a lower recovery than the OTS offer.
                    </p>
                    <div className="bg-blue-900 text-white p-10 rounded-3xl space-y-6 shadow-2xl">
                      <h4 className="text-2xl font-bold border-b border-blue-700 pb-4">Key Benefits of a Well-Structured OTS:</h4>
                      <ul className="grid md:grid-cols-2 gap-6">
                        <li className="flex items-center space-x-3">
                          <span className="text-green-400 text-2xl font-bold">✓</span>
                          <span>Immediate Cessation of Legal Actions</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="text-green-400 text-2xl font-bold">✓</span>
                          <span>Complete Waiver of Penal Interest</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="text-green-400 text-2xl font-bold">✓</span>
                          <span>Release of Pledged Collateral/Property</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="text-green-400 text-2xl font-bold">✓</span>
                          <span>Legal Closure with No Dues Certificate</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="text-green-400 text-2xl font-bold">✓</span>
                          <span>Prevention of Arrest or Attachment of Personal Assets</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="text-green-400 text-2xl font-bold">✓</span>
                          <span>Dignified Exit from a Financial Crisis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8">Eligibility Criteria for High-Value Settlements</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      Not every borrower with a 1 crore plus liability qualifies for a settlement. Lenders use a rigorous screening process to ensure that only 'genuine' cases are considered. The eligibility criteria usually focus on the following pillars:
                    </p>
                    <div className="space-y-8 mt-10">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[#D2A02A]">A</div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">Account Status</h4>
                          <p>The account should typically be classified as a Non Performing Asset (NPA) for a minimum period, usually six months to a year. Accounts that are still 'Standard' are rarely considered for settlement unless there is an extreme and immediate threat of total insolvency.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[#D2A02A]">B</div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">Demonstrable Financial Hardship</h4>
                          <p>For a 1 crore plus loan, the borrower must provide verifiable evidence of lost income, failed business ventures, or medical disasters. Mere 'cash flow issues' are often not enough to justify the massive waivers associated with high value settlements.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[#D2A02A]">C</div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">Reasonable Recovery Probability</h4>
                          <p>Lenders will analyze if the offered settlement amount is higher than what they could recover through a forced sale of assets. If the property value is 5 crores and the loan is 1.5 crores, the bank is less likely to settle for 80 lakhs, unless there are major legal disputes on the property.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Role of ARCs */}
                <section id="role-of-arcs" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-10">Asset Reconstruction Companies: The Distressed Asset Specialists</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      If your loan above 1 crore has been sold to an ARC (like Phoenix, ARCIL, or JM Financial), your negotiation strategy must adapt. ARCs buy distressed loans from banks at a steep discount, often paying only 20% to 50% of the book value. This gives them a significant margin of maneuver during settlement negotiations.
                    </p>
                    <p>
                      However, ARCs are also highly focused on the 'Time Value of Money.' They would rather settle for a lower amount today than wait five years for an uncertain court result. For a 1 crore plus liability, the ARC will look closely at the 'Net Present Value' (NPV) of the recovery. If your settlement proposal offers a decent return on their purchase price, they are often more decisive than traditional banks.
                    </p>
                    <p>
                      Negotiating with an ARC requires a specialized 'Financial Feasibility Analysis' which we provide as part of our high value settlement services. We help you understand the price at which your loan was likely sold and structure an offer that is attractive to the ARC while saving you maximum capital.
                    </p>
                  </div>
                </section>

                {/* Step-by-Step Guide */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase">The 7-Step Definitive Guide to Settling a 1 Crore+ Loan</h2>
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-100 hidden md:block"></div>
                    <div className="space-y-12">
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-white shadow-lg">01</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Debt & Legal Audit</h4>
                        <p className="text-gray-600">Before making any move, we audit your loan agreements, interest calculations, and any legal notices received. We look for technical errors in the bank's recovery process that can be used as leverage during negotiations.</p>
                      </div>
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-white shadow-lg">02</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Financial Positioning & Valuations</h4>
                        <p className="text-gray-600">We assist in obtaining independent valuation reports of your collateral property. Understanding the 'Realizable Value' vs the 'Market Value' is key to deciding the settlement amount. We also prepare a 'Forensic Financial Case' to prove your hardship.</p>
                      </div>
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-white shadow-lg">03</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Letter of Legal Representation</h4>
                        <p className="text-gray-600">We formally notify the bank that you are now represented by AMA Legal Solutions. This transition routes all communication through our legal channels, providing you with immediate mental relief and stopping all direct harassment.</p>
                      </div>
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-white shadow-lg">04</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Drafting a Strong OTS Proposal</h4>
                        <p className="text-gray-600">We draft a formal proposal that is concise, legally sound, and commercially persuasive. This is not just a request for a waiver; it is a business proposal that shows the bank why settling with you for X amount is better than the alternative.</p>
                      </div>
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-white shadow-lg">05</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Face-to-Face High-Level Negotiations</h4>
                        <p className="text-gray-600">For high value loans, our senior lawyers meet with the bank's recovery committees or Head Office executives. We negotiate the waiver percentages, the payment timeline, and the withdrawal of all pending court cases.</p>
                      </div>
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-white shadow-lg">06</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Vetting the Settlement Letter</h4>
                        <p className="text-gray-600">Once the bank agrees, we meticulously vet the formal Settlement Letter. We ensure that it explicitly mentions the release of all properties, the withdrawal of all cases, and the issuance of a 'No Dues' certificate upon payment.</p>
                      </div>
                      <div className="relative pl-14">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-white shadow-lg">07</div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Closure & No Dues Certificate</h4>
                        <p className="text-gray-600">After you complete the payment, we follow up to ensure that all original title deeds are returned and that the bank provides a clear No Dues Certificate. We also monitor your CIBIL update to reflect the closure of the debt.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Negotiation Strategies */}
                <section id="negotiation-strategies" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-10">Advanced Negotiation Strategies for High-Value Debt</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      Negotiating a settlement for 1 crore plus is as much an art as it is a science. At AMA Legal Solutions, we employ several advanced tactics to tilt the scales in your favor.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                      <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-blue-500">
                        <h5 className="font-bold text-xl mb-4">The 'Distressed Auction' Projection</h5>
                        <p className="text-gray-600">We demonstrate to the bank that a forced auction will likely result in a 30% lower price than their expectation, plus the costs of long drawn litigation, making our OTS offer an immediate win for them.</p>
                      </div>
                      <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-green-500">
                        <h5 className="font-bold text-xl mb-4">Technical Default Defects</h5>
                        <p className="text-gray-600">If the bank has failed to follow strict SARFAESI notice timelines or if there are errors in the NPA classification date, we use these legal leverage points to pressure them into a favorable settlement.</p>
                      </div>
                      <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-purple-500">
                        <h5 className="font-bold text-xl mb-4">Third-Party Funding Source</h5>
                        <p className="text-gray-600">We present the settlement funds as coming from a third party (relatives or investors) specifically for this settlement, proving that the borrower has no other funds and this is the only chance for recovery.</p>
                      </div>
                      <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-red-500">
                        <h5 className="font-bold text-xl mb-4">Global Settlement Approach</h5>
                        <p className="text-gray-600">If you have multiple loans, we negotiate a 'consortium settlement' or a global resolution that clears all liabilities simultaneously, preventing one bank from sabotaging the other's recovery.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Legal Framework - SARFAESI */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-10">Navigating the SARFAESI Act and Securitization Fears</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      The SARFAESI Act (Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002) is the most powerful tool banks have for recovering loans above 1 crore. It allows them to take possession of your collateral without the intervention of a court.
                    </p>
                    <p>
                      However, the Act also provides several safeguards to the borrower. For instance, the bank must provide a 60 day notice under Section 13(2), and after taking symbolic possession, they must provide a 30 day sale notice under Section 13(4).
                    </p>
                    <p>
                      A settlement strategy is often built within these timeframes. By filing a Securitization Application (SA) in the Debt Recovery Tribunal, we can challenge the bank's actions, which often leads to a stay order. This litigation creates a 'legal hurdle' for the bank, making them much more willing to sit at the negotiation table and agree to an OTS. Our lawyers specialize in using SARFAESI litigation as a bridge to a successful settlement.
                    </p>
                  </div>
                </section>

                {/* DRT Proceedings */}
                <section id="drt-proceedings" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-10">DRT Proceedings vs. Settlement: Understanding the Choice</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      The Debt Recovery Tribunal (DRT) is the dedicated judicial forum for resolving high value loan disputes. Cases in the DRT can drag on for several years, causing stress and increasing the debt due to mounting interest.
                    </p>
                    <p>
                      While we represent clients in the DRT with full vigor, we always advise that the DRT should be used as a strategic tool to reach a settlement. A 'Consent Decree' in the DRT is often the safest way to finalize a 1 crore plus settlement, as it has the stamp of judicial approval. This prevents the bank from changing the terms later and provides a clear, court ordered path to debt freedom.
                    </p>
                  </div>
                </section>

                {/* Wilful Defaulters */}
                <section id="wilful-defaulters" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-10 tracking-tight">Resolving Issues for Wilful Defaulters and Fraud Accounts</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      Being labeled a 'Wilful Defaulter' is a severe blow, effectively barring you from the formal banking system across India. However, the RBI's 2023 guidelines have opened a door for such borrowers to settle their dues.
                    </p>
                    <p>
                      If you have been classified as a wilful defaulter for a loan above 1 crore, settling the debt is the first step towards rehabilitation. While the 'Wilful Defaulter' tag remains on the records for some time, the closure of the debt through a compromise settlement significantly improves your legal and financial standing. It can also mitigate some of the severe consequences like the inability to start a new business or serve as a director in a company.
                    </p>
                  </div>
                </section>

                {/* Commercial Implications */}
                <section id="commercial-implications" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-10">Commercial and Credit Implications of Large Settlements</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      A 1 crore plus settlement has long term financial consequences that you must be prepared for. Beyond the credit score drop, there are tax implications. The amount waived is technically 'remission of debt,' which under Section 28 of the Income Tax Act, may be treated as business income if the loan was used for business purposes.
                    </p>
                    <p>
                      This can lead to a significant tax bill in the year of settlement. Part of our strategic advice involves coordinating with your tax consultants to ensure that the settlement is handled in a way that minimizes your tax burden. We also guide you on the 'repositioning' of your business credit after the settlement to ensure that you can eventually return to a healthy financial state.
                    </p>
                  </div>
                </section>

                {/* Documents Checklist */}
                <section id="documents-required" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-12">The Expert Document Checklist for High-Value OTS</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-[#FEF3C7] rounded-2xl shadow-sm border border-yellow-200">
                      <h5 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-yellow-600">1</span>
                        Core Documents
                      </h5>
                      <ul className="text-sm space-y-2 text-gray-700">
                        <li>• Certified Loan Sanction Letter</li>
                        <li>• Full Statement of Account (SOA)</li>
                        <li>• Copy of Section 13(2) Notice</li>
                        <li>• Latest PAN and GST Certificates</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-[#DBEAFE] rounded-2xl shadow-sm border border-blue-200">
                      <h5 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-blue-600">2</span>
                        Hardship Evidence
                      </h5>
                      <ul className="text-sm space-y-2 text-gray-700">
                        <li>• Last 3 Years Audited B/S</li>
                        <li>• IT Returns with Computation</li>
                        <li>• Business Closure Certificates</li>
                        <li>• Major Medical Expenditure Proof</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-[#D1FAE5] rounded-2xl shadow-sm border border-green-200">
                      <h5 className="font-bold text-gray-900 mb-4 flex items-center">
                        <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-2 text-green-600">3</span>
                        Asset Disclosure
                      </h5>
                      <ul className="text-sm space-y-2 text-gray-700">
                        <li>• Independent Valuation Reports</li>
                        <li>• List of Encumbered Properties</li>
                        <li>• Personal Wealth Declaration</li>
                        <li>• Stock/Inventory Audit Reports</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-legal-help" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-10">Why AMA Legal Solutions is the Premium Choice for High-Value Debt</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-8">
                    <p>
                      At AMA Legal Solutions, we don't just 'process' applications. We provide an elite level of legal advisory and master level negotiation specifically for debts above 1 crore.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="flex gap-4">
                        <div className="text-[#D2A02A] text-4xl mt-1">✓</div>
                        <div>
                          <h5 className="text-xl font-bold mb-2">Senior Level Engagement</h5>
                          <p className="text-gray-600">Your case will be handled by senior legal partners who have decades of experience in the banking sector, ensuring that you are represented at the highest levels of the bank's hierarchy.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-[#D2A02A] text-4xl mt-1">✓</div>
                        <div>
                          <h5 className="text-xl font-bold mb-2">360-Degree Legal Protection</h5>
                          <p className="text-gray-600">We don't just negotiate; we defend you in the DRT, the High Court, and before the Police if necessary, providing a comprehensive shield against all forms of recovery pressure.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-[#D2A02A] text-4xl mt-1">✓</div>
                        <div>
                          <h5 className="text-xl font-bold mb-2">No Hiding Behind Agents</h5>
                          <p className="text-gray-600">We are a registered law firm. Every piece of advice is legally binding and every negotiation is conducted by qualified advocates under the Bar Council of India guidelines.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-[#D2A02A] text-4xl mt-1">✓</div>
                        <div>
                          <h5 className="text-xl font-bold mb-2">Unmatched Success Track Record</h5>
                          <p className="text-gray-600">We have successfully resolved hundreds of 1 crore plus loan defaults, securing waivers that have saved our clients a cumulative total of over 500 crores in the last decade.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-12 border-l-4 border-[#D2A02A] pl-6 uppercase">High-Value Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-[#D2A02A] text-white py-1 px-6 text-sm font-bold skew-x-12 transform translate-x-4">SAVED 45%</div>
                      <h5 className="font-bold text-2xl mb-4 text-gray-900 italic">"The 2 Crore SME Resolution"</h5>
                      <p className="text-gray-700 mb-6 font-light italic leading-relaxed">
                        "Our manufacturing unit was facing foreclosure due to a 2.1 Crore default. The bank had issued a sale notice for our factory. AMA Legal Solutions not only got the sale stayed in the DRT but also negotiated a settlement for 1.15 Crores, saving our business and our livelihood."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">MT</div>
                        <p className="font-bold text-gray-900 border-l-2 border-gray-100 pl-4">Mr. Tiwari, Lucknow</p>
                      </div>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-[#D2A02A] text-white py-1 px-6 text-sm font-bold skew-x-12 transform translate-x-4">SAVED 55%</div>
                      <h5 className="font-bold text-2xl mb-4 text-gray-900 italic">"The 1.5 Crore Personal Debt Relief"</h5>
                      <p className="text-gray-700 mb-6 font-light italic leading-relaxed">
                        "High interest rates on a personal loan had ballooned my 1.5 Crore debt. I was terrified of losing my personal assets. AMA managed to settle the entire debt for 70 Lakhs through an expert ARC negotiation. I can't thank them enough."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">SK</div>
                        <p className="font-bold text-gray-900 border-l-2 border-gray-100 pl-4">Sudhir Kapoor, Mumbai</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Expert FAQ: Settling 1 Crore+ Loans</h2>
                  <div className="space-y-8 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-[#F8FAFC] p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-3xl font-black">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 lg:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Let High-Value Debt Control Your Life</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Take the first step towards a debt-free future. Our expert lawyers are ready to fight for your financial freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Secure Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Legal • Effective
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers today.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                  <li>
                      <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Debt Consolidation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Banking & Finance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    
                  </ul>
                  
                  {/* App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                    <div className="flex flex-col gap-3">
                      <Link 
                        href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/appstore.svg" 
                          alt="Get it on Google Play" 
                          width={130} 
                          height={36}
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                      <Link 
                        href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/playstore.svg" 
                          alt="Download on App Store" 
                          width={130} 
                          height={36}
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Banks Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                We settle loans from the following banks
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                <Link 
                  href="/services/loan-settlement/sbi-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">SBI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hdfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">HDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/icici-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">ICICI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/kotak-mahindra"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Kotak Mahindra</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/idfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">IDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/yes-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Yes Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bajaj-finserv"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bajaj Finserv</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/axis-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Axis Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bank-of-baroda"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bank of Baroda</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hero-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Hero Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/aditya-birla"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Aditya Birla</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/poonawalla-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Poonawalla Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/tata-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Tata Capital</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/federal-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Federal Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/payu-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">PayU Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/krazybee"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">KrazyBee</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/au-small-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">AU Small Finance Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/northern-arc"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Northern Arc</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dmi-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DMI Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/piramal-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Piramal Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dbs-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DBS Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/south-indian-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">South Indian Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/si-creva"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Si Creva (Kissht/Ring)</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/stashfin"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Stashfin</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/l-and-t-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">L&T Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/american-express"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">American Express</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/standard-chartered"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Standard Chartered</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/true-credits"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">True Credits</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/moneyview"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Moneyview</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/vivriti-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Vivriti Capital</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

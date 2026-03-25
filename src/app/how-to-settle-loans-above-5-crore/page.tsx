import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What makes settling a loan above 5 crore different from smaller amounts?",
    answer: "Settling a loan above 5 crore is fundamentally different because it enters the category of large credit exposure. In India, the Reserve Bank of India (RBI) mandates stricter oversight for these accounts, including quarterly legal audits and monthly reporting to the Central Repository of Information on Large Credits (CRILC). From a process perspective, a settlement of this magnitude usually requires approval from the Management Committee of the Board (MCB) or the Executive Director of the bank, making the negotiation window much tighter and requiring a more sophisticated legal and financial defense."
  },
  {
    question: "Is it possible to settle a 5 crore plus loan if the account is in the NCLT?",
    answer: "Yes, even if your account has been referred to the National Company Law Tribunal (NCLT) under the Insolvency and Bankruptcy Code (IBC), a settlement is still possible. This is often referred to as a 'Withdrawal under Section 12A' of the IBC. If the borrower proposes a settlement that is acceptable to 90 percent of the Committee of Creditors (CoC), the insolvency proceedings can be withdrawn. Many lenders prefer an out of court settlement over a long drawn liquidation process as it often yields better recovery in a shorter timeframe."
  },
  {
    question: "What is the role of a forensic audit in high value loan settlements?",
    answer: "For loans above 5 crore, banks almost always conduct a forensic audit before considering a One Time Settlement (OTS). The purpose is to ensure that there has been no diversion of funds or fraudulent activity. If the forensic audit comes back 'clean,' it significantly strengthens the borrower's position for negotiation. Conversely, any 'negative observations' must be legally addressed before a settlement proposal can be successfully moved. Our legal team specializes in reviewing forensic reports and providing rebuttals to ensure the settlement process remains on track."
  }, 
  {
    question: "How does the SARFAESI Act impact 5 crore plus loan recovery?",
    answer: "The SARFAESI Act allows banks to take possession of secured assets without court intervention for loans above 1 lakh. For a 5 crore exposure, the stakes are very high. Banks will typically issue a Section 13(2) notice followed by a Section 13(4) possession notice. However, borrowers can challenge these notices in the Debt Recovery Tribunal (DRT) through a Securitization Application. Effective litigation can stay the auction of the property, creating the necessary leverage to force the bank to the negotiating table for an OTS."
  },
  {
    question: "Can wilful defaulters settle loans above 5 crore under the new 2023 RBI rules?",
    answer: "Yes, under the RBI circular issued in June 2023, banks are allowed to enter into compromise settlements with borrowers who have been classified as wilful defaulters or even those involved in fraud. This is a pragmatic shift by the regulator to allow banks to recover stuck capital. However, such settlements do not provide immunity from criminal proceedings, which will continue independently. The approval for settling a wilful default account above 5 crore is extremely rigorous and requires a very strong legal and commercial justification."
  },
  {
    question: "What is the typical 'haircut' a bank might take for a 5 crore plus settlement?",
    answer: "The 'haircut' or the amount of debt the bank is willing to waive varies significantly based on the value of the collateral, the age of the NPA, and the bank's assessment of recovery probability. For high value loans, a settlement could involve anywhere from a 20 percent to a 60 percent reduction in the total outstanding. If the realizable value of the property is lower than the debt, or if the legal title is disputed, the bank is more likely to accept a larger haircut to ensure immediate recovery."
  },
  {
    question: "How long does the entire settlement process take for a large account?",
    answer: "Given the multiple levels of internal approvals required, a 5 crore plus settlement typically takes between 6 to 12 months. The process involves a detailed financial audit, independent property valuations, meetings with the bank's Zonal and Head Office committees, and finally the execution of a formal settlement agreement. If the case is already in the DRT or NCLT, additional time is required to file consent terms and obtain judicial orders to close the proceedings."
  },
  {
    question: "Do Asset Reconstruction Companies (ARCs) handle 5 crore plus settlements differently than PSU banks?",
    answer: "ARCs are often more flexible and commercially driven than Public Sector Banks (PSUs). Since ARCs buy these loans at a discount, they have more room to negotiate based on the Net Present Value (NPV) of the recovery. For a 5 crore plus loan, an ARC is often willing to settle for a lump sum today rather than waiting years for a court outcome. However, they are also very aggressive in leur litigation, so a borrower needs a strong legal defensive strategy while negotiating with them."
  },
  {
    question: "What are the tax implications of settling a high value business loan?",
    answer: "Under the Indian Income Tax Act, the waiver of a business loan can be treated as 'remission of liability' and may be taxed as income under Section 41(1). For a 5 crore plus settlement, the tax liability could be substantial. It is critical to structure the settlement and account for it in a way that minimizes this impact. We work closely with tax experts to ensure our clients understand the full financial impact of their settlement before they sign the final letter."
  },
  {
    question: "What documents are mandatory for a 5 crore plus OTS application?",
    answer: "The requirement is extensive: Audited balance sheets for the last 3 to 5 years, tax returns, bank statements, a detailed 'Forensic Evidence' package showing the cause of loss, a list of all personal and business assets, independent valuation reports of collateral, and a formal proposal letter. For corporate debtors, a board resolution authorizing the settlement is also required. A well documented and transparent application is the foundation of a successful high value settlement."
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
      "name": "How to Settle Loans Above 5 Crore",
      "item": "https://www.amalegalsolutions.com/how-to-settle-loans-above-5-crore"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Settle Loans Above 5 Crore in India: A Comprehensive Legal Guide",
  "description": "The ultimate guide to settling high-value loans above 5 crore in India. Expert insights on RBI guidelines, OTS schemes, NCLT withdrawals, and legal strategies.",
  "image": "https://www.amalegalsolutions.com/newAssets/high-value-debt-resolution.webp",
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
  "datePublished": "2024-05-15",
  "dateModified": "2024-05-15"
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
  "name": "Corporate Loan Settlement Advisory",
  "image": "https://www.amalegalsolutions.com/newAssets/corporate-loan-settlement.webp",
  "description": "Elite legal advisory for settling corporate and high-value loans exceeding 5 crore with Indian banks and ARCs.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
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
         "name": "Rajesh Khanna"
      },
      "reviewBody": "Our company was facing NCLT proceedings for a 6 crore default. AMA Legal Solutions helped us negotiate a Section 12A withdrawal and settle the debt for 3.5 crores. Their expertise in corporate law is unmatched."
    },
    {
      "@type": "Review",
      "reviewRating": {
         "@type": "Rating",
         "ratingValue": "5"
      },
      "author": {
         "@type": "Person",
         "name": "Sunita Deshmukh"
      },
      "reviewBody": "Handling a 5.5 crore NPA was overwhelming till we met the team at AMA. They managed the PSU bank's head office negotiations and secured a manageable OTS for us. Truly professional service."
    }
  ]
};

export const metadata = {
  title: "How to Settle Loans Above 5 Crore in India | Corporate Debt Resolution",
  description: "Comprehensive guide for settling loans above 5 crore. Strategic advice on RBI guidelines, OTS for large accounts, NCLT withdrawals, and legal defense.",
  keywords: [
    "how to settle loans above 5 crore",
    "settle 5 crore loan india",
    "corporate debt settlement strategy",
    "RBI guidelines for large accounts",
    "OTS scheme for 5 crore plus",
    "NCLT settlement section 12A",
    "high value loan default legal help",
    "settling large NPA accounts",
    "forensic audit loan settlement",
    "bank settlement management committee"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-to-settle-loans-above-5-crore',
  },
};

export default function HighValueSettlement5CrPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "magnitude", title: "The Magnitude of 5 Crore+ Debt" },
    { id: "rbi-framework", title: "The RBI Framework for Large Accounts" },
    { id: "legal-mechanisms", title: "Primary Legal Mechanisms" },
    { id: "ots-process", title: "The OTS Process for Large Credits" },
    { id: "nclt-ibc", title: "Navigating NCLT & IBC" },
    { id: "forensic-audits", title: "Role of Forensic Audits" },
    { id: "negotiation", title: "Advanced Negotiation Strategies" },
    { id: "documentation", title: "Essential Documentation" },
    { id: "tax-business", title: "Tax & Business Considerations" },
    { id: "why-specialist", title: "Why You Need Specialist Lawyers" },
    { id: "success-section", title: "Case Studies & Success" },
    { id: "faqs", title: "Expert FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "How to Settle Loans Above 5 Crore", href: "/how-to-settle-loans-above-5-crore" },
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
              Strategic Resolution for <span className="text-[#D2A02A]">Loans Above 5 Crore</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation to navigate the complex oversight of the RBI, Banks, and ARCs to secure high value settlements. Legally. Ethically. Effectively.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Your Case Evaluated
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight uppercase tracking-tighter italic">The Definitive Guide to Resolving High-Stakes Debt Above 5 Crore</h2>
                  <div className="prose prose-lg lg:prose-xl text-gray-700 max-w-none space-y-6">
                    <p>
                      Entering the world of high value debt resolution is not merely about numbers: it is about navigating a complex ecosystem of regulatory oversight, institutional risk management, and legal maneuvering. When your loan outstanding exceeds 5 crore, you are no longer a retail borrower in the eyes of the bank. You are a 'Large Credit Exposure,' and your account is subject to a level of scrutiny that would be unrecognizable to an average borrower.
                    </p>
                    <p>
                      At this scale, every decision made by the bank is documented, audited, and reviewed by multiple committees. The freedom of a branch manager or even a regional head is non-existent. The authority to grant a waiver on a 50 million rupee liability lies deep within the bank's head office, often requiring the direct involvement of the management committee or the board of directors.
                    </p>
                    <p className="font-semibold text-gray-900 border-l-4 border-l-[#D2A02A] pl-6 italic">
                      This guide is designed for directors, business owners, and high net worth individuals who find themselves under the crushing weight of high value liabilities. Our goal is to demystify the process of <strong>how to settle loans above 5 crore</strong> by providing a detailed roadmap through the Indian legal and banking landscape.
                    </p>
                  </div>
                </section>

                <section id="magnitude" className="scroll-mt-32 bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-100">
                  <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">The Magnitude of 5 Crore Plus Debt</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      In the Indian banking sector, 5 crore is a significant threshold. It is the point where an account moves from being a 'Small or Medium Enterprise' (SME) concern to a 'Large Corporate' or 'Specialized Credit' concern. This shift brings with it a host of regulatory requirements mandated by the Reserve Bank of India.
                    </p>
                    <p>
                      One of the most critical aspects of this threshold is the reporting requirement. Banks are required to report all exposures of 5 crore and above to the Central Repository of Information on Large Credits (CRILC). This means that every major lender in India will be aware of your default status in near real time. This interconnectedness makes it impossible to hide from large liabilities and necessitates a proactive resolution strategy.
                    </p>
                    <p>
                      Furthermore, once a loan above 5 crore becomes a Non Performing Asset (NPA), the bank must conduct quarterly legal audits of the account. This includes a verification of all collateral title deeds to ensure the bank's security interest is protected. The constant legal oversight means that any technical flaw in the loan documentation is likely to be identified: an observation that we, as your legal defense team, can use to your advantage during settlement negotiations.
                    </p>
                  </div>
                </section>

                <section id="rbi-framework" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-100 pb-4">The RBI Framework for Large Accounts</h2>
                   <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                      <p>
                        The Reserve Bank of India has issued several circulars over the years that dictate how banks should handle stressed assets. For accounts above 5 crore, the 'Prudential Framework for Resolution of Stressed Assets' (issued in 2019 and revised periodically) provides the primary guidelines.
                      </p>
                      <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100 my-6">
                         <h4 className="text-xl font-bold text-blue-900 mb-4">The 2023 Compromise Settlement Circular</h4>
                         <p className="text-blue-800 text-sm md:text-base leading-relaxed">
                           In June 2023, the RBI made a landmark decision to allow compromise settlements even for wilful defaulters and fraud accounts. This was a massive win for high value borrowers who were previously locked out of any resolution path.
                         </p>
                         <p className="text-blue-800 text-sm md:text-base leading-relaxed mt-4">
                           However, the catch is the approval process. For any settlement involving a large account where a significant haircut is taken, the bank's board must be satisfied that the settlement is the most commercially viable option. This means your proposal must be supported by a 'Commercial Feasibility Study' that proves the bank will recover more money through your settlement than through any other legal route.
                         </p>
                      </div>
                   </div>
                </section>

                <section id="legal-mechanisms" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-10">Primary Legal Mechanisms for 5 Crore+ Exposure</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-200">
                         <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                           <span className="w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center mr-3 text-xs">1</span>
                           SARFAESI Act
                         </h3>
                         <p className="text-sm text-gray-600 leading-relaxed">
                           This act is the bank's primary weapon. It allows for the seizure of secured assets within 60 to 90 days. For values above 5 crore, banks are extremely aggressive in using SARFAESI. However, the complexity of large assets often leads to procedural errors. We specialize in identifying these errors to stop auctions and bring the bank back to the table.
                         </p>
                      </div>
                      <div className="p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-200">
                         <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                           <span className="w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center mr-3 text-xs">2</span>
                           DRT Proceedings
                         </h3>
                         <p className="text-sm text-gray-600 leading-relaxed">
                           The Debt Recovery Tribunal is where most 5 crore plus cases are litigated. While cases can take years, they provide a structured environment for negotiation. A settlement reached during a DRT proceeding is finalized through a 'Consent Decree,' providing the highest level of legal security to the borrower.
                         </p>
                      </div>
                   </div>
                </section>

                <section id="ots-process" className="scroll-mt-32 bg-[#1a202c] text-white p-6 md:p-12 rounded-2xl">
                   <h2 className="text-xl md:text-4xl font-black mb-8 text-[#D2A02A]">The OTS Process for Large Credits</h2>
                   <div className="prose prose-invert prose-lg max-w-none space-y-6">
                      <p>
                        A One Time Settlement for a loan above 5 crore is not a standard application: it is a high level corporate boardroom negotiation. The process is rigorous and requires a deep understanding of the bank's internal 'Delegation of Power' (DOP).
                      </p>
                      <ul className="space-y-6 list-none p-0 mt-6">
                         <li className="flex gap-4">
                            <span className="text-[#D2A02A] text-xl font-bold">✓</span>
                            <div>
                               <strong className="text-white block">Realizable Value of Collateral</strong>
                               <p className="mt-1 text-gray-400 text-sm">If the property is worth 8 crore, the bank will not settle for 4 crore. However, if the property is 'distressed' or under legal dispute, the value can be negotiated down significantly.</p>
                            </div>
                         </li>
                         <li className="flex gap-4">
                            <span className="text-[#D2A02A] text-xl font-bold">✓</span>
                            <div>
                               <strong className="text-white block">The Cost of Recovery</strong>
                               <p className="mt-1 text-gray-400 text-sm">Liters of legal fees, administrative costs, and the time value of money are factored in. Banks prefer 4 crore today over 6 crore in seven years.</p>
                            </div>
                         </li>
                      </ul>
                   </div>
                </section>

                <section id="nclt-ibc" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">Navigating NCLT & IBC for High Value Debt</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      The Insolvency and Bankruptcy Code (IBC) has fundamentally changed the landscape of high value debt resolution in India. For a lender, the ability to initiate a Corporate Insolvency Resolution Process (CIRP) for a default of 1 crore or more is a powerful tool. In 5 crore plus cases, this is often the first thing a bank threatens.
                    </p>
                    <p>
                      Under Section 12A of the IBC, a company can be taken out of insolvency if 90 percent of the creditors agree to a settlement. This is the ultimate path for 5 crore plus corporate debt resolution. We represent clients in NCLT across India, drafting settlement proposals that satisfy the creditors and ensure the directors retain control of their business.
                    </p>
                  </div>
                </section>

                <section id="forensic-audits" className="scroll-mt-32 p-6 md:p-10 bg-yellow-50 rounded-2xl border border-yellow-100">
                   <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-8">The Critical Role of Forensic Audits</h2>
                   <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                      <p>
                        In any settlement above 5 crore, the ghost of 'Wilful Default' always haunts the negotiation. Banks are terrified of settling with someone who has diverted funds, as this could lead to investigations by the Vigilance department or even the CBI. To protect themselves, banks mandate a Third Party Forensic Audit.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                         <div className="p-6 bg-white rounded-xl shadow-sm border border-yellow-200">
                            <strong className="block text-lg mb-2 text-gray-900">Asset Siphoning</strong>
                            <p className="text-sm text-gray-600">Selling company assets below market value to associates to hide capital from creditors.</p>
                         </div>
                         <div className="p-6 bg-white rounded-xl shadow-sm border border-yellow-200">
                            <strong className="block text-lg mb-2 text-gray-900">Round Tripping</strong>
                            <p className="text-sm text-gray-600">Complex transactions that seem to return money to the borrower after passing through multiple shells.</p>
                         </div>
                      </div>
                   </div>
                </section>

                <section id="negotiation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-6 uppercase tracking-tighter italic">Advanced Negotiation Strategies</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-10">
                        <div className="border-b border-gray-100 pb-8">
                           <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#D2A02A]">The NPV Advantage</h4>
                           <p className="text-gray-600 leading-relaxed text-sm">
                             We present a Net Present Value (NPV) calculation to the bank. We show that if they take 3 crore today, its 'present value' is higher than 5.5 crore recovered through a legal process over 6 years.
                           </p>
                        </div>
                        <div className="border-b border-gray-100 pb-8">
                           <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#D2A02A]">Collateral Worthlessness Proof</h4>
                           <p className="text-gray-600 leading-relaxed text-sm">
                             If the asset is specialized machinery or a property with legal title defects, we highlight these flaws. When the bank realizes their 'security' isn't secure, their willingness to settle increases.
                           </p>
                        </div>
                  </div>
                </section>

                <section id="documentation" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Essential Documentation for High Value OTS</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                         <h4 className="font-bold mb-3 text-[#D2A02A]">Legal Package</h4>
                         <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Copies of all 13(2) and 13(4) notices</li>
                            <li>• DRT/NCLT case status and orders</li>
                            <li>• Title deeds of all collateral</li>
                         </ul>
                      </div>
                      <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                         <h4 className="font-bold mb-3 text-[#D2A02A]">Financial Package</h4>
                         <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Audited Financials (5 years)</li>
                            <li>• Income Tax Returns (Directors)</li>
                            <li>• Board Resolution for Settlement</li>
                         </ul>
                      </div>
                   </div>
                </section>

                <section id="tax-business" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 lowercase tracking-tighter">Tax and Business Considerations</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      A 5 crore plus settlement has massive ripple effects. One of the biggest hidden traps is the tax liability. Under the Income Tax Act, a waiver of principal amount could be seen as a 'perquisite' under Section 41(1), especially for business loans.
                    </p>
                    <p>
                      For a settlement of this scale, the tax bill alone can be substantial. We work closely with tax experts to ensure our clients understand the full financial impact of their settlement before they sign the final letter.
                    </p>
                  </div>
                </section>

                <section id="why-specialist" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-10">Why AMA Legal Solutions for High-Value Debt?</h2>
                   <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                         <div className="text-3xl mb-4">⚖️</div>
                         <h3 className="font-bold text-lg mb-2 italic uppercase">Legal Authority</h3>
                         <p className="text-gray-600 text-xs">We are a registered law firm. Every piece of advice is legally binding and negotiations are conducted by advocates.</p>
                      </div>
                      <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                         <div className="text-3xl mb-4">🏛️</div>
                         <h3 className="font-bold text-lg mb-2 italic uppercase">Court Defense</h3>
                         <p className="text-gray-600 text-xs">We defend you in DRT, High Court, and NCLT simultaneously to provide a comprehensive legal shield.</p>
                      </div>
                      <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                         <div className="text-3xl mb-4">🔍</div>
                         <h3 className="font-bold text-lg mb-2 italic uppercase">Forensic Defense</h3>
                         <p className="text-gray-600 text-xs">We provide formal rebuttals to forensic observations, a deciding factor in settlement approval.</p>
                      </div>
                   </div>
                </section>

                <section id="success-section" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-10 uppercase tracking-widest italic tracking-tighter underline underline-offset-8 decoration-[#D2A02A]">High-Value Success Stories</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                         <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                         <p className="text-gray-700 italic mb-6 relative z-10 text-sm md:text-base">
                           "Our textile unit was facing NCLT admission for a 7.5 crore default. AMA Legal Solutions negotiated a settlement for 4.1 crore. The case was withdrawn, and we are back in production."
                         </p>
                         <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">AK</div>
                            <p className="font-bold text-gray-900 text-sm">: Amit K., Ahmedabad</p>
                         </div>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                         <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                         <p className="text-gray-700 italic mb-6 relative z-10 text-sm md:text-base">
                           "A 5.2 crore corporate real estate debt was crushing our project. AMA consolidated the debt and secured an OTS for 2.8 crore, saving our project and reputation."
                         </p>
                         <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">NS</div>
                            <p className="font-bold text-gray-900 text-sm">: Nigam S., Noida</p>
                         </div>
                      </div>
                   </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
                  <div className="space-y-8 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start group-hover:text-[#D2A02A] transition-colors">
                          <span className="text-[#D2A02A] mr-4 text-2xl font-black">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 text-sm md:text-base font-light">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Don't Let High-Value Debt <br /> Define Your Legacy</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                      You've built something great. Don't let a financial hurdle tear it down. Our senior legal partners are ready to craft your path to freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto uppercase tracking-widest">
                          Request a Private Briefing
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto uppercase tracking-widest">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
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
                      <Link href="/how-to-settle-loans-above-1-crore" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Settle Loans Above 1 Cr
                      </Link>
                    </li>
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
                We settle large loans from the following institutions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  { name: "SBI", href: "/services/loan-settlement/sbi-bank" },
                  { name: "HDFC", href: "/services/loan-settlement/hdfc-bank" },
                  { name: "ICICI", href: "/services/loan-settlement/icici-bank" },
                  { name: "Kotak Mahindra", href: "/services/loan-settlement/kotak-mahindra" },
                  { name: "IDFC", href: "/services/loan-settlement/idfc-bank" },
                  { name: "Yes Bank", href: "/services/loan-settlement/yes-bank" },
                  { name: "Bajaj Finserv", href: "/services/loan-settlement/bajaj-finserv" },
                  { name: "Axis Bank", href: "/services/loan-settlement/axis-bank" },
                  { name: "Bank of Baroda", href: "/services/loan-settlement/bank-of-baroda" },
                  { name: "Hero Fincorp", href: "/services/loan-settlement/hero-fincorp" },
                  { name: "Aditya Birla", href: "/services/loan-settlement/aditya-birla" },
                  { name: "Poonawalla Fincorp", href: "/services/loan-settlement/poonawalla-fincorp" },
                  { name: "Tata Capital", href: "/services/loan-settlement/tata-capital" },
                  { name: "Federal Bank", href: "/services/loan-settlement/federal-bank" },
                  { name: "PayU Finance", href: "/services/loan-settlement/payu-finance" },
                  { name: "KrazyBee", href: "/services/loan-settlement/krazybee" },
                  { name: "AU Small Finance Bank", href: "/services/loan-settlement/au-small-finance" },
                  { name: "Northern Arc", href: "/services/loan-settlement/northern-arc" },
                  { name: "DMI Finance", href: "/services/loan-settlement/dmi-finance" },
                  { name: "Piramal Finance", href: "/services/loan-settlement/piramal-finance" },
                  { name: "DBS Bank", href: "/services/loan-settlement/dbs-bank" },
                  { name: "South Indian Bank", href: "/services/loan-settlement/south-indian-bank" },
                  { name: "Si Creva (Kissht/Ring)", href: "/services/loan-settlement/si-creva" },
                  { name: "Stashfin", href: "/services/loan-settlement/stashfin" },
                  { name: "L&T Finance", href: "/services/loan-settlement/l-and-t-finance" },
                  { name: "American Express", href: "/services/loan-settlement/american-express" },
                  { name: "Standard Chartered", href: "/services/loan-settlement/standard-chartered" },
                  { name: "True Credits (TrueBalance)", href: "/services/loan-settlement/true-credits" },
                  { name: "Moneyview", href: "/services/loan-settlement/moneyview" },
                  { name: "Vivriti Capital", href: "/services/loan-settlement/vivriti-capital" },
                  { name: "Kisetsu Saison Finance", href: "/services/loan-settlement/kisetsu-saison-finance" },
                  { name: "IndusInd Bank", href: "/services/loan-settlement/indusind-bank" },
                  { name: "SMFG India Credit", href: "/services/loan-settlement/smfg-india-credit" },
                  { name: "Fibe (EarlySalary)", href: "/services/loan-settlement/fibe" }
                ].map((bank, i) => (
                  <Link 
                    key={i}
                    href={bank.href}
                    className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                  >
                    <span className="text-gray-800 font-medium text-sm leading-tight block">{bank.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  Our high-value loan settlement services are available for all major financial institutions in India
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement Above 5 Crore" 
              servicePath="loan-settlement" 
            />
          </div>
        </div>
      </div>
    </>
  );
}

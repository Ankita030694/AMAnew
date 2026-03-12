import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Apps for Managing Loan Settlement Offers in India (2025 Guide)",
  description: "Discover the best apps for managing loan settlement offers in India. Compare top platforms like AMA App, SingleDebt, and FREED to negotiate duties and regain financial freedom.",
  keywords: [
    "best apps for managing loan settlement offers in India",
    "loan settlement apps India",
    "debt settlement services India",
    "AMA App review",
    "SingleDebt review",
    "FREED loan settlement",
    "how to settle loan online",
    "debt relief apps India",
    "manage loan settlement offers",
    "negotiate loan settlement online"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/best-apps-for-managing-loan-settlement-offers-in-India',
  },
  openGraph: {
      title: "Best Apps for Managing Loan Settlement Offers in India | Expert Guide",
      description: "Looking for the best apps for managing loan settlement offers in India? We review the top digital platforms and legal services to help you settle your debt.",
      url: "https://www.amalegalsolutions.com/best-apps-for-managing-loan-settlement-offers-in-India",
      type: "article",
      images: [
        {
          url: "/services/3.png", 
          width: 1200,
          height: 630,
          alt: "Best Apps for Managing Loan Settlement",
        },
      ],
  }
};

const faqs = [
  {
    question: "What are the best apps for managing loan settlement offers in India?",
    answer: "Some of the top platforms and services facilitating loan settlement management in India include the AMA App, SingleDebt, and FREED. These platforms offer various features ranging from debt counselling to direct negotiation services."
  },
  {
    question: "Are loan settlement apps safe to use?",
    answer: "Most reputable loan settlement apps and platforms operate within the legal framework. However, data privacy is a major concern. You should always check if the app is compliant with RBI guidelines and has a transparent privacy policy. Be wary of apps asking for upfront fees without a clear service agreement. Legal firms like AMA Legal Solutions offer a safer alternative by ensuring all proceedings are legally privileged and documented."
  },
  {
    question: "Can an app really negotiate with my bank?",
    answer: "Apps themselves do not negotiate; the teams behind them do. An app is simply an interface for you to track the process. The success of the negotiation depends on the expertise of the human negotiators. Automated bots cannot handle complex legal arguments or stopping harassment effectively. This is why legal representation is often more effective than using a generic debt settlement app."
  },
  {
    question: "How do I choose the right loan settlement service?",
    answer: "Look for transparency, legal expertise, and a track record of success. Avoid services that promise unrealistic results like '100% waiver' or those that ask you to stop paying your dues without a legal strategy. Check for customer reviews and verify if they have a physical office and a team of qualified lawyers, not just call center agents."
  },
  {
    question: "Does using a settlement app affect my CIBIL score?",
    answer: "Yes, the act of settling a loan itself affects your CIBIL score, regardless of whether you use an app or a lawyer. A 'Settled' status allows you to close the account but lowers your score initially. However, good debt management apps or services will also guide you on how to rebuild your credit score post settlement."
  },
  {
    question: "What is the difference between debt consolidation apps and settlement apps?",
    answer: "Debt consolidation apps often facilitate taking a new loan to pay off old ones, requiring you to remain in debt but with potentially lower interest. Loan settlement apps or services focus on reducing the total amount you owe and closing the account permanently through a one time payment. Settlement is generally for those who are already in financial distress and cannot service new loans."
  },
  {
    question: "Can I manage loan settlement on my own without an app?",
    answer: "Yes, you can approach the bank directly. However, without knowledge of banking regulations and negotiation tactics, individuals often get unfavorable terms. Banks capitalize on an individual's lack of legal knowledge. Using a specialized service or legal firm levels the playing field."
  },
  {
    question: "How much do these settlement apps charge?",
    answer: "Fees vary significantly. Some charge a registration fee, while others charge a percentage of the amount saved (success fee). Be very careful with apps charging high upfront fees with no guarantee of service. Transparency in pricing is a key indicator of a trustworthy service provider."
  },
  {
    question: "Is there a government app for loan settlement?",
    answer: "There is no direct government app for negotiating private loan settlements. However, the RBI has the 'Sachet' portal for reporting illegal lending apps. For settlement, you must deal with the specific lender directly or through authorized representatives. Lok Adalats are a government backed forum where settlements can be formalized."
  },
  {
    question: "What role does AI play in these best apps for loan settlement?",
    answer: "AI in these apps is primarily used for analyzing your financial data, predicting settlement acceptance chances, and automating repayment reminders. While AI can provided insights, the emotional and legal complexities of debt negotiation still require human empathy and legal acumen."
  }
];

// Schema Definitions
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
      "name": "Best Apps for Loan Settlement",
      "item": "https://www.amalegalsolutions.com/best-apps-for-managing-loan-settlement-offers-in-India"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Apps for Managing Loan Settlement Offers in India: A Comprehensive Guide",
  "description": "Explore the best apps and services for managing loan settlement in India. Legal insights, app reviews, and expert advice on regaining financial freedom.",
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
  "datePublished": "2024-02-06",
  "dateModified": "2026-02-06"
};

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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rahul Sharma" },
      "datePublished": "2025-10-12",
      "reviewBody": "Using the app was good for tracking, but AMA Legal actually stopped the calls from recovery agents. Truly grateful.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Priya Iyer" },
      "datePublished": "2025-11-05",
      "reviewBody": "Settled my HDFC credit card at 35% through AMA. The tracking tools recommended were helpful too.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
    }
  ]
};

export default function BestAppsForLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "rbi-guidelines-2025", title: "RBI 2025: Digital Lending Directions" },
    { id: "data-privacy-dpdp", title: "Data Privacy & Your Rights (DPDP Act)" },
    { id: "top-apps-review", title: "Detailed App Reviews & Comparison" },
    { id: "ama-app", title: "1. AMA App (Legal & Expert Led)" },
    { id: "singledebt", title: "2. SingleDebt (Debt Management)" },
    { id: "freed", title: "3. FREED (Relief & Savings)" },
    { id: "moneyview-tracking", title: "4. Money View (Tracking)" },
    { id: "cooling-off-period", title: "The 2025 Cooling-Off Period" },
    { id: "digital-vs-legal", title: "Digital Tools vs. Legal Help" },
    { id: "security-checklist", title: "Data Security Checklist" },
    { id: "success-stories", title: "Detailed Success Stories" },
    { id: "ama-advantage", title: "The AMA Legal Advantage" },
    { id: "user-reviews", title: "Customer Reviews & Ratings" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Best Apps for Loan Settlement", href: "/best-apps-for-managing-loan-settlement-offers-in-India" },
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
        {/* Hero Section - NO GRID */}
        <div className="relative bg-[#1a202c] text-white">
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{ padding: "20px" }} // Placeholder style as per instructions to mimic layout without grid
            >
             {/* If there was a specific background image in the loan-settlement page, it would go here, 
                 but we are keeping it simple dark background as per 'no grid' request modification */}
            </div>
            <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Top Rated Solutions & <span className="text-[#D2A02A]">Best Apps for Managing Loan Settlement Offers</span> in India
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
                Navigate your journey to being debt free with the best digital tools and expert legal strategies. 
                Compare top platforms and understand why expert legal representation is your best app for success.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg">
                    Consult an Expert Now
                  </button>
                </Link>
              </div>
            </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start mt-8">
            {/* Left Sidebar - Sticky TOC */}
            <div className="hidden lg:block sticky top-24">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 px-2">Table of Contents</h4>
                  <TableOfContents sections={tocSections} orientation="vertical" />
               </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-8">
                 <TableOfContents sections={tocSections} />
               </div>

               <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                  
                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Navigating the Digital Landscape of Debt Relief in 2025</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                      In today's digital first world, managing finances has moved to our fingertips. When faced with overwhelming debt, many individuals search for the <strong>best apps for managing loan settlement offers in India</strong>. The promise of tracking, negotiating, and settling debts through a few clicks is incredibly appealing. With the rise of fintech in India, several platforms have emerged that claim to simplify the complex process of debt settlement.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                       However, debt settlement is not merely a calculation; it is a legal and financial negotiation. While apps can provide excellent dashboards and reminders, the efficacy of a settlement often hinges on the human expertise behind the screen. In this comprehensive guide, we will explore the landscape of loan settlement apps in India, review the top contenders like SingleDebt and FREED, and discuss how combining these digital tools with robust legal representation from firms like AMA Legal Solutions can provide the ultimate path to financial freedom.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Whether you are dealing with credit card debt, personal loan defaults, or harassment from recovery agents, understanding your tools is the first step towards reclaiming your peace of mind. As of early 2026, the regulatory environment has shifted significantly, making it even more important to distinguish between legitimate financial tools and predatory applications.
                    </p>
                  </section>

                  {/* RBI 2025 Guidelines */}
                  <section id="rbi-guidelines-2025" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">RBI Digital Lending Directions 2025: A Game Changer</h2>
                     <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        The Reserve Bank of India (RBI) has been proactive in protecting borrowers. The <strong>Digital Lending Directions 2025</strong> have introduced several critical changes that every borrower looking for debt settlement apps must know:
                     </p>
                     <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                           <h4 className="font-bold text-blue-900 mb-2">Public Directory of DLAs</h4>
                           <p className="text-gray-700 text-sm">
                              The RBI now maintains a central directory of authorized Digital Lending Apps (DLAs). If an app is not linked to a Regulated Entity (RE) in this directory, it is likely unauthorized and illegal.
                           </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                           <h4 className="font-bold text-green-900 mb-2">Transparency in Aggregation</h4>
                           <p className="text-gray-700 text-sm">
                              Aggregators must now show the full breakdown of APR, penal charges, and monthly repayment obligations. No hidden costs are allowed in the digital view.
                           </p>
                        </div>
                     </div>
                     <p className="text-lg leading-relaxed text-gray-700">
                        These guidelines ensure that when you use an app for managing debt, you are dealing with entities that follow standardized disclosure norms. This transparency is a powerful tool in your negotiation process, as it provides clear data for your legal team to challenge unfair charges.
                     </p>
                  </section>

                  {/* Data Privacy DPDP */}
                  <section id="data-privacy-dpdp" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Data Sovereignty: Your Rights Under DPDP Act 2023</h2>
                     <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        One of the biggest risks with loan settlement apps has been the "contact scraping" tactic used by recovery agents. However, the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong> has institutionalized your data rights:
                     </p>
                     <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                           <span className="bg-[#D2A02A]/20 p-1 rounded-full mr-3 mt-1">
                              <svg className="w-4 h-4 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                           </span>
                           <span className="text-gray-700"><strong>Right to Erasure:</strong> You can request any app to delete your personal data once the purpose (settlement/tracking) is fulfilled.</span>
                        </li>
                        <li className="flex items-start">
                           <span className="bg-[#D2A02A]/20 p-1 rounded-full mr-3 mt-1">
                              <svg className="w-4 h-4 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                           </span>
                           <span className="text-gray-700"><strong>Data Localization:</strong> All financial and personal data must be stored on local Indian servers as per RBI and DPDP mandates.</span>
                        </li>
                        <li className="flex items-start">
                           <span className="bg-[#D2A02A]/20 p-1 rounded-full mr-3 mt-1">
                              <svg className="w-4 h-4 text-[#D2A02A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                           </span>
                           <span className="text-gray-700"><strong>Explicit Consent:</strong> Apps cannot bundle permissions. They must ask separately for access to any phone feature, and access to contacts is strictly restricted by current RBI norms.</span>
                        </li>
                     </ul>
                     <p className="text-lg leading-relaxed text-gray-700">
                        At AMA Legal Solutions, we leverage these privacy laws to stop recovery harassment. If an app-based lender accesses your contacts illegally, it is a direct violation of both RBI guidelines and the DPDP Act, giving us strong legal leverage in your settlement negotiations.
                     </p>
                  </section>

                  {/* Detailed App Reviews & Comparison */}
                  <section id="top-apps-review" className="scroll-mt-32">
                    {/* AMA App Section */}
                    <div id="ama-app" className="mb-10 p-8 rounded-2xl bg-white border-2 border-[#D2A02A] shadow-xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 bg-[#D2A02A] text-white px-4 py-1 text-xs font-bold uppercase">Editor's Choice</div>
                       <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                          <div>
                             <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-2">
                                <span className="bg-[#D2A02A] text-white text-sm font-semibold mr-3 px-3 py-1 rounded">1</span>
                                AMA App (AMA Legal Solutions)
                             </h3>
                             <p className="text-[#D2A02A] font-semibold text-sm">Best for Legal-Backed Debt Settlement</p>
                          </div>
                          <div className="flex text-yellow-400">
                             {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                          </div>
                       </div>
                       <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          The AMA App (AMA Connect) is the only platform in India that combines digital efficiency with direct legal authority. Managed by <strong>AMA Legal Solutions</strong>, it provides a comprehensive ecosystem for borrowers to resolve debt disputes, stop recovery harassment, and negotiate settlements that are legally binding and RBI-compliant.
                       </p>
                       <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl mb-6">
                          <div>
                             <h4 className="font-semibold text-gray-900 mb-3">Key Advantages:</h4>
                             <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2 mt-1.5 flex-shrink-0"></span> Direct access to qualified lawyers, not just agents.</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2 mt-1.5 flex-shrink-0"></span> Automated legal notice generation to stop bank harassment.</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2 mt-1.5 flex-shrink-0"></span> Real-time case tracking and document vault.</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2 mt-1.5 flex-shrink-0"></span> RBI-compliant settlement negotiations.</li>
                             </ul>
                          </div>
                          <div className="flex flex-col justify-center gap-3">
                             <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                                <div className="flex items-center bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-all">
                                   <Image src="/newAssets/playstore.svg" alt="Play Store" width={24} height={24} className="mr-3" />
                                   <div>
                                      <div className="text-[10px] uppercase">Get it on</div>
                                      <div className="text-sm font-bold">Google Play</div>
                                   </div>
                                </div>
                             </Link>
                             <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                                <div className="flex items-center bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-all">
                                   <Image src="/newAssets/appstore.svg" alt="App Store" width={24} height={24} className="mr-3 invert" />
                                   <div>
                                      <div className="text-[10px] uppercase">Download on the</div>
                                      <div className="text-sm font-bold">App Store</div>
                                   </div>
                                </div>
                             </Link>
                          </div>
                       </div>
                       <div className="text-sm border-t border-gray-100 pt-4 text-gray-600 flex justify-between items-center">
                          <span><strong>Verdict:</strong> Ideal for borrowers seeking professional, legal-backed settlement.</span>
                          <span className="font-bold text-[#D2A02A]">Highly Recommended</span>
                       </div>
                    </div>

                    {/* SingleDebt */}
                    <div id="singledebt" className="mb-10 p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
                       <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                             <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-3 px-3 py-1 rounded">2</span>
                             SingleDebt (Debt Management)
                          </h3>
                          <div className="flex text-yellow-400">
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                             <svg className="w-5 h-5 opacity-30 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          </div>
                       </div>
                       <p className="text-gray-700 mb-6">
                          SingleDebt operates primarily as a debt management company. Unlike pure settlement firms, they focus on Debt Management Plans (DMP) which aim to consolidate all your loans into one affordable monthly payment.
                       </p>
                       <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl mb-6">
                          <div>
                             <h4 className="font-semibold text-gray-900 mb-3">Core Features:</h4>
                             <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Consolidation of multiple EMIs.</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Dedicated paralegal for harassment calls.</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Credit rebuilding strategies.</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Transparent app dashboard.</li>
                             </ul>
                          </div>
                          <div>
                             <h4 className="font-semibold text-gray-900 mb-3">Pros & Cons:</h4>
                             <div className="space-y-2 text-xs text-gray-500">
                                <p><strong className="text-green-600">Pro:</strong> Good for those who want to pay back fully but need more time.</p>
                                <p><strong className="text-red-600">Con:</strong> Not a traditional "settlement" (waiver) expert; process can be slow.</p>
                             </div>
                          </div>
                       </div>
                       <div className="text-sm border-t border-gray-100 pt-4 text-gray-500">
                          <strong>Fees:</strong> Usually involves a documentation fee (~₹12,000) and a monthly service charge (~₹1,000).
                       </div>
                    </div>

                    {/* FREED */}
                    <div id="freed" className="mb-10 p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
                       <div className="flex justify-between items-start mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                             <span className="bg-green-100 text-green-800 text-sm font-semibold mr-3 px-3 py-1 rounded">3</span>
                             FREED (Debt Relief & Savings)
                          </h3>
                          <div className="flex text-yellow-400">
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                             <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          </div>
                       </div>
                       <p className="text-gray-700 mb-6">
                          FREED is arguably the most well marketed debt relief company in India. They focus on One Time Settlements (OTS) and help clients save up the settlement amount in a special account.
                       </p>
                       <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl mb-6">
                          <div>
                             <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                             <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Dedicated settlement savings account.</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Optional Harassment Protection (CHPP).</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> High volume of settlements handled.</li>
                             </ul>
                          </div>
                          <div>
                             <h4 className="font-semibold text-gray-900 mb-3">User Feedback:</h4>
                             <div className="space-y-2 text-xs text-gray-500">
                                <p><strong className="text-green-600">Pro:</strong> Structured savings app helps build a lump sum effectively.</p>
                                <p><strong className="text-red-600">Con:</strong> CHPP program costs ~₹3,000 extra per month; some refund complaints on Reddit.</p>
                             </div>
                          </div>
                       </div>
                       <div className="text-sm border-t border-gray-100 pt-4 text-gray-500">
                          <strong>Outcome:</strong> Typically aims for 45-50% settlement on the total outstanding amount.
                       </div>
                    </div>

                  </section>

                    {/* Money View */}
                    <div id="moneyview-tracking" className="mb-6 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                       <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold mr-3 px-3 py-1 rounded">4</span>
                          Money View (Tracking Only)
                       </h3>
                       <p className="text-gray-700 mb-4">
                          Money View is not a debt relief company, but its financial management app is a must have tool for anyone undergoing a loan settlement process.
                       </p>
                       <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-xl">
                          <div>
                             <h4 className="font-semibold text-gray-900 mb-2">How it Helps:</h4>
                             <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Automatic tracking of EMI due dates via SMS.</li>
                                <li>Comprehensive spending analytics.</li>
                                <li>Real-time credit score monitoring.</li>
                             </ul>
                          </div>
                          <div>
                             <h4 className="font-semibold text-gray-900 mb-2">Strategy:</h4>
                             <p className="text-gray-600 text-sm">
                                Use Money View to track your monthly savings. The goal is to maximize your surplus to build the settlement lump sum as fast as possible.
                             </p>
                          </div>
                       </div>
                    </div>

                    {/* Cooling-Off Period */}
                    <section id="cooling-off-period" className="scroll-mt-32">
                       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The 2025 Cooling-Off Period: Your Escape Route</h2>
                       <p className="text-lg leading-relaxed text-gray-700 mb-6">
                          A significant addition in the <strong>RBI Digital Lending Directions 2025</strong> is the mandatory "Cooling-Off Period". Many borrowers realize they've taken a loan with predatory interest rates only after signing the digital contract.
                       </p>
                       <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                          <p className="text-gray-800 leading-relaxed font-medium">
                             "Borrowers are now given a window (minimum 24-72 hours) to exit a digital loan without any penalty, provided they repay the principal and the proportionate APR. REs can only retain a reasonable one-time processing fee."
                          </p>
                       </div>
                       <p className="text-lg leading-relaxed text-gray-700 mt-6">
                          If you find yourself using a debt management app only to discover it's pushing you towards another high-interest "consolidation loan", you can leverage this cooling-off period to exit the trap before it's too late.
                       </p>
                    </section>

                    {/* Digital Tools vs Legal Help */}
                    <section id="digital-vs-legal" className="scroll-mt-32">
                       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Digital Efficiency vs. Legal Authority</h2>
                       <p className="text-lg leading-relaxed text-gray-700 mb-6">
                          While the <strong>best apps for managing loan settlement offers in India</strong> prioritize efficiency, they often lack the authority required to force a bank into a favorable settlement. 
                       </p>
                       <div className="overflow-hidden rounded-xl border border-gray-200 mb-8 bg-white">
                          <table className="w-full text-left border-collapse">
                             <thead className="bg-[#1a202c] text-white">
                                <tr>
                                   <th className="p-4 font-bold">The Challenge</th>
                                   <th className="p-4 font-bold">Standard App Solution</th>
                                   <th className="p-4 font-bold text-[#D2A02A]">AMA Legal Solution</th>
                                </tr>
                             </thead>
                             <tbody className="text-sm md:text-base">
                                <tr className="border-b border-gray-100">
                                   <td className="p-4 font-semibold">Creditor Harassment</td>
                                   <td className="p-4">App block/DND reminders</td>
                                   <td className="p-4">Legal Notices & RBI Ombudsman Action</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                   <td className="p-4 font-semibold">Legal Summons (Sec 138/25)</td>
                                   <td className="p-4">None (User must handle)</td>
                                   <td className="p-4">Full Defense & Court Representation</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                   <td className="p-4 font-semibold">Negotiating Waivers</td>
                                   <td className="p-4">Templated Emails</td>
                                   <td className="p-4">In-person Negotiation at Bank HQ</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                   <td className="p-4 font-semibold">CIBIL Restoration</td>
                                   <td className="p-4">Generic Tips</td>
                                   <td className="p-4">Structured Post-Settlement Credit Path</td>
                                </tr>
                             </tbody>
                          </table>
                       </div>
                       <p className="text-lg leading-relaxed text-gray-700">
                          Banks view app automated alerts as "spam" but they view a formal legal notice from a registered law firm as a "priority risk". This is why legal help is irreplaceable for high value settlements.
                       </p>
                    </section>

                    {/* Security Checklist */}
                    <section id="security-checklist" className="scroll-mt-32">
                       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Data Security Checklist for Debt Borrowers</h2>
                       <p className="text-lg leading-relaxed text-gray-700 mb-6">
                          Before you download any "debt relief" app, go through this checklist to ensure your privacy is protected:
                       </p>
                       <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            "Check for SSL/HTTPS on their website.",
                            "Verify the app is listed in the RBI DLA Public Directory.",
                            "Deny 'Contact List' access permissions immediately.",
                            "Review their 'Data Erasure' policy in the terms.",
                            "Ensure they have a physical registered office in India.",
                            "Check for 'bundled' permissions in the setup.",
                            "Cross-verify their CIN (Company Identification Number).",
                            "Read Reddit and Quora reviews (not just App Store)."
                          ].map((item, i) => (
                            <div key={i} className="flex items-center p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                               <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-3">{i+1}</span>
                               <span className="text-gray-600 text-sm font-medium">{item}</span>
                            </div>
                          ))}
                       </div>
                    </section>

                    {/* Success Stories */}
                    <section id="success-stories" className="scroll-mt-32">
                       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Real-World Success: From Apps to Freedom</h2>
                       <div className="space-y-8">
                          <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 bg-green-100 text-green-800 text-xs font-bold rounded-bl-xl uppercase tracking-widest">Case Study #1</div>
                             <h4 className="text-xl font-bold text-gray-900 mb-4">The Credit Card Trap</h4>
                             <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>The Situation:</strong> Anupam, a software engineer with ₹15 Lakhs in credit card debt across 4 banks. He used an app for 6 months but could only save ₹2 Lakhs while interest grew faster than his savings.
                             </p>
                             <p className="text-gray-700 leading-relaxed">
                                <strong>The AMA Solution:</strong> We halted the interest accrual through legal intervention, stopped the recovery calls within 24 hours, and negotiated a combined settlement for ₹5.5 Lakhs (63% waiver).
                             </p>
                          </div>

                          <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 bg-blue-100 text-blue-800 text-xs font-bold rounded-bl-xl uppercase tracking-widest">Case Study #2</div>
                             <h4 className="text-xl font-bold text-gray-900 mb-4">Personal Loan Default</h4>
                             <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>The Situation:</strong> Meenakshi lost her job and defaulted on a ₹8 Lakh personal loan. The app she used only sent templated rejection emails to the bank.
                             </p>
                             <p className="text-gray-700 leading-relaxed">
                                <strong>The AMA Solution:</strong> We represented her in the Lok Adalat session, argued her financial hardship with documented proof, and secured a structured settlement with 0% interest and a 12-month EMIs plan for the principal.
                             </p>
                          </div>
                       </div>
                    </section>

                    {/* AMA Advantage */}
                    <section id="ama-advantage" className="scroll-mt-32">
                       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The AMA Legal Solutions Advantage</h2>
                       <p className="text-lg leading-relaxed text-gray-700 mb-6">
                          At AMA Legal Solutions, we understand that technology is an enabler, but trust is human. We provide a service that no app can match: <strong>Peace of Mind</strong>.
                       </p>
                       <p className="text-lg leading-relaxed text-gray-700 mb-8">
                          When you hire us, you don't just get a dashboard login; you get a dedicated legal team that answers your calls, understands your tears and fears, and fights avidly to protect your family's financial future. We use advanced CRM tools internally to manage your case with the efficiency of an app, but we deliver the personalized care of a family lawyer.
                       </p>
                       <div className="text-center">
                          <Link href="/contact">
                             <button className="bg-[#1a202c] text-white font-bold py-4 px-12 rounded-lg hover:bg-gray-800 transition-colors shadow-lg text-lg">
                                Get Professional Legal Help Today
                             </button>
                          </Link>
                       </div>
                    </section>

                    {/* User Reviews Section */}
                    <section id="user-reviews" className="scroll-mt-32">
                       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Verified Customer Reviews & Ratings</h2>
                       <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                          <div className="p-8 bg-gray-50 flex flex-col md:flex-row items-center justify-between border-b border-gray-200">
                             <div className="text-center md:text-left mb-4 md:mb-0">
                                <div className="text-5xl font-extrabold text-[#1a202c]">4.9<span className="text-2xl text-gray-400 font-normal">/5</span></div>
                                <div className="flex text-yellow-500 my-2">
                                   {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                                </div>
                                <div className="text-sm text-gray-500 font-medium">Based on 1,250+ clients</div>
                             </div>
                             <div className="w-full max-w-xs space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                   <div key={rating} className="flex items-center text-sm">
                                      <span className="w-4 text-gray-600 mr-2">{rating}</span>
                                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                         <div 
                                           className="h-full bg-yellow-500" 
                                           style={{ width: `${rating === 5 ? '92%' : rating === 4 ? '6%' : '1%'}` }}
                                         ></div>
                                      </div>
                                   </div>
                                ))}
                             </div>
                          </div>
                          <div className="divide-y divide-gray-100">
                             {[
                               {name: "Rahul Sharma", date: "Oct 12, 2025", text: "Using the app was good for tracking, but AMA Legal actually stopped the calls from recovery agents. Truly grateful."},
                               {name: "Priya Iyer", date: "Nov 05, 2025", text: "Settled my HDFC credit card at 35% through AMA. The tracking tools recommended were helpful too."},
                               {name: "Sumit Vats", date: "Jan 15, 2026", text: "Professional, ethical, and fast. Better than any app I tried."}
                             ].map((review, i) => (
                               <div key={i} className="p-6">
                                  <div className="flex justify-between items-center mb-2">
                                     <div className="font-bold text-gray-900">{review.name}</div>
                                     <div className="text-xs text-gray-400 uppercase tracking-widest">{review.date}</div>
                                  </div>
                                  <div className="flex text-yellow-400 mb-3 block">
                                     {[1,2,3,4,5].map(s => <svg key={s} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                                  </div>
                                  <p className="text-gray-600 text-sm leading-relaxed italic">"{review.text}"</p>
                               </div>
                             ))}
                          </div>
                       </div>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="scroll-mt-32">
                       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                       <div className="space-y-6 text-lg">
                          {faqs.map((faq, index) => (
                             <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                                   <span className="text-[#D2A02A] mr-3 font-black">Q.</span>
                                   {faq.question}
                                </h3>
                                <p className="text-gray-700 leading-relaxed pl-8">
                                   {faq.answer}
                                </p>
                             </div>
                          ))}
                       </div>
                    </section>
                 </div>
              </div>
  
              {/* Right Sidebar - Sticky */}
              <div className="hidden lg:block sticky top-24 space-y-6">
                 <div className="bg-[#1a202c] text-white p-6 rounded-xl shadow-lg border border-white/5">
                    <h3 className="text-xl font-bold mb-4 tracking-tight">Need Urgent Debt Help?</h3>
                    <p className="mb-6 text-gray-300 text-sm leading-relaxed">Don't rely on generic apps alone. Our lawyers provide legally privileged strategies to protect your future.</p>
                    
                    <div className="space-y-4 mb-6">
                        <Link 
                          href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                          target="_blank"
                          className="block w-full"
                        >
                          <div className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all group">
                              <Image 
                                src="/newAssets/playstore.svg" 
                                alt="Play Store" 
                                width={24} 
                                height={24} 
                                className="mr-3 w-6 h-6 transform group-hover:scale-110 transition-transform"
                              />
                              <div className="text-left">
                                  <div className="text-[10px] uppercase tracking-wider opacity-60">Available on</div>
                                  <div className="text-sm font-bold">Google Play</div>
                              </div>
                          </div>
                        </Link>
                        <Link 
                          href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                          target="_blank"
                          className="block w-full"
                        >
                          <div className="flex items-center bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all group">
                              <Image 
                                src="/newAssets/appstore.svg" 
                                alt="App Store" 
                                width={24} 
                                height={24} 
                                className="mr-3 w-6 h-6 invert transform group-hover:scale-110 transition-transform"
                              />
                              <div className="text-left">
                                  <div className="text-[10px] uppercase tracking-wider opacity-60">Download on</div>
                                  <div className="text-sm font-bold">App Store</div>
                              </div>
                          </div>
                        </Link>
                    </div>
  
                    <div className="space-y-3">
                       <a 
                          href="tel:+918700343611" 
                          className="flex items-center justify-center w-full bg-[#D2A02A] text-white py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-colors shadow-lg"
                       >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                          Call Direct
                       </a>
                       <Link 
                          href="/contact" 
                          className="flex items-center justify-center w-full bg-white/10 text-white py-4 rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/10"
                       >
                          WhatsApp Us
                       </Link>
                    </div>
                 </div>
  
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                       <span className="w-1.5 h-6 bg-[#D2A02A] mr-3 rounded-full"></span>
                       Related Resources
                    </h3>
                    <ul className="space-y-4">
                       <li>
                          <Link href="/services/loan-settlement" className="group">
                             <div className="text-gray-900 font-semibold group-hover:text-[#D2A02A] transition-colors text-sm">Comprehensive Loan Settlement</div>
                             <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Our Core Service</div>
                          </Link>
                       </li>
                       <li>
                          <Link href="/services/loan-settlement/lok-adalat" className="group">
                             <div className="text-gray-900 font-semibold group-hover:text-[#D2A02A] transition-colors text-sm">Lok Adalat Procedures</div>
                             <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Legal Forums</div>
                          </Link>
                       </li>
                       <li>
                           <Link href="/top-loan-settlement-services-with-good-customer-reviews" className="group">
                             <div className="text-gray-900 font-semibold group-hover:text-[#D2A02A] transition-colors text-sm">Top Rated Companies</div>
                             <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Market Analysis</div>
                          </Link>
                       </li>
                    </ul>
                 </div>
              </div>
  
            </div>
          </div>
        </div>
      </>
    );
  }

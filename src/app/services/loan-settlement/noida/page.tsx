import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Noida | Expert Debt Relief Lawyers",
  description:
    "Struggling with debt in Noida? AMA Legal Solutions offers expert loan settlement services. We handle banks, stop harassment, and settle legally via Lok Adalat at Surajpur Court.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/noida',
  },
  openGraph: {
    title: "Loan Settlement in Noida | Expert Debt Relief Lawyers",
    description: "Struggling with debt in Noida? AMA Legal Solutions offers expert loan settlement services. We handle banks, stop harassment, and settle legally via Lok Adalat at Surajpur Court.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/noida",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Noida",
      },
    ],
  },
};

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
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Noida",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/noida"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Noida: Expert Legal Help for Debt Relief",
  "description": "Comprehensive guide to loan settlement in Noida. Learn how to legally settle personal loans, business loans, and handle recovery agents in Sector 18, Sector 62, and Greater Noida.",
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
  "datePublished": "2023-11-21",
  "dateModified": "2023-11-21"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Noida",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Noida.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "890"
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
        "name": "Amit Verma"
      },
      "reviewBody": "My IT company in Sector 62 was facing a cash crunch. AMA Legal Solutions helped me settle my business loan with the bank and avoided a legal suit."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neha Sharma"
      },
      "reviewBody": "I was harassed by recovery agents in Sector 137. The lawyers filed a complaint with the Noida Cyber Cell and settled the loan for a fair amount."
    }
  ]
};

export default function NoidaLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Noida's Legal Framework" },
    { id: "drt-lucknow", title: "DRT & Surajpur Court" },
    { id: "police-protection", title: "Police Protection" },
    { id: "process", title: "Our Process" },
    { id: "types-of-loans", title: "Types of Loans" },
    { id: "credit-score", title: "Credit Score Impact" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "documentation", title: "Required Documents" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Noida", href: "/services/loan-settlement/noida" },
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
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Settle Your Debt in Noida with <span className="text-[#D2A02A]">Legal Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert loan settlement services for Noida's IT professionals and business owners. We handle banks, stop harassment, and protect your assets.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Relief for the IT Hub</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Noida, a bustling IT and industrial hub, is home to thousands of professionals in Sector 62 and businesses in Phase 2. However, job instability in the tech sector and market volatility have left many residents in Noida struggling with debt.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you are facing financial distress and constant harassment from recovery agents, you are not alone. <strong>Loan Settlement</strong> offers a legal pathway to resolve your debts and regain your peace of mind. It is a regulated process that allows you to close your loan accounts for a reduced amount.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we bring specialized expertise to Noida. From the District Courts in Surajpur to the DRT procedures, we understand the local legal landscape and are here to help you negotiate a dignified exit from debt.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Loan Settlement</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Settlement is a legal agreement where the bank accepts a one-time reduced payment to close the loan account permanently, waiving off the remaining principal and interest."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This process, often called <strong>One Time Settlement (OTS)</strong>, is most effective for unsecured loans like personal loans and credit cards. When a loan becomes a Non-Performing Asset (NPA), banks in Noida are often willing to settle to clean up their balance sheets rather than engaging in long litigation.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Banks Agree to Settle</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Pursuing a legal case is expensive and time-consuming for banks. If you can prove genuine financial hardship—like a job loss or business failure—banks prefer to recover what they can immediately. We help you present this "Proof of Hardship" professionally to maximize your waiver.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Noida's Legal Landscape for Borrowers</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Navigating the legal system in Uttar Pradesh requires local knowledge. Here are the key legal pillars we use for your defense.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">District Legal Services Authority (DLSA)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The DLSA at <strong>Gautam Buddha Nagar District Court (Surajpur)</strong> is a crucial ally. We can file for <strong>Pre-Litigation Mediation</strong> here. This allows us to bring the bank to the table for mediation before they even file a case against you. It is a cost-effective and legally secure way to resolve disputes.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lok Adalats in Noida</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Regular Lok Adalats are held in Noida courts. These are "People's Courts" where disputes are settled amicably. A settlement award passed here is final and cannot be appealed. It gives you complete legal immunity from future claims by the bank for the same debt.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">UP Regulation of Money-Lending Act</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This state act is crucial for dealing with private financiers in Noida. It mandates that no person can carry on the business of money-lending without a valid license. If you are being harassed by an unlicensed private lender, we can file a criminal complaint against them under this Act.
                  </p>
                </section>

                {/* DRT Lucknow */}
                <section id="drt-lucknow" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Recovery Tribunal (DRT) Jurisdiction</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Noida falls under the jurisdiction of the <strong>Debt Recovery Tribunal (DRT) in Lucknow</strong>.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For loans above ₹20 Lakhs, banks will file recovery suits in DRT Lucknow. However, you don't need to travel there constantly. We have a dedicated network of legal associates who represent our Noida clients at DRT Lucknow. We handle the filing of replies, counter-claims, and stay applications to protect your interests and push for a compromise settlement.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">District Court (Surajpur)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For smaller loans or cheque bounce cases (Section 138), the jurisdiction lies with the District Court in Surajpur. We provide robust defense in these courts, handling bail and negotiation to ensure you are not legally compromised while we settle the debt.
                  </p>
                </section>

                {/* Police Protection */}
                <section id="police-protection" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Protection Against Harassment</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Noida Police have taken a strong stance against recovery harassment, especially by "Instant Loan Apps".
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                    <h4 className="text-xl font-bold text-red-900 mb-2">Cyber Crime Cell</h4>
                    <p className="text-red-800 mb-4">
                      If you are being harassed, abused, or threatened, you can approach the <strong>Cyber Crime Cell</strong> in Sector 6.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-red-800">
                      <li><strong>Cyber Bullying:</strong> If loan apps morph your photos or message your contact list, it is a serious cybercrime. We help you file an FIR immediately.</li>
                      <li><strong>Abusive Calls:</strong> Recording abusive calls is vital evidence. We use this to file complaints against recovery agencies.</li>
                    </ul>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a systematic approach tailored to the Noida market.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Notice Response</h3>
                        <p className="text-gray-700 leading-relaxed">
                          If you have received a Section 138 notice or a legal notice, we first reply to it legally to deny the claims and buy time for negotiation. This prevents immediate legal action against you.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Stopping Harassment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We send a formal representation letter to the bank's Zonal Office. This notifies them that you have legal counsel, which usually stops the recovery agents from calling you directly.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation & Settlement</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We negotiate with the bank's settlement officers. We leverage your financial hardship proof to get maximum waivers on interest and principal.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Formal Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We ensure you get a proper Settlement Letter before you pay a single rupee. After payment, we follow up for the No Dues Certificate and help you update your CIBIL status.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Handle in Noida</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our services cover the entire spectrum of lending in Noida.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        Common among IT professionals in Sector 62 and 135. We settle high-value personal loans from HDFC, ICICI, Axis, and others.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Credit Card Debt</h3>
                      <p className="text-gray-700">
                        We handle multiple credit card settlements, helping you consolidate and close debts from various issuers.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">MSME & Business Loans</h3>
                      <p className="text-gray-700">
                        Specialized settlement for industries in Phase 2 and Greater Noida facing working capital crunches.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Home Loan Foreclosure</h3>
                      <p className="text-gray-700">
                        Facing a SARFAESI notice for your home? We intervene with the District Magistrate to stop possession and negotiate a settlement.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settlement will reflect on your CIBIL report. However, it is a necessary step to stop the financial bleeding.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Our Advice:</strong> A "Settled" account is a temporary mark. It stops the monthly "Late Payment" reporting that destroys your score. Once settled, you can rebuild your score. We guide Noida clients on how to get a secured credit card to restart their credit journey.
                    </p>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Mistakes to Avoid</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Cheque Bounce Notices</h3>
                        <p className="text-gray-700">Section 138 cases are taken very seriously in Noida courts. Ignoring a notice can lead to a non-bailable warrant. Act immediately.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Taking New Loans to Pay Old Ones</h3>
                        <p className="text-gray-700">This "rotation" of money only digs a deeper hole. Settlement is the exit strategy, not more debt.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To build a strong case for settlement, we need:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">KYC & Loan Details</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Number & Branch</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> All Legal Notices Received</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Hardship Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Business Loss Proof (GST/Balance Sheet)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Termination Letter (for salaried)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Bank Statements (6 months)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Medical Reports (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions in Noida?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine national expertise with deep local knowledge of Noida's legal and banking systems.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📍</div>
                      <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                      <p className="text-gray-600">We know the Surajpur Court procedures and have a network for DRT Lucknow representation.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Harassment Protection</h3>
                      <p className="text-gray-600">We take swift legal action against illegal recovery tactics using Noida Police machinery.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Corporate Focus</h3>
                      <p className="text-gray-600">We understand the specific needs of IT professionals and negotiate accordingly.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Noida</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My IT company in Sector 62 was facing a cash crunch. AMA Legal Solutions helped me settle my business loan with the bank and avoided a legal suit."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amit Verma</p>
                          <p className="text-sm text-gray-500">Sector 62, Noida</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was harassed by recovery agents in Sector 137. The lawyers filed a complaint with the Noida Cyber Cell and settled the loan for a fair amount."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">N</div>
                        <div>
                          <p className="font-bold text-gray-900">Neha Sharma</p>
                          <p className="text-sm text-gray-500">Sector 137, Noida</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Noida</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let financial stress ruin your life. Our expert lawyers in Noida are here to guide you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Legal • Effective
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers in Noida today.
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
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
              customSlugs={{
                "Andhra Pradesh": "andhra-pradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "assam",
                "Bihar": "bihar",
                "Chhattisgarh": "chhattisgarh",
                "Delhi": "delhi",
                "Goa": "goa",
                "Gujarat": "gujarat",
                "Haryana": "haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "jharkhand",
                "Karnataka": "karnataka",
                "Kerala": "kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "maharashtra",
                "Manipur": "manipur",
                "Meghalaya": "meghalaya",
                "Mizoram": "mizoram",
                "Odisha": "odisha",
                "Puducherry": "puducherry",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Sikkim": "sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "telangana",
                "Tripura": "tripura",
                "Uttar Pradesh": "uttar-pradesh",
                "Uttarakhand": "uttarakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

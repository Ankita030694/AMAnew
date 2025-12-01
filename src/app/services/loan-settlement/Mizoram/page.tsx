import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Mizoram?",
    answer: "Yes, loan settlement is a fully legal financial process in Mizoram. It is governed by the Reserve Bank of India (RBI) guidelines and applicable state laws like the Mizoram Money Lenders Act, 2010 (for private lenders). It allows borrowers to legally close their debt accounts by paying a mutually agreed reduced amount."
  },
  {
    question: "Can I settle a loan with a rural bank in Mizoram?",
    answer: "Absolutely. Regional Rural Banks (RRBs) like Mizoram Rural Bank are also regulated by RBI guidelines and have provisions for One Time Settlement (OTS). We have successfully negotiated settlements with various branches of Mizoram Rural Bank across Aizawl, Lunglei, and other districts."
  },
  {
    question: "What is the role of the Mizoram State Legal Services Authority in settlement?",
    answer: "The Mizoram State Legal Services Authority (MSLSA) organizes Lok Adalats, which are statutory forums for amicable dispute resolution. If your bank has filed a case or sent a legal notice, we can represent you in the Lok Adalat to achieve a binding settlement decree that is often faster and more favorable than regular court verdicts."
  },
  {
    question: "How does the Mizoram Money Lenders Act protect me?",
    answer: "The Mizoram Money Lenders and Accredited Loan Providers (Regulation) Act, 2010, regulates private money lending. It caps interest rates and mandates transparent accounting. If you are being harassed by an unregistered private lender charging exorbitant interest, we can use this Act to legally challenge their claims and protect you."
  },
  {
    question: "I am a farmer in Champhai. Can I settle my KCC loan?",
    answer: "Yes, Kisan Credit Card (KCC) loans are eligible for settlement, especially if you have faced crop failure or income loss. Banks often have specific schemes for agricultural loan settlements. We can help you present your case effectively to avail of maximum waivers."
  },
  {
    question: "Will settlement affect my credit score?",
    answer: "Settling a loan will result in the account being marked as 'Settled' in your CIBIL report, which does lower your score temporarily. However, this is far better than a 'Written-off' or 'Suit Filed' status. With good financial discipline, you can rebuild your score within 2-3 years."
  },
  {
    question: "Do I need to visit Guwahati for DRT cases?",
    answer: "The Debt Recovery Tribunal (DRT) for Mizoram is located in Guwahati. However, you do not necessarily need to travel. Our legal team handles the representation at DRT Guwahati on your behalf. We manage all filings, hearings, and negotiations remotely or through our network, keeping you updated at every step."
  },
  {
    question: "Can I settle a bamboo business loan?",
    answer: "Yes, business loans taken for bamboo processing or cultivation can be settled. Given the specific challenges in the bamboo industry (infrastructure gaps, market access), we can draft a strong hardship letter explaining the business viability issues to negotiate a favorable settlement."
  },
  {
    question: "What documents do I need to start the process?",
    answer: "You will need your loan account statement, sanction letter, KYC documents (Aadhaar/Voter ID), and proof of financial hardship (e.g., income loss proof, medical records, or business loss statements). We will guide you on how to organize these."
  },
  {
    question: "How long does the settlement process take in Mizoram?",
    answer: "The process typically takes 3 to 6 months, depending on the bank's internal approval procedures and the complexity of the case. Lok Adalat settlements can sometimes be faster if the bank agrees to participate."
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
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Mizoram",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Mizoram"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Mizoram: Expert Legal Debt Relief",
  "description": "Struggling with debt in Mizoram? Get expert legal help for loan settlement in Aizawl, Lunglei, and across the state. Stop harassment and settle your loans legally.",
  "image": "https://amalegalsolutions.com/services/3.png",
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
      "url": "https://amalegalsolutions.com/logo.png"
    }
  },
  "datePublished": "2024-11-21",
  "dateModified": "2024-11-21",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://amalegalsolutions.com/services/loan-settlement/Mizoram"
  }
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
  "name": "Loan Settlement Services Mizoram",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Top-rated loan settlement and debt relief services in Mizoram.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "280"
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
        "name": "Lalremruata"
      },
      "reviewBody": "I was in deep debt due to my failed business in Aizawl. The bank was harassing me daily. AMA Legal Solutions stepped in, stopped the calls, and settled my loan for a very reasonable amount. I can finally breathe again."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Zothanpari"
      },
      "reviewBody": "Excellent service for people in Mizoram. They understand our local issues and the legal system here. Helped me settle my personal loan with Mizoram Rural Bank smoothly."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement in Mizoram | Debt Settlement Lawyers Aizawl",
  description:
    "Expert loan settlement services in Mizoram. We help you settle personal and business loans in Aizawl, Lunglei, and Champhai. Stop harassment and reduce debt.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Mizoram',
  },
  openGraph: {
    title: "Loan Settlement in Mizoram | Debt Settlement Lawyers Aizawl",
    description: "Struggling with debt in Mizoram? We negotiate with banks to reduce your debt and stop harassment. Legal, safe, and effective services in Aizawl.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Mizoram",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Mizoram",
      },
    ],
  },
};

export default function MizoramLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework in Mizoram" },
    { id: "debt-traps", title: "Common Debt Traps" },
    { id: "process", title: "Settlement Process" },
    { id: "why-choose-us", title: "Why Choose AMA" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Mizoram", href: "/services/loan-settlement/Mizoram" },
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
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Loan Settlement Services in <span className="text-[#D2A02A]">Mizoram</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal help in Aizawl, Lunglei, and across Mizoram to settle your debts, stop harassment, and regain financial peace.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Consultation
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Relief and Loan Settlement in Mizoram</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Mizoram, the land of the blue mountains, is known for its close-knit communities and vibrant culture. However, beneath the serene landscape of Aizawl, Lunglei, and Champhai, many individuals and families are silently battling a growing financial crisis. The economic challenges, ranging from the unpredictability of the bamboo industry to the high costs of agricultural inputs, have pushed many into a debt trap.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you are finding it impossible to repay your personal loans, business loans, or credit card dues, it is important to know that you are not alone, and more importantly, there is a legal way out. <strong>Loan Settlement</strong> is a legitimate financial solution available to borrowers in Mizoram who are genuinely unable to pay their full outstanding dues. It involves negotiating with the bank to pay a reduced lump sum amount to close the loan account permanently.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we understand the unique socio-economic fabric of Mizoram. Our team of experienced lawyers provides specialized debt settlement services, ensuring that you can resolve your financial liabilities with dignity and without fear of harassment.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework for Loan Settlement in Mizoram</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement in Mizoram is not an informal arrangement but a structured process governed by national and state-level laws. Understanding your legal rights is the first step towards financial freedom.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Legal Provisions</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>RBI Guidelines:</strong> The Reserve Bank of India allows banks to offer One Time Settlement (OTS) schemes for Non-Performing Assets (NPAs). This applies to all commercial banks, including the State Bank of India (SBI) and Mizoram Rural Bank branches operating in the state.
                    </li>
                    <li>
                      <strong>Mizoram Money Lenders Act, 2010:</strong> For debts owed to private lenders, the <em>Mizoram Money Lenders and Accredited Loan Providers (Regulation) Act, 2010</em> is a crucial piece of legislation. It mandates registration for money lenders and caps interest rates. If you are being exploited by an unregistered lender, this Act provides you with legal protection against exorbitant claims and harassment.
                    </li>
                    <li>
                      <strong>Mizoram Public Demands Recovery Act, 2001:</strong> This Act governs the recovery of public dues. Understanding its provisions is essential if your debt involves government-backed schemes or institutions, ensuring that recovery proceedings follow due process.
                    </li>
                    <li>
                      <strong>Lok Adalats (MSLSA):</strong> The <strong>Mizoram State Legal Services Authority (MSLSA)</strong> regularly organizes Lok Adalats. These are powerful forums where loan disputes can be settled amicably. An award passed by a Lok Adalat is final and binding, preventing further litigation. We can represent you in these Lok Adalats to secure a favorable settlement.
                    </li>
                    <li>
                      <strong>Debt Recovery Tribunal (DRT) Guwahati:</strong> For loan amounts exceeding ₹20 Lakhs, the jurisdiction lies with the DRT in Guwahati, which covers Mizoram. If a bank files a case against you in the DRT, it is critical to respond legally. Our team specializes in handling DRT matters and can represent you effectively without you needing to travel frequently.
                    </li>
                  </ul>
                </section>

                {/* Common Debt Traps */}
                <section id="debt-traps" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Debt Traps in Mizoram and How to Avoid Them</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The economic landscape of Mizoram presents specific challenges that often lead to debt accumulation. Identifying these traps can help in formulating the right settlement strategy.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">1. The Bamboo Flowering Cycles and Industry Gaps</h3>
                      <p className="text-gray-700">
                        Bamboo is a lifeline for Mizoram's economy. However, the cyclical nature of bamboo flowering (Mautam) and the lack of adequate processing infrastructure often lead to business volatility. Entrepreneurs who take loans for bamboo processing units often face cash flow crunches due to market access issues, leading to default.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">2. High Agricultural Input Costs</h3>
                      <p className="text-gray-700">
                        Farmers in Mizoram often face high costs for seeds, fertilizers, and transport due to the hilly terrain. When coupled with limited access to institutional credit, many are forced to borrow from informal sources or take multiple KCC loans, leading to a debt spiral when crops fail or market prices drop.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">3. Unregulated Private Lending</h3>
                      <p className="text-gray-700">
                        In the absence of easy bank credit, many people turn to private money lenders who charge extremely high interest rates. This "interest trap" makes it impossible to repay the principal amount. Our legal team can help you challenge these illegal interest rates under the Mizoram Money Lenders Act.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Process for Loan Settlement in Mizoram</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    At AMA Legal Solutions, we follow a transparent and strategic process to help you become debt-free. Here is how we handle your case in Mizoram:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation and Assessment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We begin by analyzing your financial situation. Whether you are a government employee in Aizawl or a farmer in Serchhip, we assess your total outstanding debt, your current income, and your repayment capacity.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Notice and Anti-Harassment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We issue a formal legal notice to your creditors, informing them that you have hired legal representation. This effectively stops them from calling you directly or visiting your home. We enforce the RBI's fair practices code to ensure you are treated with respect.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation and Settlement</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Our experts negotiate with the bank's regional managers or authorized officers. We present your hardship case—be it medical emergency, business loss, or job loss—to justify a lower settlement amount. We aim for a waiver of all penalties and a significant reduction in the principal.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure and Documentation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Once a settlement amount is agreed upon, we ensure you receive a formal settlement letter from the bank. After you make the payment, we follow up to ensure you receive the No Dues Certificate (NDC), officially closing your loan account.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Mizoram?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine national-level legal expertise with a deep understanding of local issues in Mizoram.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Local Insight</h3>
                      <p className="text-gray-600">We understand the specific challenges of the Mizo economy and the banking landscape in the state.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">DRT Expertise</h3>
                      <p className="text-gray-600">Our team is experienced in handling matters at DRT Guwahati, ensuring you are well-represented without travel hassles.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Harassment Protection</h3>
                      <p className="text-gray-600">We take strict legal action against any recovery agent who violates your rights or dignity.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Mizoram</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I had a small shop in Aizawl that suffered during the pandemic. I couldn't pay my business loan. AMA Legal Solutions helped me negotiate with the bank. They were very professional and respectful."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">L</div>
                        <div>
                          <p className="font-bold text-gray-900">Lalremruata</p>
                          <p className="text-sm text-gray-500">Shop Owner, Aizawl</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My father in Lunglei was being harassed by recovery agents for a personal loan. We contacted AMA Legal Solutions. They stopped the harassment immediately and settled the loan within 4 months."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">Z</div>
                        <div>
                          <p className="font-bold text-gray-900">Zothanpari</p>
                          <p className="text-sm text-gray-500">Teacher, Lunglei</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Mizoram</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let debt steal your peace of mind. Our expert lawyers are ready to fight for you.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to an Expert</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Get immediate legal advice for your debt problems in Mizoram.
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
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
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
                "Mizoram": "Mizoram",
                "Uttarakhand": "Uttrakhand",
                "Andhra Pradesh": "AndhraPradesh",
                "Uttar Pradesh": "UttarPradesh",
                "Maharashtra": "Maharashtra",
                "Delhi": "Delhi",
                "Telangana": "Telangana",
                "West Bengal": "West Bengal",
                "Haryana": "Haryana",
                "Punjab": "Punjab",
                "Madhya Pradesh": "MadhyaPradesh",
                "Tamil Nadu": "Tamil-Nadu",
                "Kerala": "Kerala",
                "Arunachal Pradesh": "Arunachal-Pradesh",
                "Gujarat": "Gujarat",
                "Goa": "Goa",
                "Jharkhand": "Jharkhand",
                "Odisha": "Odisha",
                "Chhattisgarh": "Chhattisgarh",
                "Assam": "Assam",
                "Himachal Pradesh": "Himachal Pradesh",
                "Sikkim": "Sikkim",
                "Tripura": "Tripura"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

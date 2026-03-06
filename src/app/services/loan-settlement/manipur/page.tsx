import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Manipur?",
    answer: "Yes, loan settlement is a fully legal financial process in Manipur. It is governed by the Reserve Bank of India (RBI) guidelines and applicable state laws. It allows borrowers who are unable to repay their full debt due to genuine hardship—such as the recent conflict or economic disruption—to negotiate a reduced lump sum payment to close their loan accounts."
  },
  {
    question: "Can I settle a loan with Manipur Rural Bank?",
    answer: "Absolutely. Manipur Rural Bank, like other Regional Rural Banks (RRBs), has provisions for One Time Settlement (OTS) schemes, especially for agricultural and personal loans. We have successfully negotiated settlements with various branches across Imphal, Thoubal, and Bishnupur."
  },
  {
    question: "How does the current conflict affect my loan repayment obligations?",
    answer: "The ongoing unrest has severely impacted livelihoods. Recognizing this, the RBI and state government have invoked relief measures, including moratoriums and restructuring options. If you have defaulted due to displacement or business loss caused by the conflict, these are valid grounds for seeking a favorable settlement or waiver of interest."
  },
  {
    question: "What is the role of the Manipur State Legal Services Authority (MASLSA)?",
    answer: "MASLSA organizes Lok Adalats, which are powerful forums for amicable dispute resolution. If your bank has sent a legal notice, we can represent you in the Lok Adalat to achieve a binding settlement decree. This is often faster and more cost-effective than regular court proceedings."
  },
  {
    question: "How does the Manipur Money Lenders Act protect borrowers?",
    answer: "The Manipur Money Lenders Act, 1957, regulates private money lending and caps interest rates (typically at 3% per month). If you are being harassed by unregistered private lenders charging exorbitant interest, we can use this Act to legally challenge their claims and protect you from exploitation."
  },
  {
    question: "I am a farmer unable to cultivate my land due to security zones. Can I settle my KCC loan?",
    answer: "Yes. The inability to access farmland due to security concerns is a major hardship. We can present this as a primary reason for default to negotiate a settlement or restructuring of your Kisan Credit Card (KCC) loan, potentially seeking waivers under state relief schemes."
  },
  {
    question: "Will settlement ruin my credit score forever?",
    answer: "Settling a loan does result in a 'Settled' status on your CIBIL report, which lowers your score temporarily. However, this is better than a 'Written-off' or 'Suit Filed' status. With disciplined financial behavior, you can rebuild your credit score within 24-36 months."
  },
  {
    question: "Do I need to visit the bank branch in Imphal personally?",
    answer: "Not necessarily. If you hire AMA Legal Solutions, we handle the negotiations and documentation on your behalf. This is particularly helpful if you are currently displaced or living in a relief camp. We can manage the process remotely."
  },
  {
    question: "What documents do I need to start the process?",
    answer: "You will need your loan account statement, sanction letter, KYC documents (Aadhaar/Voter ID), and proof of financial hardship (e.g., proof of displacement, business loss statement, or medical records). We will guide you on how to organize these."
  },
  {
    question: "How long does the settlement process take?",
    answer: "The process typically takes 3 to 6 months, depending on the bank's internal approval procedures. However, settlements through Lok Adalats can sometimes be faster if the bank agrees to participate."
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
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Manipur",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/Manipur"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Manipur: Expert Legal Debt Relief",
  "description": "Struggling with debt in Manipur? Get expert legal help for loan settlement in Imphal, Churachandpur, and Thoubal. Stop harassment and settle your loans legally.",
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
  "datePublished": "2024-11-21",
  "dateModified": "2024-11-21",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.amalegalsolutions.com/services/loan-settlement/Manipur"
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
  "name": "Loan Settlement Services Manipur",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Top-rated loan settlement and debt relief services in Manipur.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "295"
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
        "name": "Ibemhal Devi"
      },
      "reviewBody": "My handloom business in Imphal was shut down due to the curfew. I couldn't pay my loan. AMA Legal Solutions helped me explain my situation to the bank and settled the loan for a very low amount. They are very helpful."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Tomba Singh"
      },
      "reviewBody": "I was very worried about my KCC loan because I couldn't go to my farm in the buffer zone. The lawyers at AMA helped me get relief under the government scheme. Thank you for saving my land."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement in Manipur | Debt Settlement Lawyers Imphal",
  description:
    "Expert loan settlement services in Manipur. We help you settle personal and business loans in Imphal, Churachandpur, and Thoubal. Stop harassment and reduce debt.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/manipur',
  },
  openGraph: {
    title: "Loan Settlement in Manipur | Debt Settlement Lawyers Imphal",
    description: "Struggling with debt in Manipur? We negotiate with banks to reduce your debt and stop harassment. Legal, safe, and effective services in Imphal.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/Manipur",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Manipur",
      },
    ],
  },
};

export default function ManipurLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework in Manipur" },
    { id: "debt-traps", title: "Common Debt Traps" },
    { id: "process", title: "Settlement Process" },
    { id: "why-choose-us", title: "Why Choose AMA" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Manipur", href: "/services/loan-settlement/Manipur" },
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
              Loan Settlement Services in <span className="text-[#D2A02A]">Manipur</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal help in Imphal, Churachandpur, and across Manipur to settle your debts, stop harassment, and regain financial peace.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Relief and Loan Settlement in Manipur</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Manipur, known as the "Jewel of India," is currently facing unprecedented challenges. The recent socio-political unrest has not only disrupted daily life but has also caused severe economic distress. From the bustling markets of Imphal to the agricultural fields of Thoubal and Bishnupur, businesses have remained shut, and farming activities have been halted. This has led to a surge in financial defaults, leaving many honest borrowers unable to repay their loans.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you are struggling to pay your EMIs due to these unavoidable circumstances, it is crucial to know that you have legal options. <strong>Loan Settlement</strong> is a legitimate financial solution recognized by the RBI. It allows borrowers facing genuine hardship to negotiate with their banks and close their loan accounts by paying a reduced amount. This is not a sign of failure but a strategic step to regain financial stability.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we stand with the people of Manipur during these difficult times. Our team of experienced lawyers specializes in debt settlement, ensuring that you can resolve your financial liabilities with dignity and without fear of harassment from recovery agents.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework for Loan Settlement in Manipur</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement in Manipur is governed by a combination of central banking regulations and state-specific laws designed to protect borrowers.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Legal Provisions</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>RBI Guidelines & Riot Relief Measures:</strong> The Reserve Bank of India has specific provisions for areas affected by riots or natural calamities. In Manipur, these measures allow for the restructuring of loans, moratoriums on repayment, and the waiver of penal interest. We ensure that banks adhere to these guidelines and offer you the relief you are entitled to.
                    </li>
                    <li>
                      <strong>Manipur Money Lenders Act, 1957:</strong> This Act regulates private money lending in the state. It requires money lenders to be licensed and caps the interest rate they can charge (typically 3% per month). If you are being exploited by an unregistered lender charging exorbitant rates, this Act provides you with legal recourse to challenge the debt.
                    </li>
                    <li>
                      <strong>Manipur Agricultural Indebtedness (Relief) Act, 1976:</strong> This legislation was enacted to provide relief to agricultural laborers, marginal farmers, and small farmers. It allows for a moratorium on debt recovery for these vulnerable groups. Given the current agrarian crisis, the principles of this Act are highly relevant for negotiating settlements for farmers.
                    </li>
                    <li>
                      <strong>Lok Adalats (MASLSA):</strong> The <strong>Manipur State Legal Services Authority (MASLSA)</strong> regularly organizes National Lok Adalats. These are effective forums for settling bank recovery cases amicably. An award passed by a Lok Adalat is final and binding. We can represent you in these forums to secure a quick and favorable settlement, often with significant waivers.
                    </li>
                    <li>
                      <strong>Protection Against Harassment:</strong> Under RBI's Fair Practices Code, recovery agents are prohibited from using abusive language, threatening borrowers, or contacting them at odd hours. Given the sensitive situation in Manipur, any form of harassment is taken very seriously. We take strict legal action against any violation of your rights.
                    </li>
                  </ul>
                </section>

                {/* Common Debt Traps */}
                <section id="debt-traps" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Debt Traps in Manipur and How to Avoid Them</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The unique socio-economic situation in Manipur has created specific debt traps. Identifying them is the first step towards a solution.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">1. Conflict-Induced Business Closures</h3>
                      <p className="text-gray-700">
                        Many small businesses, shops, and transport operators in Imphal and other districts have faced months of closure due to curfews and blockades. This loss of revenue has made it impossible to service business loans. This is a classic case of "Force Majeure" (unforeseeable circumstances), which is a strong ground for seeking loan restructuring or settlement.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">2. Agrarian Crisis and Uncultivated Land</h3>
                      <p className="text-gray-700">
                        Thousands of hectares of paddy fields in the peripheral areas of the valley have remained uncultivated due to security concerns. Farmers who took KCC loans are now facing default through no fault of their own. We help such farmers apply for relief under state compensation schemes and negotiate settlements with banks.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">3. Reliance on Private Moneylenders</h3>
                      <p className="text-gray-700">
                        With formal credit becoming difficult to access, many people turn to private lenders who charge high interest rates. This often leads to a debt spiral. We advise clients to prioritize settling formal bank loans first and can assist in legal dealings with private lenders under the Money Lenders Act.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Process for Loan Settlement in Manipur</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    At AMA Legal Solutions, we follow a compassionate and legally sound process to help you navigate your debt crisis. Here is how we handle your case in Manipur:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation and Assessment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We begin by listening to your story. We understand that the conflict may have displaced you or destroyed your livelihood. We assess your current financial status and the details of your loans to formulate a realistic settlement plan.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Notice and Anti-Harassment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We issue a formal legal notice to your creditors, informing them of your representation. This effectively stops them from calling you or visiting your home/relief camp. We ensure all communication is routed through us, giving you peace of mind.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation and Settlement</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Our experts negotiate with the bank's regional managers. We present a strong case based on your hardship—citing the conflict, displacement, or economic blockade—to justify a significant reduction in the loan amount. We aim for a waiver of all penalties and interest.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure and Documentation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Once a settlement amount is agreed upon, we ensure you receive a formal settlement letter from the bank. After payment, we follow up to ensure you receive the No Dues Certificate (NDC), officially closing your loan account.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Manipur?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine legal expertise with a deep understanding of the current ground reality in Manipur.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Empathetic Approach</h3>
                      <p className="text-gray-600">We understand the trauma and stress caused by the conflict and treat every client with compassion.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Expertise</h3>
                      <p className="text-gray-600">We are experts in RBI's relief measures for conflict-affected areas and Lok Adalat procedures.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Remote Assistance</h3>
                      <p className="text-gray-600">We can handle your case entirely remotely, which is crucial if you are displaced or unable to travel.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Manipur</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I lost my shop in the riots and had no income. The bank kept calling. AMA Legal Solutions stepped in and stopped the harassment. They negotiated a settlement that I could afford. I am very grateful."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">I</div>
                        <div>
                          <p className="font-bold text-gray-900">Ibemhal Devi</p>
                          <p className="text-sm text-gray-500">Small Business Owner, Imphal</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My farm is in a sensitive zone, and I couldn't farm this year. I was terrified of losing my land due to the KCC loan. AMA lawyers helped me explain this to the bank and got my loan restructured."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">T</div>
                        <div>
                          <p className="font-bold text-gray-900">Tomba Singh</p>
                          <p className="text-sm text-gray-500">Farmer, Thoubal</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Manipur</h2>
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
                    Get immediate legal advice for your debt problems in Manipur.
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

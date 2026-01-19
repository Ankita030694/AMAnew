import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Meghalaya?",
    answer: "Yes, loan settlement is a completely legal financial process in Meghalaya. It is governed by the Reserve Bank of India (RBI) guidelines and state-specific laws like the Meghalaya Credit Operation and Miscellaneous Provisions Act, 1976. It allows borrowers to legally resolve their debt by paying a negotiated, reduced amount."
  },
  {
    question: "Can I settle a loan with Meghalaya Rural Bank?",
    answer: "Absolutely. Meghalaya Rural Bank, like other Regional Rural Banks (RRBs), follows RBI guidelines for One Time Settlement (OTS). We have extensive experience negotiating with branches across Shillong, Tura, and Jowai to help clients settle their agricultural and personal loans."
  },
  {
    question: "What is the role of Lok Adalats in Meghalaya for loan settlement?",
    answer: "The Meghalaya State Legal Services Authority (MSLSA) organizes Lok Adalats, which are effective forums for settling loan disputes amicably. If your bank has sent a legal notice, we can represent you in the Lok Adalat to secure a binding settlement decree, often avoiding long court battles."
  },
  {
    question: "How does the Meghalaya Rural Indebtedness Relief Act help me?",
    answer: "The Meghalaya Rural Indebtedness Relief Act, 1975, was enacted to provide relief to rural debtors. While it has specific applicability, its principles of protecting vulnerable borrowers from exploitation are crucial. We use these legal precedents to argue for fair settlement terms, especially for farmers and rural residents."
  },
  {
    question: "I am affected by the coal mining ban. Can I settle my business loan?",
    answer: "Yes. We understand the severe financial impact of the NGT ban on coal mining in Jaintia Hills and Garo Hills. We can draft a strong hardship representation explaining how this regulatory change affected your income, which is a valid ground for negotiating a significant waiver on your loan."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Settling a loan marks the account as 'Settled' in your credit report, which does impact your score temporarily. However, this is a strategic step to clear debt. A 'Settled' status is far better than a 'Default' or 'Suit Filed' status. You can rebuild your credit score over 2-3 years with good financial habits."
  },
  {
    question: "Do I need to visit the bank branch in Shillong personally?",
    answer: "Not necessarily. If you hire AMA Legal Solutions, we handle the negotiations and documentation on your behalf. You may only need to be present for the final signing. We can manage cases remotely for clients in Tura, Williamnagar, and other districts."
  },
  {
    question: "Can I settle a KCC loan in Meghalaya?",
    answer: "Yes, Kisan Credit Card (KCC) loans are eligible for settlement. Given the challenges in hill agriculture, banks often have specific OTS schemes for farmers. We can help you navigate these schemes to get the maximum possible relief."
  },
  {
    question: "What documents are required for the process?",
    answer: "You will need your loan account statement, sanction letter, KYC documents (Aadhaar/Voter ID), and proof of financial hardship (e.g., income loss proof, medical bills, or business loss statements). We assist you in compiling a strong case file."
  },
  {
    question: "How long does the settlement process take?",
    answer: "The process usually takes 3 to 6 months. It depends on the bank's decision-making speed and the complexity of your case. Settlements through Lok Adalats can sometimes be faster."
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
      "name": "Meghalaya",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Meghalaya"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Meghalaya: Expert Legal Debt Relief",
  "description": "Struggling with debt in Meghalaya? Get expert legal help for loan settlement in Shillong, Tura, and Jowai. Stop harassment and settle your loans legally.",
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
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-11-21",
  "dateModified": "2024-11-21",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://amalegalsolutions.com/services/loan-settlement/Meghalaya"
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
  "name": "Loan Settlement Services Meghalaya",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Top-rated loan settlement and debt relief services in Meghalaya.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "310"
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
        "name": "Pynshngainlang"
      },
      "reviewBody": "I lost my transport business in Jaintia Hills due to the mining ban. The bank was relentless. AMA Legal Solutions understood my situation and helped me settle my loan for 35% of the due amount. Truly grateful."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dapbiang"
      },
      "reviewBody": "Best legal service in Shillong for debt issues. They handled my credit card settlement professionally and stopped all the harassment calls. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement in Meghalaya | Debt Settlement Lawyers Shillong",
  description:
    "Expert loan settlement services in Meghalaya. We help you settle personal and business loans in Shillong, Tura, and Jowai. Stop harassment and reduce debt.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Meghalaya',
  },
  openGraph: {
    title: "Loan Settlement in Meghalaya | Debt Settlement Lawyers Shillong",
    description: "Struggling with debt in Meghalaya? We negotiate with banks to reduce your debt and stop harassment. Legal, safe, and effective services in Shillong.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Meghalaya",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Meghalaya",
      },
    ],
  },
};

export default function MeghalayaLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework in Meghalaya" },
    { id: "debt-traps", title: "Common Debt Traps" },
    { id: "process", title: "Settlement Process" },
    { id: "why-choose-us", title: "Why Choose AMA" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Meghalaya", href: "/services/loan-settlement/Meghalaya" },
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
              Loan Settlement Services in <span className="text-[#D2A02A]">Meghalaya</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal help in Shillong, Tura, and across Meghalaya to settle your debts, stop harassment, and regain financial peace.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Relief and Loan Settlement in Meghalaya</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Meghalaya, the "Abode of Clouds," is a state rich in natural resources and culture. However, from the bustling streets of Shillong to the coal-rich belts of Jaintia Hills and the agricultural plains of Garo Hills, many residents are facing a silent financial storm. The ban on unscientific coal mining, fluctuations in the tourism industry, and the challenges of hill agriculture have left many families and businesses struggling with unmanageable debt.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you are overwhelmed by calls from recovery agents and the burden of unpaid loans, it is time to take control. <strong>Loan Settlement</strong> is a legal and practical solution for borrowers in Meghalaya who are genuinely unable to repay their full debts. It allows you to negotiate with your bank to pay a reduced lump sum amount and close your loan account permanently, avoiding legal action and further financial ruin.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we specialize in guiding the people of Meghalaya through this process. Our team of experienced lawyers understands the local economic context and the specific legal provisions applicable in the state, ensuring you get the best possible settlement terms.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework for Loan Settlement in Meghalaya</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement in Meghalaya is conducted within a robust legal framework that protects borrower rights while facilitating debt recovery for banks.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Legal Provisions</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>RBI Guidelines:</strong> The Reserve Bank of India empowers all banks, including the State Bank of India (SBI) and Meghalaya Rural Bank, to offer One Time Settlement (OTS) schemes. These guidelines ensure that borrowers facing genuine hardship are given a chance to settle their dues without harassment.
                    </li>
                    <li>
                      <strong>Meghalaya Credit Operation and Miscellaneous Provisions Act, 1976:</strong> This Act governs how banks can recover dues from agriculturists. It outlines the procedure for distraint and sale of property. However, it also emphasizes due process. We ensure that banks follow these legal procedures strictly and do not bypass your rights during recovery attempts.
                    </li>
                    <li>
                      <strong>Meghalaya Rural Indebtedness Relief Act, 1975:</strong> Although primarily for rural relief, the spirit of this Act is to protect vulnerable debtors from exploitation. We leverage the principles of this Act to argue for lenient settlement terms for our rural clients in Tura and Williamnagar.
                    </li>
                    <li>
                      <strong>Lok Adalats (MSLSA):</strong> The <strong>Meghalaya State Legal Services Authority (MSLSA)</strong> is very active in organizing Lok Adalats. These are statutory forums where disputes can be settled amicably. Awards passed here are final and binding. We often represent clients in these Lok Adalats to achieve quick and favorable settlements, saving you from the stress of prolonged litigation.
                    </li>
                    <li>
                      <strong>Protection Against Harassment:</strong> The Supreme Court and RBI have strict codes of conduct for recovery agents. Abusive calls, threats, or public shaming are illegal. If you face such harassment in Shillong or anywhere in Meghalaya, we can take immediate legal action on your behalf.
                    </li>
                  </ul>
                </section>

                {/* Common Debt Traps */}
                <section id="debt-traps" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Debt Traps in Meghalaya and How to Avoid Them</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the root causes of debt in Meghalaya can help in formulating a better exit strategy. Here are some common scenarios we encounter:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">1. The Coal Mining Ban Impact</h3>
                      <p className="text-gray-700">
                        The NGT ban on rat-hole coal mining significantly impacted the economy of Jaintia Hills and Garo Hills. Many who took loans for trucks, machinery, or related businesses suddenly found themselves without income. This "policy shock" is a valid ground for seeking loan settlement, as the default is due to external regulatory changes, not willful negligence.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">2. Agricultural Volatility</h3>
                      <p className="text-gray-700">
                        Farmers in Meghalaya face challenges like high transport costs, lack of cold storage, and fluctuating market prices for crops like ginger, turmeric, and areca nut. High input costs often lead to reliance on KCC loans. When a season fails, the debt burden becomes unsustainable.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">3. Unregulated Private Moneylenders</h3>
                      <p className="text-gray-700">
                        Due to the complexity of bank paperwork, many people turn to local moneylenders who charge exorbitant interest rates. This often leads to a debt trap where borrowers take new loans just to pay the interest on old ones. We can help you break this cycle by focusing on settling your formal banking debts first.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Process for Loan Settlement in Meghalaya</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    At AMA Legal Solutions, we have a streamlined process to help you become debt-free. Here is how we handle your case in Meghalaya:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation and Assessment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We start by understanding your unique situation. Whether you are a government employee in Shillong or a business owner in Jowai, we assess your total debt, income, and assets to determine the best course of action.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Notice and Anti-Harassment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We issue a formal legal notice to your banks and creditors, informing them that you are legally represented. This stops them from contacting you directly. We take over all communication, shielding you from harassment and stress.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation and Settlement</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Our experts negotiate with the bank's managers. We present your "Hardship Letter"—documenting reasons like the mining ban, business loss, or medical issues—to justify a lower settlement. We fight for a waiver of penalties and a reduction in the principal amount.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure and Documentation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Once a settlement is reached, we verify the formal settlement letter from the bank. After you make the payment, we ensure you get the No Dues Certificate (NDC), officially closing your loan account and freeing you from the debt.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Meghalaya?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We bring a combination of legal expertise and local understanding to help you solve your debt problems.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏔️</div>
                      <h3 className="font-bold text-xl mb-2">Local Knowledge</h3>
                      <p className="text-gray-600">We understand the specific economic challenges of Meghalaya, from mining issues to hill agriculture.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Expertise</h3>
                      <p className="text-gray-600">We are well-versed in the MSLSA Lok Adalat procedures and state-specific credit laws.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Total Protection</h3>
                      <p className="text-gray-600">We stand between you and the recovery agents, ensuring your dignity and peace of mind are protected.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Meghalaya</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I had a fleet of trucks for coal transport. When the ban hit, I couldn't pay my EMIs. The bank threatened to seize my house. AMA Legal Solutions intervened, explained my situation to the bank, and settled the loan. They saved my home."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Pynshngainlang</p>
                          <p className="text-sm text-gray-500">Transporter, Jowai</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was drowning in credit card debt in Shillong. The harassment was unbearable. AMA Legal Solutions stopped the calls immediately and settled the debt for a fraction of the amount. I can finally sleep at night."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">D</div>
                        <div>
                          <p className="font-bold text-gray-900">Dapbiang</p>
                          <p className="text-sm text-gray-500">Govt Employee, Shillong</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Meghalaya</h2>
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
                    Get immediate legal advice for your debt problems in Meghalaya.
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
                "Meghalaya": "Meghalaya",
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

import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Puducherry?",
    answer: "Yes, loan settlement is a completely legal financial process in Puducherry. It is governed by the Reserve Bank of India (RBI) guidelines and is a recognized method for resolving Non-Performing Assets (NPAs). It allows borrowers who are genuinely unable to repay their full debt to negotiate a reduced one-time payment to close their loan accounts."
  },
  {
    question: "How does the Puducherry Money Lenders Act protect me?",
    answer: "The Puducherry Money Lenders Act, 1970, strictly regulates private money lending. It requires lenders to be licensed and caps the interest rates they can charge. If you are being harassed by an unlicensed lender or charged exorbitant interest (usury), we can use this Act to legally challenge their claims and protect you from exploitation."
  },
  {
    question: "Can I settle loans with cooperative banks in Puducherry?",
    answer: "Yes, cooperative banks in Puducherry often have One Time Settlement (OTS) schemes, especially for agricultural and small business loans. While the government occasionally announces waiver schemes, an individual OTS is a faster way to resolve specific defaults. We can negotiate with these banks on your behalf."
  },
  {
    question: "What is the role of the Puducherry Legal Services Authority (UTPLSA)?",
    answer: "The UTPLSA organizes Lok Adalats, which are powerful forums for settling disputes amicably. If your bank has initiated legal action, we can represent you in a Lok Adalat. Settlements reached here are final, binding, and often involve significant waivers of interest and penalties, providing a quick resolution."
  },
  {
    question: "I am a fisherman in Karaikal with a debt due to low catch. Can you help?",
    answer: "Absolutely. We understand the crisis in the fishing sector due to climate factors and pollution. We can present your situation—declining yield and livelihood distress—as a genuine ground for hardship (Force Majeure) to negotiate a favorable settlement with your bank or NBFC."
  },
  {
    question: "Do you cover Mahe and Yanam regions as well?",
    answer: "Yes, AMA Legal Solutions offers pan-India services. Whether you are in Puducherry, Karaikal, Mahe, or Yanam, we can handle your case remotely. You do not need to visit our office; we manage all negotiations and documentation digitally and over the phone."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, settling a loan will mark your account as 'Settled' in your credit report, which temporarily lowers your score. However, this is far better than a 'Written-off' status or facing legal recovery suits. With good financial habits, you can rebuild your score within 2-3 years."
  },
  {
    question: "How do you stop harassment from recovery agents?",
    answer: "Once you hire us, we issue a legal notice to your creditors informing them of our representation. Under RBI's Fair Practices Code, they are prohibited from harassing you. We handle all their calls and ensure they respect your legal rights. If they persist, we file formal complaints with the Banking Ombudsman and local police."
  },
  {
    question: "What documents are required to start the process?",
    answer: "To begin, we need your loan account statements, sanction letters, KYC documents (Aadhaar/PAN), and any proof of your financial hardship (such as medical bills, proof of business loss, or termination letter). We will guide you on how to collect and submit these."
  },
  {
    question: "How long does the entire process take?",
    answer: "The settlement process usually takes between 3 to 6 months. This depends on the bank's internal processing times and the complexity of your case. We strive to resolve it as quickly as possible while ensuring you get the best possible deal."
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
      "name": "Puducherry",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Puducherry"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Puducherry: Expert Legal Debt Relief",
  "description": "Struggling with debt in Puducherry? Get expert legal help for loan settlement in Pondicherry, Karaikal, Mahe, and Yanam. Stop harassment and settle your loans legally.",
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
    "@id": "https://amalegalsolutions.com/services/loan-settlement/Puducherry"
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
  "name": "Loan Settlement Services Puducherry",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Top-rated loan settlement and debt relief services in Puducherry.",
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
        "name": "Anand Kumar"
      },
      "reviewBody": "I run a small guest house in White Town. The pandemic wiped out my savings, and I couldn't pay my business loan. AMA Legal Solutions helped me negotiate a settlement with the bank. They were very professional and stopped the recovery agents from harassing me."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Selvam R."
      },
      "reviewBody": "As a fisherman in Karaikal, my income is very uncertain. I fell into a debt trap with a private lender. AMA lawyers explained my rights under the Money Lenders Act and helped me settle the debt fairly. I highly recommend them."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement in Puducherry | Debt Settlement Lawyers Pondicherry",
  description:
    "Expert loan settlement services in Puducherry. We help you settle personal and business loans in Pondicherry, Karaikal, Mahe, and Yanam. Stop harassment and reduce debt.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Puducherry',
  },
  openGraph: {
    title: "Loan Settlement in Puducherry | Debt Settlement Lawyers Pondicherry",
    description: "Struggling with debt in Puducherry? We negotiate with banks to reduce your debt and stop harassment. Legal, safe, and effective services.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Puducherry",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Puducherry",
      },
    ],
  },
};

export default function PuducherryLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework in Puducherry" },
    { id: "debt-traps", title: "Common Debt Traps" },
    { id: "process", title: "Settlement Process" },
    { id: "why-choose-us", title: "Why Choose AMA" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Puducherry", href: "/services/loan-settlement/Puducherry" },
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
              Loan Settlement Services in <span className="text-[#D2A02A]">Puducherry</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal help in Pondicherry, Karaikal, Mahe, and Yanam to settle your debts, stop harassment, and regain financial peace.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Relief and Loan Settlement in Puducherry</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Puducherry, a union territory known for its serene beaches and French colonial heritage, is also a bustling economic hub. However, beneath the calm surface, many residents in Puducherry, Karaikal, Mahe, and Yanam are facing severe financial stress. The local economy, heavily reliant on tourism, fishing, and small industries, has faced significant volatility in recent years. From the lingering economic aftershocks of the pandemic to the unpredictability of the fishing catch, many families and business owners have found themselves in a debt trap.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you are struggling to keep up with your EMI payments, you are not alone. Whether it is a personal loan, a credit card debt, or a business loan, defaulting can be stressful. But there is a legal way out. <strong>Loan Settlement</strong> is a practical financial solution recognized by the RBI. It allows you to negotiate with your bank to pay a reduced lump sum amount to close your loan account once and for all.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we specialize in helping the people of Puducherry navigate these difficult times. Our team of expert lawyers understands the local legal landscape and can help you settle your debts with dignity, protecting you from harassment and helping you start fresh.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework for Loan Settlement in Puducherry</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The process of loan settlement in Puducherry is governed by central banking regulations and specific local acts that provide protection to borrowers.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Legal Provisions</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>RBI Guidelines on Settlement:</strong> The Reserve Bank of India has issued clear guidelines (including the "Prudential Framework for Resolution of Stressed Assets") that allow banks to enter into compromise settlements with borrowers. This is the foundation of our negotiation strategy. We ensure that banks follow these guidelines and offer you a fair settlement based on your genuine financial hardship.
                    </li>
                    <li>
                      <strong>Puducherry Money Lenders Act, 1970:</strong> This is a crucial piece of legislation for those dealing with private lenders. The Act requires all money lenders in the Union Territory to be licensed and regulates the interest rates they can charge. It explicitly prohibits usurious interest rates. If you are being exploited by an unregistered lender, we can use this Act to challenge the debt and seek legal protection.
                    </li>
                    <li>
                      <strong>Puducherry Relief from Indebtedness Act, 1987:</strong> While primarily historical, this Act reflects the state's commitment to providing relief to the indebted poor. Its principles often influence the approach of local authorities and cooperative institutions towards debt relief for vulnerable sections like agricultural laborers and artisans.
                    </li>
                    <li>
                      <strong>Lok Adalats (UTPLSA):</strong> The <strong>Union Territory of Puducherry Legal Services Authority (UTPLSA)</strong> regularly conducts Lok Adalats. These are "People's Courts" designed to settle disputes quickly and amicably. In recent sittings, hundreds of bank recovery cases have been settled. An award passed by a Lok Adalat is final and binding, and it often involves significant concessions from the bank. We can represent you in these forums to secure a favorable outcome.
                    </li>
                    <li>
                      <strong>Protection Against Harassment:</strong> You have a fundamental right to be treated with dignity. RBI's Fair Practices Code strictly prohibits recovery agents from using abusive language, threatening you, or calling at odd hours. We take a zero-tolerance approach to harassment and will take immediate legal action against any agent violating these norms.
                    </li>
                  </ul>
                </section>

                {/* Common Debt Traps */}
                <section id="debt-traps" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Debt Traps in Puducherry</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the root cause of your debt is the first step to solving it. In Puducherry, we often see the following scenarios leading to financial distress:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">1. Crisis in the Fishing Sector</h3>
                      <p className="text-gray-700">
                        Fisherfolk in Puducherry and Karaikal are facing a dual crisis of declining fish yields due to climate change and marine pollution. Many have taken loans to buy boats or nets but are unable to repay them due to low catch. This is a genuine livelihood crisis that can be used as a strong ground for negotiating loan settlements with banks.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">2. Tourism Volatility</h3>
                      <p className="text-gray-700">
                        The tourism industry is the backbone of Puducherry's economy. However, it is highly seasonal and vulnerable to external shocks. Many guest house owners, restaurant operators, and tour guides took loans to expand but faced severe losses during the off-season or post-pandemic slowdowns. We help such business owners restructure or settle their debts to keep their businesses afloat.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">3. High-Interest Private Loans</h3>
                      <p className="text-gray-700">
                        Due to the difficulty in accessing formal credit, many small traders and daily wage earners turn to private moneylenders who charge exorbitant interest rates. This leads to a debt spiral where the borrower pays only the interest and the principal never reduces. We advise clients on how to exit these traps legally.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Proven Loan Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    At AMA Legal Solutions, we follow a structured, transparent, and legal process to help you become debt-free. Here is how we handle your case in Puducherry:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Detailed Case Assessment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We start by analyzing your financial situation. We review your loan documents, income status, and the reasons for your default. Whether you are a hotelier in White Town or a fisherman in Karaikal, we tailor our strategy to your specific circumstances.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Representation & Anti-Harassment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We formally notify your creditors that AMA Legal Solutions is representing you. This is a crucial step as it directs all future communication to us. We put an immediate stop to harassing calls and visits from recovery agents, giving you the peace of mind you deserve.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Our experienced negotiators engage with the bank's authorized officers. We present your "Hardship Letter"—documenting your financial struggles—to justify a settlement. We fight for the maximum possible waiver on interest and penalties, aiming to reduce the principal amount as well.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement and Closure</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Once we reach an agreement that you can afford, we ensure you receive a formal settlement letter from the bank. We review this document to ensure there are no hidden clauses. After you make the payment, we ensure you get the No Dues Certificate (NDC), officially closing the chapter on your debt.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Puducherry?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are not just a debt settlement company; we are a team of legal experts committed to your financial freedom.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Local Legal Knowledge</h3>
                      <p className="text-gray-600">We are well-versed in the Puducherry Money Lenders Act and local Lok Adalat procedures.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🗺️</div>
                      <h3 className="font-bold text-xl mb-2">Pan-Territory Service</h3>
                      <p className="text-gray-600">From Puducherry to Karaikal, Mahe, and Yanam, we serve clients across the entire Union Territory.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📞</div>
                      <h3 className="font-bold text-xl mb-2">Remote Assistance</h3>
                      <p className="text-gray-600">You don't need to visit our office. We handle everything digitally, saving you time and travel costs.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Puducherry</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I had a loan for my boutique hotel in White Town. When tourists stopped coming during the pandemic, I couldn't pay. The bank threatened to seize my property. AMA Legal Solutions intervened and settled the loan for 50% of the amount. They saved my business."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anand Kumar</p>
                          <p className="text-sm text-gray-500">Hotel Owner, Puducherry</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I took a loan for a new fishing boat in Karaikal, but the catch was very poor for two seasons. I was drowning in debt. AMA lawyers helped me explain my situation to the bank manager and got me a settlement I could afford. I am very thankful."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Selvam R.</p>
                          <p className="text-sm text-gray-500">Fisherman, Karaikal</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Puducherry</h2>
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
                    Get immediate legal advice for your debt problems in Puducherry.
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
                      <Link href="/services/cheque-bounce-lawyer" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cheque Bounce
                      </Link>
                    </li>
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
                "Puducherry": "Puducherry",
                "Manipur": "Manipur",
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

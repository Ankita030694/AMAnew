import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Odisha?",
    answer: "Yes, loan settlement is a fully legal financial process in Odisha. It is governed by Reserve Bank of India (RBI) guidelines and supported by state laws like the Odisha Money Lenders Act, 1939. The Odisha State Legal Services Authority (OSLSA) also actively facilitates settlements through Lok Adalats, making it a recognized method for debt resolution."
  },
  {
    question: "How does the Odisha Money Lenders Act help borrowers?",
    answer: "The Odisha Money Lenders Act, 1939, is a key protection for borrowers. It mandates that lenders must be registered and caps interest rates (typically 9% for secured and 12% for unsecured loans). Crucially, it empowers courts to reopen transactions where interest is excessive and enforces the 'Damdupat' rule, ensuring you don't pay interest exceeding the principal amount."
  },
  {
    question: "I live in Bhubaneswar. Can I settle my personal loan?",
    answer: "Absolutely. Whether you are in Bhubaneswar, Cuttack, or Rourkela, if you are facing financial hardship, you can settle your personal loan. We help you negotiate with banks to waive off penal charges and a portion of the interest, allowing you to close the loan with a single manageable payment."
  },
  {
    question: "Does AMA Legal Solutions have an office in Cuttack?",
    answer: "AMA Legal Solutions is a digital-first Pan-India firm. We handle all negotiations, documentation, and legal notices remotely from our central office, serving clients across Odisha including Cuttack. For any physical legal representation required in the Odisha High Court or local tribunals, we collaborate with our network of experienced local lawyers."
  },
  {
    question: "What is the Anti-Extortion Helpline in Odisha?",
    answer: "The Commissionerate Police of Bhubaneswar-Cuttack has launched a dedicated Anti-Extortion Helpline (99389100) to tackle harassment. If recovery agents are threatening you or demanding illegal amounts, you can report them immediately. We also help you file formal complaints to stop such harassment."
  },
  {
    question: "Can I settle a loan if the bank has filed a SARFAESI notice?",
    answer: "Yes, receiving a SARFAESI notice does not mean the end of the road. You can still initiate a One Time Settlement (OTS). In fact, banks often prefer OTS to save the time and cost of auctioning property. We can represent you to stay the proceedings and negotiate a settlement before your property is at risk."
  },
  {
    question: "Will settlement ruin my CIBIL score?",
    answer: "Settling a loan will mark your account as 'Settled' rather than 'Closed' in your credit report, which does impact your score. However, this is a temporary setback and far better than a 'Write-off' or legal default. We provide a post-settlement credit rebuilding guide to help you improve your score over time."
  },
  {
    question: "How effective are Lok Adalats in Odisha for bank loans?",
    answer: "Extremely effective. Recent National Lok Adalats in Odisha have settled thousands of bank recovery cases, with settlement amounts running into crores. For example, in a recent session in Khordha district, over ₹23 crore was realized through settlements. It is a fast, cost-effective, and binding way to resolve your debt."
  },
  {
    question: "Do you handle agricultural loans for farmers in Odisha?",
    answer: "Yes, we understand the importance of agriculture in Odisha. For Kisan Credit Card (KCC) loans or tractor loans, specific relief schemes and OTS policies apply. We can guide farmers on how to avail these benefits and negotiate with banks like Odisha Gramya Bank for a fair settlement."
  },
  {
    question: "What documents do I need to start the process?",
    answer: "To assess your case, we need your loan sanction letter, the latest statement of account, any notices received from the bank (like 138 or SARFAESI), and your KYC documents (Aadhar/PAN). Proof of your financial hardship (like termination letter or medical records) is also vital for a good negotiation."
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
      "name": "Odisha",
      "item": "https://amalegalsolutions.com/services/loan-settlement/odisha"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Odisha: Expert Debt Relief",
  "description": "Struggling with debt in Odisha? Our expert lawyers help you settle loans, stop harassment in Bhubaneswar & Cuttack, and save up to 50% on dues.",
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
  "datePublished": "2023-11-20",
  "dateModified": "2025-01-20",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://amalegalsolutions.com/services/loan-settlement/odisha"
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

export const metadata = {
  title: "Loan Settlement in Odisha | Debt Relief Lawyers Bhubaneswar",
  description:
    "Expert loan settlement in Odisha (Bhubaneswar, Cuttack). Settle personal & business loans legally. Stop police harassment & credit card debt. Free Consultation.",
  keywords: [
    "loan settlement Odisha",
    "debt settlement Bhubaneswar",
    "loan settlement lawyer Cuttack",
    "credit card settlement Rourkela",
    "debt relief services Odisha",
    "One time settlement SBI Odisha",
    "remove debt Odisha",
    "Lok Adalat Bhubaneswar loan",
    "Odisha Money Lenders Act lawyer"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/odisha',
  },
  openGraph: {
    title: "Loan Settlement in Odisha | Expert Debt Relief",
    description: "Burdened by debt in Odisha? We negotiate with banks to reduce your dues and stop harassment in Bhubaneswar, Cuttack, and across the state.",
    url: "https://amalegalsolutions.com/services/loan-settlement/odisha",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Odisha",
      },
    ],
  },
};

export default function LoanSettlementOdishaPage() {
  const tocSections = [
    { id: "introduction", title: "Debt Relief in Odisha" },
    { id: "what-is-settlement", title: "Understanding Settlement" },
    { id: "odisha-legal-framework", title: "Odisha Legal Laws" },
    { id: "lok-adalat-odisha", title: "Lok Adalat & Success" },
    { id: "why-choose-ama", title: "Why Choose AMA" },
    { id: "settlement-process", title: "Our Process" },
    { id: "harassment-laws", title: "Stop Harassment" },
    { id: "documents", title: "Documents Needed" },
    { id: "city-services", title: "Service Areas" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Odisha", href: "/services/loan-settlement/odisha" },
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
              Expert <span className="text-[#D2A02A]">Loan Settlement</span> Services in <br className="hidden md:block"/> Odisha
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              From Bhubaneswar to Rourkela, we help you legally settle your debts, stop agent harassment, and rebuild your financial dignity.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC components */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Finding Financial Freedom in Odisha</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Odisha is witnessing rapid economic growth, from the IT hubs of Bhubaneswar to the industrial belts of Angul and Jharsuguda. However, financial instability can strike anyone. Whether it is a business affected by cyclones, a personal medical emergency, or job loss, debt can pile up quickly.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    If you are dealing with aggressive recovery agents or the fear of a legal notice in Cuttack or Puri, you need to know your rights. Using the **Odisha Money Lenders Act** and other legal provisions, you can protect yourself from exploitation. **Loan Settlement** is a dignified, legal way to exit the debt trap without filing for bankruptcy.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions is here to stand by you. We deal with banks daily, understanding their internal policies to negotiate a settlement that you can actually afford, ensuring you can live debt-free in Odisha.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is Loan Settlement (OTS)?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Loan settlement, or One Time Settlement (OTS), is a legal agreement where the bank agrees to accept a reduced payment—often significantly lower than the total dues—to close a loan account permanently."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is not charity; it is a business decision for banks to clear their books of Non-Performing Assets (NPAs). If you have a genuine valid reason for default, banks are willing to negotiate.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For instance, if you have a credit card debt of ₹3 Lakhs that has ballooned to ₹6 Lakhs due to interest, we can step in. We can negotiate to waive the inflated interest and penalties, potentially settling the account for ₹2-3 Lakhs.
                  </p>
                </section>

                {/* Odisha Legal Framework */}
                <section id="odisha-legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections for Borrowers in Odisha</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The state of Odisha has robust laws to protect residents from predatory lending and harassment.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Odisha Money Lenders Act, 1939</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act is a shield against unfair practices. Key benefits include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li><strong>Interest Cap:</strong> It strictly regulates interest rates, typically capping them (e.g., 9% secured, 12% unsecured) to prevent usury.</li>
                    <li><strong>Damdupat Rule:</strong> It enforces the principle that total interest recoverable cannot exceed the principal amount at any given time.</li>
                    <li><strong>Registration:</strong> It makes it mandatory for money lenders to be registered, making loans from unlicensed lenders legally potentially unenforceable.</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Anti-Extortion & Protection Acts</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The **Commissionerates of Bhubaneswar and Cuttack** have taken a strong stance against extortion by recovery agents. The **Odisha Protection of Interests of Depositors Act** also reflects the state's intent to curb financial fraud, creating a legal environment that favors fair treatment of the common man.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat-odisha" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: Fast-Track Settlement in Odisha</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The **Odisha State Legal Services Authority (OSLSA)** organizes Lok Adalats that have proven incredibly successful for bank recovery cases.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Record-Breaking Settlements</h3>
                    <p className="text-gray-700 mb-4">
                      In 2025 alone, district-level Lok Adalats in Odisha disposed of over 1.9 lakh cases with settlements worth ₹130.8 Crore. A single event in Khordha district saw ₹23 Crore realized. This shows that banks in Odisha are actively looking to settle.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Binding Decision:</strong> The award is final and legally binding on the bank.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Cost-Free:</strong> There are no court fees involved in this process.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Amicable:</strong> It encourages compromise rather than confrontation.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our team can represent you in these Lok Adalats to ensure your voice is heard and you get a settlement that respects your financial constraints.
                  </p>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We bring professional legal defense to your doorstep in Odisha.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">👮</div>
                      <h3 className="font-bold text-xl mb-2">Police Protection</h3>
                      <p className="text-gray-600">We utilize the Anti-Extortion helpline and Cuttack-Bhubaneswar police resources to stop harassment immediately.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Local Insight</h3>
                      <p className="text-gray-600">We understand the specific operations of Odisha's banks and the legal tendencies of OSLSA Lok Adalats.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Proven Savings</h3>
                      <p className="text-gray-600">Our clients in Odisha have saved lakhs on interest waivers through our expert negotiation strategies.</p>
                    </div>
                  </div>
                </section>

{/* Process Section */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our 4-Step Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have a structured approach to help you clear your debts in Odisha.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your financial health and loan details. We check if your loan is secured or unsecured and identify the best settlement scheme available under RBI guidelines.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Notice & Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We officially intimate the bank that AMA Legal Solutions represents you. This legal buffer helps stop the daily harassment calls and forces the bank to deal with professionals.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We negotiate hard. Whether it's facing the bank's recovery team or presenting your case in a Lok Adalat in Cuttack, we fight for the lowest possible settlement figure.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once the settlement amount is paid, we ensure you receive the 'No Dues Certificate' and that your loan account is closed in the bureau records.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Harassment Laws & Police Helpline */}
                <section id="harassment-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Fighting Harassment in Odisha</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha Police has zero tolerance for extortion by recovery agents. Use these resources if you are being threatened.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h4 className="font-bold text-lg mb-2 text-red-700">Police Helplines</h4>
                      <p className="text-gray-700 mb-2"><strong>Emergency:</strong> Dial 112.</p>
                      <p className="text-gray-700 mb-2"><strong>Anti-Extortion (Bhubaneswar-Cuttack):</strong> 99389100. (WhatsApp/Telegram/SMS supported).</p>
                      <p className="text-gray-700"><strong>Bhubaneswar Control Room:</strong> 0674-100 / 0674-2973888.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-lg mb-2 text-blue-700">Cyber Crime Cell</h4>
                      <p className="text-gray-700 mb-2"><strong>National Helpline:</strong> 1930.</p>
                      <p className="text-gray-700 mb-2"><strong>Odisha Cyber Helpline:</strong> 7077798111.</p>
                      <p className="text-gray-700"><strong>Cuttack Crime Branch:</strong> 0671-2305485.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Your Right:</strong> Agents cannot call at odd hours, use abusive language, or visit your workplace without notice. If they do, we help you file a complaint.
                  </p>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents for OTS</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Keep these ready to speed up your settlement:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Aadhar & PAN Card
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Latest Loan Statement
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Employment/Income Proof
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Proof of Financial Hardship
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Legal Notices (if any)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Correspondence with Bank
                    </li>
                  </ul>
                </section>

                {/* Service Areas */}
                <section id="city-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All Districts of Odisha</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our digital services are available across the state.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Bhubaneswar</h4>
                      <p className="text-xs text-gray-500">Capital City</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Cuttack</h4>
                      <p className="text-xs text-gray-500">Silver City</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Rourkela</h4>
                      <p className="text-xs text-gray-500">Steel City</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Berhampur</h4>
                      <p className="text-xs text-gray-500">Silk City</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Sambalpur</h4>
                      <p className="text-xs text-gray-500">Western Odisha</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Puri</h4>
                      <p className="text-xs text-gray-500">Pilgrim City</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Balasore</h4>
                      <p className="text-xs text-gray-500">Coastal Odisha</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Bhadrak</h4>
                      <p className="text-xs text-gray-500">Bhadrak District</p>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
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
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Start Your New Life in Odisha</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't let debt hold you back. Let us help you settle your loans and regain your peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help in Odisha?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our loan settlement experts serving Bhubaneswar and Cuttack.
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
                      <Link href="/services/cheque-bounce-lawyer" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cheque Bounce Lawyer
                      </Link>
                    </li>
                     <li>
                      <Link href="/services/legal-notice" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Legal Notice
                      </Link>
                    </li>
                  </ul>
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
                  href="/services/loan-settlement/odisha-gramya-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Odisha Gramya Bank</span>
                </Link>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  We also handle settlement for regional institutions.
                </p>
              </div>
            </section>
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

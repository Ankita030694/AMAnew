import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Detailed FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is 'Kanduvatti' legal in Tamil Nadu?",
    answer: "No, 'Kanduvatti' (charging exorbitant interest) is strictly illegal under the Tamil Nadu Prohibition of Charging Exorbitant Interest Act, 2003. Lenders charging daily interest (Meter Vatti), hourly interest, or rates above the government-mandated cap can face up to 3 years of imprisonment. We help you file complaints and settle only the principal + legal interest."
  },
  {
    question: "What is the new Tamil Nadu Money Lending Entities Act, 2025?",
    answer: "The Tamil Nadu Money Lending Entities (Prevention of Coercive Actions) Act, 2025, is a recent legislation designed to stop aggressive recovery by fintech apps and micro-finance companies. It criminalizes harassment, public shaming, and threats by recovery agents. It also holds the directors of these lending companies liable for the actions of their agents."
  },
  {
    question: "I am an IT employee in OMR/Chennai with credit card debt. Can you help?",
    answer: "Yes, we specialize in helping Chennai's tech workforce. Whether you work in OMR, Porur, or Siruseri, we know the pressure of high rents and lifestyle costs. We negotiate with banks (HDFC, ICICI, Citi, etc.) to consolidate your multiple credit card dues into a single settlement, saving you up to 50% and stopping the harassment."
  },
  {
    question: "Can MSMEs in Tirupur/Coimbatore get loan settlement?",
    answer: "Absolutely. We understand the crisis caused by fluctuating yarn prices and electricity costs. We assist MSMEs in Tirupur and Coimbatore in restructuring their business loans or opting for One Time Settlement (OTS) without declaring bankruptcy, allowing you to keep your machinery and operations running."
  },
  {
    question: "Do you handle questions related to the 'Madras High Court Ruling on Recovery Agents'?",
    answer: "Yes. The Madras High Court (Justice Kuna Santhosh Kumar vs RBI case, April 2024) strictly banned banks from sending agents to borrowers' homes to threaten them. We use this judgment to issue legal notices to banks if they send 'musclemen' to your doorstep, forcing them to back down and negotiate civilly."
  },
  {
    question: "How do I file a police complaint against a loan shark in Tamil Nadu?",
    answer: "You can use the 'Kaaval Uthavi' app or dial 100/112. For Kanduvatti specifically, many districts have dedicated cells. We assist you in drafting a formal police complaint that cites the specific sections of the 2003 Act, increasing the chances of an FIR being registered against the illegal lender."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement drops your score initially as the account is marked 'Settled'. However, this is better than a 'Write-off' or 'Suit Filed' status. We provide a post-settlement credit repair guide to help you rebuild your score to 750+ within 18-24 months."
  },
  {
    question: "What is 'Meter Vatti' and how do I stop it?",
    answer: "'Meter Vatti' is a predatory practice where interest is charged on an hourly or daily basis on the loan amount not paid. This is a criminal offense. If you are a victim, do not pay another rupee. Contact us immediately. We will help you deposit the legal principal amount in court under the 2003 Act and get the loan declared as discharged."
  },
  {
    question: "Do you have lawyers in Madurai and Salem?",
    answer: "Yes, AMA Legal Solutions has a pan-Tamil Nadu presence. We have associate lawyers in Madurai, Salem, Trichy, and Erode to handle physical court appearances or Lok Adalat representations if required, while our central team handles the bank negotiations."
  },
  {
    question: "How much can I save through settlement?",
    answer: "While it depends on the delinquency period, we typically save clients 40-60% of the total outstanding amount. We aim for a 'Principal-Only' settlement where possible, waiving off the accumulated penalties and exorbitant interest."
  }
];

// Enhanced Breadcrumb Schema
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
      "name": "Tamil Nadu",
      "item": "https://amalegalsolutions.com/services/loan-settlement/tamil-nadu"
    }
  ]
};

// Enhanced Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement in Tamil Nadu | Stop Kanduvatti & Harassment",
  "description": "Expert debt relief in Tamil Nadu. Settle loans under the 2003 Kanduvatti Act & 2025 Coercive Actions Act. Specialized help for Chennai IT professionals & Tirupur MSMEs.",
  "image": "https://amalegalsolutions.com/services/chennai-central.jpg",
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
  "dateModified": "2025-05-20",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://amalegalsolutions.com/services/loan-settlement/tamil-nadu"
  },
  "about": {
    "@type": "Thing",
    "name": "Debt Settlement",
    "description": "Legal process of settling debt for a reduced amount."
  },
  "mentions": [
    {
      "@type": "Legislation",
      "name": "Tamil Nadu Prohibition of Charging Exorbitant Interest Act, 2003"
    },
    {
      "@type": "Legislation",
      "name": "Tamil Nadu Money Lending Entities (Prevention of Coercive Actions) Act, 2025"
    }
  ]
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
  title: "Loan Settlement Tamil Nadu | Stop Kanduvatti & Harassment",
  description:
    "#1 Loan Settlement in Tamil Nadu. Settle debts under 2003 Kanduvatti Act. Expert help for Chennai IT professionals, Coimbatore MSMEs. Stop recovery harassment now.",
  keywords: [
    "loan settlement Tamil Nadu",
    "Kanduvatti complaint number",
    "debt settlement Chennai",
    "Tamil Nadu Prohibition of Charging Exorbitant Interest Act 2003",
    "credit card settlement Chennai for IT professionals",
    "MSME loan settlement Tirupur",
    "stop recovery harassment Coimbatore",
    "Madras High Court loan recovery judgment 2024",
    "debt relief lawyers Madurai",
    "Tamil Nadu Money Lending Entities Act 2025"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/tamil-nadu',
  },
   openGraph: {
    title: "Loan Settlement in Tamil Nadu | Stop Kanduvatti & Harassment",
    description: "Burdened by debt in Chennai or Coimbatore? Use the 2003 Kanduvatti Act to stop harassment and settle loans for less. We protect IT staff and MSMEs.",
    url: "https://amalegalsolutions.com/services/loan-settlement/tamil-nadu",
    type: "website",
    images: [
      {
        url: "/services/chennai-central.jpg",
        width: 1200,
        height: 630,
        alt: "Tamil Nadu Loan Settlement Services",
      },
    ],
  },
};

export default function LoanSettlementTamilNaduPage() {
  const tocSections = [
    { id: "introduction", title: "Tamil Nadu's Debt Reality" },
    { id: "what-is-settlement", title: "Understanding OTS" },
    { id: "legal-framework", title: "Kanduvatti & Laws" },
    { id: "it-crisis", title: "Chennai IT Debt Crisis" },
    { id: "msme-relief", title: "MSME Relief (Tirupur)" },
    { id: "high-court", title: "High Court Protective Rulings" },
    { id: "process", title: "Settlement Process" },
    { id: "harassment", title: "Stop Harassment" },
    { id: "service-areas", title: "Services by City" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Tamil Nadu", href: "/services/loan-settlement/tamil-nadu" },
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
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/services/chennai-central.jpg')", backgroundColor: "#111" }} 
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-10">
              <span className="text-[#D2A02A]">Tamil Nadu's Trusted</span> <br/> Debt Settlement Experts
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-200 font-light">
              From the IT corridors of **OMR** to the textile hubs of **Tirupur**, we help you defeat **Kanduvatti** and settle bank loans legally.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full md:w-auto">
                  Free Debt Analysis
                </button>
              </Link>
              <a href="tel:+918700343611">
                 <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-10 rounded-full transition-all text-lg w-full md:w-auto">
                   Call Experts: +91-8700343611
                 </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-30">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Financial Freedom for Tamil Nadu</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Tamil Nadu is an economic powerhouse, home to Chennai's booming SaaS industry, Coimbatore's precision engineering, and Tirupur's global textile dominance. Yet, behind this industrial success lies a silent crisis of debt. The high cost of urban living in <strong>Chennai</strong>, fluctuating yarn prices affecting <strong>MSMEs</strong>, and the predatory menace of <strong>"Kanduvatti" (usury)</strong> have trapped thousands in a cycle of financial stress.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Whether you are a software engineer in Taramani facing credit card pile-ups or a textile unit owner in Erode struggling with business loans, there is a legal way out. <strong>AMA Legal Solutions</strong> brings authoritative legal expertise to help you stop harassment, reduce your debt burden, and regain your peace of mind.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Understanding One Time Settlement (OTS)</h2>
                  <div className="flex flex-col md:flex-row gap-6 items-center bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
                    <div className="flex-1">
                      <p className="text-orange-900 text-lg font-medium italic mb-2">
                        "OTS is your legal right to exit a debt trap with dignity."
                      </p>
                      <p className="text-gray-700">
                        It involves negotiating with the bank to waive off the accumulated interest and penalties, allowing you to pay just a portion of the principal (or slightly more) to close the account forever.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-xl mb-4 text-gray-800">Who is Eligible?</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Unsecured loans (Credit Cards, Personal Loans).</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Borrowers with genuine financial hardship (Job loss, Medical).</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> MSMEs facing cash flow crunch due to market factors.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-4 text-gray-800">The Outcome</h4>
                        <p className="text-gray-700 leading-relaxed">
                            You get a formal "Settlement Letter" from the bank. The harassment stops immediately. You become debt-free in months, not years.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Legal Framework - Deep Dive */}
                <section id="legal-framework" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#D2A02A] text-white text-xs font-bold rounded uppercase tracking-wider">Know Your Rights</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Defeating Kanduvatti & Legal Shields</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8">
                    Tamil Nadu has some of the stringent laws in India against predatory lending. We use these laws as a shield for our clients.
                  </p>

                  <div className="space-y-8">
                    {/* The Kanduvatti Act */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-red-900 text-white p-4">
                            <h3 className="text-xl font-bold">Tamil Nadu Prohibition of Charging Exorbitant Interest Act, 2003</h3>
                        </div>
                        <div className="p-6 bg-white">
                            <p className="text-gray-700 mb-4">
                                Commonly known as the <strong>Anti-Kanduvatti Act</strong>, this powerful law was enacted to crush the practice of usury.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-red-800 mb-2">Illegal Practices Defined</h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li>• <strong>Kanduvatti:</strong> Exorbitant interest.</li>
                                        <li>• <strong>Meter Vatti:</strong> Daily/Hourly interest.</li>
                                        <li>• <strong>Thandal:</strong> Collecting interest with principal daily.</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-green-800 mb-2">Your Remedy</h4>
                                    <p className="text-sm text-gray-700">
                                        You can petition the court to deposit the legal principal amount. The court can declare the loan discharged. Lenders face up to 3 years in jail and ₹30,000 fine.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New 2025 Act */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">TN Money Lending Entities (Prevention of Coercive Actions) Act, 2025</h3>
                        <p className="text-gray-700 mb-4">
                            The latest weapon in borrower protection. This Act specifically targets modern "Fintech Loan Apps" and "Micro-finance" companies.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>• No Public Shaming:</strong> Calling relatives or colleagues is a criminal offense.</li>
                            <li><strong>• Director Liability:</strong> The top management of the lending company can be arrested for the harassment caused by their ground-level agents.</li>
                        </ul>
                    </div>
                  </div>
                </section>

                {/* IT Sector Focus */}
                <section id="it-crisis" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Chennai's IT & SaaS Debt Trap</h2>
                  <div className="relative bg-blue-900 text-white p-8 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">For Techies in OMR, Porur & Siruseri</h3>
                        <p className="text-blue-100 text-lg mb-6">
                            High salaries in Chennai's SaaS boom often come with high liabilities. One missed project deadline or layoff can spiral finances out of control.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-800/50 p-4 rounded-lg backdrop-blur-sm">
                                <h4 className="font-bold text-yellow-400 mb-2">The "Minimum Due" Mirage</h4>
                                <p className="text-sm">
                                    Paying the "Minimum Due" on your HDFC or Citibank card feels safe, but at 42% APR, your debt doubles every 2 years. We help you break this cycle.
                                </p>
                            </div>
                            <div className="bg-blue-800/50 p-4 rounded-lg backdrop-blur-sm">
                                <h4 className="font-bold text-yellow-400 mb-2">PL Stacking</h4>
                                <p className="text-sm">
                                    Taking a Personal Loan to pay off a Credit Card is common but dangerous. We negotiate a combined settlement for all your unsecured debts.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>

{/* MSME & Textile Sector Relief */}
                <section id="msme-relief" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">MSME Debt Relief (Coimbatore & Tirupur)</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    For the industrial belt of Western Tamil Nadu, the challenge is operational debt. Spiraling yarn prices and power tariffs have pushed many thriving units into the NPA zone.
                  </p>
                  
                  <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600 mb-8">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Restructuring vs. Bankruptcy</h3>
                    <p className="text-gray-700 text-lg">
                      Many business owners fear that NPA means the end. It doesn't.
                    </p>
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-bold text-gray-900">For Secured Loans (Machinery/Land)</h4>
                            <p className="text-sm text-gray-600">
                                We help you apply for <strong>MSME Restructuring</strong> schemes that extend the tenure and lower the EMI, preventing the bank from auctioning your assets under SARFAESI.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-bold text-gray-900">For Unsecured Business Loans</h4>
                            <p className="text-sm text-gray-600">
                                We negotiate a settlement (OTS) to close the loan at 25-40% of the value, citing market volatility as the genuine reason for default.
                            </p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* High Court Rulings */}
                <section id="high-court" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">High Court Judgments Protecting You</h2>
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">Ban on Musclemen</h4>
                        <p className="text-gray-600 text-sm mb-3"><em>Ref: Kuna Santhosh Kumar vs. RBI (Madras HC, April 2024)</em></p>
                        <p className="text-gray-700">
                            In this landmark judgment, the Madras High Court explicitly stated that banks cannot use "muscle power" or goons to recover loans. It directed that any agent visiting a borrower must carry an ID card and authorization. Violent recovery is a violation of your fundamental rights (Article 21).
                        </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">Reining in Digital Lenders</h4>
                        <p className="text-gray-600 text-sm mb-3"><em>Ref: Recent Cyber Wing Circulars</em></p>
                        <p className="text-gray-700">
                            The Tamil Nadu Police Cyber Wing, backed by court directives, has made it a priority to book loan apps that morph photos or harass contacts. We use these circulars to file strong cyber complaints (CSR) that force these apps to delete your data.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Settlement Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">The "AMA" Settlement Strategy</h2>
                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
                    
                    <div className="space-y-12">
                        <div className="relative flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">1</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Shielding</h3>
                                <p className="text-gray-700">
                                    We issue a legal notice under the <strong>2003 Kanduvatti Act</strong> or relevant banking codes to the lender. This immediately shifts the power dynamic. They know you are legally represented.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">2</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Analysis</h3>
                                <p className="text-gray-700">
                                    We analyze your "True Paying Capacity". We prove to the bank that you simply cannot pay the inflated amount, backing it with income proofs and other liability statements.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">3</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Negotiation at HQ Level</h3>
                                <p className="text-gray-700">
                                    Our team negotiates directly with the Credit Managers at the bank's zonal offices in Chennai or Mumbai, bypassing the aggressive local collection agents who have no decision-making power.
                                </p>
                            </div>
                        </div>

                         <div className="relative flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">4</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Closure & No Dues</h3>
                                <p className="text-gray-700">
                                    You pay the agreed settlement amount directly to the bank (never to us or an agent). We review the <strong>Settlement Letter</strong> to ensure there are no hidden clauses.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Harassment Laws & Police Helpline */}
                <section id="harassment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Emergency Help in Tamil Nadu</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    If agents are at your home or work, use these resources.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl mb-4 text-red-700 flex items-center">
                        <span className="text-2xl mr-2">👮‍♂️</span> Police Helplines
                      </h4>
                       <div className="space-y-2">
                        <p className="text-gray-900"><strong>Emergency:</strong> 100 / 112</p>
                        <p className="text-gray-900"><strong>Cyber Crime:</strong> 1930</p>
                        <p className="text-gray-900"><strong>Chennai Anti-Kanduvatti Cell:</strong> Check local commissionerate listings.</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl mb-4 text-blue-700 flex items-center">
                        <span className="text-2xl mr-2">📱</span> Kaaval Uthavi App
                      </h4>
                      <p className="text-gray-700 text-sm mb-4">
                          The Tamil Nadu Police's official app "Kaaval Uthavi" has an SOS button that sends your live location to the nearest control room. Use this if agents are threatening you physically.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Service Areas */}
                <section id="service-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Serving across Tamil Nadu</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    We cover every major district with a mix of digital negotiation and local legal support.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { city: "Chennai", desc: "Metro Region" },
                      { city: "Coimbatore", desc: "Textile/Engg Hub" },
                      { city: "Madurai", desc: "Temple City" },
                      { city: "Tirupur", desc: "Export Hub" },
                      { city: "Salem", desc: "Steel City" },
                      { city: "Trichy", desc: "Central TN" },
                      { city: "Erode", desc: "Turmeric City" },
                      { city: "Tirunelveli", desc: "Southern Hub" }
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 border border-gray-100 rounded-lg hover:border-[#D2A02A] hover:bg-yellow-50 transition-all text-center group">
                        <h4 className="font-bold text-gray-900 group-hover:text-[#D2A02A]">{item.city}</h4>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <details key={index} className="group bg-gray-50 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-bold text-lg">
                          <h3 className="hover:text-[#D2A02A] transition-colors">{faq.question}</h3>
                          <span className="relative size-5 shrink-0">
                            <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-gray-700 pl-2 border-l-2 border-[#D2A02A]">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/services/pattern.png')] opacity-10"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                      Reclaim Your Life from Debt
                    </h2>
                    <p className="text-base md:text-xl opacity-90 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
                      Join thousands of Tamil Nadu residents who have legally settled their loans and are now debt-free.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                          Start Settlement Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-white/10 backdrop-blur-md border md:border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>
            
            {/* Right Sidebar - Sticky */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need Urgent Help?</h3>
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

                {/* State Data */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-4 text-[#D2A02A]">State Data</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="opacity-70 text-gray-700">Anti-Kanduvatti Act</span>
                            <span className="font-bold text-green-600">Active</span>
                        </li>
                         <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="opacity-70 text-gray-700">Lok Adalat (2024)</span>
                            <span className="font-bold text-gray-900">₹695 Cr Settled</span>
                        </li>
                         <li className="flex justify-between">
                            <span className="opacity-70 text-gray-700">Kaaval Uthavi</span>
                            <span className="font-bold text-blue-600">App Live</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>

          {/* Banks Grid - Full Width */}
          <div className="mt-20 md:mt-32">
            <section className="my-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                We Settle Loans From
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                From nationalized giants to regional banks in Tamil Nadu, we handle them all.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                    "SBI", "HDFC", "ICICI", "Kotak Mahindra", "Axis Bank", 
                    "IndusInd", "IDFC First", "Yes Bank", "Bajaj Finserv", "City Union Bank"
                ].map((bank) => (
                    <Link 
                      key={bank}
                      href={`/services/loan-settlement/${bank.toLowerCase().replace(' ', '-')}`}
                      className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:border-[#D2A02A] hover:-translate-y-1 group"
                    >
                      <span className="text-gray-800 font-bold group-hover:text-[#D2A02A] transition-colors">{bank}</span>
                    </Link>
                ))}
              </div>
               <div className="mt-8 text-center">
                  <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-200">
                    including City Union Bank (CUB) & Karur Vysya Bank (KVB)
                  </span>
                </div>
            </section>
          </div>

          {/* States Grid - Full Width */}
          <div className="mt-20">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
              customSlugs={{
                "Andhra Pradesh": "AndhraPradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "Assam",
                "Bihar": "Bihar",
                "Chhattisgarh": "Chhattisgarh",
                "Delhi": "Delhi",
                "Goa": "Goa",
                "Gujarat": "Gujarat",
                "Haryana": "Haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "Jharkhand",
                "Karnataka": "karnataka",
                "Kerala": "Kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "Maharashtra",
                "Manipur": "Manipur",
                "Meghalaya": "Meghalaya",
                "Mizoram": "Mizoram",
                "Odisha": "odisha",
                "Puducherry": "puducherry",
                "Punjab": "Punjab",
                "Rajasthan": "Rajasthan",
                "Sikkim": "Sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "Telangana",
                "Tripura": "tripura",
                "Uttar Pradesh": "UttarPradesh",
                "Uttarakhand": "Uttrakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
          
        </div>
      </div>
    </>
  );
}

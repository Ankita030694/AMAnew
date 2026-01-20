import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Detailed FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Karnataka?",
    answer: "Yes, loan settlement is a fully legal and regulated financial process in Karnataka. It is governed by the Indian Contract Act, 1872, and supported by local legislations such as the Karnataka Money Lenders Act, 1961. The process involves a mutual agreement between the borrower and the lender (bank or NBFC) to close a loan account for a reduced sum, typically when the borrower is unable to repay due to genuine financial hardship."
  },
  {
    question: "What is the Karnataka Micro Loan and Small Loan Ordinance, 2025?",
    answer: "The Karnataka Micro Loan and Small Loan (Prevention of Coercive Actions) Ordinance, 2025, is a landmark law protecting borrowers. It explicitly prohibits coercive recovery practices by microfinance institutions and money lenders. Key protections include a ban on seizing property without due process, mandatory registration for lenders, and the potential discharge of loans from unlicensed entities. It empowers police to take suo motu action against harassment."
  },
  {
    question: "I am an IT professional in Bangalore with huge credit card debt. Can you help?",
    answer: "Absolutely. We specialize in helping Bangalore's IT and startup workforce. We understand the 'minimum due' trap and high lifestyle costs. We negotiate with major credit card issuers (HDFC, ICICI, SBI, Amex) to stop interest accumulation and settle the total outstanding for a fraction of the cost, usually saving you 50-60% of the inflated dues."
  },
  {
    question: "Does the 2025 Ordinance apply to bank loans?",
    answer: "While the Ordinance specifically targets micro-finance institutions and unlicensed money lenders, the principles of 'prevention of coercive recovery' apply universally under RBI guidelines and Supreme Court judgments. Banks cannot use 'musclemen' or harass you. We use the broader legal framework to protect bank loan borrowers as well."
  },
  {
    question: "Can I get a loan waiver under the Karnataka Debt Relief Act?",
    answer: "The Karnataka Debt Relief Act, 2018, was a one-time measure for specific low-income groups (small farmers, landless laborers) for debts owed to private money lenders. It typically does not apply to formal bank loans for the general public. However, for bank loans, 'One Time Settlement' (OTS) is the correct legal route to reduce debt."
  },
  {
    question: "Do you have local lawyers in Hubli and Mangalore?",
    answer: "Yes, AMA Legal Solutions operates across Karnataka. While our central negotiation team handles bank HQs digitally, we have a network of legal associates in Hubli-Dharwad, Mangalore, Belgaum, and Mysore to appear in local civil courts or Lok Adalats if your case requires physical representation."
  },
  {
    question: "How does the 'Damdupat' rule apply in Karnataka?",
    answer: "Courts in Karnataka, upholding principles from the Karnataka Money Lenders Act and the Prohibition of Charging Exorbitant Interest Act, 2004, often apply the 'Damdupat' rule. This rule limits the maximum interest recoverable at any one time to not exceed the principal amount. If a lender claims 3x or 4x the principal as interest, we challenge it in court."
  },
  {
    question: "What should I do if recovery agents threaten me on WhatsApp?",
    answer: "Do not delete the messages. Take screenshots immediately. The Bangalore City Police has a dedicated WhatsApp helpline (9480801000) for such complaints. You should also report it to the Cyber Crime helpline (1930). We will include this evidence in a legal notice to the bank, demanding an immediate stop to the harassment and compensation."
  },
  {
    question: "Can Karnataka Gramin Bank loans be settled?",
    answer: "Yes, Karnataka Grameena Bank (formerly Karnataka Gramin Bank) actively uses One Time Settlement (OTS) schemes to reduce NPAs. We can represent farmers and rural borrowers to negotiate with their regional offices for a fair settlement, often utilizing their specific 'Rin Mukti' or agriculture-focused settlement modules."
  },
  {
    question: "Will settlement affect my ability to get a home loan later?",
    answer: "Immediately after settlement, your CIBIL score will drop, and the account status will show 'Settled'. This makes new unsecured loans difficult for 12-24 months. However, secured loans (like home loans) are easier to get once you rebuild your score. We provide a comprehensive 'Credit Repair Roadmap' to help you bounce back to a 750+ score within 2 years."
  },
  {
    question: "What is the cost of your debt settlement service?",
    answer: "We charge a success-fee based model, meaning our primary earning is a percentage of the amount we save you. We also have a nominal retainership for the legal notices and harassment protection. The initial consultation is completely free, where we analyze your debt and tell you exactly how much you can save."
  },
  {
    question: "How long does the settlement process take?",
    answer: "It typically takes 3 to 6 months. The timeline depends on your fund arrangement and the bank's approval cycle. During this time, we handle all calls and legal notices, giving you immediate peace of mind while we work towards the closure letter."
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
      "name": "Karnataka",
      "item": "https://amalegalsolutions.com/services/loan-settlement/karnataka"
    }
  ]
};

// Enhanced Article Schema with specifics
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Karnataka | 2025 Ordinance Protection",
  "description": "Expert debt relief in Karnataka. Settle loans under the 2025 Micro Loan Ordinance. Specialized support for Bangalore IT professionals and rural farmers. Stop harassment legally.",
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
  "dateModified": "2025-05-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://amalegalsolutions.com/services/loan-settlement/karnataka"
  },
  "about": {
    "@type": "Thing",
    "name": "Loan Settlement",
    "description": "Legal process of settling debt for a reduced amount."
  },
  "mentions": [
    {
      "@type": "Legislation",
      "name": "Karnataka Money Lenders Act, 1961"
    },
    {
      "@type": "Legislation",
      "name": "Karnataka Micro Loan and Small Loan (Prevention of Coercive Actions) Ordinance, 2025"
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
  title: "Loan Settlement in Karnataka | 2025 Ordinance Debt Relief",
  description:
    "#1 Loan Settlement in Karnataka. Settle debts under 2025 Ordinance. Specialized for Bangalore IT professionals & Credit Cards. Stop harassment in Mysore/Hubli.",
  keywords: [
    "loan settlement Karnataka",
    "debt settlement Bangalore",
    "Karnataka Micro Loan Ordinance 2025",
    "credit card settlement Bangalore",
    "debt relief for IT professionals",
    "Karnataka Gramin Bank OTS scheme",
    "prevent coercive recovery Karnataka",
    "loan settlement lawyer Mysore",
    "credit counseling Hubli",
    "Lok Adalat Bangalore schedule 2025"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/karnataka',
  },
  openGraph: {
    title: "Loan Settlement in Karnataka | Stop Harassment Legally",
    description: "Burdened by debt in Bangalore? We use the 2025 Karnataka Ordinance to stop harassment and settle your loans for up to 50% less.",
    url: "https://amalegalsolutions.com/services/loan-settlement/karnataka",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Karnataka Loan Settlement Services",
      },
    ],
  },
};

export default function LoanSettlementKarnatakaPage() {
  const tocSections = [
    { id: "introduction", title: "Karnataka's Debt Crisis" },
    { id: "what-is-settlement", title: "What is OTS?" },
    { id: "legal-framework", title: "New 2025 Ordinance" },
    { id: "it-sector", title: "IT Sector Debt Trap" },
    { id: "rural-relief", title: "Rural & Farmer Relief" },
    { id: "high-court", title: "High Court Rulings" },
    { id: "process", title: "Settlement Process" },
    { id: "harassment", title: "Stop Harassment" },
    { id: "service-areas", title: "Services by City" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Karnataka", href: "/services/loan-settlement/karnataka" },
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
            style={{ backgroundImage: "url('/services/bangalore-skyline.jpg')", backgroundColor: "#111" }} // Fallback color
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-10">
              <span className="text-[#D2A02A]">Karnataka's Premier</span> <br/> Loan Settlement Service
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-200 font-light">
              We leverage the <strong>2025 Prevention of Coercive Actions Ordinance</strong> to protect you. From Bangalore's tech parks to Mysore's heritage lanes, we help you settle debts with dignity.
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
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            {/* Left Sidebar - TOC components */}
            <div className="hidden lg:block sticky top-24 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 px-2">Table of Contents</h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-30">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-10 md:space-y-16">
                
                {/* Introduction - The Dual Economy Context */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Navigating Financial Stress in Karnataka</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Karnataka presents a unique economic paradox. On one hand, <strong>Bangalore (Bengaluru)</strong> stands as the Silicon Valley of Asia, offering high salaries but demanding an equally exorbitant cost of living. On the other, the agricultural heartlands of <strong>North Karnataka</strong> and the coastal belts of <strong>Mangalore</strong> face their own volatility due to crop cycles and market shifts.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    This dual economy has led to a massive surge in personal debt. In Bangalore, young professionals are falling into the <strong>Credit Card and BNPL (Buy Now Pay Later) trap</strong>, while elsewhere, families struggle with education and business loans. The pressure is compounded by aggressive recovery agents who often cross legal lines.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    However, Karnataka is also a state with strong legal protections. From the historic <em>Money Lenders Act</em> to the progressive <strong>2025 Ordinance</strong>, the law is on the side of the borrower. <strong>AMA Legal Solutions</strong> is here to help you use these laws to settle your debts and restart your life.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Demystifying One Time Settlement (OTS)</h2>
                  <div className="flex flex-col md:flex-row gap-6 items-center bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                    <div className="flex-1">
                      <p className="text-blue-900 text-lg font-medium italic mb-2">
                        "OTS is not a failure; it's a strategic financial reset."
                      </p>
                      <p className="text-gray-700">
                        It is a legal negotiation where the bank agrees to close your loan account for a lump sum payment that is significantly lower than the total amount due.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-xl mb-4 text-gray-800">When is OTS applicable?</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Unsecured loans (Personal Loans, Credit Cards).</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Loss of job or significant income reduction.</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Medical emergencies draining savings.</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Business failure or bankruptcy.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-4 text-gray-800">The Benefit</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Instead of paying ₹10 Lakhs over 5 years with interest, an OTS might allow you to close the loan for ₹3-4 Lakhs today. This stops the interest clock and ends the mental stress of monthly EMIs.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Legal Framework - Deep Dive */}
                <section id="legal-framework" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#D2A02A] text-white text-xs font-bold rounded uppercase tracking-wider">Crucial Update</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The 2025 Ordinance & Legal Shields</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8">
                    Karnataka has recently fortified its borrower protection laws. Understanding these acts is your first line of defense against harassment.
                  </p>

                  <div className="space-y-8">
                    {/* The 2025 Ordinance */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-gray-900 text-white p-4">
                            <h3 className="text-xl font-bold">Karnataka Micro Loan & Small Loan (Prevention of Coercive Actions) Ordinance, 2025</h3>
                        </div>
                        <div className="p-6 bg-white">
                            <p className="text-gray-700 mb-4">
                                This game-changing law was enacted to curb the menace of predatory lending. While aimed at micro-finance, its principles are increasingly cited in broader debt contexts.
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-red-500 font-bold mr-2">🚫</span> 
                                    <span><strong>Ban on Coercion:</strong> Strictly prohibits the use of force, intimidation, or public shaming for debt recovery.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 font-bold mr-2">👮</span> 
                                    <span><strong>Suo Motu Action:</strong> Police are empowered to register cases against harassers without waiting for a formal court order.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 font-bold mr-2">❌</span> 
                                    <span><strong>Discharge of Illegal Loans:</strong> Loans from unlicensed lenders (loan sharks) may be deemed wholly discharged if they violate this ordinance.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Money Lenders Act */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Karnataka Money Lenders Act, 1961</h3>
                        <p className="text-gray-700 mb-4">
                            The foundation of lending regulation in the state. It mandates that all lenders must be licensed.
                        </p>
                        <p className="text-gray-700">
                            <strong>Key Protection:</strong> It enforces the <strong>'Damdupat'</strong> rule in many civil findings. This ancient legal principle states that the amount of interest recoverable at any one time cannot exceed the principal amount. If your bank is asking for ₹5 Lakh interest on a ₹2 Lakh principal, this Act is your shield.
                        </p>
                    </div>

                    {/* Exorbitant Interest Act */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Prohibition of Charging Exorbitant Interest Act, 2004</h3>
                        <p className="text-gray-700">
                            This Act makes charging usurious interest rates a criminal offense punishable by up to 3 years in imprisonment. It allows borrowers to petition the court to seek a declaration that the loan is satisfied if reasonable interest has mainly been paid.
                        </p>
                    </div>
                  </div>
                </section>

                {/* IT Sector Focus */}
                <section id="it-sector" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The "Silicon Valley" Debt Trap</h2>
                  <div className="relative bg-indigo-900 text-white p-8 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">For IT Professionals & Startup Employees</h3>
                        <p className="text-indigo-100 text-lg mb-6">
                            "I earn ₹1.5 Lakh a month, but I am broke by the 5th." — A common story in HSR Layout and Whitefield.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-indigo-800/50 p-4 rounded-lg backdrop-blur-sm">
                                <h4 className="font-bold text-yellow-400 mb-2">The Credit Card Spiral</h4>
                                <p className="text-sm">
                                    Maintaining a 'tech lifestyle' often leads to maximizing multiple credit cards. Paying only the 'Minimum Due' (5%) ensures you stay in debt for decades with 40%+ interest.
                                </p>
                            </div>
                            <div className="bg-indigo-800/50 p-4 rounded-lg backdrop-blur-sm">
                                <h4 className="font-bold text-yellow-400 mb-2">Layoff Uncertainty</h4>
                                <p className="text-sm">
                                    The volatility of the tech sector means a sudden layoff can turn manageable EMIs into a crisis. Severance packages often don't cover outstanding personal loans.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-indigo-700">
                            <h4 className="font-bold mb-2">How We Help Techies:</h4>
                            <p className="text-sm opacity-90">
                                We negotiate privately with banks like HDFC, ICICI, SBI, and Axis. We aim to convert your multiple card dues into a single, reduced settlement figure, protecting your future career from legal hassles.
                            </p>
                        </div>
                    </div>
                  </div>
                </section>

{/* Rural & Farmer Relief */}
                <section id="rural-relief" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Rural Debt & Farmer Relief</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    For our clients in Mandya, Haveri, and Belgaum, the challenges are different. Crop failure leads to KCC (Kisan Credit Card) defaults and tractor loan dues.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600 mb-8">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Karnataka Grameena Bank OTS</h3>
                    <p className="text-gray-700 text-lg">
                      The Karnataka Grameena Bank (formerly Karnataka Gramin Bank + Vikas Grameena Bank) has very active <strong>One Time Settlement (OTS)</strong> modules. In FY 2024-25, they settled over 1 lakh accounts!
                    </p>
                    <p className="text-gray-700 mt-4">
                      <strong>How we help farmers:</strong> We formally apply for these OTS schemes on your behalf, ensuring you get the maximum innovative waiver (often including significant interest reversal) without needing to pay bribes or deal with middle-men.
                    </p>
                  </div>
                </section>

                {/* High Court Rulings */}
                <section id="high-court" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">High Court Judgments Protecting You</h2>
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">Illegal Vehicle Seizure</h4>
                        <p className="text-gray-600 text-sm mb-3"><em>Ref: Sunderbhai Ambalal Desai Case Principles</em></p>
                        <p className="text-gray-700">
                            The Karnataka High Court has repeatedly ruled that banks/agents cannot seize vehicles (cars, two-wheelers) without due legal process. Seizing a vehicle by force on the roadside is <strong>theft</strong>. We use these rulings to get your vehicle released immediately through the Magistrate courts.
                        </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">No "Musclemen" for Recovery</h4>
                        <p className="text-gray-600 text-sm mb-3"><em>Ref: Recent Guidelines 2024-25</em></p>
                        <p className="text-gray-700">
                            Citing Supreme Court directives, the Karnataka HC firmly states that banks are vicariously liable for the actions of their recovery agents. If an agent abuses you, we can drag the Bank Manager to court.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Settlement Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our 4-Step Settlement Strategy</h2>
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
                                    We start by issuing a formidable legal notice to the bank and their collection agency. This notifies them of your representation and warns them against harassment under the <strong>2025 Ordinance</strong>. In 90% of cases, calls stop here.
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
                                    We analyze your finances to determine your "true paying capacity". We don't just ask banks for a discount; we present a data-backed case on why you <em>cannot</em> pay more.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">3</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Hard Negotiation</h3>
                                <p className="text-gray-700">
                                    Our negotiation team in Bangalore engages with the Zonal Managers of banks (HDFC, ICICI, SBI, etc.). We reject the first 3-4 offers until we reach a "Principal-Only" or significant waiver deal.
                                </p>
                            </div>
                        </div>

                         <div className="relative flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">4</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Closure & Peace</h3>
                                <p className="text-gray-700">
                                    We ensure you receive a formal <strong>Settlement Letter</strong> on the bank's letterhead. Only after verifying this do you make the payment. You then receive a 'No Dues Certificate'.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Harassment Laws & Police Helpline */}
                <section id="harassment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Emergency Help in Karnataka</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    If agents are at your door or threatening you, use these official channels immediately.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl mb-4 text-red-700 flex items-center">
                        <span className="text-2xl mr-2">👮‍♂️</span> Bangalore Police
                      </h4>
                      <p className="text-gray-900 mb-3 font-semibold">Special WhatsApp Helpline: <br/><span className="text-2xl">9480801000</span></p>
                      <p className="text-gray-700 text-sm">Send voice notes, screenshots, or location if agents are harassing you. The Commissioner monitors this.</p>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl mb-4 text-blue-700 flex items-center">
                        <span className="text-2xl mr-2">🚓</span> State-Wide Help
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-900"><strong>Emergency:</strong> 112 / 100</p>
                        <p className="text-gray-900"><strong>Cyber Crime:</strong> 1930 (For morphed photos/online threats)</p>
                        <p className="text-gray-900"><strong>Mysore Control:</strong> 0821-2423800</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Service Areas */}
                <section id="service-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Serving Every District</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    While our headquarters handles the legal heavy lifting, our digital reach covers the entire state.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { city: "Bangalore", desc: "IT Hub & Startups" },
                      { city: "Mysore", desc: "Heritage City" },
                      { city: "Hubli-Dharwad", desc: "North KA Hub" },
                      { city: "Mangalore", desc: "Coastal Region" },
                      { city: "Belgaum", desc: "Border District" },
                      { city: "Davangere", desc: "Textile City" },
                      { city: "Bellary", desc: "Mining & Steel" },
                      { city: "Shimoga", desc: "Malnad Region" }
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
                      Don't Let Debt Define Your Future
                    </h2>
                    <p className="text-base md:text-xl opacity-90 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
                      Join thousands of Karnataka residents who have legally settled their loans and are now debt-free.
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
            
            {/* Sidebar Mobile Placement (if needed for structure, but hidden here as it's sticky up top) */}
             <div className="lg:hidden">
                {/* Mobile sidebar content if any */}
             </div>
          </div>

          {/* Banks Grid - Full Width */}
          <div className="mt-20 md:mt-32">
            <section className="my-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                We Settle Loans From
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                From nationalized giants to regional rural banks in Karnataka, we handle them all.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                    "SBI", "HDFC", "ICICI", "Kotak Mahindra", "Axis Bank", 
                    "IndusInd", "IDFC First", "Yes Bank", "Bajaj Finserv", "Karnataka Bank"
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
                    including Karnataka Grameena Bank & Karnataka Vikas Grameena Bank
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

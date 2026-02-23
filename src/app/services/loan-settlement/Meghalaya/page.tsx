import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Detailed FAQ data for rendering and Schema
const faqs = [
  {
    question: "How does the Meghalaya Land Transfer Act affect my bank loan?",
    answer: "The Meghalaya Transfer of Land (Regulation) Act, 1971, prohibits the transfer of tribal land to non-tribals. Since banks are considered 'non-tribal entities', they cannot easily auction your land to recover a loan. We use this legal reality to negotiate strong settlements, as the bank knows its recovery options are severely limited."
  },
  {
    question: "I am a government employee in Shillong. Can I settle my personal loan?",
    answer: "Yes. Many government employees in Shillong face debt traps due to personal loans taken for housing or education. We assist in settling these loans confidentially without affecting your service record. We negotiate directly with banks like SBI, HDFC, and Meghalaya Rural Bank to waive off interest and close the loan."
  },
  {
    question: "What is the Meghalaya Rural Indebtedness Relief Act?",
    answer: "The Meghalaya Rural Indebtedness Relief Act, 1975, was designed to protect rural tribals from moneylenders. While it primarily targets informal debts, its principles of protecting the 'marginalized borrower' can be cited in negotiations with rural banks to seek lenient One Time Settlement (OTS) terms for farmers and small traders."
  },
  {
    question: "Do you handle cases in Tura and Jowai?",
    answer: "Yes, AMA Legal Solutions covers the entire state. Whether you are under the Garo Hills Autonomous District Council (Tura) or Jaintia Hills ADC (Jowai), our team understands the local customary laws and can represent you effectively. We handle the bank negotiations centrally while providing local legal support where needed."
  },
  {
    question: "Can the District Council (ADC) help in my loan settlement?",
    answer: "Autonomous District Councils (KHADC, GHADC, JHADC) primarily govern tribal customs and land. However, if a bank attempts to seize tribal land illegally, the ADC's No Objection Certificate (NOC) is often required for any transfer. We ensure that your rights under the ADC's jurisdiction are respected by the lender during the settlement process."
  },
  {
    question: "Is 'Dawai' or informal lending legal in Meghalaya?",
    answer: "Informal high-interest lending is unregulated and often illegal under the Money Lenders Act. If you are being harassed by local moneylenders charging usurious rates, we can help you file a complaint with the District Magistrate. For bank loans, we use the SARFAESI and RBI guidelines to protect you."
  },
  {
    question: "Will a settlement ruin my CIBIL score?",
    answer: "It will temporarily lower your score as the account is marked 'Settled'. However, this is far better than a 'Written Off' status or a legal suit. We provide a post-settlement 'Credit Repair Strategy' to help you rebuild your score to 750+ within 12-18 months by using secured credit products."
  },
  {
    question: "How successful are Lok Adalats in Meghalaya for loan settlement?",
    answer: "Very successful. The Meghalaya State Legal Services Authority (MSLSA) actively resolves loan disputes. In the December 2025 National Lok Adalat alone, 186 cases were settled with a value of ₹1.66 Crore. We can represent you in these Adalats to secure a binding and favorable settlement order."
  },
  {
    question: "Can I settle a loan with Meghalaya Rural Bank (MRB)?",
    answer: "Yes, Meghalaya Rural Bank acts aggressively on NPAs but is also open to OTS. Since they focus on rural development, they have specific schemes for agricultural and small business loan waivers. We know their specific zonal policies and can negotiate a deal often saving you 40-50%."
  },
  {
    question: "What if the bank threatens to shame me in my community?",
    answer: "Meghalaya is a close-knit society, and banks often use 'social shaming' as a tactic. This is illegal under RBI's Fair Practices Code and recent Supreme Court judgments. If they contact your relatives, church members, or office colleagues, we will sue them for defamation and harassment."
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
      "name": "Meghalaya",
      "item": "https://amalegalsolutions.com/services/loan-settlement/meghalaya"
    }
  ]
};

// Enhanced Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement in Meghalaya | Protect Tribal Land & Rights",
  "description": "Expert debt relief in Meghalaya. Settle loans under the 1971 Land Transfer Act protection. Specialized help for Shillong, Tura, Jowai. Stop harassment now.",
  "image": "https://amalegalsolutions.com/services/shillong-cherry-blossom.jpg", // Placeholder - ensure image exists or use generic
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
    "@id": "https://amalegalsolutions.com/services/loan-settlement/meghalaya"
  },
  "about": {
    "@type": "Thing",
    "name": "Debt Settlement",
    "description": "Legal process of settling debt for a reduced amount."
  },
  "mentions": [
    {
      "@type": "Legislation",
      "name": "Meghalaya Transfer of Land (Regulation) Act, 1971"
    },
    {
      "@type": "Legislation",
      "name": "Meghalaya Rural Indebtedness Relief Act, 1975"
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
  title: "Loan Settlement Meghalaya | Stop Harassment & Protect Land",
  description:
    "#1 Loan Settlement in Meghalaya. Settle debts under Land Transfer Act 1971. Expert help for Shillong, Tura, Jowai. Stop bank harassment & protect tribal land.",
  keywords: [
    "loan settlement Meghalaya",
    "debt settlement Shillong",
    "Meghalaya Land Transfer Act 1971 loan recovery",
    "stop bank harassment Tura",
    "Meghalaya Rural Bank OTS scheme",
    "credit card settlement Shillong",
    "debt relief lawyers Meghalaya",
    "Lok Adalat Meghalaya loan settlement",
    "Garo Hills Autonomous District Council debt rules",
    "personal loan settlement Jowai"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/meghalaya',
  },
  openGraph: {
    title: "Loan Settlement in Meghalaya | Protect Tribal Land & Rights",
    description: "Burdened by debt in Shillong or Tura? Use the 1971 Land Act to stop harassment and settle loans for less. We protect tribal rights.",
    url: "https://amalegalsolutions.com/services/loan-settlement/meghalaya",
    type: "website",
    images: [
      {
        url: "/services/shillong-cherry-blossom.jpg",
        width: 1200,
        height: 630,
        alt: "Meghalaya Loan Settlement Services",
      },
    ],
  },
};

export default function LoanSettlementMeghalayaPage() {
  const tocSections = [
    { id: "introduction", title: "Debt in the Abode of Clouds" },
    { id: "what-is-settlement", title: "Understanding OTS" },
    { id: "legal-framework", title: "Land Act & Protections" },
    { id: "shillong-crisis", title: "Shillong's Urban Debt" },
    { id: "rural-relief", title: "Rural & Tribal Relief" },
    { id: "adcs", title: "Role of ADCs (Tribal Councils)" },
    { id: "process", title: "Settlement Process" },
    { id: "harassment", title: "Stop Harassment" },
    { id: "service-areas", title: "Services by District" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Meghalaya", href: "/services/loan-settlement/meghalaya" },
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
            style={{ backgroundImage: "url('/services/shillong-cherry-blossom.jpg')", backgroundColor: "#111" }} 
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-10">
              <span className="text-[#D2A02A]">Meghalaya's Trusted</span> <br/> Loan Settlement Experts
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-200 font-light">
              We leverage the **Land Transfer Act 1971** to protect your assets. From **Shillong** to **Tura**, settle your debts legally and dignity.
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
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Restoring Peace in the Abode of Clouds</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Meghalaya, with its unique matrilineal society and rich tribal heritage, is facing a modern financial challenge. The influx of easy credit through apps, credit cards, and personal loans has trapped many families in **Shillong**, **Tura**, and **Jowai** in a cycle of debt. The traditional economy is being disrupted by aggressive lending practices from banks that often do not understand the local cultural and legal landscape.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Whether you are a government servant in the Secretariat struggling with EMI pile-ups or a small trader in **Bara Bazar** facing business loss, the pressure is real. Recovery agents often cross the line, threatening to shame you in your community or seizing assets illegally.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <strong>AMA Legal Solutions</strong> understands the unique status of Meghalaya. We know that under the <strong>Land Transfer Act 1971</strong>, your land is your shield. We use these specific state protections to force banks to the negotiating table, cutting your debt by up to 50% and protecting your dignity.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What is One Time Settlement (OTS)?</h2>
                  <div className="flex flex-col md:flex-row gap-6 items-center bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                    <div className="flex-1">
                      <p className="text-green-900 text-lg font-medium italic mb-2">
                        "OTS is the legal way to exit debt when you cannot pay in full."
                      </p>
                      <p className="text-gray-700">
                        It negotiates a closure of the loan account for a one-time reduced payment, waiving off the compound interest and penalties that make the debt unpayable.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-xl mb-4 text-gray-800">Why it works in Meghalaya?</h4>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Land Protection:</strong> Banks know they cannot easily sell tribal land collateral.</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Legal Backlog:</strong> Courts in Shillong are overburdened; banks prefer quick OTS.</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Social Pressure:</strong> We counter their shaming tactics with legal defamation notices.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-4 text-gray-800">Our Result</h4>
                        <p className="text-gray-700 leading-relaxed">
                            We obtain a formal "No Dues Certificate" from the bank. The collection calls stop. You regain your financial freedom.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Legal Framework - Deep Dive */}
                <section id="legal-framework" className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#D2A02A] text-white text-xs font-bold rounded uppercase tracking-wider">State Protection</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Legal Shields in Meghalaya</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8">
                    Meghalaya provides some of the strongest protections for indigenous people in India. We turn these protections into leverage for your loan negotiation.
                  </p>

                  <div className="space-y-8">
                    {/* Land Transfer Act */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-[#1a202c] text-white p-4">
                            <h3 className="text-xl font-bold">Meghalaya Transfer of Land (Regulation) Act, 1971</h3>
                        </div>
                        <div className="p-6 bg-white">
                            <p className="text-gray-700 mb-4">
                                This is the most crucial law for borrowers in the state. It prohibits the transfer of land from a tribal to a non-tribal.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#D2A02A]">
                                <h4 className="font-bold text-gray-900 mb-2">How we use this for OTS:</h4>
                                <p className="text-sm text-gray-700">
                                    Banks are "non-tribal entities". Even if validly mortgaged, they face immense legal hurdles in auctioning your property to recover dues. We remind the bank's legal team of this reality: <em>"You can stick to your inflated demand and recover nothing for 10 years, or accept a fair OTS amount today."</em> This argument forces settlements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Rural Indebtedness Act */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Meghalaya Rural Indebtedness Relief Act, 1975</h3>
                        <p className="text-gray-700 mb-4">
                            While largely aimed at informal moneylenders, this Act sets a precedent for relief.
                        </p>
                        <p className="text-gray-700">
                             It empowers the state to declare a moratorium on debt recovery for marginalized farmers and artisans. We cite the spirit of this Act when negotiating with <strong>Meghalaya Rural Bank</strong> or cooperative societies, arguing that aggressive recovery violates the state's intent to protect its rural citizens.
                        </p>
                    </div>

                     {/* Lok Adalat Stats */}
                     <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">Lok Adalat: A Proven Success</h3>
                        <p className="text-gray-700 mb-4">
                            The Meghalaya State Legal Services Authority (MSLSA) is highly effective. In the <strong>December 2025 National Lok Adalat</strong>, 186 cases were settled in a single day!
                        </p>
                        <p className="text-gray-700">
                             Banks often want to clean their books before these Adalats. We represent you to ensure the settlement recorded by the judge is fair and final.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Urban Debt Crisis - Shillong & Tura */}
                <section id="shillong-crisis" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Urban Debt Trap: Shillong & Tura</h2>
                  <div className="relative bg-purple-900 text-white p-8 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">Government Employees & Small Traders</h3>
                        <p className="text-purple-100 text-lg mb-6">
                            Shillong is a hub for government service. But easy personal loans for cars and weddings have created a silent crisis in the Secretariat and Directorate offices.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-purple-800/50 p-4 rounded-lg backdrop-blur-sm">
                                <h4 className="font-bold text-yellow-400 mb-2">The "Salary Slip" Loan</h4>
                                <p className="text-sm">
                                    Banks aggressively push loans based on salary slips. When a family emergency strikes, the EMI burden becomes unmanageable. We help you restructure these without affecting your service record.
                                </p>
                            </div>
                            <div className="bg-purple-800/50 p-4 rounded-lg backdrop-blur-sm">
                                <h4 className="font-bold text-yellow-400 mb-2">Traders in Iewduh (Bara Bazar)</h4>
                                <p className="text-sm">
                                    Small business owners in Shillong's biggest market often rely on daily interest loans ("Sud") to buy stock. We help move you away from this predatory lending to formal settlement.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Rural & Tribal Relief */}
                <section id="rural-relief" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Rural Debt & The Indebtedness Act</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    In the hills of West Khasi and East Garo, farmers face crop volatility. The <strong>Meghalaya Rural Indebtedness Relief Act, 1975</strong> serves as a moral and legal compass.
                  </p>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600 mb-8">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Protection for "Marginal Farmers"</h3>
                    <p className="text-gray-700 text-lg">
                      The Act defines "marginal farmers" and "rural artisans" as vulnerable groups. It allows for:
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>• <strong>Moratorium on Recovery:</strong> Temporary suspension of debt collection during distress periods (floods, crop failure).</li>
                        <li>• <strong>Interest Remission:</strong> Courts can order the reduction of excessive interest.</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      <strong>How we use this:</strong> Even for bank loans (which are technically exempt), we argue that the <em>principle</em> of this state Act should guide the bank's OTS policy for rural borrowers, often securing waivers of 60% or more.
                    </p>
                  </div>
                </section>

                {/* Role of ADCs */}
                <section id="adcs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Role of Autonomous District Councils (ADCs)</h2>
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">Land NOC Power</h4>
                        <p className="text-gray-700">
                            The KHADC, GHADC, and JHADC hold the keys to land transfer. No bank can sell tribal land to a non-tribal without an explicit NOC from the Executive Committee of the ADC. Obtaining this for a "distress sale" is nearly impossible.
                        </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">Customary Law Defense</h4>
                        <p className="text-gray-700">
                            In many cases, we invoke customary laws regarding family property inheritance (e.g., the role of the <em>Khatduh</em> in Khasi society) to prove that the borrower does not have the sole right to alienate ancestral property for a personal loan. This stops banks from seizing family homes.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Settlement Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Settlement Strategy for Meghalaya</h2>
                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
                    
                    <div className="space-y-12">
                        <div className="relative flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">1</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Shielding with Land Act</h3>
                                <p className="text-gray-700">
                                    We start by issuing a notice to the bank citing the <strong>Land Transfer Act 1971</strong>. We explicitly state that the collateral (if any) is tribal land and cannot be auctioned to non-tribals. This instantly lowers the bank's leverage.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">2</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Hardship Proof</h3>
                                <p className="text-gray-700">
                                    We gather evidence of your financial distress—salary slips showing deductions, medical bills, or certified losses in business. We present this to the Zonal Manager in Guwahati or Shillong.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0 z-10">
                                <div className="w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">3</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Negotiation & Reduction</h3>
                                <p className="text-gray-700">
                                    We negotiate aggressively. For unsecured loans, we aim for a waiver of all interest and a reduction in principal. For secured loans, we aim for restructuring or a long-term repayment plan that you can afford.
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
                                    Once the OTS amount is paid, we ensure you get the "No Dues Certificate" and that the bank updates CIBIL to reflect "Settled" (or "Closed" if negotiated well).
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Harassment & Police Helpline */}
                <section id="harassment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Emergency Help in Meghalaya</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Bank agents cannot threaten you. Use these numbers if they cross the line.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl mb-4 text-red-700 flex items-center">
                        <span className="text-2xl mr-2">👮‍♂️</span> Police Helplines
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-900"><strong>Emergency:</strong> 112 / 100</p>
                        <p className="text-gray-900"><strong>Shillong Control Room:</strong> 0364-2222277</p>
                        <p className="text-gray-900"><strong>East Khasi Hills SP:</strong> Direct complaint for harassment.</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-xl mb-4 text-blue-700 flex items-center">
                        <span className="text-2xl mr-2">⚖️</span> Legal Aid
                      </h4>
                      <p className="text-gray-700 text-sm mb-4">
                          <strong>Meghalaya State Legal Services Authority:</strong> Located in Shillong. They provide free legal aid for the poor and organize Lok Adalats.
                      </p>
                      <p className="text-blue-800 font-bold">Helpline: 15100</p>
                    </div>
                  </div>
                </section>

                {/* Service Areas */}
                <section id="service-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Serving All Districts</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Our digital-first approach means we can help you whether you are in a city or a remote village.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { city: "Shillong", desc: "East Khasi Hills" },
                      { city: "Tura", desc: "West Garo Hills" },
                      { city: "Jowai", desc: "West Jaintia Hills" },
                      { city: "Nongpoh", desc: "Ri-Bhoi District" },
                      { city: "Williamnagar", desc: "East Garo Hills" },
                      { city: "Baghmara", desc: "South Garo Hills" },
                      { city: "Nongstoin", desc: "West Khasi Hills" },
                      { city: "Mairang", desc: "Eastern West Khasi" }
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
                      Reclaim Your Life & Respect
                    </h2>
                    <p className="text-base md:text-xl opacity-90 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
                      Join hundreds of families in Meghalaya who have used the law to stop harassment and settle debts.
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
                    Speak to our loan settlement experts in Shillong today.
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
                            <span className="opacity-70 text-gray-700">Land Act 1971</span>
                            <span className="font-bold text-green-600">Active</span>
                        </li>
                         <li className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="opacity-70 text-gray-700">Lok Adalat (2025)</span>
                            <span className="font-bold text-gray-900">186 Cases</span>
                        </li>
                         <li className="flex justify-between">
                            <span className="opacity-70 text-gray-700">ADC Protection</span>
                            <span className="font-bold text-blue-600">Yes</span>
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
                From nationalized giants to regional banks in Meghalaya, we handle them all.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                    "SBI", "HDFC", "ICICI", "Canara Bank", "Axis Bank", 
                    "IndusInd", "IDFC First", "Yes Bank", "Union Bank", "Punjab National Bank"
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
                    including Meghalaya Rural Bank (MRB) & Meghalaya Co-operative Apex Bank
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
                "Andhra Pradesh": "andhra-pradesh",
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
                "Meghalaya": "meghalaya",
                "Mizoram": "Mizoram",
                "Odisha": "odisha",
                "Puducherry": "puducherry",
                "Punjab": "Punjab",
                "Rajasthan": "Rajasthan",
                "Sikkim": "Sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "Telangana",
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

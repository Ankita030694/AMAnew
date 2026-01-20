import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Madhya Pradesh?",
    answer: "Yes, loan settlement is completely legal in Madhya Pradesh, just as it is across India. It is governed by Reserve Bank of India (RBI) guidelines and is a legitimate banking process for resolving Non-Performing Assets (NPAs). Additionally, local frameworks like the Lok Adalats in Madhya Pradesh frequently handle such settlement cases."
  },
  {
    question: "Can Madhya Pradesh Police help if recovery agents harass me?",
    answer: "Absolutely. Harassment by recovery agents is a punishable offense. Under the Madhya Pradesh Protection of Debtors Act, 1937, and RBI guidelines, you can report intimidation to the police. You can dial 100 or 112 for emergency police assistance, or use the CM Helpline 181 to register a complaint against abusive behavior."
  },
  {
    question: "Do you have lawyers in Indore and Bhopal?",
    answer: "Yes, AMA Legal Solutions has a network of experienced legal professionals across major cities in Madhya Pradesh, including Indore, Bhopal, Gwalior, and Jabalpur. We understand the local legal nuances and can represent you effectively in dealings with bank branches in these regions."
  },
  {
    question: "What is the role of Lok Adalat in MP for loan settlement?",
    answer: "Lok Adalats in Madhya Pradesh differ from regular courts; they are forums where disputes are settled amicably. They are very active in MP and are often used by banks to settle pending loan recovery cases. Our lawyers can represent you in Lok Adalat proceedings to ensure you get a fair settlement deal."
  },
  {
    question: "How much can I save on my outstanding loan amount?",
    answer: "The savings depend on the type of loan, the duration of default, and your financial hardship. Typically, we negotiate waivers of 30% to 50% on the total outstanding dues. In some cases with high accumulated penalties, the relief can be even more substantial."
  },
  {
    question: "Will settling a loan affect my CIBIL score?",
    answer: "Yes, settling a loan results in the account being marked as 'Settled' rather than 'Closed' in your credit report. This can lower your CIBIL score. However, this is a better outcome than a 'Written Off' status or ongoing default. You can rebuild your score over 12-24 months with disciplined financial behavior."
  },
  {
    question: "Can I settle a home loan or car loan in MP?",
    answer: "Secured loans like home and car loans are harder to settle because the bank can seize the asset under the SARFAESI Act. However, if the asset value has depreciated or there are legal issues, settlement might be possible. We typically recommend restructuring for secured loans, but we can evaluate your specific case."
  },
  {
    question: "What documents do I need to start the process?",
    answer: "You will need to provide your KYC documents (Aadhar/PAN), recent loan statements, and proof of financial hardship (such as salary slips showing a cut, termination letter, medical records, or bank statements showing valid cash flow issues)."
  },
  {
    question: "How long does the settlement process take?",
    answer: "On average, the process takes anywhere between 3 to 6 months. This gives us time to notify the bank, stop harassment, negotiate effectively, and finalize the settlement letter. Complex cases involving multiple loans may take slightly longer."
  },
  {
    question: "Why should I hire AMA Legal Solutions instead of doing it myself?",
    answer: "Banks often ignore individual requests or employ aggressive tactics. As a legal firm, we bring authority to the table. We stop the harassment by handling all communication, ensuring the bank respects your legal rights, and negotiating a formal, legally binding settlement that protects you from future claims."
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
      "name": "Madhya Pradesh",
      "item": "https://amalegalsolutions.com/services/loan-settlement/madhya-pradesh"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Madhya Pradesh: Expert Legal Help",
  "description": "Struggling with debt in Madhya Pradesh? Get expert legal help for loan settlement in Indore, Bhopal, and across MP. Stop harassment and reduce debt by up to 50%.",
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
  "datePublished": "2023-11-15",
  "dateModified": "2025-01-20",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://amalegalsolutions.com/services/loan-settlement/madhya-pradesh"
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
  title: "Loan Settlement in Madhya Pradesh | Debt Settlement Leaders in MP",
  description:
    "Top-rated loan settlement services in Madhya Pradesh (Indore, Bhopal, Gwalior). We help you settle credit card and personal loan debts legally. Stop harassment today.",
  keywords: [
    "loan settlement Madhya Pradesh",
    "debt settlement Indore",
    "loan settlement Bhopal",
    "debt relief services MP",
    "credit card settlement Gwalior",
    "loan settlement lawyer Jabalpur",
    "One time settlement MP",
    "remove debt Madhya Pradesh",
    "bank harassment complaint MP"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/madhya-pradesh',
  },
  openGraph: {
    title: "Loan Settlement in Madhya Pradesh | Expert Debt Relief",
    description: "Struggling with debt in MP? Our expert lawyers in Indore and Bhopal negotiate with banks to settle your loans and stop harassment.",
    url: "https://amalegalsolutions.com/services/loan-settlement/madhya-pradesh",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Madhya Pradesh",
      },
    ],
  },
};

export default function LoanSettlementMPPage() {
  const tocSections = [
    { id: "introduction", title: "Debt Relief in MP" },
    { id: "what-is-settlement", title: "Understanding Settlement" },
    { id: "mp-legal-landscape", title: "MP Legal Framework" },
    { id: "lok-adalat", title: "Lok Adalat & Settlement" },
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
    { label: "Madhya Pradesh", href: "/services/loan-settlement/madhya-pradesh" },
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
              Expert <span className="text-[#D2A02A]">Loan Settlement</span> Services in <br className="hidden md:block"/> Madhya Pradesh
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Serving Indore, Bhopal, Gwalior, Jabalpur, and beyond. We negotiate with banks to reduce your debt by up to 50% and stop recovery harassment.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Consultation in MP
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Financial Freedom for Madhya Pradesh</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Madhya Pradesh, the heart of India, is witnessing rapid economic growth, from the commercial bustle of Indore to the administrative hubs of Bhopal. However, with growth comes financial complexity. Many residents across the state find themselves trapped in a cycle of debt due to unforeseen circumstances like the recent post-pandemic economic shifts, medical emergencies, or business losses in the agricultural and MSME sectors.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    If you are a resident of Madhya Pradesh struggling to repay your personal loans or credit card bills, know that you are not alone. The pressure of mounting interest rates and the fear of social stigma can be overwhelming. But there is a legal and dignified solution available: <strong>Loan Settlement</strong>.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we specialize in providing debt settlement services specifically tailored for the residents of Madhya Pradesh. We understand the local banking landscape, the operational style of recovery agencies in the region, and the legal remedies available to you under state and central laws. Our goal is to help you close your loan accounts for a fraction of the outstanding amount, allowing you to regain your peace of mind.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is Loan Settlement (OTS)?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Loan settlement, or One Time Settlement (OTS), is a legal negotiation where the lender agrees to accept a reduced lump-sum payment to close a default loan account permanently."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When a borrower in Madhya Pradesh defaults on a loan for more than 90 days, the account is classified as a Non-Performing Asset (NPA). Maintaining NPAs is costly for banks. They have to set aside capital and incur legal costs for recovery. Recognizing that some borrowers have a <strong>genuine inability to pay</strong>, banks are often willing to settle.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For example, if you owe ₹5 Lakhs on a credit card but have lost your job in Indore's IT sector, the bank may realize that recovering the full amount is unlikely. Through professional negotiation, they might agree to close the account for ₹2.5 Lakhs paid upfront. This process is legal, regulated by RBI, and is a practical exit strategy from a debt trap.
                  </p>
                </section>

                {/* MP Legal Landscape */}
                <section id="mp-legal-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework for Debtors in Madhya Pradesh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Borrowers in Madhya Pradesh are protected by a robust framework of central and state-specific laws. Understanding these rights is the first step in stopping harassment and securing a fair settlement.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Madhya Pradesh Protection of Debtors Act, 1937</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is a crucial piece of legislation specific to our region. The Act explicitly prohibits "molestation" of debtors. Under this law, it is a criminal offense for a creditor or their agent to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Obstruct your movement or use violence.</li>
                    <li>Intimidate you or your family members.</li>
                    <li>Persistently follow you from place to place.</li>
                    <li>Loiter near your house or workplace in Bhopal, Indore, or anywhere in MP with the intent to annoy or intimidate.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If recovery agents violate this Act, you have the right to file a police complaint immediately. Our lawyers at AMA Legal Solutions frequently cite this Act to ensure the police take action against aggressive recovery tactics.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Role of Reserve Bank of India (RBI)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Besides state laws, RBI guidelines strictly govern how banks operate across India. Banks are required to have a board-approved policy for compromise settlements. They cannot discriminate against borrowers and must offer a fair hearing. Furthermore, RBI's <strong>Fair Practice Code</strong> mandates that recovery agents must not resort to abusive language or call at odd hours (before 7 AM or after 7 PM).
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: An Opportunity for Settlement in MP</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Madhya Pradesh has one of the most active <strong>Lok Adalat</strong> (People's Court) systems in the country. Organized under the Legal Services Authorities Act, 1987, Lok Adalats are held regularly in districts like Jabalpur, Gwalior, Ujjain, and others to reduce the burden on courts.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Why Lok Adalat Matters for Your Loan</h3>
                    <p className="text-gray-700 mb-4">
                      Banks frequently refer pending recovery cases to Lok Adalats because they want quick disposal. This presents a golden opportunity for borrowers.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Speedy Resolution:</strong> Cases are settled in a single day.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Binding Decree:</strong> The award passed is final and equal to a civil court decree.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Cost-Effective:</strong> No court fees are required.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Negotiation Friendly:</strong> The focus is on compromise, not punishment.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you receive a notice for a Lok Adalat hearing, do not panic. It is an invitation to settle. However, going alone can be risky as bank lawyers might pressure you into unfavorable terms. AMA Legal Solutions can represent you in these Lok Adalats, ensuring that your financial constraints are properly presented and that the settlement amount is minimized.
                  </p>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Madhya Pradesh?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are not a call center; we are a law firm with a deep understanding of the MP legal ecosystem.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Regional Expertise</h3>
                      <p className="text-gray-600">We understand how local branches of banks (like SBI, Union Bank, MP Gramin Bank) operate in Madhya Pradesh.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">👮</div>
                      <h3 className="font-bold text-xl mb-2">Police Liaison</h3>
                      <p className="text-gray-600">We know how to effectively utilize the MP Police helpline and local stations to stop illegal harassment.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Defense</h3>
                      <p className="text-gray-600">If a Section 138 (Cheque Bounce) case is filed against you in an MP court, we provide specialized legal defense.</p>
                    </div>
                  </div>
                </section>

{/* Process Section */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our 4-Step Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a structured approach to resolve your debt issues in Madhya Pradesh.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your loans, income status, and the extent of default. Whether you are a salaried employee in Bhopal or a businessman in Indore, we tailor the hardship pitch to your specific reality.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Protection</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We immediately notify the bank's collection department (and their third-party agencies) that AMA Legal Solutions represents you. This usually stops the harassing calls as they are legally bound to deal with us.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Hard Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team negotiates with the bank's credit managers. We push for the waiver of all penal interest and a significant cut in the principal amount. We leverage MP-specific debt relief norms where applicable.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure & NDC</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once the settlement amount is paid, we ensure you receive the all-important No Dues Certificate (NDC) from the bank, confirming that the loan is closed and you are free.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Harassment Laws & Police Helpline */}
                <section id="harassment-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Handle Harassment in MP</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Harassment is the biggest fear for defaulting borrowers. If you are being threatened, know that the law is on your side.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h4 className="font-bold text-lg mb-2 text-red-700">Emergency Police Help</h4>
                      <p className="text-gray-700 mb-2">Dial <strong>100</strong> or <strong>112</strong> (ERSS) immediately if recovery agents try to enter your home forcibly or threaten violence.</p>
                      <p className="text-gray-700">For women facing harassment, the MP Police <strong>We Care For You</strong> helpline and number <strong>1090</strong> are available 24/7.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-lg mb-2 text-blue-700">Cyber Crime & Online Threats</h4>
                      <p className="text-gray-700 mb-2">If agents are morphing your photos or sending abusive messages on WhatsApp, report it to the Cyber Cell by dialing <strong>1930</strong>.</p>
                      <p className="text-gray-700">You can also file a complaint with the MP State Consumer Disputes Redressal Commission in Bhopal for deficiency in service.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Remember:</strong> A bank can only recover money through legal means. They cannot act like goons. AMA Legal Solutions ensures that any such illegal activity is met with a strong legal response.
                  </p>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents for Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To process your settlement request in Madhya Pradesh, we typically require:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> PAN Card & Aadhar Card (KYC)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Latest Loan Account Statement
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Proof of Income Loss (Salary slips/Bank statement)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Medical Reports (if applying on medical grounds)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Any Legal Notices received from the bank
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Employment Termination Letter (if applicable)
                    </li>
                  </ul>
                </section>

                {/* Service Areas */}
                <section id="city-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All Major Cities in Madhya Pradesh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our digital-first legal services allow us to help clients in every corner of Madhya Pradesh. We have successfully handled cases in:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Indore</h4>
                      <p className="text-xs text-gray-500">Commercial Hub</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Bhopal</h4>
                      <p className="text-xs text-gray-500">State Capital</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Gwalior</h4>
                      <p className="text-xs text-gray-500">Northern MP</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Jabalpur</h4>
                      <p className="text-xs text-gray-500">Legal Hub (High Court)</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Ujjain</h4>
                      <p className="text-xs text-gray-500">Religious Center</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Sagar</h4>
                      <p className="text-xs text-gray-500">Central MP</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Rewa</h4>
                      <p className="text-xs text-gray-500">Eastern MP</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Satna</h4>
                      <p className="text-xs text-gray-500">Industrial City</p>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Live Debt-Free in Madhya Pradesh</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't let banks bully you. Get the legal support you deserve and settle your loans for up to 50% less.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book MP Legal Consultation
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
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-lg text-gray-700">
                        We also handle settlement for cooperative banks like MP Rajya Sahakari Bank.
                      </p>
                    </div>
                  </section>
                </div>

                <div className="mt-16">
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
                      "Karnataka": "Karnataka",
                      "Kerala": "Kerala",
                      "Madhya Pradesh": "madhya-pradesh",
                      "Maharashtra": "Maharashtra",
                      "Manipur": "Manipur",
                      "Meghalaya": "Meghalaya",
                      "Mizoram": "Mizoram",
                      "Odisha": "Odisha",
                      "Puducherry": "Puducherry",
                      "Punjab": "Punjab",
                      "Rajasthan": "Rajasthan",
                      "Sikkim": "Sikkim",
                      "Tamil Nadu": "tamil-nadu",
                      "Telangana": "Telangana",
                      "Tripura": "Tripura",
                      "Uttar Pradesh": "UttarPradesh",
                      "Uttarakhand": "Uttrakhand",
                      "West Bengal": "west-bengal"
                    }}
                  />
                </div>

              </div>
            </div>

            {/* Sidebar */}
             <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help in MP?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our loan settlement experts serving Madhya Pradesh.
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
          
        </div>
      </div>
    </>
  );
}

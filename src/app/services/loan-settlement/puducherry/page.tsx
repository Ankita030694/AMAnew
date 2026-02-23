import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Puducherry?",
    answer: "Yes, loan settlement is a fully legal financial process in Puducherry. It is governed by RBI guidelines and supported by local acts like the Puducherry Money Lenders Act, 1970, which regulates interest rates and fair lending. The Puducherry Legal Services Authority also actively promotes amicable settlements through Lok Adalats."
  },
  {
    question: "How does the Puducherry Money Lenders Act, 1970 help me?",
    answer: "The Puducherry Money Lenders Act, 1970, protects borrowers from usurious interest rates. Section 20-A specifically prohibits courts from decreeing interest payments higher than the principal loan amount (Damdupat rule). Section 20-B allows courts to let you pay debts in easy installments. If you are being charged illegal interest, we can use this Act to defend you."
  },
  {
    question: "Can I settle my loan if I am a government employee in Pondicherry?",
    answer: "Many residents in Puducherry are employed in government sectors. While banks often view government employees as having stable income and thus are harder to settle with, it is possible if you can prove genuine financial distress (like a medical crisis). We handle these negotiations discreetly to ensure your professional reputation is protected."
  },
  {
    question: "Does AMA Legal Solutions represent cases in the Puducherry courts?",
    answer: "AMA Legal Solutions operates as a digital-first legal firm providing nationwide coverage. We handle negotiations and paperwork remotely. For any on-ground representation needed in Puducherry courts or tribunals, we coordinate with our network of trusted local associates in Pondicherry to ensure you have physical representation when required."
  },
  {
    question: "What is the role of Lok Adalats in Puducherry for bank recovery?",
    answer: "Lok Adalats in Puducherry are very effective. In recent sessions, they have settled claims worth crores. They provide a platform where you can sit across from bank officials and agree on a 'One Time Settlement' (OTS) without a long trial. The decision made here is final and binding, ending the harassment instantly."
  },
  {
    question: "How can I stop harassment from recovery agents in Puducherry?",
    answer: "Harassment is a crime. You can report aggressive agents to the Puducherry Police by dialing 112 or contacting the Cyber Crime cell at 1930 if the harassment is digital. Once you hire us, we send a legal notice to the bank, which typically stops the harassment as they know you are now legally represented."
  },
  {
    question: "Can I settle credit card debt in Puducherry?",
    answer: "Absolutely. Credit card debt is unsecured and often carries the highest interest rates. It is one of the most common types of debt we settle. We can often negotiate waivers of up to 50-60% on the total outstanding amount, depending on your delinquency status."
  },
  {
    question: "What if the bank has filed a Section 138 cheque bounce case?",
    answer: "A Section 138 case is a criminal offense, so you must attend the court dates. However, we can run a parallel process of negotiation. Once a settlement is reached, the bank gives a consent letter to withdraw the case. We ensure this withdrawal is part of the final settlement agreement."
  },
  {
    question: "Do you handle business loans and MSME debt?",
    answer: "Yes, we assist with business loan settlements. For MSMEs in industrial areas like Thattanchavady or Sedarapet, if business has suffered, we can negotiate with lenders for a restructuring or OTS based on your current cash flows."
  },
  {
    question: "How does the settlement process affect my CIBIL score?",
    answer: "Settling a loan will mark the account as 'Settled' in your credit report, which drops your score. However, this is better than a 'Write-off' or ongoing delinquency. Once the debt is clear, we guide you on how to rebuild your score over the next 12-24 months."
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
      "item": "https://amalegalsolutions.com/services/loan-settlement/puducherry"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Puducherry: Expert Debt Relief",
  "description": "Facing debt in Puducherry? Our expert lawyers help you settle loans, stop bank harassment in Pondicherry, Karaikal, Mahe, Yanam, and save money.",
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
    "@id": "https://amalegalsolutions.com/services/loan-settlement/puducherry"
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
  title: "Loan Settlement in Puducherry | Debt Relief Lawyers Pondicherry",
  description:
    "Expert loan settlement in Puducherry (Pondicherry, Karaikal). Legally settle personal loans & credit cards. Stop agent harassment & save up to 50%.",
  keywords: [
    "loan settlement Puducherry",
    "debt settlement Pondicherry",
    "loan settlement lawyer Puducherry",
    "credit card settlement Karaikal",
    "debt relief services Puducherry",
    "One time settlement SBI Pondicherry",
    "remove debt Puducherry",
    "Lok Adalat Pondicherry loan",
    "cheque bounce lawyer Puducherry"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/puducherry',
  },
  openGraph: {
    title: "Loan Settlement in Puducherry | Expert Debt Relief",
    description: "Burdened by debt in Puducherry? We negotiate with banks to reduce your dues and stop harassment in Pondicherry and Karaikal.",
    url: "https://amalegalsolutions.com/services/loan-settlement/puducherry",
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

export default function LoanSettlementPuducherryPage() {
  const tocSections = [
    { id: "introduction", title: "Debt Relief in Puducherry" },
    { id: "what-is-settlement", title: "Understanding Settlement" },
    { id: "puducherry-legal", title: "Puducherry Legal Laws" },
    { id: "lok-adalat-py", title: "Lok Adalat Solutions" },
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
    { label: "Puducherry", href: "/services/loan-settlement/puducherry" },
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
              Reliable <span className="text-[#D2A02A]">Loan Settlement</span> Services in <br className="hidden md:block"/> Puducherry
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              From the White Town of Pondicherry to Karaikal, we help you legally settle your debts, end agent harassment, and regain your peace of mind.
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Restoring Financial Serenity in Puducherry</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Puducherry, with its unique blend of French colonial heritage and Tamil culture, is a place of peace. But for many residents in Pondicherry, Karaikal, Mahe, and Yanam, that peace is being disturbed by the stress of unmanageable debt. Whether you are a small business owner on Mission Street affected by tourism fluctuations or a salaried employee dealing with personal emergencies, debt traps can happen to anyone.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    If you are losing sleep over EMI defaults, facing rude calls from recovery agents, or worrying about legal notices, know that there is a way out. **Loan Settlement** is a practical and legal solution available to you. It allows you to close your debt chapter without declaring bankruptcy.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions brings expert debt relief services to the Union Territory of Puducherry. We understand the local legal landscape, including the specific provisions of the Puducherry Money Lenders Act, and use them to protect your rights while negotiating a favorable settlement with your bank.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is Loan Settlement (OTS)?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Loan settlement, also known as One Time Settlement (OTS), is a process where the lender agrees to accept a lump-sum payment that is less than the total outstanding debt to fully close the loan account."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Banks (like Indian Bank, Canara Bank, SBI, etc.) prefer this route for "bad loans" (NPAs) because it saves them the time and cost of litigation. If you have a genuine inability to pay—due to job loss, business failure, or health issues—we can negotiate with the bank to waive off the interest and penalties, and sometimes even a part of the principal.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Imagine clearing a ₹8 Lakh debt for ₹3.5 Lakhs and ending the harassment forever. That is the power of a professionally negotiated settlement.
                  </p>
                </section>

                {/* Puducherry Legal Laws */}
                <section id="puducherry-legal" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections for Borrowers in Puducherry</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Residents of Puducherry have specific legal shields against unfair lending practices.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Puducherry Money Lenders Act, 1970</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act is a crucial tool for debtor protection. Key provisions include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li><strong>Section 20-A (Limitation on Interest):</strong> It prohibits courts from passing a decree for interest that exceeds the principal amount. This is known as the "Damdupat" rule, protecting you from situations where interest balloons to multiple times the loan amount.</li>
                    <li><strong>Section 20-B (Installment Payments):</strong> The court has the power to order that the debt due be paid in installments, considering your financial capacity.</li>
                    <li><strong>Section 20-D (Account Inquiry):</strong> You have the right to ask the court to inquire into the accounts to determine the *actual* amount due, stripping away hidden or illegal charges.</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Puducherry Relief from Indebtedness Act, 1987</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    While specifically for certain categories of debtors and older debts, the spirit of this Act influences the lenient view courts often take towards genuine debtors in the region, emphasizing relief over persecution.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat-py" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: Amicable Resolution in Puducherry</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The **Union Territory of Puducherry Legal Services Authority (UTPLSA)** regularly organizes Lok Adalats to resolve bank disputes swiftly.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Effective & Fast</h3>
                    <p className="text-gray-700 mb-4">
                      Lok Adalats in Puducherry have a strong track record. For instance, in a mega Lok Adalat in 2016, 259 cases were settled with awards worth ₹2.47 crore. More recently in 2024, hundreds of bank recovery plaints were closed amicably.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Direct Negotiation:</strong> You speak face-to-face with bank officials.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Binding Award:</strong> The settlement is final and holds the same weight as a court decree.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>No Appeal:</strong> Once settled, the bank cannot file an appeal to claim more money.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We can represent you in these Lok Adalats to ensure you get a fair deal and that the bank doesn't pressure you into an agreement you can't afford.
                  </p>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine our national expertise with a deep understanding of Puducherry's local regulations.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Protection</h3>
                      <p className="text-gray-600">We leverage the Puducherry Money Lenders Act to challenge excessive interest claims.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🚫</div>
                      <h3 className="font-bold text-xl mb-2">Stop Harassment</h3>
                      <p className="text-gray-600">We take swift legal action against any agent violating your rights, involving the police if necessary.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📉</div>
                      <h3 className="font-bold text-xl mb-2">Max Savings</h3>
                      <p className="text-gray-600">Our negotiators know the settlement limits of banks like Indian Bank & SBI, ensuring you save the maximum possible.</p>
                    </div>
                  </div>
                </section>

{/* Process Section */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our 4-Step Path to Freedom</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a proven strategy to get you out of debt.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We review your loan documents and legal notices. We assess if the interest charged violates the Puducherry Money Lenders Act (e.g., exceeding the principal).
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Shielding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We formally notify the bank of our representation. This immediately creates a buffer between you and the recovery agents, reducing harassment significantly.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We negotiate with the bank's zonal officers or in the Lok Adalat. We push for a settlement amount that aligns with your current financial reality, aiming for maximum relief.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Debt Free</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Upon payment of the settlement amount, we ensure you receive the official "No Dues Certificate" and that the bank withdraws any legal cases (Sarfaesi/Cheque Bounce) against you.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Harassment Laws & Police Helpline */}
                <section id="harassment-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Stopping Harassment in Puducherry</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Debt recovery has rules. If those rules are broken, you have the law on your side.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h4 className="font-bold text-lg mb-2 text-red-700">Puducherry Police Helplines</h4>
                      <p className="text-gray-700 mb-2"><strong>Emergency:</strong> Dial 112 or 100.</p>
                      <p className="text-gray-700 mb-2"><strong>Control Room:</strong> 1031 or 1800-425-1031.</p>
                      <p className="text-gray-700"><strong>WhatsApp Helpline:</strong> 9489205039 (for non-emergency complaints).</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-lg mb-2 text-blue-700">Cyber Crime Cell</h4>
                      <p className="text-gray-700 mb-2"><strong>Helpline:</strong> 1930 or 9489205246.</p>
                      <p className="text-gray-700">If agents send abusive messages or morphed photos, report it immediately to cybercell-police@py.gov.in.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Legal Note:</strong> If an agent threatens you physically or verbally, we can help you file a formal police complaint (FIR) for criminal intimidation.
                  </p>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents for OTS</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Prepare these documents to expedite your settlement process:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Aadhar & PAN Card
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Loan Account Statement (Up to date)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Any Legal Notices Received
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Proof of Income/Job Loss
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Medical Reports (if applying for medical hardship)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Correspondence with Bank
                    </li>
                  </ul>
                </section>

                {/* Service Areas */}
                <section id="city-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All Regions of Puducherry</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our digital services cover the entire U.T., including all four districts.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Pondicherry</h4>
                      <p className="text-xs text-gray-500">Capital Region</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Karaikal</h4>
                      <p className="text-xs text-gray-500">Coromandel Coast</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Mahe</h4>
                      <p className="text-xs text-gray-500">Malabar Coast</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Yanam</h4>
                      <p className="text-xs text-gray-500">Godavari District</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Ozhukarai</h4>
                      <p className="text-xs text-gray-500">Municipality</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Ariyankuppam</h4>
                      <p className="text-xs text-gray-500">Commune</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Villianur</h4>
                      <p className="text-xs text-gray-500">Commune</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Bahour</h4>
                      <p className="text-xs text-gray-500">Commune</p>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Regain Your Financial Peace in Puducherry</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't let debt define your life. Expert legal help is just a click away in Pondicherry.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help in Puducherry?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our lawyers serving Pondicherry and Karaikal.
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
                  href="/services/loan-settlement/indian-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Indian Bank</span>
                </Link>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  We also handle settlement for regional institutions like Puducherry Cooperative Bank.
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

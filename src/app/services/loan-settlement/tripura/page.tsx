import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Tripura?",
    answer: "Yes, loan settlement is completely legal in Tripura. It is governed by RBI guidelines and the Indian Contract Act. Mechanisms like Lok Adalats, organized by the Tripura State Legal Services Authority, actively facilitate amicable settlements between banks and borrowers. The Extension of the Bombay Money-lenders Act to Tripura also provides a regulatory framework for fair lending practices."
  },
  {
    question: "How do Lok Adalats in Tripura help with bank loans?",
    answer: "Lok Adalats in Tripura are highly effective for bank recovery cases. They offer a platform for 'One Time Settlement' (OTS) without the need for a lengthy court trial. In recent sessions held in Agartala and other districts, crores of rupees have been settled amicably. An award passed here is final and binding, ensuring that once you pay the agreed amount, the bank cannot harass you further."
  },
  {
    question: "I am a government employee in Tripura. Can I settle my loan?",
    answer: "We understand that a large portion of Tripura's workforce is employed by the government. While banks are often reluctant to offer settlement to salaried employees due to the stability of their income, it is not impossible. If you can demonstrate genuine financial hardship—such as a medical crisis, loss of a earning family member, or fraud—we can negotiate on your behalf to get a favorable settlement without jeopardizing your job."
  },
  {
    question: "Does AMA Legal Solutions have an office in Agartala?",
    answer: "AMA Legal Solutions is a premier digital law firm serving clients across India, including Tripura. We handle all negotiations, documentation, and legal notices remotely through video calls and digital communication. For any physical presence required at the DRT Guwahati (which allows jurisdiction for Tripura) or local courts in Agartala, we coordinate with our network of trusted local associates."
  },
  {
    question: "What should I do if recovery agents are harassing me in Agartala?",
    answer: "Harassment is illegal. If agents are threatening you, you can report them to the Tripura Police. You can dial 100 or 112 for emergency assistance, or contact the West District Control Room at 0381-2325784. We can also help you file a formal legal notice against the bank and lodge a complaint on the RBI Sachet portal."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement will reflect as 'Settled' on your credit report, which lowers your score temporarily. However, this is far better than a 'Written Off' or 'Suit Filed' status, which are permanent black marks. After settlement, we provide guidance on how to rebuild your score over 12-24 months using secured credit instruments."
  },
  {
    question: "Can I settle a loan if a case is filed in DRT?",
    answer: "Yes. Even if a case is pending before the Debt Recovery Tribunal (DRT), you can enter into a compromise settlement. In fact, banks often prefer this to save litigation costs. We can represent you to ensure the settlement terms are fair and that the legal case is withdrawn immediately upon payment."
  },
  {
    question: "What documents are needed to start the process?",
    answer: "We generally require your latest loan statement, notices sent by the bank, proof of income (or lack thereof), and KYC documents (Aadhar/PAN). If there is a specific reason for default like a medical emergency, medical records will strengthen your case for a waiver."
  },
  {
    question: "Do you handle agricultural loans?",
    answer: "Tripura has a significant agricultural base. For agricultural loans (KCC), government waiver schemes are the first option. If those don't apply, an OTS is possible. The rules for agricultural debt settlement are slightly different, and we can advise you based on the specific bank's policy."
  },
  {
    question: "How much can I save through settlement?",
    answer: "The savings depend on the age of the NPA and your financial urgency. Typically, we aim to get a waiver of 100% of the penalties and legal charges, and a significant portion of the interest. In rare cases of extreme hardship, even the principal amount can be negotiated down. Savings can range from 30% to 60% of the total outstanding."
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
      "name": "Tripura",
      "item": "https://amalegalsolutions.com/services/loan-settlement/tripura"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Tripura: Expert Legal Debt Relief",
  "description": "Struggling with debt in Tripura? Our expert lawyers help you settle personal and business loans, stop agent harassment in Agartala, and save money.",
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
    "@id": "https://amalegalsolutions.com/services/loan-settlement/tripura"
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
  title: "Loan Settlement in Tripura | Debt Relief Lawyers Agartala",
  description:
    "Expert loan settlement services in Tripura (Agartala, Udaipur, Dharmanagar). Legally settle loans, stop harassment, and avoid bankruptcy. Free consultation.",
  keywords: [
    "loan settlement Tripura",
    "debt settlement Agartala",
    "loan settlement lawyer Tripura",
    "credit card settlement Udaipur",
    "debt relief services Tripura",
    "One time settlement SBI Tripura",
    "remove debt Tripura",
    "Lok Adalat Agartala loan",
    "stop bank harassment Tripura"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/tripura',
  },
  openGraph: {
    title: "Loan Settlement in Tripura | Expert Debt Relief",
    description: "Burdened by debt in Tripura? We negotiate with banks to reduce your dues and stop harassment in Agartala and across the state.",
    url: "https://amalegalsolutions.com/services/loan-settlement/tripura",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Tripura",
      },
    ],
  },
};

export default function LoanSettlementTripuraPage() {
  const tocSections = [
    { id: "introduction", title: "Debt Relief in Tripura" },
    { id: "what-is-settlement", title: "Understanding Settlement" },
    { id: "tripura-legal-landscape", title: "Tripura Legal Framework" },
    { id: "lok-adalat-tripura", title: "Lok Adalat & Settlement" },
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
    { label: "Tripura", href: "/services/loan-settlement/tripura" },
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
              Expert <span className="text-[#D2A02A]">Loan Settlement</span> Services in <br className="hidden md:block"/> Tripura
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              From Agartala to Dharmanagar, we help you legally settle your debts, stop harassment, and regain financial freedom.
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Finding Financial Peace in Tripura</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Tripura is a state of rich heritage and growing opportunities. However, for many individuals and small business owners in Agartala, Udaipur, and other towns, the pressure of mounting debt is a harsh reality. Whether it is a personal loan, credit card debt, or a business loan that has gone bad due to market conditions, financial stress can be overwhelming.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The fear of "recovery agents" showing up at your doorstep or office in Agartala, the constant barrage of threatening calls, and the shame of potential legal action can paralyze you. But you must know that you are not alone, and more importantly, there is a legal solution. **Loan Settlement** is a legitimate banking provision that allows you to clear your debts for a reduced amount.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions is committed to bringing professional debt relief services to Tripura. We navigate the complex banking regulations and leverage state-specific legal protections to ensure you get a fair deal. We stand between you and the bank, ensuring your rights are protected while we negotiate your freedom from debt.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is Loan Settlement (OTS)?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Loan settlement, or One Time Settlement (OTS), is a legal agreement where a borrower repays a portion of the outstanding loan in a lump sum, and the bank agrees to write off the remainder and close the account."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Banks resort to settlement when they realize that recovering the full amount is unlikely or will cost too much in legal fees. If your loan has turned into a Non-Performing Asset (NPA) (i.e., unpaid for 90 days), you become eligible for settlement discussions.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For example, if you owe ₹5 Lakhs on a credit card but have lost your job, we can present your case to the bank. Instead of running behind you for years, the bank might agree to accept ₹1.5 Lakhs to ₹2 Lakhs to close the file permanently. This saves them time and gives you a fresh start.
                  </p>
                </section>

                {/* Tripura Legal Landscape */}
                <section id="tripura-legal-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework for Debtors in Tripura</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Borrowers in Tripura are safeguarded by a mix of central laws and specific regulations extended to the state.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bombay Money-lenders Act (Extended to Tripura)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To regulate private money lending and prevent exploitation, provisions of the Bombay Money-lenders Act, 1946 have been extended to Tripura. Additionally, for tribal areas, the **Tripura Tribal Areas Autonomous District Council Money Lending Regulations, 1991** apply. These laws ensure:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Lenders must hold a valid license to operate.</li>
                    <li>There is a cap on the maximum interest recoverable—often limiting it so the total interest does not exceed the principal amount (Damdupat rule).</li>
                    <li>Harassment and intimidation for recovery are strictly prohibited offences.</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Debt Recovery Tribunal (DRT)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For bank loans above ₹20 Lakhs, cases fall under the jurisdiction of the **DRT in Guwahati**, which covers Tripura. While this sounds intimidating, the DRT also promotes settlements. We can represent you at the DRT to counter any aggressive moves by the bank and push for a compromise decree that is affordable for you.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat-tripura" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: A Path to Resolution in Tripura</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The **Tripura State Legal Services Authority** organizes regular Lok Adalats which have been incredibly successful in resolving bank disputes.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Success in Agartala</h3>
                    <p className="text-gray-700 mb-4">
                      In the National Lok Adalats held recently (e.g., September 2024), thousands of bank recovery cases were settled. In one session alone, recovery settlements worth over ₹1.3 Crores were achieved. This proves that banks in Tripura are willing to come to the table and settle.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Speed:</strong> Disputes are resolved in a single day.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Finality:</strong> The award is binding and ends the dispute forever.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Flexibility:</strong> The focus is on compromise, not punishment.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We strongly recommend aiming for a Lok Adalat settlement. Our lawyers can accompany you (virtually or through local associates) to ensure you don't agree to terms that are too harsh.
                  </p>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We bring top-tier legal expertise to your doorstep in Tripura, ensuring you don't face the banks alone.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600">We take immediate action against harassing calls, using police and cyber crime portals.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💼</div>
                      <h3 className="font-bold text-xl mb-2">Expert Negotiation</h3>
                      <p className="text-gray-600">We know the "bottom line" for every major bank (SBI, HDFC, Bandhan) and negotiate the maximum discount.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🔒</div>
                      <h3 className="font-bold text-xl mb-2">Total Privacy</h3>
                      <p className="text-gray-600">Your financial struggles are personal. We ensure complete confidentiality throughout the process.</p>
                    </div>
                  </div>
                </section>

{/* Process Section */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our 4-Step Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have streamlined the path to becoming debt-free into four simple steps.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation & Strategy</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your finances. Whether you are a government employee, a trader in Agartala, or a farmer, we assess which settlement scheme fits you best. We check for any violations by the bank in their recovery process.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Sending Legal Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We issue a formal letter to your creditors stating that you have legal counsel. This usually triggers a "Stop Harassment" protocol at the bank's end, as they know they can no longer use intimidation tactics.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Hard Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our experts engage with the bank's stress asset team. We fight for waivers on interest, penal charges, and legal fees. We present your hardship evidence to justify a lower principal repayment.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement & Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once a fair amount is agreed upon, we review the draft settlement letter. After you pay, we ensure the bank issues a **No Dues Certificate** and withdraws any cases filed against you (including Section 138 cheque bounce cases).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Harassment Laws & Police Helpline */}
                <section id="harassment-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Fighting Harassment in Tripura</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    No bank or agent has the right to abuse you. If they cross the line, use these resources.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h4 className="font-bold text-lg mb-2 text-red-700">Tripura Police Helplines</h4>
                      <p className="text-gray-700 mb-2"><strong>Emergency:</strong> Dial 112 or 100.</p>
                      <p className="text-gray-700 mb-2"><strong>Agartala Control Room:</strong> 0381-2310177 / 9436544407.</p>
                      <p className="text-gray-700"><strong>West District Control:</strong> 0381-2325784.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-lg mb-2 text-blue-700">Cyber Crime & RBI</h4>
                      <p className="text-gray-700 mb-2"><strong>Cyber Crime Helpline:</strong> 1930 (for online threats/abuse).</p>
                      <p className="text-gray-700"><strong>Email:</strong> spcybercrime@tripurapolice.nic.in. You can also file a complaint on the RBI's **Sachet** portal against unregistered lenders.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Remember:</strong> Harassment is a crime. Recording calls and saving messages can serve as powerful evidence which we can use to file an FIR or a complaint with the Banking Ombudsman.
                  </p>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents for OTS</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To process your settlement request swiftly, please keep these ready:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> KYCs (Aadhar, PAN, Voter ID)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Loan Sanction Letter
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Latest Statement of Account
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Proof of Income Loss (Termination letter, Medical bills)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Cheque Bounce Notices (if any)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Bank Correspondence Records
                    </li>
                  </ul>
                </section>

                {/* Service Areas */}
                <section id="city-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving All Districts of Tripura</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We offer our legal services digitally across the entire state.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Agartala</h4>
                      <p className="text-xs text-gray-500">Capital City</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Udaipur</h4>
                      <p className="text-xs text-gray-500">Gomati District</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Dharmanagar</h4>
                      <p className="text-xs text-gray-500">North Tripura</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Kailashahar</h4>
                      <p className="text-xs text-gray-500">Unakoti</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Belonia</h4>
                      <p className="text-xs text-gray-500">South Tripura</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Khowai</h4>
                      <p className="text-xs text-gray-500">Khowai District</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Ambassa</h4>
                      <p className="text-xs text-gray-500">Dhalai District</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Bishalgarh</h4>
                      <p className="text-xs text-gray-500">Sepahijala</p>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Start Your Journey to Debt Freedom</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't let debt control your life in Tripura. Our experts are ready to fight for your financial future.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help in Tripura?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our loan settlement experts serving Agartala and Tripura.
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
                  href="/services/loan-settlement/tripura-gramin-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Tripura Gramin Bank</span>
                </Link>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  We also handle settlement for regional institutions like Tripura State Co-operative Bank.
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

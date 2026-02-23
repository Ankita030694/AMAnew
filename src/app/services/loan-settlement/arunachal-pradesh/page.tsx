import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Arunachal Pradesh?",
    answer: "Yes, loan settlement is fully legal in Arunachal Pradesh. It operates under the framework of RBI guidelines and is supported by state-level mechanisms like the Lok Adalats organized by the Arunachal Pradesh State Legal Services Authority (APSLSA). The Arunachal Pradesh Money Lending (Regulation) Act, 2018, also provides a legal basis for fair lending and debt resolution."
  },
  {
    question: "Can I settle my loan if I am a government employee in AP?",
    answer: "Many residents in Arunachal Pradesh are government employees. While banks are generally stricter with salaried government employees due to their stable income, settlement is still possible if you can prove genuine financial hardship (like medical emergencies or family crises). We handle such cases with extreme discretion to ensure your employment reputation is not affected."
  },
  {
    question: "What is the Lok Adalat's role in Itanagar for loans?",
    answer: "The Lok Adalat in Itanagar and other districts is a powerful forum for settling bank recovery cases without a formal court trial. Awards passed here are final. We represent our clients in these Lok Adalats to ensure they get a fair settlement amount and are not pressured by bank officials into signing unfavorable terms."
  },
  {
    question: "Do you have a physical office in Itanagar?",
    answer: "AMA Legal Solutions operates as a digital-first law firm with a network of lawyers across India, including associates in the North East. We handle your entire case remotely via video consultations, email, and phone, while our local legal partners can assist with on-ground requirements in Itanagar or the Guwahati DRT if necessary."
  },
  {
    question: "How does the AP Money Lending Act protect me?",
    answer: "The Arunachal Pradesh Money Lending (Regulation) Act, 2018, was enacted to curb illegal money lending and harassment. It mandates that lenders must be licensed and cannot charge exorbitant interest rates. If you are facing harassment from unlicensed money lenders or aggressive recovery agents, this Act provides you with strong legal remedies."
  },
  {
    question: "Can settlement remove the 'Written Off' status and improve CIBIL?",
    answer: "Settlement changes the status to 'Settled', which is better than 'Written Off'. While it still impacts your score initially, it stops the bleeding. By clearing the debt, you can start rebuilding your CIBIL score immediately. We guide you on how to use secured credit cards to boost your score post-settlement."
  },
  {
    question: "What if the bank has filed a case in DRT Guwahati?",
    answer: "The Debt Recovery Tribunal (DRT) in Guwahati has jurisdiction over Arunachal Pradesh for high-value cases (usually above ₹20 Lakhs). If a case is filed there, do not ignore it. We can represent you at the DRT to contest the bank's claims or negotiate a settlement (OTS) during the pendency of the case."
  },
  {
    question: "Can I settle agricultural loans in Arunachal Pradesh?",
    answer: "Agricultural loans often have specific government waiver schemes (KCC waivers). However, if you are not covered by a scheme and are defaulting, a One Time Settlement (OTS) is possible. The process differs slightly from personal loans, and we can advise you based on the specific bank's agricultural debt policy."
  },
  {
    question: "How quickly can you stop harassment from recovery agents?",
    answer: "Once you hire us, we issue a formal legal notice of representation to the lender. This typically stops the harassment within 24-48 hours. If agents continue to harass you, we can help you file a complaint via the 'Jansunwai' portal or with the local police under relevant protection laws."
  },
  {
    question: "How much does AMA Legal Solutions charge?",
    answer: "Our fees are transparent and affordable. We charge a small retainer fee to start the legal representation and a success fee only when we successfully save you money on the settlement. There are no hidden charges, and we discuss all costs upfront during your free consultation."
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
      "name": "Arunachal Pradesh",
      "item": "https://amalegalsolutions.com/services/loan-settlement/arunachal-pradesh"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Arunachal Pradesh: Expert Legal Help",
  "description": "Facing debt issues in Arunachal Pradesh? Our expert lawyers in Itanagar & Pasighat help you settle loans, stop harassment, and save up to 50% on dues.",
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
    "@id": "https://amalegalsolutions.com/services/loan-settlement/arunachal-pradesh"
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
  title: "Loan Settlement in Arunachal Pradesh | Debt Relief Lawyers Itanagar",
  description:
    "Best loan settlement services in Arunachal Pradesh (Itanagar, Naharlagun, Pasighat). Legally settle personal loans & credit cards. Stop bank harassment today.",
  keywords: [
    "loan settlement Arunachal Pradesh",
    "debt settlement Itanagar",
    "loan settlement Pasighat",
    "debt relief services AP",
    "credit card settlement Naharlagun",
    "loan settlement lawyer Arunachal",
    "One time settlement SBI AP",
    "remove debt Arunachal Pradesh",
    "Lok Adalat Itanagar loan"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/arunachal-pradesh',
  },
  openGraph: {
    title: "Loan Settlement in Arunachal Pradesh | Expert Debt Relief",
    description: "Struggling with debt in Arunachal Pradesh? We negotiate with banks to reduce your debt and stop harassment in Itanagar and across the state.",
    url: "https://amalegalsolutions.com/services/loan-settlement/arunachal-pradesh",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Arunachal Pradesh",
      },
    ],
  },
};

export default function LoanSettlementAPPage() {
  const tocSections = [
    { id: "introduction", title: "Debt Relief in AP" },
    { id: "what-is-settlement", title: "Understanding Settlement" },
    { id: "ap-legal-landscape", title: "AP Legal Framework" },
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
    { label: "Arunachal Pradesh", href: "/services/loan-settlement/arunachal-pradesh" },
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
              Trusted <span className="text-[#D2A02A]">Loan Settlement</span> Services in <br className="hidden md:block"/> Arunachal Pradesh
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              From Itanagar to Tawang, we help you legally negotiate with banks to reduce your debt burden and stop agent harassment.
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Overcoming Financial Stress in the Land of Dawn-Lit Mountains</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Arunachal Pradesh, with its breathtaking landscapes and vibrant culture, is developing rapidly. However, the economic reality for many residents in cities like Itanagar, Naharlagun, and Pasighat can be challenging. Whether you are running a small business affected by market fluctuations or a salaried individual facing unexpected medical expenses, debt can pile up quickly.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The stress of receiving constant calls from bank recovery agents, the fear of legal notices, and the worry about social reputation are common issues faced by thousands in the state. But defaulting on a loan does not mean the end of your financial life. **Loan Settlement** is a legal and effective way to exit this debt trap.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions brings expert legal aid to Arunachal Pradesh. We understand the unique socio-economic fabric of the state and the specific challenges faced by its residents. Our team of lawyers works tirelessly to negotiate with lenders on your behalf, ensuring you get a fair chance to settle your debts and move forward with dignity.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is Loan Settlement (OTS)?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Loan settlement is a negotiated agreement where the lender accepts a reduced payment—often significantly lower than the total dues—to close a non-performing loan account."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When you are unable to pay your EMIs for over 90 days, your loan becomes a Non-Performing Asset (NPA). For banks (like SBI, Apex Bank, or private lenders), holding onto NPAs is bad for business. If they see that a borrower in Arunachal Pradesh has a **genuine financial crisis**, they are often willing to settle through a One Time Settlement (OTS) scheme.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For instance, if you have a personal loan of ₹8 Lakhs that has ballooned to ₹12 Lakhs with interest, but you have lost your income source, we might negotiate to close the entire account for ₹4-5 Lakhs. This stops the interest meter and ends the legal liability once and for all.
                  </p>
                </section>

                {/* AP Legal Landscape */}
                <section id="ap-legal-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections for Borrowers in Arunachal Pradesh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Residents of Arunachal Pradesh are protected by a combination of central banking laws and specific state regulations. Knowing these laws is your shield against harassment.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Arunachal Pradesh Money Lending (Regulation) Act, 2018</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This landmark state legislation was introduced to regulate money lending and curb the menace of illegal loan sharks. It ensures that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Money lenders must be registered and licensed.</li>
                    <li>Interest rates cannot exceed the prescribed limits.</li>
                    <li><strong>Harassment is illegal:</strong> Any form of intimidation or coercion to recover debt is a punishable offense.</li>
                    <li>Courts can intervene to allow repayment in easy installments based on your capacity.</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">DRT Guwahati Jurisdiction</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For formalized bank loans, especially higher value ones (above ₹20 Lakhs), the <strong>Debt Recovery Tribunal (DRT) in Guwahati</strong> has jurisdiction over Arunachal Pradesh. If a bank initiates a SARFAESI action to seize your property or files a recovery suit, it usually happens through this tribunal. Having legal representation that understands DRT procedures is crucial to defend your assets and negotiate a settlement before it's too late.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Solving Disputes through Lok Adalat in AP</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Arunachal Pradesh State Legal Services Authority (APSLSA)</strong> actively organizes Lok Adalats across the state to resolve disputes amicably. These are particularly effective for bank recovery cases.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recent Success Stories</h3>
                    <p className="text-gray-700 mb-4">
                      In recent sessions held in Itanagar and other districts, Lok Adalats have settled hundreds of bank recovery cases worth crores of rupees. For example, in September 2024 alone, over ₹2.6 Crores was recovered through amicable settlements in bank cases.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Binding Decision:</strong> The award is final and cannot be appealed.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>No Court Fees:</strong> It is a cost-effective method.</li>
                      <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> <strong>Mutual Consent:</strong> Settlement happens only if YOU agree to the amount.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our team can represent you in these Lok Adalats effectively. We ensure that you are not intimidated by the bank's lawyers and that the settlement amount proposed is actually affordable for you.
                  </p>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Trust AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine national-level legal expertise with a deep respect for the local sensitivities of Arunachal Pradesh.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Harassment Protection</h3>
                      <p className="text-gray-600">We utilize the 'Jansunwai' portal and local police channels to ensure you are treated with dignity.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Authority</h3>
                      <p className="text-gray-600">We don't just talk; we send legal notices. We represent you in legal forums like Lok Adalats and DRT.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Client Confidentiality</h3>
                      <p className="text-gray-600">In close-knit communities, privacy is paramount. We ensure your financial matters remain strictly confidential.</p>
                    </div>
                  </div>
                </section>

{/* Process Section */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Debt Resolution Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a transparent and structured approach to help you become debt-free.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Case Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We start by understanding your debt portfolio. We review your loan documents, current income, and employment status (whether govt or private) to design a settlement strategy eligible under bank policies.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Intervention</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We formally notify your creditors that AMA Legal Solutions represents you. This signals to them that you have legal backing, which typically reduces harassment significantly.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation & Settlement</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We negotiate with the bank's recovery officers to get the best possible OTS (One Time Settlement) deal. We aim for maximum waiver on interest and penalties, and a reduction in the principal amount relative to your hardship.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure & Freedom</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Upon payment of the agreed amount, we ensure you receive the <strong>No Dues Certificate (NDC)</strong>. We also guide you on ensuring the bank updates your status with CIBIL.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Harassment Laws & Police Helpline */}
                <section id="harassment-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Handle Harassment in AP</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Debt collection harassment is a violation of your rights. The Arunachal Pradesh government and police have mechanisms to help you.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h4 className="font-bold text-lg mb-2 text-red-700">Police Assistance</h4>
                      <p className="text-gray-700 mb-2">If you feel threatened, dial <strong>112</strong> or <strong>100</strong> immediately.</p>
                      <p className="text-gray-700 mb-2"><strong>Itanagar Capital Control Room:</strong> You can reach out at <strong>6009909795</strong> for urgent help in the capital region.</p>
                      <p className="text-gray-700"><strong>Women's Helpline:</strong> Dial <strong>181</strong> or <strong>1091</strong> for specialized assistance.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-lg mb-2 text-blue-700">Online Grievance Redressal</h4>
                      <p className="text-gray-700 mb-2">You can lodge a formal complaint against harassing agents via the <strong>Jansunwai</strong> portal of the AP Government.</p>
                      <p className="text-gray-700">For cyber harassment (abusive messages/calls), file a complaint at <strong>cybercrime.gov.in</strong> or dial <strong>1930</strong>.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Note:</strong> Banks are responsible for the conduct of their agents. We hold them accountable legally if they cross the line.
                  </p>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents to Start Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To build a strong case for your hardship, we need the following documents:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Aadhar Card & PAN Card
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Loan Account Statement (Latest)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Salary Slips (showing deduction/loss)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Bank Statements (Last 6 months)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Medical certificates (if medical hardship)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Copies of any legal notices received
                    </li>
                  </ul>
                </section>

                {/* Service Areas */}
                <section id="city-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Across Arunachal Pradesh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our digital legal services extend to all major towns and districts in the state.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Itanagar</h4>
                      <p className="text-xs text-gray-500">Capital Complex</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Naharlagun</h4>
                      <p className="text-xs text-gray-500">Twin Capital City</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Pasighat</h4>
                      <p className="text-xs text-gray-500">Smart City</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Tawang</h4>
                      <p className="text-xs text-gray-500">Tourism Hub</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Ziro</h4>
                      <p className="text-xs text-gray-500">Lower Subansiri</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Aalo</h4>
                      <p className="text-xs text-gray-500">West Siang</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Bomdila</h4>
                      <p className="text-xs text-gray-500">West Kameng</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-gray-900">Tezu</h4>
                      <p className="text-xs text-gray-500">Lohit District</p>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Regain Your Financial Peace</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Expert legal help is now available in Arunachal Pradesh. Settle your loans legally and start afresh.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help in AP?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our lawyers serving Itanagar and Arunachal Pradesh.
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
                  href="/services/loan-settlement/aditya-birla"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Aditya Birla</span>
                </Link>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  We also handle settlement for regional institutions like Arunachal Pradesh State Cooperative Apex Bank.
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

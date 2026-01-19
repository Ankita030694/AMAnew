import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Uttarakhand?",
    answer: "Yes, loan settlement is a completely legal financial process in Uttarakhand, governed by the Reserve Bank of India (RBI) guidelines and the Indian Contract Act. It is a legitimate way to resolve debt issues without facing legal action."
  },
  {
    question: "How can I settle my personal loan in Dehradun?",
    answer: "To settle a personal loan in Dehradun, you need to negotiate with your lender. It is highly recommended to hire a legal expert who can represent you, handle the documentation, and ensure you get the best possible settlement deal."
  },
  {
    question: "Does the Uttarakhand High Court intervene in loan settlements?",
    answer: "The High Court typically does not intervene in individual loan settlements unless there is a violation of fundamental rights or procedural irregularity. Most cases are resolved through Debt Recovery Tribunals (DRT) or Lok Adalats."
  },
  {
    question: "What is the role of Lok Adalats in Uttarakhand for loan settlement?",
    answer: "Lok Adalats in Uttarakhand, organized by the State Legal Services Authority, provide an excellent platform for amicable settlement of loan disputes. They offer a faster, cost-effective alternative to regular court proceedings."
  },
  {
    question: "Can I settle a credit card debt in Haridwar?",
    answer: "Absolutely. Credit card debts are unsecured and are among the most common types of debts settled. Our team serves clients in Haridwar and can help you reduce your outstanding dues significantly."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, settling a loan will mark your account as 'Settled' in your credit report, which lowers your score. However, this is a temporary setback and is better than a 'Default' status. You can rebuild your score over time."
  },
  {
    question: "How long does the process take in Uttarakhand?",
    answer: "The timeline varies but typically takes 3 to 6 months. Factors include the bank's internal processes, the complexity of your case, and the negotiation rounds required."
  },
  {
    question: "Do I need to visit the bank branch personally?",
    answer: "Not necessarily. If you hire AMA Legal Solutions, we handle the communication and visits on your behalf. You may only need to be present for the final signing or if specifically required by the bank."
  },
  {
    question: "What documents are required for loan settlement?",
    answer: "You will need your KYC documents, loan account statements, proof of income (or loss of income), and any correspondence you have had with the bank regarding the default."
  },
  {
    question: "Can I get a loan again after settlement?",
    answer: "Yes, but not immediately. You will need to demonstrate financial stability and good credit behavior for 2-3 years after settlement to become eligible for new loans."
  },
  {
    question: "What if I have a loan from a cooperative bank in Uttarakhand?",
    answer: "Cooperative banks in Uttarakhand, such as the Uttarakhand State Co-operative Bank, also have provisions for One Time Settlement (OTS). However, their policies might differ slightly from nationalized banks. We can help you navigate their specific settlement schemes effectively."
  },
  {
    question: "Can I settle a Kisan Credit Card (KCC) loan?",
    answer: "Yes, KCC loans can be settled, especially if there has been a crop failure or natural calamity affecting your income. The government often announces specific waivers or settlement schemes for agricultural loans, and we can guide you on how to avail of them."
  },
  {
    question: "What if the bank has issued a SARFAESI notice for my property in Nainital?",
    answer: "A SARFAESI notice is a serious matter as it allows the bank to auction your property. You must act immediately. We can file a securitisation application (SA) in the DRT Dehradun to get a stay on the auction and simultaneously negotiate a settlement to save your property."
  },
  {
    question: "Do I need to come to Dehradun for the settlement process?",
    answer: "Not necessarily. While our legal team is based in Dehradun to handle DRT matters, we can manage your case remotely if you are in Pithoragarh, Almora, or any other district. We handle all documentation and communication digitally or through our local network."
  },
  {
    question: "How does settlement work for government employees in Uttarakhand?",
    answer: "Government employees often fear disciplinary action if they default. However, loan settlement is a private financial matter and generally does not affect your employment status unless there is a specific service rule against it. We ensure the process is confidential to protect your professional reputation."
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
      "name": "Uttarakhand",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Uttrakhand"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Uttarakhand: Expert Legal Debt Relief",
  "description": "Struggling with debt in Uttarakhand? Get expert legal help for loan settlement in Dehradun, Haridwar, and across the state. Stop harassment and reduce your debt.",
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
    "@id": "https://amalegalsolutions.com/services/loan-settlement/Uttrakhand"
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
  "name": "Loan Settlement Services Uttarakhand",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Top-rated loan settlement and debt relief services in Uttarakhand.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "340"
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
        "name": "Amit Rawat"
      },
      "reviewBody": "I was facing severe harassment from recovery agents in Dehradun. AMA Legal Solutions not only stopped the calls but also settled my 5 Lakh loan for just 2 Lakhs. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Negi"
      },
      "reviewBody": "Best legal team in Uttarakhand for debt issues. They helped me settle my credit card dues in Haridwar without any hassle. Very professional and transparent."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement in Uttarakhand | Debt Settlement Lawyers Dehradun",
  description:
    "Expert loan settlement services in Uttarakhand. We help you settle personal loans and credit card debt in Dehradun, Haridwar, and Haldwani. Stop harassment today.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Uttrakhand',
  },
  openGraph: {
    title: "Loan Settlement in Uttarakhand | Debt Settlement Lawyers Dehradun",
    description: "Struggling with debt in Uttarakhand? We negotiate with banks to reduce your debt and stop harassment. Legal, safe, and effective services in Dehradun.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Uttrakhand",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Uttarakhand",
      },
    ],
  },
};

export default function UttarakhandLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework in Uttarakhand" },
    { id: "process", title: "Settlement Process" },
    { id: "why-choose-us", title: "Why Choose AMA" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Uttarakhand", href: "/services/loan-settlement/Uttrakhand" },
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
              Loan Settlement Services in <span className="text-[#D2A02A]">Uttarakhand</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal help in Dehradun, Haridwar, and across Uttarakhand to settle your debts, stop harassment, and regain financial peace.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Relief and Loan Settlement in Uttarakhand</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The serene state of Uttarakhand, known for its spiritual significance and natural beauty, is also a growing economic hub. With cities like Dehradun, Haridwar, and Haldwani expanding rapidly, the financial aspirations of its people have grown. However, with growth comes the risk of financial instability. Many residents in Uttarakhand find themselves trapped in a cycle of debt due to unforeseen circumstances such as the impact of the pandemic on tourism, business losses, or personal medical emergencies.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you are struggling to repay your personal loans or credit card bills, you are not alone. The pressure from banks and the aggressive tactics of recovery agents can be overwhelming. But there is a legal and dignified solution. <strong>Loan Settlement</strong> is a viable option for borrowers in Uttarakhand who are genuinely unable to pay their full dues. It allows you to close your loan account by paying a reduced lump sum amount, mutually agreed upon with the lender.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we specialize in helping the people of Uttarakhand navigate this complex process. Our team of experienced lawyers understands the local banking landscape and the legal framework specific to the region. We stand as a shield between you and the harassment, negotiating the best possible terms to help you become debt-free.
                  </p>
                </section>

                {/* Common Debt Traps */}
                <section id="debt-traps" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Debt Traps in Uttarakhand and How to Avoid Them</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttarakhand's economy is unique, heavily reliant on tourism, agriculture, and the service sector. This economic structure creates specific financial vulnerabilities that can lead residents into debt traps. Understanding these traps is the first step towards avoiding them or finding a way out.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">1. The Seasonal Income Trap</h3>
                      <p className="text-gray-700">
                        Many businesses in towns like Mussoorie, Nainital, and Rishikesh depend entirely on the tourist season or the Char Dham Yatra. A bad season due to landslides or regulatory bans can wipe out a year's income. Borrowers often take high-interest personal loans to survive the off-season, hoping to repay them next year. When consecutive seasons fail, this debt piles up, becoming unmanageable.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">2. Multiple Microfinance Loans</h3>
                      <p className="text-gray-700">
                        In rural areas of Garhwal and Kumaon, microfinance institutions (MFIs) are very active. Women's self-help groups often take multiple loans from different MFIs to fund small ventures or household expenses. The high interest rates (often 24%+) and weekly repayment pressure can lead to a situation where one loan is taken to pay off another, creating a vicious debt spiral.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">3. Unregulated Private Lenders</h3>
                      <p className="text-gray-700">
                        Due to lack of access to formal banking in remote hill districts, many people turn to local money lenders who charge exorbitant interest rates (5-10% per month). These loans are often backed by blank cheques or property papers. While we primarily deal with bank settlements, we can also provide legal counsel on how to handle harassment from private lenders under the Uttarakhand Money Lenders Act.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    If you recognize yourself in any of these situations, do not panic. These are systemic issues, and there are legal ways to exit these traps. Loan settlement is often the most practical solution to break this cycle and start fresh.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework for Loan Settlement in Uttarakhand</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement in Uttarakhand operates under the broader ambit of Indian banking laws and regulations. It is essential to understand that this is a legitimate financial process, not a loophole. The primary governing guidelines come from the <strong>Reserve Bank of India (RBI)</strong>, which permits banks to offer One Time Settlement (OTS) schemes to recover Non-Performing Assets (NPAs).
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Legal Provisions</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>RBI Guidelines on Compromise Settlements:</strong> The RBI has issued specific instructions to banks to have a board-approved policy for compromise settlements. This ensures that the process is transparent and non-discriminatory.
                    </li>
                    <li>
                      <strong>The SARFAESI Act, 2002:</strong> While this act empowers banks to recover dues, it also provides provisions for borrowers to appeal to the Debt Recovery Tribunal (DRT). In Uttarakhand, the DRT located in Dehradun has jurisdiction over such matters. We can represent you at the DRT Dehradun to ensure your rights are protected during the settlement process.
                    </li>
                    <li>
                      <strong>Lok Adalats:</strong> The <strong>Uttarakhand State Legal Services Authority</strong> regularly organizes Lok Adalats. These are people's courts where disputes, including loan recovery cases, can be settled amicably. Awards passed by the Lok Adalat are final and binding. Our lawyers can guide you on how to utilize this forum for a faster settlement.
                    </li>
                    <li>
                      <strong>Protection Against Harassment:</strong> The Supreme Court of India and the RBI have laid down strict codes of conduct for recovery agents. Harassment, use of abusive language, or visiting your home at odd hours is illegal. If you face such issues in Uttarakhand, we can take legal action on your behalf.
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Understanding these laws is the first step towards empowerment. With AMA Legal Solutions, you have a partner who knows how to leverage these legal tools to your advantage.
                  </p>
                </section>

                {/* Expanded Legal Framework Details */}
                <section className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Role of Debt Recovery Tribunal (DRT) Dehradun</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For loan amounts exceeding ₹20 Lakhs, banks often approach the <strong>Debt Recovery Tribunal (DRT)</strong>. For residents of Uttarakhand, the jurisdiction lies with the DRT in Dehradun.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                    <h4 className="font-bold text-blue-900 mb-2">Why is this important for you?</h4>
                    <p className="text-gray-700">
                      If a case is filed in the DRT, you will receive a summons. Ignoring this can lead to an ex-parte order against you, allowing the bank to recover money by selling your assets. However, the DRT is also a place where settlements can be finalized.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                      <li><strong>Legal Defense:</strong> We can file a written statement defending your case, challenging the interest calculations or the validity of the documents.</li>
                      <li><strong>Stay Orders:</strong> If the bank initiates action under the SARFAESI Act to take possession of your property, we can file a Securitisation Application (SA) in the DRT to seek a stay order.</li>
                      <li><strong>Consent Terms:</strong> We can negotiate a settlement with the bank and file "Consent Terms" in the DRT, formally closing the case.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Having a lawyer who understands the specific procedures of DRT Dehradun is crucial. At AMA Legal Solutions, our team appears regularly before the tribunal and understands the judicial mindset, helping us secure favorable orders for our clients.
                  </p>
                </section>


                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Process for Loan Settlement in Uttarakhand</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating the loan settlement process can be complex, especially when dealing with aggressive recovery agents. At AMA Legal Solutions, we have streamlined this process for our clients in Uttarakhand to ensure a hassle-free experience. Here is a detailed breakdown of how we handle your case, from the initial consultation to the final closure of your loan account.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Analysis and Documentation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          The first step involves a thorough analysis of your financial situation. We understand that every case in Uttarakhand is unique—whether you are a hotel owner in Mussoorie facing a seasonal slump or a salaried employee in Dehradun affected by job cuts.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>What we do:</strong>
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                          <li>Review all your loan documents, including the sanction letter and repayment schedule.</li>
                          <li>Assess your current income, assets, and liabilities to determine your genuine paying capacity.</li>
                          <li>Help you compile the necessary "Hardship Letter" and supporting proofs (medical bills, termination letters, business loss statements).</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Representation and Anti-Harassment</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Once you authorize us, we take over all communications with the bank. This is the most immediate relief for our clients.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>What we do:</strong>
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                          <li>Issue a formal legal notice to the bank and their recovery agencies, informing them that you are legally represented by AMA Legal Solutions.</li>
                          <li>Direct them to stop calling you personally and route all future correspondence through our office.</li>
                          <li>If harassment continues, we file complaints with the Banking Ombudsman and the local police station in your district (e.g., Dehradun, Haridwar, Udham Singh Nagar).</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          This is the core of our service. Our experienced negotiators engage with the bank's credit managers to arrive at a settlement amount that is significantly lower than your outstanding dues.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>What we do:</strong>
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                          <li>Present your hardship case effectively to justify the inability to pay the full amount.</li>
                          <li>Negotiate for a waiver of all penal interest, late fees, and a substantial portion of the principal amount.</li>
                          <li>Ensure that the settlement terms are realistic and affordable for you, often arranging for payment in installments if a lump sum is not possible.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement Agreement and Closure</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Verbal promises mean nothing in banking. We ensure everything is documented legally.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>What we do:</strong>
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                          <li>Verify the formal <strong>Settlement Letter</strong> issued by the bank to ensure there are no hidden clauses.</li>
                          <li>Guide you on making the payment directly to the bank (we never handle your cash).</li>
                          <li>Follow up to obtain the <strong>No Dues Certificate (NDC)</strong> within the stipulated time.</li>
                          <li>Advise you on how to check your CIBIL report after 45-60 days to ensure the status is updated correctly.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* How to Register / Lok Adalat */}
                <section className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Register for Loan Settlement via Lok Adalat in Uttarakhand</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Apart from direct negotiation, the <strong>Lok Adalat</strong> (People's Court) is a highly effective mechanism in Uttarakhand for settling loan disputes. It is a statutory forum where disputes pending in court or at the pre-litigation stage are settled amicably.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Steps to Approach Lok Adalat:</h3>
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                      <li>
                        <strong>Check the Schedule:</strong> The Uttarakhand State Legal Services Authority (UKSLSA) organizes National Lok Adalats quarterly. You can check the schedule on their official website or at the District Court in Dehradun, Nainital, or your local district.
                      </li>
                      <li>
                        <strong>Submit an Application:</strong> You can submit an application to the Secretary of the District Legal Services Authority (DLSA) in your district. Mention your loan details, the bank's name, and your willingness to settle.
                      </li>
                      <li>
                        <strong>Pre-Litigation Case:</strong> If the bank has not yet filed a case, you can still approach the DLSA for a pre-litigation settlement. The DLSA will issue a notice to the bank to appear for conciliation.
                      </li>
                      <li>
                        <strong>Conciliation Meeting:</strong> On the designated date, you and the bank representative will sit across the table with a neutral conciliator (usually a retired judge or senior lawyer).
                      </li>
                      <li>
                        <strong>Final Award:</strong> If a settlement is reached, an "Award" is passed. This award has the force of a civil court decree and is final and binding. No appeal lies against this award in any court.
                      </li>
                    </ol>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Note:</strong> While you can approach Lok Adalat yourself, having a legal expert from AMA Legal Solutions ensures that you do not agree to unfavorable terms under pressure. We represent you during these proceedings to secure the best outcome.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Uttarakhand?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are not just another debt settlement company; we are a team of dedicated legal professionals committed to protecting the rights of borrowers in Uttarakhand.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏔️</div>
                      <h3 className="font-bold text-xl mb-2">Local Understanding</h3>
                      <p className="text-gray-600">We understand the specific economic challenges of Uttarakhand, from the tourism sector to small-scale industries.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">DRT Expertise</h3>
                      <p className="text-gray-600">Our lawyers practice at the Debt Recovery Tribunal (DRT) in Dehradun, giving us a strategic edge in legal proceedings.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Total Protection</h3>
                      <p className="text-gray-600">We shield you from illegal recovery tactics, ensuring your dignity is maintained throughout the process.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Uttarakhand</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I run a small homestay in Rishikesh. Post-COVID, I couldn't pay my business loan. The bank was threatening to auction my property. AMA Legal Solutions intervened, stopped the auction notice, and settled the loan for 40% of the amount. I am forever grateful."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rakesh Bhatt</p>
                          <p className="text-sm text-gray-500">Homestay Owner, Rishikesh</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Recovery agents were harassing my elderly parents in Dehradun while I was working in Delhi. I contacted AMA Legal Solutions. They sent a legal notice immediately, and the harassment stopped within 24 hours. They settled my personal loan smoothly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Simran Kaur</p>
                          <p className="text-sm text-gray-500">Software Engineer, Dehradun</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Uttarakhand</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let debt steal your peace of mind. Our expert lawyers in Dehradun are ready to fight for you.
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
                    Get immediate legal advice for your debt problems in Uttarakhand.
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

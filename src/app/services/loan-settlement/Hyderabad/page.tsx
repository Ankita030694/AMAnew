import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is loan settlement legal in Hyderabad?",
    answer: "Yes, loan settlement is a completely legal and regulated financial process in Hyderabad and across India. It is governed by the guidelines of the Reserve Bank of India (RBI) and the Indian Contract Act. When you are unable to repay your loans due to genuine financial hardship, banks are authorized to offer a One Time Settlement (OTS) to recover a portion of the debt and close the account. It is not a crime to settle a loan; it is a valid banking solution for Non-Performing Assets (NPAs)."
  },
  {
    question: "Which courts in Hyderabad handle loan recovery cases?",
    answer: "In Hyderabad, loan recovery cases are primarily handled by the City Civil Courts in Purani Haveli for civil suits. For cases involving amounts above ₹20 Lakhs, jurisdiction lies with the Debts Recovery Tribunals (DRT-1 and DRT-2) located in Abids. Cheque bounce cases (Section 138 of the Negotiable Instruments Act) are heard by the Metropolitan Magistrate Courts depending on the police station jurisdiction, such as Nampally or Secunderabad courts."
  },
  {
    question: "Can recovery agents harass me in Hyderabad?",
    answer: "No, recovery agents cannot harass you. The Hyderabad Police, specifically the Cyber Crime Wing, has strict protocols against harassment. The RBI also prohibits abusive calls, threats, and visiting your home at odd hours. If you are facing harassment from recovery agents in areas like Madhapur, Kukatpally, or anywhere in Hyderabad, our legal team can help you file a formal complaint with the Cyber Crime Police Station at Basheerbagh to stop the abuse immediately."
  },
  {
    question: "How does the settlement process work for IT employees in Hyderabad?",
    answer: "Hyderabad has a large population of IT professionals in Hitech City and Gachibowli who often face debt issues due to layoffs or project ramp-downs. Ideally, the process starts with analyzing your financial situation. We then notify your bank that you have legal representation, which stops the harassment. Our lawyers specifically negotiate based on your current employment status and severance details to secure a settlement that matches your reduced income capability."
  },
  {
    question: "What is the role of Lok Adalat in Hyderabad for loan settlement?",
    answer: "The Lok Adalat (People's Court) is an effective forum for settling loan disputes in Hyderabad. Organized by the Telangana State Legal Services Authority, Lok Adalats are held regularly at the City Civil Court complex and the High Court premises. Decisions made here are final and binding, and no appeal lies against them. We often represent clients in Lok Adalats to secure a swift, amicable, and legally binding settlement with banks."
  },
  {
    question: "Will settling a loan affect my CIBIL score?",
    answer: "Yes, settling a loan will reflect as 'Settled' on your CIBIL report, which lowers your credit score by 50-100 points. It indicates that the loan was not paid in full. However, this is a better outcome than a 'Written Off' status or continuing default, which damages your score more severely and attracts legal action. Once settled, you can rebuild your score over 12-24 months by using secured credit cards and paying other bills on time."
  },
  {
    question: "Can I settle credit card bills in Hyderabad?",
    answer: "Absolutely. Credit card debt settlement is very common in Hyderabad. Due to high interest rates (36-40% annually), credit card debts can spiral out of control quickly. We negotiate with issuers like HDFC, ICICI, SBI, and American Express to settle the outstanding amount for a lump sum, often saving clients 30-50% on the total due. This stops the compounding interest and closes the card account permanently."
  },
  {
    question: "Do I need to visit the bank personally for settlement?",
    answer: "In most cases, you do not need to visit the bank personally. Once you hire AMA Legal Solutions, our lawyers handle the negotiations with the bank's settlement officers or legal department on your behalf. We attend meetings at the bank's zonal offices in areas like Somajiguda or Begumpet so you can focus on your work and family. You only need to sign the final settlement agreement."
  },
  {
    question: "What documents are required to start the process?",
    answer: "To initiate the settlement process, we need proof of your identity (Aadhar/PAN), loan account statements, and evidence of financial hardship. This evidence can include termination letters (for job loss), medical reports (for health issues), or bank statements showing business loss. If you have received any legal notices or summons from Hyderabad courts, we need those as well to prepare your defense."
  },
  {
    question: "How long does it take to settle a loan in Hyderabad?",
    answer: "The timeline varies based on the bank and the complexity of the case. Typically, a loan settlement in Hyderabad takes anywhere from 3 to 6 months. This allows time for our team to reply to legal notices, stop harassment, and negotiate multiple rounds with the bank to get the best possible waiver. We ensure the process is thorough so that you get a proper No Dues Certificate at the end."
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
      "name": "Hyderabad",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Hyderabad"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Hyderabad: Expert Legal Debt Relief",
  "description": "Comprehensive guide to loan settlement in Hyderabad. Learn how to legally settle personal loans, credit cards, and business debts with expert legal help in Telangana.",
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
  "datePublished": "2024-01-24",
  "dateModified": "2024-01-24"
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
  "name": "Loan Settlement Services Hyderabad",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Hyderabad, Telangana.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1540"
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
        "name": "Ramesh Reddy"
      },
      "reviewBody": "I was facing severe harassment from loan apps. AMA Legal Solutions helped me file a complaint with the Hyderabad Cyber Crime cell and settled my loans legally. Best lawyers in Hyderabad."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Srinivas Rao"
      },
      "reviewBody": "My business in Kukatpally took a hit, and I couldn't pay my OD. The team at AMA handled the bank negotiations perfectly and saved me from losing my property. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement in Hyderabad | Expert Debt Relief Lawyers",
  description:
    "Struggling with debt in Hyderabad? AMA Legal Solutions offers expert loan settlement services. We handle banks, stop harassment, and settle legally via Lok Adalat and DRT.",
  keywords: [
    "loan settlement Hyderabad",
    "debt settlement Hyderabad",
    "loan settlement lawyers Hyderabad",
    "NPA settlement Hyderabad",
    "credit card settlement Hyderabad",
    "DRT lawyer Hyderabad",
    "debt relief Telangana",
    "cancel loan Hyderabad",
    "stop recovery harassment Hyderabad"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Hyderabad',
  },
  openGraph: {
    title: "Loan Settlement in Hyderabad | Expert Debt Relief Lawyers",
    description: "Struggling with debt in Hyderabad? AMA Legal Solutions offers expert loan settlement services. We handle banks, stop harassment, and settle legally via Lok Adalat and DRT.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Hyderabad",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Hyderabad",
      },
    ],
  },
};

export default function HyderabadLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "when-to-consider", title: "When to Consider?" },
    { id: "legal-framework", title: "Hyderabad Legal Framework" },
    { id: "drt-hyderabad", title: "DRT Hyderabad" },
    { id: "police-protection", title: "Police Protection" },
    { id: "process", title: "Our Process" },
    { id: "types-of-loans", title: "Types of Loans" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Local Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Hyderabad", href: "/services/loan-settlement/Hyderabad" },
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
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Settle Your Debt in Hyderabad with <span className="text-[#D2A02A]">Legal Confidence</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert loan settlement services for Hyderabad's professionals and business owners. We handle banks, stop harassment, and protect your assets legally.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Financial Relief for the City of Pearls</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Hyderabad is a thriving metropolis, home to a booming IT corridor in Hitech City, Gachibowli, and Madhapur, as well as historic business hubs in Abids, Koti, and Secunderabad. The city's rapid growth has provided opportunities for many, but it has also led to increased financial pressure. From young IT professionals juggling multiple credit cards to small business owners in industrial estates like Jeedimetla facing liquidity crunches, debt has become a silent crisis for many Hyderabadi families.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    If you are finding it difficult to manage your EMIs due to job loss, medical emergencies, or business failure, ignoring the problem is not the solution. In fact, delaying action can lead to aggressive recovery tactics and legal complications. <strong>Loan Settlement</strong> is a legitimate, legal, and effective way to exit your debt trap. It allows you to close your active loans by paying a negotiated one-time amount, which is often significantly lower than what you owe.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we understand the specific challenges faced by borrowers in Hyderabad. Our team of experienced lawyers is well-versed with the local legal landscape, from the Ranga Reddy District Courts to the Debt Recovery Tribunals in Abids. We are here to provide you with the legal shield you need to negotiate with banks and regain your financial freedom.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Loan Settlement</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Loan Settlement, or One Time Settlement (OTS), is a legal agreement where the lender accepts a reduced lump-sum payment to fully close the loan account."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This process is most suitable for unsecured loans such as personal loans and credit cards. When a borrower defaults and the loan becomes a Non-Performing Asset (NPA), the bank realizes that recovering the full amount through legal routes might take years. In such cases, they are often willing to waive the accumulated interest and penalties, and sometimes even a part of the principal, to close the account immediately.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For residents of Hyderabad, this means you can resolve your debts without the fear of eternal harassment. Whether you have a salary account with HDFC in Banjara Hills or a business loan with SBI in Patny, the settlement policies remain governed by RBI guidelines, which we leverage to your advantage.
                  </p>
                </section>

                {/* When to Consider */}
                <section id="when-to-consider" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">When is Settlement the Right Choice?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    We recommend considering loan settlement only when you are in a genuine financial crisis. It is a strategic decision for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">⚠️</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Job Loss</h4>
                        <p className="text-gray-600 text-sm">Common in Hyderabad's volatile IT sector. If you have been laid off and can't pay EMIs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🏥</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Health Crisis</h4>
                        <p className="text-gray-600 text-sm">Unexpected medical expenses that have drained your savings.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">📉</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Business Loss</h4>
                        <p className="text-gray-600 text-sm">For entrepreneurs in Balanagar or Cherlapally facing cash flow issues.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🔄</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Debt Trap</h4>
                        <p className="text-gray-600 text-sm">When you borrow from Peter to pay Paul. Settlement stops this cycle.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework in Hyderabad</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Navigating the legal system in Telangana requires specific local knowledge. Here is how we use the legal framework to protect you:
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Telangana State Legal Services Authority</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We actively use the <strong>Lok Adalat</strong> system organized by the State Legal Services Authority. Held at the City Civil Court complex near Purani Haveli and district courts in Ranga Reddy, these Lok Adalats provide a platform for amicable settlement. An award passed here acts as a decree of a civil court and is final, ensuring the bank cannot harass you for the same debt again.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Telangana Money Lenders Act</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is particularly relevant if you are dealing with private financiers or unauthorized money lenders in Hyderabad. The Act requires all money lenders to be licensed. If you are being harassed by an unlicensed lender charging exorbitant interest, we can file a criminal complaint against them under this Act to nullify the illegal debt.
                  </p>
                </section>

                {/* DRT Hyderabad */}
                <section id="drt-hyderabad" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Recovery Tribunal (DRT) Hyderabad</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For loan amounts exceeding ₹20 Lakhs, banks usually approach the <strong>Debts Recovery Tribunal (DRT)</strong>. Hyderabad houses two benches:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li><strong>DRT-1:</strong> Jurisdiction over specific banks and districts in Telangana.</li>
                    <li><strong>DRT-2:</strong> Covers other banks and remaining areas.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Both are located at Triveni Complex, Abids. If a bank files a recovery suit (OA) against you here, our experienced DRT lawyers will represent you. We file counter-claims and replies to delay the proceedings and force the bank to come to the negotiation table for a settlement, which is often faster and cheaper for them than a full trial.
                  </p>
                </section>

                {/* Police Protection */}
                <section id="police-protection" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Protection Against Harassment</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Hyderabad City Police is known for its proactive stance against cybercrime and harassment.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                    <h4 className="text-xl font-bold text-red-900 mb-2">Cyber Crime Wing (CCS)</h4>
                    <p className="text-red-800 mb-4">
                      Located at Basheerbagh, the Cyber Crime Police Station is where we file complaints against:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-red-800">
                      <li><strong>Instant Loan Apps:</strong> That act illegally and use morphing or blackmail.</li>
                      <li><strong>Abusive Calls:</strong> Recovery agents using abusive language or threatening violence.</li>
                      <li><strong>Privacy Violation:</strong> Agents calling your relatives or colleagues.</li>
                    </ul>
                    <p className="text-red-800 mt-4">
                      We help you draft a strong complaint with call recordings and screenshots as evidence, ensuring the police take immediate action.
                    </p>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We engage with banks professionally to secure the best deal for you.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Assessment & Onboarding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your debt portfolio—credit cards, personal loans, and others. We check your eligibility and calculate the maximum savings possible based on Hyderabad's banking norms.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Shielding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We send a legal representation letter to your creditors, informing them that AMA Legal Solutions represents you. This is the first step to stopping the harassment calls.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team negotiates with the bank's zonal offices. We use your hardship proof to demand waivers. We don't settle for the first offer; we push for the lowest possible amount.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure & Freedom</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once the deal is struck, we verify the Settlement Letter. You pay the bank directly. We then ensure you get the No Dues Certificate, marking the end of your debt journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Handle in Hyderabad</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        High-interest loans from private banks and NBFCs. We settle these frequently for IT employees facing salary cuts.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Credit Card Debt</h3>
                      <p className="text-gray-700">
                        Managing multiple cards? We consolidate the negotiation and settle massive credit card bills for a fraction of the cost.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">SME Business Loans</h3>
                      <p className="text-gray-700">
                        Unsecured business loans for traders in Begum Bazar or manufacturers in Jeedimetla. We help save your business from liquidation.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Online App Loans</h3>
                      <p className="text-gray-700">
                        Victim of predatory loan apps? We deal with them strictly through the Cyber Crime cell to stop the abuse and settle the principal.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Trust AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are not just a call center; we are a law firm with a physical presence and legal authority.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Court Presence</h3>
                      <p className="text-gray-600">Our lawyers regularly appear in Hyderabad courts and DRT, giving us the edge in legal negotiations.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">👮</div>
                      <h3 className="font-bold text-xl mb-2">Police Liasoning</h3>
                      <p className="text-gray-600">We respond to police complaints and help file counter-complaints against harassment effectively.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📉</div>
                      <h3 className="font-bold text-xl mb-2">High Success Rate</h3>
                      <p className="text-gray-600">We have successfully settled crores of rupees in debt for thousands of clients in Telangana.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Hyderabad</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was facing severe harassment from loan apps. My contacts were being messaged. AMA Legal Solutions helped me file a complaint with the Hyderabad Cyber Crime cell and settled my loan principal. They saved my reputation."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Ramesh Reddy</p>
                          <p className="text-sm text-gray-500">Software Engineer, Gachibowli</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My textile business in Koti took a hit post-Covid. I couldn't pay my Overdraft. The team at AMA handled the bank negotiations involved in the DRT process perfectly and saved me from losing my property/factory. Highly recommended."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Srinivas Rao</p>
                          <p className="text-sm text-gray-500">Business Owner, Koti</p>
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
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Let Debt Control Your Life</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Take the first step towards a debt-free future in Hyderabad. Our expert lawyers are ready to fight for your financial freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Legal • Effective
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers in Hyderabad today.
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
                      <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Banking & Finance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/cheque-bounce-lawyer" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cheque Bounce
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
                {[
                  "SBI", "HDFC", "ICICI", "Kotak Mahindra", "IDFC", "Yes Bank", "Bajaj Finserv", 
                  "Axis Bank", "Bank of Baroda", "Hero Fincorp", "Aditya Birla", "Poonawalla Fincorp",
                  "Tata Capital", "Federal Bank", "PayU Finance", "KrazyBee", "AU Small Finance Bank",
                  "Northern Arc", "DMI Finance", "Piramal Finance", "DBS Bank", "South Indian Bank",
                  "Si Creva (Kissht/Ring)", "Stashfin", "L&T Finance", "American Express", "Standard Chartered",
                  "True Credits (TrueBalance)", "Moneyview", "Vivriti Capital", "Kisetsu Saison Finance", 
                  "IndusInd Bank", "SMFG India Credit", "Fibe (EarlySalary)"
                ].map((bank) => {
                  const slug = bank.toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                  return (
                    <Link 
                      key={bank}
                      href={`/services/loan-settlement/${slug}`}
                      className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                    >
                      <span className="text-gray-800 font-medium text-sm leading-tight block">{bank}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  Our loan settlement services are available for all major banks in India
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

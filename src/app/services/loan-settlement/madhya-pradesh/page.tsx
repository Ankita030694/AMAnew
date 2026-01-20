import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Madhya Pradesh | Debt Relief Lawyers Indore, Bhopal, Jabalpur",
  description:
    "Struggling with debt in MP? AMA Legal Solutions offers expert loan settlement for MSMEs in Indore, farmers in Malwa, and individuals in Bhopal. Stop harassment & settle legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Madhya-Pradesh',
  },
  openGraph: {
    title: "Loan Settlement in Madhya Pradesh | Debt Relief Lawyers Indore, Bhopal, Jabalpur",
    description: "Struggling with debt in MP? AMA Legal Solutions offers expert loan settlement for MSMEs in Indore, farmers in Malwa, and individuals in Bhopal. Stop harassment & settle legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Madhya-Pradesh",
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
      "item": "https://amalegalsolutions.com/services/loan-settlement/Madhya-Pradesh"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Madhya Pradesh: Heart of India, Free from Debt",
  "description": "Comprehensive guide to loan settlement in Madhya Pradesh. Learn how to legally settle MSME loans in Indore, agricultural debt in Malwa, and protect against illegal recovery.",
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
  "datePublished": "2023-11-21",
  "dateModified": "2023-11-21"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Madhya Pradesh",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Madhya Pradesh.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "680"
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
        "name": "Rajesh Gupta"
      },
      "reviewBody": "My factory in Pithampur was facing a severe cash crunch. AMA Legal Solutions helped me restructure my business loan and settle the overdue amount with the bank. Highly recommended for MSMEs."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sohan Lal"
      },
      "reviewBody": "I was being harassed by a private lender in Ujjain. The lawyers at AMA used the MP Money Lenders Act to stop the harassment and settle the matter legally."
    }
  ]
};

export default function MPLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in MP" },
    { id: "process", title: "Our Process" },
    { id: "msme-settlement", title: "MSME & Industrial Loans" },
    { id: "lok-adalat", title: "Lok Adalat Settlement" },
    { id: "types-of-loans", title: "Types of Loans" },
    { id: "credit-score", title: "Credit Score Impact" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "documentation", title: "Required Documents" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Madhya Pradesh", href: "/services/loan-settlement/Madhya-Pradesh" },
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
              Heart of India, Free from Debt: <span className="text-[#D2A02A]">Loan Settlement in Madhya Pradesh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for MSMEs in Indore, Farmers in Malwa, and Families in Bhopal. We fight against harassment and help you settle debts with dignity.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Case Evaluation
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Debt Challenges in Madhya Pradesh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Madhya Pradesh is the heartbeat of India's agriculture and a rising industrial power. However, from the <strong>industrial hubs of Indore and Pithampur</strong> to the <strong>soybean fields of Ujjain and Dewas</strong>, financial stress is a reality for many.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    MSMEs often face working capital crunches due to delayed payments, while farmers grapple with crop price fluctuations. The presence of unregulated money lenders (Sahukars) in rural areas further complicates the debt landscape.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions is here to support the people of MP. We provide professional legal guidance to navigate these financial storms, ensuring that you are protected by the law and that your debts are settled fairly.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan settlement, or One Time Settlement (OTS), is a legal negotiation where the bank agrees to accept a reduced lump sum amount to close a loan account that has become a Non-Performing Asset (NPA)."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is a practical solution for both parties. If a factory owner in Govindpura owes ₹50 Lakhs but business is down, the bank may agree to settle for ₹25-30 Lakhs to recover their funds quickly, rather than engaging in long litigation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>MSME & Business Loans (Indore, Bhopal, Gwalior)</li>
                    <li>Kisan Credit Card (KCC) & Agricultural Loans</li>
                    <li>Personal Loans & Credit Cards</li>
                    <li>Vehicle Loans & Commercial Equipment Finance</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections for Borrowers in MP</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Madhya Pradesh has specific laws to protect borrowers from exploitation.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Madhya Pradesh Money Lenders Act, 1934 (Amended 2020)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The 2020 amendment to this Act is a powerful shield. It mandates that <strong>all money lenders must be registered</strong>. Crucially, it states that <strong>loans advanced by unregistered money lenders are not legally recoverable in any court</strong>. This provision effectively nullifies the power of illegal Sahukars to harass you through the legal system.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">High Court Protection</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Madhya Pradesh High Court</strong> (Principal Seat at Jabalpur, Benches at Indore and Gwalior) has consistently ruled against the use of force by recovery agents. The court has emphasized that banks must follow the due process of law and cannot act as "musclemen" to seize vehicles or property.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">MPSLSA Lok Adalats</h4>
                      <p className="text-gray-600">The MP State Legal Services Authority conducts regular Lok Adalats, providing a fast, cost-effective, and binding mechanism to settle bank disputes across the state.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">RBI Fair Practice Code</h4>
                      <p className="text-gray-600">Strict RBI norms prevent banks and NBFCs from harassing borrowers. We ensure these guidelines are strictly followed in your case.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We guide you through a structured process to achieve financial freedom.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Shielding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We send a legal notice to the bank/lender representing you. This stops them from calling you directly and compels them to communicate only through your legal counsel.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your financial situation. For MSMEs, we review balance sheets and cash flow; for farmers, we look at crop yields. We build a strong case for settlement.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team negotiates with bank officials in Indore, Bhopal, or regional offices to reduce the outstanding amount, aiming for a waiver of interest and penalties.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure & Peace</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We review the settlement letter to ensure there are no hidden clauses. Once you pay the agreed amount, we ensure you receive a No Dues Certificate.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* MSME Settlement */}
                <section id="msme-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">MSME & Industrial Loans</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Indore, Pithampur, and Dewas are the industrial engines of MP. But business cycles can be harsh.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <p className="text-lg text-blue-900">
                      <strong>Specialized Support:</strong> We understand the nuances of MSME finance, including working capital limits, term loans, and machinery finance. We help you restructure or settle these debts to keep your business running.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Don't let a temporary cash crunch lead to the closure of your factory or shop. Legal settlement is a viable path to recovery.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: Fast & Final Resolution</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The MPSLSA actively promotes Lok Adalats for bank recovery cases.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Why Choose Lok Adalat?</h3>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Speed:</strong> Cases are often settled in a single sitting.</li>
                      <li><strong>Finality:</strong> The award is binding and cannot be appealed, ending the legal stress.</li>
                      <li><strong>Cost-Effective:</strong> No court fees, and often significant waivers on interest.</li>
                    </ul>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise covers the spectrum of debt issues in Madhya Pradesh.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">MSME & Business</h3>
                      <p className="text-gray-700">
                        Settlement for industries in Pithampur, Dewas, and traders in Indore/Bhopal.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Agriculture (KCC)</h3>
                      <p className="text-gray-700">
                        Helping soybean and wheat farmers in Malwa/Nimar settle KCC loans after crop losses.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal & Credit Card</h3>
                      <p className="text-gray-700">
                        Resolving unsecured personal debt and credit card dues to stop harassment.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Vehicle Loans</h3>
                      <p className="text-gray-700">
                        Protecting your commercial or personal vehicle from illegal seizure by agents.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settlement will show on your CIBIL report, but it is a necessary step to stop the financial bleeding.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Reality Check:</strong> A "Settled" status is better than a "Written Off" or "Suit Filed" status. It allows you to close the chapter and eventually rebuild your financial health.
                    </p>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Mistakes to Avoid</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Borrowing from Unregistered Lenders</h3>
                        <p className="text-gray-700">Taking high-interest loans from unregistered Sahukars is risky. Remember, the law protects you, but avoiding the trap is better.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Court Notices</h3>
                        <p className="text-gray-700">If you receive a notice from a court in Indore or Jabalpur, act immediately. Ignoring it can lead to an arrest warrant.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Surrendering Assets</h3>
                        <p className="text-gray-700">Do not hand over your vehicle or property to agents without a court order. The MP High Court protects you from this.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To start your settlement process, we will need:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Identity Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN Card & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Voter ID / Udyam Registration (for MSMEs)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Loan Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Any Legal Notices Received</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> KCC Card (for farmers)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in MP?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are committed to protecting the rights of borrowers in Madhya Pradesh.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Expertise</h3>
                      <p className="text-gray-600">Deep knowledge of the MP Money Lenders Act and High Court rulings.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏭</div>
                      <h3 className="font-bold text-xl mb-2">MSME Focused</h3>
                      <p className="text-gray-600">Specialized support for industrial and business loan settlements in Indore/Pithampur.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600">We take strong legal action against aggressive recovery agents and Sahukars.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from MP</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My factory in Pithampur was facing a severe cash crunch. AMA Legal Solutions helped me restructure my business loan and settle the overdue amount with the bank. Highly recommended for MSMEs."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Gupta</p>
                          <p className="text-sm text-gray-500">Indore</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was being harassed by a private lender in Ujjain. The lawyers at AMA used the MP Money Lenders Act to stop the harassment and settle the matter legally."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sohan Lal</p>
                          <p className="text-sm text-gray-500">Ujjain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Legal Help Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't face the banks alone. Our expert lawyers in Madhya Pradesh are here to protect you.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers in Madhya Pradesh today.
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
    </>
  );
}

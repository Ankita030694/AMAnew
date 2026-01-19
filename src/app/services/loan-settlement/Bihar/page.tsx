import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Bihar | Debt Relief Lawyers Patna, Gaya, Muzaffarpur",
  description:
    "Struggling with debt in Bihar? AMA Legal Solutions offers expert loan settlement for farmers, small businesses, and individuals in Patna, Gaya, Muzaffarpur. Stop harassment & settle legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Bihar',
  },
  openGraph: {
    title: "Loan Settlement in Bihar | Debt Relief Lawyers Patna, Gaya, Muzaffarpur",
    description: "Struggling with debt in Bihar? AMA Legal Solutions offers expert loan settlement for farmers, small businesses, and individuals in Patna, Gaya, Muzaffarpur. Stop harassment & settle legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Bihar",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Bihar",
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
      "name": "Bihar",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Bihar"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Bihar: Empowering the Hardworking Spirit",
  "description": "Comprehensive guide to loan settlement in Bihar. Learn how to legally settle agricultural loans, microfinance debt, and protect against illegal recovery in Patna and beyond.",
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
  "name": "Loan Settlement Services Bihar",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Bihar.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "720"
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
        "name": "Rameshwar Prasad"
      },
      "reviewBody": "I was trapped in a KCC loan cycle in Muzaffarpur. AMA Legal Solutions helped me negotiate with the bank and settle the amount. They saved my land from auction."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Devi"
      },
      "reviewBody": "Microfinance agents were harassing me daily. The lawyers at AMA stopped the harassment and helped me close the loan with a one-time payment."
    }
  ]
};

export default function BiharLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Bihar" },
    { id: "process", title: "Our Process" },
    { id: "microfinance", title: "Microfinance & SHG Loans" },
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
    { label: "Bihar", href: "/services/loan-settlement/Bihar" },
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
              Empowering Bihar's Spirit: <span className="text-[#D2A02A]">Loan Settlement in Bihar</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for Farmers, Small Traders, and Families in Patna, Gaya, and Muzaffarpur. We fight against harassment and help you settle debts with dignity.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Debt Challenges in Bihar</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Bihar is a land of immense potential and resilience. However, for many <strong>farmers in the Gangetic plains</strong>, <strong>small traders in bustling markets like Patna and Muzaffarpur</strong>, and families relying on remittances, debt can become a heavy burden.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The rise of <strong>Microfinance Institutions (MFIs)</strong> in rural areas has provided credit but also led to aggressive recovery tactics that distress village communities. Additionally, agricultural volatility often leaves Kisan Credit Card (KCC) holders unable to repay on time.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions stands with the people of Bihar. We provide professional legal guidance to navigate these financial storms, ensuring that you are treated with respect and that your debts are settled fairly under the law.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan settlement, or One Time Settlement (OTS), is a legal agreement where the bank agrees to accept a reduced amount to close a loan account that has become a Non-Performing Asset (NPA)."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is not charity; it is a practical banking solution. If a shopkeeper in Gaya owes ₹10 Lakhs but has suffered losses, the bank may agree to settle for ₹4-5 Lakhs to recover what they can, rather than spending years in court.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Kisan Credit Card (KCC) & Agricultural Loans</li>
                    <li>Microfinance & Self Help Group (SHG) Loans</li>
                    <li>Personal Loans & Credit Cards</li>
                    <li>Small Business (MSME) Loans</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections for Borrowers in Bihar</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The law in Bihar provides strong safeguards against exploitation.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Bihar Money Lenders Act, 1974</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act is a powerful tool against unregulated private lenders. It mandates registration for all money lenders. Crucially, <strong>Section 12</strong> provides for the automatic redemption of usufructuary mortgages on agricultural land after 7 years. It also strictly prohibits the charging of compound interest. If you are dealing with an unregistered lender, their claims may be unenforceable.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Patna High Court Judgment on Recovery Agents</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In a landmark judgment delivered in May 2023 by <strong>Justice Rajiv Ranjan Prasad</strong>, the Patna High Court ruled that <strong>forceful seizure of vehicles by recovery agents is illegal</strong> and violates fundamental rights. The court directed the police to register FIRs against such agents. This ruling is a shield for every borrower in Bihar against muscle-power tactics.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">BSLSA Lok Adalats</h4>
                      <p className="text-gray-600">The Bihar State Legal Services Authority conducts regular Lok Adalats in Patna and all districts, offering a fast and binding way to settle bank disputes.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">RBI Guidelines</h4>
                      <p className="text-gray-600">Strict RBI norms prevent banks and MFIs from harassing borrowers. Any violation can be reported to the RBI Ombudsman.</p>
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Stop the Harassment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We send a legal notice to the bank/lender representing you. This legally compels them to stop calling you directly and communicate only through your lawyers.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We evaluate your ability to pay. For farmers, we look at crop cycles; for traders, we look at business cash flow. We build a case for why a settlement is necessary.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team negotiates with bank officials in Patna or local branches to reduce the outstanding amount, aiming for a waiver of interest and penalties.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement & Freedom</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We review the settlement letter to ensure there are no hidden clauses. Once you pay the agreed amount, we ensure you receive a No Dues Certificate.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Microfinance */}
                <section id="microfinance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Microfinance & SHG Loans</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Microfinance has helped many, but aggressive recovery has caused distress in rural Bihar.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                    <p className="text-lg text-red-900">
                      <strong>Know Your Rights:</strong> MFI agents cannot form groups outside your house to shame you. They cannot seize your household items. If they do, it is a violation of RBI's Fair Practice Code.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We help individuals and groups negotiate with MFIs to restructure or settle loans without the fear of public humiliation.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: Fast & Final Resolution</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Bihar State Legal Services Authority (BSLSA) actively promotes Lok Adalats for bank recovery cases.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Benefits for You</h3>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Speed:</strong> Cases are often settled in a single day.</li>
                      <li><strong>Finality:</strong> The decision is binding and ends the legal battle.</li>
                      <li><strong>Savings:</strong> No court fees, and often significant waivers on interest.</li>
                    </ul>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise covers the spectrum of debt issues in Bihar.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Agriculture (KCC)</h3>
                      <p className="text-gray-700">
                        Helping farmers settle KCC loans after crop failures or natural calamities.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Small Business</h3>
                      <p className="text-gray-700">
                        Settlement for traders and shopkeepers in Patna, Muzaffarpur, and Bhagalpur facing business downturns.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Microfinance</h3>
                      <p className="text-gray-700">
                        Protecting rural borrowers from aggressive MFI recovery agents and settling group loans.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal & Vehicle</h3>
                      <p className="text-gray-700">
                        Settling personal loans and protecting vehicles from illegal seizure in light of the Patna HC judgment.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settlement will show on your CIBIL report, but it is a necessary step to stop the bleeding.
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
                        <h3 className="font-bold text-lg text-gray-900">Borrowing from Moneylenders</h3>
                        <p className="text-gray-700">Taking high-interest loans from local moneylenders to pay banks is a trap. It only increases your burden.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Court Notices</h3>
                        <p className="text-gray-700">If you receive a notice from a court in Patna or your district, do not ignore it. It can lead to an arrest warrant.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Surrendering Assets</h3>
                        <p className="text-gray-700">Do not hand over your vehicle or property to agents without a court order. The Patna High Court protects you from this.</p>
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
                          <li className="flex items-center"><span className="mr-2">✓</span> Voter ID</li>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Bihar?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are committed to protecting the rights of borrowers in Bihar.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Expertise</h3>
                      <p className="text-gray-600">Deep knowledge of the Bihar Money Lenders Act and Patna High Court rulings.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌾</div>
                      <h3 className="font-bold text-xl mb-2">Farmer Focused</h3>
                      <p className="text-gray-600">Specialized support for KCC and agricultural loan settlements.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600">We take strong legal action against aggressive recovery agents and MFIs.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Bihar</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was trapped in a KCC loan cycle in Muzaffarpur. AMA Legal Solutions helped me negotiate with the bank and settle the amount. They saved my land from auction."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rameshwar Prasad</p>
                          <p className="text-sm text-gray-500">Muzaffarpur</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Microfinance agents were harassing me daily. The lawyers at AMA stopped the harassment and helped me close the loan with a one-time payment."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sunita Devi</p>
                          <p className="text-sm text-gray-500">Patna</p>
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
                      Don't face the banks alone. Our expert lawyers in Bihar are here to protect you.
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
                    Speak to our senior loan settlement lawyers in Bihar today.
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
            <GenericStatesGrid serviceName="Loan Settlement" servicePath="loan-settlement" />
          </div>
        </div>
      </div>
    </>
  );
}

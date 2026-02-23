import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Rajasthan | Debt Relief Lawyers Jaipur, Jodhpur, Udaipur",
  description:
    "Struggling with debt in Rajasthan? AMA Legal Solutions offers expert loan settlement for hotels, textile units, and individuals in Jaipur, Jodhpur, Udaipur. Settle legally & stop harassment.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Rajasthan',
  },
  openGraph: {
    title: "Loan Settlement in Rajasthan | Debt Relief Lawyers Jaipur, Jodhpur, Udaipur",
    description: "Struggling with debt in Rajasthan? AMA Legal Solutions offers expert loan settlement for hotels, textile units, and individuals in Jaipur, Jodhpur, Udaipur. Settle legally & stop harassment.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Rajasthan",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Rajasthan",
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
      "name": "Rajasthan",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Rajasthan"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Rajasthan: Resilience in the Land of Kings",
  "description": "Comprehensive guide to loan settlement in Rajasthan. Learn how to legally settle tourism and textile loans, personal debts, and protect against illegal recovery in Jaipur and Jodhpur.",
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
  "name": "Loan Settlement Services Rajasthan",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Rajasthan.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "850"
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
        "name": "Rajendra Singh"
      },
      "reviewBody": "My heritage hotel in Udaipur was facing severe losses post-COVID. AMA Legal Solutions helped me restructure my debt and settle the overdue amount, saving my ancestral property."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Agarwal"
      },
      "reviewBody": "I had a business loan dispute for my textile unit in Bhilwara. The team handled the bank negotiations perfectly and stopped the legal notices."
    }
  ]
};

export default function RajasthanLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Rajasthan" },
    { id: "process", title: "Our Process" },
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
    { label: "Rajasthan", href: "/services/loan-settlement/Rajasthan" },
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
              Resilience in the Land of Kings: <span className="text-[#D2A02A]">Loan Settlement in Rajasthan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for Hotels, Textile Units, and Individuals in Jaipur, Jodhpur, and Udaipur. We protect your assets and dignity from illegal recovery.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating Financial Challenges in Rajasthan</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rajasthan is a state of vibrant culture and resilient enterprise. From the <strong>tourism hubs of Jaipur and Udaipur</strong> to the <strong>textile mills of Bhilwara</strong> and the <strong>marble markets of Kishangarh</strong>, business is the lifeblood of the state. However, recent economic shifts and the post-pandemic recovery have left many businesses and individuals struggling with debt.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The challenge is compounded by the presence of unregulated private money lenders (Sahukars) who often operate outside the law. For a hotel owner facing low occupancy or a textile trader dealing with delayed payments, the pressure from both banks and private lenders can be overwhelming.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we provide a shield for Rajasthan's entrepreneurs and families. We combine our deep understanding of the local business landscape with legal expertise to help you settle your debts honorably and legally.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan settlement (One Time Settlement or OTS) is a legal process where the borrower and lender agree on a reduced payoff amount to close the loan account. It is a lifeline for those genuinely unable to repay the full debt."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This process is fully recognized by the RBI and is often the best way for banks to recover Non-Performing Assets (NPAs). For instance, if a resort in Jaisalmer has a debt of ₹50 Lakhs but business is down, the bank may accept ₹20-25 Lakhs as a final settlement to close the book.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Hospitality & Tourism Loans</li>
                    <li>MSME & Textile Industry Loans</li>
                    <li>Personal Loans & Credit Cards</li>
                    <li>Kisan Credit Card (KCC) Loans (in specific cases)</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections for Borrowers in Rajasthan</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rajasthan has specific laws to protect its citizens from exploitation and unfair recovery practices.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Rajasthan Money Lenders Act, 1963</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act is a crucial defense against unlicensed Sahukars. It mandates that every money lender must hold a valid license. <strong>Courts in Rajasthan are mandated to dismiss suits for recovery filed by unlicensed money lenders.</strong> If you are being harassed by a private lender, we can verify their license status and challenge their claims in court.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rajasthan Relief of Agricultural Indebtedness Act, 1957</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Designed to support the state's agricultural backbone, this Act provides mechanisms for debt relief and fair determination of dues for agriculturists. It prevents the attachment of essential assets like agricultural land and implements needed for livelihood.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">High Court Protection</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Rajasthan High Court (Jaipur Bench and Principal Seat at Jodhpur)</strong> has been vigilant in protecting citizens' rights. It has upheld that recovery agents cannot take the law into their own hands. Any seizure of property must follow the due process (SARFAESI Act), and police harassment for civil debt is strictly prohibited.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">RSLSA Lok Adalats</h4>
                      <p className="text-gray-600">The Rajasthan State Legal Services Authority organizes Lok Adalats across districts like Jaipur, Kota, and Ajmer for fast-track settlement.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">RBI Fair Practice Code</h4>
                      <p className="text-gray-600">Banks must treat borrowers with dignity. Harassment, abusive calls, and threats are violations of RBI norms and can be legally challenged.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a transparent and legal path to resolve your financial stress.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Shielding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We issue a legal notice to your creditors, informing them that you are represented by counsel. This stops the direct harassment and channels all communication through us.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Business & Financial Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          For hotels and industries, we analyze your balance sheets and market conditions (e.g., tourism slump) to prepare a compelling case for the bank justifying the need for a waiver.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our lawyers negotiate with bank officials in Jaipur or regional offices to secure the lowest possible settlement amount, maximizing waivers on interest and penalties.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure & NOC</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We ensure you get a formal settlement letter and, upon payment, a No Dues Certificate (NDC) to officially close the loan account.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: A Fast Track Solution</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Lok Adalats are highly effective in Rajasthan for settling pending court cases, especially cheque bounce matters under Section 138.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Why Choose Lok Adalat?</h3>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Final Verdict:</strong> The award passed is final and cannot be appealed.</li>
                      <li><strong>Cost Effective:</strong> No court fee is required, and if paid, it is refunded.</li>
                      <li><strong>Amicable Resolution:</strong> It focuses on compromise rather than punishment.</li>
                    </ul>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have specialized expertise in Rajasthan's key economic sectors.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Tourism & Hospitality</h3>
                      <p className="text-gray-700">
                        Settlement for hotels, resorts, and travel agencies in Jaipur, Udaipur, and Jaisalmer facing post-pandemic stress.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Textiles & Marble</h3>
                      <p className="text-gray-700">
                        Helping MSMEs in Bhilwara (Textiles) and Kishangarh (Marble) settle working capital and term loans.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Debt</h3>
                      <p className="text-gray-700">
                        Settling personal loans and credit cards for salaried employees and small business owners across the state.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Gems & Jewelry</h3>
                      <p className="text-gray-700">
                        Specialized assistance for the jewelry sector in Jaipur dealing with high-value inventory loans.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Credit Score Impact</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settlement will reflect on your CIBIL report. While it lowers your score initially, it stops the continuous damage of "defaults" and legal action.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Our Advice:</strong> A "Settled" status is manageable and can be improved over time. A "Suit Filed" or "Willful Defaulter" tag is much harder to recover from. Choose settlement to clear the slate.
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
                        <h3 className="font-bold text-lg text-gray-900">Trusting Unlicensed Lenders</h3>
                        <p className="text-gray-700">Taking fresh loans from Sahukars to pay off banks often leads to a worse debt trap due to exorbitant interest rates.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Legal Notices</h3>
                        <p className="text-gray-700">Ignoring a notice from a Jaipur or Jodhpur court can lead to an ex-parte order or arrest warrant. Act immediately.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Fearing Police Action</h3>
                        <p className="text-gray-700">Police cannot arrest you for loan default. Do not let recovery agents intimidate you with false threats of police cases.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We need the following to start your case:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">KYC Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN Card & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Business Registration (for MSMEs)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Loan Details</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Notices received from Bank/Court</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Proof of Income Loss</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Rajasthan?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine legal prowess with local understanding.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏰</div>
                      <h3 className="font-bold text-xl mb-2">Local Insight</h3>
                      <p className="text-gray-600">Deep understanding of Rajasthan's tourism and textile sectors.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Practice</h3>
                      <p className="text-gray-600">Experienced in handling matters at both Jaipur Bench and Jodhpur Seat.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Sahukar Protection</h3>
                      <p className="text-gray-600">We legally challenge unlicensed money lenders under the Rajasthan Money Lenders Act.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Rajasthan</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My heritage hotel in Udaipur was facing severe losses post-COVID. AMA Legal Solutions helped me restructure my debt and settle the overdue amount, saving my ancestral property."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajendra Singh</p>
                          <p className="text-sm text-gray-500">Udaipur</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I had a business loan dispute for my textile unit in Bhilwara. The team handled the bank negotiations perfectly and stopped the legal notices."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh Agarwal</p>
                          <p className="text-sm text-gray-500">Bhilwara</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Business & Dignity</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let debt dim the spirit of Rajasthan. Our expert lawyers are here to fight for you.
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
                    Speak to our senior loan settlement lawyers in Rajasthan today.
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

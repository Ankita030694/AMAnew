import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Tripura | Debt Relief Lawyers Agartala, Udaipur, Dharmanagar",
  description:
    "Struggling with debt in Tripura? AMA Legal Solutions offers expert loan settlement for Rubber Planters, Bamboo Artisans & Traders. Stop harassment & settle loans legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Tripura',
  },
  openGraph: {
    title: "Loan Settlement in Tripura | Debt Relief Lawyers Agartala, Udaipur, Dharmanagar",
    description: "Struggling with debt in Tripura? AMA Legal Solutions offers expert loan settlement for Rubber Planters, Bamboo Artisans & Traders. Stop harassment & settle loans legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Tripura",
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
      "item": "https://amalegalsolutions.com/services/loan-settlement/Tripura"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Tripura: Securing the Future of the Seven Sisters",
  "description": "Comprehensive guide to loan settlement in Tripura. Learn about relief for rubber planters, bamboo artisans, and legal protections under the Tripura Money Lenders Act.",
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
      "url": "https://amalegalsolutions.com/logo.png"
    }
  },
  "datePublished": "2023-11-21",
  "dateModified": "2023-11-21"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Tripura",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Tripura.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "130"
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
        "name": "Biplab D."
      },
      "reviewBody": "The price of rubber crashed, and I couldn't pay my KCC loan. AMA Legal helped me settle with the bank for a much lower amount. Very grateful."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sushmita R."
      },
      "reviewBody": "I was harassed by agents for a personal loan. The lawyers stopped the calls immediately and closed my loan through Lok Adalat."
    }
  ]
};

export default function TripuraLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Tripura" },
    { id: "process", title: "Our Process" },
    { id: "rubber-planters", title: "For Rubber Planters" },
    { id: "bamboo-industry", title: "For Bamboo Industry" },
    { id: "tribal-rights", title: "Tribal Land Protection" },
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
    { label: "Tripura", href: "/services/loan-settlement/Tripura" },
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
              Securing the Future of the Seven Sisters: <span className="text-[#D2A02A]">Loan Settlement in Tripura</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for Rubber Planters, Bamboo Artisans, and Traders. We stop harassment and negotiate fair settlements in Agartala, Udaipur, and across Tripura.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Freedom for Tripura</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Tripura is the rubber capital of the North East and a hub for bamboo craftsmanship. However, market volatility and supply chain issues often push hardworking people into debt.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are a rubber grower in South Tripura facing low yields or a trader in Agartala dealing with business losses, unmanageable debt is a heavy burden.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions provides a lifeline. We specialize in negotiating with banks to settle loans legally, protecting your dignity and your assets.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan settlement is a legal process where you pay a one-time, reduced amount to close your loan account. It is the best option when you cannot afford the full EMI burden due to financial hardship."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This process allows you to become debt-free without declaring bankruptcy.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>KCC & Agricultural Loans (Rubber/Tea)</li>
                    <li>MSME Loans (Bamboo/Cane industry)</li>
                    <li>Personal Loans & Credit Cards</li>
                    <li>Microfinance Group Loans</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections in Tripura</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We use state and central laws to defend your rights.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tripura Money Lenders Act, 2009</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act is crucial for protecting borrowers from illegal money lenders. It mandates licensing and caps interest rates. If you are dealing with an unlicensed lender or facing harassment, this Act provides strong legal recourse.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">RBI Guidelines on Recovery</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Reserve Bank of India has strict rules against harassment. Recovery agents cannot call at odd hours, use abusive language, or threaten you. We ensure these guidelines are strictly followed.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Tripura SLSA</h4>
                      <p className="text-gray-600">The State Legal Services Authority is very active in organizing Lok Adalats for bank loan settlements.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Tribal Protections</h4>
                      <p className="text-gray-600">Special provisions exist to protect land in Tribal Areas Autonomous District Council (TTAADC) regions.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We handle everything from start to finish.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your loan details, income loss proof (e.g., rubber price impact), and legal standing.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Stop Harassment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We send a legal notice to the bank and agents, directing all future communication to us. This stops the calls and visits.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We negotiate hard with the bank for a maximum waiver on interest and penalties, aiming for an affordable OTS amount.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          You pay the agreed amount, and we ensure you receive the No Dues Certificate from the bank.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Rubber Planters */}
                <section id="rubber-planters" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Rubber Planters</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rubber is the backbone of Tripura's economy, but price crashes can be devastating.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                    <p className="text-lg text-green-900">
                      <strong>High Indebtedness:</strong> Studies show over 60% of rubber farming households in Tripura carry debt. We help you restructure or settle these agricultural loans, arguing that market forces beyond your control caused the default.
                    </p>
                  </div>
                </section>

                {/* Bamboo Industry */}
                <section id="bamboo-industry" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Bamboo & Cane Industry</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Artisans and small businesses in the bamboo sector often face supply chain bottlenecks and delayed payments.
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100 mb-6">
                    <h3 className="text-xl font-bold text-yellow-900 mb-4">Our Support</h3>
                    <ul className="list-disc pl-6 space-y-3 text-yellow-800">
                      <li><strong>Mudra Loan Settlement:</strong> Relief for small business loans.</li>
                      <li><strong>Working Capital Relief:</strong> Settling cash credit accounts that have turned NPA.</li>
                      <li><strong>Legal Defense:</strong> Protecting your workshop and tools from seizure.</li>
                    </ul>
                  </div>
                </section>

                {/* Tribal Rights */}
                <section id="tribal-rights" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tribal Land Protection</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you belong to a Scheduled Tribe and live in a TTAADC area, your land has special protection.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>SARFAESI Limitations:</strong> While banks can technically proceed under SARFAESI, selling tribal land to non-tribals is legally restricted. We use this complexity to force banks to accept a settlement instead of pursuing a futile auction process.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: A Quick Solution</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Tripura SLSA organizes National Lok Adalats regularly, settling over 5,000 bank cases annually.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Benefits:</strong>
                    <br />
                    - No court fees.
                    <br />
                    - Immediate, binding decree.
                    <br />
                    - Amicable atmosphere.
                    <br />
                    We represent you in Lok Adalat to ensure the bank gives you the best possible deal.
                  </p>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We cover a wide spectrum of debt.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Rubber & Tea Loans</h3>
                      <p className="text-gray-700">
                        KCC and term loans for plantation development.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Microfinance Loans</h3>
                      <p className="text-gray-700">
                        Group loans (JLG/SHG) from MFIs and small banks.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Business Loans</h3>
                      <p className="text-gray-700">
                        For traders, shopkeepers, and small manufacturers.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Debt</h3>
                      <p className="text-gray-700">
                        Credit cards and unsecured personal loans.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settlement is a strategic step to regain financial health.
                  </p>
                  <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-6">
                    <p className="text-lg text-gray-700">
                      While your score will dip, clearing the NPA status is more important. Once the loan is settled, you can start rebuilding your score with secured credit cards and timely payments.
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
                        <h3 className="font-bold text-lg text-gray-900">Borrowing to Pay Debt</h3>
                        <p className="text-gray-700">Taking new loans from money lenders to pay bank EMIs is a debt trap. Avoid it.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Notices</h3>
                        <p className="text-gray-700">Ignoring legal notices can lead to court orders against you. Respond immediately through a lawyer.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Trusting Agents</h3>
                        <p className="text-gray-700">Recovery agents are paid to collect, not to help you. Do not trust their verbal promises.</p>
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
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Identity & Status</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN Card & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> ST Certificate (if applicable)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Loan Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Legal Notices Received</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Proof of Income Loss</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are your trusted partners in debt relief.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                      <p className="text-gray-600">Deep knowledge of Tripura's laws and the TTAADC regulations.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Harassment Protection</h3>
                      <p className="text-gray-600">We stand between you and the recovery agents.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Proven Results</h3>
                      <p className="text-gray-600">Hundreds of successful settlements for clients across the North East.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Tripura</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "The price of rubber crashed, and I couldn't pay my KCC loan. AMA Legal helped me settle with the bank for a much lower amount. Very grateful."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">B</div>
                        <div>
                          <p className="font-bold text-gray-900">Biplab D.</p>
                          <p className="text-sm text-gray-500">Udaipur</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was harassed by agents for a personal loan. The lawyers stopped the calls immediately and closed my loan through Lok Adalat."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sushmita R.</p>
                          <p className="text-sm text-gray-500">Agartala</p>
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
                      Don't let debt control your life. Our expert lawyers in Tripura are ready to fight for you.
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
                    Speak to our senior loan settlement lawyers in Tripura today.
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
                    <li>
                      <Link href="/services/cheque-bounce-lawyer" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cheque Bounce Cases
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

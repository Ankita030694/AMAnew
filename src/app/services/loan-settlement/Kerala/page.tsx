import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Kerala | Debt Relief Lawyers Kochi, Trivandrum, Calicut",
  description:
    "Struggling with debt in Kerala? AMA Legal Solutions offers expert loan settlement for Gulf returnees, rubber farmers, and individuals. Stop 'Blade Mafia' harassment & settle legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Kerala',
  },
  openGraph: {
    title: "Loan Settlement in Kerala | Debt Relief Lawyers Kochi, Trivandrum, Calicut",
    description: "Struggling with debt in Kerala? AMA Legal Solutions offers expert loan settlement for Gulf returnees, rubber farmers, and individuals. Stop 'Blade Mafia' harassment & settle legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Kerala",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Kerala",
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
      "name": "Kerala",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Kerala"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Kerala: God's Own Country, Free from Debt",
  "description": "Comprehensive guide to loan settlement in Kerala. Learn how to legally settle NRI loans, protect against 'Blade Mafia', and resolve gold loan issues.",
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
  "name": "Loan Settlement Services Kerala",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Kerala.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "650"
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
        "name": "Abdul Majeed"
      },
      "reviewBody": "I returned from Dubai after losing my job and had a huge personal loan. AMA Legal Solutions helped me negotiate with the bank in Malappuram and settle it for a manageable amount."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Thomas Mathew"
      },
      "reviewBody": "My rubber plantation in Kottayam was in loss, and I couldn't pay my agricultural loan. The lawyers helped me get a waiver on interest through the Lok Adalat."
    }
  ]
};

export default function KeralaLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Kerala" },
    { id: "process", title: "Our Process" },
    { id: "nri-settlement", title: "NRI & Gulf Returnees" },
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
    { label: "Kerala", href: "/services/loan-settlement/Kerala" },
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
              God's Own Country, Free from Debt: <span className="text-[#D2A02A]">Loan Settlement in Kerala</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for Gulf Returnees, Planters, and Families. Stop 'Blade Mafia' harassment and settle bank debts with dignity.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Financial Challenges in Kerala</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Kerala is known for its high literacy and global connections. However, the economy is sensitive to global shifts. <strong>Gulf returnees</strong> often face financial stress due to sudden job losses, while <strong>rubber and spice farmers</strong> grapple with volatile market prices.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The menace of the illegal "Blade Mafia" (private money lenders charging exorbitant interest) is another significant challenge.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions provides specialized legal support to the people of Kerala. Whether you are in Kochi, Trivandrum, Calicut, or Malappuram, we help you navigate the legal system to settle your debts and protect your assets.
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
                    For an NRI who has returned to Kerala, this could mean settling a personal loan of ₹20 Lakhs for ₹10-12 Lakhs based on their current reduced income. It allows you to clear your name and start afresh.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>NRI Personal Loans & Credit Cards</li>
                    <li>Gold Loan Auctions & Disputes</li>
                    <li>Agricultural Loans (Rubber, Spices)</li>
                    <li>MSME & Business Loans</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections in Kerala</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Kerala has strong laws to protect borrowers from exploitation.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Kerala Money Lenders Act, 1958</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act, strengthened by initiatives like <strong>"Operation Kubera"</strong>, strictly regulates money lending. It mandates licensing and caps interest rates. It is a powerful tool against the "Blade Mafia". If you are being harassed by unlicensed lenders, we can use this Act to seek legal protection and even criminal action against them.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kerala High Court Protection</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Kerala High Court</strong> has taken a firm stance against the use of "musclemen" by banks and private lenders. The court has repeatedly ruled that recovery must be done through the due process of law, and police protection can be sought against illegal harassment.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">KELSA Lok Adalats</h4>
                      <p className="text-gray-600">The Kerala State Legal Services Authority conducts regular Lok Adalats, which are highly effective for settling bank disputes quickly and cost-effectively.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">RBI Guidelines</h4>
                      <p className="text-gray-600">We ensure strict adherence to RBI guidelines regarding gold loan auctions and fair recovery practices.</p>
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
                          We send a legal notice to the bank/lender. This stops them from calling you directly and compels them to communicate only through your legal counsel.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your financial situation. For Gulf returnees, we look at your current income sources in Kerala to determine a realistic settlement offer.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team negotiates with bank officials in Kochi, Trivandrum, or regional offices to reduce the outstanding amount, aiming for a waiver of interest and penalties.
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

                {/* NRI Settlement */}
                <section id="nri-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">NRI & Gulf Returnees</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Kerala economy is deeply tied to the Gulf. We understand the unique challenges faced by NRIs who return home due to job market fluctuations.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <p className="text-lg text-blue-900">
                      <strong>Specialized Support:</strong> We help you prove your changed financial circumstances to the bank. Whether it's a personal loan taken while you were employed abroad or a home loan for a property in Kerala, we can restructure or settle it based on your current reality.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Don't let debt prevent you from rebuilding your life in Kerala. Legal settlement is a viable path to stability.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: Fast & Final Resolution</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The KELSA actively promotes Lok Adalats for bank recovery cases.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Why Choose Lok Adalat?</h3>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Speed:</strong> Cases are often settled in a single sitting.</li>
                      <li><strong>Finality:</strong> The award is binding and cannot be appealed.</li>
                      <li><strong>Cost-Effective:</strong> No court fees, and often significant waivers on interest.</li>
                    </ul>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise covers the spectrum of debt issues in Kerala.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">NRI Personal Loans</h3>
                      <p className="text-gray-700">
                        Settlement for Gulf returnees facing financial distress due to job loss.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Gold Loans</h3>
                      <p className="text-gray-700">
                        Resolving disputes related to gold auctions and high interest rates.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Agricultural Loans</h3>
                      <p className="text-gray-700">
                        Helping rubber and spice farmers in Idukki/Kottayam settle loans after price crashes.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Vehicle Loans</h3>
                      <p className="text-gray-700">
                        Protecting your vehicle from illegal seizure by recovery agents.
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
                        <h3 className="font-bold text-lg text-gray-900">Borrowing from "Blade Mafia"</h3>
                        <p className="text-gray-700">Taking high-interest loans from illegal lenders is dangerous. The law protects you, but avoiding them is best.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Court Notices</h3>
                        <p className="text-gray-700">If you receive a notice from a court in Kerala, act immediately. Ignoring it can lead to an arrest warrant.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Surrendering Assets</h3>
                        <p className="text-gray-700">Do not hand over your vehicle or property to agents without a court order. The Kerala High Court protects you from this.</p>
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
                          <li className="flex items-center"><span className="mr-2">✓</span> Passport (for NRIs)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Loan Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Any Legal Notices Received</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Gold Loan Pledge Card (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Kerala?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are committed to protecting the rights of borrowers in Kerala.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Expertise</h3>
                      <p className="text-gray-600">Deep knowledge of the Kerala Money Lenders Act and High Court rulings.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">✈️</div>
                      <h3 className="font-bold text-xl mb-2">NRI Focused</h3>
                      <p className="text-gray-600">Specialized support for Gulf returnees and their unique financial challenges.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600">We take strong legal action against "Blade Mafia" and aggressive recovery agents.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Kerala</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I returned from Dubai after losing my job and had a huge personal loan. AMA Legal Solutions helped me negotiate with the bank in Malappuram and settle it for a manageable amount."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Abdul Majeed</p>
                          <p className="text-sm text-gray-500">Malappuram</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My rubber plantation in Kottayam was in loss, and I couldn't pay my agricultural loan. The lawyers helped me get a waiver on interest through the Lok Adalat."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">T</div>
                        <div>
                          <p className="font-bold text-gray-900">Thomas Mathew</p>
                          <p className="text-sm text-gray-500">Kottayam</p>
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
                      Don't face the banks alone. Our expert lawyers in Kerala are here to protect you.
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
                    Speak to our senior loan settlement lawyers in Kerala today.
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

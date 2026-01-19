import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Goa | Debt Relief Lawyers Panaji, Margao, Vasco",
  description:
    "Struggling with debt in Goa? AMA Legal Solutions offers expert loan settlement for Tourism & Mining businesses. Navigate Portuguese Civil Code & settle legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Goa',
  },
  openGraph: {
    title: "Loan Settlement in Goa | Debt Relief Lawyers Panaji, Margao, Vasco",
    description: "Struggling with debt in Goa? AMA Legal Solutions offers expert loan settlement for Tourism & Mining businesses. Navigate Portuguese Civil Code & settle legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Goa",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Goa",
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
      "name": "Goa",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Goa"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Goa: Protecting the Susegad Spirit",
  "description": "Comprehensive guide to loan settlement in Goa. Learn how to legally settle loans under Portuguese Civil Code, protect mining/tourism assets, and resolve debt issues.",
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
  "name": "Loan Settlement Services Goa",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Goa.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "380"
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
        "name": "Anthony D."
      },
      "reviewBody": "I had a loan for my tourist taxi fleet. Due to the drop in foreign tourists, I couldn't pay. AMA Legal Solutions helped me restructure the loan and saved my vehicles from seizure."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh G."
      },
      "reviewBody": "The mining ban destroyed my transport business. I was worried about my house because of the Portuguese law. They explained my rights and helped me settle with the bank for a reasonable amount."
    }
  ]
};

export default function GoaLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Goa" },
    { id: "process", title: "Our Process" },
    { id: "tourism-sector", title: "For Tourism Businesses" },
    { id: "mining-sector", title: "For Mining Affected" },
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
    { label: "Goa", href: "/services/loan-settlement/Goa" },
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
              Protecting the Susegad Spirit: <span className="text-[#D2A02A]">Loan Settlement in Goa</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for Tourism & Mining businesses. Navigate the Portuguese Civil Code and settle bank debts with dignity in Panaji, Margao, and Vasco.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Challenges in Paradise</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Goa is known for its relaxed 'Susegad' lifestyle, but the financial reality for many locals is stressful. The <strong>tourism industry</strong> faces seasonal lows and global fluctuations, while the <strong>mining ban</strong> has left many families with heavy debts on trucks and machinery.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Adding to the complexity is the unique <strong>Portuguese Civil Code</strong>, which governs property and marriage in Goa, often making spouses jointly liable for debts.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions provides specialized legal support to the people of Goa. Whether you are in Panaji, Margao, Vasco, or Mapusa, we help you navigate these unique laws to settle your debts and protect your family's assets.
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
                    For a hotel owner, this could mean settling a ₹50 Lakh loan for ₹25-30 Lakhs, allowing you to keep your business running.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Tourism & Hotel Loans</li>
                    <li>Mining Truck & Barge Loans</li>
                    <li>Personal Loans & Credit Cards</li>
                    <li>Housing Loans</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections in Goa</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Goa's legal landscape is unique in India. Understanding your rights is crucial.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Portuguese Civil Code (1867)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Under the regime of <strong>Communion of Assets</strong>, assets and liabilities are shared between spouses. This means a bank might try to attach your spouse's property for your debt. We provide expert legal strategies to protect your family's assets under this specific code.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Goa Money Lenders Act, 2013</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act strictly regulates private money lending. It mandates licensing and caps interest rates. If you are dealing with unlicensed lenders, this law offers strong protection.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">GSLSA Lok Adalats</h4>
                      <p className="text-gray-600">The Goa State Legal Services Authority conducts Lok Adalats, which are effective for settling bank disputes amicably and quickly.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Bombay High Court (Goa Bench)</h4>
                      <p className="text-gray-600">The High Court ensures fair recovery practices. We can seek judicial intervention if banks harass you or violate due process.</p>
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Notice & Shielding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We send a legal notice to the bank. This stops them from calling you directly and compels them to communicate only through us.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your income sources (seasonal vs regular). We assess your liabilities under the Portuguese Civil Code to propose a realistic settlement plan.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team negotiates with bank officials to reduce the outstanding amount, aiming for a waiver of interest and penalties.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We review the settlement letter. Once you pay the agreed amount, we ensure you receive a No Dues Certificate.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Tourism Sector */}
                <section id="tourism-sector" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Tourism Businesses</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The tourism industry is the backbone of Goa, but it is volatile.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <p className="text-lg text-blue-900">
                      <strong>Seasonal Cash Flow:</strong> We help structure settlements that account for the off-season. If you are facing a downturn due to fewer foreign arrivals, we use this as a ground for negotiation.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Whether you own a shack, a guest house, or a taxi fleet, we can help you settle your business loans and prevent asset seizure.
                  </p>
                </section>

                {/* Mining Sector */}
                <section id="mining-sector" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Mining Affected Families</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The mining ban has been devastating. We understand that your default is not willful but due to government policy changes.
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100 mb-6">
                    <h3 className="text-xl font-bold text-yellow-900 mb-4">Debt Relief</h3>
                    <ul className="list-disc pl-6 space-y-3 text-yellow-800">
                      <li><strong>Truck & Barge Loans:</strong> We negotiate aggressive settlements for machinery that has been lying idle.</li>
                      <li><strong>Interest Waiver:</strong> We fight for a complete waiver of penal interest accumulated during the ban period.</li>
                      <li><strong>Asset Protection:</strong> We take legal steps to prevent the bank from auctioning your home or land.</li>
                    </ul>
                  </div>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: A Path to Peace</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The GSLSA actively promotes Lok Adalats for bank recovery cases.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Why it works:</strong> It is a non-adversarial forum where you can sit across the table with bank officials and a mediator to reach a compromise. The settlement is final, and you save on legal costs. We can represent you in Lok Adalats across Goa.
                  </p>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise covers various types of loans common in Goa.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Tourism Loans</h3>
                      <p className="text-gray-700">
                        Settlement for hotels, restaurants, and taxi operators.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Mining Loans</h3>
                      <p className="text-gray-700">
                        Relief for truck and barge owners affected by the ban.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        Helping individuals settle high-interest personal loans and credit cards.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Housing Loans</h3>
                      <p className="text-gray-700">
                        Protecting your family home under the Portuguese Civil Code.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settlement will be reported to CIBIL, but it is a necessary step to regain financial control.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>The Trade-off:</strong> A temporary dip in your credit score is better than facing legal action or losing your assets. Once settled, you can rebuild your score over time.
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
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Bank Notices</h3>
                        <p className="text-gray-700">Silence can lead to legal escalation. Always respond, preferably through a lawyer.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Borrowing from Unlicensed Lenders</h3>
                        <p className="text-gray-700">Avoid illegal money lenders. If you are already trapped, use the Goa Money Lenders Act for protection.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Panicking</h3>
                        <p className="text-gray-700">Debt is a civil matter. You cannot be arrested for genuine inability to pay (except in specific cheque bounce cases). Stay calm and seek legal help.</p>
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
                          <li className="flex items-center"><span className="mr-2">✓</span> Marriage Certificate (critical in Goa)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Loan Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Legal Notices</li>
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
                    We are committed to protecting the people of Goa.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Portuguese Law Experts</h3>
                      <p className="text-gray-600">Deep understanding of the Communion of Assets regime and spousal liability.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏖️</div>
                      <h3 className="font-bold text-xl mb-2">Tourism Focus</h3>
                      <p className="text-gray-600">Specialized strategies for seasonal businesses and hotels.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600">We take strong legal action against harassment by recovery agents.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Goa</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I had a loan for my tourist taxi fleet. Due to the drop in foreign tourists, I couldn't pay. AMA Legal Solutions helped me restructure the loan and saved my vehicles from seizure."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anthony D.</p>
                          <p className="text-sm text-gray-500">Calangute</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "The mining ban destroyed my transport business. I was worried about my house because of the Portuguese law. They explained my rights and helped me settle with the bank for a reasonable amount."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh G.</p>
                          <p className="text-sm text-gray-500">Vasco</p>
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
                      Don't face the banks alone. Our expert lawyers in Goa are here to protect you.
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
                    Speak to our senior loan settlement lawyers in Goa today.
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

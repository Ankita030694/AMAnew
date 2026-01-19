import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Sikkim | Debt Relief Lawyers Gangtok, Namchi, Geyzing",
  description:
    "Struggling with debt in Sikkim? AMA Legal Solutions offers expert loan settlement. We understand Article 371F protections and help Organic Farmers & Hotel Owners.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Sikkim',
  },
  openGraph: {
    title: "Loan Settlement in Sikkim | Debt Relief Lawyers Gangtok, Namchi, Geyzing",
    description: "Struggling with debt in Sikkim? AMA Legal Solutions offers expert loan settlement. We understand Article 371F protections and help Organic Farmers & Hotel Owners.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Sikkim",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Sikkim",
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
      "name": "Sikkim",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Sikkim"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Sikkim: Protecting Prosperity in the Himalayas",
  "description": "Comprehensive guide to loan settlement in Sikkim. Learn about Article 371F protections, relief for organic farmers, and legal support for tourism businesses.",
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
  "name": "Loan Settlement Services Sikkim",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Sikkim.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
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
        "name": "Karma D."
      },
      "reviewBody": "I was worried about losing my ancestral land to the bank. AMA Legal Solutions explained how Article 371F protects me and negotiated a settlement that I could manage."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pema L."
      },
      "reviewBody": "My organic ginger farm faced a bad season. The loan burden was heavy. The lawyers at AMA helped me get a restructuring deal, giving me time to recover."
    }
  ]
};

export default function SikkimLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Sikkim" },
    { id: "process", title: "Our Process" },
    { id: "organic-farming", title: "For Organic Farmers" },
    { id: "tourism-sector", title: "For Tourism Sector" },
    { id: "land-protection", title: "Land Protection (371F)" },
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
    { label: "Sikkim", href: "/services/loan-settlement/Sikkim" },
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
              Protecting Prosperity in the Himalayas: <span className="text-[#D2A02A]">Loan Settlement in Sikkim</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for Organic Farmers, Hotel Owners, and Local Businesses. We leverage Article 371F to protect your land and settle debts in Gangtok, Namchi, and beyond.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Peace for Sikkim</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Sikkim is a model of sustainable living, but even here, financial challenges arise. <strong>Organic farmers</strong> facing market fluctuations and <strong>tourism businesses</strong> hit by seasonal lows often find themselves in debt.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are a cardamom grower in West Sikkim or a hotelier in Gangtok, unmanageable debt can threaten your livelihood.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions understands the unique legal landscape of Sikkim. We help you settle loans while ensuring your rights under <strong>Article 371F</strong> are fully protected.
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
                    This allows you to clear your debt for less than the total outstanding amount, often with significant waivers on interest and penalties.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Agricultural Loans (Organic Farming)</li>
                    <li>Hotel & Tourism Loans</li>
                    <li>Personal & Business Loans</li>
                    <li>Credit Card Debt</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections in Sikkim</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Sikkim has special constitutional and local laws that provide unique protections to its citizens.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Article 371F & Land Protection</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Under Article 371F of the Constitution of India, the old laws of Sikkim continue to be in force. This includes strict restrictions on the transfer of land to non-Sikkimese. This makes it legally complicated for banks to auction land to outsiders, giving us a strong leverage point in negotiations.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sikkim Rural Indebtedness Act, 1966</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act was enacted to regulate money lending and curb exploitative practices like 'Dadani' (pledging crops) and 'Biyaz' (usurious interest). It protects rural debtors from unfair recovery.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Sikkim SLSA</h4>
                      <p className="text-gray-600">The State Legal Services Authority actively conducts Lok Adalats for amicable settlement of banking disputes.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">High Court Rulings</h4>
                      <p className="text-gray-600">We stay updated with Sikkim High Court judgments regarding SARFAESI Act applicability and land rights.</p>
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation & Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We review your loan documents and your status (Sikkim Subject/COI holder) to understand your legal standing.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We issue a legal notice to the bank, handling all communication and stopping harassment from recovery agents.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We negotiate with the bank for a maximum waiver, using your land protection rights as a key bargaining chip.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement & Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once a fair amount is agreed upon, we ensure you get a formal settlement letter and, upon payment, a No Dues Certificate.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Organic Farming */}
                <section id="organic-farming" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Organic Farmers</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Sikkim's organic farmers are the pride of the nation, but transition costs and market access issues can lead to debt.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                    <p className="text-lg text-green-900">
                      <strong>Support for Growers:</strong> Whether you grow large cardamom, ginger, or turmeric, we help you settle agricultural loans. We highlight the unique challenges of organic farming to negotiate compassionate terms with lenders.
                    </p>
                  </div>
                </section>

                {/* Tourism Sector */}
                <section id="tourism-sector" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Tourism Sector</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The tourism industry is the backbone of Sikkim's economy. However, infrastructure gaps and off-seasons can strain cash flow.
                  </p>
                  <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">How We Assist</h3>
                    <ul className="list-disc pl-6 space-y-3 text-blue-800">
                      <li><strong>Loan Restructuring:</strong> Adjusting EMI schedules to match seasonal income.</li>
                      <li><strong>Debt Settlement:</strong> Closing high-interest business loans with a one-time payment.</li>
                      <li><strong>Asset Protection:</strong> Preventing the seizure of hotel properties or vehicles.</li>
                    </ul>
                  </div>
                </section>

                {/* Land Protection */}
                <section id="land-protection" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Land Protection under Article 371F</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is your strongest shield.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>The Advantage:</strong> Since non-Sikkimese cannot buy land in Sikkim, banks have a limited pool of buyers for auctioned property. This often forces them to come to the negotiating table and accept a settlement rather than getting stuck with an illiquid asset. We know exactly how to use this legal reality to your benefit.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: Fast Resolution</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Sikkim SLSA organizes Lok Adalats regularly.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Why participate?</strong> It is a cost-effective and quick way to resolve disputes. The decision is final, and you avoid the hassle of regular courts. We can represent you in Lok Adalats to ensure you get a fair deal.
                  </p>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We handle a wide range of loan types in Sikkim.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Agricultural Loans</h3>
                      <p className="text-gray-700">
                        For cardamom, ginger, and organic crop farmers.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Tourism Loans</h3>
                      <p className="text-gray-700">
                        For hotels, homestays, and travel agencies.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Vehicle Loans</h3>
                      <p className="text-gray-700">
                        For taxis and commercial vehicles.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        For government employees and private individuals.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settlement will be reported to CIBIL, but it is a strategic move.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Recovery:</strong> While your score dips temporarily, clearing the debt allows you to start fresh. We also guide you on how to rebuild your credit score post-settlement.
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
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Legal Notices</h3>
                        <p className="text-gray-700">Never ignore a notice from the bank or court. It can lead to an ex-parte order against you.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Relying on Verbal Assurances</h3>
                        <p className="text-gray-700">Always get settlement offers in writing. Verbal promises from recovery agents have no legal value.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Panicking</h3>
                        <p className="text-gray-700">Stay calm. You have rights. Contact a lawyer immediately to understand your options.</p>
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
                          <li className="flex items-center"><span className="mr-2">✓</span> Sikkim Subject Certificate / COI</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Loan Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Legal Notices Received</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Proof of Financial Hardship</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine legal expertise with local understanding.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">371F Experts</h3>
                      <p className="text-gray-600">We know how to leverage Sikkim's special laws to protect your assets.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌱</div>
                      <h3 className="font-bold text-xl mb-2">Farmer Focused</h3>
                      <p className="text-gray-600">Dedicated support for organic farmers facing debt issues.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Lok Adalat</h3>
                      <p className="text-gray-600">Proven track record of successful settlements in Sikkim's Lok Adalats.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Sikkim</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was worried about losing my ancestral land to the bank. AMA Legal Solutions explained how Article 371F protects me and negotiated a settlement that I could manage."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">K</div>
                        <div>
                          <p className="font-bold text-gray-900">Karma D.</p>
                          <p className="text-sm text-gray-500">Gangtok</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My organic ginger farm faced a bad season. The loan burden was heavy. The lawyers at AMA helped me get a restructuring deal, giving me time to recover."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Pema L.</p>
                          <p className="text-sm text-gray-500">Geyzing</p>
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
                      Don't face the banks alone. Our expert lawyers in Sikkim are here to protect you.
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
                    Speak to our senior loan settlement lawyers in Sikkim today.
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

import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Delhi | Expert Debt Relief Lawyers",
  description:
    "Struggling with debt in Delhi NCR? AMA Legal Solutions offers expert loan settlement services. Stop harassment & settle legally through Lok Adalat & DRT Delhi.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Delhi',
  },
  openGraph: {
    title: "Loan Settlement in Delhi | Expert Debt Relief Lawyers",
    description: "Struggling with debt in Delhi NCR? AMA Legal Solutions offers expert loan settlement services. Stop harassment & settle legally through Lok Adalat & DRT Delhi.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Delhi",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Delhi",
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
      "name": "Delhi",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Delhi"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Delhi: Legal Debt Relief",
  "description": "Comprehensive guide to loan settlement in Delhi. Learn how to legally settle personal loans and credit card debt in Delhi NCR using Lok Adalat and DRT.",
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
  "name": "Loan Settlement Services Delhi",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Delhi NCR.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "920"
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
        "name": "Rajesh Kumar"
      },
      "reviewBody": "I was trapped in credit card debt in Karol Bagh. AMA Legal Solutions helped me settle 3 cards through the Patiala House Lok Adalat. Very professional team."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Singh"
      },
      "reviewBody": "Excellent service for loan settlement in Delhi. They stopped the recovery agents from harassing me at my office in Gurgaon."
    }
  ]
};

export default function DelhiLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Delhi" },
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
    { label: "Delhi", href: "/services/loan-settlement/Delhi" },
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
              Legal Debt Relief & <span className="text-[#D2A02A]">Loan Settlement in Delhi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation in Delhi NCR to negotiate with banks, reduce your debt burden, and stop harassment. Practice at DRT Delhi & Lok Adalats.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Relief for Delhi's Traders & Professionals</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Living and working in the National Capital Region (NCR) comes with high aspirations and higher expenses. From the wholesale traders in <strong>Sadar Bazar and Chandni Chowk</strong> facing post-pandemic liquidity crunches to the IT professionals in <strong>Noida and Gurgaon</strong> dealing with credit card debt traps, financial stress is a common reality in Delhi.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When banks initiate recovery proceedings, they often file cases in Delhi's district courts like <strong>Tis Hazari, Patiala House, or Saket</strong>. Ignoring these legal notices can lead to severe consequences. <strong>Loan settlement</strong> offers a legal, dignified exit route. At AMA Legal Solutions, based in New Delhi, we specialize in navigating the specific procedural nuances of the <strong>Delhi State Legal Services Authority (DSLSA)</strong> and the local Debt Recovery Tribunals to secure favorable settlements for our clients.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We don't just negotiate; we provide a legal shield against harassment, leveraging the strict guidelines enforced by the Delhi Police against aggressive recovery agents.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How Loan Settlement Works in Delhi NCR</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "In the fast-paced legal environment of Delhi, banks prefer a 'One Time Settlement' (OTS) over years of litigation in overcrowded courts like Karkardooma or Rohini."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement is essentially a pre-litigation negotiation. Banks in Delhi, especially those with headquarters in Connaught Place or corporate offices in Cyber City, have specific 'Settlement Committees'. When a loan becomes a Non-Performing Asset (NPA), these committees are empowered to write off a portion of the debt to close the file.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We approach these committees directly. For instance, if you have a personal loan of ₹10 Lakhs that you cannot repay due to job loss, we present your 'Hardship Application' to the bank's Zonal Office in Delhi. We aim to waive off the entire interest component and settle the principal amount for a lump sum, often saving you 40-60% of the total outstanding.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Delhi's Legal Framework for Borrowers</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The legal landscape in Delhi offers unique protections and avenues for borrowers, distinct from other states.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Delhi Mediation Centre & DSLSA</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Delhi High Court Mediation and Conciliation Centre</strong> and the <strong>Delhi State Legal Services Authority (DSLSA)</strong> are extremely proactive. We often utilize the "Pre-Litigation Mediation" mechanism where we invite the bank to the mediation table before any court case is filed. Settlements reached here are given the status of a court decree, ensuring the bank cannot back out later.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The 3 DRTs of Delhi</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Unlike many states with just one DRT, Delhi has three, located at the <strong>Jeevan Tara Building, Parliament Street</strong>.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li><strong>DRT-1:</strong> Covers South & East Delhi (e.g., Lajpat Nagar, Preet Vihar).</li>
                    <li><strong>DRT-2:</strong> Covers North & West Delhi (e.g., Rohini, Janakpuri).</li>
                    <li><strong>DRT-3:</strong> Exclusive jurisdiction for high-value cases (₹100 Cr+), often involving large corporate debts.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Knowing exactly which DRT has jurisdiction is crucial for filing stay orders against property auctions under the SARFAESI Act.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Delhi Police & Economic Offences Wing (EOW)</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Crime Branch Action</h4>
                      <p className="text-gray-600">The Delhi Police Crime Branch actively investigates cases of illegal recovery harassment, especially by unregistered call centers in NCR.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">112 Emergency Help</h4>
                      <p className="text-gray-600">Delhi residents can dial 112 if recovery agents try to forcefully enter their homes. We guide clients on how to lodge a formal NCR (Non-Cognizable Report).</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Cyber Cell Reporting</h4>
                      <p className="text-gray-600">For harassment by loan apps, we file bulk complaints with the Delhi Police Cyber Cell, often leading to the freezing of the app's accounts.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Cheque Bounce (NI Act)</h4>
                      <p className="text-gray-600">Delhi courts are strict on Section 138 cases. We represent you in the specific Metropolitan Magistrate court designated for your police station area.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategic Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We employ a "Delhi-First" strategy, utilizing local legal machinery to expedite your settlement.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Jurisdictional Mapping</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We first determine if your case falls under the jurisdiction of a specific Delhi District Court (e.g., Dwarka for South-West Delhi) or a DRT. This prevents the bank from dragging you to courts in other states.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Representation at HO</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Most banks have their Head Offices or Zonal Offices in Delhi NCR. We send legal notices directly to these high-level offices, bypassing the aggressive local recovery agencies.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mediation & Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We push for a settlement meeting at the <strong>Delhi High Court Mediation Centre</strong> or through the DSLSA. This formal setting often compels banks to offer better terms than informal discussions.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Formal Closure via Lok Adalat</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We finalize the deal in a National Lok Adalat held at a Delhi District Court. The judge signs the award, and we ensure the bank issues a "No Dues Certificate" within 15-30 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat Settlement in Delhi</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Delhi State Legal Services Authority (DSLSA)</strong> is a pioneer in using Lok Adalats for banking disputes.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Advantages for Delhi Residents</h3>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Convenience:</strong> Lok Adalats are held in all district court complexes (Tis Hazari, Patiala House, Karkardooma, Rohini, Dwarka, Saket).</li>
                      <li><strong>Speed:</strong> Matters are often resolved in a single sitting.</li>
                      <li><strong>Refund of Fees:</strong> Full refund of court fees if the matter is pending in court.</li>
                      <li><strong>Finality:</strong> The award is final and cannot be appealed in any court.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We assist you in filing a pre-litigation application with the DSLSA to bring the bank to the negotiating table officially.
                  </p>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle in Delhi NCR</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We handle a variety of debt types common in the Delhi NCR economic ecosystem.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Business Loans</h3>
                      <p className="text-gray-700">
                        We assist traders and MSMEs in areas like Chandni Chowk, Karol Bagh, and Okhla in settling unsecured business loans during financial downturns.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Credit Card Debt</h3>
                      <p className="text-gray-700">
                        High credit card usage is common among professionals in Delhi NCR. We help settle accumulated dues from multiple cards, often reducing the burden by 50-60%.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        We handle settlements for personal loans taken from major banks and NBFCs by salaried employees in the government and private sectors.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">App-Based Loans</h3>
                      <p className="text-gray-700">
                        We aggressively handle harassment from instant loan apps, filing complaints with the Delhi Police Cyber Cell if necessary while negotiating closure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Transparency is key. Settlement will mark your account as "Settled" in CIBIL, dipping your score.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>The Reality:</strong> A "Settled" status allows you to close the debt chapter and move on. A "Suit Filed" or "Written Off" status lingers longer and invites legal trouble.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Once settled, we guide you on how to rebuild your score using secured instruments, helping you become credit-worthy again in 1-2 years.
                  </p>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Avoid these common errors that borrowers in Delhi often make.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Court Notices</h3>
                        <p className="text-gray-700">Never ignore a summons from a Delhi court. It can lead to an ex-parte order against you. Legal representation is mandatory.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Paying "Settlement Agents"</h3>
                        <p className="text-gray-700">Many fly-by-night operators in Delhi promise settlements. Only trust qualified lawyers who are accountable to the Bar Council.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Verbal Settlements</h3>
                        <p className="text-gray-700">Never pay based on a phone call. Always insist on a written Settlement Letter on the bank's letterhead.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Prepare these documents to expedite your settlement process in Delhi.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Identity & Loan Info</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN Card & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Number & Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Copies of Legal Notices received</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Hardship Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Salary Slips (showing reduction)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Bank Statements (last 6 months)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Medical Reports (if applicable)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> GST Returns (for business loss)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Delhi?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are your local legal partners in the fight against debt.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Supreme Court & DRT</h3>
                      <p className="text-gray-600">Our office is located near the legal power centers of Delhi, giving us quick access to courts.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">👮</div>
                      <h3 className="font-bold text-xl mb-2">Police Liaison</h3>
                      <p className="text-gray-600">We effectively coordinate with Delhi Police to register complaints against harassment.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Face-to-Face</h3>
                      <p className="text-gray-600">You can meet us at our Delhi office for a personal consultation and strategy session.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Delhi NCR</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was trapped in credit card debt in Karol Bagh. AMA Legal Solutions helped me settle 3 cards through the Patiala House Lok Adalat. Very professional team."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Kumar</p>
                          <p className="text-sm text-gray-500">Karol Bagh, Delhi</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Excellent service for loan settlement in Delhi. They stopped the recovery agents from harassing me at my office in Gurgaon. Highly recommended."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Singh</p>
                          <p className="text-sm text-gray-500">Dwarka, Delhi</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Delhi</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let debt control your life. Our expert lawyers in Delhi are ready to fight for your financial freedom.
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
                    Speak to our senior loan settlement lawyers in Delhi today.
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

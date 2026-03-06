import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Lakshadweep | Expert Debt Relief Lawyers",
  description:
    "Struggling with debt in Lakshadweep? AMA Legal Solutions offers expert loan settlement services in Kavaratti, Minicoy, Agatti & Andrott. Stop harassment & resolve disputes legally.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/lakshadweep',
  },
  openGraph: {
    title: "Loan Settlement in Lakshadweep | Expert Debt Relief Lawyers",
    description: "Struggling with debt in Lakshadweep? AMA Legal Solutions offers expert loan settlement services in Kavaratti, Minicoy, Agatti & Andrott. Stop harassment & resolve disputes legally.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/lakshadweep",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Lakshadweep",
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
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Lakshadweep",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/lakshadweep"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Lakshadweep: Legal Debt Relief for the Islands",
  "description": "Comprehensive guide to loan settlement in the Union Territory of Lakshadweep. Learn how to legally settle fishing, coconut cultivation, and personal loans in Kavaratti and Minicoy.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2023-12-15",
  "dateModified": "2024-01-20"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Lakshadweep",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Kavaratti and Minicoy.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "95"
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
        "name": "Mohammed K."
      },
      "reviewBody": "Our fishing boat loan was in trouble. The legal team helped us deal with the bank in Ernakulam without us having to travel."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Abdul Razzak"
      },
      "reviewBody": "Helped settle my personal loan from Syndicate Bank. Very professional service."
    }
  ]
};

export default function LakshadweepLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "island-economy", title: "Lakshadweep's Island Economy" },
    { id: "legal-context", title: "Legal Context (Kerala View)" },
    { id: "banking-scenario", title: "Banking in the Islands" },
    { id: "sector-focus", title: "Fishing & Coconut Loans" },
    { id: "settlement-process", title: "Our Settlement Process" },
    { id: "logistical-challenges", title: "Overcoming Logistics" },
    { id: "why-ama", title: "Why Choose AMA" },
    { id: "documents", title: "Required Documents" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Lakshadweep", href: "/services/loan-settlement/lakshadweep" },
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
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/cities/lakshadweep-beach.jpg')", backgroundBlendMode: 'overlay', backgroundColor: '#000000' }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Legal Debt Relief & <span className="text-[#D2A02A]">Loan Settlement in Lakshadweep</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200">
              Dedicated legal support for the residents of Kavaratti, Agatti, Minicoy, and Amini. We help you navigate debt issues with mainland banks while staying on the islands.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Stability in the Coral Islands</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     The serene beauty of Lakshadweep masks a complex economic reality. Residents of <strong>Kavaratti, Minicoy, Agatti, and Andrott</strong> often face unique financial pressures. The isolation from the mainland, dependence on shipping for basic goods, and an economy heavily reliant on government jobs, fishing, and copra production make cash flows unpredictable.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When a loan turns sour—due to a bad fishing season, a drop in copra prices, or a delay in contractor payments—borrowers find themselves pitted against large mainland banks. The fear of legal notices coming from Kochi or Ernakulam can be overwhelming.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions brings professional <strong>loan settlement services</strong> to your doorstep. You no longer need to travel to the mainland to fight your case. We handle the legal complexities, allowing you to settle your debts with dignity right from the islands.
                  </p>
                </section>

                {/* Island Economy */}
                <section id="island-economy" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Island Economy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Lakshadweep's economy is distinct from any other part of India. The primary livelihoods are:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-xl text-[#0077be] mb-3">Fisheries (Tuna)</h3>
                      <p className="text-gray-700">
                        The heartbeat of the islands. Loans are often taken for boats, engines, and nets. A poor catch season or stormy weather preventing fishing trips can lead to immediate default.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-xl text-[#0077be] mb-3">Coconut & Copra</h3>
                      <p className="text-gray-700">
                        Coconut cultivation covers the entire cultivable land. Fluctuations in mainland copra prices directly impact the repayment capacity of agricultural loans.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Banks often fail to appreciate these localized risks. We frame your settlement proposal by highlighting these "Act of God" factors—weather patterns and market volatility—that are beyond your control, making a strong case for interest waivers.
                  </p>
                </section>

                {/* Legal Context */}
                <section id="legal-context" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Jurisdiction: The Kerala Connection</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For legal purposes, Lakshadweep falls under the jurisdiction of the <strong>High Court of Kerala</strong> in Ernakulam. Similarly, debt recovery cases are handled by the <strong>Debt Recovery Tribunal (DRT) in Ernakulam</strong>.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <h3 className="text-xl font-bold text-yellow-900 mb-3">The Geographic Despair</h3>
                    <p className="text-yellow-800">
                      If a bank files a case in DRT Ernakulam, a borrower in Minicoy has to travel by ship to Kochi to attend the hearing. This is expensive and time-consuming. Banks often count on this difficulty to get <em>ex-parte</em> orders.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>How We Help:</strong> We have a dedicated team of lawyers in Kochi and Ernakulam. We represent you in the DRT and the High Court. We file the necessary replies, attend hearings, and secure stays on adverse orders without you needing to leave the island. We effectively argue that the "impossibility of performance" due to geographic constraints should be a valid ground for lenient settlement.
                  </p>
                </section>

                {/* Banking Scenario */}
                <section id="banking-scenario" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Banking in Lakshadweep</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The banking network is limited but vital. Key players include <strong>Syndicate Bank (now Canara Bank)</strong>, <strong>SBI</strong>, and <strong>UCO Bank</strong>.
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li><strong>Lead Bank Responsibility:</strong> Canara Bank (formerly Syndicate Bank) has the Lead Bank responsibility. They understand the local ethos better but are bound by rigid central policies.</li>
                    <li><strong>Kisan Credit Cards (KCC):</strong> Widespread among coconut growers. We help settle KCC loans where the yield has been affected by pests or weather.</li>
                    <li><strong>Mudra Loans:</strong> Many islanders took Mudra loans for small businesses (shops, guest houses). Post-pandemic, many of these have turned NPA. We specialize in settling these unsecured business loans.</li>
                  </ul>
                </section>

                {/* Sector Focus */}
                <section id="sector-focus" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Settlement for Island Sectors</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white border-l-4 border-[#0077be] p-6 shadow-sm">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Marine & Fishing Equipment Loans</h3>
                      <p className="text-gray-700">
                        Boats are expensive assets. When banks threaten to seize a fishing boat under SARFAESI, they threaten the borrower's only lifestyle. We intervene to stop the seizure, negotiating a restructuring where the loan is settled over time from the catch proceeds.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-[#0077be] p-6 shadow-sm">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Government Employee Loans</h3>
                      <p className="text-gray-700">
                         A large section of the population works for the Lakshadweep Administration. Personal loans are common. We help government employees settle debts without risking their service record or facing salary attachments.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Settlement Process */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Remote Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our process is designed for the digital age, ensuring seamless service even with the island's internet constraints.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect Digitally</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Reach out to us via WhatsApp. Send photos of your loan notices. We don't need originals immediately. We start building your case file digitally.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Notice Response</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We reply to legal notices from our Kochi/Delhi offices. This professional legal intervention signals to the bank that you are backed by serious counsel, stopping harassment.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We negotiate with the Circle Offices on the mainland. Local branch managers in the islands often have limited powers. We escalate the matter to the decision-makers in Kerala or Bangalore to get the best OTS deal.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                           You pay the agreed settlement amount directly to the bank. We ensure you get the No Dues Certificate, clearing you of the liability.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Logistical Challenges */}
                <section id="logistical-challenges" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Overcoming Logistics</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The biggest hurdle for any legal action in Lakshadweep is logistics. Ships are weather-dependent; helicopters are expensive.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Our Promise:</strong> You do not need to assume the burden of travel. Our legal team is positioned in the mainland judicial hubs (Ernakulam/Kochi). We act as your mainland proxy. Whether it is filing a writ petition in the High Court or attending a DRT summons, we represent you. This saves you thousands of rupees in travel costs—money that can be better used to settle your loan.
                  </p>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏝️</div>
                      <h3 className="font-bold text-xl mb-2">Island Context</h3>
                      <p className="text-gray-600">We understand the unique constraints of island life and economy.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Mainland Reach</h3>
                      <p className="text-gray-600">Strong presence in Ernakulam courts to defend your rights effectively.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📱</div>
                      <h3 className="font-bold text-xl mb-2">Digital First</h3>
                      <p className="text-gray-600">Complete handling of cases via digital communication. No travel needed.</p>
                    </div>
                  </div>
                </section>

                {/* Documents */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#0077be] mb-4">Identity & Loan</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Islander ID / Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Loan Passbook / Statement</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Notices received from Bank/Court</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#0077be] mb-4">Hardship Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Fishing Log / Catch Record (for fishers)</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Copra sales receipts (for farmers)</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Medical certificates (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Debt Freedom on Your Terms</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      From Kavaratti to Minicoy, we are your legal shield. Settle your loans without leaving your island.
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
                      Serving the entire Union Territory of Lakshadweep.
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
                  Speak to our loan settlement lawyers for Lakshadweep.
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
                <Link 
                  href="/services/loan-settlement/sbi-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">SBI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hdfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">HDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/icici-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">ICICI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/kotak-mahindra"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Kotak Mahindra</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/idfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">IDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/yes-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Yes Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bajaj-finserv"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bajaj Finserv</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/axis-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Axis Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bank-of-baroda"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bank of Baroda</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hero-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Hero Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/aditya-birla"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Aditya Birla</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/poonawalla-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Poonawalla Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/tata-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Tata Capital</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/federal-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Federal Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/payu-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">PayU Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/krazybee"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">KrazyBee</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/au-small-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">AU Small Finance Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/northern-arc"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Northern Arc</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dmi-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DMI Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/piramal-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Piramal Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dbs-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DBS Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/south-indian-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">South Indian Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/si-creva"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Si Creva (Kissht/Ring)</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/stashfin"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Stashfin</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/l-and-t-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">L&T Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/american-express"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">American Express</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/standard-chartered"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Standard Chartered</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/true-credits"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">True Credits (TrueBalance)</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/moneyview"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Moneyview</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/vivriti-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Vivriti Capital</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/kisetsu-saison-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Kisetsu Saison Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/indusind-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">IndusInd Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/smfg-india-credit"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">SMFG India Credit</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/fibe"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Fibe (EarlySalary)</span>
                </Link>
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
                "Assam": "assam",
                "Bihar": "bihar",
                "Chhattisgarh": "chhattisgarh",
                "Delhi": "delhi",
                "Goa": "goa",
                "Gujarat": "gujarat",
                "Haryana": "haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "jharkhand",
                "Karnataka": "karnataka",
                "Kerala": "kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "maharashtra",
                "Manipur": "manipur",
                "Meghalaya": "meghalaya",
                "Mizoram": "mizoram",
                "Odisha": "odisha",
                "Puducherry": "puducherry",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Sikkim": "sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "telangana",
                "Tripura": "tripura",
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

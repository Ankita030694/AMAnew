import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Ladakh | Expert Debt Relief Lawyers in Leh & Kargil",
  description:
    "Struggling with debt in Ladakh? AMA Legal Solutions offers expert loan settlement services in Leh, Kargil & remote areas. Stop harassment & resolve disputes legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/ladakh',
  },
  openGraph: {
    title: "Loan Settlement in Ladakh | Expert Debt Relief Lawyers",
    description: "Struggling with debt in Ladakh? AMA Legal Solutions offers expert loan settlement services in Leh, Kargil & remote areas. Stop harassment & resolve disputes legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/ladakh",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Ladakh",
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
      "name": "Ladakh",
      "item": "https://amalegalsolutions.com/services/loan-settlement/ladakh"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Ladakh: Legal Debt Relief for Leh & Kargil",
  "description": "Comprehensive guide to loan settlement in the Union Territory of Ladakh. Learn how to legally settle business and personal loans in Leh and Kargil given the unique geographic challenges.",
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
  "datePublished": "2023-12-10",
  "dateModified": "2024-01-20"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Ladakh",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Leh and Kargil.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "145"
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
        "name": "Tsering Dorjee"
      },
      "reviewBody": "My guest house loan in Leh was in default due to the off-season. AMA Legal Solutions helped me restructure the debt with SBI."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Mohammad Hussain"
      },
      "reviewBody": "Excellent service for Kargil residents. They handled the legal notices professionally."
    }
  ]
};

export default function LadakhLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "ladakh-economy", title: "Ladakh's Unique Economy" },
    { id: "legal-hurdles", title: "Legal Challenges (No DRT)" },
    { id: "local-banks", title: "Banking in Leh & Kargil" },
    { id: "tourism-debt", title: "Tourism & Transport Debt" },
    { id: "settlement-process", title: "Our Settlement Process" },
    { id: "sarfaesi-ladakh", title: "SARFAESI in High Altitude" },
    { id: "why-ama", title: "Why Choose AMA" },
    { id: "documents", title: "Required Documents" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Ladakh", href: "/services/loan-settlement/ladakh" },
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
            style={{ backgroundImage: "url('/cities/leh-palace.jpg')", backgroundBlendMode: 'overlay', backgroundColor: '#333' }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Legal Debt Relief & <span className="text-[#D2A02A]">Loan Settlement in Ladakh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200">
              Specialized legal support for the people of Leh and Kargil. We understand the specific challenges of the region and help you settle loans with dignity.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Peace for the Roof of the World</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Living in Ladakh comes with a distinct set of rewards and challenges. The breathtaking landscapes of <strong>Leh and Kargil</strong> attract visitors from across the globe, driving the local economy. However, the harsh winters, short tourist seasons, and logistical isolation can create severe financial instability for businesses and families. When a winter is particularly harsh or a tourist season is disrupted, the repayment of loans becomes an uphill battle.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we recognize that the banking norms designed for metropolitan India often fail to account for the ground realities of Ladakh. A hotelier in Changspa or a transport operator in Drass cannot be judged by the same metrics as a businessman in Delhi. The "One Size Fits All" approach of banks leads to undue stress, NPA classifications, and the threat of asset seizure.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We bring specialized <strong>loan settlement services</strong> to the Union Territory of Ladakh.Our goal is to act as your legal bridge, explaining your genuine hardships to the banks and negotiating a settlement that allows you to retain your assets and your dignity.
                  </p>
                </section>

                {/* Ladakh Economy */}
                <section id="ladakh-economy" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Unique Economic Pulse of Leh & Kargil</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The economy of Ladakh is fragile and highly seasonal. This seasonality is the primary cause of default for many borrowers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Hyper-Seasonality</h3>
                      <p className="text-gray-700">
                        Most businesses earn 90% of their revenue between May and September. Banks often demand monthly EMIs even during the dormant winter months, leading to technical defaults.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-xl text-[#D2A02A] mb-3">Logistical Costs</h3>
                      <p className="text-gray-700">
                        Transporting goods across the Zojila Pass involves high costs. Any disruption in the highway can lead to inventory losses for traders, impacting their ability to service business loans.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We use these unique economic factors as leverage during negotiations. We argue that the default is not due to intent but due to environmental force majeure, compelling banks to offer lenient settlement terms.
                  </p>
                </section>

                {/* Legal Hurdles */}
                <section id="legal-hurdles" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge: No Local DRT</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A major legal hurdle for the residents of Ladakh is the absence of a local <strong>Debt Recovery Tribunal (DRT)</strong>. The jurisdiction currently lies with <strong>DRT Chandigarh</strong>.
                  </p>
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                    <h3 className="text-xl font-bold text-red-900 mb-3">The Distance Barrier</h3>
                    <p className="text-red-800">
                      Imagine receiving a summons to appear in Chandigarh for a loan dispute while you are in Nubra Valley. The cost of travel and accommodation often exceeds the EMI amount itself. Banks exploit this, knowing borrowers cannot easily defend themselves, leading to one-sided <em>ex-parte</em> orders.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Our Solution:</strong> AMA Legal Solutions bridges this gap. We have a legal presence in Chandigarh to handle your DRT matters, so you don't have to travel. Furthermore, we actively utilize the writ jurisdiction of the <strong>High Court of Jammu & Kashmir and Ladakh</strong>. The High Court has been pivotal in protecting the rights of Ladakhi borrowers, often staying DRT proceedings due to the inaccessibility of the forum.
                  </p>
                </section>

                {/* Local Banks */}
                <section id="local-banks" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Banking Landscape: SBI & J&K Bank</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The banking sector in Ladakh is dominated by the <strong>State Bank of India (SBI)</strong> and <strong>J&K Bank</strong>. Each has specific debt resolution policies.
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li><strong>SBI's Rinn Samadhan:</strong> SBI often launches specific settlement schemes for agricultural and SME loans. We help you navigate the eligibility criteria for these schemes to ensure maximum waivers.</li>
                    <li><strong>J&K Bank's Rehabilitation:</strong> Given its history in the region, J&K Bank often has special rehabilitation packages for tourism units. We assist in restructuring proposals where the interest is funded, giving you breathing room to restart your business.</li>
                  </ul>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We also handle disputes with private NBFCs and digital lenders who may have recently entered the Ladakhi market and use aggressive recovery tactics unsuited to the local culture.
                  </p>
                </section>

                {/* Tourism Debt */}
                <section id="tourism-debt" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tourism & Transport Sector Debt</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The backbone of Ladakh is Tourism. However, it is a capital-intensive sector.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-white border-l-4 border-[#D2A02A] p-6 shadow-sm">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Guest House & Hotel Loans</h3>
                      <p className="text-gray-700">
                        Many residents have taken large loans to construct guest houses. If occupancy rates drop, repayment becomes impossible. We help negotiation <strong>One Time Settlements (OTS)</strong> based on the current market value of the property rather than the outstanding book balance.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-[#D2A02A] p-6 shadow-sm">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Taxi Union Members</h3>
                      <p className="text-gray-700">
                         Loans for Innovas, Xylos, and Tempo Travelers are common. When fuel prices rise or tourist footfall decreases, EMI defaults happen. We prevent vehicle seizure by negotiating with the bank to harmonize the repayment schedule with the tourist season (paying more in summer, less in winter).
                      </p>
                    </div>
                  </div>
                </section>

                {/* Settlement Process */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Settlement Process for Ladakh</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a remote-first, efficient process to ensure you get legal help without needing to leave the UT.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Consultation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We connect via WhatsApp or Video Call. We understand internet connectivity can be spotty in remote areas, so we are flexible. We review your loan documents digitally.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Notice Response</h3>
                        <p className="text-gray-700 leading-relaxed">
                          If you have received a demand notice, we draft a strong legal reply. We send this via Registered Post from our central office, ensuring it reaches the bank's legal department promptly.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Hardship Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We prepare a detailed representation of your financial hardship, highlighting specific Ladakhi challenges (e.g., road closures, short season). This context is crucial for convincing regional bank heads.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement & NDC</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We negotiate the final settlement amount. Once you pay, we ensure the digital delivery of the No Dues Certificate, allowing you to close the chapter.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SARFAESI in Ladakh */}
                <section id="sarfaesi-ladakh" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">SARFAESI Actions in High Altitude</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The implementation of the SARFAESI Act in Ladakh is legally complex. While banks have the right to enforce security, the <strong>District Magistrates of Leh and Kargil</strong> play a vital role.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Banks must apply to the DM for physical possession. We represent clients before the DM's office, arguing that dispossession would violate fundamental rights, especially during the harsh winter months when homelessness can be life-threatening. This humanitarian ground is a strong defense in Ladakh.
                  </p>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏔️</div>
                      <h3 className="font-bold text-xl mb-2">Local Understanding</h3>
                      <p className="text-gray-600">We understand the unique geography and economy of Leh & Kargil.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Reach</h3>
                      <p className="text-gray-600">We effectively use the J&K & Ladakh High Court to stay unfair proceedings.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📵</div>
                      <h3 className="font-bold text-xl mb-2">Remote Service</h3>
                      <p className="text-gray-600">Complete legal support via phone/video. No need to travel to Chandigarh.</p>
                    </div>
                  </div>
                </section>

                {/* Documents */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Standard Docs</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Hill Council ID / Resident Certificate</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> PAN & Aadhar</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Loan Sanction Letter</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Business Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Hotel/Guest House Registration</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Taxi Union Permit (for transport loans)</li>
                          <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> GST Returns (if available)</li>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Ladakh</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Whether you are in Leh, Kargil, Drass, or Nubra, our legal team is just a call away.
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
                      Serving the entire Union Territory of Ladakh.
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
                  Speak to our loan settlement lawyers in Ladakh today.
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

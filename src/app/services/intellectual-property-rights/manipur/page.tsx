import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "IPR Services in Manipur | Trademark & Patent Consultants Imphal",
  description:
    "Leading IPR firm for Manipur. We secure Trademarks, Patents, and GI tags for Imphal's startups, handloom weavers, and agricultural producers. Expert legal guidance.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/manipur',
  },
  openGraph: {
    title: "IPR Services in Manipur | Trademark & Patent Consultants Imphal",
    description: "Leading IPR firm for Manipur. We secure Trademarks, Patents, and GI tags for Imphal's startups, handloom weavers, and agricultural producers. Expert legal guidance.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/manipur",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Manipur",
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
      "name": "Intellectual Property Rights",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Manipur",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/manipur"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Manipur: Protecting Heritage & Innovation",
  "description": "A comprehensive guide to IPR in Manipur. From GI tags for Chak-Hao to trademarks for Imphal startups, we cover all legal aspects of IP protection.",
  "image": "https://amalegalsolutions.com/services/4.png",
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
  "datePublished": "2024-11-27",
  "dateModified": "2024-01-20"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "IPR Services Manipur",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Professional IP legal services in Manipur.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
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
        "name": "Ibomcha Singh"
      },
      "reviewBody": "AMA Legal Solutions helped our cooperative society understand the GI tag process for our handloom products. Their guidance was invaluable."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Linda Devi"
      },
      "reviewBody": "I run a food processing startup in Imphal. They registered my trademark quickly and explained the benefits of the startup policy clearly."
    }
  ]
};

export default function ManipurIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "act-east-gateway", title: "Gateway to South East Asia" },
    { id: "gi-deep-dive", title: "Protecting GI Heritage" },
    { id: "bio-resources", title: "Bio-Resources & Patents" },
    { id: "imphal-tech-hub", title: "Imphal's Digital Economy" },
    { id: "trademark-protection", title: "Trademark Strategy" },
    { id: "handloom-designs", title: "Handloom & Designs" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "startup-assistance", title: "Startup Manipur Support" },
    { id: "why-ama-manipur", title: "Why AMA Legal Solutions" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Manipur", href: "/services/intellectual-property-rights/manipur" },
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
              Intellectual Property Rights in <span className="text-[#D2A02A]">Manipur</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Empowering Manipur's Innovators. From protecting the legacy of Moirang Phee to securing patents for Imphal's Tech Startups.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free IP Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full px-4 lg:px-12 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            
            {/* Left Sidebar: Table of Contents */}
            <div className="hidden lg:block sticky top-24">
               <TableOfContents sections={tocSections} />
            </div>

            {/* Main Content Area */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-12">
                
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction: Safeguarding the Jewel of India</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Manipur is a land where tradition meets transformation. As the vital gateway to Southeast Asia under India's <strong>Act East Policy</strong>, the state is poised for a commercial resurgence. The bustling markets of <strong>Imphal</strong>, the border trade hub of <strong>Moreh</strong>, and the serene weaving villages of <strong>Bishnupur</strong> are all witnessing a shift towards higher value economic activities. In this dynamic environment, <strong>Intellectual Property Rights (IPR)</strong> are not just legal instruments; they are the keys to economic self reliance and global competitiveness.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Whether protecting the ancient weaving techniques of the Meitei community or securing the source code of a new fintech app developed in Mantripukhri, IPR serves as a protective shield. It prevents the unauthorized exploitation of Manipur's unique assets—be it the majestic <strong>Chak-Hao</strong> black rice or the intricate <strong>Shaphee Lanphee</strong> shawl. Without legal protection, these community treasures risk becoming generic commodities, losing the premium value they rightfully deserve.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  AMA Legal Solutions is committed to building an IP conscious ecosystem in Manipur. We understand the local pulse, respecting the community ownership of traditional knowledge while equipping modern entrepreneurs with aggressive patent and trademark strategies. From the hills to the valley, we ensure that the intellectual wealth of Manipur remains in the hands of its people.
                </p>
              </section>

              {/* Act East Gateway */}
              <section id="act-east-gateway" className="scroll-mt-32">
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">Manipur: The Gateway to South East Asia</h2>
                 <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    With the Asian Highway passing through, Manipur is the face of India's trade with Myanmar, Thailand, and beyond. This strategic location brings unique IPR challenges and opportunities.
                 </p>
                 <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                     <h3 className="text-xl font-bold text-blue-900 mb-2">Cross Border Trade & IPR</h3>
                     <p className="text-blue-800">
                        The Land Custom Station at Moreh handles significant trade volumes. Businesses engaged in import export must ensure their trademarks are registered not just in India, but also in target markets like Myanmar. Conversely, imported goods must not infringe on valid Indian patents or trademarks.
                     </p>
                 </div>
                 <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Anti-Counterfeiting Measures:</strong> Border towns are often transit points for counterfeit goods. We assist brand owners in recording their IP rights with <strong>Customs Authorities</strong> under the IPR (Imported Goods) Enforcement Rules, 2007. This empowers custom officers at Moreh to seize infringing goods at the border itself, preventing them from flooding the Indian market.
                 </p>
              </section>

              {/* GI Deep Dive */}
              <section id="gi-deep-dive" className="scroll-mt-32">
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">Protecting GI Heritage: A Community Asset</h2>
                 <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Manipur has a rich repository of Geographical Indications (GI). These tags signify high quality and specific origin, allowing producers to command premium prices. However, registration is just the first step; enforcement is the real challenge.
                 </p>
                 
                 <div className="space-y-8">
                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                         <div className="flex items-center mb-3">
                             <span className="text-2xl mr-3">🌾</span>
                             <h3 className="text-xl font-bold text-[#D2A02A]">Chak-Hao (Black Rice)</h3>
                         </div>
                         <p className="text-gray-700 mb-3">
                             This aromatic rice is a superfood with high export demand. The GI tag belongs to the agricultural community.
                         </p>
                         <p className="text-sm text-gray-600">
                             <strong>Our Role:</strong> We assist Farmer Maker Groups (FMGs) in registering as <strong>Authorized Users</strong>. This gives legal validity to their produce, ensuring that rice grown in other states cannot be deceptively sold as "Manipur Chak-Hao."
                         </p>
                     </div>

                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                         <div className="flex items-center mb-3">
                             <span className="text-2xl mr-3">🧣</span>
                             <h3 className="text-xl font-bold text-[#D2A02A]">Moirang Phee & Wangkhei Phee</h3>
                         </div>
                         <p className="text-gray-700 mb-3">
                             These textiles are famous for their specific motifs (like the Yarongphi tooth design).
                         </p>
                         <p className="text-sm text-gray-600">
                             <strong>Our Role:</strong> We work with weaver cooperatives in Moirang and Imphal East to monitor the market. If power loom imitations appear, we can initiate legal action under the Geographical Indications of Goods Act, 1999.
                         </p>
                     </div>

                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                         <div className="flex items-center mb-3">
                             <span className="text-2xl mr-3">🍋</span>
                             <h3 className="text-xl font-bold text-[#D2A02A]">Kachai Lemon</h3>
                         </div>
                         <p className="text-gray-700 mb-3">
                             Grown in Ukhrul district, this lemon is known for its high ascorbic acid content.
                         </p>
                         <p className="text-sm text-gray-600">
                             <strong>Our Role:</strong> We help local processing units create value added products (like juices and powders) and trademark unique brand names for them, leveraging the GI tag as a quality endorsement.
                         </p>
                     </div>
                 </div>
              </section>

              {/* Bio-Resources */}
              <section id="bio-resources" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Bio-Resources & Traditional Knowledge</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Manipur lies within the Indo Burma biodiversity hotspot. Its medicinal plants have been used by local healers (Maibas and Maibis) for centuries.
                </p>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="font-bold text-lg text-green-900 mb-2">The Biological Diversity Act, 2002</h3>
                    <p className="text-green-800 text-sm mb-4">
                        Any commercial utilization of bio resources (e.g., a pharmaceutical company making a drug from a Manipuri herb) requires prior approval from the **National Biodiversity Authority (NBA)**.
                    </p>
                    <ul className="list-disc pl-5 text-green-800 text-sm space-y-2">
                        <li><strong>Access and Benefit Sharing (ABS):</strong> We ensure that local communities receive a fair share of the profits arising from the commercial use of their bio resources.</li>
                        <li><strong>Patenting Herbs:</strong> We guide researchers on how to patent herbal formulations without violating the traditional knowledge provisions (Section 3(p) of the Patents Act), often by proving synergy or a novel extraction method.</li>
                    </ul>
                </div>
              </section>

              {/* Imphal Tech Hub */}
              <section id="imphal-tech-hub" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Imphal: The Emerging Digital Hub</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    With the establishment of the **Manipur IT Park** at Mantripukhri and IIIT Manipur, a new generation of digital entrepreneurs is rising.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">Copyright for Code</h3>
                        <p className="text-gray-700 text-sm">
                            Software code is protected as a 'literary work' under the Copyright Act. We help IT firms lay claim to their source code, preventing ex employees or competitors from cloning their software architecture.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">User Interface (UI) Protection</h3>
                        <p className="text-gray-700 text-sm">
                            The visual look and feel of a mobile app is crucial for user retention. We advise on protecting unique GUI elements through Copyright or Design registration, ensuring your app stands out in the Play Store.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">Trademarking App Names</h3>
                        <p className="text-gray-700 text-sm">
                            An app's name is its identity. We conduct availability searches on the App Store and the Trademark Registry to ensure your brand name is safe to launch and invest in.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 mb-2">Domain Name Disputes</h3>
                        <p className="text-gray-700 text-sm">
                            If a cyber squatter buys a domain name identical to your brand, we initiate heavy hitting legal actions via the NIXI (National Internet Exchange of India) arbitration process to recover it.
                        </p>
                    </div>
                </div>
              </section>

              {/* Trademark Protection */}
              <section id="trademark-protection" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Trademark Strategy for Manipur's Businesses</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From hospitality chains in Imphal to food processing units in Thoubal, a trademark is the primary asset of any B2C business.
                </p>
                
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-lg mb-2">The "Prior Use" Advantage</h3>
                    <p className="text-gray-700">
                        In India, the first person to use a mark often has superior rights over someone who registers it later. We help businesses document their "date of first use" (via invoices, ads, bills) to establish seniority in the market, which is crucial if a dispute ever arises.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 p-4 rounded-lg">
                        <span className="text-[#D2A02A] font-bold block mb-1">Class 29 & 30</span>
                        <p className="text-sm text-gray-600">Typically used for packaged foods like bamboo shoot pickles, dried fish, and black rice products.</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                        <span className="text-[#D2A02A] font-bold block mb-1">Class 24 & 25</span>
                        <p className="text-sm text-gray-600">Essential for the handloom sector, covering textiles, fabrics, and ready made clothing.</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                        <span className="text-[#D2A02A] font-bold block mb-1">Class 35</span>
                        <p className="text-sm text-gray-600">For retail stores, import export agencies, and e-commerce sellers operating from Manipur.</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                        <span className="text-[#D2A02A] font-bold block mb-1">Class 43</span>
                        <p className="text-sm text-gray-600">For hotels, homestays, and restaurants catering to the growing tourism industry.</p>
                    </div>
                </div>
              </section>

              {/* Legal Framework */}
              <section id="legal-framework" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Framework: Managing IP Remotely</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Clients often ask: "Do I need to go to Kolkata to file my trademark?" The answer is No.
                </p>

                <div className="space-y-6">
                     <div className="relative pl-8 border-l-4 border-gray-300">
                         <h3 className="text-xl font-bold text-gray-900">The Kolkata Trademark Registry</h3>
                         <p className="text-gray-700 mt-2">
                             Manipur falls under the jurisdiction of the Trademark Registry in **Salt Lake City, Kolkata**. However, the entire filing process is digital.
                         </p>
                         <p className="text-gray-700 mt-2 text-sm italic">
                             AMA Legal Solutions handles filings electronically. For any hearings, our attorneys represent you via video conferencing, which is now the standard practice. You never have to leave Imphal.
                         </p>
                     </div>

                     <div className="relative pl-8 border-l-4 border-gray-300">
                         <h3 className="text-xl font-bold text-gray-900">The High Court of Manipur</h3>
                         <p className="text-gray-700 mt-2">
                             Established in 2013, the High Court of Manipur in Imphal has jurisdiction over civil and criminal IP disputes within the state.
                         </p>
                         <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                             <li><strong>Injunctions:</strong> If a local shop is selling fake goods, we can approach the district court or High Court for an immediate stay order.</li>
                             <li><strong>Speed:</strong> Local enforcement is faster and more effective than chasing infringers in other states.</li>
                         </ul>
                     </div>
                </div>
              </section>

              {/* Startup Assistance */}
              <section id="startup-assistance" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Startup Manipur: Government Support</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The **Manipur Startup Policy** creates a favorable environment for innovation. The government recognizes that IP costs can be a burden for early stage companies.
                </p>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                     <h3 className="text-2xl font-bold text-green-900 mb-4">IPR Reimbursements</h3>
                     <div className="grid md:grid-cols-2 gap-8">
                         <div>
                             <p className="font-bold text-green-800 mb-1">Patent Support</p>
                             <p className="text-green-700">Reimbursement of patent filing fees for recognized startups.</p>
                         </div>
                         <div>
                             <p className="font-bold text-green-800 mb-1">Trademark & Design</p>
                             <p className="text-green-700">Financial assistance to cover statutory fees for protecting brands and designs.</p>
                         </div>
                         <div>
                             <p className="font-bold text-green-800 mb-1">Facilitation Centers</p>
                             <p className="text-green-700">Support from **MASTEC (Manipur Science & Technology Council)** for IP awareness and preliminary search.</p>
                         </div>
                     </div>
                     <div className="mt-6 pt-6 border-t border-green-200">
                         <p className="text-green-900 font-semibold italic">
                             "We help you prepare the technical documents required to claim these benefits, ensuring that your IP portfolio is built without draining your capital."
                         </p>
                     </div>
                </div>
              </section>

              {/* Why Choose AMA */}
              <section id="why-ama-manipur" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Partner with AMA Legal Solutions?</h2>
                <div className="mb-6">
                    <p className="text-lg text-gray-700 mb-6">
                        We combine the expertise of a national law firm with a deep respect for the cultural nuance of the North East.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#D2A02A] text-xl mr-3 font-bold">✓</span>
                                <div>
                                    <strong className="block text-gray-900">Regional Sensitivity</strong>
                                    <p className="text-gray-700 text-sm">We understand the importance of community rights in tribal areas and the specific needs of hill based agriculture.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D2A02A] text-xl mr-3 font-bold">✓</span>
                                <div>
                                    <strong className="block text-gray-900">Digital First</strong>
                                    <p className="text-gray-700 text-sm">Our completely online process means you get world class legal service sitting in Ukhrul, Churachandpur, or Kakching.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#D2A02A] text-xl mr-3 font-bold">✓</span>
                                <div>
                                    <strong className="block text-gray-900">Fixed & Fair Pricing</strong>
                                    <p className="text-gray-700 text-sm">Transparent packages for MSMEs and startups. No hidden hourly billing.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D2A02A] text-xl mr-3 font-bold">✓</span>
                                <div>
                                    <strong className="block text-gray-900">Comprehensive Care</strong>
                                    <p className="text-gray-700 text-sm">From the initial trademark search to the final registration certificate, we handle every step.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
              </section>

              {/* FAQ */}
              <FaqSection />

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Intellectual Property Today</h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Protecting the innovation and heritage of Manipur, one patent at a time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                        Get Started Now
                      </button>
                    </Link>
                    <a href="tel:+918700343611">
                      <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                         Call: +91-8700343611
                      </button>
                    </a>
                  </div>
                  <p className="mt-8 text-sm opacity-70">
                    Trusted by Innovators across the North East
                  </p>
                </div>
              </section>

            </div>

             {/* Right Sidebar: Contact & Quick Links */}
            <div className="sticky top-24 space-y-8">
               {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to an IP Expert</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get immediate assistance for trademark filing, patent registration, and GI protection in Manipur.
                </p>
                <div className="space-y-4">
                     <a 
                    href="tel:+918700343611" 
                    className="flex items-center justify-center w-full bg-[#D2A02A] text-white py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors"
                    >
                    <span className="mr-2">📞</span> +91-8700343611
                    </a>
                    <Link 
                    href="/contact" 
                    className="flex items-center justify-center w-full border-2 border-[#D2A02A] text-[#D2A02A] py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                    >
                    Request Callback
                    </Link>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/company-incorporation" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                      <span className="text-[#D2A02A] mr-2">›</span> Company Registration
                    </Link>
                  </li>
                   <li>
                    <Link href="/services/tax-and-compliance" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                      <span className="text-[#D2A02A] mr-2">›</span> Tax & GST Filing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                      <span className="text-[#D2A02A] mr-2">›</span> Corporate Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                      <span className="text-[#D2A02A] mr-2">›</span> Litigation Services
                    </Link>
                  </li>
                </ul>
              </div>

               {/* Client Review Snippet */}
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                 <div className="flex text-[#D2A02A] mb-2">★★★★★</div>
                 <p className="text-gray-700 text-sm italic mb-3">"Expert guidance on GI authorization. They made sure our community rights were protected."</p>
                 <p className="text-xs font-bold text-gray-900">- Ibomcha Singh, Bishnupur</p>
               </div>
            </div>

          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Intellectual Property Rights" servicePath="intellectual-property-rights" />
          </div>
        </div>
      </div>
    </>
  );
}

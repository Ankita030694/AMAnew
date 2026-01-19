import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Rajasthan | IP Lawyers Jaipur",
  description:
    "Protect your brand & heritage in Rajasthan. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Jaipur, Jodhpur & Udaipur. Litigation support at Rajasthan High Court.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/Rajasthan',
  },
  openGraph: {
    title: "Intellectual Property Rights in Rajasthan | IP Lawyers Jaipur",
    description: "Protect your brand & heritage in Rajasthan. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Jaipur, Jodhpur & Udaipur. Litigation support at Rajasthan High Court.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/Rajasthan",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Rajasthan",
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
      "name": "Rajasthan",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/Rajasthan"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Rajasthan: Protecting Heritage & Innovation",
  "description": "Comprehensive guide to IPR protection in Rajasthan. Learn about trademark registration in Jaipur, GI tags for handicrafts, and IP litigation at the Rajasthan High Court.",
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
  "datePublished": "2023-11-24",
  "dateModified": "2023-11-24"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "IPR Services Rajasthan",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert intellectual property legal services in Rajasthan.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "620"
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
      "reviewBody": "AMA Legal Solutions helped us trademark our heritage hotel brand in Udaipur. Their knowledge of the tourism industry's legal needs is excellent."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Khandelwal"
      },
      "reviewBody": "We export textiles from Jaipur. The team assisted us with Design Registration for our block prints, protecting us from copycats in the local market."
    }
  ]
};

export default function RajasthanIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "heritage-innovation", title: "Heritage & Innovation" },
    { id: "legal-framework", title: "Legal Framework & Courts" },
    { id: "industry-focus", title: "Industry-Specific Solutions" },
    { id: "registration-process", title: "Registration Process" },
    { id: "enforcement", title: "Enforcement & Litigation" },
    { id: "government-support", title: "Government Support" },
    { id: "common-mistakes", title: "Common IP Mistakes" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Rajasthan", href: "/services/intellectual-property-rights/Rajasthan" },
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
              Protect Your Legacy with <span className="text-[#D2A02A]">IPR Services in Rajasthan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From Heritage Hotels in Udaipur to Textile Exports in Jaipur. We safeguard your intellectual property across the Land of Kings.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free IP Consultation
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property in Rajasthan: Where Tradition Meets Trade</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rajasthan is globally renowned for its rich cultural heritage, vibrant handicrafts, and booming tourism industry. But beyond the palaces and forts lies a dynamic economy driven by textiles, mining, and food processing. In such a diverse market, <strong>Intellectual Property Rights (IPR)</strong> are crucial for protecting both traditional knowledge and modern business assets.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are a master craftsman in Sanganer protecting your block print designs, a jewelry exporter in Jaipur, or a startup in the iStart ecosystem, your brand and innovations are your wealth. Unauthorized copying and counterfeiting can erode your market share and damage your reputation.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we understand the unique IP landscape of Rajasthan. We help businesses across Jaipur, Jodhpur, Udaipur, and Kota secure their Trademarks, Copyrights, and Patents, ensuring that your legacy remains yours.
                  </p>
                </section>

                {/* Heritage & Innovation */}
                <section id="heritage-innovation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Rajasthan's Unique Assets</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Rajasthan has a treasure trove of Geographical Indications (GIs) like Blue Pottery, Kota Doria, and Bikaneri Bhujia. Protecting these is vital for the state's economy."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our services cater to the specific needs of Rajasthan's key regions:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Jaipur: The Craft & Gem Capital</h3>
                      <p className="text-gray-600 mb-4">
                        A hub for jewelry, textiles, and blue pottery.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Jewelry:</strong> Trademarking brand names for export.</li>
                        <li><strong>Textiles:</strong> Copyrighting unique block print patterns.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Jodhpur & Udaipur: Tourism & Handicrafts</h3>
                      <p className="text-gray-600 mb-4">
                        Famous for furniture, heritage hotels, and marble.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Hospitality:</strong> Protecting hotel names and logos.</li>
                        <li><strong>Furniture:</strong> Design registration for unique furniture styles.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Bikaner: The Food Hub</h3>
                      <p className="text-gray-600 mb-4">
                        Home to world-famous snacks and sweets.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Food Processing:</strong> GI protection for Bhujia and Rasgulla.</li>
                        <li><strong>Packaging:</strong> Trademarking unique packaging designs.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Kota: Education & Textiles</h3>
                      <p className="text-gray-600 mb-4">
                        Known for Kota Doria sarees and coaching institutes.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Education:</strong> Trademarking coaching institute brands.</li>
                        <li><strong>Textiles:</strong> GI protection for Kota Doria fabric.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework: Courts & Registries</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the jurisdiction is key to effective IP management in Rajasthan.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Rajasthan High Court</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        With benches in <strong>Jodhpur (Principal Seat)</strong> and <strong>Jaipur</strong>.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li><strong>Commercial Courts:</strong> Specialized Commercial Courts at the District Judge level handle IPR disputes valued above ₹3 Lakhs.</li>
                        <li><strong>Injunctions:</strong> The High Court is proactive in granting injunctions against counterfeiters, especially in cases involving heritage arts and famous brands.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. The Trade Marks Registry, Ahmedabad</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Located at <strong>Ghatlodia, Ahmedabad</strong>.
                      </p>
                      <p className="text-gray-700">
                        <strong>Jurisdiction:</strong> Rajasthan falls under the jurisdiction of the Ahmedabad Registry.
                        <br />
                        <strong>Our Role:</strong> We handle all filings and hearings at the Ahmedabad office on behalf of our Rajasthan clients, saving you the travel and hassle.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Industry Focus */}
                <section id="industry-focus" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tailored Solutions for Key Industries</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🧵</span>
                        <h3 className="text-2xl font-bold text-gray-900">Textiles & Handicrafts</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For exporters in Jaipur, Pali, and Balotra.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Design Registration</h4>
                          <p>Protecting new patterns for bedsheets, quilts, and garments.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Copyright</h4>
                          <p>Securing artistic works used in fabric printing.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🏨</span>
                        <h3 className="text-2xl font-bold text-gray-900">Tourism & Hospitality</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For hotels, resorts, and travel agencies.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Brand Trademark</h4>
                          <p>Protecting the name and logo of your hotel or resort.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Domain Protection</h4>
                          <p>Ensuring your website domain matches your trademark to prevent cybersquatting.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">💎</span>
                        <h3 className="text-2xl font-bold text-gray-900">Gems & Jewellery</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the Johari Bazaar ecosystem.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Jewellery Designs</h4>
                          <p>Registering unique cuts and settings under the Designs Act.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Brand Identity</h4>
                          <p>Building a global brand for export markets.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration Process (Jurisdiction: Ahmedabad)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Since Rajasthan falls under the Ahmedabad Registry, the process involves:
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Comprehensive Search</h3>
                      <p className="text-gray-700">
                        We verify your mark against existing trademarks in the Ahmedabad database and local usage in Rajasthan.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Application Filing</h3>
                      <p className="text-gray-700">
                        We file the application online. The jurisdiction will be marked as Ahmedabad.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Examination & Reply</h3>
                      <p className="text-gray-700">
                        We draft detailed replies to any examination reports issued by the Registry.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Hearing</h3>
                      <p className="text-gray-700">
                        Our attorneys represent you at the Ahmedabad Registry for any show-cause hearings.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Certification</h3>
                      <p className="text-gray-700">
                        Receive your Registration Certificate, valid for 10 years.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement: Stopping Counterfeits</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Counterfeiting is a major issue in tourist markets. Here is how we stop it:
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Legal Actions</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">1. Civil Suits:</span>
                        <span>Filing infringement suits in the Commercial Courts of Jaipur or Jodhpur to get immediate stay orders.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2. Police Complaints:</span>
                        <span>Lodging FIRs under the Copyright Act and Trademark Act to conduct raids on shops selling fake handicrafts or textiles.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">3. Market Sweeps:</span>
                        <span>Conducting investigations in local markets to identify unauthorized sellers of your brand.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Government Support */}
                <section id="government-support" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Support: iStart & IPR Policy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Rajasthan Government actively encourages IP creation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Patent Subsidy</h3>
                      <p className="text-green-800 mb-2">Under the Rajasthan IPR Policy:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>75% Reimbursement</strong> on patent filing costs.</li>
                        <li>Cap of <strong>₹1 Lakh</strong> per application.</li>
                        <li>Available for Startups, MSMEs, and Universities.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">iStart Rajasthan</h3>
                      <p className="text-green-800 mb-2">For registered startups:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li>Facilitation support for IP filing.</li>
                        <li>Access to a network of IP experts and mentors.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common IP Mistakes in Rajasthan</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring GI Tags</h3>
                        <p className="text-gray-700 text-sm">Producers of Blue Pottery or Kota Doria often fail to register as "Authorized Users" of the GI, losing out on legal protection and premium pricing.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Unprotected Exports</h3>
                        <p className="text-gray-700 text-sm">Exporting handicrafts without filing for IP protection in the destination country (e.g., USA, Europe) leaves you vulnerable to international copycats.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Rajasthan?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We bridge the gap between traditional craftsmanship and modern legal protection.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏰</div>
                      <h3 className="font-bold text-xl mb-2">Heritage Experts</h3>
                      <p className="text-gray-600">Specialized in protecting traditional knowledge, GIs, and heritage brands.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Practice</h3>
                      <p className="text-gray-600">Experienced in handling IP litigation in Rajasthan High Court and District Commercial Courts.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📝</div>
                      <h3 className="font-bold text-xl mb-2">Ahmedabad Liaison</h3>
                      <p className="text-gray-600">Direct handling of registry matters in Ahmedabad, ensuring smooth processing.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We run a chain of boutique hotels in Jodhpur. AMA Legal Solutions helped us secure our brand name against a competitor who was trying to copy our identity. Their swift action saved our reputation."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Aditya Rathore</p>
                          <p className="text-sm text-gray-500">Owner, Heritage Haveli</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a startup in Jaipur, we were unaware of the government subsidies for patents. AMA not only filed our patent but also guided us to get the 75% reimbursement from the Rajasthan government."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Maheshwari</p>
                          <p className="text-sm text-gray-500">Co-founder, TechSolutions</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Brand in Rajasthan</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let your heritage or innovation be compromised. Partner with Rajasthan's trusted IP experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Start Registration
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Professional • Efficient
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to an IP Expert</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Get immediate assistance for trademark filing and litigation in Rajasthan.
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
                      <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/entertainment" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Entertainment Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/cyber" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cyber Crime
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Litigation Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Trademark Registration" servicePath="intellectual-property-rights" />
          </div>
        </div>
      </div>
    </>
  );
}

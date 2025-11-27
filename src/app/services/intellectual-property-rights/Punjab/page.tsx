import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Punjab | IP Lawyers Ludhiana & Chandigarh",
  description:
    "Secure your business in Punjab. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Ludhiana, Jalandhar, Amritsar & Mohali. Litigation support at Punjab & Haryana High Court.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/Punjab',
  },
  openGraph: {
    title: "Intellectual Property Rights in Punjab | IP Lawyers Ludhiana & Chandigarh",
    description: "Secure your business in Punjab. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Ludhiana, Jalandhar, Amritsar & Mohali. Litigation support at Punjab & Haryana High Court.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/Punjab",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Punjab",
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
      "name": "Punjab",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/Punjab"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Punjab: Protecting Industry & Agriculture",
  "description": "Comprehensive guide to IPR protection in Punjab. Learn about sports goods trademarks in Jalandhar, hosiery designs in Ludhiana, and IP litigation at the Punjab & Haryana High Court.",
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
      "url": "https://amalegalsolutions.com/logo.png"
    }
  },
  "datePublished": "2023-11-24",
  "dateModified": "2023-11-24"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "IPR Services Punjab",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert intellectual property legal services in Punjab.",
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
        "name": "Gurpreet Singh"
      },
      "reviewBody": "AMA Legal Solutions helped us trademark our sports equipment brand in Jalandhar. Their team understands the export market requirements perfectly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Raman Kapoor"
      },
      "reviewBody": "We manufacture auto parts in Ludhiana. AMA assisted us in patenting a new machine component and claiming the government subsidy."
    }
  ]
};

export default function PunjabIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "industrial-landscape", title: "Punjab's IP Landscape" },
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
    { label: "Punjab", href: "/services/intellectual-property-rights/Punjab" },
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
              Safeguard Your Innovation with <span className="text-[#D2A02A]">IPR Services in Punjab</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From Sports Goods in Jalandhar to Hosiery in Ludhiana. We provide expert legal protection for Punjab's thriving industries.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property in Punjab: Powering Industry & Agriculture</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Punjab is known for its entrepreneurial spirit and robust industrial base. From the bustling factories of Ludhiana to the export hubs of Jalandhar and the tech parks of Mohali, the state is a hive of activity. In this competitive environment, <strong>Intellectual Property Rights (IPR)</strong> are the shield that protects your hard work.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are manufacturing world-class sports equipment, designing trendy hosiery, or developing new agricultural tools, your innovations need legal protection. Unauthorized copying can eat into your profits and damage your brand's reputation globally.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we specialize in securing Trademarks, Patents, and Designs for Punjab's businesses. With our deep understanding of the local market and expertise in the <strong>Punjab & Haryana High Court</strong>, we ensure your business stays ahead of the curve.
                  </p>
                </section>

                {/* Industrial Landscape */}
                <section id="industrial-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Punjab's IP Ecosystem</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Punjab leads in MSME innovation, with strong clusters in light engineering, textiles, and sports goods requiring robust IP protection."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Key regions and their specific IP needs:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Ludhiana: The Manchester of India</h3>
                      <p className="text-gray-600 mb-4">
                        Hub for hosiery, bicycles, and auto parts.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Textiles:</strong> Design registration for garment patterns.</li>
                        <li><strong>Engineering:</strong> Patents for bicycle components and machinery.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Jalandhar: Sports & Hand Tools</h3>
                      <p className="text-gray-600 mb-4">
                        Global exporter of sports goods.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Sports Goods:</strong> Trademarks for international branding.</li>
                        <li><strong>Hand Tools:</strong> Design patents for ergonomic tool handles.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Mohali (SAS Nagar): IT & Biotech</h3>
                      <p className="text-gray-600 mb-4">
                        The emerging tech hub of North India.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>IT:</strong> Copyrights for software and apps.</li>
                        <li><strong>Biotech:</strong> Patents for new formulations and processes.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Amritsar & Patiala: Heritage & Food</h3>
                      <p className="text-gray-600 mb-4">
                        Known for Phulkari and traditional cuisine.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Handicrafts:</strong> GI protection for Phulkari embroidery.</li>
                        <li><strong>Food:</strong> Trademarks for packaged food brands (e.g., Papads, Wadiyan).</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework: Courts & Registries</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the legal landscape is crucial for enforcement.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Punjab & Haryana High Court</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Located in <strong>Chandigarh</strong>.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li><strong>Commercial Division:</strong> The High Court has a dedicated Commercial Division to hear IPR disputes.</li>
                        <li><strong>District Courts:</strong> Designated Commercial Courts in Ludhiana and other districts handle suits valued above specified limits.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. The Trade Marks Registry, Delhi</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Located at <strong>Dwarka, New Delhi</strong>.
                      </p>
                      <p className="text-gray-700">
                        <strong>Jurisdiction:</strong> Punjab falls under the jurisdiction of the Delhi Registry.
                        <br />
                        <strong>Our Role:</strong> We manage the entire filing and hearing process at the Delhi Registry for our Punjab clients, ensuring zero hassle.
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
                        <span className="text-4xl mr-4">🏏</span>
                        <h3 className="text-2xl font-bold text-gray-900">Sports Goods</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the manufacturers in Jalandhar.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Global Branding</h4>
                          <p>Registering trademarks in key markets like UK, Australia, and USA via Madrid Protocol.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Product Design</h4>
                          <p>Protecting the shape and aesthetics of bats, balls, and protective gear.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">👕</span>
                        <h3 className="text-2xl font-bold text-gray-900">Textiles & Hosiery</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the garment industry in Ludhiana.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Brand Protection</h4>
                          <p>Stopping counterfeiters from selling cheap knock-offs of your winter wear brands.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Fabric Designs</h4>
                          <p>Registering unique knitting patterns and prints.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🚜</span>
                        <h3 className="text-2xl font-bold text-gray-900">Agro-Engineering</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For agricultural machinery manufacturers.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Utility Patents</h4>
                          <p>Protecting functional improvements in harvesters, seeders, and rotavators.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Subsidy Support</h4>
                          <p>Helping MSMEs claim the 75% patent filing subsidy.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration Process (Jurisdiction: Delhi)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We handle the complete lifecycle of your IP application.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Consultation & Search</h3>
                      <p className="text-gray-700">
                        We assess your IP assets and conduct a thorough search to check for existing rights.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Filing</h3>
                      <p className="text-gray-700">
                        We prepare and file the application at the Delhi Registry. For patents, we work with technical experts to draft claims.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Examination</h3>
                      <p className="text-gray-700">
                        We respond to office actions and examination reports to overcome objections.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Grant</h3>
                      <p className="text-gray-700">
                        Upon successful registration, we help you maintain and renew your IP rights.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement: Zero Tolerance for Fakes</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Protecting your market share is our priority.
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Legal Actions</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">1. Civil Suits:</span>
                        <span>Filing infringement suits in Commercial Courts in Ludhiana or Mohali for damages and injunctions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2. Criminal Complaints:</span>
                        <span>Working with the Punjab Police Economic Offences Wing to conduct raids on counterfeiters.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">3. Border Protection:</span>
                        <span>Registering IP with Customs to stop the export of fake goods from dry ports.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Government Support */}
                <section id="government-support" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Support: Punjab Industrial Policy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Punjab Government incentivizes innovation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Patent Reimbursement</h3>
                      <p className="text-green-800 mb-2">For MSMEs under the 2022 Policy:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>75% Subsidy</strong> on registration costs.</li>
                        <li>Cap of <strong>₹10 Lakh</strong> for domestic patents.</li>
                        <li>Cap of <strong>₹20 Lakh</strong> for international patents.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Startup Benefits</h3>
                      <p className="text-green-800 mb-2">For registered startups:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li>Fast-track examination of patent applications.</li>
                        <li>Access to IP facilitation centers.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common IP Mistakes in Punjab</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Design Rights</h3>
                        <p className="text-gray-700 text-sm">Hosiery manufacturers often fail to register their unique designs, allowing competitors to copy them legally.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Brand Dilution</h3>
                        <p className="text-gray-700 text-sm">Using generic names for sports goods makes it difficult to stop others from using similar names.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Punjab?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are your partners in growth and protection.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏭</div>
                      <h3 className="font-bold text-xl mb-2">Industry Focus</h3>
                      <p className="text-gray-600">Deep expertise in textiles, sports goods, and engineering sectors.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Practice</h3>
                      <p className="text-gray-600">Experienced in handling complex IP litigation at the Punjab & Haryana High Court.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💸</div>
                      <h3 className="font-bold text-xl mb-2">Subsidy Experts</h3>
                      <p className="text-gray-600">We guide you through the process of claiming government IP subsidies.</p>
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
                        "We export cricket bats to the UK. AMA Legal Solutions helped us register our trademark internationally. Now our brand is protected globally."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">J</div>
                        <div>
                          <p className="font-bold text-gray-900">Jasbir Singh</p>
                          <p className="text-sm text-gray-500">MD, Champion Sports</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our new bicycle pedal design was being copied by local workshops. AMA filed a design infringement suit and stopped them within weeks."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Sethi</p>
                          <p className="text-sm text-gray-500">Director, Sethi Cycles</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Business in Punjab</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Partner with the IP experts who understand Punjab's industry.
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
                    Get immediate assistance for trademark filing and litigation in Punjab.
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

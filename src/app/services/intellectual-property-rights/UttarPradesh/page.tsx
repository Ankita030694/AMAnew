import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Uttar Pradesh | IP Lawyers Noida & Lucknow",
  description:
    "Protect your business in UP. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Noida, Lucknow, Kanpur & Varanasi. Litigation support at Allahabad High Court.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/UttarPradesh',
  },
  openGraph: {
    title: "Intellectual Property Rights in Uttar Pradesh | IP Lawyers Noida & Lucknow",
    description: "Protect your business in UP. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Noida, Lucknow, Kanpur & Varanasi. Litigation support at Allahabad High Court.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/UttarPradesh",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Uttar Pradesh",
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
      "name": "Uttar Pradesh",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/UttarPradesh"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Uttar Pradesh: Securing Growth",
  "description": "Comprehensive guide to IPR protection in Uttar Pradesh. Learn about software patents in Noida, leather trademarks in Kanpur, and IP litigation at the Allahabad High Court.",
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
  "name": "IPR Services Uttar Pradesh",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert intellectual property legal services in Uttar Pradesh.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "780"
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
        "name": "Amit Dubey"
      },
      "reviewBody": "AMA Legal Solutions helped our IT startup in Noida secure a patent for our AI algorithm. Their team is very knowledgeable about software patents."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Mohd. Irfan"
      },
      "reviewBody": "We are leather exporters in Kanpur. AMA handled our trademark registration and helped us fight a counterfeit case in the local commercial court."
    }
  ]
};

export default function UttarPradeshIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "industrial-landscape", title: "UP's IP Landscape" },
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
    { label: "Uttar Pradesh", href: "/services/intellectual-property-rights/UttarPradesh" },
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
              Protect Your Business with <span className="text-[#D2A02A]">IPR Services in Uttar Pradesh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From Tech Startups in Noida to Leather Exports in Kanpur. We provide comprehensive legal protection for your intellectual assets across UP.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property in Uttar Pradesh: Bridging Tradition and Technology</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh is a state of contrasts, housing both the ancient craft hubs of Varanasi and the futuristic tech parks of Noida. As the state aims for a trillion-dollar economy, <strong>Intellectual Property Rights (IPR)</strong> have become central to its growth strategy.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are a software developer in Greater Noida, a leather manufacturer in Kanpur, or a handicraft exporter in Moradabad, your business relies on unique assets. Protecting these assets through Trademarks, Patents, and Copyrights is essential to prevent theft and ensure long-term profitability.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we understand the diverse needs of UP's industries. With our expertise in the <strong>Allahabad High Court</strong> and the <strong>Trademark Registry in Delhi</strong>, we offer robust legal protection for your brand and innovations.
                  </p>
                </section>

                {/* Industrial Landscape */}
                <section id="industrial-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Uttar Pradesh's IP Ecosystem</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "UP is a leader in Geographical Indications (GIs) with products like Banarasi Silk and Allahabad Surkha, alongside a booming IT sector in Noida."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Key regions and their specific IP needs:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Noida & Greater Noida: IT & Electronics</h3>
                      <p className="text-gray-600 mb-4">
                        The tech capital of UP.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>IT/SaaS:</strong> Software patents and copyright for code.</li>
                        <li><strong>Electronics:</strong> Patents for hardware innovations and circuit designs.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Kanpur & Agra: Leather</h3>
                      <p className="text-gray-600 mb-4">
                        Global hubs for leather goods.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Leather:</strong> Trademarks for export brands and Designs for footwear.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Varanasi & Lucknow: Handicrafts</h3>
                      <p className="text-gray-600 mb-4">
                        Centers of traditional art.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Textiles:</strong> GI protection for Banarasi Sarees and Chikankari.</li>
                        <li><strong>Handicrafts:</strong> Copyrights for artistic designs.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Ghaziabad & Meerut: Engineering</h3>
                      <p className="text-gray-600 mb-4">
                        Hubs for heavy engineering and sports goods.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Manufacturing:</strong> Patents for machinery and industrial tools.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework: Courts & Registries</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Navigating the legal system in UP requires local expertise.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Allahabad High Court</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        With benches in <strong>Prayagraj</strong> and <strong>Lucknow</strong>.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li><strong>Commercial Courts:</strong> Specialized Commercial Courts in districts like Gautam Buddha Nagar (Noida), Lucknow, and Kanpur handle IPR disputes.</li>
                        <li><strong>Jurisdiction:</strong> The High Court has the power to grant injunctions and hear appeals in IP matters.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. The Trade Marks Registry, Delhi</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Located at <strong>Dwarka, New Delhi</strong>.
                      </p>
                      <p className="text-gray-700">
                        <strong>Jurisdiction:</strong> Uttar Pradesh falls under the jurisdiction of the Delhi Registry.
                        <br />
                        <strong>Our Role:</strong> Our proximity to the Delhi Registry ensures we can handle filings and hearings for UP clients efficiently.
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
                        <span className="text-4xl mr-4">💻</span>
                        <h3 className="text-2xl font-bold text-gray-900">IT & Software</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the tech startups in Noida and Greater Noida.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Software Patents</h4>
                          <p>Protecting innovative algorithms and technical processes.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Copyrights</h4>
                          <p>Securing source code and user interface designs.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">👞</span>
                        <h3 className="text-2xl font-bold text-gray-900">Leather & Footwear</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the exporters of Kanpur and Agra.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">International Trademarks</h4>
                          <p>Protecting your brand in Europe and the US via Madrid Protocol.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Design Registration</h4>
                          <p>Protecting the unique shape and pattern of footwear.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🧵</span>
                        <h3 className="text-2xl font-bold text-gray-900">Handicrafts & Textiles</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the artisans of Varanasi, Lucknow, and Moradabad.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">GI Registration</h4>
                          <p>Helping producers register as authorized users of GIs like Banarasi Silk.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Brand Protection</h4>
                          <p>Preventing the sale of fake 'Banarasi' or 'Chikankari' products.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration Process (Jurisdiction: Delhi)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Since UP falls under the Delhi Registry, the process is streamlined.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Search</h3>
                      <p className="text-gray-700">
                        We conduct a comprehensive search to ensure your trademark or patent is unique.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Filing</h3>
                      <p className="text-gray-700">
                        We file the application online with the Delhi Registry, ensuring all UP-specific details are correct.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Examination</h3>
                      <p className="text-gray-700">
                        We reply to any objections raised by the Registrar within the stipulated time.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Hearing</h3>
                      <p className="text-gray-700">
                        Our attorneys attend hearings at the Dwarka office to defend your application.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Registration</h3>
                      <p className="text-gray-700">
                        Receive your certificate and enjoy 10 years of protection.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement: Combating Piracy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    UP has a large market, making it prone to counterfeiting.
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Our Enforcement Actions</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">1. Civil Injunctions:</span>
                        <span>Filing suits in Commercial Courts in Noida, Lucknow, or Kanpur to stop infringers.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2. Police Raids:</span>
                        <span>Coordinating with the UP Police to raid factories or shops selling fake goods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">3. Cease & Desist:</span>
                        <span>Sending legal notices to infringers as a first step to stop unauthorized use.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Government Support */}
                <section id="government-support" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Support: UP Industrial Policy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The UP Government actively supports IPR registration.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">IPR Reimbursement</h3>
                      <p className="text-green-800 mb-2">Under the 2022 Policy:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>50% Reimbursement</strong> on registration costs.</li>
                        <li>Maximum cap of <strong>₹1 Crore</strong>.</li>
                        <li>Covers Patents, Trademarks, Copyrights, and GIs.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Startup Support</h3>
                      <p className="text-green-800 mb-2">For StartInUP registered startups:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li>Additional financial assistance for domestic and international patent filings.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common IP Mistakes in UP</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Software Patents</h3>
                        <p className="text-gray-700 text-sm">Many Noida startups rely only on copyright, missing out on stronger patent protection for their core technology.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Unprotected Exports</h3>
                        <p className="text-gray-700 text-sm">Leather exporters often fail to register trademarks in destination countries, leading to brand theft abroad.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Uttar Pradesh?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We offer a blend of local understanding and national expertise.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Litigation Experts</h3>
                      <p className="text-gray-600">Proven track record in Allahabad High Court and District Commercial Courts.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Delhi Registry Access</h3>
                      <p className="text-gray-600">Seamless handling of filings at the Delhi Trademark Registry.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Subsidy Assistance</h3>
                      <p className="text-gray-600">We help you navigate the paperwork to claim the UP government's IPR subsidy.</p>
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
                        "We are a SaaS company in Noida. AMA Legal Solutions helped us patent our core algorithm and trademark our brand. Their advice on IP valuation was invaluable for our funding round."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rahul Verma</p>
                          <p className="text-sm text-gray-500">CEO, InnovateTech</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our family has been weaving Banarasi sarees for generations. AMA helped us get the Authorized User status for the GI tag, which has helped us get better prices for our authentic products."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh Ansari</p>
                          <p className="text-sm text-gray-500">Master Weaver, Varanasi</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Intellectual Property in Uttar Pradesh</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let your hard work be copied. Partner with UP's trusted IP experts today.
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
                    Get immediate assistance for trademark filing and litigation in Uttar Pradesh.
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

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
  "dateModified": "2024-11-27"
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
    { id: "manipur-ip-landscape", title: "Manipur's Unique IP Landscape" },
    { id: "gi-heritage", title: "Protecting GI Heritage" },
    { id: "our-services", title: "Our IPR Services" },
    { id: "registration-process", title: "Registration Process" },
    { id: "startup-policy", title: "Manipur Startup Policy" },
    { id: "legal-jurisdiction", title: "Legal Jurisdiction" },
    { id: "why-choose-us", title: "Why Choose AMA" },
    { id: "testimonials", title: "Success Stories" },
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
              IPR Services in <span className="text-[#D2A02A]">Manipur</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From Chak-Hao to Tech Startups. Securing the Intellectual Property of Manipur's innovators, weavers, and entrepreneurs.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Free Consultation
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Manipur Through Intellectual Property</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Manipur, known as the "Jewel of India," is a powerhouse of culture, biodiversity, and indigenous knowledge. From the unique **Chak-Hao (Black Rice)** to the intricate **Moirang Phee** textiles, the state possesses assets that are globally unique. Today, with the rise of the digital economy in **Imphal** and government support for startups, the need to protect these assets is greater than ever.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    **Intellectual Property Rights (IPR)** act as the guardian of this heritage and innovation. For a weaver in Bishnupur, a GI tag ensures their craft isn't imitated by power looms. For a software developer in Imphal, a copyright ensures their code isn't stolen. For an agro-entrepreneur exporting pineapple products, a trademark builds a brand that commands a premium.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions serves as a bridge, connecting the innovators of Manipur with the national legal framework. We provide specialized IPR services that respect tradition while embracing modern commerce.
                  </p>
                </section>

                {/* Manipur Landscape */}
                <section id="manipur-ip-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Manipur's Diverse IP Landscape</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The state's economy is unique, driven by agriculture, handlooms, and a budding startup ecosystem.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Handlooms & Handicrafts</h3>
                      <p className="text-gray-600 mb-4">
                        The backbone of the rural economy.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>**Geographical Indications (GI):** Protecting community rights over traditional designs like Shaphee Lanphee.</li>
                        <li>**Industrial Designs:** Securing new, contemporary textile patterns created by individual designers.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Agriculture & Food Processing</h3>
                      <p className="text-gray-600 mb-4">
                        Rich biodiversity with high export potential.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>**Trademarks:** Branding for packaged food products (e.g., King Chilli pickles, Black Rice flour).</li>
                        <li>**GI Authorized User:** Helping farmers register to use the official GI logos for Kachai Lemon and Sirarakhong Hathei.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Imphal Startup Hub</h3>
                      <p className="text-gray-600 mb-4">
                        A growing IT and service sector.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>**Copyrights:** Protecting software, mobile apps, and digital content.</li>
                        <li>**Trade Secrets:** Safeguarding business models and client lists.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Medicinal Plants</h3>
                      <p className="text-gray-600 mb-4">
                        Traditional knowledge meeting modern pharma.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>**Patents:** Protecting novel extraction processes or formulations derived from local flora (while respecting biodiversity laws).</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* GI Heritage */}
                <section id="gi-heritage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Manipur's GI Heritage</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Manipur has successfully registered several Geographical Indications. These are community rights that prevent outsiders from selling fake products using these names.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Key GI Tags of Manipur</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-blue-800 text-sm">
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <strong>Shaphee Lanphee</strong><br/>(Textile)
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <strong>Wangkhei Phee</strong><br/>(Textile)
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <strong>Moirang Phee</strong><br/>(Textile)
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <strong>Chak-Hao</strong><br/>(Black Rice)
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <strong>Kachai Lemon</strong><br/>(Agricultural)
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <strong>Sirarakhong Hathei</strong><br/>(Chilli)
                      </div>
                    </div>
                    <p className="mt-4 text-blue-900">
                      **How We Help:** We assist individual producers and farmers in registering as **"Authorized Users"**. This gives you the legal right to use the GI logo on your packaging, instantly validating your product's authenticity to buyers.
                    </p>
                  </div>
                </section>

                {/* Our Services */}
                <section id="our-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive IPR Services</h2>
                  <div className="space-y-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">®️</span>
                        <h3 className="text-2xl font-bold text-gray-900">Trademark Registration</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Your brand is your promise. We protect it.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Clearance Search</h4>
                          <p>Ensuring your brand name doesn't conflict with existing marks.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Kolkata Registry Filing</h4>
                          <p>Handling all filings with the jurisdictional office in Kolkata.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">©️</span>
                        <h3 className="text-2xl font-bold text-gray-900">Copyright & Media</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For Manipur's vibrant film and music industry.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Film & Music</h4>
                          <p>Registering scripts, lyrics, and sound recordings.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Software</h4>
                          <p>Source code protection for tech startups.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration Process: Simplified</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We handle the complexities so you can focus on your business.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Consultation & Search</h3>
                      <p className="text-gray-700">
                        We assess your IP needs and conduct a database search to ensure uniqueness.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Filing (Online)</h3>
                      <p className="text-gray-700">
                        We file your application digitally with the **Kolkata Trade Marks Registry**. You receive an application number immediately, allowing you to use the ™ symbol.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Examination</h3>
                      <p className="text-gray-700">
                        If the Registry raises objections, we draft a professional legal response to clear them.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Registration</h3>
                      <p className="text-gray-700">
                        Once processed and published, you receive your registration certificate, valid for 10 years.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Startup Policy */}
                <section id="startup-policy" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Manipur Startup Policy: IP Incentives</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Government of Manipur is actively supporting entrepreneurship. Recognized startups under the **Manipur Startup Scheme** can avail:
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Benefits</h3>
                    <ul className="list-disc pl-5 text-green-800 space-y-3">
                      <li>**Filing Fee Reimbursement:** Financial support for patent and trademark registration costs.</li>
                      <li>**Incubation:** Support from the **Manipur Technical University (MTU) IPR Cell** and **MASTEC** for IP awareness and filing.</li>
                    </ul>
                    <p className="mt-4 text-sm text-green-700">
                      *We guide you through the paperwork to claim these reimbursements.
                    </p>
                  </div>
                </section>

                {/* Legal Jurisdiction */}
                <section id="legal-jurisdiction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Jurisdiction: Kolkata vs Imphal</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    It is crucial to know where to file what.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Administration: Kolkata</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        The **Trade Marks Registry in Kolkata** handles all IP filings (Trademark, Patent, Design, Copyright) for Manipur.
                      </p>
                      <p className="text-gray-700">
                        We manage this remotely. You do not need to travel to Kolkata. Our attorneys represent you for any hearings via video conferencing or physical presence if required.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Enforcement: High Court of Manipur</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        For disputes (e.g., if someone in Imphal is selling fake goods with your brand), the **High Court of Manipur** in Imphal has jurisdiction.
                      </p>
                      <p className="text-gray-700">
                        We can file infringement suits and seek injunctions locally to stop the illegal activity.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We understand the unique context of the North East.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌏</div>
                      <h3 className="font-bold text-xl mb-2">Regional Focus</h3>
                      <p className="text-gray-600">Deep understanding of GI products and local industries.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="font-bold text-xl mb-2">100% Digital</h3>
                      <p className="text-gray-600">Seamless filing process from the comfort of your home in Manipur.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="font-bold text-xl mb-2">Startup Support</h3>
                      <p className="text-gray-600">Expert guidance on leveraging the Manipur Startup Policy.</p>
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
                        "AMA Legal Solutions helped our cooperative society understand the GI tag process for our handloom products. Their guidance was invaluable."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">I</div>
                        <div>
                          <p className="font-bold text-gray-900">Ibomcha Singh</p>
                          <p className="text-sm text-gray-500">Secretary, Moirang Weavers Co-op</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I run a food processing startup in Imphal. They registered my trademark quickly and explained the benefits of the startup policy clearly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">L</div>
                        <div>
                          <p className="font-bold text-gray-900">Linda Devi</p>
                          <p className="text-sm text-gray-500">Founder, Organic Hills</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Rights Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let your hard work be copied. Partner with the IP experts for Manipur.
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
                    Get immediate assistance for trademark filing and objections in Manipur.
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
            <GenericStatesGrid serviceName="Intellectual Property Rights" servicePath="intellectual-property-rights" />
          </div>
        </div>
      </div>
    </>
  );
}

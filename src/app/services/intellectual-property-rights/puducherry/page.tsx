import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Puducherry | Trademark & Patent Attorneys",
  description:
    "Secure your brand in Puducherry. AMA Legal Solutions offers expert IPR services for Tourism, Handicrafts (GI Tags), and Pharma industries. Litigation support at Madras High Court.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/intellectual-property-rights/puducherry',
  },
  openGraph: {
    title: "Intellectual Property Rights in Puducherry | Trademark & Patent Attorneys",
    description: "Secure your brand in Puducherry. AMA Legal Solutions offers expert IPR services for Tourism, Handicrafts (GI Tags), and Pharma industries.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/puducherry",
    type: "website",
    images: [
      {
        url: "/services/ipr-puducherry.jpg",
        width: 1200,
        height: 630,
        alt: "IPR Services Puducherry",
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
      "name": "Intellectual Property Rights",
      "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Puducherry",
      "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights/puducherry"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Puducherry: Protecting Heritage & Innovation",
  "description": "Comprehensive IPR guide for Puducherry. Covering GI Tags for Terracotta, Trademark Registration for Hotels, and Patents for Pharma innovation.",
  "image": "https://www.amalegalsolutions.com/services/ipr-puducherry.jpg",
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
  "datePublished": "2023-11-26",
  "dateModified": "2026-01-20"
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Intellectual Property Rights in Puducherry",
  "description": "Expert legal services for Trademark, Patent, and Copyright registration in Puducherry, serving tourism, handicrafts, and industrial sectors.",
  "mainEntity": {
    "@type": "Service",
    "serviceType": "Legal Services",
    "areaServed": {
      "@type": "State",
      "name": "Puducherry"
    },
    "provider": {
      "@type": "LegalService",
      "name": "AMA Legal Solutions",
      "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110075",
        "addressCountry": "IN"
      },
      "telephone": "+918700343611"
    }
  }
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "IPR Legal Services Puducherry",
  "image": "https://www.amalegalsolutions.com/services/ipr-puducherry.jpg",
  "description": "Specialized Intellectual Property Rights services for Puducherry industries including Tourism, Handicrafts, and Pharma.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "215"
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
        "name": "Anand Kumar"
      },
      "reviewBody": "Excellent service for trademark registration in Puducherry. The team guided me through the entire process seamlessly and handled the objections very professionally."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Thomas"
      },
      "reviewBody": "Very knowledgeable about patent filing. They helped us secure our invention with great professionalism. Highly recommended for any startup in Puducherry."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "R. Velmurugan"
      },
      "reviewBody": "We needed help with GI certification for our handicraft society. AMA Legal Solutions not only did the legal work but also educated our artisans on how to use the tag effectively."
    }
  ]
};

export default function PuducherryIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "importance-ipr", title: "Why IPR Matters Here" },
    { id: "tourism-brands", title: "Tourism & Hospitality" },
    { id: "handicrafts-gi", title: "Handicrafts & GI Tags" },
    { id: "pharma-patents", title: "Pharma Innovation" },
    { id: "trademark-process", title: "Trademark Registration" },
    { id: "patent-design", title: "Patents & Designs" },
    { id: "legal-framework", title: "Courts & Jurisdiction" },
    { id: "govt-subsidies", title: "Government Support" },
    { id: "why-ama", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Puducherry", href: "/services/intellectual-property-rights/puducherry" },
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
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
            style={{ backgroundImage: "url('/services/ipr-puducherry.jpg')", backgroundColor: "#1e293b" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Intellectual Property Services in <span className="text-[#D2A02A]">Puducherry</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Protecting the unique blend of Heritage and Innovation. From the iconic Heritage Hotels of White Town to the Biotech Labs of PIPDIC, we secure your ideas and brands.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Book a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full px-4 lg:px-12 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
                    <span className="relative z-10">Securing Innovation in the French Riviera of the East</span>
                    <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#D2A02A]"></span>
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Puducherry is a unique Union Territory that seamlessly blends French colonial heritage with Tamil culture, and traditional craftsmanship with modern industrial prowess. From the bustling industrial estates of **Sedarapet** and **Mettupalayam** to the serene, innovative community of **Auroville**, the region is a hub of creativity.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In such a diverse economy, **Intellectual Property Rights (IPR)** serve as the foundation for growth. Whether you are preserving an age-old handicraft technique or developing a new pharmaceutical formulation, legal protection ensures that you reap the full commercial benefits of your work.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    **AMA Legal Solutions** provides specialized IPR services tailored to Puducherry's specific landscape. We bridge the gap between local businesses and the national IP framework, ensuring that your rights are protected without the need for you to navigate complex legal bureaucracies alone.
                  </p>
                </section>

                {/* Importance IPR */}
                <section id="importance-ipr" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why IPR is Critical for Puducherry's Growth</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                    <p className="text-lg text-blue-900 italic">
                      "For a tourist destination like Puducherry, distinctiveness is key. IP Laws allow you to own that distinctiveness."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The strategic importance of IP in Puducherry cannot be overstated:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
                    <li><strong>Brand Value:</strong> In the hospitality sector, a registered trademark effectively stops others from using similar names that confuse tourists and dilute your reputation.</li>
                    <li><strong>Asset Monetization:</strong> For startups in the IT and biotech sectors, patents are tradeable assets that attract venture capital and can be licensed for royalty income.</li>
                    <li><strong>Cultural Preservation:</strong> Geographical Indication (GI) tags protect the community rights of artisans, ensuring that mass-produced fakes do not destroy traditional livelihoods.</li>
                  </ul>
                </section>

                {/* Tourism Brands */}
                <section id="tourism-brands" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">🏨</span>
                    <h2 className="text-2xl font-bold text-gray-900">Tourism & Hospitality Sector</h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    White Town and the surrounding areas are dotted with heritage hotels, boutique cafes, and wellness retreats. The "Puducherry Experience" is a brand in itself.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Trademark Protection</h3>
                      <p className="text-gray-600 mb-4">
                        For Hotels, Restaurants, and Cafes (HORECA).
                      </p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li><strong>Service Marks (Class 43):</strong> Protecting the name and logo of your establishment.</li>
                        <li><strong>Menu Copyright:</strong> Protecting unique culinary descriptions and layout of your menu cards.</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Wellness & Spas</h3>
                      <p className="text-gray-600 mb-4">
                        For Yoga centers and Ayurvedic retreats.
                      </p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li><strong>Brand Name (Class 44):</strong> securing the identity of your wellness center.</li>
                        <li><strong>Proprietary Blends:</strong> Protecting trade secrets of unique oil blends or therapeutic processes.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Handicrafts GI */}
                <section id="handicrafts-gi" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">🏺</span>
                    <h2 className="text-2xl font-bold text-gray-900">Handicrafts & GI Tags</h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Puducherry is home to exquisite craftsmanship that has received global recognition.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-xl mb-4 text-gray-900">Protecting Traditional Art</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-[#D2A02A] mb-2">Villianur Terracotta Works</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          Famous for intricate intricate idols and decor made from local green clay. The GI tag ensures that only potters from the Villianur commune can sell under this name.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#D2A02A] mb-2">Thirukannur Papier Mâché</h4>
                        <p className="text-sm text-gray-700 mb-4">
                          Known for vibrant dolls and utility items. We assist artisan societies in maintaining these GI registrations and filing enforcement actions against fakes.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-semibold text-gray-800">
                        <span className="text-[#D2A02A]">Our Role:</span> We help individual artisans register as "Authorized Users" of these GI tags, giving them the legal right to use the GI logo on their products.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Pharma Patents */}
                <section id="pharma-patents" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">💊</span>
                    <h2 className="text-2xl font-bold text-gray-900">Pharma & Industrial Innovation</h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The PIPDIC Industrial Estates host numerous pharmaceutical and formulation companies. In this high-stakes industry, patent protection is not optional-it is survival.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h3 className="font-bold text-lg mb-2">Process Patents</h3>
                      <p className="text-gray-700">Protecting novel manufacturing processes that improve yield or purity.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-bold text-lg mb-2">Product Patents</h3>
                      <p className="text-gray-700">Securing exclusive rights for new chemical entities (NCEs) or novel formulations.</p>
                    </div>
                  </div>
                </section>

                {/* Trademark Process */}
                <section id="trademark-process" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Trademark Registration Process</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    We have streamlined the registration process for Puducherry businesses, handling everything digitally through our Delhi office.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Consultation</h3>
                      <p className="text-gray-700">
                        We identify the right classes (Nice Classification) for your business. E.g., Class 25 for clothing, Class 35 for retail stores.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Search</h3>
                      <p className="text-gray-700">
                        A rigorous search to ensure your brand name isn't already taken by someone in Chennai or elsewhere.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Filing</h3>
                      <p className="text-gray-700">
                        We file the TM-A form online. You get a TM Application Number within 24 hours, which allows you to start using the ™ symbol.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Prosecution</h3>
                      <p className="text-gray-700">
                        We handle all legal correspondence, including replying to examination reports and attending hearings via video conferencing.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Patents & Designs */}
                <section id="patent-design" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Patents & Industrial Designs</h2>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Design Registration</h3>
                    <p className="text-gray-700 mb-4">
                      For manufacturers of furniture, toys, and packaged goods, aesthetic appeal is a key selling point. Design registration protects the **shape, configuration, pattern, or ornament** of your product.
                    </p>
                    <p className="text-sm text-gray-500">
                      *Ideal for Puducherry's ceramic and furniture makers.*
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Patent Filing</h3>
                    <p className="text-gray-700">
                      We assist inventors in drafting comprehensive patent specifications. Our team includes technical experts who understand engineering and chemical domains, ensuring that your claims are robust and defensible.
                    </p>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Jurisdiction & Courts</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the legal venue is crucial for enforcement.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Madras High Court</h3>
                      <p className="text-gray-700">
                        The **Madras High Court** in Chennai has jurisdiction over Puducherry for IPR matters. It is one of the few courts in India with a dedicated **Intellectual Property Division (IPD)**, ensuring specialized and faster adjudication of disputes.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">The Patent & Trademark Office, Chennai</h3>
                      <p className="text-gray-700">
                        Puducherry falls under the jurisdiction of the Chennai IP Office. However, as your attorneys, we manage all filings and hearings digitally, so you never have to travel for administrative tasks.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Government Subsidies */}
                <section id="govt-subsidies" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Government Support Schemes</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Government of Puducherry actively supports innovation through financial incentives.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">IP Protection Support</h3>
                      <p className="text-green-800 mb-2">Under the Industries Department scheme:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>50% Reimbursement</strong> of patent registration expenditure.</li>
                        <li>Max cap of <strong>₹2 Lakhs</strong> for domestic patents.</li>
                        <li>Max cap of <strong>₹5 Lakhs</strong> for international patents.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Start-up Puducherry</h3>
                      <p className="text-green-800 mb-4">
                        Recognized startups avail special benefits including 80% fee rebate on patent filings and facilitation support from the Startup Cell.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🖥️</div>
                      <h3 className="font-bold text-xl mb-2">Digital First</h3>
                      <p className="text-gray-600">We offer 100% digital services. File your TM or Patent from the comfort of your office in Puducherry.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Ready</h3>
                      <p className="text-gray-600">Our association with senior counsels at Madras High Court ensures top-tier litigation support.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💸</div>
                      <h3 className="font-bold text-xl mb-2">Subsidy Experts</h3>
                      <p className="text-gray-600">We guide you through the paperwork to claim your 50% government reimbursement.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We run a chain of French cafes in White Town. AMA Legal Solutions helped us trademark our brand name and even protected our unique menu design. Professional and efficient."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">J</div>
                        <div>
                          <p className="font-bold text-gray-900">Jean-Luc P.</p>
                          <p className="text-sm text-gray-500">Owner, Café de Pondy</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a software startup in Auroville, protecting our code was a priority. The team cleared all our doubts about copyright vs patenting software and handled the filing perfectly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Nair</p>
                          <p className="text-sm text-gray-500">Tech Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Protect Your Brand?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Join hundreds of Puducherry businesses who trust AMA Legal Solutions for their Intellectual Property needs.
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
                      Serving Puducherry • Karaikal • Mahe • Yanam
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Talk to Expert Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#D2A02A]"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to an IP Expert</h3>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👨‍⚖️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Specialist for</p>
                    <p className="font-bold text-gray-900">Puducherry Region</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Get immediate advice on Trademark availability, Patentability, or GI registration.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-md"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-gray-50 text-gray-900 border-2 border-gray-200 text-center py-3 rounded-xl font-bold hover:border-[#D2A02A] hover:text-[#D2A02A] transition-all"
                  >
                    Request Callback
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400 font-medium">CONFIDENTIAL & FREE</p>
                </div>
              </div>

              {/* Review Snippet */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-[#D2A02A]">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-400">5.0/5.0</span>
                </div>
                <p className="text-gray-700 italic text-sm mb-4">
                  "They handled our GI certification for the handicraft society with remarkable efficiency. Truly experts in the field."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 mr-3">RV</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">R. Velmurugan</p>
                    <p className="text-xs text-gray-500">Artisan Society Head</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A] transition-colors"></span>
                      Corporate Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A] transition-colors"></span>
                      Litigation Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber-crime" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A] transition-colors"></span>
                      Cyber Crime
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Trademark Registration" 
              servicePath="intellectual-property-rights"
              customSlugs={{
                "Delhi": "delhi",
                "Gujarat": "gujarat",
                "Maharashtra": "maharashtra",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Tamil Nadu": "tamil-nadu",
                "Uttar Pradesh": "uttar-pradesh",
                "Puducherry": "puducherry"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

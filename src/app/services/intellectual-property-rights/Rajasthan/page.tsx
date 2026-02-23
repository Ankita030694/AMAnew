import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Rajasthan | Jaipur, Jodhpur & Udaipur IP Lawyers",
  description:
    "Secure your brand in Rajasthan. AMA Legal Solutions offers expert IPR services for Jewelry, Handicrafts (GI Tags), and Tourism industries. Ahmedabad Registry & High Court support.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/Rajasthan',
  },
  openGraph: {
    title: "Intellectual Property Rights in Rajasthan | Jaipur, Jodhpur & Udaipur IP Lawyers",
    description: "Secure your brand in Rajasthan. AMA Legal Solutions offers expert IPR services for Jewelry, Handicrafts (GI Tags), and Tourism industries.",
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
  "description": "Comprehensive IPR guide for Rajasthan. Covering GI Tags for Blue Pottery, Trademark Registration for Hotels, and Copyrights for Textile Prints.",
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
  "dateModified": "2026-01-20"
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Intellectual Property Rights in Rajasthan",
  "description": "Expert legal services for Trademark, Patent, and Copyright registration in Rajasthan, serving Jaipur, Jodhpur, Udaipur, and Kota.",
  "mainEntity": {
    "@type": "Service",
    "serviceType": "Legal Services",
    "areaServed": {
      "@type": "State",
      "name": "Rajasthan"
    },
    "provider": {
      "@type": "LegalService",
      "name": "AMA Legal Solutions",
      "image": "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
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
  "name": "IPR Legal Services Rajasthan",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Specialized Intellectual Property Rights services for Rajasthan industries including Gems & Jewelry, Handicrafts, and Tourism.",
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
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Rathore"
      },
      "reviewBody": "Our startup in Kota needed patent guidance. The way AMA handled the 75% reimbursement process with iStart Rajasthan was smooth and professional."
    }
  ]
};

export default function RajasthanIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-ipr-rajasthan", title: "Why IPR Matters" },
    { id: "regional-focus", title: "Regional Industries" },
    { id: "gi-tags-heritage", title: "GI Tags & Heritage" },
    { id: "tourism-hospitality", title: "Tourism & Hotels" },
    { id: "trademark-process", title: "Registration Process" },
    { id: "legal-framework", title: "Courts & Jurisdiction" },
    { id: "govt-subsidies", title: "Govt Subsidies (75%)" },
    { id: "why-choose-ama", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Stories" },
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
            style={{ backgroundImage: "url('/services/4.png')", backgroundColor: "#1e293b" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Intellectual Property Services in <span className="text-[#D2A02A]">Rajasthan</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Safeguarding the Land of Kings. From the Jewelry markets of Johari Bazaar in Jaipur to the Heritage Hotels of Udaipur, we protect your legacy.
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
                    <span className="relative z-10">Protecting Rajasthan's Cultural & Commercial Wealth</span>
                    <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#D2A02A]"></span>
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rajasthan is a globally recognized brand in itself, synonymous with royalty, vibrant culture, and exquisite craftsmanship. However, the modern economy of the state is equally dynamic, driven by **Textile Exports from Jaipur**, **Furniture Manufacturing in Jodhpur**, **Food Processing in Bikaner**, and a rapidly growing **EdTech and Startup ecosystem in Kota**.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In such a high-value market, **Intellectual Property Rights (IPR)** are the only line of defense against imitation. Whether you are a master craftsman looking to stop cheap knock-offs or a startup founder in the iStart program, securing your creations is essential for long-term survival.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    **AMA Legal Solutions** brings specialized legal expertise to the desert state. We help businesses across the Marwar, Mewar, and Shekhawati regions secure their brands and innovations, ensuring that your hard work translates into legally protected assets.
                  </p>
                </section>

                {/* Why IPR Matters */}
                <section id="why-ipr-rajasthan" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why IPR is Critical for Rajasthan's Economy</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                    <p className="text-lg text-blue-900 italic">
                      "From 'Bikaneri Bhujia' to 'Kota Doria', Rajasthan's identity is its biggest asset. Legal protection turns this identity into a monopoly."
                    </p>
                  </div>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
                    <li><strong>Export Protection:</strong> For textile and jewelry exporters, a registered Trademark or Design prevents international buyers from sourcing cheaper copies from other countries.</li>
                    <li><strong>Brand Premium:</strong> Tourists pay a premium for "Authentic" Rajasthani culture. Registration certifies that authenticity.</li>
                    <li><strong>Startup Valuation:</strong> For startups in Jaipur and Kota, a patent portfolio significantly increases valuation during funding rounds.</li>
                  </ul>
                </section>

                {/* Regional Focus */}
                <section id="regional-focus" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Focus: Tailored Legal Solutions</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Jaipur: The Pink City</h3>
                      <p className="text-gray-600 mb-4 font-medium">Focus: Gems, Jewelry & Textiles</p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li><strong>Jewelry Designs:</strong> Protecting unique settings and cuts under the Designs Act.</li>
                        <li><strong>Block Prints:</strong> Copyrighting unique Sanganeri and Bagru print patterns.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Jodhpur: The Blue City</h3>
                      <p className="text-gray-600 mb-4 font-medium">Focus: Furniture & Handicrafts</p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li><strong>Furniture Design:</strong> Registering the shape and aesthetic of export-quality wooden furniture.</li>
                        <li><strong>Brand Marks:</strong> Trademarking export houses for international recognition.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Bikaner: The Food Hub</h3>
                      <p className="text-gray-600 mb-4 font-medium">Focus: Savories & Sweets</p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li><strong>Recipe Secrets:</strong> Protecting trade secrets of spice mixes.</li>
                        <li><strong>Packaging:</strong> Trademarking unique packaging designs for Bhujia and Rasgulla exports.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Kota & Udaipur</h3>
                      <p className="text-gray-600 mb-4 font-medium">Focus: Education & Hospitality</p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li><strong>Course Material:</strong> Copyright protection for coaching institute study materials.</li>
                        <li><strong>Hotel Brands:</strong> Protecting heritage hotel names from misuse by budget lodges.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* GI Tags & Heritage */}
                <section id="gi-tags-heritage" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">🏺</span>
                    <h2 className="text-2xl font-bold text-gray-900">Geographical Indications (GI) & Heritage</h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A GI tag is a powerful tool that certifies a product belongs to a specific region. Rajasthan has some of the most famous GIs in India.
                  </p>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-xl mb-4 text-gray-900">Famous GIs We Help Protect</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="font-bold text-orange-900 mb-1">Blue Pottery</div>
                        <div className="text-xs text-orange-700">Jaipur</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="font-bold text-orange-900 mb-1">Kota Doria</div>
                        <div className="text-xs text-orange-700">Kota</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="font-bold text-orange-900 mb-1">Thewa Art</div>
                        <div className="text-xs text-orange-700">Pratapgarh</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="font-bold text-orange-900 mb-1">Sojat Mehndi</div>
                        <div className="text-xs text-orange-700">Pali</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="font-bold text-orange-900 mb-1">Bikaneri Bhujia</div>
                        <div className="text-xs text-orange-700">Bikaner</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="font-bold text-orange-900 mb-1">Kathputlis</div>
                        <div className="text-xs text-orange-700">Rajasthan</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-sm font-semibold text-gray-800">
                        <span className="text-[#D2A02A]">Are you an artisan?</span> You must register as an "Authorized User" under the GI Act to legally use the GI tag on your packaging. We handle this entire certification process for artisan societies and individual craftsmen.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Tourism & Hospitality */}
                <section id="tourism-hospitality" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">🏰</span>
                    <h2 className="text-2xl font-bold text-gray-900">Tourism & Hospitality Law</h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For heritage hotels (Havelis) and travel agencies, your brand name is your reputation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h3 className="font-bold text-lg mb-2">Trademark Strategy</h3>
                      <p className="text-gray-700">
                        We register your hotel's name under **Class 43** (Services for providing food and drink; temporary accommodation). This prevents other businesses from opening "budget" versions of your hotel with a confusingly similar name.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-bold text-lg mb-2">Copyright for Events</h3>
                      <p className="text-gray-700">
                        Destination weddings are big business in Rajasthan. We help event planners copyright their unique stage designs and wedding themes to prevent competitors from copying their portfolio.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Trademark Process */}
                <section id="trademark-process" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Process (Jurisdiction: Ahmedabad)</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Rajasthan falls under the jurisdiction of the **steps Trademark Registry in Ahmedabad**. You do not need to travel to Ahmedabad; our team manages everything digitally.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Name Selection & Class</h3>
                      <p className="text-gray-700">
                        We help you choose a distinct name and the correct class (e.g., Class 25 for Textiles, Class 30 for Sweets).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Ahmedabad Search</h3>
                      <p className="text-gray-700">
                        We conduct a specific search in the Ahmedabad Registry database to ensure no conflicting marks exist in the western region.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Digital Filing</h3>
                      <p className="text-gray-700">
                        We file the TM-A form online. You receive an acknowledgment receipt instantly and can start using the ™ symbol.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Legal Defense</h3>
                      <p className="text-gray-700">
                        If the Examiner raises an objection (Section 9 or 11), we draft a legal reply citing relevant case laws.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Courts & Legal Jurisdiction</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When infringement happens, you need to know where to fight.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#D2A02A]">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Rajasthan High Court</h3>
                      <p className="text-gray-700">
                        The High Court (Principal Seat at **Jodhpur** and Bench at **Jaipur**) handles significant IP disputes. The court is known for proactively grating injunctions (stay orders) to protect heritage brands and registered trademarks.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Courts</h3>
                      <p className="text-gray-700">
                        For faster resolution, disputes valued above ₹3 Lakhs are heard in specialized Commercial Courts at the District Judge level in Jaipur and other major districts.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Govt Subsidies */}
                <section id="govt-subsidies" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Government Subsidies: 75% Reimbursement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The **Rajasthan IPR Policy** & **iStart Rajasthan** program offer massive financial support to encourage innovation.
                  </p>

                  <div className="bg-green-50 border border-green-200 rounded-xl overflow-hidden">
                    <div className="bg-green-600 text-white px-6 py-4">
                      <h3 className="text-xl font-bold">Patent Assistance Scheme</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <p className="text-green-800 font-bold mb-2">For Startups & MSMEs:</p>
                          <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li><strong>75% Subsidy</strong> on Patent Filing Fees and Attorney Fees.</li>
                            <li>Max reimbursement of <strong>₹2 Lakhs</strong> for Indian Patents.</li>
                            <li>Max reimbursement of <strong>₹5 Lakhs</strong> for International Patents.</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-green-800 font-bold mb-2">How We Help:</p>
                          <p className="text-gray-700">
                            We don't just file your patent; we manage the entire paperwork to claim this subsidy from the Rajasthan Department of Science & Technology (DST) or the iStart portal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Rajasthan Trusts AMA Legal Solutions</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="font-bold text-xl mb-2">iStart Facilitators</h3>
                      <p className="text-gray-600">We are experts in leveraging the iStart Rajasthan portal for IP subsidies.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🖐️</div>
                      <h3 className="font-bold text-xl mb-2">Handicraft Specialists</h3>
                      <p className="text-gray-600">Deep understanding of GI laws protecting traditional artisans and exporters.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="font-bold text-xl mb-2">Virtual Office</h3>
                      <p className="text-gray-600">Managing your Ahmedabad Registry work without you ever leaving Jaipur.</p>
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
                        "Exporting our Sanganeri block prints was risky until we registered our designs. AMA Legal Solutions handled everything very professionally. Now we export to Europe with confidence."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Meera Khandelwal</p>
                          <p className="text-sm text-gray-500">Textile Exporter, Jaipur</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "For our EdTech startup in Kota, patents were crucial for valuation. The team not only filed the patents but helped us get 75% money back through the iStart scheme."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Rathore</p>
                          <p className="text-sm text-gray-500">Founder, KotaSmart</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Brand in Rajasthan</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Trusted by 600+ businesses across Jaipur, Jodhpur, and Udaipur.
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
                      Serving Jaipur • Jodhpur • Udaipur • Kota • Bikaner
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to an RJ Expert</h3>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👨‍⚖️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Specialist for</p>
                    <p className="font-bold text-gray-900">Rajasthan Region</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Get advice on iStart subsidies, GI registration, or Trademark filing in Ahmedabad.
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
                  "AMA Legal Solutions helped us trademark our heritage hotel brand in Udaipur. Their knowledge of the tourism industry's legal needs is excellent."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 mr-3">RS</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Rajendra Singh</p>
                    <p className="text-xs text-gray-500">Hotel Owner, Udaipur</p>
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
                "Delhi": "Delhi",
                "Gujarat": "Gujarat",
                "Maharashtra": "Maharashtra",
                "Punjab": "Punjab",
                "Rajasthan": "Rajasthan",
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

import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "IPR Services in Odisha | Trademark, Patent & GI Registration",
  description:
    "Expert Intellectual Property Rights (IPR) services in Odisha. We assist with Trademark, Patent, Copyright, and GI registration in Bhubaneswar, Cuttack & across the state. Protect your innovation today.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/intellectual-property-rights/odisha',
  },
  openGraph: {
    title: "IPR Services in Odisha | Trademark, Patent & GI Registration",
    description: "Expert Intellectual Property Rights (IPR) services in Odisha. We assist with Trademark, Patent, Copyright, and GI registration in Bhubaneswar, Cuttack & across the state. Protect your innovation today.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/odisha",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Odisha",
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
      "name": "Odisha",
      "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights/odisha"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Odisha: A Comprehensive Guide",
  "description": "Complete guide to IPR in Odisha, covering Trademarks, Patents, GI Tags, and Copyrights. Learn about the legal framework and registration process in the state.",
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
  "datePublished": "2023-11-24",
  "dateModified": "2023-11-24"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "IPR Services Odisha",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Professional IPR registration and legal services in Odisha.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "520"
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
        "name": "Suresh Mohanty"
      },
      "reviewBody": "AMA Legal Solutions guided us through the complex process of GI registration for our handicraft society in Puri. Their expertise in Odisha's cultural heritage laws is impressive."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Patnaik"
      },
      "reviewBody": "Best trademark lawyers in Bhubaneswar. They helped me register my startup's logo and protected it from infringement."
    }
  ]
};

export default function OdishaIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "importance-odisha", title: "Why IPR Matters in Odisha" },
    { id: "gi-tags", title: "GI Tags of Odisha" },
    { id: "trademark-registration", title: "Trademark Registration" },
    { id: "patent-services", title: "Patent Services" },
    { id: "copyright-protection", title: "Copyright Protection" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "our-process", title: "Our Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Odisha", href: "/services/intellectual-property-rights/odisha" },
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
              Protect Your Innovation with <span className="text-[#D2A02A]">IPR Services in Odisha</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Comprehensive legal support for Trademark, Patent, Copyright, and GI Registration in Bhubaneswar, Cuttack, and across Odisha. Safeguarding the unique heritage and modern innovation of the state.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Consultation
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights: Empowering Odisha's Growth</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha, known for its rich cultural heritage and rapidly expanding industrial base, stands at a unique intersection of tradition and modernity. From the ancient temples of Bhubaneswar to the bustling IT parks and steel plants, the state is a hub of creativity and innovation. In this dynamic environment, Intellectual Property Rights (IPR) serve as the critical infrastructure protecting the intangible assets that drive economic value.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we recognize the distinct needs of Odisha's entrepreneurs, artisans, and corporations. Whether it is securing the brand identity of a startup in Bhubaneswar, patenting a new metallurgical process in Rourkela, or obtaining a Geographical Indication (GI) tag for a tribal craft in Koraput, our mission is to provide world-class legal protection.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We work closely with the <strong>Patent Information Centre (PIC)</strong> under the Science & Technology Department, Government of Odisha, to facilitate seamless registration and enforcement of IP rights. Our goal is to ensure that the fruits of Odisha's intellect remain in the hands of its creators.
                  </p>
                </section>

                {/* Importance in Odisha */}
                <section id="importance-odisha" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why IPR is Crucial for Odisha's Industries</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "From the weavers of Sambalpur to the coders of Bhubaneswar, IPR is the shield that protects Odisha's creative and industrial output from exploitation."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha's economy is diverse, and IPR plays a vital role across various sectors:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Handloom & Textiles</h4>
                      <p className="text-gray-600">Odisha's Sambalpuri and Ikat fabrics are world-renowned. GI tags and trademarks are essential to prevent cheap power-loom imitations from flooding the market and undercutting traditional weavers.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Mining & Metallurgy</h4>
                      <p className="text-gray-600">As a mineral-rich state, innovations in extraction and processing technologies need patent protection to maintain a competitive edge in the global market.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">IT & Startups</h4>
                      <p className="text-gray-600">Bhubaneswar is emerging as a major IT hub. Software patents and copyright protection for code are crucial for tech companies to secure funding and scale globally.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Tourism & Hospitality</h4>
                      <p className="text-gray-600">With a booming tourism sector, hotels and travel agencies need strong trademark protection to build trusted brands and avoid identity theft.</p>
                    </div>
                  </div>
                </section>

                {/* GI Tags */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Geographical Indications (GI): Odisha's Pride</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha has a stellar record in securing Geographical Indication (GI) tags, which link a product's quality and reputation to its specific geographical origin. These tags are not just legal tools but symbols of cultural pride and economic empowerment for rural communities.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Some of the most iconic GI-tagged products from Odisha that we help protect and promote include:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Odisha Rasagola:</strong> A sweet delight with a distinct texture and taste, historically offered to Lord Jagannath. Its GI tag ended a long-standing debate and affirmed its Odia origins.
                    </li>
                    <li>
                      <strong>Pattachitra of Odisha:</strong> An ancient cloth-based scroll painting form known for its intricate details and mythological narratives, originating from the heritage village of Raghurajpur.
                    </li>
                    <li>
                      <strong>Konark Stone Carving:</strong> The exquisite craftsmanship of stone sculptors in the Puri district, continuing the legacy of the Sun Temple.
                    </li>
                    <li>
                      <strong>Sambalpuri Bandha Saree:</strong> Famous for its tie-dye art (Bandha) and traditional motifs like the shell, wheel, and flower.
                    </li>
                    <li>
                      <strong>Kandhamal Haladi:</strong> An organic turmeric variety grown by tribal communities in Kandhamal, known for its high curcumin content and medicinal properties.
                    </li>
                    <li>
                      <strong>Silver Filigree of Cuttack (Tarakasi):</strong> The delicate and artistic silver work that has earned Cuttack the title of 'Silver City'.
                    </li>
                    <li>
                      <strong>Kotpad Handloom Fabric:</strong> A unique tribal textile from Koraput using natural dyes derived from the Aal tree.
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>How We Help:</strong> We assist artisan cooperatives and producer groups in filing GI applications, maintaining the registration, and taking legal action against unauthorized users who sell fake products under these prestigious names.
                  </p>
                </section>

                {/* Trademark Registration */}
                <section id="trademark-registration" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Trademark Registration in Odisha</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the competitive markets of Cuttack and Bhubaneswar, a registered trademark is your most valuable asset. It distinguishes your goods and services and builds lasting brand equity.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Registration Process</h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Trademark Search</h4>
                        <p className="text-gray-700">We conduct a thorough search in the IP India database to ensure your brand name is available. This prevents future legal disputes and rejection of your application.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Filing the Application</h4>
                        <p className="text-gray-700">We identify the correct class (1-45) for your business and file the application (Form TM-A) online. Once filed, you can start using the ™ symbol.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Examination & Reply</h4>
                        <p className="text-gray-700">If the Registrar raises an objection, we draft a comprehensive legal reply. Our expertise ensures a high success rate in overcoming common objections like "descriptive" or "similar" marks.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Registration Certificate</h4>
                        <p className="text-gray-700">After publication in the Trademark Journal and a 4-month opposition period, the registration certificate is issued. You can now use the ® symbol.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Patent Services */}
                <section id="patent-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Patent Registration: Securing Inventions</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For researchers at institutes like IIT Bhubaneswar, NIT Rourkela, and private innovators, patents are essential to monetize inventions. The <strong>Patent Information Centre (PIC)</strong> in Odisha provides initial support, but professional legal representation is crucial for drafting robust patent specifications.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our services include:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Novelty Search:</strong> Checking global patent databases to assess the patentability of your invention.</li>
                    <li><strong>Drafting Specifications:</strong> Writing precise Provisional and Complete Specifications to ensure maximum protection scope.</li>
                    <li><strong>Prosecution:</strong> Handling all correspondence with the Patent Office, including responding to Examination Reports and attending hearings.</li>
                  </ul>
                </section>

                {/* Copyright Protection */}
                <section id="copyright-protection" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Copyright Services for Creatives</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha is a land of art and culture. From Odissi dance music to contemporary Odia literature and cinema, the creative output is immense. Copyright law protects these original expressions from unauthorized use.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Important:</strong> Copyright exists from the moment of creation, but registration is prima facie evidence of ownership. It is vital for enforcing your rights in court and claiming damages for infringement.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist authors, musicians, software developers, and filmmakers in Odisha in registering their works with the Copyright Office. We also draft licensing agreements to help you monetize your creative assets effectively.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework & Enforcement in Odisha</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    While IPR laws are central, enforcement is local. The <strong>High Court of Orissa</strong> in Cuttack has jurisdiction over IPR disputes arising within the state.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Courts</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To expedite business disputes, including IPR cases, Commercial Courts have been notified in Odisha. These courts follow strict timelines for case disposal, ensuring faster justice for businesses facing trademark infringement or patent violations.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Police Action Against Counterfeits</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Odisha Police, empowered by the IPR Enforcement Rules, can conduct raids to seize counterfeit goods. We work with law enforcement to protect your brand from fakes in local markets, ensuring that your reputation remains untarnished.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine legal expertise with a deep understanding of Odisha's business and cultural landscape.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📍</div>
                      <h3 className="font-bold text-xl mb-2">Local Presence</h3>
                      <p className="text-gray-600">We understand the local market dynamics of Bhubaneswar, Cuttack, and Rourkela.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Litigation Ready</h3>
                      <p className="text-gray-600">We don't just file applications; we fight for your rights in the High Court of Orissa.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💼</div>
                      <h3 className="font-bold text-xl mb-2">Comprehensive Support</h3>
                      <p className="text-gray-600">From GI registration for artisans to patent filing for tech startups, we cover it all. We also provide post-registration monitoring to ensure your rights are not infringed upon by competitors.</p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Intellectual Property Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let your hard work go unprotected. Partner with Odisha's trusted IPR experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Start Your Registration
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Professional • Reliable
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need IPR Assistance?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our IPR experts in Odisha for a free preliminary consultation.
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
                      <Link href="/services/drafting" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Legal Drafting
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/cyber" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cyber Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Banking & Finance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Intellectual Property Rights" 
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

import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "IPR Services in Assam | Trademark, Patent & GI Registration",
  description:
    "Expert Intellectual Property Rights (IPR) services in Assam. We assist with Trademark, Patent, Copyright, and GI registration in Guwahati, Dibrugarh & across the state. Protect your innovation today.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/intellectual-property-rights/assam',
  },
  openGraph: {
    title: "IPR Services in Assam | Trademark, Patent & GI Registration",
    description: "Expert Intellectual Property Rights (IPR) services in Assam. We assist with Trademark, Patent, Copyright, and GI registration in Guwahati, Dibrugarh & across the state. Protect your innovation today.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/assam",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Assam",
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
      "name": "Assam",
      "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights/assam"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Assam: A Comprehensive Guide",
  "description": "Complete guide to IPR in Assam, covering Trademarks, Patents, GI Tags, and Copyrights. Learn about the legal framework and registration process in the state.",
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
  "name": "IPR Services Assam",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Professional IPR registration and legal services in Assam.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "450"
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
        "name": "Bipul Hazarika"
      },
      "reviewBody": "AMA Legal Solutions helped us register the GI tag for our traditional textile cooperative. Their knowledge of Assam's heritage and legal procedures is unmatched."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Das"
      },
      "reviewBody": "Excellent service for trademark registration in Guwahati. They handled the objection hearing professionally and got our brand registered."
    }
  ]
};

export default function AssamIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "importance-assam", title: "Why IPR Matters in Assam" },
    { id: "gi-tags", title: "GI Tags of Assam" },
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
    { label: "Assam", href: "/services/intellectual-property-rights/assam" },
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
              Protect Your Innovation with <span className="text-[#D2A02A]">IPR Services in Assam</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Comprehensive legal support for Trademark, Patent, Copyright, and GI Registration in Guwahati, Dibrugarh, and across Assam. Safeguarding the unique heritage and modern innovation of the North East.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights: The Shield for Assam's Growth</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Assam, the gateway to North East India, is currently witnessing a renaissance in both traditional industries and modern startups. From the sprawling tea gardens of Upper Assam to the tech hubs emerging in Guwahati, the need to protect intellectual assets has never been more critical. Intellectual Property Rights (IPR) are not just legal formalities; they are the bedrock of economic value in today's knowledge economy.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand the unique fabric of Assam's economy. We recognize that IPR in this region isn't just about corporate patents; it's about protecting the centuries-old legacy of Muga silk weavers in Sualkuchi, the unique aroma of Joha rice, and the brand identity of new-age entrepreneurs. Our mission is to make world-class IPR services accessible to every innovator, artist, and business owner in the state.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Whether you are a startup looking to trademark your logo, a researcher at IIT Guwahati filing a patent, or a cooperative society seeking a Geographical Indication (GI) tag, our team provides end-to-end legal support. We bridge the gap between local aspirations and global protection standards.
                  </p>
                </section>

                {/* Importance in Assam */}
                <section id="importance-assam" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why IPR is Crucial for Assam's Industries</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Assam's biodiversity and cultural heritage are its gold mines. IPR is the lock that keeps this gold safe from exploitation."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The economic landscape of Assam is diverse, and each sector faces specific challenges that IPR can address:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Tea Industry</h4>
                      <p className="text-gray-600">Assam Tea is a global brand. Protecting specific estate names and logos through trademarks prevents counterfeit products from diluting the brand's premium value in international markets.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Handloom & Textiles</h4>
                      <p className="text-gray-600">With products like Muga and Eri silk, the threat of cheap synthetic imitations is real. GI tags and trademarks help consumers distinguish authentic Assamese handloom from fakes.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Startups & Tech</h4>
                      <p className="text-gray-600">Guwahati is becoming a startup hub. For tech companies, patenting software algorithms and trademarking brand names is essential to attract venture capital and scale up.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Traditional Medicine</h4>
                      <p className="text-gray-600">Assam is rich in medicinal plants. Documenting and protecting traditional knowledge prevents biopiracy and ensures that local communities benefit from commercialization.</p>
                    </div>
                  </div>
                </section>

                {/* GI Tags */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Geographical Indications (GI): Assam's Pride</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Assam leads the North East in Geographical Indication (GI) registrations. A GI tag identifies a product as originating from a specific territory, where a given quality, reputation, or other characteristic is essentially attributable to its geographical origin. It is a powerful tool for rural development and preserving cultural heritage.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Some of the most iconic GI-tagged products from Assam that we help protect and promote include:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Muga Silk of Assam:</strong> Known as the "Golden Silk," it is endemic to Assam and renowned for its durability and natural shimmering gold color. It was the first product from the state to receive a GI tag.
                    </li>
                    <li>
                      <strong>Assam Orthodox Tea:</strong> Famous for its robust flavor and bright liquor, this tea is a staple in breakfast blends worldwide. The GI tag ensures that only tea grown and processed in the Assam region can carry this prestigious name.
                    </li>
                    <li>
                      <strong>Assam Gamosa:</strong> A symbol of Assamese culture and hospitality, the Gamosa received its GI tag to protect the traditional weavers from power-loom duplicates.
                    </li>
                    <li>
                      <strong>Joha Rice:</strong> A unique aromatic rice variety known for its delicate scent and taste, distinct from Basmati.
                    </li>
                    <li>
                      <strong>Tezpur Litchi:</strong> Renowned for its excellent quality and pleasant flavor, grown in the Tezpur region.
                    </li>
                    <li>
                      <strong>Kaji Nemu (Assam Lemon):</strong> A citrus fruit with a unique aroma and culinary importance, widely used in Assamese cuisine.
                    </li>
                    <li>
                      <strong>Chokuwa Rice (Magic Rice):</strong> A semi-glutinous rice that can be eaten after soaking in cold water, without cooking.
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>How We Help:</strong> We assist producer associations and cooperative societies in drafting the 'Statement of Case', collecting historical evidence, and filing GI applications. We also help in the post-registration phase, ensuring that authorized users are registered and that the GI logo is used correctly to maximize market value.
                  </p>
                </section>

                {/* Trademark Registration */}
                <section id="trademark-registration" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Trademark Registration in Assam</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A trademark is your brand's identity. It distinguishes your goods and services from those of your competitors. In a growing market like Assam, establishing a unique brand is the first step towards business success.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Registration Process</h3>
                  <div className="space-y-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Trademark Search</h4>
                        <p className="text-gray-700">Before filing, we conduct a comprehensive search in the IP India database to ensure your proposed brand name or logo is unique and doesn't conflict with existing marks. This saves time and money by avoiding rejection later.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Class Selection & Filing</h4>
                        <p className="text-gray-700">We help you identify the correct 'Class' of goods or services (out of 45 classes) for your business. We then draft and file the application (Form TM-A) online.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Examination & Reply</h4>
                        <p className="text-gray-700">The Trademark Registry examines the application. If they raise any objections (which is common), our attorneys draft a legal reply citing relevant case laws to overcome the objection.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Registration & Renewal</h4>
                        <p className="text-gray-700">Once accepted and published in the journal, if there is no opposition from third parties, the registration certificate is issued. The trademark is valid for 10 years and can be renewed indefinitely.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Patent Services */}
                <section id="patent-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Patent Registration: Securing Inventions</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For the scientific community and innovators in Assam, patents provide the exclusive right to exclude others from making, using, or selling an invention. The <strong>Patent Information Centre (PIC)</strong> under ASTEC plays a vital role, but navigating the legal complexities often requires specialized legal counsel.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist clients with:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Prior Art Search:</strong> Checking global databases to ensure your invention is truly novel.</li>
                    <li><strong>Patent Drafting:</strong> Writing the technical and legal specifications (Provisional and Complete) is an art. A well-drafted patent is the difference between strong protection and a weak one.</li>
                    <li><strong>Filing & Prosecution:</strong> We handle the entire process with the Indian Patent Office, including responding to First Examination Reports (FER) and attending hearings.</li>
                  </ul>
                </section>

                {/* Copyright Protection */}
                <section id="copyright-protection" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Copyright Services for Creatives</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Assam is a land of culture, music, and literature. From the timeless songs of Bhupen Hazarika to modern Assamese cinema and literature, the creative output is immense. Copyright protects these expressions of ideas.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Did You Know?</strong> Copyright registration is not mandatory for protection (it exists from the moment of creation), but it is crucial for enforcement. If someone copies your work, a registration certificate is the best proof of ownership in a court of law.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We help authors, musicians, software developers, and filmmakers in Assam register their works with the Copyright Office. We also draft licensing agreements and assignment deeds to help you monetize your creative assets safely.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework & Enforcement in Assam</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    IPR in India is governed by central statutes like the Trade Marks Act, 1999, The Patents Act, 1970, and The Copyright Act, 1957. However, enforcement is a local matter.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Role of Gauhati High Court</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Gauhati High Court</strong> has jurisdiction over IPR disputes arising in Assam. Whether it is a suit for infringement (violation of registered rights) or passing off (violation of unregistered goodwill), we represent clients effectively in these courts. We also seek interim injunctions (stay orders) to immediately stop the sale of counterfeit goods.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Police & Administrative Action</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Under the IPR (Imported Goods) Enforcement Rules, 2007, and various sections of the IPC, the police have the power to raid and seize counterfeit goods. We work with local law enforcement agencies to conduct raids against counterfeiters harming your brand in local markets like Fancy Bazar or Pan Bazar.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are not just a filing agency; we are legal strategists.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="font-bold text-xl mb-2">Deep Local Knowledge</h3>
                      <p className="text-gray-600">We understand the specific needs of Assam's industries, from tea gardens to tech startups.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Litigation Support</h3>
                      <p className="text-gray-600">Unlike online filing portals, we can represent you in court if your IP rights are challenged.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="font-bold text-xl mb-2">End-to-End Service</h3>
                      <p className="text-gray-600">From the initial search to final registration and renewal, we handle every step.</p>
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
                      Don't leave your hard work unprotected. Partner with Assam's trusted IPR experts.
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
                    Speak to our IPR experts in Assam for a free preliminary consultation.
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

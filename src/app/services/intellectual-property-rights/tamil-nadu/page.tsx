import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Tamil Nadu | IP Lawyers Chennai",
  description:
    "Protect your innovation in Tamil Nadu. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Chennai, Coimbatore & Tirupur. Litigation support at Madras High Court.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/tamil-nadu',
  },
  openGraph: {
    title: "Intellectual Property Rights in Tamil Nadu | IP Lawyers Chennai",
    description: "Protect your innovation in Tamil Nadu. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Chennai, Coimbatore & Tirupur. Litigation support at Madras High Court.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/tamil-nadu",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Tamil Nadu",
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
      "name": "Tamil Nadu",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/tamil-nadu"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Tamil Nadu: Secure Your Innovation",
  "description": "Comprehensive guide to IPR protection in Tamil Nadu. Learn about trademark registration in Guindy, patent filing for SaaS, and IP litigation at the Madras High Court.",
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
  "name": "IPR Services Tamil Nadu",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert intellectual property legal services in Tamil Nadu.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
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
        "name": "Karthik Raja"
      },
      "reviewBody": "AMA Legal Solutions helped our SaaS startup in OMR, Chennai, secure a patent for our core algorithm. Their understanding of software patents is exceptional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Lakshmi Narayanan"
      },
      "reviewBody": "We needed to protect our textile designs in Tirupur from copycats. The team guided us through design registration and helped us enforce our rights."
    }
  ]
};

export default function TamilNaduIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "industrial-hub", title: "Tamil Nadu's IP Landscape" },
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
    { label: "Tamil Nadu", href: "/services/intellectual-property-rights/tamil-nadu" },
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
              Protect Your Innovation with <span className="text-[#D2A02A]">IPR Services in Tamil Nadu</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From SaaS patents in Chennai to Textile designs in Tirupur. We provide comprehensive legal protection for your intellectual assets in India's manufacturing powerhouse.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Securing Intellectual Property in Tamil Nadu: The Innovation Engine</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Tamil Nadu is the second-largest economy in India and a global manufacturing hub. With a diverse industrial base ranging from automobiles in Chennai ("Detroit of Asia") to textiles in Tirupur and software in OMR, the state is a hotbed of innovation. But with innovation comes the risk of imitation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Intellectual Property Rights (IPR)</strong> are the bedrock of business security. Whether you are a SaaS unicorn in Chennai or a specialized component manufacturer in Coimbatore, your competitive edge lies in your IP. Without proper registration, your unique designs, brand name, and inventions are open to theft.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we specialize in protecting these assets. With the <strong>Trademark Registry in Guindy</strong> and the <strong>Madras High Court's Intellectual Property Division</strong>, we have the local infrastructure and expertise to secure your rights effectively.
                  </p>
                </section>

                {/* Industrial Hub */}
                <section id="industrial-hub" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tamil Nadu's IP Ecosystem</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Tamil Nadu is a leader in filing Patent and Design applications, driven by its strong automotive and electronics sectors."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Different regions in Tamil Nadu have distinct IP needs:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Chennai: The Auto & SaaS Capital</h3>
                      <p className="text-gray-600 mb-4">
                        A dual hub for heavy industry and software.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Automotive:</strong> Patents for engine components and safety systems.</li>
                        <li><strong>SaaS:</strong> Copyrights for code and trademarks for global software brands.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Coimbatore & Tirupur</h3>
                      <p className="text-gray-600 mb-4">
                        The textile and engineering heartland.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Textiles:</strong> Design registration for fabric patterns and apparel styles.</li>
                        <li><strong>Engineering:</strong> Patents for pumps, motors, and wet grinders.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Sivakasi & Madurai</h3>
                      <p className="text-gray-600 mb-4">
                        Hubs for printing and traditional crafts.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Printing:</strong> Copyrights for calendars and diaries.</li>
                        <li><strong>GI Tags:</strong> Madurai Malli (Jasmine) and other regional specialties.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Electronics (Sriperumbudur)</h3>
                      <p className="text-gray-600 mb-4">
                        A major electronics manufacturing cluster.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Electronics:</strong> Layout-design protection for integrated circuits and PCBs.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework: The Madras High Court Advantage</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Tamil Nadu has a robust legal framework for IP protection, bolstered by specialized courts.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Madras High Court - IP Division</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Following Delhi, the Madras High Court established its <strong>Intellectual Property Division (IPD)</strong> in 2022.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li><strong>Dedicated Bench:</strong> Ensures that IP cases are heard by judges with subject matter expertise.</li>
                        <li><strong>Efficiency:</strong> The IPD Rules allow for faster disposal of cases, crucial for industries like fashion where trends change quickly.</li>
                        <li><strong>Jurisdiction:</strong> It handles original suits as well as appeals from the Patent and Trademark offices.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. The Trade Marks Registry, Chennai</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Located at <strong>Guindy</strong>.
                      </p>
                      <p className="text-gray-700">
                        <strong>Jurisdiction:</strong> It covers all of South India (Tamil Nadu, AP, Telangana, Karnataka, Kerala).
                        <br />
                        <strong>Our Role:</strong> We have a dedicated team to handle filings, objections, and hearings at the Guindy office, ensuring personal attention to your application.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Geographical Indications Registry</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Uniquely, the <strong>Head Office of the GI Registry</strong> for all of India is located in Chennai.
                      </p>
                      <p className="text-gray-700">
                        This gives Tamil Nadu producers a significant advantage in registering and protecting their unique regional products like Kancheepuram Silk or Dindigul Locks.
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
                        <span className="text-4xl mr-4">🚗</span>
                        <h3 className="text-2xl font-bold text-gray-900">Automotive & Engineering</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the manufacturing giants in Oragadam and Sriperumbudur.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Patent Filing</h4>
                          <p>Protecting mechanical innovations and manufacturing processes.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Industrial Designs</h4>
                          <p>Registering the aesthetic shape of car parts and machinery.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">💻</span>
                        <h3 className="text-2xl font-bold text-gray-900">SaaS & IT</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For Chennai's booming SaaS corridor.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Software Patents</h4>
                          <p>Navigating the complexities of patenting software algorithms.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Global Trademarks</h4>
                          <p>Filing Madrid Protocol applications to protect your brand in the US and Europe.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">👕</span>
                        <h3 className="text-2xl font-bold text-gray-900">Textiles & Apparel</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the export hubs of Tirupur and Karur.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Brand Protection</h4>
                          <p>Preventing cheap knock-offs of your clothing brand.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Fabric Designs</h4>
                          <p>Copyrighting unique prints and textile patterns.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration Process at TMR Chennai</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Filing in Chennai is streamlined but requires precision.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Search</h3>
                      <p className="text-gray-700">
                        We check the TMR database and local business directories in Tamil Nadu to ensure your brand name is unique.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Filing (Jurisdiction: Chennai)</h3>
                      <p className="text-gray-700">
                        We file Form TM-A. For Tamil Nadu entities, the jurisdiction is strictly Chennai.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Examination</h3>
                      <p className="text-gray-700">
                        The Registry examines the mark. If objected, we file a reply within 30 days.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Hearing at Guindy</h3>
                      <p className="text-gray-700">
                        If required, our attorneys attend the hearing at the Guindy office to advocate for your mark.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Registration</h3>
                      <p className="text-gray-700">
                        Your brand is registered and protected for 10 years.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement: Combating Counterfeits</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    With major ports in Chennai and Tuticorin, stopping counterfeit exports/imports is critical.
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Our Enforcement Strategies</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">1. Civil Injunctions:</span>
                        <span>We move the Madras High Court for temporary and permanent injunctions to stop infringers immediately.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2. Police Raids:</span>
                        <span>We coordinate with the Intellectual Property Rights Enforcement Cell (IPREC) of the Tamil Nadu Police to conduct raids on manufacturing units producing fakes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">3. Customs Recordal:</span>
                        <span>We record your IP with Customs at Chennai Port to seize infringing goods before they enter or leave the country.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Government Support */}
                <section id="government-support" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Support: TANSIM & MSME Schemes</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Tamil Nadu government is proactive in supporting innovation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">MSME Patent Subsidy</h3>
                      <p className="text-green-800 mb-2">The MSME Department offers:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>75% Subsidy</strong> on patent registration costs.</li>
                        <li>Maximum cap of <strong>₹3 Lakhs</strong> per patent.</li>
                        <li>Available to all eligible MSMEs in the state.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Innovation Vouchers</h3>
                      <p className="text-green-800 mb-2">Under the Innovation Voucher Programme (IVP):</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li>Grants for product development and prototyping.</li>
                        <li>Funding can be used for IP protection of the innovation.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common IP Mistakes in Tamil Nadu</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Design Rights</h3>
                        <p className="text-gray-700 text-sm">Many textile manufacturers rely only on trademarks, ignoring Design Registration which protects the actual look of their fabric/garment.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Not Using NDAs</h3>
                        <p className="text-gray-700 text-sm">Sharing manufacturing specs with vendors in Coimbatore without an NDA often leads to the vendor becoming a competitor.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Tamil Nadu?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We understand the local industrial landscape and the legal nuances.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Madras High Court</h3>
                      <p className="text-gray-600">Expertise in handling complex IP suits in the new IP Division.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏭</div>
                      <h3 className="font-bold text-xl mb-2">Industry Focus</h3>
                      <p className="text-gray-600">Specialized knowledge of Auto, SaaS, and Textile sectors.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Subsidy Assistance</h3>
                      <p className="text-gray-600">We help you claim government subsidies for your IP costs.</p>
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
                        "Our engineering firm in Coimbatore was facing patent infringement. AMA Legal Solutions filed a suit in the Madras High Court and secured an injunction within weeks. Their technical understanding is impressive."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Venkatesh Prasad</p>
                          <p className="text-sm text-gray-500">MD, Precision Gears Ltd.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We are a D2C brand in Chennai. AMA handled our trademark registration and helped us get the MSME subsidy, effectively reducing our costs by 75%."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">D</div>
                        <div>
                          <p className="font-bold text-gray-900">Divya Ramesh</p>
                          <p className="text-sm text-gray-500">Founder, Organic Staples</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Intellectual Property in Tamil Nadu</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let your hard work be copied. Partner with Tamil Nadu's trusted IP experts today.
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
                    Get immediate assistance for trademark filing and litigation in Tamil Nadu.
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

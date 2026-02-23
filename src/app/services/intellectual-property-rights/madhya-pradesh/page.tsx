import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "IPR Services in Madhya Pradesh | Trademark & Patent Consultants",
  description:
    "Leading IPR firm in Madhya Pradesh. Expert legal services for Trademark Registration, Patent Filing, and Copyright protection in Indore, Bhopal, Gwalior, and Pithampur.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/madhya-pradesh',
  },
  openGraph: {
    title: "IPR Services in Madhya Pradesh | Trademark & Patent Consultants",
    description: "Leading IPR firm in Madhya Pradesh. Expert legal services for Trademark Registration, Patent Filing, and Copyright protection in Indore, Bhopal, Gwalior, and Pithampur.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/madhya-pradesh",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Madhya Pradesh",
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
      "name": "Madhya Pradesh",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/madhya-pradesh"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Madhya Pradesh: Protecting the Heart of India",
  "description": "Comprehensive guide to IPR in Madhya Pradesh. From automobile patents in Pithampur to textile trademarks in Indore, we cover all legal aspects of IP protection.",
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
  "name": "IPR Services Madhya Pradesh",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert legal services for intellectual property in MP.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "185"
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
        "name": "Rajesh Gupta"
      },
      "reviewBody": "We run an auto-components unit in Pithampur. AMA Legal Solutions helped us patent our new manufacturing process efficiently. Their knowledge of industrial IP is top-notch."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Joshi"
      },
      "reviewBody": "For our startup in Indore, securing the trademark was crucial. The team handled the objection from the Mumbai registry without us having to travel even once."
    }
  ]
};

export default function MadhyaPradeshIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "mp-economy", title: "MP's Economic Landscape" },
    { id: "ip-services", title: "Our IPR Services" },
    { id: "legal-jurisdiction", title: "Legal Jurisdiction (Mumbai & MP)" },
    { id: "sectors", title: "Sector-Specific Solutions" },
    { id: "registration-process", title: "Registration Process" },
    { id: "startup-policy", title: "MP Startup Policy & IP" },
    { id: "enforcement", title: "Enforcement & Litigation" },
    { id: "why-us", title: "Why Choose AMA" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Madhya Pradesh", href: "/services/intellectual-property-rights/madhya-pradesh" },
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
              Intellectual Property Rights in <span className="text-[#D2A02A]">Madhya Pradesh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Safeguarding innovation in the Heart of India. From Indore's commercial hubs to Bhopal's startups, we provide robust Trademark, Patent, and Copyright protection.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get Legal Advice
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Business Assets in Madhya Pradesh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Madhya Pradesh (MP) is rapidly transforming from an agrarian economy into a powerhouse of industry, logistics, and technology. With **Indore** retaining its title as India's cleanest city and emerging as a major commercial hub, and **Bhopal** fostering a growing startup ecosystem, the state is attracting significant investment. The industrial belts of **Pithampur, Mandideep, and Govindpura** are witnessing a surge in manufacturing excellence.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In this era of growth, **Intellectual Property Rights (IPR)** are the shield that protects your business identity and innovations. Whether you are an automobile component manufacturer in Pithampur, a food processing unit in Ujjain, or a software firm in Indore's Super Corridor, your brand name, designs, and inventions are your most valuable assets.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions brings specialized legal expertise to MP. We understand the local business nuances while navigating the central legal frameworks, ensuring your IP is secure against infringement and imitation.
                  </p>
                </section>

                {/* MP Economy */}
                <section id="mp-economy" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The IP Landscape of Madhya Pradesh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    MP's diverse economy creates a unique demand for various types of IP protection. Understanding this landscape helps businesses prioritize their legal needs.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Indore: The Commercial Capital</h3>
                      <p className="text-gray-600 mb-4">
                        Known for its Namkeen clusters and IT parks.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>**Trademarks:** Essential for food brands (Indori Sev, Poha) to prevent local copycats.</li>
                        <li>**Copyrights:** For software companies in the Crystal IT Park and Super Corridor.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Pithampur: The Detroit of India</h3>
                      <p className="text-gray-600 mb-4">
                        A massive hub for heavy industries and automobiles.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>**Patents:** Protection for mechanical inventions and manufacturing processes.</li>
                        <li>**Industrial Designs:** Securing the aesthetic look of auto parts and machinery.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Bhopal & Mandideep</h3>
                      <p className="text-gray-600 mb-4">
                        A blend of administrative power and engineering industries.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>**Startups:** IP strategy for ed-tech and clean-tech ventures supported by local incubators.</li>
                        <li>**Engineering:** Patent filing for electrical and railway components manufactured in Mandideep.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Agro & Textiles (Ujjain/Chanderi)</h3>
                      <p className="text-gray-600 mb-4">
                        Rich in traditional knowledge and agriculture.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>**Geographical Indications (GI):** Protection for Chanderi Sarees, Maheshwari Fabrics, and MP Wheat.</li>
                        <li>**Plant Varieties:** Protection for new hybrid seeds developed by local research institutes.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* IP Services */}
                <section id="ip-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive IPR Services</h2>
                  <div className="space-y-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">®️</span>
                        <h3 className="text-2xl font-bold text-gray-900">Trademark Registration</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Protect your brand name, logo, and tagline. We handle the entire lifecycle:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Search & Filing</h4>
                          <p>Conducting availability searches on the IP India database and filing Form TM-A.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Mumbai Registry Representation</h4>
                          <p>Handling objections and attending hearings at the Mumbai Trade Marks Registry on your behalf.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">💡</span>
                        <h3 className="text-2xl font-bold text-gray-900">Patent Services</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the innovators in MP's industrial belts.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Drafting</h4>
                          <p>Provisional and Complete Specification drafting by technical experts.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Prosecution</h4>
                          <p>Responding to First Examination Reports (FER) and arguing for the grant.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🎨</span>
                        <h3 className="text-2xl font-bold text-gray-900">Copyright & Designs</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Securing creative and aesthetic works.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Copyright</h4>
                          <p>Software code, literary works, and artistic packaging designs.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Industrial Design</h4>
                          <p>Protecting the shape and configuration of products (Class 1 to 31).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Legal Jurisdiction */}
                <section id="legal-jurisdiction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Jurisdictional Clarity: Mumbai vs. MP Courts</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A common confusion for MP businesses is where to file. Here is the breakdown:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Administration: Trade Marks Registry, Mumbai</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Madhya Pradesh falls under the jurisdiction of the **Trade Marks Registry in Mumbai (Antop Hill)**.
                      </p>
                      <p className="text-gray-700">
                        **Implication:** You cannot file a trademark application physically in Indore or Bhopal. All filings go to Mumbai. All administrative hearings for objections are conducted by the Mumbai Registrar.
                        <br />
                        **Our Role:** We act as your liaison. Our team handles all Mumbai Registry matters digitally and physically, so you don't have to travel.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Enforcement: High Court of Madhya Pradesh</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        If someone in MP infringes your rights, you don't go to Mumbai. You file a suit in MP.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>**Commercial Courts:** For disputes above a certain value, Commercial Courts in Indore and Bhopal offer fast-track adjudication.</li>
                        <li>**High Court Benches:** The Principal Seat is at **Jabalpur**, with benches at **Indore** and **Gwalior**. We file appeals and writ petitions here.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Registration Process</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We follow a structured approach to ensure your IP is registered without errors.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. IP Audit & Search</h3>
                      <p className="text-gray-700">
                        We analyze your business to identify what needs protection. We conduct a deep search to ensure your chosen name or invention is unique.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Application Filing</h3>
                      <p className="text-gray-700">
                        Filing the appropriate forms (TM-A for trademarks, Form 1 for patents) with the Registry. We ensure correct class selection (e.g., Class 35 for retail, Class 43 for food services).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Objection Handling</h3>
                      <p className="text-gray-700">
                        If the Registry raises an objection, we draft a legal reply citing precedents. This is critical to prevent abandonment of the application.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Registration & Renewal</h3>
                      <p className="text-gray-700">
                        Upon acceptance and publication, the certificate is issued. We also manage renewal timelines (10 years for trademarks).
                      </p>
                    </div>
                  </div>
                </section>

                {/* Startup Policy */}
                <section id="startup-policy" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">MP Startup Policy 2022: Benefits for IP</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Madhya Pradesh government is aggressively promoting innovation. Under the **MP Startup Policy 2022**, recognized startups can avail significant assistance.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Key Incentives</h3>
                    <ul className="list-disc pl-5 text-green-800 space-y-3">
                      <li>**Filing Fee Reimbursement:** The state government offers reimbursement for patent and trademark filing fees for recognized startups.</li>
                      <li>**Facilitation:** Access to IP facilitation centers in major cities like Indore and Bhopal.</li>
                      <li>**Preference in Procurement:** Startups with registered IP often get preference in government tenders.</li>
                    </ul>
                    <p className="mt-4 text-sm text-green-700">
                      *We assist startups in preparing the necessary documentation to claim these benefits.
                    </p>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Fighting Counterfeits in MP</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Counterfeiting is a challenge in local markets. We take decisive action to protect your brand.
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Our Enforcement Strategy</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Legal Notices:</span>
                        <span>Sending strict Cease & Desist notices to infringers in local markets.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Civil Suits:</span>
                        <span>Filing for injunctions in District Commercial Courts to stop illegal sales immediately.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Police Raids:</span>
                        <span>Collaborating with local police for search and seizure operations under the Trade Marks Act and Copyright Act.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Why Us */}
                <section id="why-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We bridge the gap between Madhya Pradesh businesses and the national legal framework.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌐</div>
                      <h3 className="font-bold text-xl mb-2">Cross-Jurisdiction</h3>
                      <p className="text-gray-600">Seamless coordination between MP Courts and Mumbai Registry.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏭</div>
                      <h3 className="font-bold text-xl mb-2">Industrial Focus</h3>
                      <p className="text-gray-600">Specialized expertise in auto, pharma, and food processing sectors.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Litigation Ready</h3>
                      <p className="text-gray-600">Ready to fight for your rights in the MP High Court.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We run an auto-components unit in Pithampur. AMA Legal Solutions helped us patent our new manufacturing process efficiently. Their knowledge of industrial IP is top-notch."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Gupta</p>
                          <p className="text-sm text-gray-500">MD, Gupta Auto Components</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "For our startup in Indore, securing the trademark was crucial. The team handled the objection from the Mumbai registry without us having to travel even once."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Meera Joshi</p>
                          <p className="text-sm text-gray-500">Founder, Indori Zayka</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Business in MP</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let IP theft slow down your growth. Partner with the experts who understand Madhya Pradesh business.
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
                    Get immediate assistance for trademark filing and objections in Madhya Pradesh.
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






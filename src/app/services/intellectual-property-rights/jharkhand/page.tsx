import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "IPR Services in Jharkhand | Trademark & Patent Attorneys Ranchi",
  description:
    "Expert Intellectual Property Rights services in Jharkhand. Secure your Trademark, Patent, and Copyright in Ranchi, Jamshedpur, and Dhanbad with AMA Legal Solutions.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/jharkhand',
  },
  openGraph: {
    title: "IPR Services in Jharkhand | Trademark & Patent Attorneys Ranchi",
    description: "Expert Intellectual Property Rights services in Jharkhand. Secure your Trademark, Patent, and Copyright in Ranchi, Jamshedpur, and Dhanbad with AMA Legal Solutions.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/jharkhand",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Jharkhand",
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
      "name": "Jharkhand",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/jharkhand"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Jharkhand: Mining Innovation",
  "description": "A complete guide to IPR protection in Jharkhand. From industrial patents in Jamshedpur to tribal art GI tags, we cover all legal aspects of IP in the state.",
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
  "name": "IPR Services Jharkhand",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Professional IP legal services in Jharkhand.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "130"
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
        "name": "Anil Kumar"
      },
      "reviewBody": "We operate a steel fabrication unit in Adityapur. AMA Legal Solutions helped us register our industrial design for a new machine part. Very professional service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Soren"
      },
      "reviewBody": "Best trademark lawyers for Jharkhand. They guided us on protecting our tribal art brand and handled the Kolkata registry work perfectly."
    }
  ]
};

export default function JharkhandIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-ipr-essential", title: "Why IPR is Essential for Jharkhand" },
    { id: "jharkhand-landscape", title: "Jharkhand's Industrial & Cultural IP" },
    { id: "legal-jurisdiction", title: "Legal Jurisdiction (Kolkata & Ranchi)" },
    { id: "our-services", title: "Our IPR Services" },
    { id: "registration-process", title: "Detailed Registration Process" },
    { id: "startup-incentives", title: "Jharkhand Startup Incentives" },
    { id: "msme-benefits", title: "MSME & Export Benefits" },
    { id: "enforcement", title: "Enforcement & Litigation" },
    { id: "tribal-rights", title: "Protecting Tribal Heritage (GI)" },
    { id: "common-mistakes", title: "Common IP Mistakes" },
    { id: "why-choose-us", title: "Why Choose AMA" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Jharkhand", href: "/services/intellectual-property-rights/jharkhand" },
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
              IPR Services in <span className="text-[#D2A02A]">Jharkhand</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Protecting innovation in the Steel City and beyond. Expert Patent, Trademark, and Copyright legal services for Ranchi, Jamshedpur, and Dhanbad.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Book a Consultation
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property: The New Asset for Jharkhand</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Jharkhand is historically known for its rich mineral reserves and heavy industries in **Jamshedpur** (Tatanagar) and **Bokaro**. It is the bedrock of India's industrial might. However, the state is rapidly evolving. **Ranchi** is emerging as a smart city with a growing service sector, **Dhanbad** is diversifying its mining technology, and **Deoghar** is becoming a major tourism and cultural hub.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In this shifting economic landscape, intangible assets—brand reputation, industrial designs, software innovations, and traditional knowledge—are becoming as valuable as steel and coal. A proprietary manufacturing process in Adityapur or a unique hospitality brand in Ranchi needs legal protection just as much as a physical factory does.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    **Intellectual Property Rights (IPR)** provide the legal framework to monetize these assets. Whether you are an MSME in the **Adityapur Industrial Area** needing to protect a machine design, or a tech startup in Ranchi looking to trademark your app name, securing your IP is the first step towards sustainable growth and creating a "moat" against competition.
                  </p>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    AMA Legal Solutions offers specialized IPR counsel for Jharkhand. We understand the local industrial ecosystem—from the coal belts to the tech parks—and provide seamless access to the national IP offices, ensuring your business is protected against unfair competition and infringement.
                  </p>
                </section>

                {/* Why IPR Essential */}
                <section id="why-ipr-essential" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why IPR is Essential for Jharkhand Businesses</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The perception that IPR is only for large multinationals is outdated. In Jharkhand's competitive markets, IP is a survival tool.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Trust & Identity</h3>
                      <p className="text-gray-700">
                        In cities like Ranchi and Jamshedpur, customers rely on established names. If you run a popular sweet shop or a coaching institute, a registered trademark stops copycats from opening a "Same Name" shop next door and stealing your customers.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Monetizing Innovation</h3>
                      <p className="text-gray-700">
                        Jharkhand's MSMEs often innovate on the shop floor—improving machinery efficiency or creating better alloys. Without a patent, these improvements are easily copied. With a patent, you can license this technology to other factories for a royalty fee.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Export Potential</h3>
                      <p className="text-gray-700">
                        Many Adityapur units export auto components. International buyers require proof of IP ownership. A registered design or patent makes your product export-ready and protects you from lawsuits abroad.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Attracting Investment</h3>
                      <p className="text-gray-700">
                        For startups in Ranchi's incubation centers, investors value IP assets. A patent application shows that your technology is novel and defensible, significantly increasing your valuation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Jharkhand Landscape */}
                <section id="jharkhand-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Jharkhand's Unique IP Landscape</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From heavy engineering to tribal art, Jharkhand's IP requirements are diverse and region-specific.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Jamshedpur & Adityapur: The Industrial Core</h3>
                      <p className="text-gray-600 mb-4">
                        Home to Tata Steel and Tata Motors, this region is an engineering powerhouse.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li><strong>Patents:</strong> Vital for ancillary units developing new fabrication processes, metallurgy, or automotive subsystems.</li>
                        <li><strong>Industrial Designs:</strong> Protecting the unique shape and configuration of auto components, machine tools, and heavy equipment parts to prevent cheap knock-offs.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Ranchi: Services & Smart City</h3>
                      <p className="text-gray-600 mb-4">
                        The capital is focusing on services, education, healthcare, and technology.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li><strong>Trademarks:</strong> Branding protection for retail chains, hospitals, schools, and real estate developers.</li>
                        <li><strong>Copyrights:</strong> Crucial for software startups (code), architects (blueprints), and content creators.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Dhanbad & Bokaro: Mining Tech</h3>
                      <p className="text-gray-600 mb-4">
                        The coal capital needs protection for operational technologies.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li><strong>Process Patents:</strong> For innovations in mining safety equipment, coal washing, and mineral processing efficiency.</li>
                        <li><strong>Trade Secrets:</strong> Protecting geological data, proprietary surveys, and internal operational methodologies.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Deoghar & Hazaribagh: Heritage & Tourism</h3>
                      <p className="text-gray-600 mb-4">
                        Religious tourism and traditional crafts.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                        <li><strong>Geographical Indications (GI):</strong> Sohrai and Khovar paintings have GI tags. We help local artisan societies manage authorized user rights.</li>
                        <li><strong>Service Marks:</strong> Branding for hotels, travel agencies, and spiritual wellness centers.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Jurisdiction */}
                <section id="legal-jurisdiction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Jurisdiction: Kolkata Registry & Ranchi High Court</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Navigating the legal geography is crucial for successful IP management. A common misconception is that everything happens in Ranchi. Here is the actual legal structure for Jharkhand:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Administration: Trade Marks Registry, Kolkata</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Jharkhand falls under the territorial jurisdiction of the **Trade Marks Registry in Kolkata (Salt Lake City)**.
                      </p>
                      <p className="text-gray-700">
                        **What it means:** All trademark, patent, and design applications for businesses based in Jharkhand must be filed with the Kolkata office. You cannot file them physically in Ranchi.
                        <br />
                        **Our Role:** We bridge this geographical gap. We handle all filings digitally from our systems. For critical show-cause hearings where physical presence is required or preferred, our attorneys represent you before the Kolkata Registrar, ensuring professional advocacy without you incurring travel costs.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Enforcement: High Court of Jharkhand (Ranchi)</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        However, for legal disputes (infringement suits), the jurisdiction is local. The **High Court of Jharkhand in Ranchi** is the authority.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li><strong>Commercial Disputes:</strong> Under the Commercial Courts Act, specific courts in Ranchi and Dhanbad are designated to handle IP infringement suits above a certain value, ensuring faster disposal.</li>
                        <li><strong>Injunctions:</strong> If a competitor in Jamshedpur copies your brand, we file for an injunction in the local District Court or High Court to stop them immediately, seize their stock, and claim damages.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Our Services */}
                <section id="our-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Comprehensive IPR Services</h2>
                  <div className="space-y-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">®️</span>
                        <h3 className="text-2xl font-bold text-gray-900">Trademark Registration</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Secure your business name, logo, and tagline.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Comprehensive Search</h4>
                          <p>Checking availability on IP India & MCA databases to avoid conflicts.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Objection Management</h4>
                          <p>Drafting legal replies to Section 9 & 11 objections raised by the Kolkata Registry.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Renewal & Watch</h4>
                          <p>Ensuring timely renewals every 10 years and watching for infringing marks.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Brand Licensing</h4>
                          <p>Drafting franchise agreements for expanding businesses.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">⚙️</span>
                        <h3 className="text-2xl font-bold text-gray-900">Patent & Design</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For manufacturing units in Jamshedpur, Bokaro, and Dhanbad.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Patent Filing</h4>
                          <p>Drafting provisional and complete specifications for mechanical and metallurgical inventions.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Design Registration</h4>
                          <p>Protecting the aesthetic look of industrial products to prevent "lookalike" manufacturing.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">©️</span>
                        <h3 className="text-2xl font-bold text-gray-900">Copyright & Creative</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For software developers, authors, and artists.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Software Protection</h4>
                          <p>Registering source code and GUI designs.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Content Rights</h4>
                          <p>Protecting books, music, and artwork from piracy.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Registration Workflow</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We ensure a smooth process from application to grant, minimizing the risk of rejection.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Search & Strategy</h3>
                      <p className="text-gray-700">
                        We start with a "Clearance Search" on the IP India database. For brands, we also check common law usage. We advise on the correct classes (Nice Classification) to ensure broad protection (e.g., Class 6 for metal goods, Class 35 for services).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Filing & Documentation</h3>
                      <p className="text-gray-700">
                        We file the application online with the Kolkata Registry. For trademarks, we use Form TM-A. Crucially, if you have been using the mark, we file a **User Affidavit** to claim prior rights, which is a strong defense against future objections.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Examination & Response</h3>
                      <p className="text-gray-700">
                        The Registry issues an Examination Report. If there are objections (e.g., "mark is not distinctive" or "similar mark exists"), we file a substantive legal reply within 30 days citing relevant case law.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Hearing & Grant</h3>
                      <p className="text-gray-700">
                        If the reply is not accepted, a hearing is scheduled. We attend the hearing. Once accepted, it is published in the Journal for 4 months. If unopposed, the Registration Certificate is issued.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Startup Incentives */}
                <section id="startup-incentives" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Jharkhand Startup Policy 2016/23: IP Incentives</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Government of Jharkhand is aggressively promoting entrepreneurship. Under the **Jharkhand Startup Policy**, DPIIT-recognized startups can access significant financial support for IPR.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Key Benefits</h3>
                    <ul className="list-disc pl-5 text-green-800 space-y-3">
                      <li>**100% Reimbursement:** The policy offers up to 100% reimbursement of patent filing fees (domestic and international) up to a certain cap (typically ₹2 Lakhs for domestic, ₹10 Lakhs for international).</li>
                      <li>**Trademark Support:** Reimbursement of trademark filing fees for startups.</li>
                      <li>**Incubation:** Access to state-supported incubators (like AIC-ISM Dhanbad, Atal Bihari Vajpayee Innovation Lab) which provide mentorship on IP commercialization.</li>
                    </ul>
                    <p className="mt-4 text-sm text-green-700">
                      *We guide startups on the documentation required to claim these reimbursements effectively.
                    </p>
                  </div>
                </section>

                {/* MSME Benefits */}
                <section id="msme-benefits" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">MSME & Export Benefits</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For established MSMEs in Adityapur and Bokaro, the Ministry of MSME, Govt of India offers separate schemes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="font-bold text-blue-900 mb-2">IP Facilitation Centres</h3>
                      <p className="text-blue-800 text-sm">Reimbursement for patent and trademark registration costs under the MSME Innovative Scheme.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="font-bold text-blue-900 mb-2">International Protection</h3>
                      <p className="text-blue-800 text-sm">Financial assistance for filing international patents, which is crucial for MSMEs exporting to Europe or the USA.</p>
                    </div>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement: Fighting Counterfeits in Jharkhand</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registration is only half the battle. Enforcement is the other half. Local markets in Jharkhand can sometimes harbor counterfeit goods.
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Our Enforcement Toolkit</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Cease & Desist Notices:</span>
                        <span>Often, a stern legal notice on our letterhead is enough to make a local infringer stop, avoiding expensive litigation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Civil Suits:</span>
                        <span>Filing suits in Commercial Courts in Ranchi or Jamshedpur for permanent injunctions and damages.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Criminal Action:</span>
                        <span>Under Section 103 of the Trade Marks Act, we collaborate with local police to conduct raids and lodge FIRs against counterfeiters.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Tribal Rights */}
                <section id="tribal-rights" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Tribal Heritage: GI & Traditional Knowledge</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Jharkhand is home to unique tribal arts like **Sohrai** and **Khovar** paintings, which have received **Geographical Indication (GI)** tags. This protects the collective rights of the community.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>**Artisan Societies:** In registering as "Authorized Users" of the GI tag, allowing them to use the official GI logo and command premium prices.</li>
                    <li>**Social Enterprises:** In ensuring their sourcing contracts respect these rights and avoid "cultural misappropriation."</li>
                  </ul>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common IP Mistakes in Jharkhand</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-red-600 mb-2">Mistake 1: Delaying Filing</h3>
                      <p className="text-gray-700 text-sm">"I'll register when I grow big." By then, someone else may have registered your name, or your invention may have lost "novelty" by being in the public domain.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-red-600 mb-2">Mistake 2: Incorrect Classification</h3>
                      <p className="text-gray-700 text-sm">Registering a steel brand only in Class 6 (Metals) but forgetting Class 35 (Trading/Retail) leaves a gap that competitors can exploit.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-red-600 mb-2">Mistake 3: Ignoring Contracts</h3>
                      <p className="text-gray-700 text-sm">Not having IP assignment clauses in employee or vendor contracts. This means the employee might legally own the code or design they created for you.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-red-600 mb-2">Mistake 4: Trusting Generic Online Filers</h3>
                      <p className="text-gray-700 text-sm">Cheap online services often make errors in "User Date" or description, leading to rejection years later. IP is a legal process, not data entry.</p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine local understanding with national legal expertise.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Kolkata Liaison</h3>
                      <p className="text-gray-600">We handle all Kolkata Registry matters directly, ensuring professional representation.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏭</div>
                      <h3 className="font-bold text-xl mb-2">Industrial Tech</h3>
                      <p className="text-gray-600">Our team understands the engineering and manufacturing innovations of Jamshedpur/Bokaro.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="font-bold text-xl mb-2">Startup Packages</h3>
                      <p className="text-gray-600">Cost-effective, bundled services for Ranchi and Dhanbad startups.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Voices</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We operate a steel fabrication unit in Adityapur. AMA Legal Solutions helped us register our industrial design for a new machine part. Very professional service."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anil Kumar</p>
                          <p className="text-sm text-gray-500">Director, Kumar Engineering</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Best trademark lawyers for Jharkhand. They guided us on protecting our tribal art brand and handled the Kolkata registry work perfectly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sneha Soren</p>
                          <p className="text-sm text-gray-500">Founder, Tribal Treasures</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Innovation in Jharkhand</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      From Jamshedpur's industries to Ranchi's startups, we are your trusted IP partners.
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
                    Get immediate assistance for trademark filing and objections in Jharkhand.
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

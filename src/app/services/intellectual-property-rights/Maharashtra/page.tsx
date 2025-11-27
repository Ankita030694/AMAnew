import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Maharashtra | Expert IP Lawyers Mumbai",
  description:
    "Protect your brand & innovation in Maharashtra. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Mumbai, Pune & across the state.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/Maharashtra',
  },
  openGraph: {
    title: "Intellectual Property Rights in Maharashtra | Expert IP Lawyers Mumbai",
    description: "Protect your brand & innovation in Maharashtra. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Mumbai, Pune & across the state.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/Maharashtra",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Maharashtra",
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
      "name": "Maharashtra",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/Maharashtra"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Maharashtra: Secure Your Innovation",
  "description": "Comprehensive guide to IPR protection in Maharashtra. Learn about trademark registration, patent filing, and copyright laws in Mumbai and Pune.",
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
  "name": "IPR Services Maharashtra",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert intellectual property legal services in Maharashtra.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "920"
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
        "name": "Aditya Mehta"
      },
      "reviewBody": "AMA Legal Solutions helped us register our trademark in Mumbai seamlessly. Their team handled the objection hearing at the Antop Hill registry very professionally."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Kulkarni"
      },
      "reviewBody": "Best IP lawyers in Pune for patent filing. They guided our startup through the MSInS scheme and helped us save costs."
    }
  ]
};

export default function MaharashtraIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "economic-landscape", title: "Maharashtra's IP Economy" },
    { id: "legal-framework", title: "Legal Framework & Courts" },
    { id: "industry-focus", title: "Industry-Specific Solutions" },
    { id: "registration-process", title: "Registration Process" },
    { id: "enforcement", title: "Enforcement & Litigation" },
    { id: "startups-msme", title: "Startup & MSME Support" },
    { id: "common-mistakes", title: "Common IP Mistakes" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Maharashtra", href: "/services/intellectual-property-rights/Maharashtra" },
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
              Protect Your Innovation with <span className="text-[#D2A02A]">IPR Services in Maharashtra</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From Bollywood copyrights to Tech patents in Pune. We provide comprehensive legal protection for your intellectual assets in India's commercial capital.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Securing Intellectual Property in Maharashtra: A Strategic Necessity</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Maharashtra stands as the undisputed economic powerhouse of India, contributing over 14% to the national GDP. With a state economy exceeding $400 billion, it is a fertile ground for innovation, creativity, and commerce. However, in such a high-stakes environment, the risk of intellectual property theft is equally high. Whether you are a filmmaker in Mumbai, a software developer in Pune, or an industrialist in Aurangabad, your intangible assets—your brand, your designs, your inventions—are often more valuable than your physical infrastructure.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Intellectual Property Rights (IPR)</strong> are not merely legal formalities; they are business tools that define your market position. In a hyper-competitive market like Maharashtra, a registered trademark distinguishes your product from cheap counterfeits. A patent prevents competitors from copying your hard-earned R&D. A copyright ensures you receive royalties for your creative work. Without these protections, your business is vulnerable to infringement, dilution, and revenue loss.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we understand the pulse of Maharashtra's business ecosystem. We don't just file forms; we craft IP strategies. With the <strong>Trademark Registry headquartered in Mumbai</strong> and the <strong>Bombay High Court</strong> setting precedents in IP law, having a specialized legal team on the ground is your strongest asset in protecting what is yours.
                  </p>
                </section>

                {/* Economic Landscape */}
                <section id="economic-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Maharashtra's Diverse IP Ecosystem</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Maharashtra consistently leads India in IPR filings, accounting for the highest number of trademark and patent applications annually, reflecting its status as the innovation capital of the country."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The state's economy is not monolithic; it is a complex tapestry of various industries, each with unique IP requirements. Our practice covers the entire spectrum:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Mumbai: The Creative & Financial Hub</h3>
                      <p className="text-gray-600 mb-4">
                        As the home of Bollywood and India's financial giants, Mumbai has a massive demand for <strong>Copyrights</strong> and <strong>Trademarks</strong>.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Media & Entertainment:</strong> Protection for scripts, film titles, music, and personality rights.</li>
                        <li><strong>BFSI Sector:</strong> Branding protection for fintech apps and financial products.</li>
                        <li><strong>Fashion & Retail:</strong> Design registrations for apparel and jewelry.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Pune: The Oxford of the East</h3>
                      <p className="text-gray-600 mb-4">
                        Pune is a dual-engine economy driven by IT/ITeS and Automobile manufacturing, creating a heavy reliance on <strong>Patents</strong>.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Tech Startups:</strong> Software patenting (CRIs) and algorithm protection.</li>
                        <li><strong>Automotive:</strong> Mechanical patents and industrial designs for auto components.</li>
                        <li><strong>Education:</strong> Copyrights for e-learning content and publications.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Nashik, Aurangabad & Nagpur</h3>
                      <p className="text-gray-600 mb-4">
                        These industrial belts are the backbone of Maharashtra's manufacturing.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Pharmaceuticals:</strong> Process patents and drug formulations.</li>
                        <li><strong>Agro-Processing:</strong> GI tags for regional produce like Nashik Grapes and Nagpur Oranges.</li>
                        <li><strong>Engineering:</strong> Design patents for machinery and tools.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Thane & Navi Mumbai</h3>
                      <p className="text-gray-600 mb-4">
                        Rapidly emerging as data center and logistics hubs.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Logistics:</strong> Trademarking service brands and proprietary tracking software.</li>
                        <li><strong>Chemicals:</strong> Patenting chemical processes and compositions.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legal Framework: Why Location Matters</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Intellectual Property laws in India are central statutes (Trade Marks Act, 1999; Patents Act, 1970; Copyright Act, 1957). However, the <strong>enforcement and administration</strong> are highly localized. Being in Maharashtra gives you access to some of the most critical IP institutions in the country.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. The Trade Marks Registry, Mumbai</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Located at <strong>Boudhik Sampada Bhawan, Antop Hill</strong>, this is the Head Office of the Trade Marks Registry in India.
                      </p>
                      <p className="text-gray-700">
                        <strong>Jurisdiction:</strong> It handles all trademark applications filed from Maharashtra, Madhya Pradesh, Chhattisgarh, and Goa.
                        <br />
                        <strong>Advantage:</strong> If your business is in Maharashtra, your file stays here. Our attorneys can physically visit the registry to expedite files, attend show-cause hearings, and resolve administrative bottlenecks much faster than agents operating remotely.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. The Bombay High Court</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        The Bombay High Court is renowned for its progressive and aggressive stance on IP protection. It was one of the first courts to implement the <strong>Commercial Courts Act, 2015</strong> effectively.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li><strong>Commercial Division:</strong> Dedicated benches for IP disputes ensure faster disposal of cases compared to regular civil suits.</li>
                        <li><strong>"John Doe" Orders:</strong> The court frequently grants <em>Ashok Kumar</em> orders, allowing rights holders to raid and seize counterfeit goods from unidentified infringers—a crucial tool for fighting piracy in markets like Crawford Market or Lamington Road.</li>
                        <li><strong>Dynamic Injunctions:</strong> For digital piracy, the court grants dynamic injunctions that force ISPs to block not just the current infringing website but also any mirror links that pop up in the future.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Maharashtra Cyber Cell</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        With the rise of digital IP theft, the Maharashtra Police Cyber Cell has become a key enforcer.
                      </p>
                      <p className="text-gray-700">
                        They are active in taking down phishing websites that infringe on banking trademarks, investigating source code theft in IT companies, and tracking online sellers of counterfeit goods. We work closely with cyber crime units to register FIRs under the IT Act alongside IP laws.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Industry Focus */}
                <section id="industry-focus" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tailored Solutions for Key Industries</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Generic legal advice doesn't work for specialized industries. Here is how we address specific sector needs:
                  </p>

                  <div className="space-y-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🎬</span>
                        <h3 className="text-2xl font-bold text-gray-900">Entertainment & Media (Bollywood)</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        In an industry driven by content, ownership is everything. We assist production houses, OTT platforms, and artists with:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Chain of Title</h4>
                          <p>Ensuring clear ownership history of a script from writer to producer to avoid future lawsuits.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Personality Rights</h4>
                          <p>Protecting celebrities' likeness and voice from unauthorized use in ads or AI-generated content.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Music Licensing</h4>
                          <p>Drafting agreements with IPRS/PPL and handling synchronization rights for films.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Format Rights</h4>
                          <p>Protecting the concept and format of reality shows and game shows.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">💻</span>
                        <h3 className="text-2xl font-bold text-gray-900">Technology & Startups</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the tech hubs of Pune and Powai, speed is of the essence.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Software Patenting</h4>
                          <p>Navigating Section 3(k) of the Patents Act to successfully patent software combined with hardware.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Trade Secrets</h4>
                          <p>Drafting robust NDAs and Non-Compete agreements to protect algorithms and client lists.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Due Diligence</h4>
                          <p>Conducting IP audits for startups raising funds to prove asset value to VCs.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Brand Protection</h4>
                          <p>Securing trademarks for app icons and domain names.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🏭</span>
                        <h3 className="text-2xl font-bold text-gray-900">Manufacturing & FMCG</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Protecting the physical product and its packaging.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Industrial Design</h4>
                          <p>Registering the shape and aesthetics of bottles, containers, and machine parts.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Trade Dress</h4>
                          <p>Protecting the overall look and feel of packaging (color combinations, layout) under trademark law.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Registration Process in Mumbai</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    While the core process is national, the timelines and interactions are local. Here is what to expect when filing in Maharashtra:
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Comprehensive Search (Day 1-2)</h3>
                      <p className="text-gray-700">
                        We don't just check the online database. We conduct a phonetic and visual similarity search. For Mumbai businesses, we also check the MCA database to ensure no company is registered with a similar name, preventing future corporate law conflicts.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Application Filing (Day 3)</h3>
                      <p className="text-gray-700">
                        We file Form TM-A digitally.
                        <br /><strong>Jurisdiction:</strong> Mumbai.
                        <br /><strong>User Date:</strong> Crucial for Maharashtra brands with a long history. We file with a "User Affidavit" to claim prior use, giving you rights over newer applicants.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Examination & Objection (Month 1-3)</h3>
                      <p className="text-gray-700">
                        The Registry issues an Examination Report. If they cite Section 9 (Non-distinctive) or Section 11 (Similarity), we have 30 days to reply.
                        <br /><em>Our Edge:</em> We draft replies citing specific Bombay High Court judgments that the examiners are bound to follow.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Show Cause Hearing (Month 4-8)</h3>
                      <p className="text-gray-700">
                        If the written reply isn't accepted, a hearing is scheduled at Antop Hill. Our attorneys appear in person to argue your case. This personal representation significantly increases the chances of acceptance compared to video conferencing.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Publication & Registration (Month 9-12)</h3>
                      <p className="text-gray-700">
                        Once accepted, it's published in the Journal for 4 months. If no opposition is filed, the Registration Certificate is issued. Valid for 10 years and renewable indefinitely.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement: Fighting Counterfeits in Maharashtra</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registration is only half the battle. Enforcement is the other half. Maharashtra has some of the biggest wholesale markets (Crawford Market, Manish Market, Ulhasnagar) which are unfortunately also hubs for counterfeit goods.
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Our Anti-Counterfeiting Actions</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">1. Civil Raids:</span>
                        <span>We obtain "Anton Piller" orders from the Bombay High Court, appointing Court Commissioners to raid premises, seize infringing stock, and seal factories without prior notice.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2. Criminal Actions:</span>
                        <span>We file complaints under Section 63 of the Copyright Act and Section 103 of the Trade Marks Act. These are cognizable offenses, meaning the police can arrest the infringer without a warrant.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">3. Customs Recordal:</span>
                        <span>For importers, we record your IP rights with Indian Customs (Nhava Sheva Port and Mumbai Airport). Customs officers will then seize any incoming shipments that are suspected counterfeits of your brand.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Startups & MSME */}
                <section id="startups-msme" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Support: MSInS & Startup India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Government of Maharashtra is aggressively promoting innovation. The <strong>Maharashtra State Innovation Society (MSInS)</strong> has launched a scheme specifically to subsidize IP costs for startups.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Who is Eligible?</h3>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li>Startups recognized by DPIIT.</li>
                        <li>Incorporated in Maharashtra.</li>
                        <li>Annual turnover not exceeding ₹100 Crores.</li>
                        <li>Entity should not be older than 10 years.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">What are the Benefits?</h3>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>Domestic Patent:</strong> Reimbursement up to ₹2 Lakhs per patent.</li>
                        <li><strong>International Patent:</strong> Reimbursement up to ₹10 Lakhs.</li>
                        <li><strong>Trademark:</strong> Reimbursement of filing fees.</li>
                        <li><strong>Quality Certification:</strong> Up to ₹2 Lakhs for ISO/BIS certification.</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-700">
                    <strong>How We Help:</strong> We don't just file your IP; we act as your facilitators. We help you prepare the technical and financial documents required to claim these reimbursements, effectively making your IP protection nearly free of cost.
                  </p>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common IP Mistakes by Maharashtra Businesses</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Waiting for Success to Register</h3>
                        <p className="text-gray-700 text-sm">Many brands in Mumbai wait until they are popular. By then, squatters have already registered their domain or trademark, forcing them to pay huge sums to buy it back.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Class Classification</h3>
                        <p className="text-gray-700 text-sm">Registering in the wrong class is useless. For example, a restaurant needs Class 43 (Services), not just Class 30 (Food products). We ensure comprehensive coverage.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Not Using NDAs</h3>
                        <p className="text-gray-700 text-sm">Sharing your startup idea with developers or investors without a Non-Disclosure Agreement (NDA) is a fatal error. Once it's public, it's no longer a trade secret or patentable.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">DIY Filing</h3>
                        <p className="text-gray-700 text-sm">Using cheap online automated services often leads to rejection due to incorrect user dates or descriptions. IP is a legal process, not a data entry task.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are not just a law firm; we are your strategic IP partners in Maharashtra.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Registry Experts</h3>
                      <p className="text-gray-600">Daily presence at the Antop Hill Trademark Registry ensures your file never gathers dust.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Litigation Ready</h3>
                      <p className="text-gray-600">If someone copies you, we don't just send notices; we are ready to fight in the Bombay High Court.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💼</div>
                      <h3 className="font-bold text-xl mb-2">Sector Specialists</h3>
                      <p className="text-gray-600">Dedicated teams for Media, Pharma, and Tech ensuring industry-relevant advice.</p>
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
                        "We faced a tough trademark opposition from a multinational. AMA Legal Solutions fought our case at the Mumbai Registry with incredible tenacity. Their knowledge of local case law won us the registration."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Khanna</p>
                          <p className="text-sm text-gray-500">Director, Khanna Spices, Nashik</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a tech startup in Pune, we were clueless about patents. The team at AMA not only filed our patent but also helped us get a ₹2 Lakh reimbursement from the MSInS scheme. Highly recommended!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sneha Patil</p>
                          <p className="text-sm text-gray-500">Co-founder, GreenTech Innovations</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Brand in Maharashtra</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let competitors steal your hard work. Partner with Maharashtra's trusted IP experts today.
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
                    Get immediate assistance for trademark filing and objections in Maharashtra.
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

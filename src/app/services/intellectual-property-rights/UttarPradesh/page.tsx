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
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2023-11-24",
  "dateModified": "2024-01-20"
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
    { id: "economic-context", title: "UP's Economic Renaissance & IP" },
    { id: "noida-greater-noida", title: "Noida: The Tech & Media Hub" },
    { id: "defense-corridor", title: "Defense Industrial Corridor" },
    { id: "odop-deep-dive", title: "ODOP: Protecting Heritage" },
    { id: "kanpur-manufacturing", title: "Kanpur: Leather & Heavy Industries" },
    { id: "agro-ipr", title: "Agro IPR: Beyond Crops" },
    { id: "legislative-landscape", title: "Legislative Landscape" },
    { id: "trademark-strategy", title: "Trademark Strategy" },
    { id: "patent-innovation", title: "Patents & Designs" },
    { id: "enforcement-mechanisms", title: "Enforcement Mechanisms" },
    { id: "startup-benefits", title: "Startup UP Incentives" },
    { id: "why-ama-legal", title: "Why AMA Legal Solutions" },
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
              Intellectual Property Rights in <span className="text-[#D2A02A]">Uttar Pradesh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Strategic IP Management for Uttar Pradesh's Manufacturing Giants, Tech Unicorns, and Heritage Artisans.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free IP Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full px-4 lg:px-12 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            
            {/* Left Sidebar: Table of Contents */}
            <div className="hidden lg:block sticky top-24">
               <TableOfContents sections={tocSections} />
            </div>

            {/* Main Content Area */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-12">
                
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction: The Intellectual Capital of Uttar Pradesh</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Uttar Pradesh, the most populous state in India, is currently undergoing a massive economic transformation. Driven by the vision of becoming a <strong>$1 Trillion Economy</strong> by 2027, the state has moved far beyond its traditional image to becoming a hub for defense manufacturing, electronics, IT services, and export oriented handicrafts. In this rapidly evolving landscape, <strong>Intellectual Property Rights (IPR)</strong> are the bedrock upon which sustainable business growth is being built.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  From protecting the unique genetic strains of the <strong>Kalanamak Rice</strong> in Siddharthnagar to patenting cutting edge AI algorithms in <strong>Noida's Special Economic Zones (SEZs)</strong>, the scope of IP in UP is vast and varied. The state's diverse industrial fabric creates a complex IP ecosystem where modern patent laws intersect with traditional Geographical Indications. For a business operating in UP today, ignoring IP is not just a risk; it is a direct threat to survival in a market that is increasingly connected to the global economy.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  AMA Legal Solutions is uniquely positioned to navigate this landscape. With our deep roots in the region and a sophisticated understanding of national IP laws, we help businesses across Uttar Pradesh lock in their competitive advantage. Whether you are a startup dealing with angel investors or a legacy manufacturing house facing counterfeit issues, our comprehensive legal strategies ensure your intangible assets remain exclusively yours.
                </p>
              </section>

              {/* Economic Context */}
              <section id="economic-context" className="scroll-mt-32">
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">Uttar Pradesh's Economic Renaissance & The Role of IP</h2>
                 <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The economic narrative of Uttar Pradesh is being rewritten by massive infrastructure projects like the Jewar International Airport and the network of Expressways (Yamuna, Purvanchal, Bundelkhand). This connectivity has opened the floodgates for investment.
                 </p>
                 <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                     <h3 className="text-xl font-bold text-blue-900 mb-2">The "Make in UP" Momentum</h3>
                     <p className="text-blue-800">
                        With policies favoring "Make in India" and "Make in UP," foreign direct investment is pouring into sectors like Electronics System Design & Manufacturing (ESDM). However, foreign investors demand robust IP protection before sharing technology. This makes <strong>Technology Transfer Agreements</strong> and <strong>Patent Enforcement</strong> critical services for joint ventures in the region.
                     </p>
                 </div>
                 <p className="text-lg leading-relaxed text-gray-700">
                    Furthermore, the state's focus on MSMEs (Micro, Small and Medium Enterprises) means that smaller players are now entering the global arena. For an MSME in Moradabad exporting brassware to the US, a registered trademark is not a luxury—it is a mandatory requirement for listing on global e-commerce platforms like Amazon and AliBaba.
                 </p>
              </section>

              {/* Noida & Greater Noida */}
              <section id="noida-greater-noida" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Noida & Greater Noida: The Twin Cities of Tech & Media</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Gautam Buddha Nagar (Noida and Greater Noida) accounts for a massive chunk of the state's GDP. This region is the playground for the new economy.
                </p>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-[#D2A02A]">1. The IT & SaaS Ecosystem</h3>
                    <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        Noida is home to global giants like HCL, Adobe, and Microsoft, alongside thousands of agile startups.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Software Patents:</strong> While "code" is copyrighted, the "method" or "technical effect" can be patented. We help Noida based SaaS firms identify patentable elements in their software architecture to build a defensive patent portfolio.</li>
                        <li><strong>Source Code Protection:</strong> We draft airtight employment contracts ensuring that the code written by developers belongs to the company, preventing IP leakage when employees switch jobs.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-[#D2A02A]">2. The Proposed Film City</h3>
                    <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        With the upcoming Film City near the Jewar Airport, UP is set to become a hub for media and entertainment. This brings <strong>Copyright Law</strong> to center stage.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Script Registration:</strong> Protecting screenplays and formats from plagiarism.</li>
                        <li><strong>Music Rights:</strong> Navigating the complex world of mechanical and performance rights with societies like IPRS.</li>
                        <li><strong>Personality Rights:</strong> protecting the likeness and voice of artists from unauthorized AI replication.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-[#D2A02A]">3. Electronics Manufacturing (ESDM)</h3>
                    <p className="text-lg leading-relaxed text-gray-700 mb-4">
                        With factories for Samsung, Vivo, and other OEMs, Greater Noida is an electronics hub.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Industrial Designs:</strong> Protecting the shape and aesthetics of consumer electronics (cases, chargers, wearables).</li>
                        <li><strong>Standard Essential Patents (SEPs):</strong> Navigating licensing terms for FRAND (Fair, Reasonable, and Non Discriminatory) patents used in mobile technology.</li>
                    </ul>
                </div>
              </section>

              {/* Defense Corridor */}
              <section id="defense-corridor" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The UP Defense Industrial Corridor</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Uttar Pradesh Defense Industrial Corridor (UPDIC)</strong> with nodes in Aligarh, Agra, Jhansi, Chitrakoot, Kanpur, and Lucknow is a strategic initiative to reduce India's import dependence in defense.
                </p>
                <div className="bg-gray-100 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>Patenting Defense Tech:</strong> Innovations in drone technology, ballistics, and aerospace components are highly sensitive.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Secrecy Directions:</strong> Under Section 35 of the Patents Act, inventions relevant to defense purposes may be subject to secrecy directions. We understand the specialized protocol for filing such patents, ensuring compliance with the Ministry of Defense guidelines while securing priority dates.</li>
                        <li><strong>Export Controls:</strong> Advising manufacturers on SCOMET (Special Chemicals, Organisms, Materials, Equipment and Technologies) regulations when exporting dual use items developed in these corridors.</li>
                    </ul>
                </div>
              </section>

              {/* ODOP Deep Dive */}
              <section id="odop-deep-dive" className="scroll-mt-32">
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">ODOP: Strategic Protection for Heritage Industries</h2>
                 <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The One District One Product (ODOP) scheme has put the spotlight on district specific specialities. However, fame attracts fakes. We provide tailored protection strategies for these clusters.
                 </p>
                 
                 <div className="grid md:grid-cols-2 gap-8">
                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                         <h3 className="text-lg font-bold text-[#D2A02A] mb-2">Aligarh: Locks & Hardware</h3>
                         <p className="text-sm text-gray-600 mb-3">ODOP Product: Locks and Hardware</p>
                         <p className="text-gray-700">
                             <strong>Strategy:</strong> While the mechanism of locks may be generic, the <strong>design</strong> (shape) and <strong>trademark</strong> (brand name) are vital. We help Aligarh manufacturers move from being OEM suppliers to brand owners by registering trademarks and enforcing them against lookalikes.
                         </p>
                     </div>

                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                         <h3 className="text-lg font-bold text-[#D2A02A] mb-2">Moradabad: The Brass City</h3>
                         <p className="text-sm text-gray-600 mb-3">ODOP Product: Metal Crafts</p>
                         <p className="text-gray-700">
                             <strong>Strategy:</strong> <strong>Industrial Design Registration</strong> is the key here. The value of Moradabad brassware lies in its aesthetic pattern. Registering these designs prevents competitors from mass producing cheap replicas using molds.
                         </p>
                     </div>

                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                         <h3 className="text-lg font-bold text-[#D2A02A] mb-2">Lucknow: Chikankari</h3>
                         <p className="text-sm text-gray-600 mb-3">ODOP Product: Chikankari & Zardozi</p>
                         <p className="text-gray-700">
                             <strong>Strategy:</strong> <strong>Geographical Indication (GI)</strong>. We assist artisan groups in becoming "Authorized Users" of the Lucknow Chikan GI. This certification allows them to command a premium price and distinguish authentic handwork from machine embroidery.
                         </p>
                     </div>

                     <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                         <h3 className="text-lg font-bold text-[#D2A02A] mb-2">Bhadohi: Carpet City</h3>
                         <p className="text-sm text-gray-600 mb-3">ODOP Product: Carpets & Dari</p>
                         <p className="text-gray-700">
                              <strong>Strategy:</strong> <strong>Copyright in Patterns</strong>. Unique carpet designs can be protected as artistic works under copyright law or as designs. This is crucial for exports to high end markets in Europe where design theft is taken seriously.
                         </p>
                     </div>
                 </div>
              </section>

              {/* Kanpur Manufacturing */}
              <section id="kanpur-manufacturing" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kanpur: Evolution from Leather to Technology</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Kanpur is traditionally known as the "Manchester of the East" for its textile and leather industries. Today, it is also home to IIT Kanpur, one of India's premier research institutes.
                </p>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-lg text-gray-900">The Leather Industry</h3>
                        <p className="text-gray-700 text-sm mt-1">
                            For leather tanneries and saddlery manufacturers, the biggest threat is <strong>brand counterfeiting</strong> in overseas markets. We handle <strong>International Trademark Registration</strong> (Madrid Protocol) for Kanpur exporters, ensuring their brands are protected in the USA, UK, and Germany—key markets for equestrian gear.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-900">Deep Tech Innovations</h3>
                        <p className="text-gray-700 text-sm mt-1">
                            Spinoffs from IIT Kanpur are pioneering innovations in flexible electronics and clean energy. We work with these Deep Tech startups to draft <strong>Provisional Patent Applications</strong> early in the R&D cycle, securing their priority rights before they publish research papers.
                        </p>
                    </div>
                </div>
              </section>

              {/* Agro IPR */}
              <section id="agro-ipr" className="scroll-mt-32">
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">Agro IPR: Protecting UP's Green Gold</h2>
                 <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh is an agrarian powerhouse. Beyond GIs, the <strong>Protection of Plant Varieties and Farmers' Rights Act (PPVFR)</strong> is a crucial but underutilized tool.
                 </p>
                 <ul className="list-disc pl-6 space-y-4 text-gray-700">
                     <li><strong>Mango Varieties:</strong> The famous <strong>Malihabadi Dussehri</strong> mango is a GI. We assist farmer collectives in maintaining the quality standards required to retain this tag.</li>
                     <li><strong>Kalanamak Rice:</strong> Known as the "Buddha Rice," this aromatic variety from Eastern UP (Siddharthnagar) commands high export value. Protecting the genetic purity and branding of this rice is essential to prevent adulteration in the supply chain.</li>
                     <li><strong>Mentha Oil:</strong> UP is a major producer of Mentha. We help agro processing units trademark their essential oil brands for the FMCG and pharmaceutical markets.</li>
                 </ul>
              </section>

              {/* Legislative Landscape */}
              <section id="legislative-landscape" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Legislative Landscape: Navigating Courts & Registries</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Effective IPR management requires a mastery of the local judicial machinery. UP's legal framework is robust but requires specialized navigation.
                </p>

                <div className="space-y-8">
                     <div className="relative pl-8 border-l-4 border-gray-300">
                         <h3 className="text-xl font-bold text-gray-900">1. The High Court of Judicature at Allahabad</h3>
                         <p className="text-gray-700 mt-2">
                             The Allahabad High Court, along with its Lucknow Bench, has original jurisdiction in certain IPR matters and appellate jurisdiction in others. It is known for granting <strong>John Doe Orders (Ashok Kumar Orders)</strong>, which are critical when the infringer's identity is unknown—a common scenario in wholesale markets like Kanpur and Varanasi.
                         </p>
                     </div>

                     <div className="relative pl-8 border-l-4 border-gray-300">
                         <h3 className="text-xl font-bold text-gray-900">2. Commercial Courts</h3>
                         <p className="text-gray-700 mt-2">
                             Pursuant to the Commercial Courts Act, 2015, specialized courts have been set up in districts like <strong>Gautam Buddh Nagar (Noida)</strong> and <strong>Lucknow</strong>. These courts act fast.
                         </p>
                         <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                             <li><strong>Summary Judgments:</strong> Courts can decide cases without a full trial if the defense has no real prospect of success.</li>
                             <li><strong>Case Management Hearings:</strong> Timelines are fixed early, preventing the years long delays typical of civil litigation.</li>
                         </ul>
                     </div>

                     <div className="relative pl-8 border-l-4 border-gray-300">
                         <h3 className="text-xl font-bold text-gray-900">3. The Trademark Registry, Delhi</h3>
                         <p className="text-gray-700 mt-2">
                             Applicants from UP fall under the jurisdiction of the <strong>Delhi Registry (Dwarka)</strong>. This geographical proximity is a massive advantage. We attend physical hearings at the Registry regularly, resolving objections (Section 9 & 11) face to face with the Examiners, which often yields higher success rates than written submissions alone.
                         </p>
                     </div>
                </div>
              </section>

              {/* Trademark Strategy */}
              <section id="trademark-strategy" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Trademark Registration</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In a state as populous as UP, brand naming collisions are frequent. Our trademark strategy goes beyond simple filing.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-[#D2A02A] mb-2">Comprehensive Search</h3>
                        <p className="text-gray-700 text-sm">
                            We don't just search the online database; we search common law usage. Even if a mark is not registered, a local player in Ghaziabad might have prior user rights. We identify these risks upfront.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-[#D2A02A] mb-2">Multi-Class Filing</h3>
                        <p className="text-gray-700 text-sm">
                            Business conglomerates in UP often diversify. A realty firm in Noida might start a hospitality chain. We advise on defensive registrations in related classes to secure future expansion.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-[#D2A02A] mb-2">Hindi Trademarks</h3>
                        <p className="text-gray-700 text-sm">
                            The consumer base in UP is largely Hindi speaking. We register trademarks in <strong>Devanagari script</strong> as well to prevent phonetically similar infringing brands from confusing rural consumers.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-[#D2A02A] mb-2">Objection Handling</h3>
                        <p className="text-gray-700 text-sm">
                            The Delhi Registry is strict. We draft meticulous replies to Examination Reports, citing relevant case laws from the Delhi and Allahabad High Courts to overcome objections.
                        </p>
                    </div>
                </div>
              </section>

              {/* Patent Innovation */}
              <section id="patent-innovation" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Patents & Designs: Securing Innovation</h2>
                <div className="mb-6">
                    <h3 className="font-bold text-lg text-gray-900">The 20 Year Monopoly</h3>
                    <p className="text-gray-700 mt-2">
                        A patent gives you the exclusive right to exclude others from making, using, or selling your invention. For manufacturing units in Ghaziabad and Meerut, this is creating a moat against competitors.
                    </p>
                </div>
                
                <table className="w-full text-left border-collapse mb-6">
                    <thead>
                        <tr>
                            <th className="border-b-2 border-gray-200 p-3 text-gray-900 font-bold">Process Step</th>
                            <th className="border-b-2 border-gray-200 p-3 text-gray-900 font-bold">Our Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-100">
                            <td className="p-3 text-gray-700 font-medium">1. Ideation & Discovery</td>
                            <td className="p-3 text-gray-600 text-sm">Mining invention disclosures from your R&D teams.</td>
                        </tr>
                         <tr className="border-b border-gray-100">
                            <td className="p-3 text-gray-700 font-medium">2. Prior Art Search</td>
                            <td className="p-3 text-gray-600 text-sm">Using paid databases to ensure novelty.</td>
                        </tr>
                         <tr className="border-b border-gray-100">
                            <td className="p-3 text-gray-700 font-medium">3. Drafting</td>
                            <td className="p-3 text-gray-600 text-sm">Writing technical descriptions and legal claims.</td>
                        </tr>
                         <tr className="border-b border-gray-100">
                            <td className="p-3 text-gray-700 font-medium">4. Filing</td>
                            <td className="p-3 text-gray-600 text-sm">Filing Form 1, Form 2, and Form 5 (non-obviousness).</td>
                        </tr>
                        <tr>
                            <td className="p-3 text-gray-700 font-medium">5. Prosecution</td>
                            <td className="p-3 text-gray-600 text-sm">Responding to FER (First Examination Report).</td>
                        </tr>
                    </tbody>
                </table>
              </section>

              {/* Enforcement Mechanisms */}
              <section id="enforcement-mechanisms" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Enforcement: The Boot on the Ground</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh's vast geography can make enforcement challenging. We employ a multi pronged approach tailored to the region.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h3 className="font-bold text-red-900 mb-2">Civil Raids (Anton Piller Orders)</h3>
                        <p className="text-red-800 text-sm">
                            We obtain court orders appointing Local Commissioners to enter premises, search for infringing goods, and seize them immediately without prior warning to the infringer.
                        </p>
                    </div>
                     <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h3 className="font-bold text-red-900 mb-2">Criminal Actions</h3>
                        <p className="text-red-800 text-sm">
                            Under the Copyright Act and Trademark Act, infringement is a cognizable offense. We coordinate with the SSPs (Senior Superintendents of Police) of districts to lodge FIRs and conduct police raids.
                        </p>
                    </div>
                     <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h3 className="font-bold text-red-900 mb-2">Customs Recordal</h3>
                        <p className="text-red-800 text-sm">
                            For importers, we record IP rights with Indian Customs (IPR Rules, 2007). This ensures that counterfeit goods entering via dry ports in Dadri or ICD Kanpur are confiscated at the border itself.
                        </p>
                    </div>
                     <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h3 className="font-bold text-red-900 mb-2">Online Takedowns</h3>
                        <p className="text-red-800 text-sm">
                            We use automated tools to scan marketplaces like IndiaMART and Udaan (popular in UP for B2B) and issue takedown notices under the IT Act intermediary guidelines.
                        </p>
                    </div>
                </div>
              </section>

              {/* Startup Benefits */}
              <section id="startup-benefits" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">StartInUP: Government Incentives</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Uttar Pradesh Startup Policy 2020</strong> is one of the most generous in the country regarding IPR support.
                </p>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                     <h3 className="text-2xl font-bold text-green-900 mb-4">Financial Reimbursements</h3>
                     <div className="grid md:grid-cols-2 gap-8">
                         <div>
                             <p className="font-bold text-green-800 mb-1">Domestic Patents</p>
                             <p className="text-green-700">Reimbursement of up to <strong>₹2 Lakhs</strong> per patent application filed.</p>
                         </div>
                         <div>
                             <p className="font-bold text-green-800 mb-1">International Patents</p>
                             <p className="text-green-700">Reimbursement of up to <strong>₹10 Lakhs</strong> per international patent application.</p>
                         </div>
                         <div>
                             <p className="font-bold text-green-800 mb-1">Trademarks & Designs</p>
                             <p className="text-green-700">Reimbursement provisions available for other IP categories as well.</p>
                         </div>
                         <div>
                             <p className="font-bold text-green-800 mb-1">Eligibility</p>
                             <p className="text-green-700">Entities must be registered with DPIIT and the 'StartInUP' portal.</p>
                         </div>
                     </div>
                     <div className="mt-6 pt-6 border-t border-green-200">
                         <p className="text-green-900 font-semibold italic">
                             "AMA Legal Solutions assists startups not just in filing the IP, but in navigating the bureaucratic process to actually receive these funds into their bank accounts."
                         </p>
                     </div>
                </div>
              </section>

              {/* Why Choose AMA */}
              <section id="why-ama-legal" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Partner with AMA Legal Solutions?</h2>
                <div className="mb-6">
                    <p className="text-lg text-gray-700 mb-6">
                        We are not just a law firm; we are strategic partners in your growth story. Our integrated approach ensures that your legal spending is an investment, not an expense.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#D2A02A] text-xl mr-3 font-bold">✓</span>
                                <div>
                                    <strong className="block text-gray-900">Pan-UP Presence</strong>
                                    <p className="text-gray-700 text-sm">From the boardrooms of Noida to the factory floors of Kanpur, we are accessible.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D2A02A] text-xl mr-3 font-bold">✓</span>
                                <div>
                                    <strong className="block text-gray-900">Technical Expertise</strong>
                                    <p className="text-gray-700 text-sm">Our team includes engineers and scientists who understand complex patent terminologies.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#D2A02A] text-xl mr-3 font-bold">✓</span>
                                <div>
                                    <strong className="block text-gray-900">Proven Track Record</strong>
                                    <p className="text-gray-700 text-sm">Successfully handled 500+ trademark oppositions and 100+ patent filings for UP based entities.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D2A02A] text-xl mr-3 font-bold">✓</span>
                                <div>
                                    <strong className="block text-gray-900">Fixed Fee Structure</strong>
                                    <p className="text-gray-700 text-sm">No hourly billing shocks. We provide clear, fixed quotes for every stage of the process.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
              </section>

              {/* FAQ */}
              <FaqSection />

              {/* Final CTA */}
              <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Protect Your Business in Uttar Pradesh?</h2>
                  <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Secure your brand, your technology, and your future with the state's leading IP experts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                        Get Started Now
                      </button>
                    </Link>
                    <a href="tel:+918700343611">
                      <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                         Call: +91-8700343611
                      </button>
                    </a>
                  </div>
                  <p className="mt-8 text-sm opacity-70">
                    Trusted by 500+ Businesses in Uttar Pradesh
                  </p>
                </div>
              </section>

            </div>

             {/* Right Sidebar: Contact & Quick Links */}
            <div className="sticky top-24 space-y-8">
               {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to an IP Expert</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get immediate assistance for trademark filing, patent registration, and copyright protection in Uttar Pradesh.
                </p>
                <div className="space-y-4">
                     <a 
                    href="tel:+918700343611" 
                    className="flex items-center justify-center w-full bg-[#D2A02A] text-white py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors"
                    >
                    <span className="mr-2">📞</span> +91-8700343611
                    </a>
                    <Link 
                    href="/contact" 
                    className="flex items-center justify-center w-full border-2 border-[#D2A02A] text-[#D2A02A] py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                    >
                    Request Callback
                    </Link>
                </div>
              </div>

              {/* Services List */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/company-incorporation" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                      <span className="text-[#D2A02A] mr-2">›</span> Company Registration
                    </Link>
                  </li>
                   <li>
                    <Link href="/services/tax-and-compliance" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                      <span className="text-[#D2A02A] mr-2">›</span> Tax & GST Filing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                      <span className="text-[#D2A02A] mr-2">›</span> Corporate Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                      <span className="text-[#D2A02A] mr-2">›</span> Litigation Services
                    </Link>
                  </li>
                </ul>
              </div>

               {/* Client Review Snippet */}
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                 <div className="flex text-[#D2A02A] mb-2">★★★★★</div>
                 <p className="text-gray-700 text-sm italic mb-3">"Efficient and professional service. They handled our trademark opposition case in Noida very effectively."</p>
                 <p className="text-xs font-bold text-gray-900">- Anjali Singh, Noida</p>
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
                "Tamil Nadu": "TamilNadu",
                "Uttar Pradesh": "UttarPradesh",
                "Puducherry": "pudducherry"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

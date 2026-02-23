import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "IPR Services in Chandigarh | Expert Trademark & Patent Attorneys",
  description:
    "Secure your intellectual property in Chandigarh with AMA Legal Solutions. Comprehensive IPR services including Trademark, Patent, and Copyright registration in the Tri-City region.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/chandigarh',
  },
  openGraph: {
    title: "IPR Services in Chandigarh | Expert Trademark & Patent Attorneys",
    description: "Secure your intellectual property in Chandigarh with AMA Legal Solutions. Comprehensive IPR services including Trademark, Patent, and Copyright registration in the Tri-City region.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/chandigarh",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Chandigarh",
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
      "name": "Chandigarh",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/chandigarh"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Chandigarh: The Complete Guide",
  "description": "A detailed guide to IPR protection in Chandigarh. Learn about trademark registration processes, patent filing for startups, and copyright laws in the Tri-City area.",
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
  "name": "IPR Services Chandigarh",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Professional intellectual property legal services in Chandigarh.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
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
        "name": "Vikram Gill"
      },
      "reviewBody": "AMA Legal Solutions handled our trademark opposition case with exceptional skill. Their understanding of the New Delhi Registry procedures while sitting in Chandigarh is commendable."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Dr. Simran Kaur"
      },
      "reviewBody": "As a researcher at Panjab University, I needed guidance on patent filing. The team provided clear, step-by-step assistance and helped me secure my invention."
    }
  ]
};

export default function ChandigarhIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-ipr-matters", title: "Why IPR Matters in Chandigarh" },
    { id: "types-of-ip", title: "Types of IP Protection" },
    { id: "chandigarh-ecosystem", title: "Chandigarh's IP Ecosystem" },
    { id: "legal-framework", title: "Legal Jurisdiction & Framework" },
    { id: "registration-process", title: "Detailed Registration Process" },
    { id: "international-protection", title: "International IP Protection" },
    { id: "digital-ip", title: "Digital IP & Domain Disputes" },
    { id: "enforcement", title: "IP Enforcement & Litigation" },
    { id: "startups", title: "Support for Startups" },
    { id: "myths-vs-facts", title: "IP Myths vs Facts" },
    { id: "case-studies", title: "Case Studies" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Chandigarh", href: "/services/intellectual-property-rights/chandigarh" },
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
              Premier <span className="text-[#D2A02A]">IPR Services in Chandigarh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Protecting the ideas that shape the future. From the Rajiv Gandhi IT Park to the Industrial Area, we secure trademarks, patents, and copyrights for Chandigarh's innovators.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Securing Innovation in The City Beautiful</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chandigarh, widely celebrated as "The City Beautiful," is the first planned city of modern India and serves as a beacon of progress, urban planning, and economic vitality. As the joint capital of Punjab and Haryana, it is not merely an administrative hub but a pulsating center of commerce, education, and technology. The city's landscape has evolved dramatically, with the rapid expansion of the **Rajiv Gandhi Chandigarh Technology Park (RGCTP)** creating a new silicone valley in the north, and the bustling **Industrial Areas of Phase I and II** continuing to be the backbone of manufacturing.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In this hyper-competitive environment, where startups are launching daily in Coworking spaces across Sector 17 and Sector 34, and established manufacturers are expanding their global footprint, **Intellectual Property Rights (IPR)** have emerged as the most critical asset. Whether you are a tech startup developing a new SaaS platform in IT Park, a pharmaceutical manufacturer in the vicinity of Baddi (managed from a Chandigarh corporate office), or a heritage retail brand in Sector 22, your intangible assets—brand names, inventions, designs, and creative content—often hold more value than your physical inventory.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we provide specialized, full-spectrum IPR services tailored to the unique needs of the Tri-City region (Chandigarh, Mohali, Panchkula). We understand that protecting your IP is not just a legal formality; it is a strategic business imperative to prevent imitation, secure market share, and ensure long-term growth in a globalized economy.
                  </p>
                </section>

                {/* Why IPR Matters */}
                <section id="why-ipr-matters" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Intellectual Property Rights Matter for Chandigarh Businesses</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The business landscape in Chandigarh is shifting from traditional trading to value-added services and innovation. In this transition, IPR serves as the currency of the knowledge economy.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Distinctiveness</h3>
                      <p className="text-gray-700">
                        In a city with a high density of retail outlets and service providers, a registered trademark distinguishes your "Sector 17 Coffee House" from a generic imitator. It builds consumer trust and loyalty, which is essential for survival in Chandigarh's discerning market.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Valuation & Investment</h3>
                      <p className="text-gray-700">
                        For startups in the IT Park seeking venture capital, IP assets are a key valuation driver. Investors look for proprietary technology protected by patents or copyrights, rather than just a good team. A strong IP portfolio can significantly increase your pre-money valuation.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Global Expansion</h3>
                      <p className="text-gray-700">
                        Many Chandigarh-based businesses are exporters—sending auto parts, textiles, and software to Europe and North America. Securing IP rights ensures you can safely enter these markets without fear of infringing local rights or being copied by international competitors.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Leverage</h3>
                      <p className="text-gray-700">
                        Without registration, you are left with weak "common law" remedies that require proving reputation in court—a costly and uncertain process. Registration gives you a statutory right to sue for infringement, seize counterfeit goods, and claim damages with much greater ease.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Types of IP */}
                <section id="types-of-ip" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Intellectual Property Protection</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Different assets require different forms of protection. Here is a breakdown of what we cover:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          <th className="border-b-2 border-gray-200 p-4 font-bold text-gray-900">IP Type</th>
                          <th className="border-b-2 border-gray-200 p-4 font-bold text-gray-900">What it Protects</th>
                          <th className="border-b-2 border-gray-200 p-4 font-bold text-gray-900">Chandigarh Example</th>
                          <th className="border-b-2 border-gray-200 p-4 font-bold text-gray-900">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="border-b border-gray-200 p-4 font-semibold">Trademark</td>
                          <td className="border-b border-gray-200 p-4">Brand names, logos, slogans, sounds, smells.</td>
                          <td className="border-b border-gray-200 p-4">The name and logo of a popular bakery in Sector 35.</td>
                          <td className="border-b border-gray-200 p-4">10 Years (Renewable indefinitely)</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border-b border-gray-200 p-4 font-semibold">Patent</td>
                          <td className="border-b border-gray-200 p-4">New inventions, processes, or machines.</td>
                          <td className="border-b border-gray-200 p-4">A novel waste management machine developed in Industrial Area.</td>
                          <td className="border-b border-gray-200 p-4">20 Years</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border-b border-gray-200 p-4 font-semibold">Copyright</td>
                          <td className="border-b border-gray-200 p-4">Original literary, artistic, musical works, and software code.</td>
                          <td className="border-b border-gray-200 p-4">Source code of an app developed by a startup in IT Park.</td>
                          <td className="border-b border-gray-200 p-4">Lifetime + 60 Years</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border-b border-gray-200 p-4 font-semibold">Industrial Design</td>
                          <td className="border-b border-gray-200 p-4">Aesthetic shape, pattern, or configuration of an object.</td>
                          <td className="border-b border-gray-200 p-4">The unique shape of a furniture piece designed in Chandigarh.</td>
                          <td className="border-b border-gray-200 p-4">10 Years (+5 Years extension)</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border-b border-gray-200 p-4 font-semibold">Geographical Indication (GI)</td>
                          <td className="border-b border-gray-200 p-4">Products with specific geographical origin and qualities.</td>
                          <td className="border-b border-gray-200 p-4">Phulkari embroidery from Punjab (regionally relevant).</td>
                          <td className="border-b border-gray-200 p-4">10 Years (Renewable)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Chandigarh Ecosystem */}
                <section id="chandigarh-ecosystem" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Chandigarh's Diverse IP Landscape: Sector-Specific Focus</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The city's economy is a complex tapestry of industries. We have tailored our services to meet the specific demands of these key sectors:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">IT & Technology: The Silicon Valley of the North</h3>
                      <p className="text-gray-600 mb-4">
                        With giants like Infosys, Tech Mahindra, and Net Smartz in the IT Park, and hundreds of agile startups in Mohali's Quark City, the need for IP is immense.
                      </p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Software Patenting (CRIs):</strong> Navigating Section 3(k) of the Patents Act is tricky. We help identify the "technical effect" in your software to make it patentable.</li>
                        <li><strong>SaaS Agreements:</strong> Drafting robust End User License Agreements (EULA) and SaaS contracts to protect your IP while licensing it globally.</li>
                        <li><strong>Trade Secrets:</strong> Implementing strict NDAs and Non-Compete clauses to prevent employee churn from leaking sensitive algorithms.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Education & Coaching Institutes</h3>
                      <p className="text-gray-600 mb-4">
                        Chandigarh is a hub for competitive exam coaching (Sector 34). The study material produced here is intellectual gold.
                      </p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Copyright Protection:</strong> We register copyrights for study modules, test series, and online lecture videos to prevent unauthorized copying by rival institutes or students.</li>
                        <li><strong>Brand Protection:</strong> Registering trademarks for institute names to stop "lookalike" centers from misleading students.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Pharmaceuticals & Healthcare</h3>
                      <p className="text-gray-600 mb-4">
                        With the Baddi industrial belt nearby, many pharma companies maintain corporate offices in Chandigarh.
                      </p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Trademarking Drug Names:</strong> Ensuring drug names are not deceptively similar to existing medicines, which is a high-risk area in pharma.</li>
                        <li><strong>Patent Prosecution:</strong> Filing for process patents and formulations, and handling pre-grant and post-grant oppositions.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Food, Hospitality & Retail</h3>
                      <p className="text-gray-600 mb-4">
                        From Sector 17 Plaza to Elante Mall, retail is king.
                      </p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Class 43 Registration:</strong> Protecting restaurant names and cloud kitchen brands.</li>
                        <li><strong>Franchising:</strong> Drafting franchise agreements that license your IP to partners while maintaining strict quality control and brand ownership.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Jurisdiction: Navigating the Delhi-Chandigarh Corridor</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    One of the most common confusion points for Chandigarh businesses is jurisdiction. While your physical office is in the Tri-City, the administrative machinery for IP is centralized.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. The Trade Marks Registry, New Delhi</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Chandigarh falls under the territorial jurisdiction of the **Trade Marks Registry located in Dwarka, New Delhi**.
                      </p>
                      <p className="text-gray-700">
                        **Implication:** You cannot walk into a local office in Sector 17 to file a trademark. All applications are filed electronically to Delhi. All show-cause hearings—where you defend your mark against an objection—are held at the Delhi Registry.
                        <br />
                        **Our Solution:** AMA Legal Solutions acts as your bridge. Our attorneys are regular practitioners at the Delhi Registry. We handle all filings digitally and appear physically for hearings, saving you the time and cost of travel.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Punjab and Haryana High Court (Chandigarh)</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        For enforcement, however, the jurisdiction is local. The **Hon'ble Punjab and Haryana High Court** in Sector 1 is the appellate authority and the primary venue for high-stakes commercial IP suits.
                      </p>
                      <p className="text-gray-700">
                        The High Court has been proactive in granting **"John Doe" (Ashok Kumar) orders**, allowing rights holders to raid premises where counterfeit goods are suspected, even if the specific infringer's name is unknown at the time of filing.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. District Courts, Sector 43</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        For standard infringement suits seeking damages, accounts of profit, and permanent injunctions, the District Courts in Sector 43 are the court of first instance.
                      </p>
                      <p className="text-gray-700">
                        We also work closely with the **Economic Offenses Wing (EOW)** of the Chandigarh Police to register FIRs under the Trade Marks Act, 1999, for criminal enforcement against counterfeiters operating in local markets like Shastri Market or Palika Bazar.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Registration Roadmap</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registering IP is a systematic legal process that requires precision. A single error in classification or applicant details can lead to rejection years down the line. Here is the detailed workflow we follow:
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Pre-Filing Strategy & Search</h3>
                      <p className="text-gray-700">
                        **Classification:** We categorize your goods/services under the 45 Classes of the Nice Classification. For a Chandigarh cafe, for instance, we might suggest Class 43 (Services), Class 30 (Coffee), and Class 35 (Retail).
                        <br />
                        **Search:** We conduct a comprehensive search on the IP India database, public domain, and MCA records to ensure your brand is legally available.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Application Filing</h3>
                      <p className="text-gray-700">
                        **Trademark:** We file **Form TM-A**. Crucially, if you have been using the mark before filing, we file a **User Affidavit** to claim "Prior User" rights, which significantly strengthens your legal position.
                        <br />
                        **Patent:** We file a Provisional Specification (to secure a priority date) or a Complete Specification (Form 1 & 2).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Examination & Objection Handling</h3>
                      <p className="text-gray-700">
                        The Registry examines the application. It is standard to receive an Examination Report raising objections under Section 9 (distinctiveness) or Section 11 (similarity).
                        <br />
                        **Our Role:** We draft a substantive legal reply within 30 days, citing relevant case laws to rebut the examiner's objections.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 4: Show Cause Hearing</h3>
                      <p className="text-gray-700">
                        If the written reply is not accepted, a hearing is scheduled. Our attorney appears before the Hearing Officer at the Registry (virtually or physically in Delhi) to argue the case on its merits.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 5: Publication & Opposition</h3>
                      <p className="text-gray-700">
                        Once accepted, the mark is published in the Trade Marks Journal. This opens a 4-month window for third parties to oppose the grant (Form TM-O). If opposed, it enters a quasi-judicial trial phase. If unopposed, it proceeds to registration.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 6: Registration & Renewal</h3>
                      <p className="text-gray-700">
                        The Registration Certificate is issued. Trademarks must be renewed every 10 years (Form TM-R). Patents require annual maintenance fees.
                      </p>
                    </div>
                  </div>
                </section>

                {/* International Protection */}
                <section id="international-protection" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Going Global: International IP Protection</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chandigarh is a major export hub. However, an Indian trademark or patent gives **zero protection** outside India. For businesses targeting global markets, we offer streamlined international filing services.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">The Madrid Protocol</h3>
                    <p className="text-blue-800">
                      Instead of filing separate trademark applications in every country (which is expensive and time-consuming), we use the **Madrid Protocol system**. This allows us to file a **single application** from India, in English, and pay one set of fees to protect your brand in up to **130 countries**, including the USA, EU, UK, Australia, and China.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Patent Cooperation Treaty (PCT)</h3>
                    <p className="text-blue-800">
                      For inventions, we file a PCT application. This gives you an additional 30 months to decide which countries you want to enter, effectively reserving your rights globally while you test the market or seek funding.
                    </p>
                  </div>
                </section>

                {/* Digital IP */}
                <section id="digital-ip" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital IP: Protecting Your Online Real Estate</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the digital age, your domain name and social media handles are as valuable as your storefront.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-4">
                    <li><strong>Domain Disputes (INDRP/UDRP):</strong> If a cyber-squatter registers `yourbrand.in` or `yourbrand.com` to extract money from you, we initiate arbitration proceedings under the .IN Domain Name Dispute Resolution Policy (INDRP) or UDRP to recover your domain swiftly.</li>
                    <li><strong>Social Media Takedowns:</strong> We handle infringement on platforms like Instagram, Facebook, and LinkedIn, using their IP reporting mechanisms to remove impersonator accounts and infringing content.</li>
                    <li><strong>App Store Protection:</strong> We assist in taking down clone apps from the Google Play Store and Apple App Store that violate your copyright or trademark.</li>
                  </ul>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement: Zero Tolerance for Counterfeits</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A registered right is only useful if enforced. Chandigarh's markets are occasionally infiltrated by counterfeit products. We take aggressive action to clean up the market.
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Our Enforcement Toolkit</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Cease & Desist Notices:</span>
                        <span>Often, a sternly worded legal notice on our letterhead is enough to make a small infringer stop, saving you litigation costs.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Civil Litigation:</span>
                        <span>We file suits for permanent injunction, damages, and rendition of accounts in the District Court or High Court. We seek interim relief to stop the infringer immediately while the case proceeds.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">Criminal Action:</span>
                        <span>Under Section 103 & 104 of the Trade Marks Act, trademark infringement is a cognizable offense. We liaise with the police to conduct raids, seize goods, and arrest the perpetrators without a warrant.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Startups */}
                <section id="startups" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Startups: Maximize Your Benefits</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chandigarh is witnessing a startup boom, supported by incubators at Panjab University and Chitkara University. The Government of India's **Startup India** initiative offers massive IP benefits that many founders miss out on.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-3">The SIPP Scheme Advantage</h3>
                    <p className="text-green-800 mb-4">
                      Under the *Startups Intellectual Property Protection (SIPP)* scheme, DPIIT-recognized startups get:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-green-800">
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>80% Fee Rebate</strong> on Patent filings (₹1,600 instead of ₹8,000).</li>
                        <li><strong>50% Fee Rebate</strong> on Trademark filings (₹4,500 instead of ₹9,000).</li>
                      </ul>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Expedited Examination:</strong> Fast-track patent grant in ~1 year instead of 4-5 years.</li>
                        <li><strong>Free Facilitation:</strong> The government pays the attorney fees for filing (you only pay statutory fees). We are eligible facilitators.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Myths vs Facts */}
                <section id="myths-vs-facts" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Busting Common IPR Myths</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-red-600 mb-2">Myth: "I registered my company name with MCA, so I own the trademark."</h3>
                      <p className="text-gray-700 text-sm"><strong>Fact:</strong> Company registration and Trademark registration are completely different. Owning "ABC Pvt Ltd" does not stop someone else from selling "ABC" brand shoes. Only a trademark gives you brand protection.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-red-600 mb-2">Myth: "IP is only for big tech companies."</h3>
                      <p className="text-gray-700 text-sm"><strong>Fact:</strong> Small businesses are most vulnerable. If a big competitor copies your name, you can't fight back without a registration. IP is a survival tool for MSMEs.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-red-600 mb-2">Myth: "I can change my trademark slightly to avoid infringement."</h3>
                      <p className="text-gray-700 text-sm"><strong>Fact:</strong> Courts look at "deceptive similarity." If your mark looks or sounds confusingly similar to a registered mark (e.g., "Starbux" vs "Starbucks"), you will still be liable for infringement.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-red-600 mb-2">Myth: "Patent protection is global."</h3>
                      <p className="text-gray-700 text-sm"><strong>Fact:</strong> IP rights are territorial. An Indian patent protects you only in India. You need separate filings for other countries.</p>
                    </div>
                  </div>
                </section>

                {/* Case Studies */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Scenarios</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Case Study 1: The Tech Pivot</h3>
                      <p className="text-gray-700">
                        A Chandigarh-based fintech startup developed a unique algorithm for credit scoring. They were about to pitch to VCs but hadn't protected their IP. We advised them to file a Provisional Patent immediately before the meeting. This secured their "Priority Date." When the VCs asked about IP, the founders could confidently say "Patent Pending," which played a crucial role in securing their seed funding.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Case Study 2: The Cafe Conflict</h3>
                      <p className="text-gray-700">
                        A popular cafe in Sector 10 discovered a new outlet in Mohali using a nearly identical logo and name. Since the Sector 10 cafe had a registered trademark, we sent a Cease & Desist notice. The Mohali outlet, realizing they had no legal standing, agreed to change their branding within 15 days to avoid litigation, saving our client the cost of a court battle.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner with AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    In the specialized field of Intellectual Property, experience matters. We offer a blend of local understanding and national expertise.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Registry Experts</h3>
                      <p className="text-gray-600">Our daily presence at the Delhi Registry ensures your file never gathers dust and objections are handled promptly.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="font-bold text-xl mb-2">Comprehensive Search</h3>
                      <p className="text-gray-600">We use advanced search tools to ensure your brand is truly unique before you spend a rupee on filing.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💼</div>
                      <h3 className="font-bold text-xl mb-2">Business First</h3>
                      <p className="text-gray-600">We advise on IP strategy that aligns with your business goals, not just legal theory.</p>
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
                        "We faced a tough trademark opposition from a multinational. AMA Legal Solutions fought our case at the New Delhi Registry with incredible tenacity. Their knowledge of case law won us the registration."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Gill</p>
                          <p className="text-sm text-gray-500">CEO, Gill Tech Solutions, IT Park</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a researcher at Panjab University, I needed guidance on patent filing. The team provided clear, step-by-step assistance and helped me secure my invention."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Dr. Simran Kaur</p>
                          <p className="text-sm text-gray-500">Research Fellow</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Protect Your Brand?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't leave your intellectual property vulnerable. Partner with Chandigarh's trusted IP experts today.
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
                    Get immediate assistance for trademark filing and objections in Chandigarh.
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

import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Delhi NCR | Top IP Lawyers",
  description:
    "Secure your IP in India's capital. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Delhi, Gurgaon & Noida. Litigation support at Delhi High Court.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/Delhi',
  },
  openGraph: {
    title: "Intellectual Property Rights in Delhi NCR | Top IP Lawyers",
    description: "Secure your IP in India's capital. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Delhi, Gurgaon & Noida. Litigation support at Delhi High Court.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/Delhi",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Delhi",
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
      "name": "Delhi",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/Delhi"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Delhi NCR: Protect Your Brand",
  "description": "Comprehensive guide to IPR protection in Delhi. Learn about trademark registration in Dwarka, patent filing, and IP litigation at the Delhi High Court.",
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
  "name": "IPR Services Delhi",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert intellectual property legal services in Delhi NCR.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1150"
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
        "name": "Vikram Singh"
      },
      "reviewBody": "We needed urgent injunction against a counterfeiter in Sadar Bazar. AMA Legal Solutions moved the Delhi High Court swiftly and got us a John Doe order in record time."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Sharma"
      },
      "reviewBody": "Excellent guidance for our fintech startup in Gurgaon. They handled our trademark and patent filings seamlessly."
    }
  ]
};

export default function DelhiIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "delhi-advantage", title: "The Delhi Advantage" },
    { id: "legal-framework", title: "Legal Framework & Courts" },
    { id: "industry-focus", title: "Industry-Specific Solutions" },
    { id: "registration-process", title: "Registration Process" },
    { id: "enforcement", title: "Enforcement & Litigation" },
    { id: "startups-government", title: "Government & Startup Support" },
    { id: "common-mistakes", title: "Common IP Mistakes" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Delhi", href: "/services/intellectual-property-rights/Delhi" },
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
              Secure Your Brand with <span className="text-[#D2A02A]">IPR Services in Delhi NCR</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From High Court litigation to Trademark filing in Dwarka. We provide premier legal protection for businesses in the heart of India.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property in the Capital: Power & Protection</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Delhi NCR is not just the political capital of India; it is a thriving hub of commerce, technology, and culture. From the bustling wholesale markets of Chandni Chowk to the high-tech corporate towers of Gurgaon and Noida, the region generates immense intellectual capital. However, being the center of trade also makes it a hotspot for counterfeiting and IP infringement.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Intellectual Property Rights (IPR)</strong> are your first line of defense. In a market as competitive as Delhi, your brand name, your unique designs, and your proprietary software are your most valuable assets. Protecting them is not optional; it's essential for survival.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we leverage our proximity to the <strong>Trademark Registry in Dwarka</strong> and the <strong>Delhi High Court</strong> to offer unmatched IP services. Whether you need to file a patent, fight a trademark objection, or raid a warehouse full of fakes, our specialized team in Delhi is ready to act.
                  </p>
                </section>

                {/* Delhi Advantage */}
                <section id="delhi-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Delhi Advantage: Why IP Matters Here</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Delhi is home to the Intellectual Property Division (IPD) of the High Court, making it the most progressive jurisdiction in India for IP litigation."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The National Capital Region (NCR) offers a unique ecosystem for IP owners:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Regulatory Headquarters</h3>
                      <p className="text-gray-600 mb-4">
                        Delhi houses the headquarters of key IP institutions.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Copyright Office:</strong> Located in Dwarka, handling all copyright filings for India.</li>
                        <li><strong>DPIIT:</strong> The policy-making body for IP is based here, giving us direct access to policy shifts.</li>
                        <li><strong>Plant Varieties Registry:</strong> Crucial for agricultural IP.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Startup Hub (Gurgaon/Noida)</h3>
                      <p className="text-gray-600 mb-4">
                        With India's highest concentration of unicorns, the demand for tech IP is massive.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Fintech & SaaS:</strong> Heavy reliance on software patents and trade secrets.</li>
                        <li><strong>E-commerce:</strong> Brand protection and domain dispute resolution.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Traditional Markets</h3>
                      <p className="text-gray-600 mb-4">
                        Old Delhi markets are hubs for both trade and infringement.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Textiles:</strong> Design registrations for fabrics in Chandni Chowk/Gandhi Nagar.</li>
                        <li><strong>Hardware/Auto Parts:</strong> Trademark enforcement in Kashmere Gate.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Publishing & Media</h3>
                      <p className="text-gray-600 mb-4">
                        Delhi is the center of India's publishing industry.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Daryaganj:</strong> Copyright protection for books and educational material.</li>
                        <li><strong>News Media:</strong> Protecting content and broadcasting rights.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework: The Power of Delhi Courts</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Delhi is arguably the best place in India to litigate IP disputes. The judicial infrastructure here is specialized and efficient.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Delhi High Court - IP Division (IPD)</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        In 2022, the Delhi High Court created a dedicated <strong>Intellectual Property Division</strong>. This was a game-changer.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li><strong>Specialized Judges:</strong> Cases are heard by judges with deep expertise in IP law, ensuring high-quality judgments.</li>
                        <li><strong>Speed:</strong> The IPD Rules ensure strict timelines, preventing cases from dragging on for years.</li>
                        <li><strong>Video Conferencing:</strong> The court is tech-savvy, allowing for hybrid hearings which saves time and costs.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. The Trade Marks Registry, Delhi</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Located at <strong>Sector 14, Dwarka</strong>.
                      </p>
                      <p className="text-gray-700">
                        <strong>Jurisdiction:</strong> It covers Delhi, Haryana, Punjab, HP, J&K, Chandigarh, and Uttarakhand.
                        <br />
                        <strong>Our Role:</strong> Our team visits the Dwarka registry regularly to follow up on files, attend hearings, and rectify clerical errors in applications.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Economic Offences Wing (EOW)</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        The Delhi Police EOW has a specialized section for IP crimes.
                      </p>
                      <p className="text-gray-700">
                        They are instrumental in conducting raids on factories manufacturing counterfeit goods in industrial areas like Okhla, Bawana, and Naraina. We coordinate with them to register FIRs and conduct search-and-seizure operations.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Industry Focus */}
                <section id="industry-focus" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tailored Solutions for Delhi NCR Industries</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🚀</span>
                        <h3 className="text-2xl font-bold text-gray-900">Startups (Gurgaon & Noida)</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the fast-paced startup ecosystem, we offer agile IP services.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Provisional Patents</h4>
                          <p>Filing quickly to secure a priority date for your invention before pitching to investors.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Founder Agreements</h4>
                          <p>Ensuring IP ownership stays with the company, not individual founders.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">📚</span>
                        <h3 className="text-2xl font-bold text-gray-900">Publishing & Education</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Protecting content in India's education capital.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Copyright Registration</h4>
                          <p>Securing rights for books, study materials, and online courses.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Anti-Piracy</h4>
                          <p>Taking down illegal PDF copies from websites and Telegram channels.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">👗</span>
                        <h3 className="text-2xl font-bold text-gray-900">Fashion & Textiles</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Safeguarding designs in a hub of fashion designers and textile markets.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Design Act Filing</h4>
                          <p>Protecting the unique patterns and cuts of garments.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Label Protection</h4>
                          <p>Trademarking your fashion label to prevent knock-offs in local markets.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration Process at TMR Delhi</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Filing in Delhi follows a structured path. Here is our workflow:
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Search & Opinion</h3>
                      <p className="text-gray-700">
                        We conduct a thorough search of the TMR database and common law usage in Delhi markets to assess registrability.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Filing (Jurisdiction: Delhi)</h3>
                      <p className="text-gray-700">
                        We file the application online. For Delhi-based entities, the appropriate office is the TMR in Dwarka.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Examination Response</h3>
                      <p className="text-gray-700">
                        If an objection is raised, we draft a legal reply citing relevant Delhi High Court precedents.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Hearing at Dwarka</h3>
                      <p className="text-gray-700">
                        Our attorneys attend the hearing at Boudhik Sampada Bhawan to argue for the acceptance of your mark.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Registration</h3>
                      <p className="text-gray-700">
                        Upon successful registration, you get the certificate, valid for 10 years.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement: Taking Action Against Infringers</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Delhi is a major transit point for goods, making it a critical location for enforcement.
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Legal Remedies We Pursue</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">1. John Doe Orders:</span>
                        <span>The Delhi High Court is famous for granting these orders against unknown infringers, allowing us to raid multiple locations simultaneously.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2. Local Commissioner Raids:</span>
                        <span>We petition the court to appoint a Local Commissioner who visits the infringer's premises (e.g., in Sadar Bazar or Nehru Place) to seize counterfeit stock.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">3. Customs Enforcement:</span>
                        <span>We record your IP with Customs at the Tughlakabad ICD (Inland Container Depot) to stop counterfeit imports.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Government Support */}
                <section id="startups-government" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Support for Delhi Startups</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The central government, through DPIIT (based in Delhi), offers significant support.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">SIPP Scheme</h3>
                      <p className="text-green-800 mb-2">Start-ups Intellectual Property Protection (SIPP) scheme benefits:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>80% Rebate</strong> on Patent filing fees.</li>
                        <li><strong>50% Rebate</strong> on Trademark filing fees.</li>
                        <li>Access to a panel of facilitators (like us) whose fees are borne by the government.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Delhi Startup Policy</h3>
                      <p className="text-green-800 mb-2">The Delhi government is actively fostering innovation.</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li>Incubation support.</li>
                        <li>Reimbursement of patent filing costs for college students and researchers.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common IP Mistakes in Delhi</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Jurisdiction</h3>
                        <p className="text-gray-700 text-sm">Filing in the wrong registry (e.g., filing in Mumbai when your office is in Delhi) can lead to application abandonment.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Delaying Action</h3>
                        <p className="text-gray-700 text-sm">In fast-moving markets like Nehru Place, delay means your design is copied by ten others. Immediate injunction is key.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Delhi?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine local presence with legal expertise.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Experts</h3>
                      <p className="text-gray-600">Proven track record in the Delhi High Court's IP Division.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📍</div>
                      <h3 className="font-bold text-xl mb-2">Local Presence</h3>
                      <p className="text-gray-600">Office in Delhi allows us to coordinate physically with the Registry and Police.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="font-bold text-xl mb-2">Startup Friendly</h3>
                      <p className="text-gray-600">Special packages for startups in Gurgaon and Noida.</p>
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
                        "We had a complex trademark dispute involving a similar brand in Okhla. AMA Legal Solutions represented us at the Dwarka Registry and got the opposition dismissed. Highly professional team."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rohan Malhotra</p>
                          <p className="text-sm text-gray-500">CEO, Malhotra Electronics, Delhi</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Best IP lawyers for startups in Gurgaon. They helped us patent our SaaS platform and guided us through the SIPP scheme benefits."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Swati Gupta</p>
                          <p className="text-sm text-gray-500">Founder, FinTech Solutions</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Intellectual Property in Delhi</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't leave your brand vulnerable. Partner with Delhi's top IP experts today.
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
                    Get immediate assistance for trademark filing and litigation in Delhi NCR.
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
